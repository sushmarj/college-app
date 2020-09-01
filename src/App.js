import React, {Component} from 'react';
import axios from 'axios';
import image from './image/college_02.jpg'
import './App.css';

class App  extends Component {
  constructor(props) {
    super(props);
    this.serviceUrl=" http://localhost:3000/colleges";
    this.state = { 
      colleges : [{}]
     }
  }

  componentDidMount() {
    axios.get(this.serviceUrl).then((res) => {
      this.setState({
        colleges: res.data
      
      });
      console.log(this.state.colleges)
    })

  }
  render() { 
    return (
      <div className="w3-container">
        <b > College in North India </b> <br/> <br/>
        <div className="row">
          {this.state.colleges.map((college, i) => 
                <div className="column">
                  
                    <div className="card w3-display-container w3-text-white" width="639" height="376.4" >
                    <p className="pointer" style={{textAlign:"center"}} > Promoted </p>
                      <button className="Rectangle-3">{college.rating}<br/> {college.rating_remarks}</button>
                     
                        <img id="target" src={image} alt="not found" width="637.3" height="233.2"/> 
                        <p className="rank">#{college.ranking}</p>
                        
                        {/* {college.amenties.map((i, j) => 
                         
                        <span className="msg_container" style={{backgroundColor:'#ccf5e7'}}> {i }</span> 
                        )} */}
                  <span className="msg_container" style={{backgroundColor:'#ccf5e7'}}> {college.tags}</span> 
                        <div className="w3-container">
                           <b>{college.college_name}</b> &#9733;&#9733;&#9733;&#9733;&#9734;   
                          <div className="text" > &#x20B9;{college.original_fees}</div>  &nbsp;
                          <span className="tag"><span className="discount">{college.discount}</span> </span> 
                          <p className="txt"> 
                          &#x20B9;{college.discounted_fees}</p> 
                          <p className="sem">{college.fees_cycle}</p>
                        <p className="">{college.nearest_place}</p>
                      93 % Match : {college.famous_nearest_places} <br/>    
                      <button className="btn" style={{backgroundColor:'#ccf5e7'}}>{college.offertext} </button> <br/>
                     <p className="amenties" >{college.amenties}</p> 
                    
                      
                      </div>
                      </div>
        </div>
       
        )}
        </div>
      </div>
      );
  }
}

export default App;
