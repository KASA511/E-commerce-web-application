const handleLogin = async () => {

  try {

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      form
    );

    localStorage.setItem(
      "token",
      `Bearer ${res.data.token}`
    );

    alert("Login Successful");

  } catch (error) {

    console.log(error.response.data);

  }
};

export default Login;
