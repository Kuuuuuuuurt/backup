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
          src="../../../../src/assets/283863145_544721900556893_7583603897868082993_n.png"
          style="height: 30px"
          alt=""
          class="mr-2"
          loading="lazy"
        />
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
      <button class="relative inline-block" @click="notificationModal = true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-9 h-9 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <span
          class="
            absolute
            top-0
            right-0
            px-2
            py-1
            text-xs
            leading-none
            text-red-100
            transform
            bg-red-600
            rounded-full
          "
          >{{ notifications.length }}</span
        >
      </button>
      <button @click="toSettings">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2099/2099058.png"
          style="height: 25px"
          alt=""
          class="mr-2"
          loading="lazy"
        />
      </button>
      <button @click="logoutModal = true">
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

  <div class="">
    <div class="flex items-center justify-left">
      <!-- Card -->
      <div class="bg-white p-8 w-[32rem]">
        <!-- Header -->
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
          <p>Establishment</p>
        </header>

        <!-- Button -->
      </div>
    </div>
  </div>

  <body class="antialiased font-sans">
    <div class="container mx-auto sm:px-8">
      <div class="">
        <div class="flex justify-between">
          <div
            class="
              p-4
              w-full
              text-center
              bg-white
              rounded-lg
              sm:p-8
              dark:bg-gray-800 dark:border-gray-700
            "
          >
            <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              Welcome {{ users.ownerName }}
            </h5>
            <p
              class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400"
            >
              Stay up to date and move work forward with TRAFEX
            </p>
            <div
              class="
                justify-center
                items-center
                space-y-4
                sm:flex sm:space-y-0 sm:space-x-4
              "
            >
              <a
                @click="toScanner"
                class="
                  w-full
                  sm:w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  focus:ring-4 focus:outline-none focus:ring-gray-300
                  text-white
                  rounded-lg
                  inline-flex
                  items-center
                  justify-center
                  px-4
                  py-2.5
                  dark:bg-gray-700
                  dark:hover:bg-gray-600
                  dark:focus:ring-gray-700
                "
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3892/3892772.png"
                  style="height: 25px"
                  alt=""
                  class="mr-2"
                  loading="lazy"
                />
                <div class="text-left">
                  <div class="mb-1 text-xs">Start by:</div>
                  <div class="-mt-1 font-sans text-sm font-semibold">
                    Scan QR-Code
                  </div>
                </div>
              </a>
              <a
                @click="allEntryModal = true"
                class="
                  w-full
                  sm:w-auto
                  bg-gray-800
                  hover:bg-gray-700
                  focus:ring-4 focus:outline-none focus:ring-gray-300
                  text-white
                  rounded-lg
                  inline-flex
                  items-center
                  justify-center
                  px-4
                  py-2.5
                  dark:bg-gray-700
                  dark:hover:bg-gray-600
                  dark:focus:ring-gray-700
                "
              >
                <svg
                  class="mr-3 w-6 h-6 dark:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  ></path>
                </svg>
                <div class="text-left">
                  <div class="mb-1 text-xs">Monitor by:</div>
                  <div class="-mt-1 font-sans text-sm font-semibold">
                    See all Record
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="flex items-center">
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-full">
            <div
              class="
                flex
                absolute
                inset-y-0
                left-0
                items-center
                pl-3
                pointer-events-none
              "
            >
              <svg
                class="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="
                bg-gray-50
                border border-gray-300
                text-gray-900 text-sm
                rounded-lg
                focus:ring-blue-500 focus:border-blue-500
                block
                w-full
                pl-10
                p-2.5
                dark:bg-gray-700
                dark:border-gray-600
                dark:placeholder-gray-400
                dark:text-white
                dark:focus:ring-blue-500
                dark:focus:border-blue-500
              "
              placeholder="Search"
              required
              v-model="searchName"
            />
          </div>
          <button
            @click="findByName"
            type="submit"
            class="
              p-2.5
              ml-2
              text-sm
              font-medium
              text-white
              bg-blue-700
              rounded-lg
              border border-blue-700
              hover:bg-blue-800
              focus:ring-4 focus:outline-none focus:ring-blue-300
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
            "
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
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
                    Cab No.
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
                <tr v-for="customer in customers" :key="customer.id">
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="">
                      <div class="flex-shrink-0"></div>
                      <div class="">
                        <p class="text-gray-900 whitespace-no-wrap">
                          {{ customer.name }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ customer.phoneNumber }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ customer.address }}
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
                      <span class="relative">{{ customer.visitedEstab }}</span>
                    </span>
                  </td>

                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ customer.time }}
                    </p>
                  </td>

                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{
                        customer.month +
                        " " +
                        customer.day +
                        ", " +
                        customer.year
                      }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ customer.temperature }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
      
        </div>
      </div>
    </div>
  </body>

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
          <button
            type="button"
            class="
              absolute
              top-3
              right-2.5
              text-gray-400
              bg-transparent
              hover:bg-gray-200 hover:text-gray-900
              rounded-lg
              text-sm
              p-1.5
              ml-auto
              inline-flex
              items-center
              dark:hover:bg-gray-800 dark:hover:text-white
            "
            data-modal-toggle="popup-modal"
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
          <div class="p-6 text-center">
            <svg
              class="mx-auto mb-4 w-14 h-14 text-red-400 dark:text-red-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <h3
              class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400"
            >
              Are you sure you want to logout?
            </h3>
            <button
              data-modal-toggle="popup-modal"
              type="button"
              class="
                text-white
                bg-red-600
                hover:bg-red-800
                focus:ring-4 focus:outline-none focus:ring-red-300
                dark:focus:ring-red-800
                font-medium
                rounded-lg
                text-sm
                inline-flex
                items-center
                px-5
                py-2.5
                text-center
                mr-2
              "
              @click="signOut"
            >
              Yes, I'm sure
            </button>
            <button
              data-modal-toggle="popup-modal"
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
              @click="logoutModal = false"
            >
              No, cancel
            </button>
          </div>
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
          <!-- <div class="" v-for="notif in notifications" :key="notif.id"> -->
          <div class="col-span-12">
            <div class="overflow-auto lg:overflow-visible">
              <table
                class="table text-gray-400 border-separaet space-y-6 text-sm"
              >
                <thead></thead>
                <tbody>
                  <tr class="" v-for="notif in notifications" :key="notif.id">
                    <td class="p-3">
                      <div class="flex align-items-center">
                        <img
                          class="rounded-full h-6 w-6 object-cover"
                          src="https://cdn-icons-png.flaticon.com/512/3602/3602145.png"
                          alt="unsplash image"
                        />
                        <div class="ml-3">
                          <div class="">Trafex System</div>
                          <div class="text-gray-500">{{ notif.header }}</div>
                        </div>
                      </div>
                    </td>
                    <td class="p-1 font-bold">
                      {{ notif.date }}
                    </td>
                    <td class="p-1">
                      <button
                        class="text-gray-400 hover:text-gray-100 mr-6"
                        @click="notifID = notif.id"
                      >
                        <button @click="view">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/633/633633.png"
                            style="height: 15px"
                            alt=""
                            class=""
                            loading="lazy"
                          />
                        </button>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
          <img
            src="https://cdn-icons-png.flaticon.com/512/2645/2645897.png"
            style="height: 25px"
            alt=""
          />
          <h3 class="text-xl font-medium text-gray-900 dark:text-white">
            Notification
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
            data-modal-toggle="small-modal"
            @click="closeNotif"
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
        <div class="">
          <div class="space-y-6 border">
            <p
              class="
                text-base
                leading-relaxed
                text-green-500
                dark:text-green-400
              "
            >
              {{ notification.header }}
            </p>
          </div>
          <div class="p-3 space-y-6">
            <p
              class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
            >
              {{ notification.notifMessage }}
            </p>
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
            data-modal-toggle="small-modal"
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
            @click="closeNotif"
          >
            Close
          </button>
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

          <div class="flex items-center">
            <label for="simple-search" class="sr-only">Search</label>
            <div class="relative w-full">
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  v-model="selectMonth">
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
            </div>
            <button
            @click="findByMonth"
              type="submit"
              class="
                p-2.5
                ml-2
                text-sm
                font-medium
                text-white
                bg-blue-700
                rounded-lg
                border border-blue-700
                hover:bg-blue-800
                focus:ring-4 focus:outline-none focus:ring-blue-300
                dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
              "
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
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
                      Cab No.
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
                  <tr v-for="entry in allEntries" :key="entry.id">
                    <td
                      class="
                        px-5
                        py-5
                        border-b border-gray-200
                        bg-white
                        text-sm
                      "
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
                      class="
                        px-5
                        py-5
                        border-b border-gray-200
                        bg-white
                        text-sm
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ entry.phoneNumber }}
                      </p>
                    </td>
                    <td
                      class="
                        px-5
                        py-5
                        border-b border-gray-200
                        bg-white
                        text-sm
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ entry.address }}
                      </p>
                    </td>
                    <td
                      class="
                        px-5
                        py-5
                        border-b border-gray-200
                        bg-white
                        text-sm
                      "
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
                      class="
                        px-5
                        py-5
                        border-b border-gray-200
                        bg-white
                        text-sm
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ entry.time }}
                      </p>
                    </td>

                    <td
                      class="
                        px-5
                        py-5
                        border-b border-gray-200
                        bg-white
                        text-sm
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ entry.month + " " + entry.day + ", " + entry.year }}
                      </p>
                    </td>
                    <td
                      class="
                        px-5
                        py-5
                        border-b border-gray-200
                        bg-white
                        text-sm
                      "
                    >
                      <p class="text-gray-900 whitespace-no-wrap">
                        {{ entry.temperature }}
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
import app from "../../../firebase/db/firebase";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
export default {
  data() {
    return {
      allEntries: [],
      allEntryModal: false,
      notifID: "",
      viewNotifModal: false,
      notifications: [],
      notificationModal: false,
      logoutModal: false,
      month: "",
      selectMonth: "January",
      searchName: "",
      customers: [],
      estabID: "",
      reference: "",
      users: {
        vehicleID: "",
        ownerName: "",
        address: "",
        contactNumber: "",
      },
      user: {
        userInfo: {
          email: "",
          vehicleID: "",
          municipality: "",
          baranggay: "",
          purok: "",
          owner: "",
          phoneNumber: "",
          type: "operator",
          password: "",
          loginToken: "",
        },
      },

      notification: {
        header: "",
        notifMessage: "",
        date: "",
      },
    };
  },

  methods: {
    async getUser() {
      const db = getFirestore(app);
      const userRef = collection(db, "user");

      let usersRef = doc(userRef, this.estabID);
      this.$data.reference = usersRef;

      let user = await getDoc(this.$data.reference);

      let userData = user.data();

      this.$data.user.userInfo.email = userData.userInfo.email;
      this.$data.user.userInfo.phoneNumber = userData.userInfo.phoneNumber;
      this.$data.user.userInfo.vehicleID = userData.userInfo.vehicleID;
      this.$data.user.userInfo.purok = userData.userInfo.purok;
      this.$data.user.userInfo.baranggay = userData.userInfo.baranggay;
      this.$data.user.userInfo.municipality = userData.userInfo.municipality;
      this.$data.user.userInfo.owner = userData.userInfo.owner;
      this.$data.user.userInfo.type = userData.userInfo.type;
      this.$data.user.userInfo.password = userData.userInfo.password;
      this.$data.user.userInfo.loginToken = userData.userInfo.loginToken;

      if (userData.userInfo.loginToken == "Yes") {
        this.$data.users.vehicleID = userData.userInfo.vehicleID;
        this.$data.users.address =
          userData.userInfo.purok +
          ", " +
          userData.userInfo.baranggay +
          ", " +
          userData.userInfo.municipality +
          ", " +
          "Misamis Occidental";
        this.$data.users.contactNumber = userData.userInfo.phoneNumber;
        this.$data.users.ownerName = userData.userInfo.owner;
      } else if (userData.userInfo.loginToken == "No") {
        this.$router.push("/operator/login");
      } else {
        alert("No token");
      }

      //display all data in table
      const customerRef = collection(db, "entry-record");
      let customerSnap = await getDocs(customerRef);

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

      let customers = [];
      let allEntries = [];
      customerSnap.forEach((customer) => {
        let customerData = customer.data();
        customerData.id = customer.id;
        if (customerData.visitedEstab == this.$data.users.vehicleID) {
          allEntries.push(customerData);
          if (
            (customerData.month == this.$data.month) &
            (customerData.day == `${current.getDate()}`) &
            (customerData.year == `${current.getFullYear()}`)
          ) {
            customers.push(customerData);
          } else {
            console.log();
          }
        } else {
          console.log();
        }
      });
      this.$data.customers = customers;
      this.$data.allEntries = allEntries;
    },

    toScanner() {
      let id = this.$data.estabID;
      this.$router.push(`/operator/scanner/${id}`);
    },

    signOut() {
      const auth = getAuth(app);
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          this.$data.user.userInfo.loginToken = "No";
          setDoc(this.$data.reference, this.$data.user);
          this.$router.push("/operator/login");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },

    toSettings() {
      const id = this.$data.estabID;
      this.$router.push(`/operator/settings/${id}`);
    },

    async findByName() {
      const db = getFirestore(app);

      const dataRef = collection(db, "entry-record");
      let customerSnap = await getDocs(dataRef);

      let customers = [];
      customerSnap.forEach((customer) => {
        let customerData = customer.data();
        if (customerData.visitedEstab == this.$data.users.vehicleID) {
          if (customerData.name == this.$data.searchName) {
            customers.push(customerData);
          } else {
            console.log("No User");
          }
        }
      });
      this.$data.customers = customers;
    },

    async findByMonth() {
      const db = getFirestore(app);

      const dataRef = collection(db, "entry-record");
      let customerSnap = await getDocs(dataRef);

      let customers = [];
      let allEntries = [];
      customerSnap.forEach((customer) => {
        let customerData = customer.data();
        if (customerData.visitedEstab == this.$data.users.vehicleID) {
          if (customerData.month == this.$data.selectMonth) {
            customers.push(customerData);
            allEntries.push(customerData);
          } else {
            console.log("No User");
          }
        }
      });
      this.$data.customers = customers;
      this.$data.allEntries = allEntries;
    },

    async getReport() {
      const db = getFirestore(app);
      const notifRef = collection(db, "notification");
      let notifSnap = await getDocs(notifRef);

      let notifications = [];
      let phone = this.users.vehicleID;
      notifSnap.forEach((notif) => {
        let notifData = notif.data();
        notifData.id = notif.id;
        if (notifData.phoneNumber == phone) {
          notifications.push(notifData);
        } else {
          console.log();
        }
      });

      this.$data.notifications = notifications;
    },

    async view() {
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
    closeNotif() {
      this.$data.viewNotifModal = false;
      this.$data.notificationModal = true;
    },
  },

  created() {
    let id = this.$route.params.estabId;
    this.$data.estabID = id;
    this.getUser();
    this.getReport();
  },
};
</script>


