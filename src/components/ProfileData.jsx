import React from "react"

/**
 * Renders information about the user obtained from MS Graph
 * @param props
 */
export const ProfileData = props => {
  console.log(props.graphData)
  return (
    <div id="">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Logic Name</th>
          </tr>
        </thead>
        <tbody>
          {props.graphData.map((item, key) => (
            <tr key={key}>
              <th scope="row">{key}</th>
              <td>{item.name}</td>
              <td>{item.url}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <p><strong>First Name: </strong> {props.graphData.givenName}</p>
            <p><strong>Last Name: </strong> {props.graphData.surname}</p>
            <p><strong>Email: </strong> {props.graphData.userPrincipalName}</p>
            <p><strong>Id: </strong> {props.graphData.id}</p> */}
    </div>
  )
}
