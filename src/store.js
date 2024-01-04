import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return { courses: [] ,totalPrice:0}
  },
  getters:{
    getCourses:(state)=> state.courses,
    isEmpty:(state)=> state.courses.length == 0,
    size:(state) => state.courses.length,
    price:(state) => state.totalPrice,
    },
  actions: {
    addCourse(item) {
        console.debug("Trying to add course ",item)
      this.courses.push(item)
      this.$patch({totalPrice:this.totalPrice+item.price})
    },
    removeCourse(id){
      console.log(id)
      this.courses = this.courses.filter((el)=>{
        if(el.id != id)
        {
          return true
        }
        this.$patch({totalPrice:this.totalPrice-el.price})
        return false
      })
      
    }
  },
})