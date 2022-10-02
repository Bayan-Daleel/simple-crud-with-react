import React from "react";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddProducts(){
    const [title, setTitle]=useState();
    const [price, setPrice]=useState();
    const [description, setDescription]=useState();

    let navigate =useNavigate();

const forsubmit=(e)=>{
    e.preventDefault();
    axios.post(`http://localhost:9000/products`,{title,price,description}).then((data)=>{console.log(data)});
    navigate('/products');
    // fetch(`http://localhost:9000/products`,{
    // Headers:{"Content-Type": "application/json",},
    // method:"POST",
    // body:JSON.stringify(title,price)})
    // .then((res)=>res.json())
    //  .then((data)=>{console.log(data);})
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
    onChange={(e)=>setDescription(e.target.value)}

    />
  </div>
  
  <button type="submit" className="btn btn-primary">
    Add Product
    </button>
</form>
 </>
)
}
export default AddProducts;
