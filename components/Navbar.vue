<template>
  <nav
    class="bg-sky-900 fixed w-full z-20 top-0 left-0 border-b border-white-200"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="#" class="flex items-center">
        <img
          src="/logo.jpg"
          class="h-12 mr-3 mix-blend-normal object-contain"
          alt="Sobeco Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >SOBECO</span
        >
      </a>
      <div class="flex md:order-1">
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-blue-200"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          @click="toggle"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="md:items-center md:justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-semibold text-white border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
        >
          <li>
            <a
              href="/"
              class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0 md:hover:text-blue-700"
              aria-current="page"
              >Giới Thiệu</a
            >
          </li>
          <li>
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white focus:text-sky-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
            >
              Sản Phẩm<svg
                class="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <div
              id="dropdownNavbar"
              class="z-10 hidden font-normal bg-sky-900 divide-y divide-gray-100 rounded-lg shadow md:w-44 w-5/6 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                class="py-2 text-sm text-white dark:text-gray-400"
                aria-labelledby="dropdownLargeButton"
              >
                <li v-for="item in types.data" :key="item.id">
                  <a
                    :href="'/sanpham?type=' + item.id"
                    class="block px-4 py-2 hover:bg-gray-100 hover:text-sky-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    >{{ item.title }}</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a
              href="/auth/login"
              class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700"
              >Đăng Nhập</a
            >
          </li>
          <li>
            <a
              href="/lienhe"
              class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 md:hover:text-blue-700"
              >Liên Hệ</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
/*import { Collapse } from "flowbite";
import { watch } from


const $targetEl= document.getElementById("navbar-sticky");
const $triggerEl= document.getElementById('triggerEl');
const collapse= new Collapse($targetEl, $triggerEl);
collapse.expand()
*/
import { ref, watch } from 'vue';
const show = ref(false);
function toggle() {
  show.value = !show.value;
}

const types = ref({});
onBeforeMount(async () => {
  types.value = await useFetch('/api/types');

});
/*watch(show, () => {
  if (show) {
    document.getElementById("navbar-sticky").removeAttribute("hidden");
  } else {
    document.getElementById("navbar-sticky").setAttribute("hidden");
  }
}); */
</script>
