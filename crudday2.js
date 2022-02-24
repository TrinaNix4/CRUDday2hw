//CRUD

// TEST DATA - 2 arrays of objects with keys: unique id; name of food, and price of food  

let mexican = [{id:1, name:'carnitas', price:21},{id:2, name:'asada',price:22}]


let american = [{id:1, name:'burgers', price:21},{id:2, name:'pizza rolls',price:22}] 


//MAP

// foods:[{id:number,name:string, price:number},...]

/// returns array of formatted strings[] (you choose what these look like)
//array is populated with the results of calling a function on every element in the array

 /* const about = mexican.map(foods => `${foods.id} ${foods.name} ${foods.price}`)
 
console.log(about) 
console.log(typeof about) */



// [...]
// foods:[{id:number,name:string, price:number},...]  //passing a newobj

// food: {id:number,name:string, price:number}

/// returns new array with food add

 /* let foods = [{id:1, name:'carnitas', price:21},{id:2, name:'asada',price:22}]
let newFoodToAdd = {id: 3, name: 'sopapilla' , price:6}

const addFood1=(newFood)=>{

let newMenu = [...foods, newFood];
return newMenu
}
console.log('original menu: ' , foods)
console.log('updated menu: ', addFood1(newFoodToAdd))   */


// [...]

// foods:[{id:number,name:string, price:number},...]  //passing it value, and formatting it into an obj to be added into the array 
//make the obj within the function
// id:number,

// name:string, 

// price:number

/// returns new array with food add


/* let foods = [{id:1, name:'carnitas', price:21},{id:2, name:'asada',price:22}]

const addFood2 = (foods, id,name,price)=>{
return [...foods, {id, name, price} ]
}
console.log(addFood2(foods, 3, 'sopapilla', 6))   */
//pass in an object and (id number, name and price)


//MAP

// foods:[{id:number,name:string, price:number},...]

// id:number,

// price:number

/// returns new array with the price updated with the id given

  //let foods = [{id:1, name:'carnitas', price:21},{id:2, name:'asada',price:22}]

const updateFood1=(foods, id, price)=>{
let newArr = foods.map(foods => {
  if(foods.id === id){
    return {...foods, price: foods.price};
  }
return foods;

 });
}
console.log(updateFood1(mexican, 1, 6))  


//MAP

// foods:[{id:number,name:string, price:number},...]

// id:number,

// food:{id:number,name:string, price:number}}

/// returns new array with the food item updated with the id given

/* const updateFood1=(foods, id, food)=>{

let newArray = foods.map((foods)=> {
return 
return foods
})
console.log(newArray)
 }
console.log(updateFood1(mexican, 1, taco)) */


// FILTER

// foods:[{id:number,name:string, price:number},...]

// id:number,

// removes the food with the given the id

//if it returns true, its gonna keep the thing. if not true it will delete it

//delete food with id: 1
/*  const deleteFood1 = (foods,id)=>{
let foodFilter = foods.filter((foods) => {
    return foods.id !== id 
})
return foodFilter
}
console.log(deleteFood1(mexican, 1))  */



// FILTER

// foods:[{id:number,name:string, price:number},...]

// price:number,

// removes the food with price over price given

/*  const deleteFood2 = (foods,price)=>{
let foodFilter2 = foods.filter((foods) => {
return foods.price > price

})
return foodFilter2
}
console.log(deleteFood2(mexican, 21)) } */
