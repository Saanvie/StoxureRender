import React, { useEffect, useState } from "react";
import "./News.css";

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=stock%20market&language=en&pageSize=3&apiKey=4517aee3b72f4e4e8f8a40afa6c9a8b8`
        );
        const data = await res.json();
        if (data.status === "ok") {
          setArticles(data.articles);
        } else {
          setError("Failed to load news.");
        }
      } catch (e) {
        setError("Failed to fetch news data.");
      }
      setLoading(false);
    };

    fetchNews();
  }, []);

  return (
    <section className="news-home border-bottom">
      <div className="container py-5 border-top">
        <h3 className="fw-bold text-center mb-4">Latest Market News</h3>
        <div className="row p-3 mt-5">
          {loading && (
            <div className="text-center">
              <p>Loading news...</p>
            </div>
          )}

          {error && (
            <div className="text-center text-danger">
              <p>{error}</p>
            </div>
          )}

          {!loading &&
            !error &&
            articles.map((article, index) => (
              <div className="col-12 col-md-4" key={index}>
                <div className="news-card h-100 d-flex flex-column">
                  {article.urlToImage && (
                    <img
                      src={article.urlToImage}
                      alt={article.title}
                      className="img-fluid mb-3 news-image"
                    />
                  )}
                  <h5 className="fw-bold">{article.title}</h5>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-stoxure mt-auto"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default News;
