var recipes = {
  eggs: 3, 
  flour: 1, 
  'baking soda': 2
};

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, {[key]: value});
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}