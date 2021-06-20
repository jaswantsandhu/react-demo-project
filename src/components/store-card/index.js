import React from "react";
import { Heading, Text } from "../ui";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import styles from "./store-card.module.scss";

// const styles = {
//     card: {
//         boxShadow: "0px 0px 5px #ccc",
//         padding: "10px",
//         marginTop: "10px"
//     },
//     imagesList: {
//         listStyle: "none",
//         display: "flex",
//         flexDirection: "row"
//     },
//     image: {
//         width: "200px",
//         height: "200px"
//     }
// }

export default function StoreCard({ store }) {
  const { name, desc, rating, delivery, id, images, priceRange } = store;

  return (
    <div className={`${styles.card} store-card`}>
      <div className="row">
        <div className="col-8">
          <Link to={`/search/stores/${id}`}>
            <Heading text={name} />
          </Link>
          <Text text={`${priceRange} | ${desc}`} />
          <Text text={`${rating.stars} Stars | ${rating.votes} ratings`} />
          <Text
            text={`${delivery.timeRequired} Mins ${
              delivery.isFree ? "Free Delivery" : "Chargeable"
            }`}
          />
        </div>
        <div className="col-4">
          {images.length > 0 && (
            <ul className={styles.imagesList}>
              <li>
                <img className={styles.image} src={images[0]} />
              </li>
              {images[1] && (
                <li>
                  <img className={styles.image} src={images[1]} />
                </li>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

StoreCard.propTypes = {};
