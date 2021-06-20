import React from "react";

function Footer() {
  return (
    <footer className="border-t border-gray-400 shadow">
      <div className="container max-w-4xl mx-auto flex py-8">
        <div className="w-full mx-auto flex flex-wrap">
          <div className="flex w-full md:w-1/2">
            <div className="px-8">
              <ul className="list-reset items-center text-sm pt-3">
                <li>
                  <a
                    className="text-gray-600 no-underline hover:text-teal-a400 hover:text-underline py-1"
                    href="#"
                  >
                    Add social link
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 no-underline hover:text-teal-a400 hover:text-underline py-1"
                    href="#"
                  >
                    Add social link
                  </a>
                </li>
                <li>
                  <a
                    className="text-gray-600 no-underline hover:text-teal-a400 hover:text-underline py-1"
                    href="#"
                  >
                    Add social link
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
