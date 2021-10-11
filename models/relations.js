const entitySchema = require("./entity");
const businessSchema = require("./business");
const usersSchema = require("./users");
const sopSchema = require("./sops");

businessSchema.tc.addRelation("entity", {
  resolver: () => entitySchema.tc.mongooseResolvers.findById(),
  prepareArgs: {
    _id: (source) => source.entity,
  },
  projection: { entity: 1 },
});

usersSchema.tc.addRelation("business", {
    resolver: () => businessSchema.tc.mongooseResolvers.findById(),
    prepareArgs: {
      _id: (source) => source.business,
    },
    projection: { business: 1 },
});

usersSchema.tc.addRelation("entity", {
    resolver: () => entitySchema.tc.mongooseResolvers.findById(),
    prepareArgs: {
      _id: (source) => source.entity,
    },
    projection: { entity: 1 },
});

sopSchema.tc.addRelation("business", {
    resolver: () => businessSchema.tc.mongooseResolvers.findById(),
    prepareArgs: {
      _id: (source) => source.business,
    },
    projection: { business: 1 },
});

sopSchema.tc.addRelation("createdBy", {
    resolver: () => usersSchema.tc.mongooseResolvers.findById(),
    prepareArgs: {
      _id: (source) => source.createdBy,
    },
    projection: { createdBy: 1 },
});