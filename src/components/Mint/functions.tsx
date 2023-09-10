const isBlank = (str: string) => !str || /^\s*$/.test(str);

const containsEth = (str: string) => {
  return str.includes(".eth");
};

const containsLens = (str: string) => {
  return str.includes(".lens");
};

const ownsEthOrLens = (resp: any) => {
  if (resp.total == 0) return false;
  let b = false;
  resp.result.forEach((e: any) => {
    if (e.platform == "Lens" || e.platform.includes("ETH")) {
      b = true;
    }
  });
  return b;
};

const validateUsername = async (value: string) => {
  let error = "";

  if (!value) {
    error = "The username cannot be blank.";
  } else if (["ETH", "LENS", "ADMIN"].includes(value)) {
    error = "Choose another username.";
  }

  return error;
};

const getNetwork = (network: string, enumNetwork: any) => {
  let res;
  switch (network) {
    case "Polygon":
      res = enumNetwork.MATIC_MUMBAI;
      break;
    case "Ethereum":
      res = enumNetwork.ETH_MAINNET;
      break;
    case "Optimism":
      res = enumNetwork.OPT_MAINNET;
      break;
    case "Arbitrum":
      res = enumNetwork.ARB_MAINNET;
      break;
  }
  return res;
};

export const functions = {
  isBlank,
  containsEth,
  containsLens,
  ownsEthOrLens,
  validateUsername,
  getNetwork,
};
