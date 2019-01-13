"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
class Comic {
    constructor(id, title = "", plot = "", characters = "") {
        this.id = id; // Marvel API id
        this.title = title;
        this.plot = plot;
        this.characters = characters;
    }
}exports.default = Comic;
;
//# sourceMappingURL=Comic.js.map