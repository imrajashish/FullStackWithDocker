const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

// @route   GET /api/users
router.get("/", getAllUsers);

// @route   GET /api/users/:id
router.get("/:id", getUserById);

// @route   POST /api/users
router.post("/", createUser);

// @route   PUT /api/users/:id
router.put("/:id", updateUser);

// @route   DELETE /api/users/:id
router.delete("/:id", deleteUser);

module.exports = router;
