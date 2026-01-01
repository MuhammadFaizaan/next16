import { redirect } from 'next/navigation'
import { signOut } from '../actions/auth'
import { createClient } from '../lib/supabase/server'

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="min-h-screen p-8">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <form>
            <button
              formAction={signOut}
              className="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            >
              Sign Out
            </button>
          </form>
        </div>
        
        <div className="rounded-lg border p-6">
          <h2 className="text-xl font-semibold mb-4">User Info</h2>
          <p className="text-white">Email: {user.email}</p>
          <p className="text-white">User ID: {user.id}</p>
        </div>
      </div>
    </div>
  )
}