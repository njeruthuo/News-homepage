import { headlines } from "../data";

const Headlines = () => {
  return (
    <div id="headlines" className="flex flex-col sm:flex-row my-16 space-y-6 sm:space-y-0">
      {headlines.map((headline) => {
        const { id, title, explanation, img } = headline;
        return (
          <div key={id} className="w-full sm:w-1/3  flex space-x-4 pr-4 ">
            <div className="">
              <img className="h-28 w-36 object-center object-cover" src={img} alt="" />
            </div>
            <div>
              <h3 className="font-bold text-grayBlue text-xl">{id}</h3>
              <h1 className="font-bold text-sm hover:text-softRed hover:cursor-pointer">
                {title}
              </h1>
              <p className="text-sm text-darkGrayBlue">{explanation}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Headlines;
