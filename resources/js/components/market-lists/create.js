export default () => ({
  init() {
    window.addEventListener('saveMarket', () => {
      this.$refs.submit.click()
    })
  },
})
