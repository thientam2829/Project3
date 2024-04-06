// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   TextField,
//   Button,
//   IconButton,
// } from "@material-ui/core";
// import CloseIcon from "@material-ui/icons/Close";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { imageUpload } from "../../utilities/util";

// const AddNewsForm = ({
//   open,
//   onClose,
//   onAddNews,
//   initialValues = { tieude: "", noidung: "", hinhAnh: null },
//   newsId = null,
// }) => {
//   const NewsSchema = Yup.object().shape({
//     tieude: Yup.string().required("Tiêu đề không được để trống"),
//     noidung: Yup.string().required("Nội dung không được để trống"),
//     hinhAnh: Yup.mixed().required("Hình ảnh là bắt buộc"),
//   });

//   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
//     const imageData =
//       values.hinhAnh instanceof File
//         ? await imageUpload(values.hinhAnh)
//         : values.hinhAnh;
//     const imageUrl = imageData.secure_url || imageData;
//     const formData = {
//       tieude: values.tieude,
//       noidung: values.noidung,
//       hinhAnh: imageUrl,
//     };

//     try {
//       if (newsId) {
//         // Cập nhật tin tức
//         await axios.put(
//           `http://localhost:4000/api/QuanLyTinTuc/ChinhSuaTinTuc/${newsId}`,
//           formData
//         );
//         alert("Tin tức đã được cập nhật thành công!");
//       } else {
//         await axios.post(
//           "http://localhost:4000/api/QuanLyTinTuc/ThemTinTuc",
//           formData
//         );
//         alert("Tin tức đã được thêm thành công!");
//       }
//       onAddNews();
//       resetForm({});
//       onClose();
//     } catch (error) {
//       console.error("Lỗi khi thực hiện:", error);
//       alert("Lỗi khi thực hiện");
//     }

//     setSubmitting(false);
//   };

//   return (
//     <>
//       <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
//         <DialogTitle id="form-dialog-title">
//           Thêm Tin Tức{" "}
//           <IconButton
//             aria-label="close"
//             onClick={onClose}
//             style={{
//               position: "absolute",
//               right: 8,
//               top: 8,
//               color: (theme) => theme.palette.grey[500],
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
//         <DialogContent>
//           <Formik
//             initialValues={{ tieude: "", noidung: "", hinhAnh: null }}
//             validationSchema={NewsSchema}
//             onSubmit={handleSubmit}
//           >
//             {({ setFieldValue, isSubmitting }) => (
//               <Form>
//                 <Field
//                   as={TextField}
//                   label="Tiêu đề"
//                   name="tieude"
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                 />
//                 <ErrorMessage name="tieude" component="div" />

//                 <Field
//                   as={TextField}
//                   label="Nội dung"
//                   name="noidung"
//                   fullWidth
//                   margin="normal"
//                   variant="outlined"
//                   multiline
//                   rows={4}
//                 />
//                 <ErrorMessage name="noidung" component="div" />

//                 <input
//                   type="file"
//                   name="hinhAnh"
//                   accept="image/*"
//                   onChange={(event) => {
//                     setFieldValue("hinhAnh", event.currentTarget.files[0]);
//                     // setThumbnailPreviews(e); // Nếu bạn muốn hiển thị hình ảnh preview
//                   }}
//                 />
//                 <ErrorMessage name="hinhAnh" component="div" />

//                 <Button
//                   style={{
//                     backgroundColor: "rgb(238, 130, 59)",
//                     borderColor: "rgb(238, 130, 59)",
//                     cursor: "pointer",
//                     width: "100%",
//                   }}
//                   type="submit"
//                   color="primary"
//                   disabled={isSubmitting}
//                   fullWidth
//                   variant="contained"
//                 >
//                   Thêm Tin Tức
//                 </Button>
//               </Form>
//             )}
//           </Formik>
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };
// export default AddNewsForm;
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  IconButton,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { imageUpload } from "../../utilities/util";

const AddNewsForm = ({
  open,
  onClose,
  onAddOrEditNews,
  currentNews = null,
}) => {
  const isEdit = Boolean(currentNews);
  const initialValues = {
    tieude: currentNews ? currentNews.tieude : "",
    noidung: currentNews ? currentNews.noidung : "",
    hinhAnh: null,
  };

  const NewsSchema = Yup.object().shape({
    tieude: Yup.string().required("Tiêu đề không được để trống"),
    noidung: Yup.string().required("Nội dung không được để trống"),
    hinhAnh: isEdit
      ? Yup.mixed()
      : Yup.mixed().required("Hình ảnh là bắt buộc"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      let imageUrl = currentNews ? currentNews.hinhAnh : "";
      if (values.hinhAnh && values.hinhAnh instanceof File) {
        const imageData = await imageUpload(values.hinhAnh);
        imageUrl = imageData.secure_url; // Giả sử imageUpload trả về đối tượng có thuộc tính secure_url chứa URL hình ảnh
      }

      const formData = {
        tieude: values.tieude,
        noidung: values.noidung,
        hinhAnh: imageUrl,
      };

      if (currentNews) {
        // Cập nhật tin tức
        await axios.put(
          `http://localhost:4000/api/QuanLyTinTuc/ChinhSuaTinTuc/${currentNews.id}`,
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

      onAddOrEditNews();
      resetForm({});
      onClose();
    } catch (error) {
      console.error("Lỗi khi thực hiện:", error);
      alert("Lỗi khi thực hiện");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        {isEdit ? "Chỉnh Sửa Tin Tức" : "Thêm Tin Tức"}
      </DialogTitle>
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
      <DialogContent>
        <Formik
          initialValues={initialValues}
          validationSchema={NewsSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                name="tieude"
                label="Tiêu đề"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <Field
                as={TextField}
                name="noidung"
                label="Nội dung"
                fullWidth
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
              />
              <input
                type="file"
                name="hinhAnh"
                accept="image/*"
                onChange={(event) =>
                  setFieldValue("hinhAnh", event.currentTarget.files[0])
                }
                style={{ margin: "10px 0" }}
              />
              <Button
                type="submit"
                color="primary"
                disabled={isSubmitting}
                variant="contained"
                fullWidth
                style={{ marginTop: "20px" }}
              >
                {isEdit ? "Cập Nhật" : "Thêm"}
              </Button>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewsForm;
