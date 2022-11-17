import React, { Component } from "react";
import { IMonsters } from "../../models";

const Card = ({ monster }: { monster: IMonsters }) => {
  const { name, email, id } = monster;
  return (
    <div>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// export default class Card extends Component<{ monster: IMonsters }, {}> {
//   render() {
//     const { name, email, id } = this.props.monster;
//     return (
//       <div className="cl-card-container">
//         <img
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           alt={`monster ${name}`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }
export default Card;
