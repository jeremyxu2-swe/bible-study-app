import { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header, { BottomNav } from './components/Header.jsx';
import Overview from './pages/Overview.jsx';
import Book from './pages/Book.jsx';
import Chapter from './pages/Chapter.jsx';
import People from './pages/People.jsx';
import Person from './pages/Person.jsx';
import Prophecies from './pages/Prophecies.jsx';
import Notes from './pages/Notes.jsx';
import SearchPage from './pages/SearchPage.jsx';
import FreeNote from './pages/FreeNote.jsx';
import Empire from './pages/Empire.jsx';
import Church from './pages/Church.jsx';
import Nation from './pages/Nation.jsx';
import Settings from './pages/Settings.jsx';
import ChurchHistory from './pages/ChurchHistory.jsx';
import Compare from './pages/Compare.jsx';
import Kings from './pages/Kings.jsx';
import Daniel from './pages/Daniel.jsx';
import DanielDate from './pages/DanielDate.jsx';
import DanielBackground from './pages/DanielBackground.jsx';
import Apocrypha from './pages/Apocrypha.jsx';
import Journeys from './pages/Journeys.jsx';
import LeviticusStudy from './pages/LeviticusStudy.jsx';
import EndTimes from './pages/EndTimes.jsx';
import EndTimesView from './pages/EndTimesView.jsx';
import TheologyCompare from './pages/TheologyCompare.jsx';
import TheologySystem from './pages/TheologySystem.jsx';
import Denominations from './pages/Denominations.jsx';
import { KeyPeopleList, KeyPerson } from './pages/KeyPeople.jsx';
import BookPeek from './components/BookPeek.jsx';

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/book/:id" element={<Book />} />
        <Route path="/book/:id/:ch" element={<Chapter />} />
        <Route path="/people" element={<People />} />
        <Route path="/people/:id" element={<Person />} />
        <Route path="/prophecies" element={<Prophecies />} />
        <Route path="/kings" element={<Kings />} />
        <Route path="/daniel" element={<Daniel />} />
        <Route path="/daniel/written" element={<DanielDate />} />
        <Route path="/daniel/background" element={<DanielBackground />} />
        <Route path="/apocrypha" element={<Apocrypha />} />
        <Route path="/journeys" element={<Journeys />} />
        <Route path="/study/leviticus" element={<LeviticusStudy />} />
        <Route path="/theology/last-things" element={<EndTimes />} />
        <Route path="/theology/last-things/:view" element={<EndTimesView />} />
        <Route path="/theology/compare" element={<TheologyCompare />} />
        <Route path="/theology/compare/:system" element={<TheologySystem />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:folderId" element={<Notes />} />
        <Route path="/note/:id" element={<FreeNote />} />
        <Route path="/empire" element={<Navigate to="/empire/bronze" replace />} />
        <Route path="/empire/:id" element={<Empire />} />
        <Route path="/church/:id" element={<Church />} />
        <Route path="/nation/:id" element={<Nation />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/history/denominations" element={<Denominations />} />
        <Route path="/history/compare" element={<Compare />} />
        <Route path="/history/people" element={<KeyPeopleList />} />
        <Route path="/history/people/:id" element={<KeyPerson />} />
        <Route path="/history/:id" element={<ChurchHistory />} />
        <Route path="*" element={<Overview />} />
      </Routes>
      <footer className="site-foot">
        <div className="wrap">
          Scripture quotations are from the ESV® Bible (The Holy Bible, English Standard Version®), © 2001 by Crossway,
          a publishing ministry of Good News Publishers. Used by permission. All rights reserved.
        </div>
      </footer>
      <BottomNav />
      <BookPeek />
    </>
  );
}
