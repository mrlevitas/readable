export function capitalize (str = '') {
  return typeof str !== 'string'
    ? ''
    : str[0].toUpperCase() + str.slice(1)
}

export function editFromArray (array, item) {
  let newArray = array.slice();
  let position = array.findIndex((element) => {
    return element.id === item.id;
  })

  newArray.splice(position,1,item);
  return newArray;
}

export function deleteFromArray (array,itemId) {
  let newArray = array.slice();
  let position = array.findIndex((element) => {
    return element.id === itemId;
  })

  let deletedItem = newArray[position]
  deletedItem['deleted'] = true

  newArray.splice(position,1, deletedItem);
  return newArray;
}
