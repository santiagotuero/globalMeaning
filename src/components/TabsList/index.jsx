import React from "react";
import { Tabs, Tab, Container } from "react-bootstrap";

const TabsList = () => {
  return (
    <Container>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab">
        <Tab eventKey="all" title="All" />
        <Tab eventKey="payment" title="Payment is late" />
        <Tab eventKey="lease" title="Lease ends in than a month" />
      </Tabs>
      </Container>
  );
};

export default TabsList;
