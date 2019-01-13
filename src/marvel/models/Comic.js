export default class Comic {
    constructor (id, title = "", plot = "", characters = "") {
        this.id = id; // Marvel API id
        this.title = title;
        this.plot = plot;
        this.characters = characters;
    };
};