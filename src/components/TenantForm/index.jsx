import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { Service } from "../../Service";

const initialForm = {
  name: "",
  paymentStatus: "",
  leaseEndDate: "",
};

const TenantForm = ({ visible, tenants, setTenants }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Service.addTenant(form)
      .then((tenant) => setTenants([...tenants, tenant]))
      .catch((err) => console.error("err: ", err));
  };

  return (
    <Container>
      <Form hidden={!visible} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            value={form.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formSelectCustom">
          <Form.Label>Payment Status</Form.Label>
          <Form.Control
            as="select"
            required
            value={form.paymentStatus}
            name="paymentStatus"
            onChange={handleChange}
            custom
          >
            <option>CHOOSE...</option>
            <option>CURRENT</option>
            <option>LATE</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicDate">
          <Form.Label>Lease End Date</Form.Label>
          <Form.Control
            type="date"
            required
            name="leaseEndDate"
            value={form.leaseEndDate}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </Container>
  );
};

export default TenantForm;
