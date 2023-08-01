<template>
  <nav
    class="bg-white dark:bg-gray-600 fixed w-full z-20 top-0 left-0 border-b border-white-200 dark:border-white"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="#" class="flex items-center">
        <img src="/logo.jpg" class="h-12 mr-3" alt="Sobeco Logo" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >SABECO</span
        >
      </a>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0"
        >
          <li>
            <a
              href="/"
              class="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent md:p-0"
              aria-current="page"
              >Trang Chủ</a
            >
          </li>
          <li>
            <a
              href="/sanpham"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded md:hover:bg-transparent md:p-0 dark:text-white dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Sản Phẩm</a
            >
          </li>
          <li>
            <a
              href="/lienhe"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Liên Hệ</a
            >
          </li>
          <li>
            <a
              href="/gioithieu"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >Về Chúng Tôi</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
