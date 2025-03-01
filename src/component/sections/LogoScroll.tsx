import { LogoEight, LogoFive, LogoFour, LogoOne, LogoSeven, LogoSix, LogoThree, LogoTwo } from "../svgs/Logos"

const LogoScroll = () => {
  return (
    <div className="w-[98vw] mx-auto lg:mt-[20vh] mt-20 overflow-hidden">
    <div className="flex items-center scroll-content scroll-animation">
      <div className="flex items-center space-x-10 lg:space-x-20 lg:scale-100 scale-75">
        <LogoOne />
        <LogoTwo />
        <LogoThree />
        <LogoFour />
        <LogoFive />
        <LogoSix />
        <LogoSeven />
        <LogoEight />
      </div>
    </div>
  </div>
  )
}

export default LogoScroll
