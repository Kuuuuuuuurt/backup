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

  <section class="antialiased text-gray-600 mt-14 px-4">
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
          <h2 class="font-semibold text-gray-800">Reports</h2>
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
                        :to="{ path: `/admin-report/view-report/${this.id2}/${report.id}` }"
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
import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";
export default {
  data() {
    return {
      reports: [],
      id: "",
      id2: '',
       reference: '',
       user:{
          userName: '',
          password: '',
          type: '',
          loginToken:'',
          
      }
    };
  },

  methods: {
    async getReports() {
      const db = getFirestore(app);

      const dataRef = collection(db, "reports");
      let reportSnap = await getDocs(dataRef);

      let reports = [];
      reportSnap.forEach((report) => {
        let reportData = report.data();
        reports.push(reportData.reportInfo);
        this.$data.id = reportData.reportInfo.id;
      });
      this.$data.reports = reports;



      //
      const userRef = collection(db, "user");

      let usersRef = doc(userRef, this.id2);
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

    home(){
      this.$router.push(`/admin-home/${this.id2}`)
    }
  },

  created() {
    let id = this.$route.params.id;
    this.id2 = id;
    this.getReports();
  },
};
</script>