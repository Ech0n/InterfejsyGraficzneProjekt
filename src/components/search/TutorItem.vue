<script setup>
import ShoppingCartTutoringBtn from "@/components/buttons/ShoppingCartTutoringBtn.vue";
import {ref} from 'vue';

let selectedTime = ref("");



</script>


<template>

  <div class="card mx-3 my-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <div class="row">
        <img src="https://placehold.co/600x400" class="img-fluid img-thumbnail" alt="tutorPhoto">
        </div>
        <div class="row"></div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h3 class="card-title">{{ tutorItem.subject }}</h3>
          <p class="card-text">{{ tutorItem.short_desc }}</p>
          <a :href="'/u/'+tutorItem.tutorId"><p class="card-text"><small class="text-muted">{{ tutorItem.firstname }} {{ tutorItem.lastname }}</small></p></a>
          <hr>
          <div class = "flex-wrap">
            <div  v-for="(day, dayIndex) in getAllDays()" :key="day" :class="{ 'highlighted-day': isChosenDay(day) }">
              <div class="mt-2">{{ convertToPolishDayName(day) }} </div>


<!--                <div class="form-check d-inline-block justify-content-center" v-for="(timeSlot, slotIndex) in tutorItem.schedule[dayIndex]" :key="slotIndex" :id="'formDiv' + day + timeSlot[0] + '-' + timeSlot[1]">-->
<!--                    <div v-if="isTimeStartBeforeOrEqual(timeStart, timeSlot[0])" class="border mx-2">-->
<!--                    <input class="form-check-input" type="radio" name="flexRadioDefault" :id="'flexRadioDefault' + day + timeSlot[0] + '-' + timeSlot[1]">-->
<!--                    <label class="form-check-label" :for="'flexRadioDefault' + day + timeSlot[0] + '-' + timeSlot[1]">-->
<!--                      {{ timeSlot[0] }} - {{ timeSlot[1] }}-->
<!--                    </label>-->
<!--                    </div>-->
<!--                </div>-->

              <div>
                <div class="form-check d-inline-block justify-content-center" v-for="(timeSlot, slotIndex) in filteredTimeSlots(dayIndex)" :key="slotIndex" :id="'formDiv' + day + timeSlot[0] + '-' + timeSlot[1]">
                  <div class="border mx-2">
                    <input class="form-check-input" type="radio" :name="'flexRadioDefault' + tutorItem.id"
                           :id="'flexRadioDefault' + day + timeSlot[0] + '-' + timeSlot[1]"
                           v-model="selectedTime" :value="timeSlot[0] + '-' + timeSlot[1] + ' ' + convertToPolishDayName(day)" :checked="dayIndex == 0">
                    <label class="form-check-label" :for="'flexRadioDefault' + day + timeSlot[0] + '-' + timeSlot[1]">
                      {{ timeSlot[0] }} - {{ timeSlot[1] }}
                    </label>
                  </div>
                </div>
              </div>


              </div>
          </div>
          <hr>

          <p class="d-flex justify-content-around mt-2"><button class="btn">Cena {{tutorItem.price }} zł</button>

            <ShoppingCartTutoringBtn :id="tutorItem.id" :summary-message="'  Dodano do koszyka: '"
                             :content-message="'  korepetycje  ' + tutorItem.subject + '\n  Czas: ' + selectedTime + '\n  za cenę ' + tutorItem.price + ' zł!' " 
                             :name="tutorItem.firstname + ' '+ tutorItem.lastname"
                             :price="tutorItem.price" /></p>
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
  props: ["tutorItem", "chosenDays", "timeStart", "timeEnd"],
  methods: {
    getChosenDays() {
      if (this.chosenDays)
        return this.chosenDays;
      return [];
    },
    getAllDays() {
      // if (this.chosenDays && this.chosenDays.length !== 0)
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
    isTimeStartBeforeOrEqual(timeStart, startCourseHour) {
      if (timeStart) {
        const [courseHour, courseMinute] = startCourseHour.split(':');

        const timeStartToCompare = new Date(timeStart);
        timeStartToCompare.setHours(courseHour, courseMinute, 0, 0);

        // Compare the time parts
        return timeStart <= timeStartToCompare;

      }
      return true;
    },

    isTimeEndBeforeOrEqual(timeEnd, EndCourseHour) {
      if (timeEnd) {
        const [courseHour, courseMinute] = EndCourseHour.split(':');

        const timeEndToCompare = new Date(timeEnd);
        timeEndToCompare.setHours(courseHour, courseMinute, 0, 0);

        // Compare the time parts
        return timeEndToCompare <= timeEnd;

      }
      return true;
    },

    filteredTimeSlots(dayIndex) {
      const schedule = this.tutorItem.schedule;
      if (this.timeStart && this.timeEnd && schedule && schedule[dayIndex]) {
          return schedule[dayIndex].filter(timeSlot =>
              this.isTimeStartBeforeOrEqual(this.timeStart, timeSlot[0]) && this.isTimeEndBeforeOrEqual(this.timeEnd, timeSlot[1])
          );
      }
      else if (this.timeStart && schedule && schedule[dayIndex])
        return schedule[dayIndex].filter(timeSlot =>
            this.isTimeStartBeforeOrEqual(this.timeStart, timeSlot[0])
        );
      else if (this.timeEnd && schedule && schedule[dayIndex])
        return schedule[dayIndex].filter(timeSlot =>
            this.isTimeEndBeforeOrEqual(this.timeEnd, timeSlot[1])
        );
      else if (schedule && schedule[dayIndex])
        return this.tutorItem.schedule[dayIndex];
      else
        return [];
    },

  },
};
</script>