import React from 'react'
import Button from 'react-bootstrap/Button'
import useStyles from '../styles.js'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {CardMedia} from '@material-ui/core'


function TableOrder(props) {


    const TAX_RATE = 0.05;
    function ccyFormat(num) {
        return `${num.toFixed(2)}`;
      }
      
      function subtotal(items) {
        if(items === [null]){
          return 0
        }else{
          let total = items.map((item)=>item.price*item.count);
          return total.reduce((acc=0,i)=> acc + i,0)  
        }
      }
    const classes = useStyles({
        table: {
            minWidth: 700,
        }
    });
    const {organisedCart,removeOrder,handleSubmit} = props
    return (
        <section className = {classes.content}>
        <TableContainer  >
      <Table className={classes.table} aria-label="spanning table">
          <TableHead  >
            <TableRow>
              <TableCell align="center" colSpan={3}  className={classes.header} style={{fontFamily: "Bungee",
                                                                                  fontSize: "22px",
                                                                                  backgroundColor:"#d1fdff"
                                                                                  }} >
                Order details
              </TableCell>
              <TableCell align="right" colSpan={3}  style={{fontFamily: "Bungee",
                                        fontSize: "22px", 
                                        backgroundColor:"#d1fdff",
                                        textAlign: "start"
                                        }} > 
                Price
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.tableHeadCell} align="center" colSpan={2}  >Food</TableCell>
            
              <TableCell align="right" className={classes.tableHeadCell} >Qty.</TableCell>
              <TableCell align="right" className={classes.tableHeadCell}>Price</TableCell>
              <TableCell align="right" className={classes.tableHeadCell}>Sum</TableCell>
              <TableCell align="right" className={classes.tableHeadCell}></TableCell>
            </TableRow>
          </TableHead>
      

    
        <TableBody>
        {(organisedCart.map((f,i) => (
              <TableRow key={i} style={{backgroundColor: "white"}}>
                <TableCell><strong>{f.food_name}</strong></TableCell>
                <TableCell><CardMedia image={f.img_url} style={{height: "150px",width:"150px"}}/></TableCell>
                <TableCell align="right">{f.count}</TableCell>
                <TableCell align="right">{f.price}</TableCell>
                <TableCell align="right">{(f.price*f.count)}</TableCell>
                <TableCell align="right"> <Button className="order-button" 
                                                    onClick={()=> removeOrder(f)}
                                                    style={{width:"100px", height: "40px",fontSize: "12px", background: "red"  }}
                                                    >
                                                    Remove x 1
                                          </Button>
                </TableCell>
              </TableRow>
            ))
          )}
          {(<>
          <TableRow >
            <TableCell rowSpan={4} />
            <TableCell colSpan={2} style={{backgroundColor: "white"}}>Subtotal</TableCell>
            {!subtotal(organisedCart)?(<TableCell align="right" >0.00</TableCell>):
                            (<TableCell  style={{backgroundColor: "white"}} align="right">{ccyFormat(subtotal(organisedCart))}</TableCell>)}
            
          </TableRow>
          <TableRow style={{backgroundColor: "white"}}>
            <TableCell>Tax</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
            <TableCell align="right">{ccyFormat(subtotal(organisedCart)*TAX_RATE)}</TableCell>
          </TableRow>
          <TableRow style={{backgroundColor: "white"}}>
            <TableCell colSpan={2}><strong>Total</strong></TableCell>
            <TableCell align="right"><strong>{ccyFormat(subtotal(organisedCart)*(1+TAX_RATE))}</strong></TableCell>
          </TableRow>
          </>)}
        </TableBody>
      </Table>
    </TableContainer>
        <form onSubmit={event=>handleSubmit(event)}>
                    <input className ="btn btn-success " style={{width:"300px", height: "50px",fontSize: "20px"  }}type='submit' value='Send Order'/>
        </form>
        </section>
    )
}

export default TableOrder
