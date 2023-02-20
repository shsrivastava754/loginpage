function register(e) {
  // event.preventDefault();
  let email = document.getElementById("email").value;
  let userName = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  // console.log(email,userName,password);

  let obj = {
    email: email,
    userName: userName,
    password: password,
  };

  let json = JSON.stringify(obj);
  // console.log(json);

  localStorage.setItem(userName, json);
  // console.log(localStorage);
}

function login(e) {
  event.preventDefault();
  let userName = String(document.getElementById("username").value);
  let password = String(document.getElementById("password").value);

  let currUser = JSON.parse(localStorage.getItem(userName));
  console.log(currUser);
  if (currUser === null) {
    alert("User not exists");
  } else if (currUser.userName === userName && currUser.password === password) {
    window.location.href = "index.html";
  } else {
    alert("Password mismatch");
  }
}

function handleToggle(e) {
  let pass = document.getElementById("password");
  // if(pass.length()==0){}
  // console.log(pass.value.length);

  let toggleBtn = document.getElementById("toggle");
  // console.log(toggleBtn);

  // if(pass.value.length==0){
  //     toggleBtn.style.display = "none";
  // }

  let currentType = pass.getAttribute("type");
  // pass.setAttribute('type',currentType==='password'?'text':'password');
  if (currentType === "password") {
    pass.setAttribute("type", "text");
    toggleBtn.setAttribute("class", "fa-solid fa-eye-slash");
    // toggleBtn.textContent = "Hide";
  } else {
    pass.setAttribute("type", "password");
    toggleBtn.setAttribute("class", "fa-sharp fa-solid fa-eye toggle");
    // toggleBtn.textContent = "Show";
  }
}
