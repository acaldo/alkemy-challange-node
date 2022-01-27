const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
class CharactersService {
    constructor() { }

    async create(data) {
        const newCharacter = await models.Character.create(data);
        return newCharacter;
    }

    async find() {
        const rta = await models.Character.findAll();
        return rta;
    }

    async findOne(id) {
        const character = await models.Character.findByPk(id, {
            include: ['product'],
        });
        if (!character) {
            throw boom.notFound('character not found');
        }
        return character;
    }

    async update(id, changes) {
        const character = await this.findOne(id);
        if (!character) {
            throw boom.notFound('character not found');
        }
        const rta = await character.update(changes);
        return rta;
    }

    async delete(id) {
        const character = await this.findOne(id);
        if (!character) {
            throw boom.notFound('character not found');
        }
        await character.destroy();
        return { id };
    }
}

module.exports = CharactersService;
