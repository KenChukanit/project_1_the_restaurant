import React from 'react';
import {Card, CardActions, CardActionArea,CardContent,CardMedia,Button,Typography} from '@material-ui/core'
import { Link } from 'react-router-dom';
import useStyles from './styles.js';


function FoodDetails(props) {
    const {id, food_name, price, ingredients, img_url,food } = props;
    const classes = useStyles();
    return (
        <Card key ={id}>
            <CardActionArea>
                <CardMedia image={img_url} className={classes.media}/>
                <div >
                    <Typography variant="body2" color ="textPrimary" component ="h2"><strong>{food_name}</strong> </Typography>
                    <Typography variant="body2" color ="textPrimary" component ="h2">$ {price}</Typography>
                </div>
                <CardContent>
                <div style={{height: "50px"}}>
                    <Typography variant="body2" color = "textSecondary" component = "p" >{ingredients}</Typography>
                </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link size="small" color ="primary" to={`/foods/${id}`}>See Reviews</Link>
                <Typography variant="body2" color = "textSecondary" component = "h5"></Typography>
                {props.currentOrderStatus !== "Active" && <Button className={classes.root} onClick={()=> props.addOrder(food)}>
                        Add to order
                </Button>}
            </CardActions>
            
        </Card>
    )
}

export default FoodDetails
