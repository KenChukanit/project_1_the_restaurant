import {Star} from './Star'

export function StarRating(props){
    let {max, currentNumber} = props
    let StarArray = [];
    for(let i =1; i<= max; i++){
        if (i<= currentNumber){
            StarArray.push(<Star key={i} style={{color: 'gold', width: '30px'}}/>)
        }else{
            StarArray.push(<Star key={i} style={{color: 'grey', width: '30px'}}/>)
        }
    }
    return (
        <div>
            {StarArray}
        </div>
    )
}