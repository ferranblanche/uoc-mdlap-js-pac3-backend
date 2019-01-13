'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchCharactersByComic = exports.searchCharactersByName = exports.searchCharacterById = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _marvelApiParams = require('../resources/marvel-api-params');

var _marvelApiParams2 = _interopRequireDefault(_marvelApiParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Search Character by Id
var searchCharacterById = exports.searchCharacterById = async id => {
    let { keys, baseUrl, sugar, hash } = (0, _marvelApiParams2.default)();
    let query = `${baseUrl}/characters/${id}?ts=${sugar}&apikey=${keys.public}&hash=${hash}`;
    try {
        let result = await (0, _axios2.default)(query);
        let character = result.data.data.results[0];
        if (!character) {
            throw new Error(`Unable to find a character with id ${id}`);
        }
        return {
            id: character.id,
            name: character.name,
            description: character.description,
            image: `${character.thumbnail.path}.${character.thumbnail.extension}`
        };
    } catch (error) {
        throw new Error(error);
    };
};

// Search Character List by Name
var searchCharactersByName = exports.searchCharactersByName = async name => {
    let { keys, baseUrl, sugar, hash } = (0, _marvelApiParams2.default)();
    let query = `${baseUrl}/characters?nameStartsWith=${name}&ts=${sugar}&apikey=${keys.public}&hash=${hash}`;
    console.log(query);

    try {
        let result = await (0, _axios2.default)(query);
        let characters = result.data.data.results;
        if (characters.length == 0) {
            throw new Error(`Unable to find a characters named ${name}`);
        }
        return characters.map(character => {
            return {
                name: character.name || "",
                description: character.description || "",
                id: character.id,
                image: `${character.thumbnail.path}.${character.thumbnail.extension}`
            };
        });
    } catch (error) {
        throw new Error(error);
    };
};

// Search Characters by Comic
var searchCharactersByComic = exports.searchCharactersByComic = async id => {
    let { keys, baseUrl, sugar, hash } = (0, _marvelApiParams2.default)();
    let query = `${baseUrl}/comics/${id}/characters?ts=${sugar}&apikey=${keys.public}&hash=${hash}`;
    try {
        let result = await (0, _axios2.default)(query);
        let characters = result.data.data.results;
        if (characters.length == 0) {
            throw new Error(`Unable to find a characters appearing in a comic with id ${id}`);
        }
        return characters.map(character => {
            return {
                name: character.name || "",
                description: character.description || "",
                id: character.id,
                image: `${character.thumbnail.path}.${character.thumbnail.extension}`
            };
        });
    } catch (error) {
        throw new Error(error);
    };
};
//# sourceMappingURL=characterController.js.map