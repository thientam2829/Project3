import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { imageUpload } from "../../utilities/util";
import bannerApi from "../../api/bannerApi";
const AddBannerForm = ({ open, onClose, onAddBanner }) => {
  const [filmOptions, setFilmOptions] = useState([]);
  const [formValues, setFormValues] = useState({
    maPhim: "",
    tenPhim: "",
    hinhAnh: null,
  });

  const BannerSchema = Yup.object().shape({
    maPhim: Yup.string().required("Mã phim không được để trống"),
    tenPhim: Yup.string().required("Tên phim không được để trống"),
    hinhAnh: Yup.mixed().required("Hình ảnh là bắt buộc"),
  });

  useEffect(() => {
    const fetchFilmOptions = async () => {
      try {
        const response = await bannerApi.getFilmOptions();
        setFilmOptions(response.data);
      } catch (error) {
        console.error("Error fetching film options:", error);
      }
    };
    fetchFilmOptions();
  }, []);

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const imageData =
      values.hinhAnh instanceof File
        ? await imageUpload(values.hinhAnh)
        : values.hinhAnh;
    const imageUrl = imageData.secure_url || imageData;
    const formData = {
      maPhim: values.maPhim,
      tenPhim: values.tenPhim,
      hinhAnh: imageUrl,
    };

    try {
      await bannerApi.themBanner(formData);
      alert("Banner đã được thêm thành công!");
      if (typeof onAddBanner === "function") {
        onAddBanner();
      }
      resetForm({});
      onClose();
    } catch (error) {
      console.error("Error when performing:", error);
      alert("Error when performing");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Thêm Banner
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
            initialValues={formValues}
            validationSchema={BannerSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, isSubmitting }) => (
              <Form>
                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel id="tenPhim-label">Tên phim</InputLabel>
                  <Field
                    as={Select}
                    name="tenPhim"
                    labelId="tenPhim-label"
                    onChange={(event) => {
                      const selectedTenPhim = event.target.value;
                      const correspondingFilm = filmOptions.find(
                        (film) => film.tenPhim === selectedTenPhim
                      );
                      if (correspondingFilm) {
                        setFieldValue("maPhim", correspondingFilm.maPhim);
                      }
                      setFieldValue("tenPhim", selectedTenPhim);
                    }}
                  >
                    {filmOptions.map((film) => (
                      <MenuItem key={film.maPhim} value={film.tenPhim}>
                        {film.tenPhim}
                      </MenuItem>
                    ))}
                  </Field>
                  <ErrorMessage name="tenPhim" component="div" />
                </FormControl>

                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel id="maPhim-label">Mã phim</InputLabel>
                  <Field
                    as={Select}
                    name="maPhim"
                    labelId="maPhim-label"
                    onChange={(event) =>
                      setFieldValue("maPhim", event.target.value)
                    }
                  >
                    {filmOptions.map((film) => (
                      <MenuItem key={film.maPhim} value={film.maPhim}>
                        {film.maPhim}
                      </MenuItem>
                    ))}
                  </Field>
                  <ErrorMessage name="maPhim" component="div" />
                </FormControl>

                <input
                  type="file"
                  name="hinhAnh"
                  accept="image/*"
                  onChange={(event) => {
                    setFieldValue("hinhAnh", event.currentTarget.files[0]);
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
                  Thêm Banner
                </Button>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddBannerForm;
