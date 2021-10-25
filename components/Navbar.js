import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const NavContainer = styled.div`
  position: relative;
  width: 100%;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
`;

const NavContent = styled.div`
  position: relative;
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLeft = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .nav-logo {
    img {
      width: 30px;
    }
  }

  .nav-searchbar {
    position: relative;
    padding-left: 2rem;

    input {
      position: relative;
      width: 50rem;
      padding: 0.8rem;
      border-radius: 5px;
      border: solid 1px #d9dde7;
      color: #949fb7;
    }

    img {
      position: absolute;
      width: 15px;
      top: 1rem;
      right: 1rem;
    }
  }
`;

const NavRight = styled.div`
  .navList {
    display: flex;
    align-items: center;
    list-style: none;
  }

  .navItem {
    font-size: 1.3rem;
    padding: 0 1rem;
  }

  .navLink {
    color: #596172;
    &:hover {
      color: #25df8f;
    }
  }
`;

export default function Navbar() {
  return (
    <NavContainer>
      <NavContent>
        <NavLeft>
          <div className="nav-logo">
            <img src="/logo.png" alt="logo" />
          </div>

          <div className="nav-searchbar">
            <input
              type="text"
              placeholder="Search for Homes , apartments or homes..."
            />

            <img src="/SearchIcon.png" alt="logo" className="searchIcon" />
          </div>
        </NavLeft>

        <NavRight>
          <ul className="navList">
            <li className="navItem">
              <Link href="/">
                <a className="navLink">Become a Host</a>
              </Link>
            </li>
            <li className="navItem">
              <Link href="/">
                <a className="navLink">Trips</a>
              </Link>
            </li>
            <li className="navItem">
              <Link href="/">
                <a className="navLink">Messages</a>
              </Link>
            </li>
            <li className="navItem">
              <Link href="/">
                <a className="navLink">Help</a>
              </Link>
            </li>
            <li className="navItem">
              <Link href="/">
                <a className="navLink">
                  <img src="/User.png" alt="logo" />
                </a>
              </Link>
            </li>
          </ul>
        </NavRight>
      </NavContent>
    </NavContainer>
  );
}
