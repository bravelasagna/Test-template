import { StrictMode, useState, useEffect, useCallback } from 'react';
import React = require('react');
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';

import TeamsController from './../controllers/teamsController';

import { TeamEntity } from './../models/teamEntity';
import ModalConfirm from '../components/modalConfirm';
import { ModalConfirmParams } from '../components/modalConfirm';

export default function PagesAdminTeams() {
  // SYSTEM
  const navigate = useNavigate();
  let teamsController: TeamsController = new TeamsController();

  // STATE OBJECTS
  const [showPanel, setShowPanel] = useState('list');
  const [teamsList, setTeamsList] = useState([]);
  const [currentTeamId, setCurrentTeamId] = useState(0);
  const [currentTeamEditServerData, setCurrentTeamEditServerData] = useState(
    {}
  );
  const [txtTeamNameValueState, setTxtTeamNameValueState] = useState('');
  let iniDeleteConfirmParams: ModalConfirmParams = {
    show: false,
    body: 'Are you sure you want to delete this Team?',
    onClose: handleDeleteModalClose(),
  };
  const [deleteConfirmParams, setDeleteConfirmParams] = useState(
    iniDeleteConfirmParams
  );

  let a: ModalConfirmParams = null;

  // DATAGRID CONFIG
  const columns = [
    { name: 'teamId', header: 'TeamId', minWidth: 50, defaultFlex: 2 },
    { name: 'teamName', header: 'Name', minWidth: 50, defaultFlex: 2 },
  ];

  // ON LOAD
  useEffect(() => {
    async function fetchTeamsList() {
      await teamsController.List().then((data) => {
        setTeamsList(data);
      });
    }
    fetchTeamsList();
  }, []);

  // LIST PANEL
  const onRowClick = useCallback((rowProps, event) => {
    setShowPanel('edit');
    setTxtTeamNameValueState('');
    setCurrentTeamId(rowProps.data.teamId);
    getTeamDataById(rowProps.data.teamId);
  }, []);

  function handleAddClick() {
    setShowPanel('edit');
    setTxtTeamNameValueState('');
    setCurrentTeamId(0);
  }

  function x(data) {
    console.log(data);
    setCurrentTeamEditServerData(data);
    setTxtTeamNameValueState(data.teamName);
  }

  // EDIT PANEL
  async function getTeamDataById(teamId) {
    await teamsController.GetById(teamId).then((data) => {
      x(data[0]);
    });
  }

  function handleCancelClick() {
    setShowPanel('list');
  }

  function handleOnChange(e) {
    setTxtTeamNameValueState(e.target.value);
  }

  function handleDeleteClick() {
    // shows modal dialog confirm
    //let a = deleteConfirmParams;
    //a.show = true;

    setDeleteConfirmParams((deleteConfirmParams) => ({
      ...deleteConfirmParams,
      show: true,
    }));
    //setShowPanel('list');
  }

  function handleDeleteModalClose() {

  }

  async function handleSaveClick() {
    let currentTeamsList = teamsList.slice();
    let newId = currentTeamsList.length + 1;
    currentTeamsList.push({
      teamId: newId,
      teamName: txtTeamNameValueState,
    });
    await teamsController.Save(currentTeamsList).then((data) => {
      console.log(data);
    });
    //setShowPanel('list');
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
        <button onClick={(e) => navigate('/admin')}>Go Home</button>
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
        <ModalConfirm params={deleteConfirmParams}></ModalConfirm>
      </div>
    </div>
  );
}
