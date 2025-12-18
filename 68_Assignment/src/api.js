import axios from 'axios';


export function fetchProductList(){
    return axios.get("https://dummyjson.com/products").then(response=> {
        // console.log("Resposne.data", response.data);
        return response.data.products;
    })
}

export function fetchProduct(id){
    return axios.get(`https://dummyjson.com/products/${id}`).then(response=> {
        // console.log("Resposne.data", response.data);
        return response.data;
    });
}

