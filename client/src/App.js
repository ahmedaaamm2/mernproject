import {useState, useEffect} from 'react'
import Axios from "axios"


export default function App(){

  const api = "http://localhost:3001"


  const [users, setUsers] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")

  
  useEffect(()=>{
    Axios.get(`${api}/users`)
    .then(res => setUsers(res.data))
  },[])


  const createUser = () => {
    if(name && age && email){
      Axios.post("http://localhost:3001/createUser", {
        name: name,
        age: age,
        email: email
    })
    .then(res => console.log(res.data))
    }
  }  


  return(
    <>
    {name}
    {age}
    {email}

    {users.map(({_id, name, age, email}) => {
      return(
        <div className="card" key={_id}>
        <ul>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
          <li>Email: {email}</li>
        </ul>
      </div>
      )
    })}

    <div>
      <input type='text' placeholder='Name'  onChange={e=>setName(e.target.value)}/>
      <input type='number' placeholder='Age' onChange={e=>setAge(e.target.value)}/>
      <input type='text' placeholder='Email' onChange={e=>setEmail(e.target.value)}/>
      <button onClick={createUser()}>Create User</button>
      {/* <button onClick={deleteData()}>Delete User</button> */}
    </div>

    </>
  );
  }
