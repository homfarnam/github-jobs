import Head from "next/head"

import NavBar from "../components/NavBar/NavBar"

interface LayoutProps {
  title: string
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <NavBar />
      <div>{children}</div>
    </>
  )
}

export default Layout
