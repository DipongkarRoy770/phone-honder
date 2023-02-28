const userPhone =(search)=>{
  fetch(`https://openapi.programming-hero.com/api/phones?search=${search}`)
   .then(res => res.json())
   .then(data => phoneDisplay(data.data.slice(0,3)))
}
// document.getElementById('btn').addEventListener('click', function(){
//   const phone =document.getElementById('not-found-txt')
// })
// if(phone.length === 0){
//  phone.classList.remove(hidden)
// }
// else{
//   phone.classList.add(hidden)
// }
const phoneDisplay = phones =>{
  const container = document.getElementById('container')
  container.innerText = "" ;

  document.getElementById('btn').addEventListener('click', function(){
    const notfound = document.getElementById('not-found-txt');
    if(phones.length === 0){
      notfound.classList.add('hidden')
    }
    else{
      notfound.classList.remove('hidden')
    }
  })

 for(const user of phones){
  console.log(user)
  const mainBox = document.createElement('div')
  mainBox.innerHTML = `
  <div class="card card-compact w-11/12 mx-auto bg-base-300  mt-12">
  <figure><img class= "w-36 pt-6" src="${user.image}" alt="Shoes" /></figure>
 <div class="card-body">
    <h2 class="card-title">${user.phone_name}</h2>
    <h2 class="card-title">${user.slug}</h2>
   <div class="card-actions justify-end">
     <button class="btn btn-primary">Buy Now</button>
   </div>
 </div>
</div>
  ` ;
  container.appendChild(mainBox)
  document.getElementById('input').value = ' ' ;
 }
 
}
document.getElementById('btn').addEventListener('click',function(){
  const search = document.getElementById('input').value ;
  userPhone(search)
  search.value = " " ;
})
userPhone('iphone')