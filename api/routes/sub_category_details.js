const express = require('express');
const router = express.Router();

// Handle incoming GET requests to /orders
router.get('/', (req, res, next) => {

    res.status(200).json({

        status:"success",
        error_msg:"",
        data:{
            message: 'Handling GET requests to /sub_category_details'
        }
    });
});

router.post('/', (req, res, next) => {

    const subcategory = {
        subcategoryId: req.body.subcategoryId,
        subcategoryName: req.body.subcategoryName
    };

    res.status(201).json({
        status:"success",
        error_msg:"",
        data:{
            message: 'Handling GET requests to /sub_category_details',
            createdCategory: subcategory
        }
    });
});

router.get('/:subCategoryId', (req, res, next) => {
    res.status(200).json({
        message: 'Order details',
        subCategoryId: req.params.subCategoryId
    });
});

router.delete('/:subCategoryId', (req, res, next) => {
    res.status(200).json({
        message: 'Order deleted',
        subCategoryId: req.params.subCategoryId
    });
});

module.exports = router;