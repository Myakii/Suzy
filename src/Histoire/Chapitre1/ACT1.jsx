import React, { useEffect } from 'react'

export default function ACT1() {
    const [isBgBack, setIsBgBack] = useState(false);
    const [isBgCusine, setIsBgCusine] = useState(false);

    useEffect(() => {
        setIsBgBack(true);
    })
  return (
    <div className='chapitre1_act1'>
    {isBgCusine&& <div className="BgCuisine"></div>}
    </div>
  )
}
