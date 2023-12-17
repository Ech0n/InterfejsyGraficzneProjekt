<script setup>
import ShoppingCartBtn from "@/components/buttons/ShoppingCartBtn.vue";

</script>


<template>

  <div class="card mx-3 my-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="https://placehold.co/600x400" class="img-fluid img-thumbnail" alt="tutorPhoto">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ tutorItem.subject }}</h5>
          <p class="card-text">{{ tutorItem.short_desc }}</p>
          <p class="card-text"><small class="text-muted">{{ tutorItem.firstname }} {{ tutorItem.lastname }}</small></p>
          <div class = "row">
            <div class="col" v-for="day in getAllDays()" :key="day" :class="{ 'highlighted-day': isChosenDay(day) }">
              {{ convertToPolishDayName(day) }}
              </div>
          </div>

          <p class="d-flex justify-content-around"><button class="btn">Cena {{tutorItem.price }} zł</button> <ShoppingCartBtn /></p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.highlighted-day {
  color: red;
}

</style>

<script>
export default {
  props: ["tutorItem", "chosenDays"],
  methods: {
    getChosenDays() {
      if (this.chosenDays)
        return this.chosenDays;
      return [];
    },
    getAllDays() {
      if (this.chosenDays && this.chosenDays.length !== 0)
      return this.tutorItem.days;
    },
    isChosenDay(day) {
      // Check if the current day is in the chosenDays array
      return this.getChosenDays().includes(day);
    },
    convertToPolishDayName(day) {
      const polishDays = ["Pon", "Wt", "Śro", "Czw", "Pt", "So", "Nie"];

      if (day >= 0 && day < polishDays.length) {
        return polishDays[day];
      }

    },
  },
};
</script>