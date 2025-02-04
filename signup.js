const signup=()=>{
    const payload={
      name:document.getElementById("name").value,
      email:document.getElementById("email").value,
      pass:document.getElementById("pass").value
    }
  
    fetch("http://localhost:8080/user/registar",{
      method:"POST",
      headers:{
          "Content-type":"application/json"
      },
      body:JSON.stringify(payload)
    }).then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
      }