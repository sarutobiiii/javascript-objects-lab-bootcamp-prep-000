var recipes = { }

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  obj[key] = value
  
  return obj
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, obj)
  
  delete newObj.
}