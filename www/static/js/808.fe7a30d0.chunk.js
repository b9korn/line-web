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
        e._sentryDebugIds[t] = "927ab802-296f-4c51-87b3-84f8db8a87c6",
        e._sentryDebugIdIdentifier =
          "sentry-dbid-927ab802-296f-4c51-87b3-84f8db8a87c6");
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
    []).push([[808], {
      12808: (e, t, o) => {
        o.r(t), o.d(t, { default: () => a });
        const a = {
          "abuse.report.sent.data.notice.chat_selected":
            "\u60a8\u6240\u4e3e\u62a5\u7684\u6d88\u606f\u4ee5\u53ca\u524d\u540e\u6536\u53d1\u7684\u6d88\u606f\uff08\u6700\u591a9\u6761\uff09\u3001\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\u3001\u5934\u50cf\u3001\u72b6\u6001\u6d88\u606f\uff09\u4ee5\u53ca\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\u548c\u5934\u50cf\uff09\u3002",
          "abuse.report.sent.data.notice.direct_chat":
            "\u6700\u8fd1\u6536\u53d1\u768410\u6761\u804a\u5929\u6d88\u606f\u3001\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\u3001\u5934\u50cf\u3001\u72b6\u6001\u6d88\u606f\uff09\u4ee5\u53ca\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\u548c\u5934\u50cf\uff09\u3002",
          "abuse.report.sent.data.notice.direct_invitation":
            "\u6700\u8fd1\u6536\u53d1\u768410\u6761\u804a\u5929\u6d88\u606f\u3001\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\u3001\u5934\u50cf\u3001\u72b6\u6001\u6d88\u606f\uff09\u4ee5\u53ca\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\u548c\u5934\u50cf\uff09\u3002",
          "abuse.report.sent.data.notice.friend_profile":
            "\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\u3001\u5934\u50cf\u3001\u72b6\u6001\u6d88\u606f\uff09\u4ee5\u53ca\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\u548c\u5934\u50cf\uff09\u3002",
          "abuse.report.sent.data.notice.group_chat":
            "\u6700\u8fd1\u6536\u53d1\u768410\u6761\u7fa4\u804a\u5929\u6d88\u606f\u3001\u7fa4\u7684\u8be6\u7ec6\u4fe1\u606f\uff08\u5305\u7fa4\u540d\u79f0\u3001\u7fa4\u5934\u50cf\u3001\u9080\u8bf7\u4eba\u7684\u4e2a\u4eba\u4fe1\u606f\uff09\u4ee5\u53ca\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\u548c\u5934\u50cf\uff09\u3002",
          "abuse.report.sent.data.notice.group_chat_selected":
            "\u60a8\u6240\u4e3e\u62a5\u7684\u6d88\u606f\u4ee5\u53ca\u524d\u540e\u6536\u53d1\u7684\u6d88\u606f\uff08\u6700\u591a9\u6761\uff09\u3001\u7fa4\u7684\u8be6\u7ec6\u4fe1\u606f\uff08\u5305\u7fa4\u540d\u79f0\u3001\u7fa4\u5934\u50cf\u3001\u9080\u8bf7\u4eba\u7684\u4e2a\u4eba\u4fe1\u606f\uff09\u4ee5\u53ca\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\u548c\u5934\u50cf\uff09\u3002",
          "abuse.report.sent.data.notice.group_invitation":
            "\u6700\u8fd1\u6536\u53d1\u768410\u6761\u7fa4\u804a\u5929\u6d88\u606f\u3001\u7fa4\u7684\u8be6\u7ec6\u4fe1\u606f\uff08\u5305\u7fa4\u540d\u79f0\u3001\u7fa4\u5934\u50cf\u3001\u9080\u8bf7\u4eba\u7684\u4e2a\u4eba\u4fe1\u606f\uff09\u4ee5\u53ca\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\u548c\u5934\u50cf\uff09\u3002",
          "abuse.report.sent.data.notice.note_comment":
            "\u60a8\u6240\u4e3e\u62a5\u7684\u8bc4\u8bba\u4ee5\u53ca\u6709\u8be5\u8bc4\u8bba\u7684\u8bb0\u4e8b\u672c\u3001\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\uff09\u4ee5\u53ca\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\uff09\u3002",
          "abuse.report.sent.data.notice.note_post":
            "\u60a8\u6240\u4e3e\u62a5\u7684\u8bb0\u4e8b\u672c\u4ee5\u53ca\u8be5\u8bb0\u4e8b\u672c\u7684\u8bc4\u8bba\u3001\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\uff09\u4ee5\u53ca\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\uff09\u3002",
          "abuse.report.sent.data.notice.room_chat":
            "\u6700\u8fd1\u6536\u53d1\u768410\u6761\u804a\u5929\u6d88\u606f\u3001\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\u548c\u5934\u50cf\uff09\u3001OpenChat\u8be6\u7ec6\u4fe1\u606f\uff08\u5305\u62ec\u9080\u8bf7\u4eba\u7684\u4e2a\u4eba\u4fe1\u606f\uff09\u3002",
          "abuse.report.sent.data.notice.room_chat_selected":
            "\u60a8\u6240\u4e3e\u62a5\u7684\u6d88\u606f\u4ee5\u53ca\u524d\u540e\u6536\u53d1\u7684\u6d88\u606f\uff08\u6700\u591a9\u6761\uff09\uff0c\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\u548c\u5934\u50cf\uff09\u4ee5\u53caOpenChat\u7684\u8be6\u7ec6\u4fe1\u606f\uff08\u5305\u62ec\u9080\u8bf7\u4eba\u7684\u4e2a\u4eba\u4fe1\u606f\uff09\u3002",
          "abuse.report.sent.data.notice.room_invitation":
            "\u6700\u8fd1\u6536\u53d1\u768410\u6761\u804a\u5929\u6d88\u606f\u3001\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u5305\u62ec\u540d\u5b57\u548c\u5934\u50cf\uff09\u3001OpenChat\u8be6\u7ec6\u4fe1\u606f\uff08\u5305\u62ec\u9080\u8bf7\u4eba\u7684\u4e2a\u4eba\u4fe1\u606f\uff09\u3002",
          "abuse.report.sent.data.notice.square.chat.selected":
            "\u4e3e\u62a5\u7684OpenChat\u76f8\u5173\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u540d\u79f0\u3001\u5c01\u9762\u56fe\u7247\u3001\u6210\u5458\u4eba\u6570\u3001OpenChat\u8bc6\u522b\u7b26\uff09\u3001\u6700\u8fd1\u53d1\u9001\u7684100\u6761\u804a\u5929\u6d88\u606f\u3001\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u4ee5\u53ca\u804a\u5929\u7ba1\u7406\u5458\u7684\u8be6\u7ec6\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u4e2d\u4f7f\u7528\u7684\u6635\u79f0\u3001\u7528\u6237\u8bc6\u522b\u7b26\uff09\u3002",
          "abuse.report.sent.data.notice.square.member.selected":
            "\u4e3e\u62a5\u7684OpenChat\u76f8\u5173\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u540d\u79f0\u3001\u5c01\u9762\u56fe\u7247\u3001\u6210\u5458\u4eba\u6570\u7b49\uff09\u3001\u6700\u8fd1\u53d1\u9001\u7684100\u6761\u804a\u5929\u6d88\u606f\u3001\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u4ee5\u53ca\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u8be6\u7ec6\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u4e3e\u62a5\u7528\u6237\u7684\u5934\u50cf\u3001\u804a\u5929\u4e2d\u4f7f\u7528\u7684\u6635\u79f0\u3001\u7528\u6237\u8bc6\u522b\u7b26\uff09\u3002",
          "abuse.report.sent.data.notice.square.message.selected":
            "\u4e3e\u62a5\u7684\u804a\u5929\u5ba4\u76f8\u5173\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u8bc6\u522b\u7b26\uff09\u3001\u4e3e\u62a5\u7684OpenChat\u76f8\u5173\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u540d\u79f0\u3001\u5c01\u9762\u56fe\u7247\u3001\u6210\u5458\u4eba\u6570\u3001OpenChat\u8bc6\u522b\u7b26\uff09\u3001\u4e3e\u62a5\u7684\u804a\u5929\u6d88\u606f\u4ee5\u53ca\u4e4b\u524d\u53d1\u9001\u768410\u6761\u6d88\u606f\u3001\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u4ee5\u53ca\u4e3e\u62a5\u7528\u6237\u7684\u8be6\u7ec6\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u4e3e\u62a5\u7528\u6237\u7684\u5934\u50cf\u3001\u804a\u5929\u4e2d\u4f7f\u7528\u7684\u6635\u79f0\u3001\u7528\u6237\u8bc6\u522b\u7b26\uff09\u3002",
          "abuse.report.sent.data.notice.square.note.selected":
            "\u4e3e\u62a5\u7684\u8bb0\u4e8b\u672c\u5185\u5bb9\uff08\u4f8b\u5982\uff1a\u6587\u5b57\u3001\u56fe\u7247\u3001\u89c6\u9891\u3001\u8868\u60c5\u8d34\u3001\u8bb0\u4e8b\u672c\u8bc6\u522b\u7b26\uff09\u3001OpenChat\u76f8\u5173\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u540d\u79f0\u3001\u5c01\u9762\u56fe\u7247\u3001\u6210\u5458\u4eba\u6570\u3001OpenChat\u8bc6\u522b\u7b26\uff09\u3001\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u4ee5\u53ca\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u4fe1\u606f\uff08\u5305\u62ec\u5934\u50cf\u3001\u53c2\u52a0\u72b6\u6001\u3001\u804a\u5929\u4e2d\u4f7f\u7528\u7684\u6635\u79f0\u3001\u7528\u6237\u8bc6\u522b\u7b26\uff09\u3002",
          "abuse.report.sent.data.notice.square.notecomment.selected":
            "\u4e3e\u62a5\u7684\u8bc4\u8bba\u8be6\u60c5\uff08\u4f8b\u5982\uff1a\u6587\u5b57\u3001\u56fe\u7247\u3001\u8868\u60c5\u8d34\u3001\u8bc4\u8bba\u8bc6\u522b\u7b26\uff09\u3001OpenChat\u76f8\u5173\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u540d\u79f0\u3001\u5c01\u9762\u56fe\u7247\u3001\u6210\u5458\u4eba\u6570\u3001OpenChat\u8bc6\u522b\u7b26\uff09\u3001\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u4ee5\u53ca\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u4fe1\u606f\uff08\u5305\u62ec\u5934\u50cf\u3001\u53c2\u52a0\u72b6\u6001\u3001\u804a\u5929\u4e2d\u4f7f\u7528\u7684\u6635\u79f0\u3001\u7528\u6237\u8bc6\u522b\u7b26\uff09\u3002",
          "abuse.report.sent.data.notice.square.setting.selected":
            "\u4e3e\u62a5\u7684\u804a\u5929\u5ba4\u76f8\u5173\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u540d\u79f0\u3001\u5c01\u9762\u56fe\u7247\u3001\u6210\u5458\u4eba\u6570\u3001\u804a\u5929\u8bc6\u522b\u7b26\uff09\u3001\u6700\u8fd1\u53d1\u9001\u768450\u6761\u804a\u5929\u6d88\u606f\u3001\u4e3e\u62a5\u7684OpenChat\u76f8\u5173\u4fe1\u606f\uff08\u4f8b\u5982\uff1aOpenChat\u8bc6\u522b\u7b26\uff09\u3001\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u4ee5\u53ca\u804a\u5929\u7ba1\u7406\u5458\u7684\u8be6\u7ec6\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u4e2d\u4f7f\u7528\u7684\u6635\u79f0\u3001\u7528\u6237\u8bc6\u522b\u7b26\uff09\u3002",
          "abuse.report.sent.data.notice.template":
            "\u4e3e\u62a5\u4e0d\u5f53\u5185\u5bb9\u65f6\uff0c\u4ee5\u4e0b\u4fe1\u606f\u5c06\u4f1a\u53d1\u9001\u81f3LY Corporation\u3002\u4e3a\u4e86\u9632\u6b62\u4e0d\u6b63\u5f53\u4f7f\u7528\u6211\u4eec\u7684\u670d\u52a1\uff0c\u6211\u4eec\u4f1a\u786e\u8ba4\u4e3e\u62a5\u5185\u5bb9\uff0c\u5e76\u59a5\u5584\u5730\u5b9e\u65bd\u7ba1\u7406\u63aa\u65bd\uff08\u5305\u62ec\u5f00\u53d1\u9632\u6b62\u4e0d\u6b63\u5f53\u4f7f\u7528LY Corporation\u670d\u52a1\u7684\u5de5\u5177\uff09\u3002\n\u4e3a\u6b64\uff0c\u6211\u4eec\u53ef\u80fd\u4f1a\u5728\u5fc5\u8981\u7684\u60c5\u51b5\u4e0b\u4e0e\u96c6\u56e2\u5185\u90e8\u4ee5\u53ca\u7b2c\u4e09\u65b9\u673a\u6784\u5206\u4eab\u6b64\u4fe1\u606f\u3002\n\n\u53d1\u9001\u7684\u4fe1\u606f\u5982\u4e0b\uff1a\n%1",
          "note.reportnote.desc.reportnotefromcomment":
            "\u6240\u4e3e\u62a5\u7684\u8bb0\u4e8b\u672c\u8bc4\u8bba\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u8bc4\u8bba\u8bc6\u522b\u7b26\u3001\u6587\u5b57\u3001\u56fe\u7247\u4ee5\u53ca\u8868\u60c5\u8d34\uff09\u3001\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u7528\u6237\u8bc6\u522b\u7b26\u548c\u540d\u5b57\uff09\u3001\u804a\u5929\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u8bc6\u522b\u7b26\uff09\u4ee5\u53ca\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u7528\u6237\u8bc6\u522b\u7b26\u548c\u540d\u5b57\uff09",
          "note.reportnote.desc.reportnotefrommenu":
            "\u6240\u4e3e\u62a5\u7684\u8bb0\u4e8b\u672c\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u8bb0\u4e8b\u672c\u8bc6\u522b\u7b26\u3001\u6587\u5b57\u3001\u56fe\u7247\u3001\u8868\u60c5\u8d34\u4ee5\u53ca\u89c6\u9891\uff09\u3001\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u7528\u6237\u8bc6\u522b\u7b26\u548c\u540d\u5b57\uff09\u3001\u804a\u5929\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u8bc6\u522b\u7b26\uff09\u4ee5\u53ca\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u7528\u6237\u8bc6\u522b\u7b26\u548c\u540d\u5b57\uff09",
          "openchat.abusereport.desc.threadmessage":
            "\u6240\u4e3e\u62a5\u7684\u5bf9\u8bdd\u6d88\u606f\u53ca\u4e4b\u524d\u768410\u6761\u6d88\u606f\u3001\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u6635\u79f0\u548c\u5934\u50cf\uff09\u3001OpenChat\u4fe1\u606f\uff08\u4f8b\u5982\uff1aOpenChat\u8bc6\u522b\u7b26\u3001OpenChat\u540d\u79f0\u3001\u5c01\u9762\u7167\u7247\u4ee5\u53ca\u6210\u5458\u4eba\u6570\uff09\u3001\u804a\u5929\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u8bc6\u522b\u7b26\uff09\u3001\u5bf9\u8bdd\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u5bf9\u8bdd\u8bc6\u522b\u7b26\uff09\u4ee5\u53ca\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u7528\u6237\u8bc6\u522b\u7b26\u548c\u60a8\u7684\u6635\u79f0\uff09",
          "openchat.abusereport.desc.threaduser":
            "\u6240\u4e3e\u62a5\u7528\u6237\u5728\u5bf9\u8bdd\u4e2d\u53d1\u9001\u7684\u6700\u540e50\u6761\u6d88\u606f\u3001\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u7528\u6237\u8bc6\u522b\u7b26\u3001\u6635\u79f0\u4ee5\u53ca\u5934\u50cf\uff09\u3001OpenChat\u4fe1\u606f\uff08\u4f8b\u5982\uff1aOpenChat\u540d\u79f0\u3001\u5c01\u9762\u7167\u7247\u4ee5\u53ca\u6210\u5458\u4eba\u6570\uff09\u3001\u804a\u5929\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u8bc6\u522b\u7b26\uff09\u3001\u5bf9\u8bdd\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u5bf9\u8bdd\u8bc6\u522b\u7b26\u548c\u5bf9\u8bdd\u4e2d\u53d1\u9001\u7684\u6700\u540e100\u6761\u6d88\u606f\uff09\u4ee5\u53ca\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u7528\u6237\u8bc6\u522b\u7b26\u548c\u60a8\u7684\u6635\u79f0\uff09",
          AUTHORIZE_MSG_CLOSING_ALERT: "",
          "Common.warning.low.hard.disk.space":
            "\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u3002\n\u8bf7\u6e05\u7406\u51fa30MB\u4ee5\u4e0a\n\u7684\u7a7a\u95f4\u540e\u91cd\u8bd5\u3002",
          ImageViewerLabelNoImage:
            "\u6b64\u804a\u5929\u4e2d\u672a\u5206\u4eab\u7167\u7247\u3002",
          "Keep.info.from.keepmemo": "Keep\u5907\u5fd8\u5f55",
          LoginErrorNaverLoginForbbide:
            "\u8bf7\u8f93\u5165\u6709\u6548\u7684\u90ae\u7bb1\u5730\u5740\u3002",
          Poll_Message_btn: "\u67e5\u770b\u8be6\u60c5",
          Poll_Title: "\u6295\u7968",
          "Setting.Alert.Remove.History":
            "\u804a\u5929\u8bb0\u5f55\u4e00\u65e6\u88ab\u5220\u9664\u5c06\u65e0\u6cd5\u6062\u590d\u3002\n\u8981\u5220\u9664\u5168\u90e8\u804a\u5929\u8bb0\u5f55\u5417\uff1f ",
          "Setting.Basic.ScaleRatio.Apply.Alert":
            "\u8bf7\u91cd\u65b0\u542f\u52a8 LINE \u4ee5\u66f4\u6539\u5bbd\u9ad8\u6bd4\u3002\n\u60a8\u662f\u5426\u8981\u7acb\u5373\u91cd\u65b0\u542f\u52a8\uff1f",
          "Setting.label.alarm.sound.1": "\u9ed8\u8ba4\u97f3",
          "Setting.label.alarm.sound.2": "\u5f00\u5fc3LINE\u266a",
          "Setting.label.alarm.sound.3": "LINE\u6084\u6084\u8a71",
          "Setting.label.alarm.sound.4": "\u9ed8\u8ba4\u94c3\u58f0",
          "Setting.label.alarm.sound.5": "\u8c03\u76ae\u5c0f\u866b",
          "Setting.label.alarm.sound.6": "\u6162\u8fde\u97f3",
          "Setting.label.alarm.sound.7": "\u53e3\u54e8",
          "Setting.label.alarm.sound.8": "\u62a2\u7b54\u97f3",
          "Setting.label.alarm.sound.9": "\u6c34\u6676",
          "access.chat.search.calendar": "\u65e5\u5386",
          "access.openchat.chatmenu.button.addyourthreads":
            "\u6dfb\u52a0\u5230\u5bf9\u8bdd\u6536\u85cf\u5939",
          "access.openchat.chatmenu.button.removeyourthreads":
            "\u4ece\u5bf9\u8bdd\u6536\u85cf\u5939\u79fb\u9664",
          "access.openchat.chatmenu.button.yourthreads":
            "\u5bf9\u8bdd\u6536\u85cf\u5939",
          "access.square.chat.button.more":
            "\u6253\u5f00\u5e7f\u544a\u9009\u9879\u83dc\u5355",
          "ad.alert.popup.cantplayduringcall":
            "\u901a\u8bdd\u4e2d\u65e0\u6cd5\u64ad\u653e\u3002",
          "ad.desc.playinginviewer":
            "\u6b63\u5728\u67e5\u770b\u5668\u4e2d\u64ad\u653e",
          "ad.menu.admute.hideContent": "\u9690\u85cf\u6b64\u5185\u5bb9",
          "ad.menu.admute.hideadvertiser":
            "\u9690\u85cf\u6765\u81ea\u8be5\u5e7f\u544a\u5546\u7684\u6240\u6709\u5e7f\u544a",
          "ad.menu.admute.hidethisad": "\u9690\u85cf\u6b64\u5e7f\u544a",
          "ad.menu.videoEnlarge": "\u653e\u5927\u663e\u793a",
          "addFriends.error.crossregion":
            "\u5982\u8981\u6dfb\u52a0\u6b64\u7528\u6237\u4e3a\u597d\u53cb\uff0c\u8bf7\u626b\u63cf\u8be5\u7528\u6237\u7684\u4e8c\u7ef4\u7801\u3002",
          "addfriends.label.norecommendation.description":
            "\u76ee\u524d\u6ca1\u6709\u60a8\u53ef\u80fd\u8ba4\u8bc6\u7684\u4eba\u3002",
          "addfriends.menu.chatandgroup": "\u5efa\u7acb\u7fa4",
          "addfriends.search.captcha.fail":
            "\u60a8\u8f93\u5165\u7684\u5185\u5bb9\u4e0e\u56fe\u7247\u6240\u793a\u4e0d\u7b26\uff0c\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002\n",
          "album.add.photo.drag":
            "\u5c06\u7167\u7247\u62d6\u62fd\u81f3\u6b64\u533a\u57df\u3002",
          "album.addphotos.desc.limitexceeded":
            "\u6bcf\u4e2a\u76f8\u518c\u6700\u591a\u53ef\u4e0a\u4f201000\u4e2a\u9879\u76ee\u3002",
          "album.addpopup.desc.e2eeabletoretry":
            "\u65e0\u6cd5\u6dfb\u52a0\u9879\u76ee\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "album.addpopup.desc.retry":
            "\u65e0\u6cd5\u6dfb\u52a0\u90e8\u5206\u9879\u76ee\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "album.addpopup.desc.unabletoretry":
            "\u65e0\u6cd5\u6dfb\u52a0\u90e8\u5206\u9879\u76ee\uff0c\u76f8\u518c\u4e0d\u652f\u6301\u6b64\u7c7b\u9879\u76ee\u3002",
          "album.createalbum.tooltip.originalresolution.jp":
            "\u9009\u62e9\u6b64\u9009\u9879\u6dfb\u52a0\u7167\u7247\u539f\u56fe\u3002",
          "album.deletepopup.desc.deletealbum":
            "\u6b64\u64cd\u4f5c\u5c06\u6c38\u4e45\u5220\u9664\u76f8\u518c\u4e2d\u7684\u6240\u6709\u9879\u76ee\u3002\u8981\u5220\u9664\u5417\uff1f",
          "album.label.download": "\u4e0b\u8f7d",
          "album.main.desc.albumvideos.other": "%n\u6bb5\u89c6\u9891",
          "album.main.toast.encodingerror":
            "\u7f16\u7801\u9519\u8bef\uff0c\u6b64\u89c6\u9891\u65e0\u6cd5\u64ad\u653e\u3002",
          "album.main.toast.encodinginprogress":
            "\u7f16\u7801\u8fdb\u884c\u4e2d\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "album.main.tooltip.paidplan":
            "\u53ea\u6709\u4ed8\u8d39\u5957\u9910\u7528\u6237\u624d\u80fd\u6dfb\u52a0\u89c6\u9891\u3002\u5982\u679c\u53d6\u6d88\u4ed8\u8d39\u5957\u9910\uff0c\u89c6\u9891\u5c06\u88ab\u5220\u9664\u3002",
          "album.mainpopup.button.no": "\u5426",
          "album.mainpopup.button.yes": "\u662f",
          "album.mainpopup.desc.deletedvideo":
            "\u6b64\u89c6\u9891\u5df2\u88ab\u5220\u9664\u3002",
          "album.mainpopup.desc.stopadding":
            "\u8981\u53d6\u6d88\u6dfb\u52a0\u9879\u76ee\u5417\uff1f",
          "album.msg.cancel.upload":
            "\u662f\u5426\u53d6\u6d88\u6dfb\u52a0\u7167\u7247\uff1f",
          "album.picker.toast.20videomax.jp":
            "\u6bcf\u6b21\u6700\u591a\u53ef\u6dfb\u52a020\u6761\u89c6\u9891\u3002",
          "album.picker.toast.5minutesvideomax.jp":
            "\u4ec5\u53ef\u6dfb\u52a0\u65f6\u957f5\u5206\u949f\u4ee5\u5185\u7684\u89c6\u9891\u3002",
          "album.picker.toast.max300":
            "\u6bcf\u6b21\u6700\u591a\u53ef\u6dfb\u52a0300\u4e2a\u9879\u76ee\u3002",
          "album.picker.toast.originalresolution.jp":
            "\u6240\u9009\u7167\u7247\u5c06\u4ee5\u539f\u56fe\u6dfb\u52a0\u3002",
          "album.picker.toast.over20mb.jp":
            "\u89c6\u9891\u3001\u5927\u5bb9\u91cf\u7167\u7247\u6216\u683c\u5f0f\u4e0d\u53d7\u652f\u6301\u7684\u7167\u7247\uff0c\u4ee5\u53ca\u5728LINE\u4e0a\u7f16\u8f91\u8fc7\u7684\u7167\u7247\u5c06\u4ee5\u6807\u51c6\u753b\u8d28\u6dfb\u52a0\u3002",
          "album.picker.toast.somestandard.jp":
            "\u6240\u9009\u7167\u7247\u5c06\u4ee5\u539f\u56fe\u6dfb\u52a0\u3002\u89c6\u9891\u3001\u5927\u5bb9\u91cf\u7167\u7247\u6216\u683c\u5f0f\u4e0d\u53d7\u652f\u6301\u7684\u7167\u7247\uff0c\u4ee5\u53ca\u5728LINE\u4e0a\u7f16\u8f91\u8fc7\u7684\u7167\u7247\u5c06\u4ee5\u6807\u51c6\u753b\u8d28\u6dfb\u52a0\u3002",
          "album.picker.toast.videomax.jp.other":
            "\u6b64\u76f8\u518c\u6700\u591a\u53ef\u518d\u4e0a\u4f20%n\u4e2a\u89c6\u9891\u3002",
          "album.share.toast.addvideomax.jp":
            "\u6bcf\u4e2a\u76f8\u518c\u6700\u591a\u53ef\u4e0a\u4f20100\u6761\u89c6\u9891\u3002",
          "album.updatepopup.button.dontshow": "\u4e0d\u518d\u663e\u793a",
          "album.updatepopup.button.later": "\u7a0d\u540e\u66f4\u65b0",
          "album.updatepopup.button.updatenow": "\u7acb\u5373\u66f4\u65b0",
          "album.updatepopup.desc.notavailable":
            "\u60a8\u4f7f\u7528\u7684LINE\u7248\u672c\u8fc7\u4f4e\uff0c\u76f8\u518c\u4e2d\u7684\u90e8\u5206\u5185\u5bb9\u53ef\u80fd\u65e0\u6cd5\u663e\u793a\u3002\u8bf7\u5c06LINE\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u3002",
          "album.viewer.button.additems": "\u6dfb\u52a0\u9879\u76ee",
          "alert.album.blocked.user":
            "\u65e0\u6cd5\u4e0e\u5df2\u5c4f\u853d\u7684\u7528\u6237\u5171\u7528\u76f8\u518c\u3002",
          "alert.note.blocked.user":
            "\u65e0\u6cd5\u4e0e\u5df2\u5c4f\u853d\u7684\u7528\u6237\u5171\u7528\u8bb0\u4e8b\u672c\u3002",
          "announce.donotshowagain": "\u4e0d\u518d\u663e\u793a",
          "announce.donotshowagain.mouseover": "\u4e0d\u518d\u663e\u793a",
          "announce.error":
            "\u627e\u4e0d\u5230\u6b64\u901a\u77e5\u7684\u76f8\u5173\u4fe1\u606f\u3002",
          "announce.minimize": "\u6700\u5c0f\u5316",
          "announce.unannounce": "\u53d6\u6d88\u901a\u77e5",
          "announcement.message.album": "\u76f8\u518c\uff1a%1",
          "announcement.message.annoucement": "\u901a\u77e5",
          "announcement.message.error.description":
            "\u627e\u4e0d\u5230\u6b64\u901a\u77e5\u7684\u76f8\u5173\u4fe1\u606f\u3002",
          "announcement.message.note.no.text":
            "\u5728%1\u5206\u4eab\u7684\u8bb0\u4e8b\u672c",
          "announcement.message.note.text": "\u8bb0\u4e8b\u672c\uff1a %1",
          "announcement.system.message":
            "<![CDATA[%1\u53d1\u5e03\u4e86<u>\u901a\u544a</u>\u3002]]>",
          "app.title": "LINE\u5347\u7ea7",
          "att.prepopup.description":
            "\u6b64\u64cd\u4f5c\u5c06\u5141\u8bb8\u7cfb\u7edf\u53ef\u4ee5\u6839\u636e\u60a8\u7684\u559c\u597d\u800c\u5b9a\u5236LINE\u663e\u793a\u7684\u5185\u5bb9\u4e0e\u5e7f\u544a\u3002",
          "authorize.content.desc1":
            "\u4f5c\u4e3a\u4e00\u9879\u5b89\u5168\u63aa\u65bd\uff0c\u5f53\u60a8\u5728 PC\n\u4e0a\u9996\u6b21\u767b\u5f55\u65f6\uff0c\u60a8\u5fc5\u987b\u9a8c\u8bc1\u60a8\u7684\u5e10\u6237\u3002\n",
          "authorize.content.desc2":
            "\u5728\u667a\u80fd\u624b\u673a\u4e0a\u8f93\u5165\u4ee5\u4e0b\u4ee3\u7801\u3002\n",
          "authorize.e2ee.about.letterSealing":
            "\u4ec0\u4e48\u662f Letter Sealing\uff1f",
          "authorize.e2ee.app.update":
            "LINE\u73b0\u5df2\u63d0\u9ad8\u4e86\u5b89\u5168\u6027\u3002\n\u8bf7\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u7684LINE\u3002",
          "authorize.e2ee.desc1":
            "\u60a8\u9700\u8981\u9a8c\u8bc1\u60a8\u7684\u5e10\u6237\n\u624d\u80fd\u4f7f\u7528Letter Sealing\u529f\u80fd\u3002",
          "authorize.e2ee.desc2":
            "\u5728\u667a\u80fd\u624b\u673a\u4e0a\u8f93\u5165\u4ee5\u4e0b\u4ee3\u7801\u3002\n",
          "authorize.e2ee.primary.cancel":
            "\u9a8c\u8bc1\u64cd\u4f5c\u5df2\u5728\u60a8\u7684\u79fb\u52a8\u8bbe\u5907\u4e0a\u88ab\u53d6\u6d88\u3002 \u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "authorize.msg.closing.alert":
            "\u5173\u95ed\u6b64\u7a97\u53e3\u5c06\u65e0\u6cd5\u767b\u5f55\u3002\u8981\u7ee7\u7eed\u5417\uff1f",
          "authorize.msg.timeout.alert":
            "\u767b\u5f55\u8d85\u65f6\u3002\n\u8bf7\u91cd\u8bd5\u3002",
          "authorize.msg.useage.alert":
            "\u8bf7\u901a\u8fc7\u667a\u80fd\u624b\u673a\u70b9\u51fbLINE\u7684\u201c\u8bbe\u7f6e\u201d>\u201c\u5e10\u53f7\u201d\uff0c\u5f00\u542f\u201c\u5141\u8bb8\u767b\u5f55\u5176\u4ed6\u670d\u52a1\u201d\u540e\u5373\u53ef\u767b\u5f55\u3002",
          "authorize.remained.time": "\u5269\u4f59\u65f6\u95f4",
          "authorize.window.title": "PC \u9a8c\u8bc1",
          "autoSuggest.add.language": "\u6dfb\u52a0\u8bed\u8a00",
          "autoSuggest.enable": "\u542f\u7528\u81ea\u52a8\u5efa\u8bae",
          "autoSuggest.enabled.language": "\u8bed\u8a00",
          "autoSuggest.msg.desc":
            "\u8f93\u5165\u65f6\u81ea\u52a8\u5efa\u8bae\u8d34\u56fe\u6216\u8868\u60c5\u7b26\u53f7\u3002",
          "autoSuggest.msg.desc.downloadFailed":
            "\u4e0b\u8f7d\u5931\u8d25\u3002\n\u8bf7\u91cd\u65b0\u4e0b\u8f7d\u3002",
          "autoSuggest.msg.download.all.emoji":
            "\u4e0b\u8f7d\u6240\u6709\u8868\u60c5\uff1f",
          "autoSuggest.msg.download.all.sticker":
            "\u82e5\u8981\u9884\u89c8\u8d34\u56fe\uff0c\u8bf7\u5148\u4e0b\u8f7d\u3002\n\u4e0b\u8f7d\u60a8\u7684\u6240\u6709\u8d34\u56fe\u5417\uff1f\n",
          "autoSuggest.title": "\u81ea\u52a8\u5efa\u8bae\u8d34\u56fe",
          "buddy.alert.common.failed.add.contact":
            "\u65e0\u6cd5\u6dfb\u52a0\u597d\u53cb\u3002",
          "buddy.alert.not.allowed.add.contact":
            "\u975e\u5e38\u62b1\u6b49\uff0c\u60a8\u6b63\u5728\u5c1d\u8bd5\u6dfb\u52a0\u7684\u8d26\u53f7\u65e0\u6cd5\u6dfb\u52a0\u65b0\u597d\u53cb\uff0c\u56e0\u4e3a\u8be5\u8d26\u53f7\u597d\u53cb\u4eba\u6570\u53d7\u9650\u3002",
          "buddy.btn.addBuddy": "\u6dfb\u52a0\u597d\u53cb",
          "buddy.btn.blockBuddy": "\u5c4f\u853d",
          "buddy.btn.chat": "\u804a\u5929",
          "buddy.btn.home": "\u4e3b\u9875",
          "buddy.btn.setting.profile": "\u4e2a\u4eba\u8d44\u6599\u8bbe\u7f6e",
          "buddy.btn.unblockBuddy": "\u89e3\u9664\u5c4f\u853d",
          "buddy.btn.voip": "\u8bed\u97f3\u901a\u8bdd",
          "buddy.label.edit.title": "\u4fee\u6539\u5907\u6ce8\u540d",
          "buddy.label.info.title": "\u4e2a\u4eba\u8d44\u6599",
          "buddylist.chooseFriend.empty.btn": "\u804a\u5929",
          "buddylist.chooseFriend.empty.desc":
            "\u5f00\u59cb\u65b0\u7684\u5bf9\u8bdd\uff01",
          "buddylist.chooseGroup.emty.desc":
            "%1\u4e2d\u6ca1\u6709\u4efb\u4f55\u804a\u5929\u8bb0\u5f55\u3002\n\u5feb\u5f00\u59cb\u5bf9\u8bdd\u5427\uff01\n",
          "buddylist.chooseMe.empty.desc":
            "\u5f00\u59cb\u65b0\u7684\u5bf9\u8bdd\uff01",
          "buddylist.plusMenu.chat": "\u804a\u5929",
          "budy.label.unregisterUser": "\u975e\u597d\u53cb\u7528\u6237\u3002 ",
          "call.callsettingspreview.desc.nocamera":
            "\u5f00\u59cb\u901a\u8bdd\u524d\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u901a\u8bdd\u8bbe\u7f6e\u3002\u7531\u4e8e\u7cfb\u7edf\u672a\u80fd\u68c0\u6d4b\u5230\u6444\u50cf\u5934\uff0c\u5176\u4ed6\u7528\u6237\u5c06\u65e0\u6cd5\u770b\u5230\u60a8\u7684\u5f71\u50cf\u3002",
          "call.callsettingspreview.desc.nocameradetected":
            "\u672a\u68c0\u6d4b\u5230\u76f8\u673a\u3002",
          "call.callsettingspreview.desc.nomic":
            "\u5f00\u59cb\u901a\u8bdd\u524d\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u901a\u8bdd\u8bbe\u7f6e\u3002\u7531\u4e8e\u7cfb\u7edf\u672a\u80fd\u68c0\u6d4b\u5230\u9ea6\u514b\u98ce\uff0c\u5176\u4ed6\u7528\u6237\u5c06\u65e0\u6cd5\u542c\u5230\u60a8\u7684\u58f0\u97f3\u3002",
          "call.callsettingspreview.desc.nomicdetected":
            "\u672a\u68c0\u6d4b\u5230\u9ea6\u514b\u98ce\u3002",
          "call.callsettingspreview.desc.nomicorcamera":
            "\u5f00\u59cb\u901a\u8bdd\u524d\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u901a\u8bdd\u8bbe\u7f6e\u3002\u7531\u4e8e\u7cfb\u7edf\u672a\u80fd\u68c0\u6d4b\u5230\u9ea6\u514b\u98ce\u548c\u6444\u50cf\u5934\uff0c\u5176\u4ed6\u7528\u6237\u5c06\u65e0\u6cd5\u542c\u5230\u60a8\u7684\u58f0\u97f3\u53ca\u770b\u5230\u60a8\u7684\u5f71\u50cf\u3002",
          "call.callsettingspreview.desc.nomicorcameradetected":
            "\u672a\u68c0\u6d4b\u5230\u76f8\u673a\u548c\u9ea6\u514b\u98ce\u3002",
          "call.cameraoff.friend":
            "\u60a8\u597d\u53cb\u7684\u6444\u50cf\u5934\u5df2\u5173\u95ed\u3002",
          "call.cameraoff.me":
            "\u60a8\u7684\u6444\u50cf\u5934\u5df2\u5173\u95ed\u3002",
          "call.chat.confirm.popup.start":
            "\u8981\u5f00\u59cb\u901a\u8bdd\u5417\uff1f",
          "call.chat.confirm.popup.start.btn.video":
            "\u5f00\u59cb\u89c6\u9891\u901a\u8bdd",
          "call.chat.confirm.popup.start.btn.voice":
            "\u5f00\u59cb\u8bed\u97f3\u901a\u8bdd",
          "call.chatscreen.popup.alreadyinacall":
            "\u60a8\u6b63\u5728\u8fdb\u884c\u901a\u8bdd\u3002",
          "call.doodling.popup.viewerupdaterequired":
            "\u5bf9\u65b9\u5fc5\u987b\u5148\u5c06LINE\u5e94\u7528\u5347\u7ea7\u81f3\u6700\u65b0\u7248\u672c\uff0c\u624d\u80fd\u4e0e\u60a8\u5171\u540c\u4f7f\u7528\u6b64\u529f\u80fd\u3002",
          "call.doodling.toast.doodlepaused":
            "\u5171\u4eab\u5c4f\u5e55\u6682\u505c\u671f\u95f4\u65e0\u6cd5\u4f7f\u7528\u6d82\u9e26\u529f\u80fd\u3002",
          "call.doodling.toast.noiosdoodle":
            "\u5728iOS\u8bbe\u5907\u4e2d\u5171\u4eab\u5c4f\u5e55\u65f6\u65e0\u6cd5\u4f7f\u7528\u6d82\u9e26\u529f\u80fd\u3002",
          "call.doodling.toast.sharepaused":
            "\u5171\u4eab\u5c4f\u5e55\u6682\u505c\u4e2d\u3002",
          "call.doodling.toast.sharerupdaterequired":
            "\u5171\u4eab\u5c4f\u5e55\u7684\u6210\u5458\u5fc5\u987b\u5148\u5c06LINE\u5e94\u7528\u5347\u7ea7\u81f3\u6700\u65b0\u7248\u672c\uff0c\u624d\u80fd\u4f7f\u7528\u6b64\u529f\u80fd\u3002",
          "call.effects.menu.stickers": "\u8d34\u56fe",
          "call.effects.popup.graphiccardproblem":
            "\u60a8\u7684\u663e\u5361\u672a\u80fd\u6ee1\u8db3LINE\u89c6\u9891\u901a\u8bdd\u529f\u80fd\u7684\u6700\u4f4e\u8981\u6c42\u3002\u56e0\u6b64\u53ef\u80fd\u5728\u901a\u8bdd\u8fc7\u7a0b\u4e2d\u4f1a\u9047\u5230\u95ee\u9898\u3002\n\u786e\u5b9a\u8981\u7ee7\u7eed\u5417\uff1f",
          "call.effects.popup.removebgeffect":
            "\u5220\u9664\u5f53\u524d\u80cc\u666f\u7279\u6548\u540e\uff0c\u89c6\u9891\u753b\u9762\u5c06\u663e\u793a\u60a8\u7684\u5b9e\u9645\u80cc\u666f\u3002\u8981\u7ee7\u7eed\u5220\u9664\u5417\uff1f",
          "call.effects.toast.stickersonetime":
            "\u901a\u8bdd\u65f6\u53ef\u80fd\u4e0d\u652f\u6301\u4f7f\u7528\u90e8\u5206\u8d34\u56fe\u3002",
          "call.error.popupdesc.featureunavailableondevice":
            "\u901a\u8bdd\u4e2d\u7684\u7528\u6237\u4f7f\u7528\u4e86\u5f53\u524d\u8bbe\u5907\u4e0d\u652f\u6301\u7684\u529f\u80fd\u3002\u8bf7\u901a\u8fc7\u667a\u80fd\u624b\u673a\u7248LINE\u52a0\u5165\u901a\u8bdd\u4ee5\u4f7f\u7528\u6b64\u529f\u80fd\u3002",
          "call.error.popupdesc.groupcallunavailable":
            "\u7fa4\u7ec4\u901a\u8bdd\u529f\u80fd\u6682\u4e0d\u53ef\u7528\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u4fee\u590d\u4e2d\u3002",
          "call.error.popupdesc.livetalkunavailable":
            "\u5b9e\u65f6\u804a\u5929\u529f\u80fd\u6682\u4e0d\u53ef\u7528\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u4fee\u590d\u4e2d\u3002",
          "call.error.popupdesc.oacallunavailable":
            "\u901a\u8bdd\u529f\u80fd\u6682\u4e0d\u53ef\u7528\u3002\u6211\u4eec\u6b63\u5728\u52aa\u529b\u4fee\u590d\u4e2d\u3002",
          "call.error.popupdesc.outdatedapp":
            "\u901a\u8bdd\u4e2d\u7684\u7528\u6237\u4f7f\u7528\u4e86\u60a8\u76ee\u524d\u7684LINE\u7248\u672c\u4e0d\u652f\u6301\u7684\u529f\u80fd\u3002\u8bf7\u5c06LINE\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u4ee5\u4f7f\u7528\u6b64\u529f\u80fd\u3002",
          "call.error.popupdesc.videocallunavailable":
            "\u89c6\u9891\u901a\u8bdd\u529f\u80fd\u6682\u4e0d\u53ef\u7528\u3002\u8bf7\u4f7f\u7528\u8bed\u97f3\u901a\u8bdd\u3002",
          "call.error.tooltip.audionosrc":
            "\u8bf7\u68c0\u67e5\u60a8\u7684\u9ea6\u514b\u98ce\u662f\u5426\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u3002",
          "call.error.unsupporteddevice":
            "\u60a8\u4f7f\u7528\u7684\u8bbe\u5907\u4e0d\u652f\u6301LINE\u901a\u8bdd\u529f\u80fd\u3002",
          "call.groupcall.leavebutton": "\u9000\u51fa\u901a\u8bdd",
          "call.participants.desc.noresults":
            "\u672a\u627e\u5230\u76f8\u5173\u641c\u7d22\u7ed3\u679c\u3002",
          "call.screen.toast.updaterequired":
            "\u60a8\u7684\u597d\u53cb\u6b63\u5728\u4f7f\u7528\u65e7\u7248\u672c\u7684LINE\uff0c\u56e0\u6b64\u65e0\u6cd5\u67e5\u770b\u8d34\u56fe\u3002",
          "call.screenshare.taskbar.screenshare":
            "\u9009\u62e9\u8981\u5171\u4eab\u7684\u5c4f\u5e55",
          "call.screenshare.taskbar.ytsearch":
            "\u641c\u7d22YouTube\u89c6\u9891",
          "call.screenshare.toast.shareerror":
            "%1\u6b63\u5728\u4f7f\u7528\u5171\u4eab\u5c4f\u5e55\u529f\u80fd\u3002",
          "call.screenshare.toast.unsupportedos":
            "\u5c06\u64cd\u4f5c\u7cfb\u7edf\u5347\u7ea7\u81f3Windows 10\u6216\u4f7f\u7528\u667a\u80fd\u624b\u673a\u7248LINE\u4ee5\u67e5\u770b\u5171\u4eab\u5c4f\u5e55\u3002",
          "call.screenshare.youtube.popup.startvideo":
            "\u8981\u5f00\u59cb\u548c\u6210\u5458\u5171\u4eab\u5c4f\u5e55\u5417\uff1f",
          "call.sharedcontent.desc.newdatatype":
            "\u60a8\u5f53\u524d\u4f7f\u7528\u7684LINE\u7248\u672c\u4e0d\u652f\u6301\u663e\u793a%1\u6b63\u5728\u5171\u4eab\u7684\u5185\u5bb9\uff0c\u8bf7\u5c06LINE\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u3002",
          "call.toast.cpuheavyload":
            "\u60a8\u7684\u7535\u8111\u8d1f\u8f7d\u8fc7\u9ad8\uff0c\u56e0\u6b64\u901a\u8bdd\u8d28\u91cf\u53ef\u80fd\u4f1a\u53d7\u5230\u5f71\u54cd\u3002\u8bf7\u5c1d\u8bd5\u5173\u95ed\u5176\u4ed6\u5e94\u7528\u3002",
          "call.toast.handsfreebt.mic":
            "\u5df2\u5207\u6362\u5230\u201c%1\u201d\u9ea6\u514b\u98ce\u3002\u8bf7\u5c06\u60a8\u7684\u626c\u58f0\u5668\u8bbe\u7f6e\u4e3a\u540c\u4e00\u8bbe\u5907\u3002",
          "call.toast.handsfreebt.speaker":
            "\u5df2\u5207\u6362\u5230\u201c%1\u201d\u626c\u58f0\u5668\u3002\u8bf7\u5c06\u60a8\u7684\u9ea6\u514b\u98ce\u8bbe\u7f6e\u4e3a\u540c\u4e00\u8bbe\u5907\u3002",
          "call.video.filter.clear": "Clear",
          "call.video.filter.original": "Original",
          "call.viewmode.desc.focusview": "\u7126\u70b9\u663e\u793a",
          "call.viewmode.desc.focusviewcenter":
            "\u7126\u70b9\u663e\u793a\uff08\u5c45\u4e2d\uff09",
          "call.viewmode.desc.focusviewleft":
            "\u7126\u70b9\u663e\u793a\uff08\u5de6\uff09",
          "call.viewmode.desc.focusviewright":
            "\u7126\u70b9\u663e\u793a\uff08\u53f3\uff09",
          "call.viewmode.desc.gridview": "\u5e73\u94fa\u663e\u793a",
          "call.viewmode.desc.separateview": "\u62c6\u5206\u7f29\u7565\u56fe",
          "call.watchtogethermenu.desc.100kviewsth": "%1",
          "call.watchtogethermenu.desc.100kwatchingth": "%1",
          "call.watchtogethermenu.desc.10kviewsth": "%1",
          "call.watchtogethermenu.desc.10kwatchingth": "%1",
          "call.watchtogethermenu.desc.1bpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1bviews": "%1",
          "call.watchtogethermenu.desc.1eokpeoplewatching":
            "%1\u4ebf\u4eba\u89c2\u770b\u4e2d",
          "call.watchtogethermenu.desc.1eokviews": "\u89c2\u770b%1\u4ebf\u6b21",
          "call.watchtogethermenu.desc.1kpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1kviews": "%1",
          "call.watchtogethermenu.desc.1kviewsth": "%1",
          "call.watchtogethermenu.desc.1kwatchingth": "%1",
          "call.watchtogethermenu.desc.1manpeoplewatching":
            "%1\u4e07\u4eba\u89c2\u770b\u4e2d",
          "call.watchtogethermenu.desc.1manviews": "\u89c2\u770b%1\u4e07\u6b21",
          "call.watchtogethermenu.desc.1mpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1mviews": "%1",
          "call.watchtogethermenu.desc.1mviewsth": "%1",
          "call.watchtogethermenu.desc.1mwatchingth": "%1",
          "call.watchtogethermenu.desc.daysago.other": "%n\u5929\u524d",
          "call.watchtogethermenu.desc.hoursago.other": "%n\u5c0f\u65f6\u524d",
          "call.watchtogethermenu.desc.justnow": "\u521a\u521a",
          "call.watchtogethermenu.desc.lessthan1kviewsth": "%1",
          "call.watchtogethermenu.desc.lessthan1kwatchingth": "%1",
          "call.watchtogethermenu.desc.minutesago.other":
            "%n\u5206\u949f\u524d",
          "call.watchtogethermenu.desc.monthsago.other": "%n\u4e2a\u6708\u524d",
          "call.watchtogethermenu.desc.peoplewatchingen": "%1",
          "call.watchtogethermenu.desc.userswatchinglivevideo":
            "%1\u4eba\u89c2\u770b\u4e2d",
          "call.watchtogethermenu.desc.userswatchingvideo":
            "\u89c2\u770b%1\u6b21",
          "call.watchtogethermenu.desc.userswatchingvideoen.other": "%n",
          "call.watchtogethermenu.desc.yearsago.other": "%n\u5e74\u524d",
          "call.youtube.desc.headphones":
            "\u8bf7\u4f7f\u7528\u8033\u673a\u4ee5\u907f\u514d\u4ea7\u751f\u56de\u58f0\u3002",
          "call.youtube.desc.noresults":
            "\u672a\u627e\u5230\u76f8\u5173\u641c\u7d22\u7ed3\u679c\u3002",
          "call.youtube.paste.descforonetoone":
            "\u641c\u7d22\u60f3\u8981\u4e0e\u597d\u53cb\u5171\u540c\u89c2\u770b\u7684\u89c6\u9891\u3002\uff08\u63a8\u8350\u4f7f\u7528\u8033\u673a\uff09",
          "call.youtube.popup.shareerror":
            "\u53d1\u751f\u4e34\u65f6\u9519\u8bef\uff0c\u65e0\u6cd5\u5206\u4eabYouTube\u89c6\u9891\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "call.youtube.popupbutton.allow": "\u5141\u8bb8",
          "call.youtube.popupbutton.disallow": "\u4e0d\u5141\u8bb8",
          "call.youtube.popupdesc.clipboard":
            "\u5141\u8bb8\u540e\uff0c\u60a8\u6240\u590d\u5236\u7684YouTube\u89c6\u9891\u94fe\u63a5\u5c06\u81ea\u52a8\u7c98\u8d34\u5230\u6d4f\u89c8\u5668 \u3002",
          "call.youtube.popuptitle.clipboard":
            "\u5141\u8bb8LINE\u4f7f\u7528\u526a\u8d34\u677f",
          "call.youtube.statusbadge.premiering": "\u9996\u6620",
          "call.youtube.title.trendingvideos": "\u70ed\u95e8\u89c6\u9891",
          "call.youtube.videodesc.date":
            "\u9884\u5b9a\u53d1\u5e03\u65f6\u95f4: %1",
          "call.youtube.videodesc.datevariable": "yyyy/M/d H:mm",
          "capture.command.close": "\u5173\u95ed",
          "capture.command.copy": "\u590d\u5236",
          "capture.command.done": "\u5b8c\u6210",
          "capture.command.draw": "\u7ed8\u5236",
          "capture.command.gif": "\u622a\u53d6GIF",
          "capture.command.gif.cancel":
            "\u5173\u95ed\u622a\u56fe\u754c\u9762\u5c06\u653e\u5f03\u5f53\u524dGIF\uff0c\u786e\u5b9a\u8981\u5173\u95ed\u5417\uff1f",
          "capture.command.gif.create": "\u6b63\u5728\u521b\u5efaGIF",
          "capture.command.gif.error.maxFileSize":
            "\u60a8\u622a\u53d6\u7684GIF\u6587\u4ef6\u8d85\u8fc720 MB\u3002\n\uff08\u76ee\u524d\u4e3a%1 MB\uff09\n\u8bf7\u91cd\u8bd5\u3002",
          "capture.command.gif.error.maxSize":
            "\u56e0\u4e3a\u9009\u62e9\u533a\u57df\u8fc7\u5927\uff0c\u65e0\u6cd5\u622a\u53d6GIF\u3002\n\u8bf7\u91cd\u65b0\u9009\u62e9\u533a\u57df\u3002",
          "capture.command.gif.error.size":
            "\u9009\u62e9\u533a\u57df\u592a\u5c0f\uff0c\u65e0\u6cd5\u622a\u53d6GIF\u3002\n\u8bf7\u91cd\u65b0\u9009\u62e9\u533a\u57df\u3002",
          "capture.command.gif.stop": "\u505c\u6b62",
          "capture.command.gif.tooltip":
            "\u622a\u53d6\u90e8\u5206\u5c4f\u5e55\u753b\u9762\u5e76\u4fdd\u5b58\u4e3aGIF\u6587\u4ef6\u3002",
          "capture.command.quit": "\u786e\u5b9a",
          "capture.command.redo": "\u91cd\u505a",
          "capture.command.save": "\u4fdd\u5b58",
          "capture.command.share": "\u5206\u4eab",
          "capture.command.undo": "\u64a4\u9500",
          "capture.desc.need.os.recordscreen":
            "\u65e0\u6cd5\u6267\u884c\u5c4f\u5e55\u622a\u56fe\u3002\u8bf7\u5141\u8bb8LINE\u8bbf\u95ee\u5f55\u5c4f\u529f\u80fd\u3002",
          "capture.msg.onEditing":
            "\u5173\u95ed\u622a\u56fe\u754c\u9762\u5c06\u653e\u5f03\u60a8\u7684\u5168\u90e8\u66f4\u6539\u5185\u5bb9\uff0c\u786e\u5b9a\u8981\u5173\u95ed\u5417\uff1f",
          "capture.scan.error.maxFileSize":
            "\u60a8\u5c1d\u8bd5\u622a\u53d6\u7684\u56fe\u7247\u592a\u5927\u3002\u8bf7\u8c03\u6574\u5c3a\u5bf8\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "capture.scan.error.resolution":
            "\u56fe\u7247\u7684\u5206\u8fa8\u7387\u4e0d\u53d7\u652f\u6301\uff0c\u56e0\u6b64\u65e0\u6cd5\u622a\u56fe\u3002\u8bf7\u8c03\u6574\u5206\u8fa8\u7387\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "capture.tool.eclipse": "\u5706\u5f62",
          "capture.tool.line": "\u7ebf\u6761",
          "capture.tool.lineColor": "\u7ebf\u6761\u989c\u8272",
          "capture.tool.mosaic": "\u50cf\u7d20\u5316",
          "capture.tool.penwidth": "\u5bbd\u5ea6",
          "capture.tool.rectangle": "\u65b9\u5f62",
          "capture.tool.select": "\u9009\u62e9",
          "capture.tool.shape": "\u5f62\u72b6",
          "capture.tool.text": "\u6587\u672c",
          "capture.tool.textColor": "\u5b57\u4f53\u989c\u8272",
          "capture.tool.textSize": "\u5b57\u4f53\u5927\u5c0f",
          "capture.tool.textSize.big": "\u5927",
          "capture.tool.textSize.medium": "\u4e2d",
          "capture.tool.textSize.small": "\u5c0f",
          "chat.action.leaveChat.confirm":
            "\u9000\u51fa\u804a\u5929\uff0c\u804a\u5929\u8bb0\u5f55\u5c06\u88ab\u5168\u90e8\u5220\u9664\u3002\n\u662f\u5426\u9000\u51fa\uff1f",
          "chat.alert.clipboard.largedata":
            "\u60a8\u6240\u590d\u5236\u7684\u5185\u5bb9\u8fc7\u5927\uff0c\u65e0\u6cd5\u76f4\u63a5\u7c98\u8d34\u5230\u804a\u5929\u4e2d\u3002",
          "chat.alert.file.open.fromNotbuddy":
            "\u975e\u597d\u53cb\u53d1\u9001\u7684\u6587\u4ef6\u53ef\u80fd\u5b58\u5728\u5b89\u5168\u9690\u60a3\u3002\n\u786e\u5b9a\u8981\u5f00\u542f\u5417\uff1f",
          "chat.alert.file.open.fromSquare":
            "\u60a8\u4e0d\u8ba4\u8bc6\u7684\u4eba\u53d1\u9001\u7684\u6587\u4ef6\u53ef\u80fd\u5b58\u5728\u5b89\u5168\u9690\u60a3\u3002\n\u786e\u5b9a\u8981\u5f00\u542f\u5417\uff1f",
          "chat.alert.file.open.frombuddy":
            "\u6253\u5f00\u6587\u4ef6\u4e4b\u524d\u52a1\u5fc5\u786e\u4fdd\u6587\u4ef6\u5b89\u5168\u53ef\u9760\u3002\n\u786e\u5b9a\u8981\u6253\u5f00\u6587\u4ef6\u5417\uff1f",
          "chat.alert.file.open.notSupport":
            "\u6240\u9009\u6587\u4ef6\u683c\u5f0f\u4e0d\u53d7\u652f\u6301\uff0c\u65e0\u6cd5\u6253\u5f00\u3002",
          "chat.alert.file.unsupported.all.other":
            "\u6240\u9009\u6587\u4ef6\u683c\u5f0f\u4e0d\u53d7\u652f\u6301\u3002\u662f\u5426\u8981\u538b\u7f29\u540e\u53d1\u9001\uff1f",
          "chat.alert.file.unsupported.some.other":
            "\u6240\u9009\u6587\u4ef6\u4e2d\u5305\u542b%n\u4e2a\u683c\u5f0f\u4e0d\u53d7\u652f\u6301\u7684\u6587\u4ef6\u3002\u662f\u5426\u8981\u538b\u7f29\u540e\u53d1\u9001\uff1f",
          "chat.alert.invite.alreadyinvited":
            "%1\u5df2\u7ecf\n\u88ab\u9080\u8bf7\u3002  ",
          "chat.alert.invite.alreadyjoined":
            "%1\u5df2\u7ecf\n\u662f\u8be5\u7fa4\u7ec4\u7684\u6210\u5458\u3002  ",
          "chat.alert.invite.blockedbuddy":
            "\u65e0\u6cd5\u9080\u8bf7\u5df2\u5c4f\u853d\u7684\u5e10\u53f7\u3002",
          "chat.alert.invite.confirm":
            "\u9080\u8bf7%1\n\u52a0\u5165\u8be5\u804a\u5929\u5417\uff1f",
          "chat.alert.invite.notbuddy":
            "\u5c06%1\u52a0\u4e3a\u597d\u53cb\n\u4ee5\u9080\u8bf7\u5176\u52a0\u5165\u6b64\u804a\u5929\u3002 ",
          "chat.alert.invite.verificationrequired":
            "\u60f3\u8981\u901a\u8fc7\u4e8c\u7ef4\u7801\u6216\u9080\u8bf7\u94fe\u63a5\u52a0\u5165\u7fa4\uff0c\u8bf7\u5148\u8fdb\u884c\u5e74\u9f84\u786e\u8ba4\uff0c\u786e\u4fdd\u60a8\u5df2\u5e74\u6ee118\u5c81\u3002",
          "chat.alert.sharePost":
            "\u8981\u4e0e%1\u5206\u4eab\n\u8bb0\u4e8b\u672c\u548c\u76f8\u518c\u5417\uff1f",
          "chat.alert.unavailable.file":
            "\u6b64\u6587\u4ef6\u5b58\u50a8\u671f\u9650\u5df2\u8fc7\uff0c\u56e0\u6b64\u65e0\u6cd5\u5206\u4eab\u3002",
          "chat.alert.unsend.fail.error":
            "\u4fe1\u606f\u64a4\u56de\u5931\u8d25\u3002\u8bf7\u91cd\u8bd5\u3002",
          "chat.alert.unsend.fail.time":
            "\u4fe1\u606f\u53d1\u9001\u65f6\u95f4\u8fc7\u957f\uff0c\u65e0\u6cd5\u64a4\u56de\u3002",
          "chat.alert.unsend.old.version":
            "\u6b64\u4fe1\u606f\u53ef\u80fd\u65e0\u6cd5\u4ece\u67d0\u4e9b\u7528\u6237\u7684\u804a\u5929\u4e2d\u79fb\u9664\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u5bf9\u65b9\u7528\u6237\u6240\u4f7f\u7528\u7684LINE\u7248\u672c\u3002\u8981\u7ee7\u7eed\u5417\uff1f",
          "chat.audio.tooltip": "\u8bed\u97f3",
          "chat.btn.capture.tooltip": "\u753b\u9762\u622a\u56fe",
          "chat.btn.close.tooltip": "\u5173\u95ed",
          "chat.btn.emoji": "\u8868\u60c5",
          "chat.btn.facemark": "\u8868\u60c5\u7b26\u53f7",
          "chat.btn.file": "\u53d1\u9001\u6587\u4ef6",
          "chat.btn.keepmemo.tooltip": "Keep\u5907\u5fd8\u5f55",
          "chat.btn.max.tooltip": "\u6700\u5927\u5316",
          "chat.btn.menu.tooltip": "\u83dc\u5355",
          "chat.btn.min.tooltip": "\u6700\u5c0f\u5316",
          "chat.btn.reset.tooltip":
            "\u8fd8\u539f\u4e3a\u539f\u6765\u5927\u5c0f\uff08\u7f29\u5c0f\uff09",
          "chat.btn.sticker": "\u8d34\u56fe",
          "chat.btn.sticker.tooltip": "\u8d34\u56fe",
          "chat.btn.voip": "\u514d\u8d39\u901a\u8bdd",
          "chat.contact.label": "\u8054\u7cfb\u4eba",
          "chat.context.menu.search.name": "\u641c\u7d22\u59d3\u540d",
          "chat.context.menu.send.contact": "\u5171\u4eab\u8054\u7cfb\u4eba",
          "chat.context.menu.talk": "1\u5bf91\u804a\u5929",
          "chat.desc.quit.uploading":
            "\u60a8\u5728\u4e00\u4e2a\u5bf9\u8bdd\u4e2d\u6b63\u53d1\u9001\u4e00\u4e2a\u6216\u591a\u4e2a\u6587\u4ef6\u3002\n\u73b0\u5728\u5173\u95edLINE\uff0c\u6587\u4ef6\u5c06\u65e0\u6cd5\u6b63\u786e\u53d1\u9001\u3002",
          "chat.edit.alert.unavailable.picture":
            "\u56fe\u7247\u6587\u4ef6\u8fc7\u671f\uff0c\u65e0\u6cd5\u8bfb\u53d6\u3002",
          "chat.emoji.label.animation.unavailable":
            "\u60a8\u53ef\u4ee5\u5728\u624b\u673a\u4e2d\u67e5\u770b\u8d34\u56fe\u7684\u52a8\u6001\u6548\u679c\u3002",
          "chat.emoji.label.recentIconDesc1":
            "\u663e\u793a\u6700\u8fd1\u4f7f\u7528\u8fc7\u7684\u8868\u60c5\u3002",
          "chat.emoji.label.recentIconDesc2":
            "\u5c1d\u8bd5\u7ed9\u597d\u53cb\u53d1\u9001\u8868\u60c5\u3002",
          "chat.emoji.label.recentLetterDesc1":
            "\u663e\u793a\u6700\u8fd1\u4f7f\u7528\u8fc7\u7684\u8868\u60c5\u7b26\u53f7\u3002",
          "chat.emoji.label.recentLetterDesc2":
            "\u5c1d\u8bd5\u7ed9\u597d\u53cb\u53d1\u9001\u8868\u60c5\u7b26\u53f7\u3002",
          "chat.emoji.label.recentStickerDesc1":
            "\u663e\u793a\u6700\u8fd1\u4f7f\u7528\u8fc7\u7684\u8d34\u56fe\u3002",
          "chat.emoji.label.recentStickerDesc2":
            "\u5c1d\u8bd5\u7ed9\u597d\u53cb\u53d1\u9001\u8d34\u56fe\u3002",
          "chat.err.file.broken":
            "\u6587\u4ef6\u5c1a\u672a\u4fdd\u5b58\u3002\n\u8bf7\u786e\u8ba4\u7535\u8111\u7684\u5b58\u50a8\u7a7a\u95f4\u3002",
          "chat.err.file.download.failed":
            "\u6587\u4ef6\u4fdd\u5b58\u5931\u8d25\u3002",
          "chat.err.file.download.localError":
            "\u6587\u4ef6\u4fdd\u5b58\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "chat.err.file.exceed.capacity":
            "\u6587\u4ef6\u5927\u5c0f\u8d85\u8fc7\u9650\u5236\uff08%1\uff09\uff0c\u53d1\u9001\u5931\u8d25\u3002",
          "chat.err.file.exceed.dailyCapacity":
            "\u8d85\u8fc7\u5f53\u5929\u53d1\u9001\u91cf\u9650\u5236\uff08%1\uff09\uff0c\u53d1\u9001\u5931\u8d25\u3002",
          "chat.err.file.folderPermission":
            "\u65e0\u6cd5\u4fdd\u5b58\u81f3\u6240\u9009\u6587\u4ef6\u5939\u3002\n\u8bf7\u66f4\u6539\u4fdd\u5b58\u8def\u5f84\u540e\u91cd\u65b0\u5c1d\u8bd5\u3002",
          "chat.err.file.need.space":
            "\u8bbe\u5907\u53ef\u7528\u7a7a\u95f4\u4e0d\u8db3\uff0c\u8bf7\u786e\u8ba4\u3002",
          "chat.err.file.open":
            "\u6b64\u6587\u4ef6\u6b63\u5728\u4f7f\u7528\u3002\u8bf7\u5c1d\u8bd5\u5173\u95ed\u540e\uff0c\u518d\u6b21\u53d1\u9001\u3002",
          "chat.err.file.some.unpardoned":
            "\u65e0\u6cd5\u53d1\u9001\u8be5\u7c7b\u578b\u6587\u4ef6\u3002\n\u82e5\u60a8\u53d1\u9001\u591a\u4e2a\u6587\u4ef6\uff0c\u5176\u4ed6\u6587\u4ef6\u5c06\u88ab\u6b63\u5e38\u53d1\u9001\u3002\n",
          "chat.err.file.unpardoned":
            "\u65e0\u6cd5\u53d1\u9001\u8be5\u7c7b\u578b\u6587\u4ef6\u3002",
          "chat.err.media.copyFailed":
            "\u7f16\u7801\u8fdb\u884c\u4e2d\u3002\n\u8bf7\u7a0d\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "chat.err.media.infoLoadFailed":
            "\u7f51\u7edc\u8fde\u63a5\u53d1\u751f\u9519\u8bef\uff0c \u6b64\u9879\u64cd\u4f5c\u6ca1\u6709\u5b8c\u6210\u3002\n\u8bf7\u91cd\u8bd5\u3002",
          "chat.error.badwords":
            "\u8be5\u5185\u5bb9\u65e0\u6cd5\u53d1\u9001\u3002\n\u8bf7\u586b\u5199\u5176\u4ed6\u5185\u5bb9\u3002",
          "chat.error.popup.noauth":
            "LINE\u65e0\u6743\u6253\u5f00\u6b64\u6587\u4ef6\u5939\u4e2d\u7684\u6587\u4ef6\uff0c\u56e0\u6b64\u65e0\u6cd5\u6253\u5f00\u6587\u4ef6\u3002",
          "chat.file.audio.sizeExceeds":
            "\u6700\u5927\u53ef\u53d1\u9001\u4e0d\u8d85\u8fc730MB\u7684\u8bed\u97f3\u6587\u4ef6\u3002",
          "chat.file.cancel.tooltip": "\u53d6\u6d88",
          "chat.file.cantFindFile":
            "\u627e\u4e0d\u5230\u8be5\u6587\u4ef6\u3002",
          "chat.file.closeConfirm":
            "\u5173\u95ed\u7a97\u53e3\u540e\uff0c\n\u6587\u4ef6\u7684\u63a5\u6536\u6216\u53d1\u9001\u5c06\u88ab\u53d6\u6d88\u3002",
          "chat.file.countExceeds":
            "\u4e00\u6b21\u6700\u591a\u53ef\u53d1\u9001%1\u4e2a\u6587\u4ef6\u3002",
          "chat.file.label.expired": "\u5df2\u8fc7\u671f",
          "chat.file.video.sizeExceeds":
            "\u6700\u5927\u53ef\u53d1\u9001\u4e0d\u8d85\u8fc7200MB\u7684\u89c6\u9891\u6587\u4ef6\u3002",
          "chat.flex.btn.send": "\u5b8c\u6210",
          "chat.flex.date.select": "\u9009\u62e9\u65e5\u671f",
          "chat.flex.datetime.select":
            "\u9009\u62e9\u65e5\u671f\u548c\u65f6\u95f4",
          "chat.flex.error.unknown":
            "\u6b64\u529f\u80fd\u4e0d\u9002\u7528\u4e8e\u60a8\u5f53\u524d\u7684LINE\u7248\u672c\u3002",
          "chat.flex.time.select": "\u9009\u62e9\u65f6\u95f4",
          "chat.group.msg.e2ee.guide":
            "\u6b64\u804a\u5929\u53d7\nLetter Sealing\u4fdd\u62a4",
          "chat.group.noMember.placeholder":
            "\u8bf7\u9080\u8bf7\u597d\u53cb\u52a0\u5165\u804a\u5929\u5ba4",
          "chat.grouphome.label.enjoySns.title":
            "\u548c\u8fd9\u4e2a\u5145\u6ee1\u6b22\u4e50\u7684\u793e\u4ea4\u7f51\u7edc\u4e0a\u7684\u670b\u53cb\u4eec\u4e00\u8d77\u53d1\u5e03\u8bb0\u4e8b\u672c\u548c\u76f8\u518c\uff01\n",
          "chat.image.tooltip": "\u56fe\u7247",
          "chat.input.placeholder": "\u8f93\u5165\u6d88\u606f",
          "chat.inputbar.msg.album": "\u76f8\u518c",
          "chat.inputbar.msg.albumcontents": "\u76f8\u518c\u9879\u76ee",
          "chat.label.del": "\u5220\u9664",
          "chat.label.makeAlbum":
            "\u5df2\u521b\u5efa\u201c%1\u201d\u76f8\u518c\u3002",
          "chat.label.open": "\u6253\u5f00\u663e\u793a",
          "chat.label.openFile": "\u6253\u5f00\u6587\u4ef6",
          "chat.label.openFolder": "\u6253\u5f00\u6587\u4ef6\u5939",
          "chat.label.playback": "\u64ad\u653e",
          "chat.label.retry": "\u91cd\u65b0\u53d1\u9001",
          "chat.label.save": "\u4fdd\u5b58",
          "chat.label.saveAs": "\u4fee\u6539\u540d\u79f0\u540e\u4fdd\u5b58",
          "chat.label.saveOpen": "\u4fdd\u5b58\u5e76\u6253\u5f00",
          "chat.label.sendFail": "\u65e0\u6cd5\u53d1\u9001",
          "chat.label.share": "\u5206\u4eab",
          "chat.label.showAlbum": "\u663e\u793a\u76f8\u518c",
          "chat.label.showPost": "\u67e5\u770b\u8bb0\u4e8b\u672c",
          "chat.label.showPrev":
            "\u663e\u793a\u4e4b\u524d\u7684\u804a\u5929\u8bb0\u5f55",
          "chat.label.totalMediaCount": "\u5171%1\u4ef6",
          "chat.linemusic.shared": "\u60a8\u5206\u4eab\u4e86\u97f3\u4e50\u3002",
          "chat.linemusic.shared.other":
            "%1\u5206\u4eab\u4e86\u97f3\u4e50\u3002",
          "chat.list.call":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> \u901a\u8bdd\u65f6\u95f4]]>',
          "chat.list.call.canceled":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> \u5df2\u53d6\u6d88\u901a\u8bdd]]>',
          "chat.list.call.icon":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\">]]>',
          "chat.list.call.missedCall":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> \u672a\u63a5\u6765\u7535]]>',
          "chat.list.call.rejected":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> \u65e0\u4eba\u5e94\u7b54]]>',
          "chat.list.desc.read.unread.all":
            "\u6240\u6709\u6d88\u606f\u90fd\u5df2\u6807\u8bb0\u4e3a\u5df2\u8bfb\u3002",
          "chat.list.group.createdby": "\u7fa4\u521b\u5efa\u8005\uff1a",
          "chat.list.group.invite":
            "%1\u9080\u8bf7\u60a8\u52a0\u5165\u7fa4\u7ec4\u3002",
          "chat.list.group.layer":
            "\u60a8\u5df2\u88ab\u9080\u8bf7\u52a0\u5165\u8be5\u7fa4\u7ec4\u3002",
          "chat.list.group.nogroupcreator":
            "\u7fa4\u521b\u5efa\u8005\u4e0d\u5728\u6b64\u7fa4\u5185\u3002",
          "chat.list.linecall": "[LINE Premium Call]",
          "chat.list.mention": "\u6709\u4eba\u63d0\u53ca\u60a8\u3002",
          "chat.list.menu.clear.all.unreadmessage":
            "\u6807\u8bb0\u4e3a\u5df2\u8bfb",
          "chat.list.menu.sort.favorites": "\u6536\u85cf\u5939",
          "chat.list.menu.sort.time": "\u65f6\u95f4\u6392\u5e8f",
          "chat.list.menu.sort.unreadcount": "\u672a\u8bfb\u6d88\u606f",
          "chat.list.menu.tooltip": "\u6309\u63a5\u6536",
          "chat.list.sortBtn.tooltip": "\u672a\u8bfb\u4fe1\u606f",
          "chat.list.sortByUnread.desc":
            "\u5df2\u5c06\u672a\u8bfb\u4fe1\u606f\u663e\u793a\u5728\u4e0a\u65b9\u3002 ",
          "chat.menu.Image.download": "\u4e0b\u8f7d\u5b8c\u6210\u3002",
          "chat.menu.Image.download.fail":
            "\u65e0\u6cd5\u4fdd\u5b58\u6587\u4ef6\u3002\n\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "chat.menu.alarmOff": "\u9759\u97f3\u804a\u5929",
          "chat.menu.alarmOn": "\u53d6\u6d88\u9759\u97f3\u804a\u5929",
          "chat.menu.albums": "\u76f8\u518c",
          "chat.menu.alwaysTop": "\u5728\u6700\u524d\u65b9\u663e\u793a",
          "chat.menu.backgroundSetting": "\u80cc\u666f\u8bbe\u5b9a",
          "chat.menu.backgroundSetting.apply": "\u5e94\u7528",
          "chat.menu.backgroundSetting.cancel": "\u53d6\u6d88",
          "chat.menu.backgroundSetting.file": "\u9009\u62e9\u6587\u4ef6",
          "chat.menu.backgroundSetting.image.failed":
            "\u6307\u5b9a\u56fe\u7247\u4e0d\u53ef\u7528\u3002",
          "chat.menu.backgroundSetting.image.maximumUploadableSize":
            "\u60a8\u53ea\u80fd\u4e0a\u4f20\u5927\u5c0f\u4e0d\u8d85\u8fc7%1MB\u7684\u56fe\u7247\u3002",
          "chat.menu.backgroundSetting.option": "\u663e\u793a\u65b9\u5f0f",
          "chat.menu.backgroundSetting.option.detail": "\u5e73\u94fa",
          "chat.menu.backgroundSetting.option.fill": "\u586b\u5145",
          "chat.menu.backgroundSetting.photo.save.failed":
            "\u56fe\u7247\u4fdd\u5b58\u5931\u8d25\u3002",
          "chat.menu.backgroundSetting.photo.transparency":
            "\u900f\u660e\u5ea6",
          "chat.menu.backgroundSetting.photoGuide":
            "\u81ea\u5b9a\u4e49\u60a8\u7684\u804a\u5929\u80cc\u666f\u3002",
          "chat.menu.backgroundSetting.reset": "\u91cd\u7f6e",
          "chat.menu.backgroundSetting.select": "\u9009\u62e9\u80cc\u666f",
          "chat.menu.backgroundSetting.tab.color": "\u989c\u8272",
          "chat.menu.backgroundSetting.tab.illustration": "\u63d2\u56fe",
          "chat.menu.backgroundSetting.tab.photo": "\u56fe\u7247",
          "chat.menu.backgroundSetting.unavailableInDarkmode":
            "\u65e0\u6cd5\u5728\u6df1\u8272\u6a21\u5f0f\u4e0b\u4f7f\u7528\u3002",
          "chat.menu.copy": "\u590d\u5236",
          "chat.menu.delete":
            "\u5220\u9664\u6240\u6709\u804a\u5929\u8bb0\u5f55",
          "chat.menu.group.noMember": "\u6ca1\u6709\u6210\u5458",
          "chat.menu.invite": "\u9080\u8bf7",
          "chat.menu.invite.group": "\u6210\u5458\u548c\u9080\u8bf7",
          "chat.menu.leave": "\u9000\u51fa\u804a\u5929",
          "chat.menu.make": "\u5efa\u7acb\u7fa4",
          "chat.menu.msg.announce": "\u901a\u77e5",
          "chat.menu.msg.unsend": "\u64a4\u56de",
          "chat.menu.openAlbum": "\u663e\u793a\u5168\u90e8\u56fe\u7247",
          "chat.menu.openAlbum.download": "\u4e0b\u8f7d\u5b8c\u6210\u3002",
          "chat.menu.openAlbum.download.fail":
            "\u65e0\u6cd5\u4e0b\u8f7d\u5185\u5bb9\u3002",
          "chat.menu.openAlbum.download.fail.folderPermission":
            "\u65e0\u6cd5\u5b8c\u6210\u4e0b\u8f7d\u5230\u9009\u5b9a\u6587\u4ef6\u5939\u7684\u64cd\u4f5c\u3002\n\u8bf7\u66f4\u6539\u60a8\u7684\u4e0b\u8f7d\u4f4d\u7f6e\uff0c\u7136\u540e\u91cd\u8bd5\u3002",
          "chat.menu.openAlbum.download.open": "\u6253\u5f00\u6587\u4ef6\u5939",
          "chat.menu.openAlbum.downloading": "\u6b63\u5728\u4e0b\u8f7d\u2026",
          "chat.menu.openAlbum.retry": "\u91cd\u8bd5",
          "chat.menu.openAlbum.saveKeep":
            "\u5df2\u5728Keep\u4e2d\u4fdd\u5b58\u3002",
          "chat.menu.openAlbum.saveKeep.open": "\u6253\u5f00Keep",
          "chat.menu.openAlbum.savingKeep":
            "\u6b63\u5728Keep\u4e2d\u4fdd\u5b58\u2026",
          "chat.menu.openAlbum.savingKeep.fail":
            "\u65e0\u6cd5\u5728Keep\u4e2d\u4fdd\u5b58\u3002",
          "chat.menu.openAlbum.selected": "\u5df2\u9009\u4e2d%1\u9879",
          "chat.menu.openLink": "\u67e5\u770b\u6240\u6709URL",
          "chat.menu.openLink.noURL":
            "\u6b64\u804a\u5929\u4e2d\u672a\u5206\u4eab\u7f51\u5740\u3002",
          "chat.menu.paste": "\u7c98\u8d34",
          "chat.menu.recommend": "\u63a8\u8350",
          "chat.menu.save": "\u4fdd\u5b58\u804a\u5929",
          "chat.menu.save.note": "\u4fdd\u5b58\u81f3\u8bb0\u4e8b\u672c",
          "chat.menu.searchMsgs": "\u641c\u7d22\u804a\u5929",
          "chat.menu.selectAll": "\u5168\u9009",
          "chat.menu.selectedCopy": "\u590d\u5236\u5df2\u9009\u6587\u5b57",
          "chat.menu.settings": "\u8bbe\u5b9a",
          "chat.menu.showAllContents": "\u67e5\u770b\u5168\u90e8\u5185\u5bb9",
          "chat.menu.sticker.openWebStore": "\u5546\u5e97",
          "chat.menu.sticker.showDetail": "\u5f00\u542f",
          "chat.menu.translation": "\u7ffb\u8bd1",
          "chat.message.present.emoji.receive":
            "\u60a8\u6536\u5230\u4e86\u793c\u7269\u8868\u60c5\u8d34\uff01",
          "chat.message.present.receive.confirm": "\u63a5\u53d7",
          "chat.message.present.sticker.receive":
            "\u60a8\u6536\u5230\u4e86\u793c\u7269\u8d34\u56fe\uff01",
          "chat.message.present.theme.receive":
            "\u60a8\u6536\u5230\u4e86\u793c\u7269\u4e3b\u9898\uff01\n\u8bf7\u901a\u8fc7LINE\u79fb\u52a8\u5ba2\u6237\u7aef\u63a5\u6536\u3002",
          "chat.message.sharealbum": "\u5df2\u5206\u4eab\u76f8\u518c\u3002",
          "chat.message.sharenote":
            "\u5df2\u5206\u4eab\u8bb0\u4e8b\u672c\u3002",
          "chat.msg.album.addphoto.other":
            "%n\u4e2a\u9879\u76ee\u5df2\u6dfb\u52a0\u81f3\u76f8\u518c \u3002",
          "chat.msg.album.create":
            "\u5df2\u521b\u5efa\u201c%1\u201d\u76f8\u518c\u3002",
          "chat.msg.album.delete":
            "%1\u5220\u9664\u4e86\u201c%2\u201d\u76f8\u518c\u3002",
          "chat.msg.album.removephoto":
            "%1\u4ece\u76f8\u518c\u201c%2\u201d\u4e2d\u5220\u9664\u4e861\u4e2a\u6216\u591a\u4e2a\u9879\u76ee\u3002",
          "chat.msg.album.rename":
            "%1\u5c06\u201c%2\u201d\u76f8\u518c\u540d\u79f0\u66f4\u6539\u4e3a\u201c%3\u201d\u3002",
          "chat.msg.album.viewPhoto": "\u663e\u793a\u76f8\u518c",
          "chat.msg.applink.app.recv":
            "\u5df2\u63a8\u8350%1\u3002\u8be5\u4fe1\u606f\u4ec5\u53ef\u901a\u8fc7LINE\u79fb\u52a8\u5ba2\u6237\u7aef\u67e5\u770b\u3002",
          "chat.msg.applink.app.sent": "\u5df2\u63a8\u8350%1\u3002",
          "chat.msg.applink.friend.recv":
            "%1\u5185\u6709\u65b0\u7684\u597d\u53cb\u7533\u8bf7\u3002\u8be5\u4fe1\u606f\u4ec5\u53ef\u901a\u8fc7LINE\u79fb\u52a8\u5ba2\u6237\u7aef\u67e5\u770b\u3002",
          "chat.msg.applink.friend.sent":
            "%1\u7684\u597d\u53cb\u7533\u8bf7\u5df2\u53d1\u9001\u3002",
          "chat.msg.boundnoun": "\ub2d8",
          "chat.msg.call.canceled": "\u53d6\u6d88",
          "chat.msg.call.e2ee.guide":
            '<![CDATA[\u6b64\u6b21\u901a\u8bdd\u5df2\u542f\u7528Letter Sealing\n\u663e\u793a<img src=\\"image://chat/e2ee_icon.png\\" width="16" height="11">\u56fe\u6807\u5373\u8868\u793a\u901a\u8bdd\u7684\u5b89\u5168\u6027\u5df2\u589e\u5f3a\u3002]]>',
          "chat.msg.call.missedCall": "\u672a\u63a5\u6765\u7535",
          "chat.msg.call.rejected": "\u65e0\u5e94\u7b54",
          "chat.msg.changeGroupImage":
            "%1\u66f4\u6539\u4e86\u7fa4\u5934\u50cf\u3002",
          "chat.msg.changeGroupName":
            "%1\u5df2\u5c06\u7fa4\u540d\u79f0\u66f4\u6539\u4e3a%2\u3002",
          "chat.msg.chatevent.unknown":
            "\u65e0\u6cd5\u67e5\u770b\u8be5\u63d0\u9192\u3002\n\u8bf7\u5728\u667a\u80fd\u624b\u673a\u4e2d\u786e\u8ba4\u3002",
          "chat.msg.e2ee.decryptingMsg": "\u89e3\u5bc6\u4e2d...",
          "chat.msg.e2ee.guide":
            "\u6b64\u804a\u5929\u53d7\nLetter Sealing\u4fdd\u62a4",
          "chat.msg.e2ee.needKeyExchange":
            "\u6b64\u6d88\u606f\u5df2\u52a0\u5bc6\u3002\n\u9605\u8bfb\u6d88\u606f\u524d\uff0c\u8bf7\u5148\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u3002",
          "chat.msg.e2ee.recvMsg.decryptionFailed":
            "Letter Sealing\n\u65e0\u6cd5\u663e\u793a\u6d88\u606f\uff0c\u539f\u56e0\u662f\u65e0\u6cd5\u89e3\u5bc6\u3002\n\u8bf7\u8ba9\u60a8\u7684\u597d\u53cb\u91cd\u65b0\u53d1\u9001\u6b64\u6d88\u606f\u3002",
          "chat.msg.e2ee.sentMsg.decryptionFailed":
            "\u65e0\u6cd5\u89e3\u5bc6\u6b64\u6d88\u606f\u3002\n\u6b64\u6d88\u606f\u672a\u66fe\u5728\u65e7\u8bbe\u5907\u4e0a\u8fdb\u884c\u5907\u4efd\u53ca\u590d\u539f\uff0c\u56e0\u6b64\u65e0\u6cd5\u5728\u5f53\u524d\u8bbe\u5907\u4e0a\u663e\u793a\u3002",
          "chat.msg.e2ee.setting.disabled":
            "\u6b64\u6d88\u606f\u5df2\u52a0\u5bc6\uff0c\u8bf7\u5728\u624b\u673a\u4e0a\u67e5\u770b\u3002",
          "chat.msg.file.change.type.audio":
            "\u7531\u4e8e\u97f3\u9891\u6587\u4ef6\u8fc7\u5927\uff0c\u90e8\u5206\u8bbe\u5907\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u64ad\u653e\u3002",
          "chat.msg.file.change.type.video":
            "\u7531\u4e8e\u89c6\u9891\u6587\u4ef6\u8fc7\u5927\uff0c\u90e8\u5206\u8bbe\u5907\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u64ad\u653e\u3002",
          "chat.msg.file.ext": "\u6269\u5c55\u540d",
          "chat.msg.file.period": "\u6709\u6548\u671f\u9650 : ~",
          "chat.msg.file.received": "%1\u53d1\u6765\u4e86\u6587\u4ef6\u3002",
          "chat.msg.file.sent": "\u6587\u4ef6\u5df2\u53d1\u9001\u3002",
          "chat.msg.file.size": "\u6587\u4ef6\u5927\u5c0f : %1",
          "chat.msg.file.waiting": "\u7b49\u5f85\u4e0a\u4f20",
          "chat.msg.groupInvite": "%1\u9080\u8bf7%2\u52a0\u5165\u7fa4\u3002",
          "chat.msg.groupboard.updated":
            "\u7fa4\u7559\u8a00\u677f\u6709\u66f4\u65b0\u3002\u8bf7\u5728LINE\u79fb\u52a8\u5ba2\u6237\u7aef\u67e5\u770b\u3002",
          "chat.msg.home.shared":
            "\u5206\u4eab\u4e86%1\u7684\u5e16\u5b50\u3002",
          "chat.msg.inviteCancel":
            "%1\u5df2\u53d6\u6d88\u5bf9%2\u7684\u9080\u8bf7\u3002",
          "chat.msg.joinGroup": "%1\u52a0\u5165\u7fa4\u3002",
          "chat.msg.kickout": "%1\u5df2\u5c06%2\u79fb\u51fa\u7fa4\u3002",
          "chat.msg.leave": "%1\u9000\u51fa\u804a\u5929\u3002",
          "chat.msg.leaveGroup": "%1\u9000\u51fa\u7fa4\u3002",
          "chat.msg.leavegroup.1.n.confirm":
            "\u4e00\u65e6\u9000\u51fa\u804a\u5929\uff0c\u60a8\u5c06\u65e0\u6cd5\u518d\u67e5\u770b\u804a\u5929\u8bb0\u5f55\u3002\u786e\u5b9a\u8981\u9000\u51fa\u804a\u5929\u5417\uff1f",
          "chat.msg.nomember": "\u6ca1\u6709\u6210\u5458",
          "chat.msg.preview.default":
            "\u70b9\u51fb\u6b64\u5904\u6253\u5f00\u6b64\u94fe\u63a5\u3002",
          "chat.msg.read": "\u5df2\u8bfb",
          "chat.msg.search.cancelSearch": "\u53d6\u6d88",
          "chat.msg.search.hint.fromName":
            "\u8bf7\u8f93\u5165\u53d1\u9001\u8005\u540d\u79f0",
          "chat.msg.search.hint.message":
            "\u8bf7\u8f93\u5165\u804a\u5929\u5185\u5bb9",
          "chat.msg.search.hint.roomName":
            "\u641c\u7d22\u804a\u5929\u548c\u4fe1\u606f",
          "chat.msg.search.result.hint.addOption":
            "\u8bf7\u6dfb\u52a0\u804a\u5929\u5ba4\u6216\u53d1\u9001\u8005\u540e\u641c\u7d22\u3002",
          "chat.msg.search.result.hint.noResultReason1":
            "\u66f4\u6362\u7535\u8111\u540e\u53ef\u80fd\u65e0\u6cd5\u5f97\u5230\u641c\u7d22\u7ed3\u679c\u3002 ",
          "chat.msg.search.result.hint.noResultReason2":
            "\u8d85\u8fc72\u5468\u672a\u4f7f\u7528\u7684\u7535\u8111\u4e0a\u53ef\u80fd\u65e0\u6cd5\u5f97\u5230\u641c\u7d22\u7ed3\u679c\u3002 ",
          "chat.msg.search.result.noResult":
            "\u672a\u627e\u5230\u76f8\u5173\u641c\u7d22\u7ed3\u679c\u3002",
          "chat.msg.search.title.date": "\u65e5\u671f",
          "chat.msg.search.title.fromName": "\u53d1\u9001\u8005",
          "chat.msg.search.title.message": "\u5185\u5bb9",
          "chat.msg.search.title.roomName": "\u804a\u5929",
          "chat.msg.smartphone":
            "\u8be5\u4fe1\u606f\u4ec5\u53ef\u901a\u8fc7LINE\u79fb\u52a8\u5ba2\u6237\u7aef\u67e5\u770b\u3002",
          "chat.msg.start.unreadMessage": "\u672a\u8bfb\u6d88\u606f",
          "chat.msg.sticker.gift.from.buddy":
            "\u60a8\u6536\u5230\u4e00\u4ef6\u793c\u7269\uff01\u8bf7\u7acb\u5373\u4e0b\u8f7d\u3002",
          "chat.msg.sticker.gift.from.me":
            "\u793c\u7269\u5df2\u7ecf\u8d60\u9001",
          "chat.msg.sticker.period.expired":
            "\u5df2\u8fc7\u6709\u6548\u671f\u3002\n\u8bf7\u5728\u624b\u673a\u4e2d\u91cd\u65b0\u8d2d\u4e70\u3002",
          "chat.msg.sticon.period.expired":
            "%1\u5df2\u8fc7\u671f\u3002\u8bf7\u4f7f\u7528\u624b\u673a\u7248LINE\uff0c\u91cd\u65b0\u4ece\u8d34\u56fe\u5546\u5e97\u8d2d\u4e70\u3002",
          "chat.msg.sync": "\u804a\u5929\u4fe1\u606f\u540c\u6b65\u4e2d...",
          "chat.msg.text.seeAll": "\u663e\u793a\u66f4\u591a",
          "chat.msg.theme.gift.from.me": "\u793c\u7269\u5df2\u7ecf\u8d60\u9001",
          "chat.msg.unknown.message":
            "\u5f88\u62b1\u6b49\uff0c\u8be5\u4fe1\u606f\u65e0\u6cd5\u663e\u793a\u3002",
          "chat.msg.unread": "\u5df2\u8bfb (\u672a\u8bfb)",
          "chat.msgbox.alarmoff.description":
            "\u6b64\u804a\u5929\u5ba4\u4e0d\u663e\u793a\u65b0\u6d88\u606f\u63d0\u9192\u3002",
          "chat.msgbox.bannedWord":
            "\u60a8\u53d1\u9001\u7684\u6d88\u606f\u5305\u542b\u654f\u611f\u8bcd\uff0c\u8bf7\u8c03\u6574\u540e\u518d\u53d1",
          "chat.msgbox.save.description":
            "\u5f53\u524d\u9875\u9762\u5185\u7684\u5bf9\u8bdd\u5185\u5bb9\uff0c \u5c06\u4ee5\u6587\u5b57\u5f62\u5f0f\u4fdd\u5b58\u3002\n",
          "chat.msgbox.save.dontShow":
            "\u4e0d\u518d\u663e\u793a\u6b64\u5185\u5bb9\u3002",
          "chat.msgbox.save.empty":
            "\u6ca1\u6709\u4fe1\u606f\u53ef\u4fdd\u5b58\u3002",
          "chat.noMember.group.error.noAuth":
            "\u6b64\u529f\u80fd\u4e3a\u7fa4\u6210\u5458\u4e13\u7528\u3002",
          "chat.noMember.singleRoom.error.album":
            "\u60a8\u65e0\u6cd5\u5728\u5f53\u524d\u804a\u5929\u4e2d\u6dfb\u52a0\u66f4\u591a\u9879\u76ee\u6216\u521b\u5efa\u66f4\u591a\u76f8\u518c\u3002",
          "chat.noMember.singleRoom.error.note":
            "\u60a8\u65e0\u6cd5\u5728\u5f53\u524d\u804a\u5929\u4e2d\u6dfb\u52a0\u66f4\u591a\u8bb0\u4e8b\u672c\u3002",
          "chat.noinput.group.invitation":
            "\u52a0\u5165\u7fa4\u7ec4\u5f00\u59cb\u804a\u5929\u3002",
          "chat.notes.notification.sharenote":
            "\u5df2\u5206\u4eab\u8bb0\u4e8b\u672c\u3002",
          "chat.notimessage.sharealbum": "\u5df2\u5206\u4eab\u76f8\u518c\u3002",
          "chat.poll.message.btn": "\u67e5\u770b\u8be6\u60c5",
          "chat.poll.title": "\u6295\u7968",
          "chat.popup.btn.pasteAsImage": "\u56fe\u7247",
          "chat.popup.btn.pasteAsText": "\u6587\u5b57",
          "chat.popup.clipboard.withImage":
            "\u9009\u62e9\u5c06\u590d\u5236\u5185\u5bb9\u7c98\u8d34\u5230\u526a\u8d34\u677f\u7684\u5f62\u5f0f\u3002",
          "chat.popup.desc.grouplimit":
            "\u60a8\u7684LINE\u7fa4\u6570\u91cf\u5df2\u8fbe\u4e0a\u9650\u3002\u60f3\u8981\u52a0\u5165\u6b64\u7fa4\uff0c\u8bf7\u5148\u9000\u51fa\u4e00\u4e2a\u8f83\u65e9\u5efa\u7acb\u7684\u7fa4\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "chat.popup.title.grouplimit":
            "\u7fa4\u6570\u91cf\u5df2\u8fbe\u4e0a\u9650",
          "chat.popupbutton.delete": "\u5220\u9664\u6d88\u606f",
          "chat.popupbutton.resend": "\u91cd\u65b0\u53d1\u9001",
          "chat.popupdesc.serveroutage1":
            "\u7531\u4e8e\u670d\u52a1\u5668\u9519\u8bef\uff0c\u5bf9\u65b9\u5c06\u65e0\u6cd5\u67e5\u770b\u6b64\u6d88\u606f\u3002\u8981\u4ee5\u65b0\u6d88\u606f\u7684\u5f62\u5f0f\u91cd\u65b0\u53d1\u9001\u5417\uff1f",
          "chat.popupdesc.serveroutagegroup":
            "\u7531\u4e8e\u670d\u52a1\u5668\u9519\u8bef\uff0c\u90e8\u5206\u7fa4\u6210\u5458\u5c06\u65e0\u6cd5\u67e5\u770b\u6b64\u6d88\u606f\u3002\u8981\u4ee5\u65b0\u6d88\u606f\u7684\u5f62\u5f0f\u91cd\u65b0\u53d1\u9001\u5417\uff1f",
          "chat.popuptitle.serveroutage":
            "\u8981\u91cd\u65b0\u53d1\u9001\u6d88\u606f\u5417\uff1f",
          "chat.profile.menu.displayName.search":
            "\u6309\u59d3\u540d\u641c\u7d22\u6d88\u606f",
          "chat.receiveicon.linecall.failed":
            "chat/chat_word_receive_linecallfail_icon.png",
          "chat.receiveicon.linecall.success":
            "chat/chat_word_receive_linecallsucess_icon.png",
          "chat.reply.album": "\u76f8\u518c\uff1a%1",
          "chat.reply.jump": "\u8fd4\u56de\u81f3\u539f\u4fe1\u606f",
          "chat.reply.jump.delete":
            "\u539f\u4fe1\u606f\u5df2\u4e0d\u5b58\u5728",
          "chat.reply.no.original.message":
            "\u65e0\u6cd5\u663e\u793a\u539f\u4fe1\u606f\u3002",
          "chat.reply.note.no.text":
            "\u5728%1\u5206\u4eab\u7684\u8bb0\u4e8b\u672c",
          "chat.reply.note.text": "\u8bb0\u4e8b\u672c\uff1a %1",
          "chat.room.msg.invitorNotBuddy":
            "\u964c\u751f\u4eba%1\u53d1\u6765\u4e86\u9080\u8bf7\u3002",
          "chat.save.location": "\u4f4d\u7f6e\u4fe1\u606f",
          "chat.sendicon.linecall.falied":
            "chat/chat_word_send_linecallfail_icon.png",
          "chat.sendicon.linecall.success":
            "chat/chat_word_send_linecallsucess_icon.png",
          "chat.setting.theme.snow.disable":
            "\u505c\u7528\u98d8\u96ea\u6548\u679c",
          "chat.setting.theme.snow.enable":
            "\u542f\u7528\u98d8\u96ea\u6548\u679c",
          "chat.share.notexist":
            "\u8be5\u7528\u6237\u5df2\u6ce8\u9500\u5e10\u53f7\u6216\u4e0d\u5b58\u5728\u3002",
          "chat.sharing.notification.sharealbum":
            "\u5df2\u5206\u4eab\u76f8\u518c\u3002",
          "chat.sharing.notification.sharenote":
            "\u5df2\u5206\u4eab\u8bb0\u4e8b\u672c\u3002",
          "chat.status.block":
            "\u65e0\u6cd5\u5411\u5df2\u5c4f\u853d\u7684\u5e10\u53f7\u53d1\u9001\u804a\u5929\u6d88\u606f\u3002",
          "chat.status.disconn":
            "\u6682\u65f6\u65e0\u6cd5\u53d1\u9001\u4fe1\u606f\u3002",
          "chat.status.e2ee.verification.fail":
            "Letter Sealing\u5e10\u53f7\u9a8c\u8bc1\u5df2\u88ab\u53d6\u6d88\u3002\n\n\u53ea\u6709\u5728\u9a8c\u8bc1\u5e10\u53f7\u540e\uff0c\u60a8\u624d\u80fd\u67e5\u770b\u5df2\u52a0\u5bc6\u7684\u6d88\u606f\u3002\n",
          "chat.status.keyExchangeBtn": "\u8eab\u4efd\u9a8c\u8bc1",
          "chat.status.leave":
            "\u5f88\u62b1\u6b49\uff0c\u82e5\u60a8\u9000\u51fa\u804a\u5929\u5ba4\uff0c\u60a8\u5c06\u65e0\u6cd5\u7ee7\u7eed\u53d1\u9001\u6b64\u4fe1\u606f\u3002",
          "chat.status.needKeyExchange":
            "\u8bf7\u5148\u5b8c\u6210\u8eab\u4efd\u9a8c\u8bc1\uff0c\u624d\u80fd\u5728\u7535\u8111\u7248LINE\u4e2d\u4f7f\u7528Letter Sealing\u529f\u80fd\u3002",
          "chat.system.inviteeoverlimit":
            "\u4ee5\u4e0b\u6210\u5458\u7684LINE\u7fa4\u6570\u91cf\u5df2\u8fbe\u4e0a\u9650\uff0c\u56e0\u6b64\u65e0\u6cd5\u52a0\u5165\u6b64\u7fa4\u3002\n%1",
          "chat.system.msg.a.unsend":
            "%1\u64a4\u56de\u4e86\u4e00\u6761\u4fe1\u606f\u3002",
          "chat.system.msg.unsend": "\u5df2\u64a4\u56de\u4fe1\u606f\u3002",
          "chat.systemmessage.upgradegroup":
            "\u7fa4\u8bbe\u7f6e\u5df2\u66f4\u6539\u3002\u53ea\u6709\u6536\u5230\u9080\u8bf7\u7684\u65b0\u6210\u5458\u624d\u80fd\u52a0\u5165\u6b64\u7fa4\u3002",
          "chat.title.chatMember": "\u804a\u5929\u6210\u5458",
          "chat.toast.notifications.mute":
            "\u63d0\u9192\u5df2\u5173\u95ed\u3002",
          "chat.toast.notifications.unmute":
            "\u63d0\u9192\u5df2\u5f00\u542f\u3002",
          "chat.trans.tooltip": "\u900f\u660e\u5ea6",
          "chat.video.play": "\u64ad\u653e",
          "chat.video.replay": "\u518d\u64ad\u4e00\u6b21",
          "chat.video.tooltip": "\u89c6\u9891",
          "chatapp.giphy.forward":
            "\u7528GIPHY\u4f20\u9001\u7684GIF\u6587\u4ef6\u65e0\u6cd5\u53d1\u9001\u3002",
          "chatapp.giphy.forward.next":
            "\u7528GIPHY\u4f20\u9001\u7684GIF\u6587\u4ef6\u65e0\u6cd5\u53d1\u9001\u3002\u8981\u53d1\u9001\u5176\u4ed6\u6587\u4ef6\u5417\uff1f",
          "chatapp.giphy.keep":
            "\u7528GIPHY\u4f20\u9001\u7684GIF\u6587\u4ef6\u65e0\u6cd5\u4fdd\u5b58\u5230Keep\u3002",
          "chatapp.giphy.keep.next":
            "\u7528GIPHY\u4f20\u9001\u7684GIF\u6587\u4ef6\u65e0\u6cd5\u4fdd\u5b58\u5230Keep\u3002\u8981\u4fdd\u5b58\u5176\u4ed6\u6587\u4ef6\u5417\uff1f",
          "chatl.share.alert.error":
            "\u6b64\u6d88\u606f\u5df2\u64a4\u56de\uff0c\u56e0\u6b64\u65e0\u6cd5\u5206\u4eab\u3002",
          "chatl.share.alert.max":
            "\u6700\u591a\u53ea\u80fd\u9009\u62e9%1\u4e2a\u804a\u5929\u3002",
          "chatl.share.toast.multiple.other":
            "\u6d88\u606f\u5df2\u5206\u4eab\u81f3%n\u4e2a\u804a\u5929\u3002",
          "chatl.share.toast.single": "\u5df2\u5206\u4eab\u7ed9%1\u3002",
          "chatl.sharetotalk.title": "\u5206\u4eab\u81f3",
          "chatlist.allinone.close.btn": "\u6536\u62e2\u804a\u5929",
          "chatlist.allinone.open.btn": "\u5c55\u5f00\u804a\u5929",
          "chatlist.btn.startchat": "\u5f00\u59cb\u804a\u5929",
          "chatlist.chooseChat.empty.btn": "\u5728\u8fd9\u91cc\u663e\u793a",
          "chatlist.chooseChat.empty.desc":
            "\u8be5\u804a\u5929\u76ee\u524d\u662f\u4ee5\u5355\u72ec\u7a97\u53e3\u663e\u793a\uff0c\n\u8981\u5728\u8fd9\u91cc\u663e\u793a\u804a\u5929\u5185\u5bb9\u5417\uff1f",
          "chatlist.context.menu.seperateChat.label":
            "\u4ee5\u5355\u72ec\u7a97\u53e3\u4e2d\u663e\u793a",
          "chatlist.guide.allinone.text":
            "\u5c55\u5f00\u6b64\u7a97\u53e3\u53ef\u5728\u53f3\u4fa7\u663e\u793a\u804a\u5929\u3002",
          "chatlist.guide.chatStart.text": "\u5f00\u59cb\u804a\u5929\uff01",
          "chatlist.hide.confirm":
            "\u9690\u85cf\u804a\u5929\u4e0d\u4f1a\u5220\u9664\u5176\u4fe1\u606f\u3002 ",
          "chatlist.keepmemo.desc.msg":
            "\u53d1\u9001\u4efb\u4f55\u60a8\u60f3\u8981\u4fdd\u5b58\u7684\u6587\u5b57\u3001\u7167\u7247\u3001\u89c6\u9891\u548c\u94fe\u63a5\u3002",
          "chatlist.keepmemo.desc.title": "Keep\u5907\u5fd8\u5f55",
          "chatlist.search.hint.chatList": "\u804a\u5929\u5ba4\u641c\u7d22",
          "chatlist.sort.unreadRoom":
            "\u663e\u793a\u672a\u8bfb\u7684\u804a\u5929\u5ba4",
          "chatlive.end.popup.done": "\u7ed3\u675f",
          "chatlive.error.notavailable":
            "\u53e6\u4e00\u4f4d\u6210\u5458\u5df2\u7ecf\u5f00\u59cb\u901a\u8bdd\u3002",
          "chatlive.maximum":
            "\u53c2\u4e0e\u4eba\u6570\u5df2\u8fbe\u4e0a\u9650\u3002",
          "chatlive.msg.over.traffic":
            "\u6b64\u65f6\u7684\u76f4\u64ad\u6d41\u91cf\u592a\u9ad8\u3002\n\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "chatlive.screen.share.ongoing.body":
            "\u6b63\u5728\u5171\u4eab\u60a8\u7684\u5c4f\u5e55\u3002",
          "chatlive.screen.share.ongoing.stop": "\u505c\u6b62",
          "chatlive.screen.share.ongoing.top":
            "\u6b63\u5728\u5171\u4eab\u81ea\u5df1\u7684\u5c4f\u5e55",
          "chatlive.screen.share.select.body":
            "\u60a8\u5c06\u5171\u4eab\u60a8\u7684\u7535\u8111\u5c4f\u5e55\u3002\u8bf7\u9009\u62e9\u60a8\u8981\u5171\u4eab\u7684\u5c4f\u5e55\u3002",
          "chatlive.screen.share.select.done": "\u5206\u4eab",
          "chatlive.screen.share.select.item": "\u5c4f\u5e55%1",
          "chatlive.screen.share.select.title":
            "\u9009\u62e9\u8981\u5171\u4eab\u7684\u5c4f\u5e55",
          "chatlive.viewer.list.title.other": "%n\u4e2a\u89c2\u4f17",
          "chatlive.viewer.list.title.plurals.other": "%n\u4e2a\u89c2\u4f17",
          "chatroom.guide.sticker.text":
            "\u4e30\u5bcc\u591a\u5f69\u7684\u8d34\u56fe\u8ba9\u804a\u5929\u66f4\u52a0\u6709\u8da3\uff01",
          "chatsettings.desc.membersjoinautomatically":
            "\u6210\u5458\u5728\u6536\u5230\u9080\u8bf7\u540e\u7acb\u5373\u88ab\u6dfb\u52a0\u81f3\u7fa4\u3002\u60a8\u53ef\u4ee5\u5173\u95ed\u6b64\u8bbe\u7f6e\uff0c\u4ec5\u5141\u8bb8\u63a5\u53d7\u9080\u8bf7\u7684\u6210\u5458\u52a0\u5165\u7fa4\u3002",
          "chatsettings.popup.desc.onewaywarning":
            "\u6b64\u8bbe\u7f6e\u5173\u95ed\u540e\u5c06\u65e0\u6cd5\u518d\u6b21\u5f00\u542f\u3002\u786e\u5b9a\u8981\u5173\u95ed\u5417\uff1f",
          "chatsettings.popup.title.onewaywarning":
            "\u6b64\u64cd\u4f5c\u65e0\u6cd5\u64a4\u9500",
          "chatsettings.title.membersjoinautomatically":
            "\u81ea\u52a8\u6dfb\u52a0\u6210\u5458",
          "choosefriends.button.createGroup": "\u5efa\u7acb\u7fa4",
          "choosefriends.button.gotochatsingle":
            "\u5efa\u7acb1\u5bf91\u804a\u5929",
          "choosefriends.button.invite": "\u9080\u8bf7",
          "choosefriends.title.default": "\u9009\u62e9\u597d\u53cb",
          "choosefriends.title.numselected": "\u5df2\u9009\u62e9%1\u9879",
          "chrome.common.toast.unabletocopy":
            "\u65e0\u6cd5\u590d\u5236\uff0c\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "chrome.setting.desc.notiforsp":
            "\u767b\u5f55Chrome\u7248\u5e94\u7528\u65f6\u5173\u95ed\u624b\u673a\u901a\u77e5\u3002",
          "chrome.time.desc.outofrangetime": "H:mm",
          "chrome.time.toast.outofrange":
            "\u65f6\u95f4\u5fc5\u987b\u65e9\u4e8e%1\u3002",
          "chrome.time.toast.outofrange2":
            "\u65f6\u95f4\u5fc5\u987b\u8bbe\u7f6e\u4e3a%1\u4ee5\u540e\u3002",
          "chrome.user.error.failedToBlock":
            "\u5f53\u524d\u65e0\u6cd5\u5c4f\u853d\u6b64\u5e10\u53f7\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "chrome.user.error.failedToDeclineGroupInvitation":
            "\u62d2\u7edd\u9080\u8bf7\u5931\u8d25\u3002",
          "chrome.user.error.failedToHide":
            "\u5f53\u524d\u65e0\u6cd5\u9690\u85cf\u6b64\u5e10\u53f7\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "chrome.user.error.failedToJoinGroup":
            "\u5f53\u524d\u65e0\u6cd5\u52a0\u5165\u6b64\u7fa4\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "chrome.user.error.failedToLeaveGroup":
            "\u9000\u7fa4\u5931\u8d25\u3002",
          "chrome.user.error.failedToMarkFavorite":
            "\u6dfb\u52a0\u81f3\u6536\u85cf\u5939\u5931\u8d25\u3002",
          "chrome.user.error.failedToShowUser":
            "\u5f53\u524d\u65e0\u6cd5\u53d6\u6d88\u9690\u85cf\u6b64\u5e10\u53f7\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "chrome.user.error.failedToUnblock":
            "\u65e0\u6cd5\u89e3\u9664\u5c4f\u853d\u5e10\u53f7\u3002",
          "common.album.empty.desc":
            "\u4f7f\u7528\u76f8\u518c\u5206\u4eab\u5f00\u6000\u65f6\u523b\u3002",
          "common.alert.errorcode": "\u9519\u8bef\u4ee3\u7801\uff1a%1",
          "common.alert.notsupported":
            "\u60a8\u76ee\u524d\u4f7f\u7528\u7684\u7248\u672c\u4e0d\u652f\u6301\u6b64\u529f\u80fd\u3002\n\u8bf7\u5347\u7ea7\u81f3\u6700\u65b0\u7248\u672c\u3002",
          "common.alert.unsend.content":
            "\u6b64\u5185\u5bb9\u5df2\u88ab\u64a4\u56de\u3002",
          "common.alert.unsend.multi.contents":
            "\u5df2\u64a4\u56de\u7684\u5185\u5bb9\u5c06\u88ab\u6392\u9664\u3002",
          "common.alert.unsupported.osversion":
            "\u5f53\u524d\u64cd\u4f5c\u7cfb\u7edf\u7248\u672c\u4e0d\u652f\u6301\u6b64\u529f\u80fd\u3002\u8bf7\u5c06\u64cd\u4f5c\u7cfb\u7edf\u5347\u7ea7\u81f3\u6700\u65b0\u7248\u672c\u3002",
          "common.alert.update.title": "\u5347\u7ea7",
          "common.alert.version.other":
            "\u5df2\u7ecf\u5728\u8fd0\u884c\u5176\u4ed6\u7248\u672c\u7684LINE\u3002",
          "common.am": "AM",
          "common.btn.back": "\u8fd4\u56de",
          "common.btn.cancel": "\u53d6\u6d88",
          "common.btn.capture.option":
            "\u622a\u56fe\u65f6\u9690\u85cf\u7a97\u53e3",
          "common.btn.capture.option.tooltip":
            "\u753b\u9762\u622a\u56fe\u9009\u9879",
          "common.btn.delete": "\u5220\u9664",
          "common.btn.discard": "\u79bb\u5f00",
          "common.btn.forward": "\u5206\u4eab",
          "common.btn.hide": "\u9690\u85cf",
          "common.btn.next": "\u4e0b\u4e00\u6b65",
          "common.btn.quit": "\u5173\u95edLINE",
          "common.btn.retry": "\u91cd\u8bd5",
          "common.btn.run": "\u9501\u5b9a",
          "common.btn.save": "\u4fdd\u5b58",
          "common.btn.seemore": "\u663e\u793a\u66f4\u591a",
          "common.btn.submit": "\u786e\u5b9a",
          "common.btn.unhide": "\u53d6\u6d88\u9690\u85cf",
          "common.cancel": "\u53d6\u6d88",
          "common.cancelalert.desc":
            "\u5982\u679c\u60a8\u79bb\u5f00\u6b64\u9875\u9762\uff0c\u60a8\u7684\u81ea\u5b9a\u4e49\u8bf4\u660e\u6587\u5b57\u5c06\u4e22\u5931\u3002\u786e\u5b9a\u8981\u79bb\u5f00\u5417\uff1f",
          "common.code.tooltip":
            "\u60a8\u53ef\u4ee5\u626b\u63cf\u56fe\u7247\u4e2d\u7684\u4e8c\u7ef4\u7801\u3002",
          "common.content.address.share.from.buddy":
            "%1\u5206\u4eab\u4e86\u597d\u53cb\u8054\u7cfb\u65b9\u5f0f\u3002",
          "common.content.address.share.from.me":
            "\u60a8\u53d1\u9001\u4e86\u4e00\u4e2a\u8054\u7cfb\u4eba\u3002",
          "common.content.applink.app.recv": "\u60a8\u5c06\u63a8\u8350%1\u3002",
          "common.content.applink.app.sent": "\u5df2\u63a8\u8350%1\u3002",
          "common.content.applink.friend.recv":
            "%1\u5185\u6709\u65b0\u7684\u597d\u53cb\u7533\u8bf7\u3002",
          "common.content.applink.friend.sent":
            "%1\u7684\u597d\u53cb\u7533\u8bf7\u5df2\u53d1\u9001\u3002",
          "common.content.audio":
            "%1\u53d1\u9001\u4e86\u8bed\u97f3\u6587\u4ef6\u3002",
          "common.content.audio.mine":
            "\u5df2\u6210\u529f\u53d1\u9001\u8bed\u97f3\u6587\u4ef6\u3002",
          "common.content.coupon.message.postfix":
            "\u8be5\u4fe1\u606f\u4ec5\u53ef\u901a\u8fc7LINE\u79fb\u52a8\u5ba2\u6237\u7aef\u67e5\u770b\u3002 ",
          "common.content.group.note.updated":
            "\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u8bb0\u4e8b\u672c\u3002",
          "common.content.group.note.updated.myself":
            "\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u8bb0\u4e8b\u672c\u3002",
          "common.content.groupboard.from.buddy":
            "%1\u66f4\u65b0\u4e86\u7fa4\u7559\u8a00\u677f\u3002",
          "common.content.groupboard.from.me":
            "\u7fa4\u7559\u8a00\u677f\u6709\u66f4\u65b0\u3002",
          "common.content.home.shared":
            "\u5206\u4eab\u4e86%1\u7684\u5e16\u5b50\u3002",
          "common.content.home.shared.myself":
            "\u5206\u4eab\u4e86%1\u7684\u5e16\u5b50\u3002",
          "common.content.image": "%1\u53d1\u9001\u4e86\u56fe\u7247\u3002",
          "common.content.image.mine": "\u53d1\u9001\u4e86\u56fe\u7247\u3002",
          "common.content.invite": '\u60a8\u88ab\u9080\u8bf7\u52a0\u5165"%1"',
          "common.content.location.from.buddy":
            "%1\u53d1\u6765\u4e86\u4f4d\u7f6e\u4fe1\u606f",
          "common.content.location.from.me":
            "\u6210\u529f\u53d1\u9001\u4f4d\u7f6e\u4fe1\u606f\u3002",
          "common.content.mantoman.note.newpost":
            "\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u8bb0\u4e8b\u672c\u3002",
          "common.content.mantoman.note.newpost.myself":
            "\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u8bb0\u4e8b\u672c\u3002",
          "common.content.normal": "\u4f20\u6765\u7684\u4fe1\u606f",
          "common.content.pdf": "%1 \u53d1\u9001\u4e86PDF\u6587\u4ef6\u3002",
          "common.content.pdf.mine": "\u5df2\u53d1\u9001PDF\u6587\u4ef6\u3002",
          "common.content.presence.join":
            "%1\u52a0\u5165\u4e86\u804a\u5929\u3002",
          "common.content.presence.join.multiple.plurals.few":
            "\u9664\u4e86%1\u4ee5\u5916\uff0c\u8fd8\u6709%n\u4eba\u6b63\u53c2\u4e0e\u804a\u5929\u3002",
          "common.content.presence.join.multiple.plurals.many":
            "\u9664\u4e86%1\u4ee5\u5916\uff0c\u8fd8\u6709%n\u4eba\u6b63\u53c2\u4e0e\u804a\u5929\u3002",
          "common.content.presence.join.multiple.plurals.one":
            "\u9664\u4e86%1\u4ee5\u5916\uff0c\u8fd8\u6709%n\u4eba\u6b63\u53c2\u4e0e\u804a\u5929\u3002",
          "common.content.presence.join.multiple.plurals.other":
            "\u9664\u4e86%1\u4ee5\u5916\uff0c\u8fd8\u6709%n\u4eba\u6b63\u53c2\u4e0e\u804a\u5929\u3002",
          "common.content.presence.join.multiple.plurals.two":
            "\u9664\u4e86%1\u4ee5\u5916\uff0c\u8fd8\u6709%n\u4eba\u6b63\u53c2\u4e0e\u804a\u5929\u3002",
          "common.content.presence.join.multiple.plurals.zero":
            "\u9664\u4e86%1\u4ee5\u5916\uff0c\u8fd8\u6709%n\u4eba\u6b63\u53c2\u4e0e\u804a\u5929\u3002",
          "common.content.presence.leave":
            "%1\u5df2\u9000\u51fa\u804a\u5929\u3002",
          "common.content.sticker": "%1\u53d1\u9001\u4e86\u8d34\u56fe\u3002",
          "common.content.sticker.gift.from.buddy":
            "%1\u9001\u6765\u4e86\u793c\u7269\u3002",
          "common.content.sticker.gift.from.me":
            "\u793c\u7269\u5df2\u7ecf\u8d60\u9001",
          "common.content.sticker.mine":
            "\u6210\u529f\u53d1\u9001\u8d34\u56fe\u3002",
          "common.content.theme.gift.from.buddy":
            "%1\u9001\u6765\u4e86\u793c\u7269\u3002",
          "common.content.theme.gift.from.me":
            "\u793c\u7269\u5df2\u7ecf\u8d60\u9001",
          "common.content.timeline.post":
            "\u70b9\u51fb\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u67e5\u770b\u5e16\u5b50\u3002",
          "common.content.video":
            "%1\u53d1\u9001\u4e86\u89c6\u9891\u6587\u4ef6\u3002",
          "common.content.video.mine":
            "\u89c6\u9891\u6587\u4ef6\u5df2\u53d1\u9001\u3002",
          "common.continue": "\u7ee7\u7eed",
          "common.country.name.ae": "United Arab Emirates",
          "common.country.name.at": "Austria",
          "common.country.name.au": "Australia",
          "common.country.name.bd": "Bangladesh",
          "common.country.name.be": "Belgium",
          "common.country.name.bg": "Bulgaria",
          "common.country.name.br": "Brazil",
          "common.country.name.ca": "Canada",
          "common.country.name.ch": "Switzerland",
          "common.country.name.cn": "China",
          "common.country.name.cy": "Cyprus",
          "common.country.name.cz": "Czech Republic",
          "common.country.name.de": "Germany",
          "common.country.name.dk": "Denmark",
          "common.country.name.ee": "Estonia",
          "common.country.name.es": "Spain",
          "common.country.name.fi": "Finland",
          "common.country.name.fr": "France",
          "common.country.name.gb": "United Kingdom",
          "common.country.name.gr": "Greece",
          "common.country.name.hk": "Hong Kong",
          "common.country.name.hr": "Croatia",
          "common.country.name.ht": "Haiti",
          "common.country.name.hu": "Hungary",
          "common.country.name.id": "Indonesia",
          "common.country.name.ie": "Ireland",
          "common.country.name.il": "Israel",
          "common.country.name.in": "India",
          "common.country.name.ir": "Iran",
          "common.country.name.is": "Iceland",
          "common.country.name.it": "Italy",
          "common.country.name.jp": "Japan",
          "common.country.name.kg": "Kyrgyzstan",
          "common.country.name.kh": "Cambodia",
          "common.country.name.kr": "South Korea",
          "common.country.name.kz": "Kazakhstan",
          "common.country.name.la": "Laos",
          "common.country.name.li": "Liechtenstein",
          "common.country.name.lk": "Sri Lanka",
          "common.country.name.lt": "Lithuania",
          "common.country.name.lu": "Luxembourg",
          "common.country.name.lv": "Latvia",
          "common.country.name.ma": "Morocco",
          "common.country.name.mm": "Myanmar",
          "common.country.name.mt": "Malta",
          "common.country.name.mx": "Mexico",
          "common.country.name.my": "Malaysia",
          "common.country.name.ng": "Nigeria",
          "common.country.name.nl": "Netherlands",
          "common.country.name.no": "Norway",
          "common.country.name.nz": "New Zealand",
          "common.country.name.om": "Oman",
          "common.country.name.ph": "Philippines",
          "common.country.name.pl": "Poland",
          "common.country.name.pt": "Portugal",
          "common.country.name.qa": "Qatar",
          "common.country.name.ro": "Romania",
          "common.country.name.ru": "Russia",
          "common.country.name.sa": "Saudi Arabia",
          "common.country.name.se": "Sweden",
          "common.country.name.sg": "Singapore",
          "common.country.name.si": "Slovenia",
          "common.country.name.sk": "Slovakia",
          "common.country.name.th": "Thailand",
          "common.country.name.tr": "Turkey",
          "common.country.name.tt": "Trinidad and Tobago",
          "common.country.name.tw": "Taiwan",
          "common.country.name.ua": "Ukraine",
          "common.country.name.us": "United States",
          "common.country.name.vn": "Vietnam",
          "common.country.name.za": "South Africa",
          "common.country.other": "Other",
          "common.countryregion": "Country or region",
          "common.date.format.short": "M\u6708d\u65e5",
          "common.delete": "\u5220\u9664",
          "common.desc.macupdate":
            "\u66f4\u65b0Mac\u64cd\u4f5c\u7cfb\u7edf\u540e\u5373\u53ef\u4f7f\u7528\u3002",
          "common.desc.temporary.error":
            "\u7cfb\u7edf\u53d1\u751f\u9519\u8bef\u3002",
          "common.error.image.scan":
            "\u65e0\u6cd5\u8bc6\u522b\u5df2\u8fc7\u671f\u7684\u56fe\u7247\u3002",
          "common.error.ocr.failed":
            "\u65e0\u6cd5\u8bc6\u522b\u6587\u5b57\u3002\u8bf7\u9009\u62e9\u5176\u4ed6\u8bed\u8a00\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "common.error.ocr.unknown":
            "\u65e0\u6cd5\u8f6c\u6362\u56fe\u7247\u3002",
          "common.error.translation.failed":
            "\u65e0\u6cd5\u7ffb\u8bd1\u6587\u5b57\u3002\u8bf7\u7f16\u8f91\u6587\u5b57\u6216\u8bbe\u4e3a\u5176\u4ed6\u8bed\u8a00\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "common.friday": "\u661f\u671f\u4e94",
          "common.friday.short": "\u5468\u4e94",
          "common.label.auto.slang": "\u68c0\u6d4b\u8bed\u8a00",
          "common.label.code": "\u626b\u63cf\u4e8c\u7ef4\u7801",
          "common.label.copy": "\u590d\u5236",
          "common.label.cut": "\u526a\u5207",
          "common.label.date": "\u65e5\u671f",
          "common.label.delete": "\u5220\u9664",
          "common.label.file": "\u6587\u4ef6",
          "common.label.lang.ar": "\u963f\u62c9\u4f2f\u8bed",
          "common.label.lang.de": "\u5fb7\u8bed",
          "common.label.lang.en": "\u82f1\u8bed",
          "common.label.lang.es": "\u897f\u73ed\u7259\u8bed",
          "common.label.lang.fa": "\u6ce2\u65af\u8bed",
          "common.label.lang.hi": "\u5370\u5730\u8bed",
          "common.label.lang.id": "\u5370\u5c3c\u8bed",
          "common.label.lang.ja": "\u65e5\u8bed",
          "common.label.lang.ko": "\u97e9\u8bed",
          "common.label.lang.my": "\u7f05\u7538\u8bed",
          "common.label.lang.pt": "\u8461\u8404\u7259\u8bed",
          "common.label.lang.ru": "\u4fc4\u8bed",
          "common.label.lang.th": "\u6cf0\u8bed",
          "common.label.lang.vi": "\u8d8a\u5357\u8bed",
          "common.label.lang.zhcn": "\u4e2d\u6587\uff08\u7b80\u4f53\uff09",
          "common.label.lang.zhtw": "\u4e2d\u6587\uff08\u7e41\u4f53\uff09",
          "common.label.moveURL": "\u8f6c\u81f3\u7f51\u5740",
          "common.label.ocr": "\u6587\u5b57\u8bc6\u522b",
          "common.label.ocrlang": "\u5df2\u8f6c\u6362",
          "common.label.paste": "\u7c98\u8d34",
          "common.label.redo": "\u6062\u590d",
          "common.label.selectAll": "\u5168\u9009",
          "common.label.slang": "\u539f\u56fe",
          "common.label.text.placeholder":
            "\u8bf7\u8f93\u5165\u4e0a\u9762\u7684\u5185\u5bb9",
          "common.label.time": "\u65f6\u95f4",
          "common.label.tlang": "\u5df2\u7ffb\u8bd1",
          "common.label.undo": "\u64a4\u9500",
          "common.license.disagree": "\u4e0d\u540c\u610f",
          "common.license.filename": "chrome://license/SimpChinese.rtf",
          "common.license.title": "\u670d\u52a1\u6761\u6b3e",
          "common.lineUrltoQR.alert.desc1":
            "\u6b64\u529f\u80fd\u5728\u624b\u673a\u7248LINE\u4e0a\u53ef\u7528",
          "common.lineUrltoQR.alert.desc2":
            "\u901a\u8fc7\u624b\u673a\u7248LINE\u626b\u63cf\u4e0b\u65b9\u4e8c\u7ef4\u7801\uff0c\u5e76\u4f7f\u7528\u6b64\u529f\u80fd\u3002",
          "common.loading": "\u8bfb\u53d6\u4e2d\u2026",
          "common.loading.splash": "\u6b63\u5728\u6253\u5f00LINE...",
          "common.mac.upgrader.title": "LINE\u5347\u7ea7\u5185\u5bb9",
          "common.menu.copyToClipboard": "\u590d\u5236\u5230\u526a\u8d34\u677f",
          "common.menu.delete": "\u5220\u9664",
          "common.menu.forward": "\u5206\u4eab",
          "common.menu.reply": "\u56de\u590d",
          "common.menu.saveAs": "\u4fee\u6539\u540d\u79f0\u540e\u4fdd\u5b58",
          "common.monday": "\u661f\u671f\u4e00",
          "common.monday.short": "\u5468\u4e00",
          "common.msg.already.new.version": "\u6700\u65b0\u7248\u672c",
          "common.msg.bot.openapi":
            "%1\u7531%2.\u8d1f\u8d23\u7ba1\u7406\u3002\n\u8bf7\u8bbf\u95ee\u4ee5\u4e0b\u94fe\u63a5\uff0c\u8be6\u7ec6\u4e86\u89e3\u5982\u4f55\u5904\u7406LY Corporation\u4ee5\u53ca\u60a8\u5411\u5e10\u53f7\u7ba1\u7406\u5458\u63d0\u4f9b\u7684\u4efb\u4f55\u4e2a\u4eba\u4fe1\u606f\u3002",
          "common.msg.bot.openapi.agree": "\u540c\u610f",
          "common.msg.bot.openapi.link": "http://me2.do/F8jrUrld",
          "common.msg.bot.openapi.title":
            "\u540c\u610f\u63d0\u4f9b\u4e2a\u4eba\u4fe1\u606f",
          "common.msg.checking.version": "\u5347\u7ea7\u51c6\u5907\u4e2d\u2026",
          "common.msg.db.optimize":
            "\u4f18\u5316\u60a8\u7684LINE\u5e94\u7528\n\u4ee5\u83b7\u53d6\u66f4\u4f73\u6027\u80fd\u2026\n\u8bf7\u7a0d\u5019\u3002",
          "common.msg.db.optimize.complete": "\u4f18\u5316\u5b8c\u6210\u3002",
          "common.msg.db.optimize.error":
            "\u7531\u4e8e\u51fa\u73b0\u4e34\u65f6\u9519\u8bef\uff0c\n\u65e0\u6cd5\u5b8c\u6210\u4f18\u5316\u3002\nLINE\u5373\u5c06\u91cd\u542f\u3002",
          "common.msg.favorite.exceeded":
            "\u6536\u85cf\u5939\u4e2d\u6700\u591a\u53ef\u4ee5\u6dfb\u52a0100\u6761\u3002",
          "common.msg.has.new.version": "\u6709\u65b0\u7248\u672c\u3002",
          "common.msg.has.new.version.alert":
            "\u6709\u65b0\u7248\u672c\u3002\n\u60a8\u8981\u5347\u7ea7\u5417\uff1f ",
          "common.msg.invitation.overflow":
            "\u60a8\u6700\u591a\u53ea\u53ef\u9080\u8bf7%1\u4eba\u3002",
          "common.msg.license.opensource": "\u8457\u4f5c\u6743\u58f0\u660e",
          "common.msg.sticker.need.mobile.download":
            "\u8981\u4f7f\u7528\u514d\u8d39\u8d34\u56fe\uff0c\u9700\u5148\u5728\u79fb\u52a8\u8bbe\u5907\u4e0a\u4e0b\u8f7d\u8fd9\u4e9b\u8d34\u56fe\u3002\n\u8bf7\u524d\u5f80\u201c\u8bbe\u7f6e\u201d>\u201c\u8d34\u56fe\u201d>\u201c\u6211\u7684\u8d34\u56fe\u201d\u6216\u201c\u8d34\u56fe\u5546\u5e97\u201d>\u201c\u514d\u8d39\u201d\u4e0b\u8f7d\u8d34\u56fe\u3002",
          "common.msg.terms":
            "\u7535\u8111\u8f6f\u4ef6\u4f7f\u7528\u6761\u6b3e\u4e0e\u6761\u4ef6",
          "common.msg.update.button.label": "\u7acb\u5373\u66f4\u65b0",
          "common.msg.update.button.label.mac": "\u524d\u5f80App Store",
          "common.msg.warning.autoLogin":
            "\u60a8\u5728\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u65f6\u5c06\u4f1a\u81ea\u52a8\u767b\u5f55\u3002\n\u4e3a\u4e86\u4fdd\u62a4\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u5b89\u5168\uff0c\u8bf7\u53ea\u5728\u81ea\u5df1\u7684\u7535\u8111\u4e0a\u4f7f\u7528\u6b64\u529f\u80fd\u3002",
          "common.name.postfix": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.note.empty.desc":
            "\u4f7f\u7528\u8bb0\u4e8b\u672c\u8bb0\u5f55\u548c\u5206\u4eab\u91cd\u8981\u4fe1\u606f\u3002",
          "common.notice.dontremind": "\u4e0d\u518d\u663e\u793a",
          "common.notice.label.close": "\u5173\u95ed",
          "common.notice.meta.url": "line_desktop_notice/ZH/1785",
          "common.notice.meta.url.mac": "line_desktop_notice_mac/EN/1787",
          "common.notice.title": "\u901a\u77e5",
          "common.ocr.agree.desc":
            "\u4f7f\u7528\u6b64\u529f\u80fd\u65f6\uff0c\u60a8\u7684\u7167\u7247\u5c06\u88ab\u53d1\u9001\u81f3\u672c\u516c\u53f8\u7684\u670d\u52a1\u5668\u3002\u662f\u5426\u540c\u610f\u6b64\u529f\u80fd\u5411LY Corporation\u53d1\u9001\u7167\u7247\uff1f",
          "common.ocr.agree.title": "\u540c\u610f\u63d0\u4f9b\u7167\u7247",
          "common.ocr.mlstatus.off":
            "\u60a8\u5c1a\u672a\u540c\u610f\u63d0\u4f9b\u56fe\u7247\u5e2e\u52a9\u6211\u4eec\u6539\u8fdb\u670d\u52a1\u3002\u60a8\u53ef\u4ee5\u5728\u624b\u673a\u7248LINE\u4e0a\u66f4\u6539\u60a8\u7684\u540c\u610f\u72b6\u6001\u3002",
          "common.ocr.mlstatus.on":
            "\u5982\u679c\u60a8\u540c\u610f\u63d0\u4f9b\u56fe\u7247\u5e2e\u52a9\u6211\u4eec\u6539\u8fdb\u670d\u52a1\uff0c\u5c31\u4f1a\u7a81\u51fa\u663e\u793a\u6b64\u56fe\u6807\u3002\u60a8\u53ef\u4ee5\u5728\u624b\u673a\u7248LINE\u4e0a\u66f4\u6539\u60a8\u7684\u540c\u610f\u72b6\u6001\u3002",
          "common.ocr.tooltip":
            "\u8bd5\u7528\u5b9e\u65f6\u7ffb\u8bd1\u529f\u80fd\uff01",
          "common.ocrlang.tooltip":
            "\u9009\u62e9\u60a8\u8981\u5c06\u56fe\u7247\u8f6c\u6362\u4e3a\u4f55\u79cd\u8bed\u8a00\u3002",
          "common.off": "OFF",
          "common.on": "ON",
          "common.picture.popup.saveImageError":
            "\u65e0\u6cd5\u4fdd\u5b58\u56fe\u7247\u3002",
          "common.picture.popup.showImageError":
            "\u65e0\u6cd5\u8bfb\u53d6\u56fe\u7247\u3002",
          "common.pm": "PM",
          "common.popup.force.update":
            "\u6709\u9700\u8981\u66f4\u65b0\u7684\u5185\u5bb9\u3002 \n\u8bf7\u60a8\u66f4\u65b0\u540e\u518d\u4f7f\u7528\u3002",
          "common.popup.force.update.confirm":
            "\u5347\u7ea7\u540e\uff0cLINE\u5373\u53ef\u4f7f\u7528\u3002",
          "common.popup.force.update.inapp":
            "\u6709\u9700\u8981\u66f4\u65b0\u7684\u5185\u5bb9\u3002\n\u8bf7\u60a8\u66f4\u65b0\u540e\u518d\u4f7f\u7528\u3002",
          "common.popup.force.update.later":
            "1\u5c0f\u65f6\u540e\u63d0\u9192\u3002",
          "common.popup.queryUpgrade":
            "\u6709\u65b0\u7248\u672c\u3002\n\u60a8\u8981\u5347\u7ea7\u5417\uff1f ",
          "common.popup.sendkey.msg.mac":
            "\u5982\u679c\u60a8\u62c5\u5fc3\u53ea\u6309Enter\u952e\u4f1a\u8bef\u53d1\u4fe1\u606f\u60a8\u53ef\u4ee5\u66f4\u6539\u4e3aCommand+Enter\u952e\u53d1\u9001\u3002",
          "common.popup.sendkey.msg.win":
            "\u5982\u679c\u60a8\u62c5\u5fc3\u53ea\u6309Enter\u952e\u4f1a\u8bef\u53d1\u4fe1\u606f\u60a8\u53ef\u4ee5\u66f4\u6539\u4e3aAlt+Enter\u952e\u53d1\u9001\u3002",
          "common.popup.serverAPI.error.update":
            "LINE\u9700\u8981\u66f4\u65b0\u3002\n\u662f\u5426\u7acb\u5373\u66f4\u65b0\uff1f",
          "common.prepare.service":
            "\u82e5\u60a8\u5df2\u7ecf\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\uff0c\n\u8868\u793a\u672c\u9875\u5c1a\u5728\u5efa\u8bbe\u4e2d\uff0c\u656c\u8bf7\u671f\u5f85\u3002",
          "common.push.mac.versionUpdate":
            "\u8bf7\u5c06LINE\u5e94\u7528\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u3002",
          "common.report.done": "\u5df2\u4e3e\u62a5",
          "common.report.reason.desc":
            "\u8bf7\u9009\u62e9\u60a8\u4e3e\u62a5\u8be5\u7528\u6237\u7684\u7406\u7531",
          "common.request.error":
            "\u65e0\u6cd5\u6b63\u5e38\u5904\u7406\u3002\n\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002",
          "common.saturday": "\u661f\u671f\u516d",
          "common.saturday.short": "\u5468\u516d",
          "common.search.error.length":
            "\u81f3\u5c11\u8981\u8f93\u51652\u4e2a\u5b57\u7b26\u3002",
          "common.search.invalidtext":
            "\u5173\u952e\u5b57\u4e0d\u80fd\u5305\u542b\u4efb\u4f55\u7279\u6b8a\u5b57\u7b26\u3002\u8bf7\u8f93\u5165\u5176\u4ed6\u5173\u952e\u5b57\u3002",
          "common.seeall": "\u663e\u793a\u5168\u90e8",
          "common.share.url.copied": "\u5df2\u590d\u5236\u94fe\u63a5\u3002",
          "common.sunday": "\u661f\u671f\u65e5",
          "common.sunday.short": "\u5468\u65e5",
          "common.thursday": "\u661f\u671f\u56db",
          "common.thursday.short": "\u5468\u56db",
          "common.time.format": "%1 h:mm",
          "common.toast.album.delete": "\u76f8\u518c\u5df2\u5220\u9664\u3002",
          "common.toast.album.rename":
            "\u76f8\u518c\u540d\u79f0\u5df2\u66f4\u6539\u3002",
          "common.toast.albumCreated":
            "\u65b0\u76f8\u518c\u5df2\u521b\u5efa \u3002 ",
          "common.toast.audio":
            "\u8bed\u97f3\u6587\u4ef6\u5df2\u53d1\u9001\u3002",
          "common.toast.chatevent.unknown":
            "\u65e0\u6cd5\u67e5\u770b\u8be5\u63d0\u9192\u3002",
          "common.toast.contact":
            "\u5df2\u5206\u4eab\u8054\u7cfb\u65b9\u5f0f\u3002",
          "common.toast.file": "\u6587\u4ef6\u5df2\u53d1\u9001\u3002",
          "common.toast.gift": "\u793c\u7269\u5df2\u7ecf\u8d60\u9001",
          "common.toast.image": "\u56fe\u7247\u5df2\u53d1\u9001\u3002",
          "common.toast.inviteGroup":
            "\u60a8\u6536\u5230\u4e86\u7fa4\u9080\u8bf7\u3002",
          "common.toast.label.newMessage":
            "\u60a8\u6709\u4e00\u6761\u65b0\u4fe1\u606f\u3002",
          "common.toast.linemusic": "\u5df2\u5206\u4eab\u97f3\u4e50",
          "common.toast.location": "",
          "common.toast.note":
            "\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u8bb0\u4e8b\u672c\u3002",
          "common.toast.receiverequest":
            "\u6c47\u6b3e\u7533\u8bf7\u6b63\u5728\u7b49\u5f85\u5904\u7406\u3002",
          "common.toast.sticker": "\u8d34\u56fe\u5df2\u53d1\u9001\u3002",
          "common.toast.timeline.group.invite":
            "\u60a8\u6536\u5230\u4e86\u7fa4\u9080\u8bf7\u3002",
          "common.toast.timeline.new.comment": "\u7acb\u5373\u67e5\u770b\u3002",
          "common.toast.timeline.new.mention": "\u8bc4\u8bba\u4e86\u6211\u3002",
          "common.toast.timeline.new.post":
            "\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u8bb0\u4e8b\u672c\u3002",
          "common.toast.timeline.new.sticker": "\u7acb\u5373\u67e5\u770b\u3002",
          "common.toast.timeline.title.comment": "%1\u7684\u8bc4\u8bba",
          "common.toast.timeline.title.like":
            "%1\u7684\u70b9\u201c\u8d5e\uff01\u201d",
          "common.toast.timeline.title.recomment":
            "%1\u7684\u8bc4\u8bba\u56de\u590d",
          "common.toast.video": "\u89c6\u9891\u5df2\u53d1\u9001\u3002",
          "common.toast.voip.call": "\u5e94\u7b54",
          "common.toast.voip.call.msg": "\u7684\u6765\u7535",
          "common.toast.voip.refuse": "\u62d2\u7edd",
          "common.today": "\u4eca\u5929",
          "common.translation.apply.alert":
            "\u60a8\u6700\u591a\u53ef\u4ee5\u7ffb\u8bd15,000\u4e2a\u539f\u6587\u6587\u5b57\u3002 ",
          "common.translation.apply.imagedirect":
            "\u5728\u7167\u7247\u4e2d\u663e\u793a\u7ffb\u8bd1",
          "common.translation.imagedirect.failed":
            "\u53d1\u751f\u4e34\u65f6\u9519\u8bef\uff0c\u8bf7\u66f4\u6539\u8bed\u8a00\u5bf9\u6216\u7a0d\u540e\u518d\u8bd5\u3002",
          "common.translation.imagedirect.tooltip":
            "\u542f\u7528\u6b64\u529f\u80fd\u53ef\u5b9e\u65f6\u7ffb\u8bd1\u6587\u672c\u5e76\u5728\u7167\u7247\u4e2d\u663e\u793a\u8bd1\u6587\u3002",
          "common.tuesday": "\u661f\u671f\u4e8c",
          "common.tuesday.short": "\u5468\u4e8c",
          "common.unsupported.version.message":
            "\u60a8\u76ee\u524d\u4f7f\u7528\u7684\u7248\u672c\u4e0d\u652f\u6301\u6b64\u529f\u80fd\u3002\n\u8bf7\u5347\u7ea7\u81f3\u6700\u65b0\u7248\u672c\u3002",
          "common.update.popup.win10":
            "\u8bf7\u5c06LINE\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u3002",
          "common.updater": "\u7acb\u5373\u66f4\u65b0",
          "common.updater.autoUpdate": "\u81ea\u52a8\u66f4\u65b0",
          "common.updater.autoUpdate.apply":
            "<![CDATA[\u8981\u5c06LINE\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u5417\uff1f\n<font color='#9e9e9e'>\u66f4\u65b0\u540e\u5c06\u91cd\u65b0\u542f\u52a8LINE\u3002\n</font>]]>",
          "common.updater.forceUpdate.apply":
            "\u6709\u65b0\u7248\u672c\u7684LINE\u53ef\u4f9b\u4f7f\u7528\u3002\n\u5982\u679c\u60a8\u9009\u62e9\u201c\u786e\u5b9a\u201d\uff0cLINE\u5c06\u91cd\u65b0\u542f\u52a8\u3002",
          "common.updater.newVersion.confirm":
            "\u60a8\u7684LINE\u5df2\u7ecf\u662f\u6700\u65b0\u7248\u672c\u3002",
          "common.updater.newVersion.download.apply":
            "<![CDATA[\u4e0b\u8f7d\u5b8c\u6210\u3002\n\u60a8\u8981\u73b0\u5728\u5b89\u88c5\u5417\uff1f\n<font color='#9e9e9e'>\u5982\u679c\u60a8\u9009\u62e9\u201c\u786e\u5b9a\u201d\uff0cLINE\u5c06\u91cd\u65b0\u542f\u52a8\u3002</font>]]>",
          "common.updater.newVersion.downloading":
            "\u6b63\u5728\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684LINE\u2026\n\u8bf7\u7a0d\u5019\u3002",
          "common.updater.newVersion.incompleted":
            "\u5df2\u6682\u65f6\u505c\u6b62\u5347\u7ea7\u3002\n\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "common.updater.newVersion.low.hardDisk":
            "\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u3002\n\u8bf7\u91ca\u653e\u90e8\u5206\u7a7a\u95f4\uff0c\n\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "common.updater.notice.description":
            "\u672c\u6b21\u66f4\u65b0\u5185\u5bb9",
          "common.updater.notice.history":
            "\u66f4\u65b0\u5386\u53f2\u8bb0\u5f55",
          "common.updater.notice.title": "\u66f4\u65b0",
          "common.updater.notice.updated":
            "\u6700\u65b0\u7248\u672c\u73b0\u5df2\u63a8\u51fa",
          "common.wednesday": "\u661f\u671f\u4e09",
          "common.wednesday.short": "\u5468\u4e09",
          "common.yearMonth.format": "yyyy\u5e74M\u6708",
          "common.yesterday": "\u6628\u5929",
          "creategroup.button.create": "\u5efa\u7acb",
          "creategroup.checkbox.desc.membersjoinautomatically":
            "\u6210\u5458\u5728\u6536\u5230\u9080\u8bf7\u540e\u7acb\u5373\u88ab\u6dfb\u52a0\u81f3\u7fa4\u3002\u60a8\u53ef\u4ee5\u5173\u95ed\u6b64\u8bbe\u7f6e\uff0c\u4ec5\u5141\u8bb8\u63a5\u53d7\u9080\u8bf7\u7684\u6210\u5458\u52a0\u5165\u7fa4\u3002",
          "creategroup.checkbox.title.membersjoinautomatically":
            "\u81ea\u52a8\u6dfb\u52a0\u6210\u5458",
          "creategroup.label.membercount": "\u6210\u5458",
          "creategroup.placeholder.entergroupname":
            "\u8f93\u5165\u7fa4\u540d\u79f0",
          "creategroup.placerholder.defaultname.autojoinoff": "%1\u7684\u7fa4",
          "creategroup.popup.desc.100memberswarning":
            "\u6210\u5458\u65e0\u6cd5\u81ea\u52a8\u6dfb\u52a0\u81f3\u4eba\u6570\u8d85\u8fc7100\u4eba\u7684\u7fa4\u3002\u65b0\u6210\u5458\u5fc5\u987b\u5148\u63a5\u53d7\u9080\u8bf7\u624d\u80fd\u52a0\u5165\u7fa4\u3002\n\u5982\u8981\u8ba9\u6210\u5458\u81ea\u52a8\u6dfb\u52a0\u81f3\u7fa4\uff0c\u8bf7\u5c06\u7fa4\u6210\u5458\u7684\u4eba\u6570\u4e0a\u9650\u8bbe\u7f6e\u5728100\u4eba\u4ee5\u5185\u3002",
          "creategroup.popup.desc.invitelocked":
            "\u5982\u8981\u5173\u95ed\u6b64\u8bbe\u7f6e\uff0c\u8bf7\u5c06\u7fa4\u6210\u5458\u7684\u4eba\u6570\u4e0a\u9650\u8bbe\u7f6e\u5728100\u4eba\u4ee5\u5185\u3002",
          "creategroup.popup.desc.inviteonwarning":
            "\u6210\u5458\u4eba\u6570\u8d85\u8fc7100\u4eba\u7684\u7fa4\u5c06\u4f1a\u81ea\u52a8\u5f00\u542f\u201c\u6536\u5230\u9080\u8bf7\u624d\u80fd\u52a0\u5165\u201d\u7684\u8bbe\u7f6e\u3002\n\u5982\u8981\u5173\u95ed\u6b64\u8bbe\u7f6e\uff0c\u8bf7\u5c06\u7fa4\u6210\u5458\u7684\u4eba\u6570\u4e0a\u9650\u8bbe\u7f6e\u5728100\u4eba\u4ee5\u5185\u3002",
          "creategroup.popup.desc.toomanygroups":
            "\u60a8\u7684LINE\u7fa4\u6570\u91cf\u5df2\u8fbe\u4e0a\u9650\u3002\u60f3\u8981\u521b\u5efa\u65b0\u7fa4\uff0c\u8bf7\u5148\u9000\u51fa\u4e00\u4e2a\u8f83\u65e9\u5efa\u7acb\u7684\u7fa4\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "creategroup.popup.title.100memberswarning":
            "\u65e0\u6cd5\u81ea\u52a8\u6dfb\u52a0\u6210\u5458",
          "creategroup.popup.title.invitelocked":
            "\u9080\u8bf7\u8bbe\u7f6e\u5df2\u9501\u5b9a",
          "creategroup.popup.title.inviteonwarning":
            "\u5f00\u542f\u201c\u6536\u5230\u9080\u8bf7\u624d\u80fd\u52a0\u5165\u201d\u7684\u8bbe\u7f6e",
          "creategroup.popup.title.toomanygroups":
            "\u7fa4\u6570\u91cf\u5df2\u8fbe\u4e0a\u9650",
          "creategroup.popup.title.toomanymembers":
            "\u51cf\u5c11\u7fa4\u6210\u5458\u4eba\u6570",
          "creategroup.title.setupProfile": "\u8bbe\u7f6e\u7fa4\u8d44\u6599",
          "creategroup.toggle.desc.requireinvite":
            "\u5f00\u542f\u6b64\u8bbe\u7f6e\u540e\uff0c\u53ea\u6709\u6536\u5230\u9080\u8bf7\u7684\u597d\u53cb\u624d\u80fd\u52a0\u5165\u8be5\u7fa4\u3002\u6b64\u8bbe\u7f6e\u5728\u7fa4\u521b\u5efa\u5b8c\u6210\u540e\u5373\u65e0\u6cd5\u5173\u95ed\u3002",
          "creategroup.toggle.title.requireinvite":
            "\u6536\u5230\u9080\u8bf7\u624d\u80fd\u52a0\u5165",
          "creategroup.tooltip.groupname":
            "\u8bf7\u8f93\u5165\u6613\u4e8e\u597d\u53cb\u4eec\u7406\u89e3\u7684\u7fa4\u540d\u79f0\u3002",
          "creategrouppopup.desc.toomanymembers":
            "\u5982\u8981\u81ea\u52a8\u6dfb\u52a0\u6210\u5458\u81f3\u7fa4\uff0c\u8bf7\u5c06\u7fa4\u6210\u5458\u7684\u4eba\u6570\u4e0a\u9650\u8bbe\u7f6e\u5728100\u4eba\u4ee5\u5185\u3002",
          "deletedata.chatHisotry.all.desc.confirm":
            "\u8981\u5220\u9664\u6240\u6709\u8bbe\u5907\u4e0a\u7684\u5168\u90e8\u804a\u5929\u8bb0\u5f55\u5417\uff1f\u5220\u9664\u804a\u5929\u8bb0\u5f55\u540e\u5c06\u65e0\u6cd5\u6062\u590d\u3002",
          "deletedata.chatHisotry.onlypc.desc.confirm":
            "\u8981\u5220\u9664\u6b64\u8bbe\u5907\u4e0a\u7684\u5168\u90e8\u804a\u5929\u8bb0\u5f55\u5417\uff1f\u5220\u9664\u804a\u5929\u8bb0\u5f55\u540e\u5c06\u65e0\u6cd5\u6062\u590d\u3002 ",
          "desktop.addchatfolder.button.add": "\u521b\u5efa",
          "desktop.addchatfolder.placeholder.entername":
            "\u8f93\u5165\u6587\u4ef6\u5939\u540d\u79f0",
          "desktop.addchatfolder.title.addnewfolder":
            "\u521b\u5efa\u6587\u4ef6\u5939",
          "desktop.addchatpopup.button.add": "\u6dfb\u52a0",
          "desktop.addchatpopup.button.cancel": "\u53d6\u6d88",
          "desktop.addchatpopup.desc.allchats": "\u5168\u90e8\u804a\u5929",
          "desktop.addchatpopup.desc.selected":
            "\u5df2\u9009\u62e9%1\u4e2a\u804a\u5929",
          "desktop.addchatpopup.placeholder.search": "\u641c\u7d22",
          "desktop.addchatpopup.title.addchats":
            "\u5c06\u804a\u5929\u6dfb\u52a0\u81f3\u6b64\u6587\u4ef6\u5939",
          "desktop.addfriends.desc.recommendedai": "AI\u5e10\u53f7\u63a8\u8350",
          "desktop.addtoalbum.button.cancel": "\u53d6\u6d88",
          "desktop.addtoalbum.button.createalbum": "\u521b\u5efa\u76f8\u518c",
          "desktop.addtoalbum.title.selectalbum": "\u9009\u62e9\u76f8\u518c",
          "desktop.album.allalbums.button.albums": "\u76f8\u518c",
          "desktop.album.allalbums.button.photos": "\u7167\u7247",
          "desktop.album.allalbums.desc.albumsempty":
            "\u6240\u6709\u804a\u5929\u5ba4\u4e2d\u521b\u5efa\u7684\u76f8\u518c\u90fd\u5c06\u663e\u793a\u5728\u6b64\u3002",
          "desktop.album.allalbums.desc.dateformat": "yyyy\u5e74M\u6708",
          "desktop.album.allalbums.desc.photosempty":
            "\u5df2\u6dfb\u52a0\u5230\u76f8\u518c\u7684\u9879\u76ee\u5c06\u663e\u793a\u5728\u6b64\u3002",
          "desktop.album.allalbums.menu.lastcreated":
            "\u6700\u8fd1\u521b\u5efa",
          "desktop.album.allalbums.menu.lastupdated":
            "\u6700\u8fd1\u66f4\u65b0",
          "desktop.album.allalbums.title.allalbums": "\u5168\u90e8\u76f8\u518c",
          "desktop.album.allalbums.title.photosempty":
            "\u5c1a\u65e0\u4efb\u4f55\u9879\u76ee",
          "desktop.album.allalbums.title.unableshow":
            "\u65e0\u6cd5\u663e\u793a\u76f8\u518c\u3002\n\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "desktop.album.allalbums.tooltip.allalbums":
            "\u6240\u6709\u804a\u5929\u5ba4\u7684\u76f8\u518c\uff08\u5305\u62ec\u5df2\u4ece\u5217\u8868\u4e2d\u9690\u85cf\u6216\u5220\u9664\u7684\u804a\u5929\u5ba4\u76f8\u518c\uff09\u90fd\u5c06\u663e\u793a\u5728\u6b64\u3002",
          "desktop.album.button.add": "\u6dfb\u52a0",
          "desktop.album.button.cancel": "\u53d6\u6d88",
          "desktop.album.button.create": "\u521b\u5efa",
          "desktop.album.button.namechangedone": "\u4fdd\u5b58",
          "desktop.album.button.share": "\u5206\u4eab",
          "desktop.album.button.sharealbum": "\u5206\u4eab\u76f8\u518c",
          "desktop.album.commonkey.button.tryagain": "\u91cd\u8bd5",
          "desktop.album.desc.albumphotos.other": "%n\u5f20\u7167\u7247",
          "desktop.album.desc.draganddrop":
            "\u5c06\u9879\u76ee\u62d6\u62fd\u81f3\u6b64\u533a\u57df\u3002",
          "desktop.album.error.sharealbum":
            "\u77ed\u671f\u5185\u5206\u4eab\u76f8\u518c\u8fc7\u591a\u3002",
          "desktop.album.main.tooltip.albumsallchats":
            "\u53ef\u4ee5\u96c6\u4e2d\u67e5\u770b\u6240\u6709\u804a\u5929\u5ba4\u7684\u76f8\u518c\u3002",
          "desktop.album.max.media.alert":
            "\u60a8\u6700\u591a\u53ea\u80fd\u53d1\u9001%1\u9879\u3002",
          "desktop.album.photos.button.seealbum": "\u663e\u793a\u76f8\u518c",
          "desktop.album.popupdesc.sharealbum":
            "\u8981\u5728\u804a\u5929\u4e2d\u5206\u4eab\u6b64\u76f8\u518c\u5417\uff1f",
          "desktop.album.tooltip.nowsharealbum":
            "\u60a8\u53ef\u4ee5\u5728\u804a\u5929\u4e2d\u5206\u4eab\u76f8\u518c\uff01",
          "desktop.album.viewer.button.seealbum": "\u663e\u793a\u76f8\u518c",
          "desktop.album.viewer.title.unableshow":
            "\u65e0\u6cd5\u663e\u793a\u9879\u76ee\u3002\n\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "desktop.backgroundsetting.button.deletecover":
            "\u5220\u9664\u4e2a\u4eba\u8d44\u6599\u5c01\u9762",
          "desktop.backgroundsetting.button.selectphoto":
            "\u9009\u62e9\u7167\u7247",
          "desktop.blankchatfolder.button.addchat": "\u6dfb\u52a0\u804a\u5929",
          "desktop.blankchatfolder.desc.nochats":
            "\u5c1a\u672a\u5c06\u4efb\u4f55\u804a\u5929\u6dfb\u52a0\u5230\u6b64\u6587\u4ef6\u5939\u3002",
          "desktop.blankchatfolder.desc.nochats1":
            "\u8bf7\u70b9\u51fb\u4e0b\u65b9\u6309\u94ae\u4ee5\u6dfb\u52a0\u804a\u5929\uff0c\u6216\u76f4\u63a5\u5c06\u804a\u5929\u62d6\u653e\u81f3\u6b64\u5904\u3002",
          "desktop.calendar.button.recent": "\u6700\u8fd1",
          "desktop.calendar.desc.month": "M\u6708",
          "desktop.calendar.desc.year": "yyyy\u5e74",
          "desktop.callsettings.desc.showmessagealerts":
            "\u5728\u901a\u8bdd\u671f\u95f4\u663e\u793a\u65b0\u804a\u5929\u6d88\u606f\u7684\u901a\u77e5\u63d0\u9192",
          "desktop.chat.choose.empty":
            "\u6ca1\u6709\u53ef\u9009\u62e9\u7684\u804a\u5929\u3002",
          "desktop.chat.popup.blockeduser.button.close": "\u4e0d\u4e3e\u62a5",
          "desktop.chat.popup.blockeduser.button.report": "\u4e3e\u62a5",
          "desktop.chat.popup.blockeduser.desc":
            "\u82e5\u60a8\u8ba4\u4e3a\u8be5\u7528\u6237\u6ee5\u53d1\u5783\u573e\u4fe1\u606f\u6216\u9020\u6210\u9a9a\u6270\uff0c\u8bf7\u4e3e\u62a5\u8be5\u7528\u6237\u4ee5\u63d0\u5347LINE\u7684\u5b89\u5168\u6027\u3002",
          "desktop.chat.popup.blockeduser.title":
            "\u8981\u4e3e\u62a5%1\u5417\uff1f",
          "desktop.chat.toast.chatunhidden":
            "\u6b64\u804a\u5929\u5df2\u53d6\u6d88\u9690\u85cf\u3002",
          "desktop.chat.warning.btn.addfriend": "\u6dfb\u52a0\u597d\u53cb",
          "desktop.chat.warning.btn.blockfriend": "\u5c4f\u853d",
          "desktop.chat.warning.btn.decline": "\u62d2\u7edd",
          "desktop.chat.warning.btn.join": "\u52a0\u5165",
          "desktop.chat.warning.btn.leave": "\u9000\u51fa",
          "desktop.chat.warning.btn.report": "\u4e3e\u62a5",
          "desktop.chat.warning.btn.unblockfriend": "\u89e3\u9664\u5c4f\u853d",
          "desktop.chatfolder.tab.all": "\u5168\u90e8",
          "desktop.chatfolder.tab.friends": "\u597d\u53cb",
          "desktop.chatfolder.tab.groups": "\u7fa4",
          "desktop.chatfolder.tab.newfolder": "\u6587\u4ef6\u5939%1",
          "desktop.chatfolder.tab.officialaccounts": "\u5b98\u65b9\u5e10\u53f7",
          "desktop.chatfolder.tab.openchats": "OpenChat",
          "desktop.chatfolder.toast.addedtofoldermulti":
            "\u5df2\u5c06%1\u4e2a\u804a\u5929\u6dfb\u52a0\u81f3\u6587\u4ef6\u5939\u3002",
          "desktop.chatfolder.toast.addedtofolderone":
            "\u5df2\u5c061\u4e2a\u804a\u5929\u6dfb\u52a0\u81f3\u6587\u4ef6\u5939\u3002",
          "desktop.chatfolder.toast.nameinuse":
            "\u6587\u4ef6\u5939\u540d\u79f0\u5df2\u88ab\u4f7f\u7528\uff0c\u8bf7\u8f93\u5165\u5176\u4ed6\u540d\u79f0\u3002",
          "desktop.chatfolder.toast.removedchatmulti":
            "\u5df2\u5c06%1\u4e2a\u804a\u5929\u79fb\u81f3\u9ed8\u8ba4\u6587\u4ef6\u5939\u3002",
          "desktop.chatfolder.toast.removedchatone":
            "\u5df2\u5c061\u4e2a\u804a\u5929\u79fb\u81f3\u9ed8\u8ba4\u6587\u4ef6\u5939\u3002",
          "desktop.chatfolder.toast.uptohund":
            "\u6bcf\u4e2a\u6587\u4ef6\u5939\u6700\u591a\u53ea\u80fd\u6dfb\u52a0100\u4e2a\u804a\u5929\u3002",
          "desktop.chatfolderguide.button.learnmore":
            "\u4e86\u89e3\u8be6\u60c5",
          "desktop.chatfolderguide.desc.desc1":
            "\u70b9\u51fb\u53f3\u4e0a\u89d2\u7f16\u8f91\u56fe\u6807\u53ef\u521b\u5efa\u65b0\u6587\u4ef6\u5939",
          "desktop.chatfolderguide.desc.desc2":
            "\u53f3\u952e\u70b9\u51fb\u6587\u4ef6\u5939\u53ef\u66f4\u6539\u8bbe\u7f6e",
          "desktop.chatfolderguide.desc.desc3":
            "\u62d6\u653e\u804a\u5929\u6587\u4ef6\u5939\u53ef\u66f4\u6539\u663e\u793a\u987a\u5e8f",
          "desktop.chatfolderguide.desc.editdragchange":
            "\u62d6\u653e\u6587\u4ef6\u5939\u53ef\u66f4\u6539\u663e\u793a\u987a\u5e8f\u3002\u5355\u51fb\u201c+\u201d\u56fe\u6807\u53ef\u521b\u5efa\u65b0\u6587\u4ef6\u5939\u3002",
          "desktop.chatfolderguide.desc.title":
            "\u8f7b\u677e\u7ba1\u7406\u5206\u7c7b\u804a\u5929\u5185\u5bb9\uff01\u65b0\u529f\u80fd\u201c\u804a\u5929\u6587\u4ef6\u5939\u201d\u767b\u573a\uff01",
          "desktop.chatfoldermenu.button.addchat": "\u6dfb\u52a0\u804a\u5929",
          "desktop.chatfoldermenu.button.changefoldername":
            "\u66f4\u6539\u6587\u4ef6\u5939\u540d\u79f0",
          "desktop.chatfoldermenu.button.deletefolder":
            "\u5220\u9664\u6587\u4ef6\u5939",
          "desktop.chatfoldermenu.button.mutefolder":
            "\u5173\u95ed\u6587\u4ef6\u5939\u7684\u63d0\u9192",
          "desktop.chatfoldermenu.button.readall": "\u5168\u90e8\u5df2\u8bfb",
          "desktop.chatfoldermenu.button.removechat":
            "\u79fb\u9664\u804a\u5929",
          "desktop.chatfoldermenu.button.unmutefolder":
            "\u5f00\u542f\u6587\u4ef6\u5939\u7684\u63d0\u9192",
          "desktop.chatfoldermenu.toast.unabletoadd":
            "\u65e0\u6cd5\u5c06\u6240\u6709\u804a\u5929\u6dfb\u52a0\u5230\u4e00\u4e2a\u6587\u4ef6\u5939\u3002",
          "desktop.chatfoldermenu.toast.uptoten":
            "\u6700\u591a\u53ea\u80fd\u521b\u5efa10\u4e2a\u804a\u5929\u6587\u4ef6\u5939\u3002",
          "desktop.chatfolderpopup.button.ok": "\u786e\u5b9a",
          "desktop.chatfolderpopup.desc.chatfolder":
            "\u5355\u51fb\u804a\u5929\u5217\u8868\u53f3\u4e0a\u65b9\u7684\u201c+\u201d\u56fe\u6807\u4ee5\u5f00\u59cb\u4f7f\u7528\u804a\u5929\u6587\u4ef6\u5939\u3002\u4f7f\u7528\u804a\u5929\u6587\u4ef6\u5939\u5c06\u804a\u5929\u5206\u7c7b\uff0c\u4ee5\u4fbf\u5728\u65e5\u540e\u8f7b\u677e\u627e\u5230\u804a\u5929\u3002",
          "desktop.chatfolderpopup.desc.folderlineup":
            "\u60a8\u53ef\u4ee5\u5c06\u6587\u4ef6\u5939\u62d6\u653e\u5230\u6307\u5b9a\u4f4d\u7f6e\u4ee5\u66f4\u6539\u804a\u5929\u6587\u4ef6\u5939\u7684\u987a\u5e8f\u3002",
          "desktop.chatfolderpopup.desc.managefolder":
            "\u53f3\u952e\u70b9\u51fb\u6587\u4ef6\u5939\u53ef\u66f4\u6539\u8bbe\u7f6e\u3002",
          "desktop.chatfolderpopup.desc.unabletosync":
            "\u53d1\u751f\u4e34\u65f6\u9519\u8bef\uff0c\u65e0\u6cd5\u540c\u6b65\u6587\u4ef6\u5939\u3002\u8bf7\u5355\u51fb\u53f3\u4e0a\u89d2\u540c\u6b65\u56fe\u6807\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "desktop.chatfolderpopup.title.chatfolder":
            "\u65b0\u529f\u80fd\u201c\u804a\u5929\u6587\u4ef6\u5939\u201d\u767b\u573a\uff01",
          "desktop.chatfolderpopup.title.folderlineup":
            "\u91cd\u65b0\u6392\u5217\u804a\u5929\u6587\u4ef6\u5939\u987a\u5e8f",
          "desktop.chatfolderpopup.title.managefolder":
            "\u8f7b\u677e\u7ba1\u7406\u804a\u5929\u6587\u4ef6\u5939",
          "desktop.chatfoldersetting.button.cancel": "\u53d6\u6d88",
          "desktop.chatfoldersetting.button.disable": "\u505c\u7528",
          "desktop.chatfoldersetting.desc.disable":
            "\u8981\u505c\u7528\u804a\u5929\u6587\u4ef6\u5939\u5417\uff1f\u505c\u7528\u540e\uff0c\u76ee\u524d\u6240\u6709\u7684\u6587\u4ef6\u5939\u8bbe\u7f6e\u5c06\u88ab\u91cd\u7f6e\u3002",
          "desktop.chatfoldertooltip.desc.createchatfolder":
            "\u53ef\u521b\u5efa\u804a\u5929\u6587\u4ef6\u5939\u5c06\u804a\u5929\u5206\u7c7b",
          "desktop.chatlist.button.hide": "\u663e\u793a\u66f4\u5c11",
          "desktop.chatmenu.button.addtoalbum":
            "\u6dfb\u52a0\u5230\u76f8\u518c",
          "desktop.chatssettings.desc.chateffects":
            "\u5728\u804a\u5929\u7684\u80cc\u666f\u4e2d\u663e\u793a\u52a8\u753b\u7279\u6548\u3002",
          "desktop.chatssettings.subtitle.chateffects":
            "\u80cc\u666f\u52a8\u753b\u7279\u6548",
          "desktop.codecerror.desc.unabletoplay":
            "\u7531\u4e8e\u89c6\u9891\u7f16\u89e3\u7801\u5668\u9519\u8bef\uff0c\u65e0\u6cd5\u64ad\u653e\u6b64\u6587\u4ef6\u3002",
          "desktop.common.go.to.settings":
            "\u8df3\u8f6c\u5230\u8bbe\u7f6e\u9875\u9762",
          "desktop.common.index.chats": "\u804a\u5929",
          "desktop.common.index.favorites": "\u6536\u85cf\u5939",
          "desktop.common.index.friends": "\u597d\u53cb",
          "desktop.common.index.groups": "\u7fa4",
          "desktop.common.index.recentlyshared":
            "\u6700\u8fd1\u5206\u4eab\u7684\u804a\u5929",
          "desktop.common.report": "\u4e3e\u62a5",
          "desktop.defaultprofile.button.cancel": "\u53d6\u6d88",
          "desktop.defaultprofile.button.save": "\u4fdd\u5b58",
          "desktop.defaultprofile.title.selectdefault":
            "\u4ece\u9ed8\u8ba4\u7167\u7247\u4e2d\u9009\u62e9",
          "desktop.deletefolderpopup.button.cancel": "\u53d6\u6d88",
          "desktop.deletefolderpopup.button.delete": "\u5220\u9664",
          "desktop.deletefolderpopup.desc.deletefolder":
            "\u8981\u5220\u9664\u201c%1\u201d\u6587\u4ef6\u5939\u5417\uff1f\u5220\u9664\u540e\uff0c\u6b64\u6587\u4ef6\u5939\u4e2d\u7684\u6240\u6709\u804a\u5929\u5c06\u81ea\u52a8\u79fb\u81f3\u9ed8\u8ba4\u6587\u4ef6\u5939\u3002",
          "desktop.download.popup.call":
            "\u6b63\u5728\u4e0b\u8f7d\u901a\u8bdd\u6269\u5c55\u529f\u80fd...",
          "desktop.download.popup.calldone":
            "\u4e0b\u8f7d\u5b8c\u6210\u3002\u60a8\u73b0\u5728\u53ef\u4ee5\u53d1\u8d77\u6216\u63a5\u542c\u901a\u8bdd\u3002",
          "desktop.download.popup.plugin":
            "\u6b63\u5728\u4e0b\u8f7d\u622a\u53d6GIF\u6269\u5c55\u529f\u80fd...",
          "desktop.download.popup.plugindone":
            "\u4e0b\u8f7d\u5b8c\u6210\u3002\u60a8\u73b0\u5728\u53ef\u4ee5\u622a\u53d6GIF\u3002",
          "desktop.download.popup.pluginnetworkerror":
            "\u65e0\u6cd5\u4e0b\u8f7d\u6269\u5c55\u529f\u80fd\u3002\u8bf7\u68c0\u67e5\u60a8\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "desktop.download.popup.pluginnospace":
            "\u8bbe\u5907\u7a7a\u95f4\u4e0d\u8db3\u3002\u8bf7\u91ca\u653e\u4e00\u4e9b\u5b58\u50a8\u7a7a\u95f4\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "desktop.download.popup.pluginunexpectederror":
            "\u65e0\u6cd5\u4e0b\u8f7d\u6269\u5c55\u529f\u80fd\u3002\n\u8bf7\u91cd\u8bd5\u3002",
          "desktop.download.popup.viewer":
            "\u6b63\u5728\u4e0b\u8f7d\u67e5\u770b\u5668\u6269\u5c55\u529f\u80fd...",
          "desktop.download.popup.viewerdone":
            "\u4e0b\u8f7d\u5b8c\u6210\u3002\u8bf7\u9009\u62e9\u8981\u5728\u67e5\u770b\u5668\u4e2d\u6253\u5f00\u7684\u5a92\u4f53\u6587\u4ef6\u3002",
          "desktop.dragndrop.button.addfiles": "\u6dfb\u52a0\u6587\u4ef6",
          "desktop.dragndrop.button.cancelcompress": "\u53d6\u6d88",
          "desktop.dragndrop.button.send": "\u53d1\u9001\uff08%1\uff09",
          "desktop.dragndrop.button.sendcompressed": "\u53d1\u9001",
          "desktop.dragndrop.checkbox.alwayscompress":
            "\u603b\u662f\u538b\u7f29\u540e\u518d\u53d1\u9001",
          "desktop.dragndrop.title.sendfile": "\u53d1\u9001\u6587\u4ef6",
          "desktop.dragndrop.toast.upto50":
            "\u60a8\u6700\u591a\u53ef\u4ee5\u53d1\u900150\u4e2a\u6587\u4ef6\u3002",
          "desktop.error.popup.noverification":
            "\u5728\u667a\u80fd\u624b\u673a\u7248LINE\u9a8c\u8bc1\u5931\u8d25\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "desktop.errorpopup.desc.downloadback":
            "\u4e0b\u8f7d\u6269\u5c55\u529f\u80fd\u53ef\u80fd\u9700\u8981\u8f83\u957f\u7684\u65f6\u95f4\u3002\u8981\u5173\u95ed\u6b64\u7a97\u53e3\u5e76\u7ee7\u7eed\u5728\u540e\u53f0\u4e0b\u8f7d\u5417\uff1f",
          "desktop.errorpopup.desc.downloadno":
            "\u7559\u5728\u6b64\u7a97\u53e3",
          "desktop.errorpopup.desc.downloadyes":
            "\u5173\u95ed\u5e76\u7ee7\u7eed",
          "desktop.errorpopup.desc.expired":
            "\u6587\u4ef6\u5df2\u8fc7\u671f\uff0c\u65e0\u6cd5\u91cd\u65b0\u53d1\u9001\u3002",
          "desktop.errorpopup.desc.remobile":
            "\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u65e0\u6cd5\u53d1\u9001\u6b64\u6d88\u606f\u3002\u8bf7\u5728\u667a\u80fd\u624b\u673a\u7248LINE\u4e2d\u91cd\u8bd5\u3002",
          "desktop.errorpopup.desc.remobiles":
            "\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\uff0c\u65e0\u6cd5\u5728\u7fa4\u91cc\u53d1\u9001\u6b64\u6d88\u606f\u3002\u8bf7\u5728\u667a\u80fd\u624b\u673a\u7248LINE\u4e2d\u91cd\u8bd5\u3002",
          "desktop.errorpopup.desc.renewmembership":
            "\u60a8\u7684LYP Premium\u4f1a\u5458\u72b6\u6001\u5df2\u53d8\u66f4\uff0c\u56e0\u6b64\u65e0\u6cd5\u6dfb\u52a0\u9879\u76ee\u3002\u8bf7\u786e\u8ba4\u60a8\u7684\u4f1a\u5458\u72b6\u6001\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "desktop.errorpopup.desc.revisedtermsofuse":
            "\u60a8\u5c1a\u672a\u540c\u610f\u4fee\u8ba2\u540e\u7684\u300aAgreement Regarding Use of Information\u300b\uff0c\u56e0\u6b64\u65e0\u6cd5\u6dfb\u52a0\u9879\u76ee\u3002\u8bf7\u5728\u624b\u673a\u4e0a\u5c06\u539f\u753b\u89c6\u9891\u6216\u7167\u7247\u539f\u56fe\u6dfb\u52a0\u5230\u76f8\u518c\uff0c\u5e76\u540c\u610f\u4fee\u8ba2\u540e\u7684\u4e2a\u522b\u653f\u7b56\u3002",
          "desktop.errorpopup.title.resend":
            "\u8981\u91cd\u65b0\u53d1\u9001\u6b64\u6d88\u606f\u5417\uff1f",
          "desktop.favoritethreads.desc.nothreads":
            "\u70b9\u51fb\u5bf9\u8bdd\u9875\u9762\u53f3\u4e0a\u65b9\u7684\u661f\u5f62\u56fe\u6807\uff0c\u5373\u53ef\u5c06\u611f\u5174\u8da3\u7684\u5bf9\u8bdd\u6dfb\u52a0\u5230\u6536\u85cf\u5939\u3002",
          "desktop.fileshare.button.cancel": "\u53d6\u6d88",
          "desktop.fileshare.button.open": "\u5206\u4eab",
          "desktop.fileshare.desc.unsafefile":
            "\u6536\u5230\u4e86\u4e0e\u5176\u4ed6\u7528\u6237\u5206\u4eab\u4ee5\u4e0b\u6587\u4ef6\u7684\u8bf7\u6c42\u3002\u8981\u5206\u4eab\u6b64\u6587\u4ef6\u5417\uff1f\n\n%1",
          "desktop.foldermenu.button.moveto": "\u79fb\u52a8",
          "desktop.friends.choose.empty":
            "\u6ca1\u6709\u53ef\u9009\u62e9\u7684\u597d\u53cb\u3002",
          "desktop.friendssearch.title.friendssearch":
            "\u641c\u7d22\u597d\u53cb",
          "desktop.gprofilesetting.button.capturescreen":
            "\u5c4f\u5e55\u622a\u56fe",
          "desktop.gprofilesetting.button.createtext":
            "\u521b\u5efa\u6587\u5b57\u5934\u50cf",
          "desktop.gprofilesetting.button.deleteprofile":
            "\u5220\u9664\u5934\u50cf",
          "desktop.gprofilesetting.button.selectdefault":
            "\u4ece\u9ed8\u8ba4\u7167\u7247\u4e2d\u9009\u62e9",
          "desktop.gprofilesetting.button.selectphoto":
            "\u9009\u62e9\u7167\u7247",
          "desktop.group.choose.empty":
            "\u6ca1\u6709\u53ef\u9009\u62e9\u7684\u7fa4\u3002",
          "desktop.hevcerror.desc.unabletoplay":
            "\u65e0\u6cd5\u64ad\u653e\u6b64\u6587\u4ef6\u683c\u5f0f\u3002\u8981\u4e0b\u8f7d\u6587\u4ef6\u5417\uff1f",
          "desktop.installer.button.install": "\u5b89\u88c5",
          "desktop.installer.checkbox.iagree":
            "\u6211\u540c\u610f\uff3bLY Corporation Common Terms of Use|https://terms.line.me/line_terms?lang=en\uff3d\u3002",
          "desktop.installer.desc.installingline":
            "\u6b63\u5728\u5b89\u88c5LINE\u3002\u8bf7\u7a0d\u5019\u3002",
          "desktop.installer.desc.readandagree":
            "\u9605\u8bfb\u5e76\u540c\u610f\u670d\u52a1\u6761\u6b3e\u4ee5\u5b89\u88c5LINE\u3002",
          "desktop.installercancel.button.no": "\u5426",
          "desktop.installercancel.button.yes": "\u662f",
          "desktop.installercancel.desc.stopinstalling":
            "\u8981\u505c\u6b62\u5b89\u88c5LINE\u5417\uff1f",
          "desktop.installerror.button.download": "\u4e0b\u8f7d",
          "desktop.installerror.desc.badfile":
            "LINE\u672a\u80fd\u6b63\u786e\u5b89\u88c5\u3002\u8bf7\u91cd\u65b0\u4e0b\u8f7d\u5b89\u88c5\u6587\u4ef6\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "desktop.leavescreenpopup.button.cancel": "\u53d6\u6d88",
          "desktop.leavescreenpopup.button.leave": "\u79bb\u5f00",
          "desktop.line.albums.desc.photosnotyet":
            "\u67e5\u770b\u5168\u90e8\u7167\u7247\u7684\u529f\u80fd\u5c06\u4e8e\u8fd1\u671f\u63d0\u4f9b\u3002",
          "desktop.line.chatmenu.title.albumsempty":
            "\u8fd8\u6ca1\u6709\u76f8\u518c\u3002",
          "desktop.login.button.gotoemailwithPhoneNumber":
            "\u7528\u90ae\u7bb1\u767b\u5f55",
          "desktop.login.button.gotosmartphone":
            "\u4f7f\u7528\u667a\u80fd\u624b\u673a\u767b\u5f55",
          "desktop.login.button.loginwithsmartphone":
            "\u4f7f\u7528\u667a\u80fd\u624b\u673a\u767b\u5f55",
          "desktop.login.desc.transferring":
            "\u6b63\u5728\u8f6c\u79fbLINE\u5e10\u53f7",
          "desktop.login.desc.verification":
            "\u5982\u679c\u60a8\u65e0\u6cd5\u5728\u667a\u80fd\u624b\u673a\u4e0a\u8bbf\u95eeLINE\uff0c\u8bf7\u8f6c\u79fb\u60a8\u7684LINE\u5e10\u53f7\u3002",
          "desktop.login.popup.scanqr":
            "\u4f7f\u7528\u667a\u80fd\u624b\u673a\u626b\u63cf\u4e8c\u7ef4\u7801\uff0c\u5e76\u70b9\u51fb\u201c\u5bc6\u7801\u201d\u4ee5\u91cd\u7f6e\u5bc6\u7801\u3002",
          "desktop.login.popup.seeonmobile":
            "\u4f7f\u7528\u667a\u80fd\u624b\u673a\u91cd\u7f6e\u5bc6\u7801",
          "desktop.login.popupbutton.gotit": "\u663e\u793a\u9a8c\u8bc1\u7801",
          "desktop.login.popupdesc.cancelverification":
            "\u53d6\u6d88\u8eab\u4efd\u9a8c\u8bc1",
          "desktop.login.popupdesc.loggingin":
            "\u901a\u8fc7\u667a\u80fd\u624b\u673a\u9a8c\u8bc1\u60a8\u7684\u8eab\u4efd\u3002",
          "desktop.login.popupdesc.pairingverificationcode":
            "\u8bf7\u5728\u667a\u80fd\u624b\u673a\u4e0a\u6253\u5f00LINE\uff0c\u7136\u540e\u524d\u5f80\u201c\u8bbe\u7f6e\u201d>\u201c\u5e10\u53f7\u201d>\u201c\u5173\u8054\u65b0\u8bbe\u5907\u201d\u9875\u9762\u5e76\u8f93\u51656\u4f4d\u6570\u9a8c\u8bc1\u7801\u3002",
          "desktop.login.popupdesc.pairingverificationcodeguide":
            "\u9996\u6b21\u5173\u8054\u667a\u80fd\u624b\u673a\u7684\u64cd\u4f5c\u6b65\u9aa4\n\n1.\u5728\u667a\u80fd\u624b\u673a\u4e0a\u6253\u5f00LINE\n2.\u524d\u5f80\u201c\u8bbe\u7f6e\u201d>\u201c\u5e10\u53f7\u201d>\u201c\u5173\u8054\u65b0\u8bbe\u5907\u201d\u9875\u9762\n3.\u8f93\u51656\u4f4d\u6570\u9a8c\u8bc1\u7801\n\u70b9\u51fb\u201c\u663e\u793a\u9a8c\u8bc1\u7801\u201d\u4ee5\u7ee7\u7eed",
          "desktop.login.popupdesc.pairsecondarydevice":
            "\u5173\u8054\u65b0\u8bbe\u5907",
          "desktop.login.popuptitle.loggingin": "\u6b63\u5728\u767b\u5f55",
          "desktop.login.popuptitle.pairingverificationcode":
            "\u5173\u8054\u667a\u80fd\u624b\u673a",
          "desktop.main.popup.newversion":
            "\u65b0\u7248LINE\u5e94\u7528\u73b0\u5df2\u63a8\u51fa\u3002\u8981\u7acb\u5373\u66f4\u65b0\u5417\uff1f",
          "desktop.movetomenu.button.all": "\u5168\u90e8",
          "desktop.movetomenu.button.customfolder": "%1",
          "desktop.movetomenu.button.friends": "\u597d\u53cb",
          "desktop.movetomenu.button.groups": "\u7fa4",
          "desktop.movetomenu.button.oas": "\u5b98\u65b9\u5e10\u53f7",
          "desktop.movetomenu.button.openchats": "OpenChat",
          "desktop.mypsticker.button.stickershop": "Sticker shop",
          "desktop.mypsticker.button.upgrade":
            "\u5347\u7ea7\u8c6a\u534e\u7248\u5957\u9910",
          "desktop.mypsticker.desc.getmore":
            "\u641c\u7d22\u66f4\u591a\u7545\u4eab\u5957\u9910\u8d34\u56fe\uff01",
          "desktop.mypsticker.desc.maximum":
            "\u60a8\u6700\u591a\u53ef\u4ee5\u540c\u65f6\u4fdd\u7559%1\u5957\u7545\u4eab\u5957\u9910\u8d34\u56fe\u3002",
          "desktop.mypsticker.desc.nosticker":
            "\u60a8\u672a\u6301\u6709\u7545\u60f3\u5957\u9910\u8d34\u56fe\u3002",
          "desktop.mypsticker.desc.upgradetodeluxe":
            "\u8c6a\u534e\u7248\u5957\u9910\u6700\u591a\u53ef\u4fdd\u75591000\u5957\u8d34\u56fe\u6216\u8868\u60c5\u8d34\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u624b\u673a\u7248\u5e94\u7528\u5347\u7ea7\u4e3a\u8c6a\u534e\u7248\u5957\u9910\u3002",
          "desktop.mysticker.button.cancel": "\u53d6\u6d88",
          "desktop.mysticker.button.cancelshow": "\u53d6\u6d88",
          "desktop.mysticker.button.showall": "\u663e\u793a\u5168\u90e8",
          "desktop.mysticker.button.stop": "\u505c\u6b62",
          "desktop.mysticker.button.stopshow": "\u505c\u6b62",
          "desktop.mysticker.desc.downloadstopemoji":
            "\u8981\u505c\u6b62\u4e0b\u8f7d\u8868\u60c5\u8d34\u5417\uff1f",
          "desktop.mysticker.desc.downloadstopsticker":
            "\u662f\u5426\u53d6\u6d88\u4e0b\u8f7d\uff1f",
          "desktop.mysticker.desc.stopshowemoji":
            "\u662f\u5426\u505c\u6b62\u4e0b\u8f7d\u5168\u90e8\u8868\u60c5\u8d34\uff1f",
          "desktop.mysticker.desc.stopshowsticker":
            "\u662f\u5426\u505c\u6b62\u4e0b\u8f7d\u5168\u90e8\u8d34\u56fe\uff1f",
          "desktop.mystickers.desc.noexpire":
            "\u4f7f\u7528\u671f\u9650-\u65e0\u9650\u5236",
          "desktop.mystickers.desc.nolongerp":
            "\u4e0d\u5728\u7545\u4eab\u5957\u9910\u63d0\u4f9b\u8303\u56f4\u5185\u3002",
          "desktop.mystickers.desc.passedtime": "\u6709\u6548\u671f\u6ee1",
          "desktop.mystickers.desc.until": "\u53ef\u4f7f\u7528\u81f3%1",
          "desktop.mystickers.tooltip.hide": "\u9690\u85cf",
          "desktop.mystickers.tooltip.show": "\u663e\u793a",
          "desktop.noin87notice.button.download": "\u4e0b\u8f7d",
          "desktop.noin87notice.desc.supportend":
            "\u6700\u65b0\u7248\u672c\u7684LINE\u5e94\u7528\u5c06\u65e0\u6cd5\u5728Windows 7\u4e0eWindows 8\u64cd\u4f5c\u7cfb\u7edf\u4e2d\u4f7f\u7528\u3002\u8bf7\u901a\u8fc7\u4e0b\u65b9\u6309\u94ae\u4e0b\u8f7d\u6700\u65b0\u517c\u5bb9\u7248\u672c\u7684LINE\u5e94\u7528\u3002",
          "desktop.oa.chat.oaunsendconfirm.desc":
            "\u6839\u636e\u5b98\u65b9\u5e10\u53f7\u7ba1\u7406\u5458\u7684\u7cfb\u7edf\u914d\u7f6e\uff0c\u6b64\u6d88\u606f\u4ecd\u53ef\u80fd\u4f1a\u663e\u793a\u5728\u5bf9\u65b9\u7684\u804a\u5929\u4e2d\u3002\u8981\u64a4\u56de\u6b64\u6d88\u606f\u5417\uff1f",
          "desktop.ocr.popup.toobig":
            "\u7531\u4e8e\u56fe\u7247\u8d85\u8fc75MB\uff0c\u56e0\u6b64\u65e0\u6cd5\u5904\u7406\u3002\u8bf7\u8c03\u6574\u56fe\u7247\u5927\u5c0f\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "desktop.openchatsetting.popup.onmobile":
            "\u60a8\u53ef\u4ee5\u5728\u667a\u80fd\u624b\u673a\u7248LINE\u4e0a\u66f4\u6539\u6b64\u8bbe\u7f6e\u3002",
          "desktop.premiumhistory.desc.history":
            "\u8fc7\u53bb\u4e00\u5e74\u5185\uff0c\u60a8\u672a\u66fe\u4f7f\u7528\u8fc7\u8fd9\u4e9b\u7545\u4eab\u5957\u9910\u8d34\u56fe\u3002",
          "desktop.premiumpopup.button.canceleold": "\u53d6\u6d88",
          "desktop.premiumpopup.button.deleteold": "\u5220\u9664",
          "desktop.premiumpopup.button.edit": "\u7f16\u8f91\u8d34\u56fe",
          "desktop.premiumpopup.desc.downloadlimit":
            "\u60a8\u7684\u6536\u85cf\u5939\u4e2d\u5df2\u6709%1\u5957\u7545\u4eab\u5957\u9910\u8d34\u56fe\u3002\u8bf7\u5148\u4ece\u4e2d\u5220\u9664\u4e00\u5957\u8d34\u56fe\uff0c\u7136\u540e\u518d\u6b21\u4e0b\u8f7d\u3002",
          "desktop.premiumpopup.desc.notavailablee":
            "\u6b64\u8868\u60c5\u8d34\u5df2\u4e0d\u5c5e\u4e8eLINE\u8d34\u56fe\u7545\u4eab\u5957\u9910\uff0c\u56e0\u6b64\u65e0\u6cd5\u4f7f\u7528\u3002\u8981\u4ece\u5217\u8868\u4e2d\u5220\u9664\u5417\uff1f",
          "desktop.premiumpopup.desc.notavailables":
            "\u6b64\u8d34\u56fe\u5df2\u4e0d\u5c5e\u4e8eLINE\u8d34\u56fe\u7545\u4eab\u5957\u9910\uff0c\u56e0\u6b64\u65e0\u6cd5\u4f7f\u7528\u3002\u8981\u4ece\u5217\u8868\u4e2d\u5220\u9664\u5417\uff1f",
          "desktop.premiumpopup.title.downloadlimit":
            "\u4e0b\u8f7d\u4e0a\u9650",
          "desktop.profile.desc.video15secs":
            "\u4e2a\u4eba\u8d44\u6599\u5c01\u9762\u89c6\u9891\u4e0d\u5f97\u8d85\u8fc715\u79d2\u3002",
          "desktop.profile.desc.video6secs":
            "\u5934\u50cf\u89c6\u9891\u4e0d\u5f97\u8d85\u8fc76\u79d2\u3002",
          "desktop.profileselectphoto.button.cancel": "\u53d6\u6d88",
          "desktop.profileselectphoto.button.save": "\u4fdd\u5b58",
          "desktop.profilesetting.button.capturescreen":
            "\u5c4f\u5e55\u622a\u56fe",
          "desktop.profilesetting.button.createtext":
            "\u521b\u5efa\u6587\u5b57\u5934\u50cf",
          "desktop.profilesetting.button.deleteprofile":
            "\u5220\u9664\u5934\u50cf",
          "desktop.profilesetting.button.selectdefault":
            "\u4ece\u9ed8\u8ba4\u7167\u7247\u4e2d\u9009\u62e9",
          "desktop.profilesetting.button.selectphoto":
            "\u9009\u62e9\u7167\u7247",
          "desktop.profilesetting.popup.500savechat":
            "\u804a\u5929\u4e2d\u53d1\u9001\u7684\u6700\u540e500\u6761\u6d88\u606f\u5c06\u4fdd\u5b58\u4e3a\u6587\u672c\u6587\u4ef6\u3002",
          "desktop.quickreply.popup.notonpc":
            "\u6b64\u529f\u80fd\u5728\u7535\u8111\u7248LINE\u4e0a\u4e0d\u53ef\u7528\u3002",
          "desktop.reaction.button.ok": "\u786e\u5b9a",
          "desktop.reaction.button.seemore": "\u4e86\u89e3\u8be6\u60c5",
          "desktop.reaction.desc.error":
            "\u51fa\u73b0\u4e34\u65f6\u9519\u8bef\uff0c\u56de\u5e94\u5931\u8d25\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "desktop.reaction.desc.plurals.other": "%1\u4e2a\u56de\u5e94",
          "desktop.reaction.desc.reaction1":
            "\u5c06\u5149\u6807\u62d6\u52a8\u5230\u6d88\u606f\u4e0a\n\u7136\u540e\u5355\u51fb\u5fae\u7b11\u56fe\u6807\u4ee5\u56de\u5e94\u6d88\u606f\u3002",
          "desktop.reaction.desc.reaction2":
            "\u5355\u51fb\u6d88\u606f\u4e0b\u65b9\u56fe\u6807\n\u4ee5\u67e5\u770b\u597d\u53cb\u7684\u56de\u5e94\u3002",
          "desktop.reaction.desc.unsent":
            "\u5df2\u65e0\u6cd5\u56de\u5e94\u6b64\u6d88\u606f\u3002",
          "desktop.reaction.title.reaction":
            "\u5c1d\u8bd5\u56de\u5e94\u529f\u80fd\n\u8ba9\u804a\u5929\u66f4\u52a0\u6709\u8da3\uff01",
          "desktop.reaction.toast.expired":
            "\u9879\u76ee\u5df2\u8fc7\u671f\uff0c\u65e0\u6cd5\u518d\u56de\u5e94\u6b64\u9879\u76ee\u3002",
          "desktop.reaction.toast.unsent":
            "\u7167\u7247\u5df2\u64a4\u56de\uff0c\u60a8\u65e0\u6cd5\u56de\u5e94\u6b64\u7167\u7247\u3002",
          "desktop.reaction.tooltip.smile":
            "\u5355\u51fb\u5fae\u7b11\u56fe\u6807\u4ee5\u56de\u5e94\u7167\u7247\u3002",
          "desktop.removechatpopup.button.cancel": "\u53d6\u6d88",
          "desktop.removechatpopup.button.remove": "\u79fb\u9664",
          "desktop.removechatpopup.desc.allchats.other": "%1\u4e2a\u804a\u5929",
          "desktop.removechatpopup.desc.selected":
            "\u5df2\u9009\u62e9%1\u4e2a\u804a\u5929",
          "desktop.removechatpopup.placeholder.search": "\u641c\u7d22",
          "desktop.removechatpopup.title.removechats":
            "\u5c06\u804a\u5929\u4ece\u6b64\u6587\u4ef6\u5939\u4e2d\u79fb\u9664",
          "desktop.restorepopup.button.ignore": "\u5ffd\u7565",
          "desktop.restorepopup.button.restore": "\u590d\u539f",
          "desktop.restorepopup.desc.restoreline":
            "\u60a8\u901a\u8fc7\u5176\u4ed6\u65b9\u5f0f\u5b89\u88c5\u8fc7\u53e6\u4e00\u4e2aLINE\u5e94\u7528\u3002\u8981\u590d\u539f\u8be5LINE\u5e94\u7528\u4e0a\u7684\u804a\u5929\u8bb0\u5f55\u5417\uff1f",
          "desktop.setting.desc.enablechatfolders":
            "\u542f\u7528\u804a\u5929\u6587\u4ef6\u5939",
          "desktop.setting.desc.windows": "Windows",
          "desktop.setting.title.chatfolder": "\u804a\u5929\u6587\u4ef6\u5939",
          "desktop.settings.desc.cantgetnotifocusassist":
            "\u60a8\u5df2\u5f00\u542f\u4e13\u6ce8\u52a9\u624b\uff0c\u56e0\u6b64\u65e0\u6cd5\u63a5\u6536LINE\u901a\u77e5\u3002\u8bf7\u5728\u8bbe\u5907\u4e0a\u66f4\u6539\u4e13\u6ce8\u52a9\u624b\u8bbe\u7f6e\u3002",
          "desktop.settings.desc.cantgetnotiline":
            "\u60a8\u5c1a\u672a\u5f00\u542fLINE\u901a\u77e5\u3002\u8bf7\u5728\u8bbe\u5907\u7684\u8bbe\u7f6e\u4e2d\u5f00\u542f\u3002",
          "desktop.settings.desc.cantgetnotios":
            "\u60a8\u5c1a\u672a\u5f00\u542f\u901a\u77e5\u3002\u8bf7\u5728\u8bbe\u5907\u7684\u8bbe\u7f6e\u4e2d\u5f00\u542f\u3002",
          "desktop.settings.desc.osnotification":
            "\u9009\u62e9Windows\u540e\uff0c\u5c06\u6839\u636eWindows\u7cfb\u7edf\u8bbe\u7f6e\u63a5\u6536\u901a\u77e5\u3002",
          "desktop.settings.desc.safeguard":
            "\u53d1\u9001\u524d\u9884\u89c8\u62d6\u653e\u5230\u804a\u5929\u4e2d\u7684\u6587\u4ef6\u3002",
          "desktop.settings.notification.description":
            "\u5f3a\u5236\u9000\u51fa\u5e94\u7528\u7a0b\u5e8f\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5ef6\u8fdf\u6216\u65e0\u6cd5\u63a5\u6536\u6d88\u606f\u63d0\u9192\u3002",
          "desktop.settings.notifications.turnonm":
            "\u60a8\u5c1a\u672a\u5f00\u542fLINE\u901a\u77e5\u3002\u8bf7\u5728\u8bbe\u5907\u7684\u8bbe\u7f6e\u4e2d\u5f00\u542f\u3002",
          "desktop.settings.notifications.turnonw":
            "\u60a8\u5c1a\u672a\u5f00\u542fLINE\u901a\u77e5\u3002\u8bf7\u5728\u8bbe\u5907\u4e2d\u7684\u201c\u8bbe\u7f6e\u201d > \u201c\u7cfb\u7edf\u201d > \u201c\u901a\u77e5\u548c\u64cd\u4f5c\u201d\u9875\u9762\u5f00\u542fLINE\u901a\u77e5\u3002",
          "desktop.settings.title.safeguard": "\u6587\u4ef6\u9884\u89c8",
          "desktop.shortcuts.desc.tilechats": "\u5e73\u94fa\u804a\u5929",
          "desktop.shortcuts.desc.undotiling":
            "\u53d6\u6d88\u5e73\u94fa\u804a\u5929",
          "desktop.smode.popup.nogif":
            "\u6839\u636e\u5b89\u5168\u7b56\u7565\uff0c\u60a8\u65e0\u6cd5\u5728Windows 10 S\u6a21\u5f0f\u4e0b\u4f7f\u7528\u901a\u8bdd\u3001\u5a92\u4f53\u67e5\u770b\u5668\u548cGIF\u622a\u56fe\u529f\u80fd\u3002",
          "desktop.sticker.button.deletedstickers":
            "\u7545\u4eab\u5957\u9910\u4e0b\u8f7d\u8bb0\u5f55",
          "desktop.sticker.button.mystickers": "\u6211\u7684\u8d34\u56fe",
          "desktop.sticker.button.premium":
            "\u6211\u7684\u7545\u4eab\u5957\u9910\u8d34\u56fe",
          "desktop.sticker.tooltip.switch":
            "\u60a8\u53ef\u4ee5\u66f4\u6539\u8d34\u56fe\u7684\u987a\u5e8f\u3002\u8d34\u56fe\u7684\u987a\u5e8f\u5c06\u81ea\u52a8\u540c\u6b65\u5230\u624b\u673a\u7248\u5e94\u7528\u3002",
          "desktop.stickers.desc.recentlyusede":
            "\u6700\u8fd1\u4f7f\u7528\u8868\u60c5\u8d34",
          "desktop.stickers.desc.recentlyuseds":
            "\u6700\u8fd1\u4f7f\u7528\u8d34\u56fe",
          "desktop.stickers.tooltip.synced":
            "\u8d34\u56fe\u548c\u8868\u60c5\u8d34\u7684\u6392\u5e8f\u5df2\u540c\u6b65\u5230\u667a\u80fd\u624b\u673a\u7248LINE\u3002",
          "desktop.stickertab.button.seemore": "\u663e\u793a\u66f4\u591a",
          "desktop.stickertab.desc.latestemoji":
            "%1\u7684\u6700\u65b0\u8868\u60c5\u8d34",
          "desktop.stickertab.desc.lateststicker":
            "%1\u7684\u6700\u65b0\u8d34\u56fe",
          "desktop.tab.button.ai": "AI",
          "desktop.textprofile.button.cancel": "\u53d6\u6d88",
          "desktop.textprofile.button.save": "\u4fdd\u5b58",
          "desktop.textprofile.desc.defaultfont": "\u9ed8\u8ba4\u5b57\u4f53",
          "desktop.textprofile.placeholder.entertext":
            "\u8f93\u5165\u6587\u5b57",
          "desktop.textprofile.title.createtextprofile":
            "\u521b\u5efa\u6587\u5b57\u5934\u50cf",
          "desktop.thread.desc.sendfiletothread":
            "\u53d1\u9001\u6587\u4ef6\u5230\u6b64\u804a\u5929",
          "desktop.thread.tooltip.taphere":
            "\u70b9\u51fb\u56fe\u6807\u53ef\u4ee5\u5728\u6536\u85cf\u5939\u4e2d\u6dfb\u52a0\u6216\u79fb\u9664\u6b64\u5bf9\u8bdd\u3002",
          "desktop.updatepopup.button.later": "\u7a0d\u540e\u8bbe\u7f6e",
          "desktop.updatepopup.button.update": "\u66f4\u65b0",
          "desktop.updatepopup.desc.update1":
            "LINE %1\u5df2\u65e0\u6cd5\u4f7f\u7528\u3002\u8bf7\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u3002\u66f4\u65b0\u540eLINE\u5c06\u91cd\u65b0\u542f\u52a8\u3002",
          "desktop.updatepopup.desc.update1mac":
            "LINE %1\u5df2\u65e0\u6cd5\u4f7f\u7528\u3002\u8bf7\u901a\u8fc7App Store\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u3002",
          "desktop.viewer.desc.gifby": "%1\u7684GIF",
          "desktop.viewer.desc.gifmagazine": "GIFMAGAZINE",
          "desktop.viewer.popup.cantsave":
            "\u65e0\u6cd5\u5c06%1\u7684GIF\u4fdd\u5b58\u81f3Keep\u3002",
          "desktop.viewer.popup.cantsaves":
            "\u65e0\u6cd5\u5c06%1\u7684GIF\u4fdd\u5b58\u81f3Keep\u3002\u8981\u4fdd\u5b58\u5176\u4f59\u6587\u4ef6\u5417\uff1f",
          "desktop.viewer.popup.cantshare":
            "\u65e0\u6cd5\u5206\u4eab%1\u7684GIF\u3002",
          "desktop.viewer.popup.cantshares":
            "\u65e0\u6cd5\u5206\u4eab%1\u7684GIF\u3002\u8981\u5206\u4eab\u5176\u4f59\u6587\u4ef6\u5417\uff1f",
          "desktop.wallpaper.popup.delete":
            "\u8981\u5220\u9664\u6b64\u80cc\u666f\u5417\uff1f\u4f7f\u7528\u6b64\u80cc\u666f\u7684\u804a\u5929\u5c06\u66f4\u6362\u4e3a\u9ed8\u8ba4\u80cc\u666f\u3002",
          "dialog.download.font": "tahoma",
          "dialog.download.message": "\u6b63\u5728\u5347\u7ea7\u2026",
          "dialog.download.messagesub": "\u8bf7\u7a0d\u7b49\u2026",
          "displayname.error.badwords":
            "\u8be5\u540d\u79f0\u65e0\u6cd5\u8bbe\u7f6e\u3002\n\u8bf7\u4f7f\u7528\u5176\u4ed6\u540d\u79f0\u3002 ",
          "duplicategroup.popup.button.gotochatmultiple": "\u6253\u5f00\u7fa4",
          "duplicategroup.popup.createnewgroup": "\u5efa\u7acb\u65b0\u7fa4",
          "duplicategroup.popup.desc.chatexistsmultiple":
            "\u5df2\u5b58\u5728\u5305\u542b\u76f8\u540c\u6210\u5458\u7684\u7fa4\uff08%1\uff09\u3002\u8981\u6253\u5f00\u6b64\u7fa4\u5417\uff1f",
          "duplicategroup.popup.desc.selfchatexists":
            "\u5df2\u5b58\u5728\u6210\u5458\u53ea\u6709\u81ea\u5df1\u60a8\u7684\u7fa4\uff08%1\uff09\u3002\u8981\u6253\u5f00\u6b64\u7fa4\u5417\uff1f",
          "duplicategroup.popup.title.groupexists":
            "\u6b64\u7fa4\u5df2\u5b58\u5728",
          "e2ee.auth.pincode.timeout":
            "\u65e0\u6cd5\u6b63\u5e38\u5904\u7406\u3002\n\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002",
          "e2ee.message.title": "\u65e0\u6cd5\u89e3\u5bc6\u6b64\u6d88\u606f",
          "e2ee.popupbutton.ok": "\u786e\u5b9a",
          "e2ee.popupdesc.pleaseresend":
            "\u57fa\u4e8e\u5e10\u53f7\u5b89\u5168\u8003\u8651\uff0c\u65e0\u6cd5\u663e\u793a\u6b64\u6d88\u606f\u3002\u8bf7\u8ba9\u5bf9\u65b9\u91cd\u65b0\u53d1\u9001\u6d88\u606f\u3002",
          "e2ee.popupdesc.securityerror":
            "\u57fa\u4e8e\u5e10\u53f7\u5b89\u5168\u8003\u8651\uff0c\u65e0\u6cd5\u6253\u5f00\u6b64\u6587\u4ef6\u3002",
          "e2ee.popuptitle.securityerror": "\u5b89\u5168\u6027\u9519\u8bef",
          "emoji.downloadAll.confirm":
            "\u4e0b\u8f7d\u6240\u6709\u8868\u60c5\u8d34\uff1f",
          "friend.msg.block":
            "\u8981\u5c4f\u853d%1\u5417\uff1f\n\u60a8\u5c06\u4e0d\u4f1a\u6536\u5230\u6765\u81ea\u6b64\u5e10\u53f7\u7684\u4efb\u4f55\u6d88\u606f\u3002\u60a8\u53ef\u4ee5\u524d\u5f80\u201c\u8bbe\u7f6e\u201d>\u201c\u597d\u53cb\u201d>\u201c\u5c4f\u853d\u5217\u8868\u201d\uff0c\u89e3\u9664\u5c4f\u853d\u3002",
          "friend.msg.hide":
            "\u662f\u5426\u5728\u597d\u53cb\u5217\u8868\u4e2d\u9690\u85cf%1\uff1f\u60a8\u53ef\u4ee5\u901a\u8fc7\u201c\u8bbe\u7f6e\u201d>\u201c\u597d\u53cb\u201d>\u201c\u9690\u85cf\u5217\u8868\u201d\uff0c\u53d6\u6d88\u9690\u85cf\u3002",
          "gallery.picker.original.btn": "\u539f\u56fe",
          "gnb.guide.allNotification.text":
            "\u5f53\u60a8\u4e0d\u60f3\u88ab\u6253\u6270\u65f6\uff0c\u8bf7\u70b9\u51fb\u5173\u95ed\u6240\u6709\u63d0\u9192\u3002",
          "group.btn.add.title": "\u6dfb\u52a0",
          "group.btn.cancel.title": "\u53d6\u6d88",
          "group.btn.cancelinvite.title": "\u53d6\u6d88",
          "group.btn.invite.title": "\u9080\u8bf7\u597d\u53cb\u52a0\u5165",
          "group.btn.removeMember.title": "\u5220\u9664",
          "group.button.invitefrineds": "\u9080\u8bf7\u597d\u53cb",
          "group.label.addprofile.title": "\u7f16\u8f91",
          "group.label.create.title": "\u5efa\u7acb\u7fa4",
          "group.label.groupname.title": "\u7fa4\u540d\u79f0",
          "group.label.invitee.title": "\u6b63\u5728\u9080\u8bf7",
          "group.label.member.title": "\u6210\u5458",
          "group.label.modify.title": "\u7f16\u8f91\u7fa4",
          "group.label.modifyprofile.title": "\u7f16\u8f91",
          "group.label.nobuddy.title": "\u6ca1\u6709\u6210\u5458",
          "group.label.nobuddytoselect.title":
            "\u6ca1\u6709\u53ef\u4ee5\u9080\u8bf7\u7684\u597d\u53cb\u3002",
          "group.label.nosearchresult.title":
            "\u672a\u627e\u5230\u76f8\u5173\u641c\u7d22\u7ed3\u679c\u3002",
          "group.label.nothing.title":
            "\u60a8\u5c1a\u672a\u9009\u62e9\u4efb\u4f55\u597d\u53cb\u3002",
          "group.label.selectmember.title": "\u9080\u8bf7\u6210\u5458",
          "group.label.unauthorized":
            "\u60a8\u6ca1\u6709\u8be5\u7fa4\u7684\u6743\u9650\u3002",
          "group.menu.delete": "\u5220\u9664",
          "group.menu.leave": "\u79bb\u5f00",
          "group.msg.cancelInvite.confirm":
            "%1\u5c1a\u672a\u52a0\u5165\u6b64\u7fa4\u3002\u662f\u5426\u53d6\u6d88\u9080\u8bf7\uff1f",
          "group.msg.cancelinvite.failed":
            "\u9080\u8bf7\u53d6\u6d88\u5931\u8d25\u3002",
          "group.msg.empty.name": "\u8bf7\u8f93\u5165\u7fa4\u540d\u79f0\u3002",
          "group.msg.kickoutmember.confirm":
            "\u9700\u8981\u4ece\u7fa4\u91cc\u5220\u9664%1\u5417\uff1f",
          "group.msg.kickoutmember.failed":
            "\u65e0\u6cd5\u79fb\u9664\u6b64\u6210\u5458\u3002",
          "group.msg.leavegroup.confirm":
            "\u4e00\u65e6\u9000\u51fa\u7fa4\uff0c\u60a8\u5c06\u65e0\u6cd5\u518d\u67e5\u770b\u7fa4\u6210\u5458\u5217\u8868\u53ca\u7fa4\u804a\u5929\u8bb0\u5f55\u3002\u786e\u5b9a\u8981\u9000\u51fa\u7fa4\u5417\uff1f",
          "group.msg.makegroup.failed": "\u521b\u5efa\u7fa4\u5931\u8d25\u3002",
          "group.msg.overflow.name":
            "\u6700\u591a\u53ef\u8f93\u516520\u4e2a\u5b57\u7b26\u3002\u8bf7\u786e\u8ba4\u5b57\u6570\u3002",
          "group.msg.uploadimge.failed":
            "\u7167\u7247\u4e0a\u4f20\u5931\u8d25\u3002",
          "group.profile.delete": "\u5220\u9664\u4e2a\u4eba\u8d44\u6599",
          "group.profile.select.default":
            "\u4ece\u4e2a\u4eba\u8d44\u6599\u9009\u62e9",
          "group.profile.select.local":
            "\u4ece\u5f53\u524d\u7535\u8111\u9009\u62e9",
          "group.text.placerholder.title": "\u7fa4\u540d\u79f0",
          "group.title.members": "\u6210\u5458",
          "groupcall.ageverification.popupdesc.minorscantuse":
            "\u672a\u6210\u5e74\u7528\u6237\u6682\u65f6\u65e0\u6cd5\u4f7f\u7528\u4f1a\u8bae\u529f\u80fd\u3002",
          "groupcall.alert.popup.error.nowcalling":
            "\u901a\u8bdd\u4e2d\u65e0\u6cd5\u62e8\u6253\u3002\n\u8bf7\u7ed3\u675f\u901a\u8bdd\u540e\u62e8\u6253\u3002",
          "groupcall.call.change.to.video":
            "\u662f\u5426\u5207\u6362\u4e3a\u89c6\u9891\u901a\u8bdd\uff1f",
          "groupcall.call.change.to.video.noCamera":
            "\u7531\u4e8e\u672a\u68c0\u6d4b\u5230\u6444\u50cf\u5934\uff0c\u56e0\u6b64\u4e0d\u4f1a\u663e\u793a\u60a8\u7684\u89c6\u9891\u3002\u4ecd\u7136\u8981\u5207\u6362\u4e3a\u89c6\u9891\u901a\u8bdd\u5417\uff1f",
          "groupcall.call.endwatchtogether.button": "\u505c\u6b62\u5171\u4eab",
          "groupcall.call.invite.complete":
            "\u9080\u8bf7\u5df2\u53d1\u9001\u3002",
          "groupcall.call.invite.tooltip":
            "\u6309\u4e0b\u8be5\u6309\u94ae\u4ee5\u9080\u8bf7\u804a\u5929\u5217\u8868\u4e2d\u7684\u5176\u4ed6\u4eba\u52a0\u5165\u7fa4\u7ec4\u901a\u8bdd\u3002",
          "groupcall.call.popupbutton.cancel": "\u4ee5\u540e\u518d\u8bf4",
          "groupcall.call.popupbutton.switch": "\u5207\u6362",
          "groupcall.call.popupdesc.newcam":
            "\u73b0\u5728\u8981\u5207\u6362\u5230\u201c%1\u201d\u5417\uff1f",
          "groupcall.call.popupdesc.newmic":
            "\u73b0\u5728\u8981\u5207\u6362\u5230\u201c%1\u201d\u5417\uff1f",
          "groupcall.call.popupdesc.newspeaker":
            "\u73b0\u5728\u8981\u5207\u6362\u5230\u201c%1\u201d\u5417\uff1f",
          "groupcall.call.popuptitle.newcam":
            "\u53d1\u73b0\u65b0\u7684\u6444\u50cf\u5934",
          "groupcall.call.popuptitle.newmic":
            "\u53d1\u73b0\u65b0\u7684\u9ea6\u514b\u98ce",
          "groupcall.call.popuptitle.newspeaker":
            "\u53d1\u73b0\u65b0\u7684\u626c\u58f0\u5668",
          "groupcall.call.speaker.many.few": "%1\u548c%2\u4eba",
          "groupcall.call.speaker.many.many": "%1\u548c%2\u4eba",
          "groupcall.call.speaker.many.one": "%1\u548c%2\u4eba",
          "groupcall.call.speaker.many.other": "%1\u548c%2\u4eba",
          "groupcall.call.speaker.many.two": "%1\u548c%2\u4eba",
          "groupcall.call.speaker.many.zero": "%1\u548c%2\u4eba",
          "groupcall.call.toast.loadingyoutube": "\u52a0\u8f7d\u4e2d\u2026",
          "groupcall.call.toast.someoneelsepreparingwatchtogether":
            "%1\u6b63\u5728\u51c6\u5907\u5171\u4eab\u5c4f\u5e55\u3002",
          "groupcall.call.toast.usersjoinedgroupcall.other":
            "%1\u4e0e\u5176\u4ed6%n\u4eba\u5df2\u52a0\u5165\u7fa4\u7ec4\u901a\u8bdd\u3002",
          "groupcall.call.toast.usersleftgroupcall.other":
            "%1\u4e0e\u5176\u4ed6%n\u4eba\u5df2\u9000\u51fa\u7fa4\u7ec4\u901a\u8bdd\u3002",
          "groupcall.call.waiting.msg":
            "\u7b49\u5f85\u5176\u4ed6\u4eba\u52a0\u5165\u901a\u8bdd\u2026\u2026",
          "groupcall.call.watchtogether.button": "\u5171\u4eab\u5c4f\u5e55",
          "groupcall.callsettings.button.numberofparticipants":
            "\u6210\u5458\uff08%1\uff09",
          "groupcall.callsettings.tooltip.handsfreebt":
            "\u8bf7\u5c06%1\u540c\u65f6\u8bbe\u7f6e\u4e3a\u9ea6\u514b\u98ce\u548c\u626c\u58f0\u5668\u3002",
          "groupcall.callsettingspreview.desc.nocamera":
            "\u52a0\u5165\u4f1a\u8bae\u524d\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u901a\u8bdd\u8bbe\u7f6e\u3002\u7531\u4e8e\u7cfb\u7edf\u672a\u80fd\u68c0\u6d4b\u5230\u6444\u50cf\u5934\uff0c\u5176\u4ed6\u7528\u6237\u5c06\u65e0\u6cd5\u770b\u5230\u60a8\u7684\u5f71\u50cf\u3002",
          "groupcall.callsettingspreview.desc.nomic":
            "\u52a0\u5165\u4f1a\u8bae\u524d\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u901a\u8bdd\u8bbe\u7f6e\u3002\u7531\u4e8e\u7cfb\u7edf\u672a\u80fd\u68c0\u6d4b\u5230\u9ea6\u514b\u98ce\uff0c\u5176\u4ed6\u7528\u6237\u5c06\u65e0\u6cd5\u542c\u5230\u60a8\u7684\u58f0\u97f3\u3002",
          "groupcall.callsettingspreview.desc.nomicorcamera":
            "\u52a0\u5165\u4f1a\u8bae\u524d\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u901a\u8bdd\u8bbe\u7f6e\u3002\u7531\u4e8e\u7cfb\u7edf\u672a\u80fd\u68c0\u6d4b\u5230\u9ea6\u514b\u98ce\u548c\u6444\u50cf\u5934\uff0c\u5176\u4ed6\u7528\u6237\u5c06\u65e0\u6cd5\u542c\u5230\u60a8\u7684\u58f0\u97f3\u53ca\u770b\u5230\u60a8\u7684\u5f71\u50cf\u3002",
          "groupcall.chat.alert.popup.error.overflow":
            "\u5f53\u524d\u7ebf\u8def\u7e41\u5fd9\uff0c\u65e0\u6cd5\u5f00\u59cb\u7fa4\u7ec4\u901a\u8bdd\u3002\n\u8bf7\u7a0d\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "groupcall.chat.confirm.popup.cant":
            "\u60a8\u65e0\u6cd5\u52a0\u5165\u8be5\u7fa4\u7ec4\u901a\u8bdd\u56e0\u4e3a\u60a8\u4e0d\u662f\u8be5\u7fa4\u7ec4\u7684\u6210\u5458\u3002",
          "groupcall.chat.confirm.popup.join.few":
            "\u8be5\u7fa4\u7ec4\u901a\u8bdd\u6709%n\u53c2\u4e0e\u8005\u3002\u60a8\u60f3\u52a0\u5165\u8be5\u901a\u8bdd\u5417\uff1f",
          "groupcall.chat.confirm.popup.join.many":
            "\u8be5\u7fa4\u7ec4\u901a\u8bdd\u6709%n\u53c2\u4e0e\u8005\u3002\u60a8\u60f3\u52a0\u5165\u8be5\u901a\u8bdd\u5417\uff1f",
          "groupcall.chat.confirm.popup.join.one":
            "\u8be5\u7fa4\u7ec4\u901a\u8bdd\u6709%n\u53c2\u4e0e\u8005\u3002\u60a8\u60f3\u52a0\u5165\u8be5\u901a\u8bdd\u5417\uff1f",
          "groupcall.chat.confirm.popup.join.other":
            "\u8be5\u7fa4\u7ec4\u901a\u8bdd\u6709%n\u53c2\u4e0e\u8005\u3002\u60a8\u60f3\u52a0\u5165\u8be5\u901a\u8bdd\u5417\uff1f",
          "groupcall.chat.confirm.popup.join.two":
            "\u8be5\u7fa4\u7ec4\u901a\u8bdd\u6709%n\u53c2\u4e0e\u8005\u3002\u60a8\u60f3\u52a0\u5165\u8be5\u901a\u8bdd\u5417\uff1f",
          "groupcall.chat.confirm.popup.join.zero":
            "\u8be5\u7fa4\u7ec4\u901a\u8bdd\u6709%n\u53c2\u4e0e\u8005\u3002\u60a8\u60f3\u52a0\u5165\u8be5\u901a\u8bdd\u5417\uff1f",
          "groupcall.chat.confirm.popup.start":
            "\u6ca1\u6709\u6b63\u5728\u8fdb\u884c\u7684\u7fa4\u7ec4\u901a\u8bdd\u3002\n\u60a8\u60f3\u5f00\u59cb\u7fa4\u7ec4\u901a\u8bdd\u5417\uff1f",
          "groupcall.chat.confirm.popup.start.btn.video":
            "\u5f00\u59cb\u89c6\u9891\u901a\u8bdd",
          "groupcall.chat.confirm.popup.start.btn.voice":
            "\u662f\u5426\u5f00\u59cb\u7fa4\u7ec4\u8bed\u97f3\u901a\u8bdd\uff1f",
          "groupcall.chat.layer.join.btn": "\u52a0\u5165",
          "groupcall.chat.layer.numofmembers.few":
            '<![CDATA[<font color=\\"#527fdc\\">%n\u4eba</font>\u5728\u901a\u8bdd\u3002]]>',
          "groupcall.chat.layer.numofmembers.many":
            '<![CDATA[<font color=\\"#527fdc\\">%n\u4eba</font>\u5728\u901a\u8bdd\u3002]]>',
          "groupcall.chat.layer.numofmembers.one":
            '<![CDATA[<font color=\\"#527fdc\\">%n\u4eba</font>\u5728\u901a\u8bdd\u3002]]>',
          "groupcall.chat.layer.numofmembers.other":
            '<![CDATA[<font color=\\"#527fdc\\">%n\u4eba</font>\u5728\u901a\u8bdd\u3002]]>',
          "groupcall.chat.layer.numofmembers.two":
            '<![CDATA[<font color=\\"#527fdc\\">%n\u4eba</font>\u5728\u901a\u8bdd\u3002]]>',
          "groupcall.chat.layer.numofmembers.zero":
            '<![CDATA[<font color=\\"#527fdc\\">%n\u4eba</font>\u5728\u901a\u8bdd\u3002]]>',
          "groupcall.chat.layer.start.btn": "\u5f00\u59cb",
          "groupcall.chat.layer.start.dscr":
            "\u5f00\u59cb\u7fa4\u7ec4\u901a\u8bdd",
          "groupcall.chat.layer.start.msg":
            "%1\u5df2\u5f00\u59cb\u7fa4\u7ec4\u901a\u8bdd\u3002",
          "groupcall.chat.message.end":
            "\u7fa4\u7ec4\u901a\u8bdd\u5df2\u7ed3\u675f\u3002",
          "groupcall.chat.message.invite":
            "\u6709\u4eba\u9080\u8bf7\u60a8\u52a0\u5165\u7fa4\u7ec4\u901a\u8bdd\uff1a\n%1",
          "groupcall.chat.message.start":
            "\u7fa4\u7ec4\u901a\u8bdd\u5df2\u5f00\u59cb\u3002",
          "groupcall.chatlink.desc.userisinvitedtojoinmeeting":
            "\u60a8\u5df2\u53d7\u9080\u53c2\u52a0LINE\u4f1a\u8bae\u201c%1\u201d\u3002\u8bf7\u70b9\u51fb\u4e0b\u65b9\u94fe\u63a5\u52a0\u5165\u901a\u8bdd\u3002\n%2",
          "groupcall.chatlink.popupdesc.invalidlink":
            "\u94fe\u63a5\u65e0\u6548",
          "groupcall.chatstab.tooltip.startcallwithoutchat":
            "\u5206\u4eab\u5165\u4f1a\u94fe\u63a5\u8f7b\u677e\u5f00\u59cb\u901a\u8bdd\uff01",
          "groupcall.createchat.button.createmeeting": "\u4f1a\u8bae",
          "groupcall.deletemeeting.popupdesc.delete": "\u5220\u9664",
          "groupcall.deletemeeting.popupdesc.deletemeeting":
            "\u8981\u5220\u9664\u6b64\u4f1a\u8bae\u5417\uff1f",
          "groupcall.editmeetingname.popuptitle.edit":
            "\u7f16\u8f91\u4f1a\u8bae\u540d\u79f0",
          "groupcall.groupcallpopup.desc.callparticipantlimitexceeded":
            "\u7fa4\u7ec4\u901a\u8bdd\u7684\u4eba\u6570\u4e0a\u9650\u4e3a%1\u4eba\u3002",
          "groupcall.groupcallsettings.title.participants": "\u6210\u5458",
          "groupcall.groupcallsettings.toast.userwasremoved":
            "%1\u5df2\u88ab\u79fb\u51fa\u4f1a\u8bae\u3002",
          "groupcall.invite.index.not.join": "\u5f85\u5904\u7406",
          "groupcall.invite.selectall": "\u5168\u9009",
          "groupcall.invite.title": "\u9080\u8bf7",
          "groupcall.kickout.popup":
            "\u56e0\u8054\u673a\u903e\u65f6\uff0c\u5df2\u7ed3\u675f\u901a\u8bdd\u3002",
          "groupcall.leavemeeting.popupbutton.leave": "\u79bb\u5f00",
          "groupcall.leavemeeting.popupdesc.historynolongershown":
            "\u5982\u679c\u79bb\u5f00\u4f1a\u8bae\uff0c\u60a8\u5c06\u65e0\u6cd5\u7ee7\u7eed\u67e5\u770b\u6210\u5458\u5217\u8868\u6216\u804a\u5929\u8bb0\u5f55\u3002\u786e\u5b9a\u8981\u79bb\u5f00\u4f1a\u8bae\uff1f",
          "groupcall.meetingintroguide.button.start":
            "\u521b\u5efa\u4f1a\u8bae",
          "groupcall.meetingintroguide.desc.disclaimers":
            "\u9080\u8bf7\u94fe\u63a5\u81ea\u521b\u5efa\u4e4b\u65e5\u8d7790\u5929\u5185\u6709\u6548\u3002\u5f53\u60a8\u52a0\u5165\u4f1a\u8bae\u6216\u5728\u4f1a\u8bae\u804a\u5929\u4e2d\u53d1\u9001\u6d88\u606f\u65f6\uff0c\u5176\u4ed6\u6210\u5458\u5c06\u53ef\u4ee5\u770b\u5230\u60a8\u7684LINE\u540d\u5b57\u548c\u5934\u50cf\u3002",
          "groupcall.meetingintroguide.desc.disclaimersjp":
            "\u9080\u8bf7\u94fe\u63a5\u81ea\u521b\u5efa\u4e4b\u65e5\u8d7790\u5929\u5185\u6709\u6548\u3002 \u5f53\u60a8\u52a0\u5165\u4f1a\u8bae\u6216\u5728\u4f1a\u8bae\u804a\u5929\u4e2d\u53d1\u9001\u6d88\u606f\u65f6\uff0c\u5176\u4ed6\u6210\u5458\u5c06\u53ef\u4ee5\u770b\u5230\u60a8\u7684LINE\u540d\u5b57\u548c\u5934\u50cf\u3002\uff08\u203b\u672a\u6210\u5e74\u7528\u6237\u65e0\u6cd5\u4f7f\u7528\u672c\u529f\u80fd\uff09",
          "groupcall.meetingintroguide.desc.sharelinktostart":
            "\u53ea\u9700\u521b\u5efa\u5e76\u5206\u4eab\u94fe\u63a5\uff0c\u4fbf\u53ef\u8f7b\u677e\u53d1\u8d77\u89c6\u9891\u4f1a\u8bae\uff01\u975e\u597d\u53cb\u7528\u6237\u4e5f\u80fd\u9080\u8bf7\u52a0\u5165\uff01",
          "groupcall.meetingintroguide.header.connect":
            "\u5206\u4eab\u5165\u4f1a\u94fe\u63a5\n\u8f7b\u677e\u5f00\u59cb\u901a\u8bdd",
          "groupcall.meetingintroguide.title.meetings": "\u4f1a\u8bae",
          "groupcall.meetingnameedit.popupbutton.save": "\u4fdd\u5b58",
          "groupcall.meetingparticipantlist.button.remove": "\u79fb\u9664",
          "groupcall.meetingparticipants.button.next": "\u4e0b\u4e00\u6b65",
          "groupcall.meetingparticipants.placeholder.searchuser":
            "\u4f7f\u7528\u59d3\u540d\u641c\u7d22",
          "groupcall.meetingparticipants.title.reportuser": "\u4e3e\u62a5",
          "groupcall.meetings.button.copymeetinglink":
            "\u590d\u5236\u94fe\u63a5",
          "groupcall.meetings.button.createmeeting": "\u521b\u5efa\u4f1a\u8bae",
          "groupcall.meetings.button.shareinvite": "\u9080\u8bf7",
          "groupcall.meetings.button.startmeeting": "\u5f00\u59cb",
          "groupcall.meetings.desc.createdjustnow": "\u521a\u521a",
          "groupcall.meetings.desc.usersmeeting": "%1\u7684\u4f1a\u8bae",
          "groupcall.meetings.popup.policyblock":
            "\u7531\u4e8e\u60a8\u7684\u5e10\u53f7\u8fdd\u53cd\u4e86\u670d\u52a1\u6761\u6b3e\uff0c\u56e0\u6b64\u65e0\u6cd5\u4f7f\u7528LINE\u4f1a\u8bae\u3002",
          "groupcall.meetings.popupdesc.networkerror":
            "\u7f51\u7edc\u51fa\u73b0\u95ee\u9898\uff0c\u65e0\u6cd5\u52a0\u8f7d\u9875\u9762\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "groupcall.meetings.toast.meetingcreated":
            "\u5df2\u521b\u5efa\u4f1a\u8bae",
          "groupcall.meetingscreen.tooltip.invitemorepeople":
            "\u9080\u8bf7\u66f4\u591a\u6210\u5458\u52a0\u5165\u4f1a\u8bae\u3002",
          "groupcall.participantlist.desc.cameraturnedoff":
            "\u5df2\u5173\u95ed\u6444\u50cf\u5934",
          "groupcall.participantlist.desc.gridview":
            "\u5207\u6362\u4e3a\u5e73\u94fa\u663e\u793a",
          "groupcall.participantlist.desc.muted": "\u5df2\u9759\u97f3",
          "groupcall.participantlist.desc.participantview":
            "\u5c06\u6b64\u7528\u6237\u56fa\u5b9a\u81f3\u7126\u70b9\u753b\u9762",
          "groupcall.participantlist.placeholder.searchbyname":
            "\u6309\u59d3\u540d\u641c\u7d22",
          "groupcall.previewscreen.desc.nameprofilephotoshown":
            "\u60a8\u7684LINE\u540d\u5b57\u548c\u5934\u50cf\n\u5c06\u5728\u4f1a\u8bae\u4e2d\u516c\u5f00\u663e\u793a\u3002",
          "groupcall.removefrommeeting.popupbutton.remove": "\u79fb\u9664",
          "groupcall.removefrommeeting.popupdesc.removeuser":
            "\u786e\u5b9a\u8981\u5c06%1\u4ece\u4f1a\u8bae\u4e2d\u79fb\u9664\u5417\uff1f",
          "groupcall.removeuser.popupdesc.temporaryerror":
            "\u53d1\u751f\u4e34\u65f6\u9519\u8bef\uff0c\u65e0\u6cd5\u79fb\u9664\u6b64\u6210\u5458\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "groupcall.report.button.content": "\u4e0d\u9002\u5b9c\u5185\u5bb9",
          "groupcall.report.button.harrassment":
            "\u53d1\u9001\u8272\u60c5\u4fe1\u606f",
          "groupcall.report.button.impersonation": "\u5047\u5192",
          "groupcall.report.button.impersonation.inquirypopup":
            "\u8bf7\u60a8\u6253\u5f00\u610f\u89c1\u53cd\u9988\u8868\u5e76\u586b\u5199\u5fc5\u8981\u4fe1\u606f\u3002\u60a8\u6240\u63d0\u4f9b\u7684\u8be6\u7ec6\u5185\u5bb9\u53ef\u534f\u52a9\u8c03\u67e5\u6b64\u5047\u5192\u6848\u4ef6\u3002",
          "groupcall.report.button.impersonation.inquirypopup.decline":
            "\u8df3\u8fc7",
          "groupcall.report.button.impersonation.inquirypopup.preceed":
            "\u7ee7\u7eed",
          "groupcall.report.button.other": "\u5176\u4ed6",
          "groupcall.report.button.report": "\u4e3e\u62a5",
          "groupcall.report.button.scam": "\u6b3a\u8bc8",
          "groupcall.report.button.spam":
            "\u6ee5\u53d1\u5e7f\u544a\u4fe1\u606f",
          "groupcall.report.desc.reportreason":
            "\u4e3e\u62a5\u540e\uff0c\u6b64\u7528\u6237\u7684\u76f8\u5173\u4fe1\u606f\u53ca\u622a\u56fe\u5c06\u81ea\u52a8\u53d1\u9001\u7ed9LY Corporation\u3002",
          "groupcall.report.popupbutton.donotremove": "\u4e0d\u79fb\u9664",
          "groupcall.report.popupbutton.remove": "\u79fb\u9664",
          "groupcall.report.popupdesc.removeuser":
            "\u5df2\u4e3e\u62a5\u3002\n\u8981\u5c06\u6b64\u7528\u6237\u4ece\u4f1a\u8bae\u4e2d\u79fb\u9664\u5417\uff1f",
          "groupcall.report.subtitle.reportreason":
            "\u8bf7\u9009\u62e9\u60a8\u4e3e\u62a5\u7684\u7406\u7531\u3002",
          "groupcall.screenshare.receiver.failreceive":
            "\u5c4f\u5e55\u52a0\u8f7d\u4e2d...",
          "groupcall.screenshare.receiver.senderdesc":
            "%1\u6b63\u5728\u5171\u4eab\u5c4f\u5e55\u3002",
          "groupcall.screenshare.receiver.viewscreen":
            "\u8fd4\u56de\u5171\u4eab\u5c4f\u5e55",
          "groupcall.screenshare.sender.btn.stop": "\u505c\u6b62\u5171\u4eab",
          "groupcall.screenshare.sender.desc":
            "\u60a8\u6b63\u5728\u5171\u4eab\u81ea\u5df1\u7684\u5c4f\u5e55\u3002",
          "groupcall.settings.menu.report": "\u4e3e\u62a5",
          "groupcall.startmeeting.popupdesc.userexceededlimit":
            "\u60a8\u6700\u591a\u53ea\u80fd\u521b\u5efa30\u4e2a\u4f1a\u8bae\u3002\u8bf7\u5220\u9664\u4e0d\u9700\u8981\u7684\u4f1a\u8bae\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "groupcall.tempchat.popupdesc.cantinvitethroughchat":
            "\u5982\u9700\u9080\u8bf7\u5176\u4ed6\u7528\u6237\u52a0\u5165\u4f1a\u8bae\uff0c\u8bf7\u590d\u5236\u94fe\u63a5\u5e76\u5206\u4eab\u7ed9\u53c2\u52a0\u6210\u5458\u3002",
          "groupcall.title": "\u7fa4\u7ec4\u901a\u8bdd",
          "groupcall.toast.deviceerror.camera":
            "\u5176\u4ed6\u5e94\u7528\u6b63\u5728\u4f7f\u7528\u6b64\u76f8\u673a\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6\u76f8\u673a\u3002",
          "groupcall.toast.newdevice.camera":
            "\u5df2\u5207\u6362\u5230\u6444\u50cf\u5934\u201c%1\u201d\u3002",
          "groupcall.toast.newdevice.mic":
            "\u5df2\u5207\u6362\u5230\u9ea6\u514b\u98ce\u201c%1\u201d\u3002",
          "groupcall.toast.newdevice.speaker":
            "\u5df2\u5207\u6362\u5230\u626c\u58f0\u5668\u201c%1\u201d\u3002",
          "groupcall.verifyage.desc.verifyageinmobileversion":
            "\u60a8\u5fc5\u987b\u9a8c\u8bc1\u5e74\u9f84\u540e\u624d\u80fd\u4f7f\u7528\u6b64\u529f\u80fd\u3002\n\u8bf7\u81f3\u667a\u80fd\u624b\u673a\u7248LINE\u4e2d\u7684\u201c\u8bbe\u7f6e\u201d>\u201c\u5e74\u9f84\u786e\u8ba4\u201d\u8fdb\u884c\u9a8c\u8bc1\u3002",
          "groupcall.video.alert.member.join":
            "%1\u52a0\u5165\u7fa4\u7ec4\u901a\u8bdd\u3002",
          "groupcall.video.alert.member.leave":
            "%1\u9000\u51fa\u7fa4\u7ec4\u901a\u8bdd\u3002",
          "groupcall.video.alert.streaming.off.member":
            "\u60a8\u5df2\u5173\u95ed\u6b64\u4eba\u7684\u89c6\u9891\u3002\n\u518d\u6b21\u6253\u5f00\u5373\u53ef\u67e5\u770b\u3002",
          "groupcall.video.chat.error.without.camera.body":
            "\u672a\u68c0\u6d4b\u5230\u6444\u50cf\u5934\u3002\u662f\u5426\u8981\u4ee5\u8bed\u97f3\u5f62\u5f0f\u52a0\u5165\u6b64\u7fa4\u7ec4\u901a\u8bdd\uff1f",
          "groupcall.video.chat.error.without.camera.btn.video":
            "\u52a0\u5165\u89c6\u9891\u901a\u8bdd",
          "groupcall.video.chat.error.without.camera.btn.voice":
            "\u52a0\u5165\u8bed\u97f3\u901a\u8bdd",
          "groupcall.video.chat.layer.start.dscr":
            "\u5f00\u59cb\u7fa4\u7ec4\u89c6\u9891\u901a\u8bdd\u3002",
          "groupcall.video.chat.layer.start.msg":
            "%1\u5df2\u5f00\u59cb\u7fa4\u7ec4\u89c6\u9891\u901a\u8bdd\u3002",
          "groupcall.video.chat.layer.start.shortmsg":
            "\u89c6\u9891\u901a\u8bdd\u5df2\u5f00\u59cb",
          "groupcall.video.chat.message.invite":
            "\u60a8\u6536\u5230\u4e86\u6b64\u7fa4\u89c6\u9891\u901a\u8bdd\u9080\u8bf7\uff1a\n\u201c%1\u201d",
          "groupcall.video.chat.message.start":
            "\u7fa4\u7ec4\u89c6\u9891\u901a\u8bdd\u5df2\u5f00\u59cb\u3002",
          "groupcall.video.desc.guide.tryCall":
            "\u60a8\u73b0\u5728\u53ef\u4ee5\u901a\u8fc7\u684c\u9762\u7248LINE\u53c2\u4e0e\u7fa4\u7ec4\u89c6\u9891\u901a\u8bdd\u3002 ",
          "groupcall.video.error.change.to.voice":
            "\u7531\u4e8e\u7f51\u7edc\u4e0d\u7a33\u5b9a\u6216\u901a\u8bdd\u91cf\u592a\u5927\uff0c\u5df2\u5207\u6362\u4e3a\u8bed\u97f3\u901a\u8bdd\u3002",
          "groupcall.video.error.not.video.member":
            "\u6b64\u7528\u6237\u4ee5\u8bed\u97f3\u5f62\u5f0f\u52a0\u5165\u901a\u8bdd\uff0c\u56e0\u6b64\u65e0\u6cd5\u663e\u793a\u89c6\u9891\u3002",
          "groupcall.video.fullview.streaming.fail.body":
            "\u65e0\u6cd5\u52a0\u8f7d%1\u7684\u89c6\u9891\u3002\n\u8bf7\u91cd\u8bd5\u3002",
          "groupcall.video.fullview.streaming.fail.button": "\u91cd\u8bd5",
          "groupcall.video.fullview.streaming.off.body":
            "\u60a8\u5df2\u5173\u95ed%1\u7684\u89c6\u9891\u3002\n\u518d\u6b21\u6253\u5f00\u5373\u53ef\u67e5\u770b\u3002",
          "groupcall.video.menu.streaming.off": "\u5173\u95ed\u89c6\u9891",
          "groupcall.video.menu.streaming.on": "\u6253\u5f00\u89c6\u9891",
          "groupcall.video.title": "\u7fa4\u7ec4\u89c6\u9891\u901a\u8bdd",
          "groupcall.video.toast.cameraoff":
            "\u6444\u50cf\u5934\u548c\u7279\u6548\u7a97\u53e3\u90fd\u5df2\u5173\u95ed\u3002",
          "groupcall.video.tooltip.focusview":
            "\u5207\u6362\u4e3a\u7126\u70b9\u663e\u793a",
          "groupcall.video.tooltip.gridview":
            "\u5207\u6362\u4e3a\u5e73\u94fa\u663e\u793a",
          "groupcall.video.tooltip.profilelist": "\u67e5\u770b\u6210\u5458",
          "groupcall.video.tooltip.videolayout":
            "\u66f4\u6539\u89c6\u9891\u663e\u793a\u65b9\u5f0f",
          "groupcall.viewmode.desc.focusviewcenter":
            "\u7126\u70b9\u663e\u793a\uff08\u5c45\u4e2d\uff09",
          "groupcall.viewmode.desc.focusviewleft":
            "\u7126\u70b9\u663e\u793a\uff08\u5de6\uff09",
          "groupcall.viewmode.desc.focusviewright":
            "\u7126\u70b9\u663e\u793a\uff08\u53f3\uff09",
          "groupcall.viewmode.desc.gridview": "\u5e73\u94fa\u663e\u793a",
          "groupcall.voice.chat.confirm.popup.join":
            "\u7fa4\u7ec4\u8bed\u97f3\u901a\u8bdd\u8fdb\u884c\u4e2d\uff0c\u60a8\u662f\u5426\u8981\u52a0\u5165\uff1f",
          "groupcall.voice.chat.layer.start.dscr":
            "\u5f00\u59cb\u7fa4\u7ec4\u8bed\u97f3\u901a\u8bdd\u3002",
          "groupcall.voice.chat.layer.start.msg":
            "%1\u5df2\u5f00\u59cb\u7fa4\u7ec4\u8bed\u97f3\u901a\u8bdd\u3002",
          "groupcall.voice.chat.layer.start.shortmsg":
            "\u8bed\u97f3\u901a\u8bdd\u5df2\u5f00\u59cb",
          "groupcall.voice.chat.message.invite":
            "\u60a8\u6536\u5230\u4e86\u6b64\u7fa4\u7684\u8bed\u97f3\u901a\u8bdd\u9080\u8bf7\uff1a\n\u201c%1\u201d",
          "groupcall.voice.chat.message.start":
            "\u7fa4\u7ec4\u8bed\u97f3\u901a\u8bdd\u5df2\u5f00\u59cb\u3002 ",
          "groupcall.voice.title": "\u7fa4\u7ec4\u8bed\u97f3\u901a\u8bdd",
          "groupcall.watchtogethercall.popupbutton.start": "\u5f00\u59cb",
          "groupcall.watchtogethercall.popupdesc.startwatchtogetherforeveryone":
            "\u8981\u5f00\u59cb\u4e0e\u4ed6\u4eba\u5171\u540c\u89c2\u770b\u6b64\u89c6\u9891\u5417\uff1f",
          "groupcall.watchtogethercall.toast.currentlyinsession":
            "%1\u6b63\u5728\u5171\u4eab\u5c4f\u5e55\u3002",
          "groupcall.watchtogethercall.toast.userendedwatchtogether":
            "%1\u5df2\u7ed3\u675f\u5171\u4eab\u5c4f\u5e55\u3002",
          "groupcall.watchtogethercall.toast.userstartedwatchtogether":
            "%1\u5df2\u5f00\u59cb\u5171\u4eab\u5c4f\u5e55\u3002",
          "groupcall.watchtogethermenu.button.screenshare":
            "\u60a8\u7684\u5c4f\u5e55",
          "groupcall.watchtogethermenu.button.youtube": "YouTube",
          "groupcall.watchtogethermenu.desc.policy":
            "\u9690\u79c1\u6743\u653f\u7b56",
          "groupcall.watchtogethermenu.desc.searchonyoutube":
            "\u641c\u7d22YouTube\u94fe\u63a5\u3001\u5173\u952e\u8bcd",
          "groupcall.watchtogethermenu.desc.terms": "\u670d\u52a1\u6761\u6b3e",
          "groupcall.youtube.edge.popup.btn.install": "\u7ee7\u7eed",
          "groupcall.youtube.edge.popup.desc":
            "\u60a8\u9700\u8981\u5148\u4e0b\u8f7dChromium\u7248Microsoft Edge\u624d\u80fd\u5171\u4eabYouTube\u89c6\u9891\u3002\u8981\u7ee7\u7eed\u524d\u5f80Microsoft\u7f51\u7ad9\u5417\uff1f",
          "groupcall.youtube.endduetoerror":
            "\u53d1\u751f\u4e34\u65f6\u9519\u8bef\uff0c\u5df2\u7ed3\u675f\u5206\u4eabYouTube\u89c6\u9891\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "groupcall.youtube.error.reinstall":
            "\u53d1\u751f\u4e34\u65f6\u9519\u8bef\uff0c\u65e0\u6cd5\u64ad\u653e\u89c6\u9891\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002\u5982\u679c\u95ee\u9898\u4f9d\u7136\u5b58\u5728\uff0c\u8bf7\u5c1d\u8bd5\u91cd\u65b0\u5b89\u88c5\u6d4f\u89c8\u5668\u3002",
          "groupcall.youtube.paste": "\u5171\u4eabYouTube\u89c6\u9891",
          "groupcall.youtube.paste.btn.play": "\u64ad\u653e",
          "groupcall.youtube.paste.btn.search": "\u9884\u89c8",
          "groupcall.youtube.paste.desc":
            "\u641c\u7d22\u60f3\u8981\u4e0e\u4ed6\u4eba\u5171\u540c\u89c2\u770b\u7684\u89c6\u9891\u3002\uff08\u63a8\u8350\u4f7f\u7528\u8033\u673a\uff09",
          "groupcall.youtube.paste.noresult":
            "\u65e0\u6cd5\u52a0\u8f7d\u89c6\u9891\u3002\u8bf7\u786e\u8ba4\u94fe\u63a5\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "groupcall.youtube.paste.startnewone.popup.btn.play": "\u64ad\u653e",
          "groupcall.youtube.paste.startnewone.popup.desc":
            "\u662f\u5426\u6682\u505c\u5f53\u524d\u89c6\u9891\uff0c\u5e76\u64ad\u653e\u65b0\u89c6\u9891\uff1f",
          "groupcall.youtube.paste.toast.currentlyinsession":
            "%1\u5df2\u5728\u5206\u4eabYouTube\u89c6\u9891\u3002",
          "groupcall.youtube.paste.toast.error":
            "\u53d1\u751f\u4e34\u65f6\u9519\u8bef\uff0c\u65e0\u6cd5\u5171\u4eab\u89c6\u9891\u3002",
          "groupcall.youtube.paste.unknownerror":
            "\u53d1\u751f\u4e34\u65f6\u9519\u8bef\uff0c\u65e0\u6cd5\u52a0\u8f7d\u89c6\u9891\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "groupcall.youtube.receiver.newvideo":
            "%1\u6b63\u5728\u51c6\u5907\u65b0\u7684\u89c6\u9891\u3002",
          "groupcall.youtube.receiver.playvideo": "\u8fd4\u56de\u89c6\u9891",
          "groupcall.youtube.receiver.senderdesc":
            "%1\u6b63\u5728\u64ad\u653e\u89c6\u9891\u3002",
          "groupcall.youtube.receiver.tooltip.mute": "\u9759\u97f3",
          "groupcall.youtube.receiver.tooltip.unmute":
            "\u53d6\u6d88\u9759\u97f3",
          "groupcall.youtube.receiver.videopaused":
            "%1\u5df2\u6682\u505c\u64ad\u653e\u89c6\u9891\u3002",
          "groupcall.youtube.sender.btn.stop":
            "\u7ed3\u675f\u5171\u4eabYouTube",
          "groupcall.youtube.sender.desc":
            "\u6b63\u5728\u5171\u4eab\u89c6\u9891",
          "groupcall.youtube.stop.popup.btn.confirm": "\u7ed3\u675f",
          "groupcall.youtube.stop.popup.desc":
            "\u8981\u505c\u6b62\u5206\u4eab\u6b64YouTube\u89c6\u9891\u5417\uff1f",
          "groupcall.youtube.windows.serveroff.popup.desc":
            "Windows\u64cd\u4f5c\u7cfb\u7edf\u76ee\u524d\u4e0d\u652f\u6301\u5171\u4eabYouTube\u89c6\u9891\u529f\u80fd\u3002",
          "groupchat.dynamic.group.title.invitecanceled.updatename":
            "%1\u5df2\u53d6\u6d88\u9080\u8bf7%2\u52a0\u5165\u7fa4\u3002",
          "groupchat.dynamic.group.title.memberinvited.updatename":
            '<![CDATA[%1\u5df2\u5c06%2\u6dfb\u52a0\u5230\u7fa4\u3002<a href="line://nv/group/settings/groupname/chatId=%3">\u66f4\u6539\u7fa4\u540d\u79f0</a>]]>',
          "groupchat.dynamic.group.title.memberjoined.updatename":
            '<![CDATA[%1\u5df2\u52a0\u5165\u7fa4\u3002<a href="line://nv/group/settings/groupname/chatId=%2">\u66f4\u6539\u7fa4\u540d\u79f0</a>]]>',
          "groupchat.dynamic.group.title.memberremoved.updatename":
            "%1\u5df2\u5c06%2\u79fb\u51fa\u7fa4\u3002",
          "groupchat.linkqr.error.block":
            "\u76ee\u524d\u8be5\u7fa4\u65e0\u6cd5\u4f7f\u7528\u7fa4\u94fe\u63a5\u6216\u4e8c\u7ef4\u7801\u9080\u8bf7\u6210\u5458\u3002",
          "groupchat.linkqr.error.renew":
            "\u8be5\u7fa4\u4e0d\u5b58\u5728\u3002",
          "groupchat.push.invitedtojoingroup":
            "%1\u5df2\u9080\u8bf7\u60a8\u52a0\u5165\u7fa4\u3002",
          "groupchat.push.someonejoinsgroup":
            "%1\u5df2\u52a0\u5165\u7fa4\u3002",
          "groupchat.systemmsg.allowjoiningvialinkorqr":
            "%1\u5df2\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u94fe\u63a5\u6216\u4e8c\u7ef4\u7801\u52a0\u5165\u7fa4\u3002",
          "groupchat.systemmsg.cancelinvite":
            "%1\u5df2\u53d6\u6d88\u9080\u8bf7%2\u52a0\u5165\u7fa4\u3002",
          "groupchat.systemmsg.cancelinvite.updatename":
            '<![CDATA[%1\u5df2\u53d6\u6d88\u9080\u8bf7%2\u5165\u7fa4\u3002\u7fa4\u540d\u79f0\u4e0d\u4f1a\u81ea\u52a8\u66f4\u6539\u3002<a href="line://nv/group/settings/groupname/chatId=%3">\u66f4\u6539\u7fa4\u540d\u79f0</a>]]>',
          "groupchat.systemmsg.changegroupname":
            "%1\u5c06\u7fa4\u540d\u79f0\u66f4\u6539\u4e3a\u201c%2\u201d\u3002",
          "groupchat.systemmsg.changegroupphoto":
            "%1\u66f4\u6539\u4e86\u7fa4\u5934\u50cf\u56fe\u7247\u3002",
          "groupchat.systemmsg.disablejoiningvialinkorqr":
            "%1\u5df2\u7981\u6b62\u7528\u6237\u901a\u8fc7\u94fe\u63a5\u6216\u4e8c\u7ef4\u7801\u52a0\u5165\u7fa4\u3002",
          "groupchat.systemmsg.inviteuser":
            "%1\u5df2\u9080\u8bf7%2\u52a0\u5165\u7fa4\u3002\u8bf7\u8010\u5fc3\u7b49\u5f85\u65b0\u6210\u5458\u7684\u52a0\u5165\u3002",
          "groupchat.systemmsg.inviteuser1n":
            "%1\u5df2\u5c06%2\u6dfb\u52a0\u81f3\u7fa4\u3002",
          "groupchat.systemmsg.inviteuser1n.atcreation.updatename":
            '<![CDATA[%1\u5df2\u5c06%2\u6dfb\u52a0\u81f3\u7fa4\u3002<a href="line://nv/group/settings/groupname/chatId=%3">\u66f4\u6539\u7fa4\u540d\u79f0</a>]]>',
          "groupchat.systemmsg.inviteuser1n.updatename":
            '<![CDATA[%1\u5df2\u5c06%2\u6dfb\u52a0\u81f3\u7fa4\u3002\u7fa4\u540d\u79f0\u4e0d\u4f1a\u81ea\u52a8\u66f4\u6539\u3002<a href="line://nv/group/settings/groupname/chatId=%3">\u66f4\u6539\u7fa4\u540d\u79f0</a>]]>',
          "groupchat.systemmsg.kickoutuser":
            "%1\u5df2\u5c06%2\u79fb\u51fa\u7fa4\u3002",
          "groupchat.systemmsg.kickoutuser.updatename":
            '<![CDATA[%1\u5df2\u5c06%2\u79fb\u9664\u51fa\u7fa4\u3002\u7fa4\u540d\u79f0\u4e0d\u4f1a\u81ea\u52a8\u66f4\u6539\u3002<a href="line://nv/group/settings/groupname/chatId=%3">\u66f4\u6539\u7fa4\u540d\u79f0</a>]]>',
          "groupchat.systemmsg.userjoin":
            "%1\u5df2\u52a0\u5165\u8be5\u7fa4\u3002",
          "groupchat.systemmsg.userjoin.updatename":
            "%1\u5df2\u52a0\u5165\u8be5\u7fa4\u3002",
          "groupchat.systemmsg.userleave":
            "%1\u5df2\u9000\u51fa\u8be5\u7fa4\u3002",
          "groupchat.systemmsg.userleave.updatename":
            '<![CDATA[%1\u5df2\u9000\u7fa4\u3002\u7fa4\u540d\u79f0\u4e0d\u4f1a\u81ea\u52a8\u66f4\u6539\u3002<a href="line://nv/group/settings/groupname/chatId=%2">\u66f4\u6539\u7fa4\u540d\u79f0</a>]]>',
          "groupchat.systemmsg.youareinvited":
            "%1\u5df2\u9080\u8bf7\u60a8\u52a0\u5165\u7fa4\u3002",
          "grouphome.album.alert.inprogress":
            "\u65e0\u6cd5\u5728\u4e0a\u4f20\u9879\u76ee\u65f6\u6dfb\u52a0\u9879\u76ee\u6216\u5220\u9664\u76f8\u518c\u3002\n\u8bf7\u7a0d\u5019\u518d\u8bd5\u4e00\u6b21\u3002",
          "grouphome.album.alert.reupload":
            "\u8981\u518d\u6b21\u4e0a\u4f20\u9879\u76ee\u5417\uff1f",
          "grouphome.album.alert.save.failed":
            "\u65e0\u6cd5\u4fdd\u5b58\u9879\u76ee\u3002",
          "grouphome.album.alert.stopUpload": "\u505c\u6b62\u6dfb\u52a0",
          "grouphome.album.alert.unregistereduser":
            "\u65e0\u6cd5\u4e0e\u5df2\u5220\u9664\u5e10\u53f7\u7684\u7528\u6237\u5171\u540c\u4f7f\u7528\u76f8\u518c\u3002",
          "grouphome.album.label.reupload": "\u7ee7\u7eed\u6dfb\u52a0",
          "grouphome.albumdetail.addPhoto": "\u6dfb\u52a0\u7167\u7247",
          "grouphome.albumdetail.alert.changeAlbum":
            "\u5220\u9664\u76f8\u518c\uff0c \u76f8\u518c\u5185\u7684\u7167\u7247\u4e5f\u5c06\u88ab\u5220\u9664\u3002\n\u76f8\u518c\u4e00\u7ecf\u5220\u9664\u5c06\u65e0\u6cd5\u590d\u5143\u3002\n\u662f\u5426\u8981\u5220\u9664\u8be5\u76f8\u518c\uff1f",
          "grouphome.albumdetail.changeName": "\u66f4\u6539\u76f8\u518c\u540d",
          "grouphome.albumdetail.delete": "\u5220\u9664\u76f8\u518c",
          "grouphome.albumdetail.empty.desc":
            "\u5c06\u90a3\u4e9b\u5feb\u4e50\u7684\u8fc7\u5f80\u548c\u73cd\u8d35\u7684\u56de\u5fc6\u90fd\u4fdd\u5b58\u5728\u76f8\u518c\u4e2d\u5427\uff01",
          "grouphome.albumdetail.empty.title": "\u65e0\u9879\u76ee\u6dfb\u52a0",
          "grouphome.albumdetail.error":
            "\u83b7\u53d6\u8d44\u6599\u5931\u8d25\u2026 \n\u8bf7\u91cd\u8bd5\u3002",
          "grouphome.albumdetail.saveComplete":
            "\u753b\u50cf\u5df2\u4fdd\u5b58\u3002",
          "grouphome.albumdetail.saveall": "\u5168\u90e8\u4fdd\u5b58",
          "grouphome.albumdetail.savingPhoto":
            "\u6b63\u5728\u4fdd\u5b58\u9879\u76ee...",
          "grouphome.albumdetail.selectCount.plurals.few":
            "\u9009\u62e9%n\u5f20",
          "grouphome.albumdetail.selectCount.plurals.many":
            "\u9009\u62e9%n\u5f20",
          "grouphome.albumdetail.selectCount.plurals.one":
            "\u9009\u62e9%n\u5f20",
          "grouphome.albumdetail.selectCount.plurals.other":
            "\u9009\u62e9%n\u5f20",
          "grouphome.albumdetail.selectCount.plurals.two":
            "\u9009\u62e9%n\u5f20",
          "grouphome.albumdetail.selectCount.plurals.zero":
            "\u9009\u62e9%n\u5f20",
          "grouphome.albumdetail.title.changeAlbum":
            "\u66f4\u6539\u76f8\u518c\u540d",
          "grouphome.albumdetail.uploader": "By %1",
          "grouphome.alert.addphoto":
            "\u8981\u53d6\u6d88\u6dfb\u52a0\u9879\u76ee\u5417\uff1f\n\u5df2\u6dfb\u52a0\u7684\u9879\u76ee\u4e0d\u4f1a\u88ab\u4fdd\u5b58\u3002",
          "grouphome.alert.albumLimitCount":
            "\u65e0\u6cd5\u521b\u5efa\u66f4\u591a\u76f8\u518c\u3002\n\u6700\u591a\u53ef\u4ee5\u521b\u5efa%n\u4e2a\u76f8\u518c\u3002",
          "grouphome.alert.alreadyDeleteAlbum":
            "\u8be5\u76f8\u518c\u5df2\u88ab\u5220\u9664\u3002",
          "grouphome.alert.alreadyDeletePhoto":
            "\u6b64\u9879\u76ee\u5df2\u88ab\u5220\u9664\u3002",
          "grouphome.alert.makealbum":
            "\u60a8\u7684\u76f8\u518c\u5c1a\u672a\u521b\u5efa\u5b8c\u6210\u3002\u786e\u5b9a\u8981\u653e\u5f03\u521b\u5efa\u5e76\u79bb\u5f00\u5417\uff1f",
          "grouphome.alert.photoLimitCount":
            "\u65e0\u6cd5\u4e0a\u4f20\u66f4\u591a\u7167\u7247\u3002\n\u6bcf\u4e2a\u76f8\u518c\u6700\u591a\u53ef\u4ee5\u4e0a\u4f20%1\u5f20\u7167\u7247\u3002",
          "grouphome.label.album": "\u76f8\u518c",
          "grouphome.label.album.addPhoto": "\u6dfb\u52a0\u7167\u7247",
          "grouphome.label.album.changeName": "\u66f4\u6539\u76f8\u518c\u540d",
          "grouphome.label.album.delete": "\u5220\u9664\u76f8\u518c",
          "grouphome.label.album.empty":
            "\u5c1a\u672a\u521b\u5efa\u8bb0\u4e8b\u672c\u6216\u76f8\u518c\u3002",
          "grouphome.label.album.make": "\u521b\u5efa\u76f8\u518c",
          "grouphome.label.albumName": "\u76f8\u518c\u540d",
          "grouphome.label.post": "\u8bb0\u4e8b\u672c",
          "grouphome.label.post.empty":
            "\u5c1a\u672a\u6dfb\u52a0\u8bb0\u4e8b\u672c\u3002",
          "grouphome.label.showAllPost": "\u6240\u6709\u8bb0\u4e8b\u672c",
          "grouphome.label.showUserHome": "\u524d\u5f80 %1\u7684\u4e3b\u9875",
          "grouphome.label.showallalbum":
            "\u67e5\u770b\u5168\u90e8\u76f8\u518c",
          "grouphome.label.writepost": "\u65b0\u5efa\u8bb0\u4e8b\u672c",
          "grouphome.member.alert.joinGroup":
            "\u60a8\u5df2\u52a0\u5165\u8be5\u7fa4\u3002",
          "grouphome.member.label.showGroup": "\u67e5\u770b\u7fa4",
          "grouphome.post.alert.unregistereduser":
            "\u60a8\u4e0d\u80fd\u4f7f\u7528\u5e10\u6237\u5df2\u88ab\u5220\u9664\u7528\u6237\u7684\u8bb0\u4e8b\u672c\u3002",
          "gruopchat.dynamic.group.title.memberleft.updatename":
            "%1\u5df2\u9000\u7fa4\u3002",
          "hub.menubar.tooltip": "Check out LINE services in LINE HUB.",
          "hub.menubar.tooltip.renew":
            "LINE HUB\u5168\u65b0\u5716\u793a\uff0c\u638c\u63e1\u6240\u6709LINE\u7cbe\u9078\u5167\u5bb9\uff01",
          "image.viewer.btn.edit.tooltip":
            "\u6b63\u5728\u6253\u5f00\u56fe\u7247\u7f16\u8f91\u5668...",
          "image.viewer.btn.minimizesize.tooltip":
            "\u6309\u7a97\u53e3\u5927\u5c0f\u663e\u793a",
          "image.viewer.cancel": "\u53d6\u6d88",
          "image.viewer.copy": "\u590d\u5236",
          "image.viewer.crop": "\u88c1\u526a\u7167\u7247",
          "image.viewer.download.error": "\u53d1\u751f\u9519\u8bef\u3002",
          "image.viewer.loading.error":
            "\u7cfb\u7edf\u53d1\u751f\u9519\u8bef\uff0c\n\u6b64\u9879\u64cd\u4f5c\u6ca1\u6709\u5b8c\u6210\u3002\n\u8bf7\u91cd\u8bd5\u3002",
          "image.viewer.ok": "\u786e\u5b9a",
          "image.viewer.save": "\u4e0b\u8f7d",
          "image.viewer.share.chat": "\u5206\u4eab\u81f3\u804a\u5929",
          "imageEditor.btn.doNotSave": "\u4e0d\u4fdd\u5b58",
          "imageEditor.msg.onEditing":
            "\u662f\u5426\u5c06\u7f16\u8f91\u540e\u7684\u56fe\u7247\u4fdd\u5b58\u5230\u60a8\u7684\u7535\u8111\u4e0a\uff1f",
          "imageEditor.msg.onModified":
            "\u6b64\u56fe\u7247\u5305\u542b\u672a\u4fdd\u5b58\u7684\u66f4\u6539\u3002",
          "imageEditor.msg.toobig":
            "\u6b64\u56fe\u7247\u5206\u8fa8\u7387\u592a\u9ad8\uff0c\u65e0\u6cd5\u7f16\u8f91\u3002",
          "invite.btn.cancel.title": "\u53d6\u6d88",
          "invite.btn.invite.title": "\u786e\u5b9a",
          "invite.label.create.title": "\u9080\u8bf7\u597d\u53cb\u52a0\u5165",
          "invite.label.invitee.title": "\u9080\u8bf7",
          "invite.label.nobuddytoselect.title":
            "\u6ca1\u6709\u53ef\u4ee5\u9080\u8bf7\u7684\u597d\u53cb\u3002",
          "invite.label.nosearchresult.title":
            "\u6ca1\u6709\u627e\u5230\u76f8\u5173\u641c\u7d22\u7ed3\u679c\u3002",
          "invite.label.nothing.title":
            "\u60a8\u5c1a\u672a\u9009\u62e9\u4efb\u4f55\u597d\u53cb\u3002",
          "invite.label.person.title.plurals.few": "%n\u4eba",
          "invite.label.person.title.plurals.many": "%n\u4eba",
          "invite.label.person.title.plurals.one": "%n\u4eba",
          "invite.label.person.title.plurals.other": "%n\u4eba",
          "invite.label.person.title.plurals.two": "%n\u4eba",
          "invite.label.person.title.plurals.zero": "%n\u4eba",
          "keep.alert.sendtochat.unsupported.all.other":
            "\u6240\u9009\u6587\u4ef6\u683c\u5f0f\u4e0d\u53d7\u652f\u6301\uff0c\u65e0\u6cd5\u53d1\u9001\u3002",
          "keep.alert.sendtochat.unsupported.file.multi": "",
          "keep.alert.sendtochat.unsupported.some.other":
            "\u65e0\u6cd5\u53d1\u9001%n\u4e2a\u683c\u5f0f\u4e0d\u53d7\u652f\u6301\u7684\u6587\u4ef6\uff0c\u662f\u5426\u53d1\u9001\u5269\u4f59\u6587\u4ef6\uff1f",
          "keep.btn.retry": "\u91cd\u8bd5",
          "keep.category.all": "\u5168\u90e8",
          "keep.category.files": "\u6587\u4ef6",
          "keep.category.links": "\u94fe\u63a5",
          "keep.category.memos": "\u5907\u5fd8\u5f55",
          "keep.category.newtext": "\u6587\u672c",
          "keep.category.photos": "\u7167\u7247",
          "keep.category.photosvideos": "\u7167\u7247/\u89c6\u9891",
          "keep.category.text": "\u6587\u672c",
          "keep.category.videos": "\u89c6\u9891",
          "keep.common.error.503":
            "Keep\u6b63\u5728\u8fdb\u884c\u7cfb\u7edf\u7ef4\u62a4\u3002\n\u7ef4\u62a4\u65f6\u95f4\uff1aM\u6708d\u65e5HH:mm\u301cM\u6708d\u65e5HH:mm\uff08UTC+9\uff09",
          "keep.date.format": "yyyy.M.d",
          "keep.desc.PR.title":
            "\u6211\u4ec0\u4e48\u65f6\u5019\u53ef\u4ee5\u4f7f\u7528Keep?",
          "keep.desc.alreadyDeleted":
            "\u6b64\u5185\u5bb9\u5df2\u88ab\u5220\u9664\u3002",
          "keep.desc.copied": "\u5df2\u590d\u5236",
          "keep.desc.count.others.plurals.few": "\u548c\u53e6\u5916%1\u4e2a",
          "keep.desc.count.others.plurals.many": "\u548c\u53e6\u5916%1\u4e2a",
          "keep.desc.count.others.plurals.one": "\u548c\u53e6\u5916%1\u4e2a",
          "keep.desc.count.others.plurals.other": "\u548c\u53e6\u5916%1\u4e2a",
          "keep.desc.count.others.plurals.two": "\u548c\u53e6\u5916%1\u4e2a",
          "keep.desc.count.others.plurals.zero": "\u548c\u53e6\u5916%1\u4e2a",
          "keep.desc.delete.other":
            "\u8981\u5220\u9664\u6240\u9009\u9879\u76ee\u5417\uff1f",
          "keep.desc.discard":
            "\u60a8\u7684\u7f16\u8f91\u5c1a\u672a\u4fdd\u5b58\u3002\u653e\u5f03\u7f16\u8f91\u5417\uff1f",
          "keep.desc.downloadError":
            "\u8be5\u4efb\u52a1\u672a\u80fd\u5b8c\u6210\uff0c\u539f\u56e0\u662f\u5728\u4e0b\u8f7d\u6587\u4ef6\u65f6\u53d1\u751f\u9519\u8bef\u3002",
          "keep.desc.downloading": "\u6b63\u5728\u4e0b\u8f7d\u2026",
          "keep.desc.drag":
            "\u5c06\u60a8\u7684\u6587\u4ef6\u62d6\u653e\u5230\u6b64\u5904\uff0c\n\u6216\u70b9\u51fb\u201c\u4e0a\u4f20\u201d\u3002",
          "keep.desc.dragHere":
            "\u5c06\u60a8\u7684\u6587\u4ef6\u62d6\u653e\u5230\u6b64\u5904\u3002",
          "keep.desc.error.reason.exceedPhotoResolution":
            "\u8d85\u8fc710,000\u50cf\u7d20\u3002",
          "keep.desc.error.reason.exceedPhotoSize":
            "\u7167\u7247\u5927\u4e8e20MB\u3002",
          "keep.desc.error.reason.expired":
            "\u6b64\u5185\u5bb9\u5df2\u8fc7\u671f\uff0c\u65e0\u6cd5\u52a0\u8f7d\u3002",
          "keep.desc.error.reason.lackOfStorage":
            "\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u3002",
          "keep.desc.error.reason.networkError":
            "\u53d1\u751f\u7f51\u7edc\u9519\u8bef\u3002",
          "keep.desc.error.reason.notFoundFile":
            "\u65e0\u6cd5\u627e\u5230\u6587\u4ef6\u3002",
          "keep.desc.error.reason.unknown":
            "\u65e0\u6cd5\u4e0a\u4f20\u6b64\u9879\u76ee\u3002",
          "keep.desc.error.reason.unknownFileType":
            "\u65e0\u6cd5\u4e0a\u4f20\u6b64\u7c7b\u578b\u7684\u6587\u4ef6\u3002",
          "keep.desc.exceedCharacter":
            "\u60a8\u6700\u591a\u53ef\u4ee5\u8f93\u5165 10,000 \u4e2a\u5b57\u7b26\u3002 ",
          "keep.desc.expiredContent.askDelete":
            "\u60a8\u65e0\u6cd5\u518d\u67e5\u770b\u672c\u9879\u76ee\u7684\u5185\u5bb9\uff0c\u539f\u56e0\u662f\u5b58\u50a8\u671f\u9650\u5df2\u7ecf\u5230\u671f\u3002\n\u5220\u9664\u5230\u671f\u9879\u76ee\u7684\u5217\u8868\u5417\uff1f\n",
          "keep.desc.expiredContent.couldNotConfirmed":
            "\u60a8\u65e0\u6cd5\u518d\u67e5\u770b\u672c\u9879\u76ee\u7684\u5185\u5bb9\uff0c\u539f\u56e0\u662f\u5b58\u50a8\u671f\u9650\u5df2\u7ecf\u5230\u671f\u3002",
          "keep.desc.expiredContent.storagePeriod":
            "\u5b58\u50a8\u671f\u9650\u5df2\u7ecf\u5230\u671f\u3002",
          "keep.desc.fileCountExceeds":
            "\u60a8\u6700\u591a\u53ef\u4ee5\u4fdd\u5b5820\u4e2a\u6587\u4ef6\u3002",
          "keep.desc.guide.tryKeep":
            "\u4fdd\u5b58\u60a8\u7684\u5185\u5bb9\n\u5feb\u6765\u8bd5\u8bd5Keep\u5427\uff01",
          "keep.desc.itemsavedinkeepexpired":
            "\u6b64\u9879\u76ee\u5df2\u8fc7\u671f\u3002",
          "keep.desc.loadFailed":
            "\u4e0b\u8f7d\u5931\u8d25\uff01\n\u8bf7\u68c0\u67e5\u60a8\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002 ",
          "keep.desc.loadFromKeep":
            "\u5728 Keep \u4e2d\u6253\u5f00\u6587\u4ef6",
          "keep.desc.loadingData":
            "\u6b63\u5728\u52a0\u8f7d\u6570\u636e\u3002\u8bf7\u7a0d\u5019\u7247\u523b\u3002",
          "keep.desc.maximumUploadableSize.plurals.few":
            "\u60a8\u4e00\u6b21\u6700\u591a\u53ea\u80fd\u4e0a\u4f20 %1 MB\u3002",
          "keep.desc.maximumUploadableSize.plurals.many":
            "\u60a8\u4e00\u6b21\u6700\u591a\u53ea\u80fd\u4e0a\u4f20 %1 MB\u3002",
          "keep.desc.maximumUploadableSize.plurals.one":
            "\u60a8\u4e00\u6b21\u6700\u591a\u53ea\u80fd\u4e0a\u4f20 %1 MB\u3002",
          "keep.desc.maximumUploadableSize.plurals.other":
            "\u60a8\u4e00\u6b21\u6700\u591a\u53ea\u80fd\u4e0a\u4f20 %1 MB\u3002",
          "keep.desc.maximumUploadableSize.plurals.two":
            "\u60a8\u4e00\u6b21\u6700\u591a\u53ea\u80fd\u4e0a\u4f20 %1 MB\u3002",
          "keep.desc.maximumUploadableSize.plurals.zero":
            "\u60a8\u4e00\u6b21\u6700\u591a\u53ea\u80fd\u4e0a\u4f20 %1 MB\u3002",
          "keep.desc.noSearchResult":
            "\u672a\u627e\u5230\u76f8\u5173\u641c\u7d22\u7ed3\u679c\u3002",
          "keep.desc.noSelectableItem":
            "\u60a8\u6ca1\u6709\u4efb\u4f55\u53ef\u4ee5\u9009\u62e9\u7684\u9879\u76ee\u3002",
          "keep.desc.notSupportType":
            "\u65e0\u6cd5\u6253\u5f00\u6b64\u6587\u4ef6\u7c7b\u578b\u3002 ",
          "keep.desc.notifyPeriod":
            "\u5927\u5c0f\u8d85\u8fc7 %1MB \u7684\u6587\u4ef6\u5c06\u4fdd\u5b58 30 \u5929\u3002 ",
          "keep.desc.photoLoadFailed":
            "\u65e0\u6cd5\u52a0\u8f7d\u7167\u7247\u3002\n\u8bf7\u68c0\u67e5\u60a8\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002 ",
          "keep.desc.quit.uploading":
            "\u60a8\u6b63\u5728\u4e0a\u4f20\u6587\u4ef6\u5230Keep\u3002\n\u73b0\u5728\u5173\u95edLINE\uff0c\u5c06\u53d6\u6d88\u4e0a\u4f20\u3002",
          "keep.desc.requesturl.failed.error":
            "\u65e0\u6cd5\u8bfb\u53d6\u94fe\u63a5\u4fe1\u606f\u3002 \u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "keep.desc.retry": "\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "keep.desc.saved": "\u5df2\u4fdd\u5b58\u3002 ",
          "keep.desc.savedInKeep": "\u5df2\u5728 Keep \u4e2d\u4fdd\u5b58\u3002",
          "keep.desc.saving": "\u4fdd\u5b58\u4e2d\u2026",
          "keep.desc.storageFull":
            "Keep \u4e2d\u7684\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u3002",
          "keep.desc.storageFull.freeUpSpace":
            "Keep \u4e2d\u7684\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u3002\u8bf7\u6e05\u7a7a\u4e00\u4e9b\u5b58\u50a8\u7a7a\u95f4\u540e\u518d\u8bd5\u4e00\u6b21\u3002 ",
          "keep.desc.storageFull.unable":
            "\u65e0\u6cd5\u6dfb\u52a0\u9879\u76ee\uff0c\u539f\u56e0\u662f\u60a8\u7684 Keep \u4e2d\u5df2\u7ecf\u6ca1\u6709\u5b58\u50a8\u7a7a\u95f4\u3002",
          "keep.desc.storageFull.unableToSelect":
            "\u65e0\u6cd5\u9009\u62e9\u9879\u76ee\uff0c\u539f\u56e0\u662f\u60a8\u7684 Keep \u4e2d\u5df2\u7ecf\u6ca1\u6709\u5b58\u50a8\u7a7a\u95f4\u3002 ",
          "keep.desc.temporaryError":
            "\u65e0\u6cd5\u5b8c\u6210\u8bf7\u6c42\u7684\u4efb\u52a1\uff0c\n\u539f\u56e0\u662f\u51fa\u73b0\u4e34\u65f6\u9519\u8bef\u3002\n\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "keep.desc.totalSpace": "\u603b\u5b58\u50a8\u7a7a\u95f4\uff1a%1",
          "keep.desc.unexpectedErrorOccured":
            "\u53d1\u751f\u672a\u77e5\u9519\u8bef\u3002",
          "keep.desc.upload.error.maxFileSize":
            "\u65e0\u6cd5\u4e0a\u4f20\u5927\u4e8e%1 GB\u7684\u6587\u4ef6\u3002\n\u8bf7\u68c0\u67e5\u6587\u4ef6\u5927\u5c0f\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "keep.desc.upload.inProgress":
            "\u6b63\u5728\u4e0a\u4f20\u81f3Keep...",
          "keep.desc.upload.notifyIncompleteUpload":
            "\u6587\u4ef6\u4e0a\u4f20\u6b63\u5728\u8fdb\u884c\u4e2d\u3002\n\u5982\u679c\u60a8\u5173\u95edLINE\uff0c\u5219\u6587\u4ef6\u53ea\u6709\u90e8\u5206\u4f1a\u4e0a\u4f20\u3002",
          "keep.desc.uploadFail.storage.plurals.few":
            "\u65e0\u6cd5\u4e0a\u4f20 %1 \u4e2a\u9879\u76ee\uff0c\u539f\u56e0\u662f\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u3002",
          "keep.desc.uploadFail.storage.plurals.many":
            "\u65e0\u6cd5\u4e0a\u4f20 %1 \u4e2a\u9879\u76ee\uff0c\u539f\u56e0\u662f\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u3002",
          "keep.desc.uploadFail.storage.plurals.one":
            "\u65e0\u6cd5\u4e0a\u4f20 %1 \u4e2a\u9879\u76ee\uff0c\u539f\u56e0\u662f\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u3002",
          "keep.desc.uploadFail.storage.plurals.other":
            "\u65e0\u6cd5\u4e0a\u4f20 %1 \u4e2a\u9879\u76ee\uff0c\u539f\u56e0\u662f\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u3002",
          "keep.desc.uploadFail.storage.plurals.two":
            "\u65e0\u6cd5\u4e0a\u4f20 %1 \u4e2a\u9879\u76ee\uff0c\u539f\u56e0\u662f\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u3002",
          "keep.desc.uploadFail.storage.plurals.zero":
            "\u65e0\u6cd5\u4e0a\u4f20 %1 \u4e2a\u9879\u76ee\uff0c\u539f\u56e0\u662f\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u3002",
          "keep.desc.uploadFailed": "\u65e0\u6cd5\u4e0a\u4f20\u3002",
          "keep.desc.uploadPending": "\u7b49\u5f85\u4e0a\u4f20\u2026",
          "keep.desc.uploading": "\u4e0a\u4f20\u4e2d\u2026",
          "keep.desc.usableSpace": "%1 \u5df2\u7528",
          "keep.desc.videoLoadFailed":
            "\u65e0\u6cd5\u52a0\u8f7d\u89c6\u9891\u3002\n\u8bf7\u68c0\u67e5\u60a8\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002 ",
          "keep.desc.wait": "\u8bf7\u7a0d\u5019\u7247\u523b\u3002",
          "keep.desc.warning.deleteAll":
            "\u5220\u9664\u6240\u6709\u6587\u4ef6\u5417\uff1f\n\u60a8\u7684\u6587\u4ef6\u5728\u5220\u9664\u540e\u5c06\u65e0\u6cd5\u6062\u590d\u3002",
          "keep.desc.warning.deleteAll.chromeUser":
            "\u5220\u9664\u6240\u6709\u6587\u4ef6\u5417\uff1f\n\u5982\u679c\u60a8\u9009\u62e9\u5220\u9664\uff0c\u5219\u60a8\u7684 Chrome \u5907\u5fd8\u5f55\u5c06\u88ab\u79fb\u9664\u3002\n\u60a8\u7684\u6587\u4ef6\u4e00\u65e6\u5220\u9664\u4fbf\u65e0\u6cd5\u6062\u590d\u3002",
          "keep.download.btn": "\u6253\u5f00\u6587\u4ef6\u5939",
          "keep.download.success": "\u4e0b\u8f7d\u5b8c\u6210\u3002",
          "keep.emptytitle.title": "\u4fdd\u5b58\u5230Keep\uff01",
          "keep.full.sync.working": "\u540c\u6b65\u4e2d\u2026 %1%",
          "keep.home.bannerdesc.endofkeep":
            "\u8bf7\u4e8e%1\u524d\u5907\u4efdKeep\u4e0a\u7684\u91cd\u8981\u5185\u5bb9\u3002",
          "keep.home.bannertitle.endofkeep": "Keep\u505c\u6b62\u670d\u52a1",
          "keep.home.desc.timeformat": "yyyy\u5e74M\u6708d\u65e5",
          "keep.home.emptydesc.descforplaces":
            "\u60a8\u5728\u5b98\u65b9\u5e10\u53f7\u3001LINE PLACE\u7b49\u5904\u4fdd\u5b58\u7684\u5730\u70b9\u5c06\u663e\u793a\u5728\u8fd9\u91cc\u3002",
          "keep.home.popupbutton.close": "\u5173\u95ed",
          "keep.home.popupbutton.dontshowagain": "\u4e0d\u518d\u663e\u793a",
          "keep.home.popupbutton.learnmore": "\u4e86\u89e3\u8be6\u60c5",
          "keep.home.popupdesc.endofkeep":
            "Keep\u5c06\u4e8e%1\u505c\u6b62\u670d\u52a1\u3002\u8bf7\u4e8e\u670d\u52a1\u505c\u6b62\u524d\u5c06Keep\u4e2d\u7684\u5168\u90e8\u5185\u5bb9\u5b8c\u6210\u5907\u4efd\u3002\n* Keep\u505c\u6b62\u670d\u52a1\u540e\uff0cKeep\u5907\u5fd8\u5f55\u4ecd\u53ef\u7ee7\u7eed\u4f7f\u7528\u3002",
          "keep.home.popuptitle.endofkeep":
            "Keep\u505c\u6b62\u670d\u52a1\u4e0e\u5907\u4efd\u8bf4\u660e",
          "keep.home.tab.places": "\u5730\u70b9",
          "keep.home.toast.pinneditems": "\u5df2\u56fa\u5b9a",
          "keep.itemspicker.popupdesc.itemsharinglimit":
            "\u6bcf\u6b21\u6700\u591a\u53ef\u4ee5\u5206\u4eab20\u9879\u3002",
          "keep.keepitem.itemsenttokeepmemoexpired":
            "\u53d1\u9001\u5230Keep\u5907\u5fd8\u5f55\u4e2d\u7684\u9879\u76ee\u5df2\u8fc7\u671f\u3002",
          "keep.keepmemoguide.popupdesc.itemssenttokeepmemoshowninkeep":
            "\u53ef\u901a\u8fc7Keep\u8f7b\u677e\u7f16\u8f91\u3001\u7ba1\u7406\n\u53d1\u9001\u5230Keep\u5907\u5fd8\u5f55\u4e2d\u7684\u5185\u5bb9\u3002",
          "keep.keepmemoguide.popupdesc.piniimportantitems":
            "\u6709\u9700\u8981\u7ecf\u5e38\u67e5\u770b\u7684\u9879\u76ee\u5417\uff1f\n\u53ef\u5c06\u5176\u56fa\u5b9a\u5728Keep\u6700\u4e0a\u65b9\u3002",
          "keep.keepmemoguide.popupdesc.savekeepmemocontentforeverinkeep":
            "\u60a8\u53ef\u4ee5\u5728Keep\u4e2d\u4fdd\u5b58\u3001\u56fa\u5b9a\u3001\u7f16\u8f91\u6216\u6536\u85cf\u9879\u76ee\uff0c\u5e76\u6c38\u4e45\u4fdd\u5b58\u5728Keep\u5907\u5fd8\u5f55\u4e2d\u3002",
          "keep.keepmemoguide.popuptitle.introducingkeepmemo":
            "\u201cKeep\u5907\u5fd8\u5f55\u201d\u7b80\u4ecb",
          "keep.keepmemoguide.popuptitle.keepitemsforever":
            "\u6c38\u4e45\u4fdd\u5b58\u9879\u76ee",
          "keep.keepmemoguide.popuptitle.pinningitems":
            "\u56fa\u5b9a\u9879\u76ee",
          "keep.label.add": "\u6dfb\u52a0",
          "keep.label.addText": "\u6dfb\u52a0",
          "keep.label.capture": "\u5c4f\u5e55\u622a\u56fe",
          "keep.label.chromeMemo": "Chrome \u5907\u5fd8\u5f55",
          "keep.label.copy": "\u590d\u5236",
          "keep.label.createdTime": "\u5df2\u521b\u5efa",
          "keep.label.delete": "\u5220\u9664",
          "keep.label.deleteAll": "\u5168\u90e8\u5220\u9664",
          "keep.label.deleting": "\u5220\u9664\u4e2d\u2026",
          "keep.label.details": "\u8be6\u60c5",
          "keep.label.download": "\u4e0b\u8f7d",
          "keep.label.edit": "\u7f16\u8f91",
          "keep.label.emptyText": "\u6ca1\u6709\u5185\u5bb9",
          "keep.label.expired": "\u5df2\u5230\u671f",
          "keep.label.fileSize": "\u6587\u4ef6\u5927\u5c0f",
          "keep.label.from": "\u6765\u81ea",
          "keep.label.goToKeep": "\u5f00\u59cb\u4f7f\u7528Keep",
          "keep.label.hitocoto": "\u4e2a\u4eba\u52a8\u6001",
          "keep.label.justNow": "\u521a\u521a",
          "keep.label.learnMore": "\u73b0\u5728\u4e86\u89e3",
          "keep.label.modifiedTime": "\u4fee\u6539\u65e5\u671f",
          "keep.label.more": "\u5176\u4ed6",
          "keep.label.newMemo": "\u5907\u5fd8\u5f55",
          "keep.label.open": "\u6253\u5f00",
          "keep.label.openkeepmemo": "\u6253\u5f00Keep\u5907\u5fd8\u5f55",
          "keep.label.order.stored": "\u4fdd\u5b58\u65e5\u671f",
          "keep.label.order.updated": "\u6700\u8fd1\u66f4\u65b0",
          "keep.label.paste": "\u7c98\u8d34",
          "keep.label.pause": "\u6682\u505c",
          "keep.label.period": "\u5b58\u50a8\u671f\u9650",
          "keep.label.pin": "\u56fa\u5b9a",
          "keep.label.play": "\u64ad\u653e",
          "keep.label.playTime": "\u56de\u653e\u65f6\u95f4",
          "keep.label.refresh": "\u5237\u65b0",
          "keep.label.resolution": "\u5206\u8fa8\u7387",
          "keep.label.save": "\u4fdd\u5b58",
          "keep.label.saveInKeep": "\u5728 Keep \u4e2d\u4fdd\u5b58",
          "keep.label.savedTime": "\u5df2\u4fdd\u5b58",
          "keep.label.search": "\u641c\u7d22\u5168\u90e8",
          "keep.label.searchResult": "\u641c\u7d22\u7ed3\u679c",
          "keep.label.send": "\u786e\u5b9a",
          "keep.label.settings": "\u8bbe\u7f6e",
          "keep.label.shareToChat": "\u53d1\u9001\u81f3\u804a\u5929",
          "keep.label.sortByDate": "\u6309\u65e5\u671f\u6392\u5e8f",
          "keep.label.sortByName": "\u6309\u540d\u79f0\u6392\u5e8f",
          "keep.label.sortBySize": "\u6309\u5927\u5c0f\u6392\u5e8f",
          "keep.label.terminate": "\u5173\u95edLINE",
          "keep.label.tooltip": "Keep",
          "keep.label.unpin": "\u53d6\u6d88\u56fa\u5b9a",
          "keep.label.upload": "\u4e0a\u4f20",
          "keep.label.uploadFile": "\u6dfb\u52a0\u6587\u4ef6",
          "keep.label.viewinkeepmemo":
            "\u5728Keep\u5907\u5fd8\u5f55\u4e2d\u67e5\u770b",
          "keep.label.voiceMessage": "\u8bed\u97f3\u6d88\u606f",
          "keep.label.volume": "\u5df2\u4f7f\u7528\u5b58\u50a8\u7a7a\u95f4",
          "keep.label.writememo.title": "\u5907\u5fd8\u5f55",
          "keep.label.writetext.title": "\u6587\u672c",
          "keep.main.desc.keepfadeout":
            "Keep\u5df2\u65e0\u6cd5\u7ee7\u7eed\u4f7f\u7528\u3002\u8bf7\u5c06LINE\u5e94\u7528\u66f4\u65b0\u4e3a\u6700\u65b0\u7248\u672c\u3002",
          "keep.title": "Keep",
          "keep.toast.itempinned": "\u5df2\u6210\u529f\u56fa\u5b9a\u3002",
          "keep.toast.itemunpinned": "\u5df2\u53d6\u6d88\u56fa\u5b9a\u3002",
          "keepmemo.alert.deletemessage":
            "\u6240\u9009\u4fe1\u606f\u5c06\u53ea\u4f1a\u4ece\u6b64\u8bbe\u5907\u4e2d\u5220\u9664\u3002\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f",
          "keepmemo.alert.unsendmessage":
            "\u6240\u9009\u4fe1\u606f\u5c06\u4f1a\u4ece\u60a8\u7684\u5168\u90e8\u8bbe\u5907\u4e2d\u5220\u9664\u3002\u786e\u5b9a\u8981\u5220\u9664\u5417\uff1f",
          "keepmemo.category.all": "\u5168\u90e8",
          "keepmemo.category.files": "\u6587\u4ef6",
          "keepmemo.category.links": "\u94fe\u63a5",
          "keepmemo.category.photos": "\u56fe\u7247",
          "keepmemo.category.text": "\u6587\u5b57",
          "keepmemo.category.videos": "\u89c6\u9891",
          "keepmemo.desc.noSelectableItem":
            "\u60a8\u6ca1\u6709\u4efb\u4f55\u53ef\u4ee5\u9009\u62e9\u7684\u9879\u76ee\u3002",
          "keepmemo.itemspicker.popupdesc.itemsharinglimit":
            "\u6bcf\u6b21\u6700\u591a\u4ec5\u53ef\u4ee5\u5206\u4eab20\u9879\u3002",
          "keepmemo.label.goToKeepMemo": "\u6253\u5f00Keep\u5907\u5fd8\u5f55",
          "keepmemo.label.search": "\u641c\u7d22",
          "keepmemo.label.sendToKeepMemo":
            "\u53d1\u9001\u81f3Keep\u5907\u5fd8\u5f55",
          "keepmemo.label.share": "\u5206\u4eab",
          "keepmemo.label.tooltip": "Keep\u5907\u5fd8\u5f55",
          "keepmemo.msg.desc.systemmsg":
            "\u53d1\u9001\u4efb\u4f55\u60a8\u60f3\u8981\u4fdd\u5b58\u7684\u6587\u5b57\u3001\u7167\u7247\u3001\u89c6\u9891\u548c\u94fe\u63a5\u3002",
          "keepmemo.title": "\u53d1\u9001\u81f3Keep\u5907\u5fd8\u5f55",
          "keyword.notice.btn": "\u6dfb\u52a0\u5173\u952e\u8bcd",
          "keyword.notice.desc":
            "\u6dfb\u52a0\u7279\u5b9a\u5b57\u8bcd\u6216\u7528\u6237\u59d3\u540d\u4f5c\u4e3a\u5173\u952e\u5b57\u4ee5\u63a5\u6536\u542b\u6709\u8fd9\u4e9b\u5173\u952e\u5b57\u7684\u4efb\u4f55\u6d88\u606f\u63d0\u9192\u3002",
          "keyword.notice.title": "\u5173\u952e\u5b57\u63d0\u9192",
          "keyword.notification.desc": "\u63d0\u53ca\u7684\u5173\u952e\u5b57",
          "kickout.all.v3":
            "\u60a8\u5df2\u88ab\u81ea\u52a8\u767b\u51fa\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55\u3002",
          "kickout.dormant.account":
            "\u8bf7\u4f7f\u7528\u60a8\u5728\u624b\u673a\u7248LINE\u4e0a\u7ed1\u5b9a\u7684\u90ae\u7bb1\u5730\u5740\u91cd\u65b0\u767b\u5f55\uff0c\u7136\u540e\u9a8c\u8bc1\u5e10\u53f7\u3002",
          "kickout.email.account.modified":
            "\u60a8\u7ed1\u5b9a\u4e86\u65b0\u7684\u90ae\u7bb1\u5730\u5740\uff0c\u6216\u8005\u66f4\u6539\u4e86\u5bc6\u7801\uff0c\u56e0\u6b64\u5df2\u81ea\u52a8\u9000\u51fa\u3002",
          "kickout.expired":
            "\u7531\u4e8e\u5e10\u53f7\u957f\u65f6\u95f4\u672a\u6709\u4efb\u4f55\u64cd\u4f5c\u3002\n\u5e10\u53f7\u5df2\u767b\u51fa\u3002",
          "kickout.networkError":
            "\u53d1\u751f\u7f51\u7edc\u9519\u8bef\uff0c\u56e0\u6b64\u60a8\u5df2\u9000\u51fa\u767b\u5f55\u3002\u8bf7\u91cd\u65b0\u767b\u5f55\u3002",
          "kickout.noAllowedSecondaryDevice":
            "\u7531\u4e8e\u5e10\u53f7\u5df2\u5728\u624b\u673a\u4e0a\u8bbe\u7f6e\u4e86\u767b\u5f55\u9650\u5236\u3002 \u5e10\u53f7\u5df2\u767b\u51fa\u3002\n",
          "kickout.notAuthorizedDevice":
            "\u7531\u4e8e\u5e10\u53f7\u5df2\u5728\u5176\u4ed6\u7535\u8111\u4e0a\u767b\u5f55\u3002\u5e10\u53f7\u5df2\u767b\u51fa\u3002   ",
          "kickout.notAvailableUser":
            "\u60a8\u7684\u5e10\u53f7\u5df2\u901a\u8fc7\u5176\u4ed6\u8bbe\u5907\u5220\u9664\uff0c\u56e0\u6b64\u60a8\u5df2\u9000\u51faLINE\u3002",
          "kickout.passwordChanged":
            "\ub124\uc774\ubc84\ub97c \ud0c8\ud1f4\ud558\uc5ec \ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",
          "kickout.serverError":
            "\u53d1\u751f\u670d\u52a1\u5668\u9519\u8bef\uff0c\u56e0\u6b64\u60a8\u5df2\u9000\u51fa\u767b\u5f55\u3002\u8bf7\u91cd\u65b0\u767b\u5f55\u3002",
          "kickout.serverMaintenance":
            "\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d\uff0c\u56e0\u6b64\u6682\u65f6\u65e0\u6cd5\u4f7f\u7528\u3002\u8bf7\u7a0d\u540e\u91cd\u65b0\u767b\u5f55\u3002",
          "kickout.serviceMaintenance":
            "\u53d1\u751f\u4e34\u65f6\u6027\u9519\u8bef\uff0c\u56e0\u6b64\u60a8\u5df2\u9000\u51fa\u767b\u5f55\u3002\u8bf7\u91cd\u65b0\u767b\u5f55\u3002",
          "kickout.square.server.fail":
            "\u53d1\u751fOpenChat\u9a8c\u8bc1\u9519\u8bef\uff0c\u60a8\u5df2\u9000\u51fa\u767b\u5f55\u3002\u8bf7\u91cd\u65b0\u767b\u5f55\u3002",
          "line.keepmemoguide.popupdesc.page1":
            "\u60a8\u53ef\u4ee5\u50cf\u804a\u5929\u4e00\u6837\uff0c\u5c06\u6587\u5b57\u3001\u7167\u7247\u6216\u5176\u4ed6\u5185\u5bb9\u8f7b\u677e\u53d1\u9001\u81f3Keep\u5907\u5fd8\u5f55\u3002",
          "line.keepmemoguide.popuptitle.page1":
            "\u201cKeep\u5907\u5fd8\u5f55\u201d\u7b80\u4ecb",
          "line.secondarylogin.popupdesc.updatelineerror.desk":
            "\u8bf7\u5148\u66f4\u65b0LINE\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "line.secondarylogin.popuptitle.updatelineerror.desk": "\u9519\u8bef",
          "line.updatepopup.button.leave": "\u9000\u51fa",
          "linechrome.chat.desc.unsupportedmessage":
            "\u6b64\u6d88\u606f\u65e0\u6cd5\u5728LINE Chrome\u4e2d\u67e5\u770b\u3002\u8bf7\u5728\u667a\u80fd\u624b\u673a\u7248LINE\u4e2d\u67e5\u770b\u3002",
          "linechrome.chat.desc.unsupportedstickers":
            "\u6b64\u8d34\u56fe\u65e0\u6cd5\u5728LINE Chrome\u4e2d\u663e\u793a\u3002\n\u8bf7\u5728\u667a\u80fd\u624b\u673a\u7248LINE\u4e2d\u67e5\u770b\u3002",
          "linechrome.chat.toast.nofolders":
            "\u65e0\u6cd5\u5206\u4eab\u6587\u4ef6\u5939\u3002",
          "linechrome.chat.toast.supportedlanguage":
            "LINE Chrome\u652f\u6301\u6240\u7ffb\u8bd1\u7684\u8bed\u8a00\u3002\u60a8\u53ef\u4ee5\u5728\u8bbe\u7f6e\u4e2d\u66f4\u6539\u8bed\u8a00\u3002",
          "linechrome.end.desc.endline":
            "\u8981\u5173\u95edLINE Chrome\u5417\uff1f",
          "linechrome.main.button.mute1":
            "\u5173\u95ed\u63d0\u91921\u5c0f\u65f6",
          "linechrome.main.button.mute2":
            "\u5173\u95ed\u63d0\u91922\u5c0f\u65f6",
          "linechrome.main.button.mute24":
            "\u5173\u95ed\u63d0\u919224\u5c0f\u65f6",
          "linechrome.main.button.mute30":
            "\u5173\u95ed\u63d0\u919230\u5206\u949f",
          "linechrome.main.desc.unmutehour":
            "%1\u5c0f\u65f6\u540e\u5f00\u542f\u63d0\u9192",
          "linechrome.main.desc.unmuteminute":
            "%1\u5206\u949f\u540e\u5f00\u542f\u63d0\u9192",
          "linechrome.main.desc.unmutesecond.other":
            "%1\u79d2\u540e\u5f00\u542f\u63d0\u9192",
          "linemusic.playlist": "\u64ad\u653e\u5217\u8868",
          "linemusic.title": "LINE MUSIC",
          "linemusic.topic": "\u4e3b\u9898",
          "lockscreen.kickout.accountError":
            "\u7531\u4e8e\u8f93\u5165\u9519\u8bef\u5bc6\u7801\u7684\u6b21\u6570\u8fc7\u591a\uff0c\u60a8\u5df2\u88ab\u9000\u51faLINE\u3002",
          "lockscreen.lockscreen.text": "LINE\u73b0\u5df2\u9501\u5b9a\u3002 ",
          "lockscreen.msg.alert.oncalling":
            "\u8981\u9501\u5b9aLINE\u5417\uff1f\n\u5f00\u542f\u9501\u5b9a\u6a21\u5f0f\u540e\u5c06\u7ed3\u675f\u5f53\u524d\u901a\u8bdd\u3002",
          "lockscreen.msg.unlock.description":
            "\u8981\u9501\u5b9aLINE\u5417\uff1f\n\u5fc5\u987b\u4f7f\u7528\u5bc6\u7801\u624d\u80fd\u89e3\u9501\u3002",
          "lockscreen.msg.unlockAuto.description":
            "\u8981\u5728\u7535\u8111\u957f\u65f6\u95f4\u65e0\u64cd\u4f5c\u65f6\u9501\u5b9aLINE\u5417\uff1f\n\u5fc5\u987b\u4f7f\u7528\u5bc6\u7801\u624d\u80fd\u89e3\u9501\u3002",
          "lockscreen.password.fail":
            "\u5bc6\u7801\u9519\u8bef\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "lockscreen.password.text":
            "\u8bf7\u8f93\u5165\u60a8\u7684LINE\u5bc6\u7801\u6765\u89e3\u9501LINE\u3002",
          "lockscreen.password.unlock.btn": "\u89e3\u9501",
          "login.btn.emailQRcode.login":
            "\u90ae\u7bb1/\u4e8c\u7ef4\u7801\u767b\u5f55 >",
          "login.btn.login": "\u767b\u5f55",
          "login.btn.signUp": "\u6ce8\u518c",
          "login.emailLogin.identity.credential.error":
            "\u90ae\u7bb1\u5730\u5740\u4e0d\u6b63\u786e\u3002\n\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u90ae\u7bb1\u5730\u5740\u3002",
          "login.emailLogin.label.error.accountError":
            "\u90ae\u7bb1\u5730\u5740\u6216\u5bc6\u7801\u4e0d\u6b63\u786e\uff0c\u6216\u672a\u5728LINE\u6ce8\u518c\u3002",
          "login.emailLogin.label.error.inputError":
            "\u5c1a\u672a\u8f93\u5165\u90ae\u7bb1\u5730\u5740\u6216\u5bc6\u7801\u3002",
          "login.emailLogin.link.changeToNaverLogin": "NAVER ID Sign In",
          "login.emailLogin.link.findPassword":
            "\u5fd8\u8bb0\u5bc6\u7801\uff1f",
          "login.emailLogin.placeHolder.email": "\u90ae\u7bb1\u5730\u5740",
          "login.emailLogin.placeHolder.emailwithPhoneNumber":
            "\u90ae\u7bb1\u5730\u5740\u6216\u7535\u8bdd\u53f7\u7801",
          "login.emailLogin.placeHolder.password": "\u5bc6\u7801",
          "login.emailLogin.popup.findPassword":
            "\u8bf7\u5728\u79fb\u52a8\u7248\u7684LINE\u4e0a\u901a\u8fc7\u300c\u8bbe\u7f6e> \u5e10\u53f7> \u7ed1\u5b9a\u90ae\u7bb1\u5730\u5740\u300d\uff0c\n\u5373\u53ef\u66f4\u6539\u767b\u5f55\u7528\u7684\u90ae\u7bb1\u5730\u5740\u53ca\u5bc6\u7801\u3002\n\n\n\n",
          "login.error.auth.failed":
            "\u65e0\u6cd5\u81ea\u52a8\u767b\u5f55\uff0c\n\u56e0\u4e3a\u60a8\u5df2\u7ecf\u4ece\u53e6\u4e00\u53f0\u7535\u8111\u767b\u5f55\n\u6216\u767b\u5f55\u5df2\u8fc7\u671f\u3002 ",
          "login.label.certificate.not.vaild":
            "\u5b89\u5168\u8bc1\u4e66\u65e0\u6cd5\u4f7f\u7528\u3002\n\u8bf7\u8bbe\u7f6e\u6b63\u786e\u7684\u7535\u8111\u65e5\u671f\u3002",
          "login.label.doingLogin": "\u6b63\u5728\u767b\u5f55\u2026",
          "login.label.error.auth.failed.anotherPC":
            "\u60a8\u5df2\u7ecf\u4ece\u53e6\u4e00\u53f0\u7535\u8111\u767b\u5f55\uff0c\u56e0\u6b64\u65e0\u6cd5\u81ea\u52a8\u767b\u5f55\u3002",
          "login.label.error.auth.failed.loginExpired":
            "\u60a8\u7684\u767b\u5f55\u4fe1\u606f\u5df2\u8fc7\u671f\uff0c\u56e0\u6b64\u65e0\u6cd5\u81ea\u52a8\u767b\u5f55\u3002",
          "login.label.error.dberror":
            "\u68c0\u6d4b\u5230\u4e00\u4e2a\u9519\u8bef\u5e76\u4e14\u5df2\u4fee\u590d\u3002\n\u8bf7\u518d\u6b21\u767b\u5f55\u3002",
          "login.label.error.dormant.account":
            "\u8bf7\u4f7f\u7528\u60a8\u5728\u667a\u80fd\u624b\u673a\u7248LINE\u4e0a\u7ed1\u5b9a\u7684\u90ae\u7bb1\u5730\u5740\u767b\u5f55\uff0c\u7136\u540e\u9a8c\u8bc1\u5e10\u53f7\u3002",
          "login.label.error.extraError":
            "\u5f53\u524d\u65e0\u6cd5\u767b\u5f55\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "login.label.error.keyboardError":
            "\u8bf7\u5c06\u952e\u76d8\u8f93\u5165\u8bed\u8a00\u6539\u4e3a\u82f1\u8bed\u3002",
          "login.label.error.networkError":
            "\u7f51\u7edc\u53d1\u751f\u95ee\u9898\u767b\u5f55\u5931\u8d25\u3002\n\u8bf7\u67e5\u770b\u7f51\u7edc\u8fde\u63a5\u540e\u91cd\u8bd5\u3002",
          "login.label.error.pinCode":
            "\u9a8c\u8bc1\u7801\u6709\u8bef\u3002\u8bf7\u8f93\u5165\u6b63\u786e\u7684\u9a8c\u8bc1\u7801\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "login.label.error.schemeError":
            "\u8bf7\u767b\u5f55LINE\u5e76\u518d\u8bd5\u4e00\u6b21\u3002",
          "login.label.error.serverError":
            "\u670d\u52a1\u5668\u53d1\u751f\u9519\u8bef\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "login.label.error.serverMaintenance":
            "\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d\uff0c\u56e0\u6b64\u6682\u65f6\u65e0\u6cd5\u4f7f\u7528\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "login.label.error.verification.timeout":
            "\u60a8\u7684\u9a8c\u8bc1\u7801\u5df2\u8fc7\u671f\u3002\n\u8bf7\u91cd\u65b0\u7533\u8bf7\u3002",
          "login.label.searching.network":
            "\u6b63\u5728\u641c\u7d22\u6700\u4f73\u7684\u7f51\u7edc\u73af\u5883 \u3002",
          "login.loginwithsmartphone.tooltip":
            "\u5728\u624b\u673a\u4e0a\u9a8c\u8bc1\u540e\u53ef\u514d\u5bc6\u767b\u5f55",
          "login.naverLogin.checkbox.keepLoginStatus":
            "\u81ea\u52a8\u767b\u5f55",
          "login.naverLogin.checkbox.startUpWin":
            "\u5f00\u542fWindows\u65f6\u81ea\u52a8\u8fd0\u884c\u3002",
          "login.naverLogin.label.error.inputError":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
          "login.naverLogin.label.error.proxyError":
            "\u65e0\u6cd5\u767b\u5f55\u3002\n\u8bf7\u68c0\u67e5\u60a8\u7684\u4ee3\u7406\u670d\u52a1\u5668\u8bbe\u7f6e\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "login.naverLogin.link.changeToEmailLogin":
            "\uc774\uba54\uc77c \ub85c\uadf8\uc778",
          "login.naverLogin.link.findIDPassword1":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638 \ucc3e\uae30",
          "login.naverLogin.link.findIDPassword2":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638 \ucc3e\uae30",
          "login.naverLogin.placeHolder.naverID": "Naver ID",
          "login.naverLogin.placeHolder.password": "\u5bc6\u7801",
          "login.naverLogin.url.ID":
            "https://nid.naver.com/user/help.nhn?todo=idinquiry",
          "login.naverLogin.url.pass":
            "https://nid.naver.com/user/help.nhn?todo=pwinquiry",
          "login.otp.link.title": "OTP \ub3c4\uc6c0\ub9d0",
          "login.otp.link.url":
            "https://help.naver.com/support/contents/contents.nhn?serviceNo=532&categoryNo=1533",
          "login.password.ascii.error":
            "\u8bf7\u5c06\u952e\u76d8\u8bed\u8a00\u6539\u4e3a\u82f1\u6587",
          "login.phoneNumberLogin.alert.info":
            "\u53ea\u6709\u901a\u8fc7\u7535\u8111\u7248LINE\u6ce8\u518c\u7684\u7528\u6237\u624d\u80fd\u4f7f\u7528\u7535\u8bdd\u53f7\u7801\u767b\u5f55\u3002",
          "login.phoneNumberLogin.alert.networkerror":
            "\u7f51\u7edc\u8fde\u63a5\u53d1\u751f\u9519\u8bef\uff0c \u6b64\u9879\u64cd\u4f5c\u6ca1\u6709\u5b8c\u6210\u3002\n\u8bf7\u91cd\u8bd5\u3002",
          "login.phoneNumberLogin.identity.credential.error":
            "\u7535\u8bdd\u53f7\u7801\u65e0\u6548\u3002\u8bf7\u8f93\u5165\u6709\u6548\u7684\u7535\u8bdd\u53f7\u7801\u3002",
          "login.phoneNumberLogin.label.country":
            "\u9009\u62e9\u56fd\u5bb6/\u5730\u533a",
          "login.phoneNumberLogin.label.error.accountError":
            "\u60a8\u8f93\u5165\u7684\u7535\u8bdd\u53f7\u7801\u6216\u5bc6\u7801\u4e0d\u5b58\u5728\u6216\u65e0\u6548\u3002",
          "login.phoneNumberLogin.label.error.inputError":
            "\u5c1a\u672a\u8f93\u5165\u7535\u8bdd\u53f7\u7801\u6216\u5bc6\u7801\u3002",
          "login.phoneNumberLogin.placeHolder.password": "\u5bc6\u7801",
          "login.phoneNumberLogin.placeHolder.phone":
            "\u7535\u8bdd\u53f7\u7801",
          "login.phoneNumberLogin.placeHolder.search": "\u641c\u7d22",
          "login.phoneNumberLogin.verification.desc":
            "\u4f5c\u4e3a\u4e00\u9879\u5b89\u5168\u63aa\u65bd\uff0c\u5f53\u60a8\u5728 PC\u4e0a\u9996\u6b21\u767b\u5f55\u65f6\uff0c\u60a8\u5fc5\u987b\u9a8c\u8bc1\u60a8\u7684\u5e10\u6237\u3002 \u8bf7\u8f93\u5165\u60a8\u901a\u8fc7\u77ed\u4fe1\u6536\u5230\u7684\u9a8c\u8bc1\u7801\u3002\n\u5982\u679c\u60a8\u672a\u6536\u5230\u9a8c\u8bc1\u77ed\u4fe1\uff0c\u8bf7\u60a8\u5c1d\u8bd5\u4ee5\u4e0b\u64cd\u4f5c\u3002",
          "login.popup.abuse":
            "\u7531\u4e8e\u5c1d\u8bd5\u767b\u5f55\u5931\u8d25\u6b21\u6570\u8fc7\u591a\uff0c\u5df2\u88ab\u9650\u5236\u767b\u5f55\u3002\u8bf7\u4f7f\u7528\u4e8c\u7ef4\u7801\u767b\u5f55\u3002",
          "login.popup.error.diskFull":
            "\u5269\u4f59\u78c1\u76d8\u7a7a\u95f4\u4e0d\u8db31 GB\u3002\n\u90e8\u5206LINE\u529f\u80fd\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\u3002",
          "login.popup.kickout.r0":
            "\u4ece\u5176\u4ed6\u7535\u8111\u767b\u5f55",
          "login.popup.kickout.r1":
            "\u4e00\u5b9a\u65f6\u95f4\u5185\u672a\u8f93\u5165\u4efb\u4f55\u5185\u5bb9",
          "login.popup.kickout.r2":
            "\u4ece\u624b\u673a\u9000\u51fa\u767b\u5f55",
          "login.popup.kickout.r3": "\u6ce8\u9500\u4e86LINE\u5e10\u53f7\u3002",
          "login.popup.kickout.r4":
            "\ub124\uc774\ubc84\ub97c \ud0c8\ud1f4\ud558\uac70\ub098 \ube44\ubc00\ubc88\ud638\ub97c \ubcc0\uacbd\ud55c \uacbd\uc6b0",
          "login.popup.kickout.r5":
            "\u7531\u4e8e\u670d\u52a1\u5668\u7ef4\u62a4\u800c\u65e0\u6cd5\u4f7f\u7528\u65f6",
          "login.popup.kickout.subtitle":
            "\u4ee5\u4e0b\u60c5\u51b5\uff0c\u60a8\u5c06\u88ab\u5f3a\u5236\u9000\u51fa\u767b\u5f55\u3002",
          "login.popup.kickout.title": "\u5df2\u9000\u51fa\u767b\u5f55",
          "login.qrLogin.desc.error.expired":
            "\u60a8\u7684\u4e8c\u7ef4\u7801\u5df2\u8fc7\u671f\u3002\n\u8bf7\u5355\u51fb\u5237\u65b0\u56fe\u6807\u5e76\u626b\u63cf\u65b0\u7684\u4e8c\u7ef4\u7801\u3002",
          "login.qrLogin.desc.error.network":
            "\u7f51\u7edc\u53d1\u751f\u9519\u8bef\uff0c\u65e0\u6cd5\u8bfb\u53d6\u4e8c\u7ef4\u7801\u3002\n\u8bf7\u68c0\u67e5\u60a8\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "login.qrLogin.desc.howto":
            "\u8bf7\u5728\u79fb\u52a8\u8bbe\u5907\u4e0a\u6253\u5f00LINE\uff0c\u70b9\u51fb\u641c\u7d22\u680f\u5185\u7684\u4e8c\u7ef4\u7801\u56fe\u6807\uff0c\u5e76\u626b\u63cf\u6b64\u4e8c\u7ef4\u7801\u3002",
          "login.qrLogin.title": "\u4e8c\u7ef4\u7801\u767b\u5f55",
          "login.register.already": "LINE\u7528\u6237\u767b\u5f55",
          "login.register.downloadLink": "\u4e0b\u8f7dLINE>>",
          "login.register.help.desc":
            "LINE\u6ce8\u518c\u5b8c\u6210\u540e\uff0c \u7ed1\u5b9a\u90ae\u7bb1\u5730\u5740\uff0c \u5373\u53ef\u4f7f\u7528\u7535\u8111\u7248LINE\u3002\n",
          "login.register.help.desc1":
            "\ubaa8\ubc14\uc77c \ub77c\uc778 \uc571\uc5d0\uc11c \uac00\uc785\ud558\uace0 \ub124\uc774\ubc84 \uc544\uc774\ub514\ub97c \n\ub4f1\ub85d\ud558\uba74 PC\ubc84\uc804\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.register.help.desc2":
            "LINE\u6ce8\u518c\u5b8c\u6210\u540e\uff0c\u7ed1\u5b9a\u90ae\u7bb1\u5730\u5740\uff0c \u5373\u53ef\u4f7f\u7528Mac\u7248LINE\u3002",
          "login.register.help.desc3":
            "\ubaa8\ubc14\uc77c \ub77c\uc778 \uc571\uc5d0\uc11c \uac00\uc785\ud558\uace0 \ub124\uc774\ubc84 \uc544\uc774\ub514\ub97c \n\ub4f1\ub85d\ud558\uba74 MAC\ubc84\uc804\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.register.link.android":
            "https://play.google.com/store/apps/details?id=jp.naver.line.android&hl=zh-hans",
          "login.register.link.iphone":
            "https://itunes.apple.com/CN/app/line/id443904275",
          "login.register.link.wphone":
            "http://www.windowsphone.com/zh-CN/store/app/line/a18daaa9-9a1c-4064-91dd-794644cd88e7",
          "login.register.newmember": "\u6ce8\u518c",
          "login.registration.password.reset": "\u91cd\u7f6e\u5bc6\u7801",
          "login.simpleLogin.btn.updateQrCode":
            "\u66f4\u65b0\u4e8c\u7ef4\u7801",
          "login.simpleLogin.label.desc.normal":
            "\u4f7f\u7528LINE\u5e94\u7528\u7a0b\u5e8f\u5185\u7684\u4e8c\u7ef4\u7801\u9605\u8bfb\u5668\u626b\u63cf\u4e8c\u7ef4\u7801\u5373\u53ef\u767b\u5f55\u3002\n* \u6b64\u4e8c\u7ef4\u7801\u4ec5\u53ef\u7528\u4e8e\u767b\u5f55\u3002",
          "login.simpleLogin.label.error.cannot.refresh.too.frequently":
            "\u4e8c\u7ef4\u7801\u66f4\u65b0\u540e\uff0c\u4e00\u5b9a\u65f6\u95f4\u5185\u65e0\u6cd5\u518d\u66f4\u65b0\u3002\n\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "login.simpleLogin.label.error.qrcodeExpired":
            "\u4e8c\u7ef4\u7801\u5df2\u8fc7\u6709\u6548\u671f\u9650\u3002\u8bf7\u66f4\u65b0\u4e8c\u7ef4\u7801\u3002",
          "login.simpleLogin.link.howto":
            "\u4f7f\u7528\u4e8c\u7ef4\u7801\u767b\u5f55\u7684\u65b9\u6cd5",
          "login.tab.emailLogin": "\u90ae\u7bb1\u767b\u5f55",
          "login.tab.naverLogin": "\ub124\uc774\ubc84 \ub85c\uadf8\uc778",
          "login.tab.phoneNumberLogin":
            "\u7535\u8bdd\u53f7\u7801\u767b\u5f55 >",
          "login.tab.phoneNumberLogin.title":
            "\u7535\u8bdd\u53f7\u7801\u767b\u5f55",
          "login.tab.simpleLogin": "\u4e8c\u7ef4\u7801\u767b\u5f55",
          "loginHelp.email.image.0": "images/zh-CN/01_main.png",
          "loginHelp.email.image.1": "images/zh-CN/02_email.png",
          "loginHelp.email.image.registration":
            "image://login/zh-CN/03_email.png",
          "loginHelp.emailLogin.label.step1":
            "\u8bf7\u4e8eLINE\u5e94\u7528\u7a0b\u5e8f\u5185\u6309\u987a\u5e8f\u70b9\u51fb[\u8bbe\u7f6e> \u5e10\u53f7]\u3002",
          "loginHelp.emailLogin.label.step2":
            "\u4f7f\u7528\u201c\u5e10\u53f7\u201d\u83dc\u5355\u4e2d\u7684\u201c\u90ae\u7bb1\u5730\u5740\u201d\u7ed1\u5b9a\u90ae\u7bb1\u3002",
          "loginHelp.emailLogin.label.tab.mobile":
            "\u901a\u8fc7\u624b\u673a\u7248\u672c\u6ce8\u518c",
          "loginHelp.emailLogin.label.tab.pc":
            "\u901a\u8fc7\u7535\u8111\u7248\u672c\u6ce8\u518c",
          "loginHelp.emailLogin.label.tab.pc.desc1":
            "\u53ea\u6709\u7ed1\u5b9a\u90ae\u7bb1\u5730\u5740\u540e\u624d\u80fd\u4f7f\u7528\u90ae\u7bb1\u767b\u5f55\u3002\n\u8981\u7ed1\u5b9a\u90ae\u7bb1\uff0c\u8bf7\u524d\u5f80\u201c\u8bbe\u7f6e\u201d>\u201c\u57fa\u672c\u8bbe\u7f6e\u201d\u3002",
          "loginHelp.emailLogin.label.tab.pc.desc2":
            "\u7535\u8bdd\u53f7\u7801\u767b\u5f55\u7684\u5bc6\u7801\u540c\u6837\u9002\u7528\u4e8e\u90ae\u7bb1\u767b\u5f55\u3002\n\u8bf7\u8f93\u5165\u60a8\u7684\u90ae\u7bb1\u5730\u5740\uff0c\u7136\u540e\u8f93\u5165\u7535\u8bdd\u53f7\u7801\u767b\u5f55\u6240\u7528\u7684\u5bc6\u7801\u3002",
          "loginHelp.emailLogin.label.tab.pc.title1":
            "\u5982\u679c\u60a8\u5c1a\u672a\u7ed1\u5b9a\u90ae\u7bb1\u5730\u5740",
          "loginHelp.emailLogin.label.tab.pc.title2":
            "\u5982\u679c\u60a8\u5df2\u7ecf\u7ed1\u5b9a\u90ae\u7bb1\u5730\u5740",
          "loginHelp.emailLogin.label.title":
            "\u90ae\u7bb1\u767b\u5f55\u5e2e\u52a9",
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
          "loginHelp.qrcode.image.0": "images/zh-CN/03_qr01.png",
          "loginHelp.qrcode.image.1": "images/zh-CN/04_qr02.png",
          "loginHelp.qrcodeLogin.label.step1":
            "\u8bf7\u5728LINE\u79fb\u52a8\u5ba2\u6237\u7aef\u5185\uff0c\u6309\u300c\u66f4\u591a >\u6dfb\u52a0\u597d\u53cb > \u4e8c\u7ef4\u7801\u300d\u7684\u987a\u5e8f\u64cd\u4f5c\uff0c\u626b\u63cf\u4e8c\u7ef4\u7801\u3002",
          "loginHelp.qrcodeLogin.label.step2":
            "\u626b\u63cf\u4e8c\u7ef4\u7801\u540e\uff0c\u70b9\u51fbLINE\u5e94\u7528\u7a0b\u5e8f\u5185\u7684\u300c\u767b\u5f55\u300d\u952e\uff0c\u5373\u53ef\u767b\u5f55\u684c\u9762\u7248\u7684LINE\u3002",
          "loginHelp.qrcodeLogin.label.title":
            "\u4f7f\u7528\u4e8c\u7ef4\u7801\u767b\u5f55\u7684\u65b9\u6cd5",
          "loginHelp.qrcodeLogin.label.wap.step1":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.qrcodeLogin.label.wap.step2":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "markdown.input.context.menu.bold": "\u7c97\u4f53",
          "markdown.input.context.menu.codeblock": "\u5f3a\u8c03\u6bb5\u843d",
          "markdown.input.context.menu.italic": "\u659c\u4f53",
          "markdown.input.context.menu.strikethrough": "\u5220\u9664\u7ebf",
          "markdown.input.context.menu.wordblock": "\u5f3a\u8c03\u6587\u5b57",
          "markdown.input.guideline.bold": "*\u7c97\u4f53*",
          "markdown.input.guideline.codeblock":
            "```\u4ee3\u7801\u7247\u6bb5```",
          "markdown.input.guideline.italic": "_\u659c\u4f53_",
          "markdown.input.guideline.strikethrough": "~\u5220\u9664\u7ebf~",
          "markdown.input.guideline.wordblock": "`\u5185\u8054\u4ee3\u7801`",
          "markdown.input.menu.help": "\u5173\u4e8e\u6587\u672c\u683c\u5f0f",
          "media.locale.font":
            "NanumGothic,\ub098\ub214\uace0\ub515,Malgun,\ub9d1\uc740 \uace0\ub515,\ub9d1\uc740\uace0\ub515,Dotum,Gulim,\ub3cb\uc6c0,\uad74\ub9bc",
          "media.msg.err.directx":
            "\u60a8\u5fc5\u987b\u5b89\u88c5DirectX 9.0c\u624d\u80fd\u64ad\u653e\u89c6\u9891\u3002\n\u662f\u5426\u7acb\u5373\u5b89\u88c5\uff1f ",
          "media.msg.err.expired":
            "\u7531\u4e8e\u4fdd\u5b58\u671f\u9650\u5df2\u8fc7\uff0c\u4e0d\u80fd\u64ad\u653e\u6b64\u89c6\u9891\u3002",
          "media.msg.err.network":
            "\u7f51\u7edc\u6216\u670d\u52a1\u53d1\u751f\u95ee\u9898\uff0c\u65e0\u6cd5\u64ad\u653e\u3002\n\u8bf7\u91cd\u8bd5\u3002",
          "media.msg.err.transient":
            "\u53d1\u751f\u4e34\u65f6\u6027\u95ee\u9898\uff0c\u65e0\u6cd5\u64ad\u653e\u3002\n\u8bf7\u91cd\u8bd5\u3002",
          "media.msg.tooltip.close": "\u5173\u95ed",
          "media.msg.tooltip.minimize": "\u6700\u5c0f\u5316",
          "media.msg.tooltip.pause": "\u6682\u505c",
          "media.msg.tooltip.play": "\u64ad\u653e",
          "media.msg.tooltip.playspeed": "\u901f\u5ea6",
          "media.msg.tooltip.stop": "\u505c\u6b62",
          "media.msg.tooltip.volume": "\u97f3\u91cf",
          "media.msg.tooltip.volume1": "\u97f3\u91cf",
          "media.video.full.screen.out":
            "\u6309Esc\u952e\u9000\u51fa\u5168\u5c4f\u6a21\u5f0f\u3002",
          "media.video.replay": "\u91cd\u64ad",
          "meeting.popup.end.body":
            "\u8981\u79bb\u5f00\u6b64\u4f1a\u8bae\u5417\uff1f",
          "meeting.popup.end.button": "\u79bb\u5f00",
          "meeting.tooltip.end.call": "\u79bb\u5f00\u4f1a\u8bae",
          "menu.menubar.allNotification.off":
            "\u5173\u95ed\u6240\u6709\u63d0\u9192",
          "menu.menubar.allNotification.on":
            "\u5f00\u542f\u6240\u6709\u63d0\u9192",
          "menu.menubar.friend.addFriend": "\u6dfb\u52a0\u597d\u53cb",
          "menu.menubar.friend.makeGroup": "\u5efa\u7acb\u7fa4",
          "menu.menubar.friend.title": "\u597d\u53cb",
          "menu.menubar.help.lineHelp": "\u5e2e\u52a9",
          "menu.menubar.help.title": "\u5e2e\u52a9",
          "menu.menubar.keepmemo": "Keep\u5907\u5fd8\u5f55",
          "menu.menubar.line.about": "\u5173\u4e8eLINE",
          "menu.menubar.line.exit":
            "\u9000\u51fa\u5e76\u5173\u95ed\u7a0b\u5e8f",
          "menu.menubar.line.hideLine": "\u9690\u85cfLINE",
          "menu.menubar.line.hideOthers":
            "\u9690\u85cf\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f",
          "menu.menubar.line.setting": "\u8bbe\u7f6e",
          "menu.menubar.line.showAll": "\u663e\u793a\u5168\u90e8",
          "menu.menubar.line.title": "LINE",
          "menu.menubar.view.chat": "\u804a\u5929",
          "menu.menubar.view.friend": "\u597d\u53cb",
          "menu.menubar.view.hub": "LINE HUB",
          "menu.menubar.view.myProfile": "\u4e2a\u4eba\u8d44\u6599",
          "menu.menubar.view.myhome": "\u4e2a\u4eba\u4e3b\u9875",
          "menu.menubar.view.openchat": "OpenChat",
          "menu.menubar.view.services": "\u670d\u52a1",
          "menu.menubar.view.title": "\u9884\u89c8",
          "menu.menubar.view.today": "LINE TODAY",
          "menu.menubar.view.voom": "LINE VOOM",
          "menu.menubar.window.bringToTopAll":
            "\u5168\u90e8\u79fb\u52a8\u81f3\u6700\u524d\u9762",
          "menu.menubar.window.maximize": "\u653e\u5927",
          "menu.menubar.window.minimize": "\u6700\u5c0f\u5316",
          "menu.menubar.window.title": "Windows",
          "menu.setting.lockscreen": "\u9501\u5b9a\u6a21\u5f0f",
          "menu.toast.allNotification.off": "\u5df2\u5f00\u542f",
          "menu.toast.allNotification.on": "\u5df2\u5173\u95ed",
          "menu.tray.about": "\u5173\u4e8eLINE",
          "menu.tray.balloon.login": "\u5df2\u6210\u529f\u767b\u5f55LINE\u3002",
          "menu.tray.balloon.logout": "\u5df2\u9000\u51faLINE\u3002",
          "menu.tray.check.update": "\u67e5\u770b\u5347\u7ea7\u4fe1\u606f",
          "menu.tray.exit": "\u9000\u51fa\u5e76\u5173\u95ed\u7a0b\u5e8f",
          "menu.tray.keepmemo": "Keep\u5907\u5fd8\u5f55",
          "menu.tray.login": "\u767b\u5f55",
          "menu.tray.logout": "\u9000\u51fa\u767b\u5f55",
          "menu.tray.setting": "\u8bbe\u7f6e",
          "menu.tray.showBuddyList": "\u597d\u53cb\u5217\u8868",
          "message.context.background": "\u8bbe\u4e3a\u804a\u5929\u80cc\u666f",
          "message.context.cancel.imageselect":
            "\u53d6\u6d88\u9009\u62e9\u7167\u7247",
          "message.context.imageselect": "\u9009\u62e9\u7167\u7247",
          "message.delete.confirm":
            "\u6b64\u64cd\u4f5c\u53ea\u4f1a\u4ece\u60a8\u7684\u624b\u673a\u4e2d\u5220\u9664\u6240\u9009\u4fe1\u606f\uff0c\u800c\u4e0d\u4f1a\u4ece\u597d\u53cb\u7684\u624b\u673a\u4e2d\u5220\u9664\u5b83\u4eec\u3002",
          "message.error.invalidfile":
            "\u4e0b\u8f7d\u7684\u5347\u7ea7\u6587\u4ef6\u5df2\u635f\u574f\u3002",
          "message.error.opensetup":
            "\u65e0\u6cd5\u6253\u5f00\u5347\u7ea7\u6587\u4ef6\u3002",
          "message.error.opensetup.codesign":
            "\u60a8\u4e0b\u8f7d\u7684\u66f4\u65b0\u6587\u4ef6\u5df2\u635f\u574f\uff0c\u65e0\u6cd5\u6267\u884c\u3002",
          "message.error.update":
            "\u5df2\u6682\u65f6\u505c\u6b62\u5347\u7ea7\u3002",
          "message.error.updateurl":
            "\u65e0\u6cd5\u83b7\u53d6\u5347\u7ea7\u7f51\u5740\u3002",
          "msgbox.alert.font.exist": "\u5df2\u5e94\u7528\u6b64\u5b57\u4f53",
          "msgbox.alert.nospace":
            "\u624b\u673a\u5b58\u50a8\u7a7a\u95f4\u4e0d\u8db3\u3002\u8bf7\u6e05\u7406\u4e0d\u7528\u7684\u5e94\u7528\u3001\u7167\u7247\u6216\u89c6\u9891\uff0c\u4ee5\u4fdd\u8bc1\u8db3\u591f\u7684\u5b58\u50a8\u7a7a\u95f4\u3002",
          "msgbox.alert.resolution.apply":
            "LINE\u9700\u8981\u91cd\u65b0\u542f\u52a8\u624d\u80fd\u8c03\u6574\u65b0\u7684\u5c4f\u5e55\u5206\u8fa8\u7387\u3002\u8981\u7acb\u5373\u91cd\u65b0\u542f\u52a8\u5417\uff1f",
          "msgbox.btn.block": "\u5c4f\u853d",
          "msgbox.btn.buddy.title":
            "\u67e5\u770b\u65b0\u6dfb\u52a0\u7684\u597d\u53cb",
          "msgbox.btn.cancel.title": "\u53d6\u6d88",
          "msgbox.btn.cancelInvite.no": "\u5426",
          "msgbox.btn.cancelInvite.yes": "\u662f",
          "msgbox.btn.close.title": "\u5173\u95ed",
          "msgbox.btn.delete": "\u5220\u9664",
          "msgbox.btn.download.title": "\u4e0b\u8f7d",
          "msgbox.btn.fileOpen": "\u6253\u5f00\u6587\u4ef6",
          "msgbox.btn.gotosettings": "\u8bbe\u7f6e",
          "msgbox.btn.hide": "\u9690\u85cf",
          "msgbox.btn.install.title": "\u4e0b\u8f7d",
          "msgbox.btn.later.title": "\u7a0d\u540e\u8bbe\u5b9a",
          "msgbox.btn.leave.1.n": "\u9000\u51fa",
          "msgbox.btn.leave.group": "\u79bb\u5f00",
          "msgbox.btn.lock.enable": "\u9501\u5b9a",
          "msgbox.btn.lock.start": "\u9501\u5b9a",
          "msgbox.btn.no.title": "\u53d6\u6d88",
          "msgbox.btn.nocancel.title": "\u53d6\u6d88",
          "msgbox.btn.ok.title": "\u786e\u5b9a",
          "msgbox.btn.post.title": "\u5206\u4eab",
          "msgbox.btn.qrcode.title":
            "\u4f7f\u7528\u4e8c\u7ef4\u7801\u767b\u5f55",
          "msgbox.btn.quit.title": "\u786e\u5b9a",
          "msgbox.btn.remove": "\u5220\u9664",
          "msgbox.btn.restart": "\u91cd\u65b0\u542f\u52a8",
          "msgbox.btn.retry.title": "\u91cd\u8bd5",
          "msgbox.btn.send": "\u53d1\u9001",
          "msgbox.btn.sendkey.title": "\u8bbe\u7f6e",
          "msgbox.btn.sendshare": "\u53d1\u9001",
          "msgbox.btn.unsend": "\u64a4\u56de",
          "msgbox.btn.update.title": "\u9a6c\u4e0a\u5347\u7ea7",
          "msgbox.btn.use": "\u540c\u610f",
          "msgbox.btn.yes.title": "\u786e\u5b9a",
          "msgbox.btn.yescontinue.title": "\u7ee7\u7eed",
          "msgbox.btn.yesleave.title": "\u79bb\u5f00",
          "msgbox.desc.seemore": "\u4e86\u89e3\u8be6\u60c5",
          "msgbox.error.request.popup.desc":
            "\u53d1\u751f\u4e34\u65f6\u6027\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "needqr.login.button.label": "\u4e8c\u7ef4\u7801\u767b\u5f55",
          "needqr.title.content1":
            "\u4e3a\u9632\u6b62\u60a8\u7684\u5e10\u53f7\u88ab\u4e0d\u5f53\u4f7f\u7528\uff0c\n\u5f53\u60a8\u5728\u67d0\u7ec8\u7aef\u8bbe\u5907\u7b2c1\u6b21\u767b\u5f55\u65f6\uff0c \u9700\u8981\u4f7f\u7528\u4e8c\u7ef4\u7801\u767b\u5f55\u3002",
          "needqr.title.label":
            "\u8bf7\u4f7f\u7528\u4e8c\u7ef4\u7801\u767b\u5f55\uff01",
          "note.save.comfirm.desc":
            "\u8981\u4fdd\u5b58\u81f3[%1]\u7684\u8bb0\u4e8b\u672c\u5417\uff1f",
          "notificationcenter.timeslot.earlier": "\u66f4\u65e9",
          "notificationcenter.timeslot.recent": "\u6700\u8fd1",
          "notificationcenter.title": "\u65b0\u6d88\u606f",
          "nx.textbox.copy": "\u590d\u5236",
          "nx.textbox.paste": "\u7c98\u8d34",
          "nx.textbox.selectall": "\u5168\u9009",
          "oa.profile.desc.region.notselected": "Unspecified",
          "oa.profile.investmentfraud":
            "\u4f7f\u7528LINE\u65f6\u8c28\u9632\u6b3a\u8bc8\u3002",
          "ocr.policy.agree.btn": "\u540c\u610f",
          "ocr.policy.disagree.btn": "\u4e0d\u540c\u610f",
          "ocr.progress.desc.scan": "\u6b63\u5728\u8bc6\u522b\u6587\u5b57...",
          "ocr.progress.desc.translate": "\u6b63\u5728\u7ffb\u8bd1...",
          "openchat.allthreads.desc.nothreads":
            "OpenChat\u4e2d\u521b\u5efa\u7684\u5168\u90e8\u5bf9\u8bdd\u5c06\u663e\u793a\u5728\u6b64\u3002",
          "openchat.allthreads.title.nothreads":
            "OpenChat\u4e2d\u6682\u65e0\u5bf9\u8bdd",
          "openchat.chatlist.popup.deletechat":
            "\u8981\u4ece\u804a\u5929\u5217\u8868\u4e2d\u5220\u9664\u6b64\u804a\u5929\u5417\uff1f\u6b64\u64cd\u4f5c\u4e0d\u4f1a\u4eceOpenChat\u5217\u8868\u4e2d\u5220\u9664\u804a\u5929\u3002",
          "openchat.chatlist.popup.hidechat":
            "\u8981\u4ece\u804a\u5929\u5217\u8868\u4e2d\u9690\u85cf\u6b64\u804a\u5929\u5417\uff1f\u6b64\u64cd\u4f5c\u4e0d\u4f1a\u4eceOpenChat\u5217\u8868\u4e2d\u9690\u85cf\u804a\u5929\u3002",
          "openchat.favoritethreads.title.nothreads":
            "\u6536\u85cf\u5939\u4e2d\u6682\u65e0\u5bf9\u8bdd",
          "openchat.hidemessages.desc.hidethismember":
            "\u8981\u4ece\u73b0\u5728\u5f00\u59cb\u9690\u85cf\u8be5\u6210\u5458\u53d1\u9001\u7684\u6d88\u606f\u5417\uff1f\u8be5\u7528\u6237\u7684\u6d88\u606f\u5c06\u5728\u6b64OpenChat\u53ca\u5176\u804a\u5929\u5ba4\u4e2d\u9690\u85cf\uff0c\u4f46\u8fc7\u53bb\u7684\u6d88\u606f\u4ecd\u5c06\u663e\u793a\u3002",
          "openchat.hidemessages.desc.maximumhide":
            "\u53ef\u9690\u85cf\u6d88\u606f\u7684\u6210\u5458\u6570\u91cf\u5df2\u8fbe\u4e0a\u9650\u3002\u8bf7\u901a\u8fc7\u6210\u5458\u4e2a\u4eba\u8d44\u6599\u53d6\u6d88\u9690\u85cf\u90e8\u5206\u6210\u5458\u7684\u6d88\u606f\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "openchat.hidemessages.desc.messageshidden":
            "\u73b0\u5df2\u9690\u85cf\u6765\u81ea\u8be5\u6210\u5458\u7684\u6d88\u606f\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u6210\u5458\u4e2a\u4eba\u8d44\u6599\u53d6\u6d88\u9690\u85cf\u3002",
          "openchat.join.button.requestjoin": "\u7533\u8bf7\u52a0\u5165",
          "openchat.linkpopup.desc.donotshowformonth":
            "1\u4e2a\u6708\u5185\u4e0d\u518d\u663e\u793a",
          "openchat.readallthreads.desc.markallasread":
            "\u8981\u5c06\u6240\u6709\u5bf9\u8bdd\u4fe1\u606f\u6807\u8bb0\u4e3a\u5df2\u8bfb\u5417\uff1f",
          "openchat.settings.desc.mentioneveryone":
            "\u63d0\u53ca\u6240\u6709\u4eba\uff08@All\uff09",
          "openchat.thread.desc.fewerthan10":
            "\u4e0d\u8db310\u6761\u6d88\u606f",
          "openchat.thread.desc.sendafiletothread":
            "\u53d1\u9001\u6587\u4ef6\u5230\u6b64\u5bf9\u8bdd",
          "openchat.thread.desc.updateline":
            "\u8bf7\u66f4\u65b0LINE\u4ee5\u67e5\u770b\u6b64\u6d88\u606f\u3002",
          "openchat.thread.placeholder.expired":
            "\u65e0\u6cd5\u5c06\u6d88\u606f\u6dfb\u52a0\u5230\u8fc7\u671f\u5bf9\u8bdd\u4e2d\u3002",
          "openchat.thread.tooltip.yourthreadicon":
            "\u67e5\u770b\u6b64OpenChat\u4ee5\u53ca\u60a8\u6536\u85cf\u7684\u5168\u90e8\u5bf9\u8bdd\u3002",
          "openchat.threadpopup.desc.expired":
            "\u5bf9\u8bdd\u5df2\u8fc7\u671f\uff0c\u65e0\u6cd5\u6dfb\u52a0\u6216\u5220\u9664\u3002",
          "openchat.threadpopup.desc.expirederror":
            "\u6b64\u5bf9\u8bdd\u5df2\u8fc7\u671f\u3002",
          "openchat.threadpopup.desc.unsupported":
            "\u5305\u542b\u4f1a\u8bdd\u4e0d\u652f\u6301\u7684\u6587\u4ef6\u683c\u5f0f\u3002",
          "openchat.threads.button.readall": "\u5168\u90e8\u5df2\u8bfb",
          "openchat.threads.button.seemessages": "\u67e5\u770b\u6d88\u606f",
          "openchat.threads.tab.all": "\u5168\u90e8",
          "openchat.threads.tab.favorites": "\u6536\u85cf\u5939",
          "openchat.threads.title.threads": "\u5bf9\u8bdd",
          "openchat.threads.tooltip.messagewontsend":
            "\u5bf9\u8bdd\u4e2d\u7684\u6d88\u606f\u5c06\u4e0d\u4f1a\u663e\u793a\u5230\u804a\u5929\u4e2d\u3002",
          "openchat.threadspopup.button.cancel": "\u53d6\u6d88",
          "openchat.threadspopup.button.delete": "\u5220\u9664",
          "openchat.threadspopup.button.unsend": "\u64a4\u56de",
          "openchat.threadspopup.desc.deleterootmessage":
            "\u5220\u9664\u6b64\u6d88\u606f\u5c06\u540c\u65f6\u5220\u9664\u6240\u6709\u4eba\u7684\u5bf9\u8bdd\u3002",
          "openchat.threadspopup.desc.unsendrootmessage":
            "\u64a4\u56de\u6b64\u6d88\u606f\u5c06\u540c\u65f6\u5220\u9664\u6240\u6709\u4eba\u7684\u5bf9\u8bdd\u3002",
          "openchat.threadspopup.title.deleterootmessage":
            "\u8981\u5220\u9664\u6b64\u6d88\u606f\u5417\uff1f",
          "openchat.threadspopup.title.unsendrootmessage":
            "\u8981\u64a4\u56de\u6b64\u6d88\u606f\u5417\uff1f",
          "openchat.unhidemessages.desc.unhidden":
            "\u60a8\u53ef\u4ee5\u7ee7\u7eed\u67e5\u770b\u6765\u81ea\u8be5\u6210\u5458\u7684\u6d88\u606f\u3002",
          "openchat.unhidemessages.desc.unhide":
            "\u8981\u4ece\u73b0\u5728\u5f00\u59cb\u53d6\u6d88\u9690\u85cf\u8be5\u6210\u5458\u53d1\u9001\u7684\u6d88\u606f\u5417\uff1f\u8fc7\u53bb\u9690\u85cf\u7684\u6d88\u606f\u5c06\u65e0\u6cd5\u663e\u793a\u3002",
          "openchat.userprofile.button.hidemessages":
            "\u9690\u85cf\u6d88\u606f",
          "openchat.userprofile.button.unhidemessages":
            "\u53d6\u6d88\u9690\u85cf\u6d88\u606f",
          "openchat.yourthread.button.seemessages": "\u67e5\u770b\u6d88\u606f",
          "openchat.yourthread.desc.fewerthan10":
            "\u4e0d\u8db310\u6761\u6d88\u606f",
          "openchat.yourthreads.button.readmore":
            "\u67e5\u770b\u5bf9\u8bdd\u8be6\u60c5",
          "openchat.yourthreads.desc.newthreadmessages":
            "\u65b0\u5bf9\u8bdd\u6d88\u606f",
          "openchat.yourthreads.desc.photosent":
            "\u56fe\u7247\u5df2\u53d1\u9001\u3002",
          "openchat.yourthreads.desc.stickersent":
            "\u8d34\u56fe\u5df2\u53d1\u9001\u3002",
          "openchat.yourthreads.desc.videosent":
            "\u89c6\u9891\u5df2\u53d1\u9001\u3002",
          "openchat.yourthreads.desc.vmsent":
            "\u8bed\u97f3\u4fe1\u606f\u5df2\u53d1\u9001\u3002",
          "openchat.yourthreads.title.messageunavailable":
            "\u65e0\u6cd5\u663e\u793a\u6d88\u606f",
          "openchat.yourthreadspopup.button.ok": "\u786e\u5b9a",
          "openchat.yourthreadspopup.desc.threaddeleted":
            "\u6b64\u5bf9\u8bdd\u5df2\u88ab\u5220\u9664\u3002",
          "os.msgbox.btn.gotosettings": "\u7cfb\u7edf\u504f\u597d\u8bbe\u7f6e",
          "pl.square.setting.tooltip":
            "\u60a8\u53ef\u4ee5\u6307\u5b9a\u8c01\u80fd\u5728\u5e7f\u573a\u4e2d\u521b\u5efa\u548c\u5220\u9664\u6295\u7968\u3002",
          "poll.create.title": "\u521b\u5efa\u65b0\u6295\u7968",
          "poll.edit.title": "\u7f16\u8f91\u6295\u7968",
          "poll.main.title": "\u6295\u7968",
          "poll.ongoing.title": "\u6295\u7968",
          "poll.result.title": "\u6295\u7968\u7ed3\u679c",
          "poll.votedcount.title": "%1 (%2)",
          "popup.plugin.failed.retry":
            "\u4e0b\u8f7d\u5931\u8d25\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "power.label.tootip": "\u5173\u95edLINE",
          "profile.btn.chat.tooltip": "\u804a\u5929",
          "profile.btn.home.tooltip": "\u4e3b\u9875",
          "profile.btn.recommend.tooltip": "\u63a8\u8350",
          "profile.button.investmentfraudwarning":
            "\u4f7f\u7528LINE\u65f6\u8c28\u9632\u6b3a\u8bc8\u3002",
          "profile.delete": "\u5220\u9664\u4e2a\u4eba\u8d44\u6599",
          "profile.desc.birthday": "M\u6708d\u65e5",
          "profile.desc.onediting":
            "\u8981\u79bb\u5f00\u6b64\u9875\u9762\u5417\uff1f\u672a\u4fdd\u5b58\u7684\u66f4\u6539\u5c06\u4f1a\u5168\u90e8\u820d\u5f03\u3002",
          "profile.desc.timelineposts": "LINE VOOM\u5e16\u5b50",
          "profile.edit.background.color":
            "\u9009\u62e9\u80cc\u666f\u989c\u8272",
          "profile.edit.font.color": "\u9009\u62e9\u5b57\u4f53\u989c\u8272",
          "profile.edit.placeholder": "\u8f93\u5165\u6587\u672c",
          "profile.friendsnameedit.desc.namesetbyfriend":
            "\u597d\u53cb\u8bbe\u7f6e\u7684\u540d\u5b57\uff1a%1",
          "profile.popup.report": "\u4e3e\u62a5",
          "profile.seemoremenu.button.block": "\u5c4f\u853d",
          "profile.select.capture": "\u5c4f\u5e55\u622a\u56fe",
          "profile.select.default":
            "\u4ece\u4e2a\u4eba\u8d44\u6599\u9009\u62e9",
          "profile.select.local": "\u4ece\u5f53\u524d\u7535\u8111\u9009\u62e9",
          "profile.select.text": "\u6587\u672c\u5934\u50cf",
          "profile.socialprofile.menutitle.editprofile":
            "\u4e2a\u4eba\u8d44\u6599\u8bbe\u7f6e",
          "registration.btn.label.resendPin":
            "\u91cd\u65b0\u53d1\u9001\u9a8c\u8bc1\u7801",
          "registration.btn.message.resendPin":
            "\u5df2\u91cd\u65b0\u53d1\u9001\u9a8c\u8bc1\u7801\u3002",
          "registration.check.age.ageVerification.body":
            "\u60a8\u5fc5\u987b\u786e\u8ba4\u5e74\u9f84\u540e\u624d\u80fd\u4f7f\u7528\u6b64\u529f\u80fd\u3002\n\u8981\u786e\u8ba4\u60a8\u7684\u5e74\u9f84\uff0c\u8bf7\u5728\u79fb\u52a8\u7248LINE\u4e2d\u524d\u5f80\u201c\u8bbe\u7f6e\u201d>\u201c\u5e74\u9f84\u786e\u8ba4\u201d\u3002",
          "registration.check.age.ageVerification.title":
            "\u5e74\u9f84\u786e\u8ba4",
          "registration.check.age.ageunder.body":
            "\u4ec5\u901a\u8fc7\u5e74\u9f84\u8ba4\u8bc1\u768418\u5c81\u4ee5\u4e0a\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u672c\u529f\u80fd\u3002",
          "registration.check.age.error.loadUrl":
            "\u65e0\u6cd5\u8fde\u63a5\u3002\u8bf7\u68c0\u67e5\u7f51\u7edc\u8fde\u63a5\u72b6\u6001\u540e\u91cd\u8bd5\u3002",
          "registration.check.age.error.retrieveRequest":
            "\u786e\u8ba4\u5e74\u9f84\u65f6\u53d1\u751f\u95ee\u9898\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "registration.check.age.underAge":
            "\u5982\u8981\u901a\u8fc7\u641c\u7d22\u529f\u80fd\u6dfb\u52a0\u597d\u53cb\uff0c\u8bf7\u5148\u5728\u667a\u80fd\u624b\u673a\u7248LINE\u4e2d\u9a8c\u8bc1\u60a8\u5df2\u5e74\u6ee118\u5468\u5c81\u3002\u6b64\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u626b\u63cf\u4e8c\u7ef4\u7801\u6765\u6dfb\u52a0\u597d\u53cb\u3002",
          "registration.code.phone.call": "\u7535\u8bdd\u9a8c\u8bc1",
          "registration.code.phone.guide":
            "\u9a8c\u8bc1\u7801\u5c06\u901a\u8fc7\u7535\u8bdd\u901a\u77e5\u7ed9\u60a8\u3002 \n\u53e6\u5916\uff0c\u6765\u7535\u53f7\u7801\u53ef\u80fd\u65e0\u6cd5\u663e\u793a\uff0c\n\u5e76\u4e14\u6839\u636e\u60a8\u4f7f\u7528\u7684\u901a\u8baf\u5957\u9910\uff0c\u53ef\u80fd\u4f1a\u4ea7\u751f\u901a\u8baf\u8d39\u7528\u3002\n",
          "registration.code.sms.resent.guide":
            "\u60a8\u53ef\u4ee5\u5728%1\u5206%2\u79d2\u540e\u91cd\u65b0\u7533\u8bf7\u53d1\u9001\u9a8c\u8bc1\u7801\u3002\n",
          "registration.common.next": "\u4e0b\u4e00\u6b65",
          "registration.common.underIE8.alert":
            "\u9700\u8981\u4f7f\u7528Internet Explorer 8\u4ee5\u4e0a\u7248\u672c\u624d\u80fd\u6ce8\u518c\u3002\n\u8bf7\u66f4\u65b0Internet Explorer\uff0c\u6216\u4f7f\u7528\u79fb\u52a8\u8bbe\u5907\u6ce8\u518c\u3002",
          "reply.doubleclick.toast":
            "\u53cc\u51fb\u4fe1\u606f\u5373\u53ef\u56de\u590d\u3002 ",
          "reply.error.toast": "\u627e\u4e0d\u5230\u539f\u4fe1\u606f\u3002",
          "reply.goto.replied": "\u8fd4\u56de\u81f3\u539f\u4fe1\u606f",
          "reply.no.original.message":
            "\uff08\u65e0\u6cd5\u663e\u793a\u539f\u4fe1\u606f\uff09",
          "reply.unknown.user": "\u672a\u77e5\u7528\u6237",
          "report.btn.agreeandsend": "\u540c\u610f\u5e76\u53d1\u9001",
          "report.btn.agreeandsend.thpdpa": "\u8ba4\u53ef\u5e76\u53d1\u9001",
          "report.confirm.groupinvitation":
            "\u4e3e\u62a5\u67d0\u4f4d\u9080\u8bf7\u60a8\u53c2\u52a0\u7fa4\u804a\u7684\u7528\u6237\uff0c\u4f1a\u4e0eLINE\u5206\u4eab\u8be5\u804a\u5929\u7684\u6570\u636e\u3002",
          "report.desc.reason":
            "\u8bf7\u9009\u62e9\u60a8\u4e3e\u62a5\u7684\u7406\u7531\u3002",
          "report.desc.title": "\u4e3e\u62a5",
          "report.done": "\u5df2\u4e3e\u62a5",
          "report.done.suggestBlock":
            "\u5df2\u4e3e\u62a5\u3002\n\u8981\u5c4f\u853d\u6b64\u7528\u6237\u5417\uff1f",
          "report.done.suggestBlock.groupinvitation":
            "\u8981\u5c4f\u853d%1\u5417\uff1f",
          "report.note.subTitle":
            "\u4e3e\u62a5\u6b64\u5e16\u5b50\u3002\n\uff08\u4f5c\u8005: %1\uff09",
          "report.popupbutton.impersonation.decline": "\u8df3\u8fc7",
          "report.popupbutton.impersonation.proceed": "\u7ee7\u7eed",
          "report.reason.Other": "\u5176\u4ed6",
          "report.reason.gender": "\u53d1\u9001\u8272\u60c5\u4fe1\u606f",
          "report.reason.harrassment": "\u9a9a\u6270\u884c\u4e3a",
          "report.reason.impersonation": "\u5047\u5192",
          "report.reason.impersonation.inquirypopup":
            "\u8bf7\u60a8\u6253\u5f00\u610f\u89c1\u53cd\u9988\u8868\u5e76\u586b\u5199\u5fc5\u8981\u4fe1\u606f\u3002\u60a8\u6240\u63d0\u4f9b\u7684\u8be6\u7ec6\u5185\u5bb9\u53ef\u534f\u52a9\u8c03\u67e5\u6b64\u5047\u5192\u6848\u4ef6\u3002",
          "report.reason.scam": "\u6b3a\u8bc8",
          "report.reason.spam": "\u6ee5\u53d1\u5e7f\u544a\u4fe1\u606f",
          "requireinvite.popup.button.cancel": "\u53d6\u6d88",
          "requireinvite.popup.button.confirmon": "\u5173\u95ed",
          "requireinvite.popup.desc.onewaywarning":
            "\u6b64\u8bbe\u7f6e\u5c06\u65e0\u6cd5\u66f4\u6539\u3002",
          "requireinvite.popup.title.onewaywarning":
            "\u662f\u5426\u5f00\u542f\u201c\u6536\u5230\u9080\u8bf7\u624d\u80fd\u52a0\u5165\u201d\u7684\u8bbe\u7f6e\uff1f",
          "requireinvite.toggle.desc":
            "\u53ea\u6709\u6536\u5230\u9080\u8bf7\u7684\u65b0\u6210\u5458\u624d\u80fd\u52a0\u5165\u6b64\u7fa4\u3002",
          "requireinvite.toggle.title":
            "\u6536\u5230\u9080\u8bf7\u624d\u80fd\u52a0\u5165",
          "screen.desc.need.os.recordscreen":
            "\u5982\u8981\u5728\u89c6\u9891\u901a\u8bdd\u65f6\u622a\u5c4f\u6216\u5171\u4eab\u5c4f\u5e55\uff0c\u8bf7\u5148\u5141\u8bb8LINE\u8bbf\u95ee\u5f55\u5c4f\u529f\u80fd\u3002",
          "screenshare.desc.need.os.recordscreen":
            "\u65e0\u6cd5\u5171\u4eab\u5c4f\u5e55\uff0c\u8bf7\u5148\u5141\u8bb8LINE\u8bbf\u95ee\u5f55\u5c4f\u529f\u80fd\u3002",
          "screenshare.ongoing.error":
            "\u5171\u4eab\u5c4f\u5e55\u8fc7\u7a0b\u4e2d\uff0c\u65e0\u6cd5\u4f7f\u7528\u6b64\u529f\u80fd\u3002",
          "screenshare.ongoing.user": "\u6b63\u5728\u5171\u4eab\u5c4f\u5e55",
          "search.defaultView.doYouRemoveAllRecentSearchKeywords":
            "\u8981\u6e05\u9664\u60a8\u8fd1\u671f\u641c\u7d22\u7684\u6240\u6709\u5185\u5bb9\u5417\uff1f",
          "search.defaultView.doYouUseSaveSearchKeyword":
            "\u662f\u5426\u8981\u542f\u7528\u300c\u8fd1\u671f\u641c\u7d22\u300d\u529f\u80fd\uff1f",
          "search.defaultView.dontYouUseSaveSearchKeyword":
            "\u662f\u5426\u8981\u505c\u7528\u300c\u8fd1\u671f\u641c\u7d22\u300d\u529f\u80fd\uff1f",
          "search.defaultView.offSaveSearchKeyword":
            "\u505c\u7528\u81ea\u52a8\u4fdd\u5b58",
          "search.defaultView.onSaveSearchKeyword":
            "\u542f\u7528\u81ea\u52a8\u4fdd\u5b58",
          "search.defaultView.recentSearchKeyword": "\u8fd1\u671f\u641c\u7d22",
          "search.defaultView.recentSearchKeywordEmpty":
            "\u60a8\u6ca1\u6709\u8fd1\u671f\u7684\u641c\u7d22\u8bb0\u5f55\u3002",
          "search.defaultView.removeAllRecentSearchKeywords":
            "\u5168\u90e8\u6e05\u9664",
          "search.defaultView.saveSearchKeywordOff":
            "\u5df2\u505c\u7528\u300c\u8fd1\u671f\u641c\u7d22\u300d\u529f\u80fd\u3002",
          "select.video.error.ratio":
            "\u6b64\u5bbd\u9ad8\u6bd4\u4e0d\u80fd\u7528\u4e8e\u5934\u50cf\u89c6\u9891\u3002",
          "service.download.done.popup.desc": "\u4e0b\u8f7d\u5b8c\u6210\u3002",
          "service.download.inprogress.popup.desc":
            "\u6b63\u5728\u4e0b\u8f7d\n%1...",
          "service.install.device.done.popup.desc":
            "\u5b89\u88c5\u5b8c\u6210\u3002",
          "service.install.device.popup.desc":
            "\u6b63\u5728\u5b89\u88c5\n%1...",
          "service.install.popup.desc":
            "\u9700\u8981\u5148\u5b89\u88c5%2\u540e\u624d\u80fd\u4f7f\u7528%1\u529f\u80fd\u3002\u8981\u4e0b\u8f7d\u5b89\u88c5\u6587\u4ef6\u5417\uff1f",
          "setting.advancedSetting": "\u9ad8\u7ea7\u8bbe\u7f6e",
          "setting.advancedSetting.proxy.apply": "\u5e94\u7528",
          "setting.advancedSetting.proxy.apply.disabled":
            "\u5df2\u505c\u7528\u4ee3\u7406\u670d\u52a1\u5668\u8bbe\u7f6e\u3002",
          "setting.advancedSetting.proxy.apply.enabled":
            "\u5df2\u542f\u7528\u4ee3\u7406\u670d\u52a1\u5668\u8bbe\u7f6e\u3002",
          "setting.advancedSetting.proxy.check":
            "\u68c0\u67e5\u4ee3\u7406\u670d\u52a1\u5668",
          "setting.advancedSetting.proxy.complete":
            "\u4ee3\u7406\u670d\u52a1\u5668\u5df2\u53ef\u4ee5\u4f7f\u7528\u3002",
          "setting.advancedSetting.proxy.connect.check":
            "\u6b63\u5728\u901a\u8fc7\u4ee3\u7406\u670d\u52a1\u5668\u6d4b\u8bd5\u8fde\u63a5\u2026",
          "setting.advancedSetting.proxy.fail":
            "\u65e0\u6cd5\u901a\u8fc7\u4ee3\u7406\u670d\u52a1\u5668\u5efa\u7acb\u8fde\u63a5\u3002\n\u8bf7\u68c0\u67e5\u60a8\u7684\u4ee3\u7406\u670d\u52a1\u5668\u8bbe\u7f6e\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "setting.advancedSetting.proxy.fail.protocol":
            "\u4ee3\u7406\u670d\u52a1\u5668\u534f\u8bae\u9519\u8bef\uff1a%1",
          "setting.advancedSetting.proxy.fail.verifyUser":
            "\u65e0\u6cd5\u9a8c\u8bc1\u7528\u6237\u3002",
          "setting.advancedSetting.proxy.host": "\u4e3b\u673a",
          "setting.advancedSetting.proxy.port": "\u7aef\u53e3",
          "setting.advancedSetting.proxy.protocol": "\u534f\u8bae",
          "setting.advancedSetting.proxy.protocol.check":
            "\u6b63\u5728\u68c0\u67e5\u901a\u4fe1\u534f\u8bae\u2026",
          "setting.advancedSetting.proxy.responseTime":
            "\uff08\u7b49\u5f85\u65f6\u95f4\uff1a%1\u6beb\u79d2\uff09",
          "setting.advancedSetting.proxy.server": "\u670d\u52a1\u5668",
          "setting.advancedSetting.proxy.server.check":
            "\u6b63\u5728\u68c0\u67e5\u4ee3\u7406\u670d\u52a1\u5668\u2026",
          "setting.advancedSetting.proxy.title":
            "\u4ee3\u7406\u670d\u52a1\u5668",
          "setting.advancedSetting.proxy.use":
            "\u542f\u7528\u4ee3\u7406\u670d\u52a1\u5668",
          "setting.advancedSetting.proxy.verification":
            "\u542f\u7528\u4ee3\u7406\u670d\u52a1\u5668\u9a8c\u8bc1",
          "setting.advancedSetting.proxy.verification.id": "\u7528\u6237\u540d",
          "setting.advancedSetting.proxy.verification.pw": "\u5bc6\u7801",
          "setting.advancedSetting.sync": "\u540c\u6b65",
          "setting.advancedSetting.sync.completed":
            "\u6570\u636e\u5df2\u540c\u6b65\u3002",
          "setting.advancedSetting.sync.desc":
            "\u5f00\u542f\u540c\u6b65\u529f\u80fd\u4f7f\u597d\u53cb\u548c\u804a\u5929\u5217\u8868\u4fdd\u6301\u6700\u65b0\u72b6\u6001\u3002",
          "setting.advancedSetting.sync.error.interval":
            "LINE\u5c06\u6bcf\u9694%1\u5206\u949f\u5bf9\u60a8\u7684\u6570\u636e\u8fdb\u884c\u4e00\u6b21\u540c\u6b65\u3002\n\u8bf7\u7a0d\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "setting.advancedSetting.sync.error.network":
            "\u56e0\u4e3a\u53d1\u751f\u7f51\u7edc\u9519\u8bef\uff0c\u65e0\u6cd5\u8fdb\u884c\u540c\u6b65\u3002\n\u8bf7\u68c0\u67e5\u60a8\u7684\u7f51\u7edc\u8fde\u63a5\u3002",
          "setting.advancedSetting.sync.inprogress":
            "\u6b63\u5728\u540c\u6b65...\n\u8bf7\u7a0d\u5019\u3002",
          "setting.advancedSetting.sync.time": "yyyy.M.d %1 h:mm",
          "setting.advancedSetting.sync.title": "\u540c\u6b65\u6570\u636e",
          "setting.alarm.name": "\u901a\u77e5\u63d0\u793a\u97f3 %1",
          "setting.basic.font.apply.alert":
            "\u9700\u91cd\u65b0\u542f\u52a8LINE\u540e\u624d\u80fd\u66f4\u6539\u5b57\u4f53\uff0c\u8981\u7acb\u5373\u91cd\u542f\u5417\uff1f",
          "setting.basic.heading.language": "\u8bed\u8a00",
          "setting.basic.language.apply.alert":
            "LINE\u9700\u91cd\u65b0\u542f\u52a8\u624d\u80fd\u53d8\u66f4\u8bed\u8a00\u8bbe\u7f6e\u3002\u662f\u5426\u7acb\u5373\u91cd\u542f\uff1f",
          "setting.basic.language.apply.desc":
            "\u65b0\u8bbe\u7f6e\u5c06\u4e8e\u91cd\u542f\u540e\u751f\u6548\u3002",
          "setting.basic.language.apply.no": "\u7a0d\u5019\u91cd\u542f",
          "setting.basic.language.apply.yes": "\u7acb\u523b\u91cd\u542f",
          "setting.btn.select.folder": "\u9009\u62e9",
          "setting.btn.submit": "\u786e\u5b9a",
          "setting.call.blur": "\u80cc\u666f\u7279\u6548",
          "setting.call.call.incomingnoti":
            "\u663e\u793a\u6765\u7535\u901a\u77e5\u63d0\u9192",
          "setting.call.camera": "\u76f8\u673a",
          "setting.call.defaultMike": "\u4f7f\u7528\u7cfb\u7edf\u8bbe\u7f6e",
          "setting.call.defaultSpeaker": "\u4f7f\u7528\u7cfb\u7edf\u8bbe\u7f6e",
          "setting.call.desc.deviceloading":
            "\u8bbe\u5907\u52a0\u8f7d\u4e2d...",
          "setting.call.ducking":
            "\u964d\u4f4e\u5176\u4ed6\u5e94\u7528\u7684\u97f3\u91cf",
          "setting.call.grouphd":
            "\u9ad8\u6e05\u7fa4\u7ec4\u89c6\u9891\u901a\u8bdd",
          "setting.call.grouphd.desc":
            "\u4ee5\u9ad8\u6e05\u753b\u8d28\u8fdb\u884c\u7fa4\u7ec4\u89c6\u9891\u901a\u8bdd\u3002\u4f46\u6b64\u529f\u80fd\u4f1a\u589e\u52a0\u8bbe\u5907\u7684CPU\u548cRAM\u4f7f\u7528\u7387\u3002",
          "setting.call.grouphd.desc.forwin":
            "\u4f7f\u7528\u8bbe\u5907\u7684\u89c6\u9891\u89e3\u7801\u5668\u4ee5\u9ad8\u6e05\u753b\u8d28\u8fdb\u884c\u7fa4\u7ec4\u89c6\u9891\u901a\u8bdd\u3002\u4f46\u6b64\u529f\u80fd\u4f1a\u589e\u52a0\u8bbe\u5907\u7684CPU\u548cRAM\u4f7f\u7528\u7387\u3002",
          "setting.call.handsfreebtinfo.desc":
            "\u82e5\u5728\u4f7f\u7528\u540c\u65f6\u88ab\u8bc6\u522b\u4e3a\u626c\u58f0\u5668\u548c\u9ea6\u514b\u98ce\u7684\u84dd\u7259\u8bbe\u5907\u65f6\u9047\u5230\u95ee\u9898\uff0c\u8bf7\u5c1d\u8bd5\u5c06\u9ea6\u514b\u98ce\u548c\u626c\u58f0\u5668\u8bbe\u7f6e\u4e3a\u540c\u4e00\u8bbe\u5907\u3002",
          "setting.call.label.duckingGuide":
            "\u62d6\u52a8\u6ed1\u5757\u4ee5\u964d\u4f4e\u901a\u8bdd\u671f\u95f4\u5176\u4ed6\u5e94\u7528\u7684\u97f3\u91cf\u3002\u62d6\u52a8\u6ed1\u5757\u5230100%\u65f6\uff0c\u5176\u4ed6\u5e94\u7528\u5c06\u5904\u4e8e\u9759\u97f3\u72b6\u6001\u3002",
          "setting.call.mic.desc.noisecancelinglight":
            "\u53bb\u9664\u7535\u8111\u98ce\u6247\u3001\u80cc\u666f\u97f3\u4e50\u7b49\u566a\u97f3\u3002",
          "setting.call.mic.desc.noisecancelingstrong":
            "\u53bb\u9664\u72ac\u5420\u3001\u6572\u51fb\u952e\u76d8\u7b49\u566a\u97f3\u3002",
          "setting.call.mic.echocancelling": "\u6d88\u9664\u56de\u58f0",
          "setting.call.mic.echocancelling.desc":
            "\u6d88\u9664\u901a\u8bdd\u65f6\u97f3\u9891\u8bbe\u5907\u4ea7\u751f\u7684\u56de\u58f0\uff0c\u8ba9\u5176\u4ed6\u901a\u8bdd\u6210\u5458\u53ef\u4ee5\u66f4\u52a0\u6e05\u6670\u5730\u542c\u5230\u60a8\u7684\u58f0\u97f3\u3002\u4f7f\u7528\u7535\u8111\u5171\u4eab\u58f0\u97f3\u65f6\uff0c\u8bf7\u5173\u95ed\u6b64\u9009\u9879\u3002",
          "setting.call.mic.echocancelling.mouseovertooltip":
            "\u9009\u62e9\u201c\u6807\u51c6\u201d\u6a21\u5f0f\uff0c\u53ef\u83b7\u5f97\u63a8\u8350\u7684\u6807\u51c6\u964d\u566a\u4f53\u9a8c\u3002\u9009\u62e9\u201c\u6700\u5927\u201d\u6a21\u5f0f\uff0c\u53ef\u66f4\u52a0\u6709\u6548\u5730\u6d88\u9664\u56de\u58f0\u3002\u8bf7\u6ce8\u610f\uff1a\u5f00\u542f\u201c\u6700\u5927\u201d\u6a21\u5f0f\u540e\uff0c\u5982\u679c\u5176\u4ed6\u6210\u5458\u4e0e\u60a8\u540c\u65f6\u8bb2\u8bdd\uff0c\u60a8\u7684\u58f0\u97f3\u53ef\u80fd\u4f1a\u88ab\u622a\u65ad\u3002",
          "setting.call.mic.echocancelling.option1": "\u6807\u51c6",
          "setting.call.mic.echocancelling.option2": "\u6700\u5927",
          "setting.call.mic.menu.noisecancelinglight": "\u5f31",
          "setting.call.mic.menu.noisecancelingstrong": "\u5f3a",
          "setting.call.mic.noisecanceling": "\u964d\u566a",
          "setting.call.mic.noisecanceling.checkbox":
            "\u5f00\u542f\u964d\u566a",
          "setting.call.mic.noisecanceling.desc":
            "\u964d\u4f4e\u901a\u8bdd\u65f6\u7684\u80cc\u666f\u566a\u97f3\uff0c\u53ef\u8ba9\u5176\u4ed6\u6210\u5458\u66f4\u52a0\u6e05\u695a\u5730\u542c\u5230\u60a8\u7684\u58f0\u97f3\u3002",
          "setting.call.mike": "\u9ea6\u514b\u98ce",
          "setting.call.mike.autoVolume":
            "\u81ea\u52a8\u8c03\u8282\u97f3\u91cf",
          "setting.call.msg.noCamera":
            "\u65e0\u76f8\u673a\u8fde\u63a5\u3002\n\u8bf7\u68c0\u67e5\u8bbe\u5907\u8fde\u63a5\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "setting.call.msg.noMike":
            "\u65e0\u9ea6\u514b\u98ce\u8fde\u63a5\u3002\n\u8bf7\u68c0\u67e5\u8bbe\u5907\u8fde\u63a5\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "setting.call.msg.noSpeaker":
            "\u65e0\u626c\u58f0\u5668\u8fde\u63a5\u3002\n\u8bf7\u68c0\u67e5\u8bbe\u5907\u8fde\u63a5\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "setting.call.noDevice": "\u65e0\u8bbe\u5907",
          "setting.call.speaker": "\u626c\u58f0\u5668",
          "setting.call.videocall": "\u89c6\u9891",
          "setting.call.videocall.HWvideocodec":
            "\u4f7f\u7528\u7cfb\u7edf\u89c6\u9891\u89e3\u7801\u5668",
          "setting.call.videocall.HWvideocodec.desc":
            "\u4f7f\u7528\u7cfb\u7edf\u5185\u90e8\u89c6\u9891\u7f16\u89e3\u7801\u5668\uff0c\u53ef\u4ee5\u9632\u6b62\u51fa\u73b0\u7535\u91cf\u6d88\u8017\u8fc7\u591a\u53ca\u7535\u6c60\u8fc7\u70ed\u7684\u73b0\u8c61\u3002\u7531\u4e8e\u90e8\u5206\u8bbe\u5907\u4e0d\u652f\u6301\u6b64\u529f\u80fd\uff0c\u5982\u679c\u60a8\u5728\u89c6\u9891\u901a\u8bdd\u4e2d\u9047\u5230\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u5173\u95ed\u6b64\u9009\u9879\u3002",
          "setting.call.videocall.HWvideocodec.popup.desc":
            "\u60a8\u7684\u66f4\u6539\u5c06\u4ece\u4e0b\u6b21\u901a\u8bdd\u5f00\u59cb\u5e94\u7528\u3002\u5982\u9700\u7acb\u5373\u5e94\u7528\u66f4\u6539\uff0c\u8bf7\u91cd\u65b0\u53d1\u8d77\u901a\u8bdd\u3002",
          "setting.call.videocall.dynamicspeaking":
            "\u59cb\u7ec8\u663e\u793a\u5f53\u524d\u53d1\u8a00\u6210\u5458",
          "setting.call.videocall.dynamicspeaking.desc":
            "\u7126\u70b9\u663e\u793a\u6a21\u5f0f\u4e0b\uff0c\u53d1\u8a00\u6210\u5458\u7684\u89c6\u9891\u5c06\u653e\u5927\u663e\u793a\u5728\u7126\u70b9\u753b\u9762\u4e2d\u3002\u5e73\u94fa\u663e\u793a\u6a21\u5f0f\u4e0b\uff0c\u53d1\u8a00\u6210\u5458\u7684\u89c6\u9891\u5c06\u663e\u793a\u5728\u7b2c\u4e00\u9875\u4e2d\u3002",
          "setting.call.videocall.gridviewmaxdisplay":
            "\u5e73\u94fa\u663e\u793a\u72b6\u6001\u4e0b\u6700\u591a\u53ef\u663e\u793a49\u4f4d\u6210\u5458\u3002",
          "setting.call.videocall.gridviewmaxdisplay.desc":
            "\u5e73\u94fa\u663e\u793a\u72b6\u6001\u4e0b\u6700\u591a\u53ef\u663e\u793a49\u4f4d\u6210\u5458\u7684\u89c6\u9891\u3002",
          "setting.call.videocall.gridviewmaxdisplay.tooltip":
            '<![CDATA[\u6b64\u8bbe\u5907\u6700\u591a\u53ef\u663e\u793a25\u4eba\u3002\u8bf7\u67e5\u770b<a href="https://help.line.me/line/%1/?contentId=20018989&lang=%2">\u5e2e\u52a9</a>\u9875\u9762\u4e86\u89e3\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002]]>',
          "setting.call.videocall.screenshare.alarmoff":
            "\u5168\u5c4f\u663e\u793a\u5171\u4eab\u5c4f\u5e55\u65f6\u5173\u95ed\u6d88\u606f\u901a\u77e5",
          "setting.call.videocall.showpreview":
            "\u52a0\u5165\u89c6\u9891\u901a\u8bdd\u524d\u663e\u793a\u9884\u89c8\u76f8\u673a",
          "setting.call.voicesettings": "\u8bed\u97f3",
          "setting.call.youtube.clipboard":
            "\u81ea\u52a8\u7c98\u8d34YouTube\u89c6\u9891\u94fe\u63a5",
          "setting.call.youtube.clipboard.checkbox":
            "\u5141\u8bb8\u4f7f\u7528\u526a\u8d34\u677f",
          "setting.call.youtube.clipboard.desc":
            "\u5171\u4eabYouTube\u89c6\u9891\u65f6\uff0c\u60a8\u6240\u590d\u5236\u7684YouTube\u89c6\u9891\u94fe\u63a5\u5c06\u81ea\u52a8\u7c98\u8d34\u5230\u6d4f\u89c8\u5668 \u3002",
          "setting.chats.deletedata.chatHisotry.btn.all":
            "\u6240\u6709\u8bbe\u5907",
          "setting.chats.deletedata.chatHisotry.btn.onlypc":
            "\u4ec5\u6b64\u8bbe\u5907",
          "setting.chats.deletedata.chatHisotry.desc":
            "\u8bf7\u9009\u62e9\u5220\u9664\u804a\u5929\u8bb0\u5f55\u7684\u8bbe\u5907\u8303\u56f4\u3002\u5220\u9664\u804a\u5929\u8bb0\u5f55\u540e\u5c06\u65e0\u6cd5\u6062\u590d\u3002",
          "setting.chats.deletedata.chatHisotry.title":
            "\u804a\u5929\u8bb0\u5f55 ",
          "setting.default.font.label": "\u9ed8\u8ba4\u5b57\u4f53",
          "setting.desc.removeLocalChat":
            "\u8fd9\u5c06\u6c38\u4e45\u5220\u9664\u60a8\u7684\u804a\u5929\u8bb0\u5f55\u3002",
          "setting.hiddenchat.empty":
            "\u60a8\u5c1a\u672a\u9690\u85cf\u4efb\u4f55\u804a\u5929\u3002",
          "setting.hiddenchat.title": "\u9690\u85cf\u804a\u5929",
          "setting.keep.alert.deleteAll":
            "\u8981\u5220\u9664Keep\u4e2d\u7684\u6240\u6709\u9879\u76ee\u5417\uff1fKeep\u5907\u5fd8\u5f55\u4e2d\u7684\u9879\u76ee\u5c06\u4e0d\u53d7\u5f71\u54cd\u3002",
          "setting.keep.btn.deleteAll": "\u5168\u90e8\u5220\u9664",
          "setting.keep.desc.dataonlyincludesitemsinkeep":
            "\u4ec5\u663e\u793aKeep\u7684\u4f7f\u7528\u7a7a\u95f4\uff0c\u4e0d\u5305\u62ecKeep\u5907\u5fd8\u5f55\u3002",
          "setting.keep.desc.photos": "\u7167\u7247",
          "setting.keep.desc.text": "\u6587\u672c",
          "setting.keep.desc.videos": "\u89c6\u9891",
          "setting.keyword.add.error.character":
            "<![CDATA[\u5173\u952e\u5b57\u4e0d\u5f97\u5305\u542b\u201c>\u201d\u3001\u201c<\u201d\u6216\u7a7a\u683c\u3002]]>",
          "setting.keyword.add.error.characterDup":
            "\u60a8\u5df2\u6dfb\u52a0\u6b64\u5173\u952e\u5b57\u3002",
          "setting.keyword.add.error.characterSize":
            "\u5173\u952e\u5b57\u957f\u5ea6\u81f3\u5c11\u97002\u4e2a\u5b57\u7b26\u3002",
          "setting.keyword.added": "\u5df2\u6dfb\u52a0\u7684\u5173\u952e\u5b57",
          "setting.keyword.btn.add": "\u6dfb\u52a0\u5173\u952e\u5b57",
          "setting.keyword.desc":
            "\u6536\u5230\u5305\u542b\u8fd9\u4e9b\u5173\u952e\u5b57\u7684\u672a\u8bfb\u6d88\u606f\u63d0\u9192\u3002",
          "setting.keyword.title": "\u5173\u952e\u5b57\u63d0\u9192",
          "setting.label.basic.alarmMode": "\u901a\u77e5\u65b9\u6cd5",
          "setting.label.basic.alarmMode.showAlarm": "\u663e\u793a\u5f39\u7a97",
          "setting.label.basic.alarmMode.soundAlarm":
            "\u94c3\u58f0\u63d0\u9192",
          "setting.label.basic.alarmRule":
            "\u6d88\u606f\u901a\u77e5\u89c4\u5219",
          "setting.label.basic.alarmRule.groupInviteAlarm":
            "\u6536\u5230\u7fa4\u9080\u8bf7\u6216\u65b0\u6210\u5458\u52a0\u5165\u7fa4\u65f6\u63d0\u9192",
          "setting.label.basic.alarmRule.mention":
            "\u6709\u4eba\u63d0\u53ca\u6211\u65f6\u63d0\u9192",
          "setting.label.basic.alarmRule.newChatAlarm":
            "\u6536\u5230\u65b0\u6d88\u606f\u65f6\u63d0\u9192",
          "setting.label.basic.alarmRule.noFullScreenAlarm":
            "\u5168\u5c4f\u663e\u793a\u65f6\u5173\u95ed\u6d88\u606f\u901a\u77e5",
          "setting.label.basic.alarmRule.noMobileAlarmWhileUsingPC":
            "\u4f7f\u7528\u7535\u8111\u7248\u65f6\u624b\u673a\u7aef\u4e0d\u63a5\u6536\u901a\u77e5\u63d0\u9192\n\uff08\u7535\u81113\u5206\u949f\u4ee5\u4e0a\u65e0\u64cd\u4f5c\u6216LINE\u88ab\u9501\u5b9a\u65f6\uff0c\u624b\u673a\u7aef\u624d\u4f1a\u5f00\u59cb\u63a5\u6536\u901a\u77e5\u63d0\u9192\u3002\uff09",
          "setting.label.basic.alarmRule.note":
            "\u65b0\u5efa\u8bb0\u4e8b\u672c\u65f6\u63d0\u9192",
          "setting.label.basic.alarmRule.videocal":
            "\u5728\u8bed\u97f3\u548c\u89c6\u9891\u901a\u8bdd\u671f\u95f4\u505c\u7528\u94c3\u58f0\u63d0\u9192\u3002",
          "setting.label.basic.alarmSound": "\u901a\u77e5\u63d0\u793a\u97f3",
          "setting.label.basic.alarmtype": "\u901a\u77e5\u98ce\u683c",
          "setting.label.basic.alarmtype.basic": "\u9ed8\u8ba4",
          "setting.label.basic.font": "\u8bbe\u7f6e\u5b57\u4f53",
          "setting.label.basic.font.desc":
            "\u5b57\u4f53\u8bbe\u5b9a\u4ec5\u9002\u7528\u4e8e\u804a\u5929\u5ba4\u3002",
          "setting.label.basic.font.extraLarge": "\u7279\u5927",
          "setting.label.basic.font.extraLarge.size": "16",
          "setting.label.basic.font.large": "\u5927",
          "setting.label.basic.font.large.size": "14",
          "setting.label.basic.font.name": "\u5b57\u4f53",
          "setting.label.basic.font.normal": "\u666e\u901a",
          "setting.label.basic.font.normal.size": "12",
          "setting.label.basic.font.normal.size.mac": "13",
          "setting.label.basic.font.size": "\u5927\u5c0f",
          "setting.label.basic.font.small": "\u5c0f",
          "setting.label.basic.font.small.size": "11",
          "setting.label.basic.send.key": "\u53d1\u9001\u65b9\u5f0f",
          "setting.label.private.profile.propertyName.id":
            "\uff08ID\u4fe1\u606f\u4e3a\u975e\u516c\u5f00\u5185\u5bb9\u3002\uff09",
          "setting.label.title": "\u8bbe\u7f6e",
          "setting.lockscreen": "\u9501\u5b9a\u6a21\u5f0f",
          "setting.lockscreen.time.15minutes": "15\u5206\u949f",
          "setting.lockscreen.time.1hour": "1\u5c0f\u65f6",
          "setting.lockscreen.time.30minutes": "30\u5206\u949f",
          "setting.lockscreen.time.3hours": "3\u5c0f\u65f6",
          "setting.lockscreen.time.3minutes": "3\u5206\u949f",
          "setting.lockscreen.time.5minutes": "5\u5206\u949f",
          "setting.lockscreen.turn.on":
            "\u7535\u8111\u957f\u65f6\u95f4\u65e0\u64cd\u4f5c\u65f6\u9501\u5b9aLINE",
          "setting.maintab.alarm": "\u65b0\u6d88\u606f\u901a\u77e5",
          "setting.maintab.basicSetting": "\u57fa\u672c\u8bbe\u7f6e",
          "setting.maintab.call": "\u901a\u8bdd",
          "setting.maintab.chat": "\u804a\u5929",
          "setting.maintab.contact": "\u7ba1\u7406\u597d\u53cb",
          "setting.maintab.privacy": "\u9690\u79c1\u8bbe\u5b9a",
          "setting.maintab.profile": "\u4e2a\u4eba\u8d44\u6599",
          "setting.maintab.talk": "\u804a\u5929\u30fb\u8bed\u97f3\u901a\u8bdd",
          "setting.messengerView.allinone.desc":
            "\u5728\u53f3\u4fa7\u663e\u793a\u3002",
          "setting.messengerView.allinone.label": "\u5355\u4e00\u7a97\u53e3",
          "setting.messengerView.apply.alert":
            "\u5982\u679c\u60a8\u6539\u53d8\u804a\u5929\u89c6\u56fe\u9009\u9879\uff0c\u5219\u6240\u6709\u804a\u5929\u7a97\u53e3\u90fd\u5c06\u88ab\u5173\u95ed\u3002\n \u8981\u7ee7\u7eed\u5417\uff1f\n",
          "setting.messengerView.label": "\u804a\u5929\u663e\u793a\u9009\u9879",
          "setting.messengerView.seperate.desc":
            "\u804a\u5929\u5185\u5bb9\u4f1a\u5728\u5355\u72ec\u7a97\u53e3\u4e2d\u663e\u793a\u3002",
          "setting.messengerView.seperate.label": "\u5355\u72ec\u7a97\u53e3",
          "setting.popup.private.emptyName":
            "\u8bf7\u81f3\u5c11\u8f93\u51651\u4e2a\u5b57\u3002",
          "setting.popup.private.tooLongName":
            "\u540d\u5b57\u5b57\u6570\u8bf7\u4e0d\u8981\u8d85\u8fc720\u4e2a\u5b57\u7b26\u3002",
          "setting.shorcut.chatfolder.move": "\u79fb\u52a8\u6587\u4ef6\u5939",
          "setting.shorcut.desc.chatfolder": "\u804a\u5929\u6587\u4ef6\u5939",
          "setting.shorcut.list.previous.chat":
            "\u79fb\u81f3\u4e0a\u4e00\u4e2a\u804a\u5929",
          "setting.shorcut.list.search": "\u641c\u7d22",
          "setting.shortcut.array.window": "\u804a\u5929\u6392\u5e8f",
          "setting.shortcut.callnlive.audio":
            "\u5f00\u542f/\u5173\u95ed\u9ea6\u514b\u98ce",
          "setting.shortcut.callnlive.video":
            "\u5f00\u542f/\u5173\u95ed\u6444\u50cf\u5934",
          "setting.shortcut.cancel.array.window":
            "\u53d6\u6d88\u804a\u5929\u6392\u5e8f",
          "setting.shortcut.capture.copy": "\u590d\u5236",
          "setting.shortcut.capture.draw.straight":
            "\u7ed8\u5236\u7ebf\u6761\u3001\u65b9\u5f62\u3001\u5706\u5f62",
          "setting.shortcut.capture.fix":
            "\u56fa\u5b9a\u533a\u57df\u622a\u56fe",
          "setting.shortcut.capture.redo": "\u91cd\u8bd5",
          "setting.shortcut.capture.save": "\u4fdd\u5b58",
          "setting.shortcut.capture.undo": "\u64a4\u9500",
          "setting.shortcut.chat.newline": "\u6539\u884c",
          "setting.shortcut.chat.open.keep": "\u6253\u5f00Keep",
          "setting.shortcut.chat.screen.capture": "\u5c4f\u5e55\u622a\u56fe",
          "setting.shortcut.close.window": "\u5173\u95ed\u7a97\u53e3",
          "setting.shortcut.lable": "\u5feb\u6377\u952e",
          "setting.shortcut.list.basic": "\u57fa\u672c\u8bbe\u7f6e",
          "setting.shortcut.list.callnlive": "\u901a\u8bdd",
          "setting.shortcut.list.chat": "\u804a\u5929",
          "setting.shortcut.list.friend.chat":
            "\u597d\u53cb\u3001\u804a\u5929\u5217\u8868",
          "setting.shortcut.list.viewer": "\u5a92\u4f53\u67e5\u770b\u5668",
          "setting.shortcut.markdown.bold": "\u7c97\u4f53",
          "setting.shortcut.markdown.codeblock": "\u5f3a\u8c03\u6bb5\u843d",
          "setting.shortcut.markdown.italic": "\u659c\u4f53",
          "setting.shortcut.markdown.strikethrough": "\u5220\u9664\u7ebf",
          "setting.shortcut.markdown.title": "\u6587\u672c\u683c\u5f0f",
          "setting.shortcut.markdown.wordblock": "\u5f3a\u8c03\u6587\u5b57",
          "setting.shortcut.min.window": "\u7a97\u53e3\u6700\u5c0f\u5316",
          "setting.shortcut.move.add.friend":
            "\u79fb\u81f3\u6dfb\u52a0\u597d\u53cb\u9009\u9879",
          "setting.shortcut.move.bottom":
            "\u79fb\u81f3\u804a\u5929\u5e95\u90e8",
          "setting.shortcut.move.chat.list":
            "\u79fb\u81f3\u804a\u5929\u9009\u9879",
          "setting.shortcut.move.friend.list":
            "\u79fb\u81f3\u597d\u53cb\u9009\u9879",
          "setting.shortcut.move.top": "\u79fb\u81f3\u804a\u5929\u9876\u90e8",
          "setting.shortcut.on.lock": "\u542f\u7528\u9501\u5b9a\u6a21\u5f0f",
          "setting.shortcut.open.keep": "\u6253\u5f00Keep",
          "setting.shortcut.open.note": "\u6253\u5f00\u8bb0\u4e8b\u672c",
          "setting.shortcut.open.sticker":
            "\u6253\u5f00\u8d34\u56fe\u7a97\u53e3",
          "setting.shortcut.open.tip":
            "\u6253\u5f00\u5feb\u6377\u952e\u5e2e\u52a9",
          "setting.shortcut.open.window":
            "\u5728\u65b0\u7a97\u53e3\u4e2d\u6253\u5f00",
          "setting.shortcut.photo.copy": "\u590d\u5236\u6587\u4ef6",
          "setting.shortcut.photo.save": "\u4fdd\u5b58\u6587\u4ef6",
          "setting.shortcut.screen.chapture": "\u5c4f\u5e55\u622a\u56fe",
          "setting.shortcut.search": "\u641c\u7d22",
          "setting.shortcut.send.file": "\u53d1\u9001\u6587\u4ef6",
          "setting.shortcut.timeline.comment": "\u8bc4\u8bba",
          "setting.shortcut.timeline.like": "\u8d5e",
          "setting.shortcut.timeline.like.pick": "\u9009\u62e9\u8868\u60c5",
          "setting.shortcut.tip":
            "\u4f7f\u7528\u5feb\u6377\u952e\u5e2e\u52a9\u60a8\u66f4\u65b9\u4fbf\u5730\u4f7f\u7528LINE\u3002",
          "setting.shortcut.video.jump":
            "\u5feb\u8fdb/\u5feb\u90005\u79d2\u89c6\u9891",
          "setting.shortcut.videongif.stop": "\u64ad\u653e/\u6682\u505c",
          "setting.shortcut.viewer.fullscreen": "\u5168\u5c4f\u663e\u793a",
          "setting.shortcut.volume.control":
            "\u8c03\u9ad8/\u8c03\u4f4e\u89c6\u9891\u97f3\u91cf",
          "setting.shortcut.zoominout": "\u653e\u5927/\u7f29\u5c0f\u56fe\u7247",
          "setting.tab.download.folder": "\u76ee\u6807\u6587\u4ef6\u5939",
          "setting.tab.file.trans": "\u53d1\u9001\u6587\u4ef6",
          "setting.tab.login": "\u767b\u5f55",
          "setting.tab.url.preview": "\u9884\u89c8\u7f51\u5740",
          "setting.tab.voip": "\u901a\u8bdd",
          "setting.talk.animation.gif": "\u52a8\u6001GIF",
          "setting.talk.animation.gif.play":
            "\u5728\u804a\u5929\u4e2d\u81ea\u52a8\u64ad\u653e\u52a8\u6001GIF",
          "setting.talk.backgroundSetting.apply":
            "\u6240\u9009\u80cc\u666f\u5c06\u5e94\u7528\u5230\u6240\u6709\u804a\u5929\u3002\n\u60a8\u8981\u7ee7\u7eed\u5417\uff1f",
          "setting.talk.backgroundSetting.apply.allChats":
            "\u5e94\u7528\u81f3\u6240\u6709\u804a\u5929",
          "setting.talk.backgroundSetting.detail":
            "\u9009\u62e9\u60a8\u60f3\u8981\u5e94\u7528\u5230\u804a\u5929\u7684\u58c1\u7eb8\uff08\u4e0d\u542bOpenChat\uff09\u3002",
          "setting.talk.backgroundSetting.selected": "\u9009\u62e9\u80cc\u666f",
          "setting.talk.backgroundSetting.title": "\u804a\u5929\u80cc\u666f",
          "setting.talk.heading.talk": "\u804a\u5929",
          "setting.talk.photo.resolution.detail":
            "\u65e0\u6cd5\u4ee5\u539f\u59cb\u5206\u8fa8\u7387\u53d1\u9001\u8d85\u8fc720MB\u7684\u7167\u7247\u3002",
          "setting.talk.photo.resolution.option.default": "\u9ed8\u8ba4",
          "setting.talk.photo.resolution.option.original": "\u539f\u59cb  ",
          "setting.talk.photo.resolution.option.standard": "\u6807\u51c6",
          "setting.talk.photo.resolution.title":
            "\u7167\u7247\u5206\u8fa8\u7387",
          "setting.talk.theme.check.seasonal": "\u98d8\u96ea\u6548\u679c",
          "setting.talk.theme.desc.seasonal": "\u4e3b\u9898",
          "setting.theme.desc.darkmode.limitation":
            "\u90e8\u5206\u9875\u9762\u6682\u4e0d\u652f\u6301\u6df1\u8272\u6a21\u5f0f\u3002",
          "setting.theme.mode.dark": "\u6df1\u8272\u6a21\u5f0f",
          "setting.theme.mode.light": "\u6d45\u8272\u6a21\u5f0f",
          "setting.theme.systemSetting": "\u4f7f\u7528\u7cfb\u7edf\u8bbe\u7f6e",
          "setting.theme.title": "\u663e\u793a\u6a21\u5f0f",
          "setting.url.preview.desc":
            "\u9488\u5bf9\u804a\u5929\u4e2d\u5206\u4eab\u7684\u94fe\u63a5\uff0c\u663e\u793a\u7f29\u7565\u56fe\u5e76\u9884\u89c8\u7f51\u7ad9\u4fe1\u606f\u3002",
          "setting.window.scaleRatio": "\u753b\u9762\u5c3a\u5bf8",
          "setting.window.scaleRatio.default":
            "\u6839\u636e\u5c4f\u5e55\u5c3a\u5bf8\u8c03\u6574\u4e3a\u9ed8\u8ba4\u503c",
          "settingAlarm.label.duration": "\u65f6\u95f4",
          "settingAlarm.label.lucid": "\u7070\u8272",
          "settingAlarm.label.opacity": "\u900f\u660e\u5ea6",
          "settingAlarm.label.opaque": "\u4e0d\u900f\u660e",
          "settingAlarm.label.setAlarmWindow":
            "\u8bbe\u5b9a\u63d0\u9192\u7a97\u53e3",
          "settingAlarm.label.toastContent": "\u5185\u5bb9",
          "settingAlarm.label.toastPreview":
            "\u901a\u77e5\u663e\u793a\u6d88\u606f\u8be6\u60c5",
          "settingAlarm.label.unitSecond": "\u79d2",
          "settingLogin.alert.autoLogin":
            "\u5df2\u542f\u7528\u81ea\u52a8\u767b\u5f55\u3002\u60a8\u53ef\u4ee5\u5728\u8bbe\u7f6e\u4e2d\u505c\u7528\u6b64\u529f\u80fd\u3002",
          "settingLogin.check.autoLogin": "\u81ea\u52a8\u767b\u5f55",
          "settingLogin.check.autoRunWin":
            "\u5f00\u542fWindows\u65f6\u81ea\u52a8\u8fd0\u884c",
          "settingPrivacy.btn.ublockBuddy": "\u89e3\u9664\u5c4f\u853d",
          "settingPrivacy.call.blur.desc":
            "\u62d6\u52a8\u6ed1\u5757\u4ee5\u8c03\u6574\u89c6\u9891\u901a\u8bdd\u65f6\u7684\u80cc\u666f\u6a21\u7cca\u6548\u679c\u3002",
          "settingPrivacy.cleardata.cache.desc":
            "\u8fd9\u5c06\u5220\u9664\u7f13\u5b58\u6570\u636e\uff0c\u4f46\u4e0d\u4f1a\u5220\u9664\u7167\u7247\u3001\u89c6\u9891\u3001\u8bed\u97f3\u4fe1\u606f\u6216\u6587\u4ef6\u3002",
          "settingPrivacy.cleardata.cache.error":
            "\u65e0\u6cd5\u5220\u9664\u90e8\u5206\u7f13\u5b58\u6570\u636e\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "settingPrivacy.cleardata.cache.popup":
            "\u8fd9\u5c06\u5220\u9664\u7f13\u5b58\u6570\u636e\u3002\u8981\u7ee7\u7eed\u5417\uff1f",
          "settingPrivacy.label.allowCallAlarm.desc":
            "\u5c06\u4e3a\u60a8\u7684\u79fb\u52a8LINE\u5e94\u7528\u542f\u52a8\u76f8\u540c\u8bbe\u5b9a\u3002",
          "settingPrivacy.label.allowCallAlarmPC": "\u5141\u8bb8\u901a\u8bdd",
          "settingPrivacy.label.blockAndDelete.desc":
            "\u786e\u5b9a\u8981\u4ece\u5c4f\u853d\u5217\u8868\u4e2d\u5220\u9664\u6b64\u5e10\u53f7\u5417\uff1f\u5220\u9664\u540e\uff0c\u8be5\u7528\u6237\u4ecd\u5c06\u4fdd\u6301\u5c4f\u853d\u72b6\u6001\u3002\u60a8\u53ef\u4ee5\u641c\u7d22\u8be5\u7528\u6237\u7684\u5e10\u53f7ID\u6216\u7535\u8bdd\u53f7\u7801\uff0c\u518d\u6b21\u5c06\u5176\u6dfb\u52a0\u4e3a\u597d\u53cb\u3002",
          "settingPrivacy.label.blockBuddyList": "\u5c4f\u853d\u5217\u8868",
          "settingPrivacy.label.blockBuddyListEmpty":
            "\u60a8\u5c1a\u672a\u5c4f\u853d\u4efb\u4f55\u5e10\u53f7\u3002",
          "settingPrivacy.label.blocksquarememberlist":
            "OpenChat\u6210\u5458\u5c4f\u853d\u5217\u8868",
          "settingPrivacy.label.blocksquarememberlistEmpty":
            "\u60a8\u5c1a\u672a\u5c4f\u853d\u4efb\u4f55\u5e7f\u573a\u6210\u5458\u3002",
          "settingPrivacy.label.buddySearchAllow":
            "\u5141\u8bb8\u5176\u4ed6\u7528\u6237\u6dfb\u52a0\u60a8\u81f3\u597d\u53cb",
          "settingPrivacy.label.clearRecords":
            "\u5220\u9664\u6240\u6709\u804a\u5929\u8bb0\u5f55",
          "settingPrivacy.label.cleardata": "\u5220\u9664\u6570\u636e",
          "settingPrivacy.label.cleardata.cache": "\u7f13\u5b58\u6570\u636e",
          "settingPrivacy.label.filterMessages":
            "\u5c4f\u853d\u975e\u597d\u53cb\u53d1\u9001\u7684\u4efb\u4f55\u6d88\u606f\u3002",
          "settingPrivacy.label.filterMessages.title":
            "\u5c4f\u853d\u975e\u597d\u53cb\u6d88\u606f",
          "settingPrivacy.label.hiddenBuddyList": "\u9690\u85cf\u5217\u8868",
          "settingPrivacy.label.hiddenBuddyListEmpty":
            "\u60a8\u5c1a\u672a\u9690\u85cf\u4efb\u4f55\u5e10\u53f7\u3002",
          "settingPrivacy.label.hideAndDelete.desc":
            "\u786e\u5b9a\u8981\u4ece\u9690\u85cf\u5217\u8868\u4e2d\u5220\u9664\u6b64\u5e10\u53f7\u5417\uff1f\u5220\u9664\u540e\uff0c\u8be5\u7528\u6237\u4ecd\u53ef\u4ee5\u5411\u60a8\u53d1\u9001\u6d88\u606f\u3002\u60a8\u53ef\u4ee5\u641c\u7d22\u8be5\u7528\u6237\u7684\u5e10\u53f7ID\u6216\u7535\u8bdd\u53f7\u7801\uff0c\u518d\u6b21\u5c06\u5176\u6dfb\u52a0\u4e3a\u597d\u53cb\u3002",
          "settingPrivacy.label.idSearchAllowYes": "\u5141\u8bb8\u641c\u7d22ID",
          "settingPrivacy.label.title": "\u9690\u79c1\u8bbe\u5b9a",
          "settingProfile.error.invalidData":
            "\u60a8\u65e0\u6cd5\u4f7f\u7528\u6b64\u540d\u5b57",
          "settingProfile.error.network":
            "\u7cfb\u7edf\u53d1\u751f\u9519\u8bef\uff0c\n\u6b64\u9879\u64cd\u4f5c\u6ca1\u6709\u5b8c\u6210\u3002\n\u8bf7\u91cd\u8bd5\u3002",
          "settingProfile.error.server":
            "\u7cfb\u7edf\u53d1\u751f\u9519\u8bef\uff0c\u6b64\u9879\u64cd\u4f5c\u6ca1\u6709\u5b8c\u6210\u3002\n\u8bf7\u91cd\u8bd5\u3002",
          "settingProfile.label.emailEmpty": "\u672a\u8bbe\u5b9a",
          "settingProfile.label.modifyprofile": "\u7f16\u8f91",
          "settingProfile.label.myInfo": "\u6211\u7684\u4fe1\u606f",
          "settingProfile.label.nickName": "\u540d\u5b57",
          "settingProfile.label.registerAcoount.input.password.error.mailAddress":
            "\u60a8\u5c1d\u8bd5\u7ed1\u5b9a\u7684\u90ae\u7bb1\u5730\u5740\u4e0e\u5f53\u524d\u5bc6\u7801\u8fc7\u4e8e\u76f8\u4f3c\u3002\n\u8bf7\u7ed1\u5b9a\u5176\u4ed6\u90ae\u7bb1\u5730\u5740\u3002",
          "settingProfile.label.registerAcoount.mailAddress":
            "\u7535\u5b50\u90ae\u4ef6",
          "settingProfile.label.statusEmpty": "\u672a\u8bbe\u5b9a",
          "settingProfile.label.statusMessage": "\u72b6\u6001\u6d88\u606f",
          "settingProfile.label.userID": "\u7528\u6237ID",
          "settingProfile.link.registerAcoount.mailAddress":
            "\u7ed1\u5b9a\u90ae\u7bb1\u5730\u5740 >",
          "settingProfile.statusMessage.edit":
            "\u8f93\u5165\u72b6\u6001\u6d88\u606f",
          "settingProfile.statusMessage.edit.failed":
            "\u65e0\u6cd5\u4fdd\u5b58\u60a8\u7684\u72b6\u6001\u6d88\u606f\u3002",
          "settings.basic.number.edit": "\u66f4\u6539\u7535\u8bdd\u53f7\u7801",
          "settings.delete.account": "\u5220\u9664\u5e10\u53f7",
          "settings.delete.account.btn": "\u5220\u9664\u5e10\u53f7",
          "settings.deleteAccount.confirm.desc":
            "\u5982\u679c\u6ce8\u9500LINE\u5e10\u53f7\uff0c\u597d\u53cb\u5217\u8868\u548c\u804a\u5929\u8bb0\u5f55\u90fd\u5c06\u88ab\u6c38\u4e45\u5220\u9664\u3002\u786e\u5b9a\u8981\u6ce8\u9500\u60a8\u7684LINE\u5e10\u53f7\u5417\uff1f",
          "settings.deleteAccount.confirm.title":
            "\u662f\u5426\u786e\u5b9a\u8981\u6ce8\u9500\u60a8\u7684LINE\u8d26\u53f7\uff1f",
          "settings.deleteAccount.success":
            "\u60a8\u7684\u5e10\u53f7\u5df2\u5220\u9664\uff0c\u56e0\u6b64\u60a8\u5df2\u9000\u51faLINE\u3002",
          "settings.label.tooltip": "\u8bbe\u7f6e",
          "settings.privacy.publicUserID":
            "\u5141\u8bb8\u4ed6\u4eba\u901a\u8fc7ID\u6dfb\u52a0",
          "settings.privacy.publicUserID.description":
            "\u901a\u8fc7\u641c\u7d22\u60a8\u7684ID\uff0c\u53ef\u4ee5\u5c06\u60a8\u6dfb\u52a0\u4e3a\u597d\u53cb\u3002",
          "settings.privacy.rejectStrangeMessages": "\u5c4f\u853d\u4fe1\u606f",
          "settings.privacy.rejectStrangeMessages.description":
            "\u5f00\u542f\u540e\u53ef\u5c4f\u853d\u597d\u53cb\u4ee5\u5916\u7684\u7528\u6237\u53d1\u6765\u7684\u4fe1\u606f\u3002",
          "settings.privacy.title": "\u9690\u79c1\u8bbe\u5b9a",
          "settings.profile.myInfo.birthday": "\u751f\u65e5",
          "settings.profile.myInfo.birthday.desc.plushometab":
            "\u5982\u679c\u9009\u62e9\u663e\u793a\u751f\u65e5\uff0c\u7cfb\u7edf\u5c06\u5728\u751f\u65e5\u5f53\u5929\u5411\u60a8\u53d1\u9001\u7279\u522b\u52a8\u753b\uff0c\u6b64\u52a8\u753b\u4ec5\u60a8\u53ef\u89c1\u3002\u60a8\u7684\u597d\u53cb\u4e5f\u53ef\u4ee5\u5728\u4e2a\u4eba\u8d44\u6599\u3001\u4e3b\u9875\u3001\u804a\u5929\u9009\u9879\u7b49\u5904\u770b\u5230\u60a8\u7684\u751f\u65e5\u3002",
          "settings.profile.myInfo.birthday.showMonthday":
            "\u663e\u793a\u6211\u7684\u751f\u65e5",
          "showAllContents.File": "\u6587\u4ef6",
          "showAllContents.Iink": "\u94fe\u63a5",
          "showAllContents.ImageVideo": "\u7167\u7247\u4e0e\u89c6\u9891",
          "showAllContents.file.noFile":
            "\u6b64\u804a\u5929\u4e2d\u672a\u5206\u4eab\u6587\u4ef6\u3002",
          "showAllContents.moveMessage": "\u5728\u804a\u5929\u4e2d\u67e5\u770b",
          "showAllContents.moveMessage.lastMessage":
            "\u67e5\u770b\u6700\u65b0\u4fe1\u606f",
          "showAllContents.uploadMember": "\u7531%1\u4e0a\u4f20 ",
          "squar.group.settings.managemembers.request.delete.alert.notall.done":
            "\u5df2\u5220\u9664\u7533\u8bf7\u3002\n\n\uff08\u5df2\u7531\u5176\u4ed6\u7ba1\u7406\u5458\u5904\u7406\u7684\u7533\u8bf7\u9664\u5916\u3002\uff09",
          "square.abuse.textinput":
            "\u60a8\u7684\u5e10\u53f7\u56e0\u5b58\u5728\u8fdd\u89c4\u884c\u4e3a\uff0c\u73b0\u5df2\u88ab\u9650\u5236\u4f7f\u7528\u3002",
          "square.access.changephoto":
            "\u66f4\u6539\u60a8\u5728\u6b64OpenChat\u4e2d\u7684\u5934\u50cf\u7167\u7247",
          "square.access.chat": "\u521b\u5efa\u65b0\u804a\u5929",
          "square.access.chat.image":
            "\u66f4\u6539\u6b64\u804a\u5929\u7684\u5934\u50cf\u7167\u7247",
          "square.access.chatroomtohome":
            "\u8f6c\u81f3\u5e7f\u573a\u4e3b\u9875",
          "square.access.cover.image":
            "\u66f4\u6539\u6b64OpenChat\u7684\u5c01\u9762\u7167\u7247",
          "square.access.create": "\u521b\u5efaOpenChat",
          "square.access.hide": "\u9690\u85cfOpenChat\u7684\u7b80\u4ecb",
          "square.access.invite": "\u9080\u8bf7\u597d\u53cb",
          "square.access.join": "\u52a0\u5165OpenChat",
          "square.access.joinrequest": "\u7533\u8bf7\u52a0\u5165OpenChat",
          "square.access.postoption":
            "\u67e5\u770b\u66f4\u591a\u8bb0\u4e8b\u672c\u9009\u9879",
          "square.access.profile.image":
            "\u66f4\u6539\u60a8\u5728\u6b64OpenChat\u4e2d\u7684\u5934\u50cf\u7167\u7247",
          "square.access.profile.nickname":
            "\u66f4\u6539\u60a8\u5728\u6b64OpenChat\u4e2d\u7684\u6635\u79f0",
          "square.access.qrcode": "OpenChat\u7684\u4e8c\u7ef4\u7801",
          "square.access.search": "\u641c\u7d22OpenChat",
          "square.access.show": "\u663e\u793aOpenChat\u7684\u7b80\u4ecb",
          "square.access.square": "OpenChat",
          "square.access.squareoption":
            "\u67e5\u770b\u66f4\u591aOpenChat\u9009\u9879",
          "square.access.timelinetosquare": "\u8f6c\u81f3OpenChat",
          "square.access.write": "\u521b\u5efa\u8bb0\u4e8b\u672c",
          "square.ageconfirmation.popupbutton.cancel": "\u53d6\u6d88",
          "square.ageconfirmation.popupbutton.yes":
            "\u662f\u7684\uff0c\u6211\u5df2\u5e74\u6ee118\u5468\u5c81",
          "square.ageconfirmation.popupdesc.atleast18tosetrestriction":
            "\u60a8\u5fc5\u987b\u5e74\u6ee118\u5468\u5c81\uff0c\u624d\u80fd\u4e3aOpenChat\u8bbe\u7f6e\u5e74\u9f84\u9650\u5236\u3002\u4f5c\u4e3a\u6b64OpenChat\u7684\u7ba1\u7406\u5458\uff0c\u8bf7\u786e\u4fdd\u6210\u5458\u95f4\u7684\u804a\u5929\u5185\u5bb9\u4ec5\u9650\u4e8e\u70df\u9152\u3002\u8bf7\u6ce8\u610f\uff0c\u8bbe\u7f6e\u540e\u6b64\u9009\u9879\u540e\u5c06\u65e0\u6cd5\u66f4\u6539\u3002",
          "square.ageconfirmation.popuptitle.ageconfirmationrequired":
            "\u9700\u8981\u8fdb\u884c\u5e74\u9f84\u786e\u8ba4",
          "square.ageconfirmationrequired.popupbutton.cancel": "\u53d6\u6d88",
          "square.ageconfirmationrequired.popupbutton.yes":
            "\u786e\u8ba4\u5e76\u52a0\u5165",
          "square.ageconfirmationrequired.popupdesc.onlyusersoverlegalageallowedtojoin":
            "\u6b64OpenChat\u4ec5\u9650\u5e74\u6ee118\u5c81\u7684\u7528\u6237\u52a0\u5165\u3002\u4e3a\u4e86\u786e\u4fdd\u5168\u4f53\u7528\u6237\u7684\u5b89\u5168\uff0c\u60a8\u5fc5\u987b\u9075\u5b88OpenChat\u670d\u52a1\u6761\u6b3e\u548c\u51c6\u5219\u3002",
          "square.ageconfirmationrequired.popuptitle.ageconfirmation":
            "\u4ec5\u9650\u5e74\u6ee118\u5c81\u7684\u7528\u6237\u52a0\u5165",
          "square.announcement.donotshowagain": "\u4e0d\u518d\u663e\u793a",
          "square.announcement.donotshowagain.mouseover":
            "\u4e0d\u518d\n\u663e\u793a",
          "square.announcement.error":
            "\u627e\u4e0d\u5230\u6b64\u901a\u77e5\u7684\u76f8\u5173\u4fe1\u606f\u3002",
          "square.announcement.message.annouce": "\u901a\u77e5",
          "square.announcement.minimize": "\u6700\u5c0f\u5316",
          "square.announcement.unannounce": "\u53d6\u6d88\u901a\u77e5",
          "square.answer.guide":
            "\u8bf7\u5148\u56de\u7b54\u4ee5\u4e0a\u95ee\u9898\u540e\uff0c\u624d\u53ef\u4ee5\u7533\u8bf7\u52a0\u5165\u6b64\u804a\u5929\u3002",
          "square.answer.send.done": "\u5df2\u53d1\u9001\u7533\u8bf7",
          "square.answer.title": "\u56de\u7b54\u95ee\u9898",
          "square.banreportuser.popupbutton.cancel": "\u53d6\u6d88",
          "square.banuser.popupdesc.banafterleaving":
            "\u6b64\u7528\u6237\u5df2\u9000\u51faOpenChat\u3002\u60a8\u53ef\u4ee5\u5f3a\u5236\u79fb\u51fa\u6b64\u7528\u6237\u4ee5\u963b\u6b62\u5176\u518d\u6b21\u52a0\u5165\uff0c\u6216\u8005\u4e3e\u62a5\u6b64\u5e10\u53f7\u3002",
          "square.chat.button.threadmessages":
            "<![CDATA[<b><font color='%1'>%2+</font></b>\u6761\u6d88\u606f]]>",
          "square.chat.button.threadmessages999":
            "<![CDATA[\u67e5\u770b<b><font color='%1'>%2+</font></b>\u6761\u6d88\u606f]]>",
          "square.chat.button.threadmessagesfew":
            "\u67e5\u770b\u5bf9\u8bdd\u4e2d\u7684\u6d88\u606f",
          "square.chat.button.threadmessagesmany": "%1+\u6761\u6d88\u606f",
          "square.chat.desc.sent": "\u5df2\u53d1\u9001",
          "square.chat.err.file.exceed.capacity":
            "\u6587\u4ef6\u5927\u5c0f\u8d85\u8fc7\u4e0a\u9650\uff0c\u65e0\u6cd5\u53d1\u9001\u3002",
          "square.chat.menu.aboutchatroom": "\u7ba1\u7406OpenChat",
          "square.chat.more.leaveroom": "\u9000\u51fa\u804a\u5929",
          "square.chat.placeholder.qna": "\u56de\u7b54\u95ee\u9898",
          "square.chat.reply.notification": "\u56de\u590d\uff1a%1",
          "square.chat.reply.notification2": "%1\u7684\u56de\u590d\uff1a%2",
          "square.chat.setting": "\u8be6\u7ec6\u8bbe\u7f6e",
          "square.chat.settings.bg.apply.square.image":
            "\u5c06OpenChat\u7167\u7247\u5e94\u7528\u4e8e\u80cc\u666f",
          "square.chat.settings.export.title": "%1\u7684\u5bf9\u8bdd",
          "square.chat.system.msg.invite.a.b":
            "%1\u9080\u8bf7%2\u52a0\u5165\u804a\u5929",
          "square.chat.system.msg.join.chat": "%1\u52a0\u5165\u804a\u5929",
          "square.chat.system.msg.leave.chat": "%1\u9000\u51fa\u804a\u5929",
          "square.chat.text.input.nickname":
            "\u4ee5\u201c%1\u201d\u52a0\u5165\u804a\u5929",
          "square.chatcontent.button.seemoreqna": "\u663e\u793a\u66f4\u591a",
          "square.chatcontent.tab.qna": "\u95ee\u7b54\u6d88\u606f",
          "square.chatlist.alert.deletedchat":
            "\u8be5\u804a\u5929\u4e0d\u5b58\u5728\u3002\u8bf7\u52a0\u5165\u5176\u4ed6\u804a\u5929\u3002",
          "square.chatlist.alert.max":
            "\u8be5\u804a\u5929\u7684\u6210\u5458\u4eba\u6570\u5df2\u8fbe\u5230\u4e0a\u9650\uff0c\u60a8\u65e0\u6cd5\u52a0\u5165\u8be5\u804a\u5929\u3002",
          "square.chatlist.join.guide":
            "\u9009\u62e9\u8981\u52a0\u5165\u7684\u804a\u5929\u3002\u60a8\u53ef\u4ee5\u9009\u62e9\u4efb\u4f55\u804a\u5929\u4e2d\u7684\u804a\u5929\u83dc\u5355\uff0c\u901a\u8fc7\u70b9\u51fb\u201c\u804a\u5929\u5217\u8868\u201d\u67e5\u770b\u6b64OpenChat\u4e2d\u7684\u6240\u6709\u804a\u5929\u3002",
          "square.chatlist.joined.title":
            "\u5df2\u52a0\u5165\u7684\u804a\u5929",
          "square.chatlist.joined.zero":
            "\u60a8\u5c1a\u672a\u52a0\u5165\u4efb\u4f55\u5e7f\u573a\u804a\u5929\u3002",
          "square.chatlist.max.member.desc":
            "\u8be5\u804a\u5929\u4eba\u6570\u5df2\u6ee1\u3002",
          "square.chatlist.public.join.alert":
            "\u6b64\u804a\u5929\u4e5f\u4f1a\u663e\u793a\u5728\u60a8\u7684\u201c\u804a\u5929\u201d\u753b\u9762\u4e2d\u3002\n",
          "square.chatlist.public.join.btn": "\u52a0\u5165 ",
          "square.chatlist.public.max.btn": "\u6ee1\u5458",
          "square.chatlist.public.no.msg":
            "\u65e0\u804a\u5929\u6d88\u606f\u3002",
          "square.chatlist.public.title":
            "\u53ef\u52a0\u5165\u7684\u804a\u5929",
          "square.chatlist.public.zero":
            "\u65e0\u53ef\u52a0\u5165\u7684\u804a\u5929\u3002",
          "square.chatlist.reply.alert":
            "\u6709\u4eba\u56de\u590d\u4e86\u60a8\u3002",
          "square.chatlist.square.button": "OpenChat",
          "square.chatlist.title": "\u804a\u5929\u5217\u8868",
          "square.chatmenu.button.qna": "\u95ee\u7b54\u6d88\u606f",
          "square.chatmenu.button.thread": "\u5bf9\u8bdd",
          "square.chatmenu.button.yourthreads": "\u60a8\u7684\u5bf9\u8bdd",
          "square.chatroom.alert.open.url":
            "\u8be5\u94fe\u63a5\u53ef\u80fd\u4e0d\u5b89\u5168\u3002\n\u60a8\u786e\u5b9a\u8981\u6253\u5f00\u5417\uff1f",
          "square.chatroom.block.inputarea.deletedchat":
            "\u804a\u5929\u5df2\u88ab\u5220\u9664",
          "square.chatroom.block.inputarea.deletedgroup":
            "OpenChat\u5df2\u5220\u9664",
          "square.chatroom.block.inputarea.kickoutgroup":
            "\u60a8\u5df2\u88ab\u79fb\u51faOpenChat",
          "square.chatroom.chatlilst.guide.des":
            "\u60a8\u53ef\u4ee5\u67e5\u770b\u5e76\u52a0\u5165\u6b64OpenChat\u3002",
          "square.chatroom.chatlist.title": "\u804a\u5929\u5217\u8868",
          "square.chatroom.confirm.desc.kickout":
            "\u6b64\u6210\u5458\u5c06\u88ab\u5f3a\u5236\u79fb\u51faOpenChat\uff0c\u786e\u5b9a\u8981\u7ee7\u7eed\u5417\uff1f",
          "square.chatroom.create.image": "\u9009\u62e9\u7167\u7247",
          "square.chatroom.default.announce.content":
            "\u6b22\u8fce\u52a0\u5165\u201c%1\u201d\uff01",
          "square.chatroom.deletefromall.alert":
            "\u6240\u9009\u4fe1\u606f\u5c06\u5728\u6240\u6709\u6210\u5458\u7684\u804a\u5929\u8bb0\u5f55\u4e2d\u5220\u9664\uff0c\u786e\u5b9a\u8981\u7ee7\u7eed\u5417\uff1f",
          "square.chatroom.desc.botadded":
            "%1\u5df2\u5c06%2\u6dfb\u52a0\u5230\u804a\u5929\u3002",
          "square.chatroom.desc.botremoved":
            "%1\u5df2\u5c06%2\u79fb\u51fa\u804a\u5929\u3002",
          "square.chatroom.error.alert.deletedchatroom":
            "\u8be5\u804a\u5929\u4e0d\u5b58\u5728\u3002\u8bf7\u52a0\u5165\u5176\u4ed6\u804a\u5929\u3002",
          "square.chatroom.input.deletedgroup":
            "\u5df2\u5220\u9664\u7684OpenChat",
          "square.chatroom.input.join.btn": "\u52a0\u5165\u201c%1\u201d",
          "square.chatroom.invite.layer.des":
            "\u9080\u8bf7\u597d\u53cb\u52a0\u5165OpenChat\uff01",
          "square.chatroom.layer.upperloading":
            "\u6b63\u5728\u52a0\u8f7d\u804a\u5929\u8bb0\u5f55...",
          "square.chatroom.longpress.deleteformall": "\u6e05\u9664",
          "square.chatroom.longpress.deletefromall.title":
            "\u4ece\u804a\u5929\u4e2d\u6e05\u9664",
          "square.chatroom.longpress.kickout": "\u79fb\u9664",
          "square.chatroom.longpress.squarepost": "\u8bb0\u4e8b\u672c",
          "square.chatroom.memberlist.guest": "\u8bbf\u5ba2",
          "square.chatroom.setting.deletechat": "\u5220\u9664\u804a\u5929",
          "square.chatroom.setting.deletechat.description":
            "\u5982\u679c\u5220\u9664\u804a\u5929\uff0c\u5c06\u4f7f\u6240\u6709\u6210\u5458\u90fd\u65e0\u6cd5\u4f7f\u7528\u6b64\u804a\u5929\u3002\u4ecd\u8981\u7ee7\u7eed\u5417\uff1f",
          "square.chatroom.setting.report": "\u4e3e\u62a5",
          "square.chatroom.settings.change.title": "\u804a\u5929\u540d\u79f0",
          "square.chatroom.settings.leave.no.message":
            "\u6084\u6084\u9000\u51fa",
          "square.chatroom.system.alert.notfriend":
            "\u60a8\u5c1a\u672a\u6dfb\u52a0\u201c%1\u201dOpenChat\u4e2d\u7684%2\u4e3a\u597d\u53cb\u3002\n\u4e0e\u5176\u4ea4\u6362\u4fe1\u606f\u65f6\u8bf7\u5f53\u5fc3\u3002",
          "square.chatroom.system.message.change.bg":
            "\u7ba1\u7406\u5458\u66f4\u6539\u4e86OpenChat\u7684\u7167\u7247\u3002",
          "square.chatroom.system.message.change.maxparticipants":
            "%1\u5df2\u5c06\u804a\u5929\u4eba\u6570\u4e0a\u9650\u8bbe\u4e3a%2\u3002",
          "square.chatroom.system.message.change.name":
            "%1\u5df2\u5c06\u804a\u5929\u540d\u79f0\u66f4\u6539\u4e3a\u201c%2\u201d\u3002",
          "square.chatroom.system.message.change.picture":
            "%1\u66f4\u6539\u4e86\u804a\u5929\u7684\u7167\u7247",
          "square.chatroom.system.message.kickout":
            "%1\u5df2\u88ab\u5f3a\u5236\u79fb\u51faOpenChat\u3002",
          "square.chatroom.system.msg.alert.private":
            "\u63d0\u9192\u60a8\uff01\u60a8\u5df2\u8fdb\u5165\u5e7f\u573a\u201c%1\u201d\u7684\u975e\u516c\u5f00\u804a\u5929\u3002",
          "square.chatroom.system.msg.alert.public":
            "\u63d0\u9192\u60a8\uff01\u60a8\u5df2\u8fdb\u5165\u201c%1\u201dOpenChat\u3002",
          "square.chatroom.system.msg.guide.loading":
            "\u6bcf\u6b21\u6eda\u52a8\u90fd\u4f1a\u52a0\u8f7d\u4e4b\u524d\u7684\u4fe1\u606f\u3002",
          "square.chatroom.system.msg.guide.report":
            "\u53f3\u952e\u70b9\u51fb\u4fe1\u606f\uff08\u5305\u62ec\u7167\u7247\u3001\u89c6\u9891\u548c\u94fe\u63a5\uff09\u5373\u53ef\u4e3e\u62a5\u3002",
          "square.chatroom.system.msg.tooltip.private":
            "\u60a8\u5c06\u8fdb\u5165\u5e7f\u573a\u201c%1\u201d\u7684\u975e\u516c\u5f00\u804a\u5929\u3002",
          "square.chatroom.system.msg.tooltip.public":
            "\u60a8\u5df2\u8fdb\u5165\u201c%1\u201dOpenChat\u3002",
          "square.chatroom.systemmsg.deletedchat":
            "\u8be5\u804a\u5929\u5df2\u88ab\u5220\u9664\u3002 ",
          "square.chatroom.systemmsg.deletedgroup":
            "\u8be5OpenChat\u5df2\u88ab\u5220\u9664\u3002",
          "square.chatroom.systemmsg.emptycommunity":
            "\u65e0\u6cd5\u4f7f\u7528\u7684OpenChat",
          "square.chatroom.systemmsg.emptyroom":
            "\u65e0\u6cd5\u4f7f\u7528\u7684\u804a\u5929",
          "square.chatroom.systemmsg.kickout":
            "\u60a8\u5df2\u88ab\u7ba1\u7406\u5458\u79fb\u51fa\u8be5\u804a\u5929\u3002 ",
          "square.chatroom.vmenu.chatlist": "\u804a\u5929\u5217\u8868",
          "square.chatroom.vmenu.groupchatlist":
            "\u5e7f\u573a\u4e3b\u753b\u9762",
          "square.chatroom.vmenu.leave.alert.outmsg.option":
            "\u79bb\u5f00\u804a\u5929\u5ba4\u65f6\n\u663e\u793a\u9000\u51fa\u4fe1\u606f",
          "square.coadmin.alert":
            "\u8981\u8bbe\u4e3a\u5171\u540c\u7ba1\u7406\u5458\u5417\uff1f",
          "square.common.desc.usercount100kth": "%1 \u0e41\u0e2a\u0e19",
          "square.common.desc.usercount1eok": "%1\u4ebf",
          "square.common.desc.usercount1k": "%1K",
          "square.common.desc.usercount1m": "%1M",
          "square.common.desc.usercount1man": "%1\u4e07",
          "square.common.share": "\u5206\u4eab",
          "square.community.home.alert.invited.chat":
            "\u8981\u63a5\u53d7\u9080\u8bf7\u5e76\u52a0\u5165\u804a\u5929\u5417\uff1f",
          "square.community.home.chat.button.start": "\u5f00\u59cb",
          "square.community.home.invite.button": "\u9080\u8bf7",
          "square.community.home.msg.chat.onlymember":
            "\u52a0\u5165\u5e7f\u573a\u540e\u5373\u53ef\u53c2\u4e0e\u804a\u5929\u3002\n\u73b0\u5728\u8981\u52a0\u5165\u5417\uff1f",
          "square.community.home.msg.onlymember":
            "\u60a8\u7684\u52a0\u5165\u7533\u8bf7\u83b7\u6279\u540e\uff0c\n\u5373\u53ef\u52a0\u5165\u5e7f\u573a\u3002",
          "square.content.home.shared":
            "\u5df2\u5206\u4eab\u8bb0\u4e8b\u672c\u3002",
          "square.cover.chat.btn": "\u804a\u5929",
          "square.cover.investmentscams":
            "\u4f7f\u7528LINE\u65f6\u8c28\u9632\u6b3a\u8bc8\u3002",
          "square.cover.post.btn": "\u8bb0\u4e8b\u672c",
          "square.create.btn": "",
          "square.create.category": "\u5206\u7c7b ",
          "square.create.category.desc":
            "\u9009\u62e9\u5206\u7c7b\u5c06\u4f7fOpenChat\u6709\u673a\u4f1a\u663e\u793a\u5728\u63a8\u8350\u5217\u8868\u4e2d\u3002",
          "square.create.default.category": "\u65e0",
          "square.create.description": "\u4ecb\u7ecd",
          "square.create.description.desc": "\u8f93\u5165OpenChat\u7b80\u4ecb",
          "square.create.description.input": "\u4ecb\u7ecd",
          "square.create.description2":
            "\u4f7f\u7528\u201c#\u6807\u7b7e\u201d\u8f93\u5165\u5173\u952e\u8bcd",
          "square.create.error.no.name":
            "\u8bf7\u8f93\u5165OpenChat\u540d\u79f0\u3002",
          "square.create.error.popup.input.description.info":
            "\u8bf7\u8f93\u5165OpenChat\u7b80\u4ecb",
          "square.create.error.popup.input.info":
            "\u8bf7\u8f93\u5165\u6240\u6709\u9700\u8981\u7684\u4fe1\u606f\u3002",
          "square.create.groupname": "OpenChat\u540d\u79f0",
          "square.create.image": "\u9009\u62e9\u7167\u7247",
          "square.create.over.text.num.alert":
            "\u5df2\u8fbe\u5230\u5b57\u6570\u4e0a\u9650\u3002 ",
          "square.create.search": "\u5141\u8bb8\u641c\u7d22",
          "square.create.search.desc":
            "\u5176\u4ed6\u4eba\u53ef\u6839\u636e\u540d\u79f0\u6216\u7b80\u4ecb\u641c\u7d22\u6b64OpenChat\u3002",
          "square.create.setting.desc":
            "\u5176\u4ed6\u4eba\u53ef\u4ee5\u641c\u7d22\u5230\u60a8\u7684OpenChat\u3002",
          "square.create.sgroup.approval.desc":
            "\u9700\u8981\u7ba1\u7406\u5458\u6279\u51c6\u624d\u80fd\u52a0\u5165\u8be5OpenChat\u3002",
          "square.create.sgroup.closedtype": "\u975e\u516c\u5f00",
          "square.create.sgroup.opentype": "\u516c\u5f00",
          "square.create.subchat.guide.des":
            "OpenChat\u7684\u9690\u79c1\u8bbe\u7f6e\u548c\u7ba1\u7406\u5458\u6743\u9650\u5c06\u5e94\u7528\u81f3\u5176\u4e2d\u6240\u6709\u7684\u804a\u5929\u3002",
          "square.create.subchat.title": "\u521b\u5efa\u804a\u5929",
          "square.create.title": "\u521b\u5efaOpenChat",
          "square.create.welcome": "\u6b22\u8fce\u6d88\u606f",
          "square.createchat.error.no.auth.public":
            "\u7ba1\u7406\u5458\u5df2\u9650\u5236\u6743\u9650\uff0c\u56e0\u6b64\u65e0\u6cd5\u521b\u5efa\u804a\u5929\u3002",
          "square.createchat.inputtitle":
            "\u8f93\u5165\u804a\u5929\u540d\u79f0",
          "square.createchat.title": "\u521b\u5efa\u804a\u5929",
          "square.createchat.type.maximum.option":
            "\u6700\u591a\u6210\u5458\u4eba\u6570",
          "square.createchat.type.maximum.option.desc":
            "\u8bbe\u7f6e\u53ef\u52a0\u5165\u804a\u5929\u7684\u6700\u591a\u6210\u5458\u4eba\u6570\u3002",
          "square.createchat.type.private": "\u975e\u516c\u5f00\u804a\u5929 ",
          "square.createchat.type.private.desc":
            "\u53ea\u6709\u53d7\u9080\u7684\u6210\u5458\u624d\u80fd\u52a0\u5165\u8be5\u804a\u5929\u3002",
          "square.createchat.type.public": "\u516c\u5f00\u804a\u5929",
          "square.createchat.type.public.desc":
            "\u4efb\u4f55\u6210\u5458\u90fd\u80fd\u52a0\u5165\u8be5\u804a\u5929\u3002",
          "square.createchat.type.public.option":
            "\u5411\u6240\u6709\u6210\u5458\u5f00\u653e",
          "square.createopenchat.button.setagerestriction":
            "\u8bbe\u7f6e\u5e74\u9f84\u9650\u5236",
          "square.createopenchat.desc.onlyusersoverlegalageallowed":
            "\u4ec5\u5141\u8bb8\u5e74\u6ee118\u5468\u5c81\u7684\u7528\u6237\u52a0\u5165\u6b64OpenChat\u3002",
          "square.createopenchat.desc.search":
            "\u7528\u6237\u53ef\u4ee5\u9884\u89c8\u5e76\u641c\u7d22\u6b64OpenChat\u4e2d\u7684\u90e8\u5206\u6d88\u606f\u3002\u60a8\u53ef\u4ee5\u5728OpenChat\u521b\u5efa\u5b8c\u6210\u540e\u524d\u5f80\u8bbe\u7f6e\u9875\u9762\u66f4\u6539\u6b64\u8bbe\u7f6e\u3002",
          "square.createopenchat.placeholder.enterdescription":
            "\u8f93\u5165\u7b80\u4ecb",
          "square.createsubchat.toggle.notifyinopenchat":
            "\u65b0\u5efa\u804a\u5929\u5ba4\u65f6\u5411OpenChat\u53d1\u9001\u63d0\u9192",
          "square.default.name.title": "OpenChat\u540d\u79f0",
          "square.error.cannot.forward.contact":
            "\u65e0\u6cd5\u5728OpenChat\u4e2d\u53d1\u9001\u8054\u7cfb\u4eba\u4fe1\u606f\u3002",
          "square.error.fail.upload.profile.image":
            "\u65e0\u6cd5\u7f16\u8f91\u60a8\u7684\u5934\u50cf\u3002 ",
          "square.error.not.normal":
            "\u53d1\u751f\u672a\u77e5\u9519\u8bef\uff0c\n\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002",
          "square.error.noti.kickout":
            "\u60a8\u5df2\u88ab\u5f3a\u5236\u79fb\u51faOpenChat\u3002",
          "square.error.popup.cannot.invite":
            "\u5e7f\u573a\u7684\u7ba1\u7406\u5458\u5df2\u505c\u7528\u6b64\u529f\u80fd\u3002",
          "square.error.popup.cannot.join":
            "\u6682\u65f6\u65e0\u6cd5\u52a0\u5165\u6b64OpenChat\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "square.error.popup.deletedgroup":
            "\u6b64OpenChat\u5df2\u4e0d\u5b58\u5728\u3002",
          "square.error.popup.network":
            "\u65e0\u6cd5\u8fde\u63a5\u3002\n\u8bf7\u68c0\u67e5\u8fde\u63a5\u72b6\u6001\u540e\u91cd\u8bd5\u3002",
          "square.error.popup.noauth":
            "\u60a8\u6ca1\u6709\u6743\u9650\u8bbf\u95ee\u6b64\u90e8\u5206\u7684\u5185\u5bb9\u3002\n\u60a8\u5c06\u79fb\u81f3\u201cOpenChat\u8bbe\u7f6e\u201d\u3002",
          "square.error.popup.noauth.alert":
            "\u60a8\u6ca1\u6709\u6743\u9650\u8bbf\u95ee\u6b64\u90e8\u5206\u7684\u5185\u5bb9\u3002 ",
          "square.error.popup.usingbyotheruser":
            "\u5176\u4ed6\u7528\u6237\u6b63\u5728\u66f4\u6539\u8be5\u8bbe\u7f6e\u3002\n\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002",
          "square.filtering.keyword.error.alert": "This word can't be used.",
          "square.fraudpopup.button.cancel": "\u53d6\u6d88",
          "square.fraudpopup.button.continue": "\u7ee7\u7eed",
          "square.fraudpopup.button.learnmore": "\u4e86\u89e3\u8be6\u60c5",
          "square.fraudpopup.desc.investmentscams":
            "\u6295\u8d44\u6b3a\u8bc8\u6848\u4ef6\uff08\u5305\u62ec\u793e\u4ea4\u5a92\u4f53\u865a\u5047\u5e7f\u544a\u3001\u5192\u5145\u540d\u4eba\uff09\u7684\u53d1\u751f\u5448\u4e0a\u5347\u8d8b\u52bf\u3002\u8bf7\u5728\u53d1\u9001\u4e0e\u63a5\u6536\u6d88\u606f\u65f6\u4fdd\u6301\u8b66\u60d5\uff0c\u5e76\u53ca\u65f6\u4e3e\u62a5\u4efb\u4f55\u53ef\u7591\u884c\u4e3a\u3002",
          "square.fraudpopup.title.investmentscams":
            "\u6295\u8d44\u6b3a\u8bc8\u65e5\u6e10\u9891\u53d1",
          "square.friendslist.join.requests":
            "\u7ba1\u7406\u52a0\u5165\u7533\u8bf7",
          "square.friendstab.newrequest": "OpenChat\u52a0\u5165\u7533\u8bf7",
          "square.friendstab.request.count": "\u52a0\u5165\u7533\u8bf7 ",
          "square.friendstab.request.counts.2.other":
            "%n\u4e2a\u52a0\u5165\u7533\u8bf7",
          "square.friendstab.request.counts.2.plurals.other":
            "%n\u4e2a\u52a0\u5165\u7533\u8bf7",
          "square.friendstab.request.counts.other":
            "%n\u4e2a\u52a0\u5165\u7533\u8bf7 ",
          "square.friendstab.request.counts.plurals.other":
            "%n\u4e2a\u52a0\u5165\u7533\u8bf7",
          "square.group.create.change.image": "\u66f4\u6539\u7167\u7247",
          "square.group.name": "OpenChat",
          "square.group.settings.basic": "OpenChat\u57fa\u672c\u8bbe\u7f6e",
          "square.group.settings.change.groupname": "OpenChat\u540d\u79f0",
          "square.group.settings.change.myname": "\u540d\u5b57",
          "square.group.settings.delete.alert":
            "\u5982\u679c\u60a8\u5220\u9664OpenChat\uff0c\u804a\u5929\u8bb0\u5f55\u7b49\u6240\u6709\u76f8\u5173\u4fe1\u606f\u5c06\u88ab\u5220\u9664\u3002\u786e\u5b9a\u8981\u5220\u9664\u8be5OpenChat\u5417\uff1f",
          "square.group.settings.editmember.kickout":
            "\u79fb\u9664\u6210\u5458",
          "square.group.settings.editmember.kickout.alert.done":
            "\u8be5\u6210\u5458\u5df2\u79fb\u9664",
          "square.group.settings.group.profile":
            "\u7f16\u8f91OpenChat\u8d44\u6599",
          "square.group.settings.groupset": "OpenChat\u8bbe\u7f6e",
          "square.group.settings.leave": "\u9000\u51faOpenChat",
          "square.group.settings.leave.alert":
            "\u5982\u679c\u60a8\u9000\u51faOpenChat\uff0c\u804a\u5929\u8bb0\u5f55\u7b49\u6240\u6709\u76f8\u5173\u4fe1\u606f\u5c06\u88ab\u5220\u9664\u3002\u786e\u5b9a\u8981\u9000\u51fa\u8be5OpenChat\u5417\uff1f",
          "square.group.settings.leave.error.alert.admin":
            "\u5728\u9000\u51faOpenChat\u4e4b\u524d\uff0c\n\u8bf7\u5148\u5c06\u7ba1\u7406\u5458\u6743\u9650\u79fb\u4ea4\u7ed9\u5176\u4ed6\u6210\u5458\u3002",
          "square.group.settings.manageauth.additional":
            "\u8bbe\u7f6e\u6743\u9650",
          "square.group.settings.manageauth.additionalchatfeatures":
            "\u5176\u4ed6\u804a\u5929\u529f\u80fd",
          "square.group.settings.manageauth.additionalchatfeatures.option.createpolls":
            "\u521b\u5efa\u6295\u7968",
          "square.group.settings.manageauth.additionalchatfeatures.option.deletepolls":
            "\u5220\u9664\u6295\u7968",
          "square.group.settings.manageauth.chatapp":
            "\u5176\u4ed6\u804a\u5929\u529f\u80fd",
          "square.group.settings.manageauth.setmaxparticipants":
            "\u66f4\u6539\u804a\u5929\u5ba4\u7684\u6700\u5927\u53c2\u4e0e\u4eba\u6570",
          "square.group.settings.managegroup": "\u7ba1\u7406OpenChat",
          "square.group.settings.managegroup.allowtojoin":
            "\u9700\u8981\u6279\u51c6\u624d\u80fd\u52a0\u5165",
          "square.group.settings.managegroup.allowtojoin.desc":
            "\u9700\u8981\u7ba1\u7406\u5458\u6279\u51c6\u624d\u80fd\u52a0\u5165\u8be5OpenChat\u3002",
          "square.group.settings.managegroup.allowtosearch":
            "\u5141\u8bb8OpenChat\u53ef\u88ab\u641c\u7d22",
          "square.group.settings.managegroup.allowtosearch.desc":
            "\u5176\u4ed6\u4eba\u53ef\u4ee5\u6309\u5173\u952e\u8bcd\u641c\u7d22\u6b64OpenChat\u3002",
          "square.group.settings.managegroup.autotag":
            "\u663e\u793a\u5efa\u8bae\u6807\u7b7e ",
          "square.group.settings.managegroup.autotag.decs":
            "\u6295\u7a3f\u65f6\u81ea\u52a8\u663e\u793a\u5efa\u8bae\u6807\u7b7e\u3002",
          "square.group.settings.managegroup.deletegroup":
            "\u5220\u9664OpenChat",
          "square.group.settings.managegroup.invite":
            "\u9080\u8bf7\u65b0\u6210\u5458",
          "square.group.settings.managegroup.invite.desc":
            "\u5982\u679c\u505c\u7528\u6b64\u529f\u80fd\uff0c\u5c06\u4e0d\u80fd\u9080\u8bf7\u5176\u4ed6\u6210\u5458\uff0c\u4e14\u4e4b\u524d\u5171\u4eab\u7684\u94fe\u63a5\u548c\u4e8c\u7ef4\u7801\u4e5f\u5c06\u5931\u6548\u3002",
          "square.group.settings.managegroup.updateurl":
            "\u66f4\u65b0\u9080\u8bf7\u94fe\u63a5",
          "square.group.settings.managegroup.updateurl.desc":
            "\u66f4\u65b0\u4e4b\u540e\uff0c\u4fbf\u4e0d\u80fd\u518d\u4f7f\u7528\u5f53\u524d\u7684\u9080\u8bf7\u94fe\u63a5\u3002\n\u786e\u5b9a\u8981\u7ee7\u7eed\u5417\uff1f",
          "square.group.settings.managemember": "\u7ba1\u7406\u6210\u5458",
          "square.group.settings.managemembers.alert.cannot.select":
            "\u6700\u591a\u53ef\u4ee5\u9009\u62e9%n\u4eba\u3002",
          "square.group.settings.managemembers.allowrejoin": "\u89e3\u7981",
          "square.group.settings.managemembers.blcoktojoin.alert":
            "\u662f\u5426\u5141\u8bb8\u8be5\u6210\u5458\u91cd\u65b0\u52a0\u5165OpenChat\uff1f",
          "square.group.settings.managemembers.blocktojoin":
            "\u7981\u6b62\u52a0\u5165\u7684\u6210\u5458\u540d\u5355",
          "square.group.settings.managemembers.blocktojoin.alert":
            "\u89e3\u7981\u6b64\u7528\u6237\u540e\u5c06\u5141\u8bb8\u5176\u91cd\u65b0\u52a0\u5165OpenChat\uff0c\u786e\u5b9a\u8981\u7ee7\u7eed\u5417\uff1f",
          "square.group.settings.managemembers.manageadmin":
            "\u7ba1\u7406\u5458\u6743\u9650\u8bbe\u7f6e",
          "square.group.settings.managemembers.manageadmin.added":
            "\u5df2\u6dfb\u52a0\u3002 ",
          "square.group.settings.managemembers.manageadmin.alert.deletecoadmin":
            "\u662f\u5426\u8981\u64a4\u9500\u8be5\u6210\u5458\u7684\u5171\u540c\u7ba1\u7406\u5458\u6743\u9650\uff1f",
          "square.group.settings.managemembers.manageadmin.cancelcoadmin":
            "\u79fb\u9664",
          "square.group.settings.managemembers.manageadmin.coadmin":
            "\u5171\u540c\u7ba1\u7406\u5458 ",
          "square.group.settings.managemembers.manageadmin.handoveradmin":
            "\u79fb\u4ea4\u7ba1\u7406\u5458\u6743\u9650",
          "square.group.settings.managemembers.manageadmin.handoveradmin.alert":
            "\u662f\u5426\u8981\u5c06\u7ba1\u7406\u5458\u6743\u9650\u79fb\u4ea4\u7ed9\u8be5\u6210\u5458\uff1f\n\u60a8\u5c06\u81ea\u52a8\u53d8\u4e3a\u5171\u540c\u7ba1\u7406\u5458\u3002 ",
          "square.group.settings.managemembers.manageadmin.handoveradmin.desc":
            "\u8d4b\u4e88\u5171\u540c\u7ba1\u7406\u5458\u7684\u6743\u9650\u7ed9\u5e7f\u573a\u6210\u5458\uff0c\u5373\u53ef\u5171\u540c\u7ba1\u7406\u5e7f\u573a\u3002\n\u60a8\u53ef\u4ee5\u5728\u201c\u7ba1\u7406\u6743\u9650\u201d\u83dc\u5355\u4e2d\u8bbe\u7f6e\u5171\u540c\u7ba1\u7406\u5458\u6240\u8d1f\u8d23\u7684\u4e8b\u9879\u3002 ",
          "square.group.settings.managemembers.manageadmin.handoveradmin.description":
            "\u5982\u679c\u60a8\u5c06\u81ea\u5df1\u7684\u7ba1\u7406\u5458\u6743\u9650\u79fb\u4ea4\u7ed9\u5176\u4ed6\u5171\u540c\u7ba1\u7406\u5458\uff0c\u60a8\u5c06\u81ea\u52a8\u53d8\u4e3a\u5171\u540c\u7ba1\u7406\u5458\u3002",
          "square.group.settings.managemembers.manageadmin.makecoadmin":
            "\u6dfb\u52a0\u4e3a\u5171\u540c\u7ba1\u7406\u5458",
          "square.group.settings.managemembers.manageadmin.makecoadmin.desc":
            "\u8d4b\u4e88\u5171\u540c\u7ba1\u7406\u5458\u7684\u6743\u9650\u7ed9OpenChat\u6210\u5458\uff0c\u5373\u53ef\u5171\u540c\u7ba1\u7406OpenChat\u3002\n\u60a8\u53ef\u4ee5\u5728\u201c\u7ba1\u7406\u6743\u9650\u201d\u83dc\u5355\u4e2d\u8bbe\u7f6e\u5171\u540c\u7ba1\u7406\u5458\u7684\u8d1f\u8d23\u4e8b\u9879\u3002",
          "square.group.settings.managemembers.manageadmin.makecoadmin.no.member":
            "\u6ca1\u6709\u53ef\u9009\u62e9\u7684\u6210\u5458\u3002",
          "square.group.settings.managemembers.manageadmin.no.coadmin":
            "\u60a8\u5c1a\u672a\u9009\u62e9\u4efb\u4f55\u5171\u540c\u7ba1\u7406\u5458\u3002",
          "square.group.settings.managemembers.manageadmin.select":
            "\u9009\u62e9",
          "square.group.settings.managemembers.manageauth":
            "\u7ba1\u7406\u6743\u9650 ",
          "square.group.settings.managemembers.manageauth.acceptrequest":
            "\u6279\u51c6\u52a0\u5165\u7533\u8bf7",
          "square.group.settings.managemembers.manageauth.admincoadmin":
            "\u7ba1\u7406\u5458\u548c\u5171\u540c\u7ba1\u7406\u5458",
          "square.group.settings.managemembers.manageauth.adminonly":
            "\u7ba1\u7406\u5458",
          "square.group.settings.managemembers.manageauth.all":
            "\u6240\u6709\u6210\u5458 ",
          "square.group.settings.managemembers.manageauth.createpost":
            "\u7f16\u5199\u5e16\u5b50 ",
          "square.group.settings.managemembers.manageauth.createpublicchat":
            "\u521b\u5efa\u804a\u5929",
          "square.group.settings.managemembers.manageauth.deletecontents":
            "\u5220\u9664\u804a\u5929\u548c\u5e16\u5b50",
          "square.group.settings.managemembers.manageauth.description":
            "\u8c03\u6574\u5176\u4ed6\u4eba\u53d8\u66f4OpenChat\u8bbe\u7f6e\u7684\u6743\u9650\u3002",
          "square.group.settings.managemembers.manageauth.invitemembers":
            "\u9080\u8bf7\u6210\u5458 ",
          "square.group.settings.managemembers.manageauth.kickout":
            "\u79fb\u9664\u6210\u5458",
          "square.group.settings.managemembers.managepost":
            "\u521b\u5efa\u8bb0\u4e8b\u672c",
          "square.group.settings.managemembers.request":
            "\u52a0\u5165\u7533\u8bf7",
          "square.group.settings.managemembers.request.accept": "\u6279\u51c6",
          "square.group.settings.managemembers.request.accept.alert.done":
            "\u5df2\u6279\u51c6\u7533\u8bf7\u3002",
          "square.group.settings.managemembers.request.accept.alert.notall.done":
            "\u7533\u8bf7\u5df2\u83b7\u6279\u51c6\u3002\u8bf7\u6ce8\u610f\uff0c\u90e8\u5206\u7533\u8bf7\u53ef\u80fd\u5df2\u7531\u7ba1\u7406\u5458\u6216\u5171\u540c\u7ba1\u7406\u5458\u5904\u7406\u5b8c\u6bd5\uff0c\u6216\u8005\u7531\u4e8e\u804a\u5929\u4eba\u6570\u8fbe\u5230\u4e0a\u9650\u800c\u88ab\u62d2\u7edd\u3002",
          "square.group.settings.managemembers.request.acceptall":
            "\u5168\u90e8\u6279\u51c6 ",
          "square.group.settings.managemembers.request.acceptall.alert":
            "\u786e\u5b9a\u8981\u6279\u51c6\u6240\u6709\u52a0\u5165\u7533\u8bf7\u5417\uff1f",
          "square.group.settings.managemembers.request.delete.alert":
            "\u786e\u5b9a\u8981\u5220\u9664\u6b64\u52a0\u5165\u7533\u8bf7\u5417\uff1f",
          "square.group.settings.managemembers.request.delete.alert.done":
            "\u7533\u8bf7\u5df2\u5220\u9664\u3002",
          "square.group.settings.managemembers.request.delete.alert.notall.done":
            "\u5df2\u5220\u9664\u7533\u8bf7\u3002\n\uff08\u5df2\u7531\u5176\u4ed6\u7ba1\u7406\u5458\u5904\u7406\u7684\u7533\u8bf7\u9664\u5916\u3002\uff09",
          "square.group.settings.managemembers.request.noti.tooltip":
            "\u9009\u62e9\u662f\u5426\u5728\u6709\u4eba\u7533\u8bf7\u52a0\u5165\u65f6\u63a5\u6536\u901a\u77e5\u3002 ",
          "square.group.settings.managemembers.request.select100":
            "\u9009\u62e9\u6700\u8fd1\u7684%1\u4f4d\u7533\u8bf7\u8005",
          "square.group.settings.managemembers.request.selectall":
            "\u5168\u9009",
          "square.group.settings.managemembers.request.zero":
            "\u65e0\u52a0\u5165\u7533\u8bf7\u3002",
          "square.group.settings.memberlist":
            "\u67e5\u770b\u6216\u9080\u8bf7\u6210\u5458",
          "square.group.settings.myprofile.title": "\u4e2a\u4eba\u8d44\u6599",
          "square.group.settings.nickname": "\u6635\u79f0",
          "square.group.settings.noti.post": "\u5e16\u5b50\u901a\u77e5",
          "square.group.settings.noti.post.dec":
            "\u60a8\u53ef\u4ee5\u63a5\u6536\u5e16\u5b50\u901a\u77e5\u3002",
          "square.group.settings.policy": "OpenChat\n\u670d\u52a1\u6761\u6b3e",
          "square.group.settings.profile.title": "",
          "square.group.settings.recieve.chat":
            "\u63a5\u6536\u804a\u5929\u9080\u8bf7",
          "square.group.settings.recieve.friendsrequest":
            "\u63a5\u6536\u597d\u53cb\u7533\u8bf7 ",
          "square.group.settings.report": "\u4e3e\u62a5OpenChat",
          "square.group.settings.reportpage.agreeandsend":
            "\u540c\u610f\u5e76\u53d1\u9001",
          "square.group.settings.reportpage.agreeandsend.thpdpa":
            "\u8ba4\u53ef\u5e76\u53d1\u9001",
          "square.group.settings.reportpage.desc":
            "\u9009\u62e9\u4e3e\u62a5\u8be5\u5185\u5bb9\u7684\u539f\u56e0\u3002",
          "square.group.settings.reportpage.impersonation.inquirypopup":
            "\u8bf7\u60a8\u6253\u5f00\u610f\u89c1\u53cd\u9988\u8868\u5e76\u586b\u5199\u5fc5\u8981\u4fe1\u606f\u3002\u60a8\u6240\u63d0\u4f9b\u7684\u8be6\u7ec6\u5185\u5bb9\u53ef\u534f\u52a9\u8c03\u67e5\u6b64\u5047\u5192\u6848\u4ef6\u3002",
          "square.group.settings.reportpage.impersonation.inquirypopup.decline":
            "\u8df3\u8fc7",
          "square.group.settings.reportpage.impersonation.inquirypopup.proceed":
            "\u7ee7\u7eed",
          "square.group.settings.reportpage.reason1":
            "\u6ee5\u53d1\u5e7f\u544a\u4fe1\u606f",
          "square.group.settings.reportpage.reason2":
            "\u53d1\u9001\u8272\u60c5\u4fe1\u606f",
          "square.group.settings.reportpage.reason3":
            "\u9a9a\u6270\u884c\u4e3a",
          "square.group.settings.reportpage.reason4": "\u5176\u4ed6",
          "square.group.settings.reportpage.reason5":
            "\u5185\u5bb9\u4e0e\u4e3b\u9898\u65e0\u5173",
          "square.group.settings.reportpage.reason6": "\u5047\u5192",
          "square.group.settings.reportpage.reason7": "\u6b3a\u8bc8",
          "square.group.settings.reportpage.report.btn": "\u4e3e\u62a5",
          "square.group.settings.reportpage.reportdone": "\u5df2\u4e3e\u62a5",
          "square.grouppopup.alert.alreadyjoin":
            "\u60a8\u5df2\u7ecf\u662f\u8be5OpenChat\u7684\u6210\u5458\u3002\u8bf7\u5c1d\u8bd5\u5173\u95ed\u9875\u9762\u540e\u91cd\u65b0\u8fdb\u5165\u3002",
          "square.grouppopup.alert.blocked":
            "\u60a8\u65e0\u6cd5\u52a0\u5165\u8be5OpenChat\uff0c\u8bf7\u4e0b\u6b21\u518d\u8bd5\u3002",
          "square.grouppopup.alert.join.ing":
            "\u6b63\u5728\u7b49\u5f85\u7ba1\u7406\u5458\u6279\u51c6\u3002\n\u7ba1\u7406\u5458\u6279\u51c6\u60a8\u7684\u7533\u8bf7\u540e\uff0c\u5373\u53ef\u52a0\u5165\u8be5OpenChat\u3002",
          "square.grouppopup.alert.requestdone":
            "\u60a8\u5df2\u7ecf\u7533\u8bf7\u52a0\u5165\u3002\u5f85\u7ba1\u7406\u5458\u6279\u51c6\u60a8\u7684\u7533\u8bf7\u540e\uff0c\u5373\u53ef\u52a0\u5165\u8be5OpenChat\u3002",
          "square.grouppopup.button.join.ing":
            "\u6b63\u5728\u7b49\u5f85\u6279\u51c6...",
          "square.grouppopup.chat.count.plurals.other": "%1\u4e2a\u804a\u5929",
          "square.grouppopup.invite.tooltip":
            "\u901a\u8fc7LINE\u3001\u5171\u4eab\u9080\u8bf7\u94fe\u63a5\u6216\u4e8c\u7ef4\u7801\uff0c\u5373\u53ef\u9080\u8bf7\u597d\u53cb\u3002",
          "square.grouppopup.invitefriend": "\u9080\u8bf7\u597d\u53cb",
          "square.grouppopup.member.count.plurals.other":
            "%1\u4e2a\u6210\u5458",
          "square.grouppopup.post.count.plurals.other": "%1\u4e2a\u5e16\u5b50",
          "square.grouppopup.qrcode": "\u53d1\u9001\u4e8c\u7ef4\u7801",
          "square.grouppopup.qrcode.desc":
            "\u53ef\u63d0\u4f9b\u4e8c\u7ef4\u7801\u7ed9\u4ed6\u4eba\uff0c\u6216\u901a\u8fc7\u5e16\u5b50\u5206\u4eab\u8be5\u4e8c\u7ef4\u7801\u3002",
          "square.grouppopup.qrcode.save": "\u4fdd\u5b58\u4e8c\u7ef4\u7801",
          "square.grouppopup.qrcode.saved":
            "\u5df2\u4fdd\u5b58\u4e8c\u7ef4\u7801\u3002 ",
          "square.grouppopup.sendrequest": "\u7533\u8bf7\u52a0\u5165",
          "square.grouppopup.url": "\u901a\u8fc7\u94fe\u63a5\u9080\u8bf7",
          "square.grouppopup.url.app":
            "\u5206\u4eab\u5230\u5176\u4ed6\u5e94\u7528",
          "square.grouppopup.url.line": "\u5206\u4eab\u5230LINE",
          "square.home.addfavorite": "\u6dfb\u52a0\u81f3\u6536\u85cf\u5939",
          "square.home.cancelfavorite": "\u53d6\u6d88\u6536\u85cf",
          "square.home.chat.section.invited":
            "\u6536\u5230\u9080\u8bf7\u7684\u804a\u5929",
          "square.home.favorite.tooltip":
            "\u70b9\u51fb\u6b64\u6309\u94ae\uff0c\u5373\u53ef\u5c06\u8be5OpenChat\u6dfb\u52a0\u5230\n\u597d\u53cb\u5217\u8868\u7684\u6536\u85cf\u5939\u5185\u3002",
          "square.home.invite.copy.link": "\u590d\u5236\u94fe\u63a5",
          "square.home.invite.save.qr": "\u4fdd\u5b58\u4e8c\u7ef4\u7801",
          "square.home.invite.share.link": "\u5206\u4eab\u94fe\u63a5",
          "square.home.invite.share.qr": "\u5206\u4eab\u4e8c\u7ef4\u7801",
          "square.home.menu.photo": "\u56fe\u7247",
          "square.home.menu.write": "\u7f16\u5199",
          "square.home.nickname": "%1",
          "square.home.setting": "\u8bbe\u7f6e",
          "square.home.tab.chat": "\u804a\u5929",
          "square.home.tab.post": "\u5e16\u5b50",
          "square.home.toast.addfavorite":
            "\u5df2\u6dfb\u52a0\u81f3\u6536\u85cf\u5939\u3002",
          "square.home.toast.cancelfavorite":
            "\u5df2\u4ece\u6536\u85cf\u5939\u4e2d\u79fb\u9664\u3002",
          "square.invite.complete.other":
            "\u60a8\u5df2\u5411%n\u4eba\u53d1\u51fa\u4e86\u9080\u8bf7\u3002",
          "square.invite.complete.plurals.other":
            "\u60a8\u5df2\u5411%n\u4e2a\u6210\u5458\u53d1\u51fa\u4e86\u9080\u8bf7\u3002",
          "square.invite.friend": "\u9080\u8bf7\u597d\u53cb",
          "square.invite.urlscheme.chatroom.chatname":
            "\u9080\u8bf7\u52a0\u5165\u201c%1\u201d",
          "square.invitemember.confirm.donotshowagain":
            "\u4e0d\u518d\u663e\u793a",
          "square.invitemember.confirm.invite":
            "\u53d7\u9080\u7528\u6237\u53ef\u4ee5\u67e5\u770b\u4ee5\u524d\u7684\u6d88\u606f\u3002",
          "square.invitemember.desc":
            "\u60a8\u53ea\u80fd\u9080\u8bf7\u8be5\u5e7f\u573a\u7684\u6210\u5458\u53c2\u4e0e\u6b64\u804a\u5929\u3002\u9080\u8bf7\u597d\u53cb\u52a0\u5165\u8be5\u5e7f\u573a\uff0c\u5373\u53ef\u4e0e\u4ed6\u4eec\u804a\u5929\u3002",
          "square.invitemember.desc.urlscheme.chatroom":
            "\u70b9\u51fb\u201c\u9080\u8bf7\u52a0\u5165\u804a\u5929\u201d\uff0c\u5373\u53ef\u9080\u8bf7\u5c1a\u672a\u52a0\u5165OpenChat\u7684\u7528\u6237\u3002",
          "square.invitemember.invitetogroup":
            "\u9080\u8bf7\u52a0\u5165OpenChat",
          "square.invitemember.invitetogroup.urlscheme.chatroom":
            "\u9080\u8bf7\u52a0\u5165\u804a\u5929",
          "square.invitemember.memberlist.title":
            "\u201c%1\u201d\u6210\u5458%n",
          "square.invitemember.title": "\u9009\u62e9\u53d7\u9080\u4eba",
          "square.invitetoopenchat.button.share": "\u5206\u4eab",
          "square.invitetoopenchat.desc.sharelinktoinvitemembers":
            "\u5206\u4eabOpenChat\u94fe\u63a5\u6765\u9080\u8bf7\u670b\u53cb\u52a0\u5165\u3002",
          "square.join.precaution":
            "\u6b22\u8fce\u6765\u5230\u201c%1\u201d\uff01\u8bf7\u6ce8\u610f\uff0c\u5982\u679c\u4fe1\u606f\u5185\u5bb9\u8fdd\u53cdOpenChat\u670d\u52a1\u653f\u7b56\uff0c\u7cfb\u7edf\u53ef\u80fd\u4f1a\u9650\u5236\u60a8\u4f7f\u7528\u672c\u670d\u52a1\u3002",
          "square.join.question.guide":
            "\u8f93\u51655\uff5e50\u4e2a\u5b57\u7b26",
          "square.joincode.error":
            "\u9a8c\u8bc1\u7801\u4e0d\u6b63\u786e\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "square.joincode.guide":
            "\u901a\u8fc7\u8f93\u5165\u7ba1\u7406\u5458\u8bbe\u7f6e\u7684\u9a8c\u8bc1\u7801\u6765\u52a0\u5165\u804a\u5929\u3002",
          "square.joincode.guide.description":
            "\u8bf7\u8bbe\u7f6e\u7528\u6237\u5728\u52a0\u5165\u6b64OpenChat\u65f6\u5fc5\u987b\u8f93\u5165\u7684\u53c2\u52a0\u7801\uff084\uff5e8\u4f4d\u5b57\u6bcd\u6570\u5b57\uff09\u3002",
          "square.joincode.input.guide": "\u8f93\u5165\u9a8c\u8bc1\u7801",
          "square.joincode.title": "\u8f93\u5165\u804a\u5929\u9a8c\u8bc1\u7801",
          "square.joinscreen.placeholder.enteranswerhere":
            "\u8f93\u5165\u56de\u7b54",
          "square.keyboardmenu.button.qna": "\u95ee\u7b54\u6d88\u606f",
          "square.kickout.alert.done":
            "\u6b64\u6210\u5458\u5df2\u88ab\u5f3a\u5236\u79fb\u51faOpenChat\u3002\u60a8\u53ef\u4ee5\u524d\u5f80OpenChat\u8bbe\u7f6e\u4e2d\u7684\u201c\u7ba1\u7406\u6210\u5458\u201d>\u201c\u7981\u6b62\u52a0\u5165\u7684\u6210\u5458\u540d\u5355\u201d\u5c06\u5176\u89e3\u7981\u3002",
          "square.kickout.blockoption":
            "\u7981\u6b62\u52a0\u5165\u8be5OpenChat",
          "square.kickout.error.alert.admin":
            "\u65e0\u6cd5\u5c06\u7ba1\u7406\u5458\u6216\u5171\u540c\u7ba1\u7406\u5458\u5f3a\u5236\u79fb\u51fa\u3002",
          "square.kickout.reason1":
            "\u6ee5\u53d1\u5e7f\u544a\u6216\u5783\u573e\u4fe1\u606f",
          "square.kickout.reason2":
            "\u6709\u5bb3\u8eab\u5fc3\u6216\u6deb\u79fd\u7528\u8bed",
          "square.kickout.reason3":
            "\u5176\u4ed6\u8fdd\u53cd\u89c4\u5219\u7684\u884c\u4e3a",
          "square.leave.last.person.alert": "",
          "square.leftuser.kickout.btn": "\u5f3a\u5236\u79fb\u51fa",
          "square.main.create.block.alert":
            "\u6d4b\u8bd5\u671f\u95f4\u65e0\u6cd5\u521b\u5efa\u5e7f\u573a\u3002 ",
          "square.main.create.guide":
            "\u521b\u5efa\u60a8\u81ea\u5df1\u7684OpenChat\uff0c\n\u7ed3\u4ea4\u65b0\u670b\u53cb\uff01",
          "square.main.mylist": "\u6211\u7684OpenChat",
          "square.main.mylist.sortbyname": "\u6309\u540d\u79f0",
          "square.main.mylist.sortbyupdate": "\u6700\u8fd1\u66f4\u65b0",
          "square.main.mylist.sortbyvisit": "\u6700\u8fd1\u8bbf\u95ee",
          "square.main.mylist.viewall": "\u663e\u793a\u5168\u90e8",
          "square.main.mylist.zero":
            "\u52a0\u5165OpenChat\u53bb\u8ddf\u8da3\u5473\u76f8\u6295\u7684\u65b0\u670b\u53cb\u804a\u5929\uff0c\u6216\u8005\u521b\u5efa\u60a8\u81ea\u5df1\u7684OpenChat\u5427\uff01",
          "square.main.search.block.alert":
            "\u5728\u6d4b\u8bd5\u671f\u95f4\u4e0d\u53ef\u7528\u641c\u7d22\u529f\u80fd\u3002 ",
          "square.main.search.default.msg":
            "OpenChat\u540d\u79f0\uff0c\u7b80\u4ecb",
          "square.managemembers.button.seewholeft":
            "\u67e5\u770b\u8fd1\u671f\u9000\u51fa\u7684\u7528\u6237",
          "square.managemembers.desc.seewholeft":
            "\u53ef\u67e5\u770b\u8fc7\u53bb24\u5c0f\u65f6\u5185\u9000\u51faOpenChat\u7684\u7528\u6237\u3002",
          "square.manageopenchat.desc.setjoincode":
            "\u8acb\u8a2d\u5b9a\u7528\u6236\u7533\u8acb\u52a0\u5165\u6642\u9808\u8f38\u5165\u7684\u5bc6\u78bc\u3002",
          "square.members": "\u6210\u5458",
          "square.members.addmembers": "\u9080\u8bf7\u6210\u5458",
          "square.membershipsystemmessages.button.userisbannedfromthechat":
            "\u6210\u5458\u88ab\u5f3a\u5236\u79fb\u51fa\u804a\u5929\u65f6",
          "square.membershipsystemmessages.button.userjoinsthechat":
            "\u6210\u5458\u52a0\u5165\u804a\u5929\u65f6",
          "square.membershipsystemmessages.button.userleavesthechat":
            "\u6210\u5458\u9000\u51fa\u804a\u5929\u65f6",
          "square.membershipsystemmessages.desc.managesystemmessages":
            "\u53ef\u4ee5\u8bbe\u7f6e\u662f\u5426\u5728OpenChat\u4e2d\u663e\u793a\u5f53\u6709\u6210\u5458\u52a0\u5165\u3001\u9000\u51fa\u6216\u88ab\u5f3a\u5236\u79fb\u51fa\u804a\u5929\u65f6\u7684\u7cfb\u7edf\u6d88\u606f\u3002",
          "square.menu.invite": "\u9080\u8bf7",
          "square.mythreads.button.seemessages.other":
            "<![CDATA[\u67e5\u770b<b><font color='%1'>%n</font></b>\u6761\u6d88\u606f]]>",
          "square.noti.admin":
            "\u60a8\u73b0\u5728\u5df2\u6210\u4e3a\u201c%1\u201dOpenChat\u7684\u7ba1\u7406\u5458\u3002",
          "square.noti.coadmin":
            "\u60a8\u73b0\u5728\u5df2\u6210\u4e3a\u201c%1\u201dOpenChat\u7684\u5171\u540c\u7ba1\u7406\u5458\u3002",
          "square.noti.delete.chat":
            "\u201c%1\u201d\u804a\u5929\u5df2\u88ab\u7ba1\u7406\u5458\u5220\u9664\u3002",
          "square.noti.deleted.coadmin":
            "\u60a8\u5df2\u4e0d\u662f\u201c%1\u201dOpenChat\u7684\u5171\u540c\u7ba1\u7406\u5458\u3002",
          "square.noti.deleted.gorup":
            "\u201c%1\u201dOpenChat\u5df2\u88ab\u5220\u9664\u3002",
          "square.noti.join.done":
            "\u60a8\u5df2\u52a0\u5165\u201c%1\u201dOpenChat\u3002",
          "square.noti.joinrequest":
            "%1\u7533\u8bf7\u52a0\u5165\u201c%2\u201dOpenChat\u3002",
          "square.noti.kickout":
            "\u60a8\u5df2\u88ab\u5f3a\u5236\u79fb\u51fa\u201c%1\u201dOpenChat\u3002",
          "square.notification.desc.userjoinedopenchat":
            "\u6709\u65b0\u6210\u5458\u52a0\u5165OpenChat\u201c%1\u201d\u3002",
          "square.notification.setting":
            "OpenChat\u5e16\u5b50\u901a\u77e5\n\u8bf7\u5148\u5728\u79fb\u52a8\u8bbe\u5907\u4e0a\u5f00\u542fOpenChat\u5e16\u5b50\u901a\u77e5\u540e\uff0c\u624d\u80fd\u5728\u7535\u8111\u7248\u4e0a\u6536\u5230\u6b64\u7c7b\u901a\u77e5\u3002",
          "square.openchat.desc.adminaddedbottochat":
            "[0]\u5df2\u5c06[1]\u6dfb\u52a0\u5230\u804a\u5929\u3002",
          "square.openchat.desc.adminremovedbotfromchat":
            "[0]\u5df2\u5c06[1]\u79fb\u51fa\u804a\u5929\u3002",
          "square.openchat.desc.messageremovedforsharinginappropriatecontent":
            "%1\u7684\u6d88\u606f\u56e0\u6d89\u5acc\u8fdd\u53cdOpenChat\u670d\u52a1\u653f\u7b56\u800c\u88ab\u5220\u9664\u3002",
          "square.openchat.desc.userbannedbysomeoneelse":
            "%2\u5df2\u88ab%1\u5f3a\u5236\u79fb\u51faOpenChat\u3002",
          "square.openchat.popup.dontshow":
            "\u4ee5\u540e\u4e0d\u5728\u6b64OpenChat\u4e2d\u663e\u793a\u6b64\u6d88\u606f",
          "square.openchat.popupbutton.close": "\u5173\u95ed",
          "square.openchat.popupbutton.deleteforall":
            "\u4ece\u5168\u5458\u7684\u804a\u5929\u8bb0\u5f55\u4e2d\u5220\u9664",
          "square.openchat.popupbutton.deleteforyou":
            "\u4ece\u81ea\u5df1\u7684\u804a\u5929\u8bb0\u5f55\u4e2d\u5220\u9664",
          "square.openchat.popupbutton.ok": "\u786e\u5b9a",
          "square.openchat.popupbutton.seemore": "\u4e86\u89e3\u8be6\u60c5",
          "square.openchat.popupdesc.deletemessagesfor":
            "\u8bf7\u9009\u62e9\u5220\u9664\u4fe1\u606f\u7684\u8303\u56f4\u3002\n\u60a8\u53ef\u4ee5\u62d6\u52a8\u9f20\u6807\u5149\u6807\uff0c\u6700\u591a\u9009\u62e950\u6761\u8981\u5220\u9664\u7684\u4fe1\u606f\u3002",
          "square.openchat.popupdesc.unreadmessagecountmarkedwithnicon":
            '\u8be5\u804a\u5929\u7684\u65b0\u6d88\u606f\u6570\u5c06\u4ee5"N"\u56fe\u6807\u4ee3\u66ff\u663e\u793a\u3002',
          "square.openchat.popupdesc.unsendmessage":
            "\u6b64\u4fe1\u606f\u53ef\u80fd\u65e0\u6cd5\u4ece\u90e8\u5206\u6210\u5458\u7684\u804a\u5929\u4e2d\u79fb\u9664\uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u5bf9\u65b9\u7528\u6237\u6240\u4f7f\u7528\u7684LINE\u7248\u672c\u3002\u8981\u64a4\u56de\u6d88\u606f\u5417\uff1f",
          "square.openchat.popuptitle.deletemessages":
            "\u5220\u9664\u4fe1\u606f",
          "square.openchatannouncements.title.announcements": "\u901a\u77e5",
          "square.openchatcharacterprofiles.button.cancel": "\u53d6\u6d88",
          "square.openchatcharacterprofiles.button.save": "\u4fdd\u5b58",
          "square.openchatcharacterprofiles.title.selectcharacter":
            "\u9009\u62e9\u89d2\u8272\u56fe\u7247",
          "square.openchatentry.button.confirm": "\u786e\u5b9a",
          "square.openchatentry.desc.dontsendrudemessages":
            "<![CDATA[\u8a00\u884c\u4e3e\u6b62\u8981<font color=\\'#07B53B\\'>\u6587\u660e</font>\uff0c\u8bf7\u52ff\u53d1\u9001<font color=\\'#07B53B\\'>\u5192\u72af\u4ed6\u4eba</font>\u7684\u4fe1\u606f\u3002]]>",
          "square.openchatentry.desc.followopenchatrules":
            "<![CDATA[<font color=\\'#07B53B\\'>\u8fdd\u53cd\u89c4\u5b9a\u8005</font>\u5c06\u4f1a\u88ab\u9650\u5236OpenChat\u7684\u4f7f\u7528\u6743\u9650\u3002]]>",
          "square.openchatentry.desc.treatmemberswithrespect":
            "<![CDATA[\u4e3a\u4fdd\u8bc1OpenChat\u6240\u6709\u7528\u6237\u80fd\u5b89\u5fc3\u4f7f\u7528\uff0c\u8bf7<font color=\\'#07B53B\\'>\u5b88\u89c4\u5219\u8bb2\u793c\u8c8c</font>\u3002]]>",
          "square.openchatentry.header.dontsendrudemessages":
            "2. \u8bb2\u6587\u660e",
          "square.openchatentry.header.followopenchatrules":
            "3. \u5b88\u89c4\u5219",
          "square.openchatentry.header.treatmemberswithrespect":
            "1. \u6709\u793c\u8c8c",
          "square.openchatentry.title.openchatuserules":
            "OpenChat\u6ce8\u610f\u4e8b\u9879",
          "square.openchatinvite.desc.userinvitedtojoinchat":
            "\u60a8\u5df2\u88ab\u9080\u8bf7\u52a0\u5165\u201c%1\u201d\u3002",
          "square.openchatinvite.desc.userinvitedtojoinsquare":
            "\u60a8\u5df2\u88ab\u9080\u8bf7\u52a0\u5165\u201c%1\u201d\u3002",
          "square.openchatlist.desc.viewchatandaddtofavorites": "",
          "square.openchatlist.header.yourchats": "\u60a8\u7684\u804a\u5929%1",
          "square.openchatliveinvite.popupdesc.usefeatureonmobileapp":
            "\u6b64\u529f\u80fd\u4ec5\u5728\u667a\u80fd\u624b\u673a\u7248LINE\u4e0a\u53ef\u7528",
          "square.openchatmember.button.default": "\u9ed8\u8ba4",
          "square.openchatmember.button.oldjoin": "\u7531\u65e7\u5230\u65b0",
          "square.openchatmember.button.recentjoin": "\u7531\u65b0\u5230\u65e7",
          "square.openchatmember.desc.days.other": "%d\u5929\u524d",
          "square.openchatmember.desc.hours.other": "%d\u5c0f\u65f6\u524d",
          "square.openchatmember.desc.justnow": "\u521a\u521a",
          "square.openchatmember.desc.lastvisited": "\u6700\u8fd1\u8bbf\u95ee",
          "square.openchatmember.desc.minutes.other": "%d\u5206\u949f\u524d",
          "square.openchatmembers.desc.hundredthousandmembersth": "%1",
          "square.openchatmembers.desc.membersen": "%1",
          "square.openchatmembers.desc.memberskoja": "%1",
          "square.openchatmembers.desc.membersth": "%1",
          "square.openchatmembers.desc.tenthousandmemberskoja": "%1\u4e07",
          "square.openchatmembers.desc.tenthousandmembersth": "%1",
          "square.openchatmembers.desc.thousandmembersen": "%1",
          "square.openchatmembers.desc.thousandmembersth": "%1",
          "square.openchatmenu.button.hidemessagecount":
            '\u9690\u85cf\u672a\u8bfb\u6d88\u606f\u6570\nOpenChat\u7684\u65b0\u6d88\u606f\u6570\u5c06\u4ee5"N"\u56fe\u6807\u4ee3\u66ff\u663e\u793a\u3002',
          "square.openchatmenu.button.showmessagecount":
            "\u663e\u793a\u672a\u8bfb\u6d88\u606f\u6570",
          "square.openchatmenu.desc.joindate":
            "yyyy\u5e74m\u6708d\u65e5\u52a0\u5165",
          "square.openchatmenu.desc.messagereplies":
            "\u5f53\u7528\u6237\u56de\u590d\u60a8\u7684\u6d88\u606f\u65f6\u63a5\u6536\u901a\u77e5\u3002",
          "square.openchatmenu.desc.onlyadmin":
            "\u53ea\u6709\u7ba1\u7406\u5458\u548c\u5171\u540c\u7ba1\u7406\u5458\u624d\u80fd\u67e5\u770b\u6210\u5458\u7684\u52a0\u5165\u65f6\u95f4\u4ee5\u53ca\u6700\u540e\u4e00\u6b21\u8bbf\u95eeOpenChat\u7684\u65f6\u95f4\u3002",
          "square.openchatmenu.desc.visitdays.other":
            "%1\u5929\u524d\u8bbf\u95ee",
          "square.openchatmenu.desc.visitmonths.other":
            "%1\u6708\u524d\u8bbf\u95ee",
          "square.openchatmenu.desc.visittoday": "\u4eca\u5929\u8bbf\u95ee",
          "square.openchatmenu.desc.visityester": "\u6628\u5929\u8bbf\u95ee",
          "square.openchatmenu.toggle.messagereplies":
            "\u56de\u590d\u6d88\u606f",
          "square.openchatmessage.desc.noreactions":
            "\u5c1a\u672a\u6536\u5230\u56de\u5e94\u3002",
          "square.openchatmessagefield.desc.readonlymode":
            "\u6b64\u804a\u5929\u5df2\u8bbe\u4e3a\u53ea\u8bfb\u6a21\u5f0f",
          "square.openchatnotes.desc.subchatmemberscanseenotes":
            "OpenChat\u4e2d\u4efb\u4f55\u804a\u5929\u7684\u6210\u5458\u90fd\u53ef\u4ee5\u67e5\u770bOpenChat\u4e2d\u5206\u4eab\u7684\u8bb0\u4e8b\u672c\u3002",
          "square.openchatnotificationsettings.header.openchatnotifications":
            "OpenChat",
          "square.openchatphoneverification.popupdesc.verifyphonenumberonmobileapp":
            "\u4e3a\u4e86\u786e\u4fdd\u7528\u6237\u80fd\u591f\u5b89\u5168\u4f7f\u7528OpenChat\u670d\u52a1\uff0c\u8bf7\u9a8c\u8bc1\u60a8\u7684\u7535\u8bdd\u53f7\u7801\u3002\u60a8\u53ef\u4ee5\u5728\u624b\u673a\u7248LIINE\u4e2d\u8fdb\u884c\u64cd\u4f5c\u3002",
          "square.openchatphoneverification.popuptitle.verificationrequired":
            "\u9700\u8981\u9a8c\u8bc1",
          "square.openchatpopup.button.cancel": "\u53d6\u6d88",
          "square.openchatpopup.button.confirm": "\u786e\u5b9a",
          "square.openchatpopup.desc.changesetting":
            "\u66f4\u6539\u7684\u8bbe\u7f6e\u5185\u5bb9\u5c06\u540c\u65f6\u5e94\u7528\u4e8eOpenChat\u53ca\u5176\u4e2d\u7684\u6240\u6709\u804a\u5929\u3002\u8981\u7ee7\u7eed\u5417\uff1f",
          "square.openchatprivacysettings.desc.agerestrictedchat":
            "\u6b64OpenChat\u4ec5\u5bf9\u5e74\u6ee118\u5468\u5c81\u7684\u7528\u6237\u5f00\u653e\u3002",
          "square.openchatprivacysettings.desc.opentoallages":
            "\u6b64OpenChat\u9762\u5411\u6240\u6709\u5e74\u9f84\u6bb5\u7684\u7528\u6237\u3002",
          "square.openchatprivacysettings.popupdesc.entercodetojoinchat":
            "\u8bf7\u8bbe\u7f6e\u52a0\u5165OpenChat\u65f6\u6240\u9700\u7684\u9a8c\u8bc1\u7801\u3002\u8bf7\u6ce8\u610f\uff0c\u66f4\u6539OpenChat\u7684\u9690\u79c1\u8bbe\u7f6e\u4e3a\u201c\u9700\u8981\u8f93\u5165\u9a8c\u8bc1\u7801\u201d\u540e\uff0c\u5c06\u4f7f\u672a\u6210\u5e74\u7528\u6237\u6216\u672a\u9a8c\u8bc1\u5e74\u9f84\u7684\u7528\u6237\u65e0\u6cd5\u52a0\u5165\u3002",
          "square.openchatprivacysettings.popupdesc.enterquestiontojoinchat":
            "\u8bf7\u8f93\u5165\u52a0\u5165\u804a\u5929\u65f6\u5fc5\u987b\u56de\u7b54\u7684\u95ee\u9898\u3002\u7ba1\u7406\u5458\u6216\u5171\u540c\u7ba1\u7406\u5458\u5c06\u5ba1\u6838\u7b54\u6848\u5e76\u6279\u51c6\u6210\u5458\u52a0\u5165\u3002\u8bf7\u6ce8\u610f\uff0c\u66f4\u6539OpenChat\u9690\u79c1\u8bbe\u7f6e\u4e3a\u201c\u9700\u8981\u7ba1\u7406\u5458\u6279\u51c6\u201d\u540e\uff0c\u5c06\u4f7f\u672a\u6210\u5e74\u7528\u6237\u6216\u672a\u9a8c\u8bc1\u5e74\u9f84\u7684\u7528\u6237\u65e0\u6cd5\u52a0\u5165\u3002",
          "square.openchatprofile.button.join":
            "\u4f7f\u7528\u65b0\u7684\u4e2a\u4eba\u8d44\u6599\u52a0\u5165OpenChat",
          "square.openchatprofile.desc.chatsetindifferentcountry":
            "\u6b64OpenChat\u4e0e\u60a8\u6240\u5728\u7684\u56fd\u5bb6\u6216\u5730\u533a\u4e0d\u540c\u3002",
          "square.openchatprofile.desc.openchatsettoreadonly":
            "\u6b64OpenChat\u5df2\u8bbe\u4e3a\u53ea\u8bfb\u6a21\u5f0f",
          "square.openchatprofile.desc.tooltip":
            "\u4f7f\u7528\u65b0\u7684\u6635\u79f0\u4e0e\u5934\u50cf\u52a0\u5165\u6b64OpenChat\u3002",
          "square.openchatsetting.desc.maxpeople":
            "\u65e0\u6cd5\u5728MegaChat\u4e2d\u66f4\u6539\u6b64\u8bbe\u7f6e\u3002",
          "square.openchatsetting.desc.mentionnoti":
            "\u5373\u4f7f\u5173\u95ed\u804a\u5929\u901a\u77e5\u8bbe\u7f6e\uff0c\u4e5f\u53ef\u4ee5\u5728\u6709\u4eba\u63d0\u53ca\u60a8\u65f6\u6536\u5230\u901a\u77e5\u3002",
          "square.openchatsetting.desc.mentions": "\u63d0\u53ca",
          "square.openchatsetting.desc.onlyopen":
            "\u4ec5\u5f53OpenChat\u672a\u8bbe\u7f6e\u5e74\u9f84\u9650\u5236\u65f6\uff0c\u6b64\u9009\u9879\u624d\u53ef\u7528\u3002",
          "square.openchatsetting.desc.visibility":
            "\u5141\u8bb8\u7528\u6237\u9884\u89c8\u53ca\u641c\u7d22\u6d88\u606f",
          "square.openchatsetting.desc.visibilityallowed": "\u5141\u8bb8",
          "square.openchatsetting.desc.visibilitynotallowed": "\u62d2\u7edd",
          "square.openchatsetting.desc.visiforco":
            "\u5176\u4ed6\u7528\u6237\u53ef\u4ee5\u641c\u7d22\u6b64\u804a\u5929\u4e2d\u7684\u6d88\u606f\u3002\u6b64\u8bbe\u7f6e\u53ef\u4ee5\u6839\u636eOpenChat\u4e2d\u7684\u8bbe\u7f6e\u72b6\u6001\u540c\u6b65\u5f00\u542f\uff0c\u53ea\u6709\u7ba1\u7406\u5458\u53ef\u4ee5\u66f4\u6539\u6b64\u8bbe\u7f6e\u3002",
          "square.openchatsettings.button.allowmessagesfrom":
            "\u5141\u8bb8\u53d1\u9001\u6d88\u606f\u7684\u6210\u5458",
          "square.openchatsettings.button.continue": "\u7ee7\u7eed",
          "square.openchatsettings.button.leavemainchat":
            "\u9000\u51fa\u4e3b\u804a\u5929",
          "square.openchatsettings.button.leavesubchat":
            "\u9000\u51fa\u804a\u5929\u5ba4",
          "square.openchatsettings.button.managemembershipsystemmessages":
            "\u7ba1\u7406\u6210\u5458\u7cfb\u7edf\u6d88\u606f",
          "square.openchatsettings.button.settoreadonlymode":
            "\u8bbe\u7f6e\u4e3a\u53ea\u8bfb\u6a21\u5f0f",
          "square.openchatsettings.desc.addopenchatdescription":
            "\u8bf7\u6dfb\u52a0\u6b64OpenChat\u7684\u7b80\u4ecb\u3002",
          "square.openchatsettings.desc.coverphotosetasprofilephotoandbackground":
            "\u6b64OpenChat\u7684\u5c01\u9762\u7167\u7247\u5c06\u88ab\u540c\u65f6\u8bbe\u7f6e\u4e3aOpenChat\u7684\u5934\u50cf\u7167\u7247\u548c\u804a\u5929\u5ba4\u80cc\u666f\u3002",
          "square.openchatsettings.desc.getnotifiedwhensomeonejoins":
            "\u65b0\u6210\u5458\u52a0\u5165\u804a\u5929\u65f6\u63a5\u6536\u901a\u77e5\u3002",
          "square.openchatsettings.desc.readonlymodeformembers":
            "\u4ec5\u5141\u8bb8\u7ba1\u7406\u5458\u6216\u5171\u540c\u7ba1\u7406\u5458\u5728\u804a\u5929\u4e2d\u53d1\u9001\u6d88\u606f\u3002",
          "square.openchatsettings.header.chatsettings": "",
          "square.openchatsettings.header.details": "",
          "square.openchatsettings.header.editsubchatprofile":
            "\u7f16\u8f91\u804a\u5929\u4e2a\u4eba\u8d44\u6599",
          "square.openchatsettings.header.openchatsettings": "",
          "square.openchatsettings.header.subchatsettings": "",
          "square.openchatsettings.placeholder.enterhashtags":
            "\u8f38\u5165\u7c21\u4ecb",
          "square.openchatsettings.popup.searchoff":
            "\u6240\u6709\u6d88\u606f\u5c06\u65e0\u6cd5\u88ab\u641c\u7d22\u4e14\u4e0d\u4f1a\u663e\u793a\u5728OpenChat\u8d44\u6599\u4e2d\u3002\u8981\u7ee7\u7eed\u5417\uff1f",
          "square.openchatsettings.popup.searchon":
            "\u65b0\u6d88\u606f\u5c06\u53ef\u4ee5\u88ab\u641c\u7d22\u5e76\u663e\u793a\u5728OpenChat\u8d44\u6599\u4e2d\u3002\u8981\u7ee7\u7eed\u5417\uff1f",
          "square.openchatsettings.popupdesc.selectacoadmin":
            "\u9000\u51fa\u804a\u5929\u5ba4\u4e4b\u524d\uff0c\u5fc5\u987b\u8bbe\u7f6e\u81f3\u5c111\u4f4d\u5171\u540c\u7ba1\u7406\u5458\u3002",
          "square.openchatsettings.toggle.newmembernotification":
            "\u65b0\u6210\u5458\u901a\u77e5",
          "square.openchatsettingstatus.desc.readonlymodedisabled":
            "\u804a\u5929\u4e2d\u7684\u6240\u6709\u6210\u5458\u5747\u53ef\u53d1\u9001\u6d88\u606f\u3002",
          "square.openchatsettingstatus.desc.readonlymodeenabled":
            "\u4ec5\u5141\u8bb8\u7ba1\u7406\u5458\u53d1\u9001\u6d88\u606f\u3002",
          "square.openchatsettingv.desc.allmessages":
            "\u5168\u90e8\u6d88\u606f",
          "square.openchatsettingv.desc.dontallow": "\u4e0d\u5141\u8bb8",
          "square.openchatsettingv.desc.off":
            "\u4ec5\u9650\u201c\u5141\u8bb8OpenChat\u53ef\u88ab\u641c\u7d22\u201d\u7684\u8bbe\u7f6e\u5df2\u5f00\u542f\u65f6\uff0c\u6b64\u9009\u9879\u624d\u53ef\u7528\u3002",
          "square.openchatsettingv.desc.on":
            "\u6b64OpenChat\u4e2d\u7684\u6d88\u606f\u5c06\u663e\u793a\u4e8e\u641c\u7d22\u7ed3\u679c\u53caOpenChat\u8d44\u6599\u4e2d\u3002",
          "square.openchatsharelink.desc.sharelinktoinvitefriends":
            "\u9080\u8bf7\u597d\u53cb\u52a0\u5165\u6b64OpenChat\u5f00\u59cb\u7545\u804a\u5427\uff01",
          "square.openchatsharelink.title.sharelink":
            "\u5206\u4eabOpenChat\u94fe\u63a5",
          "square.openchatsubchat.title.subchatname":
            "\u804a\u5929\u5ba4\u540d\u79f0",
          "square.openchatwallpapersettings.desc.wallpaperonlyseenbyyou":
            "\u80cc\u666f\u4ec5\u9002\u7528\u4e8e\u60a8\u81ea\u5df1\u7684\u804a\u5929\u5ba4\u3002",
          "square.pdpa.policy.agree.btn": "\u7ee7\u7eed",
          "square.personaloption.alert.error.name":
            "\u8be5\u540d\u79f0\u5df2\u88ab\u4f7f\u7528\u3002\u8bf7\u8f93\u5165\u5176\u4ed6\u540d\u79f0\u3002",
          "square.personaloption.chat": "\u63a5\u6536\u804a\u5929\u9080\u8bf7",
          "square.personaloption.chat.desc":
            "\u63a5\u6536\u6765\u81eaOpenChat\u6210\u5458\u7684\u9080\u8bf7\u6d88\u606f\u3002",
          "square.personaloption.copy": "\u5df2\u590d\u5236\u94fe\u63a5\u3002 ",
          "square.personaloption.friendrequest":
            "\u63a5\u6536\u597d\u53cb\u7533\u8bf7",
          "square.personaloption.friendrequest.desc":
            "\u5176\u4ed6\u6210\u5458\u53ef\u4ee5\u5411\u60a8\u53d1\u9001\u597d\u53cb\u7533\u8bf7\u3002",
          "square.personaloption.greetingmessage":
            "\u53d1\u9001\u7ed9\u7ba1\u7406\u5458\u7684\u6d88\u606f",
          "square.personaloption.greetingmessage.default":
            "\u8bf7\u8f93\u5165\u8981\u53d1\u9001\u7ed9\u7ba1\u7406\u5458\u7684\u6d88\u606f\u3002",
          "square.personaloption.guide": "\u8f93\u5165\u6635\u79f0",
          "square.personaloption.join.btn": "\u52a0\u5165",
          "square.personaloption.joincode.btn":
            "\u901a\u8fc7\u9a8c\u8bc1\u7801\u52a0\u5165",
          "square.personaloption.profile.title":
            "OpenChat\u4e2a\u4eba\u8d44\u6599",
          "square.personaloption.profile.title.tooltip.desc":
            "\u8bf7\u8bbe\u7f6e\u60a8\u5728\u6b64OpenChat\u4e2d\u4f7f\u7528\u7684\u6635\u79f0\u4e0e\u5934\u50cf\u3002\u60a8\u7684LINE\u4e2a\u4eba\u8d44\u6599\u5c06\u4e0d\u4f1a\u663e\u793a\u3002",
          "square.personaloption.sendrequest.btn": "\u7533\u8bf7\u52a0\u5165",
          "square.personaloption.welcomemsg": "\u6b22\u8fce\u6d88\u606f ",
          "square.policy.agree.btn": "\u540c\u610f ",
          "square.policy.title":
            "\u8bf7\u540c\u610f\u670d\u52a1\u6761\u6b3e\u548c\u653f\u7b56",
          "square.policy.viewall":
            "\u9605\u8bfb\u5b8c\u6574\u7684OpenChat\u670d\u52a1\u6761\u6b3e",
          "square.popup.button.grantpermission": "\u8bbe\u7f6e",
          "square.popup.button.setaspublic": "\u7ee7\u7eed",
          "square.post.announcement.announce": "\u8bbe\u7f6e",
          "square.post.announcement.delete": "\u5220\u9664\u8bb0\u4e8b\u672c",
          "square.post.announcement.delete.desc":
            "\u6b64\u8bb0\u4e8b\u672c\u5c06\u4ece\u91cd\u8981\u8bb0\u4e8b\u672c\u4e2d\u79fb\u9664\u3002\u8981\u5220\u9664\u8bb0\u4e8b\u672c\u5417\uff1f",
          "square.post.announcement.guide":
            "\u8bbe\u4e3a\u91cd\u8981\u8bb0\u4e8b\u672c\uff0c\u4ee5\u514d\u6709\u4eba\u9519\u8fc7\u3002",
          "square.post.announcement.list.title":
            "\u91cd\u8981\u8bb0\u4e8b\u672c",
          "square.post.announcement.list.zero":
            "\u5c1a\u65e0\u8bb0\u4e8b\u672c",
          "square.post.announcement.mark":
            "\u8bbe\u4e3a\u91cd\u8981\u8bb0\u4e8b\u672c",
          "square.post.announcement.mark.desc":
            "\u53ea\u6709\u6bcf\u5929\u8bbe\u7f6e\u7684\u7b2c\u4e00\u4e2a\u91cd\u8981\u5e16\u5b50\u624d\u4f1a\u5411OpenChat\u6210\u5458\u53d1\u9001\u63d0\u793a\u4fe1\u606f\u3002",
          "square.post.announcement.postui": "\u91cd\u8981",
          "square.post.announcement.postui2":
            "<b>\u91cd\u8981\u8bb0\u4e8b\u672c</b>",
          "square.post.announcement.push":
            "%1\u4e2d\u8bbe\u7f6e\u4e86\u65b0\u7684\u91cd\u8981\u8bb0\u4e8b\u672c\u3002",
          "square.post.announcement.remove":
            "\u53d6\u6d88\u201c\u91cd\u8981\u201d\u8bbe\u7f6e",
          "square.post.announcement.seeall.plural.other":
            "%1\u4e2a\u91cd\u8981\u5e16\u5b50",
          "square.post.endpage.squarename": "%1",
          "square.post.error.deletedcomment":
            "\u8be5\u8bc4\u8bba\u5df2\u88ab\u5220\u9664\u3002",
          "square.post.error.deletedjoined":
            "\u8be5\u5e16\u5b50\u5df2\u88ab\u5220\u9664\u3002 ",
          "square.post.error.deletedpost":
            "\u6b64\u8bb0\u4e8b\u672c\u5df2\u88ab\u5220\u9664\u3002",
          "square.post.error.write":
            "\u7ba1\u7406\u5458\u5df2\u9650\u5236\u201c\u64b0\u5199\u5e16\u5b50\u201d\u7684\u6743\u9650\uff0c\u56e0\u6b64\u65e0\u6cd5\u64b0\u5199\u5e16\u5b50\u3002 ",
          "square.post.hashtag.title": "%1\u4e2d\u7684%2",
          "square.post.join": "\u52a0\u5165",
          "square.post.joinguide":
            "\u4e0d\u8981\u9519\u8fc7\u6bcf\u4e2a\u7cbe\u5f69\u65f6\u523b\uff01\u7acb\u5373\u52a0\u5165\u201c%1\u201d\uff0c\u4e0e\u5176\u4ed6\u6210\u5458\u5206\u4eab\u804a\u5929\u548c\u5e16\u5b50\u3002",
          "square.post.linktype.chatlist":
            "\u5206\u4eab\u4e86\u4e00\u4e2aOpenChat\u5e16\u5b50\u3002",
          "square.post.linktype.scroll":
            "\u5206\u4eab\u4e86\u4e00\u4e2aOpenChat\u5e16\u5b50\u3002",
          "square.post.linktype.title": "\u67e5\u770b\u8bb0\u4e8b\u672c",
          "square.post.share.chatlist": "\u53d1\u9001\u81f3OpenChat",
          "square.post.share.popup": "\u5206\u4eabOpenChat\u5e16\u5b50",
          "square.post.title": "\u8bb0\u4e8b\u672c",
          "square.post.write.guide":
            "\u5176\u4ed6\u4eba\u53ef\u4ee5\u5728OpenChat\u4e2d\u770b\u5230\u60a8\u7684\u5e16\u5b50\u3002",
          "square.post.write.guidecountryspecific":
            "\u5728OpenChat\u4e0a\u5206\u4eab\u3002",
          "square.post.write.hashtag":
            "\u8bd5\u8bd5\u4e3a\u60a8\u7684\u5e7f\u573a\u5e16\u5b50\u6dfb\u52a0\u6807\u7b7e\u3002\n\u6807\u7b7e\u53ef\u8ba9\u5176\u4ed6\u5e7f\u573a\u6210\u5458\u8f7b\u677e\u627e\u5230\u6709\u5173\u7279\u5b9a\u8bdd\u9898\u7684\u5e16\u5b50\u548c\u804a\u5929\u5185\u5bb9\u3002",
          "square.post.zeropage.newpost": "\u7f16\u5199",
          "square.post.zeropage.welcome":
            "\u62a2\u5148\u5728\u6b64OpenChat\u4e2d\u7f16\u5199\u5e16\u5b50\uff01",
          "square.postpopup.join":
            "\u53ea\u6709\u5e7f\u573a\u6210\u5458\u624d\u80fd\u4f7f\u7528\u6b64\u529f\u80fd\u3002\u8981\u52a0\u5165\u5e7f\u573a\u5417\uff1f",
          "square.privacy.setting.approval":
            "\u9700\u8981\u7ba1\u7406\u5458\u6279\u51c6",
          "square.privacy.setting.guide":
            "\u53ea\u6709\u7ecf\u7ba1\u7406\u5458\u6279\u51c6\u6216\u8f93\u5165\u6b63\u786e\u9a8c\u8bc1\u7801\u7684\u7528\u6237\u624d\u80fd\u52a0\u5165\u6b64OpenChat\u548c\u5176\u4e2d\u7684\u804a\u5929\u3002",
          "square.privacy.setting.joincode":
            "\u9700\u8981\u8f93\u5165\u9a8c\u8bc1\u7801",
          "square.privacy.setting.off": "\u5bf9\u6240\u6709\u4eba\u516c\u5f00",
          "square.privacy.setting.off.guide":
            "\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u52a0\u5165\u6b64OpenChat\u548c\u5176\u4e2d\u7684\u804a\u5929\u3002",
          "square.privacy.setting.title": "\u9690\u79c1\u8bbe\u7f6e",
          "square.privacy.turnoff.alert":
            "\u5373\u5c06\u53d8\u66f4\u4e3a\u4efb\u4f55\u4eba\u90fd\u80fd\u52a0\u5165\u6b64\u804a\u5929\u3002\u8981\u7ee7\u7eed\u5417\uff1f",
          "square.privcay.setting.off.guide":
            "\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u52a0\u5165\u6b64\u7a7a\u95f4\u548c\u5176\u4e2d\u7684\u804a\u5929\u3002",
          "square.qrcode.save.failed":
            "\u4e8c\u7ef4\u7801\u4fdd\u5b58\u5931\u8d25\u3002",
          "square.readonlyopenchat.popupbutton.ok": "\u786e\u5b9a",
          "square.repairdata.button.repairdata": "\u9009\u62e9",
          "square.repairdata.desc.syncrepairdata":
            "\u540c\u6b65\u5e76\u66f4\u65b0OpenChat\u6570\u636e\u3002\n\u540c\u6b65\u6570\u636e\uff1aOpenChat\u6570\u636e\u4ee5\u53ca\u76f8\u5173\u8bbe\u7f6e",
          "square.repairdata.popupdesc.repairinginprogress":
            "\u540c\u6b65\u6570\u636e\u4e2d\n\u540c\u6b65\u8fc7\u7a0b\u4e2d\u8bf7\u52ff\u5173\u95ed\u6b64\u7a97\u53e3\u3002",
          "square.repairdata.popupdesc.synccomplete":
            "\u5df2\u540c\u6b65\u5b8c\u6210OpenChat\u6570\u636e\u3002",
          "square.repairdata.title.repairdata":
            "\u540c\u6b65OpenChat\u6570\u636e",
          "square.report.page.reason01": "",
          "square.report.page.reason02": "",
          "square.report.page.reason03": "",
          "square.report.page.reason04": "",
          "square.report.policy.desc":
            "\u4e3e\u62a5\u7684\u5185\u5bb9\u5c06\u6839\u636eOpenChat\u76f8\u5173\u653f\u7b56\u8fdb\u884c\u5ba1\u6838\u548c\u540e\u7eed\u5904\u7406\u3002",
          "square.report.policy.desc01": "",
          "square.report.policy.desc02": "",
          "square.report.policy.message": "",
          "square.report.subTitle":
            "\u4e3e\u62a5\u6b64\u8bb0\u4e8b\u672c\u3002\n\uff08\u4f5c\u8005: %1\uff09",
          "square.reportopenchat.desc.reportchatfromprofile":
            "\u4e3e\u62a5\u7684OpenChat\u76f8\u5173\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u540d\u79f0\u3001\u5c01\u9762\u56fe\u7247\u3001\u6210\u5458\u4eba\u6570\u7b49\uff09\u3001\u6700\u8fd1\u53d1\u9001\u7684100\u6761\u804a\u5929\u6d88\u606f\u3001\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u4ee5\u53ca\u804a\u5929\u7ba1\u7406\u5458\u7684\u8be6\u7ec6\u4fe1\u606f\uff08\u5305\u62ec\u804a\u5929\u4e2d\u4f7f\u7528\u7684\u6635\u79f0\u4e0e\u8bc6\u522b\u4fe1\u606f\uff09\u3002",
          "square.reportopenchat.desc.reportchatfromsettings":
            "\u4e3e\u62a5\u7684OpenChat\u76f8\u5173\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u540d\u79f0\u3001\u5c01\u9762\u56fe\u7247\u3001\u6210\u5458\u4eba\u6570\u7b49\uff09\u3001\u6700\u8fd1\u53d1\u9001\u768450\u6761\u804a\u5929\u6d88\u606f\u3001\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u4ee5\u53ca\u804a\u5929\u7ba1\u7406\u5458\u7684\u8be6\u7ec6\u4fe1\u606f\uff08\u5305\u62ec\u804a\u5929\u4e2d\u4f7f\u7528\u7684\u6635\u79f0\u4e0e\u8bc6\u522b\u4fe1\u606f\uff09\u3002",
          "square.reportopenchat.desc.reportcommentonopenchatnote":
            "\u4e3e\u62a5\u8bc4\u8bba\u7684\u8be6\u7ec6\u5185\u5bb9\uff08\u4f8b\u5982\uff1a\u6587\u5b57\u3001\u56fe\u7247\u6216\u8868\u60c5\u8d34\u7b49\uff09\u3001OpenChat\u76f8\u5173\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u540d\u79f0\u3001\u5c01\u9762\u56fe\u7247\u3001\u6210\u5458\u4eba\u6570\u7b49\uff09\u3001\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u3001\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u4fe1\u606f\uff08\u5305\u62ec\u5934\u50cf\u3001\u53c2\u52a0\u72b6\u6001\u3001\u804a\u5929\u4e2d\u4f7f\u7528\u7684\u6635\u79f0\u4e0e\u5176\u4ed6\u8bc6\u522b\u4fe1\u606f\uff09\u3002",
          "square.reportopenchat.desc.reportopenchatmember":
            "\u4e3e\u62a5\u7684OpenChat\u76f8\u5173\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u540d\u79f0\u3001\u5c01\u9762\u56fe\u7247\u3001\u6210\u5458\u4eba\u6570\u7b49\uff09\u3001\u6700\u8fd1\u53d1\u9001\u7684100\u6761\u804a\u5929\u6d88\u606f\u3001\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u4ee5\u53ca\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u8be6\u7ec6\u4fe1\u606f\uff08\u5305\u62ec\u5934\u50cf\u3001\u804a\u5929\u4e2d\u4f7f\u7528\u7684\u6635\u79f0\u4e0e\u8bc6\u522b\u4fe1\u606f\uff09\u3002",
          "square.reportopenchat.desc.reportopenchatmessage":
            "\u4e3e\u62a5\u7684OpenChat\u76f8\u5173\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u540d\u79f0\u3001\u5c01\u9762\u56fe\u7247\u3001\u6210\u5458\u4eba\u6570\u7b49\uff09\u3001\u6700\u8fd1\u53d1\u9001\u768410\u6761\u804a\u5929\u6d88\u606f\u3001\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u4ee5\u53ca\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u8be6\u7ec6\u4fe1\u606f\uff08\u5305\u62ec\u5934\u50cf\u3001\u804a\u5929\u4e2d\u4f7f\u7528\u7684\u6635\u79f0\u4e0e\u8bc6\u522b\u4fe1\u606f\uff09\u3002",
          "square.reportopenchat.desc.reportopenchatnote":
            "\u4e3e\u62a5\u7684\u8bb0\u4e8b\u672c\u5185\u5bb9\uff08\u4f8b\u5982\uff1a\u6587\u5b57\u3001\u56fe\u7247\u3001\u89c6\u9891\u6216\u8868\u60c5\u8d34\u7b49\uff09\u3001OpenChat\u76f8\u5173\u4fe1\u606f\uff08\u4f8b\u5982\uff1a\u804a\u5929\u540d\u79f0\u3001\u5c01\u9762\u56fe\u7247\u3001\u6210\u5458\u4eba\u6570\u7b49\uff09\u3001\u60a8\u7684\u4e2a\u4eba\u4fe1\u606f\u3001\u88ab\u4e3e\u62a5\u7528\u6237\u7684\u4fe1\u606f\uff08\u5305\u62ec\u5934\u50cf\u3001\u53c2\u52a0\u72b6\u6001\u3001\u804a\u5929\u4e2d\u4f7f\u7528\u7684\u6635\u79f0\u4e0e\u8bc6\u522b\u4fe1\u606f\uff09\u3002",
          "square.requesttojoin.button.submit": "\u63d0\u4ea4",
          "square.set.joincode.input.guide": "\u8f93\u5165\u53c2\u52a0\u7801",
          "square.set.question.input.guide":
            "\u8f93\u5165\u7528\u6237\u5728\u52a0\u5165\u6b64\u804a\u5929\u65f6\u5fc5\u987b\u56de\u7b54\u7684\u95ee\u9898\u3002\u7ba1\u7406\u5458\u548c\u5171\u540c\u7ba1\u7406\u5458\u5c06\u5ba1\u6838\u7533\u8bf7\u5e76\u6279\u51c6\u6210\u5458\u52a0\u5165\u3002",
          "square.setopenchatprofile.button.characterprofile":
            "\u9009\u62e9\u89d2\u8272\u56fe\u7247",
          "square.setting.auth.announcement": "\u8bbe\u7f6e\u901a\u77e5",
          "square.setting.auth.message.post":
            "\u5220\u9664\u4fe1\u606f\u548c\u8bb0\u4e8b\u672c",
          "square.settings.deleteaccount.desc":
            "OpenChat\u7ba1\u7406\u5458\u6743\u9650\u5c06\u81ea\u52a8\u79fb\u4ea4\u7ed9\u5176\u4ed6\u6210\u5458\u3002",
          "square.settings.managesquare.defaultchatroom.desc":
            "\u65e0\u6cd5\u5220\u9664\u9ed8\u8ba4\u804a\u5929\u5ba4\u3002",
          "square.settings.managesquare.defaultchatroom.title":
            "\u201c%1\u201d\u5e7f\u573a\u7684\u9ed8\u8ba4\u804a\u5929\u5ba4",
          "square.settings.managesquare.privatechat":
            "\u5141\u8bb8\u975e\u516c\u5f00\u804a\u5929",
          "square.settings.managesquare.privatechat.desc":
            "\u6210\u5458\u4e4b\u95f4\u53ef\u76f4\u63a5\u521b\u5efa\u975e\u516c\u5f00\u804a\u5929\u6216\u53d1\u9001\u4fe1\u606f\u3002",
          "square.settings.memberlist.members.subtitle": "\u6210\u5458",
          "square.settings.members": "\u6210\u5458(%n)",
          "square.settings.myprofile.leavesquare": "\u9000\u51faOpenChat",
          "square.sub.name.title": "\u804a\u5929\u540d\u79f0",
          "square.thread.desc.nochat":
            "\u5bf9\u8bdd\u4e2d\u7684\u6d88\u606f\u5c06\u4e0d\u4f1a\u663e\u793a\u5230\u804a\u5929\u4e2d\u3002",
          "square.thread.desc.startofthread":
            "\u5728\u804a\u5929\u4e2d\u67e5\u770b\u6d88\u606f",
          "square.thread.placeholder.replytothread": "\u56de\u590d\u5bf9\u8bdd",
          "square.thread.title.thread": "\u5bf9\u8bdd",
          "square.thread.toast.nolongerwatching":
            "\u5df2\u4ece\u5bf9\u8bdd\u6536\u85cf\u5939\u4e2d\u79fb\u9664",
          "square.thread.toast.nowwatching":
            "\u5df2\u6dfb\u52a0\u81f3\u5bf9\u8bdd\u6536\u85cf\u5939",
          "square.timeline.button.tooltip":
            "\u8ba4\u8bc6\u65b0\u670b\u53cb\uff0c\u8ddf\u4ed6\u4eec\n\u804a\u804a\u6709\u8da3\u7684\u8bdd\u9898\u5427\uff01",
          "square.tooltip.chatroom.settings.changename":
            "\u81ea\u884c\u5b9a\u4e49\u9ed8\u8ba4\u804a\u5929\u7684\u540d\u79f0\u548c\u5934\u50cf\u3002",
          "square.unsupported.version.message":
            "\u60a8\u76ee\u524d\u4f7f\u7528\u7684\u7248\u672c\u4e0d\u652f\u6301\u6b64\u529f\u80fd\u3002\n\u8bf7\u5347\u7ea7\u81f3\u6700\u65b0\u7248\u672c\u3002",
          "square.urlscheme.alert.linkjoin.function.off":
            "\u65e0\u6cd5\u901a\u8fc7\u9080\u8bf7\u94fe\u63a5\u52a0\u5165\u3002\n\u8bf7\u8ba9\u5176\u4ed6OpenChat\u6210\u5458\u9080\u8bf7\u60a8\u3002",
          "square.urlscheme.desc2":
            "\u60a8\u53ea\u80fd\u901a\u8fc7iOS\u6216Android\u8bbe\u5907\u52a0\u5165\u8be5\u5e7f\u573a\u3002 ",
          "square.urlscheme.error.notexist":
            "\u8be5OpenChat\u4e0d\u5b58\u5728\u3002",
          "square.urlscheme.invite.msg":
            "\u60a8\u5df2\u88ab\u9080\u8bf7\u52a0\u5165OpenChat\u3002",
          "square.urlscheme.package":
            "[%1] \u60a8\u5df2\u88ab\u9080\u8bf7\u52a0\u5165OpenChat\u3002\n%3\n%2",
          "square.urlscheme.package.chatroom":
            "\u60a8\u5df2\u53d7\u9080\u52a0\u5165\u201c%1\u201d\u3002\u8bf7\u8bbf\u95ee\u4ee5\u4e0b\u94fe\u63a5\uff0c\u52a0\u5165\u8be5OpenChat\u3002\n%2",
          "square.urlscheme.package.chatroom2": "",
          "square.user.admin": "\u7ba1\u7406\u5458",
          "square.user.coadmin": "\u5171\u540c\u7ba1\u7406\u5458",
          "square.userpopup.blockinvite": "\u5c4f\u853d\u9080\u8bf7",
          "square.userpopup.error.alert.notmember":
            "\u8be5\u7528\u6237\u5df2\u4e0d\u662f\u8be5OpenChat\u7684\u6210\u5458\u3002",
          "square.userpopup.friendsinfo.btn":
            "\u67e5\u770b\u597d\u53cb\u4fe1\u606f ",
          "square.userpopup.friendsrequest.btn": "\u597d\u53cb\u7533\u8bf7",
          "square.userpopup.kickout.ban.btn": "\u5f3a\u5236\u79fb\u51fa",
          "square.userpopup.kickout.btn": "\u5f3a\u5236\u79fb\u51fa",
          "square.userpopup.kickout.cancel.btn": "\u53d6\u6d88",
          "square.userpopup.post.count.btn": "\u5e16\u5b50",
          "square.yourthreads.title.yourthreads": "\u60a8\u7684\u5bf9\u8bdd",
          "sticion.msg.desc.expired":
            "\u8868\u60c5\u8d34\u5df2\u8fc7\u671f\u3002",
          "sticker.btn.deleteThisSticker": "\u5220\u9664\u8d34\u56fe",
          "sticker.btn.openWebStore": "\u8d34\u56fe\u5546\u5e97",
          "sticker.customsticker.btn.edit":
            "\u7f16\u8f91\u8bf4\u660e\u6587\u5b57",
          "sticker.customsticker.cancelalert.desc":
            "\u5982\u679c\u60a8\u79bb\u5f00\u6b64\u9875\u9762\uff0c\u60a8\u7684\u81ea\u5b9a\u4e49\u8bf4\u660e\u6587\u5b57\u5c06\u4e22\u5931\u3002\u786e\u5b9a\u8981\u79bb\u5f00\u5417\uff1f",
          "sticker.customsticker.discard.alert": "\u79bb\u5f00",
          "sticker.customsticker.edit.overflow":
            "\u8bf4\u660e\u6587\u5b57\u8fc7\u957f\u3002",
          "sticker.customsticker.error.updatename.desc":
            "\u5f88\u62b1\u6b49\uff0c\u76ee\u524d\u65e0\u6cd5\u66f4\u65b0\u60a8\u7684\u8bf4\u660e\u6587\u5b57\u3002",
          "sticker.customsticker.invalidwordupdate.desc":
            "\u672c\u5957\u8d34\u56fe\u7684\u8bf4\u660e\u6587\u5b57\u4e2d\u5305\u542b\u7981\u7528\u8bcd\uff0c\u56e0\u6b64\u5df2\u88ab\u505c\u7528\u3002\u5982\u8981\u4f7f\u7528\u8d34\u56fe\uff0c\u8bf7\u5148\u7f16\u8f91\u8bf4\u660e\u6587\u5b57\u3002",
          "sticker.customsticker.sync.alert":
            "\u5728\u684c\u9762\u7248\u4e2d\u521b\u5efa\u7684\u81ea\u5b9a\u4e49\u8bf4\u660e\u6587\u5b57\u4e0d\u4f1a\u7acb\u5373\u5728\u624b\u673a\u7248\u4e2d\u751f\u6548\u3002\u60a8\u53ef\u4ee5\u5728\u624b\u673a\u7248\u4e2d\u524d\u5f80\u201c\u8bbe\u7f6e\u201d>\u201c\u8d34\u56fe\u201d>\u201c\u6211\u7684\u8d34\u56fe\u201d\u4e0b\u8f7d\u76f8\u5173\u7684\u8d34\u56fe\uff0c\u66f4\u65b0\u8fd9\u4e9b\u8d34\u56fe\u3002",
          "sticker.customsticker.tooltip":
            "\u521b\u5efa\u60a8\u81ea\u5df1\u7684\u4e2a\u6027\u5316\u8d34\u56fe\u8bf4\u660e\u6587\u5b57\uff01",
          "sticker.download.btn": "\u4e0b\u8f7d",
          "sticker.download.fail":
            "\u4e0b\u8f7d\u5931\u8d25\u3002\n\u8bf7\u91cd\u65b0\u4e0b\u8f7d\u3002",
          "sticker.downloadAll.confirm":
            "\u662f\u5426\u4e0b\u8f7d\u60a8\u7684\u6240\u6709\u8d34\u56fe\uff1f",
          "sticker.downloadAll.desc":
            "\u4e0b\u8f7d\u5168\u90e8\u5df2\u6709\u8d34\u56fe\u3002",
          "sticker.downloadAll.downloading":
            "\u6b63\u5728\u4e0b\u8f7d\u8d34\u56fe...",
          "sticker.downloading.desc":
            "\u6b63\u5728\u4e0b\u8f7d\u8d34\u56fe\u3002\n\u8bf7\u7a0d\u5019\u7247\u523b\u3002",
          "sticker.edit.hint.default":
            "\u4e3a\u201c****\u201d\u8f93\u5165\u8bf4\u660e\u6587\u5b57",
          "sticker.edit.invalidword.desc":
            "\u68c0\u6d4b\u5230\u7981\u7528\u8bcd\u3002",
          "sticker.error.downloadlfailed.desc":
            "\u65e0\u6cd5\u4e0b\u8f7d\u8d34\u56fe\u3002",
          "sticker.expired.desc":
            "\u201c%1\u201d\u5df2\u8fc7\u671f\u3002\u8fd9\u4e9b\u8d34\u56fe\u5c06\u88ab\u81ea\u52a8\u5220\u9664\u3002",
          "sticker.msg.desc.delete": "\u5220\u9664",
          "sticker.msg.desc.expired":
            "\u8d34\u56fe\u7684\u6709\u6548\u671f\u5df2\u6ee1\u3002",
          "sticker.msgsticker.button.back": "\u8fd4\u56de",
          "sticker.msgsticker.button.cancel": "\u53d6\u6d88",
          "sticker.msgsticker.button.edit":
            "\u7f16\u8f91\u8bf4\u660e\u6587\u5b57",
          "sticker.msgsticker.button.save": "\u4fdd\u5b58",
          "sticker.msgsticker.desc.howtoedit":
            "\u5355\u51fb\u8d34\u56fe\u4ee5\u7f16\u8f91\u8bf4\u660e\u6587\u5b57",
          "sticker.msgsticker.desc.prompt":
            "\u66f4\u6539\u540e\u7684\u8bf4\u660e\u6587\u5b57\u4e0d\u4f1a\u663e\u793a\u5728\u5df2\u53d1\u9001\u7684\u8d34\u56fe\u4e2d\u3002",
          "sticker.msgsticker.validation.errorrefresh":
            "\u65e0\u6cd5\u66f4\u65b0\u8bf4\u660e\u6587\u5b57\u3002\u8bf7\u5355\u51fb\u8d34\u56fe\u518d\u8bd5\u4e00\u6b21\u3002",
          "sticker.msgsticker.validation.toolong":
            "\u8bf7\u7f29\u77ed\u8bf4\u660e\u6587\u5b57\u5185\u5bb9\u3002",
          "sticker.nearlyExpired.desc.other":
            "\u8fd9\u4e9b\u8d34\u56fe\u5c06\u5728%n\u5929\u540e\u8fc7\u671f\u3002",
          "sticker.recommendedSticker.label": "\u63a8\u8350\u8d34\u56fe",
          "sticker.search.hint": "\u641c\u7d22",
          "sticker.search.nosearchresult":
            "\u672a\u627e\u5230\u76f8\u5173\u641c\u7d22\u7ed3\u679c\u3002",
          "sticker.stickerspremium.deletsticker.popup":
            "\u786e\u5b9a\u8981\u4ece\u60a8\u7684\u7545\u4eab\u5957\u9910\u8d34\u56fe\u4e2d\u5220\u9664\u5417\uff1f",
          "sticker.stickerspremium.dropped.desc":
            "\u8bf7\u8d2d\u4e70\u6b64\u8d34\u56fe\u4ee5\u7ee7\u7eed\u4f7f\u7528\u3002",
          "sticker.stickerspremium.dropped.title":
            "\u6b64\u8d34\u56fe\u5df2\u4e0d\u5728LINE\u8d34\u56fe\u7545\u4eab\u5957\u9910\u7684\u63d0\u4f9b\u8303\u56f4\u5185",
          "sticker.stickerspremium.emojidropped.desc":
            "\u8bf7\u8d2d\u4e70\u6b64\u8868\u60c5\u8d34\u4ee5\u7ee7\u7eed\u4f7f\u7528\u3002",
          "sticker.stickerspremium.emojidropped.title":
            "\u6b64\u8868\u60c5\u8d34\u5df2\u4e0d\u5728\nLINE\u8d34\u56fe\u7545\u4eab\u5957\u9910\u7684\u63d0\u4f9b\u8303\u56f4\u5185",
          "sticker.stickerspremium.emojiexpired.desc":
            "\u5982\u9700\u7ee7\u7eed\u4f7f\u7528\u6b64\u8868\u60c5\u8d34\uff0c\n\u8bf7\u7eed\u8ba2\u8c6a\u534e\u7248\u5957\u9910\u3002",
          "sticker.stickerspremium.expired.desc":
            "\u5982\u9700\u7ee7\u7eed\u4f7f\u7528\u6b64\u8d34\u56fe\uff0c\u8bf7\u7eed\u8ba2LINE\u8d34\u56fe\u7545\u4eab\u5957\u9910\u3002",
          "sticker.stickerspremium.expired.title":
            "\u60a8\u7684\u7545\u4eab\u5957\u9910\u5df2\u8fc7\u671f",
          "sticker.unpurchased.purchase.btn": "\u8d2d\u4e70",
          "sticker.unpurchased.recommended.title": "\u63a8\u8350\u8d34\u56fe",
          "sticon.downloadAll.desc":
            "\u4e0b\u8f7d\u5168\u90e8\u5df2\u6709\u8868\u60c5\u8d34\u3002",
          "sticon.downloadAll.downloading":
            "\u6b63\u5728\u4e0b\u8f7d\u7ed8\u6587\u5b57\u2026",
          "sticon.downloading.desc":
            "\u6b63\u5728\u4e0b\u8f7d\u7ed8\u6587\u5b57\u3002\n\u8bf7\u7a0d\u5019\u7247\u523b\u3002",
          "sticon.expired.desc":
            "\u201c%1\u201d\u5df2\u8fc7\u671f\u3002\u8fd9\u4e9b\u8868\u60c5\u8d34\u5c06\u88ab\u81ea\u52a8\u5220\u9664\u3002",
          "sticon.nearlyExpired.desc.other":
            "\u8fd9\u4e9b\u8868\u60c5\u8d34\u5c06\u5728%n\u5929\u540e\u8fc7\u671f\u3002",
          "sticon.recommendedEmoji.label": "\u63a8\u8350\u8868\u60c5\u8d34",
          "sticon.stickerspremium.deletemoji.popup":
            "\u786e\u5b9a\u8981\u4ece\u60a8\u7684\u7545\u4eab\u5957\u9910\u8d34\u56fe\u4e2d\u5220\u9664\u6b64\u8868\u60c5\u8d34\u5417\uff1f",
          "subprofile.common.button.cancel": "\u53d6\u6d88",
          "subprofile.common.popupbutton.continue": "\u7ee7\u7eed",
          "subprofile.common.toast.settingupdated":
            "\u4e2a\u4eba\u8d44\u6599\u8bbe\u7f6e\u5df2\u66f4\u65b0\u3002",
          "subprofile.editfriends.button.done": "\u5b8c\u6210",
          "subprofile.editfriends.popupdesc.dontshowagain":
            "\u4e0d\u518d\u663e\u793a",
          "subprofile.editfriends.popuptitle.errorabletoretry":
            "\u90e8\u5206\u597d\u53cb\u65e0\u6cd5\u67e5\u770b\u6b64\u4e2a\u4eba\u8d44\u6599\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "subprofile.editfriends.popuptitle.errorunabletoretry":
            "\u90e8\u5206\u597d\u53cb\u65e0\u6cd5\u67e5\u770b\u6b64\u4e2a\u4eba\u8d44\u6599\u3002",
          "subprofile.editfriends.popuptitle.maxlimiterror":
            "\u53ef\u67e5\u770b\u6b64\u4e2a\u4eba\u8d44\u6599\u7684\u597d\u53cb\u4eba\u6570\u5df2\u8fbe\u4e0a\u9650\u3002",
          "subprofile.editfriends.popuptitle.networkerror":
            "\u53d1\u751f\u7f51\u7edc\u9519\u8bef\u3002\u8bf7\u68c0\u67e5\u60a8\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "subprofile.editfriends.popuptitle.onlyonmobileapp":
            "\u6b64\u529f\u80fd\u4ec5\u5728\u667a\u80fd\u624b\u673a\u7248LINE\u5e94\u7528\u4e0a\u53ef\u7528\u3002",
          "subprofile.editfriends.popuptitle.showndifferentprofile":
            "\u5c06\u5bf9\u6b64\u597d\u53cb\u663e\u793a\u4e0d\u540c\u7684\u4e2a\u4eba\u8d44\u6599\u3002\u8981\u7ee7\u7eed\u5417\uff1f",
          "subprofile.editfriends.popuptitle.showthisprofile":
            "\u60a8\u6240\u9009\u62e9\u7684\u597d\u53cb\u5c06\u53ef\u4ee5\u67e5\u770b\u6b64\u4e2a\u4eba\u8d44\u6599\u3002\u8981\u7ee7\u7eed\u5417\uff1f",
          "subprofile.editfriends.popuptitle.temporaryerror":
            "\u53d1\u751f\u4e34\u65f6\u6027\u9519\u8bef\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "subprofile.editfriends.popuptitle.temporaryerrortryagain":
            "\u65e0\u6cd5\u52a0\u8f7d\u597d\u53cb\u5217\u8868\u3002\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "subprofile.editfriends.subtitle.addfriend":
            "\u6dfb\u52a0\u597d\u53cb",
          "subprofile.editfriends.title.onlyonmobileapp":
            "\u53ef\u4ee5\u5728\u667a\u80fd\u624b\u673a\u7248LINE\u4e2d\u521b\u5efa\u6216\u5220\u9664\u5b50\u4e2a\u4eba\u8d44\u6599\u3002",
          "subprofile.editfriends.title.selectprofile":
            "\u9009\u62e9\u4e2a\u4eba\u8d44\u6599",
          "subprofile.editfriends.toast.profileupdatedplural.other":
            "\u5df2\u5bf9%n\u4f4d\u597d\u53cb\u66f4\u65b0\u4e2a\u4eba\u8d44\u6599\u3002",
          "subprofile.friendsprofile.title.setyourprofile":
            "\u8bbe\u7f6e\u663e\u793a\u4e2a\u4eba\u8d44\u6599",
          "subprofile.friendsprofile.tooltip.subprofile":
            "\u8bbe\u7f6e\u5411\u6b64\u597d\u53cb\u663e\u793a\u7684\u4e2a\u4eba\u8d44\u6599\u3002",
          "subprofile.groupchatmenu.group.profile": "",
          "subprofile.groupchatmenu.tooltip.subprofile":
            "\u53ef\u66f4\u6539\u7fa4\u804a\u5929\u4e2d\u5411\u597d\u53cb\u663e\u793a\u7684\u4e2a\u4eba\u8d44\u6599",
          "subprofile.groupprofile.tooltip.subprofile":
            "\u8bbe\u7f6e\u6b64\u7fa4\u6240\u4f7f\u7528\u7684\u4e2a\u4eba\u8d44\u6599\u3002",
          "subprofile.groupsettings.button.edit": "\u8bbe\u7f6e",
          "subprofile.groupsettings.subtitle.amountofprofile.other":
            "\u5df2\u663e\u793a%n\u4e2a\u7248\u672c\u7684\u4e2a\u4eba\u8d44\u6599",
          "subprofile.profile.tooltip.onlyonmobileapp":
            "\u53ef\u4ee5\u5728\u667a\u80fd\u624b\u673a\u7248LINE\u4e2d\u521b\u5efa\u5b50\u4e2a\u4eba\u8d44\u6599\u540e\u8fdb\u884c\u8bbe\u7f6e\u3002",
          "subprofile.selectfriends.button.deselectall":
            "\u53d6\u6d88\u5168\u9009",
          "subprofile.selectfriends.button.selectall": "\u5168\u9009",
          "subprofile.selectfriends.button.selectprofile":
            "\u9009\u62e9\u4e2a\u4eba\u8d44\u6599",
          "subprofile.selectfriends.desc.selectfriends":
            "\u5b50\u4e2a\u4eba\u8d44\u6599\u4ec5\u5bf9\u597d\u53cb\u53ef\u89c1\u3002\u975e\u597d\u53cb\u7684\u7fa4\u6210\u5458\u5c06\u67e5\u770b\u60a8\u7684\u4e3b\u4e2a\u4eba\u8d44\u6599\u3002",
          "subprofile.settings.button.edit": "\u4e2a\u4eba\u8d44\u6599",
          "subprofile.settings.desc.aboutsubprofile":
            "\u5728\u7535\u8111\u7248LINE\u4e2d\u4ec5\u9650\u5bf9\u73b0\u6709\u5b50\u4e2a\u4eba\u8d44\u6599\u8fdb\u884c\u7f16\u8f91\u3002\u8bf7\u4f7f\u7528\u667a\u80fd\u624b\u673a\u7248LINE\u521b\u5efa\u6216\u5220\u9664\u5b50\u4e2a\u4eba\u8d44\u6599\u3002",
          "subprofile.settings.desc.zerocase":
            "\u5c1a\u672a\u8bbe\u7f6e\u597d\u53cb\u3002\u8bf7\u5355\u51fb\u201c\u6dfb\u52a0\u597d\u53cb\u201d\u4ee5\u8bbe\u7f6e\u6b64\u4e2a\u4eba\u8d44\u6599\u7684\u53ef\u89c1\u8303\u56f4\u3002",
          "subprofile.settings.title.app": "\u5e94\u7528",
          "subprofile.yourprofile.bannerdesc.cantsetsubprofile": "",
          "subprofile.yourprofile.bannerdesc.shownfor30days": "",
          "subprofile.yourprofile.bannertitle.expired": "",
          "subprofile.yourprofile.bannertitle.temporaryerror": "",
          "subprofile.yourprofile.button.editfriends":
            "\u7f16\u8f91\u597d\u53cb",
          "subprofile.yourprofile.desc.amountoffriend.other":
            "%n\u4f4d\u597d\u53cb\u53ef\u67e5\u770b\u6b64\u4e2a\u4eba\u8d44\u6599",
          "subprofile.yourprofile.subtitle.mainprofile":
            "\u4e3b\u4e2a\u4eba\u8d44\u6599",
          "subprofile.yourprofile.subtitle.subprofile":
            "\u5b50\u4e2a\u4eba\u8d44\u6599",
          "subprofile.yourprofile.title.editfriends":
            "\u7f16\u8f91\u597d\u53cb",
          "subprofile.yourprofile.title.yourprofile":
            "\u4e2a\u4eba\u8d44\u6599",
          "talk.addFriend.recommend.reason.group": "\u540c\u7fa4\u6210\u5458",
          "talk.addFriend.recommend.reason.group.name": "\u300c%1\u300d\u7fa4",
          "talk.addFriend.recommend.reason.lineid":
            "\u901a\u8fc7LINE ID\u5c06\u60a8\u52a0\u4e3a\u597d\u53cb",
          "talk.addFriend.recommend.reason.phone":
            "\u901a\u8fc7\u7535\u8bdd\u53f7\u7801\u5c06\u60a8\u52a0\u4e3a\u597d\u53cb",
          "talk.addFriend.recommend.reason.qrcode":
            "\u901a\u8fc7\u4e8c\u7ef4\u7801\u5c06\u60a8\u52a0\u4e3a\u597d\u53cb",
          "talk.btn.addbuddy.title": "\u6dfb\u52a0",
          "talk.btn.cancel.title": "\u53d6\u6d88",
          "talk.btn.join.title": "\u52a0\u5165",
          "talk.chatlist.chatheader.title": "\u804a\u5929",
          "talk.chatlist.floating.button.chat": "\u804a\u5929",
          "talk.chatlist.floating.button.chatandgroup":
            "\u7fa4\u6216\u804a\u5929",
          "talk.chatlist.floating.button.group": "\u7fa4",
          "talk.chatlist.floating.button.square": "OpenChat",
          "talk.chatlist.floating.createChat": "\u521b\u5efa\u804a\u5929",
          "talk.chatlist.floating.menu.chatandgroup":
            "\u5efa\u7acb\u804a\u5929\u6216\u7fa4",
          "talk.chatlist.groupheader.title":
            "\u5e26\u6709\u6210\u5458\u540d\u79f0\u201c%1\u201d\u7684\u7fa4\u7ec4",
          "talk.chatlist.menu.hide": "\u9690\u85cf",
          "talk.chatlist.menu.pin.off": "\u53d6\u6d88\u56fa\u5b9a",
          "talk.chatlist.menu.pin.on": "\u56fa\u5b9a\u804a\u5929",
          "talk.chatlist.menu.readAll": "\u6807\u4e3a\u5df2\u8bfb",
          "talk.chatlist.msgsSearchCount.few":
            "\u627e\u5230 %n \u6761\u6d88\u606f",
          "talk.chatlist.msgsSearchCount.many":
            "\u627e\u5230 %n \u6761\u6d88\u606f",
          "talk.chatlist.msgsSearchCount.one":
            "\u627e\u5230 %n \u6761\u6d88\u606f",
          "talk.chatlist.msgsSearchCount.other":
            "\u627e\u5230 %n \u6761\u6d88\u606f",
          "talk.chatlist.msgsSearchCount.plurals.other":
            "\u627e\u5230 %n \u6761\u6d88\u606f",
          "talk.chatlist.msgsSearchCount.two":
            "\u627e\u5230 %n \u6761\u6d88\u606f",
          "talk.chatlist.msgsSearchCount.zero":
            "\u627e\u5230 %n \u6761\u6d88\u606f",
          "talk.chatlist.msgsSearchHeader.title": "\u4fe1\u606f",
          "talk.chatlist.search.placeholder": "\u641c\u7d22\u804a\u5929",
          "talk.label.addbuddy.title": "\u6dfb\u52a0",
          "talk.label.alreadycontact.title":
            "\u5df2\u6dfb\u52a0\u4e3a\u597d\u53cb\u3002",
          "talk.label.blocked.buddy.title":
            '\u8be5\u5e10\u53f7\u5df2\u88ab\u60a8\u5c4f\u853d\u3002 \u8bf7\u81f3"\u8bbe\u7f6e"\u5185\u786e\u8ba4\u3002',
          "talk.label.buddies.title": "\u597d\u53cb",
          "talk.label.buddylist.title": "\u597d\u53cb",
          "talk.label.chatlist.title": "\u804a\u5929",
          "talk.label.empty.description.1":
            "\u901a\u8fc7\u201c\u641c\u7d22ID\u201d\u548c\u201c\u60a8\u53ef\u80fd\u8ba4\u8bc6\u7684\u4eba\uff1f\u201d\n\u6dfb\u52a0\u597d\u53cb\u8bd5\u8bd5\u5427\uff01",
          "talk.label.empty.description.3":
            "\u5728\u4e0a\u65b9\u7684\u641c\u7d22\u680f\u5185\u8f93\u5165\u597d\u53cb\u7684ID\uff0c\n\u5c31\u80fd\u6dfb\u52a0\u5bf9\u65b9\u4e3a\u597d\u53cb\u54e6\uff01",
          "talk.label.empty.title.1":
            "\u6765\u6dfb\u52a0\u597d\u53cb\u5427\uff01",
          "talk.label.empty.title.2":
            "\u4e0e\u597d\u53cb\u5f00\u59cb\u804a\u5929\u5427\uff01",
          "talk.label.empty.title.3":
            "\u4e00\u8d77\u53bb\u5bfb\u627e\u597d\u53cb\u3002",
          "talk.label.failed.title":
            "\u597d\u53cb\u5217\u8868\u65e0\u6cd5\u663e\u793a\u3002",
          "talk.label.failedsearch.rejected.title":
            "\u5df2\u8d85\u8fc7\u89c4\u5b9a\u7684\u641c\u7d22\u6b21\u6570\u3002\n\u6682\u65f6\u65e0\u6cd5\u4f7f\u7528ID/\u7535\u8bdd\u53f7\u7801\u641c\u7d22\u529f\u80fd\u3002",
          "talk.label.failedsearch.title":
            "\u6b64ID\u7684\u7528\u6237\u4e0d\u5b58\u5728\uff0c \u6216\u4e0d\u5141\u8bb8\u641c\u7d22\u3002\n",
          "talk.label.favorite.title": "\u6536\u85cf\u5939",
          "talk.label.groups.title": "\u7fa4",
          "talk.label.invited.title": "\u7fa4\u9080\u8bf7",
          "talk.label.newfriend.title": "\u65b0\u597d\u53cb",
          "talk.label.nosearchresult.title":
            "\u672a\u627e\u5230\u76f8\u5173\u641c\u7d22\u7ed3\u679c\u3002",
          "talk.label.placehodler.title":
            "\u4f7f\u7528\u7528\u6237\u540d\u641c\u7d22",
          "talk.label.recentFriends.title": "\u6700\u8fd1\u804a\u5929",
          "talk.label.recommendbuddyplacehodler.title": "\u641c\u7d22 ID",
          "talk.label.recommended.addFriend": "\u6dfb\u52a0\u597d\u53cb",
          "talk.label.recommended.officialAccount.title":
            "\u5b98\u65b9\u63a8\u8350",
          "talk.label.recommended.title":
            "\u60a8\u53ef\u80fd\u8ba4\u8bc6\u7684\u4eba",
          "talk.label.search.friends": "\u641c\u7d22\u597d\u53cb",
          "talk.label.search.friends.QRcode.error.invalidUser":
            "\u65e0\u6cd5\u627e\u5230\u8be5\u7528\u6237\u3002",
          "talk.label.search.friends.phoneNumber.error":
            "\u7535\u8bdd\u53f7\u7801\u4e0d\u5b58\u5728\n\u6216\u53ef\u80fd\u65e0\u6cd5\u641c\u7d22\u3002",
          "talk.label.search.friends.phoneNumber.error.notRegistered":
            "\u5148\u5728LINE\u4e0a\u6ce8\u518c\u7535\u8bdd\u53f7\u7801\uff0c\u7136\u540e\u624d\u80fd\u901a\u8fc7\u7535\u8bdd\u53f7\u7801\u641c\u7d22\u5176\u4ed6\u7528\u6237\u3002\n\u8bf7\u524d\u5f80\u667a\u80fd\u624b\u673a\u7248LINE\u7684\u201c\u8bbe\u7f6e\u201d>\u201c\u4e2a\u4eba\u8d44\u6599\u201d\uff0c\u4ee5\u6ce8\u518c\u60a8\u7684\u7535\u8bdd\u53f7\u7801\u3002",
          "talk.label.square.title": "OpenChat",
          "talk.label.thatisyou.title": "\u8fd9\u662f\u4f60\u81ea\u5df1\u5462~",
          "talk.menu.aboutgroup": "\u7f16\u8f91\u7fa4",
          "talk.menu.addfavorite": "\u6dfb\u52a0\u81f3\u6536\u85cf\u5939",
          "talk.menu.addgroup": "\u5efa\u7acb\u7fa4",
          "talk.menu.block": "\u5c4f\u853d",
          "talk.menu.call": "\u547c\u53eb",
          "talk.menu.call.video": "\u89c6\u9891\u901a\u8bdd",
          "talk.menu.call.voice": "\u8bed\u97f3\u901a\u8bdd",
          "talk.menu.editname": "\u4fee\u6539\u540d\u5b57",
          "talk.menu.exit": "\u9000\u51fa\u5e76\u5173\u95ed\u7a0b\u5e8f",
          "talk.menu.group.call": "\u5f00\u59cb\u901a\u8bdd",
          "talk.menu.help": "\u5e2e\u52a9",
          "talk.menu.hide": "\u9690\u85cf",
          "talk.menu.leavegroup": "\u9000\u51fa\u7fa4",
          "talk.menu.logout": "\u767b\u51fa",
          "talk.menu.myProfile": "\u4e2a\u4eba\u8d44\u6599",
          "talk.menu.notes": "\u8bb0\u4e8b\u672c",
          "talk.menu.posts": "\u8d44\u8baf",
          "talk.menu.rejectbuddy": "\u5c4f\u853d",
          "talk.menu.rejectgroup": "\u62d2\u7edd",
          "talk.menu.removeFavorite": "\u53d6\u6d88\u6536\u85cf",
          "talk.menu.removetalkitem": "\u5220\u9664",
          "talk.menu.sendContact": "\u5171\u4eab\u8054\u7cfb\u4eba",
          "talk.menu.setting": "\u8bbe\u7f6e",
          "talk.menu.showProfile": "\u4e2a\u4eba\u8d44\u6599",
          "talk.menu.starttalk": "\u5f00\u59cb\u804a\u5929",
          "talk.menu.talk": "\u804a\u5929",
          "talk.menu.talkbuddy": "\u804a\u5929",
          "talk.menu.talkgroup": "\u804a\u5929",
          "talk.menu.voip": "\u8bed\u97f3\u901a\u8bdd",
          "talk.msg.addbuddy.failed": "\u6dfb\u52a0\u5931\u8d25\u3002",
          "talk.msg.addrecommended.failed": "\u6dfb\u52a0\u5931\u8d25\u3002",
          "talk.msg.block.failed":
            "\u65e0\u6cd5\u5c4f\u853d\u8be5\u597d\u53cb\u3002",
          "talk.msg.blockrecommended.failed":
            "\u65e0\u6cd5\u5c4f\u853d\u8be5\u597d\u53cb\u3002",
          "talk.msg.del.1.n":
            "\u4e00\u65e6\u4ece\u804a\u5929\u5217\u8868\u4e2d\u5220\u9664\u6b64\u804a\u5929\uff0c\u60a8\u5c06\u9000\u51fa\u804a\u5929\u5e76\u65e0\u6cd5\u518d\u67e5\u770b\u804a\u5929\u8bb0\u5f55\u3002\u786e\u5b9a\u8981\u5220\u9664\u6b64\u804a\u5929\u5417\uff1f",
          "talk.msg.del.room":
            "\u4e00\u65e6\u4ece\u804a\u5929\u5217\u8868\u4e2d\u5220\u9664\u6b64\u804a\u5929\uff0c\u804a\u5929\u8bb0\u5f55\u5c06\u65e0\u6cd5\u6062\u590d\u3002\u786e\u5b9a\u8981\u5220\u9664\u6b64\u804a\u5929\u5417\uff1f",
          "talk.msg.favorite.failed":
            "\u6dfb\u52a0\u81f3\u6536\u85cf\u5939\u5931\u8d25\u3002",
          "talk.msg.favorite.overflow.failed":
            "\u60a8\u6700\u591a\u53ef\u6dfb\u52a0100\u4f4d\u7528\u6237\u81f3\u6536\u85cf\u5939",
          "talk.msg.hide.failed": "\u65e0\u6cd5\u9690\u85cf\u5e10\u53f7\u3002",
          "talk.msg.joininvitedgroup.failed":
            "\u65e0\u6cd5\u52a0\u5165\u8be5\u7fa4\u3002",
          "talk.msg.leavegroup.failed":
            "\u65e0\u6cd5\u9000\u51fa\u8be5\u7fa4\u3002",
          "talk.msg.no.room":
            "\u8be5\u804a\u5929\u5ba4\u5df2\u88ab\u5220\u9664\u3002",
          "talk.msg.rejectinvitedgroup.failed":
            "\u60a8\u65e0\u6cd5\u62d2\u7edd\u8be5\u9080\u8bf7\u3002",
          "talk.network.unreachable": "\u7f51\u7edc\u4e0d\u7a33\u5b9a",
          "talk.search.hint": "\u641c\u7d22\u4fe1\u606f\u548c\u59d3\u540d",
          "talk.search.label.chatMember": "\u641c\u7d22\u59d3\u540d",
          "talk.search.label.displayName": "\u6309\u59d3\u540d\u641c\u7d22",
          "talk.search.label.member.all": "Members (%1)",
          "talk.search.label.member.selected":
            "\u5df2\u9009\u62e9%1\u4f4d\u6210\u5458",
          "talk.search.label.reSearch":
            "\u5728\u8fd9\u4e9b\u7ed3\u679c\u4e2d\u641c\u7d22",
          "talk.search.label.reSearch.noResult":
            "\u65e0\u6cd5\u7ee7\u7eed\u641c\u7d22\u3002 ",
          "talk.search.label.textMessage": "\u641c\u7d22\u4fe1\u606f",
          "talk.tooltip.delete": "\u5220\u9664",
          "theme.mode.guide.dark.desc":
            "\u663e\u793a\u6a21\u5f0f\u73b0\u5df2\u8bbe\u4e3a\u6df1\u8272\u6a21\u5f0f\u3002 \u60a8\u53ef\u4ee5\u524d\u5f80\u201c\u8bbe\u7f6e\u201d>\u201c\u57fa\u672c\u8bbe\u7f6e\u201d>\u201c\u663e\u793a\u6a21\u5f0f\u201d\u8fdb\u884c\u66f4\u6539\u3002",
          "theme.mode.guide.desc":
            "\u663e\u793a\u6a21\u5f0f\u5df2\u6839\u636e\u60a8\u7684\u7cfb\u7edf\u8bbe\u7f6e\u81ea\u52a8\u5e94\u7528\u3002\u60a8\u53ef\u4ee5\u524d\u5f80\u201c\u8bbe\u7f6e\u201d>\u201c\u57fa\u672c\u8bbe\u7f6e\u201d>\u201c\u663e\u793a\u6a21\u5f0f\u201d\u8fdb\u884c\u5207\u6362\u3002",
          "theme.mode.guide.light.desc":
            "\u53ef\u5c06LINE\u7684\u663e\u793a\u6a21\u5f0f\u8bbe\u7f6e\u4e3a\u6df1\u8272\u6a21\u5f0f\u3002\u60a8\u53ef\u4ee5\u524d\u5f80\u201c\u8bbe\u7f6e\u201d>\u201c\u57fa\u672c\u8bbe\u7f6e\u201d>\u201c\u663e\u793a\u6a21\u5f0f\u201d\u8fdb\u884c\u66f4\u6539\u3002",
          "theme.mode.guide.title":
            "\u4f53\u9a8c\u5168\u65b0\u663e\u793a\u6a21\u5f0f\u3002",
          "timeline.alert.attach":
            "\u9644\u4ef6\u6570\u91cf\u6700\u591a\u4e3a1\u4e2a\u3002",
          "timeline.alert.attach.unavailable":
            "\u60a8\u7684\u9644\u4ef6\u5305\u542b\u4e00\u4e2a\u4e0d\u80fd\u6dfb\u52a0\u5230\u5e16\u5b50\u7684\u6587\u4ef6\u3002 ",
          "timeline.alert.attachphoto":
            "\u60a8\u4e00\u6b21\u6700\u591a\u53ef\u4e0a\u4f209\u5f20\u56fe\u7247\u3002",
          "timeline.alert.commentmaxcount":
            "\u8bf7\u8f93\u51651000\u5b57\u4ee5\u5185\u6587\u5b57",
          "timeline.alert.confirm.close":
            "\u60a8\u7684\u8bb0\u4e8b\u672c\u5c1a\u672a\u521b\u5efa\u5b8c\u6210\u3002\u786e\u5b9a\u8981\u653e\u5f03\u521b\u5efa\u5e76\u79bb\u5f00\u5417\uff1f",
          "timeline.alert.confirm.deletecomment":
            "\u662f\u5426\u5220\u9664\u5df2\u9009\u62e9\u7684\u8bc4\u8bba\uff1f",
          "timeline.alert.confirm.deletepost":
            "\u5220\u9664\u540e\uff0c \u8bc4\u8bba\u4e5f\u5c06\u5168\u90e8\u5220\u9664\u3002\n\u786e\u5b9a\u5220\u9664\u5417\uff1f",
          "timeline.alert.confirm.deletethumb":
            "\u662f\u5426\u8981\u5220\u9664\u56fe\u7247\uff1f",
          "timeline.alert.confirm.replacepost":
            "\u60a8\u6b63\u5728\u521b\u5efa\u5e16\u5b50\u3002\u662f\u5426\u653e\u5f03\u6b64\u5e16\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a\u65b0\u5e16\u5b50\uff1f",
          "timeline.alert.deletedpost":
            "\u8be5\u5e16\u5b50\u5df2\u88ab\u5220\u9664!",
          "timeline.alert.discard": "\u653e\u5f03",
          "timeline.alert.error.group.delete":
            "\u6240\u9009\u516c\u5f00\u5217\u8868\u5df2\u88ab\u5220\u9664\u3002\n\u8bf7\u91cd\u65b0\u9009\u62e9\u3002",
          "timeline.alert.error.group.rights":
            "\u60a8\u6ca1\u6709\u6240\u9009\u7fa4\u7ec4\u7684\u6743\u9650\u3002\n\u8bf7\u91cd\u65b0\u9009\u62e9\u3002",
          "timeline.alert.fileMaxcount":
            "\u60a8\u4e00\u6b21\u6700\u591a\u53ef\u4e0a\u4f20%n\u4e2a\u56fe\u7247\u6216\u89c6\u9891\u3002",
          "timeline.alert.fileMaxcount.plurals.other":
            "\u60a8\u4e00\u6b21\u6700\u591a\u53ef\u6dfb\u52a0%n\u4e2a\u56fe\u7247\u6216\u89c6\u9891\u3002",
          "timeline.alert.invalidcoverimage":
            "\u5f88\u62b1\u6b49\uff0c\u65e0\u6cd5\u53d1\u9001\u8be5\u6587\u4ef6\u3002",
          "timeline.alert.mediaMaxcount":
            "\u6700\u591a\u53ef\u4e0a\u4f2020\u4e2a\u8d34\u56fe\u3001\u56fe\u7247\u6216\u89c6\u9891\u3002",
          "timeline.alert.official.addfriend":
            "\u5c06\u6b64\u5b98\u65b9\u5e10\u53f7\u6dfb\u52a0\u4e3a\u597d\u53cb\uff0c\n\u5373\u53ef\u6dfb\u52a0\u8868\u60c5\u8bc4\u8bba\u53ca\u7559\u8a00\u3002\n\u662f\u5426\u6dfb\u52a0\u4e3a\u597d\u53cb? ",
          "timeline.alert.official.addfriend.share":
            "\u5c06\u6b64\u5b98\u65b9\u5e10\u53f7\u6dfb\u52a0\u4e3a\u597d\u53cb\u540e\uff0c\u5373\u53ef\u4e0e\u597d\u53cb\u4eec\u5206\u4eab\u5176\u5e16\u5b50\u3002\u662f\u5426\u8981\u6dfb\u52a0\u6b64\u5e10\u53f7\uff1f",
          "timeline.alert.official.unblockfriend":
            "\u8be5\u5b98\u65b9\u5e10\u53f7\u5df2\u88ab\u5c4f\u853d\u3002\n\u89e3\u9664\u5c4f\u853d\u5373\u53ef\u6dfb\u52a0\u8868\u60c5\u8bc4\u8bba\u53ca\u7559\u8a00\u3002\n\u662f\u5426\u89e3\u9664\u5c4f\u853d\uff1f",
          "timeline.alert.official.unblockfriend.share":
            "\u6b64\u5b98\u65b9\u5e10\u53f7\u5df2\u88ab\u963b\u6b62\u3002\n\u5982\u679c\u60a8\u89e3\u9664\u963b\u6b62\u6b64\u5e10\u53f7\uff0c\u60a8\u5c06\u80fd\u591f\u4e0e\u597d\u53cb\u4eec\u5206\u4eab\u5176\u5e16\u5b50\u3002\n\u662f\u5426\u8981\u89e3\u9664\u963b\u6b62\u6b64\u5e10\u53f7\uff1f",
          "timeline.alert.photoMaxsize":
            "\u6700\u591a\u53ef\u6dfb\u52a020MB\u7684\u56fe\u7247\u3002\n",
          "timeline.alert.photolimit":
            "\u6bcf\u5f20\u7167\u7247\u4e0d\u8d85\u8fc720MB",
          "timeline.alert.photolimit.format": "(.jpg/.jpeg/.png/.bmp/.gif)",
          "timeline.alert.photomaxcount":
            "\u6700\u591a\u53ea\u80fd\u6dfb\u52a0%1\u5f20\u56fe\u7247\u3002",
          "timeline.alert.stickerMaxcount":
            "\u60a8\u4e00\u6b21\u6700\u591a\u53ef\u4e0a\u4f20%n\u4e2a\u8d34\u56fe\u3002",
          "timeline.alert.stickerMaxcount.plurals.other":
            "\u60a8\u4e00\u6b21\u6700\u591a\u53ef\u6dfb\u52a0%n\u4e2a\u8d34\u56fe\u3002",
          "timeline.alert.stickerUploadRule":
            "\u6bcf\u4e2a\u5e16\u5b50\u53ea\u80fd\u6dfb\u52a01\u4e2a\u8bed\u97f3\u8d34\u56fe\u6216\u52a8\u6001\u8d34\u56fe\uff0c\u4e14\u4e0d\u80fd\u540c\u65f6\u6dfb\u52a0\u5e38\u89c4\u8d34\u56fe\u3002",
          "timeline.alert.textmaxcount":
            "\u8bf7\u8f93\u516510,000\u5b57\u4ee5\u5185\u6587\u5b57",
          "timeline.alert.unblockfriend":
            "\u6b64\u5e10\u53f7\u5df2\u88ab\u5c4f\u853d\u3002\u89e3\u9664\u5c4f\u853d\u5373\u53ef\u70b9\u8d5e\u6216\u8bc4\u8bba\u3002\u8981\u89e3\u9664\u5c4f\u853d\u5417\uff1f",
          "timeline.alert.unblockfriend.share":
            "\u6b64\u5e10\u53f7\u5df2\u88ab\u5c4f\u853d\u3002\u89e3\u9664\u5c4f\u853d\u5373\u53ef\u5206\u4eab\u5176\u5e16\u5b50\u3002\u8981\u89e3\u9664\u5c4f\u853d\u5417\uff1f",
          "timeline.alert.urlUploadRule":
            "\u53ef\u4ee5\u6dfb\u52a01\u6761\u94fe\u63a5\u3002",
          "timeline.alert.videoMaxLength":
            "\u6700\u591a\u53ef\u6dfb\u52a05\u5206\u949f\u7684\u89c6\u9891\u3002\n",
          "timeline.alert.videoMaxsize":
            "\u6bcf\u4e2a\u89c6\u9891\u4e0d\u80fd\u8d85\u8fc7200MB\u3002\n",
          "timeline.alert.videolength":
            "\u957f\u5ea6\u8d85\u8fc75\u5206\u949f\u7684\u89c6\u9891\u4e0d\u80fd\u6dfb\u52a0\u3002",
          "timeline.alert.videolimit":
            "\u6bcf\u4e2a\u89c6\u9891\u4e0d\u8d85\u8fc7200MB\u62165\u5206\u949f",
          "timeline.alert.videolimit.format":
            "(.mp4/.avi/.mkv/.mpg/.mpeg/.mov)",
          "timeline.alert.videosize":
            "\u9644\u4ef6\u6700\u5927\u4e3a200MB\u3002\n",
          "timeline.alert.waitcommentdone":
            "\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "timeline.already.remove.comment":
            "\u672c\u7559\u8a00\u5df2\u88ab\u5220\u9664\uff01",
          "timeline.attachlink.delete": "\u5220\u9664",
          "timeline.attachlink.hint":
            "\u8bf7\u8f93\u5165\u94fe\u63a5\u5730\u5740\u3002",
          "timeline.attachlink.title": "\u8f93\u5165\u94fe\u63a5",
          "timeline.comment.approval":
            "\u7559\u8a00\u9700\u8981\u7ba1\u7406\u5458\u5ba1\u67e5\u540e\u663e\u793a\u3002",
          "timeline.comment.blinddbyadmin":
            "\u8bc4\u8bba\u5df2\u88ab\u7ba1\u7406\u5458\u5220\u9664\u3002",
          "timeline.comment.delete": "\u5220\u9664",
          "timeline.comment.hint": "\u8bf7\u5199\u4e0b\u60a8\u7684\u8bc4\u8bba",
          "timeline.comment.like": "\u8d5e",
          "timeline.comment.like.cancel": "\u53d6\u6d88\u8d5e",
          "timeline.comment.loadprevious":
            "\u663e\u793a\u4e4b\u524d\u7684\u8bc4\u8bba",
          "timeline.comment.photo.retry":
            "\u8bfb\u53d6\u5931\u8d25\u3002\n\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "timeline.comment.reply": "\u56de\u590d",
          "timeline.comment.stickerorphoto":
            "\u8bc4\u8bba\u4e0d\u80fd\u5305\u542b\u4e00\u5f20\u4ee5\u4e0a\u7684\u8d34\u56fe\u6216\u7167\u7247\u3002",
          "timeline.comment.write": "\u5206\u4eab",
          "timeline.common.cancel": "\u53d6\u6d88",
          "timeline.common.ok": "\u786e\u8ba4",
          "timeline.common.share": "\u5206\u4eab",
          "timeline.date.beforeHour.plurals.few": "%n\u5c0f\u65f6\u524d",
          "timeline.date.beforeHour.plurals.many": "%n\u5c0f\u65f6\u524d",
          "timeline.date.beforeHour.plurals.one": "%n\u5c0f\u65f6\u524d",
          "timeline.date.beforeHour.plurals.other": "%n\u5c0f\u65f6\u524d",
          "timeline.date.beforeHour.plurals.two": "%n\u5c0f\u65f6\u524d",
          "timeline.date.beforeHour.plurals.zero": "%n\u5c0f\u65f6\u524d",
          "timeline.date.beforeMinute.plurals.few": "%n\u5206\u949f\u524d",
          "timeline.date.beforeMinute.plurals.many": "%n\u5206\u949f\u524d",
          "timeline.date.beforeMinute.plurals.one": "%n\u5206\u949f\u524d",
          "timeline.date.beforeMinute.plurals.other": "%n\u5206\u949f\u524d",
          "timeline.date.beforeMinute.plurals.two": "%n\u5206\u949f\u524d",
          "timeline.date.beforeMinute.plurals.zero": "%n\u5206\u949f\u524d",
          "timeline.date.beforeYesterday": "\u524d\u5929 %1",
          "timeline.date.justNow": "\u521a\u521a",
          "timeline.date.yesterday": "\u6628\u5929 %1",
          "timeline.emptypost.networkerror":
            "\u7f51\u7edc\u8fde\u63a5\u53d1\u751f\u9519\u8bef\uff0c \u6b64\u9879\u64cd\u4f5c\u6ca1\u6709\u5b8c\u6210\u3002\n\u8bf7\u91cd\u8bd5\u3002",
          "timeline.emptypost.other":
            "\u7b49\u5019\u60a8\u5206\u4eab\u7cbe\u5f69\u77ac\u95f4\uff01",
          "timeline.emptypost.unsupported":
            "\u672c\u5b98\u65b9\u8d26\u53f7\u4ec5\u5411\u60a8\u53d1\u9001\u804a\u5929\u6d88\u606f\u3002",
          "timeline.error.and.retry":
            "\u7cfb\u7edf\u53d1\u751f\u9519\u8bef\uff0c\u6b64\u9879\u64cd\u4f5c\u6ca1\u6709\u5b8c\u6210\u3002\n\u8bf7\u91cd\u8bd5\u3002",
          "timeline.error.attach.popupSticker":
            "\u6b64\u8d34\u56fe\u5c06\u4ee5\u9759\u6001\u8d34\u56fe\u65b9\u5f0f\u6dfb\u52a0\uff0c\u4e0d\u542b\u52a8\u753b\u548c\u58f0\u97f3\u3002",
          "timeline.error.cannot.access.file":
            "\u7531\u4e8e\u539f\u59cb\u7167\u7247\u5df2\u4ece\u7535\u8111\u5220\u9664\n\u6216\u8fbe\u5230\u4e86\u6700\u5927\u4e0a\u4f20\u5bb9\u91cf\u9650\u5236(20 MB)\uff0c\n\u56e0\u6b64\u65e0\u6cd5\u4e0a\u4f20\u90e8\u5206\u7167\u7247\u3002",
          "timeline.error.list.load.retry":
            "\u83b7\u53d6\u8d44\u6599\u5931\u8d25\u2026\n\u8bf7\u91cd\u8bd5\u3002",
          "timeline.footer.comment": "\u8bc4\u8bba",
          "timeline.footer.like": "\u8d5e",
          "timeline.groupPanel.startgroup":
            "\u521b\u5efa\u4e00\u4e2a\u7fa4\u5427\uff01",
          "timeline.groupPanel.startgroup.desc":
            "\u60a8\u53ef\u4ee5\u7f16\u5199\u8bb0\u4e8b\u672c\u548c\u521b\u5efa\u76f8\u518c\u3002",
          "timeline.label.nosearchresult.title":
            "\u672a\u627e\u5230\u76f8\u5173\u641c\u7d22\u7ed3\u679c\u3002",
          "timeline.like.count.other": "%1\u4e2a\u8d5e",
          "timeline.loading.examine.time": "\u7ef4\u62a4\u65f6\u95f4",
          "timeline.loading.examine.timeline":
            "%1\u6b63\u5728\u8fdb\u884c\u7cfb\u7edf\u7ef4\u62a4\u3002",
          "timeline.loading.neednewversion":
            "\u672c\u9875\u9700\u8981\u5728\u6700\u65b0\u7248\u672c\u7684LINE \u4e2d\u624d\u80fd\u6b63\u5e38\u663e\u793a\u3002",
          "timeline.loading.networkerror":
            "\u7f51\u7edc\u8fde\u63a5\u53d1\u751f\u9519\u8bef\uff0c \u6b64\u9879\u64cd\u4f5c\u6ca1\u6709\u5b8c\u6210\u3002\n\u8bf7\u91cd\u8bd5\u3002",
          "timeline.loading.retry": "\u66f4\u65b0",
          "timeline.menu.sharetotalk": "\u53d1\u9001\u5230\u804a\u5929\u5ba4",
          "timeline.mergedposts.detail": "\u8be6\u7ec6",
          "timeline.no": "\u4e0d\u662f",
          "timeline.note.popupdesc.sharenote":
            "\u8981\u5206\u4eab\u6b64\u8bb0\u4e8b\u672c\u5230\u804a\u5929\u5417\uff1f",
          "timeline.noti.content.NC_1001_1":
            "%1\u6dfb\u52a0\u4e86\u4e00\u4e2a\u65b0\u8bb0\u4e8b\u672c\u3002",
          "timeline.noti.content.NC_1001_2":
            "%1\u548c%2\u6dfb\u52a0\u4e86\u65b0\u8bb0\u4e8b\u672c\u3002",
          "timeline.noti.content.NC_1001_3":
            "%1\u3001%2\u548c\u5176\u4ed6 %3 \u4eba\u6dfb\u52a0\u4e86\u65b0\u8bb0\u4e8b\u672c\u3002",
          "timeline.noti.content.NC_1002_1":
            "%1\u8bc4\u8bba\u4e86\u60a8\u7684\u5e16\u5b50\u3002",
          "timeline.noti.content.NC_1002_2":
            "%1\u548c%2\u8bc4\u8bba\u4e86\u60a8\u7684\u5e16\u5b50\u3002",
          "timeline.noti.content.NC_1002_3":
            "%1\u3001%2\u548c\u5176\u4ed6 %3 \u4eba\u8bc4\u8bba\u4e86\u60a8\u7684\u5e16\u5b50\u3002",
          "timeline.noti.content.NC_1003_1":
            "%1 \u8bc4\u8bba\u4e86\u6211\u3002",
          "timeline.noti.content.NC_1003_2":
            "%1 \u548c %2 \u8bc4\u8bba\u4e86\u6211\u3002",
          "timeline.noti.content.NC_1003_3":
            "%1\u3001%2 \u548c\u5176\u4ed6 %3 \u4eba\u8bc4\u8bba\u4e86\u6211\u3002",
          "timeline.noti.content.NC_1004_1":
            "%1\u5bf9\u60a8\u7684\u5e16\u5b50\u70b9\u4e86\u8d5e\u3002",
          "timeline.noti.content.NC_1004_2":
            "%1\u548c%2\u5bf9\u60a8\u7684\u5e16\u5b50\u70b9\u4e86\u8d5e\u3002",
          "timeline.noti.content.NC_1004_3":
            "%1\u3001%2\u548c\u5176\u4ed6%3\u4eba\u5bf9\u60a8\u7684\u5e16\u5b50\u70b9\u4e86\u8d5e\u3002",
          "timeline.noti.content.NC_2001_1":
            "%1 \u521b\u5efa\u4e86\u65b0\u76f8\u518c\u3002",
          "timeline.noti.content.NC_2001_2":
            "%1 \u548c %2 \u521b\u5efa\u4e86\u65b0\u76f8\u518c\u3002",
          "timeline.noti.content.NC_2001_3":
            "%1\u3001%2 \u548c\u5176\u4ed6 %3 \u4eba\u521b\u5efa\u4e86\u65b0\u76f8\u518c\u3002",
          "timeline.noti.content.NC_2002_1":
            "%1 \u5411\u76f8\u518c\u6dfb\u52a0\u4e86\u7167\u7247\u3002",
          "timeline.noti.content.NC_2002_2":
            "%1 \u548c %2 \u5411\u76f8\u518c\u6dfb\u52a0\u4e86\u7167\u7247\u3002",
          "timeline.noti.content.NC_2002_3":
            "%1\u3001%2 \u548c\u5176\u4ed6 %3 \u4eba\u5411\u76f8\u518c\u6dfb\u52a0\u4e86\u7167\u7247\u3002",
          "timeline.noti.content.NC_3001_1":
            "%1\u8bc4\u8bba\u4e86\u60a8\u7684\u5e16\u5b50\u3002",
          "timeline.noti.content.NC_3001_2":
            "%1\u548c%2\u8bc4\u8bba\u4e86\u60a8\u7684\u5e16\u5b50\u3002",
          "timeline.noti.content.NC_3001_3":
            "%1\u3001%2\u548c\u5176\u4ed6 %3 \u4eba\u8bc4\u8bba\u4e86\u60a8\u7684\u5e16\u5b50\u3002",
          "timeline.noti.content.NC_3002_1":
            "%1 \u8bc4\u8bba\u4e86\u6211\u3002",
          "timeline.noti.content.NC_3002_2":
            "%1 \u548c %2 \u8bc4\u8bba\u4e86\u6211\u3002",
          "timeline.noti.content.NC_3002_3":
            "%1\u3001%2 \u548c\u5176\u4ed6 %3 \u4eba\u8bc4\u8bba\u4e86\u6211\u3002",
          "timeline.noti.content.NC_3003_1":
            "%1\u5bf9\u60a8\u7684\u5e16\u5b50\u70b9\u4e86\u8d5e\u3002",
          "timeline.noti.content.NC_3003_2":
            "%1\u548c%2\u5bf9\u60a8\u7684\u5e16\u5b50\u70b9\u4e86\u8d5e\u3002",
          "timeline.noti.content.NC_3003_3":
            "%1\u3001%2\u548c\u5176\u4ed6%3\u4eba\u5bf9\u60a8\u7684\u5e16\u5b50\u70b9\u4e86\u8d5e\u3002",
          "timeline.noti.content.NC_4001_1":
            "%1 \u52a0\u5165\u4e86\u60a8\u7684\u7fa4\u3002",
          "timeline.noti.content.NC_4002_1":
            "%1\u5206\u4eab\u4e86\u6211\u7684\u5e16\u5b50\u3002",
          "timeline.noti.content.NC_UPDATE":
            "\u66f4\u65b0 LINE \u67e5\u770b\u8be5\u901a\u77e5\u3002",
          "timeline.noti.empty": "\u6ca1\u6709\u65b0\u901a\u77e5",
          "timeline.noti.error":
            "\u901a\u77e5\u52a0\u8f7d\u5931\u8d25\u3002\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002\n ",
          "timeline.noti.home": "\u4e3b\u9875",
          "timeline.oamerge.feed.title": "\u60a8\u7684\u5b98\u65b9\u5e10\u53f7",
          "timeline.oamerge.title": "\u60a8\u7684\u5b98\u65b9\u5e10\u53f7",
          "timeline.officialprofile.networkerror":
            "\u7f51\u7edc\u8fde\u63a5\u53d1\u751f\u9519\u8bef\uff0c \u6b64\u9879\u64cd\u4f5c\u6ca1\u6709\u5b8c\u6210\u3002\n\u8bf7\u91cd\u8bd5\u3002",
          "timeline.officialprofile.title": "\u57fa\u672c\u8d44\u6599",
          "timeline.original.open": "\u67e5\u770b\u539f\u59cb\u9801\u9762",
          "timeline.poppost.counttime.hour.other": "\u5269\u4f59%n\u5c0f\u65f6",
          "timeline.poppost.counttime.hour.plurals.few":
            "\u5269\u4f59%n\u5c0f\u65f6",
          "timeline.poppost.counttime.hour.plurals.many":
            "\u5269\u4f59%n\u5c0f\u65f6",
          "timeline.poppost.counttime.hour.plurals.one":
            "\u5269\u4f59%n\u5c0f\u65f6",
          "timeline.poppost.counttime.hour.plurals.other":
            "\u5269\u4f59%n\u5c0f\u65f6",
          "timeline.poppost.counttime.hour.plurals.two":
            "\u5269\u4f59%n\u5c0f\u65f6",
          "timeline.poppost.counttime.hour.plurals.zero":
            "\u5269\u4f59%n\u5c0f\u65f6",
          "timeline.poppost.counttime.min.other": "\u5269\u4f59%n\u5206\u949f",
          "timeline.poppost.counttime.min.plurals.few":
            "\u5269\u4f59%n\u5206\u949f",
          "timeline.poppost.counttime.min.plurals.many":
            "\u5269\u4f59%n\u5206\u949f",
          "timeline.poppost.counttime.min.plurals.one":
            "\u5269\u4f59%n\u5206\u949f",
          "timeline.poppost.counttime.min.plurals.other":
            "\u5269\u4f59%n\u5206\u949f",
          "timeline.poppost.counttime.min.plurals.two":
            "\u5269\u4f59%n\u5206\u949f",
          "timeline.poppost.counttime.min.plurals.zero":
            "\u5269\u4f59%n\u5206\u949f",
          "timeline.poppost.counttime.soon": "\u5269\u4f591\u5206\u949f",
          "timeline.poppost.tooltip.hour.other":
            "\u6b64\u5e16\u5b50\u5c06\u5728%n\u5c0f\u65f6\u540e\u5220\u9664\u3002",
          "timeline.poppost.tooltip.hour.plurals.few":
            "\u6b64\u5e16\u5b50\u5c06\u5728%n\u5c0f\u65f6\u540e\u5220\u9664\u3002",
          "timeline.poppost.tooltip.hour.plurals.many":
            "\u6b64\u5e16\u5b50\u5c06\u5728%d\u5c0f\u65f6\u540e\u5220\u9664\u3002",
          "timeline.poppost.tooltip.hour.plurals.one":
            "\u6b64\u5e16\u5b50\u5c06\u5728%n\u5c0f\u65f6\u540e\u5220\u9664\u3002",
          "timeline.poppost.tooltip.hour.plurals.other":
            "\u6b64\u5e16\u5b50\u5c06\u5728%n\u5c0f\u65f6\u540e\u5220\u9664\u3002",
          "timeline.poppost.tooltip.hour.plurals.two":
            "\u6b64\u5e16\u5b50\u5c06\u5728%n\u5c0f\u65f6\u540e\u5220\u9664\u3002",
          "timeline.poppost.tooltip.hour.plurals.zero":
            "\u6b64\u5e16\u5b50\u5c06\u5728%n\u5c0f\u65f6\u540e\u5220\u9664\u3002",
          "timeline.poppost.tooltip.min.other":
            "\u6b64\u5e16\u5b50\u5c06\u5728%n\u5206\u949f\u540e\u5220\u9664\u3002",
          "timeline.poppost.tooltip.min.plurals.few":
            "\u6b64\u5e16\u5b50\u5c06\u5728%n\u5206\u949f\u540e\u5220\u9664\u3002",
          "timeline.poppost.tooltip.min.plurals.many":
            "\u6b64\u5e16\u5b50\u5c06\u5728%n\u5206\u949f\u540e\u5220\u9664\u3002",
          "timeline.poppost.tooltip.min.plurals.one":
            "\u6b64\u5e16\u5b50\u5c06\u5728%n\u5206\u949f\u540e\u5220\u9664\u3002",
          "timeline.poppost.tooltip.min.plurals.other":
            "\u6b64\u5e16\u5b50\u5c06\u5728%n\u5206\u949f\u540e\u5220\u9664\u3002",
          "timeline.poppost.tooltip.min.plurals.two":
            "\u6b64\u5e16\u5b50\u5c06\u5728%n\u5206\u949f\u540e\u5220\u9664\u3002",
          "timeline.poppost.tooltip.min.plurals.zero":
            "\u6b64\u5e16\u5b50\u5c06\u5728%n\u5206\u949f\u540e\u5220\u9664\u3002",
          "timeline.poppost.tooltip.soon":
            "\u6b64\u5e16\u5b50\u5c06\u57281\u5206\u949f\u540e\u5220\u9664\u3002",
          "timeline.post.attach.drag.guide":
            "\u60a8\u53ef\u4ee5\u62d6\u653e\u4ee5\u6dfb\u52a0\u7167\u7247\u6216\u89c6\u9891\u3002",
          "timeline.post.attach.drag.guide.premium":
            "\u60a8\u53ef\u4ee5\u62d6\u653e\u4ee5\u6dfb\u52a0\u7167\u7247\u3002",
          "timeline.post.attach.draghere":
            "\u62d6\u653e\u4ee5\u6dfb\u52a0\u7167\u7247\u6216\u89c6\u9891",
          "timeline.post.attach.draghere.premium":
            "\u62d6\u653e\u4ee5\u6dfb\u52a0\u7167\u7247",
          "timeline.post.delete": "\u5220\u9664",
          "timeline.post.deleted":
            "\u8be5\u5e16\u5b50\u5df2\u88ab\u5220\u9664\u3002",
          "timeline.post.deletedbyadmin":
            "\u8be5\u5e16\u5b50\u5df2\u88ab\u670d\u52a1\u7ba1\u7406\u5458\u5220\u9664\u3002",
          "timeline.post.done": "\u5b8c\u6210",
          "timeline.post.edit": "\u7f16\u8f91",
          "timeline.post.edit.desc":
            "\u8bb0\u4e8b\u672c\u7684\u7f16\u8f91\u5185\u5bb9\u5c1a\u672a\u4fdd\u5b58\u3002\u786e\u5b9a\u8981\u653e\u5f03\u4fdd\u5b58\u5e76\u79bb\u5f00\u5417\uff1f",
          "timeline.post.friends": "%1\u7684LINE\u597d\u53cb",
          "timeline.post.friends.detail":
            "\u6b64\u5e16\u5b50\u53ea\u53ef\u7531%1\u7684 LINE \u597d\u53cb\u9605\u8bfb\u3002\n",
          "timeline.post.grid.more": "+%n",
          "timeline.post.hashtag": "\u6807\u7b7e",
          "timeline.post.hashtag.guide.title":
            "\u8bd5\u8bd5\u6dfb\u52a0#\u6807\u7b7e\uff01",
          "timeline.post.hashtag.results.related": "\u76f8\u5173\u6807\u7b7e",
          "timeline.post.hint":
            "\u6709\u4ec0\u4e48\u65b0\u9c9c\u4e8b\u513f\uff1f",
          "timeline.post.keep": "\u4fdd\u7559",
          "timeline.post.likeshare.cancel": "\u53d6\u6d88\u5206\u4eab",
          "timeline.post.likeshare.canceled":
            "\u5df2\u53d6\u6d88\u6b64\u5e16\u5b50\u7684\u5206\u4eab\u3002",
          "timeline.post.likeshare.done":
            "\u5df2\u70b9\u201c\u8d5e\uff01\u201d\u5206\u4eab\u3002 ",
          "timeline.post.mention.alert":
            "\u6700\u591a\u53ef\u4ee5\u63d0\u53ca20\u4e2a\u4eba",
          "timeline.post.mention.empty.description":
            "\"<![CDATA[\u8f93\u5165<font color='#4166b1'>@\u597d\u53cb\u7684\u540d\u5b57</font>\u5373\u53ef\u6807\u6ce8\u60a8\u7684\u597d\u53cb\u3002\n\u8fd9\u4e9b\u597d\u53cb\u4f1a\u7acb\u5373\u6536\u5230\u901a\u77e5\u5e76\u67e5\u770b\u60a8\u7684\u5e16\u5b50\u3002]]>\"",
          "timeline.post.mention.empty.title":
            "\u4f7f\u7528@\u7b26\u53f7\u63d0\u53ca\u597d\u53cb\uff01",
          "timeline.post.mention.setting.edit.alert":
            "\u5982\u679c\u60a8\u66f4\u6539\u8be5\u5e16\u5b50\u7684\u9690\u79c1\u8bbe\u7f6e\uff0c\u4e0b\u5217\u7528\u6237\u5c06\u65e0\u6cd5\u518d\u770b\u5230\u5b83\u3002\u662f\u5426\u7ee7\u7eed\uff1f",
          "timeline.post.newpost": "\u65b0\u5e16\u5b50",
          "timeline.post.onlyme": "\u4ec5\u81ea\u5df1\u53ef\u89c1",
          "timeline.post.public": "\u5bf9\u6240\u6709\u4eba\u516c\u5f00",
          "timeline.post.public.desc":
            "\u4efb\u4f55\u4eba\u90fd\u80fd\u770b\u5230\u516c\u5f00\u7684\u5e16\u5b50\u3002",
          "timeline.post.public.sharetotimeline":
            "\u200b\u5206\u4eab\u81f3\u52a8\u6001\u6d88\u606f",
          "timeline.post.scope.group":
            "\u53ea\u6709\u6b64\u7fa4\u7ec4\u7684\u6210\u5458\u53ef\u4ee5\u67e5\u770b\u6b64\u8bb0\u4e8b\u672c\u3002",
          "timeline.post.scope.manToMan":
            "\u53ea\u6709\u60a8\u548c%1\u53ef\u4ee5\u67e5\u770b\u6b64\u8bb0\u4e8b\u672c\u3002",
          "timeline.post.seemore": "\u663e\u793a\u66f4\u591a",
          "timeline.post.share": "\u5206\u4eab",
          "timeline.post.sharedchanged":
            "\u8be5\u5e16\u5b50\u4e0d\u80fd\u663e\u793a\uff0c\u539f\u56e0\u662f\u539f\u59cb\u5e16\u5b50\u7684\u9690\u79c1\u8bbe\u7f6e\u5df2\u66f4\u6539\u3002",
          "timeline.post.shareddeleted":
            "\u8be5\u5e16\u5b50\u5df2\u88ab\u5220\u9664\u6216\u53d1\u5e16\u8005\u5df2\u4e0d\u518d\u4f7f\u7528 LINE\u3002",
          "timeline.post.sorting.option.ranking": "Sort by ranking",
          "timeline.post.sorting.option.time":
            "\u6309\u63a5\u6536\u65f6\u95f4\u6392\u5e8f",
          "timeline.post.write": "\u5206\u4eab",
          "timeline.publicgroup.emptymember":
            "\u5c1a\u65e0\u53ef\u6dfb\u52a0\u7684\u597d\u53cb\u3002",
          "timeline.publicgroup.group": "\u7fa4",
          "timeline.publicgroup.group.empty": "\u5c1a\u65e0\u7fa4\u5217\u8868",
          "timeline.publicgroup.linefriends": "\u597d\u53cb",
          "timeline.publicgroup.linefriends.desc":
            "\u5411\u6240\u6709\u53ef\u6d4f\u89c8\u60a8\u4e3b\u9875\u7684\u597d\u53cb\u516c\u5f00",
          "timeline.publicgroup.nobodysee":
            "\u8be5\u5e16\u5b50\u4e0d\u80fd\u88ab\u4efb\u4f55\u4eba\u67e5\u770b\u3002",
          "timeline.publicgroup.sharelist":
            "\u516c\u5f00\u5217\u8868\u7ba1\u7406",
          "timeline.publicgroup.title.detail":
            "\u8c01\u53ef\u4ee5\u67e5\u770b\u6b64\u5e16\u5b50\uff1f",
          "timeline.publicgroup.title.post":
            "\u5e16\u5b50\u7684\u9690\u79c1\u8bbe\u7f6e",
          "timeline.recommend": "\u63a8\u8350",
          "timeline.report.desc":
            "\u4e3e\u62a5\u540e\uff0c\u76f8\u5173\u7528\u6237\u7684\u8be6\u7ec6\u8d44\u6599\u3001\u60a8\u4e0e\u5979/\u4ed6\u6700\u8fd1\u53d1\u9001\u7684 100 \u6761\u804a\u5929\u6d88\u606f\uff0c\u4ee5\u53ca\u76f8\u5173\u7684\u5e16\u5b50\u5c06\u88ab\u53d1\u9001\u7ed9\u6211\u4eec\u3002",
          "timeline.report.done": "\u5df2\u4e3e\u62a5",
          "timeline.report.reason.advertising":
            "\u6ee5\u53d1\u5e7f\u544a\u4fe1\u606f",
          "timeline.report.reason.genderHarassment":
            "\u53d1\u9001\u8272\u60c5\u4fe1\u606f",
          "timeline.report.reason.harassment": "\u9a9a\u6270\u884c\u4e3a",
          "timeline.report.reason.other": "\u5176\u4ed6",
          "timeline.report.selectReason":
            "\u8bf7\u9009\u62e9\u60a8\u4e3e\u62a5\u8be5\u7528\u6237\u7684\u7406\u7531",
          "timeline.report.title": "\u4e3e\u62a5",
          "timeline.request.failed.likeshare.status":
            "\u5206\u4eab\u72b6\u6001\u52a0\u8f7d\u5931\u8d25\u3002",
          "timeline.request.failed.timeline":
            "\u65e0\u6cd5\u52a0\u8f7d\u8be5\u5e16\u5b50\u3002",
          "timeline.request.failed.url":
            "\u65e0\u6cd5\u8bfb\u53d6\u94fe\u63a5\u4fe1\u606f\u3002\n\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "timeline.request.failed.user":
            "\u672a\u627e\u5230\u8be5\u7528\u6237\u3002",
          "timeline.retry": "\u91cd\u8bd5",
          "timeline.setting.autoopen":
            "\u81ea\u52a8\u5411\u65b0\u6dfb\u52a0\u7684\u597d\u53cb\u516c\u5f00",
          "timeline.setting.buddylist.empty":
            "\u5c1a\u65e0LINE\u597d\u53cb\u3002",
          "timeline.setting.desc": "\u8bbe\u7f6e\u516c\u5f00\u8303\u56f4",
          "timeline.setting.desc2":
            "\u8bbe\u7f6e\u662f\u5426\u516c\u5f00\u4e2a\u4eba\u4e3b\u9875\u3002",
          "timeline.setting.feed.ranking": "\u5e16\u5b50\u6392\u5e8f",
          "timeline.setting.feed.ranking.option":
            "\u4f18\u5148\u663e\u793a\u70ed\u95e8\u5e16\u5b50",
          "timeline.setting.label.blocked": "\u975e\u516c\u5f00",
          "timeline.setting.label.unblocked": "\u516c\u5f00",
          "timeline.setting.usetoast":
            "LINE VOOM\u66f4\u65b0\u65f6\u63d0\u9192",
          "timeline.share.copyUrl": "\u590d\u5236\u94fe\u63a5",
          "timeline.share.copyUrl.toast":
            "\u94fe\u63a5\u5df2\u590d\u5236\u5230\u526a\u5207\u677f\u3002",
          "timeline.sharetohome.hint": "\u8bf7\u8f93\u5165\u5185\u5bb9\u3002",
          "timeline.sharetotalk.comfirm.desc":
            "\u8981\u53d1\u9001\u5230\u201c%1\u201d\u5417\uff1f",
          "timeline.sharetotalk.empty.chat":
            "\u6ca1\u6709\u53ef\u4ee5\u9009\u62e9\u7684\u804a\u5929\u5ba4\u3002",
          "timeline.sharetotalk.empty.friend":
            "\u6ca1\u6709\u53ef\u4ee5\u9080\u8bf7\u7684\u597d\u53cb\u3002",
          "timeline.sharetotalk.empty.group":
            "\u6ca1\u6709\u53ef\u4ee5\u9009\u62e9\u7684\u7fa4\u3002",
          "timeline.sharetotalk.tab.chat": "\u804a\u5929",
          "timeline.sharetotalk.tab.friend": "\u597d\u53cb",
          "timeline.sharetotalk.tab.group": "\u7fa4",
          "timeline.sharetotalk.title": "\u53d1\u9001\u5230\u804a\u5929\u5ba4",
          "timeline.system.check.wait":
            "\u7cfb\u7edf\u7ef4\u62a4\u4e2d\uff0c \u65e0\u6cd5\u4f7f\u7528\u3002\n\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "timeline.time.afternoon": "\u4e0b\u5348",
          "timeline.time.morning": "\u4e0a\u5348",
          "timeline.video.popup.waiting":
            "\u7f16\u7801\u8fdb\u884c\u4e2d\u3002\n\u8bf7\u7a0d\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "timeline.yes": "\u662f",
          "timline.report.policy.desc":
            "\u4e3e\u62a5\u804a\u5929\u6216\u5e16\u5b50\u540e\uff0c\u76f8\u5173\u7528\u6237\u7684\u4fe1\u606f\u3001\u60a8\u4e0e\u5bf9\u65b9\u6700\u8fd1\u53d1\u9001\u768420\u6761\u804a\u5929\u4fe1\u606f\uff0c\u4ee5\u53ca\u76f8\u5173\u7684\u5e16\u5b50\u5c06\u88ab\u53d1\u9001\u7ed9\u6211\u4eec\u3002",
          "unsupported.file.checkbox":
            "\u603b\u662f\u538b\u7f29\u540e\u518d\u53d1\u9001",
          "unsupported.file.common":
            "\u4e0d\u53d7\u652f\u6301\u7684\u6587\u4ef6\u683c\u5f0f\u5c06\u538b\u7f29\u4e3aZIP\u683c\u5f0f\u5e76\u4ee5\u6b64\u683c\u5f0f\u53d1\u9001\u3002",
          "unsupported.file.compress.fail":
            "\u538b\u7f29\u6587\u4ef6\u5931\u8d25\uff0c\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "unsupported.file.compressing":
            "\u6b63\u5728\u521b\u5efa\u538b\u7f29\u6587\u4ef6\u2026 ",
          "unsupported.file.dontshow": "\u4e0d\u518d\u663e\u793a",
          "unsupported.file.multi":
            "\u90e8\u5206\u6587\u4ef6\u683c\u5f0f\u4e0d\u53d7\u652f\u6301\u3002\u662f\u5426\u8981\u538b\u7f29\u540e\u53d1\u9001\uff1f",
          "unsupported.file.single":
            "\u6587\u4ef6\u683c\u5f0f\u4e0d\u53d7\u652f\u6301\u3002\u662f\u5426\u8981\u538b\u7f29\u540e\u53d1\u9001\uff1f",
          "update.msg.check.security1":
            "\u6b63\u5728\u8fdb\u884c\u5b89\u5168\u68c0\u6d4b\u3002",
          "update.msg.check.security2": "\u8bf7\u7a0d\u5019\u3002",
          "update.summary.url":
            "http://openapis.jboard.naver.jp/mobile/document/line_desktop/ZH/1781",
          "upgradegroupinvite.button.requireinvites": "\u5f00\u542f",
          "upgradegroupinvite.popup.desc.toomanyfriends":
            "\u6210\u5458\u4eba\u6570\u8d85\u8fc7100\u4eba\u7684\u7fa4\u5c06\u4f1a\u81ea\u52a8\u5f00\u542f\u201c\u6536\u5230\u9080\u8bf7\u624d\u80fd\u52a0\u5165\u201d\u7684\u8bbe\u7f6e\u3002\n\u5982\u8981\u5173\u95ed\u6b64\u8bbe\u7f6e\uff0c\u8bf7\u5c06\u7fa4\u6210\u5458\u7684\u4eba\u6570\u4e0a\u9650\u8bbe\u7f6e\u5728100\u4eba\u4ee5\u5185\u3002",
          "upgradegroupinvite.popup.title.toomanyfriends":
            "\u662f\u5426\u5f00\u542f\u201c\u6536\u5230\u9080\u8bf7\u624d\u80fd\u52a0\u5165\u201d\u7684\u8bbe\u7f6e\uff1f",
          "upic.btn.cancel.title": "\u53d6\u6d88",
          "upic.btn.find.title": "\u6d4f\u89c8",
          "upic.btn.ok.title": "\u786e\u8ba4",
          "upic.label.desc.title":
            "\u53ef\u4e0a\u4f20jpg\u3001jpeg\u3001png\u3001gif\u53cabmp\u683c\u5f0f\u7684\u56fe\u7247\u3002 \n",
          "upic.label.upic.title": "\u7f16\u8f91\u4e2a\u4eba\u5934\u50cf",
          "upic.msg.cantFindFile": "\u627e\u4e0d\u5230\u8be5\u6587\u4ef6\u3002",
          "upic.msg.not.image": "\u4ec5\u53ef\u53d1\u9001\u56fe\u7247\u3002",
          "upic.msg.select": "\u8bf7\u9009\u62e9\u5934\u50cf\u56fe\u7247\u3002",
          "upic.msg.sizeExceeds":
            "\u6700\u5927\u53ef\u4e0a\u4f2020MB\u7684\u56fe\u7247\u6587\u4ef6\u3002",
          "user.report.error":
            "\u6b64\u4fe1\u606f\u5df2\u7ecf\u4e0d\u5b58\u5728\uff0c\u56e0\u6b64\u65e0\u6cd5\u4e3e\u62a5\u3002",
          "user.report.policy.desc":
            "\u4e3e\u62a5\u540e\uff0c\u76f8\u5173\u7528\u6237\u7684\u4fe1\u606f\u3001\u60a8\u4e0e\u5bf9\u65b9\u6700\u8fd1\u53d1\u9001\u768410\u6761\u804a\u5929\u4fe1\u606f\uff0c\u4ee5\u53ca\u76f8\u5173\u7684\u5e16\u5b50\u5c06\u88ab\u53d1\u9001\u7ed9\u6211\u4eec\u3002",
          "user.report.question":
            "\u60a8\u786e\u8ba4\u8981\u5c4f\u853d\u6b64\u7528\u6237\u5417\uff1f",
          "user.search.placeholder": "\u4f7f\u7528\u59d3\u540d\u641c\u7d22",
          "user.warning.investmentfraud":
            "\u4f7f\u7528LINE\u65f6\u8c28\u9632\u6b3a\u8bc8\u3002",
          "user.warning.invitedtogroup":
            "<![CDATA[<b><font color='%1'>%2</font></b>\u9080\u8bf7\u60a8\u52a0\u5165\u7fa4\u3002\n<font color='#FF3A44'>\u82e5\u60a8\u89c9\u5f97\u6b64\u7528\u6237\u53ef\u7591\uff0c\u8bf7\u5c4f\u853d\u5e76\u4e3e\u62a5\u8be5\u7528\u6237\u3002</font>]]>",
          "user.warning.spammer":
            "\u6b64\u7528\u6237\u8fd8\u4e0d\u662f\u60a8\u7684\u597d\u53cb\u3002",
          "user.warning.spammer.group":
            "%1\u9080\u8bf7\u60a8\u52a0\u5165\u7fa4\u3002\u82e5\u60a8\u89c9\u5f97\u6b64\u7528\u6237\u53ef\u7591\uff0c\u8bf7\u70b9\u51fb\u201c\u4e3e\u62a5\u201d\u6309\u94ae\u3002",
          "videoProfile.error.fileType":
            "\u6b64\u6587\u4ef6\u683c\u5f0f\u4e0d\u80fd\u7528\u4e8e\u5934\u50cf\u89c6\u9891\u3002\u8bf7\u91cd\u8bd5\u3002",
          "videoProfile.error.lessThenOneSec":
            "\u5934\u50cf\u89c6\u9891\u6700\u77ed\u987b\u4e3a1\u79d2\u3002\u8bf7\u91cd\u8bd5\u3002",
          "viewer.alert.desc.delete": "\u5220\u9664\u6b64\u9879\uff1f",
          "viewer.alert.desc.fullsize":
            "\u6309Esc\u952e\u9000\u51fa\u5168\u5c4f\u6a21\u5f0f\u3002",
          "viewer.alert.desc.mustinstallplugin":
            "\u60a8\u9700\u8981\u5b89\u88c5\u6269\u5c55\u529f\u80fd\u624d\u80fd\u5728\u5a92\u4f53\u67e5\u770b\u5668\u4e2d\u67e5\u770b\u7167\u7247\u3001\u89c6\u9891\u4e0eGIF\u6587\u4ef6\u3002\u8981\u7acb\u5373\u4e0b\u8f7d\u5417\uff1f",
          "viewer.alert.image.expired.previewinstead":
            "\u5df2\u8d85\u8fc7\u4fdd\u5b58\u671f\u9650\uff0c\u53ea\u80fd\u67e5\u770b\u6587\u4ef6\u7f29\u7565\u56fe\u3002",
          "viewer.alert.video.expired":
            "\u7531\u4e8e\u4fdd\u5b58\u671f\u9650\u5df2\u8fc7\uff0c\u4e0d\u80fd\u64ad\u653e\u6b64\u89c6\u9891\u3002",
          "viewer.contextmenu.copy": "\u590d\u5236",
          "viewer.contextmenu.forward": "\u5206\u4eab",
          "viewer.contextmenu.keep": "\u5728 Keep \u4e2d\u4fdd\u5b58",
          "viewer.contextmenu.keepmemo":
            "\u53d1\u9001\u81f3Keep\u5907\u5fd8\u5f55",
          "viewer.contextmenu.saveas":
            "\u4fee\u6539\u540d\u79f0\u540e\u4fdd\u5b58",
          "viewer.contextmenu.scanqr": "\u626b\u63cf\u4e8c\u7ef4\u7801",
          "viewer.contextmenu.scantext": "\u6587\u5b57\u8bc6\u522b",
          "viewer.copy.toast.copied":
            "\u5df2\u6210\u529f\u590d\u5236\u5230\u526a\u5207\u677f\u3002",
          "viewer.error.media.download.fail":
            "\u65e0\u6cd5\u4fdd\u5b58\u6587\u4ef6\u3002\n\u8bf7\u518d\u8bd5\u4e00\u6b21\u3002",
          "viewer.error.video.common":
            "\u53d1\u751f\u4e34\u65f6\u6027\u95ee\u9898\uff0c\u65e0\u6cd5\u64ad\u653e\u3002",
          "viewer.error.video.network":
            "\u7f51\u7edc\u6216\u670d\u52a1\u53d1\u751f\u95ee\u9898\uff0c\u65e0\u6cd5\u64ad\u653e\u3002\n\u8bf7\u91cd\u8bd5\u3002",
          "viewer.error.video.transient":
            "\u53d1\u751f\u4e34\u65f6\u6027\u95ee\u9898\uff0c\u65e0\u6cd5\u64ad\u653e\u3002\n\u8bf7\u91cd\u8bd5\u3002",
          "viewer.keep.toast.saved":
            "\u5df2\u5728 Keep \u4e2d\u4fdd\u5b58\u3002",
          "viewer.menu.edit": "\u7f16\u8f91",
          "viewer.menu.forward": "\u5206\u4eab",
          "viewer.menu.info.name": "\u6587\u4ef6\u540d",
          "viewer.menu.keep": "\u5728 Keep \u4e2d\u4fdd\u5b58",
          "viewer.menu.keepmemo": "\u53d1\u9001\u81f3Keep\u5907\u5fd8\u5f55",
          "viewer.menu.more.delete": "\u5220\u9664",
          "viewer.menu.more.info": "\u6587\u4ef6\u8be6\u60c5",
          "viewer.menu.more.speed": "\u901f\u5ea6",
          "viewer.menu.openfolder": "\u6253\u5f00\u6587\u4ef6\u5939",
          "viewer.menu.originalsize": "\u5b9e\u9645\u5927\u5c0f",
          "viewer.menu.rotate": "\u65cb\u8f6c 90 \u5ea6",
          "viewer.menu.saveas": "\u4fee\u6539\u540d\u79f0\u540e\u4fdd\u5b58",
          "viewer.menu.scanqr": "\u626b\u63cf\u4e8c\u7ef4\u7801",
          "viewer.menu.scantext": "\u6587\u5b57\u8bc6\u522b",
          "viewer.menu.showalbums": "\u663e\u793a\u6240\u6709\u9879\u76ee",
          "viewer.menu.showallcontents": "\u663e\u793a\u6240\u6709\u9879\u76ee",
          "viewer.menu.thumbnail.expand": "\u663e\u793a\u7f29\u7565\u56fe",
          "viewer.menu.thumbnail.fold": "\u9690\u85cf\u7f29\u7565\u56fe",
          "viewer.menu.video.pause": "\u6682\u505c",
          "viewer.menu.video.play": "\u64ad\u653e",
          "viewer.menu.video.replay": "\u91cd\u64ad",
          "viewer.menu.video.stop": "\u505c\u6b62",
          "viewer.menu.video.volume": "\u97f3\u91cf",
          "viewer.menu.zoomin": "\u653e\u5927",
          "viewer.menu.zoomout": "\u7f29\u5c0f",
          "viewer.play.toast.speaker.beingconnected":
            "\u6b63\u5728\u5207\u6362\u81f3\u5176\u4ed6\u626c\u58f0\u5668\uff0c\u8bf7\u7a0d\u5019\u3002",
          "viewer.popup.info.created": "\u5df2\u521b\u5efa",
          "viewer.popup.info.filesize": "\u6587\u4ef6\u5927\u5c0f",
          "viewer.popup.info.from": "\u6765\u81ea",
          "viewer.popup.info.resolution": "\u5206\u8fa8\u7387",
          "viewer.popup.info.saved": "\u5df2\u4fdd\u5b58",
          "viewer.saveas.toast.saved": "\u4e0b\u8f7d\u5b8c\u6210\u3002",
          "viewer.tooltip.window.close": "\u5173\u95ed",
          "viewer.tooltip.window.maximize": "\u6700\u5927\u5316",
          "viewer.tooltip.window.minimize": "\u6700\u5c0f\u5316",
          "viewer.tooltip.window.restore":
            "\u8fd8\u539f\u4e3a\u539f\u6765\u5927\u5c0f\uff08\u7f29\u5c0f\uff09",
          "voip.beautyfeature.button.clearall": "\u5168\u90e8\u6e05\u9664",
          "voip.beautyfeature.popupbutton.cancel": "\u53d6\u6d88",
          "voip.beautyfeature.popupbutton.clearall": "\u5168\u90e8\u6e05\u9664",
          "voip.beautyfeature.popupdesc.clearfaceeffects":
            "\u60a8\u5fc5\u987b\u5148\u6e05\u9664\u5168\u90e8\u8138\u90e8\u7279\u6548\u624d\u80fd\u4f7f\u7528\u7f8e\u989c\u529f\u80fd\u3002\u8981\u7acb\u5373\u6e05\u9664\u5168\u90e8\u7279\u6548\u5417\uff1f",
          "voip.beautyfeature.toggle.darkeneyebrows": "\u6d53\u7709",
          "voip.beautyfeature.toggle.fillinlips": "\u5507\u8272",
          "voip.beautyfeature.toggle.resizeeyes": "\u5927\u773c",
          "voip.beautyfeature.toggle.revert": "\u8bbe\u7f6e\u4e3a\u9ed8\u8ba4",
          "voip.beautyfeature.toggle.slimjawline": "\u7626\u8138",
          "voip.beautyfeature.toggle.slimnose": "\u7626\u9f3b",
          "voip.beautyfeature.toggle.smoothcomplexion": "\u78e8\u76ae",
          "voip.button.label.call": "\u5e94\u7b54",
          "voip.button.label.disconnect": "\u7ed3\u675f",
          "voip.button.label.voiceonly":
            "\u5173\u95ed\u6444\u50cf\u5934\u63a5\u542c",
          "voip.call.tooltip.cameraunavailable":
            "\u76f8\u673a\u4e0d\u53ef\u7528",
          "voip.call.tooltip.microphoneunavailable":
            "\u9ea6\u514b\u98ce\u4e0d\u53ef\u7528",
          "voip.connect.camera.alert":
            "\u5df2\u68c0\u6d4b\u5230\u76f8\u673a\uff0c\u662f\u5426\u7acb\u5373\u6253\u5f00\u76f8\u673a\uff1f",
          "voip.connect.mic.alert":
            "\u5df2\u68c0\u6d4b\u5230\u9ea6\u514b\u98ce\uff0c\u662f\u5426\u7acb\u5373\u6253\u5f00\u9ea6\u514b\u98ce\uff1f",
          "voip.desc.calling": "\u547c\u53eb\u4e2d\u2026",
          "voip.desc.calling.failed":
            "%1\u65e0\u6cd5\u901a\u8bdd\u3002 \u8bf7\u91cd\u8bd5\u3002(%2)",
          "voip.desc.calling.failed.accept.other.device":
            "\u6b63\u5728\u4f7f\u7528\u5176\u4ed6\u8bbe\u5907\u8fdb\u884c\u901a\u8bdd\u3002",
          "voip.desc.calling.failed.contact.busy":
            "%1\u6b63\u5728\u901a\u8bdd\u4e2d\u3002\u8bf7\u7a0d\u5019\u518d\u62e8\u3002\n",
          "voip.desc.calling.failed.maintance":
            "\u5f88\u62b1\u6b49\uff0c\n\u76ee\u524d\u684c\u9762\u7248\u7684\u8bed\u97f3\u901a\u8bdd\u529f\u80fd\uff0c \u6682\u65f6\u65e0\u6cd5\u4f7f\u7528\u3002\n\u8bf7\u7a0d\u5019\u518d\u8bd5\uff0c\u8c22\u8c22\u3002",
          "voip.desc.calling.failed.need.audio":
            "\u627e\u4e0d\u5230\u58f0\u5361\u3002\n\u8bf7\u786e\u8ba4\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "voip.desc.calling.failed.need.device":
            "\u9ea6\u514b\u548c\u97f3\u54cd\u6ca1\u6709\u8fde\u63a5\u3002\n\u8bf7\u8fde\u63a5\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "voip.desc.calling.failed.need.devicesetting":
            "\u60a8\u7684\u9ea6\u514b\u98ce\u6216\u626c\u58f0\u5668\u5904\u4e8e\u5173\u95ed\u72b6\u6001\u3002\u8bf7\u68c0\u67e5\u8bbe\u7f6e\uff0c\u7136\u540e\u518d\u6b21\u5c1d\u8bd5\u547c\u53eb\u3002",
          "voip.desc.calling.failed.need.mic":
            "\u9ea6\u514b\u6ca1\u6709\u8fde\u63a5\u3002\n\u8bf7\u8fde\u63a5\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "voip.desc.calling.failed.need.oscamera":
            "\u65e0\u6cd5\u4f7f\u7528\u6444\u50cf\u5934\u3002\u8bf7\u6388\u6743\u8bbe\u5907\u4f7f\u7528\u6444\u50cf\u5934\u3002",
          "voip.desc.calling.failed.need.osmic":
            "\u65e0\u6cd5\u4f7f\u7528\u9ea6\u514b\u98ce\u3002\u8bf7\u6388\u6743\u8bbe\u5907\u4f7f\u7528\u9ea6\u514b\u98ce\u3002",
          "voip.desc.calling.failed.need.ospeaker":
            "\u65e0\u6cd5\u4f7f\u7528\u626c\u58f0\u5668\u3002\u8bf7\u5728\u63a7\u5236\u9762\u90e8\u4e2d\u542f\u7528\u9ea6\u514b\u98ce\u3002",
          "voip.desc.calling.failed.need.spk":
            "\u97f3\u54cd\u6ca1\u6709\u8fde\u63a5\u3002\n\u8bf7\u8fde\u63a5\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "voip.desc.calling.failed.need.update":
            "\u73b0\u5728\u5c06\u624b\u673a\u4e0a\u7684LINE\u5347\u81f3\u6700\u65b0\u7248\u672c\uff0c\n\u5373\u53ef\u4e8e\u684c\u9762\u7248\u4e0a\u4f7f\u7528\u8bed\u97f3\u901a\u8bdd\u529f\u80fd\uff01\n",
          "voip.desc.calling.failed.no.accept":
            "\u65e0\u5e94\u7b54\u3002\n\u8bf7\u7a0d\u5019\u518d\u8bd5\u3002",
          "voip.desc.calling.failed.other.device.use":
            "\u6b63\u5728\u4f7f\u7528\u5176\u4ed6\u8bbe\u5907\u8fdb\u884c\u901a\u8bdd\u3002",
          "voip.desc.calling.failed.peer":
            "\u4e0d\u80fd\u901a\u8bdd\n%1 \u53ef\u80fd\u6ca1\u6709\u4f7f\u7528\u6700\u65b0\u7248\u672c\uff0c\u6216\u672a\u5f00\u901a\u901a\u8bdd\u529f\u80fd\uff0c\u56e0\u6b64\u65e0\u6cd5\u5e94\u7b54\u3002\n",
          "voip.desc.calling.video":
            "\u6b63\u5728\u53d1\u9001\u89c6\u9891\u8bf7\u6c42",
          "voip.desc.camerausage":
            "\u8bf7\u5141\u8bb8LINE\u8bbf\u95ee\u60a8\u7684\u76f8\u673a\u4ee5\u53d1\u8d77\u89c6\u9891\u901a\u8bdd\u3002",
          "voip.desc.camerausage.maconly":
            "\u8bf7\u524d\u5f80\u201c\u7cfb\u7edf\u504f\u597d\u8bbe\u7f6e\u201d>\u201c\u5b89\u5168\u6027\u4e0e\u9690\u79c1\u201d>\u201c\u9690\u79c1\u201d\uff0c\u5141\u8bb8LINE\u8bbf\u95ee\u6444\u50cf\u5934\u540e\uff0c\u624d\u80fd\u5f00\u59cb\u89c6\u9891\u901a\u8bdd\u3002",
          "voip.desc.connecting": "\u8fde\u63a5\u4e2d\u2026",
          "voip.desc.makeCall.Failed.network":
            "\u7f51\u7edc\u4e0d\u7a33\u5b9a\uff0c\u65e0\u6cd5\u901a\u8bdd\u3002\n\u8bf7\u7a0d\u540e\u518d\u62e8\u3002",
          "voip.desc.mic.failed":
            "\u9ea6\u514b\u98ce\u53ef\u80fd\u53d1\u751f\u6545\u969c\u3002\u5982\u679c\u5bf9\u65b9\u65e0\u6cd5\u542c\u5230\u60a8\u7684\u58f0\u97f3\uff0c\u8bf7\u68c0\u67e5\u9ea6\u514b\u98ce\u72b6\u6001\u3002",
          "voip.desc.microphoneusage":
            "\u8bf7\u5141\u8bb8LINE\u8bbf\u95ee\u60a8\u7684\u9ea6\u514b\u98ce\u4ee5\u53d1\u8d77\u8bed\u97f3\u901a\u8bdd\u4e0e\u89c6\u9891\u901a\u8bdd\u3002",
          "voip.desc.microphoneusage.maconly":
            "\u8bf7\u524d\u5f80\u201c\u7cfb\u7edf\u504f\u597d\u8bbe\u7f6e\u201d>\u201c\u5b89\u5168\u6027\u4e0e\u9690\u79c1\u201d>\u201c\u9690\u79c1\u201d\uff0c\u5141\u8bb8LINE\u8bbf\u95ee\u9ea6\u514b\u98ce\u540e\uff0c\u624d\u80fd\u5f00\u59cb\u8bed\u97f3\u4e0e\u89c6\u9891\u901a\u8bdd\u3002",
          "voip.desc.ringing": "\u7684\u6765\u7535",
          "voip.desc.ringing.video":
            "\u89c6\u9891\u901a\u8bdd\u7b49\u5f85\u54cd\u5e94\u2026\u2026",
          "voip.desc.speaker.failed":
            "\u626c\u58f0\u5668\u53ef\u80fd\u53d1\u751f\u6545\u969c\u3002\u5982\u679c\u60a8\u65e0\u6cd5\u542c\u5230\u4efb\u4f55\u58f0\u97f3\uff0c\u8bf7\u68c0\u67e5\u626c\u58f0\u5668\u72b6\u6001\u3002",
          "voip.disconnect.camera.entry.alert":
            "\u662f\u5426\u52a0\u5165\u89c6\u9891\u901a\u8bdd\uff1f \u672a\u68c0\u6d4b\u5230\u76f8\u673a\uff0c\u5176\u4ed6\u7528\u6237\u5c06\u65e0\u6cd5\u770b\u5230\u60a8\u7684\u5f71\u50cf\u3002",
          "voip.disconnect.camera.error":
            "\u672a\u68c0\u6d4b\u5230\u76f8\u673a\uff0c\u6b64\u529f\u80fd\u6682\u4e0d\u53ef\u7528\u3002",
          "voip.disconnect.mic.entry.alert":
            "\u662f\u5426\u52a0\u5165\u89c6\u9891\u901a\u8bdd\uff1f \u672a\u68c0\u6d4b\u5230\u9ea6\u514b\u98ce\uff0c\u5176\u4ed6\u7528\u6237\u5c06\u65e0\u6cd5\u542c\u5230\u60a8\u7684\u58f0\u97f3\u3002",
          "voip.disconnect.mic.entry.alert.audio":
            "\u662f\u5426\u52a0\u5165\u8bed\u97f3\u901a\u8bdd\uff1f \u672a\u68c0\u6d4b\u5230\u9ea6\u514b\u98ce\uff0c\u5176\u4ed6\u7528\u6237\u5c06\u65e0\u6cd5\u542c\u5230\u60a8\u7684\u58f0\u97f3\u3002",
          "voip.disconnect.mic.error":
            "\u672a\u68c0\u6d4b\u5230\u9ea6\u514b\u98ce\uff0c\u6b64\u529f\u80fd\u6682\u4e0d\u53ef\u7528\u3002",
          "voip.disconnect.micncam.entry.alert":
            "\u662f\u5426\u52a0\u5165\u89c6\u9891\u901a\u8bdd\uff1f \u672a\u68c0\u6d4b\u5230\u9ea6\u514b\u98ce\u548c\u76f8\u673a\uff0c\u5176\u4ed6\u7528\u6237\u5c06\u65e0\u6cd5\u542c\u5230\u60a8\u7684\u58f0\u97f3\u6216\u770b\u5230\u60a8\u7684\u5f71\u50cf\u3002",
          "voip.effect.guide.adjust.effect":
            "\u8c03\u8282\u6574\u5f62\u6548\u679c\u3002",
          "voip.effect.guide.detect.face":
            "\u8bf7\u786e\u4fdd\u60a8\u7684\u9762\u90e8\u6e05\u6670\u53ef\u89c1\u3002",
          "voip.effect.guide.extra.001":
            "\u8ddf\u597d\u53cb\u4e00\u8d77\u8bd5\u8bd5\u8fd9\u79cd\u7279\u6548\u3002",
          "voip.effect.guide.extra.006": "\u5de6\u53f3\u6447\u5934\u3002",
          "voip.effect.guide.extra.011": "\u7b11\u4e00\u7b11\u3002",
          "voip.effect.guide.extra.012":
            "\u62d6\u52a8\u6ed1\u5757\u5373\u53ef\u8c03\u6574\u7279\u6548\u5f3a\u5ea6\u3002",
          "voip.effect.guide.eye.blink": "\u7728\u7728\u773c\u3002",
          "voip.effect.guide.mouth.open": "\u5f20\u5f00\u5634\u3002",
          "voip.error.init.failed.callee":
            "[%1\u6765\u7535]\n\u53d7\u5f53\u524d\u7535\u8111\u73af\u5883\u5f71\u54cd\uff0c\u4f7f\u7528\u901a\u8bdd\u529f\u80fd\u65f6\uff0c\n\u53ef\u80fd\u4f1a\u53d1\u751f\u5f3a\u5236\u9000\u51fa\u7684\u60c5\u51b5\u3002",
          "voip.error.init.failed.caller":
            "\u53d7\u5f53\u524d\u7535\u8111\u73af\u5883\u5f71\u54cd\uff0c\u4f7f\u7528\u901a\u8bdd\u529f\u80fd\u65f6\uff0c\n\u53ef\u80fd\u4f1a\u53d1\u751f\u5f3a\u5236\u9000\u51fa\u7684\u60c5\u51b5\u3002",
          "voip.label.create.title": "\u8bed\u97f3\u901a\u8bdd",
          "voip.label.mic": "\u8bdd\u7b52",
          "voip.label.speaker": "\u626c\u58f0\u5668",
          "voip.label.video": "\u89c6\u9891\u901a\u8bdd",
          "voip.label.video.cameraon": "\u5f00\u542f",
          "voip.label.video.local.cameraOff":
            "\u5df2\u5173\u95ed\u6444\u50cf\u5934",
          "voip.label.video.local.cameraOn":
            "\u5df2\u5f00\u542f\u6444\u50cf\u5934\u3002",
          "voip.label.video.local.noCamera":
            "\u672a\u627e\u5230\u6444\u50cf\u5934\u3002\u5bf9\u65b9\u65e0\u6cd5\u770b\u5230\u60a8\u7684\u5f71\u50cf\u3002\n",
          "voip.label.video.low.quality":
            "\u7f51\u7edc\u72b6\u6001\u4e0d\u7a33\u5b9a\u3002",
          "voip.label.video.remote.cameraOff":
            "\u5bf9\u65b9\u5df2\u5173\u95ed\u6444\u50cf\u5934\u3002",
          "voip.label.video.remote.cameraOn":
            "\u5bf9\u65b9\u5df2\u5f00\u542f\u6444\u50cf\u5934\u3002",
          "voip.label.video.remote.noCamera":
            "\u5bf9\u65b9\u65e0\u6444\u50cf\u5934\uff0c\u6216\u65e0\u6cd5\u6b63\u5e38\u63a5\u6536\u89c6\u9891\u3002\n",
          "voip.label.video.ringing":
            "\u662f\u5426\u8981\u5f00\u542f\u6444\u50cf\u5934\uff1f",
          "voip.label.video.title": "\u4e0e%1\u89c6\u9891\u901a\u8bdd",
          "voip.media.unsupported.alert.update":
            "%1\u5df2\u5f00\u59cb\u5171\u4eab\u5c4f\u5e55\u3002\u8bf7\u5c06LINE\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u4ee5\u67e5\u770b\u5171\u4eab\u5c4f\u5e55\u3002",
          "voip.msg.already.during.call":
            "\u60a8\u6b63\u5728\u53e6\u4e00\u4e2a\u804a\u5929\u4e2d\u901a\u8bdd\u3002",
          "voip.msg.bad.connection":
            "\u7f51\u7edc\u72b6\u6001\u4e0d\u7a33\u5b9a",
          "voip.msg.bad.connection.failover":
            "\u6b63\u5728\u91cd\u65b0\u8fde\u63a5...",
          "voip.msg.error.no.audio.source":
            "\u7531\u4e8e\u9ea6\u514b\u98ce\u95ee\u9898\uff0c\u901a\u8bdd\u5df2\u7ed3\u675f\u3002\u8bf7\u7a0d\u540e\u91cd\u65b0\u62e8\u6253\u3002",
          "voip.msg.error.no.audio.tx.stream":
            "\u9519\u8bef \u65e0\u6cd5\u6b63\u5e38\u5904\u7406\u3002\n\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002",
          "voip.msg.network.unstable": "\u7f51\u7edc\u4e0d\u7a33\u5b9a\u3002",
          "voip.msg.not.avalable.during.call":
            "\u901a\u8bdd\u65f6\u65e0\u6cd5\u4f7f\u7528\u6b64\u529f\u80fd\u3002",
          "voip.msg.peer.no.audio.source":
            "\u7531\u4e8e\u5176\u4ed6\u53c2\u4e0e\u8005\u7684\u9ea6\u514b\u98ce\u95ee\u9898\uff0c\u901a\u8bdd\u5df2\u7ed3\u675f\u3002\u8bf7\u7a0d\u540e\u91cd\u65b0\u62e8\u6253\u3002",
          "voip.msg.send.freeCall":
            "\u4e0e%1\u8fdb\u884c\u8bed\u97f3\u901a\u8bdd?",
          "voip.msg.send.videoCall":
            "\u4e0e%1\u8fdb\u884c\u89c6\u9891\u901a\u8bdd?",
          "voip.msg.switch.to.video.noCamera":
            "\u7531\u4e8e\u672a\u68c0\u6d4b\u5230\u6444\u50cf\u5934\uff0c\u56e0\u6b64\u4e0d\u4f1a\u663e\u793a\u60a8\u7684\u89c6\u9891\u3002\u662f\u5426\u63a5\u53d7\u89c6\u9891\u901a\u8bdd\uff1f",
          "voip.msg.video.camera.unavailable":
            "\u4e0d\u652f\u6301\u6b64\u76f8\u673a\u3002\n\u8bf7\u5728\u201c\u8bbe\u7f6e\u201d>\u201c\u901a\u8bdd\u201d>\u201c\u76f8\u673a\u8bbe\u7f6e\u201d\u4e2d\u9009\u62e9\u5176\u4ed6\u76f8\u673a\u3002\u5373\u4f7f\u6b64\u76f8\u673a\u4e0d\u53d7\u652f\u6301\uff0c\u60a8\u4ecd\u80fd\u6b63\u5e38\u63a5\u542c\u6216\u62e8\u6253\u7535\u8bdd\uff0c\u4f46\u597d\u53cb\u5c06\u65e0\u6cd5\u770b\u5230\u60a8\u3002",
          "voip.msg.video.term.device.control":
            "\u5bf9\u65b9\u4e2d\u6b62\u4e86\u89c6\u9891\u901a\u8bdd\uff0c\n\u5df2\u8f6c\u4e3a\u8bed\u97f3\u901a\u8bdd\u6a21\u5f0f\u3002",
          "voip.msg.video.term.device.interrupted":
            "\u5bf9\u65b9\u7684\u6444\u50cf\u5934\u5904\u4e8e\u5173\u95ed\u72b6\u6001\u3002",
          "voip.msg.video.term.overload.direct.video.call.failed":
            "\u53d1\u751f\u4e34\u65f6\u6027\u9519\u8bef\uff0c\u65e0\u6cd5\u8fdb\u884c\u89c6\u9891\u901a\u8bdd\u3002\n\u8bf7\u4f7f\u7528\u8bed\u97f3\u901a\u8bdd\uff0c\u6216\u7a0d\u540e\u518d\u8bd5\u3002",
          "voip.msg.video.term.overload.video.changing.failed":
            "\u53d1\u751f\u4e34\u65f6\u6027\u9519\u8bef\uff0c\u65e0\u6cd5\u8fdb\u884c\u89c6\u9891\u901a\u8bdd\u3002\n\u8bf7\u7a0d\u540e\u518d\u8bd5\u3002",
          "voip.msg.video.term.unknown":
            "\u65e0\u6cd5\u6b63\u5e38\u5904\u7406\u3002\u8bf7\u7a0d\u540e\u91cd\u8bd5\u3002\n",
          "voip.msg.video.term.unstable":
            "\u7f51\u7edc\u72b6\u6001\u4e0d\u7a33\u5b9a\uff0c\u5df2\u901a\u8fc7\u8bed\u97f3\u65b9\u5f0f\u8fde\u63a5\u3002",
          "voip.msg.video.term.unsupported.device.video":
            "\u65e0\u6cd5\u8fdb\u884c\u89c6\u9891\u901a\u8bdd\u3002\n\u5bf9\u65b9\u7684\u5e94\u7528\u7248\u672c\u8fc7\u4f4e\uff0c\u6216\u4e0d\u652f\u6301\u89c6\u9891\u901a\u8bdd\u529f\u80fd\uff0c\u65e0\u6cd5\u63a5\u542c\u3002\n",
          "voip.msg.video.term.unsupported.device.voice":
            "\u5df2\u901a\u8fc7\u8bed\u97f3\u65b9\u5f0f\u8fde\u63a5\u3002\n\u5bf9\u65b9\u5e94\u7528\u7684\u7248\u672c\u8fc7\u4f4e\uff0c\u6216\u4e0d\u652f\u6301\u89c6\u9891\u901a\u8bdd\u529f\u80fd\u3002\n",
          "voip.msg.warning.close":
            "\u8981\u7ed3\u675f\u6b64\u901a\u8bdd\u5417\uff1f",
          "voip.msg.warning.groupclose":
            "\u8981\u79bb\u5f00\u6b64\u901a\u8bdd\u5417\uff1f",
          "voip.noisecanceling.desc.guide":
            "\u5df2\u5f00\u542f\u964d\u566a\u529f\u80fd\u6291\u5236\u80cc\u666f\u566a\u97f3\u3002",
          "voip.noisecanceling.popup.desc":
            "\u60a8\u7684\u66f4\u6539\u5c06\u4ece\u4e0b\u6b21\u901a\u8bdd\u5f00\u59cb\u5e94\u7528\u3002\u5982\u9700\u7acb\u5373\u5e94\u7528\u66f4\u6539\uff0c\u8bf7\u91cd\u65b0\u53d1\u8d77\u901a\u8bdd\u3002",
          "voip.noisecanceling.tooltip.off": "\u5f00\u542f\u964d\u566a",
          "voip.noisecanceling.tooltip.on": "\u5173\u95ed\u964d\u566a",
          "voip.popup.end": "\u7ed3\u675f\u901a\u8bdd",
          "voip.popup.start": "\u5f00\u59cb",
          "voip.screen.share.remove.monitor":
            "\u7531\u4e8e\u663e\u793a\u5668\u5df2\u65ad\u5f00\u8fde\u63a5\uff0c\u901a\u8bdd\u88ab\u7ec8\u6b62\u3002",
          "voip.screenshare.button.zoomin": "\u653e\u5927",
          "voip.screenshare.button.zoomout": "\u7f29\u5c0f",
          "voip.screenshare.button.zoomreset": "\u8fd8\u539f",
          "voip.screenshare.desc.pause":
            "\u5df2\u6682\u505c\u5171\u4eab\u5c4f\u5e55\u3002",
          "voip.screenshare.desc.pause.tooltip":
            "\u5f53\u60a8\u6700\u5c0f\u5316\u7a97\u53e3\u3001\u8c03\u6574\u7a97\u53e3\u5927\u5c0f\u6216\u79fb\u52a8\u5171\u4eab\u7a97\u53e3\u65f6\uff0c\u5171\u4eab\u5c4f\u5e55\u5c06\u4f1a\u6682\u505c\u3002",
          "voip.screenshare.error.closeapp":
            "\u65e0\u6cd5\u5171\u4eab\u5df2\u5173\u95ed\u7684\u5c4f\u5e55\u3002",
          "voip.screenshare.index.screen": "\u5c4f\u5e55",
          "voip.screenshare.index.window": "\u7a97\u53e3",
          "voip.screenshare.option.optimizevideoclips":
            "\u4f18\u5316\u89c6\u9891",
          "voip.screenshare.tooltip.fullscreen": "\u684c\u9762%1",
          "voip.screenshare.tooltip.optimizevideoclips":
            "\u63d0\u5347\u5171\u4eab\u5c4f\u5e55\u65f6\u89c6\u9891\u7684\u6d41\u7545\u5ea6",
          "voip.tooltip.callsetting": "\u901a\u8bdd\u8bbe\u7f6e",
          "voip.tooltip.camera.off": "\u5173\u95ed\u6444\u50cf\u5934",
          "voip.tooltip.camera.on": "\u5f00\u542f\u6444\u50cf\u5934",
          "voip.tooltip.chat": "\u804a\u5929",
          "voip.tooltip.echocanceloff": "\u5173\u95ed\u6d88\u9664\u56de\u58f0",
          "voip.tooltip.echocancelon": "\u5f00\u542f\u6d88\u9664\u56de\u58f0",
          "voip.tooltip.end.call": "\u7ed3\u675f",
          "voip.tooltip.end.groupmeetingcall": "\u79bb\u5f00",
          "voip.tooltip.fullhd":
            "\u5f53\u201cFull HD voice\u201d\u53d8\u4e3a\u7eff\u8272\u65f6\uff0c\u5373\u53ef\u4f53\u9a8c\u66f4\u6e05\u6670\u7684\u8bed\u97f3\u901a\u8bdd\u3002",
          "voip.tooltip.mic.off": "\u5173\u95ed\u9ea6\u514b\u98ce",
          "voip.tooltip.mic.off.muteronguide":
            "\u60a8\u7684\u9ea6\u514b\u98ce\u5904\u4e8e\u5173\u95ed\u72b6\u6001\u3002\u5f00\u59cb\u8bb2\u8bdd\u524d\uff0c\u8bf7\u5148\u6253\u5f00\u9ea6\u514b\u98ce\u3002",
          "voip.tooltip.mic.off.spacebartoast":
            "\u60a8\u7684\u9ea6\u514b\u98ce\u5df2\u9759\u97f3\u3002\u6309\u4f4f\u7a7a\u683c\u952e\u53ef\u4ee5\u6682\u65f6\u53d6\u6d88\u9759\u97f3\u3002",
          "voip.tooltip.mic.on": "\u5f00\u542f\u9ea6\u514b\u98ce",
          "voip.tooltip.microphone.autovolume":
            "\u5df2\u81ea\u52a8\u8c03\u8282\u97f3\u91cf",
          "voip.tooltip.onscreentool.clearall": "\u5168\u90e8\u6e05\u9664",
          "voip.tooltip.onscreentool.eraser": "\u64e6\u9664",
          "voip.tooltip.onscreentool.off":
            "\u5173\u95ed\u753b\u56fe\u5de5\u5177",
          "voip.tooltip.onscreentool.on":
            "\u6253\u5f00\u753b\u56fe\u5de5\u5177",
          "voip.tooltip.onscreentool.pen": "\u753b\u7b14",
          "voip.tooltip.onscreentool.pointer": "\u8367\u5149\u7b14",
          "voip.tooltip.onscreentool.redo": "\u91cd\u505a",
          "voip.tooltip.onscreentool.select": "\u79fb\u52a8",
          "voip.tooltip.onscreentool.stamp": "\u5370\u7ae0",
          "voip.tooltip.onscreentool.undo": "\u64a4\u9500",
          "voip.tooltip.screen.share": "\u5171\u4eab\u5c4f\u5e55",
          "voip.tooltip.screen.share.off": "\u505c\u6b62\u5171\u4eab",
          "voip.tooltip.screen.share.start":
            "\u5728\u89c6\u9891\u901a\u8bdd\u671f\u95f4\u5171\u4eab\u5c4f\u5e55\u3002",
          "voip.tooltip.screen.share.stop":
            "\u6b63\u5728\u5171\u4eab\u60a8\u7684\u5c4f\u5e55\u3002\u518d\u6b21\u70b9\u51fb\u6b64\u56fe\u6807\u5373\u53ef\u7ed3\u675f\u5c4f\u5e55\u5171\u4eab\u3002",
          "voip.tooltip.speaker.off": "\u5173\u95ed\u58f0\u97f3",
          "voip.tooltip.speaker.on": "\u5f00\u542f\u58f0\u97f3",
          "voip.tooltip.switch.to.video":
            "\u70b9\u51fb\u4ee5\u5207\u6362\u4e3a\u89c6\u9891\u901a\u8bdd",
          "voip.tooltip.video.camera":
            "\u5f00\u542f/\u5173\u95ed\u6444\u50cf\u5934",
          "voip.tooltip.video.camera.select": "\u9009\u62e9\u6444\u50cf\u5934",
          "voip.tooltip.video.fullscreen": "\u5168\u5c4f\u67e5\u770b",
          "voip.tooltip.video.fullscreen.restore":
            "\u8fd8\u539f\u7a97\u53e3\u5927\u5c0f",
          "voip.tooltip.video.pin":
            "\u7a97\u53e3\u59cb\u7ec8\u663e\u793a\u5728\u6700\u524d",
          "voip.tooltip.video.pinoff":
            "\u505c\u7528\u7a97\u53e3\u59cb\u7ec8\u663e\u793a\u5728\u6700\u524d",
          "voip.tooltip.video.speaker":
            "\u5f00\u542f/\u5173\u95ed\u626c\u58f0\u5668",
          "voip.tooltip.video.transform":
            "\u5f00\u59cb\u89c6\u9891\u901a\u8bdd",
          "voip.tooltip.volumezero":
            "\u626c\u58f0\u5668\u97f3\u91cf\u5df2\u8bbe\u7f6e\u4e3a\u96f6\u3002\u8bf7\u63d0\u9ad8\u97f3\u91cf\u4ee5\u542c\u6e05\u5176\u4ed6\u7528\u6237\u7684\u58f0\u97f3\u3002",
          "voip.video.calling.failed.cameraSwitch":
            "\u65e0\u6cd5\u66f4\u6539\u6444\u50cf\u5934\u3002\u8bf7\u91cd\u8bd5\u3002\n",
          "voip.video.calling.failed.noCamera":
            "\u65e0\u6cd5\u5f00\u542f\u6444\u50cf\u5934\u3002\n\u8bf7\u67e5\u770b\u6444\u50cf\u5934\u8fde\u63a5\u72b6\u6001\u3002",
          "voip.video.desc.makeCall.Failed":
            "\u65e0\u6cd5\u901a\u8bdd\u3002\u8bf7\u7a0d\u540e\u518d\u62e8\u3002",
          "voip.video.dynamicspeaking.pinoff": "\u53d6\u6d88\u56fa\u5b9a",
          "voip.video.dynamicspeaking.pinoff.desc":
            "\u5df2\u56fa\u5b9a\u89c6\u9891\u3002\u60a8\u53ef\u4ee5\u70b9\u51fb\u89c6\u9891\u53f3\u4e0a\u89d2\u7684\u201c\u53d6\u6d88\u56fa\u5b9a\u201d\uff0c\u4ee5\u53d6\u6d88\u56fa\u5b9a\u89c6\u9891\u3002",
          "voip.video.effect.popup.downloadfail":
            "\u65e0\u6cd5\u4e0b\u8f7d\u7279\u6548\u3002\u8981\u91cd\u8bd5\u5417\uff1f",
          "voip.video.effect.toast.cameraoff":
            "\u8bf7\u5148\u6253\u5f00\u76f8\u673a\u3002",
          "voip.video.effect.toast.detectionfail":
            "\u8bf7\u786e\u4fdd\u60a8\u7684\u8138\u90e8\u6e05\u6670\u53ef\u89c1\u3002",
          "voip.video.effect.toast.downloadfail":
            "\u65e0\u6cd5\u4e0b\u8f7d\u3002\u8bf7\u91cd\u8bd5\u3002",
          "voip.video.effect.toast.nospace":
            "\u8bbe\u5907\u7a7a\u95f4\u4e0d\u8db3\u3002\u8bf7\u91ca\u653e\u4e00\u4e9b\u5b58\u50a8\u7a7a\u95f4\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "voip.video.effect.toast.xpccrash":
            "\u7531\u4e8e\u53d1\u751f\u4e34\u65f6\u9519\u8bef\uff0c\u76f8\u673a\u7279\u6548\u5df2\u91cd\u7f6e\u3002\n\u8bf7\u91cd\u65b0\u8c03\u6574\u8bbe\u7f6e\u3002",
          "voip.video.menu.bg": "\u80cc\u666f",
          "voip.video.menu.bg.alert.addbg":
            "\u65e0\u6cd5\u8bfb\u53d6\u6b64\u6587\u4ef6\uff0c\u9009\u62e9\u5176\u4ed6\u6587\u4ef6\u4f5c\u4e3a\u80cc\u666f\u3002",
          "voip.video.menu.bg.alert.addbg.button": "\u9009\u62e9",
          "voip.video.menu.bg.alert.maxbg":
            "\u65e0\u6cd5\u6dfb\u52a0\u66f4\u591a\u80cc\u666f\u3002\u8bf7\u5148\u5220\u9664\u4e0d\u7528\u7684\u80cc\u666f\uff0c\u7136\u540e\u518d\u8bd5\u4e00\u6b21\u3002",
          "voip.video.menu.bgsettings": "\u7279\u6548",
          "voip.video.menu.blur": "\u6a21\u7cca\u80cc\u666f",
          "voip.video.menu.effect": "\u8138\u90e8\u7279\u6548",
          "voip.video.menu.filter": "\u6ee4\u955c",
          "voip.video.popupbutton.close": "\u5173\u95ed",
          "voip.video.popupbutton.dontshow": "\u4e0d\u663e\u793a",
          "voip.video.popupbutton.opensettings": "\u524d\u5f80\u8bbe\u7f6e",
          "voip.video.popupbutton.show": "\u663e\u793a",
          "voip.video.popupdesc.dontshowpreview":
            "\u5173\u95ed\u6b64\u9009\u9879\u540e\uff0c\u7cfb\u7edf\u5c06\u4e0d\u663e\u793a\u9884\u89c8\u76f8\u673a\uff0c\u60a8\u53ef\u4ee5\u76f4\u63a5\u52a0\u5165\u89c6\u9891\u901a\u8bdd\u3002",
          "voip.video.popuptitle.dontshowpreview":
            "\u66f4\u6539\u9884\u89c8\u76f8\u673a\u8bbe\u7f6e",
          "voip.video.preview.blur.off": "\u65e0",
          "voip.video.preview.blur.on": "\u6a21\u7cca\u80cc\u666f",
          "voip.video.preview.cameraoff": "\u5173\u95ed\u76f8\u673a",
          "voip.video.preview.desc":
            "\u52a0\u5165\u89c6\u9891\u901a\u8bdd\u524d\uff0c\u8bf7\u5148\u9884\u89c8\u60a8\u7684\u76f8\u673a\u753b\u9762\u3002",
          "voip.video.preview.join": "\u52a0\u5165",
          "voip.video.preview.title": "\u9884\u89c8\u76f8\u673a",
          "voip.video.title.videocallwith": "\u4e0e%1\u89c6\u9891\u901a\u8bdd",
          "voip.video.tooltip.filternblur":
            "\u6765\u8bd5\u8bd5\u6ee4\u955c\u548c\u6a21\u7cca\u80cc\u666f\u7279\u6548\uff01",
          "voip.video.tooltip.startvideocall":
            "\u5355\u51fb\u5f00\u59cb\u89c6\u9891\u901a\u8bdd",
          "voip.video.tooltip.videomirroring":
            "\u89c6\u9891\u955c\u50cf\u6548\u679c",
          "voip.video.tooltip.videomirroringoff":
            "\u5173\u95ed\u89c6\u9891\u955c\u50cf\u6548\u679c",
          "voip.video.tooltip.videomirroringon":
            "\u5f00\u542f\u89c6\u9891\u955c\u50cf\u6548\u679c",
          "voip.videocall.button.beautyfeature": "\u7f8e\u989c",
          "voip.videocall.popup.start": "\u5f00\u59cb",
          "voip.videocall.popup.turnon": "\u5f00\u542f",
          "win10.notification.reply.guide": "\u5728\u6b64\u56de\u590d",
        };
      },
    }]);
