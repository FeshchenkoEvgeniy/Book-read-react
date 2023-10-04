function Header() {
  const checkAuth = true;

  return (
    <header>
      {checkAuth ? (
        <h1>BR</h1>
      ) : (
        <div>
          <button>gfd</button> <p>hello</p>
        </div>
      )}
    </header>
  );
}

export default Header;
