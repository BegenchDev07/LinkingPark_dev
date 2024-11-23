import { Navbar } from "components/Navbar"
import { IdeaBox } from "components/IdeaBox"
import { FloatingButton } from "components/Buttons/FloatingButton"


export const Home = () => {
  return (
    <div className="size-screen px-5">
      <div className="size-full flex flex-col overflow-x-hidden">
        <Navbar/>
      </div>
      <div className="size-full flex items-center justify-center py-10 gap-3">
        <div className="w-1/2 flex flex-col">
          <IdeaBox/>
        </div>
        <div className="w-1/2 flex flex-col">
          <IdeaBox/>
        </div>
        <div className="absolute bottom-10 right-10">
          <FloatingButton label="发布"></FloatingButton>
        </div>
      </div>
    </div>

  )
}
