var recipes = {breakfast: 'cereal'}

function updateObjectWithKeyAndValue(object,key,value){
    return Object.assign({},object,{[key]:value})
      }

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){

  Object.key = value
  return Object


}
function deleteFromObjectByKey(object,key){
return  delete Object[key]


}
function destructivelyDeleteFromObjectByKey(object,key){
 delete Object.key
 return Object

}
