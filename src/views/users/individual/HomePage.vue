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
        src="https://cdn-icons-png.flaticon.com/512/1946/1946436.png"
        style="height: 25px"
        alt=""
        class="mr-2"
        loading="lazy"
      />
      Home
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

  <div class="flex flex-wrap items-center justify-center mt-5">
    <div class="w-full md:w-3/5 bg-white p-6 mt-8">
      <div
        class="flex flex-wrap items-center justify-center -mt-5"
        v-if="showQr"
      >
        <qrcode-vue :value="value" :size="size" level="H" />
        <!-- <VueQRCodeComponent text=""/> -->
      </div>
      <div class="flex items-center border-b py-2"></div>
      <div class="mt-2 text-2xl">
        <p class="text-center">
          <span class="font-bold">{{ user.name }}</span>
        </p>
      </div>
      <div class="flex items-center justify-center">
        <header class="flex font-light text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 rotate-90 -ml-2"
            viewBox="0 0 24 24"
            stroke="#b91c1c"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
          <p>Individual</p>
        </header>
      </div>
      <div class="flex pb-4 mt-4 items-center border-b flex">
        <button
          class="py-2 rounded flex-1 bg-green-500 text-white"
          @click="toGenerator"
          v-if="showHide"
        >
          <i class="fas fa-plus-circle"></i> QR Application
        </button>

        <button
          class="py-2 rounded flex-1 bg-red-500 text-white"
          @click="reportProblem"
          v-if="showQr"
        >
          <i class="fas fa-plus-circle"></i> Report
        </button>
        <button
          class="ml-1 py-2 rounded flex-1 bg-gray-400 text-white"
          @click="editProfile"
        >
          <i class="fas fa-plus-circle"></i> Edit Profile
        </button>
        <button
          class="bg-gray-200 py-2 px-4 rounded ml-2"
          @click="logoutProfile"
        >
          <img
            class="w-5"
            src="https://cdn-icons-png.flaticon.com/512/159/159707.png"
            alt="logo"
          />
        </button>
      </div>

      <div class="flex mt-2 items-center">
        <div class="text-gray-400">
          <img
            class="w-5"
            src="https://cdn-icons-png.flaticon.com/512/684/684809.png"
            alt="logo"
          />
          <i class="fas fa-home"></i>
        </div>
        <div class="text-lg ml-3">
          <p>
            Lives in <span class="font-bold">{{ user.address }}</span>
          </p>
        </div>
      </div>

      <div class="flex mt-2 items-center">
        <div class="text-gray-400">
          <img
            class="w-4"
            src="https://cdn-icons-png.flaticon.com/512/159/159832.png"
            alt="logo"
          />
        </div>

        <div class="text-lg ml-3">
          <p>{{ user.phoneNumber }}</p>
        </div>
      </div>

      <div class="flex mt-2 items-center">
        <div class="text-gray-400">
          <img
            class="w-4"
            src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
            alt="logo"
          />
        </div>

        <div class="text-lg ml-3">
          <p>{{ user.gender }}</p>
        </div>
      </div>

      <div class="flex mt-2 items-center">
        <div class="text-gray-400">
          <img
            class="w-4"
            src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
            alt="logo"
          />
        </div>

        <div class="text-lg ml-3">
          <p>{{ user.age }}</p>
        </div>
      </div>

      <div class="flex mt-2 items-center">
        <div class="text-gray-400">
          <img
            class="w-4"
            src="https://cdn-icons-png.flaticon.com/512/3126/3126571.png"
            alt="logo"
          />
        </div>

        <div class="text-lg ml-3">
          <p>
            <span class="text-green-700 text-sm">{{ user.qrStatus }}</span>
          </p>
        </div>
      </div>

      <div class="flex mt-2 items-center">
        <div class="text-gray-400">
          <img
            class="w-4"
            src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
            alt="logo"
          />
        </div>

        <div class="text-lg ml-3">
          <button @click="toggleEntryRecordBtn">
            <span class="text-blue-600 underline underline-offset-4">
              Entry Record</span
            >
          </button>
        </div>
      </div>
    </div>
  </div>
  <section v-show="toggleEntryRecord" class="py-1 bg-blueGray-50">
    <div class="xl:w-8/12 xl:mb-0 px-4 mx-auto">
      <div
        class="
          relative
          flex flex-col
          min-w-0
          break-words
          bg-white
          w-full
          mb-6
          shadow-lg
          rounded
        "
      >
        <div class="rounded-t mb-0 px-4 py-3 border-0">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 class="font-semibold text-base text-blueGray-700">
                Establishment Visited
              </h3>
            </div>
            <div
              class="
                relative
                w-full
                px-4
                max-w-full
                flex-grow flex-1
                text-right
              "
            >
              <button
                class="
                  bg-indigo-500
                  text-white
                  active:bg-indigo-600
                  text-xs
                  font-bold
                  uppercase
                  px-3
                  py-1
                  rounded
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-1
                  ease-linear
                  transition-all
                  duration-150
                "
                type="button"
                @click="hide"
              >
                See all
              </button>
            </div>
          </div>
        </div>

        <div class="block w-full overflow-x-auto">
          <table class="items-center bg-transparent w-full border-collapse">
            <thead>
              <tr>
                <th
                  class="
                    px-6
                    bg-gray-50
                    text-blueGray-500
                    align-middle
                    border border-solid border-blueGray-100
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                  "
                >
                  Establishment name
                </th>
                <th
                  class="
                    px-6
                    bg-gray-50
                    text-blueGray-500
                    align-middle
                    border border-solid border-blueGray-100
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                  "
                >
                  Date
                </th>
                <th
                  class="
                    px-6
                    bg-gray-50
                    text-blueGray-500
                    align-middle
                    border border-solid border-blueGray-100
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                  "
                >
                  Time
                </th>
                <th
                  class="
                    px-6
                    bg-gray-50
                    text-blueGray-500
                    align-middle
                    border border-solid border-blueGray-100
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                  "
                >
                  Temperature
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="entry in myEntry" :key="entry.id">
                <th
                  class="
                    border-t-0
                    px-6
                    align-middle
                    border-l-0 border-r-0
                    text-xs
                    whitespace-nowrap
                    p-4
                    text-left text-blueGray-700
                  "
                >
                  {{ entry.visitedEstab }}
                </th>
                <td
                  class="
                    border-t-0
                    px-6
                    align-middle
                    border-l-0 border-r-0
                    text-xs
                    whitespace-nowrap
                    p-4
                  "
                >
                  {{ entry.month + " " + entry.day + ", " + entry.year }}
                </td>
                <td
                  class="
                    border-t-0
                    px-6
                    align-center
                    border-l-0 border-r-0
                    text-xs
                    whitespace-nowrap
                    p-4
                  "
                >
                  {{ entry.time }}
                </td>
                <td
                  class="
                    border-t-0
                    px-6
                    align-middle
                    border-l-0 border-r-0
                    text-xs
                    whitespace-nowrap
                    p-4
                  "
                >
                  <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  {{ entry.temperature }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <div
    v-if="reportModal"
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
    <div class="bg-white rounded-2xl border shadow-x1 p-4 max-w-lg">
      <div class="flex flex-col items-center space-y-1">
        <h1 class="font-bold text-2xl text-gray-700 w-4/6 text-center">
          Report Problem
        </h1>
        <p class="text-sm text-gray-500 text-center w-5/6">
           Please fill out the form below completely and truthfully to prevent
            unnecessary panic.
        </p>
         <form class="w-full">
            <div class="">
              <div class="">
                <label for="names" class="text-md text-gray-600"
                  >Date tested positive</label
                >
                <div class="flex">
                <select
                class="
                  border-2 rounded-lg w-full h-12 px-4
                "
                v-model="report.reportInfo.monthTested"
              >
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>

                  <select
                class="
                  border-2 rounded-lg w-full h-12 px-4
                "
                v-model="report.reportInfo.dayTested"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>

               <select
                class="
                  border-2 rounded-lg w-full h-12 px-4
                "
                v-model="report.reportInfo.yearTested"
              >
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
              </select>
              </div>
              </div>
                <div class="">
                  <label for="names" class="text-md text-gray-600"
                  >Classification</label
                >
                 <select
                class="
                  border-2 rounded-lg w-full h-12 px-4
                "
                v-model="report.reportInfo.classification"
              >
                <option>Symptomatic</option>
                <option>Pre-symptomatic</option>
                <option>Asymptomatic</option>
              </select>
              </div>

              <div class="mt-4">
                  <label for="names" class="text-md text-gray-600"
                  >RtPCR Test</label
                >
                  <div>
              <label
                class="
                  block
                  text-sm
                  font-medium
                  text-gray-900
                  dark:text-gray-300
                "
                for="vaccination_cards"
                >Upload Image</label
              >
              <input
                class="
                  block
                  w-full
                  text-sm text-gray-900
                  bg-gray-50
                  rounded-lg
                  border border-gray-300
                  cursor-pointer
                  dark:text-gray-400
                  focus:outline-none focus:border-transparent
                  dark:bg-gray-700
                  dark:border-gray-600
                  dark:placeholder-gray-400
                "
                aria-describedby="vaccination_card"
                id="vaccination_cards"
                type="file"
                accept="image/*"
                @change="previewRtPCR"
              />
              <div
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="vaccination_card"
              >
                RtPCR Test Captured in Landscape
              </div>
            </div>
              </div>

              <div class="mt-4">
                  <label for="names" class="text-md text-gray-600"
                  >Other Details</label
                >
                <textarea
                  class="border-2 rounded-lg w-full h-24 px-4"
                  placeholder="details"
                  v-model="report.reportInfo.message"
                ></textarea>
              </div>
            </div>
          </form>
          <div class="">
           <div class="flex justify-end pt-2 space-x-4">
          <button
            class="
              px-4
              bg-gray-200
              p-3
              rounded
              text-black
              hover:bg-gray-300
              font-semibold
            "
            @click="closeModal"
          >
            Cancel
          </button>
          <button
            class="
              px-4
              bg-green-500
              p-3
              ml-3
              rounded-lg
              text-white
              hover:bg-green-600
            "
            @click="submit"
          >
            Submit
          </button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import QrcodeVue from "qrcode.vue";
// import VueQRCodeComponent from 'vue-qrcode-component'

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase/auth-individual/firebase";
import { getAuth, signOut } from "firebase/auth";

export default defineComponent({
  components: {
    QrcodeVue,
    // VueQRCodeComponent,
  },
  data() {
    return {
      rtpcrData: '',
      rtpcrImage: '',
      reportModal: false,
      month: "",
      myEntry: [],
      toggleEntryRecord: false,
      value: "",
      size: 200,
      selectedUser: {},
      userID: "",
      phone: "",
      userRefer: null,
      user: {
        name: null,
        address: null,
        gender: null,
        age: null,
        phoneNumber: null,
        qrStatus: "No Value",
        qrData: null,
      },
      report:{
        reportInfo:{
          name: '',
          phoneNumber: '',
          address: '',
          gender: '',
          age: '',
          dayTested: '',
          monthTested: '',
          yearTested: '',
          rtpcrImageLink: '',
          message: '',
          classification: '',
          status: "Pending",
          id: '',
        }
      }
    };
  },

  methods: {
    async getUser() {
      console.log(this.userID);
      const db = getFirestore(app);
      const userRef = collection(db, "user");
      console.log(userRef);

      let usersRef = doc(userRef, this.userID);
      this.$data.userRefer = usersRef;

      console.log(this.$data.userRefer);

      let user = await getDoc(this.$data.userRefer);
      console.log(user);

      let userData = user.data();

      console.log(userData);

      this.$data.user.name =
        userData.userInfo.firstName + " " + userData.userInfo.lastName;
      this.$data.user.phoneNumber = "+63" + userData.userInfo.phoneNumber;
      this.$data.user.address =
        userData.userInfo.purok +
        ", " +
        userData.userInfo.baranggay +
        ", " +
        userData.userInfo.municipality;
      this.$data.user.age = userData.userInfo.age + " years old";
      this.$data.user.gender = userData.userInfo.gender;
      this.$data.phone = userData.userInfo.phoneNumber;
      this.$data.user.qrData = userData.userInfo.qrData;
      this.$data.user.qrStatus = userData.userInfo.qrStatus;
      this.$data.value = userData.userInfo.qrData;

      this.$data.report.reportInfo.name = userData.userInfo.firstName + " " + userData.userInfo.lastName;
      this.$data.report.reportInfo.phoneNumber = "+63" + userData.userInfo.phoneNumber;
      this.$data.report.reportInfo.address =  userData.userInfo.purok +
        ", " +
        userData.userInfo.baranggay +
        ", " +
        userData.userInfo.municipality;
      this.$data.report.reportInfo.gender = userData.userInfo.gender;
      this.$data.report.reportInfo.age = userData.userInfo.age;

      //list all entry record
      const entryRef = collection(db, "entry-record");
      let entrySnap = await getDocs(entryRef);
      this.getMonth();

      const current = new Date();
      let myEntries = [];
      entrySnap.forEach((entry) => {
        let entryData = entry.data();
        entryData.id = entry.id;
        if (entryData.name == this.$data.user.name) {
          if (
            (entryData.month == this.$data.month) &
            (entryData.day == `${current.getDate()}`) &
            (entryData.year == `${current.getFullYear()}`)
          ) {
            myEntries.push(entryData);
          } else {
            console.log("no data");
          }
        } else {
          console.log();
        }
      });
      this.$data.myEntry = myEntries;
      console.log(myEntries);
      const add = "Madasigon, TInago, Ozamiz City";
      if(add == myEntries){
        console.log(myEntries);
      }
      else{
        console.log("error")
      }
      
    },

    toGenerator() {
      const id = this.$data.userID;
      if (this.$data.user.qrStatus == "Pending Application") {
        alert("Already have an application");
      } else if (this.$data.user.qrStatus == "No Application") {
        this.$router.push(`/individual-generate-qr/${id}`);
      } else if (this.$data.user.qrStatus == "Declined") {
        this.$router.push(`/individual-generate-qr/${id}`);
      } else {
        alert("Already have a QR Code");
      }
    },

    getMonth() {
      const current = new Date();
      const monthData = `${current.getMonth() + 1}`;
      if (monthData == "1") {
        const month = "January";
        this.$data.month = month;
      } else if (monthData == "2") {
        const month = "February";
        this.$data.month = month;
      } else if (monthData == "3") {
        const month = "March";
        this.$data.month = month;
      } else if (monthData == "4") {
        const month = "April";
        this.$data.month = month;
      } else if (monthData == "5") {
        const month = "May";
        this.$data.month = month;
      } else if (monthData == "6") {
        const month = "June";
        this.$data.month = month;
      } else if (monthData == "7") {
        const month = "July";
        this.$data.month = month;
      } else if (monthData == "8") {
        const month = "August";
        this.$data.month = month;
      } else if (monthData == "9") {
        const month = "September";
        this.$data.month = month;
      } else if (monthData == "10") {
        const month = "Ocotber";
        this.$data.month = month;
      } else if (monthData == "11") {
        const month = "November";
        this.$data.month = month;
      } else if (monthData == "12") {
        const month = "December";
        this.$data.month = month;
      }
    },

    editProfile() {
      const id = this.$data.userID;
      this.$router.push(`/individual-settings/${id}`);
    },
    logoutProfile() {
      console.log("logged out");
      const auth = getAuth(app);
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$router.push("/individual-login");
          console.log(auth.currentUser);
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },

    toggleEntryRecordBtn() {
      this.toggleEntryRecord = !this.toggleEntryRecord;
    },
    hide() {
      this.toggleEntryRecord = !this.toggleEntryRecord;
    },

    reportProblem() {
      this.$data.reportModal = true;
    },
    closeModal() {
      this.$data.reportModal = false;
    },

    previewRtPCR(event){
      var input = event.target;

      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = () => {
          this.$data.rtpcrData =  event.target.files[0];
          this.uploadRtPCR();
        };

        reader.readAsDataURL(input.files[0]);
      }
    },

    uploadRtPCR(){
      const storage = getStorage(app);

       // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: "image/jpeg",
      };
      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(
        storage,
        "proofs/" + `${this.$data.user.phoneNumber}/` + "rtpcr/" + this.rtpcrData.name
      );
      const uploadTask = uploadBytesResumable(
        storageRef,
        this.rtpcrData,
        metadata
      );

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            this.rtpcrImage = downloadURL;
            this.$data.report.reportInfo.rtpcrImageLink = downloadURL;
            console.log("Link:" + this.$data.report.reportInfo.rtpcrImageLink);
          });
        }
      );
    },
    submit(){
      var randomstring = require("randomstring");
      let id = randomstring.generate({
        length: 20,
        charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      });

      this.$data.report.reportInfo.id = id;

       const db = getFirestore(app);
       const addDocs = setDoc(doc(db, "reports", id), this.$data.report);
       console.log(addDocs);
       alert("submitted")
    }
  },

  computed: {
    showQr() {
      if ((this.$data.user.qrData == "") | (this.$data.user.qrData == null)) {
        return false;
      } else {
        return true;
      }
    },

    showHide() {
      if ((this.$data.user.qrData == "") | (this.$data.user.qrData == null)) {
        return true;
      } else {
        return false;
      }
    },
  },

  created() {
    const str = this.$route.params.phoneId;
    this.$data.userID = str;

    this.getUser();
  },
});
</script>