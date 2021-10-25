import Layout from "../components/Layout";
import {
  HeroContent,
  HeroLeft,
  HeroRight,
  HeroSection,
} from "../styles/Hero.styles";

export default function Home() {
  return (
    <>
      <Layout>
        <HeroSection>
          <HeroContent>
            <HeroLeft>
              <div className="hero-heading">
                <h1>
                  <span> 🏡</span>
                  <br /> Book unique homes and <br /> experiences all over the
                  world.
                </h1>
                <div className="hero-searchbar">
                  <input type="text" placeholder='Try"Brazzaville, Congo"' />

                  <img
                    src="/SearchIcon.png"
                    alt="logo"
                    className="searchIcon"
                  />
                </div>

                <div className="hero-filter">
                  <button className="filter-item active">All properties</button>
                  <button className="filter-item">Homes</button>
                  <button className="filter-item">Experiences</button>
                  <button className="filter-item">Restaurants</button>
                </div>
              </div>
            </HeroLeft>
            <HeroRight>
              <div
                className="hero-item"
                style={{
                  backgroundImage: `url(/heroImage.png)`,
                }}
              >
                <div className="user">
                  <div className="user-img">
                    <img src="/User.png" alt="user" />
                  </div>
                  <div className="info">
                    <span className="username">Amber Hudson</span>
                    <br />
                    <span className="location">Los Angeles ,CA</span>
                  </div>
                </div>
              </div>
            </HeroRight>
          </HeroContent>
        </HeroSection>
      </Layout>
    </>
  );
}
