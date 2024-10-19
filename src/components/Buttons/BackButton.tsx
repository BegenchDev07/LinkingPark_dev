import { useNavigate } from "react-router"

export const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
    onClick={()=>{navigate(-1)}}
     className="size-12 rounded-full bg-gray-400 flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6"/></svg>
    </button>
  )
}
