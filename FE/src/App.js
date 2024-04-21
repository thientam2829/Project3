import { Suspense, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

import ModalTrailer from "./components/ModalTrailer";
import LazyLoad from "./components/LazyLoad";
import Loading from "./components/Loading";
// layout
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
// guards
import AdminRoute from "./guards/AdminRoute";
import CheckoutRoute from "./guards/CheckoutRoute";
import UserProfileRoute from "./guards/UserProfileRoute";
// page
import Homepage from "./pages/Homepage";
import MovieDetail from "./pages/MovieDetail";
import UserProfile from "./pages/UserProfile";
import BookTicket from "./pages/BookTicket";
import UsersManagement from "./pages/UsersManagement";
import MovieList from "./pages/NowShowing";
import MoviesManagement from "./pages/MoviesManagement";
import CreateShowtime from "./pages/CreateShowtime";
import Book from "./pages/Book";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Page404 from "./pages/Page404";
import moviesApi from "./api/moviesApi";
import Backdrop from "@material-ui/core/Backdrop";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import ResetPassword from "./pages/ResetPassword/resetpass";
import Typography from "@material-ui/core/Typography";
import ForgotPassword from "./pages/ResetPassword/forgotpass";
import VerifyOTP from "./pages/Register/verifyOTP";
import NewsPage from "./pages/NewDetails";
import NewsList from "./pages/AdminNews";
import TermsOfService from "./pages/Term/TermOfUse";
import FAQPage from "./pages/Term/FAQ/FAQ";
import PrivacyPolicy from "./pages/Term/PrivacyPolicy/PrivacyPolicy";
import BannerList from "./pages/AdminBanner";
import Statistical from "./pages/Statistical/Statistical";
import AllNews from "./pages/News/NewPage";
import Employee from "./pages/Employee";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
  width: 400,
  p: 1,
  zIndex: 100,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const btnMuaVe = {
  fontSize: "16px",
  textAlign: "center",
  width: "130px",
  borderRadius: "4px",
  padding: "8px 11px",
  transition: "all .2s",
  margin: "20px 2px",
  backgroundColor: "rgb(238, 130, 59)",
  border: "none",
  color: "#fff",
  fontWeight: "600",
  "&:hover": {
    backgroundColor: "#b42a14",
  },
};

const text = {
  fontWeight: "bolder",
  color: "#fff",
  margin: "20px 0",
  textTransform: "uppercase",
};

const overLay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)", // Replace with your desired background color
  zIndex: 1,
};

function App() {
  const [open, setOpen] = useState(true);

  const handleClose = () => setOpen(false);
  const [banner, setBanner] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await getListBanner();
    };

    fetchData();
  }, []);

  const getListBanner = async () => {
    try {
      const result = await moviesApi.getDanhSachPhim();
      if (result) {
        setBanner(result.data[result.data.length - 1]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BrowserRouter>
      <Loading />
      <ModalTrailer />
      <Suspense fallback={<LazyLoad />}>
        <Switch>
          <Route exact path={["/", "/detail/:maPhim", "/taikhoan"]}>
            <MainLayout>
              {open && <div style={overLay} />}
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Link to={`/detail/${banner.maPhim}`}>
                      <img
                        style={{ width: "100%", objectFit: "cover" }}
                        src={banner.hinhAnh ?? ""}
                        alt="Hinh Anh"
                      />
                    </Link>
                    <Typography style={text}>{banner.tenPhim ?? ""}</Typography>
                    <Link to={`/detail/${banner.maPhim}`} style={btnMuaVe}>
                      Đặt Ngay
                    </Link>
                  </Box>
                </Fade>
              </Modal>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/detail/:maPhim" component={MovieDetail} />

              <UserProfileRoute
                exact
                path="/taikhoan"
                component={UserProfile}
              />
            </MainLayout>
          </Route>
          <Route path="/news/:id">
            <MainLayout>
              <NewsPage />
            </MainLayout>
          </Route>
          <Route path="/tintuc">
            <MainLayout>
              <AllNews />
            </MainLayout>
          </Route>
          <Route path="/phimdangchieu">
            <MainLayout>
              <MovieList />
            </MainLayout>
          </Route>
          <Route path="/dieukhoansudung">
            <MainLayout>
              <TermsOfService />
            </MainLayout>
          </Route>
          <Route path="/chinhsachbaomat">
            <MainLayout>
              <PrivacyPolicy />
            </MainLayout>
          </Route>
          <Route path="/faq">
            <MainLayout>
              <FAQPage />
            </MainLayout>
          </Route>
          <CheckoutRoute
            exact
            path="/datve/:maLichChieu"
            component={BookTicket}
          />
          <Route
            exact
            path={[
              // "/admin/users",
              "/admin/movies",
              "/admin/showtimes",
              "/admin/films/addnew",
              "/admin/book",
              "/admin/news",
              "/admin/banners",
              "/admin/statistical",
              "/admin/employee",
            ]}
          >
            <AdminLayout>
              {/* <AdminRoute
                exact
                path="/admin/users"
                component={UsersManagement}
              /> */}
              <AdminRoute
                exact
                path="/admin/movies"
                component={MoviesManagement}
              />
              <AdminRoute
                exact
                path="/admin/showtimes"
                component={CreateShowtime}
              />
              <AdminRoute exact path="/admin/book" component={Book} />
              <AdminRoute exact path="/admin/films/addnew" />
              <AdminRoute exact path="/admin/news" component={NewsList} />
              <AdminRoute exact path="/admin/banners" component={BannerList} />
              <AdminRoute exact path="/admin/employee" component={Employee} />
              <AdminRoute
                exact
                path="/admin/statistical"
                component={Statistical}
              />
            </AdminLayout>
          </Route>
          <Route exact path={["/login", "/signUp"]}>
            <MainLayout>
              <Route exact path="/login" component={Login} />
              <Route exact path="/signUp" component={Register} />
            </MainLayout>
          </Route>
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <Route path="/verify-otp" component={VerifyOTP} />
          <Route component={Page404} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
