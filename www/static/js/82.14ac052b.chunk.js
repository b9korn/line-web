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
        e._sentryDebugIds[t] = "09be8969-c4e8-4612-b24a-f7772062e22c",
        e._sentryDebugIdIdentifier =
          "sentry-dbid-09be8969-c4e8-4612-b24a-f7772062e22c");
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
    []).push([[82], {
      13082: (e, t, o) => {
        o.r(t), o.d(t, { default: () => a });
        const a = {
          "abuse.report.sent.data.notice.chat_selected":
            "\uc2e0\uace0\ud55c \uba54\uc2dc\uc9c0\uc640 \uadf8 \uc804\ud6c4\ub85c \uc8fc\uace0 \ubc1b\uc740 \uba54\uc2dc\uc9c0 9\uac74, \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4, \uc0c1\ud0dc \uba54\uc2dc\uc9c0 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4 \ub4f1)",
          "abuse.report.sent.data.notice.direct_chat":
            "\ucd5c\uadfc \uba54\uc2dc\uc9c0 10\uac74, \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4, \uc0c1\ud0dc \uba54\uc2dc\uc9c0 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4 \ub4f1)",
          "abuse.report.sent.data.notice.direct_invitation":
            "\ucd5c\uadfc \uba54\uc2dc\uc9c0 10\uac74, \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4, \uc0c1\ud0dc \uba54\uc2dc\uc9c0 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4 \ub4f1)",
          "abuse.report.sent.data.notice.friend_profile":
            "\uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4, \uc0c1\ud0dc \uba54\uc2dc\uc9c0 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4 \ub4f1)",
          "abuse.report.sent.data.notice.group_chat":
            "\uadf8\ub8f9\uc758 \ucd5c\uadfc \uba54\uc2dc\uc9c0 10\uac74, \uadf8\ub8f9 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4, \ub098\ub97c \uadf8\ub8f9\uc5d0 \ucd08\ub300\ud55c \uc0ac\uc6a9\uc790 \uc815\ubcf4 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4 \ub4f1)",
          "abuse.report.sent.data.notice.group_chat_selected":
            "\uc2e0\uace0\ud55c \uba54\uc2dc\uc9c0\uc640 \uadf8 \uc804\ud6c4\ub85c \uc8fc\uace0 \ubc1b\uc740 \uba54\uc2dc\uc9c0 9\uac74, \uadf8\ub8f9 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4, \ub098\ub97c \uadf8\ub8f9\uc5d0 \ucd08\ub300\ud55c \uc0ac\uc6a9\uc790 \uc815\ubcf4 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4 \ub4f1)",
          "abuse.report.sent.data.notice.group_invitation":
            "\uadf8\ub8f9\uc758 \ucd5c\uadfc \uba54\uc2dc\uc9c0 10\uac74, \uadf8\ub8f9 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4, \ub098\ub97c \uadf8\ub8f9\uc5d0 \ucd08\ub300\ud55c \uc0ac\uc6a9\uc790 \uc815\ubcf4 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4 \ub4f1)",
          "abuse.report.sent.data.notice.note_comment":
            "\uc2e0\uace0\ub41c \ub178\ud2b8 \ub313\uae00 \uc815\ubcf4(\ub313\uae00\uacfc \ub313\uae00\uc774 \ub2ec\ub9b0 \ub178\ud2b8 \ub4f1), \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\uc774\ub984 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\uc774\ub984 \ub4f1)",
          "abuse.report.sent.data.notice.note_post":
            "\uc2e0\uace0\ub41c \ub178\ud2b8\uc640 \ud574\ub2f9 \ub178\ud2b8\uc5d0 \ub2ec\ub9b0 \ub313\uae00, \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\uc774\ub984 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\uc774\ub984 \ub4f1)",
          "abuse.report.sent.data.notice.room_chat":
            "\ucd5c\uadfc \uba54\uc2dc\uc9c0 10\uac74, \uc2e0\uace0\uc790 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4 \ub4f1), \ub300\ud654 \uc815\ubcf4(\ub098\ub97c \ub300\ud654\uc5d0 \ucd08\ub300\ud55c \uc0ac\uc6a9\uc790 \uc815\ubcf4 \ub4f1)",
          "abuse.report.sent.data.notice.room_chat_selected":
            "\uc2e0\uace0\ud55c \uba54\uc2dc\uc9c0\uc640 \uadf8 \uc804\ud6c4\ub85c \uc8fc\uace0 \ubc1b\uc740 \uba54\uc2dc\uc9c0 9\uac74, \uc2e0\uace0\uc790 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4 \ub4f1), \ub300\ud654 \uc815\ubcf4(\ub098\ub97c \ub300\ud654\uc5d0 \ucd08\ub300\ud55c \uc0ac\uc6a9\uc790 \uc815\ubcf4 \ub4f1)",
          "abuse.report.sent.data.notice.room_invitation":
            "\ucd5c\uadfc \uba54\uc2dc\uc9c0 10\uac74, \uc2e0\uace0\uc790 \uc815\ubcf4(\uc774\ub984, \ud504\ub85c\ud544 \uc0ac\uc9c4 \ub4f1), \ub300\ud654 \uc815\ubcf4(\ub098\ub97c \ub300\ud654\uc5d0 \ucd08\ub300\ud55c \uc0ac\uc6a9\uc790 \uc815\ubcf4 \ub4f1)",
          "abuse.report.sent.data.notice.square.chat.selected":
            "\ucd5c\uadfc \uba54\uc2dc\uc9c0 100\uac74, \uc2e0\uace0\ub41c \uc624\ud508\ucc57 \uc815\ubcf4(\ucee4\ubc84 \uc0ac\uc9c4, \uc624\ud508\ucc57 \uc774\ub984, \uba64\ubc84 \uc218, \uc624\ud508\ucc57 \uc2dd\ubcc4\uc790 \ub4f1), \uc2e0\uace0\ub41c \uc624\ud508\ucc57 \uc6b4\uc601\uc790 \ubc0f \uc2e0\uace0\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790 \ub4f1)",
          "abuse.report.sent.data.notice.square.member.selected":
            "\ucd5c\uadfc \uba54\uc2dc\uc9c0 100\uac74, \uc2e0\uace0\ub41c \uc624\ud508\ucc57 \uc815\ubcf4(\ucee4\ubc84 \uc0ac\uc9c4, \uc624\ud508\ucc57 \uc774\ub984, \uba64\ubc84 \uc218 \ub4f1), \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \ud504\ub85c\ud544 \uc0ac\uc9c4, \uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790 \ub4f1)",
          "abuse.report.sent.data.notice.square.message.selected":
            "\uc2e0\uace0\ub41c \uba54\uc2dc\uc9c0\uc640 \uc2e0\uace0\ub41c \uba54\uc2dc\uc9c0 \uc774\uc804\uc5d0 \uc8fc\uace0\ubc1b\uc740 \ucd5c\uadfc \uba54\uc2dc\uc9c0 \ucd5c\ub300 10\uac74, \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790\uac00 \ucc38\uc5ec\ud55c \ub300\ud654\ubc29 \uc815\ubcf4(\ub300\ud654\ubc29 \uc2dd\ubcc4\uc790 \ub4f1), \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790\uac00 \ucc38\uc5ec\ud55c \uc624\ud508\ucc57 \uc815\ubcf4(\ucee4\ubc84 \uc0ac\uc9c4, \uc624\ud508\ucc57 \uc774\ub984, \uba64\ubc84 \uc218, \uc624\ud508\ucc57 \uc2dd\ubcc4\uc790 \ub4f1), \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \ud504\ub85c\ud544 \uc0ac\uc9c4, \uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790 \ub4f1)",
          "abuse.report.sent.data.notice.square.note.selected":
            "\uc2e0\uace0\ub41c \ub178\ud2b8 \uc815\ubcf4(\ud14d\uc2a4\ud2b8, \uc774\ubbf8\uc9c0, \ub3d9\uc601\uc0c1, \uc774\ubaa8\ud2f0\ucf58, \ub178\ud2b8 \uc2dd\ubcc4\uc790 \ub4f1), \uc2e0\uace0\ub41c \ub178\ud2b8\uac00 \uc791\uc131\ub41c \uc624\ud508\ucc57 \uc815\ubcf4(\ucee4\ubc84 \uc0ac\uc9c4, \uc624\ud508\ucc57 \uc774\ub984, \uba64\ubc84 \uc218, \uc624\ud508\ucc57 \uc2dd\ubcc4\uc790 \ub4f1), \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \ud504\ub85c\ud544 \uc0ac\uc9c4, \ucc38\uc5ec \uc0c1\ud0dc, \uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790 \ub4f1)",
          "abuse.report.sent.data.notice.square.notecomment.selected":
            "\uc2e0\uace0\ub41c \ub178\ud2b8 \ub313\uae00 \uc815\ubcf4(\ud14d\uc2a4\ud2b8, \uc774\ubbf8\uc9c0, \uc774\ubaa8\ud2f0\ucf58, \ub313\uae00 \uc2dd\ubcc4\uc790 \ub4f1), \uc2e0\uace0\ub41c \ub178\ud2b8 \ub313\uae00\uc774 \uc791\uc131\ub41c \uc624\ud508\ucc57 \uc815\ubcf4(\ucee4\ubc84 \uc0ac\uc9c4, \uc624\ud508\ucc57 \uc774\ub984, \uba64\ubc84 \uc218, \uc624\ud508\ucc57 \uc2dd\ubcc4\uc790 \ub4f1), \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \ud504\ub85c\ud544 \uc0ac\uc9c4, \ub0b4\ubd80 \uc2dd\ubcc4\uc790, \ucc38\uc5ec \uc0c1\ud0dc, \uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790 \ub4f1)",
          "abuse.report.sent.data.notice.square.setting.selected":
            "\ucd5c\uadfc \uba54\uc2dc\uc9c0 50\uac74, \uc2e0\uace0\ub41c \ub300\ud654\ubc29 \uc815\ubcf4(\ucee4\ubc84 \uc0ac\uc9c4, \ub300\ud654\ubc29 \uc774\ub984, \uba64\ubc84 \uc218, \ub300\ud654\ubc29 \uc2dd\ubcc4\uc790 \ub4f1), \uc2e0\uace0\ub41c \uc624\ud508\ucc57 \uc815\ubcf4(\uc624\ud508\ucc57 \uc2dd\ubcc4\uc790 \ub4f1), \uc2e0\uace0\ub41c \uc624\ud508\ucc57 \uc6b4\uc601\uc790 \ubc0f \uc2e0\uace0\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790 \ub4f1)",
          "abuse.report.sent.data.notice.template":
            "\uc2e0\uace0 \uc2dc \ub2e4\uc74c \uc815\ubcf4\uac00 LY Corporation\uc5d0 \uc804\uc1a1\ub429\ub2c8\ub2e4. \ud574\ub2f9 \uc815\ubcf4\ub294 \uc2e0\uace0 \ub0b4\uc6a9 \ud655\uc778 \ubc0f \ub300\uc751, \ubd80\uc815 \uc774\uc6a9 \ubc29\uc9c0\uc5d0 \uc0ac\uc6a9\ub420 \uc218 \uc788\uc73c\uba70, \uad00\ub828 \uae30\ub2a5 \uac1c\ubc1c \ub4f1\uc5d0\ub3c4 \ud65c\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub610\ud55c, \uc704 \ubaa9\uc801\uc744 \uc704\ud574 \ud544\uc694\ud55c \ubc94\uc704 \ub0b4\uc5d0\uc11c LY Corporation \uacc4\uc5f4\uc0ac \ubc0f \ud611\ub825\uc0ac\uc5d0 \ub2e4\uc74c \uc815\ubcf4\uac00 \uc81c\uacf5\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\n\uc804\uc1a1\ub418\ub294 \uc815\ubcf4:\n%1",
          "note.reportnote.desc.reportnotefromcomment":
            "\uc2e0\uace0\ub41c \ub178\ud2b8 \ub313\uae00 \uc815\ubcf4(\ub313\uae00 \uc2dd\ubcc4\uc790, \ud14d\uc2a4\ud2b8, \uc774\ubbf8\uc9c0, \uc774\ubaa8\ud2f0\ucf58 \ub4f1), \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790, \uc774\ub984 \ub4f1), \ub300\ud654\ubc29 \uc815\ubcf4(\ub300\ud654\ubc29 \uc2dd\ubcc4\uc790 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790, \uc774\ub984 \ub4f1)",
          "note.reportnote.desc.reportnotefrommenu":
            "\uc2e0\uace0\ub41c \ub178\ud2b8 \uc815\ubcf4(\ub178\ud2b8 \uc2dd\ubcc4\uc790, \ud14d\uc2a4\ud2b8, \uc774\ubbf8\uc9c0, \uc774\ubaa8\ud2f0\ucf58, \ub3d9\uc601\uc0c1 \ub4f1), \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790, \uc774\ub984 \ub4f1), \ub300\ud654\ubc29 \uc815\ubcf4(\ub300\ud654\ubc29 \uc2dd\ubcc4\uc790 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790, \uc774\ub984 \ub4f1)",
          "openchat.abusereport.desc.threadmessage":
            "\uc2e0\uace0\ub41c \uba54\uc2dc\uc9c0\uc640 \uc2e0\uace0\ub41c \uba54\uc2dc\uc9c0 \uc774\uc804\uc5d0 \uc8fc\uace0\ubc1b\uc740 \ucd5c\uadfc \uc2a4\ub808\ub4dc \uba54\uc2dc\uc9c0 \ucd5c\ub300 10\uac74, \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \ud504\ub85c\ud544 \uc0ac\uc9c4 \ub4f1), \uc624\ud508\ucc57 \uc815\ubcf4(\uc624\ud508\ucc57 \uc2dd\ubcc4\uc790, \uc624\ud508\ucc57 \uc774\ub984, \uc624\ud508\ucc57 \ucee4\ubc84 \uc0ac\uc9c4, \uba64\ubc84 \uc218 \ub4f1), \ub300\ud654\ubc29 \uc815\ubcf4(\ub300\ud654\ubc29 \uc2dd\ubcc4\uc790 \ub4f1), \uc2a4\ub808\ub4dc \uc815\ubcf4(\uc2a4\ub808\ub4dc \uc2dd\ubcc4\uc790 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790, \ub2c9\ub124\uc784 \ub4f1)",
          "openchat.abusereport.desc.threaduser":
            "\uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790\uc758 \ucd5c\uadfc \uc2a4\ub808\ub4dc \uba54\uc2dc\uc9c0 50\uac74, \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790, \ub2c9\ub124\uc784, \ud504\ub85c\ud544 \uc0ac\uc9c4 \ub4f1), \uc624\ud508\ucc57 \uc815\ubcf4(\uc624\ud508\ucc57 \uc774\ub984, \uc624\ud508\ucc57 \ucee4\ubc84 \uc0ac\uc9c4, \uba64\ubc84 \uc218 \ub4f1), \ub300\ud654\ubc29 \uc815\ubcf4(\ub300\ud654\ubc29 \uc2dd\ubcc4\uc790 \ub4f1), \uc2a4\ub808\ub4dc \uc815\ubcf4(\uc2a4\ub808\ub4dc \uc2dd\ubcc4\uc790, \ucd5c\uadfc \uc2a4\ub808\ub4dc \uba54\uc2dc\uc9c0 100\uac74 \ub4f1), \uc2e0\uace0\uc790 \uc815\ubcf4(\uc0ac\uc6a9\uc790 \uc2dd\ubcc4\uc790, \ub2c9\ub124\uc784 \ub4f1)",
          AUTHORIZE_MSG_CLOSING_ALERT: "",
          "Common.warning.low.hard.disk.space":
            "\ud558\ub4dc\ub514\uc2a4\ud06c\uc758 \uc800\uc7a5 \uacf5\uac04\uc774 \ubd80\uc871\ud569\ub2c8\ub2e4.\n30MB \uc774\uc0c1\uc758 \uc5ec\uc720 \uacf5\uac04\uc744 \ud655\ubcf4 \ud6c4 \n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          ImageViewerLabelNoImage:
            "\ub300\ud654\ubc29\uc5d0\uc11c \uacf5\uc720\ub41c \uc0ac\uc9c4 \ubc0f \ub3d9\uc601\uc0c1\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
          "Keep.info.from.keepmemo": "Keep \uba54\ubaa8",
          LoginErrorNaverLoginForbbide:
            "\uc62c\ubc14\ub978 \uc774\uba54\uc77c \ud615\uc2dd\uc73c\ub85c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          Poll_Message_btn: "",
          Poll_Title: "",
          "Setting.Alert.Remove.History":
            "\ub300\ud654 \ub0b4\uc6a9\uc744 \uc0ad\uc81c\ud558\uba74 \ub2e4\uc2dc \ubcfc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\ub300\ud654 \ub0b4\uc6a9\uc744 \uc0ad\uc81c\ud558\uaca0\uc2b5\ub2c8\uae4c? ",
          "Setting.Basic.ScaleRatio.Apply.Alert":
            "\ud654\uba74 \ubc30\uc728 \ubcc0\uacbd\uc744 \uc704\ud574 LINE\uc744 \ub2e4\uc2dc \uc2e4\ud589\ud569\ub2c8\ub2e4.\n\uc9c0\uae08 \ubc14\ub85c \uc7ac\uc2e4\ud589\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "Setting.label.alarm.sound.1": "\uae30\ubcf8\uc74c",
          "Setting.label.alarm.sound.2": "\ub77c\uc778(\uc2e0\ub098\ub294)",
          "Setting.label.alarm.sound.3": "\ub77c\uc778(\ucc28\ubd84\ud55c)",
          "Setting.label.alarm.sound.4": "\uc2a4\ud0c0\ud2b8",
          "Setting.label.alarm.sound.5": "\uae61\ud1b5\uc811\uae30",
          "Setting.label.alarm.sound.6": "\uc2e4\ub85c\ud3f0",
          "Setting.label.alarm.sound.7": "\ud718\ud30c\ub78c",
          "Setting.label.alarm.sound.8": "\uc2a4\ud53c\ub4dc\ud034\uc988",
          "Setting.label.alarm.sound.9": "\ud06c\ub9ac\uc2a4\ud0c8",
          "access.chat.search.calendar": "\uce98\ub9b0\ub354",
          "access.openchat.chatmenu.button.addyourthreads":
            "\uc990\uaca8\ucc3e\uae30 \uc2a4\ub808\ub4dc\uc5d0 \ucd94\uac00",
          "access.openchat.chatmenu.button.removeyourthreads":
            "\uc990\uaca8\ucc3e\uae30 \uc2a4\ub808\ub4dc\uc5d0\uc11c \uc0ad\uc81c",
          "access.openchat.chatmenu.button.yourthreads":
            "\uc990\uaca8\ucc3e\uae30 \uc2a4\ub808\ub4dc",
          "access.square.chat.button.more":
            "\uad11\uace0 \uc635\uc158 \uba54\ub274 \uc5f4\uae30",
          "ad.alert.popup.cantplayduringcall":
            "\ud1b5\ud654 \uc911\uc5d0\ub294 \uc7ac\uc0dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "ad.desc.playinginviewer":
            "\ubdf0\uc5b4 \uc2e4\ud589 \uc911\uc785\ub2c8\ub2e4.",
          "ad.menu.admute.hideContent":
            "\uc774 \ucf58\ud150\uce20 \uc228\uae30\uae30",
          "ad.menu.admute.hideadvertiser":
            "\uc774 \uad11\uace0\uc8fc\uc758 \uad11\uace0 \ubaa8\ub450 \uc228\uae30\uae30",
          "ad.menu.admute.hidethisad": "\uc774 \uad11\uace0 \uc228\uae30\uae30",
          "ad.menu.videoEnlarge": "\ud06c\uac8c \ubcf4\uae30",
          "addFriends.error.crossregion":
            "\uc774 \uc0ac\uc6a9\uc790\ub97c \uce5c\uad6c\ub85c \ucd94\uac00\ud558\ub824\uba74 \uce5c\uad6c \ucd94\uac00\uc6a9 QR \ucf54\ub4dc\ub97c \uc2a4\uce94\ud574 \uc8fc\uc138\uc694.",
          "addfriends.label.norecommendation.description":
            "\ucd94\ucc9c \uce5c\uad6c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "addfriends.menu.chatandgroup": "\uadf8\ub8f9 \ub9cc\ub4e4\uae30",
          "addfriends.search.captcha.fail":
            "\uc798\ubabb \uc785\ub825\ud588\uc2b5\ub2c8\ub2e4.\n\uce5c\uad6c\ub97c \ucd94\uac00\ud558\ub824\uba74 \uc22b\uc790\ub97c \uc815\ud655\ud558\uac8c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "album.add.photo.drag":
            "\uc0ac\uc9c4\uc744 \uc5ec\uae30\ub85c \ub04c\uc5b4\ub2e4 \ub193\uc73c\uc138\uc694.",
          "album.addphotos.desc.limitexceeded":
            "\uc568\ubc94\ub2f9 \ucf58\ud150\uce20\ub97c \ucd5c\ub300 1,000\uac1c\uae4c\uc9c0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "album.addpopup.desc.e2eeabletoretry":
            "\ucf58\ud150\uce20\ub97c \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "album.addpopup.desc.retry":
            "\uc77c\ubd80 \ucf58\ud150\uce20\ub97c \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "album.addpopup.desc.unabletoretry":
            "\uc77c\ubd80 \ucf58\ud150\uce20\ub97c \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc568\ubc94\uc5d0\uc11c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ud30c\uc77c\uc785\ub2c8\ub2e4.",
          "album.createalbum.tooltip.originalresolution.jp":
            "\uc6d0\ubcf8 \ud654\uc9c8\ub85c \uc0ac\uc9c4\uc744 \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc788\uc5b4\uc694!",
          "album.deletepopup.desc.deletealbum":
            "\uc568\ubc94\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \uc568\ubc94\uc5d0 \ud3ec\ud568\ub41c \ucf58\ud150\uce20\ub3c4 \ubaa8\ub450 \uc0ad\uc81c\ub418\uba70 \ubcf5\uad6c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "album.label.download": "\uc800\uc7a5",
          "album.main.desc.albumvideos.other": "\ub3d9\uc601\uc0c1 %n",
          "album.main.toast.encodingerror":
            "\uc778\ucf54\ub529 \uc624\ub958\ub85c \uc7ac\uc0dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "album.main.toast.encodinginprogress":
            "\uc778\ucf54\ub529 \uc911\uc785\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "album.main.tooltip.paidplan":
            "\ub3d9\uc601\uc0c1 \ucd94\uac00 \uae30\ub2a5\uc740 \uc720\ub8cc\uc774\uba70, \uc5c5\ub85c\ub4dc\ud55c \uc0ac\uc6a9\uc790\uac00 \uba64\ubc84\uc2ed\uc744 \ud574\uc9c0\ud558\uba74 \ubaa8\ub450 \uc0ad\uc81c\ub429\ub2c8\ub2e4.",
          "album.mainpopup.button.no": "\uc544\ub2c8\uc694",
          "album.mainpopup.button.yes": "\ub124",
          "album.mainpopup.desc.deletedvideo":
            "\uc0ad\uc81c\ub41c \ub3d9\uc601\uc0c1\uc785\ub2c8\ub2e4.",
          "album.mainpopup.desc.stopadding":
            "\uc5c5\ub85c\ub4dc\ub97c \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "album.msg.cancel.upload":
            "\uc0ac\uc9c4 \uc62c\ub9ac\uae30\ub97c \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "album.picker.toast.20videomax.jp":
            "\ub3d9\uc601\uc0c1\uc740 \ud55c \ubc88\uc5d0 \ucd5c\ub300 20\uac1c\uae4c\uc9c0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "album.picker.toast.5minutesvideomax.jp":
            "5\ubd84 \uc774\ud558\uc758 \ub3d9\uc601\uc0c1\ub9cc \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "album.picker.toast.max300":
            "\ud55c \ubc88\uc5d0 \ucd5c\ub300 300\uac1c\uae4c\uc9c0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "album.picker.toast.originalresolution.jp":
            "\uc120\ud0dd\ud55c \uc0ac\uc9c4\uc740 \uc6d0\ubcf8 \ud654\uc9c8\ub85c \ucd94\uac00\ub429\ub2c8\ub2e4.",
          "album.picker.toast.over20mb.jp":
            "\ub3d9\uc601\uc0c1, \ud06c\uae30\uac00 \ud070 \uc0ac\uc9c4, \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ud615\uc2dd\uc774\uac70\ub098 LINE \uc571\uc5d0\uc11c \ud3b8\uc9d1\ud55c \uc0ac\uc9c4\uc740 \uc77c\ubc18 \ud654\uc9c8\ub85c \uc5c5\ub85c\ub4dc\ub429\ub2c8\ub2e4.",
          "album.picker.toast.somestandard.jp":
            "\uc77c\ubd80 \uc0ac\uc9c4\ub9cc \uc6d0\ubcf8 \ud654\uc9c8\ub85c \ucd94\uac00\ub429\ub2c8\ub2e4. \ub3d9\uc601\uc0c1, \ud06c\uae30\uac00 \ud070 \uc0ac\uc9c4, \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ud615\uc2dd\uc774\uac70\ub098 LINE \uc571\uc5d0\uc11c \ud3b8\uc9d1\ud55c \uc0ac\uc9c4\uc740 \uc77c\ubc18 \ud654\uc9c8\ub85c \uc5c5\ub85c\ub4dc\ub429\ub2c8\ub2e4.",
          "album.picker.toast.videomax.jp.other":
            "\uc774 \uc568\ubc94\uc5d0\ub294\xa0\ub3d9\uc601\uc0c1\uc744 %n\uac1c\ub9cc \ub354 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "album.share.toast.addvideomax.jp":
            "\uc568\ubc94\ub2f9 \ub3d9\uc601\uc0c1\uc740 \ucd5c\ub300 100\uac1c\uae4c\uc9c0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "album.updatepopup.button.dontshow":
            "\ub2e4\uc2dc \ud45c\uc2dc \uc548 \ud568",
          "album.updatepopup.button.later": "\ub098\uc911\uc5d0",
          "album.updatepopup.button.updatenow":
            "\uc9c0\uae08 \uc5c5\ub370\uc774\ud2b8",
          "album.updatepopup.desc.notavailable":
            "\ud604\uc7ac \ubc84\uc804\uc5d0\uc11c\ub294 \uc77c\ubd80 \ucf58\ud150\uce20\uac00 \uc568\ubc94\uc5d0 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. LINE\uc744 \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud574 \uc8fc\uc138\uc694.",
          "album.viewer.button.additems": "\ucf58\ud150\uce20 \ucd94\uac00",
          "alert.album.blocked.user":
            "\ucc28\ub2e8\ud55c \uacc4\uc815\uc778 \uacbd\uc6b0 \ud568\uaed8 \uc568\ubc94\uc744 \uc4f8 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "alert.note.blocked.user":
            "\ucc28\ub2e8\ud55c \uacc4\uc815\uc778 \uacbd\uc6b0 \ud568\uaed8 \ub178\ud2b8\ub97c \uc4f8 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "announce.donotshowagain": "\ub2e4\uc2dc \uc548 \ubcf4\uae30",
          "announce.donotshowagain.mouseover":
            "\ub2e4\uc2dc \uc548 \ubcf4\uae30",
          "announce.error":
            "\ud574\ub2f9 \uacf5\uc9c0\uc0ac\ud56d \uba54\uc2dc\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "announce.minimize": "\uc811\uc5b4\ub450\uae30",
          "announce.unannounce": "\uacf5\uc9c0 \ucde8\uc18c",
          "announcement.message.album": "%1 \uc568\ubc94",
          "announcement.message.annoucement": "\uacf5\uc9c0",
          "announcement.message.error.description":
            "\ud574\ub2f9 \uacf5\uc9c0\uc0ac\ud56d \uba54\uc2dc\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "announcement.message.note.no.text":
            "%1\uc5d0 \uacf5\uc720\ub41c \ub178\ud2b8",
          "announcement.message.note.text": "%1 \ub178\ud2b8",
          "announcement.system.message":
            "<![CDATA[%1\ub2d8\uc774 <u>\uacf5\uc9c0\ub97c \uc62c\ub838\uc2b5\ub2c8\ub2e4</u>.]]>",
          "app.title": "LINE \uc5c5\ub370\uc774\ud2b8",
          "att.prepopup.description":
            "\ud5c8\uc6a9 \uc2dc \uad00\uc2ec\uc0ac\uc5d0 \uae30\ubc18\ud55c LINE \ucf58\ud150\uce20\uc640 \uad11\uace0\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
          "authorize.content.desc1":
            "\uc548\uc804\ud55c \uc774\uc6a9\uc744 \uc704\ud574 \ucc98\uc74c \uc811\uc18d\ud55c PC\uc5d0\uc11c\ub294 \ubcf8\uc778 \ud655\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",
          "authorize.content.desc2":
            "\ubaa8\ubc14\uc77c LINE\uc744 \uc2e4\ud589\ud558\uc5ec \uc544\ub798 \uc22b\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",
          "authorize.e2ee.about.letterSealing": "Letter Sealing\uc774\ub780?",
          "authorize.e2ee.app.update":
            "LINE\uc758 \ubcf4\uc548\uc774 \uac15\ud654\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8 \ud6c4 \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "authorize.e2ee.desc1":
            "Letter Sealing\uc758 \uc548\uc804\ud55c \uc0ac\uc6a9\uc744 \uc704\ud574 \n\ubcf8\uc778 \uc778\uc99d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",
          "authorize.e2ee.desc2":
            "\ubaa8\ubc14\uc77c LINE\uc744 \uc2e4\ud589\ud558\uc5ec \uc544\ub798 \uc22b\uc790\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",
          "authorize.e2ee.primary.cancel":
            "LINE \ubaa8\ubc14\uc77c \ubc84\uc804\uc5d0\uc11c \uc778\uc99d\uc744 \ucde8\uc18c\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "authorize.msg.closing.alert":
            "PC \ub85c\uadf8\uc778\uc744 \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "authorize.msg.timeout.alert":
            "\ub85c\uadf8\uc778 \uc81c\ud55c \uc2dc\uac04\uc774 \ucd08\uacfc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "authorize.msg.useage.alert":
            "\ub85c\uadf8\uc778\ud558\ub824\uba74 \ud734\ub300\ud3f0 LINE \uc571\uc758 \uc124\uc815> \uacc4\uc815\uc5d0\uc11c '\ub85c\uadf8\uc778 \ud5c8\uc6a9'\uc744 \ucf1c\uc8fc\uc138\uc694.",
          "authorize.remained.time": "\ub0a8\uc740\uc2dc\uac04",
          "authorize.window.title": "PC \uc778\uc99d\xa0",
          "autoSuggest.add.language": "\uc5b8\uc5b4 \ucd94\uac00",
          "autoSuggest.enable": "\uc790\ub3d9\uc644\uc131 \ucf1c\uae30",
          "autoSuggest.enabled.language":
            "\uc0ac\uc6a9\uc911\uc778 \uc5b8\uc5b4",
          "autoSuggest.msg.desc":
            "\uba54\uc2dc\uc9c0\ub97c \uc785\ub825\ud560\ub54c \uc2a4\ud2f0\ucee4\ub098 \uc774\ubaa8\ud2f0\ucf58\uc744 \uc790\ub3d9\uc73c\ub85c \ucd94\ucc9c\ud569\ub2c8\ub2e4.",
          "autoSuggest.msg.desc.downloadFailed":
            "\ub2e4\uc6b4\ub85c\ub4dc\ub97c \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \n\ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",
          "autoSuggest.msg.download.all.emoji":
            "\ubcf4\uc720\ud55c \uc774\ubaa8\ud2f0\ucf58\uc744 \ubaa8\ub450 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "autoSuggest.msg.download.all.sticker":
            "\uc2a4\ud2f0\ucee4\ub97c \ubbf8\ub9ac \ubcf4\ub824\uba74 \uba3c\uc800 \ub2e4\uc6b4\ub85c\ub4dc\ud574\uc57c \ud569\ub2c8\ub2e4.\n\uc2a4\ud2f0\ucee4\ub97c \ubaa8\ub450 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "autoSuggest.title": "\uc2a4\ud2f0\ucee4 \uc790\ub3d9\uc644\uc131",
          "buddy.alert.common.failed.add.contact":
            "\uce5c\uad6c\ub97c \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "buddy.alert.not.allowed.add.contact":
            "\ucd94\uac00\ud560 \uc218 \uc788\ub294 \uce5c\uad6c \uc218\uac00 \uc81c\ud55c\ub41c \uacc4\uc815\uc774\ubbc0\ub85c \ub354 \uc774\uc0c1 \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "buddy.btn.addBuddy": "\uce5c\uad6c \ucd94\uac00",
          "buddy.btn.blockBuddy": "\ucc28\ub2e8",
          "buddy.btn.chat": "\ub300\ud654\ud558\uae30",
          "buddy.btn.home": "Home",
          "buddy.btn.setting.profile": "\ud504\ub85c\ud544 \uc124\uc815",
          "buddy.btn.unblockBuddy": "\ucc28\ub2e8\ud574\uc81c",
          "buddy.btn.voip": "\uc74c\uc131\ud1b5\ud654",
          "buddy.label.edit.title": "\uc774\ub984 \ubcc0\uacbd",
          "buddy.label.info.title": "\ud504\ub85c\ud544",
          "buddylist.chooseFriend.empty.btn": "\ub300\ud654\ud558\uae30",
          "buddylist.chooseFriend.empty.desc":
            "\ub300\ud654\ub97c \uc2dc\uc791\ud574 \ubcf4\uc138\uc694!",
          "buddylist.chooseGroup.emty.desc": "",
          "buddylist.chooseMe.empty.desc":
            "\ub300\ud654\ub97c \uc2dc\uc791\ud574 \ubcf4\uc138\uc694!",
          "buddylist.plusMenu.chat": "\ub300\ud654\ud558\uae30",
          "budy.label.unregisterUser":
            "\uce5c\uad6c\ub85c \ucd94\uac00\ud558\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790 \uc785\ub2c8\ub2e4. ",
          "call.callsettingspreview.desc.nocamera":
            "\ud1b5\ud654 \uc2dc\uc791 \uc804\uc5d0 \ub0b4 \uc601\uc0c1\uacfc \uc18c\ub9ac\ub97c \ud655\uc778\ud574 \ubcf4\uc138\uc694.\n\uce74\uba54\ub77c\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc544 \uc601\uc0c1\uc774 \uc804\ub2ec\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "call.callsettingspreview.desc.nocameradetected":
            "\uce74\uba54\ub77c\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "call.callsettingspreview.desc.nomic":
            "\ud1b5\ud654 \uc2dc\uc791 \uc804\uc5d0 \ub0b4 \uc601\uc0c1\uacfc \uc18c\ub9ac\ub97c \ud655\uc778\ud574 \ubcf4\uc138\uc694.\n\ub9c8\uc774\ud06c\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc544 \uc74c\uc131\uc774 \uc804\ub2ec\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "call.callsettingspreview.desc.nomicdetected":
            "\ub9c8\uc774\ud06c\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "call.callsettingspreview.desc.nomicorcamera":
            "\ud1b5\ud654 \uc2dc\uc791 \uc804\uc5d0 \ub0b4 \uc601\uc0c1\uacfc \uc18c\ub9ac\ub97c \ud655\uc778\ud574 \ubcf4\uc138\uc694.\n\uce74\uba54\ub77c\uc640 \ub9c8\uc774\ud06c\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc544 \uc601\uc0c1 \ubc0f \uc74c\uc131\uc774 \uc804\ub2ec\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "call.callsettingspreview.desc.nomicorcameradetected":
            "\uce74\uba54\ub77c\uc640 \ub9c8\uc774\ud06c\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "call.cameraoff.friend":
            "\uc0c1\ub300\ubc29 \uce74\uba54\ub77c \uaebc\uc9d0",
          "call.cameraoff.me": "\ub0b4 \uce74\uba54\ub77c \uaebc\uc9d0",
          "call.chat.confirm.popup.start":
            "\ud1b5\ud654\ub97c \uc2dc\uc791\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "call.chat.confirm.popup.start.btn.video":
            "\uc601\uc0c1\ud1b5\ud654 \uc2dc\uc791",
          "call.chat.confirm.popup.start.btn.voice":
            "\uc74c\uc131\ud1b5\ud654 \uc2dc\uc791",
          "call.chatscreen.popup.alreadyinacall":
            "\uc9c0\uae08 \ud1b5\ud654 \uc911\uc785\ub2c8\ub2e4.",
          "call.doodling.popup.viewerupdaterequired":
            "\uc0c1\ub300\ubc29\uc758 LINE \uc571 \ubc84\uc804\uc774 \ub0ae\uc544 \uadf8\ub9ac\uae30 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\xa0",
          "call.doodling.toast.doodlepaused":
            "\ud654\uba74 \uacf5\uc720\uac00 \uc77c\uc2dc\uc911\uc9c0\ub418\uc5b4 \uadf8\ub9ac\uae30 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "call.doodling.toast.noiosdoodle":
            "iOS\ub85c \uacf5\uc720\ub41c \ud654\uba74\uc5d0\ub294 \uadf8\ub9ac\uae30 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "call.doodling.toast.sharepaused":
            "\ud654\uba74 \uacf5\uc720 \uc77c\uc2dc\uc911\uc9c0 \uc911\uc785\ub2c8\ub2e4.",
          "call.doodling.toast.sharerupdaterequired":
            "\ud654\uba74\uc744 \uacf5\uc720\ud55c \uba64\ubc84\uc758 LINE \uc571 \ubc84\uc804\uc774 \ub0ae\uc544 \uadf8\ub9ac\uae30 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\xa0",
          "call.effects.menu.stickers": "\uc2a4\ud2f0\ucee4",
          "call.effects.popup.graphiccardproblem":
            "\uc0ac\uc6a9 \uc911\uc778 \uadf8\ub798\ud53d \uc7a5\uce58\uac00 LINE \uc601\uc0c1 \ud1b5\ud654\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc544, \uc601\uc0c1\uc774 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uacc4\uc18d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "call.effects.popup.removebgeffect":
            "\uc0ac\uc6a9 \uc911\uc778 \ubc30\uacbd \ud6a8\uacfc\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \uc0ad\uc81c\ud560 \uacbd\uc6b0 \ub0b4 \uc2e4\uc81c \ubc30\uacbd\uc774 \uc0c1\ub300\ubc29\uc5d0\uac8c \ub178\ucd9c\ub429\ub2c8\ub2e4.",
          "call.effects.toast.stickersonetime":
            "\ud1b5\ud654 \ud654\uba74\uc5d0\uc11c\ub294 \ub0b4 \uc2a4\ud2f0\ucee4 \uc77c\ubd80\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "call.error.popupdesc.featureunavailableondevice":
            "\ud1b5\ud654 \uc911\uc778 \uba64\ubc84\uac00 \ud604\uc7ac \uc0ac\uc6a9 \uc911\uc778 \uae30\uae30\uc5d0\uc11c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uae30\ub2a5\uc744 \uc2e4\ud589\ud588\uc2b5\ub2c8\ub2e4. \uc774 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 \ubaa8\ubc14\uc77c \ubc84\uc804 LINE\uc744 \uc774\uc6a9\ud574 \uc8fc\uc138\uc694.",
          "call.error.popupdesc.groupcallunavailable":
            "\ud604\uc7ac \uadf8\ub8f9\ud1b5\ud654 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ube60\ub978 \uc815\uc0c1\ud654\ub97c \uc704\ud574 \ucd5c\uc120\uc744 \ub2e4\ud558\uaca0\uc2b5\ub2c8\ub2e4.",
          "call.error.popupdesc.livetalkunavailable":
            "\ud604\uc7ac \ub77c\uc774\ube0c \ud1a0\ud06c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ube60\ub978 \uc815\uc0c1\ud654\ub97c \uc704\ud574 \ucd5c\uc120\uc744 \ub2e4\ud558\uaca0\uc2b5\ub2c8\ub2e4.",
          "call.error.popupdesc.oacallunavailable":
            "\ud604\uc7ac \ud1b5\ud654 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ube60\ub978 \uc815\uc0c1\ud654\ub97c \uc704\ud574 \ucd5c\uc120\uc744 \ub2e4\ud558\uaca0\uc2b5\ub2c8\ub2e4.",
          "call.error.popupdesc.outdatedapp":
            "\ud1b5\ud654 \uc911\uc778 \uba64\ubc84\uac00 \ub0b4 \uae30\uae30\uc758 LINE \ubc84\uc804\uc5d0 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uae30\ub2a5\uc744 \uc2e4\ud589\ud588\uc2b5\ub2c8\ub2e4. \uc774 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 LINE\uc744 \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud574 \uc8fc\uc138\uc694.",
          "call.error.popupdesc.videocallunavailable":
            "\ud604\uc7ac \uc601\uc0c1\ud1b5\ud654 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc74c\uc131\ud1b5\ud654 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud574 \uc8fc\uc138\uc694.",
          "call.error.tooltip.audionosrc":
            "\uc74c\uc131\uc774\xa0\uc778\uc2dd\ub418\uc9c0\xa0\uc54a\uc2b5\ub2c8\ub2e4. \ub9c8\uc774\ud06c \uc7a5\uce58 \ubc0f \uad00\ub828 \uc124\uc815\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "call.error.unsupporteddevice":
            "LINE \ud1b5\ud654 \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uae30\uae30\uc785\ub2c8\ub2e4.",
          "call.groupcall.leavebutton": "\ud1b5\ud654 \ub098\uac00\uae30",
          "call.participants.desc.noresults":
            "\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "call.screen.toast.updaterequired":
            "\uc0c1\ub300\ubc29\uc758 LINE \uc571 \ubc84\uc804\uc774 \ub0ae\uc544 \uc0c1\ub300\ubc29 \ud654\uba74\uc5d0\ub294 \uc2a4\ud2f0\ucee4\uac00 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "call.screenshare.taskbar.screenshare":
            "\uacf5\uc720 \ud654\uba74 \uc120\ud0dd",
          "call.screenshare.taskbar.ytsearch":
            "YouTube \ub3d9\uc601\uc0c1 \uac80\uc0c9",
          "call.screenshare.toast.shareerror":
            "%1\ub2d8\uc774 \ub2e4\ub978 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uace0 \uc788\uc5b4 \ud654\uba74\uc744 \uacf5\uc720\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "call.screenshare.toast.unsupportedos":
            "\uacf5\uc720 \uc911\uc778 \ud654\uba74\uc744 \ubcf4\ub824\uba74 \ubaa8\ubc14\uc77c LINE \uc571\uc774\ub098 Windows 10\uc774 \uc124\uce58\ub41c PC\ub97c\n\uc774\uc6a9\ud574 \uc8fc\uc138\uc694.",
          "call.screenshare.youtube.popup.startvideo":
            "\uc0c1\ub300\ubc29\uc5d0\uac8c \ub0b4 \ud654\uba74\uc774 \uacf5\uc720\ub429\ub2c8\ub2e4. \uc9c0\uae08 \uc2dc\uc791\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "call.sharedcontent.desc.newdatatype":
            "%1\ub2d8\uc774 \ud654\uba74 \uacf5\uc720\ub97c \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4. \uacf5\uc720\ub41c \ucf58\ud150\uce20\ub97c \ud655\uc778\ud558\ub824\uba74 LINE\uc744 \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud574 \uc8fc\uc138\uc694.",
          "call.toast.cpuheavyload":
            "\uae30\uae30\uc758 CPU \uc0ac\uc6a9\ub7c9\uc774 \uc99d\uac00\ud558\uc5ec \ud1b5\ud654\uac00 \uc6d0\ud65c\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ud504\ub85c\uadf8\ub7a8\uc744 \uc885\ub8cc\ud574 \uc8fc\uc138\uc694.",
          "call.toast.handsfreebt.mic":
            "%1 \uc7a5\uce58\ub97c \ub9c8\uc774\ud06c\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \uc2a4\ud53c\ucee4\ub3c4 \uac19\uc740 \uc7a5\uce58\ub85c \uc124\uc815\ud574 \uc8fc\uc138\uc694.",
          "call.toast.handsfreebt.speaker":
            "%1 \uc7a5\uce58\ub97c \uc2a4\ud53c\ucee4\ub85c \uc0ac\uc6a9\ud569\ub2c8\ub2e4. \ub9c8\uc774\ud06c\ub3c4 \uac19\uc740 \uc7a5\uce58\ub85c \uc124\uc815\ud574 \uc8fc\uc138\uc694.",
          "call.video.filter.clear": "Clear",
          "call.video.filter.original": "Original",
          "call.viewmode.desc.focusview": "\ud3ec\ucee4\uc2a4 \ud654\uba74",
          "call.viewmode.desc.focusviewcenter":
            "\uc911\uc559 \ud3ec\ucee4\uc2a4 \ud654\uba74",
          "call.viewmode.desc.focusviewleft":
            "\uc67c\ucabd \ud3ec\ucee4\uc2a4 \ud654\uba74",
          "call.viewmode.desc.focusviewright":
            "\uc624\ub978\ucabd \ud3ec\ucee4\uc2a4 \ud654\uba74",
          "call.viewmode.desc.gridview": "\ubd84\ud560 \ud654\uba74",
          "call.viewmode.desc.separateview": "\uac1c\ubcc4 \ucc3d \ud654\uba74",
          "call.watchtogethermenu.desc.100kviewsth": "%1",
          "call.watchtogethermenu.desc.100kwatchingth": "%1",
          "call.watchtogethermenu.desc.10kviewsth": "%1",
          "call.watchtogethermenu.desc.10kwatchingth": "%1",
          "call.watchtogethermenu.desc.1bpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1bviews": "%1",
          "call.watchtogethermenu.desc.1eokpeoplewatching":
            "%1\uc5b5\uba85\uc774 \uc2dc\uccad \uc911",
          "call.watchtogethermenu.desc.1eokviews":
            "\uc870\ud68c\uc218 %1\uc5b5\ud68c",
          "call.watchtogethermenu.desc.1kpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1kviews": "%1",
          "call.watchtogethermenu.desc.1kviewsth": "%1",
          "call.watchtogethermenu.desc.1kwatchingth": "%1",
          "call.watchtogethermenu.desc.1manpeoplewatching":
            "%1\ub9cc\uba85\uc774 \uc2dc\uccad \uc911",
          "call.watchtogethermenu.desc.1manviews":
            "\uc870\ud68c\uc218 %1\ub9cc\ud68c",
          "call.watchtogethermenu.desc.1mpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1mviews": "%1",
          "call.watchtogethermenu.desc.1mviewsth": "%1",
          "call.watchtogethermenu.desc.1mwatchingth": "%1",
          "call.watchtogethermenu.desc.daysago.other": "%n\uc77c \uc804",
          "call.watchtogethermenu.desc.hoursago.other": "%n\uc2dc\uac04 \uc804",
          "call.watchtogethermenu.desc.justnow": "\ubc29\uae08 \uc804",
          "call.watchtogethermenu.desc.lessthan1kviewsth": "%1",
          "call.watchtogethermenu.desc.lessthan1kwatchingth": "%1",
          "call.watchtogethermenu.desc.minutesago.other": "%n\ubd84 \uc804",
          "call.watchtogethermenu.desc.monthsago.other":
            "%n\uac1c\uc6d4 \uc804",
          "call.watchtogethermenu.desc.peoplewatchingen": "%1",
          "call.watchtogethermenu.desc.userswatchinglivevideo":
            "%1\uba85\uc774 \uc2dc\uccad \uc911",
          "call.watchtogethermenu.desc.userswatchingvideo":
            "\uc870\ud68c\uc218 %1\ud68c",
          "call.watchtogethermenu.desc.userswatchingvideoen.other": "%n",
          "call.watchtogethermenu.desc.yearsago.other": "%n\ub144 \uc804",
          "call.youtube.desc.headphones":
            "\uc5d0\ucf54 \ubc29\uc9c0\ub97c \uc704\ud574 \uc774\uc5b4\ud3f0\uc744 \uc0ac\uc6a9\ud574 \uc8fc\uc138\uc694.",
          "call.youtube.desc.noresults":
            "\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "call.youtube.paste.descforonetoone":
            "\uac80\uc0c9\ucc3d\uc5d0\uc11c \uce5c\uad6c\uc640 \ud568\uaed8 \ubcfc \ub3d9\uc601\uc0c1\uc744 \uac80\uc0c9\ud574 \ubcf4\uc138\uc694(\uc774\uc5b4\ud3f0\xa0\uc0ac\uc6a9\xa0\uad8c\uc7a5).",
          "call.youtube.popup.shareerror":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c YouTube \ub3d9\uc601\uc0c1\uc744 \uacf5\uc720\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "call.youtube.popupbutton.allow": "\ud5c8\uc6a9",
          "call.youtube.popupbutton.disallow": "\ud5c8\uc6a9 \uc548 \ud568",
          "call.youtube.popupdesc.clipboard":
            "\uad8c\ud55c\uc744 \ud5c8\uc6a9\ud558\uba74 \ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ud55c YouTube \ub9c1\ud06c\uac00 \uc790\ub3d9\uc73c\ub85c \uac80\uc0c9\ucc3d\uc5d0 \ubd99\uc5ec\ub123\uae30\ub429\ub2c8\ub2e4.",
          "call.youtube.popuptitle.clipboard":
            "\ud074\ub9bd\ubcf4\ub4dc \uc811\uadfc \uad8c\ud55c \ud5c8\uc6a9",
          "call.youtube.statusbadge.premiering":
            "Premieres \uc9c4\ud589 \uc911",
          "call.youtube.title.trendingvideos":
            "\uc778\uae30 \ub3d9\uc601\uc0c1",
          "call.youtube.videodesc.date": "%1\uc5d0 \uc2dc\uc791",
          "call.youtube.videodesc.datevariable": "yyyy.M.d h:mm",
          "capture.command.close": "\ucde8\uc18c",
          "capture.command.copy": "\ubcf5\uc0ac",
          "capture.command.done": "\uc644\ub8cc",
          "capture.command.draw": "\uadf8\ub9ac\uae30",
          "capture.command.gif": "GIF \ucea1\ucc98",
          "capture.command.gif.cancel":
            "\ud654\uba74 \ucea1\ucc98\ub97c \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\uc0dd\uc131\ub41c GIF\ub294 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "capture.command.gif.create": "GIF \uc0dd\uc131\uc911",
          "capture.command.gif.error.maxFileSize":
            "GIF \ud30c\uc77c \uc0ac\uc774\uc988\uac00 20MB\ub97c \ucd08\uacfc\ud588\uc2b5\ub2c8\ub2e4.\n(\ud604\uc7ac \uc6a9\ub7c9 : %1 MB)\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",
          "capture.command.gif.error.maxSize":
            "\uc120\ud0dd\xa0\uc601\uc5ed\uc774\xa0\ucee4\uc11c\xa0GIF\xa0\ucea1\ucc98\ub97c\xa0\ud560\xa0\uc218\xa0\uc5c6\uc2b5\ub2c8\ub2e4. \uc601\uc5ed\uc744\xa0\ub2e4\uc2dc\xa0\uc120\ud0dd\ud574 \uc8fc\uc138\uc694.",
          "capture.command.gif.error.size":
            "\uc120\ud0dd\xa0\uc601\uc5ed\uc774\xa0\uc791\uc544\xa0GIF\xa0\ucea1\ucc98\ub97c\xa0\ud560\xa0\uc218\xa0\uc5c6\uc2b5\ub2c8\ub2e4. \uc601\uc5ed\uc744\xa0\ub2e4\uc2dc\xa0\uc120\ud0dd\ud574 \uc8fc\uc138\uc694.",
          "capture.command.gif.stop": "\uc815\uc9c0",
          "capture.command.gif.tooltip":
            "\uc601\uc0c1\xa0\uc774\ubbf8\uc9c0\ub97c\xa0\ucea1\ucc98\ud558\uc5ec\xa0GIF\xa0\ud30c\uc77c\uc744\xa0\ub9cc\ub4e4\uc5b4\xa0\ubcf4\uc138\uc694.",
          "capture.command.quit": "\uc885\ub8cc",
          "capture.command.redo": "\ub2e4\uc2dc\uc2e4\ud589",
          "capture.command.save": "\uc800\uc7a5",
          "capture.command.share": "\uacf5\uc720",
          "capture.command.undo": "\uc2e4\ud589\ucde8\uc18c",
          "capture.desc.need.os.recordscreen":
            "\ud654\uba74 \ucea1\ucc98 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uae30\uae30\uc5d0\uc11c \ud654\uba74 \ucf58\ud150\uce20 \uae30\ub85d \uad8c\ud55c\uc744 \ud5c8\uc6a9\ud574 \uc8fc\uc138\uc694.",
          "capture.msg.onEditing":
            "\ud654\uba74 \ucea1\ucc98\ub97c \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\uc791\uc131\ud55c \ub0b4\uc6a9\uc740 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "capture.scan.error.maxFileSize":
            "\ucea1\ucc98 \uc601\uc5ed\uc774 \ub108\ubb34 \ucee4\uc11c \ud574\ub2f9 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc601\uc5ed\uc744 \uc870\uc815\ud558\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "capture.scan.error.resolution":
            "\ud574\ub2f9 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774\ubbf8\uc9c0 \ud574\uc0c1\ub3c4\uac00 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ud574\uc0c1\ub3c4\ub97c \uc870\uc815\ud558\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "capture.tool.eclipse": "\uc6d0\ud615",
          "capture.tool.line": "\uc120",
          "capture.tool.lineColor": "\uc120\uc0c9",
          "capture.tool.mosaic": "\ubaa8\uc790\uc774\ud06c",
          "capture.tool.penwidth": "\ub450\uaed8",
          "capture.tool.rectangle": "\uc0ac\uac01\ud615",
          "capture.tool.select": "\uc120\ud0dd",
          "capture.tool.shape": "\ub3c4\ud615",
          "capture.tool.text": "\ud14d\uc2a4\ud2b8",
          "capture.tool.textColor": "\uae00\uc790\uc0c9",
          "capture.tool.textSize": "\uae00\uc790\ud06c\uae30",
          "capture.tool.textSize.big": "\ud06c\uac8c",
          "capture.tool.textSize.medium": "\ubcf4\ud1b5",
          "capture.tool.textSize.small": "\uc791\uac8c",
          "chat.action.leaveChat.confirm":
            "\ub300\ud654 \ub0b4\uc6a9\uc774 \ubaa8\ub450 \uc0ad\uc81c\ub429\ub2c8\ub2e4.\n\ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "chat.alert.clipboard.largedata":
            "\ubcf5\uc0ac\ub41c \ucf58\ud150\uce20\uc758 \ud06c\uae30\uac00 \ub108\ubb34 \ucee4\uc11c \ubd99\uc5ec\ub123\uae30\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.alert.file.open.fromNotbuddy":
            "\uce5c\uad6c\uac00 \uc544\ub2cc \uc0ac\uc6a9\uc790\uac00 \ubcf4\ub0b8 \ud30c\uc77c\uc778 \uacbd\uc6b0 \uc548\uc804\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud30c\uc77c\uc744 \uc5ec\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "chat.alert.file.open.fromSquare":
            "\ubaa8\ub974\ub294 \uc0ac\uc6a9\uc790\uac00 \ubcf4\ub0b8 \ud30c\uc77c\uc778 \uacbd\uc6b0 \uc548\uc804\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud30c\uc77c\uc744 \uc5ec\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "chat.alert.file.open.frombuddy":
            "\ud30c\uc77c\uc744 \uc5f4\uae30 \uc804\uc5d0 \uc548\uc804\ud55c\uc9c0 \ud655\uc778\ud558\ub294 \uac83\uc774 \uc88b\uc2b5\ub2c8\ub2e4.\n\ud30c\uc77c\uc744 \uc5ec\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "chat.alert.file.open.notSupport":
            "\ud30c\uc77c\uc744 \uc5f4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ud615\uc2dd\uc785\ub2c8\ub2e4.",
          "chat.alert.file.unsupported.all.other":
            "\uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ud615\uc2dd\uc785\ub2c8\ub2e4. \ud30c\uc77c\uc744 \uc555\ucd95\ud558\uc5ec \ubcf4\ub0b4\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "chat.alert.file.unsupported.some.other":
            "\uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ud615\uc2dd\uc774 \uc788\uc5b4 \ud30c\uc77c %n\uac1c\ub294 \ubcf4\ub0bc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc555\ucd95\ud558\uc5ec \ubcf4\ub0b4\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "chat.alert.invite.alreadyinvited":
            "%1\ub2d8\uc740\n\ucd08\ub300 \uc911 \uc785\ub2c8\ub2e4.  ",
          "chat.alert.invite.alreadyjoined":
            "%1\ub2d8\uc740\n\uc774 \uadf8\ub8f9\uc758 \uba64\ubc84\uc785\ub2c8\ub2e4.  ",
          "chat.alert.invite.blockedbuddy":
            "\ucc28\ub2e8\ud55c \uacc4\uc815\uc778 \uacbd\uc6b0 \ucd08\ub300\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.alert.invite.confirm":
            "%1\ub2d8\uc744\n\ucd08\ub300\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "chat.alert.invite.notbuddy":
            "%1\ub2d8\uc744\n\uce5c\uad6c \ucd94\uac00 \ud6c4 \ucd08\ub300\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",
          "chat.alert.invite.verificationrequired":
            "QR \ucf54\ub4dc\ub098 \ucd08\ub300 \ub9c1\ud06c\ub97c \ud1b5\ud55c \uadf8\ub8f9 \ucc38\uc5ec\ub294 18\uc138 \uc774\uc0c1\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4.",
          "chat.alert.sharePost":
            "%1\ub2d8\uacfc \ub178\ud2b8, \uc568\ubc94\uc744\n\uacf5\uc720\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "chat.alert.unavailable.file":
            "\uc800\uc7a5\uae30\uac04\uc774 \ub9cc\ub8cc\ub418\uc5b4 \ud30c\uc77c\uc744 \uacf5\uc720\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.alert.unsend.fail.error":
            "\ubcf4\ub0b4\uae30 \ucde8\uc18c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.  ",
          "chat.alert.unsend.fail.time":
            "\ubcf4\ub0b8 \ud6c4 \uc77c\uc815 \uc2dc\uac04\uc774 \uc9c0\ub09c \uba54\uc2dc\uc9c0\ub294 \ucde8\uc18c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.alert.unsend.old.version":
            "\uc0c1\ub300\ubc29\uc758 LINE \ubc84\uc804\uc5d0 \ub530\ub77c \uc0c1\ub300\ubc29\uc758 \ub300\ud654\ubc29\uc5d0\uc11c \uba54\uc2dc\uc9c0\uac00 \uc0ad\uc81c\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubcf4\ub0b4\uae30 \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?     ",
          "chat.audio.tooltip": "\uc624\ub514\uc624",
          "chat.btn.capture.tooltip": "\ud654\uba74 \ucea1\ucc98",
          "chat.btn.close.tooltip": "\ub2eb\uae30",
          "chat.btn.emoji": "\uc774\ubaa8\ud2f0\ucf58",
          "chat.btn.facemark": "\ubb38\uc790\uadf8\ub9bc",
          "chat.btn.file": "\ud30c\uc77c \uc804\uc1a1",
          "chat.btn.keepmemo.tooltip": "Keep \uba54\ubaa8",
          "chat.btn.max.tooltip": "\ucd5c\ub300\ud654",
          "chat.btn.menu.tooltip": "\uba54\ub274",
          "chat.btn.min.tooltip": "\ucd5c\uc18c\ud654",
          "chat.btn.reset.tooltip":
            "\uc774\uc804 \ud06c\uae30\ub85c \ubcf5\uc6d0",
          "chat.btn.sticker": "\uc2a4\ud2f0\ucee4",
          "chat.btn.sticker.tooltip": "\uc2a4\ud2f0\ucee4",
          "chat.btn.voip": "\ubb34\ub8cc\ud1b5\ud654",
          "chat.contact.label": "\uc5f0\ub77d\ucc98",
          "chat.context.menu.search.name": "\uc774\ub984 \uac80\uc0c9",
          "chat.context.menu.send.contact": "\uc5f0\ub77d\ucc98 \uacf5\uc720",
          "chat.context.menu.talk": "1:1 \ub300\ud654 \uc5f4\uae30",
          "chat.desc.quit.uploading":
            "\uc804\uc1a1 \uc911\uc778 \ud30c\uc77c\uc774 \uc788\uc2b5\ub2c8\ub2e4. \nLINE\uc744 \uc885\ub8cc\ud558\uba74 \uc804\uc1a1\uc774 \uc644\ub8cc\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "chat.edit.alert.unavailable.picture":
            "\uc800\uc7a5 \uae30\uac04\uc774 \ub9cc\ub8cc\ub418\uc5b4 \uc0ac\uc9c4\uc744 \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.emoji.label.animation.unavailable":
            "\uc560\ub2c8\uba54\uc774\uc158 \ud6a8\uacfc\ub294 \ubaa8\ubc14\uc77c\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "chat.emoji.label.recentIconDesc1":
            "\ucd5c\uadfc\uc5d0 \uc0ac\uc6a9\ud55c \uc774\ubaa8\ud2f0\ucf58\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
          "chat.emoji.label.recentIconDesc2":
            "\uce5c\uad6c\ub4e4\uc5d0\uac8c \uc774\ubaa8\ud2f0\ucf58\uc744 \ubcf4\ub0b4 \ubcf4\uc138\uc694.",
          "chat.emoji.label.recentLetterDesc1":
            "\ucd5c\uadfc\uc5d0 \uc0ac\uc6a9\ud55c \ubb38\uc790\uadf8\ub9bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
          "chat.emoji.label.recentLetterDesc2":
            "\uce5c\uad6c\ub4e4\uc5d0\uac8c \ubb38\uc790\uadf8\ub9bc\uc744 \ubcf4\ub0b4\ubcf4\uc138\uc694.",
          "chat.emoji.label.recentStickerDesc1":
            "\ucd5c\uadfc\uc5d0 \uc0ac\uc6a9\ud55c \uc2a4\ud2f0\ucee4\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
          "chat.emoji.label.recentStickerDesc2":
            "\uce5c\uad6c\ub4e4\uc5d0\uac8c \uc2a4\ud2f0\ucee4\ub97c \ubcf4\ub0b4 \ubcf4\uc138\uc694.",
          "chat.err.file.broken":
            "\ud30c\uc77c\uc774 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \nPC \uc6a9\ub7c9\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "chat.err.file.download.failed":
            "\ud574\ub2f9 \ud30c\uc77c\uc744 \uc800\uc7a5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.err.file.download.localError":
            "\ud30c\uc77c\uc744 \uc800\uc7a5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "chat.err.file.exceed.capacity":
            "\ud5c8\uc6a9 \uc6a9\ub7c9(%1)\uc744 \ucd08\uacfc\ud558\uc5ec \ud30c\uc77c\uc744 \uc804\uc1a1\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.err.file.exceed.dailyCapacity":
            "\ud558\ub8e8\uc5d0 \uc804\uc1a1 \uac00\ub2a5\ud55c \ucd1d \uc6a9\ub7c9(%1)\uc744 \ucd08\uacfc\ud558\uc5ec \ud30c\uc77c\uc744 \uc804\uc1a1\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.err.file.folderPermission":
            "\uc120\ud0dd\ud55c \ud3f4\ub354\uc5d0 \uc800\uc7a5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc800\uc7a5 \uc704\uce58\ub97c \ubcc0\uacbd \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "chat.err.file.need.space":
            "\uae30\uae30 \uc6a9\ub7c9\uc774 \ubd80\uc871\ud569\ub2c8\ub2e4. \uc6a9\ub7c9\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694.",
          "chat.err.file.open":
            "\uc0ac\uc6a9 \uc911\uc778 \ud30c\uc77c\uc785\ub2c8\ub2e4. \ud30c\uc77c\uc744 \ub2eb\uace0 \ub2e4\uc2dc \ubcf4\ub0b4\uc8fc\uc138\uc694.",
          "chat.err.file.some.unpardoned":
            "\uc804\uc1a1\ud560 \uc218 \uc5c6\ub294 \ud615\uc2dd\uc758 \ud30c\uc77c\uc785\ub2c8\ub2e4. \n\ubcf5\uc218 \uc804\uc1a1\uc77c \uacbd\uc6b0 \ub098\uba38\uc9c0 \ud30c\uc77c\ub4e4\uc740 \n\uc815\uc0c1\uc801\uc73c\ub85c \uc804\uc1a1\ub429\ub2c8\ub2e4.",
          "chat.err.file.unpardoned":
            "\uc804\uc1a1\ud560 \uc218 \uc5c6\ub294 \ud615\uc2dd\uc758 \ud30c\uc77c\uc785\ub2c8\ub2e4.",
          "chat.err.media.copyFailed":
            "\uc778\ucf54\ub529 \uc911\uc785\ub2c8\ub2e4. \n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "chat.err.media.infoLoadFailed":
            "\ub124\ud2b8\uc6cc\ud06c \uc624\ub958\ub85c \uc644\ub8cc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "chat.error.badwords":
            "\ud574\ub2f9\xa0\ub0b4\uc6a9\uc744\xa0\ubcf4\ub0bc\xa0\uc218\xa0\uc5c6\uc2b5\ub2c8\ub2e4.\xa0\ub0b4\uc6a9\uc744\xa0\ubcc0\uacbd\ud574\xa0\uc8fc\uc138\uc694.",
          "chat.error.popup.noauth":
            "LINE\uc5d0\uc11c \ud30c\uc77c\uc744 \uc5f4 \uc218 \uc788\ub294 \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.file.audio.sizeExceeds":
            "\uc624\ub514\uc624 \ud30c\uc77c\uc740 \ucd5c\ub300 30MB\uae4c\uc9c0 \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "chat.file.cancel.tooltip": "\ucde8\uc18c",
          "chat.file.cantFindFile":
            "\ud30c\uc77c\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.file.closeConfirm":
            "\ucc3d\uc744 \ub2eb\uc73c\uc2dc\uba74 \ud30c\uc77c \uc1a1\uc218\uc2e0\uc774 \ucde8\uc18c \ub429\ub2c8\ub2e4.\n\ucc3d\uc744 \ub2eb\uc73c\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "chat.file.countExceeds":
            "\ud30c\uc77c\uc740 \ud55c \ubc88\uc5d0 \ucd5c\ub300 %1\uac1c\uae4c\uc9c0 \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "chat.file.label.expired": "\ub9cc\ub8cc\ub428",
          "chat.file.video.sizeExceeds":
            "\ub3d9\uc601\uc0c1 \ud30c\uc77c\uc740 \ucd5c\ub300 200MB\uae4c\uc9c0 \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "chat.flex.btn.send": "\uc644\ub8cc",
          "chat.flex.date.select":
            "\ub0a0\uc9dc\ub97c \uc120\ud0dd\ud558\uc138\uc694.",
          "chat.flex.datetime.select":
            "\ub0a0\uc9dc\uc640 \uc2dc\uac04\uc744 \uc120\ud0dd\ud558\uc138\uc694.",
          "chat.flex.error.unknown":
            "\uc774 \ubc84\uc804\uc5d0\uc11c\ub294 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4.",
          "chat.flex.time.select":
            "\uc2dc\uac04\uc744 \uc120\ud0dd\ud558\uc138\uc694.",
          "chat.group.msg.e2ee.guide":
            "\ub300\ud654\ubc29\uc5d0 Letter Sealing\uc774\n\uc801\uc6a9\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",
          "chat.group.noMember.placeholder":
            "\ub300\ud654 \uc0c1\ub300\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.grouphome.label.enjoySns.title":
            "\ub178\ud2b8\uc640 \uc568\ubc94\uc73c\ub85c\n\uce5c\uad6c\uc640 \ud568\uaed8 \uc990\uac70\uc6b4 SNS!",
          "chat.image.tooltip": "\uc0ac\uc9c4",
          "chat.input.placeholder": "\uba54\uc2dc\uc9c0 \uc785\ub825",
          "chat.inputbar.msg.album": "\uc568\ubc94",
          "chat.inputbar.msg.albumcontents": "\uc568\ubc94 \ucf58\ud150\uce20",
          "chat.label.del": "\uc0ad\uc81c",
          "chat.label.makeAlbum":
            "\u300c%1\u300d \uc568\ubc94\uc744 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4.",
          "chat.label.open": "\ubcf4\uae30",
          "chat.label.openFile": "\ud30c\uc77c \uc5f4\uae30",
          "chat.label.openFolder": "\ud3f4\ub354 \uc5f4\uae30",
          "chat.label.playback": "\uc7ac\uc0dd",
          "chat.label.retry": "\uc7ac\uc804\uc1a1",
          "chat.label.save": "\uc800\uc7a5",
          "chat.label.saveAs":
            "\ub2e4\ub978 \uc774\ub984\uc73c\ub85c \uc800\uc7a5",
          "chat.label.saveOpen":
            "\uc800\uc7a5 \ud6c4 \ubc14\ub85c \uc5f4\uae30",
          "chat.label.sendFail": "\uc804\uc1a1 \uc2e4\ud328",
          "chat.label.share": "\uacf5\uc720",
          "chat.label.showAlbum": "\uc568\ubc94 \ubcf4\uae30",
          "chat.label.showPost": "\ub178\ud2b8 \ubcf4\uae30",
          "chat.label.showPrev": "\uc774\uc804 \ub300\ud654 \ubcf4\uae30",
          "chat.label.totalMediaCount": "\uc804\uccb4 %1\uac74",
          "chat.linemusic.shared":
            "\uc74c\uc545\uc744 \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.linemusic.shared.other":
            "%1\uac00 \uc74c\uc545\uc744 \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.list.call":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> \ud1b5\ud654\uc2dc\uac04]]>',
          "chat.list.call.canceled":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> \ud1b5\ud654\uac00 \ucde8\uc18c\ub428]]>',
          "chat.list.call.icon":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\">]]>',
          "chat.list.call.missedCall":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> \ubd80\uc7ac\uc911 \uc804\ud654]]>',
          "chat.list.call.rejected":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> \uc804\ud654\ub97c \ubc1b\uc9c0 \uc54a\uc74c]]>',
          "chat.list.desc.read.unread.all":
            "\ubaa8\ub450 \uc77d\uc74c \ucc98\ub9ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "chat.list.group.createdby": "\ub9cc\ub4e0 \uc0ac\ub78c: ",
          "chat.list.group.invite":
            "%1\ub2d8\uc774 \uadf8\ub8f9\uc5d0 \ucd08\ub300\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.list.group.layer":
            "\uc774 \uadf8\ub8f9\uc5d0  \ucd08\ub300\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "chat.list.group.nogroupcreator":
            "\uadf8\ub8f9\uc744 \ub9cc\ub4e0 \uc0ac\ub78c\uc774 \ud604\uc7ac \uc774 \uadf8\ub8f9\uc5d0 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.list.linecall":
            "[\ub77c\uc778 \ud504\ub9ac\ubbf8\uc5c4 \ucf5c]",
          "chat.list.mention": "\uba58\uc158\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "chat.list.menu.clear.all.unreadmessage":
            "\ubaa8\ub4e0 \uba54\uc2dc\uc9c0 \uc77d\uc74c \ucc98\ub9ac",
          "chat.list.menu.sort.favorites": "\uc990\uaca8\ucc3e\uae30 \uc21c",
          "chat.list.menu.sort.time": "\ubc1b\uc740 \uc2dc\uac04 \uc21c",
          "chat.list.menu.sort.unreadcount":
            "\uc548 \uc77d\uc740 \uba54\uc2dc\uc9c0 \uc21c",
          "chat.list.menu.tooltip": "\uba54\ub274",
          "chat.list.sortBtn.tooltip":
            "\uc77d\uc9c0 \uc54a\uc740 \uba54\uc2dc\uc9c0",
          "chat.list.sortByUnread.desc":
            "\uc77d\uc9c0 \uc54a\uc740 \uba54\uc2dc\uc9c0\ub97c \uc0c1\ub2e8\uc5d0 \uc815\ub82c\ud569\ub2c8\ub2e4. ",
          "chat.menu.Image.download": "\uc800\uc7a5\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.menu.Image.download.fail":
            "\uc800\uc7a5\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "chat.menu.alarmOff": "\uc54c\ub9bc \ub044\uae30",
          "chat.menu.alarmOn": "\uc54c\ub9bc \ucf1c\uae30",
          "chat.menu.albums": "\uc568\ubc94",
          "chat.menu.alwaysTop": "\ud56d\uc0c1 \uc704",
          "chat.menu.backgroundSetting":
            "\ubc30\uacbd\ud654\uba74 \uc124\uc815",
          "chat.menu.backgroundSetting.apply": "\uc801\uc6a9",
          "chat.menu.backgroundSetting.cancel": "\ucde8\uc18c",
          "chat.menu.backgroundSetting.file": "\ud30c\uc77c \uc120\ud0dd",
          "chat.menu.backgroundSetting.image.failed":
            "\uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uc774\ubbf8\uc9c0\uc785\ub2c8\ub2e4.",
          "chat.menu.backgroundSetting.image.maximumUploadableSize":
            "\uc774\ubbf8\uc9c0\ub294 \ucd5c\ub300 %1MB\uae4c\uc9c0\ub9cc \uc5c5\ub85c\ub4dc \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "chat.menu.backgroundSetting.option": "\ub178\ucd9c \ud0c0\uc785",
          "chat.menu.backgroundSetting.option.detail": "\ud0c0\uc77c\ud615",
          "chat.menu.backgroundSetting.option.fill": "\ucc44\uc6b0\uae30",
          "chat.menu.backgroundSetting.photo.save.failed":
            "\uc0ac\uc9c4 \uc800\uc7a5\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.menu.backgroundSetting.photo.transparency":
            "\ud22c\uba85\ub3c4",
          "chat.menu.backgroundSetting.photoGuide":
            "\ub098\ub9cc\uc758 \ubc30\uacbd\ud654\uba74\uc744 \uc124\uc815\ud574 \ubcf4\uc138\uc694.",
          "chat.menu.backgroundSetting.reset": "\ucd08\uae30\ud654",
          "chat.menu.backgroundSetting.select":
            "\ubc30\uacbd\ud654\uba74 \uc120\ud0dd",
          "chat.menu.backgroundSetting.tab.color": "\uc0c9\uc0c1",
          "chat.menu.backgroundSetting.tab.illustration":
            "\uc77c\ub7ec\uc2a4\ud2b8",
          "chat.menu.backgroundSetting.tab.photo": "\uc0ac\uc9c4",
          "chat.menu.backgroundSetting.unavailableInDarkmode":
            "\ub2e4\ud06c \ubaa8\ub4dc \uc0ac\uc6a9 \uc911\uc5d0\ub294 \uc124\uc815\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.menu.copy": "\ubcf5\uc0ac",
          "chat.menu.delete":
            "\ubaa8\ub4e0 \ub300\ud654 \ub0b4\uc6a9 \uc0ad\uc81c",
          "chat.menu.group.noMember": "\uba64\ubc84 \uc5c6\uc74c",
          "chat.menu.invite": "\ucd08\ub300",
          "chat.menu.invite.group": "\uba64\ubc84 \ubc0f \ucd08\ub300",
          "chat.menu.leave": "\ub300\ud654\ubc29 \ub098\uac00\uae30",
          "chat.menu.make": "\uadf8\ub8f9 \ub9cc\ub4e4\uae30",
          "chat.menu.msg.announce": "\uacf5\uc9c0",
          "chat.menu.msg.unsend": "\ubcf4\ub0b4\uae30 \ucde8\uc18c",
          "chat.menu.openAlbum": "\uc0ac\uc9c4 \ubaa8\uc544\ubcf4\uae30",
          "chat.menu.openAlbum.download":
            "\ub2e4\uc6b4\ub85c\ub4dc\ub97c \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.menu.openAlbum.download.fail":
            "\ub2e4\uc6b4\ub85c\ub4dc\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.menu.openAlbum.download.fail.folderPermission":
            "\uc120\ud0dd\ud55c \ud3f4\ub354\uc5d0 \ub2e4\uc6b4\ub85c\ub4dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \n\uc704\uce58\ub97c \ubcc0\uacbd \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "chat.menu.openAlbum.download.open": "\ud3f4\ub354 \uc5f4\uae30",
          "chat.menu.openAlbum.downloading":
            "\ub2e4\uc6b4\ub85c\ub4dc \uc911 \uc785\ub2c8\ub2e4.",
          "chat.menu.openAlbum.retry": "\uc7ac\uc2dc\ub3c4",
          "chat.menu.openAlbum.saveKeep":
            "Keep\uc5d0 \uc800\uc7a5\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.menu.openAlbum.saveKeep.open": "Keep \uc5f4\uae30",
          "chat.menu.openAlbum.savingKeep":
            "Keep\uc5d0 \uc800\uc7a5 \uc911 \uc785\ub2c8\ub2e4.",
          "chat.menu.openAlbum.savingKeep.fail":
            "Keep \uc800\uc7a5\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.menu.openAlbum.selected": "%1\uac1c \uc120\ud0dd\ub428",
          "chat.menu.openLink": "\ub9c1\ud06c \ubaa8\uc544\ubcf4\uae30",
          "chat.menu.openLink.noURL":
            "\ub300\ud654\ubc29\uc5d0\uc11c \uacf5\uc720\ub41c \ub9c1\ud06c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.menu.paste": "\ubd99\uc5ec\ub123\uae30",
          "chat.menu.recommend": "\ucd94\ucc9c",
          "chat.menu.save": "\ub300\ud654 \uc800\uc7a5",
          "chat.menu.save.note": "\ub178\ud2b8\uc5d0 \uc800\uc7a5",
          "chat.menu.searchMsgs": "\ub300\ud654 \uac80\uc0c9",
          "chat.menu.selectAll": "\ubaa8\ub450\uc120\ud0dd",
          "chat.menu.selectedCopy": "\uc120\ud0dd \uc601\uc5ed \ubcf5\uc0ac",
          "chat.menu.settings": "\uc124\uc815",
          "chat.menu.showAllContents":
            "\ucf58\ud150\uce20 \ubaa8\uc544\ubcf4\uae30",
          "chat.menu.sticker.openWebStore": "\uc2a4\ud2f0\ucee4\uc0f5",
          "chat.menu.sticker.showDetail": "\uc5f4\uae30",
          "chat.menu.translation": "\ubc88\uc5ed",
          "chat.message.present.emoji.receive":
            "\uc774\ubaa8\ud2f0\ucf58 \uc120\ubb3c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4!",
          "chat.message.present.receive.confirm": "\ubc1b\uae30",
          "chat.message.present.sticker.receive":
            "\uc2a4\ud2f0\ucee4 \uc120\ubb3c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4!",
          "chat.message.present.theme.receive":
            "\ud14c\ub9c8 \uc120\ubb3c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4!\n\ubaa8\ubc14\uc77c LINE \uc571\uc5d0\uc11c\n\ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "chat.message.sharealbum":
            "\uc568\ubc94\uc744 \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.message.sharenote":
            "\ub178\ud2b8\ub97c \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.msg.album.addphoto.other":
            "\uc568\ubc94\uc5d0 \ucf58\ud150\uce20 %n\uac1c\ub97c \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.msg.album.create":
            "\u300c%1\u300d \uc568\ubc94\uc744 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4.",
          "chat.msg.album.delete":
            '%1\ub2d8\uc774"%2" \uc568\ubc94\uc744 \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4.',
          "chat.msg.album.removephoto":
            "%1\ub2d8\uc774 %2 \uc568\ubc94\uc5d0\uc11c \ucf58\ud150\uce20\ub97c \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.msg.album.rename":
            '%1\ub2d8\uc774 "%2" \uc568\ubc94\uc758 \uc774\ub984\uc744"%3"\ub85c \ubcc0\uacbd\ud588\uc2b5\ub2c8\ub2e4.',
          "chat.msg.album.viewPhoto": "\uc568\ubc94 \ubcf4\uae30",
          "chat.msg.applink.app.recv":
            "%1 \uc18c\uac1c\ud569\ub2c8\ub2e4. \ubaa8\ubc14\uc77c\uc5d0\uc11c \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "chat.msg.applink.app.sent":
            "%1 \uc18c\uac1c\ud588\uc2b5\ub2c8\ub2e4. \ubaa8\ubc14\uc77c\uc5d0\uc11c \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "chat.msg.applink.friend.recv":
            "%1\uc5d0\uc11c \uce5c\uad6c\uc694\uccad\uc774 \uc654\uc2b5\ub2c8\ub2e4. \ubaa8\ubc14\uc77c\uc5d0\uc11c \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "chat.msg.applink.friend.sent":
            "%1\uc5d0\uc11c \uce5c\uad6c\uc694\uccad\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4. \ubaa8\ubc14\uc77c\uc5d0\uc11c \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "chat.msg.boundnoun": "\ub2d8",
          "chat.msg.call.canceled": "\ucde8\uc18c",
          "chat.msg.call.e2ee.guide":
            '<![CDATA[Letter Sealing\uc774 \uc124\uc815\ub41c \ud1b5\ud654\uc785\ub2c8\ub2e4.\n\ubcf4\uc548\uc774 \uac15\ud654\ub41c \ud1b5\ud654\uc77c \uacbd\uc6b0<img src=\\"image://chat/e2ee_icon.png\\" width="16" height="11">\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4.]]>',
          "chat.msg.call.missedCall": "\ubd80\uc7ac\uc911 \uc804\ud654",
          "chat.msg.call.rejected": "\uc751\ub2f5\uc5c6\uc74c",
          "chat.msg.changeGroupImage":
            "%1\ub2d8\uc774 \uadf8\ub8f9\uc0ac\uc9c4\uc744 \ubcc0\uacbd\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.msg.changeGroupName":
            "%1\ub2d8\uc774 \uadf8\ub8f9 \uc774\ub984\uc744 %2\uc73c\ub85c \ubcc0\uacbd\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.msg.chatevent.unknown":
            "\ud655\uc778\ud560 \uc218 \uc5c6\ub294 \uc54c\ub9bc\uc785\ub2c8\ub2e4. \n\uc2a4\ub9c8\ud2b8\ud3f0\uc5d0\uc11c \ud655\uc778\ud574\uc8fc\uc138\uc694.",
          "chat.msg.e2ee.decryptingMsg":
            "\uc554\ud638\ud654 \ud574\uc81c \uc911...",
          "chat.msg.e2ee.guide":
            "\ub300\ud654\ubc29\uc5d0 Letter Sealing\uc774\n\uc801\uc6a9\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",
          "chat.msg.e2ee.needKeyExchange":
            "\uc774 \uba54\uc138\uc9c0\ub294 \uc554\ud638\ud654\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.\n\uba54\uc138\uc9c0\ub97c \ud655\uc778\ud558\ub824\uba74 \ubcf8\uc778 \uc778\uc99d\uc744 \ud574\uc8fc\uc138\uc694.",
          "chat.msg.e2ee.recvMsg.decryptionFailed":
            "Letter Sealing\n\uc554\ud638\ud654\ub97c \ud574\uc81c\ud560 \uc218 \uc5c6\uc5b4 \ub3c4\ucc29\ud55c \uba54\uc2dc\uc9c0\ub97c \ud45c\uc2dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc0c1\ub300\ubc29\uc5d0\uac8c \uc7ac\uc804\uc1a1\uc744 \uc694\uccad\ud574 \uc8fc\uc138\uc694.",
          "chat.msg.e2ee.sentMsg.decryptionFailed":
            "\uba54\uc138\uc9c0\ub97c \ud45c\uc2dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc774 \uba54\uc2dc\uc9c0\uac00 \uc774\uc804 \uae30\uae30\uc5d0\uc11c \ubc31\uc5c5\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
          "chat.msg.e2ee.setting.disabled":
            "\uba54\uc2dc\uc9c0 \uc554\ud638\ud654\ub97c \ud574\uc81c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ubaa8\ubc14\uc77c\uc5d0\uc11c \ud655\uc778\ud574 \uc8fc\uc138\uc694",
          "chat.msg.file.change.type.audio":
            "\ud574\ub2f9 \uc74c\uc131 \ud30c\uc77c\uc740 \uc77c\ubd80 \uae30\uae30\uc5d0\uc11c \uc7ac\uc0dd\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "chat.msg.file.change.type.video":
            "\ud574\ub2f9 \ub3d9\uc601\uc0c1\uc740 \uc77c\ubd80 \uae30\uae30\uc5d0\uc11c \uc7ac\uc0dd\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "chat.msg.file.ext": "\ud655\uc7a5\uc790",
          "chat.msg.file.period": "\uae30\uac04 : ~",
          "chat.msg.file.received":
            "%1\ub2d8\uc774 \ud30c\uc77c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "chat.msg.file.sent":
            "\ud30c\uc77c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.\\t",
          "chat.msg.file.size": "\ud06c\uae30 : %1",
          "chat.msg.file.waiting": "\ub300\uae30\uc911",
          "chat.msg.groupInvite":
            "%1\ub2d8\uc774 %2\ub2d8\uc744 \ucd08\ub300\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.msg.groupboard.updated":
            "\uadf8\ub8f9\ubcf4\ub4dc\uac00 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ubaa8\ubc14\uc77c\uc5d0\uc11c \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "chat.msg.home.shared":
            "%1\ub2d8\uc758 \uac8c\uc2dc\uae00\uc744 \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.msg.inviteCancel":
            "%1\ub2d8\uc774 %2\ub2d8 \ucd08\ub300\ub97c \ucde8\uc18c\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.msg.joinGroup":
            "%1\ub2d8\uc774 \uadf8\ub8f9\uc5d0 \ucc38\uc5ec\ud569\ub2c8\ub2e4.",
          "chat.msg.kickout":
            "%1\ub2d8\uc774 %2\ub2d8\uc744 \ud0c8\ud1f4\uc2dc\ucf30\uc2b5\ub2c8\ub2e4.",
          "chat.msg.leave":
            "%1\ub2d8\uc774 \ub300\ud654\ubc29\uc744 \ub098\uac14\uc2b5\ub2c8\ub2e4.",
          "chat.msg.leaveGroup":
            "%1\ub2d8\uc774 \uadf8\ub8f9\uc5d0\uc11c \ub098\uac14\uc2b5\ub2c8\ub2e4.",
          "chat.msg.leavegroup.1.n.confirm":
            "\ub300\ud654\ubc29\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\ub300\ud654 \ub0b4\uc6a9\uc744 \ub354 \uc774\uc0c1 \ubcfc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.msg.nomember": "\uba64\ubc84\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.msg.preview.default":
            "\uc5ec\uae30\ub97c \ub20c\ub7ec \ub9c1\ud06c\ub97c \ud655\uc778\ud558\uc138\uc694.",
          "chat.msg.read": "\uc77d\uc74c",
          "chat.msg.search.cancelSearch": "\ucde8\uc18c",
          "chat.msg.search.hint.fromName":
            "\ubcf4\ub0b8\uc0ac\ub78c \uc774\ub984\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.",
          "chat.msg.search.hint.message":
            "\ub300\ud654 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694",
          "chat.msg.search.hint.roomName":
            "\ub300\ud654\ubc29, \uba54\uc2dc\uc9c0 \uac80\uc0c9",
          "chat.msg.search.result.hint.addOption":
            "\ub300\ud654\ubc29 \ub610\ub294 \ubcf4\ub0b8\uc0ac\ub78c\uc744 \ucd94\uac00\ud574\uc11c \uac80\uc0c9\ud574 \ubcf4\uc138\uc694.",
          "chat.msg.search.result.hint.noResultReason1":
            "PC\ub97c \ubcc0\uacbd\ud588\uc744 \uacbd\uc6b0 \uc6d0\ud558\ub294 \uac80\uc0c9\uacb0\uacfc\ub97c \uc5bb\uc9c0 \ubabb\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",
          "chat.msg.search.result.hint.noResultReason2":
            "\ucd5c\uadfc 2\uc8fc \uc774\uc0c1 LINE PC\ubc84\uc804\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc558\uc744 \uacbd\uc6b0 \uac80\uc0c9\uacb0\uacfc\ub97c \uc5bb\uc9c0 \ubabb\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",
          "chat.msg.search.result.noResult":
            "\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.msg.search.title.date": "\ub0a0\uc9dc",
          "chat.msg.search.title.fromName": "\ubcf4\ub0b8\uc0ac\ub78c",
          "chat.msg.search.title.message": "\ub0b4\uc6a9",
          "chat.msg.search.title.roomName": "\ub300\ud654\ubc29",
          "chat.msg.smartphone":
            "\ubaa8\ubc14\uc77c\uc5d0\uc11c \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "chat.msg.start.unreadMessage":
            "\uc77d\uc9c0\uc54a\uc740 \uba54\uc2dc\uc9c0",
          "chat.msg.sticker.gift.from.buddy":
            "\uc120\ubb3c\uc774 \ub3c4\ucc29\ud588\uc2b5\ub2c8\ub2e4. \uc9c0\uae08 \ub2e4\uc6b4\ub85c\ub4dc\ud574 \ubcf4\uc138\uc694.",
          "chat.msg.sticker.gift.from.me":
            "\uc120\ubb3c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "chat.msg.sticker.period.expired":
            "\uc720\ud6a8\uae30\uac04\uc774 \uc9c0\ub0ac\uc2b5\ub2c8\ub2e4.\n\ubaa8\ubc14\uc77c\uc5d0\uc11c %1\ub97c \ub2e4\uc2dc \uad6c\ub9e4\ud574 \uc8fc\uc138\uc694.",
          "chat.msg.sticon.period.expired":
            "%1\uc758 \uc720\ud6a8\uae30\uac04\uc774 \uc9c0\ub0ac\uc2b5\ub2c8\ub2e4. LINE \ubaa8\ubc14\uc77c \ubc84\uc804\uc758 \uc2a4\ud2f0\ucee4 \uc0f5\uc5d0\uc11c \ub2e4\uc2dc \uad6c\ub9e4\ud574 \uc8fc\uc138\uc694.",
          "chat.msg.sync": "\uba54\uc2dc\uc9c0 \ub3d9\uae30\ud654 \uc911\u2026",
          "chat.msg.text.seeAll": "\ub354\ubcf4\uae30",
          "chat.msg.theme.gift.from.me":
            "\uc120\ubb3c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "chat.msg.unknown.message":
            "\ud655\uc778\ud560 \uc218 \uc5c6\ub294 \uba54\uc2dc\uc9c0\uc785\ub2c8\ub2e4.",
          "chat.msg.unread": "\uc77d\uc9c0 \uc54a\uc74c",
          "chat.msgbox.alarmoff.description":
            "\uc774 \ub300\ud654\ucc3d\uc758 \uc0c8 \uba54\uc2dc\uc9c0 \uc54c\ub9bc\uc744 \ubc1b\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "chat.msgbox.bannedWord":
            "\ubcf4\ub0b4\uc2dc\ub824\ub294 \uba54\uc2dc\uc9c0\uc5d0 \uae08\uc9c0\uc5b4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc218\uc815 \ud6c4 \ub2e4\uc2dc \ubcf4\ub0b4\uc8fc\uc138\uc694",
          "chat.msgbox.save.description":
            "\ud604\uc7ac \ud654\uba74\uc5d0 \ud45c\uc2dc\ub418\ub294 \ub300\ud654 \ub0b4\uc6a9\ub9cc \n\ud14d\uc2a4\ud2b8 \ud615\uc2dd\uc73c\ub85c \uc800\uc7a5\ub429\ub2c8\ub2e4.",
          "chat.msgbox.save.dontShow":
            "\uc774 \uba54\uc2dc\uc9c0 \ud45c\uc2dc \uc548 \ud568",
          "chat.msgbox.save.empty":
            "\uc800\uc7a5\ud560 \uba54\uc2dc\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.noMember.group.error.noAuth":
            "\uadf8\ub8f9 \uba64\ubc84\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4.",
          "chat.noMember.singleRoom.error.album":
            "\uc774 \ub300\ud654\ubc29\uc5d0\uc11c\ub294 \ub354 \uc774\uc0c1 \ucf58\ud150\uce20\ub97c \ucd94\uac00\ud558\uac70\ub098 \uc0c8 \uc568\ubc94\uc744 \ub9cc\ub4e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.noMember.singleRoom.error.note":
            "\uc774 \ub300\ud654\ubc29\uc5d0\uc11c\ub294 \ub354 \uc774\uc0c1  \uc0c8 \ub178\ud2b8\ub97c \uc4f8 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.noinput.group.invitation":
            "\uadf8\ub8f9\uc5d0 \ucc38\uc5ec \ud6c4 \ub300\ud654\ud558\uc138\uc694.",
          "chat.notes.notification.sharenote":
            "\ub178\ud2b8\ub97c \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.notimessage.sharealbum":
            "\uc568\ubc94\uc744 \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.poll.message.btn": "\ud655\uc778\ud558\uae30",
          "chat.poll.title": "\ud22c\ud45c",
          "chat.popup.btn.pasteAsImage": "\uc774\ubbf8\uc9c0",
          "chat.popup.btn.pasteAsText": "\ud14d\uc2a4\ud2b8",
          "chat.popup.clipboard.withImage":
            "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ud55c \ub0b4\uc6a9\uc744 \uc5b4\ub5a4 \ud615\uc2dd\uc73c\ub85c \ubd99\uc5ec\ub123\uae30\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "chat.popup.desc.grouplimit":
            "\ucc38\uc5ec\ud560 \uc218 \uc788\ub294 \ucd5c\ub300 \uadf8\ub8f9 \uc218\ub97c \ud55c\ub3c4\ub97c \ucd08\uacfc\ud558\uc5ec \ub354 \uc774\uc0c1 \uc0c8 \uadf8\ub8f9\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc790\uc8fc \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ub2e4\ub978 \uadf8\ub8f9\uc5d0\uc11c \ub098\uc628 \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "chat.popup.title.grouplimit":
            "\ucd5c\ub300 \ucc38\uc5ec \uadf8\ub8f9 \uc218 \ucd08\uacfc",
          "chat.popupbutton.delete": "\uc0ad\uc81c",
          "chat.popupbutton.resend": "\ub2e4\uc2dc \ubcf4\ub0b4\uae30",
          "chat.popupdesc.serveroutage1":
            "\uc11c\ubc84 \uc624\ub958\ub85c \uc0c1\ub300\ubc29\uc5d0\uac8c \uba54\uc2dc\uc9c0\uac00 \uc804\uc1a1\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ubcf4\ub0b4\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "chat.popupdesc.serveroutagegroup":
            "\uc11c\ubc84 \uc624\ub958\ub85c \uc77c\ubd80 \uba64\ubc84\uc5d0\uac8c \uba54\uc2dc\uc9c0\uac00 \uc804\uc1a1\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ubcf4\ub0b4\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "chat.popuptitle.serveroutage": "\ub2e4\uc2dc \ubcf4\ub0b4\uae30",
          "chat.profile.menu.displayName.search":
            "\uc774\ub984\uc73c\ub85c \uba54\uc2dc\uc9c0 \uac80\uc0c9",
          "chat.receiveicon.linecall.failed":
            "chat/chat_word_receive_linecallfail_kr_icon.png",
          "chat.receiveicon.linecall.success":
            "chat/chat_word_receive_linecallsucess_kr_icon.png",
          "chat.reply.album": "%1 \uc568\ubc94",
          "chat.reply.jump":
            "\uc6d0\ub798 \uc704\uce58\ub85c \ub3cc\uc544\uac00\uae30",
          "chat.reply.jump.delete":
            "\uc6d0\ub798 \uc704\uce58\uc5d0 \ud574\ub2f9 \uba54\uc2dc\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.reply.no.original.message":
            "\uc6d0\ubcf8 \uba54\uc2dc\uc9c0\ub97c \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.reply.note.no.text": "%1\uc5d0 \uacf5\uc720\ub41c \ub178\ud2b8",
          "chat.reply.note.text": "%1 \ub178\ud2b8",
          "chat.room.msg.invitorNotBuddy":
            "\uce5c\uad6c\uac00 \uc544\ub2cc %1\ub2d8 \uc73c\ub85c\ubd80\ud130 \ucd08\ub300\ub97c \ubc1b\uc558\uc2b5\ub2c8\ub2e4.",
          "chat.save.location": "\uc704\uce58\uc815\ubcf4",
          "chat.sendicon.linecall.falied":
            "chat/chat_word_send_linecallfail_kr_icon.png",
          "chat.sendicon.linecall.success":
            "chat/chat_word_send_linecallsucess_kr_icon.png",
          "chat.setting.theme.snow.disable":
            "\uc2dc\uc98c \ud14c\ub9c8 \ud574\uc81c",
          "chat.setting.theme.snow.enable":
            "\uc2dc\uc98c \ud14c\ub9c8 \uc124\uc815",
          "chat.share.notexist":
            "\ud0c8\ud1f4\ud558\uac70\ub098 \uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc0ac\uc6a9\uc790\uc785\ub2c8\ub2e4.",
          "chat.sharing.notification.sharealbum":
            "\uc568\ubc94\uc744 \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.sharing.notification.sharenote":
            "\ub178\ud2b8\ub97c \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "chat.status.block":
            "\ucc28\ub2e8\ud55c \uacc4\uc815\uc778 \uacbd\uc6b0 \uc11c\ub85c \uba54\uc2dc\uc9c0\ub97c \uc8fc\uace0\ubc1b\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.status.disconn":
            "\uc77c\uc2dc\uc801\uc73c\ub85c \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0bc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.status.e2ee.verification.fail":
            "Letter Sealing \uc778\uc99d\uc774 \ucde8\uc18c \ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\n\uc554\ud638\ud654\ub41c \uba54\uc2dc\uc9c0\ub294 \ubcf8\uc778 \uc778\uc99d \ud6c4\n\ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "chat.status.keyExchangeBtn": "\ubcf8\uc778 \uc778\uc99d",
          "chat.status.leave":
            "\ud1f4\uc7a5\ud55c \ub300\ud654\ubc29\uc5d0\uc11c\ub294 \ub354 \uc774\uc0c1 \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0bc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chat.status.needKeyExchange":
            "LINE PC \ubc84\uc804\uc5d0\uc11c Letter Sealing \uc554\ud638\ud654 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 \ubcf8\uc778 \uc778\uc99d\uc744 \ud574\uc57c \ud569\ub2c8\ub2e4.",
          "chat.system.inviteeoverlimit":
            "\ub2e4\uc74c \uba64\ubc84\ub294 \ucc38\uc5ec \uac00\ub2a5\ud55c \ucd5c\ub300 \uadf8\ub8f9 \uc218 \ud55c\ub3c4\ub97c \ucd08\uacfc\ud55c \uc0c1\ud0dc\uc785\ub2c8\ub2e4. \ud604\uc7ac \uc774 \uadf8\ub8f9\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n%1",
          "chat.system.msg.a.unsend":
            "%1\ub2d8\uc774 \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0b4\uae30 \ucde8\uc18c\ud588\uc2b5\ub2c8\ub2e4. ",
          "chat.system.msg.unsend":
            "\uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0b4\uae30 \ucde8\uc18c\ud588\uc2b5\ub2c8\ub2e4. ",
          "chat.systemmessage.upgradegroup":
            "\uadf8\ub8f9 \uc124\uc815\uc774 \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\uc81c\ubd80\ud130 \ucd08\ub300\ub97c \uc218\ub77d\ud55c \uc0ac\ub78c\ub9cc \uadf8\ub8f9\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "chat.title.chatMember": "\ub300\ud654 \uba64\ubc84",
          "chat.toast.notifications.mute":
            "\ub300\ud654\ubc29 \uc54c\ub9bc\uc774 \uaebc\uc84c\uc2b5\ub2c8\ub2e4.",
          "chat.toast.notifications.unmute":
            "\ub300\ud654\ubc29 \uc54c\ub9bc\uc774 \ucf1c\uc84c\uc2b5\ub2c8\ub2e4.",
          "chat.trans.tooltip": "\ud22c\uba85\ub3c4",
          "chat.video.play": "\uc7ac\uc0dd",
          "chat.video.replay": "\ub2e4\uc2dc \ubcf4\uae30",
          "chat.video.tooltip": "\ube44\ub514\uc624",
          "chatapp.giphy.forward":
            "GIPHY\uc5d0\uc11c \ubcf4\ub0b8 GIF \ud30c\uc77c\uc758 \uacbd\uc6b0 \uc804\ub2ec \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chatapp.giphy.forward.next":
            "GIPHY\uc5d0\uc11c \ubcf4\ub0b8 GIF \ud30c\uc77c\uc758 \uacbd\uc6b0 \uc804\ub2ec \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub098\uba38\uc9c0 \ud30c\uc77c\ub9cc \uc804\ub2ec\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "chatapp.giphy.keep":
            "GIPHY\uc5d0\uc11c \ubcf4\ub0b8 GIF \ud30c\uc77c\uc758 \uacbd\uc6b0 Keep\uc5d0 \uc800\uc7a5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chatapp.giphy.keep.next":
            "GIPHY\uc5d0\uc11c \ubcf4\ub0b8 GIF \ud30c\uc77c\uc758 \uacbd\uc6b0 Keep\uc5d0 \uc800\uc7a5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub098\uba38\uc9c0 \ud30c\uc77c\ub9cc \uc800\uc7a5\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "chatl.share.alert.error":
            "\uc120\ud0dd\ud55c \uba54\uc2dc\uc9c0\uac00 \uc774\ubbf8 \ubcf4\ub0b4\uae30 \ucde8\uc18c\ub418\uc5b4 \uacf5\uc720\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chatl.share.alert.max":
            "\ucd5c\ub300\xa0%1\uac1c\uae4c\uc9c0 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "chatl.share.toast.multiple.other":
            "\ub300\ud654\ubc29 %n\uac1c\uc5d0 \uba54\uc2dc\uc9c0\ub97c \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "chatl.share.toast.single":
            "%1\uc5d0 \uba54\uc2dc\uc9c0\ub97c \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "chatl.sharetotalk.title": "\ub300\uc0c1 \uc120\ud0dd",
          "chatlist.allinone.close.btn": "\ub300\ud654\ubc29 \ub2eb\uae30",
          "chatlist.allinone.open.btn": "\ub300\ud654\ubc29 \ud3bc\uce58\uae30",
          "chatlist.btn.startchat": "\ub300\ud654 \uc2dc\uc791",
          "chatlist.chooseChat.empty.btn":
            "\ub300\ud654\ubc29 \ubd88\ub7ec\uc624\uae30",
          "chatlist.chooseChat.empty.desc":
            "\uc0c8 \ucc3d\uc73c\ub85c \uc5f4\ub9b0 \ub300\ud654\ubc29\uc785\ub2c8\ub2e4. \n\ub2e4\uc2dc \ubd88\ub7ec\uc62c\uae4c\uc694?",
          "chatlist.context.menu.seperateChat.label":
            "\uc0c8 \ucc3d\uc73c\ub85c \uc5f4\uae30",
          "chatlist.guide.allinone.text":
            "\ub300\ud654\ubc29\uc744 \ud3bc\uccd0\uc11c \ub098\ub780\ud788 \ud45c\uc2dc\ud560 \uc218 \uc788\uc5b4\uc694.",
          "chatlist.guide.chatStart.text":
            "\uce5c\uad6c\uc640 \ub300\ud654\ub97c \uc2dc\uc791\ud574 \ubcf4\uc138\uc694.",
          "chatlist.hide.confirm":
            "\ub300\ud654 \ub0b4\uc6a9\uc740 \uc0ad\uc81c\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ",
          "chatlist.keepmemo.desc.msg":
            "\ub098\ub9cc \ubcfc \uc218 \uc788\ub294 \ub300\ud654\ubc29\uc5d0 \ud14d\uc2a4\ud2b8, \uc0ac\uc9c4, \ub9c1\ud06c \ub4f1\uc744 \uac04\ud3b8\ud558\uac8c \uc804\uc1a1\ud574 \ubcf4\uc138\uc694.",
          "chatlist.keepmemo.desc.title": "Keep \uba54\ubaa8",
          "chatlist.search.hint.chatList": "\ub300\ud654\ubc29 \uac80\uc0c9",
          "chatlist.sort.unreadRoom":
            "\uc77d\uc9c0 \uc54a\uc740 \ub300\ud654\ubc29 \ubcf4\uae30",
          "chatlive.end.popup.done": "\uc885\ub8cc",
          "chatlive.error.notavailable":
            "\ub2e4\ub978 \uba64\ubc84\uac00 \ud1b5\ud654\ub97c \uba3c\uc800 \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4.",
          "chatlive.maximum":
            "\ucc38\uc5ec \uac00\ub2a5\ud55c \ucd5c\ub300 \uc778\uc6d0\uc744 \ub118\uc5c8\uc2b5\ub2c8\ub2e4.",
          "chatlive.msg.over.traffic":
            "\ubc29\uc1a1\ub7c9\uc774 \ub9ce\uc544 \uc5f0\uacb0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "chatlive.screen.share.ongoing.body":
            "LINE\uc5d0\uc11c \ub0b4 \ud654\uba74\uc744 \uacf5\uc720 \uc911\uc785\ub2c8\ub2e4.",
          "chatlive.screen.share.ongoing.stop": "\uc911\uc9c0",
          "chatlive.screen.share.ongoing.top":
            "\ub0b4 \ud654\uba74\uc744 \uacf5\uc720\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
          "chatlive.screen.share.select.body":
            "\ub0b4 PC \ud654\uba74\uc744 \uacf5\uc720\ud569\ub2c8\ub2e4. \ub2e4\uc74c \uc911 \uc5b4\ub5a4 \ud654\uba74\uc744 \uacf5\uc720\ud560\uc9c0 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.",
          "chatlive.screen.share.select.done": "\uacf5\uc720",
          "chatlive.screen.share.select.item": "\ud654\uba74 %1",
          "chatlive.screen.share.select.title":
            "\uacf5\uc720 \ud654\uba74 \uc120\ud0dd",
          "chatlive.viewer.list.title.other": "",
          "chatlive.viewer.list.title.plurals.other":
            "%n\uba85\uc774 \ubcf4\ub294 \uc911",
          "chatroom.guide.sticker.text":
            "\ub2e4\uc591\ud55c \uc2a4\ud2f0\ucee4\ub85c \uc990\uac70\uc6b4 \ub300\ud654\ub97c \ub098\ub220\ubcf4\uc138\uc694. ",
          "chatsettings.desc.membersjoinautomatically":
            "\uce5c\uad6c\ub97c \uadf8\ub8f9\uc5d0 \ucd08\ub300\ud558\uba74 \uc0c8 \uba64\ubc84\ub85c \uc989\uc2dc \ucd94\uac00\ub429\ub2c8\ub2e4. \uce5c\uad6c\uc5d0\uac8c \ucd08\ub300\ub97c \ubcf4\ub0b4 \uadf8\ub8f9 \ucc38\uc5ec \uc218\ub77d\uc744 \ubc1b\uc73c\ub824\uba74 \uc774 \uc124\uc815\uc744 \uaebc \uc8fc\uc138\uc694.",
          "chatsettings.popup.desc.onewaywarning":
            "\uc774 \uc124\uc815\uc744 \ud55c \ubc88 \ub044\uba74 \ub098\uc911\uc5d0 \ub2e4\uc2dc \ucf24 \uc218 \uc5c6\uc73c\ub2c8 \uc8fc\uc758\ud574 \uc8fc\uc138\uc694. \uc124\uc815\uc744 \ub044\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "chatsettings.popup.title.onewaywarning":
            "\ub098\uc911\uc5d0 \ub2e4\uc2dc \ucf24 \uc218 \uc5c6\ub294 \uc124\uc815\uc785\ub2c8\ub2e4.",
          "chatsettings.title.membersjoinautomatically":
            "\uba64\ubc84 \uc790\ub3d9 \ucd94\uac00",
          "choosefriends.button.createGroup": "\uadf8\ub8f9 \ub9cc\ub4e4\uae30",
          "choosefriends.button.gotochatsingle":
            "\ub300\ud654\ubc29\uc73c\ub85c \uc774\ub3d9",
          "choosefriends.button.invite": "\ucd08\ub300",
          "choosefriends.title.default": "\uce5c\uad6c \uc120\ud0dd",
          "choosefriends.title.numselected": "\uc120\ud0dd \ud56d\ubaa9 %1",
          "chrome.common.toast.unabletocopy":
            "\uc774\ubbf8\uc9c0\ub97c \ubcf5\uc0ac\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "chrome.setting.desc.notiforsp":
            "Chrome \ubc84\uc804 \uc774\uc6a9 \uc2dc \ubaa8\ubc14\uc77c \uc571\uc5d0\uc11c \uc54c\ub9bc \ubc1b\uc9c0 \uc54a\uc74c",
          "chrome.time.desc.outofrangetime": "aaa h:mm",
          "chrome.time.toast.outofrange":
            "%1 \uc774\uc804\uc73c\ub85c \uc2dc\uac04\uc744 \uc124\uc815\ud574 \uc8fc\uc138\uc694.",
          "chrome.time.toast.outofrange2":
            "%1 \uc774\ud6c4\ub85c \uc2dc\uac04\uc744 \uc124\uc815\ud574 \uc8fc\uc138\uc694.",
          "chrome.user.error.failedToBlock":
            "\uc774 \uacc4\uc815\uc744 \ucc28\ub2e8\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "chrome.user.error.failedToDeclineGroupInvitation":
            "\ucd08\ub300\ub97c \uac70\uc808\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.",
          "chrome.user.error.failedToHide":
            "\uc774 \uacc4\uc815\uc744 \uc228\uae38 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "chrome.user.error.failedToJoinGroup":
            "\uc774 \uadf8\ub8f9\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "chrome.user.error.failedToLeaveGroup":
            "\uadf8\ub8f9\uc744 \ub098\uac08 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "chrome.user.error.failedToMarkFavorite":
            "\uc990\uaca8\ucc3e\uae30 \ub4f1\ub85d\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
          "chrome.user.error.failedToShowUser":
            "\uc774 \uacc4\uc815\uc744 \uc228\uae30\uae30 \ud574\uc81c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "chrome.user.error.failedToUnblock":
            "\ucc28\ub2e8\uc744 \ud574\uc81c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "common.album.empty.desc":
            "\uc990\uac81\uace0 \uc7ac\ubc0c\ub294 \uc21c\uac04\ub4e4\uc744 \uc568\ubc94\uc73c\ub85c \uacf5\uc720\ud574\ubcf4\uc138\uc694.",
          "common.alert.errorcode": "\uc624\ub958 \ucf54\ub4dc : %1",
          "common.alert.notsupported":
            "\uc774 \ubc84\uc804\uc5d0\uc11c\ub294 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\nLINE\uc744 \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud574 \uc8fc\uc138\uc694.",
          "common.alert.unsend.content":
            "\ubcf4\ub0b4\uae30 \ucde8\uc18c\ud55c \ucf58\ud150\uce20\uc785\ub2c8\ub2e4.  ",
          "common.alert.unsend.multi.contents":
            "\ubcf4\ub0b4\uae30 \ucde8\uc18c\ub41c \ud56d\ubaa9\uc740 \uc81c\uc678\ub429\ub2c8\ub2e4.",
          "common.alert.unsupported.osversion":
            "\uc774 \ubc84\uc804\uc758 OS\uc5d0\uc11c\ub294 \ud574\ub2f9 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. OS\ub97c \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud574 \uc8fc\uc138\uc694.",
          "common.alert.update.title": "\uc5c5\ub370\uc774\ud2b8",
          "common.alert.version.other":
            "\uc774\ubbf8 \ub2e4\ub978 \ubc84\uc804\uc758 LINE\uc744 \uc2e4\ud589 \uc911\uc785\ub2c8\ub2e4.",
          "common.am": "AM",
          "common.btn.back": "\ub4a4\ub85c",
          "common.btn.cancel": "\ucde8\uc18c",
          "common.btn.capture.option":
            "\ucea1\ucc98\xa0\uc2dc\xa0\uc774\xa0\ucc3d\xa0\uc228\uae30\uae30",
          "common.btn.capture.option.tooltip":
            "\ud654\uba74 \ucea1\ucc98 \uc635\uc158",
          "common.btn.delete": "\uc0ad\uc81c",
          "common.btn.discard": "\ub098\uac00\uae30",
          "common.btn.forward": "\uacf5\uc720",
          "common.btn.hide": "\uc228\uae30\uae30",
          "common.btn.next": "\ub2e4\uc74c",
          "common.btn.quit": "LINE \uc885\ub8cc",
          "common.btn.retry": "\uc7ac\uc2dc\ub3c4",
          "common.btn.run": "\uc2e4\ud589",
          "common.btn.save": "\uc800\uc7a5",
          "common.btn.seemore": "\ub354\ubcf4\uae30",
          "common.btn.submit": "\ud655\uc778",
          "common.btn.unhide": "\uc228\uae30\uae30 \ud574\uc81c",
          "common.cancel": "\ucde8\uc18c",
          "common.cancelalert.desc":
            "\uc785\ub825\ud558\uc2e0 \ub0b4\uc6a9\uc774 \uc0ad\uc81c\ub429\ub2c8\ub2e4. \uc774 \ud654\uba74\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "common.code.tooltip":
            "\uc0ac\uc9c4\uc758 QR \ucf54\ub4dc\ub97c \uc2a4\uce94\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "common.content.address.share.from.buddy":
            "%1\ub2d8\uc774 \uc5f0\ub77d\ucc98\ub97c \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.content.address.share.from.me":
            "\uc5f0\ub77d\ucc98\ub97c \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.content.applink.app.recv":
            "%1 \uc18c\uac1c\ud569\ub2c8\ub2e4.",
          "common.content.applink.app.sent":
            "%1 \uc18c\uac1c\ud588\uc2b5\ub2c8\ub2e4.",
          "common.content.applink.friend.recv":
            "%1\uc5d0\uc11c \uce5c\uad6c\uc694\uccad\uc774 \uc654\uc2b5\ub2c8\ub2e4.",
          "common.content.applink.friend.sent":
            "%1\uc5d0\uc11c \uce5c\uad6c\uc694\uccad\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.content.audio":
            "%1\ub2d8\uc774 \uc74c\uc131 \ud30c\uc77c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.content.audio.mine":
            "\uc74c\uc131 \ud30c\uc77c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.content.coupon.message.postfix":
            "\ubaa8\ubc14\uc77c\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",
          "common.content.group.note.updated":
            "\uc0c8 \ub178\ud2b8\ub97c \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4.",
          "common.content.group.note.updated.myself":
            "\uc0c8 \ub178\ud2b8\ub97c \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4.",
          "common.content.groupboard.from.buddy":
            "%1(\uc774)\uac00 \uadf8\ub8f9\ubcf4\ub4dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud588\uc2b5\ub2c8\ub2e4.",
          "common.content.groupboard.from.me":
            "\uadf8\ub8f9\ubcf4\ub4dc\uac00 \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "common.content.home.shared":
            "%1\ub2d8\uc758 \uac8c\uc2dc\uae00\uc744 \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "common.content.home.shared.myself":
            "%1\ub2d8\uc758 \uac8c\uc2dc\uae00\uc744 \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "common.content.image":
            "%1\ub2d8\uc774 \uc0ac\uc9c4\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.content.image.mine":
            "\uc0ac\uc9c4\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.content.invite":
            '"%1"\uc5d0 \ucd08\ub300 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.',
          "common.content.location.from.buddy":
            "%1\ub2d8\uc774 \uc704\uce58\uc815\ubcf4\ub97c \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.content.location.from.me":
            "\uc704\uce58\uc815\ubcf4\ub97c \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.content.mantoman.note.newpost":
            "\uc0c8 \ub178\ud2b8\ub97c \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4.",
          "common.content.mantoman.note.newpost.myself":
            "\uc0c8 \ub178\ud2b8\ub97c \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4.",
          "common.content.normal": "\ub2d8\uc758 \uba54\uc2dc\uc9c0",
          "common.content.pdf":
            "%1\ub2d8\uc774 PDF \ud30c\uc77c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.content.pdf.mine":
            "PDF \ud30c\uc77c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.content.presence.join":
            "%1\ub2d8\uc774 \ub300\ud654\uc5d0 \ucc38\uc5ec\ud569\ub2c8\ub2e4.",
          "common.content.presence.join.multiple.plurals.few": "",
          "common.content.presence.join.multiple.plurals.many": "",
          "common.content.presence.join.multiple.plurals.one": "",
          "common.content.presence.join.multiple.plurals.other": "",
          "common.content.presence.join.multiple.plurals.two": "",
          "common.content.presence.join.multiple.plurals.zero": "",
          "common.content.presence.leave":
            "%1\ub2d8\uc774 \ub300\ud654\ubc29\uc744 \ub098\uac14\uc2b5\ub2c8\ub2e4.",
          "common.content.sticker":
            "%1\ub2d8\uc774 \uc2a4\ud2f0\ucee4\ub97c \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.content.sticker.gift.from.buddy":
            "%1\ub2d8\uc73c\ub85c\ubd80\ud130 \uc120\ubb3c\uc774 \ub3c4\ucc29\ud588\uc2b5\ub2c8\ub2e4.",
          "common.content.sticker.gift.from.me":
            "\uc120\ubb3c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.content.sticker.mine":
            "\uc2a4\ud2f0\ucee4\ub97c \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.content.theme.gift.from.buddy":
            "%1\ub2d8\uc73c\ub85c\ubd80\ud130 \uc120\ubb3c\uc774 \ub3c4\ucc29\ud588\uc2b5\ub2c8\ub2e4.",
          "common.content.theme.gift.from.me":
            "\uc120\ubb3c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.content.timeline.post":
            "\ud074\ub9ad\ud558\uba74 \ubcc4\ub3c4\uc758 \ube0c\ub77c\uc6b0\uc800\uc5d0\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "common.content.video":
            "%1\ub2d8\uc774 \ub3d9\uc601\uc0c1 \ud30c\uc77c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.content.video.mine":
            "\ub3d9\uc601\uc0c1 \ud30c\uc77c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.continue": "\uacc4\uc18d",
          "common.country.name.ae": "\uc544\ub78d\uc5d0\ubbf8\ub9ac\ud2b8",
          "common.country.name.at": "\uc624\uc2a4\ud2b8\ub9ac\uc544",
          "common.country.name.au": "\ud638\uc8fc",
          "common.country.name.bd": "\ubc29\uae00\ub77c\ub370\uc2dc",
          "common.country.name.be": "\ubca8\uae30\uc5d0",
          "common.country.name.bg": "\ubd88\uac00\ub9ac\uc544",
          "common.country.name.br": "\ube0c\ub77c\uc9c8",
          "common.country.name.ca": "\uce90\ub098\ub2e4",
          "common.country.name.ch": "\uc2a4\uc704\uc2a4",
          "common.country.name.cn": "\uc911\uad6d",
          "common.country.name.cy": "\ud0a4\ud504\ub85c\uc2a4",
          "common.country.name.cz": "\uccb4\ucf54",
          "common.country.name.de": "\ub3c5\uc77c",
          "common.country.name.dk": "\ub374\ub9c8\ud06c",
          "common.country.name.ee": "\uc5d0\uc2a4\ud1a0\ub2c8\uc544",
          "common.country.name.es": "\uc2a4\ud398\uc778",
          "common.country.name.fi": "\ud540\ub780\ub4dc",
          "common.country.name.fr": "\ud504\ub791\uc2a4",
          "common.country.name.gb": "\uc601\uad6d",
          "common.country.name.gr": "\uadf8\ub9ac\uc2a4",
          "common.country.name.hk": "\ud64d\ucf69",
          "common.country.name.hr": "\ud06c\ub85c\uc544\ud2f0\uc544",
          "common.country.name.ht": "\uc544\uc774\ud2f0",
          "common.country.name.hu": "\ud5dd\uac00\ub9ac",
          "common.country.name.id": "\uc778\ub3c4\ub124\uc2dc\uc544",
          "common.country.name.ie": "\uc544\uc77c\ub79c\ub4dc",
          "common.country.name.il": "\uc774\uc2a4\ub77c\uc5d8",
          "common.country.name.in": "\uc778\ub3c4",
          "common.country.name.ir": "\uc774\ub780",
          "common.country.name.is": "\uc544\uc774\uc2ac\ub780\ub4dc",
          "common.country.name.it": "\uc774\ud0c8\ub9ac\uc544",
          "common.country.name.jp": "\uc77c\ubcf8",
          "common.country.name.kg": "\ud0a4\ub974\uae30\uc2a4\uc2a4\ud0c4",
          "common.country.name.kh": "\uce84\ubcf4\ub514\uc544",
          "common.country.name.kr": "\ub300\ud55c\ubbfc\uad6d",
          "common.country.name.kz": "\uce74\uc790\ud750\uc2a4\ud0c4",
          "common.country.name.la": "\ub77c\uc624\uc2a4",
          "common.country.name.li": "\ub9ac\ud788\ud150\uc288\ud0c0\uc778",
          "common.country.name.lk": "\uc2a4\ub9ac\ub791\uce74",
          "common.country.name.lt": "\ub9ac\ud22c\uc544\ub2c8\uc544",
          "common.country.name.lu": "\ub8e9\uc148\ubd80\ub974\ud06c",
          "common.country.name.lv": "\ub77c\ud2b8\ube44\uc544",
          "common.country.name.ma": "\ubaa8\ub85c\ucf54",
          "common.country.name.mm": "\ubbf8\uc580\ub9c8",
          "common.country.name.mt": "\ubab0\ud0c0",
          "common.country.name.mx": "\uba55\uc2dc\ucf54",
          "common.country.name.my": "\ub9d0\ub808\uc774\uc2dc\uc544",
          "common.country.name.ng": "\ub098\uc774\uc9c0\ub9ac\uc544",
          "common.country.name.nl": "\ub124\ub35c\ub780\ub4dc",
          "common.country.name.no": "\ub178\ub974\uc6e8\uc774",
          "common.country.name.nz": "\ub274\uc9c8\ub79c\ub4dc",
          "common.country.name.om": "\uc624\ub9cc",
          "common.country.name.ph": "\ud544\ub9ac\ud540",
          "common.country.name.pl": "\ud3f4\ub780\ub4dc",
          "common.country.name.pt": "\ud3ec\ub974\ud22c\uac08",
          "common.country.name.qa": "\uce74\ud0c0\ub974",
          "common.country.name.ro": "\ub8e8\ub9c8\ub2c8\uc544",
          "common.country.name.ru": "\ub7ec\uc2dc\uc544",
          "common.country.name.sa":
            "\uc0ac\uc6b0\ub514\uc544\ub77c\ube44\uc544",
          "common.country.name.se": "\uc2a4\uc6e8\ub374",
          "common.country.name.sg": "\uc2f1\uac00\ud3ec\ub974",
          "common.country.name.si": "\uc2ac\ub85c\ubca0\ub2c8\uc544",
          "common.country.name.sk": "\uc2ac\ub85c\ubc14\ud0a4\uc544",
          "common.country.name.th": "\ud0dc\uad6d",
          "common.country.name.tr": "\ud130\ud0a4",
          "common.country.name.tt":
            "\ud2b8\ub9ac\ub2c8\ub2e4\ub4dc \ud1a0\ubc14\uace0",
          "common.country.name.tw": "\ub300\ub9cc",
          "common.country.name.ua": "\uc6b0\ud06c\ub77c\uc774\ub098",
          "common.country.name.us": "\ubbf8\uad6d",
          "common.country.name.vn": "\ubca0\ud2b8\ub0a8",
          "common.country.name.za":
            "\ub0a8\uc544\ud504\ub9ac\uce74 \uacf5\ud654\uad6d",
          "common.country.other": "\uae30\ud0c0",
          "common.countryregion": "\uad6d\uac00/\uc9c0\uc5ed",
          "common.date.format.short": "M.d",
          "common.delete": "\uc0ad\uc81c",
          "common.desc.macupdate":
            "MAC OS \uc5c5\ub370\uc774\ud2b8 \ud6c4 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "common.desc.temporary.error":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \uc644\ub8cc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
          "common.error.image.scan":
            "\uc800\uc7a5 \uae30\uac04\uc774 \ub9cc\ub8cc\ub41c \uc0ac\uc9c4\uc758 \uacbd\uc6b0 \ud574\ub2f9 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "common.error.ocr.failed":
            "\ud14d\uc2a4\ud2b8\ub97c \uc778\uc2dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc5b8\uc5b4 \ubcc0\uacbd \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "common.error.ocr.unknown":
            "\uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uc0ac\uc9c4\uc785\ub2c8\ub2e4.",
          "common.error.translation.failed":
            "\ubc88\uc5ed\uc744 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc6d0\ubb38\uc774\ub098 \ubc88\uc5ed \uc5b8\uc5b4\ub97c \ubcc0\uacbd\ud558\uc5ec \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "common.friday": "\uae08\uc694\uc77c",
          "common.friday.short": "\uae08",
          "common.label.auto.slang": "\uc5b8\uc5b4 \uac10\uc9c0",
          "common.label.code": "QR \ucf54\ub4dc \uc2a4\uce94",
          "common.label.copy": "\ubcf5\uc0ac",
          "common.label.cut": "\uc798\ub77c\ub0b4\uae30",
          "common.label.date": "\ub0a0\uc9dc",
          "common.label.delete": "\uc0ad\uc81c",
          "common.label.file": "\ud30c\uc77c",
          "common.label.lang.ar": "\uc544\ub78d\uc5b4",
          "common.label.lang.de": "\ub3c5\uc77c\uc5b4",
          "common.label.lang.en": "\uc601\uc5b4",
          "common.label.lang.es": "\uc2a4\ud398\uc778\uc5b4",
          "common.label.lang.fa": "\ud398\ub974\uc2dc\uc544\uc5b4",
          "common.label.lang.hi": "\ud78c\ub514\uc5b4",
          "common.label.lang.id": "\uc778\ub3c4\ub124\uc2dc\uc544\uc5b4",
          "common.label.lang.ja": "\uc77c\ubcf8\uc5b4",
          "common.label.lang.ko": "\ud55c\uad6d\uc5b4",
          "common.label.lang.my": "\ubbf8\uc580\ub9c8\uc5b4",
          "common.label.lang.pt": "\ud3ec\ub974\ud22c\uac08\uc5b4",
          "common.label.lang.ru": "\ub7ec\uc2dc\uc544\uc5b4",
          "common.label.lang.th": "\ud0dc\uad6d\uc5b4",
          "common.label.lang.vi": "\ubca0\ud2b8\ub0a8\uc5b4",
          "common.label.lang.zhcn": "\uc911\uad6d\uc5b4(\uac04\uccb4)",
          "common.label.lang.zhtw": "\uc911\uad6d\uc5b4(\ubc88\uccb4)",
          "common.label.moveURL": "URL\ub85c \uc774\ub3d9",
          "common.label.ocr": "\ud14d\uc2a4\ud2b8 \uc778\uc2dd",
          "common.label.ocrlang": "\ubcc0\ud658 \uc5b8\uc5b4",
          "common.label.paste": "\ubd99\uc5ec\ub123\uae30",
          "common.label.redo": "\ub2e4\uc2dc\uc2e4\ud589",
          "common.label.selectAll": "\ubaa8\ub450 \uc120\ud0dd",
          "common.label.slang": "\uc6d0\ubb38 \uc5b8\uc5b4",
          "common.label.text.placeholder":
            "\uc22b\uc790\ub97c \uc785\ub825\ud558\uc138\uc694.",
          "common.label.time": "\uc2dc\uac04",
          "common.label.tlang": "\ubc88\uc5ed \uc5b8\uc5b4",
          "common.label.undo": "\uc2e4\ud589\ucde8\uc18c",
          "common.license.disagree": "\ub3d9\uc758 \uc548 \ud568",
          "common.license.filename": "chrome://license/Korean.rtf",
          "common.license.title": "\uc774\uc6a9 \uc57d\uad00",
          "common.lineUrltoQR.alert.desc1":
            "LINE \ubaa8\ubc14\uc77c \ubc84\uc804\uc5d0\uc11c \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "common.lineUrltoQR.alert.desc2":
            "LINE \ubaa8\ubc14\uc77c \ubc84\uc804\uc5d0\uc11c QR \ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uba74 \ub0b4\uc6a9\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "common.loading": "\ub85c\ub529\uc911...",
          "common.loading.splash": "LINE\uc744 \uc5ec\ub294 \uc911\u2026",
          "common.mac.upgrader.title":
            "LINE \uc5c5\ub370\uc774\ud2b8 \uc548\ub0b4",
          "common.menu.copyToClipboard":
            "\ud074\ub9bd\ubcf4\ub4dc\ub85c \ubcf5\uc0ac",
          "common.menu.delete": "\uc0ad\uc81c",
          "common.menu.forward": "\uacf5\uc720",
          "common.menu.reply": "\ub2f5\uc7a5",
          "common.menu.saveAs":
            "\ub2e4\ub978 \uc774\ub984\uc73c\ub85c \uc800\uc7a5",
          "common.monday": "\uc6d4\uc694\uc77c",
          "common.monday.short": "\uc6d4",
          "common.msg.already.new.version":
            "\ucd5c\uc2e0 \ubc84\uc804\uc785\ub2c8\ub2e4.",
          "common.msg.bot.openapi":
            "%1%1\uc740 %2\uc5d0\uc11c \uc9c1\uc811 \uc6b4\uc601\ud569\ub2c8\ub2e4.%2.\nLY Corporation\uc774 \uc81c\uacf5\ud588\uac70\ub098 \uc2e0\uaddc\ub85c \uc218\uc9d1\ud55c \uac1c\uc778 \uc815\ubcf4\uc758 \ucde8\uae09\ubc29\uce68\uc5d0 \ub300\ud574\uc11c\ub294 \uc544\ub798\ub97c \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "common.msg.bot.openapi.agree": "\ub3d9\uc758",
          "common.msg.bot.openapi.link": "http://me2.do/F5zhqqGo",
          "common.msg.bot.openapi.title":
            "\uac1c\uc778\uc815\ubcf4 \uc81c\uacf5 \ub3d9\uc758",
          "common.msg.checking.version":
            "\uc5c5\ub370\uc774\ud2b8 \ud655\uc778 \uc911\uc785\ub2c8\ub2e4\u2026",
          "common.msg.db.optimize":
            "\uc131\ub2a5 \uac1c\uc120\uc744 \uc704\ud574\n\uc11c\ube44\uc2a4 \ucd5c\uc801\ud654\ub97c \uc9c4\ud589\uc911\uc785\ub2c8\ub2e4.\n\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694.",
          "common.msg.db.optimize.complete":
            "\uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "common.msg.db.optimize.error":
            "\uc54c\uc218\uc5c6\ub294 \uc624\ub958\ub85c\n\uc791\uc5c5\uc774 \uc644\ub8cc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.\n\uc9c0\uae08 \ub77c\uc778\uc744 \uc2dc\uc791\ud569\ub2c8\ub2e4.",
          "common.msg.favorite.exceeded":
            "\uc990\uaca8\ucc3e\uae30\ub294 100\uac1c\uae4c\uc9c0 \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "common.msg.has.new.version":
            "\uc0c8\ub85c\uc6b4 \ubc84\uc804\uc774 \uc788\uc2b5\ub2c8\ub2e4.",
          "common.msg.has.new.version.alert":
            "\uc0c8\ub85c\uc6b4 \ubc84\uc804\uc774 \uc788\uc2b5\ub2c8\ub2e4.\n\uc5c5\ub370\uc774\ud2b8 \ud558\uaca0\uc2b5\ub2c8\uae4c? ",
          "common.msg.invitation.overflow":
            "%1\uba85\uae4c\uc9c0 \ucd08\ub300\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "common.msg.license.opensource": "\ubc95\uc801 \uacf5\uc9c0",
          "common.msg.sticker.need.mobile.download":
            "\ubb34\ub8cc \uc2a4\ud2f0\ucee4\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ubaa8\ubc14\uc77c \ubc84\uc804\uc5d0\uc11c \uba3c\uc800 \ub2e4\uc6b4\ub85c\ub4dc\ud574 \uc8fc\uc138\uc694.\n\ubb34\ub8cc \uc2a4\ud2f0\ucee4\ub294 \ubaa8\ubc14\uc77c \ubc84\uc804\uc758 \uc124\uc815 > \uc2a4\ud2f0\ucee4 > \ub0b4 \uc2a4\ud2f0\ucee4\ub098 \uc2a4\ud2f0\ucee4 \uc0f5 > \ubb34\ub8cc \ud0ed\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "common.msg.terms":
            "\uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc774\uc6a9\uc57d\uad00",
          "common.msg.update.button.label":
            "\uc9c0\uae08 \uc5c5\ub370\uc774\ud2b8 ",
          "common.msg.update.button.label.mac": "App Store\ub85c \uc774\ub3d9",
          "common.msg.warning.autoLogin":
            "\uc571 \uc2e4\ud589\uc2dc \uc790\ub3d9\uc73c\ub85c \ub85c\uadf8\uc778 \ud569\ub2c8\ub2e4.\n\uac1c\uc778\uc815\ubcf4 \ubcf4\ud638\ub97c \uc704\ud574 \uac1c\uc778 PC\uc5d0\uc11c \uc0ac\uc6a9\ud574 \uc8fc\uc138\uc694.",
          "common.name.postfix": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.note.empty.desc":
            "\uc6b0\ub9ac\ub9cc\uc758 \uc774\uc57c\uae30\ub97c \ub178\ud2b8\ub85c \ub0a8\uae30\uace0 \ud568\uaed8 \uacf5\uc720\ud574 \ubcf4\uc138\uc694.",
          "common.notice.dontremind":
            "\ub2e4\uc74c\ubd80\ud130 \uadf8\ub9cc \ubcf4\uae30",
          "common.notice.label.close": "\ub2eb\uae30",
          "common.notice.meta.url": "line_desktop_notice/KO/1123",
          "common.notice.meta.url.mac": "line_desktop_notice_mac/KO/1131",
          "common.notice.title": "\uacf5\uc9c0\uc0ac\ud56d",
          "common.ocr.agree.desc":
            "\ud14d\uc2a4\ud2b8 \uc778\uc2dd \uc11c\ube44\uc2a4 \uc81c\uacf5\uc744 \uc704\ud574 \uc0ac\uc9c4\uc774 \uc11c\ubc84\ub85c \uc804\uc1a1\ub429\ub2c8\ub2e4. \uc0ac\uc9c4 \ub370\uc774\ud130 \uc81c\uacf5\uc5d0 \ub3d9\uc758\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "common.ocr.agree.title":
            "\ud14d\uc2a4\ud2b8 \uc778\uc2dd \uc11c\ube44\uc2a4 \uc774\uc6a9 \ub3d9\uc758",
          "common.ocr.mlstatus.off":
            "\uc11c\ube44\uc2a4 \uac1c\uc120\uc744 \uc704\ud55c \uc0ac\uc9c4 \uc81c\uacf5\uc5d0 \ub3d9\uc758\ud558\uc9c0 \uc54a\uc740 \uc0c1\ud0dc\uc785\ub2c8\ub2e4. \ub3d9\uc758 \uc5ec\ubd80\ub294 LINE \ubaa8\ubc14\uc77c \ubc84\uc804\uc5d0\uc11c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "common.ocr.mlstatus.on":
            "\uc11c\ube44\uc2a4 \uac1c\uc120\uc744 \uc704\ud55c \uc0ac\uc9c4 \uc81c\uacf5\uc5d0 \ub3d9\uc758\ud55c \uacbd\uc6b0 \uc774 \uc544\uc774\ucf58\uc774 \ubc1d\uac8c \ud45c\uc2dc\ub429\ub2c8\ub2e4. \ub3d9\uc758 \uc5ec\ubd80\ub294 LINE \ubaa8\ubc14\uc77c \ubc84\uc804\uc5d0\uc11c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "common.ocr.tooltip":
            "\uc989\uc11d \ubc88\uc5ed \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud574 \ubcf4\uc138\uc694.",
          "common.ocrlang.tooltip":
            "\ud14d\uc2a4\ud2b8\ub85c \ubcc0\ud658\ud560 \uc5b8\uc5b4\ub97c \uc120\ud0dd\ud558\uc138\uc694.",
          "common.off": "\ub054",
          "common.on": "\ucf2c",
          "common.picture.popup.saveImageError":
            "\uc774\ubbf8\uc9c0\ub97c \uc800\uc7a5\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.",
          "common.picture.popup.showImageError":
            "\uc774\ubbf8\uc9c0\ub97c \ucc3e\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.",
          "common.pm": "PM",
          "common.popup.force.update":
            "\ud544\uc218 \uc5c5\ub370\uc774\ud2b8 \ud56d\ubaa9\uc774 \uc788\uc2b5\ub2c8\ub2e4. \n\uc5c5\ub370\uc774\ud2b8 \ud6c4 \uc774\uc6a9\ud574\uc8fc\uc138\uc694.",
          "common.popup.force.update.confirm":
            "\uc5c5\ub370\uc774\ud2b8\ub97c \ud6c4 \ub77c\uc778\uc571\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "common.popup.force.update.inapp":
            "\ud544\uc218 \uc5c5\ub370\uc774\ud2b8 \ud56d\ubaa9\uc774 \uc788\uc2b5\ub2c8\ub2e4. \n\uc5c5\ub370\uc774\ud2b8 \ud6c4 \uc774\uc6a9\ud574\uc8fc\uc138\uc694.",
          "common.popup.force.update.later":
            "1\uc2dc\uac04 \ub4a4 \ub2e4\uc2dc \uc5c5\ub370\uc774\ud2b8\ub97c \ud655\uc778\ud569\ub2c8\ub2e4.",
          "common.popup.queryUpgrade":
            "\uc0c8\ub85c\uc6b4 \ubc84\uc804\uc774 \uc788\uc2b5\ub2c8\ub2e4.\n\uc5c5\ub370\uc774\ud2b8 \ud558\uaca0\uc2b5\ub2c8\uae4c? ",
          "common.popup.sendkey.msg.mac": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.popup.sendkey.msg.win": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.popup.serverAPI.error.update":
            "\ud544\uc218 \uc5c5\ub370\uc774\ud2b8 \ud56d\ubaa9\uc774 \uc788\uc2b5\ub2c8\ub2e4. \n\uc9c0\uae08 \uc5c5\ub370\uc774\ud2b8 \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "common.prepare.service":
            "\uc774\ubbf8 \ucd5c\uc2e0 \ubc84\uc804\uc744 \uc0ac\uc6a9\uc911\uc774\uc2e0 \uacbd\uc6b0\n\ud574\ub2f9 OS\uc5d0\uc11c\uc758 \uc81c\uacf5\uc744 \uc900\ube44 \uc911\uc785\ub2c8\ub2e4.",
          "common.push.mac.versionUpdate":
            "\uc548\uc815\uc801\uc778 \uc0ac\uc6a9\uc744 \uc704\ud574 LINE\uc744 \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud574 \uc8fc\uc138\uc694.",
          "common.report.done": "\uc2e0\uace0\ud588\uc2b5\ub2c8\ub2e4.",
          "common.report.reason.desc":
            "\uc2e0\uace0 \uc0ac\uc720\ub97c \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.",
          "common.request.error":
            "\uc815\uc0c1\uc801\uc73c\ub85c \ucc98\ub9ac\ub418\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. \n\uc7a0\uc2dc \ub4a4\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "common.saturday": "\ud1a0\uc694\uc77c",
          "common.saturday.short": "\ud1a0",
          "common.search.error.length":
            "\uac80\uc0c9\uc5b4\ub97c 2\uc790 \uc774\uc0c1 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "common.search.invalidtext":
            "\ud2b9\uc218 \ubb38\uc790\ub294 \uac80\uc0c9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uac80\uc0c9\uc5b4\ub97c \ub2e4\uc2dc \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "common.seeall": "\uc804\uccb4 \ubcf4\uae30",
          "common.share.url.copied": "\ubcf5\uc0ac\ud588\uc2b5\ub2c8\ub2e4.",
          "common.sunday": "\uc77c\uc694\uc77c",
          "common.sunday.short": "\uc77c",
          "common.thursday": "\ubaa9\uc694\uc77c",
          "common.thursday.short": "\ubaa9",
          "common.time.format": "%1 h:mm",
          "common.toast.album.delete":
            "\uc568\ubc94\uc744 \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4.",
          "common.toast.album.rename":
            "\uc568\ubc94 \uc774\ub984\uc744 \ubcc0\uacbd\ud588\uc2b5\ub2c8\ub2e4.",
          "common.toast.albumCreated":
            "\uc0c8 \uc568\ubc94\uc744 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. ",
          "common.toast.audio":
            "\uc74c\uc131 \ud30c\uc77c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.toast.chatevent.unknown":
            "\ud655\uc778\ud560 \uc218 \uc5c6\ub294 \uc54c\ub9bc\uc785\ub2c8\ub2e4.",
          "common.toast.contact":
            "\uc5f0\ub77d\ucc98\ub97c \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.toast.file":
            "\ud30c\uc77c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.toast.gift":
            "\uc120\ubb3c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.toast.image":
            "\uc0ac\uc9c4\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.toast.inviteGroup":
            "\uadf8\ub8f9\uc5d0 \ucd08\ub300\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "common.toast.label.newMessage":
            "\uc0c8\ub85c\uc6b4 \uba54\uc2dc\uc9c0\uac00 \uc788\uc2b5\ub2c8\ub2e4.",
          "common.toast.linemusic":
            "\uc74c\uc545\uc744 \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "common.toast.location": "\uc784\uc2dc\ud0a4",
          "common.toast.note":
            "\uc0c8 \ub178\ud2b8\ub97c \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4.",
          "common.toast.receiverequest": "",
          "common.toast.sticker":
            "\uc2a4\ud2f0\ucee4\ub97c \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.toast.timeline.group.invite":
            "\uadf8\ub8f9\uc5d0 \ucd08\ub300\ud588\uc2b5\ub2c8\ub2e4.",
          "common.toast.timeline.new.comment":
            "\uc9c0\uae08 \ud655\uc778\ud574 \ubcf4\uc138\uc694.",
          "common.toast.timeline.new.mention":
            "\ub098\ub97c \uba58\uc158\ud588\uc2b5\ub2c8\ub2e4.",
          "common.toast.timeline.new.post":
            "\uc0c8 \ub178\ud2b8\ub97c \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4.",
          "common.toast.timeline.new.sticker":
            "\uc9c0\uae08 \ud655\uc778\ud574 \ubcf4\uc138\uc694.",
          "common.toast.timeline.title.comment": "%1\ub2d8\uc758 \ub313\uae00",
          "common.toast.timeline.title.like":
            "%1\ub2d8\uc758 \uc88b\uc544\uc694",
          "common.toast.timeline.title.recomment":
            "%1\ub2d8\uc758 \ub300\ub313\uae00",
          "common.toast.video":
            "\ub3d9\uc601\uc0c1\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "common.toast.voip.call": "\ud1b5\ud654",
          "common.toast.voip.call.msg":
            "\uc804\ud654\uac00 \uc654\uc2b5\ub2c8\ub2e4.",
          "common.toast.voip.refuse": "\uac70\uc808",
          "common.today": "\uc624\ub298",
          "common.translation.apply.alert":
            "\uc6d0\ubb38\uc744 \uae30\uc900\uc73c\ub85c \ucd5c\ub300 5000\uc790\uae4c\uc9c0 \ubc88\uc5ed\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",
          "common.translation.apply.imagedirect":
            "\uc0ac\uc9c4\uc5d0 \ubc88\uc5ed \ud45c\uc2dc",
          "common.translation.imagedirect.failed":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc5b8\uc5b4\ub97c \ubcc0\uacbd\ud558\uac70\ub098 \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "common.translation.imagedirect.tooltip":
            "\uc635\uc158\uc744 \ucf1c\uba74 \ubb38\uad6c\ub97c \ubc14\ub85c \ubc88\uc5ed\ud558\uace0 \uc0ac\uc9c4\uc5d0 \uc801\uc6a9\ud574\uc11c \ud655\uc778\ud560 \uc218 \uc788\uc5b4\uc694.",
          "common.tuesday": "\ud654\uc694\uc77c",
          "common.tuesday.short": "\ud654",
          "common.unsupported.version.message":
            "\uc774 \ubc84\uc804\uc5d0\uc11c\ub294 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. LINE\uc744 \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud574 \uc8fc\uc138\uc694.",
          "common.update.popup.win10":
            "\ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "common.updater": "\uc5c5\ub370\uc774\ud2b8",
          "common.updater.autoUpdate": "\uc790\ub3d9 \uc5c5\ub370\uc774\ud2b8",
          "common.updater.autoUpdate.apply":
            "<![CDATA[LINE\uc744 \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n<font color='#9e9e9e'>\uc5c5\ub370\uc774\ud2b8 \uc2dc LINE\uc774 \uc7ac\uc2e4\ud589\ub429\ub2c8\ub2e4.\n</font>]]>",
          "common.updater.forceUpdate.apply":
            "\ucd5c\uc2e0 \uc5c5\ub370\uc774\ud2b8 \ubc84\uc804\uc774 \uc788\uc2b5\ub2c8\ub2e4.\n\ud655\uc778 \uc2dc LINE\uc744 \uc7ac\uc2dc\uc791\ud569\ub2c8\ub2e4.",
          "common.updater.newVersion.confirm":
            "\ucd5c\uc2e0 \ubc84\uc804 \uc785\ub2c8\ub2e4.",
          "common.updater.newVersion.download.apply":
            "<![CDATA[\ub2e4\uc6b4\ub85c\ub4dc\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc9c0\uae08 \uc801\uc6a9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n<font color='#9e9e9e'>\ud655\uc778 \uc2dc LINE\uc744 \uc7ac\uc2dc\uc791\ud569\ub2c8\ub2e4.</font>]]>",
          "common.updater.newVersion.downloading":
            "\ucd5c\uc2e0 \ubc84\uc804\uc744 \ub2e4\uc6b4\ub85c\ub4dc \uc911\uc785\ub2c8\ub2e4.\n\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694.",
          "common.updater.newVersion.incompleted":
            "\uc5c5\ub370\uc774\ud2b8\uac00 \uc911\ub2e8\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc7a0\uc2dc \ud6c4\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "common.updater.newVersion.low.hardDisk":
            "\ud558\ub4dc\ub514\uc2a4\ud06c\uc758 \uc800\uc7a5 \uacf5\uac04\uc774 \ubd80\uc871\ud569\ub2c8\ub2e4.\n\uc5ec\uc720 \uacf5\uac04\uc744 \ud655\ubcf4 \ud6c4 \n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "common.updater.notice.description":
            "\uc0c8\ub85c\uc6b4 \uae30\ub2a5",
          "common.updater.notice.history":
            "\uc5c5\ub370\uc774\ud2b8 \ub0b4\uc5ed",
          "common.updater.notice.title":
            "\uc5c5\ub370\uc774\ud2b8 \uacf5\uc9c0",
          "common.updater.notice.updated":
            "\ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "common.wednesday": "\uc218\uc694\uc77c",
          "common.wednesday.short": "\uc218",
          "common.yearMonth.format": "yyyy\ub144 M\uc6d4",
          "common.yesterday": "\uc5b4\uc81c",
          "creategroup.button.create": "\ub9cc\ub4e4\uae30",
          "creategroup.checkbox.desc.membersjoinautomatically":
            "\uce5c\uad6c\ub97c \uadf8\ub8f9\uc5d0 \ucd08\ub300\ud558\uba74 \uc0c8 \uba64\ubc84\ub85c \uc989\uc2dc \ucd94\uac00\ub429\ub2c8\ub2e4. \uce5c\uad6c\uc5d0\uac8c \ucd08\ub300\ub97c \ubcf4\ub0b4 \uadf8\ub8f9 \ucc38\uc5ec \uc218\ub77d\uc744 \ubc1b\uc73c\ub824\uba74 \uc774 \uc124\uc815\uc744 \uaebc \uc8fc\uc138\uc694.",
          "creategroup.checkbox.title.membersjoinautomatically":
            "\uba64\ubc84 \uc790\ub3d9 \ucd94\uac00",
          "creategroup.label.membercount": "\uba64\ubc84",
          "creategroup.placeholder.entergroupname":
            "\uadf8\ub8f9 \uc774\ub984 \uc785\ub825",
          "creategroup.placerholder.defaultname.autojoinoff":
            "%1\ub2d8\uc758 \uadf8\ub8f9",
          "creategroup.popup.desc.100memberswarning":
            "100\uba85\uc774 \ub118\ub294 \ud070 \uadf8\ub8f9\uc778 \uacbd\uc6b0, \ubc18\ub4dc\uc2dc \uce5c\uad6c\uc5d0\uac8c \ucd08\ub300\ub97c \ubcf4\ub0b4 \ucc38\uc5ec \uc218\ub77d\uc744 \ubc1b\uc544\uc57c \ud569\ub2c8\ub2e4.\n\uc0c8 \uba64\ubc84\ub97c \uadf8\ub8f9\uc5d0 \uc790\ub3d9 \ucd94\uac00\ud558\ub824\uba74 \uba64\ubc84 \uc218\ub97c 100\uba85 \uc774\ud558\ub85c \uc870\uc815\ud574 \uc8fc\uc138\uc694.",
          "creategroup.popup.desc.invitelocked":
            "\uc774 \uae30\ub2a5\uc744 \ub044\ub824\uba74 \uba64\ubc84 \uc218\ub97c 100\uba85 \uc774\ud558\ub85c \uc870\uc815\ud574 \uc8fc\uc138\uc694.",
          "creategroup.popup.desc.inviteonwarning":
            "\uba64\ubc84 \uc218 \uae30\uc900 100\uba85\uc744 \ucd08\uacfc\ud55c \uadf8\ub8f9\uc778 \uacbd\uc6b0 '\ucd08\ub300\uc7a5 \uc804\uc1a1' \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc0c8 \uba64\ubc84\uc758 \ucd08\ub300 \uc218\ub77d\uc744 \ubc1b\uc544\uc57c \ud569\ub2c8\ub2e4.\n\ud574\ub2f9 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc73c\ub824\uba74 \uba64\ubc84 \uc218\ub97c 100\uba85 \uc774\ud558\ub85c \uc870\uc815\ud574 \uc8fc\uc138\uc694.",
          "creategroup.popup.desc.toomanygroups":
            "\ucc38\uc5ec\ud560 \uc218 \uc788\ub294 \ucd5c\ub300 \uadf8\ub8f9 \uc218 \ud55c\ub3c4\ub97c \ucd08\uacfc\ud558\uc5ec \ub354 \uc774\uc0c1 \uc0c8 \uadf8\ub8f9\uc744 \ub9cc\ub4e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc790\uc8fc \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ub2e4\ub978 \uadf8\ub8f9\uc5d0\uc11c \ub098\uc628 \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "creategroup.popup.title.100memberswarning":
            "\uba64\ubc84\ub97c \uc790\ub3d9\uc73c\ub85c \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "creategroup.popup.title.invitelocked":
            "\ucd08\ub300\uc7a5 \uc804\uc1a1 \uae30\ub2a5\uc744 \ub04c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "creategroup.popup.title.inviteonwarning":
            "\ucd08\ub300\uc7a5\uc744 \ubc18\ub4dc\uc2dc \uc804\uc1a1\ud574\uc57c \ud569\ub2c8\ub2e4.",
          "creategroup.popup.title.toomanygroups":
            "\ucd5c\ub300 \ucc38\uc5ec \uadf8\ub8f9 \uc218 \ucd08\uacfc",
          "creategroup.popup.title.toomanymembers":
            "\uba64\ubc84 \uc218\ub97c \uc870\uc815\ud574 \uc8fc\uc138\uc694.",
          "creategroup.title.setupProfile":
            "\uadf8\ub8f9 \ud504\ub85c\ud544 \uc124\uc815",
          "creategroup.toggle.desc.requireinvite":
            "\ucd08\ub300\ub97c \uc218\ub77d\ud55c \uc0ac\ub78c\ub9cc \uadf8\ub8f9\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "creategroup.toggle.title.requireinvite":
            "\ucd08\ub300\uc7a5 \uc804\uc1a1",
          "creategroup.tooltip.groupname":
            "\uce5c\uad6c\ub4e4\uc774 \uc54c\uc544\ubcf4\uae30 \uc26c\uc6b4 \uc774\ub984\uc73c\ub85c \uadf8\ub8f9\uba85\uc744 \ubc14\uafd4\ubcf4\uc138\uc694.",
          "creategrouppopup.desc.toomanymembers":
            "\uc0c8 \uba64\ubc84\ub97c \uadf8\ub8f9\uc5d0 \uc790\ub3d9 \ucd94\uac00\ud558\ub824\uba74 \uba64\ubc84 \uc218\ub97c 100\uba85 \uc774\ud558\ub85c \uc870\uc815\ud574 \uc8fc\uc138\uc694.",
          "deletedata.chatHisotry.all.desc.confirm":
            "\ub0b4 \uae30\uae30 \ubaa8\ub450\uc5d0\uc11c \ub300\ud654\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\xa0\uc0ad\uc81c\ub41c\xa0\ub300\ud654\ub294\xa0\ubcf5\uc6d0\ud560\xa0\uc218\xa0\uc5c6\uc2b5\ub2c8\ub2e4.",
          "deletedata.chatHisotry.onlypc.desc.confirm":
            "\uc9c0\uae08 \uc0ac\uc6a9 \uc911\uc778 PC\uc5d0\uc11c\ub9cc \ub300\ud654\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \uc0ad\uc81c\ub41c \ub300\ud654\ub294 \ubcf5\uc6d0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "desktop.addchatfolder.button.add": "\ucd94\uac00",
          "desktop.addchatfolder.placeholder.entername":
            "\ud3f4\ub354 \uc774\ub984",
          "desktop.addchatfolder.title.addnewfolder":
            "\ub300\ud654 \ud3f4\ub354 \ub9cc\ub4e4\uae30",
          "desktop.addchatpopup.button.add": "\ucd94\uac00",
          "desktop.addchatpopup.button.cancel": "\ucde8\uc18c",
          "desktop.addchatpopup.desc.allchats": "\uc804\uccb4",
          "desktop.addchatpopup.desc.selected": "\uc120\ud0dd \ud56d\ubaa9 %1",
          "desktop.addchatpopup.placeholder.search": "\uac80\uc0c9",
          "desktop.addchatpopup.title.addchats": "\ub300\ud654 \ucd94\uac00",
          "desktop.addfriends.desc.recommendedai": "\ucd94\ucc9c AI",
          "desktop.addtoalbum.button.cancel": "\ucde8\uc18c",
          "desktop.addtoalbum.button.createalbum":
            "\uc568\ubc94 \ub9cc\ub4e4\uae30",
          "desktop.addtoalbum.title.selectalbum": "\uc568\ubc94 \uc120\ud0dd",
          "desktop.album.allalbums.button.albums": "\uc568\ubc94",
          "desktop.album.allalbums.button.photos": "\uc0ac\uc9c4",
          "desktop.album.allalbums.desc.albumsempty":
            "\ub300\ud654\ubc29\uc5d0 \uc568\ubc94\uc774 \ucd94\uac00\ub418\uba74 \uc5ec\uae30\uc5d0\ub3c4 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
          "desktop.album.allalbums.desc.dateformat": "yyyy.M",
          "desktop.album.allalbums.desc.photosempty":
            "\uc568\ubc94\uc5d0 \ud3ec\ud568\ub41c \ucf58\ud150\uce20\uac00 \uc5ec\uae30\uc5d0 \ud45c\uc2dc\ub429\ub2c8\ub2e4.\xa0 \xa0",
          "desktop.album.allalbums.menu.lastcreated":
            "\ub9cc\ub4e0 \ub0a0\uc9dc\uc21c",
          "desktop.album.allalbums.menu.lastupdated":
            "\uc5c5\ub370\uc774\ud2b8\uc21c",
          "desktop.album.allalbums.title.allalbums":
            "\uc568\ubc94 \ubaa8\uc544\ubcf4\uae30",
          "desktop.album.allalbums.title.photosempty":
            "\ucf58\ud150\uce20\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "desktop.album.allalbums.title.unableshow":
            "\uc568\ubc94\uc744 \ud45c\uc2dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "desktop.album.allalbums.tooltip.allalbums":
            "\ubaa8\ub4e0 \ub300\ud654\ubc29 \uc568\ubc94\uc774 \uc5ec\uae30\uc5d0 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uc228\uae30\uac70\ub098 \uc0ad\uc81c\ud55c \ub300\ud654\ubc29\uc758 \uc568\ubc94\ub3c4 \ud45c\uc2dc\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "desktop.album.button.add": "\ucd94\uac00",
          "desktop.album.button.cancel": "\ucde8\uc18c",
          "desktop.album.button.create": "\ub9cc\ub4e4\uae30",
          "desktop.album.button.namechangedone": "\uc800\uc7a5",
          "desktop.album.button.share": "\uacf5\uc720",
          "desktop.album.button.sharealbum": "\uc568\ubc94 \uacf5\uc720",
          "desktop.album.commonkey.button.tryagain": "\uc7ac\uc2dc\ub3c4",
          "desktop.album.desc.albumphotos.other": "\uc0ac\uc9c4 %n",
          "desktop.album.desc.draganddrop":
            "\uc5c5\ub85c\ub4dc\ud560 \ucf58\ud150\uce20\ub97c \uc5ec\uae30\ub85c \ub04c\uc5b4\ub2e4 \ub193\uc73c\uc138\uc694.",
          "desktop.album.error.sharealbum":
            "\uc568\ubc94\uc744 \uc5f0\uc18d\uc73c\ub85c \uacf5\uc720\ud558\uc5ec \uc77c\uc2dc\uc801\uc73c\ub85c \uacf5\uc720\uac00 \uc81c\ud55c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "desktop.album.main.tooltip.albumsallchats":
            "\uc5ec\ub7ec \ub300\ud654\ubc29\uc758 \uc568\ubc94\uc744 \ud55c \uacf3\uc5d0\uc11c \ubaa8\uc544 \ubcfc \uc218 \uc788\uc5b4\uc694.",
          "desktop.album.max.media.alert":
            "\ucd5c\ub300 %1\uac1c\uae4c\uc9c0 \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "desktop.album.photos.button.seealbum": "\uc568\ubc94 \ubcf4\uae30",
          "desktop.album.popupdesc.sharealbum":
            "\uc774 \uc568\ubc94\uc744 \ub300\ud654\ubc29\uc5d0 \uacf5\uc720\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "desktop.album.tooltip.nowsharealbum":
            "\uc568\ubc94\uc744 \ub300\ud654\ubc29\uc5d0 \uacf5\uc720\ud560 \uc218 \uc788\uc5b4\uc694!",
          "desktop.album.viewer.button.seealbum": "\uc568\ubc94 \ubcf4\uae30",
          "desktop.album.viewer.title.unableshow":
            "\ucf58\ud150\uce20\ub97c \ud45c\uc2dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "desktop.backgroundsetting.button.deletecover":
            "\ud504\ub85c\ud544 \ubc30\uacbd \uc0ad\uc81c",
          "desktop.backgroundsetting.button.selectphoto":
            "\uc0ac\uc9c4 \uc120\ud0dd",
          "desktop.blankchatfolder.button.addchat": "\ub300\ud654 \ucd94\uac00",
          "desktop.blankchatfolder.desc.nochats":
            "\ud3f4\ub354\uc5d0 \ucd94\uac00\ub41c \ub300\ud654\uac00 \uc5c6\uc2b5\ub2c8\ub2e4",
          "desktop.blankchatfolder.desc.nochats1":
            "\ub300\ud654\ub97c \ub04c\uc5b4\ub2e4 \ub193\uac70\ub098 \uc544\ub798 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \ub300\ud654\ub97c \ucd94\uac00\ud574 \ubcf4\uc138\uc694.",
          "desktop.calendar.button.recent": "\ucd5c\uadfc",
          "desktop.calendar.desc.month": "M\uc6d4",
          "desktop.calendar.desc.year": "yyyy\ub144",
          "desktop.callsettings.desc.showmessagealerts":
            "\ud1b5\ud654 \uc911 \ud654\uba74 \uc704\uc5d0 \uc0c8 \uba54\uc2dc\uc9c0 \uc54c\ub9bc \ud45c\uc2dc",
          "desktop.chat.choose.empty":
            "\uc120\ud0dd\ud560 \uc218 \uc788\ub294 \ub300\ud654\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "desktop.chat.popup.blockeduser.button.close":
            "\uc2e0\uace0 \uc548 \ud568",
          "desktop.chat.popup.blockeduser.button.report": "\uc2e0\uace0",
          "desktop.chat.popup.blockeduser.desc":
            "\uc2a4\ud338\ubd07\uc774\uac70\ub098 \uc758\uc2ec\uc2a4\ub7ec\uc6b4 \uc0ac\uc6a9\uc790\uc778 \uacbd\uc6b0 \uc2e0\uace0\ud574 \uc8fc\uc138\uc694. \uc548\uc804\ud55c LINE\uc744 \ub9cc\ub4dc\ub294 \ub370 \ud070 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4.",
          "desktop.chat.popup.blockeduser.title":
            "%1\ub2d8\uc744 \uc2e0\uace0\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "desktop.chat.toast.chatunhidden":
            "\uc228\uae30\uae30 \ud574\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "desktop.chat.warning.btn.addfriend": "\uce5c\uad6c \ucd94\uac00",
          "desktop.chat.warning.btn.blockfriend": "\ucc28\ub2e8",
          "desktop.chat.warning.btn.decline": "\uac70\uc808",
          "desktop.chat.warning.btn.join": "\ucc38\uc5ec",
          "desktop.chat.warning.btn.leave": "\ub098\uac00\uae30",
          "desktop.chat.warning.btn.report": "\uc2e0\uace0",
          "desktop.chat.warning.btn.unblockfriend": "\ucc28\ub2e8\ud574\uc81c",
          "desktop.chatfolder.tab.all": "\uc804\uccb4",
          "desktop.chatfolder.tab.friends": "\uce5c\uad6c",
          "desktop.chatfolder.tab.groups": "\uadf8\ub8f9",
          "desktop.chatfolder.tab.newfolder": "\ud3f4\ub354(%1)",
          "desktop.chatfolder.tab.officialaccounts":
            "\uacf5\uc2dd \uacc4\uc815",
          "desktop.chatfolder.tab.openchats": "\uc624\ud508\ucc57",
          "desktop.chatfolder.toast.addedtofoldermulti":
            "\ud3f4\ub354\uc5d0 \ub300\ud654 %1\uac1c\uac00 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "desktop.chatfolder.toast.addedtofolderone":
            "\ud3f4\ub354\uc5d0 \ub300\ud654\uac00 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "desktop.chatfolder.toast.nameinuse":
            "\uc774\ubbf8 \uc0ac\uc6a9 \uc911\uc778 \uc774\ub984\uc785\ub2c8\ub2e4. \ub2e4\ub978 \uc774\ub984\uc744 \uc0ac\uc6a9\ud574 \uc8fc\uc138\uc694",
          "desktop.chatfolder.toast.removedchatmulti":
            "\uae30\uc874 \ud3f4\ub354\ub85c \ub300\ud654 %1\uac1c\uac00 \uc774\ub3d9\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "desktop.chatfolder.toast.removedchatone":
            "\uae30\uc874 \ud3f4\ub354\ub85c \ud574\ub2f9 \ub300\ud654\uac00 \uc774\ub3d9\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "desktop.chatfolder.toast.uptohund":
            "\ud3f4\ub354 1\uac1c\ub2f9 \ub300\ud654\ub294 \ucd5c\ub300 100\uac1c\uae4c\uc9c0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "desktop.chatfolderguide.button.learnmore":
            "\uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30",
          "desktop.chatfolderguide.desc.desc1":
            "\ud654\uba74 \uc624\ub978\ucabd \uc0c1\ub2e8 \ud3b8\uc9d1 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec \uc0c8\ud3f4\ub354 \ucd94\uac00",
          "desktop.chatfolderguide.desc.desc2":
            "\ud3f4\ub354 \uc704\uc5d0\uc11c \ub9c8\uc6b0\uc2a4 \uc624\ub978\ucabd \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \ud3f4\ub354 \uad00\ub9ac \uac00\ub2a5",
          "desktop.chatfolderguide.desc.desc3":
            "\ub9c8\uc6b0\uc2a4\ub85c \ub04c\uc5b4 \ub193\uc73c\uba74 \uac04\ud3b8\ud558\uac8c \uc21c\uc11c \ubcc0\uacbd \uac00\ub2a5",
          "desktop.chatfolderguide.desc.editdragchange":
            "\ub9c8\uc6b0\uc2a4\ub85c \ub04c\uc5b4 \ub193\uc73c\uba74 \ud3f4\ub354 \uc21c\uc11c\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0c8\ud3f4\ub354\ub97c \ucd94\uac00\ud558\ub824\uba74 +\uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud574 \uc8fc\uc138\uc694.",
          "desktop.chatfolderguide.desc.title":
            "\ub300\ud654 \ud3f4\ub354\ub85c \uae54\ub054\ud558\uac8c!\n\ub300\ud654 \ubaa9\ub85d\uc744 \uc815\ub9ac\ud574 \ubcf4\uc138\uc694.",
          "desktop.chatfoldermenu.button.addchat": "\ub300\ud654 \ucd94\uac00",
          "desktop.chatfoldermenu.button.changefoldername":
            "\ud3f4\ub354 \uc774\ub984 \ubcc0\uacbd",
          "desktop.chatfoldermenu.button.deletefolder":
            "\ud3f4\ub354 \uc0ad\uc81c",
          "desktop.chatfoldermenu.button.mutefolder":
            "\ud3f4\ub354 \uc54c\ub9bc \ub044\uae30",
          "desktop.chatfoldermenu.button.readall": "\uc804\uccb4 \uc77d\uc74c",
          "desktop.chatfoldermenu.button.removechat":
            "\uae30\uc874 \ud3f4\ub354\ub85c \ub300\ud654 \uc774\ub3d9",
          "desktop.chatfoldermenu.button.unmutefolder":
            "\ud3f4\ub354 \uc54c\ub9bc \ucf1c\uae30",
          "desktop.chatfoldermenu.toast.unabletoadd":
            "\ubaa8\ub4e0 \ub300\ud654\ub97c \ucd94\uac00\ud560 \uc218\ub294 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "desktop.chatfoldermenu.toast.uptoten":
            "\ub300\ud654 \ud3f4\ub354\ub294 \ucd5c\ub300 10\uac1c\uae4c\uc9c0 \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "desktop.chatfolderpopup.button.ok": "\ud655\uc778",
          "desktop.chatfolderpopup.desc.chatfolder":
            "\ud3f4\ub354\ub85c \ub300\ud654\ub97c \uc815\ub9ac\ud558\uba74 \uc6d0\ud558\ub294 \ub300\ud654\ub97c \ube60\ub974\uac8c \ucc3e\uc744 \uc218 \uc788\uc5b4\uc694. +\uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec \ud3f4\ub354\ub97c \ucd94\uac00\ud574 \ubcf4\uc138\uc694.",
          "desktop.chatfolderpopup.desc.folderlineup":
            "\ud3f4\ub354\ub97c \ub9c8\uc6b0\uc2a4\ub85c \ub04c\uc5b4\ub2e4 \ub193\uc544 \uc6d0\ud558\ub294 \uc704\uce58\ub85c \uc21c\uc11c\ub97c \uc870\uc815\ud574 \ubcf4\uc138\uc694.",
          "desktop.chatfolderpopup.desc.managefolder":
            "\ud3f4\ub354 \uc704\uc5d0\uc11c \ub9c8\uc6b0\uc2a4 \uc624\ub978\ucabd \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \ub300\ud654 \ud3f4\ub354 \uad00\ub9ac \uba54\ub274\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc5b4\uc694.",
          "desktop.chatfolderpopup.desc.unabletosync":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \ub3d9\uae30\ud654\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \ub3d9\uae30\ud654 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "desktop.chatfolderpopup.title.chatfolder":
            "\ub300\ud654 \ud3f4\ub354\ub85c \ub300\ud654 \ubaa9\ub85d\uc744 \uc815\ub9ac\ud574 \ubcf4\uc138\uc694.",
          "desktop.chatfolderpopup.title.folderlineup":
            "\ub300\ud654 \ud3f4\ub354 \uc21c\uc11c\ub3c4 \ubcc0\uacbd\ud560 \uc218 \uc788\uc5b4\uc694.",
          "desktop.chatfolderpopup.title.managefolder":
            "\ub300\ud654 \ud3f4\ub354\ub97c \uc190\uc27d\uac8c \uad00\ub9ac\ud574 \ubcf4\uc138\uc694.",
          "desktop.chatfoldersetting.button.cancel": "\ucde8\uc18c",
          "desktop.chatfoldersetting.button.disable": "\ub044\uae30",
          "desktop.chatfoldersetting.desc.disable":
            "\ub300\ud654 \ud3f4\ub354 \uae30\ub2a5\uc744 \ub354 \uc774\uc0c1 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc73c\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \uae30\ub2a5\uc744 \ub044\uba74 \ub300\ud654 \ud3f4\ub354 \uc124\uc815\uc740 \ubaa8\ub450 \uc0ad\uc81c\ub429\ub2c8\ub2e4.",
          "desktop.chatfoldertooltip.desc.createchatfolder":
            "\ud3f4\ub354\ub97c \ucd94\uac00\ud558\uc5ec \uac04\ud3b8\ud558\uac8c \ub300\ud654 \ubaa9\ub85d\uc744 \uc815\ub9ac\ud574 \ubcf4\uc138\uc694.",
          "desktop.chatlist.button.hide": "\uc811\uae30",
          "desktop.chatmenu.button.addtoalbum":
            "\uc568\ubc94\uc5d0 \ucd94\uac00",
          "desktop.chatssettings.desc.chateffects":
            "\ub300\ud654\ubc29 \ubc30\uacbd\uc5d0 \uc560\ub2c8\uba54\uc774\uc158\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4.",
          "desktop.chatssettings.subtitle.chateffects":
            "\ubc30\uacbd \uc560\ub2c8\uba54\uc774\uc158 \ud45c\uc2dc",
          "desktop.codecerror.desc.unabletoplay":
            "\ub3d9\uc601\uc0c1 \ucf54\ub371 \uc624\ub958\ub85c \uc7ac\uc0dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "desktop.common.go.to.settings":
            "\uc124\uc815\uc73c\ub85c \uc774\ub3d9",
          "desktop.common.index.chats": "\ub300\ud654",
          "desktop.common.index.favorites": "\uc990\uaca8\ucc3e\uae30",
          "desktop.common.index.friends": "\uce5c\uad6c",
          "desktop.common.index.groups": "\uadf8\ub8f9",
          "desktop.common.index.recentlyshared": "\ucd5c\uadfc \uacf5\uc720",
          "desktop.common.report": "\uc2e0\uace0",
          "desktop.defaultprofile.button.cancel": "\ucde8\uc18c",
          "desktop.defaultprofile.button.save": "\uc800\uc7a5",
          "desktop.defaultprofile.title.selectdefault":
            "\uae30\ubcf8 \uc774\ubbf8\uc9c0 \uc120\ud0dd",
          "desktop.deletefolderpopup.button.cancel": "\ucde8\uc18c",
          "desktop.deletefolderpopup.button.delete": "\uc0ad\uc81c",
          "desktop.deletefolderpopup.desc.deletefolder":
            "'%1' \ud3f4\ub354\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \ud3f4\ub354\uc5d0 \ud3ec\ud568\ub41c \ub300\ud654\ub294 \uc790\ub3d9\uc73c\ub85c \ubd84\ub958\ub418\uc5b4 \uae30\uc874 \ud3f4\ub354\ub85c \uc774\ub3d9\ub429\ub2c8\ub2e4.",
          "desktop.download.popup.call":
            "\ud1b5\ud654 \ud50c\ub7ec\uadf8\uc778 \ub2e4\uc6b4\ub85c\ub4dc \uc911\u2026",
          "desktop.download.popup.calldone":
            "\ud1b5\ud654 \ud50c\ub7ec\uadf8\uc778 \ub2e4\uc6b4\ub85c\ub4dc\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ud1b5\ud654\ub97c \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \ubcf4\uc138\uc694.",
          "desktop.download.popup.plugin":
            "GIF \ucea1\ucc98 \ud50c\ub7ec\uadf8\uc778 \ub2e4\uc6b4\ub85c\ub4dc \uc911...",
          "desktop.download.popup.plugindone":
            "GIF \ucea1\ucc98 \ud50c\ub7ec\uadf8\uc778 \ub2e4\uc6b4\ub85c\ub4dc\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. GIF \ucea1\ucc98\ub97c \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \ubcf4\uc138\uc694.",
          "desktop.download.popup.pluginnetworkerror":
            "\ud50c\ub7ec\uadf8\uc778\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub124\ud2b8\uc6cc\ud06c \uc5f0\uacb0 \uc0c1\ud0dc\ub97c \ud655\uc778\ud55c \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "desktop.download.popup.pluginnospace":
            "\uae30\uae30 \uc800\uc7a5 \uacf5\uac04\uc774 \ubd80\uc871\ud569\ub2c8\ub2e4. \uacf5\uac04\uc744 \ud655\ubcf4\ud55c \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "desktop.download.popup.pluginunexpectederror":
            "\ud50c\ub7ec\uadf8\uc778 \ub2e4\uc6b4\ub85c\ub4dc\uac00 \uc2e4\ud328\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",
          "desktop.download.popup.viewer":
            "\ucf58\ud150\uce20 \ubdf0\uc5b4 \ud50c\ub7ec\uadf8\uc778 \ub2e4\uc6b4\ub85c\ub4dc \uc911...",
          "desktop.download.popup.viewerdone":
            "\ucf58\ud150\uce20 \ubdf0\uc5b4 \ud50c\ub7ec\uadf8\uc778 \ub2e4\uc6b4\ub85c\ub4dc\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc6d0\ud558\ub294 \ucf58\ud150\uce20\ub97c \ud074\ub9ad\ud558\uc5ec \ubdf0\uc5b4\uc5d0\uc11c \ud655\uc778\ud574 \ubcf4\uc138\uc694.",
          "desktop.dragndrop.button.addfiles": "\ud30c\uc77c \ucd94\uac00",
          "desktop.dragndrop.button.cancelcompress": "\ucde8\uc18c",
          "desktop.dragndrop.button.send": "\ubcf4\ub0b4\uae30(%1)",
          "desktop.dragndrop.button.sendcompressed": "\ubcf4\ub0b4\uae30",
          "desktop.dragndrop.checkbox.alwayscompress":
            "\ud56d\uc0c1 \uc555\ucd95\ud558\uc5ec \ubcf4\ub0b4\uae30",
          "desktop.dragndrop.title.sendfile": "\ud30c\uc77c \uc804\uc1a1",
          "desktop.dragndrop.toast.upto50":
            "\ud30c\uc77c\uc740 \ucd5c\ub300 50\uac1c\uae4c\uc9c0 \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "desktop.error.popup.noverification":
            "\ubaa8\ubc14\uc77c LINE \uc778\uc99d\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "desktop.errorpopup.desc.downloadback":
            "\ub2e4\uc6b4\ub85c\ub4dc \uc644\ub8cc\uae4c\uc9c0 \ub2e4\uc18c \uc2dc\uac04\uc774 \uac78\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774 \ucc3d\uc744 \ub2eb\uace0 \ubc31\uadf8\ub77c\uc6b4\ub4dc\uc5d0\uc11c \uacc4\uc18d \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "desktop.errorpopup.desc.downloadno": "\uacc4\uc18d \ud45c\uc2dc",
          "desktop.errorpopup.desc.downloadyes":
            "\ub2eb\uae30 \ubc0f \ub2e4\uc6b4\ub85c\ub4dc",
          "desktop.errorpopup.desc.expired":
            "\uc800\uc7a5\uae30\uac04\uc774 \ub9cc\ub8cc\ub418\uc5b4 \ud30c\uc77c\uc744 \ub2e4\uc2dc \ubcf4\ub0bc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "desktop.errorpopup.desc.remobile":
            "\uc11c\ubc84 \uc624\ub958\ub85c \uc0c1\ub300\ubc29\uc5d0\uac8c \uba54\uc2dc\uc9c0\uac00 \uc804\uc1a1\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. LINE \ubaa8\ubc14\uc77c \ubc84\uc804\uc5d0\uc11c \ub2e4\uc2dc \ubcf4\ub0b4\uc8fc\uc138\uc694.",
          "desktop.errorpopup.desc.remobiles":
            "\uc11c\ubc84 \uc624\ub958\ub85c \uc77c\ubd80 \uba64\ubc84\uc5d0\uac8c \uba54\uc2dc\uc9c0\uac00 \uc804\uc1a1\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. LINE \ubaa8\ubc14\uc77c \ubc84\uc804\uc5d0\uc11c \ub2e4\uc2dc \ubcf4\ub0b4\uc8fc\uc138\uc694.",
          "desktop.errorpopup.desc.renewmembership":
            "LYP premium \uad6c\ub3c5 \uc815\ubcf4\uac00 \ubcc0\uacbd\ub418\uc5b4 \ucf58\ud150\uce20\ub97c \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uad6c\ub3c5 \uc0c1\ud0dc\ub97c \ud655\uc778\ud558\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "desktop.errorpopup.desc.revisedtermsofuse":
            "\uc5c5\ub370\uc774\ud2b8\ub41c '\uc815\ubcf4 \uc774\uc6a9\uc5d0 \uad00\ud55c \ub3d9\uc758'\uc5d0 \ub3d9\uc758\ud558\uc9c0 \uc54a\uc544 \ucf58\ud150\uce20\ub97c \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ud734\ub300\ud3f0 LINE\uc758 \uc568\ubc94 \ud654\uba74\uc5d0\uc11c \uc6d0\ubcf8 \ud654\uc9c8 \uc0ac\uc9c4\uc774\ub098 \ub3d9\uc601\uc0c1\uc744 \uc62c\ub9b4 \ub54c \ud45c\uc2dc\ub418\ub294 \ud574\ub2f9 \ub0b4\uc6a9\uc744 \ud655\uc778\ud558\uace0 \ub3d9\uc758\ud574 \uc8fc\uc138\uc694.",
          "desktop.errorpopup.title.resend": "\ub2e4\uc2dc \ubcf4\ub0b4\uae30",
          "desktop.favoritethreads.desc.nothreads":
            "\uad00\uc2ec \uc788\ub294 \uc2a4\ub808\ub4dc\uac00 \uc0dd\uae30\uba74, \ud574\ub2f9 \uc2a4\ub808\ub4dc \ud654\uba74 \uc624\ub978\ucabd \uc0c1\ub2e8\uc758 \uc990\uaca8\ucc3e\uae30 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud574\uc11c \ucd94\uac00\ud574 \ubcf4\uc138\uc694.",
          "desktop.fileshare.button.cancel": "\ucde8\uc18c",
          "desktop.fileshare.button.open": "\uacf5\uc720",
          "desktop.fileshare.desc.unsafefile":
            "\ub2e4\ub978 \uc0ac\uc6a9\uc790\uac00 \ud30c\uc77c \uacf5\uc720\ub97c \uc694\uccad\ud588\uc2b5\ub2c8\ub2e4. \uc544\ub798 \ud30c\uc77c\uc744 \uacf5\uc720\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\n%1",
          "desktop.foldermenu.button.moveto":
            "\ub2e4\ub978 \ud3f4\ub354\ub85c \uc774\ub3d9",
          "desktop.friends.choose.empty":
            "\uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uce5c\uad6c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "desktop.friendssearch.title.friendssearch":
            "\uce5c\uad6c \uac80\uc0c9",
          "desktop.gprofilesetting.button.capturescreen":
            "\ud654\uba74 \ucea1\ucc98",
          "desktop.gprofilesetting.button.createtext":
            "\ud14d\uc2a4\ud2b8 \ud504\ub85c\ud544 \ub9cc\ub4e4\uae30",
          "desktop.gprofilesetting.button.deleteprofile":
            "\ud504\ub85c\ud544 \uc0ac\uc9c4 \uc0ad\uc81c",
          "desktop.gprofilesetting.button.selectdefault":
            "\uae30\ubcf8 \uc774\ubbf8\uc9c0 \uc120\ud0dd",
          "desktop.gprofilesetting.button.selectphoto":
            "\uc0ac\uc9c4 \uc120\ud0dd",
          "desktop.group.choose.empty":
            "\uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uadf8\ub8f9\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "desktop.hevcerror.desc.unabletoplay":
            "\uc7ac\uc0dd\ud560 \uc218 \uc5c6\ub294 \ud30c\uc77c \ud615\uc2dd\uc785\ub2c8\ub2e4. \ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "desktop.installer.button.install": "\uc124\uce58",
          "desktop.installer.checkbox.iagree":
            "[LY Corporation \uacf5\ud1b5\uc774\uc6a9\uc57d\uad00|https://terms.line.me/line_terms?lang=ko]\uc5d0 \ub3d9\uc758\ud569\ub2c8\ub2e4.",
          "desktop.installer.desc.installingline":
            "LINE\uc744 \uc124\uce58\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824 \uc8fc\uc138\uc694.",
          "desktop.installer.desc.readandagree":
            "LINE\uc744 \uc124\uce58\ud558\ub824\uba74 \uc774\uc6a9\uc57d\uad00\uc744 \ud655\uc778\ud558\uace0 \ub3d9\uc758\ud574 \uc8fc\uc138\uc694.",
          "desktop.installercancel.button.no": "\uc544\ub2c8\uc694",
          "desktop.installercancel.button.yes": "\ub124",
          "desktop.installercancel.desc.stopinstalling":
            "LINE \uc124\uce58\ub97c \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "desktop.installerror.button.download": "\ub2e4\uc6b4\ub85c\ub4dc",
          "desktop.installerror.desc.badfile":
            "LINE\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc124\uce58\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \uc124\uce58 \ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc5ec \ub2e4\uc2dc \uc124\uce58\ud574 \uc8fc\uc138\uc694.",
          "desktop.leavescreenpopup.button.cancel": "\ucde8\uc18c",
          "desktop.leavescreenpopup.button.leave": "\ub098\uac00\uae30",
          "desktop.line.albums.desc.photosnotyet":
            "\uc0ac\uc9c4 \ubaa8\uc544\ubcf4\uae30 \uae30\ub2a5\uc740 \ud604\uc7ac \uc900\ube44 \uc911\uc785\ub2c8\ub2e4.",
          "desktop.line.chatmenu.title.albumsempty":
            "\uc544\uc9c1 \ub4f1\ub85d\ub41c \uc568\ubc94\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "desktop.login.button.gotoemailwithPhoneNumber":
            "\uc774\uba54\uc77c\ub85c \ub85c\uadf8\uc778",
          "desktop.login.button.gotosmartphone":
            "\ud734\ub300\ud3f0\uc73c\ub85c \ub85c\uadf8\uc778",
          "desktop.login.button.loginwithsmartphone":
            "\ud734\ub300\ud3f0\uc73c\ub85c \ub85c\uadf8\uc778",
          "desktop.login.desc.transferring":
            "LINE \uacc4\uc815 \uc774\uc804 \ubc29\ubc95 \uc54c\uc544\ubcf4\uae30",
          "desktop.login.desc.verification":
            "\ubaa8\ubc14\uc77c\uc5d0\uc11c LINE\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uacbd\uc6b0 LINE \uacc4\uc815\uc744 \uc774\uc804\ud574 \uc8fc\uc138\uc694.",
          "desktop.login.popup.scanqr":
            "\ud734\ub300\ud3f0 \ud654\uba74\uc5d0\uc11c \ube44\ubc00\ubc88\ud638 \uba54\ub274\ub97c \uc120\ud0dd\ud558\uba74 \uc0c8 \ube44\ubc00\ubc88\ud638\ub85c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "desktop.login.popup.seeonmobile":
            "LINE \ubaa8\ubc14\uc77c \ubc84\uc804\uc5d0\uc11c QR \ucf54\ub4dc\ub97c \uc2a4\uce94\ud574 \uc8fc\uc138\uc694.",
          "desktop.login.popupbutton.gotit":
            "\uc778\uc99d\ubc88\ud638 \ud655\uc778",
          "desktop.login.popupdesc.cancelverification":
            "\ubcf8\uc778 \uc778\uc99d \ucde8\uc18c",
          "desktop.login.popupdesc.loggingin":
            "\ud734\ub300\ud3f0 LINE \uc571\uc5d0\uc11c \ubcf8\uc778 \uc778\uc99d\uc744 \ud574\uc8fc\uc138\uc694.",
          "desktop.login.popupdesc.pairingverificationcode":
            "\ud734\ub300\ud3f0\uc5d0\uc11c LINE \uc571\uc744 \uc5f4\uace0 \uc124\uc815> \uacc4\uc815> \ub2e4\ub978 \uae30\uae30\uc640 \uc5f0\ub3d9\uc73c\ub85c \uc774\ub3d9\ud55c \ub2e4\uc74c 6\uc790\ub9ac \uc778\uc99d\ubc88\ud638\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "desktop.login.popupdesc.pairingverificationcodeguide":
            "\ud734\ub300\ud3f0\uacfc \ucc98\uc74c \uc5f0\uacb0\ud558\uae30\n\n1. \ud734\ub300\ud3f0\uc5d0\uc11c LINE \uc571\uc744 \uc5f4\uc5b4\uc8fc\uc138\uc694.\n2. \uc124\uc815 > \uacc4\uc815 > \ub2e4\ub978 \uae30\uae30\uc640 \uc5f0\ub3d9\uc73c\ub85c \uc774\ub3d9\ud574 \uc8fc\uc138\uc694.\n3. 6\uc790\ub9ac \uc778\uc99d\ubc88\ud638\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.\n\n6\uc790\ub9ac \uc778\uc99d\ubc88\ud638\ub294 \uc544\ub798 '\uc778\uc99d\ubc88\ud638 \ud655\uc778' \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "desktop.login.popupdesc.pairsecondarydevice":
            "\ub2e4\ub978 \uae30\uae30\uc640 \uc5f0\ub3d9",
          "desktop.login.popuptitle.loggingin": "\ub85c\uadf8\uc778 \uc911...",
          "desktop.login.popuptitle.pairingverificationcode":
            "\ud734\ub300\ud3f0 \uc5f0\ub3d9",
          "desktop.main.popup.newversion":
            "\ucd5c\uc2e0 \ubc84\uc804 LINE \uc571\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc9c0\uae08 \uc5c5\ub370\uc774\ud2b8\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? ",
          "desktop.movetomenu.button.all": "\uc804\uccb4",
          "desktop.movetomenu.button.customfolder": "%1",
          "desktop.movetomenu.button.friends": "\uce5c\uad6c",
          "desktop.movetomenu.button.groups": "\uadf8\ub8f9",
          "desktop.movetomenu.button.oas": "\uacf5\uc2dd \uacc4\uc815",
          "desktop.movetomenu.button.openchats": "\uc624\ud508\ucc57",
          "desktop.mypsticker.button.stickershop": "\uc2a4\ud2f0\ucee4 \uc0f5",
          "desktop.mypsticker.button.upgrade":
            "\ub514\ub7ed\uc2a4\ub85c \uc5c5\uadf8\ub808\uc774\ub4dc",
          "desktop.mypsticker.desc.getmore":
            "\ub354 \ub9ce\uc740 \ud504\ub9ac\ubbf8\uc5c4 \uc2a4\ud2f0\ucee4\ub97c \ucc3e\uc544\ubcf4\uc138\uc694!",
          "desktop.mypsticker.desc.maximum":
            "\ud504\ub9ac\ubbf8\uc5c4 \uc2a4\ud2f0\ucee4\ub294 \ud55c \ubc88\uc5d0 \ucd5c\ub300 %1\uac1c\xa0\uc138\ud2b8\ub97c\xa0\ubcf4\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "desktop.mypsticker.desc.nosticker":
            "\ubcf4\uc720\ud55c \ud504\ub9ac\ubbf8\uc5c4 \uc2a4\ud2f0\ucee4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "desktop.mypsticker.desc.upgradetodeluxe":
            "\ubaa8\ubc14\uc77c LINE\uc5d0\uc11c \ub514\ub7ed\uc2a4 \uc774\uc6a9\uad8c\uc744 \uad6c\ub9e4\ud558\uba74, \ucd5c\ub300 1,000\uac1c\uc758 \uc2a4\ud2f0\ucee4 \ub610\ub294 \uc774\ubaa8\ud2f0\ucf58\xa0\uc138\ud2b8\ub97c\xa0\ubcf4\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "desktop.mysticker.button.cancel": "\ucde8\uc18c",
          "desktop.mysticker.button.cancelshow": "\ucde8\uc18c",
          "desktop.mysticker.button.showall": "\uc804\uccb4 \ud45c\uc2dc",
          "desktop.mysticker.button.stop": "\uc911\uc9c0",
          "desktop.mysticker.button.stopshow": "\uc911\uc9c0",
          "desktop.mysticker.desc.downloadstopemoji":
            "\uc774\ubaa8\ud2f0\ucf58 \ub2e4\uc6b4\ub85c\ub4dc\ub97c \uc911\uc9c0\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "desktop.mysticker.desc.downloadstopsticker":
            "\uc2a4\ud2f0\ucee4 \ub2e4\uc6b4\ub85c\ub4dc\ub97c \uc911\uc9c0\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "desktop.mysticker.desc.stopshowemoji":
            "\uc774\ubaa8\ud2f0\ucf58 \ub2e4\uc6b4\ub85c\ub4dc\ub97c \uc911\uc9c0\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "desktop.mysticker.desc.stopshowsticker":
            "\uc2a4\ud2f0\ucee4 \ub2e4\uc6b4\ub85c\ub4dc\ub97c \uc911\uc9c0\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "desktop.mystickers.desc.noexpire":
            "\uc720\ud6a8\uae30\uac04 \uc5c6\uc74c",
          "desktop.mystickers.desc.nolongerp":
            "\ud504\ub9ac\ubbf8\uc5c4 \uc2a4\ud2f0\ucee4\uc5d0\uc11c \uc81c\uc678\ub428",
          "desktop.mystickers.desc.passedtime":
            "\uc720\ud6a8\uae30\uac04 \uc9c0\ub0a8",
          "desktop.mystickers.desc.until":
            "%1\uae4c\uc9c0 \uc774\uc6a9 \uac00\ub2a5",
          "desktop.mystickers.tooltip.hide": "\uc228\uae30\uae30",
          "desktop.mystickers.tooltip.show": "\ud45c\uc2dc",
          "desktop.noin87notice.button.download": "\ub2e4\uc6b4\ub85c\ub4dc",
          "desktop.noin87notice.desc.supportend":
            "Windows 7, 8 \ubc84\uc804\uc5d0 \ub300\ud55c LINE \ucd5c\uc2e0 \ubc84\uc804 \uc5c5\ub370\uc774\ud2b8 \uc9c0\uc6d0\uc774 \uc885\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc544\ub798 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \uc0ac\uc6a9 \uac00\ub2a5\ud55c LINE \ubc84\uc804\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud574 \uc8fc\uc138\uc694.",
          "desktop.oa.chat.oaunsendconfirm.desc":
            "\uacf5\uc2dd \uacc4\uc815 \uc6b4\uc601\uc790\uc758 \uc774\uc6a9 \ud658\uacbd\uc5d0 \ub530\ub77c \uce5c\uad6c\uc758 \ub300\ud654\ubc29\uc5d0\uc11c \uba54\uc2dc\uc9c0\uac00 \uc0ad\uc81c\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubcf4\ub0b8 \uba54\uc2dc\uc9c0\ub97c \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "desktop.ocr.popup.toobig":
            "\ucd5c\ub300 \uc774\ubbf8\uc9c0 \ud06c\uae30 5MB\ub97c \ucd08\uacfc\ud558\uc5ec \ud14d\uc2a4\ud2b8\ub97c \uc778\uc2dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774\ubbf8\uc9c0 \ud06c\uae30\ub97c \uc904\uc774\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "desktop.openchatsetting.popup.onmobile":
            "\uad8c\ud55c \uc124\uc815\uc740 \ud734\ub300\ud3f0 LINE \uc571\uc5d0\uc11c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "desktop.premiumhistory.desc.history":
            "\uc9c0\ub09c 1\ub144 \ub3d9\uc548 \uc0ac\uc6a9\ud55c \uc801\uc774 \uc788\ub294 \ud504\ub9ac\ubbf8\uc5c4 \uc2a4\ud2f0\ucee4\uc785\ub2c8\ub2e4. \ud604\uc7ac \uc0ac\uc6a9 \uc911\uc778 \uc2a4\ud2f0\ucee4\ub294 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "desktop.premiumpopup.button.canceleold": "\ucde8\uc18c",
          "desktop.premiumpopup.button.deleteold": "\uc0ad\uc81c",
          "desktop.premiumpopup.button.edit": "\uc2a4\ud2f0\ucee4 \ud3b8\uc9d1",
          "desktop.premiumpopup.desc.downloadlimit":
            "\uc774\ubbf8 \ud504\ub9ac\ubbf8\uc5c4 \uc2a4\ud2f0\ucee4 \uc138\ud2b8 %1\uac1c\ub97c \ubcf4\uc720 \uc911\uc785\ub2c8\ub2e4. \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uae30\uc874 \uc2a4\ud2f0\ucee4 \uc138\ud2b8\ub97c \uc0ad\uc81c\ud558\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "desktop.premiumpopup.desc.notavailablee":
            "\uc774\ubaa8\ud2f0\ucf58\uc774 \ud504\ub9ac\ubbf8\uc5c4 \uc11c\ube44\uc2a4\uc5d0\uc11c \uc81c\uc678\ub418\uc5b4 \ub354 \uc774\uc0c1 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ubaa9\ub85d\uc5d0\uc11c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "desktop.premiumpopup.desc.notavailables":
            "\uc2a4\ud2f0\ucee4\uac00 \ud504\ub9ac\ubbf8\uc5c4 \uc11c\ube44\uc2a4\uc5d0\uc11c \uc81c\uc678\ub418\uc5b4 \ub354 \uc774\uc0c1 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ubaa9\ub85d\uc5d0\uc11c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "desktop.premiumpopup.title.downloadlimit":
            "\ub2e4\uc6b4\ub85c\ub4dc \ud55c\ub3c4 \ucd08\uacfc",
          "desktop.profile.desc.video15secs":
            "\ud504\ub85c\ud544 \ubc30\uacbd\uc5d0\ub294 15\ucd08 \ubbf8\ub9cc\uc778 \ub3d9\uc601\uc0c1\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "desktop.profile.desc.video6secs":
            "\ud504\ub85c\ud544\uc5d0\ub294 6\ucd08 \ubbf8\ub9cc\uc778 \ub3d9\uc601\uc0c1\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "desktop.profileselectphoto.button.cancel": "\ucde8\uc18c",
          "desktop.profileselectphoto.button.save": "\uc800\uc7a5",
          "desktop.profilesetting.button.capturescreen":
            "\ud654\uba74 \ucea1\ucc98",
          "desktop.profilesetting.button.createtext":
            "\ud14d\uc2a4\ud2b8 \ud504\ub85c\ud544 \ub9cc\ub4e4\uae30",
          "desktop.profilesetting.button.deleteprofile":
            "\ud504\ub85c\ud544 \uc0ac\uc9c4 \uc0ad\uc81c",
          "desktop.profilesetting.button.selectdefault":
            "\uae30\ubcf8 \uc774\ubbf8\uc9c0 \uc120\ud0dd",
          "desktop.profilesetting.button.selectphoto":
            "\uc0ac\uc9c4 \uc120\ud0dd",
          "desktop.profilesetting.popup.500savechat":
            "\ucd5c\uadfc \uba54\uc2dc\uc9c0 500\uac1c\ub97c \ud14d\uc2a4\ud2b8 \ud30c\uc77c\ub85c \uc800\uc7a5\ud569\ub2c8\ub2e4.",
          "desktop.quickreply.popup.notonpc":
            "PC \ubc84\uc804\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4.",
          "desktop.reaction.button.ok": "\ud655\uc778",
          "desktop.reaction.button.seemore":
            "\uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30",
          "desktop.reaction.desc.error":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \ub9ac\uc561\uc158\uc774 \ucd94\uac00\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "desktop.reaction.desc.plurals.other": "\ub9ac\uc561\uc158 %1",
          "desktop.reaction.desc.reaction1":
            "\uba54\uc2dc\uc9c0\uc5d0 \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub9ac\uba74 \ub9ac\uc561\uc158 \uc544\uc774\ucf58\uc774 \ub098\ud0c0\ub0a9\ub2c8\ub2e4.\n\uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec \uc6d0\ud558\ub294 \ub9ac\uc561\uc158\uc744 \ub0a8\uaca8\ubcf4\uc138\uc694.",
          "desktop.reaction.desc.reaction2":
            "\uba54\uc2dc\uc9c0 \uc544\ub798\uc5d0 \ud45c\uc2dc\ub41c \ub9ac\uc561\uc158\uc744 \ud074\ub9ad\ud558\uba74\n\uce5c\uad6c\ub4e4\uc774 \uc5b4\ub5a4 \ub9ac\uc561\uc158\uc744 \ub0a8\uacbc\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc5b4\uc694.",
          "desktop.reaction.desc.unsent":
            "\uc774 \uba54\uc2dc\uc9c0\uc5d0 \ub9ac\uc561\uc158\uc744 \ub0a8\uae38 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "desktop.reaction.title.reaction":
            "\uba54\uc2dc\uc9c0 \ub9ac\uc561\uc158 \uae30\ub2a5\uc73c\ub85c\n\ub354\uc6b1 \uc990\uac81\uac8c \ub300\ud654\ud574 \ubcf4\uc138\uc694!",
          "desktop.reaction.toast.expired":
            "\ub9ac\uc561\uc158\uc744 \ub0a8\uae38 \uc218 \uc788\ub294 \uae30\uac04\uc774 \uc9c0\ub0ac\uc2b5\ub2c8\ub2e4.",
          "desktop.reaction.toast.unsent":
            "\uc0ac\uc9c4\uc774 \ubcf4\ub0b4\uae30 \ucde8\uc18c\ub418\uc5b4 \ub9ac\uc561\uc158\uc744 \ub0a8\uae38 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "desktop.reaction.tooltip.smile":
            "\uc0ac\uc9c4\uc5d0 \ub9ac\uc561\uc158\uc744 \ub0a8\uaca8\ubcf4\uc138\uc694!",
          "desktop.removechatpopup.button.cancel": "\ucde8\uc18c",
          "desktop.removechatpopup.button.remove": "\uc774\ub3d9",
          "desktop.removechatpopup.desc.allchats.other": "\ub300\ud654 %1",
          "desktop.removechatpopup.desc.selected":
            "\uc120\ud0dd \ud56d\ubaa9 %1",
          "desktop.removechatpopup.placeholder.search": "\uac80\uc0c9",
          "desktop.removechatpopup.title.removechats":
            "\uae30\uc874 \ud3f4\ub354\ub85c \ub300\ud654 \uc774\ub3d9",
          "desktop.restorepopup.button.ignore": "\ubb34\uc2dc",
          "desktop.restorepopup.button.restore": "\ubcf5\uc6d0",
          "desktop.restorepopup.desc.restoreline":
            "\ub0b4 PC\uc5d0 \ub2e4\ub978 \uacbd\ub85c\ub85c \uc124\uce58\ub41c LINE \uc571\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9 \uc911\uc778 LINE \uc571\uc73c\ub85c \ub2e4\ub978 LINE \uc571\uc758 \ub300\ud654 \ub0b4\uc6a9\uc744 \uac00\uc838\uc640 \ubcf5\uc6d0\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "desktop.setting.desc.enablechatfolders":
            "\ub300\ud654 \ud3f4\ub354 \uc0ac\uc6a9",
          "desktop.setting.desc.windows": "Windows \uc54c\ub9bc",
          "desktop.setting.title.chatfolder": "\ub300\ud654 \ud3f4\ub354",
          "desktop.settings.desc.cantgetnotifocusassist":
            "\uae30\uae30\uc758 \uc9d1\uc911 \uc9c0\uc6d0 \uae30\ub2a5\uc774 \ucf1c\uc838 \uc788\uc5b4\uc11c LINE \uc54c\ub9bc\uc744 \ubc1b\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uae30\uae30 \uc124\uc815\uc5d0\uc11c \uc9d1\uc911 \uc9c0\uc6d0 \uc635\uc158\uc744 \ubcc0\uacbd\ud574 \uc8fc\uc138\uc694.",
          "desktop.settings.desc.cantgetnotiline":
            "\uae30\uae30\uc758 \uc54c\ub9bc \uc124\uc815\uc774 \uaebc\uc838 \uc788\uc5b4\uc11c LINE \uc54c\ub9bc\uc744 \ubc1b\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uae30\uae30 \uc124\uc815\uc5d0\uc11c LINE\uc758 \uc54c\ub9bc\uc744 \ucf1c\uc8fc\uc138\uc694.",
          "desktop.settings.desc.cantgetnotios":
            "\uae30\uae30\uc758 \uc54c\ub9bc \uc124\uc815\uc774 \uaebc\uc838 \uc788\uc5b4\uc11c LINE \uc54c\ub9bc\uc744 \ubc1b\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uae30\uae30 \uc124\uc815\uc5d0\uc11c \uc54c\ub9bc\uc744 \ucf1c\uc8fc\uc138\uc694.",
          "desktop.settings.desc.osnotification":
            "Windows \uc54c\ub9bc\uc744 \uc120\ud0dd\ud558\uba74 LINE \uc54c\ub9bc\uc5d0 OS\uc758 '\uc54c\ub9bc \ubc0f \uc791\uc5c5' \uc124\uc815\uc774 \ub3d9\uc77c\ud558\uac8c \uc801\uc6a9\ub429\ub2c8\ub2e4.",
          "desktop.settings.desc.safeguard":
            "\ub300\ud654\ubc29\uc5d0 \ud30c\uc77c\uc744 \ub04c\uc5b4\ub2e4 \ub193\uc73c\uba74 \ud30c\uc77c \ub0b4\uc6a9\uc744 \ubbf8\ub9ac \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "desktop.settings.notification.description":
            "\uc571\uc744 \uac15\uc81c \uc885\ub8cc\ud558\uba74 \uc54c\ub9bc\uc744 \ub2a6\uac8c \ubc1b\uac70\ub098 \ubc1b\uc9c0 \ubabb\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "desktop.settings.notifications.turnonm":
            "\uae30\uae30\uc758 \uc54c\ub9bc \uc124\uc815\uc774 \uaebc\uc838 \uc788\uc5b4\uc11c LINE \uc54c\ub9bc\uc744 \ubc1b\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uae30\uae30\uc758 \uc2dc\uc2a4\ud15c \ud658\uacbd\uc124\uc815\uc5d0\uc11c LINE\uc5d0 \uc54c\ub9bc\uc744 \ud5c8\uc6a9\ud574 \uc8fc\uc138\uc694.",
          "desktop.settings.notifications.turnonw":
            "\uae30\uae30\uc758 \uc54c\ub9bc \uc124\uc815\uc774 \uaebc\uc838 \uc788\uc5b4\uc11c LINE \uc54c\ub9bc\uc744 \ubc1b\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\uae30\uae30\uc758 \uc124\uc815 > \uc2dc\uc2a4\ud15c > \uc54c\ub9bc \ubc0f \uc791\uc5c5 > \uc571 \uc54c\ub9bc \ubc1b\uae30\uc5d0\uc11c LINE\uc744 \ucf1c\uc8fc\uc138\uc694.",
          "desktop.settings.title.safeguard":
            "\ud30c\uc77c \uc804\uc1a1 \uc804 \ubbf8\ub9ac\ubcf4\uae30",
          "desktop.shortcuts.desc.tilechats":
            "\ub300\ud654\ubc29 \ubaa8\uc73c\uae30",
          "desktop.shortcuts.desc.undotiling":
            "\ub300\ud654\ubc29 \ubaa8\uc73c\uae30 \ucde8\uc18c",
          "desktop.smode.popup.nogif":
            "Windows 10 S \ubaa8\ub4dc\uc5d0\uc11c\ub294 OS \ubcf4\uc548 \uc815\ucc45 \uc0c1 \ud1b5\ud654, \ucf58\ud150\uce20 \ubdf0\uc5b4, GIF \ucea1\ucc98 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "desktop.sticker.button.deletedstickers":
            "\ud504\ub9ac\ubbf8\uc5c4 \ub2e4\uc6b4\ub85c\ub4dc \uae30\ub85d\xa0",
          "desktop.sticker.button.mystickers": "\ub0b4 \uc2a4\ud2f0\ucee4",
          "desktop.sticker.button.premium":
            "\ub0b4 \ud504\ub9ac\ubbf8\uc5c4 \uc2a4\ud2f0\ucee4",
          "desktop.sticker.tooltip.switch":
            "\uc2a4\ud2f0\ucee4 \ud45c\uc2dc \uc21c\uc11c\ub97c \ud3b8\uc9d1\ud574 \ubcf4\uc138\uc694. \ubaa8\ubc14\uc77c \ubc84\uc804\uacfc \ub3d9\uae30\ud654\ub429\ub2c8\ub2e4.",
          "desktop.stickers.desc.recentlyusede":
            "\ucd5c\uadfc\uc5d0 \uc0ac\uc6a9\ud55c \uc774\ubaa8\ud2f0\ucf58",
          "desktop.stickers.desc.recentlyuseds":
            "\ucd5c\uadfc\uc5d0 \uc0ac\uc6a9\ud55c \uc2a4\ud2f0\ucee4",
          "desktop.stickers.tooltip.synced":
            "\uc2a4\ud2f0\ucee4\uc640 \uc774\ubaa8\ud2f0\ucf58\uc758 \uc21c\uc11c\uac00 \ubaa8\ubc14\uc77c \uc571\uacfc \ub3d9\uae30\ud654\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "desktop.stickertab.button.seemore": "\ub354\ubcf4\uae30",
          "desktop.stickertab.desc.latestemoji":
            "%1 \ucd5c\uc2e0 \uc774\ubaa8\ud2f0\ucf58",
          "desktop.stickertab.desc.lateststicker":
            "%1 \ucd5c\uc2e0 \uc2a4\ud2f0\ucee4",
          "desktop.tab.button.ai": "AI",
          "desktop.textprofile.button.cancel": "\ucde8\uc18c",
          "desktop.textprofile.button.save": "\uc800\uc7a5",
          "desktop.textprofile.desc.defaultfont": "\uae30\ubcf8 \uae00\uaf34",
          "desktop.textprofile.placeholder.entertext":
            "\ud14d\uc2a4\ud2b8 \uc785\ub825",
          "desktop.textprofile.title.createtextprofile":
            "\ud14d\uc2a4\ud2b8 \ud504\ub85c\ud544 \ub9cc\ub4e4\uae30",
          "desktop.thread.desc.sendfiletothread":
            "\ub300\ud654\ubc29\uc5d0 \ud30c\uc77c \uc804\uc1a1",
          "desktop.thread.tooltip.taphere":
            "\uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud574\uc11c \uc990\uaca8\ucc3e\uae30 \uc2a4\ub808\ub4dc\uc5d0 \ucd94\uac00\ud558\uac70\ub098 \uc0ad\uc81c\ud560 \uc218 \uc788\uc5b4\uc694.",
          "desktop.updatepopup.button.later": "\ub098\uc911\uc5d0",
          "desktop.updatepopup.button.update": "\uc5c5\ub370\uc774\ud2b8",
          "desktop.updatepopup.desc.update1":
            "LINE %1 \ubc84\uc804\uc774 \uc885\ub8cc\ub418\uc5b4 \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud574\uc57c \ud569\ub2c8\ub2e4. \uc5c5\ub370\uc774\ud2b8 \uc2dc LINE \uc571\uc774 \uc7ac\uc2e4\ud589\ub429\ub2c8\ub2e4.",
          "desktop.updatepopup.desc.update1mac":
            "LINE %1 \ubc84\uc804\uc774 \uc885\ub8cc\ub418\uc5b4 \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud574\uc57c \ud569\ub2c8\ub2e4. \uc9c0\uae08 \ubc14\ub85c App Store\uc5d0\uc11c LINE \uc571\uc744 \uc5c5\ub370\uc774\ud2b8\ud574 \uc8fc\uc138\uc694.",
          "desktop.viewer.desc.gifby": "GIF from %1",
          "desktop.viewer.desc.gifmagazine": "GIFMAGAZINE",
          "desktop.viewer.popup.cantsave":
            "%1\uc5d0\uc11c \ubcf4\ub0b8 GIF\ub294 Keep\uc5d0 \uc800\uc7a5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "desktop.viewer.popup.cantsaves":
            "%1\uc5d0\uc11c \ubcf4\ub0b8 GIF\ub294 Keep\uc5d0 \uc800\uc7a5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub098\uba38\uc9c0 \ud30c\uc77c\ub9cc \uc800\uc7a5\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "desktop.viewer.popup.cantshare":
            "%1\uc5d0\uc11c \ubcf4\ub0b8 GIF\ub294 \ub2e4\ub978 \uc0ac\ub78c\uc5d0\uac8c \uacf5\uc720\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "desktop.viewer.popup.cantshares":
            "%1\uc5d0\uc11c \ubcf4\ub0b8 GIF\ub294 \ub2e4\ub978 \uc0ac\ub78c\uc5d0\uac8c \uacf5\uc720\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub098\uba38\uc9c0 \ud30c\uc77c\ub9cc \uacf5\uc720\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "desktop.wallpaper.popup.delete":
            "\ubc30\uacbd\ud654\uba74\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \uc774 \ubc30\uacbd\ud654\uba74\uc744 \uc0ac\uc6a9 \uc911\uc778 \ubaa8\ub4e0 \ub300\ud654\ubc29\uc5d0 \uae30\ubcf8 \ubc30\uacbd\ud654\uba74\uc774 \uc124\uc815\ub429\ub2c8\ub2e4.",
          "dialog.download.font": "Dotum",
          "dialog.download.message":
            "\uc5c5\ub370\uc774\ud2b8\uac00 \uc9c4\ud589\uc911\uc785\ub2c8\ub2e4.",
          "dialog.download.messagesub":
            "\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694.",
          "displayname.error.badwords":
            "\ud574\ub2f9 \uc774\ub984\uc744 \uc124\uc815\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \n\ub2e4\ub978 \uc774\ub984\uc73c\ub85c \uc791\uc131\ud574\uc8fc\uc138\uc694. ",
          "duplicategroup.popup.button.gotochatmultiple":
            "\uadf8\ub8f9 \ub300\ud654\ubc29\uc73c\ub85c \uc774\ub3d9",
          "duplicategroup.popup.createnewgroup":
            "\uadf8\ub8f9 \ub9cc\ub4e4\uae30",
          "duplicategroup.popup.desc.chatexistsmultiple":
            "\uc774\ubbf8 \ud574\ub2f9 \uba64\ubc84\ub85c \uad6c\uc131\ub41c \uadf8\ub8f9\uc774 \uc788\uc2b5\ub2c8\ub2e4(%1). \ub300\ud654\ubc29\uc73c\ub85c \uc774\ub3d9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "duplicategroup.popup.desc.selfchatexists":
            "\uba64\ubc84\uac00 \ub098 \ud63c\uc790\uc778 \uadf8\ub8f9\uc774 \uc774\ubbf8 \uc788\uc2b5\ub2c8\ub2e4(%1). \ub300\ud654\ubc29\uc73c\ub85c \uc774\ub3d9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "duplicategroup.popup.title.groupexists":
            "\uae30\uc874 \uadf8\ub8f9 \uc0ac\uc6a9 \uac00\ub2a5",
          "e2ee.auth.pincode.timeout":
            "\uc815\uc0c1\uc801\uc73c\ub85c \ucc98\ub9ac\ub418\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. \n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "e2ee.message.title":
            "\uba54\uc2dc\uc9c0\ub97c \ud45c\uc2dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "e2ee.popupbutton.ok": "\ud655\uc778",
          "e2ee.popupdesc.pleaseresend":
            "\uc774 \uba54\uc2dc\uc9c0\ub294 \ubcf4\uc548 \ubb38\uc81c\ub85c \ud45c\uc2dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ubcf4\ub0b8 \uc0ac\ub78c\uc5d0\uac8c \uc7ac\uc804\uc1a1\uc744 \uc694\uccad\ud574 \uc8fc\uc138\uc694.",
          "e2ee.popupdesc.securityerror":
            "\uc774 \ud30c\uc77c\uc740 \ubcf4\uc548 \ubb38\uc81c\ub85c \uc5f4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "e2ee.popuptitle.securityerror": "\ubcf4\uc548 \uc624\ub958",
          "emoji.downloadAll.confirm":
            "\uc774\ubaa8\ud2f0\ucf58\uc744 \ubaa8\ub450 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "friend.msg.block":
            "%1\ub2d8\uc744 \ucc28\ub2e8\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\ucc28\ub2e8\ud558\uba74 \uc774 \uacc4\uc815\uc5d0\uc11c \ubcf4\ub0b8 \uba54\uc2dc\uc9c0\ub294 \ubc1b\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\xa0\ucc28\ub2e8 \ud574\uc81c\ub294 \uc124\uc815 > \uce5c\uad6c > \ucc28\ub2e8 \uacc4\uc815\uc5d0\uc11c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "friend.msg.hide":
            "%1\ub2d8\uc744 \uce5c\uad6c \ubaa9\ub85d\uc5d0\uc11c \uc228\uae30\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\uce5c\uad6c \ubaa9\ub85d\uc5d0 \ub2e4\uc2dc \ud45c\uc2dc\ud558\ub824\uba74 \uc124\uc815 > \uce5c\uad6c > \uc228\uae40 \uacc4\uc815\uc5d0\uc11c \uc228\uae30\uae30 \ud574\uc81c\ub97c \ud574\uc8fc\uc138\uc694.",
          "gallery.picker.original.btn": "\uc6d0\ubcf8",
          "gnb.guide.allNotification.text":
            "\ubc29\ud574\ubc1b\uace0 \uc2f6\uc9c0 \uc54a\uc744 \ub54c \uc804\uccb4 \uc54c\ub9bc \ub044\uae30 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud574 \ubcf4\uc138\uc694.",
          "group.btn.add.title": "\ucd94\uac00",
          "group.btn.cancel.title": "\ucde8\uc18c",
          "group.btn.cancelinvite.title": "\ucde8\uc18c",
          "group.btn.invite.title": "\ucd08\ub300\ud558\uae30",
          "group.btn.removeMember.title": "\uc0ad\uc81c",
          "group.button.invitefrineds": "\uce5c\uad6c \ucd08\ub300",
          "group.label.addprofile.title": "\ud3b8\uc9d1",
          "group.label.create.title": "\uadf8\ub8f9 \ub9cc\ub4e4\uae30",
          "group.label.groupname.title": "\uadf8\ub8f9\uba85",
          "group.label.invitee.title": "\ucd08\ub300 \uc911",
          "group.label.member.title": "\uba64\ubc84",
          "group.label.modify.title": "\uadf8\ub8f9 \uad00\ub9ac",
          "group.label.modifyprofile.title": "\ud3b8\uc9d1",
          "group.label.nobuddy.title": "\uba64\ubc84 \uc5c6\uc74c",
          "group.label.nobuddytoselect.title":
            "\uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uce5c\uad6c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "group.label.nosearchresult.title":
            "\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "group.label.nothing.title":
            "\uc120\ud0dd\ud55c \uce5c\uad6c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "group.label.selectmember.title": "\uba64\ubc84 \ucd08\ub300",
          "group.label.unauthorized":
            "\ud574\ub2f9 \uadf8\ub8f9\uc5d0 \ub300\ud55c \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "group.menu.delete": "\uc0ad\uc81c",
          "group.menu.leave": "\ub098\uac00\uae30",
          "group.msg.cancelInvite.confirm":
            "%1\ub2d8\uc774 \uc544\uc9c1 \uadf8\ub8f9\uc5d0 \ucc38\uc5ec\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.\n\ucd08\ub300\ub97c \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "group.msg.cancelinvite.failed":
            "\ucd08\ub300 \ucde8\uc18c\uac00 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
          "group.msg.empty.name":
            "\uadf8\ub8f9\uba85\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "group.msg.kickoutmember.confirm":
            "%1\ub2d8\uc744 \uadf8\ub8f9\uc5d0\uc11c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "group.msg.kickoutmember.failed":
            "\uba64\ubc84 \uc0ad\uc81c\ub97c \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
          "group.msg.leavegroup.confirm":
            "\uadf8\ub8f9\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\uadf8\ub8f9 \uba64\ubc84 \ubaa9\ub85d\uacfc \ub300\ud654 \ub0b4\uc6a9\uc744 \ub354 \uc774\uc0c1 \ubcfc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "group.msg.makegroup.failed":
            "\uadf8\ub8f9\uc744 \ub9cc\ub4e4\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.",
          "group.msg.overflow.name":
            "20\uc790\uae4c\uc9c0 \uc785\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uae00\uc790\uc218\ub97c \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "group.msg.uploadimge.failed":
            "\uc774\ubbf8\uc9c0 \ud30c\uc77c\uc744 \uc62c\ub9ac\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.",
          "group.profile.delete": "\ud504\ub85c\ud544 \uc0ad\uc81c",
          "group.profile.select.default":
            "\uae30\ubcf8 \ud504\ub85c\ud544\uc5d0\uc11c \uc120\ud0dd",
          "group.profile.select.local":
            "\ub0b4 \ucef4\ud4e8\ud130\uc5d0\uc11c \uc120\ud0dd",
          "group.text.placerholder.title": "\uadf8\ub8f9\uba85",
          "group.title.members": "\uba64\ubc84",
          "groupcall.ageverification.popupdesc.minorscantuse":
            "\ubbf8\uc131\ub144\uc790\ub294 \ud574\ub2f9 \ubbf8\ud305 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "groupcall.alert.popup.error.nowcalling":
            "\uc9c0\uae08 \ud1b5\ud654 \uc911\uc774\uc5b4\uc11c \uc804\ud654\ub97c \uac78 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\ud1b5\ud654\uac00 \ub05d\ub09c \ud6c4 \ub2e4\uc2dc \uac78\uc5b4\uc8fc\uc138\uc694.",
          "groupcall.call.change.to.video":
            "\uc601\uc0c1\ud1b5\ud654\ub85c \uc804\ud658\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "groupcall.call.change.to.video.noCamera":
            "\uce74\uba54\ub77c\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc544 \ub0b4 \uc601\uc0c1\uc740 \ubcf4\uc5ec\uc904 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc601\uc0c1\ud1b5\ud654\ub85c \uc804\ud658\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "groupcall.call.endwatchtogether.button":
            "\ud654\uba74 \uacf5\uc720 \uc885\ub8cc",
          "groupcall.call.invite.complete":
            "\ucd08\ub300 \uba54\uc2dc\uc9c0\ub97c \ubc1c\uc1a1\ud588\uc2b5\ub2c8\ub2e4.",
          "groupcall.call.invite.tooltip":
            "\ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc544\uc9c1 \ucc38\uc5ec\ud558\uc9c0 \uc54a\uc740 \ub300\ud654\ubc29 \uba64\ubc84\ub97c \ucd08\ub300\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "groupcall.call.popupbutton.cancel": "\ub098\uc911\uc5d0",
          "groupcall.call.popupbutton.switch": "\uc9c0\uae08 \uc0ac\uc6a9",
          "groupcall.call.popupdesc.newcam":
            "\uc5f0\uacb0\ub41c %1 \uc7a5\uce58\ub97c \uc9c0\uae08 \uc0ac\uc6a9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "groupcall.call.popupdesc.newmic":
            "\uc5f0\uacb0\ub41c %1 \uc7a5\uce58\ub97c \uc9c0\uae08 \uc0ac\uc6a9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "groupcall.call.popupdesc.newspeaker":
            "\uc5f0\uacb0\ub41c %1 \uc7a5\uce58\ub97c \uc9c0\uae08 \uc0ac\uc6a9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "groupcall.call.popuptitle.newcam":
            "\uc0c8 \uce74\uba54\ub77c \uc5f0\uacb0",
          "groupcall.call.popuptitle.newmic":
            "\uc0c8 \ub9c8\uc774\ud06c \uc5f0\uacb0",
          "groupcall.call.popuptitle.newspeaker":
            "\uc0c8 \uc2a4\ud53c\ucee4 \uc5f0\uacb0",
          "groupcall.call.speaker.many.few": "",
          "groupcall.call.speaker.many.many": "",
          "groupcall.call.speaker.many.one": "",
          "groupcall.call.speaker.many.other": "",
          "groupcall.call.speaker.many.two": "",
          "groupcall.call.speaker.many.zero": "",
          "groupcall.call.toast.loadingyoutube":
            "\ubd88\ub7ec\uc624\ub294 \uc911...",
          "groupcall.call.toast.someoneelsepreparingwatchtogether":
            "%1\ub2d8\uc774 \ud654\uba74 \uacf5\uc720\ub97c \uc900\ube44\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
          "groupcall.call.toast.usersjoinedgroupcall.other":
            "%1\ub2d8 \uc678 %n\uba85\uc774 \uadf8\ub8f9\ud1b5\ud654\uc5d0 \ucc38\uc5ec\ud588\uc2b5\ub2c8\ub2e4.",
          "groupcall.call.toast.usersleftgroupcall.other":
            "%1\ub2d8 \uc678 %n\uba85\uc774 \uadf8\ub8f9\ud1b5\ud654\uc5d0\uc11c \ub098\uac14\uc2b5\ub2c8\ub2e4.",
          "groupcall.call.waiting.msg":
            "\uba64\ubc84 \ucc38\uc5ec \ub300\uae30 \uc911...",
          "groupcall.call.watchtogether.button": "\ud654\uba74 \uacf5\uc720",
          "groupcall.callsettings.button.numberofparticipants":
            "\ucc38\uc5ec\xa0\uba64\ubc84\xa0(%1)",
          "groupcall.callsettings.tooltip.handsfreebt":
            "%1 \uc7a5\uce58\ub294 \uc2a4\ud53c\ucee4\uc640 \ub9c8\uc774\ud06c\ub97c \uac19\uc740 \uae30\uae30\ub85c \uc124\uc815\ud574\uc57c \ud569\ub2c8\ub2e4.",
          "groupcall.callsettingspreview.desc.nocamera":
            "\ubbf8\ud305 \ucc38\uc5ec \uc804\uc5d0 \ub0b4 \uc601\uc0c1\uacfc \uc18c\ub9ac\ub97c \ud655\uc778\ud574 \ubcf4\uc138\uc694.\n\uce74\uba54\ub77c\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc544 \uc601\uc0c1\uc774 \uc804\ub2ec\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "groupcall.callsettingspreview.desc.nomic":
            "\ubbf8\ud305 \ucc38\uc5ec\xa0\uc804\uc5d0 \ub0b4 \uc601\uc0c1\uacfc \uc18c\ub9ac\ub97c \ud655\uc778\ud574 \ubcf4\uc138\uc694.\n\ub9c8\uc774\ud06c\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc544 \uc74c\uc131\uc774 \uc804\ub2ec\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "groupcall.callsettingspreview.desc.nomicorcamera":
            "\ubbf8\ud305 \ucc38\uc5ec\xa0\uc804\uc5d0 \ub0b4 \uc601\uc0c1\uacfc \uc18c\ub9ac\ub97c \ud655\uc778\ud574 \ubcf4\uc138\uc694.\n\uce74\uba54\ub77c\uc640 \ub9c8\uc774\ud06c\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc544 \uc601\uc0c1\uacfc \uc74c\uc131\uc774 \uc804\ub2ec\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "groupcall.chat.alert.popup.error.overflow":
            "\ud604\uc7ac \ud1b5\ud654\ub7c9\uc774 \ub9ce\uc544 \uadf8\ub8f9\ud1b5\ud654\ub97c \uc2dc\uc791\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "groupcall.chat.confirm.popup.cant":
            "\ud574\ub2f9 \uadf8\ub8f9\uc758 \uba64\ubc84\uac00 \uc544\ub2c8\ubbc0\ub85c \uadf8\ub8f9\ud1b5\ud654\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "groupcall.chat.confirm.popup.join.few": "",
          "groupcall.chat.confirm.popup.join.many": "",
          "groupcall.chat.confirm.popup.join.one": "",
          "groupcall.chat.confirm.popup.join.other": "",
          "groupcall.chat.confirm.popup.join.two": "",
          "groupcall.chat.confirm.popup.join.zero": "",
          "groupcall.chat.confirm.popup.start":
            "\uc9c4\ud589 \uc911\uc778 \uadf8\ub8f9\ud1b5\ud654\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \n\ud1b5\ud654\ub97c \uc2dc\uc791\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "groupcall.chat.confirm.popup.start.btn.video":
            "\uc601\uc0c1\ud1b5\ud654 \uc2dc\uc791",
          "groupcall.chat.confirm.popup.start.btn.voice":
            "\uba64\ubc84\ub4e4\uc5d0\uac8c \uc74c\uc131\ud1b5\ud654\ub97c \uac70\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "groupcall.chat.layer.join.btn": "\ucc38\uc5ec",
          "groupcall.chat.layer.numofmembers.few": "",
          "groupcall.chat.layer.numofmembers.many": "",
          "groupcall.chat.layer.numofmembers.one": "",
          "groupcall.chat.layer.numofmembers.other": "",
          "groupcall.chat.layer.numofmembers.two": "",
          "groupcall.chat.layer.numofmembers.zero": "",
          "groupcall.chat.layer.start.btn": "\uc2dc\uc791",
          "groupcall.chat.layer.start.dscr":
            "\uadf8\ub8f9\ud1b5\ud654\ub97c \uc2dc\uc791\ud569\ub2c8\ub2e4.",
          "groupcall.chat.layer.start.msg":
            "%1\ub2d8\uc774 \uadf8\ub8f9\ud1b5\ud654\ub97c \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4.",
          "groupcall.chat.message.end":
            "\uadf8\ub8f9\ud1b5\ud654\uac00 \uc885\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "groupcall.chat.message.invite":
            "\uadf8\ub8f9\ud1b5\ud654\uc5d0 \ucd08\ub300\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n%1",
          "groupcall.chat.message.start":
            "\uadf8\ub8f9\ud1b5\ud654\ub97c \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4.",
          "groupcall.chatlink.desc.userisinvitedtojoinmeeting":
            "LINE \ubbf8\ud305 '%1'\uc5d0 \ucd08\ub300\ud569\ub2c8\ub2e4. \uc544\ub798 \ub9c1\ud06c\ub97c \ub204\ub974\uba74 \ud1b5\ud654\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n%2",
          "groupcall.chatlink.popupdesc.invalidlink":
            "\uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \ub9c1\ud06c\uc785\ub2c8\ub2e4.",
          "groupcall.chatstab.tooltip.startcallwithoutchat":
            "\uac04\ud3b8\ud558\uac8c \ubbf8\ud305 \ub9c1\ud06c\ub97c \uacf5\uc720\ud558\uc5ec \ubaa8\uc784\uc744 \ub9cc\ub4e4\uc5b4 \ubcf4\uc138\uc694.",
          "groupcall.createchat.button.createmeeting": "\ubbf8\ud305",
          "groupcall.deletemeeting.popupdesc.delete": "\uc0ad\uc81c",
          "groupcall.deletemeeting.popupdesc.deletemeeting":
            "\ubbf8\ud305\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "groupcall.editmeetingname.popuptitle.edit":
            "\ubbf8\ud305 \uc774\ub984 \ubcc0\uacbd",
          "groupcall.groupcallpopup.desc.callparticipantlimitexceeded":
            "\ucd5c\ub300\xa0%1\uba85\uae4c\uc9c0 \uadf8\ub8f9\ud1b5\ud654\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "groupcall.groupcallsettings.title.participants":
            "\ucc38\uc5ec \uba64\ubc84",
          "groupcall.groupcallsettings.toast.userwasremoved":
            "%1\ub2d8\uc774 \ubbf8\ud305\uc5d0\uc11c \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "groupcall.invite.index.not.join": "\ub300\uae30 \uba64\ubc84",
          "groupcall.invite.selectall": "\uc804\uccb4 \uc120\ud0dd",
          "groupcall.invite.title": "\ucd08\ub300",
          "groupcall.kickout.popup":
            "\ub300\uae30\uc2dc\uac04\uc774 \ucd08\uacfc\ub418\uc5b4 \ud1b5\ud654\uac00 \uc885\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "groupcall.leavemeeting.popupbutton.leave": "\ub098\uac00\uae30",
          "groupcall.leavemeeting.popupdesc.historynolongershown":
            "\ubbf8\ud305\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\ubbf8\ud305 \uba64\ubc84 \ubaa9\ub85d\uacfc \ub300\ud654 \ub0b4\uc6a9\uc744 \ub354 \uc774\uc0c1 \ubcfc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "groupcall.meetingintroguide.button.start":
            "\uc0c8 \ubbf8\ud305 \ub9cc\ub4e4\uae30",
          "groupcall.meetingintroguide.desc.disclaimers":
            "- \ucd08\ub300 \ub9c1\ud06c\ub294 90\uc77c \ub3d9\uc548 \uc720\ud6a8\ud569\ub2c8\ub2e4.\n- \ubbf8\ud305 \uc911\uc77c \ub54c\ub098, \ubbf8\ud305 \uc2dc \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub300\ud654\ubc29\uc5d0\uc11c \ub098\uc758 LINE \uc774\ub984\uacfc \ud504\ub85c\ud544\uc774 \ubaa8\ub4e0 \ucc38\uc5ec \uba64\ubc84\uc5d0\uac8c \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
          "groupcall.meetingintroguide.desc.disclaimersjp":
            "- \ucd08\ub300 \ub9c1\ud06c\ub294 90\uc77c \ub3d9\uc548 \uc720\ud6a8\ud569\ub2c8\ub2e4.\n- \ubbf8\ud305 \uc911\uc77c \ub54c\ub098, \ubbf8\ud305 \uc2dc \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub300\ud654\ubc29\uc5d0\uc11c \ub098\uc758 LINE \uc774\ub984\uacfc \ud504\ub85c\ud544\uc774 \ubaa8\ub4e0 \ucc38\uc5ec \uba64\ubc84\uc5d0\uac8c \ud45c\uc2dc\ub429\ub2c8\ub2e4.\n- \ubbf8\uc131\ub144\uc790\ub294 \uc774 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "groupcall.meetingintroguide.desc.sharelinktostart":
            "\ucd08\ub300 \ub9c1\ud06c\ub97c \uacf5\uc720\ud558\uc5ec \uc27d\uace0 \ube60\ub974\uac8c \ubaa8\uc784\uc744 \ub9cc\ub4e4\uc5b4 \ubcf4\uc138\uc694. \uce5c\uad6c\uac00 \uc544\ub2cc \uc0ac\uc6a9\uc790\ub3c4 \ub204\uad6c\ub098 \uc27d\uac8c \ubbf8\ud305\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc5b4\uc694.",
          "groupcall.meetingintroguide.header.connect":
            "\ub9c1\ud06c\ub85c \ucc38\uc5ec\uc790\ub97c \ucd08\ub300\ud558\ub294\n\uac00\uc7a5 \uac04\ud3b8\ud55c \ubaa8\uc784 \ud1b5\ud654",
          "groupcall.meetingintroguide.title.meetings": "\ubbf8\ud305",
          "groupcall.meetingnameedit.popupbutton.save": "\uc800\uc7a5",
          "groupcall.meetingparticipantlist.button.remove": "\uc0ad\uc81c",
          "groupcall.meetingparticipants.button.next": "\ub2e4\uc74c",
          "groupcall.meetingparticipants.placeholder.searchuser":
            "\uc774\ub984\uc73c\ub85c \uac80\uc0c9",
          "groupcall.meetingparticipants.title.reportuser": "\uc2e0\uace0",
          "groupcall.meetings.button.copymeetinglink":
            "\ub9c1\ud06c \ubcf5\uc0ac",
          "groupcall.meetings.button.createmeeting":
            "\uc0c8 \ubbf8\ud305 \ub9cc\ub4e4\uae30",
          "groupcall.meetings.button.shareinvite": "\ucd08\ub300",
          "groupcall.meetings.button.startmeeting": "\uc2dc\uc791",
          "groupcall.meetings.desc.createdjustnow": "\ubc29\uae08 \uc804",
          "groupcall.meetings.desc.usersmeeting": "%1\ub2d8\uc758 \ubbf8\ud305",
          "groupcall.meetings.popup.policyblock":
            "\uc11c\ube44\uc2a4 \uc815\ucc45\uc744 \uc704\ubc18\ud558\uc5ec LINE \ubbf8\ud305\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "groupcall.meetings.popupdesc.networkerror":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \ubbf8\ud305 \uc815\ubcf4\ub97c \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "groupcall.meetings.toast.meetingcreated":
            "\ubbf8\ud305\uc774 \ub9cc\ub4e4\uc5b4\uc84c\uc2b5\ub2c8\ub2e4.",
          "groupcall.meetingscreen.tooltip.invitemorepeople":
            "\ub2e4\ub978 \uc0ac\ub78c\uc744 \ubbf8\ud305\uc5d0 \ucd08\ub300\ud560 \uc218 \uc788\uc5b4\uc694.",
          "groupcall.participantlist.desc.cameraturnedoff":
            "\uce74\uba54\ub77c \uaebc\uc9d0",
          "groupcall.participantlist.desc.gridview":
            "\ubd84\ud560 \ud654\uba74\uc73c\ub85c \ubcf4\uae30",
          "groupcall.participantlist.desc.muted":
            "\ub9c8\uc774\ud06c \uaebc\uc9d0",
          "groupcall.participantlist.desc.participantview":
            "\ud3ec\ucee4\uc2a4 \ud654\uba74\uc5d0 \uace0\uc815",
          "groupcall.participantlist.placeholder.searchbyname":
            "\uc774\ub984\uc73c\ub85c\xa0\uac80\uc0c9",
          "groupcall.previewscreen.desc.nameprofilephotoshown":
            "\ub098\uc758 LINE \uc774\ub984\uacfc \ud504\ub85c\ud544\uc774 \ucc38\uc5ec \uba64\ubc84\uc5d0\uac8c \uacf5\uac1c\ub429\ub2c8\ub2e4.",
          "groupcall.removefrommeeting.popupbutton.remove": "\uc0ad\uc81c",
          "groupcall.removefrommeeting.popupdesc.removeuser":
            "%1\ub2d8\uc744 \ubbf8\ud305\uc5d0\uc11c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "groupcall.removeuser.popupdesc.temporaryerror":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \uc0ad\uc81c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "groupcall.report.button.content":
            "\uc720\ud574\ud55c \ucf58\ud150\uce20",
          "groupcall.report.button.harrassment":
            "\uc131\ud76c\ub871/\ubd88\uac74\uc804 \uad50\uc81c",
          "groupcall.report.button.impersonation": "\uc0ac\uce6d",
          "groupcall.report.button.impersonation.inquirypopup":
            "\ud0c0\uc778 \uc0ac\uce6d\uc5d0 \ub300\ud55c \uc870\uc0ac\ub97c \uc704\ud574 \uc0c1\uc138 \uc815\ubcf4\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694. \ubb38\uc758\ud558\uae30 \ud654\uba74\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec \uad00\ub828 \ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "groupcall.report.button.impersonation.inquirypopup.decline":
            "\uac74\ub108\ub6f0\uae30",
          "groupcall.report.button.impersonation.inquirypopup.preceed":
            "\uc774\ub3d9",
          "groupcall.report.button.other": "\uae30\ud0c0",
          "groupcall.report.button.report": "\uc2e0\uace0",
          "groupcall.report.button.scam": "\uc0ac\uae30",
          "groupcall.report.button.spam":
            "\uc2a4\ud338 \ub610\ub294 \uad11\uace0",
          "groupcall.report.desc.reportreason":
            "\uc2e0\uace0 \uc2dc \ud574\ub2f9 \uba64\ubc84\uc758 \uc815\ubcf4\uc640 \uc2a4\ud06c\ub9b0\uc0f7\uc774 \uc790\ub3d9\uc73c\ub85c LY Corporation\uc5d0 \uc804\uc1a1\ub429\ub2c8\ub2e4.",
          "groupcall.report.popupbutton.donotremove": "\uc720\uc9c0",
          "groupcall.report.popupbutton.remove": "\uc0ad\uc81c",
          "groupcall.report.popupdesc.removeuser":
            "\uc2e0\uace0\ud588\uc2b5\ub2c8\ub2e4.\n\uc2e0\uace0\ud55c \uba64\ubc84\ub97c \ubbf8\ud305\uc5d0\uc11c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "groupcall.report.subtitle.reportreason":
            "\uc2e0\uace0 \uc0ac\uc720\ub97c \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.",
          "groupcall.screenshare.receiver.failreceive":
            "\ud654\uba74 \uacf5\uc720 \uc900\ube44 \uc911\uc785\ub2c8\ub2e4. ",
          "groupcall.screenshare.receiver.senderdesc":
            "%1\ub2d8\uc774 \ud654\uba74\uc744 \uacf5\uc720\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
          "groupcall.screenshare.receiver.viewscreen":
            "\uacf5\uc720 \ud654\uba74 \ubcf4\uae30",
          "groupcall.screenshare.sender.btn.stop":
            "\ud654\uba74 \uacf5\uc720 \uc885\ub8cc",
          "groupcall.screenshare.sender.desc":
            "\ub0b4 \ud654\uba74\uc744 \uacf5\uc720\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
          "groupcall.settings.menu.report": "\uc2e0\uace0",
          "groupcall.startmeeting.popupdesc.userexceededlimit":
            "\ubbf8\ud305\uc740 \ucd5c\ub300 30\uac1c\uae4c\uc9c0 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ubbf8\ud305\uc744 \uc0ad\uc81c\ud55c \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "groupcall.tempchat.popupdesc.cantinvitethroughchat":
            "\ucd08\ub300 \ub9c1\ud06c\ub85c\ub9cc \ub2e4\ub978 \uc0ac\ub78c\uc744 \ubbf8\ud305\uc5d0 \ucd08\ub300\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucd08\ub300 \ub9c1\ud06c\ub97c \ubcf5\uc0ac\ud558\uc5ec \uacf5\uc720\ud574 \uc8fc\uc138\uc694.",
          "groupcall.title": "\uadf8\ub8f9\ud1b5\ud654",
          "groupcall.toast.deviceerror.camera":
            "\uc774 \uce74\uba54\ub77c\ub294 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \uce74\uba54\ub77c\ub97c \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.",
          "groupcall.toast.newdevice.camera":
            "\uce74\uba54\ub77c\uac00 %1 \uc7a5\uce58\ub85c \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "groupcall.toast.newdevice.mic":
            "\ub9c8\uc774\ud06c\uac00 %1 \uc7a5\uce58\ub85c \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "groupcall.toast.newdevice.speaker":
            "\uc2a4\ud53c\ucee4\uac00 %1 \uc7a5\uce58\ub85c \ubcc0\uacbd\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "groupcall.verifyage.desc.verifyageinmobileversion":
            "\uc5f0\ub839 \ud655\uc778\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4.\nLINE \ubaa8\ubc14\uc77c \ubc84\uc804\uc758 \uc124\uc815 > \uc5f0\ub839 \ud655\uc778\uc744 \uc120\ud0dd\ud558\uc5ec \uc9c4\ud589\ud574 \uc8fc\uc138\uc694.",
          "groupcall.video.alert.member.join":
            "%1\ub2d8\uc774 \uadf8\ub8f9\ud1b5\ud654\uc5d0 \ucc38\uc5ec\ud588\uc2b5\ub2c8\ub2e4.",
          "groupcall.video.alert.member.leave":
            "%1\ub2d8\uc774 \uadf8\ub8f9\ud1b5\ud654\uc5d0\uc11c \ub098\uac14\uc2b5\ub2c8\ub2e4.",
          "groupcall.video.alert.streaming.off.member":
            "\ub0b4\uac00 \uc601\uc0c1\uc744 \ub048 \uba64\ubc84\uc785\ub2c8\ub2e4.\n\uc601\uc0c1\uc744 \ubcf4\ub824\uba74 \ub2e4\uc2dc \ucf1c\uc8fc\uc138\uc694.",
          "groupcall.video.chat.error.without.camera.body": "",
          "groupcall.video.chat.error.without.camera.btn.video": "",
          "groupcall.video.chat.error.without.camera.btn.voice": "",
          "groupcall.video.chat.layer.start.dscr":
            "\uadf8\ub8f9\uc601\uc0c1\ud1b5\ud654\ub97c \uc2dc\uc791\ud569\ub2c8\ub2e4.",
          "groupcall.video.chat.layer.start.msg":
            "%1\ub2d8\uc774 \uadf8\ub8f9\uc601\uc0c1\ud1b5\ud654\ub97c \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4.",
          "groupcall.video.chat.layer.start.shortmsg":
            "\uc601\uc0c1\ud1b5\ud654\uac00 \uc2dc\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "groupcall.video.chat.message.invite":
            "\uadf8\ub8f9\uc601\uc0c1\ud1b5\ud654\uc5d0 \ucd08\ub300\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n%1",
          "groupcall.video.chat.message.start":
            "\uadf8\ub8f9\uc601\uc0c1\ud1b5\ud654\uac00 \uc2dc\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "groupcall.video.desc.guide.tryCall":
            "\uc774\uc81c PC\uc5d0\uc11c\ub3c4 \uadf8\ub8f9\uc601\uc0c1\ud1b5\ud654\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5b4\uc694. ",
          "groupcall.video.error.change.to.voice":
            "\ub124\ud2b8\uc6cc\ud06c\uac00 \ubd88\uc548\uc815\ud558\uac70\ub098 \ud1b5\ud654\ub7c9\uc774 \ub9ce\uc544 \uc74c\uc131\ud1b5\ud654\ub85c \uc804\ud658\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "groupcall.video.error.not.video.member":
            "\uc74c\uc131\ud1b5\ud654\ub85c \ucc38\uc5ec\ud55c \uba64\ubc84\ub294 \uc601\uc0c1\uc744 \ud45c\uc2dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "groupcall.video.fullview.streaming.fail.body":
            "%1\ub2d8\uc758 \uc601\uc0c1\uc744 \ubd88\ub7ec\uc624\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.\n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "groupcall.video.fullview.streaming.fail.button":
            "\uc7ac\uc2dc\ub3c4",
          "groupcall.video.fullview.streaming.off.body":
            "%1\ub2d8\uc740 \ub0b4\uac00 \uc601\uc0c1\uc744 \ub048 \uba64\ubc84\uc785\ub2c8\ub2e4.\n\uc601\uc0c1\uc744 \ubcf4\ub824\uba74 \ub2e4\uc2dc \ucf1c\uc8fc\uc138\uc694.",
          "groupcall.video.menu.streaming.off": "\uc601\uc0c1 \ub044\uae30",
          "groupcall.video.menu.streaming.on": "\uc601\uc0c1 \ucf1c\uae30",
          "groupcall.video.title": "\uadf8\ub8f9\uc601\uc0c1\ud1b5\ud654",
          "groupcall.video.toast.cameraoff":
            "\uce74\uba54\ub77c\uac00 \uaebc\uc838\uc788\uc5b4 \uc601\uc0c1\uc744 \uc124\uc815\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "groupcall.video.tooltip.focusview":
            "\ud3ec\ucee4\uc2a4 \ud654\uba74\uc73c\ub85c \ubcf4\uae30",
          "groupcall.video.tooltip.gridview":
            "\ubd84\ud560 \ud654\uba74\uc73c\ub85c \ubcf4\uae30",
          "groupcall.video.tooltip.profilelist":
            "\ucc38\uc5ec \uba64\ubc84 \ub354\ubcf4\uae30",
          "groupcall.video.tooltip.videolayout":
            "\ud654\uba74 \ubdf0 \ubcc0\uacbd",
          "groupcall.viewmode.desc.focusviewcenter":
            "\uc911\uc559 \ud3ec\ucee4\uc2a4 \ud654\uba74",
          "groupcall.viewmode.desc.focusviewleft":
            "\uc67c\ucabd \ud3ec\ucee4\uc2a4 \ud654\uba74",
          "groupcall.viewmode.desc.focusviewright":
            "\uc624\ub978\ucabd \ud3ec\ucee4\uc2a4 \ud654\uba74",
          "groupcall.viewmode.desc.gridview": "\ubd84\ud560 \ud654\uba74",
          "groupcall.voice.chat.confirm.popup.join":
            "\uadf8\ub8f9\uc74c\uc131\ud1b5\ud654\uac00 \uc9c4\ud589 \uc911\uc785\ub2c8\ub2e4. \ucc38\uc5ec\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "groupcall.voice.chat.layer.start.dscr":
            "\uadf8\ub8f9\uc74c\uc131\ud1b5\ud654\ub97c \uc2dc\uc791\ud569\ub2c8\ub2e4.",
          "groupcall.voice.chat.layer.start.msg":
            "%1\ub2d8\uc774 \uadf8\ub8f9\uc74c\uc131\ud1b5\ud654\ub97c \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4.",
          "groupcall.voice.chat.layer.start.shortmsg":
            "\uc74c\uc131\ud1b5\ud654\uac00 \uc2dc\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "groupcall.voice.chat.message.invite":
            "\uadf8\ub8f9\uc74c\uc131\ud1b5\ud654\uc5d0 \ucd08\ub300\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n%1",
          "groupcall.voice.chat.message.start":
            "\uadf8\ub8f9\uc74c\uc131\ud1b5\ud654\uac00 \uc2dc\uc791\ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",
          "groupcall.voice.title": "\uadf8\ub8f9\uc74c\uc131\ud1b5\ud654",
          "groupcall.watchtogethercall.popupbutton.start": "\uc7ac\uc0dd",
          "groupcall.watchtogethercall.popupdesc.startwatchtogetherforeveryone":
            "\ubaa8\ub4e0 \ucc38\uc5ec\uc790\uc758 \ud654\uba74\uc5d0\uc11c \ub3d9\uc601\uc0c1\uc774 \uc7ac\uc0dd\ub429\ub2c8\ub2e4. \uc9c0\uae08 \uc7ac\uc0dd\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "groupcall.watchtogethercall.toast.currentlyinsession":
            "%1\ub2d8\uc774 \ud654\uba74 \uacf5\uc720\ub97c \uc9c4\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
          "groupcall.watchtogethercall.toast.userendedwatchtogether":
            "%1\ub2d8\uc774 \ud654\uba74 \uacf5\uc720\ub97c \uc885\ub8cc\ud588\uc2b5\ub2c8\ub2e4.",
          "groupcall.watchtogethercall.toast.userstartedwatchtogether":
            "%1\ub2d8\uc774 \ud654\uba74 \uacf5\uc720\ub97c \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4.",
          "groupcall.watchtogethermenu.button.screenshare":
            "\ub0b4 \ud654\uba74",
          "groupcall.watchtogethermenu.button.youtube": "YouTube",
          "groupcall.watchtogethermenu.desc.policy":
            "\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68",
          "groupcall.watchtogethermenu.desc.searchonyoutube":
            "YouTube \ub9c1\ud06c, \ud0a4\uc6cc\ub4dc \uac80\uc0c9",
          "groupcall.watchtogethermenu.desc.terms":
            "\uc11c\ube44\uc2a4 \uc57d\uad00",
          "groupcall.youtube.edge.popup.btn.install": "\uc774\ub3d9",
          "groupcall.youtube.edge.popup.desc":
            "YouTube \ud654\uba74 \uacf5\uc720 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 Chromium \ubc84\uc804 Microsoft Edge\ub97c \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4. \ub2e4\uc6b4\ub85c\ub4dc \ud398\uc774\uc9c0\ub85c \uc774\ub3d9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "groupcall.youtube.endduetoerror":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c YouTube \ub3d9\uc601\uc0c1 \uacf5\uc720\uac00 \uc911\uc9c0\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "groupcall.youtube.error.reinstall":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \ub3d9\uc601\uc0c1\uc744 \uc7ac\uc0dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694. \uacc4\uc18d\ud574\uc11c \uac19\uc740 \uc624\ub958\uac00 \ubc1c\uc0dd\ud560 \uacbd\uc6b0 \uc6f9\ube0c\ub77c\uc6b0\uc800\ub97c \ub2e4\uc2dc \uc124\uce58\ud574 \uc8fc\uc138\uc694.",
          "groupcall.youtube.paste": "YouTube \ud654\uba74 \uacf5\uc720",
          "groupcall.youtube.paste.btn.play": "\uc7ac\uc0dd",
          "groupcall.youtube.paste.btn.search": "\ubbf8\ub9ac\ubcf4\uae30",
          "groupcall.youtube.paste.desc":
            "\uac80\uc0c9\ucc3d\uc5d0\uc11c \ucc38\uc5ec \uba64\ubc84\uc640 \ud568\uaed8 \ubcfc \ub3d9\uc601\uc0c1\uc744 \uac80\uc0c9\ud574 \ubcf4\uc138\uc694(\uc774\uc5b4\ud3f0\xa0\uc0ac\uc6a9\xa0\uad8c\uc7a5).",
          "groupcall.youtube.paste.noresult":
            "\ub3d9\uc601\uc0c1\uc744 \ud45c\uc2dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. URL\uc744 \ud655\uc778\ud55c \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "groupcall.youtube.paste.startnewone.popup.btn.play": "\uc7ac\uc0dd",
          "groupcall.youtube.paste.startnewone.popup.desc":
            "\uc7ac\uc0dd \uc911\uc778 \uc601\uc0c1\uc744 \uc885\ub8cc\ud558\uace0 \uc0c8\ub85c\uc6b4 \ub3d9\uc601\uc0c1\uc744 \uc7ac\uc0dd\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "groupcall.youtube.paste.toast.currentlyinsession":
            "%1\ub2d8\uc774 YouTube \ub3d9\uc601\uc0c1\uc744 \uacf5\uc720\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
          "groupcall.youtube.paste.toast.error":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \ud654\uba74 \uacf5\uc720\ub97c \uc2dc\uc791\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "groupcall.youtube.paste.unknownerror":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \ub3d9\uc601\uc0c1\uc744 \ud45c\uc2dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "groupcall.youtube.receiver.newvideo":
            "%1\ub2d8\uc774 \uc0c8\ub85c\uc6b4 \ub3d9\uc601\uc0c1\uc744 \uc7ac\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",
          "groupcall.youtube.receiver.playvideo":
            "\ub3d9\uc601\uc0c1 \ubcf4\uae30",
          "groupcall.youtube.receiver.senderdesc":
            "%1\ub2d8\uc774 \ub3d9\uc601\uc0c1\uc744 \uacf5\uc720\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
          "groupcall.youtube.receiver.tooltip.mute": "\uc74c\uc18c\uac70",
          "groupcall.youtube.receiver.tooltip.unmute":
            "\uc74c\uc18c\uac70 \ud574\uc81c",
          "groupcall.youtube.receiver.videopaused":
            "%1\ub2d8\uc774\xa0\ub3d9\uc601\uc0c1 \uc7ac\uc0dd\uc744 \uc911\uc9c0\ud588\uc2b5\ub2c8\ub2e4.",
          "groupcall.youtube.sender.btn.stop":
            "YouTube \uacf5\uc720 \uc885\ub8cc",
          "groupcall.youtube.sender.desc":
            "\ub3d9\uc601\uc0c1 \uacf5\uc720 \uc911\uc785\ub2c8\ub2e4.",
          "groupcall.youtube.stop.popup.btn.confirm": "\uc885\ub8cc",
          "groupcall.youtube.stop.popup.desc":
            "YouTube \ub3d9\uc601\uc0c1 \uacf5\uc720\ub97c \uc885\ub8cc\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "groupcall.youtube.windows.serveroff.popup.desc":
            "\ud604\uc7ac Windows OS\uc5d0\uc11c\ub294 YouTube \ud654\uba74 \uacf5\uc720 \uae30\ub2a5\uc774 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4(\ucd94\ud6c4 \uc9c0\uc6d0 \uc608\uc815).",
          "groupchat.dynamic.group.title.invitecanceled.updatename":
            "%1\ub2d8\uc774 %2\ub2d8 \ucd08\ub300\ub97c \ucde8\uc18c\ud588\uc2b5\ub2c8\ub2e4.",
          "groupchat.dynamic.group.title.memberinvited.updatename":
            '<![CDATA[%1\ub2d8\uc774 %2\ub2d8\uc744 \uadf8\ub8f9\uc5d0 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4. <a href="line://nv/group/settings/groupname/chatId=%3">\uadf8\ub8f9\uba85 \ubcc0\uacbd</a>]]>',
          "groupchat.dynamic.group.title.memberjoined.updatename":
            '<![CDATA[%1\ub2d8\uc774 \uadf8\ub8f9\uc5d0 \ucc38\uc5ec\ud588\uc2b5\ub2c8\ub2e4. <a href="line://nv/group/settings/groupname/chatId=%2">\uadf8\ub8f9\uba85 \ubcc0\uacbd</a>]]>',
          "groupchat.dynamic.group.title.memberremoved.updatename":
            "%1\ub2d8\uc774 %2\ub2d8\uc744 \uadf8\ub8f9\uc5d0\uc11c \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4.",
          "groupchat.linkqr.error.block":
            "\ub9c1\ud06c/QR \ucf54\ub4dc \ucd08\ub300\uac00 \n\ucc28\ub2e8\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",
          "groupchat.linkqr.error.renew":
            "\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uadf8\ub8f9\uc785\ub2c8\ub2e4.",
          "groupchat.push.invitedtojoingroup":
            "%1\ub2d8\uc774 \ub098\ub97c \uadf8\ub8f9\uc5d0 \ucd08\ub300\ud588\uc2b5\ub2c8\ub2e4.",
          "groupchat.push.someonejoinsgroup":
            "%1\ub2d8\uc774 \uadf8\ub8f9\uc5d0 \ucc38\uc5ec\ud588\uc2b5\ub2c8\ub2e4.",
          "groupchat.systemmsg.allowjoiningvialinkorqr":
            "%1\ub2d8\uc774 \ub9c1\ud06c\xb7QR \ucf54\ub4dc \ucd08\ub300 \uae30\ub2a5\uc744 \ucf30\uc2b5\ub2c8\ub2e4. \uc0c8 \uba64\ubc84\uac00 \ub9c1\ud06c\ub098 QR \ucf54\ub4dc\ub85c \uadf8\ub8f9\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "groupchat.systemmsg.cancelinvite":
            "%1\ub2d8\uc774 %2\ub2d8 \ucd08\ub300\ub97c \ucde8\uc18c\ud588\uc2b5\ub2c8\ub2e4.",
          "groupchat.systemmsg.cancelinvite.updatename":
            '<![CDATA[%1\ub2d8\uc774 %2\ub2d8\uc5d0\uac8c \ubcf4\ub0b8 \ucd08\ub300\ub97c \ucde8\uc18c\ud588\uc2b5\ub2c8\ub2e4. \uadf8\ub8f9\uba85\uc740 \uc790\ub3d9\uc73c\ub85c \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. <a href="line://nv/group/settings/groupname/chatId=%3">\uadf8\ub8f9\uba85 \ubcc0\uacbd</a>]]>',
          "groupchat.systemmsg.changegroupname":
            "%1\ub2d8\uc774 \uadf8\ub8f9 \uc774\ub984\uc744 '%2' \uadf8\ub8f9\uc73c\ub85c \ubcc0\uacbd\ud588\uc2b5\ub2c8\ub2e4.",
          "groupchat.systemmsg.changegroupphoto":
            "%1\ub2d8\uc774 \uadf8\ub8f9 \ud504\ub85c\ud544\uc744 \ubcc0\uacbd\ud588\uc2b5\ub2c8\ub2e4.",
          "groupchat.systemmsg.disablejoiningvialinkorqr":
            "%1\ub2d8\uc774 \ub9c1\ud06c\xb7QR \ucf54\ub4dc \ucd08\ub300 \uae30\ub2a5\uc744 \uaed0\uc2b5\ub2c8\ub2e4. \uc0c8 \uba64\ubc84\uac00 \ub9c1\ud06c\ub098 QR \ucf54\ub4dc\ub85c \uadf8\ub8f9\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "groupchat.systemmsg.inviteuser":
            "%1\ub2d8\uc774 %2\ub2d8\uc744 \uadf8\ub8f9\uc5d0 \ucd08\ub300\ud588\uc2b5\ub2c8\ub2e4. \uc0c8 \uba64\ubc84\uac00 \ucc38\uc5ec\ud560 \ub54c\uae4c\uc9c0 \uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824 \uc8fc\uc138\uc694.",
          "groupchat.systemmsg.inviteuser1n":
            "%1\ub2d8\uc774 %2\ub2d8\uc744 \uadf8\ub8f9\uc5d0 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4.",
          "groupchat.systemmsg.inviteuser1n.atcreation.updatename":
            '<![CDATA[%1\ub2d8\uc774 %2\ub2d8\uc744 \uadf8\ub8f9\uc5d0 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4. <a href="line://nv/group/settings/groupname/chatId=%3">\uadf8\ub8f9\uba85 \ubcc0\uacbd</a>]]>',
          "groupchat.systemmsg.inviteuser1n.updatename":
            '<![CDATA[%1\ub2d8\uc774 %2\ub2d8\uc744 \uadf8\ub8f9\uc5d0 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4. \uadf8\ub8f9\uba85\uc740 \uc790\ub3d9\uc73c\ub85c \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. <a href="line://nv/group/settings/groupname/chatId=%3">\uadf8\ub8f9\uba85 \ubcc0\uacbd</a>]]>',
          "groupchat.systemmsg.kickoutuser":
            "%1\ub2d8\uc774 %2\ub2d8\uc744 \uadf8\ub8f9\uc5d0\uc11c \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4.",
          "groupchat.systemmsg.kickoutuser.updatename":
            '<![CDATA[%1\ub2d8\uc774 %2\ub2d8\uc744 \uadf8\ub8f9\uc5d0\uc11c \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4. \uadf8\ub8f9\uba85\uc740 \uc790\ub3d9\uc73c\ub85c \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. <a href="line://nv/group/settings/groupname/chatId=%3">\uadf8\ub8f9\uba85 \ubcc0\uacbd</a>]]>',
          "groupchat.systemmsg.userjoin":
            "%1\ub2d8\uc774 \uadf8\ub8f9\uc5d0 \ucc38\uc5ec\ud588\uc2b5\ub2c8\ub2e4.",
          "groupchat.systemmsg.userjoin.updatename":
            "%1\ub2d8\uc774 \uadf8\ub8f9\uc5d0 \ucc38\uc5ec\ud588\uc2b5\ub2c8\ub2e4.",
          "groupchat.systemmsg.userleave":
            "%1\ub2d8\uc774 \uadf8\ub8f9\uc5d0\uc11c \ub098\uac14\uc2b5\ub2c8\ub2e4.",
          "groupchat.systemmsg.userleave.updatename":
            '<![CDATA[%1\ub2d8\uc774 \uadf8\ub8f9\uc5d0\uc11c \ub098\uac14\uc2b5\ub2c8\ub2e4. \uadf8\ub8f9\uba85\uc740 \uc790\ub3d9\uc73c\ub85c \ubcc0\uacbd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. <a href="line://nv/group/settings/groupname/chatId=%2">\uadf8\ub8f9\uba85 \ubcc0\uacbd</a>]]>',
          "groupchat.systemmsg.youareinvited":
            "%1\ub2d8\uc774 \ub098\ub97c \uadf8\ub8f9\uc5d0 \ucd08\ub300\ud588\uc2b5\ub2c8\ub2e4.",
          "grouphome.album.alert.inprogress":
            "\ucf58\ud150\uce20\ub97c \uc62c\ub9ac\ub294 \uc911\uc5d0\ub294 \ub2e4\ub978 \ucf58\ud150\uce20\ub97c \ucd94\uac00\ud558\uac70\ub098 \uc568\ubc94\uc744 \uc0ad\uc81c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "grouphome.album.alert.reupload":
            "\ucf58\ud150\uce20\ub97c \ub2e4\uc2dc \uc62c\ub9ac\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "grouphome.album.alert.save.failed":
            "\ucf58\ud150\uce20\ub97c \uc800\uc7a5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "grouphome.album.alert.stopUpload": "\uadf8\ub9cc \uc62c\ub9ac\uae30",
          "grouphome.album.alert.unregistereduser":
            "\ud0c8\ud1f4\ud55c \uc0ac\uc6a9\uc790\uc640\ub294 \uc568\ubc94\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "grouphome.album.label.reupload": "\ub2e4\uc2dc \uc62c\ub9ac\uae30",
          "grouphome.albumdetail.addPhoto": "\uc0ac\uc9c4 \ucd94\uac00",
          "grouphome.albumdetail.alert.changeAlbum":
            "\uc774 \uc568\ubc94\uc5d0 \uc18d\ud55c \uc0ac\uc9c4\ub3c4 \uc804\ubd80 \uc0ad\uc81c\ub418\uba70\n\ub2e4\uc2dc \ub418\ub3cc\ub9b4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc815\ub9d0 \uc0ad\uc81c\ud558\uaca0\uc2b5\ub2c8\uae4c?",
          "grouphome.albumdetail.changeName": "\uc568\ubc94\uba85 \ubcc0\uacbd",
          "grouphome.albumdetail.delete": "\uc568\ubc94 \uc0ad\uc81c",
          "grouphome.albumdetail.empty.desc":
            "\ud568\uaed8 \ud588\ub358 \uc990\uac70\uc6b4 \uc2dc\uac04, \uce5c\uad6c\uc640\uc758 \uc18c\uc911\ud55c \ucd94\uc5b5\uc744 \uc568\ubc94\uc5d0 \uac04\uc9c1\ud574 \ubcf4\uc138\uc694!",
          "grouphome.albumdetail.empty.title":
            "\ucd94\uac00\ub41c \ucf58\ud150\uce20\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "grouphome.albumdetail.error":
            "\uc774\ub7f0! \ubaa9\ub85d\uc744 \ubd88\ub7ec\uc62c \uc218 \uc5c6\ub124\uc694.\n\uc0c8\ub85c \uace0\uce68 \ud574\ubcf4\uc138\uc694.",
          "grouphome.albumdetail.saveComplete":
            "\uc800\uc7a5\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "grouphome.albumdetail.saveall": "\uc804\uccb4 \uc800\uc7a5",
          "grouphome.albumdetail.savingPhoto": "\uc800\uc7a5 \uc911\u2026",
          "grouphome.albumdetail.selectCount.plurals.few": "",
          "grouphome.albumdetail.selectCount.plurals.many": "",
          "grouphome.albumdetail.selectCount.plurals.one": "",
          "grouphome.albumdetail.selectCount.plurals.other": "",
          "grouphome.albumdetail.selectCount.plurals.two": "",
          "grouphome.albumdetail.selectCount.plurals.zero": "",
          "grouphome.albumdetail.title.changeAlbum":
            "\uc568\ubc94\uba85 \ubcc0\uacbd\ud558\uae30",
          "grouphome.albumdetail.uploader": "by %1",
          "grouphome.alert.addphoto":
            "\ucf58\ud150\uce20 \ucd94\uac00\ub97c \ucde8\uc18c\ud558\uaca0\uc2b5\ub2c8\uae4c?\n\ucca8\ubd80 \ud56d\ubaa9\uc740 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "grouphome.alert.albumLimitCount":
            "\ub354 \uc774\uc0c1 \uc568\ubc94\uc744 \ub9cc\ub4e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc568\ubc94\uc740 \ucd5c\ub300 %n\uac1c\uae4c\uc9c0 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "grouphome.alert.alreadyDeleteAlbum":
            "\uc774\ubbf8 \uc0ad\uc81c\ub41c \uc568\ubc94\uc785\ub2c8\ub2e4.",
          "grouphome.alert.alreadyDeletePhoto":
            "\uc774\ubbf8 \uc0ad\uc81c\ub41c \ucf58\ud150\uce20\uc785\ub2c8\ub2e4.",
          "grouphome.alert.makealbum":
            "\uc568\ubc94 \ub9cc\ub4e4\uae30\ub97c \ucde8\uc18c\ud558\uaca0\uc2b5\ub2c8\uae4c?\n\uc791\uc131\ud55c \ub0b4\uc6a9\uc740 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "grouphome.alert.photoLimitCount":
            "\ub354 \uc774\uc0c1 \uc0ac\uc9c4\uc744 \ub4f1\ub85d\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc568\ubc94 \ub2f9 %1\uac1c \uc0ac\uc9c4\uc744 \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "grouphome.label.album": "\uc568\ubc94",
          "grouphome.label.album.addPhoto": "\uc0ac\uc9c4 \ucd94\uac00",
          "grouphome.label.album.changeName": "\uc568\ubc94\uba85 \ubcc0\uacbd",
          "grouphome.label.album.delete": "\uc568\ubc94 \uc0ad\uc81c",
          "grouphome.label.album.empty":
            "\uc544\uc9c1 \ub4f1\ub85d\ub41c \uc568\ubc94\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "grouphome.label.album.make": "\uc568\ubc94 \ub9cc\ub4e4\uae30",
          "grouphome.label.albumName": "\uc568\ubc94\uba85",
          "grouphome.label.post": "\ub178\ud2b8",
          "grouphome.label.post.empty":
            "\uc544\uc9c1 \uc791\uc131\ub41c \ub178\ud2b8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "grouphome.label.showAllPost":
            "\uc804\uccb4 \ub178\ud2b8 \ubcf4\uae30",
          "grouphome.label.showUserHome": "%1\ub2d8\uc758 \ud648",
          "grouphome.label.showallalbum":
            "\uc804\uccb4 \uc568\ubc94\ubcf4\uae30",
          "grouphome.label.writepost": "\uc0c8 \ub178\ud2b8 \uc4f0\uae30",
          "grouphome.member.alert.joinGroup":
            "\uadf8\ub8f9\uc5d0 \ucc38\uc5ec\ud588\uc2b5\ub2c8\ub2e4.",
          "grouphome.member.label.showGroup": "\uadf8\ub8f9 \ubcf4\uae30",
          "grouphome.post.alert.unregistereduser":
            "\ud0c8\ud1f4\ud55c \uc0ac\uc6a9\uc790\uc758 \uacbd\uc6b0 \ub178\ud2b8\ub97c \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "gruopchat.dynamic.group.title.memberleft.updatename":
            "%1\ub2d8\uc774 \uadf8\ub8f9\uc5d0\uc11c \ub098\uac14\uc2b5\ub2c8\ub2e4.",
          "hub.menubar.tooltip": "Check out LINE services in LINE HUB.",
          "hub.menubar.tooltip.renew":
            "LINE HUB\u5168\u65b0\u5716\u793a\uff0c\u638c\u63e1\u6240\u6709LINE\u7cbe\u9078\u5167\u5bb9\uff01",
          "image.viewer.btn.edit.tooltip":
            "\uc774\ubbf8\uc9c0 \ud3b8\uc9d1 \ucc3d\uc774 \uc5f4\ub9bd\ub2c8\ub2e4.",
          "image.viewer.btn.minimizesize.tooltip":
            "\ucc3d\uc5d0 \ub9de\ucd94\uae30",
          "image.viewer.cancel": "\ucde8\uc18c",
          "image.viewer.copy": "\ubcf5\uc0ac",
          "image.viewer.crop": "\uc0ac\uc9c4\uc790\ub974\uae30",
          "image.viewer.download.error":
            "\uc77c\uc2dc\uc801\uc778 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",
          "image.viewer.loading.error":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \uc694\uccad\ud558\uc2e0 \n\uc791\uc5c5\uc774 \uc644\ub8cc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "image.viewer.ok": "\ud655\uc778",
          "image.viewer.save": "\uc800\uc7a5",
          "image.viewer.share.chat": "\ub300\ud654\ubc29\uc5d0 \uacf5\uc720",
          "imageEditor.btn.doNotSave": "\uc800\uc7a5 \uc548\ud568",
          "imageEditor.msg.onEditing":
            "\ud3b8\uc9d1 \uc911\uc778 \ub0b4\uc6a9\uc744 PC\uc5d0 \uc800\uc7a5\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "imageEditor.msg.onModified":
            "\uc774\ubbf8\uc9c0 \ud3b8\uc9d1 \uc911\uc778 \ub0b4\uc6a9\uc774 \uc788\uc2b5\ub2c8\ub2e4.",
          "imageEditor.msg.toobig":
            "\uc774\ubbf8\uc9c0\uc758 \ud574\uc0c1\ub3c4\uac00 \ucee4\uc11c \ud3b8\uc9d1\uc744 \uc218\ud589\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "invite.btn.cancel.title": "\ucde8\uc18c",
          "invite.btn.invite.title": "\ud655\uc778",
          "invite.label.create.title": "\ucd08\ub300\ud558\uae30",
          "invite.label.invitee.title": "\ucd08\ub300",
          "invite.label.nobuddytoselect.title":
            "\uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uce5c\uad6c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "invite.label.nosearchresult.title":
            "\uac80\uc0c9\uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "invite.label.nothing.title":
            "\uc120\ud0dd\ud55c \uce5c\uad6c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "invite.label.person.title.plurals.few": "",
          "invite.label.person.title.plurals.many": "",
          "invite.label.person.title.plurals.one": "",
          "invite.label.person.title.plurals.other": "",
          "invite.label.person.title.plurals.two": "",
          "invite.label.person.title.plurals.zero": "",
          "keep.alert.sendtochat.unsupported.all.other":
            "\ud30c\uc77c\uc744 \ubcf4\ub0bc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ud615\uc2dd\uc785\ub2c8\ub2e4.",
          "keep.alert.sendtochat.unsupported.file.multi":
            "\ubcf4\ub0bc \uc218 \uc5c6\ub294 \ud615\uc2dd\uc758 \ud30c\uc77c\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc5b4 \uc77c\ubd80 \ud30c\uc77c\uc758 \uc804\uc1a1\uc774 \uc81c\ud55c\ub429\ub2c8\ub2e4. \ud30c\uc77c\uc744 \ubcf4\ub0b4\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "keep.alert.sendtochat.unsupported.some.other":
            "\uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ud615\uc2dd\uc774 \uc788\uc5b4 \ud30c\uc77c %n\uac1c\ub294 \ubcf4\ub0bc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub098\uba38\uc9c0 \ud30c\uc77c\ub9cc \ubcf4\ub0b4\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "keep.btn.retry": "\uc7ac\uc2dc\ub3c4",
          "keep.category.all": "\uc804\uccb4",
          "keep.category.files": "\ud30c\uc77c",
          "keep.category.links": "\ub9c1\ud06c",
          "keep.category.memos": "\uba54\ubaa8",
          "keep.category.newtext": "\ud14d\uc2a4\ud2b8",
          "keep.category.photos": "\uc0ac\uc9c4",
          "keep.category.photosvideos":
            "\uc0ac\uc9c4 \ubc0f \ub3d9\uc601\uc0c1",
          "keep.category.text": "\ud14d\uc2a4\ud2b8",
          "keep.category.videos": "\ub3d9\uc601\uc0c1",
          "keep.common.error.503":
            "\ud604\uc7ac \uc11c\ube44\uc2a4 \uc810\uac80 \uc911\uc785\ub2c8\ub2e4.\n\uc810\uac80 \uc2dc\uac04: M.d H:mm - M.d H:mm",
          "keep.date.format": "yyyy.M.d",
          "keep.desc.PR.title":
            "Keep\uc740 \uc5b8\uc81c \uc0ac\uc6a9\ud558\ub098\uc694?",
          "keep.desc.alreadyDeleted":
            "\uc774\ubbf8 \uc0ad\uc81c\ub41c \ud56d\ubaa9\uc785\ub2c8\ub2e4.",
          "keep.desc.copied": "\ubcf5\uc0ac\ud588\uc2b5\ub2c8\ub2e4.",
          "keep.desc.count.others.plurals.few": "",
          "keep.desc.count.others.plurals.many": "",
          "keep.desc.count.others.plurals.one": "",
          "keep.desc.count.others.plurals.other": "",
          "keep.desc.count.others.plurals.two": "",
          "keep.desc.count.others.plurals.zero": "",
          "keep.desc.delete.other":
            "\uc774 \ud56d\ubaa9\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "keep.desc.discard":
            "\uc218\uc815\ud55c \uc0ac\ud56d\uc774 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \uc218\uc815\uc0ac\ud56d\uc744 \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "keep.desc.downloadError":
            "\ub2e4\uc6b4\ub85c\ub4dc \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc5ec \uc791\uc5c5\uc744 \uc644\ub8cc\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.",
          "keep.desc.downloading": "\ub2e4\uc6b4\ub85c\ub4dc \uc911...",
          "keep.desc.drag":
            '\uc5ec\uae30\ub85c \ud30c\uc77c\uc744 \ub04c\uc5b4\uc624\uac70\ub098\n"\uc62c\ub9ac\uae30" \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc138\uc694.',
          "keep.desc.dragHere":
            "\ud30c\uc77c\uc744 \uc5ec\uae30\ub85c \ub04c\uc5b4\ub2e4 \ub193\uc73c\uc138\uc694.",
          "keep.desc.error.reason.exceedPhotoResolution":
            "\ud574\uc0c1\ub3c4\uac00 10,000\ud53d\uc140 \uc774\uc0c1\uc785\ub2c8\ub2e4.",
          "keep.desc.error.reason.exceedPhotoSize":
            "20 MB\uc774\uc0c1\uc758 \uc0ac\uc9c4\uc785\ub2c8\ub2e4.",
          "keep.desc.error.reason.expired":
            "\uc800\uc7a5 \uae30\uac04\uc774 \uc9c0\ub098 \ucf58\ud150\uce20\ub97c \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "keep.desc.error.reason.lackOfStorage":
            "\uc800\uc7a5 \uacf5\uac04\uc774 \ubd80\uc871\ud569\ub2c8\ub2e4.",
          "keep.desc.error.reason.networkError":
            "\ub124\ud2b8\uc6cc\ud06c \uc624\ub958",
          "keep.desc.error.reason.notFoundFile":
            "\ud30c\uc77c\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "keep.desc.error.reason.unknown":
            "\uc5c5\ub85c\ub4dc \ud560 \uc218 \uc5c6\ub294 \ud56d\ubaa9\uc785\ub2c8\ub2e4.",
          "keep.desc.error.reason.unknownFileType":
            "\uc5c5\ub85c\ub4dc \ud560 \uc218 \uc5c6\ub294 \ud30c\uc77c \ud615\uc2dd\uc785\ub2c8\ub2e4.",
          "keep.desc.exceedCharacter":
            "\ucd5c\ub300 10,000\uc790\uae4c\uc9c0 \uc785\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",
          "keep.desc.expiredContent.askDelete":
            "\uc800\uc7a5 \uae30\uac04\uc774 \ub9cc\ub8cc\ub418\uc5b4 \n\ub354 \uc774\uc0c1 \ud56d\ubaa9\uc744 \ud655\uc778\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \n\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "keep.desc.expiredContent.couldNotConfirmed":
            "\uc800\uc7a5 \uae30\uac04\uc774 \ub9cc\ub8cc\ub418\uc5b4 \ub354 \uc774\uc0c1 \ucf58\ud150\uce20\ub97c \ud655\uc778\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "keep.desc.expiredContent.storagePeriod":
            "\uc800\uc7a5 \uae30\uac04\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "keep.desc.fileCountExceeds":
            "\ucd5c\ub300 20\uac1c\uae4c\uc9c0\uc758 \ud30c\uc77c\uc744 \uc800\uc7a5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "keep.desc.guide.tryKeep":
            "\ub098\ub9cc\uc758 \ucee8\ud150\uce20 \ubcf4\uad00\ud568\nKeep\uc744 \uc0ac\uc6a9\ud574 \ubcf4\uc138\uc694.",
          "keep.desc.itemsavedinkeepexpired":
            "\uc800\uc7a5 \uae30\uac04\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "keep.desc.loadFailed":
            "\ub85c\ub529\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.\n\ub124\ud2b8\uc6cc\ud06c \uc5f0\uacb0\uc744 \ud655\uc778\ud558\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694. ",
          "keep.desc.loadFromKeep":
            "Keep \ud30c\uc77c \ubd88\ub7ec\uc624\uae30",
          "keep.desc.loadingData":
            "\ub370\uc774\ud130\ub97c \ubd88\ub7ec\uc624\ub294 \uc911\uc785\ub2c8\ub2e4. \uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694.",
          "keep.desc.maximumUploadableSize.plurals.few": "",
          "keep.desc.maximumUploadableSize.plurals.many": "",
          "keep.desc.maximumUploadableSize.plurals.one": "",
          "keep.desc.maximumUploadableSize.plurals.other": "",
          "keep.desc.maximumUploadableSize.plurals.two": "",
          "keep.desc.maximumUploadableSize.plurals.zero": "",
          "keep.desc.noSearchResult":
            "\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "keep.desc.noSelectableItem":
            "\uc120\ud0dd\ud560 \uc218 \uc788\ub294 \ud56d\ubaa9\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "keep.desc.notSupportType":
            "\uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ud30c\uc77c \ud615\uc2dd\uc785\ub2c8\ub2e4. ",
          "keep.desc.notifyPeriod":
            "%1MB \uc774\uc0c1\uc758 \ud30c\uc77c\uc740 30\uc77c \ub3d9\uc548 \ubcf4\uad00\ub429\ub2c8\ub2e4. ",
          "keep.desc.photoLoadFailed":
            "\uc0ac\uc9c4 \ubd88\ub7ec\uc624\uae30\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \n\ub124\ud2b8\uc6cc\ud06c \uc5f0\uacb0\uc744 \ud655\uc778\ud558\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694. ",
          "keep.desc.quit.uploading":
            "Keep\uc5d0 \uc5c5\ub85c\ub4dc\uac00 \uc9c4\ud589 \uc911\uc778 \ud30c\uc77c\uc774 \uc788\uc2b5\ub2c8\ub2e4.\nLINE\uc744 \uc885\ub8cc\ud558\uba74 \uc77c\ubd80 \uc5c5\ub85c\ub4dc\uac00 \uc644\ub8cc\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "keep.desc.requesturl.failed.error":
            "URL \uc815\ubcf4\ub97c \ubd88\ub7ec\uc624\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "keep.desc.retry":
            "\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "keep.desc.saved": "\uc800\uc7a5\ud588\uc2b5\ub2c8\ub2e4. ",
          "keep.desc.savedInKeep":
            "Keep\uc5d0 \uc800\uc7a5\ud588\uc2b5\ub2c8\ub2e4.",
          "keep.desc.saving": "\uc800\uc7a5\uc911",
          "keep.desc.storageFull":
            "Keep\uc758 \uc800\uc7a5 \uacf5\uac04\uc774 \ubd80\uc871\ud569\ub2c8\ub2e4.",
          "keep.desc.storageFull.freeUpSpace":
            "Keep\uc758 \uc800\uc7a5 \uacf5\uac04\uc774 \ubd80\uc871\ud569\ub2c8\ub2e4. \uc800\uc7a5 \uacf5\uac04\uc744 \ud655\ubcf4\ud55c \ud6c4 \uc774\uc6a9\ud574 \uc8fc\uc138\uc694. ",
          "keep.desc.storageFull.unable":
            "Keep\uc758 \uc800\uc7a5 \uacf5\uac04\uc774 \ubd80\uc871\ud558\uc5ec \ud56d\ubaa9\uc744 \ub354 \uc774\uc0c1 \ucd94\uac00\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "keep.desc.storageFull.unableToSelect":
            "Keep\uc758 \uc800\uc7a5 \uacf5\uac04\uc774 \ubd80\uc871\ud558\uc5ec \ud56d\ubaa9\uc744 \ub354 \uc774\uc0c1 \uc120\ud0dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. ",
          "keep.desc.temporaryError":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \uc694\uccad\ud55c \n\uc791\uc5c5\uc744 \uc644\ub8cc\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "keep.desc.totalSpace": "\uc804\uccb4 \uc6a9\ub7c9 %1",
          "keep.desc.unexpectedErrorOccured":
            "\uc54c \uc218 \uc5c6\ub294 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",
          "keep.desc.upload.error.maxFileSize":
            "%1GB \uc774\uc0c1\uc758 \ud30c\uc77c\uc740 \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\ud30c\uc77c \uc6a9\ub7c9\uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694.",
          "keep.desc.upload.inProgress":
            "Keep \uc5c5\ub85c\ub4dc \uc9c4\ud589 \uc911",
          "keep.desc.upload.notifyIncompleteUpload":
            "Keep\uc5d0 \uc5c5\ub85c\ub4dc\uac00 \uc9c4\ud589 \uc911\uc778 \ud30c\uc77c\uc774 \uc788\uc2b5\ub2c8\ub2e4. \nLINE\uc744 \uc885\ub8cc\ud558\uba74 \uc77c\ubd80 \uc5c5\ub85c\ub4dc\uac00 \uc644\ub8cc\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "keep.desc.uploadFail.storage.plurals.few": "",
          "keep.desc.uploadFail.storage.plurals.many": "",
          "keep.desc.uploadFail.storage.plurals.one": "",
          "keep.desc.uploadFail.storage.plurals.other": "",
          "keep.desc.uploadFail.storage.plurals.two": "",
          "keep.desc.uploadFail.storage.plurals.zero": "",
          "keep.desc.uploadFailed": "\uc5c5\ub85c\ub4dc \uc2e4\ud328",
          "keep.desc.uploadPending": "\uc5c5\ub85c\ub4dc \ub300\uae30\uc911",
          "keep.desc.uploading": "\uc5c5\ub85c\ub4dc \uc911",
          "keep.desc.usableSpace": "%1 \uc0ac\uc6a9\ub428",
          "keep.desc.videoLoadFailed":
            "\ub3d9\uc601\uc0c1 \ubd88\ub7ec\uc624\uae30\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \n\ub124\ud2b8\uc6cc\ud06c \uc5f0\uacb0\uc744 \ud655\uc778\ud558\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694. ",
          "keep.desc.wait":
            "\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694.",
          "keep.desc.warning.deleteAll":
            "\ubaa8\ub4e0 \ud30c\uc77c\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\uc0ad\uc81c\ub41c \ud30c\uc77c\uc740 \ubcf5\uc6d0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "keep.desc.warning.deleteAll.chromeUser":
            "\ubaa8\ub4e0 \ud30c\uc77c\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\uc0ad\uc81c \uc2dc Chrome \uba54\ubaa8 \ud30c\uc77c\ub3c4 \ud568\uaed8 \uc0ad\uc81c\ub429\ub2c8\ub2e4. \n\uc0ad\uc81c\ub41c \ud30c\uc77c\uc740 \ubcf5\uc6d0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "keep.download.btn": "\ud3f4\ub354 \uc5f4\uae30",
          "keep.download.success":
            "\ub2e4\uc6b4\ub85c\ub4dc\ub97c \uc644\ub8cc\ud588\uc2b5\ub2c8\ub2e4.",
          "keep.emptytitle.title":
            "\uac04\uc9c1\ud558\uace0 \uc2f6\uc740 \uac83\ub4e4\uc740 Keep\ud558\uc138\uc694!",
          "keep.full.sync.working": "\ub3d9\uae30\ud654\uc911\u2026 %1%",
          "keep.home.bannerdesc.endofkeep":
            "%1\uae4c\uc9c0 Keep\uc5d0 \ubcf4\uad00\ub41c \ucf58\ud150\uce20\ub97c \ubc31\uc5c5\ud574 \uc8fc\uc138\uc694.",
          "keep.home.bannertitle.endofkeep":
            "Keep \uc11c\ube44\uc2a4 \uc885\ub8cc \uc548\ub0b4",
          "keep.home.desc.timeformat": "yyyy\ub144 M\uc6d4 d\uc77c",
          "keep.home.emptydesc.descforplaces":
            "\uacf5\uc2dd \uacc4\uc815\uc774\ub098 LINE PLACE \ub4f1\uc5d0\uc11c \uba4b\uc9c4 \uc7a5\uc18c\ub97c \ubc1c\uacac\ud558\uba74 Keep\uc5d0 \uc800\uc7a5\ud574 \ubcf4\uc138\uc694.",
          "keep.home.popupbutton.close": "\ub2eb\uae30",
          "keep.home.popupbutton.dontshowagain":
            "\ub2e4\uc2dc \uc548 \ubcf4\uae30",
          "keep.home.popupbutton.learnmore":
            "\uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30",
          "keep.home.popupdesc.endofkeep":
            "%1\uc5d0 Keep \uc11c\ube44\uc2a4\uac00 \uc885\ub8cc\ub429\ub2c8\ub2e4. \uc11c\ube44\uc2a4 \uc885\ub8cc \uc804\uae4c\uc9c0 Keep\uc5d0 \ubcf4\uad00\ub41c \ucf58\ud150\uce20\ub97c \ubc31\uc5c5\ud574 \uc8fc\uc138\uc694.\n*\uc11c\ube44\uc2a4 \uc885\ub8cc \ud6c4\uc5d0\ub3c4 Keep \uba54\ubaa8 \ub300\ud654\ubc29\uc740 \uacc4\uc18d\ud574\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "keep.home.popuptitle.endofkeep":
            "Keep \uc11c\ube44\uc2a4 \uc885\ub8cc \ubc0f \ucf58\ud150\uce20 \ubc31\uc5c5 \uc548\ub0b4",
          "keep.home.tab.places": "\uc7a5\uc18c",
          "keep.home.toast.pinneditems": "\uace0\uc815\ub41c \ud56d\ubaa9",
          "keep.itemspicker.popupdesc.itemsharinglimit":
            "\ucd5c\ub300 20\uac1c\uae4c\uc9c0 \uacf5\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "keep.keepitem.itemsenttokeepmemoexpired":
            "Keep \uba54\ubaa8\uc5d0 \uc804\uc1a1\ud55c \ub0b4\uc6a9\uc758 \uc800\uc7a5 \uae30\uac04\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "keep.keepmemoguide.popupdesc.itemssenttokeepmemoshowninkeep":
            "Keep \uba54\ubaa8\uc5d0 \uc804\uc1a1\ud55c \ub0b4\uc6a9\uc740 \uc5f0\ub3d9\ub41c Keep\uc5d0\uc11c \uac04\ud3b8\ud558\uac8c \uad00\ub9ac\ud560 \uc218 \uc788\uc5b4\uc694.",
          "keep.keepmemoguide.popupdesc.piniimportantitems":
            "\uc790\uc8fc \ud655\uc778\ud558\ub294 \ub0b4\uc6a9\uc740 \ud654\uba74 \uc0c1\ub2e8\uc5d0\n\ud540\uc73c\ub85c \uace0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "keep.keepmemoguide.popupdesc.savekeepmemocontentforeverinkeep":
            "Keep\uc5d0\uc11c \uc800\uc7a5, \ud3b8\uc9d1, \uace0\uc815, \uceec\ub809\uc158 \ucd94\uac00\ud55c Keep \uba54\ubaa8 \ucf58\ud150\uce20\ub294 \uc800\uc7a5 \uacf5\uac04\uc5d0 \uc601\uad6c \ubcf4\uad00\ub429\ub2c8\ub2e4.",
          "keep.keepmemoguide.popuptitle.introducingkeepmemo":
            "Keep \uba54\ubaa8\uc5d0 \uc804\uc1a1\ud558\uace0, Keep\uc5d0\uc11c \ud655\uc778\ud558\uace0!",
          "keep.keepmemoguide.popuptitle.keepitemsforever":
            "Keep \uba54\ubaa8 \ub0b4\uc6a9\uc744 \uc624\ub798 \uac04\uc9c1\ud558\uace0 \uc2f6\ub2e4\uba74?",
          "keep.keepmemoguide.popuptitle.pinningitems":
            "\uc911\uc694\ud55c \ub0b4\uc6a9\uc740 Keep \ud654\uba74 \uc0c1\ub2e8\uc5d0 \uace0\uc815!",
          "keep.label.add": "\ucd94\uac00",
          "keep.label.addText": "\uc0c8 \uae00",
          "keep.label.capture": "\ud654\uba74\xa0\ucea1\ucc98",
          "keep.label.chromeMemo": "Chrome \uba54\ubaa8",
          "keep.label.copy": "\ubcf5\uc0ac",
          "keep.label.createdTime": "\uc0dd\uc131\uc2dc\uac04",
          "keep.label.delete": "\uc0ad\uc81c",
          "keep.label.deleteAll": "\uc804\uccb4 \ube44\uc6b0\uae30",
          "keep.label.deleting": "\uc0ad\uc81c\uc911",
          "keep.label.details": "\uc0c1\uc138\uc815\ubcf4",
          "keep.label.download": "\ub2e4\uc6b4\ub85c\ub4dc",
          "keep.label.edit": "\ud3b8\uc9d1",
          "keep.label.emptyText": "\ub0b4\uc6a9 \uc5c6\uc74c",
          "keep.label.expired": "\ub9cc\ub8cc",
          "keep.label.fileSize": "\ud30c\uc77c\ud06c\uae30",
          "keep.label.from": "\ubcf4\ub0b8\uc0ac\ub78c",
          "keep.label.goToKeep": "Keep \uc5f4\uae30",
          "keep.label.hitocoto": "\uc624\ub298\uc758 \ud55c\ub9c8\ub514",
          "keep.label.justNow": "\uc870\uae08 \uc804",
          "keep.label.learnMore": "\uc54c\uc544\ubcf4\uae30",
          "keep.label.modifiedTime": "\ucd5c\uadfc \uc218\uc815\uc2dc\uac04",
          "keep.label.more": "\ub354\ubcf4\uae30",
          "keep.label.newMemo": "\uba54\ubaa8",
          "keep.label.open": "\uc5f4\uae30",
          "keep.label.openkeepmemo": "Keep \uba54\ubaa8\ub85c \uc774\ub3d9",
          "keep.label.order.stored": "\uc800\uc7a5\ub41c \ub0a0\uc9dc \uc21c",
          "keep.label.order.updated":
            "\uc5c5\ub370\uc774\ud2b8\ub41c \ub0a0\uc9dc \uc21c",
          "keep.label.paste": "\ubd99\uc5ec\ub123\uae30",
          "keep.label.pause": "\uc77c\uc2dc\uc815\uc9c0",
          "keep.label.period": "\ubcf4\uad00\uae30\uac04",
          "keep.label.pin": "\uace0\uc815",
          "keep.label.play": "\uc7ac\uc0dd",
          "keep.label.playTime": "\uc7ac\uc0dd\uc2dc\uac04",
          "keep.label.refresh": "\uc0c8\ub85c\uace0\uce68",
          "keep.label.resolution": "\ud574\uc0c1\ub3c4",
          "keep.label.save": "\uc800\uc7a5",
          "keep.label.saveInKeep": "Keep\uc5d0 \uc800\uc7a5",
          "keep.label.savedTime": "\uc800\uc7a5\uc2dc\uac04",
          "keep.label.search": "\uc804\uccb4 \uac80\uc0c9",
          "keep.label.searchResult": "\uac80\uc0c9 \uacb0\uacfc",
          "keep.label.send": "\uc804\uc1a1",
          "keep.label.settings": "\uc124\uc815",
          "keep.label.shareToChat": "\ub300\ud654\ubc29\uc5d0 \uacf5\uc720",
          "keep.label.sortByDate": "\ub0a0\uc9dc\uc21c \uc815\ub82c",
          "keep.label.sortByName": "\uc774\ub984\uc21c \uc815\ub82c",
          "keep.label.sortBySize": "\ud06c\uae30\uc21c \uc815\ub82c",
          "keep.label.terminate": "LINE \uc885\ub8cc",
          "keep.label.tooltip": "Keep",
          "keep.label.unpin": "\uace0\uc815 \ud574\uc81c",
          "keep.label.upload": "\uc62c\ub9ac\uae30",
          "keep.label.uploadFile": "\ud30c\uc77c \uc5c5\ub85c\ub4dc",
          "keep.label.viewinkeepmemo":
            "Keep \uba54\ubaa8\uc5d0\uc11c \ubcf4\uae30",
          "keep.label.voiceMessage": "\uc74c\uc131\uba54\uc138\uc9c0",
          "keep.label.volume": "\uc0ac\uc6a9 \uc6a9\ub7c9",
          "keep.label.writememo.title": "\uba54\ubaa8",
          "keep.label.writetext.title": "\ud14d\uc2a4\ud2b8",
          "keep.main.desc.keepfadeout":
            "Keep \uae30\ub2a5\uc740 \ub354 \uc774\uc0c1 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. LINE \uc571\uc744 \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud574 \uc8fc\uc138\uc694.",
          "keep.title": "Keep",
          "keep.toast.itempinned":
            "\uace0\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "keep.toast.itemunpinned":
            "\uace0\uc815\uc774 \ud574\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "keepmemo.alert.deletemessage":
            "\ubcf4\ub0b8 \uba54\uc2dc\uc9c0\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \uc9c0\uae08 \uc0ac\uc6a9 \uc911\uc778 \uae30\uae30\uc5d0\uc11c\ub9cc \uc0ad\uc81c\ub429\ub2c8\ub2e4.",
          "keepmemo.alert.unsendmessage":
            "\ubcf4\ub0b4\uae30 \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \ub0b4 \ub2e4\ub978 \uae30\uae30\uc5d0 \uc124\uce58\ub41c LINE\uc5d0\uc11c\ub3c4 \uc0ad\uc81c\ub429\ub2c8\ub2e4. ",
          "keepmemo.category.all": "\uc804\uccb4",
          "keepmemo.category.files": "\ud30c\uc77c",
          "keepmemo.category.links": "\ub9c1\ud06c",
          "keepmemo.category.photos": "\uc0ac\uc9c4",
          "keepmemo.category.text": "\ud14d\uc2a4\ud2b8",
          "keepmemo.category.videos": "\ub3d9\uc601\uc0c1",
          "keepmemo.desc.noSelectableItem":
            "\uc120\ud0dd\ud560 \uc218 \uc788\ub294 \ucf58\ud150\uce20\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "keepmemo.itemspicker.popupdesc.itemsharinglimit":
            "\ucf58\ud150\uce20\ub294 \ud55c \ubc88\uc5d0 \ucd5c\ub300 20\uac1c\uae4c\uc9c0 \uacf5\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "keepmemo.label.goToKeepMemo": "Keep \uba54\ubaa8\ub85c \uc774\ub3d9",
          "keepmemo.label.search": "\uac80\uc0c9",
          "keepmemo.label.sendToKeepMemo":
            "Keep \uba54\ubaa8\uc5d0 \uacf5\uc720",
          "keepmemo.label.share": "\uacf5\uc720",
          "keepmemo.label.tooltip": "Keep \uba54\ubaa8",
          "keepmemo.msg.desc.systemmsg":
            "\ub098\ub9cc \ubcfc \uc218 \uc788\ub294 \ub300\ud654\ubc29\uc5d0 \ud14d\uc2a4\ud2b8, \uc0ac\uc9c4, \ub9c1\ud06c \ub4f1\uc744 \uac04\ud3b8\ud558\uac8c \uc804\uc1a1\ud574 \ubcf4\uc138\uc694.",
          "keepmemo.title": "Keep \uba54\ubaa8\uc5d0 \uacf5\uc720",
          "keyword.notice.btn": "\ud0a4\uc6cc\ub4dc \ub4f1\ub85d\ud558\uae30",
          "keyword.notice.desc":
            "\uc774\ub984 \ub4f1 \ud2b9\uc815 \ub2e8\uc5b4\ub97c \ub4f1\ub85d\ud558\uba74, \ub2e8\uc5b4\uac00 \ud3ec\ud568\ub41c \uba54\uc2dc\uc9c0 \uc54c\ub9bc\uc744 \ubc1b\uc744 \uc218 \uc788\uc5b4\uc694.",
          "keyword.notice.title": "\ud0a4\uc6cc\ub4dc \uc54c\ub9bc",
          "keyword.notification.desc": "\ud0a4\uc6cc\ub4dc \uc54c\ub9bc",
          "kickout.all.v3":
            "\uc790\ub3d9 \ub85c\uadf8\uc544\uc6c3\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ub85c\uadf8\uc778\ud574 \uc8fc\uc138\uc694.",
          "kickout.dormant.account":
            "\ubaa8\ubc14\uc77c \ubc84\uc804\uc5d0\uc11c \ub4f1\ub85d\ud55c \uc774\uba54\uc77c\ub85c \ub85c\uadf8\uc778\ud558\uc5ec \uacc4\uc815 \uc778\uc99d\uc744 \uc9c4\ud589\ud574 \uc8fc\uc138\uc694.",
          "kickout.email.account.modified":
            "\uc774\uba54\uc77c\uc744 \uc2e0\uaddc \ub4f1\ub85d\ud558\uac70\ub098 \ube44\ubc00\ubc88\ud638\ub97c \ubcc0\uacbd\ud558\uc5ec \ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "kickout.expired":
            "\uc624\ub79c \uc2dc\uac04\ub3d9\uc548 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc544\n\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "kickout.networkError":
            "\ub124\ud2b8\uc6cc\ud06c \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc5ec \uacc4\uc815\uc5d0\uc11c \ub85c\uadf8\uc544\uc6c3\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ub85c\uadf8\uc778\ud574 \uc8fc\uc138\uc694.",
          "kickout.noAllowedSecondaryDevice":
            "\ubaa8\ubc14\uc77c\uc5d0\uc11c \uc811\uc18d\uc744 \ucc28\ub2e8\ud558\uc5ec\n\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "kickout.notAuthorizedDevice":
            "\ub2e4\ub978 PC\uc5d0\uc11c \ub85c\uadf8\uc778\ud558\uc5ec \ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.   ",
          "kickout.notAvailableUser":
            "\ub2e4\ub978 \uae30\uae30\uc5d0\uc11c LINE\uc744 \ud0c8\ud1f4\ud558\uc5ec \ub85c\uadf8\uc544\uc6c3\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "kickout.passwordChanged":
            "\ub124\uc774\ubc84\ub97c \ud0c8\ud1f4\ud558\uc5ec \ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",
          "kickout.serverError":
            "\uc11c\ubc84 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc5ec \uacc4\uc815\uc5d0\uc11c \ub85c\uadf8\uc544\uc6c3\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ub85c\uadf8\uc778\ud574 \uc8fc\uc138\uc694. ",
          "kickout.serverMaintenance":
            "\uc11c\ubc84 \uc810\uac80 \uc911\uc785\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \ub85c\uadf8\uc778\ud574 \uc8fc\uc138\uc694.",
          "kickout.serviceMaintenance":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc5ec \uacc4\uc815\uc5d0\uc11c \ub85c\uadf8\uc544\uc6c3\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ub85c\uadf8\uc778\ud574 \uc8fc\uc138\uc694.",
          "kickout.square.server.fail":
            "\uc624\ud508\ucc57 \uc778\uc99d \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\uc5ec \ub85c\uadf8\uc544\uc6c3\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ub85c\uadf8\uc778\ud574 \uc8fc\uc138\uc694.",
          "line.keepmemoguide.popupdesc.page1":
            "\uba54\ubaa8, \uc0ac\uc9c4 \ub4f1\uc744 Keep \uba54\ubaa8\uc5d0 \uc790\uc720\ub86d\uac8c \uacf5\uc720\ud574 \ubcf4\uc138\uc694.",
          "line.keepmemoguide.popuptitle.page1":
            "\ub098\ub9cc \ubcfc \uc218 \uc788\ub294 \ub300\ud654\ubc29 'Keep \uba54\ubaa8'",
          "line.secondarylogin.popupdesc.updatelineerror.desk":
            "LINE\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "line.secondarylogin.popuptitle.updatelineerror.desk": "\uc624\ub958",
          "line.updatepopup.button.leave": "\ub098\uac00\uae30",
          "linechrome.chat.desc.unsupportedmessage":
            "LINE Chrome\uc5d0\uc11c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uba54\uc2dc\uc9c0\uc785\ub2c8\ub2e4. \ubaa8\ubc14\uc77c\uc5d0\uc11c \uc0ac\uc6a9\ud574 \uc8fc\uc138\uc694",
          "linechrome.chat.desc.unsupportedstickers":
            "LINE Chrome\uc5d0\uc11c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uc2a4\ud2f0\ucee4\uc785\ub2c8\ub2e4. \n\ubaa8\ubc14\uc77c\uc5d0\uc11c \uc0ac\uc6a9\ud574 \uc8fc\uc138\uc694",
          "linechrome.chat.toast.nofolders":
            "\ud3f4\ub354\ub294 \ubcf4\ub0bc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "linechrome.chat.toast.supportedlanguage":
            "LINE Chrome\uc774 \ubc88\uc5ed\ud55c \uc5b8\uc5b4\ub97c \uc9c0\uc6d0\ud569\ub2c8\ub2e4. \ud658\uacbd \uc124\uc815\uc5d0\uc11c \uc5b8\uc5b4\ub97c \ubcc0\uacbd\ud574 \ubcf4\uc138\uc694.",
          "linechrome.end.desc.endline":
            "LINE\uc744 \uc885\ub8cc\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "linechrome.main.button.mute1":
            "1\uc2dc\uac04 \ub3d9\uc548 \uc54c\ub9bc \ub044\uae30",
          "linechrome.main.button.mute2":
            "2\uc2dc\uac04 \ub3d9\uc548 \uc54c\ub9bc \ub044\uae30",
          "linechrome.main.button.mute24":
            "24\uc2dc\uac04 \ub3d9\uc548 \uc54c\ub9bc \ub044\uae30",
          "linechrome.main.button.mute30":
            "30\ubd84 \ub3d9\uc548 \uc54c\ub9bc \ub044\uae30",
          "linechrome.main.desc.unmutehour":
            "%1\uc2dc\uac04 \ud6c4\uc5d0 \uc54c\ub9bc \ucf1c\uc9d0",
          "linechrome.main.desc.unmuteminute":
            "%1\ubd84 \ud6c4\uc5d0 \uc54c\ub9bc \ucf1c\uc9d0",
          "linechrome.main.desc.unmutesecond.other":
            "%1\ucd08 \ud6c4\uc5d0 \uc54c\ub9bc \ucf1c\uc9d0",
          "linemusic.playlist": "\ud50c\ub808\uc774\ub9ac\uc2a4\ud2b8",
          "linemusic.title": "LINE MUSIC",
          "linemusic.topic": "\ud1a0\ud53d",
          "lockscreen.kickout.accountError":
            "\ube44\ubc00\ubc88\ud638\ub97c \uc5ec\ub7ec \ubc88 \uc798\ubabb \uc785\ub825\ud558\uc5ec \uac15\uc81c \ub85c\uadf8\uc544\uc6c3 \ub429\ub2c8\ub2e4.",
          "lockscreen.lockscreen.text":
            "\uc7a0\uae08 \ubaa8\ub4dc \uc0c1\ud0dc\uc785\ub2c8\ub2e4. ",
          "lockscreen.msg.alert.oncalling":
            "\uc7a0\uae08 \ubaa8\ub4dc\ub97c \uc2e4\ud589\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\uc7a0\uae08 \ubaa8\ub4dc \uc2e4\ud589 \uc2dc \uc9c4\ud589 \uc911\uc778 \ud1b5\ud654\uac00 \uc885\ub8cc\ub429\ub2c8\ub2e4.",
          "lockscreen.msg.unlock.description":
            "\uc7a0\uae08 \ubaa8\ub4dc\ub97c \uc2e4\ud589\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\uc7a0\uae08 \ubaa8\ub4dc \ud574\uc81c \uc2dc \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4.",
          "lockscreen.msg.unlockAuto.description":
            "PC \ubbf8\uc0ac\uc6a9 \uc2dc \uc7a0\uae08 \ubaa8\ub4dc\ub97c \uc2e4\ud589\ud558\ub3c4\ub85d \uc124\uc815\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\uc7a0\uae08 \ubaa8\ub4dc \ud574\uc81c \uc2dc \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4.",
          "lockscreen.password.fail":
            "\ube44\ubc00\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ud655\uc778 \ud6c4 \ub2e4\uc2dc \uc785\ub825\ud574\uc8fc\uc138\uc694.",
          "lockscreen.password.text":
            "\uc7a0\uae08 \ubaa8\ub4dc\ub97c \ud574\uc81c\ud558\ub824\uba74 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "lockscreen.password.unlock.btn": "\ud574\uc81c",
          "login.btn.emailQRcode.login":
            "\uc774\uba54\uc77c/QR\ucf54\ub4dc \ub85c\uadf8\uc778 >",
          "login.btn.login": "\ub85c\uadf8\uc778",
          "login.btn.signUp": "\ud68c\uc6d0\uac00\uc785",
          "login.emailLogin.identity.credential.error":
            "\uc774\uba54\uc77c \ud615\uc2dd\uc774 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \ud55c \ubc88 \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "login.emailLogin.label.error.accountError":
            "LINE\uc5d0 \ub4f1\ub85d\ub418\uc9c0 \uc54a\uc558\uac70\ub098 \uc798\ubabb\ub41c \uc774\uba54\uc77c \ub610\ub294 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud588\uc2b5\ub2c8\ub2e4.",
          "login.emailLogin.label.error.inputError":
            "\uc774\uba54\uc77c/\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
          "login.emailLogin.link.changeToNaverLogin":
            "\ub124\uc774\ubc84 \ub85c\uadf8\uc778",
          "login.emailLogin.link.findPassword": "\ube44\ubc00\ubc88\ud638",
          "login.emailLogin.placeHolder.email": "\uc774\uba54\uc77c",
          "login.emailLogin.placeHolder.emailwithPhoneNumber":
            "\uc774\uba54\uc77c \ub610\ub294 \uc804\ud654\ubc88\ud638",
          "login.emailLogin.placeHolder.password": "\ube44\ubc00\ubc88\ud638",
          "login.emailLogin.popup.findPassword":
            "\ubaa8\ubc14\uc77c LINE \uc571\uc758 [\uc124\uc815> \uacc4\uc815> \uc774\uba54\uc77c \ub4f1\ub85d]\uc5d0\uc11c\n\uc774\uba54\uc77c \ubc0f \ube44\ubc00\ubc88\ud638\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\n\ub124\uc774\ubc84 \uc544\uc774\ub514\ub294 \ub354 \uc774\uc0c1 \uc774\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\ubaa8\ubc14\uc77c LINE \uc571\uc758 \ucd5c\uc2e0\ubc84\uc804\uc5d0\uc11c\n\uc774\uba54\uc77c\uc744 \ub4f1\ub85d \ud6c4 \uc774\uc6a9\ud574\uc8fc\uc138\uc694.",
          "login.error.auth.failed":
            "\ub2e4\ub978 PC\uc5d0\uc11c \ub85c\uadf8\uc778\ud558\uac70\ub098\n\ub85c\uadf8\uc778 \uc720\ud6a8\uae30\uac04\uc774 \uc9c0\ub098\n\uc790\ub3d9 \ub85c\uadf8\uc778\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. ",
          "login.label.certificate.not.vaild":
            "\ubcf4\uc548 \uc778\uc99d\uc11c\ub97c \uc801\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \nPC \ub0a0\uc9dc\ub97c \ubc14\ub974\uac8c \uc124\uc815\ud574\uc8fc\uc138\uc694.",
          "login.label.doingLogin":
            "\ub85c\uadf8\uc778 \uc911\uc785\ub2c8\ub2e4...",
          "login.label.error.auth.failed.anotherPC":
            "\ub2e4\ub978 PC\uc5d0\uc11c \ub85c\uadf8\uc778\ud558\uc5ec \uc790\ub3d9\uc73c\ub85c \ub85c\uadf8\uc778\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "login.label.error.auth.failed.loginExpired":
            "\ub85c\uadf8\uc778 \uc720\ud6a8\uae30\uac04\uc774 \uc9c0\ub098 \uc790\ub3d9\uc73c\ub85c \ub85c\uadf8\uc778\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "login.label.error.dberror":
            "\uc77c\ubd80 \ub370\uc774\ud130\uc5d0 \ubc1c\uc0dd\ud55c \ubb38\uc81c\ub97c \ubcf5\uad6c\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ub85c\uadf8\uc778 \ud574\uc8fc\uc138\uc694.",
          "login.label.error.dormant.account":
            "\ubaa8\ubc14\uc77c \ubc84\uc804\uc5d0\uc11c \ub4f1\ub85d\ud55c \uc774\uba54\uc77c\ub85c \ub85c\uadf8\uc778\ud558\uc5ec \uacc4\uc815 \uc778\uc99d\uc744 \uc9c4\ud589\ud574 \uc8fc\uc138\uc694.",
          "login.label.error.extraError":
            "\uc77c\uc2dc\uc801\uc73c\ub85c \ub85c\uadf8\uc778\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "login.label.error.keyboardError":
            "\ud0a4\ubcf4\ub4dc\ub97c \uc601\ubb38\uc73c\ub85c \ubcc0\ud658\ud6c4 \uc0ac\uc6a9\ud574\uc8fc\uc138\uc694.",
          "login.label.error.networkError":
            "\ub85c\uadf8\uc778\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\xa0\ub124\ud2b8\uc6cc\ud06c \uc5f0\uacb0 \uc0c1\ud0dc\ub97c \ud655\uc778\ud55c \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "login.label.error.pinCode":
            "\uc778\uc99d\ubc88\ud638\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ubc88\ud638\ub97c \ud655\uc778\ud55c \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "login.label.error.schemeError":
            "\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.label.error.serverError":
            "\uc11c\ubc84 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "login.label.error.serverMaintenance":
            "\uc11c\ubc84 \uc810\uac80 \uc911\uc785\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "login.label.error.verification.timeout":
            "\uc778\uc99d\ubc88\ud638 \uc785\ub825 \uc2dc\uac04\uc774 \ucd08\uacfc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc778\uc99d\ubc88\ud638\ub97c \ub2e4\uc2dc \uc694\uccad\ud574 \uc8fc\uc138\uc694.",
          "login.label.searching.network":
            "\ucd5c\uc801\ud654\ub41c \ub124\ud2b8\uc6cc\ud06c \ud658\uacbd\uc744 \ud0d0\uc0c9 \uc911\uc785\ub2c8\ub2e4.",
          "login.loginwithsmartphone.tooltip":
            "\ud734\ub300\ud3f0 \uc778\uc99d\uc73c\ub85c \uac04\ud3b8\ud558\uac8c \ub85c\uadf8\uc778\ud560 \uc218 \uc788\uc5b4\uc694.",
          "login.naverLogin.checkbox.keepLoginStatus":
            "\uc790\ub3d9 \ub85c\uadf8\uc778",
          "login.naverLogin.checkbox.startUpWin":
            "\uc708\ub3c4\uc6b0 \uc2dc\uc791 \uc2dc \uc790\ub3d9 \uc2e4\ud589",
          "login.naverLogin.label.error.inputError":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
          "login.naverLogin.label.error.proxyError":
            "\ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.\n\ud504\ub85d\uc2dc \uc11c\ubc84 \uc124\uc815\uc744 \ub2e4\uc2dc \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "login.naverLogin.link.changeToEmailLogin":
            "\uc774\uba54\uc77c \ub85c\uadf8\uc778",
          "login.naverLogin.link.findIDPassword1":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638 \ucc3e\uae30",
          "login.naverLogin.link.findIDPassword2":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638 \ucc3e\uae30",
          "login.naverLogin.placeHolder.naverID":
            "\ub124\uc774\ubc84 \uc544\uc774\ub514",
          "login.naverLogin.placeHolder.password": "\ube44\ubc00\ubc88\ud638",
          "login.naverLogin.url.ID":
            "https://nid.naver.com/user/help.nhn?todo=idinquiry",
          "login.naverLogin.url.pass":
            "https://nid.naver.com/user/help.nhn?todo=pwinquiry",
          "login.otp.link.title": "OTP \ub3c4\uc6c0\ub9d0",
          "login.otp.link.url":
            "https://help.naver.com/support/contents/contents.nhn?serviceNo=532&categoryNo=1533",
          "login.password.ascii.error":
            "\ud0a4\ubcf4\ub4dc \uc5b8\uc5b4\ub97c \uc601\uc5b4\ub85c \ubcc0\uacbd\ud574\uc8fc\uc138\uc694.",
          "login.phoneNumberLogin.alert.info":
            "PC\uc5d0\uc11c \uac00\uc785\ud55c \uc0ac\uc6a9\uc790\ub9cc \uc804\ud654\ubc88\ud638\ub85c \ub85c\uadf8\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.phoneNumberLogin.alert.networkerror":
            "\ub124\ud2b8\uc6cc\ud06c \uc624\ub958\ub85c \uc644\ub8cc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "login.phoneNumberLogin.identity.credential.error":
            "\uc804\ud654\ubc88\ud638 \ud615\uc2dd\uc774 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \ud55c \ubc88 \ud655\uc778\ud574\uc8fc\uc138\uc694.",
          "login.phoneNumberLogin.label.country": "\uad6d\uac00 \uc120\ud0dd",
          "login.phoneNumberLogin.label.error.accountError":
            "LINE\uc5d0 \ub4f1\ub85d\ub418\uc9c0 \uc54a\uc558\uac70\ub098 \uc798\ubabb\ub41c \uc804\ud654\ubc88\ud638 \ub610\ub294 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud588\uc2b5\ub2c8\ub2e4.",
          "login.phoneNumberLogin.label.error.inputError":
            "\uc804\ud654\ubc88\ud638/\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
          "login.phoneNumberLogin.placeHolder.password":
            "\ube44\ubc00\ubc88\ud638",
          "login.phoneNumberLogin.placeHolder.phone":
            "\uc804\ud654\ubc88\ud638",
          "login.phoneNumberLogin.placeHolder.search": "\uac80\uc0c9",
          "login.phoneNumberLogin.verification.desc":
            "\uc548\uc804\ud55c \uc774\uc6a9\uc744 \uc704\ud574 \ucc98\uc74c \uc811\uc18d\ud55c PC\uc5d0\uc11c\ub294 \ubcf8\uc778 \ud655\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.\nSMS\ub85c \uc218\uc2e0\ub41c \uc778\uc99d\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694. \uc778\uc99d\ubc88\ud638\ub97c \ubc1b\uc9c0 \ubabb\ud55c \uacbd\uc6b0 \ub2e4\uc74c \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uc138\uc694.\xa0",
          "login.popup.abuse":
            "\ub3d9\uc77c\ud55c IP\uc5d0\uc11c \uc5ec\ub7ec \ubc88 \ub85c\uadf8\uc778\uc5d0 \uc2e4\ud328\ud588\uae30 \ub54c\ubb38\uc5d0 \ub85c\uadf8\uc778\uc774 \uc81c\ud55c\ub429\ub2c8\ub2e4. QR \ucf54\ub4dc\ub85c \ub85c\uadf8\uc778\ud574 \uc8fc\uc138\uc694.",
          "login.popup.error.diskFull":
            "\ub514\uc2a4\ud06c \uc6a9\ub7c9\uc774 1GB \ubbf8\ub9cc\uc785\ub2c8\ub2e4.\nLINE \uc0ac\uc6a9\uc5d0 \uc81c\uc57d\uc774 \uc788\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.popup.kickout.r0":
            "\ub2e4\ub978 PC\uc5d0\uc11c \ub85c\uadf8\uc778 \ud55c \uacbd\uc6b0",
          "login.popup.kickout.r1":
            "\uc7a5\uc2dc\uac04 \uc544\ubb34\ub7f0 \uc785\ub825\uc744 \ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0",
          "login.popup.kickout.r2":
            "\ubaa8\ubc14\uc77c\uc5d0\uc11c \ub85c\uadf8\uc544\uc6c3 \uc2dc\ud0a8 \uacbd\uc6b0",
          "login.popup.kickout.r3":
            "LINE\uacc4\uc815\uc744 \uc0ad\uc81c\ud55c \uacbd\uc6b0",
          "login.popup.kickout.r4":
            "\ub124\uc774\ubc84\ub97c \ud0c8\ud1f4\ud558\uac70\ub098 \ube44\ubc00\ubc88\ud638\ub97c \ubcc0\uacbd\ud55c \uacbd\uc6b0",
          "login.popup.kickout.r5":
            "\uc11c\ubc84 \uc810\uac80\uc73c\ub85c \uc0ac\uc6a9\uc774 \uc5b4\ub824\uc6b4 \uacbd\uc6b0",
          "login.popup.kickout.subtitle":
            "\ub2e4\uc74c\uacfc \uac19\uc740 \uacbd\uc6b0 \ub85c\uadf8\uc544\uc6c3 \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.popup.kickout.title":
            "LINE\uc5d0\uc11c \ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "login.qrLogin.desc.error.expired":
            "QR \ucf54\ub4dc\uac00 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\uc0c8\ub85c\uace0\uce68 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec \uc0c8 QR \ucf54\ub4dc\ub97c \ub9cc\ub4e4\uc5b4 \uc8fc\uc138\uc694.",
          "login.qrLogin.desc.error.network":
            "QR\xa0\ucf54\ub4dc\ub97c \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\ub124\ud2b8\uc6cc\ud06c \uc5f0\uacb0\uc744 \ud655\uc778\ud558\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "login.qrLogin.desc.howto":
            "LINE \ubaa8\ubc14\uc77c \ubc84\uc804 \uac80\uc0c9\ucc3d\uc5d0\uc11c QR \ucf54\ub4dc \ub9ac\ub354\ub97c \uc5f4\uc5b4\nQR \ucf54\ub4dc\ub97c \uc2a4\uce94\ud574 \uc8fc\uc138\uc694.",
          "login.qrLogin.title": "QR \ucf54\ub4dc \ub85c\uadf8\uc778",
          "login.register.already":
            "\uc774\ubbf8 \uac00\uc785\ud558\uc168\ub2e4\uba74",
          "login.register.downloadLink":
            "\ubaa8\ubc14\uc77c LINE \uc571 \uc124\uce58\ud558\uae30 >>",
          "login.register.help.desc":
            "\ubaa8\ubc14\uc77c \ub77c\uc778 \uc571\uc5d0\uc11c \uac00\uc785\ud558\uace0 \uc774\uba54\uc77c\uc744 \ub4f1\ub85d\ud558\uba74 \nPC\ubc84\uc804\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.register.help.desc1":
            "\ubaa8\ubc14\uc77c \ub77c\uc778 \uc571\uc5d0\uc11c \uac00\uc785\ud558\uace0 \ub124\uc774\ubc84 \uc544\uc774\ub514\ub97c \n\ub4f1\ub85d\ud558\uba74 PC\ubc84\uc804\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.register.help.desc2":
            "\ubaa8\ubc14\uc77c\uc5d0\uc11c \ub77c\uc778\uc571 \uc124\uce58 \ud6c4 \ub124\uc774\ubc84 \uc544\uc774\ub514 \ub4f1\ub85d\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",
          "login.register.help.desc3":
            "\ubaa8\ubc14\uc77c \ub77c\uc778 \uc571\uc5d0\uc11c \uac00\uc785\ud558\uace0 \ub124\uc774\ubc84 \uc544\uc774\ub514\ub97c \n\ub4f1\ub85d\ud558\uba74 MAC\ubc84\uc804\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.register.link.android":
            "https://play.google.com/store/apps/details?id=jp.naver.line.android&hl=ko",
          "login.register.link.iphone":
            "https://itunes.apple.com/kr/app/line/id443904275?ls=1&mt=8",
          "login.register.link.wphone":
            "http://www.windowsphone.com/ko-KR/store/app/line/a18daaa9-9a1c-4064-91dd-794644cd88e7",
          "login.register.newmember": "\uc2e0\uaddc \uac00\uc785",
          "login.registration.password.reset":
            "\ube44\ubc00\ubc88\ud638 \ucc3e\uae30",
          "login.simpleLogin.btn.updateQrCode": "QR\ucf54\ub4dc \uac31\uc2e0",
          "login.simpleLogin.label.desc.normal":
            "\ubaa8\ubc14\uc77c LINE\uc758 [\uce5c\uad6c \ucd94\uac00]> [QR\ucf54\ub4dc]\uc5d0\uc11c QR\ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uba74 \ubc14\ub85c \ub85c\uadf8\uc778 \ub429\ub2c8\ub2e4.\n* \uc704 QR\ucf54\ub4dc\ub294 \ub85c\uadf8\uc778\uc5d0\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.simpleLogin.label.error.cannot.refresh.too.frequently":
            "\ud55c \ubc88 \uac31\uc2e0\ud55c QR\ucf54\ub4dc\ub294 \uc77c\uc815\uc2dc\uac04\n\uac31\uc2e0\uc774 \uc81c\ud55c\ub429\ub2c8\ub2e4. \uc7a0\uc2dc \uae30\ub2e4\ub824\uc8fc\uc138\uc694.",
          "login.simpleLogin.label.error.qrcodeExpired":
            "QR\ucf54\ub4dc\uc758 \uc720\ud6a8 \uae30\uac04\uc774 \ucd08\uacfc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. QR\ucf54\ub4dc\ub97c \uac31\uc2e0\ud574 \uc8fc\uc138\uc694.",
          "login.simpleLogin.link.howto":
            "QR\ucf54\ub4dc \ub85c\uadf8\uc778 \uc548\ub0b4",
          "login.tab.emailLogin": "\uc774\uba54\uc77c \ub85c\uadf8\uc778",
          "login.tab.naverLogin": "\ub124\uc774\ubc84 \ub85c\uadf8\uc778",
          "login.tab.phoneNumberLogin":
            "\uc804\ud654\ubc88\ud638 \ub85c\uadf8\uc778 >",
          "login.tab.phoneNumberLogin.title":
            "\uc804\ud654\ubc88\ud638 \ub85c\uadf8\uc778",
          "login.tab.simpleLogin": "QR \ucf54\ub4dc \ub85c\uadf8\uc778",
          "loginHelp.email.image.0": "images/ko-KR/01_main.png",
          "loginHelp.email.image.1": "images/ko-KR/02_email.png",
          "loginHelp.email.image.registration":
            "image://login/ko-KR/04_email.png",
          "loginHelp.emailLogin.label.step1":
            "\ubaa8\ubc14\uc77c \ub77c\uc778\uc5d0\uc11c [\uc124\uc815 > \uacc4\uc815]\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.",
          "loginHelp.emailLogin.label.step2":
            "\uc774\uba54\uc77c\uc740 '\uacc4\uc815'\uc5d0\uc11c '\uc774\uba54\uc77c'\uc744 \ub20c\ub7ec \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "loginHelp.emailLogin.label.tab.mobile":
            "\ubaa8\ubc14\uc77c\uc5d0\uc11c \uac00\uc785\ud55c \uacbd\uc6b0",
          "loginHelp.emailLogin.label.tab.pc":
            "PC \ubc84\uc804\uc5d0\uc11c \uac00\uc785\ud55c \uacbd\uc6b0",
          "loginHelp.emailLogin.label.tab.pc.desc1":
            "\uc774\uba54\uc77c\uc744 \ub4f1\ub85d\ud574\uc57c\ub9cc \uc774\uba54\uc77c \ub85c\uadf8\uc778\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uc774\uba54\uc77c\uc740 [\ud658\uacbd\uc124\uc815 > \uae30\ubcf8\uc124\uc815]\uc5d0\uc11c \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "loginHelp.emailLogin.label.tab.pc.desc2":
            "\uc804\ud654\ubc88\ud638 \ub85c\uadf8\uc778 \ube44\ubc00\ubc88\ud638\uc640 \uc774\uba54\uc77c \ub85c\uadf8\uc778 \ube44\ubc00\ubc88\ud638\ub294 \ub3d9\uc77c\ud569\ub2c8\ub2e4.\n\uc774\uba54\uc77c \uc785\ub825 \ud6c4 \uc804\ud654\ubc88\ud638 \ub85c\uadf8\uc778 \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",
          "loginHelp.emailLogin.label.tab.pc.title1":
            "\uc774\uba54\uc77c\uc744 \ub4f1\ub85d\ud558\uc9c0 \uc54a\uc740 \uacbd\uc6b0",
          "loginHelp.emailLogin.label.tab.pc.title2":
            "\uc774\uba54\uc77c\uc744 \ub4f1\ub85d\ud55c \uacbd\uc6b0",
          "loginHelp.emailLogin.label.title":
            "\uc774\uba54\uc77c \ub85c\uadf8\uc778 \ub3c4\uc6c0\ub9d0",
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
          "loginHelp.qrcode.image.0": "images/ko-KR/04_qr01.png",
          "loginHelp.qrcode.image.1": "images/ko-KR/05_qr02.png",
          "loginHelp.qrcodeLogin.label.step1":
            "\ub77c\uc778 \uc571\uc758 \u201c\ub354\ubcf4\uae30 > \uce5c\uad6c \ucd94\uac00 > QR\ucf54\ub4dc\u201d\uc5d0\uc11c QR\ucf54\ub4dc\ub97c \uc2a4\uce94\ud574\uc8fc\uc138\uc694.",
          "loginHelp.qrcodeLogin.label.step2":
            "\uc2a4\uce94\ud55c \ub4a4\uc5d0 \ubaa8\ubc14\uc77c \ub77c\uc778 \uc571\uc5d0\uc11c \u201c\ub85c\uadf8\uc778\u201d \ubc84\ud2bc\uc744 \ud0ed\ud558\uba74 PC\ub85c\uadf8\uc778\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.",
          "loginHelp.qrcodeLogin.label.title":
            "QR\ucf54\ub4dc \ub85c\uadf8\uc778",
          "loginHelp.qrcodeLogin.label.wap.step1":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.qrcodeLogin.label.wap.step2":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "markdown.input.context.menu.bold": "\uad75\uac8c",
          "markdown.input.context.menu.codeblock": "\ubb38\ub2e8 \uac15\uc870",
          "markdown.input.context.menu.italic": "\uae30\uc6b8\uc784\uaf34",
          "markdown.input.context.menu.strikethrough": "\ucde8\uc18c\uc120",
          "markdown.input.context.menu.wordblock": "\ub2e8\uc5b4 \uac15\uc870",
          "markdown.input.guideline.bold": "*\uad75\uac8c*",
          "markdown.input.guideline.codeblock":
            "```\ucf54\ub4dc\ube14\ub85d```",
          "markdown.input.guideline.italic": "_\uae30\uc6b8\uc784\uaf34_",
          "markdown.input.guideline.strikethrough": "~\ucde8\uc18c\uc120~",
          "markdown.input.guideline.wordblock":
            "`\uc778\ub77c\uc778\ucf54\ub4dc`",
          "markdown.input.menu.help":
            "\ud14d\uc2a4\ud2b8 \uc11c\uc2dd\uc774\ub780?",
          "media.locale.font":
            "NanumGothic,\ub098\ub214\uace0\ub515,Malgun,\ub9d1\uc740 \uace0\ub515,\ub9d1\uc740\uace0\ub515,Dotum,Gulim,\ub3cb\uc6c0,\uad74\ub9bc",
          "media.msg.err.directx":
            "\ub3d9\uc601\uc0c1 \uc7ac\uc0dd\uc744 \uc704\ud574 DirectX 9.0c \uc124\uce58\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \n\uc9c0\uae08 \uc124\uce58\ud558\uaca0\uc2b5\ub2c8\uae4c? ",
          "media.msg.err.expired":
            "\uc800\uc7a5\uae30\uac04\uc774 \uc9c0\ub098 \ub3d9\uc601\uc0c1\uc744 \uc7ac\uc0dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "media.msg.err.network":
            "\ub124\ud2b8\uc6cc\ud06c \ud639\uc740 \uc11c\ubc84 \ubb38\uc81c\ub85c \uc7ac\uc0dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "media.msg.err.transient":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \uc7ac\uc0dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "media.msg.tooltip.close": "\ub2eb\uae30",
          "media.msg.tooltip.minimize": "\ucd5c\uc18c\ud654",
          "media.msg.tooltip.pause": "\uc77c\uc2dc\uc815\uc9c0",
          "media.msg.tooltip.play": "\uc7ac\uc0dd",
          "media.msg.tooltip.playspeed": "\uc7ac\uc0dd \uc18d\ub3c4",
          "media.msg.tooltip.stop": "\uc815\uc9c0",
          "media.msg.tooltip.volume": "\ubcfc\ub968",
          "media.msg.tooltip.volume1": "\ubcfc\ub968",
          "media.video.full.screen.out":
            "\uc804\uccb4 \ud654\uba74\uc5d0\uc11c \ub098\uac00\ub824\uba74 Esc \ud0a4\ub97c \ub204\ub974\uc138\uc694.",
          "media.video.replay": "\ub2e4\uc2dc \ubcf4\uae30",
          "meeting.popup.end.body":
            "\ubbf8\ud305\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "meeting.popup.end.button": "\ub098\uac00\uae30",
          "meeting.tooltip.end.call": "\ubbf8\ud305 \ub098\uac00\uae30",
          "menu.menubar.allNotification.off":
            "\uc804\uccb4 \uc54c\ub9bc \ub044\uae30",
          "menu.menubar.allNotification.on":
            "\uc804\uccb4 \uc54c\ub9bc \ucf1c\uae30",
          "menu.menubar.friend.addFriend": "\uce5c\uad6c \ucd94\uac00",
          "menu.menubar.friend.makeGroup": "\uadf8\ub8f9 \ub9cc\ub4e4\uae30",
          "menu.menubar.friend.title": "\uce5c\uad6c",
          "menu.menubar.help.lineHelp": "LINE \ub3c4\uc6c0\ub9d0",
          "menu.menubar.help.title": "\ub3c4\uc6c0\ub9d0",
          "menu.menubar.keepmemo": "Keep \uba54\ubaa8",
          "menu.menubar.line.about": "LINE \uc815\ubcf4",
          "menu.menubar.line.exit": "\uc885\ub8cc",
          "menu.menubar.line.hideLine": "LINE \uc228\uae30\uae30",
          "menu.menubar.line.hideOthers":
            "\ub2e4\ub978 \uc571 \uc228\uae30\uae30",
          "menu.menubar.line.setting": "\ud658\uacbd \uc124\uc815",
          "menu.menubar.line.showAll": "\ubaa8\ub450 \ubcf4\uc5ec\uc8fc\uae30",
          "menu.menubar.line.title": "LINE",
          "menu.menubar.view.chat": "\ub300\ud654",
          "menu.menubar.view.friend": "\uce5c\uad6c",
          "menu.menubar.view.hub": "LINE HUB",
          "menu.menubar.view.myProfile": "\ub0b4 \ud504\ub85c\ud544",
          "menu.menubar.view.myhome": "\ub9c8\uc774 \ud648",
          "menu.menubar.view.openchat": "\uc624\ud508\ucc57",
          "menu.menubar.view.services": "\uc11c\ube44\uc2a4",
          "menu.menubar.view.title": "\ubcf4\uae30",
          "menu.menubar.view.today": "LINE TODAY",
          "menu.menubar.view.voom": "LINE VOOM",
          "menu.menubar.window.bringToTopAll":
            "\ubaa8\ub450 \uc55e\uc73c\ub85c \uac00\uc838\uc624\uae30",
          "menu.menubar.window.maximize": "\ud655\ub300",
          "menu.menubar.window.minimize": "\ucd5c\uc18c\ud654",
          "menu.menubar.window.title": "\ucc3d",
          "menu.setting.lockscreen": "\uc7a0\uae08 \ubaa8\ub4dc",
          "menu.toast.allNotification.off": "\uc54c\ub9bc \ucf1c\uc9d0",
          "menu.toast.allNotification.on": "\uc54c\ub9bc \uaebc\uc9d0",
          "menu.tray.about": "LINE \uc815\ubcf4",
          "menu.tray.balloon.login":
            "LINE\uc5d0 \ub85c\uadf8\uc778\ud588\uc2b5\ub2c8\ub2e4.",
          "menu.tray.balloon.logout":
            "LINE\uc5d0 \ub85c\uadf8\uc544\uc6c3\ud588\uc2b5\ub2c8\ub2e4.",
          "menu.tray.check.update": "\uc5c5\ub370\uc774\ud2b8 \ud655\uc778",
          "menu.tray.exit": "\uc885\ub8cc",
          "menu.tray.keepmemo": "Keep \uba54\ubaa8",
          "menu.tray.login": "\ub85c\uadf8\uc778",
          "menu.tray.logout": "\ub85c\uadf8\uc544\uc6c3",
          "menu.tray.setting": "\ud658\uacbd \uc124\uc815",
          "menu.tray.showBuddyList": "\uce5c\uad6c \ubaa9\ub85d",
          "message.context.background":
            "\ubc30\uacbd\ud654\uba74\uc73c\ub85c \uc124\uc815",
          "message.context.cancel.imageselect":
            "\uc0ac\uc9c4 \uc120\ud0dd \ucde8\uc18c",
          "message.context.imageselect": "\uc0ac\uc9c4 \uc120\ud0dd",
          "message.delete.confirm":
            "\uc774 \uae30\uae30\uc758 \uba54\uc2dc\uc9c0\ub9cc \uc0ad\uc81c\ub418\uba70, \uc0c1\ub300\ubc29 \uae30\uae30\uc758 \uba54\uc2dc\uc9c0\ub294 \uc0ad\uc81c\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "message.error.invalidfile":
            "\ub2e4\uc6b4\ub85c\ub4dc\ud55c \uc5c5\ub370\uc774\ud2b8 \ud30c\uc77c\uc774 \uc190\uc0c1\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "message.error.opensetup":
            "\ub2e4\uc6b4\ub85c\ub4dc\ud55c \uc5c5\ub370\uc774\ud2b8 \ud30c\uc77c\uc744 \uc5f4\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.",
          "message.error.opensetup.codesign":
            "\ub2e4\uc6b4\ub85c\ub4dc \ubc1b\uc740 \uc5c5\ub370\uc774\ud2b8 \ud30c\uc77c\uc774 \uc190\uc0c1\ub418\uc5b4 \uc2e4\ud589\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "message.error.update":
            "\uc5c5\ub370\uc774\ud2b8\uac00 \uc911\ub2e8\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "message.error.updateurl":
            "\uc5c5\ub370\uc774\ud2b8 \uc8fc\uc18c\ub97c \uc5bb\uc5b4\uc624\uc9c0 \ubabb\ud558\uc600\uc2b5\ub2c8\ub2e4.",
          "msgbox.alert.font.exist":
            "\uc0ac\uc6a9 \uc911\uc778 \uae00\uaf34\uc785\ub2c8\ub2e4.",
          "msgbox.alert.nospace":
            "\uae30\uae30\uc758 \uc800\uc7a5 \uacf5\uac04\uc774 \ubd80\uc871\ud569\ub2c8\ub2e4. \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uc571\uacfc \uc0ac\uc9c4, \ub3d9\uc601\uc0c1 \ub4f1\uc744 \uc0ad\uc81c\ud558\uc5ec \uc6a9\ub7c9\uc744 \ud655\ubcf4\ud574 \uc8fc\uc138\uc694.",
          "msgbox.alert.resolution.apply":
            "\ud574\uc0c1\ub3c4 \ubcc0\uacbd\uc744 \uc704\ud574 LINE\uc744 \ub2e4\uc2dc \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc9c0\uae08 \ubc14\ub85c \uc7ac\uc2e4\ud589\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "msgbox.btn.block": "\ucc28\ub2e8",
          "msgbox.btn.buddy.title":
            "\ucd94\uac00\ub41c \uce5c\uad6c \ud655\uc778",
          "msgbox.btn.cancel.title": "\ucde8\uc18c",
          "msgbox.btn.cancelInvite.no": "\uc544\ub2c8\uc694",
          "msgbox.btn.cancelInvite.yes": "\ub124",
          "msgbox.btn.close.title": "\ub2eb\uae30",
          "msgbox.btn.delete": "\uc0ad\uc81c",
          "msgbox.btn.download.title": "\ub2e4\uc6b4\ub85c\ub4dc",
          "msgbox.btn.fileOpen": "\ud30c\uc77c \uc5f4\uae30",
          "msgbox.btn.gotosettings": "\uc124\uc815",
          "msgbox.btn.hide": "\uc228\uae30\uae30",
          "msgbox.btn.install.title": "\ub2e4\uc6b4\ub85c\ub4dc",
          "msgbox.btn.later.title": "\ub098\uc911\uc5d0",
          "msgbox.btn.leave.1.n": "\ub098\uac00\uae30",
          "msgbox.btn.leave.group": "\ub098\uac00\uae30",
          "msgbox.btn.lock.enable": "\uc7a0\uae08 \uc124\uc815",
          "msgbox.btn.lock.start": "\uc7a0\uadf8\uae30",
          "msgbox.btn.no.title": "\uc544\ub2c8\uc694",
          "msgbox.btn.nocancel.title": "\uc544\ub2c8\uc694",
          "msgbox.btn.ok.title": "\ud655\uc778",
          "msgbox.btn.post.title": "\ub4f1\ub85d",
          "msgbox.btn.qrcode.title": "QR\ucf54\ub4dc \ub85c\uadf8\uc778",
          "msgbox.btn.quit.title": "\uc885\ub8cc",
          "msgbox.btn.remove": "\uc0ad\uc81c",
          "msgbox.btn.restart": "\uc7ac\uc2e4\ud589",
          "msgbox.btn.retry.title": "\uc7ac\uc2dc\ub3c4",
          "msgbox.btn.send": "\ubcf4\ub0b4\uae30",
          "msgbox.btn.sendkey.title": "\uc124\uc815\ud558\uae30",
          "msgbox.btn.sendshare": "\ubcf4\ub0b4\uae30",
          "msgbox.btn.unsend": "\ubcf4\ub0b4\uae30 \ucde8\uc18c",
          "msgbox.btn.update.title": "\uc9c0\uae08 \uc124\uce58",
          "msgbox.btn.use": "\uc0ac\uc6a9",
          "msgbox.btn.yes.title": "\ub124",
          "msgbox.btn.yescontinue.title": "\ub124",
          "msgbox.btn.yesleave.title": "\ub124",
          "msgbox.desc.seemore": "\uc790\uc138\ud788 \ubcf4\uae30",
          "msgbox.error.request.popup.desc":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "needqr.login.button.label": "QR\ucf54\ub4dc \ub85c\uadf8\uc778",
          "needqr.title.content1":
            "\uacc4\uc815 \ub3c4\uc6a9 \ubc29\uc9c0\ub97c \uc704\ud574\uc11c\nQR\ucf54\ub4dc \ub85c\uadf8\uc778\uc744 \ud574\uc8fc\uc138\uc694.",
          "needqr.title.label":
            "QR\ucf54\ub4dc \ub85c\uadf8\uc778\uc744 \ud574\uc8fc\uc138\uc694.",
          "note.save.comfirm.desc":
            "[%1] \ub178\ud2b8\uc5d0 \uc800\uc7a5\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "notificationcenter.timeslot.earlier": "\uc774\uc804",
          "notificationcenter.timeslot.recent": "\ucd5c\uadfc",
          "notificationcenter.title": "\uc54c\ub9bc",
          "nx.textbox.copy": "\ubcf5\uc0ac\ud558\uae30",
          "nx.textbox.paste": "\ubd99\uc5ec\ub123\uae30",
          "nx.textbox.selectall": "\ubaa8\ub450 \uc120\ud0dd",
          "oa.profile.desc.region.notselected": "\ud655\uc778 \uc911",
          "oa.profile.investmentfraud":
            "LINE\uc744 \uc774\uc6a9\ud55c \uc0ac\uae30\uc5d0 \uc8fc\uc758\ud574 \uc8fc\uc138\uc694.",
          "ocr.policy.agree.btn": "\ub3d9\uc758",
          "ocr.policy.disagree.btn": "\uac70\ubd80",
          "ocr.progress.desc.scan": "\ud14d\uc2a4\ud2b8 \uc778\uc2dd \uc911...",
          "ocr.progress.desc.translate": "\ubc88\uc5ed \uc911\u2026",
          "openchat.allthreads.desc.nothreads":
            "\uc774 \uc624\ud508\ucc57\uc5d0\uc11c \ub9cc\ub4e4\uc5b4\uc9c4 \ubaa8\ub4e0 \uc2a4\ub808\ub4dc\uac00 \uc5ec\uae30\uc5d0 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
          "openchat.allthreads.title.nothreads":
            "\uc544\uc9c1 \uc774 \uc624\ud508\ucc57\uc5d0 \uc2a4\ub808\ub4dc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "openchat.chatlist.popup.deletechat":
            "\uc774 \ub300\ud654\ubc29\uc744 \ub300\ud654 \ubaa9\ub85d\uc5d0\uc11c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \uc624\ud508\ucc57 \ubaa9\ub85d\uc5d0\uc11c\ub294 \uc0ad\uc81c\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "openchat.chatlist.popup.hidechat":
            "\uc774 \ub300\ud654\ubc29\uc744 \ub300\ud654 \ubaa9\ub85d\uc5d0\uc11c \uc228\uae30\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \uc624\ud508\ucc57 \ubaa9\ub85d\uc5d0\uc11c\ub294 \uacc4\uc18d \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
          "openchat.favoritethreads.title.nothreads":
            "\uc544\uc9c1 \uc990\uaca8\ucc3e\uae30\ud55c \uc2a4\ub808\ub4dc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "openchat.hidemessages.desc.hidethismember":
            "\ud574\ub2f9 \uba64\ubc84\uac00 \uc9c0\uae08\ubd80\ud130 \ubcf4\ub0b4\ub294 \uba54\uc2dc\uc9c0\ub97c \uc228\uae30\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \ud558\uc704 \ub300\ud654\ubc29\uc744 \ud3ec\ud568\ud55c \uc774 \uc624\ud508\ucc57\uc5d0\uc11c\ub9cc \uc228\uaca8\uc9c0\uba70, \uc9c0\ub09c \uba54\uc2dc\uc9c0\ub294 \uacc4\uc18d \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
          "openchat.hidemessages.desc.maximumhide":
            "\uba54\uc2dc\uc9c0\ub97c \uc228\uae38 \uc218 \uc788\ub294 \ucd5c\ub300 \uba64\ubc84 \uc218\ub97c \ucd08\uacfc\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \uba64\ubc84\uc758 \ud504\ub85c\ud544\uc5d0\uc11c '\uba54\uc2dc\uc9c0 \uc228\uae30\uae30 \ud574\uc81c'\ub97c \ud558\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "openchat.hidemessages.desc.messageshidden":
            "\uc9c0\uae08\ubd80\ud130 \uba54\uc2dc\uc9c0\uac00 \uc228\uaca8\uc9d1\ub2c8\ub2e4. \uc228\uae30\uae30 \ud574\uc81c\ub294 \ud574\ub2f9 \uba64\ubc84\uc758 \ud504\ub85c\ud544 \ud654\uba74\uc5d0\uc11c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "openchat.join.button.requestjoin": "\ucc38\uc5ec \uc2e0\uccad",
          "openchat.linkpopup.desc.donotshowformonth":
            "\ud55c \ub2ec \ub3d9\uc548 \ub2e4\uc2dc \uc548 \ubcf4\uae30",
          "openchat.readallthreads.desc.markallasread":
            "\ubaa8\ub4e0 \uc2a4\ub808\ub4dc \uba54\uc2dc\uc9c0\ub97c \uc77d\uc74c\uc73c\ub85c \ud45c\uc2dc\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "openchat.settings.desc.mentioneveryone":
            "\uc804\uccb4 \uba58\uc158(@All)",
          "openchat.thread.desc.fewerthan10":
            "10\uac1c \ubbf8\ub9cc \uba54\uc2dc\uc9c0",
          "openchat.thread.desc.sendafiletothread":
            "\uc2a4\ub808\ub4dc\uc5d0 \ud30c\uc77c \uc804\uc1a1",
          "openchat.thread.desc.updateline":
            "LINE \uc571\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\uba74 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "openchat.thread.placeholder.expired":
            "\uc2a4\ub808\ub4dc\uac00 \ub9cc\ub8cc\ub418\uc5b4 \uc785\ub825\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "openchat.thread.tooltip.yourthreadicon":
            "\uc990\uaca8\ucc3e\uae30\ud55c \uc2a4\ub808\ub4dc\uc640 \uc774 \uc624\ud508\ucc57\uc5d0 \uc788\ub294 \ubaa8\ub4e0 \uc2a4\ub808\ub4dc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc5b4\uc694.",
          "openchat.threadpopup.desc.expired":
            "\uc2a4\ub808\ub4dc\uac00 \ub9cc\ub8cc\ub418\uc5b4 \ub9c8\uc774 \uc2a4\ub808\ub4dc\uc5d0 \ucd94\uac00, \uc0ad\uc81c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "openchat.threadpopup.desc.expirederror":
            "\uc2a4\ub808\ub4dc\uac00 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "openchat.threadpopup.desc.unsupported":
            "\uc2a4\ub808\ub4dc\uc5d0\uc11c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \ud30c\uc77c \ud615\uc2dd\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",
          "openchat.threads.button.readall": "\uc804\uccb4 \uc77d\uae30",
          "openchat.threads.button.seemessages":
            "\uba54\uc2dc\uc9c0 \ubcf4\uae30",
          "openchat.threads.tab.all": "\uc804\uccb4",
          "openchat.threads.tab.favorites": "\uc990\uaca8\ucc3e\uae30",
          "openchat.threads.title.threads": "\uc2a4\ub808\ub4dc",
          "openchat.threads.tooltip.messagewontsend":
            "\uc2a4\ub808\ub4dc \uba54\uc2dc\uc9c0\ub294 \ub300\ud654\ubc29\uc5d0 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "openchat.threadspopup.button.cancel": "\ucde8\uc18c",
          "openchat.threadspopup.button.delete": "\uc0ad\uc81c",
          "openchat.threadspopup.button.unsend":
            "\ubcf4\ub0b4\uae30 \ucde8\uc18c",
          "openchat.threadspopup.desc.deleterootmessage":
            "\uc0ad\uc81c\ud558\uba74 \ubaa8\ub4e0 \uba64\ubc84\uc758 \ud654\uba74\uc5d0\uc11c \uc2a4\ub808\ub4dc\uac00 \uc0ad\uc81c\ub429\ub2c8\ub2e4.",
          "openchat.threadspopup.desc.unsendrootmessage":
            "\ubcf4\ub0b4\uae30 \ucde8\uc18c\ud558\uba74 \ubaa8\ub4e0 \uba64\ubc84\uc758 \ud654\uba74\uc5d0\uc11c \uc2a4\ub808\ub4dc\uac00 \uc0ad\uc81c\ub429\ub2c8\ub2e4.",
          "openchat.threadspopup.title.deleterootmessage":
            "\uba54\uc2dc\uc9c0\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "openchat.threadspopup.title.unsendrootmessage":
            "\uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0b4\uae30 \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "openchat.unhidemessages.desc.unhidden":
            "\uc9c0\uae08\ubd80\ud130 \uba54\uc2dc\uc9c0\uac00 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
          "openchat.unhidemessages.desc.unhide":
            "\ud574\ub2f9 \uba64\ubc84\uac00 \uc9c0\uae08\ubd80\ud130 \ubcf4\ub0b4\ub294 \uba54\uc2dc\uc9c0\ub97c \uc228\uae30\uae30 \ud574\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \uc9c0\ub09c \uba54\uc2dc\uc9c0\ub294 \uacc4\uc18d \uc228\uaca8\uc9d1\ub2c8\ub2e4.",
          "openchat.userprofile.button.hidemessages":
            "\uba54\uc2dc\uc9c0 \uc228\uae30\uae30",
          "openchat.userprofile.button.unhidemessages":
            "\uba54\uc2dc\uc9c0 \uc228\uae30\uae30 \ud574\uc81c",
          "openchat.yourthread.button.seemessages":
            "\uba54\uc2dc\uc9c0 \ubcf4\uae30",
          "openchat.yourthread.desc.fewerthan10":
            "10\uac1c \ubbf8\ub9cc \uba54\uc2dc\uc9c0",
          "openchat.yourthreads.button.readmore":
            "\uc2a4\ub808\ub4dc \uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30",
          "openchat.yourthreads.desc.newthreadmessages":
            "\uc0c8 \uc2a4\ub808\ub4dc \uba54\uc2dc\uc9c0",
          "openchat.yourthreads.desc.photosent":
            "\uc0ac\uc9c4\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "openchat.yourthreads.desc.stickersent":
            "\uc2a4\ud2f0\ucee4\ub97c \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "openchat.yourthreads.desc.videosent":
            "\ub3d9\uc601\uc0c1\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "openchat.yourthreads.desc.vmsent":
            "\uc74c\uc131 \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.",
          "openchat.yourthreads.title.messageunavailable":
            "\uba54\uc2dc\uc9c0\ub97c \ud45c\uc2dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "openchat.yourthreadspopup.button.ok": "\ud655\uc778",
          "openchat.yourthreadspopup.desc.threaddeleted":
            "\uc0ad\uc81c\ub41c \uc2a4\ub808\ub4dc\uc785\ub2c8\ub2e4.",
          "os.msgbox.btn.gotosettings": "\uc124\uc815",
          "pl.square.setting.tooltip": "",
          "poll.create.title": "\ud22c\ud45c \ub9cc\ub4e4\uae30",
          "poll.edit.title": "\ud22c\ud45c \uc218\uc815",
          "poll.main.title": "\ud22c\ud45c",
          "poll.ongoing.title": "\ud22c\ud45c\ud558\uae30",
          "poll.result.title": "\ud22c\ud45c \uacb0\uacfc",
          "poll.votedcount.title": "%1 (%2)",
          "popup.plugin.failed.retry":
            "\ucf58\ud150\uce20 \ubdf0\uc5b4 \ud50c\ub7ec\uadf8\uc778\uc774 \ub2e4\uc6b4\ub85c\ub4dc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \uc7ac\uc2dc\ub3c4 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \ub2e4\uc2dc \ub2e4\uc6b4\ub85c\ub4dc\ud574 \uc8fc\uc138\uc694.",
          "power.label.tootip": "LINE \ub2eb\uae30",
          "profile.btn.chat.tooltip": "\ub300\ud654\ud558\uae30",
          "profile.btn.home.tooltip": "\ud648",
          "profile.btn.recommend.tooltip": "\ucd94\ucc9c",
          "profile.button.investmentfraudwarning":
            "LINE\uc744 \uc774\uc6a9\ud55c \uc0ac\uae30\uc5d0 \uc8fc\uc758\ud574 \uc8fc\uc138\uc694.",
          "profile.delete": "\ud504\ub85c\ud544 \uc0ad\uc81c",
          "profile.desc.birthday": "M\uc6d4 d\uc77c",
          "profile.desc.onediting":
            "\uc774 \ud654\uba74\uc744 \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \ubcc0\uacbd \uc0ac\ud56d\uc740 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "profile.desc.timelineposts": "LINE VOOM\xa0\uac8c\uc2dc\uae00",
          "profile.edit.background.color":
            "\ubc30\uacbd \uc0c9\uc0c1 \uc120\ud0dd",
          "profile.edit.font.color": "\uae00\uaf34 \uc0c9\uc0c1 \uc120\ud0dd",
          "profile.edit.placeholder": "\uc774\ub984 \uc785\ub825",
          "profile.friendsnameedit.desc.namesetbyfriend":
            "\uce5c\uad6c \ubcf8\uc778\uc774 \uc124\uc815\ud55c \uc774\ub984: %1",
          "profile.popup.report": "\uc2e0\uace0",
          "profile.seemoremenu.button.block": "\ucc28\ub2e8",
          "profile.select.capture": "\ud654\uba74 \ucea1\ucc98",
          "profile.select.default":
            "\uae30\ubcf8 \ud504\ub85c\ud544\uc5d0\uc11c \uc120\ud0dd",
          "profile.select.local":
            "\ub0b4 \ucef4\ud4e8\ud130\uc5d0\uc11c \uc120\ud0dd",
          "profile.select.text": "\ud14d\uc2a4\ud2b8 \ud504\ub85c\ud544",
          "profile.socialprofile.menutitle.editprofile":
            "\ud504\ub85c\ud544 \uc124\uc815",
          "registration.btn.label.resendPin":
            "\uc778\uc99d\ubc88\ud638 \uc7ac\uc804\uc1a1",
          "registration.btn.message.resendPin":
            "\uc778\uc99d\ubc88\ud638\ub97c \uc7ac\uc804\uc1a1\ud588\uc2b5\ub2c8\ub2e4.",
          "registration.check.age.ageVerification.body":
            "\uc5f0\ub839 \ud655\uc778\uc774 \ud544\uc694\ud55c \uae30\ub2a5\uc785\ub2c8\ub2e4.\nLINE \ubaa8\ubc14\uc77c \ubc84\uc804\uc758 \uc124\uc815 > \uc5f0\ub839 \ud655\uc778\uc744 \uc120\ud0dd\ud558\uc5ec \uc9c4\ud589\ud574 \uc8fc\uc138\uc694.",
          "registration.check.age.ageVerification.title":
            "\uc5f0\ub839 \ud655\uc778",
          "registration.check.age.ageunder.body":
            "18\uc138 \ubbf8\ub9cc\uc740 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4.",
          "registration.check.age.error.loadUrl":
            "\uc5f0\uacb0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub124\ud2b8\uc6cc\ud06c \uc0c1\ud0dc\ub97c \ud655\uc778\ud558\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "registration.check.age.error.retrieveRequest":
            "\uc5f0\ub839 \ud655\uc778 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "registration.check.age.underAge":
            "18\uc138 \ubbf8\ub9cc\uc740 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uae30\ub2a5\uc785\ub2c8\ub2e4. \ubaa8\ubc14\uc77c LINE \uc571\uc5d0\uc11c QR \ucf54\ub4dc\ub85c \uce5c\uad6c\ub97c \ucd94\uac00\ud574 \uc8fc\uc138\uc694.",
          "registration.code.phone.call": "\uc804\ud654 \uc778\uc99d",
          "registration.code.phone.guide":
            "\ud655\uc778\uc744 \uc120\ud0dd\ud558\uba74 \uc778\uc99d\ubc88\ud638\ub97c\n\uc548\ub0b4\ud558\ub294 \uc804\ud654\uac00 \uc635\ub2c8\ub2e4. \n(\ubc1c\uc2e0\uc790\ud45c\uc2dc\uac00 \uc81c\ud55c\ub420 \uc218 \uc788\uc73c\uba70,\n\uc0ac\uc6a9\ud558\ub294 \uc694\uae08\uc81c\uc5d0 \ub530\ub77c \uc694\uae08\uc774 \ubc1c\uc0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.)",
          "registration.code.sms.resent.guide":
            "\uc7a0\uc2dc \ud6c4\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.\n%1\ubd84 %2\ucd08 \ud6c4 \uc778\uc99d\ubc88\ud638\ub97c \ub2e4\uc2dc \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "registration.common.next": "\ub2e4\uc74c",
          "registration.common.underIE8.alert":
            "\ud68c\uc6d0\uac00\uc785\uc740 Internet Explorer 8 \uc774\uc0c1\ubd80\ud130 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \nInternet Explorer \ube0c\ub77c\uc6b0\uc800\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uac70\ub098 \ubaa8\ubc14\uc77c\uc5d0\uc11c \ud68c\uc6d0\uac00\uc785 \ud574 \uc8fc\uc138\uc694.",
          "reply.doubleclick.toast":
            "\uba54\uc2dc\uc9c0\ub97c \ub450 \ubc88 \ud074\ub9ad\ud558\uba74 \ubc14\ub85c \ub2f5\uc7a5\ud560 \uc218 \uc788\uc5b4\uc694. ",
          "reply.error.toast":
            "\ud574\ub2f9 \uba54\uc2dc\uc9c0\ub85c \uc774\ub3d9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "reply.goto.replied":
            "\uc6d0\ub798 \uc704\uce58\ub85c \ub3cc\uc544\uac00\uae30",
          "reply.no.original.message":
            "\uc6d0\ubcf8 \uba54\uc2dc\uc9c0\ub97c \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "reply.unknown.user": "\uc54c \uc218 \uc5c6\uc74c",
          "report.btn.agreeandsend": "\ub3d9\uc758 \ud6c4 \ubcf4\ub0b4\uae30",
          "report.btn.agreeandsend.thpdpa": "\ud655\uc778 \ubc0f \uc804\uc1a1",
          "report.confirm.groupinvitation":
            "\uadf8\ub8f9 \ub300\ud654\ubc29\uc5d0 \ucd08\ub300\ud55c \uc0ac\uc6a9\uc790\ub97c \uc2e0\uace0\ud560 \uacbd\uc6b0 \ub300\ud654\ubc29 \uad00\ub828 \uc815\ubcf4\uac00 LINE\uc5d0 \uacf5\uc720\ub429\ub2c8\ub2e4.",
          "report.desc.reason":
            "\uc2e0\uace0 \uc0ac\uc720\ub97c \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.",
          "report.desc.title": "\uc2e0\uace0",
          "report.done": "\uc2e0\uace0\ud588\uc2b5\ub2c8\ub2e4.",
          "report.done.suggestBlock":
            "\uc2e0\uace0\ud588\uc2b5\ub2c8\ub2e4.\n\uc2e0\uace0\ud55c \uba64\ubc84\ub97c \ucc28\ub2e8\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "report.done.suggestBlock.groupinvitation":
            "%1\ub2d8\uc744 \ucc28\ub2e8\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "report.note.subTitle":
            "%1\n\uc774 \uc0ac\uc6a9\uc790\uc758 \uac8c\uc2dc\uae00\uc744 \uc2e0\uace0\ud569\ub2c8\ub2e4.",
          "report.popupbutton.impersonation.decline":
            "\uac74\ub108\ub6f0\uae30",
          "report.popupbutton.impersonation.proceed": "\uc774\ub3d9",
          "report.reason.Other": "\uae30\ud0c0",
          "report.reason.gender":
            "\ubd88\uac74\uc804 \uad50\uc81c \uc694\uad6c",
          "report.reason.harrassment": "\uc720\ud574\uc131 \uba54\uc2dc\uc9c0",
          "report.reason.impersonation": "\uc0ac\uce6d",
          "report.reason.impersonation.inquirypopup":
            "\ud0c0\uc778 \uc0ac\uce6d\uc5d0 \ub300\ud55c \uc870\uc0ac\ub97c \uc704\ud574 \uc0c1\uc138 \uc815\ubcf4\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694. \ubb38\uc758\ud558\uae30 \ud654\uba74\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec \uad00\ub828 \ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "report.reason.scam": "\uc0ac\uae30",
          "report.reason.spam": "\uad11\uace0/\uc0ac\uae30",
          "requireinvite.popup.button.cancel": "\ucde8\uc18c",
          "requireinvite.popup.button.confirmon": "\ub044\uae30",
          "requireinvite.popup.desc.onewaywarning":
            "\uc774 \uc124\uc815\uc744 \ucf1c\uba74 \ub2e4\uc2dc \ub04c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "requireinvite.popup.title.onewaywarning":
            "\ucd08\ub300\uc7a5 \uc804\uc1a1 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "requireinvite.toggle.desc":
            "\ucd08\ub300\ub97c \uc218\ub77d\ud55c \uc0ac\ub78c\ub9cc \uadf8\ub8f9\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "requireinvite.toggle.title": "\ucd08\ub300\uc7a5 \uc804\uc1a1",
          "screen.desc.need.os.recordscreen":
            "\ud654\uba74 \ucea1\ucc98\ub098 \uc601\uc0c1\ud1b5\ud654\uc758 \ud654\uba74 \uacf5\uc720 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 \uc124\uc815\uc5d0\uc11c LINE\uc774 \ud654\uba74 \ucf58\ud150\uce20\ub97c \uae30\ub85d\ud560 \uc218 \uc788\ub3c4\ub85d \ud5c8\uc6a9\ud574 \uc8fc\uc138\uc694.",
          "screenshare.desc.need.os.recordscreen":
            "\ud654\uba74 \uacf5\uc720 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uae30\uae30\uc5d0\uc11c \ud654\uba74 \ucf58\ud150\uce20 \uae30\ub85d \uad8c\ud55c\uc744 \ud5c8\uc6a9\ud574 \uc8fc\uc138\uc694.",
          "screenshare.ongoing.error":
            "\ub0b4 \ud654\uba74 \uacf5\uc720 \uc911\uc5d0\ub294 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "screenshare.ongoing.user":
            "\ub0b4 \ud654\uba74 \uacf5\uc720 \uc911\u2026",
          "search.defaultView.doYouRemoveAllRecentSearchKeywords":
            "\ucd5c\uadfc \uac80\uc0c9\uc5b4\ub97c \ubaa8\ub450 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "search.defaultView.doYouUseSaveSearchKeyword":
            "\ucd5c\uadfc \uac80\uc0c9\uc5b4 \uc800\uc7a5 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "search.defaultView.dontYouUseSaveSearchKeyword":
            "\ucd5c\uadfc \uac80\uc0c9\uc5b4 \uc800\uc7a5 \uae30\ub2a5\uc744 \uc0ac\uc6a9 \uc911\uc9c0\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "search.defaultView.offSaveSearchKeyword":
            "\uc790\ub3d9\uc800\uc7a5 \ub044\uae30",
          "search.defaultView.onSaveSearchKeyword":
            "\uc790\ub3d9\uc800\uc7a5 \ucf1c\uae30",
          "search.defaultView.recentSearchKeyword":
            "\ucd5c\uadfc \uac80\uc0c9\uc5b4",
          "search.defaultView.recentSearchKeywordEmpty":
            "\ucd5c\uadfc \uac80\uc0c9\uc5b4 \ub0b4\uc5ed\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "search.defaultView.removeAllRecentSearchKeywords":
            "\uc804\uccb4\uc0ad\uc81c",
          "search.defaultView.saveSearchKeywordOff":
            "\ucd5c\uadfc \uac80\uc0c9\uc5b4 \uc800\uc7a5 \uae30\ub2a5\uc774 \uaebc\uc838 \uc788\uc2b5\ub2c8\ub2e4",
          "select.video.error.ratio":
            "\uc774 \ube44\uc728\uc758 \ub3d9\uc601\uc0c1\uc740 \ud504\ub85c\ud544\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "service.download.done.popup.desc":
            "\ub2e4\uc6b4\ub85c\ub4dc\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "service.download.inprogress.popup.desc":
            "%1\n\ub2e4\uc6b4\ub85c\ub4dc \uc911\u2026",
          "service.install.device.done.popup.desc":
            "\uc124\uce58\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "service.install.device.popup.desc": "%1\n\uc124\uce58 \uc911\u2026",
          "service.install.popup.desc":
            "%1 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 %2 \ud504\ub85c\uadf8\ub7a8\uc744 \uc124\uce58\ud574\uc57c \ud569\ub2c8\ub2e4. \uc124\uce58 \ud30c\uc77c\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "setting.advancedSetting": "\uace0\uae09 \uc124\uc815",
          "setting.advancedSetting.proxy.apply": "\uc801\uc6a9",
          "setting.advancedSetting.proxy.apply.disabled":
            "\ud504\ub85d\uc2dc \uc124\uc815\uc774 \ud574\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "setting.advancedSetting.proxy.apply.enabled":
            "\ud504\ub85d\uc2dc \uc124\uc815\uc774 \uc801\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "setting.advancedSetting.proxy.check":
            "\ud504\ub85d\uc2dc \ud655\uc778",
          "setting.advancedSetting.proxy.complete":
            "\uc0ac\uc6a9 \uac00\ub2a5\ud55c \ud504\ub85d\uc2dc \uc11c\ubc84\uc785\ub2c8\ub2e4.",
          "setting.advancedSetting.proxy.connect.check":
            "\ud504\ub85d\uc2dc \uc5f0\uacb0 \ud14c\uc2a4\ud2b8 \uc911\uc785\ub2c8\ub2e4.",
          "setting.advancedSetting.proxy.fail":
            "\ud504\ub85d\uc2dc \uc5f0\uacb0\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.\n\uc124\uc815\uc744 \ud655\uc778 \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",
          "setting.advancedSetting.proxy.fail.protocol":
            "\ud504\ub85d\uc2dc \ud504\ub85c\ud1a0\ucf5c \uc5d0\ub7ec\uc785\ub2c8\ub2e4. (%1)",
          "setting.advancedSetting.proxy.fail.verifyUser":
            "\uc720\uc800 \uc778\uc99d\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
          "setting.advancedSetting.proxy.host": "\ud638\uc2a4\ud2b8",
          "setting.advancedSetting.proxy.port": "\ud3ec\ud2b8",
          "setting.advancedSetting.proxy.protocol":
            "\ud504\ub85c\ud1a0\ucf5c \uc120\ud0dd",
          "setting.advancedSetting.proxy.protocol.check":
            "\ud504\ub85c\ud1a0\ucf5c\uc744 \ud655\uc778 \uc911 \uc785\ub2c8\ub2e4.",
          "setting.advancedSetting.proxy.responseTime":
            "(\uc751\ub2f5 \uc2dc\uac04 : %1ms)",
          "setting.advancedSetting.proxy.server": "\uc11c\ubc84",
          "setting.advancedSetting.proxy.server.check":
            "\ud504\ub85d\uc2dc \uc11c\ubc84\ub97c \ud655\uc778\ud569\ub2c8\ub2e4.",
          "setting.advancedSetting.proxy.title": "\ud504\ub85d\uc2dc",
          "setting.advancedSetting.proxy.use":
            "\ud504\ub85d\uc2dc \uc11c\ubc84 \uc0ac\uc6a9",
          "setting.advancedSetting.proxy.verification":
            "\ud504\ub85d\uc2dc \uc778\uc99d \uc0ac\uc6a9",
          "setting.advancedSetting.proxy.verification.id":
            "\uc0ac\uc6a9\uc790 \uc774\ub984",
          "setting.advancedSetting.proxy.verification.pw":
            "\ube44\ubc00\ubc88\ud638",
          "setting.advancedSetting.sync": "\ub3d9\uae30\ud654",
          "setting.advancedSetting.sync.completed":
            "\ub3d9\uae30\ud654\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "setting.advancedSetting.sync.desc":
            "\uce5c\uad6c \ubaa9\ub85d\uacfc \ub300\ud654 \ubaa9\ub85d\uc744 \ucd5c\uc2e0 \uc0c1\ud0dc\ub85c \ub3d9\uae30\ud654\ud569\ub2c8\ub2e4.",
          "setting.advancedSetting.sync.error.interval":
            "\ub3d9\uae30\ud654\ub294 %1 \ubd84 \uac04\uaca9\uc73c\ub85c \uc9c4\ud589\ud569\ub2c8\ub2e4.\n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",
          "setting.advancedSetting.sync.error.network":
            "\ub124\ud2b8\uc6cc\ud06c \uc624\ub958\ub85c \ub3d9\uae30\ud654\ub97c \uc9c4\ud589\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\ub124\ud2b8\uc6cc\ud06c\ub97c \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "setting.advancedSetting.sync.inprogress":
            "\ub3d9\uae30\ud654\uac00 \uc9c4\ud589\uc911\uc785\ub2c8\ub2e4.\n\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824\uc8fc\uc138\uc694.",
          "setting.advancedSetting.sync.time": "yyyy.M.d %1 h:mm",
          "setting.advancedSetting.sync.title":
            "\ub370\uc774\ud130 \ub3d9\uae30\ud654",
          "setting.alarm.name": "\uc54c\ub9bc\uc74c %1",
          "setting.basic.font.apply.alert":
            "\uae00\uaf34 \ubcc0\uacbd\uc744 \uc704\ud574 LINE\uc744 \ub2e4\uc2dc \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc9c0\uae08 \ubc14\ub85c \uc7ac\uc2e4\ud589\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "setting.basic.heading.language": "\uc5b8\uc5b4",
          "setting.basic.language.apply.alert":
            "\uc5b8\uc5b4 \ubcc0\uacbd\uc744 \uc704\ud574 LINE\uc744 \ub2e4\uc2dc \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc9c0\uae08 \ubc14\ub85c \uc7ac\uc2e4\ud589\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "setting.basic.language.apply.desc":
            "\uc885\ub8cc \ud6c4 \uc7ac\uc2e4\ud589 \uc2dc \ubc18\uc601\ub429\ub2c8\ub2e4.",
          "setting.basic.language.apply.no": "\ub098\uc911\uc5d0 \ud558\uae30",
          "setting.basic.language.apply.yes":
            "\uc9c0\uae08 \ubcc0\uacbd\ud558\uae30",
          "setting.btn.select.folder": "\ud3f4\ub354\uc120\ud0dd",
          "setting.btn.submit": "\uc800\uc7a5",
          "setting.call.blur": "\ubc30\uacbd \ud750\ub9bc",
          "setting.call.call.incomingnoti":
            "\ud1b5\ud654 \uc218\uc2e0 \uc2dc \uc54c\ub9bc\uc73c\ub85c \ud45c\uc2dc",
          "setting.call.camera": "\uce74\uba54\ub77c",
          "setting.call.defaultMike":
            "\uc2dc\uc2a4\ud15c \uc124\uc815\uacfc \ub3d9\uc77c",
          "setting.call.defaultSpeaker":
            "\uc2dc\uc2a4\ud15c \uc124\uc815\uacfc \ub3d9\uc77c",
          "setting.call.desc.deviceloading":
            "\uc7a5\uce58 \ud655\uc778 \uc911...",
          "setting.call.ducking":
            "\ub2e4\ub978 \ud504\ub85c\uadf8\ub7a8 \uc18c\ub9ac \uc870\uc808",
          "setting.call.grouphd":
            "\uace0\ud654\uc9c8 \uadf8\ub8f9\uc601\uc0c1\ud1b5\ud654",
          "setting.call.grouphd.desc":
            "HD \ud654\uc9c8\ub85c \uadf8\ub8f9\uc601\uc0c1\ud1b5\ud654\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\xa0\ub2e8 \uace0\ud654\uc9c8 \ud1b5\ud654 \uc2dc\uc5d0\ub294 \uae30\uae30\uc758\xa0CPU\uc640 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc774 \uc99d\uac00\ud569\ub2c8\ub2e4.",
          "setting.call.grouphd.desc.forwin":
            "\uae30\uae30 \ucf54\ub371\uc744 \uc0ac\uc6a9\ud558\uc5ec HD \ud654\uc9c8\ub85c \uadf8\ub8f9\uc601\uc0c1\ud1b5\ud654\ub97c \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e8 \uace0\ud654\uc9c8 \ud1b5\ud654 \uc2dc\uc5d0\ub294 \uae30\uae30\uc758 CPU\uc640 \uba54\ubaa8\ub9ac \uc0ac\uc6a9\ub7c9\uc774 \uc99d\uac00\ud569\ub2c8\ub2e4.",
          "setting.call.handsfreebtinfo.desc":
            "\uc2a4\ud53c\ucee4\uc640 \ub9c8\uc774\ud06c \uae30\ub2a5\uc744 \uc9c0\uc6d0\ud558\ub294 Bluetooth \uae30\uae30\ub97c \uc0ac\uc6a9\ud560 \uacbd\uc6b0, \ub450 \uc7a5\uce58 \uc124\uc815 \ubaa8\ub450\uc5d0 \ud574\ub2f9 \uae30\uae30\ub97c \uc9c0\uc815\ud574 \uc8fc\uc138\uc694.",
          "setting.call.label.duckingGuide":
            "\ud1b5\ud654 \uc911\uc5d0 \ub2e4\ub978 \ud504\ub85c\uadf8\ub7a8 \uc18c\ub9ac\ub97c \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. 100%\uc5d0 \uac00\uae4c\uc6b8\uc218\ub85d \ub2e4\ub978 \ud504\ub85c\uadf8\ub7a8 \uc18c\ub9ac\uac00 \uc904\uc5b4\ub4ed\ub2c8\ub2e4.",
          "setting.call.mic.desc.noisecancelinglight":
            "\ubc30\uacbd \uc74c\uc545\uc774\ub098 \ucef4\ud4e8\ud130 \ud32c \uc18c\uc74c \ub4f1\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4.",
          "setting.call.mic.desc.noisecancelingstrong":
            "\uac1c\uac00 \uc9d6\ub294 \uc18c\ub9ac\ub098 \ud0a4\ubcf4\ub4dc \uc18c\uc74c \ub4f1\uc744 \uc81c\uac70\ud569\ub2c8\ub2e4.",
          "setting.call.mic.echocancelling": "\uc5d0\ucf54 \uc81c\uac70",
          "setting.call.mic.echocancelling.desc":
            "\ub0b4 \uae30\uae30\uc5d0\uc11c \ubc1c\uc0dd\ud560 \uc218 \uc788\ub294 \uc5d0\ucf54 \uc694\uc778\uc744 \uc81c\uac70\ud558\uc5ec \ub0b4 \ubaa9\uc18c\ub9ac\ub97c \ub354\uc6b1 \ub610\ub837\ud558\uac8c \uc804\uc1a1\ud569\ub2c8\ub2e4. PC \uc0ac\uc6b4\ub4dc\ub97c \uc0c1\ub300\ubc29\uc5d0\uac8c \uc804\uc1a1\ud560 \ub54c\uc5d0\ub294 \uc774 \uae30\ub2a5\uc744 \uaebc\uc8fc\uc138\uc694.",
          "setting.call.mic.echocancelling.mouseovertooltip":
            "'\ucd5c\uc801'\uc744 \uc120\ud0dd\ud558\uba74 \uc77c\ubc18\uc801\uc778 \uc5d0\ucf54\uac00 \uc81c\uac70\ub429\ub2c8\ub2e4.\xa0'\ucd5c\ub300'\ub97c \uc120\ud0dd\ud558\uba74 \uc5d0\ucf54\uc758 \ub300\ubd80\ubd84\uc774 \uc81c\uac70\ub418\uc9c0\ub9cc, \uc5ec\ub7ec \uc0ac\ub78c\uc774 \ub3d9\uc2dc\uc5d0 \ub9d0\ud560 \uacbd\uc6b0 \ub0b4\xa0\uc74c\uc131 \uc77c\ubd80\uac00 \ub04a\uaca8\uc11c \uc804\uc1a1\ub420 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.",
          "setting.call.mic.echocancelling.option1": "\ucd5c\uc801",
          "setting.call.mic.echocancelling.option2": "\ucd5c\ub300",
          "setting.call.mic.menu.noisecancelinglight": "\uc57d\ud558\uac8c",
          "setting.call.mic.menu.noisecancelingstrong": "\uac15\ud558\uac8c",
          "setting.call.mic.noisecanceling": "\uc18c\uc74c \uc81c\uac70",
          "setting.call.mic.noisecanceling.checkbox":
            "\ub0b4 \uc8fc\ubcc0 \uc18c\uc74c \uc81c\uac70 \uae30\ub2a5 \uc0ac\uc6a9",
          "setting.call.mic.noisecanceling.desc":
            "\ub0b4 \uc8fc\ubcc0 \uc18c\uc74c\uc744 \uc81c\uac70\ud558\uc5ec \ub0b4 \ubaa9\uc18c\ub9ac\ub97c \ub354\uc6b1 \ub610\ub837\ud558\uac8c \uc804\uc1a1\ud569\ub2c8\ub2e4.",
          "setting.call.mike": "\ub9c8\uc774\ud06c",
          "setting.call.mike.autoVolume": "\uc790\ub3d9 \ubcfc\ub968",
          "setting.call.msg.noCamera":
            "\uce74\uba54\ub77c\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \n\ud655\uc778 \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "setting.call.msg.noMike":
            "\ub9c8\uc774\ud06c\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \n\ud655\uc778 \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "setting.call.msg.noSpeaker":
            "\uc2a4\ud53c\ucee4\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n \ud655\uc778 \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "setting.call.noDevice": "\uc7a5\uce58 \uc5c6\uc74c",
          "setting.call.speaker": "\uc2a4\ud53c\ucee4",
          "setting.call.videocall": "\uc601\uc0c1 \ubc0f \ud654\uba74",
          "setting.call.videocall.HWvideocodec":
            "\uae30\uae30 \ub3d9\uc601\uc0c1 \ucf54\ub371 \uc0ac\uc6a9",
          "setting.call.videocall.HWvideocodec.desc":
            "\uae30\uae30\uc5d0 \ub0b4\uc7a5\ub41c \ub3d9\uc601\uc0c1 \ucf54\ub371\uc744 \uc0ac\uc6a9\ud558\uba74 \uacfc\ub3c4\ud55c \ubc30\ud130\ub9ac \uc18c\ubaa8, \ubc1c\uc5f4 \ub4f1\uc744 \ubc29\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc77c\ubd80 \uae30\uae30\uc5d0\uc11c\ub294 \ucf54\ub371\uc774 \uc801\ud569\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc73c\ubbc0\ub85c, \uc601\uc0c1\ud1b5\ud654 \uc911 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud560 \uacbd\uc6b0 \ud574\ub2f9 \uc635\uc158\uc744 \uaebc\uc8fc\uc138\uc694.",
          "setting.call.videocall.HWvideocodec.popup.desc":
            "\ubcc0\uacbd\ub41c \ub3d9\uc601\uc0c1 \ucf54\ub371 \uc124\uc815\uc740 \ub2e4\uc74c \ud1b5\ud654 \uc2dc\ubd80\ud130 \uc801\uc6a9\ub429\ub2c8\ub2e4. \uc9c0\uae08 \uc124\uc815\uc744 \uc801\uc6a9\ud558\ub824\uba74 \ud1b5\ud654\ub97c \uc885\ub8cc\ud558\uace0 \ub2e4\uc2dc \uc2dc\uc791\ud574 \uc8fc\uc138\uc694.",
          "setting.call.videocall.dynamicspeaking":
            "\ub9d0\ud558\ub294 \uc0ac\ub78c \uc704\uc8fc\ub85c \ud654\uba74 \uc804\ud658",
          "setting.call.videocall.dynamicspeaking.desc":
            "\ub9d0\ud558\uace0 \uc788\ub294 \uc0ac\ub78c\uc758 \uc601\uc0c1\uc774 \ud3ec\ucee4\uc2a4 \ud654\uba74\uc5d0 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \ubd84\ud560 \ud654\uba74 \ubaa9\ub85d\uc774 \uc5ec\ub7ec \uac1c \uc788\ub294 \uacbd\uc6b0, \ub9d0\ud558\ub294 \uc0ac\ub78c\uc758 \uc601\uc0c1\uc774 \uc790\ub3d9\uc73c\ub85c \uccab \ubc88\uc9f8 \ubaa9\ub85d\uc5d0 \ubc30\uce58\ub429\ub2c8\ub2e4.",
          "setting.call.videocall.gridviewmaxdisplay":
            "\ud55c \ud654\uba74\uc5d0 \ucd5c\ub300 49\uba85 \uc601\uc0c1 \ud45c\uc2dc",
          "setting.call.videocall.gridviewmaxdisplay.desc":
            "\ucc38\uc5ec \uba64\ubc84\ub4e4\uc758 \uc601\uc0c1\uc744 \ucd5c\ub300 49\uba85\uae4c\uc9c0 \ud55c \ud654\uba74\uc5d0 \ubaa8\uc544 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "setting.call.videocall.gridviewmaxdisplay.tooltip":
            '<![CDATA[\uc0ac\uc6a9 \uc911\uc778 PC\uc5d0\uc11c\ub294 \ucd5c\ub300 25\uba85\uae4c\uc9c0\ub9cc \ud55c \ud654\uba74\uc5d0 \ubaa8\uc544 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 <a href="https://help.line.me/line/%1/?contentId=20018989&lang=%2">\uace0\uac1d\uc13c\ud130 \ub3c4\uc6c0\ub9d0</a>\uc744 \ud655\uc778\ud574 \uc8fc\uc138\uc694.]]>',
          "setting.call.videocall.screenshare.alarmoff":
            "\uc804\uccb4 \ud654\uba74 \uacf5\uc720 \uc2dc \ud654\uba74\uc5d0 \uc54c\ub9bc \ud45c\uc2dc \uc548 \ud568",
          "setting.call.videocall.showpreview":
            "\ud1b5\ud654 \ucc38\uc5ec \uc804 \uc601\uc0c1 \ubbf8\ub9ac\ubcf4\uae30",
          "setting.call.voicesettings": "\uc74c\uc131",
          "setting.call.youtube.clipboard":
            "YouTube \ub9c1\ud06c \uc790\ub3d9 \ubd99\uc5ec\ub123\uae30",
          "setting.call.youtube.clipboard.checkbox":
            "\ud074\ub9bd\ubcf4\ub4dc \uc811\uadfc \uad8c\ud55c \ud5c8\uc6a9",
          "setting.call.youtube.clipboard.desc":
            "\ud074\ub9bd\ubcf4\ub4dc \uc811\uadfc\xa0\uad8c\ud55c\uc744 \ud5c8\uc6a9\ud558\uba74 YouTube \ud654\uba74 \uacf5\uc720 \uc2dc \ubcf5\uc0ac\ud55c \ub3d9\uc601\uc0c1 \ub9c1\ud06c\uac00 \uc790\ub3d9\uc73c\ub85c \uac80\uc0c9\ucc3d\uc5d0 \ubd99\uc5ec\ub123\uae30\ub429\ub2c8\ub2e4.",
          "setting.chats.deletedata.chatHisotry.btn.all":
            "\ub0b4 \uae30\uae30 \ubaa8\ub450",
          "setting.chats.deletedata.chatHisotry.btn.onlypc":
            "\uc9c0\uae08 \uc0ac\uc6a9 \uc911\uc778 PC",
          "setting.chats.deletedata.chatHisotry.desc":
            "\ubaa8\ub4e0 \ub300\ud654 \ub0b4\uc6a9\uc744 \uc644\uc804\ud788 \uc0ad\uc81c\ud569\ub2c8\ub2e4. \uc0ad\uc81c\ud560 \ub300\uc0c1 \uae30\uae30\ub97c \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.",
          "setting.chats.deletedata.chatHisotry.title":
            "\ubaa8\ub4e0 \ub300\ud654 ",
          "setting.default.font.label":
            "\uae30\ubcf8 \uc124\uc815 \ud3f0\ud2b8",
          "setting.desc.removeLocalChat":
            "\ubaa8\ub4e0 \ub300\ud654 \ub0b4\uc6a9\uc744 \uc644\uc804\ud788 \uc0ad\uc81c\ud569\ub2c8\ub2e4.",
          "setting.hiddenchat.empty":
            "\uc228\uae40 \uc124\uc815\ub41c \ub300\ud654\ubc29\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "setting.hiddenchat.title":
            "\uc228\uae40 \uc124\uc815\ub41c \ub300\ud654\ubc29",
          "setting.keep.alert.deleteAll":
            "\ubaa8\ub450 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \ub2e8, Keep \uba54\ubaa8 \ub0b4\uc6a9\uc740 \uc0ad\uc81c\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "setting.keep.btn.deleteAll": "\uc804\uccb4 \uc0ad\uc81c",
          "setting.keep.desc.dataonlyincludesitemsinkeep":
            "Keep\uc5d0 \uc800\uc7a5\ub41c \ud56d\ubaa9\uc758 \ud06c\uae30\ub9cc \ud45c\uc2dc\ub429\ub2c8\ub2e4(Keep \uba54\ubaa8 \ubbf8\ud3ec\ud568).",
          "setting.keep.desc.photos": "\uc0ac\uc9c4",
          "setting.keep.desc.text": "\ud14d\uc2a4\ud2b8",
          "setting.keep.desc.videos": "\ub3d9\uc601\uc0c1",
          "setting.keyword.add.error.character":
            "<![CDATA[\ub4f1\ub85d\ud560 \uc218 \uc5c6\ub294 \ubb38\uc790\uac00 \uc788\uc2b5\ub2c8\ub2e4. <, >, \uacf5\ubc31]]>",
          "setting.keyword.add.error.characterDup":
            "\uc911\ubcf5\ub41c \ud0a4\uc6cc\ub4dc\uc785\ub2c8\ub2e4.",
          "setting.keyword.add.error.characterSize":
            "\uc801\uc5b4\ub3c4 2\uc790 \uc774\uc0c1\uc744 \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4.",
          "setting.keyword.added": "\ub4f1\ub85d\ub41c \ud0a4\uc6cc\ub4dc",
          "setting.keyword.btn.add": "\ucd94\uac00",
          "setting.keyword.desc":
            "\uc77d\uc9c0 \uc54a\uc740 \uba54\uc2dc\uc9c0\uc5d0 \ud0a4\uc6cc\ub4dc\uac00 \ud3ec\ud568\ub418\uba74 \uc54c\ub824\uc90d\ub2c8\ub2e4.",
          "setting.keyword.title": "\ud0a4\uc6cc\ub4dc \uc54c\ub9bc",
          "setting.label.basic.alarmMode": "\uc54c\ub9bc \ubc29\ubc95",
          "setting.label.basic.alarmMode.showAlarm":
            "\uc54c\ub9bc\ucc3d \ub178\ucd9c",
          "setting.label.basic.alarmMode.soundAlarm":
            "\uc18c\ub9ac \uc54c\ub9bc",
          "setting.label.basic.alarmRule": "\uc54c\ub9bc \uaddc\uce59",
          "setting.label.basic.alarmRule.groupInviteAlarm":
            "\uadf8\ub8f9 \ucd08\ub300 \ubc0f \uc0c8 \uba64\ubc84 \ucc38\uc5ec \uc2dc \uc54c\ub9bc",
          "setting.label.basic.alarmRule.mention":
            "\ub2e4\ub978 \uc0ac\ub78c\uc774 \ub098\ub97c \uba58\uc158 \uc2dc \uc54c\ub9bc",
          "setting.label.basic.alarmRule.newChatAlarm":
            "\uc0c8\ub85c\uc6b4 \ub300\ud654 \uc218\uc2e0 \uc2dc \uc54c\ub9bc",
          "setting.label.basic.alarmRule.noFullScreenAlarm":
            "\uc804\uccb4 \ud654\uba74 \uc2dc \uc54c\ub9bc \ud574\uc81c",
          "setting.label.basic.alarmRule.noMobileAlarmWhileUsingPC":
            "PC\ubc84\uc804 \uc774\uc6a9 \uc2dc \ubaa8\ubc14\uc77c \uc571\uc5d0\uc11c \uc54c\ub9bc \ubc1b\uc9c0 \uc54a\uc74c \n(\uc7a0\uae08 \ubaa8\ub4dc \uc2e4\ud589 \uc2dc \ub610\ub294 3\ubd84 \uc774\uc0c1 PC\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uacbd\uc6b0 \ub2e4\uc2dc \uc54c\ub9bc \ubc1b\uc74c)",
          "setting.label.basic.alarmRule.note": "\ub178\ud2b8 \uc54c\ub9bc",
          "setting.label.basic.alarmRule.videocal":
            "\uc74c\uc131/\uc601\uc0c1 \ud1b5\ud654 \uc2dc \uc18c\ub9ac \uc54c\ub9bc\uc744 \ubc1b\uc9c0 \uc54a\uc74c",
          "setting.label.basic.alarmSound": "\uc54c\ub9bc\uc74c",
          "setting.label.basic.alarmtype": "\uc54c\ub9bc \uc720\ud615",
          "setting.label.basic.alarmtype.basic": "\uae30\ubcf8 \uc54c\ub9bc",
          "setting.label.basic.font": "\uae00\uaf34 \uc124\uc815",
          "setting.label.basic.font.desc":
            "\uae00\uc790 \ud06c\uae30\ub294 \ub300\ud654\ubc29\uc5d0\ub9cc \uc801\uc6a9\ub429\ub2c8\ub2e4.",
          "setting.label.basic.font.extraLarge": "\ub9e4\uc6b0 \ud06c\uac8c",
          "setting.label.basic.font.extraLarge.size": "16",
          "setting.label.basic.font.large": "\ud06c\uac8c",
          "setting.label.basic.font.large.size": "14",
          "setting.label.basic.font.name": "\uae00\uaf34",
          "setting.label.basic.font.normal": "\ubcf4\ud1b5",
          "setting.label.basic.font.normal.size": "12",
          "setting.label.basic.font.normal.size.mac": "13",
          "setting.label.basic.font.size": "\uae00\uc790 \ud06c\uae30",
          "setting.label.basic.font.small": "\uc791\uac8c",
          "setting.label.basic.font.small.size": "11",
          "setting.label.basic.send.key":
            "\uba54\uc2dc\uc9c0 \uc804\uc1a1 \ud0a4",
          "setting.label.private.profile.propertyName.id":
            "(ID\uc815\ubcf4\ub294 \ube44\uacf5\uac1c \uc785\ub2c8\ub2e4.)",
          "setting.label.title": "\ud658\uacbd \uc124\uc815",
          "setting.lockscreen": "\uc7a0\uae08 \ubaa8\ub4dc",
          "setting.lockscreen.time.15minutes": "15\ubd84 \ud6c4",
          "setting.lockscreen.time.1hour": "1\uc2dc\uac04 \ud6c4",
          "setting.lockscreen.time.30minutes": "30\ubd84 \ud6c4",
          "setting.lockscreen.time.3hours": "3\uc2dc\uac04 \ud6c4",
          "setting.lockscreen.time.3minutes": "3\ubd84 \ud6c4",
          "setting.lockscreen.time.5minutes": "5\ubd84 \ud6c4",
          "setting.lockscreen.turn.on":
            "PC \ubbf8\uc0ac\uc6a9 \uc2dc \uc7a0\uae08 \ubaa8\ub4dc \uc2e4\ud589",
          "setting.maintab.alarm": "\uc54c\ub9bc",
          "setting.maintab.basicSetting": "\uae30\ubcf8 \uc124\uc815",
          "setting.maintab.call": "\ud1b5\ud654",
          "setting.maintab.chat": "\ub300\ud654",
          "setting.maintab.contact": "\uce5c\uad6c\uad00\ub9ac",
          "setting.maintab.privacy": "\uac1c\uc778\uc815\ubcf4 \ubcf4\ud638",
          "setting.maintab.profile": "\ud504\ub85c\ud544",
          "setting.maintab.talk": "\ub300\ud654\xb7\ud1b5\ud654",
          "setting.messengerView.allinone.desc":
            "\ubaa9\ub85d \uc6b0\uce21\uc5d0 \ub300\ud654\ubc29\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
          "setting.messengerView.allinone.label":
            "\ub300\ud654\ubc29 \uc77c\uccb4\ud615",
          "setting.messengerView.apply.alert":
            "\ub300\ud654\ubc29 \ubcf4\uae30 \ubc29\uc2dd\uc744 \ubcc0\uacbd\ud558\uba74 \uae30\uc874\uc5d0 \uc5f4\ub824\uc788\ub294\n\ub300\ud654\ubc29\uc774 \ubaa8\ub450 \ub2eb\ud799\ub2c8\ub2e4.\n\ub300\ud654\ubc29 \ubcf4\uae30 \ubc29\uc2dd\uc744 \ubcc0\uacbd \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "setting.messengerView.label": "\ub300\ud654\ubc29 \ubcf4\uae30",
          "setting.messengerView.seperate.desc":
            "\ub300\ud654\ubc29\uc774 \ubcc4\ub3c4\uc758 \ucc3d\uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
          "setting.messengerView.seperate.label":
            "\ub300\ud654\ubc29 \ubd84\ub9ac\ud615",
          "setting.popup.private.emptyName":
            "\ud55c \uae00\uc790 \uc774\uc0c1 \uc785\ub825\ud558\uc154\uc57c \ud569\ub2c8\ub2e4.",
          "setting.popup.private.tooLongName":
            "\uc774\ub984\uc740 20\uc790\uae4c\uc9c0 \uc785\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "setting.shorcut.chatfolder.move": "\ud3f4\ub354 \uc774\ub3d9",
          "setting.shorcut.desc.chatfolder": "\ub300\ud654 \ud3f4\ub354",
          "setting.shorcut.list.previous.chat":
            "\uc774\uc804 \ub300\ud654\ubc29\uc73c\ub85c \uc774\ub3d9",
          "setting.shorcut.list.search": "\uac80\uc0c9",
          "setting.shortcut.array.window": "\ub300\ud654\ubc29 \uc815\ub82c",
          "setting.shortcut.callnlive.audio":
            "\ub9c8\uc774\ud06c \ucf1c\uae30/\ub044\uae30",
          "setting.shortcut.callnlive.video":
            "\uce74\uba54\ub77c \ucf1c\uae30/\ub044\uae30",
          "setting.shortcut.cancel.array.window":
            "\ub300\ud654\ubc29 \uc815\ub82c \ucde8\uc18c",
          "setting.shortcut.capture.copy": "\ubcf5\uc0ac",
          "setting.shortcut.capture.draw.straight":
            "\uc9c1\uc120, \uc815\uc0ac\uac01\ud615, \uc6d0 \uadf8\ub9ac\uae30",
          "setting.shortcut.capture.fix":
            "\ucea1\ucc98 \ud654\uba74 \uc774\ub3d9",
          "setting.shortcut.capture.redo": "\ub2e4\uc2dc \uc2e4\ud589",
          "setting.shortcut.capture.save": "\uc800\uc7a5",
          "setting.shortcut.capture.undo": "\uc2e4\ud589 \ucde8\uc18c",
          "setting.shortcut.chat.newline":
            "\uba54\uc2dc\uc9c0 \uc904\ubc14\uafc8",
          "setting.shortcut.chat.open.keep": "Keep \uc5f4\uae30",
          "setting.shortcut.chat.screen.capture": "\ud654\uba74 \ucea1\ucc98",
          "setting.shortcut.close.window": "\ucc3d \ub2eb\uae30",
          "setting.shortcut.lable": "\ub2e8\ucd95\ud0a4",
          "setting.shortcut.list.basic": "\uae30\ubcf8",
          "setting.shortcut.list.callnlive": "\ud1b5\ud654",
          "setting.shortcut.list.chat": "\ub300\ud654\ubc29",
          "setting.shortcut.list.friend.chat":
            "\uce5c\uad6c, \ub300\ud654\ub9ac\uc2a4\ud2b8",
          "setting.shortcut.list.viewer": "\ucf58\ud150\uce20 \ubdf0\uc5b4",
          "setting.shortcut.markdown.bold": "\uad75\uac8c",
          "setting.shortcut.markdown.codeblock": "\ubb38\ub2e8 \uac15\uc870",
          "setting.shortcut.markdown.italic": "\uae30\uc6b8\uc784\uaf34",
          "setting.shortcut.markdown.strikethrough": "\ucde8\uc18c\uc120",
          "setting.shortcut.markdown.title": "\ud14d\uc2a4\ud2b8 \uc11c\uc2dd",
          "setting.shortcut.markdown.wordblock": "\ub2e8\uc5b4 \uac15\uc870",
          "setting.shortcut.min.window": "\ucc3d \ucd5c\uc18c\ud654",
          "setting.shortcut.move.add.friend":
            "\uce5c\uad6c \ucd94\uac00 \ud0ed\uc73c\ub85c \uc774\ub3d9",
          "setting.shortcut.move.bottom":
            "\ub9e8 \uc544\ub798\ub85c \uc774\ub3d9",
          "setting.shortcut.move.chat.list":
            "\ub300\ud654 \ud0ed\uc73c\ub85c \uc774\ub3d9",
          "setting.shortcut.move.friend.list":
            "\uce5c\uad6c \ud0ed\uc73c\ub85c \uc774\ub3d9",
          "setting.shortcut.move.top": "\ub9e8 \uc704\ub85c \uc774\ub3d9",
          "setting.shortcut.on.lock": "\uc7a0\uae08 \ubaa8\ub4dc \ucf1c\uae30",
          "setting.shortcut.open.keep": "Keep \uc5f4\uae30",
          "setting.shortcut.open.note": "\ub178\ud2b8 \uc5f4\uae30",
          "setting.shortcut.open.sticker":
            "\uc2a4\ud2f0\ucee4 \ucc3d \uc5f4\uae30",
          "setting.shortcut.open.tip":
            "\ub2e8\ucd95\ud0a4 \ub3c4\uc6c0\ub9d0 \uc5f4\uae30",
          "setting.shortcut.open.window":
            "\uc0c8 \ucc3d\uc5d0\uc11c \uc5f4\uae30",
          "setting.shortcut.photo.copy": "\ud30c\uc77c \ubcf5\uc0ac",
          "setting.shortcut.photo.save": "\ud30c\uc77c \uc800\uc7a5",
          "setting.shortcut.screen.chapture": "\ud654\uba74 \ucea1\ucc98",
          "setting.shortcut.search": "\uac80\uc0c9",
          "setting.shortcut.send.file": "\ud30c\uc77c \uc804\uc1a1",
          "setting.shortcut.timeline.comment": "\ub313\uae00 \uc4f0\uae30",
          "setting.shortcut.timeline.like": "\uc88b\uc544\uc694",
          "setting.shortcut.timeline.like.pick": "\ud45c\uc815 \uc120\ud0dd",
          "setting.shortcut.tip":
            "\ub2e8\ucd95\ud0a4\ub85c LINE\uc744 \ub354\uc6b1 \ud3b8\ub9ac\ud558\uac8c \uc0ac\uc6a9\ud558\uc138\uc694.",
          "setting.shortcut.video.jump":
            "\ub3d9\uc601\uc0c1 5\ucd08 \uc55e\uc73c\ub85c/\ub4a4\ub85c \uc774\ub3d9",
          "setting.shortcut.videongif.stop":
            "\uc7ac\uc0dd/\uc7ac\uc0dd \uc911\uc9c0",
          "setting.shortcut.viewer.fullscreen":
            "\uc804\uccb4 \ud654\uba74\uc73c\ub85c \ubcf4\uae30",
          "setting.shortcut.volume.control":
            "\ub3d9\uc601\uc0c1 \ubcfc\ub968 \ud06c\uac8c/\uc791\uac8c",
          "setting.shortcut.zoominout":
            "\uc774\ubbf8\uc9c0 \ud655\ub300/\ucd95\uc18c",
          "setting.tab.download.folder":
            "\ub2e4\uc6b4\ub85c\ub4dc \ud3f4\ub354",
          "setting.tab.file.trans": "\ud30c\uc77c \uc804\uc1a1",
          "setting.tab.login": "\ub85c\uadf8\uc778",
          "setting.tab.url.preview": "URL \ubbf8\ub9ac\ubcf4\uae30",
          "setting.tab.voip": "\ud1b5\ud654",
          "setting.talk.animation.gif": "\uc560\ub2c8\uba54\uc774\uc158 GIF",
          "setting.talk.animation.gif.play":
            "\ub300\ud654\ubc29\uc5d0\uc11c \uc560\ub2c8\uba54\uc774\uc158 GIF \uc7ac\uc0dd",
          "setting.talk.backgroundSetting.apply":
            "\uc804\uccb4 \ub300\ud654\ubc29 \ubc30\uacbd\ud654\uba74\uc774 \ubcc0\uacbd\ub429\ub2c8\ub2e4.\n\uc801\uc6a9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "setting.talk.backgroundSetting.apply.allChats":
            "\uc804\uccb4 \ub300\ud654\ubc29\uc5d0 \uc801\uc6a9",
          "setting.talk.backgroundSetting.detail":
            "\uc804\uccb4 \ub300\ud654\ubc29\uc5d0 \uc801\uc6a9\ud560 \ubc30\uacbd\ud654\uba74\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4(\uc624\ud508\ucc57 \uc81c\uc678).",
          "setting.talk.backgroundSetting.selected":
            "\ubc30\uacbd\ud654\uba74 \uc120\ud0dd",
          "setting.talk.backgroundSetting.title":
            "\ub300\ud654\ubc29 \ubc30\uacbd\ud654\uba74",
          "setting.talk.heading.talk": "\ub300\ud654\ubc29 \uba54\uc2dc\uc9c0",
          "setting.talk.photo.resolution.detail":
            "\uc6d0\ubcf8 \uc774\ubbf8\uc9c0\ub294 \ucd5c\ub300 20MB\uae4c\uc9c0 \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "setting.talk.photo.resolution.option.default":
            "\uc77c\ubc18 \ud654\uc9c8",
          "setting.talk.photo.resolution.option.original": "\uc6d0\ubcf8  ",
          "setting.talk.photo.resolution.option.standard":
            "\ud45c\uc900 \ud654\uc9c8",
          "setting.talk.photo.resolution.title":
            "\uc0ac\uc9c4 \uc804\uc1a1 \ud654\uc9c8",
          "setting.talk.theme.check.seasonal":
            "\ub208\ub0b4\ub9ac\ub294 \ud6a8\uacfc",
          "setting.talk.theme.desc.seasonal": "\ud14c\ub9c8",
          "setting.theme.desc.darkmode.limitation":
            "\uc77c\ubd80 \ud654\uba74\uc5d0\ub294 \ub2e4\ud06c \ubaa8\ub4dc\uac00 \uc801\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4(\ucd94\ud6c4 \uc801\uc6a9 \uc608\uc815).",
          "setting.theme.mode.dark": "\ub2e4\ud06c \ubaa8\ub4dc",
          "setting.theme.mode.light": "\ub77c\uc774\ud2b8 \ubaa8\ub4dc",
          "setting.theme.systemSetting":
            "\uc2dc\uc2a4\ud15c \uc124\uc815\uacfc \ub3d9\uae30\ud654",
          "setting.theme.title": "\ud654\uba74 \ubaa8\ub4dc",
          "setting.url.preview.desc":
            "\ub300\ud654\ubc29\uc5d0\uc11c URL \uc774\ubbf8\uc9c0\uc640 \ub0b4\uc6a9\uc744 \ubbf8\ub9ac \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "setting.window.scaleRatio": "\ud654\uba74\ubc30\uc728",
          "setting.window.scaleRatio.default":
            "\ud654\uba74\uc5d0 \ub530\ub978 \uae30\ubcf8 \ubc30\uc728",
          "settingAlarm.label.duration": "\uc2dc\uac04",
          "settingAlarm.label.lucid": "\ud750\ub9ac\uac8c",
          "settingAlarm.label.opacity": "\ud22c\uba85\ub3c4",
          "settingAlarm.label.opaque": "\uc9c4\ud558\uac8c",
          "settingAlarm.label.setAlarmWindow":
            "\uc54c\ub9bc\ucc3d \uc124\uc815",
          "settingAlarm.label.toastContent": "\ub0b4\uc6a9",
          "settingAlarm.label.toastPreview":
            "\uba54\uc2dc\uc9c0 \ub0b4\uc6a9 \ubbf8\ub9ac\ubcf4\uae30",
          "settingAlarm.label.unitSecond": "\ucd08",
          "settingLogin.alert.autoLogin":
            "\uc790\ub3d9 \ub85c\uadf8\uc778\uc774 \ucf1c\uc838\uc788\uc2b5\ub2c8\ub2e4. \uc790\ub3d9 \ub85c\uadf8\uc778\uc744 \ud558\uc9c0 \uc54a\uc73c\ub824\uba74 \ud658\uacbd\uc124\uc815\uc5d0\uc11c \ud574\ub2f9 \uc635\uc158\uc744 \uaebc\uc8fc\uc138\uc694.",
          "settingLogin.check.autoLogin": "\uc790\ub3d9 \ub85c\uadf8\uc778",
          "settingLogin.check.autoRunWin":
            "\uc708\ub3c4\uc6b0 \uc2dc\uc791 \uc2dc \uc790\ub3d9 \uc2e4\ud589",
          "settingPrivacy.btn.ublockBuddy": "\ucc28\ub2e8\ud574\uc81c",
          "settingPrivacy.call.blur.desc":
            "\uc601\uc0c1\ud1b5\ud654 \uc911 \ub0b4 \ubc30\uacbd\uc758 \ud750\ub9b0 \uc815\ub3c4\ub97c \uc124\uc815\ud569\ub2c8\ub2e4.",
          "settingPrivacy.cleardata.cache.desc":
            "\uc784\uc2dc \uc800\uc7a5\ub41c \uce90\uc2dc\ub97c \uc815\ub9ac\ud569\ub2c8\ub2e4. \uc0ac\uc9c4, \ub3d9\uc601\uc0c1, \uc74c\uc131 \uba54\uc2dc\uc9c0, \ud30c\uc77c\uc740 \uc0ad\uc81c\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "settingPrivacy.cleardata.cache.error":
            "\uc77c\ubd80 \uce90\uc2dc\ub97c \uc815\ub9ac\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "settingPrivacy.cleardata.cache.popup":
            "\uc784\uc2dc \uc800\uc7a5\ub41c \uce90\uc2dc\uac00 \uc0ad\uc81c\ub429\ub2c8\ub2e4. \uacc4\uc18d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "settingPrivacy.label.allowCallAlarm.desc":
            "\ubaa8\ubc14\uc77c \uc571\uc5d0\ub3c4 \ub3d9\uc77c\ud558\uac8c \uc801\uc6a9\ub429\ub2c8\ub2e4.",
          "settingPrivacy.label.allowCallAlarmPC":
            "\ud1b5\ud654 \uc218\uc2e0 \ud5c8\uc6a9",
          "settingPrivacy.label.blockAndDelete.desc":
            "\ucc28\ub2e8 \uacc4\uc815 \ubaa9\ub85d\uc5d0\uc11c \uc0ad\uc81c\ud558\uaca0\uc2b5\ub2c8\uae4c?\xa0\uc774 \ubaa9\ub85d\uc5d0\uc11c \uacc4\uc815\uc744 \uc0ad\uc81c\ud574\ub3c4 \ud574\ub2f9 \uacc4\uc815\uc740 \uacc4\uc18d \ucc28\ub2e8\ub429\ub2c8\ub2e4. \uc0ad\uc81c\ud55c \uacc4\uc815\uacfc \uba54\uc2dc\uc9c0\ub97c \uc8fc\uace0\ubc1b\uc73c\ub824\uba74 \uc544\uc774\ub514\ub098 \uc804\ud654\ubc88\ud638 \uac80\uc0c9 \uae30\ub2a5\uc744\xa0\uc0ac\uc6a9\ud558\uc5ec \ud574\ub2f9 \uacc4\uc815\uc744 \ub2e4\uc2dc \uce5c\uad6c\ub85c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4.",
          "settingPrivacy.label.blockBuddyList": "\ucc28\ub2e8 \uacc4\uc815",
          "settingPrivacy.label.blockBuddyListEmpty":
            "\ucc28\ub2e8\ud55c \uacc4\uc815\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "settingPrivacy.label.blocksquarememberlist":
            "\uc624\ud508\ucc57 \uba64\ubc84 \ucc28\ub2e8 \ubaa9\ub85d",
          "settingPrivacy.label.blocksquarememberlistEmpty":
            "\ucc28\ub2e8\ud55c \uc2a4\ud018\uc5b4 \uba64\ubc84\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "settingPrivacy.label.buddySearchAllow":
            "\uce5c\uad6c \uac80\uc0c9 \ud5c8\uc6a9",
          "settingPrivacy.label.clearRecords":
            "\ub300\ud654 \ub0b4\uc6a9 \uc0ad\uc81c",
          "settingPrivacy.label.cleardata": "\ub370\uc774\ud130 \uc815\ub9ac",
          "settingPrivacy.label.cleardata.cache": "\uce90\uc2dc",
          "settingPrivacy.label.filterMessages":
            "\uce5c\uad6c\uac00 \uc544\ub2cc \uc0ac\uc6a9\uc790\uac00 \ubcf4\ub0b8 \uba54\uc2dc\uc9c0\ub294 \ucc28\ub2e8\ud569\ub2c8\ub2e4.",
          "settingPrivacy.label.filterMessages.title":
            "\uce5c\uad6c\uc758 \uba54\uc2dc\uc9c0\ub9cc \ubc1b\uae30",
          "settingPrivacy.label.hiddenBuddyList": "\uc228\uae40 \uacc4\uc815",
          "settingPrivacy.label.hiddenBuddyListEmpty":
            "\uc228\uae34 \uacc4\uc815\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "settingPrivacy.label.hideAndDelete.desc":
            "\uc228\uae40 \uacc4\uc815 \ubaa9\ub85d\uc5d0\uc11c \uc0ad\uc81c\ud558\uaca0\uc2b5\ub2c8\uae4c? \uc774 \ubaa9\ub85d\uc5d0\uc11c \uacc4\uc815\uc744 \uc0ad\uc81c\ud574\ub3c4 \ud574\ub2f9 \uacc4\uc815\uc5d0\uc11c \ubcf4\ub0b4\ub294 \uba54\uc2dc\uc9c0\ub294 \uacc4\uc18d \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\xa0\uc0ad\uc81c\ud55c \uacc4\uc815\uc5d0 \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0b4\ub824\uba74 \uc544\uc774\ub514\ub098 \uc804\ud654\ubc88\ud638 \uac80\uc0c9 \uae30\ub2a5\uc744\xa0\uc0ac\uc6a9\ud558\uc5ec \ud574\ub2f9 \uacc4\uc815\uc744 \ub2e4\uc2dc \uce5c\uad6c\ub85c \ucd94\uac00\ud574\uc57c \ud569\ub2c8\ub2e4.",
          "settingPrivacy.label.idSearchAllowYes":
            "ID \uac80\uc0c9 \ud5c8\uc6a9",
          "settingPrivacy.label.title": "\uac1c\uc778\uc815\ubcf4 \ubcf4\ud638",
          "settingProfile.error.invalidData":
            "\uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uc774\ub984\uc785\ub2c8\ub2e4.",
          "settingProfile.error.network":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \uc694\uccad\ud558\uc2e0 \n\uc791\uc5c5\uc774 \uc644\ub8cc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "settingProfile.error.server":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \uc644\ub8cc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "settingProfile.label.emailEmpty": "\uc124\uc815 \uc548 \ud568",
          "settingProfile.label.modifyprofile": "\ud3b8\uc9d1",
          "settingProfile.label.myInfo": "\ub0b4 \uc815\ubcf4",
          "settingProfile.label.nickName": "\uc774\ub984",
          "settingProfile.label.registerAcoount.input.password.error.mailAddress":
            "\uc774\uba54\uc77c \uc8fc\uc18c\uac00 \ube44\ubc00\ubc88\ud638\uc640 \uc720\uc0ac\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \n\ub2e4\ub978 \uc774\uba54\uc77c\uc744 \ub4f1\ub85d\ud574\uc8fc\uc138\uc694.",
          "settingProfile.label.registerAcoount.mailAddress": "E-mail",
          "settingProfile.label.statusEmpty": "\uc124\uc815 \uc548 \ud568",
          "settingProfile.label.statusMessage":
            "\uc0c1\ud0dc \uba54\uc2dc\uc9c0",
          "settingProfile.label.userID": "\uc544\uc774\ub514",
          "settingProfile.link.registerAcoount.mailAddress":
            "\uc774\uba54\uc77c \ub4f1\ub85d >",
          "settingProfile.statusMessage.edit":
            "\uc0c1\ud0dc \uba54\uc2dc\uc9c0\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "settingProfile.statusMessage.edit.failed":
            "\uc0c1\ud0dc \uba54\uc2dc\uc9c0 \uc800\uc7a5\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
          "settings.basic.number.edit": "\uc804\ud654\ubc88\ud638 \ubcc0\uacbd",
          "settings.delete.account": "LINE \ud0c8\ud1f4",
          "settings.delete.account.btn": "LINE \ud0c8\ud1f4",
          "settings.deleteAccount.confirm.desc":
            "LINE\uc5d0\uc11c \ud0c8\ud1f4\ud558\uba74 \ub300\ud654 \ub0b4\uc6a9, \uce5c\uad6c \ubaa9\ub85d\uc774 \n\ubaa8\ub450 \uc0ad\uc81c\ub429\ub2c8\ub2e4. \ud0c8\ud1f4\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "settings.deleteAccount.confirm.title":
            "LINE\uc5d0\uc11c \ud0c8\ud1f4\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "settings.deleteAccount.success":
            "LINE\uc744 \ud0c8\ud1f4\ud558\uc5ec \ub85c\uadf8\uc544\uc6c3\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "settings.label.tooltip": "\uc124\uc815",
          "settings.privacy.publicUserID":
            "\uc544\uc774\ub514\ub85c \uce5c\uad6c \ucd94\uac00 \ud5c8\uc6a9",
          "settings.privacy.publicUserID.description":
            "\uce5c\uad6c\ub4e4\uc774 \ub0b4 \uc544\uc774\ub514\ub97c \uac80\uc0c9\ud558\uc5ec \uce5c\uad6c\ub85c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "settings.privacy.rejectStrangeMessages":
            "\uce5c\uad6c \uba54\uc2dc\uc9c0\ub9cc \ubc1b\uae30",
          "settings.privacy.rejectStrangeMessages.description":
            "\uce5c\uad6c\uac00 \uc544\ub2cc \uc0ac\uc6a9\uc790\uc758 \uba54\uc2dc\uc9c0\ub97c \ubc1b\uc744\uc9c0 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "settings.privacy.title": "\uac1c\uc778 \uc815\ubcf4 \ubcf4\ud638",
          "settings.profile.myInfo.birthday": "\uc0dd\uc77c",
          "settings.profile.myInfo.birthday.desc.plushometab":
            "\uc774 \uc124\uc815\uc744 \ucf1c\uba74 \uc0dd\uc77c \ub2f9\uc77c\uc5d0 \ub098\ub9cc \ubcfc \uc218 \uc788\ub294 \ud2b9\ubcc4\ud55c \ucd95\ud558 \uc560\ub2c8\uba54\uc774\uc158\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \ub610\ud55c \ub0b4 \ud504\ub85c\ud544\uacfc \uce5c\uad6c\ub4e4\uc758 \ud648 \ud654\uba74, \ub300\ud654 \ud0ed\uc5d0 \ub0b4 \uc0dd\uc77c \uc54c\ub9bc\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
          "settings.profile.myInfo.birthday.showMonthday":
            "\ub0b4 \uc0dd\uc77c \uacf5\uac1c",
          "showAllContents.File": "\ud30c\uc77c",
          "showAllContents.Iink": "\ub9c1\ud06c",
          "showAllContents.ImageVideo":
            "\uc0ac\uc9c4 \ubc0f \ub3d9\uc601\uc0c1",
          "showAllContents.file.noFile":
            "\ub300\ud654\ubc29\uc5d0\uc11c \uacf5\uc720\ub41c \ud30c\uc77c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "showAllContents.moveMessage":
            "\uba54\uc2dc\uc9c0\ub85c \uc774\ub3d9",
          "showAllContents.moveMessage.lastMessage":
            "\ucd5c\uadfc \uba54\uc2dc\uc9c0\ub85c \uc774\ub3d9",
          "showAllContents.uploadMember": "%1 \ub4f1\ub85d ",
          "squar.group.settings.managemembers.request.delete.alert.notall.done":
            "\uc0ad\uc81c\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\n(\uc774\ubbf8 \ucc98\ub9ac\ub41c \uc694\uccad\uc740 \uc81c\uc678\ub418\uc5c8\uc2b5\ub2c8\ub2e4.)",
          "square.abuse.textinput":
            "\ube44\uc815\uc0c1\uc801\uc778 \ud589\ub3d9\uc774 \uac10\uc9c0\ub418\uc5b4 \uc774\uc6a9\uc774 \uc81c\ud55c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.access.changephoto":
            "\uc774 \uc624\ud508\ucc57\uc5d0\uc11c \uc0ac\uc6a9 \uc911\uc778 \ud504\ub85c\ud544 \uc0ac\uc9c4 \ubcc0\uacbd",
          "square.access.chat": "\uc0c8 \ub300\ud654\ubc29 \ub9cc\ub4e4\uae30",
          "square.access.chat.image":
            "\ub300\ud654\ubc29 \ud504\ub85c\ud544 \ubcc0\uacbd",
          "square.access.chatroomtohome":
            "SQUARE \ud648\uc73c\ub85c \uc774\ub3d9",
          "square.access.cover.image":
            "\uc624\ud508\ucc57 \ucee4\ubc84 \uc0ac\uc9c4 \ubcc0\uacbd",
          "square.access.create": "\uc624\ud508\ucc57 \ub9cc\ub4e4\uae30",
          "square.access.hide": "\uc624\ud508\ucc57 \uc124\uba85 \uc811\uae30",
          "square.access.invite": "\uce5c\uad6c \ucd08\ub300",
          "square.access.join": "\uc624\ud508\ucc57 \ucc38\uc5ec",
          "square.access.joinrequest":
            "\uc624\ud508\ucc57 \ucc38\uc5ec \uc2e0\uccad",
          "square.access.postoption":
            "\ub178\ud2b8 \uc635\uc158 \ub354\ubcf4\uae30",
          "square.access.profile.image":
            "\uc624\ud508\ucc57 \ud504\ub85c\ud544 \ubcc0\uacbd",
          "square.access.profile.nickname":
            "\uc624\ud508\ucc57 \ub2c9\ub124\uc784 \ubcc0\uacbd",
          "square.access.qrcode": "\uc624\ud508\ucc57\uc758 QR \ucf54\ub4dc",
          "square.access.search": "\uc624\ud508\ucc57 \uac80\uc0c9",
          "square.access.show":
            "\uc624\ud508\ucc57 \uc124\uba85 \ud3bc\uce58\uae30",
          "square.access.square": "\uc624\ud508\ucc57",
          "square.access.squareoption":
            "\uc624\ud508\ucc57 \uc635\uc158 \ub354\ubcf4\uae30",
          "square.access.timelinetosquare":
            "\uc624\ud508\ucc57\uc73c\ub85c \uc774\ub3d9",
          "square.access.write": "\uae00\uc4f0\uae30",
          "square.ageconfirmation.popupbutton.cancel": "\ucde8\uc18c",
          "square.ageconfirmation.popupbutton.yes":
            "\ub124, \ub9cc 18\uc138 \uc774\uc0c1\uc785\ub2c8\ub2e4.",
          "square.ageconfirmation.popupdesc.atleast18tosetrestriction":
            "\uc624\ud508\ucc57 \uc5f0\ub839 \uc81c\ud55c\uc744 \uc124\uc815\ud558\ub824\uba74 \ub9cc 18\uc138 \uc774\uc0c1\uc774\uc5b4\uc57c \ud569\ub2c8\ub2e4. \uc624\ud508\ucc57 \uc6b4\uc601\uc790\ub85c\uc11c \uba64\ubc84\ub4e4 \uc0ac\uc774\uc758 \uc131\uc778 \ub300\ud654 \uc8fc\uc81c\ub294 \ub2f4\ubc30\uc640 \uc220\uc744 \ubc97\uc5b4\ub098\uc9c0 \uc54a\ub3c4\ub85d \uad00\ub9ac\ud574 \uc8fc\uc138\uc694. \uc5f0\ub839 \uc81c\ud55c\uc740 \ud55c\ubc88 \uc124\uc815\ud558\uba74 \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.ageconfirmation.popuptitle.ageconfirmationrequired":
            "\uc5f0\ub839 \ud655\uc778 \ud544\uc694",
          "square.ageconfirmationrequired.popupbutton.cancel": "\ucde8\uc18c",
          "square.ageconfirmationrequired.popupbutton.yes":
            "\ud655\uc778 \ubc0f \ucc38\uc5ec",
          "square.ageconfirmationrequired.popupdesc.onlyusersoverlegalageallowedtojoin":
            "\uc774 \uc624\ud508\ucc57\uc5d0\ub294 \ub9cc 18\uc138 \uc774\uc0c1\ub9cc \ucc38\uc5ec\ud560 \uc218 \uc788\uc73c\uba70, \ub300\ud654 \uc2dc\uc5d0\ub294 LINE \uc624\ud508\ucc57 \uc774\uc6a9\uc57d\uad00 \ubc0f \uc774\uc6a9 \uac00\uc774\ub4dc\ub77c\uc778\uc744 \uc900\uc218\ud574\uc57c \ud569\ub2c8\ub2e4.",
          "square.ageconfirmationrequired.popuptitle.ageconfirmation":
            "\ub9cc 18\uc138 \uc774\uc0c1\ub9cc \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.announcement.donotshowagain":
            "\ub2e4\uc2dc \uc548 \ubcf4\uae30",
          "square.announcement.donotshowagain.mouseover":
            "\ub2e4\uc2dc\n\uc548 \ubcf4\uae30",
          "square.announcement.error":
            "\ud574\ub2f9 \uacf5\uc9c0\uc0ac\ud56d \uba54\uc2dc\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.announcement.message.annouce": "\uacf5\uc9c0",
          "square.announcement.minimize": "\uc811\uc5b4\ub450\uae30",
          "square.announcement.unannounce": "\uacf5\uc9c0 \ucde8\uc18c",
          "square.answer.guide":
            "\ucc38\uc5ec\ub97c \uc2e0\uccad\ud558\ub824\uba74 \uc704 \uc9c8\ubb38\uc758 \ub2f5\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "square.answer.send.done":
            "\uc624\ud508\ucc57 \ucc38\uc5ec\ub97c \uc2e0\uccad\ud588\uc2b5\ub2c8\ub2e4.",
          "square.answer.title": "\ub2f5\ubcc0 \uc785\ub825",
          "square.banreportuser.popupbutton.cancel": "\ucde8\uc18c",
          "square.banuser.popupdesc.banafterleaving":
            "\uc774\ubbf8 \uc624\ud508\ucc57\uc744 \ub098\uac04 \uc0ac\uc6a9\uc790\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \ucc38\uc5ec\ud558\uc9c0 \ubabb\ud558\ub3c4\ub85d \uac15\uc81c \ud0c8\ud1f4\uc2dc\ud0a4\uac70\ub098 \uc2e0\uace0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.chat.button.threadmessages":
            "<![CDATA[<b><font color='%1'>%2+</font></b>\uac1c \uba54\uc2dc\uc9c0]]>",
          "square.chat.button.threadmessages999":
            "<![CDATA[<b><font color='%1'>%2+</font></b>\uac1c \uba54\uc2dc\uc9c0 \ubcf4\uae30]]>",
          "square.chat.button.threadmessagesfew":
            "\uc2a4\ub808\ub4dc \uba54\uc2dc\uc9c0 \ubcf4\uae30",
          "square.chat.button.threadmessagesmany":
            "%1+\uac1c \uba54\uc2dc\uc9c0",
          "square.chat.desc.sent": "\uc804\uc1a1\ub428",
          "square.chat.err.file.exceed.capacity":
            "\ud5c8\uc6a9 \uc6a9\ub7c9\uc744 \ucd08\uacfc\ud558\uc5ec \ud30c\uc77c\uc744 \uc804\uc1a1\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.chat.menu.aboutchatroom": "\uc624\ud508\ucc57 \uad00\ub9ac",
          "square.chat.more.leaveroom": "\ub300\ud654\ubc29 \ub098\uac00\uae30",
          "square.chat.placeholder.qna": "\ub2f5\ubcc0 \uc4f0\uae30",
          "square.chat.reply.notification": "\ub2f5\uc7a5 : %1",
          "square.chat.reply.notification2": "%1\ub2d8\uc758 \ub2f5\uc7a5 : %2",
          "square.chat.setting": "\uc0c1\uc138 \uc124\uc815",
          "square.chat.settings.bg.apply.square.image":
            "\uc624\ud508\ucc57 \uc0ac\uc9c4\uc744 \ubc30\uacbd\uc5d0 \uc801\uc6a9",
          "square.chat.settings.export.title": "%1\ub300\ud654",
          "square.chat.system.msg.invite.a.b":
            "%1\ub2d8\uc774 %2\ub2d8\uc744 \ucd08\ub300\ud588\uc2b5\ub2c8\ub2e4.",
          "square.chat.system.msg.join.chat":
            "%1\ub2d8\uc774 \ub300\ud654\uc5d0 \ucc38\uc5ec\ud588\uc2b5\ub2c8\ub2e4.",
          "square.chat.system.msg.leave.chat":
            "%1\ub2d8\uc774 \ub300\ud654\ubc29\uc5d0\uc11c \ub098\uac14\uc2b5\ub2c8\ub2e4.",
          "square.chat.text.input.nickname":
            "%1\ub2d8\uc73c\ub85c \uc785\ub825",
          "square.chatcontent.button.seemoreqna": "\ub354\ubcf4\uae30",
          "square.chatcontent.tab.qna": "Q&A \uba54\uc2dc\uc9c0",
          "square.chatlist.alert.deletedchat":
            "\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ub300\ud654\ubc29\uc785\ub2c8\ub2e4. \ub2e4\ub978 \ub300\ud654\uc5d0 \ucc38\uc5ec\ud574 \ubcf4\uc138\uc694.",
          "square.chatlist.alert.max":
            "\ucd5c\ub300 \uc778\uc6d0\uc218\uc5d0 \ub3c4\ub2ec\ud558\uc5ec \ucc38\uc5ec\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "square.chatlist.join.guide":
            "\ucc38\uc5ec\ud558\uace0 \uc2f6\uc740 \ud558\uc704 \ub300\ud654\ubc29\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694. \ub300\ud654\ubc29\uc5d0 \uc785\uc7a5\ud55c \ub2e4\uc74c \ud654\uba74 \uc624\ub978\ucabd \uc704\uc5d0 \uc788\ub294 \uba54\ub274 > \ub300\ud654\ubc29 \ubaa9\ub85d\uc744 \ub204\ub974\uba74 \ub2e4\ub978 \ub300\ud654\ubc29\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.chatlist.joined.title":
            "\ucc38\uc5ec \uc911\uc778 \ub300\ud654 ",
          "square.chatlist.joined.zero":
            "\ucc38\uc5ec \uc911\uc778 \ub300\ud654\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.chatlist.max.member.desc":
            "\uba64\ubc84 \uc218\ub97c \ucd08\uacfc\ud558\uc5ec \ucc38\uc5ec\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.chatlist.public.join.alert":
            "\ucc38\uc5ec \uc2dc \ub0b4 \ub300\ud654 \ubaa9\ub85d\uc5d0\ub3c4 \n\ucd94\uac00\ub429\ub2c8\ub2e4.",
          "square.chatlist.public.join.btn": "\ucc38\uc5ec ",
          "square.chatlist.public.max.btn":
            "\ucd5c\ub300 \uc778\uc6d0\uc218 \ub3c4\ub2ec",
          "square.chatlist.public.no.msg":
            "\uba54\uc2dc\uc9c0\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.chatlist.public.title":
            "\ucc38\uc5ec \uac00\ub2a5\ud55c \ub300\ud654 ",
          "square.chatlist.public.zero":
            "\ucc38\uc5ec \uac00\ub2a5\ud55c \ub300\ud654\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.chatlist.reply.alert":
            "\ub2f5\uc7a5\uc744 \ubc1b\uc558\uc2b5\ub2c8\ub2e4.",
          "square.chatlist.square.button": "\uc624\ud508\ucc57",
          "square.chatlist.title": "\ub300\ud654\ubc29 \ubaa9\ub85d",
          "square.chatmenu.button.qna": "Q&A \uba54\uc2dc\uc9c0",
          "square.chatmenu.button.thread": "\uc2a4\ub808\ub4dc",
          "square.chatmenu.button.yourthreads":
            "\ub9c8\uc774 \uc2a4\ub808\ub4dc",
          "square.chatroom.alert.open.url":
            "\ud574\ub2f9 \ub9c1\ud06c\ub294 \uc548\uc804\ud558\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\ub9c1\ud06c\ub97c \uc5ec\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.chatroom.block.inputarea.deletedchat":
            "\ub300\ud654\ubc29\uc774 \uc0ad\uc81c\ub428",
          "square.chatroom.block.inputarea.deletedgroup":
            "\uc624\ud508\ucc57\uc774 \uc0ad\uc81c\ub428",
          "square.chatroom.block.inputarea.kickoutgroup":
            "\uc624\ud508\ucc57\uc5d0\uc11c \uac15\uc81c \ud1f4\uc7a5\ub428",
          "square.chatroom.chatlilst.guide.des":
            "\uc774 \uc624\ud508\ucc57\uc5d0 \uac1c\uc124\ub41c \ub300\ud654\ubc29\uc744 \ud55c\ub208\uc5d0 \ud655\uc778\ud558\uace0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.chatroom.chatlist.title": "\ub300\ud654\ubc29 \ubaa9\ub85d",
          "square.chatroom.confirm.desc.kickout":
            "\uc774 \uba64\ubc84\uac00 \uc624\ud508\ucc57\uc5d0\uc11c \uac15\uc81c \ud0c8\ud1f4\ub429\ub2c8\ub2e4. \uacc4\uc18d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.chatroom.create.image": "\ud504\ub85c\ud544 \uc124\uc815",
          "square.chatroom.default.announce.content":
            "'%1' \ub300\ud654\ubc29\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4.",
          "square.chatroom.deletefromall.alert":
            "\ud574\ub2f9 \uba54\uc2dc\uc9c0\uac00 \ubaa8\ub4e0 \ub300\ud654\ubc29\uc5d0\uc11c \uc0ad\uc81c\ub429\ub2c8\ub2e4. \uacc4\uc18d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.chatroom.desc.botadded":
            "%1\ub2d8\uc774 \uc624\ud508\ucc57\uc5d0 %2 \ubd07\uc744 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4.",
          "square.chatroom.desc.botremoved":
            "%1\ub2d8\uc774 \uc624\ud508\ucc57\uc5d0\uc11c %2 \ubd07\uc744 \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4.",
          "square.chatroom.error.alert.deletedchatroom":
            "\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \ub300\ud654\ubc29\uc785\ub2c8\ub2e4. \ub2e4\ub978 \ub300\ud654\uc5d0 \ucc38\uc5ec\ud574 \ubcf4\uc138\uc694.",
          "square.chatroom.input.deletedgroup":
            "\uc0ad\uc81c\ub41c \uc624\ud508\ucc57",
          "square.chatroom.input.join.btn":
            "'%1' \uc2a4\ud018\uc5b4\uc5d0 \uac00\uc785",
          "square.chatroom.invite.layer.des":
            "\ud568\uaed8 \uc774\uc57c\uae30\ud558\uace0 \uc2f6\uc740 \uce5c\uad6c\ub97c \ucd08\ub300\ud574 \ubcf4\uc138\uc694.",
          "square.chatroom.layer.upperloading":
            "\uc774\uc804 \ub300\ud654\ub97c \ubd88\ub7ec\uc624\ub294 \uc911...",
          "square.chatroom.longpress.deleteformall": "\uc9c0\uc6b0\uae30",
          "square.chatroom.longpress.deletefromall.title":
            "\ub300\ud654\ubc29\uc5d0\uc11c \uc9c0\uc6b0\uae30",
          "square.chatroom.longpress.kickout": "\uac15\uc81c\ud0c8\ud1f4",
          "square.chatroom.longpress.squarepost": "\ub178\ud2b8",
          "square.chatroom.memberlist.guest": "\uc190\ub2d8",
          "square.chatroom.setting.deletechat":
            "\ud558\uc704 \ub300\ud654\ubc29 \uc0ad\uc81c",
          "square.chatroom.setting.deletechat.description":
            "\ubaa8\ub4e0 \uba64\ubc84\uac00 \ud574\ub2f9 \ud558\uc704 \ub300\ud654\ubc29\uc744 \ub354 \uc774\uc0c1 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.chatroom.setting.report": "\uc2e0\uace0",
          "square.chatroom.settings.change.title":
            "\ub300\ud654\ubc29 \uc774\ub984",
          "square.chatroom.settings.leave.no.message":
            "\uc870\uc6a9\ud788 \ub098\uac00\uae30",
          "square.chatroom.system.alert.notfriend":
            "%1 \uc624\ud508\ucc57\uc758 %2\ub2d8\uc740 \ub0b4 \uce5c\uad6c\uac00 \uc544\ub2d9\ub2c8\ub2e4.\n\uba54\uc2dc\uc9c0\uc758 \ub0b4\uc6a9\uc744 \uc8fc\uc758\ud574 \uc8fc\uc138\uc694.",
          "square.chatroom.system.message.change.bg":
            "\uc6b4\uc601\uc790\uac00 \uc624\ud508\ucc57 \uc0ac\uc9c4\uc744 \ubcc0\uacbd\ud588\uc2b5\ub2c8\ub2e4.",
          "square.chatroom.system.message.change.maxparticipants":
            "%1\ub2d8\uc774 \ub300\ud654\ubc29 \uc815\uc6d0\uc744 %2\uba85\uc73c\ub85c \ubcc0\uacbd\ud588\uc2b5\ub2c8\ub2e4.",
          "square.chatroom.system.message.change.name":
            "%1\ub2d8\uc774 \ub300\ud654\ubc29 \uc774\ub984\uc744 '%2' \ub300\ud654\ubc29\uc73c\ub85c \ubcc0\uacbd\ud588\uc2b5\ub2c8\ub2e4.",
          "square.chatroom.system.message.change.picture":
            "%1\ub2d8\uc774 \ub300\ud654\ubc29 \ud504\ub85c\ud544\uc744 \ubcc0\uacbd\ud588\uc2b5\ub2c8\ub2e4.",
          "square.chatroom.system.message.kickout":
            "%1\ub2d8\uc774 \uc624\ud508\ucc57\uc5d0\uc11c \uac15\uc81c \ud0c8\ud1f4\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.chatroom.system.msg.alert.private":
            "%1 \uc2a4\ud018\uc5b4\uc758 \ube44\uacf5\uac1c \ub300\ud654\ubc29\uc785\ub2c8\ub2e4. \uba54\uc2dc\uc9c0 \ub0b4\uc6a9\uc744 \uc8fc\uc758\ud574 \uc8fc\uc138\uc694.",
          "square.chatroom.system.msg.alert.public":
            "%1 \uc624\ud508\ucc57\uc740 \ub204\uad6c\ub098 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uba54\uc2dc\uc9c0 \ub0b4\uc6a9\uc744 \uc8fc\uc758\ud574 \uc8fc\uc138\uc694.",
          "square.chatroom.system.msg.guide.loading":
            "\uc774\uc804 \ub300\ud654\ub294 \uc2a4\ud06c\ub864 \ud560 \ub54c\ub9cc \uc870\uae08\uc529 \ubd88\ub7ec\uc635\ub2c8\ub2e4.",
          "square.chatroom.system.msg.guide.report":
            "\ubd80\uc801\uc808\ud55c \uba54\uc2dc\uc9c0(\uc0ac\uc9c4, \ub3d9\uc601\uc0c1, \ub9c1\ud06c, \ud14d\uc2a4\ud2b8)\uc758 \uacbd\uc6b0 \ub9c8\uc6b0\uc2a4 \uc624\ub978\ucabd \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \uc2e0\uace0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.chatroom.system.msg.tooltip.private":
            "%1 \uc2a4\ud018\uc5b4\uc758 \ube44\uacf5\uac1c \ub300\ud654\ubc29\uc785\ub2c8\ub2e4.",
          "square.chatroom.system.msg.tooltip.public":
            "%1 \uc624\ud508\ucc57\uc758 \uacf5\uac1c \ub300\ud654\ubc29\uc785\ub2c8\ub2e4.",
          "square.chatroom.systemmsg.deletedchat":
            "\ub300\ud654\ubc29\uc774 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",
          "square.chatroom.systemmsg.deletedgroup":
            "\uc624\ud508\ucc57\uc774 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.chatroom.systemmsg.emptycommunity":
            "\uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \uc624\ud508\ucc57",
          "square.chatroom.systemmsg.emptyroom":
            "\uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \ub300\ud654\ubc29",
          "square.chatroom.systemmsg.kickout":
            "\uc6b4\uc601\uc790\uc5d0 \uc758\ud574 \uac15\uc81c \ud1f4\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",
          "square.chatroom.vmenu.chatlist": "\ub300\ud654\ubc29 \ubaa9\ub85d",
          "square.chatroom.vmenu.groupchatlist": "\uc2a4\ud018\uc5b4 \ud648",
          "square.chatroom.vmenu.leave.alert.outmsg.option":
            "\ub300\ud654\ubc29\uc744 \ub098\uac08 \ub54c\n\uc54c\ub9bc \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0c5\ub2c8\ub2e4.",
          "square.coadmin.alert":
            "\ubd80\uc6b4\uc601\uc790 \uad8c\ud55c\uc744 \ubd80\uc5ec\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.common.desc.usercount100kth": "%1 \u0e41\u0e2a\u0e19",
          "square.common.desc.usercount1eok": "%1\uc5b5",
          "square.common.desc.usercount1k": "%1K",
          "square.common.desc.usercount1m": "%1M",
          "square.common.desc.usercount1man": "%1\ub9cc",
          "square.common.share": "\uacf5\uc720\ud558\uae30",
          "square.community.home.alert.invited.chat":
            "\ucd08\ub300\ubc1b\uc740 \ub300\ud654\ubc29\uc5d0 \uc785\uc7a5\ud558\uaca0\uc2b5\ub2c8\uae4c?",
          "square.community.home.chat.button.start": "\uc2dc\uc791",
          "square.community.home.invite.button": "\ucd08\ub300",
          "square.community.home.msg.chat.onlymember":
            "\ub300\ud654\ub294 \uac00\uc785 \ud6c4 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n\uac00\uc785\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.community.home.msg.onlymember":
            "\ud574\ub2f9 \uc2a4\ud018\uc5b4\uc758 \ucf58\ud150\uce20\ub294 \uac00\uc785 \ud6c4 \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \n\uac00\uc785\uc774 \uc2b9\uc778\ub420 \ub54c\uae4c\uc9c0 \uae30\ub2e4\ub824 \uc8fc\uc138\uc694.",
          "square.content.home.shared":
            "\ub178\ud2b8\ub97c \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "square.cover.chat.btn": "\ub300\ud654",
          "square.cover.investmentscams":
            "LINE\uc744 \uc774\uc6a9\ud55c \uc0ac\uae30\uc5d0 \uc8fc\uc758\ud574 \uc8fc\uc138\uc694.",
          "square.cover.post.btn": "\ub178\ud2b8",
          "square.create.btn": "\uc2a4\ud018\uc5b4 \ub9cc\ub4e4\uae30",
          "square.create.category": "\uce74\ud14c\uace0\ub9ac ",
          "square.create.category.desc":
            "\uce74\ud14c\uace0\ub9ac \uc124\uc815 \uc2dc \uc624\ud508\ucc57 \uae30\ubcf8 \ud654\uba74\uc5d0 \ucd94\ucc9c \uc624\ud508\ucc57\uc73c\ub85c \ud45c\uc2dc\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.create.default.category": "\uc120\ud0dd \uc548 \ud568",
          "square.create.description": "\uc18c\uac1c",
          "square.create.description.desc":
            "\uc624\ud508\ucc57\uc5d0 \ub300\ud55c \uc18c\uac1c\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "square.create.description.input": "\uc18c\uac1c",
          "square.create.description2":
            "\uc774 \uc624\ud508\ucc57\uc5d0 \uc5b4\uc6b8\ub9ac\ub294 \ud574\uc2dc\ud0dc\uadf8(#)\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "square.create.error.no.name":
            "\uc624\ud508\ucc57 \uc774\ub984\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "square.create.error.popup.input.description.info":
            "\uc624\ud508\ucc57\uc5d0 \ub300\ud55c \uc124\uba85\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "square.create.error.popup.input.info":
            "\ud544\uc218 \uc815\ubcf4\ub97c \ubaa8\ub450 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "square.create.groupname": "\uc624\ud508\ucc57 \uc774\ub984",
          "square.create.image": "\ud504\ub85c\ud544 \uc124\uc815",
          "square.create.over.text.num.alert":
            "\ub354 \uc774\uc0c1 \uc785\ub825\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. ",
          "square.create.search": "\uac80\uc0c9 \ud5c8\uc6a9",
          "square.create.search.desc":
            "\uc774\ub984, \uc124\uba85\uc73c\ub85c \uc624\ud508\ucc57\uc744 \uac80\uc0c9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.create.setting.desc":
            "\ub2e4\ub978 \uc0ac\uc6a9\uc790\uac00 \ub0b4 \uc624\ud508\ucc57\uc744 \uac80\uc0c9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.create.sgroup.approval.desc":
            "\ucc38\uc5ec \uc2dc \uc6b4\uc601\uc790\uc758 \uc2b9\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",
          "square.create.sgroup.closedtype": "\uc2b9\uc778 \ud6c4 \uac00\uc785",
          "square.create.sgroup.opentype": "\uc989\uc2dc \uac00\uc785",
          "square.create.subchat.guide.des":
            "\uc624\ud508\ucc57\uc758 \uc6b4\uc601\uc790 \uad8c\ud55c\uacfc \uacf5\uac1c \uc124\uc815\uc774 \uc774 \uc624\ud508\ucc57\uc758 \ubaa8\ub4e0 \ud558\uc704 \ub300\ud654\ubc29\uc5d0 \ub3d9\uc77c\ud558\uac8c \uc801\uc6a9\ub429\ub2c8\ub2e4.",
          "square.create.subchat.title":
            "\ud558\uc704 \ub300\ud654\ubc29 \ub9cc\ub4e4\uae30",
          "square.create.title": "\uc624\ud508\ucc57 \ub9cc\ub4e4\uae30",
          "square.create.welcome": "\uac00\uc785 \uc778\uc0ac\ub9d0",
          "square.createchat.error.no.auth.public":
            "\uc6b4\uc601\uc790\uac00 \ud574\ub2f9 \uad8c\ud55c\uc744 \uc81c\ud55c\ud558\uc5ec \ub204\uad6c\ub098 \ucc38\uc5ec\ud560 \uc218 \uc788\ub294 \ud558\uc704 \ub300\ud654\ubc29\uc744 \ub9cc\ub4e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.createchat.inputtitle":
            "\uc81c\ubaa9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "square.createchat.title": "\uc0c8 \ub300\ud654",
          "square.createchat.type.maximum.option":
            "\ucd5c\ub300 \uba64\ubc84 \uc218",
          "square.createchat.type.maximum.option.desc":
            "\ub300\ud654\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\ub294 \ucd5c\ub300 \uba64\ubc84 \uc218\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.createchat.type.private": "\ube44\uacf5\uac1c ",
          "square.createchat.type.private.desc":
            "\ucd08\ub300\ub41c \uba64\ubc84\ub4e4\ub9cc \ub300\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.createchat.type.public": "\uacf5\uac1c",
          "square.createchat.type.public.desc":
            "\uc2a4\ud018\uc5b4 \uba64\ubc84 \ub204\uad6c\ub098 \ub300\ud654\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.createchat.type.public.option":
            "\uba64\ubc84 \uc804\uccb4 \uacf5\uac1c",
          "square.createopenchat.button.setagerestriction":
            "\uc5f0\ub839 \uc81c\ud55c \uc124\uc815",
          "square.createopenchat.desc.onlyusersoverlegalageallowed":
            "\ub9cc 18\uc138 \uc774\uc0c1\uc778 \uc0ac\uc6a9\uc790\ub9cc \uc624\ud508\ucc57\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\ub3c4\ub85d \uc81c\ud55c\ud569\ub2c8\ub2e4.",
          "square.createopenchat.desc.search":
            "\uc624\ud508\ucc57 \uba54\uc2dc\uc9c0 \uc77c\ubd80\uac00 \ud504\ub85c\ud544\uc5d0 \ud45c\uc2dc\ub418\uba70 \ub2e4\ub978 \uc0ac\ub78c\uc5d0\uac8c \uac80\uc0c9\ub420 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ud574\ub2f9 \ud45c\uc2dc \uc124\uc815\uc740 \uc624\ud508\ucc57\uc744 \ub9cc\ub4e0 \ud6c4 \uc5b8\uc81c\ub4e0\uc9c0 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.createopenchat.placeholder.enterdescription":
            "\uc124\uba85 \uc785\ub825",
          "square.createsubchat.toggle.notifyinopenchat":
            "\uc0c8\ub85c\uc6b4 \ud558\uc704 \ub300\ud654\ubc29 \uc54c\ub9bc",
          "square.default.name.title": "\uc624\ud508\ucc57 \uc774\ub984",
          "square.error.cannot.forward.contact":
            "\uc624\ud508\ucc57\uc5d0\ub294 \uc5f0\ub77d\ucc98\ub97c \ubcf4\ub0bc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.error.fail.upload.profile.image":
            "\ud504\ub85c\ud544\uc744 \ud3b8\uc9d1\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. ",
          "square.error.not.normal":
            "\uc815\uc0c1\uc801\uc73c\ub85c \ucc98\ub9ac\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. \n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "square.error.noti.kickout":
            "\ud574\ub2f9 \uc624\ud508\ucc57\uc5d0\uc11c \uac15\uc81c \ud0c8\ud1f4\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.error.popup.cannot.invite":
            "\uc2a4\ud018\uc5b4 \uc6b4\uc601\uc790\uac00 \ud574\ub2f9 \uae30\ub2a5\uc744 \uaed0\uc2b5\ub2c8\ub2e4",
          "square.error.popup.cannot.join":
            "\uc77c\uc2dc\uc801\uc73c\ub85c \ucc38\uc5ec\uac00 \uc81c\ud55c\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc74c\uc5d0 \ubc29\ubb38\ud574 \uc8fc\uc138\uc694.",
          "square.error.popup.deletedgroup":
            "\uc0ad\uc81c\ub41c \uc624\ud508\ucc57\uc785\ub2c8\ub2e4.",
          "square.error.popup.network":
            "\uc5f0\uacb0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\ub124\ud2b8\uc6cc\ud06c \uc0c1\ud0dc\ub97c \ud655\uc778\ud558\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "square.error.popup.noauth":
            "\ud574\ub2f9 \ud654\uba74\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. \n\uc124\uc815 \ud654\uba74\uc73c\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4.",
          "square.error.popup.noauth.alert":
            "\ud574\ub2f9 \ud654\uba74\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4. ",
          "square.error.popup.usingbyotheruser":
            "\ub2e4\ub978 \uc0ac\uc6a9\uc790\uac00 \ud574\ub2f9 \uc124\uc815\uc744 \ubcc0\uacbd \uc911\uc785\ub2c8\ub2e4. \n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "square.filtering.keyword.error.alert":
            "\uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \ub2e8\uc5b4\uc785\ub2c8\ub2e4.",
          "square.fraudpopup.button.cancel": "\ucde8\uc18c",
          "square.fraudpopup.button.continue": "\uacc4\uc18d",
          "square.fraudpopup.button.learnmore":
            "\uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30",
          "square.fraudpopup.desc.investmentscams":
            "SNS \uad11\uace0 \ub4f1\uc744 \ud1b5\ud574 \uc720\uba85\uc778\uc744 \uc0ac\uce6d\ud55c \ud22c\uc790 \uc0ac\uae30\uac00 \ub9ce\uc774 \ubc1c\uc0dd\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uba54\uc2dc\uc9c0\ub97c \uc8fc\uace0\ubc1b\uc744 \ub54c \ud56d\uc0c1 \uc8fc\uc758\ud574 \uc8fc\uc2dc\uace0, \uc870\uae08\uc774\ub77c\ub3c4 \uc218\uc0c1\ud55c \uc81c\uc548\uc744 \ubc1b\uc558\ub2e4\uba74 \ubc18\ub4dc\uc2dc \uc2e0\uace0\ud574 \uc8fc\uc138\uc694.",
          "square.fraudpopup.title.investmentscams":
            "\ud22c\uc790 \uc0ac\uae30\uac00 \ub9ce\uc774 \ubc1c\uc0dd\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.friendslist.join.requests":
            "\uac00\uc785 \uc2e0\uccad \uad00\ub9ac",
          "square.friendstab.newrequest":
            "\uc624\ud508\ucc57 \ucc38\uc5ec \uc2e0\uccad",
          "square.friendstab.request.count": "\uac00\uc785 \uc2e0\uccad ",
          "square.friendstab.request.counts.2.other":
            "\uac00\uc785 \uc2e0\uccad %n",
          "square.friendstab.request.counts.2.plurals.other":
            "\uac00\uc785 \uc2e0\uccad %n",
          "square.friendstab.request.counts.other":
            "%n \uac00\uc785 \uc2e0\uccad ",
          "square.friendstab.request.counts.plurals.other":
            "%n \uac00\uc785 \uc2e0\uccad",
          "square.group.create.change.image": "\uc0ac\uc9c4 \ubcc0\uacbd",
          "square.group.name": "\uc624\ud508\ucc57",
          "square.group.settings.basic":
            "\uc624\ud508\ucc57 \uae30\ubcf8 \uc124\uc815",
          "square.group.settings.change.groupname":
            "\uc624\ud508\ucc57 \uc774\ub984",
          "square.group.settings.change.myname": "\uc774\ub984",
          "square.group.settings.delete.alert":
            "\uc624\ud508\ucc57\uc744 \uc0ad\uc81c\ud558\uba74 \ub300\ud654 \ub0b4\uc6a9\uc744 \ube44\ub86f\ud558\uc5ec \ud574\ub2f9 \uc624\ud508\ucc57\uacfc \uad00\ub828\ub41c \ubaa8\ub4e0 \uc815\ubcf4\uac00 \uc0ad\uc81c\ub429\ub2c8\ub2e4. \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.group.settings.editmember.kickout":
            "\uba64\ubc84 \uac15\uc81c \ud0c8\ud1f4",
          "square.group.settings.editmember.kickout.alert.done":
            "\uac15\uc81c \ud0c8\ud1f4 \uc644\ub8cc",
          "square.group.settings.group.profile":
            "\uc624\ud508\ucc57 \ud504\ub85c\ud544 \uc218\uc815",
          "square.group.settings.groupset": "\uc624\ud508\ucc57 \uc124\uc815",
          "square.group.settings.leave":
            "\uc624\ud508\ucc57 \ub098\uac00\uae30",
          "square.group.settings.leave.alert":
            "\uc624\ud508\ucc57\uc744 \ub098\uac00\uba74 \ub300\ud654 \ub0b4\uc6a9\uc744 \ube44\ub86f\ud558\uc5ec \ud574\ub2f9 \uc624\ud508\ucc57\uacfc \uad00\ub828\ub41c \ubaa8\ub4e0 \uc815\ubcf4\uac00 \uc0ad\uc81c\ub429\ub2c8\ub2e4. \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.group.settings.leave.error.alert.admin":
            "\uc624\ud508\ucc57\uc5d0\uc11c \ud0c8\ud1f4\ud558\ub824\uba74 \uc6b4\uc601\uc790 \uad8c\ud55c\uc744\n\ub2e4\ub978 \uc0ac\ub78c\uc5d0\uac8c \uc591\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "square.group.settings.manageauth.additional":
            "\uad8c\ud55c \uc124\uc815",
          "square.group.settings.manageauth.additionalchatfeatures":
            "\ucd94\uac00 \ub300\ud654\ubc29 \uae30\ub2a5",
          "square.group.settings.manageauth.additionalchatfeatures.option.createpolls":
            "\ud22c\ud45c \ub9cc\ub4e4\uae30",
          "square.group.settings.manageauth.additionalchatfeatures.option.deletepolls":
            "\ud22c\ud45c \uc0ad\uc81c",
          "square.group.settings.manageauth.chatapp":
            "\ucd94\uac00 \ub300\ud654\ubc29 \uae30\ub2a5",
          "square.group.settings.manageauth.setmaxparticipants":
            "\ub300\ud654\ubc29 \ucc38\uc5ec \uc778\uc6d0 \uc218 \ubcc0\uacbd",
          "square.group.settings.managegroup":
            "\uc624\ud508\ucc57 \uad00\ub9ac",
          "square.group.settings.managegroup.allowtojoin":
            "\uc6b4\uc601\uc790 \uc2b9\uc778 \ud6c4 \uac00\uc785",
          "square.group.settings.managegroup.allowtojoin.desc":
            "\ucc38\uc5ec \uc2dc \uc6b4\uc601\uc790\uc758 \uc2b9\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4.",
          "square.group.settings.managegroup.allowtosearch":
            "\uc624\ud508\ucc57 \uac80\uc0c9 \ud5c8\uc6a9",
          "square.group.settings.managegroup.allowtosearch.desc":
            "\ud0a4\uc6cc\ub4dc\ub85c \uc624\ud508\ucc57\uc744 \uac80\uc0c9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.group.settings.managegroup.autotag":
            "\ud0dc\uadf8 \uc790\ub3d9 \ucd94\ucc9c ",
          "square.group.settings.managegroup.autotag.decs":
            "\uac8c\uc2dc\uae00 \uc791\uc131 \uc2dc \ud0dc\uadf8\ub97c \uc790\ub3d9\uc73c\ub85c \ucd94\ucc9c\ud569\ub2c8\ub2e4.",
          "square.group.settings.managegroup.deletegroup":
            "\uc624\ud508\ucc57 \uc0ad\uc81c",
          "square.group.settings.managegroup.invite":
            "\uba64\ubc84 \ucd08\ub300",
          "square.group.settings.managegroup.invite.desc":
            "\uc635\uc158\uc744 \ub044\uba74 \ub2e4\ub978 \uba64\ubc84\ub97c \ucd08\ub300\ud560 \uc218 \uc5c6\uc73c\uba70 \uae30\uc874\uc5d0 \uacf5\uc720\ud55c \ub9c1\ud06c\ub098 QR \ucf54\ub4dc\ub3c4 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.group.settings.managegroup.updateurl":
            "\ucd08\ub300 \ub9c1\ud06c \uc5c5\ub370\uc774\ud2b8",
          "square.group.settings.managegroup.updateurl.desc":
            "\uc5c5\ub370\uc774\ud2b8 \uc2dc \uae30\uc874 \ucd08\ub300 \ub9c1\ud06c\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \n\uacc4\uc18d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.group.settings.managemember": "\uba64\ubc84 \uad00\ub9ac",
          "square.group.settings.managemembers.alert.cannot.select":
            "%1\uba85\uae4c\uc9c0\ub9cc \uc120\ud0dd \uac00\ub2a5\ud569\ub2c8\ub2e4.",
          "square.group.settings.managemembers.allowrejoin":
            "\uac15\uc81c \ud0c8\ud1f4 \ud574\uc81c",
          "square.group.settings.managemembers.blcoktojoin.alert":
            "\uc7ac\uac00\uc785\uc744 \ud5c8\uc6a9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.group.settings.managemembers.blocktojoin":
            "\uc7ac\uac00\uc785 \uae08\uc9c0 \uba64\ubc84 \ubaa9\ub85d",
          "square.group.settings.managemembers.blocktojoin.alert":
            "\uac15\uc81c \ud0c8\ud1f4\ub97c \ud574\uc81c\ud558\uba74 \ud574\ub2f9 \uc0ac\uc6a9\uc790\uac00 \uc624\ud508\ucc57\uc5d0 \ub2e4\uc2dc \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uacc4\uc18d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.group.settings.managemembers.manageadmin":
            "\uc6b4\uc601\uc790 \uad00\ub9ac",
          "square.group.settings.managemembers.manageadmin.added":
            "\ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4. ",
          "square.group.settings.managemembers.manageadmin.alert.deletecoadmin":
            "\ubd80\uc6b4\uc601\uc790 \uad8c\ud55c\uc744 \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.group.settings.managemembers.manageadmin.cancelcoadmin":
            "\uad8c\ud55c \ud574\uc81c",
          "square.group.settings.managemembers.manageadmin.coadmin":
            "\ubd80\uc6b4\uc601\uc790 ",
          "square.group.settings.managemembers.manageadmin.handoveradmin":
            "\uc6b4\uc601\uc790 \uad8c\ud55c \uc591\ub3c4",
          "square.group.settings.managemembers.manageadmin.handoveradmin.alert":
            "\uc6b4\uc601\uc790 \uad8c\ud55c\uc744 \uc591\ub3c4\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \n\uc591\ub3c4 \uc2dc \ub0b4 \uc5ed\ud560\uc774 \ubd80\uc6b4\uc601\uc790\ub85c \ubcc0\uacbd\ub429\ub2c8\ub2e4. ",
          "square.group.settings.managemembers.manageadmin.handoveradmin.desc":
            "\ubd80\uc6b4\uc601\uc790 \uad8c\ud55c\uc744 \ubd80\uc5ec\ud558\uc5ec \uc2a4\ud018\uc5b4\ub97c \uac19\uc774 \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \n\ubd80\uc6b4\uc601\uc790\uc758 \uc5ed\ud560\uc740 \uad8c\ud55c \uad00\ub9ac\uc5d0\uc11c \uc870\uc815\ud574 \uc8fc\uc138\uc694. ",
          "square.group.settings.managemembers.manageadmin.handoveradmin.description":
            "\ubd80\uc6b4\uc601\uc790\uc5d0\uac8c \uc6b4\uc601\uc790 \uad8c\ud55c\uc744 \uc591\ub3c4\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc591\ub3c4 \uc2dc \ub0b4\uac00 \ubd80\uc6b4\uc601\uc790\ub85c \uc9c0\uc815\ub429\ub2c8\ub2e4.",
          "square.group.settings.managemembers.manageadmin.makecoadmin":
            "\ubd80\uc6b4\uc601\uc790 \uad8c\ud55c \ubd80\uc5ec",
          "square.group.settings.managemembers.manageadmin.makecoadmin.desc":
            "\ubd80\uc6b4\uc601\uc790 \uad8c\ud55c\uc744 \ubd80\uc5ec\ud558\uc5ec \uc624\ud508\ucc57\uc744 \uac19\uc774 \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \n\ubd80\uc6b4\uc601\uc790\uc758 \uad8c\ud55c\uc740 \uad8c\ud55c \uad00\ub9ac\uc5d0\uc11c \uc870\uc815\ud574 \uc8fc\uc138\uc694.",
          "square.group.settings.managemembers.manageadmin.makecoadmin.no.member":
            "\uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uba64\ubc84\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.group.settings.managemembers.manageadmin.no.coadmin":
            "\ubd80\uc6b4\uc601\uc790\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.group.settings.managemembers.manageadmin.select":
            "\uc120\ud0dd",
          "square.group.settings.managemembers.manageauth":
            "\uad8c\ud55c \uad00\ub9ac ",
          "square.group.settings.managemembers.manageauth.acceptrequest":
            "\uac00\uc785 \uc2b9\uc778",
          "square.group.settings.managemembers.manageauth.admincoadmin":
            "\uc6b4\uc601\uc790 \ubc0f \ubd80\uc6b4\uc601\uc790",
          "square.group.settings.managemembers.manageauth.adminonly":
            "\uc6b4\uc601\uc790",
          "square.group.settings.managemembers.manageauth.all":
            "\ubaa8\ub4e0 \uba64\ubc84 ",
          "square.group.settings.managemembers.manageauth.createpost":
            "\uac8c\uc2dc\uae00 \uc791\uc131 ",
          "square.group.settings.managemembers.manageauth.createpublicchat":
            "\ud558\uc704 \ub300\ud654\ubc29 \ub9cc\ub4e4\uae30",
          "square.group.settings.managemembers.manageauth.deletecontents":
            "\ub300\ud654/\uac8c\uc2dc\uae00 \uc0ad\uc81c",
          "square.group.settings.managemembers.manageauth.description":
            "\uc624\ud508\ucc57\uc758 \ub2e4\uc591\ud55c \uad8c\ud55c\uc744 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.group.settings.managemembers.manageauth.invitemembers":
            "\uba64\ubc84 \ucd08\ub300 ",
          "square.group.settings.managemembers.manageauth.kickout":
            "\uba64\ubc84 \uac15\uc81c \ud0c8\ud1f4",
          "square.group.settings.managemembers.managepost":
            "\ub178\ud2b8\uc5d0 \uae00\uc4f0\uae30",
          "square.group.settings.managemembers.request":
            "\uac00\uc785 \uc2e0\uccad",
          "square.group.settings.managemembers.request.accept": "\uc2b9\uc778",
          "square.group.settings.managemembers.request.accept.alert.done":
            "\uac00\uc785 \uc2e0\uccad\uc744 \uc2b9\uc778\ud588\uc2b5\ub2c8\ub2e4.",
          "square.group.settings.managemembers.request.accept.alert.notall.done":
            "\uac00\uc785 \uc2e0\uccad\uc744 \uc2b9\uc778\ud588\uc2b5\ub2c8\ub2e4. \uc774\ubbf8 \ucc98\ub9ac\ub41c \uc694\uccad\uc740 \uc81c\uc678\ub418\uba70 \uc77c\ubd80 \uc694\uccad\uc758 \uacbd\uc6b0 \uc778\uc6d0 \uc81c\ud55c\uc5d0 \ub530\ub77c \uc2b9\uc778\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.group.settings.managemembers.request.acceptall":
            "\uc804\uccb4 \uc2b9\uc778 ",
          "square.group.settings.managemembers.request.acceptall.alert":
            "\ubaa8\ub4e0 \uc2e0\uccad\uc744 \uc2b9\uc778\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.group.settings.managemembers.request.delete.alert":
            "\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.group.settings.managemembers.request.delete.alert.done":
            "\uc0ad\uc81c\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.group.settings.managemembers.request.delete.alert.notall.done":
            "\uc0ad\uc81c\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n(\uc774\ubbf8 \ucc98\ub9ac\ub41c \uc694\uccad\uc740 \uc81c\uc678\ub418\uc5c8\uc2b5\ub2c8\ub2e4.)",
          "square.group.settings.managemembers.request.noti.tooltip":
            "\uac00\uc785 \uc2e0\uccad \uc2dc \uc54c\ub9bc\uc744 \ubc1b\uc744\uc9c0\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",
          "square.group.settings.managemembers.request.select100":
            "\ucd5c\uadfc %1\uac74 \uc120\ud0dd",
          "square.group.settings.managemembers.request.selectall":
            "\uc804\uccb4 \uc120\ud0dd",
          "square.group.settings.managemembers.request.zero":
            "\uac00\uc785 \uc2e0\uccad\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.group.settings.memberlist":
            "\uba64\ubc84 \ubaa9\ub85d/\ucd08\ub300",
          "square.group.settings.myprofile.title": "\ub0b4 \ud504\ub85c\ud544",
          "square.group.settings.nickname": "\ub2c9\ub124\uc784",
          "square.group.settings.noti.post": "\uac8c\uc2dc\uae00 \uc54c\ub9bc",
          "square.group.settings.noti.post.dec":
            "\ud3ec\uc2a4\ud2b8 \uc54c\ub9bc\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.group.settings.policy":
            "\uc624\ud508\ucc57 \uc774\uc6a9\uc57d\uad00",
          "square.group.settings.profile.title":
            "\uc2a4\ud018\uc5b4 \ud504\ub85c\ud544",
          "square.group.settings.recieve.chat":
            "\ub300\ud654 \ucd08\ub300 \uc218\uc2e0",
          "square.group.settings.recieve.friendsrequest":
            "\uce5c\uad6c \uc2e0\uccad \ubc1b\uae30 ",
          "square.group.settings.report": "\uc624\ud508\ucc57 \uc2e0\uace0",
          "square.group.settings.reportpage.agreeandsend":
            "\ub3d9\uc758 \ud6c4 \ubcf4\ub0b4\uae30",
          "square.group.settings.reportpage.agreeandsend.thpdpa":
            "\ud655\uc778 \ubc0f \uc804\uc1a1",
          "square.group.settings.reportpage.desc":
            "\uc2e0\uace0 \uc0ac\uc720\ub97c \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.",
          "square.group.settings.reportpage.impersonation.inquirypopup":
            "\ud0c0\uc778 \uc0ac\uce6d\uc5d0 \ub300\ud55c \uc870\uc0ac\ub97c \uc704\ud574 \uc0c1\uc138 \uc815\ubcf4\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694. \ubb38\uc758\ud558\uae30 \ud654\uba74\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec \uad00\ub828 \ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.group.settings.reportpage.impersonation.inquirypopup.decline":
            "\uac74\ub108\ub6f0\uae30",
          "square.group.settings.reportpage.impersonation.inquirypopup.proceed":
            "\uc774\ub3d9",
          "square.group.settings.reportpage.reason1":
            "\uad11\uace0/\uc0ac\uae30",
          "square.group.settings.reportpage.reason2":
            "\ubd88\uac74\uc804 \uad50\uc81c \uc694\uad6c",
          "square.group.settings.reportpage.reason3":
            "\uc720\ud574\uc131 \uba54\uc2dc\uc9c0",
          "square.group.settings.reportpage.reason4": "\uae30\ud0c0",
          "square.group.settings.reportpage.reason5":
            "\uc8fc\uc81c\uc640 \ubb34\uad00\ud55c \uae00",
          "square.group.settings.reportpage.reason6": "\uc0ac\uce6d",
          "square.group.settings.reportpage.reason7": "\uc0ac\uae30",
          "square.group.settings.reportpage.report.btn": "\uc2e0\uace0",
          "square.group.settings.reportpage.reportdone":
            "\uc2e0\uace0\ud588\uc2b5\ub2c8\ub2e4.",
          "square.grouppopup.alert.alreadyjoin":
            "\uc774\ubbf8 \ucc38\uc5ec\ud55c \uc624\ud508\ucc57\uc785\ub2c8\ub2e4. \uc774 \uc624\ud508\ucc57\uc744 \ub2e4\uc2dc \uc5f4\uc5b4\uc8fc\uc138\uc694.",
          "square.grouppopup.alert.blocked":
            "\ucc38\uc5ec\uac00 \uc81c\ud55c\ub41c \uc624\ud508\ucc57\uc785\ub2c8\ub2e4. \ub2e4\uc74c\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "square.grouppopup.alert.join.ing":
            "\ucc38\uc5ec \uc2b9\uc778 \uc808\ucc28\uac00 \uc9c4\ud589 \uc911\uc785\ub2c8\ub2e4. \n\uc6b4\uc601\uc790 \uc2b9\uc778 \uc2dc \ucc38\uc5ec\uac00 \uc644\ub8cc\ub429\ub2c8\ub2e4.",
          "square.grouppopup.alert.requestdone":
            "\ucc38\uc5ec\ub97c \uc2e0\uccad\ud588\uc2b5\ub2c8\ub2e4. \uc6b4\uc601\uc790 \uc2b9\uc778 \uc2dc \ucc38\uc5ec\uac00 \uc644\ub8cc\ub429\ub2c8\ub2e4.",
          "square.grouppopup.button.join.ing":
            "\uc2b9\uc778 \ub300\uae30 \uc911...",
          "square.grouppopup.chat.count.plurals.other": "\ub300\ud654\ubc29 %1",
          "square.grouppopup.invite.tooltip":
            "LINE \uce5c\uad6c\ub97c \uc9c1\uc811 \ucd08\ub300\ud558\uac70\ub098 \ub9c1\ud06c, QR \ucf54\ub4dc\ub97c \uacf5\uc720\ud558\uc138\uc694.",
          "square.grouppopup.invitefriend": "\uce5c\uad6c \ucd08\ub300",
          "square.grouppopup.member.count.plurals.other": "\uba64\ubc84 %1",
          "square.grouppopup.post.count.plurals.other": "\ub178\ud2b8 %1",
          "square.grouppopup.qrcode": "QR \ucf54\ub4dc\ub85c \ucd08\ub300",
          "square.grouppopup.qrcode.desc":
            "QR \ucf54\ub4dc\ub97c \uc9c1\uc811 \ubcf4\uc5ec\uc8fc\uac70\ub098 \uac8c\uc2dc\uae00\ub85c \uacf5\uc720\ud574 \uc8fc\uc138\uc694.",
          "square.grouppopup.qrcode.save": "QR \ucf54\ub4dc \uc800\uc7a5",
          "square.grouppopup.qrcode.saved":
            "QR \ucf54\ub4dc\ub97c \uc800\uc7a5\ud588\uc2b5\ub2c8\ub2e4. ",
          "square.grouppopup.sendrequest": "\uac00\uc785 \uc2e0\uccad",
          "square.grouppopup.url": "\ub9c1\ud06c\ub85c \ucd08\ub300",
          "square.grouppopup.url.app":
            "\ub2e4\ub978 \uc571\uc73c\ub85c \uacf5\uc720",
          "square.grouppopup.url.line": "LINE\uc73c\ub85c \uacf5\uc720",
          "square.home.addfavorite":
            "\uc990\uaca8\ucc3e\uae30\uc5d0 \ucd94\uac00",
          "square.home.cancelfavorite": "\uc990\uaca8\ucc3e\uae30 \ud574\uc81c",
          "square.home.chat.section.invited":
            "\ucd08\ub300\ubc1b\uc740 \ub300\ud654",
          "square.home.favorite.tooltip":
            "\ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \uce5c\uad6c \ud0ed\uc758 \uc990\uaca8\ucc3e\uae30\uc5d0\n\uc624\ud508\ucc57\uc744 \ucd94\uac00\ud560 \uc218 \uc788\uc5b4\uc694.",
          "square.home.invite.copy.link": "\ub9c1\ud06c \ubcf5\uc0ac",
          "square.home.invite.save.qr": "QR \ucf54\ub4dc \uc800\uc7a5",
          "square.home.invite.share.link": "\ub9c1\ud06c \uacf5\uc720",
          "square.home.invite.share.qr": "QR \ucf54\ub4dc \uacf5\uc720",
          "square.home.menu.photo": "\uc0ac\uc9c4",
          "square.home.menu.write": "\uae00\uc4f0\uae30",
          "square.home.nickname": "%1",
          "square.home.setting": "\uc124\uc815",
          "square.home.tab.chat": "\ub300\ud654",
          "square.home.tab.post": "\uac8c\uc2dc\ud310",
          "square.home.toast.addfavorite":
            "\uc990\uaca8\ucc3e\uae30\uc5d0 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4.",
          "square.home.toast.cancelfavorite":
            "\uc990\uaca8\ucc3e\uae30\ub97c \ud574\uc81c\ud558\uc600\uc2b5\ub2c8\ub2e4.",
          "square.invite.complete.other":
            "%n\uba85\uc744 \ucd08\ub300\ud588\uc2b5\ub2c8\ub2e4.",
          "square.invite.complete.plurals.other":
            "%n\uba85\uc744 \ucd08\ub300\ud588\uc2b5\ub2c8\ub2e4.",
          "square.invite.friend": "\uce5c\uad6c \ucd08\ub300",
          "square.invite.urlscheme.chatroom.chatname":
            "'%1'\uc5d0 \ucd08\ub300",
          "square.invitemember.confirm.donotshowagain":
            "\ub2e4\uc74c\ubd80\ud130 \ud45c\uc2dc \uc548 \ud568",
          "square.invitemember.confirm.invite":
            "\ucd08\ub300 \ubc1b\uc740 \uc0ac\uc6a9\uc790\ub294 \uc774\uc804 \ub300\ud654 \ub0b4\uc6a9\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.invitemember.desc":
            "\uc2a4\ud018\uc5b4 \uba64\ubc84\ub9cc \ub300\ud654\uc5d0 \ucd08\ub300\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uba64\ubc84\uac00 \uc544\ub2cc \uc0ac\uc6a9\uc790\uc758 \uacbd\uc6b0 \uc6b0\uc120 \uc2a4\ud018\uc5b4\uc5d0 \ucd08\ub300\ud574 \uc8fc\uc138\uc694.",
          "square.invitemember.desc.urlscheme.chatroom":
            "\uc624\ud508\ucc57 \uba64\ubc84\uac00 \uc544\ub2cc \uc0ac\uc6a9\uc790\ub97c \ucd08\ub300\ud558\ub824\uba74 \uc624\ub978\ucabd \ubc84\ud2bc\uc744 \ud074\ub9ad\ud574 \uc8fc\uc138\uc694.",
          "square.invitemember.invitetogroup":
            "\uc624\ud508\ucc57\uc73c\ub85c \ucd08\ub300",
          "square.invitemember.invitetogroup.urlscheme.chatroom":
            "\ub300\ud654\ubc29\uc73c\ub85c \ucd08\ub300",
          "square.invitemember.memberlist.title": "'%1' \uba64\ubc84 %n",
          "square.invitemember.title": "\ub300\ud654 \uc0c1\ub300 \uc120\ud0dd",
          "square.invitetoopenchat.button.share": "\uacf5\uc720",
          "square.invitetoopenchat.desc.sharelinktoinvitemembers":
            "\uc624\ud508\ucc57 \ub9c1\ud06c\ub97c \uacf5\uc720\ud558\uc5ec \uce5c\uad6c\ub97c \ucd08\ub300\ud574 \ubcf4\uc138\uc694.",
          "square.join.precaution":
            "'%1' \uc624\ud508\ucc57\uc5d0 \uc624\uc2e0 \uac83\uc744 \ud658\uc601\ud569\ub2c8\ub2e4. \uc624\ud508\ucc57 \uc11c\ube44\uc2a4 \uc815\ucc45\uc744 \uc704\ubc18\ud558\ub294 \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0bc \uacbd\uc6b0 \uc0ac\uc6a9\uc774 \uc81c\ud55c\ub420 \uc218 \uc788\uc73c\ub2c8 \uc720\uc758\ud574 \uc8fc\uc138\uc694.",
          "square.join.question.guide":
            "\uc9c8\ubb38\uc744 5~50\uc790\ub85c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "square.joincode.error":
            "\ucc38\uc5ec \ucf54\ub4dc\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ud655\uc778 \ud6c4 \ub2e4\uc2dc \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "square.joincode.guide":
            "\uc6b4\uc601\uc790\uac00 \uc9c0\uc815\ud55c \ucc38\uc5ec \ucf54\ub4dc\ub97c \uc785\ub825\ud558\uba74 \uc624\ud508\ucc57\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc5b4\uc694.",
          "square.joincode.guide.description":
            "4-8\uc790\ub9ac \uc601\ubb38\uc790 \ub610\ub294 \uc22b\uc790\ub85c \uc624\ud508\ucc57 \ucc38\uc5ec \ucf54\ub4dc\ub97c \uc124\uc815\ud574 \uc8fc\uc138\uc694.",
          "square.joincode.input.guide":
            "\ucc38\uc5ec \ucf54\ub4dc\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "square.joincode.title": "\ucc38\uc5ec \ucf54\ub4dc \uc785\ub825",
          "square.joinscreen.placeholder.enteranswerhere":
            "\ub2f5\ubcc0 \uc785\ub825",
          "square.keyboardmenu.button.qna": "Q&A \uba54\uc2dc\uc9c0",
          "square.kickout.alert.done":
            "\ud574\ub2f9 \uba64\ubc84\uac00 \uc624\ud508\ucc57\uc5d0\uc11c \uac15\uc81c \ud0c8\ud1f4\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc624\ud508\ucc57 \uc124\uc815\uc758 \uba64\ubc84 \uad00\ub9ac > \uac15\uc81c \ud0c8\ud1f4 \uba64\ubc84 \ubaa9\ub85d\uc5d0\uc11c \uac15\uc81c \ud0c8\ud1f4\ub97c \ud574\uc81c\ud558\uc5ec \uc7ac\uac00\uc785\uc744 \ud5c8\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.kickout.blockoption": "\uc7ac\uac00\uc785 \uae08\uc9c0",
          "square.kickout.error.alert.admin":
            "\uc6b4\uc601\uc790\ub098 \ubd80\uc6b4\uc601\uc790\uc758 \uacbd\uc6b0 \uac15\uc81c \ud0c8\ud1f4\uc2dc\ud0ac \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.kickout.reason1": "\uad11\uace0, \uc2a4\ud338",
          "square.kickout.reason2":
            "\ubd88\uac74\uc804\ud558\uac70\ub098 \uc678\uc124\uc801\uc778 \ud45c\ud604",
          "square.kickout.reason3": "\uae30\ud0c0 \uaddc\uce59 \uc704\ubc18",
          "square.leave.last.person.alert":
            "\ub9c8\uc9c0\ub9c9 1\uc778\uc774 \ub098\uac00\uba74 \ud574\ub2f9 \ucc57\ub8f8\uc774 \uc0ad\uc81c\ub429\ub2c8\ub2e4-\ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.leftuser.kickout.btn": "\uac15\uc81c \ud0c8\ud1f4",
          "square.main.create.block.alert":
            "\ubca0\ud0c0 \ud14c\uc2a4\ud2b8 \uae30\uac04\uc5d0\ub294 \uc2a4\ud018\uc5b4\ub97c \ub9cc\ub4e4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. ",
          "square.main.create.guide":
            "\uc9c0\uae08 \uc624\ud508\ucc57\uc744 \ub9cc\ub4e4\uc5b4\n\uc0c8\ub85c\uc6b4 \uc0ac\ub78c\ub4e4\uacfc \uc774\uc57c\uae30\ud574 \ubcf4\uc138\uc694.",
          "square.main.mylist": "\ub0b4 \uc624\ud508\ucc57",
          "square.main.mylist.sortbyname": "\uc774\ub984\uc21c",
          "square.main.mylist.sortbyupdate": "\uc5c5\ub370\uc774\ud2b8\uc21c",
          "square.main.mylist.sortbyvisit": "\ucd5c\uadfc \ubc29\ubb38\uc21c",
          "square.main.mylist.viewall": "\uc804\uccb4 \ubcf4\uae30",
          "square.main.mylist.zero":
            "\ub2e4\uc591\ud55c \uc8fc\uc81c\ub85c \uc0c8\ub85c\uc6b4 \uc0ac\ub78c\ub4e4\uacfc \ub300\ud654\ud560 \uc218 \uc788\ub294 \uc624\ud508\ucc57! \uc9c0\uae08 \ub300\ud654\uc5d0 \ucc38\uc5ec\ud574 \ubcf4\uc138\uc694.",
          "square.main.search.block.alert":
            "\ubca0\ud0c0 \ud14c\uc2a4\ud2b8 \uae30\uac04\uc5d0\ub294 \uac80\uc0c9 \uae30\ub2a5\uc744 \uc774\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. ",
          "square.main.search.default.msg":
            "\uc624\ud508\ucc57 \uc774\ub984, \uc18c\uac1c",
          "square.managemembers.button.seewholeft":
            "\ucd5c\uadfc \uc624\ud508\ucc57\uc744 \ub098\uac04 \uc0ac\uc6a9\uc790",
          "square.managemembers.desc.seewholeft":
            "\ucd5c\uadfc 24\uc2dc\uac04 \uc774\ub0b4\uc5d0 \uc624\ud508\ucc57\uc744 \ub098\uac04 \uc0ac\uc6a9\uc790\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.manageopenchat.desc.setjoincode":
            "\uc624\ud508\ucc57\uc5d0 \ucc38\uc5ec\ud560 \ub54c \uc785\ub825\ud574\uc57c \ud558\ub294 \ucc38\uc5ec \ucf54\ub4dc\ub97c \uc124\uc815\ud574 \uc8fc\uc138\uc694.",
          "square.members": "\uba64\ubc84",
          "square.members.addmembers": "\ucd08\ub300\ud558\uae30",
          "square.membershipsystemmessages.button.userisbannedfromthechat":
            "\uba64\ubc84 \uac15\uc81c \ud0c8\ud1f4",
          "square.membershipsystemmessages.button.userjoinsthechat":
            "\uc0c8 \uba64\ubc84 \ucc38\uc5ec",
          "square.membershipsystemmessages.button.userleavesthechat":
            "\uba64\ubc84 \ud1f4\uc7a5",
          "square.membershipsystemmessages.desc.managesystemmessages":
            "\uba64\ubc84 \ucc38\uc5ec, \ud1f4\uc7a5, \uac15\uc81c \ud0c8\ud1f4\uac00 \uc788\uc744 \uacbd\uc6b0, \uc624\ud508\ucc57 \ub300\ud654\ubc29\uc5d0 \uacf5\uc9c0 \uba54\uc2dc\uc9c0\ub97c \ud45c\uc2dc\ud560\uc9c0 \uc5ec\ubd80\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.menu.invite": "\ucd08\ub300",
          "square.mythreads.button.seemessages.other":
            "<![CDATA[<b><font color='%1'>%n</font></b>\uac1c \uba54\uc2dc\uc9c0 \ubcf4\uae30]]>",
          "square.noti.admin":
            "%1 \uc624\ud508\ucc57\uc758 \uc6b4\uc601\uc790 \uad8c\ud55c\uc774 \ubd80\uc5ec\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.noti.coadmin":
            "%1 \uc624\ud508\ucc57\uc758 \ubd80\uc6b4\uc601\uc790 \uad8c\ud55c\uc774 \ubd80\uc5ec\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.noti.delete.chat":
            "\uc6b4\uc601\uc790\uac00 '%1' \ub300\ud654\ubc29\uc744 \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4.",
          "square.noti.deleted.coadmin":
            "%1 \uc624\ud508\ucc57\uc758 \ubd80\uc6b4\uc601\uc790 \uad8c\ud55c\uc774 \ucde8\uc18c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.noti.deleted.gorup":
            "%1 \uc624\ud508\ucc57\uc774 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.noti.join.done":
            "%1 \uc624\ud508\ucc57\uc5d0 \ucc38\uc5ec\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.noti.joinrequest":
            "%1\ub2d8\uc774 %2 \uc624\ud508\ucc57 \ucc38\uc5ec\ub97c \uc2e0\uccad\ud588\uc2b5\ub2c8\ub2e4.",
          "square.noti.kickout":
            "'%1' \uc624\ud508\ucc57\uc5d0\uc11c \uac15\uc81c \ud0c8\ud1f4\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.notification.desc.userjoinedopenchat":
            "\uc0c8 \uba64\ubc84\uac00 %1 \uc624\ud508\ucc57\uc5d0 \ucc38\uc5ec\ud588\uc2b5\ub2c8\ub2e4.",
          "square.notification.setting":
            "\uc624\ud508\ucc57 \ub178\ud2b8 \uc54c\ub9bc\n\ubaa8\ubc14\uc77c \ubc84\uc804\uc758 \uc54c\ub9bc\uc774 \ucf1c\uc838\uc788\uc5b4\uc57c PC \ubc84\uc804\uc5d0\uc11c \uc54c\ub9bc\uc744 \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.openchat.desc.adminaddedbottochat":
            "[0]\ub2d8\uc774 \uc624\ud508\ucc57\uc5d0 [1] \ubd07\uc744 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4.",
          "square.openchat.desc.adminremovedbotfromchat":
            "[0]\ub2d8\uc774 \uc624\ud508\ucc57\uc5d0\uc11c [1] \ubd07\uc744 \uc0ad\uc81c\ud588\uc2b5\ub2c8\ub2e4.",
          "square.openchat.desc.messageremovedforsharinginappropriatecontent":
            "\uc624\ud508\ucc57 \uc11c\ube44\uc2a4 \uc815\ucc45 \uc704\ubc18\uc774 \uc758\uc2ec\ub418\uc5b4 %1\ub2d8\uc758 \uba54\uc2dc\uc9c0\uac00 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.openchat.desc.userbannedbysomeoneelse":
            "%1\ub2d8\uc774 \uc624\ud508\ucc57\uc5d0\uc11c %2\ub2d8\uc744 \uac15\uc81c \ud0c8\ud1f4\uc2dc\ucf30\uc2b5\ub2c8\ub2e4.",
          "square.openchat.popup.dontshow":
            "\uc774 \uc624\ud508\ucc57\uc5d0\uc11c \ub2e4\uc2dc \ud45c\uc2dc \uc548 \ud568",
          "square.openchat.popupbutton.close": "\ub2eb\uae30",
          "square.openchat.popupbutton.deleteforall":
            "\uc804\uccb4 \ucc38\uc5ec\uc790 \ub300\ud654\ubc29\uc5d0\uc11c \uc0ad\uc81c",
          "square.openchat.popupbutton.deleteforyou":
            "\ub0b4 \ub300\ud654\ubc29\ub9cc \uc0ad\uc81c",
          "square.openchat.popupbutton.ok": "\ud655\uc778",
          "square.openchat.popupbutton.seemore":
            "\uc790\uc138\ud788 \ubcf4\uae30",
          "square.openchat.popupdesc.deletemessagesfor":
            "\uba54\uc2dc\uc9c0\ub97c \uc5b4\ub514\uc5d0\uc11c \uc0ad\uc81c\ud560\uc9c0 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.\n\ub9c8\uc6b0\uc2a4\ub97c \ud074\ub9ad\ud55c \uc0c1\ud0dc\uc5d0\uc11c \ub04c\uba74 \uba54\uc2dc\uc9c0\ub97c \ud55c\ubc88\uc5d0 \ucd5c\ub300 50\uac1c\uae4c\uc9c0 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.openchat.popupdesc.unreadmessagecountmarkedwithnicon":
            "\uc544\uc9c1 \uc77d\uc9c0 \uc54a\uc740 \uc0c8 \uba54\uc2dc\uc9c0 \uac1c\uc218 \ub300\uc2e0 N \uc544\uc774\ucf58\uc774 \ub300\ud654 \ubaa9\ub85d\uc5d0 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
          "square.openchat.popupdesc.unsendmessage":
            "\uba64\ubc84\uc758 LINE \ubc84\uc804\uc5d0 \ub530\ub77c \uba64\ubc84\uc758 \ub300\ud654\ubc29\uc5d0\uc11c \uba54\uc2dc\uc9c0\uac00 \uc0ad\uc81c\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ubcf4\ub0b8 \uba54\uc2dc\uc9c0\ub97c \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.openchat.popuptitle.deletemessages":
            "\uba54\uc2dc\uc9c0 \uc0ad\uc81c",
          "square.openchatannouncements.title.announcements":
            "\uacf5\uc9c0\uc0ac\ud56d",
          "square.openchatcharacterprofiles.button.cancel": "\ucde8\uc18c",
          "square.openchatcharacterprofiles.button.save": "\uc800\uc7a5",
          "square.openchatcharacterprofiles.title.selectcharacter":
            "\uce90\ub9ad\ud130 \uc120\ud0dd",
          "square.openchatentry.button.confirm": "\ud655\uc778",
          "square.openchatentry.desc.dontsendrudemessages":
            "<![CDATA[<font color=\\'#07B53B\\'>\ubd88\ucf8c\uac10\uc744 \uc720\ubc1c\ud558\uac70\ub098</font> <font color=\\'#07B53B\\'>\ubd80\uc801\uc808\ud55c \ud589\ub3d9</font>\uc740 \uc0bc\uac00\uc8fc\uc138\uc694.]]>",
          "square.openchatentry.desc.followopenchatrules":
            "<![CDATA[<font color=\\'#07B53B\\'>\uc704 \uaddc\uce59\uc744 \uc704\ubc18\ud560 \uacbd\uc6b0</font> \uc624\ud508\ucc57 \uc774\uc6a9\uc774 \uc81c\ud55c\ub420 \uc218 \uc788\uc5b4\uc694.]]>",
          "square.openchatentry.desc.treatmemberswithrespect":
            "<![CDATA[\ubaa8\ub450\ub97c \uc704\ud55c \uacf5\uac04\uc774 \ub420 \uc218 \uc788\ub3c4\ub85d <font color=\\'#07B53B\\'>\uc11c\ub85c\ub97c \ubc30\ub824\ud574 \uc8fc\uc138\uc694</font>.]]>",
          "square.openchatentry.header.dontsendrudemessages":
            "2. \uce5c\uc808\ud558\uac8c",
          "square.openchatentry.header.followopenchatrules":
            "3. \ubaa8\ub450\uac00 \uc990\uac70\uc6b4 \uc624\ud508\ucc57",
          "square.openchatentry.header.treatmemberswithrespect":
            "1. \uc11c\ub85c \uc874\uc911\ud558\uba70!",
          "square.openchatentry.title.openchatuserules":
            "\uc624\ud508\ucc57 \uc774\uc6a9 \uaddc\uce59",
          "square.openchatinvite.desc.userinvitedtojoinchat":
            "'%1' \uc624\ud508\ucc57\uc5d0 \ucd08\ub300\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.openchatinvite.desc.userinvitedtojoinsquare":
            "'%1' \uc624\ud508\ucc57\uc5d0 \ucd08\ub300\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.openchatlist.desc.viewchatandaddtofavorites": "",
          "square.openchatlist.header.yourchats":
            "\ucc38\uc5ec \uc911\uc778 \ub300\ud654 %1",
          "square.openchatliveinvite.popupdesc.usefeatureonmobileapp":
            "LINE \ubaa8\ubc14\uc77c \ubc84\uc804\uc5d0\uc11c \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "square.openchatmember.button.default": "\uae30\ubcf8",
          "square.openchatmember.button.oldjoin": "\uc624\ub798\ub41c \uc21c",
          "square.openchatmember.button.recentjoin": "\ucd5c\uc2e0\uc21c",
          "square.openchatmember.desc.days.other": "%d\uc77c \uc804",
          "square.openchatmember.desc.hours.other": "%d\uc2dc\uac04 \uc804",
          "square.openchatmember.desc.justnow": "\ubc29\uae08 \uc804",
          "square.openchatmember.desc.lastvisited": "\ucd5c\uadfc \ubc29\ubb38",
          "square.openchatmember.desc.minutes.other": "%d\ubd84 \uc804",
          "square.openchatmembers.desc.hundredthousandmembersth": "%1",
          "square.openchatmembers.desc.membersen": "%1",
          "square.openchatmembers.desc.memberskoja": "%1",
          "square.openchatmembers.desc.membersth": "%1",
          "square.openchatmembers.desc.tenthousandmemberskoja": "%1\ub9cc",
          "square.openchatmembers.desc.tenthousandmembersth": "%1",
          "square.openchatmembers.desc.thousandmembersen": "%1",
          "square.openchatmembers.desc.thousandmembersth": "%1",
          "square.openchatmenu.button.hidemessagecount":
            "\uc0c8 \uba54\uc2dc\uc9c0 \uac1c\uc218 \ud45c\uc2dc \uc548 \ud568\n\uc544\uc9c1 \uc77d\uc9c0 \uc54a\uc740 \uc0c8 \uc624\ud508\ucc57 \uba54\uc2dc\uc9c0 \uac1c\uc218 \ub300\uc2e0 N \uc544\uc774\ucf58\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
          "square.openchatmenu.button.showmessagecount":
            "\uc0c8 \uba54\uc2dc\uc9c0 \uac1c\uc218 \ud45c\uc2dc",
          "square.openchatmenu.desc.joindate": "yyyy.mm.dd\uc5d0 \ucc38\uc5ec",
          "square.openchatmenu.desc.messagereplies":
            "\ub2e4\ub978 \uba64\ubc84\uac00 \ub0b4 \uba54\uc2dc\uc9c0\uc5d0 \ub2f5\uc7a5\ud558\uba74 \uc54c\ub9bc\uc744 \ubc1b\uc2b5\ub2c8\ub2e4.",
          "square.openchatmenu.desc.onlyadmin":
            "\uc6b4\uc601\uc790\uc640 \ubd80\uc6b4\uc601\uc790\ub9cc \uba64\ubc84\uc758 \uc624\ud508\ucc57 \ucc38\uc5ec \ub0a0\uc9dc\uc640 \ucd5c\uadfc \ubc29\ubb38 \ub0a0\uc9dc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.openchatmenu.desc.visitdays.other":
            "%1\uc77c \uc804 \ubc29\ubb38",
          "square.openchatmenu.desc.visitmonths.other":
            "%1\uac1c\uc6d4 \uc804 \ubc29\ubb38",
          "square.openchatmenu.desc.visittoday": "\uc624\ub298 \ubc29\ubb38",
          "square.openchatmenu.desc.visityester": "\uc5b4\uc81c \ubc29\ubb38",
          "square.openchatmenu.toggle.messagereplies":
            "\ub0b4 \uba54\uc2dc\uc9c0\uc5d0 \ub2f5\uc7a5",
          "square.openchatmessage.desc.noreactions":
            "\uc544\uc9c1 \ub9ac\uc561\uc158\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.openchatmessagefield.desc.readonlymode":
            "\uc77d\uae30 \uc804\uc6a9 \ubaa8\ub4dc\uac00 \uc124\uc815\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.openchatnotes.desc.subchatmemberscanseenotes":
            "\ub178\ud2b8 \uacf5\uc720 \uc2dc \ud558\uc704 \ub300\ud654\ubc29 \uba64\ubc84\ub4e4\ub3c4 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.openchatnotificationsettings.header.openchatnotifications":
            "\uc624\ud508\ucc57",
          "square.openchatphoneverification.popupdesc.verifyphonenumberonmobileapp":
            "\ubaa8\ub450\uac00 \uc548\uc804\ud558\uac8c \uc624\ud508\ucc57\uc744 \uc774\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ubaa8\ubc14\uc77c \uc571\uc5d0\uc11c \uc804\ud654\ubc88\ud638\ub97c \uc778\uc99d\ud574 \uc8fc\uc138\uc694.",
          "square.openchatphoneverification.popuptitle.verificationrequired":
            "\uc804\ud654\ubc88\ud638\ub97c \uc778\uc99d\ud574 \uc8fc\uc138\uc694.",
          "square.openchatpopup.button.cancel": "\ucde8\uc18c",
          "square.openchatpopup.button.confirm": "\ud655\uc778",
          "square.openchatpopup.desc.changesetting":
            "\ubcc0\uacbd\ud55c \uc124\uc815\uc774 \uc774 \uc624\ud508\ucc57\uacfc \ubaa8\ub4e0 \ud558\uc704 \ub300\ud654\ubc29\uc5d0 \ub3d9\uc77c\ud558\uac8c \uc801\uc6a9\ub429\ub2c8\ub2e4. \uc124\uc815\uc744 \ubcc0\uacbd\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.openchatprivacysettings.desc.agerestrictedchat":
            "\uc774 \uc624\ud508\ucc57\uc740 \ub9cc 18\uc138 \uc774\uc0c1\ub9cc \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.openchatprivacysettings.desc.opentoallages":
            "\uc774 \uc624\ud508\ucc57\uc740 \ubaa8\ub4e0 \uc5f0\ub839\uc758 \uc0ac\uc6a9\uc790\uac00 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.openchatprivacysettings.popupdesc.entercodetojoinchat":
            "\uc624\ud508\ucc57 \ucc38\uc5ec \ucf54\ub4dc\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694. \uc624\ud508\ucc57 \uacf5\uac1c \uc124\uc815 \uc635\uc158\uc744 \ucc38\uc5ec \ucf54\ub4dc \uc785\ub825\uc73c\ub85c \ubcc0\uacbd\ud558\uba74 \ubbf8\uc131\ub144\uc790\ub098 \uc544\uc9c1 \ub098\uc774\ub97c \uc778\uc99d\ud558\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790\ub294 \ucc38\uc5ec\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.openchatprivacysettings.popupdesc.enterquestiontojoinchat":
            "\uc624\ud508\ucc57\uc5d0 \ucc38\uc5ec\ud558\ub824\ub294 \uc0ac\ub78c\uc5d0\uac8c \ubcf4\ub0b4\ub294 \uc9c8\ubb38\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694. \uc6b4\uc601\uc790\ub098 \ubd80\uc6b4\uc601\uc790\uac00 \uc2e0\uccad\uc11c\ub97c \uac80\ud1a0\ud55c \ud6c4 \uba64\ubc84\ub85c \uc2b9\uc778\ud574\uc57c \ud569\ub2c8\ub2e4. \uc624\ud508\ucc57 \uacf5\uac1c \uc124\uc815\uc744 \uc6b4\uc601\uc790 \uc2b9\uc778\uc73c\ub85c \ubcc0\uacbd\ud558\uba74 \ubbf8\uc131\ub144\uc790\ub098 \uc544\uc9c1 \ub098\uc774\ub97c \uc778\uc99d\ud558\uc9c0 \uc54a\uc740 \uc0ac\uc6a9\uc790\ub294 \ucc38\uc5ec\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.openchatprofile.button.join":
            "\uc0c8 \ud504\ub85c\ud544\ub85c \ucc38\uc5ec",
          "square.openchatprofile.desc.chatsetindifferentcountry":
            "\ub2e4\ub978 \uad6d\uac00 \ubc0f \uc9c0\uc5ed\uc758 \uc624\ud508\ucc57\uc785\ub2c8\ub2e4.",
          "square.openchatprofile.desc.openchatsettoreadonly":
            "\uc77d\uae30 \uc804\uc6a9 \ubaa8\ub4dc \uc124\uc815 \uc911",
          "square.openchatprofile.desc.tooltip":
            "\uc0c8\ub85c\uc6b4 \uc774\ub984\uacfc \ud504\ub85c\ud544 \uc0ac\uc9c4\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc774 \uc624\ud508\ucc57\uc5d0 \ucc38\uc5ec\ud569\ub2c8\ub2e4.",
          "square.openchatsetting.desc.maxpeople":
            "\uba54\uac00\ucc57\uc5d0\uc11c\ub294 \uc774 \uc124\uc815\uc744 \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.openchatsetting.desc.mentionnoti":
            "\ub2e4\ub978 \uc0ac\ub78c\uc774 \ub098\ub97c \uba58\uc158\ud588\uc744 \ub54c \uc54c\ub9bc\uc744 \ubc1b\uc2b5\ub2c8\ub2e4. \uba58\uc158 \uc54c\ub9bc\uc740 \ub300\ud654 \uc54c\ub9bc\uc774 \uaebc\uc838 \uc788\uc744 \ub54c\uc5d0\ub3c4 \ubc1c\uc1a1\ub429\ub2c8\ub2e4.",
          "square.openchatsetting.desc.mentions": "\uba58\uc158",
          "square.openchatsetting.desc.onlyopen":
            "\ubaa8\ub4e0 \uc5f0\ub839\ub300\uac00 \ucc38\uc5ec\ud560 \uc218 \uc788\ub294 \uc624\ud508\ucc57\uc5d0\uc11c\ub9cc \uc774 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.openchatsetting.desc.visibility":
            "\uba54\uc2dc\uc9c0 \uac80\uc0c9 \ubc0f \ubbf8\ub9ac\ubcf4\uae30 \ud5c8\uc6a9",
          "square.openchatsetting.desc.visibilityallowed": "\ud5c8\uc6a9",
          "square.openchatsetting.desc.visibilitynotallowed":
            "\ud5c8\uc6a9 \uc548 \ud568",
          "square.openchatsetting.desc.visiforco":
            "\ud558\uc704 \ub300\ud654\ubc29 \uba54\uc2dc\uc9c0\uac00 \uac80\uc0c9 \uacb0\uacfc\uc5d0 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uc774 \uc124\uc815\uc740 \uc624\ud508\ucc57\uc758 \uac80\uc0c9 \ud5c8\uc6a9 \uc0c1\ud0dc\uc5d0 \ub530\ub77c \ub2ec\ub77c\uc9c8 \uc218 \uc788\uc73c\uba70, \uc124\uc815 \ubcc0\uacbd \uad8c\ud55c\uc740 \uc6b4\uc601\uc790\uc5d0\uac8c\ub9cc \uc788\uc2b5\ub2c8\ub2e4.",
          "square.openchatsettings.button.allowmessagesfrom":
            "\uba54\uc2dc\uc9c0 \ud5c8\uc6a9 \ub300\uc0c1",
          "square.openchatsettings.button.continue": "\uacc4\uc18d",
          "square.openchatsettings.button.leavemainchat":
            "\uba54\uc778 \ub300\ud654\ubc29 \ub098\uac00\uae30",
          "square.openchatsettings.button.leavesubchat":
            "\ud558\uc704 \ub300\ud654\ubc29 \ub098\uac00\uae30",
          "square.openchatsettings.button.managemembershipsystemmessages":
            "\uc2dc\uc2a4\ud15c \uba54\uc2dc\uc9c0 \uad00\ub9ac",
          "square.openchatsettings.button.settoreadonlymode":
            "\uc77d\uae30 \uc804\uc6a9 \ubaa8\ub4dc\ub85c \uc124\uc815",
          "square.openchatsettings.desc.addopenchatdescription":
            "\uc124\uba85 \uc785\ub825",
          "square.openchatsettings.desc.coverphotosetasprofilephotoandbackground":
            "\ub4f1\ub85d\ud55c \uc0ac\uc9c4\uc774 \uc624\ud508\ucc57 \ud504\ub85c\ud544 \ubc0f \ubc30\uacbd\ud654\uba74\uc73c\ub85c \uc124\uc815\ub429\ub2c8\ub2e4.",
          "square.openchatsettings.desc.getnotifiedwhensomeonejoins":
            "\uc624\ud508\ucc57\uc5d0 \uc0c8 \uba64\ubc84\uac00 \ucc38\uc5ec\ud558\uba74 \uc54c\ub9bc\uc744 \ubc1b\uc2b5\ub2c8\ub2e4.",
          "square.openchatsettings.desc.readonlymodeformembers":
            "\uc6b4\uc601\uc790\uc640 \ubd80\uc6b4\uc601\uc790\ub9cc \ub300\ud654\ubc29\uc5d0\uc11c \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0bc \uc218 \uc788\ub3c4\ub85d \uc124\uc815\ud569\ub2c8\ub2e4.",
          "square.openchatsettings.header.chatsettings": "",
          "square.openchatsettings.header.details": "",
          "square.openchatsettings.header.editsubchatprofile":
            "\ud558\uc704 \ub300\ud654\ubc29 \ud504\ub85c\ud544 \ud3b8\uc9d1",
          "square.openchatsettings.header.openchatsettings": "",
          "square.openchatsettings.header.subchatsettings": "",
          "square.openchatsettings.placeholder.enterhashtags":
            "\uc624\ud508\ucc57 \uc18c\uac1c",
          "square.openchatsettings.popup.searchoff":
            "\ubaa8\ub4e0 \uba54\uc2dc\uc9c0\uac00 \uc624\ud508\ucc57 \ud504\ub85c\ud544\uacfc \uac80\uc0c9 \uacb0\uacfc\uc5d0 \ub354\uc774\uc0c1 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uacc4\uc18d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.openchatsettings.popup.searchon":
            "\uc0c8 \uba54\uc2dc\uc9c0\uac00 \uc624\ud508\ucc57 \ud504\ub85c\ud544\uacfc \uac80\uc0c9 \uacb0\uacfc\uc5d0 \ud45c\uc2dc\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uacc4\uc18d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.openchatsettings.popupdesc.selectacoadmin":
            "\ud558\uc704 \ub300\ud654\ubc29\uc744 \ub098\uac00\ub824\uba74 \ub2e4\ub978 \uba64\ubc84\uc5d0\uac8c \ubd80\uc6b4\uc601\uc790 \uad8c\ud55c\uc744 \ubd80\uc5ec\ud574 \uc8fc\uc138\uc694.",
          "square.openchatsettings.toggle.newmembernotification":
            "\uc0c8 \uba64\ubc84 \uc54c\ub9bc",
          "square.openchatsettingstatus.desc.readonlymodedisabled":
            "\ub300\ud654\ubc29\uc758 \ubaa8\ub4e0 \ucc38\uc5ec\uc790\uac00 \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.openchatsettingstatus.desc.readonlymodeenabled":
            "\uc6b4\uc601\uc790\ub9cc \uba54\uc2dc\uc9c0\ub97c \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.openchatsettingv.desc.allmessages":
            "\ubaa8\ub4e0 \uba54\uc2dc\uc9c0",
          "square.openchatsettingv.desc.dontallow":
            "\ud5c8\uc6a9 \uc548 \ud568",
          "square.openchatsettingv.desc.off":
            "\uc624\ud508\ucc57 \uac80\uc0c9\uc744 \ud5c8\uc6a9\ud55c \uacbd\uc6b0\uc5d0\ub9cc \uc774 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.openchatsettingv.desc.on":
            "\uc624\ud508\ucc57 \uba54\uc2dc\uc9c0\uac00 \ud504\ub85c\ud544\uc5d0 \ud45c\uc2dc\ub418\uba70 \ub2e4\ub978 \uc0ac\ub78c\uc5d0\uac8c \uac80\uc0c9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.openchatsharelink.desc.sharelinktoinvitefriends":
            "\uce5c\uad6c\ub97c \uc774 \uc624\ud508\ucc57\uc5d0 \ucd08\ub300\ud558\uc5ec \ud568\uaed8 \ub300\ud654\ud574 \ubcf4\uc138\uc694.",
          "square.openchatsharelink.title.sharelink":
            "\uc624\ud508\ucc57 \ub9c1\ud06c \uacf5\uc720",
          "square.openchatsubchat.title.subchatname":
            "\ud558\uc704 \ub300\ud654\ubc29 \uc774\ub984",
          "square.openchatwallpapersettings.desc.wallpaperonlyseenbyyou":
            "\uc124\uc815\ud55c \ub300\ud654\ubc29 \ubc30\uacbd\ud654\uba74\uc740 \ub098\uc5d0\uac8c\ub9cc \uc801\uc6a9\ub429\ub2c8\ub2e4.",
          "square.pdpa.policy.agree.btn": "\ud655\uc778 \ubc0f \ub3d9\uc758",
          "square.personaloption.alert.error.name":
            "\uc774\ubbf8 \uc0ac\uc6a9\uc911\uc778 \uc774\ub984\uc785\ub2c8\ub2e4. \ub2e4\ub978 \uc774\ub984\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "square.personaloption.chat":
            "\ub300\ud654 \ucd08\ub300 \uc218\uc2e0",
          "square.personaloption.chat.desc":
            "\uc624\ud508\ucc57 \uba64\ubc84\uc758 \ucd08\ub300 \uba54\uc2dc\uc9c0\ub97c \ubc1b\uc2b5\ub2c8\ub2e4.",
          "square.personaloption.copy":
            "\ub9c1\ud06c\ub97c \ubcf5\uc0ac\ud588\uc2b5\ub2c8\ub2e4. ",
          "square.personaloption.friendrequest":
            "\uce5c\uad6c \uc2e0\uccad \ubc1b\uae30",
          "square.personaloption.friendrequest.desc":
            "\uba64\ubc84\uac00 \ub098\uc5d0\uac8c \uce5c\uad6c \uc2e0\uccad\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.personaloption.greetingmessage":
            "\uac00\uc785 \uc2e0\uccad \uba54\uc2dc\uc9c0",
          "square.personaloption.greetingmessage.default":
            "\uba54\uc2dc\uc9c0\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "square.personaloption.guide":
            "\ub2c9\ub124\uc784\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "square.personaloption.join.btn": "\ucc38\uc5ec",
          "square.personaloption.joincode.btn":
            "\ucc38\uc5ec \ucf54\ub4dc \uc785\ub825",
          "square.personaloption.profile.title":
            "\uc624\ud508\ucc57 \ud504\ub85c\ud544",
          "square.personaloption.profile.title.tooltip.desc":
            "\uc774 \uc624\ud508\ucc57\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc774\ub984\uacfc \ud504\ub85c\ud544 \uc0ac\uc9c4\uc744 \uc124\uc815\ud574 \uc8fc\uc138\uc694. LINE \ud504\ub85c\ud544\uc740 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "square.personaloption.sendrequest.btn": "\ucc38\uc5ec \uc2e0\uccad",
          "square.personaloption.welcomemsg":
            "\uac00\uc785 \uc778\uc0ac\ub9d0 ",
          "square.policy.agree.btn": "\ub3d9\uc758 ",
          "square.policy.title": "\uc774\uc6a9\uc57d\uad00 \ubc0f \uc815\ucc45",
          "square.policy.viewall":
            "\uc624\ud508\ucc57 \uc774\uc6a9\uc57d\uad00 \uc804\ubb38 \ubcf4\uae30",
          "square.popup.button.grantpermission": "\uad8c\ud55c \ubd80\uc5ec",
          "square.popup.button.setaspublic": "\uc804\uccb4 \uacf5\uac1c",
          "square.post.announcement.announce": "\uc62c\ub9ac\uae30",
          "square.post.announcement.delete": "\ub178\ud2b8 \uc0ad\uc81c",
          "square.post.announcement.delete.desc":
            "\uc0ad\uc81c \uc2dc \uc911\uc694 \ub178\ud2b8\uac00 \ucde8\uc18c\ub429\ub2c8\ub2e4. \uacc4\uc18d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.post.announcement.guide":
            "\uacf5\uc720\ud558\uace0 \uc2f6\uc740 \ub178\ud2b8\ub294 \uc911\uc694 \ub178\ud2b8\ub85c \ub4f1\ub85d!",
          "square.post.announcement.list.title": "\uc911\uc694 \ub178\ud2b8",
          "square.post.announcement.list.zero":
            "\uc544\uc9c1 \uc791\uc131\ub41c \ub178\ud2b8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.post.announcement.mark":
            "\uc911\uc694 \ub178\ud2b8\ub85c \uc62c\ub9ac\uae30",
          "square.post.announcement.mark.desc":
            "\ub9e4\uc77c \ucc98\uc74c \uc62c\ub9ac\ub294 \uc911\uc694 \ub178\ud2b8\uc5d0 \ud55c\ud574, \ubaa8\ub4e0 \uc624\ud508\ucc57 \uba64\ubc84\uc5d0\uac8c \uc54c\ub9bc\uc774 \ud55c \ubc88 \ubc1c\uc1a1\ub429\ub2c8\ub2e4.",
          "square.post.announcement.postui": "\uc911\uc694 \uac8c\uc2dc\uae00",
          "square.post.announcement.postui2":
            "<b>\uc911\uc694 \ub178\ud2b8</b>\uc785\ub2c8\ub2e4.",
          "square.post.announcement.push":
            "[%1] \uc911\uc694 \ub178\ud2b8\uac00 \uc62c\ub77c\uc654\uc2b5\ub2c8\ub2e4.",
          "square.post.announcement.remove":
            "\uc911\uc694 \ub178\ud2b8 \ucde8\uc18c",
          "square.post.announcement.seeall.plural.other":
            "%1\uac1c\uc758 \ub178\ud2b8",
          "square.post.endpage.squarename": "%1 \uc2a4\ud018\uc5b4",
          "square.post.error.deletedcomment":
            "\uc774\ubbf8 \uc0ad\uc81c\ub41c \ub313\uae00\uc785\ub2c8\ub2e4.",
          "square.post.error.deletedjoined":
            "\uc774\ubbf8 \uc0ad\uc81c\ub41c \ucc38\uc5ec\uae00\uc785\ub2c8\ub2e4. ",
          "square.post.error.deletedpost":
            "\uc774\ubbf8 \uc0ad\uc81c\ub41c \ub178\ud2b8\uc785\ub2c8\ub2e4.",
          "square.post.error.write":
            "\uc6b4\uc601\uc790\uac00 \ud574\ub2f9 \uad8c\ud55c\uc744 \uc81c\ud55c\ud558\uc5ec \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. ",
          "square.post.hashtag.title": "%1 \uc2a4\ud018\uc5b4\uc758 %2",
          "square.post.join": "\uac00\uc785",
          "square.post.joinguide":
            "\ub2a6\uc73c\uba74 \uc190\ud574! '%1'\uc5d0 \uac00\uc785\ud558\uace0 \uc7ac\ubbf8\uc788\ub294 \uae00\uacfc \ub300\ud654\ub97c \ud568\uaed8 \uc990\uaca8\ubcf4\uc138\uc694.",
          "square.post.linktype.chatlist":
            "\uc624\ud508\ucc57 \ub178\ud2b8\ub97c \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "square.post.linktype.scroll":
            "\uc624\ud508\ucc57 \ub178\ud2b8\ub97c \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "square.post.linktype.title": "\ub178\ud2b8 \ubcf4\uae30",
          "square.post.share.chatlist": "\uc624\ud508\ucc57\uc5d0 \uacf5\uc720",
          "square.post.share.popup": "\ub178\ud2b8 \uacf5\uc720",
          "square.post.title": "\ub178\ud2b8",
          "square.post.write.guide":
            "\uc624\ud508\ucc57\uc5d0 \uacf5\uc720\ud569\ub2c8\ub2e4.",
          "square.post.write.guidecountryspecific":
            "\uc624\ud508\ucc57\uc5d0 \uacf5\uc720\ud569\ub2c8\ub2e4.",
          "square.post.write.hashtag":
            "\uc2a4\ud018\uc5b4 \uba64\ubc84\ub4e4\uacfc \uac19\uc740 \uc8fc\uc81c\uc758 \ud0dc\uadf8\ub85c \n\uae00\uc744 \uc62c\ub824 \uc774\uc57c\uae30\ub97c \ub098\ub204\uc5b4 \ubcf4\uc138\uc694.",
          "square.post.zeropage.newpost": "\uae00\uc4f0\uae30",
          "square.post.zeropage.welcome":
            "\uc624\ud508\ucc57 \uccab \ub178\ud2b8\uc758 \uc8fc\uc778\uacf5\uc774 \ub418\uc5b4\uc8fc\uc138\uc694!",
          "square.postpopup.join":
            "\ud574\ub2f9 \uae30\ub2a5\uc740 \uba64\ubc84\ub9cc \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2a4\ud018\uc5b4\uc5d0 \uac00\uc785\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.privacy.setting.approval": "\uc6b4\uc601\uc790 \uc2b9\uc778",
          "square.privacy.setting.guide":
            "\ucc38\uc5ec \ucf54\ub4dc\ub97c \uc785\ub825\ud558\uac70\ub098 \uc6b4\uc601\uc790\uac00 \uc2b9\uc778\ud574\uc57c \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.privacy.setting.joincode":
            "\ucc38\uc5ec \ucf54\ub4dc \uc785\ub825",
          "square.privacy.setting.off": "\uc804\uccb4 \uacf5\uac1c",
          "square.privacy.setting.off.guide":
            "\ub204\uad6c\ub098 \uc790\uc720\ub86d\uac8c \uc624\ud508\ucc57\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.privacy.setting.title": "\uacf5\uac1c \uc124\uc815",
          "square.privacy.turnoff.alert":
            "\ub204\uad6c\ub098 \ucc38\uc5ec\ud560 \uc218 \uc788\ub3c4\ub85d \uc624\ud508\ucc57\uc774 \uacf5\uac1c\ub429\ub2c8\ub2e4. \uacc4\uc18d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "square.privcay.setting.off.guide":
            "\ub204\uad6c\ub098 \uc790\uc720\ub86d\uac8c \uc624\ud508\ucc57\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.qrcode.save.failed":
            "QR \ucf54\ub4dc \uc800\uc7a5\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
          "square.readonlyopenchat.popupbutton.ok": "\ud655\uc778",
          "square.repairdata.button.repairdata": "\ub3d9\uae30\ud654",
          "square.repairdata.desc.syncrepairdata":
            "\uc624\ud508\ucc57 \ub370\uc774\ud130\ub97c \ub3d9\uae30\ud654\ud558\uc5ec \ub204\ub77d\ub41c \ub0b4\uc6a9\uc744 \ubcf5\uad6c\ud569\ub2c8\ub2e4.\n\ub3d9\uae30\ud654 \ub300\uc0c1: \uc624\ud508\ucc57 \uad00\ub828 \uc815\ubcf4, \uae30\ud0c0 \uc124\uc815 \ub4f1",
          "square.repairdata.popupdesc.repairinginprogress":
            "\ub3d9\uae30\ud654 \uc911...\n\ud654\uba74\uc744 \ub2eb\uc9c0 \ub9d0\uace0 \uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824 \uc8fc\uc138\uc694.",
          "square.repairdata.popupdesc.synccomplete":
            "\ub3d9\uae30\ud654\uac00 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.repairdata.title.repairdata":
            "\uc624\ud508\ucc57 \ub370\uc774\ud130 \ub3d9\uae30\ud654",
          "square.report.page.reason01":
            "\uc6d0\uc870 \uad50\uc81c/\ubd88\uac74\uc804 \uad50\uc81c \uc694\uad6c",
          "square.report.page.reason02":
            "\ud3ed\ub825\uc801/\uc545\uc758\uc801/\uc131\uc801\uc778 \ucee8\ud150\uce20\ub4f1\uc758 \uc720\ud574\uc131 \uba54\uc2dc\uc9c0",
          "square.report.page.reason03":
            "\uad11\uace0/\uc2a4\ud338/\uc0ac\uae30 \ub4f1 \uc0ac\uc6a9\uc790\ub97c \ud604\ud639\ud558\ub294 \ucf58\ud150\uce20",
          "square.report.page.reason04":
            "\uc790\uc0b4/\ud14c\ub7ec\ub4f1 \uc720\ud574\ud55c \uc704\ud5d8 \ud589\uc704",
          "square.report.policy.desc":
            "\uc2e0\uace0 \uc811\uc218\ud558\uc2e0 \ub0b4\uc6a9\uc740 \ud655\uc778 \ud6c4 \uc624\ud508\ucc57 \uc6b4\uc601 \uc815\ucc45\uc5d0 \ub530\ub77c \ucc98\ub9ac\ub429\ub2c8\ub2e4.",
          "square.report.policy.desc01":
            "\uc2e0\uace0 \uc811\uc218\ud55c \ub0b4\uc6a9\uc740 SQUARE \uc5d0\uc11c 24\uc2dc\uac04 \uac80\ud1a0\uc791\uc5c5\uc744 \uc9c4\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc6b4\uc601\uc815\ucc45\uc5d0 \uc704\ubc30\ub418\ub294\uc9c0 \uac80\ud1a0\ud558\uc5ec \uc870\uce58\ub97c \ucde8\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.report.policy.desc02":
            "\ud5c8\uc704 \uc2e0\uace0\ud55c \uacbd\uc6b0 \ubcf8\uc778\uc774 \uc81c\uc7ac\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4",
          "square.report.policy.message":
            "\uc6b4\uc601\uc815\ucc45\uc744 \uc704\ubc18\ud558\uc5ec \uc774\uc6a9\uc774 \uc81c\ud55c\ub429\ub2c8\ub2e4. (\uc57d xx \uc2dc\uac04 \ub3d9\uc548)",
          "square.report.subTitle":
            "%1\n\uc774 \uba64\ubc84\uc758 \ub178\ud2b8\ub97c \uc2e0\uace0\ud569\ub2c8\ub2e4.",
          "square.reportopenchat.desc.reportchatfromprofile":
            "\ucd5c\uadfc \uba54\uc2dc\uc9c0 100\uac74, \uc2e0\uace0\ub41c \uc624\ud508\ucc57 \uc815\ubcf4(\uc624\ud508\ucc57 \uc0ac\uc9c4, \uc624\ud508\ucc57 \uc774\ub984, \uba64\ubc84 \uc218), \uc2e0\uace0\ub41c \uc624\ud508\ucc57 \uc6b4\uc601\uc790 \ubc0f \uc2e0\uace0\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \ub0b4\ubd80 \uc2dd\ubcc4\uc790)",
          "square.reportopenchat.desc.reportchatfromsettings":
            "\ucd5c\uadfc \uba54\uc2dc\uc9c0 50\uac74, \uc2e0\uace0\ub41c \uc624\ud508\ucc57 \uc815\ubcf4(\uc624\ud508\ucc57 \uc0ac\uc9c4, \uc624\ud508\ucc57 \uc774\ub984, \uba64\ubc84 \uc218), \uc2e0\uace0\ub41c \uc624\ud508\ucc57 \uc6b4\uc601\uc790 \ubc0f \uc2e0\uace0\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \ub0b4\ubd80 \uc2dd\ubcc4\uc790)",
          "square.reportopenchat.desc.reportcommentonopenchatnote":
            "\uc2e0\uace0\ub41c \ub313\uae00 \uc815\ubcf4(\ud14d\uc2a4\ud2b8, \uc774\ubbf8\uc9c0, \uc774\ubaa8\ud2f0\ucf58), \uc2e0\uace0\ub41c \ub313\uae00\uc774 \uc791\uc131\ub41c \uc624\ud508\ucc57 \uc815\ubcf4(\uc624\ud508\ucc57 \uc0ac\uc9c4, \uc624\ud508\ucc57 \uc774\ub984, \uba64\ubc84 \uc218), \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \ud504\ub85c\ud544 \uc0ac\uc9c4, \ub0b4\ubd80 \uc2dd\ubcc4\uc790, \ucc38\uc5ec \uc0c1\ud0dc),  \uc2e0\uace0\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \ub0b4\ubd80 \uc2dd\ubcc4\uc790)",
          "square.reportopenchat.desc.reportopenchatmember":
            "\ucd5c\uadfc \uba54\uc2dc\uc9c0 100\uac74, \uc2e0\uace0\ub41c \uc624\ud508\ucc57 \uc815\ubcf4(\uc624\ud508\ucc57 \uc0ac\uc9c4, \uc624\ud508\ucc57 \uc774\ub984, \uba64\ubc84 \uc218), \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \ud504\ub85c\ud544 \uc0ac\uc9c4, \ub0b4\ubd80 \uc2dd\ubcc4\uc790), \uc2e0\uace0\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \ub0b4\ubd80 \uc2dd\ubcc4\uc790)",
          "square.reportopenchat.desc.reportopenchatmessage":
            "\ucd5c\uadfc \uba54\uc2dc\uc9c0 10\uac74, \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790\uac00 \ucc38\uc5ec\ud55c \uc624\ud508\ucc57 \uc815\ubcf4(\uc624\ud508\ucc57 \uc0ac\uc9c4, \uc624\ud508\ucc57 \uc774\ub984, \uba64\ubc84 \uc218), \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \ud504\ub85c\ud544 \uc0ac\uc9c4, \ub0b4\ubd80 \uc2dd\ubcc4\uc790), \uc2e0\uace0\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \ub0b4\ubd80 \uc2dd\ubcc4\uc790)",
          "square.reportopenchat.desc.reportopenchatnote":
            "\uc2e0\uace0\ub41c \ub178\ud2b8 \uc815\ubcf4(\ud14d\uc2a4\ud2b8, \uc774\ubbf8\uc9c0, \ub3d9\uc601\uc0c1, \uc774\ubaa8\ud2f0\ucf58), \uc2e0\uace0\ub41c \ub178\ud2b8\uac00 \uc791\uc131\ub41c \uc624\ud508\ucc57 \uc815\ubcf4(\uc624\ud508\ucc57 \uc0ac\uc9c4, \uc624\ud508\ucc57 \uc774\ub984, \uba64\ubc84 \uc218), \uc2e0\uace0\ub41c \uc0ac\uc6a9\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \ud504\ub85c\ud544 \uc0ac\uc9c4, \ub0b4\ubd80 \uc2dd\ubcc4\uc790, \ucc38\uc5ec \uc0c1\ud0dc), \uc2e0\uace0\uc790 \uc815\ubcf4(\ub2c9\ub124\uc784, \ub0b4\ubd80 \uc2dd\ubcc4\uc790)",
          "square.requesttojoin.button.submit": "\uc81c\ucd9c",
          "square.set.joincode.input.guide": "\ucf54\ub4dc \uc785\ub825",
          "square.set.question.input.guide":
            "\ucc38\uc5ec \uc2e0\uccad\uc790\uc5d0\uac8c \uc81c\uc2dc\ud560 \uc9c8\ubb38\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694. \uc2b9\uc778 \uc5ec\ubd80\ub294 \uc2e0\uccad\uc790\uc758 \ub2f5\ubcc0\uc744 \ud655\uc778\ud55c \ud6c4 \uacb0\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.setopenchatprofile.button.characterprofile":
            "\uce90\ub9ad\ud130 \ud504\ub85c\ud544",
          "square.setting.auth.announcement": "\uacf5\uc9c0 \uc62c\ub9ac\uae30",
          "square.setting.auth.message.post":
            "\uba54\uc2dc\uc9c0 \ubc0f \ub178\ud2b8 \uc0ad\uc81c",
          "square.settings.deleteaccount.desc":
            "\uc624\ud508\ucc57 \uc6b4\uc601\uc790 \uad8c\ud55c\uc740 \ub2e4\ub978 \uc0ac\ub78c\uc5d0\uac8c \uc790\ub3d9\uc73c\ub85c \uc591\ub3c4\ub429\ub2c8\ub2e4.",
          "square.settings.managesquare.defaultchatroom.desc":
            "\uae30\ubcf8 \ub300\ud654\ubc29\uc740 \uc0ad\uc81c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "square.settings.managesquare.defaultchatroom.title":
            "%1 \uc2a4\ud018\uc5b4\uc758 \uae30\ubcf8 \ub300\ud654\ubc29",
          "square.settings.managesquare.privatechat":
            "\ube44\uacf5\uac1c \ub300\ud654 \ud5c8\uc6a9",
          "square.settings.managesquare.privatechat.desc":
            "\uba64\ubc84\uac00 \ube44\uacf5\uac1c \ub300\ud654\ubc29\uc744 \ub9cc\ub4e4\uac70\ub098, 1:1\ub85c \ub300\ud654\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.settings.memberlist.members.subtitle": "\uba64\ubc84",
          "square.settings.members": "\uba64\ubc84 (%n)",
          "square.settings.myprofile.leavesquare":
            "\uc624\ud508\ucc57 \ub098\uac00\uae30",
          "square.sub.name.title":
            "\ud558\uc704 \ub300\ud654\ubc29 \uc774\ub984",
          "square.thread.desc.nochat":
            "\uc2a4\ub808\ub4dc\uc758 \uba54\uc2dc\uc9c0\ub294 \ub300\ud654\ubc29\uc5d0 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ",
          "square.thread.desc.startofthread":
            "\ub300\ud654\ubc29\uc5d0\uc11c \ubcf4\uae30",
          "square.thread.placeholder.replytothread":
            "\uc2a4\ub808\ub4dc\uc5d0 \ub2f5\uc7a5",
          "square.thread.title.thread": "\uc2a4\ub808\ub4dc",
          "square.thread.toast.nolongerwatching":
            "\uc990\uaca8\ucc3e\uae30 \uc2a4\ub808\ub4dc\uc5d0\uc11c \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.thread.toast.nowwatching":
            "\uc990\uaca8\ucc3e\uae30 \uc2a4\ub808\ub4dc\uc5d0 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "square.timeline.button.tooltip":
            "\uc0c8\ub85c\uc6b4 \uc0ac\ub78c\ub4e4\uacfc\n\uc7ac\ubbf8\uc788\ub294 \uc218\ub2e4 \ud55c\ud310!",
          "square.tooltip.chatroom.settings.changename":
            "\uae30\ubcf8 \ub300\ud654\ubc29 \uc774\ub984\uacfc \ud504\ub85c\ud544\uc744 \ub9c8\uc74c\ub300\ub85c \ubc14\uafd4\ubcf4\uc138\uc694!",
          "square.unsupported.version.message":
            "\uc774 \ubc84\uc804\uc5d0\uc11c\ub294 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\nLINE\uc744 \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud574 \uc8fc\uc138\uc694.",
          "square.urlscheme.alert.linkjoin.function.off":
            "\ucd08\ub300 \ub9c1\ud06c\ub85c \ucc38\uc5ec\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc624\ud508\ucc57 \uba64\ubc84\uc5d0\uac8c \uce5c\uad6c \ucd08\ub300\ub97c \uc694\uccad\ud574 \uc8fc\uc138\uc694.",
          "square.urlscheme.desc2": "",
          "square.urlscheme.error.notexist":
            "\uc874\uc7ac\ud558\uc9c0 \uc54a\ub294 \uc624\ud508\ucc57\uc785\ub2c8\ub2e4.",
          "square.urlscheme.invite.msg":
            "\uc624\ud508\ucc57\uc5d0 \ucd08\ub300\ud569\ub2c8\ub2e4.",
          "square.urlscheme.package":
            "[%1] \uc624\ud508\ucc57\uc5d0 \ucd08\ub300\ud569\ub2c8\ub2e4. \n%3\n%2",
          "square.urlscheme.package.chatroom":
            "%1 \uc624\ud508\ucc57\uc5d0 \ucd08\ub300\ud569\ub2c8\ub2e4. \ub9c1\ud06c\ub97c \uc120\ud0dd\ud558\uba74 \ub300\ud654\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n%2",
          "square.urlscheme.package.chatroom2":
            "'%1' \uc624\ud508\ucc57 \ub300\ud654\ubc29\uc5d0 \ucd08\ub300\ud569\ub2c8\ub2e4. \ub9c1\ud06c\ub97c \uc120\ud0dd\ud558\uba74 \ub300\ud654\uc5d0 \ucc38\uc5ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "square.user.admin": "\uc6b4\uc601\uc790",
          "square.user.coadmin": "\ubd80\uc6b4\uc601\uc790",
          "square.userpopup.blockinvite": "\ucd08\ub300 \ucc28\ub2e8",
          "square.userpopup.error.alert.notmember":
            "\uc774 \uc624\ud508\ucc57\uc758 \uba64\ubc84\uac00 \uc544\ub2d9\ub2c8\ub2e4.",
          "square.userpopup.friendsinfo.btn":
            "\uce5c\uad6c \uc815\ubcf4 \ubcf4\uae30 ",
          "square.userpopup.friendsrequest.btn": "\uce5c\uad6c \uc2e0\uccad",
          "square.userpopup.kickout.ban.btn": "\uac15\uc81c \ud0c8\ud1f4",
          "square.userpopup.kickout.btn": "\uac15\uc81c \ud0c8\ud1f4",
          "square.userpopup.kickout.cancel.btn": "\ucde8\uc18c",
          "square.userpopup.post.count.btn": "\uac8c\uc2dc\uae00",
          "square.yourthreads.title.yourthreads":
            "\ub9c8\uc774 \uc2a4\ub808\ub4dc",
          "sticion.msg.desc.expired":
            "\uc774\ubaa8\ud2f0\ucf58\uc758 \uc720\ud6a8\uae30\uac04\uc774 \uc9c0\ub0ac\uc2b5\ub2c8\ub2e4.",
          "sticker.btn.deleteThisSticker": "\uc2a4\ud2f0\ucee4 \uc0ad\uc81c",
          "sticker.btn.openWebStore": "\uc2a4\ud2f0\ucee4 \uc0f5",
          "sticker.customsticker.btn.edit": "\ubb38\uad6c \uc218\uc815",
          "sticker.customsticker.cancelalert.desc":
            "\uc785\ub825\ud558\uc2e0 \ub0b4\uc6a9\uc774 \uc0ad\uc81c\ub429\ub2c8\ub2e4. \uc774 \ud654\uba74\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "sticker.customsticker.discard.alert": "\ub098\uac00\uae30",
          "sticker.customsticker.edit.overflow":
            "\ubb38\uad6c\uac00 \ub108\ubb34 \uae41\ub2c8\ub2e4.",
          "sticker.customsticker.error.updatename.desc":
            "\uc8c4\uc1a1\ud569\ub2c8\ub2e4. \ubb38\uad6c\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.",
          "sticker.customsticker.invalidwordupdate.desc":
            "\ubb38\uad6c\uc5d0 \ubd80\uc801\uc808\ud55c \ub0b4\uc6a9\uc774 \ud3ec\ud568\ub418\uc5b4 \uc2a4\ud2f0\ucee4\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc2a4\ud2f0\ucee4\ub97c \uacc4\uc18d \uc0ac\uc6a9\ud558\ub824\uba74 \ubb38\uad6c\ub97c \uc218\uc815\ud574 \uc8fc\uc138\uc694.",
          "sticker.customsticker.sync.alert":
            "PC\xa0\ubc84\uc804\uc5d0\uc11c \uc218\uc815\ud55c \ubb38\uad6c\ub294 LINE \ubaa8\ubc14\uc77c \ubc84\uc804\uc5d0 \uc989\uc2dc \ubc18\uc601\ub418\uc9c0 \uc54a\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc218\uc815\ub41c \uc2a4\ud2f0\ucee4\ub97c \ud734\ub300\ud3f0\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub824\uba74 LINE\uc758 \uc124\uc815 > \uc2a4\ud2f0\ucee4 > \ub0b4\xa0\uc2a4\ud2f0\ucee4\uc5d0\uc11c\xa0\ub2e4\uc6b4\ub85c\ub4dc\ud574 \uc8fc\uc138\uc694.",
          "sticker.customsticker.tooltip":
            "\uc6d0\ud558\ub294 \uc2a4\ud2f0\ucee4 \ubb38\uad6c\ub85c \uc218\uc815\ud574 \ubcf4\uc138\uc694!",
          "sticker.download.btn": "\ub2e4\uc6b4\ub85c\ub4dc",
          "sticker.download.fail":
            "\ub2e4\uc6b4\ub85c\ub4dc\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694.",
          "sticker.downloadAll.confirm":
            "\uc2a4\ud2f0\ucee4\ub97c \ubaa8\ub450 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "sticker.downloadAll.desc":
            "\ubcf4\uc720\ud55c \uc2a4\ud2f0\ucee4\ub97c \ud55c \ubc88\uc5d0 \ubaa8\ub450 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc138\uc694.",
          "sticker.downloadAll.downloading":
            "\uc2a4\ud2f0\ucee4 \ub2e4\uc6b4\ub85c\ub4dc \uc911...",
          "sticker.downloading.desc":
            "\uc2a4\ud2f0\ucee4 \ub2e4\uc6b4\ub85c\ub4dc \uc911\uc785\ub2c8\ub2e4. \n\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824 \uc8fc\uc138\uc694.",
          "sticker.edit.hint.default":
            "'****'\uc758 \ubb38\uad6c\ub97c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "sticker.edit.invalidword.desc":
            "\uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub294 \ub2e8\uc5b4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",
          "sticker.error.downloadlfailed.desc":
            "\uc2a4\ud2f0\ucee4\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.",
          "sticker.expired.desc":
            "%1\uc758 \uc720\ud6a8\uae30\uac04\uc774 \ub9cc\ub8cc\ub418\uc5b4 \ubaa9\ub85d\uc5d0\uc11c \uc0ad\uc81c\ub429\ub2c8\ub2e4.",
          "sticker.msg.desc.delete": "\uc0ad\uc81c\ud558\uae30",
          "sticker.msg.desc.expired":
            "\uc2a4\ud2f0\ucee4 \uc720\ud6a8\uae30\uac04\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "sticker.msgsticker.button.back": "\ub4a4\ub85c",
          "sticker.msgsticker.button.cancel": "\ucde8\uc18c",
          "sticker.msgsticker.button.edit": "\ubb38\uad6c \uc218\uc815",
          "sticker.msgsticker.button.save": "\uc800\uc7a5",
          "sticker.msgsticker.desc.howtoedit":
            "\ubb38\uad6c\ub97c \uc218\uc815\ud558\uace0 \uc2f6\uc740 \uc2a4\ud2f0\ucee4\ub97c \ud074\ub9ad\ud574 \uc8fc\uc138\uc694.",
          "sticker.msgsticker.desc.prompt":
            "\ubcc0\uacbd\ud55c \ubb38\uad6c\ub294 \ub2e4\uc74c\uc5d0 \ubcf4\ub0b4\ub294 \uc2a4\ud2f0\ucee4\ubd80\ud130 \ubc18\uc601\ub429\ub2c8\ub2e4.",
          "sticker.msgsticker.validation.errorrefresh":
            "\ubb38\uad6c\ub97c \ud45c\uc2dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc2a4\ud2f0\ucee4\ub97c \ud074\ub9ad\ud558\uc5ec \uc0c8\ub85c\uace0\uce68\ud574 \uc8fc\uc138\uc694.",
          "sticker.msgsticker.validation.toolong":
            "\ubb38\uad6c\ub97c \uc9e7\uac8c \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "sticker.nearlyExpired.desc.other":
            "\uc774 \uc2a4\ud2f0\ucee4\ub294 %n\uc77c \ud6c4\uc5d0 \ub9cc\ub8cc\ub429\ub2c8\ub2e4.",
          "sticker.recommendedSticker.label": "\ucd94\ucc9c \uc2a4\ud2f0\ucee4",
          "sticker.search.hint": "\uac80\uc0c9",
          "sticker.search.nosearchresult":
            "\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "sticker.stickerspremium.deletsticker.popup":
            "\uc774 \uc2a4\ud2f0\ucee4\ub97c \ub0b4 \ud504\ub9ac\ubbf8\uc5c4 \uc2a4\ud2f0\ucee4\uc5d0\uc11c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "sticker.stickerspremium.dropped.desc":
            "\uc774 \uc2a4\ud2f0\ucee4\ub97c \uacc4\uc18d \uc0ac\uc6a9\ud558\ub824\uba74 \uac1c\ubcc4 \uad6c\uc785\ud574 \uc8fc\uc138\uc694.",
          "sticker.stickerspremium.dropped.title":
            "LINE \uc2a4\ud2f0\ucee4 \ud504\ub9ac\ubbf8\uc5c4 \uc11c\ube44\uc2a4\uc5d0\uc11c \uc81c\uc678\ub41c \uc2a4\ud2f0\ucee4\uc785\ub2c8\ub2e4.",
          "sticker.stickerspremium.emojidropped.desc":
            "\uc774 \uc774\ubaa8\ud2f0\ucf58\uc744 \uacc4\uc18d \uc0ac\uc6a9\ud558\ub824\uba74 \uac1c\ubcc4 \uad6c\uc785\ud574 \uc8fc\uc138\uc694.",
          "sticker.stickerspremium.emojidropped.title":
            "LINE \uc2a4\ud2f0\ucee4 \ud504\ub9ac\ubbf8\uc5c4 \uc11c\ube44\uc2a4\uc5d0\uc11c\n\uc81c\uc678\ub41c \uc774\ubaa8\ud2f0\ucf58\uc785\ub2c8\ub2e4.",
          "sticker.stickerspremium.emojiexpired.desc":
            "\uc774 \uc774\ubaa8\ud2f0\ucf58\uc744 \uacc4\uc18d \uc0ac\uc6a9\ud558\ub824\uba74 LINE \uc2a4\ud2f0\ucee4 \ud504\ub9ac\ubbf8\uc5c4 \ub514\ub7ed\uc2a4 \ucf54\uc2a4\ub85c \uc774\uc6a9\uad8c\uc744 \uac31\uc2e0\ud574 \uc8fc\uc138\uc694.",
          "sticker.stickerspremium.expired.desc":
            "\uc774 \uc2a4\ud2f0\ucee4\ub97c \uacc4\uc18d \uc0ac\uc6a9\ud558\ub824\uba74 LINE \uc2a4\ud2f0\ucee4 \ud504\ub9ac\ubbf8\uc5c4 \uc774\uc6a9\uad8c\uc744 \uad6c\ub9e4\ud574 \uc8fc\uc138\uc694.",
          "sticker.stickerspremium.expired.title":
            "\ud504\ub9ac\ubbf8\uc5c4 \uc774\uc6a9\uad8c\uc774 \ub9cc\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "sticker.unpurchased.purchase.btn": "\uad6c\ub9e4",
          "sticker.unpurchased.recommended.title":
            "\ucd94\ucc9c \uc2a4\ud2f0\ucee4",
          "sticon.downloadAll.desc":
            "\ubcf4\uc720\ud55c \uc774\ubaa8\ud2f0\ucf58\uc744 \ud55c \ubc88\uc5d0 \ubaa8\ub450 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc138\uc694.",
          "sticon.downloadAll.downloading":
            "\uc774\ubaa8\ud2f0\ucf58 \ub2e4\uc6b4\ub85c\ub4dc \uc911\u2026",
          "sticon.downloading.desc":
            "\uc774\ubaa8\ud2f0\ucf58 \ub2e4\uc6b4\ub85c\ub4dc \uc911\uc785\ub2c8\ub2e4. \n\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824 \uc8fc\uc138\uc694.",
          "sticon.expired.desc":
            "%1\uc758 \uc720\ud6a8\uae30\uac04\uc774 \ub9cc\ub8cc\ub418\uc5b4 \ubaa9\ub85d\uc5d0\uc11c \uc0ad\uc81c\ub429\ub2c8\ub2e4.",
          "sticon.nearlyExpired.desc.other":
            "\uc774 \uc774\ubaa8\ud2f0\ucf58\uc740 %n\uc77c \ud6c4\uc5d0 \ub9cc\ub8cc\ub429\ub2c8\ub2e4.",
          "sticon.recommendedEmoji.label":
            "\ucd94\ucc9c \uc774\ubaa8\ud2f0\ucf58",
          "sticon.stickerspremium.deletemoji.popup":
            "\uc774 \uc774\ubaa8\ud2f0\ucf58\uc744 \ub0b4 \ud504\ub9ac\ubbf8\uc5c4 \uc2a4\ud2f0\ucee4\uc5d0\uc11c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "subprofile.common.button.cancel": "\ucde8\uc18c",
          "subprofile.common.popupbutton.continue": "\uacc4\uc18d",
          "subprofile.common.toast.settingupdated":
            "\ud504\ub85c\ud544 \uc124\uc815\uc744 \ubcc0\uacbd\ud588\uc2b5\ub2c8\ub2e4.",
          "subprofile.editfriends.button.done": "\uc644\ub8cc",
          "subprofile.editfriends.popupdesc.dontshowagain":
            "\ub2e4\uc2dc \uc548 \ubcf4\uae30",
          "subprofile.editfriends.popuptitle.errorabletoretry":
            "\uc77c\ubd80 \uce5c\uad6c\uc5d0 \ub300\ud574 \ud504\ub85c\ud544 \uc124\uc815\uc744 \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "subprofile.editfriends.popuptitle.errorunabletoretry":
            "\uc77c\ubd80 \uce5c\uad6c\uc5d0 \ub300\ud574 \ud504\ub85c\ud544 \uc124\uc815\uc744 \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "subprofile.editfriends.popuptitle.maxlimiterror":
            "\ud504\ub85c\ud544\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub294 \ucd5c\ub300 \uce5c\uad6c \uc218\ub97c \ucd08\uacfc\ud588\uc2b5\ub2c8\ub2e4.",
          "subprofile.editfriends.popuptitle.networkerror":
            "\ub124\ud2b8\uc6cc\ud06c\uc5d0 \uc5f0\uacb0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc5f0\uacb0 \uc0c1\ud0dc\ub97c \ud655\uc778\ud558\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "subprofile.editfriends.popuptitle.onlyonmobileapp":
            "\ud734\ub300\ud3f0 LINE \uc571\uc5d0\uc11c\uc5d0\uc11c \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "subprofile.editfriends.popuptitle.showndifferentprofile":
            "\uc774 \uce5c\uad6c\uc5d0\uac8c \ubcf4\uc5ec\uc904 \ud504\ub85c\ud544\uc774 \ubcc0\uacbd\ub429\ub2c8\ub2e4. \uacc4\uc18d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "subprofile.editfriends.popuptitle.showthisprofile":
            "\uc120\ud0dd\ud55c \uce5c\uad6c\uac00 \uc774 \ud504\ub85c\ud544\uc744 \ubcf4\uac8c \ub429\ub2c8\ub2e4. \uacc4\uc18d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "subprofile.editfriends.popuptitle.temporaryerror":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "subprofile.editfriends.popuptitle.temporaryerrortryagain":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \ud654\uba74\uc744 \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "subprofile.editfriends.subtitle.addfriend":
            "\uce5c\uad6c \ucd94\uac00",
          "subprofile.editfriends.title.onlyonmobileapp":
            "\uc11c\ube0c \ud504\ub85c\ud544\uc740 LINE \ubaa8\ubc14\uc77c \ubc84\uc804\uc5d0\uc11c \ub9cc\ub4e4\uac70\ub098 \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "subprofile.editfriends.title.selectprofile":
            "\ud504\ub85c\ud544 \uc120\ud0dd",
          "subprofile.editfriends.toast.profileupdatedplural.other":
            "\ubcc0\uacbd\ub41c \ud504\ub85c\ud544\uc744 \uce5c\uad6c %n\uba85\uc774 \ubcf4\uac8c\ub429\ub2c8\ub2e4.",
          "subprofile.friendsprofile.title.setyourprofile":
            "\ud504\ub85c\ud544 \ud45c\uc2dc \uc124\uc815",
          "subprofile.friendsprofile.tooltip.subprofile":
            "\uc774 \uce5c\uad6c\uc5d0\uac8c \ud45c\uc2dc\ud560 \ub0b4 \ud504\ub85c\ud544\uc744 \uc124\uc815\ud574 \ubcf4\uc138\uc694!",
          "subprofile.groupchatmenu.group.profile": "",
          "subprofile.groupchatmenu.tooltip.subprofile":
            "\uadf8\ub8f9 \ub300\ud654\uc5d0 \ucc38\uc5ec\ud55c \uce5c\uad6c\uac00 \ubcfc \ub0b4 \ud504\ub85c\ud544\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc5b4\uc694.",
          "subprofile.groupprofile.tooltip.subprofile":
            "\uadf8\ub8f9 \ub300\ud654\uc5d0 \ucc38\uc5ec\ud55c \uce5c\uad6c\uc5d0\uac8c \ub2e4\ub978 \ud504\ub85c\ud544\uc744 \ud45c\uc2dc\ud560 \uc218 \uc788\uc5b4\uc694.",
          "subprofile.groupsettings.button.edit": "\ud3b8\uc9d1",
          "subprofile.groupsettings.subtitle.amountofprofile.other":
            "\ud504\ub85c\ud544 %n\uac1c\uac00 \ud45c\uc2dc\ub428",
          "subprofile.profile.tooltip.onlyonmobileapp":
            "LINE \ubaa8\ubc14\uc77c \ubc84\uc804\uc5d0\uc11c \uc11c\ube0c \ud504\ub85c\ud544\uc744 \ub9cc\ub4e0 \ud6c4 \uc124\uc815 \uac00\ub2a5",
          "subprofile.selectfriends.button.deselectall":
            "\uc120\ud0dd \ud574\uc81c",
          "subprofile.selectfriends.button.selectall":
            "\uc804\uccb4 \uc120\ud0dd",
          "subprofile.selectfriends.button.selectprofile":
            "\ud504\ub85c\ud544 \uc120\ud0dd",
          "subprofile.selectfriends.desc.selectfriends":
            "\uc11c\ube0c \ud504\ub85c\ud544\uc740 \uce5c\uad6c\uc5d0\uac8c\ub9cc \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uce5c\uad6c\uac00 \uc544\ub2cc \uba64\ubc84\uc5d0\uac8c\ub294 \uba54\uc778 \ud504\ub85c\ud544\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4.",
          "subprofile.settings.button.edit":
            "\ub0b4 \ud504\ub85c\ud544 \ubcf4\uae30",
          "subprofile.settings.desc.aboutsubprofile":
            "PC \ubc84\uc804\uc5d0\uc11c\ub294 \ud3b8\uc9d1\ub9cc \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc11c\ube0c \ud504\ub85c\ud544\uc744 \ub9cc\ub4e4\uac70\ub098 \uc0ad\uc81c\ud558\ub824\uba74 LINE \ubaa8\ubc14\uc77c \ubc84\uc804\uc744 \uc774\uc6a9\ud574 \uc8fc\uc138\uc694.",
          "subprofile.settings.desc.zerocase":
            "\uc124\uc815\ud55c \uce5c\uad6c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \uce5c\uad6c \ucd94\uac00 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uace0 \uc774 \ud504\ub85c\ud544\uc744 \ubcf4\uc5ec\uc904 \uce5c\uad6c\ub97c \uc120\ud0dd\ud574 \ubcf4\uc138\uc694.",
          "subprofile.settings.title.app": "\uc571",
          "subprofile.yourprofile.bannerdesc.cantsetsubprofile":
            "\uc11c\ube0c \ud504\ub85c\ud544\uc744 \uc124\uc815\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "subprofile.yourprofile.bannerdesc.shownfor30days":
            "\uc11c\ube0c \ud504\ub85c\ud544\uc740 \ud574\uc9c0 \ud6c4 30\uc77c \ub3d9\uc548\ub9cc \uc720\uc9c0\ub429\ub2c8\ub2e4. \uacc4\uc18d \uc0ac\uc6a9\ud558\ub824\uba74 \uc7ac\uac00\uc785\ud574 \uc8fc\uc138\uc694",
          "subprofile.yourprofile.bannertitle.expired":
            "\uba64\ubc84\uc2ed \ud574\uc9c0\ub428",
          "subprofile.yourprofile.bannertitle.temporaryerror":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958",
          "subprofile.yourprofile.button.editfriends":
            "\uce5c\uad6c \ud3b8\uc9d1",
          "subprofile.yourprofile.desc.amountoffriend.other":
            "\uce5c\uad6c %n\uba85\uc5d0\uac8c \ud45c\uc2dc\ub428",
          "subprofile.yourprofile.subtitle.mainprofile":
            "\uba54\uc778 \ud504\ub85c\ud544",
          "subprofile.yourprofile.subtitle.subprofile":
            "\uc11c\ube0c \ud504\ub85c\ud544",
          "subprofile.yourprofile.title.editfriends":
            "\uce5c\uad6c \ud3b8\uc9d1",
          "subprofile.yourprofile.title.yourprofile":
            "\ub0b4 \ud504\ub85c\ud544",
          "talk.addFriend.recommend.reason.group":
            "\uac19\uc740 \uadf8\ub8f9\uc758 \uc0ac\uc6a9\uc790",
          "talk.addFriend.recommend.reason.group.name":
            "\u300c%1\u300d\uadf8\ub8f9\uc758 \uc0ac\uc6a9\uc790",
          "talk.addFriend.recommend.reason.lineid":
            "LINE ID\ub85c \ub098\ub97c \ucd94\uac00\ud55c \uc0ac\uc6a9\uc790",
          "talk.addFriend.recommend.reason.phone":
            "\uc804\ud654\ubc88\ud638\ub85c \ub098\ub97c \ucd94\uac00\ud55c \uc0ac\uc6a9\uc790",
          "talk.addFriend.recommend.reason.qrcode":
            "QR \ucf54\ub4dc\ub85c \ub098\ub97c \ucd94\uac00\ud55c \uc0ac\uc6a9\uc790",
          "talk.btn.addbuddy.title": "\ucd94\uac00",
          "talk.btn.cancel.title": "\ucde8\uc18c",
          "talk.btn.join.title": "\ucc38\uc5ec",
          "talk.chatlist.chatheader.title": "\ub300\ud654",
          "talk.chatlist.floating.button.chat": "\uc77c\ubc18",
          "talk.chatlist.floating.button.chatandgroup":
            "\ub300\ud654 \ubc0f \uadf8\ub8f9",
          "talk.chatlist.floating.button.group": "\uadf8\ub8f9",
          "talk.chatlist.floating.button.square": "\uc624\ud508\ucc57",
          "talk.chatlist.floating.createChat":
            "\ub300\ud654\ubc29 \ub9cc\ub4e4\uae30",
          "talk.chatlist.floating.menu.chatandgroup":
            "\ub300\ud654 \ubc0f \uadf8\ub8f9 \ub9cc\ub4e4\uae30",
          "talk.chatlist.groupheader.title":
            '\uadf8\ub8f9 \uba64\ubc84 \uc774\ub984\uc5d0 "%1" \ud3ec\ud568',
          "talk.chatlist.menu.hide": "\uc228\uae30\uae30",
          "talk.chatlist.menu.pin.off":
            "\ub300\ud654\ubc29 \uace0\uc815 \ud574\uc81c",
          "talk.chatlist.menu.pin.on": "\ub300\ud654\ubc29 \uace0\uc815",
          "talk.chatlist.menu.readAll": "\uc77d\uc74c \ucc98\ub9ac",
          "talk.chatlist.msgsSearchCount.few": "",
          "talk.chatlist.msgsSearchCount.many": "",
          "talk.chatlist.msgsSearchCount.one": "",
          "talk.chatlist.msgsSearchCount.other": "",
          "talk.chatlist.msgsSearchCount.plurals.other":
            "%n\uac1c\uc758 \uba54\uc2dc\uc9c0",
          "talk.chatlist.msgsSearchCount.two": "",
          "talk.chatlist.msgsSearchCount.zero": "",
          "talk.chatlist.msgsSearchHeader.title": "\uba54\uc2dc\uc9c0",
          "talk.chatlist.search.placeholder": "\ub300\ud654 \uac80\uc0c9",
          "talk.label.addbuddy.title": "\ucd94\uac00",
          "talk.label.alreadycontact.title":
            "\uc774\ubbf8 \uce5c\uad6c\ub85c \ucd94\uac00\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",
          "talk.label.blocked.buddy.title":
            "\ucc28\ub2e8\ud55c \uacc4\uc815\uc785\ub2c8\ub2e4. \uc124\uc815\uc5d0\uc11c \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "talk.label.buddies.title": "\uce5c\uad6c",
          "talk.label.buddylist.title": "\uce5c\uad6c",
          "talk.label.chatlist.title": "\ub300\ud654",
          "talk.label.empty.description.1":
            "\uc544\uc774\ub514 \uac80\uc0c9, \ucd94\ucc9c \uce5c\uad6c\ub97c \ud1b5\ud574\n\uce5c\uad6c\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "talk.label.empty.description.3":
            "\uac80\uc0c9\ucc3d\uc5d0\uc11c ID\ub97c \uac80\uc0c9\ud558\uc5ec\n\uce5c\uad6c\ub97c \ucd94\uac00 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "talk.label.empty.title.1":
            "\uce5c\uad6c\ub97c \ucd94\uac00\ud574\ubcf4\uc138\uc694.",
          "talk.label.empty.title.2":
            "\uce5c\uad6c\ub97c \ucd08\ub300\ud574 \ub300\ud654\ud574\ubcf4\uc138\uc694.",
          "talk.label.empty.title.3":
            "\uce5c\uad6c\ub97c \ucc3e\uc544\ubcf4\uc138\uc694!",
          "talk.label.failed.title":
            "\ubaa9\ub85d\uc744 \ubd88\ub7ec\uc62c\uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "talk.label.failedsearch.rejected.title":
            "\uc815\ud574\uc9c4 \uac80\uc0c9 \uae30\uc900 \ud69f\uc218\ub97c \ucd08\uacfc\ud588\uc2b5\ub2c8\ub2e4.\n\uc77c\uc2dc\uc801\uc73c\ub85c \uc544\uc774\ub514/\uc804\ud654\ubc88\ud638 \uac80\uc0c9\uc744 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "talk.label.failedsearch.title":
            "\uc785\ub825\ud558\uc2e0 \uc544\uc774\ub514\ub294 \uc874\uc7ac\ud558\uc9c0 \uc54a\uac70\ub098\n\uac80\uc0c9\uc744 \ucc28\ub2e8\ud55c \uc0ac\uc6a9\uc790\uc785\ub2c8\ub2e4.",
          "talk.label.favorite.title": "\uc990\uaca8\ucc3e\uae30",
          "talk.label.groups.title": "\uadf8\ub8f9",
          "talk.label.invited.title":
            "\ub098\ub97c \ucd08\ub300\ud55c \uadf8\ub8f9",
          "talk.label.newfriend.title": "\uc0c8\uce5c\uad6c",
          "talk.label.nosearchresult.title":
            "\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "talk.label.placehodler.title":
            "\uc774\ub984\uc73c\ub85c \uac80\uc0c9",
          "talk.label.recentFriends.title": "\ucd5c\uadfc \ub300\ud654",
          "talk.label.recommendbuddyplacehodler.title":
            "\uc544\uc774\ub514 \uac80\uc0c9",
          "talk.label.recommended.addFriend": "\uce5c\uad6c \ucd94\uac00",
          "talk.label.recommended.officialAccount.title":
            "\ucd94\ucc9c \uacf5\uc2dd \uacc4\uc815",
          "talk.label.recommended.title": "\uce5c\uad6c \ucd94\ucc9c",
          "talk.label.search.friends": "\uce5c\uad6c \ucc3e\uae30",
          "talk.label.search.friends.QRcode.error.invalidUser":
            "\ud574\ub2f9\ud558\ub294 \uc0ac\uc6a9\uc790\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "talk.label.search.friends.phoneNumber.error":
            "\uc785\ub825\ud558\uc2e0 \uc804\ud654\ubc88\ud638\ub294 \uc874\uc7ac\ud558\uc9c0 \uc54a\uac70\ub098\n\uac80\uc0c9\uc744 \ucc28\ub2e8\ud55c \uc0ac\uc6a9\uc790 \uc785\ub2c8\ub2e4.",
          "talk.label.search.friends.phoneNumber.error.notRegistered":
            "\uc804\ud654\ubc88\ud638 \uac80\uc0c9\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 \ub0b4 \uc804\ud654\ubc88\ud638\ub97c LINE\uc5d0 \ub4f1\ub85d\ud574\uc57c \ud569\ub2c8\ub2e4.\n\uc2a4\ub9c8\ud2b8\ud3f0\uc758 \uc124\uc815 > \ud504\ub85c\ud544\uc5d0\uc11c \uc804\ud654\ubc88\ud638\ub97c \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "talk.label.square.title": "\uc624\ud508\ucc57 ",
          "talk.label.thatisyou.title": "\ub2f9\uc2e0\uc774\uc5d0\uc694~",
          "talk.menu.aboutgroup": "\uadf8\ub8f9 \uad00\ub9ac",
          "talk.menu.addfavorite": "\uc990\uaca8\ucc3e\uae30 \ucd94\uac00",
          "talk.menu.addgroup": "\uadf8\ub8f9 \ub9cc\ub4e4\uae30",
          "talk.menu.block": "\ucc28\ub2e8",
          "talk.menu.call": "\ud1b5\ud654",
          "talk.menu.call.video": "\uc601\uc0c1\ud1b5\ud654",
          "talk.menu.call.voice": "\uc74c\uc131\ud1b5\ud654",
          "talk.menu.editname": "\uc774\ub984 \ubcc0\uacbd",
          "talk.menu.exit": "\uc885\ub8cc",
          "talk.menu.group.call": "\uc74c\uc131/\uc601\uc0c1\ud1b5\ud654",
          "talk.menu.help": "\ub3c4\uc6c0\ub9d0",
          "talk.menu.hide": "\uc228\uae30\uae30",
          "talk.menu.leavegroup": "\uadf8\ub8f9 \ub098\uac00\uae30",
          "talk.menu.logout": "\ub85c\uadf8\uc544\uc6c3",
          "talk.menu.myProfile": "\ud504\ub85c\ud544",
          "talk.menu.notes": "\ub178\ud2b8",
          "talk.menu.posts": "\uac8c\uc2dc\uae00",
          "talk.menu.rejectbuddy": "\ucc28\ub2e8",
          "talk.menu.rejectgroup": "\uac70\uc808",
          "talk.menu.removeFavorite": "\uc990\uaca8\ucc3e\uae30 \ud574\uc81c",
          "talk.menu.removetalkitem": "\uc0ad\uc81c",
          "talk.menu.sendContact": "\uc5f0\ub77d\ucc98 \uacf5\uc720",
          "talk.menu.setting": "\ud658\uacbd \uc124\uc815",
          "talk.menu.showProfile": "\ud504\ub85c\ud544 \ubcf4\uae30",
          "talk.menu.starttalk": "\ub300\ud654 \uc2dc\uc791\ud558\uae30",
          "talk.menu.talk": "\ub300\ud654\ud558\uae30",
          "talk.menu.talkbuddy": "\ub300\ud654\ud558\uae30",
          "talk.menu.talkgroup": "\ub300\ud654\ud558\uae30",
          "talk.menu.voip": "\uc74c\uc131\ud1b5\ud654",
          "talk.msg.addbuddy.failed":
            "\ucd94\uac00\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
          "talk.msg.addrecommended.failed":
            "\ucd94\uac00\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
          "talk.msg.block.failed":
            "\uce5c\uad6c\ub97c \ucc28\ub2e8\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "talk.msg.blockrecommended.failed":
            "\uce5c\uad6c\ub97c \ucc28\ub2e8\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "talk.msg.del.1.n":
            "\ub300\ud654\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\ub300\ud654\ub97c \uc0ad\uc81c\ud558\uba74 \ub300\ud654\ubc29\uc5d0\uc11c\ub3c4 \ub098\uac00\uac8c \ub418\uba70 \ub300\ud654 \ub0b4\uc6a9\ub3c4 \ub354 \uc774\uc0c1 \ubcfc \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "talk.msg.del.room":
            "\ub300\ud654\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\uc0ad\uc81c\ub41c \ub300\ud654\ub294 \ubcf5\uc6d0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "talk.msg.favorite.failed":
            "\uc990\uaca8\ucc3e\uae30 \ub4f1\ub85d\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
          "talk.msg.favorite.overflow.failed":
            "\uc990\uaca8\ucc3e\uae30\uc5d0 \ub4f1\ub85d\ud560 \uc218 \uc788\ub294 \uce5c\uad6c\ub294 100\uba85\uae4c\uc9c0\uc785\ub2c8\ub2e4.",
          "talk.msg.hide.failed":
            "\uacc4\uc815\uc744 \uc228\uae38 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "talk.msg.joininvitedgroup.failed":
            "\uadf8\ub8f9 \ucc38\uc5ec\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
          "talk.msg.leavegroup.failed":
            "\uadf8\ub8f9 \ub098\uac00\uae30\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
          "talk.msg.no.room":
            "\uc774\ubbf8 \uc0ad\uc81c\ub41c \ub300\ud654\ubc29\uc785\ub2c8\ub2e4.",
          "talk.msg.rejectinvitedgroup.failed":
            "\ucd08\ub300 \uac70\uc808\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.",
          "talk.network.unreachable":
            "\ub124\ud2b8\uc6cc\ud06c \uc5f0\uacb0\uc774 \uc6d0\ud65c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "talk.search.hint": "\uba54\uc2dc\uc9c0, \uc774\ub984 \uac80\uc0c9",
          "talk.search.label.chatMember": "\uc774\ub984 \uac80\uc0c9",
          "talk.search.label.displayName":
            "\uc774\ub984\uc73c\ub85c \uac80\uc0c9",
          "talk.search.label.member.all": "\uba64\ubc84(%1)",
          "talk.search.label.member.selected": "%1\uba85 \uc120\ud0dd\ub428",
          "talk.search.label.reSearch":
            "\uacb0\uacfc \ub0b4 \uc7ac\uac80\uc0c9",
          "talk.search.label.reSearch.noResult":
            "\ub354\uc774\uc0c1 \uac80\uc0c9 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. ",
          "talk.search.label.textMessage": "\uba54\uc2dc\uc9c0 \uac80\uc0c9",
          "talk.tooltip.delete": "\uc0ad\uc81c",
          "theme.mode.guide.dark.desc":
            "\uc0c8\ub86d\uac8c \ucd94\uac00\ub41c \ud654\uba74 \ubaa8\ub4dc \uae30\ub2a5\uc774 \uc801\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \ubaa8\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ud658\uacbd \uc124\uc815 > \uae30\ubcf8 \uc124\uc815 > \ud654\uba74 \ubaa8\ub4dc\uc5d0\uc11c \ubcc0\uacbd\ud574 \uc8fc\uc138\uc694.",
          "theme.mode.guide.desc":
            "\uc2dc\uc2a4\ud15c \uc124\uc815\uc5d0 \ub9de\uac8c \ud654\uba74 \ubaa8\ub4dc\uac00 \uc790\ub3d9 \uc801\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \ubaa8\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ud658\uacbd \uc124\uc815 > \uae30\ubcf8 \uc124\uc815 > \ud654\uba74 \ubaa8\ub4dc\uc5d0\uc11c \ubcc0\uacbd\ud574 \uc8fc\uc138\uc694.",
          "theme.mode.guide.light.desc":
            "\uc774\uc81c LINE\uc5d0\uc11c\ub3c4 \ud654\uba74 \ubaa8\ub4dc\ub97c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \ubaa8\ub4dc\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \ud658\uacbd \uc124\uc815 > \uae30\ubcf8 \uc124\uc815 > \ud654\uba74 \ubaa8\ub4dc\uc5d0\uc11c \ubcc0\uacbd\ud574 \uc8fc\uc138\uc694.",
          "theme.mode.guide.title":
            "\uc0c8\ub85c\uc6b4 \ud654\uba74 \ubaa8\ub4dc\ub97c \uacbd\ud5d8\ud574 \ubcf4\uc138\uc694.",
          "timeline.alert.attach":
            "1\uac1c\ub9cc \ucca8\ubd80\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.alert.attach.unavailable":
            "\ucca8\ubd80\ud560 \uc218 \uc5c6\ub294 \ud30c\uc77c\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. ",
          "timeline.alert.attachphoto":
            "\uc0ac\uc9c4\uc740 \ucd5c\ub300 9\uc7a5\uae4c\uc9c0 \ucca8\ubd80 \uac00\ub2a5\ud569\ub2c8\ub2e4.",
          "timeline.alert.commentmaxcount":
            "1000\uc790 \uc774\ub0b4\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.",
          "timeline.alert.confirm.close":
            "\ub178\ud2b8 \uae00\uc4f0\uae30\ub97c \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\uc791\uc131\ud55c \ub0b4\uc6a9\uc740 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "timeline.alert.confirm.deletecomment":
            "\uc120\ud0dd\ud55c \ub313\uae00\uc744 \uc815\ub9d0\ub85c \uc0ad\uc81c\ud558\uaca0\uc2b5\ub2c8\uae4c?",
          "timeline.alert.confirm.deletepost":
            "\uc0ad\uc81c\ud558\uba74 \ub313\uae00\ub3c4 \ubaa8\ub450 \uc9c0\uc6cc\uc9d1\ub2c8\ub2e4. \n\uacc4\uc18d\ud558\uaca0\uc2b5\ub2c8\uae4c?",
          "timeline.alert.confirm.deletethumb":
            "\ub300\ud45c \uc774\ubbf8\uc9c0\ub97c \uc0ad\uc81c\ud558\uaca0\uc2b5\ub2c8\uae4c?",
          "timeline.alert.confirm.replacepost":
            "\uc774\ubbf8 \uc791\uc131 \uc911\uc778 \ub0b4\uc6a9\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc0c8\ub85c \uc791\uc131\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "timeline.alert.deletedpost":
            "\uc774\ubbf8 \uc0ad\uc81c\ub41c \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",
          "timeline.alert.discard": "\uc0ad\uc81c",
          "timeline.alert.error.group.delete":
            "\uc120\ud0dd\ud55c \uacf5\uac1c \ub9ac\uc2a4\ud2b8\uac00 \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc120\ud0dd\ud574\uc8fc\uc138\uc694",
          "timeline.alert.error.group.rights":
            "\uc120\ud0dd\ud55c \uadf8\ub8f9\uc5d0 \ub300\ud55c \uad8c\ud55c\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",
          "timeline.alert.fileMaxcount": "",
          "timeline.alert.fileMaxcount.plurals.other":
            "\uc0ac\uc9c4\uacfc \ub3d9\uc601\uc0c1\uc740 \ucd5c\ub300 %n\uac1c\uae4c\uc9c0 \uc62c\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.alert.invalidcoverimage":
            "\uc804\uc1a1\ud560 \uc218 \uc5c6\ub294 \ud30c\uc77c\uc785\ub2c8\ub2e4.",
          "timeline.alert.mediaMaxcount": "",
          "timeline.alert.official.addfriend":
            "\uce5c\uad6c\ub85c \ucd94\uac00\ud558\uba74\n\uc88b\uc544\uc694\uc640 \ub313\uae00\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \n\ucd94\uac00\ud558\uaca0\uc2b5\ub2c8\uae4c? ",
          "timeline.alert.official.addfriend.share":
            "\uacf5\uc2dd \uacc4\uc815\uc744 \uce5c\uad6c\ub85c \ucd94\uac00\ud558\uba74 \uac8c\uc2dc\uae00\uc744 \uacf5\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uce5c\uad6c\ub85c \ucd94\uac00\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "timeline.alert.official.unblockfriend":
            "\ucc28\ub2e8\ud55c \uacf5\uc2dd \uacc4\uc815\uc785\ub2c8\ub2e4.\ucc28\ub2e8\uc744 \ud574\uc81c\ud558\uba74 \ub313\uae00\uc774\ub098 \ub9ac\uc561\uc158\uc744 \ub0a8\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucc28\ub2e8\uc744 \ud574\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "timeline.alert.official.unblockfriend.share":
            "\ucc28\ub2e8\ud55c \uacf5\uc2dd \uacc4\uc815\uc785\ub2c8\ub2e4. \ucc28\ub2e8\uc744 \ud574\uc81c\ud558\uba74 \uac8c\uc2dc\uae00\uc744 \uacf5\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucc28\ub2e8\uc744 \ud574\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "timeline.alert.photoMaxsize":
            "\uc0ac\uc9c4\uc740 \ucd5c\ub300 20MB\uae4c\uc9c0\n\ucca8\ubd80\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.alert.photolimit": "\uc0ac\uc9c4 1\uac1c\ub2f9 20MB",
          "timeline.alert.photolimit.format": "(.jpg/.jpeg/.png/.bmp/.gif)",
          "timeline.alert.photomaxcount":
            "\uc0ac\uc9c4\uc740 \ucd5c\ub300 %1\uac1c\uae4c\uc9c0 \uc62c\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.alert.stickerMaxcount": "",
          "timeline.alert.stickerMaxcount.plurals.other":
            "\uc2a4\ud2f0\ucee4\ub294 \ucd5c\ub300 %n\uac1c\uae4c\uc9c0 \uc62c\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.alert.stickerUploadRule":
            "\uc0ac\uc6b4\ub4dc \uc2a4\ud2f0\ucee4\ub098 \uc560\ub2c8\uba54\uc774\uc158 \uc2a4\ud2f0\ucee4\ub294 1\uac1c\ub9cc \uc62c\ub9b4 \uc218 \uc788\uc73c\uba70, \ub2e4\ub978 \uc885\ub958\uc758 \uc2a4\ud2f0\ucee4\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "timeline.alert.textmaxcount":
            "10,000\uc790 \uc774\ub0b4\ub85c \uc785\ub825\ud574\uc8fc\uc138\uc694.",
          "timeline.alert.unblockfriend":
            "\ucc28\ub2e8\ud55c \uacc4\uc815\uc785\ub2c8\ub2e4. \ucc28\ub2e8\uc744 \ud574\uc81c\ud558\uba74 \ub313\uae00\uc774\ub098 \ub9ac\uc561\uc158\uc744 \ub0a8\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucc28\ub2e8\uc744 \ud574\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "timeline.alert.unblockfriend.share":
            "\ucc28\ub2e8\ud55c \uacc4\uc815\uc785\ub2c8\ub2e4. \ucc28\ub2e8\uc744 \ud574\uc81c\ud558\uba74 \uac8c\uc2dc\uae00\uc744 \uacf5\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucc28\ub2e8\uc744 \ud574\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "timeline.alert.urlUploadRule":
            "URL\uc740 1\uac1c\uae4c\uc9c0 \ucca8\ubd80 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.alert.videoMaxLength":
            "\ub3d9\uc601\uc0c1\uc740 \ucd5c\ub300 5\ubd84\uae4c\uc9c0\n\ucca8\ubd80 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.alert.videoMaxsize":
            "\ub3d9\uc601\uc0c1\uc740 1\uac1c\ub2f9 \ucd5c\ub300 200MB\uae4c\uc9c0\n\ucca8\ubd80 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.alert.videolength":
            "5\ubd84 \uc774\uc0c1\uc758 \ub3d9\uc601\uc0c1\uc740 \ucca8\ubd80\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "timeline.alert.videolimit":
            "\ub3d9\uc601\uc0c1 1\uac1c\ub2f9 200MB, \ucd5c\ub300 5\ubd84",
          "timeline.alert.videolimit.format":
            "(.mp4/.avi/.mkv/.mpg/.mpeg/.mov)",
          "timeline.alert.videosize":
            "200MB \uc774\ud558 \ub3d9\uc601\uc0c1\ub9cc \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.alert.waitcommentdone":
            "\uc7a0\uc2dc \ub4a4\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "timeline.already.remove.comment":
            "\uc774\ubbf8 \uc0ad\uc81c\ub41c \ub313\uae00 \uc785\ub2c8\ub2e4.",
          "timeline.attachlink.delete": "\uc0ad\uc81c",
          "timeline.attachlink.hint":
            "\uc8fc\uc18c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694.",
          "timeline.attachlink.title": "\ub9c1\ud06c \uc8fc\uc18c \uc785\ub825",
          "timeline.comment.approval":
            "\ub313\uae00\uc740 \uacf5\uc2dd\ud648 \uad00\ub9ac\uc790 \uc2b9\uc778\ud6c4\uc5d0 \uac8c\uc2dc\ub429\ub2c8\ub2e4.",
          "timeline.comment.blinddbyadmin":
            "\uc6b4\uc601\uc790\uc5d0 \uc758\ud574 \uc0ad\uc81c\ub41c \ub313\uae00\uc785\ub2c8\ub2e4.",
          "timeline.comment.delete": "\uc0ad\uc81c",
          "timeline.comment.hint":
            "\ub313\uae00\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",
          "timeline.comment.like": "\uc88b\uc544\uc694",
          "timeline.comment.like.cancel": "\uc88b\uc544\uc694 \ucde8\uc18c",
          "timeline.comment.loadprevious":
            "\uc774\uc804 \ub313\uae00 \ubd88\ub7ec\uc624\uae30",
          "timeline.comment.photo.retry":
            "\uc774\ubbf8\uc9c0\ub97c \ubd88\ub7ec\uc624\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. \n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "timeline.comment.reply": "\ub2f5\uae00",
          "timeline.comment.stickerorphoto":
            "\ub313\uae00\uc5d0\ub294 \uc2a4\ud2f0\ucee4\uc640 \uc0ac\uc9c4 \uc911 1\uac1c\ub9cc \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.comment.write": "\uc62c\ub9ac\uae30",
          "timeline.common.cancel": "\ucde8\uc18c",
          "timeline.common.ok": "\ud655\uc778",
          "timeline.common.share": "\uacf5\uc720\ud558\uae30",
          "timeline.date.beforeHour.plurals.few": "",
          "timeline.date.beforeHour.plurals.many": "",
          "timeline.date.beforeHour.plurals.one": "",
          "timeline.date.beforeHour.plurals.other": "",
          "timeline.date.beforeHour.plurals.two": "",
          "timeline.date.beforeHour.plurals.zero": "",
          "timeline.date.beforeMinute.plurals.few": "",
          "timeline.date.beforeMinute.plurals.many": "",
          "timeline.date.beforeMinute.plurals.one": "",
          "timeline.date.beforeMinute.plurals.other": "",
          "timeline.date.beforeMinute.plurals.two": "",
          "timeline.date.beforeMinute.plurals.zero": "",
          "timeline.date.beforeYesterday": "\uadf8\uc81c %1",
          "timeline.date.justNow": "\uc870\uae08 \uc804",
          "timeline.date.yesterday": "\uc5b4\uc81c %1",
          "timeline.emptypost.networkerror":
            "\ub124\ud2b8\uc6cc\ud06c \uc624\ub958\ub85c \uc644\ub8cc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "timeline.emptypost.other":
            "\uc544\uc9c1 \uacf5\uc720\ud558\uace0 \uc788\ub294 \uc21c\uac04\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "timeline.emptypost.unsupported":
            "\ub300\ud654\ub85c\ub9cc \uc18c\uc2dd\uc744 \uc804\ub2ec\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.error.and.retry":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \uc644\ub8cc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "timeline.error.attach.popupSticker":
            "\uc774 \uc2a4\ud2f0\ucee4\ub294 \uc6c0\uc9c1\uc784\uc774\ub098 \uc18c\ub9ac\uac00 \uc5c6\ub294 \uc77c\ubc18 \uc2a4\ud2f0\ucee4\ub85c \ucca8\ubd80 \ub429\ub2c8\ub2e4.",
          "timeline.error.cannot.access.file":
            "\uc77c\ubd80 \uc0ac\uc9c4\uc744 \uc5c5\ub85c\ub4dc\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.\n\uc6d0\ubcf8 \uc0ac\uc9c4\uc774 PC\uc5d0\uc11c \uc0ad\uc81c\ub418\uc5c8\uac70\ub098,\n20MB \uc81c\ud55c\uc73c\ub85c \uc5c5\ub85c\ub4dc\ub97c \uc2e4\ud328\ud588\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.error.list.load.retry":
            "\uc774\ub7f0! \ubaa9\ub85d\uc744 \ubd88\ub7ec\uc62c \uc218 \uc5c6\ub124\uc694.\n\uc0c8\ub85c\uace0\uce68 \ud558\uc138\uc694.",
          "timeline.footer.comment": "\ub313\uae00\uc4f0\uae30",
          "timeline.footer.like": "\uc88b\uc544\uc694",
          "timeline.groupPanel.startgroup":
            "\uadf8\ub8f9\uc744 \ub9cc\ub4e4\uc5b4\ubcf4\uc138\uc694!",
          "timeline.groupPanel.startgroup.desc":
            "\ub178\ud2b8\ub97c \uc791\uc131\ud558\uace0 \uc0ac\uc9c4 \uc568\ubc94\uc744 \ub9cc\ub4e4\uc5b4 \ubcf4\uc138\uc694.",
          "timeline.label.nosearchresult.title":
            "\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "timeline.like.count.other": "\uc88b\uc544\uc694 %1",
          "timeline.loading.examine.time": "\uc810\uac80 \uc2dc\uac04",
          "timeline.loading.examine.timeline":
            "%1 \uc11c\ube44\uc2a4 \uc810\uac80 \uc911\uc785\ub2c8\ub2e4.",
          "timeline.loading.neednewversion":
            "\ucd5c\uc2e0 \ubc84\uc804\uc5d0\uc11c \uc81c\uacf5\ub418\ub294 \ud654\uba74\uc785\ub2c8\ub2e4.",
          "timeline.loading.networkerror":
            "\ub124\ud2b8\uc6cc\ud06c \uc624\ub958\ub85c \uc644\ub8cc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "timeline.loading.retry": "\uc0c8\ub85c\uace0\uce68",
          "timeline.menu.sharetotalk": "\ub300\ud654\ub85c \uacf5\uc720",
          "timeline.mergedposts.detail": "\uc0c1\uc138 \ubcf4\uae30",
          "timeline.no": "\uc544\ub2c8\uc694",
          "timeline.note.popupdesc.sharenote":
            "\uc774 \ub178\ud2b8\ub97c \ub300\ud654\ubc29\uc5d0 \uacf5\uc720\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "timeline.noti.content.NC_1001_1":
            "%1\ub2d8\uc774 \uc0c8 \ub178\ud2b8\ub97c \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_1001_2":
            "%1\ub2d8, %2\ub2d8\uc774 \uc0c8 \ub178\ud2b8\ub97c \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_1001_3":
            "%1\ub2d8, %2\ub2d8 \uc678 %3\uba85\uc774 \uc0c8 \ub178\ud2b8\ub97c \uc791\uc131\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_1002_1":
            "%1\ub2d8\uc774 \ub0b4 \uac8c\uc2dc\uae00\uc5d0 \ub313\uae00\uc744 \ub2ec\uc558\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_1002_2":
            "%1\ub2d8, %2\ub2d8\uc774 \ub0b4 \uac8c\uc2dc\uae00\uc5d0 \ub313\uae00\uc744 \ub2ec\uc558\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_1002_3":
            "%1\ub2d8, %2\ub2d8 \uc678 %3\uba85\uc774 \ub0b4 \uac8c\uc2dc\uae00\uc5d0 \ub313\uae00\uc744 \ub2ec\uc558\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_1003_1":
            "%1\ub2d8\uc774 \ub313\uae00\uc5d0\uc11c \ub098\ub97c \uba58\uc158\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_1003_2":
            "%1\ub2d8, %2\ub2d8\uc774 \ub313\uae00\uc5d0\uc11c \ub098\ub97c \uba58\uc158\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_1003_3":
            "%1\ub2d8, %2\ub2d8 \uc678 %3\uba85\uc774 \ub313\uae00\uc5d0\uc11c \ub098\ub97c \uba58\uc158\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_1004_1":
            "%1\ub2d8\uc774 \ub0b4 \uac8c\uc2dc\uae00\uc744 '\uc88b\uc544\uc694'\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_1004_2":
            "%1\ub2d8, %2\ub2d8\uc774 \ub0b4 \uac8c\uc2dc\uae00\uc744 '\uc88b\uc544\uc694'\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_1004_3":
            "%1\ub2d8, %2\ub2d8 \uc678 %3\uba85\uc774 \ub0b4 \uac8c\uc2dc\uae00\uc744 '\uc88b\uc544\uc694'\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_2001_1":
            "%1\ub2d8\uc774 \uc0c8 \uc568\ubc94\uc744 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_2001_2":
            "%1\ub2d8, %2\ub2d8\uc774 \uc0c8 \uc568\ubc94\uc744 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_2001_3":
            "%1\ub2d8, %2\ub2d8 \uc678 %3\uba85\uc774 \uc0c8 \uc568\ubc94\uc744 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_2002_1":
            "%1\ub2d8\uc774 \uc568\ubc94\uc5d0 \uc0ac\uc9c4\uc744 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_2002_2":
            "%1\ub2d8, %2\ub2d8\uc774 \uc568\ubc94\uc5d0 \uc0ac\uc9c4\uc744 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_2002_3":
            "%1\ub2d8, %2\ub2d8 \uc678 %3\uba85\uc774 \uc568\ubc94\uc5d0 \uc0ac\uc9c4\uc744 \ucd94\uac00\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_3001_1":
            "%1\ub2d8\uc774 \ub0b4 \uac8c\uc2dc\uae00\uc5d0 \ub313\uae00\uc744 \ub2ec\uc558\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_3001_2":
            "%1\ub2d8, %2\ub2d8\uc774 \ub0b4 \uac8c\uc2dc\uae00\uc5d0 \ub313\uae00\uc744 \ub2ec\uc558\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_3001_3":
            "%1\ub2d8, %2\ub2d8 \uc678 %3\uba85\uc774 \ub0b4 \uac8c\uc2dc\uae00\uc5d0 \ub313\uae00\uc744 \ub2ec\uc558\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_3002_1":
            "%1\ub2d8\uc774 \ub313\uae00\uc5d0\uc11c \ub098\ub97c \uba58\uc158\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_3002_2":
            "%1\ub2d8, %2\ub2d8\uc774 \ub313\uae00\uc5d0\uc11c \ub098\ub97c \uba58\uc158\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_3002_3":
            "%1\ub2d8, %2\ub2d8 \uc678 %3\uba85\uc774 \ub313\uae00\uc5d0\uc11c \ub098\ub97c \uba58\uc158\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_3003_1":
            "%1\ub2d8\uc774 \ub0b4 \uac8c\uc2dc\uae00\uc744 '\uc88b\uc544\uc694'\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_3003_2":
            "%1\ub2d8, %2\ub2d8\uc774 \ub0b4 \uac8c\uc2dc\uae00\uc744 '\uc88b\uc544\uc694'\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_3003_3":
            "%1\ub2d8, %2\ub2d8 \uc678 %3\uba85\uc774 \ub0b4 \uac8c\uc2dc\uae00\uc744 '\uc88b\uc544\uc694'\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_4001_1":
            "%1\ub2d8\uc774 \uadf8\ub8f9\uc5d0 \ucc38\uc5ec\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_4002_1":
            "%1\ub2d8\uc774 \ub0b4 \uac8c\uc2dc\uae00\uc744 \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.content.NC_UPDATE":
            "\ucd5c\uc2e0 \ubc84\uc804\uc758 LINE\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud558\uba74 \ub0b4\uc6a9\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.empty":
            "\uc0c8\ub85c\uc6b4 \uc54c\ub9bc\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "timeline.noti.error":
            "\uc54c\ub9bc\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694. ",
          "timeline.noti.home": "\ud648",
          "timeline.oamerge.feed.title":
            "\uacf5\uc2dd \uacc4\uc815 \ud53c\ub4dc",
          "timeline.oamerge.title": "\ub0b4 \uacf5\uc2dd \uacc4\uc815",
          "timeline.officialprofile.networkerror":
            "\ub124\ud2b8\uc6cc\ud06c \uc624\ub958\ub85c \uc644\ub8cc\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "timeline.officialprofile.title": "\ud504\ub85c\ud544",
          "timeline.original.open": "\uc6d0\ubcf8 \ubcf4\uae30",
          "timeline.poppost.counttime.hour.other": "",
          "timeline.poppost.counttime.hour.plurals.few": "",
          "timeline.poppost.counttime.hour.plurals.many": "",
          "timeline.poppost.counttime.hour.plurals.one": "",
          "timeline.poppost.counttime.hour.plurals.other": "",
          "timeline.poppost.counttime.hour.plurals.two": "",
          "timeline.poppost.counttime.hour.plurals.zero": "",
          "timeline.poppost.counttime.min.other": "",
          "timeline.poppost.counttime.min.plurals.few": "",
          "timeline.poppost.counttime.min.plurals.many": "",
          "timeline.poppost.counttime.min.plurals.one": "",
          "timeline.poppost.counttime.min.plurals.other": "",
          "timeline.poppost.counttime.min.plurals.two": "",
          "timeline.poppost.counttime.min.plurals.zero": "",
          "timeline.poppost.counttime.soon": "1\ubd84 \ub0a8\uc74c",
          "timeline.poppost.tooltip.hour.other": "",
          "timeline.poppost.tooltip.hour.plurals.few": "",
          "timeline.poppost.tooltip.hour.plurals.many": "",
          "timeline.poppost.tooltip.hour.plurals.one": "",
          "timeline.poppost.tooltip.hour.plurals.other": "",
          "timeline.poppost.tooltip.hour.plurals.two": "",
          "timeline.poppost.tooltip.hour.plurals.zero": "",
          "timeline.poppost.tooltip.min.other": "",
          "timeline.poppost.tooltip.min.plurals.few": "",
          "timeline.poppost.tooltip.min.plurals.many": "",
          "timeline.poppost.tooltip.min.plurals.one": "",
          "timeline.poppost.tooltip.min.plurals.other": "",
          "timeline.poppost.tooltip.min.plurals.two": "",
          "timeline.poppost.tooltip.min.plurals.zero": "",
          "timeline.poppost.tooltip.soon":
            "1\ubd84 \ud6c4 \uc790\ub3d9\uc73c\ub85c \uc0ad\uc81c\ub418\ub294 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",
          "timeline.post.attach.drag.guide":
            "\uc0ac\uc9c4\uc774\ub098 \ub3d9\uc601\uc0c1\uc744 \ud654\uba74\uc73c\ub85c \ub04c\uc5b4\uc640\uc11c \ucd94\uac00\ud560 \uc218\ub3c4 \uc788\uc5b4\uc694.",
          "timeline.post.attach.drag.guide.premium":
            "\uc0ac\uc9c4\uc744 \ud654\uba74\uc73c\ub85c \ub04c\uc5b4\uc640\uc11c \ucd94\uac00\ud560 \uc218\ub3c4 \uc788\uc5b4\uc694.",
          "timeline.post.attach.draghere":
            "\uc0ac\uc9c4\uc774\ub098 \ub3d9\uc601\uc0c1\uc744 \uc5ec\uae30\ub85c \ub04c\uc5b4\ub2e4 \ub193\uc73c\uc138\uc694.",
          "timeline.post.attach.draghere.premium":
            "\uc0ac\uc9c4\uc744 \uc5ec\uae30\ub85c \ub04c\uc5b4\ub2e4 \ub193\uc73c\uc138\uc694.",
          "timeline.post.delete": "\uc0ad\uc81c",
          "timeline.post.deleted":
            "\uc774\ubbf8 \uc0ad\uc81c\ub41c \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",
          "timeline.post.deletedbyadmin":
            "\uc6b4\uc601\uc790\uc5d0 \uc758\ud574 \uc0ad\uc81c\ub41c \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",
          "timeline.post.done": "\uc218\uc815 \uc644\ub8cc",
          "timeline.post.edit": "\uc218\uc815",
          "timeline.post.edit.desc":
            "\ub178\ud2b8 \uc218\uc815\uc744 \ucde8\uc18c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\n\ubcc0\uacbd \uc0ac\ud56d\uc740 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "timeline.post.friends": "%1\ub2d8\uc758 LINE \uce5c\uad6c\ub4e4",
          "timeline.post.friends.detail":
            "\uc774 \uac8c\uc2dc\uae00\uc740 %1\ub2d8\uc758 \nLINE \uce5c\uad6c\ub4e4\ub9cc \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.post.grid.more": "+ %n",
          "timeline.post.hashtag": "\ud574\uc2dc\ud0dc\uadf8",
          "timeline.post.hashtag.guide.title":
            "#\ud574\uc2dc\ud0dc\uadf8\ub97c \uc785\ub825\ud574 \ubcf4\uc138\uc694!",
          "timeline.post.hashtag.results.related": "\uc5f0\uad00",
          "timeline.post.hint":
            "\uc9c0\uae08 \uc774 \uc21c\uac04\uc744 \uacf5\uc720\ud558\uc138\uc694.",
          "timeline.post.keep": "\uc720\uc9c0",
          "timeline.post.likeshare.cancel": "\uacf5\uc720 \ucde8\uc18c",
          "timeline.post.likeshare.canceled":
            "\uac8c\uc2dc\uae00 \uacf5\uc720\ub97c \ucde8\uc18c\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.post.likeshare.done":
            "\uc774\ubbf8 \uc88b\uc544\uc694\ub85c \uacf5\uc720\ud588\uc2b5\ub2c8\ub2e4. ",
          "timeline.post.mention.alert":
            "\ucd5c\ub300 20\uba85\uae4c\uc9c0 \uba58\uc158\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.post.mention.empty.description":
            "\"<![CDATA[\uae00\uc744 \uc62c\ub9b4 \ub54c <font color='#4166b1'>@\uce5c\uad6c</font>\ub97c \uba58\uc158\ud558\uba74\n\uce5c\uad6c\uac00 \uc54c\ub9bc\uc744 \ubc1b\uace0 \uac04\ud3b8\ud558\uac8c \uae00\uc744 \ubcfc \uc218 \uc788\uc5b4\uc694.]]>\"",
          "timeline.post.mention.empty.title":
            "@ \uae30\ud638\ub85c \uce5c\uad6c\ub97c \uba58\uc158\ud574 \ubcf4\uc138\uc694!",
          "timeline.post.mention.setting.edit.alert":
            "\uacf5\uac1c \ub300\uc0c1\uc744 \ubcc0\uacbd\ud558\uba74 \ubcf8\ubb38\uc5d0 \uba58\uc158\ub41c \ub2e4\uc74c \uce5c\uad6c\ub4e4\uc774 \uae00\uc744 \uc77d\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ubcc0\uacbd\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "timeline.post.newpost": "\uc0c8 \uac8c\uc2dc\uae00",
          "timeline.post.onlyme": "\ub098\ub9cc \ubcf4\uae30",
          "timeline.post.public": "\uc804\uccb4 \uacf5\uac1c",
          "timeline.post.public.desc":
            "\uc804\uccb4 \uacf5\uac1c\uae00\uc758 \uacbd\uc6b0 \ub0b4 \uce5c\uad6c\uac00 \uc544\ub2cc \ub2e4\ub978 \uc0ac\ub78c\ub3c4 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.post.public.sharetotimeline":
            "\ud0c0\uc784\ub77c\uc778\uc5d0 \uacf5\uc720",
          "timeline.post.scope.group":
            "\uc774 \ub178\ud2b8\ub294 \uc774 \uadf8\ub8f9\uc758 \uba64\ubc84\ub9cc \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.post.scope.manToMan":
            "\uc774 \ub178\ud2b8\ub294 %1\ub2d8\uacfc \ub098\ub9cc \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.post.seemore": "\ub354\ubcf4\uae30",
          "timeline.post.share": "\uacf5\uc720",
          "timeline.post.sharedchanged":
            "\uc6d0\ubcf8 \uac8c\uc2dc\uae00\uc758 \uacf5\uac1c \uc124\uc815\uc774 \ubcc0\uacbd\ub418\uc5b4 \uac8c\uc2dc\uae00\uc744 \ud45c\uc2dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "timeline.post.shareddeleted":
            "\uacf5\uc720\ub41c \uc6d0\ubcf8 \uac8c\uc2dc\uae00\uc774 \uc0ad\uc81c\ub418\uc5c8\uac70\ub098 \ud0c8\ud1f4\ud55c \uacc4\uc815\uc758 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",
          "timeline.post.sorting.option.ranking": "\ub7ad\ud0b9\uc21c",
          "timeline.post.sorting.option.time": "\uc2dc\uac04\uc21c",
          "timeline.post.write": "\ub4f1\ub85d",
          "timeline.publicgroup.emptymember":
            "\ucd94\uac00\ub41c \uce5c\uad6c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "timeline.publicgroup.group": "\uadf8\ub8f9",
          "timeline.publicgroup.group.empty":
            "\uadf8\ub8f9 \ub9ac\uc2a4\ud2b8\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "timeline.publicgroup.linefriends": "\uce5c\uad6c \uacf5\uac1c",
          "timeline.publicgroup.linefriends.desc":
            "\ub0b4 \ud648\uc744 \ubcfc \uc218 \uc788\ub294 \uce5c\uad6c\ub4e4\uc5d0\uac8c \uacf5\uac1c\ub429\ub2c8\ub2e4",
          "timeline.publicgroup.nobodysee":
            "\uc774 \uac8c\uc2dc\uae00\uc740 \ud604\uc7ac 0\uba85\uc5d0\uac8c \uacf5\uac1c\ub418\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
          "timeline.publicgroup.sharelist": "\uacf5\uac1c \ub9ac\uc2a4\ud2b8",
          "timeline.publicgroup.title.detail":
            "\uc774 \uac8c\uc2dc\uae00\uc740 \ub204\uad6c\uc5d0\uac8c \uacf5\uac1c\ub418\ub098\uc694?",
          "timeline.publicgroup.title.post":
            "\uac8c\uc2dc\uae00 \uacf5\uac1c \uc124\uc815",
          "timeline.recommend": "\ucd94\ucc9c",
          "timeline.report.desc":
            "\uc2e0\uace0\ud560 \uacbd\uc6b0, \uc774 \uc0ac\uc6a9\uc790\uc758 \uc815\ubcf4, \uc774 \uc0ac\uc6a9\uc790\uc640 \uc8fc\uace0\ubc1b\uc740 \ucd5c\uadfc 100\uac74\uc758 \ub300\ud654 \ub0b4\uc6a9 \ub610\ub294 \uad00\ub828 \uac8c\uc2dc\uae00\uc774 \uc804\uc1a1\ub429\ub2c8\ub2e4.",
          "timeline.report.done": "\uc2e0\uace0\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.report.reason.advertising": "\uad11\uace0 / \uc0ac\uae30",
          "timeline.report.reason.genderHarassment":
            "\ubd88\uac74\uc804 \uad50\uc81c \uc694\uad6c",
          "timeline.report.reason.harassment":
            "\uc720\ud574\uc131 \uba54\uc2dc\uc9c0",
          "timeline.report.reason.other": "\uae30\ud0c0",
          "timeline.report.selectReason":
            "\uc2e0\uace0 \uc774\uc720\ub97c \uc120\ud0dd\ud574\uc8fc\uc138\uc694.",
          "timeline.report.title": "\uc2e0\uace0",
          "timeline.request.failed.likeshare.status":
            "\uacf5\uc720 \uc0c1\ud0dc\ub97c \ubd88\ub7ec\uc624\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.",
          "timeline.request.failed.timeline":
            "\uc774 \uac8c\uc2dc\uae00\uc744 \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "timeline.request.failed.url":
            "URL \uc815\ubcf4\ub97c \ubd88\ub7ec\uc624\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. \n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "timeline.request.failed.user":
            "\ud574\ub2f9 \uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "timeline.retry": "\ub2e4\uc2dc \uc2dc\ub3c4",
          "timeline.setting.autoopen":
            "\uc0c8\ub85c \ucd94\uac00\ub41c \uce5c\uad6c\uc5d0\uac8c \uc790\ub3d9\uc73c\ub85c \uacf5\uac1c",
          "timeline.setting.buddylist.empty":
            "LINE \uce5c\uad6c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "timeline.setting.desc": "\uacf5\uac1c \ubc94\uc704 \uc124\uc815",
          "timeline.setting.desc2":
            "\ub0b4 \ud648\uc758 \uacf5\uac1c \uc5ec\ubd80\ub97c \uc124\uc815\ud569\ub2c8\ub2e4.",
          "timeline.setting.feed.ranking": "\uac8c\uc2dc\uae00 \uc21c\uc11c",
          "timeline.setting.feed.ranking.option":
            "\uc778\uae30\uae00 \uba3c\uc800 \ubcf4\uae30",
          "timeline.setting.label.blocked": "\ube44\uacf5\uac1c",
          "timeline.setting.label.unblocked": "\uacf5\uac1c",
          "timeline.setting.usetoast": "LINE VOOM \uc54c\ub9bc",
          "timeline.share.copyUrl": "URL \ubcf5\uc0ac",
          "timeline.share.copyUrl.toast":
            "URL\uc774 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "timeline.sharetohome.hint":
            "\ud568\uaed8 \ub0a8\uae38 \uba54\uc2dc\uc9c0\ub97c \uc791\uc131\ud558\uc138\uc694.",
          "timeline.sharetotalk.comfirm.desc":
            "'%1' \ub300\ud654\ubc29\uc5d0 \ubcf4\ub0b4\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "timeline.sharetotalk.empty.chat":
            "\uc120\ud0dd\ud560 \uc218 \uc788\ub294 \ub300\ud654\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "timeline.sharetotalk.empty.friend":
            "\uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uce5c\uad6c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "timeline.sharetotalk.empty.group":
            "\uc120\ud0dd\ud560 \uc218 \uc788\ub294 \uadf8\ub8f9\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "timeline.sharetotalk.tab.chat": "\ub300\ud654",
          "timeline.sharetotalk.tab.friend": "\uce5c\uad6c",
          "timeline.sharetotalk.tab.group": "\uadf8\ub8f9",
          "timeline.sharetotalk.title": "\ub300\ud654\ub85c \uacf5\uc720",
          "timeline.system.check.wait":
            "\ud604\uc7ac \uc810\uac80 \uc911\uc785\ub2c8\ub2e4.\n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.",
          "timeline.time.afternoon": "\uc624\ud6c4",
          "timeline.time.morning": "\uc624\uc804",
          "timeline.video.popup.waiting":
            "\uc778\ucf54\ub529 \uc911\uc785\ub2c8\ub2e4. \n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "timeline.yes": "\ub124",
          "timline.report.policy.desc":
            "\uc2e0\uace0\ud560 \uacbd\uc6b0, \uad00\ub828 \uc0ac\uc6a9\uc790\uc758 \uc815\ubcf4, \uc8fc\uace0\ubc1b\uc740 \ucd5c\uadfc 20\uac74\uc758 \ub300\ud654 \ub0b4\uc6a9 \ub610\ub294 \uad00\ub828 \uac8c\uc2dc\uae00\uc774 \uc804\uc1a1\ub429\ub2c8\ub2e4.",
          "unsupported.file.checkbox":
            "\ud56d\uc0c1 \uc555\ucd95\ud558\uc5ec \ubcf4\ub0b4\uae30",
          "unsupported.file.common":
            "\ubcf4\ub0bc \uc218 \uc5c6\ub294 \ud30c\uc77c\uc744 zip\uc73c\ub85c \uc555\ucd95\ud574\uc11c \ubcf4\ub0c5\ub2c8\ub2e4.",
          "unsupported.file.compress.fail":
            "\ud30c\uc77c\uc744 \uc555\ucd95\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "unsupported.file.compressing": "\uc555\ucd95 \uc911... ",
          "unsupported.file.dontshow":
            "\uc774 \uba54\uc138\uc9c0 \ud45c\uc2dc \uc548 \ud568",
          "unsupported.file.multi":
            "\ubcf4\ub0bc \uc218 \uc5c6\ub294 \ud615\uc2dd\uc758 \ud30c\uc77c\uc774 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. zip \ud30c\uc77c\ub85c \uc555\ucd95\ud558\uc5ec \ubcf4\ub0b4\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "unsupported.file.single":
            "\ubcf4\ub0bc \uc218 \uc5c6\ub294 \ud615\uc2dd\uc758 \ud30c\uc77c\uc785\ub2c8\ub2e4. zip \ud30c\uc77c\ub85c \uc555\ucd95\ud558\uc5ec \ubcf4\ub0b4\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "update.msg.check.security1":
            "\ubcf4\uc548 \uac80\uc0ac \uc911 \uc785\ub2c8\ub2e4.",
          "update.msg.check.security2":
            "\uc7a0\uc2dc\ub9cc \uae30\ub2e4\ub824 \uc8fc\uc138\uc694.",
          "update.summary.url":
            "http://openapis.jboard.naver.jp/mobile/document/line_desktop/KO/995",
          "upgradegroupinvite.button.requireinvites":
            "\ucd08\ub300 \uae30\ub2a5 \ucf1c\uae30",
          "upgradegroupinvite.popup.desc.toomanyfriends":
            "\uba64\ubc84 \uc218 \uae30\uc900 100\uba85\uc744 \ucd08\uacfc\ud55c \uadf8\ub8f9\uc778 \uacbd\uc6b0 \ubc18\ub4dc\uc2dc '\ucd08\ub300\uc7a5 \uc804\uc1a1' \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud574\uc57c \ud569\ub2c8\ub2e4.\n\ud574\ub2f9 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc73c\ub824\uba74 \uba64\ubc84 \uc218\ub97c 100\uba85 \uc774\ud558\ub85c \uc870\uc815\ud574 \uc8fc\uc138\uc694.",
          "upgradegroupinvite.popup.title.toomanyfriends":
            "\ucd08\ub300\uc7a5 \uc804\uc1a1 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "upic.btn.cancel.title": "\ucde8\uc18c",
          "upic.btn.find.title": "\ucc3e\uc544\ubcf4\uae30",
          "upic.btn.ok.title": "\ud655\uc778",
          "upic.label.desc.title":
            "\uc0ac\uc9c4\uc740 jpg, jpeg, png, gif, bmp \ud30c\uc77c\ub9cc \uc5c5\ub85c\ub4dc\n\uac00\ub2a5\ud569\ub2c8\ub2e4.",
          "upic.label.upic.title":
            "\ud504\ub85c\ud544 \uc774\ubbf8\uc9c0 \ud3b8\uc9d1",
          "upic.msg.cantFindFile":
            "\ud30c\uc77c\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "upic.msg.not.image":
            "\uc774\ubbf8\uc9c0 \ud30c\uc77c\ub9cc \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "upic.msg.select":
            "\ud504\ub85c\ud544 \uc0ac\uc9c4\uc744 \uc120\ud0dd\ud558\uc138\uc694.",
          "upic.msg.sizeExceeds":
            "\uc774\ubbf8\uc9c0 \ud30c\uc77c\uc740 \ucd5c\ub300 20MB\uae4c\uc9c0 \ubcf4\ub0bc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "user.report.error":
            "\ud574\ub2f9 \uba54\uc2dc\uc9c0\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc5b4 \uc2e0\uace0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "user.report.policy.desc":
            "\uc2e0\uace0\ud560 \uacbd\uc6b0 \uc774 \uc0ac\uc6a9\uc790\uc758 \uc815\ubcf4, \uc774 \uc0ac\uc6a9\uc790\uc640 \uc8fc\uace0\ubc1b\uc740 \ucd5c\uadfc 10\uac74\uc758 \ub300\ud654 \ub0b4\uc6a9 \ub610\ub294 \uad00\ub828 \uac8c\uc2dc\uae00\uc774 \uc804\uc1a1\ub429\ub2c8\ub2e4.",
          "user.report.question":
            "\uc774 \uc0ac\uc6a9\uc790\ub97c \ucc28\ub2e8\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "user.search.placeholder": "\uc774\ub984\uc73c\ub85c \uac80\uc0c9",
          "user.warning.investmentfraud":
            "LINE\uc744 \uc774\uc6a9\ud55c \uc0ac\uae30\uc5d0 \uc8fc\uc758\ud574 \uc8fc\uc138\uc694.",
          "user.warning.invitedtogroup":
            "<![CDATA[<b><font color='%1'>%2</font></b>\ub2d8\uc774 \ub098\ub97c \uadf8\ub8f9\uc5d0 \ucd08\ub300\ud588\uc2b5\ub2c8\ub2e4.\n<font color='#FF3A44'>\uc758\uc2ec\uc2a4\ub7ec\uc6b4 \uc0ac\uc6a9\uc790\uc778 \uacbd\uc6b0 \ucc28\ub2e8\ud558\uace0 \uc2e0\uace0\ud574 \uc8fc\uc138\uc694.</font>]]>",
          "user.warning.spammer":
            "\uce5c\uad6c\uac00 \uc544\ub2cc \uc0ac\uc6a9\uc790\uc785\ub2c8\ub2e4.",
          "user.warning.spammer.group":
            "%1\ub2d8\uc774 \ub098\ub97c \uadf8\ub8f9 \ub300\ud654\ubc29\uc5d0 \ucd08\ub300\ud588\uc2b5\ub2c8\ub2e4. \ub300\ud654 \ub0b4\uc6a9\uc774 \uc758\uc2ec\uc2a4\ub7ec\uc6b4 \uacbd\uc6b0 \uc2e0\uace0 \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694.",
          "videoProfile.error.fileType":
            "\ub4f1\ub85d\ud560 \uc218 \uc5c6\ub294 \ud615\uc2dd\uc758 \ud30c\uc77c\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "videoProfile.error.lessThenOneSec":
            "1\ucd08 \uc774\ud558\uc758 \ub3d9\uc601\uc0c1\uc740 \ub4f1\ub85d\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "viewer.alert.desc.delete":
            "\uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "viewer.alert.desc.fullsize":
            "\uc804\uccb4 \ud654\uba74\uc5d0\uc11c \ub098\uac00\ub824\uba74 Esc \ud0a4\ub97c \ub204\ub974\uc138\uc694.",
          "viewer.alert.desc.mustinstallplugin":
            "GIF, \uc0ac\uc9c4, \ub3d9\uc601\uc0c1\uc744 \ud45c\uc2dc\ud558\ub824\uba74 \ucf58\ud150\uce20 \ubdf0\uc5b4 \ud50c\ub7ec\uadf8\uc778\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud574\uc57c \ud569\ub2c8\ub2e4. \uc9c0\uae08 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "viewer.alert.image.expired.previewinstead":
            "\ud30c\uc77c \uc800\uc7a5 \uae30\uac04\uc774 \ub9cc\ub8cc\ub418\uc5b4 \ubbf8\ub9ac\ubcf4\uae30\ub9cc \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",
          "viewer.alert.video.expired":
            "\uc800\uc7a5\uae30\uac04\uc774 \uc9c0\ub098 \ub3d9\uc601\uc0c1\uc744 \uc7ac\uc0dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "viewer.contextmenu.copy": "\ubcf5\uc0ac",
          "viewer.contextmenu.forward": "\uacf5\uc720",
          "viewer.contextmenu.keep": "Keep\uc5d0 \uc800\uc7a5",
          "viewer.contextmenu.keepmemo": "Keep \uba54\ubaa8\uc5d0 \uacf5\uc720",
          "viewer.contextmenu.saveas":
            "\ub2e4\ub978 \uc774\ub984\uc73c\ub85c \uc800\uc7a5",
          "viewer.contextmenu.scanqr": "QR \ucf54\ub4dc \uc2a4\uce94",
          "viewer.contextmenu.scantext": "\ud14d\uc2a4\ud2b8 \uc778\uc2dd",
          "viewer.copy.toast.copied":
            "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "viewer.error.media.download.fail":
            "\uc800\uc7a5\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "viewer.error.video.common":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc5ec \uc7ac\uc0dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "viewer.error.video.network":
            "\ub124\ud2b8\uc6cc\ud06c \ud639\uc740 \uc11c\ubc84 \ubb38\uc81c\ub85c \uc7ac\uc0dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "viewer.error.video.transient":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \uc7ac\uc0dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "viewer.keep.toast.saved":
            "Keep\uc5d0 \uc800\uc7a5\ud588\uc2b5\ub2c8\ub2e4.",
          "viewer.menu.edit": "\ud3b8\uc9d1",
          "viewer.menu.forward": "\uacf5\uc720",
          "viewer.menu.info.name": "\ud30c\uc77c\uba85",
          "viewer.menu.keep": "Keep\uc5d0 \uc800\uc7a5",
          "viewer.menu.keepmemo": "Keep \uba54\ubaa8\uc5d0 \uacf5\uc720",
          "viewer.menu.more.delete": "\uc0ad\uc81c",
          "viewer.menu.more.info": "\ud30c\uc77c \uc815\ubcf4",
          "viewer.menu.more.speed": "\uc7ac\uc0dd \uc18d\ub3c4",
          "viewer.menu.openfolder": "\ud3f4\ub354 \uc5f4\uae30",
          "viewer.menu.originalsize": "\uc2e4\uc81c \ud06c\uae30",
          "viewer.menu.rotate": "90\xb0 \ud68c\uc804",
          "viewer.menu.saveas":
            "\ub2e4\ub978 \uc774\ub984\uc73c\ub85c \uc800\uc7a5",
          "viewer.menu.scanqr": "QR \ucf54\ub4dc \uc2a4\uce94",
          "viewer.menu.scantext": "\ud14d\uc2a4\ud2b8 \uc778\uc2dd",
          "viewer.menu.showalbums":
            "\uc804\uccb4 \ucf58\ud150\uce20 \ubcf4\uae30",
          "viewer.menu.showallcontents":
            "\uc804\uccb4 \ucf58\ud150\uce20 \ubcf4\uae30",
          "viewer.menu.thumbnail.expand":
            "\uc12c\ub124\uc77c \ud3bc\uce58\uae30",
          "viewer.menu.thumbnail.fold": "\uc12c\ub124\uc77c \uc811\uae30",
          "viewer.menu.video.pause": "\uc77c\uc2dc\uc815\uc9c0",
          "viewer.menu.video.play": "\uc7ac\uc0dd",
          "viewer.menu.video.replay": "\ub2e4\uc2dc \ubcf4\uae30",
          "viewer.menu.video.stop": "\uc815\uc9c0",
          "viewer.menu.video.volume": "\ubcfc\ub968",
          "viewer.menu.zoomin": "\ud655\ub300",
          "viewer.menu.zoomout": "\ucd95\uc18c",
          "viewer.play.toast.speaker.beingconnected":
            "\ub2e4\ub978 \uc2a4\ud53c\ucee4 \uc5f0\uacb0 \uc911\uc785\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "viewer.popup.info.created": "\uc0dd\uc131\uc2dc\uac04",
          "viewer.popup.info.filesize": "\ud30c\uc77c\ud06c\uae30",
          "viewer.popup.info.from": "\ubcf4\ub0b8\uc0ac\ub78c",
          "viewer.popup.info.resolution": "\ud574\uc0c1\ub3c4",
          "viewer.popup.info.saved": "\uc800\uc7a5\uc2dc\uac04",
          "viewer.saveas.toast.saved": "\uc800\uc7a5\ud588\uc2b5\ub2c8\ub2e4.",
          "viewer.tooltip.window.close": "\ub2eb\uae30",
          "viewer.tooltip.window.maximize": "\ucd5c\ub300\ud654",
          "viewer.tooltip.window.minimize": "\ucd5c\uc18c\ud654",
          "viewer.tooltip.window.restore":
            "\uc774\uc804 \ud06c\uae30\ub85c \ubcf5\uc6d0",
          "voip.beautyfeature.button.clearall":
            "\ubaa8\ub450 \uc9c0\uc6b0\uae30",
          "voip.beautyfeature.popupbutton.cancel": "\ucde8\uc18c",
          "voip.beautyfeature.popupbutton.clearall": "\ud574\uc81c",
          "voip.beautyfeature.popupdesc.clearfaceeffects":
            "\ubdf0\ud2f0 \uae30\ub2a5 \uc124\uc815\uc744 \uc704\ud574 \ud398\uc774\uc2a4 \uc774\ud399\ud2b8\ub97c \ud574\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "voip.beautyfeature.toggle.darkeneyebrows":
            "\ub208\uc379 \uc9c4\ud558\uac8c",
          "voip.beautyfeature.toggle.fillinlips":
            "\uc785\uc220 \uc9c4\ud558\uac8c",
          "voip.beautyfeature.toggle.resizeeyes": "\ub208 \ud06c\uac8c",
          "voip.beautyfeature.toggle.revert": "\uae30\ubcf8 \uac12",
          "voip.beautyfeature.toggle.slimjawline": "\uac38\ub984\ud558\uac8c",
          "voip.beautyfeature.toggle.slimnose": "\ucf54 \uc881\uac8c",
          "voip.beautyfeature.toggle.smoothcomplexion":
            "\ub9e4\ub044\ub7fd\uac8c",
          "voip.button.label.call": "\ud1b5\ud654",
          "voip.button.label.disconnect": "\ub04a\uae30",
          "voip.button.label.voiceonly":
            "\uce74\uba54\ub77c\ub97c \ub044\uace0 \ud1b5\ud654",
          "voip.call.tooltip.cameraunavailable":
            "\uce74\uba54\ub77c \uc5f0\uacb0 \uc548 \ub428",
          "voip.call.tooltip.microphoneunavailable":
            "\ub9c8\uc774\ud06c \uc5f0\uacb0 \uc548 \ub428",
          "voip.connect.camera.alert":
            "\uce74\uba54\ub77c\uac00 \uc5f0\uacb0\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc9c0\uae08 \ucf1c\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "voip.connect.mic.alert":
            "\ub9c8\uc774\ud06c\uac00 \uc5f0\uacb0\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc9c0\uae08 \ucf1c\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "voip.desc.calling": "\ubc1c\uc2e0\uc911",
          "voip.desc.calling.failed":
            "%1\ud1b5\ud654\ub97c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uac78\uc5b4 \uc8fc\uc138\uc694.(%2)",
          "voip.desc.calling.failed.accept.other.device":
            "\ub2e4\ub978 \uae30\uae30\uc5d0\uc11c \ud1b5\ud654 \uc911\uc785\ub2c8\ub2e4.",
          "voip.desc.calling.failed.contact.busy":
            "%1\ub2d8\uc740 \ud1b5\ud654\uc911\uc785\ub2c8\ub2e4.\n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uac78\uc5b4 \uc8fc\uc138\uc694.",
          "voip.desc.calling.failed.maintance":
            "\uc77c\uc2dc\uc801\uc73c\ub85c PC\ubc84\uc804 \uc74c\uc131\ud1b5\ud654\ub97c\n\uc774\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc7a0\uc2dc \ub4a4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "voip.desc.calling.failed.need.audio":
            "\uc0ac\uc6b4\ub4dc \uce74\ub4dc\ub97c \ud655\uc778\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\ud655\uc778 \ud6c4 \ub2e4\uc2dc \ud1b5\ud654\ub97c \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.\xa0",
          "voip.desc.calling.failed.need.device":
            "\ub9c8\uc774\ud06c,\uc2a4\ud53c\ucee4\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\uc5f0\uacb0 \ud6c4 \ub2e4\uc2dc \ud1b5\ud654\ub97c \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "voip.desc.calling.failed.need.devicesetting": "",
          "voip.desc.calling.failed.need.mic":
            "\ub9c8\uc774\ud06c\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\uc5f0\uacb0 \ud6c4 \ub2e4\uc2dc \ud1b5\ud654\ub97c \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "voip.desc.calling.failed.need.oscamera":
            "\uce74\uba54\ub77c\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uae30\uae30\uc5d0\uc11c \uce74\uba54\ub77c\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud5c8\uc6a9\ud574 \uc8fc\uc138\uc694.",
          "voip.desc.calling.failed.need.osmic":
            "\ub9c8\uc774\ud06c\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uae30\uae30\uc5d0\uc11c \ub9c8\uc774\ud06c\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ud5c8\uc6a9\ud574 \uc8fc\uc138\uc694.",
          "voip.desc.calling.failed.need.ospeaker": "",
          "voip.desc.calling.failed.need.spk":
            "\uc2a4\ud53c\ucee4\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\n\uc5f0\uacb0 \ud6c4 \ub2e4\uc2dc \ud1b5\ud654\ub97c \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "voip.desc.calling.failed.need.update":
            "\uc2a4\ub9c8\ud2b8\ud3f0\uc744 \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c\n\uc5c5\ub370\uc774\ud2b8 \ud558\uc2dc\uba74 \ub370\uc2a4\ud06c\ud0d1\uc5d0\uc11c\n\uc74c\uc131 \ud1b5\ud654\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "voip.desc.calling.failed.no.accept":
            "\uc751\ub2f5\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uac78\uc5b4 \uc8fc\uc138\uc694.",
          "voip.desc.calling.failed.other.device.use":
            "\ub2e4\ub978 \uae30\uae30\uc5d0\uc11c \ud1b5\ud654 \uc911\uc785\ub2c8\ub2e4.",
          "voip.desc.calling.failed.peer":
            "%1\ub2d8\uc740 \ucd5c\uc2e0 \ubc84\uc804\uc774 \uc544\ub2c8\uac70\ub098\n\ud1b5\ud654\uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0\n\ud1b5\ud654 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "voip.desc.calling.video":
            "\uc601\uc0c1\ud1b5\ud654 \ubc1c\uc2e0\uc911",
          "voip.desc.camerausage":
            "\uc601\uc0c1\ud1b5\ud654\ub97c \uc704\ud574 LINE\uc774 \uce74\uba54\ub77c\uc5d0 \uc811\uadfc\ud558\ub3c4\ub85d \ud5c8\uc6a9\ud574 \uc8fc\uc138\uc694.",
          "voip.desc.camerausage.maconly":
            "\uc601\uc0c1\ud1b5\ud654\ub97c \uc704\ud574 \uc2dc\uc2a4\ud15c \ud658\uacbd\uc124\uc815 > \ubcf4\uc548 \ubc0f \uac1c\uc778 \uc815\ubcf4 \ubcf4\ud638 > \uac1c\uc778 \uc815\ubcf4 \ubcf4\ud638 > \uce74\uba54\ub77c\uc5d0\uc11c\xa0LINE\uc744 \ud5c8\uc6a9\ud574 \uc8fc\uc138\uc694.",
          "voip.desc.connecting": "\uc811\uc18d\uc911...",
          "voip.desc.makeCall.Failed.network":
            "\ub124\ud2b8\uc6cc\ud06c\uac00 \ubd88\uc548\uc815\ud558\uc5ec \ud1b5\ud654\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uac78\uc5b4\uc8fc\uc138\uc694.",
          "voip.desc.mic.failed":
            "\ub9c8\uc774\ud06c\ub85c \uc74c\uc131\uc774 \uc778\uc2dd\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc5f0\uacb0\ub41c \uc7a5\uce58 \uc0c1\ud0dc\ub97c \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "voip.desc.microphoneusage":
            "\uc74c\uc131 \ubc0f \uc601\uc0c1\ud1b5\ud654\ub97c \uc704\ud574 LINE\uc774 \ub9c8\uc774\ud06c\uc5d0 \uc811\uadfc\ud558\ub3c4\ub85d \ud5c8\uc6a9\ud574 \uc8fc\uc138\uc694.",
          "voip.desc.microphoneusage.maconly":
            "\uc74c\uc131 \ubc0f \uc601\uc0c1\ud1b5\ud654\ub97c \uc704\ud574 \uc2dc\uc2a4\ud15c \ud658\uacbd\uc124\uc815 > \ubcf4\uc548 \ubc0f \uac1c\uc778 \uc815\ubcf4 \ubcf4\ud638 > \uac1c\uc778 \uc815\ubcf4 \ubcf4\ud638 > \ub9c8\uc774\ud06c\uc5d0\uc11c\xa0LINE\uc744 \ud5c8\uc6a9\ud574 \uc8fc\uc138\uc694.",
          "voip.desc.ringing": "\uc804\ud654\uac00 \uc654\uc2b5\ub2c8\ub2e4.",
          "voip.desc.ringing.video":
            "\uc601\uc0c1\ud1b5\ud654 \uc694\uccad\uc774 \uc654\uc2b5\ub2c8\ub2e4.",
          "voip.desc.speaker.failed":
            "\uc2a4\ud53c\ucee4\ub85c \uc18c\ub9ac\uac00 \ucd9c\ub825\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc5f0\uacb0\ub41c \uc7a5\uce58 \uc0c1\ud0dc\ub97c \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "voip.disconnect.camera.entry.alert":
            "\uc601\uc0c1\ud1b5\ud654\ub97c \uc2dc\uc791\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \uce74\uba54\ub77c\uac00 \uc5f0\uacb0\ub418\uc9c0 \uc54a\uc544 \uc601\uc0c1\uc774 \uc804\ub2ec\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "voip.disconnect.camera.error":
            "\uce74\uba54\ub77c\uac00 \uc5f0\uacb0\ub418\uc9c0 \uc54a\uc544 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "voip.disconnect.mic.entry.alert":
            "\uc601\uc0c1\ud1b5\ud654\ub97c \uc2dc\uc791\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \ub9c8\uc774\ud06c\uac00 \uc5f0\uacb0\ub418\uc9c0 \uc54a\uc544 \uc74c\uc131\uc774 \uc804\ub2ec\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "voip.disconnect.mic.entry.alert.audio":
            "\uc74c\uc131\ud1b5\ud654\ub97c \uc2dc\uc791\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \ub9c8\uc774\ud06c\uac00 \uc5f0\uacb0\ub418\uc9c0 \uc54a\uc544 \uc74c\uc131\uc774 \uc804\ub2ec\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "voip.disconnect.mic.error":
            "\ub9c8\uc774\ud06c\uac00 \uc5f0\uacb0\ub418\uc9c0 \uc54a\uc544 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "voip.disconnect.micncam.entry.alert":
            "\uc601\uc0c1\ud1b5\ud654\ub97c \uc2dc\uc791\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c? \uce74\uba54\ub77c\uc640 \ub9c8\uc774\ud06c\uac00 \uc5f0\uacb0\ub418\uc9c0 \uc54a\uc544 \uc601\uc0c1\uacfc \uc74c\uc131\uc774 \uc804\ub2ec\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "voip.effect.guide.adjust.effect":
            "\ubdf0\ud2f0 \uc774\ud399\ud2b8\ub97c \uc870\uc815\ud574 \ubcf4\uc138\uc694.",
          "voip.effect.guide.detect.face":
            "\uc5bc\uad74\uc774 \ub098\uc624\ub3c4\ub85d \uce74\uba54\ub77c\ub97c \uc870\uc815\ud574 \uc8fc\uc138\uc694.",
          "voip.effect.guide.extra.001":
            "\uce5c\uad6c\ub4e4\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud574 \ubcf4\uc138\uc694.",
          "voip.effect.guide.extra.006":
            "\uace0\uac1c\ub97c \uc88c\uc6b0\ub85c \ud754\ub4e4\uc5b4 \ubcf4\uc138\uc694.",
          "voip.effect.guide.extra.011":
            "\ubbf8\uc18c\ub97c \uc9c0\uc5b4\ubcf4\uc138\uc694.",
          "voip.effect.guide.extra.012":
            "\uc2ac\ub77c\uc774\ub4dc\ubc14\ub97c \uc6c0\uc9c1\uc5ec \uc774\ud399\ud2b8 \uac15\ub3c4\ub97c \uc870\uc808\ud574 \ubcf4\uc138\uc694.",
          "voip.effect.guide.eye.blink":
            "\ub208\uc744 \uae5c\ube61\uc5ec \ubcf4\uc138\uc694.",
          "voip.effect.guide.mouth.open":
            "\uc785\uc744 \ubc8c\ub824\ubcf4\uc138\uc694.",
          "voip.error.init.failed.callee":
            "[%1\ub2d8\uc5d0\uac8c \ud1b5\ud654 \uc694\uccad\uc774 \uc654\uc2b5\ub2c8\ub2e4]\n\ud604\uc7ac PC \ud658\uacbd \ubb38\uc81c\ub85c \ud1b5\ud654\uae30\ub2a5 \uc774\uc6a9\uc2dc\n\uac15\uc81c \uc885\ub8cc\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "voip.error.init.failed.caller":
            "\ud604\uc7ac PC \ud658\uacbd \ubb38\uc81c\ub85c \ud1b5\ud654\uae30\ub2a5 \uc774\uc6a9\uc2dc\n\uac15\uc81c \uc885\ub8cc\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "voip.label.create.title": "\uc74c\uc131\ud1b5\ud654",
          "voip.label.mic": "\ub9c8\uc774\ud06c",
          "voip.label.speaker": "\uc2a4\ud53c\ucee4",
          "voip.label.video": "\uc601\uc0c1\ud1b5\ud654",
          "voip.label.video.cameraon": "\ucf1c\uae30",
          "voip.label.video.local.cameraOff":
            "\uce74\uba54\ub77c\ub97c \uaed0\uc2b5\ub2c8\ub2e4.",
          "voip.label.video.local.cameraOn":
            "\uce74\uba54\ub77c\ub97c \ucf30\uc2b5\ub2c8\ub2e4.",
          "voip.label.video.local.noCamera":
            "\uce74\uba54\ub77c\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \n\uc0c1\ub300\uc5d0\uac8c \ub098\uc758 \uc601\uc0c1\uc774 \ubcf4\uc774\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "voip.label.video.low.quality":
            "\uc5f0\uacb0\uc0c1\ud0dc\uac00 \uc88b\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "voip.label.video.remote.cameraOff":
            "\uc0c1\ub300\ubc29\uc774 \uce74\uba54\ub77c\ub97c \uaed0\uc2b5\ub2c8\ub2e4.",
          "voip.label.video.remote.cameraOn":
            "\uc0c1\ub300\ubc29\uc774 \uce74\uba54\ub77c\ub97c \ucf30\uc2b5\ub2c8\ub2e4.",
          "voip.label.video.remote.noCamera":
            "\uc0c1\ub300\ubc29\uc774 \uce74\uba54\ub77c\uac00 \uc5c6\uac70\ub098, \n\uc601\uc0c1\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \uc218\uc2e0\uc774 \ub418\uc9c0 \uc54a\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
          "voip.label.video.ringing":
            "\uce74\uba54\ub77c\ub97c \ucf1c\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "voip.label.video.title":
            "%1\ub2d8\uacfc\uc758 \uc601\uc0c1\ud1b5\ud654",
          "voip.media.unsupported.alert.update":
            "%1\ub2d8\uc774 \ud654\uba74 \uacf5\uc720\ub97c \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4. \uacf5\uc720\ub41c \ud654\uba74\uc744 \ud655\uc778\ud558\ub824\uba74 LINE\uc744 \ucd5c\uc2e0 \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud574 \uc8fc\uc138\uc694.",
          "voip.msg.already.during.call":
            "\ub2e4\ub978 \ud1b5\ud654 \uc911\uc785\ub2c8\ub2e4.",
          "voip.msg.bad.connection":
            "\uc5f0\uacb0\uc0c1\ud0dc\uac00 \uc88b\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "voip.msg.bad.connection.failover":
            "\ub2e4\uc2dc \uc5f0\uacb0 \uc911\uc785\ub2c8\ub2e4.",
          "voip.msg.error.no.audio.source":
            "\ub9c8\uc774\ud06c \uc7a5\uce58\uc758 \ubb38\uc81c\ub85c \ud1b5\ud654\ub97c \uc885\ub8cc\ud569\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uac78\uc5b4\uc8fc\uc138\uc694.",
          "voip.msg.error.no.audio.tx.stream":
            "\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.",
          "voip.msg.network.unstable":
            "\ub124\ud2b8\uc6cc\ud06c \uc5f0\uacb0\uc774 \uc6d0\ud65c\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "voip.msg.not.avalable.during.call":
            "\ud574\ub2f9 \uae30\ub2a5\uc740 \ud1b5\ud654 \uc911\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "voip.msg.peer.no.audio.source":
            "\uc0c1\ub300\ubc29\uc758 \ub9c8\uc774\ud06c \uc7a5\uce58 \ubb38\uc81c\ub85c \ud1b5\ud654\ub97c \uc885\ub8cc\ud569\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uac78\uc5b4\uc8fc\uc138\uc694.",
          "voip.msg.send.freeCall":
            "%1 \ub2d8\uc5d0\uac8c \uc74c\uc131\ud1b5\ud654\ub97c \uac70\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "voip.msg.send.videoCall":
            "%1 \ub2d8\uc5d0\uac8c \uc601\uc0c1\ud1b5\ud654\ub97c \uac70\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "voip.msg.switch.to.video.noCamera":
            "\uce74\uba54\ub77c\uac00 \uc5f0\uacb0\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc544 \ub0b4 \uc601\uc0c1\uc740 \ubcf4\uc5ec\uc904 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc601\uc0c1\ud1b5\ud654\ub97c \uc218\ub77d\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "voip.msg.video.camera.unavailable":
            "\uc9c0\uc6d0\ub418\uc9c0 \uc54a\ub294 \uce74\uba54\ub77c\uc785\ub2c8\ub2e4.\n\ud658\uacbd \uc124\uc815 > \ud1b5\ud654 > \uce74\uba54\ub77c \uc124\uc815\uc5d0\uc11c \ub2e4\ub978 \uce74\uba54\ub77c\ub97c \uc120\ud0dd\ud574 \uc8fc\uc138\uc694. \uc9c0\uc6d0\ub418\ub294 \uce74\uba54\ub77c\uac00 \uc5c6\uc744 \uacbd\uc6b0 \ud1b5\ud654\ub294 \uc2dc\uc791\ub418\uc9c0\ub9cc \uc601\uc0c1\uc774 \ud45c\uc2dc\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",
          "voip.msg.video.term.device.control":
            "\uc0c1\ub300\ubc29\uc758 \uae30\uae30 \uc870\uc791\uc73c\ub85c\n\uc601\uc0c1 \ud1b5\ud654\uac00 \uc885\ub8cc\ub418\uace0 \uc74c\uc131 \ud1b5\ud654\ub85c \uc804\ud658\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "voip.msg.video.term.device.interrupted":
            "\uc0c1\ub300\ubc29\uc758 \uce74\uba54\ub77c\uac00 \uc815\uc9c0 \uc0c1\ud0dc\uc785\ub2c8\ub2e4.",
          "voip.msg.video.term.overload.direct.video.call.failed":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \uc601\uc0c1\ud1b5\ud654\ub97c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \n\uc74c\uc131\ud1b5\ud654\ub97c \uc774\uc6a9\ud558\uac70\ub098 \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "voip.msg.video.term.overload.video.changing.failed":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \uc601\uc0c1\ud1b5\ud654\ub97c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "voip.msg.video.term.unknown":
            "\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \n\uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uac78\uc5b4\uc8fc\uc138\uc694.",
          "voip.msg.video.term.unstable":
            "\ub124\ud2b8\uc6cc\ud06c \uc0c1\ud0dc\uac00 \ubd88\uc548\uc815\ud558\uc5ec \uc74c\uc131\ud1b5\ud654\ub85c \uc5f0\uacb0\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "voip.msg.video.term.unsupported.device.video":
            "\uc601\uc0c1 \ud1b5\ud654\ub97c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uc0c1\ub300\uac00 \ucd5c\uc2e0 \ubc84\uc804\uc774 \uc544\ub2c8\uac70\ub098 \uc601\uc0c1 \ud1b5\ud654\ub97c \n\uc774\uc6a9\ud560 \uc218 \uc5c6\ub294 \uae30\uae30\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
          "voip.msg.video.term.unsupported.device.voice":
            "\uc74c\uc131 \ud1b5\ud654\ub85c \uc5f0\uacb0\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \n\uc0c1\ub300\ubc29\uc774 \ucd5c\uc2e0 \ubc84\uc804\uc774 \uc544\ub2c8\uac70\ub098 \uc601\uc0c1 \ud1b5\ud654 \uae30\ub2a5\uc744 \n\uc774\uc6a9\ud560 \uc218 \uc5c6\ub294 \uae30\uae30\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.",
          "voip.msg.warning.close":
            "\ud1b5\ud654\ub97c \uc885\ub8cc\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "voip.msg.warning.groupclose":
            "\uadf8\ub8f9\ud1b5\ud654\uc5d0\uc11c \ub098\uac00\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "voip.noisecanceling.desc.guide":
            "\ubc30\uacbd \uc18c\uc74c\uc744 \ucc28\ub2e8\ud574 \uc8fc\ub294 '\ub0b4 \uc8fc\ubcc0 \uc18c\uc74c \uc81c\uac70' \uae30\ub2a5\uc774 \uc801\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "voip.noisecanceling.popup.desc":
            "\ubcc0\uacbd\ub41c \uc18c\uc74c \uc81c\uac70 \uc124\uc815\uc740 \ub2e4\uc74c \ud1b5\ud654 \uc2dc\ubd80\ud130 \uc801\uc6a9\ub429\ub2c8\ub2e4. \uc9c0\uae08 \uc124\uc815\uc744 \uc801\uc6a9\ud558\ub824\uba74 \ud1b5\ud654\ub97c \uc885\ub8cc\ud558\uace0 \ub2e4\uc2dc \uc2dc\uc791\ud574 \uc8fc\uc138\uc694.",
          "voip.noisecanceling.tooltip.off":
            "\uc18c\uc74c \uc81c\uac70 \uae30\ub2a5 \ucf1c\uae30",
          "voip.noisecanceling.tooltip.on":
            "\uc18c\uc74c \uc81c\uac70 \uae30\ub2a5 \ub044\uae30",
          "voip.popup.end": "\ud1b5\ud654 \uc885\ub8cc",
          "voip.popup.start": "\ud1b5\ud654",
          "voip.screen.share.remove.monitor":
            "\ubaa8\ub2c8\ud130\ub97c \uc81c\uac70\ud558\uc5ec \ud1b5\ud654\uac00 \uc885\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
          "voip.screenshare.button.zoomin": "\ud655\ub300",
          "voip.screenshare.button.zoomout": "\ucd95\uc18c",
          "voip.screenshare.button.zoomreset": "\ucd08\uae30\ud654",
          "voip.screenshare.desc.pause":
            "\ud654\uba74 \uacf5\uc720 \uc77c\uc2dc \uc911\uc9c0\ub428",
          "voip.screenshare.desc.pause.tooltip":
            "\ucc3d\uc744 \ucd5c\uc18c\ud654\ud558\uac70\ub098 \ud06c\uae30 \ubcc0\uacbd, \uc774\ub3d9\ud558\uba74 \ud654\uba74 \uacf5\uc720\uac00 \uc77c\uc2dc \uc911\uc9c0\ub429\ub2c8\ub2e4.",
          "voip.screenshare.error.closeapp":
            "\ud574\ub2f9 \ud654\uba74\uc774 \uc885\ub8cc\ub418\uc5b4 \uacf5\uc720\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",
          "voip.screenshare.index.screen": "\ud654\uba74",
          "voip.screenshare.index.window": "\ucc3d",
          "voip.screenshare.option.optimizevideoclips":
            "\ub3d9\uc601\uc0c1 \ucd5c\uc801\ud654",
          "voip.screenshare.tooltip.fullscreen": "\uc804\uccb4 \ud654\uba74 %1",
          "voip.screenshare.tooltip.optimizevideoclips":
            "\ud654\uba74 \uacf5\uc720 \uc911 \ub3d9\uc601\uc0c1 \ub04a\uae40\uc744 \ucd5c\uc18c\ud654\ud569\ub2c8\ub2e4.",
          "voip.tooltip.callsetting": "\ud1b5\ud654 \uc124\uc815",
          "voip.tooltip.camera.off": "\uce74\uba54\ub77c \ub044\uae30",
          "voip.tooltip.camera.on": "\uce74\uba54\ub77c \ucf1c\uae30",
          "voip.tooltip.chat": "\ub300\ud654\ubc29",
          "voip.tooltip.echocanceloff":
            "\uc5d0\ucf54 \uc81c\uac70 \uae30\ub2a5 \ub044\uae30",
          "voip.tooltip.echocancelon":
            "\uc5d0\ucf54 \uc81c\uac70 \uae30\ub2a5 \ucf1c\uae30",
          "voip.tooltip.end.call": "\uc885\ub8cc",
          "voip.tooltip.end.groupmeetingcall": "\ub098\uac00\uae30",
          "voip.tooltip.fullhd":
            "\uc774\uc81c LINE \uc74c\uc131\ud1b5\ud654\ub97c \ub354 \ub610\ub837\ud558\uac8c \uc990\uae38 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Full HD voice\uac00 \ub179\uc0c9\uc73c\ub85c \ud45c\uc2dc\ub418\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694.",
          "voip.tooltip.mic.off": "\ub9c8\uc774\ud06c \ub044\uae30",
          "voip.tooltip.mic.off.muteronguide":
            "\ub9c8\uc774\ud06c\uac00\xa0\uaebc\uc838\xa0\uc788\uc2b5\ub2c8\ub2e4. \uc0c1\ub300\ubc29\uacfc\xa0\ub300\ud654\ud558\ub824\uba74\xa0\uba3c\uc800\xa0\ub9c8\uc774\ud06c\ub97c\xa0\ucf1c\uc8fc\uc138\uc694.",
          "voip.tooltip.mic.off.spacebartoast":
            "\ub9c8\uc774\ud06c\ub97c \uaed0\uc2b5\ub2c8\ub2e4. \uc2a4\ud398\uc774\uc2a4 \ubc14\ub97c \ub204\ub974\uace0 \uc788\uc73c\uba74 \ub9c8\uc774\ud06c\uac00 \uc77c\uc2dc\uc801\uc73c\ub85c \ucf1c\uc9d1\ub2c8\ub2e4. ",
          "voip.tooltip.mic.on": "\ub9c8\uc774\ud06c \ucf1c\uae30",
          "voip.tooltip.microphone.autovolume":
            "\uc790\ub3d9 \ubcfc\ub968 \uc124\uc815\ub428",
          "voip.tooltip.onscreentool.clearall": "\uc804\uccb4 \uc0ad\uc81c",
          "voip.tooltip.onscreentool.eraser": "\uc9c0\uc6b0\uac1c",
          "voip.tooltip.onscreentool.off":
            "\uadf8\ub9ac\uae30 \ub3c4\uad6c \ub2eb\uae30",
          "voip.tooltip.onscreentool.on":
            "\uadf8\ub9ac\uae30 \ub3c4\uad6c \uc5f4\uae30",
          "voip.tooltip.onscreentool.pen": "\ud39c",
          "voip.tooltip.onscreentool.pointer": "\ud3ec\uc778\ud130",
          "voip.tooltip.onscreentool.redo": "\ub2e4\uc2dc \uc2e4\ud589",
          "voip.tooltip.onscreentool.select": "\uc774\ub3d9",
          "voip.tooltip.onscreentool.stamp": "\uc2a4\ud0ec\ud504",
          "voip.tooltip.onscreentool.undo": "\uc2e4\ud589 \ucde8\uc18c",
          "voip.tooltip.screen.share": "\ud654\uba74 \uacf5\uc720",
          "voip.tooltip.screen.share.off":
            "\ud654\uba74 \uacf5\uc720 \uc885\ub8cc",
          "voip.tooltip.screen.share.start":
            "\uc601\uc0c1\ud1b5\ud654\ub97c \ud558\uba74\uc11c \ub0b4 PC \ud654\uba74\uc744 \uacf5\uc720\ud560 \uc218 \uc788\uc5b4\uc694.",
          "voip.tooltip.screen.share.stop":
            "\ud654\uba74\uc744 \uacf5\uc720 \uc911\uc785\ub2c8\ub2e4. \uacf5\uc720\ub97c \uc911\uc9c0\ud558\ub824\uba74 \ubc84\ud2bc\uc744 \ub2e4\uc2dc \ud074\ub9ad\ud574 \uc8fc\uc138\uc694.",
          "voip.tooltip.speaker.off": "\uc0ac\uc6b4\ub4dc \ub044\uae30",
          "voip.tooltip.speaker.on": "\uc0ac\uc6b4\ub4dc\xa0\ucf1c\uae30",
          "voip.tooltip.switch.to.video":
            "\uc601\uc0c1\ud1b5\ud654\ub85c \uc804\ud658",
          "voip.tooltip.video.camera":
            "\uce74\uba54\ub77c \ucf1c\uae30/\ub044\uae30",
          "voip.tooltip.video.camera.select": "\uce74\uba54\ub77c \uc120\ud0dd",
          "voip.tooltip.video.fullscreen":
            "\uc804\uccb4\xa0\ud654\uba74\uc73c\ub85c\xa0\ubcf4\uae30",
          "voip.tooltip.video.fullscreen.restore":
            "\uc774\uc804 \ud06c\uae30\ub85c \ud654\uba74 \ubcc0\uacbd",
          "voip.tooltip.video.pin": "\ud56d\uc0c1\xa0\uc704\uc5d0 \ud45c\uc2dc",
          "voip.tooltip.video.pinoff":
            "\ud56d\uc0c1 \uc704\uc5d0 \ud45c\uc2dc \ud574\uc81c",
          "voip.tooltip.video.speaker":
            "\uc2a4\ud53c\ucee4 \ucf1c\uae30/\ub044\uae30",
          "voip.tooltip.video.transform":
            "\uc601\uc0c1\ud1b5\ud654 \uc804\ud658",
          "voip.tooltip.volumezero":
            "\uc2a4\ud53c\ucee4 \ubcfc\ub968\uc774 0\uc785\ub2c8\ub2e4. \ud1b5\ud654\ub97c \uc704\ud574 \uc18c\ub9ac\ub97c \ud0a4\uc6cc\uc8fc\uc138\uc694.",
          "voip.video.calling.failed.cameraSwitch":
            "\uce74\uba54\ub77c\ub97c \ubcc0\uacbd\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "voip.video.calling.failed.noCamera":
            "\uce74\uba54\ub77c\ub97c \ucf24 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.\n\uce74\uba54\ub77c \uc5f0\uacb0 \uc0c1\ud0dc\ub97c \ud655\uc778\ud574 \uc8fc\uc138\uc694.",
          "voip.video.desc.makeCall.Failed":
            "\ud1b5\ud654\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4 \ub2e4\uc2dc \uac78\uc5b4\uc8fc\uc138\uc694.",
          "voip.video.dynamicspeaking.pinoff":
            "\uc601\uc0c1 \uace0\uc815 \ud574\uc81c",
          "voip.video.dynamicspeaking.pinoff.desc":
            "\uc601\uc0c1\uc774 \uace0\uc815\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uace0\uc815\uc744 \ud574\uc81c\ud558\ub824\uba74 \uc6b0\uce21 \uc0c1\ub2e8 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud574 \uc8fc\uc138\uc694.",
          "voip.video.effect.popup.downloadfail":
            "\uc774\ud399\ud2b8\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud558\uc9c0 \ubabb\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",
          "voip.video.effect.toast.cameraoff":
            "\uce74\uba54\ub77c\ub97c \uba3c\uc800 \ucf1c\uc8fc\uc138\uc694.",
          "voip.video.effect.toast.detectionfail":
            "\uc5bc\uad74\uc774 \ub098\uc624\ub3c4\ub85d \uce74\uba54\ub77c\ub97c \uc870\uc815\ud574 \uc8fc\uc138\uc694.\\t",
          "voip.video.effect.toast.downloadfail":
            "\ub2e4\uc6b4\ub85c\ub4dc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "voip.video.effect.toast.nospace":
            "\uae30\uae30 \uc800\uc7a5 \uacf5\uac04\uc774 \ubd80\uc871\ud569\ub2c8\ub2e4. \uacf5\uac04\uc744 \ud655\ubcf4\ud55c \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "voip.video.effect.toast.xpccrash":
            "\uc77c\uc2dc\uc801\uc778 \uc624\ub958\ub85c \ud654\uba74 \ud6a8\uacfc\uac00 \ud574\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\n\ub2e4\uc2dc \uc124\uc815\ud574 \uc8fc\uc138\uc694.",
          "voip.video.menu.bg": "\ubc30\uacbd",
          "voip.video.menu.bg.alert.addbg":
            "\ud30c\uc77c\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\ub978 \ud30c\uc77c\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.",
          "voip.video.menu.bg.alert.addbg.button": "\ub2e4\uc2dc \uc120\ud0dd",
          "voip.video.menu.bg.alert.maxbg":
            "\ucd5c\ub300 \ub4f1\ub85d \uac00\ub2a5\ud55c \ubc30\uacbd \uac1c\uc218\ub97c \ucd08\uacfc\ud588\uc2b5\ub2c8\ub2e4. \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ubc30\uacbd\uc744 \uc0ad\uc81c\ud55c \ud6c4 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.",
          "voip.video.menu.bgsettings": "\ud654\uba74 \ud6a8\uacfc",
          "voip.video.menu.blur": "\ubc30\uacbd \ud750\ub9bc",
          "voip.video.menu.effect": "\ud398\uc774\uc2a4 \uc774\ud399\ud2b8",
          "voip.video.menu.filter": "\ud654\uba74 \ud544\ud130",
          "voip.video.popupbutton.close": "\ub2eb\uae30",
          "voip.video.popupbutton.dontshow": "\ud574\uc81c",
          "voip.video.popupbutton.opensettings":
            "\uc124\uc815\uc73c\ub85c \uc774\ub3d9",
          "voip.video.popupbutton.show": "\ud574\uc81c \uc548 \ud568",
          "voip.video.popupdesc.dontshowpreview":
            "\ud658\uacbd \uc124\uc815\uc5d0\uc11c '\ud1b5\ud654 \ucc38\uc5ec \uc804 \uc601\uc0c1 \ubbf8\ub9ac\ubcf4\uae30' \uc635\uc158\uc744 \ud574\uc81c\ud558\uba74, \ubbf8\ub9ac\ubcf4\uae30 \uc5c6\uc774 \ubc14\ub85c \uc601\uc0c1\ud1b5\ud654\uac00 \uc2dc\uc791\ub429\ub2c8\ub2e4.",
          "voip.video.popuptitle.dontshowpreview":
            "\uc601\uc0c1 \ubbf8\ub9ac\ubcf4\uae30 \uc635\uc158\uc744 \ud574\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "voip.video.preview.blur.off": "\uc124\uc815 \uc548 \ud568",
          "voip.video.preview.blur.on": "\ubc30\uacbd \ud750\ub9bc",
          "voip.video.preview.cameraoff": "\uce74\uba54\ub77c \ub044\uae30",
          "voip.video.preview.desc":
            "\uc601\uc0c1\ud1b5\ud654 \ucc38\uc5ec \uc804\uc5d0 \ub0b4 \uc601\uc0c1\uc744 \ud655\uc778\ud574 \ubcf4\uc138\uc694.",
          "voip.video.preview.join": "\ucc38\uc5ec",
          "voip.video.preview.title": "\uc601\uc0c1 \ubbf8\ub9ac\ubcf4\uae30",
          "voip.video.title.videocallwith":
            "%1\ub2d8\uacfc \uc601\uc0c1\ud1b5\ud654",
          "voip.video.tooltip.filternblur":
            "\ud544\ud130\uc640 \ubc30\uacbd \ud750\ub9bc \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud574 \ubcf4\uc138\uc694.",
          "voip.video.tooltip.startvideocall":
            "\uc601\uc0c1\ud1b5\ud654\ub97c \uc2dc\uc791\ud558\ub824\uba74 \uc5ec\uae30\ub97c \ud074\ub9ad\ud574 \uc8fc\uc138\uc694.",
          "voip.video.tooltip.videomirroring":
            "\uc601\uc0c1 \uc88c\uc6b0 \ubc18\uc804",
          "voip.video.tooltip.videomirroringoff":
            "\uc601\uc0c1 \uc88c\uc6b0 \ubc18\uc804 \ub044\uae30",
          "voip.video.tooltip.videomirroringon":
            "\uc601\uc0c1 \uc88c\uc6b0 \ubc18\uc804 \ucf1c\uae30",
          "voip.videocall.button.beautyfeature": "\ubdf0\ud2f0",
          "voip.videocall.popup.start": "\uc2dc\uc791",
          "voip.videocall.popup.turnon": "\ucf1c\uae30",
          "win10.notification.reply.guide":
            "\uc5ec\uae30\uc5d0\uc11c \ubc14\ub85c \ub2f5\uc7a5",
        };
      },
    }]);
