export default class Fetcher {
  constructor(url, callback) {
    this.url = url;
    this.callback = callback;

    if(this.url) { this.getData(); }
  }

  getData() {
    const url = '/wp-json/wp/v2/' + this.url;
    const req = new XMLHttpRequest();

    req.open('get', url, true);
    req.onreadystatechange = () => {
      if(req.readyState === 4) {
        if(req.status === 200) {
          this.callback(req.responseText);
        } else {
          throw new Error();
        }
      }
    }
    req.send();
  }
}
