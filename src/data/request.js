const BASE_URL = 'https://rails-the-restaurant.herokuapp.com//api/v1';

export const Session = {
    create(params) {
        return fetch(`${BASE_URL}/session`, {
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include', 
            method: 'POST',
            body: JSON.stringify(params)
            }).then((res) => {
                return res.json();
            })
    },
    currentUser(){
        return fetch(`${BASE_URL}/current_user`,{
        credentials: 'include'  
        })
        .then((res)=> res.json())
    },
    destroy(){
        return fetch(`${BASE_URL}/session`, {
            method: 'Delete',
            credentials: 'include'
            }).then(res => res.json())
    }
}

export const User={
    create(params){
    return fetch(`${BASE_URL}/users`, {
        method: 'POST',
        credentials: 'include',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({user:params})
        }
    ).then(res => res.json());
    }
}
export const Food = {
    index() {
    return fetch(`${BASE_URL}/foods`)
        .then(res => {
        return res.json();
        })
    },
    show(id) {
        return fetch(`${BASE_URL}/foods/${id}`)
          .then(res => res.json())
    }
}
export const Review = {
    create(params,food_id) {
        return fetch(`${BASE_URL}/foods/${food_id}/reviews`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
                },
            body: JSON.stringify(params)
        })
        .then((resp) => resp.json(params))
        .catch((err)=>console.log(err))
    },
    destroy(id,food_id){
        return fetch(`${BASE_URL}/foods/${food_id}/reviews/${id}`, {
            method: 'Delete',
            credentials: 'include'
        }).then(
            res => console.log(res))
    }
}


export const Order = {
    index() {
    return fetch(`${BASE_URL}/orders`)
        .then(res => {
        console.log(res)
        return res.json();
        })
    },
    show(id) {
        return fetch(`${BASE_URL}/orders/${id}`)
        .then(res => res.json())
    },
    create(params) {
        return fetch(`${BASE_URL}/orders`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        }).then(res => res.json())
      },
    orderUser(){
        return fetch(`${BASE_URL}/order_user`,{
            credentials: 'include'  
            })
            .then((res)=> res.json())
    },
    update(params,order_id){
        return fetch(`${BASE_URL}/orders/${order_id}`,{
          method: "PATCH",
          credentials: "include",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(params)
        }).then(res=> res.json());
    },
    destroy(id){
        return fetch(`${BASE_URL}/orders/${id}`, {
            method: 'Delete',
            credentials: 'include'
        }).then(
            res => console.log(res))
    }
}

export const Favourite = {
    create(food_id) {
        return fetch(`${BASE_URL}/foods/${food_id}/favourites`, {
            method: 'POST',
            credentials: 'include'
        })
        .then((resp) => console.log(resp))
        .catch((err)=>console.log(err))
    
    },
    destroy(id){
        return fetch(`${BASE_URL}/favourites/${id}`, {
            method: 'Delete',
            credentials: 'include'
          }).then(
            res => console.log(res))
    }
}

export const Payment = {
    create(params) {
        return fetch(`${BASE_URL}/payments`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
        }).then(res => res.json())
    }
}
