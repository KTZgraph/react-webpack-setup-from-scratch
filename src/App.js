import React from "react";
import Simple from "./components/Simple";

export function App() {
  return (
    <div>
      <h1>Welcome {new Date().toDateString()}</h1>
      <Simple />
    </div>
  );
}
