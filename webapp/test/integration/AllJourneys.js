/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"nm1/zsample1/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"nm1/zsample1/test/integration/pages/Worklist",
	"nm1/zsample1/test/integration/pages/Object",
	"nm1/zsample1/test/integration/pages/NotFound",
	"nm1/zsample1/test/integration/pages/Browser",
	"nm1/zsample1/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "nm1.zsample1.view."
	});

	sap.ui.require([
		"nm1/zsample1/test/integration/WorklistJourney",
		"nm1/zsample1/test/integration/ObjectJourney",
		"nm1/zsample1/test/integration/NavigationJourney",
		"nm1/zsample1/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});