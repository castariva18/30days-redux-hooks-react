// import logo from "./logo.svg";

import { AddKontak, ListKontak } from "./components";

function App() {
  return (
    <div style={{ padding: "3%" }}>
      <h2>Kontak App</h2>
      <hr />
      <AddKontak />
      <hr />
      <ListKontak />
    </div>
  );
}

export default App;
