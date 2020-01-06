/**
 * dynamicTable 动态表格
 * @param { Object }  resource 
 * @param { String }  el : 指定元素
 * @param { Array }   col : 表头
 * @param { Array }   row : 数据行
 * @param { Number }  rowNum : 显示行数
 * @param { Number }  timeout : 滚动动画延时
 * @param { String }  headerBGC : 标题栏背景颜色
 * @param { String }  oddRowBGC : 奇数行背景颜色
 * @param { String }  evenRowBGC : 偶数行背景颜色
 * @param { Boolean } index : 是否显示索引列
 */
let dynamicTable = resource => {
    'use strict';

    //检查参数类型
    if (typeof resource !== 'object') {
        console.error('未传入参数,或者参数不是Object类型');
        return
    }

    // 检查是否传入元素
    let ele = resource.el;
    if (!ele) {
        console.error('元素获取不正确！');
        return
    }
    /**
     * 检查是否传入动画触发时长
     * 当时间小于 10 计算为秒级单位，
     * 大于 10 计算为毫秒级单位
     */
    let timeout = resource.timeout;
    if (!timeout) {
        timeout = 2000
    } else if (timeout < 10) {
        timeout = timeout * 1000
    }
    // 检查 配置元素是否传入数据
    let colName = resource.header == undefined ? '' : resource.header;
    let rowData = resource.data == undefined ? '' : resource.data;
    let rowNum = resource.rowNum == undefined ? 5 : resource.rowNum;
    let headerBGC = resource.headerBGC == undefined ? '#a0a0a0' : resource.headerBGC;
    let oddRowBGC = resource.oddRowBGC == undefined ? '#cfcfcf' : resource.oddRowBGC;
    let evenRowBGC = resource.evenRowBGC == undefined ? '#fafafa' : resource.evenRowBGC;
    let colIndex = resource.index == undefined ? true : resource.index;

    //基本table html
    let html = `<table>
                    <thead>
                        <tr>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>`;

    let boxHeight = $(ele).height();
    let theadHeight = boxHeight * 0.2;
    let tbodyHeight = boxHeight * 0.8;
    let rowNumComputed = tbodyHeight / rowNum - 2;

    //Css元素集
    let boxCss = {
        overflow: 'hidden',
        background: headerBGC
    };
    let tableCss = {
        height: "100%",
        width: '100%',
        borderCollapse: "collapse",
    };
    let theadCss = {
        padding: '0',
        height: theadHeight,
        wordBreak: 'keep-all',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        backgroundColor: headerBGC
    };
    let thCss = {
        height: theadHeight,
    }
    let tbodyCss = {
        height: tbodyHeight,
        wordBreak: 'keep-all',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    };
    let trOddCss = {
        background: oddRowBGC,
    };
    let trEvenCss = {
        background: evenRowBGC,
    };
    let tdCss = {
        textAlign: "center",
        height: rowNumComputed,
    };

    //插入table元素
    $(ele).append(html);

    //核心代码
    //遍历插入数据 表头
    if (colIndex) {
        $(ele + '>table>thead>tr').append('<th style="color:#eee">#</th>')
    }
    colName.forEach(element => {
        $(ele + '>table>thead>tr').append(`<th>${element}</th>`)
    });

    //遍历插入数据 数据行
    for (let i = 0; i < rowData.length; i++) {
        $(ele + '>table>tbody').append('<tr />');
        if (colIndex) {
            $(ele + '>table>tbody>tr:eq(' + i + ')').append(`<td style="color:#eee">${i+1}</td>`)
        }
        rowData[i].forEach(element => {
            $(ele + '>table>tbody>tr:eq(' + i + ')').append(`<td>${element}</td>`)
        })
    }

    //设置Css样式
    $(ele).css(boxCss);
    $(ele + '>table').css(tableCss);
    $(ele + '>table>thead').css(theadCss);
    $(ele + '>table>thead>tr>th').css(thCss);
    $(ele + '>table>tbody').css(tbodyCss);
    $(ele + '>table>tbody>tr:odd').css(trOddCss);
    $(ele + '>table>tbody>tr:even').css(trEvenCss);
    $(ele + '>table>tbody>tr>td').css(tdCss);

    //滚动动画
    setInterval(function() {
        $(ele + '>table>tbody>tr:eq(0)').slideToggle(100, function() {
            $(this).clone().appendTo(ele + '>table>tbody').show();
            $(this).remove();
        });
    }, timeout)
}