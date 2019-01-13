import axios from 'axios';
import getConnectionParams from '../resources/marvel-api-params';

// Search Comic by Id
export var searchComicById = async (id) => {
    let { keys, baseUrl, sugar, hash } = getConnectionParams();
    let query = `${baseUrl}/comics/${id}?ts=${sugar}&apikey=${keys.public}&hash=${hash}`;
    try {
        let result = await axios(query);
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
export var searchComicsByCharacter = async (id) => {
    let { keys, baseUrl, sugar, hash } = getConnectionParams();
    let query = `${baseUrl}/comics?characters=${id}&ts=${sugar}&apikey=${keys.public}&hash=${hash}`;
    try {
        let result = await axios(query);
        let comics = result.data.data.results;
        if (comics.length == 0) {
            throw new Error(`Unable to find a comic where a character with id ${id} appears`);
        }
        return comics.map(comic => {
            return {
                title: comic.title || "",
                plot: comic.description || "",
                id: comic.id
            };
        });
    } catch (error) {
        throw new Error(error);
    };
};