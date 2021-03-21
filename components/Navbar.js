import styled from 'styled-components';
import Link from 'next/link';

const Nav = styled.nav`
  height: 80px;
  background: #349eeb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #c02537;
  font-family: Times, Times New Roman, serif;
`;

const StyledLink = styled.a`
  padding: 0rem 2rem;
  color: #fff;
  text-decoration: none; /* no underline */
`;

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Link href='/' passHref>
          <StyledLink>NEXT IMAGE CAROUSEL</StyledLink>
        </Link>
      </div>
      <div>
        <Link href='/' passHref>
          <StyledLink>Home</StyledLink>
        </Link>
        
      </div>
    </Nav>
  );
};

export default Navbar;
