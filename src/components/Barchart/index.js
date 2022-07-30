import React, { Component } from 'react';
import BarChart from 'react-easy-bar-chart';
// import './App.css';

class Bar extends Component {
  render() {
  const data = [
    {
      title:  "Maths",
      value: 10,
      color: "white",
    },
    {
      title:  "English",
      value: 14,
      color: "white",
    },
    {
      title:  "Physics",
      value: 2,
      color: " white",
    },
    {
      title:  "Chemistry",
      value: 20,
      color: "white",
    },
    {
      title:  "Psychology",
      value: 15,
      color: "white",
    },
    {
      title:  "Biology",
      value: 12,
      color: " white",
    },
    {
      title:  "Economics",
      value: 5,
      color: "white",
    },
    {
      title:  "Social Science",
      value: 6,
      color: "white",
    },
    {
        title:  "Social Science",
        value: 6,
        color: "white",
      },
    ];
    return (
      <div className="App">
        <header className="App-header">
          <h4 className='text-center'>Poll Nation Chart</h4>
        </header>
        <BarChart 
          xAxis={data.title}
          yAxis="Values"
          height={400}
          width={800}
          data={data}
        />
      </div>
    );
  }
}

export default Bar;