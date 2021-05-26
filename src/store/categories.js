const intialState = {
    categories: [{
            name: 'ELECTRONICS',
            displayName: 'ELECTRONICS',
            description: 'Enjoy a safe, convenient Electronics shopping experience',
        },
        {
            name: 'FOOD',
            displayName: 'FOOD',
            description: 'Enjoy a safe, convenient Food shopping experience',
        },
    ],
    active: '',
};

const categories = (state = intialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'ACTIVE_CATEGORY':
            const active = payload;
            const categories = state.categories;
            return { categories, active };

        default:
            return state;
    }
};

export default categories;

export const getCategory = (category) => {
    return {
        type: 'ACTIVE_CATEGORY',
        payload: category,
    };
};