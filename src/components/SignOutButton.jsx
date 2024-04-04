import React from "react"
import { useMsal } from "@azure/msal-react"
import Button from "react-bootstrap/Button"
import Dropdown from "react-bootstrap/Dropdown"

/**
 * Renders a sign-out button
 */
export const SignOutButton = () => {
  const { instance } = useMsal()

  const handleLogout = logoutType => {
    if (logoutType === "popup") {
      instance.logoutPopup({
        postLogoutRedirectUri: "/",
        mainWindowRedirectUri: "/",
      })
    } else if (logoutType === "redirect") {
      instance.logoutRedirect({
        postLogoutRedirectUri: "/",
      })
    }
  }

  return (
    <Button
      variant="secondary"
      className="mx-1"
      drop="start"
      title="Sign Out"
      onClick={() => handleLogout("popup")}
    >
      {/* <Dropdown.Item as="button" onClick={() => handleLogout("popup")}>
        Sign out using Popup
      </Dropdown.Item> */}
      Sign out
    </Button>
  )
}
