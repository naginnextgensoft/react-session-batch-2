import { useEffect, useState } from "react"

interface IProduct {
    id: number;
    productName: string;
    price: number;
}
const useProduct = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);


    const fetchProduct = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(prev => [...prev, ...data]);
        } catch (error) {
            console.error('Error fetching products: ', error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [])

    return {
        products,
        loading
    }
}

export default useProduct;