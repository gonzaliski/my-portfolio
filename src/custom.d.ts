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
