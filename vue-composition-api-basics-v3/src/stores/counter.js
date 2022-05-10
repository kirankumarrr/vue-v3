import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0,
    title: 'My Counter Title'
  }),
  actions: {
    newIncreaseCounter(amount = 1) {
      this.count += amount
    },
    increaseCounter(amount = 1) {
      this.count += amount
    },
    decreaseCounter(amount) {
      this.count -= amount
    },
    changeTitle(e) {
      console.log('e', e.target.value)
      this.title = e.target.value
    }
  },
  getters: {
    oddOrEven: (state) => {
      return state.count % 2 === 0 ? 'even' : 'odd'
    }
  }
})
