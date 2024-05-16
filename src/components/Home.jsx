import { news } from "../data";
import desktop from "../img/desktop.jpg";
import mobile from "../img/mobile.jpg";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row mt-8 gap-6">
      <div className="w-full sm:w-2/3">
        <img className="h-80 hidden sm:block" src={desktop} alt="" />
        <img className="sm:hidden" src={mobile} alt="" />

        <div className="flex sm:flex-row flex-col place-items-start justify-between mt-3">
          <div>
            <h3 className="text-5xl font-extrabold">
              The Bright Future of Web 3.0?
            </h3>
          </div>

          <div>
            <div className="sm:mx-6">
              <p className="text-darkGrayBlue text-sm">
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button className="bg-softRed hover:bg-veryDarkBlue text-offWhite px-4 py-2 sm:mt-10 my-6">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Second */}
      <div className="w-full sm:w-1/3 bg-veryDarkBlue p-4 text-offWhite">
        <h1 className="text-softOrange font-bold text-3xl mb-4">New</h1>

        {news.map((item, index) => {
          const { title, explanation } = item;
          return (
            <div
              key={index}
              id="sidebar"
              className="my-8 border-b border-grayBlue pb-8"
            >
              <h2 className="my-4 font-bold hover:text-softOrange hover:cursor-pointer">
                {title}
              </h2>
              <p>{explanation}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
