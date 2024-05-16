import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    lastname: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phonenumber: {
      type: String,
    },
    address: {
      type: String,
    },
    age: {
      type: Number,
    },
    nationality: {
      type: String,
    },
    image: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },

  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Employee = mongoose.models.Employee || mongoose.model("Employee", employeeSchema);
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
