import React,{useEffect, useState} from 'react'
import useStyles from './styles.js'
import {Food} from '../../../data/request'
import FoodInfoDetails from './FoodInfoDetails/FoodInfoDetails'
import './FoodInfoPage.css'
import {Input} from 'antd';

export default function FoodInfoPage(props) {
    const APP_ID = process.env.REACT_APP_ID
    const APP_KEY = process.env.REACT_APP_API_KEY
    const classes = useStyles();
    
    const [recipes,setRecipes] = useState({});
    const [search, setSearch] = useState('')
    let [query,setQuery] = useState('pad thai')
    const [foods, setFoods] = useState([]);

    useEffect(()=>{
      getRecipe();
      loadIndex();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[query])

  const loadIndex=()=>{
    Food.index()
    .then((foods) => {
      setFoods(foods)
    })
  }
  const getRecipe = ()=>{
        fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
        .then((res)=> res.json())
        .then((data)=> setRecipes(data.hits[1].recipe))
        .catch((err)=> console.log(err))
       
  }

  const getSearch =(e)=>{
    e.preventDefault();
    setQuery(search);
    setSearch('')
  }

  const updateSearch =e=>{
      setSearch(e.target.value)
  }
  const handleClick =(foodname)=>{
    let newQuery = foodname.toLowerCase();
      setQuery(newQuery)
  }
  console.log(recipes)
  return (
      <div className= {classes.content}>
        <div className={classes.container}>
          <div className={classes.instructionText}>
          <h6 id="title-info">
          We have provided food information from Edamam to help customers to decide on choosing foods.
            </h6>
            <h6 id="title-info" className="mb-4">
            Try to click or search <strong>Any Food Names</strong> to see Ingredients and Nutritions Information as below 
            </h6>
              <div>
              {!foods || foods.lengths ===0 ? (<div></div>):
                                  (<>{foods.map((food,i)=> 
              {return (<span key={i} className={classes.foodButton} >
                        <span className="badge badge-info"
                                              onClick={()=>handleClick(food.food_name)}
                                              >
                          {food.food_name}
                        </span>
                      
                      </span>
              )})}</>)}
              </div>
          </div>
          <div >
       
            <form  onSubmit={getSearch}  className='main-search mb-4'>
            <Input type="text" 
                   id="search"
                    value ={search} 
                    onChange={updateSearch}
                    placeholder="what food you want to know about?"
                    />
            <button type="submit" 
                    className= 'btn-search'
            >Search
            </button>
            </form>
          
            </div>
            <div className={classes.content} >
            <FoodInfoDetails 
                    label = {recipes.label}
                    image = {recipes.image}
                    ingredients = {recipes.ingredients}
                    calories = {recipes.calories}
            />
          </div>

        </div>
        </div>
    )
}
