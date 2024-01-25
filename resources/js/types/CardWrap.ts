

export interface ListItem {
  text: string;
  link: string;
}

export interface ImageProps {
  url: string;
  alt: string;
}

export interface CardWrapProps {
  title: string;
  content: string;
  image: string | React.ReactNode;
  list: { text: string; link: string }[];
  isPotrait?: boolean;
  mobileImage?: string;
}
