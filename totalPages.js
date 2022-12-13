const { template } = require('@babel/core')
//64130500043 Nannapat Petcharach
function totalPages(arrayItems, rowsPerPage) {
  //code here
if(arrayItems === null || arrayItems === undefined){
  return undefined
}
else if(rowsPerPage === null || rowsPerPage === undefined || rowsPerPage === 0){
  return 1;
}
else{
return Math.ceil(arrayItems.length/rowsPerPage)
}
}
module.exports = totalPages

// :D