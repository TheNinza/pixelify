import { LinkedButton, MenuSectionContainer } from "./MenuSection.styles";
import { ReactComponent as EncryptionIcon } from "../../assets/encryptIcon.svg";
import { ReactComponent as DecryptionIcon } from "../../assets/decryptIcon.svg";

const MenuSection = () => {
  const MenuSectionContainerVariants = {
    visible: {
      opacity: 1,
      translateY: "-50%",
      translateX: "-50%",
      transition: {
        duration: 1.5,
        delay: 1.5,
        type: "spring",
        stiffness: 50,
        damping: 5,
        bounce: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      translateY: "-200%",
      translateX: "-50%",
    },
  };

  return (
    <MenuSectionContainer
      variants={MenuSectionContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <LinkedButton content="Encrypt">
        <EncryptionIcon />
      </LinkedButton>
      <LinkedButton content="Decrypt">
        <DecryptionIcon />
      </LinkedButton>
    </MenuSectionContainer>
  );
};

export default MenuSection;
