// const student = {
//   name: 'diponkar roy',
//   amound :435 ,
//   job: 'web designeer',
//   study: 'cse',
//   foodBody:function(amound,tax,teps){
//     this.amound = this.amound- amound-tax-teps
//     return this.amound ;
//   }
// }
// const output =student.foodBody(12,63,55);
// console.log(output)

//new variable :
// const person={
//   name: 'dipongkar',
//   job: 'web desnigeer',
//   bou:function(a){
//     // console.logO('throw the ball')
//     this.a = this.a - a
//     return a 
//   } ,
//   selari:4500 
// }
// console.log(person.bou('ami tomar partnner')) 


//class diye object crate kora:
class person{
   name = 'dipongkar' ;
   jab = 'web dev' ;
  //  constructor(age){
  //   this.age = age ;
  //  }
   constructor(name){
    this.name = name ;
   }
}
const person1 = new person('thiti mohaonto')
const person2 = new person(23) ;
console.log(person1,person2)