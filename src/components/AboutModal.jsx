import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function AboutModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="warning" onClick={handleShow} className="">
        About React
      </Button>

      <Modal show={show} onHide={handleClose} className="my-modal">
        <Modal.Header className="modal-title" closeButton>
          <Modal.Title>About React</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          ReactJS, also known as React, is a popular JavaScript library for
          building user interfaces. It is also referred to as a front-end
          JavaScript library. It was developed by Facebook and is widely used
          for creating dynamic and interactive web applications.
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AboutModal;
