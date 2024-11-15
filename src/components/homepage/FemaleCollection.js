import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  } from "@fortawesome/free-solid-svg-icons";

const FemaleCollection = () => {
  return (
    <div className='collection' >
        <div className='collectionTitle'>
            <span>FEMALE</span>
            <span>COLLECTION</span>
        </div>
        <div className='dailyCollection'>
            <div className='collectionRight'>
                <img src='/images/Femalecollection/Daily5.jpg' />
            </div>
            <div className='collectionMiddle'>
                <div className="dailyImg">
                    <img src='/images/Femalecollection/Daily3.jpg' />
                    <span>Something | ZARA | 20$</span>
                </div>
                <button >
                    <span class="material-symbols-outlined">
                    north_east
                    </span>
                    explore
                </button>
                
                
            </div>
            <div className='collectionLeft'>
                <span>*</span>
                <div className="dailyImg">
                    <img src='/images/Femalecollection/Daily4.jpg' />
                    <span>Pleated Pants | Mark&Spencer | 20$</span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default FemaleCollection