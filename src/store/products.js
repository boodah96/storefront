const intialState = {
    products: [{
            id: 1,
            categoryAssociation: 'ELECTRONICS',
            name: 'Xiaomi Smart Router',
            description: 'Xiaomi Mesh 2.4 + 5GHz WiFi Smart Router AC1300 + 1000M LAN + 1300M Power Line Qualcomm DAKOTA 4 Core 4 Signal Amplifie',
            price: '28JD',
            inventoryCount: 0,
        },
        {
            id: 2,
            categoryAssociation: 'FOOD',
            name: 'Fettuccine Delicato',
            description: 'Fettuccine pasta, fresh cooking cream, fresh mushroom and marinated chicken.',
            price: '4JD',
            inventoryCount: 0,

        },
        {
            id: 3,
            categoryAssociation: 'FOOD',
            name: 'upreme Pizza',
            description: 'Pizza sauce, double amount of pepperoni and mozzarella cheese.',
            price: '28JD',
            inventoryCount: 0,

        },
        {
            id: 4,
            categoryAssociation: 'ELECTRONICS',
            name: 'IPX7 waterproof level',
            description: 'IPX7 waterproof level Multi-functional and powerful sitting straight electric cleaning',
            price: '25JD',
            inventoryCount: 0,

        },


    ],
    TotalInventoryCount: 0,
    cartProducts: [],
    show: false,
};

const products = (state = intialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'INCREMENT':
            const TotalInventoryCount = state.TotalInventoryCount + 1;
            const products = state.products.map((product) => {
                if (payload === product.id) {
                    return {
                        id: payload,
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
            return {
                products,
                TotalInventoryCount,
                cartProducts: state.cartProducts,
                show: state.show,
            };
        case 'ADD_CART':
            const product = state.products.find((product) => product.id === payload);

            const cartProducts = [...state.cartProducts, product];

            const prev = state.cartProducts.find((product) => product.id === payload);

            const index = cartProducts.indexOf(prev);

            if (index !== -1) cartProducts.splice(index, 1);

            return {
                products: state.products,
                TotalInventoryCount: state.TotalInventoryCount,
                cartProducts,
                show: state.show,
            };
        case 'DELETE':
            const productsDelete = state.cartProducts.filter(
                (product) => product.id !== payload,
            );

            const sum = productsDelete.reduce((acc, product) => {
                acc += product.inventoryCount;
                return acc;
            }, 0);

            const InventoryCount = sum;

            const newProducts = state.products.map((product) => {
                if (payload === product.id) {
                    return {
                        id: payload,
                        categoryAssociation: product.categoryAssociation,
                        name: product.name,
                        description: product.description,
                        price: product.price,
                        inventoryCount: 0,
                        img: product.img,
                    };
                } else {
                    return product;
                }
            });

            return {
                products: newProducts,
                TotalInventoryCount: InventoryCount,
                cartProducts: productsDelete,
                show: state.show,
            };
        case 'SHOW':
            return {
                products: state.products,
                TotalInventoryCount: state.TotalInventoryCount,
                cartProducts: state.cartProducts,
                show: payload,
            };



        default:
            return state;
    }
};

export default products;

export const increment = (id) => {
    return {
        type: 'INCREMENT',
        payload: id,
    };
};
export const getCartProducts = (id) => {
    return {
        type: 'ADD_CART',
        payload: id,
    };
};

export const handleShow = (boolean) => {
    return {
        type: 'SHOW',
        payload: boolean,
    };
};

export const deleteCartPeoduct = (id) => {
    return {
        type: 'DELETE',
        payload: id,
    };
};