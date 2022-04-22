import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home(){
  return(
    <div className="bg-gradient-to-b from-yellow-300 to-yellow-400 min-h-screen">
      <Navbar />
    </div>
  )
}