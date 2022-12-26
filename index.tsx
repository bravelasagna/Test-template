import * as React from 'react';
import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LocalData } from './data/localData';
import { ProjectEntity } from './data/projectEntity';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// MAIN APP
function App() {
  // INIT LOCAL DATA
  const [dataListProjectsState, setDataListProjectsState] = useState(LocalData);

  return (
    <div>
      <ListProjects dataListProjects={dataListProjectsState}></ListProjects>
    </div>
  );
}

function ListProjects(dataListProjects) {
  console.log(dataListProjects);

  return (
    <div>
      {dataListProjects.map((project) => {
        return (
          <div>
            <li key={project.projectId}>{project.title}</li>
          </div>
        );
      })}
    </div>
  );
}

// MAIN RENDERING
root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
