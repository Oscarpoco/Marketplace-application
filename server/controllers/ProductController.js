import Product from "../models/Products";


// CREATE newProduct
const createProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(...req.body, userID = req.user._id);

        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: "Error creating product: " + error.message });
    }
}
// ENDS


// GET ALL products WITH PAGINATION
const getAllProducts = async (req, res) => {

    // DEFAUL TO PAGE 1 AN LIMIT OF 15
    const { page = 1, limit = 16 } = req.query;
    // ENDS


    try {
        const products = await Product.find()

            // LIMIT THE NUMBER OF products RETURNED
            .limit(Number(limit))      
            // ENDS

            // SKIP THE NUMBER OF products RETURNED
            .skip((page - 1) * limit) // Skip the number of products based on the current page
            // ENDS

            // EXECUTE THE  QUERY
            .exec();
            // ENDS

        // GET THE TOTAL COUNT OF RECIPES
        const total = await Product.countDocuments(); 

        res.status(200).json({
            total,                          // Total number of recipes
            page: Number(page),             // Current page number
            limit: Number(limit),           // Items per page
            products                         // products for the current page
        });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// ENDS


// GET Product  BY ID

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// ENDS


//  UPDATE  Product BY ID

const updateProductById = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,  // Return the updated document
            runValidators: true  // Ensure the update follows schema validation rules
        });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// ENDS


// DELETE Product BY ID
const deleteProductById = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// ENDS


// EXPORT ALL THE FUNCTIONS
export const createNewProduct = createProduct;
export const deleteProduct =  deleteProductById;
export const updateProduct = updateProductById;
export const getProduct = getProductById;
export const getAllProduct = getAllProducts;