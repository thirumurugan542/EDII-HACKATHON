import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {getDatabase, ref, set, get, remove ,child} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyCtZEdZqxxM1i0WGV2-Xk84Qj9ZtTDDhcY",
  authDomain: "login-form-9c63b.firebaseapp.com",
  databaseURL: "https://login-form-9c63b-default-rtdb.firebaseio.com",
  projectId: "login-form-9c63b",
  storageBucket: "login-form-9c63b.appspot.com",
  messagingSenderId: "718323928178",
  appId: "1:718323928178:web:86380cd6dd3128786cc6eb"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase()

const userEl = document.getElementById("username")
const passwordEl = document.getElementById("password")
const loginBtn = document.getElementById("loginbtn")

loginBtn.addEventListener('click',()=>{
    console.log(userEl.value)
    console.log(passwordEl.value)
    const dbRef = ref(db)
    get(child(dbRef, 'Users/' + userEl.value)).then((snapshot) =>{
        if(snapshot.exists()){
            const userdb = snapshot.val().name
            const passwordDb = snapshot.val().password
            console.log(userdb)
            console.log(passwordDb)
            checkData(userdb,passwordDb)
        }
    })
})

function checkData(userdb, passwordDb){
    if((userEl.value === userdb) && (passwordEl.value === passwordDb)){
        alert("login successfully!!")
    }else{
        alert("Invalid Username and Password")
    }
}