const Footer = () => {
  return (
    <footer className="bg-neutral-primary-soft">
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        {/* Top section */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-7 w-auto"
              alt="Flowbite Logo"
            />

            <span className="text-heading text-2xl font-semibold whitespace-nowrap">
              Flowbite
            </span>
          </a>

          {/* Links */}
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-body">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline">
                Licensing
              </a>
            </li>

            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="mt-2 pt-4">
          <span className="block text-sm text-body text-center">
            © 2026{" "}
            <a href="#" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
