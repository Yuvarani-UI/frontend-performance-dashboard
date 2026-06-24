'use client';

import {
  useAppDispatch,
} from '@/src/hooks/useredux';

import {
  toggleSidebar,
} from '@/src/store/sidebarslice';

export default function HamburgerButton() {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() =>
        dispatch(toggleSidebar())
      }
      className="rounded-md p-2 md:hidden"
    >
      ☰
    </button>
  );
}