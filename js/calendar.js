function n_getShortText(a, b) {
    if (a) {
        var c = a.split(" ");
        return c.length > b ? c.slice(0, b).join(" ") + " ..." : a
    }
    return ""
}

function n_changedate(btn, layout) {
    "prevyr" == btn ? eval("n_yearNum_" + layout + "--;") : "nextyr" == btn ? eval("n_yearNum_" + layout + "++;") : "prevmo" == btn ? eval("n_monthNum_" + layout + "--;") : "nextmo" == btn ? eval("n_monthNum_" + layout + "++;") : "current" == btn && (eval("n_monthNum_" + layout + " = n_todaysMonth;"), eval("n_yearNum_" + layout + " = n_todaysYear;")), 0 == n_monthNum_full ? (n_monthNum_full = 12, n_yearNum_full--) : 13 == n_monthNum_full && (n_monthNum_full = 1, n_yearNum_full++), 0 == n_monthNum_compact ? (n_monthNum_compact = 12, n_yearNum_compact--) : 13 == n_monthNum_compact && (n_monthNum_compact = 1, n_yearNum_compact++), eval("n_firstDate = new Date(n_yearNum_" + layout + ", n_monthNum_" + layout + " - 1, 1);"), n_firstDay = "sunday" == n_date_start ? n_firstDate.getDay() + 1 : n_firstDate.getDay(), eval("n_lastDate = new Date(n_yearNum_" + layout + ", n_monthNum_" + layout + ", 0);"), n_numbDays = n_lastDate.getDate(), eval("n_createCalendar(layout, n_firstDay, n_numbDays, n_monthNum_" + layout + ", n_yearNum_" + layout + ");")
}

