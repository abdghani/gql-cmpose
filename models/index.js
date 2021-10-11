const { schemaComposer } = require("graphql-compose");

const productSchema = require("./product");

schemaComposer.Query.addFields({
  ...productSchema.query,
});

schemaComposer.Mutation.addFields({
  ...productSchema.mutation,
});

const schema = schemaComposer.buildSchema();

module.exports = schema;
