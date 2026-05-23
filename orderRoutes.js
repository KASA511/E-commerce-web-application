const express = require("express");

const Order = require("../models/Order");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  const order = await Order.create({
    userId: req.user.id,
    products: req.body.products,
    totalAmount: req.body.totalAmount
  });

  res.json(order);
});

router.get("/", authMiddleware, async (req, res) => {
  const orders = await Order.find({
    userId: req.user.id
  });

  res.json(orders);
});

module.exports = router;