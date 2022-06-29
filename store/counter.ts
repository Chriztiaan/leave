import { defineStore } from "pinia"

export const useCounterStore = defineStore('counter', {
    state: () => ({
      n: 1,
    }),
  
    getters: {
      double: (state) => state.n * 2,
    },
  
    actions: {
      increment(amount = 1) {
        this.n += amount
      }
    },
  })
  