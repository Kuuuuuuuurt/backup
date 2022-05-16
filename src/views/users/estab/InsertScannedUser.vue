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
    <button
      class="
        font-bold
        m-3
        inline-flex
        hover:text-pink-700
        transition-all
        duration-500
      "
      @click="back"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
        style="height: 25px"
        alt=""
        class="mr-2"
        loading="lazy"
      />
      Back
    </button>

    <!-- List of nav item -->
    <button
      class="
        font-bold
        m-3
        inline-flex
        hover:text-pink-700
        transition-all
        duration-500
      "
      @click="home"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/1008/1008001.png"
        style="height: 25px"
        alt=""
        class="mr-2"
        loading="lazy"
      />
      TRAFEX
    </button>
  </nav>

  <div class="flex mt-12">
    <div class="m-auto">
      <div>
        <div class="mt-5 bg-white rounded-lg shadow">
          <div class="flex">
            <div class="flex-1 py-5 pl-5 overflow-hidden">
              <h1 class="inline text-2xl font-semibold leading-none">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2681/2681062.png"
                  style="height: 25px"
                  alt=""
                  class="mr-2"
                  loading="lazy"
                />
                User Information
              </h1>
            </div>
          </div>
          <div class="px-5 pb-5">
            <input
              placeholder="Name"
              class="
                text-black
                placeholder-gray-600
                w-full
                px-4
                py-2.5
                mt-2
                text-base
                transition
                duration-500
                ease-in-out
                transform
                border-transparent
                rounded-lg
                bg-gray-200
                focus:border-blueGray-500 focus:bg-white
                dark:focus:bg-gray-800
                focus:outline-none focus:shadow-outline focus:ring-2
                ring-offset-current ring-offset-2 ring-gray-400
              "
              disabled
              v-model="customerData.name"
            /><input
              placeholder="Address"
              class="
                text-black
                placeholder-gray-600
                w-full
                px-4
                py-2.5
                mt-2
                text-base
                transition
                duration-500
                ease-in-out
                transform
                border-transparent
                rounded-lg
                bg-gray-200
                focus:border-blueGray-500 focus:bg-white
                dark:focus:bg-gray-800
                focus:outline-none focus:shadow-outline focus:ring-2
                ring-offset-current ring-offset-2 ring-gray-400
              "
              disabled
              v-model="customerData.address"
            />

            <input
              placeholder="Address"
              class="
                text-black
                placeholder-gray-600
                w-full
                px-4
                py-2.5
                mt-2
                text-base
                transition
                duration-500
                ease-in-out
                transform
                border-transparent
                rounded-lg
                bg-gray-200
                focus:border-blueGray-500 focus:bg-white
                dark:focus:bg-gray-800
                focus:outline-none focus:shadow-outline focus:ring-2
                ring-offset-current ring-offset-2 ring-gray-400
              "
              disabled
              v-model="customerData.phoneNumber"
            />
            <div class="flex">
              <div class="flex-grow w-1/4 pr-2">
                <input
                  placeholder="Age"
                  class="
                    text-black
                    placeholder-gray-600
                    w-full
                    px-4
                    py-2.5
                    mt-2
                    text-base
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-transparent
                    rounded-lg
                    bg-gray-200
                    focus:border-blueGray-500 focus:bg-white
                    dark:focus:bg-gray-800
                    focus:outline-none focus:shadow-outline focus:ring-2
                    ring-offset-current ring-offset-2 ring-gray-400
                  "
                  disabled
                  v-model="customerData.age"
                />
              </div>
              <div class="flex-grow">
                <input
                  placeholder="City"
                  class="
                    text-black
                    placeholder-gray-600
                    w-full
                    px-4
                    py-2.5
                    mt-2
                    text-base
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-transparent
                    rounded-lg
                    bg-gray-200
                    focus:border-blueGray-500 focus:bg-white
                    dark:focus:bg-gray-800
                    focus:outline-none focus:shadow-outline focus:ring-2
                    ring-offset-current ring-offset-2 ring-gray-400
                  "
                  disabled
                  v-model="customerData.gender"
                />
              </div>
            </div>

            <div class="flex">
              <div class="flex-grow w-1/4 pr-2">
                <input
                  placeholder="Temperature"
                  class="
                    text-black
                    placeholder-gray-600
                    w-full
                    px-4
                    py-2.5
                    mt-2
                    text-base
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-transparent
                    rounded-lg
                    bg-gray-200
                    focus:border-blueGray-500 focus:bg-white
                    dark:focus:bg-gray-800
                    focus:outline-none focus:shadow-outline focus:ring-2
                    ring-offset-current ring-offset-2 ring-gray-400
                  "
                  v-model="customerData.temperature"
                  required
                />
                <p class="text-red-600">{{ tempError }}</p>
              </div>
            </div>

            <div class="mt-2">
              <label class="block text-left" style="max-width: 300px">
                <span class="text-gray-700">Health Declaration</span>
                <select
                  v-model="customerData.symptomsFelt.symptoms"
                  class="form-multiselect block w-full mt-1"
                  multiple
                >
                  <option>Fever</option>
                  <option>Cough</option>
                  <option>Cold</option>
                  <option>Chills</option>
                </select>
              </label>
              {{ customerData.symptomsFelt.symptoms }}
            </div>
          </div>

          <div class="px-5"></div>
          <hr class="mt-4" />
          <div class="flex flex-row-reverse p-3">
            <div class="flex-initial pl-3">
              <button
                type="button"
                class="
                  flex
                  items-center
                  px-5
                  py-2.5
                  font-medium
                  tracking-wide
                  text-white
                  capitalize
                  bg-black
                  rounded-md
                  hover:bg-gray-800
                  focus:outline-none focus:bg-gray-900
                  transition
                  duration-300
                  transform
                  active:scale-95
                  ease-in-out
                "
                @click="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M0 0h24v24H0V0z" fill="none"></path>
                  <path
                    d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                    opacity=".3"
                  ></path>
                  <path
                    d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"
                  ></path>
                </svg>
                <span class="pl-2 mx-1">Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import app from "../../../firebase/auth-individual/firebase";
