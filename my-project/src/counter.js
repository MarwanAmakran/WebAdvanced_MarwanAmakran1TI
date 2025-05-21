"use strict";

export async function fetchAnime() {
  const res = await fetch("https://api.jikan.moe/v4/top/anime?limit=20");
  if (!res.ok) throw new Error("Kan data niet ophalen van Jikan API");
  const data = await res.json();
  return data.data;
}
