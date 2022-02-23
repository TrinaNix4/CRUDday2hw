




const User = (props)=>{
  const deleteUser = (id) =>{
    console.log(id)
    //remove from users; 
  }
    return (
        <div style={{border:'1px solid', margin:'20px'}}>
            <h1>{props.first_name} {props.last_name}</h1>
            <p>email: {props.email}</p>
            <p>id: {props.id}</p>
            <button onClick>delete</button>
        </div>
    )
}
export default User