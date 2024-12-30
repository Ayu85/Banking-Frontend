import { create } from 'zustand'
import { axiosIns } from '../utils/axiosIns'

const useAuth = create((set) => ({
  isAuth: false,
  authUser: null,
  login: () => {
    set({ isAuth: true })
  },
  checkAuth: async () => {
    const auth = await axiosIns.get('/auth/checkauth')
    set({ isAuth: true })
    set({ authUser: auth.data.user })
        
  }
}))
export default useAuth
