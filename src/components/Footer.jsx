function Footer() {
  return (
    <>
      <div className="container footer">
        {" "}
        <footer className="py-3 my-4">
          {" "}
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            {" "}
            <li className="nav-item">
              <a
                href="#"
                className="nav-link px-2 text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>{" "}
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-white">
                Features
              </a>
            </li>{" "}
            <li className="nav-item">
              <a href="#" className="nav-link px-2  text-white">
                Pricing
              </a>
            </li>{" "}
            <li className="nav-item">
              <a href="#" className="nav-link px-2  text-white">
                About
              </a>
            </li>{" "}
          </ul>{" "}
          <p className="text-center text-white">© 2025 Company, Inc</p>{" "}
        </footer>{" "}
      </div>
    </>
  );
}
export default Footer;
