import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import "./NewPage.css";
const Breadcrumb = () => {
  return (
    <div className="link">
      <Link to="/">Trang chủ</Link>
      <span> / </span>
      <Link to="/tintuc">Tin Tức</Link>
    </div>
  );
};
export default function AllNews() {
  const [news, setNews] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/QuanLyTinTuc/LayTatCaTinTuc")
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the news!", error);
      });

    // Fetch movies
    axios
      .get("http://localhost:4000/api/QuanLyPhim/LayDanhSachPhim")
      .then((response) => {
        setMovies(response.data.slice(0, 3));
      })
      .catch((error) => {
        console.error("There was an error fetching the movies!", error);
      });
  }, []);

  const filteredNews = news.filter((item) => {
    switch (filter) {
      case "All":
        return true;
      case "Reviews":
        return item.tieude.includes("[Review]");
      case "News":
        return !item.tieude.includes("[Review]");
      default:
        return true;
    }
  });

  return (
    <>
      <Breadcrumb />
      <div className="news-page-container" style={{ margin: "80px" }}>
        <div className="filter-buttons mb-3">
          <Button
            variant="contained"
            style={{ backgroundColor: "#ee823b", color: "white" }}
            onClick={() => setFilter("All")}
          >
            All
          </Button>
          <Button
            variant="contained"
            onClick={() => setFilter("Reviews")}
            style={{
              backgroundColor: "#ee823b",
              color: "white",
              margin: "0 10px",
            }}
          >
            Reviews
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "#ee823b", color: "white" }}
            onClick={() => setFilter("News")}
          >
            News
          </Button>
        </div>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <div className="news-list">
              {filteredNews.map((newsItem, index) => (
                <div key={index} className="news-item">
                  <Link to={`/news/${newsItem.id}`}>
                    <img
                      src={newsItem.hinhAnh}
                      alt={newsItem.tieude}
                      className="news-image"
                    />
                    <div className="news-content">
                      <h3>{newsItem.tieude}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className="movies-sidebar" style={{ padding: "20px" }}>
              <h4 style={{ color: "#ee823b" }}>Phim Đang Chiếu</h4>
              {movies.map((movie, index) => (
                <Link
                  key={index}
                  to={`/detail/${movie.maPhim}`}
                  className="movie-item"
                >
                  <img
                    src={movie.hinhAnh}
                    alt={movie.tenPhim}
                    style={{
                      width: "100%",
                      height: "auto",
                      marginBottom: "10px",
                    }}
                  />
                  <h5 style={{ color: "white" }}>{movie.tenPhim}</h5>
                </Link>
              ))}
              <Link
                to="/phimdangchieu"
                className="btn btn-primary"
                style={{ marginTop: "10px", display: "block" }}
              >
                Xem Thêm <NavigateNextIcon />
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
