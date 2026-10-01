// const myPromise = new Promise((resolve,reject)=>{

//   const randomNumber = Math.ceil(Math.random() * 10)
//   if(randomNumber > 5){
//     resolve('this Number is bigger of 5' + ' ' + randomNumber)
//   }else{
//     reject('error' + ' ' + randomNumber)
//   }
// })
// const userLogin = (mess)=>{
//   console.log(mess);
// }

// const errorLogin = (mess)=>{
//   console.log(mess);
// }

// myPromise.then(userLogin).catch(errorLogin)

const getUser = (id)=>{
  return new Promise(
    (resolve,rejecet)=>{
      setTimeout(() => {
        const users = [
          {id:1,name:'ali'},
          {id:2,name:'hassan'},
          {id:3,name:'reza'},
          {id:4,name:'mohammad'},
        ]
        const myUser = users.find(user=>user.id===id)
        resolve(`user id is ${myUser.id} and user name is ${myUser.name}`)
      }, 5000);
    }
  )
}

const getUserInfo = async (id)=>{
  console.log('fetching...');
  const findedUser = await getUser(id)
  console.log(findedUser);
}

getUserInfo(3)