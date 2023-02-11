export default async (alpineData) => {
  const { marketLists } = await import('./market-lists/')
  Object.keys(marketLists).forEach((value) => alpineData(value, marketLists[value]))
}
