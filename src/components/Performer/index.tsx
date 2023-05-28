
const Performer = ({tour}: any) => {
    return <div className="pt-[20px] ">
        <p className="text-[24px] font-bold pt-[20px] mb-[20px]">Hình ảnh & Video</p>
        <div className="flex">
            <div className="w-[280px] h-[160px] pr-[20px] overflow-hidden">
                <img className="object-cover  h-full w-full rounded hover:scale-110 transition-transform duration-300 " src={`http://localhost:8228/files/${tour.poster}`} alt="" />
            </div>
            <div className="w-[280px] h-[160px] overflow-hidden">
                <img className="object-cover  h-full w-full rounded hover:scale-110 transition-transform duration-300 " src={`http://localhost:8228/files/${tour.banner}`} alt="" />
            </div>
        </div>
    </div>
}
export default Performer