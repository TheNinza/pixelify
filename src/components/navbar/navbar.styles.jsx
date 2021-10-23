import { motion } from "framer-motion";
import styled from "styled-components";

export const HeaderTitle = styled(motion.div)`
  font-family: Dancing-Script;
  font-weight: 700;
  font-size: 72px;
  pointer-events: none;
  position: absolute;
  left: 50%;
`;

export const HeroImage = styled(motion.img)`
  height: 229px;
  width: 197px;
  position: absolute;
  top: 20vh;
  pointer-events: none;
  left: 50%;
`;
