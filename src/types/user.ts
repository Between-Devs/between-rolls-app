export type UserRole = 'ADMIN' | 'GAME_MASTER' | 'PLAYER';

export interface User {
  id: string;
  email: string;
  name: string;
  roles: UserRole[];
  avatarUrl: string | null;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export type LoginCredentials = Pick<User, 'email'> & { password: string };
