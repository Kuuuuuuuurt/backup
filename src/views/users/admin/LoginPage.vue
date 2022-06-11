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
          bg-black
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

    <button
      @click="back"
      type="button"
      class="
        text-black
        bg-[#050708]
        hover:bg-[#050708]/90
        focus:ring-4 focus:outline-none focus:ring-[#050708]/50
        font-medium
        rounded-lg
        text-sm
        px-5
        py-2.5
        text-center
        inline-flex
        items-center
        dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30
        mr-2
        mb-2
      "
    >
      <svg
        class="w-6 h-6 dark:text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
        ></path>
      </svg>
      Sign in as User
    </button>
  </div>


  <div
  v-if="existingModal"
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
          <button
            type="button"
            class="
              absolute
              top-3
              right-2.5
              text-gray-400
              bg-transparent
              hover:bg-gray-200 hover:text-gray-900
              rounded-lg
              text-sm
              p-1.5
              ml-auto
              inline-flex
              items-center
              dark:hover:bg-gray-800 dark:hover:text-white
            "
            data-modal-toggle="popup-modal"
            @click="existingModal = false"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="p-6 text-center">
            <svg
              class="mx-auto mb-4 w-14 h-14 text-yellow-400 dark:yellow-red-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3
              class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
            >
              User admin is already Logged in. Please type the password to confirm and continue.
            </h3>

              <label class="font-semibold text-sm text-gray-600 pb-1 block"
                >Password</label
              >
              <span class="text-red-400 font-xs">{{this.error}}</span>
              <input
                type="password"
                class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                required
                v-model="alreadyPassword"
              />
            <button
              data-modal-toggle="popup-modal"
              type="button"
              class="
                text-white
                bg-blue-600
                hover:bg-blue-800
                focus:ring-4 focus:outline-none focus:ring-blue-300
                dark:focus:ring-blue-800
                font-medium
                rounded-lg
                text-sm
                inline-flex
                items-center
                px-5
                py-2.5
                text-center
                mr-2
              "
              @click="alreadyLogin"
            >
              Login
            </button>
            <button
              data-modal-toggle="popup-modal"
              type="button"
              class="
                text-gray-500
                bg-white
                hover:bg-gray-100
                focus:ring-4 focus:outline-none focus:ring-gray-200
                rounded-lg
                border border-gray-200
                text-sm
                font-medium
                px-5
                py-2.5
                hover:text-gray-900
                focus:z-10
                dark:bg-gray-700
                dark:text-gray-300
                dark:border-gray-500
                dark:hover:text-white
                dark:hover:bg-gray-600
                dark:focus:ring-gray-600
              "
              @click="existingModal = false"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import app from "../../../firebase/db/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
export default {
  data() {
    return {
      error: "",
      alreadyPassword: "",
      existingModal: false,
      username: "",
      password: "",
      reference: "",
      user: {
        userName: "",
        password: "",
        type: "",
        loginToken: "",
      },
    };
  },

  methods: {
    back() {
      this.$router.push(`/`);
    },
    login() {
      const email = this.$data.username + "@gmail.com";
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

    alreadyLogin(){
      const auth = getAuth(app);

      const phoneEmail = this.$data.user.userName + "@gmail.com";
      const password = this.$data.alreadyPassword;

      signInWithEmailAndPassword(auth, phoneEmail, password)
        .then(() => {
          // Signed in
          this.$data.user.loginToken = "Yes";
          setDoc(this.$data.reference, this.$data.user);
          this.$router.push(`/admin-home/${this.$data.username}`);

        })
        .catch((error) => {
           switch(error.code){
          case 'auth/user-not-found':
            this.$data.error = "User Not Found"
            break
          case 'auth/wrong-password':
            this.$data.error = "Incorrect Password"
            break
          default:
          this.$data.error = "Something Went Wrong Please Try Again"
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
      this.$data.user.userName = userData.userName;
       this.$data.user.password = userData.password;
       this.$data.user.type = userData.type;
      if (userData.type == "admin") {
        if (userData.loginToken == "No") {
          this.$data.user.loginToken = "Yes";

          setDoc(this.$data.reference, this.$data.user);
          this.$router.push(`/admin-home/${this.$data.username}`);
        } else if (userData.loginToken == "Yes") {
          this.existingModal = true;
        } else {
          this.$router.push("/admin-login");
        }
      } else {
        alert("Incorrect credentials");
      }
    },
  },
};
</script>