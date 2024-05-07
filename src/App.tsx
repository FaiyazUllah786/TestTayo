import AllRoutes from "./Routes/AllRoutes";
import Header from "./components/Header";
function App() {
  return (
    <>
      {/* <img
        src="https://superdevresources.com/wp-content/uploads/2016/02/material-banners.jpg"
        alt=""
        className="h-screen w-screen bg-cover absolute"
      /> */}
      <div className="flex  bg-img">
        <Header />
        <div className=" my-5 mx-auto transition-all duration-300 flex-1 ">
          <AllRoutes />
        </div>
      </div>
    </>
  );
}

export default App;
