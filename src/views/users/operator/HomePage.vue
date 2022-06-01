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
        src="https://cdn-icons-png.flaticon.com/512/1008/1008001.png"
        style="height: 25px"
        alt=""
        class="mr-2"
        loading="lazy"
      />
      TRAFEX
    </a>

    <!-- List of nav item -->
    <div
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
      <button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
          style="height: 25px"
          alt=""
          class="mr-2"
          loading="lazy"
        />
      </button>
      <button @click="toSettings">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png"
          style="height: 25px"
          alt=""
          class="mr-2"
          loading="lazy"
        />
      </button>
      <button @click="logoutModal=true">
        <img
          src="https://cdn-icons-png.flaticon.com/512/450/450387.png"
          style="height: 25px"
          alt=""
          class="mr-2"
          loading="lazy"
        />
      </button>
    </div>
  </nav>

  <div class="">
    <div class="flex items-center justify-left">
      <!-- Card -->
      <div class="bg-white p-8 w-[32rem]">
        <!-- Header -->
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
          <p>Establishment</p>
        </header>

        <!-- Button -->
      </div>
    </div>
  </div>
  <body class="antialiased font-sans">
    <div class="container mx-auto px-4 sm:px-8">
      <div class="py-8">
        <div class="flex justify-between">
          <div>
            <h2 class="text-2xl font-semibold leading-tight">
              {{ users.vehicleID }}
            </h2>
            <p class="text-blue-600">{{ users.ownerName }}</p>
          </div>

          <div>
            <button
              class="
                bg-transparent
                hover:bg-blue-500
                font-semibold
                hover:text-white
                py-2
                px-4
                border border-blue-500
                hover:border-transparent
                rounded
                flex
              "
              @click="toScanner"
            >
              <img
                class="w-4 mt-1 mr-2"
                src="https://cdn-icons-png.flaticon.com/512/3126/3126571.png"
                alt="logo"
              />
              Scan Qr-Code
            </button>
          </div>
        </div>
        <div class="my-2 flex sm:flex-row flex-col">
          <div class="flex flex-row mb-1 sm:mb-0">
            <div class="relative"></div>

            <div class="my-2 flex sm:flex-row flex-col">
              <div class="flex flex-row mb-1 sm:mb-0">
                <div class="relative"></div>
              </div>
              <div class="block relative">
                <span
                  class="
                    h-full
                    absolute
                    inset-y-0
                    left-0
                    flex
                    items-center
                    pl-2
                  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    class="h-4 w-4 fill-current text-gray-500"
                  >
                    <path
                      d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                    ></path>
                  </svg>
                </span>
                <input
                  placeholder="Search by name"
                  class="
                    appearance-none
                    rounded-r rounded-l
                    sm:rounded-l-none
                    border border-gray-400 border-b
                    block
                    pl-8
                    pr-6
                    py-2
                    w-full
                    bg-white
                    text-sm
                    placeholder-gray-400
                    text-gray-700
                    focus:bg-white
                    focus:placeholder-gray-600
                    focus:text-gray-700
                    focus:outline-none
                  "
                  v-model="searchName"
                />
              </div>

              <button
                class="
                  ml-1
                  relative
                  w-fit
                  h-fit
                  px-2
                  py-1
                  text-md
                  border
                  rounded
                  border-blue
                "
                @click="findByName"
              >
                <p>Search</p>
              </button>
            </div>
          </div>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div
            class="inline-block min-w-full shadow rounded-lg overflow-hidden"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Name
                  </th>
                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Contact Number
                  </th>
                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Address
                  </th>
                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Establishment Visited
                  </th>

                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Time
                  </th>

                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Date
                  </th>

                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Temperature
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="customer in customers" :key="customer.id">
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="">
                      <div class="flex-shrink-0"></div>
                      <div class="">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {{ customer.name }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ customer.phoneNumber }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ customer.address }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <span
                      class="
                        relative
                        inline-block
                        px-3
                        py-1
                        font-semibold
                        text-green-900
                        leading-tight
                      "
                    >
                      <span
                        aria-hidden
                        class="absolute inset-0 opacity-50 rounded-full"
                      ></span>
                      <span class="relative">{{ customer.visitedEstab }}</span>
                    </span>
                  </td>

                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ customer.time }}
                    </p>
                  </td>

                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{
                        customer.month +
                        " " +
                        customer.day +
                        ", " +
                        customer.year
                      }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ customer.temperature }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="my-2 flex sm:flex-row flex-col">
            <div class="flex flex-row mb-1 sm:mb-0">
              <div class="relative"></div>
            </div>
            <div class="block relative">
              <select
                class="
                  appearance-none
                  h-full
                  rounded-r
                  border-t
                  sm:rounded-r-none sm:border-r-1
                  border-r border-b border-l
                  block
                  appearance-none
                  w-full
                  bg-white
                  border-gray-400
                  text-gray-700
                  py-2
                  px-4
                  pr-8
                  leading-tight
                  focus:outline-none
                  focus:border-l
                  focus:border-r
                  focus:bg-white
                  focus:border-gray-500
                "
                v-model="selectMonth"
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
              <div
                class="
                  pointer-events-none
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  px-2
                  text-gray-700
                "
              >
                <svg
                  class="fill-current h-4 w-4 border"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>

            <button
              class="
                ml-1
                relative
                w-fit
                h-fit
                px-2
                py-1
                text-md
                border
                rounded
                border-blue
              "
              @click="findByMonth"
            >
              <p>Go</p>
            </button>
          </div>
        
        
        
        
        
        </div>
    
    
    </div>
    </div>
  </body>


   <div
   v-if="logoutModal"
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
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
            <div class="p-6 text-center">
                <svg class="mx-auto mb-4 w-14 h-14 text-red-400 dark:text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to logout?</h3>
                <button data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" @click="signOut">
                    Yes, I'm sure
                </button>
                <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="logoutModal=false">No, cancel</button>
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
  getDocs,
  setDoc,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
