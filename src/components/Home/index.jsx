import React, { useState } from "react";
import TableList from "../TableList";
import TabsList from "../TabsList";
import TenantForm from "../TenantForm";
import { Button, Container } from "react-bootstrap";
import tenantLogo from "../../assets/img/tenantLogo.png";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <Container className="title-logo">
        <h1 className="tenants-title">Tenants</h1>
        <img className="tenant-logo" src={tenantLogo} alt="img" />
      </Container>
      <Container>
        <Button variant="secondary" onClick={() => setIsVisible(!isVisible)}>
          {isVisible ? "Close" : "Add Tenant"}
        </Button>
      </Container>
      <TenantForm visible={isVisible} />
      <TabsList />
      <TableList />
    </div>
  );
};

export default Home;
