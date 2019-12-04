import React, { Component } from 'react';

import './App.css';
import Visa from './Visa.jpg'
import puce1 from './puce1.png'
/*const espace = (str) => {
  let arr=[]
  let str1=''
 
    if((str.length)%4===0){
      arr= str.slice(str.length-4,str.length).split('')
       arr.push(' ')
      str1 =  arr.join('')
    }
      
        arr= str.slice(0,4).split('')
        str1 = str + arr.join('')
      str.replace(arr.join(''),'')
       
      
    
  
  return str1

}*/
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      number : '',
      name : '',
      date : ''

    }

  }
  
  numberChange = (e) => {
    

    let a="1"+e.target.value
    console.log(a)
    if(e.target.value.length<=19 && a[e.target.value.length].match(/[0-9 ]/g)) {
      if ((e.target.value.length+1)%5===0 && this.state.lastIndex<e.target.value.length){
        this.setState({
          number: e.target.value + ' ' ,
          lastIndex:e.target.value.length,
        })
       
      }
      else {
        this.setState({
        number : e.target.value,
        lastIndex:e.target.value.length,
      })}
    }





  }
  nameChange = (event) => {
    const { value, maxLength } = event.target;
    const message = value.slice(0, maxLength);
    
    this.setState({ name : message.toUpperCase()}) 
    
  }



 









  dateChange = (e) => {
    
    
    let a="1"+e.target.value
    console.log(a)
    
    if((!Number(e.target.value.slice(0,2)))){
      console.log(Number(e.target.value.slice(1,2)))
      this.setState({
        date : '',
      },console.log(e.target.value.slice(0,2)))
    }
   
      if((Number(e.target.value.slice(0,2))<=12) ){

        if(e.target.value.length<=5 && a[e.target.value.length].match(/[0-9/]/g)) {
            this.setState({
              date : e.target.value,
              lastIndex:e.target.value.length,
            },console.log(e.target.value.slice(0,2)))
    
          }
          if (e.target.value.length===2 && this.state.lastIndex<e.target.value.length){
            this.setState({
              date: e.target.value + '/' ,
              lastIndex:e.target.value.length,
            })
           
          }
          else {
            this.setState({
            date : e.target.value,
            lastIndex:e.target.value.length,
          })}
        }
    
  }

  render() {
    return (
      
    <div className="Card">
      <div className="Top">
        <p>
          <span>CREDIT CARD</span>
        </p>
      </div>
      
      <section >
        <div className="image">
          <img src={puce1} className="img"></img>
        </div>
        <div className="Bottom">
          
          <div className="Numbers"> 
            <div class="Name">
              <span className="Numero"> {this.state.number.padEnd(19,'*')}</span>
            </div>
            <div className ="Number">
              <h3>{this.state.name}</h3>
              <div>
                <span>
                  {this.state.date.padEnd(5,'*')}
                </span>
              </div> 
            </div>
          </div> 
          
          <img src={Visa} className="Visa"></img>
        
        </div>
       
      </section>
      <div className="inputs">

        <input type="text" onChange={this.numberChange} value={this.state.number} maxLength='19'></input>
        <input type="text" onChange={this.nameChange} value={this.state.name} maxLength='20'></input>
        <input type="text" onChange={this.dateChange} value={this.state.date} maxLength='5'></input>
      
        </div>
        
        
        
      
      
    </div>
          
        
    );
  }
}

export default App;
