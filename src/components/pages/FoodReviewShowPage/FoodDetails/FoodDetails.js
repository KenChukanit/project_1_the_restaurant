import React from 'react';

const FoodDetails = (props) => {
  const { food_name,img_url } = props;



  return (
    <div>
      <h3>{food_name}</h3>
      <img className ="mb-4"src={img_url} width="300px" height="250px" alt={food_name}/>
    </div>
  )
}

export default FoodDetails;