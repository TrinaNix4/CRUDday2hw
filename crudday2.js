//CRUD

// TEST DATA - 2 arrays of objects with keys: unique id; name of food, and price of food  

//let mexican = [{id:1, name:'carnitas', price:21},{id:2, name:'asada',price:22}]


//let american = [{id:1, name:'burgers', price:21},{id:2, name:'pizza rolls',price:22}]



//MAP

// foods:[{id:number,name:string, price:number},...]

/// returns array of formatted strings[] (you choose what these look like)
//array is populated with the results of calling a function on every element in the array

//const filterMenu = mexican.map((obj, index) => {
 //if(index > 4){   //still returns an array, but array has 'undefined' for values 
 //  return obj; }

//})

//console.log(filterMenu)
  


 


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
console.log('updated menu: ', addFood1(newFoodToAdd))  */


// [...]

// foods:[{id:number,name:string, price:number},...]  //passing it value, and formatting it into an obj to be added into the array 
//make the obj within the function
// id:number,

// name:string, 

// price:number

/// returns new array with food add
let foods = [{id:1, name:'carnitas', price:21},{id:2, name:'asada',price:22}]

const addFood2 = (foods, id,name,price)=>{
return [...foods, {id, name, price} ]
}
console.log(addFood2(foods, 3, 'sopapilla', 6)) 
//pass in an object and (id number, name and price)


//MAP

// foods:[{id:number,name:string, price:number},...]

// id:number,

// price:number}

/// returns new array with the price updated with the id given

//const updateFood1=(foods, id, price)=>{

 // Update - Map

//}



//MAP

// foods:[{id:number,name:string, price:number},...]

// id:number,

// food:{id:number,name:string, price:number}}

/// returns new array with the food item updated with the id given

//const updateFood1=(foods, id, food)=>{



 //}



// FILTER

// foods:[{id:number,name:string, price:number},...]

// id:number,

// removes the food with the given the id

//const deleteFood1 = (foods,id)=>{




//}



// FILTER

// foods:[{id:number,name:string, price:number},...]

// price:number,

// removes the food with price over price given

//const deleteFood2 = (foods,price)=>{



//}