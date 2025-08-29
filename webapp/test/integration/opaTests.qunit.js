/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["productlabel/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
