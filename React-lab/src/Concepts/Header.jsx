
function Header({CP,AP}) {
  return (
    <header className="bg-linear-to-r from-blue-600 to-indigo-600 shadow-lg py-6 px-8 mb-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold text-white">
          📋 Attendance List
        </h1>

        <div className="flex gap-4">
          <div className="bg-green-500 text-white px-5 py-2 rounded-xl shadow-md font-semibold">
            Present:{CP}
          </div>

          <div className="bg-red-500 text-white px-5 py-2 rounded-xl shadow-md font-semibold">
            Absent:{AP}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;