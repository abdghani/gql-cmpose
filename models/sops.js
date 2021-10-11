const { model, Schema } = require("mongoose");
const { composeMongoose } = require("graphql-compose-mongoose");

const SopSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String },
  files: [{ type: String }],
  createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: () => Date.now() },
  business: { type: Schema.Types.ObjectId, ref: "Business", required: true },
});

const SopModel = model("Sop", SopSchema);
// SopModel.syncIndexes();

const SopTC = composeMongoose(SopModel, {});

const SopQuery = {
  SopById: SopTC.mongooseResolvers.findById(),
  SopByIds: SopTC.mongooseResolvers.findByIds(),
  SopOne: SopTC.mongooseResolvers.findOne(),
  SopMany: SopTC.mongooseResolvers.findMany(),
  SopDataLoader: SopTC.mongooseResolvers.dataLoader(),
  SopDataLoaderMany: SopTC.mongooseResolvers.dataLoaderMany(),
  SopByIdLean: SopTC.mongooseResolvers.findById({ lean: true }),
  SopByIdsLean: SopTC.mongooseResolvers.findByIds({ lean: true }),
  SopOneLean: SopTC.mongooseResolvers.findOne({ lean: true }),
  SopManyLean: SopTC.mongooseResolvers.findMany({ lean: true }),
  SopDataLoaderLean: SopTC.mongooseResolvers.dataLoader({
    lean: true,
  }),
  SopDataLoaderManyLean: SopTC.mongooseResolvers.dataLoaderMany({
    lean: true,
  }),
  SopCount: SopTC.mongooseResolvers.count(),
  SopConnection: SopTC.mongooseResolvers.connection(),
  SopPagination: SopTC.mongooseResolvers.pagination(),
};

const SopMutation = {
  SopCreateOne: SopTC.mongooseResolvers.createOne(),
  SopCreateMany: SopTC.mongooseResolvers.createMany(),
  SopUpdateById: SopTC.mongooseResolvers.updateById(),
  SopUpdateOne: SopTC.mongooseResolvers.updateOne(),
  SopUpdateMany: SopTC.mongooseResolvers.updateMany(),
  SopRemoveById: SopTC.mongooseResolvers.removeById(),
  SopRemoveOne: SopTC.mongooseResolvers.removeOne(),
  SopRemoveMany: SopTC.mongooseResolvers.removeMany(),
};

module.exports = {
  query: SopQuery,
  mutation: SopMutation,
  model: SopModel,
  tc: SopTC,
};
