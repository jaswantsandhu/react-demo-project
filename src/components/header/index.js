import React, { useState } from "react";
import PropTypes from "prop-types";
import Menu from "../menu";
import Location from "../location";
import Logo from "../logo";
import Search from "../search";
import Cart from "../cart";
import styles from "./header.module.scss"; // Import css modules stylesheet as styles

import { useSelector } from "react-redux";

export default function Header({ color, links, time, stopClock }) {
  const user = useSelector((state) => {
    return {
      user: state.user.info,
    };
  });

  console.log(user);

  return (
    <header className={`main-header ${styles.header}`}>
      <Menu />
      <Location />
      {/* <Logo />
      <Search />
       */}
      <Cart />
      <p> { user.user.email }</p>

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
