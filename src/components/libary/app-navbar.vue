<template>
  <div class="app-navbar">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">wangze</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- item -->
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 lists">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Looks</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Events</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
            </ul>
            <!-- <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> -->
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style scoped lang="scss">
.app-navbar {
  height: 80px;
  background-color: #f8f9fa;
  border-color: 1px solid rebeccapurple;
  box-shadow: 0px -1px 3px #999;
  .container-fluid {
    padding: 12px 10px 12px 10px;
  }
}
.lists {
  display: flex;
  flex: 1;
  justify-content: space-evenly;
}
</style>
