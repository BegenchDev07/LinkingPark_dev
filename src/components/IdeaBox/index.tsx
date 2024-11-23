import Avatar from "components/Avatar";
import { IdeaButtons } from "components/IdeaButtons";

interface EditStatus{
  edit: Boolean;
  status: number;
}

export const IdeaBox :React.FC<EditStatus> = ({edit,status}) => {

  return(
    <div className="card bg-base-100 w-full shadow-xl">
    <div className="card-body p-5">
    <div className="w-full flex gap-3 items-center justify-start">
      <Avatar size="small"/>
      <h2 className="card-title">植物爱好者</h2>
    </div>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-start">
    <div className="badge badge-outline">标签</div>
    <div className="badge badge-outline">标签</div>
    <div className="badge badge-outline">标签</div>
    <div className="badge badge-outline">标签</div>
    </div>

    {/* Here goes buttons */}
    <IdeaButtons status={status}/>

    <div className="card-actions justify-between">
      <h3 className="">Agent</h3>
      <div className="flex gap-3 items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share-2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
      </div>
    </div>
  </div>
  </div>
  )
}
