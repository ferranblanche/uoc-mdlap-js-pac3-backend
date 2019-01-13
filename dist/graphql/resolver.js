'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _characterController = require('../marvel/controllers/characterController');

var _comicController = require('../marvel/controllers/comicController');

exports.default = {
    searchCharacterById: args => {
        return (0, _characterController.searchCharacterById)(args.id);
    },
    searchCharactersByName: args => {
        return (0, _characterController.searchCharactersByName)(args.name);
    },
    searchCharactersByComic: args => {
        return (0, _characterController.searchCharactersByComic)(args.id);
    },
    searchComicById: args => {
        return (0, _comicController.searchComicById)(args.id);
    },
    searchComicsByCharacter: args => {
        return (0, _comicController.searchComicsByCharacter)(args.id);
    }
};
//# sourceMappingURL=resolver.js.map