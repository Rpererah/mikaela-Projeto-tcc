import VLibras from '@moreiraste/react-vlibras'
import Logo from './../logo.png';
import { useState } from "react";
import VoiceNavigation from '../VoiceNavigation';

const MinhaNavBar = () => {
    const [showVlibras, setShowVlibras] = useState(false)
    const [showMicPlay,setShowMicPlay]=useState(true)
    console.log(showVlibras)
    return (
      <header id="header" >
        <div className="container">
          <div className="flex">
            <div className="logo"><a href="#"><img
              src={Logo}
              alt="Logo" className="d-inline-block align-text-top" />
            </a>
            </div>
            <nav className="menu-desktop">
              <ul className='justify-content-center align-items-center pt-4'>
                <li className="item-menu ativo">
                  <button type="button" class="btn btn-primary position-relative" href="#">
                    <span className="icon"><i className="material-icons-round">
                      home
                    </i>
                    </span>
                  </button>
                </li>
                <li className="item-menu">
                  <button type="button" class="btn btn-primary position-relative" onClick={() => setShowVlibras(!showVlibras)}>
                    <span className="icon"><i className="material-icons-round">
                      sign_language
                    </i>
                    </span>
                  </button>
                </li>
                <li className="item-menu">
                  <button type="button" class="btn btn-primary position-relative" onClick={()=>setShowMicPlay(!showMicPlay)}>
                    <span className="icon"><i className="material-icons-round">
                      mic
                    </i>
                    </span>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  
                      {showMicPlay ? 
                      <span class="material-icons-round">
                        play_arrow
                      </span>
                        :
                        <span class="material-icons-round">
                          stop_circle
                        </span>
                      }
                      <span class="visually-hidden">unread messages</span>
                    </span>
                  </button>
  
                </li>
              </ul>
            </nav>
            <div className="btn-suporte">
              <a href="/suporte.html"><button>SUPORTE</button></a>
            </div>
          </div>
        </div>
        {showVlibras ? <VLibras forceOnload={true} /> : ''}
      <VoiceNavigation />
      </header>
    )
  }

export default MinhaNavBar;