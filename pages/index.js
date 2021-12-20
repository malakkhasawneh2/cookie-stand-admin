import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {useState } from 'react'
export default function Home() {
  const [show,setShow]=useState('')
  const [location,setlocation]=useState('')
  const [min,setmin]=useState(0)
  const [max,setmax]=useState(0)
  const [avg,setavg]=useState(0)
  const[cookiesList, setBranch]=useState([])
  function formHandler(event){
    event.preventDefault()
    const cookie={
      location:event.target.location.value,
      minCustomer:event.target.min.value,
      maxCustomer:event.target.max.value,
      avgCookies:event.target.avg.value,
    }
    setShow(()=>{
        return JSON.stringify(cookie)
    })
    setlocation(()=>{
      return cookie.location
    })
    setmin(()=>{
      return cookie.min
    })
    setmax(()=>{
      return cookie.max
    })
    setavg(()=>{
      return cookie.avg
    })
    
    setBranch((cookiesList)=>{
      cookiesList.push(cookie)
      return cookiesList
    });

  }
  return (
    <div className="flex flex-col justify-center min-h-screen py-2">
      <Head>
        <title>Cookie Stand Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
       <div>
         <form className='p-6 bg-emerald-300 rounded-2xl' onSubmit={formHandler} >
           <h2 className='font-semibold text-2xl font-weight 900'>Create Cookie Stand</h2>
            <label className='p-3 font-weight 500' >Location</label>
            <input type="text" name='location' className='w-9/12 my-3 bg-gray-200' placeholder={location} ></input>
            <div className='flex flex-row'>
                <div className='flex flex-col p-3'>
                    <label>Minimum customer per Hour</label>
                    <input type="number" name='min'  className='bg-gray-200'placeholder={min} ></input>
                </div>
                <div className='flex flex-col p-3'>
                    <label>Maximum customer per Hour</label>
                    <input type="number" name='max' className='bg-gray-200' placeholder={max} ></input>
                </div>
                <div className='flex flex-col p-3'>
                    <label>Avarage Cookies per sale</label>
                    <input type="number" name='avg'   className='bg-gray-200' step='.1' placeholder={avg}></input>
                </div>
                <div className='flex flex-col px-3 '>
                   <button className='px-8 py-4 bg-emerald-500' type="submit" >Create</button>
                </div>
            </div>
         </form>
        <p className='py-5'>Repotr Table Coming Soon...</p>
        <p className='py-5'>{show}</p>
       </div>
      </main>
      <Footer></Footer>
     
    </div>
  )
}
