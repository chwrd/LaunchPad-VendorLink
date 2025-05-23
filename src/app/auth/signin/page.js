import Link from "next/link";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="rounded-xl border-2 border-blue-300 shadow-lg p-10 w-[350px] bg-teal-600 flex flex-col items-center">
        <h2 className="text-3xl font-normal text-white mb-2">VendorLink</h2>
        <p className="text-xs text-white mb-6">Enter your credentials to access your account</p>
        <form className="w-full flex flex-col gap-4" action="#" method="POST">
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-white text-sm mb-1">username</label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="rounded-full px-3 py-1 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300 shadow"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-white text-sm mb-1">password</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="rounded-full px-3 py-1 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300 shadow"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-[#0a232e] text-white py-2 mt-2 shadow-md hover:bg-[#183d4a] transition-all text-lg font-normal"
          >
            Log In
          </button>
        </form>
        <Link href="/auth/signup" className="text-white text-sm mt-4 hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
}