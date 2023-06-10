import { parse } from "cookie";

addEventListener("fetch", (event) => {
    event.respondWith(doRedirects(event.request));
});

const newLocationProtocol = "https://"
const newLocationHost = "developers.cloudflare.com";
const newLocationPath = "/workers/learning/"

async function doRedirects(request) {
    let reqUA = request.headers.get("user-agent");
    if (reqUA.includes("curl")) {
        const COOKIE_NAME = "cf-noredir";
        const cookie = parse(request.headers.get("Cookie") || "");
        if (cookie[COOKIE_NAME] != null) {
            if (cookie[COOKIE_NAME] == "true"){
                return Response.redirect(newLocationProtocol + newLocationHost, 302);
            }
        }
        let newLocation = newLocationProtocol + newLocationHost + newLocationPath;
        return Response.redirect(newLocation, 302);
    }
    return Response.redirect(newLocationProtocol + newLocationHost, 302);
}