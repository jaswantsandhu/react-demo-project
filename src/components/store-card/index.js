import React from "react";
import { Heading, Text } from "../ui"

const styles = {
    card: {
        boxShadow: "0px 0px 5px #ccc",
        padding: "10px",
        marginTop: "10px"
    },
    imagesList: {
        listStyle: "none",
        display: "flex",
        flexDirection: "row"
    },
    image : {
        width : "200px",
        height : "200px"
    }
}

export default function StoreCard({ store }) {

    const { name, desc, rating, delivery, id, images, priceRange } = store;

    return <div className="store-card" style={styles.card}>
        {images.length > 0 && <ul style={styles.imagesList}>
            <li><img style={styles.image} src={images[0]} /></li>
            {images[1] && <li><img style={styles.image} src={images[1]} /></li>}
        </ul>}
        <div className="row">
            <div className="col-8">
                <Heading text={name} />
                <Text text={`${priceRange} | ${desc}`} />
                <Text text={`${rating.stars} Stars | ${rating.votes} ratings`} />
            </div>
            <div className="col-4">
                <Text text={`${delivery.timeRequired} Mins ${delivery.isFree ? "Free Delivery" : "Chargeable"}`} />
            </div>
        </div>
    </div>
}