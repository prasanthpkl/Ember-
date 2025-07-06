import JSONSerializer from '@ember-data/serializer/json';

export default class SchemeSerializer extends JSONSerializer {
  normalizeArrayResponse(store, primaryModelClass, payload) {
    return {
      data: payload.map((item) => ({
        id: item.id,
        type: primaryModelClass.modelName,
        attributes: {
          name: item.name,
          description: item.description,
          eligibility: item.eligibility
        }
      }))
    };
  }
}
