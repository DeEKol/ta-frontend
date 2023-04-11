import type { IHeaderModel } from "@/lib/models/IHeaderModel";
import { PagesNamespace } from "@/types/enum";

export const headersData: IHeaderModel[] = [
  { id: 1, title: "Главная", href: PagesNamespace.INDEX },
  { id: 2, title: "О сайте", href: PagesNamespace.ABOUT },
  { id: 3, title: "Поездки", href: PagesNamespace.TRIP },
  { id: 4, title: "Документы", href: PagesNamespace.DOCS },
  { id: 5, title: "Контрагенты", href: PagesNamespace.COUNTERPARTY },
  { id: 6, title: "Водители", href: PagesNamespace.DRIVER },
  { id: 7, title: "Авто", href: PagesNamespace.CAR },
];
