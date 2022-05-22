<template>
  <nav
    class="
      bg-white
      shadow
      fixed
      z-10
      mx-auto
      inset-x-0
      top-0
      flex
      justify-between
      items-center
    "
  >
    <a
      href="#"
      class="
        font-bold
        m-3
        inline-flex
        hover:text-pink-700
        transition-all
        duration-500
      "
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/3524/3524636.png"
        style="height: 25px"
        alt=""
        class="mr-2"
        loading="lazy"
      />
      Settings
    </a>

    <!-- List of nav item -->
    <a
      href="#"
      class="
        font-extrabold
        m-3
        uppercase
        inline-flex
        hover:text-pink-700
        transition-all
        duration-500
      "
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/1008/1008001.png"
        style="height: 25px"
        alt=""
        class="mr-2"
        loading="lazy"
      />
      TRAFEX
    </a>
  </nav>

  <div class="bg-opacity-50 mt-16">
    <div class="mx-auto container max-w-2xl md:w-3/4 shadow-md">
      <div
        class="
          bg-gray-100
          p-4
          border-t-2
          bg-opacity-5
          border-indigo-400
          rounded-t
        "
      >
        <h2>Update Profile</h2>
      </div>

      <div class="bg-white space-y-6">
        <div
          class="
            md:inline-flex
            space-y-4
            md:space-y-0
            w-full
            p-4
            text-gray-500
            items-center
          "
        >
          <h2 class="md:w-1/3 max-w-sm mx-auto">Account</h2>
          <div class="md:w-2/3 max-w-sm mx-auto">
            <label class="text-sm text-gray-400">Email</label>
            <div class="w-full inline-flex border">
              <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                <img
                  class="w-4 ml-2 mt-1"
                  src="https://cdn-icons-png.flaticon.com/512/546/546394.png"
                  alt="logo"
                />
              </div>
              <input
                type=""
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                disabled
                v-model="user.userInfo.email"
              />
            </div>
          </div>
        </div>
        <div
          class="
            md:inline-flex
            space-y-4
            md:space-y-0
            w-full
            p-4
            text-gray-500
            items-center
          "
        >
          <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
            <label class="text-sm text-gray-400">Vehicle Identification</label>
            <div class="w-full inline-flex border">
              <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                <img
                  class="w-4 ml-2 mt-1"
                  src="https://cdn-icons-png.flaticon.com/512/546/546394.png"
                  alt="logo"
                />
              </div>
              <input
                v-model="user.userInfo.vehicleID"
                type=""
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              />
            </div>
          </div>

          <div class="md:w-2/3 mx-auto max-w-sm space-y-5"></div>
        </div>

        <div
          class="
            md:inline-flex
            space-y-4
            md:space-y-0
            w-full
            p-4
            text-gray-500
            items-center
          "
        >
          <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
            <label class="text-sm text-gray-400">Establishment Purok</label>
            <div class="w-full inline-flex border">
              <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                <img
                  class="w-4 ml-2 mt-1"
                  src="https://cdn-icons-png.flaticon.com/512/927/927667.png"
                  alt="logo"
                />
              </div>
              <input
                v-model="user.userInfo.purok"
                type=""
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              />
            </div>
          </div>

          <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
            <label class="text-sm text-gray-400">Establishment baranggay</label>
            <div class="w-full inline-flex border">
              <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                <img
                  class="w-4 ml-2 mt-1"
                  src="https://cdn-icons-png.flaticon.com/512/927/927667.png"
                  alt="logo"
                />
              </div>
              <input
                v-model="user.userInfo.baranggay"
                type=""
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              />
            </div>
          </div>
        </div>

        <div
          class="
            md:inline-flex
            space-y-4
            md:space-y-0
            w-full
            p-4
            text-gray-500
            items-center
          "
        >
          <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
            <label class="text-sm text-gray-400">Municipality</label>
            <div class="w-full inline-flex border">
              <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                <img
                  class="w-4 ml-2 mt-1"
                  src="https://cdn-icons-png.flaticon.com/512/927/927667.png"
                  alt="logo"
                />
              </div>
              <input
                v-model="user.userInfo.municipality"
                type=""
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              />
            </div>
          </div>

          <div class="md:w-2/3 mx-auto max-w-sm space-y-5"></div>
        </div>

        <div class="md:w-3/12 text-center md:pl-6">
          <button
            class="
              text-white
              w-full
              mx-auto
              max-w-sm
              rounded-md
              text-center
              bg-indigo-400
              py-2
              px-4
              inline-flex
              items-center
              focus:outline-none
              md:float-right
            "
            @click="updateProfile"
          >
            <svg
              fill="none"
              class="w-4 text-white mr-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Update
          </button>
        </div>

        <hr />
        <div
          class="
            md:inline-flex
            w-full
            space-y-4
            md:space-y-0
            p-8
            text-gray-500
            items-center
          "
        >
          <h2 class="md:w-4/12 max-w-sm mx-auto">Change password</h2>

          <div
            class="
              md:w-5/12
              w-full
              md:pl-9
              max-w-sm
              mx-auto
              space-y-5
              md:inline-flex
              pl-2
            "
          >
            <div class="w-full inline-flex border-b">
              <div class="w-1/12 pt-2">
                <svg
                  fill="none"
                  class="w-6 text-gray-400 mx-auto"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <input
              v-model="newPassword"
                type="password"
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                placeholder="New"
              />
            </div>
          </div>

          <div class="md:w-3/12 text-center md:pl-6">
            <button
              class="
                text-white
                w-full
                mx-auto
                max-w-sm
                rounded-md
                text-center
                bg-indigo-400
                py-2
                px-4
                inline-flex
                items-center
                focus:outline-none
                md:float-right
              "
              @click="updatePassword"
            >
              <svg
                fill="none"
                class="w-4 text-white mr-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Update
            </button>
          </div>
        </div>
      </div>
        <hr />
        <div class="w-full p-4 text-right text-gray-500">
          <button
            class="inline-flex items-center focus:outline-none mr-4"
            @click="back"
          >
            Save and Back
          </button>
        </div>
    </div>
  </div>
