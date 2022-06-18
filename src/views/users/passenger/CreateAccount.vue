<template>
  <div>
    <div
      action=""
      class="form bg-white p-6 my-10 relative"
      @submit.prevent="register"
    >
      <h3 class="text-2xl text-gray-900 font-semibold">Create an Account!</h3>
      <p class="text-gray-600">Please enter your information below!</p>
      <div class="flex space-x-5 mt-3">
        <input
          type="text"
          placeholder="First Name"
          class="border p-2 w-1/2"
          v-model="user.userInfo.firstName"
          required
          autocapitalize
        />
        <input
          type="text"
          placeholder="Last Name"
          class="border p-2 w-1/2"
          v-model="user.userInfo.lastName"
          required
          autocapitalize
        />
      </div>
      <input
        type="tel"
        placeholder=""
        class="border p-2 w-full mt-3"
        disabled
        v-model="user.userInfo.phoneNumber"
        required
      />
      <div class="flex space-x-5 mt-3">
        <select
          v-model="user.userInfo.gender"
          id="gender"
          class="border p-2 w-1/2"
        >
          <option>Male</option>
          <option>Female</option>
          <option>Others</option>
        </select>
        <input
          type="tel"
          placeholder="Age"
          class="border p-2 w-1/2"
          v-model="user.userInfo.age"
          required
        />
      </div>
      <div class="flex space-x-5 mt-3">
        <input
          type="text"
          placeholder="Purok"
          class="border p-2 w-1/2"
          v-model="user.userInfo.purok"
          required
          autocapitalize
        />
        <input
          type="text"
          placeholder="Baranggay"
          class="border p-2 w-1/2"
          v-model="user.userInfo.baranggay"
          required
          autocapitalize
        />
      </div>
      <div class="flex space-x-5 mt-3">
        <input
          type="text"
          placeholder="Municipality"
          class="border p-2 w-1/2"
          v-model="user.userInfo.municipality"
          required
          autocapitalize
        />
        <input type="tel" placeholder="" class="p-2 w-1/2 bg-white" disabled />
      </div>

      <div class="flex space-x-5 mt-3">
        <input
          type="password"
          placeholder="Password"
          class="border p-2 w-1/2"
          v-model="user.userInfo.password"
          required
        />
        <input type="tel" placeholder="" class="p-2 w-1/2 bg-white" disabled />
      </div>
      <p class="font-bold text-sm mt-3">Privacy Policy *</p>
      <div class="flex items-baseline space-x-2 mt-2">
        <p class="text-gray-600 text-sm">
          by clicking create account, you agree to our
          <a class="text-blue-700" @click="privacyPolicyModal = true"
            >Privay Policy.</a
          >
        </p>
      </div>
      <button
        value="Submit"
        class="
          w-full
          mt-6
          bg-blue-600
          hover:bg-blue-500
          text-white
          font-semibold
          p-3
        "
      >
        Create Account
      </button>
    </div>
       <p class="text-sm text-center text-gray-400">
            Don&#x27;t have an account yet?
            <a
              href="/passenger/login"
              class="
                font-semibold
                text-indigo-500
                focus:text-indigo-600 focus:outline-none focus:underline
              "
              >Sign in</a
            >.
          </p>
  </div>

  <div
    v-if="privacyPolicyModal"
    class="
      main-modal
      fixed
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
    <div
      class="
        modal
        fade
        fixed
        top-0
        left-0
        w-full
        h-full
        outline-none
        overflow-x-hidden overflow-y-auto
      "
      id="exampleModalXl"
      tabindex="-1"
      aria-labelledby="exampleModalXlLabel"
      aria-modal="true"
      role="dialog"
    >
      <div class="modal-dialog modal-xl relative w-auto pointer-events-none">
        <div
          class="
            modal-content
            border-none
            shadow-lg
            relative
            flex flex-col
            w-full
            pointer-events-auto
            bg-white bg-clip-padding
            rounded-md
            outline-none
            text-current
          "
        >
          <div
            class="
              modal-header
              flex flex-shrink-0
              items-center
              justify-between
              p-4
              border-b border-gray-200
              rounded-t-md
            "
          >
            <h5
              class="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalXlLabel"
            >
              Privacy Policy
            </h5>
            <button
              type="button"
              @click="privacyPolicyModal = false"
              class="
                btn-close
                box-content
                w-4
                h-4
                p-1
                text-black
                border-none
                rounded-none
                opacity-50
                focus:shadow-none focus:outline-none focus:opacity-100
                hover:text-black hover:opacity-75 hover:no-underline
              "
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              X
            </button>
          </div>
          <div class="modal-body relative p-4">
            <div class="p-6 space-y-6">
              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                The City of Ozamiz ("us", "we", or "our") operates the TRAFEX
                System (hereinafter referred to as “Service”). We are committed
                to protecting your privacy as a Ozamiz resident, and even as a
                non-resident of this City.
              </p>
              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Our Data Privacy Statement governs your visit to this site and
                explains how we collect, safeguard and disclose information that
                results from your use of our Service. The confidentiality of
                your information remains our top priority. We shall exert all
                reasonable efforts to protect it against unauthorized use or
                disclosure.
              </p>

              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-700
                  dark:text-gray-600
                  font-bold
                  text-xl
                "
              >
                How we collect information
              </p>
              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                The transportation team of the City collects and processes your
                personal information only upon your express consent, which
                refers to any freely given, specific, informed indication of
                will, whereby you agree to the collection and processing of your
                personal information. We process your personal information in
                accordance with law and this Data Privacy Statement.
              </p>
              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                When you provide us with personal information by which you can
                be reasonably identified, you can be assured that your personal
                information will be used only in accordance with this Data
                Privacy Statement.
              </p>

              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-700
                  dark:text-gray-600
                  font-bold
                  text-xl
                "
              >
                Types of personal information that we may collect:
              </p>
              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                In accessing our site, you are to voluntarily provide us with
                certain personally identifiable information that can be used to
                contact or identify you ("Personal Data"). Personally
                identifiable information may include, but is not limited to:
              </p>

              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-700
                  dark:text-gray-600
                  font-bold
                  text-xl
                "
              >
                For Passenger:
              </p>
              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                1. Your name and other particulars such as: your gender, contact
                details, address
              </p>

              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-700
                  dark:text-gray-600
                  font-bold
                  text-xl
                "
              >
                For Operator:
              </p>
              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                1. Name of the Owner, its address and contact details;
              </p>
              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                2. Vehicle informations
              </p>

              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-700
                  dark:text-gray-600
                  font-bold
                  text-xl
                "
              >
                How your personal data may be used, stored and shared
              </p>
              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                Your personal data may be used, stored, processed, shared and
                disclosed only by the researcher. We shall ensure that the
                personal information collected are used only for the purpose of
                implementing our programs and initiatives specifically COVID-19
                contact-tracing measures and the integration of the TRAFEX
                System QR Code.
              </p>

              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-700
                  dark:text-gray-600
                  font-bold
                  text-xl
                "
              >
                Retention of Data
              </p>
              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                We have put in place appropriate physical, organizational, and
                technical controls to maintain the confidentiality, integrity,
                and availability of your personal data. All personal data
                collected for the purpose of implementation of programs and
                projects of the Transportation group of the City shall be stored
                only for as long as necessary or until the purpose for their
                processing no longer exists. After this duration, the
                Transportation group of the City shall dispose your personal
                information in a secure manner in order to prevent further
                processing, unauthorized access, or disclosure to any other
                party.
              </p>

              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-700
                  dark:text-gray-600
                  font-bold
                  text-xl
                "
              >
                Transfer of Data
              </p>
              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                The researcher will take all the steps reasonably necessary to
                ensure that your data is treated securely and in accordance with
                this Data Privacy Statement and no transfer of your personal
                data will take place to an organization or a country outside the
                Philippines.
              </p>
              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                If you are a resident outside the Philippines and choose to
                provide information to us, please note that we transfer the
                data, including personal data, to the Philippines and process it
                here. Your consent to this Data Privacy Statement followed by
                your submission of such information represents your agreement to
                that transfer.
              </p>

              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-700
                  dark:text-gray-600
                  font-bold
                  text-xl
                "
              >
                Your rights under applicable laws
              </p>
              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                1. Right to be informed – you may demand the details as to how
                your personal information is being processed or have been
                processed by us;
              </p>
              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                2. Right to access – upon written request, you may demand
                reasonable access to your personal information, which may
                include the contents of your processed personal information, the
                manner of processing, sources where they were obtained,
                recipients and reason of disclosure;
              </p>
              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                3. Right to dispute – you may dispute inaccuracy or error in
                your personal information in our systems through our Data
                Protection Officer;
              </p>

              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                4. Right to object – you may suspend, withdraw, and remove your
                personal information in certain further processing, upon demand;
              </p>

              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                5. Right to data erasure – based on reasonable grounds, you have
                the right to suspend, withdraw or order blocking, removal or
                destruction of your personal data from our filing system,
                without prejudice to our continuous processing for health,
                legal, and regulatory purposes;
              </p>

              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                6. Right to secure data portability – you have the right to
                obtain from us your personal information in an electronic or
                structured format that is commonly used and allows for further
                use;
              </p>

              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                7. Right to be indemnified for damages – as data subject, you
                have every right to be indemnified for any damages sustained due
                to such violation of your right to privacy through inaccurate,
                false, unlawfully obtained or unauthorized use of your
                information; and,
              </p>

              <p
                class="
                  text-base
                  leading-relaxed
                  text-gray-500
                  dark:text-gray-400
                "
              >
                8. Right to file a complaint – you may file your complaint or
                any concerns with our office at the City Hall of Ozamiz and/or
                the National Privacy Commission through www.privacy.gov.ph.
              </p>
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
                data-modal-toggle="extralarge-modal"
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
                  dark:bg-blue-600
                  dark:hover:bg-blue-700
                  dark:focus:ring-blue-800
                "
                @click="privacyPolicyModal = false"
              >
                I accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import app from "../../../firebase/db/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, setDoc, doc } from "firebase/firestore";
