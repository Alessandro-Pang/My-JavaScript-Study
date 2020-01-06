let init = {
    //网页标题
    titleName: "辽宁粮食管控数据分析平台",
    //首页
    homePage: '',
    //分析界面
    pageName: {
        top1Name: "",
        top2Name: "",
        top3Name: "",
        top4Name: ""
    },
    //hub app ID
    appID: "粮仓保管账数据分析.qvf",
    //Qlik 开发主题
    themeName: "Themepark - Police",
}

/* 获取App ID */
let getAppID = () => init.appID;

/* 获取Qlik 主题 */
let getTheme = () => init.themeName;

/**
 * 去除字符串中所有的空格
 * @param {*} stringObj 
 */
let removeNull = stringObj => stringObj.replace(/\s/g, '');

/**
 * 判断页面是否在
 */
let prohibitToJump = () => {
    /* 判断是否存在首页 */
    let homePage = removeNull(init.homePage);
    homePage === "" ? $('#home').remove() : false;

    /* 判断是否存在top页 */
    let page = init.pageName,
        index = 1;
    for (let i in page) {
        let isNull = removeNull(page[i]) === "" ? true : false;
        // 如果页面不存在，就不进行跳转
        isNull ? $('#top' + index + 'Name').parent().attr('href', '#') : false;
        index++;
    }
}

/* 封装 设置标题 函数 */
let setTitle = (selector, titleText) => $(selector).text(titleText);

/* 设置标题 */
$(function() {
    setTitle('title', init.titleName);
    setTitle('#home', init.homePage);
    setTitle('#top1Name', init.pageName.top1Name);
    setTitle('#top2Name', init.pageName.top2Name);
    setTitle('#top3Name', init.pageName.top3Name)
    setTitle('#top4Name', init.pageName.top4Name)
    prohibitToJump();
});

//forward、back、next button selected
function onQcmd(app) {
    $("[data-qcmd]").on('click', function() {
        var $element = $(this);
        switch ($element.data('qcmd')) {
            case 'clearAll':
                app.clearAll();
                break;
            case 'back':
                app.back();
                break;
            case 'forward':
                app.forward();
                break;
        }
    });
}

/**
 * setCharts 图表放大显示图层
 * @param { String } element :html 元素ID,不要添加#标识
 * @param { variable } app : Qlik Sense app 对象
 * @param { String } chartObj : Qlik Sense 图表嵌入对象 
 * @param { boolean } setOption : 是否直接插入元素
 */
