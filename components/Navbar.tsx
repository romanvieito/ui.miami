export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">InCubando</h1>
          <div className="space-x-6">
            <a href="#home" className="hover:text-orange-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-orange-400 transition-colors">About</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}