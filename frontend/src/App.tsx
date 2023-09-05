import { useEffect, useState } from "react"
interface typeData {
  id : string,
  name : string, 
  age : number,
  email : string,
}

function App() {
  const [data, setData] = useState<typeData[]>([]);
  useEffect(() =>{
    const getData = async() =>{
      const response = await fetch('http://localhost:3001/');
      const res = await response.json();
      setData(res);
      console.log(res);
    }
    getData();
  },[])
  return (
    <div className='bg-slate-400'>
      <div className="container mx-auto">
        {data.map((data : typeData) =>{
          return (
            <div className="pb-5 text-lg" key={data.id}  >
              <ul >
                <li> Name: {data.name}</li>
                <li> Age : {data.age}</li>
                <li> email: {data.email}</li>
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
