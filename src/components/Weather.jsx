import search_icon from "../assets/search.png";
const Weather = () => {
    return (
        <div className=" place-self-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl">
            <div className=" flex p-10  gap-3 items-center">
                <input type="text" name="" id="" placeholder="search"  className="h-[50px] rounded-[40px] bg-[#ebfffc] text-[#626262] text-xl pl-6"/>
                <img src={search_icon} alt="" className="w-[50] p-4 rounded-full bg-[#ebfffc] cursor-pointer" />
            </div>
        </div>
    );
}
 
export default Weather;