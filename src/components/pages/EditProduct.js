import React, { useEffect } from "react";
import {useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct(){
    const [product,setProduct]=useState({});
    let {productid} = useParams() ;
    const [title, setTitle]=useState();
    const [price, setPrice]=useState();
    const [description, setDescription]=useState();
 
 useEffect(()=>  {
         fetch(`http://localhost:9000/products/${productid}`).then((res)=>
          res.json()).then((data)=>{setProduct(data);})
          setPrice(product.price);
          setTitle(product.title);
          setDescription(product.description);
      },[]);

    let navigate =useNavigate();

const forsubmit=(e)=>{
    e.preventDefault();
    axios.put(`http://localhost:9000/products`,{title,price,description}).then((data)=>{console.log(data)});
    // fetch(`http://localhost:9000/products`,{
    //  Headers:{"Content-Type": "application/json",},
    //  method:"UPDATE",
    //  body:JSON.stringify(title,price,description)})
    // .then((res)=>res.json())
    // .then((data)=>{console.log(data);})
     navigate('/products');
}
   
    return(
        <>
        <h1>ADD Product</h1>
        <form onSubmit={forsubmit} >
      <div className="mb-3">
        <label htmlfor="productTitle" className="form-label">
            Title
        </label>
        <input type="text" 
        className="form-control" 
        id="productTitle" 
        aria-describedby="Product title"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        />
      </div>
    
      <div className="mb-3">
        <label htmlfor="productPrice" className="form-label">
            Price
        </label>
        <input type="number" 
        className="form-control" 
        id="productPrice" 
        aria-describedby="Product title"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
    
        />
      </div>
    
      <div className="mb-3">
        <label htmlfor="exampleInputEmail1" className="form-label">
            Disecraption
        </label>
        <input type="text" 
        className="form-control" 
        id="exampleInputEmail1" 
        aria-describedby="Product title"
        value={description}
        onChange={(e)=>setDescription(e.target.value)}
    
        />
      </div>
      
      <button type="submit" className="btn btn-primary">
        Update Product
        </button>
    </form>
     </>
    )
}

export default EditProduct;