import express from "express";
import { addProduct ,getAllProduct} from "../controllers/productController.js";
import multer from "multer";

const router = express.Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); 
  },
});

// Filter to allow only image files
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

// Multer instance
const upload = multer({ storage: storage, fileFilter: fileFilter });

router.get("/", (req, res) => {
  res.send("Hello from product router");
});

router.post("/add", upload.single("image"), addProduct);
router.get("/get", getAllProduct)

export default router;