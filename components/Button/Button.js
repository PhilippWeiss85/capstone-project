import styled from "styled-components";

// export default function Button() {
//   return <StyledButton>Add a new card</StyledButton>;
// }

export default function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  padding: 0.2em 0.5em;
  filter: drop-shadow(5px 4px 4px #000000);
  margin: 0 1em;
`;
