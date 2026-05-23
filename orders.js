import axios from "axios";
import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          "http://localhost:5000/api/orders",
          {
            headers: {
              authorization: token
            }
          }
        );

        setOrders(res.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Orders</h1>

      {orders.map((order) => (
        <div key={order._id}>
          <p>Total: ₹{order.totalAmount}</p>
          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;
