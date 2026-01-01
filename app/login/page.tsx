import { signIn, signUp, resendConfirmationEmail } from '../actions/auth'

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string; message?: string }
}) {
  const showResendOption = searchParams.error?.includes('confirm')

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg border bg-white p-8 shadow-sm">
        <h2 className="text-center text-3xl font-bold">Sign In</h2>
        
        {searchParams.error && (
          <div className="rounded-md bg-red-50 border border-red-200 p-4">
            <p className="text-sm text-red-800">{searchParams.error}</p>
          </div>
        )}

        {searchParams.message && (
          <div className="rounded-md bg-green-50 border border-green-200 p-4">
            <p className="text-sm text-green-800">{searchParams.message}</p>
          </div>
        )}
        
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-4">
            <button
              formAction={signIn}
              className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign In
            </button>
            <button
              formAction={signUp}
              className="flex-1 rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
        </form>

        {showResendOption && (
          <div className="border-t pt-6">
            <p className="text-center text-sm text-gray-600 mb-4">
              Didn't receive the confirmation email?
            </p>
            <form>
              <input type="hidden" name="email" id="resend-email" />
              <button
                formAction={resendConfirmationEmail}
                onClick={(e) => {
                  const form = e.currentTarget.closest('form')!
                  const emailInput = document.getElementById('email') as HTMLInputElement
                  form.querySelector<HTMLInputElement>('#resend-email')!.value = emailInput.value
                }}
                className="w-full rounded-md border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Resend Confirmation Email
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}