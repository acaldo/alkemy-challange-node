const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
class MoviesService {
    constructor() { }

    async create(data) {
        const newMovie = await models.Movie.create(data);
        return newMovie;
    }

    async findAll(){
        const rta = await models.Movie.findAll({
            include: ['character','genre']
        });
        return rta;
    }

    async find(query) {
        const options = {
            attributes : ['title','image','creation',],
            include: [],
            where: {}
        }

        const {name,genre} = query
        if (name) {
            options.where.title = name
            options.include = ['character','genre']
            options.attributes = ['id','title','image','creation','createdAt']
        }
        if (genre) {
            options.where.genreId = genre
            options.include = ['character','genre']
            options.attributes = ['id','title','image','creation','createdAt']
        }


        const rta = await models.Movie.findAll(options);
        return rta;
    }

    async findOne(id) {
        const movie = await models.Movie.findByPk(id, {
            include: ['character', 'genre'],
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
