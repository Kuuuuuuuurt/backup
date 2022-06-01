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
        src="https://cdn-icons-png.flaticon.com/512/1008/1008001.png"
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
      <button @click="notificationModal=true" class="flex">
        <p class="text-red-500">{{notifications.length}}</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3602/3602145.png"
          style="height: 25px"
          alt=""
          class="mr-2"
          loading="lazy"
        />

        
      </button>
      <button @click="editProfile">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png"
          style="height: 25px"
          alt=""
          class="mr-2"
          loading="lazy"
        />
      </button>
    </div>
  </nav>

  <div class="flex flex-wrap items-center justify-center mt-5">
    <div class="w-full md:w-3/5 bg-white p-6 mt-8">
      <div
        class="flex flex-wrap items-center justify-center -mt-5"
        v-if="showQr"
      >
        <qrcode-vue :value="value" :size="size" level="H" />
        <!-- <VueQRCodeComponent text=""/> -->
      </div>
      <div class="flex items-center border-b py-2"></div>
      <div class="mt-2 text-2xl">
        <p class="text-center">
          <span class="font-bold">{{ user.name }}</span>
        </p>
      </div>
      <div class="flex items-center justify-center">
        <header class="flex font-light text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 rotate-90 -ml-2"
            viewBox="0 0 24 24"
            stroke="#b91c1c"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
          <p>Passenger</p>
        </header>
      </div>
      <div class="flex pb-4 mt-4 items-center border-b flex">
        <button
          class="py-2 rounded flex-1 bg-green-500 text-white"
          @click="toGenerator"
          v-if="showHide"
        >
          <i class="fas fa-plus-circle"></i> QR Application
        </button>

        <button
          class="py-2 rounded flex-1 bg-red-500 text-white"
          @click="reportProblem"
          v-if="showQr"
        >
          <i class="fas fa-plus-circle"></i> Report
        </button>
        <button
          class="ml-1 py-2 rounded flex-1 bg-gray-400 text-white"
          @click="editProfile"
        >
          <i class="fas fa-plus-circle"></i> Edit Profile
        </button>
        <button
          class="bg-gray-200 py-2 px-4 rounded ml-2"
          @click="logoutModal=true"
        >
          <img
            class="w-5"
            src="https://cdn-icons-png.flaticon.com/512/159/159707.png"
            alt="logo"
          />
        </button>
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
            Lives in <span class="font-bold">{{ user.address }}</span>
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
          <p>{{ user.phoneNumber }}</p>
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
          <p>{{ user.gender }}</p>
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
          <p>{{ user.age }}</p>
        </div>
      </div>

      <div class="flex mt-2 items-center">
        <div class="text-gray-400">
          <img
            class="w-4"
            src="https://cdn-icons-png.flaticon.com/512/3126/3126571.png"
            alt="logo"
          />
        </div>

        <div class="text-lg ml-3">
          <p>
            <span class="text-green-700 text-sm">{{ user.qrStatus }}</span>
          </p>
        </div>
      </div>

      <div class="flex mt-2 items-center">
        <div class="text-gray-400">
          <img
            class="w-4"
            src="https://cdn-icons-png.flaticon.com/512/2910/2910768.png"
            alt="logo"
          />
        </div>

        <div class="text-lg ml-3">
          <button @click="toggleEntryRecordBtn">
            <span class="text-blue-600 underline underline-offset-4">
              Entry Record</span
            >
          </button>
        </div>
      </div>
    </div>
  </div>
  <section v-show="toggleEntryRecord" class="py-1 bg-blueGray-50">
    <div class="xl:w-8/12 xl:mb-0 px-4 mx-auto">
      <div
        class="
          relative
          flex flex-col
          min-w-0
          break-words
          bg-white
          w-full
          mb-6
          shadow-lg
          rounded
        "
      >
        <div class="rounded-t mb-0 px-4 py-3 border-0">
          <div class="flex flex-wrap items-center">
            <div class="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 class="font-semibold text-base text-blueGray-700">
                Establishment Visited
              </h3>
            </div>
            <div
              class="
                relative
                w-full
                px-4
                max-w-full
                flex-grow flex-1
                text-right
              "
            >
              <button
                class="
                  bg-indigo-500
                  text-white
                  active:bg-indigo-600
                  text-xs
                  font-bold
                  uppercase
                  px-3
                  py-1
                  rounded
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-1
                  ease-linear
                  transition-all
                  duration-150
                "
                type="button"
                @click="viewAllEntry"
              >
                See all
              </button>
            </div>
          </div>
        </div>

        <div class="block w-full overflow-x-auto">
          <table class="items-center bg-transparent w-full border-collapse">
            <thead>
              <tr>
                <th
                  class="
                    px-6
                    bg-gray-50
                    text-blueGray-500
                    align-middle
                    border border-solid border-blueGray-100
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                  "
                >
                  Establishment name
                </th>
                <th
                  class="
                    px-6
                    bg-gray-50
                    text-blueGray-500
                    align-middle
                    border border-solid border-blueGray-100
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                  "
                >
                  Date
                </th>
                <th
                  class="
                    px-6
                    bg-gray-50
                    text-blueGray-500
                    align-middle
                    border border-solid border-blueGray-100
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                  "
                >
                  Time
                </th>
                <th
                  class="
                    px-6
                    bg-gray-50
                    text-blueGray-500
                    align-middle
                    border border-solid border-blueGray-100
                    py-3
                    text-xs
                    uppercase
                    border-l-0 border-r-0
                    whitespace-nowrap
                    font-semibold
                    text-left
                  "
                >
                  Temperature
                </th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="entry in myEntry" :key="entry.id">
                <th
                  class="
                    border-t-0
                    px-6
                    align-middle
                    border-l-0 border-r-0
                    text-xs
                    whitespace-nowrap
                    p-4
                    text-left text-blueGray-700
                  "
                >
                  {{ entry.visitedEstab }}
                </th>
                <td
                  class="
                    border-t-0
                    px-6
                    align-middle
                    border-l-0 border-r-0
                    text-xs
                    whitespace-nowrap
                    p-4
                  "
                >
                  {{ entry.month + " " + entry.day + ", " + entry.year }}
                </td>
                <td
                  class="
                    border-t-0
                    px-6
                    align-center
                    border-l-0 border-r-0
                    text-xs
                    whitespace-nowrap
                    p-4
                  "
                >
                  {{ entry.time }}
                </td>
                <td
                  class="
                    border-t-0
                    px-6
                    align-middle
                    border-l-0 border-r-0
                    text-xs
                    whitespace-nowrap
                    p-4
                  "
                >
                  <i class="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  {{ entry.temperature }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>

  <div
    v-if="reportModal"
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
    <div class="bg-white rounded-2xl border shadow-x1 p-4 max-w-lg">
      <div class="flex flex-col items-center space-y-1">
        <h1 class="font-bold text-2xl text-gray-700 w-4/6 text-center">
          Report Problem
        </h1>
        <p class="text-sm text-gray-500 text-center w-5/6">
           Please fill out the form below completely and truthfully to prevent
            unnecessary panic.
        </p>
         <form class="w-full">
            <div class="">
              <div class="">
                <label for="names" class="text-md text-gray-600"
                  >Date tested positive</label
                >
                <div class="flex">
                <select
                class="
                  border-2 rounded-lg w-full h-12 px-4
                "
                v-model="report.reportInfo.monthTested"
              >
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>

                  <select
                class="
                  border-2 rounded-lg w-full h-12 px-4
                "
                v-model="report.reportInfo.dayTested"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>

               <select
                class="
                  border-2 rounded-lg w-full h-12 px-4
                "
                v-model="report.reportInfo.yearTested"
              >
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
              </select>
              </div>
              </div>
                <div class="">
                  <label for="names" class="text-md text-gray-600"
                  >Classification</label
                >
                 <select
                class="
                  border-2 rounded-lg w-full h-12 px-4
                "
                v-model="report.reportInfo.classification"
              >
                <option>Symptomatic</option>
                <option>Pre-symptomatic</option>
                <option>Asymptomatic</option>
              </select>
              </div>

              <div class="mt-4">
                  <label for="names" class="text-md text-gray-600"
                  >RtPCR Test</label
                >
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
                @change="previewRtPCR"
              />
              <div
                class="mt-1 text-sm text-gray-500 dark:text-gray-300"
                id="vaccination_card"
              >
                RtPCR Test Captured in Landscape
              </div>
            </div>
              </div>

              <div class="mt-4">
                  <label for="names" class="text-md text-gray-600"
                  >Other Details</label
                >
                <textarea
                  class="border-2 rounded-lg w-full h-24 px-4"
                  placeholder="details"
                  v-model="report.reportInfo.message"
                ></textarea>
              </div>
            </div>
          </form>
          <div class="">
           <div class="flex justify-end pt-2 space-x-4">
          <button
            class="
              px-4
              bg-gray-200
              p-3
              rounded
              text-black
              hover:bg-gray-300
              font-semibold
            "
            @click="closeModal"
          >
            Cancel
          </button>
          <button
            class="
              px-4
              bg-green-500
              p-3
              ml-3
              rounded-lg
              text-white
              hover:bg-green-600
            "
            @click="submit"
          >
            Submit
          </button>
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
                <button data-modal-toggle="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2" @click="logoutProfile">
                    Yes, I'm sure
                </button>
                <button data-modal-toggle="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="logoutModal=false">No, cancel</button>
            </div>
             </div>
        </div>
    </div>
  </div>


   <div
   v-if="viewNotifModal"
    class="
      main-modal
      fixed
      w-full
      inset-0
      z-50
      overflow
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
            <div class="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
              <img src="https://cdn-icons-png.flaticon.com/512/2645/2645897.png" style="height: 25px" alt="">
                <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                    Notification
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="small-modal" @click="closeNotif"
                >
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <div class="">
              <div class="space-y-6 border">
                <p class="text-base leading-relaxed text-green-500 dark:text-green-400">{{notification.header}}
                </p>
                </div>
                 <div class="p-3 space-y-6">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">{{notification.notifMessage}}
                </p>
                </div>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              
                <button data-modal-toggle="small-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" @click="closeNotif">Close</button>
            </div>
        </div>
    </div>
  </div>

