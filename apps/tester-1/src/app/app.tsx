// apps/my-app/src/app/app.tsx
import * as React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { environment } from '../environments/environment';

import './app.scss';
import { Home } from '@nrwl-nx-react/home';
import { Gifs } from '@nrwl-nx-react/gifs';

export const App = () => (
  <BrowserRouter>
    <div className="app">
      <nav className="app-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/gifs">Search GIFs</Link>
          </li>
        </ul>
      </nav>
      <div className="app-content">
        <Route path="/" exact component={Home} />
        <Route
          path="/gifs"
          render={() => <Gifs apiKey={environment.giphy.apiKey} />}
        />
      </div>
    </div>
  </BrowserRouter>
);
