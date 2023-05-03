import type { TinaField } from "tinacms";
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "datetime",
      name: "lastmod",
      label: "lastmod",
    },
    {
      type: "string",
      name: "tags",
      label: "tags",
      list: true,
    },
    {
      type: "string",
      name: "categories",
      label: "categories",
      list: true,
    },
    {
      type: "string",
      name: "imgs",
      label: "imgs",
      list: true,
    },
    {
      type: "string",
      name: "cover",
      label: "cover",
    },
    {
      type: "boolean",
      name: "readingTime",
      label: "readingTime",
    },
    {
      type: "boolean",
      name: "toc",
      label: "toc",
    },
    {
      type: "boolean",
      name: "comments",
      label: "comments",
    },
    {
      type: "boolean",
      name: "justify",
      label: "justify",
    },
    {
      type: "boolean",
      name: "single",
      label: "single",
    },
    {
      type: "string",
      name: "summary",
      label: "summary",
    },
  ] as TinaField[];
}
