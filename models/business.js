// Business contains the configuration common through out the business

const { model, Schema } = require("mongoose");
const { composeMongoose } = require("graphql-compose-mongoose");

const BusinessSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  type: { type: String },
  entity: {
    type: Schema.Types.ObjectId,
    ref: "Entity",
  },
});

const BusinessModel = model("Business", BusinessSchema);
const BusinessTC = composeMongoose(BusinessModel, {});

const BusinessQuery = {
  BusinessById: BusinessTC.mongooseResolvers.findById(),
  BusinessByIds: BusinessTC.mongooseResolvers.findByIds(),
  BusinessOne: BusinessTC.mongooseResolvers.findOne(),
  BusinessMany: BusinessTC.mongooseResolvers.findMany(),
  BusinessDataLoader: BusinessTC.mongooseResolvers.dataLoader(),
  BusinessDataLoaderMany: BusinessTC.mongooseResolvers.dataLoaderMany(),
  BusinessByIdLean: BusinessTC.mongooseResolvers.findById({ lean: true }),
  BusinessByIdsLean: BusinessTC.mongooseResolvers.findByIds({ lean: true }),
  BusinessOneLean: BusinessTC.mongooseResolvers.findOne({ lean: true }),
  BusinessManyLean: BusinessTC.mongooseResolvers.findMany({ lean: true }),
  BusinessDataLoaderLean: BusinessTC.mongooseResolvers.dataLoader({
    lean: true,
  }),
  BusinessDataLoaderManyLean: BusinessTC.mongooseResolvers.dataLoaderMany({
    lean: true,
  }),
  BusinessCount: BusinessTC.mongooseResolvers.count(),
  BusinessConnection: BusinessTC.mongooseResolvers.connection(),
  BusinessPagination: BusinessTC.mongooseResolvers.pagination(),
};

const BusinessMutation = {
  BusinessCreateOne: BusinessTC.mongooseResolvers.createOne(),
  BusinessCreateMany: BusinessTC.mongooseResolvers.createMany(),
  BusinessUpdateById: BusinessTC.mongooseResolvers.updateById(),
  BusinessUpdateOne: BusinessTC.mongooseResolvers.updateOne(),
  BusinessUpdateMany: BusinessTC.mongooseResolvers.updateMany(),
  BusinessRemoveById: BusinessTC.mongooseResolvers.removeById(),
  BusinessRemoveOne: BusinessTC.mongooseResolvers.removeOne(),
  BusinessRemoveMany: BusinessTC.mongooseResolvers.removeMany(),
};


module.exports = {
  query: BusinessQuery,
  mutation: BusinessMutation,
  model: BusinessModel,
  tc: BusinessTC
};
