import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import DashNav from "../common/dash-nav";
import OrderCreateEdit from "./product-create-edit";
import OrderList from "./product-list";
import "./index.css"

const Order = ({ headerStoreId }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [navList] = useState([
    {
      name: "Orders",
      link: "/app/order"
    },
    /*
    {
      name: "QR Scan",
      link: "/webapp/scanner"
    },
    */
    {
      name: "Create",
      link: "/app/order/create-edit"
    }
  ]);

  return (
    <>
    <section>
      <div className="container-fluid">
        <div className="row mb-3">
          <div className="col-lg-10 col-md-8 ml-auto">
            <div className="row pt-md-5 mt-md-3">
              <div className="col-12 mb-3">
                <DashNav navList={navList} />
              </div>
              <div>
                <button className="btn" onClick={handleShow}>Add Product</button>
              </div>
              <Switch>
                <Route path="*/create-edit">
                <OrderList  />
                </Route>
                <Route>
                  <OrderList  />
                </Route>
              </Switch>
             
            </div>
          </div>
        </div>
      </div>
    </section>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter Product Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Unit</Form.Label>
              <Form.Control
                type="name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="name"
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Order;
