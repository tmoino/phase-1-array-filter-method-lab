// Code your solution here
function findMatching(src, sort) {
   return src.filter
     ((lettermatch) => lettermatch.toLowerCase() === sort.toLowerCase());
 }
 

 
 function fuzzyMatch(src, names ) {
   return src.filter
   ((lettermatch) => lettermatch.toLowerCase().indexOf(names.toLowerCase()) === 0);
 }
 


 function matchName(src, sortName) {
   return src.filter((prnt) => prnt.name === sortName);
 }