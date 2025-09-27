import { configureStore } from '@reduxjs/toolkit'
import dateSlice from './reducers/dateSlice'
import taskSlice from './reducers/taskSlice'
// ...

export const store = configureStore({
  reducer: { 
    date:dateSlice.reducer,
    task:taskSlice.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
   }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch