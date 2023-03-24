import { useMediaQuery } from "@chakra-ui/react";

export function useCustomMediaQuery() {
  const [isSmallerThan768px] = useMediaQuery("(max-width:768px)");
  return isSmallerThan768px;
}
