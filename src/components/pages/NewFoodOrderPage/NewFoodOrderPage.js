import React from 'react';
import { Order } from '../../../data/request'; 
import EmptyCart from './EmptyCart/EmptyCart'
import useStyles from './styles.js'
import TableOrder from './TableOrder/TableOrder'

const NewOrderPage = (props)=>{
    const classes = useStyles();
    
    const handleSubmit = (event)=>{
    const params = {
            food_ids: props.carts.carts.map((f)=>{
                return f.id
            }),
            users: [props.currentUser.id]
         
    }
        event.preventDefault();
        createOrder(params);
        props.onChangeCart([]);
    }
    
    const removeOrder=(food)=>{
        let carts = props.carts.carts
        
        let index = carts.indexOf(food)
        carts.splice(index,1);
        food["count"] -=1
        props.onChangeCart(carts)
        if(props.carts.carts.length === 0 ){
            props.onChangeCart([])
        }
    }

    function createOrder(params){
        Order.create(params)
        .then((order)=>{
            if(order.id){
              props.updateOrderStatus(order.status)
            props.history.push(`/orders/status`)
            }
        })
    }
    let cart = props.displayCart.carts

    let organisedCart = cart
    console.log(organisedCart)
    return(
        <div  className={classes.content} >
           <div className={classes.toolbar}></div>

           
          {!organisedCart || props.carts.carts.length === 0? (<EmptyCart/>):<TableOrder   organisedCart ={organisedCart}
                        removeOrder = {removeOrder}
                        handleSubmit= {handleSubmit}
          />}
   
        
       
        </div>
        
    )
    
    
}
export default NewOrderPage;