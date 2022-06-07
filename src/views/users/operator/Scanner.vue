<template>
  <div>
    <qrcode-stream class="h-100vh"> </qrcode-stream>
  </div>
  <div   
   class="
      main-modal
      fixed
      w-full
      inset-0
      z-50
      animated
      fadeIn
      faster
    "
    style="background: rgba(0, 0, 0, 0.7)">
    <div><button class="mt-2 ml-2" @click="back">
         <svg
                    viewBox="0 0 24 24"
                    class="h-10 w-10 fill-current text-white"
                  >
                   <path fill-rule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                  </svg>
    </button>
    </div>
  <div
    class="
      main-modal
      fixed
      w-full
      inset-0
      z-50
      flex
      justify-center
      items-center
      animated
      fadeIn
      faster
    "
  >
    <div>
      <div>
        <qrcode-stream
          @decode="onDecode"
          :track="drawOutline"
          @init="onInit"
        ></qrcode-stream>
      </div>
    </div>
  </div>
  </div>

  <div
    v-if="resultModal"
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
    <div class="relative p-4 w-full max-w-4xl h-full md:h-auto">
      <!-- Modal content -->
      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
          class="
            flex
            justify-between
            items-center
            p-5
            rounded-t
            border-b
            dark:border-gray-600
          "
        >
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Insert User
          </h3>
          <button
            type="button"
            class="
              text-gray-400
              bg-transparent
              hover:bg-gray-200 hover:text-gray-900
              rounded-lg
              text-sm
              p-1.5
              ml-auto
              inline-flex
              items-center
              dark:hover:bg-gray-600 dark:hover:text-white
            "
            data-modal-toggle="large-modal"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <!-- Modal body -->
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
            v-model="customerData.name"
            disabled
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
                required
                v-model="customerData.temperature"
              />
              <p class="text-red-600">{{ tempError }}</p>
            </div>
          </div>

          <div class="mt-2">
            <label class="block text-left" style="max-width: 300px">
              <span class="text-gray-700">Health Declaration</span>
              <select
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
                multiple
                v-model="customerData.symptomsFelt.symptoms"
              >
              <option>None</option>
                <option>Fever</option>
                <option>Dry Cough</option>
                <option>Fatigue</option>
                <option>Aches and Pains</option>
                <option>Runny Nose</option>
                <option>Sore Throat</option>
                <option>Shortness of Breath</option>
                <option>Diarrhea</option>
                <option>Headache</option>
                <option>Loss of Smell and Taste</option>
              </select>
            </label>
            {{}}
          </div>
        </div>
        <!-- Modal footer -->
        <div
          class="
            flex
            items-center
            p-6
            space-x-2
            rounded-b
            border-t border-gray-200
            dark:border-gray-600
          "
        >
          <button
            data-modal-toggle="large-modal"
            type="button"
            class="
              text-white
              bg-blue-700
              hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300
              font-medium
              rounded-lg
              text-sm
              px-5
              py-2.5
              text-center
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            "
            @click="submit"
          >
            Insert
          </button>
          <button
            data-modal-toggle="large-modal"
            type="button"
            class="
              text-gray-500
              bg-white
              hover:bg-gray-100
              focus:ring-4 focus:outline-none focus:ring-gray-200
              rounded-lg
              border border-gray-200
              text-sm
              font-medium
              px-5
              py-2.5
              hover:text-gray-900
              focus:z-10
              dark:bg-gray-700
              dark:text-gray-300
              dark:border-gray-500
              dark:hover:text-white
              dark:hover:bg-gray-600
              dark:focus:ring-gray-600
            "
            @click="closeModal"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from "vue3-qrcode-reader";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import app from "../../../firebase/db/firebase";
