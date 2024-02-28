import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  // Yup validation schema
  const emailValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Email không được để trống"),
  });

  const handleForgotPassword = async (values) => {
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/api/QuanLyNguoiDung/QuenMatKhau",
        {
          email: values.email,
        }
      );

      if (
        response.data ===
        "Email xác nhận đã được gửi, vui lòng kiểm tra hòm thư của bạn."
      ) {
        Swal.fire({
          position: "center",
          icon: "success",
          title:
            "Email xác nhận đã được gửi, vui lòng kiểm tra hòm thư của bạn.",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Gửi yêu cầu thất bại",
          text: "Có lỗi xảy ra khi gửi email, vui lòng kiểm tra lại",
        });
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error.response?.data?.message || "Có lỗi xảy ra khi gửi yêu cầu";
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: errorMessage,
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
                  <Formik
                    initialValues={{ email: "" }}
                    validationSchema={emailValidationSchema}
                    onSubmit={handleForgotPassword}
                  >
                    {({ errors, touched }) => (
                      <Form className="col-sm-12">
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
                            className={`form-control ${
                              errors.email && touched.email ? "is-invalid" : ""
                            }`}
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
                            Gửi Yêu Cầu
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
      </section>
    </>
  );
};

export default ForgotPassword;
