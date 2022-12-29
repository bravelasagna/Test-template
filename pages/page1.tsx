import * as React from 'react';
import { Link } from "react-router-dom";

export default function Page1(propUser) {
  console.log(propUser);
  return <div>PAGE A: {propUser.propUser}
    <Link to={'/page2'}>via pagina 2</Link>
  </div>;
}
