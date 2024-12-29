import { create } from 'zustand'

const useAuth = create(set => ({
  isAuth: false,
  login: () => {
    set({ isAuth: true })
  }
}))
export default useAuth
