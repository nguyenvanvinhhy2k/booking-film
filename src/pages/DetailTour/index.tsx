import Footer from "../../components/Layout/Footer"
import Header from "../../components/Layout/Header"
import BannerDetail from "../../components/BannerDetail"
import ShowtimeDetail from "../../components/ShowTmeDetail"
import Comment from "../../components/Comment"
import Performer from "../../components/Performer"
import TourPriceGood from "../../components/TourPriceGood"
import bookingsAPI from "../../services/bookings.service"
import { useParams } from "react-router"
import { useEffect, useState } from "react"

function DetailTour() {
  const [tour, setTour] = useState<any>({})
	const { id } = useParams()

	console.log(tour)

	const getTour = async () => {
		const data = await bookingsAPI.getTour(id)

    const startDate = new Date(data?.data?.startDate);
    const endDate = new Date(data?.data?.endDate);
    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    const numDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

		const newData: any = {...data?.data}
		newData.countDay = numDays
		setTour({...newData})
	}

	const bookingTour = async () => {
		const userId = localStorage.getItem('userID')
		if(userId) {
			try {
				await bookingsAPI.addBookings({
					userId: userId,
					tourId: id,
					bookingDate: new Date(),
					status: 'WATING'
				})
			} catch (error) {
				console.log(error)
			}
		} else{
			alert("Bạn phải đăng nhập trước khi đặt tour")
		}

	}

	// const commentRate = async () => {
	// 	const userId = localStorage.getItem('userID')
	// 	if(userId) {
	// 		try {
	// 			await bookingsAPI.addReviews({
	// 				userId: userId,
	// 				tourId: id,
	// 				rating: 9,
	// 				comment: 'ok'
	// 			})
	// 		} catch (error) {
	// 			console.log(error)
	// 		}
	// 	} else{
	// 		alert("Bạn phải đăng nhập trước khi bình luận")
	// 	}

	// }

	useEffect(() => {
		getTour()
	},[id])

	return (
		<div className="flex items-center justify-center bg-[#ecf0f5]">
			<div className="w-full h-auto">
				<Header />
				<BannerDetail tour={tour}/>
				<div className="flex p-[5rem] pt-[50px] ">
					<div className="w-[62%] mr-[30px]">
						<ShowtimeDetail tour={tour}/>
						<Performer />
						<Comment />
					</div>
					<div className="w-[38%] p-[20px] h-full rounded-lg bg-white" style={{	boxShadow: `0 2px 8px 0 rgba(20,16,11,.07)`}}>
						<h1 className="text-[24px] text-[#003c71] font-bold mb-[20px]">Lịch khởi hành & giá</h1>
						<div className="">
							<p className="text-[20px] font-medium">Chọn ngày khởi hành:</p>
              <div className="flex mt-[20px]">
								<div className="mr-[20px] w-[16%] h-[67px] hover:border-[#26bed6] border-[3px] flex items-center justify-center border-slate-300 rounded-[12px] p-[10px]">
									<p className="">24/5</p>
								</div>
								<div className="mr-[20px] w-[16%] h-[67px] hover:border-[#26bed6] border-[3px] flex items-center justify-center border-slate-300 rounded-[12px] p-[10px]">
									<p className="">24/5</p>
								</div>
								<div className="mr-[20px] w-[16%] h-[67px] hover:border-[#26bed6] border-[3px] flex items-center justify-center border-slate-300 rounded-[12px] p-[10px]">
									<p className="">24/5</p>
								</div>
								<div className="mr-[20px] w-[16%] h-[67px] hover:border-[#26bed6] border-[3px] flex items-center justify-center border-slate-300 rounded-[12px] p-[10px]">
									<p className="">24/5</p>
								</div>
								<div className="mr-[20px] w-[16%] h-[67px] hover:border-[#26bed6] border-[3px] flex items-center justify-center border-slate-300 rounded-[12px] p-[10px]">
									<p className="">24/5</p>
								</div>
							</div>
							<div className="mt-[40px]">
								<div className="flex justify-between border-[1px] border-yellow-800 p-[10px] rounded-[8px]">
									<p className="w-[50%]">Số lượng</p>
									<p className="w-[30%] text-[#ffbd00] leading-5 font-medium"> x {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(tour?.price)}</p>
									<div className="flex justify-between w-[20%]">
									<p> - </p>
									<p>2</p>
									<p> + </p>
									</div>
								</div>

							</div>

							<div className="mt-[30px]">
								<p className="text-[#26bed6] text-[16px]"> Liên hệ để xác nhận chỗ</p>
							</div>

							<div className="mt-[40px]">
								<div className="mt-[20px]">
									<div className="flex justify-between">
										<p>Tổng giá</p>
										<p className="text-[#ffbd00] font-bold text-[28px]">2.434.435đ</p>
									</div>
								</div>
							</div>

							<div className="mt-[30px]">
								<div className="flex justify-between">
									<div className="w-[48%] h-[50px] cursor-pointer hover:bg-[#f79321]  border-[3px] rounded border-[#f79321] flex justify-center items-center" >
										<p className="text-center text-[#f79321] p-[20px] text-[20px] font-semibold hover:text-[#fff]">Liên hệ tư vấn</p>
									</div>
									<div className="w-[48%] h-[50px] cursor-pointer border-[1px] bg-[#f79321] hover:bg-[#f9ab52!important] border-[3px] rounded border-[#f79321] flex justify-center items-center" onClick={bookingTour}>
										<p className="text-center text-center text-[#fff] text-[20px] font-semibold">Yêu cầu đặt</p>
									</div>

								</div>
							</div>
							
						</div>
					</div>
				</div>
				<TourPriceGood />
				<Footer />
			</div>
		</div>
	)
}

export default DetailTour
