import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainLayout from './components/layout';
import { AllRoutes } from './@types/components/App/routes.type';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from './Routes';

function App() {

  const getRoutes = (AllRoute: AllRoutes[]): any => (
    <React.Fragment>
      {AllRoute.map((route) => {
        if (route.route) {
          return (
            <Route key={route.key} path={route.route} element={<>{route.component}</>} />
          )
        }
        return null
      })}
    </React.Fragment>
  )


  return (
    <BrowserRouter>
      <>
        <MainLayout>
          <>
            <Routes>
              {getRoutes(routes)}
            </Routes>
          </>
        </MainLayout>
      </>
    </BrowserRouter>
  );
}

export default App;
