import React from 'react';
import './css/home.css';
function HomeScreen(){
    return (
        <div className="weatherContainer">
            <div className="weatherBox">
                <div className="Header">
                <div className="searchBar">
                    <input type="search" name="search" id="search" className="search" placeholder="Enter query..."/>
                    <button>Search</button>
                </div>
                <div className="reading">
                    <div className="read">C</div>
                    <span className="slash">/</span>
                    <div className="read">F</div>
                </div>
                
                </div>
                <div className="weatherResult">
                <div className="resultTemp">
                    36*
                </div>
                <div className="resultText">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam libero cumque laudantium, debitis quasi voluptatibus eligendi corrupti, perferendis ullam impedit maxime ipsam porro? Alias illo corporis sunt, nostrum quo tempore.
                </div>
                <div className="resultExtras">
                    <div className="resultExtrasBox">
                        <h1>weather</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur sint nulla harum,</p>
                    </div>
                    <div className="resultExtrasBox">
                        <h1>weather</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur sint nulla harum,</p>
                    </div>
                    <div className="resultExtrasBox">
                        <h1>weather</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur sint nulla harum,</p>
                    </div>
                    <div className="resultExtrasBox">
                        <h1>weather</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur sint nulla harum,</p>
                    </div>
                    <div className="resultExtrasBox">
                        <h1>weather</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur sint nulla harum,</p>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    );
}

export default HomeScreen;