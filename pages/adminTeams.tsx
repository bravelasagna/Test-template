import { StrictMode, useState, useEffect, useCallback } from 'react';
import React = require('react');
import { Link, useNavigate } from 'react-router-dom';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';

import LinkButton from './../ui/linkButton';
import ListTasks from './../components/tasksList';

import { TeamEntity } from './../models/teamEntity';

export default function PagesAdminTeams() {
  // STATE OBJECTS
  const [showPanel, setShowPanel] = useState('list');
  const [teamsList, setTeamsList] = useState(new Array<TeamEntity>());
  const [currentTeamId, setCurrentTeamId] = useState(0);
  const [txtTeamNameValueState, setTxtTeamNameValueState] = useState('');

  // DATAGRID CONFIG
  const columns = [
    { name: 'teamId', header: 'TeamId', minWidth: 50, defaultFlex: 2 },
    { name: 'teamName', header: 'Name', minWidth: 50, defaultFlex: 2 },
  ];

  // ON LOAD
  useEffect(() => {
    fetch('https://mockend.com/bravelasagna/test-template/Teams?limit=5')
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setTeamsList(result);
        },
        (error) => {}
      );
  }, []);

  // LIST PANEL
  const onRowClick = useCallback((rowProps, event) => {
    setShowPanel('edit');
    setTxtTeamNameValueState(rowProps.data.teamName);
    setCurrentTeamId(rowProps.data.teamId);
  }, []);

  function handleAddClick() {
    setShowPanel('edit');
    setTxtTeamNameValueState('');
    setCurrentTeamId(0);
  }

  // EDIT PANEL
  function handleCancelClick() {
    setShowPanel('list');
  }

  function handleOnChange(e) {
    setTxtTeamNameValueState(e.target.value);
  }

  function handleDeleteClick() {
    setShowPanel('list');
  }

  function handleSaveClick() {
    setShowPanel('list');
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
        <LinkButton to="/admin">Torna Indietro</LinkButton>
        <button onClick={(e) => handleAddClick()}>Crea nuovo Team</button>
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
        <button onClick={(e) => handleCancelClick()}>Torna alla lista</button>
        <button onClick={(e) => handleDeleteClick()}>Delete</button>
        <button onClick={(e) => handleSaveClick()}>Save</button>
      </div>
    </div>
  );
}
