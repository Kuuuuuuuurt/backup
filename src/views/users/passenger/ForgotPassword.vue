<template>
  <!-- component -->
  <div class="flex justify-center min-h-screen bg-gray-100 antialiased">
    <div
      class="
        container
        sm:mt-40
        mt-24
        my-auto
        max-w-md
        border-2 border-gray-200
        p-3
        bg-white
      "
      v-show="toggleOTPForm"
    >
      <!-- header -->
      <div class="text-center m-6">
        <h1 class="text-3xl font-semibold text-gray-700">
          Forgot your password?
        </h1>
        <p class="text-gray-500">
          Just enter your phone number below and we'll send you a an OTP to
          reset your password!
        </p>
      </div>
      <!-- sign-in -->
      <div class="m-6">
        <div class="mb-4">
          <div class="mb-6">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >Phone Number</label
            >
            <div class="flex">
              <span
                class="
                  w-fit
                  px-2
                  py-2
                  placeholder-gray-300
                  border border-gray-300
                  rounded-md
                "
                >+63</span
              >
              <input
                type="tek"
                placeholder="Your phone number"
                class="
                  w-full
                  px-3
                  py-2
                  placeholder-gray-300
                  border border-gray-300
                  rounded-md
                  focus:outline-none
                  focus:ring
                  focus:ring-indigo-100
                  focus:border-indigo-300
                  dark:bg-gray-700
                  dark:text-white
                  dark:placeholder-gray-500
                  dark:border-gray-600
                  dark:focus:ring-gray-900
                  dark:focus:border-gray-500
                "
                v-model="phoneNumber"
              />
              <p class="text-red-500">{{ error.number }}</p>
            </div>
          </div>
          <div class="mb-6">
            <button
              type="button"
              class="
                w-full
                px-3
                py-4
                text-white
                bg-indigo-500
                rounded-md
                hover:bg-indigo-600
                focus:outline-none
                duration-100
                ease-in-out
              "
              @click="getOTP"
            >
              Get OTP
            </button>
          </div>

          <div class="mb-6">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >OTP</label
            >
            <input
              placeholder="Enter Code"
              class="
                w-full
                px-3
                py-2
                placeholder-gray-300
                border border-gray-300
                rounded-md
                focus:outline-none
                focus:ring
                focus:ring-indigo-100
                focus:border-indigo-300
                dark:bg-gray-700
                dark:text-white
                dark:placeholder-gray-500
                dark:border-gray-600
                dark:focus:ring-gray-900
                dark:focus:border-gray-500
              "
              v-model="otpCode"
            />
            <p class="text-red-500">{{ error.otp }}</p>
          </div>
          <div id="recaptcha-container"></div>
          <div class="mb-6">
            <button
              type="button"
              class="
                w-full
                px-3
                py-4
                text-white
                bg-indigo-500
                rounded-md
                hover:bg-indigo-600
                focus:outline-none
                duration-100
                ease-in-out
              "
              @click="sendOTP"
            >
              Submit OTP Code
            </button>
          </div>
          <p class="text-sm text-center text-gray-400">
            Don&#x27;t have an account yet?
            <a
              href="/passenger/login"
              class="
                font-semibold
                text-indigo-500
                focus:text-indigo-600 focus:outline-none focus:underline
              "
              >Sign in</a
            >.
          </p>
        </div>
      </div>
    </div>

    <div
      class="
        container
        sm:mt-40
        mt-24
        my-auto
        max-w-md
        border-2 border-gray-200
        p-3
        bg-white
      "
      v-show="togglePassForm"
    >
      <!-- header -->
      <div class="text-center m-6">
        <h1 class="text-3xl font-semibold text-gray-700">Reset password?</h1>
        <p class="text-gray-500">
          Enter your new password to reset password for
          <span class="text-blue-400">{{ users }}</span>
        </p>
      </div>
      <div class="m-6">
        <form class="mb-4">
          <div class="mb-6">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >New Password</label
            >
            <input
              type="password"
              placeholder="Your new Password"
              class="
                w-full
                px-3
                py-2
                placeholder-gray-300
                border border-gray-300
                rounded-md
                focus:outline-none
                focus:ring
                focus:ring-indigo-100
                focus:border-indigo-300
                dark:bg-gray-700
                dark:text-white
                dark:placeholder-gray-500
                dark:border-gray-600
                dark:focus:ring-gray-900
                dark:focus:border-gray-500
              "
              v-model="newPassword"
            />
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >Retype Password</label
            >
            <input
              type="password"
              placeholder="Retype Password"
              class="
                w-full
                px-3
                py-2
                placeholder-gray-300
                border border-gray-300
                rounded-md
                focus:outline-none
                focus:ring
                focus:ring-indigo-100
                focus:border-indigo-300
                dark:bg-gray-700
                dark:text-white
                dark:placeholder-gray-500
                dark:border-gray-600
                dark:focus:ring-gray-900
                dark:focus:border-gray-500
              "
              v-model="retypePassword"
            />
            <p class="text-red-500">{{ error.password }}</p>
          </div>
          <div class="mb-6">
            <button
              type="button"
              class="
                w-full
                px-3
                py-4
                text-white
                bg-indigo-500
                rounded-md
                hover:bg-indigo-600
                focus:outline-none
                duration-100
                ease-in-out
              "
              @click="resetPass"
            >
              Reset Password
            </button>
          </div>
          <p class="text-sm text-center text-gray-400">
            Don&#x27;t have an account yet?
            <a
              href="/passenger/login"
              class="
                font-semibold
                text-indigo-500
                focus:text-indigo-600 focus:outline-none focus:underline
              "
              >Sign in</a
            >.
          </p>
        </form>
      </div>
    </div>
  </div>

   <div
    v-if="updated"
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
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal" @click="updated=false">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
            <div class="p-6 text-center">
                <svg class="mx-auto mb-4 w-14 h-14 text-green-400 dark:text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 13l4 4L19 7"
				></path></svg>
                <h3 class=" text-lg font-normal text-gray-500 dark:text-gray-400">Updated. </h3>
               <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="updated=false">Okay</button>
            </div>
             </div>
        </div>
    </div>
  </div>


  <div
 v-if="smsSentModal"
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
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal" @click="smsSentModal=false">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
            <div class="p-6 text-center">
                <svg class="mx-auto mb-4 w-14 h-14 text-green-400 dark:text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 13l4 4L19 7"
				></path></svg>
        <h3 class="text-lg font-normal text-gray-500 dark:text-gray-400">Success</h3>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">An SMS has been Sent to your Phone Number</h3>
                <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="smsSentModal=false">Okay</button>
            </div>
             </div>
        </div>
    </div>
  </div>

  <div
  v-if="smsNotSentModal"
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
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal" @click="smsNotSentModal=false">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
            <div class="p-6 text-center">
                <svg class="mx-auto mb-4 w-14 h-14 text-red-400 dark:text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <h3 class=" text-lg font-normal text-gray-500 dark:text-gray-400">Something Went Wrong. </h3>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">{{errorMessage}} </h3>
                <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="smsNotSentModal=false">Okay</button>
            </div>
             </div>
        </div>
    </div>
  </div>

