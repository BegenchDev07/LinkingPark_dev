import { Navbar } from "components/Navbar"

export const Contact = () => {
  return(
    <div className="w-full h-screen flex flex-col items-center justify-start gap-14 bg-gray-500 px-3">
      <div className="w-full h-auto">
        <Navbar tags={false}/>
      </div>
      <div className="w-full h-1/2 container mx-auto rounded-xl bg-white flex flex-col items-center justify-center p-3 gap-3">
        <div className="size-full bg-gray-300 rounded-xl">

        </div>
        <div className="w-full flex flex-col items-start justify-between gap-2">
          <h1 className="font-bold text-lg">Name</h1>
          <h1>1234567890</h1>
        </div>
      </div>
    </div>
  )
}
