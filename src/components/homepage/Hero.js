import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const hero = () => {
  return (
    <div className='hero' >
        <span className='title'>BE FASHIONABLE</span>
        <div className='bottom'>
            <div className='col'>
                <div className='logo'>
                  <img src='/images/logo.png' />
                </div>
                {/* <div className="grain2"><div className="grain"></div></div> */}
                <div className='slogan'>
                  <p>Bored of your closet? Borrow from ours.
                   Blah blah is the premier destination for renting designer fashion.
                  </p>
                  <button>
                    <span>See our collection</span><FontAwesomeIcon icon={faCaretRight} />
                  </button>
                </div>
            </div>
            <div className='imageDay'>
              <img alt="oops there should have been an image here -_-" src='images/Daily.jpg' />
            </div>
        </div>
    </div>
  )
}

export default hero