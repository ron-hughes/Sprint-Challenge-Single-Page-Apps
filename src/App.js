import React from "react";
import TabNav from './components/TabNav';
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter";

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <AppRouter />
    </main>
  );
}
