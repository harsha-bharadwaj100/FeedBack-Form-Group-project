from flask import Flask, redirect, request, render_template, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_TRACK_MADIFICATIONS'] = False
db = SQLAlchemy(app)

class TODO(db.Model):
    name = db.Column(db.String(100), primary_key=True)
    age = db.Column(db.Integer)
    email = db.Column(db.String(100))
    date = db.Column(db.String(100))
    rating = db.Column(db.Integer)
    msg = db.Column(db.String(1000))

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/save", methods=["POST"])
def add():
    data = request.get_json()
    print(data)
    newTodo = TODO(name=data['name'], age=data['age'], email=data['email'], date=data['date'], rating=data['rating'], msg=data['msg'])
    db.session.add(newTodo)
    db.session.commit()
    return "hi"

    # newTodo = TODO(title=title, complete=False)
    # db.session.add(newTodo)
    # db.session.commit()
    

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)