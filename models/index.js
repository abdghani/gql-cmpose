const { schemaComposer } = require("graphql-compose");

const entitySchema = require("./entity");
const businessSchema = require("./business");
const userSchema = require("./users");
const sopSchema = require("./sops");

const relations = require("./relations");

schemaComposer.Query.addFields({
  ...entitySchema.query,
  ...businessSchema.query,
  ...userSchema.query,
  ...sopSchema.query
});

schemaComposer.Mutation.addFields({
  ...entitySchema.mutation,
  ...businessSchema.mutation,
  ...userSchema.mutation,
  ...sopSchema.mutation
});

const schema = schemaComposer.buildSchema();

module.exports = schema;
