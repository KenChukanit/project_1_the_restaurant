import './App.css';
import React,{useState,useEffect} from 'react'
import FoodIndexPage from './components/pages/FoodIndexPage/FoodIndexPage'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import {Session,Order} from './data/request'
import countFoodCart from './scripts/organisedCart'
import Home from './components/Home/Home'
import NewFoodOrderPage from './components/pages/NewFoodOrderPage/NewFoodOrderPage'
import FoodReviewShowPage from './components/pages/FoodReviewShowPage/FoodReviewShowPage'
import SignInPage from './components/pages/SignInPage/SignInPage'
import SignUpPage from './components/pages/SignUpPage/SignUpPage'
import FoodSearchPage from './components/pages/FoodSearchPage/FoodSearchPage'
import FoodInfoPage from './components/pages/FoodInfoPage/FoodInfoPage'
 
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

  const loadUser=()=>{
    Session.currentUser()
    .then((user)=>{
      console.log(user)
      setUser(user);
    })
  }

  const handleSubmit = (params)=>{
    Session.create(params)
      .then((user)=>{
        setUser(user)
        
      })
  }

  const updateOrderStatus =(status)=>{
    setCurrentOrderStatus(status)
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

            <Route path='/foods/:id' render={(props)=><FoodReviewShowPage
                                                currentUser={user}
                                                carts ={carts}
                                                onChangeCart = {onChangeCart} 
                                                {...props}
            />}                                
            />

             <Route exact path='/'  render={(props)=><Home
                                                      currentUser={user} 
                                                      currentOrderStatus = {currentOrderStatus}
                                                      displayCart ={displayCart}
                                                      onChangeCart = {onChangeCart}    
                                                      carts ={carts}
                                                      {...props}
            />}                
            />

            <Route path='/food_info' render={(props)=><FoodInfoPage
                                                currentUser={user}
                                                carts ={carts}
                                                onChangeCart = {onChangeCart}
                                                {...props} 
            />}                                           
            />
            

            <Route exact path='/orders/new' render={(props)=><NewFoodOrderPage
                                                     currentUser={user}
                                                     carts ={carts}
                                                     checkOrderStatus = {checkOrderStatus}
                                                     onChangeCart = {onChangeCart} 
                                                     displayCart ={displayCart}
                                                     updateOrderStatus = {updateOrderStatus}
                                                     {...props}
            />}                
            />
           
           <Route exact path='/sign_in' render={(routeProps)=><SignInPage
                                                          currentUser={user}      
                                                          carts ={carts}
                                                          onChangeCart= {onChangeCart}
                                                          handleSubmit={handleSubmit} 
                                                          {...routeProps}/>} 
            />
          <Route exact path='/sign_up' render={(routeProps)=><SignUpPage
                                                          currentUser={user}      
                                                          carts ={carts}
                                                          onChangeCart= {onChangeCart}
                                                          handleSignUp={handleSignUp} 
                                                          {...routeProps}/>} 
            />

          <Route path='/search' render={(props)=><FoodSearchPage
                                                currentUser={user}
                                                carts ={carts}
                                                displayCart ={displayCart}
                                                onChangeCart = {onChangeCart}
                                                {...props} 
            />}                                           
            />

          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
