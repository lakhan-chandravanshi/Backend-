const createNote=()=>{
    const payload={
      title:document.getElementById("title").value,
      body:document.getElementById("body").value,
      sub:document.getElementById("sub").value
    }
  
    fetch("http://localhost:8080/note/createnote",{
      method:"POST",
      headers:{
          "Content-type":"application/json",
          "Authorization":localStorage.getItem("token")
      },
      body:JSON.stringify(payload)
    }).then(res=>res.json())
    .then(res=>{
              console.log(res)
          })
    .catch(err=>console.log(err))
      }