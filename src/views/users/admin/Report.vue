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
        src="../../../../src/assets/283863145_544721900556893_7583603897868082993_n.png"
        style="height: 30px"
        alt=""
        class="mr-2"
        loading="lazy"
      />
    </button>
  </nav>

  <section class="antialiased text-gray-600 mt-16 px-4">
    <div class="flex flex-col justify-center h-full">
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
        "
      >
        <header class="px-5 py-4 border-b border-gray-100">
          <label
            for="countries"
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-400
            "
            >Select reports</label
          >
          <div class="flex items-center justify-center">
            <select
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
            >
              <option>Passenger Reports</option>
              <option>Operator Reports</option>
            </select>

            <button
              type="button"
              class="
                text-blue-700
                border border-blue-700
                hover:bg-blue-700 hover:text-white
                focus:ring-4 focus:outline-none focus:ring-blue-300
                font-medium
                rounded-full
                text-sm
                p-2.5
                text-center
                inline-flex
                items-center
                dark:border-blue-500
                dark:text-blue-500
                dark:hover:text-white
                dark:focus:ring-blue-800
              "
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead
                class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
              >
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Report ID</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Name</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Contact Number</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Status</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Action</div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                <tr v-for="report in reports" :key="report.id">
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">{{ report.id }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">{{ report.name }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">{{ report.phoneNumber }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      {{ report.status }}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">
                      <router-link
                        class="
                          bg-white
                          hover:bg-gray-100
                          text-sm text-green-800
                          font-semibold
                          py-1
                          px-2
                          rounded
                          shadow
                        "
                        :to="{
                          path: `/admin-report/view-report/${this.id2}/${report.id}`,
                        }"
                        >View
                      </router-link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div
        class="
          mt-5
          w-full
          max-w-2xl
          mx-auto
          bg-white
          shadow-lg
          rounded-sm
          border border-gray-200
        "
      >
        <header class="px-5 py-4 border-b border-gray-100">
          <label
            for="countries"
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-900
              dark:text-gray-400
            "
            >Select reports</label
          >
          <div class="flex items-center justify-center">
            <select
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
            >
              <option>Operator Reports</option>
              <option>Passenger Reports</option>
            </select>

            <button
              type="button"
              class="
                text-blue-700
                border border-blue-700
                hover:bg-blue-700 hover:text-white
                focus:ring-4 focus:outline-none focus:ring-blue-300
                font-medium
                rounded-full
                text-sm
                p-2.5
                text-center
                inline-flex
                items-center
                dark:border-blue-500
                dark:text-blue-500
                dark:hover:text-white
                dark:focus:ring-blue-800
              "
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead
                class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
              >
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Report ID</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Name</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Contact Number</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Status</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-center">Action</div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                <tr v-for="rep in operatorReports" :key="rep.id">
                  <td class="p-2 whitespace-nowrap">
                    <div class="font-medium text-gray-800">{{ rep.id }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">{{ rep.name }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">{{ rep.phoneNumber }}</div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium text-green-500">
                      {{ rep.status }}
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-lg text-center">
                      <router-link
                        class="
                          bg-white
                          hover:bg-gray-100
                          text-sm text-green-800
                          font-semibold
                          py-1
                          px-2
                          rounded
                          shadow
                        "
                        :to="{
                          path: `/admin-report/operator/${this.id2}/${rep.id}`,
                        }"
                        >View
                      </router-link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import app from "../../../firebase/db/firebase";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
export default {
  data() {
    return {
      operatorReports: [],
      reports: [],
      id: "",
      id2: "",
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
    async getReports() {
      const db = getFirestore(app);
      //passenger
      const dataRef = collection(db, "reports");
      let reportSnap = await getDocs(dataRef);

      let reports = [];
      reportSnap.forEach((report) => {
        let reportData = report.data();
        reports.push(reportData.reportInfo);
        this.$data.id = reportData.reportInfo.id;
      });
      this.$data.reports = reports;

      //operator
      const opRef = collection(db, "operator-reports");
      let opSnap = await getDocs(opRef);

      let operatorReports = [];
      opSnap.forEach((rep) => {
        let opData = rep.data();
        operatorReports.push(opData.reportInfo);
      });
      this.$data.operatorReports = operatorReports;

      //
      const userRef = collection(db, "user");

      let usersRef = doc(userRef, this.id2);
      this.$data.reference = usersRef;
      let user = await getDoc(this.$data.reference);

      let userData = user.data();

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

    home() {
      this.$router.push(`/admin-home/${this.id2}`);
    },
  },

  created() {
    let id = this.$route.params.id;
    this.id2 = id;
    this.getReports();
  },
};
</script>