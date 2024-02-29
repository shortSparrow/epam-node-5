function isUrlMathPattern(routePattern, incomingUrl) {
  // firstly, we escape of '/', because it's special character in RegExp
  const escapeRegExp = routePattern.replace(/\//g, "\\/");
  // then we replace ':id' placeholder to match any string which does not contain '/'
  const replacePattern = escapeRegExp.replace(/:\w+\b/g, "[^\\/]+");
  // Add start and end markers, and create RegExp
  const re = new RegExp(`^${replacePattern}$`);

  //   return re.test(incomingUrl);
  if (re.test(incomingUrl)) {
    return true;
  }

  return null;
}

function extractDynamicParams(routePattern, incomingUrl) {
  const params = {};

  // split both the incoming URL and the route pattern by '/'
  const routeParts = routePattern.split('/');
  const urlParts = incomingUrl.split('/');

  // iterate over the route pattern parts
  for (let i = 0; i < routeParts.length; i++) {
      // for each part check if it starts with ':'
      if (routeParts[i].startsWith(':')) {
          // if so, the equivalent part in the URL is the value of this parameter
          const paramName = routeParts[i].slice(1); // remove the starting ':'
          params[paramName] =  urlParts[i];
      }
  }

  return params;
}

module.exports = {
  isUrlMathPattern,
  extractDynamicParams
}