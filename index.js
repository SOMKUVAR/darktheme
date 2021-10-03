let button = document.getElementById('button')
let err = document.getElementById('errorp')
let email = document.getElementById('input')
button.addEventListener('click',check);

function check(){
    let ans = validateemail();
    if(ans === false){
      err.innerHTML = "Please provide a valid email"
      let dv = document.getElementById('error')
      dv.className = "txt error"
    }
  }
  function validateemail()  
  {  
  let x = email.value;
  var atposition=x.indexOf("@");  
  var dotposition=x.lastIndexOf(".");  
  if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    return false;  
    }  
  }  