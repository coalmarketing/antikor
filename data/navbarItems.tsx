export type NavigationItem = {
  name: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { name: "Domů", href: "/" },
  { name: "O nás", href: "/o-nas" },
  { name: "Služby a technologie", href: "/o-nas/#sluzby-a-technologie" },
  { name: "Kariéra", href: "/kariera" },
  { name: "Blog", href: "/blog" },
  { name: "Kontakt", href: "#kontakt" },
];
