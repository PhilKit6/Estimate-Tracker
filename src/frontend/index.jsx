import React from 'react';
import ForgeReconciler, { Text } from '@forge/react';
import { DynamicTable, Link } from "@forge/react";
import { requestJira } from '@forge/bridge';


const App = () => {

  const fetchStoryPointsForIssue = async (issueIdOrKey) => {
    const res = await requestJira(`/rest/api/3/issue/${issueIdOrKey}`);
    const data = await res.json();
    const storyPoints = data.fields["Story Points[Number]"]; // Access the story points field
    console.log(storyPoints); // Print the story points to the terminal
    return storyPoints;
  };
  
  const estimates = [
    {
      id: 7,
      Cycle: "1",
      Product_Design: "M",
      Tech_Design: "XL",
      Squad_Refinement: "-",
      Dev_and_release: "-",
    },
    {
      id: 8,
      Cycle: "2",
      Product_Design: "M",
      Tech_Design: "M",
      Squad_Refinement: "L",
      Dev_and_release: "-",
    },
  ];

  const createKey = (input) => {
    return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
  }
  // applied as rows in the form
  const rows = estimates.map((estimate, index) => ({
    key: `row-${index}-${estimate.Cycle}`,
    cells: [
      {
        key: `${estimate.Cycle}`,
        content: estimate.Cycle,
      },
      {
        key: `${estimate.Product_Design}`,
        content: `${estimate.Product_Design} \u27A1`,
      },
      {
        key: `${estimate.Tech_Design}`,
        content: estimate.Tech_Design,
      },
      {
        key: `${estimate.Squad_Refinement}`,
        content: estimate.Squad_Refinement,
      },
      {
        key: `${estimate.Dev_and_release}`,
        content: estimate.Dev_and_release,
      },
    ],
  }));

  const head = {
    cells: [
      {
        key: "Cycle",
        content: "Cycle",
        isSortable: true,
      },
      {
        key: "Product_Design",
        content: "Product Design",
        shouldTruncate: true,
        isSortable: true,
      },
      {
        key: "Tech_Design",
        content: "Tech Design",
        shouldTruncate: true,
        isSortable: true,
      },
      {
        key: "Squad_Refinement",
        content: "Squad Refinement",
        shouldTruncate: true,
        isSortable: true,
      },
      {
        key: "Dev_and_release",
        content: "Dev and Release",
        shouldTruncate: true,
        isSortable: true,
      },
    ],
  };

  return (
    <>
      <DynamicTable
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