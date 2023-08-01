<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from "flowbite-vue";
</script>
<template>
  <Navbar solid>
    <template #logo>
      <NavbarLogo
        link="http://sobecopaint.com.vn/"
        alt="Sobeco logo"
        image-url="/images/sobeco-logo.jpeg"
      >
        Sobeco
      </NavbarLogo>
    </template>
    <template #default="{ isShowMenu }">
      <NavbarCollapse :isShowMenu="isShowMenu">
        <NavbarLink isActive link="#">Trang chủ</NavbarLink>
        <NavbarLink link="#">Sản phẩm</NavbarLink>
        <NavbarLink link="#">Liên hệ</NavbarLink>
        <NavbarLink link="#">Về chúng tôi</NavbarLink>
      </NavbarCollapse>
    </template>
  </Navbar>
</template>
