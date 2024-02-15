import Product from "../models/product.js";

export const addProduct = async (req, res, next) => {
  try {
    const { name, price, description, category } = req.body;
    const image = req.file.path;

    const product = new Product({
      name,
      price,
      description,
      category,
      image,
    });

    const result = await product.save();
    res.status(201).json({
      message: "Product created",
      result,
    });
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      error: error.message || "An error occurred",
    });
  }
};

export const getAllProduct = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json({
      error: error.message || "An error occurred",
    });
  }
};
