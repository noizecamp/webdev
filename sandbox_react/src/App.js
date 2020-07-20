import React from 'react'
import './styles.scss'


// Just for key
let counter = 0;

export const App = (props) => (
  <div>
    <h1>{props.data.name}</h1>
    <h2>{props.data.today}</h2>
    <ul>
      {props.data.buyList.map((thing) =>
        <li key={counter++}>{thing}</li>
      )}
      </ul>
  </div>
)
