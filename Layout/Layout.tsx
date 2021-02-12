import Head from "next/head"
import { Dispatch, SetStateAction } from "react"

import NavBar from "../components/NavBar/NavBar"

interface LayoutProps {
  title: string
  setMyLocation: Dispatch<SetStateAction<string>>
  setDescription: Dispatch<SetStateAction<string>>
  MyLocation: string
  Description: string
  // setFullTime: Dispatch<SetStateAction<string>>
}

const Layout: React.FC<LayoutProps> = ({
  title,
  children,
  setMyLocation,
  MyLocation,
  setDescription,
  Description,
  // setFullTime,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar
        setMyLocation={setMyLocation}
        MyLocation={MyLocation}
        setDescription={setDescription}
        Description={Description}
      />
      <div>{children}</div>
    </>
  )
}

export default Layout
