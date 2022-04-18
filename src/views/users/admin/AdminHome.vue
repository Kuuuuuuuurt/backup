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
        src="https://cdn-icons-png.flaticon.com/512/1008/1008001.png"
        style="height: 25px"
        alt=""
        class="mr-2"
        loading="lazy"
      />
      TRAFEX
    </a>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
 methods:{
   toApplication(){
     this.$router.push(`/admin-application`);
   },
   toRecords(){
     this.$router.push(`/admin-entry-record`);
   },

 } ,

 created(){
 }
}
</script>