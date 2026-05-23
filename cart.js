import axios from "axios";

function Cart() {

  const placeOrder = async () => {
    try {
      const token = localStorage.getItem("token");

      const orderData = {
        products: [
          {
            name: "Laptop",
            quantity: 1
          }
        ],
        totalAmount: 50000
      };

      const res = await axios.post(
        "http://localhost:5000/api/orders",
        orderData,
        {
          headers: {
            authorization: token
          }
        }
      );

      alert("Order Placed");
      console.log(res.data);

    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <h1>Cart Page</h1>

      <button onClick={placeOrder}>
        Checkout
      </button>
    </div>
  );
}

export default Cart;
