const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const title = Joi.string().min(3).max(15);
const dateCreated = Joi.date();
const qualification = Joi.number().integer().min(1).max(5)
const image = Joi.string().uri();

const createCategorySchema = Joi.object({
    name: name.required(),
    image: image.required(),
    title: title.required(),
    dateCreated: dateCreated.required(),
    qualification: qualification.required(),
});

const updateCategorySchema = Joi.object({
    name: name,
    image: image,
});

const getCategorySchema = Joi.object({
    id: id.required(),
});

module.exports = {
    createCategorySchema,
    updateCategorySchema,
    getCategorySchema,
};
