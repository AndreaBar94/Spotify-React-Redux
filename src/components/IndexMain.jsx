import CentralNavbar from "./CentralNavbar";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const IndexMain = () => {
    return(
        <>
        <div className="mainBox row g-0 bg-dark">
            <Sidebar/>
            <div id="mainContent" className="col-12 col-lg-8 px-0 overflow-scroll">
                    <CentralNavbar/>
                    <MainContent/>
                </div>
        </div>
        </>
    )
}
export default IndexMain;