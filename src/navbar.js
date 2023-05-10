function Navbar() {
  return (
    <nav className="navbar navbar-light bg-info ">
      <div className="container-fluid ">
        <a className="navbar-brand" href="http://www.google.com">
          <img
            src="/logo192.png"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Hi My Name is Ravendra Patel
        </a>
        <div className="spinner-grow" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
