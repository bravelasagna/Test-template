import * as React from 'react';
import { Link } from "react-router-dom";

export default function PagesHomepage(propUser) {
  console.log(propUser);
  return <div>HOMEPAGE: {propUser.propUser}
    <Link to={'/page2'}>via pagina 2</Link>
  </div>;
}
