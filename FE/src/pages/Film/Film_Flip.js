import React, { useState, useEffect } from "react";
import "./Film_Flip.css";
import axios from "axios";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/QuanLyPhim/LayDanhSachPhim`
      );

      const moviesWithDateObjects = response.data.map((movie) => {
        // Assuming ngayKhoiChieu is in the format dd/mm/yyyy, converting it to yyyy/mm/dd
        const [day, month, year] = movie.ngayKhoiChieu.split("/");
        const correctDateFormat = `${year}-${month}-${day}`;

        return {
          ...movie,
          ngayKhoiChieuDate: new Date(correctDateFormat),
        };
      });

      const sortedMovies = moviesWithDateObjects.sort(
        (a, b) => b.ngayKhoiChieuDate - a.ngayKhoiChieuDate
      );
      const latestMovies = sortedMovies.slice(0, 8);

      // Set the state with only the necessary fields to avoid changing the original movie data structure
      setMovies(latestMovies.map(({ ngayKhoiChieuDate, ...rest }) => rest));
    } catch (error) {
      console.error("Failed to fetch movies data:", error);
    }
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);

  return (
    <div className="filmcard" id="phimdangchieu">
      <h4 className="movie-header">Phim đang chiếu</h4>
      <div
        className="movies-list"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.maPhim}
            className="movie-card"
            style={{ margin: "10px" }}
          >
            <div className="movie-card-inner">
              <div className="movie-card-front">
                <img src={movie.hinhAnh} alt={movie.tenPhim} />
              </div>
              <div className="movie-card-back">
                <h3>{movie.tenPhim}</h3>
              </div>
            </div>
            <div className="movie-card-footer">
              <Link to={`/detail/${movie.maPhim}`} className="btn btn-primary">
                Chi Tiết
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="see-more-button">
        <Link to="/phimdangchieu" className="btn btn-secondary">
          Xem Thêm <NavigateNextIcon />
        </Link>
      </div>
    </div>
  );
}
