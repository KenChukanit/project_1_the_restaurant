import React from 'react';
import {StarRating } from "./StarRating"
import "./ReviewDetails.css"

export function ReviewDetails(props){
    let {id, body, rating, reviewer,created_at} = props;
    const food_id = props.food_id;
    const handleClick = (id)=>{
        props.deleteReview(id,food_id)
    }
        return (
            <div className="wrapper">
            <div className = "speech-bubble" key={id}>
                <StarRating className = " mb-2" max={5} currentNumber ={rating}/>
                <br></br>
                <h5 className = " mb-2"> {body}</h5>     
                <cite>Reviewer: {reviewer}  on {new Date(created_at).toDateString()}</cite>
                <cite ></cite>
                {props.currentUser && 
                
                
                <div>{props.currentUser.username.toLowerCase() === reviewer.toLowerCase()?
                                (<input className ="btn btn-danger"
                                        type="submit" 
                                        value="delete" 
                                        onClick={()=>handleClick(id)}
                                />)
                                                :(null)}</div>
              
                }

            </div>
            </div>
        )
    }
    