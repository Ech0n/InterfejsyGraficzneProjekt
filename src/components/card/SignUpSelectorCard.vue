<template>
    <div class="d-flex p-2 justify-content-around">
    <div class="card d-flex align-items-center justify-content-start">
      <mdicon name="account" :width="150" :height="200" />
      <div class="card-body">
        <a href="/signup/user" class="btn btn-primary">Zarejestruj się jako uczeń</a>
      </div>
    </div>
    <div class="card d-flex align-items-center justify-content-start">
      <mdicon name="school" :width="150" :height="200" />
      <div class="card-body">
        <a href="/signup/teacher" class="btn btn-primary">Zarejestruj się jako nauczyciel</a>
      </div>
    </div>
  </div>
</template>
