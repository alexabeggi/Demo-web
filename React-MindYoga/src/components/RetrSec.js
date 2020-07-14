import React from 'react';
import './RetrSec.css';

function RetrSec() {
    
    return (
        <div className="Retreats" id="retreats">
            <h2>Retreats</h2>
                <div className="retreats-bar"> <p> </p></div>

                <div className="collage" >
                    <div className="one"> 
                        <h3 className="txt1"> Seririt, Bali </h3>
                    </div>

                    <div className="two"> 
                        <h3 className="txt2"> Seminyak, Bali </h3>
                    </div>

                    <div className="three"> 
                        <h3 className="txt3"> Beruwala, Sri Lanka </h3>
                    </div>
                </div>

                <div className="ref">
                    <p><br></br><br></br><a href="https://www.doyou.com/10-beautiful-yoga-retreats-in-asia/" target="_blank"> - Reference </a></p>
                </div>
        </div>
    );
  }
  
  export default RetrSec;