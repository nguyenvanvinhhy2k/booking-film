import bookingsAPI from "../../services/bookings.service"
import { useEffect, useState } from "react"
import Modal from '../Popup';
import { useNavigate, useParams } from "react-router-dom";

const ShowtimeDetail = ({movie, cinemas}: any) => {
	const { id } = useParams()
	const[cinema, setCinema] = useState<any>({})
	const [isOpen, setIsOpen] = useState<any>(false);
	const [item, setItem] = useState<any>({})
	const [ticket, setTicket] = useState<any>({})
	const [selectedTickets, setSelectedTickets] = useState<any>([]);
	const [data, setData] = useState<any>([]);
	const navigate = useNavigate()

	console.log(ticket.seatNumber)

	const bookking = async (id: any) => {
		setIsOpen(true)
		try {
			const [res, ticket ] = await Promise.all([
				bookingsAPI.getScreening(id),
				bookingsAPI.getTicket(id)
			])
			setTicket(ticket?.data)
			const tickets = Array.from({length: ticket?.data.seatNumber}, (value, index) => index + 1)
			setData(tickets)
			setItem(res?.data)
		} catch (error) {
			console.log(error)
		}
	}


  const handleTicketSelection = (ticketId: any) => {
    if (selectedTickets.includes(ticketId)) {
      // Nếu vé đã được chọn, loại bỏ nó khỏi danh sách
      setSelectedTickets((prevSelectedTickets: any) =>
        prevSelectedTickets.filter((id: any) => id !== ticketId)
      );
    } else {
      // Nếu vé chưa được chọn, thêm vào danh sách
      setSelectedTickets((prevSelectedTickets: any) => [...prevSelectedTickets, ticketId]);
    }
  };

	const bookingFilm = async () => {
		const userId = localStorage.getItem('userIds')
		const data = {
			userId: userId,
			movieId: id,
			status: "DADAT",
			totalPrice: calculateTotalPrice(),
			bookingDate: new Date()

		}
		if(userId) {
			try {
				const res = await bookingsAPI.addBookings(data)
				if( res?.status === "success"){
					localStorage.setItem('booking', JSON.stringify(data))
					setIsOpen(false)
					alert("Đã đặt vé phim thành công")
					navigate(`/bookingviews/${id}`)
				}
			} catch (error) {
				console.log(error)
			}
		} else {
			alert("Bạn phải đăng nhập trước khi đặt vé")
		}

	}

  const calculateTotalPrice = () => {
    const totalPrice = selectedTickets.length * ticket?.price;
    return totalPrice;
  };
	
   const getCinema = async (id: any) => {
	try {
      const res = await bookingsAPI.getCinema(id)
    setCinema(res?.data)
	} catch (error) {
		console.log(error)
	}
}

	return(
		<>
		<Modal
		title="Mua vé xem phim"
		open={isOpen}
		handleCancel={() => {
			setIsOpen(false)
			setSelectedTickets([])
		}}
		isOutSide={true}
		className="w-full max-w-[60%] h-[90vh]"
	>
		<div className="">
			<div className="w-full h-[400px]" style={{ boxShadow: "1px 1px 5px 1px #E8FFE0" }}>
				<div className="text-white w-[60%] h-[60%] m-auto flex justify-center items-center flex-wrap">
					{data?.map((i: any) => {
						return (
						<button onClick={() => handleTicketSelection(i)} className={`${selectedTickets.includes(i) ? "opacity-[0.5]"  : ""} w-[2.5rem] h-[2.5rem] ml-[0.6rem] mt-[20px] mb-[0.6rem] hover:opacity-[0.6] rounded-md bg-red-600`}>{i}</button>
						)
					}
					)}
				</div>
			</div>
			<div className="flex text-white mt-[20px] flex-col justify-between h-[150px] px-[20px]">
				<div className="border-b-[2px] border-white pb-[10px]">
					<p>{item?.movies?.title}</p>
					<p>{item.startTime} ~ {item?.endTime} - {item?.name}</p>
				</div>
				<div className="flex justify-between border-b-[2px] border-white pb-[10px]">
					<p>Chỗ ngồi: </p>
					<p>{selectedTickets.join(', ')}</p>
				</div>
				<div className="flex justify-between">
					<p>Tổng tiền: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(calculateTotalPrice())}</p>
					<button onClick={bookingFilm} className="py-[5px] px-[15px] bg-pink-500 rounded-md mr-[10px] hover:opacity-[0.8]">Mua vé</button>
				</div>
			</div>
		</div>
	</Modal>
	<div className="mx-auto w-full px-5 " >
		<div className="mb-5 text-center text-[25px] font-bold text-[#d82f8b]">LỊCH CHIẾU PHIM</div>
		<div className="flex justify-between pb-[10px]">
			<div className="">
				<p className="text-[24px] font-bold">{movie?.title}</p>
			</div>
			{/* <div className="flex">
				<select name="" id="" className="font-bold text-[#d82f8b] border-pink-500 border-2 px-[20px]"	>
					<option value="">Hà nội</option>
				</select>
				<div className="border-2 px-[20px] pt-[5px] font-bold mx-[10px]">Gần bạn</div>
			</div> */}
		</div>
		<div className="flex flex-col justify-between border-2 rounded-lg" style={{
			boxShadow: `0 2px 8px 0 rgba(20,16,11,.07)`
		}}>
			<div className="w-full p-[10px]">
				<div className="flex mt-[15px] ml-[10px] border-b-2 pb-[10px] flex-wrap">
					{cinemas?.map((item: any) => {
					return(
						<div className="mr-[20px] flex justify-center items-center mb-[20px]" onClick={() => getCinema(item.id)}>
						<div className="border-2 rounded-lg border-rose-600 w-[60px] h-[60px] mr-[10px]">
							<img className="w-full h-full" src={item.img} alt="" />
						</div>
						<p>{item?.name}</p>
					</div>
					)})}

				</div>
				<div className="pt-[20px] ">
					{
					cinema.id ? (<div className="flex items-center p-[10px] h-[62px] bg-gray-50 px-4 pb-2.5 pt-2.5">
					<div className="w-[40px] h-[40px] mr-[10px] border-[#e5e5e5] border-2 rounded-sm">
						<img className="w-full h-full" src={cinema.img} alt="" />
					</div>
					<div className="flex flex-col">
						<div className="font-medium text-black text-[24px]">{cinema?.name}</div>
						<div className="">{cinema?.address}</div>
					</div> 
				</div>): (
				<div className="flex justify-center items-center text-[20px] mt-[20px]">Hãy cho địa chỉ rạp chiếu</div>
				)
					}
									</div>
				<div className="pt-[20px] pb-[20px]">
					<div className="pl-[10px]">
						<div className="mb-[5px] text-[20px] font-bold">
							2D Phụ đề
						</div>
					</div>
					<div className="flex flex-wrap">
						{cinema?.screenings && cinema?.screenings?.length ? (
						cinema?.screenings?.map((item: any) => {
							return(
								<div className="p-[10px]">
								<div className="border-cyan-500 border-2 rounded-md p-[5px] px-[20px] cursor-pointer" onClick={() => bookking(item.id)}>
									<p className="flex justify-center items-center font-medium text-cyan-500">{item.startTime} ~ {item.endTime}	</p>
								</div>
							</div>
								)
							})): (
								<div className="flex justify-center items-center text-[20px] mt-[20px]"> Hiện chưa có lịch chiếu nào</div>
								)
						
						}
					</div>
				</div>
				{/* <div className="">
				<div className=" sticky top-0 z-[999] pt-[20px] ">
					<div className="flex items-center p-[10px] h-[62px] bg-gray-50 py-[40px] border-b-2 border-t-2">
						<div className="w-[40px] h-[40px] mr-[10px] border-[#e5e5e5] border-2 rounded-sm">
							<img className="w-full h-full" src="https://static.mservice.io/blogscontents/momo-upload-api-210604170617-637584231772974269.png" alt="" />
						</div>
						<div className="flex flex-col sticky top-0">
							<div className="font-medium text-black text-[24px]">Lotte Kosmo</div>
							<div className="">Tầng 2 Kosmo Tây Hồ, Số 161 Xuân La, P. Xuân Tảo, Q. Bắc Từ Liêm
								[ Bản đồ ]</div>
						</div>
					</div>
					<div className="flex items-center p-[10px] h-[62px] bg-gray-50 py-[40px] border-b-2 border-t-2">
						<div className="w-[40px] h-[40px] mr-[10px] border-[#e5e5e5] border-2 rounded-sm">
							<img className="w-full h-full" src="https://static.mservice.io/blogscontents/momo-upload-api-210604170617-637584231772974269.png" alt="" />
						</div>
						<div className="flex flex-col sticky top-0">
							<div className="font-medium text-black text-[24px]">Lotte Kosmo</div>
							<div className="">Tầng 2 Kosmo Tây Hồ, Số 161 Xuân La, P. Xuân Tảo, Q. Bắc Từ Liêm
								[ Bản đồ ]</div>
						</div>
					</div>
					<div className="flex items-center p-[10px] h-[62px] bg-gray-50 py-[40px] border-b-2 border-t-2">
						<div className="w-[40px] h-[40px] mr-[10px] border-[#e5e5e5] border-2 rounded-sm">
							<img className="w-full h-full" src="https://static.mservice.io/blogscontents/momo-upload-api-210604170617-637584231772974269.png" alt="" />
						</div>
						<div className="flex flex-col sticky top-0">
							<div className="font-medium text-black text-[24px]">Lotte Kosmo</div>
							<div className="">Tầng 2 Kosmo Tây Hồ, Số 161 Xuân La, P. Xuân Tảo, Q. Bắc Từ Liêm
								[ Bản đồ ]</div>
						</div>
					</div>
					<div className="flex items-center p-[10px] h-[62px] bg-gray-50 py-[40px] border-b-2 border-t-2">
						<div className="w-[40px] h-[40px] mr-[10px] border-[#e5e5e5] border-2 rounded-sm">
							<img className="w-full h-full" src="https://static.mservice.io/blogscontents/momo-upload-api-210604170617-637584231772974269.png" alt="" />
						</div>
						<div className="flex flex-col sticky top-0">
							<div className="font-medium text-black text-[24px]">Lotte Kosmo</div>
							<div className="">Tầng 2 Kosmo Tây Hồ, Số 161 Xuân La, P. Xuân Tảo, Q. Bắc Từ Liêm
								[ Bản đồ ]</div>
						</div>
					</div>
					<div className="flex items-center p-[10px] h-[62px] bg-gray-50 py-[40px] border-b-2 border-t-2">
						<div className="w-[40px] h-[40px] mr-[10px] border-[#e5e5e5] border-2 rounded-sm">
							<img className="w-full h-full" src="https://static.mservice.io/blogscontents/momo-upload-api-210604170617-637584231772974269.png" alt="" />
						</div>
						<div className="flex flex-col sticky top-0">
							<div className="font-medium text-black text-[24px]">Lotte Kosmo</div>
							<div className="">Tầng 2 Kosmo Tây Hồ, Số 161 Xuân La, P. Xuân Tảo, Q. Bắc Từ Liêm
								[ Bản đồ ]</div>
						</div>
					</div>
					<div className="flex items-center p-[10px] h-[62px] bg-gray-50 py-[40px] border-b-2 border-t-2">
						<div className="w-[40px] h-[40px] mr-[10px] border-[#e5e5e5] border-2 rounded-sm">
							<img className="w-full h-full" src="https://static.mservice.io/blogscontents/momo-upload-api-210604170617-637584231772974269.png" alt="" />
						</div>
						<div className="flex flex-col sticky top-0">
							<div className="font-medium text-black text-[24px]">Lotte Kosmo</div>
							<div className="">Tầng 2 Kosmo Tây Hồ, Số 161 Xuân La, P. Xuân Tảo, Q. Bắc Từ Liêm
								[ Bản đồ ]</div>
						</div>
						
					</div>
				</div>
				</div> */}
			</div>
			
		</div>
	</div>
	</>
	)
}
export default ShowtimeDetail