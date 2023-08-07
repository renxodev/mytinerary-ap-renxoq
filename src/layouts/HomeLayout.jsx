import Home from "../componet/Home";
import NavLayout from "./NavLayout";

export default function HomeLayout({children}) {
  return (
    <div className="pb-[399px] pt-[32px] pl-[219px] pr-[218px] bg-gradient-to-r from-sky-500 to-indigo-500 ">
        <NavLayout/>
        {children}
        <Home/>
    </div>
  )
}
