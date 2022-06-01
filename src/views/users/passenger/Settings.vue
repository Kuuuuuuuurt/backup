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

  <div class="bg-gray-100 bg-opacity-50 mt-16">
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
        <div class="max-w-sm mx-auto md:w-full md:mx-0">
          <div class="inline-flex items-center space-x-4">
            <qrcode-vue :value="value" :size="size" level="H" v-if="showQr" />

            <h1 class="text-gray-600">
              {{ user.userInfo.lastName + ", " + user.userInfo.firstName }}
            </h1>
          </div>
        </div>
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
            <label class="text-sm text-gray-400">Phone Number</label>
            <div class="w-full inline-flex border">
              <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                <img
                  class="w-4 ml-2 mt-1"
                  src="https://cdn-icons-png.flaticon.com/512/159/159832.png"
                  alt="logo"
                />
              </div>
              <input
                type=""
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                disabled
                v-model="user.userInfo.phoneNumber"
              />
            </div>
          </div>
        </div>

        <hr />
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
            <label class="text-sm text-gray-400">First Name</label>
            <div class="w-full inline-flex border">
              <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                <img
                  class="w-4 ml-2 mt-1"
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                  alt="logo"
                />
              </div>
              <input
                type=""
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
                v-model="user.userInfo.firstName"
              />
            </div>
          </div>

          <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
            <label class="text-sm text-gray-400">Last Name</label>
            <div class="w-full inline-flex border">
              <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                <img
                  class="w-4 ml-2 mt-1"
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                  alt="logo"
                />
              </div>
              <input
                v-model="user.userInfo.lastName"
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
            <label class="text-sm text-gray-400">Gender</label>
            <div class="w-full inline-flex border">
              <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                <img
                  class="w-4 ml-2 mt-1"
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                  alt="logo"
                />
              </div>
              <input
                v-model="user.userInfo.gender"
                type=""
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2"
              />
            </div>
          </div>

          <div class="md:w-2/3 mx-auto max-w-sm space-y-5">
            <label class="text-sm text-gray-400">Age</label>
            <div class="w-full inline-flex border">
              <div class="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                <img
                  class="w-4 ml-2 mt-1"
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                  alt="logo"
                />
              </div>
              <input
                v-model="user.userInfo.age"
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
            @click="saveModal=true"
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
                type="password"
                class="w-11/12 focus:outline-none focus:text-gray-600 p-2 ml-4"
                placeholder="New"
                v-model="newPassword"
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
  </div>

   <div
   v-if="saveModal"
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
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal" @click="saveModal=false">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
            <div class="p-6 text-center">
                <svg class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to save changes?</h3>
                <button data-modal-toggle="popup-modal" type="button" class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" @click="updateProfile">
                    Yes, I'm sure
                </button>
                <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="saveModal=false">No, cancel</button>
            </div>
             </div>
        </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import app from "../../../firebase/db/firebase";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import QrcodeVue from "qrcode.vue";
import { getAuth, updatePassword } from "firebase/auth";

export default defineComponent({
  components: {
    QrcodeVue,
  },

  data() {
    return {
      saveModal: false,
      userID: null,
      userRefer: null,
      value: "",
      size: 50,
      newPassword: "",
      user: {
        userInfo: {
          phoneNumber: "",
          firstName: "",
          lastName: "",
          gender: "",
          age: "",
          municipality: "",
          baranggay: "",
          purok: "",
          qrData: null,
          qrStatus: null,
          type: "passenger",
          password: "",
          vaccinationLink: null,
          validIdLink: null,
          loginToken: "",
        },
      },
    };
  },
  methods: {
    async getUser() {
      const db = getFirestore(app);
      const userRef = collection(db, "user");

      let usersRef = doc(userRef, this.$data.userID);
      this.$data.userRefer = usersRef;

      let user = await getDoc(this.$data.userRefer);

      let userData = user.data();

      if(userData.userInfo.loginToken == "Yes"){
        this.$data.user.userInfo.phoneNumber = userData.userInfo.phoneNumber;
      this.$data.user.userInfo.municipality = userData.userInfo.municipality;
      this.$data.user.userInfo.gender = userData.userInfo.gender;
      this.$data.user.userInfo.age = userData.userInfo.age;
      this.$data.user.userInfo.baranggay = userData.userInfo.baranggay;
      this.$data.user.userInfo.purok = userData.userInfo.purok;
      this.$data.user.userInfo.firstName = userData.userInfo.firstName;
      this.$data.user.userInfo.lastName = userData.userInfo.lastName;
      this.$data.user.userInfo.qrData = userData.userInfo.qrData;
      this.$data.user.userInfo.qrStatus = userData.userInfo.qrStatus;

      this.$data.value = userData.userInfo.qrData;
      this.$data.user.userInfo.password = userData.userInfo.password;
      this.$data.user.userInfo.vaccinationLink =
        userData.userInfo.vaccinationLink;
      this.$data.user.userInfo.validIdLink = userData.userInfo.validIdLink;
      this.$data.user.userInfo.loginToken = userData.userInfo.loginToken;
      }
      else if(userData.userInfo.loginToken == "No"){
        this.$router.push(`/passenger/login`)
      }
      else{
        this.$router.push(`/passenger/login`)
      }
    },

    async updateProfile() {
      await setDoc(this.$data.userRefer, this.$data.user);
      this.$router.push(`/passenger/home/${this.$data.userID}`);
    },

    back() {
      this.$router.push(`/passenger/home/${this.$data.userID}`);
    },

    async updatePassword() {
      const auth = getAuth(app);

      const user = auth.currentUser;
      const password = this.$data.newPassword;
      this.$data.user.userInfo.password = password;

      updatePassword(user, password)
        .then(() => {
          // Update successful.
          setDoc(this.$data.userRefer, this.$data.user);
          alert("password updated");
        })
        .catch((error) => {
          // An error ocurred
          alert(error);
          // ...
        });
    },
  },

  created() {
    let id = this.$route.params.phoneId;
    this.$data.userID = id;
    this.getUser();
  },

  computed: {
    showQr() {
      if ((this.$data.value == "") | (this.$data.value == null)) {
        return false;
      } else {
        return true;
      }
    },
  },
});
</script>