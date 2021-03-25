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

               
                  <a href="index.html" class="navbar-brand">The<span> </span> Restaurant</a>
            </div>

          
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav navbar-nav-first">
                    <li><a href="/" class="smoothScroll">Home</a></li>
                    <li><a href="#about" class="smoothScroll"><NavLink to="/about">About</NavLink></a></li>
                    <li><a href="#team" class="smoothScroll">Chef</a></li>
                    <li><a href="/foods" class="smoothScroll">Menu</a></li>
                    <li><a href="#contact" class="smoothScroll">Contact</a></li>
                </ul>

                  <ul class="nav navbar-nav navbar-right" >
                  {props.currentOrderStatus !== "Active" ? (<NavLink to='/orders/new' style={{ textDecoration: 'none',marginLeft: "120px", marginRight:"20px", color:"gold",fontSize:"23px" }}>
                       <i className="fas fa-shopping-cart">{props.carts.carts.length>=0?`  ${props.carts.carts.length} `:""}</i>
                    </NavLink>):(<span style={{visibility: "hidden",marginLeft: "120px", marginRight:"20px"}}>cart</span>)}
                       <a href="/sign_in" class="section-btn">Sign In</a>
                       <a href="/sign_up" class="section-btn">Sign Up</a>
                  </ul>
             </div>

        </div>
   </section>
    )
}

export default Navbar
