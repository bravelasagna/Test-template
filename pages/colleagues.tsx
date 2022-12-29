import * as React from 'react';
import { Link } from 'react-router-dom';

export default function PagesColleagues(propUser) {
  return (
    <div>
      COLLEAGUES: {propUser.propUser}
      <Link to={'/home'}>via pagina 1</Link>
    </div>
  );
}
