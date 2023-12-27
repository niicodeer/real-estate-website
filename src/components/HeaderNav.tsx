function HeaderNav() {
  return (
    <header className="bg-gray-10 text-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-3xl font-bold">Estatein</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-[18px] justify-center gap-8">
          <a className="bg-gray-08 ring ring-inset ring-gray-15 py-4 px-6 rounded-lg hover:font-semibold">
            Home
          </a>
          <a className="hover:font-semibold">About</a>
          <a className="hover:font-semibold">Properties</a>
          <a className="hover:font-semibold">Services</a>
        </nav>
        <button className="inline-flex items-center bg-gray-08 ring ring-inset ring-gray-15 py-4 px-6 focus:outline-none hover:bg-gray-10 rounded-lg text-[18px] mt-4 md:mt-0">
          Contact us
        </button>
      </div>
    </header>
  );
}

export default HeaderNav;
