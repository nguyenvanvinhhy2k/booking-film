import Footer from "../../components/Layout/Footer"
import Header from "../../components/Layout/Header"
import BannerDetail from "../../components/BannerDetail"
import ShowtimeDetail from "../../components/ShowTmeDetail"
import Comment from "../../components/Comment"
import Performer from "../../components/Performer"
import TourPriceGood from "../../components/TourPriceGood"

function DetailTour() {

	return (
		<div className="flex items-center justify-center bg-[#ecf0f5]">
			<div className="w-full h-auto">
				<Header />
				<BannerDetail />
				<div className="flex p-[5rem] pt-[50px] ">
					<div className="w-[62%] mr-[30px]">
						<ShowtimeDetail />
						<Performer />
					</div>
					<div className="w-[38%] p-[20px] h-full rounded-lg bg-white" style={{	boxShadow: `0 2px 8px 0 rgba(20,16,11,.07)`}}>
						<h1 className="text-[24px] font-bold mb-[20px]">Lịch khởi hành & giá</h1>
						<div className="">
							<p>Chọn ngày khởi hành:</p>
              <div className="flex mt-[20px]">
								<div className="mr-[20px] w-[16%] h-[67px] border-[1px] flex items-center justify-center border-black rounded-[12px] p-[10px]">
									<p className="">24/5</p>
								</div>
								<div className="mr-[20px] w-[16%] h-[67px] border-[1px] flex items-center justify-center border-black rounded-[12px] p-[10px]">
									<p className="">24/5</p>
								</div>
								<div className="mr-[20px] w-[16%] h-[67px] border-[1px] flex items-center justify-center border-black rounded-[12px] p-[10px]">
									<p className="">24/5</p>
								</div>
								<div className="mr-[20px] w-[16%] h-[67px] border-[1px] flex items-center justify-center border-black rounded-[12px] p-[10px]">
									<p className="">24/5</p>
								</div>
								<div className="mr-[20px] w-[16%] h-[67px] border-[1px] flex items-center justify-center border-black rounded-[12px] p-[10px]">
									<p className="">24/5</p>
								</div>
							</div>
							<div className="mt-[40px]">
								<div className="flex justify-between border-[1px] border-black p-[10px] rounded-[8px]">
									<p className="w-[50%]">Người lớn</p>
									<p className="w-[30%]"> x 7.300.444</p>
									<div className="flex justify-between w-[20%]">
									<p> - </p>
									<p>2</p>
									<p> + </p>
									</div>
								</div>

								<div className="flex justify-between border-[1px] border-black p-[10px] rounded-[8px] mt-[10px]">
									<p className="w-[50%]">Trẻ em</p>
									<p className="w-[30%]"> x 7.300.444</p>
									<div className="flex justify-between w-[20%]">
									<p> - </p>
									<p>2</p>
									<p> + </p>
									</div>
								</div>
							</div>

							<div className="mt-[30px]">
								<p> Liên hệ để xác nhận chỗ</p>
							</div>

							<div className="mt-[40px]">
								<div className="">
									<div className="flex justify-between">
										<p>Giá gốc</p>
										<p>3.434.435đ</p>
									</div>
								</div>
								<div className="mt-[20px]">
									<div className="flex justify-between">
										<p>Tổng giá</p>
										<p>2.434.435đ</p>
									</div>
								</div>
							</div>

							<div className="mt-[30px]">
								<div className="flex justify-between">
									<div className="w-[48%] h-[50px] border-[1px] border-black flex justify-center items-center">
										<p className="text-center ">Liên hệ tư vấn</p>
									</div>
									<div className="w-[48%] h-[50px] border-[1px] border-black flex justify-center items-center">
										<p className="text-center">Yêu cầu đặt</p>
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
