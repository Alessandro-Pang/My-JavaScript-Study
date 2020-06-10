function my$(id) {
  return document.getElementById(id);
}

//获取父级标签节点的第一个子级标签节点 --兼容代码
function getFirstElementChild(element) {
  if (element.firstElementChild) {
    return element.firstElementChild;
  } else {
    var nodes = element.firstChild;
    while (nodes && nodes.nodeType != 1) {
      nodes = nodes.nextSibling;
    }
    return nodes;
  }
}

//获取父级标签节点的最后一个子级标签节点 --兼容代码
function getLastElementChild(element) {
  if (element.lastElementChild) {
    return element.lastElementChild;
  } else {
    var nodes = element.lastChild;
    while (nodes && nodes.nodeType != 1) {
      nodes = nodes.previousSibling;
    }
    return nodes;
  }
}

//为任意元素，绑定任意事件
//参数类型：任意元素，事件类型，处理函数
function addEventListener(element, type, fn) {
  //判断浏览器是否支持这个方法
  //火狐，谷歌支持该方法 ，IE不支持
  if (element.addEventListener) {
    //该方法，事件类型没有 ON ,第三个参数为false
    element.addEventListener(type, fn, false);
  }
  //IE8 支持该方法，IE11 , 火狐 , 谷歌不支持
  else if (element.attachEvent) {
    //该方法，事件类型有 on ,只有两个参数
    element.attachEvent("on" + type, fn);
  } else {
    element["on" + type] = fn;
  }
}

//解绑事件兼容代码
function removeEventListener(element, type, fnNmae) {
  if (element.removeEventListener) {
    element.removeEventListener(type, fnNmae, false);
  } else if (element.detachEvent) {
    element.detachEvent("on" + type, fnName);
  } else {
    element["on" + type] = null;
  }
}

//阻止事件冒泡的兼容代码
function eventMaopao(eventElement) {
  if (eventElement) {
    eventElement.stopPropagation(); //火狐、谷歌支持
  } else {
    window.event.cancelBubble = true; //IE8支持，谷歌支持
  }
}

//前进后退 动画函数
//参数一：事件触发函数Id
//参数二：动画元素Id
//参数三：元素目标位置
//参数四：每次前进步数
//参数五：每次后退步数
function animation(eventId, elementId, target, next, back) {
  //定时器开启标签，防抖节流
  var tag = false;

  my$(eventId).onclick = function () {
    //如果定时器开启了，则不能再次开启定时器
    if (tag) return;

    var timeId = window.setInterval(() => {
      //获取当前div位置
      var dvPath = my$(elementId).offsetLeft;

      //如果div位置小于目标位置 ,则往前移动
      if (dvPath < target) {
        dvPath = dvPath + next;
        //如果当前定时器每次移动不是2的倍数
        //且当前位置大于目标位置
        //且当前位置小于目标位置 + 每步前进步数
        //则修正当前位置为目标位置
        if (next % 2 !== 0 && dvPath > target && dvPath <= target + next) {
          dvPath = target;
        }
        //如果div位置大于目标位置 ,则往后移动
      } else if (dvPath > target) {
        dvPath = dvPath - back;
        // 如果当前定时器每次移动不是2的倍数
        // 且当前位置小于目标位置
        // 且当前位置大于目标位置 - 每步后退步数
        // 则修正当前位置为目标位置
        if (next % 2 !== 0 && dvPath < target && dvPath >= target - next) {
          dvPath = target;
        }
      }
      //定时器开启标识
      tag = true;
      //执行每次移动后的位置
      my$(elementId).style.left = dvPath + "px";
      //当前位置==目标位置 结束定时器任务
      if (dvPath == target) {
        //定时器关闭标识
        tag = false; 
        window.clearInterval(timeId);
        return;
      }
    }, 20);
  };
}
