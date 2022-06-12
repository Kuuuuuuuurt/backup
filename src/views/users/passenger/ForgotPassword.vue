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
        <form class="mb-4">
          <div class="mb-6">
            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >Phone Number</label
            >
            <div class="flex">
               <span
                class=" w-fit
                px-2
                py-2
                placeholder-gray-300
                border border-gray-300
                rounded-md"
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
              type="number"
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
              v-model="otp"
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
              href="#!"
              class="
                font-semibold
                text-indigo-500
                focus:text-indigo-600 focus:outline-none focus:underline
              "
              >Sign up</a
            >.
          </p>
        </form>
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
              href="#!"
              class="
                font-semibold
                text-indigo-500
                focus:text-indigo-600 focus:outline-none focus:underline
              "
              >Sign up</a
            >.
          </p>
        </form>
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
      users: "",
      newPassword: "",
      retypePassword: "",
      phoneNumber: "",
      otp: "",
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
          this.error.number = "Invalid Phone Number";
        }
      } else {
        this.error.number = "Invalid Phone Number Format";
      }
    },

    async sendOTP() {
      const code = this.$data.otp;
      if ((code == null) | (code == "")) {
        alert("Please Enter OTP code");
      } else {
        this.confirmCode();
        const db = getFirestore(app);
        const userRef = collection(db, "user");

        let usersRef = doc(userRef, this.$data.phoneNumber);
        this.$data.userRefer = usersRef;

        let user = await getDoc(this.$data.userRefer);

        let userData = user.data();
        this.$data.users =
          userData.userInfo.firstName + " " + userData.userInfo.lastName;
          console.log(userData)

        const password = userData.userInfo.password;
        const email = userData.userInfo.phoneNumber + "@gmail.com";
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            console.log(auth.currentUser);
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
      }
    },

    confirmCode(){
      const code = this.otp;
      console.log(code);
       window.confirmationResult
        .confirm(code)
        .then((result) => {
          const user = result.user;
          console.log(user);

          // ...
        })
        .catch((error) => {
          console.log(error);
          // ...
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

      if (newPass == retypePass) {
          if(newPass != ""){
        updatePassword(user, newPass)
          .then(() => {
            // Update successful.
            this.$data.user.userInfo.password = newPass;
            setDoc(this.$data.userRefer, this.$data.user);
            alert("password updated");
            this.$router.push("/passenger/slogin");
          })
          .catch((error) => {
            // An error ocurred
            alert(error);
            // ...
          });
          }
          else{
              this.$data.error.password = "Please Provide Password!";
          }
      } else {
        this.$data.error.password = "Password Mismatch!";
      }
    },
  },
};
</script>