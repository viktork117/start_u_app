import { create } from 'zustand'
import { addUserCourse, addUserGroup, clearBD, getUserCourse, getUserCourseAndGroup, getUserGroup } from '../db/init'
import { UserState } from './index.d'

export const useUserData = create<UserState>((set) => ({
  course: null,
  group: null,
  isDataComplete: false,

  setCourse: async (course) => {
    try {
      await addUserCourse(course)
      set({ course })
      const isComplete = await getUserCourseAndGroup()
      set({ isDataComplete: isComplete })
    } catch (error) {
      console.error('Error setting course:', error)
    }
  },

  setGroup: async (group) => {
    try {
      await addUserGroup(group)
      set({ group })
      const isComplete = await getUserCourseAndGroup()
      set({ isDataComplete: isComplete })
    } catch (error) {
      console.error('Error setting group:', error)
    }
  },

  loadUserData: async () => {
    try {
      const [course, group] = await Promise.all([
        getUserCourse(),
        getUserGroup()
      ])
      const isComplete = await getUserCourseAndGroup()
      set({ 
        course, 
        group,
        isDataComplete: isComplete
      })
    } catch (error) {
      console.error('Error loading user data:', error)
    }
  },

  clearUserData: async () => {
    try {
      await clearBD()
      set({ 
        course: null, 
        group: null,
        isDataComplete: false
      })
    } catch (error) {
      console.error('Error clearing user data:', error)
    }
  }
})) 