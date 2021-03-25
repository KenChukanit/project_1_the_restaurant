import React, {useEffect, useState} from 'react';
import { Favourite, Food,Review } from '../../../data/request'; 
import FoodDetails from './FoodDetails/FoodDetails';
import ReviewList from './ReviewList/ReviewList';
import NewReviewForm from './NewReviewForm/NewReviewForm'; 
import useStyles from './styles.js'
import {StarRating} from './ReviewDetails/StarRating'

const FoodReviewShowPage = (props)=>{
    const [food, setFood] = useState({});
    const classes = useStyles();
    const food_id = props.match.params.id;
    const loadFood=()=>{
        Food.show(props.match.params.id)
            .then((food)=>{
            setFood(food);
        })
    };
    const average = (arr) =>{
        if(Array.isArray(arr) ){
            const sum = arr.reduce((a,b)=>a+b.rating,0)
            const avg = parseInt(sum/arr.length)
            if( isNaN(avg)|| avg === undefined){
                return 0
            }else{
                return avg
            }
        }else{
            return 0
        }
    }

    const deleteReview=(id,food_id) =>{
        Review.destroy(id,food_id)
            .then((res)=>{
                loadFood()
            })
    }

    const handleClick=()=>{
        Favourite.create(food_id)
        .then((res)=>{
            loadFood()
        })
    }

    useEffect(()=>{
        loadFood();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    console.log(food)
    console.log(props.currentUser)
    return(
        <main className={classes.content} >
                 <div className={classes.toolbar}/>
            <FoodDetails 
            food_name={food.food_name}
            img_url={food.img_url}
            />
            
            <h4>Total {!food || !Array.isArray(food.orders)? 0:food.orders.length} orders</h4>
            <h4>Total {!food || !Array.isArray(food.reviews)? 0:food.reviews.length} reviews</h4>
            <h4>Average Rating {!food || !Array.isArray(food.reviews)? 0:(average(food.reviews))} stars</h4>
            <StarRating className= "mb-5"currentNumber ={(average(food.reviews))} max={5}/>

            {food.favouriters === [props.currentUser] && <button onClick={handleClick}> <i class="fas fa-heart"></i></button>}

            {!props.currentUser?(<h6>Please Sign in to create a review</h6>):(<NewReviewForm food_id={props.match.params.id}
                            currentUser={props.currentUser}
                            loadFood = {loadFood}
                             {...props}
            />)}
            <div className={classes.toolbar}/>
            
            <blockquote className = {classes.bubble}>
            
            <ReviewList
            reviews={food.reviews}   
            deleteReview= {deleteReview}  
            food_id ={food_id}   
            currentUser ={props.currentUser}    
            />
            </blockquote>
           
        </main>
    )
}

export default FoodReviewShowPage