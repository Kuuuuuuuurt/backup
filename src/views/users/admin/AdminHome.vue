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
      Trafex
    </a>

    <!-- List of nav item -->
   <div
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
      <button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png"
          style="height: 25px"
          alt=""
          class="mr-2"
          loading="lazy"
        />
      </button>
      <button>
        <img
          src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png"
          style="height: 25px"
          alt=""
          class="mr-2"
          loading="lazy"
        />
      </button>
      <button @click="logoutModal=true">
        <img
          src="https://cdn-icons-png.flaticon.com/512/450/450387.png"
          style="height: 25px"
          alt=""
          class="mr-2"
          loading="lazy"
        />
      </button>
    </div>
  </nav>

  <div class="py-16">
    <div class="container m-auto px-6 text-gray-500 md:px-12 xl:px-0">
      <div class="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
        <div class="rounded-2xl px-8 py-12 sm:px-12 lg:px-8 h-30">
          <div class="mb-12 space-y-4" @click="toApplication">
            <div
              class="
                bg-white
                max-w-sm
                mx-auto
                rounded-2xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition
                duration-500
                transform
                hover:scale-105
                cursor-pointer
              "
            >
              <div class="h-20 bg-red-500 flex items-center justify-between">
                <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">
                  A
                </h1>
                <p class="mr-20 text-white text-lg">Qr-code Application</p>
                <p class="mr-4 text-white font-thin text-lg">Click</p>
              </div>

              <p class="py-6 text-lg tracking-wide ml-16">
                View Applications
              </p>
              <!-- <hr > -->
              <div class="flex justify-between px-5 mb-2 text-sm text-gray-600">
                <p>View Record</p>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-2xl px-8 py-12 sm:px-12 lg:px-8">
          <div class="mb-12 space-y-4" @click="toRecords">
            <div
              class="
                bg-white
                max-w-sm
                mx-auto
                rounded-2xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition
                duration-500
                transform
                hover:scale-105
                cursor-pointer
              "
            >
              <div class="h-20 bg-green-500 flex items-center justify-between">
                <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">
                  B
                </h1>
                <p class="mr-20 text-white text-lg">Entry Record</p>
                <p class="mr-4 text-white font-thin text-lg">Click</p>
              </div>

              <p class="py-6 text-lg tracking-wide ml-16">
                View Records
              </p>
              <!-- <hr > -->
              <div class="flex justify-between px-5 mb-2 text-sm text-gray-600">
                <p>View Record</p>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-2xl px-8 py-12 sm:px-12 lg:px-8">
          <div class="mb-12 space-y-4" @click="toReports">
            <div
              class="
                bg-white
                max-w-sm
                mx-auto
                rounded-2xl
                overflow-hidden
                shadow-lg
                hover:shadow-2xl
                transition
                duration-500
                transform
                hover:scale-105
                cursor-pointer
              "
            >
              <div class="h-20 bg-blue-500 flex items-center justify-between">
                <h1 class="text-white ml-4 border-2 py-2 px-4 rounded-full">
                  C
                </h1>
                <p class="mr-20 text-white text-lg">Reports</p>
                <p class="mr-4 text-white font-thin text-lg">Click</p>
              </div>

              <p class="py-6 text-lg tracking-wide ml-16">
                View Records
              </p>
              <!-- <hr > -->
              <div class="flex justify-between px-5 mb-2 text-sm text-gray-600">
                <p>View Reports</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

   <div
   v-if="logoutModal"
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
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal" @click="logoutModal=false">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
            </button>
            <div class="p-6 text-center">
                <svg class="mx-auto mb-4 w-14 h-14 text-red-400 dark:text-red-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to logout?</h3>
                <button data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" @click="logout">
                    Yes, I'm sure
                </button>
                <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="logoutModal=false">No, cancel</button>
            </div>
             </div>
        </div>
    </div>
  </div>
</template>

<script>
import app from '../../../firebase/auth-individual/firebase'
import {signOut, getAuth} from 'firebase/auth'
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
export default {
  data(){
    return{
      logoutModal: false,
      id: "",
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
   async getUser(){
     const db = getFirestore(app);
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
   toApplication(){
     this.$router.push(`/admin-application/${this.id}`);
   },
   toRecords(){
     this.$router.push(`/admin-entry-record/${this.id}`);
   },
   toReports(){
     this.$router.push(`/admin-report/${this.id}`)
   },
   logout(){
      const auth = getAuth(app);
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$data.user.loginToken = "No"
          setDoc(this.$data.reference, this.$data.user);
          this.$router.push("/admin-login");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
   }

 },

 created(){
   let id = this.$route.params.id;
   this.id = id;
   this.getUser();
 }
}
</script>