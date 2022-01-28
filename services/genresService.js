const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');
class GenresService {
    constructor() { }

    async create(data) {
        const newGenres = await models.Genres.create(data);
        return newGenres;
    }

    async find() {
        const rta = await models.Genres.findAll();
        return rta;
    }

    async findOne(id) {
        const genres = await models.Genres.findByPk(id, {
            include: ['product'],
        });
        if (!genres) {
            throw boom.notFound('genres not found');
        }
        return genres;
    }

    async update(id, changes) {
        const genres = await this.findOne(id);
        if (!genres) {
            throw boom.notFound('genres not found');
        }
        const rta = await genres.update(changes);
        return rta;
    }

    async delete(id) {
        const genres = await this.findOne(id);
        if (!genres) {
            throw boom.notFound('genres not found');
        }
        await genres.destroy();
        return { id };
    }
}

module.exports = GenresService;
