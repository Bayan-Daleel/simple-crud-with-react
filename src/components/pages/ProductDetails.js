import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
function ProductDetails(){
    let {productid} = useParams() ;

    const [product,setProduct]=useState({});
 
  useEffect(()=>  {
       fetch(`http://localhost:9000/products/${productid}`).then((res)=>
        res.json()).then((data)=>{setProduct(data);
        console.log(data);})
    },[]);

return(
    <>
    {product &&  <h1>Product Details {product.title}</h1> }
   
    </>
)

}

export  default ProductDetails;