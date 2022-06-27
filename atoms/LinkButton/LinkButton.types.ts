export type LinkButtonProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
  type?: LinkType;
};

export type LinkType = 'internal' | 'external';
