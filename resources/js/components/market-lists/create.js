export default () => ({
  items: [],
  init() {
    window.addEventListener('saveMarket', () => {
      this.$refs.submit.click()
    })
  },
  getTotalItems() {
    return `Total de itens: ${this.items.length}`
  },
  updateItems(value) {
    this.items = value.split('\n').filter((item) => item.length > 1)
  },
  onSubmit() {
    const elemenToBeDeleted = document.getElementById('market-list')
    elemenToBeDeleted.remove()
    const marketList = document.getElementById('_market-list')
    marketList.value = JSON.stringify(this.items)
  },
})