<div
v-if="notificationModal"
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
        w-auto
        h-full
        outline-none
        overflow-x-hidden overflow-y-auto
      "
    >
      <div class="modal-dialog relative w-auto pointer-events-none">
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
              Notification
            </h5>
            <button
              type="button"
              @click="notificationModal = false"
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


             <div class="" v-for="notif in notifications" :key="notif.id">
              <div class="bg-gray-100 p-6 space-y-6 border">
                 <img src="https://cdn-icons-png.flaticon.com/512/2645/2645897.png" style="height: 25px" alt="">
                <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">{{notif.header}}
                </p>
                <button class="text-sm text-blue-500" @click="notifID=notif.id"><button @click="view">View Details </button></button>
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
                data-modal-toggle="extralarge-modal"
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
                @click="notificationModal = false"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


  <div
  v-if="allEntryModal"
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
              Entry History
            </h5>
            <button
              type="button"
              @click="allEntryModal = false"
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

          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div
            class="inline-block min-w-full shadow rounded-lg overflow-hidden"
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Name
                  </th>
                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Contact Number
                  </th>
                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Address
                  </th>
                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Vehicle Entered
                  </th>

                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Time
                  </th>

                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Date
                  </th>

                  <th
                    class="
                      px-5
                      py-3
                      border-b-2 border-gray-200
                      bg-gray-100
                      text-left text-xs
                      font-semibold
                      text-gray-600
                      uppercase
                      tracking-wider
                    "
                  >
                    Temperature
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="entry in allEntry" :key="entry.id">
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="">
                      <div class="flex-shrink-0"></div>
                      <div class="">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {{ entry.name }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ entry.phoneNumber }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ entry.address }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <span
                      class="
                        relative
                        inline-block
                        px-3
                        py-1
                        font-semibold
                        text-green-900
                        leading-tight
                      "
                    >
                      <span
                        aria-hidden
                        class="absolute inset-0 opacity-50 rounded-full"
                      ></span>
                      <span class="relative">{{ entry.visitedEstab }}</span>
                    </span>
                  </td>

                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ entry.time }}
                    </p>
                  </td>

                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{
                      entry.month + " " + entry.day + ", " + entry.year
                      }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ entry.temperature}}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="my-2 flex sm:flex-row flex-col">
            <div class="flex flex-row mb-1 sm:mb-0">
              <div class="relative"></div>
            </div>
           </div>
          </div>
         </div>
        </div>
      </div>
    </div>

