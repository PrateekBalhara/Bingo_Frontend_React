import React from "react";
import {Link} from "react-router-dom";

class Homepage extends React.Component{
    render(){
        return(
            <div>
                <img src="/../public/bingo512.png" alt="Bingo icon"></img>
                {this.props.playOptions.map((option) => (
                    <div key={option.id}>
                        <Link to={option.link}>{option.text}</Link>
                    </div>
                ))}
                
            </div>
        )
    }
}

export default Homepage;