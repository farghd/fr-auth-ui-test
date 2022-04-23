export const fetchPhotos = async (setPhotos) => {
  try {
    const res = await fetch("https://picsum.photos/v2/list");
    const data = await res.json();
    setPhotos(data);
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (username, email, password, setUser) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await res.json();
    if (data.err) {
      throw new Error(data.err);
    }
    console.log(data);
    setUser(data.user);
    localStorage.setItem("myToken", data.token);
  } catch (error) {
    console.log(error);
  }
};

export const tokenFetch = async (setUser) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_REST_API}/auth/token`, {
      method: "GET",
      headers: { "x-auth-token": `${localStorage.getItem("myToken")}` },
    });
    const data = await res.json();
    setUser(data.user);
  } catch (error) {
    console.log(error);
  }
};
