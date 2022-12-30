import * as React from 'react';
import { Link } from 'react-router-dom';

export default function PagesAdmin(propUser) {
  return (
    <div>
      ADMIN PANEL
      <br />
      <Link to={'/adminTeams'}>Gestisci Teams</Link>
    </div>
  );
}
