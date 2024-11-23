import { useEffect } from "react"
interface ModalAction {
  action: number
}
export const Modal= () => {
  // useEffect(()=>{
  //   action;
  //   debugger;
  // },[action])
  return (
    <>
      <dialog id="my_modal_1"
        className="modal"
        >
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Delete
            </h3>
            <p className="py-4">Please confirm the action or press cancel</p>
            <div className="modal-action">
              <form method="dialog gap-3">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn mx-1 bg-black text-white">Confirm</button>
                <button className="btn mx-1">Close</button>
              </form>
            </div>
          </div>
      </dialog>
      <dialog id="my_modal_2"
      className="modal"
      >
        <div className="modal-box flex flex-col gap-3">
          <h3 className="font-bold text-lg">
            Reject
          </h3>
          <p className="text-xl font-semibold">Reason for rejection</p>
          <textarea className="border border-black w-full rounded-lg p-2" placeholder="please input reason for rejection"></textarea>
          <div className="modal-action">
            <form method="dialog gap-3">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn mx-1 bg-black text-white">Submit</button>
              <button className="btn mx-1">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      <dialog id="my_modal_3"
      className="modal"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Pass
          </h3>
          <p className="py-4">Please confirm the action or press cancel</p>
          <div className="modal-action">
            <form method="dialog gap-3 flex">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn mx-1 bg-black text-white">Confirm</button>
              <button className="btn mx-1">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>

  )
}
