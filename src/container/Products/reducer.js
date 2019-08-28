import type from "./type.json"

let handlerActions = {}

handlerActions[`${type.LOAD_ALL_PRODUCTS}`] = (state = [], action) => {

}

const reducer = (state = [], action) => {
  try {
    const result = handlerActions[action.type](state, action)
    console.log(result)
    return state
  } catch (err) {
    return state
  }
}

export { reducer as Reducer }