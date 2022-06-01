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
      @click="home"
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
        src="https://cdn-icons-png.flaticon.com/512/1008/1008001.png"
        style="height: 25px"
        alt=""
        class="mr-2"
        loading="lazy"
      />
      TRAFEX
    </button>
  </nav>

  <section class="antialiased text-gray-600 px-2 mt-10">
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
          <h2 class="font-semibold text-gray-800">
            QR Code Application Approval
          </h2>
        </header>
        <div class="p-3">
          <div class="overflow-x-auto">
            <table class="table-auto w-full">
              <thead
                class="text-xs font-semibold uppercase text-gray-400 bg-gray-50"
              >
                <tr>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Application ID</div>
                  </th>
                   <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Name</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Status</div>
                  </th>
                  <th class="p-2 whitespace-nowrap">
                    <div class="font-semibold text-left">Action</div>
                  </th>
                </tr>
              </thead>
              <tbody class="text-sm divide-y divide-gray-100">
                <tr v-for="user in users" :key="user.id">
                  <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="font-medium text-gray-800">
                        {{ user.id }}
                      </div>
                    </div>
                  </td>
                   <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="font-medium text-gray-800">
                        {{ user.userInfo.firstName }}
                      </div>
                    </div>
                  </td>
                   <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="font-medium text-gray-800">
                        {{}}
                      </div>
                    </div>
                  </td>
                  <td class="p-2 whitespace-nowrap">
                    <div class="text-left">
                      <router-link
                        class="
                          btn
                          text-green-600
                          dark:text-green-500
                          hover:underline
                        "
                        :to="{ path: `/admin-check/${this.id}/${user.id}` }"
                        >View</router-link
                      >
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
import { getDocs, collection, getFirestore, getDoc, doc } from "firebase/firestore";
export default {
  data() {
    return {
      users: [],
      id: '',
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
    async fetchUser() {
      const db = getFirestore(app);
      const userRef = collection(db, "qr-application");

      let userSnapshot = await getDocs(userRef);
      let users = [];
      userSnapshot.forEach((user) => {
        let userData = user.data();
        userData.id = user.id;
        users.push(userData);
      });
      this.$data.users = users;

       const userRefs = collection(db, "user");
       let usersRef = doc(userRefs, this.id);
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
      this.$router.push(`/admin-home/${this.id}`)
    }
  },

  created() {
    const id = this.$route.params.id;
    this.id = id;
    this.fetchUser();
  },
};
</script>




<style scoped>
.table {
  border-spacing: 0 15px;
}

i {
  font-size: 1rem !important;
}

.table tr {
  border-radius: 20px;
}

tr td:nth-child(n + 6),
tr th:nth-child(n + 6) {
  border-radius: 0 0.625rem 0.625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
  border-radius: 0.625rem 0 0 0.625rem;
}
</style>