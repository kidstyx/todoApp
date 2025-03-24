import { IoIosSunny, IoMdMoon } from "react-icons/io";


function ThemeToggle({darkMode, setDarkMode}) {
return (
    <button
    onClick={() => {
      setDarkMode(!darkMode);
    }}
    className="cursor-pointer px-4 py-2 rounded-md bg-gray-800 text-white hover:bg-gray-600 transition"
  >
    {darkMode ? <IoIosSunny /> : <IoMdMoon />}
  </button>
)

}

export default ThemeToggle