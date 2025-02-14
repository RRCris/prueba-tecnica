export const base_API = "https://api.test.interactiva.net.co";

export const routes_API = {
  banner: base_API + "/api/get-banners/",
  categories: base_API + "/api/get-categories/",
  feedInstagram: base_API + "/api/get-feed_instagram/",
  groupExperience: base_API + "/api/get-travels/",
};

export type keys_routes = keyof typeof routes_API;
