import Form1 from "./Forms/Form1";
import Form2 from "./Forms/Form2";
import FormNFT from "./Forms/FormNFT";
import Form3 from "./Forms/Form3";
import FormCompleted from "./Forms/FormCompleted";
import { useMintStore } from "@/stores";

const Step = () => {
  const { activeStepIndex, setShowMintModal } = useMintStore();
  let stepContent = null;
  switch (activeStepIndex) {
    case 0:
      setShowMintModal(false);
      break;
    case 1:
      stepContent = <Form1 />;
      break;
    case 2:
      stepContent = <Form2 />;
      break;
    case 3:
      stepContent = <Form3 />;
      break;
    case 4:
      stepContent = <FormCompleted />;
      break;
    case 5:
      stepContent = <FormNFT />;
      break;
    default:
      break;
  }

  return stepContent;
};

export default Step;
