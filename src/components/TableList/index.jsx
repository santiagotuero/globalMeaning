import React from "react";
import { Button, Table, Container } from "react-bootstrap";
import { Service } from "../../Service";

const TableList = ({ tenants, setTenants }) => {
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
        <tbody>
          {Array.isArray(tenants) &&
            tenants.length > 0 &&
            tenants.map((tenant) => {
              return (
                <tr key={tenant.id}>
                  <td>{tenant.id}</td>
                  <td>{tenant.name}</td>
                  <td>{tenant.paymentStatus}</td>
                  <td>{tenant.leaseEndDate}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={async () => {
                        try {
                          const result = await Service.deleteTenant(tenant.id);
                          if (result === "OK") {
                            const filteredTenants = tenants.filter(
                              (t) => t.id !== tenant.id
                            );
                            setTenants(filteredTenants);
                          } else {
                            throw new Error("An error has occur");
                          }
                        } catch (err) {
                          console.warn("err: ", err);
                        }
                      }}
                    >
                      Delete
                    </Button>
                  </td>
                  
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableList;