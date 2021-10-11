// entity contains the configuration common through out the business

const { model, Schema } = require("mongoose");
const { composeMongoose } = require("graphql-compose-mongoose");

const entitySchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  isDemo: { type: Boolean, default: true },
  isTesting: { type: Boolean, default: true },
});

const entityModel = model("Entity", entitySchema);
const entityTC = composeMongoose(entityModel, {});

const entityQuery = {
  EntityById: entityTC.mongooseResolvers.findById(),
  EntityByIds: entityTC.mongooseResolvers.findByIds(),
  EntityOne: entityTC.mongooseResolvers.findOne(),
  EntityMany: entityTC.mongooseResolvers.findMany(),
  EntityDataLoader: entityTC.mongooseResolvers.dataLoader(),
  EntityDataLoaderMany: entityTC.mongooseResolvers.dataLoaderMany(),
  EntityByIdLean: entityTC.mongooseResolvers.findById({ lean: true }),
  EntityByIdsLean: entityTC.mongooseResolvers.findByIds({ lean: true }),
  EntityOneLean: entityTC.mongooseResolvers.findOne({ lean: true }),
  EntityManyLean: entityTC.mongooseResolvers.findMany({ lean: true }),
  EntityDataLoaderLean: entityTC.mongooseResolvers.dataLoader({ lean: true }),
  EntityDataLoaderManyLean: entityTC.mongooseResolvers.dataLoaderMany({
    lean: true,
  }),
  EntityCount: entityTC.mongooseResolvers.count(),
  EntityConnection: entityTC.mongooseResolvers.connection(),
  EntityPagination: entityTC.mongooseResolvers.pagination(),
};

const entityMutation = {
  EntityCreateOne: entityTC.mongooseResolvers.createOne(),
  EntityCreateMany: entityTC.mongooseResolvers.createMany(),
  EntityUpdateById: entityTC.mongooseResolvers.updateById(),
  EntityUpdateOne: entityTC.mongooseResolvers.updateOne(),
  EntityUpdateMany: entityTC.mongooseResolvers.updateMany(),
  EntityRemoveById: entityTC.mongooseResolvers.removeById(),
  EntityRemoveOne: entityTC.mongooseResolvers.removeOne(),
  EntityRemoveMany: entityTC.mongooseResolvers.removeMany(),
};

module.exports = {
  query: entityQuery,
  mutation: entityMutation,
  model: entityModel,
  tc: entityTC
};
