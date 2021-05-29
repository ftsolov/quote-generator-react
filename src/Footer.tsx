import React, { useEffect, useState } from "react";
import "./App.css";

const Footer = () => {
  return (
    <div className="footer">
      <p>Created by: Filip Tsolov</p>
      <div>
        <a href="https://github.com/ftsolov">
          <i className="fab fa-github-square" />
        </a>
        <a href="https://www.twitter.com/ftsolov">
          <i className="fab fa-twitter-square" />
        </a>
        <a href="https://www.linkedin.com/in/filiptsolov/">
          <i className="fab fa-linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