function n_createCalendar(a, b, c, d, e) {
    n_calendarString = "", n_daycounter = 0, n_calendarString += '<table class="calendar-table table table-bordered">', n_calendarString += "<tbody>", n_calendarString += "<tr>", "full" == a ? (n_calendarString += '<td class="calendar-btn"><span onClick="n_changedate(\'prevyr\', \'full\')">« <span class="btn-change-date">' + n_prev_year + "</span></span></td>", n_calendarString += '<td class="calendar-btn"><span onClick="n_changedate(\'prevmo\', \'full\')">« <span class="btn-change-date">' + n_prev_month + "</span></span></td>", n_calendarString += '<td class="calendar-title" colspan="3"><span><i class="fa fa-calendar-o"></i>' + n_wordMonth[d - 1] + "&nbsp;&nbsp;" + e + "</span></td>", n_calendarString += '<td class="calendar-btn"><span onClick="n_changedate(\'nextmo\', \'full\')"><span class="btn-change-date">' + n_next_month + "</span> »</span></td>", n_calendarString += '<td class="calendar-btn"><span onClick="n_changedate(\'nextyr\', \'full\')"><span class="btn-change-date">' + n_next_year + "</span> »</span></td>") : (n_calendarString += "<td class=\"calendar-btn\"><span onClick=\"n_changedate('prevyr', 'compact')\">«</span></td>", n_calendarString += "<td class=\"calendar-btn\"><span onClick=\"n_changedate('prevmo', 'compact')\">«</span></td>", n_calendarString += '<td class="calendar-title" colspan="3"><span>' + n_wordMonth[d - 1] + "&nbsp;&nbsp;" + e + "</span></td>", n_calendarString += "<td class=\"calendar-btn\"><span onClick=\"n_changedate('nextmo', 'compact')\">»</span></td>", n_calendarString += "<td class=\"calendar-btn\"><span onClick=\"n_changedate('nextyr', 'compact')\">»</span></td>"), n_calendarString += "</tr>", n_calendarString += '<tr class="active">';
    for (var f = 0; f < n_wordDay.length; f++) n_calendarString += "<th>" + n_wordDay[f].substring(0, 3) + "</th>";
    n_calendarString += "</tr>";
    for (var g = 1; g <= 6; g++) {
        if (7 * (g - 1) + 1 < b + c) {
            n_calendarString += "<tr>";
            for (var i = 1; i <= 7; i++)
                if (n_daycounter = n_thisDate - b + 1, n_thisDate++, n_daycounter > c || n_daycounter < 1) n_calendarString += '<td class="calendar-day-blank">&nbsp;</td>';
                else {
                    if (n_daycounter_s = "sunday" == n_date_start ? 1 == i || 7 == i ? '<span class="calendar-day-weekend">' + n_daycounter + "</span>" : n_daycounter : 6 == i || 7 == i ? '<span class="calendar-day-weekend">' + n_daycounter + "</span>" : n_daycounter, n_calendarString += n_todaysDate == n_daycounter && n_todaysMonth == d ? '<td class="calendar-day-normal calendar-day-today">' : '<td class="calendar-day-normal">', n_checkEvents(n_daycounter, d, e)) {
                        if (n_calendarString += "full" == a ? '<div class="calendar-day-event">' : '<div class="calendar-day-event" onmouseover="n_showTooltip(0, \'compact\', ' + n_daycounter + ", " + d + ", " + e + ", this)\" onmouseout=\"n_clearTooltip('compact', this)\" onclick=\"n_showEventDetail(0, 'compact', " + n_daycounter + ", " + d + ", " + e + ')">', n_calendarString += n_daycounter_s, "full" == a)
                            for (var j = n_getEvents(n_daycounter, d, e), k = 0; k < j.length; k++)
                                if (void 0 !== j[k]) {
                                    var l = j[k].id % 4 + 1,
                                        m = "one-day";
                                    j[k].first_day && !j[k].last_day ? m = "first-day" : j[k].last_day && !j[k].first_day ? m = "last-day" : j[k].first_day || j[k].last_day || (m = "middle-day"), n_calendarString += '<div class="calendar-event-name ' + m + " color-" + l + '" id="' + j[k].id + '" onmouseover="n_showTooltip(' + j[k].id + ", 'full', " + n_daycounter + ", " + d + ", " + e + ', this)" onmouseout="n_clearTooltip(\'full\', this)" onclick="n_showEventDetail(' + j[k].id + ", 'full', " + n_daycounter + ", " + d + ", " + e + ')"><span class="event-name">' + n_getShortText(j[k].name, 2) + "</span></div>"
                                } else {
                                    var n;
                                    n = void 0 !== j[k + 1] && void 0 !== n_tiva_events[j[k + 1].id - 1] ? n_getShortText(n_tiva_events[j[k + 1].id - 1].name, 2) : "no-name", n_calendarString += '<div class="calendar-event-name no-name">' + n + "</div>"
                                } else n_calendarString += '<span class="calendar-event-mark"></span>';
                        n_calendarString += '<div class="n-tiva-event-tooltip"></div>', n_calendarString += "</div>"
                    } else n_calendarString += n_daycounter_s;
                    n_calendarString += "</td>"
                }
            n_calendarString += "</tr>"
        }
    }
    n_calendarString += "</tbody>", n_calendarString += "</table>", "full" == a ? jQuery(".n-tiva-calendar-full").html(n_calendarString) : jQuery(".n-tiva-calendar-compact").html(n_calendarString), n_thisDate = 1
}

function n_checkEvents(a, b, c) {
    n_numevents = 0;
    for (var d = new Date(c, Number(b) - 1, a), e = 0; e < n_tiva_events.length; e++) {
        var f = new Date(n_tiva_events[e].year, Number(n_tiva_events[e].month) - 1, n_tiva_events[e].day),
            g = new Date(n_tiva_events[e].year, Number(n_tiva_events[e].month) - 1, Number(n_tiva_events[e].day) + Number(n_tiva_events[e].duration) - 1);
        f.getTime() <= d.getTime() && d.getTime() <= g.getTime() && n_numevents++
    }
    return 0 != n_numevents
}

