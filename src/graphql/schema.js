import { buildSchema } from 'graphql';

export default buildSchema(`
    type Character {
        id: ID!
        name: String!
        description: String!
        image: String!
        comics: [Int]
    }
    type Comic {
        id: ID!
        title: String!
        plot: String!
        characters: [Int]
    }
    type RootQuery {
        searchCharacterById(id: ID): Character!
        searchCharactersByName(name: String): [Character!]!
        searchCharactersByComic(id: ID): [Character!]!
        searchComicById(id: ID): Comic!
        searchComicsByCharacter(id: ID): [Comic!]!
    }
    schema {
        query: RootQuery
    }
`);