from flask import Flask, render_template, jsonify, redirect
from flask_pymongo import PyMongo
import pymongo
import scrape_mars

app = Flask(__name__)

mongo = PyMongo(app)

conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)
db = client.current_mars_info
collection = db.mars_info

@app.route("/")
def index():
    #mars = mongo.db.mars.find_one()
    return render_template("index.html")


@app.route("/scrape")
def scrape():
    mars = mongo.db.mars_info
    data = scrape_mars.scrape()
    mars.update(
       {},
       data,
       upsert=True
    )
    return redirect("http://localhost:5000/", code=302)


if __name__ == "__main__":
    app.run(debug=True)