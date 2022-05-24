<template>
  <div v-if="pageShow">
    <div class="bg-white p-6 my-10 relative">
      <div class="flex justify-between">
        <div>
          <h3 class="text-2xl text-gray-900 font-semibold">Report Detail</h3>
          <p class="text-gray-600">Please verify the report properly</p>
        </div>
        <div class="">
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
            @click="findRoute"
          >
            <img
              class="w-4 mt-1 mr-1"
              src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
              alt="logo"
            />
            Trace Contact
          </button>
        </div>
      </div>
      <div class="flex space-x-5 mt-3">
        <input
          type="text"
          name=""
          id=""
          placeholder="Your Name"
          class="border p-2 w-1/2"
          v-model="report.name"
          disabled
        />
        <input
          type="tel"
          name=""
          id=""
          placeholder="Your Number"
          class="border p-2 w-1/2"
          disabled
          v-model="report.phoneNumber"
        />
      </div>
      <input
        type="email"
        name=""
        id=""
        placeholder="Your Email"
        class="border p-2 w-full mt-3"
        disabled
        v-model="report.address"
      />
      <textarea
        name=""
        id=""
        cols="10"
        rows="3"
        placeholder="Tell us about desired property"
        class="border p-2 mt-3 w-full"
        disabled
        v-model="report.message"
      ></textarea>

      <div>
        <h2 class="font-bold">RtPCR Test Result</h2>
        <p>
          Date Tested:
          {{
            report.monthTested +
            ", " +
            report.dayTested +
            " " +
            report.yearTested
          }}
        </p>
        <img :src="report.rtpcrImageLink" alt="" />
      </div>

      <div class="flex">
        <button
          class="
            w-full
            mt-6
            bg-blue-600
            hover:bg-blue-500
            text-white
            font-semibold
            p-3
          "
          @click="back"
        >
          Back
        </button>
      </div>
    </div>
  </div>

  <!-- modal -->
  <div
    v-if="traceContact"
    class="
      main-modal
      fixed
      w-full
      inset-0
      z-50
      overflow
      flex
      justify-center
      animated
      fadeIn
      faster
      bg-white
    "
  >
    <div class="sm:px-6 w-full">
      <!-- component -->
      <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
      <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
        <p>Trace Contact</p>
        <div v-if="peopleShow">
          <div class="sm:flex items-center justify-between">
            <div class="flex items-center">
              <a
                class="
                  rounded-full
                  focus:outline-none
                  focus:ring-2
                  focus:bg-indigo-50
                  focus:ring-indigo-800
                "
                href=" javascript:void(0)"
              >
                <div
                  class="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full"
                  @click="showPeople"
                >
                  <p>Contacted Person</p>
                </div>
              </a>
              <a
                class="
                  rounded-full
                  focus:outline-none
                  focus:ring-2
                  focus:bg-indigo-50
                  focus:ring-indigo-800
                  ml-4
                  sm:ml-8
                "
                href="javascript:void(0)"
              >
                <div
                  class="
                    py-2
                    px-8
                    text-gray-600
                    hover:text-indigo-700 hover:bg-indigo-100
                    rounded-full
                  "
                  @click="vehiclesShow"
                >
                  <p>Vehicle Entered</p>
                </div>
              </a>
            </div>
            <button
              onclick="popuphandler(true)"
              class="
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600
                mt-4
                sm:mt-0
                inline-flex
                items-start
                justify-start
                px-6
                py-3
                bg-indigo-700
                hover:bg-indigo-600
                focus:outline-none
                rounded
              "
              @click="sendNotif"
            >
              <p class="text-sm font-medium leading-none text-white">
                Send Notification
              </p>
            </button>
          </div>
          <div class="mt-7 overflow-x-auto">
            <table class="w-full whitespace-nowrap">
              <tbody>
                <tr
                  tabindex="0"
                  class="focus:outline-none h-16 border border-gray-100 rounded"
                  v-for="dataRec in enteredVehicleList"
                  :key="dataRec.id"
                >
                  <td></td>
                  <td class="">
                    <div class="flex items-center pl-5">
                      <p
                        class="
                          text-base
                          font-medium
                          leading-none
                          text-gray-700
                          mr-2
                        "
                      >
                        {{ dataRec.name }}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676"
                          stroke="#3B82F6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333"
                          stroke="#3B82F6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td class="pl-24">
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M7.5 5H16.6667"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7.5 10H16.6667"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7.5 15H16.6667"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.16669 5V5.00667"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.16669 10V10.0067"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.16669 15V15.0067"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p class="text-sm leading-none text-gray-600 ml-2">
                        Entered Date
                      </p>
                    </div>
                  </td>
                  <td class="pl-5">
                    <div class="flex items-center">
                      <p class="text-sm leading-none text-gray-600 ml-2">
                        {{
                          dataRec.month +
                          " " +
                          dataRec.day +
                          ", " +
                          dataRec.year
                        }}
                      </p>
                    </div>
                  </td>
                  <td class="pl-5"></td>
                  <td class="pl-5">
                    <div class="flex items-center">
                      <p class="text-sm leading-none text-gray-600 ml-2">
                        Entered @
                      </p>
                    </div>
                  </td>
                  <td class="pl-5">
                    <button
                      class="
                        py-3
                        px-3
                        text-sm
                        focus:outline-none
                        leading-none
                        text-red-700
                        bg-red-100
                        rounded
                      "
                    >
                      {{ dataRec.visitedEstab }}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-if="vehicleShow">
          <div class="sm:flex items-center justify-between">
            <div class="flex items-center">
              <a
                class="
                  rounded-full
                  focus:outline-none
                  focus:ring-2
                  focus:bg-indigo-50
                  focus:ring-indigo-800
                "
                href=" javascript:void(0)"
              >
                <div
                  class="
                    py-2
                    px-8
                    text-gray-600
                    hover:text-indigo-700 hover:bg-indigo-100
                    rounded-full
                  "
                  @click="showPeople"
                >
                  <p>Contacted Person</p>
                </div>
              </a>
              <a
                class="
                  rounded-full
                  focus:outline-none
                  focus:ring-2
                  focus:bg-indigo-50
                  focus:ring-indigo-800
                  ml-4
                  sm:ml-8
                "
                href="javascript:void(0)"
              >
                <div
                  class="py-2 px-8 bg-indigo-100 text-indigo-700 rounded-full"
                  @click="vehiclesShow"
                >
                  <p>Vehicle Entered</p>
                </div>
              </a>
            </div>
            <button
              onclick="popuphandler(true)"
              class="
                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600
                mt-4
                sm:mt-0
                inline-flex
                items-start
                justify-start
                px-6
                py-3
                bg-indigo-700
                hover:bg-indigo-600
                focus:outline-none
                rounded
              "
              @click="sendNotif"
            >
              <p class="text-sm font-medium leading-none text-white">
                Send Notification
              </p>
            </button>
          </div>
          <div class="mt-7 overflow-x-auto">
            <table class="w-full whitespace-nowrap">
              <tbody>
                <tr
                  tabindex="0"
                  class="focus:outline-none h-16 border border-gray-100 rounded"
                  v-for="dataRec in listPeople"
                  :key="dataRec.id"
                >
                  <td></td>
                  <td class="">
                    <div class="flex items-center pl-5">
                      <p
                        class="
                          text-base
                          font-medium
                          leading-none
                          text-gray-700
                          mr-2
                        "
                      >
                        {{ dataRec.name }}
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6.66669 9.33342C6.88394 9.55515 7.14325 9.73131 7.42944 9.85156C7.71562 9.97182 8.02293 10.0338 8.33335 10.0338C8.64378 10.0338 8.95108 9.97182 9.23727 9.85156C9.52345 9.73131 9.78277 9.55515 10 9.33342L12.6667 6.66676C13.1087 6.22473 13.357 5.62521 13.357 5.00009C13.357 4.37497 13.1087 3.77545 12.6667 3.33342C12.2247 2.89139 11.6251 2.64307 11 2.64307C10.3749 2.64307 9.77538 2.89139 9.33335 3.33342L9.00002 3.66676"
                          stroke="#3B82F6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M9.33336 6.66665C9.11611 6.44492 8.8568 6.26876 8.57061 6.14851C8.28442 6.02825 7.97712 5.96631 7.66669 5.96631C7.35627 5.96631 7.04897 6.02825 6.76278 6.14851C6.47659 6.26876 6.21728 6.44492 6.00003 6.66665L3.33336 9.33332C2.89133 9.77534 2.64301 10.3749 2.64301 11C2.64301 11.6251 2.89133 12.2246 3.33336 12.6666C3.77539 13.1087 4.37491 13.357 5.00003 13.357C5.62515 13.357 6.22467 13.1087 6.66669 12.6666L7.00003 12.3333"
                          stroke="#3B82F6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </td>
                  <td class="pl-5">
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M7.5 5H16.6667"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7.5 10H16.6667"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M7.5 15H16.6667"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.16669 5V5.00667"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.16669 10V10.0067"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M4.16669 15V15.0067"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p class="text-sm leading-none text-gray-600 ml-2">
                        {{ dataRec.address }}
                      </p>
                    </div>
                  </td>
                  <td class="pl-5">
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M3.33331 17.4998V6.6665C3.33331 6.00346 3.59671 5.36758 4.06555 4.89874C4.53439 4.4299 5.17027 4.1665 5.83331 4.1665H14.1666C14.8297 4.1665 15.4656 4.4299 15.9344 4.89874C16.4033 5.36758 16.6666 6.00346 16.6666 6.6665V11.6665C16.6666 12.3295 16.4033 12.9654 15.9344 13.4343C15.4656 13.9031 14.8297 14.1665 14.1666 14.1665H6.66665L3.33331 17.4998Z"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M10 9.1665V9.17484"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M6.66669 9.1665V9.17484"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                        <path
                          d="M13.3333 9.1665V9.17484"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p class="text-sm leading-none text-gray-600 ml-2">23</p>
                    </div>
                  </td>
                  <td class="pl-5">
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M12.5 5.83339L7.08333 11.2501C6.75181 11.5816 6.56556 12.0312 6.56556 12.5001C6.56556 12.9689 6.75181 13.4185 7.08333 13.7501C7.41485 14.0816 7.86449 14.2678 8.33333 14.2678C8.80217 14.2678 9.25181 14.0816 9.58333 13.7501L15 8.33339C15.663 7.67034 16.0355 6.77107 16.0355 5.83339C16.0355 4.8957 15.663 3.99643 15 3.33339C14.337 2.67034 13.4377 2.29785 12.5 2.29785C11.5623 2.29785 10.663 2.67034 10 3.33339L4.58333 8.75005C3.58877 9.74461 3.03003 11.0935 3.03003 12.5001C3.03003 13.9066 3.58877 15.2555 4.58333 16.2501C5.57789 17.2446 6.92681 17.8034 8.33333 17.8034C9.73985 17.8034 11.0888 17.2446 12.0833 16.2501L17.5 10.8334"
                          stroke="#52525B"
                          stroke-width="1.25"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p class="text-sm leading-none text-gray-600 ml-2">
                        {{ dataRec.phoneNumber }}
                      </p>
                    </div>
                  </td>
                  <td class="pl-5">
                    <button
                      class="
                        py-3
                        px-3
                        text-sm
                        focus:outline-none
                        leading-none
                        text-red-700
                        bg-red-100
                        rounded
                      "
                    >
                      {{ dataRec.month + dataRec.day + ", " + dataRec.year }}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import app from "../../../firebase/auth-individual/firebase";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
