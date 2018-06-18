import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal, ThemeProvider } from 'styled-components'

import { HomePage } from 'components'

import theme from './themes/default'

injectGlobal`
  h1{
    text-align: center;
  }
  body {
  margin-left: auto;
  margin-right: auto;
  width: 500px;
  
    text-align: center;
    diplay: flex;
    background-color: #FCE1E5;
  }
  li {
    cursor:pointer;
    list-style: none;
  }
  ul {
    padding: 0;
  }
  input:focus{
    outline:none;
  }
  input{
    width: 350px;
    padding: 15px 32px;
  }
  input[type="text"] {
    padding: 10px;
    border: none;
    border-bottom: solid 3px #c9c9c9;
    transition: border 0.3s;
  }
  input[type="text"]:focus,
  input[type="text"].focus {
    border-bottom: solid 3px grey;
  }
  input::-webkit-input-placeholder {
    color: grey;
    transition: all 0.5s;
  }
  input:focus::-webkit-input-placeholder {
    color: white;
  }
  .btn{
    background-color: lightpink;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 8px;
    font-size: 16px;
    display:inline;
  }
  .btn2{
     background-color: lightpink;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 8px;
    font-size: 16px;
    display:inline;
  }
  .btn2:hover {
     background-color: white;
     color:black;
  }
  .btn:hover{
     background-color: white;
     color:black;
  }
  div{
    width: 500px;
  }
  ul>div>li{
    margin-right: auto;
  }
  ul>div{
    display: flex;
    flex-wrap: wrap;
  }
  .btn3{
    border-radius:50%;
    cursor:pointer;
  }
  .btn3:hover{
    background-color:red;
    transition:all 0.5s;
  }
`

const App = () => {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </ThemeProvider>
    </div>
  )
}

export default App
