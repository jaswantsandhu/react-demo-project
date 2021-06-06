import React from "react";
import PropTypes from "prop-types"

const styles = {
    heading : {
        color : "blue",
        fontSize : "24px"
    }
}

export default function Heading({ text })
    {
        return <h2 style={styles.heading}>{text}</h2>
    }

Heading.propTypes = {
    text : PropTypes.string.isRequired
}