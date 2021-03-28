import React from 'react'
import {Card,CardActionArea,CardContent,CardMedia,Typography} from '@material-ui/core'
import useStyles from '../styles'
function FoodInfoDetails(props) {
    const {calories,label,image,ingredients} = props
    const classes = useStyles();
    return (
        <div  className={classes.content}>
        <Card >
            <CardActionArea className={classes.cardActions}>
            <Typography variant="body1" color ="textPrimary" component ="h1"><strong>Name : {label}</strong></Typography>
                <CardMedia image={image} src={image} className={classes.media} alt={label}/>
                <div>
                    
                    <Typography className="mb-2"  variant="body1" color ="textPrimary" component ="h2"><strong>Energy Provided: {parseInt(calories)} cals</strong></Typography>
                </div>
                <Typography className="mb-2" variant="body1" color ="textPrimary" component ="h2"><strong>Ingredient Lists and Recipes </strong></Typography>
                <CardContent>
                    <ul style={{listStyleType: 'none'}}>
                        {!ingredients?(<div>Loading ... </div>):(ingredients.map((ingredient,i)=>{
                            return (
                                <strong key={i+1}>
                                <li  style={{ paddingLeft:"2em",textAlign:"left",fontSize:"1.1rem"}}>
                                    {ingredient.text}
                                </li>
                                </strong>
                            )
                        }))}
                    </ul>
                </CardContent>
            </CardActionArea>
            </Card>
        </div>
    )
}

export default FoodInfoDetails
