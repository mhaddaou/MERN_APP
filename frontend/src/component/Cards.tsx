
function Cards({name, age, email} : {name: string, age: number, email: string}) {
  return (


<article
  className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
>
  <div className="rounded-[10px] bg-white p-4  sm:p-6">
    
    <div>{name} </div>
    <div>{email} </div>
    <div>{age} </div>
    

    
  </div>
</article>
  )
}

export default Cards