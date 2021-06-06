import React from "react";
import PropTypes from "prop-types"

const styles = {
    heading: {
        color: "black",
        fontSize: "12px"
    }
}

export default function Text({ text }) {
    return <p style={styles.heading}>{text}</p>
}

Text.propTypes = {
    text: PropTypes.string.isRequired
}