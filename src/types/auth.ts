export type UserRole =
  | 'admin'
  | 'viewer';

export interface AuthUser {
  email: string;
  role: UserRole;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
}