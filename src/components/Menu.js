import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {addToCart,removeFromCart} from '../features/cart'

function Menu (){
    const menu = useSelector((state) => state.menu.value)
    const dispatch = useDispatch()
    

    return(
        <Container>
            {menu.map((item) => {
                return(
                    <Card key={item.id}>
                        <Card.Title style={{color:'#282c34'}}>{item.name}</Card.Title>
                        <Card.Body>
                            <Card.Text style={{color:'#282c34'}}>Price:${item.price}</Card.Text>
                        <Button onClick={() => {dispatch(addToCart({name:item.name,id:item.id,quantity:item.quantity+1,price:item.price}))} }>+</Button>
                        <Button onClick={() => {dispatch(removeFromCart({name:item.name,id:item.id,price:item.price}))}}>-</Button>
                        </Card.Body>
                    </Card>
                )
            })}
            <Button>Checkout</Button>
        </Container>
    )
}

export default Menu;