var recipes = { }

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  obj[key] = value
  
  return obj
}

function deleteFromObjectByKey(object, key) {
  var clone = Object.assign({}, obj)
  delete clone[key]
  return clone
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return 
}