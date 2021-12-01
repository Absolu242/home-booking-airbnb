import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  background-color: #fff;

  padding: 0 1rem;
`;

export const HeroContent = styled.div`
  max-width: 1110px;
  height: 100%;
  min-height: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeroLeft = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .hero-heading {
    h1 {
      span {
        display: block;
        position: relative;
        line-height: 1rem;
      }
      color: #2b313d;
      font-size: 3.6rem;
      font-weight: 400;
      line-height: 50px;
    }
  }

  .hero-searchbar {
    position: relative;
    margin-top: 4rem;

    input {
      position: relative;
      max-width: 45rem;
      width: 100%;
      padding: 0.8rem;
      border-radius: 5px;
      border: solid 1px #d9dde7;
      color: #949fb7;
    }

    img {
      position: absolute;
      width: 15px;
      top: 1rem;
      right: 4rem;
    }
  }

  .hero-filter {
    position: relative;
    margin-top: 2rem;

    .filter-item {
      color: #fff;
      background-color: #c1c8d7;
      border-radius: 5px;
      padding: 0.8rem 1rem;
      margin-right: 0.8rem;
      margin-bottom: 0.5rem;

      &:hover,
      &.active {
        background-color: #25df8f;
      }
    }
  }
`;

export const HeroRight = styled.div`
  position: absolute;
  display: flex;
  right: 0;
  width: 50%;
  height: 100%;

  .hero-item {
    width: 100%;
    height: 500px;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
  }

  .user {
    position: absolute;
    display: flex;
    align-items: center;
    left: 3rem;
    bottom: 3rem;

    .info {
      color: #fff;
      padding-left: 1rem;
      font-size: 1.3rem;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
