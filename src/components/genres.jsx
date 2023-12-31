import { genres } from "@/constants/genre";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";

function Genres({ setSelectedGenres }) {
  const navigate = useNavigate();
  const handleClick = (item) => {
    setSelectedGenres(item);
    navigate("/shop");
  };
  return (
    <div className="flex flex-col gap-5 items-center mb-16">
      <div className="box_title text-center text-5xl mb-3">
        <h1>Genres</h1>
      </div>
      <div className="flex justify-around gap-5 flex-wrap mb-5">
        {genres.map((genre) => (
          <div
            onClick={() => handleClick([genre])}
            key={genre.title}
            className="bg-[#0e7490] text-white w-[150px] h-[150px] gap-5 flex justify-center items-center text-lg cursor-pointer rounded transition-all hover:bg-[#05475a] hover:shadow-2xl hover:scale-105"
          >
            {genre.title}
          </div>
        ))}
      </div>
      <div>
        <Link
          to="/shop"
          className="btn_red bg-red-600 px-10 py-3 text-white rounded transition-all hover:bg-red-700"
        >
          Explore All
        </Link>
      </div>
    </div>
  );
}
export default Genres;

Genres.propTypes = {
  selectedGenres: PropTypes.array,
  setSelectedGenres: PropTypes.func,
};
