import { Component, useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import { IMonsters } from "./models";
import React from "react";

interface IState {
  monsters: IMonsters[];
  searchString: string;
}

export const App = () => {
  const [monsters, setMonsters] = useState<IMonsters[]>([]);
  const [filteredMonsters, setFilteredMonsters] =
    useState<IMonsters[]>(monsters);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchString)
    );
    setFilteredMonsters(newfilteredMonsters);
  }, [monsters, searchString]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let val = e.target.value.toLocaleLowerCase();
    setSearchString(val);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex with TypeScript</h1>
      <SearchBox
        onChangeHandler={handleChange}
        placeholder="Search monsters"
        className="search-box"
      />

      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component<{}, IState> {
//   constructor(props: {}) {
//     super(props);

//     this.state = {
//       monsters: [],
//       searchString: "",
//     };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange(event: React.FormEvent<HTMLInputElement>) {
//     let val = event.currentTarget.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {
//         searchString: val,
//       };
//     });
//   }

//   componentDidMount(): void {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((data) => data.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   render() {
//     const filteredMonsters = this.state.monsters.filter((monster) =>
//       monster.name.toLocaleLowerCase().includes(this.state.searchString)
//     );
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex with TypeScript</h1>
//         <SearchBox
//           onChangeHandler={this.handleChange}
//           placeholder="Search monsters"
//           className="search-box"
//         />

//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
