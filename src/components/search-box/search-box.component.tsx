import React, { Component } from "react";
import "./search-box.styles.css";

interface ISearchBoxProps {
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  placeholder: string;
  className: string;
}

const SearchBox = (props: ISearchBoxProps) => {
  return (
    <input
      className={props.className}
      type="search"
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
    />
  );
};

// export default class SearchBox extends Component<ISearchBoxProps, {}> {
//   render() {
//     return (
//       <input
//         className={this.props.className}
//         type="search"
//         placeholder={this.props.placeholder}
//         onChange={this.props.onChangeHandler}
//       />
//     );
//   }
// }
export default SearchBox;
