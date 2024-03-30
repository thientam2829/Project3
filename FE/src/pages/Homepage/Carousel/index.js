// import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { useTheme } from "@material-ui/core/styles";
// import { useDispatch } from "react-redux";
// import Slider from "react-slick";
// import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
// import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
// import SearchStickets from "./SearchTickets";
// import useStyles from "./styles";
// import BtnPlay from "../../../components/BtnPlay";
// import { LOADING_BACKTO_HOME_COMPLETED } from "../../../reducers/constants/Lazy";
// import homeCarouselData from "../../../constants/homeCarouselData";
// import "./carousel.css";

// export default function Carousel() {
//   const [listFilmBanner, setListFilmBanner] = useState(homeCarouselData);
//   const dispatch = useDispatch();
//   const theme = useTheme();
//   const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
//   const history = useHistory();
//   const classes = useStyles();
//   const settings = {
//     dots: true,
//     infinite: true,
//     autoplaySpeed: 5000, //speed per sence
//     autoplay: true,
//     speed: 500,
//     swipeToSlide: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     dotsClass: "slickdotsbanner",
//   };

//   useEffect(() => {
//     dispatch({ type: LOADING_BACKTO_HOME_COMPLETED });
//   }, []);

//   function NextArrow(props) {
//     const { onClick } = props;
//     return (
//       <ArrowForwardIosRoundedIcon
//         style={{ right: "15px" }}
//         onClick={onClick}
//         className={classes.Arrow}
//       />
//     );
//   }

//   function PrevArrow(props) {
//     const { onClick } = props;
//     return (
//       <ArrowBackIosRoundedIcon
//         style={{ left: "15px" }}
//         onClick={onClick}
//         className={classes.Arrow}
//       />
//     );
//   }

//   return (
//     <div id="carousel" className={classes.carousel}>
//       <Slider {...settings}>
//         {listFilmBanner.map((banner) => (
//           <div key={banner.maPhim} className={classes.itemSlider}>
//             <img src={banner?.hinhAnh} alt="banner" className={classes.img} />
//             <div
//               className={classes.backgroundLinear}
//               onClick={() => history.push(`/detail/${banner.maPhim}`)}
//             />
//           </div>
//         ))}
//       </Slider>
//       <SearchStickets />
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import SearchStickets from "./SearchTickets";
import useStyles from "./styles";
import BtnPlay from "../../../components/BtnPlay";
import { LOADING_BACKTO_HOME_COMPLETED } from "../../../reducers/constants/Lazy";
import axios from "axios";
import "./carousel.css";

export default function Carousel() {
  const [listFilmBanner, setListFilmBanner] = useState([]);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const history = useHistory();
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 3000, //speed per sence
    autoplay: true,
    speed: 500,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slickdotsbanner",
  };

  useEffect(() => {
    dispatch({ type: LOADING_BACKTO_HOME_COMPLETED });
    fetchBannerData();
  }, []);
  function fetchBannerData() {
    axios
      .get("http://localhost:4000/api/QuanLyBanner/LayDanhSachBanner")
      .then((response) => {
        setListFilmBanner(response.data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching banner data:", error);
      });
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <ArrowForwardIosRoundedIcon
        style={{ right: "15px" }}
        onClick={onClick}
        className={classes.Arrow}
      />
    );
  }

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <ArrowBackIosRoundedIcon
        style={{ left: "15px" }}
        onClick={onClick}
        className={classes.Arrow}
      />
    );
  }

  return (
    <div id="carousel" className={classes.carousel}>
      <Slider {...settings}>
        {listFilmBanner.map((banner) => (
          <div key={banner.maPhim} className={classes.itemSlider}>
            <img src={banner?.hinhAnh} alt="banner" className={classes.img} />
            <div
              className={classes.backgroundLinear}
              onClick={() => history.push(`/detail/${banner.maPhim}`)}
            />
          </div>
        ))}
      </Slider>
      <SearchStickets />
    </div>
  );
}
