import React from 'react';
import {ReviewDetails} from '../ReviewDetails/ReviewDetails'
import Container from 'react-bootstrap/Container'

export function ReviewList(props){
    const {reviews} = props
    return ( 
            <Container>
               {!reviews? (<div>No Review</div>):reviews.map((review,i)=>{
                  let {body,rating,reviewer,id,created_at} = review
            
                  return(
                     <div key = {i}>
                     <ReviewDetails 
                        id = {id}
                        rating ={rating}
                        body = {body}
                        created_at = {created_at}
                        reviewer = {reviewer? reviewer : ''}
                        deleteReview = {props.deleteReview}
                        food_id = {props.food_id}
                        currentUser ={props.currentUser}
                     />  
                     </div>
                  )

                  }) 
               }

            </Container>
            )

}

export default ReviewList