function n_getOrderNumber(a, b, c, d) {
    for (var e = new Date(d, Number(c) - 1, b), f = [], g = 0; g < n_tiva_events.length; g++) {
        var h = new Date(n_tiva_events[g].year, Number(n_tiva_events[g].month) - 1, n_tiva_events[g].day),
            i = new Date(n_tiva_events[g].year, Number(n_tiva_events[g].month) - 1, Number(n_tiva_events[g].day) + Number(n_tiva_events[g].duration) - 1);
        if (h.getTime() <= e.getTime() && e.getTime() <= i.getTime()) {
            var j = h.getTime() == e.getTime(),
                k = {
                    id: n_tiva_events[g].id,
                    name: n_tiva_events[g].name,
                    day: n_tiva_events[g].day,
                    month: n_tiva_events[g].month,
                    year: n_tiva_events[g].year,
                    first_day: j
                };
            f.push(k)
        }
    }
    if (f.length) {
        if (f[0].id == a) {
            var l = n_order_num;
            return n_order_num = 0, l
        }
        n_order_num++;
        for (var m = 0; m < f.length; m++)
            if (f[m].id == a) return n_getOrderNumber(f[m - 1].id, f[m - 1].day, f[m - 1].month, f[m - 1].year)
    }
    return 0
}

function n_getEvents(a, b, c) {
    for (var d = 0, e = new Date(c, Number(b) - 1, a), f = [], g = 0; g < n_tiva_events.length; g++) {
        var h = new Date(n_tiva_events[g].year, Number(n_tiva_events[g].month) - 1, n_tiva_events[g].day),
            i = new Date(n_tiva_events[g].year, Number(n_tiva_events[g].month) - 1, Number(n_tiva_events[g].day) + Number(n_tiva_events[g].duration) - 1);
        if (h.getTime() <= e.getTime() && e.getTime() <= i.getTime()) {
            var j = h.getTime() == e.getTime(),
                k = i.getTime() == e.getTime(),
                l = {
                    id: n_tiva_events[g].id,
                    name: n_tiva_events[g].name,
                    first_day: j,
                    last_day: k
                };
            j || (d = n_getOrderNumber(n_tiva_events[g].id, n_tiva_events[g].day, n_tiva_events[g].month, n_tiva_events[g].year)), f[d] = l, d++
        }
    }
    return f
}

function n_showTooltip(a, b, c, d, e, f) {
    if ("full" == b) {
        if (n_tiva_events[a].image) var g = '<img src="' + n_tiva_events[a].image + '" alt="' + n_tiva_events[a].name + '" />';
        else var g = "";
        if (n_tiva_events[a].time) var h = '<div class="event-time">' + n_tiva_events[a].time + "</div>";
        else var h = "";
        var i = jQuery(f).parent().find(".calendar-event-name").index(f),
            j = jQuery(f).parent().find(".calendar-event-name").length,
            k = 32 + 25 * (j - i - 1);
        jQuery(f).parent().find(".n-tiva-event-tooltip").css("bottom", k + "px"), jQuery(f).parent().find(".n-tiva-event-tooltip").html('<div class="event-tooltip-item">' + h + '<div class="event-name">' + n_tiva_events[a].name + '</div><div class="event-image">' + g + '</div><div class="event-desc">' + n_getShortText(n_tiva_events[a].intro, 10) + "</div></div>"), jQuery(f).parent().find(".n-tiva-event-tooltip").css("opacity", "1"), jQuery(f).parent().find(".n-tiva-event-tooltip").css("-webkit-transform", "translate3d(0,0,0) rotate3d(0,0,0,0)"), jQuery(f).parent().find(".n-tiva-event-tooltip").css("transform", "translate3d(0,0,0) rotate3d(0,0,0,0)")
    } else {
        jQuery(f).find(".n-tiva-event-tooltip").html("");
        for (var l = n_getEvents(c, d, e), m = 0; m < l.length; m++)
            if (void 0 !== l[m]) {
                if (n_tiva_events[l[m].id].image) var g = '<img src="' + n_tiva_events[l[m].id].image + '" alt="' + n_tiva_events[l[m].id].name + '" />';
                else var g = "";
                if (n_tiva_events[l[m].id].time) var h = '<div class="event-time">' + n_tiva_events[l[m].id].time + "</div>";
                else var h = "";
                jQuery(f).find(".n-tiva-event-tooltip").append('<div class="event-tooltip-item">' + h + '<div class="event-name">' + n_tiva_events[l[m].id].name + '</div><div class="event-image">' + g + '</div><div class="event-desc">' + n_getShortText(n_tiva_events[l[m].id].intro, 10) + "</div></div>")
            }
        jQuery(f).find(".n-tiva-event-tooltip").css("opacity", "1"), jQuery(f).find(".n-tiva-event-tooltip").css("-webkit-transform", "translate3d(0,0,0) rotate3d(0,0,0,0)"), jQuery(f).find(".n-tiva-event-tooltip").css("transform", "translate3d(0,0,0) rotate3d(0,0,0,0)")
    }
}

