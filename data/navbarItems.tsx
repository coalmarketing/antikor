export type NavigationItem = {
  name: string;
  href: string;
};

export const navigationItems: NavigationItem[] = [
  { name: "Domů", href: "/" },
  { name: "O nás", href: "/o-nas" },
  { name: "Služby a technologie", href: "/sluzby-a-technologie" },
  { name: "Kariéra", href: "/kariera" },
  { name: "Galerie", href: "/sluzby-a-technologie#galerie" },
  // { name: "Blog", href: "/blog" },
  { name: "Kontakt", href: "#kontakt" },
];
