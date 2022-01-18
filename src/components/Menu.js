import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {addToCart} from '../features/cart'

function Menu (){
    const menu = useSelector((state) => state.menu.value)
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()
    const _checkout = (e) => {
        e.preventDefault()
        console.log(e)
        const data = { items: cart};
  
  fetch('http://localhost:3001/create_checkout_session', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    window.location = data.url
    
  })
  .catch((error) => {
    console.error('Error:', error);
  });
    };
    

    return(
        <Container>
            {menu.map((item) => {
                return(
                    <Card key={item.id}>
                        <Card.Title style={{color:'#282c34'}}>{item.name}</Card.Title>
                        <Card.Body>
                            <Card.Text style={{color:'#282c34'}}>Price:${item.price}</Card.Text>
                        <Button onClick={() => {dispatch(addToCart({name:item.name,id:item.id,quantity:item.quantity+1,price:item.price}))} }>+</Button>
                        </Card.Body>
                    </Card>
                )
            })}
            <Button onClick={_checkout}>Checkout</Button>
        </Container>
    )
}

export default Menu;