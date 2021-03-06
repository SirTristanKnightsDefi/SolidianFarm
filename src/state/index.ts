import { configureStore } from '@reduxjs/toolkit'
import farmsReducer from './farms'
import battlefieldReducer from './battlefield'
import toastsReducer from './toasts'
import poolsReducer from './pools'
import profileReducer from './profile'
import teamsReducer from './teams'
import achievementsReducer from './achievements'

export default configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    farms: farmsReducer,
    battlefield: battlefieldReducer,
    toasts: toastsReducer,
    pools: poolsReducer,
    profile: profileReducer,
    teams: teamsReducer,
    achievements: achievementsReducer,
  },
})