function n_clearTooltip(a, b) {
    "full" == a ? (jQuery(b).parent().find(".n-tiva-event-tooltip").css("opacity", "0"), jQuery(b).parent().find(".n-tiva-event-tooltip").css("-webkit-transform", "translate3d(0,-10px,0)"), jQuery(b).parent().find(".n-tiva-event-tooltip").css("transform", "translate3d(0,-10px,0)")) : (jQuery(b).find(".n-tiva-event-tooltip").css("opacity", "0"), jQuery(b).find(".n-tiva-event-tooltip").css("-webkit-transform", "translate3d(0,-10px,0)"), jQuery(b).find(".n-tiva-event-tooltip").css("transform", "translate3d(0,-10px,0)"))
}

function n_showEventList(a) {
    if ("full" == a) {
        jQuery(".n-tiva-event-list-full").html("");
        for (var b = n_tiva_events.length - 1; b >= 0; b--) {
            var c = new Date(n_tiva_events[b].year, Number(n_tiva_events[b].month) - 1, n_tiva_events[b].day);
            if ("sunday" == n_date_start) var d = n_wordDay[c.getDay()];
            else if (c.getDay() > 0) var d = n_wordDay[c.getDay() - 1];
            else var d = n_wordDay[6];
            var e = n_wordMonth[Number(n_tiva_events[b].month) - 1] + " " + n_tiva_events[b].day + ", " + n_tiva_events[b].year,
                f = "";
            if (n_tiva_events[b].duration > 1) {
                var g = n_tiva_events[b].end_date.split("-"),
                    h = new Date(g[2], g[1] - 1, g[0]);
                if ("sunday" == n_date_start) var i = n_wordDay[h.getDay()];
                else if (h.getDay() > 0) var i = n_wordDay[h.getDay() - 1];
                else var i = n_wordDay[6];
                var j = n_wordMonth[Number(g[1]) - 1] + " " + g[0] + ", " + g[2];
                f = " - " + i + ", " + j
            }
            if (n_tiva_events[b].image) var k = '<img src="' + n_tiva_events[b].image + '" alt="' + n_tiva_events[b].name + '" />';
            else var k = "";
            if (n_tiva_events[b].time) var l = '<i class="fa fa-clock-o"></i>' + n_tiva_events[b].time;
            else var l = "";
            jQuery(".n-tiva-event-list-full").append('<div class="event-item"><div class="event-item-left pull-left"><div class="event-image link" onclick="n_showEventDetail(' + b + ", 'full', 0, 0, 0)\">" + k + '</div></div><div class="event-item-right pull-left"><div class="event-name link" onclick="n_showEventDetail(' + b + ", 'full', 0, 0, 0)\">" + n_tiva_events[b].name + '</div><div class="event-date"><i class="fa fa-calendar-o"></i>' + d + ", " + e + f + '</div><div class="event-time">' + l + '</div><div class="event-desc">' + n_getShortText(n_tiva_events[b].intro, 25) + '</div></div></div><div class="cleardiv"></div>')
        }
    } else {
        jQuery(".n-tiva-event-list-compact").html("");
        for (var b = n_tiva_events.length - 1; b >= 0; b--) {
            var c = new Date(n_tiva_events[b].year, Number(n_tiva_events[b].month) - 1, n_tiva_events[b].day);
            if ("sunday" == n_date_start) var d = n_wordDay[c.getDay()];
            else if (c.getDay() > 0) var d = n_wordDay[c.getDay() - 1];
            else var d = n_wordDay[6];
            var e = n_wordMonth[Number(n_tiva_events[b].month) - 1] + " " + n_tiva_events[b].day + ", " + n_tiva_events[b].year,
                f = "";
            if (n_tiva_events[b].duration > 1) {
                var g = n_tiva_events[b].end_date.split("-"),
                    h = new Date(g[2], g[1] - 1, g[0]);
                if ("sunday" == n_date_start) var i = n_wordDay[h.getDay()];
                else if (h.getDay() > 0) var i = n_wordDay[h.getDay() - 1];
                else var i = n_wordDay[6];
                var j = n_wordMonth[Number(g[1]) - 1] + " " + g[0] + ", " + g[2];
                f = " - " + i + ", " + j
            }
            if (n_tiva_events[b].image) var k = '<img src="' + n_tiva_events[b].image + '" alt="' + n_tiva_events[b].name + '" />';
            else var k = "";
            if (n_tiva_events[b].time) var l = '<i class="fa fa-clock-o"></i>' + n_tiva_events[b].time;
            else var l = "";
            jQuery(".n-tiva-event-list-compact").append('<div class="event-block"><div class="event-item"><div class="event-itimg"><div class="event-image link" onclick="n_showEventDetail(' + b + ", 'compact', 0, 0, 0)\">" + k + '</div></div><div class="event-itsec"><div class="event-name link" onclick="n_showEventDetail(' + b + ", 'compact', 0, 0, 0)\">" + n_tiva_events[b].name + '</div><div class="event-date"><i class="fa fa-calendar-o"></i>' + d + ", " + e + f + '</div><div class="event-time">' + l + '</div><div class="event-desc">' + n_getShortText(n_tiva_events[b].intro, 15) + '</div></div></div></div><div class="cleardiv"></div>')
        }
    }
}

