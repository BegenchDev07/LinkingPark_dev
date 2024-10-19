import Avatar from "components/Avatar"
import { PillTags } from "components/PillTags"
import { BackButton } from "components/Buttons/BackButton"
export const Navbar = ({tags = true}) => {
  return(
    <div className="flex size-full flex-col overflow-x-hidden">
      <div className="flex h-auto w-full items-center justify-center gap-5 py-6 px-2">
        <div className="w-1/4 flex items-center justify-center">
          <BackButton/>
        </div>
        <div className="flex h-auto w-3/4 gap-3">
          <input
            type="text"
            placeholder="搜索"
            name=""
            id=""
            className="w-full rounded-full border-2 border-black p-2.5 font-semibold"
          />
        </div>
        <div className="flex size-auto items-center justify-center w-1/4">
          <Avatar size="medium" />
        </div>
      </div>
      <div className="w-full overflow-x-scroll px-3">
        {
        tags
        ??
        <PillTags />
        }
      </div>
    </div>
  )
}
