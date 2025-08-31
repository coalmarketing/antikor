export type NavigationItem = {
  name: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { name: "Domů", href: "/" },
  { name: "O nás", href: "/o-nas" },
  { name: "Kariéra", href: "/kariera" },
  { name: "Služby a technologie", href: "/sluzby-a-technologie" },
  { name: "Kontakt", href: "#kontakt" },
];
