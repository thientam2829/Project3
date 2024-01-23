import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Swal from "sweetalert2";
import "./style.css";
import axios from "axios";

import { register, resetErrorLoginRegister } from "../../reducers/actions/Auth";

export default function Register() {
  const { responseRegister, loadingRegister, errorRegister } = useSelector(
    (state) => state.authReducer
  );
  let location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(responseRegister);
    if (responseRegister) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Bạn đã đăng ký thành công",
        showConfirmButton: false,
        timer: 2000,
      });
      history.push("/login", location.state);
    }
  }, [responseRegister]);

  useEffect(() => {
    return () => {
      dispatch(resetErrorLoginRegister());
    };
  }, []);

  const phoneRegExp = /^0\d{9}$/;

  const signupUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("*Tài khoản không được bỏ trống !"),
    matKhau: yup.string().required("*Mật khẩu không được bỏ trống !"),
    email: yup
      .string()
      .required("*Email không được bỏ trống !")
      .email("* Email không hợp lệ "),
    soDt: yup
      .string()
      .required("*Số điện thoại không được bỏ trống !")
      .matches(phoneRegExp, "Số điện thoại không hợp lệ!")
      .min(10, "Số điện thoại phải là 10 chữ số.")
      .max(10, "Số điện thoại phải là 10 chữ số."),
    hoTen: yup.string().required("*Tên không được bỏ trống !"),
  });
  const [emailExistMessage, setEmailExistMessage] = useState("");

  const handleSubmit = async (user) => {
    try {
      const emailExist = await axios.get(
        `http://localhost:4000/api/check-email/${user.email}`
      );
      if (emailExist.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Email đã tồn tại",
          text: "Email đã tồn tại. Vui lòng nhập lại email khác.",
        });
        return;
      }

      const response = await axios.post(
        "http://localhost:4000/api/QuanLyNguoiDung/DangKy",
        user
      );

      if (response.data === "Success") {
        Swal.fire({
          position: "center",
          icon: "success",
          title:
            "Bạn đã đăng ký thành công. Vui lòng kiểm tra email để nhập OTP.",
          showConfirmButton: false,
          timer: 3000,
        });

        history.push("/verify-otp", { email: user.email });
      } else {
        Swal.fire({
          icon: "error",
          title: "Đăng ký thất bại",
          text: "Đăng ký thất bại. Vui lòng thử lại.",
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Email đã tồn tại",
        text: "Email đã tồn tại, vui lòng nhập email khác.",
      });
    }
  };

  const handleLogin = () => {
    history.push("/login", location.state);
  };

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div className="img" style={{ backgroundImage: "" }}>
                  <img src="https://p4.wallpaperbetter.com/wallpaper/852/644/1008/alien-movie-poster-sigourney-weaver-movie-poster-wallpaper-preview.jpg" />
                </div>
                <div className="alert-message">
                  {emailExistMessage && (
                    <div className="alert alert-warning" role="alert">
                      {emailExistMessage}
                    </div>
                  )}
                </div>
                <div className="login-wrap p-4 p-md-5">
                  <div>
                    <Formik
                      initialValues={{
                        taiKhoan: "",
                        matKhau: "",
                        email: "",
                        soDt: "",
                        maNhom: "GP09",
                        maLoaiNguoiDung: "KhachHang",
                        hoTen: "",
                      }}
                      validationSchema={signupUserSchema}
                      onSubmit={handleSubmit}
                    >
                      {(formikProps) => (
                        <Form className="col-sm-12">
                          <div className="form-group">
                            <label>Tài khoản *&nbsp;</label>
                            <ErrorMessage
                              name="taiKhoan"
                              render={(msg) => (
                                <span className="text-danger">{msg}</span>
                              )}
                            />
                            <Field
                              name="taiKhoan"
                              type="text"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            <label>Mật khẩu *&nbsp;</label>
                            <ErrorMessage
                              name="matKhau"
                              render={(msg) => (
                                <span className="text-danger">{msg}</span>
                              )}
                            />
                            <Field
                              name="matKhau"
                              type="password"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            <label>Họ và tên *&nbsp;</label>
                            <ErrorMessage
                              name="hoTen"
                              render={(msg) => (
                                <span className="text-danger">{msg}</span>
                              )}
                            />
                            <Field
                              name="hoTen"
                              type="text"
                              className="form-control"
                            />
                          </div>

                          <div className="form-group">
                            <label>Email *&nbsp;</label>
                            <ErrorMessage
                              name="email"
                              render={(msg) => (
                                <span className="text-danger">{msg}</span>
                              )}
                            />

                            <Field
                              name="email"
                              type="email"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            <label>Số điện thoại *&nbsp;</label>
                            <ErrorMessage
                              name="soDt"
                              render={(msg) => (
                                <span className="text-danger">{msg}</span>
                              )}
                            />
                            <Field
                              name="soDt"
                              type="text"
                              className="form-control"
                            />
                          </div>

                          <div className="text-center">
                            <button
                              style={{
                                backgroundColor: "rgb(238, 130, 59)",
                                borderColor: "rgb(238, 130, 59)",
                                cursor: "pointer",
                                width: "100%",
                              }}
                              className="btn btn-success mt-3 container"
                              type="submit"
                              disable={loadingRegister.toString()}
                            >
                              Đăng Ký
                            </button>
                            <div className="d-flex align-items-center justify-content-between mt-3">
                              <p>Bạn đã có tài khoản ?</p>
                              <p
                                className="text-info "
                                style={{ cursor: "pointer" }}
                                onClick={handleLogin}
                              >
                                Đăng nhập
                              </p>
                            </div>

                            {errorRegister && (
                              <div className="alert alert-danger">
                                <span>{errorRegister}</span>
                              </div>
                            )}
                          </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
