'use strict';

var Code = {};
Code.LANGUAGE_NAME = {
  'en': 'English',
  // 'ru': 'Pусский',
//  'ru1': '中文 Китайский ',       // 
//  'ru2': 'العربية Арабский ',       // 
//  'ru3': 'हिन्दी Хинди ',       // 
//  'ru4': 'Español Испанский ',       // 
//  'ru5': 'Bāṇlā Бенгальский ',       // 
//  'ru6': 'Português Португальский ',       // 
//  'ru7': '日本語 Японский ',       // 
//  'ru8': 'Deutsch Немецкий ',       // 
//  'ru9': '조선말 Корейский ',       // 
//  'ru10': 'Français Французский ',       // 
//  'ru11': 'Basa Jawa Яванский ',       // 
//  'ru12': 'తెలుగు Телугу ',       // 
//  'ru13': 'मराठी Маратхи ',       // 
//  'ru14': 'Tiếng Việt	Вьетнамский ',       // 
//  'ru15': 'தமிழ் Тамильский ',       // 
//  'ru16': 'Italiano Итальянский ',       // 
//  'ru17': 'Türkçe Турецкий ',       // 
//  'ru18': 'اردو Урду ',       // 
//  'ru19': 'ਪੰਜਾਬੀ Панджаби ',       // 
//  'ru20': 'Українська Украинский ',       // 
//  'ru21': 'ગુજરાતી Гуджарати ',       // 
//  'ru22': 'ภาษาไทย Тайский ',       // 
//  'ru23': 'Polszczyzna Польский ',       // 
//  'ru24': 'മലയാളം Малаялам ',       // 
//  'ru25': 'ಕನ್ನಡ Каннада ',       // 
//  'ru26': 'ଓଡ଼ିଆ Ория ',       // 
//  'ru27': 'ဗမာစာ Бирманский ',       // 
//  'ru28': 'Azərbaycan Азербайджанский ',       // 
//  'ru29': 'فارسی Персидский ',       // 
//  'ru30': 'Sunda Сунданский ',       // 
//  'ru31': 'پښتو Пушту ',       // 
//  'ru32': 'Română Румынский ',       // 
//  'ru33': 'भोजपुरी Бходжпури ',       // 
//  'ru34': 'هَوُس Хауса ',       // 
//  'ru35': 'मैथिली Майтхили ',       // 
//  'ru36': 'Melayu Малайский ',       // 
//  'ru37': 'Srpskohrvatski Сербохорватский ',       // 
//  'ru38': 'अवधी Авадхи  ',       // 
//  'ru39': 'ئۇزبېك تیلى Узбекский ',       // 
//  'ru40': 'Yorùbá Йоруба ',       // 
//  'ru41': 'Nederlands Нидерландский ',       // 
//  'ru42': 'सिन्धी Синдхи ',       // 
//  'ru43': 'Igbo Игбо ',       // 
//  'ru44': 'አማርኛ Амхарский ',       // 
//  'ru45': 'Oromoo Оромо ',       // 
//  'ru46': 'Indonesia Индонезийский ',       // 
//  'ru47': 'Tagalog Тагальский ',       // 
//  'ru48': 'नेपाली Непальский ',       // 
//  'ru49': 'অসমিয়া Ассамский ',       // 
//  'ru50': 'سرائیکی Сараики ',       // 
//  'ru51': 'Sugboanon Себуанский ',       // 
//  'ru52': 'Magyar 	Венгерский ',       // 
//  'ru53': 'চাটগাঁইয়া Читтагонг ',       // 
//  'ru54': 'Sawcuengh Чжуанский ',       // 
//  'ru55': 'Shona  Шона ',       // 
//  'ru56': 'Mathura Мадурский ',       // 
//  'ru57': 'සිංහල Сингальский ',       // 
//  'ru58': 'मारवाड़ी Марвари ',       // 
//  'ru59': 'मगही Магахи ',       // 
//  'ru60': 'हरियाणवी Харьянви ',       // 
//  'ru61': 'Ελληνικά Греческий ',       // 
//  'ru62': 'Čeština Чешский ',       // 
//  'ru63': 'छत्तिसगढ़ी Чхаттисгархи ',       // 
//  'ru64': 'Fulfulde  Фула ',       // 
//  'ru65': 'Malagasy Малагасийский ',       // 
//  'ru66': 'Беларуская Белорусский ',       // 
//  'ru67': 'Татарский ',       // 
};
Code.LANGUAGE_RTL = ['ar', 'fa', 'he'];
Code.getLang = function() {
  var lang = window.localStorage.lang;
  if (lang === undefined) {
    lang = 'en'
	window.localStorage.lang = lang;
  }
  return lang
};
Code.isRtl = function() {
  return Code.LANGUAGE_RTL.indexOf(Code.LANG) != -1;
};
Code.LANG = Code.getLang();
Code.initLanguage = function() {
  var rtl = Code.isRtl();
  $("html").attr('dir', rtl ? 'rtl' : 'ltr');
  $("html").attr('lang', Code.LANG);
  var languages = [];
  for (var lang in Code.LANGUAGE_NAME) {
    languages.push([Code.LANGUAGE_NAME[lang], lang]);
  }
  var comp = function(a, b) {
    if (a[0] > b[0]) return 1;
    if (a[0] < b[0]) return -1;
    return 0;
  };
  languages.sort(comp);
  var languageMenu = $('#languageMenu');
  languageMenu.empty();
  for (var i = 0; i < languages.length; i++) {
    var tuple = languages[i];
    var lang = tuple[tuple.length - 1];
    var option = new Option(tuple[0], lang);
    if (lang == Code.LANG) option.selected = true;
    languageMenu.append(option);
  }
  $('#aboutBody').text(MSG['aboutBody']);
  $('#warning').text(MSG['nanoWarning']);
  $('#aboutModalLabel').text(MSG['aboutModalLabel']);
  $('#cardLabel').text(MSG['cardLabel']);
  $('#aboutcardLabel').text(MSG['aboutcardLabel']);
  $('#aboutusbLabel').text(MSG['aboutusbLabel']);
  $('#usbLabel').text(MSG['usbLabel']);
  $('#configModalLabel').text(MSG['configModalLabel']);
  $('#versionModalLabel').text(MSG['versionModalLabel']); 
  $('#exampleModalLabel').text(MSG['exampleModalLabel']); 
  $('#variableModalLabel').text(MSG['variableModalLabel']);
  $('#variablebody').text(MSG['variablebody']);
  $('#labelToolboxDefinition').text(MSG['labelToolboxDefinition']); 
  $('#survol').text(MSG['survol']);
  $('#span_about').text(MSG['span_about']);
  $('#span_example').text(MSG['span_example']);
  $('#span_connect_serial').text(MSG['span_connect_serial']);
  $('#span_select_all').text(MSG['span_select_all']);
  $('#span_languageMenu').text(MSG['span_languageMenu']);
  $('#span_blocklino').text(MSG['span_blocklino']);
  $('#span_update').text(MSG['span_update']);
  $('#span_verify_update').text(MSG['span_verify_update']);
  $('#span_site').text(MSG['span_site']);
  $('#span_forum').text(MSG['span_forum']);
  $('#span_contact').text(MSG['span_contact']);
  $('#btn_close_config').text(MSG['btn_close']);
  $('#btn_valid_config').text(MSG['btn_valid']);
  $('#btn_close_msg').text(MSG['btn_close']);
  $('#btn_valid_msg').text(MSG['btn_valid']);
  $('#btn_variable').text(MSG['btn_variable']);
  var prog = window.localStorage.prog;
  if (prog != "python") {
	$('#btn_preview').attr('title', MSG['btn_preview_ino']);
	$('#btn_saveino').attr('title', MSG['btn_save_ino']) 
  } else {
	$('#btn_preview').attr('title', MSG['btn_preview_py']);
	$('#btn_saveino').attr('title', MSG['btn_save_py']);   
  }
  $('#btn_copy').attr('title', MSG['btn_copy']);
  $('#btn_print').attr('title', MSG['btn_print']);
  $('#btn_undo').attr('title', MSG['btn_undo']);
  $('#btn_redo').attr('title', MSG['btn_redo']);
  $('#btn_search').attr('title', MSG['btn_search']);
  $('#btn_new').attr('title', MSG['btn_new']);
  $('#btn_saveXML').attr('title', MSG['btn_saveXML']);
  $('#btn_fakeload').attr('title', MSG['btn_fakeload']);
  $('#btn_term').attr('title', MSG['btn_term']);
  $('#btn_factory').attr('title', MSG['btn_factory']);
  $('#btn_config').attr('title', MSG['btn_config']);
  $('#btn_about').attr('title', MSG['btn_about']);
  $('#btn_example').attr('title', MSG['btn_example']);
  $("xml").find("category").each(function() {
	if (!$(this).attr('id')) {
	  $(this).attr('id', $(this).attr('name'));
	  $(this).attr('name', Blockly.Msg[$(this).attr('name')]);
	}
  });
};
document.write('<script src="lang/msg_' + Code.LANG + '.js"></script>\n');
//document.write('<script src="lang/Blockly_' + Code.LANG + '.js"></script>\n');
//document.write('<script src="lang/microbit_' + Code.LANG + '.js"></script>\n');
//document.write('<script src="lang/Arduino_' + Code.LANG + '.js"></script>\n');
