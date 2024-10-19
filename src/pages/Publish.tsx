export const Publish = () => {
  return(
    <div className="size-full flex flex-col p-3">
      <form action="" className="">
        <textarea className="textarea textarea-primary border-none w-full" placeholder="Bio"></textarea>
        <hr />
        <label className="input flex items-center gap-2 py-1 text-lg text-gray-500">
          Tags
          <input type="text" className="grow border-none text-black" placeholder="" />
        </label>
        <hr />
        <label className="input flex items-center gap-2 py-1 text-lg text-gray-500">
          Location
          <input type="text" className="grow border-none text-black" placeholder="" />
        </label>
        <hr />
        <select className="select w-full text-lg">
          <option disabled selected>Pick an Agent</option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </form>
    </div>
  )
}
