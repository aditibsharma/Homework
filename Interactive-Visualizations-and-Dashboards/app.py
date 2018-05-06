import datetime as dt
import numpy as np
import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################
from flask_sqlalchemy import SQLAlchemy
# The database URI

# Will set variable to the environment variable, DATABASE_URI, if it exists. Else, it sets to our dev database
db_uri = os.getenv("DATABASE_URI", "sqlite:///belly_button_biodiversity.sqlite")

engine = create_engine(db_uri)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

# Save references to each table
Bellybutton = Base.classes.bellybutton

# Create our session (link) from Python to the DB
session = Session(engine)

# Create database tables
@app.before_first_request
def setup():
    # Recreate database each time for demo
    # db.drop_all()
    db.create_all()

#################################################
# Flask Routes
#################################################

    @app.route("/")
    def home():
    """Return the dashboard homepage."""
    return render_template("index.html")


 @app.route("/names")
 def name_list():
    """List of sample names."""
return render_template()

@app.route('/otu')
def OTU_list():
    """List of OTU descriptions.'''

@app.route('/metadata/<sample>')
def metadata():
    """MetaData for a given sample.

@app.route('/wfreq/<sample>')
    """Weekly Washing Frequency as a number.


@app.route('/samples/<sample>')
    """OTU IDs and Sample Values for a given sample
    # query for the top 10 emoji data
    results = db.session.query(Emoji.emoji_char, Emoji.score).\
        order_by(Emoji.score.desc()).\
        limit(10).all()

    # Select the top 10 query results
    emoji_char = [result[0] for result in results]
    scores = [int(result[1]) for result in results]

    # Generate the plot trace
    plot_trace = {
        "x": emoji_char,
        "y": scores,
        "type": "bar"
    }
    return jsonify(plot_trace)



@app.route("/emoji_id")
def emoji_id_data():
    """Return emoji score and emoji id"""

    # query for the emoji data using pandas
    query_statement = db.session.query(Emoji).\
    order_by(Emoji.score.desc()).\
    limit(10).statement
    df = pd.read_sql_query(query_statement, db.session.bind)
    
    # Format the data for Plotly
    plot_trace = {
            "x": df["emoji_id"].values.tolist(),
            "y": df["score"].values.tolist(),
            "type": "bar"
    }
    return jsonify(plot_trace)

@app.route("/emoji_name")
def emoji_name_data():
    """Return emoji score and emoji name"""

    # query for the top 10 emoji data
    results = db.session.query(Emoji.name, Emoji.score).\
        order_by(Emoji.score.desc()).\
        limit(10).all()
    df = pd.DataFrame(results, columns=['name', 'score'])

    # Format the data for Plotly
    plot_trace = {
            "x": df["name"].values.tolist(),
            "y": df["score"].values.tolist(),
            "type": "bar"
    }
    return jsonify(plot_trace)

if __name__ == '__main__':
    app.run(debug=True)
