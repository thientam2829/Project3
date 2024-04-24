import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
  IconButton,
  Button,
} from "@material-ui/core";
import * as yup from "yup";
import Rating from "@material-ui/lab/Rating";
import CircularProgress from "@material-ui/core/CircularProgress";
import CreateRoundedIcon from "@material-ui/icons/CreateRounded";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ThumbsUpDownTwoToneIcon from "@material-ui/icons/ThumbsUpDownTwoTone";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import CloseIcon from "@material-ui/icons/Close";
import { Formik, Field } from "formik";
import { useLocation } from "react-router-dom";
import "./style.css";
import useStyles from "./style";
import formatDate from "../../../utilities/formatDate";
import useApiThoiLuongDanhGia from "../../../utilities/useApiThoiLuongDanhGia";
import Tap from "../Tap";
import { useDispatch } from "react-redux";
import { OPEN_MODAL } from "../../../reducers/constants/ModalTrailer";
import ConfirmationNumberTwoToneIcon from "@material-ui/icons/ConfirmationNumberTwoTone";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { formatDistanceToNow } from "date-fns";
import { useEffect } from "react";
import { ErrorMessage } from "formik";
import moviesApi from "../../../api/moviesApi";
const phanLoaiImages = {
  K: "https://res.cloudinary.com/thientam2829/image/upload/v1712215919/zxdfisgfqftyz9ww3jht.jpg",
  P: "https://res.cloudinary.com/thientam2829/image/upload/v1712215919/aycnuu1ywue6dky5jgqy.png",
  T13: "https://res.cloudinary.com/thientam2829/image/upload/v1712215919/hshdxztahqcwkg94dg3t.png",
  T16: "https://res.cloudinary.com/thientam2829/image/upload/v1712215919/j143mnq0r8cfgv2qwcly.png",
  T18: "https://res.cloudinary.com/thientam2829/image/upload/v1712215919/j2zoijbegsdpdfuk5gr6.png",
};
const reviewValidationSchema = yup.object().shape({
  hoTen: yup.string().required("Tên không được bỏ trống"),
  email: yup
    .string()
    .email("Email không hợp lệ")
    .required("Email không được bỏ trống"),
  noiDung: yup
    .string()
    .required("Nội dung không được bỏ trống")
    .min(10, "Nội dung phải có ít nhất 10 ký tự"),
  soSao: yup
    .number()
    .required("Số sao không được bỏ trống")
    .min(1, "Số sao không hợp lệ")
    .max(10, "Số sao không hợp lệ"),
});
export default function Desktop({ movieDetailShowtimes: data, isMobile }) {
  const [onClickBtnMuave, setOnClickBtnMuave] = useState(0);
  const param = useParams();
  const { maPhim } = useParams();
  const [quantityComment, setQuantityComment] = useState(0);
  const { thoiLuong } = useApiThoiLuongDanhGia(param.maPhim);
  const classes = useStyles({ bannerImg: data?.hinhAnh });
  const [imagePage404, setImagePage404] = useState(false);
  let location = useLocation();
  const [openComment, setOpenComment] = useState(false);
  const [dataComment, setDataComment] = useState({
    hoTen: "",
    email: "",
    soSao: 0,
    noiDung: "",
  });

  const sensitiveWords = ["chó", "vl", "Đm", "đm", "đcm", "vailz", "Đcm"];
  const checkForSensitiveWords = (content) => {
    const foundSensitiveWords = sensitiveWords.filter((word) =>
      content.includes(word)
    );
    return foundSensitiveWords.length > 0;
  };
  const handleBtnMuaVe = () => {
    setOnClickBtnMuave(Date.now());
  };
  const onIncreaseQuantityComment = (value) => {
    setQuantityComment(value);
  };
  const dispatch = useDispatch();
  const handleOpenCommentDialog = () => setOpenComment(true);
  const handleCloseCommentDialog = () => {
    setOpenComment(false);
  };
  const handleTyping = (event) =>
    setDataComment((prev) => ({ ...prev, post: event.target.value }));
  const openModal = () => {
    dispatch({
      type: OPEN_MODAL,
      payload: {
        open: true,
        urlYoutube: data.trailer,
      },
    });
  };
  const handleSubmitReview = async (values, { setSubmitting }) => {
    if (checkForSensitiveWords(values.noiDung)) {
      alert(
        "Nội dung đánh giá của bạn chứa từ ngữ không phù hợp. Vui lòng chỉnh sửa lại."
      );
      setSubmitting(false);
      return;
    }
    try {
      await moviesApi.themDanhGia({
        hoTen: values.hoTen,
        email: values.email,
        maPhim: maPhim,
        soSao: values.soSao,
        noiDung: values.noiDung,
      });
      alert("Đánh giá của bạn đã được gửi thành công!");
      handleCloseCommentDialog();
    } catch (error) {
      console.error("Lỗi khi gửi đánh giá:", error);
      alert("Có lỗi xảy ra khi gửi đánh giá. Vui lòng thử lại.");
    }

    setSubmitting(false);
  };
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await moviesApi.layDanhGiaTheoMaPhim(maPhim);
        setReviews(response.data);
        const ratings = response.data.map((review) => review.soSao);
        const totalRatings = ratings.reduce((acc, rating) => acc + rating, 0);
        const average = totalRatings / ratings.length;
        setTotalReviews(response.data.length);
        setAverageRating(average);
      } catch (error) {
        console.error("Lỗi khi lấy đánh giá:", error);
      }
    };

    fetchReviews();
  }, [maPhim]);
  const [displayCount, setDisplayCount] = useState(3);
  const handleShowMoreReviews = () => {
    setDisplayCount((prevCount) => prevCount + 5);
  };
  const [reviews, setReviews] = useState([]);
  return (
    <div className="">
      <div className="wrapperFlex">
        <div className="flexCent">
          <div className="items">
            <img
              src={data.hinhAnh}
              alt="poster"
              onError={(e) => {
                e.target.onerror = null;
                setImagePage404(true);
              }}
            />
            {imagePage404 && <div className={classes.withOutImage}></div>}
          </div>

          <div className="items">
            <div className="name">
              <p
                style={{
                  color: "rgb(238, 130, 59)",
                  fontSize: "35px",
                  fontWeight: "bolder",
                }}
              >
                {data.tenPhim}
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    fontSize: "2rem",
                    color: "rgb(238, 130, 59)",
                    marginRight: 8,
                  }}
                >
                  ★
                </span>
                <span
                  style={{
                    marginLeft: 8,
                    fontWeight: "bold",
                    fontSize: "25px",
                    color: "rgb(238, 130, 59)",
                  }}
                >
                  {totalReviews > 0 ? averageRating.toFixed(1) + "/10" : "0/10"}
                </span>
                <span
                  style={{
                    marginLeft: 8,
                    fontSize: "15px",
                    color: "#666",
                  }}
                >
                  ({totalReviews} lượt đánh giá)
                </span>
              </div>
            </div>

            <div className="">
              <div className="row">
                <p className={`col-lg-3`}>Ngày công chiếu</p>
                <p className={`col-lg-3`}>
                  {formatDate(data.ngayKhoiChieu?.slice(0, 10)).YyMmDd}
                </p>
              </div>
              <div className="row">
                <p className={`col-lg-3`}>Phân Loại</p>
                <div className={`col-lg-9`}>
                  {data.phanLoai && phanLoaiImages[data.phanLoai] ? (
                    <img
                      src={phanLoaiImages[data.phanLoai]}
                      alt={`Phân loại ${data.phanLoai}`}
                      style={{ maxWidth: "35px", height: "auto" }}
                    />
                  ) : (
                    <p>Không có dữ liệu</p>
                  )}
                </div>
              </div>

              <div className="row">
                <p className={`col-lg-3`}>Đạo diễn</p>
                <p className={`col-lg-9`}> {data.daoDien} </p>
              </div>
              <div className="row">
                <p className={`col-lg-3`}>Diễn viên</p>
                <p className={`col-lg-9`}>{data.dienVien}</p>
              </div>
              <div className="row">
                <p className={`col-lg-3`}>Thể Loại</p>
                <p className={`col-lg-9`}>{data.theLoai}</p>
              </div>
              <div className="row">
                <p className={`col-lg-3`}>Định dạng</p>
                <p className={`col-lg-3`}>{data.dinhDang}</p>
              </div>

              <div className="row">
                <p className={`col-lg-3`}>Quốc Gia</p>
                <p className={`col-lg-3`}>{data.quocGia}</p>
              </div>
              <div className="row">
                <p className={`col-lg-3`}>Thời lượng</p>
                <p className={`col-lg-3`}>{thoiLuong} phút</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <p className={``}>Nội dung</p>
              </div>
              <div className="col-lg-9">
                <p
                  style={{
                    textAlign: "justify",
                  }}
                >
                  {data.moTa}
                </p>
              </div>
            </div>

            <div className={classes.shortInfo}>
              <Button
                className={classes.btnMuaVe}
                variant="contained"
                color="primary"
                onClick={handleBtnMuaVe}
                startIcon={<ConfirmationNumberTwoToneIcon />}
              >
                {location.state?.comingMovie ? "Thông tin phim" : "Mua vé"}
              </Button>
              <Button
                className={classes.btnMuaVe}
                variant="contained"
                color="secondary"
                onClick={openModal}
                startIcon={<PlayCircleOutlineIcon />}
              >
                {location.state?.comingMovie ? "Thông tin phim" : "Xem trailer"}
              </Button>
              <Button
                className={classes.btnMuaVe}
                variant="contained"
                onClick={() => {
                  document
                    .getElementById("section-reviews")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                startIcon={<ThumbsUpDownTwoToneIcon />}
              >
                Đánh Giá
              </Button>
            </div>

            <Dialog
              open={openComment}
              onClose={handleCloseCommentDialog}
              maxWidth="sm"
              fullWidth
            >
              <IconButton
                aria-label="close"
                onClick={handleCloseCommentDialog}
                style={{ position: "absolute", right: "8px", top: "8px" }}
              >
                <CloseIcon />
              </IconButton>
              <Formik
                initialValues={{
                  hoTen: "",
                  email: "",
                  noiDung: "",
                  soSao: 1,
                }}
                validationSchema={reviewValidationSchema}
                onSubmit={handleSubmitReview}
              >
                {({
                  values,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  setFieldValue,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <DialogContent>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            name="hoTen"
                            label="Họ và Tên"
                            fullWidth
                            variant="outlined"
                          />
                          <ErrorMessage
                            name="hoTen"
                            component="div"
                            className="alert alert-danger"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            name="email"
                            label="Email"
                            fullWidth
                            variant="outlined"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="alert alert-danger"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            name="noiDung"
                            label="Nói cho mọi người biết bạn nghĩ gì về phim này..."
                            fullWidth
                            variant="outlined"
                            multiline
                            rows={4}
                          />
                          <ErrorMessage
                            name="noiDung"
                            component="div"
                            className="alert alert-danger"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <p>Xếp hạng:</p>
                          <Rating
                            name="soSao"
                            value={values.soSao}
                            onChange={(event, newValue) => {
                              setFieldValue("soSao", newValue);
                            }}
                            emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            max={10}
                            precision={1}
                          />
                        </Grid>
                        <ErrorMessage
                          name="soSao"
                          component="div"
                          className="alert alert-danger"
                        />
                      </Grid>
                    </DialogContent>
                    <DialogActions>
                      <Button
                        onClick={handleCloseCommentDialog}
                        color="primary"
                      >
                        Hủy
                      </Button>
                      <Button
                        type="submit"
                        color="primary"
                        disabled={isSubmitting}
                      >
                        Gửi Đánh Giá
                      </Button>
                    </DialogActions>
                  </form>
                )}
              </Formik>
            </Dialog>
          </div>
        </div>
      </div>
      <Tap
        data={data}
        onClickBtnMuave={onClickBtnMuave}
        onIncreaseQuantityComment={onIncreaseQuantityComment}
        isMobile={isMobile}
      />
      <div id="section-reviews">
        <div className="container mt-4">
          <span
            class="MuiTab-wrapper"
            style={{
              color: "rgb(238, 130, 59) ",
              fontSize: "18px",
              fontWeight: "500",
              marginBottom: "30px",
            }}
          >
            ĐÁNH GIÁ
          </span>
          <Button
            variant="outlined"
            style={{
              marginBottom: "1rem",
              borderColor: "rgb(238, 130, 59)",
              color: "rgb(238, 130, 59)",
            }}
            onClick={handleOpenCommentDialog}
          >
            <CreateRoundedIcon /> Viết đánh giá
          </Button>
          {reviews.length > 0 ? (
            reviews.slice(0, displayCount).map((review, index) => (
              <div key={index} className="col-12 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="makeStyles-text__second-364">
                      {review.hoTen}
                    </h5>
                    <small className="text-muted ml-auto">
                      {formatDistanceToNow(new Date(review.thoiGian), {
                        addSuffix: true,
                      })}
                    </small>
                    <div className="d-flex align-items-center">
                      <span
                        style={{
                          fontSize: "2rem",
                          color: "rgb(238, 130, 59)",
                          marginRight: 8,
                        }}
                      >
                        ★
                      </span>
                      <span className="ml-8">{`${review.soSao}/10`}</span>
                    </div>
                    <p className="card-text">{review.noiDung}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center" style={{ color: "lightgray" }}>
              Chưa có đánh giá nào.
            </p>
          )}
          {reviews.length > 0 && displayCount < reviews.length && (
            <Button
              variant="contained"
              color="primary"
              onClick={handleShowMoreReviews}
            >
              <ExpandMoreRoundedIcon /> Xem thêm đánh giá
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
