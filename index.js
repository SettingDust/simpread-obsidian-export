/**
 * @param {string} $$version current testPlugin verison

 * @param {JQuery} $read    jquery object
 * @param {JQuery} $title   jquery object
 * @param {JQuery} $desc    jquery object
 * @param {JQuery} $content 页面内容
 * @param {JQuery} $footer  jquery object
 * @param {JQuery} $process jquery object
 * @param {JQuery} $toc     jquery object

 * @param {Notify} Notify
 * @param {function}   $$storage, usage wirte: $$storage( plugin_id, {foo:bar}, callback=>{...}) | read: $$storage( plugin_id, undefined, callback=>{...})
 * @param {object} $$current  simpread.read object
 * @param {function}   $$highlight function
 * @param {object} browser, include: chrome, browser(firefox)
 * @param $$read
 * @param $$control
 * @param $$save
 * @param $$th
 * @param {function} $$export Call export event
 * @param $$ss
 * @param $$service
 * @param $$waves
 * @param $$ui
 * @param $$srvnames
 * @param $$actionbar
 */
function plugin(
  $$version,
  $read,
  $title,
  $desc,
  $content,
  $footer,
  $process,
  $toc,
  Notify,
  $$highlight,
  browser,
  $$storage,
  $$current,
  $$read,
  $$control,
  $$save,
  $$th,
  $$export,
  $$ss,
  $$service,
  $$waves,
  $$ui,
  $$srvnames,
  $$actionbar
) {
  const $$id = "H7rgpgZBjT";
  console.log($$current);
}

/**
 * Style
 *
 * @returns {string} style str
 */
function style() {
  return ``;
}

// change top to simpread
window.simpread.testPlugin(style, plugin);
