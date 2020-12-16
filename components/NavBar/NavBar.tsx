import { useState } from "react"
import styled from "styled-components"
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch"

const NavDiv = styled.div`
  background-image: url("/desktop/bg-pattern-header.svg");
  height: 200px;
  font-family: KumbhSans;
`

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const [Toggle, setToggle] = useState<boolean>(false)

  const onNewsletterChange = (checked: boolean) => {
    setToggle(checked)
  }
  return (
    <NavDiv className="w-full z-0 flex flex-col items-start bg-cover">
      <div className="z-10 flex mt-14 w-full justify-around items-center">
        <img src="/desktop/logo.svg" />

        <div className="flex w-36 h-20 justify-around items-baseline">
          <img src="/desktop/icon-sun.svg" alt="sun" className="z-10 w-8" />
          {/* <div className="flex items-center justify-start w-12 h-5 rounded-3xl bg-white">
            <div className="w-4 h-4 ml-1 bg-mypurple-medium rounded-full cursor-pointer" />
            
          </div> */}
          <ToggleSwitch
            id="toggle"
            checked={Toggle}
            onChange={onNewsletterChange}
          />
          <img src="/desktop/icon-moon.svg" alt="moon" className="w-8" />
        </div>
      </div>

      <div className="flex mt-5 bg-white m-auto justify-center items-center border rounded-lg w-7/12 h-16 z-20">
        <div className="flex flex-row justify-start items-center w-4/12 h-14 z-0  border-r-2 border-gray-300">
          <img
            src="/desktop/icon-search.svg"
            alt="search"
            className="w-6 ml-5"
          />
          <input
            type="text"
            placeholder="Filter by title, companies, expertise…"
            className="w-full ml-2 mt-1"
          />
        </div>
        <div className="w-4/12 h-14 z-0 flex flex-row justify-start items-center border-r-2 border-gray-300">
          <img
            src="/desktop/icon-location.svg"
            alt="location"
            className="w-5 ml-5"
          />
          <input
            type="text"
            placeholder="Filter by Location..."
            className="w-full ml-2 mt-1"
          />
        </div>
        <div className="w-4/12 h-14 z-0 "></div>
      </div>
    </NavDiv>
  )
}

export default NavBar
