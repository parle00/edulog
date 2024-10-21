import styled from "styled-components";

interface EdulogButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button`
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    opacity: 0.8; /* Hover durumu için küçük bir efekt */
  }
`;

const EdulogButton = ({ ...props }: EdulogButtonProps) => {
  return <StyledButton {...props} />;
};

export default EdulogButton;
