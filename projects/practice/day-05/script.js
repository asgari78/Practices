// let user;


// let xhr = new XMLHttpRequest()
// xhr.open("GET","https://jsonplaceholder.typicode.com/users/1",true)
// xhr.onload = ()=>{
//   if(xhr.status === 200){
//     user = JSON.parse(xhr.responseText)
//     const getUserAddress = ()=>{
//       if(user.id === 1){
//         return user.address
//       }
//     }
//   }
// }
// xhr.send()






// const fetchUser = (id) => {
//   return new Promise((resolve , reject)=>{
//     setTimeout(() => {
//       const sucsses= true
//       if(sucsses){
//         resolve('نام کاربر : محمدجواد عسگری و همراه کاربر : ۰۹۹۱۵۵۴۵۱۵۸' + "آیدی کاربر : " + id)
//       }else{
//         reject("خطا در برقراری ارتباط با سرور")
//       }
//     }, 1500);
//   })
// }
// fetchUser(1)
// .then((user)=>{
//   console.log(user);
//   return user.id
// })
// .then((id)=>{
//   console.log("در حال پردازش شبکه برای لیست سفارشات کاربر با ایدی مشخص");
// })
// .catch(error=>{
//   console.log(error);
// })
// .finally(()=>{
//   console.log("پایان فعالیت");
// })




// async function fetchPost(id){
//   try{
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//     const post = await response.json()
//     console.log(post);
//   }catch(err){
//     console.log(err + 'خطا دریافت شد');
//   }finally{
//     console.log("پایان پست")
//   }
// }

// fetchPost(1)



// const urlAddress = 'https://jsonplaceholder.typicode.com/users'
// const userName = document.querySelector('h1')
// const userEmail = document.querySelector('p')
// const tryButton = document.querySelector('button')
// const loading = document.querySelectorAll('.loading')
// const [loadnigName,loadingEmail] = loading

// let user = {}

// const resetElements = ()=>{
//   userName.style.display = 'none'
//   userEmail.style.display = 'none'
//   tryButton.style.display = 'none'
// }

// const startLoading = ()=>{
//   loadnigName.style.display = 'flex'
//   loadingEmail.style.display = 'flex'
// }
// const endLoading = ()=>{
//   loadnigName.style.display = 'none'
//   loadingEmail.style.display = 'none'
// }

// const GetUser = async(address,id)=>{
//   try{
//     resetElements()
//     startLoading()
//     const response = await fetch(`${address}/${id}`)
//     if(!response.ok){
//       throw Error('خطا در دریافت کاربر')
//     }
//     user = await response.json()
//     showUserFullfied()
//   }catch(err){
//     console.log(err);
//     showUserError()
//   }finally{
//     endLoading()
//     console.log('کاربر با موفقیت دریافت شد : ' + user.name);
//   }
// }

// const showUserFullfied = ()=>{
//   userName.style.display = 'flex'
//   userEmail.style.display = 'flex'
//   userEmail.style.color = 'black'
//   tryButton.style.display = 'none'
//   userName.innerHTML = user.name
//   userEmail.innerHTML = user.email
// }

// const showUserError = ()=>{
//   userEmail.style.display = 'flex'
//   tryButton.style.display = 'flex'
//   userEmail.style.color = 'red'
//   userEmail.innerHTML = 'خطا در دریافت اطلاعات کاربر'
// }

// tryButton.addEventListener("click",()=>{
//   GetUser(urlAddress,1)
// })

// GetUser(urlAddress,1)