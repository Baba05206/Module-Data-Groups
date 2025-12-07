function contains(object, propertyName) {
  if (typeof object === "object" && object !== null && !Array.isArray(object)) {
    return propertyName in object;
  }
  return false;
}

module.exports = contains;