export default {
  data() {
    return {
      logoutModal: false,
      month: "",
      selectMonth: "January",
      searchName: "",
      customers: [],
      estabID: "",
      reference: "",
      users: {
        vehicleID: "",
        ownerName: "",
        address: "",
        contactNumber: "",
      },
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
          password: "",
          loginToken: "",
        },
      },
    };
  },

  methods: {
    async getUser() {
      const db = getFirestore(app);
      const userRef = collection(db, "user");

      let usersRef = doc(userRef, this.estabID);
      this.$data.reference = usersRef;

      let user = await getDoc(this.$data.reference);

      let userData = user.data();

      this.$data.user.userInfo.email = userData.userInfo.email;
      this.$data.user.userInfo.phoneNumber = userData.userInfo.phoneNumber;
      this.$data.user.userInfo.vehicleID = userData.userInfo.vehicleID;
      this.$data.user.userInfo.purok = userData.userInfo.purok;
      this.$data.user.userInfo.baranggay = userData.userInfo.baranggay;
      this.$data.user.userInfo.municipality = userData.userInfo.municipality;
      this.$data.user.userInfo.owner = userData.userInfo.owner;
      this.$data.user.userInfo.type = userData.userInfo.type;
      this.$data.user.userInfo.password = userData.userInfo.password;
      this.$data.user.userInfo.loginToken = userData.userInfo.loginToken;

      if (userData.userInfo.loginToken == "Yes") {
        this.$data.users.vehicleID = userData.userInfo.vehicleID;
        this.$data.users.address =
          userData.userInfo.purok +
          ", " +
          userData.userInfo.baranggay +
          ", " +
          userData.userInfo.municipality +
          ", " +
          "Misamis Occidental";
        this.$data.users.contactNumber = userData.userInfo.phoneNumber;
        this.$data.users.ownerName = userData.userInfo.owner;
      } else if (userData.userInfo.loginToken == "No") {
        this.$router.push("/operator/login");
      } else {
        alert("No token");
      }

      //display all data in table
      const customerRef = collection(db, "entry-record");
      let customerSnap = await getDocs(customerRef);

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

      let customers = [];
      customerSnap.forEach((customer) => {
        let customerData = customer.data();
        customerData.id = customer.id;
        if (customerData.visitedEstab == this.$data.users.vehicleID) {
          if (
            (customerData.month == this.$data.month) &
            (customerData.day == `${current.getDate()}`) &
            (customerData.year == `${current.getFullYear()}`)
          ) {
            customers.push(customerData);
          } else {
            console.log();
          }
        } else {
          console.log();
        }
      });
      this.$data.customers = customers;
    },

    toScanner() {
      let id = this.$data.estabID;
      this.$router.push(`/operator/scanner/${id}`);
    },

    signOut() {
      const auth = getAuth(app);
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$data.user.userInfo.loginToken = "No";
          setDoc(this.$data.reference, this.$data.user);
          this.$router.push("/operator/login");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },

    toSettings() {
      const id = this.$data.estabID;
      this.$router.push(`/operator/settings/${id}`);
    },

    async findByName() {
      const db = getFirestore(app);

      const dataRef = collection(db, "entry-record");
      let customerSnap = await getDocs(dataRef);

      let customers = [];
      customerSnap.forEach((customer) => {
        let customerData = customer.data();
        if (customerData.visitedEstab == this.$data.users.vehicleID) {
          if (customerData.name == this.$data.searchName) {
            customers.push(customerData);
          } else {
            console.log("No User");
          }
        }
      });
      this.$data.customers = customers;
    },

    async findByMonth() {
      const db = getFirestore(app);

      const dataRef = collection(db, "entry-record");
      let customerSnap = await getDocs(dataRef);

      let customers = [];
      customerSnap.forEach((customer) => {
        let customerData = customer.data();
        if (customerData.visitedEstab == this.$data.users.vehicleID) {
          if (customerData.month == this.$data.selectMonth) {
            customers.push(customerData);
          } else {
            console.log("No User");
          }
        }
      });
      this.$data.customers = customers;
    },
  },

  created() {
    let id = this.$route.params.estabId;
    this.$data.estabID = id;
    this.getUser();
  },
};
//<tr v-for="customer in customers" :key="customer.id">
</script>


