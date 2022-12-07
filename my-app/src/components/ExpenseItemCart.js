
import './ExpenseItem.css'
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

function ExpenseItemCart(props) {
    const removeFromCart = props.removeFromCart
    const itemJson = { "title": props.title, "amount": props.amount, "url": props.url }
    return (
        <div>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        </head>

        <MDBCard className="mb-4">
          <MDBCardBody className="p-4">
            <MDBRow className="justify-content-between align-items-center">
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage fluid height={100}
                  src={props.url}
                  alt={props.title} />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
                <p className="lead fw-normal mb-2">{props.title}</p>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2">
                <MDBTypography tag="h5">
                  {props.amount}$
                </MDBTypography>
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
              <button className='rounded-1' onClick={() => removeFromCart(itemJson)}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                </svg></button>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
        </div>

    );
}

export default ExpenseItemCart;