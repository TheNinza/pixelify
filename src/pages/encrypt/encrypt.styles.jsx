import { motion } from "framer-motion";
import styled from "styled-components";
import { GlassMorphicRectangleCSS } from "../../lib/styled-components/globalStyles";

export const EncryptPageContainer = styled(motion.div)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
`;

export const UploadButtonContainer = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  align-items: center;
  flex-direction: column;
`;

export const UploadButton = styled.div`
  ${GlassMorphicRectangleCSS}

  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  cursor: pointer;

  & * {
    cursor: pointer;
  }

  /* selectors */
  &:hover {
    transform: scale(1.1);

    &::after {
      transform: scaleY(1) translateY(-0.5rem);
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

export const ImageInput = styled.input`
  display: none;
`;

export const StartEncryptionSection = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  transform-origin: top;
`;

export const ImageViewer = styled.img`
  height: 35vh;
  max-width: 90vw;
  object-fit: cover;
  width: auto;
  border-radius: 8px;
  box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);
`;

export const ImageName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  & > svg {
    transition: all 0.5s ease;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 8px 8px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1);
    }
  }
`;

export const PasswordInput = styled(motion.input)`
  ${GlassMorphicRectangleCSS}

  outline: none;
  border-radius: 8px;
  min-height: unset;
  min-width: unset;
  padding: 0.5rem;
  width: 15rem;
  height: 3rem;
  font-size: 1.2rem;
  vertical-align: middle;
  text-align: center;
  letter-spacing: 1px;
  transition: border 0.5s linear;

  :focus {
    border: 1px solid white;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: white;
    font-size: 1.2rem;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: white;
    font-size: 1.2rem;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: white;
    font-size: 1.2rem;
  }
`;

export const StartEncryptionButton = styled(motion.div)`
  ${GlassMorphicRectangleCSS}

  outline: none;
  border-radius: 8px;
  min-height: unset;
  min-width: unset;
  padding: 0.5rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;

  & svg {
    height: 2rem;
    width: 2rem;
    color: white;
  }
`;

export const CypherSelectionMenuContainer = styled(motion.div)`
  ${GlassMorphicRectangleCSS}
  cursor: pointer;
  display: flex;
  gap: 1rem;
  align-items: center;
  border-radius: 8px;
  min-height: unset;
  min-width: unset;
  padding: 0.5rem;
  font-size: 1.2rem;
  letter-spacing: 1px;
  & select {
    ${GlassMorphicRectangleCSS}
    cursor: pointer;
    border-radius: 8px;
    min-height: unset;
    min-width: unset;
    color: white;
    background: transparent;
    padding: 0.5rem;
    font-size: 1.2rem;
    letter-spacing: 1px;
    &:focus {
      outline: none;
    }
  }
`;
