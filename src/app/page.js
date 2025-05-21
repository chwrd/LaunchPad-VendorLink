import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-blue-600">VendorLink</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Streamline event planning for student organizations and campus departments by connecting with university-approved vendors.
          </p>
          <div className="mt-10 flex gap-6 justify-center">
            <Link
              href="/auth/signin"
              className="rounded-md bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/signup"
              className="rounded-md bg-gray-100 px-6 py-3 text-gray-900 font-semibold hover:bg-gray-200 transition-colors"
            >
              Create Account
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
