import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { makeStyles } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import "./style.css";
import { login, resetErrorLoginRegister } from "../../reducers/actions/Auth";
import { LOADING_BACKTO_HOME } from "../../reducers/constants/Lazy";

export default function Login() {
  const { currentUser, errorLogin } = useSelector((state) => state.authReducer);
  let location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const [typePassword, settypePassword] = useState("password");
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    if (currentUser) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Đăng nhập thành công",
        showConfirmButton: false,
        timer: 2000,
      });
      history.push("/", location.state);
      if (location.state === "/") {
        dispatch({ type: LOADING_BACKTO_HOME });
        setTimeout(() => {
          history.push("/");
        }, 50);
        return undefined;
      }
      history.push(location.state);
    }
  }, [currentUser]);
  useEffect(() => {
    return () => {
      dispatch(resetErrorLoginRegister());
    };
  }, []);

  const signinUserSchema = yup.object().shape({
    taiKhoan: yup.string().required("*Tài khoản không được bỏ trống !"),
    matKhau: yup.string().required("*Mật khẩu không được bỏ trống !"),
  });

  const handleSubmit = (user) => {
    dispatch(login(user));
    //history.push("/", location.state);
  };
  const handlesignUp = () => {
    history.push("/signUp", location.state);
  };

  const handleHold = () => {
    if (!isDesktop) {
      return;
    }
    settypePassword("text");
  };
  const handleRelease = () => {
    if (!isDesktop) {
      return;
    }
    settypePassword("password");
  };
  const handleShowPassword = () => {
    if (isDesktop) {
      return;
    }
    if (typePassword === "password") {
      settypePassword("text");
    } else {
      settypePassword("password");
    }
  };
  const navigateToForgotPassword = () => {
    history.push("/forgot-password");
  };
  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="text-center">
                <h1 className="text-white">Đăng nhập</h1>
              </div>
              <div className="wrap d-md-flex">
                <div className="img" style={{ backgroundImage: "" }}>
                  <img
                    className="rounded-md"
                    src="https://p4.wallpaperbetter.com/wallpaper/852/644/1008/alien-movie-poster-sigourney-weaver-movie-poster-wallpaper-preview.jpg"
                  />
                </div>
                <div className="login-wrap p-4 p-md-5">
                  <div>
                    <Formik
                      initialValues={{
                        taiKhoan: "",
                        matKhau: "",
                      }}
                      validationSchema={signinUserSchema}
                      onSubmit={handleSubmit}
                    >
                      {() => (
                        <Form className="col-sm-10 mx-auto">
                          <div className="form-group position-relative">
                            <label>Tài khoản *&nbsp;</label>
                            <ErrorMessage
                              name="taiKhoan"
                              render={(msg) => (
                                <small className="text-danger">{msg}</small>
                              )}
                            />
                            <Field
                              type="text"
                              className="form-control"
                              name="taiKhoan"
                            />
                          </div>

                          <div className="form-group position-relative">
                            <label>Mật khẩu *&nbsp;</label>
                            <ErrorMessage
                              name="matKhau"
                              render={(msg) => (
                                <small className="text-danger">{msg}</small>
                              )}
                            />
                            <Field
                              type={typePassword}
                              className="form-control"
                              name="matKhau"
                            />
                            <div
                              onMouseDown={handleHold}
                              onMouseUp={handleRelease}
                              onClick={handleShowPassword}
                            ></div>
                          </div>

                          <button
                            style={{
                              backgroundColor: "rgb(238, 130, 59)",
                              borderColor: "rgb(238, 130, 59)",
                              cursor: "pointer",
                            }}
                            disable={errorLogin?.toString()}
                            type="submit"
                            className="btn btn-success mt-3 container"
                          >
                            Đăng nhập
                          </button>
                          <div className="d-flex align-items-center justify-content-between mt-3">
                            <p>Bạn chưa có tài khoản ?</p>
                            <p
                              className="text-info "
                              style={{ cursor: "pointer" }}
                              onClick={handlesignUp}
                            >
                              Đăng ký
                            </p>
                          </div>
                          <p
                            className="text-info "
                            style={{ cursor: "pointer" }}
                            onClick={() => navigateToForgotPassword()}
                          >
                            Quên mật khẩu?
                          </p>

                          {errorLogin && (
                            <div className="alert alert-danger">
                              <span>Tài khoản hoặc mật khẩu không đúng !</span>
                            </div>
                          )}
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
