import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return { courses: [] }
  },
  getters:{
    getCourses:(state)=> state.courses,
    isEmpty:(state)=> state.courses.length == 0,
    size:(state) => state.courses.length,
    },
  actions: {
    addCourse(id) {
        console.log("Trying to add course ",id)
      this.courses.push(id)
    },
  },
})