import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import "./style.css";
import { OPEN_MODAL } from "../../reducers/constants/ModalTrailer";
import { useDispatch } from "react-redux";
import ConfirmationNumberTwoToneIcon from "@material-ui/icons/ConfirmationNumberTwoTone";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import moviesApi from "../../api/moviesApi";
import ScrollToTopOnPathChange from "../../components/Scroll";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  movieCardFooter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btnMuaVe: {
    margin: theme.spacing(1),
    textTransform: "none",
  },
  formControl: {
    backgroundColor: "rgba(255,255,255)",
    borderRadius: theme.shape.borderRadius,
    minWidth: 300,
    marginLeft: "10px",
    border: "2px solid black",
  },
  detail: { display: "inline-block" },
}));

const Breadcrumb = () => {
  const history = useHistory();
  return (
    <div className="link">
      <Link to="/">Trang chủ</Link>
      <span> / </span>
      <Link to="/phimdangchieu">Phim đang chiếu</Link>
    </div>
  );
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedPhanLoai, setSelectedPhanLoai] = useState("");
  const [selectedQuocGia, setSelectedQuocGia] = useState("");
  const [selectedTheLoai, setSelectedTheLoai] = useState("");

  const classes = useStyles();
  const dispatch = useDispatch();

  const fetchMoviesData = async () => {
    try {
      const response = await moviesApi.getDanhSachPhim();
      // Sort movies by release date, newest first
      const sortedMovies = response.data.sort(
        (a, b) => new Date(b.ngayKhoiChieu) - new Date(a.ngayKhoiChieu)
      );
      setMovies(sortedMovies);
    } catch (error) {
      console.error("Failed to fetch movies data:", error);
    }
  };

  useEffect(() => {
    fetchMoviesData();
  }, []);

  const handleQuocGiaChange = (event) => {
    setSelectedQuocGia(event.target.value);
  };

  const handleTheLoaiChange = (event) => {
    setSelectedTheLoai(event.target.value);
  };

  const openModal = (urlYoutube) => {
    dispatch({
      type: OPEN_MODAL,
      payload: {
        open: true,
        urlYoutube: urlYoutube,
      },
    });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      (selectedPhanLoai === "" || movie.phanLoai === selectedPhanLoai) &&
      (selectedQuocGia === "" || movie.quocGia === selectedQuocGia) &&
      (selectedTheLoai === "" || movie.theLoai.includes(selectedTheLoai))
  );

  return (
    <>
      <ScrollToTopOnPathChange />
      <Breadcrumb />
      <div className={classes.detail}>
        <FormControl className={classes.formControl}>
          <InputLabel>Phân Loại</InputLabel>
          <Select
            value={selectedPhanLoai}
            onChange={(e) => setSelectedPhanLoai(e.target.value)}
          >
            <MenuItem value="">
              <em>Tất cả</em>
            </MenuItem>
            <MenuItem value="K">K - Kid</MenuItem>
            <MenuItem value="P">P - General</MenuItem>
            <MenuItem value="T13">T13 - Teen 13+</MenuItem>
            <MenuItem value="T16">T16 - Teen 16+</MenuItem>
            <MenuItem value="T18">T18 - Adult</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Quốc Gia</InputLabel>
          <Select value={selectedQuocGia} onChange={handleQuocGiaChange}>
            <MenuItem value="">
              <em>Tất cả</em>
            </MenuItem>
            {movies
              .map((movie) => movie.quocGia)
              .filter((value, index, self) => self.indexOf(value) === index)
              .map((quocGia) => (
                <MenuItem key={quocGia} value={quocGia}>
                  {quocGia}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Thể Loại</InputLabel>
          <Select value={selectedTheLoai} onChange={handleTheLoaiChange}>
            <MenuItem value="">
              <em>Tất cả</em>
            </MenuItem>
            {movies
              .map((movie) => movie.theLoai)
              .flat()
              .filter((value, index, self) => self.indexOf(value) === index)
              .map((theLoai) => (
                <MenuItem key={theLoai} value={theLoai}>
                  {theLoai}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      <div className="line"></div>
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <div key={movie.maPhim} className="movie-card">
            <img
              src={movie.hinhAnh}
              alt={movie.tenPhim}
              className="movie-poster"
            />
            <h3 className="movie-title">{movie.tenPhim}</h3>
            <div className={classes.movieCardFooter}>
              <Button
                component={Link}
                to={`/detail/${movie.maPhim}`}
                className={classes.btnMuaVe}
                variant="contained"
                color="primary"
                startIcon={<ConfirmationNumberTwoToneIcon />}
              >
                Mua Vé
              </Button>
              <Button
                className={classes.btnMuaVe}
                variant="contained"
                color="secondary"
                onClick={() => openModal(movie.trailer)}
                startIcon={<PlayCircleOutlineIcon />}
              >
                Xem Trailer
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