export default {
  data() {
    return {
      tempError: "",
      estabID: "",
      customerID: "",
      customerData: {
        name: "",
        address: "",
        age: "",
        gender: "",
        temperature: "",
        phoneNumber: "",
        visitedEstab: "",
        time: "",
        day: "",
        month: "",
        year: "",
        symptomsFelt:{
          symptoms: [],
        }
      },
    };
  },

  methods: {
    async getCustomer() {
      const db = getFirestore(app);

      const docRef = doc(db, "data-record", this.$data.customerID);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let customerData = docSnap.data();
        this.$data.customerData.name = customerData.info.name;
        this.$data.customerData.address = customerData.info.address;
        this.$data.customerData.age = customerData.info.age;
        this.$data.customerData.gender = customerData.info.gender;
        this.$data.customerData.phoneNumber =
          "+63" + customerData.info.phoneNumber;

        const estabRef = doc(db, "user", this.$data.estabID);
        const estabSnap = await getDoc(estabRef);
        let estabData = estabSnap.data();
        this.$data.customerData.visitedEstab = estabData.userInfo.vehicleID;
      } else {
        alert("No such document!");
        this.$router.push(`/estab-scanner/${this.$data.estabID}`);
      }
    },

    async submit() {
      const current = new Date();
      const monthData = `${current.getMonth() + 1}`;
      if (monthData == "1") {
        const month = "January";
        const day = `${current.getDate()}`;
        this.$data.customerData.day = day;
        this.$data.customerData.month = month;
        this.$data.customerData.year = `${current.getFullYear()}`;
      } else if (monthData == "2") {
        const month = "February";
        const day = `${current.getDate()}`;
        this.$data.customerData.day = day;
        this.$data.customerData.month = month;
        this.$data.customerData.year = `${current.getFullYear()}`;
      } else if (monthData == "3") {
        const month = "March";
        const day = `${current.getDate()}`;
        this.$data.customerData.day = day;
        this.$data.customerData.month = month;
        this.$data.customerData.year = `${current.getFullYear()}`;
      } else if (monthData == "4") {
        const month = "April";
        const day = `${current.getDate()}`;
        this.$data.customerData.day = day;
        this.$data.customerData.month = month;
        this.$data.customerData.year = `${current.getFullYear()}`;
      } else if (monthData == "5") {
        const month = "May";
        const day = `${current.getDate()}`;
        this.$data.customerData.day = day;
        this.$data.customerData.month = month;
        this.$data.customerData.year = `${current.getFullYear()}`;
      } else if (monthData == "6") {
        const month = "June";
        const day = `${current.getDate()}`;
        this.$data.customerData.day = day;
        this.$data.customerData.month = month;
        this.$data.customerData.year = `${current.getFullYear()}`;
      } else if (monthData == "7") {
        const month = "July";
        const date =
          month + ", " + `${current.getDate()}, ${current.getFullYear()}`;
        this.$data.customerData.date = date;
      } else if (monthData == "8") {
        const month = "August";
        const date =
          month + ", " + `${current.getDate()}, ${current.getFullYear()}`;
        this.$data.customerData.date = date;
      } else if (monthData == "9") {
        const month = "September";
        const date =
          month + ", " + `${current.getDate()}, ${current.getFullYear()}`;
        this.$data.customerData.date = date;
      } else if (monthData == "10") {
        const month = "Ocotber";
        const date =
          month + ", " + `${current.getDate()}, ${current.getFullYear()}`;
        this.$data.customerData.date = date;
      } else if (monthData == "11") {
        const month = "November";
        const date =
          month + ", " + `${current.getDate()}, ${current.getFullYear()}`;
        this.$data.customerData.date = date;
      } else if (monthData == "12") {
        const month = "December";
        const date =
          month + ", " + `${current.getDate()}, ${current.getFullYear()}`;
        this.$data.customerData.date = date;
      }

      const time = `${current.getHours()}:${current.getMinutes()}`.toString();
      this.$data.customerData.time = time;

      var randomstring = require("randomstring");

      const id = randomstring.generate({
        length: 30,
        charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      });
      const db = getFirestore(app);

      if (
        (this.$data.customerData.temperature == "") |
        (this.$data.customerData.temperature == null)
      ) {
        this.$data.tempError = "Temperature Required!";
      } else {
        const addRecord = await setDoc(
          doc(db, "entry-record", id),
          this.$data.customerData
        );
        console.log(addRecord);

        alert("user " + this.$data.customerData.name + " is inserted");
        this.$router.push(`/estab-scanner/${this.$data.estabID}`);
      }
    },

    back() {
      this.$router.push(`/estab-scanner/${this.$data.estabID}`);
    },

    home() {
      this.$router.push(`/estab-home/${this.$data.estabID}`);
    },
  },

  created() {
    let id = this.$route.params.estabId;
    this.$data.estabID = id;
    let id1 = this.$route.params.resultId;
    this.$data.customerID = id1;
    this.getCustomer();
  },
};
</script>