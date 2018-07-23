/*!
 * routie - a tiny hash router
 * v0.3.2
 * https://projects.jga.me/routie
 * copyright Greg Allen 2013
 * MIT License
*/
(function(n){var e=[],t={},r="routie",o=n[r],i=function(n,e){this.name=e,this.path=n,this.keys=[],this.fns=[],this.params={},this.regex=a(this.path,this.keys,!1,!1)};i.prototype.addHandler=function(n){this.fns.push(n)},i.prototype.removeHandler=function(n){for(var e=0,t=this.fns.length;t>e;e++){var r=this.fns[e];if(n==r)return this.fns.splice(e,1),void 0}},i.prototype.run=function(n){for(var e=0,t=this.fns.length;t>e;e++)this.fns[e].apply(this,n)},i.prototype.match=function(n,e){var t=this.regex.exec(n);if(!t)return!1;for(var r=1,o=t.length;o>r;++r){var i=this.keys[r-1],a="string"==typeof t[r]?decodeURIComponent(t[r]):t[r];i&&(this.params[i.name]=a),e.push(a)}return!0},i.prototype.toURL=function(n){var e=this.path;for(var t in n)e=e.replace("/:"+t,"/"+n[t]);if(e=e.replace(/\/:.*\?/g,"/").replace(/\?/g,""),-1!=e.indexOf(":"))throw Error("missing parameters for url: "+e);return e};var a=function(n,e,t,r){return n instanceof RegExp?n:(n instanceof Array&&(n="("+n.join("|")+")"),n=n.concat(r?"":"/?").replace(/\/\(/g,"(?:/").replace(/\+/g,"__plus__").replace(/(\/)?(\.)?:(\w+)(?:(\(.*?\)))?(\?)?/g,function(n,t,r,o,i,a){return e.push({name:o,optional:!!a}),t=t||"",""+(a?"":t)+"(?:"+(a?t:"")+(r||"")+(i||r&&"([^/.]+?)"||"([^/]+?)")+")"+(a||"")}).replace(/([\/.])/g,"\\$1").replace(/__plus__/g,"(.+)").replace(/\*/g,"(.*)"),RegExp("^"+n+"$",t?"":"i"))},s=function(n,r){var o=n.split(" "),a=2==o.length?o[0]:null;n=2==o.length?o[1]:o[0],t[n]||(t[n]=new i(n,a),e.push(t[n])),t[n].addHandler(r)},h=function(n,e){if("function"==typeof e)s(n,e),h.reload();else if("object"==typeof n){for(var t in n)s(t,n[t]);h.reload()}else e===void 0&&h.navigate(n)};h.lookup=function(n,t){for(var r=0,o=e.length;o>r;r++){var i=e[r];if(i.name==n)return i.toURL(t)}},h.remove=function(n,e){var r=t[n];r&&r.removeHandler(e)},h.removeAll=function(){t={},e=[]},h.navigate=function(n,e){e=e||{};var t=e.silent||!1;t&&l(),setTimeout(function(){window.location.hash=n,t&&setTimeout(function(){p()},1)},1)},h.noConflict=function(){return n[r]=o,h};var f=function(){return window.location.hash.substring(1)},c=function(n,e){var t=[];return e.match(n,t)?(e.run(t),!0):!1},u=h.reload=function(){for(var n=f(),t=0,r=e.length;r>t;t++){var o=e[t];if(c(n,o))return}},p=function(){n.addEventListener?n.addEventListener("hashchange",u,!1):n.attachEvent("onhashchange",u)},l=function(){n.removeEventListener?n.removeEventListener("hashchange",u):n.detachEvent("onhashchange",u)};p(),n[r]=h})(window);

var thumbs     = $('.thumb'),
    $body      = $(document.body),
    bodyHeight = $(window).height();

$(window).scroll(function () {
    $.each(thumbs, function(index, thumb){
        if ((getRotationDegrees($(thumb)) >= 20) || (getRotationDegrees($(thumb)) <= -20)){   
            return;
        } else {
            $(thumb).css({
                'transform': 'rotate(' + (getRotationDegrees($(thumb)) + ($body.scrollTop()/200)) + 'deg)'
            })
        }
    })
});

var getRotationDegrees = function(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
}

var hideAll = function(){
    $('#content0, #content1, #content2, #content3, #content4, #content5').hide();
}

// TODO: Cleanup
$("input[name='tabs']").change(function(e){
    hideAll();
    var val = $(this).val();
    var tabVal = 'label[for="tab' + val + '"]';
    $('#content'+val).show();
    var tabStr = 'label[for="tab' + val;
    var label = $(tabStr + '"]')[0];
    console.log(label);
    window.history.pushState("object or string", "Title", "#"+label.innerHTML);
});

$(window).ready(function() {
    $('#content1, #content2, #content3, #content4, #content5').hide();
    //Routing
    routie({
            'Readership': function() {
                hideAll();
                $('#content0').show();
                document.getElementById("tab0").checked = true;
            },
            'Publications': function() {
                hideAll();
                $('#content1').show();
                document.getElementById("tab1").checked = true;
            },
            'Submission': function() {
                hideAll();
                $('#content2').show();
                document.getElementById("tab2").checked = true;
            },
            'Policies': function() {
                hideAll();
                $('#content3').show();
                document.getElementById("tab3").checked = true;
            },
            'Sizes': function() {
                hideAll();
                $('#content4').show();
                document.getElementById("tab4").checked = true;
            },
            'Rates': function() {
                hideAll();
                $('#content5').show();
                document.getElementById("tab5").checked = true;
            }
            
    });
})