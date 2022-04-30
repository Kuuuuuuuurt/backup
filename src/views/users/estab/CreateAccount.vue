<template>
  <div>
            <form action="" class="form bg-white p-6 my-10 relative" @submit.prevent="register">
                <h3 class="text-2xl text-gray-900 font-semibold">Create an Account!</h3>
                <p class="text-gray-600"> Please enter your information below!</p>
                <input type="email"  placeholder="Email" class="border p-2 w-full mt-3" v-model="user.userInfo.email" required>
                <div class="flex space-x-5 mt-3">
                    <input type="text"  placeholder="Driver Name" class="border p-2  w-1/2" v-model="user.userInfo.owner" required>
                    <input type="tel"  placeholder="Vehicle Identification" class="border p-2 w-1/2" v-model="user.userInfo.vehicleID" required>
                </div>
                 <div class="flex space-x-5 mt-3">
                    <input type="text"  placeholder="Purok" class="border p-2  w-1/2" v-model="user.userInfo.purok" required>
                    <input type="tel"  placeholder="Baranggay" class="border p-2 w-1/2" v-model="user.userInfo.baranggay" required>
                </div>
                 <div class="flex space-x-5 mt-3">
                    <input type="text"  placeholder="Municipality" class="border p-2  w-1/2" v-model="user.userInfo.municipality" required>
                    <input type="tel"  placeholder="Phone Number" class=" p-2 w-1/2 border" v-model="user.userInfo.phoneNumber" required>
                </div>

                <div class="flex space-x-5 mt-3">
                    <input type="password"  placeholder="Password" class="border p-2  w-1/2" v-model="user.userInfo.password" required>
                    <input type="tel"  placeholder="" class=" p-2 w-1/2 bg-white" disabled>
                </div>
                <p class="font-bold text-sm mt-3">Privacy Policy *</p>
                <div class="flex items-baseline space-x-2 mt-2">
                    <p class="text-gray-600 text-sm">by clicking create account, you agree to our <a href="/privacy-policy" class="text-blue-700"
                          >Privay Policy.</a
                        ></p>
                </div>
                <button value="Submit" class="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3">Create Account</button>

            </form>
  </div> 
</template>

<script>
import app from "../../../firebase/auth-individual/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
export default {
  data() {
    return {
      
      user: {
        userInfo: {
          email: "",
          vehicleID: "",
          municipality: "",
          baranggay: "",
          purok: "",
          owner: "",
          phoneNumber: "",
          type: "establishment",
          password: "",
        },
      },
    };
  },

  methods: {
    register() {
      console.log("creating");

      const email = this.$data.user.userInfo.email;
      const password = this.$data.user.userInfo.password;

      const auth = getAuth(app);
      const db = getFirestore(app);

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          //auth
          const user = userCredential.user;
          console.log(user);

          //firestore
          let id = this.$data.user.userInfo.email;
          const addDocs = setDoc(doc(db, "user", id), this.$data.user);
          console.log(addDocs);
          this.$router.push( `/estab-home/${id}`)
          
          
        })
        .catch((error) => {
         switch(error.code){
          case 'auth/user-already-in-used':
            alert("Email already in used")
            break
          case 'auth/operation-not-allowed':
            alert("Operation not allowed")
            break
          case 'auth/weak-password':
            alert("Weak Password")
            break
          case 'auth/invalid-email':
            alert("Invalid email")
            break
          default:
            alert("Something went wrong")
        }
        });
    },
  },
};
</script>