import styled from 'styled-components';
import { motion } from 'framer-motion';
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
      <motion.div
        initial='hidden'
        animate='visible'
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <Link href='/' passHref>
          <StyledLink>NEXT IMAGE CAROUSEL</StyledLink>
        </Link>
      </motion.div>
      <div>
        <Link href='/' passHref>
          <StyledLink>NEXT IMAGE CAROUSEL</StyledLink>
        </Link>
      </div>
    </Nav>
  );
};

export default Navbar;


