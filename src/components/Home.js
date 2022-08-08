import React,{useState} from 'react'
import Menu from './Menu'
import Cart from './Cart'
import '../App.css'
import {useSelector} from 'react-redux'
import {BsCart} from 'react-icons/bs'
import Button from 'react-bootstrap/Button'
import Navbar from './Navbar'



function Home(){
    const cartCount = useSelector((state) => state.cart.cartCount)
   const [showModal,setShowModal] = useState(false)

    return(
        <div className="App">
      <header className="App-header">
       <Button variant='primary' onClick={()=>{setShowModal(true)}}><BsCart/>({cartCount})</Button>
       <Navbar/>
        <h1>East Asian Street Foods</h1>
        <Menu />
      </header>
      <Cart show={showModal} onHide={() => setShowModal(false)}/>
    </div>
    )
}

export default Home;