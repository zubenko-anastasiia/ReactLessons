/**
 *
 * @param {*} state
 * @param {*} action
 */

const initialMainState = {
  users: [],
}

export const mainReducer = (state = initialMainState, action) => {
  return {
    ...state,
    ...action.payload,
  }
}
