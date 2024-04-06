import axios from "axios";
export const updateShowtime = (showtimeData) => async (dispatch) => {
  try {
    const response = await axios.put(
      `/api/QuanLyDatVe/ChinhSuaLichChieu/${showtimeData.maLichChieu}`,
      showtimeData
    );
    dispatch({
      type: "UPDATE_SHOWTIME_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_SHOWTIME_FAILURE",
      payload: error,
    });
    // Error handling
  }
};
