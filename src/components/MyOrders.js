import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getRecentOrder } from "../api/orders";
import { Table, Button } from "react-bootstrap";
import _ from "lodash";

const MyOrders = () => {
  const [recentOrder, setRecentOrder] = useState({});
  useEffect(async () => {
    const orders = await getRecentOrder();
    setRecentOrder(orders[0]);
  }, []);
  console.log(recentOrder);
  return (
    <div>
      <h1>My orders</h1>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Order Id</td>
            <td>{recentOrder.orderId}</td>
          </tr>
          <tr>
            <td>Product Name</td>
            <td>{_.get(recentOrder, "items[0].name")}</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>{_.get(recentOrder, "items[0].quantity")}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{recentOrder.status}</td>
          </tr>
          <tr>
            <td>Shipment Tracking url</td>
            <td>{_.get(recentOrder, "shipments[0].trackingUrl")}</td>
          </tr>
        </tbody>
      </Table>

      <Link to={`/myOrders/${recentOrder.id}`} className="btn">
        <Button variant="success">Get Order Details</Button>
      </Link>
    </div>
  );
};

export default MyOrders;
