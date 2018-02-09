var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
	var arg = null;
	if (obj) {
		arg = obj[key] || null;
		delete obj[key];
	}
	return arg;
}

function Controller() {

	require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
	this.__controllerPath = 'index';
	this.args = arguments[0] || {};

	if (arguments[0]) {
		var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
		var $model = __processArg(arguments[0], '$model');
		var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
	}
	var $ = this;
	var exports = {};
	var __defers = {};







	$.__views.index = Ti.UI.createWindow(
	{ backgroundColor: "Green", id: "index" });

	$.__views.index && $.addTopLevelView($.__views.index);
	$.__views.textField1 = Ti.UI.createTextField(
	{ id: "textField1", color: "Black", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT, top: 80, left: 60, width: 250, height: 30 });

	$.__views.index.add($.__views.textField1);
	$.__views.textField2 = Ti.UI.createTextField(
	{ id: "textField2", color: "Black", borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED, textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT, top: 130, left: 60, width: 250, height: 30 });

	$.__views.index.add($.__views.textField2);
	$.__views.Btn_login = Ti.UI.createButton(
	{ id: "Btn_login", title: "LogIn", right: 60, left: 60, top: 180, textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER, height: 30 });

	$.__views.index.add($.__views.Btn_login);
	CheckLogIn ? $.addListener($.__views.Btn_login, 'click', CheckLogIn) : __defers['$.__views.Btn_login!click!CheckLogIn'] = true;exports.destroy = function () {};




	_.extend($, $.__views);


	function doClick(e) {
		alert($.label.text);
	}

	function CheckLogIn() {

		var usernameText = $.textField1.text;
		var passwordText = $.textField2.text;
		var correctpassword = "iOS Developer";
		var correctusername = "Dinesh2910";

		if (usernameText.toLowerCase() == correctusername.toLowerCase() && passwordText.toLowerCase() == correctpassword.toLowerCase()) ;{
			alert("Both are Matching");
		}
	}

	$.index.open();





	__defers['$.__views.Btn_login!click!CheckLogIn'] && $.addListener($.__views.Btn_login, 'click', CheckLogIn);



	_.extend($, exports);
}

module.exports = Controller;