// promise api
let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("value 1")
    },11000)
  })
  let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("value 2")
    },2000)
  })
  let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("value 3")
    },5000)
  })
  // promise api to execute multiple promises
  let promise_all =Promise.race([p1,p2,p3])
  promise_all.then((value)=>{
    console.log(value);
  })