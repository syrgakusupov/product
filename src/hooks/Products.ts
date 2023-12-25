import {useEffect, useState} from "react";
import {IProduct} from "../Models";
import axios from "axios";

export function useProducts() {
    const [products,setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    async function fetchProducts() {
        setLoading(true)
        const response= await axios.get<IProduct[]>('https://api.escuelajs.co/api/v1/products')
        setProducts(response.data)
        console.log(response)
        setLoading(false)
    }

    useEffect(() =>{
        fetchProducts()
    },[])

    return {products,loading}
}