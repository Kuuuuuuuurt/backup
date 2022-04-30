<template>
  <div>
    <div class="bg-white p-6 my-10 relative">
      <h3 class="text-2xl text-gray-900 font-semibold">Report Detail</h3>
      <p class="text-gray-600">Please verify the report properly</p>
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
        <p>Date Tested: {{report.monthTested + ", " + report.dayTested + " " + report.yearTested}}</p>
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
            mr-2
          "
          @click="findRoute"
        >
          find
        </button>
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
} from "firebase/firestore";
export default {
  data() {
    return {
      enteredVehicle: [],
      peopleEncountered: [],
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
      notification:{
        notificationMessage: '',
        date: '',
      },
    };
  },

  methods: {
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

    },

    async findRoute() {
      let fDay = this.$data.report.dayTested-1;
      console.log(fDay)
      const db = getFirestore(app);
      const dataRef = collection(db, "entry-record");
      let recordSnap = await getDocs(dataRef);

      let enteredVehicle = [];
      recordSnap.forEach((dataRec) => {
        let recordData = dataRec.data();

        if(recordData.name == this.$data.report.name){
            if(recordData.month == this.$data.report.monthTested & recordData.year == this.$data.report.yearTested
            & recordData.day == fDay | recordData.month == this.$data.report.monthTested & recordData.year == this.$data.report.yearTested
            & recordData.day == this.$data.report.dayTested){
                enteredVehicle.push(recordData.visitedEstab);
            }
        }
      });
      this.$data.enteredVehicle = enteredVehicle;
      console.log(enteredVehicle);

      //people
     let peopleEncountered = [];
      recordSnap.forEach((dataRec) => {
        let recordData = dataRec.data();
        if(enteredVehicle.some(r=> recordData.visitedEstab.includes(r))){
            if(recordData.month == this.$data.report.monthTested & recordData.year == this.$data.report.yearTested
            & recordData.day == fDay | recordData.month == this.$data.report.monthTested & recordData.year == this.$data.report.yearTested
            & recordData.day == this.$data.report.dayTested){
              if(recordData.name != ""){
               peopleEncountered.push(recordData.phoneNumber);
              }
            }
        }
      });
      this.$data.peopleEncountered = peopleEncountered;
      console.log(peopleEncountered);

    },

    back(){
      const db = getFirestore(app);

      for(let i = 0; i < this.peopleEncountered.length; i++){
      const id = this.peopleEncountered[i];
        const addDocs = setDoc(doc(db, "notification", id), this.$data.notification);
       console.log(addDocs)
      }
    },
  },

  created() {
    let id = this.$route.params.reportId;
    this.$data.reportID = id;
    this.getReport();
  },
};
</script>