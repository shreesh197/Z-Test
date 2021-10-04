import Api from './apiConfig';

const apiUrl = `https://fakestoreapi.com/products`

//Api-1

export const getCategories = () => {
    const url = `${apiUrl}/categories`;
    return Api()
        .get(url)
        .then((result) => {
            return result.data;
        })
}

//Api-2

export const getProductsOfCategory = (name: string) => {
    const url = `${apiUrl}/category/${name}`;
    return Api()
        .get(url)
        .then((result) => {
            return result.data;
        })
}

//Api-3

export const getAProductById = (id : string) => {
    const url = `${apiUrl}/${id}`;
    return Api()
        .get(url)
        .then((result) => {
            return result.data;
        })
}

//search

export const getAllProducts = () => {
    const url = apiUrl;
    return Api()
        .get(url)
        .then((result) => {
            return result.data;
        })
}