export default {
  components: {
    QrcodeStream,
  },

  data() {
    return {
      tempError: "",
      scannerToggle: true,
      resultModal: false,
      estabID: "",
      result: {
        url: "",
      },
      error: "",
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
        symptomsFelt: {
          symptoms: [],
        },
      },
    };
  },

  methods: {
    onDecode(result) {
      this.result.url = result;
      console.log("result", result);
      this.$data.resultModal = true;
      this.$data.scannerToggle = false;
      this.getScannedResult();
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permission";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        } else if (error.name === "InsecureContextError") {
          this.error =
            "ERROR: Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.";
        } else {
          this.error = `ERROR: Camera error (${error.name})`;
        }
      }
    },
    drawOutline(decodeData, context) {
      var points = [];
      console.log(decodeData);
      for (var k in decodeData) {
        switch (k) {
          case "topLeftCorner":
            points[0] = decodeData[k];
            break;
          case "topRightCorner":
            points[1] = decodeData[k];
            break;
          case "bottomRightCorner":
            points[2] = decodeData[k];
            break;
          case "bottomLeftCorner":
            points[3] = decodeData[k];
            break;
          default:
            break;
        }
      }
      context.lineWidth = 10;
      context.strokeStyle = "green";
      context.beginPath();
      console.log(points[0]);
      context.moveTo(points[0].x, points[0].y);
      for (const { x, y } of points) {
        context.lineTo(x, y);
      }
      context.lineTo(points[0].x, points[0].y);
      context.closePath();
      context.stroke();
    },

    back() {
      this.$router.push(`/operator/home/${this.$data.estabID}`);
    },

    //
    async getScannedResult() {
      const db = getFirestore(app);
      const docRef = doc(db, "data-record", this.$data.result.url);
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
        console.log(this.$data.customerData.visitedEstab);
      } else {
        console.log("No");
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
        const day = `${current.getDate()}`;
        this.$data.customerData.day = day;
        this.$data.customerData.month = month;
        this.$data.customerData.year = `${current.getFullYear()}`;
      } else if (monthData == "8") {
        const month = "August";
        const day = `${current.getDate()}`;
        this.$data.customerData.day = day;
        this.$data.customerData.month = month;
        this.$data.customerData.year = `${current.getFullYear()}`;
      } else if (monthData == "9") {
        const month = "September";
        const day = `${current.getDate()}`;
        this.$data.customerData.day = day;
        this.$data.customerData.month = month;
        this.$data.customerData.year = `${current.getFullYear()}`;
      } else if (monthData == "10") {
        const month = "Ocotber";
        const day = `${current.getDate()}`;
        this.$data.customerData.day = day;
        this.$data.customerData.month = month;
        this.$data.customerData.year = `${current.getFullYear()}`;
      } else if (monthData == "11") {
        const month = "November";
        const day = `${current.getDate()}`;
        this.$data.customerData.day = day;
        this.$data.customerData.month = month;
        this.$data.customerData.year = `${current.getFullYear()}`;
      } else if (monthData == "12") {
        const month = "December";
        const day = `${current.getDate()}`;
        this.$data.customerData.day = day;
        this.$data.customerData.month = month;
        this.$data.customerData.year = `${current.getFullYear()}`;
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

        console.log(this.$data.customerData);
        this.closeModal();
      }
    },

    closeModal() {
      this.$data.resultModal = false;
      this.$data.scannerToggle = true;
    },

    async getEstab() {
      const db = getFirestore(app);
      const estabRef = doc(db, "user", this.$data.estabID);
      const estabSnap = await getDoc(estabRef);
      let estabData = estabSnap.data();
      this.$data.customerData.visitedEstab = estabData.userInfo.vehicleID;

      if (estabData.userInfo.loginToken == "Yes") {
        console.log();
      } else if (estabData.userInfo.loginToken == "No") {
        this.$router.push("/operator/login");
      } else {
        this.$router.push("/operator/login");
      }
    },
  },

  created() {
    let id = this.$route.params.estabId;
    this.$data.estabID = id;
    this.getEstab();
  },
};
</script>

<style scoped>
.h-100vh {
  height: 750px !important;
}
</style>