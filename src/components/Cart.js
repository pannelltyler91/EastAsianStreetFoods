import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart";

function Cart(props) {
  const cart = useSelector((state) => state.cart.cart);
  const cartCount = useSelector((state) => state.cart.cartCount);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();
  const _checkout = (e) => {
      e.preventDefault()
      console.log(e)
      const data = { items: cart};

fetch('https://mysterious-dawn-97296.herokuapp.com/create_checkout_session', {
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
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cart({cartCount})
        </Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          {cart.map((item) => {
            return (
              <Card key={item.id}>
                <Card.Title style={{ color: "#282c34" }}>
                  {item.name}
                </Card.Title>

                <Card.Body>
                  <Card.Text style={{ color: "#282c34" }}>
                    Quantity:{item.quantity}
                  </Card.Text>

                  <Button
                    onClick={() => {
                      dispatch(
                        removeFromCart({ name: item.name, id: item.id })
                      );
                    }}
                  >
                    Remove from Cart
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Modal.Body>
      </Form>
      <Modal.Title>
        Total:$
        {total}
      </Modal.Title>
      <Modal.Footer>
        <Button onClick={props.onHide}>Back to Menu</Button>
        <Button onClick={_checkout}>Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;
