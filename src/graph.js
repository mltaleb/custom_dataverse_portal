import { graphConfig } from "./authConfig"

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken
 */
export async function callMsGraph(accessToken) {
  const headers = new Headers()
  const bearer = `Bearer ${accessToken}`

  headers.append("Authorization", bearer)

  const options = {
    method: "GET",
    headers: headers,
  }

  return fetch(graphConfig.graphMeEndpoint, options)
    .then(response => response.json())
    .catch(error => console.log(error))
}
export async function callMsGraphImage(accessToken) {
  const headers = new Headers()
  const bearer = `Bearer ${accessToken}`

  headers.append("Authorization", bearer)

  const options = {
    method: "GET",
    headers: headers,
  }

  return fetch(graphConfig.graphMeEndpointImage, options)
    .then(response => response.blob())
    .catch(error => console.log(error))
}
export async function callDataverse(accessToken) {
  const headers = new Headers()
  const bearer = `Bearer ${accessToken}`

  headers.append("Authorization", bearer)

  const options = {
    method: "GET",
    headers: headers,
  }

  return fetch(graphConfig.dataverseEndpoint, options)
    .then(response => response.json())
    .catch(error => console.log(error))
}
