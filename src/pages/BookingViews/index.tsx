
import SearchInfo from "../../components/SearchInfo"
import SearchDetail from "../../components/SearchDetail"
import Footer from "../../components/Layout/Footer"
import Header from "../../components/Layout/Header"
import { useEffect, useState } from "react"
import useQueryParams from "../../hook/useQueryParams"
import bookingsAPI from "../../services/bookings.service"
import {  useNavigate, useParams } from "react-router"
import dayjs from "dayjs"
import { Link } from "react-router-dom"

function BookingViews() {
	const [tour, setTour] = useState<any>({})
	const [booking, setBooking] = useState<any>({})
	const [user, setUser] = useState<any>({})
	const { id } = useParams()
	const navigate = useNavigate()

	const userId = localStorage.getItem('userIds')
	const bookingTour = localStorage.getItem('booking')


	console.log(booking)

	const getTour = async () => {
		const data = await bookingsAPI.getTour(id)
		setTour(data?.data)
		setBooking(data?.data?.bookings?.reverse()[0])
	}

	const updateBooking = async (status: any) => {
     await bookingsAPI.updateBookings(booking?.id, {
			userId: booking?.userId,
			tourId: booking?.tourId,
			bookingDate: booking?.bookingDate,
			status: status,
		})
		window?.location?.reload()
	}

	const getUser = async () => {
		try {
			const data = await bookingsAPI.getUser(userId)
			setUser(data?.data)
		} catch (error) {
      console.log(error)
		}
	}

	const formatDate = (date: Date, format: string) => {
		return dayjs(date).format(format);
	}

	const backHome = () => {
		navigate("/")
	}

	const removeProfile = () => {
		localStorage.removeItem("booking")
		window?.location?.reload()
	}

	const susscesTour = () => {
		alert("Chúc mừng bạn đã hoàn thành chuyến đi hãy quay lại đánh giá về chuyến đi nhé")
		navigate(`/${id}`)
	}

	useEffect(() => {
		getTour()
		getUser()
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}, [])


    return (
        <div className="flex items-center justify-center bg-[#ecf0f5]">
            <div className="w-full h-auto">
					<Header />
					{bookingTour ? (
						<div className="flex p-[5rem] pt-[50px] flex-col w-[70%] justify-center items-center m-auto bg-white rounded-[300px]	my-[30px]">
							<div className="flex justify-center items-center w-full ">
								<h1 className="text-center font-bold text-[24px] flex-col flex"> {booking.status === "HUYTOUR" ? "Bạn đã hủy thành công Tour" : booking.status === "DAHOANTHANHTOUR" ? "Bạn đã hoàn thành chuyến đi" : "Bạn đã đặt thành công Tour " } <span className="text-red-500 text-[30px] font-bold"> {tour?.tourName}</span> </h1>
							</div>
							<div className="text-[18px] mt-[20px] flex flex-col justify-center  items-center text-[#d82f8b]">
								<div className="mb-[20px]">{booking.status === "HUYTOUR" ? "THÔNG TIN CHI TIẾT VỀ TOUR BẠN ĐÃ HỦY" : "THÔNG TIN CHI TIẾT VỀ TOUR BẠN ĐÃ ĐẶT"}</div>
								<p className="mb-[10px]">Tên tour : {tour?.tourName}</p>
								<p className="mb-[10px]">Người đặt : {user?.name}</p>
								<p className="mb-[10px]">Số điện thoại : {user.phoneNumber}</p>
								<p className="mb-[10px]">Email : {user?.email}</p>
								<p className="mb-[10px]">Ngày đặt : {booking?.createdAt && formatDate(booking?.createdAt, "DD/MM/YYYY HH:mm:ss")}</p>
								<p className="mb-[10px]">Ngày khởi hành : {booking?.createdAt && formatDate(booking?.createdAt, "DD/MM/YYYY")}</p>
								<p className="mb-[10px]">Tổng tiền : {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(booking?.totalPrice)}</p>
								<p className="mt-[20px] text-[24px]">ANCORA sẽ liên hệ với bạn ngay sau ít phút nữa!!!</p>
              {booking.status === "DADAT" ? (
							<div className="text-[#fff] flex justify-center items-center w-full mt-[40px] hover:bg-[#FFBD00] text-[18px] font-bold bg-[#f79321] m-auto rounded-lg ml-[20px] text-center h-[60px] cursor-pointer"><p className="flex justify-center items-center">CHỜ XÁC NHẬN</p></div>) : booking.status === "DAXACNHAN" ? (
							<div className="text-[#fff] flex justify-center items-center w-full mt-[40px] hover:bg-[#FFBD00] text-[18px] font-bold bg-[#f79321] m-auto rounded-lg ml-[20px] text-center h-[60px] cursor-pointer"><p className="flex justify-center items-center">ĐẶT THÀNH CÔNG</p></div>) : booking.status === "DAHOANTHANHTOUR" ? (
							<div onClick={susscesTour} className="text-[#fff] flex justify-center items-center w-full mt-[40px] hover:bg-[#FFBD00] text-[18px] font-bold bg-[#f79321] m-auto rounded-lg ml-[20px] text-center h-[60px] cursor-pointer"><p className="flex justify-center items-center">HOÀN THÀNH TOUR</p></div>): ""}

							{
								booking.status === "HUYTOUR" ? (<>
								<div onClick={backHome} className="text-[#fff] flex justify-center items-center w-full mt-[40px] hover:bg-[#FFBD00] text-[18px] font-bold bg-red-500 m-auto rounded-lg ml-[20px] text-center h-[60px] cursor-pointer"><p className="flex justify-center items-center">ĐẶT LẠI</p></div>
								<div onClick={removeProfile} className="text-[#fff] flex justify-center items-center w-full mt-[40px] hover:bg-[#FFBD00] text-[18px] font-bold bg-red-500 m-auto rounded-lg ml-[20px] text-center h-[60px] cursor-pointer"><p className="flex justify-center items-center">XÓA THÔNG TIN</p></div></>) : (
								<div onClick={() => updateBooking("HUYTOUR")} className="text-[#fff] flex justify-center items-center w-full mt-[40px] hover:bg-[#FFBD00] text-[18px] font-bold bg-red-500 m-auto rounded-lg ml-[20px] text-center h-[60px] cursor-pointer"><p className="flex justify-center items-center">HỦY TOUR</p></div>
								)
							}

							</div>
						</div>
					) : (<><div className="flex p-[5rem] pt-[50px] font-bold text-[24px] flex-col w-[70%] justify-center items-center m-auto bg-white rounded-[300px]	my-[30px]"> <p> BẠN CHƯA CÓ THÔNG TIN GÌ VỀ TOUR. HÃY QUAY LẠI ĐẶT TOUR</p>
					
					<Link to="/" className="text-[#fff] w-full flex justify-center items-center mt-[40px] hover:bg-[#FFBD00] text-[18px] font-bold bg-[#f79321] m-auto rounded-lg ml-[20px] text-center h-[60px]"><p className="flex justify-center items-center">QUAY LẠI</p></Link></div>
							
					</>)}

					<Footer />
            </div>
        </div>
    )
}

export default BookingViews