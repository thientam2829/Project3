import { nanoid } from "nanoid";
import { createMuiTheme } from "@material-ui/core/styles";

const currentUser = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
const avtIdUser = currentUser ? currentUser?.avtIdUser : nanoid(10);
export { avtIdUser };
export const BASE_URL = "http://localhost:4000/api";
export const FAKE_AVATAR = `https://avatar.iran.liara.run/public`;
export const UNKNOW_USER = "/img/unknowUser.png";
export const DISPLAY_MOBILE_BookTicket = "(max-width:768px)";
export const DISPLAY_MOBILE_THEATER = "(max-width:678px)";
export const HIDDEN_SEARCHTICKET = "(max-width:992px)";
export const DISPLAY_MOBILE_HOMEPAGE = "(max-width:736px)";
export const IMG_LOADING = "/img/logoTixLoading.png";
export const DATE_BEGIN_DANGCHIEU = "2024-01-01";
export const DATE_END_DANGCHIEU = "2024-12-01";
export const DATE_BEGIN_SAPCHIEU = "2024-12-02";
export const DATE_END_SAPCHIEU = new Date().toISOString()?.slice(0, 10);

export const arrayGiaVe = [75000, 100000, 120000, 150000];

export const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 678,
      md: 736,
      lg: 768,
      xl: 992,
    },
  },
});
