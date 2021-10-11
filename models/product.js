const { model, Schema } = require("mongoose");
const { composeMongoose } = require("graphql-compose-mongoose");

const productSchema = new Schema({
  name: { type: String, required: true },
  size: { type: String },
  placement: [{ type: String }],
  design: [{ type: String }],
  finish: [{ type: String }],
  color: [{ type: String }],
  type: [{ type: String }],
  quick_find: [{ type: String }],
  brand: { type: String },
  vendor_name: { type: String },
  searchField: { type: String },
  uid: { type: String, unique: true },
  images: [{ type: String, required: true }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const productTC = composeMongoose(model("Products", productSchema), {});

const productQuery = {
  ProductById: productTC.mongooseResolvers.findById(),
  ProductByIds: productTC.mongooseResolvers.findByIds(),
  ProductOne: productTC.mongooseResolvers.findOne(),
  ProductMany: productTC.mongooseResolvers.findMany(),
  ProductDataLoader: productTC.mongooseResolvers.dataLoader(),
  ProductDataLoaderMany: productTC.mongooseResolvers.dataLoaderMany(),
  ProductByIdLean: productTC.mongooseResolvers.findById({ lean: true }),
  ProductByIdsLean: productTC.mongooseResolvers.findByIds({ lean: true }),
  ProductOneLean: productTC.mongooseResolvers.findOne({ lean: true }),
  ProductManyLean: productTC.mongooseResolvers.findMany({ lean: true }),
  ProductDataLoaderLean: productTC.mongooseResolvers.dataLoader({ lean: true }),
  ProductDataLoaderManyLean: productTC.mongooseResolvers.dataLoaderMany({
    lean: true,
  }),
  ProductCount: productTC.mongooseResolvers.count(),
  ProductConnection: productTC.mongooseResolvers.connection(),
  ProductPagination: productTC.mongooseResolvers.pagination(),
}

const productMutation = {
  ProductCreateOne: productTC.mongooseResolvers.createOne(),
  ProductCreateMany: productTC.mongooseResolvers.createMany(),
  ProductUpdateById: productTC.mongooseResolvers.updateById(),
  ProductUpdateOne: productTC.mongooseResolvers.updateOne(),
  ProductUpdateMany: productTC.mongooseResolvers.updateMany(),
  ProductRemoveById: productTC.mongooseResolvers.removeById(),
  ProductRemoveOne: productTC.mongooseResolvers.removeOne(),
  ProductRemoveMany: productTC.mongooseResolvers.removeMany(),
}

module.exports = {
  "query" : productQuery,
  "mutation": productMutation
};
