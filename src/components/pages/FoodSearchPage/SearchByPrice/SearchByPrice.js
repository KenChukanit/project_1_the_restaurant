import React, {useState, useEffect} from 'react';
import {useCombobox} from 'downshift';
import {Input} from 'antd';
import {Food} from '../../../../data/request'
import useStyles from '../styles.js'


function SearchByPrice(props) {
    const classes = useStyles();
    const [inputItems, setInputItems] = useState([]);
    const [foods, setFoods] = useState([]);
    const [singleFood, setSingleFood] = useState('');

    useEffect(()=>{
        Food.index()
        .then((foods) => {
          setFoods(foods)
        })
    },[])
    console.log(foods)
    const {
            isOpen,
            getMenuProps,
            getInputProps,
            getComboboxProps,
            highlightedIndex,
            getItemProps,
          } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setInputItems(
        foods.filter((item) =>
          item.price.toString().startsWith(inputValue.toString())
        )
      )
    },
  })

  return (
    <main >
      <h2>Please search by Price: {singleFood}</h2>
      <div {...getComboboxProps()}>
        <Input className="main-search"
          {...getInputProps()}
          placeholder="What can we find for you?"
          enterbutton="Search"
          size="large"
        />
      </div>
      <ul {...getMenuProps()} style={{listStyleType: "none",marginBottom:"5px", color:"darkgreen"}}>
        {isOpen &&
          inputItems.map((item, index) => (
            <span
              key={item.id}
              {...getItemProps({ item, index })}
              onClick={() => setSingleFood(item.price)}
            >
              <li className={classes.inputList} 
                style={highlightedIndex === index ? { background: "#ede" } : {}}
              >
                <h4>{item.food_name}</h4>
                <h4>$ {item.price}</h4>
                <img src={item.img_url} width="180px" height="180px" alt={item.food_name}></img>
                <button className = {classes.addButton} onClick={()=>props.handleClick(item)}> Add to cart</button>
              </li>
              <hr></hr>
              <br></br>
            </span>
          ))}
      </ul>
    </main>
  )
}
export default SearchByPrice
