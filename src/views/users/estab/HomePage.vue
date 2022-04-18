<template>
    <nav class="bg-white shadow fixed z-10 mx-auto inset-x-0 top-0 flex justify-between items-center">
      
        <a href="#" class="font-bold m-3 inline-flex hover:text-pink-700 transition-all duration-500">
              <img src="https://cdn-icons-png.flaticon.com/512/1008/1008001.png" style="height: 25px" alt="" class="mr-2"
      loading="lazy" />
          TRAFEX
        </a>
        
      
      <!-- List of nav item -->
           <div class="font-extrabold m-3 uppercase inline-flex hover:text-pink-700 transition-all duration-500">
             <button>
               <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" style="height: 25px" alt="" class="mr-2"
      loading="lazy" />
             </button>
              <button @click="toSettings">
               <img src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png" style="height: 25px" alt="" class="mr-2"
      loading="lazy" />
             </button>
             <button @click="signOut">
               <img src="https://cdn-icons-png.flaticon.com/512/450/450387.png" style="height: 25px" alt="" class="mr-2"
      loading="lazy" />
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

        <!-- Title -->
        <h2 class="font-bold text-3xl mt-2">
          {{ user.estabName }}
        </h2>
        

        <!-- Tags -->
        <p class="mt-2">
          Owner:
          <a href="#" class="text-red-600"> {{ user.ownerName }} </a>,
        </p>
        <p class="-mt-2">
          Contact Number:
          <a href="#" class="text-red-600"> {{ user.contactNumber }} </a>,
        </p>

        <!-- Description -->
        <h3 class="font-bold text-xl mt-4">Address</h3>
        <p class="font-light text-red-600">
          {{ user.address }}
        </p>

        <!-- Button -->
        <button
          class="
            bg-red-600
            text-white
            font-semibold
            py-2
            px-5
            text-sm
            mt-3
            inline-flex
            items-center
            group
            rounded
          "
          @click="toScanner"
        >
          <p>Scan QR-Code</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              h-4
              w-4
              ml-1
              group-hover:translate-x-2
              delay-100
              duration-200
              ease-in-out
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
<body class="antialiased font-sans">
    <div class="container mx-auto px-4 sm:px-8 mt-10">
      <div class="py-8">
        <div>
          <h2 class="text-2xl font-semibold leading-tight">
            Entry Data Record
          </h2>
        </div>
        <div class="my-2 flex sm:flex-row flex-col">
          <div class="flex flex-row mb-1 sm:mb-0">
            <div class="relative">
            </div>
            
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
                      <div class="flex-shrink-0">
                      </div>
                      <div class="">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {{customer.name}}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">{{customer.phoneNumber}}</p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">{{customer.address}}</p>
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
                        class="
                          absolute
                          inset-0
                          opacity-50
                          rounded-full
                        "
                      ></span>
                      <span class="relative">{{customer.visitedEstab}}</span>
                    </span>
                  </td>

                   <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">{{customer.time}}</p>
                  </td>

                   <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">{{customer.month + " " + customer.day + ", " + customer.year}}</p>
                  </td>
                   <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">{{customer.temperature}}</p>
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
                @click="findByName"
              >
                <p>Go</p>
              </button>
            </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import app from "../../../firebase/auth-individual/firebase";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import {getAuth, signOut} from 'firebase/auth'
export default {
  data() {
    return {
      selectMonth: 'January',
      searchName: '',
      customers: [],
      estabID: "",
      reference: "",
      user: {
        estabName: "",
        ownerName: "",
        address: "",
        contactNumber: "",
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

      this.$data.user.estabName = userData.userInfo.establishmentName;
      this.$data.user.address =
        userData.userInfo.purok +
        ", " +
        userData.userInfo.baranggay +
        ", " +
        userData.userInfo.municipality +
        ", " +
        "Misamis Occidental";
      this.$data.user.contactNumber = userData.userInfo.phoneNumber;
      this.$data.user.ownerName = userData.userInfo.owner;

      //display all data in table
      const customerRef = collection(db, "entry-record");
      let customerSnap = await getDocs(customerRef);

      let customers = [];
      customerSnap.forEach((customer) => {
        let customerData = customer.data();
        customerData.id = customer.id;
        if(customerData.visitedEstab == this.$data.user.estabName){
          customers.push(customerData);
        }
        else{
        console.log("")
        }
      });
      this.$data.customers = customers;
    },

    toScanner() {
      let id = this.$data.estabID;
      this.$router.push(`/estab-scanner/${id}`);
    },

    signOut(){
      const auth = getAuth(app)
         signOut(auth)
      .then(() => {
        // Sign-out successful.
        this.$router.push('/estab-login');
        console.log(auth.currentUser)
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
    },

    toSettings(){
      const id = this.$data.estabID;
      this.$router.push( `/estab-settings/${id}`);
    }
  },

  created() {
    let id = this.$route.params.estabId;
    this.$data.estabID = id;
    this.getUser();
  },
};
//<tr v-for="customer in customers" :key="customer.id">
</script>


