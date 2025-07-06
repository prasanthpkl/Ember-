import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
  normalizeArrayResponse(store, primaryModelClass, payload) {
    return {
      data: payload.map(item => ({
        id: item.id,
        type: primaryModelClass.modelName,
        attributes: {
          name: item.name,
          email: item.email,
          mobile: item.mobile,
          scheme: item.scheme,
          status: item.status,
          userId: item.userId,
        },
      })),
    };
  }
}
