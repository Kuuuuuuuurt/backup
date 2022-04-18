<template>
  <div class="w-screen h-screen flex justify-center items-center bg-green-900">
    <div class="container h-screen max-w-full overflow-hidden shadow-lg">
      <div class="flex flex-col">
        <div class="flex flex-col w-full h-48 justify-center">
          <div class="text-3xl block w-full text-gray-200 text-center">
            Phone Number
          </div>
          <div
            class="
              text-sm
              block
              w-full
              text-gray-400
              font-base
              text-center
              pt-2
            "
          >
            Please type your phone number.
            <br />
            <div>
              <span
                class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm bg-inherit"
                >+63</span
              >
              <input
                type="text"
                class="
                  appearance-none
                  bg-transparent
                  border
                  rounded
                  px-3
                  py-2
                  mt-1
                  mb-5
                  text-sm
                "
                placeholder="Phone Number"
                v-model="phoneNumber"
              />
            </div>
            <button
              class="text-center -mt-5 text-yellow-500 cursor-pointer"
              @click="sendOtp"
            >
              Get Code
            </button>

            <div id="recaptcha-container"></div>
          </div>
        </div>

        <div class="flex flex-col w-full h-48 justify-center">
          <div class="text-3xl block w-full text-gray-200 text-center">
            Verification Code
          </div>
          <div
            class="
              text-sm
              block
              w-full
              text-gray-400
              font-base
              text-center
              pt-2
            "
          >
            Please type the verification code sent to
            <br />
            {{ "+63" + phoneNumber }}
          </div>
        </div>
        <div
          class="
            flex
            w-full
            flex-1
            h-screen
            flex
            justify-center
            items-center
            text-white
          "
        >
          <div class="h-full py-1 px-8 text-center">
            <div class="w-full max-w-sm">
              <div
                class="flex items-center border-b-2 border-yellow-500 py-2 mt-1"
              >
                <input
                  class="
                    text-center
                    appearance-none
                    bg-transparent
                    border-none
                    w-full
                    text-white text-3xl
                    mr-3
                    py-1
                    px-2
                    leading-tight
                    focus:outline-none
                  "
                  type="number"
                  placeholder="Enter Code here"
                  v-model="otpCode"
                />
              </div>
              <button
                class="text-center pt-8 text-yellow-500 cursor-pointer"
                @click="confirmCode"
              >
                Submit Code
              </button>
            </div>
            <div>
              <button class="text-center pt-8 text-yellow-500 cursor-pointer">
                Resend Code
              </button>
            </div>
          </div>
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
    };
  },

  methods: {
    async sendOtp() {
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
          console.log(appVerifier);

          signInWithPhoneNumber(auth, phone, appVerifier)
            .then((confirmationResult) => {
              console.log(confirmationResult);
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              console.log(confirmationResult);
              alert("SMS sent");
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