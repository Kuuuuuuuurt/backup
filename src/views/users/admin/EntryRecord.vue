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
    @click="home"
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
        src="https://cdn-icons-png.flaticon.com/512/709/709624.png"
        style="height: 25px"
        alt=""
        class="mr-2"
        loading="lazy"
      />
    </button>

    <!-- List of nav item -->
    <button
      class="
        font-extrabold
        m-3
        uppercase
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

  <body class="antialiased font-sans bg-gray-200">
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
            <div class="relative">
              <select
                class="
                  appearance-none
                  h-full
                  rounded-r
                  border-t
                  sm:rounded-r-none sm:border-r-0
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
          </div>
          <div class="block relative">
             <button
                class="
                  relative
                  w-fit
                  h-fit
                  px-2
                  py-1
                  text-md
                  border
                  rounded
                  border-blue
                  ml-1
                "
                @click="findByMonth"
              >
                <p>Find</p>
              </button>
          </div>
        </div>
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4">
          <div
            class="inline-block min-w-full shadow rounded-lg"
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
                <tr v-for="dataRec in dataRecord" :key="dataRec.id">
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="">
                      <div class="flex-shrink-0">
                      </div>
                      <div class="">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {{dataRec.name}}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">{{dataRec.phoneNumber}}</p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">{{dataRec.address}}</p>
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
                      <span class="relative">{{dataRec.visitedEstab}}</span>
                    </span>
                  </td>

                   <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">{{dataRec.time}}</p>
                  </td>

                   <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">{{dataRec.month + " " + dataRec.day + ", " + dataRec.year}}</p>
                  </td>
                   <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">{{dataRec.temperature}}</p>
                  </td>
                </tr>
              </tbody>
            </table>

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
      </div>
    </div>
  </body>
</template>

<script>
import app from '../../../firebase/db/firebase'
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
export default {
  data(){
    return{
      dataRecord: [],
      searchName: "",
      selectMonth: "January",
      id: '',
      reference: '',
         user:{
          userName: '',
          password: '',
          type: '',
          loginToken:'',
          
      }
    }
  },

  methods:{
    async getData(){
      const db = getFirestore(app);

      const dataRef = collection(db, "entry-record");
      let recordSnap = await getDocs(dataRef);

      let dataRecord = [];
      recordSnap.forEach((dataRec) => {
        let recordData = dataRec.data();
          dataRecord.push(recordData);
         
    
      });
      this.$data.dataRecord = dataRecord;


      const userRef = collection(db, "user");

      let usersRef = doc(userRef, this.id);
      this.$data.reference = usersRef;
      let user = await getDoc(this.$data.reference);

      let userData = user.data();

       if(userData.loginToken == "Yes"){
        this.$data.user.userName = userData.userName;
        this.$data.user.password = userData.password;
        this.$data.user.loginToken = userData.loginToken;
        this.$data.user.type = userData.type;
      }
      else if(userData.loginToken == "No"){
        this.$router.push("/admin-login")
      }
      else{
        this.$router.push("/admin-login")
      }
    },

    async findByName(){
       const db = getFirestore(app);

      const dataRef = collection(db, "entry-record");
      let recordSnap = await getDocs(dataRef);

      let dataRecord = [];
      recordSnap.forEach((dataRec) => {
        let recordData = dataRec.data();
        if(recordData.name == this.$data.searchName){
          dataRecord.push(recordData);
        }
        else{
          alert("No Record");
        }
      });
      this.$data.dataRecord = dataRecord;
    },

    async findByMonth(){
      const db = getFirestore(app);

      const dataRef = collection(db, "entry-record");
      let recordSnap = await getDocs(dataRef);

      let dataRecord = [];
      recordSnap.forEach((dataRec) => {
        let recordData = dataRec.data();
        if(recordData.month == this.$data.selectMonth){
          dataRecord.push(recordData);
        }
        else{
          console.log();
        }
      });
      this.$data.dataRecord = dataRecord;

    },
    home(){
      this.$router.push(`/admin-home/${this.id}`)
    }
  },
  created(){
    const id = this.$route.params.id;
    this.id = id;
    this.getData();
  }
}
</script>