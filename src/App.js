import React from 'react'
import Character from './components/Character'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      characters: []
    }
  }

  componentDidMount = () => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then(result => result.json())
      .then(result => this.setState({ characters: result }))
  }

	render() {
    console.log(this.state)
		return(
      <>
			<h1 className="text-center">Game of thrones</h1>
      <ul className="d-flex justify-content-evenly flex-wrap">
      {this.state.characters.map((item) => {
            console.log(item)
            return (
              <Character name={item.fullName} title={item.title} image={item.imageUrl}/>
            )
          })}
          </ul>
      </>
		)
	}
}

export default App