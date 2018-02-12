import React, { Component } from 'react';
import styles from './styles.css'
import Content from './components/Content';
import People from './components/People';


class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            clicked: false,
            showFilms: false
           } 
        
        this.handleClick = this.handleClick.bind(this);
        this.showFilms = this.showFilms.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: true,
            showFilms: false
        });
    }

    showFilms(){
        this.setState({
            showFilms: true,
            clicked: false
        })
    }


    render(){
        return (
            <div>
                <div className="filmHeader">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png" className="logo"/>
                    <h1 className="title">Studio Ghibli Films</h1>
                </div>
                <button className="film-button"
                 onClick={this.handleClick.bind(this)}>Show Me The Films</button>
                {this.state.clicked ? <Content /> : null}

                 <button className="people-button"
                 onClick={this.showFilms.bind(this)}>Show Me People</button>
                 {this.state.showFilms ? <People /> : null}
            </div>
            
        );
    }
}
export default App;