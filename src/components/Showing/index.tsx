import Modal from '../Popup';
import { useState } from "react";

const Showing = () => {
	const [isOpen, setIsOpen] = useState<any>(false);
	const [isOpen1, setIsOpen1] = useState<any>(false);
	const [data, setData] = useState<any>([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]);

	return (
		<>
			<Modal
				title="Giới thiệu phim"
				open={isOpen}
				handleCancel={() => {
					setIsOpen(false)
				}}
				isOutSide={true}
				className="w-full max-w-[60%] h-[90vh]"
			>
				<div className="">
				<div className="w-full h-[400px]" style={{ boxShadow: "1px 1px 5px 1px #E8FFE0"}}>
					<iframe className='w-full h-full' allow="autoplay; encrypted-media" 
              allowFullScreen src="https://www.youtube.com/embed/tgbNymZ7vqY?rel=0&autoplay=1" />
				</div>
				<div className="flex text-white mt-[20px]">
					<div className=" w-[10%] h-[120px] mr-[20px]">
						<img className="w-[80px] h-full object-cover" src="https://img.cdn.vncdn.io/cinema/img/90576470029227527-y5rrebdZsGgpKb2U52rxMQTYbn0.jpg" alt="" />
					</div>
					<div className="w-[90%]">
						<p>Mikey 17 - Khoa Học Viễn Tưởng, Phiêu Lưu, Chính Kịch</p>
						<p>Được chuyển thể từ tiểu thuyết Mickey 7 của nhà văn Edward Ashton, Cuốn tiểu thuyết xoay quanh các phiên bản nhân bản vô tính mang tên “Mickey”, dùng để thay thế con người thực hiện cuộc chinh phạt nhằm thuộc địa hóa vương quốc băng giá Niflheim. Mỗi khi một Mickey chết đi,</p>
						<div className="flex mt-[10px]">
						<button className="py-[5px] px-[15px] bg-pink-500 rounded-md mr-[10px] hover:opacity-[0.8]">
							Đặt vẽ
						</button>
						<button onClick={() => setIsOpen(false)} className="py-[5px] px-[15px] bg-[#cccc] rounded-md mr-[10px] hover:opacity-[0.8]">
							Đóng
						</button>
						</div>
					</div>
				</div>
				</div>
			</Modal>

			<Modal
				title="Mua vé xem phim"
				open={isOpen1}
				handleCancel={() => {
					setIsOpen1(false)
				}}
				isOutSide={true}
				className="w-full max-w-[60%] h-[90vh]"
			>
				<div className="">
				<div className="w-full h-[400px]" style={{ boxShadow: "1px 1px 5px 1px #E8FFE0"}}>
					<div className="text-white w-[60%] h-[60%] m-auto flex justify-center items-center flex-wrap">
						{data?.map((i: any) =>{ return (
						<button className="w-[2.5rem] h-[2.5rem] ml-[0.6rem] mt-[20px] mb-[0.6rem] hover:opacity-[0.6] rounded-md bg-red-600">{i}</button>
						)}
						)}
					</div>
				</div>
				<div className="flex text-white mt-[20px] flex-col justify-between h-[150px] px-[20px]">
					<div className="border-b-[2px] border-white pb-[10px]">
						<p>Lật Mặt 6: Tấm Vé Định Mệnh</p>
						<p>23:45 ~ 01:57 · T4, 17/05 · Phòng chiếu P1 · 2D Phụ đề</p>
					</div>
					<div className="flex justify-between border-b-[2px] border-white pb-[10px]">
						<p>Chỗ ngồi: </p>
						<p>E4, E3, C3, B8, C8, A1 </p>
					</div>
					<div className="flex justify-between">
						<p>Tạm tính: 320.000đ</p>
						<button className="py-[5px] px-[15px] bg-pink-500 rounded-md mr-[10px] hover:opacity-[0.8]">Mua vé</button>
					</div>
				</div>
				</div>
			</Modal>
			<div className=" scroll-margin-top bg-gray-50 bg-contain bg-bottom bg-no-repeat py-8 md:py-10 lg:py-14 flex flex-col justify-center items-center p-28">
		<div className="mx-auto w-full max-w-6xl px-5" >
      <div className="text-center text-[30px] font-bold text-[#d82f8b]">Tour Thám Hiểm</div>
			<p className="mb-5 text-center text-[#003C71]">Thử Thách Bản Thân, Vượt Lên Chính Mình</p>
			<div className="flex justify-between">
			<div className="w-[32%] rounded-lg  text-[#fff] pb-[20px]" style={{
				boxShadow: `0 2px 8px 0 rgba(20,16,11,.07)`}}>
					<div className=" rounded-lg">
					<img src="https://cdn2.ivivu.com/2022/03/28/16/ivivu-merlion-park-singapore-360x225.gif" alt="" />
					</div>
					<div className="px-[10px] text-[#003C71]">
					<div className="text-[#003C71] mt-[10px] flex items-center font-bold text-[16px]">
					Tour Đà Nẵng 3N2Đ: Đà Nẵng - Sơn Trà - Cù Lao Chàm - Hội An - Bà Nà
					</div>
					<div className="mt-[5px] text-[#003C71]">
						<p>Đánh giá : 9.5</p>
					</div>
					<div className="mt-[10px]">
						<ul className="flex text-[#00abc5] list-disc flex-wrap text-[14px] ml-[20px]">
							<li className="w-[48%] m-[1%]">Bà là hill</li>
							<li className="w-[48%] m-[1%]">Cù lao chàm</li>
							<li className="w-[48%] m-[1%]">Hội an</li>
							<li className="w-[48%] m-[1%]">Chùa Linh Ứng</li>
							<li className="w-[48%] m-[1%]">Bán đảo sơn trà</li>

						</ul>
					</div>
					</div>
					<div className="text-[#d82f8b] font-bold px-[20px] mt-[20px] flex justify-end ">
						7.200.000đ
					</div>
				</div>
				<div className="w-[32%] rounded-lg  text-[#fff] pb-[20px]" style={{
				boxShadow: `0 2px 8px 0 rgba(20,16,11,.07)`}}>
					<div className=" rounded-lg">
					<img src="https://cdn2.ivivu.com/2022/03/28/16/ivivu-merlion-park-singapore-360x225.gif" alt="" />
					</div>
					<div className="px-[10px] text-[#003C71]">
					<div className="text-[#003C71] mt-[10px] flex items-center font-bold text-[16px]">
					Tour Đà Nẵng 3N2Đ: Đà Nẵng - Sơn Trà - Cù Lao Chàm - Hội An - Bà Nà
					</div>
					<div className="mt-[5px] text-[#003C71]">
						<p>Đánh giá : 9.5</p>
					</div>
					<div className="mt-[10px]">
						<ul className="flex text-[#00abc5] list-disc flex-wrap text-[14px] ml-[20px]">
							<li className="w-[48%] m-[1%]">Bà là hill</li>
							<li className="w-[48%] m-[1%]">Cù lao chàm</li>
							<li className="w-[48%] m-[1%]">Hội an</li>
							<li className="w-[48%] m-[1%]">Chùa Linh Ứng</li>
							<li className="w-[48%] m-[1%]">Bán đảo sơn trà</li>

						</ul>
					</div>
					</div>
					<div className="text-[#d82f8b] font-bold px-[20px] mt-[20px] flex justify-end ">
						7.200.000đ
					</div>
				</div>
				<div className="w-[32%] rounded-lg  text-[#fff] pb-[20px]" style={{
				boxShadow: `0 2px 8px 0 rgba(20,16,11,.07)`}}>
					<div className=" rounded-lg">
					<img src="https://cdn2.ivivu.com/2022/03/28/16/ivivu-merlion-park-singapore-360x225.gif" alt="" />
					</div>
					<div className="px-[10px] text-[#003C71]">
					<div className="text-[#003C71] mt-[10px] flex items-center font-bold text-[16px]">
					Tour Đà Nẵng 3N2Đ: Đà Nẵng - Sơn Trà - Cù Lao Chàm - Hội An - Bà Nà
					</div>
					<div className="mt-[5px] text-[#003C71]">
						<p>Đánh giá : 9.5</p>
					</div>
					<div className="mt-[10px]">
						<ul className="flex text-[#00abc5] list-disc flex-wrap text-[14px] ml-[20px]">
							<li className="w-[48%] m-[1%]">Bà là hill</li>
							<li className="w-[48%] m-[1%]">Cù lao chàm</li>
							<li className="w-[48%] m-[1%]">Hội an</li>
							<li className="w-[48%] m-[1%]">Chùa Linh Ứng</li>
							<li className="w-[48%] m-[1%]">Bán đảo sơn trà</li>

						</ul>
					</div>
					</div>
					<div className="text-[#d82f8b] font-bold px-[20px] mt-[20px] flex justify-end ">
						7.200.000đ
					</div>
				</div>
			</div>
			<div className="flex content-center items-center mt-[40px]">
				<button className="text-[#d82f8b] px-[10px] py-[7px] hover:opacity-[0.8] text-[18px] border-[#d82f8b] border-2 font-bold bg-[#fff] m-auto rounded-2xl">
					Xem tiếp nhé !
				</button>
			</div>
    </div> 
	</div>
		</>
	)
}
export default Showing