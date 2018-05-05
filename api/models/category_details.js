const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    PRODUCT_CATEGORY_ID: { type: Number, unique: true },
    PRODUCT_CATEGORY_NAME: { type: String, unique: true },
    PRODUCT_CATEGORY_DESCRIPTION: String,
    UPDATED_BY: String,
    UPDATED_DATE: Date,
    ACTIVE_FLAG: String
});

module.exports = mongoose.model('Category',categorySchema);
