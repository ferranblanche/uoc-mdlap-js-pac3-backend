import { searchCharacterById, searchCharactersByComic, searchCharactersByName } from '../marvel/controllers/characterController';
import { searchComicById, searchComicsByCharacter } from '../marvel/controllers/comicController';

export default {
    searchCharacterById: args => {
        return searchCharacterById(args.id);
    },
    searchCharactersByName: args => {
        return searchCharactersByName(args.name);
    },
    searchCharactersByComic: args => {
        return searchCharactersByComic(args.id);
    },
    searchComicById: args => {
        return searchComicById(args.id);
    },
    searchComicsByCharacter: args => {
        return searchComicsByCharacter(args.id);
    }
};