import {IProduct} from "../Models";
import '../index.css'
import { useState} from "react";

interface ProductProps{
    product: IProduct

}

export const Product = ({product}: ProductProps) => {
    const [details,setDetails] = useState(false)



    return (
        <div className='Product'>
            <img  src={product.images} alt=""/>

            <h3>{product.title}</h3>
            <span>{product.price}$</span>
            <button onClick={() => setDetails(preva => !preva)} >
                {details? '-' : '+'}
            </button>

            {details && <div>
                {product.description}
            </div>}

        </div>
    );
};

