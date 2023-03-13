import { IconType } from "react-icons/lib";

type SectionBoxProps = {
  children: React.ReactNode;
  id: string;
};

type TechnologyCardProps = {
  technology: string;
};

type TechnologyData = {
  bg: string;
  color: string;
  icon: IconType;
};

type ChildrenProps = {
  children: string | JSX.Element | JSX.Element[];
};

type AboutItemProps = {
  imgUrl: string;
  title: string;
  description: string;
};

type EducationItemProps = {
  imgUrl: string;
  title: string;
  timeProgress: string;
};

type MyListItemProps = {
  icon: IconType;
  text: string;
};
