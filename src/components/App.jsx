import "../index.css";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

export default function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
