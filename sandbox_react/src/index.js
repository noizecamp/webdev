import React from 'react'
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { App } from './App'

library.add(fas)

// Date
let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

let data = {
  name: "Kyaw Phyu Aung",
  today: date + "/" + month + "/" + year,
  buyList: ["Orange", "Banana", "Chocolate"],
};

ReactDOM.render(
  <App data={data}/>,
  document.getElementById('root')
)
