import superagent from 'superagent';
const apiProds = 'https://api-server-401d14.herokuapp.com/products';
const apiCats = 'https://api-server-401d14.herokuapp.com/categories';

export const getRemoteData = (activeCategory) => (dispatch) => {
    console.log("inside dispatch of getRemoteData!!!! ")
    superagent.get(apiProds).then(dataProds => {
        superagent.get(apiCats).then(dataCat => {
            return dispatch(getAction({ products: dataProds.body.results, categories: dataCat.body.results, activeCategory: activeCategory }))
        });
    });
}


export const changeActiveCategory = (activeCategory) => (dispatch) => {
    return dispatch(getActiveCategory(activeCategory))
}






const getAction = payload => {

    return {
        type: 'GET',
        payload: payload
    }
}


const getActiveCategory = payload => {
    return {
        type: "activeCategory",
        payload: payload
    }
}