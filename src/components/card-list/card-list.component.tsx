import React, { Component } from "react";
import { IMonsters, IMonstersProps } from "../../models";
import Card from "../Card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }: IMonstersProps) => {
  return (
    <div className="cl-card-list">
      {monsters.map((monster) => {
        return (
          <div key={monster.id} className="cl-card-container">
            <Card monster={monster} />
          </div>
        );
      })}
    </div>
  );
};

// export default class CardList extends Component<{ monsters: IMonsters[] }, {}> {
//   render(): React.ReactNode {
//     const { monsters } = this.props;
//     return (
//       <div className="cl-card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }
export default CardList;
