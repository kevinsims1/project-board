import React from 'react'
import {connect} from 'react-redux'
import { Media } from 'react-bootstrap'


var card = {
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  transition: '0.3s',
  padding: '3rem'
}

// /* On mouse-over, add a deeper shadow */
// var mouseEnter =  {
//   boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
// }

class ProjectCard extends React.Component {
    constructor(props){
       super(props);
       this.state = {

        } 
    }
   render(){        
  return (
    <div className="card">
        {this.props.projects.map(obj => (    
            <Media as="li" style={card}>
            <img
              width={64}
              height={64}
              padding='1rem'
              className="mr-3"
              src={obj.img}
            />
            <Media.Body>
              <h5>{obj.name}</h5>
              <p>{obj.description}</p>
              <ul>
                <li>{obj.tasks}</li>
              </ul>
              <span className="note">{obj.languages}</span>
            </Media.Body>
            </Media>       
        ))}        
    </div>
  );
}
}
const mapStateToProps = state => ({
    projects: state.projects
  })
  
  export default connect(mapStateToProps)(ProjectCard)