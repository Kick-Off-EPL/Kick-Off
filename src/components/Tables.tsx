// import { type any } from "next";
// import React, { useState } from 'react';

// const Tables: any = () => {
//   return(
//     <div>
//       <div>
//         Hi
//       </div>
//     </div>
//   );
// };

// export default Tables;

import React from 'react';

type Listing = {
  id: number;
  description: string;
  price: number;
};

type ListingsTableProps = {
  listings: Listing[] | undefined;
};

const ListingsTable = ({ listings }: ListingsTableProps) => {
  console.log(listings);
  const table1 = listings?.slice(0, 20);
  const table2 = listings?.slice(20, 40);
  const table3 = listings?.slice(40, 60);

  return (
    <div id="listings">
      <table>
        <thead>
          <tr>
            <th>Listing #</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {table1 &&
            table1.map((listing) => (
              <tr key={listing.id}>
                <td>{listing.id}</td>
                <td>{listing.description}</td>
                <td>{listing.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Listing #</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {table2 &&
            table2.map((listing) => (
              <tr key={listing.id}>
                <td>{listing.id}</td>
                <td>{listing.description}</td>
                <td>{listing.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Listing #</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {table3 &&
            table3.map((listing) => (
              <tr key={listing.id}>
                <td>{listing.id}</td>
                <td>{listing.description}</td>
                <td>{listing.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListingsTable;