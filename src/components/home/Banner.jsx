import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
import img7 from "../../assets/images/7.jpg";

const Banner = () => {
  return (
    // <div className="hero h-[600px] bannerBg">
    //   <div className="hero-overlay bg-opacity-60"></div>
    //   <div className="hero-content text-center text-neutral-content">
    //     <div className="max-w-md">
    //       <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
    //       <p className="mb-5">
    //         Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
    //         excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
    //         a id nisi.
    //       </p>
    //       <button className="btn btn-primary">Get Started</button>
    //     </div>
    //   </div>
    // </div>

    <div className="hero h-[600px] bg-base-100">
      <div className="card flex-col gap-16 px-10 lg:card-side">
        <div>
          <div class="h-96 carousel carousel-vertical rounded-box">
            <div class="carousel-item h-full">
              <img src={img1} />
            </div>
            <div class="carousel-item h-full">
              <img src={img2} />
            </div>
            <div class="carousel-item h-full">
              <img src={img3} />
            </div>
            <div class="carousel-item h-full">
              <img src={img4} />
            </div>
            <div class="carousel-item h-full">
              <img src={img5} />
            </div>
            <div class="carousel-item h-full">
              <img src={img6} />
            </div>
            <div class="carousel-item h-full">
              <img src={img7} />
            </div>
          </div>
          <p className="text-pink-700 font-semibold text-center text-xs mt-7">
            <small>scroll down or scroll up</small>
          </p>
        </div>
        <div className="card-body">
          <h2 className="text-5xl font-bold text-pink-700">
            When You Think Of Flowers
          </h2>
          <h2 className="text-5xl font-bold text-pink-700">Think Of Ours</h2>
          <p className="text-xs pt-6 font-semibold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eos
            illum molestiae recusandae quia, sequi odio qui vel maxime officiis.
          </p>
          <button className="btn w-1/2 font-bold text-lg border-accent border-2 uppercase text-pink-700 bg-gradient-to-l from-primary to-secondary">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
