/*
 * @Author: zi.yang
 * @Date: 2020-06-28 16:45:04
 * @LastEditTime: 2020-06-28 19:47:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \My-JavaScript-Study\React Study\day20\src\utils\getIPaddress\index.js
 */
// 下面的一堆 单独使用 获取本地的IP地址
export default function findIP(callback) {
  //compatibility for firefox and chrome
  var myPeerConnection =
    window.RTCPeerConnection ||
    window.mozRTCPeerConnection ||
    window.webkitRTCPeerConnection;

  var pc = new myPeerConnection({ iceServers: [] }),
    noop = function () {},
    localIPs = {},
    ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;

  function ipIterate(ip) {
    if (!localIPs[ip]) callback(ip);
    localIPs[ip] = true; 
  }
  pc.createDataChannel("");
  pc.createOffer().then(function (sdp) {
    sdp.sdp.split("\n").forEach(function (line) {
      if (line.indexOf("candidate") < 0) return "";
      line.match(ipRegex).forEach(ipIterate);
    });
    pc.setLocalDescription(sdp, noop, noop);
  });
  pc.onicecandidate = function (ice) {
    if (
      !ice ||
      !ice.candidate ||
      !ice.candidate.candidate ||
      !ice.candidate.candidate.match(ipRegex)
    )
      return "";
    ice.candidate.candidate.match(ipRegex).forEach(ipIterate);
  };
}
