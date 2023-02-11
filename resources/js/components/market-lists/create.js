export default () => ({
  init() {
    window.addEventListener('saveMarket', () => {
      console.log('saved')
      this.$refs.submit.click()
    })
  },
})
