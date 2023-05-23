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
	updateBookings(
    id: string,
    params: any
  ): Promise<CommonResponse> {
    const url = `/v1/bookings/${id}`
    return putAsync(url, params)
  },
	deleteBookings(
    id: string
  ): Promise<CommonResponse> {
    const url = `/v1/bookings/delete/${id}`
    return deleteAsync(url)
  }
};

export default bookingsAPI;
