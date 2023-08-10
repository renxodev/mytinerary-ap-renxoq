import Carrusel from "./Carrusel"
import Footer from "./Footer"

export default function Home() {

    let datos = [
        { "id": "am1", "city": "Cancun", "photo": "/img/america/cancun.jpg" },
        { "id": "am2", "city": "New York", "photo": "/img/america/newyork.jpg" },
        { "id": "am3", "city": "Rio de Janeiro", "photo": "/img/america/rioDeJaneiro.jpg" },
        { "id": "am4", "city": "Ushuaia", "photo": "/img/america/ushuaia.jpg" },
        { "id": "as1", "city": "Bangkok", "photo": "/img/asia/bangkok.jpg" },
        { "id": "as2", "city": "Pekin", "photo": "/img/asia/pekin.jpg" },
        { "id": "as3", "city": "Singapur", "photo": "/img/asia/singapur.jpg" },
        { "id": "as4", "city": "Tokyo", "photo": "/img/asia/tokio.jpg" },
        { "id": "eu1", "city": "Ibiza", "photo": "/img/europe/ibiza.jpg" },
        { "id": "eu2", "city": "London", "photo": "/img/europe/london.jpg" },
        { "id": "eu3", "city": "Paris", "photo": "/img/europe/paris.jpg" },
        { "id": "eu4", "city": "Roma", "photo": "/img/europe/roma.jpg" },
        { "id": "oc1", "city": "Majuro", "photo": "/img/oceania/majuro.jpg" },
        { "id": "oc2", "city": "Sidney", "photo": "/img/oceania/sidney.jpg" },
        { "id": "oc3", "city": "Suva", "photo": "/img/oceania/suva.jpg" },
        { "id": "oc4", "city": "Wellington", "photo": "/img/oceania/wellington.jpg" }
    ]
    return (
        <main className="flex flex-wrap justify-between items-center  pt-10">
            <div className="flex flex-col w-[742px] items-center gap-[40px] ">
                <h1 className="flex self-stretch font-size text-5xl not-italic font-bold leading-normal text-black max-sm:text-center" >
                    Find the perfect destination</h1>
                <p className="flex text-gray-650 text-2xl not-italic font-semibold leading-normal ">
                    Our app will help you find the perfect path for your next trip.
                    With an easy-to-use interface and a host of itinerary options,
                    planning your next trip has never been easier.</p>
                <button className="flex items-between text-2xl px-3 py-2 font-bold bg-indigo-700 hover:bg-indigo-500 rounded-lg text-white ">View More</button>               
            </div>
            <div className="flex  items-centerw-[400px] ">
                <Carrusel data={datos} />
            </div>
            <div className="flex justify-center items-center h-[50px] text-bold bg-black-800">
                <Footer/>
            </div>
        </main>
    )
}