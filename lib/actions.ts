"use server";

import { revalidatePath } from "next/cache";
import { Product, Employee } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";

export const addEmployee = async (formData : FormData) => {
  const { firstname, lastname, age, nationality, username, email, phonenumber, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newEmployee = new Employee({
      firstname,
      lastname,
      age, 
      nationality,
      username,
      email,
      phonenumber,
      address,
      isAdmin,
      isActive,
    });

    await newEmployee.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create Employee!");
  }
  revalidatePath("/dashboard/employees");
  redirect("/dashboard/employees");
};

export const updateEmployee = async (formData : FormData) => {
  const { id, firstname, lastname, age, nationality, username, email, phonenumber, address, isAdmin, isActive } =
    Object.fromEntries(formData);
  try {
    connectToDB();

    const updateFields = {
      firstname,
      lastname,
      age, 
      nationality,
      username,
      email,
      phonenumber,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Employee.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update Employee!");
  }

  revalidatePath("/dashboard/employees");
  redirect("/dashboard/employees");
};

export const addProduct = async (formData :FormData) => {
  const { title, description, price, stock } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      title,
      description,
      price,
      stock,
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData : FormData) => {
  const { id, title, description, price, stock } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      description,
      price,
      stock,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteEmployee = async (formData : FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Employee.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete Employee!");
  }
  revalidatePath("/dashboard/employee");
};

export const deleteProduct = async (formData : FormData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};

// export const authenticate = async (prevState, formData : FormData) => {
//   const { username, password } = Object.fromEntries(formData);

//   try {
//     await signIn("credentials", { username, password });
//   } catch (err) {
//     if (err.message.includes("CredentialsSignin")) {
//       return "Wrong Credentials";
//     }
//     throw err;
//   }
// };
