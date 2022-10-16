import React from "react"

const Main = ({ Main: { users }, fetchUsers }) => {
  React.useEffect(() => {
    fetchUsers()
  }, [fetchUsers])
  return (
    <div>
      {users.map(({ name, id }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  )
}

export default Main
