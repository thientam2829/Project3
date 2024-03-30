import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Pie, Doughnut, Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import "chartjs-plugin-datalabels";
import "./Statistical.css";

function Statistical() {
  const [movieRevenue, setMovieRevenue] = useState([]);
  const [theaterRevenue, setTheaterRevenue] = useState([]);
  const [monthlyTheaterRevenue, setMonthlyTheaterRevenue] = useState([]);
  useEffect(() => {
    const fetchMovieRevenue = async () => {
      try {
        const movieResponse = await axios.get(
          "http://localhost:4000/api/ThongKe/DoanhThuPhim"
        );
        setMovieRevenue(movieResponse.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu doanh thu phim:", error);
      }
    };

    const fetchTheaterRevenue = async () => {
      try {
        const theaterResponse = await axios.get(
          "http://localhost:4000/api/ThongKe/doanhthuphimtheorap"
        );
        setTheaterRevenue(theaterResponse.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu doanh thu theo rạp:", error);
      }
    };

    const fetchMonthlyTheaterRevenue = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/ThongKe/DoanhThuTheoThang"
        );
        setMonthlyTheaterRevenue(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu doanh thu theo tháng:", error);
      }
    };

    fetchMonthlyTheaterRevenue();
    fetchMovieRevenue();
    fetchTheaterRevenue();
  }, []);

  const totalRevenue = movieRevenue.reduce(
    (total, item) => total + item.TongDoanhThu,
    0
  );

  const barChartData = {
    labels: theaterRevenue.map((item) => ` (${item.tenCumRap})`),
    datasets: [
      {
        label: "Doanh Thu Theo Rạp",
        data: theaterRevenue.map((item) => item.TongDoanhThu),
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: movieRevenue.map((item) => item.tenPhim),
    datasets: [
      {
        label: "Doanh Thu Phim",
        data: movieRevenue.map((item) =>
          ((item.TongDoanhThu / totalRevenue) * 100).toFixed(2)
        ),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#E7E9ED",
          "#4BC0C0",
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360",
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#E7E9ED",
          "#4BC0C0",
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360",
        ],
      },
    ],
  };

  const pieChartOptions = {
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      datalabels: {
        color: "#fff",
        formatter: (value, ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        anchor: "end",
        align: "start",
        offset: -10,
      },
    },
  };
  function processLineChartData(data) {
    const months = [...new Set(data.map((item) => item.Thang))].sort();
    const theaters = [...new Set(data.map((item) => item.tenCumRap))];
    const datasets = theaters.map((theater) => {
      const dataForTheater = months.map((month) => {
        const found = data.find(
          (item) => item.tenCumRap === theater && item.Thang === month
        );
        return found ? found.TongDoanhThu : 0;
      });

      return {
        label: theater,
        data: dataForTheater,
        fill: false,
        borderColor: getRandomColor(),
        tension: 0.1,
      };
    });

    return {
      labels: months,
      datasets,
    };
  }

  function getRandomColor() {
    let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return color;
  }
  const lineChartData = processLineChartData(monthlyTheaterRevenue);

  const lineChartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard-container">
      <div className="charts-container">
        <div className="chart-container chart-bar">
          <h3>Doanh thu theo rạp</h3>
          <Bar data={barChartData} />
        </div>
        <div className="chart-container chart-pie">
          <h3>Phần trăm tổng doanh thu</h3>
          <Doughnut data={pieChartData} options={pieChartOptions} />
        </div>
        <div className="chart-container chart-line">
          <h3>Doanh Thu Theo Tháng</h3>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
      </div>

      <div className="table-container">
        <h3>Doanh Thu Các Phim</h3>
        <table>
          <thead>
            <tr>
              <th>Tên Phim</th>
              <th>Tổng Doanh Thu</th>
            </tr>
          </thead>
          <tbody>
            {movieRevenue.map((item) => (
              <tr key={item.tenPhim}>
                <td>{item.tenPhim}</td>
                <td>{item.TongDoanhThu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Statistical;
