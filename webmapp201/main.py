from flask import Flask, render_template, url_for
import pandas as pd
from sklearn.cluster import KMeans

app = Flask(__name__)

@app.route("/")
def home():

    df= pd.read_csv("webmapp201/static/school_locations.csv")
    data = df[["xcoord", "ycoord"]]
    k = 5

    kmeans = KMeans(n_init=20, n_clusters=k, random_state=0)
    df["cluster"] = kmeans.fit_predict(data)

    points = df.to_dict(orient="records")

    cluster_colors = ["red", "pink", "blue", "orange", "purple", "yellow"]
    icons = {str(i): url_for('static', filename=f'cluster{cluster_colors[i]}.svg') for i in range(k)}

    return render_template("index.html", points=points, icons=icons)
    
if __name__ == "__main__":
    app.run(debug=True)

