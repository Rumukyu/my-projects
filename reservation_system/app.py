from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# 予約を保持する辞書
reservations = {}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/admin')
def admin():
    return render_template('admin.html', reservations=reservations)

@app.route('/reserve', methods=['POST'])
def reserve():
    data = request.get_json()
    date = data['date']

    # 予約が既に存在するか確認
    if reservations.get(date):
        return jsonify({'status': 'error', 'message': 'その日は既に予約が埋まっています。'})
    
    # 予約を保存
    reservations[date] = True
    return jsonify({'status': 'success', 'message': '予約が完了いたしました。'})

@app.route('/delete_reservation', methods=['POST'])
def delete_reservation():
    data = request.get_json()
    date = data['date']
    
    if reservations.get(date):
        del reservations[date]
        return jsonify({'status': 'success', 'message': '予約が削除されました。'})
    
    return jsonify({'status': 'error', 'message': '指定された予約は存在しません。'})

if __name__ == '__main__':
    app.run(debug=True)
