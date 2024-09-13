


const Footer = () => {
    return (
      <footer className="py-4 bg-gray-800 text-center text-white">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Muhammad Alshwadfy. All rights reserved.
        </p>
        <a
          href="https://github.com/Mshwadfi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-400 hover:underline"
        >
          GitHub Profile
        </a>
      </footer>
    );
  }

  export default Footer;
  