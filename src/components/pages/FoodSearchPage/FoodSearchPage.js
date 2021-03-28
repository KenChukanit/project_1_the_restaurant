import React, {useState} from 'react';
import useStyles from './styles.js'
import SearchByIngredients from './SearchByIngredients/SearchByIngredients'
import SearchByName from './SearchByName/SearchByName'
import SearchByPrice from './SearchByPrice/SearchByPrice'
import { Input, FormGroup, Label} from 'reactstrap';
import './FoodSearchPage.css'

function FoodSearchPage(props) {
    const classes = useStyles();
    const [category, setCategory] = useState("food_name");
  
  
    let tempCart =props.carts.carts
  
    const handleClick =(item)=>{
        
        tempCart.push(item)
        props.onChangeCart(tempCart);
    }
   
  return (
    <div className={classes.content} style={{}}>
      <div className={classes.container}>


       <span id="title"><strong>The Restaurant</strong></span>
       <legend>Search By</legend>
        <FormGroup className="form-check form-check " style={{fontFamily: 'Shadows Into Light Two', color: "darkGreen ",fontSize: "15px",display: "flex", flexDirection: "row" , justifyContent:"center", width: "100%"}}>
       
        <FormGroup check  className="form-check form-check-inline " >
          <Input className="form-check-input " 
                type="checkbox"  
                name="category" 
                checked={category === 'food_name'}
                onChange={(e)=>e.target.value}
                onClick={()=>setCategory('food_name')}
                />
          <Label check >
            Food Name
          </Label>
        </FormGroup>
        <FormGroup check className="form-check form-check-inline ">
          <Input className="form-check-input " 
                  type="checkbox"
                  name="category" 
                  checked={category === 'ingredients'}
                  onChange={(e)=>e.target.value}
                  onClick={()=>setCategory('ingredients')}
                  />
          <Label check >
            Ingredients
          </Label>
        </FormGroup>
        <FormGroup check className="form-check form-check-inline">
          <Input className="form-check-input " 
                  type="checkbox" 
                  name="category" 
                  checked={category === 'price'}
                  onChange={(e)=>e.target.value}
                  onClick={()=>setCategory('price')}
                  />
          <Label check>
            Food Price
          </Label>
        </FormGroup>
      </FormGroup>

            {category === "food_name" && <SearchByName handleClick = {handleClick}/>}

            {category === "ingredients" && <SearchByIngredients handleClick = {handleClick}/>}

            {category === "price" && <SearchByPrice handleClick = {handleClick}/>}
      </div>
        
    </div>
  )
}
export default FoodSearchPage