</template>

<script>
import app from "../../../firebase/db/firebase";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  signInWithEmailAndPassword,
  updatePassword,
} from "firebase/auth";
export default {
  data() {
    return {
       smsSentModal: false,
      smsNotSentModal: false,
      updated: false,
      users: "",
      newPassword: "",
      retypePassword: "",
      phoneNumber: "",
      otpCode: "",
      togglePassForm: false,
      toggleOTPForm: true,
      appVerifier: "",
      userRefer: "",
      error: {
        password: "",
        number: "",
        otp: "",
      },
      user: {
        userInfo: {
          phoneNumber: "",
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          municipality: "",
          baranggay: "",
          purok: "",
          qrStatus: "",
          qrData: "",
          type: "",
          password: "",
          loginToken: "",
          vaccinationLink: null,
          validIdLink: null,
        },
      },
    };
  },

  methods: {
    getOTP() {
      let phoneNumber = this.$data.phoneNumber;
      phoneNumber = phoneNumber.toString();
      if (phoneNumber.length == 10) {
        if (phoneNumber.startsWith("9")) {
          const phone = "+63" + phoneNumber;
          const auth = getAuth(app);

          window.recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {
              size: "invisible",
              callback: () => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
              },
            },
            auth
          );

          const appVerifier = window.recaptchaVerifier;

          signInWithPhoneNumber(auth, phone, appVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              this.smsSentModal = true;
              // ...
            })
            .catch((error) => {
              // Error; SMS not sent
              console.log(error);
              this.smsNotSentModal = true;
              // ...
            });
        } else {
          this.error.number = "Invalid Phone Number";
        }
      } else {
        this.error.number = "Invalid Phone Number Format";
      }
    },

    async sendOTP() {
      const code = this.$data.otpCode;
      if ((code == null) | (code == "")) {
        alert("Please Enter OTP code");
      } else {
        window.confirmationResult
          .confirm(code)
          .then(() => {

            this.getUser();

            // ...
          })
          .catch((error) => {
            console.log(error);
            alert("Invalid Code")
            // ...
          });
      }
    },

    async getUser() {
      const db = getFirestore(app);
      const userRef = collection(db, "user");

            let usersRef = doc(userRef, this.$data.phoneNumber);
            this.$data.userRefer = usersRef;

            let user = await getDoc(this.$data.userRefer);

            let userData = user.data();
            this.$data.users =
              userData.userInfo.firstName + " " + userData.userInfo.lastName;

            const password = userData.userInfo.password;
            const decrypt = window.atob(password)
            const email = userData.userInfo.phoneNumber + "@gmail.com";
            const auth = getAuth(app);
            signInWithEmailAndPassword(auth, email, decrypt)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                this.togglePassForm = true;
                this.toggleOTPForm = false;
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

    async resetPass() {
      const newPass = this.$data.newPassword;
      const retypePass = this.$data.retypePassword;
      const auth = getAuth(app);
      const user = auth.currentUser;

      //get User
      const phone = this.$data.phoneNumber;
      const db = getFirestore(app);
      const userRef = collection(db, "user");
      let usersRef = doc(userRef, phone);
      this.$data.userRefer = usersRef;
      let users = await getDoc(this.$data.userRefer);

      let userData = users.data();
      this.$data.user.userInfo.firstName = userData.userInfo.firstName;
      this.$data.user.userInfo.lastName = userData.userInfo.lastName;
      this.$data.user.userInfo.gender = userData.userInfo.gender;
      this.$data.user.userInfo.age = userData.userInfo.age;
      this.$data.user.userInfo.purok = userData.userInfo.purok;
      this.$data.user.userInfo.municipality = userData.userInfo.municipality;
      this.$data.user.userInfo.baranggay = userData.userInfo.baranggay;
      this.$data.user.userInfo.phoneNumber = userData.userInfo.phoneNumber;
      this.$data.user.userInfo.qrData = userData.userInfo.qrData;
      this.$data.user.userInfo.qrStatus = userData.userInfo.qrStatus;
      this.$data.user.userInfo.type = userData.userInfo.type;
      this.$data.user.userInfo.loginToken = userData.userInfo.loginToken;
       this.$data.user.userInfo.vaccinationLink = userData.userInfo.vaccinationLink;
        this.$data.user.userInfo.validIdLink = userData.userInfo.validIdLink;
      

      if (newPass == retypePass) {
        if (newPass != "") {
          updatePassword(user, newPass)
            .then(() => {
              // Update successful.
              const encrypt = window.btoa(newPass);
              this.$data.user.userInfo.password = encrypt;
              setDoc(this.$data.userRefer, this.$data.user);
              this.updated = true;
              this.$router.push("/passenger/login");
            })
            .catch((error) => {
              // An error ocurred
              alert(error);
              // ...
            });
        } else {
          this.$data.error.password = "Please Provide Password!";
        }
      } else {
        this.$data.error.password = "Password Mismatch!";
      }
    },

    // back(){
    //   this.$router.push("/passenger/login");
    // }
  },

  created(){
  },
};
</script>