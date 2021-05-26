const intialState = {
    products: [{
            categoryAssociation: 'ELECTRONICS',
            name: 'Xiaomi Smart Router',
            description: 'Xiaomi Mesh 2.4 + 5GHz WiFi Smart Router AC1300 + 1000M LAN + 1300M Power Line Qualcomm DAKOTA 4 Core 4 Signal Amplifie',
            price: '28JD',
            inventoryCount: 0,
        },
        {
            categoryAssociation: 'FOOD',
            name: 'Fettuccine Delicato',
            description: 'Fettuccine pasta, fresh cooking cream, fresh mushroom and marinated chicken.',
            price: '4JD',
            inventoryCount: 0,

        },
        {
            categoryAssociation: 'FOOD',
            name: 'upreme Pizza',
            description: 'Pizza sauce, double amount of pepperoni and mozzarella cheese.',
            price: '28JD',
            inventoryCount: 0,

        },
        {
            categoryAssociation: 'ELECTRONICS',
            name: 'IPX7 waterproof level',
            description: 'IPX7 waterproof level Multi-functional and powerful sitting straight electric cleaning',
            price: '25JD',
            inventoryCount: 0,

        },


    ],
    TotalInventoryCount: 0,
};

const products = (state = intialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'INCREMENT':
            const TotalInventoryCount = state.TotalInventoryCount + 1;
            const products = state.products.map((product) => {
                if (payload === product.name) {
                    return {
                        categoryAssociation: product.categoryAssociation,
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        inventoryCount: product.inventoryCount + 1,
                    };
                } else {
                    return product;
                }
            });
            return { products, TotalInventoryCount };

        default:
            return state;
    }
};

export default products;

export const increment = (name) => {
    return {
        type: 'INCREMENT',
        payload: name,
    };
};