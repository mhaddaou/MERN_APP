import { useEffect, useState } from 'react'
import type { usersType } from './Redux/userSlice'
import Header from './Header'
import axios from 'axios';
import Cards from './Cards';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
const ALL_USERS = import.meta.env.VITE_URL_FETCH;
const [cookies, _] = useCookies(['access-token'])
function Home() {
  const [users, setUsers] = useState<usersType[]>([])
  const navigate = useNavigate();
  
  useEffect(() =>{
    axios.get(ALL_USERS).then((res) => setUsers(res.data)).catch((err) =>console.log(err))
  }, [users])

  useEffect(() =>{
    if (!cookies){
      navigate('/');
    }
  }, [cookies])



  return (
    <section className='bg-bg min-h-screen'>
      <Header check='home'/>
      <div className="container mx-auto py-10">
        <div className="flex flex-col w-[80%] md:w-1/2 mx-auto gap-2 justify-center">
          {users.map(({username , email}) =>{
            return (
              <Cards username={username}  email={email}/>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Home