import React, { useEffect, useState } from "react";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  CircularProgress,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  DialogActions,
  IconButton,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import CloseIcon from "@material-ui/icons/Close";
import employeeApi from "../../api/employeeApi";
const NhanVienSchema = Yup.object().shape({
  hoten: Yup.string().required("Họ tên không được để trống"),
  ngaysinh: Yup.date().required("Ngày sinh không được để trống"),
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Email không được để trống"),
  sdt: Yup.string().required("Số điện thoại không được để trống"),
  diachi: Yup.string().required("Địa chỉ không được để trống"),
  ngayvaolam: Yup.date().required("Ngày vào làm không được để trống"),
  loainhanvien: Yup.string().required("Loại nhân viên không được để trống"),
  noilamviec: Yup.number()
    .required("Nơi làm việc không được để trống")
    .positive()
    .integer(),
  luong: Yup.number().required("Lương không được để trống").positive(),
  trangthai: Yup.number()
    .required("Trạng thái không được để trống")
    .oneOf([0, 1], "Trạng thái không hợp lệ"),
});

const initialValues = {
  hoten: "",
  ngaysinh: new Date(),
  email: "",
  sdt: "",
  diachi: "",
  ngayvaolam: new Date(),
  loainhanvien: "",
  noilamviec: "",
  luong: "",
  trangthai: 1,
};

const AddOrEditNhanVienForm = ({
  open,
  onClose,
  currentEmployee,
  fetchEmployees,
}) => {
  const [cumRapList, setCumRapList] = useState([]);
  const isEditing = !!currentEmployee;

  useEffect(() => {
    axios.get("http://localhost:4000/api/cumrap").then((response) => {
      setCumRapList(response.data);
    });
  }, []);

  const handleSubmit = (values, { setSubmitting }) => {
    const action = isEditing
      ? employeeApi.chinhSuaNhanVien
      : employeeApi.themNhanVien;
    const urlOrId = isEditing ? currentEmployee.id : values;

    action(urlOrId, values)
      .then((response) => {
        alert(
          isEditing
            ? "Nhân viên đã được cập nhật thành công!"
            : "Thêm nhân viên thành công!"
        );
        setSubmitting(false);
        onClose();
        fetchEmployees();
      })
      .catch((error) => {
        alert(`Có lỗi xảy ra: ${error.message}`);
        setSubmitting(false);
      });
  };
  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        {isEditing ? "Chỉnh Sửa Nhân Viên" : "Thêm Nhân Viên"}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        style={{ position: "absolute", right: 8, top: 8, color: "grey" }}
      >
        <CloseIcon />
      </IconButton>
      <Formik
        initialValues={isEditing ? currentEmployee : initialValues}
        validationSchema={NhanVienSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting }) => (
          <Form>
            <DialogContent>
              <Field
                as={TextField}
                name="hoten"
                label="Họ tên"
                fullWidth
                margin="normal"
              />

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Field
                  component={KeyboardDatePicker}
                  name="ngaysinh"
                  label="Ngày sinh"
                  fullWidth
                  format="dd/MM/yyyy"
                  margin="normal"
                  onChange={(date) => setFieldValue("ngaysinh", date)}
                  KeyboardButtonProps={{ "aria-label": "change date" }}
                />
              </MuiPickersUtilsProvider>

              <Field
                as={TextField}
                name="email"
                label="Email"
                fullWidth
                margin="normal"
              />

              <Field
                as={TextField}
                name="sdt"
                label="Số điện thoại"
                fullWidth
                margin="normal"
              />

              <Field
                as={TextField}
                name="diachi"
                label="Địa chỉ"
                fullWidth
                margin="normal"
              />

              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Field
                  component={KeyboardDatePicker}
                  name="ngayvaolam"
                  label="Ngày vào làm"
                  fullWidth
                  format="dd/MM/yyyy"
                  margin="normal"
                  onChange={(date) => setFieldValue("ngayvaolam", date)}
                  KeyboardButtonProps={{ "aria-label": "change date" }}
                />
              </MuiPickersUtilsProvider>

              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="loainhanvien">Loại nhân viên</InputLabel>
                <Field
                  as={Select}
                  name="loainhanvien"
                  inputProps={{ id: "loainhanvien" }}
                >
                  <MenuItem value="Quản Lý">Quản Lý</MenuItem>
                  <MenuItem value="Nhân viên">Nhân viên</MenuItem>
                  <MenuItem value="Nhân viên bán thời gian">
                    Nhân viên bán thời gian
                  </MenuItem>
                </Field>
              </FormControl>

              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="noilamviec">Nơi làm việc</InputLabel>
                <Field
                  as={Select}
                  name="noilamviec"
                  inputProps={{ id: "noilamviec" }}
                >
                  {cumRapList.map((cumRap) => (
                    <MenuItem key={cumRap.cid} value={cumRap.cid}>
                      {cumRap.tenCumRap}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <Field
                as={TextField}
                name="luong"
                label="Lương"
                type="number"
                fullWidth
                margin="normal"
              />

              <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="trangthai">Trạng thái</InputLabel>
                <Field
                  as={Select}
                  name="trangthai"
                  inputProps={{ id: "trangthai" }}
                >
                  <MenuItem value={1}>Đang Làm Việc</MenuItem>
                  <MenuItem value={0}>Nghỉ việc</MenuItem>
                </Field>
              </FormControl>
            </DialogContent>
            <DialogActions>
              <Button type="submit" color="primary" disabled={isSubmitting}>
                {isSubmitting ? (
                  <CircularProgress size={24} />
                ) : isEditing ? (
                  "Cập Nhật"
                ) : (
                  "Thêm"
                )}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default AddOrEditNhanVienForm;
