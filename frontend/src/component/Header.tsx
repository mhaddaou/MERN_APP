import { useCookies } from "react-cookie";
import { useAppDispatch } from "./Hooks"
import { chengeIt } from "./Redux/checkSlice"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
type pro = 'home' | 'index';

function Header({check} : {check : pro}) {
  const dispatch = useAppDispatch()
  const [cookies, setCookies] = useCookies(['access-token'])
  const navigate  = useNavigate()

  useEffect(() =>{
    if (!cookies)
      navigate('/');

  }, [cookies])

  const removeCookies = () =>{
    setCookies("access-token", "");
    window.localStorage.removeItem('userId');
    // location.reload();
    navigate('/')
    console.log('remove cokkies')
  }
  

  return (
    <header className=" bg-indigo-900 dark:bg-gray-900 sticky top-0 z-50">
  
    <div className="flex h-16 items-center pr-2 md:px-10 ">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <button className="block text-teal-600 dark:text-teal-300" >
          
          <div className="flex items-center">
          <img className=" h-20 " src="/images/logom.png" alt="" />
          <p className=" -translate-x-4 uppercase font-serif font-black text-slate-500 text-base md:text-lg">haddaou</p>
          </div>
        </button>
      </div>
      {check === 'index' ?

          <div className=" gap-4 flex">
            <button
              className="rounded-md border-blue-600 bg-blue-600 hover:bg-blue-400 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-blue-400"
              onClick={() => dispatch(chengeIt('login'))}
            >
              Login
            </button>

            <div className="flex">
              <button
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                onClick={() => dispatch(chengeIt('register'))}
              >
                Register
              </button>
            </div>
          </div>
          :
          <button
              className="rounded-md border-blue-600 bg-blue-600 hover:bg-blue-400 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-blue-400"
              onClick={removeCookies}
            >
              LogOut
            </button>}
    </div>
    
  
</header>
  )
}

export default Header