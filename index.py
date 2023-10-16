from flask import Flask, redirect, request, render_template, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_TRACK_MADIFICATIONS'] = False
db = SQLAlchemy(app)

class Base(db.Model):
    name = db.Column(db.String(100), primary_key=True)
    age = db.Column(db.Integer)
    email = db.Column(db.String(100))
    visit_frequency = db.Column(db.String(100))
    first_learnt = db.Column(db.String(100))
    last_purchased_product = db.Column(db.String(100))
    date = db.Column(db.String(100))
    met_expectations = db.Column(db.String(100))
    issues = db.Column(db.String(100))
    reccomendability = db.Column(db.String(100))
    rating = db.Column(db.Integer)
    msg = db.Column(db.String(1000))

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/save", methods=["POST"])
def add():
    data = request.get_json()
    print(data)
    new = Base(name=data['name'],
                    age=data['age'],
                    email=data['email'],
                    visit_frequency=data['visit'],
                    first_learnt=data['learnt'],
                    last_purchased_product=data['product'],
                    date=data['date'],
                    met_expectations = data['expectations'],
                    issues = data['issues'],
                    reccomendability = data['reccomend'],
                    rating=data['rating'],
                    msg=data['msg'])
    db.session.add(new)
    db.session.commit()
    return "hi"    

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)