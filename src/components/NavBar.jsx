import styled from "styled-components";

const NavBar = () => {
  return (
    <Navbar>
      <Img
        src="https://res.cloudinary.com/dnrcmjyu1/image/upload/v1698147373/Gomez%20Corp/Pemex-Logo-500x283_cnlhco.png"
        alt="PEMEX Logo"
      />
      <Img
        src="https://res.cloudinary.com/dnrcmjyu1/image/upload/v1689748432/Gomez%20Corp/GomezCorpLogo_iodwuc.png"
        alt="Gomez Corp Logo"
      />
    </Navbar>
  );
};

export default NavBar;

const Navbar = styled.div`
  background: rgb(209, 211, 209);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 30px;

  @media (max-width: 500px) {
    padding: 10px 15px;
  }
`;

const Img = styled.img`
  height: 50px;

  @media (max-width: 500px) {
    height: 30px;
  }
`;
