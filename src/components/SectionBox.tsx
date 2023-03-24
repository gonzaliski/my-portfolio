import { useCustomMediaQuery } from "../hooks";
import { SectionBoxDesktop, SectionBoxMobile } from "../ui/boxes";

const SectionBox = ({ children, id }: SectionBoxProps) => {
  const isSmallerThan768px = useCustomMediaQuery();
  return isSmallerThan768px ? (
    <SectionBoxMobile children={children} id={id} />
  ) : (
    <SectionBoxDesktop children={children} id={id} />
  );
};
export default SectionBox;
