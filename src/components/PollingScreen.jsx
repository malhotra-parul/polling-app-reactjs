import React, { Component } from "react";
import "./PollingScreen.styles.css";

class PollingScreen extends Component {
    constructor(){
        super();
        this.state = {
            selected : "",
            languages:[{
                name: "Vanilla JS", votes: 0
            }, {
                name: "Angular JS", votes: 0
            }, {
                name: "React JS", votes: 0
            }, {
                name: "Vue JS", votes: 0
            }]
        }
    }

    onSubmit =  (e)=>{
        e.preventDefault();
        const language = this.state.languages.reduce((acc, language)=>{
            if(this.state.selected === language.name){
                language.votes = language.votes+1;
            }
            return [...acc, language];
        
        }, []);      
    
        this.setState({
            selected : "", languages: language
        });
        console.log(this.state.languages[2]);
    }
    onChange = (e)=>{
        this.setState({
            selected: e.target.value,
            
        });
    }
    render(){
    return(
        <div className="container">
            <div className="polling-list">
            <h2>Which is your favourite framework?</h2>
            <form onSubmit={this.onSubmit}>
                <div className="option"><label><input type="radio" 
                                                value="Vanilla JS" 
                                                onChange={this.onChange}
                                                checked={this.state.selected === "Vanilla JS"} />Vanilla JS</label>
                                                <span className="votes">{this.state.languages[0].votes}</span></div>
                <div className="option"><label><input type="radio" 
                                                      value="Angular JS" 
                                                      onChange={this.onChange}
                                                      checked={this.state.selected === "Angular JS"}/>Angular JS</label>
                                                      <span className="votes">{this.state.languages[1].votes}</span></div>
                <div className="option"><label><input type="radio" 
                                                      value="React JS" 
                                                      onChange={this.onChange}
                                                      checked={this.state.selected === "React JS"}/>React JS</label>
                                                      <span className="votes">{this.state.languages[2].votes}</span></div>
                <div className="option"><label><input type="radio" 
                                                      value="Vue JS" 
                                                      onChange={this.onChange}
                                                      checked={this.state.selected === "Vue JS"}/>Vue JS</label>
                                                      <span className="votes">{this.state.languages[3].votes}</span></div>
               <button type="submit">Submit Vote!</button>
            </form>
            </div>
            
        </div>
    )}
}



export default PollingScreen;