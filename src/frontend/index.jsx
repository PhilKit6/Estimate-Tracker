import React from 'react';
import ForgeReconciler, { Text } from '@forge/react';
import { DynamicTable, Link } from "@forge/react";

const App = () => {
  const presidents = [
    {
      id: 7,
      name: "Andrew Jackson",
      party: "Democrat",
      term: "1829-1837",
    },
    {
      id: 8,
      name: "Martin van Buren",
      party: "Democrat",
      term: "1837-1841",
    },
    {
      id: 11,
      name: "James K. Polk",
      party: "Democrat",
      term: "1845-1849",
    },
  ];

  const createKey = (input) => {
    return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
  }
  // applied as rows in the form
  const rows = presidents.map((president, index) => ({
    key: `row-${index}-${president.name}`,
    cells: [
      {
        key: `${president.name}-${president.id}`,
        content: <Link href="">{president.name}</Link>,
      },
      {
        key: `${president.party}-${president.name}-${president.id}`,
        content: president.party,
      },
      {
        key: `${president.term}-${president.id}`,
        content: president.term,
      },
    ],
  }));

  const head = {
    cells: [
      {
        key: "name",
        content: "Name",
        isSortable: true,
      },
      {
        key: "party",
        content: "Party",
        shouldTruncate: true,
        isSortable: true,
      },
      {
        key: "term",
        content: "Term",
        shouldTruncate: true,
        isSortable: true,
      },
    ],
  };

  return (
    <>
      <Text>Hello world!</Text>
      <DynamicTable
        caption="List of US Presidents"
        head={head}
        rows={rows}
      />
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);