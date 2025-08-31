import { UspPoint } from "@/components/usp";

import {
  BeakerIcon,
  HandThumbUpIcon,
  LightBulbIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

export const uspPoints: UspPoint[] = [
  {
    title: "Kvalita bez kompromisů",
    description:
      "Používáme jen ty nejlepší materiály a nejmodernější technologie pro kovovýrobu a zpracování plechů. Každý náš výrobek prochází přísnou kontrolou kvality, abychom zajistili jeho dlouhou životnost a spolehlivost.",
    icon: <SparklesIcon className="size-12 text-steel-500" />,
  },
  {
    title: "Zkušenost a odbornost",
    description:
      "Náš tým tvoří zkušení profesionálové s hlubokými znalostmi v oboru CNC výroby a klempířských prací. Jsme připraveni poradit vám s vaším projektem a najít to nejefektivnější řešení pro nerezové a ocelové díly.",
    icon: <BeakerIcon className="size-12 text-steel-500" />,
  },
  {
    title: "Inovace a flexibilita",
    description:
      "Neustále sledujeme nejnovější trendy a investujeme do moderních technologií. Jsme flexibilní a dokážeme se přizpůsobit specifickým požadavkům každého klienta, od prototypů po sériovou výrobu.",
    icon: <LightBulbIcon className="size-12 text-steel-500" />,
  },
  {
    title: "Zákaznický servis a spolehlivost",
    description:
      "Naši klienti jsou pro nás prioritou. Poskytujeme komplexní podporu od počáteční konzultace až po dokončení projektu a následný servis. Na naše slovo se můžete spolehnout.",
    icon: <HandThumbUpIcon className="size-12 text-steel-500" />,
  },
];
