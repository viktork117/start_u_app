export interface UserState {
  course: string | null
  group: string | null
  isDataComplete: boolean
  setCourse: (course: string) => Promise<void>
  setGroup: (group: string) => Promise<void>
  loadUserData: () => Promise<void>
  clearUserData: () => Promise<void>
} 