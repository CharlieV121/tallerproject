const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventory");

// Ruta GET para obtener todos los productos
router.get("/products", inventoryController.getAllProducts);

// Ruta POST para crear un nuevo producto
router.post("/products", inventoryController.createProduct);

// Ruta GET para obtener un producto por su ID
router.get("/products/:id", inventoryController.getProductById);

// Ruta PUT para actualizar un producto por su ID
router.put("/products/:id", inventoryController.updateProduct);

// Ruta DELETE para eliminar un producto por su ID
router.delete("/products/:id", inventoryController.deleteProduct);

module.exports = router;
