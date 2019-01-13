import axios from 'axios';
import getConnectionParams from '../resources/marvel-api-params';

// Search Character by Id
export var searchCharacterById = async (id) => {
    let { keys, baseUrl, sugar, hash } = getConnectionParams();
    let query = `${baseUrl}/characters/${id}?ts=${sugar}&apikey=${keys.public}&hash=${hash}`;
    try {
        let result = await axios(query);
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
export var searchCharactersByName = async (name) => {
    let { keys, baseUrl, sugar, hash } = getConnectionParams();
    let query = `${baseUrl}/characters?nameStartsWith=${name}&ts=${sugar}&apikey=${keys.public}&hash=${hash}`;
    console.log(query);
    
    try {
        let result = await axios(query);
        let characters = result.data.data.results;
        if (characters.length == 0) {
            throw new Error(`Unable to find a characters named ${name}`);
        }
        return characters.map(character => {
            return {
                name: character.name || "",
                description: character.description || "",
                id: character.id,
                image: `${character.thumbnail.path}.${character.thumbnail.extension}`
            };
        });
    } catch (error) {
        throw new Error(error);
    };
}

// Search Characters by Comic
export var searchCharactersByComic = async (id) => {
    let { keys, baseUrl, sugar, hash } = getConnectionParams();
    let query = `${baseUrl}/comics/${id}/characters?ts=${sugar}&apikey=${keys.public}&hash=${hash}`;    
    try {
        let result = await axios(query);
        let characters = result.data.data.results;
        if (characters.length == 0) {
            throw new Error(`Unable to find a characters appearing in a comic with id ${id}`);
        }
        return characters.map(character => {
            return {
                name: character.name || "",
                description: character.description || "",
                id: character.id,
                image: `${character.thumbnail.path}.${character.thumbnail.extension}`
            };
        });
    } catch (error) {
        throw new Error(error);
    };
}