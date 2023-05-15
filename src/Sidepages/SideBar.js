import React from 'react'
import {AiOutlineAudio,AiOutlineMenu, AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {MdSettings} from 'react-icons/md'
import {BiText} from 'react-icons/bi'
import {SiElementary} from 'react-icons/si'
import {GrTemplate} from 'react-icons/gr'
import { Link } from 'react-router-dom'
function SideBar() {
  return (
    <div class="condainer col-1">
      <div class="row">
        <ul>
          <li>
            <button class="sideicon"><AiOutlineMenu/></button>
          </li>
          <li>
           <Link  class="nav-link" to="/settings">
              <button class="sideicon"><MdSettings/></button>
              <p>Settings</p>
            </Link>
          </li>
          <li>
            <Link  class="nav-link" to="/media">
              <button class="sideicon"><AiOutlinePlus/></button>
              <p>Media</p>
            </Link>
          </li>
          <li>
            <Link  class="nav-link" to="/audio">
              <button class="sideicon"><AiOutlineAudio /> </button>
              <p>Audio</p>
            </Link>
          </li>
          <li>
            <Link  class="nav-link" to="/subtitles">
              <button class="sideicon"><AiOutlineMinus /> </button>
              <p>Subtitle</p>
            </Link>
          </li>
          <li>
            <Link  class="nav-link" to="/text">
              <button class="sideicon"><BiText/> </button>
              <p>Text</p>
            </Link>
          </li>
          <li>
            <Link  class="nav-link" to="/elements">
             <button class="sideicon"><SiElementary/> </button>
             <p>Element</p>
            </Link>
          </li>
          <li>
          <Link  class="nav-link" to="/templates">
            <button class="sideicon"><GrTemplate/> </button>
            <p>Template</p>
          </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar