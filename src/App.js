import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import axios from 'axios';
 


function App() {                                //the set function will update the state
  const [loading, setLoading] = useState(false); //generic - someState, a way to set some State [state, setState] = useState(initialState)
  const [users, setUsers] = useState([]) //hooks cannot go in a function so put at top
  
  const[error, setError] = useState(null)
  
  const getUsers = ()=> {   //get request to the url; axios.get returns a promise
    setLoading(true)
    setError(null)
    axios
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
  }
  return (
    <div className="App">
      <h1>YOYO</h1>
      <button disabled={loading} onClick={getUsers}>{loading ? 'loading':'get users'}</button>
      <div>{users.map((u)=> <User key={u.id} {...u)}</div>
      <div>{JSON.stringify(users)}</div>
     

      {error && <p style={{color: 'red'}}>ERROR: {error}</p>}
    </div>
  );
}

export default App;
