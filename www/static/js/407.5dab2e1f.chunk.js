!function () {
  try {
    var e = "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof self
        ? self
        : {},
      a = (new Error()).stack;
    a &&
      (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[a] = "c20cf7a8-cff3-4160-9a91-cd53d0f47bca",
        e._sentryDebugIdIdentifier =
          "sentry-dbid-c20cf7a8-cff3-4160-9a91-cd53d0f47bca");
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
    []).push([[407], {
      58407: (e, a, i) => {
        i.r(a), i.d(a, { default: () => n });
        const n = {
          "abuse.report.sent.data.notice.chat_selected":
            "\u015eikayet etti\u011finiz mesaj, ondan \xf6nce veya sonra al\u0131n\u0131p g\xf6nderilmi\u015f 9 adede kadar mesaj, \u015fikayet edilen kullan\u0131c\u0131n\u0131n bilgileri (g\xf6r\xfcnen ad\u0131, profil simgesi ve durum mesaj\u0131 dahil) ve bilgileriniz (g\xf6r\xfcnen ad\u0131n\u0131z ve profil simgeniz dahil).",
          "abuse.report.sent.data.notice.direct_chat":
            "Bu sohbette al\u0131n\u0131p g\xf6nderilen en son 10 mesaj, \u015fikayet edilen kullan\u0131c\u0131n\u0131n bilgileri (g\xf6r\xfcnen ad\u0131, profil simgesi ve durum mesaj\u0131 dahil) ve bilgileriniz (g\xf6r\xfcnen ad\u0131n\u0131z ve profil simgeniz dahil).",
          "abuse.report.sent.data.notice.direct_invitation":
            "Bu sohbette al\u0131n\u0131p g\xf6nderilen en son 10 mesaj, \u015fikayet edilen kullan\u0131c\u0131n\u0131n bilgileri (g\xf6r\xfcnen ad\u0131, profil simgesi ve durum mesaj\u0131 dahil) ve bilgileriniz (g\xf6r\xfcnen ad\u0131n\u0131z ve profil simgeniz dahil).",
          "abuse.report.sent.data.notice.friend_profile":
            "\u015eikayet edilen kullan\u0131c\u0131n\u0131n bilgileri (g\xf6r\xfcnen ad\u0131, profil simgesi ve durum mesaj\u0131 dahil) ve bilgileriniz (g\xf6r\xfcnen ad\u0131n\u0131z ve profil simgeniz dahil).",
          "abuse.report.sent.data.notice.group_chat":
            "Bu grupta al\u0131n\u0131p g\xf6nderilen en son 10 mesaj, grup bilgileri (grup ad\u0131, grup profil simgesi ve sizi gruba davet eden ki\u015finin bilgileri dahil) ve bilgileriniz (g\xf6r\xfcnen ad\u0131n\u0131z ve profil simgeniz dahil).",
          "abuse.report.sent.data.notice.group_chat_selected":
            "\u015eikayet etti\u011finiz mesaj, ondan \xf6nce veya sonra al\u0131n\u0131p g\xf6nderilmi\u015f 9 adede kadar mesaj, grup bilgileri (grup ad\u0131, grup profil simgesi ve sizi gruba davet eden ki\u015finin bilgileri dahil) ve bilgileriniz (g\xf6r\xfcnen ad\u0131n\u0131z ve profil simgeniz dahil).",
          "abuse.report.sent.data.notice.group_invitation":
            "Bu grupta al\u0131n\u0131p g\xf6nderilen en son 10 mesaj, grup bilgileri (grup ad\u0131, grup profil simgesi ve sizi gruba davet eden ki\u015finin bilgileri dahil) ve bilgileriniz (g\xf6r\xfcnen ad\u0131n\u0131z ve profil simgeniz dahil).",
          "abuse.report.sent.data.notice.note_comment":
            "\u015eikayet edilen yorum, yorumun bulundu\u011fu not, \u015fikayet edilen kullan\u0131c\u0131n\u0131n bilgileri (g\xf6r\xfcnen ad\u0131 dahil) ve bilgileriniz (g\xf6r\xfcnen ad\u0131n\u0131z dahil).",
          "abuse.report.sent.data.notice.note_post":
            "\u015eikayet edilen not, bu notla ilgili yorumlar, \u015fikayet edilen kullan\u0131c\u0131n\u0131n bilgileri (g\xf6r\xfcnen ad\u0131 dahil) ve bilgileriniz (g\xf6r\xfcnen ad\u0131n\u0131z dahil).",
          "abuse.report.sent.data.notice.room_chat":
            "Bu sohbette al\u0131n\u0131p g\xf6nderilen en son 10 mesaj, bilgileriniz (g\xf6r\xfcnen ad\u0131n\u0131z ve profil simgeniz dahil) ve sohbet bilgileri (sizi sohbete davet eden ki\u015finin bilgileri dahil).",
          "abuse.report.sent.data.notice.room_chat_selected":
            "\u015eikayet etti\u011finiz mesaj, ondan \xf6nce veya sonra al\u0131n\u0131p g\xf6nderilmi\u015f 9 adede kadar mesaj, bilgileriniz (g\xf6r\xfcnen ad\u0131n\u0131z ve profil simgeniz dahil) ve sohbet bilgileri (sizi sohbete davet eden ki\u015finin bilgileri dahil).",
          "abuse.report.sent.data.notice.room_invitation":
            "Bu sohbette al\u0131n\u0131p g\xf6nderilen en son 10 mesaj, bilgileriniz (g\xf6r\xfcnen ad\u0131n\u0131z ve profil simgeniz dahil) ve sohbet bilgileri (sizi sohbete davet eden ki\u015finin bilgileri dahil).",
          "abuse.report.sent.data.notice.square.chat.selected":
            "\u015eikayet edilen OpenChat ile ilgili bilgilerin (\xf6r. sohbetin ad\u0131, kapak foto\u011fraf\u0131, \xfcye say\u0131s\u0131 ve OpenChat tan\u0131mlay\u0131c\u0131s\u0131) yan\u0131 s\u0131ra sohbette g\xf6nderilen son 100 mesaj, bilgileriniz ve sohbet y\xf6neticisiyle ilgili ayr\u0131nt\u0131lar (\xf6r. sohbette kullan\u0131lan takma adlar ve kullan\u0131c\u0131 tan\u0131mlay\u0131c\u0131lar\u0131).",
          "abuse.report.sent.data.notice.square.member.selected":
            "\u015eikayet edilen OpenChat ile ilgili bilgilerin (\xf6r. sohbetin ad\u0131, kapak foto\u011fraf\u0131 ve \xfcye say\u0131s\u0131) yan\u0131 s\u0131ra sohbette g\xf6nderilen son 100 mesaj, bilgileriniz ve \u015fikayet edilen kullan\u0131c\u0131yla ilgili ayr\u0131nt\u0131lar (\xf6r. \u015fikayet edilen kullan\u0131c\u0131n\u0131n profil simgesi, sohbette kullan\u0131lan takma adlar ve kullan\u0131c\u0131 tan\u0131mlay\u0131c\u0131lar\u0131).",
          "abuse.report.sent.data.notice.square.message.selected":
            "\u015eikayet edilen sohbet odas\u0131yla ilgili bilgiler (\xf6r. sohbet tan\u0131mlay\u0131c\u0131s\u0131) ve \u015fikayet edilen OpenChat ile ilgili bilgilerin (\xf6r. sohbetin ad\u0131, kapak foto\u011fraf\u0131, \xfcye say\u0131s\u0131 ve OpenChat tan\u0131mlay\u0131c\u0131s\u0131) yan\u0131 s\u0131ra sohbette \u015fikayet edilen mesaj \xfczerinden g\xf6nderilen son 10 mesaj, bilgileriniz ve \u015fikayet edilen kullan\u0131c\u0131yla ilgili ayr\u0131nt\u0131lar (\xf6r. \u015fikayet edilen kullan\u0131c\u0131n\u0131n profil simgesi, sohbette kullan\u0131lan takma adlar ve kullan\u0131c\u0131 tan\u0131mlay\u0131c\u0131lar\u0131).",
          "abuse.report.sent.data.notice.square.note.selected":
            "\u015eikayet edilen notun i\xe7eri\u011fi (\xf6r. metin, g\xf6rseller, videolar, emoji ve notun g\xf6nderi tan\u0131mlay\u0131c\u0131s\u0131), OpenChat ile ilgili bilgiler (\xf6r. sohbetin ad\u0131, kapak foto\u011fraf\u0131, \xfcye say\u0131s\u0131 ve OpenChat tan\u0131mlay\u0131c\u0131s\u0131), bilgileriniz ve \u015fikayet edilen kullan\u0131c\u0131yla ilgili ayr\u0131nt\u0131lar (\u015fikayet edilen kullan\u0131c\u0131n\u0131n profil simgesi, \xfcyelik durumu, sohbette kullan\u0131lan takma adlar ve kullan\u0131c\u0131 tan\u0131mlay\u0131c\u0131lar\u0131 dahil).",
          "abuse.report.sent.data.notice.square.notecomment.selected":
            "\u015eikayet edilen yorumun i\xe7eri\u011fi (\xf6r. metin, g\xf6rseller, emoji ve yorum tan\u0131mlay\u0131c\u0131s\u0131), OpenChat ile ilgili bilgiler (\xf6r. OpenChat'in ad\u0131, kapak foto\u011fraf\u0131, \xfcye say\u0131s\u0131 ve OpenChat tan\u0131mlay\u0131c\u0131s\u0131), bilgileriniz ve \u015fikayet edilen kullan\u0131c\u0131yla ilgili ayr\u0131nt\u0131lar (\u015fikayet edilen kullan\u0131c\u0131n\u0131n profil simgesi, \xfcyelik durumu, sohbette kullan\u0131lan takma adlar ve kullan\u0131c\u0131 tan\u0131mlay\u0131c\u0131lar\u0131 dahil).",
          "abuse.report.sent.data.notice.square.setting.selected":
            "\u015eikayet edilen sohbet odas\u0131yla ilgili bilgilerin (\xf6r. sohbetin ad\u0131, kapak foto\u011fraf\u0131, \xfcye say\u0131s\u0131 ve sohbet tan\u0131mlay\u0131c\u0131s\u0131) yan\u0131 s\u0131ra sohbette g\xf6nderilen son 50 mesaj, \u015fikayet edilen OpenChat ile ilgili bilgiler (\xf6r. OpenChat tan\u0131mlay\u0131c\u0131s\u0131), bilgileriniz ve sohbet y\xf6neticisiyle ilgili ayr\u0131nt\u0131lar (\xf6r. sohbette kullan\u0131lan takma adlar ve kullan\u0131c\u0131 tan\u0131mlay\u0131c\u0131lar\u0131).",
          "abuse.report.sent.data.notice.template":
            "\u015eikayette bulundu\u011funuzda a\u015fa\u011f\u0131da g\xf6sterilen bilgileri LY Corporation'a g\xf6nderirsiniz. Bu bilgileri, \u015fikayetin i\xe7eri\u011fini do\u011frulamak, gerekli i\u015flemleri yapmak ve gelecekte hizmetlerimizin k\xf6t\xfcye kullan\u0131lmas\u0131n\u0131 \xf6nlemek i\xe7in kullan\u0131r\u0131z. Bu bilgileri k\xf6t\xfcye kullan\u0131m\u0131 \xf6nleme ara\xe7lar\u0131 geli\u015ftirmek i\xe7in kullanmak da bu kapsama dahildir.\nBu ama\xe7la, bu bilgileri mutlaka almas\u0131 gereken, grubumuz i\xe7indeki \u015firketlerle ve \xfc\xe7\xfcnc\xfc taraf y\xfcklenicilerle payla\u015fabiliriz.\n\n\u015eikayetinizle birlikte g\xf6nderilecek bilgiler:\n%1",
          "note.reportnote.desc.reportnotefromcomment":
            "nottaki \u015fikayet edilen yorumla ilgili bilgiler (\xf6rne\u011fin yorumun tan\u0131mlay\u0131c\u0131s\u0131, metin, g\xf6rseller ve emojiler gibi), \u015fikayet edilen kullan\u0131c\u0131n\u0131n bilgileri (\xf6rne\u011fin kullan\u0131c\u0131 tan\u0131mlay\u0131c\u0131lar\u0131 ve g\xf6r\xfcnen adlar\u0131 gibi), sohbet bilgileri (\xf6rne\u011fin sohbetin tan\u0131mlay\u0131c\u0131s\u0131 gibi) ve bilgileriniz (\xf6rne\u011fin kullan\u0131c\u0131 tan\u0131mlay\u0131c\u0131n\u0131z ve g\xf6r\xfcnen ad\u0131n\u0131z gibi).",
          "note.reportnote.desc.reportnotefrommenu":
            "\u015fikayet edilen notla ilgili bilgiler (\xf6rne\u011fin notun tan\u0131mlay\u0131c\u0131s\u0131, metin, g\xf6rseller, emojiler ve videolar gibi), \u015fikayet edilen kullan\u0131c\u0131n\u0131n bilgileri (\xf6rne\u011fin kullan\u0131c\u0131 tan\u0131mlay\u0131c\u0131lar\u0131 ve g\xf6r\xfcnen adlar\u0131 gibi), sohbet bilgileri (\xf6rne\u011fin sohbetin tan\u0131mlay\u0131c\u0131s\u0131 gibi) ve bilgileriniz (\xf6rne\u011fin kullan\u0131c\u0131 tan\u0131mlay\u0131c\u0131n\u0131z ve g\xf6r\xfcnen ad\u0131n\u0131z gibi).",
          "openchat.abusereport.desc.threadmessage":
            "\u015fikayet edilen mesaj ve yaz\u0131\u015fmada ondan \xf6nceki 10 mesaj, \u015fikayet edilen kullan\u0131c\u0131n\u0131n bilgileri (\xf6rne\u011fin kullan\u0131c\u0131n\u0131n takma ad\u0131 ve kullan\u0131c\u0131n\u0131n profil simgesi gibi), OpenChat ile ilgili bilgiler (\xf6rne\u011fin OpenChat'in tan\u0131mlay\u0131c\u0131s\u0131, OpenChat'in ad\u0131, kapak foto\u011fraf\u0131 ve \xfcye say\u0131s\u0131 gibi), sohbet bilgileri (\xf6rne\u011fin sohbetin tan\u0131mlay\u0131c\u0131s\u0131 gibi), yaz\u0131\u015fma bilgileri (\xf6rne\u011fin yaz\u0131\u015fman\u0131n tan\u0131mlay\u0131c\u0131s\u0131 gibi) ve bilgileriniz (\xf6rne\u011fin kullan\u0131c\u0131 tan\u0131mlay\u0131c\u0131n\u0131z ve takma ad\u0131n\u0131z gibi).",
          "openchat.abusereport.desc.threaduser":
            "\u015fikayet edilen kullan\u0131c\u0131 taraf\u0131ndan yaz\u0131\u015fmada g\xf6nderilen son 50 mesaj, \u015fikayet edilen kullan\u0131c\u0131n\u0131n bilgileri (\xf6rne\u011fin kullan\u0131c\u0131 tan\u0131mlay\u0131c\u0131lar\u0131, kullan\u0131c\u0131n\u0131n takma ad\u0131 ve kullan\u0131c\u0131n\u0131n profil simgesi gibi), OpenChat ile ilgili bilgiler (\xf6rne\u011fin OpenChat'in ad\u0131, kapak foto\u011fraf\u0131 ve \xfcye say\u0131s\u0131 gibi), sohbet bilgileri (\xf6rne\u011fin sohbetin tan\u0131mlay\u0131c\u0131s\u0131 gibi), yaz\u0131\u015fma bilgileri (\xf6rne\u011fin yaz\u0131\u015fman\u0131n tan\u0131mlay\u0131c\u0131s\u0131 ve yaz\u0131\u015fmada g\xf6nderilen son 100 mesaj gibi) ve bilgileriniz (\xf6rne\u011fin kullan\u0131c\u0131 tan\u0131mlay\u0131c\u0131n\u0131z ve takma ad\u0131n\u0131z gibi).",
          AUTHORIZE_MSG_CLOSING_ALERT: "",
          "Common.warning.low.hard.disk.space":
            "Yeterli disk alan\u0131 yok.\nL\xfctfen tekrar denemeden \xf6nce\nsabit s\xfcr\xfcc\xfcn\xfczde en az 30 MB alan bo\u015falt\u0131n.",
          ImageViewerLabelNoImage:
            "Bu sohbette payla\u015f\u0131lan foto\u011fraf yok.",
          "Keep.info.from.keepmemo": "Keep Memo",
          LoginErrorNaverLoginForbbide:
            "L\xfctfen ge\xe7erli bir e-posta adresi girin.",
          Poll_Message_btn: "Ayr\u0131nt\u0131lar\u0131 g\xf6r\xfcnt\xfcle",
          Poll_Title: "Anket",
          "Setting.Alert.Remove.History":
            "Sohbet ge\xe7mi\u015finizi silerseniz geri getirmeniz m\xfcmk\xfcn olmayacakt\u0131r.\nSilmek istiyor musunuz? ",
          "Setting.Basic.ScaleRatio.Apply.Alert":
            "En-boy oran\u0131n\u0131 de\u011fi\u015ftirmek i\xe7in l\xfctfen LINE'\u0131 yeniden ba\u015flat\u0131n.\n\u015eimdi yeniden ba\u015flatmak istiyor musunuz?",
          "Setting.label.alarm.sound.1": "Varsay\u0131lan Tonu",
          "Setting.label.alarm.sound.2": "Birlikte LINE",
          "Setting.label.alarm.sound.3": "Gizli LINE",
          "Setting.label.alarm.sound.4": "\xc7an",
          "Setting.label.alarm.sound.5": "Nudge",
          "Setting.label.alarm.sound.6": "Ksilofon",
          "Setting.label.alarm.sound.7": "Isl\u0131k",
          "Setting.label.alarm.sound.8": "Kap\u0131 Zili",
          "Setting.label.alarm.sound.9": "Kristal",
          "access.chat.search.calendar": "Takvim",
          "access.openchat.chatmenu.button.addyourthreads":
            "Favori yaz\u0131\u015fmalara ekle",
          "access.openchat.chatmenu.button.removeyourthreads":
            "Favori yaz\u0131\u015fmalardan kald\u0131r",
          "access.openchat.chatmenu.button.yourthreads":
            "Favori yaz\u0131\u015fmalar",
          "access.square.chat.button.more":
            "Reklam se\xe7ene\u011fi men\xfcs\xfcn\xfc a\xe7",
          "ad.alert.popup.cantplayduringcall":
            "Arama s\u0131ras\u0131nda oynat\u0131lamaz.",
          "ad.desc.playinginviewer":
            "G\xf6r\xfcnt\xfcleyicide oynat\u0131l\u0131yor",
          "ad.menu.admute.hideContent": "Bu banner'\u0131 gizle",
          "ad.menu.admute.hideadvertiser":
            "Bu reklamc\u0131n\u0131n reklamlar\u0131n\u0131 gizle",
          "ad.menu.admute.hidethisad": "Bu reklam\u0131 gizle",
          "ad.menu.videoEnlarge":
            "Geni\u015flet ve g\xf6r\xfcnt\xfcleyicide oynat",
          "addFriends.error.crossregion":
            "Bu kullan\u0131c\u0131y\u0131 arkada\u015f olarak eklemek i\xe7in l\xfctfen kullan\u0131c\u0131n\u0131n QR kodunu taray\u0131n.",
          "addfriends.label.norecommendation.description":
            "\u015eu anda sizin i\xe7in bir \xf6nerimiz yok.",
          "addfriends.menu.chatandgroup": "Grup olu\u015ftur",
          "addfriends.search.captcha.fail":
            "Girdi\u011finiz say\u0131 g\xf6r\xfcnt\xfcyle e\u015fle\u015fmiyor. L\xfctfen arkada\u015f eklemeyi yeniden deneyin.\n",
          "album.add.photo.drag":
            "Foto\u011fraflar\u0131 s\xfcr\xfckleyip buraya b\u0131rak\u0131n.",
          "album.addphotos.desc.limitexceeded":
            "Her alb\xfcme en fazla 1.000 \xf6\u011fe ekleyebilirsiniz.",
          "album.addpopup.desc.e2eeabletoretry":
            "\xd6\u011fe eklenemiyor. L\xfctfen tekrar deneyin.",
          "album.addpopup.desc.retry":
            "Baz\u0131 \xf6\u011feler eklenemedi. L\xfctfen tekrar deneyin.",
          "album.addpopup.desc.unabletoretry":
            "Alb\xfcmlerde desteklenmedikleri i\xe7in baz\u0131 \xf6\u011feler eklenemiyor.",
          "album.createalbum.tooltip.originalresolution.jp":
            "Orijinal kalitede foto\u011fraf eklemek i\xe7in bu se\xe7ene\u011fi i\u015faretleyin.",
          "album.deletepopup.desc.deletealbum":
            "Alb\xfcmdeki t\xfcm foto\u011fraflar kal\u0131c\u0131 olarak silinecek. Alb\xfcm silinsin mi?",
          "album.label.download": "\u0130ndir",
          "album.main.desc.albumvideos.other": "%n video",
          "album.main.toast.encodingerror":
            "Video kodlama hatas\u0131 nedeniyle oynat\u0131lam\u0131yor.",
          "album.main.toast.encodinginprogress":
            "Kodlan\u0131yor. Daha sonra tekrar deneyin.",
          "album.main.tooltip.paidplan":
            "Videolar yaln\u0131zca \xfccretli plan ile eklenebilir ve plan iptal edilirse silinir.",
          "album.mainpopup.button.no": "Hay\u0131r",
          "album.mainpopup.button.yes": "Evet",
          "album.mainpopup.desc.deletedvideo": "Bu video silindi.",
          "album.mainpopup.desc.stopadding":
            "\xd6\u011fe ekleme i\u015flemi durdurulsun mu?",
          "album.msg.cancel.upload":
            "Bu resimleri eklemekten vazge\xe7mek istiyor musun?",
          "album.picker.toast.20videomax.jp":
            "Bir defada en fazla 20 video eklenebilir.",
          "album.picker.toast.5minutesvideomax.jp":
            "En fazla 5 dakikal\u0131k videolar eklenebilir.",
          "album.picker.toast.max300":
            "Bir defada en fazla 300 \xf6\u011fe eklenebilir.",
          "album.picker.toast.originalresolution.jp":
            "Se\xe7ilen foto\u011fraflar orijinal kalitede eklenecek.",
          "album.picker.toast.over20mb.jp":
            "Videolar, b\xfcy\xfck veya desteklenmeyen bi\xe7imde olan foto\u011fraflar ve LINE'da d\xfczenlenmi\u015f foto\u011fraflar standart kalitede eklenecek.",
          "album.picker.toast.somestandard.jp":
            "Se\xe7ilen foto\u011fraflar orijinal kalitesinde eklenecek. Videolar, b\xfcy\xfck veya desteklenmeyen bi\xe7imde olan foto\u011fraflar ve LINE'da d\xfczenlenmi\u015f foto\u011fraflar standart kalitede eklenecek.",
          "album.picker.toast.videomax.jp.other":
            "Bu alb\xfcme en fazla %n video daha ekleyebilirsiniz.",
          "album.share.toast.addvideomax.jp":
            "Alb\xfcme en fazla 100 video eklenebilir.",
          "album.updatepopup.button.dontshow": "Bir daha g\xf6sterme",
          "album.updatepopup.button.later": "Daha sonra",
          "album.updatepopup.button.updatenow": "\u015eimdi g\xfcncelle",
          "album.updatepopup.desc.notavailable":
            "Baz\u0131 alb\xfcm i\xe7erikleri mevcut s\xfcr\xfcm\xfcn\xfczde g\xf6r\xfcnmeyebilir. LINE'\u0131 en son s\xfcr\xfcme g\xfcncelleyin.",
          "album.viewer.button.additems": "\xd6\u011fe ekle",
          "alert.album.blocked.user":
            "Alb\xfcmler \xf6zelli\u011fini engelledi\u011finiz ki\u015filerle kullanamazs\u0131n\u0131z.",
          "alert.note.blocked.user":
            "Notlar \xf6zelli\u011fini engelledi\u011finiz ki\u015filerle kullanamazs\u0131n\u0131z.",
          "announce.donotshowagain": "Tekrar g\xf6sterme",
          "announce.donotshowagain.mouseover": "Tekrar g\xf6sterme",
          "announce.error": "Bu duyuruya ait mesaj bulunamad\u0131.",
          "announce.minimize": "K\xfc\xe7\xfclt",
          "announce.unannounce": "Duyuruyu Kald\u0131r",
          "announcement.message.album": "Alb\xfcm: %1",
          "announcement.message.annoucement": "Duyur",
          "announcement.message.error.description":
            "Bu duyuruya ait mesaj bulunamad\u0131.",
          "announcement.message.note.no.text":
            "%1 tarihinde payla\u015f\u0131lan not",
          "announcement.message.note.text": "Not: %1",
          "announcement.system.message":
            "<![CDATA[%1 bir <u>duyuru</u> yapt\u0131.]]>",
          "app.title": "LINE G\xfcncelle",
          "att.prepopup.description":
            "B\xf6ylece LINE i\xe7eriklerini ve reklamlar\u0131 ilgi alanlar\u0131n\u0131za g\xf6re \xf6zelle\u015ftirmemize izin vermi\u015f olursunuz.",
          "authorize.content.desc1":
            "Bir g\xfcvenlik \xf6nlemi olarak bir bilgisayarda ilk kez oturum a\xe7arken hesab\u0131n\u0131z\u0131 do\u011frulaman\u0131z gerekir.",
          "authorize.content.desc2":
            "\u015eu kodu ak\u0131ll\u0131 telefonunuza girin.\n",
          "authorize.e2ee.about.letterSealing": "Letter Sealing nedir?",
          "authorize.e2ee.app.update":
            "LINE art\u0131k geli\u015fmi\u015f g\xfcvenlik sunuyor.\nL\xfctfen en son LINE s\xfcr\xfcm\xfcne g\xfcncelleyin.",
          "authorize.e2ee.desc1":
            "Letter Sealing \xf6zelli\u011fini kullanmak i\xe7in hesab\u0131n\u0131z\u0131 do\u011frulaman\u0131z gerekir.\n",
          "authorize.e2ee.desc2":
            "\u015eu kodu ak\u0131ll\u0131 telefonunuza girin.\n",
          "authorize.e2ee.primary.cancel":
            "Do\u011frulama, mobil cihaz\u0131n\u0131zda iptal edildi. L\xfctfen tekrar deneyin.",
          "authorize.msg.closing.alert":
            "Bu pencereyi kapat\u0131rsan\u0131z giri\u015f yapamayacaks\u0131n\u0131z. Yine de devam edilsin mi?",
          "authorize.msg.timeout.alert":
            "Giri\u015f s\xfcresi doldu. L\xfctfen tekrar deneyin.",
          "authorize.msg.useage.alert":
            'Ak\u0131ll\u0131 telefonunuzda Ayarlar > Hesap\'a gidin ve giri\u015f yapmak i\xe7in "Giri\u015fe \u0130zin Ver" se\xe7ene\u011fini etkinle\u015ftirin.',
          "authorize.remained.time": "Kalan s\xfcre",
          "authorize.window.title": "Bilgisayar Do\u011frulama",
          "autoSuggest.add.language": "Dil Ekle",
          "autoSuggest.enable": "Otomatik \xd6neriyi Etkinle\u015ftirme",
          "autoSuggest.enabled.language": "Dil",
          "autoSuggest.msg.desc":
            "Yazd\u0131k\xe7a otomatik olarak sticker veya emoji \xf6nerileri al\u0131n.",
          "autoSuggest.msg.desc.downloadFailed":
            "\u0130ndirme ba\u015far\u0131s\u0131z.\nL\xfctfen tekrar deneyin.",
          "autoSuggest.msg.download.all.emoji":
            "T\xfcm emoji'ler indirilsin mi?",
          "autoSuggest.msg.download.all.sticker":
            "Sticker'lar\u0131 \xf6nizlemek i\xe7in indirmelisiniz.\nT\xfcm sticker'lar\u0131n\u0131z indirilsin mi?\n",
          "autoSuggest.title": "Sticker \xd6nerileri",
          "buddy.alert.common.failed.add.contact": "Arkada\u015f eklenemedi.",
          "buddy.alert.not.allowed.add.contact":
            "\xdczg\xfcn\xfcz, bu hesaba daha fazla arkada\u015f kabul edemiyor.",
          "buddy.btn.addBuddy": "Arkada\u015f ekle",
          "buddy.btn.blockBuddy": "Engelle",
          "buddy.btn.chat": "Sohbet",
          "buddy.btn.home": "Home",
          "buddy.btn.setting.profile": "Profil D\xfczenle",
          "buddy.btn.unblockBuddy": "Engeli Kald\u0131r",
          "buddy.btn.voip": "Sesli arama",
          "buddy.label.edit.title":
            "Arkada\u015f\u0131n\u0131n \u0130smini De\u011fi\u015ftir",
          "buddy.label.info.title": "Profil",
          "buddylist.chooseFriend.empty.btn": "Sohbet",
          "buddylist.chooseFriend.empty.desc":
            "Yeni bir konu\u015fma ba\u015flat\u0131n!",
          "buddylist.chooseGroup.emty.desc":
            "%1 grubunda sohbet ge\xe7mi\u015finiz yok.\nKonu\u015fmaya ba\u015flay\u0131n!\n",
          "buddylist.chooseMe.empty.desc":
            "Yeni bir konu\u015fma ba\u015flat\u0131n!",
          "buddylist.plusMenu.chat": "Sohbet",
          "budy.label.unregisterUser":
            "Bu kullan\u0131c\u0131 arkada\u015f olarak eklenmedi. ",
          "call.callsettingspreview.desc.nocamera":
            "Kat\u0131lmadan \xf6nce arama ayarlar\u0131n\u0131z\u0131 kontrol edin. Kameran\u0131z alg\u0131lanamad\u0131\u011f\u0131 i\xe7in g\xf6r\xfcnt\xfcn\xfcz g\xf6r\xfcnmeyecek.",
          "call.callsettingspreview.desc.nocameradetected":
            "Kameran\u0131z alg\u0131lanamad\u0131.",
          "call.callsettingspreview.desc.nomic":
            "Kat\u0131lmadan \xf6nce arama ayarlar\u0131n\u0131z\u0131 kontrol edin. Mikrofonunuz alg\u0131lanamad\u0131\u011f\u0131 i\xe7in sesiniz duyulmayacak.",
          "call.callsettingspreview.desc.nomicdetected":
            "Mikrofonunuz alg\u0131lanamad\u0131.",
          "call.callsettingspreview.desc.nomicorcamera":
            "Kat\u0131lmadan \xf6nce arama ayarlar\u0131n\u0131z\u0131 kontrol edin. Kameran\u0131z ve mikrofonunuz alg\u0131lanamad\u0131\u011f\u0131 i\xe7in g\xf6r\xfcnt\xfcn\xfcz g\xf6r\xfcnmeyecek ve sesiniz duyulmayacak.",
          "call.callsettingspreview.desc.nomicorcameradetected":
            "Kameran\u0131z ve mikrofonunuz alg\u0131lanamad\u0131.",
          "call.cameraoff.friend":
            "Arkada\u015f\u0131n\u0131z\u0131n kameras\u0131 kapal\u0131.",
          "call.cameraoff.me": "Kameran\u0131z kapal\u0131.",
          "call.chat.confirm.popup.start":
            "Arama ba\u015flat\u0131ls\u0131n m\u0131?",
          "call.chat.confirm.popup.start.btn.video":
            "G\xf6r\xfcnt\xfcl\xfc aramay\u0131 ba\u015flat",
          "call.chat.confirm.popup.start.btn.voice":
            "Sesli aramay\u0131 ba\u015flat",
          "call.chatscreen.popup.alreadyinacall":
            "Zaten bir aramadas\u0131n\u0131z.",
          "call.doodling.popup.viewerupdaterequired":
            "Bu \xf6zelli\u011fi birlikte kullanabilmeniz i\xe7in \xf6ncelikle kar\u015f\u0131n\u0131zdaki ki\u015finin LINE uygulamas\u0131n\u0131 en son s\xfcr\xfcme g\xfcncellemesi gerekir.",
          "call.doodling.toast.doodlepaused":
            "Ekran payla\u015f\u0131m\u0131 duraklat\u0131ld\u0131\u011f\u0131nda \xe7izim \xf6zelli\u011fi kullan\u0131lamaz.",
          "call.doodling.toast.noiosdoodle":
            "iOS'te payla\u015f\u0131lan ekranlarda \xe7izim \xf6zelli\u011fi kullan\u0131lamaz.",
          "call.doodling.toast.sharepaused":
            "Ekran payla\u015f\u0131m\u0131 duraklat\u0131ld\u0131.",
          "call.doodling.toast.sharerupdaterequired":
            "T\xfcm kat\u0131l\u0131mc\u0131lar\u0131n bu \xf6zelli\u011fi kullanabilmesi i\xe7in \xf6ncelikle, ekran\u0131n\u0131 payla\u015fan ki\u015finin LINE uygulamas\u0131n\u0131 en son s\xfcr\xfcme g\xfcncellemesi gerekir.",
          "call.effects.menu.stickers": "Sticker'lar",
          "call.effects.popup.graphiccardproblem":
            "Grafik kart\u0131n\u0131z LINE g\xf6r\xfcnt\xfcl\xfc arama \xf6zelli\u011fi i\xe7in minimum gereksinimleri kar\u015f\u0131lamad\u0131\u011f\u0131ndan arama s\u0131ras\u0131nda sorunlar ya\u015fayabilirsiniz.\nYine de devam edilsin mi?",
          "call.effects.popup.removebgeffect":
            'Ge\xe7erli arka plan\u0131n\u0131z\u0131 silerseniz g\xf6r\xfcnt\xfcn\xfcz "Arka plan yok" ayar\u0131na geri d\xf6nd\xfcr\xfclecek. Yine de silinsin mi?',
          "call.effects.toast.stickersonetime":
            "Baz\u0131 sticker'lar aramalar s\u0131ras\u0131nda desteklenmiyor olabilir.",
          "call.error.popupdesc.featureunavailableondevice":
            "Aramadaki bir ki\u015fi, cihaz\u0131n\u0131zda desteklenmeyen bir \xf6zellik kullan\u0131yor. Bu \xf6zelli\u011fi kullanabilmek i\xe7in aramaya LINE'\u0131n mobil s\xfcr\xfcm\xfcn\xfc kullanarak kat\u0131l\u0131n.",
          "call.error.popupdesc.groupcallunavailable":
            "Grup aramas\u0131 \u015fu anda kullan\u0131lam\u0131yor. \xd6zelli\u011fi yeniden kullan\u0131labilir duruma getirmek i\xe7in \xe7al\u0131\u015f\u0131yoruz.",
          "call.error.popupdesc.livetalkunavailable":
            "Canl\u0131 konu\u015fma \u015fu anda kullan\u0131lam\u0131yor. \xd6zelli\u011fi yeniden kullan\u0131labilir duruma getirmek i\xe7in \xe7al\u0131\u015f\u0131yoruz.",
          "call.error.popupdesc.oacallunavailable":
            "\u015eu anda arama yap\u0131lam\u0131yor. \xd6zelli\u011fi yeniden kullan\u0131labilir duruma getirmek i\xe7in \xe7al\u0131\u015f\u0131yoruz.",
          "call.error.popupdesc.outdatedapp":
            "Aramadaki bir ki\u015fi, kulland\u0131\u011f\u0131n\u0131z LINE s\xfcr\xfcm\xfcnde desteklenmeyen bir \xf6zellik kullan\u0131yor. Bu \xf6zelli\u011fi kullanabilmek i\xe7in LINE'\u0131 en yeni s\xfcr\xfcm\xfcne g\xfcncelleyin.",
          "call.error.popupdesc.videocallunavailable":
            "G\xf6r\xfcnt\xfcl\xfc arama \u015fu anda kullan\u0131lam\u0131yor. L\xfctfen sesli arama yap\u0131n.",
          "call.error.tooltip.audionosrc":
            "L\xfctfen mikrofonunuzun d\xfczg\xfcn \xe7al\u0131\u015f\u0131p \xe7al\u0131\u015fmad\u0131\u011f\u0131n\u0131 kontrol edin.",
          "call.error.unsupporteddevice":
            "Bu cihazda LINE aramalar\u0131 desteklenmiyor.",
          "call.groupcall.leavebutton": "Aramadan ayr\u0131l",
          "call.participants.desc.noresults": "Sonu\xe7 bulunamad\u0131.",
          "call.screen.toast.updaterequired":
            "Arkada\u015f\u0131n\u0131z, LINE'\u0131n daha eski bir s\xfcr\xfcm\xfcn\xfc kulland\u0131\u011f\u0131 i\xe7in sticker'lar\u0131 g\xf6remiyor.",
          "call.screenshare.taskbar.screenshare":
            "Payla\u015fmak i\xe7in bir ekran se\xe7in",
          "call.screenshare.taskbar.ytsearch": "YouTube videosu aray\u0131n",
          "call.screenshare.toast.shareerror":
            "%1 zaten ekran\u0131 payla\u015fan bir \xf6zelli\u011fi kullan\u0131yor.",
          "call.screenshare.toast.unsupportedos":
            "Payla\u015f\u0131lan ekran\u0131 g\xf6rebilmek i\xe7in i\u015fletim sisteminizi Windows 10'a g\xfcncelleyin veya LINE'\u0131n mobil s\xfcr\xfcm\xfcn\xfc kullan\u0131n.",
          "call.screenshare.youtube.popup.startvideo":
            "Ekran\u0131n\u0131z arama kat\u0131l\u0131mc\u0131lar\u0131yla payla\u015f\u0131ls\u0131n m\u0131?",
          "call.sharedcontent.desc.newdatatype":
            "%1 kulland\u0131\u011f\u0131n\u0131z LINE s\xfcr\xfcm\xfcnde desteklenmeyen i\xe7erikler g\xf6stermeye ba\u015flad\u0131. L\xfctfen LINE uygulaman\u0131z\u0131 en son s\xfcr\xfcme g\xfcncelleyin.",
          "call.toast.cpuheavyload":
            "Bilgisayar\u0131n\u0131z a\u011f\u0131r y\xfckle \xe7al\u0131\u015f\u0131yor; bu durum arama kalitesini etkileyebilir. Di\u011fer uygulamalar\u0131 kapatmay\u0131 deneyin.",
          "call.toast.handsfreebt.mic":
            '"%1" adl\u0131 mikrofona ge\xe7ildi. L\xfctfen hoparl\xf6r\xfcn\xfcz\xfc de ayn\u0131 cihaz olarak ayarlay\u0131n.',
          "call.toast.handsfreebt.speaker":
            '"%1" adl\u0131 hoparl\xf6re ge\xe7ildi. L\xfctfen mikrofonunuzu da ayn\u0131 cihaz olarak ayarlay\u0131n.',
          "call.video.filter.clear": "Clear",
          "call.video.filter.original": "Original",
          "call.viewmode.desc.focusview": "Odak g\xf6r\xfcn\xfcm\xfc",
          "call.viewmode.desc.focusviewcenter":
            "Odak g\xf6r\xfcn\xfcm\xfc (orta)",
          "call.viewmode.desc.focusviewleft": "Odak g\xf6r\xfcn\xfcm\xfc (sol)",
          "call.viewmode.desc.focusviewright":
            "Odak g\xf6r\xfcn\xfcm\xfc (sa\u011f)",
          "call.viewmode.desc.gridview": "Izgara g\xf6r\xfcn\xfcm\xfc",
          "call.viewmode.desc.separateview":
            "K\xfc\xe7\xfck resimleri ay\u0131r",
          "call.watchtogethermenu.desc.100kviewsth": "%1",
          "call.watchtogethermenu.desc.100kwatchingth": "%1",
          "call.watchtogethermenu.desc.10kviewsth": "%1",
          "call.watchtogethermenu.desc.10kwatchingth": "%1",
          "call.watchtogethermenu.desc.1bpeoplewatching": "%1Mr izliyor",
          "call.watchtogethermenu.desc.1bviews": "%1Mr g\xf6r\xfcnt\xfcleme",
          "call.watchtogethermenu.desc.1eokpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1eokviews": "%1",
          "call.watchtogethermenu.desc.1kpeoplewatching": "%1B izliyor",
          "call.watchtogethermenu.desc.1kviews": "%1B g\xf6r\xfcnt\xfcleme",
          "call.watchtogethermenu.desc.1kviewsth": "%1",
          "call.watchtogethermenu.desc.1kwatchingth": "%1",
          "call.watchtogethermenu.desc.1manpeoplewatching": "%1",
          "call.watchtogethermenu.desc.1manviews": "%1",
          "call.watchtogethermenu.desc.1mpeoplewatching": "%1Mn izliyor",
          "call.watchtogethermenu.desc.1mviews": "%1Mn g\xf6r\xfcnt\xfcleme",
          "call.watchtogethermenu.desc.1mviewsth": "%1",
          "call.watchtogethermenu.desc.1mwatchingth": "%1",
          "call.watchtogethermenu.desc.daysago.other": "%n g\xfcn \xf6nce",
          "call.watchtogethermenu.desc.hoursago.other": "%n saat \xf6nce",
          "call.watchtogethermenu.desc.justnow": "\u015eimdi",
          "call.watchtogethermenu.desc.lessthan1kviewsth": "%1",
          "call.watchtogethermenu.desc.lessthan1kwatchingth": "%1",
          "call.watchtogethermenu.desc.minutesago.other": "%n dakika \xf6nce",
          "call.watchtogethermenu.desc.monthsago.other": "%n ay \xf6nce",
          "call.watchtogethermenu.desc.peoplewatchingen": "%1 izliyor",
          "call.watchtogethermenu.desc.userswatchinglivevideo": "%1",
          "call.watchtogethermenu.desc.userswatchingvideo": "%1",
          "call.watchtogethermenu.desc.userswatchingvideoen.other":
            "%n g\xf6r\xfcnt\xfcleme",
          "call.watchtogethermenu.desc.yearsago.other": "%n y\u0131l \xf6nce",
          "call.youtube.desc.headphones":
            "L\xfctfen yank\u0131y\u0131 engellemek i\xe7in kulakl\u0131k kullan\u0131n.",
          "call.youtube.desc.noresults": "Sonu\xe7 bulunamad\u0131.",
          "call.youtube.paste.descforonetoone":
            "Arkada\u015f\u0131n\u0131zla payla\u015fmak istedi\u011finiz videolar i\xe7in arama yap\u0131n. (Kulakl\u0131k kullanman\u0131z \xf6nerilir.)",
          "call.youtube.popup.shareerror":
            "YouTube videosu ge\xe7ici bir hata nedeniyle payla\u015f\u0131lam\u0131yor. L\xfctfen tekrar deneyin.",
          "call.youtube.popupbutton.allow": "\u0130zin ver",
          "call.youtube.popupbutton.disallow": "\u0130zin verme",
          "call.youtube.popupdesc.clipboard":
            "B\xf6ylece, kopyalam\u0131\u015f oldu\u011funuz YouTube ba\u011flant\u0131s\u0131 otomatik olarak taray\u0131c\u0131n\u0131za yap\u0131\u015ft\u0131r\u0131l\u0131r.",
          "call.youtube.popuptitle.clipboard":
            "LINE'\u0131n panonuza eri\u015fmesine izin verin",
          "call.youtube.statusbadge.premiering":
            "\u0130lk g\xf6sterimi yap\u0131l\u0131yor",
          "call.youtube.title.trendingvideos": "Pop\xfcler videolar",
          "call.youtube.videodesc.date": "Planlanan yay\u0131n zaman\u0131: %1",
          "call.youtube.videodesc.datevariable": "d MMM yyyy HH:mm",
          "capture.command.close": "Kapat",
          "capture.command.copy": "Kopyala",
          "capture.command.done": "Bitti",
          "capture.command.draw": "\xc7iz",
          "capture.command.gif": "GIF kaydet",
          "capture.command.gif.cancel":
            "Ekran g\xf6r\xfcnt\xfcs\xfcn\xfc kapat\u0131rsan\u0131z bu GIF silinecek. Yine de devam edilsin mi?",
          "capture.command.gif.create": "GIF olu\u015fturuluyor",
          "capture.command.gif.error.maxFileSize":
            "\xc7ekti\u011finiz GIF dosyas\u0131 20 MB\u2019den b\xfcy\xfck.\n(\u015fu anda %1 MB)\nL\xfctfen tekrar deneyin.",
          "capture.command.gif.error.maxSize":
            "Se\xe7im alan\u0131 \xe7ok b\xfcy\xfck oldu\u011fu i\xe7in GIF \xe7ekilemedi.\nAlan\u0131 tekrar se\xe7in.",
          "capture.command.gif.error.size":
            "Se\xe7im alan\u0131 GIF \xe7ekmek i\xe7in \xe7ok k\xfc\xe7\xfck.\nAlan\u0131 yeniden se\xe7in.",
          "capture.command.gif.stop": "Durdur",
          "capture.command.gif.tooltip":
            "Ekran\u0131n\u0131z\u0131n bir b\xf6l\xfcm\xfcn\xfcn g\xf6r\xfcnt\xfcs\xfcn\xfc al\u0131n ve GIF olarak kaydedin.",
          "capture.command.quit": "Bitti",
          "capture.command.redo": "Yinele",
          "capture.command.save": "Kaydet",
          "capture.command.share": "Payla\u015f",
          "capture.command.undo": "Geri Al",
          "capture.desc.need.os.recordscreen":
            "Ekran g\xf6r\xfcnt\xfcs\xfc al\u0131namad\u0131. L\xfctfen LINE'a Ekran Kayd\u0131 \xf6zelli\u011fine eri\u015fim izni verin.",
          "capture.msg.onEditing":
            "Ekran g\xf6r\xfcnt\xfcs\xfcn\xfc kapat\u0131rsan\u0131z yapt\u0131\u011f\u0131n\u0131z de\u011fi\u015fiklikler silinecek. Yine de devam edilsin mi?",
          "capture.scan.error.maxFileSize":
            "Almak istedi\u011finiz g\xf6r\xfcnt\xfc \xe7ok b\xfcy\xfck. L\xfctfen boyutu ayarlay\u0131p tekrar deneyin.",
          "capture.scan.error.resolution":
            "\xc7\xf6z\xfcn\xfcrl\xfc\u011f\xfc desteklenmedi\u011fi i\xe7in g\xf6r\xfcnt\xfc al\u0131namad\u0131. L\xfctfen \xe7\xf6z\xfcn\xfcrl\xfc\u011f\xfc ayarlay\u0131p tekrar deneyin.",
          "capture.tool.eclipse": "Yuvarlak",
          "capture.tool.line": "\xc7izgi",
          "capture.tool.lineColor": "\xc7izgi Rengi",
          "capture.tool.mosaic": "Pikselle\u015ftir",
          "capture.tool.penwidth": "Geni\u015flik",
          "capture.tool.rectangle": "Kare",
          "capture.tool.select": "Se\xe7",
          "capture.tool.shape": "Bi\xe7im",
          "capture.tool.text": "Metin",
          "capture.tool.textColor": "Yaz\u0131 Rengi",
          "capture.tool.textSize": "Yaz\u0131 Boyutu",
          "capture.tool.textSize.big": "B\xfcy\xfck",
          "capture.tool.textSize.medium": "Orta",
          "capture.tool.textSize.small": "K\xfc\xe7\xfck",
          "chat.action.leaveChat.confirm":
            "Bu sohbetten \xe7\u0131karsan\u0131z t\xfcm sohbet ge\xe7mi\u015fi silinecektir.\nBu sohbetten \xe7\u0131kmak istiyor musunuz?",
          "chat.alert.clipboard.largedata":
            "Kopyalad\u0131\u011f\u0131n\u0131z \xf6\u011fe sohbete yap\u0131\u015ft\u0131r\u0131lamayacak kadar b\xfcy\xfck.",
          "chat.alert.file.open.fromNotbuddy":
            "Arkada\u015f listenizde olmayan kullan\u0131c\u0131lar\u0131n g\xf6nderdi\u011fi dosyalar g\xfcvenli olmayabilir.\nYine de a\xe7\u0131ls\u0131n m\u0131?",
          "chat.alert.file.open.fromSquare":
            "Tan\u0131mad\u0131\u011f\u0131n\u0131z kullan\u0131c\u0131lar\u0131n g\xf6nderdi\u011fi dosyalar g\xfcvenli olmayabilir.\nYine de a\xe7\u0131ls\u0131n m\u0131?",
          "chat.alert.file.open.frombuddy":
            "A\xe7madan \xf6nce dosyan\u0131n g\xfcvenli oldu\u011fundan emin olun.\nDosyay\u0131 a\xe7mak istedi\u011finizden emin misiniz?",
          "chat.alert.file.open.notSupport":
            "Dosya desteklenmeyen bi\xe7imde oldu\u011fu i\xe7in a\xe7\u0131lam\u0131yor.",
          "chat.alert.file.unsupported.all.other":
            "Se\xe7ilen dosyalar desteklenmeyen bir bi\xe7ime sahip. Dosyalar s\u0131k\u0131\u015ft\u0131r\u0131l\u0131p g\xf6nderilsin mi?",
          "chat.alert.file.unsupported.some.other":
            "%n dosya desteklenmeyen bir bi\xe7ime sahip. Dosyalar s\u0131k\u0131\u015ft\u0131r\u0131l\u0131p g\xf6nderilsin mi?",
          "chat.alert.invite.alreadyinvited": "%1\nzaten davet edildi.  ",
          "chat.alert.invite.alreadyjoined":
            "%1\nzaten bu grubun bir \xfcyesi.  ",
          "chat.alert.invite.blockedbuddy":
            "Engelledi\u011finiz hesaplar\u0131 davet edemezsiniz.",
          "chat.alert.invite.confirm":
            "%1 adl\u0131 ki\u015fi bu sohbete\ndavet edilsin mi?",
          "chat.alert.invite.notbuddy":
            "%1 adl\u0131 ki\u015fiyi bu sohbete davet etmek\ni\xe7in arkada\u015f olarak ekleyin. ",
          "chat.alert.invite.verificationrequired":
            "QR kodu veya davet ba\u011flant\u0131s\u0131 kullanarak bir gruba kat\u0131lmak i\xe7in 18 ya\u015f\u0131n\u0131 doldurmu\u015f oldu\u011funuzu do\u011frulaman\u0131z gerekir.",
          "chat.alert.sharePost":
            "Notlar ve alb\xfcmler\n%1 ile payla\u015f\u0131ls\u0131n m\u0131?",
          "chat.alert.unavailable.file":
            "Depolama s\xfcresi doldu\u011fu i\xe7in bu dosya payla\u015f\u0131lam\u0131yor.",
          "chat.alert.unsend.fail.error":
            "Mesaj\u0131 g\xf6nderme geri al\u0131namad\u0131. L\xfctfen tekrar deneyin.",
          "chat.alert.unsend.fail.time":
            "Bir mesaj\u0131 g\xf6nderdikten sonra uzun bir zaman ge\xe7tiyse o mesaj\u0131 g\xf6ndermeyi geri alamazs\u0131n\u0131z.",
          "chat.alert.unsend.old.version":
            "Bu mesaj, baz\u0131 kullan\u0131c\u0131lar\u0131n LINE s\xfcr\xfcmlerine ba\u011fl\u0131 olarak sohbetlerinden kald\u0131r\u0131lamayabilir. Devam etmek istiyor musunuz?",
          "chat.audio.tooltip": "Sesli",
          "chat.btn.capture.tooltip": "Ekran G\xf6r\xfcnt\xfcs\xfc",
          "chat.btn.close.tooltip": "Kapat",
          "chat.btn.emoji": "Emoji",
          "chat.btn.facemark": "\u0130fadeler",
          "chat.btn.file": "Dosya",
          "chat.btn.keepmemo.tooltip": "Keep Memo",
          "chat.btn.max.tooltip": "Maksimum",
          "chat.btn.menu.tooltip": "Men\xfc",
          "chat.btn.min.tooltip": "K\xfc\xe7\xfclt",
          "chat.btn.reset.tooltip": "Yenile",
          "chat.btn.sticker": "Stickerlar",
          "chat.btn.sticker.tooltip": "Stickerlar",
          "chat.btn.voip": "\xdccretsiz Arama",
          "chat.contact.label": "Ki\u015fi",
          "chat.context.menu.search.name": "\u0130simlerde ara",
          "chat.context.menu.send.contact": "Ki\u015fiyi Payla\u015f",
          "chat.context.menu.talk": "Bire bir sohbet et",
          "chat.desc.quit.uploading":
            "\u015eu anda bir sohbette bir veya daha fazla dosya g\xf6nderiyorsunuz.\nLINE'\u0131n kapat\u0131lmas\u0131 dosyalar\u0131n do\u011fru g\xf6nderilmesini engeller.",
          "chat.edit.alert.unavailable.picture":
            "bu video art\u0131k mevcut olmad\u0131\u011f\u0131 i\xe7in y\xfcklenemiyor.",
          "chat.emoji.label.animation.unavailable":
            "Sticker'\u0131n animasyon efektini ak\u0131ll\u0131 telefonunuzda g\xf6r\xfcn.",
          "chat.emoji.label.recentIconDesc1":
            "En son kullan\u0131lan emoji burada g\xf6r\xfclecektir.",
          "chat.emoji.label.recentIconDesc2":
            "Bir arkada\u015f\u0131n\u0131za emoji g\xf6ndermeyi deneyin.",
          "chat.emoji.label.recentLetterDesc1":
            "En son kullan\u0131lan \u0130fadeler burada g\xf6r\xfclecektir.",
          "chat.emoji.label.recentLetterDesc2":
            "Bir arkada\u015f\u0131n\u0131za \u0130fadeler g\xf6ndermeyi deneyin.",
          "chat.emoji.label.recentStickerDesc1":
            "En son kullan\u0131lan Stickerlar burada g\xf6r\xfclecektir.",
          "chat.emoji.label.recentStickerDesc2":
            "Bir arkada\u015f\u0131n\u0131za Stickerlar g\xf6ndermeyi deneyin.",
          "chat.err.file.broken":
            "Dosya kaydedilemiyor.\nL\xfctfen bilgisayar\u0131n\u0131z\u0131n kullan\u0131labilir depolama alan\u0131n\u0131 kontrol edin.",
          "chat.err.file.download.failed": "Dosya kaydedilemedi.",
          "chat.err.file.download.localError":
            "Dosya kaydedilemedi. L\xfctfen tekrar deneyin.",
          "chat.err.file.exceed.capacity":
            "\xdczg\xfcn\xfcz. Tek seferde maksimum %1 dosya g\xf6nderebilirsiniz.",
          "chat.err.file.exceed.dailyCapacity":
            "\xdczg\xfcn\xfcz. Tek g\xfcnde maksimum %1 dosya g\xf6nderebilirsiniz.",
          "chat.err.file.folderPermission":
            "Dosya se\xe7ilen klas\xf6re kaydedilemedi.\nL\xfctfen farkl\u0131 bir konum se\xe7erek tekrar deneyin.",
          "chat.err.file.need.space":
            "Cihaz\u0131n\u0131zdan bellek yetersiz. Kullanlabilir bellek miktar\u0131n\u0131 kontrol edin.",
          "chat.err.file.open":
            "Bu dosya kullan\u0131mda. L\xfctfen kapatt\u0131ktan sonra tekrar g\xf6ndermeyi deneyin.",
          "chat.err.file.some.unpardoned":
            "Bu dosya format\u0131 g\xf6nderilemez.\nT\xfcm di\u011fer se\xe7ili dosyalar g\xf6nderilecektir.\n",
          "chat.err.file.unpardoned": "Bu dosya format\u0131 g\xf6nderilemez.",
          "chat.err.media.copyFailed":
            "Kodlama devam ediyor.\nL\xfctfen daha sonra tekrar deneyin.",
          "chat.err.media.infoLoadFailed":
            "Bir ge\xe7ici hata nedeniyle iste\u011finiz i\u015fleme koyulamad\u0131. \nL\xfctfen tekrar deneyin.",
          "chat.error.badwords":
            "Bu bilgiler kullan\u0131larak g\xf6nderilemedi.\nL\xfctfen ba\u015fka bilgiler kullanarak tekrar deneyin.",
          "chat.error.popup.noauth":
            "LINE'\u0131n bu klas\xf6rdeki dosyalar\u0131 a\xe7ma izni olmad\u0131\u011f\u0131 i\xe7in dosya a\xe7\u0131lam\u0131yor.",
          "chat.file.audio.sizeExceeds":
            "Maksimum 30MB boyutunda ses dosyalar\u0131 g\xf6nderebilirsiniz.",
          "chat.file.cancel.tooltip": "Iptal",
          "chat.file.cantFindFile": "Dosya bulunam\u0131yor.",
          "chat.file.closeConfirm":
            "Bu pencereyi kapat\u0131rsan\u0131z dosya G\xf6nderme/Alma iptal edilecektir.\nPencereyi kapatmak istedi\u011finizden emin misiniz?",
          "chat.file.countExceeds":
            "Tek seferde en fazla %1 dosya g\xf6nderebilirsiniz.",
          "chat.file.label.expired": "S\xfcresi Doldu",
          "chat.file.video.sizeExceeds":
            "Maksimum 200MB boyutunda video dosyalar\u0131 g\xf6nderebilirsiniz.",
          "chat.flex.btn.send": "Bitti",
          "chat.flex.date.select": "Tarih se\xe7in",
          "chat.flex.datetime.select": "Tarih ve saat se\xe7in",
          "chat.flex.error.unknown":
            "Bu \xf6zellik ge\xe7erli LINE s\xfcr\xfcm\xfcn\xfczde kullan\u0131lam\u0131yor.",
          "chat.flex.time.select": "Saat se\xe7in",
          "chat.group.msg.e2ee.guide":
            "Bu sohbet Letter Sealing\nile korunmaktad\u0131r",
          "chat.group.noMember.placeholder": "Bu bo\u015f bir odad\u0131r",
          "chat.grouphome.label.enjoySns.title":
            "Bu e\u011flenceli sosyal a\u011f \xfczerinde arkada\u015flar\u0131n\u0131z ile birlikte notlar ve alb\xfcmler yay\u0131nlay\u0131n!\n",
          "chat.image.tooltip": "Resim",
          "chat.input.placeholder": "Mesaj girin",
          "chat.inputbar.msg.album": "Alb\xfcm",
          "chat.inputbar.msg.albumcontents": "Alb\xfcm \xf6\u011feleri",
          "chat.label.del": "Sil",
          "chat.label.makeAlbum": '"%1" alb\xfcm\xfc olu\u015fturuldu.',
          "chat.label.open": "A\xe7",
          "chat.label.openFile": "Dosyay\u0131 a\xe7",
          "chat.label.openFolder": "Klas\xf6r A\xe7",
          "chat.label.playback": "Oynatma",
          "chat.label.retry": "Tekrar G\xf6nder",
          "chat.label.save": "Kaydet",
          "chat.label.saveAs": "Farkl\u0131 kaydet\u2026",
          "chat.label.saveOpen": "Kaydet ve a\xe7",
          "chat.label.sendFail": "G\xf6nderilemedi",
          "chat.label.share": "Payla\u015f",
          "chat.label.showAlbum": "Alb\xfcme Bak",
          "chat.label.showPost": "Notu G\xf6r\xfcnt\xfcle",
          "chat.label.showPrev": "\xd6nceki Sohbetler G\xf6ster",
          "chat.label.totalMediaCount": "Toplam %1",
          "chat.linemusic.shared": "M\xfczik payla\u015ft\u0131n\u0131z.",
          "chat.linemusic.shared.other": "%1 size m\xfczik g\xf6nderdi.",
          "chat.list.call":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> Arama S\xfcresi]]>',
          "chat.list.call.canceled":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> \u0130ptal Edilmi\u015f Arama]]>',
          "chat.list.call.icon":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\">]]>',
          "chat.list.call.missedCall":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> Cevaps\u0131z]]>',
          "chat.list.call.rejected":
            '<![CDATA[<img src=\\"image://main/list_call_icon.png\\" width=\\"13\\" height=\\"13\\"> Cevap yok]]>',
          "chat.list.desc.read.unread.all":
            "T\xfcm mesajlar okundu olarak i\u015faretlendi.",
          "chat.list.group.createdby": "Grubu olu\u015fturan:",
          "chat.list.group.invite": "%1 sizi bir gruba davet etti.",
          "chat.list.group.layer": "Bu gruba davet edildiniz.",
          "chat.list.group.nogroupcreator":
            "Bu grubu olu\u015fturan ki\u015fi art\u0131k bu grubun kat\u0131l\u0131mc\u0131s\u0131 de\u011fil.",
          "chat.list.linecall": "[LINE Premium Call]",
          "chat.list.mention": "Sizden bahsedildi.",
          "chat.list.menu.clear.all.unreadmessage":
            "T\xfcm\xfcn\xfc okundu olarak i\u015faretle",
          "chat.list.menu.sort.favorites": "Favoriler",
          "chat.list.menu.sort.time": "Al\u0131nd\u0131\u011f\u0131 saat",
          "chat.list.menu.sort.unreadcount": "Okunmayan mesajlar",
          "chat.list.menu.tooltip": "S\u0131ralama \xf6l\xe7\xfct\xfc",
          "chat.list.sortBtn.tooltip": "Okunmayan mesajlar",
          "chat.list.sortByUnread.desc":
            "Okunmayan mesajlar ba\u015fa ta\u015f\u0131nd\u0131. ",
          "chat.menu.Image.download": "\u0130ndirme tamamland\u0131.",
          "chat.menu.Image.download.fail":
            "Bu dosya kaydedilemedi.\nL\xfctfen tekrar deneyin.",
          "chat.menu.alarmOff": "Sohbet sesi a\xe7\u0131k",
          "chat.menu.alarmOn": "Sohbet sesi kapal\u0131",
          "chat.menu.albums": "Alb\xfcm",
          "chat.menu.alwaysTop": "Her Zaman En \xfcstte",
          "chat.menu.backgroundSetting": "Arka Plan Ayarlar\u0131",
          "chat.menu.backgroundSetting.apply": "Uygula",
          "chat.menu.backgroundSetting.cancel": "\u0130ptal",
          "chat.menu.backgroundSetting.file": "Dosya Se\xe7",
          "chat.menu.backgroundSetting.image.failed":
            "Bu g\xf6rsel kullan\u0131lamaz.",
          "chat.menu.backgroundSetting.image.maximumUploadableSize":
            "Yaln\u0131zca en fazla %1MB\xa0b\xfcy\xfckl\xfc\u011f\xfcndeki resimleri y\xfckleyebilirsiniz.",
          "chat.menu.backgroundSetting.option":
            "G\xf6r\xfcnt\xfc Se\xe7ene\u011fi",
          "chat.menu.backgroundSetting.option.detail": "D\xf6\u015fe",
          "chat.menu.backgroundSetting.option.fill": "Dolgu",
          "chat.menu.backgroundSetting.photo.save.failed":
            "Foto\u011fraf kaydedilmedi.",
          "chat.menu.backgroundSetting.photo.transparency": "Saydaml\u0131k",
          "chat.menu.backgroundSetting.photoGuide":
            "Sohbet arka plan\u0131n\u0131z\u0131 \xf6zelle\u015ftirin.",
          "chat.menu.backgroundSetting.reset": "S\u0131f\u0131rla",
          "chat.menu.backgroundSetting.select": "Arka Plan Se\xe7",
          "chat.menu.backgroundSetting.tab.color": "Renk",
          "chat.menu.backgroundSetting.tab.illustration":
            "\u0130ll\xfcstrasyon",
          "chat.menu.backgroundSetting.tab.photo": "Resim",
          "chat.menu.backgroundSetting.unavailableInDarkmode":
            "Koyu modda kullan\u0131lamaz.",
          "chat.menu.copy": "Kopyala",
          "chat.menu.delete": "T\xfcm Sohbet Ge\xe7mi\u015fini Sil",
          "chat.menu.group.noMember": "\xdcye Yok",
          "chat.menu.invite": "Davet et",
          "chat.menu.invite.group": "\xdcye ve davetler",
          "chat.menu.leave": "Sohbetten ayr\u0131l",
          "chat.menu.make": "Grup Kur",
          "chat.menu.msg.announce": "Duyur",
          "chat.menu.msg.unsend": "G\xf6ndermeyi geri al",
          "chat.menu.openAlbum": "T\xfcm Resim. G\xf6ster",
          "chat.menu.openAlbum.download": "\u0130ndirme tamamland\u0131.",
          "chat.menu.openAlbum.download.fail": "\xd6\u011feler indirilemiyor.",
          "chat.menu.openAlbum.download.fail.folderPermission":
            "Se\xe7ili klas\xf6re indirme tamamlanamad\u0131.\nL\xfctfen indirme konumunuzu de\u011fi\u015ftirip tekrar deneyin.",
          "chat.menu.openAlbum.download.open": "Klas\xf6r A\xe7",
          "chat.menu.openAlbum.downloading": "\u0130ndiriliyor...",
          "chat.menu.openAlbum.retry": "Tekrar Dene",
          "chat.menu.openAlbum.saveKeep": "Keep'e kaydedildi.",
          "chat.menu.openAlbum.saveKeep.open": "Keep\u2019i A\xe7",
          "chat.menu.openAlbum.savingKeep": "Keep\u2019e kaydediliyor...",
          "chat.menu.openAlbum.savingKeep.fail": "Keep\u2019e kaydedilemiyor.",
          "chat.menu.openAlbum.selected": "%1 \xf6\u011fe se\xe7ildi",
          "chat.menu.openLink": "T\xfcm URL\u2019Leri G\xf6ster",
          "chat.menu.openLink.noURL":
            "Bu sohbette payla\u015f\u0131lan URL yok.",
          "chat.menu.paste": "Yap\u0131\u015ft\u0131r",
          "chat.menu.recommend": "Tavsiye",
          "chat.menu.save": "Sohbeti Kaydet",
          "chat.menu.save.note": "Notlar'a Kaydet",
          "chat.menu.searchMsgs": "Sohbet Arama",
          "chat.menu.selectAll": "Hepsini Se\xe7",
          "chat.menu.selectedCopy": "Se\xe7ili metni kopyala",
          "chat.menu.settings": "Ayarlar",
          "chat.menu.showAllContents": "T\xfcm i\xe7eriklere bak",
          "chat.menu.sticker.openWebStore": "Ma\u011faza",
          "chat.menu.sticker.showDetail": "A\xe7",
          "chat.menu.translation": "Terc\xfcme Et",
          "chat.message.present.emoji.receive":
            "Hediye olarak emoji ald\u0131n\u0131z!",
          "chat.message.present.receive.confirm": "Y\xfckle",
          "chat.message.present.sticker.receive":
            "Hediye olarak sticker ald\u0131n\u0131z!",
          "chat.message.present.theme.receive":
            "Hediye olarak bir tema ald\u0131n\u0131z!\nL\xfctfen ak\u0131ll\u0131 telefonunuzdan kontrol edin.",
          "chat.message.sharealbum": "Bir alb\xfcm payla\u015ft\u0131.",
          "chat.message.sharenote": "Bir not payla\u015ft\u0131.",
          "chat.msg.album.addphoto.other": "%n \xf6\u011fe alb\xfcme eklendi.",
          "chat.msg.album.create": '"%1" alb\xfcm\xfc olu\u015fturuldu.',
          "chat.msg.album.delete": '%1, "%2" alb\xfcm\xfcn\xfc sildi.',
          "chat.msg.album.removephoto":
            '%1 "%2" alb\xfcm\xfcnden bir veya daha fazla \xf6\u011fe sildi.',
          "chat.msg.album.rename":
            '%1, "%2" alb\xfcm ismini "%3" e de\u011fi\u015ftirdi.',
          "chat.msg.album.viewPhoto": "Alb\xfcme Bak",
          "chat.msg.applink.app.recv":
            "Kar\u015f\u0131n\u0131zda %1. L\xfctfen ak\u0131ll\u0131 telefonunuzdan kontrol edin.",
          "chat.msg.applink.app.sent":
            "Tan\u0131tt\u0131n\u0131z %1. L\xfctfen ak\u0131ll\u0131 telefonunuzdan kontrol edin.",
          "chat.msg.applink.friend.recv":
            "%1 \xfczerinden size arkada\u015fl\u0131k iste\u011fi g\xf6nderdi! L\xfctfen ak\u0131ll\u0131 telefonunuzdan kontrol edin.",
          "chat.msg.applink.friend.sent":
            "%1 \xfczerinden arkada\u015fl\u0131k iste\u011finiz g\xf6nderildi!",
          "chat.msg.boundnoun": "\ub2d8",
          "chat.msg.call.canceled": "\u0130ptal edildi",
          "chat.msg.call.e2ee.guide":
            '<![CDATA[Bu Letter Sealing \xf6zelli\u011fine sahip bir arama.\nG\xfcvenlik a\xe7\u0131s\u0131ndan geli\u015ftirilmi\u015f aramalarda bir<img src=\\"image://chat/e2ee_icon.png\\" width="16" height="11">simgesi g\xf6r\xfcnt\xfclenir.]]>',
          "chat.msg.call.missedCall": "Cevaps\u0131z",
          "chat.msg.call.rejected": "Cevap Yok",
          "chat.msg.changeGroupImage":
            "%1 grubun resmini de\u011fi\u015ftirdi.",
          "chat.msg.changeGroupName":
            "%1 grubun ismini %2 olarak de\u011fi\u015ftirdi.",
          "chat.msg.chatevent.unknown":
            "Bu bildirim LINE masa\xfcst\xfc s\xfcr\xfcm\xfcnde mevcut de\u011fildir.\n",
          "chat.msg.e2ee.decryptingMsg": "\u015eifre \xe7\xf6z\xfcl\xfcyor...",
          "chat.msg.e2ee.guide":
            "Bu sohbet Letter Sealing\nile korunmaktad\u0131r",
          "chat.msg.e2ee.needKeyExchange":
            "Bu mesaj \u015fifrelenmi\u015f.\nBu mesaj\u0131 okumak i\xe7in kimli\u011finizi do\u011frulay\u0131n.",
          "chat.msg.e2ee.recvMsg.decryptionFailed":
            "Letter Sealing\n\u015eifresi \xe7\xf6z\xfclemedi\u011fi i\xe7in mesaj g\xf6r\xfcnt\xfclenemiyor. L\xfctfen arkada\u015f\u0131n\u0131zdan mesaj\u0131 yeniden g\xf6ndermesini isteyin.",
          "chat.msg.e2ee.sentMsg.decryptionFailed":
            "Bu mesaj yedeklenemiyor.\nBu mesaj yedeklenmedi ve \xf6nceki cihaz\u0131n\u0131zdan geri y\xfcklenmedi. Ne yaz\u0131k ki mevcut cihaz\u0131n\u0131zda bu mesaj\u0131n okunmas\u0131 m\xfcmk\xfcn de\u011fil.",
          "chat.msg.e2ee.setting.disabled":
            "Bu mesaj \u015fifrelenmi\u015f. L\xfctfen bu mesaj\u0131 telefonunuzda g\xf6r\xfcnt\xfcleyin.",
          "chat.msg.file.change.type.audio":
            "Bu Sesli Mesaj b\xfcy\xfck boyutu sebebiyle baz\u0131 cihazlarda oynat\u0131lamayabilir.",
          "chat.msg.file.change.type.video":
            "Bu dosya b\xfcy\xfck boyutu sebebiyle baz\u0131 cihazlarda oynat\u0131lamayabilir.",
          "chat.msg.file.ext": "Dosya uzt.",
          "chat.msg.file.period": "Etki s\xfcresi: ~",
          "chat.msg.file.received": "%1 bir dosya g\xf6nderdi.",
          "chat.msg.file.sent": "Dosyainize g\xf6nderildi.",
          "chat.msg.file.size": "Boyut : %1",
          "chat.msg.file.waiting": "Bekleniyor",
          "chat.msg.groupInvite":
            "%1 %2 kullan\u0131c\u0131s\u0131n\u0131 gruba davet etti.",
          "chat.msg.groupboard.updated":
            "Grup Panosu g\xfcncellendi. L\xfctfen ak\u0131ll\u0131 telefonunuzdaki LINE uygulamas\u0131ndaki yeni bilgileri kontrol edin.",
          "chat.msg.home.shared":
            "%1's adl\u0131 ki\u015finin g\xf6nderisi payla\u015f\u0131ld\u0131.",
          "chat.msg.inviteCancel":
            "%1 %2 kullan\u0131c\u0131s\u0131n\u0131n gruba davetini iptal etti.",
          "chat.msg.joinGroup": "%1 gruba kat\u0131ld\u0131.",
          "chat.msg.kickout":
            "%1 %2 kullan\u0131c\u0131s\u0131n\u0131 gruptan \xe7\u0131kard\u0131.",
          "chat.msg.leave": "%1 sohbetten ayr\u0131ld\u0131.",
          "chat.msg.leaveGroup": "%1 gruptan \xe7\u0131kt\u0131.",
          "chat.msg.leavegroup.1.n.confirm":
            "Bu sohbetten ayr\u0131l\u0131rsan\u0131z grubun sohbet ge\xe7mi\u015fini g\xf6remezsiniz. Bu sohbetten ayr\u0131lmak istiyor musunuz?",
          "chat.msg.nomember": "Bo\u015f Oda",
          "chat.msg.preview.default":
            "Bu ba\u011flant\u0131y\u0131 a\xe7mak i\xe7in buraya t\u0131klay\u0131n.",
          "chat.msg.read": "Okundu",
          "chat.msg.search.cancelSearch": "\u0130ptal edildi",
          "chat.msg.search.hint.fromName": "G\xf6nderenin ismini girin.",
          "chat.msg.search.hint.message": "L\xfctfen aranacak metni girin.",
          "chat.msg.search.hint.roomName": "Sohbet ve Mesajlar\u0131 Arama",
          "chat.msg.search.result.hint.addOption":
            "Aramaya b\u015fka shbet odalar\u0131 veya g\xf6nderen ekleyin.",
          "chat.msg.search.result.hint.noResultReason1":
            "Farkl\u0131 bir PC kullan\u0131yorsan\u0131z arama sonu\xe7lar\u0131 d\xf6nd\xfcr\xfclmeyebilir. ",
          "chat.msg.search.result.hint.noResultReason2":
            "LINE'\u0131n PC s\xfcr\xfcm\xfcn\xfc 2 haftadan uzun s\xfcredir kullanmad\u0131ysan\u0131z arama sonu\xe7lar\u0131 d\xf6nd\xfcr\xfclmeyebilir. ",
          "chat.msg.search.result.noResult": "Sonu\xe7 bulunamad\u0131.",
          "chat.msg.search.title.date": "Tarih",
          "chat.msg.search.title.fromName": "G\xf6nderen",
          "chat.msg.search.title.message": "Mesaj",
          "chat.msg.search.title.roomName": "Sohbet",
          "chat.msg.smartphone":
            "L\xfctfen ak\u0131ll\u0131 telefonunuzdan kontrol edin.",
          "chat.msg.start.unreadMessage": "Okunmayan Mesaj",
          "chat.msg.sticker.gift.from.buddy":
            "Bir hediye ald\u0131n\u0131z! Hemen indirin.",
          "chat.msg.sticker.gift.from.me": "Hediye G\xf6nderildi!",
          "chat.msg.sticker.period.expired":
            "Ge\xe7erlilik s\xfcresi sona erdi.\nL\xfctfen ak\u0131ll\u0131 telefonunuzdan %1 \xfcr\xfcn\xfcn\xfc tekrar sat\u0131n al\u0131n.",
          "chat.msg.sticon.period.expired":
            "%1 i\xe7in ge\xe7erlilik s\xfcresi doldu. L\xfctfen LINE'\u0131n mobil s\xfcr\xfcm\xfcndeki Sticker Ma\u011fazas\u0131ndan tekrar sat\u0131n al\u0131n.",
          "chat.msg.sync": "Msj. senk. ediliyor...",
          "chat.msg.text.seeAll": "Daha Fazla Bilgi",
          "chat.msg.theme.gift.from.me": "Hediye G\xf6nderildi!",
          "chat.msg.unknown.message":
            "\xdczg\xfcn\xfcz, bu mesaj g\xf6r\xfcnt\xfclenemez.",
          "chat.msg.unread": "Okunmayan",
          "chat.msgbox.alarmoff.description":
            "Bu sohbet odas\u0131nda yeni mesaj bildirimleri kullan\u0131lam\u0131yor.",
          "chat.msgbox.bannedWord":
            "Mesaj yasaklanm\u0131\u015f kelimeler i\xe7ermektedir ve g\xf6nderilemez.",
          "chat.msgbox.save.description":
            "Yaln\u0131zca bu ekranda g\xf6sterilen ileti Metin format\u0131nda kaydedilmi\u015ftir.\n",
          "chat.msgbox.save.dontShow": "Tekrar g\xf6sterme",
          "chat.msgbox.save.empty": "Kaydedilecek mesaj yok.",
          "chat.noMember.group.error.noAuth":
            "Bu \xf6zellik yaln\u0131zca grup \xfcyeleri taraf\u0131ndan kullan\u0131labilir.",
          "chat.noMember.singleRoom.error.album":
            "Bu sohbette daha fazla \xf6\u011fe ekleyemez veya daha fazla alb\xfcm olu\u015fturamazs\u0131n\u0131z.",
          "chat.noMember.singleRoom.error.note":
            "Bu sohbete daha fazla not ekleyemezsiniz.",
          "chat.noinput.group.invitation":
            "Sohbet etmek i\xe7in gruba kat\u0131l\u0131n.",
          "chat.notes.notification.sharenote": "Bir not payla\u015ft\u0131.",
          "chat.notimessage.sharealbum": "Bir alb\xfcm payla\u015ft\u0131.",
          "chat.poll.message.btn":
            "Ayr\u0131nt\u0131lar\u0131 g\xf6r\xfcnt\xfcle",
          "chat.poll.title": "Anket",
          "chat.popup.btn.pasteAsImage": "Resim",
          "chat.popup.btn.pasteAsText": "Metin",
          "chat.popup.clipboard.withImage":
            "Pano i\xe7eri\u011fini nas\u0131l yap\u0131\u015ft\u0131rmak istedi\u011finizi se\xe7in.",
          "chat.popup.desc.grouplimit":
            "Maksimum LINE grubu say\u0131s\u0131na ula\u015ft\u0131n\u0131z. Yeni bir gruba kat\u0131lmak i\xe7in ilk olarak \xf6nceki bir gruptan ayr\u0131l\u0131n ve yeniden deneyin.",
          "chat.popup.title.grouplimit":
            "Grup s\u0131n\u0131r\u0131na ula\u015f\u0131ld\u0131",
          "chat.popupbutton.delete": "Hay\u0131r, mesaj\u0131 sil",
          "chat.popupbutton.resend": "Evet, yeniden g\xf6nder",
          "chat.popupdesc.serveroutage1":
            "Sunucu hatas\u0131 nedeniyle di\u011fer ki\u015fi bu mesaj\u0131 g\xf6r\xfcnt\xfcleyemiyor. Yeni mesaj olarak yeniden g\xf6nderilsin mi?",
          "chat.popupdesc.serveroutagegroup":
            "Sunucu hatas\u0131 nedeniyle baz\u0131 grup \xfcyeleri bu mesaj\u0131 g\xf6r\xfcnt\xfcleyemiyor. Yeni mesaj olarak yeniden g\xf6nderilsin mi?",
          "chat.popuptitle.serveroutage": "Mesaj yeniden g\xf6nderilsin mi?",
          "chat.profile.menu.displayName.search":
            "Mesajlar\u0131 Ada G\xf6re Ara",
          "chat.receiveicon.linecall.failed":
            "chat/chat_word_receive_linecallfail_icon.png",
          "chat.receiveicon.linecall.success":
            "chat/chat_word_receive_linecallsucess_icon.png",
          "chat.reply.album": "Alb\xfcm: %1",
          "chat.reply.jump": "Yan\u0131ta geri d\xf6n",
          "chat.reply.jump.delete":
            "Bu mesaj\u0131n g\xf6nderimi geri al\u0131nd\u0131.",
          "chat.reply.no.original.message": "Mesaj kullan\u0131lam\u0131yor.",
          "chat.reply.note.no.text": "%1 tarihinde payla\u015f\u0131lan not",
          "chat.reply.note.text": "Not: %1",
          "chat.room.msg.invitorNotBuddy":
            "Arkada\u015f olarak kay\u0131tl\u0131 olmayan %1 taraf\u0131ndan bir gruba davet edildiniz.",
          "chat.save.location": "Yer",
          "chat.sendicon.linecall.falied":
            "chat/chat_word_send_linecallfail_icon.png",
          "chat.sendicon.linecall.success":
            "chat/chat_word_send_linecallsucess_icon.png",
          "chat.setting.theme.snow.disable":
            "Kar Efektini Devre D\u0131\u015f\u0131 B\u0131rak",
          "chat.setting.theme.snow.enable": "Kar Efektini Etkinle\u015ftir",
          "chat.share.notexist":
            "Bu kullan\u0131c\u0131 LINE hesab\u0131n\u0131 silmi\u015f ya da mevcut de\u011fil.",
          "chat.sharing.notification.sharealbum":
            "Bir alb\xfcm payla\u015ft\u0131.",
          "chat.sharing.notification.sharenote": "Bir not payla\u015ft\u0131.",
          "chat.status.block":
            "Engelledi\u011finiz hesaplara sohbet mesaj\u0131 g\xf6nderemezsiniz.",
          "chat.status.disconn":
            "Bir Mesaj\u0131 aktarma yapamayacaks\u0131n\u0131z.",
          "chat.status.e2ee.verification.fail":
            "Letter Sealing hesap do\u011frulamas\u0131 iptal edildi.\n\n\u015eifrelenmi\u015f mesajlar\u0131 yaln\u0131zca hesab\u0131n\u0131z\u0131 do\u011frulad\u0131ktan sonra g\xf6r\xfcnt\xfcleyebilirsiniz.\n",
          "chat.status.keyExchangeBtn": "Kimli\u011fimi do\u011frula",
          "chat.status.leave":
            "Sohbetten ayr\u0131ld\u0131\u011f\u0131n\u0131z i\xe7in daha fazla mesaj g\xf6nderemezsiniz.",
          "chat.status.needKeyExchange":
            "LINE'\u0131n masa\xfcst\xfc s\xfcr\xfcm\xfcnde Letter Sealing \u015fifreleme \xf6zelli\u011fini kullanmak i\xe7in kimli\u011finizi do\u011frulaman\u0131z gerekiyor.",
          "chat.system.inviteeoverlimit":
            "LINE grup s\u0131n\u0131r\u0131na ula\u015ft\u0131klar\u0131 i\xe7in a\u015fa\u011f\u0131daki \xfcyeler kat\u0131lam\u0131yor.\n%1",
          "chat.system.msg.a.unsend":
            "%1 bir mesaj\u0131 g\xf6ndermeyi geri ald\u0131.",
          "chat.system.msg.unsend":
            "Mesaj\u0131 g\xf6nderme geri al\u0131nd\u0131.",
          "chat.systemmessage.upgradegroup":
            "Grup ayarlar\u0131 de\u011fi\u015fti. Art\u0131k bu grubun yeni \xfcyelerinin gruba kat\u0131lmak i\xe7in daveti kabul etmeleri gerekiyor.",
          "chat.title.chatMember": "\xdcyeler",
          "chat.toast.notifications.mute":
            "Bu sohbet i\xe7in bildirimler kapal\u0131.",
          "chat.toast.notifications.unmute":
            "Bu sohbet i\xe7in bildirimler a\xe7\u0131k.",
          "chat.trans.tooltip": "\u015feffafl\u0131k",
          "chat.video.play": "Oynat",
          "chat.video.replay": "Ynd Oyn",
          "chat.video.tooltip": "Video",
          "chatapp.giphy.forward":
            "GIPHY ile g\xf6nderilen GIF dosyalar\u0131 iletilemez.",
          "chatapp.giphy.forward.next":
            "GIPHY ile g\xf6nderilen GIF dosyalar\u0131 iletilemez. Di\u011fer dosyalar\u0131 iletmek istiyor musunuz?",
          "chatapp.giphy.keep":
            "GIPHY ile g\xf6nderilen GIF dosyalar\u0131 Keep'e kaydedilemez.",
          "chatapp.giphy.keep.next":
            "GIPHY ile g\xf6nderilen GIF dosyalar\u0131 Keep'e kaydedilemez. Di\u011fer dosyalar\u0131 kaydetmek istiyor musunuz?",
          "chatl.share.alert.error":
            "G\xf6nderimi iptal edildi\u011fi i\xe7in bu mesaj payla\u015f\u0131lam\u0131yor.",
          "chatl.share.alert.max": "En fazla %1 sohbet se\xe7ebilirsiniz.",
          "chatl.share.toast.multiple.other":
            "Mesaj %n sohbetle payla\u015f\u0131ld\u0131.",
          "chatl.share.toast.single": "%1 ile payla\u015f\u0131ld\u0131.",
          "chatl.sharetotalk.title": "\u015eununla payla\u015f:",
          "chatlist.allinone.close.btn": "Sohbetleri daralt",
          "chatlist.allinone.open.btn": "Sohbetleri geni\u015flet",
          "chatlist.btn.startchat": "Sohbet ba\u015flat",
          "chatlist.chooseChat.empty.btn": "Burada G\xf6ster",
          "chatlist.chooseChat.empty.desc":
            "Bu sohbet ayr\u0131 bir pencerede a\xe7\u0131k.\nSohbet burada g\xf6sterilsin mi?",
          "chatlist.context.menu.seperateChat.label":
            "Ayr\u0131 Pencerede A\xe7",
          "chatlist.guide.allinone.text":
            "Sohbetleri yeni bir b\xf6lmede a\xe7mak i\xe7in bu pencereyi geni\u015fletin.",
          "chatlist.guide.chatStart.text": "Sohbete ba\u015flay\u0131n!",
          "chatlist.hide.confirm":
            "Sohbetler gizlendi\u011finde, bu sohbetlerdeki mesajlar silinmez. ",
          "chatlist.keepmemo.desc.msg":
            "Kendinize saklamak istedi\u011finiz t\xfcm metin, foto\u011fraf, video ve ba\u011flant\u0131lar\u0131 g\xf6nderin.",
          "chatlist.keepmemo.desc.title": "Keep Memo",
          "chatlist.search.hint.chatList": "Sohbet listesinde ara",
          "chatlist.sort.unreadRoom":
            "Okunmayan mesajl\u0131 sohbetleri g\xf6ster",
          "chatlive.end.popup.done": "Sonland\u0131r",
          "chatlive.error.notavailable":
            "Ba\u015fka bir \xfcye arama ba\u015flatt\u0131.",
          "chatlive.maximum":
            "Maksimum kat\u0131l\u0131mc\u0131 say\u0131s\u0131na ula\u015f\u0131ld\u0131.",
          "chatlive.msg.over.traffic":
            "\u015eu anda ak\u0131\u015f trafi\u011fi \xe7ok yo\u011fun.\nL\xfctfen daha sonra tekrar deneyin.",
          "chatlive.screen.share.ongoing.body":
            "Ekran\u0131n\u0131z payla\u015f\u0131l\u0131yor.",
          "chatlive.screen.share.ongoing.stop": "Durdur",
          "chatlive.screen.share.ongoing.top":
            "Ekran\u0131n\u0131z payla\u015f\u0131l\u0131yor.",
          "chatlive.screen.share.select.body":
            "PC ekran\u0131n\u0131z\u0131 payla\u015fmak \xfczeresiniz. Payla\u015fmak istedi\u011finiz ekran\u0131 se\xe7in.",
          "chatlive.screen.share.select.done": "Payla\u015f",
          "chatlive.screen.share.select.item": "Ekran %1",
          "chatlive.screen.share.select.title":
            "Payla\u015fmak i\xe7in bir ekran se\xe7in",
          "chatlive.viewer.list.title.other": "%n g\xf6r\xfcnt\xfcleyen",
          "chatlive.viewer.list.title.plurals.other":
            "%n g\xf6r\xfcnt\xfcleyen",
          "chatroom.guide.sticker.text":
            "G\xf6z al\u0131c\u0131 sticker'larla sohbetlerinize renk kat\u0131n.",
          "chatsettings.desc.membersjoinautomatically":
            "\xdcyeler davet edildikleri anda gruba kat\u0131l\u0131r. \xdcyelerin her zaman gruba kat\u0131lmadan \xf6nce daveti kabul etmesini zorunlu k\u0131lmak i\xe7in bu ayar\u0131 devre d\u0131\u015f\u0131 b\u0131rak\u0131n.",
          "chatsettings.popup.desc.onewaywarning":
            "Bu ayar, devre d\u0131\u015f\u0131 b\u0131rak\u0131ld\u0131ktan sonra tekrar etkinle\u015ftirilemez. Emin misiniz?",
          "chatsettings.popup.title.onewaywarning":
            "Bu i\u015flem geri al\u0131namaz",
          "chatsettings.title.membersjoinautomatically":
            "\xdcyeler otomatik olarak kat\u0131l\u0131r",
          "choosefriends.button.createGroup": "Grup olu\u015ftur",
          "choosefriends.button.gotochatsingle": "Bire bir sohbet et",
          "choosefriends.button.invite": "Davet et",
          "choosefriends.title.default": "Arkada\u015f se\xe7",
          "choosefriends.title.numselected": "%1 se\xe7ildi",
          "chrome.common.toast.unabletocopy":
            "Kopyalanamad\u0131. L\xfctfen tekrar deneyin.",
          "chrome.setting.desc.notiforsp":
            "Chrome s\xfcr\xfcm\xfcne giri\u015f yap\u0131ld\u0131\u011f\u0131nda mobil bildirimleri kapat.",
          "chrome.time.desc.outofrangetime": "HH:mm",
          "chrome.time.toast.outofrange":
            "Saat, %1 saatinden \xf6ncesine ayarlanmal\u0131d\u0131r.",
          "chrome.time.toast.outofrange2":
            "Saat %1 olarak veya daha sonraki bir saate ayarlanmal\u0131d\u0131r.",
          "chrome.user.error.failedToBlock":
            "Bu hesap \u015fu anda engellenemiyor. L\xfctfen daha sonra tekrar deneyin.",
          "chrome.user.error.failedToDeclineGroupInvitation":
            "Davet reddedilemedi.",
          "chrome.user.error.failedToHide":
            "Bu hesap \u015fu anda gizlenemiyor. L\xfctfen daha sonra tekrar deneyin.",
          "chrome.user.error.failedToJoinGroup":
            "\u015eu anda bu gruba kat\u0131l\u0131nam\u0131yor. L\xfctfen daha sonra tekrar deneyin.",
          "chrome.user.error.failedToLeaveGroup":
            "Gruptan \xe7\u0131k\u0131lamad\u0131.",
          "chrome.user.error.failedToMarkFavorite":
            "\xdczg\xfcn\xfcz, favorilere ekleme ba\u015far\u0131s\u0131z oldu.",
          "chrome.user.error.failedToShowUser":
            "Bu hesap \u015fu anda g\xf6sterilemiyor. L\xfctfen daha sonra tekrar deneyin.",
          "chrome.user.error.failedToUnblock":
            "Hesab\u0131n engeli kald\u0131r\u0131lamad\u0131",
          "common.album.empty.desc":
            "Heyecan verici anlar\u0131 payla\u015fmak i\xe7in alb\xfcmleri kullan\u0131n.",
          "common.alert.errorcode": "Hata kodu: %1",
          "common.alert.notsupported":
            "Bu \xf6zelli\u011fi kullanabilmek i\xe7in l\xfctfen LINE uygulaman\u0131z\u0131 g\xfcncelleyin.",
          "common.alert.unsend.content":
            "G\xf6nderen taraf\u0131ndan bu i\xe7eri\u011fi g\xf6nderme i\u015flemi geri al\u0131nd\u0131.",
          "common.alert.unsend.multi.contents":
            "G\xf6nderilmemi\u015f \xf6\u011feler hari\xe7 tutulacak.",
          "common.alert.unsupported.osversion":
            "Ge\xe7erli i\u015fletim sistemi s\xfcr\xfcm\xfcn\xfcz bu \xf6zelli\u011fi desteklemiyor. L\xfctfen i\u015fletim sisteminizi en son s\xfcr\xfcme g\xfcncelleyin.",
          "common.alert.update.title": "G\xfcncelle",
          "common.alert.version.other":
            "LINE'\u0131n farkl\u0131 bir s\xfcr\xfcm\xfc zaten \xe7al\u0131\u015f\u0131yor.",
          "common.am": "AM",
          "common.btn.back": "Geri",
          "common.btn.cancel": "Iptal",
          "common.btn.capture.option":
            "Ekran kayd\u0131 al\u0131rken pencereyi gizle",
          "common.btn.capture.option.tooltip":
            "Ekran Kayd\u0131 Se\xe7enekleri",
          "common.btn.delete": "Sil",
          "common.btn.discard": "Ayr\u0131l",
          "common.btn.forward": "Payla\u015f",
          "common.btn.hide": "Gizle",
          "common.btn.next": "Sonraki",
          "common.btn.quit": "LINE'\u0131 kapat",
          "common.btn.retry": "Tekrar Dene",
          "common.btn.run": "Kilitle",
          "common.btn.save": "Kaydet",
          "common.btn.seemore": "T\xfcm\xfcne Bak",
          "common.btn.submit": "Tamam",
          "common.btn.unhide": "G\xf6r\xfcnt\xfcle",
          "common.cancel": "Iptal",
          "common.cancelalert.desc":
            "Bu sayfadan ayr\u0131l\u0131rsan\u0131z \xf6zel resim yaz\u0131n\u0131z kaybedilecek. Emin misiniz?",
          "common.code.tooltip":
            "G\xf6r\xfcnt\xfcn\xfcn QR kodunu tarayabilirsiniz.",
          "common.content.address.share.from.buddy":
            "%1 bir ki\u015fi payla\u015ft\u0131.",
          "common.content.address.share.from.me":
            "Bir ki\u015fi g\xf6nderdiniz.",
          "common.content.applink.app.recv": "Kar\u015f\u0131n\u0131zda %1!",
          "common.content.applink.app.sent": "Tan\u0131tt\u0131n\u0131z %1",
          "common.content.applink.friend.recv":
            "%1 \xfczerinden size arkada\u015fl\u0131k iste\u011fi g\xf6nderdi!",
          "common.content.applink.friend.sent":
            "%1 \xfczerinden arkada\u015fl\u0131k iste\u011finiz g\xf6nderildi!",
          "common.content.audio": "%1 size bir Sesli g\xf6nderdi!",
          "common.content.audio.mine": "Bir sesli g\xf6nderdiniz.",
          "common.content.coupon.message.postfix":
            "L\xfctfen ak\u0131ll\u0131 telefonunuzdan kontrol edin. ",
          "common.content.group.note.updated": "Yeni bir not eklendi.",
          "common.content.group.note.updated.myself": "Yeni bir not eklendi.",
          "common.content.groupboard.from.buddy":
            "%1 grup panosunu g\xfcncelledi.",
          "common.content.groupboard.from.me": "Grup Panosu g\xfcncellendi.",
          "common.content.home.shared":
            "%1's adl\u0131 ki\u015finin g\xf6nderisi payla\u015f\u0131ld\u0131.",
          "common.content.home.shared.myself":
            "%1's adl\u0131 ki\u015finin g\xf6nderisi payla\u015f\u0131ld\u0131.",
          "common.content.image": "%1 size bir Resim g\xf6nderdi!",
          "common.content.image.mine": "Bir Resim g\xf6nderdiniz.",
          "common.content.invite": 'Taraf\u0131ndan "%1" davet edildin.',
          "common.content.location.from.buddy": "%1 yer bildirimi g\xf6nderdi.",
          "common.content.location.from.me": "Bir konumu g\xf6nderdiniz.",
          "common.content.mantoman.note.newpost": "Yeni bir not eklendi.",
          "common.content.mantoman.note.newpost.myself":
            "Yeni bir not eklendi.",
          "common.content.normal": "bir mesaj g\xf6nderdi",
          "common.content.pdf": "%1 bir dosyas\u0131 PDF g\xf6nderdi.",
          "common.content.pdf.mine": "Bir dosyas\u0131 PDF g\xf6nderdiniz.",
          "common.content.presence.join": "%1 sohbete kat\u0131ld\u0131.",
          "common.content.presence.join.multiple.plurals.few":
            "%1 dahil olmak \xfczere %n \xfcyeleri sohbete dahil.",
          "common.content.presence.join.multiple.plurals.many":
            "%1 dahil olmak \xfczere %n \xfcyeleri sohbete dahil.",
          "common.content.presence.join.multiple.plurals.one":
            "%1 dahil olmak \xfczere %n \xfcyeleri sohbete dahil.",
          "common.content.presence.join.multiple.plurals.other":
            "%1 dahil olmak \xfczere %n \xfcyeleri sohbete dahil.",
          "common.content.presence.join.multiple.plurals.two":
            "%1 dahil olmak \xfczere %n \xfcyeleri sohbete dahil.",
          "common.content.presence.join.multiple.plurals.zero":
            "%1 dahil olmak \xfczere %n \xfcyeleri sohbete dahil.",
          "common.content.presence.leave": "%1 sohbetten ayr\u0131ld\u0131.",
          "common.content.sticker": "%1 bir sticker g\xf6nderdi.",
          "common.content.sticker.gift.from.buddy":
            "%1 size bir hediye g\xf6nderdi!",
          "common.content.sticker.gift.from.me": "Hediye G\xf6nderildi!",
          "common.content.sticker.mine": "Sticker yollad\u0131n\u0131z.",
          "common.content.theme.gift.from.buddy":
            "%1 size bir hediye g\xf6nderdi!",
          "common.content.theme.gift.from.me": "Hediye G\xf6nderildi!",
          "common.content.timeline.post":
            "G\xf6nderiyi taray\u0131c\u0131da g\xf6r\xfcnt\xfclemek i\xe7in t\u0131klay\u0131n.",
          "common.content.video": "%1 size bir video g\xf6nderdi!",
          "common.content.video.mine": "Bir video g\xf6nderdiniz.",
          "common.continue": "Devam",
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
          "common.date.format.short": "d MMM",
          "common.delete": "Sil",
          "common.desc.macupdate": "L\xfctfen MAC OS'unuzu g\xfcncelleyin.",
          "common.desc.temporary.error":
            "\u0130ste\u011finiz ge\xe7ici bir hatadan dolay\u0131 ger\xe7ekle\u015ftirilemedi. L\xfctfen tekrar deneyin.",
          "common.error.image.scan":
            "S\xfcresi dolmu\u015f g\xf6r\xfcnt\xfclerdeki metni tarayamazs\u0131n\u0131z.",
          "common.error.ocr.failed":
            "Metin taranam\u0131yor. L\xfctfen ba\u015fka bir dil se\xe7ip tekrar deneyin.",
          "common.error.ocr.unknown":
            "G\xf6r\xfcnt\xfc d\xf6n\xfc\u015ft\xfcr\xfclemiyor.",
          "common.error.translation.failed":
            "Metin terc\xfcme edilemiyor. L\xfctfen metni d\xfczenleyin veya ba\u015fka bir dile ayarlay\u0131n ve tekrar deneyin.",
          "common.friday": "Cuma",
          "common.friday.short": "Cum",
          "common.label.auto.slang": "Dili alg\u0131la",
          "common.label.code": "QR kodunu tara",
          "common.label.copy": "Kopyala",
          "common.label.cut": "Kes",
          "common.label.date": "Tarih",
          "common.label.delete": "Sil",
          "common.label.file": "Dosya",
          "common.label.lang.ar": "Arap\xe7a",
          "common.label.lang.de": "Almanca",
          "common.label.lang.en": "\u0130ngilizce",
          "common.label.lang.es": "\u0130spanyolca",
          "common.label.lang.fa": "Fars\xe7a",
          "common.label.lang.hi": "Hint\xe7e",
          "common.label.lang.id": "Endonezce",
          "common.label.lang.ja": "Japonca",
          "common.label.lang.ko": "Korece",
          "common.label.lang.my": "Birman dili",
          "common.label.lang.pt": "Portekiz",
          "common.label.lang.ru": "Rus\xe7a",
          "common.label.lang.th": "Tayca",
          "common.label.lang.vi": "Vietnamca",
          "common.label.lang.zhcn": "\xc7ince (Basitle\u015ftirilmi\u015f)",
          "common.label.lang.zhtw": "\xc7ince (Geleneksel)",
          "common.label.moveURL": "URL'ye git",
          "common.label.ocr": "Metni tara",
          "common.label.ocrlang": "D\xf6n\xfc\u015ft\xfcr\xfcld\xfc",
          "common.label.paste": "Yap\u0131\u015ft\u0131r",
          "common.label.redo": "Yinele",
          "common.label.selectAll": "Hepsini Se\xe7",
          "common.label.slang": "Orijinal",
          "common.label.text.placeholder":
            "Yukar\u0131daki say\u0131y\u0131 girin",
          "common.label.time": "Saat",
          "common.label.tlang": "Terc\xfcme Edildi",
          "common.label.undo": "Geri Al",
          "common.license.disagree": "Kabul etmiyorum",
          "common.license.filename": "chrome://license/Turkish.rtf",
          "common.license.title": "Kullan\u0131m Ko\u015fullar\u0131",
          "common.lineUrltoQR.alert.desc1":
            "Bu \xf6zellik LINE'\u0131n mobil s\xfcr\xfcm\xfcnde kullan\u0131labilir",
          "common.lineUrltoQR.alert.desc2":
            "Bu \xf6zelli\u011fi kullanmak i\xe7in uygulaman\u0131n mobil s\xfcr\xfcm\xfcyle a\u015fa\u011f\u0131daki QR kodunu taray\u0131n.",
          "common.loading": "Y\xfckleniyor...",
          "common.loading.splash": "LINE a\xe7\u0131l\u0131yor...",
          "common.mac.upgrader.title": "G\xfcncelleme Bilgisi",
          "common.menu.copyToClipboard": "Panoya kopyaland",
          "common.menu.delete": "Sil",
          "common.menu.forward": "Payla\u015f",
          "common.menu.reply": "Yan\u0131tla",
          "common.menu.saveAs": "Olarak kaydet\u2026",
          "common.monday": "Pazartesi",
          "common.monday.short": "Pzt",
          "common.msg.already.new.version": "Bu, en son s\xfcr\xfcm.",
          "common.msg.bot.openapi":
            "%1, %2. taraf\u0131ndan y\xf6netilmektedir.\nLY Corporation taraf\u0131ndan hesap y\xf6neticisine sa\u011flanan ki\u015fisel bilgilerin ve sizin hesap y\xf6neticisine sa\u011flad\u0131\u011f\u0131n\u0131z ki\u015fisel bilgilerin i\u015flenmesiyle ilgili daha fazla bilgi i\xe7in l\xfctfen a\u015fa\u011f\u0131daki ba\u011flant\u0131ya bak\u0131n.",
          "common.msg.bot.openapi.agree": "Kabul ediyorum",
          "common.msg.bot.openapi.link": "http://me2.do/xXCU9Yk0",
          "common.msg.bot.openapi.title":
            "Ki\u015fisel bilgileri vermeyi kabul edin",
          "common.msg.checking.version": "G\xfcncelleme denetleniyor...",
          "common.msg.db.optimize":
            "LINE uygulaman\u0131z daha iyi performans\ni\xe7in optimize ediliyor...\nL\xfctfen bekleyin.",
          "common.msg.db.optimize.complete": "Optimizasyon tamamland\u0131.",
          "common.msg.db.optimize.error":
            "Ge\xe7ici bir hata nedeniyle\noptimizasyon tamamlanamad\u0131.\nLINE yeniden ba\u015flat\u0131lacak.",
          "common.msg.favorite.exceeded": "En fazla 100 favoriniz olabilir.",
          "common.msg.has.new.version": "Yeni versiyonu ge\xe7erlidir",
          "common.msg.has.new.version.alert":
            "Yeni versiyonu ge\xe7erlidir.\nG\xfcncelle istiyor musunuz? ",
          "common.msg.invitation.overflow":
            "Maksimum %1 ki\u015fi davet edebilirsiniz.",
          "common.msg.license.opensource": "Yasal uyar\u0131lar",
          "common.msg.sticker.need.mobile.download":
            "\xdccretsiz sticker'lar\u0131 kullanabilmek i\xe7in \xf6ncelikle mobil cihaz\u0131n\u0131za indirmeniz gerekir.\nAyarlar > Sticker'lar > \"Sticker'lar\u0131m\" veya Sticker Ma\u011fazas\u0131 > \xdcCRETS\u0130Z b\xf6l\xfcm\xfcne giderek sticker'lar\u0131 indirebilirsiniz.",
          "common.msg.terms": "Kullan\u0131m Ko\u015fullar\u0131",
          "common.msg.update.button.label": "\u015eimdi g\xfcncelle",
          "common.msg.update.button.label.mac": "App Store'a git",
          "common.msg.warning.autoLogin":
            "Uygulamay\u0131 ba\u015flatt\u0131\u011f\u0131n\u0131zda oturumunuz otomatik olarak a\xe7\u0131lacak.\nKi\u015fisel bilgilerinizi korumak i\xe7in l\xfctfen bunu yaln\u0131zca kendi bilgisayar\u0131n\u0131zda kullan\u0131n.",
          "common.name.postfix": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.note.empty.desc":
            "Notlar'\u0131 kullanarak \xf6nemli bilgileri takip edin ve payla\u015f\u0131n.",
          "common.notice.dontremind": "Tekrar g\xf6sterme",
          "common.notice.label.close": "Kapat",
          "common.notice.meta.url": "line_desktop_notice/TR/7199",
          "common.notice.meta.url.mac": "line_desktop_notice_mac/TR/7200",
          "common.notice.title": "Bildirimler",
          "common.ocr.agree.desc":
            "Bu \xf6zellik kullan\u0131l\u0131rken foto\u011fraflar\u0131n\u0131z sunucular\u0131m\u0131za g\xf6nderilir. Bu \xf6zellik i\xe7in LY Corporation'a foto\u011fraf sa\u011flamay\u0131 kabul ediyor musunuz?",
          "common.ocr.agree.title":
            "Foto\u011fraf sa\u011flama \xf6zelli\u011fini etkinle\u015ftirin",
          "common.ocr.mlstatus.off":
            "Hizmetin iyile\u015ftirilmesi i\xe7in g\xf6r\xfcnt\xfclerinizi vermeyi kabul etmediniz. Kabul durumunuzu LINE'\u0131n mobil s\xfcr\xfcm\xfcnde de\u011fi\u015ftirebilirsiniz.",
          "common.ocr.mlstatus.on":
            "Hizmetin iyile\u015ftirilmesi i\xe7in g\xf6r\xfcnt\xfclerinizi vermeyi kabul ederseniz bu simge parlak g\xf6r\xfcn\xfcr. Kabul durumunuzu LINE'\u0131n mobil s\xfcr\xfcm\xfcnde de\u011fi\u015ftirebilirsiniz.",
          "common.ocr.tooltip":
            "An\u0131nda \xe7eviri \xf6zelli\u011fini deneyin!",
          "common.ocrlang.tooltip":
            "G\xf6r\xfcnt\xfcy\xfc d\xf6n\xfc\u015ft\xfcrmek istedi\u011finiz dili se\xe7in.",
          "common.off": "Kapal\u0131",
          "common.on": "A\xe7\u0131k",
          "common.picture.popup.saveImageError":
            "G\xf6rsel kaydetme ba\u015far\u0131s\u0131z.",
          "common.picture.popup.showImageError":
            "G\xf6rsel y\xfckleme ba\u015far\u0131s\u0131z.",
          "common.pm": "PM",
          "common.popup.force.update":
            "LINE masa\xfcst\xfc s\xfcr\xfcm\xfcn\xfc g\xfcncellemeniz gerekmektedir.\nG\xfcncellemezseniz, LINE do\u011fru \u015fekilde \xe7al\u0131\u015fmayabilir.",
          "common.popup.force.update.confirm":
            "Kullanabilirsiniz LINE g\xfcncelledikten sonra",
          "common.popup.force.update.inapp":
            "LINE masa\xfcst\xfc s\xfcr\xfcm\xfcn\xfc g\xfcncellemeniz gerekmektedir.\nG\xfcncellemezseniz, LINE do\u011fru \u015fekilde \xe7al\u0131\u015fmayabilir.",
          "common.popup.force.update.later":
            "Bir saat sonra tekrar bildirim g\xf6nderilecektir.",
          "common.popup.queryUpgrade":
            "Yeni s\xfcr\xfcm mevcut.\nG\xfcncellemek istiyor musunuz? ",
          "common.popup.sendkey.msg.mac": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.popup.sendkey.msg.win": "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "common.popup.serverAPI.error.update":
            "LINE\u2019\u0131n g\xfcncellenmesi gerekiyor.\n\u015eimdi g\xfcncellensin mi?",
          "common.prepare.service":
            "Zaten en son s\xfcr\xfcm\xfcn\xfc kullan\u0131yorsan\u0131z,\nkulland\u0131\u011f\u0131n\u0131z i\u015fletim sistemi i\xe7in haz\u0131rlan\u0131yor demektir.",
          "common.push.mac.versionUpdate":
            "L\xfctfen LINE uygulaman\u0131z\u0131 en son s\xfcr\xfcm\xfcne g\xfcncelleyin.",
          "common.report.done": "\u015eikayet G\xf6nderildi!",
          "common.report.reason.desc":
            "L\xfctfen \u015fikayet sebebinizi a\xe7\u0131klay\u0131n.",
          "common.request.error":
            "Bilinmeyen bir hata olu\u015ftu.\nL\xfctfen daha sonra tekrar deneyin.",
          "common.saturday": "Cumartesi",
          "common.saturday.short": "Cts",
          "common.search.error.length": "En az 2 karakter girmelisiniz.",
          "common.search.invalidtext":
            "Anahtar kelimeniz \xf6zel karakterler i\xe7eremez. L\xfctfen farkl\u0131 bir anahtar kelime girin.",
          "common.seeall": "T\xfcm\xfcne bak",
          "common.share.url.copied": "Ba\u011flant\u0131 kopyaland\u0131.",
          "common.sunday": "Pazar",
          "common.sunday.short": "Paz",
          "common.thursday": "Per\u015fembe",
          "common.thursday.short": "Per",
          "common.time.format": "HH:mm",
          "common.toast.album.delete": "Alb\xfcm zaten silindi.",
          "common.toast.album.rename": "Alb\xfcm\xfc Yeniden Adland\u0131r",
          "common.toast.albumCreated": "Yeni Alb\xfcm olu\u015fturuldu. ",
          "common.toast.audio": "Sesli mesaj g\xf6nderildi.",
          "common.toast.chatevent.unknown": "Bu bilgisi kullan\u0131lamaz.",
          "common.toast.contact": "Ki\u015fi payla\u015f\u0131ld\u0131.",
          "common.toast.file": "Dosya g\xf6nderildi.",
          "common.toast.gift": "Hediye G\xf6nderildi.",
          "common.toast.image": "Resim g\xf6nderildi.",
          "common.toast.inviteGroup": "Bir gruba davet edilir.",
          "common.toast.label.newMessage": "Yeni mesaj geldi.",
          "common.toast.linemusic": "\u015eark\u0131 payla\u015ft\u0131.",
          "common.toast.location": "",
          "common.toast.note": "Yeni bir not eklendi.",
          "common.toast.receiverequest": "Bekleyen para iste\u011fi.",
          "common.toast.sticker": "Sticker g\xf6nderildi.",
          "common.toast.timeline.group.invite": "Bir gruba davet edilir.",
          "common.toast.timeline.new.comment": "Hemen bak\u0131n.",
          "common.toast.timeline.new.mention":
            "bana bir yorum b\u0131rakt\u0131.",
          "common.toast.timeline.new.post": "Yeni bir not eklendi.",
          "common.toast.timeline.new.sticker": "Hemen bak\u0131n.",
          "common.toast.timeline.title.comment": "%1 Yorumu",
          "common.toast.timeline.title.like": "%1 Be\u011fenisi",
          "common.toast.timeline.title.recomment": "%1 Yeni Yorumu",
          "common.toast.video": "Film g\xf6nderildi.",
          "common.toast.voip.call": "Cevapla",
          "common.toast.voip.call.msg": "Gelen arama...",
          "common.toast.voip.refuse": "Yoksay",
          "common.today": "Bug\xfcn",
          "common.translation.apply.alert":
            "Orijinal metinden en fazla 5.000 karakter terc\xfcme edebilirsiniz. ",
          "common.translation.apply.imagedirect": "An\u0131nda \xe7eviri",
          "common.translation.imagedirect.failed":
            "Ge\xe7ici bir hata olu\u015ftu. L\xfctfen dil \xe7iftini de\u011fi\u015ftirin veya daha sonra tekrar deneyin.",
          "common.translation.imagedirect.tooltip":
            "Metni an\u0131nda \xe7evirmek ve \xe7eviriyi foto\u011frafta g\xf6stermek i\xe7in bu se\xe7ene\u011fi etkinle\u015ftirin.",
          "common.tuesday": "Sal\u0131",
          "common.tuesday.short": "Sal",
          "common.unsupported.version.message":
            "LINE'\u0131n ge\xe7erli s\xfcr\xfcm\xfc bu \xf6zelli\u011fi desteklemiyor.\nL\xfctfen LINE'\u0131n en son s\xfcr\xfcm\xfcne g\xfcncelleyin.",
          "common.update.popup.win10":
            "L\xfctfen LINE'\u0131 en son s\xfcr\xfcme g\xfcncelleyin.",
          "common.updater": "\u015eimdi G\xfcncelle",
          "common.updater.autoUpdate": "Otomatik olarak g\xfcncelle",
          "common.updater.autoUpdate.apply":
            "<![CDATA[LINE en yeni s\xfcr\xfcme g\xfcncellensin mi?\n<font color='#9e9e9e'>G\xfcncelleme yap\u0131ld\u0131\u011f\u0131nda LINE yeniden ba\u015flat\u0131lacak.\n</font>]]>",
          "common.updater.forceUpdate.apply":
            "Yeni bir LINE s\xfcr\xfcm\xfc mevcut.\nTamam\u2019\u0131 se\xe7erseniz LINE yeniden ba\u015flat\u0131lacak.",
          "common.updater.newVersion.confirm":
            "LINE s\xfcr\xfcm\xfcn\xfcz g\xfcncel.",
          "common.updater.newVersion.download.apply":
            "<![CDATA[\u0130ndirme tamamland\u0131.\n\u015eimdi y\xfcklensin mi?\n<font color='#9e9e9e'>Tamam\u2019\u0131 se\xe7erseniz LINE yeniden ba\u015flat\u0131lacak.</font>]]>",
          "common.updater.newVersion.downloading":
            "En son LINE s\xfcr\xfcm\xfc indiriliyor...\nL\xfctfen bekleyin.",
          "common.updater.newVersion.incompleted":
            "G\xfcncelleme Tamamlanmad\u0131.\nL\xfctfen daha sonra tekrar deneyin.",
          "common.updater.newVersion.low.hardDisk":
            "Yeterli disk alan\u0131 yok.\nL\xfctfen biraz disk alan\u0131 bo\u015falt\u0131p\ntekrar deneyin.",
          "common.updater.notice.description":
            "Bu G\xfcncellemedeki Yenilikler Nelerdir?",
          "common.updater.notice.history": "G\xfcncelleme Ge\xe7mi\u015fi",
          "common.updater.notice.title": "G\xfcncelle",
          "common.updater.notice.updated":
            "En yeni s\xfcr\xfcm\xfc \u015fimdi kullanabilirsiniz",
          "common.wednesday": "\xc7ar\u015famba",
          "common.wednesday.short": "\xc7ar",
          "common.yearMonth.format": "MMMM yyyy",
          "common.yesterday": "D\xfcn",
          "creategroup.button.create": "Olu\u015ftur",
          "creategroup.checkbox.desc.membersjoinautomatically":
            "\xdcyeler davet edildikleri anda gruba kat\u0131l\u0131r. \xdcyelerin her zaman gruba kat\u0131lmadan \xf6nce daveti kabul etmesini zorunlu k\u0131lmak i\xe7in bu ayar\u0131 devre d\u0131\u015f\u0131 b\u0131rak\u0131n. ",
          "creategroup.checkbox.title.membersjoinautomatically":
            "\xdcyeler otomatik olarak kat\u0131l\u0131r",
          "creategroup.label.membercount": "\xdcyeler",
          "creategroup.placeholder.entergroupname": "Bir grup ad\u0131 girin",
          "creategroup.placerholder.defaultname.autojoinoff":
            "%1 ki\u015fisinin grubu",
          "creategroup.popup.desc.100memberswarning":
            "\xdcyeler, 100'den fazla \xfcyesi olan gruplara otomatik olarak kat\u0131lamaz. Yeni \xfcyelerin gruba kat\u0131lmak i\xe7in \xf6ncelikle daveti kabul etmeleri gerekir.\n\xdcyelerin gruba otomatik olarak kat\u0131lmas\u0131n\u0131 sa\u011flamak i\xe7in grubunuzun \xfcye say\u0131s\u0131n\u0131 en fazla 100 \xfcyeyle s\u0131n\u0131rlay\u0131n.",
          "creategroup.popup.desc.invitelocked":
            "Bu ayar\u0131 kapal\u0131 tutmak i\xe7in grubunuzu en fazla 100 \xfcyeyle s\u0131n\u0131rlay\u0131n.",
          "creategroup.popup.desc.inviteonwarning":
            "100'den fazla \xfcyesi olan gruplarda, yeni \xfcyelerin kat\u0131lmak i\xe7in \xf6ncelikle daveti kabul etmeleri gerekir.\nBu ayar\u0131 kapal\u0131 tutmak i\xe7in grubunuzu en fazla 100 \xfcyeyle s\u0131n\u0131rlay\u0131n.",
          "creategroup.popup.desc.toomanygroups":
            "Maksimum LINE grubu say\u0131s\u0131na ula\u015ft\u0131n\u0131z. Yeni bir grup olu\u015fturmak i\xe7in ilk olarak \xf6nceki bir gruptan ayr\u0131l\u0131n ve yeniden deneyin.",
          "creategroup.popup.title.100memberswarning":
            "\xdcyeler otomatik olarak kat\u0131lamaz.",
          "creategroup.popup.title.invitelocked": "Davet ayar\u0131 kilitlendi",
          "creategroup.popup.title.inviteonwarning":
            "\xdcyeler kat\u0131lmak i\xe7in davetleri kabul etmelidir",
          "creategroup.popup.title.toomanygroups":
            "Grup s\u0131n\u0131r\u0131na ula\u015f\u0131ld\u0131",
          "creategroup.popup.title.toomanymembers":
            "Grup \xfcyelerinin say\u0131s\u0131n\u0131 azalt\u0131n",
          "creategroup.title.setupProfile": "Grup profili olu\u015ftur",
          "creategroup.toggle.desc.requireinvite":
            "Yeni \xfcyeler gruba kat\u0131lmak i\xe7in daveti kabul etmelidir. Bu ayar, grup olu\u015fturulduktan sonra devre d\u0131\u015f\u0131 b\u0131rak\u0131lamaz.",
          "creategroup.toggle.title.requireinvite":
            "\xdcyeler daveti kabul etmelidir",
          "creategroup.tooltip.groupname":
            "Arkada\u015flar\u0131n\u0131za bu grubun ne i\xe7in oldu\u011funu anlatan bir isim se\xe7in.",
          "creategrouppopup.desc.toomanymembers":
            "\xdcyelerin gruba otomatik olarak kat\u0131lmas\u0131n\u0131 sa\u011flamak i\xe7in grubunuzun \xfcye say\u0131s\u0131n\u0131 en fazla 100 \xfcyeyle s\u0131n\u0131rlay\u0131n.",
          "deletedata.chatHisotry.all.desc.confirm":
            "T\xfcm cihazlar\u0131n\u0131zdaki t\xfcm sohbet ge\xe7mi\u015fi silinsin mi? Sohbet ge\xe7mi\u015fi silindikten sonra kurtar\u0131lamaz.",
          "deletedata.chatHisotry.onlypc.desc.confirm":
            "Bu cihazdaki t\xfcm sohbet ge\xe7mi\u015fi silinsin mi? Sohbet ge\xe7mi\u015fi silindikten sonra kurtar\u0131lamaz. ",
          "desktop.addchatfolder.button.add": "Olu\u015ftur",
          "desktop.addchatfolder.placeholder.entername":
            "Klas\xf6r ad\u0131n\u0131 girin",
          "desktop.addchatfolder.title.addnewfolder":
            "Yeni klas\xf6r olu\u015ftur",
          "desktop.addchatpopup.button.add": "Ekle",
          "desktop.addchatpopup.button.cancel": "\u0130ptal",
          "desktop.addchatpopup.desc.allchats": "T\xfcm sohbetler",
          "desktop.addchatpopup.desc.selected": "%1 sohbet\xa0se\xe7ildi",
          "desktop.addchatpopup.placeholder.search": "Ara",
          "desktop.addchatpopup.title.addchats": "Bu klas\xf6re sohbet ekle",
          "desktop.addfriends.desc.recommendedai": "AI hesap \xf6nerileri",
          "desktop.addtoalbum.button.cancel": "\u0130ptal",
          "desktop.addtoalbum.button.createalbum": "Alb\xfcm olu\u015ftur",
          "desktop.addtoalbum.title.selectalbum": "Alb\xfcm se\xe7",
          "desktop.album.allalbums.button.albums": "Alb\xfcm",
          "desktop.album.allalbums.button.photos": "Foto\u011fraflar",
          "desktop.album.allalbums.desc.albumsempty":
            "T\xfcm sohbetlerinizde olu\u015fturulan alb\xfcmler burada g\xf6sterilir.",
          "desktop.album.allalbums.desc.dateformat": "MMMM yyyy",
          "desktop.album.allalbums.desc.photosempty":
            "Alb\xfcmlere eklenen \xf6\u011feler burada g\xf6sterilir.",
          "desktop.album.allalbums.menu.lastcreated": "Son olu\u015fturma",
          "desktop.album.allalbums.menu.lastupdated": "Son g\xfcncelleme",
          "desktop.album.allalbums.title.allalbums": "T\xfcm alb\xfcmler",
          "desktop.album.allalbums.title.photosempty":
            "Hen\xfcz \xf6\u011fe yok.",
          "desktop.album.allalbums.title.unableshow":
            "Alb\xfcmler g\xf6sterilemiyor. \nL\xfctfen tekrar deneyin.",
          "desktop.album.allalbums.tooltip.allalbums":
            "Sohbet listenizde gizledi\u011finiz veya sildi\u011finiz sohbetler dahil olmak \xfczere t\xfcm sohbetlerinizdeki alb\xfcmleriniz burada g\xf6sterilir.",
          "desktop.album.button.add": "Ekle",
          "desktop.album.button.cancel": "\u0130ptal",
          "desktop.album.button.create": "Olu\u015ftur",
          "desktop.album.button.namechangedone": "Kaydet",
          "desktop.album.button.share": "Payla\u015f",
          "desktop.album.button.sharealbum": "Alb\xfcm\xfc payla\u015f",
          "desktop.album.commonkey.button.tryagain": "Tekrar Dene",
          "desktop.album.desc.albumphotos.other": "%n foto\u011fraf",
          "desktop.album.desc.draganddrop":
            "\xd6\u011feleri s\xfcr\xfckleyip buraya b\u0131rak\u0131n.",
          "desktop.album.error.sharealbum":
            "K\u0131sa zamanda \xe7ok fazla alb\xfcm payla\u015ft\u0131n\u0131z.",
          "desktop.album.main.tooltip.albumsallchats":
            "T\xfcm sohbetlerinizdeki alb\xfcmleri tek bir yerde g\xf6r\xfcn.",
          "desktop.album.max.media.alert":
            "En fazla %1 \xf6\u011fe g\xf6nderebilirsiniz.\u200e",
          "desktop.album.photos.button.seealbum": "Alb\xfcm\xfc g\xf6ster",
          "desktop.album.popupdesc.sharealbum":
            "Bu alb\xfcm sohbette payla\u015f\u0131ls\u0131n m\u0131?",
          "desktop.album.tooltip.nowsharealbum":
            "Art\u0131k sohbette alb\xfcm payla\u015fabilirsiniz.",
          "desktop.album.viewer.button.seealbum": "Alb\xfcm\xfc g\xf6ster",
          "desktop.album.viewer.title.unableshow":
            "\xd6\u011fe g\xf6sterilemiyor.\nL\xfctfen tekrar deneyin.",
          "desktop.backgroundsetting.button.deletecover":
            "Profil kapa\u011f\u0131n\u0131 sil",
          "desktop.backgroundsetting.button.selectphoto":
            "Foto\u011fraf se\xe7",
          "desktop.blankchatfolder.button.addchat": "Sohbet ekle",
          "desktop.blankchatfolder.desc.nochats":
            "Hen\xfcz bu klas\xf6re sohbet eklenmedi.",
          "desktop.blankchatfolder.desc.nochats1":
            "Sohbet eklemek i\xe7in a\u015fa\u011f\u0131daki d\xfc\u011fmeye t\u0131klay\u0131n veya sohbeti buraya s\xfcr\xfckleyin.",
          "desktop.calendar.button.recent": "En son",
          "desktop.calendar.desc.month": "MMM",
          "desktop.calendar.desc.year": "yyyy",
          "desktop.callsettings.desc.showmessagealerts":
            "Arama s\u0131ras\u0131nda al\u0131nan yeni sohbet mesajlar\u0131 i\xe7in bildirim uyar\u0131lar\u0131 g\xf6ster",
          "desktop.chat.choose.empty":
            "Se\xe7ebilece\u011finiz bir sohbet yok.",
          "desktop.chat.popup.blockeduser.button.close": "\u015eikayet etme",
          "desktop.chat.popup.blockeduser.button.report":
            "\u015eikayeti g\xf6nder",
          "desktop.chat.popup.blockeduser.desc":
            "Bu ki\u015finin bot veya k\xf6t\xfc ama\xe7l\u0131 bir kullan\u0131c\u0131 olabilece\u011fini d\xfc\u015f\xfcn\xfcyorsan\u0131z \u015fikayetinizi g\xf6ndermeniz LINE'\u0131n g\xfcvenli ve emniyetli tutulmas\u0131na yard\u0131mc\u0131 olur.",
          "desktop.chat.popup.blockeduser.title": "%1 \u015fikayet edilsin mi?",
          "desktop.chat.toast.chatunhidden":
            "Bu sohbet art\u0131k gizli de\u011fil.",
          "desktop.chat.warning.btn.addfriend": "Arkada\u015f ekle",
          "desktop.chat.warning.btn.blockfriend": "Engelle",
          "desktop.chat.warning.btn.decline": "Reddet",
          "desktop.chat.warning.btn.join": "Kat\u0131l",
          "desktop.chat.warning.btn.leave": "Ayr\u0131l",
          "desktop.chat.warning.btn.report": "\u015eikayet et",
          "desktop.chat.warning.btn.unblockfriend": "Engeli Kald\u0131r",
          "desktop.chatfolder.tab.all": "T\xfcm\xfc",
          "desktop.chatfolder.tab.friends": "Arkada\u015flar",
          "desktop.chatfolder.tab.groups": "Gruplar",
          "desktop.chatfolder.tab.newfolder": "Klas\xf6r %1",
          "desktop.chatfolder.tab.officialaccounts": "Resmi hesaplar",
          "desktop.chatfolder.tab.openchats": "OpenChat'ler",
          "desktop.chatfolder.toast.addedtofoldermulti":
            "Klas\xf6re %1 sohbet eklendi.",
          "desktop.chatfolder.toast.addedtofolderone":
            "Klas\xf6re 1 sohbet eklendi.",
          "desktop.chatfolder.toast.nameinuse":
            "Ayn\u0131 ad\u0131 ta\u015f\u0131yan bir klas\xf6r var. L\xfctfen farkl\u0131 bir ad girin.",
          "desktop.chatfolder.toast.removedchatmulti":
            "%1 sohbet varsay\u0131lan klas\xf6r\xfcne ta\u015f\u0131nd\u0131.",
          "desktop.chatfolder.toast.removedchatone":
            "1 sohbet varsay\u0131lan klas\xf6r\xfcne ta\u015f\u0131nd\u0131.",
          "desktop.chatfolder.toast.uptohund":
            "Klas\xf6r ba\u015f\u0131na en fazla 100 sohbet ekleyebilirsiniz.",
          "desktop.chatfolderguide.button.learnmore": "Daha fazla bilgi",
          "desktop.chatfolderguide.desc.desc1":
            "Klas\xf6r eklemek i\xe7in sa\u011f \xfcst k\xf6\u015fedeki d\xfczenle simgesine t\u0131klay\u0131n",
          "desktop.chatfolderguide.desc.desc2":
            "Bir klas\xf6r\xfcn ayarlar\u0131n\u0131 de\u011fi\u015ftirmek i\xe7in klas\xf6re sa\u011f t\u0131klay\u0131n",
          "desktop.chatfolderguide.desc.desc3":
            "Sohbet klas\xf6rlerini s\xfcr\xfckleyerek klas\xf6r s\u0131ras\u0131n\u0131 de\u011fi\u015ftirin",
          "desktop.chatfolderguide.desc.editdragchange":
            "S\u0131ray\u0131 de\u011fi\u015ftirmek i\xe7in klas\xf6rleri s\xfcr\xfckleyin. Yeni klas\xf6r olu\u015fturmak i\xe7in + simgesine t\u0131klay\u0131n.",
          "desktop.chatfolderguide.desc.title":
            "Zahmet etmeden d\xfczene kavu\u015fun! Sohbetlerinizi sohbet klas\xf6rleriyle d\xfczenleyin",
          "desktop.chatfoldermenu.button.addchat": "Sohbet ekle",
          "desktop.chatfoldermenu.button.changefoldername":
            "Klas\xf6r ad\u0131n\u0131 de\u011fi\u015ftir",
          "desktop.chatfoldermenu.button.deletefolder": "Klas\xf6r\xfc sil",
          "desktop.chatfoldermenu.button.mutefolder":
            "Klas\xf6r bildirimlerini kapat",
          "desktop.chatfoldermenu.button.readall":
            "T\xfcm\xfc okundu i\u015faretle",
          "desktop.chatfoldermenu.button.removechat": "Sohbeti kald\u0131r",
          "desktop.chatfoldermenu.button.unmutefolder":
            "Klas\xf6r bildirimlerini a\xe7",
          "desktop.chatfoldermenu.toast.unabletoadd":
            "T\xfcm sohbetlerinizi tek bir klas\xf6re ekleyemezsiniz.",
          "desktop.chatfoldermenu.toast.uptoten":
            "En fazla 10 sohbet klas\xf6r\xfc olu\u015fturabilirsiniz.",
          "desktop.chatfolderpopup.button.ok": "Tamam",
          "desktop.chatfolderpopup.desc.chatfolder":
            "Sohbetlerinizi istedi\u011finiz \u015fekilde gruplamak ve daha kolay bulmak i\xe7in sohbet klas\xf6rlerini kullan\u0131n. Ba\u015flamak i\xe7in Sohbetler sekmesinin \xfcst k\u0131sm\u0131ndaki \xe7ubuktan + simgesine t\u0131klay\u0131n.",
          "desktop.chatfolderpopup.desc.folderlineup":
            "Her klas\xf6r\xfc istedi\u011finiz noktaya s\xfcr\xfckleyerek sohbet klas\xf6rlerinin s\u0131ras\u0131n\u0131 de\u011fi\u015ftirin.",
          "desktop.chatfolderpopup.desc.managefolder":
            "Bir klas\xf6r\xfcn ayarlar\u0131n\u0131 de\u011fi\u015ftirmek i\xe7in klas\xf6re sa\u011f t\u0131klay\u0131n.",
          "desktop.chatfolderpopup.desc.unabletosync":
            "Ge\xe7ici bir hata nedeniyle sohbet klas\xf6rleri senkronize edilemiyor. Sa\u011f \xfcst k\xf6\u015fedeki senkronizasyon simgesine t\u0131klay\u0131p tekrar deneyin.",
          "desktop.chatfolderpopup.title.chatfolder":
            "Sohbetlerinizi sohbet klas\xf6rleriyle d\xfczenleyin",
          "desktop.chatfolderpopup.title.folderlineup":
            "Sohbet klas\xf6rlerinizin s\u0131ralamas\u0131n\u0131 de\u011fi\u015ftirin",
          "desktop.chatfolderpopup.title.managefolder":
            "Sohbet klas\xf6rlerinizi kolayca y\xf6netin",
          "desktop.chatfoldersetting.button.cancel": "\u0130ptal",
          "desktop.chatfoldersetting.button.disable":
            "Devre d\u0131\u015f\u0131 b\u0131rak",
          "desktop.chatfoldersetting.desc.disable":
            "Sohbet klas\xf6rleri \xf6zelli\u011fi devre d\u0131\u015f\u0131 b\u0131rak\u0131ld\u0131\u011f\u0131nda t\xfcm klas\xf6r ayarlar\u0131 silinir. Sohbet klas\xf6rleri devre d\u0131\u015f\u0131 b\u0131rak\u0131ls\u0131n m\u0131?",
          "desktop.chatfoldertooltip.desc.createchatfolder":
            "Sohbetlerinizi d\xfczenlemek i\xe7in sohbet klas\xf6rleri olu\u015fturun.",
          "desktop.chatlist.button.hide": "Daha az",
          "desktop.chatmenu.button.addtoalbum": "Alb\xfcme ekle",
          "desktop.chatssettings.desc.chateffects":
            "Sohbetlerde arka plan animasyonlar\u0131 g\xf6sterin.",
          "desktop.chatssettings.subtitle.chateffects":
            "Arka plan animasyonlar\u0131",
          "desktop.codecerror.desc.unabletoplay":
            "Bu dosya, video codec hatas\u0131 nedeniyle oynat\u0131lam\u0131yor.",
          "desktop.common.go.to.settings": "Ayarlar'a Git",
          "desktop.common.index.chats": "Sohbet",
          "desktop.common.index.favorites": "Favoriler",
          "desktop.common.index.friends": "Arkada\u015flar",
          "desktop.common.index.groups": "Gruplar",
          "desktop.common.index.recentlyshared":
            "Payla\u015f\u0131m yap\u0131lan son sohbetler",
          "desktop.common.report": "\u015eikayet et",
          "desktop.defaultprofile.button.cancel": "\u0130ptal",
          "desktop.defaultprofile.button.save": "Kaydet",
          "desktop.defaultprofile.title.selectdefault":
            "Varsay\u0131lanlardan se\xe7",
          "desktop.deletefolderpopup.button.cancel": "\u0130ptal",
          "desktop.deletefolderpopup.button.delete": "Sil",
          "desktop.deletefolderpopup.desc.deletefolder":
            '"%1" klas\xf6r\xfc silinsin mi? Bu klas\xf6r silindi\u011finde i\xe7indeki t\xfcm sohbetler otomatik olarak varsay\u0131lan klas\xf6rlerine ta\u015f\u0131n\u0131r.',
          "desktop.download.popup.call": "Arama eklentisi indiriliyor...",
          "desktop.download.popup.calldone":
            "\u0130ndirme tamamland\u0131. Art\u0131k arama yapabilir ve alabilirsiniz.",
          "desktop.download.popup.plugin":
            "GIF yakalama eklentisi indiriliyor...",
          "desktop.download.popup.plugindone":
            "\u0130ndirme tamamland\u0131. Art\u0131k GIF yakalayabilirsiniz.",
          "desktop.download.popup.pluginnetworkerror":
            "Eklenti indirilemedi. A\u011f ba\u011flant\u0131n\u0131z\u0131 kontrol edin ve tekrar deneyin.",
          "desktop.download.popup.pluginnospace":
            "Cihaz\u0131n\u0131zda yeterli alan yok. Depolama alan\u0131nda yer a\xe7\u0131n ve tekrar deneyin.",
          "desktop.download.popup.pluginunexpectederror":
            "Eklenti indirilemiyor.\nL\xfctfen tekrar deneyin.",
          "desktop.download.popup.viewer":
            "G\xf6r\xfcnt\xfcleyici eklentisi indiriliyor...",
          "desktop.download.popup.viewerdone":
            "\u0130ndirme tamamland\u0131. G\xf6r\xfcnt\xfcleyicide a\xe7mak i\xe7in bir medya dosyas\u0131 se\xe7in.",
          "desktop.dragndrop.button.addfiles": "Dosya ekle",
          "desktop.dragndrop.button.cancelcompress": "\u0130ptal",
          "desktop.dragndrop.button.send": "G\xf6nder (%1)",
          "desktop.dragndrop.button.sendcompressed": "G\xf6nder",
          "desktop.dragndrop.checkbox.alwayscompress":
            "Her zaman s\u0131k\u0131\u015ft\u0131r ve g\xf6nder",
          "desktop.dragndrop.title.sendfile": "Dosya g\xf6nder",
          "desktop.dragndrop.toast.upto50":
            "En fazla 50 dosya g\xf6nderebilirsiniz.",
          "desktop.error.popup.noverification":
            "Do\u011frulama i\u015flemi LINE'\u0131n mobil s\xfcr\xfcm\xfcnde ba\u015far\u0131s\u0131z oldu.\nL\xfctfen tekrar deneyin.",
          "desktop.errorpopup.desc.downloadback":
            "Eklentinin indirilmesi biraz uzun s\xfcrebilir. Bu pencereyi kapat\u0131p indirme i\u015flemine arka planda devam etmek ister misiniz?",
          "desktop.errorpopup.desc.downloadno": "Pencerede kal",
          "desktop.errorpopup.desc.downloadyes": "Kapat ve devam et",
          "desktop.errorpopup.desc.expired":
            "S\xfcresi doldu\u011fu i\xe7in bu dosya yeniden g\xf6nderilemiyor.",
          "desktop.errorpopup.desc.remobile":
            "Sunucu hatas\u0131 nedeniyle mesaj g\xf6nderilemedi. L\xfctfen LINE'\u0131n mobil s\xfcr\xfcm\xfcnde tekrar deneyin.",
          "desktop.errorpopup.desc.remobiles":
            "Sunucu hatas\u0131 nedeniyle mesaj gruba g\xf6nderilemedi. L\xfctfen LINE'\u0131n mobil s\xfcr\xfcm\xfcnde tekrar deneyin.",
          "desktop.errorpopup.desc.renewmembership":
            "LYP Premium \xfcyeli\u011finizin durumu de\u011fi\u015fti\u011fi i\xe7in \xf6\u011fe eklenemiyor. \xdcyelik durumunuzu kontrol edip, tekrar deneyin.",
          "desktop.errorpopup.desc.revisedtermsofuse":
            "Agreement Regarding Use of Information'\u0131 hen\xfcz kabul etmedi\u011finiz i\xe7in \xf6\u011fe eklenemiyor. L\xfctfen mobil cihaz\u0131n\u0131zda video ya da foto\u011fraf\u0131 bir alb\xfcme orijinal kalitesinde eklemeye \xe7al\u0131\u015f\u0131n ve d\xfczenlenmi\u015f politikalar\u0131 kabul edin.",
          "desktop.errorpopup.title.resend": "Mesaj\u0131 yeniden g\xf6nder",
          "desktop.favoritethreads.desc.nothreads":
            "\u0130lgili yaz\u0131\u015fman\u0131n sa\u011f \xfcst k\xf6\u015fesindeki y\u0131ld\u0131z simgesine dokunarak ilgilendi\u011finiz yaz\u0131\u015fmalar\u0131 favorilerinize ekleyin.",
          "desktop.fileshare.button.cancel": "\u0130ptal",
          "desktop.fileshare.button.open": "Payla\u015f",
          "desktop.fileshare.desc.unsafefile":
            "A\u015fa\u011f\u0131daki dosyay\u0131 ba\u015fka bir kullan\u0131c\u0131yla payla\u015fman\u0131z istendi. Bu dosya payla\u015f\u0131ls\u0131n m\u0131?\n\n%1",
          "desktop.foldermenu.button.moveto": "\u015euraya ta\u015f\u0131:",
          "desktop.friends.choose.empty":
            "Se\xe7ebilece\u011finiz bir arkada\u015f\u0131n\u0131z yok",
          "desktop.friendssearch.title.friendssearch": "Arkada\u015f arama",
          "desktop.gprofilesetting.button.capturescreen":
            "Ekran g\xf6r\xfcnt\xfcs\xfc al",
          "desktop.gprofilesetting.button.createtext":
            "Metin profil olu\u015ftur",
          "desktop.gprofilesetting.button.deleteprofile":
            "Profil foto\u011fraf\u0131n\u0131 sil",
          "desktop.gprofilesetting.button.selectdefault":
            "Varsay\u0131lanlardan se\xe7",
          "desktop.gprofilesetting.button.selectphoto": "Foto\u011fraf se\xe7",
          "desktop.group.choose.empty": "Se\xe7ebilece\u011finiz bir grup yok.",
          "desktop.hevcerror.desc.unabletoplay":
            "Bu dosya bi\xe7imi oynat\u0131lam\u0131yor. Dosya indirilsin mi?",
          "desktop.installer.button.install": "Y\xfckle",
          "desktop.installer.checkbox.iagree":
            "[LY Corporation Common Terms of Use|https://terms.line.me/line_terms?lang=en] ko\u015fullar\u0131n\u0131 kabul ediyorum.",
          "desktop.installer.desc.installingline":
            "LINE y\xfckleniyor. L\xfctfen bekleyin.",
          "desktop.installer.desc.readandagree":
            "LINE'\u0131 y\xfcklemek i\xe7in kullan\u0131m ko\u015fullar\u0131n\u0131 okuyun ve kabul edin.",
          "desktop.installercancel.button.no": "Hay\u0131r",
          "desktop.installercancel.button.yes": "Evet",
          "desktop.installercancel.desc.stopinstalling":
            "LINE'\u0131 y\xfckleme i\u015fleme durdurulsun mu?",
          "desktop.installerror.button.download": "\u0130ndir",
          "desktop.installerror.desc.badfile":
            "LINE d\xfczg\xfcn y\xfcklenmedi. L\xfctfen y\xfckleme dosyas\u0131n\u0131 indirip tekrar deneyin.",
          "desktop.leavescreenpopup.button.cancel": "\u0130ptal",
          "desktop.leavescreenpopup.button.leave": "Ayr\u0131l",
          "desktop.line.albums.desc.photosnotyet":
            "T\xfcm foto\u011fraflar\u0131 g\xf6r\xfcnt\xfcleme \xf6zelli\u011fi yak\u0131nda kullan\u0131ma sunulacak.",
          "desktop.line.chatmenu.title.albumsempty": "Hen\xfcz alb\xfcm yok.",
          "desktop.login.button.gotoemailwithPhoneNumber":
            "E-posta ile Giri\u015f",
          "desktop.login.button.gotosmartphone":
            "Ak\u0131ll\u0131 telefonumla giri\u015f",
          "desktop.login.button.loginwithsmartphone":
            "Ak\u0131ll\u0131 telefonunuzla giri\u015f yap\u0131n",
          "desktop.login.desc.transferring":
            "LINE hesab\u0131n\u0131z\u0131 aktarma",
          "desktop.login.desc.verification":
            "Ak\u0131ll\u0131 telefonunuzda LINE'a eri\u015fmekle ilgili sorun ya\u015f\u0131yorsan\u0131z l\xfctfen LINE hesab\u0131n\u0131z\u0131 aktar\u0131n.",
          "desktop.login.popup.scanqr":
            "A\u015fa\u011f\u0131daki QR kodunu ak\u0131ll\u0131 telefonunuzla taray\u0131n ve \u015fifrenizi s\u0131f\u0131rlamak i\xe7in \u015eifre se\xe7ene\u011fine dokunun.",
          "desktop.login.popup.seeonmobile":
            "Ak\u0131ll\u0131 telefonunuzda \u015fifrenizi s\u0131f\u0131rlay\u0131n",
          "desktop.login.popupbutton.gotit": "Do\u011frulama kodunu g\xf6ster",
          "desktop.login.popupdesc.cancelverification":
            "Kimli\u011fimi do\u011frulama",
          "desktop.login.popupdesc.loggingin":
            "Ak\u0131ll\u0131 telefonunuzda kimli\u011finizi do\u011frulay\u0131n.",
          "desktop.login.popupdesc.pairingverificationcode":
            'Ak\u0131ll\u0131 telefonunuzda LINE\'\u0131 a\xe7\u0131n ve Ayarlar > Hesap > "Yeni cihaz e\u015fle\u015ftir" alan\u0131na 6 haneli kodu girin.',
          "desktop.login.popupdesc.pairingverificationcodeguide":
            'Ak\u0131ll\u0131 telefon hesab\u0131n\u0131z\u0131 ilk kez ba\u011flama\n\n1. Ak\u0131ll\u0131 telefonunuzda LINE\'\u0131 a\xe7\u0131n.\n2. Ayarlar > Hesap\'\u0131 a\xe7\u0131n > "Yeni cihaz e\u015fle\u015ftir"i se\xe7in.\n3. 6 haneli do\u011frulama kodunuzu girin.\nDevam etmek i\xe7in "Do\u011frulama kodunu g\xf6ster"i se\xe7in.',
          "desktop.login.popupdesc.pairsecondarydevice":
            "Yeni cihaz e\u015fle\u015ftir",
          "desktop.login.popuptitle.loggingin":
            "Giri\u015f yap\u0131l\u0131yor",
          "desktop.login.popuptitle.pairingverificationcode":
            "Ak\u0131ll\u0131 telefon hesab\u0131n\u0131zla e\u015fle\u015ftirin",
          "desktop.main.popup.newversion":
            "LINE uygulamas\u0131n\u0131n yeni bir s\xfcr\xfcm\xfc kullan\u0131labilir durumda. \u015eimdi g\xfcncellensin mi?",
          "desktop.movetomenu.button.all": "T\xfcm\xfc",
          "desktop.movetomenu.button.customfolder": "%1",
          "desktop.movetomenu.button.friends": "Arkada\u015flar",
          "desktop.movetomenu.button.groups": "Gruplar",
          "desktop.movetomenu.button.oas": "Resmi hesaplar",
          "desktop.movetomenu.button.openchats": "OpenChat'ler",
          "desktop.mypsticker.button.stickershop": "Sticker shop",
          "desktop.mypsticker.button.upgrade": "Deluxe'e y\xfckseltin",
          "desktop.mypsticker.desc.getmore":
            "Ba\u015fka Premium sticker'lar bulun!",
          "desktop.mypsticker.desc.maximum":
            "Ayn\u0131 anda en fazla %1 Premium sticker setine sahip olabilirsiniz.",
          "desktop.mypsticker.desc.nosticker":
            "Premium sticker'lar\u0131n\u0131z burada g\xf6sterilir.",
          "desktop.mypsticker.desc.upgradetodeluxe":
            "Deluxe d\xfczeyi planla 1.000 adede kadar sticker veya emoji seti saklayabilirsiniz. Mobil s\xfcr\xfcmde Deluxe d\xfczeyi plana y\xfckseltin.",
          "desktop.mysticker.button.cancel": "Iptal",
          "desktop.mysticker.button.cancelshow": "Iptal",
          "desktop.mysticker.button.showall": "T\xfcm\xfcn\xfc g\xf6ster",
          "desktop.mysticker.button.stop": "Durdur",
          "desktop.mysticker.button.stopshow": "Durdur",
          "desktop.mysticker.desc.downloadstopemoji":
            "Emoji indirme i\u015flemi durdurulsun mu?",
          "desktop.mysticker.desc.downloadstopsticker":
            "Stickerlar\u0131n\u0131n indirilmesini iptal etmek istiyor musunuz?",
          "desktop.mysticker.desc.stopshowemoji":
            "T\xfcm emoji indirme i\u015flemleri durdurulsun mu?",
          "desktop.mysticker.desc.stopshowsticker":
            "T\xfcm sticker indirmelerini iptal etmek istiyor musunuz?",
          "desktop.mystickers.desc.noexpire": "Son Kullanma Tarihi Yok",
          "desktop.mystickers.desc.nolongerp":
            "Art\u0131k Premium'da mevcut de\u011fil",
          "desktop.mystickers.desc.passedtime": "S\xfcresi Doldu",
          "desktop.mystickers.desc.until": "%1'e kadar ge\xe7erlidir.",
          "desktop.mystickers.tooltip.hide": "Gizle",
          "desktop.mystickers.tooltip.show": "G\xf6ster",
          "desktop.noin87notice.button.download": "\u0130ndir",
          "desktop.noin87notice.desc.supportend":
            "LINE art\u0131k Windows 7 ve 8 s\xfcr\xfcmlerini desteklememektedir. En g\xfcncel uyumlu s\xfcr\xfcm\xfc indirmek i\xe7in l\xfctfen a\u015fa\u011f\u0131ya t\u0131klay\u0131n.",
          "desktop.oa.chat.oaunsendconfirm.desc":
            "Baz\u0131 resmi hesap y\xf6neticileri sistem yap\u0131land\u0131rmalar\u0131na ba\u011fl\u0131 olarak g\xf6nderilmemi\u015f mesajlar\u0131 g\xf6rmeye devam edebilir. Bu mesaj\u0131 g\xf6nderme i\u015flemi yine de geri al\u0131ns\u0131n m\u0131?",
          "desktop.ocr.popup.toobig":
            "G\xf6rsel 5 MB'tan b\xfcy\xfck oldu\u011fu i\xe7in i\u015flenemiyor. G\xf6rselinizin boyutunu k\xfc\xe7\xfclt\xfcp tekrar deneyin.",
          "desktop.openchatsetting.popup.onmobile":
            "Bu ayar\u0131 LINE'\u0131n mobil s\xfcr\xfcm\xfcnde de\u011fi\u015ftirebilirsiniz.",
          "desktop.premiumhistory.desc.history":
            "Ge\xe7en y\u0131l kullanmad\u0131\u011f\u0131n\u0131z Premium sticker'lar\na\u015fa\u011f\u0131da g\xf6sterilmektedir.",
          "desktop.premiumpopup.button.canceleold": "Iptal",
          "desktop.premiumpopup.button.deleteold": "Sil",
          "desktop.premiumpopup.button.edit": "Sticker'lar\u0131 d\xfczenle",
          "desktop.premiumpopup.desc.downloadlimit":
            "Koleksiyonunuzda zaten %1 Premium sticker seti bulunuyor. Bu seti indirmek i\xe7in mevcut bir seti koleksiyonunuzdan silip tekrar deneyin.",
          "desktop.premiumpopup.desc.notavailablee":
            "Bu emoji seti art\u0131k LINE Stickers Premium'da bulunmuyor. Listenizden silinsin mi?",
          "desktop.premiumpopup.desc.notavailables":
            "Bu sticker seti art\u0131k LINE Stickers Premium'da bulunmuyor. Listenizden silinsin mi?",
          "desktop.premiumpopup.title.downloadlimit":
            "\u0130ndirme s\u0131n\u0131r\u0131",
          "desktop.profile.desc.video15secs":
            "Profil kapa\u011f\u0131 videolar\u0131 15 saniyeden k\u0131sa olmal\u0131d\u0131r.",
          "desktop.profile.desc.video6secs":
            "Profil videolar\u0131 6 saniyeden k\u0131sa olmal\u0131d\u0131r.",
          "desktop.profileselectphoto.button.cancel": "\u0130ptal",
          "desktop.profileselectphoto.button.save": "Kaydet",
          "desktop.profilesetting.button.capturescreen":
            "Ekran g\xf6r\xfcnt\xfcs\xfc al",
          "desktop.profilesetting.button.createtext":
            "Metin profil olu\u015ftur",
          "desktop.profilesetting.button.deleteprofile":
            "Profil foto\u011fraf\u0131n\u0131 sil",
          "desktop.profilesetting.button.selectdefault":
            "Varsay\u0131lanlardan se\xe7",
          "desktop.profilesetting.button.selectphoto": "Foto\u011fraf se\xe7",
          "desktop.profilesetting.popup.500savechat":
            "Sohbette g\xf6nderilen son 500 mesaj metin dosyas\u0131 olarak kaydedilecek.",
          "desktop.quickreply.popup.notonpc":
            "Bu \xf6zellik LINE'\u0131n masa\xfcst\xfc s\xfcr\xfcm\xfcnde kullan\u0131lam\u0131yor.",
          "desktop.reaction.button.ok": "Tamam",
          "desktop.reaction.button.seemore": "Daha fazla bilgi",
          "desktop.reaction.desc.error":
            "Ge\xe7ici bir hata nedeniyle tepkiniz iletilemedi. L\xfctfen tekrar deneyin.",
          "desktop.reaction.desc.plurals.other": "%1 tepki",
          "desktop.reaction.desc.reaction1":
            "\u0130mlecinizi bir mesaj\u0131n \xfczerine s\xfcr\xfckleyin ve\ntepki b\u0131rakmak i\xe7in g\xfcl\xfcmseme simgesine t\u0131klay\u0131n.",
          "desktop.reaction.desc.reaction2":
            "Arkada\u015flar\u0131n\u0131z\u0131n tepkilerini g\xf6rmek i\xe7in\na\u015fa\u011f\u0131daki simgeye t\u0131klay\u0131n.",
          "desktop.reaction.desc.unsent":
            "Art\u0131k bu mesaja tepki veremezsiniz.",
          "desktop.reaction.title.reaction": "Bir tepki\nbin mesaja bedeldir!",
          "desktop.reaction.toast.expired":
            "S\xfcresi doldu\u011fu i\xe7in art\u0131k bu \xf6\u011feye tepki veremezsiniz.",
          "desktop.reaction.toast.unsent":
            "G\xf6nderim geri al\u0131nd\u0131\u011f\u0131 i\xe7in art\u0131k bu foto\u011frafa tepki veremezsiniz.",
          "desktop.reaction.tooltip.smile":
            "Foto\u011frafa tepki vermek i\xe7in g\xfcl\xfcmseme simgesine t\u0131klay\u0131n.",
          "desktop.removechatpopup.button.cancel": "\u0130ptal",
          "desktop.removechatpopup.button.remove": "Kald\u0131r",
          "desktop.removechatpopup.desc.allchats.other":
            "Klas\xf6rde %1 sohbet var",
          "desktop.removechatpopup.desc.selected": "%1 sohbet\xa0se\xe7ildi",
          "desktop.removechatpopup.placeholder.search": "Ara",
          "desktop.removechatpopup.title.removechats":
            "Bu klas\xf6rden sohbet kald\u0131r",
          "desktop.restorepopup.button.ignore": "Yoksay",
          "desktop.restorepopup.button.restore": "Geri y\xfckle",
          "desktop.restorepopup.desc.restoreline":
            "Farkl\u0131 bir yoldan y\xfcklenmi\u015f ba\u015fka bir LINE uygulamas\u0131 var. Di\u011fer uygulamadaki sohbet ge\xe7mi\u015finiz geri y\xfcklensin mi?",
          "desktop.setting.desc.enablechatfolders":
            "Sohbet klas\xf6rlerini etkinle\u015ftir",
          "desktop.setting.desc.windows": "Windows",
          "desktop.setting.title.chatfolder": "Sohbet klas\xf6r\xfc",
          "desktop.settings.desc.cantgetnotifocusassist":
            "Odaklanma Yard\u0131m\u0131 \xf6zelli\u011fi a\xe7\u0131k oldu\u011fu i\xe7in LINE bildirimlerini alam\u0131yorsunuz. Cihaz\u0131n\u0131zda Odaklanma Yard\u0131m\u0131 ayarlar\u0131n\u0131 de\u011fi\u015ftirin.",
          "desktop.settings.desc.cantgetnotiline":
            "LINE bildirimlerini etkinle\u015ftirmediniz. Cihaz\u0131n\u0131z\u0131n ayarlar\u0131ndan bildirimleri etkinle\u015ftirin.",
          "desktop.settings.desc.cantgetnotios":
            "Bildirimleri etkinle\u015ftirmediniz. Cihaz\u0131n\u0131z\u0131n ayarlar\u0131ndan bildirimleri etkinle\u015ftirin.",
          "desktop.settings.desc.osnotification":
            "Windows sistem ayarlar\u0131na g\xf6re bildirim almak i\xe7in Windows'u se\xe7in.",
          "desktop.settings.desc.safeguard":
            "Dosyalar\u0131 g\xf6ndermeden \xf6nce bir sohbete s\xfcr\xfckleyip b\u0131rak\u0131rken dosyalar\u0131n \xf6nizlemelerini g\xf6r\xfcn.",
          "desktop.settings.notification.description":
            "Uygulamay\u0131 zorla kapatmak bildirimlerin gecikmesine veya gelmemesine sebep olabilir.",
          "desktop.settings.notifications.turnonm":
            "LINE bildirimlerini etkinle\u015ftirmediniz. Cihaz\u0131n\u0131z\u0131n ayarlar\u0131ndan bildirimleri etkinle\u015ftirin.",
          "desktop.settings.notifications.turnonw":
            "LINE bildirimlerini etkinle\u015ftirmediniz. Bildirimleri etkinle\u015ftirmek i\xe7in cihaz\u0131n\u0131zda Ayarlar > Sistem > Bildirimler ve eylemler'e gidip LINE i\xe7in bildirimleri etkinle\u015ftirin.",
          "desktop.settings.title.safeguard": "Dosya \xf6nizlemeleri",
          "desktop.shortcuts.desc.tilechats": "Sohbetleri d\xf6\u015fe",
          "desktop.shortcuts.desc.undotiling":
            "Sohbetleri d\xf6\u015femeyi geri al",
          "desktop.smode.popup.nogif":
            "G\xfcvenlik politikas\u0131 nedeniyle Windows 10 S modunda arama, medya g\xf6r\xfcnt\xfcleyici ve GIF yakalama \xf6zellikleri kullan\u0131lamaz.",
          "desktop.sticker.button.deletedstickers":
            "Premium indirme ge\xe7mi\u015fi\xa0",
          "desktop.sticker.button.mystickers": "Stickerlar\u0131m",
          "desktop.sticker.button.premium": "Premium sticker'lar\u0131m",
          "desktop.sticker.tooltip.switch":
            "Sticker'lar\u0131n\u0131z\u0131 d\xfczenlemek i\xe7in sticker'lar\u0131n s\u0131ras\u0131n\u0131 de\u011fi\u015ftirebilirsiniz. Liste mobil s\xfcr\xfcmle otomatik olarak senkronize edilir.",
          "desktop.stickers.desc.recentlyusede":
            "Son kullan\u0131lan emoji'ler",
          "desktop.stickers.desc.recentlyuseds":
            "Son kullan\u0131lan sticker'lar",
          "desktop.stickers.tooltip.synced":
            "Sticker ve emoji'lerinizin s\u0131ralamas\u0131, uygulaman\u0131n mobil s\xfcr\xfcm\xfcyle senkronize edildi.",
          "desktop.stickertab.button.seemore": "Daha Fazla Bilgi",
          "desktop.stickertab.desc.latestemoji":
            "%1 tasar\u0131m\u0131 yeni emoji'ler",
          "desktop.stickertab.desc.lateststicker":
            "%1 tasar\u0131m\u0131 yeni sticker'lar",
          "desktop.tab.button.ai": "AI",
          "desktop.textprofile.button.cancel": "\u0130ptal",
          "desktop.textprofile.button.save": "Kaydet",
          "desktop.textprofile.desc.defaultfont":
            "Varsay\u0131lan yaz\u0131 tipi",
          "desktop.textprofile.placeholder.entertext": "Metin girin",
          "desktop.textprofile.title.createtextprofile":
            "Metin profil olu\u015ftur",
          "desktop.thread.desc.sendfiletothread": "Sohbete dosya g\xf6nder",
          "desktop.thread.tooltip.taphere":
            "Yaz\u0131\u015fmay\u0131 favorilere eklemek veya favorilerden kald\u0131rmak i\xe7in dokunun.",
          "desktop.updatepopup.button.later": "Daha sonra",
          "desktop.updatepopup.button.update": "G\xfcncelle",
          "desktop.updatepopup.desc.update1":
            "LINE %1 art\u0131k kullan\u0131lam\u0131yor. En yeni s\xfcr\xfcme g\xfcncelleyin. G\xfcncelleme yap\u0131ld\u0131\u011f\u0131nda LINE yeniden ba\u015flat\u0131lacak.",
          "desktop.updatepopup.desc.update1mac":
            "LINE %1 art\u0131k kullan\u0131lam\u0131yor. App Store'dan en yeni s\xfcr\xfcme g\xfcncelleyin.",
          "desktop.viewer.desc.gifby": "%1 kayna\u011f\u0131ndan GIF",
          "desktop.viewer.desc.gifmagazine": "GIFMAGAZINE",
          "desktop.viewer.popup.cantsave":
            "%1 kayna\u011f\u0131ndan al\u0131nan GIF'ler Keep'e kaydedilemiyor.",
          "desktop.viewer.popup.cantsaves":
            "%1 kayna\u011f\u0131ndan al\u0131nan GIF'ler Keep'e kaydedilemiyor. Geri kalan dosyalar payla\u015f\u0131ls\u0131n m\u0131?",
          "desktop.viewer.popup.cantshare":
            "%1 kayna\u011f\u0131ndan al\u0131nan GIF'ler payla\u015f\u0131lam\u0131yor.",
          "desktop.viewer.popup.cantshares":
            "%1 kayna\u011f\u0131ndan al\u0131nan GIF'ler payla\u015f\u0131lam\u0131yor. Geri kalan dosyalar payla\u015f\u0131ls\u0131n m\u0131?",
          "desktop.wallpaper.popup.delete":
            "Bu duvar ka\u011f\u0131d\u0131 silinsin mi? Bu duvar ka\u011f\u0131d\u0131n\u0131 kullanan t\xfcm sohbetler varsay\u0131lan duvar ka\u011f\u0131d\u0131na ayarlanacak.",
          "dialog.download.font": "tahoma",
          "dialog.download.message": "G\xfcncelleniyor\u2026",
          "dialog.download.messagesub": "L\xfctfen bir s\xfcre bekleyin.",
          "displayname.error.badwords":
            "Bu isim ayarlanamad\u0131.\nL\xfctfen ba\u015fka bir isim kullanmay\u0131 deneyin. ",
          "duplicategroup.popup.button.gotochatmultiple": "Grubu a\xe7",
          "duplicategroup.popup.createnewgroup": "Yeni grup olu\u015ftur",
          "duplicategroup.popup.desc.chatexistsmultiple":
            "Bu \xfcyelerin bulundu\u011fu bir grup zaten var (%1). Onun yerine bu grup a\xe7\u0131ls\u0131n m\u0131?",
          "duplicategroup.popup.desc.selfchatexists":
            "\xdcye olarak yaln\u0131zca sizin bulundu\u011funuz bir grup zaten var\xa0(%1). Onun yerine bu grup a\xe7\u0131ls\u0131n m\u0131?",
          "duplicategroup.popup.title.groupexists": "Grup zaten var",
          "e2ee.auth.pincode.timeout":
            "Bir hata olu\u015ftu.\nL\xfctfen daha sonra tekrar deneyin.",
          "e2ee.message.title":
            "Bu mesaj\u0131n \u015fifresi \xe7\xf6z\xfclemiyor",
          "e2ee.popupbutton.ok": "Tamam",
          "e2ee.popupdesc.pleaseresend":
            "Bu mesaj g\xfcvenlik nedeniyle g\xf6r\xfcnt\xfclenemiyor. L\xfctfen g\xf6nderenden mesaj\u0131 tekrar g\xf6ndermesini isteyin.",
          "e2ee.popupdesc.securityerror":
            "Bu dosya g\xfcvenlik nedeniyle a\xe7\u0131lam\u0131yor.",
          "e2ee.popuptitle.securityerror": "G\xfcvenlik hatas\u0131",
          "emoji.downloadAll.confirm": "T\xfcm emoji'leriniz indirilsin mi?",
          "friend.msg.block":
            '%1 engellensin mi? Bu hesaptan ba\u015fka mesaj almayacaks\u0131n\u0131z. Hesaplar\u0131n engelini Ayarlar > Arkada\u015flar > "Engellenenler Listesi" b\xf6l\xfcm\xfcne giderek kald\u0131rabilirsiniz.',
          "friend.msg.hide":
            '%1 arkada\u015f listenizden gizlensin mi? Hesaplar\u0131n gizlemesini Ayarlar > Arkada\u015flar > "Gizlenmi\u015f hesaplar" b\xf6l\xfcm\xfcnden kald\u0131rabilirsiniz.',
          "gallery.picker.original.btn": "Orijinal",
          "gnb.guide.allNotification.text":
            "Biraz sessizlik istedi\u011finizde t\xfcm bildirimleri tek bir t\u0131klamayla kapat\u0131n.",
          "group.btn.add.title": "Ekle",
          "group.btn.cancel.title": "Iptal",
          "group.btn.cancelinvite.title": "Iptal",
          "group.btn.invite.title": "Sohbete Ekle",
          "group.btn.removeMember.title": "Sil",
          "group.button.invitefrineds": "Davet g\xf6nder",
          "group.label.addprofile.title": "D\xfczenle",
          "group.label.create.title": "Grup Kur",
          "group.label.groupname.title": "Grup Ad\u0131",
          "group.label.invitee.title": "Davet ediliyor",
          "group.label.member.title": "\xdcye",
          "group.label.modify.title": "Grubu d\xfczenle",
          "group.label.modifyprofile.title": "D\xfczenle",
          "group.label.nobuddy.title": "\xdcye Yok",
          "group.label.nobuddytoselect.title":
            "Se\xe7ebilece\u011finiz bir arkada\u015f\u0131n\u0131z yok.",
          "group.label.nosearchresult.title": "Sonu\xe7 bulunamad\u0131.",
          "group.label.nothing.title":
            "Se\xe7ebilece\u011finiz bir arkada\u015f\u0131n\u0131z yok.",
          "group.label.selectmember.title": "\xdcye davet et",
          "group.label.unauthorized": "Bu grup i\xe7in izinleriniz bulunmuyor.",
          "group.menu.delete": "Kald\u0131r",
          "group.menu.leave": "Ayr\u0131l",
          "group.msg.cancelInvite.confirm":
            "%1 hen\xfcz gruba kat\u0131lmad\u0131. Daveti iptal edilsin mi?",
          "group.msg.cancelinvite.failed": "Bu davetiye iptal edilemedi.",
          "group.msg.empty.name": "Grubunun ad\u0131n\u0131 yaz\u0131n\u0131z.",
          "group.msg.kickoutmember.confirm": "%1 gruptan silinsin mi?",
          "group.msg.kickoutmember.failed": "\xdcyeler silinemedi.",
          "group.msg.leavegroup.confirm":
            "Bu gruptan ayr\u0131l\u0131rsan\u0131z grubun \xfcye listesini veya sohbet ge\xe7mi\u015fini g\xf6remezsiniz. Gruptan ayr\u0131lmak istiyor musunuz?",
          "group.msg.makegroup.failed": "Grup kurulamad\u0131.",
          "group.msg.overflow.name":
            "Sadece 20 karakter kullanabilirsiniz. L\xfctfen buna g\xf6re ayarlay\u0131n.",
          "group.msg.uploadimge.failed": "Grup Foto\u011fraf y\xfcklenemedi.",
          "group.profile.delete": "Profili Sil",
          "group.profile.select.default": "Profil'den Se\xe7",
          "group.profile.select.local": "Bilgisayar\u0131m'dan Se\xe7",
          "group.text.placerholder.title": "Grup Ad\u0131",
          "group.title.members": "\xdcye",
          "groupcall.ageverification.popupdesc.minorscantuse":
            "Toplant\u0131 \xf6zelli\u011fi \u015fu anda re\u015fit olmayan kullan\u0131c\u0131lar taraf\u0131ndan kullan\u0131lamamaktad\u0131r.",
          "groupcall.alert.popup.error.nowcalling":
            "Zaten bir arama yapt\u0131\u011f\u0131n\u0131z i\xe7in arama yap\u0131lam\u0131yor.\nArama bittikten sonra l\xfctfen tekrar deneyin.",
          "groupcall.call.change.to.video":
            "G\xf6r\xfcnt\xfcl\xfc aramaya ge\xe7i\u015f yap\u0131ls\u0131n m\u0131?",
          "groupcall.call.change.to.video.noCamera":
            "Kamera alg\u0131lanmad\u0131\u011f\u0131 i\xe7in g\xf6r\xfcnt\xfcn\xfcz g\xf6sterilmeyecek. Yine de g\xf6r\xfcnt\xfcl\xfc aramaya ge\xe7i\u015f yapmak istiyor musunuz?",
          "groupcall.call.endwatchtogether.button":
            "Payla\u015f\u0131m\u0131 durdur",
          "groupcall.call.invite.complete": "Davet g\xf6nderildi.",
          "groupcall.call.invite.tooltip":
            "Bu d\xfc\u011fmeye basarak sohbette bulunan di\u011fer ki\u015fileri grup aramas\u0131na davet edin.",
          "groupcall.call.popupbutton.cancel": "\u015eimdi de\u011fil",
          "groupcall.call.popupbutton.switch": "Ge\xe7",
          "groupcall.call.popupdesc.newcam":
            '"%1" cihaz\u0131na \u015fimdi ge\xe7ilsin mi?',
          "groupcall.call.popupdesc.newmic":
            '"%1" cihaz\u0131na \u015fimdi ge\xe7ilsin mi?',
          "groupcall.call.popupdesc.newspeaker":
            '"%1" cihaz\u0131na \u015fimdi ge\xe7ilsin mi?',
          "groupcall.call.popuptitle.newcam": "Yeni kamera bulundu",
          "groupcall.call.popuptitle.newmic": "Yeni mikrofon bulundu",
          "groupcall.call.popuptitle.newspeaker": "Yeni hoparl\xf6r bulundu",
          "groupcall.call.speaker.many.few": "%1 ve %2 ki\u015fi daha",
          "groupcall.call.speaker.many.many": "%1 ve %2 ki\u015fi daha",
          "groupcall.call.speaker.many.one": "%1 ve %2 ki\u015fi daha",
          "groupcall.call.speaker.many.other": "%1 ve %2 ki\u015fi daha",
          "groupcall.call.speaker.many.two": "%1 ve %2 ki\u015fi daha",
          "groupcall.call.speaker.many.zero": "%1 ve %2 ki\u015fi daha",
          "groupcall.call.toast.loadingyoutube": "Y\xfckleniyor...",
          "groupcall.call.toast.someoneelsepreparingwatchtogether":
            "%1 ekran\u0131n\u0131 payla\u015fmaya haz\u0131rlan\u0131yor.",
          "groupcall.call.toast.usersjoinedgroupcall.other":
            "%1 ve %n ki\u015fi daha grup aramas\u0131na kat\u0131ld\u0131.",
          "groupcall.call.toast.usersleftgroupcall.other":
            "%1 ve %n ki\u015fi daha grup aramas\u0131ndan ayr\u0131ld\u0131.",
          "groupcall.call.waiting.msg":
            "Di\u011fer kat\u0131l\u0131mc\u0131lar bekleniyor.",
          "groupcall.call.watchtogether.button": "Ekran\u0131 payla\u015f",
          "groupcall.callsettings.button.numberofparticipants":
            "Kat\u0131l\u0131mc\u0131lar (%1)",
          "groupcall.callsettings.tooltip.handsfreebt":
            "%1 adl\u0131 cihaz\u0131n hem mikrofon hem de hoparl\xf6r olarak ayarlanmas\u0131 gerekiyor.",
          "groupcall.callsettingspreview.desc.nocamera":
            "Kat\u0131lmadan \xf6nce arama ayarlar\u0131n\u0131z\u0131 kontrol edin. Kameran\u0131z alg\u0131lanamad\u0131\u011f\u0131 i\xe7in g\xf6r\xfcnt\xfcn\xfcz g\xf6r\xfcnmeyecek.",
          "groupcall.callsettingspreview.desc.nomic":
            "Kat\u0131lmadan \xf6nce arama ayarlar\u0131n\u0131z\u0131 kontrol edin. Mikrofonunuz alg\u0131lanamad\u0131\u011f\u0131 i\xe7in sesiniz duyulmayacak.",
          "groupcall.callsettingspreview.desc.nomicorcamera":
            "Kat\u0131lmadan \xf6nce arama ayarlar\u0131n\u0131z\u0131 kontrol edin. Kameran\u0131z ve mikrofonunuz alg\u0131lanamad\u0131\u011f\u0131 i\xe7in g\xf6r\xfcnt\xfcn\xfcz g\xf6r\xfcnmeyecek ve sesiniz duyulmayacak.",
          "groupcall.chat.alert.popup.error.overflow":
            "\xc7ok fazla arama trafi\u011fi oldu\u011fundan grup aramas\u0131 ba\u015flat\u0131lam\u0131yor.\nL\xfctfen daha sonra tekrar deneyin.",
          "groupcall.chat.confirm.popup.cant":
            "Grup \xfcyesi olmad\u0131\u011f\u0131n\u0131z i\xe7in bu grup aramas\u0131na kat\u0131lamazs\u0131n\u0131z.",
          "groupcall.chat.confirm.popup.join.few":
            "Bu grup aramas\u0131nda %n kat\u0131l\u0131mc\u0131 var. Aramaya kat\u0131lmak istiyor musunuz?",
          "groupcall.chat.confirm.popup.join.many":
            "Bu grup aramas\u0131nda %n kat\u0131l\u0131mc\u0131 var. Aramaya kat\u0131lmak istiyor musunuz?",
          "groupcall.chat.confirm.popup.join.one":
            "Bu grup aramas\u0131nda %n kat\u0131l\u0131mc\u0131 var. Aramaya kat\u0131lmak istiyor musunuz?",
          "groupcall.chat.confirm.popup.join.other":
            "Bu grup aramas\u0131nda %n kat\u0131l\u0131mc\u0131 var. Aramaya kat\u0131lmak istiyor musunuz?",
          "groupcall.chat.confirm.popup.join.two":
            "Bu grup aramas\u0131nda %n kat\u0131l\u0131mc\u0131 var. Aramaya kat\u0131lmak istiyor musunuz?",
          "groupcall.chat.confirm.popup.join.zero":
            "Bu grup aramas\u0131nda %n kat\u0131l\u0131mc\u0131 var. Aramaya kat\u0131lmak istiyor musunuz?",
          "groupcall.chat.confirm.popup.start":
            "Devam eden grup aramas\u0131 yok.\nBir arama ba\u015flatmak ister misiniz?",
          "groupcall.chat.confirm.popup.start.btn.video":
            "G\xf6r\xfcnt\xfcl\xfc aramay\u0131 ba\u015flat",
          "groupcall.chat.confirm.popup.start.btn.voice":
            "Grup sesli aramas\u0131 ba\u015flat\u0131ls\u0131n m\u0131?",
          "groupcall.chat.layer.join.btn": "Kat\u0131l",
          "groupcall.chat.layer.numofmembers.few":
            '<![CDATA[Aramada <font color=\\"#527fdc\\">%n ki\u015fi</font> var. ]]>',
          "groupcall.chat.layer.numofmembers.many":
            '<![CDATA[Aramada <font color=\\"#527fdc\\">%n ki\u015fi</font> var. ]]>',
          "groupcall.chat.layer.numofmembers.one":
            '<![CDATA[Aramada <font color=\\"#527fdc\\">%n ki\u015fi</font> var. ]]>',
          "groupcall.chat.layer.numofmembers.other":
            '<![CDATA[Aramada <font color=\\"#527fdc\\">%n ki\u015fi</font> var. ]]>',
          "groupcall.chat.layer.numofmembers.two":
            '<![CDATA[Aramada <font color=\\"#527fdc\\">%n ki\u015fi</font> var. ]]>',
          "groupcall.chat.layer.numofmembers.zero":
            '<![CDATA[Aramada <font color=\\"#527fdc\\">%n ki\u015fi</font> var. ]]>',
          "groupcall.chat.layer.start.btn": "Ba\u015flat",
          "groupcall.chat.layer.start.dscr": "Grup aramas\u0131 ba\u015flat.",
          "groupcall.chat.layer.start.msg": "%1 arama ba\u015flatt\u0131.",
          "groupcall.chat.message.end": "Grup aramas\u0131 sonland\u0131.",
          "groupcall.chat.message.invite":
            "\u015eu grup aramas\u0131na davet edildiniz:\n%1",
          "groupcall.chat.message.start": "Grup aramas\u0131 ba\u015flad\u0131",
          "groupcall.chatlink.desc.userisinvitedtojoinmeeting":
            '"%1" adl\u0131 LINE toplant\u0131s\u0131na kat\u0131lmak \xfczere davet edildiniz. Aramaya kat\u0131lmak i\xe7in a\u015fa\u011f\u0131daki ba\u011flant\u0131ya gidin.\n%2',
          "groupcall.chatlink.popupdesc.invalidlink":
            "Ge\xe7ersiz ba\u011flant\u0131.",
          "groupcall.chatstab.tooltip.startcallwithoutchat":
            "Ba\u011flant\u0131 tabanl\u0131 bir toplant\u0131 olu\u015fturun ve arama ba\u015flatmak i\xe7in ba\u015fka ki\u015filerle payla\u015f\u0131n.",
          "groupcall.createchat.button.createmeeting": "Toplant\u0131",
          "groupcall.deletemeeting.popupdesc.delete": "Sil",
          "groupcall.deletemeeting.popupdesc.deletemeeting":
            "Bu toplant\u0131 silinsin mi?",
          "groupcall.editmeetingname.popuptitle.edit":
            "Toplant\u0131 ad\u0131n\u0131 d\xfczenle",
          "groupcall.groupcallpopup.desc.callparticipantlimitexceeded":
            "Grup aramas\u0131nda en fazla %1 ki\u015fi olabilir.",
          "groupcall.groupcallsettings.title.participants":
            "Kat\u0131l\u0131mc\u0131lar",
          "groupcall.groupcallsettings.toast.userwasremoved":
            "%1 toplant\u0131dan \xe7\u0131kar\u0131ld\u0131.",
          "groupcall.invite.index.not.join": "Beklemede",
          "groupcall.invite.selectall": "Hepsini Se\xe7",
          "groupcall.invite.title": "Davet et",
          "groupcall.kickout.popup":
            "Ba\u011flant\u0131 zaman a\u015f\u0131m\u0131na u\u011frad\u0131\u011f\u0131 i\xe7in arama sonland\u0131r\u0131ld\u0131.",
          "groupcall.leavemeeting.popupbutton.leave": "Ayr\u0131l",
          "groupcall.leavemeeting.popupdesc.historynolongershown":
            "Bu toplant\u0131dan ayr\u0131l\u0131rsan\u0131z kat\u0131l\u0131mc\u0131 listesini veya sohbet ge\xe7mi\u015fini g\xf6remeyeceksiniz. Toplant\u0131dan ayr\u0131lmak istiyor musunuz?",
          "groupcall.meetingintroguide.button.start":
            "Toplant\u0131 olu\u015ftur",
          "groupcall.meetingintroguide.desc.disclaimers":
            "Toplant\u0131 ba\u011flant\u0131s\u0131, olu\u015fturulduktan sonra yaln\u0131zca 90 g\xfcn boyunca ge\xe7erlidir. Toplant\u0131ya kat\u0131ld\u0131\u011f\u0131n\u0131zda veya toplant\u0131 sohbetinde mesaj g\xf6nderdi\u011finizde LINE g\xf6r\xfcnen ad\u0131n\u0131z ve profil foto\u011fraf\u0131n\u0131z di\u011fer kat\u0131l\u0131mc\u0131lar taraf\u0131ndan g\xf6r\xfclebilir.",
          "groupcall.meetingintroguide.desc.disclaimersjp":
            "Toplant\u0131 ba\u011flant\u0131s\u0131, olu\u015fturulduktan sonra yaln\u0131zca 90 g\xfcn boyunca ge\xe7erlidir ve ba\u011flant\u0131ya sadece ya\u015f s\u0131n\u0131r\u0131n\u0131n \xfczerindeki kullan\u0131c\u0131lar eri\u015febilir. Toplant\u0131ya kat\u0131ld\u0131\u011f\u0131n\u0131zda veya toplant\u0131 sohbetinde mesaj g\xf6nderdi\u011finizde LINE g\xf6r\xfcnen ad\u0131n\u0131z ve profil foto\u011fraf\u0131n\u0131z di\u011fer kat\u0131l\u0131mc\u0131lar taraf\u0131ndan g\xf6r\xfclebilir.",
          "groupcall.meetingintroguide.desc.sharelinktostart":
            "Sadece toplant\u0131 ba\u011flant\u0131s\u0131n\u0131 payla\u015farak istedi\u011finiz ki\u015filerle g\xf6r\xfcnt\xfcl\xfc toplant\u0131 ba\u015flat\u0131n.",
          "groupcall.meetingintroguide.header.connect":
            "Tek ba\u011flant\u0131yla\nkolay ileti\u015fim",
          "groupcall.meetingintroguide.title.meetings": "Toplant\u0131lar",
          "groupcall.meetingnameedit.popupbutton.save": "Kaydet",
          "groupcall.meetingparticipantlist.button.remove": "\xc7\u0131kar",
          "groupcall.meetingparticipants.button.next": "\u0130leri",
          "groupcall.meetingparticipants.placeholder.searchuser":
            "\u0130sme G\xf6re Ara",
          "groupcall.meetingparticipants.title.reportuser": "\u015eikayet et",
          "groupcall.meetings.button.copymeetinglink": "Ba\u011f. kopyala",
          "groupcall.meetings.button.createmeeting":
            "Toplant\u0131 olu\u015ftur",
          "groupcall.meetings.button.shareinvite": "Davet et",
          "groupcall.meetings.button.startmeeting": "Ba\u015flat",
          "groupcall.meetings.desc.createdjustnow": "\u015eimdi",
          "groupcall.meetings.desc.usersmeeting":
            "%1 adl\u0131 ki\u015finin toplant\u0131s\u0131",
          "groupcall.meetings.popup.policyblock":
            "Hesab\u0131n\u0131z\u0131n ko\u015fullar\u0131m\u0131z\u0131 ihlal etti\u011finden \u015f\xfcphelenildi\u011fi i\xe7in LINE Toplant\u0131lar'\u0131 kullanamazs\u0131n\u0131z.",
          "groupcall.meetings.popupdesc.networkerror":
            "A\u011f hatas\u0131 nedeniyle ekran y\xfcklenemedi. L\xfctfen tekrar deneyin.",
          "groupcall.meetings.toast.meetingcreated":
            "Toplant\u0131 olu\u015fturuldu.",
          "groupcall.meetingscreen.tooltip.invitemorepeople":
            "Toplant\u0131ya daha fazla ki\u015fi davet edin.",
          "groupcall.participantlist.desc.cameraturnedoff":
            "Kamera kapal\u0131",
          "groupcall.participantlist.desc.gridview":
            "Tablo g\xf6r\xfcn\xfcm\xfcne ge\xe7",
          "groupcall.participantlist.desc.muted": "Ses kapal\u0131",
          "groupcall.participantlist.desc.participantview":
            "Bu ki\u015fiyi odak ekran\u0131na sabitleyin",
          "groupcall.participantlist.placeholder.searchbyname":
            "Ada g\xf6re ara",
          "groupcall.previewscreen.desc.nameprofilephotoshown":
            "LINE g\xf6r\xfcnen ad\u0131n\u0131z ve profil foto\u011fraf\u0131n\u0131z g\xf6sterilecek.",
          "groupcall.removefrommeeting.popupbutton.remove": "\xc7\u0131kar",
          "groupcall.removefrommeeting.popupdesc.removeuser":
            "%1 adl\u0131 ki\u015fi toplant\u0131dan \xe7\u0131kar\u0131ls\u0131n m\u0131?",
          "groupcall.removeuser.popupdesc.temporaryerror":
            "Bu kat\u0131l\u0131mc\u0131 ge\xe7ici bir hata nedeniyle \xe7\u0131kar\u0131lam\u0131yor. L\xfctfen tekrar deneyin.",
          "groupcall.report.button.content": "Uygunsuz i\xe7erik",
          "groupcall.report.button.harrassment": "Cinsel taciz",
          "groupcall.report.button.impersonation": "Kimli\u011fe b\xfcr\xfcnme",
          "groupcall.report.button.impersonation.inquirypopup":
            "L\xfctfen soru formumuza gidip istenen \xf6\u011feleri doldurarak bu kimli\u011fe b\xfcr\xfcnme vakas\u0131n\u0131 ara\u015ft\u0131rmam\u0131za yard\u0131mc\u0131 olmak i\xe7in bize ayr\u0131nt\u0131l\u0131 bilgiler verin.",
          "groupcall.report.button.impersonation.inquirypopup.decline": "Atla",
          "groupcall.report.button.impersonation.inquirypopup.preceed":
            "Devam et",
          "groupcall.report.button.other": "Di\u011fer",
          "groupcall.report.button.report": "\u015eikayet et",
          "groupcall.report.button.scam": "Doland\u0131r\u0131c\u0131l\u0131k",
          "groupcall.report.button.spam": "Spam/Reklam",
          "groupcall.report.desc.reportreason":
            "\u015eikayeti y\xf6netmemize yard\u0131mc\u0131 olmas\u0131 i\xe7in bu kullan\u0131c\u0131 hakk\u0131ndaki bilgileri ve toplant\u0131ya ait ekran g\xf6r\xfcnt\xfclerini de alaca\u011f\u0131z.",
          "groupcall.report.popupbutton.donotremove": "\xc7\u0131karma",
          "groupcall.report.popupbutton.remove": "\xc7\u0131kar",
          "groupcall.report.popupdesc.removeuser":
            "\u015eikayet g\xf6nderildi.\nBu kullan\u0131c\u0131 toplant\u0131dan \xe7\u0131kar\u0131ls\u0131n m\u0131?",
          "groupcall.report.subtitle.reportreason":
            "\u015eikayetinizin nedenini ve neler oldu\u011funu bize bildirin.",
          "groupcall.screenshare.receiver.failreceive":
            "Ekran\u0131n y\xfcklenmesi bekleniyor...",
          "groupcall.screenshare.receiver.senderdesc":
            "%1 ekran\u0131n\u0131 payla\u015f\u0131yor.",
          "groupcall.screenshare.receiver.viewscreen":
            "Payla\u015f\u0131lan ekrana d\xf6n",
          "groupcall.screenshare.sender.btn.stop":
            "Payla\u015f\u0131m\u0131 durdur",
          "groupcall.screenshare.sender.desc":
            "Ekran\u0131n\u0131z\u0131 payla\u015f\u0131yorsunuz.",
          "groupcall.settings.menu.report": "\u015eikayet et",
          "groupcall.startmeeting.popupdesc.userexceededlimit":
            "En fazla 30 toplant\u0131 olu\u015fturabilirsiniz. Art\u0131k kullan\u0131lmayan bir toplant\u0131y\u0131 silip tekrar deneyin.",
          "groupcall.tempchat.popupdesc.cantinvitethroughchat":
            "Toplant\u0131ya yaln\u0131zca toplant\u0131 davetini payla\u015farak kat\u0131l\u0131mc\u0131 davet edebilirsiniz. Ba\u011flant\u0131y\u0131 kopyalay\u0131n ve ba\u015fka ki\u015fileri davet etmek i\xe7in sohbette payla\u015f\u0131n.",
          "groupcall.title": "Grup Aramas\u0131",
          "groupcall.toast.deviceerror.camera":
            "Bu kamera ba\u015fka bir uygulama taraf\u0131ndan kullan\u0131l\u0131yor. L\xfctfen farkl\u0131 bir kamera se\xe7in.",
          "groupcall.toast.newdevice.camera":
            '"%1" kameras\u0131na ge\xe7ildi.',
          "groupcall.toast.newdevice.mic": '"%1" mikrofonuna ge\xe7ildi.',
          "groupcall.toast.newdevice.speaker":
            '"%1" hoparl\xf6r\xfcne ge\xe7ildi.',
          "groupcall.verifyage.desc.verifyageinmobileversion":
            'Bu \xf6zelli\u011fi kullanmak i\xe7in ya\u015f\u0131n\u0131z\u0131 do\u011frulaman\u0131z gerekir.\nYa\u015f\u0131n\u0131z\u0131 do\u011frulamak i\xe7in LINE\'\u0131n mobil s\xfcr\xfcm\xfcnde Ayarlar > "Ya\u015f do\u011frulamas\u0131" b\xf6l\xfcm\xfcne gidin.',
          "groupcall.video.alert.member.join":
            "%1 grup aramas\u0131na kat\u0131ld\u0131.",
          "groupcall.video.alert.member.leave":
            "%1 grup aramas\u0131ndan ayr\u0131ld\u0131.",
          "groupcall.video.alert.streaming.off.member":
            "Bu ki\u015finin g\xf6r\xfcnt\xfcs\xfcn\xfc kapatt\u0131n\u0131z.\nG\xf6r\xfcnt\xfclemek i\xe7in tekrar a\xe7\u0131n.",
          "groupcall.video.chat.error.without.camera.body":
            "Kamera alg\u0131lanmad\u0131. Bu grup aramas\u0131na g\xf6r\xfcnt\xfcn\xfcz\xfc g\xf6stermeden kat\u0131lmak istiyor musunuz?",
          "groupcall.video.chat.error.without.camera.btn.video":
            "G\xf6r\xfcnt\xfcl\xfc Aramaya Kat\u0131l",
          "groupcall.video.chat.error.without.camera.btn.voice":
            "Sesli Aramaya Kat\u0131l",
          "groupcall.video.chat.layer.start.dscr":
            "Grup g\xf6r\xfcnt\xfcl\xfc aramas\u0131 ba\u015flat\u0131n.",
          "groupcall.video.chat.layer.start.msg":
            "%1 bir grup g\xf6r\xfcnt\xfcl\xfc aramas\u0131 ba\u015flatt\u0131.",
          "groupcall.video.chat.layer.start.shortmsg":
            "G\xf6r. arama ba\u015flad\u0131",
          "groupcall.video.chat.message.invite":
            'Bir grup g\xf6r\xfcnt\xfcl\xfc aramas\u0131na davet edildiniz:\n"%1"',
          "groupcall.video.chat.message.start":
            "Grup g\xf6r\xfcnt\xfcl\xfc aramas\u0131 ba\u015flad\u0131.",
          "groupcall.video.desc.guide.tryCall":
            "\u015eimdi masa\xfcst\xfcn\xfczde LINE\u2019\u0131 kullanarak grup g\xf6r\xfcnt\xfcl\xfc aramalar\u0131na kat\u0131labilirsiniz. ",
          "groupcall.video.error.change.to.voice":
            "A\u011f dengesizli\u011fi veya yo\u011fun arama hacmi nedeniyle sesli aramaya ge\xe7ildi.",
          "groupcall.video.error.not.video.member":
            "Bu ki\u015fi aramaya g\xf6r\xfcnt\xfc olmadan kat\u0131ld\u0131\u011f\u0131 i\xe7in g\xf6r\xfcnt\xfcs\xfc g\xf6sterilemiyor.",
          "groupcall.video.fullview.streaming.fail.body":
            "%1 ki\u015fisinin g\xf6r\xfcnt\xfcs\xfc y\xfcklenemedi.\nL\xfctfen tekrar deneyin.",
          "groupcall.video.fullview.streaming.fail.button": "Yeniden dene",
          "groupcall.video.fullview.streaming.off.body":
            "%1 ki\u015fisinin g\xf6r\xfcnt\xfcs\xfcn\xfc kapatt\u0131n\u0131z.\nG\xf6r\xfcnt\xfclemek i\xe7in tekrar a\xe7\u0131n.",
          "groupcall.video.menu.streaming.off": "G\xf6r\xfcnt\xfcy\xfc Kapat",
          "groupcall.video.menu.streaming.on": "G\xf6r\xfcnt\xfcy\xfc A\xe7",
          "groupcall.video.title": "Grup g\xf6r\xfcnt\xfcl\xfc aramas\u0131",
          "groupcall.video.toast.cameraoff":
            "Kameran\u0131z devre d\u0131\u015f\u0131 b\u0131rak\u0131ld\u0131 ve Efektler penceresi kapat\u0131ld\u0131. ",
          "groupcall.video.tooltip.focusview":
            "Odak g\xf6r\xfcn\xfcm\xfcne ge\xe7",
          "groupcall.video.tooltip.gridview":
            "Tablo g\xf6r\xfcn\xfcm\xfcne ge\xe7",
          "groupcall.video.tooltip.profilelist":
            "Kat\u0131l\u0131mc\u0131lar\u0131 g\xf6r\xfcnt\xfcle",
          "groupcall.video.tooltip.videolayout":
            "Video yerle\u015fimini de\u011fi\u015ftir",
          "groupcall.viewmode.desc.focusviewcenter":
            "Odak g\xf6r\xfcn\xfcm\xfc (orta)",
          "groupcall.viewmode.desc.focusviewleft":
            "Odak g\xf6r\xfcn\xfcm\xfc (sol)",
          "groupcall.viewmode.desc.focusviewright":
            "Odak g\xf6r\xfcn\xfcm\xfc (sa\u011f)",
          "groupcall.viewmode.desc.gridview": "Izgara g\xf6r\xfcn\xfcm\xfc",
          "groupcall.voice.chat.confirm.popup.join":
            "Devam eden bir sesli grup aramas\u0131 var.\xa0Aramaya kat\u0131lmak istiyor musunuz?",
          "groupcall.voice.chat.layer.start.dscr":
            "Grup sesli aramas\u0131 ba\u015flat\u0131n.",
          "groupcall.voice.chat.layer.start.msg":
            "%1 bir grup sesli aramas\u0131 ba\u015flatt\u0131.",
          "groupcall.voice.chat.layer.start.shortmsg":
            "Sesli arama ba\u015flad\u0131",
          "groupcall.voice.chat.message.invite":
            'Bir grup sesli aramas\u0131na davet edildiniz:\n"%1"',
          "groupcall.voice.chat.message.start":
            "Grup sesli aramas\u0131 ba\u015flad\u0131. ",
          "groupcall.voice.title": "Grup sesli aramas\u0131",
          "groupcall.watchtogethercall.popupbutton.start": "Ba\u015flat",
          "groupcall.watchtogethercall.popupdesc.startwatchtogetherforeveryone":
            "Di\u011fer ki\u015filerle birlikte bu videoyu izlemeye ba\u015flamak istiyor musunuz?",
          "groupcall.watchtogethercall.toast.currentlyinsession":
            "%1 ekran\u0131n\u0131 payla\u015f\u0131yor.",
          "groupcall.watchtogethercall.toast.userendedwatchtogether":
            "%1 ekran\u0131n\u0131 payla\u015fmay\u0131 durdurdu.",
          "groupcall.watchtogethercall.toast.userstartedwatchtogether":
            "%1 ekran\u0131n\u0131 payla\u015fmaya ba\u015flad\u0131.",
          "groupcall.watchtogethermenu.button.screenshare":
            "Ekran\u0131n\u0131z",
          "groupcall.watchtogethermenu.button.youtube": "YouTube",
          "groupcall.watchtogethermenu.desc.policy": "Gizlilik Politikas\u0131",
          "groupcall.watchtogethermenu.desc.searchonyoutube":
            "YouTube ba\u011flant\u0131s\u0131 veya anahtar kelimeyle aray\u0131n",
          "groupcall.watchtogethermenu.desc.terms":
            "H\u0130ZMET KO\u015eULLARI",
          "groupcall.youtube.edge.popup.btn.install": "Devam",
          "groupcall.youtube.edge.popup.desc":
            "YouTube videolar\u0131 payla\u015fmaya ba\u015flamak i\xe7in Microsoft Edge Chromium'u y\xfcklemeniz gerekiyor. Microsoft web sitesine devam edilsin mi?",
          "groupcall.youtube.endduetoerror":
            "YouTube videosu payla\u015f\u0131m\u0131 ge\xe7ici bir hata nedeniyle sonland\u0131r\u0131ld\u0131. L\xfctfen tekrar deneyin.",
          "groupcall.youtube.error.reinstall":
            "Video ge\xe7ici bir hata nedeniyle oynat\u0131lam\u0131yor. L\xfctfen tekrar deneyin veya sorun devam ederse taray\u0131c\u0131n\u0131z\u0131 yeniden y\xfckleyin.",
          "groupcall.youtube.paste": "YouTube videosu payla\u015f",
          "groupcall.youtube.paste.btn.play": "Oynat",
          "groupcall.youtube.paste.btn.search": "\xd6nizleme",
          "groupcall.youtube.paste.desc":
            "Di\u011fer ki\u015filerle payla\u015fmak istedi\u011finiz videolar i\xe7in arama yap\u0131n. (Kulakl\u0131k kullanman\u0131z \xf6nerilir.)",
          "groupcall.youtube.paste.noresult":
            "Video y\xfcklenemiyor. L\xfctfen ba\u011flant\u0131y\u0131 kontrol edip tekrar deneyin.",
          "groupcall.youtube.paste.startnewone.popup.btn.play": "Oynat",
          "groupcall.youtube.paste.startnewone.popup.desc":
            "Ge\xe7erli video duraklat\u0131l\u0131p yenisi oynat\u0131ls\u0131n m\u0131?",
          "groupcall.youtube.paste.toast.currentlyinsession":
            "%1 zaten bir YouTube videosu payla\u015f\u0131yor.",
          "groupcall.youtube.paste.toast.error":
            "Ge\xe7ici bir hata nedeniyle video payla\u015f\u0131lam\u0131yor.",
          "groupcall.youtube.paste.unknownerror":
            "Video ge\xe7ici bir hata nedeniyle y\xfcklenemiyor. L\xfctfen tekrar deneyin.",
          "groupcall.youtube.receiver.newvideo":
            "%1 yeni bir video haz\u0131rl\u0131yor.",
          "groupcall.youtube.receiver.playvideo": "Videoya d\xf6n",
          "groupcall.youtube.receiver.senderdesc":
            "%1 bir video oynat\u0131yor.",
          "groupcall.youtube.receiver.tooltip.mute": "Sessiz",
          "groupcall.youtube.receiver.tooltip.unmute": "Sesi a\xe7",
          "groupcall.youtube.receiver.videopaused":
            "%1 videoyu duraklatt\u0131.",
          "groupcall.youtube.sender.btn.stop":
            "Payla\u015f\u0131m\u0131 durdur",
          "groupcall.youtube.sender.desc":
            "Bir video payla\u015f\u0131yorsunuz.",
          "groupcall.youtube.stop.popup.btn.confirm":
            "Payla\u015f\u0131m\u0131 durdur",
          "groupcall.youtube.stop.popup.desc":
            "Bu YouTube videosunun payla\u015f\u0131m\u0131 durdurulsun mu?",
          "groupcall.youtube.windows.serveroff.popup.desc":
            "YouTube video payla\u015f\u0131m\u0131, \u015fu anda Windows masa\xfcst\xfcnde kullan\u0131lam\u0131yor.",
          "groupchat.dynamic.group.title.invitecanceled.updatename":
            "%1, %2 adl\u0131 ki\u015finin gruba kat\u0131lma davetini iptal etti.",
          "groupchat.dynamic.group.title.memberinvited.updatename":
            '<![CDATA[%1, %2 adl\u0131 ki\u015fiyi gruba ekledi. <a href="line://nv/group/settings/groupname/chatId=%3">Grup ad\u0131n\u0131 de\u011fi\u015ftirin</a>]]>',
          "groupchat.dynamic.group.title.memberjoined.updatename":
            '<![CDATA[%1 gruba kat\u0131ld\u0131. <a href="line://nv/group/settings/groupname/chatId=%2">Grup ad\u0131n\u0131 de\u011fi\u015ftirin</a>]]>',
          "groupchat.dynamic.group.title.memberremoved.updatename":
            "%1, %2 adl\u0131 ki\u015fiyi gruptan \xe7\u0131kard\u0131.",
          "groupchat.linkqr.error.block":
            "Bu grup, ba\u011flant\u0131lar veya QR \nkodlar\u0131 ile gelen grup davetlerine izin vermiyor.",
          "groupchat.linkqr.error.renew": "Bu grup bulunmuyor.",
          "groupchat.push.invitedtojoingroup":
            "%1 sizi bir gruba kat\u0131lmaya davet etti.",
          "groupchat.push.someonejoinsgroup": "%1 gruba kat\u0131ld\u0131.",
          "groupchat.systemmsg.allowjoiningvialinkorqr":
            "%1 ba\u011flant\u0131 veya QR koduyla kat\u0131lmaya izin verdi.",
          "groupchat.systemmsg.cancelinvite":
            "%1, %2 adl\u0131 ki\u015finin gruba davetini iptal etti.",
          "groupchat.systemmsg.cancelinvite.updatename":
            '<![CDATA[%1, %2 kullan\u0131c\u0131s\u0131n\u0131n davetini iptal etti. Grup ad\u0131 otomatik olarak de\u011fi\u015fmeyecek. <a href="line://nv/group/settings/groupname/chatId=%3">Grup ad\u0131n\u0131 de\u011fi\u015ftir</a>]]>',
          "groupchat.systemmsg.changegroupname":
            '%1 grubun ad\u0131n\u0131 "%2" olarak de\u011fi\u015ftirdi.',
          "groupchat.systemmsg.changegroupphoto":
            "%1 grubun profil foto\u011fraf\u0131n\u0131 de\u011fi\u015ftirdi.",
          "groupchat.systemmsg.disablejoiningvialinkorqr":
            "%1 ba\u011flant\u0131 veya QR koduyla kat\u0131lmay\u0131 devre d\u0131\u015f\u0131 b\u0131rakt\u0131.",
          "groupchat.systemmsg.inviteuser":
            "%1, %2 adl\u0131 ki\u015fiyi gruba davet etti. Sohbet etmek i\xe7in kat\u0131lmas\u0131n\u0131 bekleyin.",
          "groupchat.systemmsg.inviteuser1n":
            "%2, %1 taraf\u0131ndan gruba eklendi.",
          "groupchat.systemmsg.inviteuser1n.atcreation.updatename":
            '<![CDATA[%2, %1 taraf\u0131ndan gruba eklendi. <a href="line://nv/group/settings/groupname/chatId=%3">Grup ad\u0131n\u0131 de\u011fi\u015ftir</a>]]>',
          "groupchat.systemmsg.inviteuser1n.updatename":
            '<![CDATA[%2, %1 taraf\u0131ndan gruba eklendi. Grup ad\u0131 otomatik olarak de\u011fi\u015fmeyecek. <a href="line://nv/group/settings/groupname/chatId=%3">Grup ad\u0131n\u0131 de\u011fi\u015ftir</a>]]>',
          "groupchat.systemmsg.kickoutuser":
            "%1, %2 adl\u0131 ki\u015fiyi gruptan \xe7\u0131kard\u0131.",
          "groupchat.systemmsg.kickoutuser.updatename":
            '<![CDATA[%2, %1 taraf\u0131ndan gruptan silindi. Grup ad\u0131 otomatik olarak de\u011fi\u015fmeyecek. <a href="line://nv/group/settings/groupname/chatId=%3">Grup ad\u0131n\u0131 de\u011fi\u015ftir</a>]]>',
          "groupchat.systemmsg.userjoin": "%1 gruba kat\u0131ld\u0131.",
          "groupchat.systemmsg.userjoin.updatename":
            "%1 gruba kat\u0131ld\u0131.",
          "groupchat.systemmsg.userleave": "%1 gruptan ayr\u0131ld\u0131.",
          "groupchat.systemmsg.userleave.updatename":
            '<![CDATA[%1 gruptan ayr\u0131ld\u0131. Grup ad\u0131 otomatik olarak de\u011fi\u015fmeyecek. <a href="line://nv/group/settings/groupname/chatId=%2">Grup ad\u0131n\u0131 de\u011fi\u015ftir</a>]]>',
          "groupchat.systemmsg.youareinvited": "%1 sizi gruba davet etti.",
          "grouphome.album.alert.inprogress":
            "\xd6\u011fe y\xfckledi\u011finiz s\u0131rada ba\u015fka \xf6\u011fe ekleyemez veya alb\xfcmleri silemezsiniz. \nL\xfctfen daha sonra tekrar deneyin.",
          "grouphome.album.alert.reupload":
            "\xd6\u011fe yeniden y\xfcklensin mi?",
          "grouphome.album.alert.save.failed": "\xd6\u011fe kaydedilemedi.",
          "grouphome.album.alert.stopUpload": "\u0130ptal edildi",
          "grouphome.album.alert.unregistereduser":
            "Alb\xfcm\xfc hesab\u0131 silinen kullan\u0131c\u0131lar ile kullanamazs\u0131n\u0131z.",
          "grouphome.album.label.reupload": "Tekrar",
          "grouphome.albumdetail.addPhoto": "Foto\u011fraf Ekle",
          "grouphome.albumdetail.alert.changeAlbum":
            "Alb\xfcm silindikten sonra tekrar\nkullan\u0131lamaz ve i\xe7erisinde ki b\xfct\xfcn foto\u011fraflar alb\xfcm ile birlikte silinecektir.\nBu alb\xfcm\xfc silmek istedi\u011finize emin misiniz?",
          "grouphome.albumdetail.changeName":
            "Alb\xfcm\xfc Yeniden Adland\u0131r",
          "grouphome.albumdetail.delete": "Alb\xfcm\xfc Sil",
          "grouphome.albumdetail.empty.desc":
            "Hepimizin hayat boyu hat\u0131rlamak istedi\u011fi anlar vard\u0131r. Arkada\u015flar\u0131n\u0131zla birlikte alb\xfcmler olu\u015fturun!",
          "grouphome.albumdetail.empty.title":
            "Hi\xe7bir \xf6\u011fe eklenmedi.",
          "grouphome.albumdetail.error":
            "\xdczg\xfcn\xfcz! Bu bilgiyi y\xfckleyemedik.\nL\xfctfen tekrar deneyin.",
          "grouphome.albumdetail.saveComplete":
            "Ba\u015far\u0131yla kaydedildi.",
          "grouphome.albumdetail.saveall": "T\xfcm\xfcn\xfc Kaydet",
          "grouphome.albumdetail.savingPhoto":
            "\xd6\u011feler kaydediliyor\u2026",
          "grouphome.albumdetail.selectCount.plurals.few": "%n se\xe7ildi",
          "grouphome.albumdetail.selectCount.plurals.many": "%n se\xe7ildi",
          "grouphome.albumdetail.selectCount.plurals.one": "%n se\xe7ildi",
          "grouphome.albumdetail.selectCount.plurals.other": "%n se\xe7ildi",
          "grouphome.albumdetail.selectCount.plurals.two": "%n se\xe7ildi",
          "grouphome.albumdetail.selectCount.plurals.zero": "%n se\xe7ildi",
          "grouphome.albumdetail.title.changeAlbum":
            "Alb\xfcm\xfc Yeniden Adland\u0131r",
          "grouphome.albumdetail.uploader": "%1 taraf\u0131ndan",
          "grouphome.alert.addphoto":
            "\u0130ptal etmek istedi\u011finizden emin misiniz?\nEklenen \xf6\u011fe kaydedilmeyecek.",
          "grouphome.alert.albumLimitCount":
            "Ba\u015fka alb\xfcm olu\u015fturamazs\u0131n\u0131z.\nEn \xe7ok %n alb\xfcm olu\u015fturulabilir.",
          "grouphome.alert.alreadyDeleteAlbum": "Bu alb\xfcm zaten silindi.",
          "grouphome.alert.alreadyDeletePhoto": "Bu \xf6\u011fe silindi.",
          "grouphome.alert.makealbum":
            "Alb\xfcm\xfcn\xfcz\xfc olu\u015fturmay\u0131 bitirmediniz. Olu\u015fturmadan ayr\u0131lmak istiyor musunuz?",
          "grouphome.alert.photoLimitCount":
            "Ba\u015fka foto\u011fraf ekleyemezsiniz.\nHer alb\xfcme en \xe7ok %1 foto\u011fraf eklenebilir.",
          "grouphome.label.album": "Alb\xfcm",
          "grouphome.label.album.addPhoto": "Foto\u011fraf Ekle",
          "grouphome.label.album.changeName":
            "Alb\xfcm\xfc Yeniden Adland\u0131r",
          "grouphome.label.album.delete": "Alb\xfcm\xfc Sil",
          "grouphome.label.album.empty": "Kay\u0131tl\u0131 alb\xfcm yok.",
          "grouphome.label.album.make": "Alb\xfcm Olu\u015ftur",
          "grouphome.label.albumName": "Alb\xfcm \u0130smi",
          "grouphome.label.post": "Notlar",
          "grouphome.label.post.empty": "Hen\xfcz hi\xe7 not eklenmedi.",
          "grouphome.label.showAllPost": "T\xfcm Notlar",
          "grouphome.label.showUserHome": "%1 Home ekran\u0131",
          "grouphome.label.showallalbum": "T\xfcm Alb\xfcmler",
          "grouphome.label.writepost": "Yeni not",
          "grouphome.member.alert.joinGroup":
            "Siz art\u0131k grubun bir \xfcyesisiniz",
          "grouphome.member.label.showGroup": "Grubu G\xf6ster",
          "grouphome.post.alert.unregistereduser":
            "Notlar\u0131, hesaplar\u0131 silinen kullan\u0131c\u0131lar ile kullanamazs\u0131n\u0131z.",
          "gruopchat.dynamic.group.title.memberleft.updatename":
            "%1 gruptan ayr\u0131ld\u0131.",
          "hub.menubar.tooltip": "Check out LINE services in LINE HUB.",
          "hub.menubar.tooltip.renew":
            "LINE HUB\u5168\u65b0\u5716\u793a\uff0c\u638c\u63e1\u6240\u6709LINE\u7cbe\u9078\u5167\u5bb9\uff01",
          "image.viewer.btn.edit.tooltip":
            "Resim d\xfczenleyici a\xe7\u0131l\u0131yor...",
          "image.viewer.btn.minimizesize.tooltip":
            "Pencereye s\u0131\u011fd\u0131r\xa0",
          "image.viewer.cancel": "Iptal",
          "image.viewer.copy": "Kopyala",
          "image.viewer.crop": "Foto\u011frafi K\u0131rp",
          "image.viewer.download.error": "Ge\xe7ici hata.",
          "image.viewer.loading.error":
            "Bir ge\xe7ici hata nedeniyle iste\u011finiz i\u015fleme koyulamad\u0131.\nL\xfctfen tekrar deneyin.\n",
          "image.viewer.ok": "Tamam",
          "image.viewer.save": "\u0130ndir",
          "image.viewer.share.chat": "Sohbette payla\u015f",
          "imageEditor.btn.doNotSave": "Kaydetme",
          "imageEditor.msg.onEditing":
            "D\xfczenlenen resimler bilgisayar\u0131n\u0131za kaydedilsin mi?",
          "imageEditor.msg.onModified":
            "Resim kaydedilmemi\u015f de\u011fi\u015fiklikler i\xe7eriyor.",
          "imageEditor.msg.toobig":
            "Bu resim, \xe7\xf6z\xfcn\xfcrl\xfc\u011f\xfc \xe7ok y\xfcksek oldu\u011fu i\xe7in d\xfczenlenemiyor.",
          "invite.btn.cancel.title": "Iptal",
          "invite.btn.invite.title": "Tamam",
          "invite.label.create.title": "Sohbete Ekle",
          "invite.label.invitee.title": "Davet etme",
          "invite.label.nobuddytoselect.title":
            "Hi\xe7 arkada\u015f se\xe7mediniz.",
          "invite.label.nosearchresult.title":
            "Kullan\u0131c\u0131 bulunamad\u0131",
          "invite.label.nothing.title":
            "Se\xe7ebilece\u011finiz bir arkada\u015f\u0131n\u0131z yok.",
          "invite.label.person.title.plurals.few": "%n\xdcye",
          "invite.label.person.title.plurals.many": "%n\xdcye",
          "invite.label.person.title.plurals.one": "%n\xdcye",
          "invite.label.person.title.plurals.other": "%n\xdcye",
          "invite.label.person.title.plurals.two": "%n\xdcye",
          "invite.label.person.title.plurals.zero": "%n\xdcye",
          "keep.alert.sendtochat.unsupported.all.other":
            "Se\xe7ilen dosyalar desteklenmeyen bi\xe7imde oldu\u011fu i\xe7in g\xf6nderilemedi.",
          "keep.alert.sendtochat.unsupported.file.multi": "",
          "keep.alert.sendtochat.unsupported.some.other":
            "%n dosya desteklenmeyen bi\xe7imde oldu\u011fu i\xe7in g\xf6nderilemedi. Geri kalan dosyalar g\xf6nderilsin mi?",
          "keep.btn.retry": "Tekrar",
          "keep.category.all": "T\xfcm\xfc",
          "keep.category.files": "Dosyalar",
          "keep.category.links": "Ba\u011flant\u0131lar",
          "keep.category.memos": "Notlar",
          "keep.category.newtext": "Metin",
          "keep.category.photos": "Foto\u011fraflar",
          "keep.category.photosvideos": "Foto\u011fraflar ve videolar",
          "keep.category.text": "Metin",
          "keep.category.videos": "Videolar",
          "keep.common.error.503":
            "Keep \u015fu anda bak\u0131mda.\nKesinti s\xfcresi: dd MMM, HH:mm - dd MMM, HH:mm (UTC+9)",
          "keep.date.format": "d.M.yyyy",
          "keep.desc.PR.title": "Keep'i ne zaman kullanabilirim?",
          "keep.desc.alreadyDeleted": "Bu i\xe7erik zaten silindi.",
          "keep.desc.copied": "Kopyaland\u0131",
          "keep.desc.count.others.plurals.few": "ve %1 adet daha",
          "keep.desc.count.others.plurals.many": "ve %1 adet daha",
          "keep.desc.count.others.plurals.one": "ve %1 adet daha",
          "keep.desc.count.others.plurals.other": "ve %1 adet daha",
          "keep.desc.count.others.plurals.two": "ve %1 adet daha",
          "keep.desc.count.others.plurals.zero": "ve %1 adet daha",
          "keep.desc.delete.other": "Se\xe7ilen \xf6\u011feler silinsin mi?",
          "keep.desc.discard":
            "D\xfczenlemeleriniz kaydedilmedi. D\xfczenlemeler silinsin mi?",
          "keep.desc.downloadError":
            "Dosya indirilirken hata olu\u015ftu\u011fu i\xe7in g\xf6rev tamamlanamad\u0131.",
          "keep.desc.downloading": "\u0130ndiriliyor...",
          "keep.desc.drag":
            "Dosyan\u0131z\u0131 s\xfcr\xfckleyip buraya b\u0131rak\u0131n\nveya Y\xfckle'yi t\u0131klay\u0131n.",
          "keep.desc.dragHere":
            "Dosyan\u0131z\u0131 s\xfcr\xfckleyip buraya b\u0131rak\u0131n.",
          "keep.desc.error.reason.exceedPhotoResolution":
            "10.000 pikselden b\xfcy\xfck",
          "keep.desc.error.reason.exceedPhotoSize":
            "Foto\u011fraf 20 MB'tan b\xfcy\xfck.",
          "keep.desc.error.reason.expired":
            "Art\u0131k kullan\u0131lamad\u0131\u011f\u0131ndan bu i\xe7erik y\xfcklenemiyor.",
          "keep.desc.error.reason.lackOfStorage":
            "Yeterli depolama alan\u0131 yok.",
          "keep.desc.error.reason.networkError":
            "A\u011f hatas\u0131 olu\u015ftu.",
          "keep.desc.error.reason.notFoundFile": "Dosya bulunamad\u0131.",
          "keep.desc.error.reason.unknown": "Bu \xf6\u011fe y\xfcklenemiyor.",
          "keep.desc.error.reason.unknownFileType":
            "Bu dosya t\xfcr\xfc y\xfcklenemiyor.",
          "keep.desc.exceedCharacter":
            "En fazla 10.000 karakter girebilirsiniz. ",
          "keep.desc.expiredContent.askDelete":
            "Depolama s\xfcresi doldu\u011fundan bu \xf6\u011fenin i\xe7eri\u011fini art\u0131k g\xf6r\xfcnt\xfcleyemezsiniz.\nS\xfcresi dolan \xf6\u011feler listesi silinsin mi?\n",
          "keep.desc.expiredContent.couldNotConfirmed":
            "Depolama s\xfcresi doldu\u011fundan bu \xf6\u011fenin i\xe7eri\u011fini art\u0131k g\xf6r\xfcnt\xfcleyemezsiniz.",
          "keep.desc.expiredContent.storagePeriod": "Depolama s\xfcresi doldu.",
          "keep.desc.fileCountExceeds": "En fazla 20 dosya kaydedebilirsiniz.",
          "keep.desc.guide.tryKeep":
            "\u0130\xe7eri\u011finizi Saklay\u0131n\nKeep'i hemen deneyin!",
          "keep.desc.itemsavedinkeepexpired":
            "Bu \xf6\u011fe art\u0131k kullan\u0131lam\u0131yor.",
          "keep.desc.loadFailed":
            "\xdczg\xfcn\xfcz, y\xfckleme ba\u015far\u0131s\u0131z oldu.\nL\xfctfen a\u011f ba\u011flant\u0131n\u0131z\u0131 kontrol edin ve tekrar deneyin. ",
          "keep.desc.loadFromKeep": "Dosyalar\u0131 Keep'te A\xe7",
          "keep.desc.loadingData": "Veriler y\xfckleniyor. L\xfctfen bekleyin.",
          "keep.desc.maximumUploadableSize.plurals.few":
            "Tek seferde en fazla yaln\u0131zca %1 MB y\xfckleyebilirsiniz.",
          "keep.desc.maximumUploadableSize.plurals.many":
            "Tek seferde en fazla yaln\u0131zca %1 MB y\xfckleyebilirsiniz.",
          "keep.desc.maximumUploadableSize.plurals.one":
            "Tek seferde en fazla yaln\u0131zca %1 MB y\xfckleyebilirsiniz.",
          "keep.desc.maximumUploadableSize.plurals.other":
            "Tek seferde en fazla yaln\u0131zca %1 MB y\xfckleyebilirsiniz.",
          "keep.desc.maximumUploadableSize.plurals.two":
            "Tek seferde en fazla yaln\u0131zca %1 MB y\xfckleyebilirsiniz.",
          "keep.desc.maximumUploadableSize.plurals.zero":
            "Tek seferde en fazla yaln\u0131zca %1 MB y\xfckleyebilirsiniz.",
          "keep.desc.noSearchResult": "Sonu\xe7 bulunamad\u0131.",
          "keep.desc.noSelectableItem":
            "Se\xe7ebilece\u011finiz \xf6\u011fe yok.",
          "keep.desc.notSupportType":
            "Bu dosya t\xfcr\xfc a\xe7\u0131lam\u0131yor. ",
          "keep.desc.notifyPeriod":
            "%1MB \xfczerindeki dosyalar 30 g\xfcn s\xfcreyle kaydedilir. ",
          "keep.desc.photoLoadFailed":
            "Foto\u011fraf y\xfcklenemiyor.\nL\xfctfen a\u011f ba\u011flant\u0131n\u0131z\u0131 kontrol edin ve tekrar deneyin. ",
          "keep.desc.quit.uploading":
            "\u015eu anda Keep'e dosya y\xfckl\xfcyorsunuz.\nLINE'\u0131n kapat\u0131lmas\u0131 y\xfckleme i\u015fleminin iptal edilmesine neden olur.",
          "keep.desc.requesturl.failed.error":
            "URL bilgileri y\xfcklenemedi. L\xfctfen tekrar deneyin.",
          "keep.desc.retry": "L\xfctfen tekrar deneyin.",
          "keep.desc.saved": "Kaydedildi. ",
          "keep.desc.savedInKeep": "Keep'e kaydedildi.",
          "keep.desc.saving": "Kaydediliyor...",
          "keep.desc.storageFull": "Keep'te yeterli depolama alan\u0131 yok.",
          "keep.desc.storageFull.freeUpSpace":
            "Keep'te yeterli depolama alan\u0131 yok. L\xfctfen alan\u0131 biraz bo\u015falt\u0131n ve tekrar deneyin. ",
          "keep.desc.storageFull.unable":
            "Keep'te daha fazla kullan\u0131labilir depolama alan\u0131n\u0131z olmad\u0131\u011f\u0131ndan \xf6\u011feler eklenemedi.",
          "keep.desc.storageFull.unableToSelect":
            "Keep'te daha fazla kullan\u0131labilir depolama alan\u0131n\u0131z olmad\u0131\u011f\u0131ndan \xf6\u011feler se\xe7ilemedi. ",
          "keep.desc.temporaryError":
            "Ge\xe7ici bir hata nedeniyle\nistenen g\xf6rev tamamlanamad\u0131.\nL\xfctfen tekrar deneyin.",
          "keep.desc.totalSpace": "Toplam Alan: %1",
          "keep.desc.unexpectedErrorOccured":
            "Beklenmeyen bir hata olu\u015ftu.",
          "keep.desc.upload.error.maxFileSize":
            "%1 GB\u2019tan b\xfcy\xfck dosyalar y\xfcklenemedi.\nL\xfctfen dosya boyutunu kontrol edip tekrar deneyin.",
          "keep.desc.upload.inProgress": "Keep'e y\xfckleniyor...",
          "keep.desc.upload.notifyIncompleteUpload":
            "Dosya y\xfckleme devam ediyor.\nLINE'\u0131 kapat\u0131rsan\u0131z dosyan\u0131n yaln\u0131zca bir k\u0131sm\u0131 y\xfcklenebilir.",
          "keep.desc.uploadFail.storage.plurals.few":
            "Yetersiz depolama alan\u0131 nedeniyle %1 \xf6\u011fe y\xfcklenemedi.",
          "keep.desc.uploadFail.storage.plurals.many":
            "Yetersiz depolama alan\u0131 nedeniyle %1 \xf6\u011fe y\xfcklenemedi.",
          "keep.desc.uploadFail.storage.plurals.one":
            "Yetersiz depolama alan\u0131 nedeniyle %1 \xf6\u011fe y\xfcklenemedi.",
          "keep.desc.uploadFail.storage.plurals.other":
            "Yetersiz depolama alan\u0131 nedeniyle %1 \xf6\u011fe y\xfcklenemedi.",
          "keep.desc.uploadFail.storage.plurals.two":
            "Yetersiz depolama alan\u0131 nedeniyle %1 \xf6\u011fe y\xfcklenemedi.",
          "keep.desc.uploadFail.storage.plurals.zero":
            "Yetersiz depolama alan\u0131 nedeniyle %1 \xf6\u011fe y\xfcklenemedi.",
          "keep.desc.uploadFailed": "Y\xfcklenemedi.",
          "keep.desc.uploadPending": "Y\xfckleme bekleniyor...",
          "keep.desc.uploading": "Y\xfckleniyor...",
          "keep.desc.usableSpace": "%1 Kullan\u0131lan",
          "keep.desc.videoLoadFailed":
            "Video y\xfcklenemiyor.\nL\xfctfen a\u011f ba\u011flant\u0131n\u0131z\u0131 kontrol edin ve tekrar deneyin. ",
          "keep.desc.wait": "L\xfctfen bekleyin.",
          "keep.desc.warning.deleteAll":
            "T\xfcm dosyalar silinsin mi?\nDosyalar\u0131n\u0131z silindikten sonra geri y\xfcklenemez.",
          "keep.desc.warning.deleteAll.chromeUser":
            "T\xfcm dosyalar silinsin mi?\nSil se\xe7ene\u011fini belirlerseniz Chrome notlar\u0131n\u0131z da kald\u0131r\u0131l\u0131r.\nDosyalar\u0131n\u0131z silindikten sonra geri y\xfcklenemez.",
          "keep.download.btn": "Klas\xf6r A\xe7",
          "keep.download.success": "\u0130ndirme tamamland\u0131.",
          "keep.emptytitle.title": "Her \u015feyi Keep'te tutun",
          "keep.full.sync.working": "E\u015fleniyor\u2026 %1%",
          "keep.home.bannerdesc.endofkeep":
            "Keep'teki \xf6nemli \xf6\u011feleri %1 tarihine kadar yedekleyin.",
          "keep.home.bannertitle.endofkeep":
            "Keep'in kullan\u0131mdan kald\u0131r\u0131lmas\u0131",
          "keep.home.desc.timeformat": "d MMMM yyyy",
          "keep.home.emptydesc.descforplaces":
            "Resmi hesaplardan kaydetti\u011finiz yerler, LINE PLACE yerleri ve benzeri yerler burada g\xf6sterilir.",
          "keep.home.popupbutton.close": "Kapat",
          "keep.home.popupbutton.dontshowagain": "Tekrar g\xf6sterme",
          "keep.home.popupbutton.learnmore": "Daha fazla bilgi",
          "keep.home.popupdesc.endofkeep":
            "Keep %1 tarihinden itibaren kullan\u0131mdan kald\u0131r\u0131lacak. \xd6nemli \xf6\u011feleri l\xfctfen cihaz\u0131n\u0131za yedekleyin.\n* Keep kullan\u0131mdan kald\u0131r\u0131ld\u0131ktan sonra, Keep Memo'yu kullanmaya devam edebileceksiniz.",
          "keep.home.popuptitle.endofkeep":
            "Keep'in kullan\u0131mdan kald\u0131r\u0131lmas\u0131 ve yedekleme k\u0131lavuzu",
          "keep.home.tab.places": "Yerler",
          "keep.home.toast.pinneditems": "Sabitlenmi\u015f",
          "keep.itemspicker.popupdesc.itemsharinglimit":
            "Tek seferde en fazla 20 \xf6\u011fe payla\u015fabilirsiniz.",
          "keep.keepitem.itemsenttokeepmemoexpired":
            "Keep Memo'ya g\xf6nderdi\u011finiz bu \xf6\u011fenin s\xfcresi doldu.",
          "keep.keepmemoguide.popupdesc.itemssenttokeepmemoshowninkeep":
            "Keep Memo'ya g\xf6nderdi\u011finiz t\xfcm \ni\xe7erikler, y\xf6netmeniz ve d\xfczenlemeniz \ni\xe7in Keep'te g\xf6sterilir.",
          "keep.keepmemoguide.popupdesc.piniimportantitems":
            "G\xf6z\xfcn\xfcz\xfcn \xf6n\xfcnden ay\u0131rmak istemedi\u011finiz \xf6\u011feler mi var?\nEn \xfcstte kalmas\u0131 i\xe7in sabitlemeyi deneyin.",
          "keep.keepmemoguide.popupdesc.savekeepmemocontentforeverinkeep":
            "Keep'te kaydedip, sabitleyip, d\xfczenleyip, koleksiyona ekleyip t\xfcm \xf6\u011feleri sonsuza kadar Keep Memo'da saklay\u0131n.",
          "keep.keepmemoguide.popuptitle.introducingkeepmemo":
            'Kar\u0131\u015f\u0131n\u0131zda "Keep Memo"',
          "keep.keepmemoguide.popuptitle.keepitemsforever":
            "\xd6\u011feleri sonsuza kadar saklama",
          "keep.keepmemoguide.popuptitle.pinningitems":
            "\xd6\u011feleri sabitleme",
          "keep.label.add": "Ekle",
          "keep.label.addText": "Ekle",
          "keep.label.capture": "Ekran Kayd\u0131",
          "keep.label.chromeMemo": "Chrome Notlar\u0131",
          "keep.label.copy": "Kopyala",
          "keep.label.createdTime": "Olu\u015fturuldu",
          "keep.label.delete": "Sil",
          "keep.label.deleteAll": "T\xfcm\xfcn\xfc Sil",
          "keep.label.deleting": "Siliniyor...",
          "keep.label.details": "Detaylar",
          "keep.label.download": "\u0130ndir",
          "keep.label.edit": "D\xfczenle",
          "keep.label.emptyText": "\u0130\xe7erik Yok",
          "keep.label.expired": "S\xfcresi Doldu",
          "keep.label.fileSize": "Dosya Boyutu",
          "keep.label.from": "Kaynak:",
          "keep.label.goToKeep": "Keep'i Ba\u015flat",
          "keep.label.hitocoto": "Naber?",
          "keep.label.justNow": "Hemen \u015fimdi",
          "keep.label.learnMore": "Hemen \xf6\u011frenin",
          "keep.label.modifiedTime": "Son De\u011fi\u015ftirme",
          "keep.label.more": "Di\u011fer",
          "keep.label.newMemo": "Not",
          "keep.label.open": "A\xe7",
          "keep.label.openkeepmemo": "Keep Memo'yu a\xe7",
          "keep.label.order.stored": "Kay\u0131t Tarihi",
          "keep.label.order.updated": "Son G\xfcncelleme",
          "keep.label.paste": "Yap\u0131\u015ft\u0131r",
          "keep.label.pause": "Duraklat",
          "keep.label.period": "Depolama S\xfcresi",
          "keep.label.pin": "Sabitle",
          "keep.label.play": "Oynat",
          "keep.label.playTime": "Oynatma zaman\u0131",
          "keep.label.refresh": "Yenile",
          "keep.label.resolution": "\xc7\xf6z\xfcn\xfcrl\xfck",
          "keep.label.save": "Kaydet",
          "keep.label.saveInKeep": "Keep'e Kaydet",
          "keep.label.savedTime": "Kaydedildi",
          "keep.label.search": "T\xfcm\xfcn\xfc Ara",
          "keep.label.searchResult": "Arama Sonu\xe7lar\u0131",
          "keep.label.send": "G\xf6nder",
          "keep.label.settings": "Ayarlar",
          "keep.label.shareToChat": "Sohbete g\xf6nder",
          "keep.label.sortByDate": "Tarihe g\xf6re S\u0131rala",
          "keep.label.sortByName": "Ada g\xf6re S\u0131rala",
          "keep.label.sortBySize": "Boyuta g\xf6re S\u0131rala",
          "keep.label.terminate": "LINE'\u0131 kapat",
          "keep.label.tooltip": "Keep",
          "keep.label.unpin": "Sabitlemeyi kald\u0131r",
          "keep.label.upload": "Y\xfckle",
          "keep.label.uploadFile": "Dosya Ekle",
          "keep.label.viewinkeepmemo": "Keep Memo'da g\xf6r\xfcnt\xfcle",
          "keep.label.voiceMessage": "Sesli Mesaj",
          "keep.label.volume": "Kullan\u0131lan Alan",
          "keep.label.writememo.title": "Notlar",
          "keep.label.writetext.title": "Metin",
          "keep.main.desc.keepfadeout":
            "Keep art\u0131k kullan\u0131lam\u0131yor. LINE uygulaman\u0131z\u0131 son s\xfcr\xfcme g\xfcncelleyin.",
          "keep.title": "Keep",
          "keep.toast.itempinned": "Ba\u015far\u0131yla sabitlendi.",
          "keep.toast.itemunpinned":
            "Sabitleme ba\u015far\u0131yla kald\u0131r\u0131ld\u0131.",
          "keepmemo.alert.deletemessage":
            "Se\xe7ilen\xa0mesajlar\xa0yaln\u0131zca\xa0bu cihazdan\xa0silinecek. Devam edilsin mi?",
          "keepmemo.alert.unsendmessage":
            "Se\xe7ilen\xa0mesajlar\xa0t\xfcm\xa0cihazlar\u0131n\u0131zdan silinecek. Devam edilsin mi?",
          "keepmemo.category.all": "T\xfcm\xfc",
          "keepmemo.category.files": "Dosyalar",
          "keepmemo.category.links": "Ba\u011flant\u0131lar",
          "keepmemo.category.photos": "Foto\u011fraflar",
          "keepmemo.category.text": "Metin",
          "keepmemo.category.videos": "Videolar",
          "keepmemo.desc.noSelectableItem":
            "Se\xe7ebilece\u011finiz \xf6\u011fe yok.",
          "keepmemo.itemspicker.popupdesc.itemsharinglimit":
            "Tek seferde en fazla 20 \xf6\u011fe payla\u015fabilirsiniz.",
          "keepmemo.label.goToKeepMemo": "Keep Memo'yu a\xe7",
          "keepmemo.label.search": "Ara",
          "keepmemo.label.sendToKeepMemo": "Keep Memo'ya g\xf6nder",
          "keepmemo.label.share": "Payla\u015f",
          "keepmemo.label.tooltip": "Keep Memo",
          "keepmemo.msg.desc.systemmsg":
            "Kendinize saklamak istedi\u011finiz t\xfcm metin, foto\u011fraf, video ve ba\u011flant\u0131lar\u0131 g\xf6nderin.",
          "keepmemo.title": "Keep Memo'ya g\xf6nder",
          "keyword.notice.btn": "Anahtar kelime ekle",
          "keyword.notice.desc":
            "Belirli kelimeleri veya kullan\u0131c\u0131 adlar\u0131n\u0131 i\xe7eren t\xfcm mesajlarda uyar\u0131 almak i\xe7in bu kelimeleri veya kullan\u0131c\u0131 adlar\u0131n\u0131 anahtar kelime olarak ekleyin.",
          "keyword.notice.title": "Anahtar Kelimeye G\xf6re Uyar\u0131lar",
          "keyword.notification.desc": "Ge\xe7en anahtar kelime",
          "kickout.all.v3":
            "Hesab\u0131n\u0131zdan otomatik olarak \xe7\u0131k\u0131\u015f yap\u0131ld\u0131. L\xfctfen tekrar giri\u015f yap\u0131n.",
          "kickout.dormant.account":
            "L\xfctfen LINE'\u0131n mobil s\xfcr\xfcm\xfcnde kaydetti\u011finiz e-posta adresinizi kullanarak giri\u015f yap\u0131n ve hesab\u0131n\u0131z\u0131 do\u011frulay\u0131n.",
          "kickout.email.account.modified":
            "Yeni bir e-posta adresi kaydetti\u011finiz veya \u015fifrenizi de\u011fi\u015ftirdi\u011finiz i\xe7in oturumunuz kapat\u0131ld\u0131.",
          "kickout.expired":
            "Uzun s\xfcre bo\u015fta olunca oturum kapat\u0131ld\u0131.\n",
          "kickout.networkError":
            "Bir a\u011f hatas\u0131 nedeniyle oturumunuz kapat\u0131ld\u0131. L\xfctfen tekrar giri\u015f yap\u0131n.",
          "kickout.noAllowedSecondaryDevice":
            "Ak\u0131ll\u0131 telefon eri\u015fimi engellenince oturum kapat\u0131ld\u0131.\n",
          "kickout.notAuthorizedDevice":
            "Ba\u015fka PC'den oturum a\xe7\u0131nca oturum kapat\u0131ld\u0131.   ",
          "kickout.notAvailableUser":
            "Hesab\u0131n\u0131z ba\u015fka bir cihazda silindi\u011fi i\xe7in LINE oturumunuz kapat\u0131ld\u0131.",
          "kickout.passwordChanged":
            "\ub124\uc774\ubc84\ub97c \ud0c8\ud1f4\ud558\uc5ec \ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4. ",
          "kickout.serverError":
            "Bir sunucu hatas\u0131 nedeniyle oturumunuz kapat\u0131ld\u0131. L\xfctfen tekrar giri\u015f yap\u0131n.",
          "kickout.serverMaintenance":
            "Sunucu \u015fu anda bak\u0131mda. L\xfctfen daha sonra tekrar giri\u015f yap\u0131n.",
          "kickout.serviceMaintenance":
            "Ge\xe7ici bir hata nedeniyle oturumunuz kapat\u0131ld\u0131. L\xfctfen tekrar giri\u015f yap\u0131n.",
          "kickout.square.server.fail":
            "Bir OpenChat do\u011frulama hatas\u0131 nedeniyle oturumunuz kapat\u0131ld\u0131. L\xfctfen tekrar giri\u015f yap\u0131n.",
          "line.keepmemoguide.popupdesc.page1":
            "Di\u011fer sohbetlerde oldu\u011fu gibi, Keep Memo'ya not, foto\u011fraf veya ba\u015fka \xf6\u011feler g\xf6nderebilirsiniz.",
          "line.keepmemoguide.popuptitle.page1":
            'Kar\u0131\u015f\u0131n\u0131zda "Keep Memo"',
          "line.secondarylogin.popupdesc.updatelineerror.desk":
            "L\xfctfen LINE'\u0131 g\xfcncelleyip tekrar deneyin.",
          "line.secondarylogin.popuptitle.updatelineerror.desk": "Hata",
          "line.updatepopup.button.leave": "Ayr\u0131l",
          "linechrome.chat.desc.unsupportedmessage":
            "Bu mesaj LINE Chrome'da g\xf6r\xfcnt\xfclenemiyor. Bu mesaj\u0131 mobil s\xfcr\xfcmde g\xf6rebilirsiniz.",
          "linechrome.chat.desc.unsupportedstickers":
            "Bu sticker LINE Chrome'da kullan\u0131lam\u0131yor. \nBu sticker'\u0131 mobil s\xfcr\xfcmde g\xf6rebilirsiniz.",
          "linechrome.chat.toast.nofolders":
            "Klas\xf6r payla\u015f\u0131lam\u0131yor.",
          "linechrome.chat.toast.supportedlanguage":
            "LINE Chrome \xe7evrilen dili destekliyor. Dili Ayarlar b\xf6l\xfcm\xfcnden de\u011fi\u015ftirebilirsiniz.",
          "linechrome.end.desc.endline":
            "LINE Chrome sonland\u0131r\u0131ls\u0131n m\u0131?",
          "linechrome.main.button.mute1": "1 saat sessize al",
          "linechrome.main.button.mute2": "2 saat sessize al",
          "linechrome.main.button.mute24": "24 saat sessize al",
          "linechrome.main.button.mute30": "30 dakika sessize al",
          "linechrome.main.desc.unmutehour":
            "%1 saat sonra sesi a\xe7\u0131lacak",
          "linechrome.main.desc.unmuteminute":
            "%1 dakika sonra sesi a\xe7\u0131lacak",
          "linechrome.main.desc.unmutesecond.other":
            "%1 saniye sonra sesi a\xe7\u0131lacak",
          "linemusic.playlist": "\xc7alma Listesi",
          "linemusic.title": "LINE MUSIC",
          "linemusic.topic": "Konu",
          "lockscreen.kickout.accountError":
            "Bir\xe7ok kez yanl\u0131\u015f \u015fifre girdi\u011finiz i\xe7in LINE uygulaman\u0131z kilitlendi.",
          "lockscreen.lockscreen.text":
            "LINE uygulaman\u0131z \u015fu anda kilitli. ",
          "lockscreen.msg.alert.oncalling":
            "LINE kilitlensin mi?\nGe\xe7erli araman\u0131z kesilecek.",
          "lockscreen.msg.unlock.description":
            "LINE kilitlensin mi?\nKilidi a\xe7mak i\xe7in \u015fifreniz gerekir.",
          "lockscreen.msg.unlockAuto.description":
            "Bilgisayar\u0131n\u0131zda belirli bir s\xfcre i\u015flem yap\u0131lmad\u0131ktan sonra LINE kilitlensin mi?\nKilidi a\xe7mak i\xe7in \u015fifreniz gerekir.",
          "lockscreen.password.fail":
            "Ge\xe7ersiz \u015fifre. L\xfctfen tekrar deneyin.",
          "lockscreen.password.text":
            "Kilidi a\xe7mak i\xe7in l\xfctfen LINE \u015fifrenizi girin.",
          "lockscreen.password.unlock.btn": "Kilidi A\xe7",
          "login.btn.emailQRcode.login": "E-posta/QR Koduyla Giri\u015f >",
          "login.btn.login": "Giri\u015f",
          "login.btn.signUp": "Kay\u0131t",
          "login.emailLogin.identity.credential.error":
            "Ge\xe7ersiz e-posta adresi.\nL\xfctfen e-posta adresinizi do\u011fru girin.",
          "login.emailLogin.label.error.accountError":
            "E-posta adresi veya \u015fifre yanl\u0131\u015f ya da LINE\u2019da kay\u0131tl\u0131 de\u011fil.",
          "login.emailLogin.label.error.inputError":
            "L\xfctfen e-posta adresinizi ve \u015fifre girin.",
          "login.emailLogin.link.changeToNaverLogin":
            "\ub124\uc774\ubc84 \ub85c\uadf8\uc778",
          "login.emailLogin.link.findPassword": "\u015eifrenizi mi unuttunuz?",
          "login.emailLogin.placeHolder.email": "E-posta adresi",
          "login.emailLogin.placeHolder.emailwithPhoneNumber":
            "E-posta veya telefon numaras\u0131",
          "login.emailLogin.placeHolder.password": "\u015eifre",
          "login.emailLogin.popup.findPassword":
            "E-posta adresiniz ve \u015fifrenizi LINE uygulaman\u0131z\u0131n\n[Ayarlar> Hesaplar> E-Posta Kay\u0131t] men\xfcs\xfcnden de\u011fi\u015ftirebilirsiniz.\n\n\n\n",
          "login.error.auth.failed":
            "Ba\u015fka bir bilgisayardan oturum a\xe7t\u0131\u011f\u0131n\u0131zdan\nveya oturumunuzun s\xfcresi doldu\u011fundan\notomatik olarak oturum a\xe7\u0131lamad\u0131. ",
          "login.label.certificate.not.vaild":
            "G\xfcvenlik sertifikas\u0131 do\u011frulanamad\u0131. L\xfctfen bilgisayar\u0131n\u0131zda do\u011fru tarihi ayarlay\u0131n.",
          "login.label.doingLogin": "Giri\u015f yap\u0131l\u0131yor...",
          "login.label.error.auth.failed.anotherPC":
            "Ba\u015fka bir bilgisayarda oturum a\xe7t\u0131\u011f\u0131n\u0131z i\xe7in otomatik olarak giri\u015f yap\u0131lamad\u0131.",
          "login.label.error.auth.failed.loginExpired":
            "Oturumunuzun s\xfcresi doldu\u011fu i\xe7in otomatik olarak giri\u015f yap\u0131lamad\u0131.",
          "login.label.error.dberror":
            "Hata alg\u0131land\u0131 ve kurtar\u0131ld\u0131. L\xfctfen tekrar giri\u015f yap\u0131n.",
          "login.label.error.dormant.account":
            "LINE'\u0131n mobil s\xfcr\xfcm\xfcnde kaydetti\u011finiz e-posta\nadresinizle giri\u015f yap\u0131n ve hesab\u0131n\u0131z\u0131 do\u011frulay\u0131n.",
          "login.label.error.extraError":
            "\u015eu anda giri\u015f yap\u0131lam\u0131yor. L\xfctfen biraz sonra tekrar deneyin.",
          "login.label.error.keyboardError":
            "L\xfctfen klavyenizi \u0130ngilizce olarak de\u011fi\u015ftirin.",
          "login.label.error.networkError":
            "A\u011f sorunlar\u0131 nedeniyle giri\u015f yap\u0131lam\u0131yor.\nL\xfctfen ba\u011flant\u0131n\u0131z\u0131 kontrol edip tekrar deneyin.",
          "login.label.error.pinCode":
            "Do\u011frulama kodu hatal\u0131. L\xfctfen do\u011fru kodu kullanarak tekrar deneyin.",
          "login.label.error.schemeError":
            "LINE'a giri\u015f yap\u0131n ve tekrar deneyin.",
          "login.label.error.serverError":
            "Bir sunucu hatas\u0131 olu\u015ftu. L\xfctfen daha sonra tekrar deneyin.",
          "login.label.error.serverMaintenance":
            "Sunucu \u015fu anda bak\u0131mda. L\xfctfen daha sonra tekrar deneyin.",
          "login.label.error.verification.timeout":
            "Do\u011frulama kodunuzun s\xfcresi doldu.\nL\xfctfen ba\u015fka bir kod isteyin.",
          "login.label.searching.network":
            "En uygun a\u011f ba\u011flant\u0131s\u0131 aran\u0131yor.",
          "login.loginwithsmartphone.tooltip":
            "Cihaz\u0131n\u0131zda do\u011frulama yaparak \u015fifresiz giri\u015f yap\u0131n.",
          "login.naverLogin.checkbox.keepLoginStatus": "Giri\u015f otomatik",
          "login.naverLogin.checkbox.startUpWin":
            "Windows baslat\u0131ld\u0131\u011f\u0131nda otomatik y\xfcr\xfct",
          "login.naverLogin.label.error.inputError":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.",
          "login.naverLogin.label.error.proxyError":
            "Oturum a\xe7\u0131lam\u0131yor. L\xfctfen proxy sunucusu ayarlar\u0131n\u0131z\u0131 kontrol edin ve tekrar deneyin.",
          "login.naverLogin.link.changeToEmailLogin":
            "\uc774\uba54\uc77c \ub85c\uadf8\uc778",
          "login.naverLogin.link.findIDPassword1":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638 \ucc3e\uae30",
          "login.naverLogin.link.findIDPassword2":
            "\uc544\uc774\ub514/\ube44\ubc00\ubc88\ud638 \ucc3e\uae30",
          "login.naverLogin.placeHolder.naverID": "NAVER ID",
          "login.naverLogin.placeHolder.password": "\u015eifre",
          "login.naverLogin.url.ID":
            "https://nid.naver.com/user/help.nhn?todo=idinquiry",
          "login.naverLogin.url.pass":
            "https://nid.naver.com/user/help.nhn?todo=pwinquiry",
          "login.otp.link.title": "OTP \ub3c4\uc6c0\ub9d0",
          "login.otp.link.url":
            "https://help.naver.com/support/contents/contents.nhn?serviceNo=532&categoryNo=1533",
          "login.password.ascii.error":
            "L\xfctfen klavye dilinizi \u0130ngilizce olarak de\u011fi\u015ftirin.",
          "login.phoneNumberLogin.alert.info":
            "Yaln\u0131zca LINE'\u0131n masa\xfcst\xfc s\xfcr\xfcm\xfcyle kaydolan\nkullan\u0131c\u0131lar telefon numaras\u0131yla giri\u015f yapabilir.",
          "login.phoneNumberLogin.alert.networkerror":
            "Bir ge\xe7ici hata nedeniyle iste\u011finiz i\u015fleme koyulamad\u0131.\nL\xfctfen tekrar deneyin.",
          "login.phoneNumberLogin.identity.credential.error":
            "Ge\xe7ersiz telefon numaras\u0131. L\xfctfen ge\xe7erli bir telefon numaras\u0131 girin.",
          "login.phoneNumberLogin.label.country": "\xdclke se\xe7",
          "login.phoneNumberLogin.label.error.accountError":
            "Girdi\u011finiz telefon numaras\u0131 veya \u015fifre mevcut de\u011fil ya da ge\xe7ersiz.",
          "login.phoneNumberLogin.label.error.inputError":
            "L\xfctfen telefon numaran\u0131z\u0131 ve \u015fifrenizi girin.",
          "login.phoneNumberLogin.placeHolder.password": "\u015eifre",
          "login.phoneNumberLogin.placeHolder.phone": "Telefon numaras\u0131",
          "login.phoneNumberLogin.placeHolder.search": "Ara",
          "login.phoneNumberLogin.verification.desc":
            "Bir g\xfcvenlik \xf6nlemi olarak bir bilgisayarda ilk kez oturum a\xe7arken hesab\u0131n\u0131z\u0131 do\u011frulaman\u0131z gerekir.\nL\xfctfen SMS olarak ald\u0131\u011f\u0131n\u0131z do\u011frulama kodunu girin. Do\u011frulama kodunu almad\u0131ysan\u0131z l\xfctfen a\u015fa\u011f\u0131dakileri deneyin.",
          "login.popup.abuse":
            "\xc7ok fazla hatal\u0131 giri\u015f denemesi yap\u0131ld\u0131\u011f\u0131 i\xe7in\nLINE uygulaman\u0131z kilitlendi. QR kodunuzla giri\u015f yap\u0131n.",
          "login.popup.error.diskFull":
            "Kalan disk alan\u0131n\u0131z 1 GB\u2019den az.\nBaz\u0131 LINE \xf6zellikleri \xe7al\u0131\u015fmayabilir.",
          "login.popup.kickout.r0":
            "Ba\u015fka bir bilgisayardan oturum a\xe7arsan\u0131z",
          "login.popup.kickout.r1":
            "LINE bir s\xfcre a\xe7\u0131k kald\u0131\u011f\u0131nda",
          "login.popup.kickout.r2":
            "ak\u0131ll\u0131 telefon uygulamas\u0131ndan \xe7\u0131k\u0131\u015f yap\u0131ld\u0131\u011f\u0131nda",
          "login.popup.kickout.r3": "Hesab\u0131n\u0131z\u0131 silerseniz",
          "login.popup.kickout.r4":
            "\ub124\uc774\ubc84\ub97c \ud0c8\ud1f4\ud558\uac70\ub098 \ube44\ubc00\ubc88\ud638\ub97c \ubcc0\uacbd\ud55c \uacbd\uc6b0",
          "login.popup.kickout.r5":
            "Bak\u0131m sebebiyle uygulama kullan\u0131lam\u0131yor.",
          "login.popup.kickout.subtitle":
            "\u015eu durumlarda hesab\u0131n\u0131zdan \xe7\u0131k\u0131lacakt\u0131r:",
          "login.popup.kickout.title": "LINE'dan \xe7\u0131kt\u0131n\u0131z.",
          "login.qrLogin.desc.error.expired":
            "QR kodunuzun s\xfcresi doldu.\nYeni kod olu\u015fturmak i\xe7in yenile simgesine t\u0131klay\u0131n.",
          "login.qrLogin.desc.error.network":
            "A\u011f hatas\u0131 nedeniyle QR kodunuz y\xfcklenemedi.\nL\xfctfen ba\u011flant\u0131n\u0131z\u0131 kontrol edip tekrar deneyin.",
          "login.qrLogin.desc.howto":
            "QR kodunuzu taramak i\xe7in mobil cihaz\u0131n\u0131zda LINE'\u0131 a\xe7\u0131n ve arama kutusundaki QR kodu simgesine dokunun.",
          "login.qrLogin.title": "QR Kod Giri\u015f",
          "login.register.already": "LINE Kullan\u0131c\u0131 Giri\u015fi",
          "login.register.downloadLink":
            "LINE uygulamas\u0131n\u0131 indirin>>",
          "login.register.help.desc":
            "PC s\xfcr\xfcm\xfcn\xfc kullanmak i\xe7in postan\u0131z\u0131 LINE kullanarak kaydettirin.\n",
          "login.register.help.desc1":
            "\ubaa8\ubc14\uc77c \ub77c\uc778 \uc571\uc5d0\uc11c \uac00\uc785\ud558\uace0 \ub124\uc774\ubc84 \uc544\uc774\ub514\ub97c \n\ub4f1\ub85d\ud558\uba74 PC\ubc84\uc804\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.register.help.desc2":
            "Mac s\xfcr\xfcm\xfcn\xfc kullanmak i\xe7in postan\u0131z\u0131 LINE kullanarak kaydettirin.",
          "login.register.help.desc3":
            "\ubaa8\ubc14\uc77c \ub77c\uc778 \uc571\uc5d0\uc11c \uac00\uc785\ud558\uace0 \ub124\uc774\ubc84 \uc544\uc774\ub514\ub97c \n\ub4f1\ub85d\ud558\uba74 MAC\ubc84\uc804\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
          "login.register.link.android":
            "https://play.google.com/store/apps/details?id=jp.naver.line.android&hl=tr",
          "login.register.link.iphone":
            "https://itunes.apple.com/tr/app/line/id443904275",
          "login.register.link.wphone":
            "http://www.windowsphone.com/tr-TR/store/app/line/a18daaa9-9a1c-4064-91dd-794644cd88e7",
          "login.register.newmember": "kaydol",
          "login.registration.password.reset": "\u015eifreyi s\u0131f\u0131rla",
          "login.simpleLogin.btn.updateQrCode": "QR kodu g\xfcncell",
          "login.simpleLogin.label.desc.normal":
            "LINE men\xfcs\xfcnde [Arkada\u015f Ekle] > [QR Kodu] b\xf6l\xfcm\xfcnden QR kodunu tarat\u0131n.\n* Bu QR kodu sadece giri\u015f i\xe7in kullan\u0131labilir.",
          "login.simpleLogin.label.error.cannot.refresh.too.frequently":
            "QR kodu g\xfcncellendi\u011finde,\nbir s\xfcre tekrar yapamazs\u0131n\u0131z.",
          "login.simpleLogin.label.error.qrcodeExpired":
            "Bu QR Kodu art\u0131k ge\xe7erli de\u011fil. QR Kodunuzu g\xfcncelledikten sonra tekrar deneyiniz",
          "login.simpleLogin.link.howto": "QR kodu ile giri\u015f yapma",
          "login.tab.emailLogin": "E-postayla Giri\u015f",
          "login.tab.naverLogin": "\ub124\uc774\ubc84 \ub85c\uadf8\uc778",
          "login.tab.phoneNumberLogin": "Telefon Numaras\u0131yla Giri\u015f >",
          "login.tab.phoneNumberLogin.title":
            "Telefon Numaras\u0131yla Giri\u015f",
          "login.tab.simpleLogin": "QR Kod Giri\u015f",
          "loginHelp.email.image.0": "images/tr/01_main.png",
          "loginHelp.email.image.1": "images/tr/02_email.png",
          "loginHelp.email.image.registration": "image://login/tr/03_email.png",
          "loginHelp.emailLogin.label.step1":
            "LINE [Ayarlar> Hesaplar] men\xfcs\xfcne gidin.",
          "loginHelp.emailLogin.label.step2":
            'Hesap men\xfcs\xfcndeki "E-posta" b\xf6l\xfcm\xfcne giderek e-postan\u0131z\u0131 kaydedin.',
          "loginHelp.emailLogin.label.tab.mobile":
            "Mobil s\xfcr\xfcmde kaydolundu",
          "loginHelp.emailLogin.label.tab.pc":
            "PC s\xfcr\xfcm\xfcnde kaydolundu",
          "loginHelp.emailLogin.label.tab.pc.desc1":
            "E-postayla giri\u015f yaln\u0131zca e-postan\u0131z\u0131 kaydettirmeniz durumunda kullan\u0131labilir.\nE-postan\u0131z\u0131 kaydettirmek i\xe7in Ayarlar > Temel b\xf6l\xfcm\xfcne gidin.",
          "loginHelp.emailLogin.label.tab.pc.desc2":
            "Telefon numaras\u0131yla giri\u015f ve e-postayla giri\u015f i\xe7in ayn\u0131 \u015fifreyi kullanabilirsiniz.\nL\xfctfen e-posta adresinizi ve telefon numaras\u0131yla giri\u015f i\xe7in kulland\u0131\u011f\u0131n\u0131z \u015fifreyi girin.",
          "loginHelp.emailLogin.label.tab.pc.title1":
            "E-posta adresinizi kaydettirmediyseniz",
          "loginHelp.emailLogin.label.tab.pc.title2":
            "E-postan\u0131z\u0131 kaydettirdiyseniz",
          "loginHelp.emailLogin.label.title":
            "E-postayla Giri\u015f Yard\u0131m\u0131",
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
          "loginHelp.qrcode.image.0": "images/tr/03_qr01.png",
          "loginHelp.qrcode.image.1": "images/tr/04_qr02.png",
          "loginHelp.qrcodeLogin.label.step1":
            "LINE uygulaman\u0131zdan [Di\u011fer] > [Arkada\u015f Ekle] > [QR Kodu] men\xfcs\xfcne gidin",
          "loginHelp.qrcodeLogin.label.step2":
            "Tarama sonras\u0131nda Bilgisayar s\xfcr\xfcm\xfcne giri\u015f yapmak i\xe7in ak\u0131ll\u0131 telefonunuzdaki LINE uygulamas\u0131nda bulunan [Giri\u015f] d\xfc\u011fmesine bas\u0131n.",
          "loginHelp.qrcodeLogin.label.title": "QR kodu ile giri\u015f yapma",
          "loginHelp.qrcodeLogin.label.wap.step1":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "loginHelp.qrcodeLogin.label.wap.step2":
            "\ubbf8\uc801\uc6a9 \ubb38\uad6c",
          "markdown.input.context.menu.bold": "Kal\u0131n",
          "markdown.input.context.menu.codeblock": "Metin blo\u011fu",
          "markdown.input.context.menu.italic": "\u0130talik",
          "markdown.input.context.menu.strikethrough": "\xdcst\xfc \xe7izili",
          "markdown.input.context.menu.wordblock": "Sat\u0131r blo\u011fu",
          "markdown.input.guideline.bold": "*Kal\u0131n*",
          "markdown.input.guideline.codeblock": "```Kod blo\u011fu```",
          "markdown.input.guideline.italic": "_\u0130talik_",
          "markdown.input.guideline.strikethrough": "~\xdcst\xfc \xe7izili~",
          "markdown.input.guideline.wordblock": "`Sat\u0131r i\xe7i kod`",
          "markdown.input.menu.help": "Metin bi\xe7imlendirme hakk\u0131nda",
          "media.locale.font":
            "NanumGothic,\ub098\ub214\uace0\ub515,Malgun,\ub9d1\uc740 \uace0\ub515,\ub9d1\uc740\uace0\ub515,Dotum,Gulim,\ub3cb\uc6c0,\uad74\ub9bc",
          "media.msg.err.directx":
            "Bu videoyu oynatmak i\xe7in DirectX 9.0c y\xfcklemeniz gerekmektedir.\nBunu \u015fimdi yapmak istiyor musunuz? ",
          "media.msg.err.expired":
            "Depolama s\xfcresi a\u015f\u0131ld\u0131\u011f\u0131ndan dolay\u0131 bu video tekrar oynat\u0131lamaz.",
          "media.msg.err.network":
            "A\u011f veya sunucu hatas\u0131ndan dolay\u0131 oynat\u0131lam\u0131yor.\nL\xfctfen tekrar deneyin.",
          "media.msg.err.transient":
            "Ge\xe7ici bir hatadan dolay\u0131 oynat\u0131lam\u0131yor.\nL\xfctfen tekrar deneyin.",
          "media.msg.tooltip.close": "Kapat",
          "media.msg.tooltip.minimize": "K\xfc\xe7\xfclt",
          "media.msg.tooltip.pause": "Duraklat",
          "media.msg.tooltip.play": "Oynatma",
          "media.msg.tooltip.playspeed": "H\u0131z",
          "media.msg.tooltip.stop": "Durak",
          "media.msg.tooltip.volume": "Ses d\xfczeyi",
          "media.msg.tooltip.volume1": "Ses d\xfczeyi",
          "media.video.full.screen.out":
            "Tam ekrandan \xe7\u0131kmak i\xe7in Esc tu\u015funa bas\u0131n.",
          "media.video.replay": "Yeniden Oynat",
          "meeting.popup.end.body":
            "Toplant\u0131dan ayr\u0131l\u0131ns\u0131n m\u0131?",
          "meeting.popup.end.button": "Ayr\u0131l",
          "meeting.tooltip.end.call": "Toplant\u0131dan ayr\u0131l",
          "menu.menubar.allNotification.off":
            "T\xfcm bildirimlerin sesini kapat",
          "menu.menubar.allNotification.on":
            "T\xfcm bildirimlerin sesini a\xe7",
          "menu.menubar.friend.addFriend": "Arkada\u015f ekle",
          "menu.menubar.friend.makeGroup": "Grup olu\u015ftur",
          "menu.menubar.friend.title": "Arkada\u015flar",
          "menu.menubar.help.lineHelp": "LINE Yard\u0131m",
          "menu.menubar.help.title": "Yard\u0131m",
          "menu.menubar.keepmemo": "Keep Memo",
          "menu.menubar.line.about": "LINE Hakk\u0131nda",
          "menu.menubar.line.exit": "Bitti",
          "menu.menubar.line.hideLine": "Gizle LINE",
          "menu.menubar.line.hideOthers": "Gizle Di\u011fer",
          "menu.menubar.line.setting": "Ayarlar",
          "menu.menubar.line.showAll": "G\xf6ster T\xfcm",
          "menu.menubar.line.title": "LINE",
          "menu.menubar.view.chat": "Sohbet",
          "menu.menubar.view.friend": "Arkada\u015flar",
          "menu.menubar.view.hub": "LINE HUB",
          "menu.menubar.view.myProfile": "Profilim",
          "menu.menubar.view.myhome": "Home",
          "menu.menubar.view.openchat": "OpenChat",
          "menu.menubar.view.services": "Hizmetler",
          "menu.menubar.view.title": "G\xf6r\xfcnt\xfcle",
          "menu.menubar.view.today": "LINE TODAY",
          "menu.menubar.view.voom": "LINE VOOM",
          "menu.menubar.window.bringToTopAll":
            "T\xfcm \xfcst\xfcne ta\u015f\u0131nacak",
          "menu.menubar.window.maximize": "Genislet",
          "menu.menubar.window.minimize": "K\xfc\xe7\xfclt",
          "menu.menubar.window.title": "Windows",
          "menu.setting.lockscreen": "Kilit modu",
          "menu.toast.allNotification.off": "Ses a\xe7\u0131k",
          "menu.toast.allNotification.on": "Ses kapal\u0131",
          "menu.tray.about": "LINE Hakk\u0131nda",
          "menu.tray.balloon.login":
            "E\u011fer LINE giri\u015f yapm\u0131\u015f",
          "menu.tray.balloon.logout": "LINE'dan \xe7\u0131kt\u0131n\u0131z.",
          "menu.tray.check.update": "G\xfcncellemeleri kontrol et",
          "menu.tray.exit": "Bitti",
          "menu.tray.keepmemo": "Keep Memo",
          "menu.tray.login": "Giri\u015f",
          "menu.tray.logout": "\xc7\u0131k\u0131\u015f",
          "menu.tray.setting": "Ayarlar",
          "menu.tray.showBuddyList": "Arkada\u015flar",
          "message.context.background": "Sohbet arka plan\u0131 olarak ayarla",
          "message.context.cancel.imageselect":
            "Foto\u011fraf\u0131n se\xe7imini kald\u0131r",
          "message.context.imageselect": "Foto\u011fraf se\xe7",
          "message.delete.confirm":
            "Se\xe7ili mesajlar yaln\u0131zca sizin cihaz\u0131n\u0131zdan silinecek. Arkada\u015flar\u0131n\u0131z\u0131n cihazlar\u0131ndan silinmeyecek.",
          "message.error.invalidfile":
            "\u0130ndirilen g\xfcncelleme dosyalar\u0131 bozuk.",
          "message.error.opensetup":
            "\u0130ndirilen g\xfcncelleme dosyalar\u0131 a\xe7\u0131lamad\u0131.",
          "message.error.opensetup.codesign":
            "G\xfcncelleme dosyas\u0131 bozuk ve kullan\u0131lam\u0131yor.",
          "message.error.update": "G\xfcncelleme Tamamlanmad\u0131.",
          "message.error.updateurl":
            "G\xfcncellemeler i\xe7in adres al\u0131namad\u0131.",
          "msgbox.alert.font.exist": "Bu yaz\u0131 tipi zaten uyguland\u0131.",
          "msgbox.alert.nospace":
            "Cihaz\u0131n\u0131zda yeterli alan mevcut de\u011fil. L\xfctfen gereksiz uygulamalar\u0131, foto\u011fraflar\u0131 veya videolar\u0131 silerek alan bo\u015falt\u0131n.",
          "msgbox.alert.resolution.apply":
            "Yeni ekran \xe7\xf6z\xfcn\xfcrl\xfc\u011f\xfc ayar\u0131na ge\xe7mek i\xe7in LINE'\u0131n yeniden ba\u015flat\u0131lmas\u0131 gerekiyor. \u015eimdi yeniden ba\u015flat\u0131ls\u0131n m\u0131?",
          "msgbox.btn.block": "Engelle",
          "msgbox.btn.buddy.title": "Eklenen Arkada\u015f\u0131 G\xf6r",
          "msgbox.btn.cancel.title": "Iptal",
          "msgbox.btn.cancelInvite.no": "Hay\u0131r",
          "msgbox.btn.cancelInvite.yes": "Evet",
          "msgbox.btn.close.title": "Kapat",
          "msgbox.btn.delete": "Sil",
          "msgbox.btn.download.title": "\u0130ndir",
          "msgbox.btn.fileOpen": "Dosyay\u0131 a\xe7",
          "msgbox.btn.gotosettings": "Ayarlar",
          "msgbox.btn.hide": "Gizle",
          "msgbox.btn.install.title": "\u0130ndir",
          "msgbox.btn.later.title": "Sonra",
          "msgbox.btn.leave.1.n": "Ayr\u0131l",
          "msgbox.btn.leave.group": "Ayr\u0131l",
          "msgbox.btn.lock.enable": "Kilitle",
          "msgbox.btn.lock.start": "Kilitle",
          "msgbox.btn.no.title": "Hay\u0131r",
          "msgbox.btn.nocancel.title": "\u0130ptal",
          "msgbox.btn.ok.title": "Tamam",
          "msgbox.btn.post.title": "G\xf6nderi",
          "msgbox.btn.qrcode.title": "QR kodu ile giri\u015f yapma",
          "msgbox.btn.quit.title": "Bitti",
          "msgbox.btn.remove": "Kald\u0131r",
          "msgbox.btn.restart": "Yeniden Ba\u015flat",
          "msgbox.btn.retry.title": "Tekrar",
          "msgbox.btn.send": "G\xf6nder",
          "msgbox.btn.sendkey.title": "De\u011fi\u015ftir",
          "msgbox.btn.sendshare": "G\xf6nder",
          "msgbox.btn.unsend": "G\xf6ndermeyi geri al",
          "msgbox.btn.update.title": "\u015eimdi G\xfcncelle",
          "msgbox.btn.use": "Kabul ediyorum",
          "msgbox.btn.yes.title": "Evet",
          "msgbox.btn.yescontinue.title": "Devam",
          "msgbox.btn.yesleave.title": "Ayr\u0131l",
          "msgbox.desc.seemore": "Daha fazla bilgi",
          "msgbox.error.request.popup.desc":
            "Ge\xe7ici bir hata olu\u015ftu. L\xfctfen daha sonra tekrar deneyin.",
          "needqr.login.button.label": "QR kodu Giri\u015fi",
          "needqr.title.content1":
            "\u0130zinsiz eri\u015fimini engellemek i\xe7in\nBilgisayardan ilk kez giri\u015f yaparken QR Koduyla Giri\u015fi kullan\u0131n.",
          "needqr.title.label": "L\xfctfen QR kodu Giri\u015fi",
          "note.save.comfirm.desc":
            "[%1] adl\u0131 ki\u015finin/grubun notuna kaydedilsin mi?",
          "notificationcenter.timeslot.earlier": "Daha eski",
          "notificationcenter.timeslot.recent": "En son",
          "notificationcenter.title": "Bildirimler",
          "nx.textbox.copy": "Kopyala",
          "nx.textbox.paste": "Yap\u0131\u015ft\u0131r",
          "nx.textbox.selectall": "Hepsini Se\xe7",
          "oa.profile.desc.region.notselected": "Unspecified",
          "oa.profile.investmentfraud":
            "LINE'da sahtekarl\u0131\u011fa kar\u015f\u0131 dikkatli olun.",
          "ocr.policy.agree.btn": "Kabul Et",
          "ocr.policy.disagree.btn": "Reddet",
          "ocr.progress.desc.scan": "Metin okunuyor...",
          "ocr.progress.desc.translate": "\xc7evriliyor...",
          "openchat.allthreads.desc.nothreads":
            "Bu OpenChat'te olu\u015fturulan t\xfcm yaz\u0131\u015fmalar burada g\xf6sterilir.",
          "openchat.allthreads.title.nothreads":
            "Bu OpenChat'te hen\xfcz yaz\u0131\u015fma yok.",
          "openchat.chatlist.popup.deletechat":
            "Bu sohbet, sohbet listenizden silinsin mi? Sohbet OpenChat listenizden silinmeyecek.",
          "openchat.chatlist.popup.hidechat":
            "Bu sohbet, sohbet listenizde gizlensin mi? Sohbet OpenChat listenizde g\xf6sterilmeye devam edecek.",
          "openchat.favoritethreads.title.nothreads":
            "Hen\xfcz favori yaz\u0131\u015fma yok.",
          "openchat.hidemessages.desc.hidethismember":
            "Bu \xfcyenin mesajlar\u0131 gizlensin mi? Mesajlar bu OpenChat'te ve alt sohbetlerinde gizlenecek, daha \xf6nceki mesajlar g\xf6sterilmeye devam edecek.",
          "openchat.hidemessages.desc.maximumhide":
            "Mesajlar\u0131n\u0131 gizleyebilece\u011finiz \xfcye s\u0131n\u0131r\u0131na ula\u015ft\u0131n\u0131z. Profillerine giderek baz\u0131 \xfcyelerin mesajlar\u0131n\u0131n g\xf6sterilmesini sa\u011flay\u0131p tekrar deneyin.",
          "openchat.hidemessages.desc.messageshidden":
            "Bu \xfcyenin mesajlar\u0131 gizlendi. \xdcyenin profiline giderek mesajlar\u0131n tekrar g\xf6sterilmesini sa\u011flayabilirsiniz.",
          "openchat.join.button.requestjoin":
            "Kat\u0131lma i\u0307ste\u011fi g\xf6nder",
          "openchat.linkpopup.desc.donotshowformonth":
            "Bir ay boyunca tekrar g\xf6sterme",
          "openchat.readallthreads.desc.markallasread":
            "T\xfcm yaz\u0131\u015fma mesajlar\u0131 okundu olarak i\u015faretlensin mi?",
          "openchat.settings.desc.mentioneveryone": "Herkesten bahset (@All)",
          "openchat.thread.desc.fewerthan10": "10 mesajdan az",
          "openchat.thread.desc.sendafiletothread":
            "Bu yaz\u0131\u015fmaya dosya g\xf6nder",
          "openchat.thread.desc.updateline":
            "Mesaj\u0131 g\xf6rmek i\xe7in LINE'\u0131 g\xfcncelleyin.",
          "openchat.thread.placeholder.expired":
            "S\xfcresi dolmu\u015f bir yaz\u0131\u015fmaya mesaj eklenemez.",
          "openchat.thread.tooltip.yourthreadicon":
            "Bu OpenChat'teki t\xfcm yaz\u0131\u015fmalar\u0131 ve favorilerinizi g\xf6r\xfcn.",
          "openchat.threadpopup.desc.expired":
            "S\xfcresi doldu\u011fu i\xe7in bu yaz\u0131\u015fma eklenemiyor ya da kald\u0131r\u0131lam\u0131yor.",
          "openchat.threadpopup.desc.expirederror":
            "Bu yaz\u0131\u015fman\u0131n s\xfcresi doldu.",
          "openchat.threadpopup.desc.unsupported":
            "Yaz\u0131\u015fmalarda desteklenmeyen bir dosya bi\xe7imi eklendi.",
          "openchat.threads.button.readall": "Okundu",
          "openchat.threads.button.seemessages": "Mesajlar\u0131 g\xf6ster",
          "openchat.threads.tab.all": "T\xfcm\xfc",
          "openchat.threads.tab.favorites": "Favoriler",
          "openchat.threads.title.threads": "Yaz\u0131\u015fmalar",
          "openchat.threads.tooltip.messagewontsend":
            "Yaz\u0131\u015fmadaki mesajlar sohbete g\xf6nderilmeyecek.",
          "openchat.threadspopup.button.cancel": "\u0130ptal",
          "openchat.threadspopup.button.delete": "Sil",
          "openchat.threadspopup.button.unsend": "G\xf6ndermeyi geri al",
          "openchat.threadspopup.desc.deleterootmessage":
            "Bu mesaj\u0131 sildi\u011finizde, yaz\u0131\u015fma t\xfcm \xfcyelerden silinir.",
          "openchat.threadspopup.desc.unsendrootmessage":
            "Mesaj\u0131 g\xf6ndermeyi geri ald\u0131\u011f\u0131n\u0131zda, yaz\u0131\u015fma t\xfcm \xfcyelerden silinir.",
          "openchat.threadspopup.title.deleterootmessage":
            "Bu mesaj silinsin mi?",
          "openchat.threadspopup.title.unsendrootmessage":
            "Mesaj\u0131 g\xf6nderme geri al\u0131ns\u0131n m\u0131?",
          "openchat.unhidemessages.desc.unhidden":
            "\xdcyenin \u015fu andan itibaren g\xf6nderdi\u011fi mesajlar\u0131 g\xf6rebilirsiniz.",
          "openchat.unhidemessages.desc.unhide":
            "Bu \xfcyenin mesajlar\u0131 g\xf6sterilsin mi? Daha \xf6nce gizlenen mesajlar g\xf6sterilmeyecek.",
          "openchat.userprofile.button.hidemessages": "Mesajlar\u0131 gizle",
          "openchat.userprofile.button.unhidemessages":
            "Mesajlar\u0131 g\xf6ster",
          "openchat.yourthread.button.seemessages": "Mesajlar\u0131 g\xf6ster",
          "openchat.yourthread.desc.fewerthan10": "10 mesajdan az",
          "openchat.yourthreads.button.readmore":
            "Yaz\u0131\u015fmalar hakk\u0131nda daha fazla bilgi",
          "openchat.yourthreads.desc.newthreadmessages":
            "Yeni yaz\u0131\u015fma mesajlar\u0131",
          "openchat.yourthreads.desc.photosent": "Foto\u011fraf g\xf6nderildi.",
          "openchat.yourthreads.desc.stickersent": "Sticker g\xf6nderildi.",
          "openchat.yourthreads.desc.videosent": "Video g\xf6nderildi.",
          "openchat.yourthreads.desc.vmsent": "Sesli mesaj g\xf6nderildi.",
          "openchat.yourthreads.title.messageunavailable":
            "Mesaj kullan\u0131lam\u0131yor",
          "openchat.yourthreadspopup.button.ok": "Tamam",
          "openchat.yourthreadspopup.desc.threaddeleted":
            "Bu yaz\u0131\u015fma silindi.",
          "os.msgbox.btn.gotosettings": "Sistem Tercihleri",
          "pl.square.setting.tooltip":
            "Square'de anket olu\u015fturabilecek ve silebilecek ki\u015fileri belirleyebilirsiniz.",
          "poll.create.title": "Anket olu\u015ftur",
          "poll.edit.title": "Anketi d\xfczenle",
          "poll.main.title": "Anket",
          "poll.ongoing.title": "Oyla",
          "poll.result.title": "Sonu\xe7lar",
          "poll.votedcount.title": "%1 (%2)",
          "popup.plugin.failed.retry":
            "\u0130ndirme ba\u015far\u0131s\u0131z. L\xfctfen tekrar deneyin.",
          "power.label.tootip": "LINE'\u0131 kapat",
          "profile.btn.chat.tooltip": "Sohbet",
          "profile.btn.home.tooltip": "Home",
          "profile.btn.recommend.tooltip": "Tavsiye",
          "profile.button.investmentfraudwarning":
            "LINE'da sahtekarl\u0131\u011fa kar\u015f\u0131 dikkatli olun.",
          "profile.delete": "Profili Sil",
          "profile.desc.birthday": "d.M",
          "profile.desc.onediting":
            "Bu ekrandan ayr\u0131lmak istiyor musunuz? Kaydedilmemi\u015f de\u011fi\u015fiklikler silinecek.",
          "profile.desc.timelineposts": "LINE VOOM g\xf6nderileri",
          "profile.edit.background.color": "Arka plan rengini se\xe7in",
          "profile.edit.font.color": "Yaz\u0131 rengini se\xe7in",
          "profile.edit.placeholder": "Metin girin",
          "profile.friendsnameedit.desc.namesetbyfriend":
            "Arkada\u015f\u0131n belirledi\u011fi ad: %1",
          "profile.popup.report": "\u015eikayet et",
          "profile.seemoremenu.button.block": "Engelle",
          "profile.select.capture": "Ekran g\xf6r\xfcnt\xfcs\xfc al",
          "profile.select.default": "Profil'den Se\xe7",
          "profile.select.local": "Bilgisayar\u0131m'dan Se\xe7",
          "profile.select.text": "Metin profili",
          "profile.socialprofile.menutitle.editprofile": "Profil ayarlar\u0131",
          "registration.btn.label.resendPin": "Onay kodunu tekrar g\xf6nder",
          "registration.btn.message.resendPin":
            "Do\u011frulama kodu tekrar g\xf6nderildi.",
          "registration.check.age.ageVerification.body":
            'Bu \xf6zelli\u011fi kullanmak i\xe7in ya\u015f\u0131n\u0131z\u0131 do\u011frulaman\u0131z gerekir.\nYa\u015f\u0131n\u0131z\u0131 do\u011frulamak i\xe7in LINE\'\u0131n mobil s\xfcr\xfcm\xfcnde Ayarlar > "Ya\u015f do\u011frulamas\u0131" b\xf6l\xfcm\xfcne gidin.',
          "registration.check.age.ageVerification.title":
            "Ya\u015f do\u011frulamas\u0131",
          "registration.check.age.ageunder.body":
            "Bu \xf6zellik yaln\u0131zca 18 ya\u015f\u0131n\u0131n \xfczerinde oldu\u011fu do\u011frulanan kullan\u0131c\u0131lar i\xe7indir.",
          "registration.check.age.error.loadUrl":
            "Ba\u011flan\u0131lam\u0131yor. L\xfctfen a\u011f ba\u011flant\u0131n\u0131z\u0131 kontrol edin ve tekrar deneyin.",
          "registration.check.age.error.retrieveRequest":
            "Ya\u015f do\u011frulan\u0131rken bir hata olu\u015ftu. L\xfctfen tekrar deneyin.",
          "registration.check.age.underAge":
            "Arama \xf6zelli\u011fini kullanarak arkada\u015f eklemek i\xe7in LINE'\u0131n mobil s\xfcr\xfcm\xfcnde 18 ya\u015f\u0131ndan b\xfcy\xfck oldu\u011funuzu do\u011frulaman\u0131z gerekir. Mobil cihaz\u0131n\u0131zda ki\u015finin QR kodunu tarayarak arkada\u015f eklemeye devam edebilirsiniz.",
          "registration.code.phone.call": "Bunun Yerine Beni Ara",
          "registration.code.phone.guide":
            "Sizi do\u011frulama kodunuzu bildirmek i\xe7in arayaca\u011f\u0131z.\nDikkat, arayan numara g\xf6r\xfcnmeyebilir ve arama tarifeniz \xfczerinden \xfccretlendirilebilir.\n\n",
          "registration.code.sms.resent.guide":
            "%1 dakika, %2 saniye i\xe7inde yeni bir kod isteyebilirsiniz.\n",
          "registration.common.next": "Sonraki",
          "registration.common.underIE8.alert":
            "Oturum a\xe7mak i\xe7in Internet Explorer 8 veya \xfczeri gerekir.\nL\xfctfen Internet Explorer\u2019\u0131 g\xfcncelleyin veya mobil cihaz\u0131n\u0131z\u0131 kullanarak kaydolun.",
          "reply.doubleclick.toast":
            "Yan\u0131tlamak i\xe7in mesaja \xe7ift t\u0131klay\u0131n. ",
          "reply.error.toast": "Orijinal mesaj bulunamad\u0131.",
          "reply.goto.replied": "Yan\u0131ta geri d\xf6n",
          "reply.no.original.message":
            "(Orijinal mesaj g\xf6r\xfcnt\xfclenemiyor)",
          "reply.unknown.user": "Bilinmeyen kullan\u0131c\u0131",
          "report.btn.agreeandsend": "Kabul et ve G\xf6nder",
          "report.btn.agreeandsend.thpdpa": "Tan\u0131 ve g\xf6nder",
          "report.confirm.groupinvitation":
            "Sizi bir grup sohbetine davet eden bir kullan\u0131c\u0131y\u0131 \u015fikayet etti\u011finizde sohbet verileri LINE ile payla\u015f\u0131l\u0131r.",
          "report.desc.reason":
            "\u015eikayetinizin nedenini ve neler oldu\u011funu bize bildirin.",
          "report.desc.title": "\u015eikayet et",
          "report.done": "\u015eikayet G\xf6nderildi!",
          "report.done.suggestBlock":
            "\u015eikayet g\xf6nderildi.\nBu kullan\u0131c\u0131 engellensin mi?",
          "report.done.suggestBlock.groupinvitation": "%1 engellensin mi?",
          "report.note.subTitle":
            "Bu g\xf6nderiyi \u015fikayet edin.\n(Olu\u015fturan: %1)",
          "report.popupbutton.impersonation.decline": "Atla",
          "report.popupbutton.impersonation.proceed": "Devam et",
          "report.reason.Other": "Di\u011fer",
          "report.reason.gender": "Cinsel taciz",
          "report.reason.harrassment": "Taciz",
          "report.reason.impersonation": "Kimli\u011fe b\xfcr\xfcnme",
          "report.reason.impersonation.inquirypopup":
            "L\xfctfen soru formumuza gidip istenen \xf6\u011feleri doldurarak bu kimli\u011fe b\xfcr\xfcnme vakas\u0131n\u0131 ara\u015ft\u0131rmam\u0131za yard\u0131mc\u0131 olmak i\xe7in bize ayr\u0131nt\u0131l\u0131 bilgiler verin.",
          "report.reason.scam": "Doland\u0131r\u0131c\u0131l\u0131k",
          "report.reason.spam": "Reklam",
          "requireinvite.popup.button.cancel": "Vazge\xe7",
          "requireinvite.popup.button.confirmon":
            "Devre d\u0131\u015f\u0131 b\u0131rak",
          "requireinvite.popup.desc.onewaywarning":
            "Bu ayar bir daha kapat\u0131lamaz.",
          "requireinvite.popup.title.onewaywarning":
            "Yeni \xfcyelerin daveti kabul etmeleri zorunlu tutulsun mu?",
          "requireinvite.toggle.desc":
            "Yeni \xfcyelerin gruba kat\u0131lmak i\xe7in daveti kabul etmeleri gerekir.",
          "requireinvite.toggle.title": "\xdcyeler daveti kabul etmelidir",
          "screen.desc.need.os.recordscreen":
            "G\xf6r\xfcnt\xfcl\xfc aramalarda ekran kayd\u0131 ve ekran payla\u015f\u0131m\u0131 \xf6zelliklerini kullanmak i\xe7in l\xfctfen LINE'\u0131n Ekran\u0131 Kaydetme \xf6zelli\u011fine eri\u015fmesine izin verin.",
          "screenshare.desc.need.os.recordscreen":
            "Ekran payla\u015f\u0131lamad\u0131. L\xfctfen LINE'a Ekran Kayd\u0131 \xf6zelli\u011fine eri\u015fim izni verin.",
          "screenshare.ongoing.error":
            "Ekran payla\u015f\u0131m\u0131 yap\u0131l\u0131rken bu \xf6zellik kullan\u0131lamaz.",
          "screenshare.ongoing.user":
            "Ekran payla\u015f\u0131m\u0131 devam ediyor.",
          "search.defaultView.doYouRemoveAllRecentSearchKeywords":
            "Son aramalar\u0131n\u0131z\u0131n t\xfcm\xfc silinsin mi?",
          "search.defaultView.doYouUseSaveSearchKeyword":
            "Son Aramalar \xf6zelli\u011fi etkinle\u015ftirilsin mi",
          "search.defaultView.dontYouUseSaveSearchKeyword":
            "Son Aramalar \xf6zelli\u011fi devre d\u0131\u015f\u0131 b\u0131rak\u0131ls\u0131n m\u0131?",
          "search.defaultView.offSaveSearchKeyword":
            "Otomatik Kaydetmeyi Devre D\u0131\u015f\u0131 B\u0131rak",
          "search.defaultView.onSaveSearchKeyword":
            "Otomatik Kaydetmeyi Etkinle\u015ftir",
          "search.defaultView.recentSearchKeyword": "Son aramalar",
          "search.defaultView.recentSearchKeywordEmpty":
            "Yak\u0131n zamana ait araman\u0131z yok.",
          "search.defaultView.removeAllRecentSearchKeywords":
            "T\xfcm\xfcn\xfc sil",
          "search.defaultView.saveSearchKeywordOff":
            "Son Aramalar \xf6zelli\u011fi devre d\u0131\u015f\u0131 b\u0131rak\u0131ld\u0131.",
          "select.video.error.ratio":
            "Profil videolar\u0131nda bu en-boy oran\u0131 kullan\u0131lamaz.",
          "service.download.done.popup.desc": "\u0130ndirme tamamland\u0131.",
          "service.download.inprogress.popup.desc": "%1\nindiriliyor...",
          "service.install.device.done.popup.desc":
            "Y\xfckleme tamamland\u0131.",
          "service.install.device.popup.desc": "%1\ny\xfckleniyor...",
          "service.install.popup.desc":
            "%1 \xf6zelli\u011fini kullanmak i\xe7in %2 dosyas\u0131n\u0131 y\xfcklemeniz gerek. Y\xfckleme dosyas\u0131 indirilsin mi?",
          "setting.advancedSetting": "Geli\u015fmi\u015f Ayarlar",
          "setting.advancedSetting.proxy.apply": "Uygula",
          "setting.advancedSetting.proxy.apply.disabled":
            "Proxy ayarlar\u0131 devre d\u0131\u015f\u0131 b\u0131rak\u0131ld\u0131.",
          "setting.advancedSetting.proxy.apply.enabled":
            "Proxy ayarlar\u0131 etkinle\u015ftirildi.",
          "setting.advancedSetting.proxy.check": "Proxy Denetimi",
          "setting.advancedSetting.proxy.complete":
            "Proxy sunucusu kullan\u0131labilir.",
          "setting.advancedSetting.proxy.connect.check":
            "Proxy sunucusu \xfczerinden ba\u011flant\u0131 s\u0131nan\u0131yor...",
          "setting.advancedSetting.proxy.fail":
            "Proxy \xfczerinden ba\u011flant\u0131 kurulam\u0131yor.\nL\xfctfen proxy ayarlar\u0131n\u0131z\u0131 kontrol edin ve tekrar deneyin.",
          "setting.advancedSetting.proxy.fail.protocol":
            "Proxy protokol hatas\u0131: %1",
          "setting.advancedSetting.proxy.fail.verifyUser":
            "Kullan\u0131c\u0131 do\u011frulanamad\u0131.",
          "setting.advancedSetting.proxy.host": "Ana Bilgisayar",
          "setting.advancedSetting.proxy.port":
            "Ba\u011flant\u0131 Noktas\u0131",
          "setting.advancedSetting.proxy.protocol": "Protokol",
          "setting.advancedSetting.proxy.protocol.check":
            "Protokol denetleniyor...",
          "setting.advancedSetting.proxy.responseTime": "(Gecikme: %1 ms)",
          "setting.advancedSetting.proxy.server": "Sunucu",
          "setting.advancedSetting.proxy.server.check":
            "Proxy sunucusu denetleniyor...",
          "setting.advancedSetting.proxy.title": "Proxy",
          "setting.advancedSetting.proxy.use":
            "Proxy sunucusunu etkinle\u015ftir",
          "setting.advancedSetting.proxy.verification":
            "Proxy do\u011frulamay\u0131 etkinle\u015ftir",
          "setting.advancedSetting.proxy.verification.id":
            "Kullan\u0131c\u0131 ad\u0131",
          "setting.advancedSetting.proxy.verification.pw": "\u015eifre",
          "setting.advancedSetting.sync": "E\u015fle",
          "setting.advancedSetting.sync.completed": "Veriler e\u015flendi.",
          "setting.advancedSetting.sync.desc":
            "G\xfcncel tutmak i\xe7in arkada\u015f ve sohbet listelerinizi senkronize edin.",
          "setting.advancedSetting.sync.error.interval":
            "LINE verilerinizi her %1 dakikada bir e\u015fleyecek.\nL\xfctfen daha sonra tekrar deneyin.",
          "setting.advancedSetting.sync.error.network":
            "A\u011f hatas\u0131 nedeniyle e\u015fleme kullan\u0131lam\u0131yor.\nL\xfctfen a\u011f ba\u011flant\u0131n\u0131z\u0131 kontrol edin.",
          "setting.advancedSetting.sync.inprogress":
            "E\u015fleniyor...\nL\xfctfen bekleyin.",
          "setting.advancedSetting.sync.time": "d.M.yyyy HH:mm",
          "setting.advancedSetting.sync.title": "Verileri E\u015fle",
          "setting.alarm.name": "Bildirim Tonu %1",
          "setting.basic.font.apply.alert":
            "Yaz\u0131 tipinde yapt\u0131\u011f\u0131n\u0131z de\u011fi\u015fiklikler LINE'\u0131 yeniden ba\u015flatt\u0131ktan sonra ge\xe7erli olacak. \u015eimdi yeniden ba\u015flat\u0131ls\u0131n m\u0131?",
          "setting.basic.heading.language": "Dil",
          "setting.basic.language.apply.alert":
            "Dil ayarlar\u0131n\u0131 de\u011fi\u015ftirmek i\xe7in l\xfctfen LINE'\u0131 yeniden ba\u015flat\u0131n. \u015eimdi yeniden ba\u015flatmak istiyor musunuz?",
          "setting.basic.language.apply.desc":
            "De\u011fi\u015fiklikler yeniden ba\u015flatma sonras\u0131nda uygulanacakt\u0131r.",
          "setting.basic.language.apply.no": "Sonra Yeniden ba\u015fla",
          "setting.basic.language.apply.yes": "Yeniden ba\u015fla \u015eimdi",
          "setting.btn.select.folder": "Se\xe7",
          "setting.btn.submit": "Tamam",
          "setting.call.blur": "Arka plan efekti",
          "setting.call.call.incomingnoti":
            "Gelen aramalar i\xe7in bildirimleri g\xf6ster",
          "setting.call.camera": "Kamera",
          "setting.call.defaultMike": "Sistem ayarlar\u0131n\u0131 kullan",
          "setting.call.defaultSpeaker": "Sistem ayarlar\u0131n\u0131 kullan",
          "setting.call.desc.deviceloading": "Cihazlar y\xfckleniyor...",
          "setting.call.ducking":
            "Di\u011fer uygulamalar\u0131n ses d\xfczeyini azalt",
          "setting.call.grouphd": "HD g\xf6r\xfcnt\xfcl\xfc grup aramas\u0131",
          "setting.call.grouphd.desc":
            "Daha y\xfcksek CPU ve RAM kullanarak daha iyi g\xf6r\xfcnt\xfc kalitesine sahip HD g\xf6r\xfcnt\xfcl\xfc grup aramalar\u0131 yap\u0131n.",
          "setting.call.grouphd.desc.forwin":
            "HD g\xf6r\xfcnt\xfcl\xfc grup aramalar\u0131n\u0131 cihaz\u0131n video codec'ini kullanarak yap\u0131n. Bu \xf6zelli\u011fin kullan\u0131lmas\u0131 daha iyi g\xf6r\xfcnt\xfc kalitesi sa\u011flar ancak daha y\xfcksek CPU ve RAM kullan\u0131m\u0131na neden olur.",
          "setting.call.handsfreebtinfo.desc":
            "Hem hoparl\xf6r hem de mikrofon olarak tan\u0131nan Bluetooth cihazlar\u0131n\u0131zla ilgili sorun ya\u015f\u0131yorsan\u0131z mikrofonunuzu ve hoparl\xf6r\xfcn\xfcz\xfc ayn\u0131 cihaz olarak ayarlamay\u0131 deneyin.",
          "setting.call.label.duckingGuide":
            "Kayd\u0131rma \xe7ubu\u011funu ayarlayarak aramalar s\u0131ras\u0131nda di\u011fer uygulamalar\u0131n ses d\xfczeyini azalt\u0131n. Kayd\u0131rma \xe7ubu\u011fu %100'e ayarland\u0131\u011f\u0131nda di\u011fer uygulamalar tamamen sessize al\u0131n\u0131r.",
          "setting.call.mic.desc.noisecancelinglight":
            "Bilgisayar fan\u0131 veya arka plan m\xfczi\u011fi gibi g\xfcr\xfclt\xfcleri kald\u0131r\u0131n.",
          "setting.call.mic.desc.noisecancelingstrong":
            "K\xf6pek havlamas\u0131 veya klavye sesi gibi g\xfcr\xfclt\xfcleri kald\u0131r\u0131n.",
          "setting.call.mic.echocancelling": "Yank\u0131 engelleme",
          "setting.call.mic.echocancelling.desc":
            "Bu se\xe7enek, ses cihazlar\u0131n\u0131zdan kaynaklanan yank\u0131y\u0131 ortadan kald\u0131rarak aramadaki di\u011fer ki\u015filerin sizi net bir \u015fekilde duymas\u0131n\u0131 sa\u011flar. Bilgisayar\u0131n\u0131zdan ses payla\u015f\u0131rken bu se\xe7ene\u011fi kapat\u0131n.",
          "setting.call.mic.echocancelling.mouseovertooltip":
            '\xd6nerilen engelleme d\xfczeyi i\xe7in "Optimum" se\xe7ene\u011fini i\u015faretleyin. Yank\u0131y\u0131 daha etkili bir \u015fekilde engellemek i\xe7in "Maksimum" se\xe7ene\u011fini i\u015faretleyin. Ancak ba\u015fkalar\u0131 sizinle ayn\u0131 anda konu\u015ftu\u011funda sesinizin kesilebilece\u011fini unutmay\u0131n.',
          "setting.call.mic.echocancelling.option1": "Optimum",
          "setting.call.mic.echocancelling.option2": "Maksimum",
          "setting.call.mic.menu.noisecancelinglight": "Hafif",
          "setting.call.mic.menu.noisecancelingstrong": "G\xfc\xe7l\xfc",
          "setting.call.mic.noisecanceling": "G\xfcr\xfclt\xfc engelleme",
          "setting.call.mic.noisecanceling.checkbox":
            "G\xfcr\xfclt\xfc engellemeyi etkinle\u015ftir",
          "setting.call.mic.noisecanceling.desc":
            "Kullan\u0131c\u0131lar\u0131n sizi daha iyi duyabilmeleri i\xe7in arama s\u0131ras\u0131nda kendi taraf\u0131n\u0131zdaki arka plan g\xfcr\xfclt\xfcs\xfcn\xfc engelleyin.",
          "setting.call.mike": "Mikrofon",
          "setting.call.mike.autoVolume": "Sesi otomatik ayarla",
          "setting.call.msg.noCamera":
            "Kamera ba\u011flanmad\u0131.\nL\xfctfen cihaz\u0131n ba\u011flant\u0131s\u0131n\u0131 kontrol edip tekrar deneyin.",
          "setting.call.msg.noMike":
            "Mikrofon ba\u011flanmad\u0131.\nL\xfctfen cihaz\u0131n ba\u011flant\u0131s\u0131n\u0131 kontrol edip tekrar deneyin.",
          "setting.call.msg.noSpeaker":
            "Hoparl\xf6r ba\u011flanmad\u0131.\nL\xfctfen cihaz\u0131n ba\u011flant\u0131s\u0131n\u0131 kontrol edip tekrar deneyin.",
          "setting.call.noDevice": "Cihaz yok",
          "setting.call.speaker": "Konu\u015fmac\u0131",
          "setting.call.videocall": "G\xf6r\xfcnt\xfc",
          "setting.call.videocall.HWvideocodec":
            "Cihaz\u0131n video codec'ini kullan",
          "setting.call.videocall.HWvideocodec.desc":
            "Pilin a\u015f\u0131r\u0131 t\xfcketilmesini ve fazla \u0131s\u0131nmas\u0131n\u0131 \xf6nlemek i\xe7in cihaz\u0131n dahili video codec'ini kullan\u0131n. Baz\u0131 cihazlar bu \xf6zelli\u011fi gerekli \u015fekilde desteklemeyebilece\u011finden, g\xf6r\xfcnt\xfcl\xfc aramalarla ilgili sorun ya\u015f\u0131yorsan\u0131z bu se\xe7ene\u011fi kapat\u0131n.",
          "setting.call.videocall.HWvideocodec.popup.desc":
            "Yapt\u0131\u011f\u0131n\u0131z de\u011fi\u015fiklik bir sonraki aramadan itibaren ge\xe7erli olacak. De\u011fi\u015fikli\u011fi \u015fimdi uygulamak i\xe7in aramay\u0131 yeniden ba\u015flat\u0131n.",
          "setting.call.videocall.dynamicspeaking":
            "Her zaman ge\xe7erli konu\u015fmac\u0131y\u0131 g\xf6ster",
          "setting.call.videocall.dynamicspeaking.desc":
            "Konu\u015fmakta olan kat\u0131l\u0131mc\u0131lar\u0131n g\xf6r\xfcnt\xfcs\xfcn\xfc, odak g\xf6r\xfcn\xfcm\xfcndeyken otomatik olarak daha b\xfcy\xfck odakla g\xf6r\xfcnt\xfcler, tablo g\xf6r\xfcn\xfcm\xfcndeyken ise birinci sayfada k\xfc\xe7\xfck resim g\xf6r\xfcnt\xfcs\xfc olarak g\xf6sterir.",
          "setting.call.videocall.gridviewmaxdisplay":
            "Izgara g\xf6r\xfcn\xfcm\xfcnde maksimum 49 kat\u0131l\u0131mc\u0131 g\xf6r\xfcnt\xfcle",
          "setting.call.videocall.gridviewmaxdisplay.desc":
            "Izgara g\xf6r\xfcn\xfcm\xfcnde maksimum 49 kat\u0131l\u0131mc\u0131n\u0131n k\xfc\xe7\xfck resmini g\xf6r\xfcnt\xfcler.",
          "setting.call.videocall.gridviewmaxdisplay.tooltip":
            '<![CDATA[Bu cihazda maksimum 25 k\xfc\xe7\xfck resim destekleniyor. Daha fazla bilgi i\xe7in <a href="https://help.line.me/line/%1/?contentId=20018989&lang=%2">Yard\u0131m</a> b\xf6l\xfcm\xfcne bak\u0131n.]]>',
          "setting.call.videocall.screenshare.alarmoff":
            "Tam ekran modunda ekran payla\u015f\u0131m\u0131 etkinken bildirimleri sessize al",
          "setting.call.videocall.showpreview":
            "G\xf6r\xfcnt\xfcl\xfc aramaya kat\u0131lmadan \xf6nce kamera \xf6nizlemesini g\xf6ster",
          "setting.call.voicesettings": "Ses",
          "setting.call.youtube.clipboard":
            "YouTube videolar\u0131n\u0131 payla\u015fmak i\xe7in ba\u011flant\u0131lar\u0131 panoya yap\u0131\u015ft\u0131r",
          "setting.call.youtube.clipboard.checkbox":
            "Panoya eri\u015fime izin ve",
          "setting.call.youtube.clipboard.desc":
            "B\xf6ylece, payla\u015fmak \xfczere bir YouTube videosu se\xe7ti\u011finizde, kopyalam\u0131\u015f oldu\u011funuz YouTube ba\u011flant\u0131s\u0131 otomatik olarak taray\u0131c\u0131n\u0131za yap\u0131\u015ft\u0131r\u0131l\u0131r.",
          "setting.chats.deletedata.chatHisotry.btn.all": "T\xfcm cihazlar",
          "setting.chats.deletedata.chatHisotry.btn.onlypc":
            "Yaln\u0131zca bu cihaz",
          "setting.chats.deletedata.chatHisotry.desc":
            "Sohbet ge\xe7mi\u015finizi nereden silmek istedi\u011finizi se\xe7in. Bu i\u015flem geri al\u0131namaz.",
          "setting.chats.deletedata.chatHisotry.title":
            "Sohbet ge\xe7mi\u015fi ",
          "setting.default.font.label": "Varsay\u0131lan font",
          "setting.desc.removeLocalChat":
            "Sohbet ge\xe7mi\u015finiz kal\u0131c\u0131 olarak silinecek.",
          "setting.hiddenchat.empty": "Gizlenen sohbetiniz yok.",
          "setting.hiddenchat.title": "Gizlenen sohbetler",
          "setting.keep.alert.deleteAll":
            "Keep'teki her \u015fey silinsin mi? Bu i\u015flem Keep Memo'yu etkilemez.",
          "setting.keep.btn.deleteAll":
            "Kay\u0131tl\u0131 t\xfcm \xf6\u011feleri sil",
          "setting.keep.desc.dataonlyincludesitemsinkeep":
            "Bu i\u015flem yaln\u0131zca Keep i\xe7in kulland\u0131\u011f\u0131n\u0131z depolama alan\u0131n\u0131 kapsar; Keep Memo'yu kapsamaz.",
          "setting.keep.desc.photos": "Foto\u011fraflar",
          "setting.keep.desc.text": "Metin",
          "setting.keep.desc.videos": "Videolar",
          "setting.keyword.add.error.character":
            "<![CDATA[Anahtar s\xf6zc\xfckler > ve < i\u015faretlerini veya bo\u015fluk i\xe7eremez.]]>",
          "setting.keyword.add.error.characterDup":
            "Bu anahtar kelimeyi zaten eklediniz.",
          "setting.keyword.add.error.characterSize":
            "Anahtar kelimeler en az iki karakter uzunlu\u011funda olmal\u0131d\u0131r.",
          "setting.keyword.added": "Eklenen anahtar kelimeler",
          "setting.keyword.btn.add": "Anahtar Kelime Ekle",
          "setting.keyword.desc":
            "Bu anahtar kelimeleri i\xe7eren okunmam\u0131\u015f mesajlar i\xe7in uyar\u0131lar al\u0131n.",
          "setting.keyword.title": "Anahtar kelimeye g\xf6re uyar\u0131lar",
          "setting.label.basic.alarmMode":
            "Nas\u0131l Bildirim Yap\u0131l\u0131r",
          "setting.label.basic.alarmMode.showAlarm": "Beliren Bildirimler",
          "setting.label.basic.alarmMode.soundAlarm": "Ses Bildirimler",
          "setting.label.basic.alarmRule": "Grup Davetleri Bildir",
          "setting.label.basic.alarmRule.groupInviteAlarm":
            "Grup davetleri ve bir gruba kat\u0131lan yeni \xfcyeler i\xe7in bildirim g\xf6nderin.",
          "setting.label.basic.alarmRule.mention":
            "Birisi benden bahsetti\u011finde bildirim g\xf6nder",
          "setting.label.basic.alarmRule.newChatAlarm":
            "Yeni Mesajlar\u0131 Bildir",
          "setting.label.basic.alarmRule.noFullScreenAlarm":
            "Tam ekranda uyar\u0131lar\u0131 kapat",
          "setting.label.basic.alarmRule.noMobileAlarmWhileUsingPC":
            "Masa\xfcst\xfc s\xfcr\xfcm\xfcne giri\u015f yap\u0131ld\u0131\u011f\u0131nda telefon bildirimlerini kapat.\n (LINE kilitliyken veya 3 dakika i\u015flem yap\u0131lmad\u0131\u011f\u0131nda bildirimlere devam edilir.)",
          "setting.label.basic.alarmRule.note":
            "Notlar i\xe7in bildirim g\xf6nder",
          "setting.label.basic.alarmRule.videocal":
            "Sesli ve g\xf6r\xfcnt\xfcl\xfc aramalarda sesli bildirimleri devre d\u0131\u015f\u0131 b\u0131rak",
          "setting.label.basic.alarmSound": "Bildirim Tonu",
          "setting.label.basic.alarmtype": "Bildirim stili",
          "setting.label.basic.alarmtype.basic": "Varsay\u0131lan",
          "setting.label.basic.font": "Sohbet odas\u0131na font Ayarlar",
          "setting.label.basic.font.desc":
            "Yaz\u0131 tipi ayarlar\u0131 yaln\u0131zca sohbet odalar\u0131 i\xe7indir.",
          "setting.label.basic.font.extraLarge": "\xc7ok B\xfcy\xfck",
          "setting.label.basic.font.extraLarge.size": "16",
          "setting.label.basic.font.large": "B\xfcy\xfck",
          "setting.label.basic.font.large.size": "14",
          "setting.label.basic.font.name": "Font",
          "setting.label.basic.font.normal": "Normal",
          "setting.label.basic.font.normal.size": "12",
          "setting.label.basic.font.normal.size.mac": "13",
          "setting.label.basic.font.size": "Boyutu",
          "setting.label.basic.font.small": "K\xfc\xe7\xfck",
          "setting.label.basic.font.small.size": "11",
          "setting.label.basic.send.key": "Tu\u015fuyla G\xf6nder",
          "setting.label.private.profile.propertyName.id":
            "(Kimlik if\u015fa edilmeyecektir.)",
          "setting.label.title": "Ayarlar",
          "setting.lockscreen": "Kilit modu",
          "setting.lockscreen.time.15minutes": "15 dakika",
          "setting.lockscreen.time.1hour": "1 saat",
          "setting.lockscreen.time.30minutes": "30 dakika",
          "setting.lockscreen.time.3hours": "3 saat",
          "setting.lockscreen.time.3minutes": "3 dakika",
          "setting.lockscreen.time.5minutes": "5 dakika",
          "setting.lockscreen.turn.on":
            "\u015eundan uzun s\xfcre i\u015flem yap\u0131lmazsa LINE'\u0131 kilitle:",
          "setting.maintab.alarm": "Uyar\u0131lar",
          "setting.maintab.basicSetting": "Varsay\u0131lan",
          "setting.maintab.call": "Arama",
          "setting.maintab.chat": "Sohbet",
          "setting.maintab.contact": "Arkada\u015flar",
          "setting.maintab.privacy": "Gizlilik",
          "setting.maintab.profile": "Profil",
          "setting.maintab.talk": "Sohbet Odas\u0131 Ayarlar\u0131",
          "setting.messengerView.allinone.desc": "Sa\u011fda g\xf6ster.",
          "setting.messengerView.allinone.label": "Tek G\xf6vde",
          "setting.messengerView.apply.alert":
            "Sohbet g\xf6r\xfcnt\xfcleme se\xe7ene\u011fini de\u011fi\u015ftirirseniz t\xfcm a\xe7\u0131k sohbet pencereleri kapanacak.\nDevam edilsin mi?\n",
          "setting.messengerView.label":
            "Sohbet G\xf6r\xfcnt\xfcleme Se\xe7enekleri",
          "setting.messengerView.seperate.desc":
            "Sohbetler ayr\u0131 pencerelerde g\xf6sterilir.",
          "setting.messengerView.seperate.label": "Ayr\u0131 Pencereler",
          "setting.popup.private.emptyName":
            "L\xfctfen en az bir karakter girin.",
          "setting.popup.private.tooLongName":
            "\u0130sminiz 20 karakteri ge\xe7memelidir.",
          "setting.shorcut.chatfolder.move": "Klas\xf6r\xfc ta\u015f\u0131",
          "setting.shorcut.desc.chatfolder": "Sohbet klas\xf6rleri",
          "setting.shorcut.list.previous.chat": "\xd6nceki sohbete git",
          "setting.shorcut.list.search": "Ara",
          "setting.shortcut.array.window": "Sohbetleri s\u0131rala",
          "setting.shortcut.callnlive.audio": "Mikrofonu a\xe7/kapat",
          "setting.shortcut.callnlive.video": "Kameray\u0131 a\xe7/kapat",
          "setting.shortcut.cancel.array.window":
            "Sohbet s\u0131ralamas\u0131n\u0131 kald\u0131r",
          "setting.shortcut.capture.copy": "Kopyala",
          "setting.shortcut.capture.draw.straight":
            "D\xfcz \xe7izgi, kare, daire \xe7iz",
          "setting.shortcut.capture.fix":
            "Ekran g\xf6r\xfcnt\xfcs\xfcn\xfc yeniden konumland\u0131r",
          "setting.shortcut.capture.redo": "Yinele",
          "setting.shortcut.capture.save": "Kaydet",
          "setting.shortcut.capture.undo": "Geri Al",
          "setting.shortcut.chat.newline": "Yeni \xe7izgi",
          "setting.shortcut.chat.open.keep": "Keep'i a\xe7",
          "setting.shortcut.chat.screen.capture":
            "Ekran g\xf6r\xfcnt\xfcs\xfc al",
          "setting.shortcut.close.window": "Pencereyi kapat",
          "setting.shortcut.lable": "Klavye k\u0131sayollar\u0131",
          "setting.shortcut.list.basic": "Temel",
          "setting.shortcut.list.callnlive": "Aramalar",
          "setting.shortcut.list.chat": "Sohbet",
          "setting.shortcut.list.friend.chat":
            "Arkada\u015flar, sohbet listesi",
          "setting.shortcut.list.viewer": "Medya g\xf6r\xfcnt\xfcleyici",
          "setting.shortcut.markdown.bold": "Kal\u0131n",
          "setting.shortcut.markdown.codeblock": "Metin blo\u011fu",
          "setting.shortcut.markdown.italic": "\u0130talik",
          "setting.shortcut.markdown.strikethrough": "\xdcst\xfc \xe7izili",
          "setting.shortcut.markdown.title": "Metin bi\xe7imlendirme",
          "setting.shortcut.markdown.wordblock": "Sat\u0131r blo\u011fu",
          "setting.shortcut.min.window":
            "Pencereyi simge durumuna k\xfc\xe7\xfclt",
          "setting.shortcut.move.add.friend": "Arkada\u015f ekle sekmesine git",
          "setting.shortcut.move.bottom": "Sohbetin en alt\u0131na git",
          "setting.shortcut.move.chat.list": "Sohbetler sekmesine git",
          "setting.shortcut.move.friend.list": "Arkada\u015flar sekmesine git",
          "setting.shortcut.move.top": "Sohbetin en \xfcst\xfcne git",
          "setting.shortcut.on.lock": "Kilit modunu etkinle\u015ftir",
          "setting.shortcut.open.keep": "Keep'i a\xe7",
          "setting.shortcut.open.note": "Notlar\u0131 a\xe7",
          "setting.shortcut.open.sticker": "Sticker penceresini a\xe7",
          "setting.shortcut.open.tip":
            "K\u0131sayol ara\xe7 ipu\xe7lar\u0131n\u0131 g\xf6r\xfcnt\xfcle",
          "setting.shortcut.open.window": "Yeni pencerede a\xe7",
          "setting.shortcut.photo.copy": "Dosyay\u0131 kopyala",
          "setting.shortcut.photo.save": "Dosyay\u0131 kaydet",
          "setting.shortcut.screen.chapture": "Ekran g\xf6r\xfcnt\xfcs\xfc al",
          "setting.shortcut.search": "Ara",
          "setting.shortcut.send.file": "Dosya g\xf6nder",
          "setting.shortcut.timeline.comment": "Yorum yaz",
          "setting.shortcut.timeline.like": "Be\u011fen",
          "setting.shortcut.timeline.like.pick": "\u0130fade se\xe7",
          "setting.shortcut.tip":
            "LINE'daki her \u015fey i\xe7in kullan\u0131\u015fl\u0131 klavye k\u0131sayollar\u0131.",
          "setting.shortcut.video.jump": "Videolarda 5 saniye ileri/geri al",
          "setting.shortcut.videongif.stop": "Oynat/Duraklat",
          "setting.shortcut.viewer.fullscreen": "Tam ekran g\xf6r\xfcnt\xfcle",
          "setting.shortcut.volume.control":
            "Videolarda sesi y\xfckselt/k\u0131s",
          "setting.shortcut.zoominout":
            "G\xf6r\xfcnt\xfcy\xfc b\xfcy\xfct/k\xfc\xe7\xfclt",
          "setting.tab.download.folder": "\u0130ndir Klas\xf6r",
          "setting.tab.file.trans": "Dosyas\u0131",
          "setting.tab.login": "Giri\u015f",
          "setting.tab.url.preview": "URL \xf6nizlemeleri",
          "setting.tab.voip": "Arama",
          "setting.talk.animation.gif": "Animasyonlu GIF\u2019ler",
          "setting.talk.animation.gif.play":
            "Sohbetlerde animasyonlu GIF\u2019leri otomatik oynat",
          "setting.talk.backgroundSetting.apply":
            "Se\xe7ili arka plan t\xfcm sohbetlere uygulanacak.\nDevam edilsin mi?",
          "setting.talk.backgroundSetting.apply.allChats":
            "T\xfcm sohbetlere uygula",
          "setting.talk.backgroundSetting.detail":
            "Sohbetlerinize uygulamak istedi\u011finiz arka plan\u0131 se\xe7in (OpenChat'ler hari\xe7tir).",
          "setting.talk.backgroundSetting.selected": "Arka Plan Se\xe7",
          "setting.talk.backgroundSetting.title": "Sohbet Arka Plan\u0131",
          "setting.talk.heading.talk": "Sohbet",
          "setting.talk.photo.resolution.detail":
            "20 MB\u2019den b\xfcy\xfck foto\u011fraflar orijinal \xe7\xf6z\xfcn\xfcrl\xfcklerinde g\xf6nderilemez.",
          "setting.talk.photo.resolution.option.default": "Varsay\u0131lan",
          "setting.talk.photo.resolution.option.original": "Orijinal  ",
          "setting.talk.photo.resolution.option.standard": "Standart",
          "setting.talk.photo.resolution.title":
            "Foto\u011fraf \xc7\xf6z\xfcn\xfcrl\xfc\u011f\xfc",
          "setting.talk.theme.check.seasonal": "Kar efekti",
          "setting.talk.theme.desc.seasonal": "Temalar",
          "setting.theme.desc.darkmode.limitation":
            "\u015eu anda baz\u0131 ekranlar koyu modda kullan\u0131lamamaktad\u0131r.",
          "setting.theme.mode.dark": "Koyu mod",
          "setting.theme.mode.light": "A\xe7\u0131k mod",
          "setting.theme.systemSetting": "Sistem ayar\u0131n\u0131 kullan",
          "setting.theme.title": "G\xf6r\xfcnt\xfcleme modu",
          "setting.url.preview.desc":
            "Sohbette payla\u015f\u0131lan ba\u011flant\u0131lar\u0131n k\xfc\xe7\xfck resimlerini g\xf6r\xfcn ve site bilgilerini \xf6nizleyin.",
          "setting.window.scaleRatio": "Ekran Boyutu",
          "setting.window.scaleRatio.default": "Temel G\xf6r\xfcnt\xfc Boyutu",
          "settingAlarm.label.duration": "S\xfcre",
          "settingAlarm.label.lucid": "Transparan",
          "settingAlarm.label.opacity": "\u015feffafl\u0131k",
          "settingAlarm.label.opaque": "Mat",
          "settingAlarm.label.setAlarmWindow":
            "Uyar\u0131lar\u0131 Ayarlar\u0131",
          "settingAlarm.label.toastContent": "Detaylar",
          "settingAlarm.label.toastPreview": "\xd6nizleme G\xf6ster",
          "settingAlarm.label.unitSecond": "saniye",
          "settingLogin.alert.autoLogin":
            "Otomatik giri\u015f etkinle\u015ftirildi. Bu \xf6zelli\u011fi Ayarlar'da devre d\u0131\u015f\u0131 b\u0131rakabilirsiniz.",
          "settingLogin.check.autoLogin": "Giri\u015f otomatik",
          "settingLogin.check.autoRunWin":
            "Windows baslat\u0131ld\u0131\u011f\u0131nda otomatik y\xfcr\xfct",
          "settingPrivacy.btn.ublockBuddy": "Engeli Kald\u0131r",
          "settingPrivacy.call.blur.desc":
            "G\xf6r\xfcnt\xfcl\xfc aramalar s\u0131ras\u0131nda bulan\u0131kla\u015ft\u0131rma efektinin yo\u011funlu\u011funu ayarlamak i\xe7in kayd\u0131rma d\xfc\u011fmesini s\xfcr\xfckleyin.",
          "settingPrivacy.cleardata.cache.desc":
            "\xd6nbellekteki verileriniz silinecek. Foto\u011fraflar, videolar, sesli mesajlar veya dosyalar silinmeyecek.",
          "settingPrivacy.cleardata.cache.error":
            "\xd6nbellekteki verilerinizden baz\u0131lar\u0131 silinemedi. L\xfctfen daha sonra tekrar deneyin.",
          "settingPrivacy.cleardata.cache.popup":
            "\xd6nbellekteki verileriniz silinecek. Devam edilsin mi?",
          "settingPrivacy.label.allowCallAlarm.desc":
            "Ayn\u0131 ayar mobil LINE uygulaman\u0131z i\xe7in de etkinle\u015ftirilecek.",
          "settingPrivacy.label.allowCallAlarmPC": "Gelen arama izin ver",
          "settingPrivacy.label.blockAndDelete.desc":
            "Bu hesap engellenen hesaplar listenizden silinsin mi? Bu hesab\u0131n engelinin kald\u0131r\u0131lmayaca\u011f\u0131n\u0131 unutmay\u0131n. Tekrar arkada\u015f olarak eklemek i\xe7in bu hesab\u0131 kimli\u011fe veya telefon numaras\u0131na g\xf6re aray\u0131n.",
          "settingPrivacy.label.blockBuddyList": "Engellenen hesaplar",
          "settingPrivacy.label.blockBuddyListEmpty":
            "Hi\xe7bir hesab\u0131 engellemediniz.",
          "settingPrivacy.label.blocksquarememberlist":
            "OpenChat'teki engellenmi\u015f \xfcyeler",
          "settingPrivacy.label.blocksquarememberlistEmpty":
            "Engellenmi\u015f \xfcye yok.",
          "settingPrivacy.label.buddySearchAllow":
            "Arkada\u015flar aramak i\xe7in izin",
          "settingPrivacy.label.clearRecords": "Sohbet G\xfcnl\xfcklri Sil",
          "settingPrivacy.label.cleardata": "Verileri temizle",
          "settingPrivacy.label.cleardata.cache": "\xd6nbellekteki veriler",
          "settingPrivacy.label.filterMessages":
            "Arkada\u015f\u0131n\u0131z olmayan ki\u015filer taraf\u0131ndan g\xf6nderilen t\xfcm mesajlar\u0131 reddedin.",
          "settingPrivacy.label.filterMessages.title":
            "Arkada\u015f olmayan ki\u015filerden gelen mesajlar\u0131 engelle",
          "settingPrivacy.label.hiddenBuddyList": "Gizlenmi\u015f hesaplar",
          "settingPrivacy.label.hiddenBuddyListEmpty":
            "Hi\xe7bir hesab\u0131 gizlemediniz.",
          "settingPrivacy.label.hideAndDelete.desc":
            "Bu hesap gizlenmi\u015f hesaplar listenizden silinsin mi? Bu hesab\u0131n size mesaj g\xf6ndermeye devam edebilece\u011fini unutmay\u0131n. Tekrar arkada\u015f olarak eklemek i\xe7in bu hesab\u0131 kimli\u011fe veya telefon numaras\u0131na g\xf6re aray\u0131n.",
          "settingPrivacy.label.idSearchAllowYes": "Kullan\u0131c\u0131 ID'si",
          "settingPrivacy.label.title": "Gizlilik",
          "settingProfile.error.invalidData": "Bu isim kullan\u0131lamaz.",
          "settingProfile.error.network":
            "Unable to process your request due to a temporary error.\nPlease try again.\n",
          "settingProfile.error.server":
            "Bir ge\xe7ici hata nedeniyle iste\u011finiz i\u015fleme koyulamad\u0131.\nL\xfctfen tekrar deneyin.",
          "settingProfile.label.emailEmpty": "Ayarl\u0131 De\u011fil",
          "settingProfile.label.modifyprofile": "D\xfczenle",
          "settingProfile.label.myInfo": "Bilgilerim",
          "settingProfile.label.nickName": "Ad\u0131",
          "settingProfile.label.registerAcoount.input.password.error.mailAddress":
            "Kaydetmeye \xe7al\u0131\u015ft\u0131\u011f\u0131n\u0131z e-posta adresi mevcut \u015fifrenize \xe7ok benziyor.\nL\xfctfen farkl\u0131 bir e-posta adresi kaydedin.",
          "settingProfile.label.registerAcoount.mailAddress": "E-posta",
          "settingProfile.label.statusEmpty": "Ayarl\u0131 De\u011fil",
          "settingProfile.label.statusMessage": "Durum mesaj\u0131",
          "settingProfile.label.userID": "Kullan\u0131c\u0131 Kimli\u011fi",
          "settingProfile.link.registerAcoount.mailAddress":
            "E-postay\u0131 Kaydet >",
          "settingProfile.statusMessage.edit": "Bir durum mesaj\u0131 girin",
          "settingProfile.statusMessage.edit.failed":
            "Durum mesaj\u0131n\u0131z kaydedilemedi.",
          "settings.basic.number.edit":
            "Telefon numaras\u0131n\u0131 de\u011fi\u015ftir",
          "settings.delete.account": "Hesab\u0131 sil",
          "settings.delete.account.btn": "Hesab\u0131 sil",
          "settings.deleteAccount.confirm.desc":
            "LINE hesab\u0131n\u0131z\u0131 silerseniz arkada\u015f listeniz ve sohbet ge\xe7mi\u015finiz de kal\u0131c\u0131 olarak silinir. LINE hesab\u0131n\u0131z\u0131 silmek istedi\u011finizden emin misiniz?",
          "settings.deleteAccount.confirm.title":
            "LINE hesab\u0131n\u0131z\u0131 silmek istedi\u011finizden emin misiniz?",
          "settings.deleteAccount.success":
            "Hesab\u0131n\u0131z silindi\u011fi i\xe7in LINE oturumunuz kapat\u0131ld\u0131.",
          "settings.label.tooltip": "Ayarlar",
          "settings.privacy.publicUserID": "ID'ye G\xf6re Eklenebilsin",
          "settings.privacy.publicUserID.description":
            "Ki\u015filer ID'niz ile arama yaparak sizi arkada\u015f olarak ekleyebilir.",
          "settings.privacy.rejectStrangeMessages": "Mesajlar\u0131 Filtrele",
          "settings.privacy.rejectStrangeMessages.description":
            "A\xe7t\u0131\u011f\u0131n\u0131zda, arkada\u015f olmayanlardan gelen  mesajlar engellenecektir.",
          "settings.privacy.title": "Gizlilik",
          "settings.profile.myInfo.birthday": "Do\u011fum G\xfcn\xfc",
          "settings.profile.myInfo.birthday.desc.plushometab":
            "Do\u011fum g\xfcn\xfcn\xfcz\xfc g\xf6stermeyi tercih ederseniz do\u011fum g\xfcn\xfcn\xfczde size yaln\u0131zca sizin g\xf6rebilece\u011finiz \xf6zel bir animasyon g\xf6nderece\u011fiz. Arkada\u015flar\u0131n\u0131z da profilinizde, Home ve Sohbet sekmelerinde ve di\u011fer yerlerde do\u011fum g\xfcn\xfcn\xfcz\xfc g\xf6rebilecek.",
          "settings.profile.myInfo.birthday.showMonthday":
            "Do\u011fum G\xfcn\xfcm\xfc G\xf6ster",
          "showAllContents.File": "Dosyalar",
          "showAllContents.Iink": "Ba\u011flant\u0131lar",
          "showAllContents.ImageVideo": "Foto\u011fraflar ve videolar",
          "showAllContents.file.noFile":
            "Bu sohbette payla\u015f\u0131lan dosya yok.",
          "showAllContents.moveMessage": "Sohbette g\xf6r",
          "showAllContents.moveMessage.lastMessage":
            "En yeni mesaja bak\u0131n",
          "showAllContents.uploadMember": "Y\xfckleyen: %1 ",
          "squar.group.settings.managemembers.request.delete.alert.notall.done":
            "\u0130stek(ler) silindi.\n\n(Baz\u0131 istekler daha \xf6nce ba\u015fka bir y\xf6netici taraf\u0131ndan ele al\u0131nd\u0131.)",
          "square.abuse.textinput":
            "\u0130li\u015fkili k\xf6t\xfcye kullan\u0131m durumlar\u0131 nedeniyle hesab\u0131n\u0131z s\u0131n\u0131rland\u0131.",
          "square.access.changephoto":
            "Bu OpenChat i\xe7in profil foto\u011fraf\u0131n\u0131z\u0131 de\u011fi\u015ftirin",
          "square.access.chat": "Yeni sohbet olu\u015ftur",
          "square.access.chat.image":
            "Bu sohbetin profil foto\u011fraf\u0131n\u0131 de\u011fi\u015ftirin",
          "square.access.chatroomtohome": "SQUARE Ana Sayfas\u0131na git",
          "square.access.cover.image":
            "Bu OpenChat'in kapak foto\u011fraf\u0131n\u0131 de\u011fi\u015ftirin",
          "square.access.create": "Bir OpenChat olu\u015fturun",
          "square.access.hide":
            "OpenChat'in a\xe7\u0131klamas\u0131n\u0131 gizle",
          "square.access.invite": "Arkada\u015flar\u0131 davet et",
          "square.access.join": "OpenChat'e kat\u0131l",
          "square.access.joinrequest":
            "OpenChat'e kat\u0131lma iste\u011finde bulun",
          "square.access.postoption":
            "Di\u011fer not se\xe7eneklerini g\xf6ster",
          "square.access.profile.image":
            "Bu OpenChat i\xe7in profil foto\u011fraf\u0131n\u0131z\u0131 de\u011fi\u015ftirin",
          "square.access.profile.nickname":
            "Bu OpenChat i\xe7in takma ad\u0131n\u0131z\u0131 de\u011fi\u015ftirin",
          "square.access.qrcode": "OpenChat'in QR kodu",
          "square.access.search": "OpenChat'leri ara",
          "square.access.show":
            "OpenChat'in a\xe7\u0131klamas\u0131n\u0131 g\xf6ster",
          "square.access.square": "OpenChat",
          "square.access.squareoption":
            "Di\u011fer OpenChat se\xe7eneklerini g\xf6ster",
          "square.access.timelinetosquare": "OpenChat'e git",
          "square.access.write": "Not yaz",
          "square.ageconfirmation.popupbutton.cancel": "\u0130ptal",
          "square.ageconfirmation.popupbutton.yes":
            "Evet, en az 18 ya\u015f\u0131nday\u0131m",
          "square.ageconfirmation.popupdesc.atleast18tosetrestriction":
            "Bir OpenChat'te ya\u015f s\u0131n\u0131rlamas\u0131 ayarlamak i\xe7in en az 18 ya\u015f\u0131nda olmal\u0131s\u0131n\u0131z. Bu OpenChat'in y\xf6neticisi olarak, l\xfctfen \xfcyeler aras\u0131ndaki yeti\u015fkinlere y\xf6nelik sohbet konular\u0131n\u0131n t\xfct\xfcn \xfcr\xfcnleri ve alkolle s\u0131n\u0131rl\u0131 oldu\u011fundan emin olun. Bu se\xe7ene\u011fin ayarland\u0131ktan sonra de\u011fi\u015ftirilemeyece\u011fini unutmay\u0131n.",
          "square.ageconfirmation.popuptitle.ageconfirmationrequired":
            "Ya\u015f do\u011frulamas\u0131 gerekli",
          "square.ageconfirmationrequired.popupbutton.cancel": "\u0130ptal",
          "square.ageconfirmationrequired.popupbutton.yes":
            "Onayla ve kat\u0131l",
          "square.ageconfirmationrequired.popupdesc.onlyusersoverlegalageallowedtojoin":
            "Bu OpenChat'e yaln\u0131zca 18 ya\u015f\u0131n\u0131 doldurmu\u015f kullan\u0131c\u0131lar kat\u0131labilir. T\xfcm kullan\u0131c\u0131lar\u0131n g\xfcvenli\u011fini sa\u011flamak i\xe7in OpenChat'in Kullan\u0131m Ko\u015fullar\u0131 ve Y\xf6nergelerine uyman\u0131z gerekir.",
          "square.ageconfirmationrequired.popuptitle.ageconfirmation":
            "Yaln\u0131zca 18 ya\u015f\u0131n\u0131 doldurmu\u015f kullan\u0131c\u0131lar kat\u0131labilir",
          "square.announcement.donotshowagain": "Tekrar g\xf6sterme",
          "square.announcement.donotshowagain.mouseover": "Tekrar\ng\xf6sterme",
          "square.announcement.error": "Bu duyuruya ait mesaj bulunamad\u0131.",
          "square.announcement.message.annouce": "Duyur",
          "square.announcement.minimize": "K\xfc\xe7\xfclt",
          "square.announcement.unannounce": "Duyuruyu Kald\u0131r",
          "square.answer.guide":
            "Bu sohbete kat\u0131lma talebi g\xf6ndermek i\xe7in yukar\u0131daki soruyu yan\u0131tlamal\u0131s\u0131n\u0131z.",
          "square.answer.send.done": "\u0130stek g\xf6nderildi.",
          "square.answer.title": "Soruyu yan\u0131tlay\u0131n",
          "square.banreportuser.popupbutton.cancel": "\u0130ptal",
          "square.banuser.popupdesc.banafterleaving":
            "Bu kullan\u0131c\u0131 OpenChat'ten ayr\u0131ld\u0131. Kullan\u0131c\u0131n\u0131n tekrar kat\u0131lmas\u0131n\u0131 engelleyebilir veya hesab\u0131n\u0131 \u015fikayet edebilirsiniz.",
          "square.chat.button.threadmessages":
            "<![CDATA[<b><font color='%1'>%2+</font></b> mesaj]]>",
          "square.chat.button.threadmessages999":
            "<![CDATA[<b><font color='%1'>%2+</font></b> mesaj\u0131 g\xf6r]]>",
          "square.chat.button.threadmessagesfew":
            "Yaz\u0131\u015fmadaki mesajlar\u0131 g\xf6ster",
          "square.chat.button.threadmessagesmany": "%1+ mesaj",
          "square.chat.desc.sent": "G\xf6nderildi",
          "square.chat.err.file.exceed.capacity":
            "Boyutu izin verilen s\u0131n\u0131r\u0131 a\u015ft\u0131\u011f\u0131ndan dosya g\xf6nderilemiyor.",
          "square.chat.menu.aboutchatroom": "OpenChat'i y\xf6net",
          "square.chat.more.leaveroom": "Sohbetten ayr\u0131l",
          "square.chat.placeholder.qna": "Bu soruyu yan\u0131tlay\u0131n",
          "square.chat.reply.notification": "Yan\u0131t: %1",
          "square.chat.reply.notification2":
            "%1 adl\u0131 ki\u015finin yan\u0131t\u0131: %2",
          "square.chat.setting": "Ayr\u0131nt\u0131l\u0131 ayarlar",
          "square.chat.settings.bg.apply.square.image":
            "OpenChat'in foto\u011fraf\u0131n\u0131 arka plana uygula",
          "square.chat.settings.export.title": "%1 grubunda sohbet et",
          "square.chat.system.msg.invite.a.b":
            "%1, %2 kullan\u0131c\u0131s\u0131n\u0131 sohbete davet etti.",
          "square.chat.system.msg.join.chat": "%1 sohbete kat\u0131ld\u0131.",
          "square.chat.system.msg.leave.chat":
            "%1 sohbetten \xe7\u0131kt\u0131.",
          "square.chat.text.input.nickname": "%1 ad\u0131yla sohbet et",
          "square.chatcontent.button.seemoreqna": "Daha fazla",
          "square.chatcontent.tab.qna": "S/C mesajlar\u0131",
          "square.chatlist.alert.deletedchat":
            "Bu sohbet mevcut de\u011fil. Ba\u015fka bir sohbete kat\u0131lmay\u0131 deneyin.",
          "square.chatlist.alert.max":
            "Maksimum \xfcye say\u0131s\u0131na ula\u015f\u0131ld\u0131\u011f\u0131 i\xe7in bu sohbete kat\u0131lamazs\u0131n\u0131z.",
          "square.chatlist.join.guide":
            "Kat\u0131lmak i\xe7in bir sohbet se\xe7in. Bu OpenChat'teki t\xfcm alt sohbetlerin listesini g\xf6rmek i\xe7in herhangi bir sohbete\xa0girin ve sohbet men\xfcs\xfcnden Sohbetler'e dokunun.",
          "square.chatlist.joined.title": "G\xfcncel sohbetler ",
          "square.chatlist.joined.zero":
            "Hen\xfcz hi\xe7bir square sohbetine kat\u0131lmad\u0131n\u0131z.",
          "square.chatlist.max.member.desc": "Bu sohbet zaten dolu.",
          "square.chatlist.public.join.alert":
            "Bu sohbet, ana sohbet listenizde de g\xf6r\xfcnecek.\n",
          "square.chatlist.public.join.btn": "Kat\u0131l ",
          "square.chatlist.public.max.btn": "Dolu",
          "square.chatlist.public.no.msg": "Mesaj yok.",
          "square.chatlist.public.title": "Kullan\u0131labilir sohbetler ",
          "square.chatlist.public.zero": "Mevcut sohbet yok.",
          "square.chatlist.reply.alert": "Birisi size yan\u0131t verdi.",
          "square.chatlist.square.button": "OpenChat",
          "square.chatlist.title": "Sohbetler",
          "square.chatmenu.button.qna": "Soru-Cevap mesajlar\u0131",
          "square.chatmenu.button.thread": "Yaz\u0131\u015fma",
          "square.chatmenu.button.yourthreads":
            "Yaz\u0131\u015fmalar\u0131n\u0131z",
          "square.chatroom.alert.open.url":
            "Bu ba\u011flant\u0131 g\xfcvenli olmayabilir.\nA\xe7mak istedi\u011finizden emin misiniz?",
          "square.chatroom.block.inputarea.deletedchat": "Sohbet silindi",
          "square.chatroom.block.inputarea.deletedgroup": "OpenChat silindi",
          "square.chatroom.block.inputarea.kickoutgroup":
            "OpenChat'ten \xe7\u0131kar\u0131ld\u0131",
          "square.chatroom.chatlilst.guide.des":
            "Bu OpenChat'i g\xf6rebilir ve kat\u0131labilirsiniz.",
          "square.chatroom.chatlist.title": "Sohbetler",
          "square.chatroom.confirm.desc.kickout":
            "Bu \xfcye OpenChat'ten engellenecek. Devam edilsin mi?",
          "square.chatroom.create.image": "Foto\u011fraf se\xe7",
          "square.chatroom.default.announce.content":
            '"%1" sohbetine ho\u015f geldiniz!',
          "square.chatroom.deletefromall.alert":
            "Se\xe7ilen mesajlar t\xfcm \xfcyelerden silinecek. Devam edilsin mi?",
          "square.chatroom.desc.botadded":
            "%1, %2 adl\u0131 ki\u015fiyi sohbete ekledi.",
          "square.chatroom.desc.botremoved":
            "%1, %2 adl\u0131 ki\u015fiyi sohbetten \xe7\u0131kard\u0131.",
          "square.chatroom.error.alert.deletedchatroom":
            "Bu sohbet mevcut de\u011fil. Ba\u015fka bir sohbete kat\u0131lmay\u0131 deneyin.",
          "square.chatroom.input.deletedgroup": "Silinmi\u015f OpenChat",
          "square.chatroom.input.join.btn": 'Kat\u0131l: "%1"',
          "square.chatroom.invite.layer.des":
            "Bu OpenChat'i payla\u015fmak istedi\u011finiz arkada\u015flar\u0131 davet edin.",
          "square.chatroom.layer.upperloading":
            "Sohbet ge\xe7mi\u015fi y\xfckleniyor...",
          "square.chatroom.longpress.deleteformall": "Sil",
          "square.chatroom.longpress.deletefromall.title": "Sohbetten sil",
          "square.chatroom.longpress.kickout": "Kald\u0131r",
          "square.chatroom.longpress.squarepost": "Not",
          "square.chatroom.memberlist.guest": "Konuklar",
          "square.chatroom.setting.deletechat": "Alt sohbeti sil",
          "square.chatroom.setting.deletechat.description":
            "Alt sohbet silindi\u011finde hi\xe7bir \xfcye taraf\u0131ndan kullan\u0131lamaz. Yine de devam edilsin mi?",
          "square.chatroom.setting.report": "\u015eikayet et",
          "square.chatroom.settings.change.title": "Sohbet ad\u0131",
          "square.chatroom.settings.leave.no.message":
            "Sessiz \xe7\u0131k\u0131\u015f",
          "square.chatroom.system.alert.notfriend":
            '"%1" OpenChat\'inden %2 adl\u0131 ki\u015fiyi arkada\u015f olarak eklemediniz.\nL\xfctfen bu ki\u015fiyle mesajla\u015f\u0131rken dikkatli olun.',
          "square.chatroom.system.message.change.bg":
            "Bir y\xf6netici OpenChat'in foto\u011fraf\u0131n\u0131 de\u011fi\u015ftirdi.",
          "square.chatroom.system.message.change.maxparticipants":
            "%1 sohbet i\xe7in \xfcye say\u0131s\u0131 s\u0131n\u0131r\u0131n\u0131 %2 olarak ayarlad\u0131.",
          "square.chatroom.system.message.change.name":
            "%1, sohbetin ad\u0131n\u0131 \u201c%2\u201d olarak de\u011fi\u015ftirdi.",
          "square.chatroom.system.message.change.picture":
            "%1 sohbetin profil foto\u011fraf\u0131n\u0131 de\u011fi\u015ftirdi.",
          "square.chatroom.system.message.kickout":
            "%1, OpenChat'ten engelllendi.",
          "square.chatroom.system.msg.alert.private":
            'Dikkat! "%1" square\u2019i i\xe7in \xf6zel bir sohbete giriyorsunuz.',
          "square.chatroom.system.msg.alert.public":
            'Dikkat! "%1" OpenChat\'indesiniz.',
          "square.chatroom.system.msg.guide.loading":
            "Her kayd\u0131rd\u0131\u011f\u0131n\u0131zda \xf6nceki mesajlar y\xfcklenir.",
          "square.chatroom.system.msg.guide.report":
            "\u015eikayet etmek i\xe7in mesajlara (foto\u011fraflar, videolar ve ba\u011flant\u0131lar dahil) sa\u011f t\u0131klay\u0131n.",
          "square.chatroom.system.msg.tooltip.private":
            '"%1" square\u2019i i\xe7in \xf6zel bir sohbete giriyorsunuz.',
          "square.chatroom.system.msg.tooltip.public":
            '"%1" OpenChat\'ine giriyorsunuz.',
          "square.chatroom.systemmsg.deletedchat": "Bu sohbet silindi. ",
          "square.chatroom.systemmsg.deletedgroup": "OpenChat silindi.",
          "square.chatroom.systemmsg.emptycommunity":
            "Kullan\u0131lamayan OpenChat",
          "square.chatroom.systemmsg.emptyroom": "Kullan\u0131lamayan sohbet",
          "square.chatroom.systemmsg.kickout":
            "Bir y\xf6netici taraf\u0131ndan bu sohbetten \xe7\u0131kar\u0131ld\u0131n\u0131z. ",
          "square.chatroom.vmenu.chatlist": "Sohbetler",
          "square.chatroom.vmenu.groupchatlist": "Square ana sayfa",
          "square.chatroom.vmenu.leave.alert.outmsg.option":
            "Ayr\u0131ld\u0131\u011f\u0131n\u0131z\u0131 sohbete\nbildirin.",
          "square.coadmin.alert":
            "Yard\u0131mc\u0131 y\xf6netici olarak ayarlans\u0131n m\u0131?",
          "square.common.desc.usercount100kth": "%1 \u0e41\u0e2a\u0e19",
          "square.common.desc.usercount1eok": "%1\uc5b5",
          "square.common.desc.usercount1k": "%1 bin",
          "square.common.desc.usercount1m": "%1 milyon",
          "square.common.desc.usercount1man": "%1\ub9cc",
          "square.common.share": "Payla\u015f",
          "square.community.home.alert.invited.chat":
            "Sohbet davetini kabul etmek ve hemen kat\u0131lmak istiyor musunuz?",
          "square.community.home.chat.button.start": "Ba\u015flat",
          "square.community.home.invite.button": "Davet et",
          "square.community.home.msg.chat.onlymember":
            "Square'e kat\u0131ld\u0131ktan sonra sohbetlere yer alabilirsiniz.\n\u015eimdi kat\u0131lmak ister misiniz?",
          "square.community.home.msg.onlymember":
            "Kat\u0131lma iste\u011finiz onayland\u0131\u011f\u0131nda\nsquare'e kat\u0131labilirsiniz.",
          "square.content.home.shared": "Bir not payla\u015ft\u0131.",
          "square.cover.chat.btn": "Sohbet",
          "square.cover.investmentscams":
            "LINE'da sahtekarl\u0131\u011fa kar\u015f\u0131 dikkatli olun.",
          "square.cover.post.btn": "Notlar",
          "square.create.btn": "",
          "square.create.category": "Kategori ",
          "square.create.category.desc":
            "Kategori se\xe7ti\u011finizde OpenChat \xf6nerilerde g\xf6sterilmeye uygun olur.",
          "square.create.default.category": "Hi\xe7biri",
          "square.create.description": "A\xe7\u0131klama",
          "square.create.description.desc": "OpenChat'i a\xe7\u0131klay\u0131n",
          "square.create.description.input": "A\xe7\u0131klama",
          "square.create.description2":
            "#hashtag kullanarak anahtar kelimeler girin",
          "square.create.error.no.name":
            "L\xfctfen OpenChat'in ad\u0131n\u0131 girin.",
          "square.create.error.popup.input.description.info":
            "L\xfctfen bir OpenChat a\xe7\u0131klamas\u0131 girin.",
          "square.create.error.popup.input.info":
            "L\xfctfen gerekli t\xfcm bilgileri girin.",
          "square.create.groupname": "OpenChat ad\u0131",
          "square.create.image": "Foto\u011fraf se\xe7",
          "square.create.over.text.num.alert":
            "Uzunluk s\u0131n\u0131r\u0131na ula\u015f\u0131ld\u0131. ",
          "square.create.search": "Aramaya izin ver",
          "square.create.search.desc":
            "Di\u011fer ki\u015filer, ad\u0131na veya a\xe7\u0131klamas\u0131na g\xf6re bu OpenChat i\xe7in arama yapabilirler.",
          "square.create.setting.desc":
            "Di\u011fer ki\u015filer OpenChat'iniz i\xe7in arama yapabilecek.",
          "square.create.sgroup.approval.desc":
            "OpenChat'e kat\u0131lmak i\xe7in y\xf6netici onay\u0131 gereklidir.",
          "square.create.sgroup.closedtype": "Kat\u0131lma onay\u0131 gerekli",
          "square.create.sgroup.opentype": "Hemen kat\u0131l",
          "square.create.subchat.guide.des":
            "OpenChat'in gizlilik ayarlar\u0131 ve y\xf6netici izinleri t\xfcm alt sohbetlere uygulan\u0131r.",
          "square.create.subchat.title": "Alt sohbet olu\u015ftur",
          "square.create.title": "OpenChat olu\u015ftur",
          "square.create.welcome": "Ho\u015f geldiniz mesaj\u0131",
          "square.createchat.error.no.auth.public":
            "Y\xf6netici, alt sohbet olu\u015fturma se\xe7ene\u011fini devre d\u0131\u015f\u0131 b\u0131rakt\u0131.",
          "square.createchat.inputtitle": "Alt sohbet ad\u0131n\u0131 girin",
          "square.createchat.title": "Sohbet olu\u015ftur",
          "square.createchat.type.maximum.option":
            "Maks. kat\u0131l\u0131mc\u0131",
          "square.createchat.type.maximum.option.desc":
            "Sohbete kat\u0131labilecek maksimum \xfcye say\u0131s\u0131n\u0131 ayarlay\u0131n.",
          "square.createchat.type.private": "\xd6zel ",
          "square.createchat.type.private.desc":
            "Bu sohbete yaln\u0131zca davet edilen \xfcyeler kat\u0131labilir.",
          "square.createchat.type.public": "Genel",
          "square.createchat.type.public.desc":
            "Bu sohbete herkes kat\u0131labilir.",
          "square.createchat.type.public.option":
            "T\xfcm \xfcyelere a\xe7\u0131k",
          "square.createopenchat.button.setagerestriction":
            "Ya\u015f s\u0131n\u0131rlamas\u0131 ayarla",
          "square.createopenchat.desc.onlyusersoverlegalageallowed":
            "Bu OpenChat'e yaln\u0131zca en az 18 ya\u015f\u0131nda olan kullan\u0131c\u0131lar\u0131n kat\u0131lmas\u0131na izin verin.",
          "square.createopenchat.desc.search":
            "OpenChat'teki baz\u0131 mesajlar ba\u015fka ki\u015filer taraf\u0131ndan \xf6nizlenebilir ve aranabilir. Bu ayar\u0131, ilgili OpenChat olu\u015fturulduktan sonra OpenChat ayarlar\u0131ndan de\u011fi\u015ftirebilirsiniz.",
          "square.createopenchat.placeholder.enterdescription":
            "A\xe7\u0131klama girin",
          "square.createsubchat.toggle.notifyinopenchat":
            "Yeni alt sohbet a\xe7\u0131ld\u0131\u011f\u0131nda OpenChat'e bildir",
          "square.default.name.title": "OpenChat ad\u0131",
          "square.error.cannot.forward.contact":
            "OpenChat'lere ki\u015fi bilgisi g\xf6nderemezsiniz.",
          "square.error.fail.upload.profile.image":
            "Profiliniz d\xfczenlenemedi. ",
          "square.error.not.normal":
            "Bilinmeyen bir hata olu\u015ftu.\nL\xfctfen daha sonra tekrar deneyin.",
          "square.error.noti.kickout": "OpenChat'ten engelllendiniz.",
          "square.error.popup.cannot.invite":
            "Square y\xf6neticisi bu \xf6zelli\u011fi devre d\u0131\u015f\u0131 b\u0131rakt\u0131.",
          "square.error.popup.cannot.join":
            "\u015eu anda bu OpenChat'e kat\u0131l\u0131nam\u0131yor. Daha sonra tekrar deneyin.",
          "square.error.popup.deletedgroup":
            "Bu OpenChat art\u0131k mevcut de\u011fil.",
          "square.error.popup.network":
            "Ba\u011flan\u0131lam\u0131yor.\nL\xfctfen ba\u011flant\u0131n\u0131z\u0131 kontrol edin ve tekrar deneyin.",
          "square.error.popup.noauth":
            'Bu b\xf6l\xfcme eri\u015fim izniniz yok.\n"OpenChat ayarlar\u0131"na y\xf6nlendirileceksiniz.',
          "square.error.popup.noauth.alert":
            "Bu b\xf6l\xfcme eri\u015fim izniniz yok. ",
          "square.error.popup.usingbyotheruser":
            "Bu ayar \u015fu anda ba\u015fka bir kullan\u0131c\u0131 taraf\u0131ndan d\xfczenleniyor.\nL\xfctfen daha sonra tekrar deneyin.",
          "square.filtering.keyword.error.alert":
            "Bu s\xf6zc\xfck kullan\u0131lamaz.",
          "square.fraudpopup.button.cancel": "\u0130ptal",
          "square.fraudpopup.button.continue": "Devam",
          "square.fraudpopup.button.learnmore": "Daha fazla bilgi",
          "square.fraudpopup.desc.investmentscams":
            "\xdcnl\xfc ki\u015filerin kimli\u011fini kullanarak yap\u0131lan doland\u0131r\u0131c\u0131l\u0131k ama\xe7l\u0131 sosyal medya reklamlar\u0131yla yat\u0131r\u0131m doland\u0131r\u0131c\u0131l\u0131\u011f\u0131 vakalar\u0131 \xe7ok yayg\u0131nla\u015ft\u0131. Mesaj al\u0131p g\xf6nderirken l\xfctfen dikkatli olun ve \u015f\xfcpheli etkinlikleri \u015fikayet edin.",
          "square.fraudpopup.title.investmentscams":
            "Yat\u0131r\u0131m doland\u0131r\u0131c\u0131l\u0131\u011f\u0131 \xe7ok yayg\u0131nla\u015ft\u0131",
          "square.friendslist.join.requests":
            "Kat\u0131lma isteklerini y\xf6net",
          "square.friendstab.newrequest":
            "Bir OpenChat'e kat\u0131lma istekleri",
          "square.friendstab.request.count": "Kat\u0131lma istekleri ",
          "square.friendstab.request.counts.2.other":
            "Kat\u0131lma iste\u011fi %n",
          "square.friendstab.request.counts.2.plurals.other":
            "Kat\u0131lma iste\u011fi %n",
          "square.friendstab.request.counts.other":
            "Kat\u0131lma iste\u011fi %n ",
          "square.friendstab.request.counts.plurals.other":
            "Kat\u0131lma iste\u011fi %n",
          "square.group.create.change.image":
            "Foto\u011fraf\u0131 de\u011fi\u015ftir",
          "square.group.name": "OpenChat",
          "square.group.settings.basic": "Temel OpenChat ayarlar\u0131",
          "square.group.settings.change.groupname": "OpenChat ad\u0131",
          "square.group.settings.change.myname": "G\xf6r\xfcnen ad",
          "square.group.settings.delete.alert":
            "Bir OpenChat silindi\u011finde sohbet ge\xe7mi\u015fi dahil t\xfcm OpenChat verileri silinir. Bu OpenChat'i silmek istedi\u011finizden emin misiniz?",
          "square.group.settings.editmember.kickout": "\xdcye kald\u0131r",
          "square.group.settings.editmember.kickout.alert.done":
            "\xdcye kald\u0131r\u0131ld\u0131",
          "square.group.settings.group.profile":
            "OpenChat profilini d\xfczenle",
          "square.group.settings.groupset": "OpenChat ayarlar\u0131",
          "square.group.settings.leave": "OpenChat'ten ayr\u0131l",
          "square.group.settings.leave.alert":
            "Bir OpenChat'ten \xe7\u0131kt\u0131\u011f\u0131n\u0131zda, sohbet ge\xe7mi\u015finiz dahil OpenChat ile ilgili t\xfcm veriler silinir. Bu OpenChat'ten \xe7\u0131kmak istiyor musunuz?",
          "square.group.settings.leave.error.alert.admin":
            "L\xfctfen OpenChat'ten ayr\u0131lmadan \xf6nce y\xf6netici\nizinlerinizi ba\u015fka bir \xfcyeye devredin.",
          "square.group.settings.manageauth.additional": "\u0130zinleri ayarla",
          "square.group.settings.manageauth.additionalchatfeatures":
            "Ek sohbet \xf6zellikleri",
          "square.group.settings.manageauth.additionalchatfeatures.option.createpolls":
            "Anket olu\u015ftur",
          "square.group.settings.manageauth.additionalchatfeatures.option.deletepolls":
            "Anketleri sil",
          "square.group.settings.manageauth.chatapp":
            "Ek sohbet \xf6zellikleri",
          "square.group.settings.manageauth.setmaxparticipants":
            "Maks. sohbet kat\u0131l\u0131mc\u0131s\u0131 say\u0131s\u0131n\u0131 de\u011fi\u015ftir",
          "square.group.settings.managegroup": "OpenChat'i y\xf6net",
          "square.group.settings.managegroup.allowtojoin": "Onay gerekli",
          "square.group.settings.managegroup.allowtojoin.desc":
            "OpenChat'e kat\u0131lmak i\xe7in y\xf6netici onay\u0131 gereklidir.",
          "square.group.settings.managegroup.allowtosearch":
            "Aramada OpenChat'i g\xf6ster",
          "square.group.settings.managegroup.allowtosearch.desc":
            "Di\u011fer ki\u015filer, anahtar kelimeye g\xf6re bu OpenChat i\xe7in arama yapabilir.",
          "square.group.settings.managegroup.autotag":
            "Etiketleri otomatik \xf6ner ",
          "square.group.settings.managegroup.autotag.decs":
            "G\xf6nderi yazarken etiketler otomatik olarak \xf6nerilir.",
          "square.group.settings.managegroup.deletegroup": "OpenChat'i sil",
          "square.group.settings.managegroup.invite": "Yeni \xfcye davet et",
          "square.group.settings.managegroup.invite.desc":
            "Devre d\u0131\u015f\u0131 b\u0131rak\u0131ld\u0131\u011f\u0131nda, ba\u015fka \xfcyeler davet edilemez ve daha \xf6nce payla\u015f\u0131lan ba\u011flant\u0131lar ve QR kodlar\u0131 \xe7al\u0131\u015fmaz.",
          "square.group.settings.managegroup.updateurl":
            "Davet ba\u011flant\u0131s\u0131n\u0131 g\xfcncelle",
          "square.group.settings.managegroup.updateurl.desc":
            "G\xfcncelledikten sonra mevcut davet ba\u011flant\u0131s\u0131n\u0131 kullanamazs\u0131n\u0131z.\nDevam edilsin mi?",
          "square.group.settings.managemember": "\xdcyeleri y\xf6net",
          "square.group.settings.managemembers.alert.cannot.select":
            "En fazla %n ki\u015fi se\xe7ebilirsiniz.",
          "square.group.settings.managemembers.allowrejoin":
            "Engeli kald\u0131r",
          "square.group.settings.managemembers.blcoktojoin.alert":
            "Bu \xfcyenin OpenChat'e tekrar kat\u0131lmas\u0131na izin verilsin mi?",
          "square.group.settings.managemembers.blocktojoin":
            "Yasaklanan \xfcyeler",
          "square.group.settings.managemembers.blocktojoin.alert":
            "Bu kullan\u0131c\u0131n\u0131n engelini kald\u0131r\u0131rsan\u0131z OpenChat'e tekrar kat\u0131labilir. Devam edilsin mi?",
          "square.group.settings.managemembers.manageadmin":
            "Y\xf6neticileri y\xf6net",
          "square.group.settings.managemembers.manageadmin.added": "Eklendi. ",
          "square.group.settings.managemembers.manageadmin.alert.deletecoadmin":
            "Bu \xfcye i\xe7in Y\xf6netici Yard\u0131mc\u0131s\u0131 izinleri iptal edilsin mi?",
          "square.group.settings.managemembers.manageadmin.cancelcoadmin":
            "Kald\u0131r",
          "square.group.settings.managemembers.manageadmin.coadmin":
            "Y\xf6netici yard\u0131mc\u0131lar\u0131 ",
          "square.group.settings.managemembers.manageadmin.handoveradmin":
            "Y\xf6netici izinlerini devret",
          "square.group.settings.managemembers.manageadmin.handoveradmin.alert":
            "Y\xf6netici izinleri bu \xfcyeye devredilsin mi?\nBu durumda otomatik olarak y\xf6netici yard\u0131mc\u0131s\u0131 olursunuz. ",
          "square.group.settings.managemembers.manageadmin.handoveradmin.desc":
            'Square\u2019i birlikte y\xf6netmek istedi\u011finiz \xfcyelere y\xf6netici yard\u0131mc\u0131s\u0131 izinleri verin.\nY\xf6netici yard\u0131mc\u0131s\u0131 rollerini "\u0130zinleri y\xf6net" b\xf6l\xfcm\xfcnden ayarlayabilirsiniz. ',
          "square.group.settings.managemembers.manageadmin.handoveradmin.description":
            "Y\xf6netici izinlerinizi bir Y\xf6netici Yard\u0131mc\u0131s\u0131na aktar\u0131rsan\u0131z otomatik olarak Y\xf6netici Yard\u0131mc\u0131s\u0131 olursunuz.",
          "square.group.settings.managemembers.manageadmin.makecoadmin":
            "Y\xf6netici yard\u0131mc\u0131s\u0131 izinleri ver",
          "square.group.settings.managemembers.manageadmin.makecoadmin.desc":
            'OpenChat\'i birlikte y\xf6netmek istedi\u011finiz \xfcyelere yard\u0131mc\u0131 y\xf6netici izinleri verin.\nYard\u0131mc\u0131 y\xf6netici rollerini "\u0130zinleri y\xf6net" b\xf6l\xfcm\xfcnden ayarlayabilirsiniz.',
          "square.group.settings.managemembers.manageadmin.makecoadmin.no.member":
            "Mevcut \xfcye yok.",
          "square.group.settings.managemembers.manageadmin.no.coadmin":
            "Hen\xfcz hi\xe7 y\xf6netici yard\u0131mc\u0131s\u0131 eklemediniz.",
          "square.group.settings.managemembers.manageadmin.select": "Se\xe7",
          "square.group.settings.managemembers.manageauth":
            "\u0130zinleri y\xf6net ",
          "square.group.settings.managemembers.manageauth.acceptrequest":
            "Kat\u0131lma isteklerini onayla",
          "square.group.settings.managemembers.manageauth.admincoadmin":
            "Y\xf6netici ve y\xf6netici yard\u0131mc\u0131lar\u0131",
          "square.group.settings.managemembers.manageauth.adminonly":
            "Y\xf6netici",
          "square.group.settings.managemembers.manageauth.all":
            "T\xfcm \xfcyeler ",
          "square.group.settings.managemembers.manageauth.createpost":
            "G\xf6nderi yaz ",
          "square.group.settings.managemembers.manageauth.createpublicchat":
            "Alt sohbet olu\u015ftur",
          "square.group.settings.managemembers.manageauth.deletecontents":
            "Sohbet ve g\xf6nderileri sil",
          "square.group.settings.managemembers.manageauth.description":
            "OpenChat'te \xe7e\u015fitli de\u011fi\u015fiklikler yapabilecek ki\u015filer i\xe7in izinleri ayarlay\u0131n.",
          "square.group.settings.managemembers.manageauth.invitemembers":
            "\xdcye davet et ",
          "square.group.settings.managemembers.manageauth.kickout":
            "\xdcye kald\u0131r",
          "square.group.settings.managemembers.managepost": "Not yazma",
          "square.group.settings.managemembers.request":
            "Kat\u0131lma istekleri",
          "square.group.settings.managemembers.request.accept": "Onayla",
          "square.group.settings.managemembers.request.accept.alert.done":
            "\u0130stek onayland\u0131.",
          "square.group.settings.managemembers.request.accept.alert.notall.done":
            "\u0130stek(ler) onayland\u0131. L\xfctfen baz\u0131 isteklerin y\xf6netici veya yard\u0131mc\u0131 y\xf6netici taraf\u0131ndan zaten i\u015fleme al\u0131nm\u0131\u015f ya da sohbetin kapasitesi doluysa reddedilmi\u015f olabilece\u011fini unutmay\u0131n.",
          "square.group.settings.managemembers.request.acceptall":
            "T\xfcm\xfcn\xfc onayla ",
          "square.group.settings.managemembers.request.acceptall.alert":
            "T\xfcm kat\u0131lma istekleri onaylans\u0131n m\u0131?",
          "square.group.settings.managemembers.request.delete.alert":
            "Bu kat\u0131lma iste\u011fi silinsin mi?",
          "square.group.settings.managemembers.request.delete.alert.done":
            "\u0130stek silindi.",
          "square.group.settings.managemembers.request.delete.alert.notall.done":
            "\u0130stek(ler) silindi.\n(Baz\u0131 istekler daha \xf6nce ba\u015fka bir y\xf6netici taraf\u0131ndan ele al\u0131nd\u0131.)",
          "square.group.settings.managemembers.request.noti.tooltip":
            "Birisi kat\u0131lma iste\u011fi g\xf6nderdi\u011finde bildirim al\u0131p almayaca\u011f\u0131n\u0131z\u0131 se\xe7in. ",
          "square.group.settings.managemembers.request.select100":
            "En son %1 se\xe7",
          "square.group.settings.managemembers.request.selectall":
            "T\xfcm\xfcn\xfc se\xe7",
          "square.group.settings.managemembers.request.zero":
            "Kat\u0131lma iste\u011fi yok.",
          "square.group.settings.memberlist":
            "\xdcyeleri g\xf6r\xfcnt\xfcle veya davet et",
          "square.group.settings.myprofile.title": "Profilim",
          "square.group.settings.nickname": "Takma Ad",
          "square.group.settings.noti.post": "G\xf6nderi bildirimleri",
          "square.group.settings.noti.post.dec":
            "G\xf6nderi bildirimleri alabilirsiniz.",
          "square.group.settings.policy":
            "OpenChat\nKullan\u0131m Ko\u015fullar\u0131 ve \u015eartlar\u0131",
          "square.group.settings.profile.title": "",
          "square.group.settings.recieve.chat": "Sohbet davetleri al",
          "square.group.settings.recieve.friendsrequest":
            "Arkada\u015fl\u0131k istekleri al ",
          "square.group.settings.report": "OpenChat'i \u015fikayet et",
          "square.group.settings.reportpage.agreeandsend":
            "Kabul et ve G\xf6nder",
          "square.group.settings.reportpage.agreeandsend.thpdpa":
            "Tan\u0131 ve g\xf6nder",
          "square.group.settings.reportpage.desc":
            "Bu i\xe7eri\u011fi neden \u015fikayet etti\u011finizi se\xe7in.",
          "square.group.settings.reportpage.impersonation.inquirypopup":
            "L\xfctfen soru formumuza gidip istenen \xf6\u011feleri doldurarak bu kimli\u011fe b\xfcr\xfcnme vakas\u0131n\u0131 ara\u015ft\u0131rmam\u0131za yard\u0131mc\u0131 olmak i\xe7in bize ayr\u0131nt\u0131l\u0131 bilgiler verin.",
          "square.group.settings.reportpage.impersonation.inquirypopup.decline":
            "Atla",
          "square.group.settings.reportpage.impersonation.inquirypopup.proceed":
            "Devam et",
          "square.group.settings.reportpage.reason1": "Reklam",
          "square.group.settings.reportpage.reason2": "Cinsel taciz",
          "square.group.settings.reportpage.reason3": "Taciz",
          "square.group.settings.reportpage.reason4": "Di\u011fer",
          "square.group.settings.reportpage.reason5":
            "Konu d\u0131\u015f\u0131 i\xe7erik",
          "square.group.settings.reportpage.reason6":
            "Kimli\u011fe b\xfcr\xfcnme",
          "square.group.settings.reportpage.reason7":
            "Doland\u0131r\u0131c\u0131l\u0131k",
          "square.group.settings.reportpage.report.btn": "\u015eikayet et",
          "square.group.settings.reportpage.reportdone":
            "\u015eikayet G\xf6nderildi!",
          "square.grouppopup.alert.alreadyjoin":
            "Bu OpenChat'e zaten \xfcyesiniz. Ekran\u0131 kapat\u0131p tekrar girmeyi deneyin.",
          "square.grouppopup.alert.blocked":
            "Bu OpenChat'e kat\u0131lamazs\u0131n\u0131z. L\xfctfen daha sonra tekrar deneyin.",
          "square.grouppopup.alert.join.ing":
            "Y\xf6netici onay\u0131 bekleniyor.\nY\xf6netici iste\u011finizi onaylad\u0131\u011f\u0131nda OpenChat'e ekleneceksiniz.",
          "square.grouppopup.alert.requestdone":
            "Kat\u0131lma iste\u011fi g\xf6nderdiniz. Y\xf6netici iste\u011finizi onaylad\u0131\u011f\u0131nda OpenChat'e ekleneceksiniz.",
          "square.grouppopup.button.join.ing": "Bekleniyor...",
          "square.grouppopup.chat.count.plurals.other": "%1 sohbet",
          "square.grouppopup.invite.tooltip":
            "LINE \xfczerinden ya da davet ba\u011flant\u0131s\u0131 veya QR kodu payla\u015farak arkada\u015flar\u0131n\u0131z\u0131 davet edin.",
          "square.grouppopup.invitefriend": "Arkada\u015flar\u0131 davet et",
          "square.grouppopup.member.count.plurals.other": "%1 \xfcye",
          "square.grouppopup.post.count.plurals.other": "%1 not",
          "square.grouppopup.qrcode": "QR Kodu G\xf6nder",
          "square.grouppopup.qrcode.desc":
            "Birisine QR Kodunu g\xf6sterin veya g\xf6nderiyle payla\u015f\u0131n.",
          "square.grouppopup.qrcode.save": "QR kod kaydt",
          "square.grouppopup.qrcode.saved": "QR kodu kaydedildi. ",
          "square.grouppopup.sendrequest": "Kat\u0131lma iste\u011fi",
          "square.grouppopup.url": "URL G\xf6nder",
          "square.grouppopup.url.app": "Ba\u015fka uygulamayla payla\u015f",
          "square.grouppopup.url.line": "LINE\u2019da Payla\u015f",
          "square.home.addfavorite": "Favorilere Ekle",
          "square.home.cancelfavorite": "Favorilerden Kald\u0131r",
          "square.home.chat.section.invited": "Davet edilen sohbetler",
          "square.home.favorite.tooltip":
            "OpenChat'i Arkada\u015flar b\xf6l\xfcm\xfcnde Favorilerinize\neklemek i\xe7in bu d\xfc\u011fmeye t\u0131klay\u0131n.",
          "square.home.invite.copy.link": "B\u011fln kopyala",
          "square.home.invite.save.qr": "QR kod kaydt",
          "square.home.invite.share.link": "B\u011flnt payla\u015f",
          "square.home.invite.share.qr": "QR kod payl\u015f",
          "square.home.menu.photo": "Foto\u011fraf",
          "square.home.menu.write": "Yaz",
          "square.home.nickname": "%1",
          "square.home.setting": "Ayarlar",
          "square.home.tab.chat": "Sohbetler",
          "square.home.tab.post": "G\xf6nderiler",
          "square.home.toast.addfavorite": "Favorilere eklendi.",
          "square.home.toast.cancelfavorite":
            "Favorilerden Kald\u0131r\u0131ld\u0131.",
          "square.invite.complete.other":
            "%n \xfcyeye davet mesaj\u0131 g\xf6nderdiniz.",
          "square.invite.complete.plurals.other":
            "%n \xfcyeye davet mesaj\u0131 g\xf6nderdiniz.",
          "square.invite.friend": "Arkada\u015flar\u0131 davet et",
          "square.invite.urlscheme.chatroom.chatname":
            '"%1" sohbetine davet et',
          "square.invitemember.confirm.donotshowagain": "Bir daha g\xf6sterme",
          "square.invitemember.confirm.invite":
            "Davet edilen kullan\u0131c\u0131lar \xf6nceki mesajlar\u0131 g\xf6rebilirler.",
          "square.invitemember.desc":
            "Yaln\u0131zca square \xfcyelerini sohbete davet edebilirsiniz. Sohbet etmek i\xe7in \xf6ncelikle arkada\u015flar\u0131n\u0131z\u0131 square\u2019e davet edin.",
          "square.invitemember.desc.urlscheme.chatroom":
            'Hen\xfcz OpenChat\'e kat\u0131lmam\u0131\u015f kullan\u0131c\u0131lar\u0131 davet etmek i\xe7in "Sohbete davet et" d\xfc\u011fmesine t\u0131klay\u0131n.',
          "square.invitemember.invitetogroup": "OpenChat'e davet et",
          "square.invitemember.invitetogroup.urlscheme.chatroom":
            "Sohbete davet et",
          "square.invitemember.memberlist.title": '"%1" \xfcye %n',
          "square.invitemember.title": "Davet edilecekleri se\xe7",
          "square.invitetoopenchat.button.share": "Payla\u015f",
          "square.invitetoopenchat.desc.sharelinktoinvitemembers":
            "Arkada\u015flar\u0131n\u0131z\u0131 davet etmek i\xe7in OpenChat ba\u011flant\u0131s\u0131n\u0131 payla\u015f\u0131n.",
          "square.join.precaution":
            "\"%1\" adl\u0131 OpenChat'e ho\u015f geldiniz! L\xfctfen OpenChat'in hizmet politikas\u0131n\u0131 ihlal eden mesajlar g\xf6ndermekten ka\xe7\u0131n\u0131n, aksi halde kullan\u0131m\u0131n\u0131z s\u0131n\u0131rlanabilir.",
          "square.join.question.guide": "5-50 karakter girin",
          "square.joincode.error":
            "Yanl\u0131\u015f kod. L\xfctfen tekrar deneyin.",
          "square.joincode.guide":
            "Y\xf6netici taraf\u0131ndan belirlenen kodu girerek sohbete kat\u0131l\u0131n.",
          "square.joincode.guide.description":
            "OpenChat'e kat\u0131lmak i\xe7in gereken 4-8 karakterli alfasay\u0131sal kodu girin.",
          "square.joincode.input.guide": "Kodu girin",
          "square.joincode.title": "Sohbet kodunu girin",
          "square.joinscreen.placeholder.enteranswerhere": "Yan\u0131t girin",
          "square.keyboardmenu.button.qna": "S/C mesaj\u0131",
          "square.kickout.alert.done":
            'Bu \xfcye OpenChat\'ten engellendi. OpenChat ayarlar\u0131nda "\xdcyeleri y\xf6net" > "Engellenen \xfcyeler" b\xf6l\xfcm\xfcne giderek \xfcyelerin engelini kald\u0131rabilirsiniz.',
          "square.kickout.blockoption": "OpenChat'te yasakla",
          "square.kickout.error.alert.admin":
            "Y\xf6neticiyi veya y\xf6netici yard\u0131mc\u0131s\u0131n\u0131 engelleyemezsiniz.",
          "square.kickout.reason1": "Reklam veya spam",
          "square.kickout.reason2": "Zararl\u0131 veya m\xfcstehcen ifade",
          "square.kickout.reason3": "Di\u011fer kural ihlali",
          "square.leave.last.person.alert": "",
          "square.leftuser.kickout.btn": "Engelle",
          "square.main.create.block.alert":
            "Beta testi s\xfcresince bir square olu\u015fturamazs\u0131n\u0131z. ",
          "square.main.create.guide":
            "Kendi OpenChat'inizi olu\u015fturun ve\nyeni ki\u015filerle tan\u0131\u015f\u0131n.",
          "square.main.mylist": "OpenChat'leriniz",
          "square.main.mylist.sortbyname": "Ada g\xf6re",
          "square.main.mylist.sortbyupdate": "Son g\xfcncelleme",
          "square.main.mylist.sortbyvisit": "Son ziyaret edilme",
          "square.main.mylist.viewall": "T\xfcm\xfcne bak",
          "square.main.mylist.zero":
            "\u0130lgi alanlar\u0131n\u0131z\u0131 payla\u015fan yeni ki\u015filerle sohbet etmek i\xe7in bir OpenChat\u2019e kat\u0131l\u0131n veya kendi OpenChat\u2019inizi olu\u015fturun!",
          "square.main.search.block.alert":
            "Beta testi s\xfcresince arama \xf6zellikleri kullan\u0131lamaz. ",
          "square.main.search.default.msg":
            "OpenChat ad\u0131, A\xe7\u0131klama",
          "square.managemembers.button.seewholeft":
            "En son ayr\u0131lanlar\u0131 g\xf6r",
          "square.managemembers.desc.seewholeft":
            "Son 24 saat i\xe7inde OpenChat'ten ayr\u0131lan ki\u015fileri g\xf6r\xfcn.",
          "square.manageopenchat.desc.setjoincode":
            "Sohbete kat\u0131lmak i\xe7in gereken kodu girin.",
          "square.members": "\xdcyeler",
          "square.members.addmembers": "\xdcye davet et",
          "square.membershipsystemmessages.button.userisbannedfromthechat":
            "Bir \xfcye engellendi",
          "square.membershipsystemmessages.button.userjoinsthechat":
            "Bir \xfcye sohbete kat\u0131ld\u0131\u011f\u0131nda",
          "square.membershipsystemmessages.button.userleavesthechat":
            "Bir \xfcye ayr\u0131ld\u0131",
          "square.membershipsystemmessages.desc.managesystemmessages":
            "Sohbete kat\u0131lan, sohbetten ayr\u0131lan ya da sohbette engellenen bir \xfcye oldu\u011funda OpenChat'te g\xf6sterilen sistem mesajlar\u0131n\u0131 g\xf6sterir veya gizler",
          "square.menu.invite": "Davet et",
          "square.mythreads.button.seemessages.other":
            "<![CDATA[\xa0<b><font color='%1'>%n</font></b>\xa0mesaj\u0131 g\xf6r]]>",
          "square.noti.admin":
            'Art\u0131k "%1" OpenChat\'inin y\xf6neticisisiniz.',
          "square.noti.coadmin":
            'Art\u0131k "%1" OpenChat\'inin yard\u0131mc\u0131 y\xf6neticisisiniz.',
          "square.noti.delete.chat":
            '"%1" sohbeti bir y\xf6netici taraf\u0131ndan silindi.',
          "square.noti.deleted.coadmin":
            'Art\u0131k "%1" OpenChat\'inin yard\u0131mc\u0131 y\xf6neticisi de\u011filsiniz.',
          "square.noti.deleted.gorup": '"%1" OpenChat\'i silindi.',
          "square.noti.join.done":
            '"%1" OpenChat\'ine kat\u0131ld\u0131n\u0131z.',
          "square.noti.joinrequest":
            '%1, "%2" OpenChat\'ine kat\u0131lma iste\u011finde bulundu.',
          "square.noti.kickout": '"%1" OpenChat\'ten engellendiniz.',
          "square.notification.desc.userjoinedopenchat":
            '"%1" adl\u0131 OpenChat\'e yeni bir \xfcye kat\u0131ld\u0131.',
          "square.notification.setting":
            "OpenChat notlar\u0131 bildirimleri\nMasa\xfcst\xfcnde bildirim almak i\xe7in mobil cihaz\u0131n\u0131zda OpenChat notlar\u0131 bildirimlerini etkinle\u015ftirmeniz gerekir.",
          "square.openchat.desc.adminaddedbottochat":
            "[0], [1] adl\u0131 ki\u015fiyi sohbete ekledi.",
          "square.openchat.desc.adminremovedbotfromchat":
            "[0], [1] adl\u0131 ki\u015fiyi sohbetten \xe7\u0131kard\u0131.",
          "square.openchat.desc.messageremovedforsharinginappropriatecontent":
            "%1 adl\u0131 ki\u015finin mesaj\u0131, OpenChat'in hizmet politikas\u0131n\u0131 ihlal etti\u011finden \u015f\xfcphelenildi\u011fi i\xe7in kald\u0131r\u0131ld\u0131.",
          "square.openchat.desc.userbannedbysomeoneelse":
            "%2, %1 taraf\u0131ndan OpenChat'ten engellendi.",
          "square.openchat.popup.dontshow":
            "Bu OpenChat'te bu mesaj\u0131 bir daha g\xf6sterme",
          "square.openchat.popupbutton.close": "Kapat",
          "square.openchat.popupbutton.deleteforall": "Sohbetteki herkesten",
          "square.openchat.popupbutton.deleteforyou": "Sadece benden",
          "square.openchat.popupbutton.ok": "Tamam",
          "square.openchat.popupbutton.seemore": "Daha fazla bilgi",
          "square.openchat.popupdesc.deletemessagesfor":
            "Se\xe7ilen mesajlar\u0131n kimden silinece\u011fini se\xe7in.\nFarenizi s\xfcr\xfckleyerek silinmesi i\xe7in en fazla 50 mesaj se\xe7ebilirsiniz.",
          "square.openchat.popupdesc.unreadmessagecountmarkedwithnicon":
            "Bu sohbetteki yeni mesajlar sohbet listesinde N simgesiyle g\xf6sterilir.",
          "square.openchat.popupdesc.unsendmessage":
            "Bu mesaj, kulland\u0131klar\u0131 LINE s\xfcr\xfcm\xfcne ba\u011fl\u0131 olarak baz\u0131 \xfcyelerin sohbetlerinden kald\u0131r\u0131lamayabilir. G\xf6ndermeyi geri almak istiyor musunuz?",
          "square.openchat.popuptitle.deletemessages": "Mesajlar\u0131 sil",
          "square.openchatannouncements.title.announcements": "Duyuru",
          "square.openchatcharacterprofiles.button.cancel": "\u0130ptal",
          "square.openchatcharacterprofiles.button.save": "Kaydet",
          "square.openchatcharacterprofiles.title.selectcharacter":
            "Karakter se\xe7in",
          "square.openchatentry.button.confirm": "TAMAM",
          "square.openchatentry.desc.dontsendrudemessages":
            "<![CDATA[<font color=\\'#07B53B\\'>Kaba mesajlar</font> g\xf6ndermeyin ve <font color=\\'#07B53B\\'>incitici</font> davran\u0131\u015flarda bulunmay\u0131n.]]>",
          "square.openchatentry.desc.followopenchatrules":
            "<![CDATA[OpenChat'i keyifle kullanmaya devam etmek i\xe7in bu <font color=\\'#07B53B\\'>basit kurallara</font> uyun.]]>",
          "square.openchatentry.desc.treatmemberswithrespect":
            "<![CDATA[OpenChat, herkesin bulu\u015ftu\u011fu bir aland\u0131r. L\xfctfen t\xfcm \xfcyelere <font color=\\'#07B53B\\'>sayg\u0131l\u0131 davran\u0131n</font>.]]>",
          "square.openchatentry.header.dontsendrudemessages":
            "2. Nazik davran\u0131n",
          "square.openchatentry.header.followopenchatrules": "3. E\u011flenin",
          "square.openchatentry.header.treatmemberswithrespect":
            "1. S-A-Y-G-I!",
          "square.openchatentry.title.openchatuserules":
            "OpenChat kullan\u0131m\u0131yla ilgili \xf6nemli konular",
          "square.openchatinvite.desc.userinvitedtojoinchat":
            '"%1" sohbetine kat\u0131lmak \xfczere davet edildiniz.',
          "square.openchatinvite.desc.userinvitedtojoinsquare":
            '"%1" sohbetine kat\u0131lmak \xfczere davet edildiniz.',
          "square.openchatlist.desc.viewchatandaddtofavorites": "",
          "square.openchatlist.header.yourchats": "Sohbetleriniz %1",
          "square.openchatliveinvite.popupdesc.usefeatureonmobileapp":
            "Bu \xf6zellik yaln\u0131zca LINE'\u0131n mobil s\xfcr\xfcm\xfcnde kullan\u0131labilir.",
          "square.openchatmember.button.default": "Varsay\u0131lan",
          "square.openchatmember.button.oldjoin": "Eskiden yeniye",
          "square.openchatmember.button.recentjoin": "Yeniden eskiye",
          "square.openchatmember.desc.days.other": "%d g\xfcn \xf6nce",
          "square.openchatmember.desc.hours.other": "%d saat \xf6nce",
          "square.openchatmember.desc.justnow": "Az \xf6nce",
          "square.openchatmember.desc.lastvisited": "Son ziyaret",
          "square.openchatmember.desc.minutes.other": "%d dakika \xf6nce",
          "square.openchatmembers.desc.hundredthousandmembersth": "%1",
          "square.openchatmembers.desc.membersen": "%1",
          "square.openchatmembers.desc.memberskoja": "%1",
          "square.openchatmembers.desc.membersth": "%1",
          "square.openchatmembers.desc.tenthousandmemberskoja": "%1",
          "square.openchatmembers.desc.tenthousandmembersth": "%1",
          "square.openchatmembers.desc.thousandmembersen": "%1 bin",
          "square.openchatmembers.desc.thousandmembersth": "%1",
          "square.openchatmenu.button.hidemessagecount":
            "Mesaj say\u0131s\u0131n\u0131 gizle\nOpenChat'lerdeki yeni mesajlar N simgesiyle g\xf6sterilecek.",
          "square.openchatmenu.button.showmessagecount":
            "Mesaj say\u0131s\u0131n\u0131 g\xf6ster",
          "square.openchatmenu.desc.joindate":
            "Kat\u0131lma tarihi: dd.mm.yyyy",
          "square.openchatmenu.desc.messagereplies":
            "\u0130nsanlar mesajlar\u0131n\u0131za yan\u0131t verdi\u011finde bildirim al\u0131n.",
          "square.openchatmenu.desc.onlyadmin":
            "Her \xfcyenin OpenChat'e kat\u0131ld\u0131\u011f\u0131 veya OpenChat'i en son ziyaret etti\u011fi zaman\u0131 yaln\u0131zca y\xf6neticiler ve y\xf6netici yard\u0131mc\u0131lar\u0131 g\xf6rebilir.",
          "square.openchatmenu.desc.visitdays.other":
            "Son ziyaret: %1 g\xfcn \xf6nce",
          "square.openchatmenu.desc.visitmonths.other":
            "Son ziyaret: %1 ay \xf6nce",
          "square.openchatmenu.desc.visittoday": "Son ziyaret: Bug\xfcn",
          "square.openchatmenu.desc.visityester": "Son ziyaret: D\xfcn",
          "square.openchatmenu.toggle.messagereplies":
            "Mesaj yan\u0131tlar\u0131",
          "square.openchatmessage.desc.noreactions": "Hen\xfcz tepki yok.",
          "square.openchatmessagefield.desc.readonlymode":
            "Sohbet salt okunur olarak ayarland\u0131.",
          "square.openchatnotes.desc.subchatmemberscanseenotes":
            "T\xfcm alt sohbetlerin al\u0131c\u0131lar\u0131 da OpenChat'te payla\u015f\u0131lan notlar\u0131 g\xf6rebilir.",
          "square.openchatnotificationsettings.header.openchatnotifications":
            "OpenChat",
          "square.openchatphoneverification.popupdesc.verifyphonenumberonmobileapp":
            "Herkes i\xe7in daha g\xfcvenli bir hizmet sa\u011flamak \xfczere OpenChat'i kullan\u0131rken telefon numaran\u0131z\u0131 do\u011frulay\u0131n. Do\u011frulamay\u0131 uygulaman\u0131n mobil s\xfcr\xfcm\xfcnde yapabilirsiniz.",
          "square.openchatphoneverification.popuptitle.verificationrequired":
            "Do\u011frulama gerekli",
          "square.openchatpopup.button.cancel": "\u0130ptal",
          "square.openchatpopup.button.confirm": "Onayla",
          "square.openchatpopup.desc.changesetting":
            "De\u011fi\u015ftirilen ayar OpenChat'e ve di\u011fer alt sohbetlere de uygulanacak. Yine de devam edilsin mi?",
          "square.openchatprivacysettings.desc.agerestrictedchat":
            "Bu OpenChat yaln\u0131zca 18 ya\u015f\u0131n\u0131 doldurmu\u015f kullan\u0131c\u0131lara a\xe7\u0131kt\u0131r.",
          "square.openchatprivacysettings.desc.opentoallages":
            "Bu OpenChat her ya\u015ftan kullan\u0131c\u0131ya a\xe7\u0131kt\u0131r.",
          "square.openchatprivacysettings.popupdesc.entercodetojoinchat":
            "OpenChat'e kat\u0131lmak i\xe7in gereken kodu girin. L\xfctfen OpenChat'in gizlilik ayarlar\u0131n\u0131n kat\u0131lmak i\xe7in kod girmeyi zorunlu k\u0131lacak bi\xe7imde de\u011fi\u015ftirilmesinin, re\u015fit olmayan veya ya\u015f\u0131n\u0131 do\u011frulamam\u0131\u015f olan kullan\u0131c\u0131lar\u0131n kat\u0131lmas\u0131n\u0131 engelleyece\u011fini unutmay\u0131n.",
          "square.openchatprivacysettings.popupdesc.enterquestiontojoinchat":
            "OpenChat'e kat\u0131lmak i\xe7in yan\u0131tlanmas\u0131 gereken soruyu girin. Y\xf6netici veya yard\u0131mc\u0131 y\xf6netici ba\u015fvuran kullan\u0131c\u0131lar\u0131 inceleyip \xfcyeleri onaylayacakt\u0131r. L\xfctfen OpenChat'in gizlilik ayarlar\u0131n\u0131n kat\u0131lmak i\xe7in y\xf6netici onay\u0131n\u0131 zorunlu k\u0131lacak bi\xe7imde de\u011fi\u015ftirilmesinin, re\u015fit olmayan veya ya\u015f\u0131n\u0131 do\u011frulamam\u0131\u015f olan kullan\u0131c\u0131lar\u0131n kat\u0131lmas\u0131n\u0131 engelleyece\u011fini unutmay\u0131n.",
          "square.openchatprofile.button.join": "Yeni profille kat\u0131l",
          "square.openchatprofile.desc.chatsetindifferentcountry":
            "Bu OpenChat farkl\u0131 bir \xfclke veya b\xf6lge ayar\u0131na sahip.",
          "square.openchatprofile.desc.openchatsettoreadonly":
            "Bu OpenChat salt okunur olarak ayarland\u0131",
          "square.openchatprofile.desc.tooltip":
            "Bu OpenChat'e yeni bir takma ad ve profil foto\u011fraf\u0131 kullanarak kat\u0131l\u0131n.",
          "square.openchatsetting.desc.maxpeople":
            "Bu ayar MegaChat'lerde de\u011fi\u015ftirilemez.",
          "square.openchatsetting.desc.mentionnoti":
            "Sohbet bildirimleri kapal\u0131 olsa bile sohbetlerde sizden her bahsedildi\u011finde bildirim al\u0131n.",
          "square.openchatsetting.desc.mentions": "Bahsetmeler",
          "square.openchatsetting.desc.onlyopen":
            "Bu se\xe7enek yaln\u0131zca OpenChat t\xfcm ya\u015f gruplar\u0131na a\xe7\u0131k oldu\u011funda kullan\u0131labilir.",
          "square.openchatsetting.desc.visibility":
            "Mesaj \xf6nizleme ve aramaya izin ver",
          "square.openchatsetting.desc.visibilityallowed": "\u0130zin verildi",
          "square.openchatsetting.desc.visibilitynotallowed":
            "\u0130zin verilmedi",
          "square.openchatsetting.desc.visiforco":
            "Bu sohbetin mesajlar\u0131 aranabilir. Ayn\u0131 ayar OpenChat'te de a\xe7\u0131ksa etkinle\u015ftirilebilir ve yaln\u0131zca y\xf6netici taraf\u0131ndan de\u011fi\u015ftirebilir.",
          "square.openchatsettings.button.allowmessagesfrom":
            "Mesaj g\xf6ndermesine izin verilenler",
          "square.openchatsettings.button.continue": "Devam",
          "square.openchatsettings.button.leavemainchat":
            "Ana sohbetten ayr\u0131l",
          "square.openchatsettings.button.leavesubchat":
            "Alt sohbetten ayr\u0131l",
          "square.openchatsettings.button.managemembershipsystemmessages":
            "\xdcyelik sistem mesajlar\u0131n\u0131 y\xf6net",
          "square.openchatsettings.button.settoreadonlymode":
            "Salt okunur olarak ayarla",
          "square.openchatsettings.desc.addopenchatdescription":
            "OpenChat a\xe7\u0131klamas\u0131n\u0131 ekleyin.",
          "square.openchatsettings.desc.coverphotosetasprofilephotoandbackground":
            "Bu OpenChat'in kapak foto\u011fraf\u0131 ayn\u0131 zamanda profil foto\u011fraf\u0131 ve arka plan olarak ayarlanacak.",
          "square.openchatsettings.desc.getnotifiedwhensomeonejoins":
            "Sohbete yeni biri kat\u0131ld\u0131\u011f\u0131nda bildirim al\u0131n.",
          "square.openchatsettings.desc.readonlymodeformembers":
            "Yaln\u0131zca y\xf6netici veya y\xf6netici yard\u0131mc\u0131lar\u0131n\u0131n sohbete mesaj g\xf6ndermesine izin verin.",
          "square.openchatsettings.header.chatsettings": "",
          "square.openchatsettings.header.details": "",
          "square.openchatsettings.header.editsubchatprofile":
            "Alt sohbet profilini d\xfczenle",
          "square.openchatsettings.header.openchatsettings": "",
          "square.openchatsettings.header.subchatsettings": "",
          "square.openchatsettings.placeholder.enterhashtags":
            "A\xe7\u0131klama girin",
          "square.openchatsettings.popup.searchoff":
            "Art\u0131k hi\xe7bir mesaj aranabilir olmayacak ve sohbet profilinde g\xf6sterilmeyecek. Yine de devam edilsin mi?",
          "square.openchatsettings.popup.searchon":
            "Yeni mesajlar aranabilir olacak ve sohbet profilinde g\xf6sterilecek. Yine de devam edilsin mi?",
          "square.openchatsettings.popupdesc.selectacoadmin":
            "Alt sohbetten ayr\u0131labilmek i\xe7in y\xf6netici yard\u0131mc\u0131s\u0131 olarak en az 1 \xfcye se\xe7melisiniz.",
          "square.openchatsettings.toggle.newmembernotification":
            "Yeni \xfcye bildirimi",
          "square.openchatsettingstatus.desc.readonlymodedisabled":
            "Art\u0131k sohbetteki herkes mesaj g\xf6nderebilir.",
          "square.openchatsettingstatus.desc.readonlymodeenabled":
            "Yaln\u0131zca y\xf6netici mesaj g\xf6nderebilir.",
          "square.openchatsettingv.desc.allmessages": "T\xfcm mesajlar",
          "square.openchatsettingv.desc.dontallow": "\u0130zin verme",
          "square.openchatsettingv.desc.off":
            "Bu se\xe7enek, yaln\u0131zca OpenChat'in aramada g\xf6sterilmesine izin verildi\u011finde kullan\u0131labilir.",
          "square.openchatsettingv.desc.on":
            "OpenChat'ten gelen mesajlar aramada ve OpenChat profilinde g\xf6sterilir.",
          "square.openchatsharelink.desc.sharelinktoinvitefriends":
            "Arkada\u015flar\u0131n\u0131z\u0131 bu OpenChat'e davet edin ve sohbete kat\u0131lmalar\u0131n\u0131 sa\u011flay\u0131n.",
          "square.openchatsharelink.title.sharelink":
            "Bu OpenChat ba\u011flant\u0131s\u0131n\u0131 payla\u015f",
          "square.openchatsubchat.title.subchatname": "Alt sohbet ad\u0131",
          "square.openchatwallpapersettings.desc.wallpaperonlyseenbyyou":
            "Ayarlad\u0131\u011f\u0131n\u0131z arka plan\u0131 yaln\u0131zca siz g\xf6rebilirsiniz.",
          "square.pdpa.policy.agree.btn": "Devam",
          "square.personaloption.alert.error.name":
            "Bu ad zaten kullan\u0131l\u0131yor. L\xfctfen farkl\u0131 bir ad girin.",
          "square.personaloption.chat": "Sohbet davetleri al",
          "square.personaloption.chat.desc":
            "OpenChat \xfcyelerinden davet mesajlar\u0131 al\u0131n.",
          "square.personaloption.copy": "Ba\u011flant\u0131 kopyaland\u0131. ",
          "square.personaloption.friendrequest":
            "Arkada\u015fl\u0131k istekleri al",
          "square.personaloption.friendrequest.desc":
            "\xdcyeler size arkada\u015fl\u0131k istekleri g\xf6nderebilir.",
          "square.personaloption.greetingmessage": "Y\xf6netici i\xe7in mesaj",
          "square.personaloption.greetingmessage.default":
            "L\xfctfen y\xf6netici i\xe7in bir mesaj girin.",
          "square.personaloption.guide": "Takma ad\u0131 girin",
          "square.personaloption.join.btn": "Kat\u0131l",
          "square.personaloption.joincode.btn": "Kodu kullanarak kat\u0131l",
          "square.personaloption.profile.title": "OpenChat profili",
          "square.personaloption.profile.title.tooltip.desc":
            "Bu OpenChat i\xe7in takma ad\u0131n\u0131z\u0131 ve profil foto\u011fraf\u0131n\u0131z\u0131 ayarlay\u0131n. LINE profiliniz g\xf6sterilmeyecek.",
          "square.personaloption.sendrequest.btn":
            "Kat\u0131lma i\u0307ste\u011fi",
          "square.personaloption.welcomemsg": "Ho\u015f geldiniz mesaj\u0131 ",
          "square.policy.agree.btn": "Kabul ediyorum ",
          "square.policy.title":
            "Kullan\u0131m Ko\u015fullar\u0131 ve politikalar",
          "square.policy.viewall":
            "OpenChat Kullan\u0131m Ko\u015fullar\u0131'n\u0131n tamam\u0131n\u0131 okuyun",
          "square.popup.button.grantpermission": "Ayarla",
          "square.popup.button.setaspublic": "Devam",
          "square.post.announcement.announce": "Ayarla",
          "square.post.announcement.delete": "Notu sil",
          "square.post.announcement.delete.desc":
            "Not \xf6nemli notlardan da kald\u0131r\u0131lacak. Not silinsin mi?",
          "square.post.announcement.guide":
            "Hi\xe7 kimsenin ka\xe7\u0131rmamas\u0131 i\xe7in notlar\u0131 \xf6nemli olarak ayarlay\u0131n.",
          "square.post.announcement.list.title": "\xd6nemli notlar",
          "square.post.announcement.list.zero": "Hen\xfcz not yok.",
          "square.post.announcement.mark": "\xd6nemli not olarak ayarla",
          "square.post.announcement.mark.desc":
            "Her g\xfcn ayarlanan ilk \xf6nemli g\xf6nderiyle ilgili olarak, yaln\u0131zca square \xfcyelerine bildirim g\xf6nderilir.",
          "square.post.announcement.postui": "\xd6nemli",
          "square.post.announcement.postui2": "<b>\xd6nemli not</b>",
          "square.post.announcement.push":
            "%1 OpenChat'inde yeni \xf6nemli not ayarland\u0131.",
          "square.post.announcement.remove":
            "\xd6nemli ayar\u0131n\u0131 kald\u0131r",
          "square.post.announcement.seeall.plural.other": "%1 \xf6nemli not",
          "square.post.endpage.squarename": "%1",
          "square.post.error.deletedcomment": "Bu yorum silinmi\u015ftir.",
          "square.post.error.deletedjoined": "G\xf6nderi zaten silindi. ",
          "square.post.error.deletedpost": "Bu not silindi.",
          "square.post.error.write":
            "Y\xf6netici g\xf6nderi yazma se\xe7ene\u011fini devre d\u0131\u015f\u0131 b\u0131rakt\u0131. ",
          "square.post.hashtag.title": "%1 square'inde %2",
          "square.post.join": "Kat\u0131l",
          "square.post.joinguide":
            'Ka\xe7\u0131rmay\u0131n! Di\u011fer \xfcyelerle sohbetler ve g\xf6nderiler payla\u015fmak i\xe7in hemen "%1" square\u2019ine kat\u0131l\u0131n.',
          "square.post.linktype.chatlist":
            "bir OpenChat notu payla\u015ft\u0131.",
          "square.post.linktype.scroll":
            "bir OpenChat notu payla\u015ft\u0131.",
          "square.post.linktype.title": "Notu G\xf6r\xfcnt\xfcle",
          "square.post.share.chatlist": "\u015eununla payla\u015f:",
          "square.post.share.popup": "OpenChat notlar\u0131 payla\u015fma",
          "square.post.title": "Notlar",
          "square.post.write.guide":
            "OpenChat'teki notunuzu di\u011fer ki\u015filer de g\xf6rebilir.",
          "square.post.write.guidecountryspecific":
            "OpenChat'teki di\u011fer ki\u015filerle payla\u015f.",
          "square.post.write.hashtag":
            "Square g\xf6nderilerinize etiket eklemeyi deneyin. Etiketler,\ndi\u011fer Square \xfcyelerinin g\xf6nderileri bulmas\u0131n\u0131 ve belirli konularda sohbet etmesini kolayla\u015ft\u0131r\u0131r.",
          "square.post.zeropage.newpost": "Yaz",
          "square.post.zeropage.welcome":
            "Bu OpenChat'te bir not yazan ilk siz olun!",
          "square.postpopup.join":
            "Bu \xf6zelli\u011fi yaln\u0131zca square \xfcyeleri kullanabilir. Square\u2019e kat\u0131lmak istiyor musunuz?",
          "square.privacy.setting.approval": "Y\xf6netici onay\u0131 iste",
          "square.privacy.setting.guide":
            "OpenChat'e ve varsa alt sohbetlerine yaln\u0131zca y\xf6netici taraf\u0131ndan onaylananlar veya do\u011fru kodu girenler kat\u0131labilir.",
          "square.privacy.setting.joincode": "Kat\u0131lmak i\xe7in kod iste",
          "square.privacy.setting.off": "Herkese a\xe7\u0131k",
          "square.privacy.setting.off.guide":
            "Varsa alt sohbetler dahil olmak \xfczere, OpenChat'e herkes kat\u0131labilir.",
          "square.privacy.setting.title": "Gizlilik ayarlar\u0131",
          "square.privacy.turnoff.alert":
            "Bu sohbete herkes kat\u0131labilecek. Devam edilsin mi?",
          "square.privcay.setting.off.guide":
            "Bu alana ve sohbetlerine herkes kat\u0131labilir.",
          "square.qrcode.save.failed": "QR kodu kaydedilemedi.",
          "square.readonlyopenchat.popupbutton.ok": "Tamam",
          "square.repairdata.button.repairdata": "Onar",
          "square.repairdata.desc.syncrepairdata":
            "OpenChat verilerini senkronize edin ve onar\u0131n.\nOnar\u0131lan veriler: OpenChat verileri\xa0ve ilgili ayarlar",
          "square.repairdata.popupdesc.repairinginprogress":
            "Veriler onar\u0131l\u0131yor\nSenkronizasyon devam ederken bu pencereyi kapatmay\u0131n.",
          "square.repairdata.popupdesc.synccomplete":
            "Senkronizasyon tamamland\u0131. OpenChat verileri onar\u0131ld\u0131.",
          "square.repairdata.title.repairdata": "OpenChat verilerini onar",
          "square.report.page.reason01": "",
          "square.report.page.reason02": "",
          "square.report.page.reason03": "",
          "square.report.page.reason04": "",
          "square.report.policy.desc":
            "\u015eikayetler, OpenChat politikas\u0131na g\xf6re incelenir ve uygun \u015fekilde i\u015flenir.",
          "square.report.policy.desc01": "",
          "square.report.policy.desc02": "",
          "square.report.policy.message": "",
          "square.report.subTitle":
            "Bu notu \u015fikayet edin.\n(Olu\u015fturan: %1)",
          "square.reportopenchat.desc.reportchatfromprofile":
            "\u015eikayet edilen OpenChat ile ilgili bilgilerin (\xf6r. sohbetin ad\u0131, kapak foto\u011fraf\u0131 ve \xfcye say\u0131s\u0131) yan\u0131 s\u0131ra sohbette g\xf6nderilen son 100 mesaj, bilgileriniz ve sohbet y\xf6neticisiyle ilgili ayr\u0131nt\u0131lar (sohbette kullan\u0131lan takma adlar ve tan\u0131mlay\u0131c\u0131 bilgiler dahil).",
          "square.reportopenchat.desc.reportchatfromsettings":
            "\u015eikayet edilen OpenChat ile ilgili bilgilerin (\xf6r. sohbetin ad\u0131, kapak foto\u011fraf\u0131 ve \xfcye say\u0131s\u0131) yan\u0131 s\u0131ra sohbette g\xf6nderilen son 50 mesaj, bilgileriniz ve sohbet y\xf6neticisiyle ilgili ayr\u0131nt\u0131lar (sohbette kullan\u0131lan takma adlar ve tan\u0131mlay\u0131c\u0131 bilgiler dahil).",
          "square.reportopenchat.desc.reportcommentonopenchatnote":
            "\u015eikayet edilen yorumla ilgili ayr\u0131nt\u0131lar (\xf6r. metin, g\xf6rseller veya emoji), OpenChat ile ilgili bilgiler (\xf6r. ad\u0131, kapak foto\u011fraf\u0131 ve \xfcye say\u0131s\u0131), bilgileriniz ve \u015fikayet edilen kullan\u0131c\u0131yla ilgili ayr\u0131nt\u0131lar (\u015fikayet edilen kullan\u0131c\u0131n\u0131n profil simgesi, \xfcyelik durumu, sohbette kulland\u0131\u011f\u0131 takma adlar ve di\u011fer tan\u0131mlay\u0131c\u0131 bilgileri).",
          "square.reportopenchat.desc.reportopenchatmember":
            "\u015eikayet edilen OpenChat ile ilgili bilgiler (\xf6r. sohbetin ad\u0131, kapak foto\u011fraf\u0131 ve \xfcye say\u0131s\u0131) ile birlikte sohbette g\xf6nderilen son 100 mesaj, bilgileriniz ve \u015fikayet edilen kullan\u0131c\u0131yla ilgili ayr\u0131nt\u0131lar (\u015fikayet edilen kullan\u0131c\u0131n\u0131n profil simgesi, \xfcyelik durumu, sohbette kulland\u0131\u011f\u0131 takma adlar ve tan\u0131mlay\u0131c\u0131 bilgileri).",
          "square.reportopenchat.desc.reportopenchatmessage":
            "\u015eikayet edilen OpenChat ile ilgili bilgiler (\xf6r. sohbetin ad\u0131, kapak foto\u011fraf\u0131 ve \xfcye say\u0131s\u0131) ile birlikte sohbette g\xf6nderilen son 10 mesaj, bilgileriniz ve \u015fikayet edilen kullan\u0131c\u0131yla ilgili ayr\u0131nt\u0131lar (\u015fikayet edilen kullan\u0131c\u0131n\u0131n profil simgesi, \xfcyelik durumu, sohbette kulland\u0131\u011f\u0131 takma adlar ve tan\u0131mlay\u0131c\u0131 bilgileri).",
          "square.reportopenchat.desc.reportopenchatnote":
            "\u015eikayet edilen notun i\xe7eri\u011fi (\xf6r. metin, g\xf6rseller, videolar veya emoji), OpenChat ile ilgili bilgiler (\xf6r. sohbetin ad\u0131, kapak foto\u011fraf\u0131 ve \xfcye say\u0131s\u0131), bilgileriniz ve \u015fikayet edilen kullan\u0131c\u0131yla ilgili ayr\u0131nt\u0131lar (\u015fikayet edilen kullan\u0131c\u0131n\u0131n profil simgesi, \xfcyelik durumu, sohbette kulland\u0131\u011f\u0131 takma adlar ve tan\u0131mlay\u0131c\u0131 bilgileri).",
          "square.requesttojoin.button.submit": "G\xf6nder",
          "square.set.joincode.input.guide": "Kodu girin",
          "square.set.question.input.guide":
            "Sohbete kat\u0131lmak i\xe7in yan\u0131tlanmas\u0131 gereken soruyu girin. Y\xf6netici veya yard\u0131mc\u0131 y\xf6netici ba\u015fvuru sahiplerini inceleyip \xfcyeleri onaylayabilir.",
          "square.setopenchatprofile.button.characterprofile":
            "Karakter profili",
          "square.setting.auth.announcement": "Duyuru ayarla",
          "square.setting.auth.message.post":
            "Mesajlar\u0131 ve notlar\u0131 sil",
          "square.settings.deleteaccount.desc":
            "OpenChat y\xf6neticisinin izinleri otomatik olarak ba\u015fka bir \xfcyeye devredilecek.",
          "square.settings.managesquare.defaultchatroom.desc":
            "Varsay\u0131lan sohbet silinemez.",
          "square.settings.managesquare.defaultchatroom.title":
            '"%1" adl\u0131 square i\xe7in varsay\u0131lan sohbet',
          "square.settings.managesquare.privatechat":
            "\xd6zel sohbetlere izin ver",
          "square.settings.managesquare.privatechat.desc":
            "\xdcyeler \xf6zel sohbetler olu\u015fturabilir veya birbirlerine do\u011frudan mesaj g\xf6nderebilirler.",
          "square.settings.memberlist.members.subtitle": "\xdcyeler",
          "square.settings.members": "\xdcyeler (%n)",
          "square.settings.myprofile.leavesquare": "OpenChat'ten ayr\u0131l",
          "square.sub.name.title": "Alt sohbet ad\u0131",
          "square.thread.desc.nochat":
            "Yaz\u0131\u015fmadaki mesajlar sohbete g\xf6nderilmeyecek.",
          "square.thread.desc.startofthread": "Mesaj\u0131 sohbette g\xf6r",
          "square.thread.placeholder.replytothread":
            "Yaz\u0131\u015fmay\u0131 yan\u0131tlay\u0131n",
          "square.thread.title.thread": "Yaz\u0131\u015fma",
          "square.thread.toast.nolongerwatching":
            "Favori yaz\u0131\u015fmalardan kald\u0131r\u0131ld\u0131.",
          "square.thread.toast.nowwatching":
            "Favori yaz\u0131\u015fmalara eklendi.",
          "square.timeline.button.tooltip":
            "Yeni ki\u015filerle e\u011flenceli konular\nhakk\u0131nda sohbet edin!",
          "square.tooltip.chatroom.settings.changename":
            "Varsay\u0131lan sohbet i\xe7in bir \xf6zel ad ve profil ayarlay\u0131n.",
          "square.unsupported.version.message":
            "LINE'\u0131n ge\xe7erli s\xfcr\xfcm\xfc bu \xf6zelli\u011fi desteklemiyor.\nL\xfctfen LINE'\u0131n en son s\xfcr\xfcm\xfcne g\xfcncelleyin.",
          "square.urlscheme.alert.linkjoin.function.off":
            "Davet ba\u011flant\u0131s\u0131yla kat\u0131l\u0131m sa\u011flanamad\u0131.\nBir OpenChat \xfcyesinden sizi davet etmesini isteyin.",
          "square.urlscheme.desc2":
            "Bu square\u2019e yaln\u0131zca iOS veya Android cihazlar\u0131ndan kat\u0131labilirsiniz. ",
          "square.urlscheme.error.notexist": "Bu OpenChat mevcut de\u011fil.",
          "square.urlscheme.invite.msg":
            "Bir OpenChat'e kat\u0131lmak i\xe7in davet edildiniz.",
          "square.urlscheme.package":
            "[%1] Bir OpenChat'e kat\u0131lmak i\xe7in davet edildiniz.\n%3\n%2",
          "square.urlscheme.package.chatroom":
            "\"%1\" OpenChat'ine kat\u0131lmak i\xe7in davet edildiniz. OpenChat'e kat\u0131lmak i\xe7in a\u015fa\u011f\u0131daki ba\u011flant\u0131y\u0131 ziyaret edin.\n%2",
          "square.urlscheme.package.chatroom2": "",
          "square.user.admin": "Y\xf6netici",
          "square.user.coadmin": "Yard. y\xf6n.",
          "square.userpopup.blockinvite": "Davetleri engelle",
          "square.userpopup.error.alert.notmember":
            "Art\u0131k bu OpenChat'in \xfcyesi de\u011fil.",
          "square.userpopup.friendsinfo.btn": "Bilgi ",
          "square.userpopup.friendsrequest.btn":
            "Arkada\u015fl\u0131k iste\u011fi",
          "square.userpopup.kickout.ban.btn": "Engelle",
          "square.userpopup.kickout.btn": "Engelle",
          "square.userpopup.kickout.cancel.btn": "\u0130ptal",
          "square.userpopup.post.count.btn": "G\xf6nderiler",
          "square.yourthreads.title.yourthreads":
            "Yaz\u0131\u015fmalar\u0131n\u0131z",
          "sticion.msg.desc.expired": "Bu emojinin s\xfcresi doldu.",
          "sticker.btn.deleteThisSticker": "Sticker setini sil",
          "sticker.btn.openWebStore": "Sticker Ma\u011fazas\u0131",
          "sticker.customsticker.btn.edit": "D\xfczenle",
          "sticker.customsticker.cancelalert.desc":
            "Bu sayfadan ayr\u0131l\u0131rsan\u0131z \xf6zel resim yaz\u0131n\u0131z kaybedilecek. Emin misiniz?",
          "sticker.customsticker.discard.alert": "Ayr\u0131l",
          "sticker.customsticker.edit.overflow":
            "Resim yaz\u0131s\u0131 \xe7ok uzun.",
          "sticker.customsticker.error.updatename.desc":
            "\xdczg\xfcn\xfcz, \u015fu anda resim yaz\u0131n\u0131z\u0131 g\xfcncelleyemedik.",
          "sticker.customsticker.invalidwordupdate.desc":
            "\xd6zel resim yaz\u0131lar\u0131nda ge\xe7ersiz s\xf6zc\xfck alg\u0131land\u0131\u011f\u0131ndan bu sticker'lar devre d\u0131\u015f\u0131 b\u0131rak\u0131ld\u0131. Bu sticker'lar\u0131 kullanmaya devam etmek i\xe7in l\xfctfen resim yaz\u0131s\u0131n\u0131 d\xfczenleyin.",
          "sticker.customsticker.sync.alert":
            "Masa\xfcst\xfcnde olu\u015fturulan resim yaz\u0131lar\u0131 mobil cihaz\u0131n\u0131za an\u0131nda uygulanmayabilir. Bu sticker'lar\u0131 mobil cihaz\u0131n\u0131zda Ayarlar > Sticker'lar > Sticker'lar\u0131m b\xf6l\xfcm\xfcne gidip sticker setini indirerek g\xfcncelleyebilirsiniz.",
          "sticker.customsticker.tooltip":
            "Kendinize \xf6zel sticker resim yaz\u0131lar\u0131 olu\u015fturun!",
          "sticker.download.btn": "\u0130ndir",
          "sticker.download.fail":
            "\u0130ndirme ba\u015far\u0131s\u0131z.\nL\xfctfen tekrar deneyin.",
          "sticker.downloadAll.confirm":
            "T\xfcm sticker'lar\u0131n\u0131z indirilsin mi?",
          "sticker.downloadAll.desc":
            "T\xfcm stickerlar\u0131 ayn\u0131 anda indirin.",
          "sticker.downloadAll.downloading": "Stickerlar indiriliyor...",
          "sticker.downloading.desc":
            "Sticker'lar indiriliyor.\nL\xfctfen bekleyin.",
          "sticker.edit.hint.default":
            "**** i\xe7in resim yaz\u0131s\u0131n\u0131 d\xfczenleyin",
          "sticker.edit.invalidword.desc":
            "Ge\xe7ersiz kelime alg\u0131land\u0131.",
          "sticker.error.downloadlfailed.desc": "Stickerlar indirilemiyor.",
          "sticker.expired.desc":
            "%1 i\xe7in ge\xe7erlilik s\xfcresi doldu. Bu sticker'lar kald\u0131r\u0131lacak.",
          "sticker.msg.desc.delete": "Sil",
          "sticker.msg.desc.expired":
            "Bu stickerlar\u0131n ge\xe7erlilik s\xfcresi bitmi\u015ftir.",
          "sticker.msgsticker.button.back": "Geri",
          "sticker.msgsticker.button.cancel": "\u0130ptal",
          "sticker.msgsticker.button.edit":
            "Resim yaz\u0131s\u0131n\u0131 d\xfczenle",
          "sticker.msgsticker.button.save": "Kaydet",
          "sticker.msgsticker.desc.howtoedit":
            "Resim yaz\u0131s\u0131n\u0131 d\xfczenlemek i\xe7in bir sticker'a t\u0131klay\u0131n.",
          "sticker.msgsticker.desc.prompt":
            "Yeni mesaj\u0131n\u0131z ileride g\xf6nderece\u011finiz sticker'larda g\xf6r\xfcnecek.",
          "sticker.msgsticker.validation.errorrefresh":
            "Bir sorun olu\u015ftu. Resmi yenilemek i\xe7in sticker'a t\u0131klay\u0131n.",
          "sticker.msgsticker.validation.toolong":
            "Daha k\u0131sa bir mesaj girmeyi deneyin.",
          "sticker.nearlyExpired.desc.other":
            "Bu sticker'lar\u0131n s\xfcresi %n g\xfcn sonra doluyor.",
          "sticker.recommendedSticker.label": "\xd6nerilen sticker'lar",
          "sticker.search.hint": "Ara",
          "sticker.search.nosearchresult": "Sonu\xe7 bulunamad\u0131.",
          "sticker.stickerspremium.deletsticker.popup":
            "Bu sticker seti Premium koleksiyonunuzdan silinsin mi?",
          "sticker.stickerspremium.dropped.desc":
            "Kullanmak i\xe7in bu sticker'lar\u0131 sat\u0131n al\u0131n.",
          "sticker.stickerspremium.dropped.title":
            "Bu sticker'lar art\u0131k LINE Stickers Premium'da kullan\u0131lam\u0131yor",
          "sticker.stickerspremium.emojidropped.desc":
            "Kullanmaya devam etmek i\xe7in bu emoji'leri sat\u0131n al\u0131n.",
          "sticker.stickerspremium.emojidropped.title":
            "Bu emoji'ler art\u0131k LINE Stickers\nPremium'da kullan\u0131lam\u0131yor",
          "sticker.stickerspremium.emojiexpired.desc":
            "Bu emoji'leri kullanmaya devam etmek i\xe7in LINE Stickers Premium Deluxe d\xfczeyi aboneli\u011finizi yenileyin.",
          "sticker.stickerspremium.expired.desc":
            "Bu sticker'lar\u0131 kullanmaya devam etmek i\xe7in LINE Stickers Premium aboneli\u011fini yenileyin.",
          "sticker.stickerspremium.expired.title":
            "Premium \xfcyeli\u011finizin s\xfcresi doldu",
          "sticker.unpurchased.purchase.btn": "Sat\u0131n Al",
          "sticker.unpurchased.recommended.title": "\xd6nerilir",
          "sticon.downloadAll.desc": "T\xfcm emojileri ayn\u0131 anda indirin.",
          "sticon.downloadAll.downloading": "Emoji indiriliyor\u2026",
          "sticon.downloading.desc": "Emoji indiriliyor.\nL\xfctfen bekleyin.",
          "sticon.expired.desc":
            "%1 i\xe7in ge\xe7erlilik s\xfcresi doldu. Bu emoji'ler kald\u0131r\u0131lacak.",
          "sticon.nearlyExpired.desc.other":
            "Bu emoji'lerin s\xfcresi %n g\xfcn sonra dolacak.",
          "sticon.recommendedEmoji.label": "\xd6nerilen emojiler",
          "sticon.stickerspremium.deletemoji.popup":
            "Bu emoji seti Premium koleksiyonunuzdan silinsin mi?",
          "subprofile.common.button.cancel": "\u0130ptal",
          "subprofile.common.popupbutton.continue": "Devam",
          "subprofile.common.toast.settingupdated":
            "Profil ayarlar\u0131 g\xfcncellendi.",
          "subprofile.editfriends.button.done": "Bitti",
          "subprofile.editfriends.popupdesc.dontshowagain":
            "Tekrar g\xf6sterme",
          "subprofile.editfriends.popuptitle.errorabletoretry":
            "Bu profil i\xe7in baz\u0131 arkada\u015flar se\xe7ilemedi. L\xfctfen tekrar deneyin.",
          "subprofile.editfriends.popuptitle.errorunabletoretry":
            "Bu profil i\xe7in baz\u0131 arkada\u015flar se\xe7ilemedi.",
          "subprofile.editfriends.popuptitle.maxlimiterror":
            "Profil i\xe7in ayarlanabilecek arkada\u015f s\u0131n\u0131r\u0131na ula\u015ft\u0131n\u0131z.",
          "subprofile.editfriends.popuptitle.networkerror":
            "Bir a\u011f hatas\u0131 olu\u015ftu. L\xfctfen ba\u011flant\u0131n\u0131z\u0131 kontrol edip tekrar deneyin.",
          "subprofile.editfriends.popuptitle.onlyonmobileapp":
            "Bu \xf6zellik yaln\u0131zca LINE uygulamas\u0131n\u0131n ak\u0131ll\u0131 telefon s\xfcr\xfcm\xfcnde kullan\u0131labilir.",
          "subprofile.editfriends.popuptitle.showndifferentprofile":
            "Bu arkada\u015fa ba\u015fka bir profil g\xf6sterilecek. Devam edilsin mi?",
          "subprofile.editfriends.popuptitle.showthisprofile":
            "Se\xe7ti\u011finiz arkada\u015flar bu profili g\xf6rebilecek. Devam edilsin mi?",
          "subprofile.editfriends.popuptitle.temporaryerror":
            "Ge\xe7ici bir hata olu\u015ftu. L\xfctfen daha sonra tekrar deneyin.",
          "subprofile.editfriends.popuptitle.temporaryerrortryagain":
            "Arkada\u015f listeniz y\xfcklenemedi. L\xfctfen tekrar deneyin.",
          "subprofile.editfriends.subtitle.addfriend": "Arkada\u015f ekle",
          "subprofile.editfriends.title.onlyonmobileapp":
            "Mobil s\xfcr\xfcmde alt profil olu\u015fturabilir veya alt profilleri silebilirsiniz.",
          "subprofile.editfriends.title.selectprofile": "Profil se\xe7in",
          "subprofile.editfriends.toast.profileupdatedplural.other":
            "Profil %n arkada\u015f i\xe7in g\xfcncellendi.",
          "subprofile.friendsprofile.title.setyourprofile":
            "Profili ayarlay\u0131n",
          "subprofile.friendsprofile.tooltip.subprofile":
            "Bu arkada\u015fa g\xf6sterilecek profili se\xe7in.",
          "subprofile.groupchatmenu.group.profile": "",
          "subprofile.groupchatmenu.tooltip.subprofile":
            "Grup sohbetlerinde arkada\u015flara g\xf6sterilecek profili se\xe7in.",
          "subprofile.groupprofile.tooltip.subprofile":
            "Bu grupta kullan\u0131lacak profili se\xe7in.",
          "subprofile.groupsettings.button.edit": "D\xfczenle",
          "subprofile.groupsettings.subtitle.amountofprofile.other":
            "%n profil g\xf6steriliyor",
          "subprofile.profile.tooltip.onlyonmobileapp":
            "Mobil s\xfcr\xfcmde olu\u015fturdu\u011funuz bir alt profili ayarlayabilirsiniz.",
          "subprofile.selectfriends.button.deselectall": "Se\xe7. kldr",
          "subprofile.selectfriends.button.selectall": "T\xfcm\xfc",
          "subprofile.selectfriends.button.selectprofile": "Profil se\xe7",
          "subprofile.selectfriends.desc.selectfriends":
            "Yaln\u0131zca arkada\u015flar i\xe7in alt profil ayarlanabilir. Arkada\u015f olmayan grup \xfcyeleri ana profili g\xf6r\xfcr.",
          "subprofile.settings.button.edit": "Profilleriniz",
          "subprofile.settings.desc.aboutsubprofile":
            "Masa\xfcst\xfc s\xfcr\xfcm\xfcnde yaln\u0131zca mevcut alt profilleri d\xfczenleyebilirsiniz. Alt profil olu\u015fturmak veya alt profilleri silmek i\xe7in mobil s\xfcr\xfcm\xfc kullan\u0131n.",
          "subprofile.settings.desc.zerocase":
            'Hen\xfcz arkada\u015f\u0131n\u0131z yok. "Arkada\u015f ekle"ye t\u0131klay\u0131n ve bu profili kimlerin g\xf6rebilece\u011fini se\xe7in.',
          "subprofile.settings.title.app": "Uygulama",
          "subprofile.yourprofile.bannerdesc.cantsetsubprofile": "",
          "subprofile.yourprofile.bannerdesc.shownfor30days": "",
          "subprofile.yourprofile.bannertitle.expired": "",
          "subprofile.yourprofile.bannertitle.temporaryerror": "",
          "subprofile.yourprofile.button.editfriends":
            "Arkada\u015flar\u0131 d\xfczenle",
          "subprofile.yourprofile.desc.amountoffriend.other":
            "%n arkada\u015f profili g\xf6rebilir",
          "subprofile.yourprofile.subtitle.mainprofile": "Ana profil",
          "subprofile.yourprofile.subtitle.subprofile": "Alt profil",
          "subprofile.yourprofile.title.editfriends":
            "Arkada\u015flar\u0131 d\xfczenle",
          "subprofile.yourprofile.title.yourprofile": "Profilleriniz",
          "talk.addFriend.recommend.reason.group": "Ayn\u0131 Grup",
          "talk.addFriend.recommend.reason.group.name": "\u300c%1\u300dGrubu",
          "talk.addFriend.recommend.reason.lineid":
            "Sizi LINE Kimli\u011fine g\xf6re ekledi",
          "talk.addFriend.recommend.reason.phone":
            "Sizi Telefon No'ya g\xf6re ekledi",
          "talk.addFriend.recommend.reason.qrcode":
            "Sizi QR Koduna g\xf6re ekledi",
          "talk.btn.addbuddy.title": "Ekle",
          "talk.btn.cancel.title": "Iptal",
          "talk.btn.join.title": "Kat\u0131l",
          "talk.chatlist.chatheader.title": "Sohbet",
          "talk.chatlist.floating.button.chat": "Sohbet",
          "talk.chatlist.floating.button.chatandgroup": "Grup veya sohbet",
          "talk.chatlist.floating.button.group": "Grup",
          "talk.chatlist.floating.button.square": "OpenChat",
          "talk.chatlist.floating.createChat": "Sohbet olu\u015ftur",
          "talk.chatlist.floating.menu.chatandgroup":
            "Sohbet veya grup olu\u015ftur",
          "talk.chatlist.groupheader.title":
            '%1" \xfcye ad\u0131n\u0131n oldu\u011fu gruplar',
          "talk.chatlist.menu.hide": "Gizle",
          "talk.chatlist.menu.pin.off":
            "Sohbetin \u0130\u011fnesini Kald\u0131r",
          "talk.chatlist.menu.pin.on": "Sohbete \u0130\u011fne Ekle",
          "talk.chatlist.menu.readAll": "T\xfcm\xfcn\xfc Okundu Yap",
          "talk.chatlist.msgsSearchCount.few": "%n Mesaj bulundu",
          "talk.chatlist.msgsSearchCount.many": "%n Mesaj bulundu",
          "talk.chatlist.msgsSearchCount.one": "%n Mesaj bulundu",
          "talk.chatlist.msgsSearchCount.other": "%n Mesaj bulundu",
          "talk.chatlist.msgsSearchCount.plurals.other": "%n Mesaj bulundu",
          "talk.chatlist.msgsSearchCount.two": "%n Mesaj bulundu",
          "talk.chatlist.msgsSearchCount.zero": "%n Mesaj bulundu",
          "talk.chatlist.msgsSearchHeader.title": "Mesaj",
          "talk.chatlist.search.placeholder": "Sohbet Arama",
          "talk.label.addbuddy.title": "Ekle",
          "talk.label.alreadycontact.title":
            "Zaten arkada\u015f\u0131n\u0131z.",
          "talk.label.blocked.buddy.title":
            "Bu hesap engellendi. Hesab\u0131n engelini kald\u0131rmak i\xe7in ayarlar\u0131n\u0131z\u0131 kontrol edin.",
          "talk.label.buddies.title": "Arkada\u015flar",
          "talk.label.buddylist.title": "Arkada\u015flar",
          "talk.label.chatlist.title": "Sohbet",
          "talk.label.empty.description.1":
            "Kimlik aramas\u0131yla veya Arkada\u015f Tavsiye listesinden\narkada\u015flar\u0131n\u0131z\u0131 ekleyin.",
          "talk.label.empty.description.3":
            "Arama kutusunda Kimliklerini arayarak\narkada\u015flar\u0131n\u0131z\u0131 ekleyebilirsiniz.",
          "talk.label.empty.title.1":
            "Haydi, arkada\u015flar\u0131m\u0131z\u0131 ekleyelim!",
          "talk.label.empty.title.2": "Haydi sohbet edelim!",
          "talk.label.empty.title.3":
            "Arkada\u015flar\u0131n\u0131z\u0131 bulun!",
          "talk.label.failed.title":
            "Arkada\u015f Listesine g\xf6sterilemiyor.",
          "talk.label.failedsearch.rejected.title":
            "Arama hakk\u0131n\u0131z a\u015f\u0131ld\u0131.\nBir s\xfcre ID/Telefon numaras\u0131 aramas\u0131 yapamayacaks\u0131n\u0131z.",
          "talk.label.failedsearch.title":
            "Kullan\u0131c\u0131 bulunamad\u0131\n",
          "talk.label.favorite.title": "Favoriler",
          "talk.label.groups.title": "Gruplar",
          "talk.label.invited.title": "Grup Davetleri",
          "talk.label.newfriend.title": "Yeni arkada\u015flar",
          "talk.label.nosearchresult.title": "Sonu\xe7 bulunamad\u0131.",
          "talk.label.placehodler.title": "\u0130sim ile ara",
          "talk.label.recentFriends.title": "Son sohbetler",
          "talk.label.recommendbuddyplacehodler.title": "ID ile ara",
          "talk.label.recommended.addFriend": "Arkada\u015f Ekle",
          "talk.label.recommended.officialAccount.title":
            "Resmi Hesap \xd6nerileri",
          "talk.label.recommended.title": "Arkada\u015f Tavsiyeleri",
          "talk.label.search.friends": "Arkada\u015f Ara",
          "talk.label.search.friends.QRcode.error.invalidUser":
            "Kullan\u0131c\u0131 bulunamad\u0131.",
          "talk.label.search.friends.phoneNumber.error":
            "Telefon numaras\u0131 mevcut de\u011fil\nveya aranabilir durumda olmayabilir.",
          "talk.label.search.friends.phoneNumber.error.notRegistered":
            "Yaln\u0131zca LINE\u2019a kendi telefon numaran\u0131z\u0131 kaydettikten sonra di\u011fer kullan\u0131c\u0131lar\u0131 telefon numaras\u0131na g\xf6re arayabilirsiniz.\nTelefon numaran\u0131z\u0131 kaydetmek i\xe7in l\xfctfen LINE\u2019\u0131n ak\u0131ll\u0131 telefon s\xfcr\xfcm\xfcnde Ayarlar > Profil b\xf6l\xfcm\xfcne gidin.",
          "talk.label.square.title": "OpenChat",
          "talk.label.thatisyou.title": "Kendinizi ekleyemezsiniz",
          "talk.menu.aboutgroup": "Grubu d\xfczenle",
          "talk.menu.addfavorite": "Favorilere ekleme",
          "talk.menu.addgroup": "Grup Kur",
          "talk.menu.block": "Engelle",
          "talk.menu.call": "Ara",
          "talk.menu.call.video": "G\xf6r\xfcnt\xfcl\xfc",
          "talk.menu.call.voice": "Sesli arama",
          "talk.menu.editname":
            "Arkada\u015f\u0131n\u0131n \u0130smini De\u011fi\u015ftir",
          "talk.menu.exit": "Bitti",
          "talk.menu.group.call": "Arama ba\u015flat",
          "talk.menu.help": "Yard\u0131m",
          "talk.menu.hide": "Gizle",
          "talk.menu.leavegroup": "Ayr\u0131l",
          "talk.menu.logout": "\xc7\u0131k\u0131\u015f",
          "talk.menu.myProfile": "Profilim",
          "talk.menu.notes": "Notlar",
          "talk.menu.posts": "G\xf6nderiler",
          "talk.menu.rejectbuddy": "Engelle",
          "talk.menu.rejectgroup": "Reddet",
          "talk.menu.removeFavorite": "Favorilerden kald\u0131rma",
          "talk.menu.removetalkitem": "Sil",
          "talk.menu.sendContact": "Ki\u015fiyi Payla\u015f",
          "talk.menu.setting": "Ayarlar",
          "talk.menu.showProfile": "Profil",
          "talk.menu.starttalk": "Sohbet ba\u015flat",
          "talk.menu.talk": "Sohbet",
          "talk.menu.talkbuddy": "Sohbet",
          "talk.menu.talkgroup": "Sohbet",
          "talk.menu.voip": "Sesli arama",
          "talk.msg.addbuddy.failed": "Arkada\u015f\u0131n\u0131z Eklenemedi.",
          "talk.msg.addrecommended.failed":
            "Arkada\u015f\u0131n\u0131z Eklenemedi.",
          "talk.msg.block.failed": "Bu arkada\u015f engellenemedi.",
          "talk.msg.blockrecommended.failed": "Bu arkada\u015f engellenemedi.",
          "talk.msg.del.1.n":
            "Bu sohbeti sohbet listenizden silerseniz sohbet ge\xe7mi\u015fini g\xf6remez veya sohbette kalamazs\u0131n\u0131z. Bu sohbet silinsin mi?",
          "talk.msg.del.room":
            "Bu sohbeti sohbet listenizden silerseniz sohbet ge\xe7mi\u015fini geri y\xfckleyemezsiniz. Bu sohbet silinsin mi?",
          "talk.msg.favorite.failed":
            "\xdczg\xfcn\xfcz, Favorilere ekleme ba\u015far\u0131s\u0131z oldu.",
          "talk.msg.favorite.overflow.failed":
            "Favorilerinize 100 adet kullan\u0131c\u0131ya kadar ekleme yapabilirsiniz.",
          "talk.msg.hide.failed": "Hesaplar gizlenemedi.",
          "talk.msg.joininvitedgroup.failed":
            "Grupa Ba\u011flan\u0131lamad\u0131.",
          "talk.msg.leavegroup.failed":
            "Gruptan Ayr\u0131lan ayr\u0131lamad\u0131.",
          "talk.msg.no.room": "Bu sohbet zaten silindi.",
          "talk.msg.rejectinvitedgroup.failed": "Bu davet reddedilemedi.",
          "talk.network.unreachable":
            "A\u011f ba\u011flant\u0131n\u0131z \u015fu anda dengesiz.",
          "talk.search.hint": "Mesajlarda, isimlerde ara",
          "talk.search.label.chatMember": "\u0130simlerde ara",
          "talk.search.label.displayName": "Ada g\xf6re ara",
          "talk.search.label.member.all": "Members (%1)",
          "talk.search.label.member.selected": "%1 \xfcye se\xe7ildi",
          "talk.search.label.reSearch": "Bu sonu\xe7lar i\xe7inde ara",
          "talk.search.label.reSearch.noResult":
            "Daha fazla arama yap\u0131lam\u0131yor. ",
          "talk.search.label.textMessage": "Mesajlarda ara",
          "talk.tooltip.delete": "Sil",
          "theme.mode.guide.dark.desc":
            'G\xf6r\xfcnt\xfc modunuz koyu mod olarak ayarland\u0131. Di\u011fer se\xe7enekler i\xe7in Ayarlar > Temel > "G\xf6r\xfcnt\xfc modu"na gidin.',
          "theme.mode.guide.desc":
            "G\xf6r\xfcnt\xfc modu sistem ayar\u0131n\u0131za g\xf6re otomatik olarak uyguland\u0131. G\xf6r\xfcnt\xfc modunu de\u011fi\u015ftirmek i\xe7in Ayarlar > Temel'e gidin.",
          "theme.mode.guide.light.desc":
            'Art\u0131k LINE\'da g\xf6r\xfcnt\xfc modunu koyu mod olarak ayarlayabilirsiniz. G\xf6r\xfcnt\xfc modunu de\u011fi\u015ftirmek i\xe7in Ayarlar > Temel > "G\xf6r\xfcnt\xfc modu"na gidin.',
          "theme.mode.guide.title": "Yeni g\xf6r\xfcnt\xfc modunu deneyin.",
          "timeline.alert.attach": "1 kadar eklenti ekleyebilirsiniz.",
          "timeline.alert.attach.unavailable":
            "Ekleriniz bir g\xf6nderiye eklenemeyecek bir dosya i\xe7eriyor. ",
          "timeline.alert.attachphoto":
            "En fazla 9 foto\u011fraf ekleyebilirsiniz.",
          "timeline.alert.commentmaxcount":
            "Maksimum karakter say\u0131s\u0131 1000.",
          "timeline.alert.confirm.close":
            "Hen\xfcz notunuzu bitirmediniz. Bitirmeden ayr\u0131lmak istiyor musunuz?",
          "timeline.alert.confirm.deletecomment":
            "Bu yorumu silmek istiyor musunuz?",
          "timeline.alert.confirm.deletepost":
            "Bunu silerseniz, yorumlar da silinecektir.\nDevam etmek istiyor musunuz?",
          "timeline.alert.confirm.deletethumb":
            "Bu foto silmek istiyor musunuz?",
          "timeline.alert.confirm.replacepost":
            "\u015eu anda bir g\xf6nderi olu\u015fturuyorsunuz. Bunu iptal edip yenisini olu\u015fturmak istiyor musunuz?",
          "timeline.alert.deletedpost": "Bu g\xf6nderi silindi.",
          "timeline.alert.discard": "At",
          "timeline.alert.error.group.delete":
            "Se\xe7ili olan Ortak Liste silinmi\u015f.\nL\xfctfen tekrar se\xe7in.",
          "timeline.alert.error.group.rights":
            "Se\xe7ili grup i\xe7in gerekli izne sahip de\u011filsiniz.\nL\xfctfen tekrar se\xe7in.",
          "timeline.alert.fileMaxcount":
            "En fazla %n foto\u011fraf veya video ekleyebilirsiniz.",
          "timeline.alert.fileMaxcount.plurals.other":
            "En fazla %n foto\u011fraf veya video ekleyebilirsiniz.",
          "timeline.alert.invalidcoverimage": "Bu dosya g\xf6nderilemez.",
          "timeline.alert.mediaMaxcount":
            "En fazla 20 sticker, foto\u011fraf veya video ekleyebilirsiniz.",
          "timeline.alert.official.addfriend":
            "Bu resmi hesab\u0131 arkada\u015f olarak eklerseniz,\nsticker ve yorum ekleyebilirsiniz.\nBu hesab\u0131 eklemek istiyor musunuz? ",
          "timeline.alert.official.addfriend.share":
            "Bu resmi hesab\u0131 arkada\u015f olarak eklerseniz onun g\xf6nderilerini arkada\u015flar\u0131n\u0131zla payla\u015fabilirsiniz. Bu hesap eklensin mi?",
          "timeline.alert.official.unblockfriend":
            "Resmi hesap engellendi.\nHesab\u0131n engelini kald\u0131r\u0131rsan\u0131z sticker ve yorum ekleyebilirsiniz.\nBu hesab\u0131n engelini kald\u0131rmak istiyor musunuz?",
          "timeline.alert.official.unblockfriend.share":
            "Bu resmi hesab\u0131 engellediniz.\nHesab\u0131n engelini kald\u0131r\u0131rsan\u0131z hesab\u0131n g\xf6nderilerini arkada\u015flar\u0131n\u0131zla payla\u015fabilirsiniz.\nBu hesab\u0131n engeli kald\u0131r\u0131ls\u0131n m\u0131?",
          "timeline.alert.photoMaxsize":
            "Boyutu 20 MB'ye kadar olan\nbir foto\u011fraf ekleyebilirsiniz.",
          "timeline.alert.photolimit":
            "Her foto\u011fraf i\xe7in en fazla 20 MB",
          "timeline.alert.photolimit.format": "(.jpg/.jpeg/.png/.bmp/.gif)",
          "timeline.alert.photomaxcount":
            "En fazla %1 foto\u011fraf ekleyebilirsiniz.",
          "timeline.alert.stickerMaxcount":
            "En fazla %n sticker ekleyebilirsiniz.",
          "timeline.alert.stickerMaxcount.plurals.other":
            "En fazla %n sticker ekleyebilirsiniz.",
          "timeline.alert.stickerUploadRule":
            "Her g\xf6nderiye yaln\u0131zca bir sesli sticker veya animasyonlu sticker eklenebilir. Bu sticker'lar normal sticker'larla birlikte eklenemez.",
          "timeline.alert.textmaxcount":
            "Maksimum karakter say\u0131s\u0131 10,000.",
          "timeline.alert.unblockfriend":
            "Bu hesab\u0131 engellediniz. Hesab\u0131n engelini kald\u0131r\u0131rsan\u0131z hesab\u0131n g\xf6nderilerini be\u011fenebilir ve yorum b\u0131rakabilirsiniz. Bu hesab\u0131n engeli kald\u0131r\u0131ls\u0131n m\u0131?",
          "timeline.alert.unblockfriend.share":
            "Bu hesab\u0131 engellediniz. Hesab\u0131n engelini kald\u0131r\u0131rsan\u0131z hesab\u0131n g\xf6nderilerini payla\u015fabilirsiniz. Bu hesab\u0131n engeli kald\u0131r\u0131ls\u0131n m\u0131?",
          "timeline.alert.urlUploadRule": "1 URL ekleyebilirsiniz.",
          "timeline.alert.videoMaxLength":
            "En \xe7ok 5 dakika uzunlu\u011funda olan\nbir video dosyas\u0131 ekleyebilirsiniz.",
          "timeline.alert.videoMaxsize":
            "Boyutu 200 MB'ye kadar olan her\nvideo dosyas\u0131n\u0131 ekleyebilirsiniz.",
          "timeline.alert.videolength":
            "5 dakikadan uzun video ekleyemezsiniz.",
          "timeline.alert.videolimit":
            "Her video i\xe7in en fazla 200 MB veya 5 dakika",
          "timeline.alert.videolimit.format":
            "(.mp4/.avi/.mkv/.mpg/.mpeg/.mov)",
          "timeline.alert.videosize":
            "Maksimum eklenti boyutu 200 MB'd\u0131r.\n",
          "timeline.alert.waitcommentdone":
            "L\xfctfen daha sonra tekrar deneyin.",
          "timeline.already.remove.comment": "Bu yorum silinmi\u015ftir",
          "timeline.attachlink.delete": "Sil",
          "timeline.attachlink.hint": "L\xfctfen URL girin.",
          "timeline.attachlink.title": "Ba\u011flant\u0131n\u0131n girin",
          "timeline.comment.approval":
            "Yorumlar Resmi Ana Sayfa y\xf6neticileri taraf\u0131ndan onayland\u0131ktan sonra g\xf6r\xfclebileceklerdir.",
          "timeline.comment.blinddbyadmin":
            "Bu mesaj servis y\xf6neticisi taraf\u0131ndan silinmi\u015ftir.",
          "timeline.comment.delete": "Sil",
          "timeline.comment.hint": "Yorum Yap giriniz",
          "timeline.comment.like": "Be\u011fen",
          "timeline.comment.like.cancel": "Be\u011fenme",
          "timeline.comment.loadprevious": "\xd6nceki Yorum Yap G\xf6ster",
          "timeline.comment.photo.retry":
            "G\xf6rsel y\xfcklenemedi.\nL\xfctfen tekrar deneyin.",
          "timeline.comment.reply": "Cevap yaz",
          "timeline.comment.stickerorphoto":
            "Yorumlar birden fazla sticker veya foto\u011fraf i\xe7eremez.",
          "timeline.comment.write": "G\xf6nderi",
          "timeline.common.cancel": "Iptal",
          "timeline.common.ok": "Tamam",
          "timeline.common.share": "Payla\u015f",
          "timeline.date.beforeHour.plurals.few": "%n saat \xf6nce",
          "timeline.date.beforeHour.plurals.many": "%n saat \xf6nce",
          "timeline.date.beforeHour.plurals.one": "%n saat \xf6nce",
          "timeline.date.beforeHour.plurals.other": "%n saat \xf6nce",
          "timeline.date.beforeHour.plurals.two": "%n saat \xf6nce",
          "timeline.date.beforeHour.plurals.zero": "%n saat \xf6nce",
          "timeline.date.beforeMinute.plurals.few": "%n dakika \xf6nce",
          "timeline.date.beforeMinute.plurals.many": "%n dakika \xf6nce",
          "timeline.date.beforeMinute.plurals.one": "%n dakika \xf6nce",
          "timeline.date.beforeMinute.plurals.other": "%n dakika \xf6nce",
          "timeline.date.beforeMinute.plurals.two": "%n dakika \xf6nce",
          "timeline.date.beforeMinute.plurals.zero": "%n dakika \xf6nce",
          "timeline.date.beforeYesterday": "2 g\xfcn \xf6nce %1 saatinde",
          "timeline.date.justNow": "Hemen \u015fimdi",
          "timeline.date.yesterday": "D\xfcn %1 saatinde",
          "timeline.emptypost.networkerror":
            "Bir ge\xe7ici hata nedeniyle iste\u011finiz i\u015fleme koyulamad\u0131. \nL\xfctfen tekrar deneyin.",
          "timeline.emptypost.other":
            "Hen\xfcz bir an payla\u015fmad\u0131n\u0131z.",
          "timeline.emptypost.unsupported":
            "Bu resmi hesap, yaln\u0131zca sohbet mesajlar\u0131 g\xf6nderir.",
          "timeline.error.and.retry":
            "Bir ge\xe7ici hata nedeniyle iste\u011finiz i\u015fleme koyulamad\u0131.\nL\xfctfen tekrar deneyin.",
          "timeline.error.attach.popupSticker":
            "Bu sticker animasyon veya ses olmadan statik sticker olarak eklenecek.",
          "timeline.error.cannot.access.file":
            "Unable to upload some of your photos because\nthe original photos were deleted from your PC\nor the maximum upload limit (20 MB) was reached.",
          "timeline.error.list.load.retry":
            "\xdczg\xfcn\xfcz! Bu bilgiyi y\xfckleyemedik.\nL\xfctfen tekrar deneyin.",
          "timeline.footer.comment": "Yorum Yap",
          "timeline.footer.like": "Be\u011fen",
          "timeline.groupPanel.startgroup": "Grup olu\u015ftur!",
          "timeline.groupPanel.startgroup.desc":
            "Notlar yazabilir ve alb\xfcmler olu\u015fturabilirsiniz.",
          "timeline.label.nosearchresult.title": "Sonu\xe7 bulunamad\u0131.",
          "timeline.like.count.other": "%1 be\u011feni",
          "timeline.loading.examine.time": "Bak\u0131m Program\u0131",
          "timeline.loading.examine.timeline":
            "%1 \u015fu anda bak\u0131mdad\u0131r.",
          "timeline.loading.neednewversion":
            "Bunu LINE'\u0131n son s\xfcr\xfcm\xfcnde g\xf6rebilirsiniz.",
          "timeline.loading.networkerror":
            "Bir ge\xe7ici hata nedeniyle iste\u011finiz i\u015fleme koyulamad\u0131.\nL\xfctfen tekrar deneyin.",
          "timeline.loading.retry": "Yenile",
          "timeline.menu.sharetotalk": "Sohbette payla\u015f",
          "timeline.mergedposts.detail": "Dahas\u0131",
          "timeline.no": "Hay\u0131r",
          "timeline.note.popupdesc.sharenote":
            "Bu not sohbette payla\u015f\u0131ls\u0131n m\u0131?",
          "timeline.noti.content.NC_1001_1": "%1 yeni bir not ekledi.",
          "timeline.noti.content.NC_1001_2": "%1 ve %2 yeni notlar ekledi.",
          "timeline.noti.content.NC_1001_3":
            "%1, %2 ve %3 ki\u015fi daha yeni notlar ekledi.",
          "timeline.noti.content.NC_1002_1":
            "%1 g\xf6nderinize yorum yapt\u0131.",
          "timeline.noti.content.NC_1002_2":
            "%1 ve %2 g\xf6nderinize yorum yapt\u0131.",
          "timeline.noti.content.NC_1002_3":
            "%1, %2 ve %3 ki\u015fi daha g\xf6nderinize yorum yapt\u0131.",
          "timeline.noti.content.NC_1003_1":
            "%1 bana bir yorum b\u0131rakt\u0131.",
          "timeline.noti.content.NC_1003_2":
            "%1, %2 bana yorum b\u0131rakt\u0131.",
          "timeline.noti.content.NC_1003_3":
            "%1, %2 ve %3 ki\u015fi daha bana yorum b\u0131rakt\u0131.",
          "timeline.noti.content.NC_1004_1": "%1, g\xf6nderinizi be\u011fendi.",
          "timeline.noti.content.NC_1004_2":
            "%1 ve %2 g\xf6nderinizi be\u011fendi.",
          "timeline.noti.content.NC_1004_3":
            "%1, %2 ve %3 ki\u015fi daha g\xf6nderinizi be\u011fendi.",
          "timeline.noti.content.NC_2001_1":
            "%1 yeni bir alb\xfcm olu\u015fturdu.",
          "timeline.noti.content.NC_2001_2":
            "%1, %2 yeni alb\xfcmler olu\u015fturdu.",
          "timeline.noti.content.NC_2001_3":
            "%1, %2 ve %3 ki\u015fi daha yeni alb\xfcm olu\u015fturdu.",
          "timeline.noti.content.NC_2002_1":
            "%1 bir alb\xfcme foto\u011fraf ekledi.",
          "timeline.noti.content.NC_2002_2":
            "%1, %2 bir alb\xfcme foto\u011fraf ekledi.",
          "timeline.noti.content.NC_2002_3":
            "%1, %2 ve %3 ki\u015fi daha bir alb\xfcme foto\u011fraf ekledi.",
          "timeline.noti.content.NC_3001_1":
            "%1 g\xf6nderinize yorum yapt\u0131.",
          "timeline.noti.content.NC_3001_2":
            "%1 ve %2 g\xf6nderinize yorum yapt\u0131.",
          "timeline.noti.content.NC_3001_3":
            "%1, %2 ve %3 ki\u015fi daha g\xf6nderinize yorum yapt\u0131.",
          "timeline.noti.content.NC_3002_1":
            "%1 bana bir yorum b\u0131rakt\u0131.",
          "timeline.noti.content.NC_3002_2":
            "%1, %2 bana yorum b\u0131rakt\u0131.",
          "timeline.noti.content.NC_3002_3":
            "%1, %2 ve %3 ki\u015fi daha bana yorum b\u0131rakt\u0131.",
          "timeline.noti.content.NC_3003_1": "%1, g\xf6nderinizi be\u011fendi.",
          "timeline.noti.content.NC_3003_2":
            "%1 ve %2 g\xf6nderinizi be\u011fendi.",
          "timeline.noti.content.NC_3003_3":
            "%1, %2 ve %3 ki\u015fi daha g\xf6nderinizi be\u011fendi.",
          "timeline.noti.content.NC_4001_1": "%1 grubunuza kat\u0131ld\u0131.",
          "timeline.noti.content.NC_4002_1": "%1 g\xf6nderimi payla\u015ft.",
          "timeline.noti.content.NC_UPDATE":
            "Bu bildirimi g\xf6rmek i\xe7in LINE uygulamas\u0131n\u0131 g\xfcncelleyin.",
          "timeline.noti.empty": "Yeni Bildirim Yok.",
          "timeline.noti.error":
            "Bildirimler y\xfcklenemedi.\nL\xfctfen daha sonra tekrar deneyin. ",
          "timeline.noti.home": "Home",
          "timeline.oamerge.feed.title": "Resmi hesaplar\u0131n\u0131z",
          "timeline.oamerge.title": "Resmi hesaplar\u0131n\u0131z",
          "timeline.officialprofile.networkerror":
            "Bir ge\xe7ici hata nedeniyle iste\u011finiz i\u015fleme koyulamad\u0131.\nL\xfctfen tekrar deneyin.",
          "timeline.officialprofile.title": "Profil",
          "timeline.original.open": "Orijinal Sayfaya Bak\u0131n",
          "timeline.poppost.counttime.hour.other": "%n saat kald\u0131",
          "timeline.poppost.counttime.hour.plurals.few": "%n saat kald\u0131",
          "timeline.poppost.counttime.hour.plurals.many": "%n saat kald\u0131",
          "timeline.poppost.counttime.hour.plurals.one": "%n saat kald\u0131",
          "timeline.poppost.counttime.hour.plurals.other": "%n saat kald\u0131",
          "timeline.poppost.counttime.hour.plurals.two": "%n saat kald\u0131",
          "timeline.poppost.counttime.hour.plurals.zero": "%n saat kald\u0131",
          "timeline.poppost.counttime.min.other": "%n dakika kald\u0131",
          "timeline.poppost.counttime.min.plurals.few": "%n dakika kald\u0131",
          "timeline.poppost.counttime.min.plurals.many": "%n dakika kald\u0131",
          "timeline.poppost.counttime.min.plurals.one": "%n dakika kald\u0131",
          "timeline.poppost.counttime.min.plurals.other":
            "%n dakika kald\u0131",
          "timeline.poppost.counttime.min.plurals.two": "%n dakika kald\u0131",
          "timeline.poppost.counttime.min.plurals.zero": "%n dakika kald\u0131",
          "timeline.poppost.counttime.soon": "1 dakika kald\u0131",
          "timeline.poppost.tooltip.hour.other":
            "Bu g\xf6nderi %n saat i\xe7inde silinecek.",
          "timeline.poppost.tooltip.hour.plurals.few":
            "Bu g\xf6nderi %n saat i\xe7inde silinecek.",
          "timeline.poppost.tooltip.hour.plurals.many":
            "Bu g\xf6nderi %n saat i\xe7inde silinecek.",
          "timeline.poppost.tooltip.hour.plurals.one":
            "Bu g\xf6nderi %n saat i\xe7inde silinecek.",
          "timeline.poppost.tooltip.hour.plurals.other":
            "Bu g\xf6nderi %n saat i\xe7inde silinecek.",
          "timeline.poppost.tooltip.hour.plurals.two":
            "Bu g\xf6nderi %n saat i\xe7inde silinecek.",
          "timeline.poppost.tooltip.hour.plurals.zero":
            "Bu g\xf6nderi %n saat i\xe7inde silinecek.",
          "timeline.poppost.tooltip.min.other":
            "Bu g\xf6nderi %n dakika i\xe7inde silinecek.",
          "timeline.poppost.tooltip.min.plurals.few":
            "Bu g\xf6nderi %n dakika i\xe7inde silinecek.",
          "timeline.poppost.tooltip.min.plurals.many":
            "Bu g\xf6nderi %n dakika i\xe7inde silinecek.",
          "timeline.poppost.tooltip.min.plurals.one":
            "Bu g\xf6nderi %n dakika i\xe7inde silinecek.",
          "timeline.poppost.tooltip.min.plurals.other":
            "Bu g\xf6nderi %n dakika i\xe7inde silinecek.",
          "timeline.poppost.tooltip.min.plurals.two":
            "Bu g\xf6nderi %n dakika i\xe7inde silinecek.",
          "timeline.poppost.tooltip.min.plurals.zero":
            "Bu g\xf6nderi %n dakika i\xe7inde silinecek.",
          "timeline.poppost.tooltip.soon":
            "Bu g\xf6nderi 1 dakika i\xe7inde silinecek.",
          "timeline.post.attach.drag.guide":
            "Foto\u011fraf ve video eklemek i\xe7in s\xfcr\xfckleyip b\u0131rakabilirsiniz.",
          "timeline.post.attach.drag.guide.premium":
            "Foto\u011fraf eklemek i\xe7in s\xfcr\xfckleyip b\u0131rakabilirsiniz.",
          "timeline.post.attach.draghere":
            "Foto\u011fraf ve video eklemek i\xe7in s\xfcr\xfckleyip b\u0131rak\u0131n.",
          "timeline.post.attach.draghere.premium":
            "Foto\u011fraf eklemek i\xe7in s\xfcr\xfckleyip b\u0131rak\u0131n.",
          "timeline.post.delete": "Sil",
          "timeline.post.deleted": "Bu g\xf6nderi silinmi\u015f.",
          "timeline.post.deletedbyadmin":
            "Bu mesaj, servis y\xf6neticisi taraf\u0131ndan silinmi\u015ftir.",
          "timeline.post.done": "Bitti",
          "timeline.post.edit": "D\xfczenle",
          "timeline.post.edit.desc":
            "Notunuzda kaydedilmemi\u015f de\u011fi\u015fiklikler var. Kaydetmeden ayr\u0131lmak istiyor musunuz?",
          "timeline.post.friends":
            "%1 adl\u0131 ki\u015finin LINE arkada\u015flar\u0131",
          "timeline.post.friends.detail":
            "Bu g\xf6nderi okunabilir yaln\u0131zca %1 adl\u0131 ki\u015finin LINE arkada\u015flar\u0131 taraf\u0131ndan.\n",
          "timeline.post.grid.more": "+%n",
          "timeline.post.hashtag": "Hashtag'ler",
          "timeline.post.hashtag.guide.title": "#Etiketler eklemeyi deneyin!",
          "timeline.post.hashtag.results.related": "\u0130lgili",
          "timeline.post.hint": "Yenilikler",
          "timeline.post.keep": "Tut",
          "timeline.post.likeshare.cancel":
            "Payla\u015f\u0131m\u0131 \u0130ptal Et",
          "timeline.post.likeshare.canceled":
            "G\xf6nderi payla\u015f\u0131m\u0131 iptal edildi.",
          "timeline.post.likeshare.done":
            "Zaten be\u011fenildi ve payla\u015f\u0131ld\u0131. ",
          "timeline.post.mention.alert":
            "20 ki\u015fiye kadar g\xf6nderim yapabilirsiniz.",
          "timeline.post.mention.empty.description":
            "\"<![CDATA[Arkada\u015flar\u0131n\u0131zdan bahsetmek i\xe7in <font color='#4166b1'>@arkada\u015f\u0131n ad\u0131n\u0131</font> yaz\u0131n.\nBu arkada\u015flar hemen bir bildirim al\u0131r ve g\xf6nderinizi g\xf6r\xfcr.]]>\"",
          "timeline.post.mention.empty.title":
            "@ sembol\xfcn\xfc kullanarak arkada\u015flar\u0131n\u0131zdan bahsedin!",
          "timeline.post.mention.setting.edit.alert":
            "Bu g\xf6nderinin gizlilik ayarlar\u0131n\u0131 de\u011fi\u015ftirirseniz, \u015fu kullan\u0131c\u0131lar bu g\xf6nderiyi art\u0131k g\xf6remeyecek. Devam edilsin mi?",
          "timeline.post.newpost": "Yeni G\xf6nderiler",
          "timeline.post.onlyme": "Yaln\u0131zca Ben",
          "timeline.post.public": "Genel",
          "timeline.post.public.desc":
            "Genel g\xf6nderiler herkes taraf\u0131ndan g\xf6r\xfclebilir.",
          "timeline.post.public.sharetotimeline": "Timeline'da Payla\u015f",
          "timeline.post.scope.group":
            "Bu not, yaln\u0131zca bu grubun \xfcyeleri taraf\u0131ndan g\xf6r\xfclebilir.",
          "timeline.post.scope.manToMan":
            "Bu not, yaln\u0131zca sizin taraf\u0131n\u0131zdan ve %1 taraf\u0131ndan g\xf6r\xfclebilir.",
          "timeline.post.seemore": "Daha Fazla Bilgi",
          "timeline.post.share": "Payla\u015f",
          "timeline.post.sharedchanged":
            "Orijinal g\xf6nderiye ili\u015fkin gizlilik ayarlar\u0131 de\u011fi\u015ftirildi\u011fi i\xe7in bu g\xf6nderi g\xf6r\xfcnt\xfclenemez.",
          "timeline.post.shareddeleted":
            "Bu g\xf6nderi silindi veya onu yay\u0131nlayan ki\u015fi art\u0131k LINE kullanm\u0131yor.",
          "timeline.post.sorting.option.ranking": "Sort by ranking",
          "timeline.post.sorting.option.time": "Sort by time received",
          "timeline.post.write": "G\xf6nderi",
          "timeline.publicgroup.emptymember":
            "Hi\xe7 arkada\u015f eklemediniz.",
          "timeline.publicgroup.group": "Gruplar",
          "timeline.publicgroup.group.empty": "Grup listesi yok.",
          "timeline.publicgroup.linefriends": "Arkada\u015flar",
          "timeline.publicgroup.linefriends.desc":
            "Home'umu g\xf6rebilen arkada\u015flar\u0131m g\xf6rebilir",
          "timeline.publicgroup.nobodysee":
            "Bu g\xf6nderiyi hi\xe7 kimse g\xf6remez.",
          "timeline.publicgroup.sharelist": "Y\xf6net",
          "timeline.publicgroup.title.detail":
            "Bu g\xf6nderiyi kim g\xf6rebilir?",
          "timeline.publicgroup.title.post":
            "G\xf6nderilere ili\u015fkin Gizlilik Ayarlar\u0131",
          "timeline.recommend": "Tavsiye",
          "timeline.report.desc":
            "\u015eikayette bulunuldu\u011funda ilgili kullan\u0131c\u0131n\u0131n detaylar\u0131, kullan\u0131c\u0131yla olan son 100 sohbet mesaj\u0131n\u0131z veya s\xf6z konusu g\xf6nderi g\xf6nderilir.",
          "timeline.report.done": "\u015eikayet G\xf6nderildi!",
          "timeline.report.reason.advertising": "Reklam",
          "timeline.report.reason.genderHarassment": "Cinsel taciz",
          "timeline.report.reason.harassment": "Taciz",
          "timeline.report.reason.other": "Di\u011fer",
          "timeline.report.selectReason":
            "L\xfctfen \u015fikayet sebebinizi a\xe7\u0131klay\u0131n.",
          "timeline.report.title": "\u015eikayet et",
          "timeline.request.failed.likeshare.status":
            "Payla\u015f\u0131m durumu y\xfcklenemedi.",
          "timeline.request.failed.timeline": "Bu g\xf6nderi y\xfcklenemiyor.",
          "timeline.request.failed.url":
            "URL bilgileri y\xfcklenemedi.\nL\xfctfen tekrar deneyin.",
          "timeline.request.failed.user":
            "Aucun utilisateur correspondant n'a \xe9t\xe9 trouv\xe9.",
          "timeline.retry": "Tekrar Dene",
          "timeline.setting.autoopen":
            "Yeni arkada\u015flarla otomatik olarak payla\u015f",
          "timeline.setting.buddylist.empty":
            "Hen\xfcz LINE arkada\u015f\u0131n\u0131z yok.",
          "timeline.setting.desc": "Gizlilik ayarlar\u0131",
          "timeline.setting.desc2":
            "Home'da payla\u015f\u0131l\u0131p payla\u015f\u0131lmayaca\u011f\u0131n\u0131 se\xe7in.",
          "timeline.setting.feed.ranking": "G\xf6nderi S\u0131ras\u0131",
          "timeline.setting.feed.ranking.option":
            "\xd6nce pop\xfcler g\xf6nderileri g\xf6ster",
          "timeline.setting.label.blocked": "Gizli",
          "timeline.setting.label.unblocked": "G\xf6sterilen",
          "timeline.setting.usetoast":
            "LINE VOOM g\xfcncellemeleri i\xe7in bildirim g\xf6nder",
          "timeline.share.copyUrl": "Ba\u011flant\u0131y\u0131 kopyala",
          "timeline.share.copyUrl.toast":
            "Ba\u011flant\u0131 panoya kopyaland\u0131.",
          "timeline.sharetohome.hint": "\u0130lave yorumunuzu buraya girin",
          "timeline.sharetotalk.comfirm.desc":
            '"%1" adl\u0131 sohbete g\xf6nderilsin mi?',
          "timeline.sharetotalk.empty.chat":
            "Hay\u0131r se\xe7ilebilir sohbetler.",
          "timeline.sharetotalk.empty.friend":
            "Se\xe7ebilece\u011finiz bir arkada\u015f\u0131n\u0131z yok.",
          "timeline.sharetotalk.empty.group":
            "Hay\u0131r se\xe7ilebilir gruplar",
          "timeline.sharetotalk.tab.chat": "Sohbet",
          "timeline.sharetotalk.tab.friend": "Arkada\u015flar",
          "timeline.sharetotalk.tab.group": "Gruplar",
          "timeline.sharetotalk.title": "Sohbette payla\u015f",
          "timeline.system.check.wait":
            "Bu \xf6zelli\u011fe \u015fu anda bak\u0131m yap\u0131l\u0131yor.\nL\xfctfen daha sonra tekrar deneyin.",
          "timeline.time.afternoon": "PM",
          "timeline.time.morning": "AM",
          "timeline.video.popup.waiting":
            "Kodlama devam ediyor.\nL\xfctfen daha sonra tekrar deneyin.",
          "timeline.yes": "Evet",
          "timline.report.policy.desc":
            "Bir sohbet veya g\xf6nderi i\xe7in \u015fikayette bulunuldu\u011funda ilgili kullan\u0131c\u0131n\u0131n bilgileri, kullan\u0131c\u0131yla olan son 20 sohbet mesaj\u0131n\u0131z veya s\xf6z konusu g\xf6nderiyle birlikte g\xf6nderilir.",
          "unsupported.file.checkbox":
            "Her zaman s\u0131k\u0131\u015ft\u0131r ve\xa0g\xf6nder",
          "unsupported.file.common":
            "Desteklenmeyen formatlardaki dosyalar s\u0131k\u0131\u015ft\u0131r\u0131l\u0131p zip format\u0131nda g\xf6nderilir.",
          "unsupported.file.compress.fail":
            "Dosyan\u0131z zip ile s\u0131k\u0131\u015ft\u0131r\u0131lamad\u0131. L\xfctfen tekrar deneyin.",
          "unsupported.file.compressing":
            "Zip dosyas\u0131 olu\u015fturuluyor... ",
          "unsupported.file.dontshow": "Tekrar g\xf6sterme",
          "unsupported.file.multi":
            "Baz\u0131 dosyalar desteklenmeyen bir bi\xe7ime sahip. Zip ile s\u0131k\u0131\u015ft\u0131r\u0131l\u0131p g\xf6nderilsin mi?",
          "unsupported.file.single":
            "Dosya desteklenmeyen bir bi\xe7ime sahip. Zip ile s\u0131k\u0131\u015ft\u0131r\u0131l\u0131p g\xf6nderilsin mi?",
          "update.msg.check.security1":
            "G\xfcvenlik kontrol\xfc yap\u0131l\u0131yor.",
          "update.msg.check.security2": "L\xfctfen bekleyin.",
          "update.summary.url":
            "http://openapis.jboard.naver.jp/mobile/document/line_desktop/TR/7284",
          "upgradegroupinvite.button.requireinvites": "Daveti zorunlu tut",
          "upgradegroupinvite.popup.desc.toomanyfriends":
            "100'den fazla \xfcyesi olan gruplarda, yeni \xfcyelerin kat\u0131lmak i\xe7in \xf6ncelikle daveti kabul etmeleri gerekir.\nBu ayar\u0131 kapal\u0131 tutmak i\xe7in grubunuzu en fazla 100 \xfcyeyle s\u0131n\u0131rlay\u0131n.",
          "upgradegroupinvite.popup.title.toomanyfriends":
            "\xdcyelerin kat\u0131lmak i\xe7in daveti kabul etmeleri zorunlu tutulsun mu?",
          "upic.btn.cancel.title": "Iptal",
          "upic.btn.find.title": "Taray\u0131c\u0131",
          "upic.btn.ok.title": "Tamam",
          "upic.label.desc.title":
            "Yaln\u0131zca jpg, jpeg, png, gif, ve bmp dosyalar\u0131\nkar\u015f\u0131ya y\xfcklenebilir.",
          "upic.label.upic.title": "Profil foto\u011fraf\u0131 kaydol",
          "upic.msg.cantFindFile": "Dosya bulunam\u0131yor.",
          "upic.msg.not.image":
            "Yaln\u0131zca Resim dosyas\u0131 g\xf6nderilebilir.",
          "upic.msg.select": "Profil foto\u011fraf\u0131 se\xe7",
          "upic.msg.sizeExceeds": "Maksimum g\xf6rsel boyutu 20MB.",
          "user.report.error":
            "Bu mesaj art\u0131k mevcut olmad\u0131\u011f\u0131 i\xe7in \u015fikayet edilemiyor.",
          "user.report.policy.desc":
            "\u015eikayette bulunuldu\u011funda ilgili kullan\u0131c\u0131n\u0131n detaylar\u0131, kullan\u0131c\u0131yla olan son 10 sohbet mesaj\u0131n\u0131z veya s\xf6z konusu g\xf6nderi g\xf6nderilir.",
          "user.report.question": "Bu kullan\u0131c\u0131 engellensin mi?",
          "user.search.placeholder": "\u0130sme G\xf6re Ara",
          "user.warning.investmentfraud":
            "LINE'da sahtekarl\u0131\u011fa kar\u015f\u0131 dikkatli olun.",
          "user.warning.invitedtogroup":
            "<![CDATA[<b><font color='%1'>%2</font></b> sizi bir gruba davet etti.\n<font color='#FF3A44'>Bu ki\u015fiyi tan\u0131m\u0131yor musunuz? \u0130sterseniz engelleyebilir ya da \u015fikayet edebilirsiniz.</font>]]>",
          "user.warning.spammer":
            "Bu kullan\u0131c\u0131 hen\xfcz arkada\u015f\u0131n\u0131z de\u011fil.",
          "user.warning.spammer.group":
            "%1 taraf\u0131ndan bir gruba davet edildiniz. \u015eikayet Et d\xfc\u011fmesine t\u0131klayarak bu ki\u015fiyi \u015f\xfcpheli etkinlikler i\xe7in \u015fikayet edebilirsiniz.",
          "videoProfile.error.fileType":
            "Profil videolar\u0131nda bu dosya bi\xe7imi kullan\u0131lamaz. L\xfctfen tekrar deneyin.",
          "videoProfile.error.lessThenOneSec":
            "Profil videonuz en az 1 saniye olmal\u0131d\u0131r. L\xfctfen tekrar deneyin.",
          "viewer.alert.desc.delete": "Silinsin mi?",
          "viewer.alert.desc.fullsize":
            "Tam ekrandan \xe7\u0131kmak i\xe7in Esc tu\u015funa bas\u0131n.",
          "viewer.alert.desc.mustinstallplugin":
            "Foto\u011fraf, video ve GIF dosyalar\u0131n\u0131 medya g\xf6r\xfcnt\xfcleyicide g\xf6r\xfcnt\xfclemek i\xe7in bir eklenti gerekiyor. \u015eimdi indirilsin mi?",
          "viewer.alert.image.expired.previewinstead":
            "Dosyan\u0131n kendisi art\u0131k mevcut olmad\u0131\u011f\u0131 i\xe7in yaln\u0131zca dosya k\xfc\xe7\xfck resmini g\xf6r\xfcnt\xfcleyebilirsiniz.",
          "viewer.alert.video.expired":
            "Depolama s\xfcresi a\u015f\u0131ld\u0131\u011f\u0131ndan dolay\u0131 bu video tekrar oynat\u0131lamaz.",
          "viewer.contextmenu.copy": "Kopyala",
          "viewer.contextmenu.forward": "Payla\u015f",
          "viewer.contextmenu.keep": "Keep'e Kaydet",
          "viewer.contextmenu.keepmemo": "Keep Memo'ya g\xf6nder",
          "viewer.contextmenu.saveas": "Olarak kaydet\u2026",
          "viewer.contextmenu.scanqr": "QR kodunu tara",
          "viewer.contextmenu.scantext": "Metni tara",
          "viewer.copy.toast.copied": "Panoya kopyaland\u0131.",
          "viewer.error.media.download.fail":
            "Bu dosya kaydedilemedi.\nL\xfctfen tekrar deneyin.",
          "viewer.error.video.common":
            "Ge\xe7ici bir hatadan dolay\u0131 oynat\u0131lam\u0131yor.",
          "viewer.error.video.network":
            "A\u011f veya sunucu hatas\u0131ndan dolay\u0131 oynat\u0131lam\u0131yor.\nL\xfctfen tekrar deneyin.",
          "viewer.error.video.transient":
            "Ge\xe7ici bir hatadan dolay\u0131 oynat\u0131lam\u0131yor.\nL\xfctfen tekrar deneyin.",
          "viewer.keep.toast.saved": "Keep'e kaydedildi.",
          "viewer.menu.edit": "D\xfczenle",
          "viewer.menu.forward": "Payla\u015f",
          "viewer.menu.info.name": "Dosya ad\u0131",
          "viewer.menu.keep": "Keep'e Kaydet",
          "viewer.menu.keepmemo": "Keep Memo'ya g\xf6nder",
          "viewer.menu.more.delete": "Sil",
          "viewer.menu.more.info": "Dosya ayr\u0131nt\u0131lar\u0131",
          "viewer.menu.more.speed": "H\u0131z",
          "viewer.menu.openfolder": "Klas\xf6r A\xe7",
          "viewer.menu.originalsize": "Ger\xe7ek boyut",
          "viewer.menu.rotate": "90 Derece D\xf6nd\xfcr",
          "viewer.menu.saveas": "Olarak kaydet\u2026",
          "viewer.menu.scanqr": "QR kodunu tara",
          "viewer.menu.scantext": "Metni tara",
          "viewer.menu.showalbums": "T\xfcm \xf6\u011feleri g\xf6ster",
          "viewer.menu.showallcontents": "T\xfcm \xf6\u011feleri g\xf6ster",
          "viewer.menu.thumbnail.expand": "K\xfc\xe7\xfck resimleri g\xf6ster",
          "viewer.menu.thumbnail.fold": "K\xfc\xe7\xfck resimleri gizle",
          "viewer.menu.video.pause": "Duraklat",
          "viewer.menu.video.play": "Oynatma",
          "viewer.menu.video.replay": "Yeniden Oynat",
          "viewer.menu.video.stop": "Durak",
          "viewer.menu.video.volume": "Ses d\xfczeyi",
          "viewer.menu.zoomin": "Yak\u0131nla\u015ft\u0131r",
          "viewer.menu.zoomout": "Uzakla\u015ft\u0131r",
          "viewer.play.toast.speaker.beingconnected":
            "Yeni bir hoparl\xf6re ge\xe7iliyor. L\xfctfen biraz bekleyin.",
          "viewer.popup.info.created": "Olu\u015fturuldu",
          "viewer.popup.info.filesize": "Dosya Boyutu",
          "viewer.popup.info.from": "Kaynak:",
          "viewer.popup.info.resolution": "\xc7\xf6z\xfcn\xfcrl\xfck",
          "viewer.popup.info.saved": "Kaydedildi",
          "viewer.saveas.toast.saved": "\u0130ndirme tamamland\u0131.",
          "viewer.tooltip.window.close": "Kapat",
          "viewer.tooltip.window.maximize": "Maksimum",
          "viewer.tooltip.window.minimize": "K\xfc\xe7\xfclt",
          "viewer.tooltip.window.restore": "Yenile",
          "voip.beautyfeature.button.clearall": "S\u0131f\u0131rla",
          "voip.beautyfeature.popupbutton.cancel": "\u0130ptal",
          "voip.beautyfeature.popupbutton.clearall": "T\xfcm\xfcn\xfc temizle",
          "voip.beautyfeature.popupdesc.clearfaceeffects":
            "G\xfczellik \xf6zelli\u011fini kullanmak i\xe7in t\xfcm y\xfcz efektlerini temizlemeniz gerekir. T\xfcm efektler temizlensin mi?",
          "voip.beautyfeature.toggle.darkeneyebrows":
            "Ka\u015flar\u0131 koyula\u015ft\u0131r",
          "voip.beautyfeature.toggle.fillinlips": "Dudaklar\u0131 doldur",
          "voip.beautyfeature.toggle.resizeeyes": "G\xf6zleri b\xfcy\xfct",
          "voip.beautyfeature.toggle.revert": "Ayar\u0131 s\u0131f\u0131rla",
          "voip.beautyfeature.toggle.slimjawline": "\xc7eneyi incelt",
          "voip.beautyfeature.toggle.slimnose": "Burnu incelt",
          "voip.beautyfeature.toggle.smoothcomplexion":
            "Cildi p\xfcr\xfczs\xfczle\u015ftir",
          "voip.button.label.call": "Cevap",
          "voip.button.label.disconnect": "Bitti",
          "voip.button.label.voiceonly": "Sadece Sesli Cevapla",
          "voip.call.tooltip.cameraunavailable":
            "Kamera kullan\u0131lam\u0131yor",
          "voip.call.tooltip.microphoneunavailable":
            "Mikrofon kullan\u0131lam\u0131yor",
          "voip.connect.camera.alert":
            "Kamera alg\u0131land\u0131. Kameran\u0131z a\xe7\u0131ls\u0131n m\u0131?",
          "voip.connect.mic.alert":
            "Mikrofon alg\u0131land\u0131. Mikrofonunuz a\xe7\u0131ls\u0131n m\u0131?",
          "voip.desc.calling": "Aran\u0131yor...",
          "voip.desc.calling.failed":
            "%1Arama yap\u0131lamad\u0131. L\xfctfen daha sonra tekrar deneyin.(%2)",
          "voip.desc.calling.failed.accept.other.device":
            "\u015eu anda bir ba\u015fka cihazdan arama yap\u0131yorsunuz.",
          "voip.desc.calling.failed.contact.busy":
            "%1 \u015fu an me\u015fgul.\nL\xfctfen daha sonra tekrar deneyin.",
          "voip.desc.calling.failed.maintance":
            "LINE Bilgisayar s\xfcr\xfcm\xfcndeki Sesli Arama \xf6zelli\u011fi\nge\xe7ici olarak kullan\u0131lam\u0131yor.\nVerdi\u011fimiz rahats\u0131zl\u0131ktan dolay\u0131 \xf6z\xfcr dileriz.",
          "voip.desc.calling.failed.need.audio":
            "Ses kart\u0131 bulunamad\u0131.\nL\xfctfen kontrol edin ve tekrar deneyin.",
          "voip.desc.calling.failed.need.device":
            "Mikrofon/hoparl\xf6r bulunamad\u0131.\nL\xfctfen ba\u011flant\u0131lar\u0131n\u0131 yap\u0131n ve tekrar deneyin.",
          "voip.desc.calling.failed.need.devicesetting":
            "Mikrofonunuz veya hoparl\xf6r\xfcn\xfcz kapal\u0131. L\xfctfen ayarlar\u0131n\u0131z\u0131 kontrol edin ve tekrar aramay\u0131 deneyin.",
          "voip.desc.calling.failed.need.mic":
            "Mikrofon bulunamad\u0131.\nL\xfctfen kontrol edin ve tekrar deneyin.",
          "voip.desc.calling.failed.need.oscamera":
            "Kamera kullan\u0131lam\u0131yor. L\xfctfen cihaz\u0131n\u0131z\u0131n kameraya eri\u015fmesine izin verin.",
          "voip.desc.calling.failed.need.osmic":
            "Mikrofon kullan\u0131lam\u0131yor. L\xfctfen cihaz\u0131n\u0131z\u0131n mikrofona eri\u015fmesine izin verin.",
          "voip.desc.calling.failed.need.ospeaker":
            "Hoparl\xf6r kullan\u0131lam\u0131yor. L\xfctfen Denetim Masas\u0131'ndan mikrofonunuzu etkinle\u015ftirin.",
          "voip.desc.calling.failed.need.spk":
            "Hoparl\xf6r bulunamad\u0131.\nL\xfctfen kontrol edin ve tekrar deneyin.",
          "voip.desc.calling.failed.need.update":
            "Ak\u0131ll\u0131 telefonunuzdaki LINE uygulamas\u0131n\u0131 g\xfcncellerseniz\nsesli Arama \xf6zelli\u011fini Bilgisayar s\xfcr\xfcm\xfcnde kullanabilirsiniz\n",
          "voip.desc.calling.failed.no.accept":
            "Cevab\u0131 yok.\nL\xfctfen daha sonra tekrar deneyin.",
          "voip.desc.calling.failed.other.device.use":
            "\u015eu anda bir ba\u015fka cihazdan arama yap\u0131yorsunuz.",
          "voip.desc.calling.failed.peer":
            "Ba\u011flant\u0131 Hatas\u0131\n%1 LINE'\u0131n uyumlu versiyonuna sahip olmad\u0131\u011f\u0131ndan dolay\u0131 sizden gelen aramay\u0131 kabul edemiyor.\n",
          "voip.desc.calling.video":
            "G\xf6r\xfcnt\xfcl\xfc arama yap\u0131l\u0131yor",
          "voip.desc.camerausage":
            "LINE'\u0131n g\xf6r\xfcnt\xfcl\xfc aramalar ba\u015flatmak i\xe7in kameran\u0131za eri\u015fmesi gerekiyor.",
          "voip.desc.camerausage.maconly":
            "G\xf6r\xfcnt\xfcl\xfc arama ba\u015flatmak i\xe7in LINE'\u0131n Sistem Tercihleri > G\xfcvenlik ve Gizlilik > Gizlilik b\xf6l\xfcm\xfcnden kameraya eri\u015fmesi gerekiyor.",
          "voip.desc.connecting": "Ba\u011flan\u0131yor...",
          "voip.desc.makeCall.Failed.network":
            "Arama zay\u0131f ba\u011flant\u0131dan dolay\u0131 yap\u0131lamad\u0131.\nSonra tekrar deneyiniz.",
          "voip.desc.mic.failed":
            "Mikrofonunuzla ilgili bir sorun var gibi g\xf6r\xfcn\xfcyor. Aramadaki kimse sesinizi duyam\u0131yorsa mikrofonunuzu kontrol edin.",
          "voip.desc.microphoneusage":
            "LINE'\u0131n sesli ve g\xf6r\xfcnt\xfcl\xfc aramalar ba\u015flatmak i\xe7in mikrofonunuza eri\u015fmesi gerekiyor.",
          "voip.desc.microphoneusage.maconly":
            "Sesli ve g\xf6r\xfcnt\xfcl\xfc arama ba\u015flatmak i\xe7in LINE'\u0131n Sistem Tercihleri > G\xfcvenlik ve Gizlilik > Gizlilik b\xf6l\xfcm\xfcnden mikrofona eri\u015fmesi gerekiyor.",
          "voip.desc.ringing": "Gelen arama...",
          "voip.desc.ringing.video":
            "G\xf6r\xfcnt\xfcl\xfc araman\u0131z var\u2026",
          "voip.desc.speaker.failed":
            "Hoparl\xf6r\xfcn\xfczle ilgili bir sorun var gibi g\xf6r\xfcn\xfcyor. Ses duyam\u0131yorsan\u0131z hoparl\xf6r\xfcn\xfcz\xfc kontrol edin.",
          "voip.disconnect.camera.entry.alert":
            "G\xf6r\xfcnt\xfcl\xfc aramaya kat\u0131lmak istiyor musunuz? Kameran\u0131z alg\u0131lanamad\u0131\u011f\u0131 i\xe7in g\xf6r\xfcnt\xfcn\xfcz g\xf6r\xfcnmeyecek.",
          "voip.disconnect.camera.error":
            "Kameran\u0131z alg\u0131lanmad\u0131\u011f\u0131 i\xe7in bu \xf6zellik kullan\u0131lam\u0131yor.",
          "voip.disconnect.mic.entry.alert":
            "G\xf6r\xfcnt\xfcl\xfc aramaya kat\u0131lmak istiyor musunuz? Mikrofonunuz alg\u0131lanamad\u0131\u011f\u0131 i\xe7in sesiniz duyulmayacak.",
          "voip.disconnect.mic.entry.alert.audio":
            "Sesli aramaya kat\u0131lmak istiyor musunuz? Mikrofonunuz alg\u0131lanamad\u0131\u011f\u0131 i\xe7in sesiniz duyulmayacak.",
          "voip.disconnect.mic.error":
            "Mikrofonunuz alg\u0131lanmad\u0131\u011f\u0131 i\xe7in bu \xf6zellik kullan\u0131lam\u0131yor.",
          "voip.disconnect.micncam.entry.alert":
            "G\xf6r\xfcnt\xfcl\xfc aramaya kat\u0131lmak istiyor musunuz? Mikrofonunuz ve kameran\u0131z alg\u0131lanamad\u0131\u011f\u0131 i\xe7in sesiniz ve g\xf6r\xfcnt\xfcn\xfcz payla\u015f\u0131lmayacak.",
          "voip.effect.guide.adjust.effect":
            "G\xfczellik efektini ayarlay\u0131n.",
          "voip.effect.guide.detect.face":
            "Y\xfcz\xfcn\xfcz\xfcn net bir \u015fekilde g\xf6r\xfcnd\xfc\u011f\xfcnden emin olun.",
          "voip.effect.guide.extra.001":
            "Bu efekti arkada\u015flar\u0131n\u0131zla birlikte deneyin.",
          "voip.effect.guide.extra.006":
            "Ba\u015f\u0131n\u0131z\u0131 sola ve sa\u011fa sallay\u0131n.",
          "voip.effect.guide.extra.011": "G\xfclen y\xfcz yap\u0131n.",
          "voip.effect.guide.extra.012":
            "Efektlerin yo\u011funlu\u011funu ayarlamak i\xe7in ayar d\xfc\u011fmesini s\xfcr\xfckleyin.",
          "voip.effect.guide.eye.blink": "G\xf6zlerinizi k\u0131rp\u0131n.",
          "voip.effect.guide.mouth.open":
            "A\u011fz\u0131n\u0131z\u0131 a\xe7\u0131n.",
          "voip.error.init.failed.callee":
            "[%1 kullan\u0131c\u0131s\u0131 sizi ar\u0131yor]\nBilgisayar\u0131n\u0131z\u0131n mevcut durumundan dolay\u0131 arama yapmak\nuygulaman\u0131n kapanmas\u0131na sebep olabilir.",
          "voip.error.init.failed.caller":
            "Bilgisayar\u0131n\u0131z\u0131n mevcut durumundan dolay\u0131 arama yapmak\nuygulaman\u0131n kapanmas\u0131na sebep olabilir.",
          "voip.label.create.title": "Sesli arama",
          "voip.label.mic": "Mikrofon",
          "voip.label.speaker": "Hoparl\xf6r",
          "voip.label.video": "G\xf6r\xfcnt\xfcl\xfc",
          "voip.label.video.cameraon": "A\xe7",
          "voip.label.video.local.cameraOff":
            "Kameran\u0131z\u0131 kapatt\u0131n\u0131z.",
          "voip.label.video.local.cameraOn":
            "Kameran\u0131z\u0131 a\xe7t\u0131n\u0131z.",
          "voip.label.video.local.noCamera":
            "Kamera bulunamad\u0131.\nArkada\u015f\u0131n\u0131z sizi g\xf6remeyecektir.",
          "voip.label.video.low.quality": "Ba\u011flant\u0131 problemi.",
          "voip.label.video.remote.cameraOff":
            "Arkada\u015f\u0131n\u0131z kameras\u0131n\u0131 kapatt\u0131.",
          "voip.label.video.remote.cameraOn":
            "Arkada\u015f\u0131n\u0131z Kameran\u0131z\u0131 a\xe7arsan\u0131z",
          "voip.label.video.remote.noCamera":
            "Arkada\u015f\u0131n\u0131z\u0131n kameras\u0131 yok\nveya video do\u011fru \u015fekilde al\u0131nam\u0131yor.",
          "voip.label.video.ringing":
            "Kameran\u0131z a\xe7\u0131ls\u0131n m\u0131?",
          "voip.label.video.title": "%1 ile g\xf6r\xfcnt\xfcl\xfc arama",
          "voip.media.unsupported.alert.update":
            "%1 ekran\u0131n\u0131 payla\u015fmaya ba\u015flad\u0131. Bu kullan\u0131c\u0131n\u0131n ekran\u0131n\u0131 g\xf6rmek i\xe7in LINE'\u0131 en son s\xfcr\xfcme g\xfcncelleyin.",
          "voip.msg.already.during.call":
            "Ba\u015fka bir sohbette devam eden bir araman\u0131z var.",
          "voip.msg.bad.connection": "Ba\u011flant\u0131 problemi.",
          "voip.msg.bad.connection.failover": "Yeniden ba\u011flan\u0131yor...",
          "voip.msg.error.no.audio.source":
            "Arama mikrofon sorunu nedeniyle sonland\u0131. L\xfctfen daha sonra tekrar aramay\u0131 deneyin.",
          "voip.msg.error.no.audio.tx.stream":
            "Sistem Hatas\u0131 Bir hata olu\u015ftu.\nL\xfctfen daha sonra tekrar deneyin.",
          "voip.msg.network.unstable":
            "A\u011f ba\u011flant\u0131s\u0131 dengesiz.",
          "voip.msg.not.avalable.during.call":
            "Bu \xf6zellik arama s\u0131ras\u0131nda kullan\u0131lamaz.",
          "voip.msg.peer.no.audio.source":
            "Arama di\u011fer bir kat\u0131l\u0131mc\u0131n\u0131n mikrofonuyla ilgili bir sorun nedeniyle sonland\u0131. L\xfctfen daha sonra tekrar aramay\u0131 deneyin.",
          "voip.msg.send.freeCall":
            "%1 adl\u0131 ki\u015fiye sesli arama yap\u0131ls\u0131n m\u0131?",
          "voip.msg.send.videoCall":
            "%1 adl\u0131 ki\u015fiye g\xf6r\xfcnt\xfcl\xfc arama yap\u0131ls\u0131n m\u0131?",
          "voip.msg.switch.to.video.noCamera":
            "G\xf6r\xfcnt\xfcn\xfcz, kamera alg\u0131lanmad\u0131\u011f\u0131ndan g\xf6sterilmeyecek. G\xf6r\xfcnt\xfcl\xfc arama kabul edilsin mi?",
          "voip.msg.video.camera.unavailable":
            'Kameran\u0131z desteklenmiyor.\nAyarlar > Aramalar > "Kamera ayarlar\u0131" b\xf6l\xfcm\xfcnde ba\u015fka bir kamera se\xe7in. Kameran\u0131z desteklenmese bile arama yapmaya veya almaya devam edebilirsiniz ancak arkada\u015flar\u0131n\u0131z sizi g\xf6remez.',
          "voip.msg.video.term.device.control":
            "G\xf6r\xfcnt\xfcl\xfc arama kesildi.\nSesli aramaya d\xf6n\xfcl\xfcyor.",
          "voip.msg.video.term.device.interrupted":
            "Kamera duraklat\u0131ld\u0131.",
          "voip.msg.video.term.overload.direct.video.call.failed":
            "G\xf6r\xfcnt\xfcl\xfc \xe7a\u011fr\u0131lar ge\xe7i\xe7i bir hata nedeniyle servis d\u0131\u015f\u0131d\u0131r.\nL\xfctfen sonra tekrar deneyin ya da sesli \xe7a\u011fr\u0131 yap\u0131n\u0131z.",
          "voip.msg.video.term.overload.video.changing.failed":
            "G\xf6r\xfcnt\xfcl\xfc \xe7a\u011fr\u0131lar ge\xe7i\xe7i bir hata nedeniyle servis d\u0131\u015f\u0131d\u0131r.\nL\xfctfen sonra tekrar deneyin.",
          "voip.msg.video.term.unknown":
            "Bir hata olu\u015ftu.\nL\xfctfen daha sonra tekrar deneyin.",
          "voip.msg.video.term.unstable":
            "G\xf6r\xfcnt\xfcl\xfc konu\u015fma zay\u0131f ba\u011flant\u0131dan dolay\u0131 yap\u0131lamad\u0131.",
          "voip.msg.video.term.unsupported.device.video":
            "G\xf6r\xfcnt\xfcl\xfc konu\u015fma ba\u011flanamad\u0131.\nArkada\u015f\u0131n\u0131z\u0131n telefonunun destekledi\u011finden ya da son LINE\ns\xfcr\xfcm\xfcn\xfc kulland\u0131\u011f\u0131ndan emin olun.",
          "voip.msg.video.term.unsupported.device.voice":
            "Sesli konu\u015fma ile ba\u011fland\u0131.\nArkada\u015f\u0131n\u0131z\u0131n telefonunun destekledi\u011finden ya da son LINE\ns\xfcr\xfcm\xfcn\xfc kulland\u0131\u011f\u0131ndan emin olun.",
          "voip.msg.warning.close":
            "Bu arama sonland\u0131r\u0131ls\u0131n m\u0131?",
          "voip.msg.warning.groupclose":
            "Bu aramadan ayr\u0131l\u0131ns\u0131n m\u0131?",
          "voip.noisecanceling.desc.guide":
            "Arka plan g\xfcr\xfclt\xfcs\xfcn\xfc engellemek i\xe7in g\xfcr\xfclt\xfc engelleme etkinle\u015ftirildi.",
          "voip.noisecanceling.popup.desc":
            "Yapt\u0131\u011f\u0131n\u0131z de\u011fi\u015fiklik bir sonraki aramadan itibaren ge\xe7erli olacak. De\u011fi\u015fikli\u011fi \u015fimdi uygulamak i\xe7in aramay\u0131 yeniden ba\u015flat\u0131n.",
          "voip.noisecanceling.tooltip.off":
            "G\xfcr\xfclt\xfc engellemeyi etkinle\u015ftir",
          "voip.noisecanceling.tooltip.on":
            "G\xfcr\xfclt\xfc engellemeyi devre d\u0131\u015f\u0131 b\u0131rak",
          "voip.popup.end": "Aramay\u0131 bitir",
          "voip.popup.start": "Ba\u015flat",
          "voip.screen.share.remove.monitor":
            "Monit\xf6r ba\u011flant\u0131s\u0131 koptu\u011fu i\xe7in arama sonland\u0131.",
          "voip.screenshare.button.zoomin": "Yak\u0131nla\u015ft\u0131r",
          "voip.screenshare.button.zoomout": "Uzakla\u015ft\u0131r",
          "voip.screenshare.button.zoomreset":
            "Yak\u0131nla\u015ft\u0131rmay\u0131 s\u0131f\u0131rla",
          "voip.screenshare.desc.pause":
            "Ekran payla\u015f\u0131m\u0131 duraklat\u0131ld\u0131.",
          "voip.screenshare.desc.pause.tooltip":
            "Payla\u015f\u0131lan pencerenin boyutunu de\u011fi\u015ftirdi\u011finizde, pencereyi k\xfc\xe7\xfcltt\xfc\u011f\xfcn\xfczde veya ta\u015f\u0131d\u0131\u011f\u0131n\u0131zda ekran payla\u015f\u0131m\u0131 duraklat\u0131l\u0131r.",
          "voip.screenshare.error.closeapp":
            "Kapat\u0131lm\u0131\u015f olan ekranlar\u0131 payla\u015famazs\u0131n\u0131z.",
          "voip.screenshare.index.screen": "Ekran",
          "voip.screenshare.index.window": "Pencere",
          "voip.screenshare.option.optimizevideoclips":
            "Video klipler i\xe7in optimize et",
          "voip.screenshare.tooltip.fullscreen": "Masa\xfcst\xfc %1",
          "voip.screenshare.tooltip.optimizevideoclips":
            "Daha net video klipler i\xe7in ekran payla\u015f\u0131m\u0131n\u0131 optimize edin.",
          "voip.tooltip.callsetting": "Arama ayarlar\u0131",
          "voip.tooltip.camera.off": "Kameray\u0131\ndurdur",
          "voip.tooltip.camera.on": "Kameray\u0131\nba\u015flat",
          "voip.tooltip.chat": "Sohbet",
          "voip.tooltip.echocanceloff": "Yank\u0131 engellemeyi kapat",
          "voip.tooltip.echocancelon": "Yank\u0131 engellemeyi a\xe7",
          "voip.tooltip.end.call": "Sonland\u0131r",
          "voip.tooltip.end.groupmeetingcall": "Ayr\u0131l",
          "voip.tooltip.fullhd":
            '"Full HD voice" ye\u015fil oldu\u011funda sesli aramalarda daha net bir ses deneyimi ya\u015fay\u0131n.',
          "voip.tooltip.mic.off": "Devre d\u0131\u015f\u0131",
          "voip.tooltip.mic.off.muteronguide":
            "Mikrofonunuz devre d\u0131\u015f\u0131. Konu\u015fmaya ba\u015flamak i\xe7in mikrofonunuzu etkinle\u015ftirin.",
          "voip.tooltip.mic.off.spacebartoast":
            "Mikrofonunuz sessize al\u0131nd\u0131. Ge\xe7ici olarak sesini a\xe7mak i\xe7in bo\u015fluk tu\u015funu bas\u0131l\u0131 tutun.",
          "voip.tooltip.mic.on": "Etkinle\u015ftir",
          "voip.tooltip.microphone.autovolume": "Ses otomatik ayarland\u0131",
          "voip.tooltip.onscreentool.clearall": "T\xfcm\xfcn\xfc temizle",
          "voip.tooltip.onscreentool.eraser": "Silgi",
          "voip.tooltip.onscreentool.off":
            "\xc7izim ara\xe7lar\u0131n\u0131 kapat",
          "voip.tooltip.onscreentool.on":
            "\xc7izim ara\xe7lar\u0131n\u0131 a\xe7",
          "voip.tooltip.onscreentool.pen": "Kalem",
          "voip.tooltip.onscreentool.pointer": "\u0130\u015faret\xe7i",
          "voip.tooltip.onscreentool.redo": "Yinele",
          "voip.tooltip.onscreentool.select": "Ge\xe7",
          "voip.tooltip.onscreentool.stamp": "Damga",
          "voip.tooltip.onscreentool.undo": "Geri al",
          "voip.tooltip.screen.share": "Ekran\u0131 payla\u015f",
          "voip.tooltip.screen.share.off": "Payla\u015f\u0131m\u0131 durdur",
          "voip.tooltip.screen.share.start":
            "G\xf6r\xfcnt\xfcl\xfc arama s\u0131ras\u0131nda ekran\u0131n\u0131z\u0131 payla\u015f\u0131n.",
          "voip.tooltip.screen.share.stop":
            "Ekran\u0131n\u0131z payla\u015f\u0131l\u0131yor. Ekran payla\u015f\u0131m\u0131n\u0131 sonland\u0131rmak i\xe7in simgeye tekrar t\u0131klay\u0131n.",
          "voip.tooltip.speaker.off": "Sesi kapat",
          "voip.tooltip.speaker.on": "Sesi a\xe7",
          "voip.tooltip.switch.to.video":
            "G\xf6r\xfcnt\xfcl\xfc aramaya ge\xe7i\u015f yapmak i\xe7in t\u0131klay\u0131n",
          "voip.tooltip.video.camera":
            "Kameran\u0131z\u0131 a\xe7t\u0131n\u0131z/kapatt\u0131n\u0131z.",
          "voip.tooltip.video.camera.select": "Kamera \u015fec",
          "voip.tooltip.video.fullscreen": "Tam ekrana ge\xe7",
          "voip.tooltip.video.fullscreen.restore":
            "\xd6nceki pencere boyutuna d\xf6n",
          "voip.tooltip.video.pin": "Pencereyi her zaman en \xfcstte tut",
          "voip.tooltip.video.pinoff":
            "Pencereyi her zaman en \xfcstte tutmay\u0131 devre d\u0131\u015f\u0131 b\u0131rak",
          "voip.tooltip.video.speaker":
            "Hoparl\xf6r a\xe7t\u0131n\u0131z/kapatt\u0131n\u0131z.",
          "voip.tooltip.video.transform":
            "G\xf6r\xfcnt\xfcl\xfc\naramay\u0131 ba\u015flat",
          "voip.tooltip.volumezero":
            "Hoparl\xf6r ses d\xfczeyiniz s\u0131f\u0131r olarak ayarland\u0131. Di\u011fer ki\u015fileri duymak i\xe7in ses d\xfczeyini y\xfckseltin.",
          "voip.video.calling.failed.cameraSwitch":
            "Kameray\u0131 ge\xe7i\u015f yap\u0131lam\u0131yor.\nL\xfctfen tekrar deneyin.",
          "voip.video.calling.failed.noCamera":
            "Kameran\u0131z\u0131 ge\xe7i\u015f a\xe7t\u0131n\u0131z yap\u0131lam\u0131yor.\nL\xfctfen kontrol edin.",
          "voip.video.desc.makeCall.Failed":
            "Ba\u011flan\u0131lam\u0131yor. L\xfctfen tekrar deneyin.",
          "voip.video.dynamicspeaking.pinoff": "Sabitlemeyi kald\u0131r",
          "voip.video.dynamicspeaking.pinoff.desc":
            "Video sabitlendi. Sabitlemeyi kald\u0131rmak i\xe7in videonun sa\u011f \xfcst k\xf6\u015fesindeki Sabitlemeyi kald\u0131r'a t\u0131klay\u0131n.",
          "voip.video.effect.popup.downloadfail":
            "Efekt indirilemiyor. Tekrar denensin mi?",
          "voip.video.effect.toast.cameraoff":
            "L\xfctfen \xf6nce kameran\u0131z\u0131 a\xe7\u0131n.",
          "voip.video.effect.toast.detectionfail":
            "Y\xfcz\xfcn\xfcz\xfcn net bir \u015fekilde g\xf6r\xfcnd\xfc\u011f\xfcnden emin olun.",
          "voip.video.effect.toast.downloadfail":
            "\u0130ndirilemiyor. L\xfctfen tekrar deneyin.",
          "voip.video.effect.toast.nospace":
            "Cihaz\u0131n\u0131zda yeterli alan yok. Depolama alan\u0131nda yer a\xe7\u0131n ve tekrar deneyin.",
          "voip.video.effect.toast.xpccrash":
            "Ge\xe7ici bir hata nedeniyle kamera efektleri s\u0131f\u0131rland\u0131.\nL\xfctfen ayarlar\u0131 tekrar yap\u0131n.",
          "voip.video.menu.bg": "Arka planlar",
          "voip.video.menu.bg.alert.addbg":
            "Bu dosya y\xfcklenemedi. Arka plan\u0131n\u0131z olarak kullanmak i\xe7in farkl\u0131 bir dosya se\xe7in.",
          "voip.video.menu.bg.alert.addbg.button": "Se\xe7",
          "voip.video.menu.bg.alert.maxbg":
            "Daha fazla arka plan eklenemiyor. Art\u0131k ihtiyac\u0131n\u0131z olmayan bir arka plan\u0131 kald\u0131r\u0131p tekrar deneyin.",
          "voip.video.menu.bgsettings": "Efektler",
          "voip.video.menu.blur":
            "Arka plan\u0131 bulan\u0131kla\u015ft\u0131rma",
          "voip.video.menu.effect": "Y\xfcz efektleri",
          "voip.video.menu.filter": "Filtreler",
          "voip.video.popupbutton.close": "Kapat",
          "voip.video.popupbutton.dontshow": "G\xf6sterme",
          "voip.video.popupbutton.opensettings": "Ayarlar\u0131 a\xe7",
          "voip.video.popupbutton.show": "G\xf6ster",
          "voip.video.popupdesc.dontshowpreview":
            "Bu se\xe7ene\u011fi devre d\u0131\u015f\u0131 b\u0131rakt\u0131\u011f\u0131n\u0131zda, g\xf6r\xfcnt\xfcl\xfc aramalara kamera \xf6nizlemesini g\xf6rmeden kat\u0131labileceksiniz.",
          "voip.video.popuptitle.dontshowpreview":
            "Kamera \xf6nizleme ayar\u0131n\u0131z\u0131 de\u011fi\u015ftirin",
          "voip.video.preview.blur.off": "Hi\xe7biri",
          "voip.video.preview.blur.on":
            "Arka plan\nbulan\u0131kla\u015ft\u0131r",
          "voip.video.preview.cameraoff": "Kameray\u0131 kapat",
          "voip.video.preview.desc":
            "G\xf6r\xfcnt\xfcl\xfc aramaya kat\u0131lmadan \xf6nce kameran\u0131z\u0131 kontrol edin.",
          "voip.video.preview.join": "Kat\u0131l",
          "voip.video.preview.title": "Kamera \xf6nizleme",
          "voip.video.title.videocallwith":
            "%1 ile g\xf6r\xfcnt\xfcl\xfc arama",
          "voip.video.tooltip.filternblur":
            "Filtreleri ve arka plan\u0131 bulan\u0131kla\u015ft\u0131rma efektini deneyin.",
          "voip.video.tooltip.startvideocall":
            "G\xf6r\xfcnt\xfcl\xfc aramay\u0131 ba\u015flatmak i\xe7in t\u0131klay\u0131n.",
          "voip.video.tooltip.videomirroring":
            "Videoyu ayna etkisiyle yans\u0131tmay\u0131 kapat",
          "voip.video.tooltip.videomirroringoff":
            "Video yans\u0131tmay\u0131 kapat",
          "voip.video.tooltip.videomirroringon":
            "Video yans\u0131tmay\u0131 a\xe7",
          "voip.videocall.button.beautyfeature": "G\xfczellik",
          "voip.videocall.popup.start": "Ba\u015flat",
          "voip.videocall.popup.turnon": "A\xe7",
          "win10.notification.reply.guide": "Buradan yan\u0131tlay\u0131n",
        };
      },
    }]);
