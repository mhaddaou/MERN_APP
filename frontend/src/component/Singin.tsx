import {  useEffect } from "react";
import Header from "./Header";
import Register from "./Register";
import Login from "./Login";
import {  useAppSelector } from "./Hooks";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


function Singin() {

   
    const [cookies, _] = useCookies(["access-token" ]);
    const navigate = useNavigate();
    useEffect(() =>{
      if (cookies["access-token"])
        navigate('/home');
    }, [cookies])

    const check = useAppSelector((state) => state.check.check);



    

  return (
   <div className=" ">
   <Header check="index"/>
   
   <section className=" bg-indigo-950 dark:bg-gray-900">
    <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
      <section
        className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
      >
        <img
          alt="Night"
          src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="absolute inset-0 h-full w-full object-cover opacity-80 rounded-lg"
        />
  
        <div className={`hidden lg:relative ${check ? '-top-32' : '-top-8'}  lg:block lg:p-12`}>
          <div className="block text-white hover:cursor-pointer" >
            <span className="sr-only">Home</span>
            <img src="images/logom.png" className="w-20 h-20 " />
           
          </div>
  
          <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Welcome Back  🦑
          </h2>
  
          <p className="mt-4 leading-relaxed text-white/90">
          this app is a mern stack that lets you to create your account and displayed down
          </p>
        </div>
      </section>
  
      <main
        className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
      >
        <div className="max-w-xl lg:max-w-3xl">
          <div className="relative -mt-16 block lg:hidden">
            <div
              className="inline-flex hover:cursor-pointer h-16 w-16 items-center justify-center rounded-full bg-black text-blue-600 dark:bg-gray-900 sm:h-20 sm:w-20"
            >
              <span className="sr-only">Home</span>
            <img src="images/logom.png" className="w-20 h-20 " />
            </div>
  
            <h1
              className="mt-2 text-2xl font-bold text-gray-300 dark:text-white sm:text-3xl md:text-4xl"
            >
              Welcome Back  🦑
            </h1>
  
            <p className="mt-4 leading-relaxed text-gray-500 dark:text-gray-400">
            this app is a mern stack that lets you to create your account and displayed down
            </p>
          </div>
          {!check && <Register/>}
          {check && <Login/>} 
  
           </div>
      </main>
    </div>
  </section>
   </div>
  
  )
}

export default Singin