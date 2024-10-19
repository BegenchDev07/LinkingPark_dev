export const Register = () => {
  return (
    <form
      action=""
      className="flex w-full flex-col items-center justify-center gap-3 px-5"
    >
      <input
        type="number"
        name=""
        id=""
        className="w-full rounded-lg border-2 p-3"
        placeholder="手机号"
      />
      <input
        type="password"
        name=""
        id=""
        className="w-full rounded-lg border-2 p-3"
        placeholder="验证吗"
      />
      <div className="my-5 w-full">
        <input
          type="submit"
          className="w-full rounded-lg bg-[#031030] p-3 text-xl text-white"
          value={'Submit'}
        />
      </div>
    </form>
  )
}
