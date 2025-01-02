import { create } from 'zustand'
import { axiosIns } from '../utils/axiosIns'
import { toast } from '@/hooks/use-toast'

const useAuth = create(set => ({
  isAuth: false,
  authUser: null,
  login: user => {
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
