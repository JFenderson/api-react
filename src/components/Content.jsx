import React, { Component } from 'react';

const api = 'https://ghibliapi.herokuapp.com/films';


class Content extends Component {
    constructor(props){
        super(props);

        this.state = {
            films:[],
            isLoading: false,
            error: null,  
           } 
    }
    
    componentDidMount() { 
         this.setState({ isLoading:true });

    fetch(api)
      .then(res => {
          if(res.ok) {
              return res.json();
          } else {
              throw new Error('something went wrong ...');
          }
      })
      .then(obj => obj.map(film => (
          {
              title: `${film.title}`,
              description: `${film.description}`,
              director: `${film.director}`,
              id: `${film.id}`,
              isLoading: false
          }
      )))
      .then(films => this.setState({
          films
      }))
      .catch(error => this.setState({ error, isLoading: false }));
    }

    handleClick() {
        this.setState()
    }


    render(){
        const { films, isLoading, error } = this.state;
        
        return (
            <div className="content">
                <div className="card film-cards">
                    {films.map(film =>
                    <div className="card-body film-container" key={film.objectID}>
                    <h5 className="card-title">{film.title}</h5>
                    <p className="card-text">{film.description}</p>
                    </div>
                    )}    
                </div>
            </div>
        )
    }


}

export default Content;