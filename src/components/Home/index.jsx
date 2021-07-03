import React from "react";
import { Button, Container } from "react-bootstrap";
import tenantLogo from "../../assets/img/tenantLogo.png";
import TableList from "../TableList";
import TabsList from "../TabsList";

const Home = () => {
  

  return (
    <div>
      <Container className="title-logo">
        <h1 className="tenants-title">Tenants</h1>
        <img className="tenant-logo" src={tenantLogo} alt="img" />
      </Container>
      <Container>
        <Button variant="secondary">
          Add Tenant
        </Button>
        <TabsList />
        <TableList />
      </Container>
    </div>
  );
};

export default Home;
