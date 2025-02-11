const Footer = () => {
 

  return (

    <div className="home-container">
      <div className="login-box">
        <h1 className="title">Library Management System</h1>
        <p className="subtitle">Login as:</p>


        <input type="text" placeholder="Username" className="input-field" />
        <input type="password" placeholder="Password" className="input-field" />

        <button  className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Footer;
