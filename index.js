var recipes = {breakfast: 'cereal'}

function updateObjectWithKeyAndValue(object,key,value){
    return Object.assign({},{[key]:value})
      }

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){

 recipes.key = value
 return recipes

}
function deleteFromObjectByKey(object,key){
  delete recipes[key]
  return recipes

}
function destructivelyDeleteFromObjectByKey(object,key){
delete recipes.key
return recipes
}
