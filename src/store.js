import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    let sessionCart = JSON.parse(sessionStorage.getItem("cart"))
    if(!sessionCart)
    {
      sessionStorage.setItem("cart",JSON.stringify({courses:[],totalPrice:0.0,tutorings:[]}))
      sessionCart = {courses:[],totalPrice:0.0,tutorings:[]}
    }

    return { courses: sessionCart.courses, 
            totalPrice: sessionCart.totalPrice, 
            tutorings: sessionCart.tutorings}
  },
  getters:{
    getCourses:(state)=> state.courses,
    getTutorings:(state)=> state.tutorings,
    isEmpty:(state)=> (state.courses.length + state.tutorings.length) == 0,
    size:(state) => state.courses.length+ state.tutorings.length,
    price:(state) => state.totalPrice,
    },
  actions: {
    addCourse(item) {
      if(!this.courses.some(el=>el.id==item.id))
      {
        this.courses.push(item)
        this.$patch({totalPrice:this.totalPrice+item.price})

        //Update cart in session storage
        let cart = JSON.parse(sessionStorage.getItem("cart"))
        cart.courses.push(item)
        cart.totalPrice += item.price
        sessionStorage.setItem("cart",JSON.stringify(cart))
       return true

      }else
      {
       return false
      }
    },addTutoring(item) {
      if(!this.tutorings.some(el=>el.id==item.id))
      {
        this.tutorings.push(item)
        this.$patch({totalPrice:this.totalPrice+item.price})

        //Update cart in session storage
        let cart = JSON.parse(sessionStorage.getItem("cart"))
        cart.tutorings.push(item)
        cart.totalPrice += item.price
        sessionStorage.setItem("cart",JSON.stringify(cart))
        return true

      }else
      {
      return false
      }
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
    },
    removeTutoring(id){
      console.log(id)
      this.tutorings = this.tutorings.filter((el)=>{
        if(el.id != id)
        {
          return true
        }
        this.$patch({totalPrice:this.totalPrice-el.price})
        return false
      })

      //Update cart in session storage
      let cart = JSON.parse(sessionStorage.getItem("cart"))
      cart.tutorings = this.tutorings
      cart.totalPrice = this.totalPrice
      sessionStorage.setItem("cart",JSON.stringify(cart))
    },
    buy(){
      this.courses = []
      this.tutorings = []
      this.totalPrice = 0.0
      sessionStorage.setItem("cart",JSON.stringify({courses:[],totalPrice:0.0,tutorings:[]}))
    }
  },

})