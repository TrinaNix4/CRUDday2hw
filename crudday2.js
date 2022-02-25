//CRUD

// TEST DATA - 2 arrays of objects with keys: unique id; name of food, and price of food  

let mexican = [{id:1, name:'carnitas', price:21},
{id:2, name:'asada',price:22}]


let american = [{id:1, name:'burgers', price:21},
{id:2, name:'pizza rolls',price:22}] 


//MAP
// foods:[{id:number,name:string, price:number},...]
/// returns array of formatted strings[] (you choose what these look like)
//array is populated with the results of calling a function on every element in the array

//LECTURE
const foodToString = (food) => { //write function and store it to a variable
  return `${food.nam} is ${food.price} nad ID is ${food.id}`
}
const about = (foods) => {  //or take anonymous function that's not named and pss it to my map function 
  return foods.map(foodToString)
};
console.log('about: return' , about(mexican))
 

// MY WORK 
/* const about = mexican.map(foods => 
  `${foods.id} ${foods.name} ${foods.price}`)
 
console.log(about) 
console.log(typeof about) */



// [...]
// foods:[{id:number,name:string, price:number},...]  //passing a newobj
// food: {id:number,name:string, price:number}
/// returns new array with food added


// MY WORK  
 /* let foods = [{id:1, name:'carnitas', price:21},{id:2, name:'asada',price:22}]
let newFoodToAdd = {id: 3, name: 'sopapilla' , price:6}

const addFood1=(newFood)=>{

let newMenu = [...foods, newFood];
return newMenu
}
console.log('original menu: ' , foods)
console.log('updated menu: ', addFood1(newFoodToAdd))   */

//LECTURE
const addFood1 = (foods, food) => {
  return [...foods, food]
}


// [...]

// foods:[{id:number,name:string, price:number},...]  //passing it value, and formatting it into an obj to be added into the array 
//make the obj within the function
// id:number,
// name:string, 
// price:number
/// returns new array with food ad

//MY WORK
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

  //MY WORK
/* const updateFood1=(foods, id, price)=>{
let newArr = foods.map(foods => {
  if(foods.id === id){
     foods.price = price; 
  }
 })
    return newArr

}
console.log(updateFood1(mexican, 2, 6))   */


//LECTURE
const updateFoodPrice = (food, id, price) => {
  if(food.id === id){
    return {...food, price:price } //if IDs dont' match 
  }
  return food
}
console.log(updateFoodPrice({id: 1, name:'fish', price: 10}, 1, 100))
console.log(updateFoodPrice)({id: 0, name:'pizza', price: })

  const updateFood1=(foods, id, price)=>{
    foods.map(updateFoodPrice)
}

//MAP

// foods:[{id:number,name:string, price:number},...]
// id:number,
// food:{id:number,name:string, price:number}}
/// returns new array with the food item updated with the id given

//LECTURE AND MY WORK
const updateFood2=(foods, id, food)=>{
return foods.map(foodElement => {  //need to return map 
  if(foodElement.id === id){
     return food //if ids match then i want to return the food that was passed

  }
  return foodElement
 }) //if they don't match i just want to return the food that i was iterating over

}

console.log(updateFood2(mexican, 2, 'taco'))  


// FILTER
// foods:[{id:number,name:string, price:number},...]
// id:number,
// removes the food with the given the id
//if it returns true, its gonna keep the thing. if not true it will delete it

//MY WORK
//delete food with id: 1

/*  const deleteFood1 = (foods,id)=>{
let foodFilter = foods.filter((foods) => {
    return foods.id !== id 
})
return foodFilter
}
console.log(deleteFood1(mexican, 1))  */


//LECTURE 
const idMatch = (food, id) =>{
  return food.id === id
}
console.log('idMatch return' , idMatch(id:12, name:'CHANGED', price:123))
//returns true or false whether the ID matches the food ID
//so next
const deleteFood1 = (foods,id)=>{
  foods.filter(idMatch)
}; //throw complicated code into a function(like IdMatch) so you don't have to duplicate the code over and over when you use the function again 
console.log('delete food: return' , deleteFood1(mexican, 12))

// FILTER from lecture 
//can pass my filter function a callback; that returns true or false; 
//or i can pss my filter method a function that returns true or false; such as IDmatch which is a function
//that returns true or false; one i'm storing to a variable or can just pass it an 
//unnamed function that can't be reused (cause not stored to a variable)
// foods:[{id:number,name:string, price:number},...]
// price:number,
// removes the food with price over price given


//MY WORK
/*  const deleteFood2 = (foods,price)=>{
let foodFilter2 = foods.filter((foods) => {
return foods.price > price

})
return foodFilter2
}
console.log(deleteFood2(mexican, 21)) } */

//LECTURE
//write a functionthat returns T or F if food is overprice
const isOverPriced = (food, price) => food.price <= price //written in one line and will return, no need to write return
console('isOverPriced' , isOverPriced({price:100}, 200)) //can pass any item that has a price key and it will tell if overpriced

const deleteFood2 = (foods, price) => {  //filter method needs to pass functiot hat returns true or false so need curly brackets to return that
  return foods.filter((food) => { //boolean returned and filter uses the boolean to decide whether to keep or not 
    return isOverPriced(food, price)
    })
};

