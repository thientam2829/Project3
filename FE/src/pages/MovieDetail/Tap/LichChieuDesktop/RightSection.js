// import React, { useState, useMemo } from "react";

// import useStyles from "./style";
// import formatDate from "../../../../utilities/formatDate";
// import ItemCumRap from "../../../../components/ItemCumRap";
// import { selectDesktopData } from "../../../../reducers/selector/MovieDetail";

// export default function RightSection({ currentSelectedHeThongRapChieu }) {
//   const [indexSelected, setindexSelected] = useState(0);
//   const desktopData = useMemo(
//     () => selectDesktopData(currentSelectedHeThongRapChieu),
//     [currentSelectedHeThongRapChieu]
//   );

//   // Check if the arrays are actually arrays
//   const arrayDay = Array.isArray(desktopData?.arrayDay)
//     ? desktopData.arrayDay
//     : [];
//   const allArrayCumRapChieuFilterByDay = Array.isArray(
//     desktopData?.allArrayCumRapChieuFilterByDay
//   )
//     ? desktopData.allArrayCumRapChieuFilterByDay
//     : [];
//   console.log(desktopData);

//   const classes = useStyles();

//   const handleSelectDay = (i) => {
//     setindexSelected(i);
//   };

//   return (
//     <div>
//       <div className={classes.listDay}>
//         {arrayDay.map((day, i) => (
//           <div
//             className={classes.dayItem}
//             key={day}
//             style={{
//               color: i === indexSelected ? "rgb(238, 130, 59)" : "#000",
//             }}
//             onClick={() => handleSelectDay(i)}
//           >
//             <p>{formatDate(day).dayToday}</p>
//             <p style={{ transition: "all .2s", marginLeft: "5px" }}>
//               {formatDate(day).YyMmDd}
//             </p>
//           </div>
//         ))}
//       </div>
//       {allArrayCumRapChieuFilterByDay.map((arrayCumRapChieuFilterByDay, i) => (
//         <div
//           style={{ display: indexSelected === i ? "block" : "none" }}
//           key={i}
//         >
//           {arrayCumRapChieuFilterByDay.map((item) => (
//             <ItemCumRap
//               key={item.tenCumRap}
//               tenCumRap={item.tenCumRap}
//               maLichChieu={item.maLichChieu}
//               lichChieuPhim={item.lichChieuPhim}
//               defaultExpanded={true}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }
// import React, { useState, useMemo } from "react";
// import useStyles from "./style";
// import formatDate from "../../../../utilities/formatDate";
// import ItemCumRap from "../../../../components/ItemCumRap";
// import { selectDesktopData } from "../../../../reducers/selector/MovieDetail";

// export default function RightSection({ currentSelectedHeThongRapChieu }) {
//   const [indexSelected, setindexSelected] = useState(0);
//   const desktopData = useMemo(
//     () => selectDesktopData(currentSelectedHeThongRapChieu),
//     [currentSelectedHeThongRapChieu]
//   );
//   const classes = useStyles();

//   const handleSelectDay = (i) => {
//     setindexSelected(i);
//   };
//   const filterUniqueShowtimes = (showtimes) => {
//     const seen = new Set();
//     return showtimes.filter((showtime) => {
//       const identifier = `${showtime.maLichChieu}-${showtime.ngayChieuGioChieu}`;
//       if (seen.has(identifier)) {
//         return false;
//       }
//       seen.add(identifier);
//       return true;
//     });
//   };

