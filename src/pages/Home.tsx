import { Navbar } from "components/Navbar"
import { IdeaBox } from "components/IdeaBox"


export const Home = () => {
  return (
    <div className="size-screen px-5">
      <div className="size-full flex flex-col overflow-x-hidden">
        <Navbar/>
      </div>
      <div className="size-full flex py-10 gap-3">
        <div className="w-1/2 flex flex-col">
          <IdeaBox/>
        </div>
        <div className="w-1/2 flex flex-col">
          <IdeaBox/>
        </div>
      </div>
    </div>

  )
}
