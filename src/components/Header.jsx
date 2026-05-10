function Header() {
  return (
    <>
      <div class="container header" style={{ width: "100vw" }}>
        {" "}
        <header class="d-flex justify-content-center py-3">
          {" "}
          <ul class="nav nav-pills">
            {" "}
            <li class="nav-item header-item">
              <a href="#" class="nav-link text-white" aria-current="page">
                Home
              </a>
            </li>{" "}
            <li class="nav-item header-item">
              <a href="#" class="nav-link text-white">
                Features
              </a>
            </li>{" "}
            <li class="nav-item header-item">
              <a href="#" class="nav-link text-white">
                Pricing
              </a>
            </li>{" "}
          </ul>{" "}
        </header>{" "}
      </div>
    </>
  );
}
export default Header;