function n_showEventDetail(a, b, c, d, e) {
    if (jQuery(".tiva-events-calendar." + b + " .n-back-calendar").show(), jQuery(".tiva-events-calendar." + b + " .n-tiva-calendar").hide(), jQuery(".tiva-events-calendar." + b + " .n-tiva-event-list").hide(), jQuery(".tiva-events-calendar." + b + " .n-tiva-event-detail").fadeIn(1500), jQuery(".tiva-events-calendar." + b + " .n-list-view").removeClass("active"), jQuery(".tiva-events-calendar." + b + " .n-calendar-view").removeClass("active"), "full" == b) {
        var c = new Date(n_tiva_events[a].year, Number(n_tiva_events[a].month) - 1, n_tiva_events[a].day);
        if ("sunday" == n_date_start) var f = n_wordDay[c.getDay()];
        else if (c.getDay() > 0) var f = n_wordDay[c.getDay() - 1];
        else var f = n_wordDay[6];
        var g = n_wordMonth[Number(n_tiva_events[a].month) - 1] + " " + n_tiva_events[a].day + ", " + n_tiva_events[a].year,
            h = "";
        if (n_tiva_events[a].duration > 1) {
            var i = n_tiva_events[a].end_date.split("-"),
                j = new Date(i[2], i[1] - 1, i[0]);
            if ("sunday" == n_date_start) var k = n_wordDay[j.getDay()];
            else if (j.getDay() > 0) var k = n_wordDay[j.getDay() - 1];
            else var k = n_wordDay[6];
            var l = n_wordMonth[Number(i[1]) - 1] + " " + i[0] + ", " + i[2];
            h = " - " + k + ", " + l
        }
        if (n_tiva_events[a].image) var m = '<img src="' + n_tiva_events[a].image + '" alt="' + n_tiva_events[a].name + '" />';
        else var m = "";
        if (n_tiva_events[a].time) var n = '<i class="fa fa-clock-o"></i>' + n_tiva_events[a].time;
        else var n = "";
        if (n_tiva_events[a].location) var o = '<i class="fa fa-map-marker"></i>' + n_tiva_events[a].location;
        else var o = "";
        if (n_tiva_events[a].description) var p = '<div class="event-desc">' + n_tiva_events[a].description + "</div>";
        else var p = "";
        if (n_tiva_events[a].latitude && n_tiva_events[a].longitude) var q = '<div class="event-map"><iframe width="100%" height="300px" frameborder="0" src="//maps.google.com/maps?q=' + n_tiva_events[a].latitude + "," + n_tiva_events[a].longitude + '&hl=es;z=18&amp;output=embed"></iframe></div>';
        else var q = "";
        jQuery(".n-tiva-event-detail-full").html('<div class="event-item"><div class="event-image">' + m + '</div><div class="event-name">' + n_tiva_events[a].name + '</div><div class="event-date"><i class="fa fa-calendar-o"></i>' + f + ", " + g + h + '</div><div class="event-time">' + n + '</div><div class="event-location">' + o + "</div>" + p + '<div class="event-link"><a href="https://www.facebook.com/events/' + n_tiva_events[a].event_id + '" target="_blank"><i class="fa fa-eye"></i>' + view_on_facebook + "</a></div>" + q + "</div>")
    } else {
        if (jQuery(".n-tiva-event-detail-compact").html(""), c && d && e) var r = n_getEvents(c, d, e);
        else var r = [{
            id: a
        }];
        for (var s = 0; s < r.length; s++)
            if (void 0 !== r[s]) {
                var c = new Date(n_tiva_events[r[s].id].year, Number(n_tiva_events[r[s].id].month) - 1, n_tiva_events[r[s].id].day);
                if ("sunday" == n_date_start) var f = n_wordDay[c.getDay()];
                else if (c.getDay() > 0) var f = n_wordDay[c.getDay() - 1];
                else var f = n_wordDay[6];
                var g = n_wordMonth[Number(n_tiva_events[r[s].id].month) - 1] + " " + n_tiva_events[r[s].id].day + ", " + n_tiva_events[r[s].id].year,
                    h = "";
                if (n_tiva_events[r[s].id].duration > 1) {
                    var i = n_tiva_events[r[s].id].end_date.split("-"),
                        j = new Date(i[2], i[1] - 1, i[0]);
                    if ("sunday" == n_date_start) var k = n_wordDay[j.getDay()];
                    else if (j.getDay() > 0) var k = n_wordDay[j.getDay() - 1];
                    else var k = n_wordDay[6];
                    var l = n_wordMonth[Number(i[1]) - 1] + " " + i[0] + ", " + i[2];
                    h = " - " + k + ", " + l
                }
                if (n_tiva_events[r[s].id].image) var m = '<img src="' + n_tiva_events[r[s].id].image + '" alt="' + n_tiva_events[r[s].id].name + '" />';
                else var m = "";
                if (n_tiva_events[r[s].id].time) var n = '<i class="fa fa-clock-o"></i>' + n_tiva_events[r[s].id].time;
                else var n = "";
                if (n_tiva_events[r[s].id].location) var o = '<i class="fa fa-map-marker"></i>' + n_tiva_events[r[s].id].location;
                else var o = "";
                if (n_tiva_events[r[s].id].description) var p = '<div class="event-desc">' + n_tiva_events[r[s].id].description + "</div>";
                else var p = "";
                if (n_tiva_events[r[s].id].latitude && n_tiva_events[r[s].id].longitude) var q = '<div class="event-map"><iframe width="100%" height="300px" frameborder="0" src="https://maps.google.com/maps?q=' + n_tiva_events[r[s].id].latitude + "," + n_tiva_events[r[s].id].longitude + '&hl=es;z=18&amp;output=embed"></iframe></div>';
                else var q = "";
                jQuery(".n-tiva-event-detail-compact").append('<div class="event-item"><div class="event-image">' + m + '</div><div class="event-name">' + n_tiva_events[r[s].id].name + '</div><div class="event-date"><i class="fa fa-calendar-o"></i>' + f + ", " + g + h + '</div><div class="event-time">' + n + '</div><div class="event-location">' + o + "</div>" + p + '<div class="event-link"><a href="https://www.facebook.com/events/' + n_tiva_events[r[s].id].event_id + '" target="_blank"><i class="fa fa-eye"></i>' + view_on_facebook + "</a></div>" + q + "</div>")
            }
    }
}

