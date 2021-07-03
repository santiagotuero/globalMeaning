import React, { useState, useEffect } from "react";
import TableList from "../TableList";
import TabsList from "../TabsList";
import TenantForm from "../TenantForm";
import { Service } from "../../Service";
import { Button, Container } from "react-bootstrap";
import tenantLogo from "../../assets/img/tenantLogo.png";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    Service.getTenants()
      .then((newTenants) => setTenants(newTenants))
      .catch((err) => console.warn("err: ", err));
  }, []);

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
      <TenantForm visible={isVisible} tenants={tenants} setTenants={setTenants}/>
      <TabsList />
      <TableList tenants={tenants} setTenants={setTenants}/>
    </div>
  );
};

export default Home;

