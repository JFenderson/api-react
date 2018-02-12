import React, { Component } from 'react';

const api = 'https://ghibliapi.herokuapp.com/people';


class People extends Component {
    constructor(props){
        super(props);

        this.state = {
            people:[],
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
      .then(obj => obj.map(person => (
          {
              name: `${person.name}`,
              gender: `${person.gender}`,
              age: `${person.age}`,
              id: `${person.id}`,
              isLoading: false
          }
      )))
      .then(people => this.setState({
          people
      }))
      .catch(error => this.setState({ error, isLoading: false }));
    }


    render(){
        const { people, isLoading, error } = this.state;
        
        return (
            <div>
                <div className="card person-cards">
                    {people.map(person =>
                    <div className="card-body person-container" key={person.objectID}>
                    <h5 className="card-title">{person.name}</h5>
                    <p className="card-text">{person.gender} / {person.age}</p>
                    </div>
                    )}    
                </div>
            </div>
        )
    }


}

export default People;