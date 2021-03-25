function countFoodCart(foodCart) {
    if(foodCart){
        foodCart.sort(function(a, b) { 
            return a.id - b.id 
        });
    }else{
        return [];
    }
    //console.log(foodCart);
        let newCart = []
        let count = 1;
        
        for (let i = 0; i < foodCart.length; i++) {
        foodCart[i]["count"] = count
        if (foodCart[i + 1] !== foodCart[i]) {
            foodCart[i]["count"] = count
            count = 1
            newCart.push(foodCart[i])
        }else{
            count++;
            foodCart[i]["count"] = count
        }}
    return newCart
}


export default countFoodCart


