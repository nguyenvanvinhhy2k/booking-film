import { CommonResponse } from "models/common";
import { getAsync, patchAsync, deleteAsync, postAsync, putAsync } from "./request";

const bookingsAPI = {
	signUp(params?: any): Promise<CommonResponse> {
		const url = "/v1/users"
		return postAsync(url, params);
	},
	signIn( params: any): Promise<CommonResponse> {
		const url = "/v1/auth/signIn"
		return postAsync(url, params);
	},
	getTours( params: any): Promise<CommonResponse> {
		const url = "/tours"
		return getAsync(url, params);
	},
	getTour( id: any): Promise<CommonResponse> {
		const url = `/tours/${id}`
		return getAsync(url);
	},
	getTourByCategory( category: any): Promise<CommonResponse> {
		const url = `/categories/${category}`
		return getAsync(url);
	},
	getCategories(params?: any): Promise<CommonResponse> {
		const url = "/categories"
		return getAsync(url, params);
	},
	addBookings( params: any): Promise<CommonResponse> {
		const url = "/bookings"
		return postAsync(url, params);
	},
	getReviews(params?: any): Promise<CommonResponse> {
		const url = "/reviews"
		return getAsync(url, params);
	},
	addReviews( params: any): Promise<CommonResponse> {
		const url = "/reviews"
		return postAsync(url, params);
	},
};

export default bookingsAPI;
