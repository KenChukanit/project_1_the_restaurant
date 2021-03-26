import React,{useState} from 'react';
import {User} from '../../../data/request';
import FormErrors from '../../FormErrors';
import useStyles from './styles.js';
import './SignUpPage.css';
import LocationSearchInput from './LocationSearch/LocationSearchInput';

const SignUpPage=(props)=>{
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [phoneNumber,setPhoneNumber] = useState('');
    const [address,setAddress] = useState("");
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors,setErrors]=useState({});
    const classes = useStyles();
    const {handleSignUp,history}=props;
   

    function handleSubmit(event){
        event.preventDefault();
        const {currentTarget}=event;
        const formData=new FormData(currentTarget);
        const signUpParams={
            username: formData.get('username'),
            email: formData.get('email'),
            phone_number: formData.get('phone_number'),
            address: formData.get('address'),
            password: formData.get('password'),
            password_confirmation: formData.get('password_confirmation')
        }
        User.create(signUpParams).then(res=>{
            if(res.errors){
                setErrors(res.errors)
            }
            if (res.id){
                handleSignUp();
                history.push('/foods')
            }
        })

    }
    return(
        <main className={classes.content}>
    <div className={classes.toolbar}/>
         <div id="app">
            <section className="form-container">
                <form onSubmit={handleSubmit} className="login">
                    <header>Sign Up</header>

                    <fieldset>
                    <FormErrors errors={errors} forField='username'/>
                        <div className="field"><span className="fa fa-user"></span>
                            <input name="username" 
                                    type="text"
                                    placeholder="username" 
                                    value={userName}
                                    onChange ={e=>setUserName(e.target.value)}
                            />
                        </div>
                        <FormErrors errors={errors} forField='email'/>  
                        <div className="field"><span className="fa fa-envelope"></span>
                            <input name="email" 
                                    type="text"
                                    placeholder="email" 
                                    value={email}
                                    onChange ={e=>setEmail(e.target.value)}
                                    />
                        </div>
                        <FormErrors errors={errors} forField='phone_number'/> 
                        <div className="field"><span className="fa fa-phone"></span>
                            <input name="phone_number" 
                                    type="text"
                                    placeholder="phone number" 
                                    value={phoneNumber}
                                    onChange ={e=>setPhoneNumber(e.target.value)}
                                    />
                        
                        </div>
                       <FormErrors errors={errors} forField='address'/> 
                        <div className="field"><span className="fa fa-address-card"></span>
                            <LocationSearchInput className="field"
                                                name="address"
                                                type="adress"
                                                placeholder="address" 
                                                style={{width:"100%"}}
                                                value={address}
                                                onChange ={e=>setAddress(e.target.value)}
                            /> 
                        </div>
                        <FormErrors errors={errors} forField='password'/>
                        <FormErrors errors={errors} forField='password_confirmation'/>
                        <div className="field"><span className="fa fa-lock"></span>
                        
                            <input name="password" 
                                    type="password"
                                    placeholder="password" 
                                    value={password}
                                    onChange ={e=>setPassword(e.target.value)}
                                    /><span className="fa fa-lock"></span>
                            <input name="password_confirmation" 
                                    type="password"
                                    placeholder="confirm" 
                                    value={password2}
                                    onChange ={e=>setPassword2(e.target.value)}
                                    />
                        </div>
                    </fieldset>

                    <button type='submit'  className="submit2" >Submit</button>
                </form>
            </section>
            <aside></aside>
        </div>
        </main>
    )
}
export default SignUpPage;