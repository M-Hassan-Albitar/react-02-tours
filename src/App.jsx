import { useEffect, useState } from "react";
import Loading from "./Loading";
import Tour from "./Tour";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  return (
    <main>
      <Tours />
    </main>
  );
};
export default App;
