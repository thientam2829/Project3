import React from "react";
import useStyles from "./style";
export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={`${classes.footer__up} row`}>
        <div className="col-6 col-md-4">
          <div className={classes.tix__text}>
            <div className="d-none d-lg-block d-xl-block">
              <p>CosmoCinema</p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cgv.vn/"
              >
                FAQ
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cgv.vn/"
              >
                Brand Guidelines
              </a>
            </div>
            <div className="row">
              <a
                className="col-6 col-lg-12"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cgv.vn/"
              >
                Thỏa thuận sử dụng
              </a>
              <a
                className="col-6 col-lg-12"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cgv.vn/"
              >
                Chính sách bảo mật
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 footer__company d-none d-lg-block d-xl-block">
          <p>Đối tác</p>
          <div>
            <div className={classes.company__logo}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cgv.vn/"
              >
                <img
                  src="/img/logo-connect/STARLIGHT.png"
                  alt=""
                  className={classes.logo}
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cgv.vn/"
              >
                <img
                  src="/img/logo-connect/dcine.png"
                  alt=""
                  className={classes.logo}
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://zalopay.vn/"
              >
                <img
                  src="/img/logo-connect/zalopay_icon.png"
                  alt=""
                  className={classes.logo}
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cgv.vn/"
              >
                <img
                  src="/img/logo-connect/payoo.jpg"
                  alt=""
                  className={classes.logo}
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://portal.vietcombank.com.vn/"
              >
                <img
                  src="/img/logo-connect/vcb.png"
                  alt=""
                  className={classes.logo}
                />
              </a>
            </div>
            <div className={classes.company__logo}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://momo.com/"
              >
                <img
                  src="/img/logo-connect/momo.png"
                  alt=""
                  className={classes.logo}
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.viettinbank.vn/"
              >
                <img
                  src="/img/logo-connect/VIETTINBANK.png"
                  alt=""
                  className={classes.logo}
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cgv.vn/"
              >
                <img
                  src="/img/logo-connect/IVB.png"
                  alt=""
                  className={classes.logo}
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cgv.vn/"
              >
                <img
                  src="/img/logo-connect/123go.png"
                  alt=""
                  className={classes.logo}
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cgv.vn/"
              >
                <img
                  src="/img/logo-connect/laban.png"
                  alt=""
                  className={classes.logo}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 d-flex text-center">
          <div className={classes.social__width}>
            <p className="d-none d-lg-block d-xl-block pb-2">SOCIAL APP</p>
            <div className={classes.footer__social}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/cosmo.cinema.ldhvn/"
              >
                <img
                  className={classes.logo}
                  src="/img/media/facebook-logo.png"
                  alt=""
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/cosmo.cinema.ldhvn/"
              >
                <img
                  className={classes.logo}
                  src="/img/media/zalo-logo.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.footer__down} container`}>
        <div className="row">
          <div className="col-12 col-md-1 p-1 text-center">
            <img
              src="/img/logo-connect/cinema.png"
              alt="company"
              className={classes.logoCompany}
            />
          </div>
          <div className={`col-12 col-md-9 p-1 text-center text-lg-left`}>
            <p>
              <span>CosmoCinema - SẢN PHẨM CỦA CÔNG TY CỔ PHẦN COSMO</span>{" "}
            </p>
            <p>
              <span>
                Trụ sở chính: 184 LÊ ĐẠI HÀNH, PHƯỜNG 15, QUẬN 11, TPHCM.
              </span>
            </p>

            <p>
              <span>Số Điện Thoại (Hotline): 076 3344 621</span>
            </p>
            <p>
              Email: <span className="d-inline">cosmocinemaldh@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
