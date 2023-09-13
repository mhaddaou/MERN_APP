
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "./Hooks"
import { chengeIt } from "./Redux/checkSlice";
import axios from "axios";
const Create = import.meta.env.VITE_URL_CREATE_USER;

function Register() {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const handlName = (e : ChangeEvent<HTMLInputElement>) =>{setUserName(e.target.value)}
  const handlEmail = (e : ChangeEvent<HTMLInputElement>) =>{setEmail(e.target.value)}
  const handlPas = (e : ChangeEvent<HTMLInputElement>) =>{setPassword(e.target.value)}
  const handlConf = (e : ChangeEvent<HTMLInputElement>) =>{setConfirm(e.target.value)}

  const createAccount = async() =>{
    if (username && email && password && confirm)
    try{
      const res = await axios.post(Create, {username, email , password, confirm})

      const conf = document.getElementById("PasswordConfirmation");
      if (conf){
        conf.classList.add("dark:border-gray-700", "border-gray-200")
        conf.classList.remove("border-red-500");    
        dispatch(chengeIt())   
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
      console.log(e.response.data);}

  }

  const dispatch = useAppDispatch();
  return (
    <div>
         <div  className="mt-8 grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Username
              </label>
  
              <input
                type="text"
                id="FirstName"
                name="first_name"
                value={username}
                onChange={handlName}
                className="mt-1 w-full h-9 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
  
           
  
            <div className="col-span-6">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Email
              </label>
  
              <input
                type="email"
                id="Email"
                value={email}
                onChange={handlEmail}
                name="email"
                className="mt-1 w-full h-9 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
  
            <div className="col-span-6 sm:col-span-3">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Password
              </label>
  
              <input
                type="password"
                value={password}
                onChange={handlPas}
                id="Password"
                name="password"
                className="mt-1 w-full h-9 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
  
            <div className="col-span-6 sm:col-span-3">
              <label
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Password Confirmation
              </label>
  
              <input
                type="password"
                value={confirm}
                onChange={handlConf}
                id="PasswordConfirmation"
                name="password_confirmation"
                // 
                className="mt-1 w-full h-9 rounded-md dark:border-gray-700 border-gray-200  bg-white text-sm text-gray-700 shadow-sm  dark:bg-gray-800 dark:text-gray-200"
              />
            </div>
  
            <div className="col-span-6">
              <label  className="flex gap-4">
                <input
                  type="checkbox"
                  id="MarketingAccept"
                  name="marketing_accept"
                  className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"
                />
  
                <span className="text-sm text-gray-700 dark:text-gray-200">
                  I want to receive emails about events, product updates and
                  company announcements.
                </span>
              </label>
            </div>
  
            <div className="col-span-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                By creating an account, you agree to our
                <a href="#" className="text-gray-700 underline dark:text-gray-200">
                  terms and conditions
                </a>
                and
                <a href="#" className="text-gray-700 underline dark:text-gray-200">
                  privacy policy </a
                >.
              </p>
            </div>
  
            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                onClick={createAccount}
                className="inline-block shrink-0 rounded-md border hover:bg-blue-400  border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition  hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 dark:hover:hover:bg-blue-400  dark:hover:text-white"
              >
                Create an account
              </button>
  
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                Already have an account? 
                
                <button onClick={() => dispatch(chengeIt())} className="text-gray-700 underline dark:text-gray-200 pl-2"> Log in</button>
                  
                
              </p>
            </div>
          </div>
    </div>
  )
}

export default Register