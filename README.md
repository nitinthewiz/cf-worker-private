# A simple Cloudflare Worker

This Cloudflare Worker simply redirects incoming requests based on a few criteria.

The logic of the Worker is as follows - 

-	If a User tries to access the subdomain in the browser, redirect them to https://developers.cloudflare.com/ 
-	If a User tries to access the subdomain using cURL, redirect them to https://developers.cloudflare.com/workers/learning/
-	If a User tries to access the subdomain using cURL, but includes a cookie and value of –
		cf-noredir : true
	Then do not redirect them to /workers/learning. Rather, continue on to developers.cloudflare.com

## Please note that this repo will disappear after a while. Either it will be taken down, or set to private.
