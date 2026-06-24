import { createSlice } from '@reduxjs/toolkit';

type Notification = {
  id: number;
  message: string;
  read: boolean;
};

type NotificationState = {
  notifications: Notification[];
};

const initialState: NotificationState = {
  notifications: [
    {
      id: 1,
      message: 'New login detected',
      read: false,
    },
    {
      id: 2,
      message: 'CSV export completed',
      read: false,
    },
    {
      id: 3,
      message: 'Theme changed successfully',
      read: false,
    },
  ],
};

const notificationSlice = createSlice({
  name: 'notifications',

  initialState,

  reducers: {
    markAllRead: (state) => {
      state.notifications.forEach(
        (notification) => {
          notification.read = true;
        },
      );
    },
  },
});

export const { markAllRead } =
  notificationSlice.actions;

export default notificationSlice.reducer;