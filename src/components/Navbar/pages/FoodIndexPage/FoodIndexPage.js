import React,{useState,useEffect} from 'react';
import { Food } from '../../../data/request'
import useStyles from './styles.js'
import {Grid, Grow} from '@material-ui/core';
import FoodDetails from './FoodDetails/FoodDetails';


function FoodIndexPage(props){
    const [foods, setFoods] = useState([]);
    const classes = useStyles();
   
    let tempCart =props.carts.carts
    const loadIndex=()=>{
        Food.index()
        .then((foods) => {
          setFoods(foods)
        })
    }
    const addOrder=(food)=>{
     
       // console.log(props)
        tempCart.push(food);
        //setCarts(tempCart)
        props.onChangeCart(tempCart)
    }
  
    useEffect(()=>{
        loadIndex()
    },[])

 console.log(props.currentOrderStatus)
    return(
      <main className={classes.content} >
            <Grow in>
              <Grid className={classes.container} container alignItems="stretch"  spacing={3} >
                      
            {foods.map((f,i) => {
                return(
                  <>
                  <Grid key={i} item xs={12} sm={6} md={4} lg={3} style={{display:'flex'}}>
                      <FoodDetails  
                                    id = {f.id}
                                    img_url ={f.img_url}
                                    price = {f.price}
                                    ingredients = {f.ingredients}
                                    food_name = {f.food_name}
                                    food = {f}
                                    addOrder = {addOrder}
                                    currentOrderStatus = {props.currentOrderStatus}
                      />
                  </Grid>
                  </>
                )
              })
            }
              </Grid>
            </Grow>
        </main>
      )
}

export default FoodIndexPage