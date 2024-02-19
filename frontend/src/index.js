import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Life from './pages/life';
import Landing from './pages/landing';
import JobPostings from './pages/career/job-postings';
import ReferralListings from './pages/career/referral-listings';
import { SECTIONS } from './constants';

const root = ReactDOM.createRoot(document.getElementById("appRoot"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path={`/${SECTIONS.LIFE.TITLE}`} element={<Life />} />
        <Route path={`/${SECTIONS.DONATE.TITLE}`} element={<Landing />} />
        <Route path={`/${SECTIONS.CAREER.TITLE}/job-postings`} element={<JobPostings />} />
        <Route path={`/${SECTIONS.CAREER.TITLE}/referral-listings`} element={<ReferralListings />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
