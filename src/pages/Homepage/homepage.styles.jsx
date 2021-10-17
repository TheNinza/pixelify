import { motion } from "framer-motion";
import styled from "styled-components";

export const HomepageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
`;

export const HeaderTitle = styled(motion.div)`
  font-family: Dancing-Script;
  font-weight: 700;
  font-size: 72px;
  pointer-events: none;
`;

export const HeroImage = styled(motion.img)`
  height: 229px;
  width: 197px;
  position: fixed;
  top: 20vh;
  pointer-events: none;
`;
