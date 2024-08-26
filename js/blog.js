import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase,get,ref } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZFj3Pp5CytUVyfm10kcG6FaCmZkGV3YM",
  authDomain: "blog-website-db584.firebaseapp.com",
  projectId: "blog-website-db584",
  storageBucket: "blog-website-db584.appspot.com",
  messagingSenderId: "765008613035",
  appId: "1:765008613035:web:5cf150f1510ef22e7571ee",
  measurementId: "G-5BCL4JNQBH"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getDatabase(app)




function getPostData (){
    const user_ref = ref(db,'post/');
    get(user_ref).then((snapshot)=>{
        const data = snapshot.val()
       
       let html = "";
       const table = document.querySelector('.main')
        for (const key in data){
          const{title,post_content} = data[key]
  
          console.log(post_content);
         
         
           html+= `
           <div class="post"> 
               <h2>${title}</h2>
               <p>
                 ${post_content}
               </p>
           </div>
          `
  
        }
  table.innerHTML =html
  
    })
  }
  
  getPostData()
  