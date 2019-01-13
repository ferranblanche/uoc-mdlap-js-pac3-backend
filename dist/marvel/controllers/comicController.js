'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchComicsByCharacter = exports.searchComicById = undefined;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _marvelApiParams = require('../resources/marvel-api-params');

var _marvelApiParams2 = _interopRequireDefault(_marvelApiParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Search Comic by Id
var searchComicById = exports.searchComicById = async id => {
    let { keys, baseUrl, sugar, hash } = (0, _marvelApiParams2.default)();
    let query = `${baseUrl}/comics/${id}?ts=${sugar}&apikey=${keys.public}&hash=${hash}`;
    try {
        let result = await (0, _axios2.default)(query);
        let comic = result.data.data.results[0];
        if (!comic) {
            throw new Error(`Unable to find a comic with id ${id}`);
        }
        return {
            id: comic.id,
            title: comic.title,
            plot: comic.description
        };
    } catch (error) {
        throw new Error(error);
    };
};

// Search Comic by Character
var searchComicsByCharacter = exports.searchComicsByCharacter = async id => {
    let { keys, baseUrl, sugar, hash } = (0, _marvelApiParams2.default)();
    let query = `${baseUrl}/comics?characters=${id}&ts=${sugar}&apikey=${keys.public}&hash=${hash}`;
    try {
        let result = await (0, _axios2.default)(query);
        let comics = result.data.data.results;
        if (comics.length == 0) {
            throw new Error(`Unable to find a comic where a character with id ${id} appears`);
        }
        return comics.map(comic => {
            return {
                title: comic.title || "",
                plot: comic.description || "",
                id: comic.id
            };
        });
    } catch (error) {
        throw new Error(error);
    };
};
//# sourceMappingURL=comicController.js.map