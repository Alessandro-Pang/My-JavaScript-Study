/*
 * @Author: zi.yang
 * @Date: 2020-07-02 21:15:44
 * @LastEditTime: 2020-07-03 10:30:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\utils\fetchX\index.js
 */

export default class FetchX {
  constructor(baseURL) {
    this.baseURL = baseURL || "";
  }
  serialize = (url, data) => {
    let dataStr = "";
    Object.keys(data).forEach((key) => {
      dataStr += `${key}=${data[key]}&`;
    });

    if (dataStr.length) {
      dataStr = dataStr.substr(0, dataStr.length - 1);
      url = `${url}?${dataStr}`;
    }
    return url;
  };

  _fetch = async (url, data, type, options) => {
    const headerObj = options.headers
      ? new Headers(options.headers)
      : new Headers({
          Accept: "application/json",
          "Content-Type": "text/plainapplication/json;charset=utf-8",
        });

    const requestConfig = {
      credentials: options.credentials || "same-origin",
      method: type,
      headers: headerObj,
      mode: options.mode || "cors",
      cache: options.cache || "force-cache",
      redirect: options.redirect || "follow", // manual, *follow, error
      referrer: options.referrer || "no-referrer", // *client, no-referrer
    };
    if (type === "GET") {
      url = this.serialize(url, data);
    } else if (type === "POST") {
      Object.defineProperty(requestConfig, "body", {
        value: JSON.stringify(data),
      });
    }

    try {
      const response = await fetch(new Request(url, requestConfig));
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error(error);
    }
  };
  _xhr = (url, data, type) => {
    return new Promise((resolve, reject) => {
      let requestObj;
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest();
      } else {
        requestObj = new ActiveXObject("Microsoft.XMLHTTP");
      }

      let sendData = "";
      if (type === "GET") {
        url = this.serialize(url, data);
      } else if (type == "POST") {
        sendData = JSON.stringify(data);
      }

      requestObj.open(type, url, true);
      requestObj.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );
      requestObj.send(sendData);

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState == 4 && requestObj.status == 200) {
          let obj = requestObj.response;
          if (typeof obj !== "object") {
            obj = JSON.parse(obj);
          }
          resolve(obj);
        } else {
          reject(requestObj);
        }
      };
    });
  };
  /**
   * JSONP handler
   *
   * Options:
   *  - param {String} qs parameter (`callback`)
   *  - prefix {String} qs parameter (`__jp`)
   *  - name {String} qs parameter (`prefix` + incr)
   *  - timeout {Number} how long after a timeout error is emitted (`60000`)
   *
   * @param {String} url
   * @param {Object|Function} optional options / callback
   * @param {Function} optional callback
   */
  jsonp = (url, opts, fn) => {
    url = `${this.baseURL}${url}`;
    const noop = () => {};

    if (typeof opts === "function") {
      fn = opts;
      opts = {};
    }
    if (!opts) opts = {};

    let script,
      timer,
      count = 0;
    const prefix = opts.prefix || "__jp",
      id = opts.name || prefix + count++,
      param = opts.param || "callback",
      timeout = null != opts.timeout ? opts.timeout : 60000,
      enc = encodeURIComponent,
      target = document.getElementsByTagName("script")[0] || document.head;

    if (timeout) {
      timer = setTimeout(function () {
        cleanup();
        if (fn) fn(new Error("Timeout"));
      }, timeout);
    }

    const cleanup = () => {
      if (script.parentNode) script.parentNode.removeChild(script);
      window[id] = noop;
      if (timer) clearTimeout(timer);
    };

    const cancel = () => {
      if (window[id]) {
        cleanup();
      }
    };

    window[id] = (data) => {
      cleanup();
      if (fn) fn(null, data);
    };

    // add qs component
    url += (~url.indexOf("?") ? "&" : "?") + param + "=" + enc(id);
    url = url.replace("?&", "?");

    // create script
    script = document.createElement("script");
    script.src = url;
    target.parentNode.insertBefore(script, target);

    return cancel;
  };

  get = (url = "", data = {}, options={}) => {
    const apiAddress = `${this.baseURL}${url}`;
    if (window.fetch) {
      return this._fetch(apiAddress, data, "GET", options);
    } else {
      return _xhr(apiAddress, data, "GET");
    }
  };

  post = (url = "", data = {}, options={}) => {
    const apiAddress = `${this.baseURL}${url}`;
    if (window.fetch) {
      return this._fetch(apiAddress, data, "POST",options);
    } else {
      return this._xhr(apiAddress, data, "POST");
    }
  };
}
