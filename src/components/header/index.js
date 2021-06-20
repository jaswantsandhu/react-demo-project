import React, { useState } from "react";
import PropTypes from "prop-types";
import Menu from "../menu";
import Location from "../location";
import Logo from "../logo";
import Search from "../search";
import Cart from "../cart";
import styles from "./header.module.scss"; // Import css modules stylesheet as styles

console.log(styles);

export default function Header({ color, links, time, stopClock }) {
  return (
    <header className={`main-header ${styles.header}`}>
      <Menu />
      <Location />
      {/* <Logo />
      <Search />
       */}
      <Cart />
    </header>
  );
}

Header.defaultProps = {
  color: "red",
  links: [],
};

Header.propTypes = {
  color: PropTypes.string,
  links: PropTypes.array.isRequired,
};
