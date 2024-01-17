import React, { useState, useEffect } from "react";
import "./Film_Flip.css";
import { useParams, useHistory } from "react-router-dom";
import moviesApi from "../../api/moviesApi";

export default function Film_Flip() {
  const { maPhim } = useParams();
  const [data, setMovieData] = useState({});
  const history = useHistory();

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await moviesApi.getThongTinPhim(maPhim);

        setMovieData(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [maPhim]);

  return (
    <div className="flip-card mt-2">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={data.hinhAnh}
            alt="Avatar"
            style={{ width: 300, height: 300 }}
          />
        </div>
        <div
          className="flip-card-back"
          style={{ position: "relative", backgroundColor: "rgba(0,0,0,.9)" }}
        >
          <div style={{ position: "absolute", top: 0, left: 0 }}>
            <img
              src={data.hinhAnh}
              alt="Avatar"
              style={{ width: 300, height: 300 }}
            />
          </div>
          <div
            className="w-full h-full"
            style={{
              position: "absolute",
              backgroundColor: "rgba(0,0,0,.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <div className="rounded-full cursor-pointer"></div>
              <div className="text-2xl mt-2 font-bold">{data.tenPhim}</div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          history.push(`/detail/${data.maPhim}`);
        }}
        className="bg-orange-300 text-center cursor-pointer py-2 bg-indigo-300 my-2 text-success-50 font-bold"
      >
        ĐẶT VÉ
      </div>
    </div>
  );
}
