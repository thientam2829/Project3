import React, { useState } from "react";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { ThemeProvider } from "@material-ui/styles";
import FormControl from "@material-ui/core/FormControl";
import { materialTheme } from "./styles";
import { useStyles } from "./styles";

export default function FormInput({ selectedPhim, onUpdate, onAddMovie }) {
  const classes = useStyles();
  const [srcImage, setSrcImage] = useState(selectedPhim?.hinhAnh);

  const setThumbnailPreviews = (e) => {
    let file = e.target;
    var reader = new FileReader();
    reader.readAsDataURL(file.files[0]);
    reader.onload = function () {
      setSrcImage(reader.result);
    };
  };

  const movieSchema = yup.object().shape({
    tenPhim: yup.string().required("*Không được bỏ trống!"),
    trailer: yup
      .string()
      .required("*Không được bỏ trống!")
      .matches(
        /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
        "*Sai link youtube"
      ),
    hinhAnh: yup.string().required("*Chưa chọn hình!"),
    moTa: yup
      .string()
      .required("*Không được bỏ trống!")
      .min(50, "Mô tả cần 50 ký tự trở lên!"),
    daoDien: yup.string().required("*Không được bỏ trống!"),
    dienVien: yup.string().required("*Không được bỏ trống!"),
    quocGia: yup.string().required("*Không được bỏ trống!"),
    theLoai: yup.string().required("*Không được bỏ trống!"),
    dinhDang: yup.string().required("*Không được bỏ trống!"),
    phanLoai: yup.string().required("*Không được để trống!"),
    ngayKhoiChieu: yup.string().required("*Chưa chọn ngày!"),
  });

  const handleSubmit = (movieObj) => {
    let hinhAnh = movieObj.hinhAnh;
    let fakeImage = { srcImage, maPhim: movieObj.maPhim };
    movieObj = {
      ...movieObj,
      ngayKhoiChieu: movieObj.ngayKhoiChieu.toLocaleDateString("en-GB"),
      daoDien: movieObj.daoDien, // Thêm đạo diễn
      dienVien: movieObj.dienVien, // Thêm diễn viên
      quocGia: movieObj.quocGia,
      theLoai: movieObj.theLoai,
      dinhDang: movieObj.dinhDang,
    };
    // if (selectedPhim.maPhim) {
    //   onUpdate(movieObj, hinhAnh, fakeImage);
    //   return;
    // }
    // const newMovieObj = { ...movieObj };
    // delete newMovieObj.maPhim;
    // delete newMovieObj.biDanh;

    // delete newMovieObj.danhGia;
    // onAddMovie(newMovieObj);
    if (selectedPhim.maPhim) {
      onUpdate(movieObj, hinhAnh, fakeImage)
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error submitting the form: ", error);
        });
    } else {
      onAddMovie(movieObj)
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          console.error("Error submitting the form: ", error);
        });
    }
  };

  return (
    <Formik
      initialValues={{
        maPhim: selectedPhim.maPhim,
        tenPhim: selectedPhim.tenPhim,
        biDanh: selectedPhim.biDanh,
        trailer: selectedPhim.trailer,
        hinhAnh: selectedPhim.hinhAnh,
        moTa: selectedPhim.moTa,
        daoDien: selectedPhim.daoDien,
        dienVien: selectedPhim.dienVien,
        quocGia: selectedPhim.quocGia,
        theLoai: selectedPhim.theLoai,
        dinhDang: selectedPhim.dinhDang,
        phanLoai: selectedPhim.phanLoai,
        maNhom: "GP09",
        ngayKhoiChieu: selectedPhim?.ngayKhoiChieu
          ? new Date(selectedPhim.ngayKhoiChieu)
          : new Date(),
      }}
      validationSchema={movieSchema}
      onSubmit={handleSubmit}
    >
      {(formikProp) => (
        <Form>
          <div className="form-group">
            <label>Tên phim&nbsp;</label>
            <ErrorMessage
              name="tenPhim"
              render={(msg) => <span className="text-danger">{msg}</span>}
            />
            <Field name="tenPhim" className="form-control" />
          </div>
          <div className="form-group">
            <label>Trailer&nbsp;</label>
            <ErrorMessage
              name="trailer"
              render={(msg) => <span className="text-danger">{msg}</span>}
            />
            <Field name="trailer" className="form-control" />
          </div>
          <div className="form-group">
            <label>Hình ảnh&nbsp;</label>
            <ErrorMessage
              name="hinhAnh"
              render={(msg) => <span className="text-danger">{msg}</span>}
            />
            <div className="form-row">
              <div className="col-2">
                {srcImage ? (
                  <img
                    src={srcImage}
                    id="image-selected"
                    alt="movie"
                    className="img-fluid rounded"
                  />
                ) : (
                  <ImageOutlinedIcon style={{ fontSize: 60 }} />
                )}
              </div>
              <div className="col-10">
                <input
                  type="file"
                  name="hinhAnh"
                  accept=".jpg,.png"
                  className="form-control"
                  onChange={(e) => {
                    formikProp.setFieldValue(
                      "hinhAnh",
                      e.currentTarget.files[0]
                    );
                    setThumbnailPreviews(e);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label>Mô tả&nbsp;</label>
            <ErrorMessage
              name="moTa"
              render={(msg) => <span className="text-danger">{msg}</span>}
            />
            <Field as="textarea" name="moTa" className="form-control" />
          </div>
          <div className="form-group">
            <label>Đạo diễn&nbsp;</label>
            <ErrorMessage
              name="daoDien"
              render={(msg) => <span className="text-danger">{msg}</span>}
            />
            <Field name="daoDien" className="form-control" />
          </div>
          <div className="form-group">
            <label>Diễn viên&nbsp;</label>
            <ErrorMessage
              name="dienVien"
              render={(msg) => <span className="text-danger">{msg}</span>}
            />
            <Field name="dienVien" className="form-control" />
          </div>
          <div className="form-group">
            <label>Quốc gia&nbsp;</label>
            <ErrorMessage
              name="quocGia"
              render={(msg) => <span className="text-danger">{msg}</span>}
            />
            <Field name="quocGia" className="form-control" />
          </div>
          <div className="form-group">
            <label>Thể loại&nbsp;</label>
            <ErrorMessage
              name="theLoai"
              render={(msg) => <span className="text-danger">{msg}</span>}
            />
            <Field name="theLoai" className="form-control" />
          </div>
          <div className="form-group">
            <label>Định dạng&nbsp;</label>
            <ErrorMessage
              name="dinhDang"
              render={(msg) => <span className="text-danger">{msg}</span>}
            />
            <Field name="dinhDang" className="form-control" />
          </div>
          <div className="form-group">
            <label>Phân loại&nbsp;</label>
            <ErrorMessage
              name="phanLoai"
              render={(msg) => <span className="text-danger">{msg}</span>}
            />
            <Field as="select" name="phanLoai" className="form-control">
              <option value="">Chọn phân loại</option>
              <option value="P">P - Phổ thông</option>
              <option value="K">K - Dưới 13 tuổi</option>
              <option value="T13">T13 - Trên 13 tuổi</option>
              <option value="T16">T16 - Trên 16 tuổi</option>
              <option value="T18">T18 - Trên 18 tuổi</option>
            </Field>
          </div>

          <div className="form-group">
            <label>Ngày khởi chiếu&nbsp;</label>
            <ErrorMessage
              name="ngayKhoiChieu"
              render={(msg) => <span className="text-danger">{msg}</span>}
            />
            <FormControl className={classes.formControl} focused={false}>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={materialTheme}>
                  <KeyboardDatePicker
                    value={formikProp.values.ngayKhoiChieu}
                    onChange={(date) =>
                      formikProp.setFieldValue("ngayKhoiChieu", date)
                    }
                    format="yyyy-MM-dd"
                  />
                </ThemeProvider>
              </MuiPickersUtilsProvider>
            </FormControl>
          </div>

          <button type="submit" className="form-control">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
