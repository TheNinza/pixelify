import { HeaderTitle, HeroImage } from "./navbar.styles";
import lockIcon from "../../assets/lockIcon.svg";
import { useRef } from "react";

const Navbar = ({ setShowBody }) => {
  // refs
  const heroImageRef = useRef();

  // animation variants
  const titleVariants = {
    visible: {
      y: 10,
      x: "-50%",

      transition: {
        duration: 2,
        delay: 1,
        type: "spring",
        dapming: 2,
        bounce: 0.5,
      },
    },
    hidden: {
      y: "60vh",
      x: "-50%",
    },
  };
  const heroImageVariants = {
    visible: {
      y: "-350%",
      x: "-50%",
      scale: "1500%",
      opacity: 0,
      transition: {
        duration: 1,
        delay: 1,
      },
    },
    hidden: {
      y: "-10",
      x: "-50%",
      scale: "100%",
      opacity: 1,
      display: "all",
    },
  };

  return (
    <>
      <HeroImage
        ref={heroImageRef}
        variants={heroImageVariants}
        initial="hidden"
        animate="visible"
        src={lockIcon}
        onAnimationComplete={() => {
          setShowBody(true);
          // removing the component from dom.. once the animation is finished
          heroImageRef.current.remove();
        }}
      />
      <HeaderTitle variants={titleVariants} initial="hidden" animate="visible">
        Pixelify
      </HeaderTitle>
    </>
  );
};

export default Navbar;
