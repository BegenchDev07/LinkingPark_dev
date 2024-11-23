export const ManagePage = () => {
  return(
    <div className="p-5 flex items-center justify-start gap-5">
      <div className="flex flex-col items-center justify-center gap-2 ">
        <button className="size-20 rounded-xl shadow-xl drop-shadow-md flex items-center justify-center border hover:shadow-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round-check"><path d="M2 21a8 8 0 0 1 13.292-6"/><circle cx="10" cy="8" r="5"/><path d="m16 19 2 2 4-4"/></svg>
        </button>
        <h1 className="font-semibold">Verification</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <button className="size-20 rounded-xl shadow-xl drop-shadow-md flex items-center justify-center border hover:shadow-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-round-cog"><path d="M2 21a8 8 0 0 1 10.434-7.62"/><circle cx="10" cy="8" r="5"/><circle cx="18" cy="18" r="3"/><path d="m19.5 14.3-.4.9"/><path d="m16.9 20.8-.4.9"/><path d="m21.7 19.5-.9-.4"/><path d="m15.2 16.9-.9-.4"/><path d="m21.7 16.5-.9.4"/><path d="m15.2 19.1-.9.4"/><path d="m19.5 21.7-.4-.9"/><path d="m16.9 15.2-.4-.9"/></svg>
        </button>
        <h1 className="font-semibold">Settings</h1>
      </div>
    </div>
  )
}
