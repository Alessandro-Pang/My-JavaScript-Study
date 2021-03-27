/*
 * @Author: zi.yang
 * @Date: 2021-03-27 21:15:12
 * @LastEditors: zi.yang
 * @LastEditTime: 2021-03-27 21:15:51
 * @Description: 自己封装的一个类 JQuery 库
 * @FilePath: \My-JavaScript-Study\JavaScript Study\DomQuery.js
 */
function DomQuery(queryContent) {
  this.element = null;
  this.queryType = '';
  this.queryValue = '';
  return this.init(queryContent)
};

// 初始化
function init(queryContent) {
  const queryType = this.queryClassify(queryContent);
  const div = null;
  if (queryType !== "" && queryType !== null && queryType !== void 0) {
    const div = this.query(queryType.queryValue, queryType.queryType);
  }
  return this.mounted(div);
}

// 挂载
function mounted(element) {
  if (!element) return this;
  Object.assign(element, element, this);
  this.element = element;
  return this;
}

// 查询类型
function queryClassify(query) {
  if (!query || query === null || query === void 0 || query === "") return this
  const eleType = query.substring(0, 1);
  const eleQuery = query.substring(1);
  const queryType = '';
  switch (eleType) {
    case '#':
      type = 'id';
      queryValue = eleQuery;
      break;
    case '.':
      type = 'class';
      queryValue = eleQuery;
      break
    case '[':
      type = 'artibuteName';
      queryValue = query;
      break
    default:
      type = 'tagName'
      queryValue = query;
  }
  this.queryType = type;
  this.queryValue = queryValue;
  return this;
}

// 创建
function create(tagName) {
  // 当没有传入标签名称时，默认创建一个 div 元素
  const tag = tagName !== null &&
    tagName !== "" &&
    tagName !== void 0 ?
    tagName : 'div';

  const element = document.createElement(tag);
  return this.mounted(element);
}

// 添加样式
function css(styleObj) {
  for (styleName in styleObj) {
    this.element.style[styleName] = styleObj[styleName];
  }
  return this;
}

function text(text) {
  this.element.innerText = text;
  return this;
}

// 添加属性
function attr(attrObj) {
  for (attrName in attrObj) {
    if (this.element[attrName] === void 0) {
      this.element.setAttribute(attrName, attrObj[attrName]);
    } else {
      this.element[attrName] = attrObj[attrName];
    }
  }
  return this;
}

// 追加元素 DQ : DomQuery
function append(DQElement) {
  this.element.appendChild(DQElement.element);
  return this;
}

// 查询
function query(query, queryType) {
  let ele = null;
  if (queryType === "id") {
    ele = document.getElementById(query);
  } else if (queryType === "class") {
    ele = document.getElementsByClassName(query)
  } else if (queryType === "name") {
    ele = document.querySelectorAll(queryType);
  } else if (queryType === "tagName") {
    ele = document.getElementsByTagName(queryType);
  }
  this.element = ele;
  return this;
}

// 每次都创建一个新的对象
function $(query) {
  return new DomQuery(query);
}

DomQuery.prototype.init = init;
DomQuery.prototype.mounted = mounted;
DomQuery.prototype.css = css;
DomQuery.prototype.create = create;
DomQuery.prototype.query = query;
DomQuery.prototype.append = append;
DomQuery.prototype.text = text;
DomQuery.prototype.attr = attr;
DomQuery.prototype.queryClassify = queryClassify;
DomQuery.prototype.$ = $;