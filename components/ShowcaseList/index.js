import Link from "next/link";
import styled from "styled-components";

const ShowcaseContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ShowcaseContent = styled.div`
  position: relative;
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 0;
`;

const ShowcaseTop = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  p {
    font-size: 2.4rem;
    text-transform: capitalize;

    span {
      color: #949fb7;
    }
  }

  .more {
    font-size: 1.2rem;
    color: #596172;
  }
`;

const ShowcaseItems = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

const ShowcaseItem = styled.div`
  position: relative;
  width: 100%;

  .item {
    &-img {
      width: 100%;
    }

    &-top {
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
    }

    &-price {
      color: #596172;
      font-size: 1.4rem;
    }

    &-rating {
      color: #596172;
      font-size: 1.4rem;
      span {
        padding: 0 0.5rem;
      }
    }

    &-name {
      color: #2b313d;
      font-size: 1.6rem;
    }
  }
`;

export default function ShowcaseList({ list }) {
  const { location, data } = list;

  return (
    <ShowcaseContainer>
      <ShowcaseContent>
        <ShowcaseTop>
          <p>
            <span>Apartments in </span>
            {location}
          </p>

          <span className="more">
            <Link href="/">
              <a>Show all (340)</a>
            </Link>
          </span>
        </ShowcaseTop>
        <ShowcaseItems>
          {data.map((item, i) => (
            <ShowcaseItem key={i}>
              <Link href="/">
                <a>
                  <img src={item.image} alt="item" className="item-img" />
                </a>
              </Link>
              <div className="item-top">
                <p className="item-price">${item.price} per night</p>
                <p className="item-rating">
                  <span>🔥</span>
                  {item.rating}
                </p>
              </div>
              <div className="item-name">
                <p>{item.name}</p>
              </div>
            </ShowcaseItem>
          ))}
        </ShowcaseItems>
      </ShowcaseContent>
    </ShowcaseContainer>
  );
}
