/*global location history */
sap.ui.define([
	"nm1/zsample1/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"nm1/zsample1/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (BaseController, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";

	return BaseController.extend("nm1.zsample1.controller.Worklist", {

		formatter: formatter,

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		/**
		 * Called when the worklist controller is instantiated.
		 * @public
		 */
		onInit: function () {
			this._initModel();
			this._initViewProperties();
		},

		_initModel: function () {
			debugger;

			var oViewModel = new JSONModel({
				productValue: ""
			});
			this.setModel(oViewModel, "viewModel");
		},
		_initViewProperties: function () {
			this._oView = this.getView();
			this._oComponent = sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this._oView));
			this._oRouter = this._oComponent.getRouter();
			this._oResourceBundle = this._oComponent.getModel("i18n").getResourceBundle();
			this._oRouter.attachRoutePatternMatched(this._onRoutePatternMatched, this);
			this._setViewModelProperty("productValue", "Eray");
		},
		_getViewModel: function() {
			var oViewModel = this._oView.getModel("viewModel");
			return oViewModel;
		},

		_setViewModelProperty: function(oPropertyName, oValue) {
			oPropertyName = "/" + oPropertyName;
			this._getViewModel().setProperty(oPropertyName, oValue);
		},

		_getViewModelProperty: function(oPropertyName) {
			oPropertyName = "/" + oPropertyName;
			var oValue = this._getViewModel().getProperty(oPropertyName);
			return oValue;
		},

		onPress: function (oEvent) {
			debugger;//F12'de debug
			var _value = this._getViewModelProperty("productValue")
			
			this._setViewModelProperty("productValue", "Berk");
		},

		/**
		 * Event handler for navigating back.
		 * We navigate back in the browser historz
		 * @public
		 */
		onNavBack: function () {
			history.go(-1);
		}

	});
});