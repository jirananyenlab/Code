const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
 return arrayItems?.length === undefined ? undefined : rowsPerPage  === null || !rowsPerPage || rowsPerPage === 0 ? 1 : Math.ceil(arrayItems.length / rowsPerPage) 
} 

function totalPages(arrayItems, rowsPerPage) {
  if (arrayItems === null || !arrayItems ) {
    return undefined
  }
 else if (rowsPerPage === null || !rowsPerPage || arrayItems.length <= rowsPerPage) {
    return 1
  }
   return  Math.ceil(arrayItems.length / rowsPerPage) 
  } 
module.exports = totalPages
