import Link from "next/link";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="rounded-xl border-2 border-blue-300 shadow-lg p-10 w-[600px] bg-[#179b98] flex flex-col items-center">
        <h2 className="text-3xl font-normal text-white mb-6">VendorLink</h2>
        <form className="w-full flex flex-col items-center" action="#" method="POST">
          <div className="flex w-full gap-6 mb-4">
            <div className="flex flex-col w-1/2 gap-3">
              <label htmlFor="name" className="text-white text-sm mb-1">Full Name</label>
              <input id="name" name="name" type="text" required className="rounded-full px-3 py-1 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300 shadow" />
              <label htmlFor="email" className="text-white text-sm mb-1">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" required className="rounded-full px-3 py-1 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300 shadow" />
            </div>
            <div className="flex flex-col w-1/2 gap-3">
              <label htmlFor="password" className="text-white text-sm mb-1">Password</label>
              <input id="password" name="password" type="password" autoComplete="new-password" required className="rounded-full px-3 py-1 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300 shadow" />
              <label htmlFor="confirmPassword" className="text-white text-sm mb-1">Confirm Password</label>
              <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" required className="rounded-full px-3 py-1 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300 shadow" />
            </div>
          </div>
          <div className="flex flex-col w-3/4 mb-4">
            <label htmlFor="organization" className="text-white text-sm mb-1 text-center">School/Organization</label>
            <input id="organization" name="organization" type="text" required className="rounded-full px-3 py-1 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300 shadow text-center" />
          </div>
          <div className="flex items-center mb-4">
            <input id="terms" name="terms" type="checkbox" required className="mr-2" />
            <label htmlFor="terms" className="text-xs text-white">I agree to the terms and conditions</label>
          </div>
          <button type="submit" className="rounded-full bg-[#0a232e] text-white py-2 px-8 shadow-md hover:bg-[#183d4a] transition-all text-lg font-normal mb-2">Sign Up</button>
        </form>
      </div>
    </div>
  );
}