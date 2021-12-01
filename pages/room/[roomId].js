import { useRouter } from "next/dist/client/router";
import React from "react";
import Layout from "../../components/Layout";
import { datalist } from "../../data";
import {
  RoomBooking,
  RoomContainer,
  RoomContent,
  RoomHero,
  RoomInfo,
  RoomLayoutGrid,
} from "../../styles/Room.styles";
export default function Room() {
  const router = useRouter();
  const { city, roomId } = router.query;

  let data = datalist.filter((item) => item.location.city === city)[0];

  let room = data.data.filter((el) => el.id === parseInt(roomId))[0];

  console.log(room);

  return (
    <Layout>
      <RoomHero>
        <div className="hero-image">
          <img src={room.image} alt="hero" />
          <div className="hero-action">
            <button>Share</button>
            <button>Save</button>
          </div>
        </div>
      </RoomHero>
      <RoomContainer>
        <RoomContent>
          <RoomLayoutGrid>
            <RoomInfo>
              <div className="roomInfo-top">
                <div>
                  <p className="label">Entier Appartement</p>
                  <h1 className="title">{room.name}</h1>
                </div>

                <div className="user">
                  <div className="info">
                    <span className="username">Amber Hudson</span>
                    <br />
                    <span className="location">
                      {data.location.city},{data.location.country}
                    </span>
                  </div>
                  <div className="user-img">
                    <img src="/User.png" alt="user" />
                  </div>
                </div>
              </div>

              {/* card 1 */}
              <div className="roomInfo-card">
                <p className="card-label">Home Highlights</p>
                <div className="card-main">
                  <div className="wrapper">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odit ipsam tempore asperiores voluptatibus commodi
                    voluptatum.
                  </div>
                </div>

                <div className="card-action">
                  <button>Helpful</button>
                  <button>Not Helpful</button>
                </div>
              </div>

              {/* card 2 */}
              <div className="roomInfo-card">
                <p className="card-label">About this place</p>
                <div className="card-main">
                  <div className="wrapper">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Odit ipsam tempore asperiores voluptatibus commodi
                    voluptatum. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quo numquam voluptatibus autem eum iure
                    iste dolores vitae error necessitatibus! Provident ad
                    architecto error. Natus reprehenderit cum voluptatibus
                    aliquam, id nostrum!
                  </div>
                </div>

                <div className="card-action">
                  <button className="more">Show more</button>
                </div>
              </div>

              {/* card 3 */}

              <div className="roomInfo-card">
                <p className="card-label">Ameneties</p>
                <div className="card-main">
                  <ul className="card-list">
                    <li>🍏 Fresh Fruits</li>
                    <li>🎮 Game Console</li>
                    <li>🏔️ Great View</li>
                    <li>🛁 Bathtub</li>
                    <li>📗 Books & News</li>
                  </ul>
                </div>

                <div className="card-action">
                  <button className="more">Show more</button>
                </div>
              </div>

              {/* card 4 */}

              <div className="roomInfo-card">
                <p className="card-label">Reviews</p>
                <div className="card-main">
                  <div className="reviews-number">
                    <h2>185 Reviews</h2> <span>🔥{room.rating}</span>
                  </div>
                  <div className="reviews-list">
                    <div className="review-item">
                      <div className="top">
                        <div className="user">
                          <div className="user-img">
                            <img src="/User.png" alt="user" />
                          </div>
                          <div className="info">
                            <span className="username">Amber Hudson</span>
                            <br />
                            <span className="date">August 2018</span>
                          </div>
                        </div>

                        <div className="action">...</div>
                      </div>

                      <div className="review-main">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis cum sit dignissimos, quas aliquam ut
                        tempora, laborum illum earum saepe ipsa similique id!
                        Fugiat consequatur, quibusdam cumque qui impedit
                        delectus!
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-action">
                  <button className="more">Show more</button>
                </div>
              </div>
            </RoomInfo>
            <RoomBooking>card</RoomBooking>
          </RoomLayoutGrid>
        </RoomContent>
      </RoomContainer>
    </Layout>
  );
}