</template>

<script>
import app from "../../../firebase/auth-individual/firebase";
import {getAuth, updatePassword} from 'firebase/auth'
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
      estabId: "",
      userRefer: "",
      newPassword: '',
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
          loginToken: '',
        },
      },
    };
  },
  methods: {
    async getUser() {
      const db = getFirestore(app);
      const userRef = collection(db, "user");

      let usersRef = doc(userRef, this.$data.estabId);
      this.$data.userRefer = usersRef;

      let user = await getDoc(this.$data.userRefer);
      let userData = user.data();

      

      if(userData.userInfo.loginToken == "Yes"){
        this.$data.user.userInfo.email = userData.userInfo.email;
      this.$data.user.userInfo.vehicleID =
        userData.userInfo.vehicleID;
      this.$data.user.userInfo.purok = userData.userInfo.purok;
      this.$data.user.userInfo.baranggay = userData.userInfo.baranggay;
      this.$data.user.userInfo.municipality = userData.userInfo.municipality;
      this.$data.user.userInfo.owner = userData.userInfo.owner;
      this.$data.user.userInfo.phoneNumber = userData.userInfo.phoneNumber;
      this.$data.user.userInfo.loginToken = userData.userInfo.loginToken;
      }
      else if(userData.userInfo.loginToken == "No"){
        this.$router.push("/estab-login")
      }
      else{console.log()}
    },

    async updateProfile() {
      await setDoc(this.$data.userRefer, this.$data.user);
      this.$router.push(`/estab-home/${this.$data.estabId}`);
    },

    async updatePassword(){
       const auth = getAuth(app);

      const user = auth.currentUser;
      const password = this.$data.newPassword;

       updatePassword(user, password)
        .then(() => {
          // Update successful.
          alert("password updated");
        })
        .catch((error) => {
          // An error ocurred
          alert(error);
          // ...
        });
    },

    back(){
      this.$router.push(`/estab-home/${this.$data.estabId}`)
    }
  },

  created() {
    let id = this.$route.params.estabId;
    this.$data.estabId = id;
    this.getUser();
  },
};
</script>