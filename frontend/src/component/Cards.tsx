
function Cards({username, email} : {username: string, email: string}) {
  return (


<article
  className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
>
  <div className="rounded-[10px] bg-white p-4 text-center space-y-2  sm:p-6">
    
    <div className="text-xl text-violet-950 font-serif subpixel-antialiased ">{username} </div>
    <div className="text-lg">{email} </div>
    

    
  </div>
</article>
  )
}

export default Cards