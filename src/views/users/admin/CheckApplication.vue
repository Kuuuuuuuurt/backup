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
        src="https://cdn-icons-png.flaticon.com/512/2681/2681062.png"
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
          src="../../../../src/assets/283863145_544721900556893_7583603897868082993_n.png"
          style="height: 30px"
          alt=""
          class="mr-2"
          loading="lazy"
        />
    </a>
  </nav>

  <div class="flex flex-col items-center justify-center text-gray-700">
    <div class="leading-loose">
      <div class="max-w-xl m-4 p-10 bg-white rounded shadow-xl">
        <p class="text-gray-800 font-medium">Application information</p>
        <div class="">
          <label class="block text-sm text-gray-00" for="cus_name"
            >First Name</label
          >
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required=""
            placeholder="Your Name"
            aria-label="Name"
            disabled
            v-model="user.users.userInfo.firstName"
          />
        </div>
        <div class="">
          <label class="block text-sm text-gray-00" for="cus_name"
            >Last Name</label
          >
          <input
            class="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_name"
            name="cus_name"
            type="text"
            required=""
            placeholder="Your Name"
            aria-label="Name"
            disabled
            v-model="user.users.userInfo.lastName"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="cus_email"
            >Contact Number</label
          >
          <input
            class="w-full px-5 py-4 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Number"
            aria-label="Email"
            disabled
            v-model="user.users.userInfo.phoneNumber"
          />
        </div>
        <div class="mt-2">
          <label class="block text-sm text-gray-600" for="cus_email"
            >Address</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Municipality"
            aria-label="Email"
            disabled
            v-model="user.users.userInfo.municipality"
          />
        </div>
        <div class="mt-2">
          <label class="hidden text-sm block text-gray-600" for="cus_email"
            >Baranggay</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Baranggay"
            aria-label="Email"
            disabled
            v-model="user.users.userInfo.baranggay"
          />
        </div>
        <div class="inline-block mt-2 w-1/2 pr-1">
          <label class="hidden block text-sm text-gray-600" for="cus_email"
            >Purok</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Purok"
            aria-label="Email"
            disabled
            v-model="user.users.userInfo.purok"
          />
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="hidden block text-sm text-gray-600" for="cus_email"
            >Gender</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Gender"
            aria-label="Email"
            disabled
            v-model="user.users.userInfo.gender"
          />
        </div>
        <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
          <label class="hidden block text-sm text-gray-600" for="cus_email"
            >Age</label
          >
          <input
            class="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="cus_email"
            type="text"
            required=""
            placeholder="Age"
            aria-label="Email"
            disabled
            v-model="user.users.userInfo.age"
          />
        </div>
        <div
          class="
            w-full
            max-w-2xl
            mx-auto
            bg-white
            shadow-lg
            rounded-sm
            border border-gray-200
            my-5
          "
        >
          <header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-gray-800">Vaccination Card</h2>
          </header>
          <div class="p-3">
            <div class="overflow-x-auto inline-block"></div>
            <div>
              <img :src="user.users.userInfo.vaccinationLink" alt="" />
            </div>
          </div>
        </div>

        <div
          class="
            w-full
            max-w-2xl
            mx-auto
            bg-white
            shadow-lg
            rounded-sm
            border border-gray-200
            my-5
          "
        >
          <header class="px-5 py-4 border-b border-gray-100">
            <h2 class="font-semibold text-gray-800">Valid ID</h2>
          </header>
          <div class="p-3">
            <div class="overflow-x-auto inline-block"></div>
            <div>
              <img :src="user.users.userInfo.validIdLink" alt="" />
            </div>
          </div>
        </div>

        <div class="mt-4">
          <button
            class="
              px-4
              py-1
              text-white
              font-light
              tracking-wider
              bg-gray-900
              rounded
            "
            type="submit"
            @click="acceptData"
          >
            Accept
          </button>
          <button
            class="
              ml-3
              px-4
              py-1
              text-white
              font-light
              tracking-wider
              bg-gray-900
              rounded
            "
            type="submit"
            @click="decline"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  </div>



   <div
    v-if="acceptedModal"
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
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal" @click="back">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
            <div class="p-6 text-center">
                <svg class="mx-auto mb-4 w-14 h-14 text-green-400 dark:text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 13l4 4L19 7"
				></path></svg>
                <h3 class=" text-lg font-normal text-gray-500 dark:text-gray-400">Success </h3>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Application Accepted </h3>
                <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="back">Okay</button>
            </div>
             </div>
        </div>
    </div>
  </div>

   <div
    v-if="declineModal"
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
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal" @click="back">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
            <div class="p-6 text-center">
                <svg class="mx-auto mb-4 w-14 h-14 text-green-400 dark:text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 13l4 4L19 7"
				></path></svg>
                <h3 class=" text-lg font-normal text-gray-500 dark:text-gray-400">Success </h3>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Application Declined </h3>
                <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="back">Okay</button>
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
  setDoc,
  deleteDoc,
} from "firebase/firestore";

