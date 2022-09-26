import { useState, useEffect, ChangeEvent } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import { getData } from './utils/data.utils';

import './App.css';


export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [search_field, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filtered_monsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const new_filtered_monsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(search_field);
    });

    setFilteredMonsters(new_filtered_monsters);
  }, [search_field, monsters]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const input_value = event.target.value.toLowerCase();
    setSearchField(input_value);
  };

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