function n_sortEventsByDate(a, b) {
    return b.date < a.date ? -1 : b.date > a.date ? 1 : 0
}
var n_wordMonth = new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"),
    n_wordDay_sun = "Sonntag",
    n_wordDay_mon = "Montag",
    n_wordDay_tue = "Dienstag",
    n_wordDay_wed = "Mittwoch",
    n_wordDay_thu = "Donnerstag",
    n_wordDay_fri = "Freitag",
    n_wordDay_sat = "Samstag",
    n_calendar_view = "Kalender",
    n_list_view = "Liste",
    n_back = "Zurück",
    n_prev_year = "Prev Year",
    n_prev_month = "Prev Month",
    n_next_month = "Next Month",
    n_next_year = "Next Year",
    view_on_facebook = "Zum Facebook Event",
    n_thisDate = 1,
    n_today = new Date,
    n_todaysDay = n_today.getDay() + 1,
    n_todaysDate = n_today.getDate(),
    n_todaysMonth = n_today.getMonth() + 1,
    n_todaysYear = n_today.getFullYear(),
    n_firstDate, n_firstDay, n_lastDate, n_numbDays, n_numevents = 0,
    n_daycounter = 0,
    n_calendarString = "",
    n_monthNum_full = n_todaysMonth,
    n_yearNum_full = n_todaysYear,
    n_monthNum_compact = n_todaysMonth,
    n_yearNum_compact = n_todaysYear,
    n_tiva_events = [],
    n_order_num = 0,
    n_wordDay, n_date_start;
