import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-solid-svg-icons";

const MenCollection = ({triggerRef}) => {
  return (
    <div className='collection' ref={triggerRef}>
        <div className='collectionTitle'>
            <span>MEN</span>
            <span>COLLECTION</span>
        </div>
        <div className='dailyCollection'>
            <div className='collectionLeft'>
                <div className="dailyImg">
                    <img src='/images/menCollection/dailyImg1.jpg' />
                    <span>Blazer | Mark&Spencer | 20$</span>
                </div>
                <span>*</span>
                
            </div>
            <div className='collectionMiddle'>
                <button >
                    <span class="material-symbols-outlined">
                    north_east
                    </span>
                    explore
                </button>
                <div className="dailyImg">
                    <img src='/images/menCollection/dailyImg2.jpg' />
                    <span>Jacker | ZARA | 20$</span>
                </div>
                
            </div>
            <div className='collectionRight'>
                <img src='/images/menCollection/dailyMen.jpg' />
            </div>
        </div>
        
    </div>
  )
}

export default MenCollection