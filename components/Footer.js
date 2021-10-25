import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const FooterContainer = styled.div`
  position: relative;
  width: 100%;
`;

const FooterContent = styled.div`
  background-color: #fff;
  position: relative;
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
  padding: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 1px #d9dde7;
`;

const FooterLeft = styled.div`
  position: relative;

  .footer-logo {
    img {
      width: 30px;
    }
  }

  .footer-filter {
    position: relative;
    margin-top: 3rem;

    select {
      position: relative;
      width: 30rem;
      padding: 0.8rem;
      border-radius: 5px;
      border: solid 1px #d9dde7;
      color: #949fb7;
      margin-bottom: 1rem;
    }

    img {
      position: absolute;
      width: 15px;
      top: 1rem;
      right: 1rem;
    }
  }

  .footer-info {
    margin-top: 1rem;
    .footerItem {
      font-size: 1.3rem;
      padding: 1rem 0;
    }

    a {
      font-size: 1.3rem;
      padding-right: 1rem;
      color: #949fb7;
      &:hover {
        color: #25df8f;
      }
    }
  }
`;

const FooterRight = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-evenly;
  .footerList {
    list-style: none;
  }

  .footerItem {
    font-size: 1.3rem;
    padding: 1rem 0;

    &.label {
      color: #949fb7;
    }
  }

  .footerLink {
    color: #596172;
    &:hover {
      color: #25df8f;
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLeft>
          <div className="footer-logo">
            <img src="/logo.png" alt="logo" />
          </div>

          <div className="footer-filter">
            <select name="lang" id="">
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
            <br />
            <select name="currency" id="">
              <option value="usd">USD</option>
              <option value="eu">Euro</option>
            </select>
          </div>

          <div className="footer-info">
            <Link href="/">
              <a>Terms</a>
            </Link>
            <Link href="/">
              <a>Privacy</a>
            </Link>
            <Link href="/">
              <a> Sitemap</a>
            </Link>
          </div>
        </FooterLeft>

        <FooterRight>
          <ul className="footerList">
            <li className="footerItem label">About us</li>
            <li className="footerItem">
              <Link href="/">
                <a className="footerLink">About Us</a>
              </Link>
            </li>
            <li className="footerItem">
              <Link href="/">
                <a className="footerLink">Careers</a>
              </Link>
            </li>
            <li className="footerItem">
              <Link href="/">
                <a className="footerLink">Press</a>
              </Link>
            </li>
            <li className="footerItem">
              <Link href="/">
                <a className="footerLink">Help</a>
              </Link>
            </li>
          </ul>

          <ul className="footerList">
            <li className="footerItem label">Discover</li>
            <li className="footerItem">
              <Link href="/">
                <a className="footerLink">Trust & Safety</a>
              </Link>
            </li>
            <li className="footerItem">
              <Link href="/">
                <a className="footerLink">Travel Credit</a>
              </Link>
            </li>
            <li className="footerItem">
              <Link href="/">
                <a className="footerLink">Gift Cards</a>
              </Link>
            </li>
            <li className="footerItem">
              <Link href="/">
                <a className="footerLink">Businnes Travel</a>
              </Link>
            </li>
          </ul>

          <ul className="footerList">
            <li className="footerItem label">Hosting</li>
            <li className="footerItem">
              <Link href="/">
                <a className="footerLink">Why host</a>
              </Link>
            </li>
            <li className="footerItem">
              <Link href="/">
                <a className="footerLink">Hospitality</a>
              </Link>
            </li>
            <li className="footerItem">
              <Link href="/">
                <a className="footerLink">Hosting</a>
              </Link>
            </li>
            <li className="footerItem">
              <Link href="/">
                <a className="footerLink">Community</a>
              </Link>
            </li>
          </ul>
        </FooterRight>
      </FooterContent>
    </FooterContainer>
  );
}
