const getData=()=>{
    fetch("http://localhost:8080/note/read",{
        headers:{
            "Authorization":localStorage.getItem("token")
        },
    })
    .then((response)=>{
       return response.json()
    }).then((data)=>{
        console.log(data);
    }).catch((err)=>{
    console.log(err);
    })
    
    }
    getData()
    