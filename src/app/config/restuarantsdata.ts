export type OrderItem = {
    id : number
    offer : string
    price : number
    image : string
    details : string
};

// Details for BurgerMenu
export const BurgerMenu : OrderItem[] = [
    {id : 1, offer : 'Royal Burger', price: 30.12, image:'/burgercoke.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
    {id : 2, offer : 'Burger Princess', price: 45.16, image:'/burgercoke.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
    {id : 3, offer : 'Classic Burger', price: 38.10, image:'/burgercoke.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
    {id : 4, offer : 'Pepperoni Burger', price: 20.05, image:'/burgercoke.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
    {id : 5, offer : 'Onion Burger', price: 10.13, image:'/burgercoke.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
    {id : 6, offer : 'Salad Burger', price: 30.12, image:'/burgercoke.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
];

export const FriesMenu : OrderItem[] = [
    {id : 1, offer : 'Royal Fr', price: 30.12, image:'/Mcfries.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
    {id : 2, offer : 'Burger Princess', price: 45.16, image:'/Mcfries.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
    {id : 3, offer : 'Classic Burger', price: 38.10, image:'/Mcfries.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
    {id : 4, offer : 'Pepperoni Burger', price: 20.05, image:'/chips.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
    {id : 5, offer : 'Onion Burger', price: 10.13, image:'/chips.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
    {id : 6, offer : 'Salad Burger', price: 30.12, image:'/chips.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
];

export const ColdDrinks : OrderItem[] = [
    {id : 1, offer : 'Berry Juice', price: 30.12, image:'/PinkDrink.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
    {id : 2, offer : 'Cola', price: 45.16, image:'/cola.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
    {id : 3, offer : 'Zero Cola', price: 38.18, image:'/zerocola.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
    {id : 4, offer : 'Coke Cola', price: 20.05, image:'/whitecola.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
    {id : 5, offer : 'Orange Juice', price: 10.13, image:'/orange.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
    {id : 6, offer : 'Zero Cola', price: 30.12, image:'/cola.png', details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks'},
];

export const RestData = [
    {
        text : `i'm loving it`,
        location : 'McDonald’s East London',
        button1 : 'Minimum Order: 12 GBP',
        button2 : 'Delivery in 20-25 Minutes'
    }
]

export const OffersData = [
    {
        image : '/Girly.png',
        text : 'McDonalds East London',
        button : '/Plus.svg',
        tag : 'First Order Discount',
        percent : '-10%'
    },
    {
        image : '/friends.png',
        text : 'McDonalds East London',
        button : '/Plus.svg',
        tag : 'Vegan Discount', 
        percent : '-20%'
    },
    {
        image : '/cream.png',
        text : 'McDonalds East London',
        button : '/Plus.svg',
        tag : 'Free IceCream Offer',
        percent : '-40%'
    },
];
