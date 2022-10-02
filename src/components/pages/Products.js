import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Products.css";
import Swal from 'sweetalert2'


function Product(){
  const [products,setProducts]=useState([]);
  useEffect(()=>  {
    getAllProducts();
       
    },[]);

    const getAllProducts =()=>{
        fetch('http://localhost:9000/products').then((res)=>
        res.json()).then((data)=>{setProducts(data);
        console.log(data);})
    }

const deleteProduct = (product)=>{
    Swal.fire({
        title: `you are deleting ${product.title}`,
        showCancelButton: true
    }).then((data)=>{
        if (data.isConfirmed) 
fetch(`http://localhost:9000/products/${product.id}`,{
    method:"DELETE"})
    .then((res)=>res.json())
    .then((data)=>{console.log(data);
    getAllProducts();})
    }); }
    return (
        <>
        <h1>Product page</h1>
        <Link to="/products/add"  className="btn btn-success btn-sm mt-3 mb-2">
                Add New Product</Link>

        <table class="table table-striped mt-7 products-table">
            <thead>
         <tr >
            <th>ID</th>
            <th>Title</th>
            <th>Descreption</th>
            <th>Price</th>
            <th>Operations</th>
         </tr>
         </thead>
         <tbody>
            {products.map((product)=>{
                return(
                <>
         <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.description.slice(0,20)}....</td>
            <td>{product.price}</td>
            <td>
                <button className="btn btn-danger btn-sm mr-1" 
                onClick={()=>deleteProduct(product)}>
                    
                    Delete</button>
                <Link  to={`/products/${product.id}`} className=" mr-1 btn btn-info btn-sm">View</Link>
                <Link  to={`/products/edit/${product.id}`} className="btn btn-primary btn-sm">Edit</Link> 
                </td>
         </tr>
                </>
                )
            })}
   
         </tbody>
</table>
<Outlet/>
        </>
    );
}
export default Product;