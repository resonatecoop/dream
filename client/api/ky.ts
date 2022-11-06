import Constants from "expo-constants";
import ky from "ky";

const baseUrl = Constants?.manifest?.extra?.apiUrl as string;

console.log(`${baseUrl}/api/v3`);

const api = ky.create({ prefixUrl: `${baseUrl}/api/v3` });

export default api;
