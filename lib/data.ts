import { Product, Employee } from "./models";
import { connectToDB } from "./utils";
import { Document } from 'mongoose';
import { Types } from "mongoose";

export const fetchEmployees = async (q: string, page: number): Promise<{ count: number, employees: Document[] }> => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Employee.countDocuments({ username: { $regex: regex } });
    const employees = await Employee.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, employees };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Employees Data!");
  }
};

export const fetchEmployee = async (id: Types.ObjectId) => {
  console.log(id);
  try {
    connectToDB(); // Assuming this function connects to the database
    const employee = await Employee.findById(id);
    return employee;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Employee Data!");
  }
};

export const fetchProducts = async (q: string, page: number) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Product.countDocuments({ title: { $regex: regex } });
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Products Data!");
  }
};

export const fetchProduct = async (id: Types.ObjectId) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Product Data!");
  }
};

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Employees",
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: "Stock",
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: "Revenue",
    number: 6.642,
    change: 18,
  },
];
