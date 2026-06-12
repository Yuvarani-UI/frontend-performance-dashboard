export default function Sidebar() {
  const menuItems = [
    'Dashboard',
    'Analytics',
    'Reports',
    'Settings',
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white p-6">
      <h2 className="mb-8 text-2xl font-bold">
        Performance Hub
      </h2>

      <nav>
        <ul className="space-y-4">
          {menuItems.map((item) => (
            <li
              key={item}
              className="cursor-pointer rounded px-3 py-2 transition hover:bg-slate-800"
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}