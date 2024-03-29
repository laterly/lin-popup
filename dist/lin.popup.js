/*!
 * js-lin v1
 * (c) 2019-08-08 14:38 laterly
 */
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function getRandom(number) {
  return Math.ceil(Math.random() * Number(number));
}

function isJSONStr(str) {
  if (typeof str == 'string') {
    try {
      var obj = JSON.parse(str);

      if (_typeof(obj) == 'object') {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  } else {
    return false;
  }
}

function isEmptyObj(o) {
  //空对象判断
  if (_typeof(o) == 'object' && o !== null) {
    for (var i in o) {
      return false;
    }

    return true;
  }

  return false;
}

function isString(str) {
  return Object.prototype.toString.call(str) == "[object String]";
}

function createMask() {
  console.log('zzz');
  var maskStyle = 'width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index:100; background:rgba(0,0,0,0);';
  var div = document.createElement('div');
  div.setAttribute('id', 'mask');
  div.setAttribute('style', maskStyle);
  document.querySelector('body').appendChild(div);
}

function creatToastClass(text) {
  createMask();
  var id = getRandom(100);
  var spanStyle = "\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%,-50%);\n    display:inline-block;\n    padding:5px 20px; \n    background:rgba(0,0,0,0.5); \n    border-radius:20px;\n    font-size:14px;\n    color:#fff;\n    z-index:101;\n    ";
  var html = "<span>".concat(text, "</span>");
  var div = document.createElement('div');
  div.innerHTML = html;
  div.setAttribute('id', id);
  div.setAttribute('style', spanStyle);
  document.querySelector('body').appendChild(div);
  return id;
}

function creatIconClass(text, img) {
  createMask();
  var id = getRandom(100);
  var IconStyle = "\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%,-50%);\n    display:inline-block;\n    padding:20px 30px;\n    background:rgba(0,0,0,0.5);\n    border-radius:4px;\n    font-size:14px;\n    display:flex; \n    flex-flow: column wrap;\n    align-items: center;\n    display:flex; \n    flex-flow: column wrap;\n    align-items: center; \n    justify-content: center;\n    z-index:101;\n    ";
  var spanStyle = "\n    font-size:14px;\n    text-align: center;\n    margin-top:5px;\n    color:#fff;\n    ";
  var html = "\n    <img style=\"width:38px\" src=\"".concat(img, "\">\n    <span style=\"").concat(spanStyle, "\">").concat(text, "</span>");
  var div = document.createElement('div');
  div.innerHTML = html;
  div.setAttribute('id', id);
  div.setAttribute('style', IconStyle);
  document.querySelector('body').appendChild(div);
  return id;
}

function beforeToast(opt) {
  var obj = null;

  if (isEmptyObj(opt)) {
    obj = {
      text: '操作成功',
      duration: 2000
    };
  } else {
    if (isJSONStr(opt)) {
      obj = opt;
    } else if (isString(opt)) {
      obj = {
        text: opt,
        duration: 2000
      };
    } else {
      obj = {
        text: '操作成功',
        duration: 2000
      };
    }
  }

  return obj;
}

function setDuration(id, duration) {
  var dom = document.getElementById("".concat(id));
  var mask = document.getElementById('mask');
  setTimeout(function () {
    dom.parentNode.removeChild(dom);
    mask.parentNode.removeChild(mask);
  }, duration);
}

function createToast(opt, num, img) {
  var obj = beforeToast(opt);
  var text = obj.text;
  var duration = obj.duration;
  var id = null;
  if (num === 1) id = creatToastClass(text);else if (num === 2) id = creatIconClass(text, img);
  setDuration(id, duration);
}

var msg = function msg(opt) {
  createToast(opt, 1);
};

var success = function success(opt) {
  var img = 'data:image/png;base64,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';
  createToast(opt, 2, img);
};

var warning = function warning(opt) {
  var img = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAANP0lEQVR4Xu1dCdim1Ri+b1uWFEWpqymJGhXJqGijJqNCWm1pUdEiE6K0IGklaZP1akqZRFEaXG2UoVUpIXtkC4VCSNyu+5/zTd//zjnv8q3nnfmf63qv/uY773nPOfd73vOc5zzP/RCZi6QVAKwVrmcCWBfAUwA8EcDS4b9PDt34C4C/hevvAP4E4PsAfgrgx75I3pNzl5lb4yQ9DcBLAcwEsCWAaQNu4y8BXBWuK0katGwkC0AkrQZgbwA7A3j2iEfndgCfBzCH5G9H/OxFHjc2QCQ9DsBOAPYC8BIAY2tLGJX/AbgcwFkALib5n3GAM/JBkPRUAG8DsD+Azrd/HH0ve+YfAJwO4AyS942ycSMDRJIX5EMB7AZgqVF2so9n/QPApwGcRPI3fdRT+9ahAyLpSQCOB7Bf7ValC1pTstZ0BwBrVPeH68/hluUALBMu/+31yFrZmgN49gcBvJ/kAwOoK1nFUAGR5IX6hKCmNu2HtaH5AK4FcAPJ7zatoLu8pOcDeCGAjQFsBmDVHurzLHk7yQt7uLfWLUMBRNLqAM4FsEmtVjxcyIM/B8A8knc3vLdRcUkrA9guKBUbNLoZ+AqANw5DZR44IJK2AXA+gGVrdvJ3QbM5m+TPa94z0GKSpnuAAewJwBvROvJ7ADuSvL5O4bplBgaIpEcAOAbAu2uqsNb/TwIwl+RDdRs8zHKSrGzsAeDgmuuOVeODSVojG4gMBBBJNmN8KeyuqxpmIA4nOa+q4Dh/l/RqAMcCsHZYJeeRtPbYt/QNiCTbla4GsE5Fa2xbeh+AU0h6E5a9SHoMgMPCVaWqfwPAK/rVwvoCJCzeXwfw9IrR/SqAfUelyw8aaUnPCspGlZJyi+1wJDtqeOOm9AyIpOcCuBKAd95lMnuQ39jGPRzgDZI8w4+qqNKW5S16tYv1BEiYGTcBWL6kcdaYtiP5wwGOydirkuRZchGAFUsa4w3sxr3MlMaABP39uoqNlfX015L0urHYSVg33ccNSzrnF9YzxeaX2tIIEEk2RxiMMlOEraX7kFTtVrSwYFCRrVl635USr69bN7EcNwXEYNj8kJIjSVpVXGJE0icBvKmkw95n7Vp3QGoDIuk0AG8tqfhAkh+t++DFqZykj1UYTw8g6TKVUgsQSTsA+GJJbUeTtAayxIqkuQBelxgA7+hnkPSmuFQqAZFkBwPr149P1ORDnLKZU9WGxeL3YDq6xJvDRId+BWC9qgOvOoDcBsB7jpjYScAOCWORcNbihdVHwBZbDHYg+ddxNCgs9B4vv8QxsQHVRsyklAISzjN8YhYTu9NMJ3nvODrvZ0oyAC8uPP9qkluMsU0+ELsZgM0uMdmI5I2p9iUBkWSfpztLDpe2Iml3mrGJpKhqTbJy5g+z0ZLeAeDDiWfcSnL9XgAp06rOJPmWYXaqTt25AhJmr42NnU9psTt7k/R+bRGJvklhIf9RYlB8oLRWDrvwxCfrGpKpgaiD80DKSFoDwM8SldmrZXWS/yz+ngLkPACpzczOJG3LGbuERf3irnXkGgDbj2tRLw6IpPfaMSIxUD7YOrkSkIDsTwD4BLAol5HceuxItKQBkh4VfIqfEWmylaJpJP/V/dsiM0RSanZ4AfWnyublKak5ApJ2Ca6qsTvswXJKEpBgVv9F4lmXkrSXxpQ0HAFJ1lZjh3h3k1ypDJCyA5jNSH6rYVumii/YL1kjPSMxGC8n6RPVCZn0yZLkQ6XY9+47JJv6Lk2BEUZA0mMBWDuN+TJPsgYvBETSRgBSPka7kfTaMiU9joAkbxS9YSyKVd/lOot7NyD2LTowcoNPvJYn+e8e2zJ124LP1vMApNxh30Dys5M+WZL+mHBYOIekPfqmpM8RkGRH8Zi7lONRfMSxYA2RZINYylY/k6SPIqekzxGQdAiAEyPV2PdgGR97dwA5yA5skYL3kXQ4wZQMYAQk2RfBHikx2ZDkTR1AvgzglZFSF5F03F+2Isl+Uh0TvE3vKVNFFn2QZDtWzKH7MJInUNIjAThs6wmRFu9H8hNZ9CTSCEme1Z7d3XIqSYfMZSmSbOWNHVJdQXKWAfEi48UmJqv06oE3itHI2fye6r+k1wOY0KgKcj/JZQ3IjsETr1jgXpJ2pM5WUoAAWJ/krTk2PPgJ23gbkxUMyOHB7b5Y4DqSDv/KVkoAscegj3ezk+AM8SAALxVF2dSAnANg98iP2e8/2giIx1mSZ4g96ouytwGxucRmk6IcQfK47F6xrga1GBD7BW8bGdsTDYjN7Q7SLIqdpS+YAmTwIyDpVACzIzXPNSC2Qk6yyYeCryLp/Um20uIZkjravdyAONonZhbeluTXskVjwbc45WGf7aIe1hAbcWOBorcYEFtzY26iDs1yhFS20mJAUnuRuwxI6i3bnKSZFLKVFgNiR5HY1+cBA+Jzjpjb48tImq4oW2kxILMAXBYZ2AcNiN1RYrGCO5EsC0EYO1AtBsQ8YTG+lHsMiElezOhWlD1JetOYrbQYEBsXY66kdxoQH0z5gKoo2UdEtRgQ70G8FynKbQbk24GyqPjj1E59SN+GEhfT+QbE3zJ/04pyFknzXWUrLZ4hnwnMesWxvcCA2F5lPo+izCe5ebZotHtjmLIfHm1A7FFi0rCiLOLmmBs4LZ4hJnt2QFRRdjUgLwo0erHxXoqkbfdZShsBCSwQKfLmGQbEe5AU/faWJB0JlKW0FBCb3W1+j08A/2uJd/ZxJI/IEo2WriGSPhJ4i4vDegfJtTtuQI60jWlUN5KMHV5lgVFLZ0jKe/F0krM7gJiBwEwERbHhcel+WdKGhV7bAKlYPxyKd0kHEHM/pWhZ9yBpvTk7aSEgBwCI8cEsfPG7vd9TJpQJB67s0GjhGlLiv3A9SWu7DwfslNDXGb0Vh0Ea3C/IbZohkhzS5tC2mLyT5ATRQPcMKYurPoTkh/odwEHf3zJAzGkc01gnvfDFkLYbErR1RnaN3Fji2gKIpEcDcLKYGGHoJAKfIiAps7Bf7mwIAzozrUWA7APgU4kvxKRzpyIgdpO3u3xMbib5gkF/dvqpr0WApDwV7WCyEknbtiYkRhzg8N0UsUxWjg9tAETS9oGGPfbuHUvyyO4fYoA4S5rZz2KOD9eSrGJ37uelb3Rv7oCE2JsfJAjNHMbmcI9JKZVS5DNnhhxRsQEyZbiZOMcuLQDEWpW1q1qzI/rJ8j8GsuRUCjnT562Zw74kZ0ACTYlZvU0aUBSvGauRdNqmSVLGKJc6SXQF55O0991YJXNAHLmcohqMUjMlZ0iYJc4zaKqNmCO2i+wyzFxMdZDONaRNkhPCOFlNTEwMt04qZUcVCWbKCuwHOUOaKx5JOrlYz3JklAsxm6bVTZFgbkLSubaiUkkWWWIQc4U+rHcWgLHwvOfGKBdoYr9Xwo1/IUnzZyWlDiC2cTmAMnYo74oruWjrfH7aXiaouI6niUVGuXumLlm3ShmqBCSsJ2ZrvrRk0LKODR822NIEI4b9oL0JjMl/nUKQpG2FpVILkABKil6o84AlLjNCp+OSUo5vnSJJraqITm1AAijfDFkyUygfQ/I9VW/B4vS7pLNDqr1UtyrXje4bmwLiZJGediluc9dtloLd25KJrdeXI6Qf95qxVUkd1qbsSlWba6wRIGGWeF9iUKaVNMSBPjbXL7Ri9trxHO+TZHufI6BMSpYSa1vmqfT2oLY0BiSAYl5GE8qXJQVz3Ikjed2wxUYkmTX7CxUJlx1qvsFIkoJ1LWTrAbiiRtq8g0iaR771IskpvN9V0RGffThg9q5eOtzTDOkCxXsUZ0iIRWB1t8dpVvcf566+l8Hp6ufawSG9LCubi3uHPqufFB59ARI+Xz4nNijPqei07f/WwE5ry4If6F0/EFw/TRteJuad3yZGsN/kZegbkACKkxNb46iTlcDJTpycOPcIXycbtsV7lRoDOjDr90AACaCYbsgdMNFjHbE5xhbRz5H0TnbsIskECvuGGbFqjQblmb67u+HhDNl7kVQSsWI/fw3Azt5zSPrvkYukGWFz51zqy9RsgJ1BrEVWmkNq1jdRbGAzpACKuaDOTdA+lbXPlgDvfOdVGeGadDJWVtL0kFHNXv/+u4nYrucsOanAmyZ1TSo7FEA6T5Dk6X98gtymqtGmU3VmUdN72AXJ2c96kvApstLhLKWbhrWuF/pCO384XNxa41BkqIC4xSFCy2vFINix7cHh+Aqfutlbw7tgX2Y0snegTTv+5Pi/3rQ6/t5XVb73OoPrlLK21U1KwFLnxiZlhg5I12yxLn9oyIbpwWuD2PRjD5uTSZpXbOgyMkC6gFk5ZAl4MwCryzmKB99MCx9vaovqtzMjB6QLGJ9AvgbAXgkmiX771vT+h4LB0BwkVir8/yOXsQHS3dPAiW5tx4wSNseMUmzuMLekWVhTfs0ja08WgBTA8YbMZwwzw+Vwu0GKk5rZ1GO/qat6scgOsjHFurIDpNjA4EXprALeK/hgzH9bZfX648+erw5npLUtL8S2m9kr0I4FVp99GYjbcz+j+T9AFwPBU0hK1gAAAABJRU5ErkJggg==';
  createToast(opt, 2, img);
};

var error = function error(opt) {
  var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAJwklEQVR4Xu2djbHUNhCApQqSV0GggkAFCRUEKghUEKggUEGggkAFgQoCFQQqSKggUMFmvpv1xednaVe25JPvPc3ckMnz+SR92h+tVlIMOywicieE8J1R9c8xxn/21rzYc4VF5F4I4YcQAgD4b/7lU1KAwud9COFLCOFDjPFjyQu2fLYrICMAP4YQ+HzbqDMAAyA+XQE6OxBVPz+FEJ4uGP21eCExr0MI786t5s4GRER+DiE81E+tjq3xnrchhLcxxjc1Xlb6js2BKIjnZ5QGbx9hd55vDWYzII1BfNBexgGoXTYF0xyIGurf1Uta0lmfQwjoeD4HjynGiDE2i4jgGAyeGV4aH8tdTr2X33zW2kNrBkRE8JB+VWNtdt7oga8jDwhdXnUuoQNk8OL495uSyoUQXoYQXsQY8dSqlyZAdGT+Uei2vsOYqkFt0thp7+mgGRwLPD1voX6PvJLqfSnPVQciIkgFRttTkAZG3OvakuD58fEz6n4/Von2Sg1G/0Xpb+WerwZERxtSgRqwygDiZSvRtyqQ+ru2gzkRHw8YbAvSUkWqqwBRvQwMT1jjlbqTVRqwtOOt7ykYJP0X61l1NoCyOiSzGojC+NNhL3BNn9aotKODqj2i7WMW/73xUgbYg7XtWwWkwHjjLmIrdltEBBX2mwPKKmO/GIjCQDJyhTnEw7WjpheKKi14gtZcBklxzZWmbVsExKmmcGMf1zJ2HUFhfoUKy7nJi9VXMRAnjDcxRlzIiy0iAhQCpKmyCEoREPU8/jK8qVcxRvTtxRcRwS7mvDCiDPdLtEQpEGxGbp7xJMbIyLkxRUTQBMTqUuV9jPGBt0PcQEQEn5xZeKrcGMmYdoBDUoh9uaIXLiAOj+ribYY1wh02xeV5mUDUbvydmfix7EmA7sYXEcElTnlfGPm7lj3xAMkZLuYZ96wfuSmkdPASPknNU0y1ngWiLi5eVargQayO31wSMId6z/aZBQQYrLLNld2HQ1oNBMMBynpdSSCGO0cukyfM3qrN3b9XRNAcqYBkcnqQA4IhT4XTb1WVMSQM1UVewN25V8wCMaTDNEzdD9+NKmjMT2alJAUkJR2s9N259ap8RNXrInwyt/I4KyXXgBjS4Z5x+qp8+U8ZBv6alMwBSU1umknHeHtBjHFIetuElibwYSs/xhhZMqhaDCm5Nqk+AaIdg7qaK02kQyWSlbgh071q0kCqd7WjCJaO3XrywB5VJRJCMGwJs/dj7tkUSG6Z8uSLNSqtA4C5znTbAS4jsZ8miRAJGEOTWIJFS1QrxkA/mc9NgaSMeZN4leEaNoFiwABCK02A5M/lHqMq7w/0j0CMMEmTdQ5HmKEqFAcM+qVVW3PrJsd53RhISl01M+a0XkRSI2cYNFWgOGF8ijGmQkWrVJhh3I9qawwk5V01UVdD67SiQMnlPa2C4oXBamgru6WDz+zjMZB/E2sezYOILaH0AkOBpLTQlxjjFc8cgBj2o7p3NSf7LaD0BMPRzwc7MgBJkWOvtydfd5V+baG+eoMxaiOu/Fwo5aCJBiCpVcGm9qOVpPQKw7AjB3d7AJLydJr45JY4rVFfPcNQIKnsncMa0wAkNSFs4pNbQLTizN6LvK/eYWi7UvORQ/R3ACKJTnKlrng6eMkzJZKi75/GpqY/+6m1a2u1MzcZjpRcnIW/Wz/Q+u8FUKhKblJ3dhgjw54SgCuAsDY+u62gByAF6is3NrqBoe1Ja6Q9AFkJpSsYFwNkIZTuYKwB0mWqj9Om0O4uYSiQVIrQg5wN6RmI5U3R7lUByZbOSibCnQVyDHi1rFzJu53zjPEru4QiIhdj1D2SMWXcHZTdA1kgGV1DsYAQzZ3NNOlhHuKEgQGnNFvkKlGtuWe1Paw9zZWrPYROLDV18Ka0dUWxr1qdXPIea943ACEvaG6TybmDiy4Yw7Kr0yU+q03JZIYe1p56Dr8XwRjFiYqjxCUjfO2zmdTSk/B7bwtUi2DsAUpmH+LJAlVqCTe5j2HtSJn7foEBN7NDelVfIpJNJuktyWGVZEwh9wbFSCb5P8lB4yvZxfcWEjFRMVVh9Ki+Mkc8fY0xHvKbe0mUawKjNygZ+3FMJvGkkro2vC+VIBGxzk+pErV1qq+ic0lK2mxMCGdTSVn+TO1JbzIfcSRbV4FRKClN8giMnWnXk63VjqQmiE3ys4xj86rCKIDSCkhKE5wkeJ97w05KKpvAcEAh05+jQmqfpp2MF+rx5cfzKHvY0jZNHGOPIec0Ntk9NYFCNvqwiQYYnJpa/byvxVvaVG2lUuabGffReezsJlp0eGSJgR0/q3aM/8UkuKpkaH/izqZOU8pv+tQX5Hb6nCW1dGln9/C91duiDePeTEp66LzadVBXNyUdszsLbo/WqE1h9L5qR2sYUsKfbw+fMUAac6zkvpulxzOdbOVtOMh2+2oRyZ01Vn48k0pJbods872He6VhGPJsvpt1olwunHKrumZGjCMctPyIP5WS3CGYxSc373XUe+pteFW8wjxrzNz/YWx450eaHNji6YDenhERLrVJHZnrOoDBBKJSktxDop3CHVJPeuugLesjIhw3nruAwBW0dAFRKLdHjScIO2C4IxxuIA6vi0earJtsOdJLf8txGH/RLoJSIATKcic30x5uXntW2rA9Pu+QjOJlhCIgKiW4wsxPclfKXbxNccDAiJOuVHTydzGQAiiE8VFhTdc1tpYs9Tox4LkLCBbBoC2LgDg9Lx5jnlLlfr+tO37u9wpupVsc61sMZAQFSbBuxGQljgsld1ucV8ouloyhY1YBKVBfPIouRYUV6dRzE1Sp4NRU66S51TBWqaxxRxXc73fwwlpef10LoNoK7/XjeFNcEbh6sK2WkKEDtAHjpIFc32DoAUNspyujr+3g5jUS0KfH1861qWpSRjUgIzDWjH7cqAEMd1hVTzAokRY98wUQhD88IHi9ewburUt1IIXGflxP5jak4JCJsYnUqDRwZxQQSu5DwV6QqlQ9Q6YJEIXCKPNefz2VGhrKh7DDar08Y+/IxQLAksvMml4/3gzISIXhnWAv5k519kgy0gIcwKDWyJ9yHdgvIvwmWYN8qAcQvOpoWrdNrh9vDmQEBrWAxFg3LXsgTZ8ZVEeJ2vH+DjfRPW+R0ThXgc2AbATG28me5zYFUW1i6GnZ3DMatkaH567BXvr6Nd/jDhFWQavn+HoqtbmETCul7iZgUGm5kxg87Vn6DBM7AADirO732YHMeEDYgeFjxciWAsBtHTw5dk1V9eSWVorvdQVkRnrGnhGQ8JZKnQJsAaMeAAePrScA0zZ3DSQ10nRCZwX7yK7cZIK5RiKm3/0PM6VksoEW+uQAAAAASUVORK5CYII=";
  createToast(opt, 2, img);
};

var toast = {
  msg: msg,
  success: success,
  warning: warning,
  error: error
};

function createMask$1() {
  console.log('zzz');
  var maskStyle = 'width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index:100; background:rgba(0,0,0,0);';
  var div = document.createElement('div');
  div.setAttribute('id', 'mask');
  div.setAttribute('style', maskStyle);
  document.querySelector('body').appendChild(div);
}

function creatIconClass$1(text, img) {
  createMask$1();
  var id = getRandom(100);
  var IconStyle = "\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%,-50%);\n    display:inline-block;\n    padding:20px 30px;\n    background:rgba(0,0,0,0.5);\n    border-radius:4px;\n    font-size:14px;\n    display:flex; \n    flex-flow: column wrap;\n    align-items: center;\n    display:flex; \n    flex-flow: column wrap;\n    align-items: center; \n    justify-content: center;\n    z-index:101;\n    ";
  var spanStyle = "\n    font-size:14px;\n    text-align: center;\n    margin-top:5px;\n    color:#fff;\n    ";
  var html = "\n    <img style=\"width:38px\" src=\"".concat(img, "\">\n    <span style=\"").concat(spanStyle, "\">").concat(text, "</span>");
  var div = document.createElement('div');
  div.innerHTML = html;
  div.setAttribute('id', id);
  div.setAttribute('style', IconStyle);
  document.querySelector('body').appendChild(div);
  return id;
}

function beforeToast$1(opt) {
  var obj = null;

  if (isEmptyObj(opt)) {
    obj = {
      text: '操作成功'
    };
  } else {
    if (isJSONStr(opt)) {
      obj = opt;
    } else if (isString(opt)) {
      obj = {
        text: opt
      };
    } else {
      obj = {
        text: '操作成功'
      };
    }
  }

  return obj;
}

function createToast$1(opt, img) {
  var obj = beforeToast$1(opt);
  var text = obj.text;
  var dom = null;
  dom = creatIconClass$1(text, img);
  return dom;
}

var loading = function loading(opt) {
  var img = 'data:image/gif;base64,R0lGODlhNgA2ALMMAJmZmf///93d3bu7u5qamtzc3Ly8vLq6ut7e3pubm5iYmJaWlgAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkMxQTEwQUJGRTI2MjExRTg5QzM2RkM4MkZEMzE1MEY5IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkMxQTEwQUMwRTI2MjExRTg5QzM2RkM4MkZEMzE1MEY5Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzFBMTBBQkRFMjYyMTFFODlDMzZGQzgyRkQzMTUwRjkiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzFBMTBBQkVFMjYyMTFFODlDMzZGQzgyRkQzMTUwRjkiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr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';
  var id = createToast$1(opt, img);
  console.log('id', id);
  var dom = document.getElementById("".concat(id));
  var mask = document.getElementById('mask');

  function hide() {
    dom.parentNode.removeChild(dom);
    mask.parentNode.removeChild(mask);
  }

  return {
    hide: hide
  };
};

var dialog = {
  alert: function alert(opt) {
    var title = opt.title ? opt.title : '';
    var message = opt.message ? opt.message : '弹窗内容';
    var maskStyle = 'width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index: 100; background:rgba(0,0,0,0.4);display:flex; flex-flow: column wrap;align-items: center; justify-content: center;color:#fff;';
    var dialogStyle = "width:250px;height:155px;background:rgba(255,255,255,1); border-radius:15px;display:flex; flex-flow: column wrap;overflow: hidden;";
    var titleStyle = "display:flex;align-items: center;justify-content: center;font-size:15px;font-weight:500;color:#0F0F0F;font-weight:500;height:40px;";
    var spanColor = "font-size:14px;text-align: center; flex:1;color:#808080;font-weight:500;font-size:14px;display:flex;align-items: center;justify-content: center;padding:0 25px;";
    var titleHtml = title ? '<div style="' + titleStyle + '">' + opt.title + '</div>' : '';
    var bottomStyle = 'height:49px;color:#00B800;display:flex;align-items: center;justify-content: center;font-weight:bold;font-size:14px;border-top:1px #D5D5D6 solid;';
    var html = '<div style="' + dialogStyle + '">' + titleHtml + '\
        <div style="' + spanColor + '">' + message + '</div>\
        <div style="' + bottomStyle + '" id="alertSure">确定</div>\
        </div>';
    var div = document.createElement('div');
    div.setAttribute('id', 'myAlert');
    div.setAttribute('style', maskStyle);
    div.innerHTML = html;
    document.querySelector('body').appendChild(div);
    var promise = new Promise(function (resolve, reject) {
      alertSure.onclick = function () {
        var alertSure = document.getElementById('alertSure');
        var myAlert = document.getElementById('myAlert');
        myAlert.parentNode.removeChild(myAlert);
        resolve(alertSure);
      };
    });
    return promise;
  },
  confirm: function confirm(opt) {
    var title = opt.title ? opt.title : '';
    var message = opt.message ? opt.message : '弹窗内容';
    var maskStyle = 'width: 100%;height: 100%;position: fixed;left: 0;top: 0;z-index: 100; background:rgba(0,0,0,0.4);display:flex; flex-flow: column wrap;align-items: center; justify-content: center;color:#fff;';
    var dialogStyle = "width:250px;height:155px;background:rgba(255,255,255,1); border-radius:15px;display:flex; flex-flow: column wrap;overflow: hidden;";
    var titleStyle = "display:flex;align-items: center;justify-content: center;font-size:15px;font-weight:500;color:#0F0F0F;font-weight:500;height:40px;";
    var spanColor = "font-size:14px;text-align: center; flex:1;color:#000;font-weight:500;font-size:14px;display:flex;align-items: center;justify-content: center;padding:0 25px;";
    var titleHtml = title ? '<div style="' + titleStyle + '">' + opt.title + '</div>' : '';
    var bottomStyle = 'height:49px;line-height:49px;display:flex;align-items: center;justify-content: center;font-weight:bold;font-size:14px;border-top:1px #EFEFEF solid;';
    var cancelStyle = 'width:50%;height:49px;text-align: center;color:#333;border-right:1px #EFEFEF solid;';
    var sureStyle = 'width:50%;height:49px;text-align: center;color:#00B800;';
    var html = '<div style="' + dialogStyle + '">' + titleHtml + '\
        <div style="' + spanColor + '">' + message + '</div>\
        <div style="' + bottomStyle + '">\
        <div style="' + cancelStyle + '" id="cancelSure">取消</div>\
        <div style="' + sureStyle + '" id="confirmSure">确认</div>\
        </div>\
        </div></div>';
    var div = document.createElement('div');
    div.setAttribute('id', 'myConfirm');
    div.setAttribute('style', maskStyle);
    div.innerHTML = html;
    document.querySelector('body').appendChild(div);
    var promise = new Promise(function (resolve, reject) {
      confirmSure.onclick = function () {
        var confirmSure = document.getElementById('confirmSure');
        var myConfirm = document.getElementById('myConfirm');
        myConfirm.parentNode.removeChild(myConfirm);
        resolve(confirmSure);
      };

      cancelSure.onclick = function () {
        var cancelSure = document.getElementById('cancelSure');
        var myConfirm = document.getElementById('myConfirm');
        myConfirm.parentNode.removeChild(myConfirm);
        reject(cancelSure);
      };
    });
    return promise;
  }
};


