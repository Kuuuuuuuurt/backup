<template>
  <div>
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 class="font-bold text-center text-2xl mb-5">Trafex</h1>
        <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <form class="" @submit.prevent="login">
            <div class="px-5 py-7">
              <label class="font-semibold text-sm text-gray-600 pb-1 block"
                >Phone Number</label
              >
              <input
                type="text"
                class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                required
                v-model="users.phoneNumber"
              />
              <label class="font-semibold text-sm text-gray-600 pb-1 block"
                >Password</label
              >
              <input
                type="password"
                class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                required
                v-model="users.password"
              />
              <button
                type="submit"
                class="
                  transition
                  duration-200
                  bg-blue-500
                  hover:bg-blue-600
                  focus:bg-blue-700
                  focus:shadow-sm
                  focus:ring-4
                  focus:ring-blue-500
                  focus:ring-opacity-50
                  text-white
                  w-full
                  py-2.5
                  rounded-lg
                  text-sm
                  shadow-sm
                  hover:shadow-md
                  font-semibold
                  text-center
                  inline-block
                "
              >
                <span class="inline-block mr-2">Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 h-4 inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </form>
          <div class="p-5">
            <div class="grid grid-cols-2 gap-1">
              <button
                type="button"
                class="
                  transition
                  duration-200
                  border border-gray-200
                  text-gray-500
                  w-full
                  py-2.5
                  rounded-lg
                  text-sm
                  shadow-sm
                  hover:shadow-md
                  font-normal
                  text-center
                  inline-block
                "
                @click="toregister"
              >
                Register
              </button>
              <button
                type="button"
                class="
                  transition
                  duration-200
                  border border-gray-200
                  text-gray-500
                  w-full
                  py-2.5
                  rounded-lg
                  text-sm
                  shadow-sm
                  hover:shadow-md
                  font-normal
                  text-center
                  inline-block
                "
                @click="estab"
              >
                Establishment
              </button>
            </div>
          </div>
          <div class="py-5">
            <div class="grid grid-cols-2 gap-1">
              <div class="text-center sm:text-left whitespace-nowrap">
                <button
                  class="
                    transition
                    duration-200
                    mx-5
                    px-5
                    py-4
                    cursor-pointer
                    font-normal
                    text-sm
                    rounded-lg
                    text-gray-500
                    hover:bg-gray-100
                    focus:outline-none
                    focus:bg-gray-200
                    focus:ring-2
                    focus:ring-gray-400
                    focus:ring-opacity-50
                    ring-inset
                  "
                  @click="forgotPassword"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4 inline-block align-text-top"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="inline-block ml-1">Forgot Password</span>
                </button>
              </div>
              <div class="text-center sm:text-right whitespace-nowrap">
                <button
                  class="
                    transition
                    duration-200
                    mx-5
                    px-5
                    py-4
                    cursor-pointer
                    font-normal
                    text-sm
                    rounded-lg
                    text-gray-500
                    hover:bg-gray-100
                    focus:outline-none
                    focus:bg-gray-200
                    focus:ring-2
                    focus:ring-gray-400
                    focus:ring-opacity-50
                    ring-inset
                  "
                  @click="about"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-4 h-4 inline-block align-text-bottom"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span class="inline-block ml-1">About</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="py-5">
          <div class="grid grid-cols-2 gap-1">
            <div class="text-center sm:text-left whitespace-nowrap">
              <button
                class="
                  transition
                  duration-200
                  mx-5
                  px-5
                  py-4
                  cursor-pointer
                  font-normal
                  text-sm
                  rounded-lg
                  text-gray-500
                  hover:bg-gray-200
                  focus:outline-none
                  focus:bg-gray-300
                  focus:ring-2
                  focus:ring-gray-400
                  focus:ring-opacity-50
                  ring-inset
                "
                @click="admin"
              >
                <span class="inline-block ml-1">Continue as admin</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 h-4 inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


      <div
      v-if="errorModal"
    class="
      main-modal
      fixed
      w-full
      inset-0
      z-50
      overflow-hidden
      flex
      justify-center
      items-center
      animated
      fadeIn
      faster
    "
    style="background: rgba(0, 0, 0, 0.7)"
  >
  <div class="relative p-4 w-full max-w-md h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
             <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal" @click="errorModal=false">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
            <div class="p-6 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/463/463612.png" alt="" class="mx-auto mb-4 w-24  text-gray-400 dark:text-gray-200"> 
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{{user.error}}</h3>
                <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="errorModal=false">Close</button>
            </div>
             </div>
        </div>
    </div>
  </div>

