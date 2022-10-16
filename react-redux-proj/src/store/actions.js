import axios from "axios"

export const setMainState = (payload) => ({
  type: "SET_MAIN_STATE",
  payload,
})

export const fetchUsers = () => async (dispatch) => {
  try {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users")
    dispatch(setMainState({ users: data }))
  } catch ({ message }) {
    console.error(message)
  }
}
