import {
  ChampionData,
  ChampionsData,
  ItemData,
  LeagueOfLegendsCDN,
} from "../interface";
import { VITE_LOL_URL, apiLol } from "./axios";

export async function getVersion(): Promise<string[]> {
  const { data } = await apiLol({
    method: "GET",
    url: "/api/versions.json",
  });
  return data;
}

export async function getRegion(region: string): Promise<LeagueOfLegendsCDN> {
  const { data } = await apiLol({
    method: "GET",
    url: `/realms/${region}.json`,
  });
  return data;
}

export async function getLanguageCode(): Promise<string[]> {
  const { data } = await apiLol({
    method: "GET",
    url: "/cdn/languages.json",
  });
  return data;
}

export async function getAllChampionData(param: {
  lang: string;
  version: string;
}): Promise<ChampionsData> {
  const { data } = await apiLol({
    method: "GET",
    url: `/cdn/${param.version}/data/${param.lang}/champion.json`,
  });
  return data;
}

export async function getChampionData(param: {
  lang: string;
  version: string;
  id: string;
}): Promise<ChampionData> {
  const { data } = await apiLol({
    method: "GET",
    url: `/cdn/${param.version}/data/${param.lang}/champion/${param.id}.json`,
  });
  return data;
}

export async function getAllItemsData(param: {
  lang: string;
  version: string;
}): Promise<ItemData> {
  const { data } = await apiLol({
    method: "GET",
    url: `/cdn/${param.version}/data/${param.lang}/item.json`,
  });
  return data;
}

export async function getChampionLoading(id: string) {
  const { data } = await apiLol({
    method: "GET",
    url: `/cdn/img/champion/loading/${id}_0.jpg`,
    responseType: "blob",
  });

  return linkBlob(data);
}

export async function getChampionSpellImg(id: string, version: string) {
  const { data } = await apiLol({
    method: "GET",
    url: `/cdn/${version}/img/spell/${id}`,
    responseType: "blob",
  });

  return linkBlob(data);
}

export async function getChampionPassiveImg(id: string, version: string) {
  const { data } = await apiLol({
    method: "GET",
    url: `/cdn/${version}/img/passive/${id}`,
    responseType: "blob",
  });

  return linkBlob(data);
}

export async function getImgItem(id: string, version: string) {
  const { data } = await apiLol({
    method: "GET",
    url: `/cdn/${version}/img/item/${id}`,
    responseType: "blob",
  });

  return linkBlob(data);
}

export async function getImgChamp(id: string, version: string) {
  const { data } = await apiLol({
    method: "GET",
    url: `/cdn/${version}/img/champion/${id}.png`,
    responseType: "blob",
  });

  return linkBlob(data);
}

function linkBlob(data: Blob | MediaSource) {
  const blobUrl = URL.createObjectURL(data);
  const img = document.createElement("img");
  img.src = blobUrl;
  document.body.appendChild(img);
  return img;
}

// export async function getChampionSplash( id: string) {
//   //http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg
// }
