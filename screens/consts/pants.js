const pants = [
    {
        id: 1,
        name: "Light Faded Blue Jeans",
        price: "172.99",
        img: require("../../assets/Images/pantsImages/pant(1).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 2,
        name: "Dark Blue Baggy Jeans",
        price: "174.99",
        img: require("../../assets/Images/pantsImages/pant(2).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },

    {
        id: 3,
        name: "Red 'The Lab' Cotton Shorts",
        price: "192.99",
        img: require("../../assets/Images/pantsImages/pant(3).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 4,
        name: "Deep Blue Skinny Jeans",
        price: "199.99",
        img: require("../../assets/Images/pantsImages/pant(4).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 5,
        name: "Casual Brown Trousers",
        price: "193.99",
        img: require("../../assets/Images/pantsImages/pant(5).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 6,
        name: "Fitting Navy-Blue Pants",
        price: "189.99",
        img: require("../../assets/Images/pantsImages/pant(6).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 7,
        name: "Large Brown Cargo Trousers",
        price: "159.99",
        img: require("../../assets/Images/pantsImages/pant(7).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 8,
        name: "Classic Light Brown Pants",
        price: "149.99",
        img: require("../../assets/Images/pantsImages/pant(8).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 9,
        name: "Large Grey Jogggers",
        price: "174.99",
        img: require("../../assets/Images/pantsImages/pant(9).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 10,
        name: "Hip, Baggy Black Trousers",
        price: "159.99",
        img: require("../../assets/Images/pantsImages/pant(10).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 11,
        name: "Red Sweatpants With Gray Lining",
        price: "183.99",
        img: require("../../assets/Images/pantsImages/pant(11).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 12,
        name: "Plain Teal Coloured Shorts",
        price: "159.99",
        img: require("../../assets/Images/pantsImages/pant(12).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 13,
        name: "Neat Gray-Colored Shorts",
        price: "103.99",
        img: require("../../assets/Images/pantsImages/pant(13).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 14,
        name: "Cool Neat Print Pattern Shorts",
        price: "129.99",
        img: require("../../assets/Images/pantsImages/pant(14).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 15,
        name: "Classic Gentleman Shorts",
        price: "184.99",
        img: require("../../assets/Images/pantsImages/pant(15).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 16,
        name: "Pitch Black Sweatpants",
        price: "164.99",
        img: require("../../assets/Images/pantsImages/pant(16).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 17,
        name: "Nicely Fitting Blue Jeans",
        price: "222.99",
        img: require("../../assets/Images/pantsImages/pant(17).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 18,
        name: "'Return to Monke' Shorts",
        price: "203.99",
        img: require("../../assets/Images/pantsImages/pant(18).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, shorts, jeans, joggers, sweatpants, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 19,
        name: "Official Quality Black Trousers",
        price: "222.99",
        img: require("../../assets/Images/pantsImages/pant(19).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 20,
        name: "Beautiful Tie-Dye Shorts",
        price: "196.99",
        img: require("../../assets/Images/pantsImages/pant(20).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 21,
        name: "Hot Blue Sde-design Shorts",
        price: "222.99",
        img: require("../../assets/Images/pantsImages/pant(21).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 22,
        name: "Army Green Sweatpants",
        price: "193.99",
        img: require("../../assets/Images/pantsImages/pant(22).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 23,
        name: "Regular Grey Shorts",
        price: "184.99",
        img: require("../../assets/Images/pantsImages/pant(23).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 24,
        name: "Black Cargo Pants",
        price: "174.99",
        img: require("../../assets/Images/pantsImages/pant(24).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    },
    {
        id: 25,
        name: "Deep Grey with Black-Lined Sweatshorts",
        price: "202.99",
        img: require("../../assets/Images/pantsImages/pant(25).png"),
        about: 'Superstore’s wide range of men’s pants has something for every man. Whether you’re looking for pants with an expandable waistband, an easy no-iron style, or long-lasting khaki, Superstore has you covered. Formal dress slacks, casual, weekend classics, or bottoms that can take you from the office to the green, Superstore has the perfect style for any and every occasion.'
    }
];

export default pants;