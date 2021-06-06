import React, { useState } from "react";
import PropTypes from "prop-types"
import Menu from "../menu";
import Location from "../location";
import Logo from "../logo";
import Search from "../search";
import Cart from "../cart";

const styles = {
    header : {
        display : "flex",
        "justify-content" : "space-between"
    }
}

export default function Header({ color, links, time, stopClock }) {
    return <header style={styles.header} className="main-header">
        <Menu />
        <Location />
        <Logo />
        <Search />
        <Cart />
    </header>
}

Header.defaultProps = {
    color : "red",
    links : []
}

Header.propTypes = {
    color : PropTypes.string,
    links : PropTypes.array.isRequired
}