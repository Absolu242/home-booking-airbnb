import styled from "styled-components";

export const RoomHero = styled.div`
  position: relative;
  /* background-position: 50% 50%;
  background-size: cover; */
  max-width: 100vw;
  width: 100%;
  height: 90vh;

  .hero-image {
    position: relative;
    height: 100%;
    img {
      width: 100%;
      height: 90vh;
    }
  }

  .hero-action {
    position: absolute;
    left: 8rem;
    bottom: 5rem;

    button {
      padding: 0.8rem;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 5px;
      margin-right: 1rem;
      color: #fff;
    }
  }
`;

export const RoomContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const RoomContent = styled.div`
  max-width: 1110px;
  height: 100%;
  min-height: 500px;
  width: 100%;
  margin: 0 auto;
`;

export const RoomLayoutGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
`;

export const RoomInfo = styled.div`
  position: relative;
  padding: 8rem 0;
  .roomInfo-top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .label {
      font-size: 1.4rem;
      color: #949fb7;
    }

    .title {
      font-size: 2.4rem;
      font-weight: 400;
      padding: 1rem 0;
    }

    .user {
      display: flex;
      align-items: center;

      .info {
        padding-right: 0.8rem;

        .username {
          font-size: 1.4rem;
        }

        .location {
          font-size: 1.2rem;
          color: #949fb7;
        }
      }
    }
  }

  .roomInfo-card {
    background-color: #fff;
    border: 1px solid #949fb7;
    border-radius: 5px;
    padding: 3rem 0;
    margin: 3rem 0;

    .card-label {
      font-size: 1.3rem;
      color: #949fb7;
      padding: 0 3rem;
    }

    .card-main {
      padding: 2rem 0;
      font-size: 1.5rem;

      .wrapper {
        padding: 0 3rem;
      }
    }

    .card-action {
      padding: 0 3rem;
      button {
        margin-right: 2rem;
        color: #d9dde7;
        outline: none;

        &:focus,
        &:active {
          color: #000;
        }
        &.more {
          color: #25df8f;
        }
      }
    }

    .card-list {
      list-style: none;
      display: flex;
      justify-content: space-between;
      color: #949fb7;
      padding: 0 3rem;
    }

    .reviews-number {
      padding: 0 3rem;
      padding-bottom: 2rem;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #949fb7;
      h2 {
        font-weight: 500;
        padding-right: 2rem;
      }
    }

    .reviews-list {
      position: relative;

      .review-item {
        border-bottom: 1px solid #949fb7;
        padding: 3rem;

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .user {
            display: flex;
            align-items: center;

            &-img {
              img {
                width: 40px;
              }
            }

            .info {
              padding-left: 0.8rem;

              .username {
                font-size: 1.3rem;
              }

              .date {
                font-size: 1.2rem;
                color: #949fb7;
              }
            }
          }
        }

        .review-main {
          padding: 2rem 0;
          padding-left: 4.5rem;
        }
      }
    }
  }
`;

export const RoomBooking = styled.div``;