export default {
  data() {
    return {
      privacyPolicyModal: false,
      user: {
        userInfo: {
          phoneNumber: "",
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          municipality: "",
          baranggay: "",
          purok: "",
          qrStatus: "No Application",
          qrData: null,
          type: "passenger",
          password: "",
          loginToken: "Yes",
          vaccinationLink: null,
          validIdLink: null,
        },
      },
    };
  },

  methods: {
    register() {
      const emailPhone = this.$data.user.userInfo.phoneNumber + "@gmail.com";
      const password = this.$data.user.userInfo.password;
      const auth = getAuth(app);
      const db = getFirestore(app);

      createUserWithEmailAndPassword(auth, emailPhone, password)
        .then(() => {
          //authentication

          //firestoredb
          const encrypt = window.btoa(password);
          this.$data.user.userInfo.password = encrypt;
          let id = this.$data.user.userInfo.phoneNumber;
          setDoc(doc(db, "user", id), this.$data.user);
          this.$router.push(`/passenger/home/${id}`);
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/user-already-in-used":
              alert("Email already in used");
              break;
            case "auth/operation-not-allowed":
              alert("Operation not allowed");
              break;
            case "auth/weak-password":
              alert("Weak Password");
              break;
            case "auth/invalid-email":
              alert("Invalid email");
              break;
            default:
              alert("Something went wrong");
          }
        });
    },
  },

  created() {
    let phone = this.$route.params.phone;
    this.$data.user.userInfo.phoneNumber = phone;
  },
};
</script>