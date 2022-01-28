const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string().min(3).max(15);
const creation = Joi.date();
const qualification = Joi.number().integer().min(1).max(5)
const image = Joi.string().uri();
const genre = Joi.number().integer();
const order = Joi.string().uppercase().min(3).max(3)
const name = Joi.string().min(3).max(15);
const createMovieSchema = Joi.object({

    title: title.required(),
    image: image.required(),
    creation: creation.required(),
    qualification: qualification.required(),
    genre: genre.required(),
});

const updateMovieSchema = Joi.object({
    title: title,
    image: image,
});

const getMovieSchema = Joi.object({
    id: id.required(),
});

const queryProductSchema = Joi.object({
    name,
    genre,
    order,
})

module.exports = {
    createMovieSchema,
    updateMovieSchema,
    getMovieSchema,
    queryProductSchema,
};
