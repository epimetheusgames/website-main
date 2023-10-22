const passwordd = document.getElementById("password");
const submit = document.getElementById("submit");

/* function check() {
  if (int(password.value) = "AccessAcademy") {
    window.location.href = "/devlogin/asodifuhdiu/aosudyiyegwiuyg/";
  } else {
    alert("TypeError: password=FALSE()");
  }
} */

function startCheck() {
  const HTML = document.getElementsByTagName("html")[0];
  HTML.style.animation = "cursor 800ms infinite";
  HTML.title = "Processing, please wait...";
  setTimeout(checkPw, 5000);
}

function checkPw() {
  switch (passwordd.value + "") {
    case "AccessAcademy":
      window.location.href = "/devlogin/asodifuhdiu/aosudyiyegwiuyg/";
      break;
    case "LOL_BEANS_DOT_EYE_OH":
      window.location.href = "/devlogin/asodifuhdiu/aosudyiyegwiuyg/notes/";
      break;
    default:
      alert(
        "typeError: " +
        passwordd.value +
        ' does not match any cases in function checkPw() -> switch (passwordd.value) { }\n\nIf you are recieving this error and the first part of it says "typeError:  does not match..." try reloading the page.'
      );
      break;
  }
  const HTML = document.getElementsByTagName("html")[0];
  HTML.style.animation = "none";
  HTML.title = "";
}
