import { StrictMode, useState, useEffect } from 'react';
import React = require('react');
import { Link } from 'react-router-dom';
import ReactDataGrid from '@inovua/reactdatagrid-community';

import { LocalData } from '../localData';

import { TeamEntity } from './../models/teamEntity';

export default function PagesAdminTeams(propUser) {
  const [teamsList, setTeamsList] = useState(new Array<TeamEntity>());
  const columns = [
    { name: 'teamName', header: 'Name', minWidth: 50, defaultFlex: 2 },
  ];

  useEffect(() => {
    setTeamsList(LocalData.Teams);
    console.log('use effect was called');
  }, []);

  return (
    <div>
      GESTISCI TEAMS
      <br />
      <br />
      <ReactDataGrid
        idProperty="teamName"
        columns={columns}
        dataSource={teamsList}
      />
      <br />
      <br />
      <br />
      <Link to={'/admin'}>torna pannello di controllo</Link>
    </div>
  );
}
