/**
 * Replace <a> tags with React Router's <Link> component. This will stop the page from refreshing
 * when the user clicks on a link.
 *
 * For an example, see ./src/components/NowPlaying/NowPlaying.jsx in
 * @see https://codesandbox.io/s/react-router-vij9b?fontsize=14&hidenavigation=1&theme=dark
 */

import React from "react";
// import something here
import { Link } from 'react-router-dom';
import inventory from "../../assets/inventory";

function CustomeCategories(props) {
  return (
    <div className="row">
      {Object.entries(inventory).map(([category, products]) => {
        const link = `/category/${category}`;
        return (
          <div className="col" key={`category-${category}`}>
            <h2 className="h3 mb-3">
              {props.match.params.option}
              <Link to={link}>
                {category[0].toUpperCase() + category.substring(1)}
              </Link>
            </h2>
            <div className="card text-center">
              {/* Change me */}
              <Link to={link}>
                <img src={products[0].image} alt="" height={200} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CustomeCategories;
