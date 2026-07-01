'use client';

type Props = {
  title: string;
  current: number;
  previous: number;
};

export default function KPIComparison({
  title,
  current,
  previous,
}: Props) {

  const growth =
    previous > 0
      ? (
          ((current - previous) /
            previous) *
          100
        ).toFixed(1)
      : '0';

  const positive =
    Number(growth) >= 0;

  return (

    <div
      className="
        min-w-0
        rounded-xl
        border
        border-slate-700
        bg-slate-800
        p-6
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
      "
    >

      <h3
        className="
          text-sm
          font-medium
          text-slate-400
        "
      >
        {title}
      </h3>

      <p
        className="
          mt-3
          text-3xl
          font-bold
          text-white
        "
      >
        {current}
      </p>

      <p
        className={`
          mt-2
          text-sm
          font-semibold
          ${
            positive
              ? 'text-green-500'
              : 'text-red-500'
          }
        `}
      >

        {positive ? '+' : ''}

        {growth}%

      </p>

    </div>

  );

}