import { useState, useEffect } from "react";
import { UsernameForm } from "./components/usernameForm";
import { fetchPhotos, tokenFetch } from "./utils";
import { PhotoBox } from "./components/photoBox";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    tokenFetch(setUser);
    fetchPhotos(setPhotos);
  }, []);

  return (
    <div className="App">
      {user && <h1>{user}</h1>}
      <UsernameForm setUser={setUser} />
      {photos.map((photo, i) => {
        return <PhotoBox key={i} photo={photo} />;
      })}
    </div>
  );
};

export default App;