jQuery(document).ready(function() {
    jQuery(".tiva-events-calendar.full").length && jQuery(".tiva-events-calendar.full").html('<div class="n-events-calendar-bar"><span class="bar-btn n-calendar-view active"><i class="fa fa-calendar-o"></i>' + n_calendar_view + '</span><span class="bar-btn n-list-view"><i class="fa fa-list"></i>' + n_list_view + '</span><span class="bar-btn n-back-calendar pull-right active"><i class="fa fa-caret-left"></i>' + n_back + '</span></div><div class="cleardiv"></div><div class="n-tiva-events-calendar-wrap"><div class="n-tiva-calendar-full n-tiva-calendar"></div><div class="n-tiva-event-list-full n-tiva-event-list"></div><div class="n-tiva-event-detail-full n-tiva-event-detail"></div></div>'), jQuery(".tiva-events-calendar.compact").length && jQuery(".tiva-events-calendar.compact").html('<div class="n-events-calendar-bar"><span class="bar-btn n-calendar-view active"><i class="fa fa-calendar-o"></i>' + n_calendar_view + '</span><span class="bar-btn n-list-view"><i class="fa fa-list"></i>' + n_list_view + '</span><span class="bar-btn n-back-calendar pull-right active"><i class="fa fa-caret-left"></i>' + n_back + '</span></div><div class="cleardiv"></div><div class="n-tiva-events-calendar-wrap"><div class="n-tiva-calendar-compact n-tiva-calendar"></div><div class="n-tiva-event-list-compact n-tiva-event-list"></div><div class="n-tiva-event-detail-compact n-tiva-event-detail"></div></div>'), jQuery(".tiva-events-calendar .n-back-calendar").hide(), jQuery(".n-tiva-event-list").hide(), jQuery(".n-tiva-event-detail").hide(), jQuery(".tiva-events-calendar").each(function(a) {
        "hide" == (void 0 !== jQuery(this).attr("data-switch") ? jQuery(this).attr("data-switch") : "show") && (jQuery(this).find(".n-calendar-view").hide(), jQuery(this).find(".n-list-view").hide(), jQuery(this).find(".n-events-calendar-bar").css("position", "relative"), jQuery(this).find(".n-back-calendar").css({
            position: "absolute",
            "margin-top": "15px",
            right: "15px"
        }), jQuery(this).find(".n-tiva-event-detail").css("padding-top", "60px"))
    }), n_date_start = void 0 !== jQuery(".tiva-events-calendar").attr("data-start") ? jQuery(".tiva-events-calendar").attr("data-start") : "sunday", n_wordDay = "sunday" == n_date_start ? new Array(n_wordDay_sun, n_wordDay_mon, n_wordDay_tue, n_wordDay_wed, n_wordDay_thu, n_wordDay_fri, n_wordDay_sat) : new Array(n_wordDay_mon, n_wordDay_tue, n_wordDay_wed, n_wordDay_thu, n_wordDay_fri, n_wordDay_sat, n_wordDay_sun), jQuery.ajax({
        url: "include/eventscalendar.php",
        dataType: "json",
        data: "",
        beforeSend: function() {
            jQuery(".n-tiva-calendar").html('<div class="loading"><div class="tb-preloader-wave"></div></div>')
        },
        success: function(a) {
            for (var b = 0; b < a.length; b++) {
                var c = new Date(a[b].year, Number(a[b].month) - 1, a[b].day);
                a[b].date = c.getTime(), n_tiva_events.push(a[b])
            }
            n_tiva_events.sort(n_sortEventsByDate);
            for (var d = 0; d < n_tiva_events.length; d++) n_tiva_events[d].id = d, n_tiva_events[d].duration || (n_tiva_events[d].duration = 1);
            n_changedate("current", "full"), n_changedate("current", "compact"), jQuery(".tiva-events-calendar").each(function(a) {
                "list" == (void 0 !== jQuery(this).attr("data-view") ? jQuery(this).attr("data-view") : "calendar") && jQuery(this).find(".n-list-view").click()
            })
        }
    }), jQuery(".tiva-events-calendar .n-calendar-view").click(function() {
        jQuery(this).parents(".tiva-events-calendar").find(".n-back-calendar").hide(), jQuery(this).parents(".tiva-events-calendar").find(".n-tiva-event-list").hide(), jQuery(this).parents(".tiva-events-calendar").find(".n-tiva-event-detail").hide(), jQuery(this).parents(".tiva-events-calendar").find(".n-tiva-calendar").fadeIn(1500), jQuery(this).parents(".tiva-events-calendar").find(".n-list-view").removeClass("active"), jQuery(this).parents(".tiva-events-calendar").find(".n-calendar-view").addClass("active")
    }), jQuery(".tiva-events-calendar .n-list-view").click(function() {
        jQuery(this).parents(".tiva-events-calendar").find(".n-back-calendar").hide(), jQuery(this).parents(".tiva-events-calendar").find(".n-tiva-calendar").hide(), jQuery(this).parents(".tiva-events-calendar").find(".n-tiva-event-detail").hide(), jQuery(this).parents(".tiva-events-calendar").find(".n-tiva-event-list").fadeIn(1500), jQuery(this).parents(".tiva-events-calendar").find(".n-calendar-view").removeClass("active"), jQuery(this).parents(".tiva-events-calendar").find(".n-list-view").addClass("active"), n_showEventList(-1 != jQuery(this).parents(".tiva-events-calendar").attr("class").indexOf("full") ? "full" : "compact")
    }), jQuery(".tiva-events-calendar .n-back-calendar").click(function() {
        jQuery(this).parents(".tiva-events-calendar").find(".n-back-calendar").hide(), jQuery(this).parents(".tiva-events-calendar").find(".n-tiva-event-detail").hide(), "calendar" == (void 0 !== jQuery(this).parents(".tiva-events-calendar").attr("data-view") ? jQuery(this).parents(".tiva-events-calendar").attr("data-view") : "calendar") ? (jQuery(this).parents(".tiva-events-calendar").find(".n-tiva-calendar").fadeIn(1500), jQuery(this).parents(".tiva-events-calendar").find(".n-list-view").removeClass("active"), jQuery(this).parents(".tiva-events-calendar").find(".n-calendar-view").addClass("active")) : (jQuery(this).parents(".tiva-events-calendar").find(".n-tiva-event-list").fadeIn(1500), jQuery(this).parents(".tiva-events-calendar").find(".n-calendar-view").removeClass("active"), jQuery(this).parents(".tiva-events-calendar").find(".n-list-view").addClass("active"))
    })
});