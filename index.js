let display=document.getElementById('display')

let btn=document.getElementById('btn')

let data=[]

btn.addEventListener('click',function(){
   fetch("https://reqres.in/api/users").then(function(res){
    return res.json()
   }).then(function(res){
    data=res.data
    
    displayData(data)
   })

   if(show==false){

    setTimeout(()=>{
        alert("Please refresh the page!")
    },100)

   }

   
})
let show=true

function displayData(data){
    if(show==true){

        data.forEach(function(user){
            let div=document.createElement("div")
            
    
            let avatar=document.createElement("img")
            avatar.src=user.avatar
            avatar.style.width='30px'
            avatar.style.height='30px'
    
            let name=document.createElement("p")
            name.innerText=`${user.first_name} ${user.last_name}`;
    
            let email=document.createElement('p')
            email.innerText=user.email;
    
            div.append(avatar,name,email);
    
            display.appendChild(div)
          
        })

    }
    
    show=false
    
   
}


