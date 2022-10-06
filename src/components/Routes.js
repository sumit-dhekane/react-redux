import React from "react";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import PhotosTable from "./Photos_Table";
import PostTable from "./Post_Table";
import ProductTable from "./Product_Table";

function RoutesContainer(){

    return(
        <Router>
            <div>
            <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
        
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
        <li className="nav-item">
          <Link to='/products'className="nav-link active">Products</Link>
        </li>
        <li className="nav-item">
        <Link to='/posts'className="nav-link active">Posts</Link>

        </li>
        <li className="nav-item">
        <Link to='/photos'className="nav-link active">Photos</Link>

        </li>
        </ul>
      
    </div>
        </nav>
            </div>
            <Routes>
            <Route path="/products" element={<ProductTable />} /> 
            <Route path='/posts'  element={<PostTable/>}/>
             <Route path='/photos'  element={<PhotosTable/>}/>
            </Routes>
        </Router>
    )
}
export default RoutesContainer;