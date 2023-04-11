import React, { Component } from 'react';
import { animals } from './Animalslist';
import Animals from './Animals';
import Header from './Header';
import Footer from './Footer';

import Home from './Home';
import About from './About';

import { birds } from './Animalslist';
import Birds from './Birds';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import './App.css';



class App extends Component {

  state = {
    animals: animals,
    // title: 'Living worlds',
    birds: birds,
    searchInput: ''
  }

  removeHandler = (name) => {

    const updatedArray = this.state.animals.filter(animal => animal.name !== name)
    this.setState({
      animals: updatedArray
    })
  }


  removeHandler2 = (name) => {

    const updatedArray = this.state.birds.filter(bird => bird.name !== name)
    this.setState({
      birds: updatedArray
    })

  }

  likesHandler = (name, action) => {
    this.setState((prevState) => {
      const updatedArray = prevState.animals.map((animal) => {
        if (animal.name === name) {
          if (action === 'add') {
            return { ...animal, likes: animal.likes + 1 }
          }
          else {
            return { ...animal, likes: animal.likes - 1 }
          }
        }
        else {
          return animal
        }

      })
      return {
        animals: updatedArray
      }
    })

  }

  likesHandler2 = (name, action) => {
    this.setState((prevState) => {
      const updatedArray = prevState.birds.map((bird) => {
        if (bird.name === name) {
          if (action === 'add') {
            return { ...bird, likes: bird.likes + 1 }
          }
          else {
            return { ...bird, likes: bird.likes - 1 }
          }
        }
        else {
          return bird
        }

      })
      return {
        birds: updatedArray
      }
    })

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

          <Header />

          <Routes>

            <Route path='/' element={<Home />} />

            <Route path='/animals' element={<Animals
              data={this.state.animals}
              likesHandler={this.likesHandler}
              removeHandler={this.removeHandler}
              searchHandler={this.searchHandler}
              searchInput={this.state.searchInput}

            />} />

            <Route path='/Animals' element={<Animals
              data={this.state.animals}
              likesHandler={this.likesHandler}
              removeHandler={this.removeHandler}
              searchHandler={this.searchHandler}
              searchInput={this.state.searchInput}

            />} />


            <Route path='/birds' element={<Birds
              data={this.state.birds}
              likesHandler2={this.likesHandler2}
              removeHandler2={this.removeHandler2}
              searchHandler={this.searchHandler}
              searchInput={this.state.searchInput}

            />} />

            <Route path='/Birds' element={<Birds
              data={this.state.birds}
              likesHandler2={this.likesHandler2}
              removeHandler2={this.removeHandler2}
              searchHandler={this.searchHandler}
              searchInput={this.state.searchInput}

            />} />

            <Route path='about' element={<About />} />

          </Routes>

          <Footer />

        </div>

      </BrowserRouter>
    )
  }
}

export default App;


