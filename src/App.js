import React, { Component } from 'react';
import { animals } from './Animalslist';
import Animals from './Animals';
import Header from './Header';
import Footer from './Footer';



class App extends Component {

  state = {
    animals: animals,
    title: 'Living worlds',
    searchInput: ''
  }

  removeHandler = (name) => {

    const updatedArray = this.state.animals.filter(animal => animal.name !== name)
    this.setState({
      animals: updatedArray
    })

    // console.log('remove handler', name)
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

  // console.log('likes handler', name, action)


  searchHandler = (e) => {
    this.setState({
      searchInput: e.target.value
    })

  }



  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <Animals
          data={this.state.animals}
          likesHandler={this.likesHandler}
          removeHandler={this.removeHandler}
          searchHandler={this.searchHandler}
          searchInput={this.state.searchInput} />
        <Footer />
      </div>
    )
  }
}


export default App;

{/* <div>
{this.state.animals.map(animal => { return <li>{animal.name}, likes:{animal.likes}</li> })}


</div> */}