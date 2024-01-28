// submitIt used by form for top N names and tests for valid year
function submitIt() {
 if(IsNum(document.popnames.year.value)) {
   alert("Use numeric characters only!")
   document.popnames.year.focus()
   document.popnames.year.select()
   return false
 } 
}

// submitBaby used by form for a given baby name and
// test for valid name & valid number of years
function submitBaby() {
 if(IsNum(document.babyname.nyrs.value)) {
   alert("Use numeric characters only!")
   document.babyname.nyrs.focus()
   document.babyname.nyrs.select()
   return false
 }
 
 if(IsName(document.babyname.name.value)) {
   alert("Use alphabetic characters only!")
   document.babyname.name.focus()
   document.babyname.name.select()
   return false
 }  
}

function IsNum(u) {
// var num is set as non-digit
   var num = /\D/;
   return num.test(u);
}

function IsName(u) {
// var alpha is set as non-alphanumeric
   var alpha = /\W/;
   return alpha.test(u);
}
