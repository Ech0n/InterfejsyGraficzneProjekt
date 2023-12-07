<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-white p-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">KOREPETYCJE</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class=" collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto text-center">
          <li class="nav-item">
            <a class="nav-link mx-2" href="#"><font-awesome-icon icon="fa-solid fa-home"/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#"><!-- Add the style and icon you want using the String format -->
              <font-awesome-icon icon="fa-solid fa-magnifying-glass" /></a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#"><font-awesome-icon icon="fa-solid fa-message"/></a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#"><font-awesome-icon icon="fa-solid fa-user"/></a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link mx-2 dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Company
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Blog</a></li>
              <li><a class="dropdown-item" href="#">About Us</a></li>
              <li><a class="dropdown-item" href="#">Contact us</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>