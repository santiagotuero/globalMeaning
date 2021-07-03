import React from "react";
import { Button, Form, Container } from "react-bootstrap";

const TenantForm = () => {
  return (
    <Container>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            required
          />
        </Form.Group>
        <Form.Group controlId="formSelectCustom">
          <Form.Label>Payment Status</Form.Label>
          <Form.Control as="select" required name="paymentStatus" custom>
            <option>CHOOSE...</option>
            <option>CURRENT</option>
            <option>LATE</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicDate">
          <Form.Label>Lease End Date</Form.Label>
          <Form.Control type="date" required name="leaseEndDate" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default TenantForm;
