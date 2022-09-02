import { createClient, createMicrophoneAndCameraTracks} from "agora-rtc-react";

const appId="4e86d9f494774eacbd9163ca9d6740b8";
const token="007eJxTYJA/yOnrLP/lluqWg/tuf5+28oVhZfSDWFO7+u2ae0XExP8rMJikWpilWKaZWJqYm5ukJiYnpVgamhknJ1qmmJmbGCRZROwXSL4hIJTMcl6TiZEBAsF8htzEzDwGBgBgMR/T"


export const config={mode:"rtc",codec:"vp8",appId:appId,token:token};
export const useClient=createClient(config);
export const useMicrophoneAndCameraTracks=createMicrophoneAndCameraTracks();
export const channelName='main';
