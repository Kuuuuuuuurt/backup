<template>
  <div
    class="
      flex flex-col
      items-center
      justify-center
      w-screen
      h-screen
      bg-gray-200
      text-gray-700
    "
  >
    <form
      class="flex flex-col bg-white rounded shadow-lg p-12 mt-12"
      @submit.prevent="login"
    >
      <label class="font-semibold text-xs" for="usernameField">Username</label>
      <input
        class="
          flex
          items-center
          h-12
          px-4
          w-64
          bg-gray-200
          mt-2
          rounded
          focus:outline-none focus:ring-2
        "
        type="text"
        v-model="username"
      />
      <label class="font-semibold text-xs mt-3" for="passwordField"
        >Password</label
      >
      <input
        class="
          flex
          items-center
          h-12
          px-4
          w-64
          bg-gray-200
          mt-2
          rounded
          focus:outline-none focus:ring-2
        "
        type="password"
        v-model="password"
      />
      <button
        class="
          flex
          items-center
          justify-center
          h-12
          px-6
          w-64
          bg-blue-600
          mt-8
          rounded
          font-semibold
          text-sm text-blue-100
          hover:bg-blue-700
        "
      >
        Login
      </button>
      <!-- Component End  -->
    </form>

    <button @click="back">Back</button>
  </div>
</template>

<script>
import app from "../../../firebase/db/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, doc, getDoc, setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      username: "",
      password: "",
      reference: '',
      user:{
          userName: '',
          password: '',
          type: '',
          loginToken:'',
          
      }
    };
    
  },

  methods: {
     back(){
    this.$router.push(`/`)
  },
    login() {
      const email = this.$data.username +"@gmail.com";
      const password = this.$data.password;

      const auth = getAuth(app);

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          this.checkUser();
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/user-not-found":
              alert("User not found");
              break;
            case "auth/wrong-password":
              alert("Wrong password");
              break;
            default:
              alert("Something went wrong");
          }
        });
    },

    async checkUser() {
      const db = getFirestore(app);
      const userRef = collection(db, "user");

      const email = this.$data.username;

      const usersRef = doc(userRef, email);
      this.$data.reference = usersRef;
      let user = await getDoc(this.$data.reference);

      let userData = user.data();

      if(userData.type == "admin"){
          if(userData.loginToken == "No"){
              this.$data.user.userName = userData.userName;
              this.$data.user.password = userData.password;
              this.$data.user.type = userData.type;
              this.$data.user.loginToken = "Yes";


              setDoc(this.$data.reference, this.$data.user)
              this.$router.push(`/admin-home/${this.$data.username}`)
          }
          else if(userData.loginToken == "Yes"){
              alert("Already Logged in");
          }
          else{
              this.$router.push("/admin-login")
          }
      }
      else{
          alert("Incorrect credentials")
      }
    },
  },
};
</script>