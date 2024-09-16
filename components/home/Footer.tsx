


const Footer = () => {
    return (
      <footer className="flex items-center justify-center gap-1 py-4 bg-gray-200/35 text-center h-24  ">
        <p className="text-sm z-10">
          &copy; {new Date().getFullYear()} Muhammad Alshwadfy. All rights reserved.
        </p>
        <a
          href="https://github.com/Mshwadfi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-500 hover:underline"
        >
          GitHub
        </a>
      </footer>
    );
  }

  export default Footer;
  