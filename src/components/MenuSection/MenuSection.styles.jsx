import { motion } from "framer-motion";
import styled from "styled-components";
import { GlassMorphicRectangleCSS } from "../../lib/styled-components/globalStyles";

export const MenuSectionContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const LinkedButton = styled.div`
  ${GlassMorphicRectangleCSS}

  transition: all 0.5s ease;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  /* selectors */
  &:hover {
    transform: scale(1.1);

    &::after {
      transform: scaleY(1) translateY(1rem);
    }
  }
  &:active {
    transform: scale(1);
  }

  &::after {
    content: ${(props) => `'${props.content}'`};
    transition: all 0.5s ease;
    transform: scaleY(0) translateY(8rem);
    transform-origin: top;
    font-size: 1.2rem;
  }
`;
