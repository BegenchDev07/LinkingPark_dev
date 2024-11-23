import { Modal } from "components/Modal";
interface IdeaStatus {
  status: number;
}

export const IdeaButtons:React.FC<IdeaStatus> = ({status}) => {
  const showModal = (data:number) => {
    switch (data) {
      case 1:
        document.getElementById('my_modal_1')?.showModal()
        break;
      case 2:
        document.getElementById('my_modal_2')?.showModal()
        break;
      case 3:
        document.getElementById('my_modal_3')?.showModal()
        break;
      default:
        break;
    }

  }
  const returnByStatus = () => {
    if(status === 1)
      return (
      <div className="flex flex-wrap gap-3 items-center justify-between py-2">
        <button
         className="border border-red-600 text-red-600 py-1 px-2 rounded-lg"
         onClick={_=>{showModal(1)}}
        >Delete</button>
        <button
        className="bg-red-600 text-white  border border-red-600 py-1 px-2 rounded-lg"
        onClick={_=>{showModal(2)}}
        >Reject</button>
        <button
        className="bg-black text-white border-black rounded-lg border py-1 px-2"
        onClick={_=>{showModal(3)}}
        >Pass</button>
      </div>
      )
    else if(status === 2)
      return (
        <div className="flex flex-wrap gap-3 items-center justify-between py-2">
        <button
         className="border border-red-600 text-red-600 py-1 px-2 rounded-lg"
         onClick={_=>{showModal(1)}}
        >Delete</button>
        <button
        className="bg-red-600 text-white  border border-red-600 py-1 px-2 rounded-lg"
        onClick={_=>{showModal(2)}}
        >Reject</button>
      </div>
      )
    else if(status === 3)
      return (
        <div className="flex flex-wrap gap-3 items-center justify-between py-2">
        <button
         className="border border-red-600 text-red-600 py-1 px-2 rounded-lg"
         onClick={_=>{showModal(1)}}
        >Delete</button>
        <button
        className="bg-black text-white border-black rounded-lg border py-1 px-2"
        onClick={_=>{showModal(3)}}
        >Pass</button>
      </div>
      )
    else
      return(<></>)
  }
  return (
    <>
      {returnByStatus()}
      <Modal />
    </>
  )
}
