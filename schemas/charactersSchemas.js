const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();
const age = Joi.number().integer().min(1).max(125)
const weight = Joi.number()
const history = Joi.string().min(10)
const movieId = Joi.number().integer();

const createCharacterSchema = Joi.object({
    name: name.required(),
    image: image.required(),
    age: age.required(),
    weight: weight.required(),
    history: history.required(),
    movieId: movieId.required(),

});

const updateCharacterSchema = Joi.object({
    name: name,
    image: image,
});

const getCharacterSchema = Joi.object({
    id: id.required(),
});
const queryProductSchema = Joi.object({
    name,
    age,
    movieId
})

module.exports = {
    createCharacterSchema,
    updateCharacterSchema,
    getCharacterSchema,
    queryProductSchema,
};