function setCharts(element, app, chartObj, setOption = true) {
    //setOption默认插入元素，当参数给false时，则不插入元素
    setOption ? app.getObject(element, chartObj) : false

    //禁用右键默认弹框
    document.oncontextmenu = () => false;

    //HTML 元素集 --放大图标
    let magnify = `
        <div class="pcyMagnify">
            <i class="fa fa-arrows-alt fa-2x" aria-hidden="true"></i>
        </div>
    `;

    //大图背景
    let magnifyBeforModel = `
        <div class="magnifyBeforModel">
            <div id="bigChart">
                <div id="callBack">
                    <a href="#" style="position:absolute ;top:27px" data-qcmd="forward"><span class="btn btn-xs blue">下一步</span></a>
                    <a href="#" style="position:absolute ;top:63px" data-qcmd="back"><span class="btn btn-xs blue">上一步</span></a>
                    <a href="#" style="position:absolute ;top:99px" data-qcmd="clearAll"><span class="btn btn-xs blue">还&nbsp;&nbsp;&nbsp;&nbsp;原</span></a>
                </div>
                <div class="MagnifyBefor" id="closeBigCharts">
                    <i class="fa fa-compress fa-2x" aria-hidden="true"></i>
                </div>
                <div id="Chart"></div>
            </div>
        </div>
    `;

    //CSS 样式集
    let magnifyCss = {
        width: '50px',
        height: '50px',
        border: '2px solid white',
        borderRadius: '100px',
        color: 'white',
        position: 'absolute',
        zIndex: '99'
    }
    let iCss = {
        transform: 'translateY(10px)',
    }
    let modelCss = {
        position: 'absolute',
        height: '100vh',
        width: '100%',
        top: 0,
        position: 'fixed',
        zIndex: '1',
        backgroundColor: 'rgba(0,0,0,.5)',
    }
    let bigChart = {
        position: 'absolute',
        width: '85vw',
        height: '85vh',
        top: '10vh',
        left: '7vw',
        border: '2px solid white',
        backgroundColor: '#1e1e1e'
    }
    let callBackCss = {
        position: 'absolute',
        left: '100%',
        top: '0px',
        width: '75px',
        height: '150px',
        backgroundColor: '#1e1e1e',
        paddingLeft: '5px',
        border: '2px solid white'
    }
    let i2Css = {
        transform: 'translate(10px,10px)'
    }
    let MagnifyBefor = {
        position: 'absolute',
        left: '100%',
        top: '0',
        transform: 'translate(-50%,-50%)',
        width: '50px',
        height: '50px',
        border: '2px solid white',
        borderRadius: '100px',
        color: 'white',
        background: 'rgb(50,50,50)',
        zIndex: '99999'
    }
    let chartCss = {
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0
    };

    //创建放大按钮
    let crateIcon = (xAsial, yAsial) => {
        //移除已有元素
        $('.pcyMagnify').remove();
        //在该元素下添加按钮
        $(ele).append(magnify);
        //按钮坐标定位
        $('.pcyMagnify').css(magnifyCss).css({
            left: xAsial,
            top: yAsial
        });
        //图标定位
        $('.pcyMagnify>i').css(iCss);
        //处理一个预期之外的定位的BUG
        let circleLeft = $('.pcyMagnify').offset().left;
        let iLeft = $('.pcyMagnify i').offset().left;
        let diff = iLeft - circleLeft;
        let diffCss = diff < 5 ? { 'transform': 'translate(12px,11px)' } : '';
        $('.pcyMagnify>i').css(diffCss)
    }

    //创建全屏图标元素集
    let createBigBg = () => {
        //先移除已有元素
        $('.magnifyBeforModel').remove();
        //添加 全屏图标 祖父级元素
        $('body').append(magnifyBeforModel);
        $('.magnifyBeforModel').css(modelCss);
        //添加全屏图标 父级框
        $('#bigChart').css(bigChart);
        $('#callBack').css(callBackCss);
        //添加缩小按钮
        $('.MagnifyBefor').css(MagnifyBefor);
        $('.MagnifyBefor i').css(i2Css);
        //图标整体样式
        $('#Chart').css(chartCss);
        //移除放大图标
        $('.pcyMagnify').remove();
    }

    //移除放大图标
    $('body').click(function() {
        $('.pcyMagnify').remove();
    })

    //jquery id 需要加入#号
    let ele = '#' + element;
    $(ele).on('mousedown', function(e) {
        let
            clientX = e.originalEvent.x || e.originalEvent.layerX || 0,
            clientY = e.originalEvent.y || e.originalEvent.layerY || 0,
            eleX = $(ele).offset().left,
            eleY = $(ele).offset().top,
            scrollTop = $(document).scrollTop(),
            scrollLeft = $(document).scrollLeft(),
            xAsial = clientX - eleX - 25 + scrollLeft + 'px',
            yAsial = clientY - eleY - 25 + scrollTop + 'px';
        if (3 == e.which) {
            //右键点击事件
            crateIcon(xAsial, yAsial);
        }
        $('.pcyMagnify').on('click', function() {
            //放大图标点击事件
            createBigBg();
            app.getObject('Chart', chartObj);
            onQcmd(app);
            $('#closeBigCharts').click(function() {
                //缩小图标点击事件
                $('.magnifyBeforModel').remove()
            })
        })
    })
}

/**
 * tempCanvas : 回调分析模板
 * @param { String } chartURI : 回调页面地址
 */
function tempCanvas(chartURI) {
    //大图背景
    let magnifyBeforModel = `
        <div class="magnifyBeforModel">
            <div id="bigChart">
                <div class="MagnifyBefor" id="closeBigCharts">
                    <i class="fa fa-compress fa-2x" aria-hidden="true"></i>
                </div>
                <iframe id="iframe">
                    <h1 style="text-align:center">您的浏览器不支持 iframe 页面</h1>
                </iframe>
            </div>
        </div>
    `;
    //CSS 样式集
    let modelCss = {
        position: 'absolute',
        height: '100vh',
        width: '100%',
        top: 0,
        position: 'fixed',
        zIndex: '9999',
        backgroundColor: 'rgba(0,0,0,.5)',
    }
    let bigChart = {
        position: 'absolute',
        width: '85vw',
        height: '85vh',
        top: '10vh',
        left: '7vw',
        border: '2px solid white',
        backgroundColor: '#1e1e1e'
    }
    let i2Css = {
        transform: 'translate(10px,10px)'
    }
    let MagnifyBefor = {
        position: 'absolute',
        left: '100%',
        top: '0',
        transform: 'translate(-50%,-50%)',
        width: '50px',
        height: '50px',
        border: '2px solid white',
        borderRadius: '100px',
        color: 'white',
        background: 'rgb(50,50,50)',
        zIndex: '99999'
    }
    let iframeCss = {
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0
    };

    //创建全屏图标元素集
    let createBigBg = () => {
        //先移除已有元素
        $('.magnifyBeforModel').remove();
        //添加 全屏图标 祖父级元素
        $('body').append(magnifyBeforModel);
        $('.magnifyBeforModel').css(modelCss);
        //添加全屏图标 父级框
        $('#bigChart').css(bigChart);
        //添加缩小按钮
        $('.MagnifyBefor').css(MagnifyBefor);
        $('.MagnifyBefor i').css(i2Css);
        //图标整体样式
        $('#iframe').css(iframeCss);
    }

    //放大图标点击事件
    createBigBg();
    $('#iframe').attr('src', chartURI);
    $('#closeBigCharts').click(function() {
        //缩小图标点击事件
        $('.magnifyBeforModel').fadeOut(800, function() {
            $(this).remove();
        })
    })
}