import {
  DecryptPageContainer,
  ImageInput,
  ImageName,
  ImageViewer,
  PasswordInput,
  StartDecryptionButton,
  StartDecryptionSection,
  UploadButton,
  UploadButtonContainer,
} from "./decrypt.styles";
import { ReactComponent as UploadIcon } from "../../assets/uploadIcon.svg";
import { ReactComponent as RemoveIcon } from "../../assets/removeIcon.svg";
import { ReactComponent as LockIcon } from "../../assets/lockIcon.svg";
import { ReactComponent as DownloadIcon } from "../../assets/downloadIcon.svg";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { axiosInstance } from "../../lib/axios/axiosInstance";
import toast from "react-hot-toast";

const DecryptPage = () => {
  const [imageBuffer, setImageBuffer] = useState(null);
  const [imageName, setImageName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [decryptedImageData, setDecryptedImageData] = useState(null);
  const [decryptionStarted, setDecryptionStarted] = useState(false);

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

  const StartDecryptionDropdownVariant = {
    visible: {
      opacity: 1,
      y: "0",
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
      y: "-200%",
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
        delay: 1,
      },
    },
    hidden: {
      y: 200,
      opacity: 0,
    },
  };

  const StartDecryptionButtonVariant = {
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

  const handleStartDecryption = async () => {
    if (!(imageBuffer?.length && imageName?.length && password?.length)) {
      alert("Please select all fields!");
      return;
    }

    setDecryptionStarted(true);
    setError(null);
    setDecryptedImageData("");

    try {
      setLoading(true);
      const { data } = await axiosInstance.post(
        "/decrypt",

        {
          image: imageBuffer,
          password: password,
        }
      );
      setDecryptedImageData({ image: data });
      setError(null);
      setLoading(false);
      toast.success("Successfully Encrypted");
    } catch (error) {
      handleAnoterDecryption();
      toast.error("Oh No!! Some error occured. Please Retry!");
    }
  };

  const handleAnoterDecryption = () => {
    setImageBuffer(null);
    setImageName("");
    setPassword("");
    setLoading(false);
    setError(null);
    setDecryptedImageData(null);
    setDecryptionStarted(false);
  };

  useEffect(() => {
    axiosInstance.post("/ping", {}).then(({ data }) => {
      console.log(data);
    });
  }, []);

  return (
    <DecryptPageContainer
      exit={{
        opacity: 0,
        y: -200,
      }}
    >
      <AnimatePresence exitBeforeEnter={true}>
        {imageBuffer ? (
          // *** Must pass a key for animate presence
          !decryptionStarted ? (
            <StartDecryptionSection
              key={0}
              variants={StartDecryptionDropdownVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Image Details */}
              <ImageViewer src={imageBuffer} />
              <ImageName>
                <span>{imageName}</span>
                <RemoveIcon onClick={handleRemoveImage} />
              </ImageName>

              {/* password */}
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

              {/* submit button */}
              <StartDecryptionButton
                variants={StartDecryptionButtonVariant}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 1, ease: "linear" },
                }}
                whileTap={{ scale: 1 }}
                onClick={handleStartDecryption}
              >
                Start Decryption
                <span>
                  <LockIcon />
                </span>
              </StartDecryptionButton>
            </StartDecryptionSection>
          ) : (
            <StartDecryptionSection
              key={2}
              variants={StartDecryptionDropdownVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {/* Image Details */}

              {loading ? (
                <h2>Loading...</h2>
              ) : error?.length ? (
                <h2>error</h2>
              ) : (
                decryptedImageData?.image && (
                  <>
                    <ImageViewer src={decryptedImageData?.image} />
                    <ImageName>
                      <span>Download</span>
                      <a
                        href={decryptedImageData.image}
                        download={`encryptedImage.${
                          decryptedImageData.image.split("/")[1].split(";")[0]
                        }`}
                      >
                        <DownloadIcon />
                      </a>
                    </ImageName>

                    <StartDecryptionButton onClick={handleAnoterDecryption}>
                      Decrypt Another
                    </StartDecryptionButton>
                  </>
                )
              )}
            </StartDecryptionSection>
          )
        ) : (
          <UploadButtonContainer
            key={1}
            variants={UploadButtonDropdownVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <h2>Upload an encrypted image</h2>
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
    </DecryptPageContainer>
  );
};

export default DecryptPage;
