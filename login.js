const Login=()=>{
    const payload={
      email:document.getElementById("email").value,
      pass:document.getElementById("pass").value
    }
  
    fetch("http://localhost:8080/user/login",{
      method:"POST",
      headers:{
          "Content-type":"application/json"
      },
      body:JSON.stringify(payload)
    }).then(res=>res.json())
    .then(res=>{
              console.log(res)
              localStorage.setItem("token",res.token)
          })
    .catch(err=>console.log(err))
      }