import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter',{
  id: 'counter',
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    
  },
})
