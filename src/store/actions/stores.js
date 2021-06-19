import { GET_STORES_ACTION } from "../action-type";

export function getStores() {
    const storeList = [{
        "name": "Pizza Hut",
        "priceRange": 3,
        "desc": "Pizza, Breads, Italian",
        "rating": {
            "stars": 4.7,
            "votes": 4500
        },
        "delivery": {
            "timeRequired": 27,
            "isFree": true
        },
        "id": 1,
        "images": [
            "images/dummy-200x200-Spuma.jpeg",
            "images/dummy-315x560-Eggs.jpeg"
        ]
    }]
    return { type: GET_STORES_ACTION, payload : storeList }
}