
import { lazy, ReactNode, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import LoadingCricle from '../components/Loading/loadingCricle'

const Error = lazy(() => import('../pages/ErrorPage'))
const Home = lazy(() => import('../pages/Home'))
const DetailTour = lazy(() => import('../pages/DetailTour'))


const AppRouter = () => {

	return (
		<Routes>
			<Route>
				{/* <Route path="/signin" element={<SignIn />} />
				<Route path="/signup" element={<SignUp />} /> */}
				<Route path='*' element={<Error />} />
			</Route>
			<Route
				path="/"
				element={
					<Suspense fallback={<LoadingCricle />}>
							<Home />
					</Suspense>
				}
			/>
			<Route
				path="/:id"
				element={
					<Suspense fallback={<LoadingCricle />}>
							<DetailTour />
					</Suspense>
				}
			/>
		</Routes>
	)
}

export default AppRouter
