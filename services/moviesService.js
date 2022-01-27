const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
class MoviesService {
    constructor() { }

    async create(data) {
        const newMovie = await models.Movie.create(data);
        return newMovie;
    }

    async find() {
        const rta = await models.Movie.findAll();
        return rta;
    }

    async findOne(id) {
        const movie = await models.Movie.findByPk(id, {
            include: ['product'],
        });
        if (!movie) {
            throw boom.notFound('movie not found');
        }
        return movie;
    }

    async update(id, changes) {
        const movie = await this.findOne(id);
        if (!movie) {
            throw boom.notFound('movie not found');
        }
        const rta = await movie.update(changes);
        return rta;
    }

    async delete(id) {
        const movie = await this.findOne(id);
        if (!movie) {
            throw boom.notFound('movie not found');
        }
        await movie.destroy();
        return { id };
    }
}

module.exports = MoviesService;
