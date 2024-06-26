import React, { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import usersApi from "../../api/usersApi";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const emailValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Email không được để trống"),
  });
  const history = useHistory();

  const handleForgotPassword = async (values) => {
    setLoading(true);

    try {
      const response = await usersApi.postQuenMatKhau(values.email);
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
        }).then(() => {
          history.push("/reset-password");
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
        title: "Email không tồn tại",
        text: "Email không tồn tại trong hệ thống , vui lòng nhập lại email.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="ftco-section" style={{ padding: "6em" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-8">
              <div className="wrap d-md-flex">
                <div className="img" style={{ backgroundImage: "" }}>
                  <img
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                    className="rounded-md"
                    src="https://res.cloudinary.com/thientam2829/image/upload/v1709452945/yiogehwbo4yefreukipq.jpg"
                  />
                </div>
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
