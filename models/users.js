const { model, Schema } = require("mongoose");
const { composeMongoose } = require("graphql-compose-mongoose");

const allowedRoles = ["ADMIN", "OWNER", "EMPLOYEE"];

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  roles: [{ type: String, enum: allowedRoles }],
  pswd: { type: String },
  business: { type: Schema.Types.ObjectId, ref: "Business", required: true },
  entity: { type: Schema.Types.ObjectId, ref: "Entity", required: true },
});

const UserModel = model("User", UserSchema);
// UserModel.syncIndexes();

const UserTC = composeMongoose(UserModel, {});

const UserQuery = {
  UserById: UserTC.mongooseResolvers.findById(),
  UserByIds: UserTC.mongooseResolvers.findByIds(),
  UserOne: UserTC.mongooseResolvers.findOne(),
  UserMany: UserTC.mongooseResolvers.findMany(),
  UserDataLoader: UserTC.mongooseResolvers.dataLoader(),
  UserDataLoaderMany: UserTC.mongooseResolvers.dataLoaderMany(),
  UserByIdLean: UserTC.mongooseResolvers.findById({ lean: true }),
  UserByIdsLean: UserTC.mongooseResolvers.findByIds({ lean: true }),
  UserOneLean: UserTC.mongooseResolvers.findOne({ lean: true }),
  UserManyLean: UserTC.mongooseResolvers.findMany({ lean: true }),
  UserDataLoaderLean: UserTC.mongooseResolvers.dataLoader({
    lean: true,
  }),
  UserDataLoaderManyLean: UserTC.mongooseResolvers.dataLoaderMany({
    lean: true,
  }),
  UserCount: UserTC.mongooseResolvers.count(),
  UserConnection: UserTC.mongooseResolvers.connection(),
  UserPagination: UserTC.mongooseResolvers.pagination(),
};

const UserMutation = {
  UserCreateOne: UserTC.mongooseResolvers.createOne(),
  UserCreateMany: UserTC.mongooseResolvers.createMany(),
  UserUpdateById: UserTC.mongooseResolvers.updateById(),
  UserUpdateOne: UserTC.mongooseResolvers.updateOne(),
  UserUpdateMany: UserTC.mongooseResolvers.updateMany(),
  UserRemoveById: UserTC.mongooseResolvers.removeById(),
  UserRemoveOne: UserTC.mongooseResolvers.removeOne(),
  UserRemoveMany: UserTC.mongooseResolvers.removeMany(),
};

module.exports = {
  query: UserQuery,
  mutation: UserMutation,
  model: UserModel,
  tc: UserTC,
};
