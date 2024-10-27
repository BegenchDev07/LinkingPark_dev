import { forwardRef, useEffect, useImperativeHandle, useState, useRef } from "react"

export const MenuSelector = forwardRef((props,ref) => {
  const buttonClicked = useRef(null);
  // const [buttonState, setButtonState] = useState<string | null>(null);

  const handleButton = (e:any) => {
    // setButtonState(e.currentTarget.id)
    buttonClicked.current = e.currentTarget.id
  }

  useImperativeHandle(ref,()=>({
    // getClickedButton: () => buttonState
    getClickedButton: () => buttonClicked.current
  }));

  return(
    <div role="tablist" className="tabs tabs-lifted">
      <a id="1"  onClick={(e)=>{handleButton(e)}} role="tab"className="tab">已通过</a>
      <a id="2"  onClick={(e)=>{handleButton(e)}} role="tab" className="tab">审核中</a>
      <a id="3"  onClick={(e)=>{handleButton(e)}} role="tab" className="tab">未通过</a>
      <a id="4"  onClick={(e)=>{handleButton(e)}} role="tab" className="tab">点赞过</a>
    </div>
  )
})