</template>

<script>
import { defineComponent } from "vue";
import QrcodeVue from "qrcode.vue";
// import VueQRCodeComponent from 'vue-qrcode-component'

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase/db/firebase";
import { getAuth, signOut } from "firebase/auth";

export default defineComponent({
  components: {
    QrcodeVue,
    // VueQRCodeComponent,
  },
  data() {
    return {
      allEntryModal: false,
      viewNotifModal: false,
      notifID: '',
      notifRefer: '',
      logoutModal: false,
      notifications: [],
      notificationModal: false,
      qrApplicationNotification: "",
      rtpcrData: '',
      rtpcrImage: '',
      reportModal: false,
      month: "",
      myEntry: [],
      allEntry: [],
      toggleEntryRecord: false,
      value: "",
      size: 200,
      selectedUser: {},
      userID: "",
      phone: "",
      userRefer: null,
      user: {
        name: null,
        address: null,
        gender: null,
        age: null,
        phoneNumber: null,
        qrStatus: "No Value",
        qrData: null,
      },
      report:{
        reportInfo:{
          name: '',
          phoneNumber: '',
          address: '',
          gender: '',
          age: '',
          dayTested: '',
          monthTested: '',
          yearTested: '',
          rtpcrImageLink: '',
          message: '',
          classification: '',
          status: "Pending",
          id: '',
        },
      },

      notification: {
        header: '',
        notifMessage: '',
        date: '',
      },

      users: {
        userInfo: {
          phoneNumber: "",
          firstName: "",
          lastName: "",
          age: "",
          gender: "",
          municipality: "",
          baranggay: "",
          purok: "",
          qrStatus: "",
          qrData: null,
          type: "passenger",
          password: '',
          loginToken: "Yes",
          vaccinationLink: null,
          validIdLink: null,
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


      this.$data.user.name =
        userData.userInfo.firstName + " " + userData.userInfo.lastName;
      this.$data.user.phoneNumber = "+63" + userData.userInfo.phoneNumber;
      this.$data.user.address =
        userData.userInfo.purok +
        ", " +
        userData.userInfo.baranggay +
        ", " +
        userData.userInfo.municipality;
      this.$data.user.age = userData.userInfo.age + " years old";
      this.$data.user.gender = userData.userInfo.gender;
      this.$data.phone = userData.userInfo.phoneNumber;
      this.$data.user.qrData = userData.userInfo.qrData;
      this.$data.user.qrStatus = userData.userInfo.qrStatus;
      this.$data.value = userData.userInfo.qrData;

      this.$data.report.reportInfo.name = userData.userInfo.firstName + " " + userData.userInfo.lastName;
      this.$data.report.reportInfo.phoneNumber = "+63" + userData.userInfo.phoneNumber;
      this.$data.report.reportInfo.address =  userData.userInfo.purok +
        ", " +
        userData.userInfo.baranggay +
        ", " +
        userData.userInfo.municipality;
      this.$data.report.reportInfo.gender = userData.userInfo.gender;
      this.$data.report.reportInfo.age = userData.userInfo.age;



      this.$data.users.userInfo.phoneNumber = userData.userInfo.phoneNumber;
      this.$data.users.userInfo.firstName = userData.userInfo.firstName;
      this.$data.users.userInfo.lastName = userData.userInfo.lastName;
      this.$data.users.userInfo.age = userData.userInfo.age;
      this.$data.users.userInfo.gender = userData.userInfo.gender;
      this.$data.users.userInfo.purok = userData.userInfo.purok;
      this.$data.users.userInfo.baranggay = userData.userInfo.baranggay;
      this.$data.users.userInfo.municipality = userData.userInfo.municipality;
      this.$data.users.userInfo.qrStatus = userData.userInfo.qrStatus;
      this.$data.users.userInfo.qrData = userData.userInfo.qrData;
      this.$data.users.userInfo.vaccinationLink = userData.userInfo.vaccinationLink;
      this.$data.users.userInfo.validIdLink = userData.userInfo.validIdLink;
      this.$data.users.userInfo.password = userData.userInfo.password;
      
      if(userData.userInfo.loginToken == "Yes"){
         setDoc(this.$data.userRefer, this.$data.users);
      }
      else if(userData.userInfo.loginToken == "No"){
        this.$router.push(`/passenger/login`)
      }
      else{
        this.$router.push(`/passenger/login`)
      }


      //list all entry record
      const entryRef = collection(db, "entry-record");
      let entrySnap = await getDocs(entryRef);
      this.getMonth();

      const current = new Date();
      let myEntries = [];
      let allEntries = [];
      entrySnap.forEach((entry) => {
        let entryData = entry.data();
        entryData.id = entry.id;

        if (entryData.name == this.$data.user.name) {
          allEntries.push(entryData);
          if (
            (entryData.month == this.$data.month) &
            (entryData.day == `${current.getDate()}`) &
            (entryData.year == `${current.getFullYear()}`)
          ) {
            myEntries.push(entryData);
          } else {
            console.log();
          }
        } else {
          console.log();
        }
      });
      this.$data.myEntry = myEntries;
      this.$data.allEntry = allEntries;
      
    },
    viewAllEntry(){
      this.allEntryModal = true;
      this.toggleEntryRecord = false;
    },

    toGenerator() {
      const id = this.$data.userID;
      if (this.$data.user.qrStatus == "Pending Application") {
        alert("Already have an application");
      } else if (this.$data.user.qrStatus == "No Application") {
        this.$router.push(`/passenger/generate-qr/${id}`);
      } else if (this.$data.user.qrStatus == "Declined") {
        this.$router.push(`/passenger/generate-qr/${id}`);
      } else {
        alert("Already have a QR Code");
      }
    },

    getMonth() {
      const current = new Date();
      const monthData = `${current.getMonth() + 1}`;
      if (monthData == "1") {
        const month = "January";
        this.$data.month = month;
      } else if (monthData == "2") {
        const month = "February";
        this.$data.month = month;
      } else if (monthData == "3") {
        const month = "March";
        this.$data.month = month;
      } else if (monthData == "4") {
        const month = "April";
        this.$data.month = month;
      } else if (monthData == "5") {
        const month = "May";
        this.$data.month = month;
      } else if (monthData == "6") {
        const month = "June";
        this.$data.month = month;
      } else if (monthData == "7") {
        const month = "July";
        this.$data.month = month;
      } else if (monthData == "8") {
        const month = "August";
        this.$data.month = month;
      } else if (monthData == "9") {
        const month = "September";
        this.$data.month = month;
      } else if (monthData == "10") {
        const month = "Ocotber";
        this.$data.month = month;
      } else if (monthData == "11") {
        const month = "November";
        this.$data.month = month;
      } else if (monthData == "12") {
        const month = "December";
        this.$data.month = month;
      }
    },

    editProfile() {
      const id = this.$data.userID;
      this.$router.push(`/passenger/settings/${id}`);
    },
    logoutProfile() {
      this.$data.users.userInfo.loginToken = "No"
      const auth = getAuth(app);
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          setDoc(this.$data.userRefer, this.$data.users);
          this.$router.push("/passenger/login");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },

    toggleEntryRecordBtn() {
      this.toggleEntryRecord = !this.toggleEntryRecord;
    },
    hide() {
      this.toggleEntryRecord = !this.toggleEntryRecord;
    },

    reportProblem() {
      this.$data.reportModal = true;
    },
    closeModal() {
      this.$data.reportModal = false;
    },

    previewRtPCR(event){
      var input = event.target;

      if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = () => {
          this.$data.rtpcrData =  event.target.files[0];
          this.uploadRtPCR();
        };

        reader.readAsDataURL(input.files[0]);
      }
    },

    uploadRtPCR(){
      const storage = getStorage(app);

       // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: "image/jpeg",
      };
      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(
        storage,
        "proofs/" + `${this.$data.user.phoneNumber}/` + "rtpcr/" + this.rtpcrData.name
      );
      const uploadTask = uploadBytesResumable(
        storageRef,
        this.rtpcrData,
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
            this.rtpcrImage = downloadURL;
            this.$data.report.reportInfo.rtpcrImageLink = downloadURL;
            console.log("Link:" + this.$data.report.reportInfo.rtpcrImageLink);
          });
        }
      );
    },
    submit(){
      var randomstring = require("randomstring");
      let id = randomstring.generate({
        length: 20,
        charset: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      });

      this.$data.report.reportInfo.id = id;

       const db = getFirestore(app);
       setDoc(doc(db, "reports", id), this.$data.report);
       alert("submitted");
       this.$data.reportModal = false;
    },

    async getReport(){
      let phone = "+63" + this.$data.userID;
      const db = getFirestore(app);
        const notifRef = collection(db, "notification");
      let notifSnap = await getDocs(notifRef);

      let notifications = [];
      notifSnap.forEach((notif) => {
        let notifData = notif.data();
        notifData.id = notif.id;
        if(notifData.phoneNumber == phone){
        notifications.push(notifData);
        }
      });

      this.$data.notifications = notifications;
    },

    async view(){
      const db = getFirestore(app);
      const notifRef = collection(db, "notification");

      let notifsRef = doc(notifRef, this.$data.notifID);
      this.$data.notifRefer = notifsRef;

      let notif = await getDoc(this.$data.notifRefer);
      let notifData = notif.data();

      this.$data.notification.header = notifData.header;
      this.$data.notification.notifMessage = notifData.notificationMessage;
      this.$data.notification.date = notifData.date;
      this.$data.viewNotifModal = true;
      this.$data.notificationModal = false;
    },

    closeNotif(){
      this.$data.viewNotifModal = false;
      this.$data.notificationModal = true;
    },



  },

  computed: {
    showQr() {
      if ((this.$data.user.qrData == "") | (this.$data.user.qrData == null)) {
        return false;
      } else {
        return true;
      }
    },

    showHide() {
      if ((this.$data.user.qrData == "") | (this.$data.user.qrData == null)) {
        return true;
      } else {
        return false;
      }
    },
  },

  created() {
    const str = this.$route.params.phoneId;
    this.$data.userID = str;
    this.getUser();
    this.getReport();
  },
});
</script>