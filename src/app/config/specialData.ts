export type Click = {
    id : number
    Size : string
    Price : number
}

export const SpecialData = [
    {
        text : `Desi Flavours with a blend of Italian aesthetics!`,
        location : 'Tandoori Pizza London',
        button1 : 'Minimum Order: 12 GBP',
        button2 : 'Delivery in 20-25 Minutes'
    }
];

export const PizzaDetails = [
    {
        heading : 'Farm House Xterme Pizza',
        details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks',
        image : '/Pizza1.png',
    },
    {
         heading : 'Deluxe Pizza',
        details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks',
        image : '/Pizza2.png',
    },
    {
         heading : 'Tandorri Pizza',
        details : '1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks',
        image : '/Pizza3.png',
    }
];

export const PriceDetails : Click[] = [
    {
        id : 1,
        Size : "Small",
        Price : 21.90,
    },
    {
        id : 2,
        Size : "Medium",
        Price : 25.90,
    },
    {
        id : 3,
        Size : "Large",
        Price : 27.90,
    },
    {
        id : 4,
        Size : "Xtreme",
        Price : 32.90,
    }
]