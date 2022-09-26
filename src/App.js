import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [search_field, setSearchField] = useState('');

  const onSearchChange = (event) => {
    const input_value = event.target.value.toLowerCase();
    setSearchField(input_value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const filtered_monsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(search_field);
  });

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
        className='monsters-search-box'
        placeholder='search monsters'
        onSearchHandler={onSearchChange}
      />
      <CardList monsters={filtered_monsters} />
    </div>
  );
};

export default App;
