import * as React from 'react';
import { Link } from "react-router-dom";

export default function Page2(propUser) {
  return (<div>PAGE B: 
    <Link to={'/page1'}>via pagina 1</Link>
  </div>);
}
