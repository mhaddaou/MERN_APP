import { useEffect, useState } from "react"
import Cards from "./component/Cards"
import Singin from "./component/Singin"
// import type{ usersType } from "./component/Singin"
import axios from "axios";
const AllUsers = import.meta.env.VITE_URL_FETCH;

function App() {
  const [users, setUsers] = useState<usersType[]>([])
  useEffect(() =>{
    axios.get(AllUsers).then(res =>{setUsers(res.data)})
  },[users])

  return (
    <div className=" bg-slate-900">
      <Singin/>
      <div className="container mx-auto py-10">
        <div className="flex flex-col w-[80%] md:w-1/2 mx-auto gap-2 justify-center">
          {users.map(({name, age, email}) =>{
            return (
              <Cards name={name} age={age} email={email}/>
            )
          })}
        </div>
      </div>
    </div>
      
  )
}

export default App
