import React from "react";
import { Link } from "react-router-dom";
import styles from "./menu.module.scss";

export default function Menu() {
  return (
    <div className={`${styles.menu} application-menu`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>

        <li>
          <Link to="/admin/add-product">Add Product</Link>
        </li>
      </ul>
    </div>
  );
}
