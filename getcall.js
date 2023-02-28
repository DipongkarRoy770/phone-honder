function getcall(phoneDisplay ,name){
   phoneDisplay(name)
}
function phoneDisplay(name){
  console.log('good morning',name)
}
function userPhone(name){
  console.log('good evening ',name)
}
getcall(phoneDisplay,'dipongkar')
getcall(userPhone,'sujon')