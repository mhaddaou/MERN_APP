
import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "./Hooks"
import { chengeIt } from "./Redux/checkSlice";
import axios from "axios";
import ModalComponent from "./Module";
const Create = import.meta.env.VITE_URL_CREATE_USER;

function Register() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [msg, setMsg] = useState('');

  const handlName = (e : ChangeEvent<HTMLInputElement>) =>{setUserName(e.target.value)}
  const handlEmail = (e : ChangeEvent<HTMLInputElement>) =>{setEmail(e.target.value)}
  const handlPas = (e : ChangeEvent<HTMLInputElement>) =>{setPassword(e.target.value)}
  const handlConf = (e : ChangeEvent<HTMLInputElement>) =>{setConfirm(e.target.value)}

  const closeModal = () => setIsOpen(false);

  const createAccount = async(e : FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if (username && email && password && confirm)
    try{
      const res = await axios.post(Create, {username, email , password, confirm})

      const conf = document.getElementById("PasswordConfirmation");
      if (conf){
        conf.classList.add("dark:border-gray-700", "border-gray-200")
        conf.classList.remove("border-red-500");    
        dispatch(chengeIt('login'))   
      }
      
      console.log(res.data);
    }catch(e: any) {
      if (e.response.status === 422){
        const conf = document.getElementById("PasswordConfirmation")
        if (conf){
          conf.classList.remove("dark:border-gray-700", "border-gray-200")
          conf.classList.add("border-red-500");
        }

      }
      if (e.response.status === 421){
          console.log(e.response);
          setMsg(e.response.data.message);
          setIsOpen(true);
          const name = document.getElementById('userName')
          if (name)
            setTimeout(() =>{
              name.focus()
          }, 2000)

      }
    }

  }

  const dispatch = useAppDispatch();
  return (
    <div>
        <ModalComponent isOpen={isOpen} closeModal={closeModal} message={msg} />
          <form onSubmit={createAccount}>
         <div  className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                className="block text-sm font-medium text-gray-400 dark:text-gray-200"
              >
                Username
              </label>
  
              <input
                type="text"
                id="userName"
                name="first_name"
                required
                value={username}
                onChange={handlName}
                className="mt-1 w-full h-9 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
  
           
  
            <div className="col-span-6">
              <label
                className="block text-sm font-medium text-gray-400 dark:text-gray-200"
              >
                Email
              </label>
  
              <input
                type="email"
                required
                id="Email"
                value={email}
                onChange={handlEmail}
                name="email"
                className="mt-1 w-full h-9 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
  
            <div className="col-span-6 sm:col-span-3">
              <label
                className="block text-sm font-medium text-gray-400 dark:text-gray-200"
              >
                Password
              </label>
  
              <input
                type="password"
                required
                value={password}
                onChange={handlPas}
                id="Password"
                name="password"
                className="mt-1 w-full h-9 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
  
            <div className="col-span-6 sm:col-span-3">
              <label
                className="block text-sm font-medium text-gray-400 dark:text-gray-200"
              >
                Password Confirmation
              </label>
  
              <input
                type="password"
                required
                value={confirm}
                onChange={handlConf}
                id="PasswordConfirmation"
                name="password_confirmation"
                // 
                className="mt-1 w-full h-9 rounded-md dark:border-gray-700 border-gray-200  bg-white text-sm text-gray-700 shadow-sm  dark:bg-gray-800 dark:text-gray-200"
              />
            </div>

  
            <div className="col-span-6 sm:flex pt-4 sm:items-center sm:gap-4">
              <button
              type="submit"
                // onClick={createAccount}
                className="inline-block shrink-0 rounded-md border hover:bg-blue-400  border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition  hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:hover:bg-blue-400  dark:hover:text-white"
                >
                Create an account
              </button>
  
              <p className="mt-4 text-sm text-gray-400 dark:text-gray-400 sm:mt-0">
                Already have an account? 
                
                <button onClick={() => dispatch(chengeIt('login'))} className="text-white underline dark:text-gray-200 pl-2"> Log in</button>
                  
                
              </p>
            </div>
          </div>
                </form>
    </div>
  )
}

export default Register