export default {
  data() {
    return {
      pageShow: true,
      vehicleShow: false,
      peopleShow: true,
      traceContact: false,
      enteredVehicle: [],
      enteredVehicleList: [],
      peopleEncountered: [],
      listPeople: [],
      userRefer: "",
      reportID: "",
      report: {
        name: "",
        address: "",
        status: "",
        phoneNumber: "",
        dayTested: "",
        monthTested: "",
        yearTested: "",
        classification: "",
        age: "",
        gender: "",
        message: "",
        rtpcrImageLink: "",
      },
      notification: {
        header: "",
        notificationMessage: "",
        date: "",
        phoneNumber: "",
      },

      id: "",
      reference: "",
      user: {
        userName: "",
        password: "",
        type: "",
        loginToken: "",
      },
    };
  },

  methods: {
    vehiclesShow() {
      this.$data.vehicleShow = true;
      this.$data.peopleShow = false;
      this.$data.pageShow = false;
    },
    showPeople() {
      this.$data.vehicleShow = false;
      this.$data.peopleShow = true;
      this.$data.pageShow = false;
    },
    async getReport() {
      const db = getFirestore(app);
      const userRef = collection(db, "reports");

      let usersRef = doc(userRef, this.$data.reportID);
      this.$data.userRefer = usersRef;

      let user = await getDoc(this.$data.userRefer);
      let reportData = user.data();

      this.$data.report.name = reportData.reportInfo.name;
      this.$data.report.address = reportData.reportInfo.address;
      this.$data.report.phoneNumber = reportData.reportInfo.phoneNumber;
      this.$data.report.message = reportData.reportInfo.message;
      this.$data.report.rtpcrImageLink = reportData.reportInfo.rtpcrImageLink;
      this.$data.report.status = reportData.reportInfo.status;
      this.$data.report.yearTested = reportData.reportInfo.yearTested;
      this.$data.report.monthTested = reportData.reportInfo.monthTested;
      this.$data.report.dayTested = reportData.reportInfo.dayTested;
      this.$data.report.gender = reportData.reportInfo.gender;
      this.$data.report.age = reportData.reportInfo.age;

      //
      const userRefs = collection(db, "user");

      let usersRefs = doc(userRefs, this.id);
      this.$data.reference = usersRefs;
      let users = await getDoc(this.$data.reference);

      let userData = users.data();

      if (userData.loginToken == "Yes") {
        this.$data.user.userName = userData.userName;
        this.$data.user.password = userData.password;
        this.$data.user.loginToken = userData.loginToken;
        this.$data.user.type = userData.type;
      } else if (userData.loginToken == "No") {
        this.$router.push("/admin-login");
      } else {
        this.$router.push("/admin-login");
      }
    },

    async findRoute() {
      this.$data.traceContact = true;
      let fDay = this.$data.report.dayTested - 1;
      console.log(fDay);
      const db = getFirestore(app);
      const dataRef = collection(db, "entry-record");
      let recordSnap = await getDocs(dataRef);

      let enteredVehicle = [];
      let enteredVehicleList = [];
      recordSnap.forEach((dataRec) => {
        let recordData = dataRec.data();
        recordData.id = dataRec.id;

        if (recordData.name == this.$data.report.name) {
          if (
            ((recordData.month == this.$data.report.monthTested) &
              (recordData.year == this.$data.report.yearTested) &
              (recordData.day == fDay)) |
            ((recordData.month == this.$data.report.monthTested) &
              (recordData.year == this.$data.report.yearTested) &
              (recordData.day == this.$data.report.dayTested))
          ) {
            enteredVehicle.push(recordData.visitedEstab);
            enteredVehicleList.push(recordData);
          }
        }
      });
      this.$data.enteredVehicle = enteredVehicle;
      this.$data.enteredVehicleList = enteredVehicleList;
      console.log(enteredVehicle);

      //people
      let peopleEncountered = [];
      let listPeople = [];
      recordSnap.forEach((dataRec) => {
        let recordData = dataRec.data();
        if (enteredVehicle.some((r) => recordData.visitedEstab.includes(r))) {
          if (
            ((recordData.month == this.$data.report.monthTested) &
              (recordData.year == this.$data.report.yearTested) &
              (recordData.day == fDay)) |
            ((recordData.month == this.$data.report.monthTested) &
              (recordData.year == this.$data.report.yearTested) &
              (recordData.day == this.$data.report.dayTested))
          ) {
            if (recordData.name != this.$data.report.name) {
              peopleEncountered.push(recordData.phoneNumber);
              listPeople.push(recordData);
            }
          }
        }
      });
      this.$data.peopleEncountered = peopleEncountered;
      this.$data.listPeople = listPeople;
      console.log(peopleEncountered);
      this.$data.notification.header =
        "You have contacted a confirm COVID-19 Positive";
      this.$data.notification.notificationMessage =
        "You have encountered an Confirm Covid-19 Positive patient @" +
        this.$data.report.monthTested +
        " " +
        this.$data.report.dayTested +
        ", " +
        this.$data.report.yearTested +
        "Upon entering the establishment";

      this.$data.notification.date =
        this.$data.report.monthTested +
        " " +
        this.$data.report.dayTested +
        ", " +
        this.$data.report.yearTested;
    },

    async sendNotif() {
      const db = getFirestore(app);

      this.$data.report.status = "Done";
      var randomstring = require("randomstring");
      let reportedID = randomstring.generate({
        length: 20,
        charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      });
      const addDocus = setDoc(
        doc(db, "reports-info", reportedID),
        this.$data.report
      );
      console.log(addDocus);

      for (let i = 0; i < this.peopleEncountered.length; i++) {
        this.$data.notification.phoneNumber = this.peopleEncountered[i];
        var randomstrings = require("randomstring");
        let id = randomstrings.generate({
          length: 20,
          charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
        const addDocs = setDoc(
          doc(db, "notification", id),
          this.$data.notification
        );
        console.log(addDocs);
        console.log("Success");
      }

      const userRef = collection(db, "reports");
      let delApplication = doc(userRef, this.$data.reportID);
      await deleteDoc(delApplication);
      console.log("deleted");
    },

    closeModal() {
      this.$data.traceContact = false;
    },
    back() {
      this.$router.push("/admin-report");
    },
  },

  created() {
    let id = this.$route.params.reportId;
    let id2 = this.$route.params.id;
    this.id = id2;
    this.$data.reportID = id;
    this.getReport();
  },
};
</script>