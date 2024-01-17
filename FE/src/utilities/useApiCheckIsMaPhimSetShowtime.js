
import { useEffect, useState } from 'react'
import Axios from "axios";
import PropTypes from 'prop-types';

CheckIsMaPhimSetShowtime.propTypes = {
  maPhim: PropTypes.number.isRequired,
};
export default function CheckIsMaPhimSetShowtime(maPhim) {
  const [isMaPhimSetShowtime, setIsMaPhimSetShowtime] = useState(true)
  const url = `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
  useEffect(() => {
    let cancel = Axios.CancelToken.source(); 
    const loadData = async () => {
      try { 
        const response = await Axios.get(url, { cancelToken: cancel.token })
        const isMaPhimSetShowtime = response.data.lichChieu.length > 0 ? true : false
        setIsMaPhimSetShowtime(isMaPhimSetShowtime);
      } catch (error) { 
        if (Axios.isCancel(error)) { 
          console.log("AxiosCancel: caught cancel");
        } else {
          throw error; 
        }
      }
    };
    loadData();
    setTimeout(() => cancel.cancel(), 5000)
    return () => {
      cancel.cancel(); 
    };
  }, [])

  return isMaPhimSetShowtime
}
