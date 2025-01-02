import { create } from 'zustand'
import { axiosIns } from '../utils/axiosIns'
import { toast } from '@/hooks/use-toast'
interface AuthState {
  isAuth: boolean
  authUser: null | User
  login: (user: User) => void
  checkAuth: () => void
  logout: () => void
}
interface User {
  id: number
  contact: string
  fullname: string
  email: string
}
const useAuth = create<AuthState>(set => ({
  isAuth: false,
  authUser: null,
  login: (user: User) => {
    set({ authUser: user })
    set({ isAuth: true })
  },
  checkAuth: async () => {
    const auth = await axiosIns.get('/auth/checkauth')
    set({ isAuth: true })
    set({ authUser: auth.data.user })
  },
  logout: async () => {
    try {
      const auth = await axiosIns.post('/auth/logout')
      set({ isAuth: false })
      set({ authUser: null })
      toast({
        variant: 'default',
        title: 'Logged out!'
      })
    } catch (error) {
      toast({
        variant: 'destructive',
        title: error.response.data.msg
      })
    }
  }
}))
export default useAuth
