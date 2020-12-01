let changeName = document.querySelector('.changeName');
function handleInfo(e){
  e.preventDefault();
  let name = document.querySelector('.name');
  let pos = document.querySelector('.position')
  let phone = document.querySelector('.phone');
  let email = document.querySelector('.email');
  let location = document.getElementsByName('location');
  let linkin = document.querySelector('.linkin');
  let fb = document.querySelector('.fb');
  let insta = document.querySelector('.insta');
  let changePos = document.querySelector('.changePos');
  let changePhone = document.querySelector('.changePhone');
  let changeLinkin = document.querySelector('.changeLinkin');
  let changeFb = document.querySelector('.changeFb');
  let changeInsta = document.querySelector('.changeInsta');
  let changeEmailto = document.querySelector('.changeEmailto');
  let changeEmail = document.querySelector('.changeEmail')
  let changeLocation = document.querySelector('.changeLocation');
  const deleteLinkin = document.querySelector('.deleteLinkin');
  const deleteFb = document.querySelector('.deleteFb');
  const deleteInsta = document.querySelector('.deleteInsta');
  changeName.textContent = name.value;
  changePos.innerHTML = pos.value + ' | Acazia Software';
  changePhone.textContent = phone.value;
  phone.value = '';
  changeEmail.textContent = email.value;
  changeEmailto.href = 'mailto' + email.value;
  for(i = 0; i <location.length; i++){
    if(location[i].checked) changeLocation.textContent = location[i].value;
  }
  if(linkin.value == '') deleteLinkin.remove();
  else changeLinkin.href = linkin.value;
  if(fb.value == '') deleteFb.remove();
  else changeFb.href = fb.value;
  if(linkin.value == '') deleteInsta.remove();
  else changeInsta.href = insta.value;
  closeForm();
}
function changeText(e){
  // changeName.textContent = e.target.value
  console.log('ac');
}
function closeForm() {
  const Info = document.querySelector('.Info');
  Info.style.display ='none';
}
const firebaseConfig = {
  apiKey: "AIzaSyAe7FmiC5BOqwOE03r1X0be2WTBa6VoiYg",
  authDomain: "signature-acazia.firebaseapp.com",
  databaseURL: "https://signature-acazia.firebaseio.com",
  projectId: "signature-acazia",
  storageBucket: "signature-acazia.appspot.com",
  messagingSenderId: "853307232407",
  appId: "1:853307232407:web:4aa8bf32ec72503cbc99d2",
  measurementId: "G-Y3TEGWY336"
};
firebase.initializeApp(firebaseConfig);
function upload() {
  const changeAvt = document.querySelector('.changeAvt')
  let avt = document.querySelector('.file-input').files[0];
  var storageRef=firebase.storage().ref('images/'+avt.name);
  var uploadTask=storageRef.put(avt);

  uploadTask.on('state_changed',function (snapshot) {
  },function (error) {
      console.log(error.message);
  },function () {
      uploadTask.snapshot.ref.getDownloadURL().then(function (url) {
            changeAvt.style.borderRadius  = "50%";
            changeAvt.src = url;
      });
  });
}