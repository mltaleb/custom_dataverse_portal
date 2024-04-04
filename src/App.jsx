import React, { useEffect, useState } from "react"
import "./styles/App.css"
import { PageLayout } from "./components/PageLayout"
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react"
import Button from "react-bootstrap/Button"
import { loginRequest } from "./authConfig"
import { callMsGraph, callDataverse, callMsGraphImage } from "./graph"
import { ProfileData } from "./components/ProfileData"

/**
 * Renders information about the signed-in user or a button to retrieve data about the user
 */
const ProfileContent = () => {
  const { instance, accounts } = useMsal()
  const [graphData, setGraphData] = useState(null)

  // function RequestProfileData() {
  //   // Silently acquires an access token which is then attached to a request for MS Graph data
  //   instance
  //     .acquireTokenSilent({
  //       ...loginRequest,
  //       account: accounts[0],
  //     })
  //     .then(response => {
  //       callMsGraph(response.accessToken).then(response =>
  //         setGraphData(response)
  //       )
  //     })
  // }
  function RequestDataverse() {
    // Silently acquires an access token which is then attached to a request for MS Graph data
    instance
      .acquireTokenSilent({
        scopes: ["https://yourEnvUrl/.default"],
        account: accounts[0],
      })
      .then(response => {
        //callMsGraph(response.accessToken).then((response) => setGraphData(response));
        callDataverse(response.accessToken).then(response =>
          setGraphData(response.value)
        )
      })
  }

  return (
    <>
      <h5 className="card-title">Welcome {accounts[0].name}</h5>
      {graphData ? (
        <ProfileData graphData={graphData} />
      ) : (
        <Button variant="dark" onClick={RequestDataverse}>
          Check out
        </Button>
      )}
    </>
  )
}

/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
const MainContent = () => {
  return (
    <div className="App">
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <h5 className="card-title">
          Sign in to check all your Dataverse tables.
        </h5>
      </UnauthenticatedTemplate>
    </div>
  )
}

export default function App() {
  const { instance, accounts } = useMsal()
  const [ImageProfile, setImageProfile] = useState(null)

  useEffect(() => {
    console.log(accounts)
    if (accounts[0]) {
      instance
        .acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
        })
        .then(response => {
          callMsGraphImage(response.accessToken).then(response => {
            let url = URL.createObjectURL(response)
            setImageProfile(url)
          })
        })
    }
  }, [accounts, instance])
  return (
    <PageLayout ImageProfile={ImageProfile}>
      <MainContent />
    </PageLayout>
  )
}
