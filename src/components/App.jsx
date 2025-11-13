// src/components/App.jsx
import { useEffect, useState } from "react";
import "../index.css";

import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";

import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/api";

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  // Cargar usuario al montar
  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.error("Error al cargar usuario:", err);
      });
  }, []);

  // Actualizar datos (nombre / about)
  const handleUpdateUser = (data) => {
    api
      .setUserInfo(data)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      })
      .catch((err) => {
        console.error("Error al actualizar usuario:", err);
      });
  };

  const handleUpdateAvatar = ({ avatar }) => {
    api
      .setUserAvatar({ avatar })
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
      })
      .catch((err) => {
        console.error("Error al actualizar avatar:", err);
      });
  };

  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        handleUpdateUser,
        handleUpdateAvatar,
      }}
    >
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}
