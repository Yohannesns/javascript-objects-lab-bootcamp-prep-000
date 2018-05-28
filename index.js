var recipes = {breakfast: 'cereal'}

function updateObjectWithKeyAndValue(object,key,value){
     Object.assign({},{lunch:'burger'})
      return recipes
}
function updateObjectWithKeyAndValue(object,key,value){
  recipes[key] = value
  return recipes

}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){

 recipes[key] = value
 return recipes

}
function deleteFromObjectByKey(object,key){
  delete object[key]

}
function destructivelyDeleteFromObjectByKey(object,key){

}
