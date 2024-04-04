/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"
import Row from "react-bootstrap/Row"

import { useIsAuthenticated } from "@azure/msal-react"
import { SignInButton } from "./SignInButton"
import { SignOutButton } from "./SignOutButton"

/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props
 */
export const PageLayout = props => {
  const isAuthenticated = useIsAuthenticated()

  return (
    <>
      <Navbar bg="dark" variant="dark" className="navbarStyle">
        <a className="navbar-brand" href="/">
          My Dataverse Portail
        </a>

        <div className="collapse navbar-collapse justify-content-end">
          {isAuthenticated ? <SignOutButton /> : <SignInButton />}
          {isAuthenticated ? (
            <img
              className="rounded img-circle mr-2"
              width="40px"
              height="auto"
              src={props.ImageProfile}
            />
          ) : (
            ""
          )}
        </div>
      </Navbar>
      <h5>
        <center>
          Here you can create,read,update,delete rows on you Dataverse tables
          using Dataverse WebAPI
        </center>
      </h5>
      <br />
      <br />
      {props.children}
    </>
  )
}
