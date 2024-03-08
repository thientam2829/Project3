import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { imageUpload } from "../../utilities/util";

const AddNewsForm = ({
  open,
  onClose,
  onAddNews,
  initialValues = { tieude: "", noidung: "", hinhAnh: null },
  newsId = null,
}) => {
  const NewsSchema = Yup.object().shape({
    tieude: Yup.string().required("Tiêu đề không được để trống"),
    noidung: Yup.string().required("Nội dung không được để trống"),
    hinhAnh: Yup.mixed().required("Hình ảnh là bắt buộc"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const imageData =
      values.hinhAnh instanceof File
        ? await imageUpload(values.hinhAnh)
        : values.hinhAnh;
    const imageUrl = imageData.secure_url || imageData;
    const formData = {
      tieude: values.tieude,
      noidung: values.noidung,
      hinhAnh: imageUrl,
    };

    try {
      if (newsId) {
        // Cập nhật tin tức
        await axios.put(
          `http://localhost:4000/api/QuanLyTinTuc/ChinhSuaTinTuc/${newsId}`,
          formData
        );
        alert("Tin tức đã được cập nhật thành công!");
      } else {
        await axios.post(
          "http://localhost:4000/api/QuanLyTinTuc/ThemTinTuc",
          formData
        );
        alert("Tin tức đã được thêm thành công!");
      }
      onAddNews();
      resetForm({});
      onClose(); // Đóng form sau khi hoàn thành
    } catch (error) {
      console.error("Lỗi khi thực hiện:", error);
      alert("Lỗi khi thực hiện");
    }

    setSubmitting(false);
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Thêm Tin Tức{" "}
          <IconButton
            aria-label="close"
            onClick={onClose}
            style={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{ tieude: "", noidung: "", hinhAnh: null }}
            validationSchema={NewsSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, isSubmitting }) => (
              <Form>
                <Field
                  as={TextField}
                  label="Tiêu đề"
                  name="tieude"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <ErrorMessage name="tieude" component="div" />

                <Field
                  as={TextField}
                  label="Nội dung"
                  name="noidung"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  multiline
                  rows={4}
                />
                <ErrorMessage name="noidung" component="div" />

                <input
                  type="file"
                  name="hinhAnh"
                  accept="image/*"
                  onChange={(event) => {
                    setFieldValue("hinhAnh", event.currentTarget.files[0]);
                    // setThumbnailPreviews(e); // Nếu bạn muốn hiển thị hình ảnh preview
                  }}
                />
                <ErrorMessage name="hinhAnh" component="div" />

                <Button
                  style={{
                    backgroundColor: "rgb(238, 130, 59)",
                    borderColor: "rgb(238, 130, 59)",
                    cursor: "pointer",
                    width: "100%",
                  }}
                  type="submit"
                  color="primary"
                  disabled={isSubmitting}
                  fullWidth
                  variant="contained"
                >
                  Thêm Tin Tức
                </Button>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default AddNewsForm;
