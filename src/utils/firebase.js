import firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCa7ebNvznIlGS9q6wFeJK_HRhXetKySCk",
  authDomain: "payroll-manager-3ad2f.firebaseapp.com",
  projectId: "payroll-manager-3ad2f",
  storageBucket: "payroll-manager-3ad2f.appspot.com",
  messagingSenderId: "744291992119",
  appId: "1:744291992119:web:686334d31d788ae95cf5b2",
};
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export {auth}
