import React from "react";
import { Table, Container } from "react-bootstrap";

const TableList = () => {
  return (
    <Container>
      <Table borderless responsive="sm" hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Payment Status</th>
            <th>Lease End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
      </Table>
    </Container>
  );
};

export default TableList;