export default {
  data() {
    return {
      declineModal: false,
      acceptedModal: false,
      reference: "",
      id: "",
      applicationID: "",
      userRefer: "",
      usersRefer: "",
      user: {
        users:{
        userInfo: {
          phoneNumber: "",
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          municipality: "",
          baranggay: "",
          purok: "",
          qrData: "",
          qrStatus: "",
          type: "passenger",
          vaccinationLink: null,
          validIdLink: null,
          password: "",
          loginToken: "",
        }
        },
        user: {
          userName: "",
          password: "",
          type: "",
          loginToken: "",
        },
      },
      qrInformation: {
        info: {
          name: "",
          address: "",
          age: "",
          gender: "",
          phoneNumber: "",
        },
      },

      notification: {
        header: "",
        notificationMessage: "",
        date: "",
        phoneNumber: "",
      },
    };
  },

  methods: {
    async getApplication() {
      const db = getFirestore(app);
      const userRef = collection(db, "qr-application");

      let usersRef = doc(userRef, this.applicationID);
      this.$data.userRefer = usersRef;

      let user = await getDoc(this.$data.userRefer);

      let applicationData = user.data();

      this.$data.user.users.userInfo.phoneNumber =
        applicationData.userInfo.phoneNumber;
      this.$data.user.users.userInfo.firstName = applicationData.userInfo.firstName;
      this.$data.user.users.userInfo.lastName = applicationData.userInfo.lastName;
      this.$data.user.users.userInfo.gender = applicationData.userInfo.gender;
      this.$data.user.users.userInfo.age = applicationData.userInfo.age;
      this.$data.user.users.userInfo.baranggay = applicationData.userInfo.baranggay;
      this.$data.user.users.userInfo.purok = applicationData.userInfo.purok;
      this.$data.user.users.userInfo.municipality =
        applicationData.userInfo.municipality;
      this.$data.user.users.userInfo.loginToken = applicationData.userInfo.loginToken;
      this.$data.user.users.userInfo.password = applicationData.userInfo.password;
      this.$data.user.users.userInfo.vaccinationLink =
        applicationData.userInfo.vaccinationLink;
      this.$data.user.users.userInfo.validIdLink =
        applicationData.userInfo.validIdLink;

      this.$data.qrInformation.info.name =
        applicationData.userInfo.firstName +
        " " +
        applicationData.userInfo.lastName;
      this.$data.qrInformation.info.address =
        applicationData.userInfo.purok +
        ", " +
        applicationData.userInfo.baranggay +
        ", " +
        applicationData.userInfo.municipality;
      this.$data.qrInformation.info.age = applicationData.userInfo.age;
      this.$data.qrInformation.info.gender = applicationData.userInfo.gender;
      this.$data.qrInformation.info.phoneNumber =
        applicationData.userInfo.phoneNumber;

      //
       const userRefs = collection(db, "user");

      let usersRefs = doc(userRefs, this.id);
      this.$data.reference = usersRefs;
      let users = await getDoc(this.$data.reference);

      let userData = users.data();

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

    async acceptData() {
      var randomstrings = require("randomstring");

      let qrDetail =
        randomstrings.generate({
          length: 5,
          charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }) +
        "-" +
        randomstrings.generate({
          length: 6,
          charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        }) +
        "-" +
        randomstrings.generate({
          length: 5,
          charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        });
      this.$data.user.users.userInfo.qrData = qrDetail;

      const db = getFirestore(app);
      const userRef = collection(db, "user");
      const usersRefs = collection(db, "qr-application");

      let usersRef = doc(userRef, this.$data.user.users.userInfo.phoneNumber);
      this.$data.usersRefer = usersRef;
      this.$data.user.users.userInfo.qrStatus = "Approved";
      //update qrData
      await setDoc(this.$data.usersRefer, this.$data.user.users);

      //delete User
      let delApplication = doc(usersRefs, this.$data.applicationID);
      await deleteDoc(delApplication);

      //create Qr-code details
      let id = this.$data.user.users.userInfo.qrData;
      setDoc(
        doc(db, "data-record", id),
        this.$data.qrInformation
      );

      this.$data.notification.header = "QR-Code Application Update.";
      this.$data.notification.notificationMessage =
        "Ang mensahing ito ay nagpapaalam sa iyo na ang iyong QR Code Application ay naaprubahan ng TRAFEX Admin.";
      this.$data.notification.phoneNumber =
        "+63" + this.$data.user.users.userInfo.phoneNumber;
           const current = new Date();
      let date = `${current.getMonth()}` + " " + `${current.getDay()}` + ", " + `${current.getFullYear()}` ;
      this.$data.notification.date = date;

      var randomstring = require("randomstring");
      let notifID = randomstring.generate({
        length: 20,
        charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      });

      setDoc(
        doc(db, "notification", notifID),
        this.$data.notification
      );
      
       this.acceptedModal = true;
    },

    async decline() {
      const db = getFirestore(app);
      const userRef = collection(db, "user");
      const usersRefs = collection(db, "qr-application");

      let usersRef = doc(userRef, this.$data.user.users.userInfo.phoneNumber);
      this.$data.usersRefer = usersRef;
      this.$data.user.users.userInfo.qrStatus = "Declined";
      //update qrData
      await setDoc(this.$data.usersRefer, this.$data.user.users);

      //delete User
      let delApplication = doc(usersRefs, this.$data.applicationID);
      await deleteDoc(delApplication);

      var randomstrings = require("randomstring");
      let id = randomstrings.generate({
        length: 20,
        charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      });

      setDoc(doc(db, "applications", id), this.$data.user);
      const current = new Date();
      let date = `${current.getMonth()}` + " " + `${current.getDay()}` + ", " + `${current.getFullYear()}` ;

      this.$data.notification.header = "QR-Code Application Update.";
      this.$data.notification.notificationMessage =
        "Ang mensahing ito ay nagpapaalam sa iyo na ang iyong QR Code Application ay hindi inaprubahan ng TRAFEX Admin. Maaring ang iyong mga ibinigay na impormasyon ay hindi wasto.";
      this.$data.notification.phoneNumber =
        "+63" + this.$data.user.users.userInfo.phoneNumber;
      this.$data.notification.date = date;

      var randomstring = require("randomstring");
      let notifID = randomstring.generate({
        length: 20,
        charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      });

      setDoc(
        doc(db, "notification", notifID),
        this.$data.notification
      );

      this.declineModal = true;

    },

    back(){
      this.$router.push(`/admin-home/${this.id}`);
    }
  },

  created() {
    let id = this.$route.params.applicationID;
    let id2 = this.$route.params.id;
    this.id = id2;
    this.$data.applicationID = id;
    this.getApplication();
  },
};
</script>