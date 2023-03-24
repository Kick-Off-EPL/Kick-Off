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

import React from "react";

type Listing = {
  id: number;
  name: string;
  goals: number;
  assists: number;
  yellow_cards: number;
};

type ListingsTableProps = {
  players: Listing[] | undefined;
};

const ListingsTable = ({ players }: ListingsTableProps) => {
  const data = players?.slice();

  return (
    <div id="listings" style={{ display: 'flex' }}>
      <table style={{ flex: 1, width: '100%', borderCollapse: 'collapse', margin: '0 10px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid black' }}>
            <th style={{ padding: '10px 0', textAlign: 'left' }}></th>
            <th style={{ padding: '10px 0', textAlign: 'left'}}>Players</th>
            <th style={{ padding: '10px 0', textAlign: 'center' }}>Goals</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((player, index) => (
              <tr key={player.id} style={{ borderBottom: '1px solid black' }}>
                <td style={{ padding: '10px 0', paddingRight: '20px' }}>{`${index + 1}`}</td>
                <td style={{ padding: '10px 0', minWidth: '250px' }}>{`${player.name}`}</td>
                <td style={{ padding: '10px 0', textAlign: 'center' }}>{player.goals}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <table style={{ flex: 1, width: '100%', borderCollapse: 'collapse', margin: '0 10px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid black' }}>
            <th style={{ padding: '10px 0', colSpan: 1, textAlign: 'left' }}></th>
            <th style={{ padding: '10px 0', colSpan: 2, textAlign: 'left' }}>Players</th>
            <th style={{ padding: '10px 0', textAlign: 'center' }}>Assists</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((player, index) => (
              <tr key={player.id} style={{ borderBottom: '1px solid black' }}>
                <td style={{ padding: '10px 0', paddingRight: '20px'}}>{`${index + 1}`}</td>
                <td style={{ padding: '10px 0', minWidth: '250px' }}>{`${player.name}`}</td>
                <td style={{ padding: '10px 0', textAlign: 'center' }}>{player.assists}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <table style={{ flex: 1, width: '30%', borderCollapse: 'collapse', margin: '1 10px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid black' }}>
            <th style={{ padding: '10px 0', colSpan: 1, textAlign: 'left' }}></th>
            <th style={{ padding: '10px 0', minWidth: '160px', textAlign: 'left' }}>Players</th>
            <th style={{ padding: '10px 0', textAlign: 'center' }}>🟨</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((player, index) => (
              <tr key={player.id} style={{ borderBottom: '1px solid black' }}>
                <td style={{ padding: '10px 0', paddingRight: '20px' }}>{`${index + 1}`}</td>
                <td style={{ padding: '10px 0', minWidth: '250px' }}>{`${player.name}`}</td>
                <td style={{ padding: '10px 0', textAlign: 'center' }}>{player.yellow_cards}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListingsTable;
