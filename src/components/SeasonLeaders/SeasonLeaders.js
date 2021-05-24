import React from 'react';
import BenSimmons from '../../images/ben-simmons.png';
import TobiasHarris from '../../images/tobias-harris.png';
import JoelEmbiid from '../../images/joel-embiid.png';
import DannyGreen from '../../images/danny-green.png';
import SethCurry from '../../images/seth-curry.png';
import MatisseThybulle from '../../images/matisse-thybulle.png'




const SeasonLeaders = () => {
 

 
  return (
   <div className="ui container">
      
      <div class="ui three column grid">
        
        <div class="column">
          <div class="ui fluid card">
            <div class="image">
              <img src={BenSimmons} alt="Ben Simmons"/>
            </div>
            <div class="content">
              <a class="left floated header">Ben Simmons</a>
              <a class="right floated header">25</a>
            </div>
            <div class="extra content">
              <span class="right floated">
                LSU
              </span>
              <span class="left floated">
                G-F
              </span>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui fluid card">
            <div class="image">
              <img src={JoelEmbiid} alt="Ben Simmons"/>
            </div>
            <div class="content">
              <a class="left floated header">Joel Embiid</a>
              <a class="right floated header">21</a>
            </div>
            <div class="extra content">
              <span class="right floated">
                Kansas
              </span>
              <span class="left floated">
                C-F
              </span>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui fluid card">
            <div class="image">
              <img src={TobiasHarris} alt="Tobias Harris"/>
            </div>
            <div class="content">
              <a class="left floated header">Tobias Harris</a>
              <a class="right floated header">12</a>
            </div>
            <div class="extra content">
              <span class="right floated">
                Tennessee
              </span>
              <span class="left floated">
                F
              </span>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui fluid card">
            <div class="image">
              <img src={DannyGreen} alt="Ben Simmons"/>
            </div>
            <div class="content">
              <a class="left floated header">Danny Green</a>
              <a class="right floated header">14</a>
            </div>
            <div class="extra content">
              <span class="right floated">
                North Carolina
              </span>
              <span class="left floated">
                G
              </span>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui fluid card">
            <div class="image">
              <img src={SethCurry} alt="Seth Curry"/>
            </div>
            <div class="content">
              <a class="left floated header">Seth Curry</a>
              <a class="right floated header">31</a>
            </div>
            <div class="extra content">
              <span class="right floated">
                Duke
              </span>
              <span class="left floated">
                G
              </span>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="ui fluid card">
            <div class="image">
              <img src={MatisseThybulle} alt="MatisseThybulle"/>
            </div>
            <div class="content">
              <a class="left floated header">Matisse Thybulle</a>
              <a class="right floated header">22</a>
            </div>
            <div class="extra content">
              <span class="right floated">
                Washington
              </span>
              <span class="left floated">
                G
              </span>
            </div>
          </div>
        </div>

       
      </div>


      
   </div>
    
  )
}

export default SeasonLeaders
