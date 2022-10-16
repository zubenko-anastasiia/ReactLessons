/**
 *
 * @param {*} state
 * @param {*} action
 */

const initialMainState = {
  email: "",
  password: "",
}

export const authReducer = (state = initialMainState, action) => {
  return {
    ...state,
    ...action.payload,
  }
}
