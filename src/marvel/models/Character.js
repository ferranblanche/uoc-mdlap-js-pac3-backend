export default class Character {
    constructor ({ id, name = "", description = "", image = "", comics = []}) {
        this.id = id; // Marvel API id
        this.name = name;
        this.description = description;
        this.image = image;
        this.comics = comics;
    };
}