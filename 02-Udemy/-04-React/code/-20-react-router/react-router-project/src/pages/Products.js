import React from "react";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <h1>Products page</h1>
      <ul>
        <li>
          <Link to="/products/1"> A Book </Link>
        </li>
        <li>
          <Link to="/products/2"> A carpet</Link>
        </li>
        <li>
          <Link to="/products/3"> An online course</Link>
        </li>
      </ul>
    </>
  );
}
