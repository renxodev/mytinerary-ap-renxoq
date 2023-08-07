import NavBar from "../componet/NavBar";

export default function NavLayout({children}) {
  return (
    <div>
        <NavBar/>
        {children}
        </div>
  )
}
