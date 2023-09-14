import { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "./Hooks"

import { chengeIt } from "./Redux/checkSlice"
import axios from "axios";
const login = import.meta.env.VITE_LOGIN
import { useCookies } from "react-cookie";
import ModalComponent from "./Module";
import { useNavigate } from "react-router-dom";



function Login() {
    const [_, setCookeis] = useCookies(["access-token" ]);
    const dispatch = useAppDispatch();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
  

    const handlUser = (e : ChangeEvent<HTMLInputElement>) =>{ setUser(e.target.value)}
    const handlPass = (e : ChangeEvent<HTMLInputElement>) => {setPassword(e.target.value)};
    const closeModal = () => setIsOpen(false);
    const click = (e : FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if (user && password){
            console.log("click")
            axios.post(login, {
                username : user,
                password
            }).then((res) => {
                console.log(res.data);
                if (res.data.token){
                    setCookeis("access-token", res.data.token);
                    window.localStorage.setItem("userId", res.data.adminId)
                    navigate('/home')
                }
                else{
                    setMessage(res.data.message)
                    setIsOpen(true);
                }
                
            });
        }
    }
    

  return (
    <div className=" ">
        {isOpen && <ModalComponent isOpen={isOpen} closeModal={closeModal} message={message}/>}
<div className="grid grid-rows-6 grid-flow-col min-h-screen items-center justify-items-start text-white">
                <div className="row-span-4 row-start-1 text-2xl  md:text-4xl ">
                    Sign In                    
                    <form onSubmit={click}>
                    <div className="pt-10 pr-20">    
                        <label className="text-sm font-sans font-medium">
                            Username
                        </label>
                        <input 
                            type="text" 
                            onChange={handlUser}
                            name="username"
                            required
                            placeholder="username" 
                            className="w-full  py-3 px-12 border text-slate-600   rounded-md  text-base font-sans border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"/>                            
                    </div>
                    <div className="pt-2 pr-20">
                        <label className="text-sm font-sans font-medium">
                            Password
                        </label>
                        <input 
                            type="password" 
                            name="password" 
                            onChange={handlPass}
                            required
                            placeholder="password" 
                            className=" w-full text-slate-600  py-3 px-12 border   rounded-md  text-base font-sans border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"/>
                        <a className="text-sm t font-sans font-medium text-gray-600 underline opacity-0">
                            Forgot password?
                        </a>
                    </div>
                    <div className="text-sm font-sans font-medium w-full pr-20 pt-14">
                        
                        <button 
                            type="submit"
                            
                            className="text-center w-full py-4 bg-blue-700 hover:bg-blue-400 rounded-md text-white">
                                SIGN IN
                        </button>
                    </div>
                        </form>                    
                <p className="text-sm pt-20 font-sans font-medium text-gray-400 underline  ">Don´t have an account?
                <button onClick={() => dispatch(chengeIt('register'))}> Sign up</button>
                </p>
                </div>

            

               
            </div>    




    </div>
  )
}

export default Login