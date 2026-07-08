function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-white shadow">
      <h1 className="text-2xl font-bold text-green-700">
        Elaris
      </h1>

      <div className="flex gap-6">
        <a href="/">Home</a>

        <a href="/login">Login</a>

        <a href="/register">Register</a>
      </div>
    </nav>
  );
}

export default Navbar;