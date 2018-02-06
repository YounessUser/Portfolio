import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Testimonials from './Components/Testimonials';

class App extends Component {

    constructor(props){
        super(props);

        this.state={
            resumData:{}
        };
    }

    getResumData(){
        $.ajax({
            url:'http://localhost:3006/data.json',
            dataType:'json',
            cache:false,
            success:function (data) {
                this.setState({resumData: data});
            }.bind(this),
            error:function (xhr ,status, err ) {
                console.log(err);
                alert(err);
            }.bind(this)
        });
    }

    componentDidMount(){
        this.getResumData();
    }

  render() {
        console.log(this.state.resumData);
    return (
      <div >
        <Header data={this.state.resumData.main}/>
       <About data={this.state.resumData.main} />
        <Resume data={this.state.resumData.resume} />
        <Portfolio data={this.state.resumData.portfolio} />
        <Testimonials data={this.state.resumData.testimonials} />
        <Contact data={this.state.resumData.main} />
        <Footer/>
      </div>
    );
  }


}


export default App;
