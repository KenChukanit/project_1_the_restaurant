import React from 'react'
import {NavLink} from 'react-router-dom';

function Navbar(props) {
    return (
        <section class="navbar custom-navbar navbar-fixed-top" role="navigation">
        <div class="container">

             <div class="navbar-header">
                  <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                       <span class="icon icon-bar"></span>
                       <span class="icon icon-bar"></span>
                       <span class="icon icon-bar"></span>
                  </button>

               
                  <a onClick ={e=>e.preventDefault()} href="/" class="navbar-brand" style={{color:"gold"}}>The<span> </span> Restaurant</a>
            </div>

          
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-nav-first">
                    <li ><a  href="/" class="smoothScroll"  >Home</a></li>
                    <li><NavLink to="/foods">Menu</NavLink></li>
                    <li><NavLink to="/search">Serach</NavLink></li>
                    <li><NavLink to="/food_info">Recipes</NavLink></li>    
                    
                </ul>

                  <ul class="nav navbar-nav navbar-right" >
                  {props.currentOrderStatus !== "Active" ? (<NavLink to='/orders/new' style={{ textDecoration: 'none',marginLeft: "120px", marginRight:"20px", color:"gold",fontSize:"23px" }}>
                       <i className="fas fa-shopping-cart">{props.carts.carts.length>=0?`  ${props.carts.carts.length} `:""}</i>
                    </NavLink>):(<span style={{visibility: "hidden",marginLeft: "120px", marginRight:"20px"}}>cart</span>)}
                      {props.currentUser === null && <a href="/sign_in" class="section-btn">Sign In</a>}
                      {props.currentUser === null  && <a href="/sign_up" class="section-btn">Sign Up</a>}
                      <span>{props.currentUser !== null ?props.currentUser.username:"..."}</span>
                  </ul>
             </div>

        </div>
   </section>
    )
}

export default Navbar
