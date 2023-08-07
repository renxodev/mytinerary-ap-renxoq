export default function NavBar() {

    const name = 'My Tinerary';
    const home = 'Home';
    const cities = 'Cities';
    const login = 'Login';

    return (
        <header className="flex w-[1291px] justify-between item-center ">
                <div className="flex justify-between items-center font-sans text-3xl not-italic font-bold leading-normal">
                    <p> <img className="" src="/planning.png" alt="" /> {`${name}`}</p>
                </div>

            <nav className="flex gap-2.5 justify-center items-center font-sans text-base not-italic font-bold">
                <button className=" font-sans text-base not-italic font-bold leading-normal ">{`${home}`}</button>
                <button className=" font-sans text-base not-italic font-bold leading-normal ">{`${cities}`}</button>
                <button className=" flex text-2xl py-4 px-8 leading-normal bg-indigo-700 text-white rounded-[10px] gap-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M13.7813 5C13.7813 6.72589 12.3122 8.125 10.5 8.125C8.68783 8.125 7.21876 6.72589 7.21876 5C7.21876 3.27411 8.68783 1.875 10.5 1.875C12.3122 1.875 13.7813 3.27411 13.7813 5Z" fill="white" />
                        <path d="M3.93851 16.7652C4.00002 13.3641 6.91415 10.625 10.5 10.625C14.086 10.625 17.0001 13.3642 17.0615 16.7654C15.0641 17.6383 12.8419 18.125 10.5003 18.125C8.15851 18.125 5.9361 17.6383 3.93851 16.7652Z" fill="white" />
                    </svg>{`${login}`}</button>
            </nav>
        </header>
    )
}
