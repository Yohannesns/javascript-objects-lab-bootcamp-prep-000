var recipes = {breakfast: 'cereal'}

function updateObjectWithKeyAndValue(object,key,value){
    return Object.assign({},{[key]:value})
      }

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){

 recipes.key = value
 return recipes

}
function deleteFromObjectByKey(object,key){
return  delete Object[key]


}
function destructivelyDeleteFromObjectByKey(object,key){
return delete Object.key

}
