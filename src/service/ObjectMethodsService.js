class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    const obj = {
      ...rawObject,
      valueOf() {
        return rawObject.age
      }
    }
    return obj
  }

  getEnhancedObject2(rawObject) {
    const obj = {
      ...rawObject,
      toString() {
        return `[name="${rawObject.name}",age=${rawObject.age}]`
      }
    }
    return obj
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    const obj = {
      ...rawObject,
      [Symbol.toPrimitive](coercionType) {
        const types = {
            string: `[name="${rawObject.name}",age=${rawObject.age}]`,
            number: rawObject.age
        }
        return types[coercionType] || types.string
    }
    }
    return obj
  }
}

module.exports = ObjectMethodsService;
