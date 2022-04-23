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
    >
      <div class="text-center m-6">
        <h1 class="text-3xl font-semibold text-gray-700">Forgot Password?</h1>
        <p class="text-gray-500">
          Just enter your email below and we'll send you an email containing
          password reset email!
        </p>
      </div>

      <div class="m-6">
        <div class="mb-4">
          <div class="mb-6">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >Email</label
            >
            <div class="flex">
                <span
                class=" w-fit
                px-2
                py-2
                placeholder-gray-300
                border border-gray-300
                rounded-md"
                >@</span
              >
              <input
                type="email"
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
                v-model="email"
              />
            </div>
            <p class="text-red-500">{{ error }}</p>
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
              @click="sendEmail"
            >
              Send email
            </button>
          </div>
          <p class="text-sm text-center text-gray-400">
            Continue?
            <a
              href="/estab-login"
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
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default {
  data() {
    return {
      email: "",
      error: "",
    };
  },

  methods: {
    sendEmail() {
      const email = this.$data.email;
      const auth = getAuth(app);
      sendPasswordResetEmail(auth, email)
        .then(() => {
          // Password reset email sent!
          console.log("Password reset email sent!");
          // ..
        })
        .catch((error) => {
          this.$data.error = error;
          switch (error.code) {
            case "auth/user-not-found":
              this.$data.error = "User Not Found";
              break;
            default:
              this.$data.error = "Something Went Wrong";
          }

          // ..
        });
    },
  },
};
</script>