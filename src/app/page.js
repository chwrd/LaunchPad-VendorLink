import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-100 flex flex-col justify-center">
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center">
        <div className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-4 drop-shadow-lg">
            Welcome to{" "}
            <span className="text-[#179b98]">VendorLink</span>!
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl mx-auto mt-4">
            Event planning on campus is hard enough—finding vendors shouldn’t make
            it harder.
          </p>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mt-4">
            VendorLink connects student orgs, clubs, and departments with
            university-approved vendors for catering, AV, décor, and more.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className="inline-flex items-center bg-[#d0f5f4] text-[#179b98] font-semibold px-4 py-2 rounded-full text-base shadow-sm">
              <svg
                className="w-5 h-5 mr-2 text-[#179b98]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              Search. Book. Stay compliant.
            </span>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/auth/signin"
              className="rounded-lg bg-[#179b98] px-8 py-4 text-white text-lg font-bold shadow-lg hover:bg-[#117c7a] transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/vendor"
              className="rounded-lg bg-white px-8 py-4 text-[#179b98] text-lg font-bold border-2 border-[#179b98] shadow hover:bg-[#d0f5f4] transition-colors"
            >
              Browse Vendors
            </Link>
          </div>
          <div className="mt-12">
            <p className="text-lg text-gray-700 font-semibold mb-4">
              Less hassle, fewer delays, better events.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="inline-block bg-[#d0f5f4] text-[#179b98] px-4 py-2 rounded-full text-sm font-medium shadow">
                Catering
              </span>
              <span className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium shadow">
                AV & Lighting
              </span>
              <span className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium shadow">
                Décor
              </span>
              <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium shadow">
                Printing
              </span>
              <span className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium shadow">
                Photo/Video
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
