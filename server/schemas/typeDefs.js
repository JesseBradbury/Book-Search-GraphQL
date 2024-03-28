var BookData = new GraphQLInputObjectType({
  name: "BookData", 
  fields: {
    authors: [], 
    description: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    bookId: { type: new GraphQLNonNull(GraphQLString) },
    image: { type: new GraphQLNonNull(GraphQLString) },
    link: { type: new GraphQLNonNull(GraphQLString) },
  }


})

const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookData!): User
    removeBook(bookId: ID!): User
  }

`;
// Unsure if ID up there is being given from the Google Books API already, will need to check. 
module.exports = typeDefs;
