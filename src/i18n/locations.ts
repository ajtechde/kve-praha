export interface ChurchLocation {
  id: string;
  city: Record<string, string>;
  address: string;
  contact: string;
  phone: string;
  services: { day: string; time: string }[];
  mapQuery: string;
}

export const locations: ChurchLocation[] = [
  {
    id: "praha",
    city: { ru: "Прага", cz: "Praha", de: "Prag", en: "Prague" },
    address: "Praha 10, ul. 28. pluku 484/15",
    contact: "Vladimir Jakovec",
    phone: "+420 608 609 013",
    services: [
      { day: "sunday", time: "13:00" },
      { day: "tuesday", time: "19:30" },
      { day: "friday", time: "19:30" },
    ],
    mapQuery: "28.+pluku+484/15,+Praha+10,+Czech+Republic",
  },
  {
    id: "pardubice",
    city: { ru: "Пардубице", cz: "Pardubice", de: "Pardubice", en: "Pardubice" },
    address: "Pardubice, ul. Lonkova 512",
    contact: "Шеремет Владимир",
    phone: "+420 792 453 325",
    services: [{ day: "sunday", time: "14:00" }],
    mapQuery: "Lonkova+512,+Pardubice,+Czech+Republic",
  },
  {
    id: "ceske-budejovice",
    city: { ru: "Ческе-Будеёвице", cz: "České Budějovice", de: "Budweis", en: "České Budějovice" },
    address: "České Budějovice, Tř. 28. října 28",
    contact: "Сергей Ковалик",
    phone: "+420 774 660 970",
    services: [{ day: "sunday", time: "13:00" }],
    mapQuery: "Tř.+28.+října+28,+České+Budějovice,+Czech+Republic",
  },
];
