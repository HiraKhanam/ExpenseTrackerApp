import { AppContext } from "../../context/AddContext";
import { useContext } from "react";
export default () => {
  const { budget } = useContext(AppContext);
  return (
    <div>
      <div className="bg-gray-600 flex text-white lg:text-2xl text-xl lg:p-6 p-4 rounded-xl gap-x-3">
        <h2 className="text-white">Budget:</h2>
        <h3>{budget}</h3>
      </div>
    </div>
  );
};
