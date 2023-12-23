import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading } = useFetch(
    "/hotels/countByCity?cities=Kikoni,kikumi,wandegeya"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://api.rentalynk.com/properties/120/6.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>kikoni</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://www.kcca.go.ug/includes/slider/img/home/AQ5Z1922.JPG"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>kikumi kikumi</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://campusbee.ug/wp-content/uploads/2015/09/Ideal-Classic-Hostel-Nakawa.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Wandegeya</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
