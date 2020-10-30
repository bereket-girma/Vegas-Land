import React from "react";

import Bars from "../views/Bars";
import Restaurants from "../views/Restaurants";
import Experiences from "../views/Experiences";
import About from "../views/About";

import styles from "./Navbar.module.css";

export function Navbar() {
  return (
    <nav>
      <div className="logo">
        <p>Vegas Land</p>
      </div>
      <ul className={styles.nav_links}>
        <li>
          <a href="http://localhost:3000/bars">Bars</a>
        </li>
        <li>
          <a href="http://localhost:3000/restaurants">Restaurants</a>
        </li>
        <li>
          <a href="http://localhost:3000/experiences">Experiences</a>
        </li>
        <li>
          <a href="http://localhost:3000/about">Our Team</a>
        </li>
      </ul>
      <div className={styles.burger}>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
      </div>
    </nav>
  );
}