import {useState, useEffect} from 'react'
import Axios from "axios"

export default function App(){

  const [users, setUsers] = useState([])


  useEffect(()=>{
    Axios.get("http://localhost:3001/users")
    .then(res => {
      setUsers(res.data)
    })
  },[])

  return(
    
    users.map(user => {
      return(
        <div className="card" key={user.id}>
        <ul>
          <li>Name: {user.name}</li>
          <li>Age: {user.Age}</li>
          <li>Email: {user.Email}</li>
        </ul>
      </div>

      )
    })

  );
}

