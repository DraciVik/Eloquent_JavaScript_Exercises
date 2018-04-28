/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/
let result = "#";
console.log(result);
for(let counter = 0; counter < 6; counter++) {
  console.log(result += "#");
}
