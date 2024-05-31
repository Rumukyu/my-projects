from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    projects = [
        {
            "title": "プロジェクトタイトル",
            "summary": "プロジェクト概要",
            "budget": "¥100,000",
            "deadline": "2022/12/31",
            "image": "https://placehold.co/400x200"
        },
        # 他のプロジェクト情報をここに追加
    ]
    return render_template('index.html', projects=projects)

if __name__ == '__main__':
    app.run(debug=True)
