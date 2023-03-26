type justify =
  | "center"
  | "initial"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "flex-start"
  | "flex-end";

type SectionBoxProps = {
  children: React.ReactNode;
  id: string;
  justify?: justify;
};

type TechnologyCardProps = {
  technology: string;
};

type TechnologyData = {
  bg: string;
  color: string;
  icon: import("react-icons/lib").IconType;
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
  icon: import("react-icons/lib").IconType;
  text: string;
};
type ProjectCardProps = {
  imgUrl: string;
  title: string;
  description: string;
  technologies: string[];
  projectUrl: string;
  projectRepo: string;
};

type NavBarProps = {
  shouldBeHamburger: boolean;
};
