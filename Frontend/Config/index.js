import firebase from "firebase/app";
import "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZHeGcvZy9IRVAPinI8aJ1G0MUoAqaS00",
  authDomain: "appcadastramento.firebaseapp.com",
  projectId: "appcadastramento",
  storageBucket: "appcadastramento.appspot.com",
  messagingSenderId: "1047101175270",
  appId: "1:1047101175270:web:4f44d4f4f207dd0b3b5227"
};

if (firebase.app.length == 0) {
    const app = initializeApp(firebaseConfig);
    
}
export default firebase;