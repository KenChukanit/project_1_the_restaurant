import React,{useState} from 'react';
import './SignInPage.css';
import useStyles from './styles.js';
import {NavLink} from 'react-router-dom';


function SignInPage(props) {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const classes = useStyles();

    
    function onSubmit(event){
        event.preventDefault();
        const {currentTarget}=event;
        const formData= new FormData(currentTarget);
        const formValues={
            email: formData.get('email'),
            password: formData.get('password')
        }
        props.handleSubmit(formValues);
        if(props.currentUser !== null){
            setEmail('');
            setPassword('')
            props.history.push('/foods');
        }
        
    }

    return (
       
        <main className={classes.content}>
         
         <div className={classes.toolbar}/>
      
         {!props.currentUser && 
        <form onSubmit={onSubmit} className="login ">
        <header>Login</header>
        
        <div className="field"><span className="fa fa-user"></span>
            <input type="text" 
                    name='email' 
                    value={email} 
                    onChange={e=>setEmail(e.target.value)} 
                    placeholder="Email or User Name"
            />
        </div>
        <div className="field"><span className="fa fa-lock"></span>
        <input type="password" 
                name='password' 
                placeholder="Password"
                value= {password} 
                onChange={e=>setPassword(e.target.value)} 
        />     
        </div>
        <input type="submit" className="submit" value="LOGIN"></input>
      <span className="logn-form-copy">Don't have an account? <NavLink to="/sign_up" className="login-form__sign-up">Sign up</NavLink></span>
      </form>}
      
      </main>
    )
}

export default SignInPage
