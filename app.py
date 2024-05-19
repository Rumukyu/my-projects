from flask import Flask, render_template, request, jsonify
from datetime import datetime
import json

app = Flask(__name__)

# 仮の予約データ
reservations = {
    "2024-01-01": "予約1",
    "2024-02-15": "予約2",
    "2024-03-20": "予約3",
    # ここに他の予約も追加します
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/admin')
def admin():
    # 月ごとに予約をグループ化
    grouped_reservations = {}
    for date_str in reservations.keys():
        date = datetime.strptime(date_str, "%Y-%m-%d")
        month = date.strftime("%Y年%m月")
        if month not in grouped_reservations:
            grouped_reservations[month] = []
        grouped_reservations[month].append(date_str)
    
    return render_template('admin.html', reservations=grouped_reservations)

@app.route('/reserve', methods=['POST'])
def reserve():
    data = request.json
    date = data['date']
    if date in reservations:
        return jsonify({"status": "error", "message": "既に予約されています。"})
    reservations[date] = "新しい予約"
    return jsonify({"status": "success", "message": "予約が完了いたしました。"})

@app.route('/delete_reservation', methods=['POST'])
def delete_reservation():
    data = request.json
    date = data['date']
    if date in reservations:
        del reservations[date]
        return jsonify({"status": "success", "message": "予約が削除されました。"})
    return jsonify({"status": "error", "message": "予約が見つかりません。"})

if __name__ == '__main__':
    app.run(debug=True)
