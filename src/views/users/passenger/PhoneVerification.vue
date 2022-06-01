<template>
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
      v-show="togglePhoneNUmber"
    >
      <div class="text-center m-6">
        <h1 class="text-3xl font-semibold text-gray-700">Create an Account?</h1>
        <p class="text-gray-500">
          Just enter your phone number below and we'll send you an OTP to verify
          your phone number existence!
        </p>
      </div>

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
                type="text"
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
            </div>
            <p class="text-red-500">{{}}</p>
          </div>
          <div id="recaptcha-container"></div>
          <div>
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
              @click="sendOtp"
            >
              Get OTP
            </button>
          </div>
          <p class="text-sm text-center text-gray-400">
            Already have an account?
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
      v-show="toggleOTP"
    >
      <div class="text-center m-6">
        <h1 class="text-3xl font-semibold text-gray-700">Confirm OTP</h1>
        <p class="text-gray-500">
          Just enter the given OTP code to continue to setting up your account!
        </p>
      </div>

      <div class="m-6">
        <div class="mb-4">
          <div class="mb-6">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >OTP Code</label
            >
            <input
              type="text"
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
            <p class="text-red-500">{{}}</p>
          </div>
          <div>
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
              @click="confirmCode"
            >
              Submit OTP
            </button>
          </div>
          <p class="text-sm text-center text-gray-400">
            Already have an account?
            <a
              href="#!"
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
import { doc, getDoc, getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";

export default {
  data() {
    return {
      phoneNumber: "",
      appVerifier: "",
      otpCode: "",
      togglePhoneNUmber: true,
      toggleOTP: false,
      smsSentModal: false,
      smsNotSentModal: false,
      errorMessage: "",
    };
  },

  methods: {
    async sendOtp() {
      let phoneNumber = this.$data.phoneNumber;
      phoneNumber = phoneNumber.toString();
      if (phoneNumber.length == 10) {
        if (phoneNumber.startsWith("9")) {
          const db = getFirestore(app);

          const docRef = doc(db, "user", phoneNumber);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            alert("User Exist");
          } else {
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
            console.log(appVerifier);

            signInWithPhoneNumber(auth, phone, appVerifier)
              .then((confirmationResult) => {
                console.log(confirmationResult);
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                console.log(confirmationResult);
                this.smsSentModal = true;
                this.$data.togglePhoneNUmber = false;
                this.$data.toggleOTP = true;
                // ...
              })
              .catch((error) => {
                // Error; SMS not sent
                console.log(error);
                this.smsNotSentModal = true;
                this.errorMessage = "SMS Not Sent Please Check Your Credentials."
                // ...
              });
          }
        } else {
          this.smsNotSentModal = true;
          this.errorMessage = "Invalid Phone Number Format."
        }
      } else {
        this.smsNotSentModal = true;
        this.errorMessage = "Invalid Phone Number"
      }
    },

    confirmCode() {
      const code = this.$data.otpCode;
      console.log(code);
      window.confirmationResult
        .confirm(code)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          const phone = this.$data.phoneNumber;
          console.log(user);
          this.$router.push(`/passenger/create-account/${phone}`);

          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          console.log(error);
          // ...
        });
    },
  },

  created() {},
};
</script>