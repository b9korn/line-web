!function () {
  try {
    var e = "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
      t = (new Error()).stack;
    t &&
      (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "12130acf-2ef9-438a-80d2-9afd4491883b",
        e._sentryDebugIdIdentifier =
          "sentry-dbid-12130acf-2ef9-438a-80d2-9afd4491883b");
  } catch (e) {}
}();
var _global = "undefined" !== typeof window
  ? window
  : "undefined" !== typeof global
  ? global
  : "undefined" !== typeof self
  ? self
  : {};
_global.SENTRY_RELEASE = { id: "line-chrome@3.5.1" },
  (globalThis.webpackChunkline_chrome = globalThis.webpackChunkline_chrome ||
    []).push([[970], {
      88970: (e, t, o) => {
        o.r(t), o.d(t, { default: () => a });
        const a = {
          "abuse.report.sent.data.notice.chat_selected":
            "\u60a8\u6240\u6aa2\u8209\u7684\u8a0a\u606f\u3001\u8a72\u8a0a\u606f\u524d\u5f8c\u4e92\u50b3\u7684\u6700\u591a9\u5247\u8a0a\u606f\u3001\u88ab\u6aa2\u8209\u7528\u6236\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u3001\u500b\u4eba\u5716\u7247\u548c\u72c0\u614b\u6d88\u606f\u7b49\uff09\u4ee5\u53ca\u60a8\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u548c\u500b\u4eba\u5716\u7247\u7b49\uff09\u3002",
          "abuse.report.sent.data.notice.direct_chat":
            "\u804a\u5929\u5ba4\u6700\u8fd1\u4e92\u50b3\u768410\u5247\u8a0a\u606f\u3001\u88ab\u6aa2\u8209\u7528\u6236\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u3001\u500b\u4eba\u5716\u7247\u548c\u72c0\u614b\u6d88\u606f\u7b49\uff09\u4ee5\u53ca\u60a8\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u548c\u500b\u4eba\u5716\u7247\u7b49\uff09\u3002",
          "abuse.report.sent.data.notice.direct_invitation":
            "\u804a\u5929\u5ba4\u6700\u8fd1\u4e92\u50b3\u768410\u5247\u8a0a\u606f\u3001\u88ab\u6aa2\u8209\u7528\u6236\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u3001\u500b\u4eba\u5716\u7247\u548c\u72c0\u614b\u6d88\u606f\u7b49\uff09\u4ee5\u53ca\u60a8\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u548c\u500b\u4eba\u5716\u7247\u7b49\uff09\u3002",
          "abuse.report.sent.data.notice.friend_profile":
            "\u88ab\u6aa2\u8209\u7528\u6236\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u3001\u500b\u4eba\u5716\u7247\u548c\u72c0\u614b\u6d88\u606f\u7b49\uff09\u4ee5\u53ca\u60a8\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u548c\u500b\u4eba\u5716\u7247\u7b49\uff09\u3002",
          "abuse.report.sent.data.notice.group_chat":
            "\u7fa4\u7d44\u6700\u8fd1\u4e92\u50b3\u768410\u5247\u8a0a\u606f\u3001\u7fa4\u7d44\u8cc7\u8a0a\uff08\u5305\u62ec\u7fa4\u7d44\u540d\u7a31\u3001\u7fa4\u7d44\u5716\u7247\u548c\u9080\u8acb\u60a8\u52a0\u5165\u7fa4\u7d44\u7684\u6210\u54e1\u8cc7\u8a0a\u7b49\uff09\u4ee5\u53ca\u60a8\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u548c\u500b\u4eba\u5716\u7247\u7b49\uff09\u3002",
          "abuse.report.sent.data.notice.group_chat_selected":
            "\u60a8\u6240\u6aa2\u8209\u7684\u8a0a\u606f\u3001\u8a72\u8a0a\u606f\u524d\u5f8c\u4e92\u50b3\u7684\u81f3\u591a9\u5247\u8a0a\u606f\u3001\u7fa4\u7d44\u8cc7\u8a0a\uff08\u5305\u62ec\u7fa4\u7d44\u540d\u7a31\u3001\u7fa4\u7d44\u5716\u7247\u548c\u9080\u8acb\u60a8\u52a0\u5165\u7fa4\u7d44\u7684\u6210\u54e1\u8cc7\u8a0a\u7b49\uff09\u4ee5\u53ca\u60a8\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u548c\u500b\u4eba\u5716\u7247\u7b49\uff09\u3002",
          "abuse.report.sent.data.notice.group_invitation":
            "\u7fa4\u7d44\u6700\u8fd1\u4e92\u50b3\u768410\u5247\u8a0a\u606f\u3001\u7fa4\u7d44\u8cc7\u8a0a\uff08\u5305\u62ec\u7fa4\u7d44\u540d\u7a31\u3001\u7fa4\u7d44\u5716\u7247\u548c\u9080\u8acb\u60a8\u52a0\u5165\u7fa4\u7d44\u7684\u6210\u54e1\u8cc7\u8a0a\u7b49\uff09\u4ee5\u53ca\u60a8\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u548c\u500b\u4eba\u5716\u7247\u7b49\uff09\u3002",
          "abuse.report.sent.data.notice.note_comment":
            "\u88ab\u6aa2\u8209\u7684\u7559\u8a00\u3001\u6709\u8a72\u7559\u8a00\u7684\u8a18\u4e8b\u672c\u3001\u88ab\u6aa2\u8209\u7528\u6236\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u7b49\uff09\u4ee5\u53ca\u60a8\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u7b49\uff09\u3002",
          "abuse.report.sent.data.notice.note_post":
            "\u88ab\u6aa2\u8209\u7684\u8a18\u4e8b\u672c\u3001\u8a72\u8a18\u4e8b\u672c\u7684\u7559\u8a00\u3001\u88ab\u6aa2\u8209\u7528\u6236\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u7b49\uff09\u4ee5\u53ca\u60a8\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u7b49\uff09\u3002",
          "abuse.report.sent.data.notice.room_chat":
            "\u804a\u5929\u5ba4\u6700\u8fd1\u4e92\u50b3\u768410\u5247\u8a0a\u606f\u3001\u60a8\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u548c\u500b\u4eba\u5716\u7247\u7b49\uff09\u4ee5\u53ca\u804a\u5929\u5ba4\u8cc7\u8a0a\uff08\u5305\u62ec\u9080\u8acb\u60a8\u52a0\u5165\u804a\u5929\u5ba4\u7684\u6210\u54e1\u8cc7\u8a0a\u7b49\uff09\u3002",
          "abuse.report.sent.data.notice.room_chat_selected":
            "\u60a8\u6240\u6aa2\u8209\u7684\u8a0a\u606f\u3001\u8a72\u8a0a\u606f\u524d\u5f8c\u4e92\u50b3\u7684\u81f3\u591a9\u5247\u8a0a\u606f\u3001\u60a8\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u548c\u500b\u4eba\u5716\u7247\u7b49\uff09\u4ee5\u53ca\u804a\u5929\u5ba4\u8cc7\u8a0a\uff08\u5305\u62ec\u9080\u8acb\u60a8\u52a0\u5165\u804a\u5929\u5ba4\u7684\u6210\u54e1\u8cc7\u8a0a\u7b49\uff09\u3002",
          "abuse.report.sent.data.notice.room_invitation":
            "\u804a\u5929\u5ba4\u6700\u8fd1\u4e92\u50b3\u768410\u5247\u8a0a\u606f\u3001\u60a8\u7684\u8cc7\u8a0a\uff08\u5305\u62ec\u59d3\u540d\u548c\u500b\u4eba\u5716\u7247\u7b49\uff09\u4ee5\u53ca\u804a\u5929\u5ba4\u8cc7\u8a0a\uff08\u5305\u62ec\u9080\u8acb\u60a8\u52a0\u5165\u804a\u5929\u5ba4\u7684\u6210\u54e1\u8cc7\u8a0a\u7b49\uff09\u3002",
          "abuse.report.sent.data.notice.square.chat.selected":
            "\u60a8\u6aa2\u8209\u7684\u793e\u7fa4\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u793e\u7fa4\u540d\u7a31\u3001\u5c01\u9762\u7167\u7247\u3001\u6210\u54e1\u6578\u53ca\u793e\u7fa4\u8b58\u5225\u8cc7\u8a0a\uff09\u3001\u793e\u7fa4\u5167\u6700\u8fd1\u50b3\u9001\u7684100\u5247\u8a0a\u606f\u3001\u60a8\u7684\u8cc7\u8a0a\u4ee5\u53ca\u793e\u7fa4\u7ba1\u7406\u54e1\u7684\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u65bc\u793e\u7fa4\u5167\u4f7f\u7528\u7684\u66b1\u7a31\u53ca\u7528\u6236\u8b58\u5225\u8cc7\u8a0a\uff09\u3002",
          "abuse.report.sent.data.notice.square.member.selected":
            "\u60a8\u6aa2\u8209\u7684\u793e\u7fa4\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u793e\u7fa4\u540d\u7a31\u3001\u5c01\u9762\u7167\u7247\u53ca\u6210\u54e1\u6578\uff09\u3001\u793e\u7fa4\u5167\u6700\u8fd1\u50b3\u9001\u7684100\u5247\u8a0a\u606f\u3001\u60a8\u7684\u8cc7\u8a0a\u4ee5\u53ca\u88ab\u6aa2\u8209\u7528\u6236\u7684\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u88ab\u6aa2\u8209\u7528\u6236\u7684\u500b\u4eba\u5716\u7247\u3001\u65bc\u793e\u7fa4\u5167\u4f7f\u7528\u7684\u66b1\u7a31\u53ca\u7528\u6236\u8b58\u5225\u8cc7\u8a0a\uff09\u3002",
          "abuse.report.sent.data.notice.square.message.selected":
            "\u60a8\u6aa2\u8209\u7684\u804a\u5929\u5ba4\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u804a\u5929\u5ba4\u8b58\u5225\u8cc7\u8a0a\uff09\u3001\u60a8\u6aa2\u8209\u7684\u793e\u7fa4\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u793e\u7fa4\u540d\u7a31\u3001\u5c01\u9762\u7167\u7247\u3001\u6210\u54e1\u6578\u53ca\u793e\u7fa4\u8b58\u5225\u8cc7\u8a0a\uff09\u3001\u60a8\u6aa2\u8209\u7684\u8a0a\u606f\u53ca\u8a72\u8a0a\u606f\u524d\u768410\u5247\u8a0a\u606f\u3001\u60a8\u7684\u8cc7\u8a0a\u4ee5\u53ca\u88ab\u6aa2\u8209\u7528\u6236\u7684\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u88ab\u6aa2\u8209\u7528\u6236\u7684\u500b\u4eba\u5716\u7247\u3001\u65bc\u793e\u7fa4\u5167\u4f7f\u7528\u7684\u66b1\u7a31\u53ca\u7528\u6236\u8b58\u5225\u8cc7\u8a0a\uff09\u3002",
          "abuse.report.sent.data.notice.square.note.selected":
            "\u60a8\u6aa2\u8209\u7684\u8a18\u4e8b\u672c\u5167\u5bb9\uff08\u4f8b\uff1a\u6587\u5b57\u3001\u5716\u7247\u3001\u5f71\u7247\u3001\u8868\u60c5\u8cbc\u53ca\u8a18\u4e8b\u672c\u8b58\u5225\u8cc7\u8a0a\uff09\u3001\u793e\u7fa4\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u793e\u7fa4\u540d\u7a31\u3001\u5c01\u9762\u7167\u7247\u3001\u6210\u54e1\u6578\u53ca\u793e\u7fa4\u8b58\u5225\u8cc7\u8a0a\uff09\u3001\u60a8\u7684\u8cc7\u8a0a\u4ee5\u53ca\u88ab\u6aa2\u8209\u7528\u6236\u7684\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u88ab\u6aa2\u8209\u7528\u6236\u7684\u500b\u4eba\u5716\u7247\u3001\u53c3\u8207\u72c0\u6cc1\u3001\u65bc\u793e\u7fa4\u5167\u4f7f\u7528\u7684\u66b1\u7a31\u53ca\u7528\u6236\u8b58\u5225\u8cc7\u8a0a\uff09\u3002",
          "abuse.report.sent.data.notice.square.notecomment.selected":
            "\u60a8\u6aa2\u8209\u7684\u7559\u8a00\u8a73\u60c5\uff08\u4f8b\uff1a\u6587\u5b57\u3001\u5716\u7247\u3001\u8868\u60c5\u8cbc\u53ca\u7559\u8a00\u8b58\u5225\u8cc7\u8a0a\uff09\u3001\u793e\u7fa4\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u793e\u7fa4\u540d\u7a31\u3001\u5c01\u9762\u7167\u7247\u3001\u6210\u54e1\u6578\u53ca\u793e\u7fa4\u8b58\u5225\u8cc7\u8a0a\uff09\u3001\u60a8\u7684\u8cc7\u8a0a\u4ee5\u53ca\u88ab\u6aa2\u8209\u7528\u6236\u7684\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u88ab\u6aa2\u8209\u7528\u6236\u7684\u500b\u4eba\u5716\u7247\u3001\u53c3\u8207\u72c0\u6cc1\u3001\u65bc\u793e\u7fa4\u5167\u4f7f\u7528\u7684\u66b1\u7a31\u53ca\u7528\u6236\u8b58\u5225\u8cc7\u8a0a\uff09\u3002",
          "abuse.report.sent.data.notice.square.setting.selected":
            "\u60a8\u6aa2\u8209\u7684\u804a\u5929\u5ba4\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u804a\u5929\u5ba4\u540d\u7a31\u3001\u5c01\u9762\u7167\u7247\u3001\u6210\u54e1\u6578\u53ca\u804a\u5929\u5ba4\u8b58\u5225\u8cc7\u8a0a\uff09\u3001\u804a\u5929\u5ba4\u5167\u6700\u8fd1\u50b3\u9001\u768450\u5247\u8a0a\u606f\u3001\u60a8\u6aa2\u8209\u7684\u793e\u7fa4\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u793e\u7fa4\u8b58\u5225\u8cc7\u8a0a\uff09\u3001\u60a8\u7684\u8cc7\u8a0a\u4ee5\u53ca\u793e\u7fa4\u7ba1\u7406\u54e1\u7684\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u65bc\u793e\u7fa4\u5167\u4f7f\u7528\u7684\u66b1\u7a31\u53ca\u7528\u6236\u8b58\u5225\u8cc7\u8a0a\uff09\u3002",
          "abuse.report.sent.data.notice.template":
            "\u7576\u60a8\u9032\u884c\u6aa2\u8209\u6642\uff0c\u60a8\u6703\u5c07\u4e0b\u5217\u8cc7\u8a0a\u50b3\u9001\u7d66LY Corporation\u3002\u6211\u5011\u4f7f\u7528\u8a72\u7b46\u8cc7\u8a0a\u7684\u76ee\u7684\uff0c\u662f\u70ba\u4e86\u8a8d\u8b49\u6aa2\u8209\u5167\u5bb9\u3001\u63a1\u53d6\u9069\u7576\u884c\u52d5\uff0c\u4e26\u9810\u9632\u672a\u4f86\u767c\u751f\u4e0d\u7576\u4f7f\u7528LY Corporation\u670d\u52d9\u7684\u60c5\u6cc1\u3002\u6211\u5011\u63a1\u53d6\u7684\u884c\u52d5\uff0c\u5305\u62ec\u4f7f\u7528\u60a8\u63d0\u4ea4\u7684\u8cc7\u8a0a\uff0c\u958b\u767c\u9810\u9632\u4e0d\u7576\u4f7f\u7528\u7684\u5de5\u5177\u3002\n\u70ba\u9054\u6210\u9019\u9805\u76ee\u7684\uff0c\u6211\u5011\u5f97\u4f9d\u50c5\u77e5\u539f\u5247\u5c07\u60a8\u63d0\u4ea4\u7684\u8cc7\u8a0a\u5206\u4eab\u7d66\u96c6\u5718\u5167\u7684\u516c\u53f8\u6216\u662f\u7b2c\u4e09\u65b9\u627f\u5305\u5546\u3002\n\n\u8207\u60a8\u7684\u6aa2\u8209\u4e00\u540c\u50b3\u9001\u7684\u500b\u4eba\u8cc7\u8a0a\u5305\u62ec\uff1a\n%1",
          "note.reportnote.desc.reportnotefromcomment":
            "\u6aa2\u8209\u7684\u8a18\u4e8b\u672c\u7559\u8a00\u8cc7\u8a0a\uff08\u7559\u8a00\u8b58\u5225\u8cc7\u8a0a\u3001\u6587\u5b57\u3001\u5716\u7247\u4ee5\u53ca\u8868\u60c5\u8cbc\u7b49\uff09\u3001\u88ab\u6aa2\u8209\u7528\u6236\u7684\u8cc7\u8a0a\uff08\u7528\u6236\u8b58\u5225\u8cc7\u8a0a\u53ca\u59d3\u540d\u7b49\uff09\u3001\u804a\u5929\u5ba4\u8cc7\u8a0a\uff08\u804a\u5929\u5ba4\u8b58\u5225\u8cc7\u8a0a\u7b49\uff09\u4ee5\u53ca\u60a8\u7684\u8cc7\u8a0a\uff08\u7528\u6236\u8b58\u5225\u8cc7\u8a0a\u53ca\u59d3\u540d\u7b49\uff09",
          "note.reportnote.desc.reportnotefrommenu":
            "\u6aa2\u8209\u7684\u8a18\u4e8b\u672c\u8cc7\u8a0a\uff08\u8a18\u4e8b\u672c\u8b58\u5225\u8cc7\u8a0a\u3001\u6587\u5b57\u3001\u5716\u7247\u3001\u8868\u60c5\u8cbc\u4ee5\u53ca\u5f71\u7247\u7b49\uff09\u3001\u88ab\u6aa2\u8209\u7528\u6236\u7684\u8cc7\u8a0a\uff08\u7528\u6236\u8b58\u5225\u8cc7\u8a0a\u53ca\u59d3\u540d\u7b49\uff09\u3001\u804a\u5929\u5ba4\u8cc7\u8a0a\uff08\u804a\u5929\u5ba4\u8b58\u5225\u8cc7\u8a0a\u7b49\uff09\u4ee5\u53ca\u60a8\u7684\u8cc7\u8a0a\uff08\u7528\u6236\u8b58\u5225\u8cc7\u8a0a\u53ca\u59d3\u540d\u7b49\uff09",
          "openchat.abusereport.desc.threadmessage":
            "\u6aa2\u8209\u7684\u8a0a\u606f\u53ca\u8a72\u8a0a\u606f\u524d\u768410\u5247\u8a0e\u8ad6\u4e32\u8a0a\u606f\u3001\u88ab\u6aa2\u8209\u7528\u6236\u7684\u8cc7\u8a0a\uff08\u66b1\u7a31\u53ca\u500b\u4eba\u5716\u7247\u7b49\uff09\u3001\u793e\u7fa4\u7684\u8cc7\u8a0a\uff08\u793e\u7fa4\u8b58\u5225\u8cc7\u8a0a\u3001\u793e\u7fa4\u540d\u7a31\u3001\u5c01\u9762\u7167\u7247\u4ee5\u53ca\u6210\u54e1\u6578\u7b49\uff09\u3001\u804a\u5929\u5ba4\u8cc7\u8a0a\uff08\u804a\u5929\u5ba4\u8b58\u5225\u8cc7\u8a0a\u7b49\uff09\u3001\u8a0e\u8ad6\u4e32\u8cc7\u8a0a\uff08\u8a0e\u8ad6\u4e32\u8b58\u5225\u8cc7\u8a0a\u7b49\uff09\u4ee5\u53ca\u60a8\u7684\u8cc7\u8a0a\uff08\u7528\u6236\u8b58\u5225\u8cc7\u8a0a\u53ca\u66b1\u7a31\u7b49\uff09",
          "openchat.abusereport.desc.threaduser":
            "\u88ab\u6aa2\u8209\u7528\u6236\u6700\u8fd1\u65bc\u8a0e\u8ad6\u4e32\u5167\u50b3\u9001\u768450\u5247\u8a0a\u606f\u3001\u88ab\u6aa2\u8209\u7528\u6236\u7684\u8cc7\u8a0a\uff08\u7528\u6236\u8b58\u5225\u8cc7\u8a0a\u3001\u66b1\u7a31\u4ee5\u53ca\u500b\u4eba\u5716\u7247\u7b49\uff09\u3001\u793e\u7fa4\u7684\u8cc7\u8a0a\uff08\u793e\u7fa4\u540d\u7a31\u3001\u5c01\u9762\u7167\u7247\u4ee5\u53ca\u6210\u54e1\u6578\u7b49\uff09\u3001\u804a\u5929\u5ba4\u8cc7\u8a0a\uff08\u804a\u5929\u5ba4\u8b58\u5225\u8cc7\u8a0a\u7b49\uff09\u3001\u8a0e\u8ad6\u4e32\u8cc7\u8a0a\uff08\u8a0e\u8ad6\u4e32\u8b58\u5225\u8cc7\u8a0a\u53ca\u8a0e\u8ad6\u4e32\u5167\u6700\u8fd1\u50b3\u9001\u7684100\u5247\u8a0a\u606f\u7b49\uff09\u4ee5\u53ca\u60a8\u7684\u8cc7\u8a0a\uff08\u7528\u6236\u8b58\u5225\u8cc7\u8a0a\u53ca\u66b1\u7a31\u7b49\uff09",
          AUTHORIZE_MSG_CLOSING_ALERT: "",
          "Common.warning.low.hard.disk.space":
            "\u786c\u789f\u5132\u5b58\u7a7a\u9593\u4e0d\u8db3\u3002\n\u8acb\u5148\u78ba\u4fdd30MB\u4ee5\u4e0a\u7684\u7a7a\u9593\uff0c\n\u7136\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          ImageViewerLabelNoImage:
            "\u6b64\u804a\u5929\u5ba4\u4e2d\u6c92\u6709\u5206\u4eab\u4efb\u4f55\u7167\u7247\u3002",
          "Keep.info.from.keepmemo": "Keep\u7b46\u8a18",
          LoginErrorNaverLoginForbbide:
            "\u8acb\u8f38\u5165\u6709\u6548\u7684\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u3002",
          Poll_Message_btn: "\u67e5\u770b\u8a73\u7d30\u5167\u5bb9",
          Poll_Title: "\u6295\u7968",
          "Setting.Alert.Remove.History":
            "\u804a\u5929\u8a18\u9304\u4e00\u65e6\u88ab\u522a\u9664\u5c07\u7121\u6cd5\u56de\u5fa9\uff01\n\u662f\u5426\u522a\u9664\u804a\u5929\u8a18\u9304\uff1f ",
          "Setting.Basic.ScaleRatio.Apply.Alert":
            "\u8acb\u91cd\u65b0\u555f\u52d5 LINE \u4ee5\u8b8a\u66f4\u756b\u9762\u6bd4\u4f8b\u3002\n\u60a8\u8981\u73fe\u5728\u91cd\u65b0\u555f\u52d5\u55ce\uff1f",
          "Setting.label.alarm.sound.1": "\u9810\u8a2d\u9234\u8072",
          "Setting.label.alarm.sound.2":
            "LINE\uff08\u6b61\u6a02\u7248\u266a\uff09",
          "Setting.label.alarm.sound.3":
            "LINE\uff08\u6084\u6084\u8a71\u7248\uff09",
          "Setting.label.alarm.sound.4": "\u9ed8\u8a8d\u9234\u8072",
          "Setting.label.alarm.sound.5": "\u8abf\u76ae\u5c0f\u87f2",
          "Setting.label.alarm.sound.6": "\u6162\u9023\u97f3",
          "Setting.label.alarm.sound.7": "\u53e3\u54e8",
          "Setting.label.alarm.sound.8": "\u6436\u7b54\u97f3",
          "Setting.label.alarm.sound.9": "\u56de\u7b54\u6b63\u78ba",
          "access.chat.search.calendar": "\u65e5\u66c6",
          "access.openchat.chatmenu.button.addyourthreads":
            "\u65b0\u589e\u81f3\u6211\u7684\u6700\u611b",
          "access.openchat.chatmenu.button.removeyourthreads":
            "\u5f9e\u6211\u7684\u6700\u611b\u79fb\u9664",
          "access.openchat.chatmenu.button.yourthreads":
            "\u6211\u7684\u6700\u611b\u8a0e\u8ad6\u4e32",
          "access.square.chat.button.more":
            "\u958b\u555f\u300c\u5ee3\u544a\u9078\u9805\u300d\u9078\u55ae",
          "ad.alert.popup.cantplayduringcall":
            "\u7121\u6cd5\u65bc\u901a\u8a71\u4e2d\u64ad\u653e",
          "ad.desc.playinginviewer":
            "\u6b63\u5728\u5a92\u9ad4\u64ad\u653e\u5668\u4e0a\u64ad\u653e",
          "ad.menu.admute.hideContent": "\u96b1\u85cf\u6b64\u5167\u5bb9",
          "ad.menu.admute.hideadvertiser":
            "\u96b1\u85cf\u6b64\u5ee3\u544a\u5546\u7684\u5ee3\u544a",
          "ad.menu.admute.hidethisad": "\u96b1\u85cf\u6b64\u5ee3\u544a",
          "ad.menu.videoEnlarge":
            "\u4ee5\u5a92\u9ad4\u64ad\u653e\u5668\u64ad\u653e",
          "addFriends.error.crossregion":
            "\u8acb\u900f\u904e\u6383\u63cf\u884c\u52d5\u689d\u78bc\u7684\u65b9\u5f0f\u5c07\u6b64\u7528\u6236\u52a0\u5165\u597d\u53cb\u3002",
          "addfriends.label.norecommendation.description":
            "\u5c1a\u7121\u60a8\u53ef\u80fd\u8a8d\u8b58\u7684\u4eba",
          "addfriends.menu.chatandgroup": "\u5efa\u7acb\u7fa4\u7d44",
          "addfriends.search.captcha.fail":
            "\u60a8\u6240\u8f38\u5165\u7684\u5167\u5bb9\u8207\u5716\u7247\u4e0d\u7b26\uff0c\u8acb\u78ba\u8a8d\u5f8c\u518d\u8a66\u4e00\u6b21\u3002\n",
          "album.add.photo.drag": "\u5c07\u7167\u7247\u62d6\u66f3\u81f3\u6b64",
          "album.addphotos.desc.limitexceeded":
            "\u6bcf\u672c\u76f8\u7c3f\u6700\u591a\u50c5\u53ef\u4e0a\u50b31,000\u500b\u9805\u76ee\u3002",
          "album.addpopup.desc.e2eeabletoretry":
            "\u7121\u6cd5\u65b0\u589e\u9805\u76ee\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "album.addpopup.desc.retry":
            "\u7121\u6cd5\u65b0\u589e\u9805\u76ee\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "album.addpopup.desc.unabletoretry":
            "\u5167\u542b\u76f8\u7c3f\u4e0d\u652f\u63f4\u7684\u6a94\u6848\u683c\u5f0f\uff0c\u56e0\u6b64\u7121\u6cd5\u65b0\u589e\u90e8\u5206\u9805\u76ee\u3002",
          "album.createalbum.tooltip.originalresolution.jp":
            "\u9078\u64c7\u6b64\u9078\u9805\u5373\u53ef\u4e0a\u50b3\u539f\u59cb\u756b\u8cea\u7684\u7167\u7247",
          "album.deletepopup.desc.deletealbum":
            "\u76f8\u7c3f\u4e2d\u7684\u6240\u6709\u9805\u76ee\u5c07\u88ab\u6c38\u4e45\u522a\u9664\u4e14\u7121\u6cd5\u5fa9\u539f\u3002\u78ba\u5b9a\u8981\u522a\u9664\u6b64\u76f8\u7c3f\u55ce\uff1f",
          "album.label.download": "\u4e0b\u8f09",
          "album.main.desc.albumvideos.other": "%n\u90e8\u5f71\u7247",
          "album.main.toast.encodingerror":
            "\u7531\u65bc\u7de8\u78bc\u6642\u767c\u751f\u932f\u8aa4\uff0c\u7121\u6cd5\u64ad\u653e\u5f71\u7247\u3002",
          "album.main.toast.encodinginprogress":
            "\u7de8\u78bc\u8655\u7406\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "album.main.tooltip.paidplan":
            "\u4e0a\u50b3\u5f71\u7247\u70ba\u4ed8\u8cbb\u670d\u52d9\u3002\u82e5\u5c07\u670d\u52d9\u89e3\u7d04\uff0c\u4e0a\u50b3\u7684\u6240\u6709\u5f71\u7247\u5c07\u88ab\u4e00\u4f75\u522a\u9664\u3002",
          "album.mainpopup.button.no": "\u5426",
          "album.mainpopup.button.yes": "\u662f",
          "album.mainpopup.desc.deletedvideo":
            "\u6b64\u5f71\u7247\u5df2\u88ab\u522a\u9664\u3002",
          "album.mainpopup.desc.stopadding":
            "\u78ba\u5b9a\u8981\u53d6\u6d88\u4e0a\u50b3\u55ce\uff1f",
          "album.msg.cancel.upload":
            "\u60a8\u8981\u53d6\u6d88\u65b0\u589e\u7167\u7247\u7684\u64cd\u4f5c\u55ce\uff1f",
          "album.picker.toast.20videomax.jp":
            "\u6bcf\u6b21\u6700\u591a\u50c5\u53ef\u4e0a\u50b320\u90e8\u5f71\u7247",
          "album.picker.toast.5minutesvideomax.jp":
            "\u50c5\u53ef\u4e0a\u50b3\u9577\u5ea6\u70ba5\u5206\u9418\u5167\u7684\u5f71\u7247",
          "album.picker.toast.max300":
            "\u6bcf\u6b21\u6700\u591a\u50c5\u53ef\u4e0a\u50b3300\u500b\u9805\u76ee",
          "album.picker.toast.originalresolution.jp":
            "\u5c07\u4ee5\u539f\u59cb\u756b\u8cea\u4e0a\u50b3\u9078\u64c7\u7684\u7167\u7247",
          "album.picker.toast.over20mb.jp":
            "\u5f71\u7247\u3001\u5bb9\u91cf\u8f03\u5927\u6216\u4e0d\u652f\u63f4\u683c\u5f0f\u7684\u7167\u7247\uff0c\u4ee5\u53ca\u900f\u904eLINE\u7de8\u8f2f\u7684\u7167\u7247\u5c07\u4ee5\u6a19\u6e96\u756b\u8cea\u4e0a\u50b3\u81f3\u76f8\u7c3f\u3002",
          "album.picker.toast.somestandard.jp":
            "\u5c07\u4ee5\u539f\u59cb\u756b\u8cea\u4e0a\u50b3\u9078\u64c7\u7684\u90e8\u5206\u7167\u7247\u3002\u5f71\u7247\u3001\u5bb9\u91cf\u8f03\u5927\u6216\u4e0d\u652f\u63f4\u683c\u5f0f\u7684\u7167\u7247\uff0c\u4ee5\u53ca\u900f\u904eLINE\u7de8\u8f2f\u7684\u7167\u7247\u5c07\u4ee5\u6a19\u6e96\u756b\u8cea\u4e0a\u50b3\u81f3\u76f8\u7c3f\u3002",
          "album.picker.toast.videomax.jp.other":
            "\u50c5\u53ef\u518d\u4e0a\u50b3%n\u90e8\u5f71\u7247\u81f3\u6b64\u76f8\u7c3f\u3002",
          "album.share.toast.addvideomax.jp":
            "\u6bcf\u672c\u76f8\u7c3f\u6700\u591a\u50c5\u53ef\u4e0a\u50b3100\u90e8\u5f71\u7247",
          "album.updatepopup.button.dontshow": "\u4e0d\u518d\u986f\u793a",
          "album.updatepopup.button.later": "\u4e0b\u6b21\u518d\u8aaa",
          "album.updatepopup.button.updatenow": "\u7acb\u5373\u66f4\u65b0",
          "album.updatepopup.desc.notavailable":
            "\u60a8\u76ee\u524d\u4f7f\u7528\u7684\u7248\u672c\u53ef\u80fd\u7121\u6cd5\u986f\u793a\u90e8\u5206\u76f8\u7c3f\u5167\u5bb9\u3002\u8acb\u5c07LINE\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u3002",
          "album.viewer.button.additems": "\u4e0a\u50b3\u9805\u76ee",
          "alert.album.blocked.user":
            "\u60a8\u7121\u6cd5\u8207\u5df2\u5c01\u9396\u7684\u7528\u6236\u5171\u7528\u76f8\u7c3f\u3002",
          "alert.note.blocked.user":
            "\u60a8\u7121\u6cd5\u8207\u5df2\u5c01\u9396\u7684\u7528\u6236\u5171\u7528\u8a18\u4e8b\u672c\u3002",
          "announce.donotshowagain": "\u4e0d\u518d\u986f\u793a",
          "announce.donotshowagain.mouseover": "\u4e0d\u518d\u986f\u793a",
          "announce.error":
            "\u627e\u4e0d\u5230\u6b64\u516c\u544a\u7684\u8a0a\u606f",
          "announce.minimize": "\u6700\u5c0f\u5316",
          "announce.unannounce": "\u53d6\u6d88\u516c\u544a",
          "announcement.message.album": "\u76f8\u7c3f\uff1a%1",
          "announcement.message.annoucement": "\u8a2d\u70ba\u516c\u544a",
          "announcement.message.error.description":
            "\u627e\u4e0d\u5230\u6b64\u516c\u544a\u7684\u8a0a\u606f",
          "announcement.message.note.no.text":
            "\u8a18\u4e8b\u672c\u5206\u4eab\u65bc%1",
          "announcement.message.note.text": "\u8a18\u4e8b\u672c\uff1a %1",
          "announcement.system.message":
            "<![CDATA[%1\u5df2\u8a2d\u5b9a<u>\u516c\u544a</u>]]>",
          "app.title": "LINE\u7248\u672c\u66f4\u65b0",
          "att.prepopup.description":
            "LINE\u53d6\u5f97\u5b58\u53d6\u6b0a\u9650\u5f8c\uff0c\u5c07\u4f9d\u64da\u60a8\u7684\u8208\u8da3\u53ca\u5c6c\u6027\u986f\u793a\u8207\u60a8\u8f03\u6709\u95dc\u806f\u6027\u7684\u8cc7\u8a0a\u3001\u5167\u5bb9\u53ca\u5ee3\u544a\u3002",
          "authorize.content.desc1":
            "\u70ba\u4e86\u78ba\u4fdd\u5e33\u865f\u5b89\u5168\u6027\uff0c\u60a8\u5fc5\u9808\u5728\n\u9996\u6b21\u767b\u5165\u96fb\u8166\u7248\u6642\u8a8d\u8b49\u60a8\u7684\u5e33\u865f\u3002\n",
          "authorize.content.desc2":
            "\u8acb\u5728\u667a\u6167\u624b\u6a5f\u4e0a\u8f38\u5165\u4ee5\u4e0b\u4ee3\u78bc\u3002\n",
          "authorize.e2ee.about.letterSealing":
            "Letter Sealing\u662f\u4ec0\u9ebc\uff1f",
          "authorize.e2ee.app.update":
            "LINE\u73fe\u5728\u8b8a\u5f97\u66f4\u5b89\u5168\u4e86\u3002\n\u8acb\u5c07LINE\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u3002",
          "authorize.e2ee.desc1":
            "\u60a8\u5fc5\u9808\u5148\u8a8d\u8b49\u5e33\u865f\n\u624d\u80fd\u4f7f\u7528Letter Sealing\u529f\u80fd\u3002",
          "authorize.e2ee.desc2":
            "\u8acb\u5728\u667a\u6167\u624b\u6a5f\u4e0a\u8f38\u5165\u4ee5\u4e0b\u4ee3\u78bc\u3002\n",
          "authorize.e2ee.primary.cancel":
            "\u5df2\u5728\u884c\u52d5\u88dd\u7f6e\u4e0a\u53d6\u6d88\u8a8d\u8b49\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "authorize.msg.closing.alert":
            "\u95dc\u9589\u672c\u8996\u7a97\u5f8c\uff0c\u7cfb\u7d71\u5c07\u81ea\u52d5\u53d6\u6d88\u767b\u5165\u3002\u662f\u5426\u7e7c\u7e8c\uff1f",
          "authorize.msg.timeout.alert":
            "\u60a8\u53ef\u767b\u5165\u7684\u6709\u6548\u6642\u9650\u5df2\u904e\uff01\n\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "authorize.msg.useage.alert":
            "\u8acb\u5148\u958b\u555f\u667a\u6167\u624b\u6a5f\u7684LINE\u61c9\u7528\u7a0b\u5f0f\uff0c\u9ede\u9078\u300c\u8a2d\u5b9a\u300d\uff1e\u300c\u6211\u7684\u5e33\u865f\u300d\uff0c\u518d\u958b\u555f\u300c\u5141\u8a31\u81ea\u5176\u4ed6\u88dd\u7f6e\u767b\u5165\u300d\u7684\u8a2d\u5b9a\uff0c\u624d\u80fd\u9032\u884c\u767b\u5165\u64cd\u4f5c\u3002",
          "authorize.remained.time": "\u5269\u9918\u6642\u9593",
          "authorize.window.title": "\u96fb\u8166\u7248\u8a8d\u8b49",
          "autoSuggest.add.language": "\u65b0\u589e\u8a9e\u8a00",
          "autoSuggest.enable": "\u555f\u7528\u81ea\u52d5\u5efa\u8b70",
          "autoSuggest.enabled.language": "\u8a9e\u8a00",
          "autoSuggest.msg.desc":
            "\u7576\u60a8\u8f38\u5165\u8a0a\u606f\u6642\uff0c\u5c07\u6703\u81ea\u52d5\u5efa\u8b70\u60a8\u7b26\u5408\u7684\u8868\u60c5\u8cbc\u6216\u8cbc\u5716\u3002",
          "autoSuggest.msg.desc.downloadFailed":
            "\u7121\u6cd5\u4e0b\u8f09\u3002\n\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "autoSuggest.msg.download.all.emoji":
            "\u8981\u4e0b\u8f09\u6240\u6709\u8868\u60c5\u8cbc\u5716\u55ce\uff1f",
          "autoSuggest.msg.download.all.sticker":
            "\u60a8\u5fc5\u9808\u4e0b\u8f09\u8cbc\u5716\u624d\u80fd\u9810\u89bd\u3002\n\u8981\u4e0b\u8f09\u60a8\u7684\u6240\u6709\u8cbc\u5716\u55ce\uff1f\n",
          "autoSuggest.title": "\u81ea\u52d5\u5efa\u8b70\u8cbc\u5716",
          "buddy.alert.common.failed.add.contact":
            "\u7121\u6cd5\u52a0\u5165\u597d\u53cb\u3002",
          "buddy.alert.not.allowed.add.contact":
            "\u7531\u65bc\u672c\u5e33\u865f\u53ef\u52a0\u5165\u7684\u597d\u53cb\u4eba\u6578\u53d7\u5230\u9650\u5236\uff0c\u7121\u6cd5\u518d\u65b0\u589e\u66f4\u591a\u597d\u53cb\u3002",
          "buddy.btn.addBuddy": "\u52a0\u5165\u597d\u53cb",
          "buddy.btn.blockBuddy": "\u5c01\u9396",
          "buddy.btn.chat": "\u804a\u5929",
          "buddy.btn.home": "\u4e3b\u9801",
          "buddy.btn.setting.profile": "\u500b\u4eba\u6a94\u6848\u8a2d\u5b9a",
          "buddy.btn.unblockBuddy": "\u89e3\u9664\u5c01\u9396",
          "buddy.btn.voip": "\u8a9e\u97f3\u901a\u8a71",
          "buddy.label.edit.title": "\u4fee\u6539\u986f\u793a\u540d\u7a31",
          "buddy.label.info.title": "\u500b\u4eba\u8cc7\u6599",
          "buddylist.chooseFriend.empty.btn": "\u804a\u5929",
          "buddylist.chooseFriend.empty.desc":
            "\u958b\u59cb\u804a\u5929\u5427\uff01",
          "buddylist.chooseGroup.emty.desc":
            "%1\u4e2d\u6c92\u6709\u4efb\u4f55\n\u804a\u5929\u8a18\u9304\u3002\n\u958b\u59cb\u548c\u597d\u53cb\u804a\u5929\u5427\uff01",
          "buddylist.chooseMe.empty.desc":
            "\u958b\u59cb\u804a\u5929\u5427\uff01",
          "buddylist.plusMenu.chat": "\u804a\u5929",
          "budy.label.unregisterUser":
            "\u9019\u662f\u5c1a\u672a\u8a2d\u70ba\u597d\u53cb\u7684\u7528\u6236\u3002 ",
          "call.callsettingspreview.desc.nocamera":
            "\u52a0\u5165\u6703\u8b70\u5ba4\u524d\uff0c\u8acb\u5148\u78ba\u8a8d\u901a\u8a71\u8a2d\u5b9a\u3002\u76ee\u524d\u672a\u5075\u6e2c\u5230\u76f8\u6a5f\u93e1\u982d\uff0c\u5176\u4ed6\u4eba\u5c07\u7121\u6cd5\u770b\u5230\u60a8\u7684\u5f71\u50cf\u3002",
          "call.callsettingspreview.desc.nocameradetected":
            "\u672a\u5075\u6e2c\u5230\u76f8\u6a5f\u3002",
          "call.callsettingspreview.desc.nomic":
            "\u52a0\u5165\u6703\u8b70\u5ba4\u524d\uff0c\u8acb\u5148\u78ba\u8a8d\u901a\u8a71\u8a2d\u5b9a\u3002\u76ee\u524d\u672a\u5075\u6e2c\u5230\u9ea5\u514b\u98a8\uff0c\u5176\u4ed6\u4eba\u5c07\u7121\u6cd5\u807d\u5230\u60a8\u7684\u8072\u97f3\u3002",
          "call.callsettingspreview.desc.nomicdetected":
            "\u672a\u5075\u6e2c\u5230\u9ea5\u514b\u98a8\u3002",
          "call.callsettingspreview.desc.nomicorcamera":
            "\u52a0\u5165\u6703\u8b70\u5ba4\u524d\uff0c\u8acb\u5148\u78ba\u8a8d\u901a\u8a71\u8a2d\u5b9a\u3002\u76ee\u524d\u672a\u5075\u6e2c\u5230\u9ea5\u514b\u98a8\u53ca\u76f8\u6a5f\u93e1\u982d\uff0c\u5176\u4ed6\u4eba\u5c07\u7121\u6cd5\u807d\u5230\u60a8\u7684\u8072\u97f3\u6216\u770b\u5230\u60a8\u3002",
          "call.callsettingspreview.desc.nomicorcameradetected":
            "\u672a\u5075\u6e2c\u5230\u76f8\u6a5f\u53ca\u9ea5\u514b\u98a8\u3002",
          "call.cameraoff.friend":
            "\u597d\u53cb\u7684\u93e1\u982d\u672a\u958b\u555f\u3002",
          "call.cameraoff.me":
            "\u60a8\u7684\u93e1\u982d\u672a\u958b\u555f\u3002",
          "call.chat.confirm.popup.start":
            "\u8981\u8207\u5c0d\u65b9\u901a\u8a71\u55ce\uff1f",
          "call.chat.confirm.popup.start.btn.video":
            "\u958b\u59cb\u8996\u8a0a\u901a\u8a71",
          "call.chat.confirm.popup.start.btn.voice":
            "\u958b\u59cb\u8a9e\u97f3\u901a\u8a71",
          "call.chatscreen.popup.alreadyinacall":
            "\u60a8\u5df2\u6b63\u5728\u9032\u884c\u901a\u8a71\u3002",
          "call.doodling.popup.viewerupdaterequired":
            "\u5c0d\u65b9\u9700\u5148\u5c07LINE\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\uff0c\u4f60\u5011\u624d\u80fd\u4e00\u8d77\u4f7f\u7528\u6b64\u529f\u80fd\u3002",
          "call.doodling.toast.doodlepaused":
            "\u66ab\u505c\u5206\u4eab\u87a2\u5e55\u756b\u9762\u6642\u7121\u6cd5\u5857\u9d09\u3002",
          "call.doodling.toast.noiosdoodle":
            "\u65bciOS\u88dd\u7f6e\u5206\u4eab\u87a2\u5e55\u756b\u9762\u6642\uff0c\u7121\u6cd5\u4f7f\u7528\u5857\u9d09\u529f\u80fd\u3002",
          "call.doodling.toast.sharepaused":
            "\u5206\u4eab\u87a2\u5e55\u756b\u9762\u66ab\u505c\u4e2d\u3002",
          "call.doodling.toast.sharerupdaterequired":
            "\u6b32\u5206\u4eab\u81ea\u5df1\u87a2\u5e55\u756b\u9762\u7684\u4eba\u9700\u5148\u5c07LINE\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\uff0c\u624d\u80fd\u4f7f\u7528\u6b64\u529f\u80fd\u3002",
          "call.effects.menu.stickers": "\u8cbc\u5716",
          "call.effects.popup.graphiccardproblem":
            "\u60a8\u7684\u986f\u793a\u5361\u4e26\u672a\u7b26\u5408\u555f\u7528LINE\u8996\u8a0a\u901a\u8a71\u7684\u6700\u4f4e\u914d\u7f6e\u9700\u6c42\uff0c\u56e0\u6b64\u53ef\u80fd\u9020\u6210\u756b\u9762\u5ef6\u9072\u7b49\u554f\u984c\u3002\n\u78ba\u5b9a\u8981\u958b\u555f\u8996\u8a0a\u901a\u8a71\u55ce\uff1f",
          "call.effects.popup.removebgeffect":
            "\u82e5\u522a\u9664\u76ee\u524d\u5957\u7528\u7684\u80cc\u666f\uff0c\u8996\u8a0a\u756b\u9762\u5c07\u6539\u986f\u793a\u60a8\u7684\u5be6\u969b\u80cc\u666f\u3002\u78ba\u5b9a\u8981\u522a\u9664\u55ce\uff1f",
          "call.effects.toast.stickersonetime":
            "\u67d0\u4e9b\u8cbc\u5716\u53ef\u80fd\u4e0d\u652f\u63f4\u5728\u901a\u8a71\u6642\u4f7f\u7528",
          "call.error.popupdesc.featureunavailableondevice":
            "\u901a\u8a71\u4e2d\u7684\u4eba\u4f7f\u7528\u60a8\u7684\u88dd\u7f6e\u4e0d\u652f\u63f4\u7684\u529f\u80fd\u3002\u8acb\u4f7f\u7528\u624b\u6a5f\u7248 LINE \u52a0\u5165\u901a\u8a71\u4ee5\u4f7f\u7528\u6b64\u529f\u80fd\u3002",
          "call.error.popupdesc.groupcallunavailable":
            "\u76ee\u524d\u7121\u6cd5\u4f7f\u7528\u7fa4\u7d44\u901a\u8a71\uff0c\u6b64\u529f\u80fd\u6b63\u5728\u4fee\u5fa9\u4e2d\u3002",
          "call.error.popupdesc.livetalkunavailable":
            "\u76ee\u524d\u7121\u6cd5\u4f7f\u7528Live talk\uff0c\u6b64\u529f\u80fd\u6b63\u5728\u4fee\u5fa9\u4e2d\u3002",
          "call.error.popupdesc.oacallunavailable":
            "\u76ee\u524d\u7121\u6cd5\u9032\u884c\u901a\u8a71\uff0c\u6b64\u529f\u80fd\u6b63\u5728\u4fee\u5fa9\u4e2d\u3002",
          "call.error.popupdesc.outdatedapp":
            "\u901a\u8a71\u4e2d\u7684\u6210\u54e1\u4f7f\u7528\u4e86\u76ee\u524d\u60a8\u7684LINE\u7248\u672c\u7121\u6cd5\u652f\u63f4\u7684\u529f\u80fd\u3002\u8acb\u5c07LINE\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u4ee5\u4f7f\u7528\u6b64\u529f\u80fd\u3002",
          "call.error.popupdesc.videocallunavailable":
            "\u76ee\u524d\u7121\u6cd5\u4f7f\u7528\u8996\u8a0a\u901a\u8a71\uff0c\u8acb\u6539\u7528\u8a9e\u97f3\u901a\u8a71\u3002",
          "call.error.tooltip.audionosrc":
            "\u8acb\u6aa2\u67e5\u60a8\u7684\u9ea5\u514b\u98a8\u662f\u5426\u6b63\u5e38\u904b\u4f5c\u3002",
          "call.error.unsupporteddevice":
            "\u60a8\u7684\u88dd\u7f6e\u4e0d\u652f\u63f4LINE\u901a\u8a71\u3002",
          "call.groupcall.leavebutton": "\u9000\u51fa\u901a\u8a71",
          "call.participants.desc.noresults":
            "\u627e\u4e0d\u5230\u7b26\u5408\u7684\u8cc7\u6599\u3002",
          "call.screen.toast.updaterequired":
            "\u60a8\u7684\u597d\u53cb\u4f7f\u7528\u820a\u7248\u672cLINE\uff0c\u56e0\u6b64\u7121\u6cd5\u770b\u5230\u8cbc\u5716\u3002",
          "call.screenshare.taskbar.screenshare":
            "\u9078\u64c7\u8981\u5206\u4eab\u7684\u87a2\u5e55\u756b\u9762",
          "call.screenshare.taskbar.ytsearch":
            "\u641c\u5c0bYouTube\u5f71\u7247",
          "call.screenshare.toast.shareerror":
            "%1 \u5df2\u7d93\u4f7f\u7528\u5206\u4eab\u756b\u9762\u7684\u529f\u80fd\u3002",
          "call.screenshare.toast.unsupportedos":
            "\u5c07\u64cd\u4f5c\u7cfb\u7d71\u66f4\u65b0\u5230Windows 10\u6216\u4f7f\u7528\u884c\u52d5\u88dd\u7f6e\u7248\u672c\u7684LINE\u4ee5\u67e5\u770b\u5171\u4eab\u756b\u9762\u3002",
          "call.screenshare.youtube.popup.startvideo":
            "\u78ba\u5b9a\u8981\u5c07\u87a2\u5e55\u756b\u9762\u5206\u4eab\u7d66\u901a\u8a71\u6210\u54e1\u55ce\uff1f",
          "call.sharedcontent.desc.newdatatype":
            "\u60a8\u76ee\u524d\u7684\u7248\u672c\u4e0d\u652f\u63f4\u986f\u793a%1\u6b63\u5728\u5206\u4eab\u7684\u5167\u5bb9\uff0c\u8acb\u5c07LINE\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u3002",
          "call.toast.cpuheavyload":
            "\u7531\u65bc\u7cfb\u7d71\u8ca0\u8f09\u904e\u91cd\uff0c\u53ef\u80fd\u6703\u5f71\u97ff\u60a8\u7684\u901a\u8a71\u54c1\u8cea\u3002\u5efa\u8b70\u60a8\u95dc\u9589\u5176\u4ed6\u61c9\u7528\u7a0b\u5f0f\u3002",
          "call.toast.handsfreebt.mic":
            "\u5df2\u5207\u63db\u81f3\u300c%1\u300d\u9ea5\u514b\u98a8\u3002\u8acb\u5c07\u64f4\u97f3\u5668\u8a2d\u70ba\u76f8\u540c\u88dd\u7f6e\u3002",
          "call.toast.handsfreebt.speaker":
            "\u5df2\u5207\u63db\u81f3\u300c%1\u300d\u64f4\u97f3\u5668\u3002\u8acb\u5c07\u9ea5\u514b\u98a8\u8a2d\u70ba\u76f8\u540c\u88dd\u7f6e\u3002",
          "call.video.filter.clear": "Clear",
          "call.video.filter.original": "Original",
          "call.viewmode.desc.focusview": "\u7126\u9ede\u6aa2\u8996",
          "call.viewmode.desc.focusviewcenter":
            "\u7126\u9ede\u6aa2\u8996\uff08\u4e2d\u9593\uff09",
          "call.viewmode.desc.focusviewleft":
            "\u7126\u9ede\u6aa2\u8996\uff08\u9760\u5de6\uff09",
          "call.viewmode.desc.focusviewright":
            "\u7126\u9ede\u6aa2\u8996\uff08\u9760\u53f3\uff09",
          "call.viewmode.desc.gridview": "\u683c\u72c0\u986f\u793a",
          "call.viewmode.desc.separateview":
            "\u500b\u5225\u7e2e\u5716\u986f\u793a",
          "call.watchtogethermenu.desc.100kviewsth": "%1",
          "call.watchtogethermenu.desc.100kwatchingth": "%1",
          "call.watchtogethermenu.desc.10kviewsth": "%1",
          "call.watchtogethermenu.desc.10kwatchingth": "%1",
          "call.watchtogethermenu.desc.1bpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1bviews": "%1",
          "call.watchtogethermenu.desc.1eokpeoplewatching":
            "%1\u5104\u4eba\u89c0\u770b\u4e2d",
          "call.watchtogethermenu.desc.1eokviews": "\u89c0\u770b%1\u5104\u6b21",
          "call.watchtogethermenu.desc.1kpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1kviews": "%1",
          "call.watchtogethermenu.desc.1kviewsth": "%1",
          "call.watchtogethermenu.desc.1kwatchingth": "%1",
          "call.watchtogethermenu.desc.1manpeoplewatching":
            "%1\u842c\u4eba\u89c0\u770b\u4e2d",
          "call.watchtogethermenu.desc.1manviews": "\u89c0\u770b%1\u842c\u6b21",
          "call.watchtogethermenu.desc.1mpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1mviews": "%1",
          "call.watchtogethermenu.desc.1mviewsth": "%1",
          "call.watchtogethermenu.desc.1mwatchingth": "%1",
          "call.watchtogethermenu.desc.daysago.other": "%n\u5929\u524d",
          "call.watchtogethermenu.desc.hoursago.other": "%n\u5c0f\u6642\u524d",
          "call.watchtogethermenu.desc.justnow": "\u525b\u525b",
          "call.watchtogethermenu.desc.lessthan1kviewsth": "%1",
          "call.watchtogethermenu.desc.lessthan1kwatchingth": "%1",
          "call.watchtogethermenu.desc.minutesago.other":
            "%n\u5206\u9418\u524d",
          "call.watchtogethermenu.desc.monthsago.other": "%n\u500b\u6708\u524d",
          "call.watchtogethermenu.desc.peoplewatchingen": "%1",
          "call.watchtogethermenu.desc.userswatchinglivevideo":
            "%1\u4eba\u89c0\u770b\u4e2d",
          "call.watchtogethermenu.desc.userswatchingvideo":
            "\u89c0\u770b%1\u6b21",
          "call.watchtogethermenu.desc.userswatchingvideoen.other": "%n",
          "call.watchtogethermenu.desc.yearsago.other": "%n\u5e74\u524d",
          "call.youtube.desc.headphones":
            "\u8acb\u4f7f\u7528\u8033\u6a5f\u4ee5\u907f\u514d\u56de\u97f3",
          "call.youtube.desc.noresults":
            "\u627e\u4e0d\u5230\u7b26\u5408\u7684\u8cc7\u6599\u3002",
          "call.youtube.paste.descforonetoone":
            "\u627e\u5f71\u7247\u548c\u60a8\u7684\u597d\u53cb\u5171\u8cde\u5427\u3002\uff08\u5efa\u8b70\u4f7f\u7528\u8033\u6a5f\u3002\uff09",
          "call.youtube.popup.shareerror":
            "\u767c\u751f\u66ab\u6642\u6027\u932f\u8aa4\uff0c\u7121\u6cd5\u5206\u4eabYouTube\u5f71\u7247\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "call.youtube.popupbutton.allow": "\u5141\u8a31",
          "call.youtube.popupbutton.disallow": "\u4e0d\u5141\u8a31",
          "call.youtube.popupdesc.clipboard":
            "\u6b64\u52d5\u4f5c\u5c07\u5728\u700f\u89bd\u5668\u81ea\u52d5\u8cbc\u4e0a\u60a8\u8907\u88fd\u7684YouTube\u5f71\u7247\u9023\u7d50\u3002",
          "call.youtube.popuptitle.clipboard":
            "\u5141\u8a31LINE\u5b58\u53d6\u60a8\u7684\u526a\u8cbc\u7c3f",
          "call.youtube.statusbadge.premiering": "\u73fe\u6b63\u9996\u64ad",
          "call.youtube.title.trendingvideos": "\u71b1\u9580\u5f71\u7247",
          "call.youtube.videodesc.date": "\u9810\u7d04\u6642\u9593%1",
          "call.youtube.videodesc.datevariable": "yyyy/M/d H:mm",
          "capture.command.close": "\u95dc\u9589",
          "capture.command.copy": "\u8907\u88fd",
          "capture.command.done": "\u5b8c\u6210",
          "capture.command.draw": "\u7e6a\u5716",
          "capture.command.gif": "\u622a\u53d6GIF\u5716\u6a94",
          "capture.command.gif.cancel":
            "\u5373\u5c07\u6368\u68c4\u5df2\u622a\u53d6\u7684GIF\u5716\u6a94\u3002\u78ba\u5b9a\u8981\u95dc\u9589\u76ee\u524d\u7684\u622a\u5716\u756b\u9762\u55ce\uff1f",
          "capture.command.gif.create":
            "\u6b63\u5728\u5efa\u7acbGIF\u52d5\u5716",
          "capture.command.gif.error.maxFileSize":
            "\u60a8\u622a\u53d6\u7684GIF\u6a94\u6848\u5927\u65bc20 MB\u3002\n\uff08\u76ee\u524d%1 MB\uff09\n\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "capture.command.gif.error.maxSize":
            "\u7531\u65bc\u60a8\u6240\u9078\u53d6\u7684\u5340\u584a\u904e\u5927\uff0c\u7121\u6cd5\u622a\u53d6GIF\u52d5\u5716\u3002\n\u8acb\u91cd\u65b0\u9078\u53d6\u5340\u584a\u3002",
          "capture.command.gif.error.size":
            "\u60a8\u6240\u9078\u53d6\u7684\u5340\u584a\u904e\u5c0f\uff0c\u7121\u6cd5\u622a\u53d6GIF\u52d5\u5716\u3002\n\u8acb\u91cd\u65b0\u9078\u53d6\u5340\u584a\u3002",
          "capture.command.gif.stop": "\u505c\u6b62",
          "capture.command.gif.tooltip":
            "\u622a\u53d6\u90e8\u5206\u87a2\u5e55\u756b\u9762\u4e26\u5132\u5b58\u70baGIF\u6a94\u3002",
          "capture.command.quit": "\u78ba\u5b9a",
          "capture.command.redo": "\u53d6\u6d88\u5fa9\u539f",
          "capture.command.save": "\u5132\u5b58",
          "capture.command.share": "\u5206\u4eab",
          "capture.command.undo": "\u5fa9\u539f",
          "capture.desc.need.os.recordscreen":
            "\u7121\u6cd5\u622a\u5716\uff0c\u8acb\u5148\u8ce6\u4e88LINE\u4f7f\u7528\u87a2\u5e55\u9304\u88fd\u529f\u80fd\u7684\u6b0a\u9650\u3002",
          "capture.msg.onEditing":
            "\u78ba\u5b9a\u8981\u4e0d\u5132\u5b58\u8b8a\u66f4\u5167\u5bb9\u5373\u95dc\u9589\u76ee\u524d\u7684\u622a\u5716\u756b\u9762\u55ce\uff1f",
          "capture.scan.error.maxFileSize":
            "\u60a8\u8981\u622a\u53d6\u7684\u5716\u7247\u904e\u5927\u3002\u8acb\u8abf\u6574\u5c3a\u5bf8\u5f8c\uff0c\u518d\u8a66\u4e00\u6b21\u3002",
          "capture.scan.error.resolution":
            "\u7531\u65bc\u7cfb\u7d71\u4e0d\u652f\u63f4\u6b64\u5716\u7247\u7684\u89e3\u6790\u5ea6\uff0c\u7121\u6cd5\u622a\u5716\u3002\u8acb\u8abf\u6574\u89e3\u6790\u5ea6\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "capture.tool.eclipse": "\u5713\u5f62",
          "capture.tool.line": "\u76f4\u7dda",
          "capture.tool.lineColor": "\u7dda\u689d\u984f\u8272",
          "capture.tool.mosaic": "\u99ac\u8cfd\u514b",
          "capture.tool.penwidth": "\u5bec\u5ea6",
          "capture.tool.rectangle": "\u77e9\u5f62",
          "capture.tool.select": "\u9078\u64c7",
          "capture.tool.shape": "\u5f62\u72c0",
          "capture.tool.text": "\u6587\u5b57",
          "capture.tool.textColor": "\u5b57\u9ad4\u984f\u8272",
          "capture.tool.textSize": "\u5b57\u9ad4\u5927\u5c0f",
          "capture.tool.textSize.big": "\u5927",
          "capture.tool.textSize.medium": "\u4e2d",
          "capture.tool.textSize.small": "\u5c0f",
          "chat.action.leaveChat.confirm":
            "\u96e2\u958b\u5f8c\uff0c\u804a\u5929\u8a18\u9304\u5c07\u88ab\u5168\u90e8\u522a\u9664\u3002\n\u60a8\u78ba\u5b9a\u55ce\uff1f",
          "chat.alert.clipboard.largedata":
            "\u60a8\u8907\u88fd\u7684\u9805\u76ee\u904e\u5927\uff0c\u7121\u6cd5\u65bc\u804a\u5929\u5ba4\u4e2d\u8cbc\u4e0a\u3002",
          "chat.alert.file.open.fromNotbuddy":
            "\u975e\u597d\u53cb\u6240\u50b3\u9001\u7684\u6a94\u6848\u53ef\u80fd\u4e0d\u5b89\u5168\u3002\n\u78ba\u5b9a\u8981\u958b\u555f\u55ce\uff1f",
          "chat.alert.file.open.fromSquare":
            "\u60a8\u4e0d\u8a8d\u8b58\u7684\u4eba\u6240\u50b3\u9001\u7684\u6a94\u6848\u53ef\u80fd\u4e0d\u5b89\u5168\u3002\n\u78ba\u5b9a\u8981\u958b\u555f\u55ce\uff1f",
          "chat.alert.file.open.frombuddy":
            "\u958b\u555f\u6a94\u6848\u524d\uff0c\u8acb\u5148\u78ba\u8a8d\u6a94\u6848\u7684\u5b89\u5168\u6027\u3002\n\u78ba\u5b9a\u8981\u958b\u555f\u6a94\u6848\u55ce\uff1f",
          "chat.alert.file.open.notSupport":
            "\u4e0d\u652f\u63f4\u6a94\u6848\u7684\u683c\u5f0f\uff0c\u7121\u6cd5\u958b\u555f\u3002",
          "chat.alert.file.unsupported.all.other":
            "\u4e0d\u652f\u63f4\u6240\u9078\u6a94\u6848\u7684\u683c\u5f0f\uff0c\u8981\u58d3\u7e2e\u518d\u50b3\u9001\u55ce\uff1f",
          "chat.alert.file.unsupported.some.other":
            "\u4e0d\u652f\u63f4\u5176\u4e2d%n\u500b\u6a94\u6848\u7684\u683c\u5f0f\uff0c\u8981\u58d3\u7e2e\u518d\u50b3\u9001\u55ce\uff1f",
          "chat.alert.invite.alreadyinvited":
            "\u5df2\u9001\u51fa\n\u9080\u8acb\u7d66%1\u3002  ",
          "chat.alert.invite.alreadyjoined":
            "%1\u5df2\u7d93\u662f\n\u9019\u500b\u7fa4\u7d44\u7684\u6210\u54e1\u3002  ",
          "chat.alert.invite.blockedbuddy":
            "\u60a8\u7121\u6cd5\u9080\u8acb\u5c01\u9396\u540d\u55ae\u4e0a\u7684\u5e33\u865f\u3002",
          "chat.alert.invite.confirm":
            "\u8981\u5c07%1\n\u9080\u8acb\u81f3\u6b64\u804a\u5929\u5ba4\u4e2d\u55ce\uff1f",
          "chat.alert.invite.notbuddy":
            "\u5c07%1\u52a0\u70ba\u597d\u53cb\u5f8c\uff0c\n\u5373\u53ef\u5c07\u4ed6\u9080\u8acb\u5230\u804a\u5929\u5ba4\u4e2d\u3002 ",
          "chat.alert.invite.verificationrequired":
            "\u8acb\u5148\u5b8c\u6210\u5e74\u6eff18\u6b72\u7684\u5e74\u9f61\u78ba\u8a8d\uff0c\u624d\u53ef\u900f\u904e\u884c\u52d5\u689d\u78bc\u6216\u9080\u8acb\u9023\u7d50\u52a0\u5165\u7fa4\u7d44\u3002",
          "chat.alert.sharePost":
            "\u8981\u8207%1\u5206\u4eab\u8a18\u4e8b\u672c\u8207\u76f8\u7c3f\u55ce\uff1f\n",
          "chat.alert.unavailable.file":
            "\u56e0\u70ba\u5132\u5b58\u671f\u9650\u5df2\u904e\uff0c\u7121\u6cd5\u5206\u4eab\u6b64\u6a94\u6848\u3002",
          "chat.alert.unsend.fail.error":
            "\u6536\u56de\u8a0a\u606f\u5931\u6557\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "chat.alert.unsend.fail.time":
            "\u8a0a\u606f\u5df2\u9001\u51fa\u8d85\u904e\u4e00\u5b9a\u6642\u9593\uff0c\u56e0\u6b64\u7121\u6cd5\u6536\u56de\u3002",
          "chat.alert.unsend.old.version":
            "\u4f9d\u597d\u53cb\u4f7f\u7528\u7684LINE\u7248\u672c\u800c\u5b9a\uff0c\u6709\u53ef\u80fd\u7121\u6cd5\u81ea\u597d\u53cb\u7684\u804a\u5929\u5ba4\u4e2d\u6536\u56de\u6b64\u8a0a\u606f\u3002\u78ba\u5b9a\u8981\u6536\u56de\u55ce\uff1f",
          "chat.audio.tooltip": "\u8072\u97f3",
          "chat.btn.capture.tooltip": "\u622a\u53d6\u756b\u9762",
          "chat.btn.close.tooltip": "\u95dc\u9589",
          "chat.btn.emoji": "\u8868\u60c5\u8cbc",
          "chat.btn.facemark": "\u8868\u60c5\u7b26\u865f",
          "chat.btn.file": "\u50b3\u9001\u6a94\u6848",
          "chat.btn.keepmemo.tooltip": "Keep\u7b46\u8a18",
          "chat.btn.max.tooltip": "\u6700\u5927\u5316",
          "chat.btn.menu.tooltip": "\u529f\u80fd\u9078\u55ae",
          "chat.btn.min.tooltip": "\u6700\u5c0f\u5316",
          "chat.btn.reset.tooltip":
            "\u56de\u5fa9\u539f\u4f86\u5927\u5c0f\uff08\u7e2e\u5c0f\uff09",
          "chat.btn.sticker": "\u8cbc\u5716",
          "chat.btn.sticker.tooltip": "\u8cbc\u5716",
          "chat.btn.voip": "\u514d\u8cbb\u901a\u8a71",
          "chat.contact.label": "\u806f\u7d61\u8cc7\u8a0a",
          "chat.context.menu.search.name": "\u641c\u5c0b\u59d3\u540d",
          "chat.context.menu.send.contact":
            "\u5206\u4eab\u597d\u53cb\u8cc7\u8a0a",
          "chat.context.menu.talk": "1\u5c0d1\u804a\u5929",
          "chat.desc.quit.uploading":
            "\u60a8\u6b63\u5728\u50b3\u9001\u6a94\u6848\u81f3\u804a\u5929\u5ba4\uff0c\n\u73fe\u5728\u95dc\u9589LINE\u5c07\u53ef\u80fd\u5c0e\u81f4\u6a94\u6848\u7121\u6cd5\u6b63\u5e38\u50b3\u9001\u3002",
          "chat.edit.alert.unavailable.picture":
            "\u4fdd\u5b58\u671f\u9650\u5df2\u904e\uff0c\u6545\u7121\u6cd5\u8b80\u53d6\u7167\u7247\u3002",
          "chat.emoji.label.animation.unavailable":
            "\u60a8\u53ef\u65bc\u624b\u6a5f\u78ba\u8a8d\u52d5\u614b\u8cbc\u5716\u7684\u6548\u679c\u3002",
          "chat.emoji.label.recentIconDesc1":
            "\u986f\u793a\u6700\u8fd1\u4f7f\u7528\u7684\u8868\u60c5\u8cbc",
          "chat.emoji.label.recentIconDesc2":
            "\u5411\u597d\u53cb\u50b3\u9001\u8868\u60c5\u8cbc\u5427\uff01",
          "chat.emoji.label.recentLetterDesc1":
            "\u986f\u793a\u6700\u8fd1\u4f7f\u7528\u7684\u8868\u60c5\u7b26\u865f",
          "chat.emoji.label.recentLetterDesc2":
            "\u5411\u597d\u53cb\u50b3\u9001\u8868\u60c5\u7b26\u865f\u5427\uff01",
          "chat.emoji.label.recentStickerDesc1":
            "\u986f\u793a\u6700\u8fd1\u4f7f\u7528\u7684\u8cbc\u5716",
          "chat.emoji.label.recentStickerDesc2":
            "\u5411\u597d\u53cb\u50b3\u9001\u8cbc\u5716\u5427\uff01",
          "chat.err.file.broken":
            "\u6a94\u6848\u5c1a\u672a\u5132\u5b58\u3002\n\u8acb\u78ba\u8a8d\u96fb\u8166\u5bb9\u91cf\u3002",
          "chat.err.file.download.failed":
            "\u6a94\u6848\u7121\u6cd5\u5132\u5b58\u3002",
          "chat.err.file.download.localError":
            "\u6a94\u6848\u7121\u6cd5\u5132\u5b58\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "chat.err.file.exceed.capacity":
            "\u672c\u6a94\u6848\u8d85\u904e\u6bcf\u6b21\u53ef\u50b3\u9001\u7684\u5bb9\u91cf\u4e0a\u9650\uff08%1\uff09\uff0c\u6240\u4ee5\u7121\u6cd5\u50b3\u9001\u3002",
          "chat.err.file.exceed.dailyCapacity":
            "\u5df2\u8d85\u904e\u6bcf\u5929\u53ef\u50b3\u9001\u7684\u6a94\u6848\u4e0a\u9650\uff08%1\uff09\uff0c\u6240\u4ee5\u672c\u6a94\u6848\u7121\u6cd5\u50b3\u9001\u3002",
          "chat.err.file.folderPermission":
            "\u60a8\u6240\u9078\u64c7\u7684\u8cc7\u6599\u593e\u7121\u6cd5\u5132\u5b58\u6a94\u6848\u3002\n\u8acb\u65bc\u8b8a\u66f4\u5132\u5b58\u76ee\u7684\u5730\u4e4b\u5f8c\uff0c\u518d\u8a66\u4e00\u6b21\u3002",
          "chat.err.file.need.space":
            "\u624b\u6a5f\u5167\u90e8\u7684\u5132\u5b58\u7a7a\u9593\u4e0d\u8db3\uff0c\u8acb\u78ba\u8a8d\u5176\u5269\u9918\u5bb9\u91cf\u3002",
          "chat.err.file.open":
            "\u6b64\u6a94\u6848\u4f7f\u7528\u4e2d\u3002\u8acb\u5148\u95dc\u9589\u6a94\u6848\u518d\u91cd\u65b0\u50b3\u9001\u3002",
          "chat.err.file.some.unpardoned":
            "\u5f88\u62b1\u6b49\uff0c\u672c\u6a94\u6848\u985e\u578b\u7121\u6cd5\u50b3\u9001\u3002\n\u82e5\u60a8\u4e00\u6b21\u9078\u64c7\u591a\u7b46\u6a94\u6848\uff0c\u5176\u9918\u6a94\u6848\u5c07\u6703\u88ab\u6b63\u5e38\u50b3\u9001\u3002\n",
          "chat.err.file.unpardoned":
            "\u5f88\u62b1\u6b49\uff0c\u672c\u6a94\u6848\u985e\u578b\u7121\u6cd5\u50b3\u9001\u3002",
          "chat.err.media.copyFailed":
            "\u7de8\u78bc\u8655\u7406\u4e2d\u3002\n\u8acb\u7a0d\u5019\u518d\u8a66\u3002",
          "chat.err.media.infoLoadFailed":
            "\u7db2\u8def\u767c\u751f\u554f\u984c\uff0c \u7cfb\u7d71\u7121\u6cd5\u6b63\u5e38\u57f7\u884c\uff01 \n\u8acb\u518d\u8a66\u4e00\u6b21\uff01",
          "chat.error.badwords":
            "\u6b64\u5167\u5bb9\u7121\u6cd5\u50b3\u9001\uff0c\n\u8acb\u586b\u5beb\u5176\u4ed6\u5167\u5bb9",
          "chat.error.popup.noauth":
            "LINE\u6c92\u6709\u6b0a\u9650\u958b\u555f\u6b64\u8cc7\u6599\u593e\u4e2d\u7684\u6a94\u6848\u3002",
          "chat.file.audio.sizeExceeds":
            "\u60a8\u53ef\u50b3\u900130MB\u4ee5\u5167\u7684\u8072\u97f3\u6a94\u3002",
          "chat.file.cancel.tooltip": "\u53d6\u6d88",
          "chat.file.cantFindFile":
            "\u7121\u6cd5\u627e\u5230\u8a72\u7b46\u6a94\u6848",
          "chat.file.closeConfirm":
            "\u95dc\u9589\u8996\u7a97\u5f8c\uff0c\n\u7cfb\u7d71\u5c07\u81ea\u52d5\u53d6\u6d88\u63a5\u6536\u6216\u50b3\u9001\u6a94\u6848\u3002",
          "chat.file.countExceeds":
            "\u4e00\u6b21\u6700\u591a\u53ef\u50b3\u9001%1\u500b\u6a94\u6848",
          "chat.file.label.expired": "\u5df2\u904e\u671f",
          "chat.file.video.sizeExceeds":
            "\u60a8\u53ef\u50b3\u9001200MB\u4ee5\u5167\u7684\u5f71\u7247\u6a94\u3002",
          "chat.flex.btn.send": "\u5b8c\u6210",
          "chat.flex.date.select": "\u9078\u64c7\u65e5\u671f",
          "chat.flex.datetime.select":
            "\u9078\u64c7\u65e5\u671f\u8207\u6642\u9593",
          "chat.flex.error.unknown":
            "\u60a8\u76ee\u524d\u7684LINE\u7248\u672c\u7121\u6cd5\u4f7f\u7528\u6b64\u529f\u80fd",
          "chat.flex.time.select": "\u9078\u64c7\u6642\u9593",
          "chat.group.msg.e2ee.guide":
            "\u672c\u804a\u5929\u5ba4\u5c07\u53d7\u5230Letter\nSealing\u529f\u80fd\u7684\u52a0\u5bc6\u4fdd\u8b77",
          "chat.group.noMember.placeholder":
            "\u6c92\u6709\u5176\u4ed6\u6210\u54e1\u3002",
          "chat.grouphome.label.enjoySns.title":
            "\u5728\u9019\u500b\u6709\u8da3\u7684\u793e\u7fa4\u7db2\u8def\u548c\u670b\u53cb\u4e00\u8d77\u5206\u4eab\u8a18\u4e8b\u672c\u8207\u76f8\u7c3f\uff01\n",
          "chat.image.tooltip": "\u5716\u7247",
          "chat.input.placeholder": "\u8f38\u5165\u8a0a\u606f",
          "chat.inputbar.msg.album": "\u76f8\u7c3f",
          "chat.inputbar.msg.albumcontents": "\u76f8\u7c3f\u9805\u76ee",
          "chat.label.del": "\u522a\u9664",
          "chat.label.makeAlbum":
            "\u5df2\u5efa\u7acb\u300c%1\u300d\u76f8\u7c3f\u3002",
          "chat.label.open": "\u986f\u793a",
          "chat.label.openFile": "\u958b\u555f\u6a94\u6848",
          "chat.label.openFolder": "\u958b\u555f\u8cc7\u6599\u593e",
          "chat.label.playback": "\u64ad\u653e",
          "chat.label.retry": "\u91cd\u50b3",
          "chat.label.save": "\u5132\u5b58",
          "chat.label.saveAs": "\u53e6\u5b58\u65b0\u6a94",
          "chat.label.saveOpen": "\u5132\u5b58\u4e26\u958b\u555f",
          "chat.label.sendFail": "\u7121\u6cd5\u50b3\u9001",
          "chat.label.share": "\u5206\u4eab",
          "chat.label.showAlbum": "\u986f\u793a\u76f8\u7c3f",
          "chat.label.showPost": "\u67e5\u770b\u8a18\u4e8b\u672c",
          "chat.label.showPrev":
            "\u986f\u793a\u66f4\u65e9\u7684\u8a0a\u606f\u5167\u5bb9",
          "chat.label.totalMediaCount": "\u5171%1\u4ef6",
          "chat.linemusic.shared": "\u97f3\u6a02\u5df2\u5206\u4eab\u3002\xa0",
          "chat.linemusic.shared.other":
            "%1\u5df2\u8207\u60a8\u5206\u4eab\u97f3\u6a02\u3002",
          "chat.list.call":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> \u901a\u8a71\u6642\u9593]]>',
          "chat.list.call.canceled":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> \u60a8\u5df2\u53d6\u6d88\u901a\u8a71]]>',
          "chat.list.call.icon":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\">]]>',
          "chat.list.call.missedCall":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> \u672a\u63a5\u4f86\u96fb]]>',
          "chat.list.call.rejected":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> \u7121\u4eba\u63a5\u807d]]>',
          "chat.list.desc.read.unread.all":
            "\u6240\u6709\u8a0a\u606f\u7686\u5df2\u6a19\u8a18\u70ba\u5df2\u8b80\u3002",
          "chat.list.group.createdby": "\u7fa4\u7d44\u5efa\u7acb\u8005\uff1a",
          "chat.list.group.invite":
            "%1\u9080\u8acb\u60a8\u52a0\u5165\u7fa4\u7d44\u3002",
          "chat.list.group.layer":
            "\u60a8\u5df2\u88ab\u9080\u8acb\u81f3\u6b64\u7fa4\u7d44\u3002",
          "chat.list.group.nogroupcreator":
            "\u6b64\u7fa4\u7d44\u7684\u5efa\u7acb\u8005\u76ee\u524d\u5df2\u4e0d\u5728\u6b64\u7fa4\u7d44\u5167\u3002",
          "chat.list.linecall": "[LINE Premium Call]",
          "chat.list.mention": "\u60a8\u5df2\u88ab\u6a19\u8a3b\u3002",
          "chat.list.menu.clear.all.unreadmessage":
            "\u5168\u90e8\u6a19\u8a18\u70ba\u5df2\u8b80",
          "chat.list.menu.sort.favorites": "\u6211\u7684\u6700\u611b",
          "chat.list.menu.sort.time": "\u6536\u5230\u7684\u6642\u9593",
          "chat.list.menu.sort.unreadcount": "\u672a\u8b80\u8a0a\u606f",
          "chat.list.menu.tooltip": "\u6392\u5e8f\u4f9d\u64da",
          "chat.list.sortBtn.tooltip": "\u672a\u8b80\u8a0a\u606f",
          "chat.list.sortByUnread.desc":
            "\u5df2\u5c07\u672a\u8b80\u8a0a\u606f\u6392\u5217\u81f3\u4e0a\u65b9\u3002 ",
          "chat.menu.Image.download": "\u4e0b\u8f09\u5b8c\u7562\u3002",
          "chat.menu.Image.download.fail":
            "\u7121\u6cd5\u5132\u5b58\u6b64\u6a94\u6848\uff0c\n\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "chat.menu.alarmOff": "\u95dc\u9589\u63d0\u9192",
          "chat.menu.alarmOn": "\u958b\u555f\u63d0\u9192",
          "chat.menu.albums": "\u76f8\u7c3f",
          "chat.menu.alwaysTop": "\u56fa\u5b9a\u756b\u9762",
          "chat.menu.backgroundSetting": "\u80cc\u666f\u8a2d\u5b9a",
          "chat.menu.backgroundSetting.apply": "\u5957\u7528",
          "chat.menu.backgroundSetting.cancel": "\u53d6\u6d88",
          "chat.menu.backgroundSetting.file": "\u9078\u64c7\u6a94\u6848",
          "chat.menu.backgroundSetting.image.failed":
            "\u8a72\u5716\u7247\u7121\u6cd5\u4f7f\u7528",
          "chat.menu.backgroundSetting.image.maximumUploadableSize":
            "\u60a8\u53ea\u80fd\u4e0a\u50b3%1MB\u4ee5\u4e0b\u7684\u5716\u7247\u3002",
          "chat.menu.backgroundSetting.option": "\u986f\u793a\u65b9\u5f0f",
          "chat.menu.backgroundSetting.option.detail": "\u4e26\u6392",
          "chat.menu.backgroundSetting.option.fill": "\u586b\u6eff",
          "chat.menu.backgroundSetting.photo.save.failed":
            "\u7167\u7247\u7121\u6cd5\u5132\u5b58",
          "chat.menu.backgroundSetting.photo.transparency":
            "\u900f\u660e\u5ea6",
          "chat.menu.backgroundSetting.photoGuide":
            "\u81ea\u8a02\u60a8\u7684\u804a\u5929\u5ba4\u80cc\u666f\u3002",
          "chat.menu.backgroundSetting.reset": "\u91cd\u8a2d",
          "chat.menu.backgroundSetting.select": "\u9078\u64c7\u80cc\u666f",
          "chat.menu.backgroundSetting.tab.color": "\u984f\u8272",
          "chat.menu.backgroundSetting.tab.illustration": "\u63d2\u5716",
          "chat.menu.backgroundSetting.tab.photo": "\u5716\u7247",
          "chat.menu.backgroundSetting.unavailableInDarkmode":
            "\u672c\u529f\u80fd\u4e0d\u9069\u7528\u65bc\u6df1\u8272\u6a21\u5f0f",
          "chat.menu.copy": "\u8907\u88fd",
          "chat.menu.delete":
            "\u522a\u9664\u6240\u6709\u804a\u5929\u8a18\u9304",
          "chat.menu.group.noMember": "\u6c92\u6709\u5176\u4ed6\u6210\u54e1",
          "chat.menu.invite": "\u9080\u8acb",
          "chat.menu.invite.group": "\u6210\u54e1\uff0e\u9080\u8acb",
          "chat.menu.leave": "\u96e2\u958b",
          "chat.menu.make": "\u5efa\u7acb\u7fa4\u7d44",
          "chat.menu.msg.announce": "\u8a2d\u70ba\u516c\u544a",
          "chat.menu.msg.unsend": "\u6536\u56de",
          "chat.menu.openAlbum": "\u986f\u793a\u6240\u6709\u5716\u7247",
          "chat.menu.openAlbum.download": "\u4e0b\u8f09\u5b8c\u7562\u3002",
          "chat.menu.openAlbum.download.fail":
            "\u7121\u6cd5\u4e0b\u8f09\u9805\u76ee\u3002",
          "chat.menu.openAlbum.download.fail.folderPermission":
            "\u7121\u6cd5\u4e0b\u8f09\u81f3\u60a8\u6240\u9078\u64c7\u7684\u8cc7\u6599\u593e\u3002\n\u8acb\u8b8a\u66f4\u60a8\u7684\u4e0b\u8f09\u4f4d\u7f6e\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "chat.menu.openAlbum.download.open": "\u958b\u555f\u8cc7\u6599\u593e",
          "chat.menu.openAlbum.downloading": "\u6b63\u5728\u4e0b\u8f09\u2026",
          "chat.menu.openAlbum.retry": "\u518d\u8a66\u4e00\u6b21",
          "chat.menu.openAlbum.saveKeep": "\u5df2\u5132\u5b58\u81f3Keep\u3002",
          "chat.menu.openAlbum.saveKeep.open": "\u958b\u555fKeep",
          "chat.menu.openAlbum.savingKeep":
            "\u6b63\u5728\u5132\u5b58\u81f3Keep\u2026",
          "chat.menu.openAlbum.savingKeep.fail":
            "\u7121\u6cd5\u5132\u5b58\u81f3Keep\u3002",
          "chat.menu.openAlbum.selected":
            "\u5df2\u9078\u64c7%1\u500b\u9805\u76ee",
          "chat.menu.openLink": "\u6aa2\u8996\u6240\u6709\u7db2\u5740",
          "chat.menu.openLink.noURL":
            "\u6b64\u804a\u5929\u5ba4\u4e2d\u6c92\u6709\u5206\u4eab\u4efb\u4f55\u7db2\u5740\u3002",
          "chat.menu.paste": "\u8cbc\u4e0a",
          "chat.menu.recommend": "\u63a8\u85a6",
          "chat.menu.save": "\u5132\u5b58\u804a\u5929",
          "chat.menu.save.note": "\u5132\u5b58\u81f3\u8a18\u4e8b\u672c",
          "chat.menu.searchMsgs": "\u641c\u5c0b\u804a\u5929",
          "chat.menu.selectAll": "\u5168\u9078",
          "chat.menu.selectedCopy": "\u8907\u88fd\u6240\u9078\u6587\u5b57",
          "chat.menu.settings": "\u8a2d\u5b9a",
          "chat.menu.showAllContents": "\u986f\u793a\u6240\u6709\u5167\u5bb9",
          "chat.menu.sticker.openWebStore": "\u8cbc\u5716\u5c0f\u8216",
          "chat.menu.sticker.showDetail": "\u958b\u555f",
          "chat.menu.translation": "\u7ffb\u8b6f",
          "chat.message.present.emoji.receive":
            "\u60a8\u6536\u5230\u79ae\u7269\u8868\u60c5\u8cbc\u4e86\uff01",
          "chat.message.present.receive.confirm": "\u63a5\u53d7",
          "chat.message.present.sticker.receive":
            "\u60a8\u6536\u5230\u79ae\u7269\u8cbc\u5716\u4e86\uff01",
          "chat.message.present.theme.receive":
            "\u60a8\u6536\u5230\u79ae\u7269\u4e3b\u984c\u4e86\uff01\n\u8acb\u81f3\u667a\u6167\u624b\u6a5f\u4e0a\u7684LINE\u4e0b\u8f09\u3002",
          "chat.message.sharealbum": "\u5df2\u5206\u4eab\u76f8\u7c3f\u3002",
          "chat.message.sharenote":
            "\u5df2\u5206\u4eab\u8a18\u4e8b\u672c\u3002",
          "chat.msg.album.addphoto.other":
            "%n\u500b\u9805\u76ee\u5df2\u65b0\u589e\u81f3\u76f8\u7c3f\u3002",
          "chat.msg.album.create":
            "\u5df2\u5efa\u7acb\u300c%1\u300d\u76f8\u7c3f\u3002",
          "chat.msg.album.delete":
            "%1\u5df2\u5c07\u300c%2\u300d\u7684\u76f8\u7c3f\u522a\u9664",
          "chat.msg.album.removephoto":
            "%1\u5f9e\u76f8\u7c3f\u300c%2\u300d\u522a\u9664\u4e86\u9805\u76ee\u3002",
          "chat.msg.album.rename":
            "%1\u5df2\u5c07\u76f8\u7c3f\u540d\u7a31\u7531\u300c%2\u300d\u6539\u70ba\u300c%3\u300d",
          "chat.msg.album.viewPhoto": "\u986f\u793a\u76f8\u7c3f",
          "chat.msg.applink.app.recv":
            "\u60a8\u5df2\u63a8\u85a6\u4e86%1\uff0c\u8acb\u81f3\u667a\u6167\u624b\u6a5f\u4e0a\u78ba\u8a8d\u8a0a\u606f\u5167\u5bb9\u3002",
          "chat.msg.applink.app.sent": "\u60a8\u63a8\u85a6\u4e86%1",
          "chat.msg.applink.friend.recv":
            "\u60a8\u7684%1\u4e0a\u6709\u65b0\u7684\u597d\u53cb\u7533\u8acb\uff0c\u8acb\u81f3\u667a\u6167\u624b\u6a5f\u4e0a\u78ba\u8a8d\u8a0a\u606f\u5167\u5bb9\u3002",
          "chat.msg.applink.friend.sent":
            "\u60a8\u5df2\u5728%1\u50b3\u9001\u4e86\u597d\u53cb\u7533\u8acb",
          "chat.msg.boundnoun": "\ub2d8",
          "chat.msg.call.canceled": "\u53d6\u6d88",
          "chat.msg.call.e2ee.guide":
            '<![CDATA[\u6b64\u70ba\u555f\u7528Letter Sealing\u7684\u901a\u8a71\u3002\n<img src=\\"image://chat/e2ee_icon.png\\" width="16" height="11">\u5716\u6a19\u5c07\u986f\u793a\u5728\u5df2\u63d0\u5347\u5b89\u5168\u6027\u7684\u901a\u8a71\u4e2d\u3002]]>',
          "chat.msg.call.missedCall": "\u672a\u63a5\u4f86\u96fb",
          "chat.msg.call.rejected": "\u7121\u56de\u61c9",
          "chat.msg.changeGroupImage":
            "%1\u66f4\u6539\u4e86\u7fa4\u7d44\u5716\u7247",
          "chat.msg.changeGroupName":
            "%1\u5df2\u5c07\u7fa4\u7d44\u540d\u7a31\u6539\u70ba%2",
          "chat.msg.chatevent.unknown":
            "\u7121\u6cd5\u78ba\u8a8d\u6b64\u63d0\u9192\u7684\u5167\u5bb9\u3002\n\u8acb\u81f3\u667a\u6167\u624b\u6a5f\u4e0a\u78ba\u8a8d\u3002",
          "chat.msg.e2ee.decryptingMsg": "\u89e3\u5bc6\u4e2d\u2026",
          "chat.msg.e2ee.guide":
            "\u672c\u804a\u5929\u5ba4\u5c07\u53d7\u5230Letter\nSealing\u529f\u80fd\u7684\u52a0\u5bc6\u4fdd\u8b77",
          "chat.msg.e2ee.needKeyExchange":
            "\u6b64\u8a0a\u606f\u5df2\u52a0\u5bc6\u3002\n\u60a8\u5fc5\u9808\u5148\u5b8c\u6210\u7528\u6236\u78ba\u8a8d\u624d\u80fd\u95b1\u8b80\u6b64\u8a0a\u606f\u3002",
          "chat.msg.e2ee.recvMsg.decryptionFailed":
            "Letter Sealing\n\u7531\u65bc\u7121\u6cd5\u9032\u884c\u89e3\u5bc6\uff0c\u56e0\u6b64\u7121\u6cd5\u986f\u793a\u8a0a\u606f\u3002\n\u8acb\u8981\u6c42\u60a8\u7684\u597d\u53cb\u91cd\u65b0\u50b3\u9001\u8a0a\u606f\u3002",
          "chat.msg.e2ee.sentMsg.decryptionFailed":
            "\u7121\u6cd5\u89e3\u5bc6\u6b64\u8a0a\u606f\u3002\n\u7531\u65bc\u6b64\u8a0a\u606f\u672a\u6b63\u5e38\u5099\u4efd\u53ca\u5fa9\u539f\u81ea\u60a8\u7684\u820a\u88dd\u7f6e\uff0c\u56e0\u6b64\u60a8\u76ee\u524d\u4f7f\u7528\u7684\u88dd\u7f6e\u4e0a\u7121\u6cd5\u986f\u793a\u6b64\u8a0a\u606f\u3002",
          "chat.msg.e2ee.setting.disabled":
            "\u6b64\u8a0a\u606f\u5df2\u52a0\u5bc6\uff0c\u8acb\u81f3\u624b\u6a5f\u4e0a\u67e5\u770b\u3002",
          "chat.msg.file.change.type.audio":
            "\u672c\u8072\u97f3\u8a0a\u606f\u7684\u6a94\u6848\u592a\u5927\uff0c\u67d0\u4e9b\u624b\u6a5f\u5c07\u6709\u53ef\u80fd\u7121\u6cd5\u64ad\u653e\u3002",
          "chat.msg.file.change.type.video":
            "\u672c\u5f71\u7247\u6a94\u7684\u6a94\u6848\u592a\u5927\uff0c\u67d0\u4e9b\u624b\u6a5f\u5c07\u6709\u53ef\u80fd\u7121\u6cd5\u64ad\u653e\u3002",
          "chat.msg.file.ext": "\u526f\u6a94\u540d",
          "chat.msg.file.period": "\u4e0b\u8f09\u671f\u9650 : ~",
          "chat.msg.file.received": "%1\u50b3\u9001\u4e86\u6a94\u6848",
          "chat.msg.file.sent": "\u6a94\u6848\u5df2\u50b3\u9001",
          "chat.msg.file.size": "\u6a94\u6848\u5927\u5c0f : %1",
          "chat.msg.file.waiting": "\u7b49\u5019\u4e0a\u50b3",
          "chat.msg.groupInvite": "%1\u9080\u8acb%2\u52a0\u5165\u7fa4\u7d44",
          "chat.msg.groupboard.updated":
            "\u7fa4\u7d44\u7559\u8a00\u677f\u4e0a\u6709\u65b0\u5167\u5bb9\u3002\uff0a\u672c\u529f\u80fd\u50c5\u9069\u7528\u65bc\u667a\u6167\u624b\u6a5f\u7528\u6236\u3002",
          "chat.msg.home.shared":
            "\u5df2\u5206\u4eab%1\u7684\u8cbc\u6587\u3002",
          "chat.msg.inviteCancel": "%1\u5df2\u53d6\u6d88%2\u7684\u9080\u8acb",
          "chat.msg.joinGroup": "%1\u52a0\u5165\u7fa4\u7d44",
          "chat.msg.kickout": "%1\u5df2\u8b93%2\u9000\u51fa\u7fa4\u7d44",
          "chat.msg.leave": "%1\u96e2\u958b\u804a\u5929",
          "chat.msg.leaveGroup": "%1\u5df2\u9000\u51fa\u7fa4\u7d44",
          "chat.msg.leavegroup.1.n.confirm":
            "\u78ba\u5b9a\u8981\u9000\u51fa\u55ce\uff1f\u60a8\u5c07\u7121\u6cd5\u518d\u700f\u89bd\u5176\u804a\u5929\u8a18\u9304\u3002",
          "chat.msg.nomember": "\u6c92\u6709\u6210\u54e1",
          "chat.msg.preview.default":
            "\u9ede\u9078\u6b64\u8655\u4ee5\u958b\u555f\u6b64\u9023\u7d50\u3002",
          "chat.msg.read": "\u5df2\u8b80",
          "chat.msg.search.cancelSearch": "\u53d6\u6d88",
          "chat.msg.search.hint.fromName":
            "\u8acb\u8f38\u5165\u50b3\u8a0a\u7528\u6236\u7684\u540d\u7a31",
          "chat.msg.search.hint.message":
            "\u8acb\u8f38\u5165\u804a\u5929\u5167\u5bb9",
          "chat.msg.search.hint.roomName":
            "\u641c\u5c0b\u804a\u5929\u548c\u8a0a\u606f",
          "chat.msg.search.result.hint.addOption":
            "\u8acb\u5148\u589e\u52a0\u804a\u5929\u5ba4\u6216\u50b3\u8a0a\u7528\u6236\u7684\u8cc7\u8a0a\uff0c\u7136\u5f8c\u518d\u641c\u5c0b\u4e00\u6b21\u3002",
          "chat.msg.search.result.hint.noResultReason1":
            "\u82e5\u60a8\u66f4\u63db\u96fb\u8166\uff0c\u5c07\u6709\u53ef\u80fd\u7121\u6cd5\u627e\u5230\u641c\u5c0b\u7d50\u679c\u3002 ",
          "chat.msg.search.result.hint.noResultReason2":
            "\u82e5\u60a8\u67092\u500b\u661f\u671f\u4ee5\u4e0a\u672a\u4f7f\u7528\u96fb\u8166\u7248\uff0c\u5c07\u6709\u53ef\u80fd\u7121\u6cd5\u627e\u5230\u641c\u5c0b\u7d50\u679c\u3002 ",
          "chat.msg.search.result.noResult":
            "\u627e\u4e0d\u5230\u7b26\u5408\u7684\u8cc7\u6599\u3002",
          "chat.msg.search.title.date": "\u65e5\u671f",
          "chat.msg.search.title.fromName": "\u50b3\u8a0a\u7528\u6236",
          "chat.msg.search.title.message": "\u5167\u5bb9",
          "chat.msg.search.title.roomName": "\u804a\u5929",
          "chat.msg.smartphone":
            "\u8acb\u81f3\u667a\u6167\u624b\u6a5f\u4e0a\u78ba\u8a8d\u8a0a\u606f\u5167\u5bb9\u3002",
          "chat.msg.start.unreadMessage":
            "\u4ee5\u4e0b\u70ba\u5c1a\u672a\u95b1\u8b80\u7684\u8a0a\u606f",
          "chat.msg.sticker.gift.from.buddy":
            "\u70ba\u60a8\u9001\u4e0a\u79ae\u7269\uff01\u5feb\u4f86\u4e0b\u8f09\u4f7f\u7528\u5427\uff01",
          "chat.msg.sticker.gift.from.me": "\u79ae\u7269\u5df2\u9001\u51fa",
          "chat.msg.sticker.period.expired":
            "\u4f7f\u7528\u6548\u671f\u5df2\u904e\u3002\n\u8acb\u65bc\u667a\u6167\u624b\u6a5f\u4e0a\u91cd\u65b0\u8cfc\u8cb7\u4e4b\u5f8c\uff0c\u5373\u53ef\u518d\u5ea6\u4f7f\u7528\u3002",
          "chat.msg.sticon.period.expired":
            "\u300c%1\u300d\u7684\u4f7f\u7528\u6548\u671f\u5df2\u904e\u3002\u8acb\u524d\u5f80\u624b\u6a5f\u7248LINE\u7684\u8cbc\u5716\u5c0f\u8216\u91cd\u65b0\u8cfc\u8cb7\u4f7f\u7528\u3002",
          "chat.msg.sync": "\u8a0a\u606f\u540c\u6b65\u4e2d...",
          "chat.msg.text.seeAll": "\u986f\u793a\u66f4\u591a",
          "chat.msg.theme.gift.from.me": "\u79ae\u7269\u5df2\u9001\u51fa",
          "chat.msg.unknown.message":
            "\u672c\u8a0a\u606f\u7121\u6cd5\u986f\u793a\u3002",
          "chat.msg.unread": "\u5df2\u8b80\uff08\u672a\u8b80\uff09",
          "chat.msgbox.alarmoff.description":
            "\u73fe\u5728\u7576\u804a\u5929\u5ba4\u63a5\u6536\u5230\u65b0\u8a0a\u606f\u6642\uff0c \u5c07\u4e0d\u6703\u986f\u793a\u63d0\u9192\u3002",
          "chat.msgbox.bannedWord":
            "\u60a8\u7684\u8a0a\u606f\u5167\u542b\u6709\u654f\u611f\u8a5e\uff0c\u8acb\u8abf\u6574\u5f8c\u518d\u50b3\u9001\u4e00\u6b21\u3002",
          "chat.msgbox.save.description":
            "\u5099\u4efd\u5167\u5bb9\u5c07\u50c5\u9650\u6b64\u9801\u9762\u5167\u7684\u8a0a\u606f\uff0c \u4e14\u6703\u4ee5\u6587\u5b57\u6a94\u5132\u5b58\u3002\n",
          "chat.msgbox.save.dontShow":
            "\u4e0d\u518d\u986f\u793a\u6b64\u8a0a\u606f",
          "chat.msgbox.save.empty":
            "\u672a\u6709\u4efb\u4f55\u8a0a\u606f\u53ef\u4f9b\u5132\u5b58",
          "chat.noMember.group.error.noAuth":
            "\u672c\u529f\u80fd\u50c5\u4f9b\u7fa4\u7d44\u6210\u54e1\u4f7f\u7528\u3002",
          "chat.noMember.singleRoom.error.album":
            "\u7121\u6cd5\u65bc\u6b64\u804a\u5929\u5ba4\u4e2d\u65b0\u589e\u5176\u4ed6\u9805\u76ee\u6216\u5efa\u7acb\u5176\u4ed6\u76f8\u7c3f\u3002",
          "chat.noMember.singleRoom.error.note":
            "\u7121\u6cd5\u5728\u6b64\u804a\u5929\u5ba4\u4e2d\u65b0\u589e\u5176\u4ed6\u8a18\u4e8b\u672c\u3002",
          "chat.noinput.group.invitation":
            "\u8acb\u52a0\u5165\u7fa4\u7d44\u958b\u59cb\u804a\u5929\u3002",
          "chat.notes.notification.sharenote":
            "\u5df2\u5206\u4eab\u8a18\u4e8b\u672c\u3002",
          "chat.notimessage.sharealbum": "\u5df2\u5206\u4eab\u76f8\u7c3f\u3002",
          "chat.poll.message.btn": "\u67e5\u770b\u8a73\u7d30\u5167\u5bb9",
          "chat.poll.title": "\u6295\u7968",
          "chat.popup.btn.pasteAsImage": "\u5716\u7247",
          "chat.popup.btn.pasteAsText": "\u6587\u5b57",
          "chat.popup.clipboard.withImage":
            "\u8acb\u9078\u64c7\u8cbc\u4e0a\u7684\u683c\u5f0f\u3002",
          "chat.popup.desc.grouplimit":
            "\u7fa4\u7d44\u6578\u91cf\u5df2\u9054\u4e0a\u9650\uff01\u82e5\u8981\u52a0\u5165\u6b64\u7fa4\u7d44\uff0c\u8acb\u9000\u51fa\u4efb\u4e00\u7fa4\u7d44\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "chat.popup.title.grouplimit": "\u7121\u6cd5\u52a0\u5165\u7fa4\u7d44",
          "chat.popupbutton.delete": "\u522a\u9664\u8a0a\u606f",
          "chat.popupbutton.resend": "\u91cd\u50b3\u8a0a\u606f",
          "chat.popupdesc.serveroutage1":
            "\u7531\u65bc\u4f3a\u670d\u5668\u767c\u751f\u932f\u8aa4\uff0c\u5c0d\u65b9\u7121\u6cd5\u67e5\u770b\u6b64\u8a0a\u606f\u3002\u662f\u5426\u8981\u4ee5\u65b0\u8a0a\u606f\u7684\u5f62\u5f0f\u518d\u6b21\u50b3\u9001\uff1f",
          "chat.popupdesc.serveroutagegroup":
            "\u7531\u65bc\u4f3a\u670d\u5668\u767c\u751f\u932f\u8aa4\uff0c\u7fa4\u7d44\u5167\u90e8\u5206\u7684\u7528\u6236\u7121\u6cd5\u67e5\u770b\u6b64\u8a0a\u606f\u3002\u662f\u5426\u8981\u4ee5\u65b0\u8a0a\u606f\u7684\u5f62\u5f0f\u91cd\u65b0\u50b3\u9001\uff1f",
          "chat.popuptitle.serveroutage":
            "\u662f\u5426\u8981\u91cd\u50b3\u8a0a\u606f\uff1f",
          "chat.profile.menu.displayName.search":
            "\u4ee5\u540d\u7a31\u641c\u5c0b\u8a0a\u606f",
          "chat.receiveicon.linecall.failed":
            "chat/chat_word_receive_linecallfail_icon.png",
          "chat.receiveicon.linecall.success":
            "chat/chat_word_receive_linecallsucess_icon.png",
          "chat.reply.album": "\u76f8\u7c3f\uff1a%1",
          "chat.reply.jump": "\u8df3\u81f3\u5148\u524d\u7684\u8a0a\u606f",
          "chat.reply.jump.delete":
            "\u8a72\u8a0a\u606f\u5df2\u4e0d\u5b58\u5728",
          "chat.reply.no.original.message":
            "\u7121\u6cd5\u8b80\u53d6\u539f\u59cb\u8a0a\u606f\u3002",
          "chat.reply.note.no.text": "\u8a18\u4e8b\u672c\u5206\u4eab\u65bc%1",
          "chat.reply.note.text": "\u8a18\u4e8b\u672c\uff1a %1",
          "chat.room.msg.invitorNotBuddy":
            "\u60a8\u6536\u5230%1\uff08\u672a\u5728\u597d\u53cb\u540d\u55ae\u5167\uff09\u50b3\u9001\u7684\u9080\u8acb\u51fd\u3002",
          "chat.save.location": "\u4f4d\u7f6e\u8a0a\u606f",
          "chat.sendicon.linecall.falied":
            "chat/chat_word_send_linecallfail_icon.png",
          "chat.sendicon.linecall.success":
            "chat/chat_word_send_linecallsucess_icon.png",
          "chat.setting.theme.snow.disable":
            "\u505c\u7528\u98c4\u96ea\u6548\u679c",
          "chat.setting.theme.snow.enable":
            "\u555f\u7528\u98c4\u96ea\u6548\u679c",
          "chat.share.notexist":
            "\u8a72\u7528\u6236\u7684\u5e33\u865f\u5df2\u522a\u9664\uff0c\u6216\u4e0d\u5b58\u5728\u3002",
          "chat.sharing.notification.sharealbum":
            "\u5df2\u5206\u4eab\u76f8\u7c3f\u3002",
          "chat.sharing.notification.sharenote":
            "\u5df2\u5206\u4eab\u8a18\u4e8b\u672c\u3002",
          "chat.status.block":
            "\u60a8\u7121\u6cd5\u8207\u5df2\u5c01\u9396\u7684\u5e33\u865f\u4e92\u76f8\u50b3\u9001\u8a0a\u606f\u3002",
          "chat.status.disconn":
            "\u76ee\u524d\u66ab\u6642\u7121\u6cd5\u50b3\u9001\u8a0a\u606f\uff01",
          "chat.status.e2ee.verification.fail":
            "Letter Sealing\u5e33\u865f\u8a8d\u8b49\u5df2\u88ab\u53d6\u6d88\u3002\n\n\u60a8\u5fc5\u9808\u5148\u8a8d\u8b49\u5e33\u865f\u624d\u80fd\u6aa2\u8996\u52a0\u5bc6\u8a0a\u606f\u3002\n",
          "chat.status.keyExchangeBtn": "\u7528\u6236\u78ba\u8a8d",
          "chat.status.leave":
            "\u7576\u60a8\u96e2\u958b\u672c\u804a\u5929\u5ba4\u5f8c\uff0c\u5c07\u7121\u6cd5\u7e7c\u7e8c\u65bc\u6b64\u50b3\u9001\u8a0a\u606f\u3002",
          "chat.status.needKeyExchange":
            "\u60a8\u5fc5\u9808\u5148\u5b8c\u6210\u7528\u6236\u78ba\u8a8d\uff0c\u624d\u80fd\u5728\u96fb\u8166\u7248LINE\u4f7f\u7528Letter Sealing\u52a0\u5bc6\u529f\u80fd\u3002",
          "chat.system.inviteeoverlimit":
            "\u4e0b\u5217\u7528\u6236\u6240\u52a0\u5165\u7684\u7fa4\u7d44\u6578\u91cf\u5df2\u9054\u4e0a\u9650\uff0c\u7121\u6cd5\u9080\u8acb\u5176\u52a0\u5165\u3002\n%1",
          "chat.system.msg.a.unsend": "%1\u5df2\u6536\u56de\u8a0a\u606f",
          "chat.system.msg.unsend": "\u5df2\u6536\u56de\u8a0a\u606f",
          "chat.systemmessage.upgradegroup":
            "\u7fa4\u7d44\u8a2d\u5b9a\u5df2\u8b8a\u66f4\uff0c\u5f80\u5f8c\u5c07\u53ea\u6709\u6536\u5230\u7fa4\u7d44\u6210\u54e1\u9080\u8acb\u7684\u7528\u6236\u624d\u53ef\u52a0\u5165\u7fa4\u7d44\u3002",
          "chat.title.chatMember": "\u804a\u5929\u6210\u54e1",
          "chat.toast.notifications.mute":
            "\u5df2\u95dc\u9589\u63d0\u9192\u3002",
          "chat.toast.notifications.unmute":
            "\u5df2\u958b\u555f\u63d0\u9192\u3002",
          "chat.trans.tooltip": "\u900f\u660e\u5ea6",
          "chat.video.play": "\u64ad\u653e",
          "chat.video.replay": "\u91cd\u64ad",
          "chat.video.tooltip": "\u5f71\u7247",
          "chatapp.giphy.forward":
            "\u900f\u904eGIPHY\u50b3\u9001\u7684GIF\u6a94\u6848\u7121\u6cd5\u8f49\u50b3\u3002",
          "chatapp.giphy.forward.next":
            "\u900f\u904eGIPHY\u50b3\u9001\u7684GIF\u6a94\u6848\u7121\u6cd5\u8f49\u50b3\u3002\u662f\u5426\u8981\u8f49\u50b3\u5176\u4ed6\u6a94\u6848\uff1f",
          "chatapp.giphy.keep":
            "\u900f\u904eGIPHY\u50b3\u9001\u7684GIF\u6a94\u6848\u7121\u6cd5\u5132\u5b58\u81f3Keep\u3002",
          "chatapp.giphy.keep.next":
            "\u900f\u904eGIPHY\u50b3\u9001\u7684GIF\u6a94\u6848\u7121\u6cd5\u5132\u5b58\u81f3Keep\u3002\u662f\u5426\u8981\u5132\u5b58\u5176\u4ed6\u6a94\u6848\uff1f",
          "chatl.share.alert.error":
            "\u7531\u65bc\u6b64\u8a0a\u606f\u5df2\u6536\u56de\uff0c\u7121\u6cd5\u5206\u4eab\u3002",
          "chatl.share.alert.max":
            "\u6700\u591a\u53ef\u9078\u64c7%1\u500b\u804a\u5929\u5ba4",
          "chatl.share.toast.multiple.other":
            "\u8a0a\u606f\u5df2\u5206\u4eab\u81f3 %n \u500b\u804a\u5929\u5ba4\u3002",
          "chatl.share.toast.single": "\u5df2\u8207%1\u5206\u4eab\u3002",
          "chatl.sharetotalk.title": "\u9078\u64c7\u50b3\u9001\u5c0d\u8c61",
          "chatlist.allinone.close.btn": "\u6536\u8d77\u804a\u5929\u8996\u7a97",
          "chatlist.allinone.open.btn": "\u5c55\u958b\u804a\u5929\u8996\u7a97",
          "chatlist.btn.startchat": "\u958b\u59cb\u804a\u5929",
          "chatlist.chooseChat.empty.btn": "\u986f\u793a\u65bc\u6b64\u8655",
          "chatlist.chooseChat.empty.desc":
            "\u6b64\u804a\u5929\u5ba4\u662f\u4ee5\u500b\u5225\u8996\u7a97\u958b\u555f\u3002\n\u60a8\u8981\u5c07\u8996\u7a97\u986f\u793a\u65bc\u6b64\u8655\u55ce\uff1f",
          "chatlist.context.menu.seperateChat.label":
            "\u4ee5\u500b\u5225\u8996\u7a97\u958b\u555f",
          "chatlist.guide.allinone.text":
            "\u9ede\u6b64\u53ef\u5728\u53f3\u5074\u5c55\u958b\u804a\u5929\u8996\u7a97\u3002",
          "chatlist.guide.chatStart.text":
            "\u958b\u59cb\u804a\u5929\u5427\uff01",
          "chatlist.hide.confirm":
            "\u96b1\u85cf\u804a\u5929\u5f8c\uff0c\u804a\u5929\u5167\u5bb9\u4e0d\u6703\u88ab\u522a\u9664\u3002 ",
          "chatlist.keepmemo.desc.msg":
            "\u804a\u5929\u5ba4\u5c31\u662f\u6211\u7684\u7955\u5bc6\u57fa\u5730\uff01\u4e0d\u7ba1\u6587\u5b57\u3001\u7167\u7247\u3001\u5f71\u7247\u6216\u9023\u7d50\uff0c\u901a\u901a\u90fd\u80fd\u6536\u9032\u53bb\uff01",
          "chatlist.keepmemo.desc.title": "Keep\u7b46\u8a18",
          "chatlist.search.hint.chatList": "\u641c\u5c0b\u804a\u5929\u5ba4",
          "chatlist.sort.unreadRoom":
            "\u986f\u793a\u542b\u6709\u672a\u8b80\u8a0a\u606f\u7684\u804a\u5929\u5ba4",
          "chatlive.end.popup.done": "\u7d50\u675f",
          "chatlive.error.notavailable":
            "\u5176\u4ed6\u6210\u54e1\u5df2\u958b\u59cb\u9032\u884c\u901a\u8a71\u3002",
          "chatlive.maximum":
            "\u53c3\u8207\u4eba\u6578\u5df2\u9054\u4e0a\u9650",
          "chatlive.msg.over.traffic":
            "\u76ee\u524d\u76f4\u64ad\u6d41\u91cf\u904e\u9ad8\u3002\n\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "chatlive.screen.share.ongoing.body":
            "\u6b63\u5728\u5206\u4eab\u60a8\u7684\u87a2\u5e55\u756b\u9762",
          "chatlive.screen.share.ongoing.stop": "\u505c\u6b62",
          "chatlive.screen.share.ongoing.top":
            "\u6b63\u5728\u5206\u4eab\u81ea\u5df1\u7684\u87a2\u5e55\u756b\u9762",
          "chatlive.screen.share.select.body":
            "\u5373\u5c07\u5206\u4eab\u96fb\u8166\u756b\u9762\uff0c\u8acb\u9078\u64c7\u60a8\u8981\u4f7f\u7528\u7684\u756b\u9762\u3002",
          "chatlive.screen.share.select.done": "\u5206\u4eab",
          "chatlive.screen.share.select.item": "\u756b\u9762%1",
          "chatlive.screen.share.select.title":
            "\u9078\u64c7\u8981\u5206\u4eab\u7684\u87a2\u5e55\u756b\u9762",
          "chatlive.viewer.list.title.other": "%n\u540d\u89c0\u773e",
          "chatlive.viewer.list.title.plurals.other": "%n\u540d\u89c0\u773e",
          "chatroom.guide.sticker.text":
            "\u70ba\u8a0a\u606f\u52a0\u4e0a\u8cbc\u5716\uff0c\u8b93\u804a\u5929\u66f4\u6709\u8da3\uff01",
          "chatsettings.desc.membersjoinautomatically":
            "\u7528\u6236\u5728\u6536\u5230\u9080\u8acb\u5f8c\u5c31\u6703\u52a0\u5165\u7fa4\u7d44\u3002\u95dc\u9589\u6b64\u8a2d\u5b9a\u4ee5\u8981\u6c42\u6210\u54e1\u52a0\u5165\u524d\u9700\u63a5\u53d7\u9080\u8acb\u3002",
          "chatsettings.popup.desc.onewaywarning":
            "\u4e00\u65e6\u60a8\u95dc\u9589\u6b64\u8a2d\u5b9a\uff0c\u5c07\u7121\u6cd5\u518d\u6b21\u958b\u555f\u3002\u78ba\u5b9a\u8981\u95dc\u9589\u55ce\uff1f",
          "chatsettings.popup.title.onewaywarning":
            "\u6b64\u64cd\u4f5c\u5c07\u7121\u6cd5\u5fa9\u539f",
          "chatsettings.title.membersjoinautomatically":
            "\u7528\u6236\u81ea\u52d5\u52a0\u5165",
          "choosefriends.button.createGroup": "\u5efa\u7acb\u7fa4\u7d44",
          "choosefriends.button.gotochatsingle":
            "\u524d\u5f80\u8a72\u804a\u5929\u5ba4",
          "choosefriends.button.invite": "\u9080\u8acb",
          "choosefriends.title.default": "\u9078\u64c7\u597d\u53cb",
          "choosefriends.title.numselected": "\u5df2\u9078\uff08%1\uff09",
          "chrome.common.toast.unabletocopy":
            "\u7121\u6cd5\u8907\u88fd\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "chrome.setting.desc.notiforsp":
            "\u95dc\u9589\u767b\u5165Chrome\u7248\u6642\u7684\u624b\u6a5f\u63d0\u9192\u529f\u80fd\u3002",
          "chrome.time.desc.outofrangetime": "H:mm",
          "chrome.time.toast.outofrange":
            "\u8acb\u5c07\u6642\u9593\u8a2d\u70ba\u65e9\u65bc%1\u3002",
          "chrome.time.toast.outofrange2":
            "\u5fc5\u9808\u8a2d\u5b9a\u70ba%1\u6216\u66f4\u665a\u7684\u6642\u9593\u3002",
          "chrome.user.error.failedToBlock":
            "\u66ab\u6642\u7121\u6cd5\u5c01\u9396\u5c0d\u65b9\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "chrome.user.error.failedToDeclineGroupInvitation":
            "\u7121\u6cd5\u62d2\u7d55\u672c\u9080\u8acb",
          "chrome.user.error.failedToHide":
            "\u66ab\u6642\u7121\u6cd5\u96b1\u85cf\u5c0d\u65b9\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "chrome.user.error.failedToJoinGroup":
            "\u66ab\u6642\u7121\u6cd5\u52a0\u5165\u6b64\u7fa4\u7d44\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "chrome.user.error.failedToLeaveGroup":
            "\u7121\u6cd5\u9000\u51fa\u7fa4\u7d44",
          "chrome.user.error.failedToMarkFavorite":
            "\u7121\u6cd5\u52a0\u5165\u8a72\u7528\u6236\u81f3\u6211\u7684\u6700\u611b",
          "chrome.user.error.failedToShowUser":
            "\u66ab\u6642\u7121\u6cd5\u70ba\u5c0d\u65b9\u89e3\u9664\u96b1\u85cf\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "chrome.user.error.failedToUnblock":
            "\u7121\u6cd5\u89e3\u9664\u5c01\u9396",
          "common.album.empty.desc":
            "\u4f7f\u7528\u76f8\u7c3f\u529f\u80fd\u5206\u4eab\u958b\u5fc3\u7684\u6642\u523b\u3002",
          "common.alert.errorcode": "\u932f\u8aa4\u4ee3\u78bc\uff1a%1",
          "common.alert.notsupported":
            "\u60a8\u76ee\u524d\u4f7f\u7528\u7684\u7248\u672c\u4e0d\u652f\u63f4\u6b64\u529f\u80fd\u3002\n\u8acb\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u3002",
          "common.alert.unsend.content":
            "\u5c0d\u65b9\u5df2\u6536\u56de\u6b64\u5167\u5bb9",
          "common.alert.unsend.multi.contents":
            "\u5c07\u6703\u6392\u9664\u6536\u56de\u7684\u9805\u76ee\u3002",
          "common.alert.unsupported.osversion":
            "\u60a8\u6240\u4f7f\u7528\u7684\u4f5c\u696d\u7cfb\u7d71\u7248\u672c\u4e0d\u652f\u63f4\u6b64\u529f\u80fd\uff0c\u8acb\u5c07\u4f5c\u696d\u7cfb\u7d71\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u3002",
          "common.alert.update.title": "\u66f4\u65b0",
          "common.alert.version.other":
            "\u6709\u5176\u4ed6\u7248\u672c\u7684LINE\u6b63\u5728\u57f7\u884c\u4e2d",
          "common.am": "AM",
          "common.btn.back": "\u8fd4\u56de",
          "common.btn.cancel": "\u53d6\u6d88",
          "common.btn.capture.option":
            "\u622a\u53d6\u756b\u9762\u6642\u96b1\u85cf\u8996\u7a97",
          "common.btn.capture.option.tooltip":
            "\u622a\u53d6\u756b\u9762\u9078\u9805",
          "common.btn.delete": "\u522a\u9664",
          "common.btn.discard": "\u96e2\u958b",
          "common.btn.forward": "\u5206\u4eab",
          "common.btn.hide": "\u96b1\u85cf",
          "common.btn.next": "\u4e0b\u4e00\u6b65",
          "common.btn.quit": "\u95dc\u9589LINE",
          "common.btn.retry": "\u91cd\u8a66",
          "common.btn.run": "\u9396\u5b9a",
          "common.btn.save": "\u5132\u5b58",
          "common.btn.seemore": "\u986f\u793a\u66f4\u591a",
          "common.btn.submit": "\u78ba\u5b9a",
          "common.btn.unhide": "\u89e3\u9664\u96b1\u85cf",
          "common.cancel": "\u53d6\u6d88",
          "common.cancelalert.desc":
            "\u76ee\u524d\u7684\u6587\u5b57\u8cc7\u6599\u5c1a\u672a\u5132\u5b58\uff0c\u78ba\u5b9a\u8981\u96e2\u958b\u6b64\u9801\u9762\u55ce\uff1f",
          "common.code.tooltip":
            "\u60a8\u53ef\u6383\u63cf\u5716\u7247\u4e0a\u7684\u884c\u52d5\u689d\u78bc\u3002",
          "common.content.address.share.from.buddy":
            "%1\u5206\u4eab\u4e86\u806f\u7d61\u8cc7\u8a0a",
          "common.content.address.share.from.me":
            "\u806f\u7d61\u8cc7\u8a0a\u5df2\u50b3\u9001",
          "common.content.applink.app.recv": "\u60a8\u5c07\u63a8\u85a6%1",
          "common.content.applink.app.sent": "\u60a8\u63a8\u85a6\u4e86%1",
          "common.content.applink.friend.recv":
            "\u60a8\u7684%1\u4e0a\u6709\u65b0\u7684\u597d\u53cb\u7533\u8acb\u3002",
          "common.content.applink.friend.sent":
            "\u60a8\u5df2\u5728%1\u50b3\u9001\u4e86\u597d\u53cb\u7533\u8acb",
          "common.content.audio":
            "%1\u50b3\u9001\u4e86\u8072\u97f3\u8a0a\u606f",
          "common.content.audio.mine":
            "\u8072\u97f3\u8a0a\u606f\u5df2\u50b3\u9001",
          "common.content.coupon.message.postfix":
            "\u8acb\u81f3\u667a\u6167\u624b\u6a5f\u4e0a\u78ba\u8a8d\u8a0a\u606f\u5167\u5bb9\u3002 ",
          "common.content.group.note.updated":
            "\u5df2\u65b0\u589e\u65b0\u7684\u8a18\u4e8b\u672c\u3002",
          "common.content.group.note.updated.myself":
            "\u5df2\u65b0\u589e\u65b0\u7684\u8a18\u4e8b\u672c\u3002",
          "common.content.groupboard.from.buddy":
            "%1\u66f4\u65b0\u4e86\u7fa4\u7d44\u7559\u8a00\u677f",
          "common.content.groupboard.from.me":
            "\u7fa4\u7d44\u7559\u8a00\u677f\u4e0a\u6709\u65b0\u5167\u5bb9",
          "common.content.home.shared":
            "\u5df2\u5206\u4eab%1\u7684\u8cbc\u6587\u3002",
          "common.content.home.shared.myself":
            "\u5df2\u5206\u4eab%1\u7684\u8cbc\u6587\u3002",
          "common.content.image": "%1\u50b3\u9001\u4e86\u5716\u7247",
          "common.content.image.mine": "\u5716\u7247\u5df2\u50b3\u9001",
          "common.content.invite":
            '\u60a8\u5df2\u88ab\u9080\u8acb\u53c3\u52a0"%1"',
          "common.content.location.from.buddy":
            "%1\u50b3\u9001\u4e86\u4f4d\u7f6e\u8cc7\u8a0a",
          "common.content.location.from.me":
            "\u4f4d\u7f6e\u8a0a\u606f\u5df2\u50b3\u9001",
          "common.content.mantoman.note.newpost":
            "\u5df2\u65b0\u589e\u65b0\u7684\u8a18\u4e8b\u672c\u3002",
          "common.content.mantoman.note.newpost.myself":
            "\u5df2\u65b0\u589e\u65b0\u7684\u8a18\u4e8b\u672c\u3002",
          "common.content.normal": "\u50b3\u4f86\u7684\u8a0a\u606f",
          "common.content.pdf": "%1 sent a pdf file.",
          "common.content.pdf.mine": "You sent a pdf file.",
          "common.content.presence.join": "%1\u52a0\u5165\u804a\u5929",
          "common.content.presence.join.multiple.plurals.few":
            "\u9664\u4e86%1\u4ee5\u5916\uff0c\u9084\u6709%n\u4eba\u6b63\u53c3\u52a0\u804a\u5929\u3002",
          "common.content.presence.join.multiple.plurals.many":
            "\u9664\u4e86%1\u4ee5\u5916\uff0c\u9084\u6709%n\u4eba\u6b63\u53c3\u52a0\u804a\u5929\u3002",
          "common.content.presence.join.multiple.plurals.one":
            "\u9664\u4e86%1\u4ee5\u5916\uff0c\u9084\u6709%n\u4eba\u6b63\u53c3\u52a0\u804a\u5929\u3002",
          "common.content.presence.join.multiple.plurals.other":
            "\u9664\u4e86%1\u4ee5\u5916\uff0c\u9084\u6709%n\u4eba\u6b63\u53c3\u52a0\u804a\u5929\u3002",
          "common.content.presence.join.multiple.plurals.two":
            "\u9664\u4e86%1\u4ee5\u5916\uff0c\u9084\u6709%n\u4eba\u6b63\u53c3\u52a0\u804a\u5929\u3002",
          "common.content.presence.join.multiple.plurals.zero":
            "\u9664\u4e86%1\u4ee5\u5916\uff0c\u9084\u6709%n\u4eba\u6b63\u53c3\u52a0\u804a\u5929\u3002",
          "common.content.presence.leave": "%1\u96e2\u958b\u804a\u5929",
          "common.content.sticker": "%1\u50b3\u9001\u4e86\u8cbc\u5716",
          "common.content.sticker.gift.from.buddy":
            "%1\u9001\u79ae\u7269\u4f86\u56c9\uff01",
          "common.content.sticker.gift.from.me":
            "\u79ae\u7269\u5df2\u9001\u51fa",
          "common.content.sticker.mine": "\u8cbc\u5716\u5df2\u50b3\u9001",
          "common.content.theme.gift.from.buddy":
            "%1\u9001\u79ae\u7269\u4f86\u56c9\uff01",
          "common.content.theme.gift.from.me": "\u79ae\u7269\u5df2\u9001\u51fa",
          "common.content.timeline.post":
            "\u9ede\u64ca\u5373\u53ef\u5728\u700f\u89bd\u5668\u5167\u6aa2\u8996\u8cbc\u6587\u3002",
          "common.content.video": "%1\u50b3\u9001\u4e86\u5f71\u7247",
          "common.content.video.mine": "\u5f71\u7247\u5df2\u50b3\u9001",
          "common.continue": "\u7e7c\u7e8c",
          "common.country.name.ae":
            "\u963f\u62c9\u4f2f\u806f\u5408\u5927\u516c\u570b",
          "common.country.name.at": "\u5967\u5730\u5229",
          "common.country.name.au": "\u6fb3\u5927\u5229\u4e9e",
          "common.country.name.bd": "\u5b5f\u52a0\u62c9",
          "common.country.name.be": "\u6bd4\u5229\u6642",
          "common.country.name.bg": "\u4fdd\u52a0\u5229\u4e9e",
          "common.country.name.br": "\u5df4\u897f",
          "common.country.name.ca": "\u52a0\u62ff\u5927",
          "common.country.name.ch": "\u745e\u58eb",
          "common.country.name.cn": "\u4e2d\u570b",
          "common.country.name.cy": "\u8cfd\u666e\u52d2\u65af",
          "common.country.name.cz": "\u6377\u514b",
          "common.country.name.de": "\u5fb7\u570b",
          "common.country.name.dk": "\u4e39\u9ea5",
          "common.country.name.ee": "\u611b\u6c99\u5c3c\u4e9e",
          "common.country.name.es": "\u897f\u73ed\u7259",
          "common.country.name.fi": "\u82ac\u862d",
          "common.country.name.fr": "\u6cd5\u570b",
          "common.country.name.gb": "\u82f1\u570b",
          "common.country.name.gr": "\u5e0c\u81d8",
          "common.country.name.hk": "\u9999\u6e2f",
          "common.country.name.hr": "\u514b\u7f85\u57c3\u897f\u4e9e",
          "common.country.name.ht": "\u6d77\u5730",
          "common.country.name.hu": "\u5308\u7259\u5229",
          "common.country.name.id": "\u5370\u5ea6\u5c3c\u897f\u4e9e",
          "common.country.name.ie": "\u611b\u723e\u862d",
          "common.country.name.il": "\u4ee5\u8272\u5217",
          "common.country.name.in": "\u5370\u5ea6",
          "common.country.name.ir": "\u4f0a\u6717",
          "common.country.name.is": "\u51b0\u5cf6",
          "common.country.name.it": "\u7fa9\u5927\u5229",
          "common.country.name.jp": "\u65e5\u672c",
          "common.country.name.kg": "\u5409\u723e\u5409\u65af",
          "common.country.name.kh": "\u67ec\u57d4\u5be8",
          "common.country.name.kr": "\u97d3\u570b",
          "common.country.name.kz": "\u54c8\u85a9\u514b",
          "common.country.name.la": "\u5bee\u570b",
          "common.country.name.li": "\u5217\u652f\u6566\u65af\u767b",
          "common.country.name.lk": "\u65af\u91cc\u862d\u5361",
          "common.country.name.lt": "\u7acb\u9676\u5b9b",
          "common.country.name.lu": "\u76e7\u68ee\u5821",
          "common.country.name.lv": "\u62c9\u812b\u7dad\u4e9e",
          "common.country.name.ma": "\u6469\u6d1b\u54e5",
          "common.country.name.mm": "\u7dec\u7538",
          "common.country.name.mt": "\u99ac\u723e\u4ed6",
          "common.country.name.mx": "\u58a8\u897f\u54e5",
          "common.country.name.my": "\u99ac\u4f86\u897f\u4e9e",
          "common.country.name.ng": "\u5948\u53ca\u5229\u4e9e",
          "common.country.name.nl": "\u8377\u862d",
          "common.country.name.no": "\u632a\u5a01",
          "common.country.name.nz": "\u7d10\u897f\u862d",
          "common.country.name.om": "\u963f\u66fc",
          "common.country.name.ph": "\u83f2\u5f8b\u8cd3",
          "common.country.name.pl": "\u6ce2\u862d",
          "common.country.name.pt": "\u8461\u8404\u7259",
          "common.country.name.qa": "\u5361\u9054",
          "common.country.name.ro": "\u7f85\u99ac\u5c3c\u4e9e",
          "common.country.name.ru": "\u4fc4\u7f85\u65af",
          "common.country.name.sa": "\u6c99\u70cf\u5730\u963f\u62c9\u4f2f",
          "common.country.name.se": "\u745e\u5178",
          "common.country.name.sg": "\u65b0\u52a0\u5761",
          "common.country.name.si": "\u65af\u6d1b\u7dad\u5c3c\u4e9e",
          "common.country.name.sk": "\u65af\u6d1b\u4f10\u514b",
          "common.country.name.th": "\u6cf0\u570b",
          "common.country.name.tr": "\u571f\u8033\u5176",
          "common.country.name.tt":
            "\u5343\u91cc\u9054\u53ca\u6258\u5df4\u54e5\u5171\u548c\u570b",
          "common.country.name.tw": "\u53f0\u7063",
          "common.country.name.ua": "\u70cf\u514b\u862d",
          "common.country.name.us": "\u7f8e\u570b",
          "common.country.name.vn": "\u8d8a\u5357",
          "common.country.name.za": "\u5357\u975e",
          "common.country.other": "\u5176\u4ed6",
          "common.countryregion": "\u570b\u5bb6\u6216\u5730\u5340",
          "common.date.format.short": "M\u6708d\u65e5",
          "common.delete": "\u522a\u9664",
          "common.desc.macupdate":
            "\u66f4\u65b0Mac OS\u5f8c\u5373\u53ef\u4f7f\u7528\u3002",
          "common.desc.temporary.error":
            "\u7cfb\u7d71\u66ab\u6642\u767c\u751f\u554f\u984c\uff01",
          "common.error.image.scan":
            "\u7121\u6cd5\u8f49\u63db\u904e\u671f\u7684\u7167\u7247",
          "common.error.ocr.failed":
            "\u7121\u6cd5\u8f49\u70ba\u6587\u5b57\uff0c\u8acb\u6539\u9078\u5176\u4ed6\u8a9e\u8a00\u4e26\u518d\u8a66\u4e00\u6b21\u3002",
          "common.error.ocr.unknown": "\u7121\u6cd5\u8f49\u63db\u5716\u7247",
          "common.error.translation.failed":
            "\u7121\u6cd5\u7ffb\u8b6f\u6587\u5b57\u3002\u8acb\u7de8\u8f2f\u8a72\u6587\u5b57\u6216\u6539\u8a2d\u70ba\u5176\u4ed6\u8a9e\u8a00\u5f8c\uff0c\u518d\u8a66\u4e00\u6b21\u3002",
          "common.friday": "\u661f\u671f\u4e94",
          "common.friday.short": "\u4e94",
          "common.label.auto.slang": "\u5075\u6e2c\u8a9e\u8a00",
          "common.label.code": "\u6383\u63cf\u884c\u52d5\u689d\u78bc",
          "common.label.copy": "\u8907\u88fd",
          "common.label.cut": "\u526a\u4e0b",
          "common.label.date": "\u65e5\u671f",
          "common.label.delete": "\u522a\u9664",
          "common.label.file": "\u6a94\u6848",
          "common.label.lang.ar": "\u963f\u62c9\u4f2f\u6587",
          "common.label.lang.de": "\u5fb7\u6587",
          "common.label.lang.en": "\u82f1\u6587",
          "common.label.lang.es": "\u897f\u73ed\u7259\u6587",
          "common.label.lang.fa": "\u6ce2\u65af\u6587",
          "common.label.lang.hi": "\u5370\u5ea6\u6587",
          "common.label.lang.id": "\u5370\u5c3c\u6587",
          "common.label.lang.ja": "\u65e5\u6587",
          "common.label.lang.ko": "\u97d3\u6587",
          "common.label.lang.my": "\u7dec\u7538\u6587",
          "common.label.lang.pt": "\u8461\u8404\u7259\u6587",
          "common.label.lang.ru": "\u4fc4\u6587",
          "common.label.lang.th": "\u6cf0\u6587",
          "common.label.lang.vi": "\u8d8a\u5357\u6587",
          "common.label.lang.zhcn": "\u7c21\u9ad4\u4e2d\u6587",
          "common.label.lang.zhtw": "\u7e41\u9ad4\u4e2d\u6587",
          "common.label.moveURL": "\u524d\u5f80\u7db2\u5740",
          "common.label.ocr": "\u8f49\u70ba\u6587\u5b57",
          "common.label.ocrlang": "\u8f49\u63db\u5f8c",
          "common.label.paste": "\u8cbc\u4e0a",
          "common.label.redo": "\u53d6\u6d88\u5fa9\u539f",
          "common.label.selectAll": "\u5168\u9078",
          "common.label.slang": "\u539f\u6587",
          "common.label.text.placeholder":
            "\u8acb\u8f38\u5165\u4e0a\u65b9\u5716\u7247\u5167\u5bb9",
          "common.label.time": "\u6642\u9593",
          "common.label.tlang": "\u8b6f\u6587",
          "common.label.undo": "\u5fa9\u539f",
          "common.license.disagree": "\u4e0d\u540c\u610f",
          "common.license.filename": "chrome://license/TradChinese.rtf",
          "common.license.title": "\u670d\u52d9\u689d\u6b3e",
          "common.lineUrltoQR.alert.desc1":
            "LINE\u61c9\u7528\u7a0b\u5f0f\u5c08\u7528\u529f\u80fd",
          "common.lineUrltoQR.alert.desc2":
            "\u8acb\u7528LINE\u6383\u63cf\u4e0b\u65b9\u7684\u884c\u52d5\u689d\u78bc\u4f86\u700f\u89bd\u5167\u5bb9\u3002",
          "common.loading": "\u8b80\u53d6\u4e2d",
          "common.loading.splash": "\u6b63\u5728\u958b\u555fLINE\u2026",
          "common.mac.upgrader.title": "LINE\u66f4\u65b0\u8cc7\u8a0a",
          "common.menu.copyToClipboard": "\u8907\u88fd\u5230\u526a\u8cbc\u7c3f",
          "common.menu.delete": "\u522a\u9664",
          "common.menu.forward": "\u5206\u4eab",
          "common.menu.reply": "\u56de\u8986",
          "common.menu.saveAs": "\u53e6\u5b58\u65b0\u6a94",
          "common.monday": "\u661f\u671f\u4e00",
          "common.monday.short": "\u4e00",
          "common.msg.already.new.version":
            "\u60a8\u5df2\u5b89\u88dd\u6700\u65b0\u7248\u672c\u3002",
          "common.msg.bot.openapi":
            "%1\u662f\u7531%2.\u7ba1\u7406\u3002\n\u95dc\u65bc\u7531LY Corporation\u63d0\u4f9b\u7d66\u5e33\u865f\u7ba1\u7406\u4eba\u7684\u500b\u4eba\u8cc7\u8a0a\uff0c\u4ee5\u53ca\u4efb\u4f55\u7531\u60a8\u63d0\u4f9b\u7d66\u5e33\u865f\u7ba1\u7406\u4eba\u7684\u500b\u4eba\u8cc7\u8a0a\uff0c\u8a73\u7d30\u8655\u7406\u65b9\u5f0f\u7684\u76f8\u95dc\u8cc7\u8a0a\u8acb\u53c3\u95b1\u4e0b\u5217\u9023\u7d50\u3002",
          "common.msg.bot.openapi.agree": "\u540c\u610f",
          "common.msg.bot.openapi.link": "http://me2.do/FTf2B2bR",
          "common.msg.bot.openapi.title":
            "\u6211\u540c\u610f\u63d0\u4f9b\u500b\u4eba\u8cc7\u8a0a",
          "common.msg.checking.version":
            "\u78ba\u8a8d\u6709\u7121\u6700\u65b0\u7248\u672c\u2026",
          "common.msg.db.optimize":
            "\u70ba\u7372\u5f97\u66f4\u597d\u7684\u6027\u80fd\uff0c\n\u6b63\u5728\u9032\u884cLINE\u61c9\u7528\u7a0b\u5f0f\u6700\u4f73\u5316\u2026\n\u8acb\u7a0d\u5019\u3002",
          "common.msg.db.optimize.complete":
            "\u6700\u4f73\u5316\u5df2\u5b8c\u6210\u3002",
          "common.msg.db.optimize.error":
            "\u767c\u751f\u66ab\u6642\u6027\u932f\u8aa4\uff0c\n\u6545\u7121\u6cd5\u5b8c\u6210\u6700\u4f73\u5316\u3002\n\u5c07\u91cd\u65b0\u555f\u52d5LINE\u3002",
          "common.msg.favorite.exceeded":
            "\u6211\u7684\u6700\u611b\u5167\u6700\u591a\u53ef\u767b\u9304100\u4ef6\u3002",
          "common.msg.has.new.version":
            "\u76ee\u524d\u6709\u6700\u65b0\u7248\u672c\u53ef\u4f9b\u66f4\u65b0\u3002",
          "common.msg.has.new.version.alert":
            "\u76ee\u524d\u6709\u6700\u65b0\u7248\u672c\u53ef\u4f9b\u66f4\u65b0\uff0c\n\u60a8\u8981\u66f4\u65b0\u55ce\uff1f ",
          "common.msg.invitation.overflow":
            "\u60a8\u6700\u591a\u53ea\u80fd\u9080\u8acb%1\u4f4d\u597d\u53cb\u9032\u5165\u804a\u5929\u5ba4\u3002",
          "common.msg.license.opensource": "\u8457\u4f5c\u6b0a\u8072\u660e",
          "common.msg.sticker.need.mobile.download":
            "\u8acb\u5148\u900f\u904e\u884c\u52d5\u88dd\u7f6e\u4e0b\u8f09\u514d\u8cbb\u7684\u8cbc\u5716\u7d44\uff0c\u624d\u53ef\u52a0\u4ee5\u4f7f\u7528\u3002\n\u8acb\u65bcLINE\u61c9\u7528\u7a0b\u5f0f\u4e0a\u4f9d\u5e8f\u9ede\u9078\u300c\u8a2d\u5b9a\u300d\uff1e\u300c\u8cbc\u5716\u300d\uff1e\u300c\u6211\u7684\u8cbc\u5716\u300d\uff0c\u6216\u524d\u5f80\u300c\u8cbc\u5716\u5c0f\u8216\u300d\u4e0b\u8f09\u3002",
          "common.msg.terms": "Terms of Service",
          "common.msg.update.button.label": "\u7acb\u5373\u66f4\u65b0",
          "common.msg.update.button.label.mac": "\u524d\u5f80App Store",
          "common.msg.warning.autoLogin":
            "\u958b\u555f\u61c9\u7528\u7a0b\u5f0f\u6642\u5c07\u6703\u81ea\u52d5\u767b\u5165\u3002\n\u70ba\u4fdd\u8b77\u500b\u4eba\u8cc7\u8a0a\uff0c\u8acb\u50c5\u5728\u81ea\u5df2\u7684\u96fb\u8166\u4e0a\u4f7f\u7528\u3002",
          "common.name.postfix": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.note.empty.desc":
            "\u6301\u7e8c\u8ffd\u8e64\u91cd\u8981\u8cc7\u8a0a\u4e26\u4f7f\u7528\u8a18\u4e8b\u672c\u5206\u4eab\u3002",
          "common.notice.dontremind": "\u4e0d\u518d\u986f\u793a",
          "common.notice.label.close": "\u95dc\u9589",
          "common.notice.meta.url": "line_desktop_notice/zh-hant/1786",
          "common.notice.meta.url.mac": "line_desktop_notice_mac/zh-hant/1788",
          "common.notice.title": "\u6700\u65b0\u8cc7\u8a0a",
          "common.ocr.agree.desc":
            "\u4f7f\u7528\u672c\u529f\u80fd\u6703\u5c07\u7167\u7247\u50b3\u81f3\u672c\u516c\u53f8\u4f3a\u670d\u5668\u9032\u884c\u8655\u7406\uff0c\u60a8\u8981\u540c\u610f\u672c\u529f\u80fd\u7684\u670d\u52d9\u898f\u5b9a\u4e26\u958b\u59cb\u4f7f\u7528\u55ce\uff1f",
          "common.ocr.agree.title": "\u540c\u610f\u63d0\u4f9b\u7167\u7247",
          "common.ocr.mlstatus.off":
            "\u60a8\u5c1a\u672a\u540c\u610f\u63d0\u4f9b\u7167\u7247\u4ee5\u5354\u52a9\u6539\u5584\u672c\u529f\u80fd\uff0c\u60a8\u53ef\u900f\u904eLINE\u61c9\u7528\u7a0b\u5f0f\u8b8a\u66f4\u6b64\u9805\u8a2d\u5b9a\u3002",
          "common.ocr.mlstatus.on":
            "\u60a8\u5df2\u540c\u610f\u63d0\u4f9b\u7167\u7247\u4ee5\u5354\u52a9\u6539\u5584\u672c\u529f\u80fd\uff0c\u56e0\u6b64\u5716\u793a\u5c07\u6703\u8f03\u70ba\u6e05\u6670\u53ef\u898b\uff1b\u60a8\u53ef\u900f\u904eLINE\u61c9\u7528\u7a0b\u5f0f\u8b8a\u66f4\u6b64\u9805\u8a2d\u5b9a\u3002",
          "common.ocr.tooltip":
            "\u5168\u65b0\u300c\u5373\u6642\u7ffb\u8b6f\u300d\u529f\u80fd\uff0c\u79d2\u61c2\u5716\u6587\u8d85\u65b9\u4fbf\uff01",
          "common.ocrlang.tooltip":
            "\u8acb\u8a2d\u5b9a\u5716\u7247\u6587\u5b57\u7684\u8f49\u63db\u8a9e\u8a00\u3002",
          "common.off": "OFF",
          "common.on": "ON",
          "common.picture.popup.saveImageError":
            "\u5716\u7247\u7121\u6cd5\u5132\u5b58",
          "common.picture.popup.showImageError":
            "\u5716\u7247\u7121\u6cd5\u8b80\u53d6",
          "common.pm": "PM",
          "common.popup.force.update":
            "\u6709\u5fc5\u8981\u66f4\u65b0\u9805\u76ee\u3002\n\u8acb\u66f4\u65b0\u5f8c\u518d\u4f7f\u7528\u3002",
          "common.popup.force.update.confirm":
            "\u66f4\u65b0\u5f8c\uff0cLINE\u5c07\u53ef\u4f9b\u60a8\u6b63\u5e38\u4f7f\u7528\u3002",
          "common.popup.force.update.inapp":
            "\u6709\u5fc5\u8981\u66f4\u65b0\u9805\u76ee\u3002\n\u8acb\u66f4\u65b0\u5f8c\u518d\u4f7f\u7528\u3002",
          "common.popup.force.update.later":
            "1\u5c0f\u6642\u5019\u91cd\u65b0\u63d0\u9192\u4e00\u6b21",
          "common.popup.queryUpgrade":
            "\u76ee\u524d\u6709\u6700\u65b0\u7248\u672c\u53ef\u4f9b\u66f4\u65b0\uff0c\n\u60a8\u8981\u66f4\u65b0\u55ce\uff1f ",
          "common.popup.sendkey.msg.mac":
            "\u82e5\u60a8\u6309\u4e0bEnter\u9375\u5f8c\u51fa\u73fe\u8aa4\u9001\u8a0a\u606f\u7684\u72c0\u6cc1\uff0c\u5efa\u8b70\u60a8\u6539\u63a1Command + Enter\u7684\u65b9\u5f0f\u3002",
          "common.popup.sendkey.msg.win":
            "\u82e5\u60a8\u6309\u4e0bEnter\u9375\u5f8c\u51fa\u73fe\u8aa4\u9001\u8a0a\u606f\u7684\u72c0\u6cc1\uff0c\u5efa\u8b70\u60a8\u6539\u63a1Alt + Enter\u7684\u65b9\u5f0f\u3002",
          "common.popup.serverAPI.error.update":
            "LINE\u5fc5\u9808\u9032\u884c\u66f4\u65b0\u3002\n\u60a8\u8981\u73fe\u5728\u66f4\u65b0\u55ce\uff1f",
          "common.prepare.service":
            "\u82e5\u60a8\u5df2\u7d93\u5347\u7d1a\u81f3\u6700\u65b0\u7248\u672c\uff0c\u8868\u793a\u672c\u529f\u80fd\u5c1a\u672a\u63d0\u4f9b\u7d66\u8a72\u4f5c\u696d\u7cfb\u7d71\u7684\u7528\u6236\uff0c\n\u656c\u8acb\u671f\u5f85\u3002",
          "common.push.mac.versionUpdate":
            "\u8acb\u5c07LINE\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u3002",
          "common.report.done": "\u6aa2\u8209\u8a0a\u606f\u5df2\u50b3\u9001",
          "common.report.reason.desc":
            "\u8acb\u9078\u64c7\u60a8\u6aa2\u8209\u8a72\u7528\u6236\u7684\u7406\u7531",
          "common.request.error":
            "\u7121\u6cd5\u6b63\u5e38\u57f7\u884c\uff01\n\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "common.saturday": "\u661f\u671f\u516d",
          "common.saturday.short": "\u516d",
          "common.search.error.length":
            "\u641c\u5c0b\u6642\u8acb\u8f38\u5165\u81f3\u5c112\u500b\u5b57",
          "common.search.invalidtext":
            "\u641c\u5c0b\u95dc\u9375\u5b57\u4e0d\u53ef\u4f7f\u7528\u7279\u6b8a\u5b57\u5143\uff0c\u8acb\u91cd\u65b0\u8f38\u5165\u3002",
          "common.seeall": "\u986f\u793a\u5168\u90e8",
          "common.share.url.copied": "\u5df2\u8907\u88fd",
          "common.sunday": "\u661f\u671f\u65e5",
          "common.sunday.short": "\u65e5",
          "common.thursday": "\u661f\u671f\u56db",
          "common.thursday.short": "\u56db",
          "common.time.format": "%1 h:mm",
          "common.toast.album.delete": "\u76f8\u7c3f\u5df2\u522a\u9664",
          "common.toast.album.rename":
            "\u76f8\u7c3f\u540d\u7a31\u5df2\u8b8a\u66f4",
          "common.toast.albumCreated":
            "\u65b0\u76f8\u7c3f\u5df2\u5efa\u7acb\u3002 ",
          "common.toast.audio": "\u8072\u97f3\u6a94\u5df2\u50b3\u9001",
          "common.toast.chatevent.unknown":
            "\u7121\u6cd5\u78ba\u8a8d\u6b64\u63d0\u9192\u7684\u5167\u5bb9\u3002",
          "common.toast.contact": "\u5df2\u5206\u4eab\u806f\u7d61\u8cc7\u8a0a",
          "common.toast.file": "\u6a94\u6848\u5df2\u50b3\u9001",
          "common.toast.gift": "\u79ae\u7269\u5df2\u9001\u51fa",
          "common.toast.image": "\u5716\u7247\u5df2\u50b3\u9001",
          "common.toast.inviteGroup":
            "\u60a8\u6536\u5230\u4e86\u7fa4\u7d44\u9080\u8acb",
          "common.toast.label.newMessage":
            "\u60a8\u6709\u65b0\u8a0a\u606f\u3002",
          "common.toast.linemusic": "\u5df2\u5206\u4eab\u97f3\u6a02",
          "common.toast.location": "",
          "common.toast.note":
            "\u5df2\u65b0\u589e\u65b0\u7684\u8a18\u4e8b\u672c\u3002",
          "common.toast.receiverequest": "",
          "common.toast.sticker": "\u8cbc\u5716\u5df2\u50b3\u9001",
          "common.toast.timeline.group.invite":
            "\u60a8\u6536\u5230\u4e86\u7fa4\u7d44\u9080\u8acb",
          "common.toast.timeline.new.comment": "\u7acb\u5373\u67e5\u770b",
          "common.toast.timeline.new.mention": "\u7559\u8a00\u7d66\u6211\u3002",
          "common.toast.timeline.new.post":
            "\u5df2\u65b0\u589e\u65b0\u7684\u8a18\u4e8b\u672c\u3002",
          "common.toast.timeline.new.sticker": "\u7acb\u5373\u67e5\u770b",
          "common.toast.timeline.title.comment": "%1\u7684\u7559\u8a00",
          "common.toast.timeline.title.like": "%1\u7684\u8b9a",
          "common.toast.timeline.title.recomment": "%1\u7684\u56de\u8986",
          "common.toast.video": "\u5f71\u7247\u5df2\u50b3\u9001",
          "common.toast.voip.call": "\u63a5\u807d",
          "common.toast.voip.call.msg": "\u4f86\u96fb",
          "common.toast.voip.refuse": "\u62d2\u7d55",
          "common.today": "\u4eca\u5929",
          "common.translation.apply.alert":
            "\u53ef\u7ffb\u8b6f\u7684\u539f\u6587\u5b57\u6578\u4e0a\u9650\u70ba5,000\u500b\u5b57 ",
          "common.translation.apply.imagedirect":
            "\u5c07\u539f\u6587\u5373\u6642\u8f49\u70ba\u7ffb\u8b6f\u6587\u5b57",
          "common.translation.imagedirect.failed":
            "\u767c\u751f\u66ab\u6642\u6027\u932f\u8aa4\uff0c\u8acb\u8b8a\u66f4\u8981\u7ffb\u8b6f\u7684\u8a9e\u8a00\u6216\u7a0d\u5f8c\u518d\u8a66\u3002",
          "common.translation.imagedirect.tooltip":
            "\u53ef\u5373\u6642\u7ffb\u8b6f\u7167\u7247\u4e0a\u7684\u6587\u5b57\uff0c\u4e26\u76f4\u63a5\u986f\u793a\u65bc\u539f\u8655\u3002",
          "common.tuesday": "\u661f\u671f\u4e8c",
          "common.tuesday.short": "\u4e8c",
          "common.unsupported.version.message":
            "\u60a8\u76ee\u524d\u4f7f\u7528\u7684\u7248\u672c\u4e0d\u652f\u63f4\u6b64\u529f\u80fd\u3002\n\u8acb\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u3002",
          "common.update.popup.win10":
            "\u8acb\u5c07LINE\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u3002",
          "common.updater": "\u7acb\u5373\u66f4\u65b0",
          "common.updater.autoUpdate": "\u81ea\u52d5\u66f4\u65b0",
          "common.updater.autoUpdate.apply":
            "<![CDATA[\u662f\u5426\u8981\u5c07LINE\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\uff1f\n<font color='#9e9e9e'>\u9032\u884c\u66f4\u65b0\u5f8c\uff0cLINE\u5c07\u91cd\u65b0\u555f\u52d5\u3002\n</font>]]>",
          "common.updater.forceUpdate.apply":
            "\u6709\u65b0\u7248LINE\u53ef\u4f7f\u7528\u3002\n\u82e5\u60a8\u9078\u64c7\u300c\u78ba\u5b9a\u300d\uff0cLINE\u5c07\u6703\u91cd\u65b0\u555f\u52d5\u3002",
          "common.updater.newVersion.confirm":
            "\u60a8\u7684LINE\u70ba\u6700\u65b0\u7248\u672c\u3002",
          "common.updater.newVersion.download.apply":
            "<![CDATA[\u4e0b\u8f09\u5b8c\u7562\u3002\n\u8981\u7acb\u5373\u5b89\u88dd\u55ce\uff1f\n<font color='#9e9e9e'>\u82e5\u60a8\u9078\u64c7\u300c\u78ba\u5b9a\u300d\uff0cLINE\u5c07\u6703\u91cd\u65b0\u555f\u52d5\u3002</font>]]>",
          "common.updater.newVersion.downloading":
            "\u6b63\u5728\u4e0b\u8f09\u6700\u65b0\u7248LINE\u2026\n\u8acb\u7a0d\u5019\u3002",
          "common.updater.newVersion.incompleted":
            "\u66f4\u65b0\u4f5c\u696d\u4e2d\u65b7\u3002\n\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "common.updater.newVersion.low.hardDisk":
            "\u786c\u789f\u5132\u5b58\u7a7a\u9593\u4e0d\u8db3\u3002\n\u8acb\u6e05\u51fa\u7a7a\u9593\u5f8c\n\u518d\u8a66\u4e00\u6b21\u3002",
          "common.updater.notice.description":
            "\u672c\u6b21\u66f4\u65b0\u5167\u5bb9",
          "common.updater.notice.history": "\u66f4\u65b0\u8a18\u9304",
          "common.updater.notice.title": "\u66f4\u65b0",
          "common.updater.notice.updated":
            "LINE\u5df2\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c",
          "common.wednesday": "\u661f\u671f\u4e09",
          "common.wednesday.short": "\u4e09",
          "common.yearMonth.format": "yyyy\u5e74M\u6708",
          "common.yesterday": "\u6628\u5929",
          "creategroup.button.create": "\u5efa\u7acb",
          "creategroup.checkbox.desc.membersjoinautomatically":
            "\u7528\u6236\u5728\u6536\u5230\u9080\u8acb\u5f8c\u5c31\u6703\u52a0\u5165\u7fa4\u7d44\u3002\u95dc\u9589\u6b64\u8a2d\u5b9a\u4ee5\u8981\u6c42\u6210\u54e1\u52a0\u5165\u524d\u9700\u63a5\u53d7\u9080\u8acb\u3002",
          "creategroup.checkbox.title.membersjoinautomatically":
            "\u7528\u6236\u81ea\u52d5\u52a0\u5165",
          "creategroup.label.membercount": "\u6210\u54e1",
          "creategroup.placeholder.entergroupname":
            "\u8acb\u8f38\u5165\u7fa4\u7d44\u540d\u7a31",
          "creategroup.placerholder.defaultname.autojoinoff":
            "%1\u7684\u7fa4\u7d44",
          "creategroup.popup.desc.100memberswarning":
            "\u7528\u6236\u7121\u6cd5\u81ea\u52d5\u52a0\u5165\u7e3d\u4eba\u6578\u8d85\u904e100\u4eba\u7684\u7fa4\u7d44\u3002\u65b0\u6210\u54e1\u5fc5\u9808\u63a5\u53d7\u9080\u8acb\u624d\u80fd\u52a0\u5165\u7fa4\u7d44\u3002\n\u82e5\u8981\u8b93\u7528\u6236\u81ea\u52d5\u52a0\u5165\uff0c\u8acb\u52ff\u8b93\u7fa4\u7d44\u6210\u54e1\u8d85\u904e100\u4eba\u3002",
          "creategroup.popup.desc.invitelocked":
            "\u82e5\u8981\u95dc\u9589\u6b64\u8a2d\u5b9a\uff0c\u8acb\u52ff\u8b93\u7fa4\u7d44\u6210\u54e1\u8d85\u904e100\u4eba\u3002",
          "creategroup.popup.desc.inviteonwarning":
            "\u6210\u54e1\u8d85\u904e100\u4eba\u7684\u7fa4\u7d44\u5c07\u6703\u81ea\u52d5\u958b\u555f\u300c\u6536\u5230\u9080\u8acb\u624d\u53ef\u52a0\u5165\u300d\u7684\u8a2d\u5b9a\u3002\n\u82e5\u8981\u907f\u514d\u958b\u555f\u6b64\u8a2d\u5b9a\uff0c\u8acb\u52ff\u8b93\u7fa4\u7d44\u6210\u54e1\u8d85\u904e100\u4eba\u3002",
          "creategroup.popup.desc.toomanygroups":
            "\u7fa4\u7d44\u6578\u91cf\u5df2\u9054\u4e0a\u9650\uff01\u82e5\u8981\u5efa\u7acb\u65b0\u7fa4\u7d44\uff0c\u8acb\u9000\u51fa\u4efb\u4e00\u7fa4\u7d44\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "creategroup.popup.title.100memberswarning":
            "\u7528\u6236\u7121\u6cd5\u81ea\u52d5\u52a0\u5165",
          "creategroup.popup.title.invitelocked":
            "\u7121\u6cd5\u95dc\u9589\u300c\u6536\u5230\u9080\u8acb\u624d\u53ef\u52a0\u5165\u300d\u8a2d\u5b9a",
          "creategroup.popup.title.inviteonwarning":
            "\u5373\u5c07\u958b\u555f\u300c\u6536\u5230\u9080\u8acb\u624d\u53ef\u52a0\u5165\u300d\u8a2d\u5b9a",
          "creategroup.popup.title.toomanygroups":
            "\u7121\u6cd5\u5efa\u7acb\u7fa4\u7d44",
          "creategroup.popup.title.toomanymembers":
            "\u6e1b\u5c11\u7fa4\u7d44\u7684\u7e3d\u4eba\u6578",
          "creategroup.title.setupProfile":
            "\u8a2d\u5b9a\u7fa4\u7d44\u6a94\u6848",
          "creategroup.toggle.desc.requireinvite":
            "\u958b\u555f\u6b64\u8a2d\u5b9a\u5f8c\uff0c\u53ea\u6709\u6536\u5230\u6210\u54e1\u9080\u8acb\u7684\u7528\u6236\u624d\u80fd\u52a0\u5165\u7fa4\u7d44\uff0c\u4f46\u6b64\u8a2d\u5b9a\u5728\u7fa4\u7d44\u5efa\u7acb\u5f8c\u5373\u7121\u6cd5\u95dc\u9589\u3002",
          "creategroup.toggle.title.requireinvite":
            "\u6536\u5230\u9080\u8acb\u624d\u53ef\u52a0\u5165",
          "creategroup.tooltip.groupname":
            "\u70ba\u7fa4\u7d44\u53d6\u540d\uff0c\u544a\u8a34\u60a8\u7684\u597d\u53cb\u5011\u672c\u7fa4\u7d44\u7684\u76ee\u7684\u548c\u7528\u9014\u3002",
          "creategrouppopup.desc.toomanymembers":
            "\u82e5\u8981\u8b93\u7528\u6236\u81ea\u52d5\u52a0\u5165\uff0c\u8acb\u52ff\u8b93\u7fa4\u7d44\u6210\u54e1\u8d85\u904e100\u4eba\u3002",
          "deletedata.chatHisotry.all.desc.confirm":
            "\u78ba\u5b9a\u8981\u7531\u60a8\u7684\u6240\u6709\u88dd\u7f6e\u4e2d\u522a\u9664\u804a\u5929\u8a18\u9304\u55ce\uff1f\u522a\u9664\u5f8c\u5373\u7121\u6cd5\u5fa9\u539f\uff01",
          "deletedata.chatHisotry.onlypc.desc.confirm":
            "\u78ba\u5b9a\u8981\u7531\u6b64\u88dd\u7f6e\u4e2d\u522a\u9664\u804a\u5929\u8a18\u9304\u55ce\uff1f\u522a\u9664\u5f8c\u5373\u7121\u6cd5\u5fa9\u539f\uff01 ",
          "desktop.addchatfolder.button.add": "\u5efa\u7acb",
          "desktop.addchatfolder.placeholder.entername":
            "\u8f38\u5165\u5206\u985e\u540d\u7a31",
          "desktop.addchatfolder.title.addnewfolder":
            "\u5efa\u7acb\u65b0\u5206\u985e",
          "desktop.addchatpopup.button.add": "\u65b0\u589e",
          "desktop.addchatpopup.button.cancel": "\u53d6\u6d88",
          "desktop.addchatpopup.desc.allchats":
            "\u6240\u6709\u804a\u5929\u5ba4",
          "desktop.addchatpopup.desc.selected": "\u5df2\u9078 %1",
          "desktop.addchatpopup.placeholder.search": "\u641c\u5c0b",
          "desktop.addchatpopup.title.addchats":
            "\u65b0\u589e\u804a\u5929\u5ba4\u81f3\u6b64\u5206\u985e",
          "desktop.addfriends.desc.recommendedai":
            "\u63a8\u85a6\u7684AI\u5e33\u865f",
          "desktop.addtoalbum.button.cancel": "\u53d6\u6d88",
          "desktop.addtoalbum.button.createalbum": "\u5efa\u7acb\u76f8\u7c3f",
          "desktop.addtoalbum.title.selectalbum": "\u9078\u64c7\u76f8\u7c3f",
          "desktop.album.allalbums.button.albums": "\u76f8\u7c3f",
          "desktop.album.allalbums.button.photos": "\u7167\u7247",
          "desktop.album.allalbums.desc.albumsempty":
            "\u5efa\u7acb\u65bc\u804a\u5929\u5ba4\u7684\u76f8\u7c3f\u5c07\u96c6\u4e2d\u986f\u793a\u65bc\u6b64\u3002",
          "desktop.album.allalbums.desc.dateformat": "yyyy\u5e74M\u6708",
          "desktop.album.allalbums.desc.photosempty":
            "\u65b0\u589e\u81f3\u76f8\u7c3f\u4e2d\u7684\u9805\u76ee\u5c07\u986f\u793a\u65bc\u6b64\u3002",
          "desktop.album.allalbums.menu.lastcreated":
            "\u5efa\u7acb\u6642\u9593",
          "desktop.album.allalbums.menu.lastupdated":
            "\u66f4\u65b0\u6642\u9593",
          "desktop.album.allalbums.title.allalbums": "\u6240\u6709\u76f8\u7c3f",
          "desktop.album.allalbums.title.photosempty":
            "\u5c1a\u7121\u4efb\u4f55\u9805\u76ee",
          "desktop.album.allalbums.title.unableshow":
            "\u7121\u6cd5\u986f\u793a\u76f8\u7c3f\uff0c\n\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "desktop.album.allalbums.tooltip.allalbums":
            "\u6240\u6709\u804a\u5929\u5ba4\u7684\u76f8\u7c3f\u5c07\u96c6\u4e2d\u986f\u793a\u65bc\u6b64\uff0c\u5305\u542b\u81ea\u804a\u5929\u5217\u8868\u4e2d\u96b1\u85cf\u6216\u522a\u9664\u7684\u804a\u5929\u5ba4\u3002",
          "desktop.album.button.add": "\u4e0a\u50b3",
          "desktop.album.button.cancel": "\u53d6\u6d88",
          "desktop.album.button.create": "\u5efa\u7acb",
          "desktop.album.button.namechangedone": "\u5132\u5b58",
          "desktop.album.button.share": "\u5206\u4eab",
          "desktop.album.button.sharealbum": "\u5206\u4eab\u76f8\u7c3f",
          "desktop.album.commonkey.button.tryagain": "\u91cd\u8a66",
          "desktop.album.desc.albumphotos.other": "%n\u5f35\u7167\u7247",
          "desktop.album.desc.draganddrop":
            "\u8acb\u5c07\u9805\u76ee\u62d6\u66f3\u81f3\u6b64",
          "desktop.album.error.sharealbum":
            "\u60a8\u5728\u77ed\u6642\u9593\u5167\u5206\u4eab\u592a\u591a\u76f8\u7c3f\u3002",
          "desktop.album.main.tooltip.albumsallchats":
            "\u6240\u6709\u804a\u5929\u5ba4\u7684\u76f8\u7c3f\u5c07\u96c6\u4e2d\u986f\u793a\u65bc\u6b64",
          "desktop.album.max.media.alert":
            "\u60a8\u6700\u591a\u53ea\u80fd\u50b3\u9001%1\u500b\u9805\u76ee\u3002",
          "desktop.album.photos.button.seealbum": "\u986f\u793a\u76f8\u7c3f",
          "desktop.album.popupdesc.sharealbum":
            "\u662f\u5426\u5728\u804a\u5929\u4e2d\u5206\u4eab\u6b64\u76f8\u7c3f\uff1f",
          "desktop.album.tooltip.nowsharealbum":
            "\u60a8\u73fe\u5728\u53ef\u4ee5\u5728\u804a\u5929\u4e2d\u5206\u4eab\u76f8\u7c3f\uff01",
          "desktop.album.viewer.button.seealbum": "\u986f\u793a\u76f8\u7c3f",
          "desktop.album.viewer.title.unableshow":
            "\u7121\u6cd5\u986f\u793a\u9805\u76ee\uff0c\n\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "desktop.backgroundsetting.button.deletecover":
            "\u522a\u9664\u500b\u4eba\u5c01\u9762",
          "desktop.backgroundsetting.button.selectphoto":
            "\u9078\u64c7\u7167\u7247",
          "desktop.blankchatfolder.button.addchat":
            "\u65b0\u589e\u804a\u5929\u5ba4",
          "desktop.blankchatfolder.desc.nochats":
            "\u6b64\u5206\u985e\u4e2d\u5c1a\u7121\u804a\u5929\u5ba4",
          "desktop.blankchatfolder.desc.nochats1":
            "\u8acb\u5c07\u804a\u5929\u5ba4\u62d6\u653e\u81f3\u6b64\uff0c\u6216\u9ede\u4e0b\u65b9\u6309\u9375\u65b0\u589e\u804a\u5929\u5ba4\u3002",
          "desktop.calendar.button.recent": "\u6700\u65b0",
          "desktop.calendar.desc.month": "M\u6708",
          "desktop.calendar.desc.year": "yyyy",
          "desktop.callsettings.desc.showmessagealerts":
            "\u5728\u901a\u8a71\u9014\u4e2d\u986f\u793a\u804a\u5929\u5ba4\u65b0\u8a0a\u606f\u7684\u63d0\u9192",
          "desktop.chat.choose.empty":
            "\u5c1a\u7121\u804a\u5929\u53ef\u4f9b\u9078\u64c7",
          "desktop.chat.popup.blockeduser.button.close": "\u4e0d\u6aa2\u8209",
          "desktop.chat.popup.blockeduser.button.report": "\u6aa2\u8209",
          "desktop.chat.popup.blockeduser.desc":
            "\u82e5\u61f7\u7591\u662f\u5783\u573e\u5ee3\u544a\u8a0a\u606f\u6216\u9a37\u64fe\u884c\u70ba\uff0c\u8acb\u6aa2\u8209\u8a72\u7528\u6236\u4ee5\u5354\u52a9LINE\u63d0\u4f9b\u66f4\u5b89\u5168\u7684\u4f7f\u7528\u74b0\u5883\u3002",
          "desktop.chat.popup.blockeduser.title":
            "\u78ba\u5b9a\u8981\u6aa2\u8209%1\u55ce\uff1f",
          "desktop.chat.toast.chatunhidden":
            "\u6b64\u804a\u5929\u5ba4\u5df2\u89e3\u9664\u96b1\u85cf\u72c0\u614b\u3002",
          "desktop.chat.warning.btn.addfriend": "\u52a0\u5165\u597d\u53cb",
          "desktop.chat.warning.btn.blockfriend": "\u5c01\u9396",
          "desktop.chat.warning.btn.decline": "\u62d2\u7d55",
          "desktop.chat.warning.btn.join": "\u53c3\u52a0",
          "desktop.chat.warning.btn.leave": "\u9000\u51fa",
          "desktop.chat.warning.btn.report": "\u6aa2\u8209",
          "desktop.chat.warning.btn.unblockfriend": "\u89e3\u9664\u5c01\u9396",
          "desktop.chatfolder.tab.all": "\u5168\u90e8",
          "desktop.chatfolder.tab.friends": "\u597d\u53cb",
          "desktop.chatfolder.tab.groups": "\u7fa4\u7d44",
          "desktop.chatfolder.tab.newfolder": "\u5206\u985e\uff08%1\uff09",
          "desktop.chatfolder.tab.officialaccounts": "\u5b98\u65b9\u5e33\u865f",
          "desktop.chatfolder.tab.openchats": "\u793e\u7fa4",
          "desktop.chatfolder.toast.addedtofoldermulti":
            "\u5df2\u65b0\u589e%1\u500b\u804a\u5929\u5ba4\u81f3\u6b64\u5206\u985e\u3002",
          "desktop.chatfolder.toast.addedtofolderone":
            "\u5df2\u65b0\u589e1\u500b\u804a\u5929\u5ba4\u81f3\u6b64\u5206\u985e\u3002",
          "desktop.chatfolder.toast.nameinuse":
            "\u5df2\u5b58\u5728\u76f8\u540c\u7684\u5206\u985e\u540d\u7a31\uff0c\u8acb\u6539\u7528\u5176\u4ed6\u540d\u7a31\u3002",
          "desktop.chatfolder.toast.removedchatmulti":
            "\u5df2\u5c07%1\u500b\u804a\u5929\u5ba4\u79fb\u5f80\u9810\u8a2d\u5206\u985e\u3002",
          "desktop.chatfolder.toast.removedchatone":
            "\u5df2\u5c071\u500b\u804a\u5929\u5ba4\u79fb\u5f80\u9810\u8a2d\u5206\u985e\u3002",
          "desktop.chatfolder.toast.uptohund":
            "\u6bcf\u9805\u5206\u985e\u6700\u591a\u53ea\u80fd\u65b0\u589e100\u500b\u804a\u5929\u5ba4\u3002",
          "desktop.chatfolderguide.button.learnmore":
            "\u67e5\u770b\u8a73\u60c5",
          "desktop.chatfolderguide.desc.desc1":
            "\u7531\u804a\u5929\u5217\u8868\u53f3\u4e0a\u65b9\u7684\u5716\u793a\u5efa\u7acb\u65b0\u5206\u985e",
          "desktop.chatfolderguide.desc.desc2":
            "\u5728\u5206\u985e\u4e0a\u9ede\u6309\u53f3\u9375\u53ef\u8b8a\u66f4\u76f8\u95dc\u8a2d\u5b9a",
          "desktop.chatfolderguide.desc.desc3":
            "\u6309\u4f4f\u5206\u985e\u5f8c\u62d6\u653e\u5373\u53ef\u8b8a\u66f4\u6392\u5217\u9806\u5e8f",
          "desktop.chatfolderguide.desc.editdragchange":
            "\u6309\u4f4f\u5206\u985e\u518d\u62d6\u653e\u5373\u53ef\u8b8a\u66f4\u6392\u5217\u9806\u5e8f\uff1b\u82e5\u8981\u5efa\u7acb\u65b0\u5206\u985e\uff0c\u8acb\u9ede\u9078\u300c+\u300d\u5716\u793a\u3002",
          "desktop.chatfolderguide.desc.title":
            "\u8f15\u9b06\u7ba1\u7406\u804a\u5929\u5ba4\uff01\u300c\u804a\u5929\u5ba4\u5206\u985e\u300d\u529f\u80fd\u5168\u65b0\u767b\u5834\uff01",
          "desktop.chatfoldermenu.button.addchat":
            "\u65b0\u589e\u804a\u5929\u5ba4",
          "desktop.chatfoldermenu.button.changefoldername":
            "\u8b8a\u66f4\u5206\u985e\u540d\u7a31",
          "desktop.chatfoldermenu.button.deletefolder":
            "\u522a\u9664\u5206\u985e",
          "desktop.chatfoldermenu.button.mutefolder":
            "\u95dc\u9589\u6b64\u5206\u985e\u7684\u63d0\u9192",
          "desktop.chatfoldermenu.button.readall": "\u5168\u90e8\u5df2\u8b80",
          "desktop.chatfoldermenu.button.removechat":
            "\u79fb\u9664\u804a\u5929\u5ba4",
          "desktop.chatfoldermenu.button.unmutefolder":
            "\u958b\u555f\u6b64\u5206\u985e\u7684\u63d0\u9192",
          "desktop.chatfoldermenu.toast.unabletoadd":
            "\u7121\u6cd5\u5c07\u6240\u6709\u804a\u5929\u5ba4\u65b0\u589e\u81f3\u540c\u4e00\u500b\u5206\u985e\u3002",
          "desktop.chatfoldermenu.toast.uptoten":
            "\u6700\u591a\u53ea\u80fd\u5efa\u7acb10\u500b\u804a\u5929\u5ba4\u5206\u985e\u3002",
          "desktop.chatfolderpopup.button.ok": "\u78ba\u5b9a",
          "desktop.chatfolderpopup.desc.chatfolder":
            "\u5584\u7528\u5206\u985e\u529f\u80fd\uff0c\u8b93\u804a\u5929\u5ba4\u8b8a\u5f97\u66f4\u597d\u627e\uff01\u9ede\u6309\u804a\u5929\u5217\u8868\u53f3\u4e0a\u65b9\u7684\u300c\uff0b\u300d\u9375\uff0c\u5373\u53ef\u5efa\u7acb\u65b0\u7684\u804a\u5929\u5ba4\u5206\u985e\u3002",
          "desktop.chatfolderpopup.desc.folderlineup":
            "\u6309\u4f4f\u5206\u985e\u518d\u62d6\u653e\uff0c\u53ef\u8b8a\u66f4\u8a72\u5206\u985e\u7684\u6392\u5217\u4f4d\u7f6e\u3002",
          "desktop.chatfolderpopup.desc.managefolder":
            "\u5728\u5206\u985e\u4e0a\u6309\u4e00\u4e0b\u53f3\u9375\uff0c\u53ef\u8b8a\u66f4\u8a72\u5206\u985e\u7684\u8a2d\u5b9a\u3002",
          "desktop.chatfolderpopup.desc.unabletosync":
            "\u767c\u751f\u66ab\u6642\u6027\u932f\u8aa4\uff0c\u7121\u6cd5\u540c\u6b65\u804a\u5929\u5ba4\u5206\u985e\u3002\u8acb\u9ede\u9078\u53f3\u4e0a\u65b9\u7684\u540c\u6b65\u5716\u793a\u91cd\u8a66\u4e00\u6b21\u3002",
          "desktop.chatfolderpopup.title.chatfolder":
            "\u300c\u804a\u5929\u5ba4\u5206\u985e\u300d\u529f\u80fd\u5168\u65b0\u767b\u5834",
          "desktop.chatfolderpopup.title.folderlineup":
            "\u81ea\u7531\u8abf\u6574\u4f4d\u7f6e",
          "desktop.chatfolderpopup.title.managefolder":
            "\u8f15\u9b06\u7ba1\u7406\u804a\u5929\u5ba4\u5206\u985e",
          "desktop.chatfoldersetting.button.cancel": "\u53d6\u6d88",
          "desktop.chatfoldersetting.button.disable": "\u505c\u7528",
          "desktop.chatfoldersetting.desc.disable":
            "\u78ba\u5b9a\u8981\u505c\u7528\u300c\u804a\u5929\u5ba4\u5206\u985e\u300d\u529f\u80fd\u55ce\uff1f\u505c\u7528\u5f8c\uff0c\u76ee\u524d\u6240\u6709\u7684\u5206\u985e\u8a2d\u5b9a\u5c07\u6703\u91cd\u8a2d\u3002",
          "desktop.chatfoldertooltip.desc.createchatfolder":
            "\u9ede\u6b64\u53ef\u5efa\u7acb\u65b0\u7684\u804a\u5929\u5ba4\u5206\u985e\u3002",
          "desktop.chatlist.button.hide": "\u986f\u793a\u8f03\u5c11",
          "desktop.chatmenu.button.addtoalbum":
            "\u65b0\u589e\u81f3\u76f8\u7c3f",
          "desktop.chatssettings.desc.chateffects":
            "\u5728\u804a\u5929\u5ba4\u80cc\u666f\u4e2d\u986f\u793a\u7bc0\u65e5\u3001\u5b63\u7bc0\u7b49\u52d5\u614b\u7279\u6548\u3002",
          "desktop.chatssettings.subtitle.chateffects":
            "\u804a\u5929\u5ba4\u80cc\u666f\u7279\u6548",
          "desktop.codecerror.desc.unabletoplay":
            "\u7531\u65bc\u8996\u8a0a\u8f49\u78bc\u5668\u767c\u751f\u932f\u8aa4\uff0c\u7121\u6cd5\u64ad\u653e\u6b64\u6a94\u6848\u3002",
          "desktop.common.go.to.settings":
            "\u79fb\u52d5\u81f3\u8a2d\u5b9a\u9801",
          "desktop.common.index.chats": "\u804a\u5929",
          "desktop.common.index.favorites": "\u6211\u7684\u6700\u611b",
          "desktop.common.index.friends": "\u597d\u53cb",
          "desktop.common.index.groups": "\u7fa4\u7d44",
          "desktop.common.index.recentlyshared":
            "\u6700\u8fd1\u7684\u50b3\u9001\u5c0d\u8c61",
          "desktop.common.report": "\u6aa2\u8209",
          "desktop.defaultprofile.button.cancel": "\u53d6\u6d88",
          "desktop.defaultprofile.button.save": "\u5132\u5b58",
          "desktop.defaultprofile.title.selectdefault":
            "\u5f9e\u9810\u8a2d\u4e2d\u9078\u64c7",
          "desktop.deletefolderpopup.button.cancel": "\u53d6\u6d88",
          "desktop.deletefolderpopup.button.delete": "\u522a\u9664",
          "desktop.deletefolderpopup.desc.deletefolder":
            "\u78ba\u5b9a\u8981\u522a\u9664\u300c%1\u300d\u5206\u985e\u55ce\uff1f\u522a\u9664\u5f8c\uff0c\u6b64\u5206\u985e\u4e2d\u7684\u6240\u6709\u804a\u5929\u5ba4\u5c07\u6703\u81ea\u52d5\u79fb\u5f80\u9810\u8a2d\u5206\u985e\u3002",
          "desktop.download.popup.call":
            "\u6b63\u5728\u4e0b\u8f09\u901a\u8a71\u64f4\u5145\u529f\u80fd\u2026",
          "desktop.download.popup.calldone":
            "\u4e0b\u8f09\u5b8c\u7562\uff0c\u60a8\u73fe\u5728\u53ef\u4f7f\u7528\u8a9e\u97f3\u901a\u8a71\u529f\u80fd\u4e86\u3002",
          "desktop.download.popup.plugin":
            "\u6b63\u5728\u4e0b\u8f09\u622a\u53d6GIF\u52d5\u5716\u7684\u64f4\u5145\u529f\u80fd\u2026",
          "desktop.download.popup.plugindone":
            "\u4e0b\u8f09\u5b8c\u7562\uff0c\u60a8\u73fe\u5728\u53ef\u4ee5\u622a\u53d6GIF\u52d5\u5716\u4e86\u3002",
          "desktop.download.popup.pluginnetworkerror":
            "\u7121\u6cd5\u4e0b\u8f09\u64f4\u5145\u529f\u80fd\uff0c\u8acb\u78ba\u8a8d\u7db2\u8def\u9023\u7dda\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "desktop.download.popup.pluginnospace":
            "\u88dd\u7f6e\u7684\u5132\u5b58\u7a7a\u9593\u4e0d\u8db3\uff0c\u8acb\u91cb\u51fa\u7a7a\u9593\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "desktop.download.popup.pluginunexpectederror":
            "\u7121\u6cd5\u4e0b\u8f09\u64f4\u5145\u529f\u80fd\u3002\n\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "desktop.download.popup.viewer":
            "\u6b63\u5728\u4e0b\u8f09\u64ad\u653e\u5668\u64f4\u5145\u529f\u80fd\u2026",
          "desktop.download.popup.viewerdone":
            "\u4e0b\u8f09\u5b8c\u7562\u3002\u9ede\u64ca\u6a94\u6848\u5373\u53ef\u5728\u5a92\u9ad4\u64ad\u653e\u5668\u4e2d\u958b\u555f\u3002",
          "desktop.dragndrop.button.addfiles": "\u52a0\u5165\u6a94\u6848",
          "desktop.dragndrop.button.cancelcompress": "\u53d6\u6d88",
          "desktop.dragndrop.button.send": "\u50b3\u9001\uff08%1\uff09",
          "desktop.dragndrop.button.sendcompressed": "\u50b3\u9001",
          "desktop.dragndrop.checkbox.alwayscompress":
            "\u4e00\u5f8b\u58d3\u7e2e\u5f8c\u518d\u50b3\u9001",
          "desktop.dragndrop.title.sendfile": "\u50b3\u9001\u6a94\u6848",
          "desktop.dragndrop.toast.upto50":
            "\u60a8\u6700\u591a\u53ef\u50b3\u900150\u500b\u6a94\u6848\u3002",
          "desktop.error.popup.noverification":
            "\u65bc\u624b\u6a5f\u7248LINE\u8a8d\u8b49\u5931\u6557\u3002\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "desktop.errorpopup.desc.downloadback":
            "\u4e0b\u8f09\u64f4\u5145\u5957\u4ef6\u53ef\u80fd\u9700\u8981\u82b1\u8cbb\u8f03\u9577\u6642\u9593\u3002\u662f\u5426\u8981\u95dc\u9589\u8996\u7a97\u4e26\u5728\u80cc\u666f\u7e7c\u7e8c\u4e0b\u8f09\uff1f",
          "desktop.errorpopup.desc.downloadno": "\u7dad\u6301\u8996\u7a97",
          "desktop.errorpopup.desc.downloadyes":
            "\u95dc\u9589\u4e26\u7e7c\u7e8c",
          "desktop.errorpopup.desc.expired":
            "\u56e0\u70ba\u5132\u5b58\u671f\u9650\u5df2\u904e\uff0c\u7121\u6cd5\u91cd\u50b3\u6b64\u6a94\u6848\u3002",
          "desktop.errorpopup.desc.remobile":
            "\u767c\u751f\u4f3a\u670d\u5668\u932f\u8aa4\uff0c\u7121\u6cd5\u50b3\u9001\u8a0a\u606f\u3002\u8acb\u4f7f\u7528LINE\u61c9\u7528\u7a0b\u5f0f\u91cd\u65b0\u64cd\u4f5c\u3002",
          "desktop.errorpopup.desc.remobiles":
            "\u767c\u751f\u4f3a\u670d\u5668\u932f\u8aa4\uff0c\u7121\u6cd5\u65bc\u7fa4\u7d44\u50b3\u9001\u8a0a\u606f\u3002\u8acb\u4f7f\u7528LINE\u61c9\u7528\u7a0b\u5f0f\u91cd\u65b0\u64cd\u4f5c\u3002",
          "desktop.errorpopup.desc.renewmembership":
            "\u60a8\u7684LYP Premium\u6703\u54e1\u72c0\u614b\u5df2\u8b8a\u66f4\uff0c\u56e0\u6b64\u7121\u6cd5\u4e0a\u50b3\u9805\u76ee\u3002\u8acb\u78ba\u8a8d\u6703\u54e1\u72c0\u614b\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "desktop.errorpopup.desc.revisedtermsofuse":
            "\u60a8\u5c1a\u672a\u540c\u610f\u66f4\u65b0\u5f8c\u7684\u300c\u540c\u610f\u6211\u5011\u4f7f\u7528\u60a8\u7684\u8cc7\u8a0a\u300d\uff0c\u56e0\u6b64\u7121\u6cd5\u4e0a\u50b3\u9805\u76ee\u3002\u900f\u904e\u884c\u52d5\u88dd\u7f6e\u5c07\u5f71\u7247\u6216\u539f\u59cb\u756b\u8cea\u7167\u7247\u4e0a\u50b3\u81f3\u76f8\u7c3f\u6642\uff0c\u8acb\u5148\u540c\u610f\u66f4\u65b0\u5f8c\u7684\u500b\u5225\u653f\u7b56\u3002",
          "desktop.errorpopup.title.resend":
            "\u91cd\u65b0\u50b3\u9001\u8a0a\u606f",
          "desktop.favoritethreads.desc.nothreads":
            "\u9ede\u9078\u8a0e\u8ad6\u4e32\u756b\u9762\u53f3\u4e0a\u65b9\u7684\u661f\u661f\u5716\u793a\uff0c\u5373\u53ef\u5c07\u611f\u8208\u8da3\u7684\u8a0e\u8ad6\u4e32\u65b0\u589e\u81f3\u6211\u7684\u6700\u611b\u3002",
          "desktop.fileshare.button.cancel": "\u53d6\u6d88",
          "desktop.fileshare.button.open": "\u5206\u4eab",
          "desktop.fileshare.desc.unsafefile":
            "\u60a8\u88ab\u9080\u8acb\u8207\u5176\u4ed6\u7528\u6236\u5206\u4eab\u4ee5\u4e0b\u6a94\u6848\u3002\u78ba\u5b9a\u8981\u5206\u4eab\u6b64\u6a94\u6848\u55ce\uff1f\n\n%1",
          "desktop.foldermenu.button.moveto":
            "\u79fb\u5f80\u5176\u4ed6\u5206\u985e",
          "desktop.friends.choose.empty":
            "\u5c1a\u7121\u597d\u53cb\u53ef\u4f9b\u9078\u64c7",
          "desktop.friendssearch.title.friendssearch":
            "\u641c\u5c0b\u597d\u53cb",
          "desktop.gprofilesetting.button.capturescreen":
            "\u622a\u53d6\u756b\u9762",
          "desktop.gprofilesetting.button.createtext":
            "\u5efa\u7acb\u7d14\u6587\u5b57\u500b\u4eba\u5716\u7247",
          "desktop.gprofilesetting.button.deleteprofile":
            "\u522a\u9664\u500b\u4eba\u5716\u7247",
          "desktop.gprofilesetting.button.selectdefault":
            "\u5f9e\u9810\u8a2d\u4e2d\u9078\u64c7",
          "desktop.gprofilesetting.button.selectphoto":
            "\u9078\u64c7\u7167\u7247",
          "desktop.group.choose.empty":
            "\u5c1a\u7121\u7fa4\u7d44\u53ef\u4f9b\u9078\u64c7",
          "desktop.hevcerror.desc.unabletoplay":
            "\u7121\u6cd5\u64ad\u653e\u6b64\u6a94\u6848\u683c\u5f0f\u3002\u662f\u5426\u8981\u4e0b\u8f09\u6a94\u6848\uff1f",
          "desktop.installer.button.install": "\u5b89\u88dd",
          "desktop.installer.checkbox.iagree":
            "\u6211\u540c\u610f\u300cLY Corporation\u901a\u7528\u670d\u52d9\u689d\u6b3e|https://terms.line.me/line_terms?lang=zh-Hant\u300d\u3002",
          "desktop.installer.desc.installingline":
            "\u6b63\u5728\u5b89\u88ddLINE\u3002\u8acb\u7a0d\u5019\u3002",
          "desktop.installer.desc.readandagree":
            "\u8acb\u95b1\u8b80\u4e26\u540c\u610f\u670d\u52d9\u689d\u6b3e\u4ee5\u5b89\u88ddLINE\u3002",
          "desktop.installercancel.button.no": "\u5426",
          "desktop.installercancel.button.yes": "\u662f",
          "desktop.installercancel.desc.stopinstalling":
            "\u662f\u5426\u8981\u505c\u6b62\u5b89\u88ddLINE\uff1f",
          "desktop.installerror.button.download": "\u4e0b\u8f09",
          "desktop.installerror.desc.badfile":
            "LINE\u672a\u6b63\u78ba\u5b89\u88dd\uff0c\u8acb\u4e0b\u8f09\u5b89\u88dd\u6a94\u4e26\u518d\u8a66\u4e00\u6b21\u3002",
          "desktop.leavescreenpopup.button.cancel": "\u53d6\u6d88",
          "desktop.leavescreenpopup.button.leave": "\u96e2\u958b",
          "desktop.line.albums.desc.photosnotyet":
            "\u5c07\u65bc\u8fd1\u671f\u63d0\u4f9b\u53ef\u700f\u89bd\u6240\u6709\u7167\u7247\u7684\u529f\u80fd",
          "desktop.line.chatmenu.title.albumsempty":
            "\u5c1a\u672a\u5efa\u7acb\u76f8\u7c3f",
          "desktop.login.button.gotoemailwithPhoneNumber":
            "\u4f7f\u7528\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u767b\u5165",
          "desktop.login.button.gotosmartphone":
            "\u4f7f\u7528\u667a\u6167\u624b\u6a5f\u767b\u5165",
          "desktop.login.button.loginwithsmartphone":
            "\u4f7f\u7528\u667a\u6167\u624b\u6a5f\u767b\u5165",
          "desktop.login.desc.transferring": "\u79fb\u52d5LINE\u5e33\u865f",
          "desktop.login.desc.verification":
            "\u82e5\u7121\u6cd5\u5728\u667a\u6167\u624b\u6a5f\u4e0a\u4f7f\u7528LINE\uff0c\u8acb\u57f7\u884c\u79fb\u52d5LINE\u5e33\u865f\u7684\u64cd\u4f5c\u3002",
          "desktop.login.popup.scanqr":
            "\u4f7f\u7528\u60a8\u7684\u667a\u6167\u624b\u6a5f\u6383\u63cf\u4ee5\u4e0b\u7684\u884c\u52d5\u689d\u78bc\uff0c\u4e26\u9ede\u9078\u300c\u5bc6\u78bc\u300d\u4ee5\u91cd\u8a2d\u5bc6\u78bc\u3002",
          "desktop.login.popup.seeonmobile":
            "\u5728\u60a8\u7684\u667a\u6167\u624b\u6a5f\u4e0a\u91cd\u8a2d\u5bc6\u78bc",
          "desktop.login.popupbutton.gotit": "\u986f\u793a\u8a8d\u8b49\u78bc",
          "desktop.login.popupdesc.cancelverification":
            "\u53d6\u6d88\u8a8d\u8b49",
          "desktop.login.popupdesc.loggingin":
            "\u8acb\u81ea\u667a\u6167\u624b\u6a5f\u7684LINE\u61c9\u7528\u7a0b\u5f0f\u8a8d\u8b49\u60a8\u70ba\u7528\u6236\u672c\u4eba\u3002",
          "desktop.login.popupdesc.pairingverificationcode":
            "\u8acb\u5148\u958b\u555f\u667a\u6167\u624b\u6a5f\u7684LINE\u61c9\u7528\u7a0b\u5f0f\uff0c\u9ede\u9078\u300c\u8a2d\u5b9a\u300d\uff1e\u300c\u6211\u7684\u5e33\u865f\u300d\uff1e\u300c\u9023\u52d5\u5176\u4ed6\u88dd\u7f6e\u300d\uff0c\u518d\u8f38\u5165\u4e0b\u52176\u4f4d\u6578\u8a8d\u8b49\u78bc\u3002",
          "desktop.login.popupdesc.pairingverificationcodeguide":
            "\u9996\u6b21\u9023\u52d5\u667a\u6167\u624b\u6a5f\u7684\u64cd\u4f5c\u6b65\u9a5f\n\n1.\u5728\u624b\u6a5f\u4e0a\u958b\u555fLINE\u61c9\u7528\u7a0b\u5f0f\n2.\u9ede\u9078\u300c\u8a2d\u5b9a\u300d\uff1e\u300c\u6211\u7684\u5e33\u865f\u300d\uff1e\u300c\u9023\u52d5\u5176\u4ed6\u88dd\u7f6e\u300d\n3.\u8f38\u51656\u4f4d\u6578\u8a8d\u8b49\u78bc\n\u203b\u8acb\u9ede\u9078\u756b\u9762\u4e0a\u7684\u300c\u986f\u793a\u8a8d\u8b49\u78bc\u300d\u4ee5\u67e5\u770b\u8a8d\u8b49\u78bc",
          "desktop.login.popupdesc.pairsecondarydevice":
            "\u9023\u52d5\u5176\u4ed6\u88dd\u7f6e",
          "desktop.login.popuptitle.loggingin":
            "\u6b63\u5728\u6e96\u5099\u767b\u5165",
          "desktop.login.popuptitle.pairingverificationcode":
            "\u9023\u52d5\u667a\u6167\u624b\u6a5f",
          "desktop.main.popup.newversion":
            "\u76ee\u524d\u6709LINE\u61c9\u7528\u7a0b\u5f0f\u6700\u65b0\u7248\u672c\u53ef\u4f9b\u66f4\u65b0\uff0c\u662f\u5426\u8981\u66f4\u65b0\u7248\u672c\uff1f",
          "desktop.movetomenu.button.all": "\u5168\u90e8",
          "desktop.movetomenu.button.customfolder": "%1",
          "desktop.movetomenu.button.friends": "\u597d\u53cb",
          "desktop.movetomenu.button.groups": "\u7fa4\u7d44",
          "desktop.movetomenu.button.oas": "\u5b98\u65b9\u5e33\u865f",
          "desktop.movetomenu.button.openchats": "\u793e\u7fa4",
          "desktop.mypsticker.button.stickershop": "Sticker shop",
          "desktop.mypsticker.button.upgrade": "\u7acb\u5373\u5347\u7d1a",
          "desktop.mypsticker.desc.getmore":
            "\u901b\u901b\u66f4\u591a\u8d85\u503c\u65b9\u6848\u8cbc\u5716\u5427\uff01",
          "desktop.mypsticker.desc.maximum":
            "\u6700\u591a\u53ef\u540c\u6642\u6301\u6709%1\u7d44\u8d85\u503c\u65b9\u6848\u8cbc\u5716\u3002",
          "desktop.mypsticker.desc.nosticker":
            "\u5c1a\u672a\u4e0b\u8f09\u8d85\u503c\u65b9\u6848\u8cbc\u5716",
          "desktop.mypsticker.desc.upgradetodeluxe":
            "\u9032\u968e\u578b\u65b9\u6848\u6700\u591a\u53ef\u6301\u67091,000\u7d44\u8cbc\u5716\u6216\u8868\u60c5\u8cbc\u3002\u7acb\u5373\u5728\u624b\u6a5f\u7248\u4e2d\u5347\u7d1a\u81f3\u9032\u968e\u578b\u65b9\u6848\u3002",
          "desktop.mysticker.button.cancel": "\u53d6\u6d88",
          "desktop.mysticker.button.cancelshow": "\u53d6\u6d88",
          "desktop.mysticker.button.showall": "\u986f\u793a\u5168\u90e8",
          "desktop.mysticker.button.stop": "\u505c\u6b62",
          "desktop.mysticker.button.stopshow": "\u505c\u6b62",
          "desktop.mysticker.desc.downloadstopemoji":
            "\u8981\u505c\u6b62\u4e0b\u8f09\u8868\u60c5\u8cbc\u55ce\uff1f",
          "desktop.mysticker.desc.downloadstopsticker":
            "\u78ba\u5b9a\u8981\u505c\u6b62\u4e0b\u8f09\u55ce\uff1f",
          "desktop.mysticker.desc.stopshowemoji":
            "\u8981\u505c\u6b62\u4e0b\u8f09\u5168\u90e8\u7684\u8868\u60c5\u8cbc\u55ce\uff1f",
          "desktop.mysticker.desc.stopshowsticker":
            "\u60a8\u8981\u505c\u6b62\u4e0b\u8f09\u5168\u90e8\u8cbc\u5716\u55ce\uff1f",
          "desktop.mystickers.desc.noexpire":
            "\u7121\u4f7f\u7528\u6548\u671f\u9650\u5236",
          "desktop.mystickers.desc.nolongerp":
            "\u5df2\u4e0d\u518d\u914d\u5408\u8d85\u503c\u65b9\u6848\u63d0\u4f9b\u9078\u7528\u3002",
          "desktop.mystickers.desc.passedtime":
            "\u4f7f\u7528\u6548\u671f\u5df2\u904e",
          "desktop.mystickers.desc.until": "\u53ef\u4f7f\u7528\u81f3%1",
          "desktop.mystickers.tooltip.hide": "\u96b1\u85cf",
          "desktop.mystickers.tooltip.show": "\u986f\u793a",
          "desktop.noin87notice.button.download": "\u4e0b\u8f09",
          "desktop.noin87notice.desc.supportend":
            "LINE\u5c07\u4e0d\u518d\u652f\u63f4Windows 7\u548c8\u3002 \u8acb\u6309\u4ee5\u4e0b\u9023\u7d50\u4e0b\u8f09\u6700\u65b0\u517c\u5bb9\u7248\u672c\u3002",
          "desktop.oa.chat.oaunsendconfirm.desc":
            "\u4f9d\u5b98\u65b9\u5e33\u865f\u7d93\u71df\u5718\u968a\u7684\u4f5c\u696d\u74b0\u5883\uff0c\u6b64\u8a0a\u606f\u53ef\u80fd\u6703\u7e7c\u7e8c\u986f\u793a\u65bc\u5c0d\u65b9\u7684\u804a\u5929\u756b\u9762\u4e2d\u3002\u78ba\u5b9a\u8981\u6536\u56de\u55ce\uff1f",
          "desktop.ocr.popup.toobig":
            "\u7531\u65bc\u5716\u7247\u5927\u5c0f\u5df2\u8d85\u904e5MB\uff0c\u7121\u6cd5\u6b63\u5e38\u57f7\u884c\u3002\u8acb\u8b8a\u66f4\u5716\u7247\u5927\u5c0f\u5f8c\uff0c\u518d\u8a66\u4e00\u6b21\u3002",
          "desktop.openchatsetting.popup.onmobile":
            "\u60a8\u53ef\u4ee5\u5728\u667a\u6167\u624b\u6a5f\u7248LINE\u4e2d\u8b8a\u66f4\u6b64\u8a2d\u5b9a\u3002",
          "desktop.premiumhistory.desc.history":
            "\u6b64\u8655\u986f\u793a\u7684\u662f\u60a8\u904e\u53bb1\u5e74\u5167\u672a\u4f7f\u7528\u7684\u8d85\u503c\u65b9\u6848\u8cbc\u5716\u3002",
          "desktop.premiumpopup.button.canceleold": "\u53d6\u6d88",
          "desktop.premiumpopup.button.deleteold": "\u522a\u9664",
          "desktop.premiumpopup.button.edit": "\u66f4\u63db\u8cbc\u5716",
          "desktop.premiumpopup.desc.downloadlimit":
            "\u60a8\u5df2\u6301\u6709%1\u7d44\u8d85\u503c\u65b9\u6848\u8cbc\u5716\uff0c\u8acb\u522a\u9664\u5176\u4e2d1\u7d44\u8cbc\u5716\u5f8c\u518d\u9032\u884c\u4e0b\u8f09\u3002",
          "desktop.premiumpopup.desc.notavailablee":
            "\u6b64\u7d44\u8868\u60c5\u8cbc\u4e0d\u518d\u914d\u5408\u300cLINE\u8cbc\u5716\u8d85\u503c\u65b9\u6848\u300d\u63d0\u4f9b\u9078\u7528\u3002\u8981\u5f9e\u60a8\u7684\u6e05\u55ae\u4e2d\u522a\u9664\u55ce\uff1f",
          "desktop.premiumpopup.desc.notavailables":
            "\u6b64\u7d44\u8cbc\u5716\u4e0d\u518d\u914d\u5408\u300cLINE\u8cbc\u5716\u8d85\u503c\u65b9\u6848\u300d\u63d0\u4f9b\u9078\u7528\u3002\u8981\u5f9e\u60a8\u7684\u6e05\u55ae\u4e2d\u522a\u9664\u55ce\uff1f",
          "desktop.premiumpopup.title.downloadlimit":
            "\u6301\u6709\u4e0a\u9650",
          "desktop.profile.desc.video15secs":
            "\u52d5\u614b\u500b\u4eba\u5c01\u9762\u5fc5\u9808\u77ed\u65bc15\u79d2\u3002",
          "desktop.profile.desc.video6secs":
            "\u52d5\u614b\u500b\u4eba\u5716\u7247\u5fc5\u9808\u77ed\u65bc6\u79d2\u3002",
          "desktop.profileselectphoto.button.cancel": "\u53d6\u6d88",
          "desktop.profileselectphoto.button.save": "\u5132\u5b58",
          "desktop.profilesetting.button.capturescreen":
            "\u622a\u53d6\u756b\u9762",
          "desktop.profilesetting.button.createtext":
            "\u5efa\u7acb\u7d14\u6587\u5b57\u500b\u4eba\u5716\u7247",
          "desktop.profilesetting.button.deleteprofile":
            "\u522a\u9664\u500b\u4eba\u5716\u7247",
          "desktop.profilesetting.button.selectdefault":
            "\u5f9e\u9810\u8a2d\u4e2d\u9078\u64c7",
          "desktop.profilesetting.button.selectphoto":
            "\u9078\u64c7\u7167\u7247",
          "desktop.profilesetting.popup.500savechat":
            "\u5c07\u804a\u5929\u5ba4\u4e2d\u50b3\u9001\u7684\u6700\u65b0500\u5247\u8a0a\u606f\u5132\u5b58\u70ba\u6587\u5b57\u6a94\u3002",
          "desktop.quickreply.popup.notonpc":
            "\u96fb\u8166\u7248LINE\u7121\u6cd5\u4f7f\u7528\u6b64\u529f\u80fd\u3002",
          "desktop.reaction.button.ok": "\u78ba\u5b9a",
          "desktop.reaction.button.seemore": "\u77ad\u89e3\u66f4\u591a",
          "desktop.reaction.desc.error":
            "\u767c\u751f\u66ab\u6642\u6027\u932f\u8aa4\uff0c\u7121\u6cd5\u5c0d\u6b64\u8a0a\u606f\u505a\u51fa\u56de\u61c9\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "desktop.reaction.desc.plurals.other": "%1\u500b\u56de\u61c9",
          "desktop.reaction.desc.reaction1":
            "\u5c07\u60a8\u7684\u6ed1\u9f20\u79fb\u52d5\u5230\u8a0a\u606f\u4e0a\u65b9\n\uff0c\u4e26\u9ede\u64ca\u7b11\u81c9\u5716\u793a\u4f86\u5c0d\u7167\u7247\u505a\u51fa\u56de\u61c9\u3002",
          "desktop.reaction.desc.reaction2":
            "\u9ede\u64ca\u8a0a\u606f\u4e0b\u65b9\u7684\u5716\u793a\u4f86\u67e5\u770b\n\u60a8\u597d\u53cb\u7684\u56de\u61c9\u3002",
          "desktop.reaction.desc.unsent":
            "\u7121\u6cd5\u518d\u5c0d\u6b64\u8a0a\u606f\u505a\u51fa\u56de\u61c9",
          "desktop.reaction.title.reaction":
            "\u4e00\u500b\u56de\u61c9\u52dd\u904e\n\u5343\u767e\u5247\u8a0a\u606f\uff01",
          "desktop.reaction.toast.expired":
            "\u6b64\u9805\u76ee\u5df2\u904e\u671f\uff0c\u7121\u6cd5\u518d\u5c0d\u6b64\u9805\u76ee\u505a\u51fa\u56de\u61c9",
          "desktop.reaction.toast.unsent":
            "\u6b64\u7167\u7247\u5df2\u6536\u56de\uff0c\u7121\u6cd5\u518d\u5c0d\u6b64\u7167\u7247\u505a\u51fa\u56de\u61c9",
          "desktop.reaction.tooltip.smile":
            "\u9ede\u64ca\u7b11\u81c9\u5716\u793a\u4f86\u5c0d\u7167\u7247\u505a\u51fa\u56de\u61c9",
          "desktop.removechatpopup.button.cancel": "\u53d6\u6d88",
          "desktop.removechatpopup.button.remove": "\u79fb\u9664",
          "desktop.removechatpopup.desc.allchats.other":
            "\u804a\u5929\u5ba4 %1",
          "desktop.removechatpopup.desc.selected": "\u5df2\u9078 %1",
          "desktop.removechatpopup.placeholder.search": "\u641c\u5c0b",
          "desktop.removechatpopup.title.removechats":
            "\u79fb\u9664\u6b64\u5206\u985e\u4e2d\u7684\u804a\u5929\u5ba4",
          "desktop.restorepopup.button.ignore": "\u5ffd\u7565",
          "desktop.restorepopup.button.restore": "\u5fa9\u539f",
          "desktop.restorepopup.desc.restoreline":
            "\u96fb\u8166\u4e0a\u542b\u6709\u900f\u904e\u5176\u4ed6\u8def\u5f91\u5b89\u88dd\u7684LINE\u61c9\u7528\u7a0b\u5f0f\u3002\u662f\u5426\u8981\u5f9e\u5176\u4ed6LINE\u61c9\u7528\u7a0b\u5f0f\u5fa9\u539f\u804a\u5929\u8a18\u9304\uff1f",
          "desktop.setting.desc.enablechatfolders":
            "\u555f\u7528\u300c\u804a\u5929\u5ba4\u5206\u985e\u300d\u529f\u80fd",
          "desktop.setting.desc.windows": "Windows",
          "desktop.setting.title.chatfolder": "\u804a\u5929\u5ba4\u5206\u985e",
          "desktop.settings.desc.cantgetnotifocusassist":
            "\u60a8\u5df2\u958b\u555f\u5c08\u6ce8\u8f14\u52a9\u529f\u80fd\uff0c\u6545\u7121\u6cd5\u63a5\u6536\u4f86\u81eaLINE\u7684\u63d0\u9192\u3002\u8acb\u8b8a\u66f4\u88dd\u7f6e\u7684\u5c08\u6ce8\u8f14\u52a9\u8a2d\u5b9a\u3002 ",
          "desktop.settings.desc.cantgetnotiline":
            "\u60a8\u5c1a\u672a\u958b\u555fLINE\u7684\u63d0\u9192\u529f\u80fd\u3002\u5982\u9700\u4f7f\u7528\u672c\u529f\u80fd\uff0c\u8acb\u81f3\u88dd\u7f6e\u7684\u8a2d\u5b9a\u5167\u958b\u555f\u3002",
          "desktop.settings.desc.cantgetnotios":
            "\u60a8\u5c1a\u672a\u958b\u555f\u63d0\u9192\u529f\u80fd\u3002\u5982\u9700\u4f7f\u7528\u672c\u529f\u80fd\uff0c\u8acb\u81f3\u88dd\u7f6e\u7684\u8a2d\u5b9a\u5167\u958b\u555f\u3002",
          "desktop.settings.desc.osnotification":
            "\u9078\u64c7Windows\u5f8c\uff0c\u5c07\u6839\u64daWindows\u7cfb\u7d71\u7684\u8a2d\u5b9a\u4f86\u63a5\u6536\u63d0\u9192\u3002",
          "desktop.settings.desc.safeguard":
            "\u4ee5\u62d6\u66f3\u65b9\u5f0f\u5c07\u6a94\u6848\u50b3\u9001\u81f3\u804a\u5929\u5ba4\u524d\u5148\u9810\u89bd\u3002",
          "desktop.settings.notification.description":
            "\u82e5\u5f37\u5236\u7d50\u675f\u61c9\u7528\u7a0b\u5f0f\uff0c\u63d0\u9192\u8a0a\u606f\u5c07\u6709\u53ef\u80fd\u5ef6\u9072\u9001\u9054\u6216\u7121\u6cd5\u63a5\u6536\u3002",
          "desktop.settings.notifications.turnonm":
            "\u60a8\u5c1a\u672a\u958b\u555fLINE\u7684\u63d0\u9192\u529f\u80fd\u3002\u5982\u9700\u4f7f\u7528\u672c\u529f\u80fd\uff0c\u8acb\u81f3\u88dd\u7f6e\u7684\u8a2d\u5b9a\u5167\u958b\u555f\u3002",
          "desktop.settings.notifications.turnonw":
            "\u60a8\u5c1a\u672a\u958b\u555fLINE\u7684\u63d0\u9192\u529f\u80fd\u3002\u5982\u9700\u4f7f\u7528\u672c\u529f\u80fd\uff0c\u8acb\u81f3\u88dd\u7f6e\u672c\u8eab\u7684\u300c\u8a2d\u5b9a\u300d\uff1e\u300c\u7cfb\u7d71\u300d\uff1e\u300c\u901a\u77e5\u8207\u52d5\u4f5c\u300d\u9801\u9762\u958b\u555f\u3002",
          "desktop.settings.title.safeguard": "\u6a94\u6848\u9810\u89bd",
          "desktop.shortcuts.desc.tilechats": "\u6392\u5217\u804a\u5929\u5ba4",
          "desktop.shortcuts.desc.undotiling":
            "\u53d6\u6d88\u6392\u5217\u804a\u5929\u5ba4",
          "desktop.smode.popup.nogif":
            "\u57fa\u65bc\u5b89\u5168\u6027\u653f\u7b56\uff0c\u7528\u6236\u7121\u6cd5\u65bcWindows 10 S\u6a21\u5f0f\u4e2d\u9032\u884c\u901a\u8a71\u3001\u4f7f\u7528\u5a92\u9ad4\u64ad\u653e\u5668\u53caGIF\u622a\u5716\u529f\u80fd\u3002",
          "desktop.sticker.button.deletedstickers":
            "\u8d85\u503c\u65b9\u6848\u8cbc\u5716\u4e0b\u8f09\u8a18\u9304",
          "desktop.sticker.button.mystickers": "\u6211\u7684\u8cbc\u5716",
          "desktop.sticker.button.premium":
            "\u6211\u7684\u8d85\u503c\u65b9\u6848\u8cbc\u5716",
          "desktop.sticker.tooltip.switch":
            "\u53ef\u6539\u8b8a\u8cbc\u5716\u7684\u9806\u5e8f\u4ee5\u8f15\u9b06\u7ba1\u7406\u3002\u6e05\u55ae\u6703\u81ea\u52d5\u8207\u624b\u6a5f\u7248\u9032\u884c\u540c\u6b65\u3002",
          "desktop.stickers.desc.recentlyusede":
            "\u6700\u8fd1\u4f7f\u7528\u7684\u8868\u60c5\u8cbc",
          "desktop.stickers.desc.recentlyuseds":
            "\u6700\u8fd1\u4f7f\u7528\u7684\u8cbc\u5716",
          "desktop.stickers.tooltip.synced":
            "\u60a8\u8cbc\u5716\u8207\u8868\u60c5\u8cbc\u7684\u9806\u5e8f\u5df2\u8207\u624b\u6a5f\u7248\u61c9\u7528\u7a0b\u5f0f\u540c\u6b65\u3002",
          "desktop.stickertab.button.seemore": "\u986f\u793a\u66f4\u591a",
          "desktop.stickertab.desc.latestemoji":
            "%1\u7684\u6700\u65b0\u8868\u60c5\u8cbc",
          "desktop.stickertab.desc.lateststicker":
            "%1\u7684\u6700\u65b0\u8cbc\u5716",
          "desktop.tab.button.ai": "AI\u5e33\u865f",
          "desktop.textprofile.button.cancel": "\u53d6\u6d88",
          "desktop.textprofile.button.save": "\u5132\u5b58",
          "desktop.textprofile.desc.defaultfont": "\u9810\u8a2d\u5b57\u578b",
          "desktop.textprofile.placeholder.entertext":
            "\u8f38\u5165\u6587\u5b57",
          "desktop.textprofile.title.createtextprofile":
            "\u5efa\u7acb\u7d14\u6587\u5b57\u500b\u4eba\u5716\u7247",
          "desktop.thread.desc.sendfiletothread":
            "\u50b3\u9001\u6a94\u6848\u81f3\u804a\u5929\u5ba4",
          "desktop.thread.tooltip.taphere":
            "\u9ede\u9078\u6b64\u5716\u793a\u53ef\u5728\u6211\u7684\u6700\u611b\u4e2d\u65b0\u589e\u6216\u79fb\u9664\u8a0e\u8ad6\u4e32\u3002",
          "desktop.updatepopup.button.later": "\u4e0b\u6b21\u518d\u8aaa",
          "desktop.updatepopup.button.update": "\u66f4\u65b0",
          "desktop.updatepopup.desc.update1":
            "LINE %1\u7248\u672c\u5df2\u7121\u6cd5\u7e7c\u7e8c\u4f7f\u7528\uff0c\u8acb\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u3002\u66f4\u65b0\u5f8cLINE\u5c07\u91cd\u65b0\u555f\u52d5\u3002",
          "desktop.updatepopup.desc.update1mac":
            "LINE %1\u7248\u672c\u5df2\u7121\u6cd5\u7e7c\u7e8c\u4f7f\u7528\u3002\u8acb\u900f\u904eApp Store\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u3002",
          "desktop.viewer.desc.gifby": "\u4f86\u81ea%1\u7684GIF\u52d5\u5716",
          "desktop.viewer.desc.gifmagazine": "GIFMAGAZINE",
          "desktop.viewer.popup.cantsave":
            "%1\u7684GIF\u52d5\u5716\u7121\u6cd5\u5132\u5b58\u81f3Keep",
          "desktop.viewer.popup.cantsaves":
            "%1\u7684GIF\u52d5\u5716\u7121\u6cd5\u5132\u5b58\u81f3Keep\u3002\u662f\u5426\u7e7c\u7e8c\u5132\u5b58\u5176\u4ed6\u6a94\u6848\uff1f",
          "desktop.viewer.popup.cantshare":
            "\u7121\u6cd5\u5206\u4eab%1\u7684GIF\u52d5\u5716",
          "desktop.viewer.popup.cantshares":
            "\u7121\u6cd5\u5206\u4eab%1\u7684GIF\u52d5\u5716\u3002\u662f\u5426\u7e7c\u7e8c\u5206\u4eab\u5176\u4ed6\u6a94\u6848\uff1f",
          "desktop.wallpaper.popup.delete":
            "\u78ba\u5b9a\u8981\u522a\u9664\u6b64\u80cc\u666f\u55ce\uff1f\u6240\u6709\u4f7f\u7528\u6b64\u80cc\u666f\u7684\u804a\u5929\u5ba4\u5c07\u8b8a\u66f4\u70ba\u9810\u8a2d\u80cc\u666f\u3002",
          "dialog.download.font": "tahoma",
          "dialog.download.message": "\u8655\u7406\u4e2d",
          "dialog.download.messagesub": "\u8acb\u7a0d\u5019",
          "displayname.error.badwords":
            "\u6b64\u540d\u7a31\u7121\u6cd5\u8a2d\u5b9a\uff0c\n\u8acb\u4f7f\u7528\u5176\u4ed6\u540d\u7a31\u3002 ",
          "duplicategroup.popup.button.gotochatmultiple":
            "\u524d\u5f80\u8a72\u7fa4\u7d44",
          "duplicategroup.popup.createnewgroup": "\u5efa\u7acb\u7fa4\u7d44",
          "duplicategroup.popup.desc.chatexistsmultiple":
            "\u6210\u54e1\u5b8c\u5168\u76f8\u540c\u7684\u7fa4\u7d44\u300c%1\u300d\u5df2\u7d93\u5b58\u5728\uff0c\u8981\u524d\u5f80\u8a72\u7fa4\u7d44\u55ce\uff1f",
          "duplicategroup.popup.desc.selfchatexists":
            "\u60a8\u662f\u552f\u4e00\u6210\u54e1\u7684\u7fa4\u7d44\u300c%1\u300d\u5df2\u7d93\u5b58\u5728\uff0c\u8981\u524d\u5f80\u8a72\u7fa4\u7d44\u55ce\uff1f",
          "duplicategroup.popup.title.groupexists":
            "\u7fa4\u7d44\u5df2\u7d93\u5b58\u5728",
          "e2ee.auth.pincode.timeout":
            "\u7121\u6cd5\u6b63\u5e38\u57f7\u884c\uff0c\n\u8acb\u7a0d\u5f8c\u518d\u8a66\uff01",
          "e2ee.message.title": "\u7121\u6cd5\u89e3\u5bc6\u6b64\u8a0a\u606f",
          "e2ee.popupbutton.ok": "\u78ba\u5b9a",
          "e2ee.popupdesc.pleaseresend":
            "\u57fa\u65bc\u5b89\u5168\u6027\u8003\u91cf\uff0c\u7121\u6cd5\u986f\u793a\u6b64\u8a0a\u606f\u3002\u8acb\u806f\u7d61\u5c0d\u65b9\u518d\u6b21\u50b3\u9001\u8a0a\u606f\u7d66\u60a8\u3002",
          "e2ee.popupdesc.securityerror":
            "\u57fa\u65bc\u5b89\u5168\u6027\u8003\u91cf\uff0c\u7121\u6cd5\u958b\u555f\u6b64\u6a94\u6848\u3002",
          "e2ee.popuptitle.securityerror": "\u5b89\u5168\u6027\u554f\u984c",
          "emoji.downloadAll.confirm":
            "\u8981\u4e0b\u8f09\u6240\u6709\u8868\u60c5\u8cbc\u55ce\uff1f",
          "friend.msg.block":
            "\u78ba\u5b9a\u8981\u5c01\u9396\u300c%1\u300d\u55ce\uff1f\u60a8\u4e0d\u6703\u518d\u6536\u5230\u5c0d\u65b9\u7684\u8a0a\u606f\u3002\u82e5\u8981\u89e3\u9664\u5c01\u9396\uff0c\u8acb\u524d\u5f80\u300c\u8a2d\u5b9a\u300d\uff1e\u300c\u597d\u53cb\u7ba1\u7406\u300d\uff0c\u4e26\u8a2d\u5b9a\u300c\u5c01\u9396\u540d\u55ae\u300d\u3002",
          "friend.msg.hide":
            "\u78ba\u5b9a\u8981\u7531\u597d\u53cb\u540d\u55ae\u4e2d\u96b1\u85cf\u300c%1\u300d\u55ce\uff1f\u82e5\u8981\u89e3\u9664\u96b1\u85cf\uff0c\u8acb\u524d\u5f80\u300c\u8a2d\u5b9a\u300d\uff1e\u300c\u597d\u53cb\u7ba1\u7406\u300d\uff0c\u4e26\u8a2d\u5b9a\u300c\u96b1\u85cf\u540d\u55ae\u300d\u3002",
          "gallery.picker.original.btn": "\u539f\u59cb\u7167\u7247",
          "gnb.guide.allNotification.text":
            "\u4e0d\u60f3\u88ab\u6253\u64fe\u6642\uff0c\u6309\u6b64\u53ef\u95dc\u9589\u6240\u6709\u63d0\u9192\u3002",
          "group.btn.add.title": "\u52a0\u5165",
          "group.btn.cancel.title": "\u53d6\u6d88",
          "group.btn.cancelinvite.title": "\u53d6\u6d88",
          "group.btn.invite.title": "\u9080\u8acb\u597d\u53cb",
          "group.btn.removeMember.title": "\u522a\u9664",
          "group.button.invitefrineds": "\u9080\u8acb\u597d\u53cb",
          "group.label.addprofile.title": "\u7de8\u8f2f",
          "group.label.create.title": "\u5efa\u7acb\u7fa4\u7d44",
          "group.label.groupname.title": "\u7fa4\u7d44\u540d\u7a31",
          "group.label.invitee.title": "\u6b63\u5728\u9080\u8acb",
          "group.label.member.title": "\u7fa4\u7d44\u6210\u54e1",
          "group.label.modify.title": "\u7de8\u8f2f\u7fa4\u7d44",
          "group.label.modifyprofile.title": "\u7de8\u8f2f",
          "group.label.nobuddy.title": "\u6c92\u6709\u6210\u54e1",
          "group.label.nobuddytoselect.title":
            "\u6c92\u6709\u53ef\u4ee5\u9080\u8acb\u7684\u597d\u53cb\u3002",
          "group.label.nosearchresult.title":
            "\u627e\u4e0d\u5230\u7b26\u5408\u7684\u8cc7\u6599\u3002",
          "group.label.nothing.title":
            "\u60a8\u5c1a\u672a\u9078\u64c7\u4efb\u4f55\u597d\u53cb\u3002",
          "group.label.selectmember.title": "\u9080\u8acb\u6210\u54e1",
          "group.label.unauthorized":
            "\u60a8\u7121\u6b0a\u9650\u4f7f\u7528\u6b64\u7fa4\u7d44",
          "group.menu.delete": "\u522a\u9664",
          "group.menu.leave": "\u96e2\u958b",
          "group.msg.cancelInvite.confirm":
            "\u300c%1\u300d\u5c1a\u672a\u52a0\u5165\u7fa4\u7d44\uff0c\u662f\u5426\u8981\u53d6\u6d88\u9080\u8acb\uff1f",
          "group.msg.cancelinvite.failed":
            "\u7121\u6cd5\u53d6\u6d88\u672c\u9080\u8acb",
          "group.msg.empty.name": "\u8acb\u8f38\u5165\u7fa4\u7d44\u540d\u7a31",
          "group.msg.kickoutmember.confirm":
            "\u60a8\u8981\u5c07\u300c%1\u300d\u5f9e\u7fa4\u7d44\u7576\u4e2d\u522a\u9664\u55ce\uff1f",
          "group.msg.kickoutmember.failed":
            "\u672c\u6210\u54e1\u7121\u6cd5\u522a\u9664",
          "group.msg.leavegroup.confirm":
            "\u78ba\u5b9a\u8981\u9000\u51fa\u6b64\u7fa4\u7d44\u55ce\uff1f\u60a8\u5c07\u7121\u6cd5\u518d\u700f\u89bd\u6b64\u7fa4\u7d44\u7684\u6210\u54e1\u540d\u55ae\u53ca\u804a\u5929\u8a18\u9304\u3002",
          "group.msg.makegroup.failed": "\u7fa4\u7d44\u7121\u6cd5\u5efa\u7acb",
          "group.msg.overflow.name":
            "\u6700\u591a\u50c5\u80fd\u4f9b\u60a8\u8f38\u516520\u500b\u5b57\uff0c\u8acb\u78ba\u8a8d\u5b57\u6578\u3002",
          "group.msg.uploadimge.failed": "\u5716\u7247\u7121\u6cd5\u4e0a\u50b3",
          "group.profile.delete": "\u522a\u9664\u500b\u4eba\u6a94\u6848",
          "group.profile.select.default":
            "\u5f9e\u9810\u8a2d\u5716\u7247\u4e2d\u9078\u64c7",
          "group.profile.select.local": "\u5f9e\u96fb\u8166\u4e2d\u9078\u64c7",
          "group.text.placerholder.title": "\u7fa4\u7d44\u540d\u7a31",
          "group.title.members": "\u6210\u54e1",
          "groupcall.ageverification.popupdesc.minorscantuse":
            "\u672a\u6210\u5e74\u8005\u7121\u6cd5\u4f7f\u7528\u6703\u8b70\u5ba4\u529f\u80fd",
          "groupcall.alert.popup.error.nowcalling":
            "\u60a8\u73fe\u6b63\u901a\u8a71\u4e2d\uff0c\u6545\u7121\u6cd5\u64a5\u51fa\u3002\n\u8acb\u65bc\u76ee\u524d\u7684\u901a\u8a71\u7d50\u675f\u5f8c\u91cd\u64a5\u3002",
          "groupcall.call.change.to.video":
            "\u60a8\u8981\u5207\u63db\u81f3\u8996\u8a0a\u901a\u8a71\u55ce\uff1f",
          "groupcall.call.change.to.video.noCamera":
            "\u7531\u65bc\u4e26\u672a\u5075\u6e2c\u5230\u93e1\u982d\uff0c\u5c07\u4e0d\u6703\u986f\u793a\u60a8\u7684\u8996\u8a0a\u756b\u9762\u3002\u8acb\u554f\u60a8\u4ecd\u8981\u5207\u63db\u81f3\u8996\u8a0a\u901a\u8a71\u55ce\uff1f",
          "groupcall.call.endwatchtogether.button": "\u505c\u6b62\u5206\u4eab",
          "groupcall.call.invite.complete":
            "\u5df2\u50b3\u9001\u9080\u8acb\u3002",
          "groupcall.call.invite.tooltip":
            "\u9ede\u9078\u6b64\u6309\u9375\u9080\u8acb\u804a\u5929\u5ba4\u4e2d\u7684\u5176\u4ed6\u4eba\u52a0\u5165\u7fa4\u7d44\u901a\u8a71\u3002",
          "groupcall.call.popupbutton.cancel": "\u73fe\u5728\u4e0d\u8981",
          "groupcall.call.popupbutton.switch": "\u5207\u63db",
          "groupcall.call.popupdesc.newcam":
            "\u73fe\u5728\u5207\u63db\u81f3\u300c%1\u300d\u55ce\uff1f",
          "groupcall.call.popupdesc.newmic":
            "\u73fe\u5728\u5207\u63db\u81f3\u300c%1\u300d\u55ce\uff1f",
          "groupcall.call.popupdesc.newspeaker":
            "\u73fe\u5728\u5207\u63db\u81f3\u300c%1\u300d\u55ce\uff1f",
          "groupcall.call.popuptitle.newcam":
            "\u5075\u6e2c\u5230\u65b0\u7684\u76f8\u6a5f",
          "groupcall.call.popuptitle.newmic":
            "\u5075\u6e2c\u5230\u65b0\u7684\u9ea5\u514b\u98a8",
          "groupcall.call.popuptitle.newspeaker":
            "\u5075\u6e2c\u5230\u65b0\u7684\u64f4\u97f3\u5668",
          "groupcall.call.speaker.many.few":
            "%1\u548c\u5176\u4ed6%2\u500b\u4eba",
          "groupcall.call.speaker.many.many":
            "%1\u548c\u5176\u4ed6%2\u500b\u4eba",
          "groupcall.call.speaker.many.one":
            "%1\u548c\u5176\u4ed6%2\u500b\u4eba",
          "groupcall.call.speaker.many.other":
            "%1\u548c\u5176\u4ed6%2\u500b\u4eba",
          "groupcall.call.speaker.many.two":
            "%1\u548c\u5176\u4ed6%2\u500b\u4eba",
          "groupcall.call.speaker.many.zero":
            "%1\u548c\u5176\u4ed6%2\u500b\u4eba",
          "groupcall.call.toast.loadingyoutube": "\u8b80\u53d6\u4e2d\u2026",
          "groupcall.call.toast.someoneelsepreparingwatchtogether":
            "%1\u6b63\u5728\u6e96\u5099\u5206\u4eab\u87a2\u5e55\u756b\u9762\u3002",
          "groupcall.call.toast.usersjoinedgroupcall.other":
            "%1\u548c\u5176\u4ed6%n\u4eba\u5df2\u52a0\u5165\u7fa4\u7d44\u901a\u8a71\u3002",
          "groupcall.call.toast.usersleftgroupcall.other":
            "%1\u548c\u5176\u4ed6%n\u4eba\u5df2\u9000\u51fa\u7fa4\u7d44\u901a\u8a71\u3002",
          "groupcall.call.waiting.msg":
            "\u6b63\u5728\u7b49\u5f85\u5176\u4ed6\u4eba\u52a0\u5165\u901a\u8a71\u2026",
          "groupcall.call.watchtogether.button":
            "\u5206\u4eab\u87a2\u5e55\u756b\u9762",
          "groupcall.callsettings.button.numberofparticipants":
            "\u6210\u54e1\uff08%1\uff09",
          "groupcall.callsettings.tooltip.handsfreebt":
            "\u8acb\u5c07\u300c%1\u300d\u540c\u6642\u8a2d\u70ba\u9ea5\u514b\u98a8\u53ca\u64f4\u97f3\u5668\u3002",
          "groupcall.callsettingspreview.desc.nocamera":
            "\u52a0\u5165\u6703\u8b70\u5ba4\u524d\uff0c\u8acb\u5148\u78ba\u8a8d\u901a\u8a71\u8a2d\u5b9a\u3002\u76ee\u524d\u672a\u5075\u6e2c\u5230\u76f8\u6a5f\u93e1\u982d\uff0c\u5176\u4ed6\u4eba\u5c07\u7121\u6cd5\u770b\u5230\u60a8\u7684\u5f71\u50cf\u3002",
          "groupcall.callsettingspreview.desc.nomic":
            "\u52a0\u5165\u6703\u8b70\u5ba4\u524d\uff0c\u8acb\u5148\u78ba\u8a8d\u901a\u8a71\u8a2d\u5b9a\u3002\u76ee\u524d\u672a\u5075\u6e2c\u5230\u9ea5\u514b\u98a8\uff0c\u5176\u4ed6\u4eba\u5c07\u7121\u6cd5\u807d\u5230\u60a8\u7684\u8072\u97f3\u3002",
          "groupcall.callsettingspreview.desc.nomicorcamera":
            "\u52a0\u5165\u6703\u8b70\u5ba4\u524d\uff0c\u8acb\u5148\u78ba\u8a8d\u901a\u8a71\u8a2d\u5b9a\u3002\u76ee\u524d\u672a\u5075\u6e2c\u5230\u9ea5\u514b\u98a8\u53ca\u76f8\u6a5f\u93e1\u982d\uff0c\u5176\u4ed6\u4eba\u5c07\u7121\u6cd5\u807d\u5230\u60a8\u7684\u8072\u97f3\u6216\u770b\u5230\u60a8\u3002",
          "groupcall.chat.alert.popup.error.overflow":
            "\u901a\u8a71\u6d41\u91cf\u904e\u5927\uff0c\u56e0\u6b64\u7121\u6cd5\u958b\u59cb\u7fa4\u7d44\u901a\u8a71\u3002\n\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "groupcall.chat.confirm.popup.cant":
            "\u60a8\u4e0d\u662f\u8a72\u7fa4\u7d44\u7684\u6210\u54e1\uff0c\u56e0\u6b64\u7121\u6cd5\u52a0\u5165\u672c\u6b21\u7fa4\u7d44\u901a\u8a71\u3002",
          "groupcall.chat.confirm.popup.join.few":
            "\u76ee\u524d\u6709%n\u500b\u4eba\u52a0\u5165\u4e86\u672c\u6b21\u7fa4\u7d44\u901a\u8a71\u3002\u60a8\u8981\u52a0\u5165\u901a\u8a71\u55ce\uff1f",
          "groupcall.chat.confirm.popup.join.many":
            "\u76ee\u524d\u6709%n\u500b\u4eba\u52a0\u5165\u4e86\u672c\u6b21\u7fa4\u7d44\u901a\u8a71\u3002\u60a8\u8981\u52a0\u5165\u901a\u8a71\u55ce\uff1f",
          "groupcall.chat.confirm.popup.join.one":
            "\u76ee\u524d\u6709%n\u500b\u4eba\u52a0\u5165\u4e86\u672c\u6b21\u7fa4\u7d44\u901a\u8a71\u3002\u60a8\u8981\u52a0\u5165\u901a\u8a71\u55ce\uff1f",
          "groupcall.chat.confirm.popup.join.other":
            "\u76ee\u524d\u6709%n\u500b\u4eba\u52a0\u5165\u4e86\u672c\u6b21\u7fa4\u7d44\u901a\u8a71\u3002\u60a8\u8981\u52a0\u5165\u901a\u8a71\u55ce\uff1f",
          "groupcall.chat.confirm.popup.join.two":
            "\u76ee\u524d\u6709%n\u500b\u4eba\u52a0\u5165\u4e86\u672c\u6b21\u7fa4\u7d44\u901a\u8a71\u3002\u60a8\u8981\u52a0\u5165\u901a\u8a71\u55ce\uff1f",
          "groupcall.chat.confirm.popup.join.zero":
            "\u76ee\u524d\u6709%n\u500b\u4eba\u52a0\u5165\u4e86\u672c\u6b21\u7fa4\u7d44\u901a\u8a71\u3002\u60a8\u8981\u52a0\u5165\u901a\u8a71\u55ce\uff1f",
          "groupcall.chat.confirm.popup.start":
            "\u76ee\u524d\u6c92\u6709\u9032\u884c\u4e2d\u7684\u7fa4\u7d44\u901a\u8a71\u3002\n\u60a8\u8981\u958b\u59cb\u901a\u8a71\u55ce\uff1f",
          "groupcall.chat.confirm.popup.start.btn.video":
            "\u958b\u59cb\u8996\u8a0a\u901a\u8a71",
          "groupcall.chat.confirm.popup.start.btn.voice":
            "\u78ba\u5b9a\u8981\u958b\u59cb\u7fa4\u7d44\u8a9e\u97f3\u901a\u8a71\u55ce\uff1f",
          "groupcall.chat.layer.join.btn": "\u52a0\u5165",
          "groupcall.chat.layer.numofmembers.few":
            '<![CDATA[<font color=\\"#527fdc\\">%n\u500b\u4eba</font>\u5728\u901a\u8a71\u4e2d\u3002]]>',
          "groupcall.chat.layer.numofmembers.many":
            '<![CDATA[<font color=\\"#527fdc\\">%n\u500b\u4eba</font>\u5728\u901a\u8a71\u4e2d\u3002]]>',
          "groupcall.chat.layer.numofmembers.one":
            '<![CDATA[<font color=\\"#527fdc\\">%n\u500b\u4eba</font>\u5728\u901a\u8a71\u4e2d\u3002]]>',
          "groupcall.chat.layer.numofmembers.other":
            '<![CDATA[<font color=\\"#527fdc\\">%n\u500b\u4eba</font>\u5728\u901a\u8a71\u4e2d\u3002]]>',
          "groupcall.chat.layer.numofmembers.two":
            '<![CDATA[<font color=\\"#527fdc\\">%n\u500b\u4eba</font>\u5728\u901a\u8a71\u4e2d\u3002]]>',
          "groupcall.chat.layer.numofmembers.zero":
            '<![CDATA[<font color=\\"#527fdc\\">%n\u500b\u4eba</font>\u5728\u901a\u8a71\u4e2d\u3002]]>',
          "groupcall.chat.layer.start.btn": "\u958b\u59cb",
          "groupcall.chat.layer.start.dscr":
            "\u958b\u59cb\u7fa4\u7d44\u901a\u8a71\u3002",
          "groupcall.chat.layer.start.msg":
            "%1\u958b\u59cb\u4e86\u7fa4\u7d44\u901a\u8a71\u3002",
          "groupcall.chat.message.end":
            "\u7fa4\u7d44\u901a\u8a71\u5df2\u7d50\u675f\u3002",
          "groupcall.chat.message.invite":
            "\u60a8\u5df2\u88ab\u9080\u8acb\u81f3\u6b64\u7fa4\u7d44\u901a\u8a71\uff1a\n%1",
          "groupcall.chat.message.start":
            "\u7fa4\u7d44\u901a\u8a71\u5df2\u958b\u59cb\u3002",
          "groupcall.chatlink.desc.userisinvitedtojoinmeeting":
            "\u5728\u6b64\u9080\u8acb\u60a8\u52a0\u5165LINE\u6703\u8b70\u5ba4\u300c%1\u300d\uff0c\u8acb\u900f\u904e\u4e0b\u65b9\u9023\u7d50\u52a0\u5165\u901a\u8a71\uff01\n%2",
          "groupcall.chatlink.popupdesc.invalidlink":
            "\u6b64\u9023\u7d50\u7121\u6548",
          "groupcall.chatstab.tooltip.startcallwithoutchat":
            "\u900f\u904e\u9023\u7d50\u4e00\u9375\u76f4\u901a\uff0c\u5728LINE\u9f4a\u805a\u4e00\u5802\uff01",
          "groupcall.createchat.button.createmeeting": "\u6703\u8b70\u5ba4",
          "groupcall.deletemeeting.popupdesc.delete": "\u522a\u9664",
          "groupcall.deletemeeting.popupdesc.deletemeeting":
            "\u78ba\u5b9a\u8981\u522a\u9664\u6b64\u6703\u8b70\u5ba4\u55ce\uff1f",
          "groupcall.editmeetingname.popuptitle.edit":
            "\u7de8\u8f2f\u6703\u8b70\u5ba4\u540d\u7a31",
          "groupcall.groupcallpopup.desc.callparticipantlimitexceeded":
            "\u7fa4\u7d44\u901a\u8a71\u7684\u4e0a\u9650\u70ba%1\u4eba",
          "groupcall.groupcallsettings.title.participants": "\u6210\u54e1",
          "groupcall.groupcallsettings.toast.userwasremoved":
            "\u5df2\u79fb\u9664\u300c%1\u300d\u3002",
          "groupcall.invite.index.not.join": "\u6b63\u5728\u9080\u8acb",
          "groupcall.invite.selectall": "\u9078\u64c7\u5168\u90e8",
          "groupcall.invite.title": "\u9080\u8acb",
          "groupcall.kickout.popup":
            "\u56e0\u9023\u7dda\u903e\u6642\uff0c\u5df2\u7d50\u675f\u901a\u8a71\u3002",
          "groupcall.leavemeeting.popupbutton.leave": "\u9000\u51fa",
          "groupcall.leavemeeting.popupdesc.historynolongershown":
            "\u78ba\u5b9a\u8981\u9000\u51fa\u6703\u8b70\u5ba4\u55ce\uff1f\u9000\u51fa\u5f8c\u5c07\u7121\u6cd5\u518d\u700f\u89bd\u6703\u8b70\u5ba4\u7684\u6210\u54e1\u540d\u55ae\u53ca\u804a\u5929\u8a18\u9304\u3002",
          "groupcall.meetingintroguide.button.start":
            "\u5efa\u7acb\u6703\u8b70\u5ba4",
          "groupcall.meetingintroguide.desc.disclaimers":
            "\u6703\u8b70\u5ba4\u7684\u9023\u7d50\u81ea\u5efa\u7acb\u65e5\u671f\u8d7790\u5929\u5167\u6709\u6548\u3002\u5728\u6703\u8b70\u5ba4\u4e2d\u901a\u8a71\u6216\u50b3\u8a0a\u606f\u6642\uff0c\u60a8\u5728LINE\u4e0a\u8a2d\u5b9a\u7684\u59d3\u540d\u53ca\u500b\u4eba\u5716\u7247\u5c07\u6703\u5411\u6210\u54e1\u516c\u958b\u3002",
          "groupcall.meetingintroguide.desc.disclaimersjp":
            "\u6703\u8b70\u5ba4\u7684\u9023\u7d50\u81ea\u5efa\u7acb\u65e5\u671f\u8d7790\u5929\u5167\u6709\u6548\u3002\u5728\u6703\u8b70\u5ba4\u4e2d\u901a\u8a71\u6216\u50b3\u8a0a\u606f\u6642\uff0c\u60a8\u5728LINE\u4e0a\u8a2d\u5b9a\u7684\u59d3\u540d\u53ca\u500b\u4eba\u5716\u7247\u5c07\u6703\u5411\u6210\u54e1\u516c\u958b\u3002\uff08\u203b\u672a\u6210\u5e74\u8005\u7121\u6cd5\u4f7f\u7528\u672c\u529f\u80fd\uff09",
          "groupcall.meetingintroguide.desc.sharelinktostart":
            "\u5efa\u7acb\u9023\u7d50\u518d\u5206\u4eab\uff0c\u547c\u670b\u5f15\u4f34\u8d85\u7c21\u55ae\uff01\u4e0d\u662f\u597d\u53cb\u4e5f\u80fd\u7dda\u4e0a\u6703\u8ac7\uff01",
          "groupcall.meetingintroguide.header.connect":
            "\u900f\u904e\u9023\u7d50\u4e00\u9375\u76f4\u901a\n\u5728LINE\u9f4a\u805a\u4e00\u5802",
          "groupcall.meetingintroguide.title.meetings": "\u6703\u8b70\u5ba4",
          "groupcall.meetingnameedit.popupbutton.save": "\u5132\u5b58",
          "groupcall.meetingparticipantlist.button.remove": "\u79fb\u9664",
          "groupcall.meetingparticipants.button.next": "\u4e0b\u4e00\u6b65",
          "groupcall.meetingparticipants.placeholder.searchuser":
            "\u5229\u7528\u540d\u7a31\u641c\u5c0b",
          "groupcall.meetingparticipants.title.reportuser": "\u6aa2\u8209",
          "groupcall.meetings.button.copymeetinglink":
            "\u8907\u88fd\u9023\u7d50",
          "groupcall.meetings.button.createmeeting":
            "\u5efa\u7acb\u6703\u8b70\u5ba4",
          "groupcall.meetings.button.shareinvite": "\u9080\u8acb",
          "groupcall.meetings.button.startmeeting": "\u958b\u59cb",
          "groupcall.meetings.desc.createdjustnow": "\u525b\u525b",
          "groupcall.meetings.desc.usersmeeting": "%1\u7684\u6703\u8b70\u5ba4",
          "groupcall.meetings.popup.policyblock":
            "\u7531\u65bc\u9055\u53cd\u670d\u52d9\u689d\u6b3e\uff0c\u6b64\u5e33\u865f\u7121\u6cd5\u4f7f\u7528LINE\u6703\u8b70\u5ba4\u529f\u80fd\u3002",
          "groupcall.meetings.popupdesc.networkerror":
            "\u767c\u751f\u66ab\u6642\u6027\u932f\u8aa4\uff0c\u7121\u6cd5\u8b80\u53d6\u8cc7\u6599\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "groupcall.meetings.toast.meetingcreated":
            "\u5df2\u5efa\u7acb\u6703\u8b70\u5ba4\u3002",
          "groupcall.meetingscreen.tooltip.invitemorepeople":
            "\u9080\u8acb\u66f4\u591a\u4eba\u52a0\u5165\u6703\u8b70\u5427\uff01",
          "groupcall.participantlist.desc.cameraturnedoff":
            "\u672a\u958b\u93e1\u982d",
          "groupcall.participantlist.desc.gridview":
            "\u5207\u63db\u81f3\u683c\u72c0\u6aa2\u8996",
          "groupcall.participantlist.desc.muted":
            "\u672a\u958b\u9ea5\u514b\u98a8",
          "groupcall.participantlist.desc.participantview":
            "\u5c07\u6b64\u7528\u6236\u56fa\u5b9a\u5728\u7126\u9ede\u756b\u9762\u4e0a",
          "groupcall.participantlist.placeholder.searchbyname":
            "\u4ee5\u59d3\u540d\u641c\u5c0b",
          "groupcall.previewscreen.desc.nameprofilephotoshown":
            "\u60a8\u5728LINE\u4e0a\u8a2d\u5b9a\u7684\u59d3\u540d\u53ca\u500b\u4eba\u5716\u7247\u5c07\u6703\u5411\u6210\u54e1\u516c\u958b\u3002",
          "groupcall.removefrommeeting.popupbutton.remove": "\u79fb\u9664",
          "groupcall.removefrommeeting.popupdesc.removeuser":
            "\u78ba\u5b9a\u8981\u5c07\u300c%1\u300d\u7531\u6703\u8b70\u5ba4\u4e2d\u79fb\u9664\u55ce\uff1f",
          "groupcall.removeuser.popupdesc.temporaryerror":
            "\u767c\u751f\u66ab\u6642\u6027\u932f\u8aa4\uff0c\u7121\u6cd5\u79fb\u9664\u5c0d\u65b9\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "groupcall.report.button.content":
            "\u4e0d\u9069\u7576\u7684\u8a00\u884c\u6216\u5167\u5bb9",
          "groupcall.report.button.harrassment":
            "\u542b\u8272\u60c5\u7325\u893b\u7b49\u5167\u5bb9",
          "groupcall.report.button.impersonation": "\u5047\u5192\u4ed6\u4eba",
          "groupcall.report.button.impersonation.inquirypopup":
            "\u70ba\u4e86\u8a73\u7d30\u8abf\u67e5\u5047\u5192\u4ed6\u4eba\u7684\u72c0\u6cc1\uff0c\u8acb\u524d\u5f80\u300c\u8207\u6211\u5011\u806f\u7d61\u300d\u63d0\u4f9b\u76f8\u95dc\u8cc7\u8a0a\uff0c\u4ee5\u5354\u52a9\u6211\u5011\u9032\u884c\u8abf\u67e5\u3002",
          "groupcall.report.button.impersonation.inquirypopup.decline":
            "\u7565\u904e",
          "groupcall.report.button.impersonation.inquirypopup.preceed":
            "\u524d\u5f80",
          "groupcall.report.button.other": "\u5176\u4ed6",
          "groupcall.report.button.report": "\u6aa2\u8209",
          "groupcall.report.button.scam": "\u8a50\u9a19",
          "groupcall.report.button.spam":
            "\u6feb\u767c\u5783\u573e\uff0f\u5ee3\u544a\u8a0a\u606f",
          "groupcall.report.desc.reportreason":
            "\u4e00\u7d93\u6aa2\u8209\uff0c\u7cfb\u7d71\u5c07\u81ea\u52d5\u9001\u51fa\u8a72\u6210\u54e1\u7684\u8cc7\u8a0a\u53ca\u76f8\u95dc\u87a2\u5e55\u622a\u5716\u4ee5\u5354\u52a9\u78ba\u8a8d\u6aa2\u8209\u5167\u5bb9\u3002",
          "groupcall.report.popupbutton.donotremove":
            "\u4e0d\u8981\u79fb\u9664",
          "groupcall.report.popupbutton.remove": "\u79fb\u9664",
          "groupcall.report.popupdesc.removeuser":
            "\u5df2\u6aa2\u8209\u3002\n\u8981\u5c07\u6b64\u6210\u54e1\u7531\u6703\u8b70\u5ba4\u4e2d\u79fb\u9664\u55ce\uff1f",
          "groupcall.report.subtitle.reportreason":
            "\u8acb\u9078\u64c7\u6aa2\u8209\u7406\u7531\u3002",
          "groupcall.screenshare.receiver.failreceive":
            "\u6b63\u5728\u8f09\u5165\u87a2\u5e55\u756b\u9762\u2026",
          "groupcall.screenshare.receiver.senderdesc":
            "%1\u6b63\u5728\u5206\u4eab\u87a2\u5e55\u756b\u9762\u3002",
          "groupcall.screenshare.receiver.viewscreen":
            "\u8fd4\u56de\u5206\u4eab\u4e2d\u7684\u87a2\u5e55\u756b\u9762",
          "groupcall.screenshare.sender.btn.stop": "\u505c\u6b62\u5206\u4eab",
          "groupcall.screenshare.sender.desc":
            "\u6b63\u5728\u5206\u4eab\u81ea\u5df1\u7684\u87a2\u5e55\u756b\u9762\u3002",
          "groupcall.settings.menu.report": "\u6aa2\u8209",
          "groupcall.startmeeting.popupdesc.userexceededlimit":
            "\u6700\u591a\u53ef\u5efa\u7acb30\u500b\u6703\u8b70\u5ba4\uff0c\u8acb\u522a\u9664\u4e0d\u9700\u8981\u7684\u6703\u8b70\u5ba4\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "groupcall.tempchat.popupdesc.cantinvitethroughchat":
            "\u82e5\u8981\u9080\u8acb\u5176\u4ed6\u7528\u6236\u52a0\u5165\uff0c\u8acb\u8907\u88fd\u6703\u8b70\u5ba4\u7684\u9023\u7d50\u4e26\u5206\u4eab\u7d66\u5c0d\u65b9\u3002",
          "groupcall.title": "\u7fa4\u7d44\u901a\u8a71",
          "groupcall.toast.deviceerror.camera":
            "\u5176\u4ed6\u61c9\u7528\u7a0b\u5f0f\u6b63\u5728\u4f7f\u7528\u6b64\u8996\u8a0a\u88dd\u7f6e\uff0c\u8acb\u9078\u64c7\u5176\u4ed6\u8996\u8a0a\u88dd\u7f6e\u3002",
          "groupcall.toast.newdevice.camera":
            "\u5207\u63db\u81f3\u65b0\u76f8\u6a5f\u300c%1\u300d",
          "groupcall.toast.newdevice.mic":
            "\u5207\u63db\u81f3\u65b0\u9ea5\u514b\u98a8\u300c%1\u300d",
          "groupcall.toast.newdevice.speaker":
            "\u5207\u63db\u81f3\u65b0\u64f4\u97f3\u5668\u300c%1\u300d",
          "groupcall.verifyage.desc.verifyageinmobileversion":
            "\u8acb\u5148\u8a8d\u8b49\u60a8\u7684\u5e74\u9f61\uff0c\u624d\u80fd\u4f7f\u7528\u6b64\u529f\u80fd\u3002\n\u8acb\u958b\u555fLINE\u61c9\u7528\u7a0b\u5f0f\uff0c\u4e26\u4f9d\u5e8f\u9ede\u9078\u300c\u8a2d\u5b9a\u300d\uff1e\u300c\u5e74\u9f61\u78ba\u8a8d\u300d\u9032\u884c\u8a8d\u8b49\u3002",
          "groupcall.video.alert.member.join":
            "%1\u5df2\u52a0\u5165\u7fa4\u7d44\u901a\u8a71\u3002",
          "groupcall.video.alert.member.leave":
            "%1\u5df2\u9000\u51fa\u7fa4\u7d44\u901a\u8a71\u3002",
          "groupcall.video.alert.streaming.off.member":
            "\u60a8\u5df2\u95dc\u9589\u6b64\u7528\u6236\u7684\u8996\u8a0a\u3002\n\u518d\u6b21\u9ede\u64ca\u5716\u6a19\u5373\u53ef\u958b\u555f\u8996\u8a0a\u756b\u9762\u3002",
          "groupcall.video.chat.error.without.camera.body":
            "\u5075\u6e2c\u4e0d\u5230\u93e1\u982d\u3002\u8981\u4ee5\u8a9e\u97f3\u65b9\u5f0f\u52a0\u5165\u7fa4\u7d44\u901a\u8a71\u55ce\uff1f",
          "groupcall.video.chat.error.without.camera.btn.video":
            "\u52a0\u5165\u8996\u8a0a\u901a\u8a71",
          "groupcall.video.chat.error.without.camera.btn.voice":
            "\u52a0\u5165\u8a9e\u97f3\u901a\u8a71",
          "groupcall.video.chat.layer.start.dscr":
            "\u958b\u59cb\u7fa4\u7d44\u8996\u8a0a\u901a\u8a71\u3002",
          "groupcall.video.chat.layer.start.msg":
            "%1\u958b\u59cb\u4e86\u7fa4\u7d44\u8996\u8a0a\u901a\u8a71\u3002",
          "groupcall.video.chat.layer.start.shortmsg":
            "\u8996\u8a0a\u901a\u8a71\u5df2\u958b\u59cb",
          "groupcall.video.chat.message.invite":
            "\u60a8\u5df2\u88ab\u9080\u8acb\u81f3\u6b64\u7fa4\u7d44\u7684\u8996\u8a0a\u901a\u8a71\uff1a\n\u300c%1\u300d",
          "groupcall.video.chat.message.start":
            "\u7fa4\u7d44\u8996\u8a0a\u901a\u8a71\u5df2\u958b\u59cb\u3002",
          "groupcall.video.desc.guide.tryCall":
            "\u73fe\u5728\u4f7f\u7528\u96fb\u8166\u7248LINE\u4e5f\u53ef\u4ee5\u9032\u884c\u7fa4\u7d44\u8996\u8a0a\u901a\u8a71\u4e86\u3002 ",
          "groupcall.video.error.change.to.voice":
            "\u7531\u65bc\u7db2\u8def\u9023\u7dda\u4e0d\u7a69\u6216\u901a\u8a71\u6d41\u91cf\u904e\u5927\uff0c\u5df2\u8b8a\u66f4\u70ba\u8a9e\u97f3\u901a\u8a71\u3002",
          "groupcall.video.error.not.video.member":
            "\u6b64\u7528\u6236\u662f\u4ee5\u8a9e\u97f3\u65b9\u5f0f\u52a0\u5165\u901a\u8a71\uff0c\u56e0\u6b64\u7121\u6cd5\u986f\u793a\u5176\u8996\u8a0a\u5f71\u50cf\u3002",
          "groupcall.video.fullview.streaming.fail.body":
            "\u7121\u6cd5\u8b80\u53d6%1\u7684\u5f71\u7247\u3002\n\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "groupcall.video.fullview.streaming.fail.button": "\u91cd\u8a66",
          "groupcall.video.fullview.streaming.off.body":
            "\u60a8\u5df2\u95dc\u9589%1\u7684\u5f71\u7247\u3002\n\u518d\u6b21\u958b\u555f\u5373\u53ef\u89c0\u770b\u5f71\u7247\u3002",
          "groupcall.video.menu.streaming.off": "\u95dc\u9589\u8996\u8a0a",
          "groupcall.video.menu.streaming.on": "\u958b\u555f\u8996\u8a0a",
          "groupcall.video.title": "\u7fa4\u7d44\u8996\u8a0a\u901a\u8a71",
          "groupcall.video.toast.cameraoff":
            "\u93e1\u982d\u548c\u300c\u7279\u6548\u300d\u8996\u7a97\u90fd\u5df2\u95dc\u9589\u3002",
          "groupcall.video.tooltip.focusview":
            "\u5207\u63db\u81f3\u7126\u9ede\u6aa2\u8996",
          "groupcall.video.tooltip.gridview":
            "\u5207\u63db\u81f3\u683c\u72c0\u6aa2\u8996",
          "groupcall.video.tooltip.profilelist": "\u6aa2\u8996\u6210\u54e1",
          "groupcall.video.tooltip.videolayout":
            "\u8b8a\u66f4\u6aa2\u8996\u6a21\u5f0f",
          "groupcall.viewmode.desc.focusviewcenter":
            "\u7126\u9ede\u6aa2\u8996\uff08\u4e2d\u9593\uff09",
          "groupcall.viewmode.desc.focusviewleft":
            "\u7126\u9ede\u6aa2\u8996\uff08\u9760\u5de6\uff09",
          "groupcall.viewmode.desc.focusviewright":
            "\u7126\u9ede\u6aa2\u8996\uff08\u9760\u53f3\uff09",
          "groupcall.viewmode.desc.gridview": "\u683c\u72c0\u986f\u793a",
          "groupcall.voice.chat.confirm.popup.join":
            "\u6709\u9032\u884c\u4e2d\u7684\u7fa4\u7d44\u8a9e\u97f3\u901a\u8a71\uff0c\u8981\u52a0\u5165\u55ce\uff1f",
          "groupcall.voice.chat.layer.start.dscr":
            "\u958b\u59cb\u7fa4\u7d44\u8a9e\u97f3\u901a\u8a71\u3002",
          "groupcall.voice.chat.layer.start.msg":
            "%1\u958b\u59cb\u4e86\u7fa4\u7d44\u8a9e\u97f3\u901a\u8a71\u3002",
          "groupcall.voice.chat.layer.start.shortmsg":
            "\u8a9e\u97f3\u901a\u8a71\u5df2\u958b\u59cb",
          "groupcall.voice.chat.message.invite":
            "\u60a8\u5df2\u88ab\u9080\u8acb\u81f3\u6b64\u7fa4\u7d44\u7684\u8a9e\u97f3\u901a\u8a71\uff1a\n\u300c%1\u300d",
          "groupcall.voice.chat.message.start":
            "\u7fa4\u7d44\u8a9e\u97f3\u901a\u8a71\u5df2\u958b\u59cb\u3002 ",
          "groupcall.voice.title": "\u7fa4\u7d44\u8a9e\u97f3\u901a\u8a71",
          "groupcall.watchtogethercall.popupbutton.start": "\u958b\u59cb",
          "groupcall.watchtogethercall.popupdesc.startwatchtogetherforeveryone":
            "\u958b\u59cb\u8207\u5176\u4ed6\u4eba\u5171\u8cde\u9019\u90e8\u5f71\u7247\u55ce\uff1f",
          "groupcall.watchtogethercall.toast.currentlyinsession":
            "%1\u6b63\u5728\u5206\u4eab\u87a2\u5e55\u756b\u9762\u3002",
          "groupcall.watchtogethercall.toast.userendedwatchtogether":
            "%1\u5df2\u505c\u6b62\u5206\u4eab\u87a2\u5e55\u756b\u9762\u3002",
          "groupcall.watchtogethercall.toast.userstartedwatchtogether":
            "%1\u5df2\u958b\u59cb\u5206\u4eab\u87a2\u5e55\u756b\u9762\u3002",
          "groupcall.watchtogethermenu.button.screenshare":
            "\u81ea\u5df1\u7684\u87a2\u5e55\u756b\u9762",
          "groupcall.watchtogethermenu.button.youtube": "YouTube",
          "groupcall.watchtogethermenu.desc.policy":
            "\u96b1\u79c1\u6b0a\u653f\u7b56",
          "groupcall.watchtogethermenu.desc.searchonyoutube":
            "\u641c\u5c0bYouTube\u9023\u7d50\u6216\u95dc\u9375\u5b57",
          "groupcall.watchtogethermenu.desc.terms": "\u670d\u52d9\u689d\u6b3e",
          "groupcall.youtube.edge.popup.btn.install": "\u7e7c\u7e8c",
          "groupcall.youtube.edge.popup.desc":
            "\u8acb\u5148\u4e0b\u8f09\u4e26\u5b89\u88dd\uff08\u4ee5Chromium\u70ba\u57fa\u790e\u7684\uff09Microsoft Edge\u700f\u89bd\u5668\uff0c\u624d\u80fd\u5206\u4eabYouTube\u5f71\u7247\u3002\u60a8\u8981\u524d\u5f80\u4e0b\u8f09\u9801\u9762\u55ce\uff1f",
          "groupcall.youtube.endduetoerror":
            "\u767c\u751f\u66ab\u6642\u6027\u932f\u8aa4\uff0c\u5df2\u7d50\u675f\u5206\u4eabYouTube\u5f71\u7247\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "groupcall.youtube.error.reinstall":
            "\u767c\u751f\u66ab\u6642\u6027\u932f\u8aa4\u800c\u7121\u6cd5\u64ad\u653e\u5f71\u7247\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002\u82e5\u6301\u7e8c\u767c\u751f\u932f\u8aa4\uff0c\u8acb\u91cd\u65b0\u5b89\u88dd\u700f\u89bd\u5668\u3002",
          "groupcall.youtube.paste": "\u5206\u4eabYouTube\u5f71\u7247",
          "groupcall.youtube.paste.btn.play": "\u64ad\u653e",
          "groupcall.youtube.paste.btn.search": "\u9810\u89bd",
          "groupcall.youtube.paste.desc":
            "\u627e\u5f71\u7247\u548c\u5176\u4ed6\u4eba\u5171\u8cde\u5427\u3002\uff08\u5efa\u8b70\u4f7f\u7528\u8033\u6a5f\u3002\uff09",
          "groupcall.youtube.paste.noresult":
            "\u7121\u6cd5\u986f\u793a\u5f71\u7247\uff0c\u8acb\u78ba\u8a8d\u9023\u7d50\u7121\u8aa4\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "groupcall.youtube.paste.startnewone.popup.btn.play": "\u6539\u64ad",
          "groupcall.youtube.paste.startnewone.popup.desc":
            "\u78ba\u5b9a\u8981\u4e2d\u65b7\u4e26\u6539\u64ad\u5176\u4ed6\u5f71\u7247\uff1f",
          "groupcall.youtube.paste.toast.currentlyinsession":
            "%1\u6b63\u5728\u5206\u4eabYouTube\u5f71\u7247\u3002",
          "groupcall.youtube.paste.toast.error":
            "\u767c\u751f\u66ab\u6642\u6027\u932f\u8aa4\uff0c\u7121\u6cd5\u5206\u4eab\u5f71\u7247\u3002",
          "groupcall.youtube.paste.unknownerror":
            "\u767c\u751f\u66ab\u6642\u6027\u932f\u8aa4\u800c\u7121\u6cd5\u8f09\u5165\u5f71\u7247\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "groupcall.youtube.receiver.newvideo":
            "%1\u6b63\u5728\u6e96\u5099\u53e6\u4e00\u90e8\u5f71\u7247\u3002",
          "groupcall.youtube.receiver.playvideo":
            "\u8fd4\u56de\u5f71\u7247\u756b\u9762",
          "groupcall.youtube.receiver.senderdesc":
            "%1\u6b63\u5728\u64ad\u653e\u5f71\u7247\u3002",
          "groupcall.youtube.receiver.tooltip.mute": "\u95dc\u9589\u97f3\u6548",
          "groupcall.youtube.receiver.tooltip.unmute":
            "\u958b\u555f\u97f3\u6548",
          "groupcall.youtube.receiver.videopaused":
            "%1\u5df2\u66ab\u505c\u64ad\u653e\u5f71\u7247\u3002",
          "groupcall.youtube.sender.btn.stop": "\u505c\u6b62\u5206\u4eab",
          "groupcall.youtube.sender.desc":
            "\u60a8\u6b63\u5728\u5206\u4eab\u5f71\u7247\u3002",
          "groupcall.youtube.stop.popup.btn.confirm":
            "\u505c\u6b62\u5206\u4eab",
          "groupcall.youtube.stop.popup.desc":
            "\u8981\u505c\u6b62\u5206\u4eab\u6b64YouTube\u5f71\u7247\u55ce\uff1f",
          "groupcall.youtube.windows.serveroff.popup.desc":
            "YouTube\u5f71\u7247\u5206\u4eab\u529f\u80fd\u76ee\u524d\u4e0d\u9069\u7528\u65bcWindows\u4f5c\u696d\u7cfb\u7d71",
          "groupchat.dynamic.group.title.invitecanceled.updatename":
            "%1 \u5df2\u53d6\u6d88 %2 \u7684\u7fa4\u7d44\u9080\u8acb\u3002",
          "groupchat.dynamic.group.title.memberinvited.updatename":
            '<![CDATA[%1 \u5df2\u5c07 %2 \u65b0\u589e\u81f3\u7fa4\u7d44\u3002<a href="line://nv/group/settings/groupname/chatId=%3">\u8b8a\u66f4\u7fa4\u7d44\u540d\u7a31</a>]]>',
          "groupchat.dynamic.group.title.memberjoined.updatename":
            '<![CDATA[%1 \u5df2\u52a0\u5165\u7fa4\u7d44\u3002<a href="line://nv/group/settings/groupname/chatId=%2">\u8b8a\u66f4\u7fa4\u7d44\u540d\u7a31</a>]]>',
          "groupchat.dynamic.group.title.memberremoved.updatename":
            "%1 \u5df2\u5c07 %2 \u5f9e\u7fa4\u7d44\u4e2d\u79fb\u9664\u3002",
          "groupchat.linkqr.error.block":
            "\u6b64\u7fa4\u7d44\u76ee\u524d\u4e0d\u958b\u653e\u4f7f\u7528\u7db2\u5740\uff0f\u884c\u52d5\u689d\u78bc\u7684\u9080\u8acb\u3002",
          "groupchat.linkqr.error.renew":
            "\u4e0d\u5b58\u5728\u7684\u7fa4\u7d44\u3002",
          "groupchat.push.invitedtojoingroup":
            "%1\u9080\u8acb\u60a8\u52a0\u5165\u7fa4\u7d44\u3002",
          "groupchat.push.someonejoinsgroup":
            "%1\u5df2\u52a0\u5165\u7fa4\u7d44\u3002",
          "groupchat.systemmsg.allowjoiningvialinkorqr":
            "%1\u5df2\u958b\u555f\u8a2d\u5b9a\uff0c\u4ed6\u4eba\u5c07\u53ef\u900f\u904e\u7fa4\u7d44\u9023\u7d50\u6216\u884c\u52d5\u689d\u78bc\u52a0\u5165\u3002",
          "groupchat.systemmsg.cancelinvite":
            "%1\u5df2\u53d6\u6d88\u9080\u8acb%2\u52a0\u5165\u7fa4\u7d44\u3002",
          "groupchat.systemmsg.cancelinvite.updatename":
            '<![CDATA[%1\u5df2\u53d6\u6d88%2\u7684\u9080\u8acb\u3002\u7fa4\u7d44\u540d\u7a31\u4e0d\u6703\u81ea\u52d5\u8b8a\u66f4\u3002<a href="line://nv/group/settings/groupname/chatId=%3">\u8b8a\u66f4\u7fa4\u7d44\u540d\u7a31</a>]]>',
          "groupchat.systemmsg.changegroupname":
            "%1\u5df2\u5c07\u7fa4\u7d44\u540d\u7a31\u6539\u70ba\u300c%2\u300d\u3002",
          "groupchat.systemmsg.changegroupphoto":
            "%1\u5df2\u8b8a\u66f4\u7fa4\u7d44\u5716\u7247\u3002",
          "groupchat.systemmsg.disablejoiningvialinkorqr":
            "%1\u5df2\u95dc\u9589\u8a2d\u5b9a\uff0c\u4ed6\u4eba\u7121\u6cd5\u900f\u904e\u7fa4\u7d44\u9023\u7d50\u6216\u884c\u52d5\u689d\u78bc\u52a0\u5165\u3002",
          "groupchat.systemmsg.inviteuser":
            "%1\u5df2\u9080\u8acb%2\u52a0\u5165\u7fa4\u7d44\uff0c\u7b49\u5c0d\u65b9\u52a0\u5165\u518d\u4e00\u8d77\u804a\u5929\u5427\uff01",
          "groupchat.systemmsg.inviteuser1n":
            "%1\u5df2\u65b0\u589e%2\u81f3\u7fa4\u7d44\u3002",
          "groupchat.systemmsg.inviteuser1n.atcreation.updatename":
            '<![CDATA[%1\u5df2\u65b0\u589e%2\u81f3\u7fa4\u7d44\u3002<a href="line://nv/group/settings/groupname/chatId=%3">\u8b8a\u66f4\u7fa4\u7d44\u540d\u7a31</a>]]>',
          "groupchat.systemmsg.inviteuser1n.updatename":
            '<![CDATA[%1\u5df2\u65b0\u589e%2\u81f3\u7fa4\u7d44\u3002\u7fa4\u7d44\u540d\u7a31\u4e0d\u6703\u81ea\u52d5\u8b8a\u66f4\u3002<a href="line://nv/group/settings/groupname/chatId=%3">\u8b8a\u66f4\u7fa4\u7d44\u540d\u7a31</a>]]>',
          "groupchat.systemmsg.kickoutuser":
            "%1\u5df2\u5c07%2\u9000\u51fa\u7fa4\u7d44\u3002",
          "groupchat.systemmsg.kickoutuser.updatename":
            '<![CDATA[%1\u5df2\u5c07%2\u7531\u7fa4\u7d44\u4e2d\u79fb\u9664\u3002\u7fa4\u7d44\u540d\u7a31\u4e0d\u6703\u81ea\u52d5\u8b8a\u66f4\u3002<a href="line://nv/group/settings/groupname/chatId=%3">\u8b8a\u66f4\u7fa4\u7d44\u540d\u7a31</a>]]>',
          "groupchat.systemmsg.userjoin":
            "%1\u5df2\u52a0\u5165\u7fa4\u7d44\u3002",
          "groupchat.systemmsg.userjoin.updatename":
            "%1\u5df2\u52a0\u5165\u7fa4\u7d44\u3002",
          "groupchat.systemmsg.userleave":
            "%1\u5df2\u9000\u51fa\u7fa4\u7d44\u3002",
          "groupchat.systemmsg.userleave.updatename":
            '<![CDATA[%1\u5df2\u96e2\u958b\u7fa4\u7d44\u3002\u7fa4\u7d44\u540d\u7a31\u4e0d\u6703\u81ea\u52d5\u8b8a\u66f4\u3002<a href="line://nv/group/settings/groupname/chatId=%2">\u8b8a\u66f4\u7fa4\u7d44\u540d\u7a31</a>]]>',
          "groupchat.systemmsg.youareinvited":
            "%1\u9080\u8acb\u60a8\u52a0\u5165\u7fa4\u7d44\u3002",
          "grouphome.album.alert.inprogress":
            "\u7121\u6cd5\u5728\u4e0a\u50b3\u9805\u76ee\u6642\u65b0\u589e\u9805\u76ee\u6216\u522a\u9664\u76f8\u7c3f\u3002\n\u8acb\u7a0d\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "grouphome.album.alert.reupload":
            "\u662f\u5426\u8981\u91cd\u65b0\u4e0a\u50b3\u9805\u76ee\uff1f",
          "grouphome.album.alert.save.failed":
            "\u7121\u6cd5\u5132\u5b58\u9805\u76ee\u3002",
          "grouphome.album.alert.stopUpload": "\u53d6\u6d88\u65b0\u589e",
          "grouphome.album.alert.unregistereduser":
            "\u60a8\u7121\u6cd5\u8207\u5df2\u7d93\u522a\u9664\u5e33\u865f\u7528\u6236\u5171\u7528\u76f8\u7c3f\u3002",
          "grouphome.album.label.reupload": "\u7e7c\u7e8c\u65b0\u589e",
          "grouphome.albumdetail.addPhoto": "\u65b0\u589e\u7167\u7247",
          "grouphome.albumdetail.alert.changeAlbum":
            "\u522a\u9664\u76f8\u7c3f\u5f8c\uff0c \u76f8\u7c3f\u5167\u7684\u7167\u7247\u5c07\u5168\u6578\u522a\u9664\uff0c\n\u4e14\u7121\u6cd5\u6551\u56de\u3002 \n\u60a8\u78ba\u5b9a\u8981\u522a\u9664\u9019\u672c\u76f8\u7c3f\u55ce\uff1f",
          "grouphome.albumdetail.changeName":
            "\u4fee\u6539\u76f8\u7c3f\u540d\u7a31",
          "grouphome.albumdetail.delete": "\u522a\u9664\u76f8\u7c3f",
          "grouphome.albumdetail.empty.desc":
            "\u4e00\u8d77\u6e21\u904e\u7684\u6109\u5feb\u6642\u523b\u3001 \u8207\u597d\u53cb\u5171\u5275\u7684\u73cd\u8cb4\u56de\u61b6\u5168\u90fd\u4fdd\u7559\u5728\u76f8\u7c3f\u5167\u5427\uff01",
          "grouphome.albumdetail.empty.title":
            "\u5c1a\u7121\u4efb\u4f55\u9805\u76ee",
          "grouphome.albumdetail.error":
            "\u8cc7\u6599\u7121\u6cd5\u4e0b\u8f09\u2026\u3002\n\u8acb\u518d\u8a66\u4e00\u6b21\uff01",
          "grouphome.albumdetail.saveComplete": "\u5df2\u5132\u5b58\u3002",
          "grouphome.albumdetail.saveall": "\u5132\u5b58\u5168\u90e8",
          "grouphome.albumdetail.savingPhoto":
            "\u6b63\u5728\u5132\u5b58\u9805\u76ee\u2026",
          "grouphome.albumdetail.selectCount.plurals.few":
            "\u9078\u64c7\u4e86%n\u5f35",
          "grouphome.albumdetail.selectCount.plurals.many":
            "\u9078\u64c7\u4e86%n\u5f35",
          "grouphome.albumdetail.selectCount.plurals.one":
            "\u9078\u64c7\u4e86%n\u5f35",
          "grouphome.albumdetail.selectCount.plurals.other":
            "\u9078\u64c7\u4e86%n\u5f35",
          "grouphome.albumdetail.selectCount.plurals.two":
            "\u9078\u64c7\u4e86%n\u5f35",
          "grouphome.albumdetail.selectCount.plurals.zero":
            "\u9078\u64c7\u4e86%n\u5f35",
          "grouphome.albumdetail.title.changeAlbum":
            "\u4fee\u6539\u76f8\u7c3f\u540d\u7a31",
          "grouphome.albumdetail.uploader": "By %1",
          "grouphome.alert.addphoto":
            "\u78ba\u5b9a\u8981\u53d6\u6d88\u65b0\u589e\u55ce\uff1f\n\u5df2\u65b0\u589e\u7684\u9805\u76ee\u5c07\u4e0d\u6703\u88ab\u5132\u5b58\u3002",
          "grouphome.alert.albumLimitCount":
            "\u7121\u6cd5\u5efa\u7acb\u66f4\u591a\u65b0\u76f8\u7c3f\u3002\n\u6700\u591a\u50c5\u80fd\u5efa\u7acb%n\u672c\u76f8\u7c3f\u3002",
          "grouphome.alert.alreadyDeleteAlbum":
            "\u672c\u76f8\u7c3f\u5df2\u88ab\u522a\u9664\u3002",
          "grouphome.alert.alreadyDeletePhoto":
            "\u6b64\u9805\u76ee\u5df2\u88ab\u522a\u9664",
          "grouphome.alert.makealbum":
            "\u5373\u5c07\u6368\u68c4\u6240\u6709\u7de8\u8f2f\u5167\u5bb9\u3002\u78ba\u5b9a\u4e0d\u5efa\u7acb\u76f8\u7c3f\uff0c\u76f4\u63a5\u96e2\u958b\u6b64\u756b\u9762\u55ce\uff1f",
          "grouphome.alert.photoLimitCount":
            "\u5df2\u7121\u6cd5\u6dfb\u52a0\u66f4\u591a\u5716\u7247\uff0c\n\u6bcf\u672c\u76f8\u7c3f\u6700\u591a\u53ef\u6dfb\u52a0%1\u5f35\u5716\u7247\u3002",
          "grouphome.label.album": "\u76f8\u7c3f",
          "grouphome.label.album.addPhoto": "\u65b0\u589e\u7167\u7247",
          "grouphome.label.album.changeName":
            "\u4fee\u6539\u76f8\u7c3f\u540d\u7a31",
          "grouphome.label.album.delete": "\u522a\u9664\u76f8\u7c3f",
          "grouphome.label.album.empty":
            "\u9084\u6c92\u6709\u6587\u7ae0\u3002\u9084\u6c92\u6709\u5efa\u7acb\u76f8\u7c3f\u3002",
          "grouphome.label.album.make": "\u5efa\u7acb\u76f8\u7c3f",
          "grouphome.label.albumName": "\u76f8\u7c3f\u540d\u7a31",
          "grouphome.label.post": "\u8a18\u4e8b\u672c",
          "grouphome.label.post.empty":
            "\u5c1a\u672a\u65b0\u589e\u4efb\u4f55\u8a18\u4e8b\u672c\u3002",
          "grouphome.label.showAllPost": "\u6240\u6709\u8a18\u4e8b\u672c",
          "grouphome.label.showUserHome": "\u524d\u5f80%1\u7684\u4e3b\u9801",
          "grouphome.label.showallalbum":
            "\u67e5\u770b\u6240\u6709\u76f8\u7c3f",
          "grouphome.label.writepost": "\u65b0\u589e\u8a18\u4e8b\u672c",
          "grouphome.member.alert.joinGroup":
            "\u60a8\u5df2\u52a0\u5165\u8a72\u7fa4\u7d44",
          "grouphome.member.label.showGroup": "\u67e5\u770b\u7fa4\u7d44",
          "grouphome.post.alert.unregistereduser":
            "\u60a8\u7121\u6cd5\u8207\u5df2\u522a\u9664\u5e33\u865f\u7684\u7528\u6236\u5171\u7528\u8a18\u4e8b\u672c\u3002",
          "gruopchat.dynamic.group.title.memberleft.updatename":
            "%1 \u5df2\u96e2\u958b\u7fa4\u7d44\u3002",
          "hub.menubar.tooltip":
            "LINE\u7cbe\u9078\u670d\u52d9\u5165\u53e3\u901a\u901a\u5728\u9019\u88e1\uff01",
          "hub.menubar.tooltip.renew":
            "LINE HUB\u5168\u65b0\u5716\u793a\uff0c\u638c\u63e1\u6240\u6709LINE\u7cbe\u9078\u5167\u5bb9\uff01",
          "image.viewer.btn.edit.tooltip":
            "\u6b63\u5728\u958b\u555f\u5716\u7247\u7de8\u8f2f\u5668...",
          "image.viewer.btn.minimizesize.tooltip":
            "\u8abf\u6574\u6210\u8996\u7a97\u5927\u5c0f",
          "image.viewer.cancel": "\u53d6\u6d88",
          "image.viewer.copy": "\u8907\u88fd",
          "image.viewer.crop": "\u88c1\u5207\u7167\u7247",
          "image.viewer.download.error":
            "\u7cfb\u7d71\u767c\u751f\u554f\u984c\u3002",
          "image.viewer.loading.error":
            "\u7cfb\u7d71\u66ab\u6642\u767c\u751f\u554f\u984c\uff0c\n\u8acb\u518d\u8a66\u4e00\u6b21\uff01\n",
          "image.viewer.ok": "\u78ba\u5b9a",
          "image.viewer.save": "\u4e0b\u8f09",
          "image.viewer.share.chat": "\u5206\u4eab\u81f3\u804a\u5929\u5ba4",
          "imageEditor.btn.doNotSave": "\u4e0d\u5132\u5b58",
          "imageEditor.msg.onEditing":
            "\u8981\u5c07\u5df2\u7de8\u8f2f\u7684\u5716\u7247\u5132\u5b58\u5230\u60a8\u7684\u96fb\u8166\u55ce\uff1f",
          "imageEditor.msg.onModified":
            "\u6b64\u5716\u7247\u5305\u542b\u672a\u5132\u5b58\u7684\u8b8a\u66f4\u3002",
          "imageEditor.msg.toobig":
            "\u6b64\u5716\u7247\u7684\u89e3\u6790\u5ea6\u592a\u9ad8\uff0c\u56e0\u6b64\u7121\u6cd5\u7de8\u8f2f\u3002",
          "invite.btn.cancel.title": "\u53d6\u6d88",
          "invite.btn.invite.title": "\u78ba\u5b9a",
          "invite.label.create.title": "\u9080\u8acb\u597d\u53cb",
          "invite.label.invitee.title": "\u9080\u8acb",
          "invite.label.nobuddytoselect.title":
            "\u6c92\u6709\u53ef\u4ee5\u9080\u8acb\u7684\u597d\u53cb\u3002",
          "invite.label.nosearchresult.title":
            "\u7121\u6cd5\u627e\u5230\u8a72\u7528\u6236",
          "invite.label.nothing.title":
            "\u60a8\u5c1a\u672a\u9078\u64c7\u4efb\u4f55\u597d\u53cb\u3002",
          "invite.label.person.title.plurals.few": "%n\u4eba",
          "invite.label.person.title.plurals.many": "%n\u4eba",
          "invite.label.person.title.plurals.one": "%n\u4eba",
          "invite.label.person.title.plurals.other": "%n\u4eba",
          "invite.label.person.title.plurals.two": "%n\u4eba",
          "invite.label.person.title.plurals.zero": "%n\u4eba",
          "keep.alert.sendtochat.unsupported.all.other":
            "\u4e0d\u652f\u63f4\u6240\u9078\u6a94\u6848\u7684\u683c\u5f0f\uff0c\u7121\u6cd5\u50b3\u9001\u3002",
          "keep.alert.sendtochat.unsupported.file.multi": "",
          "keep.alert.sendtochat.unsupported.some.other":
            "\u7121\u6cd5\u50b3\u9001%n\u500b\u4e0d\u652f\u63f4\u683c\u5f0f\u7684\u6a94\u6848\uff0c\u8981\u50b3\u9001\u5176\u9918\u7684\u6a94\u6848\u55ce\uff1f",
          "keep.btn.retry": "\u91cd\u8a66",
          "keep.category.all": "\u5168\u90e8",
          "keep.category.files": "\u6a94\u6848",
          "keep.category.links": "\u9023\u7d50",
          "keep.category.memos": "\u5099\u5fd8\u9304",
          "keep.category.newtext": "\u6587\u5b57",
          "keep.category.photos": "\u7167\u7247",
          "keep.category.photosvideos": "\u7167\u7247\u30fb\u5f71\u7247",
          "keep.category.text": "\u6587\u5b57",
          "keep.category.videos": "\u5f71\u7247",
          "keep.common.error.503":
            "Keep\u529f\u80fd\u6b63\u5728\u7dad\u8b77\u4e2d\u3002\n\u7dad\u8b77\u6642\u9593\uff1a\u65e5\u672c\u6642\u9593M\u6708d\u65e5HH:mm\u301cM\u6708d\u65e5HH:mm\uff08UTC+9\uff09",
          "keep.date.format": "yyyy.M.d",
          "keep.desc.PR.title":
            "\u4f55\u7a2e\u60c5\u6cc1\u53ef\u4ee5\u4f7f\u7528Keep\uff1f",
          "keep.desc.alreadyDeleted":
            "\u6b64\u5167\u5bb9\u5df2\u88ab\u522a\u9664\u3002",
          "keep.desc.copied": "\u5df2\u8907\u88fd",
          "keep.desc.count.others.plurals.few":
            "\u548c\u5176\u4ed6%1\u500b\u6a94\u6848",
          "keep.desc.count.others.plurals.many":
            "\u548c\u5176\u4ed6%1\u500b\u6a94\u6848",
          "keep.desc.count.others.plurals.one":
            "\u548c\u5176\u4ed6%1\u500b\u6a94\u6848",
          "keep.desc.count.others.plurals.other":
            "\u548c\u5176\u4ed6%1\u500b\u6a94\u6848",
          "keep.desc.count.others.plurals.two":
            "\u548c\u5176\u4ed6%1\u500b\u6a94\u6848",
          "keep.desc.count.others.plurals.zero":
            "\u548c\u5176\u4ed6%1\u500b\u6a94\u6848",
          "keep.desc.delete.other":
            "\u8981\u522a\u9664\u6240\u9078\u9805\u76ee\u55ce\uff1f",
          "keep.desc.discard":
            "\u7de8\u8f2f\u5167\u5bb9\u5c1a\u672a\u5132\u5b58\u3002\u60a8\u8981\u653e\u68c4\u7de8\u8f2f\u55ce\uff1f",
          "keep.desc.downloadError":
            "\u7531\u65bc\u4e0b\u8f09\u6a94\u6848\u6642\u767c\u751f\u932f\u8aa4\uff0c\u7121\u6cd5\u5b8c\u6210\u4f5c\u696d\u3002",
          "keep.desc.downloading": "\u6b63\u5728\u4e0b\u8f09\u2026",
          "keep.desc.drag":
            "\u8acb\u5c07\u6a94\u6848\u62d6\u66f3\u81f3\u6b64\uff0c\n\u6216\u9ede\u9078\u300c\u4e0a\u50b3\u300d\u3002",
          "keep.desc.dragHere":
            "\u8acb\u5c07\u6a94\u6848\u62d6\u66f3\u81f3\u6b64\u3002",
          "keep.desc.error.reason.exceedPhotoResolution":
            "\u5927\u65bc10,000 px\u3002",
          "keep.desc.error.reason.exceedPhotoSize":
            "\u7167\u7247\u5927\u65bc20MB\u3002",
          "keep.desc.error.reason.expired":
            "\u56e0\u5132\u5b58\u671f\u9650\u5df2\u904e\uff0c\u7121\u6cd5\u8b80\u53d6\u6a94\u6848\u3002",
          "keep.desc.error.reason.lackOfStorage":
            "\u5132\u5b58\u7a7a\u9593\u4e0d\u8db3\u3002",
          "keep.desc.error.reason.networkError":
            "\u7db2\u8def\u767c\u751f\u932f\u8aa4\u3002",
          "keep.desc.error.reason.notFoundFile":
            "\u627e\u4e0d\u5230\u6a94\u6848\u3002",
          "keep.desc.error.reason.unknown":
            "\u7121\u6cd5\u4e0a\u50b3\u6b64\u9805\u76ee\u3002",
          "keep.desc.error.reason.unknownFileType":
            "\u7121\u6cd5\u4e0a\u50b3\u6b64\u6a94\u6848\u985e\u578b\u3002",
          "keep.desc.exceedCharacter":
            "\u60a8\u6700\u591a\u53ef\u8f38\u516510,000\u500b\u5b57\u5143\u3002 ",
          "keep.desc.expiredContent.askDelete":
            "\u7531\u65bc\u5132\u5b58\u671f\u9650\u5df2\u5230\u671f\uff0c\u6240\u4ee5\u60a8\u7121\u6cd5\u518d\u6aa2\u8996\u6b64\u9805\u76ee\u7684\u5167\u5bb9\u3002\n\u60a8\u8981\u522a\u9664\u6b64\u9805\u76ee\u6e05\u55ae\u55ce\uff1f\n",
          "keep.desc.expiredContent.couldNotConfirmed":
            "\u7531\u65bc\u5132\u5b58\u671f\u9650\u5df2\u5230\u671f\uff0c\u6240\u4ee5\u60a8\u7121\u6cd5\u518d\u6aa2\u8996\u6b64\u9805\u76ee\u7684\u5167\u5bb9\u3002",
          "keep.desc.expiredContent.storagePeriod":
            "\u5132\u5b58\u671f\u9650\u5df2\u5230\u671f\u3002",
          "keep.desc.fileCountExceeds":
            "\u60a8\u6700\u591a\u53ef\u5132\u5b5820\u500b\u6a94\u6848\u3002",
          "keep.desc.guide.tryKeep":
            "\u5c07\u8cc7\u6599\u5b58\u9032\u5c08\u5c6c\u7a7a\u9593\n\u5feb\u4f86\u8a66\u8a66Keep\u529f\u80fd\u5427\uff01",
          "keep.desc.itemsavedinkeepexpired":
            "\u8a72\u9805\u76ee\u7121\u6cd5\u8b80\u53d6",
          "keep.desc.loadFailed":
            "\u4e0b\u8f09\u5931\u6557\n\u8acb\u78ba\u8a8d\u7db2\u8def\u9023\u7dda\u5f8c\u518d\u8a66\u4e00\u6b21\u3002 ",
          "keep.desc.loadFromKeep": "\u5728Keep\u6253\u958b\u6a94\u6848",
          "keep.desc.loadingData":
            "\u8b80\u53d6\u8cc7\u6599\u4e2d\u3002\u8acb\u7a0d\u5019\u3002",
          "keep.desc.maximumUploadableSize.plurals.few":
            "\u60a8\u4e00\u6b21\u53ea\u80fd\u4e0a\u50b3%1 MB\u3002",
          "keep.desc.maximumUploadableSize.plurals.many":
            "\u60a8\u4e00\u6b21\u53ea\u80fd\u4e0a\u50b3%1 MB\u3002",
          "keep.desc.maximumUploadableSize.plurals.one":
            "\u60a8\u4e00\u6b21\u53ea\u80fd\u4e0a\u50b3%1 MB\u3002",
          "keep.desc.maximumUploadableSize.plurals.other":
            "\u60a8\u4e00\u6b21\u53ea\u80fd\u4e0a\u50b3%1 MB\u3002",
          "keep.desc.maximumUploadableSize.plurals.two":
            "\u60a8\u4e00\u6b21\u53ea\u80fd\u4e0a\u50b3%1 MB\u3002",
          "keep.desc.maximumUploadableSize.plurals.zero":
            "\u60a8\u4e00\u6b21\u53ea\u80fd\u4e0a\u50b3%1 MB\u3002",
          "keep.desc.noSearchResult":
            "\u627e\u4e0d\u5230\u7b26\u5408\u7684\u8cc7\u6599\u3002",
          "keep.desc.noSelectableItem":
            "\u6c92\u6709\u4efb\u4f55\u53ef\u4ee5\u9078\u64c7\u7684\u9805\u76ee\u3002",
          "keep.desc.notSupportType":
            "\u7121\u6cd5\u958b\u555f\u6b64\u985e\u578b\u6a94\u6848\u3002 ",
          "keep.desc.notifyPeriod":
            "%1MB\u4ee5\u4e0a\u7684\u6a94\u6848\u5c07\u53ef\u4fdd\u755930\u5929\u3002 ",
          "keep.desc.photoLoadFailed":
            "\u7121\u6cd5\u8b80\u53d6\u7167\u7247\u3002\n\u8acb\u78ba\u8a8d\u7db2\u8def\u9023\u7dda\u5f8c\u518d\u8a66\u4e00\u6b21\u3002 ",
          "keep.desc.quit.uploading":
            "\u60a8\u6b63\u5728\u4e0a\u50b3\u6a94\u6848\u81f3Keep\uff0c\n\u73fe\u5728\u95dc\u9589LINE\u5c07\u6703\u53d6\u6d88\u4e0a\u50b3\u4f5c\u696d\u3002",
          "keep.desc.requesturl.failed.error":
            "\u7121\u6cd5\u8b80\u53d6\u7db2\u5740\u8cc7\u8a0a\u3002 \u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "keep.desc.retry": "\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "keep.desc.saved": "\u5df2\u5132\u5b58\u3002 ",
          "keep.desc.savedInKeep": "\u5df2\u5132\u5b58\u81f3Keep\u3002",
          "keep.desc.saving": "\u5132\u5b58\u4e2d...",
          "keep.desc.storageFull":
            "Keep\u7684\u5132\u5b58\u7a7a\u9593\u4e0d\u8db3\u3002",
          "keep.desc.storageFull.freeUpSpace":
            "Keep\u7684\u5132\u5b58\u7a7a\u9593\u4e0d\u8db3\u3002\u8acb\u6e05\u51fa\u5132\u5b58\u7a7a\u9593\u5f8c\u518d\u8a66\u4e00\u6b21\u3002 ",
          "keep.desc.storageFull.unable":
            "\u7531\u65bcKeep\u5132\u5b58\u7a7a\u9593\u5df2\u6eff\uff0c\u56e0\u6b64\u7121\u6cd5\u589e\u52a0\u66f4\u591a\u9805\u76ee\u3002",
          "keep.desc.storageFull.unableToSelect":
            "\u7531\u65bcKeep\u5132\u5b58\u7a7a\u9593\u5df2\u6eff\uff0c\u56e0\u6b64\u7121\u6cd5\u9078\u64c7\u9805\u76ee\u3002 ",
          "keep.desc.temporaryError":
            "\u7531\u65bc\u7cfb\u7d71\u66ab\u6642\u767c\u751f\u554f\u984c\uff0c\n\u6240\u4ee5\u7121\u6cd5\u5b8c\u6210\u8981\u6c42\u7684\u4f5c\u696d\u3002\n\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "keep.desc.totalSpace": "\u7e3d\u7a7a\u9593\uff1a%1",
          "keep.desc.unexpectedErrorOccured":
            "\u767c\u751f\u672a\u9810\u671f\u7684\u932f\u8aa4\u3002",
          "keep.desc.upload.error.maxFileSize":
            "\u7121\u6cd5\u4e0a\u50b3\u8d85\u904e%1 GB\u7684\u6a94\u6848\u3002\n\u8acb\u65bc\u78ba\u8a8d\u6a94\u6848\u5927\u5c0f\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "keep.desc.upload.inProgress":
            "\u6b63\u5728\u4e0a\u50b3\u81f3Keep...",
          "keep.desc.upload.notifyIncompleteUpload":
            "\u6a94\u6848\u4e0a\u50b3\u4e2d\u3002\n\u82e5\u60a8\u95dc\u9589LINE\uff0c\u53ef\u80fd\u53ea\u6703\u4e0a\u50b3\u90e8\u5206\u6a94\u6848\u3002",
          "keep.desc.uploadFail.storage.plurals.few":
            "\u7531\u65bc\u5132\u5b58\u7a7a\u9593\u4e0d\u8db3\uff0c\u7121\u6cd5\u4e0a\u50b3%1\u500b\u9805\u76ee\u3002",
          "keep.desc.uploadFail.storage.plurals.many":
            "\u7531\u65bc\u5132\u5b58\u7a7a\u9593\u4e0d\u8db3\uff0c\u7121\u6cd5\u4e0a\u50b3%1\u500b\u9805\u76ee\u3002",
          "keep.desc.uploadFail.storage.plurals.one":
            "\u7531\u65bc\u5132\u5b58\u7a7a\u9593\u4e0d\u8db3\uff0c\u7121\u6cd5\u4e0a\u50b3%1\u500b\u9805\u76ee\u3002",
          "keep.desc.uploadFail.storage.plurals.other":
            "\u7531\u65bc\u5132\u5b58\u7a7a\u9593\u4e0d\u8db3\uff0c\u7121\u6cd5\u4e0a\u50b3%1\u500b\u9805\u76ee\u3002",
          "keep.desc.uploadFail.storage.plurals.two":
            "\u7531\u65bc\u5132\u5b58\u7a7a\u9593\u4e0d\u8db3\uff0c\u7121\u6cd5\u4e0a\u50b3%1\u500b\u9805\u76ee\u3002",
          "keep.desc.uploadFail.storage.plurals.zero":
            "\u7531\u65bc\u5132\u5b58\u7a7a\u9593\u4e0d\u8db3\uff0c\u7121\u6cd5\u4e0a\u50b3%1\u500b\u9805\u76ee\u3002",
          "keep.desc.uploadFailed": "\u4e0a\u50b3\u5931\u6557\u3002",
          "keep.desc.uploadPending": "\u7b49\u5f85\u4e0a\u50b3\u4e2d...",
          "keep.desc.uploading": "\u4e0a\u50b3\u4e2d...",
          "keep.desc.usableSpace": "%1\u5df2\u4f7f\u7528",
          "keep.desc.videoLoadFailed":
            "\u7121\u6cd5\u8b80\u53d6\u5f71\u7247\u3002\n\u8acb\u78ba\u8a8d\u7db2\u8def\u9023\u7dda\u5f8c\u518d\u8a66\u4e00\u6b21\u3002 ",
          "keep.desc.wait": "\u8acb\u7a0d\u5019\u3002",
          "keep.desc.warning.deleteAll":
            "\u8981\u522a\u9664\u6240\u6709\u6a94\u6848\u55ce\uff1f\n\u6a94\u6848\u4e00\u65e6\u522a\u9664\u5f8c\u5373\u7121\u6cd5\u5fa9\u539f\u3002",
          "keep.desc.warning.deleteAll.chromeUser":
            "\u8981\u522a\u9664\u6240\u6709\u6a94\u6848\u55ce\uff1f\n\u82e5\u60a8\u9078\u64c7\u522a\u9664\uff0c\u60a8\u7684Chrome\u5099\u5fd8\u9304\u4e5f\u5c07\u6703\u88ab\u79fb\u9664\u3002\n\u6a94\u6848\u4e00\u65e6\u522a\u9664\u5f8c\u5373\u7121\u6cd5\u5fa9\u539f\u3002",
          "keep.download.btn": "\u958b\u555f\u8cc7\u6599\u593e",
          "keep.download.success": "\u4e0b\u8f09\u5b8c\u7562\u3002",
          "keep.emptytitle.title":
            "Keep\u5c31\u662f\u60a8\u7684\u5c08\u7528\u8cc7\u6599\u5eab",
          "keep.full.sync.working": "\u8655\u7406\u4e2d %1%",
          "keep.home.bannerdesc.endofkeep":
            "\u8acb\u5728%1\u4e4b\u524d\u5099\u4efdKeep\u4e0a\u7684\u91cd\u8981\u8cc7\u6599\u3002",
          "keep.home.bannertitle.endofkeep": "Keep\u7d50\u675f\u670d\u52d9",
          "keep.home.desc.timeformat": "yyyy\u5e74M\u6708d\u65e5",
          "keep.home.emptydesc.descforplaces":
            "\u60a8\u5f9e\u5b98\u65b9\u5e33\u865f\u3001LINE PLACE\u53ca\u5176\u4ed6\u4f86\u6e90\u5132\u5b58\u7684\u5730\u9ede\uff0c\u5c07\u6703\u986f\u793a\u65bc\u6b64\u8655\u3002",
          "keep.home.popupbutton.close": "\u95dc\u9589",
          "keep.home.popupbutton.dontshowagain": "\u4e0d\u518d\u986f\u793a",
          "keep.home.popupbutton.learnmore": "\u67e5\u770b\u8a73\u60c5",
          "keep.home.popupdesc.endofkeep":
            "Keep\u529f\u80fd\u5c07\u65bc%1\u7d50\u675f\u63d0\u4f9b\u670d\u52d9\u3002\u8acb\u65bc\u670d\u52d9\u7d50\u675f\u524d\u5c07\u5132\u5b58\u65bcKeep\u5167\u7684\u9805\u76ee\u5b8c\u6210\u5099\u4efd\u3002\n\u203b\u670d\u52d9\u7d50\u675f\u5f8c\uff0cKeep\u7b46\u8a18\u529f\u80fd\u4ecd\u53ef\u7e7c\u7e8c\u4f7f\u7528\u3002",
          "keep.home.popuptitle.endofkeep":
            "Keep\u7d50\u675f\u63d0\u4f9b\u670d\u52d9\u53ca\u76f8\u95dc\u5099\u4efd\u8aaa\u660e",
          "keep.home.tab.places": "\u5730\u9ede",
          "keep.home.toast.pinneditems": "\u5df2\u91d8\u9078",
          "keep.itemspicker.popupdesc.itemsharinglimit":
            "\u4e00\u6b21\u6700\u591a\u53ef\u5206\u4eab20\u500b\u9805\u76ee",
          "keep.keepitem.itemsenttokeepmemoexpired":
            "\u50b3\u9001\u81f3Keep\u7b46\u8a18\u7684\u9805\u76ee\u5df2\u8d85\u904e\u4fdd\u5b58\u671f\u9650",
          "keep.keepmemoguide.popupdesc.itemssenttokeepmemoshowninkeep":
            "\u5728Keep\u4e2d\u53ef\u67e5\u770b\u3001\u7de8\u8f2f\u548c\u7ba1\u7406\u5df2\u50b3\u9001\u5230Keep\u7b46\u8a18\u7684\u8cc7\u6599\uff01",
          "keep.keepmemoguide.popupdesc.piniimportantitems":
            "\u6709\u6700\u611b\u7684\u3001\u91cd\u8981\u7684\u3001\u60f3\u770b\u7684\u9805\u76ee\u55ce\uff1f\n\u5c07\u5b83\u91d8\u9078\uff0c\u8b93\u5b83\u986f\u793a\u65bc\u6700\u4e0a\u65b9\u5427\u3002",
          "keep.keepmemoguide.popupdesc.savekeepmemocontentforeverinkeep":
            "\u628aKeep\u7b46\u8a18\u4e2d\u7684\u8cc7\u6599\u5132\u5b58\u81f3Keep\uff0c\u6216\u5728Keep\u4e2d\u91d8\u9078\u3001\u7de8\u8f2f\u8a72\u9805\u76ee\u6216\u5c07\u5176\u65b0\u589e\u81f3\u7279\u8f2f\uff0c\u5373\u53ef\u6c38\u4e45\u4fdd\u5b58\u81f3Keep\u5594\uff01",
          "keep.keepmemoguide.popuptitle.introducingkeepmemo":
            "\u300cKeep\u7b46\u8a18\u300d\u65b0\u529f\u80fd",
          "keep.keepmemoguide.popuptitle.keepitemsforever":
            "\u8cc7\u6599\u50b3\u9001\u9580",
          "keep.keepmemoguide.popuptitle.pinningitems":
            "\u8cc7\u8a0a\u66f4\u9192\u76ee",
          "keep.label.add": "\u52a0\u5165",
          "keep.label.addText": "\u65b0\u589e",
          "keep.label.capture": "\u622a\u53d6\u756b\u9762",
          "keep.label.chromeMemo": "Chrome\u5099\u5fd8\u9304",
          "keep.label.copy": "\u8907\u88fd",
          "keep.label.createdTime": "\u62cd\u651d\u6642\u9593",
          "keep.label.delete": "\u522a\u9664",
          "keep.label.deleteAll": "\u5168\u90e8\u522a\u9664",
          "keep.label.deleting": "\u522a\u9664\u4e2d...",
          "keep.label.details": "\u8a73\u7d30\u8aaa\u660e",
          "keep.label.download": "\u4e0b\u8f09",
          "keep.label.edit": "\u7de8\u8f2f",
          "keep.label.emptyText": "\u6c92\u6709\u5167\u5bb9",
          "keep.label.expired": "\u5df2\u904e\u671f",
          "keep.label.fileSize": "\u6a94\u6848\u5927\u5c0f",
          "keep.label.from": "\u4f86\u81ea",
          "keep.label.goToKeep": "\u958b\u59cb\u4f7f\u7528Keep",
          "keep.label.hitocoto": "\u500b\u6027\u7c3d\u540d",
          "keep.label.justNow": "\u525b\u525b",
          "keep.label.learnMore": "\u7acb\u5373\u4e86\u89e3",
          "keep.label.modifiedTime": "\u6700\u5f8c\u7de8\u8f2f",
          "keep.label.more": "\u5176\u4ed6",
          "keep.label.newMemo": "\u5099\u5fd8\u9304",
          "keep.label.open": "\u958b\u555f",
          "keep.label.openkeepmemo": "\u958b\u555fKeep\u7b46\u8a18",
          "keep.label.order.stored": "\u5132\u5b58\u65e5\u671f",
          "keep.label.order.updated": "\u6700\u5f8c\u66f4\u65b0",
          "keep.label.paste": "\u8cbc\u4e0a",
          "keep.label.pause": "\u66ab\u505c",
          "keep.label.period": "\u5132\u5b58\u671f\u9650",
          "keep.label.pin": "\u91d8\u9078",
          "keep.label.play": "\u64ad\u653e",
          "keep.label.playTime": "\u64ad\u653e\u6642\u9593",
          "keep.label.refresh": "\u66f4\u65b0",
          "keep.label.resolution": "\u89e3\u6790\u5ea6",
          "keep.label.save": "\u5132\u5b58",
          "keep.label.saveInKeep": "\u5132\u5b58\u81f3Keep",
          "keep.label.savedTime": "\u5132\u5b58\u6642\u9593",
          "keep.label.search": "\u641c\u5c0b\u5168\u90e8",
          "keep.label.searchResult": "\u641c\u5c0b\u7d50\u679c",
          "keep.label.send": "\u78ba\u5b9a",
          "keep.label.settings": "\u8a2d\u5b9a",
          "keep.label.shareToChat": "\u50b3\u9001\u81f3\u804a\u5929\u5ba4",
          "keep.label.sortByDate": "\u4f9d\u65e5\u671f\u6392\u5e8f",
          "keep.label.sortByName": "\u4f9d\u540d\u7a31\u6392\u5e8f",
          "keep.label.sortBySize": "\u4f9d\u5927\u5c0f\u6392\u5e8f",
          "keep.label.terminate": "\u95dc\u9589LINE",
          "keep.label.tooltip": "Keep",
          "keep.label.unpin": "\u53d6\u6d88\u91d8\u9078",
          "keep.label.upload": "\u4e0a\u50b3",
          "keep.label.uploadFile": "\u52a0\u5165\u6a94\u6848",
          "keep.label.viewinkeepmemo": "\u67e5\u770bKeep\u7b46\u8a18",
          "keep.label.voiceMessage": "\u8a9e\u97f3\u8a0a\u606f",
          "keep.label.volume": "\u5df2\u4f7f\u7528\u7a7a\u9593",
          "keep.label.writememo.title": "\u5099\u5fd8\u9304",
          "keep.label.writetext.title": "\u6587\u5b57",
          "keep.main.desc.keepfadeout":
            "Keep\u5df2\u7121\u6cd5\u4f7f\u7528\uff0c\u8acb\u5c07LINE\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u3002",
          "keep.title": "Keep",
          "keep.toast.itempinned": "\u5df2\u91d8\u9078",
          "keep.toast.itemunpinned": "\u5df2\u53d6\u6d88\u91d8\u9078",
          "keepmemo.alert.deletemessage":
            "\u53ea\u6703\u5728\u6b64\u53f0\u88dd\u7f6e\u4e0a\u522a\u9664\u5df2\u9078\u8a0a\u606f\uff0c\u78ba\u5b9a\u8981\u522a\u9664\u55ce\uff1f",
          "keepmemo.alert.unsendmessage":
            "\u5373\u5c07\u7531\u60a8\u7684\u6240\u6709\u88dd\u7f6e\u4e2d\u522a\u9664\u8a72\u8a0a\u606f\uff0c\u78ba\u5b9a\u8981\u6536\u56de\u55ce\uff1f",
          "keepmemo.category.all": "\u5168\u90e8",
          "keepmemo.category.files": "\u6a94\u6848",
          "keepmemo.category.links": "\u9023\u7d50",
          "keepmemo.category.photos": "\u7167\u7247",
          "keepmemo.category.text": "\u6587\u5b57",
          "keepmemo.category.videos": "\u5f71\u7247",
          "keepmemo.desc.noSelectableItem":
            "\u6c92\u6709\u4efb\u4f55\u53ef\u4ee5\u9078\u64c7\u7684\u9805\u76ee\u3002",
          "keepmemo.itemspicker.popupdesc.itemsharinglimit":
            "\u4e00\u6b21\u6700\u591a\u50c5\u53ef\u5206\u4eab20\u500b\u9805\u76ee",
          "keepmemo.label.goToKeepMemo": "\u958b\u555fKeep\u7b46\u8a18",
          "keepmemo.label.search": "\u641c\u5c0b",
          "keepmemo.label.sendToKeepMemo": "\u50b3\u9001\u81f3Keep\u7b46\u8a18",
          "keepmemo.label.share": "\u5206\u4eab",
          "keepmemo.label.tooltip": "Keep\u7b46\u8a18",
          "keepmemo.msg.desc.systemmsg":
            "\u804a\u5929\u5ba4\u5c31\u662f\u6211\u7684\u7955\u5bc6\u57fa\u5730\uff01\u4e0d\u7ba1\u6587\u5b57\u3001\u7167\u7247\u3001\u5f71\u7247\u6216\u9023\u7d50\uff0c\u901a\u901a\u90fd\u80fd\u6536\u9032\u53bb\uff01",
          "keepmemo.title": "\u50b3\u9001\u81f3Keep\u7b46\u8a18",
          "keyword.notice.btn": "\u65b0\u589e\u95dc\u9375\u5b57",
          "keyword.notice.desc":
            "\u65b0\u589e\u7279\u5b9a\u5b57\u8a5e\u6216\u7528\u6236\u540d\u7a31\u4f5c\u70ba\u95dc\u9375\u5b57\uff0c\u5c31\u80fd\u63a5\u6536\u6240\u6709\u5305\u542b\u9019\u4e9b\u95dc\u9375\u5b57\u7684\u8a0a\u606f\u63d0\u9192\u3002",
          "keyword.notice.title": "\u95dc\u9375\u5b57\u63d0\u9192",
          "keyword.notification.desc": "\u542b\u6709\u95dc\u9375\u5b57",
          "kickout.all.v3":
            "\u60a8\u5df2\u81ea\u52d5\u767b\u51fa\uff0c\u8acb\u91cd\u65b0\u767b\u5165\u3002",
          "kickout.dormant.account":
            "\u8acb\u4f7f\u7528\u60a8\u5728LINE\u61c9\u7528\u7a0b\u5f0f\u4e0a\u8a2d\u5b9a\u7684\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u91cd\u65b0\u767b\u5165\uff0c\u4e26\u8a8d\u8b49\u60a8\u7684\u5e33\u865f\u3002",
          "kickout.email.account.modified":
            "\u7531\u65bc\u60a8\u8a2d\u5b9a\u4e86\u65b0\u7684\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u6216\u8b8a\u66f4\u4e86\u5bc6\u78bc\uff0c\u56e0\u6b64\u5df2\u88ab\u767b\u51fa\u3002",
          "kickout.expired":
            "\u7531\u65bc\u5f85\u6a5f\u6642\u9593\u904e\u9577\uff0c\n\u56e0\u6b64\u5df2\u5f9e\u9019\u53f0\u96fb\u8166\u767b\u51fa\u3002",
          "kickout.networkError":
            "\u7531\u65bc\u7db2\u8def\u767c\u751f\u932f\u8aa4\uff0c\u5df2\u70ba\u60a8\u767b\u51fa\uff0c\u8acb\u91cd\u65b0\u767b\u5165\u3002",
          "kickout.noAllowedSecondaryDevice":
            "\u7531\u65bc\u5df2\u5728\u667a\u6167\u624b\u6a5f\u8a2d\u5b9a\u7981\u6b62\u5f9e\u5176\u4ed6\u88dd\u7f6e\u767b\u5165\uff0c \u56e0\u6b64\u5df2\u5f9e\u9019\u53f0\u96fb\u8166\u767b\u51fa\u3002\n",
          "kickout.notAuthorizedDevice":
            "\u7531\u65bc\u672c\u5e33\u865f\u5df2\u5f9e\u5176\u4ed6\u96fb\u8166\u767b\u5165\uff0c\u56e0\u6b64\u5df2\u5f9e\u9019\u53f0\u96fb\u8166\u767b\u51fa\u3002   ",
          "kickout.notAvailableUser":
            "\u7531\u65bc\u60a8\u7684\u5e33\u865f\u5df2\u5f9e\u5176\u4ed6\u88dd\u7f6e\u4e0a\u522a\u9664\uff0c\u7cfb\u7d71\u5df2\u5c07\u60a8\u767b\u51faLINE\u3002",
          "kickout.passwordChanged":
            "\ub124\uc774\ubc84\ub97c \ud0c8\ud1f4\ud558\uc5ec \ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",
          "kickout.serverError":
            "\u7531\u65bc\u4f3a\u670d\u5668\u767c\u751f\u932f\u8aa4\uff0c\u5df2\u70ba\u60a8\u767b\u51fa\uff0c\u8acb\u91cd\u65b0\u767b\u5165\u3002",
          "kickout.serverMaintenance":
            "\u4f3a\u670d\u5668\u73fe\u6b63\u7dad\u8b77\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u518d\u91cd\u65b0\u767b\u5165\u3002",
          "kickout.serviceMaintenance":
            "\u7531\u65bc\u767c\u751f\u66ab\u6642\u6027\u932f\u8aa4\uff0c\u5df2\u70ba\u60a8\u767b\u51fa\uff0c\u8acb\u91cd\u65b0\u767b\u5165\u3002",
          "kickout.square.server.fail":
            "\u7531\u65bc\u793e\u7fa4\u7684\u8a8d\u8b49\u8655\u7406\u767c\u751f\u932f\u8aa4\uff0c\u7cfb\u7d71\u5df2\u5c07\u60a8\u767b\u51fa\uff0c\u8acb\u91cd\u65b0\u767b\u5165\u3002",
          "line.keepmemoguide.popupdesc.page1":
            "\u53ef\u5c07\u6587\u5b57\u3001\u7167\u7247\u6216\u5176\u4ed6\u9805\u76ee\u50b3\u9001\u81f3Keep\u7b46\u8a18\u804a\u5929\u5ba4\u3002",
          "line.keepmemoguide.popuptitle.page1":
            "\u300cKeep\u7b46\u8a18\u300d\u65b0\u529f\u80fd",
          "line.secondarylogin.popupdesc.updatelineerror.desk":
            "\u8acb\u66f4\u65b0LINE\u61c9\u7528\u7a0b\u5f0f\u5f8c\uff0c\u518d\u8a66\u4e00\u6b21\u3002",
          "line.secondarylogin.popuptitle.updatelineerror.desk": "\u932f\u8aa4",
          "line.updatepopup.button.leave": "\u96e2\u958b",
          "linechrome.chat.desc.unsupportedmessage":
            "\u7121\u6cd5\u65bcChrome\u7248LINE\u67e5\u770b\u6b64\u8a0a\u606f\u3002\u8acb\u81f3\u624b\u6a5f\u7248\u78ba\u8a8d\u3002",
          "linechrome.chat.desc.unsupportedstickers":
            "\u7121\u6cd5\u65bcChrome\u7248LINE\u4f7f\u7528\u6b64\u8cbc\u5716\u3002\n\u8acb\u81f3\u624b\u6a5f\u7248\u4f7f\u7528\u3002",
          "linechrome.chat.toast.nofolders":
            "\u7121\u6cd5\u5206\u4eab\u8cc7\u6599\u593e\u3002",
          "linechrome.chat.toast.supportedlanguage":
            "Chrome\u7248LINE\u652f\u63f4\u7ffb\u8b6f\u529f\u80fd\u3002\u53ef\u65bc\u8a2d\u5b9a\u4e2d\u8b8a\u66f4\u8a9e\u8a00\u3002",
          "linechrome.end.desc.endline":
            "\u78ba\u5b9a\u8981\u7d50\u675fChrome\u7248LINE\u55ce\uff1f",
          "linechrome.main.button.mute1":
            "\u95dc\u9589\u63d0\u91921\u5c0f\u6642",
          "linechrome.main.button.mute2":
            "\u95dc\u9589\u63d0\u91922\u5c0f\u6642",
          "linechrome.main.button.mute24":
            "\u95dc\u9589\u63d0\u919224\u5c0f\u6642",
          "linechrome.main.button.mute30":
            "\u95dc\u9589\u63d0\u919230\u5206\u9418",
          "linechrome.main.desc.unmutehour":
            "\u5c07\u65bc%1\u5c0f\u6642\u5f8c\u958b\u555f\u63d0\u9192",
          "linechrome.main.desc.unmuteminute":
            "\u5c07\u65bc%1\u5206\u9418\u5f8c\u958b\u555f\u63d0\u9192",
          "linechrome.main.desc.unmutesecond.other":
            "\u5c07\u65bc%1\u79d2\u5f8c\u958b\u555f\u63d0\u9192",
          "linemusic.playlist": "\u64ad\u653e\u6e05\u55ae",
          "linemusic.title": "LINE MUSIC",
          "linemusic.topic": "\u6a19\u984c",
          "lockscreen.kickout.accountError":
            "\u60a8\u8f38\u5165\u932f\u8aa4\u5bc6\u78bc\u7684\u6b21\u6578\u904e\u591a\uff0c\u56e0\u6b64\u5df2\u88ab\u5f37\u5236\u767b\u51faLINE\u3002",
          "lockscreen.lockscreen.text":
            "\u60a8\u7684LINE\u76ee\u524d\u5df2\u9396\u5b9a\u3002 ",
          "lockscreen.msg.alert.oncalling":
            "\u78ba\u5b9a\u8981\u9396\u5b9aLINE\u55ce\uff1f\n\u4f7f\u7528\u9396\u5b9a\u6a21\u5f0f\u5c07\u6703\u7d50\u675f\u76ee\u524d\u7684\u901a\u8a71\u3002",
          "lockscreen.msg.unlock.description":
            "\u78ba\u5b9a\u8981\u9396\u5b9aLINE\u55ce\uff1f\n\u89e3\u9664\u9396\u5b9a\u6642\u9700\u8f38\u5165LINE\u5bc6\u78bc\u3002",
          "lockscreen.msg.unlockAuto.description":
            "\u78ba\u5b9a\u8981\u5728\u96fb\u8166\u8655\u65bc\u9592\u7f6e\u72c0\u614b\u6642\u81ea\u52d5\u9396\u5b9aLINE\u55ce\uff1f\n\u89e3\u9664\u9396\u5b9a\u6642\u9700\u8f38\u5165LINE\u5bc6\u78bc\u3002",
          "lockscreen.password.fail":
            "\u5bc6\u78bc\u932f\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "lockscreen.password.text":
            "\u8acb\u8f38\u5165\u60a8\u7684LINE\u5bc6\u78bc\u4ee5\u89e3\u9396\u3002",
          "lockscreen.password.unlock.btn": "\u89e3\u9396",
          "login.btn.emailQRcode.login":
            "\u4f7f\u7528\u96fb\u5b50\u90f5\u4ef6\uff0f\u884c\u52d5\u689d\u78bc\u767b\u5165 >",
          "login.btn.login": "\u767b\u5165",
          "login.btn.signUp": "\u8a3b\u518a",
          "login.emailLogin.identity.credential.error":
            "\u7121\u6548\u7684\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u3002\n\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u3002",
          "login.emailLogin.label.error.accountError":
            "\u60a8\u7684\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u6216\u5bc6\u78bc\u4e0d\u6b63\u78ba\uff0c\u6216\u662f\u5c1a\u672a\u5728LINE\u8a3b\u518a\u3002",
          "login.emailLogin.label.error.inputError":
            "\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u6216\u5bc6\u78bc\u5c1a\u672a\u8f38\u5165\u3002\xa0",
          "login.emailLogin.link.changeToNaverLogin": "NAVER ID Sign In",
          "login.emailLogin.link.findPassword":
            "\u5fd8\u8a18\u5bc6\u78bc\uff1f",
          "login.emailLogin.placeHolder.email":
            "\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f",
          "login.emailLogin.placeHolder.emailwithPhoneNumber":
            "\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u6216\u96fb\u8a71\u865f\u78bc",
          "login.emailLogin.placeHolder.password": "\u5bc6\u78bc",
          "login.emailLogin.popup.findPassword":
            "\u8acb\u5728\u667a\u6167\u624b\u6a5f\u7248\u7684LINE\u4e0a\u57f7\u884c\u300c\u8a2d\u5b9a> \u6211\u7684\u5e33\u865f> \u8a2d\u5b9a\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u300d\u7684\u6b65\u9a5f\uff0c\n\u5373\u53ef\u8b8a\u66f4\u767b\u5165\u7528\u7684\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u6216\u5bc6\u78bc\u3002\n\n\n\n",
          "login.error.auth.failed":
            "\u7531\u65bc\u60a8\u5df2\u5f9e\u5176\u4ed6\u96fb\u8166\u767b\u5165\n\u6216\u662f\u767b\u5165\u7684\u6709\u6548\u6642\u9650\u5df2\u904e\n\u56e0\u6b64\u7121\u6cd5\u81ea\u52d5\u767b\u5165\u3002 ",
          "login.label.certificate.not.vaild":
            "\u5b89\u5168\u6027\u6191\u8b49\u6709\u554f\u984c\u3002\n\u8acb\u6b63\u78ba\u8a2d\u5b9a\u96fb\u8166\u7684\u65e5\u671f\u3002",
          "login.label.doingLogin": "\u8655\u7406\u4e2d\u2026",
          "login.label.error.auth.failed.anotherPC":
            "\u7531\u65bc\u60a8\u5df2\u5f9e\u5176\u4ed6\u96fb\u8166\u767b\u5165\uff0c\u7121\u6cd5\u81ea\u52d5\u767b\u5165\u3002",
          "login.label.error.auth.failed.loginExpired":
            "\u7531\u65bc\u767b\u5165\u7684\u6709\u6548\u6642\u9650\u5df2\u904e\uff0c\u7121\u6cd5\u81ea\u52d5\u767b\u5165\u3002",
          "login.label.error.dberror":
            "\u5df2\u767c\u73fe\u4e26\u4fee\u6b63\u932f\u8aa4\u3002\n\u8acb\u91cd\u65b0\u767b\u5165\u3002",
          "login.label.error.dormant.account":
            "\u8acb\u4f7f\u7528\u60a8\u5728LINE\u61c9\u7528\u7a0b\u5f0f\u4e0a\u8a2d\u5b9a\u7684\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u767b\u5165\uff0c\u4e26\u8a8d\u8b49\u60a8\u7684\u5e33\u865f\u3002",
          "login.label.error.extraError":
            "\u73fe\u5728\u66ab\u6642\u7121\u6cd5\u767b\u5165\u3002\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "login.label.error.keyboardError":
            "\u8acb\u5207\u63db\u81f3\u82f1\u6587\u8f38\u5165\u3002",
          "login.label.error.networkError":
            "\u7db2\u8def\u767c\u751f\u932f\u8aa4\uff0c\u7121\u6cd5\u767b\u5165\u3002\u8acb\u78ba\u8a8d\u7db2\u8def\u9023\u7dda\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "login.label.error.pinCode":
            "\u8a8d\u8b49\u78bc\u4e0d\u7b26\u3002\u8acb\u91cd\u65b0\u8f38\u5165\u6b63\u78ba\u7684\u8a8d\u8b49\u78bc\u3002",
          "login.label.error.schemeError":
            "\u8acb\u767b\u5165LINE\u4e26\u91cd\u8a66\u3002",
          "login.label.error.serverError":
            "\u4f3a\u670d\u5668\u767c\u751f\u932f\u8aa4\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "login.label.error.serverMaintenance":
            "\u4f3a\u670d\u5668\u73fe\u6b63\u7dad\u8b77\u4e2d\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "login.label.error.verification.timeout":
            "\u60a8\u7684\u8a8d\u8b49\u78bc\u5df2\u904e\u671f\u3002\n\u8acb\u7533\u8acb\u53e6\u4e00\u500b\u8a8d\u8b49\u78bc\u3002",
          "login.label.searching.network":
            "\u6b63\u5728\u641c\u5c0b\u6700\u4f73\u7db2\u8def\u74b0\u5883\u3002",
          "login.loginwithsmartphone.tooltip":
            "\u53ef\u900f\u904e\u624b\u6a5f\u8a8d\u8b49\u8f15\u9b06\u767b\u5165\u3002",
          "login.naverLogin.checkbox.keepLoginStatus":
            "\u81ea\u52d5\u767b\u5165",
          "login.naverLogin.checkbox.startUpWin":
            "\u65bcWindows\u958b\u6a5f\u6642\u81ea\u52d5\u555f\u52d5",
          "login.naverLogin.label.error.inputError":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
          "login.naverLogin.label.error.proxyError":
            "\u7121\u6cd5\u767b\u5165\u3002\n\u8acb\u78ba\u8a8d\u60a8\u7684\u4ee3\u7406\u4f3a\u670d\u5668\u8a2d\u5b9a\u4e26\u518d\u8a66\u4e00\u6b21\u3002",
          "login.naverLogin.link.changeToEmailLogin":
            "\uc774\uba54\uc77c \ub85c\uadf8\uc778",
          "login.naverLogin.link.findIDPassword1":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638 \ucc3e\uae30",
          "login.naverLogin.link.findIDPassword2":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638 \ucc3e\uae30",
          "login.naverLogin.placeHolder.naverID": "Naver ID",
          "login.naverLogin.placeHolder.password": "\u5bc6\u78bc",
          "login.naverLogin.url.ID":
            "https://nid.naver.com/user/help.nhn?todo=idinquiry",
          "login.naverLogin.url.pass":
            "https://nid.naver.com/user/help.nhn?todo=pwinquiry",
          "login.otp.link.title": "OTP \ub3c4\uc6c0\ub9d0",
          "login.otp.link.url":
            "https://help.naver.com/support/contents/contents.nhn?serviceNo=532&categoryNo=1533",
          "login.password.ascii.error":
            "\u8acb\u5207\u63db\u9375\u76e4\u4ee5\u82f1\u6587\u8f38\u5165",
          "login.phoneNumberLogin.alert.info":
            "\u50c5\u9650\u4f7f\u7528\u96fb\u8166\u7248LINE\u8a3b\u518a\u7684\u7528\u6236\u53ef\u900f\u904e\u96fb\u8a71\u865f\u78bc\u767b\u5165\u3002",
          "login.phoneNumberLogin.alert.networkerror":
            "\u7db2\u8def\u767c\u751f\u554f\u984c\uff0c \u7cfb\u7d71\u7121\u6cd5\u6b63\u5e38\u57f7\u884c\uff01\n\u8acb\u518d\u8a66\u4e00\u6b21\uff01",
          "login.phoneNumberLogin.identity.credential.error":
            "\u7121\u6548\u7684\u96fb\u8a71\u865f\u78bc\u3002\u8acb\u8f38\u5165\u6b63\u78ba\u7684\u96fb\u8a71\u865f\u78bc\u3002",
          "login.phoneNumberLogin.label.country": "\u9078\u64c7\u570b\u5bb6",
          "login.phoneNumberLogin.label.error.accountError":
            "\u60a8\u8f38\u5165\u7684\u96fb\u8a71\u865f\u78bc\u6216\u5bc6\u78bc\u4e0d\u5b58\u5728\u6216\u662f\u6709\u8aa4\u3002",
          "login.phoneNumberLogin.label.error.inputError":
            "\u96fb\u8a71\u865f\u78bc\u6216\u5bc6\u78bc\u5c1a\u672a\u8f38\u5165\u3002",
          "login.phoneNumberLogin.placeHolder.password": "\u5bc6\u78bc",
          "login.phoneNumberLogin.placeHolder.phone":
            "\u96fb\u8a71\u865f\u78bc",
          "login.phoneNumberLogin.placeHolder.search": "\u641c\u5c0b",
          "login.phoneNumberLogin.verification.desc":
            "\u70ba\u4e86\u78ba\u4fdd\u5e33\u865f\u5b89\u5168\u6027\uff0c\u60a8\u5fc5\u9808\u5728\u9996\u6b21\u767b\u5165\u96fb\u8166\u7248\u6642\u8a8d\u8b49\u60a8\u7684\u5e33\u865f\u3002 \u8acb\u8f38\u5165\u7c21\u8a0a\u5167\u7684\u8a8d\u8b49\u78bc\u3002\n\u82e5\u60a8\u672a\u6536\u5230\u7c21\u8a0a\uff0c\u8acb\u5617\u8a66\u4e0b\u5217\u65b9\u6cd5\uff1a",
          "login.popup.abuse":
            "\u7531\u65bc\u5931\u6557\u6b21\u6578\u904e\u591a\uff0cIP\u4f4d\u5740\u5df2\u88ab\u9396\u5b9a\uff0c\u8acb\u6539\u7528\u884c\u52d5\u689d\u78bc\u767b\u5165\u3002",
          "login.popup.error.diskFull":
            "\u5269\u9918\u7684\u786c\u789f\u7a7a\u9593\u4e0d\u52301GB\u3002\n\u90e8\u5206LINE\u529f\u80fd\u53ef\u80fd\u7121\u6cd5\u6b63\u5e38\u904b\u4f5c\u3002",
          "login.popup.kickout.r0":
            "\u81ea\u5176\u4ed6\u96fb\u8166\u767b\u5165",
          "login.popup.kickout.r1":
            "\u65bc\u4e00\u6bb5\u6642\u9593\u5167\u672a\u8f38\u5165\u4efb\u4f55\u5167\u5bb9",
          "login.popup.kickout.r2": "\u81ea\u624b\u6a5f\u4e0a\u767b\u51fa",
          "login.popup.kickout.r3": "LINE\u7684\u5e33\u865f\u5df2\u522a\u9664",
          "login.popup.kickout.r4":
            "\ub124\uc774\ubc84\ub97c \ud0c8\ud1f4\ud558\uac70\ub098 \ube44\ubc00\ubc88\ud638\ub97c \ubcc0\uacbd\ud55c \uacbd\uc6b0",
          "login.popup.kickout.r5":
            "\u82e5\u4f3a\u670d\u5668\u6b63\u5728\u7dad\u8b77\u800c\u7121\u6cd5\u4f7f\u7528",
          "login.popup.kickout.subtitle":
            "\u65bc\u4e0b\u5217\u60c5\u6cc1\u4e2d\uff0c\u96fb\u8166\u7248\u5c07\u81ea\u52d5\u767b\u51fa\uff1a",
          "login.popup.kickout.title": "\u60a8\u5df2\u767b\u51faLINE",
          "login.qrLogin.desc.error.expired":
            "\u884c\u52d5\u689d\u78bc\u5df2\u904e\u671f\uff0c\n\u8acb\u9ede\u6309\u66f4\u65b0\u5716\u793a\u4e26\u6383\u63cf\u65b0\u7684\u884c\u52d5\u689d\u78bc\u3002",
          "login.qrLogin.desc.error.network":
            "\u7db2\u8def\u767c\u751f\u932f\u8aa4\uff0c\u7121\u6cd5\u8b80\u53d6\u884c\u52d5\u689d\u78bc\u3002\n\u8acb\u78ba\u8a8d\u7db2\u8def\u9023\u7dda\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "login.qrLogin.desc.howto":
            "\u8acb\u5728\u624b\u6a5f\u4e0a\u958b\u555fLINE\u61c9\u7528\u7a0b\u5f0f\uff0c\u9ede\u9078\u641c\u5c0b\u6b04\u4f4d\u65c1\u7684\u6383\u63cf\u5716\u793a\uff0c\u518d\u6383\u63cf\u6b64\u884c\u52d5\u689d\u78bc\u3002",
          "login.qrLogin.title":
            "\u4f7f\u7528\u884c\u52d5\u689d\u78bc\u767b\u5165",
          "login.register.already": "LINE\u7528\u6236\u767b\u5165",
          "login.register.downloadLink": "LINE\u4e0b\u8f09\u7db2\u5740>>",
          "login.register.help.desc":
            "\u65bcLINE\u8a3b\u518a\u5b8c\u6210\u5f8c \u8a2d\u5b9a\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\uff0c \u5373\u53ef\u4f7f\u7528LINE\u96fb\u8166\u7248\u3002\n",
          "login.register.help.desc1":
            "\ubaa8\ubc14\uc77c \ub77c\uc778 \uc571\uc5d0\uc11c \uac00\uc785\ud558\uace0 \ub124\uc774\ubc84 \uc544\uc774\ub514\ub97c \n\ub4f1\ub85d\ud558\uba74 PC\ubc84\uc804\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.register.help.desc2":
            "\u65bcLINE\u8a3b\u518a\u5b8c\u6210\u5f8c \u8a2d\u5b9a\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\uff0c\u5373\u53ef\u4f7f\u7528LINE Mac\u7248\u3002",
          "login.register.help.desc3":
            "\ubaa8\ubc14\uc77c \ub77c\uc778 \uc571\uc5d0\uc11c \uac00\uc785\ud558\uace0 \ub124\uc774\ubc84 \uc544\uc774\ub514\ub97c \n\ub4f1\ub85d\ud558\uba74 MAC\ubc84\uc804\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.register.link.android":
            "https://play.google.com/store/apps/details?id=jp.naver.line.android&hl=zh-hant",
          "login.register.link.iphone":
            "https://itunes.apple.com/tw/app/line/id443904275?l=zh&mt=8",
          "login.register.link.wphone":
            "http://www.windowsphone.com/zh-TW/store/app/line/a18daaa9-9a1c-4064-91dd-794644cd88e7",
          "login.register.newmember": "\u8a3b\u518a\u65b0\u5e33\u865f",
          "login.registration.password.reset": "\u91cd\u8a2d\u5bc6\u78bc",
          "login.simpleLogin.btn.updateQrCode":
            "\u66f4\u65b0\u884c\u52d5\u689d\u78bc",
          "login.simpleLogin.label.desc.normal":
            "\u5c07LINE\u7684\u884c\u52d5\u689d\u78bc\u6383\u63cf\u5668\u5c0d\u6e96\u884c\u52d5\u689d\u78bc\u4e4b\u5f8c\uff0c\u5373\u53ef\u767b\u5165\u96fb\u8166\u7248\u3002\n* \u672c\u884c\u52d5\u689d\u78bc\u50c5\u4f9b\u60a8\u767b\u5165\u96fb\u8166\u7248\u4e4b\u7528\u3002",
          "login.simpleLogin.label.error.cannot.refresh.too.frequently":
            "\u884c\u52d5\u689d\u78bc\u65bc\u66f4\u65b0\u5f8c\uff0c\u9808\u7d93\u904e\u4e00\u6bb5\u6642\u624d\u80fd\u518d\u5ea6\u66f4\u65b0\u3002\n\u8acb\u7a0d\u5f8c\u518d\u8a66\uff01",
          "login.simpleLogin.label.error.qrcodeExpired":
            "\u884c\u52d5\u689d\u78bc\u7684\u4f7f\u7528\u6548\u671f\u5df2\u904e\uff0c\u8acb\u66f4\u65b0\u3002",
          "login.simpleLogin.link.howto":
            "\u4f7f\u7528\u884c\u52d5\u689d\u78bc\u767b\u5165\u7684\u65b9\u6cd5",
          "login.tab.emailLogin": "\u96fb\u5b50\u90f5\u4ef6\u767b\u5165",
          "login.tab.naverLogin": "\ub124\uc774\ubc84 \ub85c\uadf8\uc778",
          "login.tab.phoneNumberLogin":
            "\u4f7f\u7528\u96fb\u8a71\u865f\u78bc\u767b\u5165 >",
          "login.tab.phoneNumberLogin.title":
            "\u4f7f\u7528\u96fb\u8a71\u865f\u78bc\u767b\u5165",
          "login.tab.simpleLogin":
            "\u4f7f\u7528\u884c\u52d5\u689d\u78bc\u767b\u5165",
          "loginHelp.email.image.0": "images/zh-TW/01_main.png",
          "loginHelp.email.image.1": "images/zh-TW/02_email.png",
          "loginHelp.email.image.registration":
            "image://login/zh-TW/03_email.png",
          "loginHelp.emailLogin.label.step1":
            "\u65bc\u667a\u6167\u624b\u6a5f\u4e0a\u7684LINE\u5167\uff0c\u5148\u4f9d[\u8a2d\u5b9a> \u6211\u7684\u5e33\u865f]\u7684\u6b65\u9a5f\u9032\u5165\u8a2d\u5b9a\u9801\u9762\u3002",
          "loginHelp.emailLogin.label.step2":
            "\u5728\u300c\u6211\u7684\u5e33\u865f\u300d\u9801\u9762\u9ede\u9078\u300c\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u300d\u5f8c\uff0c\u8a2d\u5b9a\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f",
          "loginHelp.emailLogin.label.tab.mobile":
            "\u4f7f\u7528\u624b\u6a5f\u7248\u8a3b\u518a\u6642",
          "loginHelp.emailLogin.label.tab.pc":
            "\u4f7f\u7528\u96fb\u8166\u7248\u8a3b\u518a\u6642",
          "loginHelp.emailLogin.label.tab.pc.desc1":
            "\u5247\u9700\u5728\u8a2d\u5b9a\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u5f8c\uff0c\u624d\u80fd\u4f7f\u7528\u96fb\u5b50\u90f5\u4ef6\u767b\u5165\u3002\n\u524d\u5f80\u300c\u8a2d\u5b9a\u300d\uff1e\u300c\u57fa\u672c\u8a2d\u5b9a\u300d\uff0c\u5373\u53ef\u8a2d\u5b9a\u60a8\u7684\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u3002",
          "loginHelp.emailLogin.label.tab.pc.desc2":
            "\u7121\u8ad6\u662f\u4f7f\u7528\u96fb\u8a71\u865f\u78bc\u767b\u5165\u6216\u96fb\u5b50\u90f5\u4ef6\u767b\u5165\uff0c\u5747\u5171\u7528\u540c\u4e00\u7d44\u5bc6\u78bc\u3002\n\u8f38\u5165\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u5f8c\uff0c\u8acb\u8f38\u5165\u4f7f\u7528\u96fb\u8a71\u865f\u78bc\u767b\u5165\u6642\u7684\u5bc6\u78bc\u3002",
          "loginHelp.emailLogin.label.tab.pc.title1":
            "\u82e5\u5c1a\u672a\u8a2d\u5b9a\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\uff0c",
          "loginHelp.emailLogin.label.tab.pc.title2":
            "\u82e5\u5df2\u8a2d\u5b9a\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\uff0c",
          "loginHelp.emailLogin.label.title":
            "\u4f7f\u7528\u96fb\u5b50\u90f5\u4ef6\u767b\u5165\u6642\u7684\u5e38\u898b\u554f\u984c",
          "loginHelp.emailLogin.label.wap.step1":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.emailLogin.label.wap.step2":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.jp.email.tab0.text": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.jp.email.tab1.text": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.jp.qrcode.tab0.text": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.jp.qrcode.tab1.text": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.jp.wap.email.image.0": "images/ja-JP/03_jp_main.png",
          "loginHelp.jp.wap.email.image.1": "images/ja-JP/04_jp_setting.png",
          "loginHelp.jp.wap.qrcode.image.0": "images/ja-JP/07_wap_qr01.png",
          "loginHelp.jp.wap.qrcode.image.1": "images/ja-JP/08_wap_qr02.png",
          "loginHelp.naver.image.0": "images/ko-KR/01_main.png",
          "loginHelp.naver.image.1": "images/ko-KR/03_naver.png",
          "loginHelp.naverLogin.label.step1":
            "\ub77c\uc778 \uc571\uc758 [\uc124\uc815 > \uacc4\uc815]\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.",
          "loginHelp.naverLogin.label.step2":
            '"\uacc4\uc815\uad00\ub9ac"\uc5d0\uc11c "\ub124\uc774\ubc84 \uc544\uc774\ub514 \ub4f1\ub85d" \uc5d0\uc11c \ub124\uc774\ubc84 \uc544\uc774\ub514\ub97c \ub4f1\ub85d\ud558\uba74 \ub4f1\ub85d\ud55c \ub124\uc774\ubc84 \uc544\uc774\ub514\ub85c \ub85c\uadf8\uc778\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.',
          "loginHelp.naverLogin.label.title":
            "\ub124\uc774\ubc84 \uc544\uc774\ub514 \ub4f1\ub85d",
          "loginHelp.qrcode.image.0": "images/zh-TW/03_qr01.png",
          "loginHelp.qrcode.image.1": "images/zh-TW/04_qr02.png",
          "loginHelp.qrcodeLogin.label.step1":
            "\u8acb\u5728\u667a\u6167\u624b\u6a5f\u4e0a\u7684LINE\u57f7\u884c\u300c\u5176\u4ed6\uff1e\u52a0\u5165\u597d\u53cb\uff1e\u884c\u52d5\u689d\u78bc\u300d\u7684\u64cd\u4f5c\u5f8c\uff0c\u6383\u63cf\u884c\u52d5\u689d\u78bc\u3002",
          "loginHelp.qrcodeLogin.label.step2":
            "\u6383\u63cf\u884c\u52d5\u689d\u78bc\u4e4b\u5f8c\uff0c\u9ede\u9078\u667a\u6167\u624b\u6a5f\u4e0aLINE\u7684\u300c\u767b\u5165\u300d\u9375\uff0c\u5373\u53ef\u767b\u5165\u96fb\u8166\u7248\u3002",
          "loginHelp.qrcodeLogin.label.title":
            "\u4f7f\u7528\u884c\u52d5\u689d\u78bc\u767b\u5165\u7684\u65b9\u6cd5",
          "loginHelp.qrcodeLogin.label.wap.step1":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.qrcodeLogin.label.wap.step2":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "markdown.input.context.menu.bold": "\u7c97\u9ad4",
          "markdown.input.context.menu.codeblock": "\u6bb5\u843d\u6846",
          "markdown.input.context.menu.italic": "\u659c\u9ad4",
          "markdown.input.context.menu.strikethrough": "\u522a\u9664\u7dda",
          "markdown.input.context.menu.wordblock": "\u7d05\u5b57\u6846",
          "markdown.input.guideline.bold": "*\u7c97\u9ad4*",
          "markdown.input.guideline.codeblock":
            "```\u7a0b\u5f0f\u78bc\u5340\u584a```",
          "markdown.input.guideline.italic": "_\u659c\u9ad4_",
          "markdown.input.guideline.strikethrough": "~\u522a\u9664\u7dda~",
          "markdown.input.guideline.wordblock":
            "`\u5167\u5d4c\u7a0b\u5f0f\u78bc`",
          "markdown.input.menu.help": "\u95dc\u65bc\u6587\u5b57\u683c\u5f0f",
          "media.locale.font":
            "NanumGothic,\ub098\ub214\uace0\ub515,Malgun,\ub9d1\uc740 \uace0\ub515,\ub9d1\uc740\uace0\ub515,Dotum,Gulim,\ub3cb\uc6c0,\uad74\ub9bc",
          "media.msg.err.directx":
            "\u60a8\u5fc5\u9808\u5148\u5b89\u88ddDirectX 9.0c\uff0c\u624d\u80fd\u64ad\u653e\u5f71\u7247\u3002\n\u60a8\u8981\u73fe\u5728\u5b89\u88dd\u55ce\uff1f ",
          "media.msg.err.expired":
            "\u5f71\u7247\u4e0b\u8f09\u671f\u9650\u5df2\u904e\uff0c\u7121\u6cd5\u64ad\u653e\uff01",
          "media.msg.err.network":
            "\u7db2\u8def\u6216\u4f3a\u670d\u5668\u767c\u751f\u554f\u984c\uff0c\u6a94\u6848\u7121\u6cd5\u64ad\u653e\u3002\n\u8acb\u91cd\u65b0\u518d\u8a66\u4e00\u6b21\u3002",
          "media.msg.err.transient":
            "\u76ee\u524d\u767c\u751f\u66ab\u6642\u6027\u7684\u554f\u984c\uff0c\u6a94\u6848\u7121\u6cd5\u64ad\u653e\u3002\n\u8acb\u91cd\u65b0\u518d\u8a66\u4e00\u6b21\u3002",
          "media.msg.tooltip.close": "\u95dc\u9589",
          "media.msg.tooltip.minimize": "\u6700\u5c0f\u5316",
          "media.msg.tooltip.pause": "\u66ab\u505c",
          "media.msg.tooltip.play": "\u64ad\u653e",
          "media.msg.tooltip.playspeed": "\u64ad\u653e\u901f\u5ea6",
          "media.msg.tooltip.stop": "\u505c\u6b62",
          "media.msg.tooltip.volume": "\u97f3\u91cf",
          "media.msg.tooltip.volume1": "\u97f3\u91cf",
          "media.video.full.screen.out":
            "\u9ede\u6309\u300cESC\u300d\u5373\u53ef\u9000\u51fa\u5168\u87a2\u5e55",
          "media.video.replay": "\u91cd\u64ad",
          "meeting.popup.end.body":
            "\u60a8\u8981\u9000\u51fa\u6703\u8b70\u5ba4\u55ce\uff1f",
          "meeting.popup.end.button": "\u9000\u51fa",
          "meeting.tooltip.end.call": "\u9000\u51fa\u6703\u8b70\u5ba4",
          "menu.menubar.allNotification.off":
            "\u95dc\u9589\u6240\u6709\u63d0\u9192",
          "menu.menubar.allNotification.on":
            "\u958b\u555f\u6240\u6709\u63d0\u9192",
          "menu.menubar.friend.addFriend": "\u52a0\u5165\u597d\u53cb",
          "menu.menubar.friend.makeGroup": "\u5efa\u7acb\u7fa4\u7d44",
          "menu.menubar.friend.title": "\u597d\u53cb",
          "menu.menubar.help.lineHelp": "\u5e38\u898b\u554f\u984c",
          "menu.menubar.help.title": "\u5e38\u898b\u554f\u984c",
          "menu.menubar.keepmemo": "Keep\u7b46\u8a18",
          "menu.menubar.line.about": "\u95dc\u65bcLINE",
          "menu.menubar.line.exit": "\u7d50\u675f\u61c9\u7528\u7a0b\u5f0f",
          "menu.menubar.line.hideLine": "\u96b1\u85cfLINE",
          "menu.menubar.line.hideOthers":
            "\u96b1\u85cf\u5176\u4ed6\u61c9\u7528\u7a0b\u5f0f",
          "menu.menubar.line.setting": "\u8a2d\u5b9a",
          "menu.menubar.line.showAll": "\u986f\u793a\u5168\u90e8",
          "menu.menubar.line.title": "LINE",
          "menu.menubar.view.chat": "\u804a\u5929",
          "menu.menubar.view.friend": "\u597d\u53cb",
          "menu.menubar.view.hub": "LINE HUB",
          "menu.menubar.view.myProfile": "\u500b\u4eba\u6a94\u6848",
          "menu.menubar.view.myhome": "\u4e3b\u9801",
          "menu.menubar.view.openchat": "\u793e\u7fa4",
          "menu.menubar.view.services": "\u670d\u52d9",
          "menu.menubar.view.title": "\u986f\u793a",
          "menu.menubar.view.today": "LINE TODAY",
          "menu.menubar.view.voom": "LINE VOOM",
          "menu.menubar.window.bringToTopAll":
            "\u56fa\u5b9a\u6240\u6709\u8996\u7a97",
          "menu.menubar.window.maximize": "\u653e\u5927",
          "menu.menubar.window.minimize": "\u6700\u5c0f\u5316",
          "menu.menubar.window.title": "\u8996\u7a97",
          "menu.setting.lockscreen": "\u9396\u5b9a\u6a21\u5f0f",
          "menu.toast.allNotification.off": "\u5df2\u958b\u555f\u63d0\u9192",
          "menu.toast.allNotification.on": "\u5df2\u95dc\u9589\u63d0\u9192",
          "menu.tray.about": "\u95dc\u65bcLINE",
          "menu.tray.balloon.login": "\u60a8\u5df2\u767b\u5165LINE",
          "menu.tray.balloon.logout": "\u60a8\u5df2\u767b\u51faLINE",
          "menu.tray.check.update":
            "\u78ba\u8a8d\u6709\u7121\u6700\u65b0\u7248\u672c",
          "menu.tray.exit": "\u7d50\u675f\u61c9\u7528\u7a0b\u5f0f",
          "menu.tray.keepmemo": "Keep\u7b46\u8a18",
          "menu.tray.login": "\u767b\u5165",
          "menu.tray.logout": "\u767b\u51fa",
          "menu.tray.setting": "\u8a2d\u5b9a",
          "menu.tray.showBuddyList": "\u597d\u53cb\u540d\u55ae",
          "message.context.background":
            "\u8a2d\u70ba\u804a\u5929\u5ba4\u80cc\u666f",
          "message.context.cancel.imageselect":
            "\u53d6\u6d88\u9078\u64c7\u7167\u7247",
          "message.context.imageselect": "\u9078\u64c7\u7167\u7247",
          "message.delete.confirm":
            "\u60a8\u9078\u64c7\u7684\u8a0a\u606f\u50c5\u6703\u5f9e\u9019\u53f0\u96fb\u8166\u88dd\u7f6e\u522a\u9664\uff0c\u5c0d\u65b9\u88dd\u7f6e\u4e0a\u7684\u8a0a\u606f\u5c07\u4e0d\u6703\u88ab\u522a\u9664\u3002",
          "message.error.invalidfile":
            "\u66f4\u65b0\u6a94\u7684\u5167\u5bb9\u6bc0\u640d",
          "message.error.opensetup":
            "\u4e0b\u8f09\u5b8c\u7562\u7684\u66f4\u65b0\u6a94\u7121\u6cd5\u958b\u555f\u3002",
          "message.error.opensetup.codesign":
            "\u60a8\u4e0b\u8f09\u7684\u66f4\u65b0\u6a94\u5df2\u640d\u6bc0\uff0c\u6545\u7121\u6cd5\u57f7\u884c\u3002",
          "message.error.update": "\u66f4\u65b0\u4f5c\u696d\u4e2d\u65b7",
          "message.error.updateurl":
            "\u66f4\u65b0\u7db2\u5740\u7121\u6cd5\u53d6\u5f97",
          "msgbox.alert.font.exist":
            "\u76ee\u524d\u5df2\u5728\u4f7f\u7528\u6b64\u5b57\u9ad4\u3002",
          "msgbox.alert.nospace":
            "\u88dd\u7f6e\u53ef\u4f7f\u7528\u7684\u7a7a\u9593\u4e0d\u8db3\u3002\u8acb\u522a\u9664\u4e0d\u9700\u8981\u7684\u61c9\u7528\u7a0b\u5f0f\u3001\u7167\u7247\u6216\u5f71\u7247\uff0c\u4ee5\u7a7a\u51fa\u66f4\u591a\u7a7a\u9593\u3002",
          "msgbox.alert.resolution.apply":
            "LINE\u9808\u91cd\u65b0\u555f\u52d5\uff0c\u624d\u80fd\u914d\u5408\u65b0\u7684\u87a2\u5e55\u89e3\u6790\u5ea6\u8abf\u6574\u986f\u793a\u3002\u78ba\u5b9a\u8981\u91cd\u65b0\u555f\u52d5\u55ce\uff1f",
          "msgbox.btn.block": "\u5c01\u9396",
          "msgbox.btn.buddy.title":
            "\u78ba\u8a8d\u65b0\u52a0\u5165\u7684\u597d\u53cb",
          "msgbox.btn.cancel.title": "\u53d6\u6d88",
          "msgbox.btn.cancelInvite.no": "\u5426",
          "msgbox.btn.cancelInvite.yes": "\u662f",
          "msgbox.btn.close.title": "\u95dc\u9589",
          "msgbox.btn.delete": "\u522a\u9664",
          "msgbox.btn.download.title": "\u4e0b\u8f09",
          "msgbox.btn.fileOpen": "\u958b\u555f\u6a94\u6848",
          "msgbox.btn.gotosettings": "\u524d\u5f80\u8a2d\u5b9a",
          "msgbox.btn.hide": "\u96b1\u85cf",
          "msgbox.btn.install.title": "\u4e0b\u8f09",
          "msgbox.btn.later.title": "\u7a0d\u5f8c\u8a2d\u5b9a",
          "msgbox.btn.leave.1.n": "\u9000\u51fa",
          "msgbox.btn.leave.group": "\u96e2\u958b",
          "msgbox.btn.lock.enable": "\u9396\u5b9a",
          "msgbox.btn.lock.start": "\u9396\u5b9a",
          "msgbox.btn.no.title": "\u53d6\u6d88",
          "msgbox.btn.nocancel.title": "\u53d6\u6d88",
          "msgbox.btn.ok.title": "\u78ba\u5b9a",
          "msgbox.btn.post.title": "\u8cbc\u6587",
          "msgbox.btn.qrcode.title":
            "\u4f7f\u7528\u884c\u52d5\u689d\u78bc\u767b\u5165",
          "msgbox.btn.quit.title": "\u78ba\u5b9a",
          "msgbox.btn.remove": "\u522a\u9664",
          "msgbox.btn.restart": "\u91cd\u65b0\u555f\u52d5",
          "msgbox.btn.retry.title": "\u518d\u8a66\u4e00\u6b21",
          "msgbox.btn.send": "\u50b3\u9001",
          "msgbox.btn.sendkey.title": "\u8a2d\u5b9a",
          "msgbox.btn.sendshare": "\u50b3\u9001",
          "msgbox.btn.unsend": "\u6536\u56de",
          "msgbox.btn.update.title": "\u7acb\u5373\u66f4\u65b0",
          "msgbox.btn.use": "\u540c\u610f",
          "msgbox.btn.yes.title": "\u78ba\u5b9a",
          "msgbox.btn.yescontinue.title": "\u78ba\u5b9a",
          "msgbox.btn.yesleave.title": "\u96e2\u958b",
          "msgbox.desc.seemore": "\u77ad\u89e3\u66f4\u591a",
          "msgbox.error.request.popup.desc":
            "\u767c\u751f\u66ab\u6642\u6027\u932f\u8aa4\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "needqr.login.button.label": "\u884c\u52d5\u689d\u78bc\u767b\u5165",
          "needqr.title.content1":
            "\u70ba\u9632\u6b62\u60a8\u7684\u5e33\u865f\u906d\u5230\u6709\u5fc3\u4eba\u58eb\u60e1\u7528\uff0c\n\u7576\u60a8\u9996\u6b21\u5728\u5225\u53f0\u88dd\u7f6e\u4e0a\u767b\u5165\u96fb\u8166\u7248\u6642\uff0c\u7cfb\u7d71\u5c07\u6703\u8981\u6c42\u60a8\u4ee5\u884c\u52d5\u689d\u78bc\u767b\u5165\u3002",
          "needqr.title.label":
            "\u8acb\u4ee5\u884c\u52d5\u689d\u78bc\u767b\u5165\uff01",
          "note.save.comfirm.desc":
            "\u78ba\u5b9a\u8981\u5132\u5b58\u81f3[%1]\u7684\u8a18\u4e8b\u672c\u55ce\uff1f",
          "notificationcenter.timeslot.earlier": "\u66f4\u65e9",
          "notificationcenter.timeslot.recent": "\u6700\u8fd1",
          "notificationcenter.title": "\u65b0\u8a0a\u606f",
          "nx.textbox.copy": "\u8907\u88fd",
          "nx.textbox.paste": "\u8cbc\u4e0a",
          "nx.textbox.selectall": "\u5168\u9078",
          "oa.profile.desc.region.notselected": "\u672a\u78ba\u8a8d",
          "oa.profile.investmentfraud":
            "\u8acb\u7559\u610f\u804a\u5929\u5ba4\u4e2d\u6f5b\u5728\u7684\u8a50\u9a19\u884c\u70ba\u3002",
          "ocr.policy.agree.btn": "\u540c\u610f",
          "ocr.policy.disagree.btn": "\u4e0d\u540c\u610f",
          "ocr.progress.desc.scan":
            "\u6b63\u5728\u8fa8\u8b58\u6587\u5b57\u2026",
          "ocr.progress.desc.translate": "\u7ffb\u8b6f\u4e2d\u2026",
          "openchat.allthreads.desc.nothreads":
            "\u6b64\u793e\u7fa4\u4e2d\u5efa\u7acb\u7684\u6240\u6709\u8a0e\u8ad6\u4e32\u5c07\u986f\u793a\u65bc\u6b64\u3002",
          "openchat.allthreads.title.nothreads":
            "\u6b64\u793e\u7fa4\u4e2d\u5c1a\u7121\u4efb\u4f55\u8a0e\u8ad6\u4e32",
          "openchat.chatlist.popup.deletechat":
            "\u78ba\u5b9a\u8981\u81ea\u804a\u5929\u5217\u8868\u522a\u9664\u6b64\u804a\u5929\u5ba4\u55ce\uff1f\u793e\u7fa4\u7684\u804a\u5929\u5ba4\u5217\u8868\u4e2d\u6b64\u804a\u5929\u5ba4\u5c07\u4e0d\u6703\u88ab\u522a\u9664\u3002",
          "openchat.chatlist.popup.hidechat":
            "\u78ba\u5b9a\u8981\u81ea\u804a\u5929\u5217\u8868\u96b1\u85cf\u6b64\u804a\u5929\u5ba4\u55ce\uff1f\u793e\u7fa4\u7684\u804a\u5929\u5ba4\u5217\u8868\u4e2d\u4ecd\u5c07\u986f\u793a\u6b64\u804a\u5929\u5ba4\u3002",
          "openchat.favoritethreads.title.nothreads":
            "\u5c1a\u7121\u6700\u611b\u7684\u8a0e\u8ad6\u4e32",
          "openchat.hidemessages.desc.hidethismember":
            "\u78ba\u5b9a\u8981\u96b1\u85cf\u6b64\u6210\u54e1\u4eca\u5f8c\u50b3\u9001\u7684\u8a0a\u606f\u55ce\uff1f\u8a0a\u606f\u5c07\u5728\u6b64\u793e\u7fa4\u53ca\u5176\u804a\u5929\u5ba4\u4e2d\u96b1\u85cf\uff0c\u8a72\u6210\u54e1\u81f3\u4eca\u50b3\u9001\u7684\u8a0a\u606f\u5c07\u4e0d\u6703\u88ab\u96b1\u85cf\u3002",
          "openchat.hidemessages.desc.maximumhide":
            "\u5df2\u9054\u53ef\u96b1\u85cf\u8a0a\u606f\u7684\u6210\u54e1\u6578\u4e0a\u9650\u3002\u8acb\u900f\u904e\u5176\u4ed6\u6210\u54e1\u7684\u500b\u4eba\u6a94\u6848\u89e3\u9664\u96b1\u85cf\u8a0a\u606f\u5f8c\uff0c\u518d\u8a66\u4e00\u6b21\u3002",
          "openchat.hidemessages.desc.messageshidden":
            "\u5c07\u4e0d\u518d\u986f\u793a\u6b64\u6210\u54e1\u4eca\u5f8c\u50b3\u9001\u7684\u8a0a\u606f\u3002\u53ef\u900f\u904e\u8a72\u6210\u54e1\u7684\u500b\u4eba\u6a94\u6848\u89e3\u9664\u96b1\u85cf\u8a0a\u606f\u3002",
          "openchat.join.button.requestjoin": "\u7533\u8acb\u52a0\u5165",
          "openchat.linkpopup.desc.donotshowformonth":
            "1\u500b\u6708\u5167\u4e0d\u518d\u986f\u793a",
          "openchat.readallthreads.desc.markallasread":
            "\u78ba\u5b9a\u8981\u5c07\u6240\u6709\u8a0e\u8ad6\u4e32\u8a0a\u606f\u6a19\u70ba\u5df2\u8b80\u55ce\uff1f",
          "openchat.settings.desc.mentioneveryone":
            "\u6a19\u8a3b\u6240\u6709\u4eba\uff08@All\uff09",
          "openchat.thread.desc.fewerthan10":
            "\u5c11\u65bc10\u5247\u8a0a\u606f",
          "openchat.thread.desc.sendafiletothread":
            "\u50b3\u9001\u6a94\u6848\u81f3\u8a0e\u8ad6\u4e32",
          "openchat.thread.desc.updateline":
            "\u66f4\u65b0LINE\u5f8c\u5373\u53ef\u78ba\u8a8d\u6b64\u8a0a\u606f",
          "openchat.thread.placeholder.expired":
            "\u7121\u6cd5\u50b3\u9001\u8a0a\u606f\u81f3\u904e\u671f\u7684\u8a0e\u8ad6\u4e32",
          "openchat.thread.tooltip.yourthreadicon":
            "\u53ef\u67e5\u770b\u6b64\u793e\u7fa4\u4e2d\u7684\u6240\u6709\u8a0e\u8ad6\u4e32\u53ca\u6211\u7684\u6700\u611b\u8a0e\u8ad6\u4e32\u3002",
          "openchat.threadpopup.desc.expired":
            "\u6b64\u8a0e\u8ad6\u4e32\u5df2\u904e\u671f\uff0c\u56e0\u6b64\u7121\u6cd5\u65b0\u589e\u6216\u79fb\u9664\u3002",
          "openchat.threadpopup.desc.expirederror":
            "\u6b64\u8a0e\u8ad6\u4e32\u5df2\u904e\u671f\u3002",
          "openchat.threadpopup.desc.unsupported":
            "\u542b\u8a0e\u8ad6\u4e32\u529f\u80fd\u4e0d\u652f\u63f4\u7684\u6a94\u6848\u683c\u5f0f\u3002",
          "openchat.threads.button.readall":
            "\u5168\u90e8\u6a19\u70ba\u5df2\u8b80",
          "openchat.threads.button.seemessages": "\u67e5\u770b\u8a0a\u606f",
          "openchat.threads.tab.all": "\u5168\u90e8",
          "openchat.threads.tab.favorites": "\u6211\u7684\u6700\u611b",
          "openchat.threads.title.threads": "\u8a0e\u8ad6\u4e32",
          "openchat.threads.tooltip.messagewontsend":
            "\u8a0e\u8ad6\u4e32\u5167\u7684\u8a0a\u606f\u5c07\u4e0d\u6703\u986f\u793a\u65bc\u804a\u5929\u5ba4\u3002",
          "openchat.threadspopup.button.cancel": "\u53d6\u6d88",
          "openchat.threadspopup.button.delete": "\u522a\u9664",
          "openchat.threadspopup.button.unsend": "\u6536\u56de",
          "openchat.threadspopup.desc.deleterootmessage":
            "\u522a\u9664\u6b64\u8a0a\u606f\u5c07\u4e00\u4f75\u522a\u9664\u6240\u6709\u6210\u54e1\u7684\u8a0e\u8ad6\u4e32\u8a0a\u606f\u3002",
          "openchat.threadspopup.desc.unsendrootmessage":
            "\u6536\u56de\u6b64\u8a0a\u606f\u5c07\u4e00\u4f75\u522a\u9664\u6240\u6709\u6210\u54e1\u7684\u8a0e\u8ad6\u4e32\u8a0a\u606f\u3002",
          "openchat.threadspopup.title.deleterootmessage":
            "\u78ba\u5b9a\u8981\u522a\u9664\u6b64\u8a0a\u606f\u55ce\uff1f",
          "openchat.threadspopup.title.unsendrootmessage":
            "\u78ba\u5b9a\u8981\u6536\u56de\u6b64\u8a0a\u606f\u55ce\uff1f",
          "openchat.unhidemessages.desc.unhidden":
            "\u5c07\u986f\u793a\u6b64\u6210\u54e1\u4eca\u5f8c\u50b3\u9001\u7684\u8a0a\u606f\u3002",
          "openchat.unhidemessages.desc.unhide":
            "\u78ba\u5b9a\u8981\u89e3\u9664\u96b1\u85cf\u6b64\u6210\u54e1\u4eca\u5f8c\u50b3\u9001\u7684\u8a0a\u606f\u55ce\uff1f\u81f3\u4eca\u6240\u96b1\u85cf\u7684\u8a0a\u606f\u7121\u6cd5\u986f\u793a\u3002",
          "openchat.userprofile.button.hidemessages":
            "\u96b1\u85cf\u8a0a\u606f",
          "openchat.userprofile.button.unhidemessages":
            "\u89e3\u9664\u96b1\u85cf\u8a0a\u606f",
          "openchat.yourthread.button.seemessages": "\u67e5\u770b\u8a0a\u606f",
          "openchat.yourthread.desc.fewerthan10":
            "\u5c11\u65bc10\u5247\u8a0a\u606f",
          "openchat.yourthreads.button.readmore":
            "\u77ad\u89e3\u66f4\u591a\u8a0e\u8ad6\u4e32\u8a73\u60c5",
          "openchat.yourthreads.desc.newthreadmessages":
            "\u65b0\u8a0e\u8ad6\u4e32\u8a0a\u606f",
          "openchat.yourthreads.desc.photosent":
            "\u5716\u7247\u5df2\u50b3\u9001\u3002",
          "openchat.yourthreads.desc.stickersent":
            "\u8cbc\u5716\u5df2\u50b3\u9001\u3002",
          "openchat.yourthreads.desc.videosent":
            "\u5f71\u7247\u5df2\u50b3\u9001\u3002",
          "openchat.yourthreads.desc.vmsent":
            "\u8a9e\u97f3\u8a0a\u606f\u5df2\u50b3\u9001\u3002",
          "openchat.yourthreads.title.messageunavailable":
            "\u7121\u6cd5\u986f\u793a\u8a0a\u606f",
          "openchat.yourthreadspopup.button.ok": "\u78ba\u5b9a",
          "openchat.yourthreadspopup.desc.threaddeleted":
            "\u6b64\u8a0e\u8ad6\u4e32\u5df2\u88ab\u522a\u9664\u3002",
          "os.msgbox.btn.gotosettings": "\u7cfb\u7d71\u504f\u597d\u8a2d\u5b9a",
          "pl.square.setting.tooltip":
            "\u60a8\u53ef\u4ee5\u6307\u5b9a\u80fd\u5728\u793e\u5718\u4e2d\u5efa\u7acb\u8207\u522a\u9664\u6295\u7968\u7684\u4eba\u3002",
          "poll.create.title": "\u5efa\u7acb\u65b0\u6295\u7968",
          "poll.edit.title": "\u7de8\u8f2f\u6295\u7968\u5167\u5bb9",
          "poll.main.title": "\u6295\u7968",
          "poll.ongoing.title": "\u6295\u7968",
          "poll.result.title": "\u6295\u7968\u7d50\u679c",
          "poll.votedcount.title": "%1 (%2)",
          "popup.plugin.failed.retry":
            "\u4e0b\u8f09\u5931\u6557\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "power.label.tootip": "\u95dc\u9589LINE",
          "profile.btn.chat.tooltip": "\u804a\u5929",
          "profile.btn.home.tooltip": "\u4e3b\u9801",
          "profile.btn.recommend.tooltip": "\u63a8\u85a6",
          "profile.button.investmentfraudwarning":
            "\u8acb\u7559\u610f\u804a\u5929\u5ba4\u4e2d\u6f5b\u5728\u7684\u8a50\u9a19\u884c\u70ba\u3002",
          "profile.delete": "\u522a\u9664\u500b\u4eba\u6a94\u6848",
          "profile.desc.birthday": "M\u6708d\u65e5",
          "profile.desc.onediting":
            "\u78ba\u5b9a\u8981\u96e2\u958b\u6b64\u756b\u9762\u55ce\uff1f\u7de8\u8f2f\u7684\u5167\u5bb9\u5c07\u88ab\u6368\u68c4\u3002",
          "profile.desc.timelineposts": "LINE VOOM\u8cbc\u6587",
          "profile.edit.background.color":
            "\u9078\u64c7\u80cc\u666f\u984f\u8272",
          "profile.edit.font.color": "\u9078\u64c7\u5b57\u578b\u984f\u8272",
          "profile.edit.placeholder": "\u8f38\u5165\u6587\u5b57",
          "profile.friendsnameedit.desc.namesetbyfriend":
            "\u597d\u53cb\u8a2d\u5b9a\u7684\u540d\u7a31\uff1a%1",
          "profile.popup.report": "\u6aa2\u8209",
          "profile.seemoremenu.button.block": "\u5c01\u9396",
          "profile.select.capture": "\u622a\u53d6\u756b\u9762",
          "profile.select.default":
            "\u5f9e\u9810\u8a2d\u5716\u7247\u4e2d\u9078\u64c7",
          "profile.select.local": "\u5f9e\u96fb\u8166\u4e2d\u9078\u64c7",
          "profile.select.text": "\u7d14\u6587\u5b57\u500b\u4eba\u5716\u7247",
          "profile.socialprofile.menutitle.editprofile":
            "\u500b\u4eba\u6a94\u6848\u8a2d\u5b9a",
          "registration.btn.label.resendPin": "\u91cd\u50b3\u8a8d\u8b49\u78bc",
          "registration.btn.message.resendPin":
            "\u5df2\u91cd\u50b3\u8a8d\u8b49\u78bc\u3002",
          "registration.check.age.ageVerification.body":
            "\u8acb\u5148\u8a8d\u8b49\u60a8\u7684\u5e74\u9f61\uff0c\u624d\u53ef\u4f7f\u7528\u6b64\u529f\u80fd\u3002\n\u8acb\u958b\u555fLINE\u61c9\u7528\u7a0b\u5f0f\uff0c\u4e26\u4f9d\u5e8f\u9ede\u9078\u300c\u8a2d\u5b9a\u300d\uff1e\u300c\u5e74\u9f61\u78ba\u8a8d\u300d\u9032\u884c\u8a8d\u8b49\u3002",
          "registration.check.age.ageVerification.title":
            "\u5e74\u9f61\u78ba\u8a8d",
          "registration.check.age.ageunder.body":
            "\u53ea\u6709\u5b8c\u6210\u5e74\u9f61\u78ba\u8a8d\u768418\u6b72\u4ee5\u4e0a\u7528\u6236\uff0c\u624d\u80fd\u4f7f\u7528\u672c\u529f\u80fd\u3002",
          "registration.check.age.error.loadUrl":
            "\u7121\u6cd5\u9023\u7dda\uff0c\u8acb\u78ba\u8a8d\u7db2\u8def\u9023\u7dda\u72c0\u614b\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "registration.check.age.error.retrieveRequest":
            "\u57f7\u884c\u5e74\u9f61\u78ba\u8a8d\u7a0b\u5e8f\u6642\u767c\u751f\u932f\u8aa4\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "registration.check.age.underAge":
            "\u8acb\u5728LINE\u61c9\u7528\u7a0b\u5f0f\u4e0a\u8a8d\u8b49\u60a8\u5df2\u5e74\u6eff18\u6b72\uff0c\u624d\u80fd\u4f7f\u7528\u672c\u641c\u5c0b\u529f\u80fd\uff0c\u6216\u8acb\u900f\u904eLINE\u61c9\u7528\u7a0b\u5f0f\u6383\u63cf\u884c\u52d5\u689d\u78bc\u4f86\u52a0\u597d\u53cb\u3002",
          "registration.code.phone.call":
            "\u4f7f\u7528\u96fb\u8a71\u8a8d\u8b49",
          "registration.code.phone.guide":
            "\u8a8d\u8b49\u78bc\u5c07\u4ee5\u96fb\u8a71\u5411\u60a8\u901a\u77e5\u3002\n\u63d0\u9192\u60a8\uff1a\u4f86\u96fb\u865f\u78bc\u53ef\u80fd\u7121\u6cd5\u986f\u793a\uff1b\u4f9d\u64da\u60a8\u7684\u8cbb\u7387\u65b9\u6848\uff0c\n\u60a8\u6709\u53ef\u80fd\u9808\u652f\u4ed8\u901a\u8a71\u8cbb\u7528\u3002\n",
          "registration.code.sms.resent.guide":
            "\u60a8\u53ef\u4ee5\u5728%1\u5206%2\u79d2\u5f8c\u7533\u8acb\u65b0\u7684\u8a8d\u8b49\u78bc\u3002\n",
          "registration.common.next": "\u4e0b\u4e00\u6b65",
          "registration.common.underIE8.alert":
            "\u9700\u8981\u4f7f\u7528Internet Explorer 8\u4ee5\u4e0a\u7248\u672c\u624d\u80fd\u8a3b\u518a\u3002\n\u8acb\u66f4\u65b0Internet Explorer\u6216\u4f7f\u7528\u884c\u52d5\u88dd\u7f6e\u8a3b\u518a\u3002",
          "reply.doubleclick.toast":
            "\u6309\u5169\u4e0b\u8a0a\u606f\u5373\u53ef\u56de\u8986 ",
          "reply.error.toast": "\u627e\u4e0d\u5230\u539f\u59cb\u8a0a\u606f",
          "reply.goto.replied": "\u8df3\u81f3\u5148\u524d\u7684\u8a0a\u606f",
          "reply.no.original.message":
            "\uff08\u7121\u6cd5\u8b80\u53d6\u539f\u59cb\u8a0a\u606f\uff09",
          "reply.unknown.user": "\u4e0d\u660e\u7684\u7528\u6236",
          "report.btn.agreeandsend": "\u540c\u610f\u4e26\u50b3\u9001",
          "report.btn.agreeandsend.thpdpa": "\u627f\u8a8d\u4e26\u9001\u51fa",
          "report.confirm.groupinvitation":
            "\u6aa2\u8209\u9080\u8acb\u60a8\u9032\u5165\u7fa4\u7d44\u804a\u5929\u5ba4\u7684\u7528\u6236\u5f8c\uff0c\u8a72\u804a\u5929\u5ba4\u7684\u8cc7\u6599\u5c07\u6703\u50b3\u9001\u7d66LINE\u3002",
          "report.desc.reason":
            "\u8acb\u9078\u64c7\u6aa2\u8209\u7406\u7531\u3002",
          "report.desc.title": "\u6aa2\u8209",
          "report.done": "\u6aa2\u8209\u8a0a\u606f\u5df2\u50b3\u9001",
          "report.done.suggestBlock":
            "\u5df2\u6aa2\u8209\u3002\n\u8981\u5c01\u9396\u6b64\u7528\u6236\u55ce\uff1f",
          "report.done.suggestBlock.groupinvitation":
            "\u78ba\u5b9a\u8981\u5c01\u9396%1\u55ce\uff1f",
          "report.note.subTitle":
            "\u6aa2\u8209\u6b64\u5247\u8cbc\u6587\n\uff08\u8cbc\u6587\u8005\uff1a%1\uff09",
          "report.popupbutton.impersonation.decline": "\u7565\u904e",
          "report.popupbutton.impersonation.proceed": "\u524d\u5f80",
          "report.reason.Other": "\u5176\u4ed6",
          "report.reason.gender": "\u50b3\u9001\u8272\u60c5\u8a0a\u606f",
          "report.reason.harrassment": "\u9a12\u64fe\u884c\u70ba",
          "report.reason.impersonation": "\u5047\u5192\u4ed6\u4eba",
          "report.reason.impersonation.inquirypopup":
            "\u70ba\u4e86\u8a73\u7d30\u8abf\u67e5\u5047\u5192\u4ed6\u4eba\u7684\u72c0\u6cc1\uff0c\u8acb\u524d\u5f80\u300c\u8207\u6211\u5011\u806f\u7d61\u300d\u63d0\u4f9b\u76f8\u95dc\u8cc7\u8a0a\uff0c\u4ee5\u5354\u52a9\u6211\u5011\u9032\u884c\u8abf\u67e5\u3002",
          "report.reason.scam": "\u8a50\u9a19",
          "report.reason.spam": "\u6feb\u767c\u5ee3\u544a\u8a0a\u606f",
          "requireinvite.popup.button.cancel": "\u5426",
          "requireinvite.popup.button.confirmon": "\u662f",
          "requireinvite.popup.desc.onewaywarning":
            "\u6b64\u8a2d\u5b9a\u4e00\u7d93\u958b\u555f\uff0c\u5373\u6c38\u4e45\u7121\u6cd5\u95dc\u9589\u3002",
          "requireinvite.popup.title.onewaywarning":
            "\u958b\u555f\u300c\u6536\u5230\u9080\u8acb\u624d\u53ef\u52a0\u5165\u300d\u8a2d\u5b9a\uff1f",
          "requireinvite.toggle.desc":
            "\u53ea\u6709\u6536\u5230\u7fa4\u7d44\u6210\u54e1\u9080\u8acb\u7684\u7528\u6236\u624d\u80fd\u52a0\u5165\u7fa4\u7d44\u3002",
          "requireinvite.toggle.title":
            "\u6536\u5230\u9080\u8acb\u624d\u53ef\u52a0\u5165",
          "screen.desc.need.os.recordscreen":
            "\u8acb\u5148\u5141\u8a31LINE\u53d6\u7528\u87a2\u5e55\u9304\u88fd\u529f\u80fd\u7684\u6b0a\u9650\uff0c\u624d\u80fd\u622a\u5716\u4ee5\u53ca\u5728\u8996\u8a0a\u901a\u8a71\u6642\u5206\u4eab\u87a2\u5e55\u756b\u9762\u3002",
          "screenshare.desc.need.os.recordscreen":
            "\u7121\u6cd5\u5206\u4eab\u622a\u5716\uff0c\u8acb\u5148\u5141\u8a31LINE\u53d6\u7528\u87a2\u5e55\u9304\u88fd\u529f\u80fd\u7684\u6b0a\u9650\u3002",
          "screenshare.ongoing.error":
            "\u5206\u4eab\u87a2\u5e55\u756b\u9762\u6642\uff0c\u7121\u6cd5\u4f7f\u7528\u6b64\u529f\u80fd\u3002",
          "screenshare.ongoing.user":
            "\u6b63\u5728\u5206\u4eab\u87a2\u5e55\u756b\u9762",
          "search.defaultView.doYouRemoveAllRecentSearchKeywords":
            "\u8981\u6e05\u9664\u6240\u6709\u6700\u8fd1\u641c\u5c0b\u7684\u5167\u5bb9\u55ce\uff1f",
          "search.defaultView.doYouUseSaveSearchKeyword":
            "\u8981\u555f\u7528\u300c\u6700\u8fd1\u641c\u5c0b\u300d\u529f\u80fd\u55ce\uff1f",
          "search.defaultView.dontYouUseSaveSearchKeyword":
            "\u8981\u505c\u7528\u300c\u6700\u8fd1\u641c\u5c0b\u300d\u529f\u80fd\u55ce\uff1f",
          "search.defaultView.offSaveSearchKeyword":
            "\u505c\u7528\u81ea\u52d5\u5132\u5b58",
          "search.defaultView.onSaveSearchKeyword":
            "\u555f\u7528\u81ea\u52d5\u5132\u5b58",
          "search.defaultView.recentSearchKeyword": "\u6700\u8fd1\u641c\u5c0b",
          "search.defaultView.recentSearchKeywordEmpty":
            "\u6c92\u6709\u6700\u8fd1\u7684\u641c\u5c0b\u8a18\u9304\u3002",
          "search.defaultView.removeAllRecentSearchKeywords":
            "\u5168\u90e8\u6e05\u9664",
          "search.defaultView.saveSearchKeywordOff":
            "\u300c\u6700\u8fd1\u641c\u5c0b\u300d\u529f\u80fd\u5df2\u505c\u7528\u3002",
          "select.video.error.ratio":
            "\u6b64\u5f71\u7247\u7684\u6bd4\u4f8b\u4e0d\u53ef\u4f5c\u70ba\u52d5\u614b\u500b\u4eba\u5716\u7247\u3002",
          "service.download.done.popup.desc": "\u4e0b\u8f09\u5b8c\u7562\u3002",
          "service.download.inprogress.popup.desc":
            "\u6b63\u5728\u4e0b\u8f09%1\u2026\n",
          "service.install.device.done.popup.desc":
            "\u5b89\u88dd\u5b8c\u7562\u3002",
          "service.install.device.popup.desc":
            "\u6b63\u5728\u5b89\u88dd%1\u2026\n",
          "service.install.popup.desc":
            "\u8acb\u5148\u4e0b\u8f09\u4e26\u5b89\u88dd%2\uff0c\u624d\u80fd\u4f7f\u7528%1\u529f\u80fd\u3002\u7acb\u5373\u4e0b\u8f09\uff1f",
          "setting.advancedSetting": "\u9032\u968e\u8a2d\u5b9a",
          "setting.advancedSetting.proxy.apply": "\u5957\u7528",
          "setting.advancedSetting.proxy.apply.disabled":
            "\u4ee3\u7406\u4f3a\u670d\u5668\u8a2d\u5b9a\u5df1\u505c\u7528\u3002",
          "setting.advancedSetting.proxy.apply.enabled":
            "\u5df2\u555f\u7528\u4ee3\u7406\u4f3a\u670d\u5668\u8a2d\u5b9a\u3002",
          "setting.advancedSetting.proxy.check":
            "\u78ba\u8a8d\u4ee3\u7406\u4f3a\u670d\u5668",
          "setting.advancedSetting.proxy.complete":
            "\u4ee3\u7406\u4f3a\u670d\u5668\u53ef\u4f7f\u7528\u3002",
          "setting.advancedSetting.proxy.connect.check":
            "\u6b63\u5728\u900f\u904e\u4ee3\u7406\u4f3a\u670d\u5668\u6e2c\u8a66\u9023\u7dda\u2026",
          "setting.advancedSetting.proxy.fail":
            "\u7121\u6cd5\u900f\u904e\u4ee3\u7406\u4f3a\u670d\u5668\u9023\u7dda\u3002\n\u8acb\u78ba\u8a8d\u60a8\u7684\u4ee3\u7406\u4f3a\u670d\u5668\u8a2d\u5b9a\u4e26\u518d\u8a66\u4e00\u6b21\u3002",
          "setting.advancedSetting.proxy.fail.protocol":
            "\u4ee3\u7406\u4f3a\u670d\u5668\u901a\u8a0a\u5354\u5b9a\u932f\u8aa4\uff1a%1",
          "setting.advancedSetting.proxy.fail.verifyUser":
            "\u7121\u6cd5\u8a8d\u8b49\u7528\u6236\u3002",
          "setting.advancedSetting.proxy.host": "\u4e3b\u6a5f",
          "setting.advancedSetting.proxy.port": "\u9023\u63a5\u57e0",
          "setting.advancedSetting.proxy.protocol": "\u901a\u8a0a\u5354\u5b9a",
          "setting.advancedSetting.proxy.protocol.check":
            "\u6b63\u5728\u78ba\u8a8d\u901a\u8a0a\u5354\u5b9a\u2026",
          "setting.advancedSetting.proxy.responseTime":
            "\uff08\u7b49\u5f85\u6642\u9593\uff1a%1\u6beb\u79d2\uff09",
          "setting.advancedSetting.proxy.server": "\u4f3a\u670d\u5668",
          "setting.advancedSetting.proxy.server.check":
            "\u6b63\u5728\u78ba\u8a8d\u4ee3\u7406\u4f3a\u670d\u5668\u2026",
          "setting.advancedSetting.proxy.title":
            "\u4ee3\u7406\u4f3a\u670d\u5668",
          "setting.advancedSetting.proxy.use":
            "\u555f\u7528\u4ee3\u7406\u4f3a\u670d\u5668",
          "setting.advancedSetting.proxy.verification":
            "\u555f\u7528\u4ee3\u7406\u4f3a\u670d\u5668\u8a8d\u8b49",
          "setting.advancedSetting.proxy.verification.id":
            "\u7528\u6236\u540d\u7a31",
          "setting.advancedSetting.proxy.verification.pw": "\u5bc6\u78bc",
          "setting.advancedSetting.sync": "\u540c\u6b65",
          "setting.advancedSetting.sync.completed":
            "\u8cc7\u6599\u5df2\u540c\u6b65\u3002",
          "setting.advancedSetting.sync.desc":
            "\u5c07\u60a8\u7684\u597d\u53cb\u8207\u804a\u5929\u5217\u8868\u540c\u6b65\u70ba\u6700\u65b0\u72c0\u614b\u3002",
          "setting.advancedSetting.sync.error.interval":
            "LINE\u5c07\u6bcf%1\u5206\u9418\u540c\u6b65\u4e00\u6b21\u60a8\u7684\u8cc7\u6599\u3002\n\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "setting.advancedSetting.sync.error.network":
            "\u56e0\u7db2\u8def\u9023\u7dda\u767c\u751f\u554f\u984c\uff0c\u76ee\u524d\u7121\u6cd5\u9032\u884c\u540c\u6b65\u3002\n\u8acb\u78ba\u8a8d\u7db2\u8def\u9023\u7dda\u72c0\u614b\u3002",
          "setting.advancedSetting.sync.inprogress":
            "\u540c\u6b65\u4e2d\u2026\n\u8acb\u7a0d\u5019\u3002",
          "setting.advancedSetting.sync.time": "yyyy.M.d %1 h:mm",
          "setting.advancedSetting.sync.title": "\u540c\u6b65\u8cc7\u6599",
          "setting.alarm.name": "\u63d0\u9192\u9234\u8072%1",
          "setting.basic.font.apply.alert":
            "LINE\u9808\u91cd\u65b0\u555f\u52d5\uff0c\u624d\u80fd\u8b8a\u66f4\u5b57\u9ad4\u3002\u78ba\u5b9a\u8981\u91cd\u65b0\u555f\u52d5LINE\u55ce\uff1f",
          "setting.basic.heading.language": "\u8a9e\u8a00",
          "setting.basic.language.apply.alert":
            "LINE\u9808\u91cd\u65b0\u555f\u52d5\uff0c\u624d\u80fd\u8b8a\u66f4\u8a9e\u8a00\u8a2d\u5b9a\u3002\u78ba\u5b9a\u8981\u91cd\u65b0\u555f\u52d5LINE\u55ce\uff1f",
          "setting.basic.language.apply.desc":
            "\u8a2d\u5b9a\u5167\u5bb9\u5c07\u65bc\u91cd\u65b0\u555f\u52d5\u7a0b\u5f0f\u5f8c\u53cd\u6620",
          "setting.basic.language.apply.no": "\u7a0d\u5f8c\u8b8a\u66f4",
          "setting.basic.language.apply.yes": "\u7acb\u523b\u8b8a\u66f4",
          "setting.btn.select.folder": "\u9078\u64c7",
          "setting.btn.submit": "\u78ba\u5b9a",
          "setting.call.blur": "\u80cc\u666f\u7279\u6548",
          "setting.call.call.incomingnoti":
            "\u4f86\u96fb\u6642\u65bc\u63d0\u9192\u986f\u793a",
          "setting.call.camera": "\u76f8\u6a5f",
          "setting.call.defaultMike": "\u4f7f\u7528\u7cfb\u7d71\u8a2d\u5b9a",
          "setting.call.defaultSpeaker": "\u4f7f\u7528\u7cfb\u7d71\u8a2d\u5b9a",
          "setting.call.desc.deviceloading":
            "\u6b63\u5728\u8b80\u53d6\u88dd\u7f6e\u2026\u2026",
          "setting.call.ducking":
            "\u8abf\u4f4e\u5176\u4ed6\u61c9\u7528\u7a0b\u5f0f\u7684\u97f3\u91cf",
          "setting.call.grouphd":
            "\u9ad8\u756b\u8cea\u7fa4\u7d44\u8996\u8a0a\u901a\u8a71",
          "setting.call.grouphd.desc":
            "\u53ef\u4ee5\u9ad8\u756b\u8cea\u5f71\u50cf\u9032\u884c\u7fa4\u7d44\u8996\u8a0a\u901a\u8a71\uff0c\u4f46\u540c\u6642\u6703\u589e\u52a0\u8655\u7406\u5668\u53ca\u8a18\u61b6\u9ad4\u4f7f\u7528\u91cf\u3002",
          "setting.call.grouphd.desc.forwin":
            "\u4f7f\u7528\u88dd\u7f6e\u5167\u90e8\u7684\u8996\u8a0a\u8f49\u78bc\u5668\uff0c\u5c07\u53ef\u4ee5\u9ad8\u756b\u8cea\u5f71\u50cf\u9032\u884c\u7fa4\u7d44\u8996\u8a0a\u901a\u8a71\uff0c\u4f46\u540c\u6642\u6703\u589e\u52a0\u8655\u7406\u5668\u53ca\u8a18\u61b6\u9ad4\u4f7f\u7528\u91cf\u3002",
          "setting.call.handsfreebtinfo.desc":
            "\u82e5\u7121\u6cd5\u4f7f\u7528\u540c\u6642\u5177\u6709\u9ea5\u514b\u98a8\u53ca\u64f4\u97f3\u5668\u529f\u80fd\u7684\u85cd\u82bd\u88dd\u7f6e\uff0c\u8acb\u5617\u8a66\u5c07\u9ea5\u514b\u98a8\u53ca\u64f4\u97f3\u5668\u8a2d\u70ba\u76f8\u540c\u88dd\u7f6e\u3002",
          "setting.call.label.duckingGuide":
            "\u62d6\u66f3\u6b64\u8abf\u7bc0\u5668\u5373\u53ef\u8abf\u4f4e\u901a\u8a71\u4e2d\u5176\u4ed6\u61c9\u7528\u7a0b\u5f0f\u7684\u97f3\u91cf\u3002\u82e5\u8abf\u7bc0\u81f3100%\uff0c\u5176\u4ed6\u61c9\u7528\u7a0b\u5f0f\u5c07\u8f49\u70ba\u975c\u97f3\u3002",
          "setting.call.mic.desc.noisecancelinglight":
            "\u6d88\u9664\u80cc\u666f\u97f3\u6a02\u3001\u96fb\u8166\u98a8\u6247\u7b49\u566a\u97f3\u3002",
          "setting.call.mic.desc.noisecancelingstrong":
            "\u6d88\u9664\u9375\u76e4\u6253\u5b57\u8072\u6216\u72d7\u5420\u8072\u7b49\u566a\u97f3\u3002",
          "setting.call.mic.echocancelling": "\u6d88\u9664\u56de\u97f3",
          "setting.call.mic.echocancelling.desc":
            "\u79fb\u9664\u97f3\u8a0a\u88dd\u7f6e\u9020\u6210\u7684\u4efb\u4f55\u56de\u97f3\uff0c\u8b93\u901a\u8a71\u4e2d\u7684\u5176\u4ed6\u4eba\u53ef\u4ee5\u6e05\u695a\u807d\u5230\u60a8\u7684\u8072\u97f3\u3002\u5f9e\u96fb\u8166\u5206\u4eab\u97f3\u8a0a\u6642\u8acb\u95dc\u9589\u672c\u9078\u9805\u3002",
          "setting.call.mic.echocancelling.mouseovertooltip":
            "\u8acb\u91dd\u5c0d\u5efa\u8b70\u6d88\u9664\u7d1a\u5225\u9078\u64c7\u300c\u4e00\u822c\u300d\u3002\u9078\u64c7\u300c\u6700\u5927\u300d\u53ef\u4ee5\u66f4\u6709\u6548\u53bb\u9664\u56de\u97f3\uff0c\u4f46\u8acb\u6ce8\u610f\uff0c\u5225\u4eba\u5982\u679c\u548c\u60a8\u540c\u6642\u8aaa\u8a71\uff0c\u60a8\u7684\u97f3\u8a0a\u53ef\u80fd\u6703\u88ab\u5207\u65b7\u3002",
          "setting.call.mic.echocancelling.option1": "\u4e00\u822c",
          "setting.call.mic.echocancelling.option2": "\u6700\u5927",
          "setting.call.mic.menu.noisecancelinglight": "\u4e2d",
          "setting.call.mic.menu.noisecancelingstrong": "\u5f37",
          "setting.call.mic.noisecanceling": "\u6d88\u9664\u96dc\u97f3",
          "setting.call.mic.noisecanceling.checkbox":
            "\u958b\u555f\u6d88\u9664\u96dc\u97f3\u529f\u80fd",
          "setting.call.mic.noisecanceling.desc":
            "\u53ef\u6291\u5236\u74b0\u5883\u566a\u97f3\u5e72\u64fe\uff0c\u6539\u5584\u767c\u8a00\u6642\u7684\u97f3\u8a0a\u54c1\u8cea\u3002",
          "setting.call.mike": "\u9ea5\u514b\u98a8",
          "setting.call.mike.autoVolume":
            "\u81ea\u52d5\u8abf\u7bc0\u97f3\u91cf",
          "setting.call.msg.noCamera":
            "\u5c1a\u672a\u9023\u63a5\u76f8\u6a5f\u3002\n\u8acb\u78ba\u8a8d\u88dd\u7f6e\u7684\u9023\u63a5\u72c0\u614b\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "setting.call.msg.noMike":
            "\u5c1a\u672a\u9023\u63a5\u9ea5\u514b\u98a8\u3002\n\u8acb\u78ba\u8a8d\u88dd\u7f6e\u7684\u9023\u63a5\u72c0\u614b\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "setting.call.msg.noSpeaker":
            "\u5c1a\u672a\u9023\u63a5\u5587\u53ed\u3002\n\u8acb\u78ba\u8a8d\u88dd\u7f6e\u7684\u9023\u63a5\u72c0\u614b\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "setting.call.noDevice": "\u7121\u4efb\u4f55\u88dd\u7f6e",
          "setting.call.speaker": "\u5587\u53ed",
          "setting.call.videocall": "\u5f71\u7247",
          "setting.call.videocall.HWvideocodec":
            "\u4f7f\u7528\u88dd\u7f6e\u7684\u8996\u8a0a\u8f49\u78bc\u5668",
          "setting.call.videocall.HWvideocodec.desc":
            "\u4f7f\u7528\u88dd\u7f6e\u5167\u90e8\u7684\u8996\u8a0a\u8f49\u78bc\u5668\uff0c\u53ef\u9632\u6b62\u904e\u5ea6\u8017\u96fb\u53ca\u904e\u71b1\u3002\u7531\u65bc\u90e8\u5206\u88dd\u7f6e\u7121\u6cd5\u6b63\u5e38\u652f\u63f4\u672c\u529f\u80fd\uff0c\u82e5\u9032\u884c\u8996\u8a0a\u901a\u8a71\u6642\u767c\u751f\u554f\u984c\uff0c\u8acb\u95dc\u9589\u672c\u8a2d\u5b9a\u3002",
          "setting.call.videocall.HWvideocodec.popup.desc":
            "\u8b8a\u66f4\u8a2d\u5b9a\u5c07\u7531\u4e0b\u6b21\u901a\u8a71\u958b\u59cb\u5957\u7528\u3002\u82e5\u8981\u7acb\u5373\u5957\u7528\uff0c\u8acb\u5148\u7d50\u675f\u901a\u8a71\u518d\u91cd\u65b0\u958b\u59cb\u3002",
          "setting.call.videocall.dynamicspeaking":
            "\u6c38\u9060\u986f\u793a\u76ee\u524d\u7684\u767c\u8a00\u8005",
          "setting.call.videocall.dynamicspeaking.desc":
            "\u4f7f\u7528\u7126\u9ede\u6aa2\u8996\u6642\uff0c\u6703\u81ea\u52d5\u4ee5\u66f4\u5927\u7684\u7126\u9ede\u756b\u9762\u986f\u793a\u767c\u8a00\u8005\u7684\u8996\u8a0a\u5f71\u50cf\uff0c\u82e5\u4f7f\u7528\u683c\u72c0\u6aa2\u8996\uff0c\u5247\u6703\u5728\u7b2c\u4e00\u9801\u986f\u793a\u4ed6\u5011\u7684\u8996\u8a0a\u5f71\u50cf\u7e2e\u5716\u3002",
          "setting.call.videocall.gridviewmaxdisplay":
            "\u986f\u793a\u6700\u591a49\u4f4d\u53c3\u8207\u8005\u7684\u5f71\u50cf",
          "setting.call.videocall.gridviewmaxdisplay.desc":
            "\u5728\u540c\u4e00\u756b\u9762\u4e2d\uff0c\u4ee5\u683c\u72c0\u986f\u793a\u6700\u591a49\u4f4d\u53c3\u8207\u8005\u7684\u5f71\u50cf\u3002",
          "setting.call.videocall.gridviewmaxdisplay.tooltip":
            '<![CDATA[\u6b64\u88dd\u7f6e\u6700\u591a\u53ea\u80fd\u986f\u793a25\u4eba\u7684\u5f71\u50cf\uff0c\u8a73\u60c5\u8acb\u81f3<a href="https://help.line.me/line/%1/?contentId=20018989&lang=%2">\u300c\u5e38\u898b\u554f\u984c\u300d</a>\u4e2d\u67e5\u8a62\u3002]]>',
          "setting.call.videocall.screenshare.alarmoff":
            "\u4ee5\u5168\u87a2\u5e55\u6a21\u5f0f\u5206\u4eab\u87a2\u5e55\u756b\u9762\u6642\u95dc\u9589\u63d0\u9192\u901a\u77e5",
          "setting.call.videocall.showpreview":
            "\u52a0\u5165\u8996\u8a0a\u901a\u8a71\u524d\u986f\u793a\u76f8\u6a5f\u756b\u9762\u9810\u89bd",
          "setting.call.voicesettings": "\u8a9e\u97f3",
          "setting.call.youtube.clipboard":
            "\u8cbc\u4e0a\u526a\u8cbc\u7c3f\u4e2d\u7684\u9023\u7d50\u5206\u4eabYouTube\u5f71\u7247",
          "setting.call.youtube.clipboard.checkbox":
            "\u5141\u8a31\u5b58\u53d6\u526a\u8cbc\u7c3f",
          "setting.call.youtube.clipboard.desc":
            "\u7576\u60a8\u8981\u5206\u4eabYouTube\u5f71\u7247\u6642\uff0c\u5141\u8a31\u5728\u700f\u89bd\u5668\u81ea\u52d5\u8cbc\u4e0a\u60a8\u6240\u8907\u88fd\u7684YouTube\u5f71\u7247\u9023\u7d50\u3002",
          "setting.chats.deletedata.chatHisotry.btn.all":
            "\u6240\u6709\u88dd\u7f6e",
          "setting.chats.deletedata.chatHisotry.btn.onlypc":
            "\u6b64\u88dd\u7f6e",
          "setting.chats.deletedata.chatHisotry.desc":
            "\u8acb\u9078\u64c7\u60a8\u8981\u6c38\u4e45\u522a\u9664\u804a\u5929\u8a18\u9304\u7684\u9069\u7528\u88dd\u7f6e\uff0c\u522a\u9664\u5f8c\u5373\u7121\u6cd5\u5fa9\u539f\u3002",
          "setting.chats.deletedata.chatHisotry.title":
            "\u804a\u5929\u8a18\u9304 ",
          "setting.default.font.label": "\u9810\u8a2d\u5b57\u9ad4",
          "setting.desc.removeLocalChat":
            "\u53ef\u6c38\u4e45\u522a\u9664\u804a\u5929\u8a18\u9304\u3002",
          "setting.hiddenchat.empty":
            "\u5c1a\u7121\u96b1\u85cf\u7684\u804a\u5929\u5ba4",
          "setting.hiddenchat.title": "\u96b1\u85cf\u7684\u804a\u5929\u5ba4",
          "setting.keep.alert.deleteAll":
            "\u522a\u9664Keep\u4e2d\u7684\u6240\u6709\u5167\u5bb9\u55ce\uff1f\u9019\u4e0d\u6703\u5c0dKeep\u7b46\u8a18\u7522\u751f\u5f71\u97ff",
          "setting.keep.btn.deleteAll": "\u5168\u90e8\u522a\u9664",
          "setting.keep.desc.dataonlyincludesitemsinkeep":
            "\u9019\u53ea\u5305\u542b\u60a8\u4f7f\u7528Keep\u6240\u4f54\u7684\u5bb9\u91cf\uff0c\u4e0d\u5305\u542bKeep\u7b46\u8a18\u6240\u4f7f\u7528\u7684\u5bb9\u91cf\u3002",
          "setting.keep.desc.photos": "\u7167\u7247",
          "setting.keep.desc.text": "\u6587\u5b57",
          "setting.keep.desc.videos": "\u5f71\u7247",
          "setting.keyword.add.error.character":
            "<![CDATA[\u95dc\u9375\u5b57\u4e0d\u53ef\u5305\u542b\uff1a\uff1e\u3001\uff1c\u6216\u7a7a\u683c\u3002]]>",
          "setting.keyword.add.error.characterDup":
            "\u60a8\u5df2\u65b0\u589e\u904e\u6b64\u95dc\u9375\u5b57\u3002",
          "setting.keyword.add.error.characterSize":
            "\u95dc\u9375\u5b57\u5fc5\u9808\u70ba\u5169\u500b\u5b57\u4ee5\u4e0a\u3002",
          "setting.keyword.added":
            "\u5df2\u767b\u9304\u7684\u95dc\u9375\u5b57\u6578\u91cf",
          "setting.keyword.btn.add": "\u65b0\u589e\u95dc\u9375\u5b57",
          "setting.keyword.desc":
            "\u7576\u672a\u8b80\u8a0a\u606f\u5305\u542b\u9019\u4e9b\u95dc\u9375\u5b57\u6642\uff0c\u5c07\u6703\u50b3\u9001\u63d0\u9192\u3002",
          "setting.keyword.title": "\u95dc\u9375\u5b57\u63d0\u9192",
          "setting.label.basic.alarmMode": "\u63d0\u9192\u65b9\u5f0f",
          "setting.label.basic.alarmMode.showAlarm":
            "\u4f7f\u7528\u5f48\u51fa\u8996\u7a97",
          "setting.label.basic.alarmMode.soundAlarm":
            "\u4f7f\u7528\u97f3\u6548",
          "setting.label.basic.alarmRule": "\u63d0\u9192\u898f\u5247",
          "setting.label.basic.alarmRule.groupInviteAlarm":
            "\u65bc\u6536\u5230\u7fa4\u7d44\u9080\u8acb\u53ca\u65b0\u7fa4\u7d44\u6210\u54e1\u52a0\u5165\u6642\u63d0\u9192",
          "setting.label.basic.alarmRule.mention":
            "\u6709\u4eba\u6a19\u8a3b\u6211\u6642\u63d0\u9192",
          "setting.label.basic.alarmRule.newChatAlarm":
            "\u65bc\u63a5\u6536\u5230\u65b0\u8a0a\u606f\u6642\u63d0\u9192",
          "setting.label.basic.alarmRule.noFullScreenAlarm":
            "\u65bc\u5168\u87a2\u5e55\u986f\u793a\u6642\u505c\u6b62\u63d0\u9192",
          "setting.label.basic.alarmRule.noMobileAlarmWhileUsingPC":
            "\u4f7f\u7528\u96fb\u8166\u7248\u6642\uff0c\u667a\u6167\u624b\u6a5f\u5c07\u4e0d\u6703\u6536\u5230\u63d0\u9192\n\uff08\u82e5\u9396\u5b9aLINE\u6216\u60a8\u8d85\u904e3\u5206\u9418\u672a\u4f7f\u7528\u96fb\u8166\uff0c\u7cfb\u7d71\u5247\u6703\u9032\u884c\u63d0\u9192\uff09",
          "setting.label.basic.alarmRule.note":
            "\u6709\u4eba\u65b0\u589e\u8a18\u4e8b\u672c\u6642\u63d0\u9192",
          "setting.label.basic.alarmRule.videocal":
            "\u9032\u884c\u8a9e\u97f3\u548c\u8996\u8a0a\u901a\u8a71\u6642\u4e0d\u63a5\u6536\u9234\u8072\u63d0\u9192",
          "setting.label.basic.alarmSound": "\u63d0\u9192\u9234\u8072",
          "setting.label.basic.alarmtype": "\u63d0\u9192\u6a23\u5f0f",
          "setting.label.basic.alarmtype.basic": "\u9810\u8a2d",
          "setting.label.basic.font": "\u5b57\u9ad4\u8a2d\u5b9a",
          "setting.label.basic.font.desc":
            "\u5b57\u9ad4\u8a2d\u5b9a\u50c5\u9069\u7528\u65bc\u804a\u5929\u5ba4\u3002",
          "setting.label.basic.font.extraLarge": "\u7279\u5927",
          "setting.label.basic.font.extraLarge.size": "16",
          "setting.label.basic.font.large": "\u5927",
          "setting.label.basic.font.large.size": "14",
          "setting.label.basic.font.name": "\u5b57\u9ad4",
          "setting.label.basic.font.normal": "\u666e\u901a",
          "setting.label.basic.font.normal.size": "12",
          "setting.label.basic.font.normal.size.mac": "13",
          "setting.label.basic.font.size": "\u5927\u5c0f",
          "setting.label.basic.font.small": "\u5c0f",
          "setting.label.basic.font.small.size": "11",
          "setting.label.basic.send.key": "\u50b3\u8a0a\u65b9\u6cd5",
          "setting.label.private.profile.propertyName.id":
            "\uff08ID\u72c0\u614b\u70ba\u4e0d\u5c0d\u5916\u516c\u958b\uff09",
          "setting.label.title": "\u8a2d\u5b9a",
          "setting.lockscreen": "\u9396\u5b9a\u6a21\u5f0f",
          "setting.lockscreen.time.15minutes": "15\u5206\u9418",
          "setting.lockscreen.time.1hour": "1\u5c0f\u6642",
          "setting.lockscreen.time.30minutes": "30\u5206\u9418",
          "setting.lockscreen.time.3hours": "3\u5c0f\u6642",
          "setting.lockscreen.time.3minutes": "3\u5206\u9418",
          "setting.lockscreen.time.5minutes": "5\u5206\u9418",
          "setting.lockscreen.turn.on":
            "\u57f7\u884c\u81ea\u52d5\u9396\u5b9aLINE\u7576\u96fb\u8166\u9592\u7f6e\u8d85\u904e",
          "setting.maintab.alarm": "\u63d0\u9192",
          "setting.maintab.basicSetting": "\u57fa\u672c\u8a2d\u5b9a",
          "setting.maintab.call": "\u4f86\u96fb",
          "setting.maintab.chat": "\u804a\u5929",
          "setting.maintab.contact": "\u597d\u53cb\u7ba1\u7406",
          "setting.maintab.privacy": "\u96b1\u79c1\u8a2d\u5b9a",
          "setting.maintab.profile": "\u500b\u4eba\u8cc7\u6599",
          "setting.maintab.talk": "\u804a\u5929\u30fb\u8a9e\u97f3\u901a\u8a71",
          "setting.messengerView.allinone.desc":
            "\u804a\u5929\u5ba4\u5c07\u986f\u793a\u65bc\u53f3\u5074\u3002",
          "setting.messengerView.allinone.label": "\u55ae\u4e00\u8996\u7a97",
          "setting.messengerView.apply.alert":
            "\u5982\u679c\u60a8\u8b8a\u66f4\u804a\u5929\u5ba4\u7684\u6aa2\u8996\u9078\u9805\uff0c\u6240\u6709\u958b\u555f\u7684\u804a\u5929\u5ba4\u8996\u7a97\u90fd\u5c07\u88ab\u95dc\u9589\u3002\n\u78ba\u5b9a\u8981\u7e7c\u7e8c\u55ce\uff1f\n",
          "setting.messengerView.label":
            "\u804a\u5929\u5ba4\u6aa2\u8996\u9078\u9805",
          "setting.messengerView.seperate.desc":
            "\u804a\u5929\u5ba4\u5c07\u986f\u793a\u65bc\u500b\u5225\u8996\u7a97\u3002",
          "setting.messengerView.seperate.label": "\u500b\u5225\u8996\u7a97",
          "setting.popup.private.emptyName":
            "\u8acb\u81f3\u5c11\u8f38\u51651\u500b\u5b57",
          "setting.popup.private.tooLongName":
            "\u59d3\u540d\u6700\u591a\u53ef\u8f38\u516520\u500b\u5b57\u5143",
          "setting.shorcut.chatfolder.move": "\u79fb\u52d5\u5206\u985e",
          "setting.shorcut.desc.chatfolder": "\u804a\u5929\u5ba4\u5206\u985e",
          "setting.shorcut.list.previous.chat":
            "\u79fb\u81f3\u4e0a\u4e00\u500b\u804a\u5929\u5ba4",
          "setting.shorcut.list.search": "\u641c\u5c0b",
          "setting.shortcut.array.window": "\u804a\u5929\u5ba4\u6392\u5e8f",
          "setting.shortcut.callnlive.audio":
            "\u958b\u555f\uff0f\u95dc\u9589\u9ea5\u514b\u98a8",
          "setting.shortcut.callnlive.video":
            "\u958b\u555f\uff0f\u95dc\u9589\u76f8\u6a5f",
          "setting.shortcut.cancel.array.window":
            "\u79fb\u9664\u804a\u5929\u5ba4\u6392\u5e8f",
          "setting.shortcut.capture.copy": "\u8907\u88fd",
          "setting.shortcut.capture.draw.straight":
            "\u756b\u51fa\u76f4\u7dda\u3001\u77e9\u5f62\u53ca\u5713\u5f62",
          "setting.shortcut.capture.fix":
            "\u91cd\u8a2d\u622a\u53d6\u756b\u9762\u7684\u7bc4\u570d",
          "setting.shortcut.capture.redo": "\u53d6\u6d88\u5fa9\u539f",
          "setting.shortcut.capture.save": "\u5132\u5b58",
          "setting.shortcut.capture.undo": "\u5fa9\u539f",
          "setting.shortcut.chat.newline": "\u63db\u884c",
          "setting.shortcut.chat.open.keep": "\u958b\u555fKeep",
          "setting.shortcut.chat.screen.capture": "\u622a\u53d6\u756b\u9762",
          "setting.shortcut.close.window": "\u95dc\u9589\u8996\u7a97",
          "setting.shortcut.lable": "\u5feb\u6377\u9375",
          "setting.shortcut.list.basic": "\u57fa\u672c\u5feb\u6377\u9375",
          "setting.shortcut.list.callnlive": "\u901a\u8a71",
          "setting.shortcut.list.chat": "\u804a\u5929\u5feb\u6377\u9375",
          "setting.shortcut.list.friend.chat":
            "\u597d\u53cb\u3001\u804a\u5929\u5217\u8868",
          "setting.shortcut.list.viewer": "\u5a92\u9ad4\u64ad\u653e\u5668",
          "setting.shortcut.markdown.bold": "\u7c97\u9ad4",
          "setting.shortcut.markdown.codeblock": "\u6bb5\u843d\u6846",
          "setting.shortcut.markdown.italic": "\u659c\u9ad4",
          "setting.shortcut.markdown.strikethrough": "\u522a\u9664\u7dda",
          "setting.shortcut.markdown.title": "\u6587\u5b57\u683c\u5f0f",
          "setting.shortcut.markdown.wordblock": "\u7d05\u5b57\u6846",
          "setting.shortcut.min.window": "\u8996\u7a97\u6700\u5c0f\u5316",
          "setting.shortcut.move.add.friend":
            "\u524d\u5f80\u300c\u52a0\u5165\u597d\u53cb\u300d\u6a19\u7c64",
          "setting.shortcut.move.bottom":
            "\u524d\u5f80\u804a\u5929\u5ba4\u6700\u4e0b\u65b9",
          "setting.shortcut.move.chat.list":
            "\u524d\u5f80\u300c\u804a\u5929\u300d\u6a19\u7c64",
          "setting.shortcut.move.friend.list":
            "\u524d\u5f80\u300c\u597d\u53cb\u300d\u6a19\u7c64",
          "setting.shortcut.move.top":
            "\u524d\u5f80\u804a\u5929\u5ba4\u6700\u4e0a\u65b9",
          "setting.shortcut.on.lock": "\u555f\u7528\u9396\u5b9a\u6a21\u5f0f",
          "setting.shortcut.open.keep": "\u958b\u555fKeep",
          "setting.shortcut.open.note": "\u958b\u555f\u8a18\u4e8b\u672c",
          "setting.shortcut.open.sticker":
            "\u958b\u555f\u8cbc\u5716\u8996\u7a97",
          "setting.shortcut.open.tip":
            "\u986f\u793a\u5feb\u6377\u9375\u63d0\u793a\u8aaa\u660e",
          "setting.shortcut.open.window":
            "\u5728\u65b0\u8996\u7a97\u4e2d\u958b\u555f",
          "setting.shortcut.photo.copy": "\u8907\u88fd\u6a94\u6848",
          "setting.shortcut.photo.save": "\u5132\u5b58\u6a94\u6848",
          "setting.shortcut.screen.chapture": "\u622a\u53d6\u756b\u9762",
          "setting.shortcut.search": "\u641c\u5c0b",
          "setting.shortcut.send.file": "\u50b3\u9001\u6a94\u6848",
          "setting.shortcut.timeline.comment": "\u64b0\u5beb\u7559\u8a00",
          "setting.shortcut.timeline.like": "\u8b9a",
          "setting.shortcut.timeline.like.pick": "\u9078\u64c7\u8868\u60c5",
          "setting.shortcut.tip":
            "\u65b9\u4fbf\u7684\u5feb\u6377\u9375\uff0c\u8b93\u60a8\u53ef\u5feb\u901f\u4f7f\u7528LINE\u7684\u5404\u500b\u529f\u80fd\u3002",
          "setting.shortcut.video.jump":
            "\u5f71\u7247\u5f80\u524d\uff0f\u5411\u5f8c\u5feb\u8f495\u79d2",
          "setting.shortcut.videongif.stop": "\u64ad\u653e\uff0f\u66ab\u505c",
          "setting.shortcut.viewer.fullscreen":
            "\u4ee5\u5168\u87a2\u5e55\u986f\u793a",
          "setting.shortcut.volume.control":
            "\u63d0\u9ad8\uff0f\u964d\u4f4e\u5f71\u7247\u97f3\u91cf",
          "setting.shortcut.zoominout":
            "\u653e\u5927\uff0f\u7e2e\u5c0f\u5716\u7247",
          "setting.tab.download.folder": "\u76ee\u7684\u5730\u8cc7\u6599\u593e",
          "setting.tab.file.trans": "\u50b3\u9001\u6a94\u6848",
          "setting.tab.login": "\u767b\u5165",
          "setting.tab.url.preview": "\u9810\u89bd\u7db2\u5740",
          "setting.tab.voip": "\u4f86\u96fb\xa0",
          "setting.talk.animation.gif": "GIF\u52d5\u5716",
          "setting.talk.animation.gif.play":
            "\u5728\u804a\u5929\u5ba4\u4e2d\u81ea\u52d5\u64ad\u653eGIF\u52d5\u5716",
          "setting.talk.backgroundSetting.apply":
            "\u6240\u9078\u80cc\u666f\u5c07\u6703\u5957\u7528\u81f3\u6240\u6709\u804a\u5929\u5ba4\u3002\n\u60a8\u8981\u7e7c\u7e8c\u55ce\uff1f",
          "setting.talk.backgroundSetting.apply.allChats":
            "\u5957\u7528\u81f3\u6240\u6709\u804a\u5929\u5ba4",
          "setting.talk.backgroundSetting.detail":
            "\u60a8\u53ef\u9078\u64c7\u8981\u5957\u7528\u81f3\u804a\u5929\u5ba4\u7684\u80cc\u666f\uff08\u4e0d\u9069\u7528\u793e\u7fa4\u804a\u5929\u5ba4\uff09\u3002",
          "setting.talk.backgroundSetting.selected": "\u9078\u64c7\u80cc\u666f",
          "setting.talk.backgroundSetting.title":
            "\u804a\u5929\u5ba4\u80cc\u666f",
          "setting.talk.heading.talk": "\u804a\u5929",
          "setting.talk.photo.resolution.detail":
            "\u8d85\u904e20MB\u7684\u7167\u7247\u7121\u6cd5\u4ee5\u539f\u59cb\u89e3\u6790\u5ea6\u50b3\u9001\u3002",
          "setting.talk.photo.resolution.option.default": "\u9810\u8a2d",
          "setting.talk.photo.resolution.option.original": "\u539f\u5716  ",
          "setting.talk.photo.resolution.option.standard":
            "\u6a19\u6e96\u756b\u8cea",
          "setting.talk.photo.resolution.title":
            "\u7167\u7247\u89e3\u6790\u5ea6",
          "setting.talk.theme.check.seasonal": "\u98c4\u96ea\u6548\u679c",
          "setting.talk.theme.desc.seasonal": "\u4e3b\u984c",
          "setting.theme.desc.darkmode.limitation":
            "\u203b\u90e8\u5206\u756b\u9762\u5c1a\u672a\u652f\u63f4\u300c\u6df1\u8272\u300d\u6a21\u5f0f",
          "setting.theme.mode.dark": "\u6df1\u8272",
          "setting.theme.mode.light": "\u6dfa\u8272",
          "setting.theme.systemSetting": "\u4f7f\u7528\u7cfb\u7d71\u8a2d\u5b9a",
          "setting.theme.title": "\u87a2\u5e55\u986f\u793a\u6a21\u5f0f",
          "setting.url.preview.desc":
            "\u5206\u4eab\u65bc\u804a\u5929\u5ba4\u7684\u9023\u7d50\uff0c\u5c07\u986f\u793a\u7e2e\u5716\u4e26\u9810\u89bd\u7db2\u7ad9\u8cc7\u8a0a\u3002",
          "setting.window.scaleRatio": "\u756b\u9762\u5c3a\u5bf8",
          "setting.window.scaleRatio.default":
            "\u914d\u5408\u986f\u793a\u5668\u4e4b\u57fa\u672c\u5c3a\u5bf8",
          "settingAlarm.label.duration": "\u6642\u9593",
          "settingAlarm.label.lucid": "\u7070\u8272",
          "settingAlarm.label.opacity": "\u900f\u660e\u5ea6",
          "settingAlarm.label.opaque": "\u4e0d\u900f\u660e",
          "settingAlarm.label.setAlarmWindow":
            "\u63d0\u9192\u8996\u7a97\u8a2d\u5b9a",
          "settingAlarm.label.toastContent": "\u5167\u5bb9",
          "settingAlarm.label.toastPreview":
            "\u986f\u793a\u8a0a\u606f\u5167\u5bb9",
          "settingAlarm.label.unitSecond": "\u79d2",
          "settingLogin.alert.autoLogin":
            "\u5df2\u555f\u7528\u81ea\u52d5\u767b\u5165\u3002\u82e5\u6709\u9700\u8981\uff0c\u8acb\u81f3\u300c\u8a2d\u5b9a\u300d\u8655\u505c\u7528\u6b64\u529f\u80fd\u3002",
          "settingLogin.check.autoLogin": "\u81ea\u52d5\u767b\u5165",
          "settingLogin.check.autoRunWin":
            "\u65bcWindows\u958b\u6a5f\u6642\u81ea\u52d5\u555f\u52d5",
          "settingPrivacy.btn.ublockBuddy": "\u89e3\u9664\u5c01\u9396",
          "settingPrivacy.call.blur.desc":
            "\u62d6\u62c9\u6ed1\u687f\u53ef\u8abf\u6574\u8996\u8a0a\u901a\u8a71\u6642\u7684\u80cc\u666f\u6a21\u7cca\u5ea6\u3002",
          "settingPrivacy.cleardata.cache.desc":
            "\u5373\u5c07\u522a\u9664\u66ab\u5b58\u7684\u5feb\u53d6\u8cc7\u6599\uff0c\u4f46\u4e0d\u6703\u522a\u9664\u7167\u7247\u3001\u5f71\u7247\u3001\u8a9e\u97f3\u8a0a\u606f\u53ca\u6a94\u6848\u7684\u8cc7\u6599\u3002",
          "settingPrivacy.cleardata.cache.error":
            "\u90e8\u5206\u5feb\u53d6\u8cc7\u6599\u7121\u6cd5\u522a\u9664\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "settingPrivacy.cleardata.cache.popup":
            "\u78ba\u5b9a\u8981\u522a\u9664\u5feb\u53d6\u8cc7\u6599\u55ce\uff1f",
          "settingPrivacy.label.allowCallAlarm.desc":
            "\u8a2d\u5b9a\u5c07\u6703\u540c\u6642\u5957\u7528\u81f3\u624b\u6a5f\u7248LINE\u3002",
          "settingPrivacy.label.allowCallAlarmPC": "\u5141\u8a31\u4f86\u96fb",
          "settingPrivacy.label.blockAndDelete.desc":
            "\u78ba\u5b9a\u8981\u7531\u5c01\u9396\u540d\u55ae\u4e2d\u522a\u9664\u6b64\u5e33\u865f\u55ce\uff1f\u522a\u9664\u5f8c\uff0c\u8a72\u5e33\u865f\u4ecd\u6703\u8655\u65bc\u88ab\u60a8\u5c01\u9396\u7684\u72c0\u614b\u3002\u203b\u53ef\u900f\u904e\u300cID\u300d\u6216\u300c\u96fb\u8a71\u865f\u78bc\u300d\u641c\u5c0b\uff0c\u5c07\u5176\u91cd\u65b0\u52a0\u5165\u597d\u53cb\u3002",
          "settingPrivacy.label.blockBuddyList": "\u5c01\u9396\u540d\u55ae",
          "settingPrivacy.label.blockBuddyListEmpty":
            "\u5c1a\u7121\u5e33\u865f\u88ab\u5c01\u9396",
          "settingPrivacy.label.blocksquarememberlist":
            "\u5c01\u9396\u7684\u793e\u7fa4\u7528\u6236",
          "settingPrivacy.label.blocksquarememberlistEmpty":
            "\u5c1a\u7121\u6210\u54e1\u88ab\u5c01\u9396\u3002",
          "settingPrivacy.label.buddySearchAllow":
            "\u53ef\u8b93\u5176\u4ed6\u7528\u6236\u641c\u5c0b",
          "settingPrivacy.label.clearRecords":
            "\u522a\u9664\u6240\u6709\u804a\u5929\u8a18\u9304",
          "settingPrivacy.label.cleardata": "\u522a\u9664\u8cc7\u6599",
          "settingPrivacy.label.cleardata.cache": "\u5feb\u53d6\u8cc7\u6599",
          "settingPrivacy.label.filterMessages":
            "\u963b\u64cb\u975e\u4f86\u81ea\u597d\u53cb\u7684\u8a0a\u606f\u3002",
          "settingPrivacy.label.filterMessages.title":
            "\u963b\u64cb\u8a0a\u606f",
          "settingPrivacy.label.hiddenBuddyList": "\u96b1\u85cf\u540d\u55ae",
          "settingPrivacy.label.hiddenBuddyListEmpty":
            "\u5c1a\u7121\u5e33\u865f\u88ab\u96b1\u85cf",
          "settingPrivacy.label.hideAndDelete.desc":
            "\u78ba\u5b9a\u8981\u7531\u96b1\u85cf\u540d\u55ae\u4e2d\u522a\u9664\u6b64\u5e33\u865f\u55ce\uff1f\u522a\u9664\u5f8c\uff0c\u8a72\u5e33\u865f\u4ecd\u53ef\u50b3\u9001\u8a0a\u606f\u7d66\u60a8\u3002\u203b\u53ef\u900f\u904e\u300cID\u300d\u6216\u300c\u96fb\u8a71\u865f\u78bc\u300d\u641c\u5c0b\uff0c\u5c07\u5176\u91cd\u65b0\u52a0\u5165\u597d\u53cb\u3002",
          "settingPrivacy.label.idSearchAllowYes": "\u516c\u958bID",
          "settingPrivacy.label.title": "\u96b1\u79c1\u8a2d\u5b9a",
          "settingProfile.error.invalidData":
            "\u60a8\u7121\u6cd5\u4f7f\u7528\u672c\u540d\u7a31",
          "settingProfile.error.network":
            "\u7cfb\u7d71\u66ab\u6642\u767c\u751f\u554f\u984c\uff0c\n\u8acb\u518d\u8a66\u4e00\u6b21\uff01\n",
          "settingProfile.error.server":
            "\u7cfb\u7d71\u66ab\u6642\u767c\u751f\u554f\u984c\uff0c\n\u8acb\u518d\u8a66\u4e00\u6b21\uff01",
          "settingProfile.label.emailEmpty": "\u5c1a\u672a\u8a2d\u5b9a",
          "settingProfile.label.modifyprofile": "\u7de8\u8f2f",
          "settingProfile.label.myInfo": "\u6211\u7684\u8cc7\u8a0a",
          "settingProfile.label.nickName": "\u59d3\u540d",
          "settingProfile.label.registerAcoount.input.password.error.mailAddress":
            "\u60a8\u8981\u8a2d\u5b9a\u7684\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u548c\u60a8\u76ee\u524d\u7684\u5bc6\u78bc\u904e\u65bc\u76f8\u4f3c\u3002\n\u8acb\u8a2d\u5b9a\u5176\u4ed6\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f\u3002",
          "settingProfile.label.registerAcoount.mailAddress":
            "\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f",
          "settingProfile.label.statusEmpty": "\u5c1a\u672a\u8a2d\u5b9a",
          "settingProfile.label.statusMessage": "\u72c0\u614b\u6d88\u606f",
          "settingProfile.label.userID": "\u7528\u6236ID",
          "settingProfile.link.registerAcoount.mailAddress":
            "\u8a2d\u5b9a\u96fb\u5b50\u90f5\u4ef6\u5e33\u865f >",
          "settingProfile.statusMessage.edit":
            "\u8f38\u5165\u72c0\u614b\u6d88\u606f",
          "settingProfile.statusMessage.edit.failed":
            "\u7121\u6cd5\u5132\u5b58\u60a8\u7684\u72c0\u614b\u6d88\u606f\u3002",
          "settings.basic.number.edit": "\u8b8a\u66f4\u96fb\u8a71\u865f\u78bc",
          "settings.delete.account": "\u522a\u9664\u5e33\u865f",
          "settings.delete.account.btn": "\u522a\u9664\u5e33\u865f",
          "settings.deleteAccount.confirm.desc":
            "\u82e5\u522a\u9664LINE\u5e33\u865f\uff0c\u597d\u53cb\u540d\u55ae\u548c\u804a\u5929\u7d00\u9304\u5c07\u6703\u88ab\u6c38\u4e45\u522a\u9664\u3002\u78ba\u5b9a\u8981\u522a\u9664LINE\u5e33\u865f\u55ce\uff1f",
          "settings.deleteAccount.confirm.title":
            "\u60a8\u78ba\u5b9a\u8981\u522a\u9664\u55ce?",
          "settings.deleteAccount.success":
            "\u7531\u65bc\u60a8\u7684\u5e33\u865f\u5df2\u522a\u9664\uff0c\u7cfb\u7d71\u5df2\u5c07\u60a8\u767b\u51faLINE\u3002",
          "settings.label.tooltip": "\u8a2d\u5b9a",
          "settings.privacy.publicUserID":
            "\u5141\u8a31\u5229\u7528 ID \u52a0\u5165\u597d\u53cb",
          "settings.privacy.publicUserID.description":
            "\u5176\u4ed6\u7528\u6236\u53ef\u900f\u904e ID \u641c\u5c0b\u5c07\u60a8\u52a0\u5165\u597d\u53cb\u3002",
          "settings.privacy.rejectStrangeMessages": "\u963b\u64cb\u8a0a\u606f",
          "settings.privacy.rejectStrangeMessages.description":
            "\u958b\u555f\u672c\u529f\u80fd\u5f8c\u5373\u53ef\u963b\u64cb\u4e0d\u662f\u4f86\u81ea\u597d\u53cb\u7684\u8a0a\u606f\u3002",
          "settings.privacy.title": "\u96b1\u79c1\u8a2d\u5b9a",
          "settings.profile.myInfo.birthday": "\u751f\u65e5",
          "settings.profile.myInfo.birthday.desc.plushometab":
            "\u9078\u64c7\u986f\u793a\u751f\u65e5\u6642\uff0c\u5728\u60a8\u751f\u65e5\u7576\u5929\u5c07\u70ba\u60a8\u986f\u793a\u7279\u5225\u7684\u795d\u8cc0\u52d5\u756b\u3002\u540c\u6642\uff0c\u597d\u53cb\u4e5f\u53ef\u900f\u904e\u60a8\u7684\u500b\u4eba\u6a94\u6848\u3001\u4e3b\u9801\u53ca\u804a\u5929\u5206\u9801\u7b49\u8655\u770b\u898b\u60a8\u7684\u751f\u65e5\u8cc7\u8a0a\u3002",
          "settings.profile.myInfo.birthday.showMonthday":
            "\u986f\u793a\u6211\u7684\u751f\u65e5",
          "showAllContents.File": "\u6a94\u6848",
          "showAllContents.Iink": "\u9023\u7d50",
          "showAllContents.ImageVideo": "\u7167\u7247\u30fb\u5f71\u7247",
          "showAllContents.file.noFile":
            "\u6b64\u804a\u5929\u5ba4\u4e2d\u6c92\u6709\u5206\u4eab\u4efb\u4f55\u6a94\u6848\u3002",
          "showAllContents.moveMessage":
            "\u5728\u804a\u5929\u5ba4\u4e2d\u67e5\u770b",
          "showAllContents.moveMessage.lastMessage":
            "\u67e5\u770b\u6700\u65b0\u8a0a\u606f",
          "showAllContents.uploadMember": "\u4e0a\u50b3\u8005\uff1a%1 ",
          "squar.group.settings.managemembers.request.delete.alert.notall.done":
            "\u8a72\u7533\u8acb\u5df2\u522a\u9664\u3002\n\n\uff08\u90e8\u5206\u7533\u8acb\u5df2\u7531\u5176\u4ed6\u7ba1\u7406\u54e1\u8655\u7406\u5b8c\u7562\u3002\uff09",
          "square.abuse.textinput":
            "\u60a8\u7684\u5e33\u865f\u56e0\u6d89\u53ca\u6feb\u7528\u884c\u70ba\u5df2\u88ab\u9650\u5236\u4f7f\u7528\u3002",
          "square.access.changephoto":
            "\u8b8a\u66f4\u60a8\u5728\u6b64\u793e\u7fa4\u7684\u500b\u4eba\u5716\u7247",
          "square.access.chat": "\u5efa\u7acb\u804a\u5929\u5ba4",
          "square.access.chat.image":
            "\u8b8a\u66f4\u6b64\u804a\u5929\u5ba4\u7684\u5716\u7247",
          "square.access.chatroomtohome":
            "\u524d\u5f80\u793e\u5718\u4e3b\u756b\u9762",
          "square.access.cover.image":
            "\u8b8a\u66f4\u6b64\u793e\u7fa4\u7684\u5c01\u9762\u7167\u7247",
          "square.access.create": "\u5efa\u7acb\u793e\u7fa4",
          "square.access.hide":
            "\u96b1\u85cf\u6b64\u793e\u7fa4\u7684\u7c21\u4ecb",
          "square.access.invite": "\u9080\u8acb\u597d\u53cb",
          "square.access.join": "\u52a0\u5165\u793e\u7fa4",
          "square.access.joinrequest": "\u7533\u8acb\u52a0\u5165\u793e\u7fa4",
          "square.access.postoption":
            "\u958b\u555f\u66f4\u591a\u8cbc\u6587\u9078\u9805",
          "square.access.profile.image":
            "\u8b8a\u66f4\u60a8\u5728\u6b64\u793e\u7fa4\u7684\u500b\u4eba\u5716\u7247",
          "square.access.profile.nickname":
            "\u8b8a\u66f4\u60a8\u5728\u6b64\u793e\u7fa4\u7684\u66b1\u7a31",
          "square.access.qrcode":
            "\u6b64\u793e\u7fa4\u7684\u884c\u52d5\u689d\u78bc",
          "square.access.search": "\u641c\u5c0b\u793e\u7fa4",
          "square.access.show":
            "\u986f\u793a\u6b64\u793e\u7fa4\u7684\u7c21\u4ecb",
          "square.access.square": "\u793e\u7fa4",
          "square.access.squareoption": "\u66f4\u591a\u793e\u7fa4\u9078\u9805",
          "square.access.timelinetosquare": "\u524d\u5f80\u793e\u7fa4",
          "square.access.write": "\u5f35\u8cbc\u8cbc\u6587",
          "square.ageconfirmation.popupbutton.cancel":
            "\u4e0d\uff0c\u6211\u672a\u6eff18\u6b72",
          "square.ageconfirmation.popupbutton.yes":
            "\u662f\uff0c\u6211\u5df2\u6eff18\u6b72",
          "square.ageconfirmation.popupdesc.atleast18tosetrestriction":
            "\u60a8\u5fc5\u9808\u5e74\u6eff18\u6b72\u624d\u80fd\u958b\u555f\u300c\u793e\u7fa4\u5e74\u9f61\u9650\u5236\u300d\u3002\u8acb\u793e\u7fa4\u7ba1\u7406\u54e1\u5354\u52a9\u5ba3\u5c0e\u4e26\u78ba\u4fdd\u793e\u7fa4\u6210\u54e1\u9593\u7684\u804a\u5929\u5167\u5bb9\u50c5\u6b62\u65bc\u9999\u83f8\u53ca\u9152\u985e\uff0c\u4e0d\u53ef\u6d89\u53ca\u5176\u4ed6\u6210\u5e74\u8a71\u984c\u3002\u203b\u8acb\u6ce8\u610f\uff0c\u6b64\u8a2d\u5b9a\u5f8c\u958b\u555f\u5373\u7121\u6cd5\u8b8a\u66f4\u3002",
          "square.ageconfirmation.popuptitle.ageconfirmationrequired":
            "\u60a8\u662f\u5426\u5e74\u6eff18\u6b72\uff1f",
          "square.ageconfirmationrequired.popupbutton.cancel": "\u53d6\u6d88",
          "square.ageconfirmationrequired.popupbutton.yes":
            "\u78ba\u8a8d\u4e26\u52a0\u5165",
          "square.ageconfirmationrequired.popupdesc.onlyusersoverlegalageallowedtojoin":
            "\u672c\u793e\u7fa4\u50c5\u9650\u5e74\u6eff18\u6b72\u7684\u7528\u6236\u53c3\u52a0\u3002\u8acb\u52d9\u5fc5\u9075\u5b88\u300cLINE\u793e\u7fa4\u4f7f\u7528\u689d\u6b3e\u300d\u53ca\u300cLINE\u793e\u7fa4\u5b88\u5247\u300d\uff0c\u7981\u6b62\u4efb\u4f55\u9055\u53cd\u524d\u8ff0\u689d\u6b3e\u53ca\u6cd5\u5f8b\u4e4b\u8a0e\u8ad6\u3002",
          "square.ageconfirmationrequired.popuptitle.ageconfirmation":
            "\u9700\u5e74\u6eff18\u6b72\u624d\u80fd\u52a0\u5165",
          "square.announcement.donotshowagain": "\u4e0d\u518d\u986f\u793a",
          "square.announcement.donotshowagain.mouseover":
            "\u4e0d\u518d\n\u986f\u793a",
          "square.announcement.error":
            "\u627e\u4e0d\u5230\u6b64\u516c\u544a\u7684\u8a0a\u606f",
          "square.announcement.message.annouce": "\u8a2d\u70ba\u516c\u544a",
          "square.announcement.minimize": "\u6700\u5c0f\u5316",
          "square.announcement.unannounce": "\u53d6\u6d88\u516c\u544a",
          "square.answer.guide":
            "\u8acb\u5148\u56de\u7b54\u4e0a\u65b9\u7684\u554f\u984c\u624d\u53ef\u9001\u51fa\u52a0\u5165\u7533\u8acb\u3002",
          "square.answer.send.done":
            "\u5df2\u70ba\u60a8\u9001\u51fa\u7533\u8acb",
          "square.answer.title": "\u56de\u7b54\u554f\u984c",
          "square.banreportuser.popupbutton.cancel": "\u53d6\u6d88",
          "square.banuser.popupdesc.banafterleaving":
            "\u6b64\u7528\u6236\u5df2\u96e2\u958b\u6b64\u793e\u7fa4\u3002\u60a8\u53ef\u4ee5\u7981\u6b62\u5c0d\u65b9\u518d\u6b21\u52a0\u5165\u793e\u7fa4\uff0c\u6216\u6aa2\u8209\u5176\u5e33\u865f\u3002",
          "square.chat.button.threadmessages":
            "<![CDATA[<b><font color='%1'>%2+</font></b>\u5247\u8a0a\u606f]]>",
          "square.chat.button.threadmessages999":
            "<![CDATA[\u67e5\u770b<b><font color='%1'>%2+</font></b>\u5247\u8a0a\u606f]]>",
          "square.chat.button.threadmessagesfew":
            "\u67e5\u770b\u8a0e\u8ad6\u4e32\u5167\u7684\u8a0a\u606f",
          "square.chat.button.threadmessagesmany": "%1+\u5247\u8a0a\u606f",
          "square.chat.desc.sent": "\u5df2\u50b3\u9001",
          "square.chat.err.file.exceed.capacity":
            "\u56e0\u6a94\u6848\u904e\u5927\uff0c\u7121\u6cd5\u50b3\u9001\u3002",
          "square.chat.menu.aboutchatroom": "\u7ba1\u7406\u793e\u7fa4",
          "square.chat.more.leaveroom": "\u9000\u51fa",
          "square.chat.placeholder.qna": "\u56de\u7b54\u554f\u984c",
          "square.chat.reply.notification": "\u56de\u8986\uff1a%1",
          "square.chat.reply.notification2": "%1\u7684\u56de\u8986\uff1a%2",
          "square.chat.setting": "\u8a73\u7d30\u8a2d\u5b9a",
          "square.chat.settings.bg.apply.square.image":
            "\u5c07\u793e\u7fa4\u5716\u7247\u8a2d\u70ba\u80cc\u666f",
          "square.chat.settings.export.title": "%1\u7684\u804a\u5929",
          "square.chat.system.msg.invite.a.b":
            "%1\u5df2\u9080\u8acb%2\u52a0\u5165\u804a\u5929",
          "square.chat.system.msg.join.chat": "%1\u52a0\u5165\u804a\u5929",
          "square.chat.system.msg.leave.chat": "%1\u96e2\u958b\u804a\u5929",
          "square.chat.text.input.nickname":
            "\u4ee5\u300c%1\u300d\u52a0\u5165\u804a\u5929",
          "square.chatcontent.button.seemoreqna": "\u986f\u793a\u66f4\u591a",
          "square.chatcontent.tab.qna": "\u5feb\u554f\u5feb\u7b54\u8a0a\u606f",
          "square.chatlist.alert.deletedchat":
            "\u6b64\u804a\u5929\u5ba4\u4e0d\u5b58\u5728\u3002\u8a66\u8a66\u52a0\u5165\u53e6\u4e00\u500b\u804a\u5929\u5ba4\u5427\u3002",
          "square.chatlist.alert.max":
            "\u7531\u65bc\u6210\u54e1\u4eba\u6578\u5df2\u6eff\uff0c\u60a8\u7121\u6cd5\u52a0\u5165\u6b64\u804a\u5929\u5ba4\u3002",
          "square.chatlist.join.guide":
            "\u8acb\u9078\u64c7\u60a8\u8981\u52a0\u5165\u7684\u804a\u5929\u5ba4\u3002\u60a8\u4e5f\u53ef\u7531\u793e\u7fa4\u7684\u804a\u5929\u5ba4\u9078\u55ae\u4e2d\uff0c\u9ede\u9078\u300c\u804a\u5929\u5ba4\u5217\u8868\u300d\u4f86\u700f\u89bd\u6b64\u793e\u7fa4\u4e2d\u7684\u6240\u6709\u804a\u5929\u5ba4\u3002",
          "square.chatlist.joined.title":
            "\u5df2\u52a0\u5165\u7684\u804a\u5929\u5ba4",
          "square.chatlist.joined.zero":
            "\u60a8\u5c1a\u672a\u52a0\u5165\u4efb\u4f55\u793e\u5718\u804a\u5929\u5ba4\u3002",
          "square.chatlist.max.member.desc":
            "\u6b64\u804a\u5929\u5ba4\u4eba\u6578\u5df2\u6eff\u3002",
          "square.chatlist.public.join.alert":
            "\u8a72\u804a\u5929\u5ba4\u4e5f\u6703\u986f\u793a\u65bc\u60a8\u7684\u300c\u804a\u5929\u300d\u756b\u9762\u4e2d\u3002\n",
          "square.chatlist.public.join.btn": "\u52a0\u5165 ",
          "square.chatlist.public.max.btn": "\u4eba\u6578\u5df2\u6eff",
          "square.chatlist.public.no.msg":
            "\u6c92\u6709\u4efb\u4f55\u8a0a\u606f\u3002",
          "square.chatlist.public.title":
            "\u53ef\u52a0\u5165\u7684\u804a\u5929\u5ba4",
          "square.chatlist.public.zero":
            "\u6c92\u6709\u53ef\u52a0\u5165\u7684\u804a\u5929\u5ba4\u3002",
          "square.chatlist.reply.alert":
            "\u6709\u4eba\u56de\u8986\u4e86\u60a8\u7684\u8a0a\u606f",
          "square.chatlist.square.button": "\u793e\u7fa4",
          "square.chatlist.title": "\u804a\u5929\u5ba4\u5217\u8868",
          "square.chatmenu.button.qna": "\u5feb\u554f\u5feb\u7b54\u8a0a\u606f",
          "square.chatmenu.button.thread": "\u8a0e\u8ad6\u4e32",
          "square.chatmenu.button.yourthreads":
            "\u6211\u7684\u8a0e\u8ad6\u4e32",
          "square.chatroom.alert.open.url":
            "\u6b64\u9023\u7d50\u53ef\u80fd\u4e0d\u5b89\u5168\uff0c\n\u78ba\u5b9a\u8981\u958b\u555f\u55ce\uff1f",
          "square.chatroom.block.inputarea.deletedchat":
            "\u804a\u5929\u5ba4\u5df2\u522a\u9664",
          "square.chatroom.block.inputarea.deletedgroup":
            "\u793e\u7fa4\u5df2\u522a\u9664",
          "square.chatroom.block.inputarea.kickoutgroup":
            "\u5df2\u5f37\u5236\u9000\u51fa\u793e\u7fa4",
          "square.chatroom.chatlilst.guide.des":
            "\u60a8\u53ef\u700f\u89bd\u6216\u52a0\u5165\u6b64\u793e\u7fa4\u4e2d\u7684\u804a\u5929\u5ba4\u3002",
          "square.chatroom.chatlist.title": "\u804a\u5929\u5ba4\u5217\u8868",
          "square.chatroom.confirm.desc.kickout":
            "\u78ba\u5b9a\u8981\u5c07\u6b64\u7528\u6236\u5f37\u5236\u9000\u51fa\u6b64\u793e\u7fa4\uff0c\u4e26\u7981\u6b62\u5176\u91cd\u65b0\u52a0\u5165\u55ce\uff1f",
          "square.chatroom.create.image": "\u9078\u64c7\u5716\u7247",
          "square.chatroom.default.announce.content":
            "\u6b61\u8fce\u4f86\u5230\u300c%1\u300d\uff01",
          "square.chatroom.deletefromall.alert":
            "\u78ba\u5b9a\u8981\u7531\u6240\u6709\u6210\u54e1\u7684\u804a\u5929\u8a18\u9304\u4e2d\u522a\u9664\u6240\u9078\u8a0a\u606f\u55ce\uff1f",
          "square.chatroom.desc.botadded":
            "%1\u5df2\u5c07\u300c%2\u300d\u52a0\u5165",
          "square.chatroom.desc.botremoved":
            "%1\u5df2\u5c07\u300c%2\u300d\u79fb\u9664",
          "square.chatroom.error.alert.deletedchatroom":
            "\u6b64\u804a\u5929\u5ba4\u4e0d\u5b58\u5728\u3002\u8a66\u8a66\u52a0\u5165\u53e6\u4e00\u500b\u804a\u5929\u5ba4\u5427\u3002",
          "square.chatroom.input.deletedgroup":
            "\u5df2\u522a\u9664\u7684\u793e\u7fa4",
          "square.chatroom.input.join.btn": "\u52a0\u5165\u300c%1\u300d",
          "square.chatroom.invite.layer.des":
            "\u9080\u8acb\u7528\u6236\u52a0\u5165\u793e\u7fa4\u804a\u5929\uff01",
          "square.chatroom.layer.upperloading":
            "\u6b63\u5728\u8b80\u53d6\u804a\u5929\u8a18\u9304\u2026",
          "square.chatroom.longpress.deleteformall": "\u6e05\u9664",
          "square.chatroom.longpress.deletefromall.title":
            "\u81ea\u804a\u5929\u5ba4\u5167\u522a\u9664",
          "square.chatroom.longpress.kickout": "\u5f37\u5236\u9000\u51fa",
          "square.chatroom.longpress.squarepost": "\u8a18\u4e8b\u672c",
          "square.chatroom.memberlist.guest": "\u8a2a\u5ba2",
          "square.chatroom.setting.deletechat":
            "\u522a\u9664\u804a\u5929\u5ba4",
          "square.chatroom.setting.deletechat.description":
            "\u78ba\u5b9a\u8981\u522a\u9664\u804a\u5929\u5ba4\u55ce\uff1f\u6240\u6709\u6210\u54e1\u90fd\u7121\u6cd5\u518d\u4f7f\u7528\u6b64\u804a\u5929\u5ba4\u3002",
          "square.chatroom.setting.report": "\u6aa2\u8209",
          "square.chatroom.settings.change.title":
            "\u804a\u5929\u5ba4\u540d\u7a31",
          "square.chatroom.settings.leave.no.message":
            "\u96e2\u958b\uff08\u4e0d\u767c\u9001\u901a\u77e5\uff09",
          "square.chatroom.system.alert.notfriend":
            "\u4f86\u81ea\u300c%1\u300d\u793e\u7fa4\u7684%2\u4e0d\u5728\u60a8\u7684\u597d\u53cb\u540d\u55ae\u4e2d\u3002\n\u63d0\u9192\u60a8\uff0c\u6536\u5230\u975e\u597d\u53cb\u7684\u8a0a\u606f\u6642\u8acb\u63d0\u9ad8\u8b66\u89ba\u3001\u614e\u9632\u8a50\u9a19\u3002",
          "square.chatroom.system.message.change.bg":
            "\u7ba1\u7406\u54e1\u8b8a\u66f4\u4e86\u793e\u7fa4\u5716\u7247",
          "square.chatroom.system.message.change.maxparticipants":
            "%1\u5df2\u5c07\u804a\u5929\u5ba4\u7684\u4eba\u6578\u4e0a\u9650\u8a2d\u70ba%2\u4eba\u3002",
          "square.chatroom.system.message.change.name":
            "%1\u5df2\u5c07\u804a\u5929\u5ba4\u540d\u7a31\u6539\u70ba\u300c%2\u300d",
          "square.chatroom.system.message.change.picture":
            "%1\u8b8a\u66f4\u4e86\u804a\u5929\u5ba4\u5716\u7247",
          "square.chatroom.system.message.kickout":
            "%1\u5df2\u88ab\u5f37\u5236\u9000\u51fa",
          "square.chatroom.system.msg.alert.private":
            "\u6ce8\u610f\u56c9\uff01\u60a8\u5df2\u9032\u5165\u300c%1\u300d\u793e\u5718\u7684\u975e\u516c\u958b\u804a\u5929\u5ba4",
          "square.chatroom.system.msg.alert.public":
            "\u6b61\u8fce\u5149\u81e8\u300c%1\u300d\u793e\u7fa4\uff01\u804a\u5929\u6642\u8acb\u63d0\u9ad8\u8b66\u89ba\u3001\u614e\u9632\u8a50\u9a19\u3002",
          "square.chatroom.system.msg.guide.loading":
            "\u6bcf\u6b21\u6372\u52d5\u6372\u8ef8\uff0c\u5373\u53ef\u8b80\u53d6\u4e4b\u524d\u7684\u8a0a\u606f\u3002",
          "square.chatroom.system.msg.guide.report":
            "\u4ee5\u53f3\u9375\u9ede\u64ca\u8a0a\u606f\uff08\u5305\u62ec\u7167\u7247\u3001\u5f71\u7247\u4ee5\u53ca\u9023\u7d50\uff09\u5373\u53ef\u9032\u884c\u6aa2\u8209\u3002",
          "square.chatroom.system.msg.tooltip.private":
            "\u60a8\u5373\u5c07\u9032\u5165\u300c%1\u300d\u793e\u5718\u7684\u975e\u516c\u958b\u804a\u5929\u5ba4\u3002",
          "square.chatroom.system.msg.tooltip.public":
            "\u6b64\u70ba\u300c%1\u300d\u793e\u7fa4\u3002",
          "square.chatroom.systemmsg.deletedchat":
            "\u6b64\u804a\u5929\u5ba4\u5df2\u88ab\u522a\u9664\u3002 ",
          "square.chatroom.systemmsg.deletedgroup":
            "\u6b64\u793e\u7fa4\u5df2\u88ab\u522a\u9664",
          "square.chatroom.systemmsg.emptycommunity":
            "\u7121\u6cd5\u4f7f\u7528\u7684\u793e\u7fa4",
          "square.chatroom.systemmsg.emptyroom":
            "\u7121\u6cd5\u4f7f\u7528\u7684\u804a\u5929\u5ba4",
          "square.chatroom.systemmsg.kickout":
            "\u6b64\u804a\u5929\u5ba4\u7684\u7ba1\u7406\u54e1\u5df2\u5c07\u60a8\u5f37\u5236\u9000\u51fa\u3002 ",
          "square.chatroom.vmenu.chatlist": "\u804a\u5929\u5ba4\u5217\u8868",
          "square.chatroom.vmenu.groupchatlist":
            "\u793e\u5718\u4e3b\u756b\u9762",
          "square.chatroom.vmenu.leave.alert.outmsg.option":
            "\u96e2\u958b\u804a\u5929\u5ba4\u6642\n\u986f\u793a\u9000\u51fa\u8a0a\u606f",
          "square.coadmin.alert":
            "\u78ba\u5b9a\u8981\u5c07\u6b64\u6210\u54e1\u8a2d\u70ba\u5171\u540c\u7ba1\u7406\u54e1\u55ce\uff1f",
          "square.common.desc.usercount100kth": "%1 \u0e41\u0e2a\u0e19",
          "square.common.desc.usercount1eok": "%1\u5104",
          "square.common.desc.usercount1k": "%1K",
          "square.common.desc.usercount1m": "%1M",
          "square.common.desc.usercount1man": "%1\u842c",
          "square.common.share": "\u516c\u958b",
          "square.community.home.alert.invited.chat":
            "\u60a8\u8981\u63a5\u53d7\u9080\u8acb\u4e26\u52a0\u5165\u804a\u5929\u5ba4\u55ce\uff1f",
          "square.community.home.chat.button.start": "\u958b\u59cb",
          "square.community.home.invite.button": "\u9080\u8acb",
          "square.community.home.msg.chat.onlymember":
            "\u52a0\u5165\u793e\u5718\u5f8c\u624d\u53ef\u53c3\u8207\u804a\u5929\uff0c\n\u60a8\u8981\u73fe\u5728\u52a0\u5165\u55ce\uff1f",
          "square.community.home.msg.onlymember":
            "\u5f85\u7ba1\u7406\u54e1\u6838\u51c6\u60a8\u7684\u52a0\u5165\u7533\u8acb\u5f8c\uff0c\n\u60a8\u5373\u53ef\u52a0\u5165\u793e\u5718\u3002",
          "square.content.home.shared":
            "\u5df2\u5206\u4eab\u8a18\u4e8b\u672c\u3002",
          "square.cover.chat.btn": "\u804a\u5929\u5ba4",
          "square.cover.investmentscams":
            "\u8acb\u7559\u610f\u804a\u5929\u5ba4\u4e2d\u6f5b\u5728\u7684\u8a50\u9a19\u884c\u70ba\u3002",
          "square.cover.post.btn": "\u8a18\u4e8b\u672c",
          "square.create.btn": "",
          "square.create.category": "\u985e\u5225 ",
          "square.create.category.desc":
            "\u70ba\u793e\u7fa4\u8a2d\u5b9a\u985e\u5225\u5f8c\uff0c\u6709\u6a5f\u6703\u7372\u5f97\u63a8\u85a6\u767b\u4e0a\u9996\u9801\u3002",
          "square.create.default.category": "\u4e0d\u8a2d\u5b9a",
          "square.create.description": "\u7c21\u4ecb",
          "square.create.description.desc":
            "\u8f38\u5165\u793e\u7fa4\u7c21\u4ecb",
          "square.create.description.input": "\u793e\u5718\u7c21\u4ecb",
          "square.create.description2":
            "\u8f38\u5165\u4ee5\u300c#\u300d\u958b\u982d\u7684\u6a19\u7c64\u95dc\u9375\u5b57",
          "square.create.error.no.name":
            "\u8acb\u8f38\u5165\u793e\u7fa4\u7684\u540d\u7a31",
          "square.create.error.popup.input.description.info":
            "\u8acb\u8f38\u5165\u793e\u7fa4\u7c21\u4ecb",
          "square.create.error.popup.input.info":
            "\u8acb\u8f38\u5165\u6240\u6709\u5fc5\u586b\u8cc7\u8a0a\u3002",
          "square.create.groupname": "\u793e\u7fa4\u540d\u7a31",
          "square.create.image": "\u9078\u64c7\u5716\u7247",
          "square.create.over.text.num.alert":
            "\u5df2\u9054\u5b57\u6578\u4e0a\u9650\u3002 ",
          "square.create.search": "\u5141\u8a31\u641c\u5c0b",
          "square.create.search.desc":
            "\u7528\u6236\u53ef\u900f\u904e\u540d\u7a31\u6216\u7c21\u4ecb\u641c\u5c0b\u5230\u6b64\u793e\u7fa4\u3002",
          "square.create.setting.desc":
            "\u7528\u6236\u53ef\u900f\u904e\u540d\u7a31\u6216\u7c21\u4ecb\u641c\u5c0b\u5230\u6b64\u793e\u7fa4\u3002",
          "square.create.sgroup.approval.desc":
            "\u9700\u8981\u7ba1\u7406\u54e1\u6838\u51c6\u624d\u80fd\u52a0\u5165\u793e\u7fa4\u3002",
          "square.create.sgroup.closedtype":
            "\u9700\u6838\u51c6\u5f8c\u624d\u80fd\u52a0\u5165",
          "square.create.sgroup.opentype":
            "\u4e0d\u9700\u8981\u7ba1\u7406\u54e1\u6838\u51c6\u5373\u53ef\u52a0\u5165",
          "square.create.subchat.guide.des":
            "\u516c\u958b\u7bc4\u570d\u53ca\u7ba1\u7406\u6b0a\u9650\u7684\u8a2d\u5b9a\uff0c\u5c07\u5957\u7528\u81f3\u793e\u7fa4\u4e2d\u7684\u6240\u6709\u804a\u5929\u5ba4\u3002",
          "square.create.subchat.title": "\u5efa\u7acb\u804a\u5929\u5ba4",
          "square.create.title": "\u5efa\u7acb\u793e\u7fa4",
          "square.create.welcome": "\u6b61\u8fce\u8a0a\u606f",
          "square.createchat.error.no.auth.public":
            "\u7531\u65bc\u7ba1\u7406\u54e1\u5df2\u9650\u5236\u300c\u5efa\u7acb\u516c\u958b\u804a\u5929\u5ba4\u300d\u7684\u6b0a\u9650\uff0c\u7121\u6cd5\u5efa\u7acb\u804a\u5929\u5ba4\u3002",
          "square.createchat.inputtitle":
            "\u8f38\u5165\u804a\u5929\u5ba4\u540d\u7a31",
          "square.createchat.title": "\u5efa\u7acb\u804a\u5929\u5ba4",
          "square.createchat.type.maximum.option":
            "\u53c3\u8207\u4eba\u6578\u4e0a\u9650",
          "square.createchat.type.maximum.option.desc":
            "\u8a2d\u5b9a\u53ef\u52a0\u5165\u804a\u5929\u5ba4\u7684\u6210\u54e1\u6578\u4e0a\u9650\u3002",
          "square.createchat.type.private": "\u975e\u516c\u958b ",
          "square.createchat.type.private.desc":
            "\u53ea\u6709\u6536\u5230\u9080\u8acb\u7684\u793e\u5718\u6210\u54e1\u53ef\u4ee5\u52a0\u5165\u6b64\u804a\u5929\u5ba4\u3002",
          "square.createchat.type.public": "\u516c\u958b",
          "square.createchat.type.public.desc":
            "\u4efb\u4f55\u4eba\u90fd\u80fd\u52a0\u5165\u6b64\u804a\u5929\u5ba4\u3002",
          "square.createchat.type.public.option":
            "\u958b\u653e\u7d66\u6240\u6709\u6210\u54e1",
          "square.createopenchat.button.setagerestriction":
            "\u793e\u7fa4\u5e74\u9f61\u9650\u5236",
          "square.createopenchat.desc.onlyusersoverlegalageallowed":
            "\u5c07\u793e\u7fa4\u8a2d\u70ba\u50c5\u4f9b\u5e74\u6eff18\u6b72\u8005\u52a0\u5165\u3002",
          "square.createopenchat.desc.search":
            "\u793e\u7fa4\u7684\u90e8\u5206\u8a0a\u606f\u9810\u8a2d\u70ba\u53ef\u4f9b\u4ed6\u4eba\u9810\u89bd\u53ca\u641c\u5c0b\u3002\u60a8\u53ef\u4ee5\u5728\u5efa\u7acb\u793e\u7fa4\u4e4b\u5f8c\uff0c\u524d\u5f80\u300c\u8a2d\u5b9a\u300d\u66f4\u6539\u6b64\u9805\u8a2d\u5b9a\u3002",
          "square.createopenchat.placeholder.enterdescription":
            "\u8f38\u5165\u793e\u7fa4\u7c21\u4ecb",
          "square.createsubchat.toggle.notifyinopenchat":
            "\u65b0\u804a\u5929\u5ba4\u7684\u63d0\u9192",
          "square.default.name.title": "\u793e\u7fa4\u540d\u7a31",
          "square.error.cannot.forward.contact":
            "\u7121\u6cd5\u50b3\u9001\u806f\u7d61\u8cc7\u8a0a\u81f3\u793e\u7fa4",
          "square.error.fail.upload.profile.image":
            "\u7121\u6cd5\u7de8\u8f2f\u60a8\u7684\u500b\u4eba\u5716\u7247\u3002 ",
          "square.error.not.normal":
            "\u767c\u751f\u4e0d\u660e\u932f\u8aa4\uff0c\n\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "square.error.noti.kickout":
            "\u60a8\u5df2\u88ab\u5f37\u5236\u9000\u51fa\u6b64\u793e\u7fa4",
          "square.error.popup.cannot.invite":
            "\u793e\u5718\u7ba1\u7406\u54e1\u5df2\u505c\u7528\u6b64\u529f\u80fd",
          "square.error.popup.cannot.join":
            "\u76ee\u524d\u7121\u6cd5\u52a0\u5165\u6b64\u793e\u7fa4\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "square.error.popup.deletedgroup":
            "\u6b64\u793e\u7fa4\u5df2\u4e0d\u5b58\u5728\u3002",
          "square.error.popup.network":
            "\u7121\u6cd5\u9023\u7dda\u3002\n\u8acb\u78ba\u8a8d\u9023\u7dda\u72c0\u614b\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "square.error.popup.noauth":
            "\u7531\u65bc\u60a8\u6c92\u6709\u5b58\u53d6\u6b64\u9801\u9762\u7684\u6b0a\u9650\uff0c\n\u5373\u5c07\u91cd\u65b0\u5c0e\u5f80\u300c\u793e\u7fa4\u8a2d\u5b9a\u300d\u3002",
          "square.error.popup.noauth.alert":
            "\u60a8\u6c92\u6709\u5b58\u53d6\u6b64\u9801\u9762\u7684\u6b0a\u9650\u3002 ",
          "square.error.popup.usingbyotheruser":
            "\u76ee\u524d\u6709\u5176\u4ed6\u7528\u6236\u6b63\u5728\u4fee\u6539\u6b64\u8a2d\u5b9a\uff0c\n\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "square.filtering.keyword.error.alert": "This word can't be used.",
          "square.fraudpopup.button.cancel": "\u53d6\u6d88",
          "square.fraudpopup.button.continue": "\u7e7c\u7e8c",
          "square.fraudpopup.button.learnmore": "\u77ad\u89e3\u66f4\u591a",
          "square.fraudpopup.desc.investmentscams":
            "\u4ee5\u5192\u5145\u540d\u4eba\u7b49\u65b9\u5f0f\u900f\u904e\u793e\u7fa4\u5e73\u53f0\u5ee3\u544a\u9032\u884c\u8a50\u9a19\u7684\u60c5\u5f62\u65e5\u76ca\u589e\u52a0\uff0c\u8acb\u5728\u6536\u767c\u8a0a\u606f\u6642\u591a\u52a0\u7559\u610f\uff0c\u52ff\u8f15\u4fe1\u4efb\u4f55\u53ef\u7591\u8a0a\u606f\uff0c\u4e26\u614e\u9632\u8a50\u9a19\u884c\u70ba\u3002",
          "square.fraudpopup.title.investmentscams": "\u8a50\u9a19\u7316\u7357",
          "square.friendslist.join.requests":
            "\u7ba1\u7406\u52a0\u5165\u7533\u8acb",
          "square.friendstab.newrequest":
            "\u793e\u7fa4\u52a0\u5165\u7533\u8acb",
          "square.friendstab.request.count": "\u52a0\u5165\u7533\u8acb ",
          "square.friendstab.request.counts.2.other":
            "\u52a0\u5165\u7533\u8acb\xa0%n",
          "square.friendstab.request.counts.2.plurals.other":
            "\u52a0\u5165\u7533\u8acb\xa0%n",
          "square.friendstab.request.counts.other":
            "\u52a0\u5165\u7533\u8acb\xa0%n",
          "square.friendstab.request.counts.plurals.other":
            "\u52a0\u5165\u7533\u8acb\xa0%n",
          "square.group.create.change.image": "\u8b8a\u66f4\u5716\u7247",
          "square.group.name": "\u793e\u7fa4",
          "square.group.settings.basic": "\u793e\u7fa4\u57fa\u672c\u8a2d\u5b9a",
          "square.group.settings.change.groupname": "\u793e\u7fa4\u540d\u7a31",
          "square.group.settings.change.myname": "\u59d3\u540d",
          "square.group.settings.delete.alert":
            "\u82e5\u522a\u9664\u6b64\u793e\u7fa4\uff0c\u804a\u5929\u8a18\u9304\u7b49\u6240\u6709\u76f8\u95dc\u8cc7\u6599\u4e5f\u5c07\u88ab\u522a\u9664\u3002\u78ba\u5b9a\u8981\u522a\u9664\u6b64\u793e\u7fa4\u55ce\uff1f",
          "square.group.settings.editmember.kickout":
            "\u5c07\u6210\u54e1\u9000\u51fa\u793e\u7fa4",
          "square.group.settings.editmember.kickout.alert.done":
            "\u6210\u54e1\u5df2\u9000\u51fa",
          "square.group.settings.group.profile":
            "\u7de8\u8f2f\u793e\u7fa4\u6a94\u6848",
          "square.group.settings.groupset": "\u793e\u7fa4\u8a2d\u5b9a",
          "square.group.settings.leave": "\u9000\u51fa\u793e\u7fa4",
          "square.group.settings.leave.alert":
            "\u82e5\u9000\u51fa\u6b64\u793e\u7fa4\uff0c\u804a\u5929\u8a18\u9304\u7b49\u6240\u6709\u76f8\u95dc\u8cc7\u6599\u4e5f\u5c07\u88ab\u522a\u9664\u3002\u78ba\u5b9a\u8981\u9000\u51fa\u6b64\u793e\u7fa4\u55ce\uff1f",
          "square.group.settings.leave.error.alert.admin":
            "\u9000\u51fa\u793e\u7fa4\u4e4b\u524d\uff0c\n\u8acb\u5c07\u60a8\u7684\u7ba1\u7406\u54e1\u6b0a\u9650\u8f49\u79fb\u7d66\u53e6\u4e00\u4f4d\u6210\u54e1\u3002",
          "square.group.settings.manageauth.additional":
            "\u8a2d\u5b9a\u6b0a\u9650",
          "square.group.settings.manageauth.additionalchatfeatures":
            "\u5176\u4ed6\u804a\u5929\u5ba4\u529f\u80fd",
          "square.group.settings.manageauth.additionalchatfeatures.option.createpolls":
            "\u5efa\u7acb\u65b0\u6295\u7968",
          "square.group.settings.manageauth.additionalchatfeatures.option.deletepolls":
            "\u522a\u9664\u6295\u7968",
          "square.group.settings.manageauth.chatapp":
            "\u5176\u4ed6\u804a\u5929\u5ba4\u529f\u80fd",
          "square.group.settings.manageauth.setmaxparticipants":
            "\u8b8a\u66f4\u804a\u5929\u5ba4\u7684\u6210\u54e1\u6578\u4e0a\u9650",
          "square.group.settings.managegroup": "\u7ba1\u7406\u793e\u7fa4",
          "square.group.settings.managegroup.allowtojoin":
            "\u9700\u7d93\u904e\u6838\u51c6\u624d\u80fd\u52a0\u5165",
          "square.group.settings.managegroup.allowtojoin.desc":
            "\u9700\u8981\u7ba1\u7406\u54e1\u6838\u51c6\u624d\u80fd\u52a0\u5165\u793e\u7fa4\u3002",
          "square.group.settings.managegroup.allowtosearch":
            "\u5728\u641c\u5c0b\u7d50\u679c\u4e2d\u986f\u793a\u6b64\u793e\u7fa4",
          "square.group.settings.managegroup.allowtosearch.desc":
            "\u7528\u6236\u53ef\u900f\u904e\u95dc\u9375\u5b57\u641c\u5c0b\u5230\u6b64\u793e\u7fa4\u3002",
          "square.group.settings.managegroup.autotag":
            "\u986f\u793a\u81ea\u52d5\u63a8\u85a6\u6a19\u7c64 ",
          "square.group.settings.managegroup.autotag.decs":
            "\u64b0\u5beb\u8cbc\u6587\u6642\u986f\u793a\u81ea\u52d5\u63a8\u85a6\u6a19\u7c64\u3002",
          "square.group.settings.managegroup.deletegroup":
            "\u522a\u9664\u793e\u7fa4",
          "square.group.settings.managegroup.invite":
            "\u9080\u8acb\u65b0\u6210\u54e1",
          "square.group.settings.managegroup.invite.desc":
            "\u505c\u7528\u5f8c\u5c07\u7121\u6cd5\u9080\u8acb\u5176\u4ed6\u6210\u54e1\uff0c\u4e14\u5df2\u5206\u4eab\u7684\u9023\u7d50\u548c\u884c\u52d5\u689d\u78bc\u4e5f\u7121\u6cd5\u7e7c\u7e8c\u4f7f\u7528\u3002",
          "square.group.settings.managegroup.updateurl":
            "\u66f4\u65b0\u9080\u8acb\u9023\u7d50",
          "square.group.settings.managegroup.updateurl.desc":
            "\u66f4\u65b0\u9023\u7d50\u5f8c\uff0c\u5373\u7121\u6cd5\u4f7f\u7528\u76ee\u524d\u7684\u9080\u8acb\u9023\u7d50\u3002\n\u78ba\u5b9a\u8981\u7e7c\u7e8c\u55ce\uff1f",
          "square.group.settings.managemember": "\u7ba1\u7406\u6210\u54e1",
          "square.group.settings.managemembers.alert.cannot.select":
            "\u60a8\u6700\u591a\u53ea\u80fd\u9078\u64c7%n\u500b\u4eba\u3002",
          "square.group.settings.managemembers.allowrejoin": "\u89e3\u7981",
          "square.group.settings.managemembers.blcoktojoin.alert":
            "\u78ba\u5b9a\u8981\u5141\u8a31\u6b64\u7528\u6236\u53ef\u91cd\u65b0\u52a0\u5165\u793e\u7fa4\u55ce\uff1f",
          "square.group.settings.managemembers.blocktojoin":
            "\u7981\u6b62\u52a0\u5165\u7684\u6210\u54e1\u540d\u55ae",
          "square.group.settings.managemembers.blocktojoin.alert":
            "\u78ba\u5b9a\u8981\u70ba\u6b64\u7528\u6236\u89e3\u7981\u55ce\uff1f\u5c0d\u65b9\u5c07\u53ef\u91cd\u65b0\u7533\u8acb\u52a0\u5165\u6b64\u793e\u7fa4\u3002",
          "square.group.settings.managemembers.manageadmin":
            "\u7ba1\u7406\u54e1\u6b0a\u9650\u8a2d\u5b9a",
          "square.group.settings.managemembers.manageadmin.added":
            "\u5df2\u52a0\u5165\u3002 ",
          "square.group.settings.managemembers.manageadmin.alert.deletecoadmin":
            "\u8981\u64a4\u92b7\u6b64\u6210\u54e1\u7684\u5171\u540c\u7ba1\u7406\u54e1\u6b0a\u9650\u55ce\uff1f",
          "square.group.settings.managemembers.manageadmin.cancelcoadmin":
            "\u79fb\u9664",
          "square.group.settings.managemembers.manageadmin.coadmin":
            "\u79fb\u9664\u5171\u540c\u7ba1\u7406\u54e1",
          "square.group.settings.managemembers.manageadmin.handoveradmin":
            "\u8f49\u79fb\u7ba1\u7406\u54e1\u6b0a\u9650",
          "square.group.settings.managemembers.manageadmin.handoveradmin.alert":
            "\u78ba\u5b9a\u8981\u5c07\u7ba1\u7406\u54e1\u6b0a\u9650\u8f49\u79fb\u7d66\u6b64\u6210\u54e1\u55ce\uff1f\n\u8f49\u79fb\u6b0a\u9650\u5f8c\uff0c\u60a8\u5c07\u6703\u81ea\u52d5\u6210\u70ba\u5171\u540c\u7ba1\u7406\u54e1\u3002 ",
          "square.group.settings.managemembers.manageadmin.handoveradmin.desc":
            "\u60a8\u53ef\u4ee5\u8ce6\u4e88\u5171\u540c\u7ba1\u7406\u54e1\u6b0a\u9650\u7d66\u60a8\u60f3\u8981\u4e00\u8d77\u7ba1\u7406\u793e\u5718\u7684\u6210\u54e1\u3002\n\u60a8\u53ef\u4ee5\u5728\u300c\u7ba1\u7406\u6b0a\u9650\u300d\u4e2d\u8a2d\u5b9a\u5171\u540c\u7ba1\u7406\u54e1\u3002 ",
          "square.group.settings.managemembers.manageadmin.handoveradmin.description":
            "\u82e5\u60a8\u5c07\u7ba1\u7406\u54e1\u6b0a\u9650\u8f49\u79fb\u7d66\u5171\u540c\u7ba1\u7406\u54e1\uff0c\u60a8\u5c07\u81ea\u52d5\u6210\u70ba\u5171\u540c\u7ba1\u7406\u54e1\u3002",
          "square.group.settings.managemembers.manageadmin.makecoadmin":
            "\u65b0\u589e\u5171\u540c\u7ba1\u7406\u54e1",
          "square.group.settings.managemembers.manageadmin.makecoadmin.desc":
            "\u60a8\u53ef\u5c07\u6210\u54e1\u65b0\u589e\u70ba\u300c\u5171\u540c\u7ba1\u7406\u54e1\u300d\u4f86\u4e00\u8d77\u7ba1\u7406\u793e\u7fa4 \u3002",
          "square.group.settings.managemembers.manageadmin.makecoadmin.no.member":
            "\u6c92\u6709\u53ef\u9078\u64c7\u7684\u6210\u54e1\u3002",
          "square.group.settings.managemembers.manageadmin.no.coadmin":
            "\u60a8\u5c1a\u672a\u65b0\u589e\u4efb\u4f55\u5171\u540c\u7ba1\u7406\u54e1\u3002",
          "square.group.settings.managemembers.manageadmin.select":
            "\u9078\u64c7",
          "square.group.settings.managemembers.manageauth":
            "\u7ba1\u7406\u6b0a\u9650 ",
          "square.group.settings.managemembers.manageauth.acceptrequest":
            "\u6838\u51c6\u52a0\u5165\u7533\u8acb",
          "square.group.settings.managemembers.manageauth.admincoadmin":
            "\u7ba1\u7406\u54e1\u8207\u5171\u540c\u7ba1\u7406\u54e1",
          "square.group.settings.managemembers.manageauth.adminonly":
            "\u7ba1\u7406\u54e1",
          "square.group.settings.managemembers.manageauth.all":
            "\u6240\u6709\u6210\u54e1 ",
          "square.group.settings.managemembers.manageauth.createpost":
            "\u64b0\u5beb\u8cbc\u6587 ",
          "square.group.settings.managemembers.manageauth.createpublicchat":
            "\u5efa\u7acb\u804a\u5929\u5ba4",
          "square.group.settings.managemembers.manageauth.deletecontents":
            "\u522a\u9664\u804a\u5929\u5167\u5bb9\u548c\u8cbc\u6587",
          "square.group.settings.managemembers.manageauth.description":
            "\u60a8\u53ef\u8a2d\u5b9a\u6709\u6b0a\u9650\u8b8a\u66f4\u793e\u7fa4\u5404\u9805\u529f\u80fd\u7684\u4eba\u3002",
          "square.group.settings.managemembers.manageauth.invitemembers":
            "\u9080\u8acb\u6210\u54e1 ",
          "square.group.settings.managemembers.manageauth.kickout":
            "\u5c07\u6210\u54e1\u9000\u51fa\u793e\u7fa4",
          "square.group.settings.managemembers.managepost":
            "\u5f35\u8cbc\u8cbc\u6587",
          "square.group.settings.managemembers.request":
            "\u52a0\u5165\u7533\u8acb",
          "square.group.settings.managemembers.request.accept": "\u6838\u51c6",
          "square.group.settings.managemembers.request.accept.alert.done":
            "\u5df2\u6838\u51c6\u7533\u8acb\u3002",
          "square.group.settings.managemembers.request.accept.alert.notall.done":
            "\u5148\u524d\u5df2\u6838\u51c6\u7533\u8acb\u3002\u90e8\u5206\u7533\u8acb\u53ef\u80fd\u5df2\u7531\u7ba1\u7406\u54e1\u6216\u5171\u540c\u7ba1\u7406\u54e1\u8655\u7406\u5b8c\u7562\uff0c\u6216\u56e0\u6210\u54e1\u4eba\u6578\u5df2\u6eff\u800c\u7121\u6cd5\u5c07\u5176\u52a0\u5165\u3002",
          "square.group.settings.managemembers.request.acceptall":
            "\u5168\u90e8\u6838\u51c6 ",
          "square.group.settings.managemembers.request.acceptall.alert":
            "\u8981\u6838\u51c6\u6240\u6709\u52a0\u5165\u7533\u8acb\u55ce\uff1f",
          "square.group.settings.managemembers.request.delete.alert":
            "\u8981\u522a\u9664\u6b64\u52a0\u5165\u7533\u8acb\u55ce\uff1f",
          "square.group.settings.managemembers.request.delete.alert.done":
            "\u7533\u8acb\u5df2\u522a\u9664\u3002",
          "square.group.settings.managemembers.request.delete.alert.notall.done":
            "\u8a72\u7533\u8acb\u5df2\u522a\u9664\u3002\n\uff08\u90e8\u5206\u7533\u8acb\u5df2\u7531\u5176\u4ed6\u7ba1\u7406\u54e1\u8655\u7406\u5b8c\u7562\u3002\uff09",
          "square.group.settings.managemembers.request.noti.tooltip":
            "\u53ef\u9078\u64c7\u662f\u5426\u5728\u6709\u4eba\u7533\u8acb\u52a0\u5165\u6642\u63a5\u6536\u63d0\u9192\u3002 ",
          "square.group.settings.managemembers.request.select100":
            "\u9078\u64c7\u6700\u65b0\u7684%1\u4ef6\u7533\u8acb",
          "square.group.settings.managemembers.request.selectall":
            "\u5168\u9078",
          "square.group.settings.managemembers.request.zero":
            "\u5c1a\u7121\u52a0\u5165\u7533\u8acb",
          "square.group.settings.memberlist":
            "\u67e5\u770b\u6216\u9080\u8acb\u6210\u54e1",
          "square.group.settings.myprofile.title": "\u500b\u4eba\u6a94\u6848",
          "square.group.settings.nickname": "\u66b1\u7a31",
          "square.group.settings.noti.post": "\u8cbc\u6587\u63d0\u9192",
          "square.group.settings.noti.post.dec":
            "\u60a8\u53ef\u4ee5\u63a5\u6536\u8cbc\u6587\u63d0\u9192\u3002",
          "square.group.settings.policy":
            "\u793e\u7fa4\n\u670d\u52d9\u689d\u6b3e",
          "square.group.settings.profile.title": "",
          "square.group.settings.recieve.chat":
            "\u63a5\u6536\u804a\u5929\u5ba4\u9080\u8acb",
          "square.group.settings.recieve.friendsrequest":
            "\u63a5\u6536\u597d\u53cb\u9080\u8acb ",
          "square.group.settings.report": "\u6aa2\u8209\u793e\u7fa4",
          "square.group.settings.reportpage.agreeandsend":
            "\u540c\u610f\u4e26\u50b3\u9001",
          "square.group.settings.reportpage.agreeandsend.thpdpa":
            "\u627f\u8a8d\u4e26\u9001\u51fa",
          "square.group.settings.reportpage.desc":
            "\u8acb\u9078\u64c7\u60a8\u6aa2\u8209\u8a72\u5167\u5bb9\u7684\u7406\u7531\u3002",
          "square.group.settings.reportpage.impersonation.inquirypopup":
            "\u70ba\u4e86\u8a73\u7d30\u8abf\u67e5\u5047\u5192\u4ed6\u4eba\u7684\u72c0\u6cc1\uff0c\u8acb\u524d\u5f80\u300c\u8207\u6211\u5011\u806f\u7d61\u300d\u63d0\u4f9b\u76f8\u95dc\u8cc7\u8a0a\uff0c\u4ee5\u5354\u52a9\u6211\u5011\u9032\u884c\u8abf\u67e5\u3002",
          "square.group.settings.reportpage.impersonation.inquirypopup.decline":
            "\u7565\u904e",
          "square.group.settings.reportpage.impersonation.inquirypopup.proceed":
            "\u524d\u5f80",
          "square.group.settings.reportpage.reason1":
            "\u6feb\u767c\u5ee3\u544a\u8a0a\u606f",
          "square.group.settings.reportpage.reason2":
            "\u50b3\u9001\u8272\u60c5\u8a0a\u606f",
          "square.group.settings.reportpage.reason3":
            "\u9a12\u64fe\u884c\u70ba",
          "square.group.settings.reportpage.reason4": "\u5176\u4ed6",
          "square.group.settings.reportpage.reason5":
            "\u5167\u5bb9\u8207\u4e3b\u984c\u7121\u95dc",
          "square.group.settings.reportpage.reason6":
            "\u5047\u5192\u4ed6\u4eba",
          "square.group.settings.reportpage.reason7": "\u8a50\u9a19",
          "square.group.settings.reportpage.report.btn": "\u6aa2\u8209",
          "square.group.settings.reportpage.reportdone":
            "\u6aa2\u8209\u8a0a\u606f\u5df2\u50b3\u9001",
          "square.grouppopup.alert.alreadyjoin":
            "\u60a8\u5df2\u662f\u6b64\u793e\u7fa4\u7684\u6210\u54e1\uff0c\u8acb\u95dc\u9589\u756b\u9762\u518d\u91cd\u65b0\u9032\u5165\u3002",
          "square.grouppopup.alert.blocked":
            "\u7121\u6cd5\u52a0\u5165\u6b64\u793e\u7fa4\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "square.grouppopup.alert.join.ing":
            "\u6b63\u5728\u7b49\u5f85\u7ba1\u7406\u54e1\u5be9\u6838\u3002\n\u7ba1\u7406\u54e1\u6838\u51c6\u5f8c\uff0c\u60a8\u5c07\u6210\u70ba\u6b64\u793e\u7fa4\u7684\u6210\u54e1\u3002",
          "square.grouppopup.alert.requestdone":
            "\u60a8\u5df2\u7533\u8acb\u52a0\u5165\uff0c\u5f85\u7ba1\u7406\u54e1\u6838\u51c6\u5f8c\uff0c\u60a8\u5c07\u6210\u70ba\u6b64\u793e\u7fa4\u7684\u6210\u54e1\u3002",
          "square.grouppopup.button.join.ing":
            "\u7b49\u5f85\u6838\u51c6\u4e2d\u2026",
          "square.grouppopup.chat.count.plurals.other":
            "%1\u500b\u804a\u5929\u5ba4",
          "square.grouppopup.invite.tooltip":
            "\u8acb\u900f\u904eLINE\uff0c\u6216\u8005\u5206\u4eab\u9080\u8acb\u9023\u7d50\u6216\u884c\u52d5\u689d\u78bc\u4f86\u9080\u8acb\u597d\u53cb\u3002",
          "square.grouppopup.invitefriend": "\u9080\u8acb\u597d\u53cb",
          "square.grouppopup.member.count.plurals.other":
            "%1\u540d\u6210\u54e1",
          "square.grouppopup.post.count.plurals.other": "%1\u5247\u8cbc\u6587",
          "square.grouppopup.qrcode":
            "\u900f\u904e\u884c\u52d5\u689d\u78bc\u9080\u8acb",
          "square.grouppopup.qrcode.desc":
            "\u8acb\u76f4\u63a5\u8b93\u5c0d\u65b9\u8b80\u53d6\u884c\u52d5\u689d\u78bc\uff0c\u6216\u900f\u904e\u8cbc\u6587\u5206\u4eab\u884c\u52d5\u689d\u78bc\u3002",
          "square.grouppopup.qrcode.save":
            "\u5132\u5b58\u884c\u52d5\u689d\u78bc",
          "square.grouppopup.qrcode.saved":
            "\u884c\u52d5\u689d\u78bc\u5df2\u5132\u5b58\u3002 ",
          "square.grouppopup.sendrequest": "\u7533\u8acb\u52a0\u5165",
          "square.grouppopup.url": "\u900f\u904e\u9023\u7d50\u9080\u8acb",
          "square.grouppopup.url.app":
            "\u5206\u4eab\u81f3\u5176\u4ed6\u61c9\u7528\u7a0b\u5f0f",
          "square.grouppopup.url.line": "\u5206\u4eab\u81f3LINE",
          "square.home.addfavorite": "\u52a0\u5230\u6211\u7684\u6700\u611b",
          "square.home.cancelfavorite":
            "\u81ea\u6211\u7684\u6700\u611b\u79fb\u9664",
          "square.home.chat.section.invited":
            "\u767c\u51fa\u9080\u8acb\u7684\u804a\u5929\u5ba4",
          "square.home.favorite.tooltip":
            "\u9ede\u9078\u6b64\u5716\u793a\u53ef\u5c07\u793e\u7fa4\n\u52a0\u5230\u300c\u597d\u53cb\u300d\u4e00\u89bd\u4e2d\u7684\u300c\u6211\u7684\u6700\u611b\u300d\u3002",
          "square.home.invite.copy.link": "\u8907\u88fd\u9023\u7d50",
          "square.home.invite.save.qr": "\u5132\u5b58\u884c\u52d5\u689d\u78bc",
          "square.home.invite.share.link": "\u5206\u4eab\u9023\u7d50",
          "square.home.invite.share.qr": "\u5206\u4eab\u884c\u52d5\u689d\u78bc",
          "square.home.menu.photo": "\u5716\u7247",
          "square.home.menu.write": "\u8cbc\u6587",
          "square.home.nickname": "%1",
          "square.home.setting": "\u8a2d\u5b9a",
          "square.home.tab.chat": "\u804a\u5929\u5ba4",
          "square.home.tab.post": "\u8cbc\u6587",
          "square.home.toast.addfavorite":
            "\u5df2\u52a0\u5230\u6211\u7684\u6700\u611b\u3002",
          "square.home.toast.cancelfavorite":
            "\u5df2\u81ea\u6211\u7684\u6700\u611b\u79fb\u9664\u3002",
          "square.invite.complete.other":
            "\u5df2\u5411%n\u4eba\u50b3\u9001\u9080\u8acb\u8a0a\u606f\u3002",
          "square.invite.complete.plurals.other":
            "\u5df2\u5411%n\u540d\u6210\u54e1\u50b3\u9001\u9080\u8acb\u8a0a\u606f",
          "square.invite.friend": "\u9080\u8acb\u597d\u53cb",
          "square.invite.urlscheme.chatroom.chatname":
            "\u9080\u8acb\u52a0\u5165\u300c%1\u300d",
          "square.invitemember.confirm.donotshowagain":
            "\u4e0d\u518d\u986f\u793a",
          "square.invitemember.confirm.invite":
            "\u53d7\u9080\u52a0\u5165\u7684\u7528\u6236\u53ef\u67e5\u770b\u5148\u524d\u7684\u8a0a\u606f\u3002",
          "square.invitemember.desc":
            "\u60a8\u53ea\u80fd\u9080\u8acb\u672c\u793e\u5718\u7684\u6210\u54e1\u52a0\u5165\u6b64\u804a\u5929\u5ba4\u3002\u8acb\u5148\u9080\u8acb\u597d\u53cb\u52a0\u5165\u793e\u5718\uff0c\u518d\u5c07\u4ed6\u5011\u52a0\u5165\u804a\u5929\u5ba4\u3002",
          "square.invitemember.desc.urlscheme.chatroom":
            "\u8acb\u9ede\u9078\u300c\u9080\u8acb\u52a0\u5165\u804a\u5929\u5ba4\u300d\u4f86\u9080\u8acb\u5c1a\u672a\u52a0\u5165\u6b64\u793e\u7fa4\u7684\u7528\u6236\u3002",
          "square.invitemember.invitetogroup":
            "\u9080\u8acb\u52a0\u5165\u793e\u7fa4",
          "square.invitemember.invitetogroup.urlscheme.chatroom":
            "\u9080\u8acb\u52a0\u5165\u804a\u5929\u5ba4",
          "square.invitemember.memberlist.title":
            "\u300c%1\u300d\u6210\u54e1\uff1a%n",
          "square.invitemember.title": "\u9078\u64c7\u53d7\u9080\u4eba",
          "square.invitetoopenchat.button.share": "\u5206\u4eab",
          "square.invitetoopenchat.desc.sharelinktoinvitemembers":
            "\u60a8\u53ef\u5206\u4eab\u672c\u793e\u7fa4\u7684\u9023\u7d50\u4f86\u9080\u8acb\u5176\u4ed6\u7528\u6236\u52a0\u5165\uff01",
          "square.join.precaution":
            "\u6b61\u8fce\u52a0\u5165\u300c%1\u300d\uff01\u63d0\u9192\u60a8\uff0c\u8a0a\u606f\u5167\u5bb9\u9808\u9075\u5b88\u793e\u7fa4\u670d\u52d9\u689d\u6b3e\uff0c\u9055\u8005\u6709\u53ef\u80fd\u7121\u6cd5\u4f7f\u7528\u672c\u670d\u52d9\u3002",
          "square.join.question.guide": "\u8f38\u51655\uff5e50\u500b\u5b57",
          "square.joincode.error":
            "\u53c3\u52a0\u5bc6\u78bc\u6709\u8aa4\uff0c\u8acb\u78ba\u8a8d\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "square.joincode.guide":
            "\u6b63\u78ba\u8f38\u5165\u793e\u7fa4\u7ba1\u7406\u54e1\u6240\u8a2d\u7684\u53c3\u52a0\u5bc6\u78bc\uff0c\u5373\u53ef\u52a0\u5165\uff01",
          "square.joincode.guide.description":
            "\u8acb\u8a2d\u5b9a\u52a0\u5165\u6642\u9808\u8f38\u5165\u7684\u53c3\u52a0\u5bc6\u78bc\uff084\uff5e8\u4f4d\u82f1\u6587\u5b57\u6bcd\u53ca\u6578\u5b57\uff09\u3002",
          "square.joincode.input.guide": "\u8f38\u5165\u53c3\u52a0\u5bc6\u78bc",
          "square.joincode.title": "\u8f38\u5165\u53c3\u52a0\u5bc6\u78bc",
          "square.joinscreen.placeholder.enteranswerhere":
            "\u8f38\u5165\u7b54\u6848",
          "square.keyboardmenu.button.qna":
            "\u5feb\u554f\u5feb\u7b54\u8a0a\u606f",
          "square.kickout.alert.done":
            "\u5df2\u5c07\u8a72\u7528\u6236\u5f37\u5236\u9000\u51fa\u4e26\u7981\u6b62\u5176\u91cd\u65b0\u52a0\u5165\u3002\u82e5\u8981\u70ba\u5176\u89e3\u7981\uff0c\u8acb\u7531\u793e\u7fa4\u8a2d\u5b9a\u4e2d\u7684\u300c\u7ba1\u7406\u6210\u54e1\u300d\uff1e\u300c\u7981\u6b62\u52a0\u5165\u7684\u9ed1\u540d\u55ae\u300d\u8655\u9032\u884c\u8a2d\u5b9a\u3002",
          "square.kickout.blockoption":
            "\u7981\u6b62\u52a0\u5165\u6b64\u793e\u7fa4",
          "square.kickout.error.alert.admin":
            "\u7121\u6cd5\u5c07\u7ba1\u7406\u54e1\u6216\u5171\u540c\u7ba1\u7406\u54e1\u5f37\u5236\u9000\u51fa",
          "square.kickout.reason1":
            "\u5ee3\u544a\u6216\u5783\u573e\u90f5\u4ef6",
          "square.kickout.reason2":
            "\u6709\u5bb3\u8eab\u5fc3\u6216\u6deb\u7a62\u7684\u5167\u5bb9",
          "square.kickout.reason3":
            "\u5176\u4ed6\u9055\u53cd\u898f\u5247\u7684\u884c\u70ba",
          "square.leave.last.person.alert": "",
          "square.leftuser.kickout.btn": "\u5f37\u5236\u9000\u51fa",
          "square.main.create.block.alert":
            "Beta\u7248\u6e2c\u8a66\u671f\u9593\u5167\u7121\u6cd5\u5efa\u7acb\u793e\u5718\u3002 ",
          "square.main.create.guide":
            "\u5efa\u7acb\u81ea\u5df1\u7684\u793e\u7fa4\uff0c\n\u804a\u51fa\u66f4\u591a\u65b0\u9ebb\u5409\uff01",
          "square.main.mylist": "\u6211\u7684\u793e\u7fa4",
          "square.main.mylist.sortbyname": "\u6309\u540d\u7a31",
          "square.main.mylist.sortbyupdate": "\u6700\u5f8c\u66f4\u65b0",
          "square.main.mylist.sortbyvisit": "\u6700\u5f8c\u67e5\u770b",
          "square.main.mylist.viewall": "\u986f\u793a\u5168\u90e8",
          "square.main.mylist.zero":
            "\u52a0\u5165\u793e\u7fa4\uff0c\u804a\u51fa\u65b0\u9ebb\u5409\uff01\u4e5f\u53ef\u5efa\u7acb\u81ea\u5df1\u7684\u793e\u7fa4\uff01",
          "square.main.search.block.alert":
            "Beta\u7248\u6e2c\u8a66\u671f\u9593\u5167\u7121\u6cd5\u4f7f\u7528\u641c\u5c0b\u529f\u80fd\u3002 ",
          "square.main.search.default.msg":
            "\u793e\u7fa4\u540d\u7a31\u3001\u7c21\u4ecb",
          "square.managemembers.button.seewholeft":
            "\u67e5\u770b\u6700\u8fd1\u9000\u51fa\u7684\u7528\u6236",
          "square.managemembers.desc.seewholeft":
            "\u67e5\u770b24\u5c0f\u6642\u5167\u96e2\u958b\u6b64\u793e\u7fa4\u7684\u7528\u6236\u3002",
          "square.manageopenchat.desc.setjoincode":
            "\u8bf7\u8bbe\u7f6e\u7528\u6237\u5728\u52a0\u5165\u6b64\u804a\u5929\u65f6\u5fc5\u987b\u8f93\u5165\u7684\u9a8c\u8bc1\u7801\u3002",
          "square.members": "\u6210\u54e1",
          "square.members.addmembers": "\u9080\u8acb\u6210\u54e1",
          "square.membershipsystemmessages.button.userisbannedfromthechat":
            "\u6210\u54e1\u88ab\u5f37\u5236\u9000\u51fa\u793e\u7fa4\u6642",
          "square.membershipsystemmessages.button.userjoinsthechat":
            "\u6210\u54e1\u52a0\u5165\u793e\u7fa4\u6642",
          "square.membershipsystemmessages.button.userleavesthechat":
            "\u6210\u54e1\u9000\u51fa\u793e\u7fa4\u6642",
          "square.membershipsystemmessages.desc.managesystemmessages":
            "\u60a8\u53ef\u500b\u5225\u8a2d\u5b9a\u662f\u5426\u8981\u5728\u793e\u7fa4\u804a\u5929\u5ba4\u4e2d\u986f\u793a\u6210\u54e1\u52a0\u5165\u3001\u9000\u51fa\u6216\u88ab\u5f37\u5236\u9000\u51fa\u7684\u7cfb\u7d71\u8a0a\u606f\u3002",
          "square.menu.invite": "\u9080\u8acb",
          "square.mythreads.button.seemessages.other":
            "<![CDATA[\u67e5\u770b<b><font color='%1'>%n</font></b>\u5247\u8a0a\u606f]]>",
          "square.noti.admin":
            "\u60a8\u5df2\u7372\u5f97\u300c%1\u300d\u793e\u7fa4\u7684\u7ba1\u7406\u54e1\u6b0a\u9650\u3002",
          "square.noti.coadmin":
            "\u60a8\u5df2\u7372\u5f97\u300c%1\u300d\u793e\u7fa4\u7684\u5171\u540c\u7ba1\u7406\u54e1\u6b0a\u9650\u3002",
          "square.noti.delete.chat":
            "\u300c%1\u300d\u804a\u5929\u5ba4\u5df2\u88ab\u7ba1\u7406\u54e1\u522a\u9664\u3002",
          "square.noti.deleted.coadmin":
            "\u60a8\u5728\u300c%1\u300d\u793e\u7fa4\u7684\u5171\u540c\u7ba1\u7406\u54e1\u6b0a\u9650\u5df2\u88ab\u64a4\u92b7\u3002",
          "square.noti.deleted.gorup":
            "\u300c%1\u300d\u793e\u7fa4\u5df2\u88ab\u522a\u9664\u3002",
          "square.noti.join.done":
            "\u60a8\u5df2\u52a0\u5165\u300c%1\u300d\u793e\u7fa4\u3002",
          "square.noti.joinrequest":
            "%1\u5df2\u7533\u8acb\u52a0\u5165\u300c%2\u300d\u793e\u7fa4\u3002",
          "square.noti.kickout":
            "\u60a8\u5df2\u88ab\u5f37\u5236\u9000\u51fa\u300c%1\u300d\u793e\u7fa4\u3002",
          "square.notification.desc.userjoinedopenchat":
            "\u6709\u65b0\u6210\u54e1\u52a0\u5165\u300c%1\u300d\u793e\u7fa4\u3002",
          "square.notification.setting":
            "\u793e\u7fa4\u4e2d\u7684\u8cbc\u6587\u63d0\u9192\n\u8acb\u65bc\u884c\u52d5\u88dd\u7f6e\u4e0a\u958b\u555f\u793e\u7fa4\u8cbc\u6587\u7684\u63d0\u9192\uff0c\u624d\u80fd\u900f\u904e\u96fb\u8166\u7248\u63a5\u6536\u63d0\u9192\u3002",
          "square.openchat.desc.adminaddedbottochat":
            "[0]\u5df2\u5c07\u300c[1]\u300d\u52a0\u5165",
          "square.openchat.desc.adminremovedbotfromchat":
            "[0]\u5df2\u5c07\u300c[1]\u300d\u79fb\u9664",
          "square.openchat.desc.messageremovedforsharinginappropriatecontent":
            "%1\u7684\u8a0a\u606f\u53ef\u80fd\u5df2\u9055\u53cd\u793e\u7fa4\u670d\u52d9\u689d\u6b3e\u800c\u906d\u522a\u9664\u3002",
          "square.openchat.desc.userbannedbysomeoneelse":
            "%1\u5df2\u5c07%2\u5f37\u5236\u9000\u51fa\u793e\u7fa4\u3002",
          "square.openchat.popup.dontshow":
            "\u4ee5\u5f8c\u4e0d\u9700\u518d\u65bc\u6b64\u793e\u7fa4\u986f\u793a\u6b64\u8a0a\u606f",
          "square.openchat.popupbutton.close": "\u95dc\u9589",
          "square.openchat.popupbutton.deleteforall":
            "\u5168\u54e1\u7684\u8a0a\u606f\u8a18\u9304",
          "square.openchat.popupbutton.deleteforyou":
            "\u81ea\u5df1\u7684\u8a0a\u606f\u8a18\u9304",
          "square.openchat.popupbutton.ok": "\u78ba\u5b9a",
          "square.openchat.popupbutton.seemore": "\u77ad\u89e3\u66f4\u591a",
          "square.openchat.popupdesc.deletemessagesfor":
            "\u8acb\u9078\u64c7\u522a\u9664\u8a0a\u606f\u7684\u7bc4\u570d\u3002\n\u60a8\u53ef\u62d6\u66f3\u6ed1\u9f20\u4f86\u9078\u64c7\u6700\u591a50\u5247\u8981\u522a\u9664\u7684\u8a0a\u606f\u3002",
          "square.openchat.popupdesc.unreadmessagecountmarkedwithnicon":
            "\u6709\u65b0\u8a0a\u606f\u6642\uff0c\u6539\u7528\u300cN\u300d\u4f86\u8868\u793a\u672a\u8b80\u8a0a\u606f\u7684\u6578\u76ee\u3002",
          "square.openchat.popupdesc.unsendmessage":
            "\u4f9d\u6210\u54e1\u6240\u4f7f\u7528\u7684LINE\u7248\u672c\u800c\u5b9a\uff0c\u53ef\u80fd\u7121\u6cd5\u81ea\u6240\u6709\u6210\u54e1\u7684\u804a\u5929\u5ba4\u756b\u9762\u6536\u56de\u6b64\u8a0a\u606f\u3002\u78ba\u5b9a\u8981\u6536\u56de\u55ce\uff1f",
          "square.openchat.popuptitle.deletemessages":
            "\u522a\u9664\u8a0a\u606f",
          "square.openchatannouncements.title.announcements": "\u516c\u544a",
          "square.openchatcharacterprofiles.button.cancel": "\u53d6\u6d88",
          "square.openchatcharacterprofiles.button.save": "\u5957\u7528",
          "square.openchatcharacterprofiles.title.selectcharacter":
            "\u9078\u64c7\u5361\u901a\u5927\u982d\u7167",
          "square.openchatentry.button.confirm": "\u78ba\u5b9a",
          "square.openchatentry.desc.dontsendrudemessages":
            "<![CDATA[\u8acb\u907f\u514d\u63ed\u9732<font color=\\'#07B53B\\'>\u500b\u4eba\u8cc7\u8a0a\u3001\u50b3\u905e\u8ca0\u9762\u6216\u672a\u67e5\u8b49\u7684\u8a0a\u606f</font>]]>",
          "square.openchatentry.desc.followopenchatrules":
            "<![CDATA[\u70ba\u8b93\u6240\u6709\u7528\u6236\u958b\u5fc3\u4f7f\u7528\uff0c<font color=\\'#07B53B\\'>\u8acb\u4fdd\u6301\u79ae\u8c8c \u3001\u5c0a\u91cd\u4ed6\u4eba\u767c\u8a00\u3001\u9075\u5b88LINE\u793e\u7fa4\u4f7f\u7528\u689d\u6b3e</font>]]>",
          "square.openchatentry.desc.treatmemberswithrespect":
            "<![CDATA[\u7981\u6b62\u63ed\u9732<font color=\\'#07B53B\\'>LINE ID\uff1b\u7981\u6b62\u66b4\u529b\u3001\u8840\u8165\u3001\u8272\u60c5\u3001\u6050\u6016\u3001\u6709\u5bb3\u5152\u5c11\u8eab\u5fc3\u5065\u5eb7\u4e4b\u8a0e\u8ad6\uff1b\u7981\u6b62\u55ae\u7368\u6703\u9762\u3001\u50b3\u92b7\u8a0e\u8ad6</font>\u53ca\u4efb\u4f55\u9055\u6cd5\u884c\u70ba]]>",
          "square.openchatentry.header.dontsendrudemessages":
            "2. \u5efa\u8b70\u4e8b\u9805",
          "square.openchatentry.header.followopenchatrules":
            "3. \u958b\u5fc3\u4f7f\u7528",
          "square.openchatentry.header.treatmemberswithrespect":
            "1. \u7981\u6b62\u4e8b\u9805",
          "square.openchatentry.title.openchatuserules":
            "\u793e\u7fa4\u4f7f\u7528\u5c0f\u63d0\u9192",
          "square.openchatinvite.desc.userinvitedtojoinchat":
            "\u60a8\u5df2\u88ab\u9080\u8acb\u52a0\u5165\u300c%1\u300d\uff01",
          "square.openchatinvite.desc.userinvitedtojoinsquare":
            "\u60a8\u5df2\u88ab\u9080\u8acb\u52a0\u5165\u300c%1\u300d\uff01",
          "square.openchatlist.desc.viewchatandaddtofavorites": "",
          "square.openchatlist.header.yourchats":
            "\u5df2\u52a0\u5165\u7684\u804a\u5929\u5ba4%1",
          "square.openchatliveinvite.popupdesc.usefeatureonmobileapp":
            "\u6b64\u70ba\u667a\u6167\u624b\u6a5f\u7248LINE\u9650\u5b9a\u529f\u80fd\u3002",
          "square.openchatmember.button.default": "\u9810\u8a2d",
          "square.openchatmember.button.oldjoin": "\u7531\u820a\u5230\u65b0",
          "square.openchatmember.button.recentjoin": "\u7531\u65b0\u5230\u820a",
          "square.openchatmember.desc.days.other": "%d\u5929\u524d",
          "square.openchatmember.desc.hours.other": "%d\u5c0f\u6642\u524d",
          "square.openchatmember.desc.justnow": "\u525b\u525b",
          "square.openchatmember.desc.lastvisited": "\u6700\u5f8c\u67e5\u770b",
          "square.openchatmember.desc.minutes.other": "%d\u5206\u9418\u524d",
          "square.openchatmembers.desc.hundredthousandmembersth": "%1",
          "square.openchatmembers.desc.membersen": "%1",
          "square.openchatmembers.desc.memberskoja": "%1",
          "square.openchatmembers.desc.membersth": "%1",
          "square.openchatmembers.desc.tenthousandmemberskoja": "%1\u842c",
          "square.openchatmembers.desc.tenthousandmembersth": "%1",
          "square.openchatmembers.desc.thousandmembersen": "%1",
          "square.openchatmembers.desc.thousandmembersth": "%1",
          "square.openchatmenu.button.hidemessagecount":
            "\u4e0d\u986f\u793a\u672a\u8b80\u8a0a\u606f\u6578\n\u6709\u65b0\u8a0a\u606f\u6642\uff0c\u5c07\u986f\u793a\u300cN\u300d\u5716\u793a\u4f86\u4ee3\u66ff\u672a\u8b80\u7684\u793e\u7fa4\u8a0a\u606f\u6578\u3002",
          "square.openchatmenu.button.showmessagecount":
            "\u986f\u793a\u672a\u8b80\u8a0a\u606f\u6578",
          "square.openchatmenu.desc.joindate":
            "yyyy\u5e74m\u6708d\u65e5\u52a0\u5165",
          "square.openchatmenu.desc.messagereplies":
            "\u7cfb\u7d71\u5c07\u65bc\u5176\u4ed6\u6210\u54e1\u56de\u8986\u60a8\u7684\u8a0a\u606f\u6642\u50b3\u9001\u63d0\u9192\u7d66\u60a8\u3002",
          "square.openchatmenu.desc.onlyadmin":
            "\u53ea\u6709\u7ba1\u7406\u54e1\u53ca\u5171\u540c\u7ba1\u7406\u54e1\u7684\u756b\u9762\u6703\u986f\u793a\u5404\u6210\u54e1\u7684\u52a0\u5165\u6642\u9593\u3001\u6700\u5f8c\u4e00\u6b21\u67e5\u770b\u793e\u7fa4\u7684\u6642\u9593\u3002",
          "square.openchatmenu.desc.visitdays.other":
            "%1\u5929\u524d\u5df2\u67e5\u770b",
          "square.openchatmenu.desc.visitmonths.other":
            "%1\u500b\u6708\u524d\u5df2\u67e5\u770b",
          "square.openchatmenu.desc.visittoday":
            "\u4eca\u5929\u5df2\u67e5\u770b",
          "square.openchatmenu.desc.visityester":
            "\u6628\u5929\u5df2\u67e5\u770b",
          "square.openchatmenu.toggle.messagereplies":
            "\u6709\u4eba\u56de\u8986\u6211\u7684\u8a0a\u606f",
          "square.openchatmessage.desc.noreactions": "\u5c1a\u7121\u56de\u61c9",
          "square.openchatmessagefield.desc.readonlymode":
            "\u6b64\u793e\u7fa4\u76ee\u524d\u8a2d\u70ba\u300c\u700f\u89bd\u6a21\u5f0f\u300d\u3002",
          "square.openchatnotes.desc.subchatmemberscanseenotes":
            "\u6b64\u793e\u7fa4\u4e2d\u5176\u4ed6\u804a\u5929\u5ba4\u7684\u6210\u54e1\u4e5f\u53ef\u700f\u89bd\u6b64\u8a18\u4e8b\u672c\u4e2d\u7684\u8cbc\u6587\u3002",
          "square.openchatnotificationsettings.header.openchatnotifications":
            "\u793e\u7fa4",
          "square.openchatphoneverification.popupdesc.verifyphonenumberonmobileapp":
            "\u6b61\u8fce\u5149\u81e8\uff01\u8acb\u5148\u5728LINE\u61c9\u7528\u7a0b\u5f0f\u4e0a\u8a8d\u8b49\u96fb\u8a71\u865f\u78bc\uff0c\u518d\u958b\u59cb\u4f7f\u7528LINE\u793e\u7fa4\uff0c\u5171\u540c\u71df\u9020\u6240\u6709\u7528\u6236\u90fd\u80fd\u5b89\u5fc3\u4f7f\u7528\u7684\u670d\u52d9\u74b0\u5883\uff01",
          "square.openchatphoneverification.popuptitle.verificationrequired":
            "\u8a8d\u8b49\u63d0\u9192",
          "square.openchatpopup.button.cancel": "\u53d6\u6d88",
          "square.openchatpopup.button.confirm": "\u78ba\u5b9a",
          "square.openchatpopup.desc.changesetting":
            "\u6b64\u8b8a\u66f4\u5c07\u6703\u5957\u7528\u81f3\u793e\u7fa4\u53ca\u5176\u4e2d\u7684\u6240\u6709\u804a\u5929\u5ba4\uff0c\u78ba\u5b9a\u8981\u5957\u7528\u8b8a\u66f4\u55ce\uff1f",
          "square.openchatprivacysettings.desc.agerestrictedchat":
            "\u6b64\u793e\u7fa4\u9069\u5408\u5e74\u6eff18\u6b72\u7684\u7528\u6236\u3002",
          "square.openchatprivacysettings.desc.opentoallages":
            "\u6b64\u793e\u7fa4\u9069\u5408\u6240\u6709\u5e74\u9f61\u5c64\u7684\u7528\u6236\u3002",
          "square.openchatprivacysettings.popupdesc.entercodetojoinchat":
            "\u8acb\u8a2d\u5b9a\u7528\u6236\u52a0\u5165\u6642\u9808\u8f38\u5165\u7684\u53c3\u52a0\u5bc6\u78bc\u3002\u203b\u793e\u7fa4\u7684\u516c\u958b\u7bc4\u570d\u6539\u70ba\u300c\u9808\u8f38\u5165\u53c3\u52a0\u5bc6\u78bc\u300d\u5f8c\uff0c\u672a\u6210\u5e74\u6216\u672a\u5b8c\u6210\u300c\u5e74\u9f61\u78ba\u8a8d\u300d\u8a2d\u5b9a\u7684\u7528\u6236\u5c07\u7121\u6cd5\u52a0\u5165\u3002",
          "square.openchatprivacysettings.popupdesc.enterquestiontojoinchat":
            "\u8acb\u8f38\u5165\u7d66\u7533\u8acb\u8005\u7684\u554f\u984c\uff0c\u7ba1\u7406\u54e1\u6216\u5171\u540c\u7ba1\u7406\u54e1\u53ef\u700f\u89bd\u7533\u8acb\u8005\u7684\u7b54\u6848\u4e26\u6838\u51c6\u52a0\u5165\u3002\u203b\u793e\u7fa4\u7684\u516c\u958b\u7bc4\u570d\u6539\u70ba\u300c\u9808\u7ba1\u7406\u54e1\u6838\u51c6\u300d\u5f8c\uff0c\u672a\u6210\u5e74\u6216\u672a\u5b8c\u6210\u300c\u5e74\u9f61\u78ba\u8a8d\u300d\u8a2d\u5b9a\u7684\u7528\u6236\u5c07\u7121\u6cd5\u52a0\u5165\u3002",
          "square.openchatprofile.button.join":
            "\u5efa\u7acb\u500b\u4eba\u6a94\u6848\u4e26\u52a0\u5165",
          "square.openchatprofile.desc.chatsetindifferentcountry":
            "\u8acb\u6ce8\u610f\uff0c\u6b64\u793e\u7fa4\u8207\u60a8\u6240\u5c6c\u5730\u5340\u4e0d\u540c\u3002",
          "square.openchatprofile.desc.openchatsettoreadonly":
            "\u6b64\u793e\u7fa4\u76ee\u524d\u8a2d\u70ba\u300c\u700f\u89bd\u6a21\u5f0f\u300d",
          "square.openchatprofile.desc.tooltip":
            "\u52a0\u5165\u793e\u7fa4\u6642\u53ef\u4f7f\u7528\u65b0\u7684\u66b1\u7a31\u53ca\u500b\u4eba\u5716\u7247\u3002",
          "square.openchatsetting.desc.maxpeople":
            "\u7121\u6cd5\u5728\u5927\u578b\u793e\u7fa4\u4e2d\u8b8a\u66f4\u6b64\u8655\u7684\u8a2d\u5b9a\u3002",
          "square.openchatsetting.desc.mentionnoti":
            "\u5373\u4f7f\u95dc\u9589\u804a\u5929\u5ba4\u63d0\u9192\uff0c\u4e5f\u80fd\u96a8\u6642\u6536\u5230\u804a\u5929\u5ba4\u4e2d\u7684\u6a19\u8a3b\u63d0\u9192\u3002",
          "square.openchatsetting.desc.mentions": "\u6a19\u8a3b\u63d0\u9192",
          "square.openchatsetting.desc.onlyopen":
            "\u6b64\u9078\u9805\u50c5\u9650\u516c\u958b\u7bc4\u570d\u70ba\u6240\u6709\u5e74\u9f61\u5c64\u7684\u793e\u7fa4\u4f7f\u7528",
          "square.openchatsetting.desc.visibility":
            "\u5141\u8a31\u7528\u6236\u9810\u89bd\u53ca\u641c\u5c0b\u793e\u7fa4\u8a0a\u606f",
          "square.openchatsetting.desc.visibilityallowed": "\u5141\u8a31",
          "square.openchatsetting.desc.visibilitynotallowed":
            "\u4e0d\u5141\u8a31",
          "square.openchatsetting.desc.visiforco":
            "\u6b64\u804a\u5929\u5ba4\u4e2d\u7684\u8a0a\u606f\u5c07\u5728\u641c\u5c0b\u7d50\u679c\u4e2d\u986f\u793a\u3002\u7576\u793e\u7fa4\u4f7f\u7528\u76f8\u540c\u7684\u8a2d\u5b9a\u6642\uff0c\u672c\u9078\u9805\u4e5f\u53ef\u540c\u6642\u555f\u7528\u3002\u672c\u9078\u9805\u53ea\u80fd\u7531\u7ba1\u7406\u54e1\u9032\u884c\u66f4\u6539\u3002",
          "square.openchatsettings.button.allowmessagesfrom":
            "\u53ef\u50b3\u9001\u8a0a\u606f",
          "square.openchatsettings.button.continue": "\u78ba\u5b9a",
          "square.openchatsettings.button.leavemainchat":
            "\u9000\u51fa\u4e3b\u804a\u5929\u5ba4",
          "square.openchatsettings.button.leavesubchat":
            "\u9000\u51fa\u804a\u5929\u5ba4",
          "square.openchatsettings.button.managemembershipsystemmessages":
            "\u7ba1\u7406\u6210\u54e1\u52a0\u9000\u7684\u7cfb\u7d71\u8a0a\u606f",
          "square.openchatsettings.button.settoreadonlymode":
            "\u700f\u89bd\u6a21\u5f0f",
          "square.openchatsettings.desc.addopenchatdescription":
            "\u8f38\u5165\u793e\u7fa4\u7c21\u4ecb",
          "square.openchatsettings.desc.coverphotosetasprofilephotoandbackground":
            "\u793e\u7fa4\u7684\u5c01\u9762\u7167\u7247\u4e5f\u6703\u8a2d\u70ba\u793e\u7fa4\u6a94\u6848\u5716\u7247\u53ca\u804a\u5929\u5ba4\u80cc\u666f\u3002",
          "square.openchatsettings.desc.getnotifiedwhensomeonejoins":
            "\u5728\u65b0\u6210\u54e1\u52a0\u5165\u6642\u63a5\u6536\u63d0\u9192\u3002",
          "square.openchatsettings.desc.readonlymodeformembers":
            "\u50c5\u9650\u7ba1\u7406\u54e1\u53ca\u5171\u540c\u7ba1\u7406\u54e1\u80fd\u5728\u804a\u5929\u5ba4\u4e2d\u50b3\u9001\u8a0a\u606f\u3002",
          "square.openchatsettings.header.chatsettings": "",
          "square.openchatsettings.header.details": "",
          "square.openchatsettings.header.editsubchatprofile":
            "\u7de8\u8f2f\u804a\u5929\u5ba4\u500b\u4eba\u6a94\u6848",
          "square.openchatsettings.header.openchatsettings": "",
          "square.openchatsettings.header.subchatsettings": "",
          "square.openchatsettings.placeholder.enterhashtags":
            "\u8bf7\u8f93\u5165\u7b80\u4ecb",
          "square.openchatsettings.popup.searchoff":
            "\u6240\u6709\u8a0a\u606f\u5c07\u4e0d\u5141\u8a31\u641c\u5c0b\uff0c\u4e14\u4e0d\u518d\u986f\u793a\u65bc\u793e\u7fa4\u6a94\u6848\u5167\u3002\u78ba\u5b9a\u8981\u95dc\u9589\u641c\u5c0b\u55ce\uff1f",
          "square.openchatsettings.popup.searchon":
            "\u65b0\u8a0a\u606f\u5c07\u8a2d\u70ba\u5141\u8a31\u641c\u5c0b\uff0c\u4e26\u986f\u793a\u5728\u793e\u7fa4\u6a94\u6848\u5167\u3002\u78ba\u5b9a\u8981\u5141\u8a31\u641c\u5c0b\u55ce\uff1f",
          "square.openchatsettings.popupdesc.selectacoadmin":
            "\u9000\u51fa\u804a\u5929\u5ba4\u524d\uff0c\u5fc5\u9808\u9078\u64c7\u81f3\u5c111\u4f4d\u6210\u54e1\u70ba\u5171\u540c\u7ba1\u7406\u54e1\u3002",
          "square.openchatsettings.toggle.newmembernotification":
            "\u65b0\u6210\u54e1\u52a0\u5165\u63d0\u9192",
          "square.openchatsettingstatus.desc.readonlymodedisabled":
            "\u6240\u6709\u6210\u54e1\u90fd\u80fd\u50b3\u8a0a\u606f\u56c9\uff01",
          "square.openchatsettingstatus.desc.readonlymodeenabled":
            "\u76ee\u524d\u53ea\u6709\u7ba1\u7406\u54e1\u53ef\u4ee5\u50b3\u8a0a\u606f\u5594\uff01",
          "square.openchatsettingv.desc.allmessages":
            "\u6240\u6709\u8a0a\u606f",
          "square.openchatsettingv.desc.dontallow": "\u4e0d\u5141\u8a31",
          "square.openchatsettingv.desc.off":
            "\u6b64\u9078\u9805\u50c5\u9650\u958b\u555f\u300c\u5728\u641c\u5c0b\u7d50\u679c\u4e2d\u986f\u793a\u6b64\u793e\u7fa4\u300d\u7684\u8a2d\u5b9a\u5f8c\u624d\u53ef\u4f7f\u7528\u3002",
          "square.openchatsettingv.desc.on":
            "\u6b64\u793e\u7fa4\u4e2d\u7684\u8a0a\u606f\u5c07\u6703\u986f\u793a\u65bc\u641c\u5c0b\u7d50\u679c\u53ca\u793e\u7fa4\u6a94\u6848\u4e0a\u3002",
          "square.openchatsharelink.desc.sharelinktoinvitefriends":
            "\u9080\u8acb\u597d\u53cb\u5165\u793e\u7fa4\uff0c\u5171\u9cf4\u8a71\u984c\u66f4\u9ebb\u5409\uff01",
          "square.openchatsharelink.title.sharelink":
            "\u50b3\u9001\u793e\u7fa4\u9080\u8acb",
          "square.openchatsubchat.title.subchatname":
            "\u804a\u5929\u5ba4\u540d\u7a31",
          "square.openchatwallpapersettings.desc.wallpaperonlyseenbyyou":
            "\u80cc\u666f\u53ea\u6703\u5957\u7528\u5230\u60a8\u81ea\u5df1\u7684\u804a\u5929\u5ba4\u3002",
          "square.pdpa.policy.agree.btn": "\u78ba\u5b9a",
          "square.personaloption.alert.error.name":
            "\u6b64\u540d\u7a31\u5df2\u88ab\u4f7f\u7528\u3002\u8acb\u8f38\u5165\u5176\u4ed6\u540d\u7a31\u3002",
          "square.personaloption.chat": "\u63a5\u6536\u804a\u5929\u9080\u8acb",
          "square.personaloption.chat.desc":
            "\u63a5\u6536\u4f86\u81ea\u793e\u7fa4\u6210\u54e1\u7684\u9080\u8acb\u8a0a\u606f",
          "square.personaloption.copy": "\u9023\u7d50\u5df2\u8907\u88fd\u3002 ",
          "square.personaloption.friendrequest":
            "\u63a5\u6536\u597d\u53cb\u9080\u8acb",
          "square.personaloption.friendrequest.desc":
            "\u6210\u54e1\u53ef\u4ee5\u5411\u60a8\u50b3\u9001\u597d\u53cb\u9080\u8acb\u3002",
          "square.personaloption.greetingmessage":
            "\u7d66\u7ba1\u7406\u54e1\u7684\u8a0a\u606f",
          "square.personaloption.greetingmessage.default":
            "\u8acb\u8f38\u5165\u7d66\u7ba1\u7406\u54e1\u7684\u8a0a\u606f",
          "square.personaloption.guide": "\u8f38\u5165\u66b1\u7a31",
          "square.personaloption.join.btn": "\u52a0\u5165",
          "square.personaloption.joincode.btn":
            "\u8f38\u5165\u53c3\u52a0\u5bc6\u78bc",
          "square.personaloption.profile.title":
            "\u793e\u7fa4\u5c08\u5c6c\u500b\u4eba\u6a94\u6848",
          "square.personaloption.profile.title.tooltip.desc":
            "\u60a8\u53ef\u4ee5\u8a2d\u5b9a\u8981\u5728\u6b64\u793e\u7fa4\u4e2d\u4f7f\u7528\u7684\u66b1\u7a31\u53ca\u500b\u4eba\u5716\u7247\u3002\u203bLINE\u5e33\u865f\u7684\u500b\u4eba\u6a94\u6848\u4e0d\u6703\u516c\u958b\u65bc\u793e\u7fa4\u4e2d",
          "square.personaloption.sendrequest.btn": "\u7533\u8acb\u52a0\u5165",
          "square.personaloption.welcomemsg": "\u6b61\u8fce\u8a0a\u606f ",
          "square.policy.agree.btn": "\u540c\u610f ",
          "square.policy.title":
            "\u8acb\u540c\u610f\u670d\u52d9\u689d\u6b3e\u53ca\u653f\u7b56",
          "square.policy.viewall":
            "\u8a73\u95b1\u5b8c\u6574\u793e\u7fa4\u670d\u52d9\u689d\u6b3e",
          "square.popup.button.grantpermission": "\u78ba\u5b9a",
          "square.popup.button.setaspublic": "\u78ba\u5b9a\u8b8a\u66f4",
          "square.post.announcement.announce": "\u8a2d\u5b9a",
          "square.post.announcement.delete": "\u522a\u9664\u8cbc\u6587",
          "square.post.announcement.delete.desc":
            "\u78ba\u5b9a\u8981\u522a\u9664\u6b64\u8cbc\u6587\u55ce\uff1f\u4e5f\u5c07\u89e3\u9664\u5176\u91cd\u8981\u8cbc\u6587\u7684\u8a2d\u5b9a\u3002",
          "square.post.announcement.guide":
            "\u5c07\u8cbc\u6587\u8a2d\u5b9a\u70ba\u91cd\u8981\u8cbc\u6587\uff0c\u8b93\u5927\u5bb6\u90fd\u7167\u904e\u4f86\uff01",
          "square.post.announcement.list.title": "\u91cd\u8981\u8cbc\u6587",
          "square.post.announcement.list.zero":
            "\u5c1a\u7121\u4efb\u4f55\u8cbc\u6587",
          "square.post.announcement.mark":
            "\u8a2d\u5b9a\u70ba\u91cd\u8981\u8cbc\u6587",
          "square.post.announcement.mark.desc":
            "\u8a2d\u5b9a\u91cd\u8981\u8cbc\u6587\u6642\uff0c\u50c5\u9650\u7576\u5929\u9996\u6b21\u64cd\u4f5c\u6642\u6703\u50b3\u9001\u63d0\u9192\u7d66\u793e\u7fa4\u6210\u54e1\u3002",
          "square.post.announcement.postui": "\u91cd\u8981\u8cbc\u6587",
          "square.post.announcement.postui2":
            "<b>\u91cd\u8981\u8cbc\u6587</b>\uff1a",
          "square.post.announcement.push":
            "\u300c%1\u300d\u4e2d\u8a2d\u6709\u65b0\u7684\u91cd\u8981\u8cbc\u6587\u3002",
          "square.post.announcement.remove":
            "\u89e3\u9664\u8a2d\u5b9a\u70ba\u91cd\u8981\u8cbc\u6587",
          "square.post.announcement.seeall.plural.other":
            "%1\u5247\u91cd\u8981\u8cbc\u6587",
          "square.post.endpage.squarename": "%1",
          "square.post.error.deletedcomment":
            "\u7559\u8a00\u5df2\u88ab\u522a\u9664",
          "square.post.error.deletedjoined":
            "\u6b64\u8cbc\u6587\u5df2\u88ab\u522a\u9664\u3002 ",
          "square.post.error.deletedpost":
            "\u8a72\u5247\u8cbc\u6587\u5148\u524d\u5df2\u88ab\u522a\u9664",
          "square.post.error.write":
            "\u7ba1\u7406\u54e1\u5df2\u9650\u5236\u300c\u64b0\u5beb\u8cbc\u6587\u300d\u7684\u6b0a\u9650\uff0c\u56e0\u6b64\u7121\u6cd5\u64b0\u5beb\u8cbc\u6587\u3002 ",
          "square.post.hashtag.title": "%1\u4e2d\u7684%2",
          "square.post.join": "\u52a0\u5165",
          "square.post.joinguide":
            "\u5343\u842c\u5225\u932f\u904e\uff01\u73fe\u5728\u5c31\u52a0\u5165\u300c%1\u300d\uff0c\u548c\u5176\u4ed6\u6210\u54e1\u958b\u5fc3\u804a\u5929\u3001\u5206\u4eab\u8cbc\u6587\u5427\u3002",
          "square.post.linktype.chatlist":
            "\u5206\u4eab\u4e86\u793e\u7fa4\u4e2d\u7684\u8cbc\u6587\u3002",
          "square.post.linktype.scroll":
            "\u5206\u4eab\u4e86\u793e\u7fa4\u4e2d\u7684\u8cbc\u6587\u3002",
          "square.post.linktype.title": "\u67e5\u770b\u8a18\u4e8b\u672c",
          "square.post.share.chatlist": "\u5206\u4eab\u81f3\u804a\u5929\u5ba4",
          "square.post.share.popup":
            "\u5206\u4eab\u793e\u7fa4\u4e2d\u7684\u8cbc\u6587",
          "square.post.title": "\u8a18\u4e8b\u672c",
          "square.post.write.guide":
            "\u793e\u7fa4\u6210\u54e1\u53ef\u700f\u89bd\u6b64\u8cbc\u6587\u3002",
          "square.post.write.guidecountryspecific":
            "\u793e\u7fa4\u4e2d\u7684\u6210\u54e1\u53ef\u700f\u89bd\u3002",
          "square.post.write.hashtag":
            "\u5728\u60a8\u7684\u793e\u5718\u6295\u7a3f\u4e2d\u52a0\u4e0a\u6a19\u7c64\u5427\uff01\n\u6a19\u7c64\u53ef\u8b93\u5176\u4ed6\u793e\u5718\u6210\u54e1\u66f4\u5bb9\u6613\u627e\u5230\u6295\u7a3f\u4e26\u8ac7\u8ad6\u7279\u5b9a\u4e3b\u984c\u3002",
          "square.post.zeropage.newpost": "\u8cbc\u6587",
          "square.post.zeropage.welcome":
            "\u6436\u5148\u5728\u6b64\u793e\u7fa4\u8cbc\u6587\u5427\uff01",
          "square.postpopup.join":
            "\u53ea\u6709\u793e\u5718\u6210\u54e1\u80fd\u4f7f\u7528\u6b64\u529f\u80fd\uff0c\u662f\u5426\u8981\u52a0\u5165\u6b64\u793e\u5718\uff1f",
          "square.privacy.setting.approval":
            "\u9808\u7ba1\u7406\u54e1\u6838\u51c6",
          "square.privacy.setting.guide":
            "\u7d93\u7ba1\u7406\u54e1\u6838\u51c6\u6216\u8f38\u5165\u6b63\u78ba\u7684\u53c3\u52a0\u5bc6\u78bc\u5f8c\uff0c\u7528\u6236\u53ef\u52a0\u5165\u6b64\u793e\u7fa4\u4ee5\u53ca\u5176\u4e2d\u7684\u804a\u5929\u5ba4\u3002",
          "square.privacy.setting.joincode":
            "\u9808\u8f38\u5165\u53c3\u52a0\u5bc6\u78bc",
          "square.privacy.setting.off": "\u5411\u6240\u6709\u4eba\u516c\u958b",
          "square.privacy.setting.off.guide":
            "\u6240\u6709\u7528\u6236\u7686\u53ef\u52a0\u5165\u6b64\u793e\u7fa4\u4ee5\u53ca\u5176\u4e2d\u7684\u804a\u5929\u5ba4\u3002",
          "square.privacy.setting.title":
            "\u516c\u958b\u7bc4\u570d\u8a2d\u5b9a",
          "square.privacy.turnoff.alert":
            "\u78ba\u5b9a\u8981\u8b8a\u66f4\u70ba\u6240\u6709\u7528\u6236\u7686\u53ef\u52a0\u5165\u55ce\uff1f",
          "square.privcay.setting.off.guide":
            "\u6240\u6709\u7528\u6236\u7686\u53ef\u52a0\u5165\u6b64\u793e\u5718\u548c\u5176\u4e2d\u7684\u804a\u5929\u5ba4\u3002",
          "square.qrcode.save.failed":
            "\u884c\u52d5\u689d\u78bc\u7121\u6cd5\u5132\u5b58\u3002",
          "square.readonlyopenchat.popupbutton.ok": "\u78ba\u5b9a",
          "square.repairdata.button.repairdata": "\u540c\u6b65",
          "square.repairdata.desc.syncrepairdata":
            "\u5c07\u793e\u7fa4\u8cc7\u6599\u9032\u884c\u540c\u6b65\u3002\n\u540c\u6b65\u8cc7\u6599\uff1a\u793e\u7fa4\u8cc7\u6599\u53ca\u76f8\u95dc\u8a2d\u5b9a",
          "square.repairdata.popupdesc.repairinginprogress":
            "\u540c\u6b65\u4e2d\u3002\n\u8acb\u52ff\u5728\u540c\u6b65\u5b8c\u6210\u524d\u95dc\u9589\u8996\u7a97\u3002",
          "square.repairdata.popupdesc.synccomplete":
            "\u5df2\u5c07\u793e\u7fa4\u8cc7\u6599\u540c\u6b65\u5b8c\u6210\u3002",
          "square.repairdata.title.repairdata":
            "\u540c\u6b65\u793e\u7fa4\u8cc7\u6599",
          "square.report.page.reason01": "",
          "square.report.page.reason02": "",
          "square.report.page.reason03": "",
          "square.report.page.reason04": "",
          "square.report.policy.desc":
            "\u60a8\u6240\u6aa2\u8209\u7684\u5167\u5bb9\u5c07\u4f9d\u7167\u793e\u7fa4\u7684\u76f8\u95dc\u689d\u6b3e\u9032\u884c\u5be9\u6838\u53ca\u5f8c\u7e8c\u8655\u7406\u3002",
          "square.report.policy.desc01": "",
          "square.report.policy.desc02": "",
          "square.report.policy.message": "",
          "square.report.subTitle":
            "\u6aa2\u8209\u6b64\u5247\u8a18\u4e8b\u672c\u8cbc\u6587\n\uff08\u8cbc\u6587\u8005\uff1a%1\uff09",
          "square.reportopenchat.desc.reportchatfromprofile":
            "\u60a8\u6aa2\u8209\u7684\u793e\u7fa4\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u793e\u7fa4\u540d\u7a31\u3001\u5c01\u9762\u7167\u7247\u8207\u6210\u54e1\u6578\uff09\u3001\u793e\u7fa4\u5167\u6700\u8fd1\u50b3\u9001\u7684100\u5247\u8a0a\u606f\u3001\u60a8\u7684\u8cc7\u8a0a\u4ee5\u53ca\u793e\u7fa4\u7ba1\u7406\u54e1\u7684\u76f8\u95dc\u8cc7\u8a0a\uff08\u5305\u62ec\u65bc\u793e\u7fa4\u5167\u4f7f\u7528\u7684\u66b1\u7a31\u53ca\u8b58\u5225\u8cc7\u8a0a\uff09\u3002",
          "square.reportopenchat.desc.reportchatfromsettings":
            "\u60a8\u6aa2\u8209\u7684\u793e\u7fa4\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u793e\u7fa4\u540d\u7a31\u3001\u5c01\u9762\u7167\u7247\u8207\u6210\u54e1\u6578\uff09\u3001\u793e\u7fa4\u5167\u6700\u8fd1\u50b3\u9001\u768450\u5247\u8a0a\u606f\u3001\u60a8\u7684\u8cc7\u8a0a\u4ee5\u53ca\u793e\u7fa4\u7ba1\u7406\u54e1\u7684\u76f8\u95dc\u8cc7\u8a0a\uff08\u5305\u62ec\u65bc\u793e\u7fa4\u5167\u4f7f\u7528\u7684\u66b1\u7a31\u53ca\u8b58\u5225\u8cc7\u8a0a\uff09\u3002",
          "square.reportopenchat.desc.reportcommentonopenchatnote":
            "\u60a8\u6aa2\u8209\u7684\u7559\u8a00\u8a73\u60c5\uff08\u4f8b\uff1a\u6587\u5b57\u3001\u5716\u7247\u6216\u8868\u60c5\u8cbc\uff09\u3001\u793e\u7fa4\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u540d\u7a31\u3001\u5c01\u9762\u7167\u7247\u8207\u6210\u54e1\u6578\uff09\u3001\u60a8\u7684\u8cc7\u8a0a\u4ee5\u53ca\u88ab\u6aa2\u8209\u7528\u6236\u7684\u76f8\u95dc\u8cc7\u8a0a\uff08\u5305\u62ec\u88ab\u6aa2\u8209\u7528\u6236\u7684\u500b\u4eba\u5716\u7247\u3001\u53c3\u8207\u72c0\u6cc1\u3001\u65bc\u793e\u7fa4\u5167\u4f7f\u7528\u7684\u66b1\u7a31\u8207\u5176\u4ed6\u8b58\u5225\u8cc7\u8a0a\uff09\u3002",
          "square.reportopenchat.desc.reportopenchatmember":
            "\u60a8\u6aa2\u8209\u7684\u793e\u7fa4\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u793e\u7fa4\u540d\u7a31\u3001\u5c01\u9762\u7167\u7247\u8207\u6210\u54e1\u6578\uff09\u3001\u793e\u7fa4\u5167\u6700\u8fd1\u50b3\u9001\u7684100\u5247\u8a0a\u606f\u3001\u60a8\u7684\u8cc7\u8a0a\u4ee5\u53ca\u88ab\u6aa2\u8209\u7528\u6236\u7684\u76f8\u95dc\u8cc7\u8a0a\uff08\u5305\u62ec\u88ab\u6aa2\u8209\u7528\u6236\u7684\u500b\u4eba\u5716\u7247\u3001\u65bc\u793e\u7fa4\u5167\u4f7f\u7528\u7684\u66b1\u7a31\u53ca\u8b58\u5225\u8cc7\u8a0a\uff09\u3002",
          "square.reportopenchat.desc.reportopenchatmessage":
            "\u60a8\u6aa2\u8209\u7684\u793e\u7fa4\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u793e\u7fa4\u540d\u7a31\u3001\u5c01\u9762\u7167\u7247\u8207\u6210\u54e1\u6578\uff09\u3001\u793e\u7fa4\u5167\u6700\u8fd1\u50b3\u9001\u768410\u5247\u8a0a\u606f\u3001\u60a8\u7684\u8cc7\u8a0a\u4ee5\u53ca\u88ab\u6aa2\u8209\u7528\u6236\u7684\u76f8\u95dc\u8cc7\u8a0a\uff08\u5305\u62ec\u88ab\u6aa2\u8209\u7528\u6236\u7684\u500b\u4eba\u5716\u7247\u3001\u65bc\u793e\u7fa4\u5167\u4f7f\u7528\u7684\u66b1\u7a31\u53ca\u8b58\u5225\u8cc7\u8a0a\uff09\u3002",
          "square.reportopenchat.desc.reportopenchatnote":
            "\u60a8\u6aa2\u8209\u7684\u8a18\u4e8b\u672c\u5167\u5bb9\uff08\u4f8b\uff1a\u6587\u5b57\u3001\u5716\u7247\u3001\u5f71\u7247\u6216\u8cbc\u5716\uff09\u3001\u793e\u7fa4\u76f8\u95dc\u8cc7\u8a0a\uff08\u4f8b\uff1a\u793e\u7fa4\u540d\u7a31\u3001\u5c01\u9762\u7167\u7247\u8207\u6210\u54e1\u6578\uff09\u3001\u60a8\u7684\u8cc7\u8a0a\u4ee5\u53ca\u88ab\u6aa2\u8209\u7528\u6236\u7684\u76f8\u95dc\u8cc7\u8a0a\uff08\u5305\u62ec\u88ab\u6aa2\u8209\u7528\u6236\u7684\u500b\u4eba\u5716\u7247\u3001\u53c3\u8207\u72c0\u6cc1\u3001\u65bc\u793e\u7fa4\u5167\u4f7f\u7528\u7684\u66b1\u7a31\u4ee5\u53ca\u8b58\u5225\u8cc7\u8a0a\uff09\u3002",
          "square.requesttojoin.button.submit": "\u9001\u51fa",
          "square.set.joincode.input.guide": "\u8f38\u5165\u5bc6\u78bc",
          "square.set.question.input.guide":
            "\u8acb\u8f38\u5165\u7d66\u7533\u8acb\u8005\u7684\u554f\u984c\uff0c\u7ba1\u7406\u54e1\u6216\u5171\u540c\u7ba1\u7406\u54e1\u53ef\u700f\u89bd\u7533\u8acb\u8005\u7684\u7b54\u6848\u4e26\u6838\u51c6\u52a0\u5165\u3002",
          "square.setopenchatprofile.button.characterprofile":
            "\u9078\u64c7\u5361\u901a\u5927\u982d\u7167",
          "square.setting.auth.announcement": "\u8a2d\u5b9a\u516c\u544a",
          "square.setting.auth.message.post":
            "\u522a\u9664\u8a0a\u606f\u548c\u8cbc\u6587",
          "square.settings.deleteaccount.desc":
            "\u793e\u7fa4\u7ba1\u7406\u54e1\u6b0a\u9650\u5c07\u81ea\u52d5\u8f49\u79fb\u7d66\u53e6\u4e00\u4f4d\u6210\u54e1\u3002",
          "square.settings.managesquare.defaultchatroom.desc":
            "\u9810\u8a2d\u804a\u5929\u5ba4\u7121\u6cd5\u522a\u9664\u3002",
          "square.settings.managesquare.defaultchatroom.title":
            "\u300c%1\u300d\u793e\u5718\u7684\u9810\u8a2d\u804a\u5929\u5ba4",
          "square.settings.managesquare.privatechat":
            "\u5141\u8a31\u975e\u516c\u958b\u804a\u5929",
          "square.settings.managesquare.privatechat.desc":
            "\u6210\u54e1\u53ef\u5efa\u7acb\u975e\u516c\u958b\u804a\u5929\u5ba4\uff0c\u6216\u8005\u76f4\u63a5\u50b3\u9001\u8a0a\u606f\u7d66\u5176\u4ed6\u6210\u54e1\u3002",
          "square.settings.memberlist.members.subtitle":
            "\u804a\u5929\u6210\u54e1",
          "square.settings.members": "\u6210\u54e1\uff08%n\uff09",
          "square.settings.myprofile.leavesquare": "\u9000\u51fa\u793e\u7fa4",
          "square.sub.name.title": "\u804a\u5929\u5ba4\u540d\u7a31",
          "square.thread.desc.nochat":
            "\u8a0e\u8ad6\u4e32\u5167\u7684\u8a0a\u606f\u5c07\u4e0d\u6703\u986f\u793a\u65bc\u804a\u5929\u5ba4\u3002",
          "square.thread.desc.startofthread":
            "\u81f3\u804a\u5929\u5ba4\u67e5\u770b\u8a0a\u606f",
          "square.thread.placeholder.replytothread":
            "\u65bc\u8a0e\u8ad6\u4e32\u5167\u56de\u8986",
          "square.thread.title.thread": "\u8a0e\u8ad6\u4e32",
          "square.thread.toast.nolongerwatching":
            "\u5df2\u5f9e\u6211\u7684\u6700\u611b\u79fb\u9664",
          "square.thread.toast.nowwatching":
            "\u5df2\u65b0\u589e\u81f3\u6211\u7684\u6700\u611b",
          "square.timeline.button.tooltip":
            "\u8ddf\u65b0\u670b\u53cb\n\u804a\u804a\u6709\u8da3\u4e8b\u7269\u5427\uff01",
          "square.tooltip.chatroom.settings.changename":
            "\u60a8\u53ef\u70ba\u9810\u8a2d\u804a\u5929\u5ba4\u8a2d\u5b9a\u540d\u7a31\u548c\u8cc7\u8a0a\u3002",
          "square.unsupported.version.message":
            "\u60a8\u76ee\u524d\u4f7f\u7528\u7684\u7248\u672c\u4e0d\u652f\u63f4\u6b64\u529f\u80fd\u3002\n\u8acb\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u3002",
          "square.urlscheme.alert.linkjoin.function.off":
            "\u7121\u6cd5\u900f\u904e\u9080\u8acb\u9023\u7d50\u52a0\u5165\uff0c\n\u8acb\u627e\u793e\u7fa4\u6210\u54e1\u9080\u8acb\u60a8\u52a0\u5165\u3002",
          "square.urlscheme.desc2":
            "\u60a8\u53ea\u80fd\u5f9eiOS\u6216Android\u88dd\u7f6e\u52a0\u5165\u6b64\u793e\u5718\u3002 ",
          "square.urlscheme.error.notexist":
            "\u6b64\u793e\u7fa4\u4e0d\u5b58\u5728",
          "square.urlscheme.invite.msg":
            "\u60a8\u5df2\u88ab\u9080\u8acb\u52a0\u5165\u793e\u7fa4\u3002",
          "square.urlscheme.package":
            "[%1] \u60a8\u5df2\u88ab\u9080\u8acb\u52a0\u5165\u793e\u7fa4\u3002\n%3\n%2",
          "square.urlscheme.package.chatroom":
            "\u60a8\u5df2\u88ab\u9080\u8acb\u52a0\u5165\u300c%1\u300d\uff01\u8acb\u9ede\u9078\u4ee5\u4e0b\u9023\u7d50\u52a0\u5165\u793e\u7fa4\uff01\n%2",
          "square.urlscheme.package.chatroom2": "",
          "square.user.admin": "\u7ba1\u7406\u54e1",
          "square.user.coadmin": "\u5171\u540c\u7ba1\u7406\u54e1",
          "square.userpopup.blockinvite": "\u62d2\u6536\u9080\u8acb",
          "square.userpopup.error.alert.notmember":
            "\u8a72\u7528\u6236\u5df2\u4e0d\u662f\u6b64\u793e\u7fa4\u7684\u6210\u54e1",
          "square.userpopup.friendsinfo.btn":
            "\u67e5\u770b\u500b\u4eba\u6a94\u6848 ",
          "square.userpopup.friendsrequest.btn": "\u597d\u53cb\u9080\u8acb",
          "square.userpopup.kickout.ban.btn": "\u5f37\u5236\u9000\u51fa",
          "square.userpopup.kickout.btn": "\u5f37\u5236\u9000\u51fa",
          "square.userpopup.kickout.cancel.btn": "\u53d6\u6d88",
          "square.userpopup.post.count.btn": "\u8cbc\u6587",
          "square.yourthreads.title.yourthreads":
            "\u6211\u7684\u8a0e\u8ad6\u4e32",
          "sticion.msg.desc.expired":
            "\u6b64\u7d44\u8868\u60c5\u8cbc\u7684\u4f7f\u7528\u6548\u671f\u5df2\u904e",
          "sticker.btn.deleteThisSticker": "\u522a\u9664\u8cbc\u5716\u7d44",
          "sticker.btn.openWebStore": "\u8cbc\u5716\u5c0f\u8216",
          "sticker.customsticker.btn.edit": "\u8b8a\u66f4\u6587\u5b57",
          "sticker.customsticker.cancelalert.desc":
            "\u76ee\u524d\u7684\u6587\u5b57\u8cc7\u6599\u5c1a\u672a\u5132\u5b58\uff0c\u78ba\u5b9a\u8981\u96e2\u958b\u6b64\u9801\u9762\u55ce\uff1f",
          "sticker.customsticker.discard.alert": "\u96e2\u958b",
          "sticker.customsticker.edit.overflow":
            "\u5b57\u6578\u8d85\u904e\u4e0a\u9650",
          "sticker.customsticker.error.updatename.desc":
            "\u7121\u6cd5\u8b8a\u66f4\u6587\u5b57",
          "sticker.customsticker.invalidwordupdate.desc":
            "\u7531\u65bc\u8cbc\u5716\u542b\u6709\u7121\u6cd5\u4f7f\u7528\u7684\u5b57\u8a5e\uff0c\u8acb\u4fee\u6539\u6587\u5b57\u5167\u5bb9\u624d\u53ef\u7e7c\u7e8c\u4f7f\u7528\u3002",
          "sticker.customsticker.sync.alert":
            "\u60a8\u5728\u96fb\u8166\u4e0a\u8f38\u5165\u7684\u8cbc\u5716\u6587\u5b57\u53ef\u80fd\u7121\u6cd5\u7acb\u5373\u53cd\u6620\u81f3\u884c\u52d5\u88dd\u7f6e\u3002\u8acb\u7531\u884c\u52d5\u88dd\u7f6e\u524d\u5f80LINE\u7684\u300c\u8a2d\u5b9a\u300d\uff1e\u300c\u8cbc\u5716\u300d\uff1e\u300c\u6211\u7684\u8cbc\u5716\u300d\u8655\uff0c\u4e0b\u8f09\u66f4\u65b0\u6587\u5b57\u5f8c\u7684\u8cbc\u5716\u4f7f\u7528\u3002",
          "sticker.customsticker.tooltip":
            "\u8cbc\u5716\u6587\u5b57\u96a8\u4f60\u586b\uff01",
          "sticker.download.btn": "\u4e0b\u8f09",
          "sticker.download.fail":
            "\u7121\u6cd5\u4e0b\u8f09\u3002\n\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "sticker.downloadAll.confirm":
            "\u8981\u4e0b\u8f09\u6240\u6709\u8cbc\u5716\u55ce\uff1f",
          "sticker.downloadAll.desc":
            "\u60a8\u53ef\u4e00\u6b21\u4e0b\u8f09\u6240\u64c1\u6709\u7684\u5168\u90e8\u8cbc\u5716\u3002",
          "sticker.downloadAll.downloading":
            "\u8cbc\u5716\u6b63\u5728\u4e0b\u8f09...",
          "sticker.downloading.desc":
            "\u6b63\u5728\u4e0b\u8f09\u8cbc\u5716\u3002\n\u8acb\u7a0d\u5019\u3002",
          "sticker.edit.hint.default": "****",
          "sticker.edit.invalidword.desc":
            "\u542b\u6709\u7121\u6cd5\u4f7f\u7528\u7684\u5b57\u8a5e",
          "sticker.error.downloadlfailed.desc":
            "\u7121\u6cd5\u4e0b\u8f09\u8cbc\u5716\u3002",
          "sticker.expired.desc":
            "\u300c%1\u300d\u5df2\u904e\u671f\uff0c\u4e26\u5c07\u81ea\u52d5\u522a\u9664\u3002",
          "sticker.msg.desc.delete": "\u522a\u9664",
          "sticker.msg.desc.expired":
            "\u8cbc\u5716\u7684\u4f7f\u7528\u6548\u671f\u5df2\u904e\u3002",
          "sticker.msgsticker.button.back": "\u8fd4\u56de",
          "sticker.msgsticker.button.cancel": "\u53d6\u6d88",
          "sticker.msgsticker.button.edit": "\u8f38\u5165\u6587\u5b57",
          "sticker.msgsticker.button.save": "\u5132\u5b58",
          "sticker.msgsticker.desc.howtoedit":
            "\u9ede\u9078\u8cbc\u5716\u4f86\u7de8\u8f2f\u6587\u5b57\u5427\uff01",
          "sticker.msgsticker.desc.prompt":
            "\u5df2\u50b3\u9001\u7684\u8cbc\u5716\u6587\u5b57\u5c07\u4e0d\u53d7\u6b64\u6b21\u8b8a\u66f4\u5f71\u97ff\u3002",
          "sticker.msgsticker.validation.errorrefresh":
            "\u7121\u6cd5\u986f\u793a\u6587\u5b57\uff0c\u8acb\u9ede\u4e00\u4e0b\u8cbc\u5716\u91cd\u65b0\u6574\u7406\u3002",
          "sticker.msgsticker.validation.toolong":
            "\u8acb\u6e1b\u5c11\u5b57\u6578",
          "sticker.nearlyExpired.desc.other":
            "\u8cbc\u5716\u7d44\u5c07\u65bc%n\u5929\u5f8c\u904e\u671f\u3002",
          "sticker.recommendedSticker.label": "\u63a8\u85a6\u8cbc\u5716",
          "sticker.search.hint": "\u641c\u5c0b",
          "sticker.search.nosearchresult":
            "\u627e\u4e0d\u5230\u7b26\u5408\u7684\u8cc7\u6599\u3002",
          "sticker.stickerspremium.deletsticker.popup":
            "\u78ba\u5b9a\u8981\u7531\u60a8\u7684\u8d85\u503c\u65b9\u6848\u8cbc\u5716\u4e2d\u522a\u9664\u55ce\uff1f",
          "sticker.stickerspremium.dropped.desc":
            "\u60a8\u53ef\u8cfc\u8cb7\u6b64\u7d44\u8cbc\u5716\u4ee5\u7e7c\u7e8c\u4f7f\u7528\u3002",
          "sticker.stickerspremium.dropped.title":
            "\u6b64\u7d44\u8cbc\u5716\u4e0d\u518d\u914d\u5408\u300cLINE\u8cbc\u5716\u8d85\u503c\u65b9\u6848\u300d\u63d0\u4f9b\u9078\u7528",
          "sticker.stickerspremium.emojidropped.desc":
            "\u82e5\u8981\u7e7c\u7e8c\u4f7f\u7528\uff0c\u8acb\u53e6\u884c\u8cfc\u5165\u3002",
          "sticker.stickerspremium.emojidropped.title":
            "\u6b64\u7d44\u8868\u60c5\u8cbc\u4e0d\u518d\u914d\u5408\n\u300cLINE\u8cbc\u5716\u8d85\u503c\u65b9\u6848\u300d\u63d0\u4f9b\u9078\u7528",
          "sticker.stickerspremium.emojiexpired.desc":
            "\u82e5\u8981\u7e7c\u7e8c\u4f7f\u7528\u6b64\u7d44\u8868\u60c5\u8cbc\uff0c\n\u8acb\u7e8c\u8a02\u9032\u968e\u578b\u65b9\u6848\u3002",
          "sticker.stickerspremium.expired.desc":
            "\u60a8\u53ef\u91cd\u65b0\u8a02\u8cfc\u8d85\u503c\u65b9\u6848\uff0c\u4ee5\u7e7c\u7e8c\u4f7f\u7528\u6b64\u7d44\u8cbc\u5716\u3002",
          "sticker.stickerspremium.expired.title":
            "\u8d85\u503c\u65b9\u6848\u7684\u6548\u671f\u5df2\u7d50\u675f",
          "sticker.unpurchased.purchase.btn": "\u8cfc\u8cb7\u5546\u54c1",
          "sticker.unpurchased.recommended.title": "\u8cbc\u5716\u63a8\u85a6",
          "sticon.downloadAll.desc":
            "\u60a8\u53ef\u4e00\u6b21\u4e0b\u8f09\u60a8\u7684\u6240\u6709\u8868\u60c5\u8cbc",
          "sticon.downloadAll.downloading":
            "\u8868\u60c5\u8cbc\u5716\u4e0b\u8f09\u4e2d\u2026",
          "sticon.downloading.desc":
            "\u8868\u60c5\u8cbc\u5716\u4e0b\u8f09\u4e2d\u3002\n\u8acb\u7a0d\u5019\u3002",
          "sticon.expired.desc":
            "\u300c%1\u300d\u5df2\u904e\u671f\uff0c\u4e26\u5c07\u81ea\u52d5\u522a\u9664\u3002",
          "sticon.nearlyExpired.desc.other":
            "\u6b64\u7d44\u8868\u60c5\u8cbc\u5c07\u65bc%n\u5929\u5f8c\u904e\u671f\u3002",
          "sticon.recommendedEmoji.label": "\u63a8\u85a6\u8868\u60c5\u8cbc",
          "sticon.stickerspremium.deletemoji.popup":
            "\u78ba\u5b9a\u8981\u7531\u60a8\u7684\u8d85\u503c\u65b9\u6848\u8cbc\u5716\u4e2d\u522a\u9664\u55ce\uff1f",
          "subprofile.common.button.cancel": "\u53d6\u6d88",
          "subprofile.common.popupbutton.continue": "\u7e7c\u7e8c",
          "subprofile.common.toast.settingupdated":
            "\u500b\u4eba\u6a94\u6848\u8a2d\u5b9a\u5df2\u66f4\u65b0\u3002",
          "subprofile.editfriends.button.done": "\u5b8c\u6210",
          "subprofile.editfriends.popupdesc.dontshowagain":
            "\u4e0d\u518d\u986f\u793a",
          "subprofile.editfriends.popuptitle.errorabletoretry":
            "\u90e8\u5206\u597d\u53cb\u7121\u6cd5\u5957\u7528\u8a2d\u5b9a\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "subprofile.editfriends.popuptitle.errorunabletoretry":
            "\u90e8\u5206\u597d\u53cb\u7121\u6cd5\u5957\u7528\u8a2d\u5b9a\u3002",
          "subprofile.editfriends.popuptitle.maxlimiterror":
            "\u53ef\u5957\u7528\u500b\u4eba\u6a94\u6848\u8a2d\u5b9a\u7684\u597d\u53cb\u4eba\u6578\u5df2\u9054\u4e0a\u9650\u3002",
          "subprofile.editfriends.popuptitle.networkerror":
            "\u7db2\u8def\u767c\u751f\u932f\u8aa4\u3002\u8acb\u78ba\u8a8d\u7db2\u8def\u9023\u7dda\u5f8c\uff0c\u518d\u8a66\u4e00\u6b21\u3002",
          "subprofile.editfriends.popuptitle.onlyonmobileapp":
            "\u6b64\u70ba\u667a\u6167\u624b\u6a5f\u7248LINE\u61c9\u7528\u7a0b\u5f0f\u9650\u5b9a\u529f\u80fd\u3002",
          "subprofile.editfriends.popuptitle.showndifferentprofile":
            "\u5c07\u5207\u63db\u5c0d\u6b64\u4f4d\u597d\u53cb\u986f\u793a\u7684\u500b\u4eba\u6a94\u6848\u3002\u78ba\u5b9a\u8981\u7e7c\u7e8c\u64cd\u4f5c\u55ce\uff1f",
          "subprofile.editfriends.popuptitle.showthisprofile":
            "\u60a8\u9078\u64c7\u7684\u597d\u53cb\u5c07\u53ef\u700f\u89bd\u6b64\u500b\u4eba\u6a94\u6848\u3002\u78ba\u5b9a\u8981\u7e7c\u7e8c\u64cd\u4f5c\u55ce\uff1f",
          "subprofile.editfriends.popuptitle.temporaryerror":
            "\u767c\u751f\u66ab\u6642\u6027\u932f\u8aa4\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "subprofile.editfriends.popuptitle.temporaryerrortryagain":
            "\u7121\u6cd5\u8b80\u53d6\u597d\u53cb\u540d\u55ae\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "subprofile.editfriends.subtitle.addfriend":
            "\u65b0\u589e\u597d\u53cb",
          "subprofile.editfriends.title.onlyonmobileapp":
            "\u5b50\u57fa\u672c\u6a94\u6848\u50c5\u53ef\u900f\u904e\u667a\u6167\u624b\u6a5f\u7248\u5efa\u7acb\u6216\u522a\u9664\u3002",
          "subprofile.editfriends.title.selectprofile":
            "\u9078\u64c7\u500b\u4eba\u6a94\u6848",
          "subprofile.editfriends.toast.profileupdatedplural.other":
            "\u5df2\u5411%n\u4f4d\u597d\u53cb\u66f4\u65b0\u500b\u4eba\u6a94\u6848\u3002",
          "subprofile.friendsprofile.title.setyourprofile":
            "\u8a2d\u5b9a\u500b\u4eba\u6a94\u6848\u7684\u986f\u793a",
          "subprofile.friendsprofile.tooltip.subprofile":
            "\u53ef\u8a2d\u5b9a\u8981\u5c0d\u6b64\u597d\u53cb\u986f\u793a\u7684\u500b\u4eba\u6a94\u6848\u3002",
          "subprofile.groupchatmenu.group.profile": "",
          "subprofile.groupchatmenu.tooltip.subprofile":
            "\u53ef\u8b8a\u66f4\u5c0d\u7fa4\u7d44\u804a\u5929\u5ba4\u5167\u7684\u597d\u53cb\u986f\u793a\u7684\u500b\u4eba\u6a94\u6848\u3002",
          "subprofile.groupprofile.tooltip.subprofile":
            "\u53ef\u8a2d\u5b9a\u8981\u5728\u6b64\u7fa4\u7d44\u4f7f\u7528\u7684\u500b\u4eba\u6a94\u6848\u3002",
          "subprofile.groupsettings.button.edit": "\u7de8\u8f2f",
          "subprofile.groupsettings.subtitle.amountofprofile.other":
            "\u5df2\u986f\u793a%n\u7b46\u500b\u4eba\u6a94\u6848",
          "subprofile.profile.tooltip.onlyonmobileapp":
            "\u900f\u904e\u667a\u6167\u624b\u6a5f\u7248LINE\u5efa\u7acb\u5b50\u57fa\u672c\u6a94\u6848\u5f8c\u5373\u53ef\u9032\u884c\u8a2d\u5b9a\u3002",
          "subprofile.selectfriends.button.deselectall":
            "\u53d6\u6d88\u5168\u9078",
          "subprofile.selectfriends.button.selectall": "\u5168\u9078",
          "subprofile.selectfriends.button.selectprofile":
            "\u9078\u64c7\u500b\u4eba\u6a94\u6848",
          "subprofile.selectfriends.desc.selectfriends":
            "\u50c5\u53ef\u5c0d\u597d\u53cb\u8a2d\u5b9a\u526f\u500b\u4eba\u6a94\u6848\u3002\u5c0d\u975e\u597d\u53cb\u7684\u7fa4\u7d44\u6210\u54e1\u5c07\u986f\u793a\u60a8\u7684\u4e3b\u500b\u4eba\u6a94\u6848\u3002",
          "subprofile.settings.button.edit": "\u500b\u4eba\u6a94\u6848",
          "subprofile.settings.desc.aboutsubprofile":
            "\u96fb\u8166\u7248LINE\u50c5\u53ef\u7de8\u8f2f\u73fe\u6709\u7684\u5b50\u57fa\u672c\u6a94\u6848\u3002\u82e5\u5e0c\u671b\u5efa\u7acb\u6216\u522a\u9664\u5b50\u57fa\u672c\u6a94\u6848\uff0c\u8acb\u7531\u667a\u6167\u624b\u6a5f\u7248LINE\u57f7\u884c\u64cd\u4f5c\u3002",
          "subprofile.settings.desc.zerocase":
            "\u5c1a\u672a\u8a2d\u5b9a\u597d\u53cb\u3002\u8acb\u9ede\u64ca\u300c\u65b0\u589e\u597d\u53cb\u300d\u4e26\u9078\u64c7\u53ef\u700f\u89bd\u6b64\u500b\u4eba\u6a94\u6848\u7684\u597d\u53cb\u3002",
          "subprofile.settings.title.app": "\u61c9\u7528\u7a0b\u5f0f",
          "subprofile.yourprofile.bannerdesc.cantsetsubprofile": "",
          "subprofile.yourprofile.bannerdesc.shownfor30days": "",
          "subprofile.yourprofile.bannertitle.expired": "",
          "subprofile.yourprofile.bannertitle.temporaryerror": "",
          "subprofile.yourprofile.button.editfriends":
            "\u7de8\u8f2f\u597d\u53cb",
          "subprofile.yourprofile.desc.amountoffriend.other":
            "%n\u4f4d\u597d\u53cb\u53ef\u700f\u89bd\u6b64\u500b\u4eba\u6a94\u6848",
          "subprofile.yourprofile.subtitle.mainprofile":
            "\u4e3b\u500b\u4eba\u6a94\u6848",
          "subprofile.yourprofile.subtitle.subprofile":
            "\u526f\u500b\u4eba\u6a94\u6848",
          "subprofile.yourprofile.title.editfriends":
            "\u7de8\u8f2f\u597d\u53cb",
          "subprofile.yourprofile.title.yourprofile":
            "\u500b\u4eba\u6a94\u6848",
          "talk.addFriend.recommend.reason.group":
            "\u540c\u4e00\u7fa4\u7d44\u7684\u6210\u54e1",
          "talk.addFriend.recommend.reason.group.name":
            "\u300c%1\u300d\u7fa4\u7d44",
          "talk.addFriend.recommend.reason.lineid":
            "\u900f\u904eLINE ID\u60a8\u8a2d\u70ba\u597d\u53cb",
          "talk.addFriend.recommend.reason.phone":
            "\u900f\u904e\u96fb\u8a71\u865f\u78bc\u5c07\u60a8\u8a2d\u70ba\u597d\u53cb",
          "talk.addFriend.recommend.reason.qrcode":
            "\u900f\u904e\u884c\u52d5\u689d\u78bc\u5c07\u60a8\u8a2d\u70ba\u597d\u53cb",
          "talk.btn.addbuddy.title": "\u52a0\u5165",
          "talk.btn.cancel.title": "\u53d6\u6d88",
          "talk.btn.join.title": "\u53c3\u52a0",
          "talk.chatlist.chatheader.title": "\u804a\u5929",
          "talk.chatlist.floating.button.chat": "\u804a\u5929\u5ba4",
          "talk.chatlist.floating.button.chatandgroup":
            "\u804a\u5929\u5ba4\uff0f\u7fa4\u7d44",
          "talk.chatlist.floating.button.group": "\u7fa4\u7d44",
          "talk.chatlist.floating.button.square": "\u793e\u7fa4",
          "talk.chatlist.floating.createChat": "\u5efa\u7acb\u804a\u5929\u5ba4",
          "talk.chatlist.floating.menu.chatandgroup":
            "\u804a\u5929\u5ba4\u6216\u7fa4\u7d44",
          "talk.chatlist.groupheader.title":
            '\u6210\u54e1\u59d3\u540d\u5305\u542b"%1"\u7684\u7fa4\u7d44',
          "talk.chatlist.menu.hide": "\u96b1\u85cf",
          "talk.chatlist.menu.pin.off":
            "\u53d6\u6d88\u91d8\u9078\u804a\u5929\u5ba4",
          "talk.chatlist.menu.pin.on": "\u91d8\u9078\u804a\u5929\u5ba4",
          "talk.chatlist.menu.readAll": "\u6a19\u70ba\u5df2\u8b80",
          "talk.chatlist.msgsSearchCount.few":
            "\u627e\u5230 %n \u5247\u8a0a\u606f",
          "talk.chatlist.msgsSearchCount.many":
            "\u627e\u5230 %n \u5247\u8a0a\u606f",
          "talk.chatlist.msgsSearchCount.one":
            "\u627e\u5230 %n \u5247\u8a0a\u606f",
          "talk.chatlist.msgsSearchCount.other":
            "\u627e\u5230 %n \u5247\u8a0a\u606f",
          "talk.chatlist.msgsSearchCount.plurals.other":
            "\u627e\u5230 %n \u5247\u8a0a\u606f",
          "talk.chatlist.msgsSearchCount.two":
            "\u627e\u5230 %n \u5247\u8a0a\u606f",
          "talk.chatlist.msgsSearchCount.zero":
            "\u627e\u5230 %n \u5247\u8a0a\u606f",
          "talk.chatlist.msgsSearchHeader.title": "\u8a0a\u606f",
          "talk.chatlist.search.placeholder": "\u641c\u5c0b\u804a\u5929",
          "talk.label.addbuddy.title": "\u52a0\u5165",
          "talk.label.alreadycontact.title": "\u5df2\u52a0\u5165\u597d\u53cb",
          "talk.label.blocked.buddy.title":
            "\u60a8\u5df2\u5c01\u9396\u6b64\u5e33\u865f\u3002 \u8acb\u81f3\u300c\u8a2d\u5b9a\u300d\u9801\u9762\u78ba\u8a8d\u3002",
          "talk.label.buddies.title": "\u597d\u53cb",
          "talk.label.buddylist.title": "\u597d\u53cb",
          "talk.label.chatlist.title": "\u804a\u5929",
          "talk.label.empty.description.1":
            "\u60a8\u53ef\u5229\u7528ID\u641c\u5c0b\u3001\u60a8\u53ef\u80fd\u8a8d\u8b58\u7684\u4eba\u7684\u65b9\u5f0f\n\u4f86\u65b0\u589e\u597d\u53cb\u3002",
          "talk.label.empty.description.3":
            "\u5728\u4e0a\u65b9\u7684\u7a7a\u6b04\u5167\u8f38\u5165\u597d\u53cb\u7684ID\uff0c\n\u5c31\u80fd\u5c07\u5c0d\u65b9\u52a0\u5165\u597d\u53cb\u540d\u55ae\u5167\u5594\uff01",
          "talk.label.empty.title.1":
            "\u4f86\u52a0\u5165\u597d\u53cb\u5427\uff01",
          "talk.label.empty.title.2":
            "\u4f86\u8207\u597d\u53cb\u804a\u5929\u50b3\u8a0a\u5427\uff01",
          "talk.label.empty.title.3":
            "\u4e00\u8d77\u4f86\u5c0b\u627e\u597d\u53cb\u5427\uff01",
          "talk.label.failed.title":
            "\u597d\u53cb\u540d\u55ae\u7121\u6cd5\u986f\u793a",
          "talk.label.failedsearch.rejected.title":
            "\u60a8\u5df2\u8d85\u904e\u53ef\u5617\u8a66\u7684\u641c\u5c0b\u6b21\u6578\u3002\n\u66ab\u6642\u7121\u6cd5\u4f7f\u7528ID\u6216\u96fb\u8a71\u865f\u78bc\u641c\u5c0b\u3002",
          "talk.label.failedsearch.title":
            "\u672cID\u4e0d\u5b58\u5728\uff0c \u6216\u5c1a\u672a\u958b\u653e\u67e5\u8a62\u3002\n",
          "talk.label.favorite.title": "\u6211\u7684\u6700\u611b",
          "talk.label.groups.title": "\u7fa4\u7d44",
          "talk.label.invited.title":
            "\u767c\u51fa\u9080\u8acb\u7684\u7fa4\u7d44",
          "talk.label.newfriend.title": "\u65b0\u597d\u53cb",
          "talk.label.nosearchresult.title":
            "\u627e\u4e0d\u5230\u7b26\u5408\u7684\u8cc7\u6599\u3002",
          "talk.label.placehodler.title": "\u4ee5\u59d3\u540d\u641c\u5c0b",
          "talk.label.recentFriends.title":
            "\u6700\u8fd1\u7684\u804a\u5929\u597d\u53cb",
          "talk.label.recommendbuddyplacehodler.title": "ID\u641c\u5c0b",
          "talk.label.recommended.addFriend": "\u52a0\u5165\u597d\u53cb",
          "talk.label.recommended.officialAccount.title":
            "\u5b98\u65b9\u63a8\u85a6",
          "talk.label.recommended.title":
            "\u60a8\u53ef\u80fd\u8a8d\u8b58\u7684\u4eba\uff1f",
          "talk.label.search.friends": "\u641c\u5c0b\u597d\u53cb",
          "talk.label.search.friends.QRcode.error.invalidUser":
            "\u7121\u6cd5\u627e\u5230\u8a72\u7528\u6236",
          "talk.label.search.friends.phoneNumber.error":
            "\u60a8\u6240\u8f38\u5165\u7684\u96fb\u8a71\u865f\u78bc\u4e0d\u5b58\u5728\n\u6216\u7121\u6cd5\u88ab\u641c\u5c0b\u3002",
          "talk.label.search.friends.phoneNumber.error.notRegistered":
            "\u5fc5\u9808\u5148\u5728LINE\u7d81\u5b9a\u81ea\u5df1\u7684\u96fb\u8a71\u865f\u78bc\uff0c\u60a8\u624d\u80fd\u900f\u904e\u96fb\u8a71\u865f\u78bc\u641c\u5c0b\u5176\u4ed6\u7528\u6236\u3002\n\u8acb\u81f3\u624b\u6a5f\u7248LINE\u4e0a\u7684\u300c\u8a2d\u5b9a\u300d\uff1e\u300c\u500b\u4eba\u6a94\u6848\u300d\u7d81\u5b9a\u60a8\u7684\u96fb\u8a71\u865f\u78bc\u3002",
          "talk.label.square.title": "\u793e\u7fa4",
          "talk.label.thatisyou.title":
            "\u9019\u4e0d\u662f\u60a8\u81ea\u5df1\u55ce\uff1f",
          "talk.menu.aboutgroup": "\u7de8\u8f2f\u7fa4\u7d44",
          "talk.menu.addfavorite": "\u52a0\u5230\u6211\u7684\u6700\u611b",
          "talk.menu.addgroup": "\u5efa\u7acb\u7fa4\u7d44",
          "talk.menu.block": "\u5c01\u9396",
          "talk.menu.call": "\u64a5\u865f",
          "talk.menu.call.video": "\u8996\u8a0a\u901a\u8a71",
          "talk.menu.call.voice": "\u8a9e\u97f3\u901a\u8a71",
          "talk.menu.editname": "\u8b8a\u66f4\u597d\u53cb\u540d\u7a31",
          "talk.menu.exit": "\u7d50\u675f\u61c9\u7528\u7a0b\u5f0f",
          "talk.menu.group.call": "\u958b\u59cb\u901a\u8a71",
          "talk.menu.help": "\u5e38\u898b\u554f\u984c",
          "talk.menu.hide": "\u96b1\u85cf",
          "talk.menu.leavegroup": "\u9000\u51fa\u7fa4\u7d44",
          "talk.menu.logout": "\u767b\u51fa",
          "talk.menu.myProfile": "\u500b\u4eba\u8cc7\u6599",
          "talk.menu.notes": "\u8a18\u4e8b\u672c",
          "talk.menu.posts": "\u8cbc\u6587",
          "talk.menu.rejectbuddy": "\u5c01\u9396",
          "talk.menu.rejectgroup": "\u62d2\u7d55",
          "talk.menu.removeFavorite":
            "\u81ea\u6211\u7684\u6700\u611b\u79fb\u9664",
          "talk.menu.removetalkitem":
            "\u81ea\u804a\u5929\u5217\u8868\u4e2d\u522a\u9664",
          "talk.menu.sendContact": "\u5206\u4eab\u597d\u53cb\u8cc7\u8a0a",
          "talk.menu.setting": "\u8a2d\u5b9a",
          "talk.menu.showProfile": "\u500b\u4eba\u8cc7\u6599",
          "talk.menu.starttalk": "\u958b\u59cb\u50b3\u8a0a\u804a\u5929",
          "talk.menu.talk": "\u804a\u5929",
          "talk.menu.talkbuddy": "\u804a\u5929",
          "talk.menu.talkgroup": "\u804a\u5929",
          "talk.menu.voip": "\u8a9e\u97f3\u901a\u8a71",
          "talk.msg.addbuddy.failed": "\u7121\u6cd5\u8ffd\u52a0",
          "talk.msg.addrecommended.failed": "\u7121\u6cd5\u8ffd\u52a0",
          "talk.msg.block.failed": "\u7121\u6cd5\u5c01\u9396",
          "talk.msg.blockrecommended.failed": "\u7121\u6cd5\u5c01\u9396",
          "talk.msg.del.1.n":
            "\u78ba\u5b9a\u8981\u7531\u804a\u5929\u5217\u8868\u4e2d\u522a\u9664\u55ce\uff1f\u60a8\u5c07\u7121\u6cd5\u518d\u700f\u89bd\u5176\u804a\u5929\u8a18\u9304\uff0c\u4e26\u5c07\u81ea\u52d5\u9000\u51fa\u3002",
          "talk.msg.del.room":
            "\u78ba\u5b9a\u8981\u7531\u804a\u5929\u5217\u8868\u4e2d\u522a\u9664\u55ce\uff1f\u60a8\u5c07\u7121\u6cd5\u518d\u700f\u89bd\u5176\u804a\u5929\u8a18\u9304\u3002",
          "talk.msg.favorite.failed":
            "\u7121\u6cd5\u52a0\u5165\u8a72\u7528\u6236\u81f3\u6211\u7684\u6700\u611b",
          "talk.msg.favorite.overflow.failed":
            "\u6211\u7684\u6700\u611b\u50c5\u80fd\u52a0\u5165100\u540d\u7528\u6236",
          "talk.msg.hide.failed": "\u7121\u6cd5\u96b1\u85cf",
          "talk.msg.joininvitedgroup.failed":
            "\u60a8\u7121\u6cd5\u53c3\u52a0\u672c\u7fa4\u7d44",
          "talk.msg.leavegroup.failed":
            "\u60a8\u7121\u6cd5\u9000\u51fa\u672c\u7fa4\u7d44\u3002",
          "talk.msg.no.room": "\u804a\u5929\u5ba4\u5df2\u88ab\u522a\u9664",
          "talk.msg.rejectinvitedgroup.failed":
            "\u7121\u6cd5\u62d2\u7d55\u672c\u9080\u8acb",
          "talk.network.unreachable":
            "\u7db2\u8def\u9023\u7dda\u72c0\u614b\u4e0d\u7a69\u5b9a\u3002",
          "talk.search.hint": "\u641c\u5c0b\u8a0a\u606f\u3001\u59d3\u540d",
          "talk.search.label.chatMember": "\u641c\u5c0b\u59d3\u540d",
          "talk.search.label.displayName": "\u4ee5\u540d\u7a31\u641c\u5c0b",
          "talk.search.label.member.all": "\uba64\ubc84(%1)",
          "talk.search.label.member.selected": "\u5df2\u9078\u64c7%1\u4eba",
          "talk.search.label.reSearch":
            "\u5728\u6b64\u7d50\u679c\u4e2d\u641c\u5c0b",
          "talk.search.label.reSearch.noResult":
            "\u7121\u6cd5\u7e7c\u7e8c\u641c\u5c0b\u3002 ",
          "talk.search.label.textMessage": "\u641c\u5c0b\u8a0a\u606f",
          "talk.tooltip.delete": "\u522a\u9664",
          "theme.mode.guide.dark.desc":
            "LINE\u96fb\u8166\u7248\u5df2\u81ea\u52d5\u8a2d\u70ba\u300c\u6df1\u8272\u300d\u4ecb\u9762\uff01\u5982\u6709\u9700\u8981\uff0c\u8acb\u524d\u5f80\u300c\u8a2d\u5b9a\u300d\uff1e\u300c\u57fa\u672c\u8a2d\u5b9a\u300d\uff0c\u518d\u8b8a\u66f4\u300c\u87a2\u5e55\u986f\u793a\u6a21\u5f0f\u300d\u3002",
          "theme.mode.guide.desc":
            "LINE\u96fb\u8166\u7248\u5df2\u81ea\u52d5\u642d\u914d\u96fb\u8166\u7684\u7cfb\u7d71\u8a2d\u5b9a\u4f86\u986f\u793a\u4ecb\u9762\u984f\u8272\uff01\u5982\u6709\u9700\u8981\uff0c\u60a8\u53ef\u524d\u5f80\u300c\u8a2d\u5b9a\u300d\uff1e\u300c\u57fa\u672c\u8a2d\u5b9a\u300d\uff0c\u8b8a\u66f4\u300c\u87a2\u5e55\u986f\u793a\u6a21\u5f0f\u300d\u3002",
          "theme.mode.guide.light.desc":
            "LINE\u96fb\u8166\u7248\u4e5f\u53ef\u652f\u63f4\u300c\u6df1\u8272\u300d\u4ecb\u9762\u5594\uff01\u5982\u6709\u9700\u8981\uff0c\u8acb\u524d\u5f80\u300c\u8a2d\u5b9a\u300d\uff1e\u300c\u57fa\u672c\u8a2d\u5b9a\u300d\uff0c\u518d\u8b8a\u66f4\u300c\u87a2\u5e55\u986f\u793a\u6a21\u5f0f\u300d\u3002",
          "theme.mode.guide.title":
            "\u300c\u87a2\u5e55\u986f\u793a\u6a21\u5f0f\u300d\u65b0\u767b\u5834",
          "timeline.alert.attach":
            "\u60a8\u6700\u591a\u53ef\u593e\u5e361\u500b\u9644\u4ef6",
          "timeline.alert.attach.unavailable":
            "\u60a8\u7684\u9644\u52a0\u6a94\u6848\u5305\u542b\u4e86\u7121\u6cd5\u65b0\u589e\u81f3\u8cbc\u6587\u7684\u6a94\u6848\u3002 ",
          "timeline.alert.attachphoto":
            "\u60a8\u6700\u591a\u50c5\u80fd\u593e\u5e369\u5f35\u7167\u7247\u4e0a\u50b3\u3002",
          "timeline.alert.commentmaxcount":
            "\u60a8\u6700\u591a\u53ef\u8f38\u51651000\u5b57",
          "timeline.alert.confirm.close":
            "\u78ba\u5b9a\u4e0d\u5b8c\u6210\u8a18\u4e8b\u672c\u8cbc\u6587\uff0c\u76f4\u63a5\u96e2\u958b\u6b64\u756b\u9762\u55ce\uff1f",
          "timeline.alert.confirm.deletecomment":
            "\u60a8\u8981\u522a\u9664\u9019\u4e9b\u8cbc\u6587\u55ce\uff1f",
          "timeline.alert.confirm.deletepost":
            "\u522a\u9664\u6642\uff0c \u7cfb\u7d71\u5c07\u4e00\u4f75\u522a\u9664\u7559\u8a00\u3002\n\u60a8\u8981\u7e7c\u7e8c\u55ce\uff1f",
          "timeline.alert.confirm.deletethumb":
            "\u60a8\u8981\u522a\u9664\u5716\u7247\u55ce\uff1f",
          "timeline.alert.confirm.replacepost":
            "\u60a8\u6b63\u5728\u5efa\u7acb\u8cbc\u6587\u3002\u60a8\u8981\u6368\u68c4\u6b64\u8cbc\u6587\u4e26\u5efa\u7acb\u65b0\u8cbc\u6587\u55ce\uff1f",
          "timeline.alert.deletedpost":
            "\u672c\u8cbc\u6587\u5df2\u88ab\u522a\u9664\uff01",
          "timeline.alert.discard": "\u6368\u68c4",
          "timeline.alert.error.group.delete":
            "\u60a8\u6240\u9078\u64c7\u7684\u516c\u958b\u540d\u55ae\u5df2\u88ab\u522a\u9664\uff0c\n\u8acb\u91cd\u65b0\u9078\u64c7\u3002",
          "timeline.alert.error.group.rights":
            "\u60a8\u6c92\u6709\u6240\u9078\u7fa4\u7d44\u7684\u6b0a\u9650\uff0c\n\u8acb\u91cd\u65b0\u9078\u64c7\u3002",
          "timeline.alert.fileMaxcount":
            "\u60a8\u6700\u591a\u50c5\u80fd\u593e\u5e36%n\u5f35\u7167\u7247\u6216\u5f71\u7247\u3002",
          "timeline.alert.fileMaxcount.plurals.other":
            "\u60a8\u6700\u591a\u50c5\u80fd\u593e\u5e36%n\u5f35\u7167\u7247\u6216\u5f71\u7247",
          "timeline.alert.invalidcoverimage":
            "\u6b64\u4e00\u985e\u578b\u7684\u6a94\u6848\u7121\u6cd5\u50b3\u9001\uff01",
          "timeline.alert.mediaMaxcount":
            "\u6700\u591a\u53ea\u80fd\u593e\u5e3620\u500b\u8cbc\u5716\u3001\u5716\u7247\u53ca\u5f71\u7247",
          "timeline.alert.official.addfriend":
            "\u7576\u60a8\u5c07\u672c\u5b98\u65b9\u5e33\u865f\u52a0\u5165\u597d\u53cb\u540d\u55ae\u5167\u4e4b\u5f8c\uff0c\n\u60a8\u5c07\u80fd\u767c\u8868\u8cbc\u5716\u6216\u7559\u8a00\u3002\n\u60a8\u8981\u5c07\u672c\u5b98\u65b9\u5e33\u865f\u52a0\u5165\u597d\u53cb\u540d\u55ae\u5167\u55ce? ",
          "timeline.alert.official.addfriend.share":
            "\u7576\u60a8\u5c07\u672c\u5b98\u65b9\u5e33\u865f\u52a0\u5165\u597d\u53cb\u540d\u55ae\u5167\u4e4b\u5f8c\uff0c\u60a8\u5c07\u80fd\u8207\u597d\u53cb\u5206\u4eab\u5176\u8cbc\u6587\u5167\u5bb9\u3002\u60a8\u8981\u52a0\u5165\u6b64\u5e33\u865f\u55ce\uff1f",
          "timeline.alert.official.unblockfriend":
            "\u5df2\u5c01\u9396\u6b64\u5b98\u65b9\u5e33\u865f\u3002\\r\n\u89e3\u9664\u5c01\u9396\u5f8c\uff0c\u60a8\u5c07\u80fd\u767c\u8868\u8cbc\u5716\u6216\u7559\u8a00\u3002\\r\n\u78ba\u5b9a\u8981\u89e3\u9664\u5c01\u9396\u55ce\uff1f",
          "timeline.alert.official.unblockfriend.share":
            "\u5df2\u5c01\u9396\u6b64\u5b98\u65b9\u5e33\u865f\u3002\\r\n\u89e3\u9664\u5c01\u9396\u5f8c\uff0c\u60a8\u5c07\u80fd\u5206\u4eab\u5176\u8cbc\u6587\u5167\u5bb9\u3002\\r\n\u78ba\u5b9a\u8981\u89e3\u9664\u5c01\u9396\u55ce\uff1f",
          "timeline.alert.photoMaxsize":
            "\u53ef\u593e\u5e36\u6700\u592720MB\u7684\u5716\u7247\u3002\n",
          "timeline.alert.photolimit":
            "\u6bcf\u5f35\u7167\u7247\u5927\u5c0f\u4e0a\u9650\u70ba20MB",
          "timeline.alert.photolimit.format": "(.jpg/.jpeg/.png/.bmp/.gif)",
          "timeline.alert.photomaxcount":
            "\u6700\u591a\u50c5\u80fd\u593e\u5e36%1\u5f35\u7167\u7247\u3002",
          "timeline.alert.stickerMaxcount":
            "\u60a8\u6700\u591a\u50c5\u80fd\u593e\u5e36%n\u5f35\u8cbc\u5716\u3002",
          "timeline.alert.stickerMaxcount.plurals.other":
            "\u60a8\u6700\u591a\u50c5\u80fd\u593e\u5e36%n\u5f35\u8cbc\u5716",
          "timeline.alert.stickerUploadRule":
            "\u6bcf\u5247\u8cbc\u6587\u50c5\u53ef\u4f7f\u75281\u5f35\u6709\u8072\u8cbc\u5716\u6216\u52d5\u614b\u8cbc\u5716\uff0c\u4e14\u7121\u6cd5\u8207\u4e00\u822c\u7684\u8cbc\u5716\u540c\u6642\u4f7f\u7528\u3002",
          "timeline.alert.textmaxcount":
            "\u60a8\u6700\u591a\u53ef\u8f38\u516510,000\u5b57",
          "timeline.alert.unblockfriend":
            "\u60a8\u5148\u524d\u5df2\u5c01\u9396\u6b64\u5e33\u865f\uff0c\u8acb\u5148\u89e3\u9664\u5c01\u9396\u624d\u53ef\u6309\u8b9a\u53ca\u7559\u8a00\u3002\u78ba\u5b9a\u8981\u89e3\u9664\u5c01\u9396\u55ce\uff1f",
          "timeline.alert.unblockfriend.share":
            "\u60a8\u5148\u524d\u5df2\u5c01\u9396\u6b64\u5e33\u865f\uff0c\u8acb\u5148\u89e3\u9664\u5c01\u9396\u624d\u53ef\u5206\u4eab\u8cbc\u6587\u3002\u78ba\u5b9a\u8981\u89e3\u9664\u5c01\u9396\u55ce\uff1f",
          "timeline.alert.urlUploadRule":
            "\u53ef\u593e\u5e361\u500b\u7db2\u5740\u3002",
          "timeline.alert.videoMaxLength":
            "\u53ef\u593e\u5e36\u6700\u591a5\u5206\u9418\u7684\u5f71\u7247\u3002\n",
          "timeline.alert.videoMaxsize":
            "\u6bcf\u500b\u5f71\u7247\u5927\u5c0f\u4e0a\u9650\u70ba200MB\u3002\n",
          "timeline.alert.videolength":
            "\u60a8\u7121\u6cd5\u593e\u5e36\u8d85\u904e5\u5206\u9418\u7684\u5f71\u7247\u3002",
          "timeline.alert.videolimit":
            "\u6bcf\u500b\u5f71\u7247\u5927\u5c0f\u4e0a\u9650\u70ba200MB\u62165\u5206\u9418",
          "timeline.alert.videolimit.format":
            "(.mp4/.avi/.mkv/.mpg/.mpeg/.mov)",
          "timeline.alert.videosize":
            "\u60a8\u7121\u6cd5\u593e\u5e36\u8d85\u904e200MB\u7684\u5f71\u7247\n",
          "timeline.alert.waitcommentdone":
            "\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "timeline.already.remove.comment":
            "\u672c\u7559\u8a00\u5df2\u88ab\u522a\u9664\uff01",
          "timeline.attachlink.delete": "\u522a\u9664",
          "timeline.attachlink.hint": "\u8acb\u8f38\u5165\u7db2\u5740",
          "timeline.attachlink.title": "\u8f38\u5165\u7db2\u5740",
          "timeline.comment.approval":
            "\u7559\u8a00\u7d93\u904e\u5b98\u65b9\u4e3b\u9801\u7684\u7ba1\u7406\u54e1\u627f\u8a8d\u5f8c\uff0c \u624d\u6703\u516c\u958b\u3002",
          "timeline.comment.blinddbyadmin":
            "\u672c\u7559\u8a00\u5df2\u88ab\u7ba1\u7406\u54e1\u522a\u9664\uff01",
          "timeline.comment.delete": "\u522a\u9664",
          "timeline.comment.hint": "\u8acb\u5beb\u4e0b\u60a8\u7684\u7559\u8a00",
          "timeline.comment.like": "\u8b9a",
          "timeline.comment.like.cancel": "\u6536\u56de\u8b9a",
          "timeline.comment.loadprevious":
            "\u986f\u793a\u4e4b\u524d\u7684\u7559\u8a00",
          "timeline.comment.photo.retry":
            "\u5716\u7247\u7121\u6cd5\u8b80\u53d6\u3002\n\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "timeline.comment.reply": "\u56de\u8986",
          "timeline.comment.stickerorphoto":
            "\u7559\u8a00\u7576\u4e2d\u5305\u542b\u7684\u8cbc\u5716\u6216\u7167\u7247\u4e0d\u53ef\u8d85\u904e\u4e00\u5f35\u3002",
          "timeline.comment.write": "\u8cbc\u6587",
          "timeline.common.cancel": "\u53d6\u6d88",
          "timeline.common.ok": "\u78ba\u5b9a",
          "timeline.common.share": "\u5206\u4eab",
          "timeline.date.beforeHour.plurals.few": "%n\u5c0f\u6642\u524d",
          "timeline.date.beforeHour.plurals.many": "%n\u5c0f\u6642\u524d",
          "timeline.date.beforeHour.plurals.one": "%n\u5c0f\u6642\u524d",
          "timeline.date.beforeHour.plurals.other": "%n\u5c0f\u6642\u524d",
          "timeline.date.beforeHour.plurals.two": "%n\u5c0f\u6642\u524d",
          "timeline.date.beforeHour.plurals.zero": "%n\u5c0f\u6642\u524d",
          "timeline.date.beforeMinute.plurals.few": "%n\u5206\u9418\u524d",
          "timeline.date.beforeMinute.plurals.many": "%n\u5206\u9418\u524d",
          "timeline.date.beforeMinute.plurals.one": "%n\u5206\u9418\u524d",
          "timeline.date.beforeMinute.plurals.other": "%n\u5206\u9418\u524d",
          "timeline.date.beforeMinute.plurals.two": "%n\u5206\u9418\u524d",
          "timeline.date.beforeMinute.plurals.zero": "%n\u5206\u9418\u524d",
          "timeline.date.beforeYesterday": "\u524d\u5929 %1",
          "timeline.date.justNow": "\u525b\u525b",
          "timeline.date.yesterday": "\u6628\u5929 %1",
          "timeline.emptypost.networkerror":
            "\u7db2\u8def\u767c\u751f\u554f\u984c\uff0c \u7cfb\u7d71\u7121\u6cd5\u6b63\u5e38\u57f7\u884c\uff01\n\u8acb\u518d\u8a66\u4e00\u6b21\uff01",
          "timeline.emptypost.other":
            "\u9019\u88e1\u9084\u6c92\u6709\u53ef\u5206\u4eab\u7684\u5167\u5bb9\u5537\uff01",
          "timeline.emptypost.unsupported":
            "\u6b64\u5b98\u65b9\u5e33\u865f\u53ea\u6703\u50b3\u9001\u804a\u5929\u8a0a\u606f\u7d66\u60a8\u3002",
          "timeline.error.and.retry":
            "\u7cfb\u7d71\u66ab\u6642\u767c\u751f\u554f\u984c\uff0c\n\u8acb\u518d\u8a66\u4e00\u6b21\uff01",
          "timeline.error.attach.popupSticker":
            "\u6b64\u8cbc\u5716\u5c07\u4ee5\u975c\u614b\u4e14\u4e0d\u5177\u97f3\u6548\u7684\u65b9\u5f0f\u986f\u793a\u3002",
          "timeline.error.cannot.access.file":
            "\u7121\u6cd5\u4e0a\u50b3\u90e8\u5206\u7167\u7247\u3002\n\u53ef\u80fd\u56e0\u70ba\u539f\u59cb\u7167\u7247\u5df2\u5f9e\u96fb\u8166\u522a\u9664\uff0c\n\u6216\u5df2\u9054\u5230\u4e0a\u50b3\u5bb9\u91cf\u4e0a\u9650\uff0820 MB\uff09\u3002",
          "timeline.error.list.load.retry":
            "\u8cc7\u6599\u7121\u6cd5\u4e0b\u8f09\u2026\u3002\n\u8acb\u518d\u8a66\u4e00\u6b21\uff01",
          "timeline.footer.comment": "\u7559\u8a00",
          "timeline.footer.like": "\u8b9a",
          "timeline.groupPanel.startgroup":
            "\u4f86\u6210\u7acb\u7fa4\u7d44\u5427\uff01",
          "timeline.groupPanel.startgroup.desc":
            "\u60a8\u53ef\u64b0\u5beb\u8a18\u4e8b\u672c\u4e26\u5efa\u7acb\u76f8\u7c3f\u3002",
          "timeline.label.nosearchresult.title":
            "\u627e\u4e0d\u5230\u7b26\u5408\u7684\u8cc7\u6599\u3002",
          "timeline.like.count.other": "%1\u500b\u8b9a",
          "timeline.loading.examine.time": "\u7dad\u8b77\u6642\u9593",
          "timeline.loading.examine.timeline":
            "%1\u6b63\u5728\u7dad\u8b77\u4e2d\uff01",
          "timeline.loading.neednewversion":
            "\u60a8\u5fc5\u9808\u4f7f\u7528\u6700\u65b0\u7248\u672c\u7684LINE\uff0c \u7a0b\u5f0f\u624d\u80fd\u6b63\u5e38\u986f\u793a\u672c\u756b\u9762\u3002",
          "timeline.loading.networkerror":
            "\u7db2\u8def\u767c\u751f\u554f\u984c\uff0c \u7cfb\u7d71\u7121\u6cd5\u6b63\u5e38\u57f7\u884c\uff01\n\u8acb\u518d\u8a66\u4e00\u6b21\uff01",
          "timeline.loading.retry": "\u66f4\u65b0",
          "timeline.menu.sharetotalk": "\u50b3\u9001\u81f3\u804a\u5929\u5ba4",
          "timeline.mergedposts.detail": "\u8a73\u7d30\u8cc7\u8a0a",
          "timeline.no": "\u4e0d\u662f",
          "timeline.note.popupdesc.sharenote":
            "\u662f\u5426\u5728\u804a\u5929\u4e2d\u5206\u4eab\u6b64\u8a18\u4e8b\u672c\uff1f",
          "timeline.noti.content.NC_1001_1":
            "%1\u5df2\u65b0\u589e\u65b0\u7684\u8a18\u4e8b\u672c\u3002",
          "timeline.noti.content.NC_1001_2":
            "%1\u8207%2\u5df2\u65b0\u589e\u65b0\u7684\u8a18\u4e8b\u672c\u3002",
          "timeline.noti.content.NC_1001_3":
            "%1\u3001%2\u8207\u5176\u4ed6%3\u4eba\u5df2\u65b0\u589e\u65b0\u7684\u8a18\u4e8b\u672c\u3002",
          "timeline.noti.content.NC_1002_1":
            "%1\u5728\u60a8\u7684\u8cbc\u6587\u4e2d\u7559\u8a00\u3002",
          "timeline.noti.content.NC_1002_2":
            "%1\u8207%2\u5728\u60a8\u7684\u8cbc\u6587\u4e2d\u7559\u8a00\u3002",
          "timeline.noti.content.NC_1002_3":
            "%1\u3001%2\u8207\u5176\u4ed6%3\u4eba\u5728\u60a8\u7684\u8cbc\u6587\u4e2d\u7559\u8a00\u3002",
          "timeline.noti.content.NC_1003_1":
            "%1 \u7559\u8a00\u7d66\u60a8\u3002",
          "timeline.noti.content.NC_1003_2":
            "%1 \u548c %2 \u7559\u8a00\u7d66\u60a8\u3002",
          "timeline.noti.content.NC_1003_3":
            "%1\u3001%2 \u548c\u5176\u4ed6 %3 \u4eba\u7559\u8a00\u7d66\u60a8\u3002",
          "timeline.noti.content.NC_1004_1":
            "%1\u5c0d\u60a8\u7684\u8cbc\u6587\u6309\u8b9a\u3002",
          "timeline.noti.content.NC_1004_2":
            "%1\u8207%2\u5c0d\u60a8\u7684\u8cbc\u6587\u6309\u8b9a\u3002",
          "timeline.noti.content.NC_1004_3":
            "%1\u3001%2\u8207\u5176\u4ed6%3\u4eba\u5c0d\u60a8\u7684\u8cbc\u6587\u6309\u8b9a\u3002",
          "timeline.noti.content.NC_2001_1":
            "%1 \u5efa\u7acb\u4e86\u65b0\u76f8\u7c3f\u3002",
          "timeline.noti.content.NC_2001_2":
            "%1 \u548c %2 \u5efa\u7acb\u4e86\u65b0\u76f8\u7c3f\u3002",
          "timeline.noti.content.NC_2001_3":
            "%1\u3001%2 \u548c\u5176\u4ed6 %3 \u4eba\u5efa\u7acb\u4e86\u65b0\u76f8\u7c3f\u3002",
          "timeline.noti.content.NC_2002_1":
            "%1 \u5728\u76f8\u7c3f\u5167\u65b0\u589e\u4e86\u7167\u7247\u3002",
          "timeline.noti.content.NC_2002_2":
            "%1 \u548c %2 \u5728\u76f8\u7c3f\u5167\u65b0\u589e\u4e86\u7167\u7247\u3002",
          "timeline.noti.content.NC_2002_3":
            "%1\u3001%2 \u548c\u5176\u4ed6 %3 \u4eba\u5728\u76f8\u7c3f\u5167\u65b0\u589e\u4e86\u7167\u7247\u3002",
          "timeline.noti.content.NC_3001_1":
            "%1\u5728\u60a8\u7684\u8cbc\u6587\u4e2d\u7559\u8a00\u3002",
          "timeline.noti.content.NC_3001_2":
            "%1\u8207%2\u5728\u60a8\u7684\u8cbc\u6587\u4e2d\u7559\u8a00\u3002",
          "timeline.noti.content.NC_3001_3":
            "%1\u3001%2\u8207\u5176\u4ed6%3\u4eba\u5728\u60a8\u7684\u8cbc\u6587\u4e2d\u7559\u8a00\u3002",
          "timeline.noti.content.NC_3002_1":
            "%1 \u7559\u8a00\u7d66\u60a8\u3002",
          "timeline.noti.content.NC_3002_2":
            "%1 \u548c %2 \u7559\u8a00\u7d66\u60a8\u3002",
          "timeline.noti.content.NC_3002_3":
            "%1\u3001%2 \u548c\u5176\u4ed6 %3 \u4eba\u7559\u8a00\u7d66\u60a8\u3002",
          "timeline.noti.content.NC_3003_1":
            "%1\u5c0d\u60a8\u7684\u8cbc\u6587\u6309\u8b9a\u3002",
          "timeline.noti.content.NC_3003_2":
            "%1\u8207%2\u5c0d\u60a8\u7684\u8cbc\u6587\u6309\u8b9a\u3002",
          "timeline.noti.content.NC_3003_3":
            "%1\u3001%2\u8207\u5176\u4ed6%3\u4eba\u5c0d\u60a8\u7684\u8cbc\u6587\u6309\u8b9a\u3002",
          "timeline.noti.content.NC_4001_1":
            "%1 \u52a0\u5165\u7fa4\u7d44\u3002",
          "timeline.noti.content.NC_4002_1":
            "%1\u5206\u4eab\u4e86\u60a8\u7684\u8cbc\u6587\u3002",
          "timeline.noti.content.NC_UPDATE":
            "\u5c07LINE\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\uff0c\u5373\u80fd\u78ba\u8a8d\u6b64\u5167\u5bb9\u3002",
          "timeline.noti.empty":
            "\u60a8\u6c92\u6709\u65b0\u7684\u63d0\u9192\u8a0a\u606f\u3002",
          "timeline.noti.error":
            "\u7121\u6cd5\u8b80\u53d6\u63d0\u9192\u3002\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002\n ",
          "timeline.noti.home": "\u4e3b\u9801",
          "timeline.oamerge.feed.title":
            "\u6211\u7684\u5b98\u65b9\u5e33\u865f\u597d\u53cb",
          "timeline.oamerge.title":
            "\u6211\u7684\u5b98\u65b9\u5e33\u865f\u597d\u53cb",
          "timeline.officialprofile.networkerror":
            "\u7db2\u8def\u767c\u751f\u554f\u984c\uff0c \u7cfb\u7d71\u7121\u6cd5\u6b63\u5e38\u57f7\u884c\uff01\n\u8acb\u518d\u8a66\u4e00\u6b21\uff01",
          "timeline.officialprofile.title": "\u57fa\u672c\u8cc7\u6599",
          "timeline.original.open": "\u67e5\u770b\u539f\u59cb\u9875\u9762",
          "timeline.poppost.counttime.hour.other": "\u5269%n\u5c0f\u6642",
          "timeline.poppost.counttime.hour.plurals.few": "\u5269%n\u5c0f\u6642",
          "timeline.poppost.counttime.hour.plurals.many":
            "\u5269%n\u5c0f\u6642",
          "timeline.poppost.counttime.hour.plurals.one": "\u5269%n\u5c0f\u6642",
          "timeline.poppost.counttime.hour.plurals.other":
            "\u5269%n\u5c0f\u6642",
          "timeline.poppost.counttime.hour.plurals.two": "\u5269%n\u5c0f\u6642",
          "timeline.poppost.counttime.hour.plurals.zero":
            "\u5269%n\u5c0f\u6642",
          "timeline.poppost.counttime.min.other": "\u5269%n\u5206\u9418",
          "timeline.poppost.counttime.min.plurals.few": "\u5269%n\u5206\u9418",
          "timeline.poppost.counttime.min.plurals.many": "\u5269%n\u5206\u9418",
          "timeline.poppost.counttime.min.plurals.one": "\u5269%n\u5206\u9418",
          "timeline.poppost.counttime.min.plurals.other":
            "\u5269%n\u5206\u9418",
          "timeline.poppost.counttime.min.plurals.two": "\u5269%n\u5206\u9418",
          "timeline.poppost.counttime.min.plurals.zero": "\u5269%n\u5206\u9418",
          "timeline.poppost.counttime.soon": "\u52691\u5206\u9418",
          "timeline.poppost.tooltip.hour.other":
            "\u6b64\u6295\u7a3f\u5c07\u5728%n\u5c0f\u6642\u5f8c\u522a\u9664\u3002",
          "timeline.poppost.tooltip.hour.plurals.few":
            "\u6b64\u6295\u7a3f\u5c07\u5728%n\u5c0f\u6642\u5f8c\u522a\u9664\u3002",
          "timeline.poppost.tooltip.hour.plurals.many":
            "\u6b64\u6295\u7a3f\u5c07\u5728%n\u5c0f\u6642\u5f8c\u522a\u9664\u3002",
          "timeline.poppost.tooltip.hour.plurals.one":
            "\u6b64\u6295\u7a3f\u5c07\u5728%n\u5c0f\u6642\u5f8c\u522a\u9664\u3002",
          "timeline.poppost.tooltip.hour.plurals.other":
            "\u6b64\u6295\u7a3f\u5c07\u5728%n\u5c0f\u6642\u5f8c\u522a\u9664\u3002",
          "timeline.poppost.tooltip.hour.plurals.two":
            "\u6b64\u6295\u7a3f\u5c07\u5728%n\u5c0f\u6642\u5f8c\u522a\u9664\u3002",
          "timeline.poppost.tooltip.hour.plurals.zero":
            "\u6b64\u6295\u7a3f\u5c07\u5728%n\u5c0f\u6642\u5f8c\u522a\u9664\u3002",
          "timeline.poppost.tooltip.min.other":
            "\u6b64\u6295\u7a3f\u5c07\u5728%n\u5206\u9418\u5f8c\u522a\u9664\u3002",
          "timeline.poppost.tooltip.min.plurals.few":
            "\u6b64\u6295\u7a3f\u5c07\u5728%n\u5206\u9418\u5f8c\u522a\u9664\u3002",
          "timeline.poppost.tooltip.min.plurals.many":
            "\u6b64\u6295\u7a3f\u5c07\u5728%n\u5206\u9418\u5f8c\u522a\u9664\u3002",
          "timeline.poppost.tooltip.min.plurals.one":
            "\u6b64\u6295\u7a3f\u5c07\u5728%n\u5206\u9418\u5f8c\u522a\u9664\u3002",
          "timeline.poppost.tooltip.min.plurals.other":
            "\u6b64\u6295\u7a3f\u5c07\u5728%n\u5206\u9418\u5f8c\u522a\u9664\u3002",
          "timeline.poppost.tooltip.min.plurals.two":
            "\u6b64\u6295\u7a3f\u5c07\u5728%n\u5206\u9418\u5f8c\u522a\u9664\u3002",
          "timeline.poppost.tooltip.min.plurals.zero":
            "\u6b64\u6295\u7a3f\u5c07\u5728%n\u5206\u9418\u5f8c\u522a\u9664\u3002",
          "timeline.poppost.tooltip.soon":
            "\u6b64\u8cbc\u6587\u5c07\u57281\u5206\u9418\u5f8c\u522a\u9664\u3002",
          "timeline.post.attach.drag.guide":
            "\u53ef\u900f\u904e\u62d6\u653e\u7684\u65b9\u5f0f\u65b0\u589e\u7167\u7247\u53ca\u5f71\u7247\u3002",
          "timeline.post.attach.drag.guide.premium":
            "\u53ef\u900f\u904e\u62d6\u653e\u7684\u65b9\u5f0f\u65b0\u589e\u7167\u7247\u3002",
          "timeline.post.attach.draghere":
            "\u900f\u904e\u62d6\u653e\u7684\u65b9\u5f0f\u65b0\u589e\u7167\u7247\u53ca\u5f71\u7247",
          "timeline.post.attach.draghere.premium":
            "\u900f\u904e\u62d6\u653e\u7684\u65b9\u5f0f\u65b0\u589e\u7167\u7247",
          "timeline.post.delete": "\u522a\u9664",
          "timeline.post.deleted":
            "\u672c\u8cbc\u6587\u5df2\u88ab\u522a\u9664\uff01",
          "timeline.post.deletedbyadmin":
            "\u8cbc\u6587\u5df2\u88ab\u7ba1\u7406\u54e1\u522a\u9664\u3002",
          "timeline.post.done": "\u5b8c\u6210",
          "timeline.post.edit": "\u7de8\u8f2f",
          "timeline.post.edit.desc":
            "\u78ba\u5b9a\u8981\u4e0d\u5132\u5b58\u8b8a\u66f4\u5167\u5bb9\u5373\u96e2\u958b\u7de8\u8f2f\u756b\u9762\u55ce\uff1f",
          "timeline.post.friends":
            "\u9650%1\u7684LINE\u597d\u53cb\u53ef\u95b1\u89bd",
          "timeline.post.friends.detail":
            "\u672c\u5247\u8cbc\u6587\u7684\u516c\u958b\u5c0d\u8c61\u50c5\u9650%1\u7684LINE\u597d\u53cb\u3002\n",
          "timeline.post.grid.more": "+%n",
          "timeline.post.hashtag": "\u6a19\u7c64",
          "timeline.post.hashtag.guide.title":
            "\u5617\u8a66\u52a0\u4e0a#\u6a19\u7c64\uff01",
          "timeline.post.hashtag.results.related": "\u76f8\u95dc\u6a19\u7c64",
          "timeline.post.hint":
            "\u6709\u4ec0\u9ebc\u65b0\u9bae\u4e8b\u55ce\uff1f",
          "timeline.post.keep": "\u4fdd\u7559",
          "timeline.post.likeshare.cancel": "\u53d6\u6d88\u5206\u4eab",
          "timeline.post.likeshare.canceled":
            "\u5df2\u53d6\u6d88\u5206\u4eab\u8cbc\u6587\u3002",
          "timeline.post.likeshare.done":
            "\u5df2\u6309\u8b9a\u5206\u4eab\u3002 ",
          "timeline.post.mention.alert":
            "\u60a8\u6700\u591a\u50c5\u53ef\u6a19\u8a3b20\u540d\u597d\u53cb\u3002",
          "timeline.post.mention.empty.description":
            '""<![CDATA[\u8f38\u5165<font color=\'#4166b1\'>@\u597d\u53cb\u59d3\u540d</font>\u5373\u53ef\u6a19\u8a3b\u60a8\u7684\u597d\u53cb\u3002 \n\u9019\u4e9b\u597d\u53cb\u6703\u7acb\u5373\u6536\u5230\u63d0\u9192\u4e26\u67e5\u770b\u60a8\u7684\u8cbc\u6587\u3002]]>""',
          "timeline.post.mention.empty.title":
            "\u4f7f\u7528@\u7b26\u865f\u6a19\u8a3b\u597d\u53cb\uff01",
          "timeline.post.mention.setting.edit.alert":
            "\u82e5\u60a8\u8b8a\u66f4\u6b64\u8cbc\u6587\u7684\u516c\u958b\u7bc4\u570d\u8a2d\u5b9a\uff0c\u4e0b\u5217\u7528\u6236\u5c07\u7121\u6cd5\u770b\u5230\u6b64\u8cbc\u6587\u3002\u78ba\u5b9a\u8981\u7e7c\u7e8c\u55ce\uff1f",
          "timeline.post.newpost": "\u65b0\u589e\u8cbc\u6587",
          "timeline.post.onlyme": "\u53ea\u5411\u81ea\u5df1\u516c\u958b",
          "timeline.post.public": "\u5411\u6240\u6709\u4eba\u516c\u958b",
          "timeline.post.public.desc":
            "\u4efb\u4f55\u4eba\u90fd\u80fd\u770b\u898b\u5411\u6240\u6709\u4eba\u516c\u958b\u7684\u8cbc\u6587\u3002",
          "timeline.post.public.sharetotimeline":
            "\u5206\u4eab\u81f3\u8cbc\u6587\u4e32",
          "timeline.post.scope.group":
            "\u50c5\u9650\u672c\u7fa4\u7d44\u6210\u54e1\u53ef\u4ee5\u95b1\u89bd\u6b64\u8a18\u4e8b\u672c\u3002",
          "timeline.post.scope.manToMan":
            "\u53ea\u6709\u60a8\u548c%1\u53ef\u4ee5\u95b1\u89bd\u6b64\u8a18\u4e8b\u672c\u3002",
          "timeline.post.seemore": "\u986f\u793a\u66f4\u591a",
          "timeline.post.share": "\u5206\u4eab",
          "timeline.post.sharedchanged":
            "\u8cbc\u6587\u539f\u6587\u7684\u516c\u958b\u8a2d\u5b9a\u5df2\u8b8a\u66f4\uff0c\u56e0\u6b64\u7121\u6cd5\u986f\u793a\u3002",
          "timeline.post.shareddeleted":
            "\u6b64\u8cbc\u6587\u5df2\u88ab\u522a\u9664\uff0c\u6216\u662f\u8cbc\u6587\u8005\u4e0d\u518d\u4f7f\u7528LINE\u3002",
          "timeline.post.sorting.option.ranking": "Sort by ranking",
          "timeline.post.sorting.option.time": "Sort by time received",
          "timeline.post.write": "\u8cbc\u6587",
          "timeline.publicgroup.emptymember":
            "\u9019\u6b21\u672a\u52a0\u5165\u4efb\u4f55\u597d\u53cb\u3002",
          "timeline.publicgroup.group": "\u7fa4\u7d44",
          "timeline.publicgroup.group.empty":
            "\u6c92\u6709\u7fa4\u7d44\u5217\u8868\u3002",
          "timeline.publicgroup.linefriends": "\u597d\u53cb",
          "timeline.publicgroup.linefriends.desc":
            "\u5411\u80fd\u770b\u898b\u60a8\u4e3b\u9801\u5167\u5bb9\u7684LINE\u597d\u53cb\u516c\u958b",
          "timeline.publicgroup.nobodysee":
            "\u672c\u5247\u8cbc\u6587\u6c92\u6709\u5c0d\u4efb\u4f55\u4eba\u516c\u958b\u3002",
          "timeline.publicgroup.sharelist":
            "\u7ba1\u7406\u516c\u958b\u540d\u55ae",
          "timeline.publicgroup.title.detail":
            "\u80fd\u770b\u898b\u8cbc\u6587\u5167\u5bb9\u7684\u597d\u53cb",
          "timeline.publicgroup.title.post":
            "\u8cbc\u6587\u7684\u516c\u958b\u7bc4\u570d\u8a2d\u5b9a",
          "timeline.recommend": "\u63a8\u85a6",
          "timeline.report.desc":
            "\u6aa2\u8209\u5f8c\uff0c\u8a72\u7528\u6236\u7684\u500b\u4eba\u6a94\u6848\u4ee5\u53ca\u60a8\u8207\u8a72\u7528\u6236\u6700\u8fd1\u50b3\u9001\u7684100\u5247\u8a0a\u606f\uff0c\u6216\u662f\u6709\u554f\u984c\u7684\u8cbc\u6587\u5167\u5bb9\u5c07\u6703\u50b3\u9001\u7d66\u6211\u5011\u3002",
          "timeline.report.done": "\u6aa2\u8209\u8a0a\u606f\u5df2\u50b3\u9001",
          "timeline.report.reason.advertising":
            "\u6feb\u767c\u5ee3\u544a\u8a0a\u606f",
          "timeline.report.reason.genderHarassment":
            "\u50b3\u9001\u8272\u60c5\u8a0a\u606f",
          "timeline.report.reason.harassment": "\u9a12\u64fe\u884c\u70ba",
          "timeline.report.reason.other": "\u5176\u4ed6",
          "timeline.report.selectReason":
            "\u8acb\u9078\u64c7\u60a8\u6aa2\u8209\u8a72\u7528\u6236\u7684\u7406\u7531",
          "timeline.report.title": "\u6aa2\u8209",
          "timeline.request.failed.likeshare.status":
            "\u7121\u6cd5\u8b80\u53d6\u5206\u4eab\u7684\u72c0\u614b\u3002",
          "timeline.request.failed.timeline":
            "\u7121\u6cd5\u8b80\u53d6\u6b64\u5247\u8cbc\u6587\u3002",
          "timeline.request.failed.url":
            "\u7121\u6cd5\u8b80\u53d6\u7db2\u5740\u8cc7\u8a0a\u3002\n\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "timeline.request.failed.user":
            "\u672a\u80fd\u627e\u5230\u8a72\u7528\u6236\u3002",
          "timeline.retry": "\u91cd\u8a66",
          "timeline.setting.autoopen":
            "\u81ea\u52d5\u5411\u65b0\u52a0\u5165\u7684\u597d\u53cb\u516c\u958b",
          "timeline.setting.buddylist.empty":
            "\u672a\u6709LINE\u7684\u597d\u53cb\u3002",
          "timeline.setting.desc": "\u8a2d\u5b9a\u958b\u653e\u7bc4\u570d",
          "timeline.setting.desc2":
            "\u8a2d\u5b9a\u662f\u5426\u8981\u516c\u958b\u60a8\u7684\u4e3b\u9801\u3002",
          "timeline.setting.feed.ranking": "\u8cbc\u6587\u6392\u5e8f",
          "timeline.setting.feed.ranking.option":
            "\u512a\u5148\u986f\u793a\u71b1\u9580\u8cbc\u6587",
          "timeline.setting.label.blocked": "\u672a\u516c\u958b",
          "timeline.setting.label.unblocked": "\u516c\u958b",
          "timeline.setting.usetoast":
            "LINE VOOM\u6709\u65b0\u8cbc\u6587\u6642\u63d0\u9192",
          "timeline.share.copyUrl": "\u8907\u88fd\u9023\u7d50",
          "timeline.share.copyUrl.toast":
            "\u9023\u7d50\u5df2\u8907\u88fd\u5230\u526a\u8cbc\u7c3f\u3002",
          "timeline.sharetohome.hint":
            "\u8acb\u8f38\u5165\u60a8\u8981\u589e\u52a0\u7684\u8a0a\u606f\u5167\u5bb9",
          "timeline.sharetotalk.comfirm.desc":
            "\u78ba\u5b9a\u8981\u50b3\u9001\u81f3\u300c%1\u300d\u55ce\uff1f",
          "timeline.sharetotalk.empty.chat":
            "\u6c92\u6709\u53ef\u4ee5\u9078\u64c7\u7684\u804a\u5929\u5ba4",
          "timeline.sharetotalk.empty.friend":
            "\u6c92\u6709\u53ef\u4ee5\u9080\u8acb\u7684\u597d\u53cb",
          "timeline.sharetotalk.empty.group":
            "\u6c92\u6709\u53ef\u4ee5\u9078\u64c7\u7684\u7fa4\u7d44",
          "timeline.sharetotalk.tab.chat": "\u804a\u5929",
          "timeline.sharetotalk.tab.friend": "\u597d\u53cb",
          "timeline.sharetotalk.tab.group": "\u7fa4\u7d44",
          "timeline.sharetotalk.title": "\u50b3\u9001\u81f3\u804a\u5929\u5ba4",
          "timeline.system.check.wait":
            "\u7cfb\u7d71\u73fe\u6b63\u7dad\u8b77\u4e2d\uff0c \u6545\u7121\u6cd5\u4f7f\u7528\u3002\n\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "timeline.time.afternoon": "PM",
          "timeline.time.morning": "AM",
          "timeline.video.popup.waiting":
            "\u7de8\u78bc\u8655\u7406\u4e2d\u3002\n\u8acb\u7a0d\u5019\u518d\u8a66\u3002",
          "timeline.yes": "\u662f",
          "timline.report.policy.desc":
            "\u6aa2\u8209\u804a\u5929\u5167\u5bb9\u6216\u8cbc\u6587\u5f8c\uff0c\u8a72\u7528\u6236\u7684\u500b\u4eba\u6a94\u6848\u4ee5\u53ca\u60a8\u8207\u8a72\u7528\u6236\u6700\u8fd1\u50b3\u9001\u768420\u5247\u8a0a\u606f\uff0c\u6216\u8a72\u5247\u6709\u554f\u984c\u7684\u8cbc\u6587\u5c07\u6703\u50b3\u9001\u7d66\u6211\u5011\u3002",
          "unsupported.file.checkbox":
            "\u4e00\u5f8b\u58d3\u7e2e\u5f8c\u518d\u50b3\u9001",
          "unsupported.file.common":
            "\u4e0d\u652f\u63f4\u7684\u6a94\u6848\u683c\u5f0f\u5c07\u6703\u5148\u58d3\u7e2e\uff0c\u4e26\u4ee5\u58d3\u7e2e\u6a94\u683c\u5f0f\u50b3\u9001\u3002",
          "unsupported.file.compress.fail":
            "\u7121\u6cd5\u58d3\u7e2e\u6a94\u6848\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "unsupported.file.compressing":
            "\u6b63\u5728\u5efa\u7acb\u58d3\u7e2e\u6a94\u2026 ",
          "unsupported.file.dontshow": "\u4e0d\u518d\u986f\u793a",
          "unsupported.file.multi":
            "\u4e0d\u652f\u63f4\u90e8\u5206\u6a94\u6848\u683c\u5f0f\u3002\u78ba\u5b9a\u8981\u58d3\u7e2e\u4e26\u50b3\u9001\u55ce\uff1f",
          "unsupported.file.single":
            "\u4e0d\u652f\u63f4\u6b64\u6a94\u6848\u683c\u5f0f\u3002\u78ba\u5b9a\u8981\u58d3\u7e2e\u4e26\u50b3\u9001\u55ce\uff1f",
          "update.msg.check.security1": "\u5b89\u5168\u6aa2\u67e5\u4e2d\u3002",
          "update.msg.check.security2": "\u8acb\u7a0d\u5019\u3002",
          "update.summary.url":
            "http://openapis.jboard.naver.jp/mobile/document/line_desktop/zh-hant/1782",
          "upgradegroupinvite.button.requireinvites": "\u958b\u555f",
          "upgradegroupinvite.popup.desc.toomanyfriends":
            "\u6210\u54e1\u8d85\u904e100\u4eba\u7684\u7fa4\u7d44\u5c07\u6703\u81ea\u52d5\u958b\u555f\u300c\u6536\u5230\u9080\u8acb\u624d\u53ef\u52a0\u5165\u300d\u7684\u8a2d\u5b9a\u3002\n\u82e5\u8981\u907f\u514d\u958b\u555f\u6b64\u8a2d\u5b9a\uff0c\u8acb\u52ff\u8b93\u7fa4\u7d44\u6210\u54e1\u8d85\u904e100\u4eba\u3002",
          "upgradegroupinvite.popup.title.toomanyfriends":
            "\u958b\u555f\u300c\u6536\u5230\u9080\u8acb\u624d\u53ef\u52a0\u5165\u300d\u8a2d\u5b9a\uff1f",
          "upic.btn.cancel.title": "\u53d6\u6d88",
          "upic.btn.find.title": "\u700f\u89bd",
          "upic.btn.ok.title": "\u78ba\u5b9a",
          "upic.label.desc.title":
            "\u5716\u7247\u683c\u5f0f\u53ef\u70bajpg\u3001jpeg\u3001png\u3001gif\u3001bmp\u3002\n",
          "upic.label.upic.title": "\u7de8\u8f2f\u500b\u4eba\u5716\u7247",
          "upic.msg.cantFindFile":
            "\u7121\u6cd5\u627e\u5230\u8a72\u7b46\u6a94\u6848",
          "upic.msg.not.image":
            "\u50c5\u53ef\u4f9b\u60a8\u50b3\u9001\u5716\u7247\u3002",
          "upic.msg.select": "\u8acb\u9078\u64c7\u500b\u4eba\u5716\u7247",
          "upic.msg.sizeExceeds":
            "\u5716\u7247\u6a94\u50c5\u80fd\u70ba20MB\u4ee5\u5167\u3002",
          "user.report.error":
            "\u7531\u65bc\u6b64\u8a0a\u606f\u5df2\u4e0d\u5b58\u5728\uff0c\u7121\u6cd5\u9032\u884c\u6aa2\u8209\u3002",
          "user.report.policy.desc":
            "\u6aa2\u8209\u5f8c\uff0c\u8a72\u7528\u6236\u7684\u500b\u4eba\u6a94\u6848\u4ee5\u53ca\u60a8\u8207\u8a72\u7528\u6236\u6700\u8fd1\u50b3\u9001\u768410\u5247\u8a0a\u606f\uff0c\u6216\u662f\u6709\u554f\u984c\u7684\u8cbc\u6587\u5167\u5bb9\u5c07\u6703\u50b3\u9001\u7d66\u6211\u5011\u3002",
          "user.report.question":
            "\u60a8\u8981\u5c01\u9396\u9019\u4f4d\u7528\u6236\u55ce\uff1f",
          "user.search.placeholder": "\u5229\u7528\u540d\u7a31\u641c\u5c0b",
          "user.warning.investmentfraud":
            "\u8acb\u7559\u610f\u804a\u5929\u5ba4\u4e2d\u6f5b\u5728\u7684\u8a50\u9a19\u884c\u70ba\u3002",
          "user.warning.invitedtogroup":
            "<![CDATA[<b><font color='%1'>%2</font></b>\u9080\u8acb\u60a8\u52a0\u5165\u7fa4\u7d44\u3002\n<font color='#FF3A44'>\u82e5\u89ba\u5f97\u6b64\u7528\u6236\u53ef\u7591\uff0c\u53ef\u5c01\u9396\u4e26\u6aa2\u8209\u5c0d\u65b9\u3002</font>]]>",
          "user.warning.spammer":
            "\u203b\u8acb\u60a8\u78ba\u8a8d\u662f\u5426\u8981\u5c07\u6b64\u4eba\u52a0\u5165\u597d\u53cb",
          "user.warning.spammer.group":
            "%1\u9080\u8acb\u60a8\u52a0\u5165\u7fa4\u7d44\u3002\u82e5\u60a8\u89ba\u5f97\u6b64\u7528\u6236\u53ef\u7591\uff0c\u8acb\u6309\u4e00\u4e0b\u300c\u6aa2\u8209\u300d\u3002",
          "videoProfile.error.fileType":
            "\u6b64\u6a94\u6848\u7684\u683c\u5f0f\u7121\u6cd5\u4f7f\u7528\u3002\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "videoProfile.error.lessThenOneSec":
            "\u7121\u6cd5\u4f7f\u75281\u79d2\u9418\u4ee5\u4e0b\u7684\u5f71\u7247\u3002\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "viewer.alert.desc.delete":
            "\u8981\u522a\u9664\u9019\u500b\u9805\u76ee\u55ce\uff1f",
          "viewer.alert.desc.fullsize":
            "\u9ede\u6309\u300cESC\u300d\u5373\u53ef\u9000\u51fa\u5168\u87a2\u5e55",
          "viewer.alert.desc.mustinstallplugin":
            "\u8acb\u4e0b\u8f09\u53ef\u958b\u555f\u7167\u7247\u3001\u5f71\u7247\u548cGIF\u683c\u5f0f\u6a94\u6848\u7684\u5a92\u9ad4\u64ad\u653e\u5668\u64f4\u5145\u529f\u80fd\u3002\u7acb\u5373\u4e0b\u8f09\uff1f",
          "viewer.alert.image.expired.previewinstead":
            "\u7121\u6cd5\u8b80\u53d6\u904e\u671f\u6a94\u6848\uff0c\u50c5\u53ef\u700f\u89bd\u7e2e\u5716\u3002",
          "viewer.alert.video.expired":
            "\u5f71\u7247\u4e0b\u8f09\u671f\u9650\u5df2\u904e\uff0c\u7121\u6cd5\u64ad\u653e\uff01",
          "viewer.contextmenu.copy": "\u8907\u88fd",
          "viewer.contextmenu.forward": "\u5206\u4eab",
          "viewer.contextmenu.keep": "\u5132\u5b58\u81f3Keep",
          "viewer.contextmenu.keepmemo": "\u50b3\u9001\u81f3Keep\u7b46\u8a18",
          "viewer.contextmenu.saveas": "\u53e6\u5b58\u65b0\u6a94",
          "viewer.contextmenu.scanqr": "\u6383\u63cf\u884c\u52d5\u689d\u78bc",
          "viewer.contextmenu.scantext": "\u8f49\u70ba\u6587\u5b57",
          "viewer.copy.toast.copied":
            "\u5df2\u8907\u88fd\u5230\u526a\u8cbc\u7c3f\u3002",
          "viewer.error.media.download.fail":
            "\u7121\u6cd5\u5132\u5b58\u6b64\u6a94\u6848\uff0c\n\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "viewer.error.video.common":
            "\u76ee\u524d\u767c\u751f\u66ab\u6642\u6027\u7684\u554f\u984c\uff0c\u6a94\u6848\u7121\u6cd5\u64ad\u653e\u3002",
          "viewer.error.video.network":
            "\u7db2\u8def\u6216\u4f3a\u670d\u5668\u767c\u751f\u554f\u984c\uff0c\u6a94\u6848\u7121\u6cd5\u64ad\u653e\u3002\n\u8acb\u91cd\u65b0\u518d\u8a66\u4e00\u6b21\u3002",
          "viewer.error.video.transient":
            "\u76ee\u524d\u767c\u751f\u66ab\u6642\u6027\u7684\u554f\u984c\uff0c\u6a94\u6848\u7121\u6cd5\u64ad\u653e\u3002\n\u8acb\u91cd\u65b0\u518d\u8a66\u4e00\u6b21\u3002",
          "viewer.keep.toast.saved": "\u5df2\u5132\u5b58\u81f3Keep\u3002",
          "viewer.menu.edit": "\u7de8\u8f2f",
          "viewer.menu.forward": "\u5206\u4eab",
          "viewer.menu.info.name": "\u6a94\u6848\u540d\u7a31",
          "viewer.menu.keep": "\u5132\u5b58\u81f3Keep",
          "viewer.menu.keepmemo": "\u50b3\u9001\u81f3Keep\u7b46\u8a18",
          "viewer.menu.more.delete": "\u522a\u9664",
          "viewer.menu.more.info": "\u6a94\u6848\u8a73\u7d30\u8cc7\u6599",
          "viewer.menu.more.speed": "\u64ad\u653e\u901f\u5ea6",
          "viewer.menu.openfolder": "\u958b\u555f\u8cc7\u6599\u593e",
          "viewer.menu.originalsize": "\u5be6\u969b\u5927\u5c0f",
          "viewer.menu.rotate": "\u65cb\u8f49 90 \u5ea6",
          "viewer.menu.saveas": "\u53e6\u5b58\u65b0\u6a94",
          "viewer.menu.scanqr": "\u6383\u63cf\u884c\u52d5\u689d\u78bc",
          "viewer.menu.scantext": "\u8f49\u70ba\u6587\u5b57",
          "viewer.menu.showalbums": "\u6aa2\u8996\u6240\u6709\u9805\u76ee",
          "viewer.menu.showallcontents": "\u6aa2\u8996\u6240\u6709\u9805\u76ee",
          "viewer.menu.thumbnail.expand": "\u986f\u793a\u7e2e\u5716",
          "viewer.menu.thumbnail.fold": "\u96b1\u85cf\u7e2e\u5716",
          "viewer.menu.video.pause": "\u66ab\u505c",
          "viewer.menu.video.play": "\u64ad\u653e",
          "viewer.menu.video.replay": "\u91cd\u64ad",
          "viewer.menu.video.stop": "\u505c\u6b62",
          "viewer.menu.video.volume": "\u97f3\u91cf",
          "viewer.menu.zoomin": "\u653e\u5927",
          "viewer.menu.zoomout": "\u62c9\u9060",
          "viewer.play.toast.speaker.beingconnected":
            "\u6b63\u5728\u5207\u63db\u81f3\u5176\u4ed6\u5587\u53ed\uff0c\u8acb\u7a0d\u5019\u3002",
          "viewer.popup.info.created": "\u62cd\u651d\u6642\u9593",
          "viewer.popup.info.filesize": "\u6a94\u6848\u5927\u5c0f",
          "viewer.popup.info.from": "\u4f86\u81ea",
          "viewer.popup.info.resolution": "\u89e3\u6790\u5ea6",
          "viewer.popup.info.saved": "\u5132\u5b58\u6642\u9593",
          "viewer.saveas.toast.saved": "\u4e0b\u8f09\u5b8c\u7562\u3002",
          "viewer.tooltip.window.close": "\u95dc\u9589",
          "viewer.tooltip.window.maximize": "\u6700\u5927\u5316",
          "viewer.tooltip.window.minimize": "\u6700\u5c0f\u5316",
          "viewer.tooltip.window.restore":
            "\u56de\u5fa9\u539f\u4f86\u5927\u5c0f\uff08\u7e2e\u5c0f\uff09",
          "voip.beautyfeature.button.clearall": "\u6e05\u9664\u5168\u90e8",
          "voip.beautyfeature.popupbutton.cancel": "\u53d6\u6d88",
          "voip.beautyfeature.popupbutton.clearall": "\u6e05\u9664\u5168\u90e8",
          "voip.beautyfeature.popupdesc.clearfaceeffects":
            "\u8acb\u5148\u6e05\u9664\u6240\u6709\u81c9\u90e8\u7279\u6548\u624d\u80fd\u7e7c\u7e8c\u4f7f\u7528\u7f8e\u808c\u529f\u80fd\u3002\u78ba\u5b9a\u8981\u6e05\u9664\u55ce\uff1f",
          "voip.beautyfeature.toggle.darkeneyebrows": "\u7709\u8272",
          "voip.beautyfeature.toggle.fillinlips": "\u5507\u8272",
          "voip.beautyfeature.toggle.resizeeyes": "\u5927\u773c",
          "voip.beautyfeature.toggle.revert": "\u9810\u8a2d\u503c",
          "voip.beautyfeature.toggle.slimjawline": "\u81c9\u578b",
          "voip.beautyfeature.toggle.slimnose": "\u9f3b\u578b",
          "voip.beautyfeature.toggle.smoothcomplexion": "\u67d4\u819a",
          "voip.button.label.call": "\u63a5\u807d",
          "voip.button.label.disconnect": "\u7d50\u675f",
          "voip.button.label.voiceonly":
            "\u95dc\u9589\u93e1\u982d\u5f8c\u63a5\u807d",
          "voip.call.tooltip.cameraunavailable":
            "\u7121\u6cd5\u4f7f\u7528\u76f8\u6a5f",
          "voip.call.tooltip.microphoneunavailable":
            "\u7121\u6cd5\u4f7f\u7528\u9ea5\u514b\u98a8",
          "voip.connect.camera.alert":
            "\u5df2\u5075\u6e2c\u5230\u76f8\u6a5f\uff0c\u8981\u958b\u555f\u76f8\u6a5f\u55ce\uff1f",
          "voip.connect.mic.alert":
            "\u5df2\u5075\u6e2c\u5230\u9ea5\u514b\u98a8\uff0c\u8981\u958b\u555f\u9ea5\u514b\u98a8\u55ce\uff1f",
          "voip.desc.calling": "\u64a5\u865f\u4e2d",
          "voip.desc.calling.failed":
            "%1\u7121\u6cd5\u901a\u8a71 \u8acb\u518d\u64a5\u4e00\u6b21\u3002(%2)",
          "voip.desc.calling.failed.accept.other.device":
            "\u60a8\u6b63\u5229\u7528\u5176\u4ed6\u6a5f\u5668\u901a\u8a71\u4e2d",
          "voip.desc.calling.failed.contact.busy":
            "%1\u6b63\u5728\u901a\u8a71\u4e2d\u3002\u8acb\u7a0d\u5f8c\u518d\u64a5\u3002\n",
          "voip.desc.calling.failed.maintance":
            "\u5f88\u62b1\u6b49\uff0c\n\u76ee\u524d\u96fb\u8166\u7248\u7684\u8a9e\u97f3\u901a\u8a71\u529f\u80fd\u66ab\u6642\u7121\u6cd5\u4f7f\u7528\u3002\n\u8acb\u7a0d\u5f8c\u518d\u8a66\uff0c\u8b1d\u8b1d\u3002",
          "voip.desc.calling.failed.need.audio":
            "\u7cfb\u7d71\u7121\u6cd5\u627e\u5230\u97f3\u6548\u5361\u3002\n\u8acb\u65bc\u78ba\u8a8d\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "voip.desc.calling.failed.need.device":
            "\u9ea5\u514b\u98a8\u53ca\u5587\u5427\u5c1a\u672a\u9023\u63a5\u81f3\u96fb\u8166\u3002\n\u8acb\u78ba\u8a8d\u9023\u63a5\u72c0\u614b\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "voip.desc.calling.failed.need.devicesetting": "",
          "voip.desc.calling.failed.need.mic":
            "\u9ea5\u514b\u98a8\u5c1a\u672a\u9023\u63a5\u81f3\u96fb\u8166\u3002\n\u8acb\u78ba\u8a8d\u9023\u63a5\u72c0\u614b\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "voip.desc.calling.failed.need.oscamera":
            "\u7121\u6cd5\u4f7f\u7528\u76f8\u6a5f\u3002\u8acb\u5728\u60a8\u7684\u88dd\u7f6e\u4e0a\u5141\u8a31\u5b58\u53d6\u76f8\u6a5f\u3002",
          "voip.desc.calling.failed.need.osmic":
            "\u7121\u6cd5\u4f7f\u7528\u9ea5\u514b\u98a8\u3002\u8acb\u5728\u60a8\u7684\u88dd\u7f6e\u4e0a\u5141\u8a31\u5b58\u53d6\u9ea5\u514b\u98a8\u3002",
          "voip.desc.calling.failed.need.ospeaker": "",
          "voip.desc.calling.failed.need.spk":
            "\u5587\u5427\u5c1a\u672a\u9023\u63a5\u81f3\u96fb\u8166\u3002 \n\u8acb\u78ba\u8a8d\u9023\u63a5\u72c0\u614b\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "voip.desc.calling.failed.need.update":
            "\u73fe\u5728\u5c07\u624b\u6a5f\u4e0a\u7684LINE\u5347\u7d1a\u81f3\u6700\u65b0\u7248\u672c\u5f8c\uff0c\n\u5c07\u80fd\u5728\u96fb\u8166\u7248\u4e0a\u4f7f\u7528\u8a9e\u97f3\u901a\u8a71\u7684\u529f\u80fd\uff01\n",
          "voip.desc.calling.failed.no.accept":
            "\u7121\u56de\u61c9\n\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",
          "voip.desc.calling.failed.other.device.use":
            "\u60a8\u6b63\u5229\u7528\u5176\u4ed6\u6a5f\u5668\u901a\u8a71\u4e2d",
          "voip.desc.calling.failed.peer":
            "\u7121\u6cd5\u901a\u8a71\n%1\u53ef\u80fd\u672a\u958b\u555f\u901a\u8a71\u529f\u80fd\uff0c\u6216\u5c1a\u672a\u5b89\u88dd\u6700\u65b0\u7248\u672c\u3002\n",
          "voip.desc.calling.video":
            "\u8996\u8a0a\u901a\u8a71\u6b63\u5728\u64a5\u51fa",
          "voip.desc.camerausage":
            "\u8acb\u5141\u8a31LINE\u53d6\u7528\u60a8\u7684\u76f8\u6a5f\uff0c\u624d\u80fd\u57f7\u884c\u8996\u8a0a\u901a\u8a71\u3002",
          "voip.desc.camerausage.maconly":
            "\u8acb\u81f3\u7cfb\u7d71\u504f\u597d\u8a2d\u5b9a\uff1e\u5b89\u5168\u6027\u8207\u96b1\u79c1\uff1e\u96b1\u79c1\uff0c\u5141\u8a31LINE\u53d6\u7528\u60a8\u7684\u76f8\u6a5f\u5f8c\uff0c\u624d\u80fd\u57f7\u884c\u8996\u8a0a\u901a\u8a71\u3002",
          "voip.desc.connecting": "\u63a5\u901a\u4e2d",
          "voip.desc.makeCall.Failed.network":
            "\u7db2\u8def\u9023\u7dda\u4e0d\u7a69\uff0c\u901a\u8a71\u4e2d\u65b7\u3002 \n\u8acb\u7a0d\u5f8c\u518d\u64a5\u3002",
          "voip.desc.mic.failed":
            "\u9ea5\u514b\u98a8\u53ef\u80fd\u767c\u751f\u7570\u5e38\u3002\u5982\u679c\u5c0d\u65b9\u807d\u4e0d\u898b\u60a8\u7684\u8072\u97f3\uff0c\u8acb\u6aa2\u67e5\u9ea5\u514b\u98a8\u8a2d\u5b9a\u3002",
          "voip.desc.microphoneusage":
            "\u8acb\u5141\u8a31LINE\u53d6\u7528\u60a8\u7684\u9ea5\u514b\u98a8\uff0c\u624d\u80fd\u57f7\u884c\u8a9e\u97f3\u901a\u8a71\u53ca\u8996\u8a0a\u901a\u8a71\u3002",
          "voip.desc.microphoneusage.maconly":
            "\u8acb\u81f3\u7cfb\u7d71\u504f\u597d\u8a2d\u5b9a\uff1e\u5b89\u5168\u6027\u8207\u96b1\u79c1\uff1e\u96b1\u79c1\uff0c\u5141\u8a31LINE\u53d6\u7528\u60a8\u7684\u9ea5\u514b\u98a8\u5f8c\uff0c\u624d\u80fd\u57f7\u884c\u8996\u8a0a\u901a\u8a71\u3002",
          "voip.desc.ringing": "\u4f86\u96fb",
          "voip.desc.ringing.video":
            "\u8996\u8a0a\u901a\u8a71\u4f86\u96fb\u4e2d\u2026\u2026",
          "voip.desc.speaker.failed":
            "\u64f4\u97f3\u5668\u53ef\u80fd\u767c\u751f\u7570\u5e38\u3002\u5982\u679c\u807d\u4e0d\u898b\u4efb\u4f55\u8072\u97f3\uff0c\u8acb\u6aa2\u67e5\u64f4\u97f3\u5668\u8a2d\u5b9a\u3002",
          "voip.disconnect.camera.entry.alert":
            "\u672a\u5075\u6e2c\u5230\u76f8\u6a5f\uff0c\u5c0d\u65b9\u5c07\u7121\u6cd5\u770b\u5230\u60a8\u7684\u5f71\u50cf\u3002\u8981\u52a0\u5165\u8996\u8a0a\u901a\u8a71\u55ce\uff1f",
          "voip.disconnect.camera.error":
            "\u672a\u5075\u6e2c\u5230\u76f8\u6a5f\uff0c\u7121\u6cd5\u57f7\u884c\u3002",
          "voip.disconnect.mic.entry.alert":
            "\u672a\u5075\u6e2c\u5230\u9ea5\u514b\u98a8\uff0c\u5c0d\u65b9\u5c07\u7121\u6cd5\u807d\u5230\u60a8\u7684\u8072\u97f3\u3002\u8981\u52a0\u5165\u8996\u8a0a\u901a\u8a71\u55ce\uff1f",
          "voip.disconnect.mic.entry.alert.audio":
            "\u78ba\u5b9a\u8981\u52a0\u5165\u8a9e\u97f3\u901a\u8a71\u55ce\uff1f\u7531\u65bc\u672a\u5075\u6e2c\u5230\u9ea5\u514b\u98a8\uff0c\u5c0d\u65b9\u5c07\u7121\u6cd5\u807d\u5230\u60a8\u7684\u8072\u97f3\u3002",
          "voip.disconnect.mic.error":
            "\u672a\u5075\u6e2c\u5230\u9ea5\u514b\u98a8\uff0c\u7121\u6cd5\u57f7\u884c\u3002",
          "voip.disconnect.micncam.entry.alert":
            "\u672a\u5075\u6e2c\u5230\u9ea5\u514b\u98a8\u53ca\u76f8\u6a5f\uff0c\u5c0d\u65b9\u5c07\u7121\u6cd5\u807d\u5230\u6216\u770b\u5230\u60a8\u3002\u8981\u52a0\u5165\u8996\u8a0a\u901a\u8a71\u55ce\uff1f",
          "voip.effect.guide.adjust.effect":
            "\u8abf\u6574\u7f8e\u5bb9\u6548\u679c\u3002",
          "voip.effect.guide.detect.face":
            "\u8acb\u78ba\u5be6\u62cd\u651d\u5230\u60a8\u7684\u81c9\u90e8\u3002",
          "voip.effect.guide.extra.001":
            "\u548c\u597d\u53cb\u4e00\u8d77\u4f86\u73a9\u6b64\u7279\u6548\u5427\uff01",
          "voip.effect.guide.extra.006":
            "\u8acb\u5de6\u53f3\u6416\u6416\u982d\uff01",
          "voip.effect.guide.extra.011": "\u7b11\u4e00\u500b\u5427\uff01",
          "voip.effect.guide.extra.012":
            "\u62d6\u62c9\u6ed1\u687f\u53ef\u8abf\u6574\u7279\u6548\u5f37\u5ea6\u3002",
          "voip.effect.guide.eye.blink": "\u8acb\u7728\u773c\u3002",
          "voip.effect.guide.mouth.open": "\u8acb\u5f35\u958b\u5634\uff01",
          "voip.error.init.failed.callee":
            "[%1\u3055\u3093\u4f86\u96fb\u4e2d]\n\u56e0\u76ee\u524d\u96fb\u8166\u74b0\u5883\u4e4b\u554f\u984c\uff0c\u4f7f\u7528\u901a\u8a71\u529f\u80fd\u6642\n\u5c07\u6709\u53ef\u80fd\u5f37\u5236\u7d50\u675f\u3002",
          "voip.error.init.failed.caller":
            "\u56e0\u76ee\u524d\u96fb\u8166\u74b0\u5883\u4e4b\u554f\u984c\uff0c\u4f7f\u7528\u901a\u8a71\u529f\u80fd\u6642\n\u5c07\u6709\u53ef\u80fd\u5f37\u5236\u7d50\u675f\u3002",
          "voip.label.create.title": "\u8a9e\u97f3\u901a\u8a71",
          "voip.label.mic": "\u9ea5\u514b\u98a8",
          "voip.label.speaker": "\u64f4\u97f3\u5668",
          "voip.label.video": "\u8996\u8a0a\u901a\u8a71",
          "voip.label.video.cameraon": "\u555f\u52d5",
          "voip.label.video.local.cameraOff":
            "\u5df2\u95dc\u9589\u93e1\u982d\u3002",
          "voip.label.video.local.cameraOn":
            "\u5df2\u958b\u555f\u93e1\u982d\u3002",
          "voip.label.video.local.noCamera":
            "\u627e\u4e0d\u5230\u93e1\u982d\u3002\u5c0d\u65b9\u5c07\u7121\u6cd5\u770b\u898b\u60a8\u3002\n",
          "voip.label.video.low.quality":
            "\u7db2\u8def\u9023\u7dda\u72c0\u614b\u4e0d\u7a69\u3002",
          "voip.label.video.remote.cameraOff":
            "\u5c0d\u65b9\u5df2\u95dc\u9589\u93e1\u982d",
          "voip.label.video.remote.cameraOn":
            "\u5c0d\u65b9\u5df2\u958b\u555f\u93e1\u982d",
          "voip.label.video.remote.noCamera":
            "\u5c0d\u65b9\u672a\u6709\u93e1\u982d\uff0c\u6216\u662f\u5f71\u50cf\u7121\u6cd5\u6b63\u5e38\u986f\u793a\u3002\n",
          "voip.label.video.ringing":
            "\u60a8\u8981\u555f\u52d5\u93e1\u982d\u55ce\uff1f",
          "voip.label.video.title": "\u8207%1\u8996\u8a0a\u901a\u8a71",
          "voip.media.unsupported.alert.update":
            "%1\u5df2\u958b\u59cb\u5206\u4eab\u87a2\u5e55\u756b\u9762\uff0c\u8acb\u5c07LINE\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u5373\u53ef\u89c0\u770b\u3002",
          "voip.msg.already.during.call":
            "\u60a8\u76ee\u524d\u6b63\u5728\u5176\u4ed6\u804a\u5929\u5ba4\u9032\u884c\u901a\u8a71\u3002",
          "voip.msg.bad.connection": "\u7db2\u8def\u72c0\u614b\u4e0d\u7a69",
          "voip.msg.bad.connection.failover":
            "\u91cd\u65b0\u9023\u7dda\u4e2d...",
          "voip.msg.error.no.audio.source":
            "\u9ea5\u514b\u98a8\u767c\u751f\u554f\u984c\uff0c\u6545\u901a\u8a71\u5df2\u7d50\u675f\u3002\u8acb\u7a0d\u5f8c\u91cd\u65b0\u518d\u64a5\u3002",
          "voip.msg.error.no.audio.tx.stream":
            "\u932f\u8aa4 \u7121\u6cd5\u6b63\u5e38\u57f7\u884c\uff0c\n\u8acb\u7a0d\u5f8c\u518d\u8a66\uff01",
          "voip.msg.network.unstable":
            "\u7db2\u8def\u9023\u7dda\u4e0d\u7a69\u5b9a\u3002",
          "voip.msg.not.avalable.during.call":
            "\u9032\u884c\u901a\u8a71\u6642\uff0c\u7121\u6cd5\u4f7f\u7528\u6b64\u529f\u80fd\u3002",
          "voip.msg.peer.no.audio.source":
            "\u5176\u4ed6\u53c3\u8207\u8005\u7684\u9ea5\u514b\u98a8\u767c\u751f\u554f\u984c\uff0c\u6545\u901a\u8a71\u5df2\u7d50\u675f\u3002\u8acb\u7a0d\u5f8c\u91cd\u65b0\u518d\u64a5\u3002",
          "voip.msg.send.freeCall":
            "\u78ba\u5b9a\u8981\u8207%1\u9032\u884c\u8a9e\u97f3\u901a\u8a71\uff1f",
          "voip.msg.send.videoCall":
            "\u78ba\u5b9a\u8981\u8207%1\u9032\u884c\u8996\u8a0a\u901a\u8a71\uff1f",
          "voip.msg.switch.to.video.noCamera":
            "\u6211\u5011\u5075\u6e2c\u4e0d\u5230\u60a8\u7684\u7167\u76f8\u6a5f\uff0c\u56e0\u6b64\u7121\u6cd5\u986f\u793a\u60a8\u7684\u8996\u8a0a\u3002\u8981\u63a5\u807d\u9019\u901a\u8996\u8a0a\u901a\u8a71\u55ce\uff1f",
          "voip.msg.video.camera.unavailable":
            "\u7121\u6cd5\u652f\u63f4\u60a8\u7684\u76f8\u6a5f\u93e1\u982d\u3002\n\u8acb\u7531\u300c\u8a2d\u5b9a\u300d\uff1e\u300c\u4f86\u96fb\u300d\uff1e\u300c\u76f8\u6a5f\u8a2d\u5b9a\u300d\u8655\u9078\u64c7\u5176\u4ed6\u76f8\u6a5f\u3002\u5373\u4f7f\u6c92\u6709\u9069\u7528\u7684\u76f8\u6a5f\uff0c\u60a8\u4ecd\u53ef\u64a5\u6253\u6216\u63a5\u807dLINE\u96fb\u8a71\uff0c\u4f46\u7121\u6cd5\u5411\u5c0d\u65b9\u986f\u793a\u5f71\u50cf\u3002",
          "voip.msg.video.term.device.control":
            "\u56e0\u5c0d\u65b9\u64cd\u4f5c\u7684\u95dc\u4fc2\uff0c\u5df2\u7531\u8996\u8a0a\u901a\u8a71\u5207\u63db\u81f3\u8a9e\u97f3\u901a\u8a71\u3002\n",
          "voip.msg.video.term.device.interrupted":
            "\u5c0d\u65b9\u7684\u93e1\u982d\u8655\u65bc\u505c\u6b62\u72c0\u614b",
          "voip.msg.video.term.overload.direct.video.call.failed":
            "\u8996\u8a0a\u901a\u8a71\u529f\u80fd\u56e0\u66ab\u6642\u6027\u932f\u8aa4\u7121\u6cd5\u4f7f\u7528\u3002\n\u8acb\u4f7f\u7528\u8a9e\u97f3\u901a\u8a71\uff0c\u6216\u7a0d\u5f8c\u518d\u8a66\u3002",
          "voip.msg.video.term.overload.video.changing.failed":
            "\u8996\u8a0a\u901a\u8a71\u529f\u80fd\u56e0\u66ab\u6642\u6027\u932f\u8aa4\u7121\u6cd5\u4f7f\u7528\u3002\n\u8acb\u7a0d\u5019\u518d\u8a66\u3002",
          "voip.msg.video.term.unknown":
            "\u767c\u751f\u554f\u984c\uff0c\u8acb\u7a0d\u5019\u518d\u64a5\u3002\n",
          "voip.msg.video.term.unstable":
            "\u7db2\u8def\u9023\u7dda\u72c0\u614b\u4e0d\u7a69\uff0c\u5df2\u5207\u63db\u81f3\u8a9e\u97f3\u901a\u8a71\u3002",
          "voip.msg.video.term.unsupported.device.video":
            "\u8996\u8a0a\u901a\u8a71\u7684\u529f\u80fd\u7121\u6cd5\u4f7f\u7528\uff01\n\u5c0d\u65b9\u672a\u4f7f\u7528\u6700\u65b0\u7248\u672c\u7684LINE\uff0c\u6216\u662f\u5c0d\u65b9\u7684\u624b\u6a5f\u5c1a\u672a\u652f\u63f4\u8996\u8a0a\u901a\u8a71\u7684\u529f\u80fd\u3002\n",
          "voip.msg.video.term.unsupported.device.voice":
            "\u76ee\u524d\u70ba\u8a9e\u97f3\u901a\u8a71\u7684\u6a21\u5f0f\u3002\n\u5c0d\u65b9\u672a\u4f7f\u7528\u6700\u65b0\u7248\u672c\u7684LINE\uff0c\n\u6216\u662f\u5c0d\u65b9\u7684\u624b\u6a5f\u5c1a\u672a\u652f\u63f4\u8996\u8a0a\u901a\u8a71\u7684\u529f\u80fd\u3002",
          "voip.msg.warning.close":
            "\u60a8\u8981\u7d50\u675f\u901a\u8a71\u55ce\uff1f",
          "voip.msg.warning.groupclose":
            "\u60a8\u8981\u9000\u51fa\u901a\u8a71\u55ce\uff1f",
          "voip.noisecanceling.desc.guide":
            "\u5df2\u958b\u555f\u6d88\u9664\u96dc\u97f3\u529f\u80fd\u4ee5\u6291\u5236\u74b0\u5883\u566a\u97f3\u5e72\u64fe\u3002",
          "voip.noisecanceling.popup.desc":
            "\u8b8a\u66f4\u8a2d\u5b9a\u5c07\u7531\u4e0b\u6b21\u901a\u8a71\u958b\u59cb\u5957\u7528\u3002\u82e5\u8981\u7acb\u5373\u5957\u7528\uff0c\u8acb\u5148\u7d50\u675f\u901a\u8a71\u518d\u91cd\u65b0\u958b\u59cb\u3002",
          "voip.noisecanceling.tooltip.off":
            "\u958b\u555f\u6d88\u9664\u96dc\u97f3\u529f\u80fd",
          "voip.noisecanceling.tooltip.on":
            "\u95dc\u9589\u6d88\u9664\u96dc\u97f3\u529f\u80fd",
          "voip.popup.end": "\u7d50\u675f\u901a\u8a71",
          "voip.popup.start": "\u958b\u59cb",
          "voip.screen.share.remove.monitor":
            "\u986f\u793a\u5668\u5df2\u65b7\u7dda\uff0c\u6545\u901a\u8a71\u7d50\u675f\u3002",
          "voip.screenshare.button.zoomin": "\u653e\u5927",
          "voip.screenshare.button.zoomout": "\u7e2e\u5c0f",
          "voip.screenshare.button.zoomreset": "\u91cd\u7f6e\u7e2e\u653e",
          "voip.screenshare.desc.pause":
            "\u5df2\u66ab\u505c\u5206\u4eab\u87a2\u5e55\u756b\u9762\u3002",
          "voip.screenshare.desc.pause.tooltip":
            "\u6700\u5c0f\u5316\u3001\u7e2e\u653e\u6216\u79fb\u52d5\u8996\u7a97\uff0c\u90fd\u6703\u5c0e\u81f4\u7cfb\u7d71\u81ea\u52d5\u66ab\u505c\u5206\u4eab\u87a2\u5e55\u756b\u9762\u3002",
          "voip.screenshare.error.closeapp":
            "\u7121\u6cd5\u5206\u4eab\u5df2\u95dc\u9589\u7684\u87a2\u5e55\u756b\u9762",
          "voip.screenshare.index.screen": "\u87a2\u5e55\u756b\u9762",
          "voip.screenshare.index.window": "\u8996\u7a97",
          "voip.screenshare.option.optimizevideoclips":
            "\u5c07\u5f71\u7247\u6700\u4f73\u5316",
          "voip.screenshare.tooltip.fullscreen": "\u684c\u9762%1",
          "voip.screenshare.tooltip.optimizevideoclips":
            "\u5206\u4eab\u87a2\u5e55\u756b\u9762\u6642\uff0c\u53ef\u8b93\u5f71\u7247\u66f4\u9806\u66a2\u3002",
          "voip.tooltip.callsetting": "\u901a\u8a71\u8a2d\u5b9a",
          "voip.tooltip.camera.off": "\u95dc\u93e1\u982d",
          "voip.tooltip.camera.on": "\u958b\u93e1\u982d",
          "voip.tooltip.chat": "\u804a\u5929",
          "voip.tooltip.echocanceloff":
            "\u95dc\u9589\u6d88\u9664\u56de\u97f3\u529f\u80fd",
          "voip.tooltip.echocancelon":
            "\u958b\u555f\u6d88\u9664\u56de\u97f3\u529f\u80fd",
          "voip.tooltip.end.call": "\u7d50\u675f",
          "voip.tooltip.end.groupmeetingcall": "\u9000\u51fa",
          "voip.tooltip.fullhd":
            "\u300cFull HD voice\u300d\u5b57\u6a23\u70ba\u7da0\u8272\u6642\uff0c\u97f3\u8cea\u66f4\u6e05\u6670\uff01",
          "voip.tooltip.mic.off": "\u95dc\u9ea5\u514b\u98a8",
          "voip.tooltip.mic.off.muteronguide":
            "\u9ea5\u514b\u98a8\u95dc\u9589\u4e2d\uff0c\u8acb\u5148\u958b\u555f\u9ea5\u514b\u98a8\u518d\u8aaa\u8a71\u3002",
          "voip.tooltip.mic.off.spacebartoast":
            "\u9ea5\u514b\u98a8\u975c\u97f3\u4e2d\uff01\u6309\u4f4f\u7a7a\u767d\u9375\u53ef\u66ab\u6642\u958b\u555f\u9ea5\u514b\u98a8\u3002",
          "voip.tooltip.mic.on": "\u958b\u9ea5\u514b\u98a8",
          "voip.tooltip.microphone.autovolume":
            "\u5df2\u81ea\u52d5\u8abf\u6574\u97f3\u91cf",
          "voip.tooltip.onscreentool.clearall": "\u6e05\u9664\u5168\u90e8",
          "voip.tooltip.onscreentool.eraser": "\u6a61\u76ae\u64e6",
          "voip.tooltip.onscreentool.off":
            "\u95dc\u9589\u7e6a\u5716\u5de5\u5177",
          "voip.tooltip.onscreentool.on":
            "\u958b\u555f\u7e6a\u5716\u5de5\u5177",
          "voip.tooltip.onscreentool.pen": "\u7b46",
          "voip.tooltip.onscreentool.pointer": "\u96f7\u5c04\u7b46",
          "voip.tooltip.onscreentool.redo": "\u53d6\u6d88\u5fa9\u539f",
          "voip.tooltip.onscreentool.select": "\u79fb\u52d5",
          "voip.tooltip.onscreentool.stamp": "\u5370\u7ae0",
          "voip.tooltip.onscreentool.undo": "\u5fa9\u539f",
          "voip.tooltip.screen.share": "\u5206\u4eab\u87a2\u5e55\u756b\u9762",
          "voip.tooltip.screen.share.off": "\u505c\u6b62\u5206\u4eab",
          "voip.tooltip.screen.share.start":
            "\u5728\u8996\u8a0a\u901a\u8a71\u6642\u5206\u4eab\u87a2\u5e55\u756b\u9762",
          "voip.tooltip.screen.share.stop":
            "\u60a8\u6b63\u5728\u5206\u4eab\u756b\u9762\u3002\u518d\u9ede\u9078\u4e00\u6b21\u5716\u6a19\uff0c\u5373\u53ef\u7d50\u675f\u756b\u9762\u5206\u4eab\u3002",
          "voip.tooltip.speaker.off": "\u975c\u97f3",
          "voip.tooltip.speaker.on": "\u958b\u97f3\u6548",
          "voip.tooltip.switch.to.video":
            "\u9ede\u64ca\u5373\u53ef\u5207\u63db\u81f3\u8996\u8a0a\u901a\u8a71",
          "voip.tooltip.video.camera":
            "\u958b\u555f\uff0f\u95dc\u9589\u93e1\u982d",
          "voip.tooltip.video.camera.select": "\u9078\u64c7\u93e1\u982d",
          "voip.tooltip.video.fullscreen": "\u9032\u5165\u5168\u87a2\u5e55",
          "voip.tooltip.video.fullscreen.restore":
            "\u5c07\u8996\u7a97\u5fa9\u539f\u6210\u5148\u524d\u7684\u5927\u5c0f",
          "voip.tooltip.video.pin": "\u5c07\u8996\u7a97\u7f6e\u9802",
          "voip.tooltip.video.pinoff": "\u505c\u7528\u56fa\u5b9a\u756b\u9762",
          "voip.tooltip.video.speaker":
            "\u958b\u555f\uff0f\u95dc\u9589\u64f4\u97f3\u5668",
          "voip.tooltip.video.transform": "\u958b\u59cb\u8996\u8a0a",
          "voip.tooltip.volumezero":
            "\u63da\u8072\u5668\u97f3\u91cf\u8a2d\u70ba\u96f6\u3002\u8acb\u63d0\u9ad8\u97f3\u91cf\u4ee5\u807d\u5230\u5176\u4ed6\u4eba\u7684\u8072\u97f3\u3002",
          "voip.video.calling.failed.cameraSwitch":
            "\u93e1\u982d\u7121\u6cd5\u5207\u63db\u3002\n\u8acb\u91cd\u65b0\u518d\u8a66\u4e00\u6b21\u3002",
          "voip.video.calling.failed.noCamera":
            "\u93e1\u982d\u7121\u6cd5\u958b\u555f\u3002\n\u8acb\u78ba\u8a8d\u60a8\u93e1\u982d\u76ee\u524d\u7684\u9023\u63a5\u60c5\u6cc1\u3002",
          "voip.video.desc.makeCall.Failed":
            "\u7121\u6cd5\u901a\u8a71\uff0c\u8acb\u7a0d\u5019\u518d\u64a5\u3002",
          "voip.video.dynamicspeaking.pinoff": "\u53d6\u6d88\u91d8\u9078",
          "voip.video.dynamicspeaking.pinoff.desc":
            "\u5df2\u91d8\u9078\u3002\u60a8\u53ef\u9ede\u64ca\u756b\u9762\u53f3\u4e0a\u65b9\u7684\u300c\u53d6\u6d88\u91d8\u9078\u300d\u4f86\u53d6\u6d88\u91d8\u9078\u3002",
          "voip.video.effect.popup.downloadfail":
            "\u7121\u6cd5\u4e0b\u8f09\u7279\u6548\u3002\u518d\u8a66\u4e00\u6b21\uff1f",
          "voip.video.effect.toast.cameraoff":
            "\u8acb\u5148\u958b\u555f\u93e1\u982d\uff01",
          "voip.video.effect.toast.detectionfail":
            "\u8acb\u78ba\u8a8d\u60a8\u7684\u81c9\u90e8\u6709\u78ba\u5be6\u5c0d\u6e96\u93e1\u982d\u3002",
          "voip.video.effect.toast.downloadfail":
            "\u7121\u6cd5\u4e0b\u8f09\uff0c\u8acb\u518d\u8a66\u4e00\u6b21\u3002",
          "voip.video.effect.toast.nospace":
            "\u88dd\u7f6e\u7684\u5132\u5b58\u7a7a\u9593\u4e0d\u8db3\uff0c\u8acb\u91cb\u51fa\u7a7a\u9593\u5f8c\u518d\u8a66\u4e00\u6b21\u3002",
          "voip.video.effect.toast.xpccrash":
            "\u7531\u65bc\u767c\u751f\u66ab\u6642\u6027\u932f\u8aa4\uff0c\u76f8\u6a5f\u7279\u6548\u5df2\u88ab\u91cd\u8a2d\u3002\n\u8acb\u518d\u6b21\u8b8a\u66f4\u60a8\u7684\u8a2d\u5b9a\u3002",
          "voip.video.menu.bg": "\u80cc\u666f",
          "voip.video.menu.bg.alert.addbg":
            "\u7121\u6cd5\u8b80\u53d6\u6b64\u6a94\u6848\uff0c\u8acb\u9078\u64c7\u5176\u4ed6\u6a94\u6848\u4f5c\u70ba\u80cc\u666f\u3002",
          "voip.video.menu.bg.alert.addbg.button": "\u9078\u64c7",
          "voip.video.menu.bg.alert.maxbg":
            "\u8acb\u5148\u522a\u9664\u4e00\u500b\u80cc\u666f\uff0c\u624d\u80fd\u518d\u65b0\u589e\u80cc\u666f\u3002",
          "voip.video.menu.bgsettings": "\u7279\u6548",
          "voip.video.menu.blur": "\u6a21\u7cca\u80cc\u666f",
          "voip.video.menu.effect": "\u81c9\u90e8\u7279\u6548",
          "voip.video.menu.filter": "\u6ffe\u93e1",
          "voip.video.popupbutton.close": "\u95dc\u9589",
          "voip.video.popupbutton.dontshow": "\u4e0d\u518d\u986f\u793a",
          "voip.video.popupbutton.opensettings": "\u524d\u5f80\u8a2d\u5b9a",
          "voip.video.popupbutton.show": "\u986f\u793a",
          "voip.video.popupdesc.dontshowpreview":
            "\u505c\u7528\u6b64\u529f\u80fd\u5f8c\uff0c\u52a0\u5165\u8996\u8a0a\u901a\u8a71\u524d\u5c07\u4e0d\u6703\u986f\u793a\u76f8\u6a5f\u7684\u9810\u89bd\u756b\u9762\u3002",
          "voip.video.popuptitle.dontshowpreview":
            "\u8b8a\u66f4\u76f8\u6a5f\u756b\u9762\u9810\u89bd\u8a2d\u5b9a",
          "voip.video.preview.blur.off": "\u4e0d\u4f7f\u7528",
          "voip.video.preview.blur.on": "\u6a21\u7cca\u80cc\u666f",
          "voip.video.preview.cameraoff": "\u95dc\u9589\u76f8\u6a5f",
          "voip.video.preview.desc":
            "\u60a8\u53ef\u5148\u9810\u89bd\u76f8\u6a5f\u756b\u9762\uff0c\u518d\u52a0\u5165\u8996\u8a0a\u901a\u8a71\u3002",
          "voip.video.preview.join": "\u52a0\u5165",
          "voip.video.preview.title": "\u76f8\u6a5f\u756b\u9762\u9810\u89bd",
          "voip.video.title.videocallwith": "\u8207%1\u8996\u8a0a\u901a\u8a71",
          "voip.video.tooltip.filternblur":
            "\u5feb\u4f86\u8a66\u8a66\u773e\u591a\u6ffe\u93e1\u548c\u300c\u6a21\u7cca\u80cc\u666f\u300d\u7279\u6548\uff01",
          "voip.video.tooltip.startvideocall":
            "\u9ede\u64ca\u4ee5\u958b\u59cb\u8996\u8a0a\u901a\u8a71",
          "voip.video.tooltip.videomirroring":
            "\u6c34\u5e73\u7ffb\u8f49\u5f71\u50cf",
          "voip.video.tooltip.videomirroringoff":
            "\u95dc\u9589\u6c34\u5e73\u7ffb\u8f49\u5f71\u50cf",
          "voip.video.tooltip.videomirroringon":
            "\u958b\u555f\u6c34\u5e73\u7ffb\u8f49\u5f71\u50cf",
          "voip.videocall.button.beautyfeature": "\u7f8e\u808c",
          "voip.videocall.popup.start": "\u958b\u59cb",
          "voip.videocall.popup.turnon": "\u958b\u555f",
          "win10.notification.reply.guide":
            "\u7531\u6b64\u76f4\u63a5\u56de\u8986",
        };
      },
    }]);
