import React,{useState} from 'react';
import {Review} from '../../../../data/request'; 
import {FaStar} from 'react-icons/fa'
import useStyles from '../styles.js'
import FormErrors from '../../../FormErrors'

function NewReviewForm(props) {
    const [body,setBody]=useState('');
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [errors,setErrors]=useState({});
    const classes = useStyles();

    const food_id = props.food_id
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        const formData= new FormData(event.currentTarget);
        const params={
            rating: parseInt(formData.get('rating')),
            body: formData.get('body'),
            food_id: food_id,
            user_id: props.currentUser.id 
        }
        console.log(params)
        createReview(params,food_id);
        setBody('')
        setRating(null)
       
    }

    const createReview=(params,food_id)=>{
        Review.create(params,food_id)
        .then((review)=>{
            if(review.errors){
                setErrors(review.errors)
            }
            if(review){
                console.log(review.id)
            }
            const food_id = props.food_id
            props.loadFood()
            props.history.push(`/foods/${food_id}`)
            
        })
    }

    return (
        <div className=" mt-4">
            <h3>Please give your review here</h3>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <div>
                    <textarea  name='body' 
                                id='body' 
                                cols='60' 
                                rows='5' 
                                value={body} 
                                onChange={e=>setBody(e.target.value)} 
                    />
                </div>
                <div>
                <FormErrors errors={errors} forField='rating'/>
                {[...Array(5)].map((star,i)=>{
                    let ratingValue = i+1;
                    return (
                    <label key={i}>
                        <input  type="radio" 
                                name="rating" 
                                value={ratingValue}
                                onClick ={()=>{
                                    console.log(ratingValue)
                                    setRating(ratingValue)
                                }}
                    />
                        <FaStar className= "star mb-3"
    
                                color={ratingValue <= (hover || rating) ? "#ffc107":"#e4e5e9"} 
                                size ={40}
                                
                                onMouseEnter={()=>setHover(ratingValue)}
                                onMouseLeave ={()=>{setHover(null)}}
                                
                        />
                    </label>
                    )
                }
                )}
                </div>
            
                <input type='submit' value='Send Review' className={classes.sendReview}/>
            </form>
        </div>
    )
}

export default NewReviewForm
