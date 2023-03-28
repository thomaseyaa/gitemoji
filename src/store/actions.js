import data from "@/assets/json/emojis.json";
import store from "../store";

export const getData = async () => {
  paginate(data).then((data) => {
    store.commit("emojisData", {
      ...data,
    });
  });
};

// eslint-disable-next-line no-empty-pattern
export const searchData = async ({}, value) => {
  const search = value.toLowerCase();
  const items = data.filter(
    (emoji) =>
      emoji.description.toLowerCase().includes(search) ||
      emoji.name.toLowerCase().includes(search) ||
      emoji.emoji.toLowerCase().includes(search)
  );
  paginate(items).then((data) => {
    store.commit("emojisData", {
      ...data,
    });
  });
};

export const paginate = async (items) => {
  const pageSize = 12;
  const pageCount = Math.ceil(items.length / pageSize);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    const start = i * pageSize;
    const end = start + pageSize;
    pages.push(items.slice(start, end));
  }
  return pages;
};