//   return (
//     <div>
//       <div className={classes.listDay}>
//         {desktopData?.arrayDay?.map((day, i) => (
//           <div
//             className={classes.dayItem}
//             key={day}
//             style={{
//               color: i === indexSelected ? "rgb(238, 130, 59)" : "#000",
//             }}
//             onClick={() => handleSelectDay(i)}
//           >
//             <p>{formatDate(day).dayToday}</p>
//             <p style={{ transition: "all .2s", marginLeft: "5px" }}>
//               {formatDate(day).YyMmDd}
//             </p>
//           </div>
//         ))}
//       </div>
//       {desktopData?.allArrayCumRapChieuFilterByDay?.map(
//         (arrayCumRapChieuFilterByDay, i) => (
//           <div
//             style={{ display: indexSelected === i ? "block" : "none" }}
//             key={i}
//           >
//             {arrayCumRapChieuFilterByDay.map((item) => (
//               <ItemCumRap
//                 key={item.tenCumRap}
//                 tenCumRap={item.tenCumRap}
//                 maLichChieu={item.maLichChieu}
//                 lichChieuPhim={filterUniqueShowtimes(item.lichChieuPhim)}
//                 defaultExpanded={true}
//               />
//             ))}
//           </div>
//         )
//       )}
//     </div>
//   );
// }
import React, { useState, useMemo, useEffect } from "react";
import useStyles from "./style";
import formatDate from "../../../../utilities/formatDate";
import ItemCumRap from "../../../../components/ItemCumRap";
import { selectDesktopData } from "../../../../reducers/selector/MovieDetail";

export default function RightSection({ currentSelectedHeThongRapChieu }) {
  const [indexSelected, setIndexSelected] = useState(0);
  const classes = useStyles();
  const formatDateToDMY = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };
  // Get today's date
  const today = useMemo(() => {
    const now = new Date();
    return formatDateToDMY(now.toISOString().slice(0, 10));
  }, []);

  const tomorrow = useMemo(() => {
    const temp = new Date();
    temp.setDate(temp.getDate() + 1);
    return formatDateToDMY(temp.toISOString().slice(0, 10));
  }, []);

  const desktopData = useMemo(() => {
    const data = selectDesktopData(currentSelectedHeThongRapChieu);
    const filteredDays = data.arrayDay.filter(
      (day) => day === today || day === tomorrow
    );
    const filteredShowtimesByDay = filteredDays.map(
      (day) => data.allArrayCumRapChieuFilterByDay[data.arrayDay.indexOf(day)]
    );

    return {
      ...data,
      arrayDay: filteredDays,
      allArrayCumRapChieuFilterByDay: filteredShowtimesByDay,
    };
  }, [currentSelectedHeThongRapChieu, today, tomorrow]);

  const handleSelectDay = (i) => {
    setIndexSelected(i);
  };

  const filterUniqueShowtimes = (showtimes) => {
    const seen = new Set();
    return showtimes.filter((showtime) => {
      const identifier = `${showtime.maLichChieu}-${showtime.ngayChieuGioChieu}`;
      if (seen.has(identifier)) {
        return false;
      }
      seen.add(identifier);
      return true;
    });
  };

  useEffect(() => {
    if (indexSelected >= desktopData.arrayDay.length) {
      setIndexSelected(0);
    }
  }, [desktopData.arrayDay, indexSelected]);

  return (
    <div>
      {desktopData.arrayDay.length > 0 ? (
        <div className={classes.listDay}>
          {desktopData.arrayDay.map((day, i) => (
            <div
              className={classes.dayItem}
              key={day}
              style={{
                color: i === indexSelected ? "rgb(238, 130, 59)" : "#000",
              }}
              onClick={() => handleSelectDay(i)}
            >
              <p>{formatDate(day).dayToday}</p>
              <p style={{ transition: "all .2s", marginLeft: "5px" }}>
                {formatDate(day).YyMmDd}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>KHÔNG CÓ LỊCH CHIẾU PHÙ HỢP.</p>
      )}
      {desktopData.arrayDay.length > 0 &&
        desktopData.allArrayCumRapChieuFilterByDay[indexSelected]?.map(
          (item) => (
            <ItemCumRap
              key={item.tenCumRap}
              tenCumRap={item.tenCumRap}
              maLichChieu={item.maLichChieu}
              lichChieuPhim={filterUniqueShowtimes(item.lichChieuPhim)}
              defaultExpanded={true}
            />
          )
        )}
    </div>
  );
}
