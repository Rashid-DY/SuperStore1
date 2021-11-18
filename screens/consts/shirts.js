const shirts = [
    {
        id: 1,
        name: "Grey Vintage TV Design T-Shirt",
        price: '125.99',
        img: require ('../../assets/Images/shirtsImages/shirt(1).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These Vintage Grey t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },

    {
        id: 2,
        name: "Grey Adidas T-Shirt",
        price: '155.99',
        img: require ('../../assets/Images/shirtsImages/shirt(2).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 3,
        name: "Dusty Green Casual T-Shirt",
        price: '87.99',
        img: require ('../../assets/Images/shirtsImages/shirt(3).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These dusty grey t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 4,
        name: "White Basketball Comic T-Shirt",
        price: '133.99',
        img: require ('../../assets/Images/shirtsImages/shirt(4).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 5,
        name: "Plain Black Long-Sleeved T-Shirt",
        price: '69.99',
        img: require ('../../assets/Images/shirtsImages/shirt(5).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 6,
        name: "Sleek Jean-Blue and Red Long-Sleeved Shirt",
        price: '225.99',
        img: require ('../../assets/Images/shirtsImages/shirt(6).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 7,
        name: "Sky Blue Lacoste Shirt",
        price: '105.99',
        img: require ('../../assets/Images/shirtsImages/shirt(7).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 8,
        name: "Striped Orange Button-Up Shirt",
        price: '142.99',
        img: require ('../../assets/Images/shirtsImages/shirt(8).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 9,
        name: "Mythical Creature Evolution T-Shirt",
        price: '97.99',
        img: require ('../../assets/Images/shirtsImages/shirt(9).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 10,
        name: "Yellow 'Yeah Buoy' T-Shirt",
        price: '73.99',
        img: require ('../../assets/Images/shirtsImages/shirt(10).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 11,
        name: "Lumberjack Vibes T-Shirt",
        price: '166.99',
        img: require ('../../assets/Images/shirtsImages/shirt(11).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 12,
        name: "Black and White USA Paint T-Shirt",
        price: '176.99',
        img: require ('../../assets/Images/shirtsImages/shirt(12).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 13,
        name: "Black Assasin's Creed T-Shirt",
        price: '112.99',
        img: require ('../../assets/Images/shirtsImages/shirt(13).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 14,
        name: "White Abstract Drawn T-Shirt",
        price: '125.99',
        img: require ('../../assets/Images/shirtsImages/shirt(14).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 15,
        name: "Cream Flowered Shirt",
        price: '189.99',
        img: require ('../../assets/Images/shirtsImages/shirt(15).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 16,
        name: "Plain Orange T-Shirt",
        price: '58.99',
        img: require ('../../assets/Images/shirtsImages/shirt(16).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 17,
        name: "Long-Sleeved Grey Savanna V-Neck T-Shirt",
        price: '125.99',
        img: require ('../../assets/Images/shirtsImages/shirt(17).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 18,
        name: "White Octopus T-Shirt",
        price: '143.99',
        img: require ('../../assets/Images/shirtsImages/shirt(18).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 19,
        name: "Long-Sleeved Purple Center Flower T-Shirt",
        price: '138.99',
        img: require ('../../assets/Images/shirtsImages/shirt(19).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 20,
        name: "Dark Grey Big Brain T-Shirt",
        price: '129.99',
        img: require ('../../assets/Images/shirtsImages/shirt(20).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 21,
        name: "Long-Sleeved Collared Gray Sweatshirt",
        price: '167.99',
        img: require ('../../assets/Images/shirtsImages/shirt(21).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 22,
        name: "Full Jean_Material Shirt",
        price: '174.99',
        img: require ('../../assets/Images/shirtsImages/shirt(22).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 23,
        name: "Long-Sleeved Army Green T-Shirt",
        price: '108.99',
        img: require ('../../assets/Images/shirtsImages/shirt(23).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 24,
        name: "White T-Shirt With Black Long Sleeves",
        price: '99.99',
        img: require ('../../assets/Images/shirtsImages/shirt(24).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 25,
        name: "Grey Long-Sleeved Tiger Sweatshirt",
        price: '230.99',
        img: require ('../../assets/Images/shirtsImages/shirt(25).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    },
    
    {
        id: 26,
        name: "Classic Blue Long-Sleeved Shirt",
        price: '320.59',
        img: require ('../../assets/Images/shirtsImages/shirt(26).png'),
        about:
        'Depending on your needs, you can find AEROREADY moisture-managing technology to keep you cool and help to reduce dampness caused by sweat during intense workouts. These t-shirts are designed to be comfortable enough for casual wear but functional to support you whether you’re running, hiking or doing circuits in the gym. Shop with us for men’s sports shirts to wear while you’re getting active.'
    }
];

export default shirts;