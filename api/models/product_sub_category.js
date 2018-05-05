const mongoose = require('mongoose');

const subcategorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    PRODUCT_SUB_CATEGORY_ID: Number,
    PRODUCT_CATEGORY_ID: Number,
    PRODUCT_SUB_CATEGORY_NAME: String,
    PRODUCT_SUB_CATEGORY_DESCRIPTN: String,
    UPDATED_BY: String,
    UPDATED_DATE: Date,
    ACTIVE_FLAG: String
});

module.exports = mongoose.model('subCategory',subcategorySchema);