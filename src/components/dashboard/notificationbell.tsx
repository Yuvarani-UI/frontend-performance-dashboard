'use client';

type Props = {
  count: number;

  onClick: () => void;
};

export default function NotificationBell({
  count,

  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="relative"
    >
      🔔

      {count > 0 && (
        <span
          className="
          absolute
          -right-2
          -top-2
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-full
          bg-red-500
          text-xs
          text-white
        "
        >
          {count}
        </span>
      )}
    </button>
  );
}