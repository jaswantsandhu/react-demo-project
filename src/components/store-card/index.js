import React from "react";
import { Heading, Text } from "../ui"

const styles = {
    card: {
        boxShadow: "0px 0px 5px #ccc",
        padding: "10px",
        marginTop: "10px"
    }
}

export default function StoreCard({ store }) {

    const { name, desc, priceRange, rating, delivery, id, images } = store

    return <div className="store-card" style={styles.card}>
        <ul>
            <li><img /></li>
            <li><img /></li>
        </ul>
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