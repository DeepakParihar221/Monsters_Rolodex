import { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list';
import { SearchBox } from './components/search-box/search-box';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  async componentDidMount() {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await data.json();

    this.setState({monsters : json});
  }
  render(){
  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes( searchField.toLowerCase()) 
  );


  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder="search monster" handleChange={e => this.setState({searchField: e.target.value })} />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}
}

export default App;
