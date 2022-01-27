const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
class GendersService {
    constructor() { }

    async create(data) {
        const newGender = await models.Gender.create(data);
        return newGender;
    }

    async find() {
        const rta = await models.Gender.findAll();
        return rta;
    }

    async findOne(id) {
        const gender = await models.Gender.findByPk(id, {
            include: ['product'],
        });
        if (!gender) {
            throw boom.notFound('gender not found');
        }
        return gender;
    }

    async update(id, changes) {
        const gender = await this.findOne(id);
        if (!gender) {
            throw boom.notFound('gender not found');
        }
        const rta = await gender.update(changes);
        return rta;
    }

    async delete(id) {
        const gender = await this.findOne(id);
        if (!gender) {
            throw boom.notFound('gender not found');
        }
        await gender.destroy();
        return { id };
    }
}

module.exports = GendersService;
