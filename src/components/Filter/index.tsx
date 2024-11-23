export const Filter = () => {
  const openTopSelector = () => {
    document.getElementById('my_modal_top')?.showModal()
  }
  return(
    <>
      <div className="dropdown">
        <button
        onClick={_=>{openTopSelector()}}
        tabIndex={0}
        role="button"
         className="size-12 border border-black rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-settings-2"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>
        </button>
      </div>
      <dialog id="my_modal_top" className="modal">
        <div className="modal-box">
        <ul className="menu bg-base-200 rounded-box w-full">
          <li>
            <button>Item 1</button>
          </li>
          <li>
            <button>Item 2</button>
          </li>
          <li>
            <button>Item 3</button>
          </li>
        </ul>
        </div>
      </dialog>
    </>


  )
}
