import { StrictMode, useState, useEffect, useCallback } from 'react';
import React = require('react');
import { Link } from 'react-router-dom';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';

import { LocalData } from '../localData';

import { TeamEntity } from './../models/teamEntity';

export default function PagesAdminTeams(propUser) {
  const [showPanel, setShowPanel] = useState('list');
  const [teamsList, setTeamsList] = useState(new Array<TeamEntity>());
  const [txtTeamNameValueState, setTxtTeamNameValueState] = useState('');


  const columns = [
    { name: 'teamId', header: 'TeamId', minWidth: 50, defaultFlex: 2 },
    { name: 'teamName', header: 'Name', minWidth: 50, defaultFlex: 2 },
  ];

  useEffect(() => {
    setTeamsList(LocalData.Teams);
    console.log('use effect was called');

    fetch("https://expresssimplecwxaq7-l0g5--3000.local-credentialless.webcontainer.io/test")
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )



  }, []);

  const onRowClick = useCallback((rowProps, event) => {
    console.log(rowProps);
    setShowPanel("edit");
    setTxtTeamNameValueState(rowProps.data.teamName);
  }, []);

  function handleCancelClick() {
    setShowPanel("list");
  }

  
  function handleOnChange(e) {
    setTxtTeamNameValueState(e.target.value);
  }

  function RenderValidation() {
    //if (showValidationState) {
      //return <span>Inserire il nome progetto</span>;
    //}
    return <div></div>;
  }

  return (
    <div>
      <div hidden={showPanel != 'list'}>
        GESTISCI TEAMS
        <br />
        <br />
        <ReactDataGrid
          idProperty="teamId"
          columns={columns}
          dataSource={teamsList}
          onRowClick={onRowClick}
        />
        <br />
        <br />
        <br />
        <Link to={'/admin'}>torna pannello di controllo</Link>
      </div>
      <div hidden={showPanel != 'edit'}>
        DETTAGLI TEAM
        <br />
        <input
            type="text"
            value={txtTeamNameValueState}
            onChange={handleOnChange}
          ></input>
          <RenderValidation></RenderValidation>
        <br />
        <br />
        <a onClick={(e) => handleCancelClick()}>Torna alla lista</a>
      </div>
    </div>
  );
}
