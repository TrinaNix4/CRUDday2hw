import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';
import User from "./User";
import NewUser from "./NewUser"
 


function App() {                                //the set function will update the state
  const [loading, setLoading] = useState(false); //generic - someState, a way to set some State [state, setState] = useState(initialState)
  const [users, setUsers] = useState([]) //hooks cannot go in a function so put at top
  
  const[error, setError] = useState(null)
  
  const getUsers = ()=> {   //get request to the url; axios.get returns a promise
    setLoading(true)
    setError(null)
    axios //use axios to get our data from website 
      .get('https://reqres.in/api/users?delay=3')
      .then((res)=>{
      console.log('res:', res) //the JSON object we see in browswer converted to JS object 
      console.log('res.data', res.data)
      console.log('res.data.data', res.data.data)
      setUsers(res.data.data)
      setLoading(false)
    })   //drill into and res.data.data is where we get the user objects 
    
    .catch((err) =>{
        setError ('Some error occurred!!!')
        setLoading(false) //using the loading variable to change the state of the button; 
                              //if i have an error, set it to false so they can try again
    });
   
    //a promise will either resolve or reject 
  };
  const addUser = (user) => {  
    let newUsers = [...users, user]
    setUsers(newUsers)
  }

  const deleteUser = (id) => {
    console.log('in app js')
    console.log('deleting item wth id: ' , id)
    //TODO: delete from DB
    //UPDATE UI 
    let newUsers = users.filter(u=> u.id !== id)
    setUsers(newUsers)
  }
  const updateUser =(user) => {   //goal is to log the ID of the thing that was clicked 
console.log('in app.js, ID is: ' , user)
//have a user and i want to update a user with this; the user param is all the updated values from the 1 user
//so go through all of user state  see if they equal, if they do  return that user form data, if it does, don't change it

let updatedUsers= users.map(u=> {
  if(u.id === user.id) {
    return user
  }
  return u    //
})
setUsers(updatedUsers)
  }

 const renderUsers = ()=>{
  // user is {"id":1,"email":"george.bluth@reqres.in","first_name":"George","last_name":"Bluth","avatar":"https://reqres.in/img/faces/1-image.jpg"}
  return users.map((user)=>{
    return <User key={user.id} {...user} updateUser={updateUser} deleteUserYo={()=> deleteUser(user.id)}/>
  }) //give it a key. something unique and ID is unique 
}
  return (
    <div className="App" style={{border:'5px solid black', margin:'10px', padding:'10px'}}>
      <h1>Users</h1>
      <NewUser addUserCB={addUser}/>
      <button disabled={loading} onClick={getUsers}>{loading ? 'loading':'get users'}</button>
      <div>{renderUsers()}</div>
      <hr />
      <h1>what our 'users' state looks like</h1>
      <div>{JSON.stringify(users)}</div>

      {error && <p style={{color:'red'}}>ERROR: {error}</p>}
    </div>
  );
}

export default App;
