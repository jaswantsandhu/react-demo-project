const intialState = {
    stores: [{
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
    }],
}

export default function Stores(state = intialState, action) {
    return state;
}