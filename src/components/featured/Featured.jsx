import "./featured.css";
import useFetch from "../../hooks/useFetch"
const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=HN,Danang,Dalat"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://www.dalattrip.com/media/2012/10/Dalat-Vietnam-Dalat-central-lake.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Da Lat</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://statics.vinpearl.com/da-nang-in-viet-nam-2_1648350768.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Da Nang</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://vietnam.travel/sites/default/files/styles/article_photo_large/public/2019-01/Phu%20Quoc%20Vietnam%20Travel-5.jpg?itok=gHUdAvyf"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Phu Quoc</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
