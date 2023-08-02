<template>
  <nav
    class="bg-sky-900 fixed w-full z-20 top-0 left-0 border-b border-white-200 bg-opacity-70"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="#" class="flex items-center">
        <img src="/logo.jpg" class="h-12 mr-3" alt="Sobeco Logo" />
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
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-semibold text-white border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
        >
          <li>
            <a
              href="/"
              class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
              aria-current="page"
              >Giới Thiệu</a
            >
          </li>
          <li>
            <a
              href="/mausac"
              class="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0"
              >Tìm màu sắc
            </a>
          </li>
          <li>
            <a
              href="/sanpham"
              class="block py-2 pl-3 pr-4 rounded md:hover:bg-transparent md:p-0"
              >Sản Phẩm</a
            >
          </li>
          <li>
            <a
              href="/tuvan"
              class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
              >Tư Vấn Khách Hàng</a
            >
          </li>
          <li>
            <a
              href="/lienhe"
              class="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0"
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
import { ref, watch } from "vue";
const show = ref(false);
function toggle() {
  show.value = !show.value;
}

/*watch(show, () => {
  if (show) {
    document.getElementById("navbar-sticky").removeAttribute("hidden");
  } else {
    document.getElementById("navbar-sticky").setAttribute("hidden");
  }
}); */
</script>
