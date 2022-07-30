class ReferencesService {
  getCounterCopyingReferences(object) {
    return object
  }

  getCounterWithoutCopyingReferences(object) {
    const newObj = { ...object }
    return newObj
  }

  getCounterWithoutDeepCopyingReferences(object) {
    return JSON.parse(JSON.stringify(object))
  }
}

module.exports = ReferencesService;
