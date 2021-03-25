import './App.css';
import React,{useState,useEffect} from 'react'
import FoodIndexPage from './components/pages/FoodIndexPage/FoodIndexPage'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import {Session,Order} from './data/request'
import countFoodCart from './scripts/organisedCart';
 
function App(props) {
  const [carts, setCarts] = useState({carts: []});
  const [user, setUser] = useState('');
  const [displayCart, setDisplayCart] = useState({carts: []});
  const [currentOrderStatus,setCurrentOrderStatus] = useState(null);
  const [currentOrderPayment, setCurrentOrderPayment] = useState(null);

  useEffect(()=>{
    //signIn()
    //loadUser();
    //checkOrderStatus(); 
  },[currentOrderStatus,currentOrderPayment]) 

  

  const updateOrderStatus =(status)=>{
    setCurrentOrderStatus(status)
  }

  const loadUser=()=>{
   
    Session.currentUser()
    .then((user)=>{
      console.log(user)
      setUser(user);
    })
  }
  const checkOrderStatus=()=>{
    Order.orderUser().then((orders)=>{
      if(!orders || orders.length === 0){ 
        setCurrentOrderStatus(null)
        setCurrentOrderPayment(null)
      }else{
        console.log(orders)
        const status = Array.isArray(orders)?orders[orders.length - 1].status:""
        const paymentStatus = Array.isArray(orders)?orders[orders.length - 1].payment_status:""
        setCurrentOrderStatus(status)
        setCurrentOrderPayment(paymentStatus)
      }
    })
  };

  const onChangeCart=(val)=>{
    let adjustedCart
    if(val.length >0 ){
        adjustedCart = countFoodCart(val);
    }else{
      adjustedCart = [];
    }
    setCarts({carts: val})
    setDisplayCart({carts: adjustedCart})
  }

  
  const handleSignUp=()=>{
    Session.currentUser().then(user=>{
        setUser(user)
    })
    setTimeout(()=>{checkOrderStatus()},3000)
  }

  const destroySession=()=>{
    Session.destroy()
    .then(res=>{
        setUser(null)
      })
  }

 
  return (
    <div className="App">
            <BrowserRouter>
        <Navbar currentUser={user} 
                destroySession={destroySession}
                carts = {carts}
                currentOrderStatus = {currentOrderStatus}
                currentOrderPayment = {currentOrderPayment}
          />
          
          <Switch>
            <Route exact path='/foods'  render={(props)=><FoodIndexPage 
                                                      currentUser={user} 
                                                      currentOrderStatus = {currentOrderStatus}
                                                      displayCart ={displayCart}
                                                      onChangeCart = {onChangeCart}    
                                                      carts ={carts}
                                                      {...props}
            />}                
            />
         
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
