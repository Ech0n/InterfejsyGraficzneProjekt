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
        console.debug("Trying to add course ",id)
      this.courses.push(id)
    },
    removeCourse(id){
      console.log(id)
      this.courses = this.courses.filter((el)=>{
        return el.id != id
      })
    }
  },
})