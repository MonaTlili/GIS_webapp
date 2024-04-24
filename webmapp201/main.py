from flask import Flask, render_template, url_for
import pandas as pd
from sklearn.cluster import KMeans

app = Flask(__name__)

@app.route("/")
def home():

    df= pd.read_csv("webmapp201/static/school_locations.csv")
    data = df[["xcoord", "ycoord"]]
    k = 6

    kmeans = KMeans(n_init=20, n_clusters=k, random_state=0)
    df["cluster"] = kmeans.fit_predict(data)
    centroids = kmeans.cluster_centers_

    points = df.to_dict(orient="records")
    cluster_centroids = [{"xcoord": center[0], "ycoord": center[1], "clusterId": i} for i, center in enumerate(centroids)]

    cluster_colors = ["red", "pink", "blue", "orange", "purple", "yellow"]
    icons = {str(i): url_for('static', filename=f'/src/icons/cluster{cluster_colors[i]}.svg') for i in range(k)}

    return render_template("index.html", points=points, icons=icons, centroids=cluster_centroids)
    
if __name__ == "__main__":
    app.run(debug=True)

