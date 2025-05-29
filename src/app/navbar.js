import Image from "next/image";
import { Julius_Sans_One } from "next/font/google";
import Link from "next/link";

// Logo font
const juliusSansOne = Julius_Sans_One({
  subsets: ["latin"],
  weight: "400",
});

export default function navbar() {
  return (
    <header className="shadow-sm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between"> {/* Increased height */}
          <div className="md:flex md:items-center">
            <Link className="flex items-center text-[#179b98]" href="/">
              <Image
                src="/VendorLink.png"
                alt="VendorLink Logo"
                width={96}
                height={96}
                className="h-24 w-24 object-contain"
              />
            </Link>
          </div>

          <div className="hidden md:block ">
            <nav aria-label="Global" className="flex">
              <ul className=" flex gap-6 text-sm ">
                <li>
                  <Link
                    className="text-lg text-gray-700 transition hover:text-gray-700/75"
                    href="/dashboard"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-lg text-gray-700 transition hover:text-gray-700/75"
                    href="/vendor"
                  >
                    Vendor Directory
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-lg text-gray-700 transition hover:text-gray-700/75"
                    href="/support"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center ">
            <div className="sm:flex sm:gap-4">
              <Link
                className="rounded-md bg-[#179b98] hover:bg-[#117c7a] px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                href="/auth/signin"
              >
                Sign In
              </Link>
            </div>

            <div className="block md:hidden">
              <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