</template>

<script>
import app from "../../../firebase/auth-individual/firebase";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, doc, getDoc, setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      errorModal: false,
      reference: "",
      users: {
        phoneNumber: "",
        password: "",
        error: "",
      },
      user:{
        userInfo:{
          phoneNumber: "",
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          municipality: "",
          baranggay: "",
          purok: "",
          qrStatus: "No Application",
          qrData: null,
          type: "individual",
          password: '',
          loginToken: "",
          vaccinationLink: null,
          validIdLink: null,
        }
      }
    };
  },
  methods: {
    login() {
      const auth = getAuth(app);

      const phoneEmail = this.$data.users.phoneNumber + "@gmail.com";
      const password = this.$data.users.password;

      signInWithEmailAndPassword(auth, phoneEmail, password)
        .then(() => {
          // Signed in
          

          this.checkUser();
        })
        .catch((error) => {
           switch(error.code){
          case 'auth/user-not-found':
            this.$data.user.error = "User Not Found"
            this.$data.errorModal = true;
            break
          case 'auth/wrong-password':
            this.$data.user.error = "Incorrect Password"
            this.$data.errorModal = true;
            break
          default:
          this.$data.user.error = "Something Went Wrong Please Try Again"
          this.$data.errorModal = true;
        }
        });
    },

    toregister() {
      this.$router.push("/individual-verify-user");
    },
    estab() {
      this.$router.push("/estab-login");
    },
    about() {
      this.$router.push("/");
    },
    admin() {
      this.$router.push("/admin-login");
    },

    forgotPassword(){
      this.$router.push("/individual-forgot-pass")
    },

    async checkUser() {
      const auth = getAuth(app);
      const db = getFirestore(app);
      const userRef = collection(db, "user");

      let usersRef = doc(userRef, this.$data.users.phoneNumber);
      this.$data.reference = usersRef;
      let user = await getDoc(this.$data.reference);

      let userData = user.data();

      const identifier = userData.userInfo.type;

      if (identifier == "individual") {
        if(userData.userInfo.loginToken == "No"){
          this.$data.user.userInfo.firstName = userData.userInfo.firstName;
          this.$data.user.userInfo.lastName = userData.userInfo.lastName;
          this.$data.user.userInfo.municipality = userData.userInfo.municipality;
          this.$data.user.userInfo.baranggay = userData.userInfo.baranggay;
          this.$data.user.userInfo.purok = userData.userInfo.purok;
          this.$data.user.userInfo.gender = userData.userInfo.gender;
          this.$data.user.userInfo.age = userData.userInfo.age;
          this.$data.user.userInfo.qrStatus = userData.userInfo.qrStatus;
          this.$data.user.userInfo.qrData = userData.userInfo.qrData;
          this.$data.user.userInfo.type = userData.userInfo.type;
          this.$data.user.userInfo.vaccinationLink = userData.userInfo.vaccinationLink;
          this.$data.user.userInfo.validIdLink = userData.userInfo.validIdLink;
          this.$data.user.userInfo.phoneNumber = userData.userInfo.phoneNumber;
          this.$data.user.userInfo.loginToken = "Yes";
          this.$data.user.userInfo.password = userData.userInfo.password;
          
        setDoc(this.$data.reference, this.$data.user);
        this.$router.push(`/individual-home/${this.$data.users.phoneNumber}`);
        }
        else if(userData.userInfo.loginToken == "Yes"){
          alert("User Already Logged in")
        }
        else{
          alert("No Token")
        }
      } else {
        alert("User Does not Exist!");
        signOut(auth)
          .then(() => {
            // Sign-out successful.
            console.log(auth.currentUser);
          })
          .catch((error) => {
            // An error happened.
            console.log(error);
          });
      }
    },
  },
};
</script>
