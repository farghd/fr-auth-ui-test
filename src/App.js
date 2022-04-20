import { useState, useEffect } from "react";
import { UsernameForm } from "./components/usernameForm";
import { fetchPhotos } from "./utils";
import { PhotoBox } from "./components/photoBox";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchPhotos(setPhotos);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setUsername(user);
  };

  return (
    <div className="App">
      {username && <h1>{username}</h1>}
      <UsernameForm handler={submitHandler} setter={setUser} />
      {photos.map((photo, i) => {
        return <PhotoBox key={i} photo={photo} />;
      })}
    </div>
  );
};

export default App;
