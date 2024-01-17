import React from 'react';
import { Link } from "react-router-dom";
import './css.css';

const Page404 = () => {
  return (
    <div id="notfound">
    <div className="notfound">
      <div className="notfound-404">
        <h1>4<span />4</h1>
      </div>
      <h2>Oops! Page Not Be Found</h2>
      <p>Sorry but the page you are looking for does not exist, have been removed. name changed or is temporarily unavailable</p>
      <a href="/">Back to homepage</a>
    </div>
  </div>
  );
};

export default Page404;