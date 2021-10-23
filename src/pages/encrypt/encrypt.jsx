import {
  EncryptPageContainer,
  ImageInput,
  ImageName,
  ImageViewer,
  PasswordInput,
  StartEncryptionButton,
  StartEncryptionSection,
  UploadButton,
  UploadButtonContainer,
} from "./encrypt.styles";
import { ReactComponent as UploadIcon } from "../../assets/uploadIcon.svg";
import { ReactComponent as RemoveIcon } from "../../assets/removeIcon.svg";
import { ReactComponent as LockIcon } from "../../assets/lockIcon.svg";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const EncryptPage = () => {
  const [imageBuffer, setImageBuffer] = useState(null);
  const [imageName, setImageName] = useState("");
  const [password, setPassword] = useState("");

  // animation variants
  const UploadButtonDropdownVariant = {
    visible: {
      opacity: 1,
      translateY: "-50%",
      transition: {
        duration: 1.5,
        type: "spring",
        stiffness: 50,
        damping: 5,
        bounce: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      translateY: "-200%",
    },
  };

  const StartEncryptionDropdownVariant = {
    visible: {
      opacity: 1,
      translateY: "0",
      transition: {
        duration: 1.5,
        type: "spring",
        stiffness: 50,
        damping: 5,
        bounce: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      translateY: "-200%",
    },
  };

  const PasswordInputVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 50,
        damping: 5,
        bounce: 0.5,
        delay: 1.5,
      },
    },
    hidden: {
      y: 200,
      opacity: 0,
    },
  };

  const StartEncryptionButtonVariant = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 50,
        damping: 5,
        bounce: 0.5,
        delay: 2.5,
      },
    },
    hidden: {
      y: 200,
      opacity: 0,
    },
  };

  // handler functions

  const handleInput = (e) => {
    if (e.target.files.length) {
      const image = e.target.files[0];
      setImageName(image.name);
      const fileReader = new FileReader();

      fileReader.readAsDataURL(image);

      fileReader.onloadend = () => {
        const imageBufferResult = fileReader.result;
        setImageBuffer(imageBufferResult);
      };
    }
  };

  const handleRemoveImage = () => {
    setImageBuffer(null);
    setImageName("");
  };

  return (
    <EncryptPageContainer>
      <AnimatePresence exitBeforeEnter={true}>
        {imageBuffer ? (
          // *** Must pass a key for animate presence
          <StartEncryptionSection
            key={0}
            variants={StartEncryptionDropdownVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ImageViewer src={imageBuffer} />
            <ImageName>
              <span>{imageName}</span>
              <RemoveIcon onClick={handleRemoveImage} />
            </ImageName>
            <PasswordInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              required
              variants={PasswordInputVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            />
            <StartEncryptionButton
              variants={StartEncryptionButtonVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
              whileHover={{
                scale: 1.05,
                transition: { duration: 1, ease: "linear" },
              }}
              whileTap={{ scale: 1 }}
            >
              Start Encryption
              <span>
                <LockIcon />
              </span>
            </StartEncryptionButton>
          </StartEncryptionSection>
        ) : (
          <UploadButtonContainer
            key={1}
            variants={UploadButtonDropdownVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <UploadButton content="Upload">
              <label htmlFor="image-input-encrypt">
                <UploadIcon />
              </label>
              <ImageInput
                type="file"
                accept="image/*"
                onChange={handleInput}
                id="image-input-encrypt"
              />
            </UploadButton>
          </UploadButtonContainer>
        )}
      </AnimatePresence>
    </EncryptPageContainer>
  );
};

export default EncryptPage;
