<template>
    <nav class="bg-white shadow fixed z-10 mx-auto inset-x-0 top-0 flex justify-between items-center">
      
        <a href="#" class="font-bold m-3 inline-flex hover:text-pink-700 transition-all duration-500">
              <img
          src="../../../../src/assets/283863145_544721900556893_7583603897868082993_n.png"
          style="height: 30px"
          alt=""
          class="mr-2"
          loading="lazy"
        />
        </a>
        
      
      <!-- List of nav item -->
            <a href="#" class="font-bold m-3 inline-flex hover:text-pink-700 transition-all duration-500">
              <img src="https://cdn-icons-png.flaticon.com/512/2681/2681062.png" style="height: 25px" alt="" class="mr-2"
      loading="lazy" />
          Application Form
        </a>
      
    </nav>

  <div class="flex flex-wrap items-center justify-center -mt-5">
    <div class="w-full md:w-3/5 bg-white p-6">
      <div class="mt-5 text-2xl">
      </div>
      <div class="flex items-center border-b py-4"></div>
      <section class="antialiased text-gray-600 h-screen px-2">
        <div class="flex flex-col justify-center">
          <!-- Table -->
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
              <h2 class="font-semibold text-gray-800">Personal Information:</h2>
            </header>
            <div class="p-3">
              <div class="overflow-x-auto inline-block">
                <div class="flex mt-2 items-center">
                  <div class="text-gray-400">
                    <img
                      class="w-5"
                      src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                      alt="logo"
                    />
                    <i class="fas fa-home"></i>
                  </div>

                  <div class="text-lg ml-3">
                    <p>
                      <span class="font-bold">{{ this.$data.name }}</span>
                    </p>
                  </div>
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
                      Lives in
                      <span class="font-bold">{{ this.$data.address }}</span>
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
                    <p>{{ this.$data.contactNumber }}</p>
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
                    <p>{{ this.$data.gender }}</p>
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
                    <p>{{ this.$data.age }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- vaxx card -->
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
              <img :src="vaccinationCard"/>
            </div>

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
                @change="previewVaxx"
              />
              <div
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="vaccination_card"
              >
                Vaccination Card Captured in Landscape
              </div>
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
              <img :src="validID" class="preview"/>
            </div>

            <div>
              <label
                class="
                  block
                  text-sm
                  font-medium
                  text-gray-900
                  dark:text-gray-300
                "
                for="validID_cards"
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
                aria-describedby="validID"
                id="validID_cards"
                type="file"
                accept="image/*"
                @change="previewValidID"
              />
              <div
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="vaccination_card"
              >
                Valid ID Captured in Landscape
              </div>
            </div>

            </div>

          </div>
        <div class="flex pb-4 mt-4 items-center border-b flex w-48">
          <button
            class="py-2 rounded flex-1 bg-green-500 text-white"
            @click="submitModal=true"
          >
            <i class="fas fa-plus-circle"></i> Submit
          </button>
          <button
            class="ml-1 py-2 rounded flex-1 bg-gray-400 text-white"
            @click="cancel"
          >
            <i class="fas fa-plus-circle"></i> Back
          </button>
        </div>
      </section>
    </div>
  </div>


    <div
    v-if="submitModal"
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
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal" @click="submitModal=false">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
            <div class="p-6 text-center">
                <svg class="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to share you information?</h3>
                <button data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" @click="submitData">
                    Yes, I'm sure
                </button>
                <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="submitModal=false">No, cancel</button>
            </div>
             </div>
        </div>
    </div>
  </div>


    <div
    v-if="applicationSentModal"
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
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal" @click="cancel">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
            <div class="p-6 text-center">
                <svg class="mx-auto mb-4 w-14 h-14 text-green-400 dark:text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 13l4 4L19 7"
				></path></svg>
                <h3 class=" text-lg font-normal text-gray-500 dark:text-gray-400">Application Submitted. </h3>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Please wait for the confirmation </h3>
                <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="cancel">Okay</button>
            </div>
             </div>
        </div>
    </div>
  </div>

<div
v-if="errorImageModal"
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
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal" @click="errorImageModal=false">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
            <div class="p-6 text-center">
                <svg class="mx-auto mb-4 w-14 h-14 text-red-400 dark:text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
                <h3 class=" text-lg font-normal text-gray-500 dark:text-gray-400">Something Went Wrong. </h3>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Please Check if you have provided Image. </h3>
                <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="errorImageModal=false">Okay</button>
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
} from "firebase/firestore";

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default {
  data() {
    return {
      errorImageModal: false,
      applicationSentModal: false,
      submitModal: false,
      vaccinationCard: null,
      vaccinationData: null,
      validID: null,
      validIDData: null,
      userID: null,
      userRefer: null,
      name: "",
      gender: "",
      age: "",
      address: "",
      contactNumber: "",
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
          qrStatus: "Pending Application",
          qrData: null,
          type: "passenger",
          vaccinationLink: null,
          validIdLink: null,
          password: "",
          loginToken: '',
        },
      },
    };
  },
  methods: {
    async getUser() {
      const db = getFirestore(app);
      const userRef = collection(db, "user");

      let usersRef = doc(userRef, this.userID);
      this.$data.userRefer = usersRef;

      let user = await getDoc(this.$data.userRefer);

      let userData = user.data();

if(userData.userInfo.loginToken == "Yes"){

this.$data.name =
        userData.userInfo.firstName + " " + userData.userInfo.lastName;
      this.$data.address =
        userData.userInfo.purok +
        ", " +
        userData.userInfo.baranggay +
        ", " +
        userData.userInfo.municipality;
      this.$data.age = userData.userInfo.age + " Years Old";
      this.$data.gender = userData.userInfo.gender;
      this.$data.contactNumber = "+63" + userData.userInfo.phoneNumber;

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
      this.$data.user.userInfo.loginToken = userData.userInfo.loginToken;
      }
      else if(userData.userInfo.loginToken == "No"){
        this.$router.push(`/passenger/login`)
      }
      else{
        this.$router.push(`/passenger/login`)
      }


      // data setting for collection
    },

    cancel() {
      this.$router.push(`/passenger/home/${this.$data.userID}`);
    },

    submitData() {
      if(this.$data.user.userInfo.vaccinationLink == "" | this.$data.user.userInfo.vaccinationLink == null | this.$data.user.userInfo.validIdLink == "" | this.$data.user.userInfo.validIdLink == null){
        this.errorImageModal = true;
        this.submitModal = false;
      }
      else{
      var randomstring = require("randomstring");
      let id = randomstring.generate({
        length: 30,
        charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      });
      console.log(id); 

      const db = getFirestore(app);
      this.$data.user.userInfo.qrStatus = "Pending Application"
      setDoc(doc(db, "qr-application", id), this.$data.user);

      setDoc(
        doc(db, "user", this.$data.userID),
        this.$data.user
      );
      this.applicationSentModal=true;
      }
    },

    previewVaxx(event) {
      var input = event.target;

      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = () => {
          this.vaccinationData = event.target.files[0];
          this.uploadVaccineCard();
        };

        reader.readAsDataURL(input.files[0]);
      }
    },

    previewValidID(event){
      var input = event.target;

      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = () => {
          this.validIDData = event.target.files[0];
          this.uploadValidID();
        };

        reader.readAsDataURL(input.files[0]);
      }
    },


    uploadVaccineCard(){
      const storage = getStorage(app);

           // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: "image/jpeg",
      };
      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(
        storage,
        "proofs/" + `${this.$data.contactNumber}/` + "vaccinationCard/" + this.vaccinationData.name
      );
      const uploadTask = uploadBytesResumable(
        storageRef,
        this.vaccinationData,
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
            this.vaccinationCard = downloadURL;
            this.$data.user.userInfo.vaccinationLink = downloadURL;
            console.log("Link:" + this.$data.user.userInfo.vaccinationLink);
          });
        }
      );
    },

    uploadValidID(){
      const storage = getStorage(app);

           // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: "image/jpeg",
      };
      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(
        storage,
        "proofs/" + `${this.$data.contactNumber}/` + "ID/" + this.validIDData.name
      );
      const uploadTask = uploadBytesResumable(
        storageRef,
        this.validIDData,
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
            this.validID = downloadURL;
            this.$data.user.userInfo.validIdLink = downloadURL;
            console.log("Link:" + this.$data.user.userInfo.validIdLink);
          });
        }
      );
    },


  },

  created() {
    let id = this.$route.params.phoneId;
    this.$data.userID = id;
    this.getUser();
  },
};
</script>