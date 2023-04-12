import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import { animals } from './Animalslist';
import { birds } from './Animalslist';

import List from './pages/List';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';

import './App.css';



class App extends Component {

  state = {
    animals: animals,
    birds: birds,
    searchInput: ''
  }


  /*getLocalStorageData = () => {
    const getData = JSON.parse(localStorage.getItem('likes'));
    return getData;

  }*/


  removeHandler = (name, remove) => {

    const updatedArray = this.state[remove].filter(animal => animal.name !== name)
    this.setState({
      [remove]: updatedArray
    })
  }

  likesHandler = (name, action, list) => {
    const updatedArray = this.state[list].map((item) => {
      if (item.name === name) {
        if (action === 'add') {
          return { ...item, likes: item.likes + 1 }
        } else {
          return { ...item, likes: item.likes - 1 }
        }
      } else {
        return item
      }
    })

    localStorage.setItem('likes', JSON.stringify(updatedArray));

    this.setState(
      {
        [list]: updatedArray
      }
    )

  }

  searchHandler = (e) => {
    this.setState({
      searchInput: e.target.value
    })

  }


  render() {
    return (

      <BrowserRouter>

        <div className='app-container'>

          <Header data1={this.state.animals} data2={this.state.birds} />

          <Routes>

            <Route path='/' element={<Home />} />

            <Route path="/animals" element={<List
              title="animals"
              data={this.state.animals}
              removeHandler={this.removeHandler}
              likesHandler={this.likesHandler}
              searchHandler={this.searchHandler}
              searchInput={this.state.searchInput} />} />


            <Route path="/birds" element={<List
              title="birds"
              data={this.state.birds}
              removeHandler={this.removeHandler}
              likesHandler={this.likesHandler}
              searchHandler={this.searchHandler}
              searchInput={this.state.searchInput} />} />

            <Route path='about' element={<About />} />

          </Routes>

          <Footer />

        </div>

      </BrowserRouter>
    )
  }
}

export default App;


