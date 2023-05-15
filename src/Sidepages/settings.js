import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faWandSparkles } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';

function settings() {
  return (
<>
    <div class="container">
      <div class="row">
        <div class ="firstpart col-4 mt-1">
          <h3 class="bold mb-4 mt-4"><b >Project Settings</b></h3>
          <div class="divsize mb-1"><b>Size</b></div>
          <select name="size" class="size mb-3 mt-1">
            <option value="original">Original (16:9)</option>
            <option value="high">High (20:15)</option>
            <option value="low">Low (10:10)</option>
          </select>
          <div class="bg mb-1"><b>BackGround</b></div>
          <div class="btn-group-vertical">
            <div class="form-check mb-3 mt-1">
              <input type="radio" id="color" name="radio" value="col"/>
              <label for="color">color</label><br></br>
              <input type="radio" id="image" name="radio" value="img"/>
              <label for="image">Image</label><br></br>
            </div>
          </div>
          <div class="bg mb-1"><b>Audio</b></div>
            <div class="divaudio mb-3 mt-1">
              <div><i >< FontAwesomeIcon icon={faStar} class="icon" id="iconstar"/> </i></div>
              <div class="audio"><b class="b mr-2">Cleaned Audio</b> Remove Background noise</div>
              <div class="fabolt"><i >< FontAwesomeIcon icon={faBolt} class="icon" id="iconbolt"/> </i></div>
            </div>
            <div class="bg mb-1"><b>Duration</b></div>
            <div class="divaudio mb-3 mt-1">
              
            </div>
        </div>
      </div>
    </div>  
  </>
    
  )
}

export default settings