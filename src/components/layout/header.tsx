export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
      <div>
        <h1 className="text-2xl font-semibold">
          Frontend Performance Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Monitor and optimize application performance
        </p>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">
          Welcome, Admin
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
          A
        </div>
      </div>
    </header>
  );
}