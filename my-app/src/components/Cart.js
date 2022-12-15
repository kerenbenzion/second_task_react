
import './ExpenseItem.css'
import ExpenseItemCart from './ExpenseItemCart'
import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
function Cart(props) {
  const items = props.items
  const { removeFromCart, saveOrder } = { ...props }
  const total = props.total
  let list = items.map((item, index) => {
    return item.title
  })
  let itemList = items.map((item, index) => {
    return <li className="listitem" key={index}>
      <ExpenseItemCart
        title={item.title}
        amount={item.amount}
        url={item.url}
        removeFromCart={removeFromCart}
      ></ExpenseItemCart>
    </li>
  })

  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      </head>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100 ">
          <MDBTypography tag="h3" className="fw-normal mb-0 text-black pb-3" >
            Shopping Cart
          </MDBTypography>
          <MDBCol md="10">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <ul className="list_items">
                {itemList}
              </ul>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center align-items-center h-100">
          <h3>The current total: {total}$</h3>
        </MDBRow>
        <MDBBtn className='me-1' color='success' onClick={() => saveOrder(total, list)}>
          Buy
        </MDBBtn>
      </MDBContainer>
    </section>
  );
}

export default Cart;

