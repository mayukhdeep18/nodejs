const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Category = require('../models/category_details');


router.get('/', (req, res, next) => {

    res.status(200).json({

        status:"success",
        error_msg:"",
        data:{
            message: 'Handling GET requests to /category_details'
        }

    });
});

router.post('/', (req, res, next) => {

    const category = new Category(
        {
       _id: mongoose.Types.ObjectId(),
        PRODUCT_CATEGORY_ID: req.body.PRODUCT_CATEGORY_ID,
        PRODUCT_CATEGORY_NAME: req.body.PRODUCT_CATEGORY_NAME,
        PRODUCT_CATEGORY_DESCRIPTION: req.body.PRODUCT_CATEGORY_DESCRIPTION,
        UPDATED_BY: req.body.UPDATED_BY,
        UPDATED_DATE: req.body.UPDATED_DATE,
        ACTIVE_FLAG: req.body.ACTIVE_FLAG
    });

    category.save().then(result => {
            console.log(result);
            res.status(201).json({
                message: "Handling POST requests to /category_details/",
                createdProduct: category
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

//below is the get method

router.get('/:categoryDetailsId', (req, res, next) => {
    const id = req.params.categoryDetailsId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});

router.patch('/:categoryDetailsId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    });
});

router.delete('/:categoryDetailsId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

module.exports = router;