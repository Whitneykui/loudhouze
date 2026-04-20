/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import Pulse from './pages/Pulse';
import Engine from './pages/Engine';
import Tickets from './pages/Tickets';
import Vault from './pages/Vault';
import EventDetails from './pages/EventDetails';

export default function App() {
  return (
    <Router>
      <Navigation>
        <Routes>
          <Route path="/" element={<Pulse />} />
          <Route path="/engine" element={<Engine />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Navigation>
    </Router>
  );
}
