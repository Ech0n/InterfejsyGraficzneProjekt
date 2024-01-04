import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    let sessionCart = JSON.parse(sessionStorage.getItem("cart"))
    if(!sessionCart)
    {
      sessionStorage.setItem("cart",JSON.stringify({courses:[],totalPrice:0}))
    }

    return { courses: sessionCart.courses ,totalPrice:sessionCart.totalPrice}
  },
  getters:{
    getCourses:(state)=> state.courses,
    isEmpty:(state)=> state.courses.length == 0,
    size:(state) => state.courses.length,
    price:(state) => state.totalPrice,
    },
  actions: {
    addCourse(item) {
      if(sessionStorage.set)
        console.debug("Trying to add course ",item)
      this.courses.push(item)
      this.$patch({totalPrice:this.totalPrice+item.price})

      //Update cart in session storage
      let cart = JSON.parse(sessionStorage.getItem("cart"))
      cart.courses.push(item)
      cart.totalPrice += item.price
      sessionStorage.setItem("cart",JSON.stringify(cart))
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

      //Update cart in session storage
      let cart = JSON.parse(sessionStorage.getItem("cart"))
      cart.courses = this.courses
      cart.totalPrice = this.totalPrice
      sessionStorage.setItem("cart",JSON.stringify(cart))
    }
  },
})