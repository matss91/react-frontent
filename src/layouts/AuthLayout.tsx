
import {Outlet}from"react-router-dom"
export const Authlayout = () => {
  return (
    <>
    <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">

        <div className="md:w-2/3  lg:w-2/5">
            <Outlet></Outlet>
        </div>
    </main>
    
    </>
  )
}


