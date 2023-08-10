import Home from "../componet/Home";
import NavLayout from "./NavLayout";

export default function HomeLayout({children}) {
  return (
    <div className="w-108 pb-25 pt-2 pl-14 pr-14  max-sm:pl-5 max-sm:pr-5 ">
        <NavLayout/>
        {children}
        <Home/>
   
    </div>
  )
}
