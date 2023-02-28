function sum(a ,b,c){
  console.log( arguments[4])
  return a+b+c ;
}
const result = sum(42,56,34,456,435);
console.log(result)