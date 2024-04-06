import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { TextField, Button, CircularProgress } from "@material-ui/core";

const ShowtimeSchema = Yup.object().shape({
  ngayChieuGioChieu: Yup.string().required("Ngày chiếu giờ chiếu là bắt buộc"),
  tenRap: Yup.string().required("Tên rạp là bắt buộc"),
  giaVe: Yup.number().required("Giá vé là bắt buộc").positive(),
});

const EditShowtimeForm = ({ showtimeDetails, onClose }) => {
  const initialValues = {
    ngayChieuGioChieu: showtimeDetails?.ngayChieuGioChieu || "",
    tenRap: showtimeDetails?.tenRap || "",
    giaVe: showtimeDetails?.giaVe || "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    axios
      .put(
        `http://localhost:4000/api/QuanLyDatVe/ChinhSuaLichChieu/${showtimeDetails.maLichChieu}`,
        values
      )
      .then((response) => {
        alert("Cập nhật lịch chiếu thành công!");
        onClose && onClose();
      })
      .catch((error) => {
        alert("Có lỗi xảy ra: " + error.message);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <div>
      <h2>Chỉnh Sửa Lịch Chiếu</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={ShowtimeSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              name="ngayChieuGioChieu"
              as={TextField}
              label="Ngày chiếu giờ chiếu"
            />
            <ErrorMessage name="ngayChieuGioChieu" component="div" />

            <Field name="tenRap" as={TextField} label="Tên rạp" />
            <ErrorMessage name="tenRap" component="div" />

            <Field name="giaVe" as={TextField} label="Giá vé" type="number" />
            <ErrorMessage name="giaVe" component="div" />

            <Button type="submit" disabled={isSubmitting} color="primary">
              {isSubmitting ? <CircularProgress size={24} /> : "Cập nhật"}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default EditShowtimeForm;
