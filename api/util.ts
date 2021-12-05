import got from "got";

const { CLIENT_ID, CLIENT_SECRET, VERCEL_ENV } = process.env;
export const IS_PROD = VERCEL_ENV === "production";

export const fetchAuthToken = code => {
  const baseUrl = IS_PROD ? "https://overlayed.dev" : "http://localhost:3000";

  return got(`https://discord.com/api/oauth2/token`, {
    method: "POST",
    form: {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: "authorization_code",
      redirect_uri: `${baseUrl}/auth`,
      code: code,
    },
    throwHttpErrors: false,
    headers: {
      "User-Agent": "overlayed-api",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const fetchReleases = async () => {
  const response: any = await got(
    "https://api.github.com/repos/Hacksore/overlayed/releases/latest",
    {
      throwHttpErrors: false,
      headers: {
        "User-Agent": "overlayed-api",
        "Accept": "application/json"
      },
    }
  ).json();

  // transform
  const downloads =
    response.assets.map(item => {
      if (item.browser_download_url.includes("mac")) {
        return { platform: "Mac", url: item.browser_download_url };
      }
      if (item.browser_download_url.includes("win")) {
        return { platform: "Windows", url: item.browser_download_url };
      }
      if (item.browser_download_url.includes("linux")) {
        return { platform: "Linux", url: item.browser_download_url };
      }

      return {};
    }) || [];

  return { 
    downloads,
    name: response.name,
    url: response.html_url,
    latestVersion: response.name
  }
};
