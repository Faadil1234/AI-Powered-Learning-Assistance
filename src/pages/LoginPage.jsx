// src/pages/LoginPage.jsx
// src/pages/LoginPage.jsx
const LoginPage = () => {
  return (
    <div style={{ padding: 24 }}>
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;