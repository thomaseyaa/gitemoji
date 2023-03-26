import data from "@/assets/json/emojis.json";

export async function getData() {
  return data;
}

export async function searchData(query) {
  console.log(data.filter((emoji) => emoji.description.includes(query)));
  return data.filter((emoji) => emoji.description.includes(query));
}
