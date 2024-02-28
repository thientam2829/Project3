import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Swal from "sweetalert2";
import axios from "axios";
import { verifyOTP } from "../../reducers/actions/Auth";

export default function VerifyOTP() {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const email = location.state?.email;

  if (!email) {
    history.push("/register");
  }

  const otpValidationSchema = yup.object().shape({
    otp: yup.string().required("*Vui lòng nhập mã OTP."),
  });

  const handleVerifyOTP = async (values) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:4000/api/QuanLyNguoiDung/XacThucOTP",
        {
          email,
          otp: values.otp,
        }
      );

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Xác thực thành công. Bạn có thể đăng nhập ngay bây giờ.",
        showConfirmButton: false,
        timer: 3000,
      });
      history.push("/login");
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Xác thực thất bại",
        text: error.response.data,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-8">
              <div className="wrap d-md-flex">
                <div className="img" style={{ backgroundImage: "" }}></div>
                <div className="login-wrap p-4 p-md-5">
                  <div>
                    <Formik
                      initialValues={{
                        otp: "",
                      }}
                      validationSchema={otpValidationSchema}
                      onSubmit={handleVerifyOTP}
                    >
                      {(formikProps) => (
                        <Form className="col-sm-12">
                          <div className="form-group">
                            <label>Mã OTP *&nbsp;</label>
                            <ErrorMessage
                              name="otp"
                              render={(msg) => (
                                <span className="text-danger">{msg}</span>
                              )}
                            />
                            <Field
                              name="otp"
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
                              disabled={loading}
                            >
                              Xác Thực
                            </button>
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
