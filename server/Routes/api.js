import express from "express";
import { createNewProduct, deleteProduct, updateProduct, getProduct, getAllProduct } from "../Controllers/recipeController.js";
import { LoginUser, createUser, getUsers } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";
import { body, validationResult } from 'express-validator';

const router = express.Router();

// USER REGISTER AND LOGIN ROUTES

router.post(
  "/register",
  [
    body('email')
      .isEmail()
      .withMessage('Please enter a valid email'),
      
    body('password')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      .withMessage('Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character'),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  createUser
);

// LOGIN ROUTE
router.post("/login",  LoginUser);

// FOR DEBUGGING CASE
router.get("/users", getUsers);

// USER REGISTER AND LOGIN ENDS


// POST REQUEST ROUTE
router.post(
    "/products",protect, createNewProduct);
// POST REQUEST ROUTE ENDS

// GET REQUEST ROUTE 
router.get("/products", getAllProduct);

// GET REQUEST USING ID ROUTE
router.get("/products/:id", protect, getProduct);

// EDIT REQUEST ROUTE
router.put("/products/:id", protect, updateProduct);

//  DELETE REQUEST ROUTE
router.delete("/products/:id", protect, deleteProduct);


export default router;