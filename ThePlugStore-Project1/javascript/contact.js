

const form = document.querySelector("form"),
statusText = form.querySelector(".button-area span");

form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "#ff6633";
  statusTxt.style.display = "block";

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      if(response.indexof("Email and password field is required") != -1 || response.indexof("sorry, failed to send your message!"))
      statusTxt.style.color = "red";
    }else{
      form.reset();
      setTimeout(()=>{
        statusTxt.style.display = "none";
      }, 3000);
    }
      statusTxt.innerText = response;
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);

