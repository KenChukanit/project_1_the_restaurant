import React from 'react'
import {CardMedia} from '@material-ui/core'
import useStyles from '../styles.js'
function EmptyCart() {
    const classes = useStyles();
    return (
        <div width="100vw" height="500px">
            <h1>We are waiting for your order</h1>
            <CardMedia image = {"https://thumbs.dreamstime.com/z/happy-chef-cartoon-portrait-young-big-guy-cook-wearing-hat-uniform-hold-empty-dish-do-ok-sign-gesture-show-to-camera-vector-210794000.jpg"}
                    style={{height: "280px",width:"300px", display:"flex", alignItems: "center", justifyItems: "center",marginLeft:"auto",marginRight:"auto"}}
        />
            
        </div>
    )
}

export default EmptyCart
