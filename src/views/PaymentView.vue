<script setup>
import NavbarTop from "@/components/navbar/NavbarTop.vue";
import NavbarBottom from "@/components/navbar/NavbarBottom.vue";
import Table from "../components/table/Table.vue";

const items = [
    {
        course: "kurs1",
        price: "15 zl",
    },
    // ... more items
  ]
</script>

<template>
  <NavbarTop />
  <NavbarBottom />
  <div class = "d-flex flex-row align-items-center justify-content-between">
    <h1 class="bd-highlight">Płatność</h1>
    <h1 class="bd-highlight">Kwota do zapłaty: </h1>
  </div>

  <div class = "d-flex flex-col align-items-center justify-content-start">
    <h5 class="bd-highlight">Elementy Koszyka: </h5>
  </div>

  <Table></Table>

  <div class = "d-flex flex-col align-items-center justify-content-start">
    <h5 class="bd-highlight">Wybierz opcję płatności: </h5>
  </div>

  <div class = "d-flex flex-col align-items-center justify-content-center">
    <h5 class="bd-highlight">Karta kredytowa</h5>
    <h5 class="bd-highlight">Blik</h5>
    <h5 class="bd-highlight">Przelew bankowy</h5>
  </div>

  <div class = "d-flex flex-col align-items-center justify-content-center">
    <h5 class="bd-highlight">GPay</h5>
    <h5 class="bd-highlight">ApplePay</h5>
    <h5 class="bd-highlight">PayPal</h5>
  </div>

  <div class = "d-flex flex-col align-items-center justify-content-start">
    <h5 class="decline">Anuluj</h5>
  </div>

</template>

<style scoped>
a{
  margin-right:5px;
  margin-left:5px;

}
hr{
  color:black;
  border-top: 1px solid black;
  opacity: 1;
  width:30rem;
}
h1{
    margin-right: 35px;
    margin-left: 35px;
    margin-bottom: 100px;
    margin-top: 35px;
}
h5{
    margin-left: 35px;
}
.bd-highlight {
    background-color: rgba(86,61,124,.15);
    border: 15px solid rgba(86,61,124,.15);
    border-radius: 25px;
}
.decline {
    background-color: red;
    border: 15px solid red;
    border-radius: 25px;
}
</style>
