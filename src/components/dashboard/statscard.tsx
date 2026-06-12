type StatsCardProps = {
  title: string;
  value: string;
  status: string;
};

export default function StatsCard({
  title,
  value,
  status,
}: StatsCardProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow transition hover:shadow-md">
      <h3 className="text-sm font-medium text-slate-500">
        {title}
      </h3>

      <p className="mt-2 text-3xl font-bold">
        {value}
      </p>

      <span
        className={`mt-4 inline-block rounded-full px-3 py-1 text-sm font-medium ${
          status === 'Good'
            ? 'bg-green-100 text-green-700'
            : 'bg-yellow-100 text-yellow-700'
        }`}
      >
        {status}
      </span>
    </div>
  );
}