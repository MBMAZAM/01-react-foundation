import { create } from "zustand";

interface AuthState {
  status: 'authenticated' | 'unauthenticated' | 'checking',
  token?: string,
  user?: {
    name: string;
    email: string;
  },
  login: (email: string, passoword: string) => void,
  logout: () => void
}

export const useAuthStore = create<AuthState>()(( set ) => ({
  status: "checking",
  token: undefined,
  user: undefined,
  login: (email: string, passoword: string) => {
    set({
      status: 'authenticated',
      token: 'ABC123',
      user: {
        name: 'Mauricio Maza',
        email: email
      }
    })
  },
  logout: () => {
    set({
      status: 'unauthenticated',
      token: undefined,
      user: undefined
    })
  }

}))