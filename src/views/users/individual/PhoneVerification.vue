<template>

<div class="flex justify-center min-h-screen bg-gray-100 antialiased">
  <div class="
        container
        sm:mt-40
        mt-24
        my-auto
        max-w-md
        border-2 border-gray-200
        p-3
        bg-white
      "
      v-show="togglePhoneNUmber">
      <div class="text-center m-6">
        <h1 class="text-3xl font-semibold text-gray-700">
          Create an Account?
        </h1>
        <p class="text-gray-500">
          Just enter your phone number below and we'll send you an OTP to
          verify your phone number existence!
        </p>
      </div>

      <div class="m-6">
        <div class="mb-4">
          <div class="mb-6">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >Phone Number</label>
              <div class="flex ">
                <span
                class=" w-fit
                px-2
                py-2
                placeholder-gray-300
                border border-gray-300
                rounded-md"
                >+63</span
              >
              <input type="text" class="
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
              v-model="phoneNumber">
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


  <div class="
        container
        sm:mt-40
        mt-24
        my-auto
        max-w-md
        border-2 border-gray-200
        p-3
        bg-white
      "
      v-show=" toggleOTP">
      <div class="text-center m-6">
        <h1 class="text-3xl font-semibold text-gray-700">
          Confirm OTP
        </h1>
        <p class="text-gray-500">
         Just enter the given OTP code to continue to setting up your account!
        </p>
      </div>

      <div class="m-6">
        <div class="mb-4">
          <div class="mb-6">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >OTP Code</label>
              <input type="text" class="
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
               v-model="otpCode">
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
</template>

<script>
import app from "../../../firebase/auth-individual/firebase";
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
    };
  },

  methods: {
    async sendOtp() {
      let phoneNumber =
     this.$data.phoneNumber;
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
          console.log(appVerifier);

          signInWithPhoneNumber(auth, phone, appVerifier)
            .then((confirmationResult) => {
              console.log(confirmationResult);
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              console.log(confirmationResult);
              alert("SMS sent");
              this.$data.togglePhoneNUmber = false;
              this.$data.toggleOTP = true;
              // ...
            })
            .catch((error) => {
              // Error; SMS not sent
              console.log(error);
              alert("Error ! SMS not sent");
              // ...
            });
        } else {
          alert("Invalid Phone Number Format");
        }
      } else {
        alert("Invalid Phone Number Format");
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
          this.$router.push(`/individual-create-account/${phone}`);

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