// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyIu1KIr-u9EGjmxF5ZrfZD_l_X0Xw6BQ",
  authDomain: "lets-talk-d60fa.firebaseapp.com",
  projectId: "lets-talk-d60fa",
  storageBucket: "lets-talk-d60fa.appspot.com",
  messagingSenderId: "966566825353",
  appId: "1:966566825353:web:45fb354f17e330d580e558"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// add these two lines one for auth and another one for database
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (username,email,password)=>{

    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id: user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey, There i am using chat app",
            lastSeen: Date.now()
        })


        await setDoc(doc(db,"chats",user.uid),{
            chatData:[],
        })
        console.log("success")
        
    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }

}


const login = async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (error) {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = async ()=>{

    try{
        await signOut(auth)

    } catch{
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }

}


export {signup,login,logout,auth,db}