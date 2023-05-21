const Banner = () => {
  return <div className="flex p-[10px] h-[490px]" 
	style={{backgroundImage: "url(//cdn2.ivivu.com/2023/05/15/17/tour-top-20230515.png) "}}>
    <div className="flex p-[30px] ml-[50px] w-[1200px] flex-col" >
      <div>
        <h2 className="font-bold text-[42px] text-white">Du lịch theo cá tính</h2>
        <ul className="flex flex-col space-y-1 font-medium pt-1 m-[10px] text-white">
          <li>Combo khách sạn - vé máy bay - đưa đón sân bay giá tốt nhất</li>
        </ul>
      </div>
      <div className="w-[70%] p-[20px]" style={{ background: "rgba(0,0,0,0.3)"}}>
        <input className="p-[20px] w-[100%] rounded-[12px] text-[18px]" type="text" placeholder="Bạn muốn đi đâu?" />
      </div>
			<div className=" mt-[40px]">
				<button className="text-[#fff] px-[10px] py-[7px] hover:opacity-[0.8] text-[18px] font-bold bg-[#d82f8b] m-auto rounded-lg">
					Đặt phòng ngay
				</button>
			</div>
    </div>
  </div>
}
export default Banner