import type from "./type.json"

const loadAllProducts = async () => {
  let result = []
  try {
    const response = await fetch(`/storage/data/Products.json`)
    const data = await response.json()
    result = data
  } catch (err) {
    console.error(err)
  }
  return {
    type: type.LOAD_ALL_PRODUCTS,
    data: result
  }
}

export const Actions = {
  loadAllProducts
}