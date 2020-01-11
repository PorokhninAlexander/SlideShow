var Rex = Rex || {};

/**
 * Constants
 */
/** @const */ Rex.FPS = 60;
/** @const */ Rex.Pi = 3.141592653589793;
/** @const */ Rex.Deg2Rad = 0.01745329251994;
/** @const */ Rex.Rad2Deg = 57.29577951308233;
Rex.INFINITY = 1.0e+10;

/**
 * Formats
 */
/** @const */ Rex.FormatUnknown = 0;
/** @const */ Rex.FormatUInt8x1 = 1;
/** @const */ Rex.FormatUInt8x4 = 2;
/** @const */ Rex.FormatUInt16x1 = 3;
/** @const */ Rex.FormatUInt32x1 = 4;
/** @const */ Rex.FormatFloat16x2 = 5;
/** @const */ Rex.FormatFloat16x4 = 6;
/** @const */ Rex.FormatFloat32x1 = 7;
/** @const */ Rex.FormatFloat32x2 = 8;
/** @const */ Rex.FormatFloat32x3 = 9;
/** @const */ Rex.FormatFloat32x4 = 10;
/** @const */ Rex.FormatFloat32x16 = 11;

/**
 * Buffer masks
 */
/** @const */ Rex.BufferRed = 1;
/** @const */ Rex.BufferGreen = 2;
/** @const */ Rex.BufferBlue = 4;
/** @const */ Rex.BufferAlpha = 8;
/** @const */ Rex.BufferDepth = 16;
/** @const */ Rex.BufferStencil = 32;
/** @const */ Rex.BufferColor = 15;
/** @const */ Rex.BufferDepthStencil = 48;
/** @const */ Rex.BufferAll = 63;

/**
 * Blend functions
 */
/** @const */ Rex.BlendNone = 0;
/** @const */ Rex.BlendZero = 1;
/** @const */ Rex.BlendOne = 2;
/** @const */ Rex.BlendSrcColor = 3;
/** @const */ Rex.BlendSrcAlpha = 4;
/** @const */ Rex.BlendDestColor = 5;
/** @const */ Rex.BlendDestAlpha = 6;
/** @const */ Rex.BlendOneMinusSrcColor = 7;
/** @const */ Rex.BlendOneMinusSrcAlpha = 8;
/** @const */ Rex.BlendOneMinusDestColor = 9;
/** @const */ Rex.BlendOneMinusDestAlpha = 10;

/**
 * Depth functions
 */
/** @const */ Rex.DepthNone = 0;
/** @const */ Rex.DepthNever = 1;
/** @const */ Rex.DepthAlways = 2;
/** @const */ Rex.DepthLess = 3;
/** @const */ Rex.DepthEqual = 4;
/** @const */ Rex.DepthGreater = 5;
/** @const */ Rex.DepthLessEqual = 6;
/** @const */ Rex.DepthNotEqual = 7;
/** @const */ Rex.DepthGreaterEqual = 8;

/**
 * Stencil functions
 */
/** @const */ Rex.StencilNone = 0;
/** @const */ Rex.StencilNever = 1;
/** @const */ Rex.StencilAlways = 2;
/** @const */ Rex.StencilLess = 3;
/** @const */ Rex.StencilEqual = 4;
/** @const */ Rex.StencilGreater = 5;
/** @const */ Rex.StencilLessEqual = 6;
/** @const */ Rex.StencilNotEqual = 7;
/** @const */ Rex.StencilGreaterEqual = 8;

/**
 * Stencil operations
 */
/** @const */ Rex.StencilOpKeep = 0;
/** @const */ Rex.StencilOpZero = 1;
/** @const */ Rex.StencilOpReplace = 2;
/** @const */ Rex.StencilOpInvert = 3;
/** @const */ Rex.StencilOpIncr = 4;
/** @const */ Rex.StencilOpDecr = 5;

/**
 * Face modes
 */
/** @const */ Rex.FaceNone = 0;
/** @const */ Rex.FaceFront = 1;
/** @const */ Rex.FaceBack = 2;
/** @const */ Rex.FaceBoth = 3;

/**
 * Draw modes
 */
/** @const */ Rex.DrawPoints = 0;
/** @const */ Rex.DrawLineStrip = 1;
/** @const */ Rex.DrawLineLoop = 2;
/** @const */ Rex.DrawLines = 3;
/** @const */ Rex.DrawTriangleStrip = 4;
/** @const */ Rex.DrawTriangleFan = 5;
/** @const */ Rex.DrawTriangles = 6;

/**
 * Texture formats
 */
/** @const */ Rex.TextureFormatAlpha = 0;
/** @const */ Rex.TextureFormatLuminance = 1;
/** @const */ Rex.TextureFormatLuminanceAlpha = 2;
/** @const */ Rex.TextureFormatRGB = 3;
/** @const */ Rex.TextureFormatRGBA = 4;

/**
 * Texture filters
 */
/** @const */ Rex.TextureFilterPoint = 0;
/** @const */ Rex.TextureFilterLinear = 1;
/** @const */ Rex.TextureFilterBilinear = 2;
/** @const */ Rex.TextureFilterTrilinear = 3;

/**
 * Texture wrap modes
 */
/** @const */ Rex.TextureWrapClamp = 0;
/** @const */ Rex.TextureWrapRepeat = 1;

/**
 * MouseButton
 */
/** @const */ Rex.MouseButtonLeft = 0;
/** @const */ Rex.MouseButtonMid = 1;
/** @const */ Rex.MouseButtonRight = 2;

/**
 * KeyBoard
 */
/** @const */ Rex.KeyList = {
	backspace 		:			8,
	tab 			:			9,
	enter 			:			13,
	shift 			:			16,
	ctrl 			:			17,
	pause 			:			19,
	break 			:			19,
	capsLock 		:			20,
	escape 			:			27,
	pageUp 			:			33,
	pageDown 		:			34,
	home 			:			36,
	leftArrow 		:			37,
	upArrow 		:			38,
	rightArrow 		:			39,
	downArrow 		:			40,
	insert			:			45,
	delete 			:			46,
	null 			:			48,
	one 			:			49,
	two 			:			50,
	three 			:			51,
	four 			:			52,
	five 			:			53,
	six 			:			54,
	seven 			:			55,
	eight 			:			56,
	nine 			:			57,
	a 				:			65,
	b 				:			66,
	c 				:			67,
	d 				:			68,
	e 				:			69,
	f 				:			70,
	g 				:			71,
	h 				:			72,
	i 				:			73,
	j 				:			74,
	k 				:			75,
	l 				:			76,
	m 				:			77,
	n 				:			78,
	o 				:			79,
	p 				:			80,
	q 				:			81,
	r 				:			82,
	s 				:			83,
	t 				:			84,
	u 				:			85,
	v 				:			86,
	w 				:			87,
	x 				:			88,
	y 				:			89,
	z 				:			90,
	f1 				:			112,
	f2 				:			113,
	f3 				:			114,
	f4 				:			115,
	f5 				:			116,
	f6 				:			117,
	f7 				:			118,
	f8 				:			119,
	f9 				:			120,
	f10 			:			121,
	f11 			:			122,
	f12 			:			123,
	numLock 		:			144,
	scrollLock 		:			145,
};

/**
 * Globals
 */
Rex.buffers = undefined;
Rex.layouts = undefined;
Rex.textures = undefined;
Rex.materials = undefined;
Rex.parameters = undefined;
Rex.geometries = undefined;
Rex.meshes = undefined;
Rex.lines = undefined;
Rex.labels = undefined;
Rex.images = undefined;
Rex.widgets = undefined;
Rex.scene = undefined;
Rex.engine = undefined;
Rex.webSocket = undefined;
Rex.otherScene = [];
Rex.otherGui = [];

Rex.undef = function(object, objectName) {

	let errorMessage = "";
	
	if (object === undefined) {
	
		console.error("'%s' is undefined.", objectName);
		
		return true;
	}

	if (object === null) {

		console.error("'%s' is null.", objectName);

		return true;
	}

	return false;
};

Rex.undefProp = function (container, names) {

	if(!Array.isArray(names))
		names = [names];
	
	let ret = false;
	
	for(let i = 0; i < names.length; ++i) {
		
		let name = names[i];

		if(container[name] == undefined) {
			
			console.error("Can't find '%s' in : %O", name, container);
			
			ret = true;
		}
	}
	
	return ret;
};

Rex.undefId = function(container, objectId, name) {

	if(name == undefined)
		name = "object";
	else
		name = "'" + name + "'";
	
	if(container[objectId] == undefined) {
		
		console.error("Can't find %s with id = %s in : %O", name, objectId, container);
		
		return true;
	}
	
	return false;
};



class CoreEventLoop {
	
	constructor() {
		this.tasks = [];
		this.running = true;
		this.stopped = false;
		this._loop();
	}
	
	_loop() {
		if(this.running) requestAnimationFrame(this._loop.bind(this));
		else this.destroy();
		
		if((Rex.gui != null) && (Rex.render == null)) {
			Rex.gui.positioning();
			Rex.gui.draw();
		}
		
		if(this.tasks.length === 0) return;
		let task = this.tasks.shift();
		task();
	}
	
	stop() {
		this.stopped = true;
		tasks.push(() => {
			this.running = false;
		});
	}
	
	addCoreEvent(func) {
		if(this.stopped) return false;
		this.tasks.push(func);
		return true;
	}
	
	destroy() {
		this.tasks = null;
		this._loop = null;
	}
	
}

class CoreEventListener {
	
	constructor(target, signalname, listener, func) {
		this.target = target;
		this.signalname = signalname;
		this.listener = listener;
		this.func = func;
		this.connected = true;
	}
	
	run(args) {
		if(!this.connected || this.listener._$destroyed) return;
		this.listener._$signalSystem.sender = this.target;
		if (!(this && this.func)) console.error("canot real property `apply` of undefined", this, args);
		let ret = this.func.apply(this.listener, args);
		this.listener._$signalSystem.sender = undefined;
		return ret;
	}
	
}

class CoreEvent {
	
	constructor(target) {
		this.target = target;
		this.signals = {};
		this.slots = [];
		this.sender = undefined;
	}
	
	runNow(sigName) {
		let sig = this.signals[sigName];
		if(!sig) {
			return;
		}
		let args = [].slice.call(arguments);
		args.shift();
		for(let listener of sig) {
			listener.run(args);
		}
	}
	
	run(sigName) {
		let sig = this.signals[sigName];
		if(!sig) {
			return;
		}
		let args = [].slice.call(arguments);
		args.shift();
		for(let listener of sig) {
			Rex.eventLoop.addCoreEvent(() => {
				listener.run(args);
			});
		}
	}
	
	connect(signalName, listener, funct) {
		let sig = this.signals[signalName];
		if(!sig) {
			this.signals[signalName] = [];
			sig = this.signals[signalName];
		}
		for(let list of sig) {
			if(list.listener === listener && list.signalname === signalName && list.func.name === funct.name) {
				console.warn("signal already connect", listener, signalName, funct.name);
				return null;
			}
		}
		let slot = new CoreEventListener(this.target, signalName, listener, funct);
		sig.push(slot);
		return slot;
	}
	
	disconnect(signalName, listener, funct) {
		let sig = this.signals[signalName];
		if(!sig) {
			return;
		}
		for(let list of sig) {
			if(list.listener === listener && list.signalname === signalName && list.func.name === funct.name) {
				list.connected = false;
				sig.splice(sig.indexOf(list), 1);
				let slots = listener._$signalSystem.slots;
				slots.splice(slots.indexOf(list),1);
				return;
			}
		}
	}
	
	clear() {
		for(let signalname in this.signals) {
			let arr = this.signals[signalname];
			for(let ss of arr) {
				ss.connected = false;
				let listener = ss.listener._$signalSystem;
				listener.slots.splice(listener.slots.indexOf(ss),1);
			}
		}
		this.signals = {};
		this.slots = [];
		this.sender = null;
		this.target = null;
	}
	
}

class BaseObject {
	
	constructor() {
		this._$signalSystem = new CoreEvent(this);
		this._$destroyed = false;
	}
	
	connect(target, signalname, slot) {
		let res = target._$signalSystem.connect(signalname, this, slot);
		if(res !== null)
			this._$signalSystem.slots.push(res);
	}
	
	//отключает себя от кого-то.
	disconnect(target, signalname, slot) {
		target._$signalSystem.disconnect(signalname, this, slot);
	}
	
	disconnectAll() {
		//отключаем все свои слоты( на кого я подписан). для этого мы берем таргет и отключаем себя у таргета. все,
		// он больше нам ничего не отправит
		while(this._$signalSystem.slots.length !== 0){
			let slot = this._$signalSystem.slots[0];
			slot.target._$signalSystem.disconnect(slot.signalname, this, slot.func);
		}
		//отключаем все свои сигналы (кто подписан на меня). для этого берем свои сигналы сразу и вырубаем их.
		this._$signalSystem.clear();
		
	}
	
	run(signalname) {
		this._$signalSystem.run.apply(this._$signalSystem, arguments);
	}
	
	runNow(signalname) {
		this._$signalSystem.runNow.apply(this._$signalSystem, arguments);
	}
	
	get sender() {
		return this._$signalSystem.sender;
	}
	
	destroy() {
		if(this._$destroyed) {
			return;
		}
		this._$destroyed = true;
		this.disconnectAll();
		this.onDestroy();
	}
	
	onDestroy() {}
	
}

function base64ToBuffer(base64) {
	var raw = window.atob(base64);
	var array = new Uint8Array(new ArrayBuffer(raw.length));
	for(var i = 0; i < raw.length; ++i) {
		array[i] = raw.charCodeAt(i);
	}
	return array;
}

function bufferToBase64(buffer) {
	let binary = '';
	let bytes = new Uint8Array(buffer);
	let len = bytes.byteLength;
	for(var i = 0; i < len; ++i) {
		binary += String.fromCharCode(bytes[i]);
	}
	return window.btoa(binary);
}

function translateVect(vector) {
	if(!Rex.camera || (Rex.camera.position === undefined)) return vector;
	let t = Rex.camera.getZoom();
	//console.log("zoom", t);
	let w = window.innerWidth / 2;
	let h = window.innerHeight / 2;
	let e = new Rex.Vector2((vector.x - w) / t + w + Rex.camera.position.x,
		(vector.y - h) / t + h + Rex.camera.position.y);
	//console.log("Dist", Rex.Vector2.distance(vector, e),w,h);
	return e;
}

function utf8Decode(utf8String) { //https://gist.github.com/chrisveness/bcb00eb717e6382c5608
	const unicodeString = utf8String.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function(c) {
			var cc = ((c.charCodeAt(0) & 0x0f) << 12) | ((c.charCodeAt(1) & 0x3f) << 6) | (c.charCodeAt(2) & 0x3f);
			return String.fromCharCode(cc);
		}
	).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function(c) {
			var cc = (c.charCodeAt(0) & 0x1f) << 6 | c.charCodeAt(1) & 0x3f;
			return String.fromCharCode(cc);
		}
	);
	return unicodeString;
}

function getParentElementByTag(currentElem, tag) {
	while (currentElem.tagName !== tag && currentElem.localName !== tag) {
		if(currentElem.parentNode.classList == null) {
			return null;
		} else
			currentElem = currentElem.parentNode;
	}
	return currentElem;
}

/**
 * @param currentElem
 * @param className - elem from class list
 */
function getParentElementByClass(currentElem, className) {
	while (!currentElem.classList.contains(className)) {
		if(currentElem.parentNode.classList == null) {
			return null;
		} else
			currentElem = currentElem.parentNode;
	}
	return currentElem;
}

function decomposeObj(obj, string) {
	return string.split('.').reduce((accumulator, currentValue) => {
		if(accumulator == null) return undefined;
		return accumulator[currentValue];
	}, obj);
}

function composeObj(obj, string, value) {
	string.split('.').reduce((accumulator, currentValue, index, array) => {
		if(accumulator[currentValue] == null) accumulator[currentValue] = {};
		if(index === array.length - 1) accumulator[currentValue] = value;
		return accumulator[currentValue];
	}, obj);
	return obj;
}

function joinTextToCompose() {
	let ret = "";
	let arg;
	for (arg in arguments) {
		ret += arguments[arg];
		ret += '.';
	}
	return ret.slice(0, -1);
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
	var words = text.split(" ");
	var countWords = words.length;
	var line = "";
	let count = 1;
	for (var n = 0; n < countWords; n++) {
		var testLine = line + words[n] + " ";
		var testWidth = context.measureText(testLine).width;
		if (testWidth > maxWidth) {
			context.fillText(line, x || 0, y || 0);
			line = words[n] + " ";
			y += lineHeight || 0;
			count++;
		} else {
			line = testLine;
		}
	}
	context.fillText(line, x, y);
	count++;
	return lineHeight * count;
}

/**
 * Log functions
 */
/** @param {...*} args */ Rex.message = function (args) { console.log.apply(console, arguments); };
/** @param {...*} args */ Rex.error = function (args) { console.error.apply(console, arguments); };

/**
 * Copies class properties
 * @param dest Destination class
 * @param src Source JSON serialized object
 */

Rex.copy = function (dest, src) {
	for (var property in src) {
		var value = dest[property];
		if (value instanceof Rex.Vector2) value.copy(src[property]);
		else if (value instanceof Rex.Vector3) value.copy(src[property]);
		else if (value instanceof Rex.Vector4) value.copy(src[property]);
		else if (value instanceof Rex.Matrix4) value.copy(src[property]);
		else if (value instanceof Uint8Array) dest[property] = new Uint8Array(base64ToBuffer(src[property]));
		else dest[property] = JSON.parse(JSON.stringify(src[property]));
	}
};

Rex.clear = function () {
	if (Rex.gui !== undefined) {
		Rex.gui.destroy();
		delete Rex.gui;
		Rex.gui = undefined;
	}
	if (Rex.camera !== undefined) {
		Rex.camera.clear();
		delete Rex.camera;
		Rex.camera = undefined;
	}
	if (Rex.render != null) {
		Rex.render.stop();
		delete Rex.render;
		Rex.render = null;
	}
	if (Rex.grid != null) {
		Rex.grid.clear();
		Rex.grid = null;
	}
	for (let id in Rex.widgets) {
		let widget = Rex.widgets[id];
		if (widget === undefined) continue;
		widget.view.destroy();
	}

	for (let id in Rex.objects) {
		let object = Rex.objects[id];
		if (object === undefined) continue;
		object.destroy();
	}

	if (Rex.scene !== undefined) Rex.scene.cleanup();
};

function needUpdate(data) {
	if (data.hasOwnProperty('destroyed')) Rex.scene.removeObjects(data.destroyed);
	if (data.hasOwnProperty('scene')) Rex.scene.setState(data.scene);
	if (data.hasOwnProperty('meshes')) Rex.scene.setObjects(Rex.meshes, data.meshes, Mesh);
	if (data.hasOwnProperty('lines')) Rex.scene.setObjects(Rex.lines, data.lines, Line);
	if (data.hasOwnProperty('labels')) Rex.scene.setObjects(Rex.labels, data.labels, Label);
	if (data.hasOwnProperty('buffers')) Rex.scene.setObjects(Rex.buffers, data.buffers, Buffer);
	if (data.hasOwnProperty('layouts')) Rex.scene.setObjects(Rex.layouts, data.layouts, Layout);
	if (data.hasOwnProperty('textures')) Rex.scene.setObjects(Rex.textures, data.textures, Texture);
	if (data.hasOwnProperty('materials')) Rex.scene.setObjects(Rex.materials, data.materials, Material);
	if (data.hasOwnProperty('parameters')) Rex.scene.setObjects(Rex.parameters, data.parameters, Parameter);
	if (data.hasOwnProperty('geometries')) Rex.scene.setObjects(Rex.geometries, data.geometries, Geometry);
	if (data.hasOwnProperty('images')) Rex.scene.setObjects(Rex.images, data.images, Rex.Image);
	if (data.hasOwnProperty('widgets')) Rex.scene.setWidgets(Rex.widgets, data.widgets);
	if (data.hasOwnProperty('objects')) Rex.scene.setRexObjects(Rex.objects, data.objects, Rex.Object);

	if (data.hasOwnProperty('camera')) Rex.scene.setCamera(data.camera, Rex.Camera);
	if (data.hasOwnProperty('gui')) Rex.scene.setGui(data.gui);
	if (Rex.scene !== undefined) Rex.scene.cleanup();
}

function checkAllObject() {
	let check = (array) => {
		for (let key in array) {
			let object = array[key];
			if (object === undefined && object.parentId != -1) continue;
			object.checkInit();
		}
	};
	check(Rex.objects);
	check(Rex.widgets);
	check(Rex.buffers);
	check(Rex.layouts);
	check(Rex.textures);
	check(Rex.materials);
	check(Rex.parameters);
	check(Rex.geometries);
	check(Rex.meshes);
	check(Rex.lines);
	check(Rex.labels);
	check(Rex.images);
}

function needCreate(data) {
	Rex.clear();
	Rex.gui = new Gui({});
	let tempImages = Rex.images;
	eval(atob(data));
	for (let key in tempImages) {
		let img = Rex.images[key];
		if (img === undefined) Rex.images[key] = tempImages[key];
	}
	checkAllObject();
	for (let i = 0; i < Rex.otherScene.length; ++i) {
		Rex.otherScene[i].updateAll();
	}
	for (let i = 0; i < Rex.otherGui.length; ++i) {
		Rex.otherGui[i].id = Rex.gui.id;
	}
	Rex.gui.redraw();
}

/**
 * Accessors
 */
//Пока закомментирую, если уже точно нигде не выстрелит. То можно убрать это.
//Rex.getObjects = function(objects, id, constructor) {
//	debugger;
//	if(id === undefined) return id;
//	var object = objects[id];
//	if(object instanceof constructor) return object;
//	object = new constructor();
//	objects[id] = object;
//	Rex.scene.getObject(object, id);
//	return id;
//};

//Rex.getBuffer = function(id) { return Rex.getObjects(Rex.buffers, id, Rex.Buffer); };
//Rex.getLayout = function(id) { return Rex.getObjects(Rex.layouts, id, Rex.Layout); };
//Rex.getTexture = function(id) { return Rex.getObjects(Rex.textures, id, Rex.Texture); };
//Rex.getMaterial = function(id) { return Rex.getObjects(Rex.materials, id, Rex.Material); };
//Rex.getParameter = function(id) { return Rex.getObjects(Rex.parameters, id, Rex.Parameter); };
//Rex.getGeometry = function(id) { return Rex.getObjects(Rex.geometries, id, Rex.Geometry); };
//Rex.getMesh = function(id) { return Rex.getObjects(Rex.meshes, id, Rex.Mesh); };
//Rex.getLine = function(id) { return Rex.getObjects(Rex.lines, id, Rex.Line); };
//Rex.getLabel = function(id) { return Rex.getObjects(Rex.labels, id, Rex.Label); };

/**
 * класс для работы с апи других фреймов.
 * пока умеет только слать сообщения в самый верхний фрейм,
 * если очень будет надо - возможно сделать, чтобы он слал во все фреймы.
 * @instance Rex.FrameApi
 *
 * @example
 * в принимающем фрейме коннектимся на сигнал от Rex.FrameApi
 * this.connect(Rex.FrameApi,"ПАЖАР!ОГОНЬ!",this.onPozar);
 * функция или метод onPozar должна принимать один параментр-объект, у которого будут доступны следующие поля:
 * - eventName {string} - имя еще раз "ПАЖАР!ОГОНЬ!"
 * - data {?} - любая дата, которую передаст фрейм
 * - messageInfo {object} - значение location фрейма отправителя. может пригодится, для проверки от кого именно пришла команда
 *
 * в отправляющем фрейме вызываем Rex.FrameApi.sendMessage("ПАЖАР!ОГОНЬ!", любой_объект_или_значение);
 * важно! любой_объект_или_значение будет передаваться копией,
 * поэтому то что мы туда суем, должно быть КОПИРУЕМЫМ,
 * т.е. без ссылок на DOM-элементы и без циклических ссылок.
 */
class RexFrameApi__Controller extends BaseObject {
	constructor() {
		super();

		window.addEventListener('message', this._$onGetMessage.bind(this));
	}

	/**
	 * метод отправки сообщения в самый верхний фрейм
	 * @param {string} eventName - имя сигнала
	 * @param {?} data - то, что передаем
	 */
	sendMessage(eventName, data) {
		let messageInfo = {};
		try {
			messageInfo = JSON.parse(JSON.stringify(location));
		} catch (e) { }
		
		if (window.top === window.parent) {
			window.top.postMessage({ eventName, data, messageInfo },"*");
		} else {
			window.top.postMessage({ eventName, data, messageInfo },"*");
			window.parent.postMessage({ eventName, data, messageInfo },"*");
		}
	}

	/**
	 * метод, который примет сигнал от браузера в самом верхнем фрейме, и презвратит в сигнал CoreEventSystem
	 * @param {object} e - сообщение
	 * @private
	 */
	_$onGetMessage(e) {
		let data = e.data;
		if (!(data && data.eventName && data.data && data.messageInfo)) return;
		console.log("сообщение между фреймами", e, e.data);
		//TODO check messageInfo?
		this.run(data.eventName, data);
	}

	/**
	 * метод для разбора сообщения по WS от NotificationManager , т.е. пришедшее с плюсов.
	 * @param message_WS - само сообщение.
	 * @private
	 */
	_$parseMessageWS(message_WS) {
		if (!(message_WS && message_WS.eventName && message_WS.data)) {
			console.warn("RexFrameApi__Controller: чтото пошло не так", message_WS);
		}
		this.sendMessage(message_WS.eventName, message_WS.data);
	}
}

/** инстанс для {@link RexFrameApi__Controller} */
Rex.FrameApi = new RexFrameApi__Controller();

/**
 * класс-пример использования {RexFrameApi},
 * в котором мы предоставляем доступ нижним фреймам запустить любое приложение в RexWebTop.
 */
class RexFrameApi__RexWebTopApi extends BaseObject {
	constructor() {
		super();
	}
	
	/**
	 * метод который нужно вызывать из "нижних" фреймов.
	 * @param {string} name - имя приложения
	 * @param {object} [param] - аргументы для запуска
	 */
	createApp(name, param = {}) {
		let data = {name,param};
		Rex.FrameApi.sendMessage("Core.app.createApp",data);
	}
	

}

/** для простоты тоже инстанцируем этот класс в рексе. */
Rex.WebTop = new RexFrameApi__RexWebTopApi();

class Socket {
	
	constructor() {
		this.webSocket = undefined;
	}
	
	handleWebSocket(event) {
		var parseData = JSON.parse(event.data);
		if(parseData.hasOwnProperty("notification")) {
			var type = parseData.notification.type;
			if(type === undefined) return;
			if(type == "create") needCreate(parseData.notification.data);
			else if(type == "update") needUpdate(parseData.notification.data);
			//else if(type == "message") alert(parseData.notification.data);
			else if(type == "link") window.open(parseData.notification.data, "_blank");
			else if(type == "drag" && Rex.gui !== undefined) Rex.gui.dragAndDrop.data = parseData.notification.data;
			else if(type == "Rex.FrameApi") Rex.FrameApi._$parseMessageWS(parseData.notification.data);
			else if(Rex.gui !== undefined) Rex.gui.notificationManager.message(parseData.notification.data, type);
		}
	}
	
	initWebSocket() {
		let url = window.location.href.replace("http", "ws");
		let indexBad = url.indexOf("#");
		if(indexBad != -1)
			url = url.replace(url.slice(indexBad, url.length), ""); // remove #!!!
		this.webSocket = new WebSocket(url);
		
		this.webSocket.onopen = function() {
			console.info("Web Socket connected to " + url);
		};
		
		this.webSocket.onclose = function(event) {
			if(event.wasClean) {
				//alert('Norm close');
				Rex.gui.notificationManager.message('Code: ' + event.code + ' Message: ' + event.reason + " Norm close", "error");
				Rex.gui.redraw();
			} else {
				// alert('Disconnect');
				Rex.gui.notificationManager.message('Code: ' + event.code + ' Message: ' + event.reason + " Disconnect", "error");
				Rex.gui.redraw();
			}
			//alert('Code: ' + event.code + ' Message: ' + event.reason);
		};
		
		this.webSocket.onerror = function(error) {
			alert("Error " + error.message);
		};
		
		document.onbeforeunload = function(e) {console.log(e); this.shutdownWebSocket(); }.bind(this);
		document.onunload = function(e) {console.log(e); this.shutdownWebSocket(); }.bind(this);
		document.onclose = function(e) {console.log(e); this.shutdownWebSocket(); }.bind(this);
		window.onbeforeunload = function(e) {console.log(e); this.shutdownWebSocket(); }.bind(this);
		window.onunload = function(e) {console.log(e); this.shutdownWebSocket(); }.bind(this);
		window.onclose = function(e) {console.log(e); this.shutdownWebSocket(); }.bind(this);
		
		this.webSocket.onmessage = function(event) {
			Rex.engine = new Engine();
			this.handleWebSocket(event);
			this.webSocket.onmessage = this.handleWebSocket;
		}.bind(this);
	}
	
	shutdownWebSocket() {
		if(this.webSocket === undefined) return;
		Rex.callRpcFunction("RexEngine", "close", []);
		this.webSocket.onclose = function(){};
		this.webSocket.close();
		delete this.webSocket;
		this.webSocket = undefined;
	}
	
}

/**
 * Reqest function
 */
Rex.request = function() {
	if(window.XMLHttpRequest) return new XMLHttpRequest();
	return new ActiveXObject("Microsoft.XMLHTTP");
};

Rex.callRpcFunction = function(library, name, args) {
	if(Rex.webSocket === undefined) return;
	if(Rex.webSocket.webSocket.readyState == WebSocket.CLOSING || Rex.webSocket.webSocket.readyState == WebSocket.CLOSED || Rex.webSocket.webSocket.readyState != WebSocket.OPEN) return;
	var content = {
		function : library + '.' + name,
		args : args
	};
	Rex.webSocket.webSocket.send(JSON.stringify(content));
};

Rex.callWebWidgetMethod = function(instanceId, method, args) {
	if(Rex.widgets == null || Rex.webScene == null) return;
	let object = Rex.webScene.findObject(instanceId);
	if(object == null) {
		for(let gui of Rex.otherGui) {
			if(gui.getID() != instanceId) continue;
			object = gui;
			break;
		}
	}
	if(object != null) object[method].apply(object,args);
};

Rex.callRpcMethod = function(library, instanceId, className, method, args) {
	if(Rex.webSocket === undefined || Rex.webSocket.webSocket.readyState == WebSocket.CLOSING || Rex.webSocket.readyState == WebSocket.CLOSED ||
	   Rex.webSocket.webSocket.readyState != WebSocket.OPEN) {
		Rex.callWebWidgetMethod(instanceId, method, args);
		return;
	} else {
		Rex.callWebWidgetMethod(instanceId, method, args);
	}
	var content = {
		method : library + '.' + className + '.' + method + '.' + instanceId,
		args : args
	};
	Rex.webSocket.webSocket.send(JSON.stringify(content));
};

/**
 * Fullscreen application
 */
Rex.requestFullscreen = function() {
	var body = document.body;
	body.requestFullscreen = body.requestFullscreen || body.mozRequestFullScreen || body.webkitRequestFullscreen;
	document.addEventListener("click", function() { body.requestFullscreen(); });
};

/* eslint-disable no-unused-vars */
/* global Scene Rex Mouse KeyBoard Socket CoreEventLoop Gui*/


/**
 * Base class for Rex object
 */
class RexObject {

	constructor() {
		this._parentId = -2;
		this.inited = false;
		this.preInitChecked = false;
	}

	set parentId(value) {
		if (value != this._parentId) {
			this._parentId = value;
			//this.view.destroy();
		}
	}
	
	get parentId() {
		return this._parentId;
	}

	dynamicInit() {
		this.init();
		for (let i = 0; i < this.children.length; ++i) {
			let child = Scene.findObject(this.children[i]);
			if (child !== undefined) child.dynamicInit();
		}
	}

	init() {
		if (this.inited) return;
		this.onInit();
		this.inited = true;
		this.preInitChecked = true;
		this.onSuccessInit();
	}

	/**
	 * Need override!
	 */
	onInit() {}
	onSuccessInit() {}
	onCheckInit() {
		return true;
	}

	checkInit() {
		if (this.inited) return true;
		if (!this.onCheckInit()) return false;
		let parent = Scene.findObject(this.parentId);
		if ((this.parentId != -1) && (parent === undefined)) return false;
		for (let i = 0; i < this.children.length; ++i) {
			let child = Scene.findObject(this.children[i]);
			if (child === undefined) return false;
		}
		if (parent !== undefined && !parent.preInitChecked) {
			parent.checkInit();
			return false;
		}
		this.preInitChecked = true;
		for (let i = 0; i < this.children.length; ++i) {
			let child = Scene.findObject(this.children[i]);
			this.preInitChecked = child.checkInit();
			if (!this.preInitChecked) return false;
		}
		if (parent === undefined || parent.inited) {
			this.dynamicInit();
			//if(Rex.gui !== undefined) Rex.gui.reposition(this);
		}
		return true;
	}

}

/**
 * Initialize Rex
 */
Rex.init = function (web) {
	Rex.eventLoop = new CoreEventLoop();
	Mouse.get();
	KeyBoard.get();
	Rex.gui = new Gui({});
	let container = document.getElementsByClassName("container")[0];
	Rex.container = container.cloneNode(true);
	document.body.removeChild(container);

	//drag and drop into scene fix 27.05.19
	let container1 = document.getElementById("container1");
	container1.ondragover = (e) => e.preventDefault();
	container1.ondrop = e => {
		let cPos = translateVect(new Rex.Vector2(e.clientX, e.clientY));

		let dropData = {};
		dropData.receiver = -1;
		dropData.pos = {x : Math.floor(cPos.x), y : Math.floor(cPos.y)};
		dropData.data = {};

		Rex.gui.drop(dropData);
	};

	if (web != null) return;
	Rex.webSocket = new Socket();
	Rex.webSocket.initWebSocket();
};


class Listener {
	
	constructor(object, name, handler) {
		this.object = object;
		this.name = name;
		this.handler = handler;
	}
	
};

class EventSystem {
	
	constructor() {
		this.listeners = [];
	}
	
	add(object, name, handler) {
		if(this.find(name) !== undefined) {
			console.error("Already exist listener " + name + ".");
			return false;
		}
		this.listeners.push(new Listener(object, name, handler));
		object.addEventListener(name, handler);
		return true;
	}
	
	find(name) {
		for(let i = 0; i < this.listeners.length; ++i) {
			let listener = this.listeners[i];
			if(listener.name == name) return listener;
		}
		return undefined;
	}
	
	remove(name) {
		let listener = this.find(name);
		if(listener === undefined) {
			console.error("Can't remove event listener " + name + ".");
			return false;
		}
		listener.object.removeEventListener(listener.name, listener.handler);
		return true;
	}
	
	clear() {
		for(let i = 0; i < this.listeners.length; ++i) {
			let listener = this.listeners[i];
			listener.object.removeEventListener(listener.name, listener.handler);
		}
		this.listeners = [];
	}
	
};

// Rex header

Rex.compare = function(v0, v1, epsilon) {
	return (Math.abs(v0 - v1) < (epsilon === undefined ? 1e-6 : epsilon));
};

/**
 * Vector2
 * @constructor
 * @param {number=} y
 * @param {number=} x
 */
Rex.Vector2 = function(x, y) {
	this.x = x || 0;
	this.y = y || 0;
};

/**
 * Prototype
 */
Rex.Vector2.prototype = {
	
	constructor: Rex.Vector2,
	
	set: function(x, y) {
		this.x = x || 0;
		this.y = y || 0;
		return this;
	},
	copy: function(v) {
		this.x = v[0];
		this.y = v[1];
		return this;
	},
	scale: function(v) {
		this.x *= v;
		this.y *= v;
		return this;
	},
	
	add: function(v) {
		var x = this.x + v.x;
		var y = this.y + v.y;
		return new Rex.Vector2(x, y);
	},
	sub: function(v) {
		var x = this.x - v.x;
		var y = this.y - v.y;
		return new Rex.Vector2(x, y);
	},
	mul: function(v) {
		var x = this.x * v.x;
		var y = this.y * v.y;
		return new Rex.Vector2(x, y);
	},
	dot: function(v) {
		return this.x * v.x + this.y * v.y;
	},
	length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},
	length2: function() {
		return this.x * this.x + this.y * this.y;
	},
	normalize: function() {
		return this.scale(1 / this.length());
	}
};

Rex.Vector2.distance = function(vec1, vec2) {
	return vec1.sub(vec2).length();
};
Rex.Vector2.compare = function(a, b) {
	if((a.x - b.x) < -Number.EPSILON || (a.x - b.x) > Number.EPSILON) return false;
	if((a.y - b.y) < -Number.EPSILON || (a.y - b.y) > Number.EPSILON) return false;
	return a.sub(b).length2() < Number.EPSILON * Number.EPSILON;
};

/**
 * Vector3
 * @constructor
 * @param {number=} z
 * @param {number=} y
 * @param {number=} x
 */
Rex.Vector3 = function(x, y, z) {
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
};

/**
 * Prototype
 */
Rex.Vector3.prototype = {
	
	constructor: Rex.Vector3,
	
	set: function(x, y, z) {
		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
		return this;
	},
	copy: function(v) {
		this.x = v[0];
		this.y = v[1];
		this.z = v[2];
		return this;
	},
	scale: function(v) {
		this.x *= v;
		this.y *= v;
		this.z *= v;
		return this;
	},
	div: function(v) {
		this.x /= v;
		this.y /= v;
		this.z /= v;
		return this;
	},
	add: function(v) {
		var x = this.x + v.x;
		var y = this.y + v.y;
		var z = this.z + v.z;
		return new Rex.Vector3(x, y, z);
	},
	sub: function(v) {
		var x = this.x - v.x;
		var y = this.y - v.y;
		var z = this.z - v.z;
		return new Rex.Vector3(x, y, z);
	},
	mul: function(v) {
		var x = this.x * v.x;
		var y = this.y * v.y;
		var z = this.z * v.z;
		return new Rex.Vector3(x, y, z);
	},
	
	cross: function(v) {
		var x = this.y * v.z - this.z * v.y;
		var y = this.z * v.x - this.x * v.z;
		var z = this.x * v.y - this.y * v.x;
		return new Rex.Vector3(x, y, z);
	},
	dot: function(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	},
	dot4: function(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z + v.w;
	},
	length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	},
	normalize: function() {
		return this.scale(1 / this.length());
	}
};

/**
 * Vector4
 * @constructor
 * @param {number=} w
 * @param {number=} z
 * @param {number=} y
 * @param {number=} x
 */
Rex.Vector4 = function(x, y, z, w) {
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
	this.w = w || 0;
};

/**
 * Prototype
 */
Rex.Vector4.prototype = {
	
	constructor: Rex.Vector4,
	
	set: function(x, y, z, w) {
		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
		this.w = w || 0;
		return this;
	},
	copy: function(v) {
		this.x = v[0];
		this.y = v[1];
		this.z = v[2];
		this.w = v[3];
		return this;
	},
	scale: function(v) {
		this.x *= v;
		this.y *= v;
		this.z *= v;
		this.w *= v;
		return this;
	},
	
	add: function(v) {
		var x = this.x + v.x;
		var y = this.y + v.y;
		var z = this.z + v.z;
		var w = this.w + v.w;
		return new Rex.Vector4(x, y, z, w);
	},
	sub: function(v) {
		var x = this.x - v.x;
		var y = this.y - v.y;
		var z = this.z - v.z;
		var w = this.w - v.w;
		return new Rex.Vector4(x, y, z, w);
	},
	mul: function(v) {
		var x = this.x * v.x;
		var y = this.y * v.y;
		var z = this.z * v.z;
		var w = this.w * v.w;
		return new Rex.Vector4(x, y, z, w);
	},
	
	dot3: function(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z + this.w;
	},
	dot: function(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
	},
	length3: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	},
	length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	},
	normalize: function() {
		return this.scale(1 / this.length());
	}
};

/**
 * Matrix2
 * @constructor
 * @param {number=} m11
 * @param {number=} m10
 * @param {number=} m01
 * @param {number=} m00
 */
Rex.Matrix2 = function(m00, m01, m10, m11) {
	this.m = new Float32Array([
		m00 || 0, m10 || 0,
		m01 || 0, m11 || 0
	]);
};

/**
 * Prototype
 */
Rex.Matrix2.prototype = {
	
	constructor: Rex.Matrix2,
	
	set: function(m00, m01, m10, m11) {
		var m = this.m;
		m[0] = m00; m[2] = m01;
		m[1] = m10; m[3] = m11;
		return this;
	},
	setElement: function(row, column, v) {
		this.m[column * 2 + row] = v;
		return this;
	}, 
	get: function(row, column) {
		return this.m[column * 2 + row];
	},
	getIdentity: function() {
		var m = this.m;
		m[0] = 1; m[2] = 0;
		m[1] = 0; m[3] = 1;
		return this;
	},
	setRotate(angle) {
		var m = this.m;
		let s = Math.sin(angle * Rex.Deg2Rad);
		let c = Math.cos(angle * Rex.Deg2Rad);
		m[0] = c; m[2] = -s;
		m[1] = s; m[3] = c;
		return this;
	},
	mulVector2: function(v) {
		var m = this.m;
		var vx = v.x, vy = v.y;
		var x = m[0] * vx + m[2] * vy;
		var y = m[1] * vx + m[3] * vy;
		return new Rex.Vector2(x, y);
	},
	getTranspose: function() {
		var m = this.m;
		return new Rex.Matrix2(
			m[0],  m[1],
			m[2],  m[3]
		);
	}
};

/**
 * Globals
 */
Rex.Matrix2.rotate = function(angle) {
	let s = Math.sin(angle * Rex.Deg2Rad);
	let c = Math.cos(angle * Rex.Deg2Rad);
	return new Rex.Matrix2(
		c, -s,
		s, c
	);
};

/**
 * Matrix4
 * @constructor
 * @param {number=} m33
 * @param {number=} m32
 * @param {number=} m31
 * @param {number=} m30
 * @param {number=} m23
 * @param {number=} m22
 * @param {number=} m21
 * @param {number=} m20
 * @param {number=} m13
 * @param {number=} m12
 * @param {number=} m11
 * @param {number=} m10
 * @param {number=} m03
 * @param {number=} m02
 * @param {number=} m01
 * @param {number=} m00
 */
Rex.Matrix4 = function(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
	this.m = new Float32Array([
		m00 || 0, m10 || 0, m20 || 0, m30 || 0,
		m01 || 0, m11 || 0, m21 || 0, m31 || 0,
		m02 || 0, m12 || 0, m22 || 0, m32 || 0,
		m03 || 0, m13 || 0, m23 || 0, m33 || 0
	]);
};

/**
 * Prototype
 */
Rex.Matrix4.prototype = {
	
	constructor: Rex.Matrix4,
	
	set: function(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
		var m = this.m;
		m[0] = m00; m[4] = m01; m[8] = m02;  m[12] = m03;
		m[1] = m10; m[5] = m11; m[9] = m12;  m[13] = m13;
		m[2] = m20; m[6] = m21; m[10] = m22; m[14] = m23;
		m[3] = m30; m[7] = m31; m[11] = m32; m[15] = m33;
		return this;
	},
	setColumn3: function(column, vec) {
		var m = this.m;
		switch(column) {
			case 0: {
				m[0] = vec.x;
				m[1] = vec.y;
				m[2] = vec.z;
				break;
			}
			case 1: {
				m[4] = vec.x;
				m[5] = vec.y;
				m[6] = vec.z;
				break;
			}
			case 2: {
				m[8] = vec.x;
				m[9] = vec.y;
				m[10] = vec.z;
				break;
			}
			case 3: {
				m[12] = vec.x;
				m[13] = vec.y;
				m[14] = vec.z;
				break;
			}
			default: {
				m[0] = vec.x;
				m[1] = vec.y;
				m[2] = vec.z;
				break;
			}
		}
		return this;
	},
	copy: function(v) {
		var m = this.m;
		m[0] = v[0]; m[4] = v[4]; m[8] = v[8];   m[12] = v[12];
		m[1] = v[1]; m[5] = v[5]; m[9] = v[9];   m[13] = v[13];
		m[2] = v[2]; m[6] = v[6]; m[10] = v[10]; m[14] = v[14];
		m[3] = v[3]; m[7] = v[7]; m[11] = v[11]; m[15] = v[15];
		return this;
	},
	getIdentity: function() {
		var m = this.m;
		m[0] = 1; m[4] = 0; m[8] = 0;  m[12] = 0;
		m[1] = 0; m[5] = 1; m[9] = 0;  m[13] = 0;
		m[2] = 0; m[6] = 0; m[10] = 1; m[14] = 0;
		m[3] = 0; m[7] = 0; m[11] = 0; m[15] = 1;
		return this;
	},
	getColumn3: function(column) {
		var m = this.m;
		let col = new Rex.Vector3();
		switch(column) {
			case 0: {
				col.x = m[0];
				col.y = m[1];
				col.z = m[2];
				break;
			}
			case 1: {
				col.x = m[4];
				col.y = m[5];
				col.z = m[6];
				break;
			}
			case 2: {
				col.x = m[8];
				col.y = m[9];
				col.z = m[10];
				break;
			}
			case 3: {
				col.x = m[12];
				col.y = m[13];
				col.z = m[14];
				break;
			}
			default: {
				col.x = m[0];
				col.y = m[1];
				col.z = m[2];
				break;
			}
		}
		return col;
	},
	getScale: function() {
		var m = this.m;
		var x = Math.sqrt(m[0] * m[0] + m[1] * m[1] + m[2] * m[2]);
		var y = Math.sqrt(m[4] * m[4] + m[5] * m[5] + m[6] * m[6]);
		var z = Math.sqrt(m[8] * m[8] + m[9] * m[9] + m[10] * m[10]);
		return new Rex.Vector3(x, y, z);
	},
	getTranslate: function() {
		var m = this.m;
		return new Rex.Vector3(m[12], m[13], m[14]);
	},
	getRotate: function() {
		var m = this.m;
		return new Rex.Matrix4(
			m[0], m[4],  m[8], 0,
			m[1], m[5],  m[9], 0,
			m[2], m[6], m[10], 0,
			   0,    0,     0, 1
		);
	},
	
	getTranspose: function() {
		var m = this.m;
		return new Rex.Matrix4(
			 m[0],  m[1],  m[2], m[3],
			 m[4],  m[5],  m[6], m[7],
			 m[8],  m[9], m[10], m[11],
			m[12], m[13], m[14], m[15]
		);
	},
	getInverse43: function() {
		var m = this.m;
		var m00 = m[0], m01 = m[4], m02 = m[8],  m03 = m[12];
		var m10 = m[1], m11 = m[5], m12 = m[9],  m13 = m[13];
		var m20 = m[2], m21 = m[6], m22 = m[10], m23 = m[14];
		var x = m00 * (m11 * m22 - m12 * m21);
		var y = m01 * (m10 * m22 - m12 * m20);
		var z = m02 * (m10 * m21 - m11 * m20);
		var scale = 1 / (x - y + z);
		var ret = new Rex.Matrix4();
		m = ret.m;
		m[0] = (m11 * m22 - m12 * m21) * scale;
		m[1] = (m12 * m20 - m10 * m22) * scale;
		m[2] = (m10 * m21 - m11 * m20) * scale;
		m[4] = (m02 * m21 - m01 * m22) * scale;
		m[5] = (m00 * m22 - m02 * m20) * scale;
		m[6] = (m01 * m20 - m00 * m21) * scale;
		m[8] = (m01 * m12 - m02 * m11) * scale;
		m[9] = (m02 * m10 - m00 * m12) * scale;
		m[10] = (m00 * m11 - m01 * m10) * scale;
		m[12] = -m[0] * m03 - m[4] * m13 - m[8] * m23;
		m[13] = -m[1] * m03 - m[5] * m13 - m[9] * m23;
		m[14] = -m[2] * m03 - m[6] * m13 - m[10] * m23;
		m[15] = 1;
		return ret;
	},
	
	mul: function(m) {
		var m0_m = this.m;
		var m1_m = m.m;
		var m0_m00 = m0_m[0], m0_m01 = m0_m[4], m0_m02 = m0_m[8],  m0_m03 = m0_m[12];
		var m0_m10 = m0_m[1], m0_m11 = m0_m[5], m0_m12 = m0_m[9],  m0_m13 = m0_m[13];
		var m0_m20 = m0_m[2], m0_m21 = m0_m[6], m0_m22 = m0_m[10], m0_m23 = m0_m[14];
		var m0_m30 = m0_m[3], m0_m31 = m0_m[7], m0_m32 = m0_m[11], m0_m33 = m0_m[15];
		var m1_m00 = m1_m[0], m1_m01 = m1_m[4], m1_m02 = m1_m[8],  m1_m03 = m1_m[12];
		var m1_m10 = m1_m[1], m1_m11 = m1_m[5], m1_m12 = m1_m[9],  m1_m13 = m1_m[13];
		var m1_m20 = m1_m[2], m1_m21 = m1_m[6], m1_m22 = m1_m[10], m1_m23 = m1_m[14];
		var m1_m30 = m1_m[3], m1_m31 = m1_m[7], m1_m32 = m1_m[11], m1_m33 = m1_m[15];
		var m00 = m0_m00 * m1_m00 + m0_m01 * m1_m10 + m0_m02 * m1_m20 + m0_m03 * m1_m30;
		var m10 = m0_m10 * m1_m00 + m0_m11 * m1_m10 + m0_m12 * m1_m20 + m0_m13 * m1_m30;
		var m20 = m0_m20 * m1_m00 + m0_m21 * m1_m10 + m0_m22 * m1_m20 + m0_m23 * m1_m30;
		var m30 = m0_m30 * m1_m00 + m0_m31 * m1_m10 + m0_m32 * m1_m20 + m0_m33 * m1_m30;
		var m01 = m0_m00 * m1_m01 + m0_m01 * m1_m11 + m0_m02 * m1_m21 + m0_m03 * m1_m31;
		var m11 = m0_m10 * m1_m01 + m0_m11 * m1_m11 + m0_m12 * m1_m21 + m0_m13 * m1_m31;
		var m21 = m0_m20 * m1_m01 + m0_m21 * m1_m11 + m0_m22 * m1_m21 + m0_m23 * m1_m31;
		var m31 = m0_m30 * m1_m01 + m0_m31 * m1_m11 + m0_m32 * m1_m21 + m0_m33 * m1_m31;
		var m02 = m0_m00 * m1_m02 + m0_m01 * m1_m12 + m0_m02 * m1_m22 + m0_m03 * m1_m32;
		var m12 = m0_m10 * m1_m02 + m0_m11 * m1_m12 + m0_m12 * m1_m22 + m0_m13 * m1_m32;
		var m22 = m0_m20 * m1_m02 + m0_m21 * m1_m12 + m0_m22 * m1_m22 + m0_m23 * m1_m32;
		var m32 = m0_m30 * m1_m02 + m0_m31 * m1_m12 + m0_m32 * m1_m22 + m0_m33 * m1_m32;
		var m03 = m0_m00 * m1_m03 + m0_m01 * m1_m13 + m0_m02 * m1_m23 + m0_m03 * m1_m33;
		var m13 = m0_m10 * m1_m03 + m0_m11 * m1_m13 + m0_m12 * m1_m23 + m0_m13 * m1_m33;
		var m23 = m0_m20 * m1_m03 + m0_m21 * m1_m13 + m0_m22 * m1_m23 + m0_m23 * m1_m33;
		var m33 = m0_m30 * m1_m03 + m0_m31 * m1_m13 + m0_m32 * m1_m23 + m0_m33 * m1_m33;
		return new Rex.Matrix4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
	},
	mulVector3: function(v) {
		var m = this.m;
		var vx = v.x, vy = v.y, vz = v.z;
		var x = m[0] * vx + m[4] * vy + m[8] * vz + m[12];
		var y = m[1] * vx + m[5] * vy + m[9] * vz + m[13];
		var z = m[2] * vx + m[6] * vy + m[10] * vz + m[14];
		return new Rex.Vector3(x, y, z);
	},
	mulVector4: function(v) {
		var m = this.m;
		var vx = v.x, vy = v.y, vz = v.z, vw = v.w;
		var x = m[0] * vx + m[4] * vy + m[8] * vz + m[12] * vw;
		var y = m[1] * vx + m[5] * vy + m[9] * vz + m[13] * vw;
		var z = m[2] * vx + m[6] * vy + m[10] * vz + m[14] * vw;
		var w = m[3] * vx + m[7] * vy + m[11] * vz + m[14] * vw;
		return new Rex.Vector4(x, y, z, w);
	},
	
	toQuaternion: function() {
		var x, y, z, w;
		var mm = this.m;
		var trace = mm[0] + mm[5] + mm[10];
		if(trace > 0) {
			var s = Math.sqrt(trace + 1) * 2;
			x = (mm[6] - mm[9]) / s;
			y = (mm[8] - mm[2]) / s;
			z = (mm[1] - mm[4]) / s;
			w = s * 0.25;
		} else if(mm[0] > mm[5] && mm[0] > mm[10]) {
			var s = Math.sqrt(1 + mm[0] - mm[5] - mm[10]) * 2;
			x = s * 0.25;
			y = (mm[4] + mm[1]) / s;
			z = (mm[8] + mm[2]) / s;
			w = (mm[6] - mm[9]) / s;
		} else if(mm[5] > mm[10]) {
			var s = Math.sqrt(1 + mm[5] - mm[0] - mm[10]) * 2;
			x = (mm[4] + mm[1]) / s;
			y = s * 0.25;
			z = (mm[9] + mm[6]) / s;
			w = (mm[8] - mm[2]) / s;
		} else {
			var s = Math.sqrt(1 + mm[10] - mm[0] - mm[5]) * 2;
			x = (mm[8] + mm[2]) / s;
			y = (mm[9] + mm[6]) / s;
			z = s * 0.25;
			w = (mm[1] - mm[4]) / s;
		}
		return new Rex.Quaternion(x, y, z, w);
	},
	
	equal: function(mat) {
		return Rex.compare(this.m[0], mat.m[0]) &&
			Rex.compare(this.m[1], mat.m[1]) &&
			Rex.compare(this.m[2], mat.m[2]) &&
			Rex.compare(this.m[3], mat.m[3]) &&
			Rex.compare(this.m[4], mat.m[4]) &&
			Rex.compare(this.m[5], mat.m[5]) &&
			Rex.compare(this.m[6], mat.m[6]) &&
			Rex.compare(this.m[7], mat.m[7]) &&
			Rex.compare(this.m[8], mat.m[8]) &&
			Rex.compare(this.m[9], mat.m[9]) &&
			Rex.compare(this.m[10], mat.m[10]) &&
			Rex.compare(this.m[11], mat.m[11]) &&
			Rex.compare(this.m[12], mat.m[12]) &&
			Rex.compare(this.m[13], mat.m[13]) &&
			Rex.compare(this.m[14], mat.m[14]) &&
			Rex.compare(this.m[15], mat.m[15]);
	}
	
};

/**
 * Globals
 */
Rex.Matrix4.scale = function(x, y, z) {
	return new Rex.Matrix4(
		x, 0, 0, 0,
		0, y, 0, 0,
		0, 0, z, 0,
		0, 0, 0, 1
	);
};

Rex.Matrix4.translate = function(x, y, z) {
	return new Rex.Matrix4(
		1, 0, 0, x || 0,
		0, 1, 0, y || 0,
		0, 0, 1, z || 0,
		0, 0, 0, 1
	);
};

Rex.Matrix4.rotateX = function(angle) {
	var s = Math.sin(angle * Rex.Deg2Rad);
	var c = Math.cos(angle * Rex.Deg2Rad);
	return new Rex.Matrix4(
		1, 0,  0, 0,
		0, c, -s, 0,
		0, s,  c, 0,
		0, 0,  0, 1
	);
};

Rex.Matrix4.rotateY = function(angle) {
	var s = Math.sin(angle * Rex.Deg2Rad);
	var c = Math.cos(angle * Rex.Deg2Rad);
	return new Rex.Matrix4(
		 c, 0, s, 0,
		 0, 1, 0, 0,
		-s, 0, c, 0,
		 0, 0, 0, 1
	);
};
Rex.Matrix4.rotateZ = function(angle) {
	var s = Math.sin(angle * Rex.Deg2Rad);
	var c = Math.cos(angle * Rex.Deg2Rad);
	return new Rex.Matrix4(
		c, -s, 0, 0,
		s,  c, 0, 0,
		0,  0, 1, 0,
		0,  0, 0, 1
	);
};

Rex.Matrix4.lookAt = function(from, to, up) {
	var z = from.sub(to).normalize();
	var x = up.cross(z).normalize();
	var y = z.cross(x).normalize();
	return new Rex.Matrix4(
		x.x, x.y, x.z, -from.dot(x),
		y.x, y.y, y.z, -from.dot(y),
		z.x, z.y, z.z, -from.dot(z),
		  0,   0,   0,   1
	);
};

Rex.Matrix4.perspective = function(fov, aspect, near, far) {
	var h = Math.tan(Math.PI * 0.5 - Math.PI * fov / 360);
	var w = h / aspect;
	var nf = near - far;
	return new Rex.Matrix4(
		w, 0,  0, 0,
		0, h,  0, 0,
		0, 0,  (near + far) / nf, 2 * near * far / nf,
		0, 0, -1, 1
	);
};

Rex.Matrix4.ortho = function(left, right, bottom, top, near, far) {
	let rl = right - left;
	let tb = top - bottom;
	let fn = far - near;
	return new Rex.Matrix4(
		2 / rl, 0,      0,       -(right + left) / rl,
		0,      2 / tb, 0,       -(top + bottom) / tb,
		0,      0,      -2 / fn, -(far + near) / fn,
		0,      0,      0,       1
	);
};

/**
 * Quaternion
 * @constructor
 * @param {number=} w
 * @param {number=} z
 * @param {number=} y
 * @param {number=} x
 */
Rex.Quaternion = function(x, y, z, w) {
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
	this.w = w || 1;
};

/**
 * Prototype
 */
Rex.Quaternion.prototype = {
	
	constructor: Rex.Quaternion,
	
	set: function(x, y, z, w) {
		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
		this.w = w || 0;
		return this;
	},
	setAxisAngle: function(axis, angle) {
		var s = Math.sin(angle * 0.5);
		var c = Math.cos(angle * 0.5);
		var ilength = 1 / axis.length();
		this.x = axis.x * ilength * s;
		this.y = axis.y * ilength * s;
		this.z = axis.z * ilength * s;
		this.w = c;
		return this;
	},
	copy: function(v) {
		this.x = v[0];
		this.y = v[1];
		this.z = v[2];
		this.w = v[3];
		return this;
	},
	
	mul: function(q) {
		var x =  this.x * q.w + this.y * q.z - this.z * q.y + this.w * q.x;
		var y = -this.x * q.z + this.y * q.w + this.z * q.x + this.w * q.y;
		var z =  this.x * q.y - this.y * q.x + this.z * q.w + this.w * q.z;
		var w = -this.x * q.x - this.y * q.y - this.z * q.z + this.w * q.w;
		return new Rex.Quaternion(x, y, z, w);
	},
	
	toMatrix: function() {
		var x2 = this.x * 2;
		var y2 = this.y * 2;
		var z2 = this.z * 2;
		var xx2 = this.x * x2;
		var xy2 = this.x * y2;
		var yy2 = this.y * y2;
		var yz2 = this.y * z2;
		var zx2 = this.z * x2;
		var zz2 = this.z * z2;
		var wx2 = this.w * x2;
		var wy2 = this.w * y2;
		var wz2 = this.w * z2;
		var m00 = 1 - yy2 - zz2; var m01 = xy2 - wz2;     var m02 = zx2 + wy2;     var m03 = 0;
		var m10 = xy2 + wz2;     var m11 = 1 - xx2 - zz2; var m12 = yz2 - wx2;     var m13 = 0;
		var m20 = zx2 - wy2;     var m21 = yz2 + wx2;     var m22 = 1 - xx2 - yy2; var m23 = 0;
		var m30 = 0;             var m31 = 0;             var m32 = 0;             var m33 = 1;
		return new Rex.Matrix4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
	}
};

/**
 * BoundBox
 * @constructor
 * @param {number=} min
 * @param {number=} max
 */

Rex.BoundBox = function(min, max) {
	this.min = min;
	this.max = max;
};

/**
 * Prototype
 */
Rex.BoundBox.prototype = {
	
	constructor: Rex.BoundBox,
	
	inside: function(point, radius) {
		if(this.min.x > point.x + radius || this.max.x < point.x - radius) return 0;
		if(this.min.y > point.y + radius || this.max.y < point.y - radius) return 0;
		return 1;
	}
	
};

/**
 * Globals
 */
Rex.Quaternion.rotate = function(axis, angle) {
	var s = Math.sin(angle * Rex.Deg2Rad);
	var c = Math.cos(angle * Rex.Deg2Rad);
	var length = axis.length();
	return new Rex.Quaternion(
		axis.x * s / length,
		axis.y * s / length,
		axis.z * s / length,
		c
	);
};

Rex.getPlaneDistance = function(pt, normal) {
	return -pt.dot(normal);
};

Rex.clamp = function(v, v0, v1) {
	if(v < v0) return v0;
	if(v > v1) return v1;
	return v;
};


/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* global Widget WidgetViewHtml Rex Color Camera2D CameraOrbit CameraOrtho Gui*/

/**
 * Scene
 * @constructor
 */
class Scene {

	constructor(state) {
		this.background = new Rex.Vector4();
		this.parameters = [];
		this.request = undefined;
		this.customBackground = false;
		if (state !== undefined) Rex.copy(this, state);
		this.needDestroy = [];
		this.setColor();

		if(Rex.scene)
			this.userCustomCSSStyles = Rex.scene.userCustomCSSStyles;
		else 
			this.userCustomCSSStyles = {};

		this.setCustomCSSStyles(this.userCSSStyles);

	}

	setColor(newColor) {
		let color = new Color();
		color.r = this.background.x;
		color.g = this.background.y;
		color.b = this.background.z;
		color.a = this.background.w;

		if ((newColor != null) && !this.customBackground) {
			this.customBackground = true;
			this.background = newColor;
			color.r = newColor.x;
			color.g = newColor.y;
			color.b = newColor.z;
			color.a = newColor.w;
		} else if (!this.customBackground && (Rex.gui != null)) {
			color.fromString(Rex.gui.styleLibrary.getParam("Scene", "backgroundColor", "rgba(0,0,0,0.9)"));
			this.background.x = color.r / 255;
			this.background.y = color.g / 255;
			this.background.z = color.b / 255;
			this.background.w = color.a / 255;
		}
		document.body.style.backgroundColor = `rgba(${color.r},${color.g},${color.b},${color.a / 255})`;
	}

	setParameters(parameters) {
		this.parameters = parameters;
	}

	setCustomCSSStyles(state) {
		if(!state) return;

		// clear
		for (const item in this.userCustomCSSStyles) {
			let v = state[item];
			if (v) continue;
			this.userCustomCSSStyles[item].remove();
			delete this.userCustomCSSStyles[item];
		}

		// add
		for (const item in state) {
			if (this.userCustomCSSStyles[item]) continue;
			let rule = item;
			try {
				rule = decodeURIComponent(escape(window.atob(item)));
			} catch (e) {
				continue;
			}
			let data = state[item];
			try {
				data = decodeURIComponent(escape(window.atob(data)));
			} catch (e) {
				continue;
			}
			let sheet = document.createElement("style")
			sheet.innerHTML = rule + "{" + data + "}";
			document.body.appendChild(sheet);
			this.userCustomCSSStyles[item] = sheet;
		}
	}

	setClipBoard(state) {

		let data = "";
		try {
			data = decodeURIComponent(escape(window.atob(state)));
		} catch (e) {
			console.log(this.widget.type, "clipBoardData ->", "Text DecodeError!", e);
			return;
		}

		if (navigator.clipboard) { // async	
			navigator.clipboard.writeText(data).then(function () {
				console.log("Async: Copying to clipboard was successful!");
			}, function (err) {
				console.error("Async: Could not copy text: ", err);
			});

		} else if (window.clipboardData) { // IE
			window.clipboardData.setData("Text", data);
		} else { // sync
			const commandSuppotr = document.queryCommandSupported;
			const commandCopySuppotr = document.queryCommandSupported("copy");

			let el = document.createElement("textarea");
			el.value = data;
			el.setAttribute("readonly", true);
			document.body.appendChild(el);
			el.focus();
			el.select();

			try {
				let result = document.execCommand("copy");
				if (!result)
					console.error("document.execCommand[copy]: \"FALSE\"!");
			} catch (e) {
				console.error("Cant` exec command \"COPY\":", e);
			}

			document.body.removeChild(el);
		}
	}

	setState(state) {
		Rex.copy(this, state);
		if (state.background !== undefined) this.setColor();

		// COPY IN CLIPBOARD 
		if (state.clipBoardData != null && state.clipBoardData.length > 0) {
			this.setClipBoard(state.clipBoardData);
		}

		// USER CUSTOM STYLES
		if (state.userCSSStyles) {
			this.setCustomCSSStyles(state.userCSSStyles);
		}

		// CSS HARD
		if (state.hardCSS) {
			let data = "";
			try {
				data = decodeURIComponent(escape(window.atob(state.hardCSS)));
			} catch (e) {
				//
			}
			if(data.length) {
				let sheet = document.createElement("style")
				sheet.innerHTML = data;
				document.body.appendChild(sheet);
			}
		}

	}

	static findObject(id) {
		let obj;
		if (Rex.widgets != null) {
			obj = Rex.widgets[id];
			if (obj != null) return obj;
		}
		if (Rex.buffers != null) {
			obj = Rex.buffers[id];
			if (obj != null) return obj;
		}
		if (Rex.layouts != null) {
			obj = Rex.layouts[id];
			if (obj != null) return obj;
		}
		if (Rex.textures != null) {
			obj = Rex.textures[id];
			if (obj != null) return obj;
		}
		if (Rex.materials != null) {
			obj = Rex.materials[id];
			if (obj != null) return obj;
		}
		if (Rex.parameters != null) {
			obj = Rex.parameters[id];
			if (obj != null) return obj;
		}
		if (Rex.geometries != null) {
			obj = Rex.geometries[id];
			if (obj != null) return obj;
		}
		if (Rex.meshes != null) {
			obj = Rex.meshes[id];
			if (obj != null) return obj;
		}
		if (Rex.lines != null) {
			obj = Rex.lines[id];
			if (obj != null) return obj;
		}
		if (Rex.labels != null) {
			obj = Rex.labels[id];
			if (obj != null) return obj;
		}
		if (Rex.images != null) {
			obj = Rex.images[id];
			if (obj != null) return obj;
		}
		return undefined;
	}

	/**
	 * Performs an object state request to the server
	 * @param object Object to obtain state
	 * @param id Object unique identifier
	 */
	//Пока закомментирую, если уже точно нигде не выстрелит. То можно убрать это.
	//getObject(object, id) {
	//	if(object.request !== undefined) return;
	//	object.request = Rex.request();
	//	object.request.open("GET", "/object.js?id=" + id, true);
	//	object.request.onreadystatechange = (function(object) {
	//		return function() {
	//			if(object.request.readyState === 4 && object.request.status === 200) {
	//				var response = object.request.responseText;
	//				if(response.length > 0) object.setState(JSON.parse(response));
	//				object.request = undefined;
	//			}
	//		}
	//	})(object);
	//	object.request.send(null);
	//}

	setWidgets(objects, indices) {
		for (var index in indices) {
			if (this.needDestroy.indexOf(parseInt(index)) != -1) continue;
			var object = objects[index];
			if (object !== undefined) {
				object.setState(indices[index]);
			} else {
				var o = indices[index];
				var constructor = eval(o.type);
				object = new constructor(indices[index]);
				if (object === undefined) continue;
				objects[index] = object;
				object.checkInit();
			}
		}
	}

	setRexObjects(objects, indices) {
		for (let index in indices) {
			if (this.needDestroy.indexOf(parseInt(index)) != -1) continue;
			let object = objects[index];
			if (object !== undefined) {
				object.setState(indices[index]);
			} else {
				let o = indices[index];
				let constructor = eval(o.type);
				object = new constructor(indices[index]);
				if (object === undefined) continue;
				objects[index] = object;
				object.checkInit();
			}
		}
	}

	/**
	 * Performs updating of object states
	 * @param objects An array of objects
	 * @param indices The array of object identifiers or states
	 * @param constructor The object constructor function
	 */
	setObjects(objects, indices, constructor) {
		for (var index in indices) {
			var object = objects[index];
			if (object !== undefined) {
				object.setState(indices[index]);
			} else if (constructor !== undefined) {
				object = new constructor(indices[index]);
				objects[index] = object;
				object.checkInit();
			}
		}
		//TODO check all meshes and other objects
	}

	// Метод вызываемый update'ом камеры - переключение камеры или обновление параметров
	setCamera(state, constructor) {
		if (state === undefined) return;
		if (Rex.camera !== undefined) {
			if (Rex.camera.type != state.type) {
				Rex.camera.clear();
				delete Rex.camera;

				switch (state.type) {
					case ("CameraOrbit"): {
						Rex.camera = new CameraOrbit(state);
						break;
					}
					case ("CameraOrtho"): {
						Rex.camera = new CameraOrtho(state);
						break;
					}
					case ("Camera2D"): {
						Rex.camera = new Camera2D(state);
						break;
					}
				}
				return;
			}
			Rex.camera.setState(state);
			return;
		} else {
			Rex.camera = new constructor(state);
		}
	}

	setGui(state) {
		if (Rex.gui !== undefined) {
			Rex.gui.setState(state);
		} else {
			Rex.gui = new Gui(state);
		}
	}

	removeObjects(indices) {
		this.needDestroy = this.needDestroy.concat(indices);
	}

	cleanup() {
		if (this === undefined) return;
		if (this.needDestroy.length == 0) return;
		let array = [
			Rex.buffers,
			Rex.layouts,
			Rex.textures,
			Rex.parameters,
			Rex.geometries,
			Rex.meshes,
			Rex.lines,
			Rex.labels,
			Rex.images,
			Rex.widgets
		];

		for (let i = 0; i < this.needDestroy.length; ++i) {
			let id = this.needDestroy[i];
			if (id === undefined) continue;
			for (let j in array) {
				if (array[j] === undefined) continue;
				if (array[j][id] === undefined) continue;
				if (array[j][id] instanceof Widget) {
					array[j][id].view.destroy();
				}
				delete array[j][id];
				break;
			}
		}

		this.needDestroy = [];
		if (Rex.gui !== undefined) {
			Rex.gui.resort();
			Rex.gui.redraw();
		}
	}

}

// Rex header

class Camera {

	constructor(state) {
		this.id = -1;
		this.projection = new Rex.Matrix4();
		this.modelview = new Rex.Matrix4();
		
		this.clientWidth = 1920;
		this.clientHeight = 1080;
		
		this.enabled = true;
		this.zoom = 1.0;
		this.setState(state);

		this.eventSystem = new EventSystem();

		// event listeners
		this.eventSystem.add(document, "contextmenu", function(event) { event.preventDefault(); });
		this.eventSystem.add(document, "mousedown", this.mouseDown.bind(this));
		this.eventSystem.add(document, "mouseup", this.mouseUp.bind(this));
		this.eventSystem.add(document, "mousemove", this.mouseMove.bind(this));
		this.eventSystem.add(document, "wheel", this.mouseWheel.bind(this));
		this.eventSystem.add(document, "DOMMouseScroll", this.mouseWheel.bind(this));
		this.eventSystem.add(document, "touchstart", this.touchStart.bind(this));
		this.eventSystem.add(document, "touchend", this.touchEnd.bind(this));
		this.eventSystem.add(document, "touchmove", this.touchMove.bind(this));
	}

	setEnabled(enabled) {
		this.enabled = enabled;
	}

	isEnabled() {
		return this.enabled;
	}

	setZoom(value) {
		this.zoom = value;
		Rex.callRpcMethod("Rex", this.id, "BaseCamera", "setZoom", [this.zoom]);
	}

	getProjection() {
		return this.projection;
	}

	getModelview() {
		return this.modelview;
	}

	setProjection() {
		let p = this.getProjection();
		if (p !== undefined) {
			if (!p.equal(this.projection)) {
				Rex.callRpcMethod("Rex", this.id, "Camera", "setProjectionFromString", [JSON.stringify(Array.from(p.m))]);
				this.projection = p;
			}
		}
	}

	setModelview() {
		let m = this.getModelview();
		if (m !== undefined) {
			if (!m.equal(this.modelview)) {
				Rex.callRpcMethod("Rex", this.id, "Camera", "setModelviewFromString", [JSON.stringify(Array.from(m.m))]);
				this.modelview = m;
			}
		}
	}

	getPos() {
		return this.modelview.getInverse43().getTranslate();
	}

	setState(state) {
		if(state !== undefined) {
			Rex.copy(this, state);
		}
	}

	update() {
		if (!this.enabled) return;

		this.setModelview();
		this.setProjection();

		//if(Rex.gui !== undefined) Rex.gui.redraw();
	}

	clear() {
		this.eventSystem.clear();
	}

	getZoom() {
		return this.onGetZoom();
	}

	onGetZoom() {
		return 10000 / Math.pow(2.0, this.zoom);
	}

	mouseDown(event) {
		this.onMouseDown(event);
	}

	mouseUp(event) {
		this.onMouseUp(event);
	}

	mouseMove(event) {
		if(this.clientWidth != window.innerWidth) {
			let w = window.innerWidth;
			this.clientWidth = w;
			Rex.callRpcMethod("Rex", this.id, "Camera", "setClientWidth", [w]);
		}
		
		if(this.clientHeight != window.innerHeight) {
			let h = window.innerHeight;
			this.clientHeight = h;
			Rex.callRpcMethod("Rex", this.id, "Camera", "setClientHeight", [h]);
		}
		
		this.onMouseMove(event);
	}

	mouseWheel(event) {
		this.onMouseWheel(event);
	}

	touchStart(event) {
		this.onTouchStart(event);
	}

	touchEnd(event) {
		this.onTouchEnd(event);
	}

	touchMove(event) {
		this.onTouchMove(event);
	}

	onMouseDown(event) {
		
	}

	onMouseUp(event) {

	}

	onMouseMove(event) {
		
	}

	onMouseWheel(event) {

	}

	onTouchStart(event) {

	}

	onTouchEnd(event) {

	}

	onTouchMove(event) {

	}
	
}

class CameraOrtho extends Camera {

	constructor(state) {
		super(state);
		this.zoom = 7;
		this.maxZoom = 30;
		this.minZoom = 0.000001;
		this.prevMousePos = {
			x: 0,
			y: 0
		};
		this.target = new Rex.Vector3();
		this.newTarget = new Rex.Vector3();
		this.distance = 5000;
		this.rotation = new Rex.Quaternion();
		this.anchorPoint = new Rex.Vector3();

		this.isCanRotate = true;

		this.dstTarget = new Rex.Vector3();
		this.dstRotation = new Rex.Quaternion();

		this.animationTime = 0;
		this.animation = false;

		this.animationSpeed = 1.0;

		this.srcZoom = 7;
		this.dstZoom = 7;
		this.midZoom = 7;

		this.state = {
			doCameraMoving: false,
			doCameraOffset: false
		};

		this.setState(state);
	};

	animateTo() {
		if (arguments.length == 1 && typeof(arguments[0] == "object")) {
			this.animateTo_T(arguments[0]);
		} else if (arguments.length == 2) {
			let type = typeof(arguments[1]);
			if (type == "object")
				this.animateTo_TR(arguments[0], arguments[1]);
			else if (type == "number")
				this.animateTo_TZ(arguments[0], arguments[1]);
			else
				return;
		} else if (arguments.length == 3) {
			this.animateTo_TRZ(arguments[0], arguments[1], arguments[2])
		} else {
			return;
		}
	}

	animateTo_T(target_vec) {
		this.dstTarget = target_vec;
		this.dstRotation = this.rotation;

		this.srcZoom = this.zoom;
		this.dstZoom = this.zoom;
		this.midZoom = this.zoom;

		this.animationTime = 0;
		this.animation = true;
	}

	animateTo_TZ(target_vec, zoom) {
		if (this.target == null)
			return;

		this.dstTarget = target_vec;
		this.dstRotation = this.rotation;
		this.srcZoom = this.zoom;
		this.dstZoom = zoom;

		if (this.zoom == zoom) {
			this.midZoom = zoom;
		} else {
			let deltaVec = this.target.sub(target_vec);
			this.midZoom = Math.log(1.0 / (deltaVec.length() / 10000.0), 2.0);
		}

		this.animationTime = 0;
		this.animation = true;
	}

	animateTo_TRZ(target_vec, rotation_quat, zoom) {
		if (this.target == null)
			return;

		this.dstTarget = target_vec;
		this.dstRotation = rotation_quat;
		this.srcZoom = this.zoom;
		this.dstZoom = zoom;	

		if (this.zoom == zoom) {
			this.midZoom = zoom;
		} else {
			let deltaVec = this.target.sub(target_vec);
			this.midZoom = Math.log(1.0 / (deltaVec.length() / 10000.0), 2.0);
		}

		this.animationTime = 0;
		this.animation = true;
	}

	animateTo_TR(target_vec, rotation_quat) {
		this.dstTarget = target_vec;
		this.dstRotation = rotation_quat;

		this.dstZoom = this.zoom;
		this.midZoom = this.zoom;

		this.animation = true;
	}

	update() {
		super.update();
		this.updateAnimation(1 / Rex.FPS);
	}

	updateAnimation(dt) {
		if (!this.animation) return;
		
		this.animationTime += dt * 1.0 * this.animationSpeed;
		if (this.animationTime >= 1.0) {
			this.animation = false;
			this.animationTime = 1.0;
		}

		this.target = this.target.add(this.dstTarget.sub(this.target).mul(this.animationTime));

		this.rotation = this.slerp(this.rotation, this.dstRotation, this.animationTime);

		if (this.animationTime < 0.5)
			this.setZoom(this.srcZoom + (this.midZoom - this.srcZoom) * this.animationTime * 2.0);
		else
			this.setZoom(this.midZoom + (this.dstZoom - this.midZoom) * ((this.animationTime - 0.5) * 2.0));
	}

	slerp(q0, q1, k) {
		if (k <= 0.0) return q0;
		if (k >= 1.0) return q1;

		let ret = new Rex.Quaternion();
		let k0;
		let k1;
		let c = q0.x * q1.x + q0.y * q1.y + q0.z * q1.z + q0.w
		let ac = Math.abs(c);

		if (ac < 1.0 - 1.0e-12) {
			let angle = Math.acos(ac);
			let is = 1.0 / Math.sin(angle);
			k0 = Math.sin(angle * (1.0 - k)) * is;
			k1 = Math.sin(angle * k) * is;
		} else {
			k0 = 1.0 - k;
			k1 = k;
		}

		if (c < 0.0)
			k1 = -k1;

		ret.x = q0.x * k0 + q1.x * k1;
		ret.y = q0.y * k0 + q1.y * k1;
		ret.z = q0.z * k0 + q1.z * k1;
		ret.w = q0.w * k0 + q1.w * k1;

		return ret;
	}

	setState(state) {
		super.setState(state);

		if (state.animation != null) {
			let func_str = "this.animateTo(";
			let need_comma = false;
			if (state.animation.target != null) {
				func_str += state.animation.target;
				need_comma = true;
			}
			if (state.animation.rotation != null) {
				if (need_comma) func_str += ',';
				func_str += state.animation.rotation;
				need_comma = true;
			}
			if (state.animation.zoom != null) {
				if (need_comma) func_str += ',';
				func_str += state.animation.zoom;
			}
			func_str += ");";
			eval(func_str);
		}

		if (state.isCanRotate != null) this.isCanRotate = state.isCanRotate;
		if (state.animationSpeed != null) this.animationSpeed = state.animationSpeed;
	}

	onMouseDown(event) {
		if(!this.enabled) return;
		this.prevMousePos.x = event.clientX;
		this.prevMousePos.y = event.clientY;
		if(event.button == 2 && this.isCanRotate) {
			this.state.doCameraMoving = true;
			this.state.doCameraOffset = false;
		} else if(event.button === 1) {
			this.anchorPoint = this.getCameraPlanePoint(this.target);
			this.newTarget.x = this.target.x;
			this.newTarget.y = this.target.y;
			this.newTarget.z = this.target.z;
			this.state.doCameraMoving = false;
			this.state.doCameraOffset = true;
		}
	}

	onMouseUp(event) {
		if(!this.enabled) return;
		//event.preventDefault();
		this.state.doCameraMoving = false;
		this.state.doCameraOffset = false;
	}

	onMouseMove(event) {
		if(!this.enabled) return;
		//event.preventDefault();
		if(this.state.doCameraMoving && this.isCanRotate) {
			let rot_anglesX = (event.clientX - this.prevMousePos.x) * 0.3;
			let rot_anglesY = (event.clientY - this.prevMousePos.y) * 0.3;
			let mt = this.getModelview().mul(this.getModelview().getInverse43());
			this.rotation = new Rex.Quaternion().setAxisAngle(mt.getColumn3(1), -rot_anglesX * Rex.Deg2Rad).mul(this.rotation);
			this.rotation = new Rex.Quaternion().setAxisAngle(mt.getColumn3(0), -rot_anglesY * Rex.Deg2Rad).mul(this.rotation);
			this.prevMousePos.x = event.clientX;
			this.prevMousePos.y = event.clientY;
		} else if(this.state.doCameraOffset) {
			this.prevMousePos.x = event.clientX;
			this.prevMousePos.y = event.clientY;
			let pickPoint = this.getCameraPlanePoint(this.target);
			this.target = this.newTarget.add(this.anchorPoint.sub(pickPoint));
		}
	}

	onMouseWheel(event) {
		if(!this.enabled) return;
		//event.preventDefault();
		//event.stopPropagation();
		let delta = Math.abs(event.deltaY) / event.deltaY;
		this.setZoom(Rex.clamp(this.zoom - 0.2 * delta, this.minZoom, this.maxZoom));
	}

	pickPlanePoint(plane) {
		let p0 = new Rex.Vector3();
		let p1 = new Rex.Vector3();
		let width = document.body.clientWidth;
		let height = document.body.clientHeight;
		let projection = this.getProjection();
		let imodelview = new Rex.Matrix4().getIdentity().mul(new Rex.Matrix4().getIdentity().getInverse43());

		projection.m[0] *= height / width;
		let x = -(this.prevMousePos.x / width * 2.0 - 1.0 + projection.m[8]) / projection.m[0];
		let y = (this.prevMousePos.y / height * 2.0 - 1.0 + projection.m[9]) / projection.m[5];

		p0 = imodelview.mulVector3(new Rex.Vector3(-x, -y, -1.0));
		p1 = imodelview.mulVector3(new Rex.Vector3(-x, -y, 1.0));

		p1 = p0.sub(p1.sub(p0).normalize());
		let plane_normal = new Rex.Vector3(plane.x, plane.y, plane.z);
		let ray_vector = p1.sub(p0).normalize();
		let t = -(p0.dot(plane_normal) + plane.w) / ray_vector.dot(plane_normal);
		return p0.add(ray_vector).scale(t);
	}

	getCameraPlanePoint(point) {
		let scmt = this.getModelview();
		var direction = scmt.getColumn3(2).mul(new Rex.Vector3(0, 0, -1 * this.distance * this.getZoom(this.zoom)));
		return this.pickPlanePoint(new Rex.Vector4(-direction.x, -direction.y, -direction.z, Rex.getPlaneDistance(point, new Rex.Vector3(-direction.x, -direction.y, -direction.z))));
	}

	getProjection() {
		return Rex.Matrix4.ortho(-this.getZoom(this.zoom), this.getZoom(this.zoom), -this.getZoom(this.zoom), this.getZoom(this.zoom), 1, 10000);
	}

	getModelview() {
		let scmt = this.rotation.toMatrix();
		let direction = scmt.getColumn3(2);
		direction.z = Math.abs(direction.z);
		if(direction.z < 0.2) direction.z = 0.2; //FIXME
		let position = this.target.add(direction.mul(new Rex.Vector3(0, 0, -1 * this.distance)));
		return scmt.setColumn3(3, position);
	}

	getZoom(zoom) {
		return 10000 / Math.pow(2.0, zoom);
	}
}

class Camera2D extends Camera {

	constructor(state) {
		super(state);
		this.zoom = 2.0;
		this.maxZoom = 5.0;
		this.minZoom = 0.2;
		this.zoomStep = 0.2;
		this.anchorPoint = new Rex.Vector2();
		this.pickPoint = new Rex.Vector2();
		this.position = new Rex.Vector2();
		this.newPosition = new Rex.Vector2();
		this.delta = new Rex.Vector2();
		this.mousePressed = false;
		this.eventSystem.add(document, "keypress", this.onKeyDown.bind(this));
		this.setState(state);
	}

	setState(state) {
		super.setState(state);
		if(state !== undefined) {
			if (state.pos2D !== undefined) {
				if(this.needAlignment === false) {
					if(!this.position) this.position = new Rex.Vector2();
					this.position.x = state.pos2D[0];
					this.position.y = state.pos2D[1];
				}

				if (state.needAlignment !== undefined && state.needAlignment) {
					let x = (state.pos2D[0]) - (window.innerWidth / 2);
					let y = (state.pos2D[1]) - (window.innerHeight / 2);
					this.animationSearch(1000, x, y);
				}
			}
			
			if (state.zoomStep !== undefined) {
				this.zoomStep = state.zoomStep;
			}
			
		}
	}

	onMouseDown(event) {
		if(!this.enabled) return;
		if (event.button == 1) {
			try {
				if (!Rex.gui.hoveredWidget)
					event.preventDefault();
			} catch (e) { }
			
			this.mousePressed = true;
			this.anchorPoint.x = event.clientX / (Math.pow(2.0, this.zoom) / 8);
			this.anchorPoint.y = event.clientY / (Math.pow(2.0, this.zoom) / 8);
			this.newPosition.x = this.position.x;
			this.newPosition.y = this.position.y;
		}
	}

	onMouseUp(event) {
		//if(!this.enabled) return;
		//event.preventDefault();
		this.mousePressed = false;
		if(event.button == 1) {
			if(this.position === undefined) return;
			// Отправляем позицию камеры после перемещения мыши
			let x = this.position.x;
			let y = this.position.y;

			Rex.callRpcMethod("Rex", this.id, "BaseCamera", "setPosX", [Math.round(x)]);
			Rex.callRpcMethod("Rex", this.id, "BaseCamera", "setPosY", [Math.round(y)]);
			this.needAlignment = false;
			Rex.callRpcMethod("Rex", this.id, "BaseCamera", "setNeedAlignment", [false]);
		}
	}

	onMouseMove(event) {
		if(!this.enabled) return;
		this.t_x = event.clientX;
		this.t_y = event.clientY;
		//event.preventDefault();
		if(this.mousePressed) {
			this.pickPoint.x = event.clientX / (Math.pow(2.0, this.zoom) / 8);
			this.pickPoint.y = event.clientY / (Math.pow(2.0, this.zoom) / 8);
			this.position = this.newPosition.add(this.anchorPoint.sub(this.pickPoint));
		}
	}

	get2DZoom(zoom) {
	return Rex.clamp(Math.pow(2.0, zoom) / 8, 0.2, 0.75);
}

	onGetZoom() {
		return Rex.clamp(Math.pow(2.0, this.zoom) / 8, 0.2, 3);
	}
	
	changeZoom(event, delta) {
		
		const newZoom = Rex.clamp(this.zoom - this.zoomStep * delta, this.minZoom, this.maxZoom);
		if (this.zoom == newZoom) {
			return;
		}
		
		this.setZoom(newZoom);
		let currentZoom = this.get2DZoom(this.zoom);
		let prevZoom = this.get2DZoom(this.zoom + this.zoomStep * delta);
		
		let moveDelta = 1;
		if (delta > 0) {
			moveDelta = (currentZoom - prevZoom) / (currentZoom * prevZoom);
		} else if (delta < 0) {
			moveDelta = (-currentZoom + prevZoom) / (currentZoom * prevZoom);
		}
		moveDelta *= 2;
		
		this.delta.x = (this.t_x - (window.innerWidth / 2)) * (moveDelta);
		this.delta.y = (this.t_y - (window.innerHeight / 2)) * (moveDelta);
		if (isNaN(this.delta.x) || isNaN(this.delta.y)) {
			console.error("Error change camera zoom!");
			return;
		}
		this.position.x -= this.delta.x;
		this.position.y -= this.delta.y;
		Rex.callRpcMethod("Rex", this.id, "BaseCamera", "setPosX", [Math.round(this.position.x)]);
		Rex.callRpcMethod("Rex", this.id, "BaseCamera", "setPosY", [Math.round(this.position.y)]);
		this.needAlignment = false;
		Rex.callRpcMethod("Rex", this.id, "BaseCamera", "setNeedAlignment", [false]);
		
	}

	onMouseWheel(event) {
		if(!this.enabled) return;
		//event.preventDefault();
		//event.stopPropagation();
		
		let deltaValue = (event.deltaY || event.delta || event.wheelDeltaY || event.wheelDelta);
		let delta = (deltaValue < 0) ? -1 : 1;
		
		this.changeZoom(event, delta);
		
	}
	
	onKeyDown(event) {
		if (!this.enabled) return;
		
		let delta = 0;
		if (event.keyCode === 61) {
			// Minus
			delta = -1;
		} else if (event.keyCode === 45) {
			// Plus
			delta = 1;
		}
		
		this.changeZoom(event, delta);
		
	}

	getProjection() {
		return new Rex.Matrix4().getIdentity();
	}

	getModelview() {
		return new Rex.Matrix4(this.zoom, 0, 0, 0, 0, this.zoom, 0, 0, 0, 0, 1, 0, this.position.x, this.position.y, 0, 1);
	}

	// Анимация смещения 2D камеры при поиске блока в UberScriptEditor
	animationSearch(time, x2, y2) {
		if(this.position === undefined) return;

		let zoom = this.zoom;

		let x1 = this.position.x;
		let y1 = this.position.y;
		
		let zoomEnd = 4;
		let zoomCenter = 1;

		if(((Math.abs(x2 - x1) < window.innerWidth / 4)) && (Math.abs(y2 - y2) < (window.innerHeight / 4))) {
			zoomCenter = 3.2;
		} else if(((Math.abs(x2 - x1) < window.innerWidth / 2)) && ((Math.abs(y2 - y2) < (window.innerHeight / 2)))) {
			zoomCenter = 2.5;
		}

		let deltaX = (x2 - x1) / time;
		let deltaY = (y2 - y1) / time;

		let deltaZoomIn = (zoomEnd - zoomCenter) / (time / 3);
		let deltaZoomOut = (zoomCenter - zoom) / (time / 3);

		let x = x1;
		let y = y1;

		// Время начала анимации и счетчик
		var times = 0;
		var start = Date.now();
		requestAnimationFrame(function measure() {
			// Время с момента начала анимации
			var timePassed = Date.now() - start;

			// Смещение координат на дельту умноженную на интервал итерации
			x += (deltaX * 20);
			y += (deltaY * 20);

			// Перемещение камеры
			Rex.camera.position = new Rex.Vector2(x, y);

			// Перемещение зума относительно времени
			if(timePassed <= (time / 3) && zoom >= zoomCenter) {
				zoom += (deltaZoomOut * 10);
				Rex.camera.zoom = zoom;
			}
			if(timePassed > ((time / 3) * 2) && zoom < zoomEnd) {
				zoom += (deltaZoomIn * 20);
				Rex.camera.zoom = zoom;
			}
			
			Rex.gui.redraw();

			// Вызов следующей итерации или установка конечных координат
			if (times++ < time / 20) {
				requestAnimationFrame(measure);
			} else {
				Rex.camera.position = new Rex.Vector2(x2, y2);
				Rex.camera.needAlignment = false;
				Rex.camera.setZoom(zoom);
				Rex.callRpcMethod("Rex", Rex.camera.id, "BaseCamera", "setNeedAlignment", [false]);
				Rex.callRpcMethod("Rex", Rex.camera.id, "BaseCamera", "setPosX", [Math.round(x2)]);
				Rex.callRpcMethod("Rex", Rex.camera.id, "BaseCamera", "setPosY", [Math.round(y2)]);
			}
		});
	}
}

class CameraOrbit extends Camera {

	constructor(state) {
		super(state);

		var rotation = new Rex.Matrix4().getIdentity().getRotate().getTranspose();
		var direction = rotation.mulVector3(new Rex.Vector3(0, 0, -1)).normalize();

		this.target = new Rex.Vector3();
		this.distance = 300;
		this.phi = Math.atan2(direction.x, direction.y) * Rex.Rad2Deg;
		this.theta = Math.acos(direction.z) * Rex.Rad2Deg - 90;

		this.State = {
			None: 0,
			MouseRotate: 1,
			MouseDistance: 2,
			TouchRotate: 3,
			TouchDistance: 4
		};

		this.state = this.State.None;
		this.mouse_x = 0;
		this.mouse_y = 0;
		this.mouse_z = 0;

		this.setState(state);
	}

	setState(state) {
		super.setState(state);
	}

	onMouseDown(event) {
		if(!this.enabled) return;
		if(this.state === this.State.None) {
			if(event.button === 2) {		//саняГ поправил 0 на 2
				this.state = this.State.MouseRotate;
				this.mouse_x = event.clientX;
				this.mouse_y = event.clientY;
			}
			else if(event.button === 1) {		//саняГ поправил 2 на 1
				this.state = this.State.MouseDistance;
				this.mouse_y = event.clientY;
			}
		}
	}

	onMouseUp(event) {
		if(!this.enabled) return;
		//event.preventDefault();
		this.state = this.State.None;
	}

	onMouseMove(event) {
		if(!this.enabled) return;
		//event.preventDefault();
		if(this.state === this.State.MouseRotate) {
			//event.preventDefault();
			let dx = 90 * (event.clientX - this.mouse_x) / document.body.clientWidth;
			let dy = 90 * (event.clientY - this.mouse_y) / document.body.clientHeight;
			this.mouse_x = event.clientX;
			this.mouse_y = event.clientY;
			this.phi += dx;
			this.theta += dy;
		} else if(this.state === this.State.MouseDistance) {
			//event.preventDefault();
			let dy = (event.clientY - this.mouse_y) / document.body.clientHeight;
			this.mouse_y = event.clientY;
			this.distance -= this.distance * dy;
		}
	}

	onMouseWheel(event) {
		if(!this.enabled) return;
		//event.preventDefault();
		//event.stopPropagation();
		var delta = 0;
		if(event.wheelDelta !== undefined) delta = event.wheelDelta;
		if(event.detail !== undefined) delta = event.detail;
		this.distance += this.distance * delta * 0.1;
	}

	onTouchStart(event) {
		if(!this.enabled) return;
		//event.preventDefault();
		if(event.touches.length === 1) {
			this.state = this.State.TouchRotate;
			this.mouse_x = event.touches[0].pageX;
			this.mouse_y = event.touches[0].pageY;
		}
		if(event.touches.length === 2) {
			this.state = this.State.TouchDistance;
			var dx = event.touches[1].pageX - event.touches[0].pageX;
			var dy = event.touches[1].pageY - event.touches[0].pageY;
			this.mouse_z = Math.sqrt(dx * dx + dy * dy);
		}
	}

	onTouchEnd(event) {
		if(!this.enabled) return;
		//event.preventDefault();
		this.state = this.State.None;
	}

	onTouchMove(event) {
		if(!this.enabled) return;
		//event.preventDefault();
		//event.stopPropagation();
		if(this.state === this.State.TouchRotate) {
			let dx = 90 * (event.touches[0].pageX - this.mouse_x) / document.body.clientWidth;
			let dy = 90 * (event.touches[0].pageY - this.mouse_y) / document.body.clientHeight;
			this.mouse_x = event.touches[0].pageX;
			this.mouse_y = event.touches[0].pageY;
			this.phi += dx;
			this.theta += dy;
		}
		if(this.state === this.State.TouchDistance) {
			let dx = event.touches[1].pageX - event.touches[0].pageX;
			let dy = event.touches[1].pageY - event.touches[0].pageY;
			let dz = this.mouse_z - Math.sqrt(dx * dx + dy * dy);
			this.mouse_z = Math.sqrt(dx * dx + dy * dy);
			this.distance += this.distance * dz * 0.01;
		}
	}

	getModelview() {
		var rotation = Rex.Matrix4.rotateZ(-this.phi).mul(Rex.Matrix4.rotateX(90 - this.theta));
		var direction = rotation.mulVector3(new Rex.Vector3(0, 0, -1));
		var position = this.target.sub(direction.scale(this.distance));
		return rotation.getTranspose().mul(Rex.Matrix4.translate(-position.x, -position.y, -position.z));
	}
}

class CameraStereo extends Camera {

	constructor(fov, znear, zfar) {
		super(state);
		this.fov = fov || 45;
		this.znear = znear || 0.1;
		this.zfar = zfar || 1000;

		this.iorientation = undefined;
		this.orientation = undefined;
		this.screen = 0;

		this.setState(state);

		//event listeners
		this.eventSystem.add(document, "deviceorientation", this.deviceOrientation);
		this.eventSystem.add(document, "orientationchange", this.orientationChange);
	}

	//
	deviceOrientation(event) {
		var orientation = Rex.Matrix4.rotateZ(-event.gamma).mul(Rex.Matrix4.rotateX(event.beta)).mul(Rex.Matrix4.rotateY(-event.alpha)).mul(Rex.Matrix4.rotateY(this.screen));
		if(this.iorientation === undefined) this.iorientation = orientation.getInverse43();
		this.orientation = this.iorientation.mul(orientation);
	}
	orientationChange() {
		this.iorientation = undefined;
		this.screen = window.orientation || 0;
	}

	getProjection() {
		return Rex.Matrix4.perspective(this.fov, 1, this.znear, this.zfar);
	}

	getModelview() {
		if(this.orientation === undefined) return Rex.scene.getModelview();
		return this.orientation.mul(Rex.scene.getModelview());
	}

}



class MultiSelect extends BaseObject {
	
	constructor() {
		super();
		
		this.htmlID = "multiSelectHtmlElementID";
		
		this._$startPosition = new Rex.Vector2(0, 0);
		this._$currentPosition = new Rex.Vector2(0, 0);
		this._$mouse = Rex.mouse;
		this._$started = false;
		
		this.connect(this._$mouse, "onMove", this.mouseMove);
		this.connect(this._$mouse, "onUp", this.mouseUp);
	}
	
	get htmlElement() {
		let elem = document.getElementById(this.htmlID);
		return elem || undefined;
	}
	
	onDestroy() {
		this._$startPosition = null;
		this._$currentPosition = null;
		this._$mouse = null;
		this._$started = null;
	}
	
	draw(ctx, ctxTemp) {
		if(!this._$started) return;
		ctx.save();
		ctx.fillStyle = "rgba(0,0,150,0.4)";
		let w = this._$currentPosition.sub(this._$startPosition);
		ctx.fillRect(this._$startPosition.x, this._$startPosition.y, w.x, w.y);
		ctx.restore();
	}
	
	checkWidget(w) {
		let left = 		Math.min(this._$currentPosition.x, this._$startPosition.x);
		let top = 		Math.min(this._$currentPosition.y, this._$startPosition.y);
		let right = 	Math.max(this._$currentPosition.x, this._$startPosition.x);
		let bottom = 	Math.max(this._$currentPosition.y, this._$startPosition.y);
		return (w.posX > left && w.posY > top && w.posX + w.width < right && w.posY + w.height < bottom);
	}
	
	checkWidgets() {
		let ws = [];
		for(let key in Rex.widgets) {
			let w = Rex.widgets[key];
			if(!w.editable || w.parentId != -1) continue;
			if(this.checkWidget(w)) ws.push(w);
		}
		this._$selection = ws;
		this.run("onSelect", ws);
	}
	
	mouseMove(vec) {
		if(!this._$started) return;
		this._$currentPosition = translateVect(vec);
		
		let html = this.htmlElement;
		if(html) {
			let x1 = Math.min(this.sx, vec.x);
			let y1 = Math.min(this.sy, vec.y);
			let x2 = Math.max(this.sx, vec.x);
			let y2 = Math.max(this.sy, vec.y);
			html.style.top = y1 + "px";
			html.style.left = x1 + "px";
			html.style.width = (x2 - x1) + "px";
			html.style.height = (y2 - y1) + "px";
		} else {
			Rex.gui.redraw();
		}
	}
	
	mouseUp(e) {
		if(!this._$started) return;
		this.checkWidgets();
		this.end();
	}
	
	start() {
		this._$startPosition = translateVect(this._$mouse.pos);
		this._$currentPosition = this._$startPosition;
		this._$started = true;
		
		if(!this.htmlElement) {
			document.getElementById("container1").appendChild(this.makeDiv());
			this.sx = this._$mouse.pos.x;
			this.sy = this._$mouse.pos.y;
			this.htmlElement.top = this.sy + "px";
			this.htmlElement.left = this.sx + "px";
		}
	}
	
	end() {
		this._$started = false;
		this._$startPosition = new Rex.Vector2(0, 0);
		this._$currentPosition = new Rex.Vector2(0, 0);
		
		if(this.htmlElement) this.htmlElement.remove();
		else Rex.gui.redraw();
	}
	
	
	makeDiv() {
		let div = document.createElement("div");
		div.id = this.htmlID;
		div.style.border		= "solid darkblue 1px";
		div.style.background	= "rgba(120,120,200,0.2)";
		div.style.position		= "absolute";
		return div;
	}
	
}

/* eslint-disable no-unused-vars */
/* global Rex BaseObject*/

Rex.mouse = undefined;

class Mouse extends BaseObject {
	
	// eslint-disable-next-line constructor-super
	constructor() {
		if(Rex.mouse != null) {
			console.error("!!!SingleTone MOUSE Already exists!!! use static method SMouse.get()");
			return;
		}
		super();
		this._$position = new Rex.Vector2(0, 0);
		this._$buttons = {none: 0, left: 1, middle: 2, right: 3};
		this._$pressedButton = 0;
		
		this._$eventSystem = new EventSystem();
		this._$eventSystem.add(document, "dblclick", this._$mouseDoubleClick.bind(this));
		this._$eventSystem.add(window, "mousemove", this._$mouseMove.bind(this));
		this._$eventSystem.add(window, "mousedown", this._$mouseDown.bind(this));
		this._$eventSystem.add(window, "mouseup", this._$mouseUp.bind(this));
		this._$eventSystem.add(document, "wheel", this._$mouseWheel.bind(this));
		this._$eventSystem.add(document, "contextmenu", function(event) { event.preventDefault(); });
		
		
		this.touchTimer;
		this._$eventSystem.add(document, "touchstart", this._$touchDown.bind(this));
		this._$eventSystem.add(document, "touchmove", this._$touchMove.bind(this));
		this._$eventSystem.add(document, "touchend", this._$touchUp.bind(this));
	}
	
	get buttons() {
		return this._$buttons;
	}
	
	static toCanvas(event) {
		if(Rex.render == null) return new Rex.Vector2(event.clientX, event.clientY);
		let rect = canvas.getBoundingClientRect();
		return new Rex.Vector2(event.clientX - rect.left, event.clientY - rect.top);
	}
	
	set pressedButton(value) {
		this._$pressedButton = value;
	}
	
	get pressedButton() {
		return this._$pressedButton;
	}
	
	set pos(value) {
		if(Rex.Vector2.compare(this._$position, value)) return;
		this._$position = value;
		this.runNow("onMove", value);
	}
	
	get pos() {
		return this._$position;
	}
	
	static get() {
		return Rex.mouse === undefined ? Rex.mouse = new Mouse() : Rex.mouse;
	}
	
	onDestroy() {
		this._$position = null;
		this._$buttons = null;
		this._$pressedButton = null;
		
		this._$eventSystem.clear();
		this._$eventSystem = null;
	}
	
	_$mouseDoubleClick(event) {
		this.runNow("onDoubleClick", event);
	}
	
	_$mouseMove(event) {
		this.pos = Mouse.toCanvas(event);
		this.runNow("onMoveEvent", event);
		
		this.tempEvent = event;
	}
	
	_$mouseDown(event) {
		this._$pressedButton = event.which;
		this.runNow("onDown", event);
	}
	
	_$mouseUp(event) {
		this._$pressedButton = 0;
		this.runNow("onUp", event);
	}
	
	_$mouseWheel(event) {
		let delta = Math.abs(event.deltaY) / event.deltaY;
		this.runNow("onWheel", delta, event);
	}
	
	_$androidMouseDownRight() {
		let copyEvent = {};
		for (const p in this.tempEvent) {
			copyEvent[p] = this.tempEvent[p];
		}
		
		copyEvent.which = 3;
		copyEvent.button = 2;
		copyEvent.buttons = 2;
		this._$pressedButton = copyEvent.which;
		this.runNow("onDown", copyEvent);
	}

	_$androidMouseUpRight() {
		let copyEvent = {};
		for (const p in this.tempEvent) {
			copyEvent[p] = this.tempEvent[p];
		}

		copyEvent.which = 3;
		copyEvent.button = 2;
		copyEvent.buttons = 2;
		this._$pressedButton = 0;
		this.runNow("onUp", copyEvent);
	}
	
	_$onLongTouch(event){
		console.log("LONGLONGTOUCH", event);
		this._$pressedButton = 3;
		this.runNow("onDown",event);
		this._$pressedButton = 0;
		this.runNow("onUp",event);
	}
	
	_$touchDown(event){

		// let fakeEvent = {};
		// try {
		// 	fakeEvent.clientX = event.touches[0].clientX;
		// 	fakeEvent.clientY = event.touches[0].clientY;
		// 	fakeEvent.target = event.target;
		// 	fakeEvent.srcElement = event.srcElement;
		// } catch(e){
		// 	fakeEvent.clientX = this.pos.x;
		// 	fakeEvent.clientY = this.pos.y;
		// }
		
		this.touchTimer = setTimeout(this._$onLongTouch.bind(this,event), 500);
		this._$pressedButton = 1;
		this.runNow("onDown", event);
	}
	
	_$touchUp(event){
		console.log(event, "<------");
		if (this.touchTimer) {
			clearTimeout(this.touchTimer);
		}
		
		let fakeEvent = {};
		try {
			fakeEvent.clientX = event.changedTouches[0].clientX;
			fakeEvent.clientY = event.changedTouches[0].clientY;
			fakeEvent.target = event.target;
			fakeEvent.srcElement = event.srcElement;
		} catch(e){
			fakeEvent.clientX = this.pos.x;
			fakeEvent.clientY = this.pos.y;
		}
		
		this._$pressedButton = 0;
		this.runNow("onUp", event);
	}
	
	_$touchMove(event){
		if (this.touchTimer) {
			clearTimeout(this.touchTimer);
		}
		
		let fakeEvent = {};
		try {
			fakeEvent.clientX = event.changedTouches[0].clientX;
			fakeEvent.clientY = event.changedTouches[0].clientY;
			fakeEvent.target = event.target;
			fakeEvent.srcElement = event.srcElement;
		} catch(e){
			fakeEvent.clientX = this.pos.x;
			fakeEvent.clientY = this.pos.y;
		}
		
		this.pos = Mouse.toCanvas(event);
		this.runNow("onMoveEvent", event);
	}
}


/* eslint-disable no-unused-vars */
/* global Rex BaseObject EventSystem*/


Rex.keyboard = undefined;

class Buttons {
	
	constructor() {
		this.ctrlKey = false;
		this.altKey = false;
		this.metaKey = false;
		this.shiftKey = false;
		this.activeKey = undefined;
	}
	
	keyDown(event) {
		this.activeKey = undefined;
		for(let index in Rex.KeyList) {
			let key = Rex.KeyList[index];
			if(key == event.which) this.activeKey = key;
		}
	}
	
	keyUp(event) {
		this.activeKey = undefined;
	}
	
	isKeyPressed(which) {
		return this.activeKey == which;
	}
	
}

class KeyBoard extends BaseObject {
	
	// eslint-disable-next-line constructor-super
	constructor() {
		if(Rex.keyboard != null) {
			console.error("!!!SingleTone KeyBoard Already exists!!! use static method KeyBoard.get()");
			return;
		}
		super();
		this._$buttons = new Buttons();
		
		this._$eventSystem = new EventSystem();
		this._$eventSystem.add(window, "keypress", this._$keyPress.bind(this));
		this._$eventSystem.add(window, "keydown", this._$keyDown.bind(this));
		this._$eventSystem.add(window, "keyup", this._$keyUp.bind(this));
		this._$eventSystem.add(window, "copy", this._$copy.bind(this));
		this._$eventSystem.add(window, "paste", this._$paste.bind(this));
		this._$eventSystem.add(window, "cut", this._$cut.bind(this));
	}
	
	onDestroy() {
		this._$buttons = null;
		this._$eventSystem.clear();
		this._$eventSystem = null;
	}
	
	_$checkServiceButton(event) {
		this._$buttons.ctrlKey = event.ctrlKey;
		this._$buttons.altKey = event.altKey;
		this._$buttons.metaKey = event.metaKey;
		this._$buttons.shiftKey = event.shiftKey;
	}
	
	controlKeyIsPressed() {
		return this._$buttons.ctrlKey;
	}
	
	altKeyIsPressed() {
		return this._$buttons.altKey;
	}
	
	metaKeyIsPressed() {
		return this._$buttons.metaKey;
	}
	
	shiftKeyIsPressed() {
		return this._$buttons.shiftKey;
	}
	
	isKeyPressed(which) {
		return this._$buttons.isKeyPressed(which);
	}
	
	_$copy(event) {
		this.runNow("onCopy", event);
	}
	
	_$paste(event) {
		this.runNow("onPaste", event);
	}
	
	_$cut(event) {
		this.runNow("onCut", event);
	}
	
	_$keyPress(event) {
		this._$checkServiceButton(event);
		this.runNow("onKeyPress", event);
	}
	
	_$keyDown(event) {
		// android mouse patch
		if (event.key === "ZoomToggle") {
			Rex.mouse._$androidMouseDownRight();
			return;
		}
		this._$checkServiceButton(event);
		this._$buttons.keyDown(event);
		this.runNow("onKeyDown", event);
	}
	
	_$keyUp(event) {
		// android mouse patch
		if (event.key === "ZoomToggle") {
			Rex.mouse._$androidMouseUpRight();
			return;
		}
		this._$checkServiceButton(event);
		this._$buttons.keyUp(event);
		this.runNow("onKeyUp", event);
	}
	
	static get() {
		return Rex.keyboard === undefined ? Rex.keyboard = new KeyBoard() : Rex.keyboard;
	}
	
}

/* eslint-disable no-unused-vars */
/* global Widget WidgetViewHtml BaseObject StyleLibrary NotificationManager Rex MultiSelect Hint DragAndDrop*/

class Gui extends BaseObject {

	constructor(state) {
		super();
		if (state !== undefined) this.styleLibrary = new StyleLibrary(state.styles);

		this.id = -1;
		this.type = "";

		this.notificationManager = new NotificationManager();

		this.dragData = undefined;
		this.dragDropInit();

		this.startMove = new Rex.Vector2(0, 0);

		// this.popMenuId = undefined;
		this._menu = undefined;

		this.mouse = Rex.mouse;
		this.connect(this.mouse, "onDown", this.mouseDown);
		this.connect(this.mouse, "onUp", this.mouseUp);
		this.connect(this.mouse, "onMoveEvent", this.mouseMove);
		this.connect(this.mouse, "onWheel", this.mouseWheel);
		this.connect(this.mouse, "onDoubleClick", this.mouseDoubleClick);

		this.keyBoard = Rex.keyboard;
		this.connect(this.keyBoard, "onKeyDown", this.keyDown);
		this.connect(this.keyBoard, "onKeyUp", this.keyUp);
		this.connect(this.keyBoard, "onKeyPress", this.keyPress);
		this.connect(this.keyBoard, "onCopy", this.copy);
		this.connect(this.keyBoard, "onPaste", this.paste);
		this.connect(this.keyBoard, "onCut", this.cut);

		this.selection = new MultiSelect();
		this.connect(this.selection, "onSelect", this.multiSelect);

		this.UI = [];
		this.widgets = [];
		this._hoveredWidgets = [];
		this.selectedWidgets = [];

		this._needResort = true;
		this.repositionWidgets = [];
		if (state !== undefined) this.setState(state);
	}

	onDestroy() {
		document.removeEventListener ("dragstart", this.dragHandler, false);
		this.clear();
	}

	clear() {
		this.hoveredWidget = undefined;
		this.focusedWidget = undefined;
		this.menu = undefined;
		this.widgets = [];
		this.clearSelectedWidgets();
		this._needResort = false;
		this.needRedrawWidgets = false;
		this.dragAndDrop = null;
	}

	update(state) {
		if (state !== undefined) {
			if (Rex.gui != null) {
				Rex.gui.destroy();
				delete Rex.gui;
			}
			Rex.gui = eval(state);
		}
	}

	showHint() {
		if (this._hw) {
			this.hint = new Hint(this._hw.hint);
			let t = this._hw;
			setTimeout(function () {
				if (t != this._hw) return;
				this.hint.enable = true;
				this.redraw();
			}.bind(this, t), 350);
		} else this.hint = undefined;
	}

	set focusedID(value) {
		if (!Rex.widgets) return;
		let w = Rex.widgets[value];
		if (this.focusedWidget == w) return;
		if (this._fw == w) return;
		if (this._fw) this._fw.onFocused(false);
		this._fw = w;
		if (this._fw) this._fw.onFocused(true);
		if (this.selectedWidgets && this.selectedWidgets.length && this.selectedWidgets.indexOf(this._fw) == -1) {
			if (this._fw && this._fw.type !== "WidgetPopUpMenu") this.clearSelectedWidgets();
		}
	}

	set hoveredWidget(value) {
		if (this._hw == value) return;
		if (this._hw) this._hw.onHovered(false);
		this._hw = value;
		if (this._hw) this._hw.onHovered(true);
		this.run("onHoverWidget", this._hw);
		if (value === undefined) {
			if (Rex.camera !== undefined) {
				this.mousePressed = false;
				Rex.camera.enabled = true;
			}
			Rex.callRpcMethod("Rex", this.id, this.type, "clearHover", []);
			this.redraw();
		} else {
			if (Rex.camera !== undefined && value.view.container != "transformContainer") Rex.camera.enabled = false;
			Rex.callRpcMethod("Rex", this.id, this.type, "setHoverWidgetById", [value.id]);
			this.redraw();
		}
		if (Rex.render != null) this.showHint();
	}

	get hoveredWidget() {
		return this._hw;
	}

	get hovered() {
		return (this.hoveredWidget == null) ? -1 : this.hoveredWidget.id;
	}

	set focusedWidget(value) {
		if (this._fw == value) return;
		if (this._fw) this._fw.onFocused(false);
		this._fw = value;
		if (this._fw) this._fw.onFocused(true);
		if (this.selectedWidgets && this.selectedWidgets.length && this.selectedWidgets.indexOf(this._fw) == -1) {
			if (this._fw && this._fw.type !== "WidgetPopUpMenu") this.clearSelectedWidgets();
		}
		if (value === undefined) {
			Rex.callRpcMethod("Rex", this.id, this.type, "clearFocus", []);
			this.redraw();
		} else {
			Rex.callRpcMethod("Rex", this.id, this.type, "setFocusWidgetById", [value.id]);
			this.redraw();
		}
	}

	get focusedWidget() {
		return this._fw;
	}

	set focused(value) {
		if (!Rex.widgets) return;
		let w = Rex.widgets[value];
		if (this.focusedWidget == w) return;
		this.focusedWidget = w;
	}

	get focused() {
		return (this.focusedWidget) ? this.focusedWidget.id : -1;
	}

	set menu(value) {
		if (this._menu == value) return;
		if (value === undefined) {
			Rex.callRpcMethod("Widgets", this.menu.id, "WidgetPopUpMenu", "destroy", []);
			Rex.callRpcMethod("Rex", this.id, this.type, "clearMenu", []);
		}
		this._menu = value;
	}

	get menu() {
		return this._menu;
	}

	set menuId(value) {
		if (!Rex.widgets) return;
		let m = Rex.widgets[value];
		if (m === undefined && value != -1) this.menuId = value;
		if (this.menu == m) return;
		this.menu = m;
	}

	get menuId() {
		return (this.menu) ? this.menu.id : -1;
	}

	set selectWidgets(value) {
		if (!Rex.widgets) return;
		if (this.selectedWidgets !== undefined && this.selectedWidgets.length > 0) {
			for (let w of this.selectedWidgets) {
				if (!w) continue;
				w.onSelected(false);
			}
		}
		this.selectedWidgets = [];
		for (let key in value) {
			let w = Rex.widgets[value[key]];
			if (!w) continue;
			this.selectedWidgets.push(w);
			w.startMove = new Rex.Vector2(w.posX, w.posY);
			w.onSelected(true);
		}
	}

	get selectWidgets() {
		let s = [];
		for (let key in this.selectedWidgets) {
			s.push(this.selectedWidgets[key].id);
		}
		return s;
	}

	set needResortWidgets(value) {
		this._needResort = value;
	}

	get needResortWidgets() {
		return this._needResort;
	}

	setState(state) {
		Rex.copy(this, state);
		if (state.hasOwnProperty("styles")) {
			this.styleLibrary.load(state.styles);
		}
	}

	sortW(w) {
		let sorter = function (a, b) {
			let wa = Rex.widgets[a];
			let wb = Rex.widgets[b];
			return (wa && wb) ? wa.order - wb.order : 0;
		};
		//w.children.sort(sorter);
		//for(let key in w.children) {
		//	let c = Rex.widgets[key];
		//	if(c)this.sortW(c);
		//}
	}

	resort() {
		this.needResortWidgets = true;
	}

	sortWidgets() {
		if (!this.needResortWidgets) return;
		let temp = [];
		let UI = [];
		for (let key in Rex.widgets) {
			let w = Rex.widgets[key];
			if (!w) continue;
			if (w.parentId != -1) continue;
			if (w.editable) temp.push(w);
			else UI.push(w);
		}
		let sorter = function (a, b) {
			return a.order - b.order;
		};
		temp.sort(sorter);
		UI.sort(sorter);
		for (let key in temp) this.sortW(temp[key]);
		for (let key in UI) this.sortW(UI[key]);
		this.widgets = temp;
		this.UI = UI;
		this.needResortWidgets = false;
	}

	checkHover(vector, event) {
		if (Rex.widgets == null) return;
		if (this.widgets.length === 0) return;
		const path = event.path || (event.composedPath && event.composedPath());
		for (let pathElement of path) {
			if (pathElement.id == null || pathElement.id == "") continue;
			
			let ID = NaN;
			
			try {
				if (pathElement.id.indexOf("w") === 0) {
					ID = parseInt(pathElement.id.slice(1));
				} else {
					ID = parseInt(pathElement.id);
				}
			} catch(e) {}

			if (isNaN(ID))
				continue;

			let widget = Rex.widgets[ID];
			if (!widget) continue;
			// if (this.widgets.indexOf(widget) === -1) continue;
			this.hoveredWidget = widget;
			return true;
		}
		return false;
	}

	checkHoverUI(event) {
		let path = [];
		const ePath = event.path || (event.composedPath && event.composedPath());
		for (let pathElement of ePath) {
			let id = NaN;
			
			
			if (pathElement.id) {
				
				try {
					if (pathElement.id.indexOf("w") === 0) {
						id = parseInt(pathElement.id.slice(1));
					} else {
						id = parseInt(pathElement.id);
					}
				} catch (e) { }
				
			}
			
			if (!isNaN(id)) path.push(id);
		}
		if (path.length === 0) return false;

		let fakeEvent = {};
		fakeEvent.x = event.x;
		fakeEvent.y = event.y;
		fakeEvent.path = path;

		let window = Rex.widgets[path[path.length - 1]];
		if (window == null) return false;
		if (window.parentId !== -1) {
			let t = window.view.checkSelect(fakeEvent, null);
			if (t == null) return false;
			this.hoveredWidget = t;
			return true;
		}
		let t = window.view.checkSelect(fakeEvent, path.pop());
		if (t == null) return false;
		this.hoveredWidget = t;
		return true;
	}

	menuDestroy() {
		let menuIsHover = false;
		if ((this.hoveredWidget instanceof WidgetPopUpMenu) || (this.hoveredWidget instanceof WidgetInvestmentMenuItem) || (this.hoveredWidget instanceof WidgetMenuItem)) {
			menuIsHover = true;
		}
		if (this.menu && !menuIsHover) {
			this.menu = undefined;
		}
		return menuIsHover;
	}
	mouseWheel(delta, event) {
		this.menuDestroy();
		if (this.focusedWidget !== undefined)
			this.focusedWidget.mouseWheel(delta, event);
		this.redraw();
	}

	sendMouseDownWidget(w, event) {
		let p = (w.editable) ? translateVect(this.mouse.pos) : this.mouse.pos;
		w.mouseDown(p.x, p.y, event);
	}

	popMenu(senderId, x, y) {
		Rex.callRpcMethod("Rex", this.id, this.type, "popMenu", [senderId, x, y]);
	}

	mouseDoubleClick(event) {
		if (this.focusedWidget === undefined) return;
		this.focusedWidget.mouseDoubleClick(event);
	}

	mouseDown(event) {
		let cPos = translateVect(this.mouse.pos);
		let menuIsHover = this.menuDestroy();
		if (this.hoveredWidget) {
			this.focusedWidget = this.hoveredWidget;
			if (this.keyBoard.controlKeyIsPressed()) {
				if (this.selectedWidgets && this.selectedWidgets.indexOf(this.focusedWidget) == -1) this.selectedWidgets.push(this.focusedWidget);
			}
			this.sendMouseDownWidget(this.focusedWidget, event);
			this.tempPos = new Rex.Vector2(this.focusedWidget.posX, this.focusedWidget.posY);
			if (this.selectedWidgets) this.multiSelect(this.selectedWidgets);
		} else {
			this.focusedWidget = undefined;
			this.clearSelectedWidgets();
			if (this.mouse.pressedButton === this.mouse.buttons.left) this.selection.start();
		}
		if (this.mouse.pressedButton === this.mouse.buttons.right && !menuIsHover) {
			let p = translateVect(new Rex.Vector2(event.clientX, event.clientY));
			this.popMenu(this.focusedWidget ? this.focusedWidget.id : -1, event.clientX, event.clientY);
		}
		this.startMove = cPos;
	}

	clearSelectedWidgets() {
		if (this.selectedWidgets !== undefined && this.selectedWidgets.length > 0) {
			for (let w of this.selectedWidgets) {
				if (!w) continue;
				w.onSelected(false);
			}
			this.selectedWidgets = [];
			Rex.callRpcMethod("Rex", this.id, this.type, "setSelectWidgets", [JSON.stringify(this.selectWidgets)]);
		}
	}

	confirmMoveSelection() {
		if (!this.selectedWidgets && !this.selectedWidgets.length) return;
		for (let key in this.selectedWidgets) {
			let w = this.selectedWidgets[key];
			if (w == this.focusedWidget) continue;
			w.setPos(Math.round(w.startMove.x + this.delta.x - this.tempPos.x), Math.round(w.startMove.y + this.delta.y - this.tempPos.y));
		}
	}

	mouseUp(event) {
		if (this.focusedWidget) {
			if (this.focusedWidget.moved) {
				this.focusedWidget.setPos(Math.round(this.delta.x), Math.round(this.delta.y));
				this.confirmMoveSelection();
				this.focusedWidget.moved = false;
			}
			let cPos = translateVect(new Rex.Vector2(event.clientX, event.clientY));
			this.focusedWidget.mouseUp(cPos.x, cPos.y, event);
		}
	}

	deltaByGrid(currentPos, destinationPos) {
		let delta = currentPos.add(destinationPos.sub(this.startMove));
		if (Rex.grid !== undefined) {
			let w = window.innerWidth / 2 - Math.floor(window.innerWidth / 2 / Rex.grid.st) * Rex.grid.st;
			let h = window.innerHeight / 2 - Math.floor(window.innerHeight / 2 / Rex.grid.st) * Rex.grid.st;
			delta.x = Math.trunc(Math.floor(((delta.x)) / Rex.grid.st) * Rex.grid.st + w);
			delta.y = Math.trunc(Math.floor(((delta.y)) / Rex.grid.st) * Rex.grid.st + h);
		}
		return delta;
	}

	moveSelection() {
		if (!this.selectedWidgets && !this.selectedWidgets.length) return;
		for (let key in this.selectedWidgets) {
			let w = this.selectedWidgets[key];
			if (w == this.focusedWidget) continue;
			w.view.posX = w.startMove.x + this.delta.x - this.tempPos.x;
			w.view.posY = w.startMove.y + this.delta.y - this.tempPos.y;
			w.view.positioning();
		}
	}

	mouseMove(event) {
		this.mouseMoveHover(event);
		let vector = this.mouse.pos;
		let cPos = translateVect(vector);
		if ((this.mouse.pressedButton === this.mouse.buttons.middle) && (Rex.camera.position != undefined)) {
			this.redraw();
		}

		//короче я попробовал исправить issue #119 если что смотрите туда.
		if (!(this.checkHover(cPos, event) || this.checkHoverUI(event))) {
			this.hoveredWidget = undefined;
		}
		if (this.hoveredWidget) {
			this.hoveredWidget.mouseMove(cPos.x, cPos.y, event);
		}

		//FIX////////////////////////////////////////////////////////////////////////////////
		if (this.focusedWidget)
			if (this.focusedWidget != this.hoveredWidget)
				this.focusedWidget.mouseMove(cPos.x, cPos.y, event);

		if (this.mouse.pressedButton == this.mouse.buttons.left) {
			if (this.focusedWidget && this.focusedWidget.editable) {
				this.focusedWidget.moved = true;
				this.delta = this.deltaByGrid(this.tempPos, cPos);
				this.focusedWidget.view.posX = this.delta.x;
				this.focusedWidget.view.posY = this.delta.y;
				this.focusedWidget.view.positioning();
				this.moveSelection();
			}
		}
	}

	mouseMoveHover(event) {
		if (Rex.widgets === undefined) return;
		let tar = event.target;
		let widget = undefined;
		this.turnOffHover();
		while (!widget) {
			if (tar == null || tar.id === undefined) return;
			let ID = tar.id;
			try {
				if (tar.id.indexOf("w") === 0) {
					ID = parseInt(tar.id.slice(1));
				} 
			} catch(e){}

			widget = Rex.widgets[ID];
			if (widget === undefined) widget = Rex.widgets[tar.id.replace("div", "")];
			if (widget) break;
			tar = tar.parentNode;
		}
		widget.view.recursiveHover(-1);
	}

	turnOffHover() {
		for (let i = 0; i < this._hoveredWidgets.length; i++) {
			let w = this._hoveredWidgets[i];
			w.hover = false;
		}
		this._hoveredWidgets = [];
	}

	drawSelectedWidget(ctx, ctxTemp, w) {
		ctx.strokeRect(w.posX, w.posY, w.width, w.height);
	}

	splashWidgets(ctx, ctxTemp) {
		if (this.focusedWidget) this.drawSelectedWidget(ctx, ctxTemp, this.focusedWidget);
		if (this.hoveredWidget) this.drawSelectedWidget(ctx, ctxTemp, this.hoveredWidget);
		if (!this.selectedWidgets || !this.selectedWidgets.length) return;
		for (let key in this.selectedWidgets) {
			this.drawSelectedWidget(ctx, ctxTemp, this.selectedWidgets[key]);
		}
	}

	prepare(ctx, ctxTemp) {
		if ((Rex.camera == null) || (Rex.camera.position === undefined)) return;
		let zoom = Rex.camera.getZoom() + 0.001;
		let w = document.body.clientWidth / 2;
		let h = document.body.clientHeight / 2;
		let x = Rex.camera.position.x;
		let y = Rex.camera.position.y;
		this.prepareHtml(x, y, zoom);
		if (Rex.render != null) this.prepareCTX(ctx, ctxTemp, x, y, w, h, zoom);
	}

	prepareHtml(x, y, zoom) {
		let transform = document.getElementById("transformContainer");
		if (transform == null) return;
		//transform.style.willChange = "transform";
		transform.style.transform = `scale(${zoom}) translate(${(-x)}px, ${(-y)}px)`;
		//transform.style.transform = `scale(${zoom})`;
		//transform.style.top = (-y) + "px";
		//transform.style.left = (-x) + "px";
	}

	prepareCTX(ctx, ctxTemp, x, y, w, h, zoom) {
		ctx.translate(w, h);
		ctx.scale(zoom, zoom);
		ctx.translate(-w - x, -h - y);
	}

	drawWidgets(ctx, ctxTemp) {
		ctx.save();
		this.prepare(ctx, ctxTemp);
		for (let key in this.widgets) {
			let w = this.widgets[key];
			w.view.draw(ctx, ctxTemp);
		}
		//this.splashWidgets(ctx, ctxTemp);
		this.selection.draw(ctx, ctxTemp);
		ctx.restore();
	}

	drawUI(ctx, ctxTemp) {
		ctx.save();
		for (let key in this.UI) {
			this.UI[key].view.draw(ctx, ctxTemp);
		}
		ctx.restore();
	}

	redraw() {
		this.needRedrawWidgets = true;
	}

	drawHint(ctx, ctxTemp) {
		if (!this.hint) return;
		let p = this.mouse.pos;
		this.hint.posX = p.x;
		this.hint.posY = p.y;

		this.hint.draw(ctx, ctxTemp);
	}

	draw(ctx, ctxTemp) {
		if (!this.needRedrawWidgets) return;
		this.sortWidgets();
		if (Rex.grid != null) {
			Rex.grid.refreshCanvas();
			Rex.grid.draw(Rex.grid.firstBufferCtx, Rex.grid.secondBufferCtx);
		}
		if (Rex.render != null) {
			this.drawWidgets(ctx, ctxTemp);
			this.drawUI(ctx, ctxTemp);
			this.drawHint(ctx, ctxTemp);
		} else {
			this.prepare();
			for (let key in this.widgets) {
				let w = this.widgets[key];
				w.view.draw(ctx, ctxTemp);
			}
			for (let key in this.UI) {
				this.UI[key].view.draw(ctx, ctxTemp);
			}
		}
		if (this.notificationManager.messages.length > 0) {
			this.notificationManager.sendMessage();
		}

		this.needRedrawWidgets = false;
	}

	reposition(widget) {
		this.needRepositioning = true;
		let root = this.getRootWidget(widget);
		if (root === undefined) return;
		if (this.repositionWidgets.indexOf(root) == -1) {
			if (root.parentId == -1 && root.inited) this.repositionWidgets.push(root);
		}
	}

	repositionAll() {
		this.needRepositioning = true;
		for (let key in Rex.widgets) {
			let widget = Rex.widgets[key];
			if (widget === undefined) return;
			if (widget.parentId == -1 && widget.inited) this.repositionWidgets.push(widget);
		}
	}

	refreshAll() {
		for (let key in Rex.widgets) {
			let child = Rex.widgets[key];
			if (child !== undefined && child.inited) {
				child._needRefresh = true;
			}
		}
		this.redraw();
	}

	positioning() {
		if (!this.needRepositioning) return;
		for (let i = 0; i < this.repositionWidgets.length; ++i) {
			let widget = this.repositionWidgets[i];
			if (widget === undefined || !widget.inited) continue;
			if (widget.parentId == -1) widget.view.positioning();
		}
		this.repositionWidgets = [];
		this.needRepositioning = false;
	}

	copy(event) {
		let cPos = translateVect(this.mouse.pos);
		//this.confirmMoveSelection(cPos);//todo При копировании выделенных блочков - в данной функции происходит сеттинг новых координат и они улетают на дельту
		if (this.focusedWidget) {
			let array = [];
			array.push(this.focusedWidget.id);
			if (!this.focusedWidget.editable) return;
			Rex.callRpcMethod("Rex", this.id, this.type, "copy", [JSON.stringify(array)]);
		}
		if (this.selectedWidgets.length) {
			Rex.callRpcMethod("Rex", this.id, this.type, "copy", [JSON.stringify(this.selectWidgets)]);
			return;
		}
	}

	paste(event) {
		let cPos = translateVect(this.mouse.pos);
		Rex.callRpcMethod("Rex", this.id, this.type, "paste", [Math.trunc(cPos.x), Math.trunc(cPos.y)]);
	}

	cut(event) {
		let cPos = translateVect(this.mouse.pos);
		this.confirmMoveSelection(cPos);
		if (this.focusedWidget) {
			let array = [];
			array.push(this.focusedWidget.id);
			if (!this.focusedWidget.editable) return;
			Rex.callRpcMethod("Rex", this.id, this.type, "cut", [JSON.stringify(array)]);
		}
		if (this.selectedWidgets.length) {
			Rex.callRpcMethod("Rex", this.id, this.type, "cut", [JSON.stringify(this.selectWidgets)]);
			return;
		}
	}

	save(event) {
		event.preventDefault();
		Rex.callRpcMethod("Rex", this.id, this.type, "save", []);
	}

	clone(event) {
		let cPos = translateVect(this.mouse.pos);
		//this.confirmMoveSelection(cPos);//todo При копировании выделенных блочков - в данной функции происходит сеттинг новых координат и они улетают на дельту
		if (this.focusedWidget) {
			let array = [];
			array.push(this.focusedWidget.id);
			if (!this.focusedWidget.editable) return;
			Rex.callRpcMethod("Rex", this.id, this.type, "clone", [JSON.stringify(array), Math.trunc(cPos.x), Math.trunc(cPos.y)]);
		}
		if (this.selectedWidgets.length) {
			Rex.callRpcMethod("Rex", this.id, this.type, "clone", [JSON.stringify(this.selectWidgets), Math.trunc(cPos.x), Math.trunc(cPos.y)]);
			return;
		}
		event.preventDefault();
	}

	delete() {
		if (this.focusedWidget) {
			if (!this.focusedWidget.editable) return;
			Rex.callRpcMethod("Rex", this.id, this.type, "deleteWidget", [this.focusedWidget.id]);
		}
		if (this.selectedWidgets.length) {
			Rex.callRpcMethod("Rex", this.id, this.type, "deleteWidgets", [JSON.stringify(this.selectWidgets)]);
			return;
		}
	}

	keyPress(event) {
		if (Rex.console && Rex.console.onKeyPress(event)) return;
		if (!this.focusedWidget) return;
		this.focusedWidget.keyPress(event);
	}

	keyDown(event) {
		if (Rex.console !== undefined && Rex.console.onKeyDown(event)) return;
		//if(!this.focusedWidget) return;
		if (this.keyBoard.isKeyPressed(Rex.KeyList.delete) || this.keyBoard.isKeyPressed(Rex.KeyList.backspace)) {
			this.delete();
		}
		if (this.keyBoard.isKeyPressed(Rex.KeyList.s) && this.keyBoard.controlKeyIsPressed()) {
			this.save(event);
		}
		if (this.keyBoard.isKeyPressed(Rex.KeyList.d) && this.keyBoard.controlKeyIsPressed()) {
			event.preventDefault();
			this.clone(event);
		}
		if (this.focusedWidget) this.focusedWidget.keyDown(event);
	}

	keyUp(event) {
		if (!this.focusedWidget) return;
		this.focusedWidget.keyUp(event);
	}

	multiSelect(selectedWidgets) {
		if (this.selectedWidgets !== undefined && this.selectedWidgets.length > 0) {
			for (let w of this.selectedWidgets) {
				if (!w) continue;
				w.onSelected(false);
			}
		}
		for (let key in selectedWidgets) {
			let w = selectedWidgets[key];
			w.startMove = new Rex.Vector2(w.posX, w.posY);
			w.onSelected(true);
		}
		this.selectedWidgets = selectedWidgets;
		if (this.selectedWidgets.length) Rex.callRpcMethod("Rex", this.id, this.type, "setSelectWidgets", [JSON.stringify(this.selectWidgets)]);
	}

	getRootWidget(widget) {
		if (widget === undefined) return undefined;
		while (widget.parentId != -1) {
			widget = Rex.widgets[widget.parentId];
			if (widget == undefined) break;
		}
		return widget;
	}

	dragDropInit() {
		this.dragHandler = function (event) {
			//TODO stop drag annimation если все undefined
			// if (!Rex.gui.checkHoverUI(event)) return;

			let dragWidget = Rex.gui.hoveredWidget;

			if (!dragWidget.draggable) return;
	
			//мега костыль на много событий
			if (Rex.gui.dragData != undefined) return;
			
			Rex.gui.dragData = dragWidget.drag();
			let dragImage = dragWidget.dragImage;
			
			if(dragImage instanceof(Image) == false) {
				let img = new Image(dragImage);
				img.src = dragImage;
				dragImage = img;
			}

			if(dragImage != undefined)
				event.dataTransfer.setDragImage(dragImage, 0, 0);	
	
			Rex.callRpcMethod("Widgets", dragWidget.id, dragWidget.type, "drag", []);
		}
		document.addEventListener("dragstart", this.dragHandler, false);
	}

	

	drop (dropData) {
		//костыль чтобы 1 раз вызвался дроп у самого верхнего виджета
		//на который можно дропать
		if (this.dragData == undefined) return;
		
		let data = {
			drag : this.dragData,
			drop : dropData
		}
		this.dragData = undefined;
		Rex.callRpcMethod("Rex", Rex.gui.id, Rex.gui.type, "drop", [JSON.stringify(data)]);
	}
}


class Grid {
	
	constructor() {
		this.step = null;
		this.st = 18;
		this.width = document.body.clientWidth;
		this.height = document.body.clientHeight;
		
		this.firstBuffer = document.createElement("canvas");
		this.firstBufferCtx = this.firstBuffer.getContext("2d");
		this.div = document.createElement("div");
		this.div.style.position = "relative";
		this.div.style.width = window.innerWidth + "px";
		this.div.style.height = window.innerHeight + "px";
		document.body.insertBefore(this.div, document.getElementById("container1"));
		this.div.appendChild(this.firstBuffer);
		
		this.secondBuffer = document.createElement("canvas");
		this.secondBufferCtx = this.secondBuffer.getContext("2d");
	}
	
	clear() {
		document.body.removeChild(this.div);
	}
	
	refreshCanvas() {
		this.firstBuffer.width = 1;
		this.secondBuffer.width = 1;
		
		this.firstBuffer.width = window.innerWidth;
		this.firstBuffer.height = window.innerHeight;
		
		this.secondBuffer.width = window.innerWidth;
		this.secondBuffer.height = window.innerHeight;
	}
	
	draw(ctx, ctxTemp) {
		if(Rex.camera === undefined || !(Rex.camera instanceof Camera2D)) return;
		this.width = document.body.clientWidth;
		this.height = document.body.clientHeight;
		if(ctxTemp !== undefined) ctxTemp.clearRect(0, 0, window.innerWidth, window.innerHeight);
		ctxTemp.save();
		this.zoom = Rex.camera.getZoom();
		ctxTemp.translate(this.width / 2, this.height / 2);
		ctxTemp.scale(this.zoom, this.zoom);
		ctxTemp.translate(-Rex.camera.position.x, -Rex.camera.position.y);
		let topGrid;
		let bottomGrid;
		let leftGrid;
		let rightGrid;
		if(this.zoom > 1) {
			topGrid = -(this.height + Math.abs(Rex.camera.position.y)) * this.zoom;
			bottomGrid = (this.height + Math.abs(Rex.camera.position.y)) * this.zoom;
			leftGrid = -(this.width + Math.abs(Rex.camera.position.x)) * this.zoom;
			rightGrid = (this.width + Math.abs(Rex.camera.position.x)) * this.zoom;
		} else {
			topGrid = -(this.height + Math.abs(Rex.camera.position.y)) / this.zoom;
			bottomGrid = (this.height + Math.abs(Rex.camera.position.y)) / this.zoom;
			leftGrid = -(this.width + Math.abs(Rex.camera.position.x)) / this.zoom;
			rightGrid = (this.width + Math.abs(Rex.camera.position.x)) / this.zoom;
		}
		
		let thickness = 1 / this.zoom;
		this.step = Math.max(1.0, Math.pow(10.0, Math.ceil(Math.log10(2 / Rex.camera.zoom)))) * this.st;
		let y = Math.floor(topGrid / this.step) * this.step;
		while(y < bottomGrid) {
			if(parseInt(Math.floor(y / this.step + 0.5)) == 0) {
				ctxTemp.beginPath();
				ctxTemp.lineWidth = thickness;
				ctxTemp.strokeStyle = "rgb(76, 76, 12)";
				ctxTemp.moveTo(leftGrid, y);
				ctxTemp.lineTo(rightGrid, y);
				ctxTemp.stroke();
			} else if(parseInt(Math.floor(y / this.step + 0.5)) % 10 == 0) {
				ctxTemp.beginPath();
				ctxTemp.lineWidth = thickness;
				ctxTemp.strokeStyle = "rgb(76, 76, 76)";
				ctxTemp.moveTo(leftGrid, y);
				ctxTemp.lineTo(rightGrid, y);
				ctxTemp.stroke();
			} else if(parseInt(Math.floor(y / this.step + 0.5)) % 5 == 0) {
				ctxTemp.beginPath();
				ctxTemp.lineWidth = thickness;
				ctxTemp.strokeStyle = "rgb(38, 38, 38)";
				ctxTemp.moveTo(leftGrid, y);
				ctxTemp.lineTo(rightGrid, y);
				ctxTemp.stroke();
			} else {
				ctxTemp.beginPath();
				ctxTemp.lineWidth = thickness;
				ctxTemp.strokeStyle = "rgb(25, 25, 25)";
				ctxTemp.moveTo(leftGrid, y);
				ctxTemp.lineTo(rightGrid, y);
				ctxTemp.stroke();
			}
			y += this.step;
		}
		
		let x = Math.floor(leftGrid / this.step) * this.step;
		while(x < rightGrid) {
			if(parseInt(Math.floor(x / this.step + 0.5)) == 0) {
				ctxTemp.beginPath();
				ctxTemp.lineWidth = thickness;
				ctxTemp.strokeStyle = "rgb(76, 76, 12)";
				ctxTemp.moveTo(x, topGrid);
				ctxTemp.lineTo(x, bottomGrid);
				ctxTemp.stroke();
			} else if(parseInt(Math.floor(x / this.step + 0.5)) % 10 == 0) {
				ctxTemp.beginPath();
				ctxTemp.lineWidth = thickness;
				ctxTemp.strokeStyle = "rgb(76, 76, 76)";
				ctxTemp.moveTo(x, topGrid);
				ctxTemp.lineTo(x, bottomGrid);
				ctxTemp.stroke();
			} else if(parseInt(Math.floor(x / this.step + 0.5)) % 5 == 0) {
				ctxTemp.beginPath();
				ctxTemp.lineWidth = thickness;
				ctxTemp.strokeStyle = "rgb(38, 38, 38)";
				ctxTemp.moveTo(x, topGrid);
				ctxTemp.lineTo(x, bottomGrid);
				ctxTemp.stroke();
			} else {
				ctxTemp.beginPath();
				ctxTemp.lineWidth = thickness;
				ctxTemp.strokeStyle = "rgb(25, 25, 25)";
				ctxTemp.moveTo(x, topGrid);
				ctxTemp.lineTo(x, bottomGrid);
				ctxTemp.stroke();
			}
			x += this.step;
		}
		ctx.drawImage(ctxTemp.canvas, 0, 0);
		ctxTemp.restore();
	}
	
}

/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* global Rex*/
/*
class DragAndDrop {

	constructor(sender, data, type) {
		this.posX = 0;
		this.posY = 0;
		this.sender = sender;
		this.type = "";
		this.data = data;
		this.imageData = undefined;
		this.tempCanvas = document.createElement("canvas");
		this.tempCtx = this.tempCanvas.getContext("2d");
		// if (sender.view.htmlElement != null) {
		// 	sender.view.htmlElement.ondragend = e => {
		// 		Rex.gui.mouseUp(e);
		// 		Rex.mouse.pressedButton = 0;
		// 	};
		// sender.view.htmlElement.ondragstart = e => {this.sendDrag()};
		// sender.view.htmlElement.ondragstart = e => {this.setDragImage(e);};
		// }
	}

	// setDragImage(e) {

	// 	let sender = this.sender;

	// 	if (this.sender == undefined)
	// 		return;

	// 	let dragImage = this.sender.dragImage;

	// 	if (dragImage == undefined)
	// 		return;

	// 	let im = new Image();

	// 	im.src = dragImage;

	// 	e.dataTransfer.setDragImage(im, 0, 0);
	// }

	grabImage(ctx, x, y, width, height) {
		if (this.imageData === undefined) {
			this.tempCanvas.width = ctx.canvas.width;
			this.tempCanvas.height = ctx.canvas.height;
			this.tempCtx.drawImage(ctx.canvas, 0, 0);
			this.imageData = this.tempCtx.getImageData(x, y, width, height);
		}
	}

	draw(ctx) {
		if (this.imageData !== undefined) {
			this.tempCanvas.width = this.imageData.width;
			this.tempCanvas.height = this.imageData.height;
			this.tempCtx.putImageData(this.imageData, 0, 0);
			ctx.drawImage(this.tempCanvas, this.posX, this.posY);
			Rex.gui.redraw();
			ctx.restore();
		}
	}

	mouseMove(x, y) {
		if (this.posX == x && this.posY == y) return;
		this.posX = x;
		this.posY = y;
	}

	sendDrag() {
		Rex.callRpcMethod("Widgets", this.sender.id, this.sender.type, "drag", []);
	}

	sendDrop(data) {
		// let data = undefined;
		// let receiver = Rex.gui.hoveredWidget;
		// if (receiver !== undefined) data = receiver.drop(this);
		// //если супердаты нету, то сетим дефолтную.
		// if (data === undefined) {
		// 	data = {
		// 		drag : {
		// 			sender : this.sender.id,
		// 			data : this.data
		// 		},
		// 		drop : {
		// 			receiver : receiver == undefined ? -1 : receiver.id,
		// 			pos : {
		// 				x : this.posX,
		// 				y : this.posY
		// 			},
		// 			data : {}
		// 		}
		// 	}
		// }

		Rex.callRpcMethod("Rex", Rex.gui.id, Rex.gui.type, "drop", [JSON.stringify(data)]);
	}
}
*/


class Engine {
	
	constructor() {
		document.addEventListener("mousemove", this.mouseMove.bind(this));
		document.addEventListener("mousedown", this.mouseDown.bind(this));
		document.addEventListener("mouseup", this.mouseUp.bind(this));
		document.addEventListener("wheel", this.mouseWheel.bind(this));
		document.addEventListener("dblclick", this.mouseDoubleClick.bind(this));
		
		document.addEventListener("keydown", this.keyDown.bind(this));
		document.addEventListener("keyup", this.keyUp.bind(this));
		
		window.addEventListener("orientationchange", this.changeOrientation.bind(this));
		this.getLoadedDevice();
		this.changeOrientation();
		
		this.oldXX = 0.0;
		this.oldYY = 0.0;
	}
	
	mouseMove(event) {
		if(Math.abs(this.oldXX -  event.clientX) < 2 && Math.abs(this.oldYY - event.clientY) < 2) return;
		//if(Rex.gui != undefined) Rex.gui.mouseMove(event);
		Rex.callRpcFunction("RexEngine", "mouseMove", [event.clientX, event.clientY]);
	}
	
	mouseDown(event) {
		let button = this.translateMouseButton(event.which);
		Rex.callRpcFunction("RexEngine", "mouseDown", [event.clientX, event.clientY, button]);
	}
	
	mouseUp(event) {
		let button = this.translateMouseButton(event.which);
		Rex.callRpcFunction("RexEngine", "mouseUp", [event.clientX, event.clientY, button]);
	}
	
	mouseWheel(event) {
		Rex.callRpcFunction("RexEngine", "mouseWheel", [Math.abs(event.deltaY) / event.deltaY]);
	}
	
	mouseDoubleClick(event) {
		Rex.callRpcFunction("RexEngine", "mouseDoubleClick", [event.clientX, event.clientY]);
	}
	
	keyDown(event) {
		Rex.callRpcFunction("RexEngine", "keyDown", [event.keyCode]);
	}
	
	keyUp(event) {
		Rex.callRpcFunction("RexEngine", "keyUp", [event.keyCode]);
	}
	
	translateMouseButton(which) {
		if(which == 1 || which == 0) return Rex.MouseButtonLeft;
		if(which == 2) return Rex.MouseButtonMid;
		if(which == 3) return Rex.MouseButtonRight;
		return -1;
	}
	
	changeOrientation() {
		let type = screen.orientation.type;
		if(type.indexOf("portrait") != -1) Rex.callRpcFunction("RexEngine", "orientationChange", [false]);
		else Rex.callRpcFunction("RexEngine", "orientationChange", [true]);
	}
	
	getLoadedDevice() {
		var OSName = "Unknown OS";
		if(navigator.userAgent.indexOf("Mobile") != -1) OSName = "Mobile";
		if(navigator.userAgent.indexOf("Win") != -1) OSName = "Windows";
		if(navigator.userAgent.indexOf("Mac") != -1) OSName = "Macintosh";
		if(navigator.userAgent.indexOf("Linux") != -1) OSName = "Linux";
		if(navigator.userAgent.indexOf("Android") != -1) OSName = "Android";
		if(navigator.userAgent.indexOf("like Mac") != -1) OSName = "iOS";
		Rex.callRpcFunction("RexEngine", "deviceOS", [OSName]);
	}
	
}

class canvasObject {
	constructor() {
		this.ctx = document.createElement('canvas').getContext('2d');
	}

	get context() {
		return this.ctx;
	}
}

let canvas = new canvasObject();

function getWidthOfString(text, font) {
	canvas.context.font = font;
	return canvas.context.measureText(text).width;
}

function getLinesNumber(node) {
	let text = node.innerText || node.innerHtml || node.textContent;
	if (text == null || text.length === 0)
		return 0;

	const spaceLetter = '';
	const font = getStyle(node, 'font');

	let result = 1;

	let words = text.split(spaceLetter);
	let width = 0;
	for (let word of words) {
		if (words.indexOf(word) !== words.length - 1)
			word += spaceLetter;

		const wordWidth = getWidthOfString(word, font);
		width += wordWidth;
		if (width >= node.offsetWidth) {
			++result;
			width = wordWidth;
		}
	}

	return result;
}

function getStyle(node, styleName) {
	let oElm = node;
	let strValue = "";
	if (document.defaultView && document.defaultView.getComputedStyle) {
		let v = document.defaultView.getComputedStyle(oElm, "");
		strValue = v[styleName];

		if (strValue == undefined) strValue = node.style[styleName];
	}
	else if (oElm.currentStyle) {
		styleName = styleName.replace(/\-(\w)/g, function (strMatch, p1) { return p1.toUpperCase(); });
		strValue = oElm.currentStyle[styleName];
	}
	return strValue;
}

function getOffsetParentOfConstructor() {
	for (const widget of Rex.widgets) {
		if (widget.type == 'Constructor') {
			return widget.view.htmlElement.offsetParent;
		}
	}

	return null;
}

function getOffsetValues(node) {
	if (node == null)
		return null;

	const offset =
	{
		width: node.scrollWidth - node.offsetWidth,
		height: node.scrollHeight - node.offsetHeight
	};

	return offset;
}

function hasScrollBar(node) {
	const offset = getOffsetValues(node);
	if (offset == null)
		return false;

	return (offset.height > 0 || offset.width > 0)
}

function isHEX(color) {
	return color.indexOf('#') !== -1;
}

function isRGB(color) {
	return color.indexOf('rgb(') !== -1;
}

function isRGBA(color) {
	return color.indexOf('rgba(') !== -1;
}

// color - HEX color
// opacity - value in the range from 0 to 1
// new color value will be written to color valiable
function mixColorWithOpacity(color, opasity) {
	if (color == null || opasity == null)
		return;

	if (!isHEX(color))
		return;

	if (opasity < 0 || opasity >= 1)
		return;

	const tmpColor = color.slice(1);
	let r = parseInt(tmpColor.slice(0, 2), 16);
	let g = parseInt(tmpColor.slice(0, 2), 16);
	let b = parseInt(tmpColor.slice(0, 2), 16);

	r = parseInt(255 - opasity * (255 - r)).toString(16);
	g = parseInt(255 - opasity * (255 - g)).toString(16);
	b = parseInt(255 - opasity * (255 - b)).toString(16);

	return color = '#' + r + g + b;
}

function getColorHEX(color) {
	let result = '#ffffff'

	if (isHEX(color)) {
		const c = color.slice(1);
		let r = 255;
		let g = 255;
		let b = 255;
		let alpha = 1;

		if (c.length === 3 || c.length === 4) {
			r = parseInt(c[0] + c[0], 16);
			g = parseInt(c[1] + c[1], 16);
			b = parseInt(c[1] + c[1], 16);
			tmp = r + g + b;

			if (c.length === 4)
				alpha = parseInt(c[2] + c[2], 16) / 16;
		} else if (c.length === 6 || c.length === 8) {
			r = parseInt(c.slice(0, 2), 16);
			g = parseInt(c.slice(2, 4), 16);
			b = parseInt(c.slice(4, 6), 16);

			if (c.length === 8)
				alpha = parseInt(c.slice(6), 16) / 255;
		}
		
		if (alpha !== 1) {
			r = 255 - alpha * (255 - r);
			g = 255 - alpha * (255 - g);
			b = 255 - alpha * (255 - b);
		}
		
		result = '#' + r.toString(16) + g.toString(16) + b.toString(16);
	} else if (isRGB(color)) {
		const c = color.slice(4, color.length - 1);

		let index = 0;
		let r = parseInt(c.slice(0, index = c.indexOf(','))).toString(16);
		let g = parseInt(c.slice(index + 2, index = c.indexOf(',', index + 1))).toString(16);
		let b = parseInt(c.slice(index + 2)).toString(16);

		if (r.length === 1) r = 0 + r;
		if (g.length === 1) g = 0 + g;
		if (b.length === 1) b = 0 + b;

		result = '#' + r + g + b;
	} else if (isRGBA(color)) {
		const c = color.slice(5, color.length - 1);

		let index = 0;
		let r = parseInt(c.slice(0, index = c.indexOf(',')));
		let g = parseInt(c.slice(index + 2, index = c.indexOf(',', index + 1)));
		let b = parseInt(c.slice(index + 2, index = c.indexOf(',', index + 1)));
		let a = parseFloat(c.slice(index + 2));

		r = parseInt(255 - a * (255 - r)).toString(16);
		g = parseInt(255 - a * (255 - g)).toString(16);
		b = parseInt(255 - a * (255 - b)).toString(16);
		
		if (r.length === 1) r = 0 + r;
		if (g.length === 1) g = 0 + g;
		if (b.length === 1) b = 0 + b;

		result = '#' + r + g + b
	} else {
		result = color;
	};

	return result;
}

//layout argument is not WidgetLayout
//it is layout of table dd-object
function generateBorder(layout, node) {
	const borderStyle = getStyle(node, 'borderStyle');
	const borderWidth = getStyle(node, 'borderWidth');
	const borderColor = getColorHEX(getStyle(node, 'borderColor'));

	if (borderStyle == 'node' ||
		borderStyle == 'hidden' ||
		borderWidth == 0)
	{
		// if htmlNode has no border or border width is 0,
		// then need to make it invisible

		const backgroundColor = getColorHEX(getStyle(node, 'background-color'));

		layout.vLineColor = backgroundColor;
		layout.hLineColor = backgroundColor;
		layout.vLineWidth = function(i, node) { return 0; }
		layout.hLineWidth = function(i, node) { return 0; }
	} else {
		//if htmlNode has border, then need to set it up

		layout.vLineColor = borderColor;
		layout.hLineColor = borderColor;
		layout.vLineWidth = function() { return parseInt(borderWidth); };
		layout.hLineWidth = function() { return parseInt(borderWidth); };

		if (borderStyle == 'dashed') {
			layout.vLineStyle = function() { return {dash:{length: 6, space: 4}}; };
			layout.hLineStyle = function() { return {dash:{length: 6, space: 4}}; };
		} else if (borderStyle == 'dotted') {
			layout.vLineStyle = function() { return {dash:{length: 4, space: 4}}; };
			layout.hLineStyle= function() { return {dash:{length: 4, space: 4}}; };
		}
	}
}

function generateText(node, object) {
	let text = node.innerText || node.textContent || node.value;
	if (text == null || text.length === 0)
		text = "";

	object.text = text;
	object.color = getColorHEX(getStyle(node, 'color'));
	object.alignment = getStyle(node, 'text-align');

	object.fontSize = parseInt(getStyle(node, 'fontSize')) - 2;
	//NOTE: I'll calculate it later
	object.lineHeight = 1;

	let side = ['left', 'top', 'right', 'bottom']
	for (let i = 0; i < side.length; ++i) {
		const value = parseInt(getStyle(node, 'margin-' + side[i]));
		if (isNaN(value))
			continue;

		object.margin[i] = value;
	}

	const vAlignment = getStyle(node, 'align-items');
	//if value of vertical alignemnt type is not 'top'
	if (vAlignment == 'center' ||
	vAlignment === 'left' ||
	vAlignment === 'right' ||
	vAlignment === 'safe' ||
	vAlignment === 'unsafe' ||
	vAlignment === 'flex-end') {
		const linesNumber = getLinesNumber(node);
		//NOTE: the string height value may be unique for every font,
		//		bold and italic styles can't change it.
		//		I'll try to calculate this value later
		// const stringHeight = 1.17;
		const stringHeight = 1.24;
		// calculate margin-top value
		let topValue = node.getBoundingClientRect().height - (object.fontSize * linesNumber * stringHeight * object.lineHeight);
		if (vAlignment !== 'flex-end') {
			//if value of virtical alignment type is 'center', then need to divide the margin-top value by 2
			topValue -= object.margin[1];
			topValue /= 2;
		} else {
			//if value of virtical alignment type is 'bottom'
			topValue -= object.margin[1] * 2;
		}

		object.margin[1] += topValue;
	}

	const italic = getStyle(node, 'font-style');
	if (italic === 'oblique' || italic == 'italic')
		object.italics = true;
	else object.italics = false;

	const bold = getStyle(node, 'font-weight');
	// font-weight value can be a number
	if (bold === 'bold' ||
		bold === 'bolder' ||
		parseInt(bold) >= 600)
		object.bold = true;
	else object.bold = false;

	//NOTE: i can get inherited style value using a webkitTextDecorationsInEffect;
	const decoration = window.getComputedStyle(node).webkitTextDecorationsInEffect;
	// set decoration style
	if (decoration == 'underline' ||
		decoration == 'overline' ||
		decoration == 'line-through')
	object.decoration = decoration;
}

class PDFPage {

	constructor() {
		this._content = [];
	}

	generateContent(widget, imgs) {
		if (widget == null)
			return;

		let docData = {
			firstId : widget.id,
			currentHeight : 0,
			images: imgs,
			docHeight : widget.view.htmlElement.offsetHeight
		}

		widget.generateContent(this._content, docData);
	}

	get content() {
		return this._content;
	}

};

class PDFCreator extends RexObject {

    constructor() {
        super();

        this._documentName = "";

        // document pages
        this._pages = [];
        // document images
        this._images = [];
        // widgets from which pages are generated
        this._widgets = [];

        // this object defines document content, size, etc.
        // you can read more here: https://pdfmake.github.io/docs/document-definition-object/page/
        this._documentDefinition = 
        {
            // [left, top, right, bottom] or [horizontal, vertical] or just a number for equal margins
            pageMargins : [0, 0, 0, 0],
            // a string or { width: number, height: number }
            // you can use these string values
            // ‘A/B/C 0-10’, 'RA0-4’, 'SRA0-4'
            // ‘EXECUTIVE’, ‘FOLIO’, ‘LEGAL’, ‘LETTER’, ‘TABLOID’
            pageSize : 'A4',
            // by default we use portrait, you can change it to landscape if you wish
            pageOrientation : 'portrait'
        }
    }

    setState(state) {
        if (state.pageSize != null) this.documentSize = state.pageSize;
        if (state.name != null) this.documentName = state.name;
        if (state.orientation != null) this.documentOrientation = state.orientation;
        if (state.widgetId != null) this.appendPage(state.widgetId);
        if (state.needSave != null) this.save();

        if (state.remove != null) {
            for (let id of state.remove) {
                this.removePage(id);
            }
        }
    }

    set documentName(name) {
        if (name == null) {
            console.error('PDFCreator: documentSize -> name string is null');
            return;
        }

        if (typeof(name) !== 'string') {
            console.error('PDFCreator: documentSize -> name object isn\'t string');
            return;
        }

        if (name === '') {
            console.error('PDFCreator: documentSize -> name string is empty');
            return;
        }

        this._documentName = name;
    }

    get documentName() {
        return this._documentName;
    }

    set documentSize(size) {
        if (size == null) {
            console.error('PDFCreator: documentSize -> size object is empty');
            return;
        }

        let type = typeof(size);
        if (type !== 'string' && type !== 'object') {
            console.error('PDFCreator: documentSize -> size object has bad type');
            return;
        }

        this._documentDefinition.pageSize = size;
    }

    get documentSize() {
        return this._documentDefinition.pageSize;
    }

    set documentOrientation(orientation) {
        if (orientation == null) {
            console.error('PDFCreator: documentOrientation -> orientation string is null');
            return;
        }

        let type = typeof(orientation)
        if (type !== 'string' && type !== 'number') {
            console.error('PDFCreator: documentOrientation -> orientation object has bad type');
            return;
        }

        if (orientation === '') {
            console.error('PDFCreator: documentOrientation -> orientation string is empty');
            return;
        }

        if (orientation === 'portrait' || orientation === 'landscape') {
            this._documentDefinition.pageOrientation = orientation;
        } else {
            if (orientation == 0) {
                this._documentDefinition.pageOrientation = 'portrait';
            } else if (orientation == 1) {
                this._documentDefinition.pageOrientation = 'landscape';
            } else {
                console.error('PDFCreator: documentOrientation -> unknown orientation');
            }
        }
    }

    get documentOrientation() {
        return this._documentDefinition.pageOrientation;
    }

    get numPages() {
        return this._pages.length;
    }

    appendPage(widgetID) {
        if (widgetID == null) {
            console.error('PDFCreator: appendPage -> widgetID is null');
            return;
        }

        if (typeof(widgetID) !== 'number') {
            if (typeof(widgetID) === 'string') {
                widgetID = parseInt(widgetID);
                if (isNaN(widgetID)) {
                    console.error('PDFCreator: appendPage -> widgetID is NaN');
                    return;
                }
            } else {
                console.error('PDFCreator: appendPage -> widgetID has bad type');
                return;
            }
        }

        let widget = Rex.widgets[widgetID];
        if (widget == null) {
            console.error('PDFCreator: appendPage -> Rex has no widget with id \'' + widgetID + '\'');
            return;
        }

        if (this._pages.length !== 0) {
            let last = this._pages[this._pages.length - 1];
            last._content[last._content.length - 1].pageBreak = 'after';
        }

        let page = new PDFPage();
        page.generateContent(widget, this._images);
        this._pages.push(page);
        this._widgets.push(widgetID);
    }

    removePage(widgetID) {
        if (widgetID == null) {
            console.error('PDFCreator: removePage -> widgetID is null');
            return;
        }

        if (typeof(widgetID) !== 'number') {
            if (typeof(widgetID) === 'string') {
                widgetID = parseInt(widgetID);
                if (isNaN(widgetID)) {
                    console.error('PDFCreator: removePage -> widgetID is NaN');
                    return;
                }
            } else {
                console.error('PDFCreator: removePage -> widgetID has bad type');
                return;
            }
        }

        let index = this._widgets.indexOf(widgetID);
        if (index === -1) {
            console.error('PDFCreator: removePage -> document has no that page');
            return;
        }

        this._widgets.splice(index, 1);
        this._pages.splice(index, 1);
    }

    save() {
		this._mainContent = [];

        // generate main content from pages
		for (const page of this._pages) {
			for (const cont of page._content) {
				this._mainContent.push(cont);
			}
		}

        // define pdkmake lib content
		this._documentDefinition.content = this._mainContent;

        // set up fonts
		pdfMake.vfs = globalThis.pdfMake.vfs;
		if (this._documentName.indexOf('.pdf') === -1)
			this._documentName += '.pdf';

        if (this._images.length === 0)
            // save document on the client pc
			pdfMake.createPdf(this._documentDefinition).download(this._documentName);
    }

}

// Rex header

Rex.Buffer = {};

/**
 * Buffer
 * @constructor
 */
class Buffer extends RexObject {
	
	constructor(state) {
		super();
		this.stride = undefined;
		this.data = new Uint8Array([]);
		
		this.old_data = undefined;
		
		this.array = undefined;
		
		this.buffer = undefined;
		
		if(state !== undefined) Rex.copy(this, state);
		if(Rex.render == null) {
			Rex.render = new Render();
			Rex.render.render();
		}
	}
	
	setStride(stride) {
		this.stride = stride;
	}
	
	setState(state) {
		Rex.copy(this, state);
	}
	
	/// bind uniform buffer
	bindUniform(index, format) {
		
		var gl = Rex.render.gl;
		
		// update buffer data
		if(this.old_data !== this.data) {
			this.array = new Float32Array(this.data.buffer);
			this.old_data = this.data;
		}
		
		// set uniform buffer
		if(format === Rex.FormatFloat32x1) gl.uniform1fv(index, this.array);
		else if(format === Rex.FormatFloat32x2) gl.uniform2fv(index, this.array);
		else if(format === Rex.FormatFloat32x3) gl.uniform3fv(index, this.array);
		else if(format === Rex.FormatFloat32x4) {
			if(this.data.byteLength === 64) gl.uniformMatrix4fv(index, false, this.array);
			else gl.uniform4fv(index, this.array);
		} else {
			Rex.error("Rex.Buffer.bindUniform(): unknown format: " + format);
			return false;
		}
		
		return true;
	}
	
	/// bind array buffer
	bindArray(type, layout) {
		
		var gl = Rex.render.gl;
		
		// create buffer
		if(this.buffer === undefined) {
			this.buffer = gl.createBuffer();
		}
		
		// update buffer data
		if(this.old_data !== this.data) {
			gl.bindBuffer(type, this.buffer);
			gl.bufferData(type, this.data, gl.STATIC_DRAW);
			this.old_data = this.data;
		}
		
		// bind buffer
		if(type === gl.ARRAY_BUFFER) {
			
			// get WebGL formats
			if(Rex.Buffer.vertex_sizes === undefined) {
				
				// vertex sizes
				Rex.Buffer.vertex_sizes = [
					undefined, undefined,
					4,
					undefined, undefined,
					2, 4,
					1, 2, 3, 4
				];
				
				// vertex types
				Rex.Buffer.vertex_types = [
					undefined, undefined,
					gl.UNSIGNED_BYTE,
					undefined, undefined,
					gl.HALF_FLOAT_OES, gl.HALF_FLOAT_OES,
					gl.FLOAT, gl.FLOAT, gl.FLOAT, gl.FLOAT
				];
			}
			
			// enable vertex attributes
			for(var i = 0; i < layout.vertex_formats.length; i++) {
				gl.bindBuffer(type, this.buffer);
				var vertex_format = layout.vertex_formats[i];
				var vertex_size = Rex.Buffer.vertex_sizes[vertex_format];
				var vertex_type = Rex.Buffer.vertex_types[vertex_format];
				if(vertex_size === undefined || vertex_type === undefined) return false;
				gl.vertexAttribPointer(i, vertex_size, vertex_type, false, layout.vertex_stride, layout.vertex_offsets[i]);
				gl.enableVertexAttribArray(i);
			}
		}
		else if(type === gl.ELEMENT_ARRAY_BUFFER) {
			gl.bindBuffer(type, this.buffer);
		}
		
		return true;
	}
	
	/// unbind array buffer
	unbindArray(type, layout) {
		
		var gl = Rex.render.gl;
		
		// unbind buffer
		if(type === gl.ARRAY_BUFFER) {
			
			// disable vertex attributes
			for(var i = 0; i < layout.vertex_formats.length; i++) {
				gl.disableVertexAttribArray(i);
			}
		}
		
		return true;
	}
	
}


/**
 * Geometry
 * @constructor
 */

class Geometry extends RexObject {
	
	constructor(state) {
		super();
		this.layout = undefined;
		
		this.vertex_buffer = undefined;
		this.index_buffer = undefined;
		
		this.bound_center = new Rex.Vector3();
		this.bound_radius = 0;
		
		if(state !== undefined) Rex.copy(this, state);
		if(Rex.render == null) {
			Rex.render = new Render();
			Rex.render.render();
		}
	}
	
	onSuccessInit() {
		this.layout = Rex.layouts[this.layout];
		this.vertex_buffer = Rex.buffers[this.vertex_buffer];
		this.index_buffer = Rex.buffers[this.index_buffer];
	}
	
	setLayout(layout) {
		this.layout = layout;
	}
	
	setVertexBuffer(buffer) {
		this.vertex_buffer = buffer;
	}
	
	setIndexBuffer(buffer) {
		this.index_buffer = buffer;
	}
	
	setState(state) {
		Rex.copy(this, state);
		if(state.vertex_buffer != null || state.index_buffer != null || state.layout != null) {
			this.inited = false;
			let vertexBuffer = Rex.buffers[state.vertex_buffer];
			if(vertexBuffer != null) vertexBuffer.inited = false;
			let indexBuffer = Rex.buffers[state.index_buffer];
			if(indexBuffer != null) indexBuffer.inited = false;
			this.checkInit();
		}
	}
	
	/// bind geometry
	bind() {
		
		var gl = Rex.render.gl;
		
		// mesh layout
		//Пока закомментирую, если уже точно нигде не выстрелит. То можно убрать это.
		//if(!(this.layout instanceof Rex.Layout)) {
		//	this.layout = Rex.getLayout(this.layout);
		//	if(!(this.layout instanceof Rex.Layout)) return false;
		//}
		
		// vertex buffer
		//if(!(this.vertex_buffer instanceof Rex.Buffer)) {
		//	this.vertex_buffer = Rex.getBuffer(this.vertex_buffer);
		//	if(!(this.vertex_buffer instanceof Rex.Buffer)) return false;
		//}
		
		// index buffer
		//if(!(this.index_buffer instanceof Rex.Buffer)) {
		//	this.index_buffer = Rex.getBuffer(this.index_buffer);
		//	if(!(this.index_buffer instanceof Rex.Buffer)) return false;
		//}
		// bind buffers
		if(!this.vertex_buffer.bindArray(gl.ARRAY_BUFFER, this.layout)) return false;
		if(!this.index_buffer.bindArray(gl.ELEMENT_ARRAY_BUFFER, this.layout)) return false;
		
		return true;
	}
	
	/// unbind geometry
	unbind() {
		
		var gl = Rex.render.gl;
		
		// check geometry
		//Пока закомментирую, если уже точно нигде не выстрелит. То можно убрать это.
		//if(!(this.layout instanceof Rex.Layout)) return false;
		//if(!(this.vertex_buffer instanceof Rex.Buffer)) return false;
		//if(!(this.index_buffer instanceof Rex.Buffer)) return false;
		
		// unbind buffers
		if(!this.vertex_buffer.unbindArray(gl.ARRAY_BUFFER, this.layout)) return false;
		if(!this.index_buffer.unbindArray(gl.ELEMENT_ARRAY_BUFFER, this.layout)) return false;
		
		return true;
	}
	
}


/**
 * Layout
 * @constructor
 */

class Layout extends RexObject {
	
	constructor(state) {
		super();
		this.vertex_stride = 0;
		this.index_format = Rex.FormatUnknown;
		
		this.vertex_formats = [];
		this.vertex_offsets = [];
		
		if(state !== undefined) Rex.copy(this, state);
		if(Rex.render == null) {
			Rex.render = new Render();
			Rex.render.render();
		}
	}
	
	setState(state) {
		Rex.copy(this, state);
	}
	
}


// Rex header

/**
 * Label
 * @constructor
 */

class Label extends RexObject {
	
	constructor(state) {
		super();
		this.text = '';
		this.font = '';
		this.align = '';
		this.color = '';
		
		this.position_x = 0;
		this.position_y = 0;
		
		this.transform = new Rex.Matrix4();
		
		if(state !== undefined) Rex.copy(this, state);
		if(Rex.render == null) {
			Rex.render = new Render();
			Rex.render.render();
		}
	}
	
	setText(text) {
		this.text = text;
	}
	
	setFont(font) {
		this.font = font;
	}
	
	setAlign(align) {
		this.align = align;
	}
	
	setColor(color) {
		this.color = color;
	}
	
	setPosition(x, y) {
		this.position_x = x;
		this.position_y = y;
	}
	
	setTransform(transform) {
		this.transform = transform;
	}
	
	setState(state) {
		Rex.copy(this, state);
	}
	
	draw(ctx) {
		var m = this.transform.m;
		var width = Rex.render.width;
		var height = Rex.render.height;
		
		ctx.font = this.font;
		ctx.textAlign = this.align;
		ctx.fillStyle = this.color;
		ctx.setTransform(m[0], m[1], m[4], m[5], m[12] * width, m[13] * height);
		ctx.fillText(this.text, this.position_x, this.position_y);
		Rex.gui.redraw();
	}
	
}

// Rex header

/**
 * Line
 * @constructor
 */
class Line extends RexObject {
	
	constructor(state) {
		super();
		this.color = '';
		this.cap = '';
		this.width = 1;
		
		this.transform = new Rex.Matrix4();
		
		this.points = [];
		
		if(state !== undefined) Rex.copy(this, state);
		if(Rex.render == null) {
			Rex.render = new Render();
			Rex.render.render();
		}
	}
	
	setColor(color) {
		this.color = color;
	}
	
	setCap(cap) {
		this.cap = cap;
	}
	
	setWidth(width) {
		this.width = width;
	}
	
	setTransform(transform) {
		this.transform = transform;
	}
	
	setState(state) {
		Rex.copy(this, state);
	}
	
	draw(ctx) {
		if(this.points.length > 2) {
			var m = this.transform.m;
			var width = Rex.render.width;
			var height = Rex.render.height;
			ctx.setTransform(m[0], m[1], m[4], m[5], m[12] * width, m[13] * height);
			ctx.lineCap = this.cap;
			ctx.lineWidth = this.width;
			ctx.strokeStyle = this.color;
			ctx.beginPath();
			ctx.moveTo(this.points[0] * width, this.points[1] * height);
			for(var i = 2; i < this.points.length; i += 2) {
				ctx.lineTo(this.points[i + 0] * width, this.points[i + 1] * height);
			}
			ctx.stroke();
		}
		Rex.gui.redraw();
	}
	
}

// Rex header
Rex.Material = {};
/**
 * Globals
 */
Rex.Material.buffer_mask = 0;
Rex.Material.blend_src = Rex.BlendNone;
Rex.Material.blend_dest = Rex.BlendNone;
Rex.Material.depth_func = Rex.DepthNone;
Rex.Material.stencil_func = Rex.StencilNone;
Rex.Material.stencil_ref = 0xff;
Rex.Material.stencil_fail = Rex.StencilOpKeep;
Rex.Material.stencil_zfail = Rex.StencilOpKeep;
Rex.Material.stencil_zpass = Rex.StencilOpKeep;
Rex.Material.polygon_factor = 0;
Rex.Material.polygon_units = 0;
Rex.Material.cull_face = Rex.FaceNone;

/**
 * Begin/end material rendering
 */
Rex.Material.begin = function() {
	Rex.Material.buffer_mask = undefined;
	Rex.Material.blend_src = undefined;
	Rex.Material.blend_dest = undefined;
	Rex.Material.depth_func = undefined;
	Rex.Material.stencil_func = undefined;
	Rex.Material.stencil_ref = undefined;
	Rex.Material.stencil_fail = undefined;
	Rex.Material.stencil_zfail = undefined;
	Rex.Material.stencil_zpass = undefined;
	Rex.Material.polygon_factor = undefined;
	Rex.Material.polygon_units = undefined;
	Rex.Material.cull_face = undefined;
};

Rex.Material.end = function() {
	var gl = Rex.render.gl;
	gl.colorMask(true, true, true, true);
	gl.depthMask(true);
	gl.stencilMask(0xff);
	gl.blendFunc(gl.ONE, gl.ZERO);
	gl.disable(gl.BLEND);
	gl.depthFunc(gl.ALWAYS);
	gl.disable(gl.DEPTH_TEST);
	gl.stencilFunc(gl.ALWAYS, 0, 0xff);
	gl.disable(gl.STENCIL_TEST);
	gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
	gl.polygonOffset(0, 0);
	gl.disable(gl.POLYGON_OFFSET_FILL);
	gl.cullFace(gl.BACK);
	gl.disable(gl.CULL_FACE);
	Rex.Material.begin();
};

/**
 * Material
 * @constructor
 */

class Material extends RexObject {
	
	constructor(state) {
		super();
		this.vertex_shader = '';
		this.fragment_shader = '';
		
		this.buffer_mask = Rex.BufferAll;
		
		this.blend_src = Rex.BlendNone;
		this.blend_dest = Rex.BlendNone;
		
		this.depth_func = Rex.DepthNone;
		
		this.stencil_func = Rex.StencilNone;
		this.stencil_ref = 0xff;
		
		this.stencil_fail = Rex.StencilOpKeep;
		this.stencil_zfail = Rex.StencilOpKeep;
		this.stencil_zpass = Rex.StencilOpKeep;
		
		this.polygon_factor = 0;
		this.polygon_units = 0;
		
		this.cull_face = Rex.FaceNone;
		this.draw_mode = Rex.DrawTriangles;
		
		this.parameters = [];
		this.textures = [];
		
		this.program = undefined;
		this.projection = undefined;
		this.modelview = undefined;
		this.camera = undefined;
		this.viewport = undefined;
		
		if(state !== undefined) Rex.copy(this, state);
		if(Rex.render == null) {
			Rex.render = new Render();
			Rex.render.render();
		}
	}
	
	setVertexShader(src) {
		this.vertex_shader = src;
	}
	
	setFragmentShader(src) {
		this.fragment_shader = src;
	}
	
	setBufferMask(mask) {
		this.buffer_mask = mask;
	}
	
	setBlendFunc(src, dest) {
		this.blend_src = src;
		this.blend_dest = dest;
	}
	
	setDepthFunc(func) {
		this.depth_func = func;
	}
	
	setStencilFunc(func, ref) {
		this.stencil_func = func;
		this.stencil_ref = ref;
	}
	
	setStencilOp(fail, zfail, zpass) {
		this.stencil_fail = fail;
		this.stencil_zfail = zfail;
		this.stencil_zpass = zpass;
	}
	
	setPolyginOffset(factor, units) {
		this.polygon_factor = factor;
		this.polygon_units = units;
	}
	
	setCullFace(face) {
		this.cull_face = face;
	}
	
	setDrawMode(mode) {
		this.draw_mode = mode;
	}
	
	setParameters(parameters) {
		this.parameters = parameters;
	}
	
	setTextures(textures) {
		this.textures = textures;
	}
	
	setState(state) {
		Rex.copy(this, state);
	}
	
	/// bind material
	bind() {
		
		var gl = Rex.render.gl;
		
		// check material
		if(this.program === null) return false;
		
		// compile program
		if(this.program === undefined) {
			
			// create shader
			var create_shader = function(type, source) {
				var shader = gl.createShader(type);
				gl.shaderSource(shader, source);
				gl.compileShader(shader);
				if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
					Rex.error("Rex.Material.bind(): can't compile shader");
					Rex.error(gl.getShaderInfoLog(shader));
					gl.deleteShader(shader);
					return null;
				}
				return shader;
			};
			
			// vertex shader
			var vertex_shader = create_shader(gl.VERTEX_SHADER, this.vertex_shader);
			if(vertex_shader === null) {
				this.program = null;
				return false;
			}
			
			// fragment shader
			var fragment_shader = create_shader(gl.FRAGMENT_SHADER, this.fragment_shader);
			if(fragment_shader === null) {
				gl.deleteShader(vertex_shader);
				this.program = null;
				return false;
			}
			
			// create program
			var program = gl.createProgram();
			gl.attachShader(program, vertex_shader);
			gl.attachShader(program, fragment_shader);
			gl.bindAttribLocation(program, 0, "attribute_0");
			gl.bindAttribLocation(program, 1, "attribute_1");
			gl.bindAttribLocation(program, 2, "attribute_2");
			gl.bindAttribLocation(program, 3, "attribute_3");
			gl.bindAttribLocation(program, 4, "attribute_4");
			gl.bindAttribLocation(program, 5, "attribute_5");
			gl.bindAttribLocation(program, 6, "attribute_6");
			gl.bindAttribLocation(program, 7, "attribute_7");
			gl.linkProgram(program);
			if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
				Rex.error("Rex.Material.bind(): can't link program");
				Rex.error(gl.getProgramInfoLog(program));
				gl.deleteShader(vertex_shader);
				gl.deleteShader(fragment_shader);
				gl.deleteProgram(program);
				this.program = null;
				return false;
			}
			
			// bind textures
			gl.useProgram(program);
			var index_0 = gl.getUniformLocation(program, "texture_0");
			var index_1 = gl.getUniformLocation(program, "texture_1");
			var index_2 = gl.getUniformLocation(program, "texture_2");
			var index_3 = gl.getUniformLocation(program, "texture_3");
			if(index_0 !== null) gl.uniform1i(index_0, 0);
			if(index_1 !== null) gl.uniform1i(index_1, 1);
			if(index_2 !== null) gl.uniform1i(index_2, 2);
			if(index_3 !== null) gl.uniform1i(index_3, 3);
			
			this.program = program;
		}
		
		// get WebGL functions
		if(Rex.Material.blend_functions === undefined) {
			Rex.Material.blend_functions = [
				gl.ZERO,
				gl.ZERO,
				gl.ONE,
				gl.SRC_COLOR,
				gl.SRC_ALPHA,
				gl.DST_COLOR,
				gl.DST_ALPHA,
				gl.ONE_MINUS_SRC_COLOR,
				gl.ONE_MINUS_SRC_ALPHA,
				gl.ONE_MINUS_DST_COLOR,
				gl.ONE_MINUS_DST_ALPHA
			];
			Rex.Material.depth_functions = [
				gl.NEVER,
				gl.NEVER,
				gl.ALWAYS,
				gl.LESS,
				gl.EQUAL,
				gl.GREATER,
				gl.LEQUAL,
				gl.NOTEQUAL,
				gl.GEQUAL
			];
			Rex.Material.stencil_functions = [
				gl.NEVER,
				gl.NEVER,
				gl.ALWAYS,
				gl.LESS,
				gl.EQUAL,
				gl.GREATER,
				gl.LEQUAL,
				gl.NOTEQUAL,
				gl.GEQUAL
			];
			Rex.Material.stencil_operations = [
				gl.KEEP,
				gl.ZERO,
				gl.REPLACE,
				gl.INVERT,
				gl.INCR,
				gl.DECR
			];
			Rex.Material.cull_faces = [
				gl.FRONT,
				gl.FRONT,
				gl.BACK,
				gl.FRONT_AND_BACK
			];
		}
		
		// buffer mask
		if(Rex.Material.buffer_mask !== this.buffer_mask) {
			var r = (this.buffer_mask & Rex.BufferRed) !== 0;
			var g = (this.buffer_mask & Rex.BufferGreen) !== 0;
			var b = (this.buffer_mask & Rex.BufferBlue) !== 0;
			var a = (this.buffer_mask & Rex.BufferAlpha) !== 0;
			var d = (this.buffer_mask & Rex.BufferDepth) !== 0;
			gl.colorMask(r, g, b, a);
			gl.depthMask(d);
			gl.stencilMask(this.buffer_mask >> 8);
			Rex.Material.buffer_mask = this.buffer_mask;
		}
		
		// blend function
		if(Rex.Material.blend_src !== this.blend_src || Rex.Material.blend_dest !== this.blend_dest) {
			if(this.blend_src === Rex.BlendNone || this.blend_dest === Rex.BlendNone) {
				gl.blendFunc(gl.ONE, gl.ZERO);
				gl.disable(gl.BLEND);
			} else {
				gl.blendFunc(Rex.Material.blend_functions[this.blend_src], Rex.Material.blend_functions[this.blend_dest]);
				gl.enable(gl.BLEND);
			}
			Rex.Material.blend_src = this.blend_src;
			Rex.Material.blend_dest = this.blend_dest;
		}
		
		// depth function
		if(Rex.Material.depth_func !== this.depth_func) {
			if(this.depth_func === Rex.DepthNone) {
				gl.depthFunc(gl.ALWAYS);
				gl.disable(gl.DEPTH_TEST);
			} else {
				gl.depthFunc(Rex.Material.depth_functions[this.depth_func]);
				gl.enable(gl.DEPTH_TEST);
			}
			Rex.Material.depth_func = this.depth_func;
		}
		
		// stencil function
		if(Rex.Material.stencil_func !== this.stencil_func || Rex.Material.stencil_ref !== this.stencil_ref) {
			if(this.stencil_func === Rex.StencilNone) {
				gl.stencilFunc(gl.ALWAYS, 0, 0xff);
				gl.disable(gl.STENCIL_TEST);
			} else {
				gl.stencilFunc(Rex.Material.stencil_functions[this.stencil_func], this.stencil_ref, 0xff);
				gl.enable(gl.STENCIL_TEST);
			}
			Rex.Material.stencil_func = this.stencil_func;
			Rex.Material.stencil_ref = this.stencil_ref;
		}
		
		// stencil operation
		if(Rex.Material.stencil_fail !== this.stencil_fail || Rex.Material.stencil_zfail !== this.stencil_zfail || Rex.Material.stencil_zpass !== this.stencil_zpass) {
			gl.stencilOp(Rex.Material.stencil_operations[this.stencil_fail], Rex.Material.stencil_operations[this.stencil_zfail], Rex.Material.stencil_operations[this.stencil_zpass]);
			Rex.Material.stencil_fail = this.stencil_fail;
			Rex.Material.stencil_zfail = this.stencil_zfail;
			Rex.Material.stencil_zpass = this.stencil_zpass;
		}
		
		// polygon offset
		if(Rex.Material.polygon_factor !== this.polygon_factor || Rex.Material.polygon_units !== this.polygon_units) {
			if(this.polygon_factor === 0 && this.polygon_units === 0) {
				gl.polygonOffset(0, 0);
				gl.disable(gl.POLYGON_OFFSET_FILL);
			} else {
				gl.polygonOffset(this.polygon_factor, this.polygon_units);
				gl.enable(gl.POLYGON_OFFSET_FILL);
			}
			Rex.Material.polygon_factor = this.polygon_factor;
			Rex.Material.polygon_units = this.polygon_units;
		}
		
		// cull face
		if(Rex.Material.cull_face !== this.cull_face) {
			if(this.cull_face === Rex.FaceNone) {
				gl.cullFace(gl.BACK);
				gl.disable(gl.CULL_FACE);
			} else {
				gl.cullFace(Rex.Material.cull_faces[this.cull_face]);
				gl.enable(gl.CULL_FACE);
			}
			Rex.Material.cull_face = this.cull_face;
		}
		
		// bind program
		var program = this.program;
		gl.useProgram(program);
		
		// scene projection matrix
		if(this.projection === undefined) this.projection = gl.getUniformLocation(program, "rex_projection");
		if(this.projection !== null) gl.uniformMatrix4fv(this.projection, false, Rex.render.getProjection().m);
		
		// scene modelview matrix
		if(this.modelview === undefined) this.modelview = gl.getUniformLocation(program, "rex_modelview");
		if(this.modelview !== null) gl.uniformMatrix4fv(this.modelview, false, Rex.render.getModelview().m);
		
		// scene camera position
		var camera = Rex.render.getCamera();
		if(this.camera === undefined) this.camera = gl.getUniformLocation(program, "rex_camera");
		if(this.camera !== null) gl.uniform3f(this.camera, camera.x, camera.y, camera.z);
		
		if(this.viewport === undefined) this.viewport = gl.getUniformLocation(program, "rex_viewport");
		if(this.viewport !== null) gl.uniform4f(this.viewport, Rex.render.width, Rex.render.height, 1.0 / Rex.render.width, 1.0 / Rex.render.height);
		
		// scene shader parameters
		Rex.Parameter.bindArray(program, Rex.scene.parameters);
		
		// material shader parameters
		Rex.Parameter.bindArray(program, this.parameters);
		
		// material textures
		Rex.Texture.bindArray(this.textures);
		
		return true;
	}
	
}

// Rex header

Rex.Mesh = {};

/**
 * Globals
 */
Rex.Mesh.material = null;
Rex.Mesh.geometry = null;

/**
 * Begin/end mesh rendering
 */
Rex.Mesh.begin = function() {
	Rex.Mesh.material = null;
	Rex.Mesh.geometry = null;
	Rex.Texture.units = [];
};

Rex.Mesh.end = function() {
	if(Rex.Mesh.geometry !== null) {
		Rex.Mesh.geometry.unbind();
	}
	Rex.Mesh.begin();
};

/**
 * Mesh
 * @constructor
 */

class Mesh extends RexObject {
	
	constructor(state) {
		super();
		this.enabled = true;
		this.order = 0;
		
		this.geometry = undefined;
		this.material = undefined;
		
		this.index_begin = 0;
		this.index_end = 0;
		
		this.distance_begin = 0;
		this.distance_end = 0;
		
		this.transform = new Rex.Matrix4();
		
		this.parameters = [];
		this.textures = [];
		
		if(state !== undefined) Rex.copy(this, state);
		if(Rex.render == null) {
			Rex.render = new Render();
			Rex.render.render();
		}
	}
	
	onCheckInit() {
		if(Rex.geometries[this.geometry] == null) return false;
		if(Rex.materials[this.material] == null) return false;
		return true;
	}
	
	onSuccessInit() {
		this.geometry = Rex.geometries[this.geometry];
		this.material = Rex.materials[this.material];
	}
	
	setEnabled(enabled) {
		this.enabled = enabled;
	}
	
	setOrder(order) {
		this.order = order;
	}
	
	setMaterial(material) {
		this.material = material;
	}
	
	setGeometry(geometry) {
		this.geometry = geometry;
	}
	
	setIndexRange(begin, end) {
		this.index_begin = begin;
		this.index_end = end;
	}
	
	setDistanceRange(begin, end) {
		this.distance_begin = begin;
		this.distance_end = end;
	}
	
	setTransform(transform) {
		this.transform = transform;
	}
	
	setParameters(parameters) {
		this.parameters = parameters;
	}
	
	setTextures(textures) {
		this.textures = textures;
	}
	
	setState(state) {
		Rex.copy(this, state);
		if(state.geometry != null || state.material != null) {
			this.inited = false;
			this.checkInit();
		}
	}
	
	/// check visibility
	inside(viewport) {
		if(this.geometry == null) return false;
		// check geometry
		//Пока закомментирую, если уже точно нигде не выстрелит. То можно убрать это.
		//if(!(this.geometry instanceof Geometry)) {
		//	this.geometry = Rex.getGeometry(this.geometry);
		//	if(!(this.geometry instanceof Geometry)) return false;
		//}
		
		// transform bound sphere
		var scale = this.transform.getScale();
		var bound_center = this.transform.mulVector3(this.geometry.bound_center);
		var bound_radius = this.geometry.bound_radius * Math.max(scale.x, scale.y, scale.z);
		
		// check distance
		var distance = bound_center.sub(viewport.camera).length();
		if(distance <= this.distance_begin) return false;
		if(distance > this.distance_end) return false;
		
		// check viewport visibility
		return viewport.insideSphere(bound_center, bound_radius);
	}
	
	/// bind mesh
	bind() {
		var gl = Rex.render.gl;
		
		// bind material
		//Пока закомментирую, если уже точно нигде не выстрелит. То можно убрать это.
		//if(!(this.material instanceof Material)) {
		//	this.material = Rex.getMaterial(this.material);
		//	if(!(this.material instanceof Material)) return false;
		//}
		if(Rex.Mesh.material !== this.material) {
			if(!this.material.bind()) {
				Rex.Mesh.material = null;
				return false;
			}
			Rex.Mesh.material = this.material;
		}
		
		// bind geometry
		//Пока закомментирую, если уже точно нигде не выстрелит. То можно убрать это.
		//if(!(this.geometry instanceof Geometry)) {
		//	this.geometry = Rex.getGeometry(this.geometry);
		//	if(!(this.geometry instanceof Geometry)) return false;
		//}
		if(Rex.Mesh.geometry !== this.geometry) {
			if(Rex.Mesh.geometry !== null) {
				Rex.Mesh.geometry.unbind();
				Rex.Mesh.geometry = null;
			}
			if(!this.geometry.bind()) {
				Rex.Mesh.geometry = null;
				return false;
			}
			Rex.Mesh.geometry = this.geometry;
		}
		
		// mesh transformation matrix
		var program = this.material.program;
		var transform = gl.getUniformLocation(program, "rex_transform");
		if(transform !== null) gl.uniformMatrix4fv(transform, false, this.transform.m);
		
		// mesh shader parameters
		Rex.Parameter.bindArray(program, this.parameters);
		
		// mesh textures
		Rex.Texture.bindArray(this.textures);
		
		return true;
	}
	
	/// draw mesh
	draw() {
		
		var gl = Rex.render.gl;
		
		// check mesh
		//Пока закомментирую, если уже точно нигде не выстрелит. То можно убрать это.
		//if(!(this.material instanceof Rex.Material)) return false;
		//if(!(this.geometry instanceof Rex.Geometry)) return false;
		
		// get WebGL draw modes
		if(Rex.Mesh.draw_modes === undefined) {
			Rex.Mesh.draw_modes = [
				gl.POINTS,
				gl.LINE_STRIP,
				gl.LINE_LOOP,
				gl.LINES,
				gl.TRIANGLE_STRIP,
				gl.TRIANGLE_FAN,
				gl.TRIANGLES
			];
		}
		
		// draw parameters
		var type = undefined;
		var count = undefined;
		var offset = undefined;
		var index_format = this.geometry.layout.index_format;
		var size = this.geometry.index_buffer.data.length;
		if(index_format === Rex.FormatUInt8x1) {
			type = gl.UNSIGNED_BYTE;
			offset = this.index_begin;
			count = size;
		} else if(index_format === Rex.FormatUInt16x1) {
			type = gl.UNSIGNED_SHORT;
			offset = this.index_begin * 2;
			count = size / 2;
		} else if(index_format === Rex.FormatUInt32x1) {
			type = gl.UNSIGNED_INT;
			offset = this.index_begin * 4;
			count = size / 4;
		}
		
		// draw mesh
		var mode = Rex.Mesh.draw_modes[this.material.draw_mode];
		if(this.index_end !== 0) count = this.index_end - this.index_begin;
		gl.drawElements(mode, count, type, offset);
	}
	
}

// Rex header

Rex.Parameter = {};

/**
 * Bind array of parameters
 */
Rex.Parameter.bindArray = function(program, parameters) {
	for(var i = 0; i < parameters.length; i++) {
		if(!(parameters[i] instanceof Parameter)) parameters[i] = Rex.parameters[parameters[i]];
		if(parameters[i] instanceof Parameter) parameters[i].bind(program);
	}
};

/**
 * Parameter
 * @constructor
 */
class Parameter extends RexObject {
	
	constructor(state) {
		super();
		this.name = '';
		this.format = Rex.FormatUnknown;
		
		this.buffer = undefined;
		
		if(state !== undefined) Rex.copy(this, state);
		if(Rex.render == null) {
			Rex.render = new Render();
			Rex.render.render();
		}
	}
	
	onSuccessInit() {
		this.buffer = Rex.buffers[this.buffer];
	}
	
	setName(name) {
		this.name = name;
	}
	
	setFormat(format) {
		this.format = format;
	}
	
	setBuffer(buffer) {
		this.buffer = buffer;
	}
	
	setState(state) {
		Rex.copy(this, state);
		if(state.buffer != null) {
			this.inited = false;
			this.checkInit();
		}
	}
	
	/// bind parameter
	bind(program) {
		
		var gl = Rex.render.gl;
		
		// buffer
		//Пока закомментирую, если уже точно нигде не выстрелит. То можно убрать это.
		//if(!(this.buffer instanceof Buffer)) {
		//	this.buffer = Rex.getBuffer(this.buffer);
		//	if(!(this.buffer instanceof Buffer)) return false;
		//}
		
		// find parameter
		var index = gl.getUniformLocation(program, this.name);
		if(index === null) return false;
		
		// bind parameter
		return this.buffer.bindUniform(index, this.format);
	}
	
}

// Rex header

/**
 * Viewport
 * @constructor
 */

class Viewport {
	
	constructor() {
		this.projection = new Rex.Matrix4();
		this.modelview = new Rex.Matrix4();
		this.camera = new Rex.Vector3();
		
		this.plane_l = new Rex.Vector4();
		this.plane_r = new Rex.Vector4();
		this.plane_b = new Rex.Vector4();
		this.plane_t = new Rex.Vector4();
		this.plane_n = new Rex.Vector4();
		this.plane_f = new Rex.Vector4();
	}
	
	set(aspect, projection, modelview) {
		
		// projection matrix
		this.projection.copy(projection.m);
		this.projection.m[0] /= aspect;
		
		// modelview matrix
		this.modelview.copy(modelview.m);
		
		// camera position
		this.camera = modelview.getInverse43().getTranslate();
		
		// modelview projection matrix
		var mvp = this.projection.mul(modelview);
		var m = mvp.m;
		
		// extract viewport cliping planes
		this.plane_l.set(m[3] + m[0], m[7] + m[4], m[11] + m[8], m[15] + m[12]);
		this.plane_r.set(m[3] - m[0], m[7] - m[4], m[11] - m[8], m[15] - m[12]);
		this.plane_b.set(m[3] + m[1], m[7] + m[5], m[11] + m[9], m[15] + m[13]);
		this.plane_t.set(m[3] - m[1], m[7] - m[5], m[11] - m[9], m[15] - m[13]);
		this.plane_n.set(m[3] + m[2], m[7] + m[6], m[11] + m[10], m[15] + m[14]);
		this.plane_f.set(m[3] - m[2], m[7] - m[6], m[11] - m[10], m[15] - m[14]);
		this.plane_l.scale(1 / this.plane_l.length3());
		this.plane_r.scale(1 / this.plane_r.length3());
		this.plane_b.scale(1 / this.plane_b.length3());
		this.plane_t.scale(1 / this.plane_t.length3());
		this.plane_n.scale(1 / this.plane_n.length3());
		this.plane_f.scale(1 / this.plane_f.length3());
	}
	
	insideSphere(center, radius) {
		if(this.plane_l.dot3(center) < -radius) return false;
		if(this.plane_r.dot3(center) < -radius) return false;
		if(this.plane_b.dot3(center) < -radius) return false;
		if(this.plane_t.dot3(center) < -radius) return false;
		if(this.plane_n.dot3(center) < -radius) return false;
		if(this.plane_f.dot3(center) < -radius) return false;
		return true;
	}
	
}

// Rex header

/**
 * Render
 * @constructor
 * @param {*=} attributes
 * @param {*=} overlay
 * @param {*=} canvas
 */
class Render {
	
	constructor(canvas, overlay, tempCanvas, attributes) {
		console.clear();
		if(Rex.container != null) document.body.insertBefore(Rex.container, document.getElementById("container1"));
		// WebGL canvas
		if(canvas !== undefined) this.canvas = canvas;
		else this.canvas = document.getElementById("canvas");
		
		// 2d context canvas
		if(overlay !== undefined) this.overlay = overlay;
		else this.overlay = document.getElementById("overlay");
		
		if(tempCanvas !== undefined) this.tempCanvas = tempCanvas;
		else this.tempCanvas = document.getElementById("tempCanvas");
		
		// WebGL attributes
		if(attributes === undefined) attributes = {
			alpha : true, depth : true,
			stencil : true, antialias : true,
			premultipliedAlpha : true,
			preserveDrawingBuffer : false
		};
		
		try {
			this.gl = this.canvas.getContext("webgl", attributes) || this.canvas.getContext("experimental-webgl", attributes);
			if(this.overlay !== null) this.ctx = this.overlay.getContext("2d");
			if(this.tempCanvas !== null) this.ctxTemp = this.tempCanvas.getContext("2d");
		}
		catch(error) {
			Rex.error("Rex.Render(): " + error);
			alert("Can't initialize WebGL");
			this.gl = null;
			this.ctx = null;
			this.ctxTemp = null;
			return;
		}
		
		// list of extensions
		this.extensions = this.gl.getSupportedExtensions();
		for(var i = 0; i < this.extensions.length; i++) {
			Rex.message(this.extensions[i]);
		}
		
		// enable extensions
		this.OES_texture_float = this.gl.getExtension("OES_texture_float");
		this.OES_texture_half_float = this.gl.getExtension("OES_texture_half_float");
		this.OES_element_index_uint = this.gl.getExtension("OES_element_index_uint");
		this.OES_vertex_half_float = this.gl.getExtension("OES_vertex_half_float");
		this.OES_vertex_array_object = this.gl.getExtension("OES_vertex_array_object");
		this.OES_standard_derivatives = this.gl.getExtension("OES_standard_derivatives");
		this.EXT_texture_filter_anisotropic = this.gl.getExtension("EXT_texture_filter_anisotropic");
		this.ANGLE_instanced_arrays = this.gl.getExtension("ANGLE_instanced_arrays");
		
		// FPS counter
		this.time = Date.now();
		this.fps = 0;
		
		// render viewport
		this.viewport = new Viewport();
		
		// viewport size
		this.width = undefined;
		this.height = undefined;
		this.request = undefined;
		//this.ratio = 1;
	}
	
	setViewport(aspect, projection, modelview) {
		this.viewport.set(aspect, projection, modelview);
	}
	
	getProjection() {
		return this.viewport.projection;
	}
	
	getModelview() {
		return this.viewport.modelview;
	}
	
	getCamera() {
		return this.viewport.camera;
	}
	
	update() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		if(this.canvas.width !== this.width || this.canvas.height !== this.height) {
			this.canvas.width = this.width;
			this.canvas.height = this.height;
			if(this.overlay !== null) {
				this.overlay.width = this.width;
				this.overlay.height = this.height;
				if(Rex.gui != undefined) Rex.gui.redraw();
				if(Rex.gui != undefined) Rex.gui.repositionAll();
			}
			if(this.tempCanvas !== null) {
				this.tempCanvas.width = this.width;
				this.tempCanvas.height = this.height;
			}
		}
		
		// update FPS
		var time = Date.now();
		this.fps = this.fps * 0.9 + 100 / (time - this.time);
		this.time = time;
		if(Rex.camera !== undefined) Rex.camera.update();
	}
	
	timeout(time) {
		return time - (Date.now() - this.time);
	}
	
	stop() {
		this.ctx.clearRect(0, 0, canvas.width, canvas.height);
		Rex.render.gl.clearColor(Rex.scene.background.x, Rex.scene.background.y, Rex.scene.background.z, Rex.scene.background.w);
		Rex.render.gl.clear(Rex.render.gl.COLOR_BUFFER_BIT | Rex.render.gl.DEPTH_BUFFER_BIT | Rex.render.gl.STENCIL_BUFFER_BIT);
		cancelAnimationFrame(this.request);
		let container = document.getElementsByClassName("container")[0];
		Rex.container = container.cloneNode(true);
		document.body.removeChild(container);
	}
	
	render(time) {
		// default arguments
		time = time || 1000 / Rex.FPS;
		var camera = Rex.camera;
		var render = Rex.render;
		var scene = Rex.scene;
		var gl = render.gl;
		
		// update render
		this.update();
		
		// update viewport
		var aspect = this.width / this.height;
		if(camera === undefined) {
			this.request = window.requestAnimationFrame(function() { this.render(time); }.bind(this));
			return;
		}
		
		this.setViewport(aspect, camera.getProjection(), camera.getModelview());

		// resize viewport
		gl.viewport(0, 0, this.width, this.height);

		// clear background
		if(!scene.customBackground) {
			let color = new Color();
			color.fromString(Rex.gui.styleLibrary.getParam("Scene", "backgroundColor", "rgba(255,0,0,0.3)"));
			scene.background.x = color.r / 255;
			scene.background.y = color.g / 255;
			scene.background.z = color.b / 255;
			scene.background.w = color.a / 255;
		}
		gl.clearColor(scene.background.x, scene.background.y, scene.background.z, scene.background.w);

		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
		
		// get meshes
		var meshes = [];
		for(var key in Rex.meshes) {
			meshes.push(Rex.meshes[key]);
		}
		
		// render meshes
		Rex.Mesh.begin();
		Rex.Material.begin();
		for(var i = 0; i < meshes.length; i++) {
			if(!meshes[i].inited) continue;
			if(!meshes[i].inside(render.viewport)) continue;
			if(!meshes[i].enabled) continue;
			if(!meshes[i].bind()) continue;
			meshes[i].draw();
		}
		Rex.Material.end();
		Rex.Mesh.end();
		
		// render labels
		if(this.ctx !== undefined) {
			if(Rex.gui !== undefined && Rex.gui.needRepositioning) {
				Rex.gui.positioning();
			}
			
			if(Rex.gui !== undefined && Rex.gui.needRedrawWidgets) {
				this.ctx.clearRect(0, 0, Rex.render.width, Rex.render.height);
				this.ctxTemp.clearRect(0, 0, Rex.render.width, Rex.render.height);
				// render widgets
				this.ctx.save();
				Rex.gui.draw(this.ctx, this.ctxTemp);
				this.ctx.restore();
				
				// render lines
				this.ctx.save();
				for (var key in Rex.lines) {
					Rex.lines[key].draw(this.ctx);
				}
				this.ctx.restore();
				
				// render labels
				this.ctx.save();
				for (var key in Rex.labels) {
					Rex.labels[key].draw(this.ctx);
				}
				this.ctx.restore();
				
				
				// render FPS
				this.ctx.save();
				this.ctx.textAlign = "end";
				this.ctx.fillStyle = "white";
				this.ctx.font = "24px arial";
				this.ctx.fillText("FPS: " + Math.floor(this.fps), this.width - 8, 24);
				this.ctx.restore();
			}
			
		}
		
		// next frame
		this.request = window.requestAnimationFrame(function() { this.render(time); }.bind(this));
	}
	
	/**
	 * The global stereo scene render function
	 * @param {number=} time Render interval
	 * @param {number=} offset Stereo offset
	 * @param {number=} radius Stereo radius
	 */
	stereoRender(radius, offset, time) {
		
		// default arguments
		radius = radius || 0.032;
		offset = offset || 0;
		time = time || 1000 / Rex.FPS;
		
		var camera = Rex.camera;
		var render = Rex.render;
		var scene = Rex.scene;
		var gl = render.gl;
		
		// update render
		this.update();
		
		// update viewport
		var aspect = this.width / this.height / 2;
		var projection = new Rex.Matrix4();
		
		// resize viewport
		gl.viewport(0, 0, this.width, this.height);
		
		// clear background
		if(this.ctx !== undefined) this.ctx.clearRect(0, 0, this.width, this.height);
		if(!scene.customBackground) {
			let color = new Color();
			color.fromString(Rex.gui.styleLibrary.getParam("Scene", "backgroundColor", "rgba(255,0,0,0.3)"));
			scene.background.x = color.r / 255;
			scene.background.y = color.g / 255;
			scene.background.z = color.b / 255;
			scene.background.w = color.a / 255;
		}
		gl.clearColor(scene.background.x, scene.background.y, scene.background.z, scene.background.w);
		gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
		
		// get meshes
		var meshes = [];
		for(var key in Rex.meshes) {
			meshes.push(Rex.meshes[key]);
		}
		
		// left eye
		projection.copy(camera.getProjection().m);
		projection.m[8] += offset;
		this.setViewport(aspect, projection, Rex.Matrix4.translate(radius, 0, 0).mul(camera.getModelview()));
		gl.viewport(0, 0, this.width / 2, this.height);
		
		// render meshes
		Rex.Mesh.begin();
		Rex.Material.begin();
		for(var i = 0; i < meshes.length; i++) {
			if(!meshes[i].inside(render.viewport)) continue;
			if(!meshes[i].enabled) continue;
			if(!meshes[i].bind()) continue;
			meshes[i].draw();
		}
		Rex.Material.end();
		Rex.Mesh.end();
		
		// right eye
		projection.copy(camera.getProjection().m);
		projection.m[8] -= offset;
		this.setViewport(aspect, projection, Rex.Matrix4.translate(-radius, 0, 0).mul(camera.getModelview()));
		gl.viewport(this.width / 2, 0, this.width / 2, this.height);
		
		// render meshes
		Rex.Mesh.begin();
		Rex.Material.begin();
		for(var i = 0; i < meshes.length; i++) {
			if(!meshes[i].inside(render.viewport)) continue;
			if(!meshes[i].enabled) continue;
			if(!meshes[i].bind()) continue;
			meshes[i].draw();
		}
		Rex.Material.end();
		Rex.Mesh.end();
		
		// next frame
		setTimeout(function() { this.stereoRender(radius, offset, time); }.bind(this), this.timeout(time));
	}
	
};

// Rex header

Rex.Texture = {};

/**
 * Globals
 */
Rex.Texture.units = [];

/**
 * Bind array of textures
 */
Rex.Texture.bindArray = function(textures) {
	for(var i = 0; i < textures.length; i++) {
		if(!(textures[i] instanceof Texture)) textures[i] = Rex.textures[textures[i]];
		if(textures[i] instanceof Texture) textures[i].bind();
	}
};

/**
 * Texture
 * @constructor
 */

class Texture extends RexObject {
	
	constructor(state) {
		super();
		this.unit = 0;
		this.data = '';
		
		this.format = Rex.TextureFormatRGBA;
		this.filter = Rex.TextureFilterBilinear;
		this.wrap = Rex.TextureWrapRepeat;
		
		this.image = undefined;
		this.texture = undefined;
		
		if(state !== undefined) Rex.copy(this, state);
		if(Rex.render == null) {
			Rex.render = new Render();
			Rex.render.render();
		}
	}
	
	setUnit(unit) {
		this.unit = unit;
	}
	
	setFormat(format) {
		this.format = format;
	}
	
	setFilter(filter) {
		this.filter = filter;
	}
	
	setWrap(wrap) {
		this.wrap = wrap;
	}
	
	setState(state) {
		Rex.copy(this, state);
	}
	
	/// create texture
	create() {
		var gl = Rex.render.gl;
		
		// check texture
		if(this.image === null) return false;
		if(this.texture === null) return false;
		
		// save old texture
		var old_texture = Rex.Texture.units[0];
		
		// create texture
		gl.bindTexture(gl.TEXTURE_2D, this.texture);
		
		// select format
		if(this.format === Rex.TextureFormatAlpha) {
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.ALPHA, gl.ALPHA, gl.UNSIGNED_BYTE, this.image);
		} else if(this.format === Rex.TextureFormatLuminance) {
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE, gl.LUMINANCE, gl.UNSIGNED_BYTE, this.image);
		} else if(this.format === Rex.TextureFormatLuminanceAlpha) {
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.LUMINANCE_ALPHA, gl.LUMINANCE_ALPHA, gl.UNSIGNED_BYTE, this.image);
		} else if(this.format === Rex.TextureFormatRGB) {
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, this.image);
		} else if(this.format === Rex.TextureFormatRGBA) {
			gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.image);
		} else {
			Rex.error("Rex.Texture.create(): unknown texture format: " + this.format);
		}
		
		// select filter
		if(this.filter === Rex.TextureFilterPoint) {
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		} else if(this.filter === Rex.TextureFilterLinear) {
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
		} else if(this.filter === Rex.TextureFilterBilinear) {
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			gl.generateMipmap(gl.TEXTURE_2D);
		} else if(this.filter === Rex.TextureFilterTrilinear) {
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
			gl.generateMipmap(gl.TEXTURE_2D);
		} else {
			Rex.error("Rex.Texture.create(): unknown texture filter: " + this.filter);
		}
		
		// select wrap
		if(this.wrap === Rex.TextureWrapRepeat) {
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
		} else if(this.wrap === Rex.TextureWrapClamp) {
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
			gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		} else {
			Rex.error("Rex.Texture.create(): unknown texture wrap: " + this.wrap);
		}
		
		// restore old texture
		if(!(old_texture instanceof Texture)) gl.bindTexture(gl.TEXTURE_2D, null);
		else gl.bindTexture(gl.TEXTURE_2D, old_texture.texture);
	}
	
	/// bind texture
	bind(program) {
		
		var gl = Rex.render.gl;
		
		// check texture
		if(this.texture === null) return false;
		
		// create texture
		if(this.texture === undefined) {
			this.texture = gl.createTexture();
			this.image = new Image();
			this.image.onload = () => {
				this.create();
			};
			this.image.src = this.data;
		}
		
		// get WebGL texture units
		if(Rex.Texture.active_textures === undefined) {
			Rex.Texture.active_textures = [
				gl.TEXTURE0,
				gl.TEXTURE1,
				gl.TEXTURE2,
				gl.TEXTURE3,
				gl.TEXTURE4,
				gl.TEXTURE5,
				gl.TEXTURE6,
				gl.TEXTURE7
			];
		}
		
		// bind texture
		if(Rex.Texture.units[this.unit] !== this.texture) {
			Rex.Texture.units[this.unit] = this.texture;
			gl.activeTexture(Rex.Texture.active_textures[this.unit]);
			gl.bindTexture(gl.TEXTURE_2D, this.texture);
			gl.activeTexture(gl.TEXTURE0);
		}
		
		return true;
	}
	
}

// Rex header

/**
 * @param state
 * @constructor
 */
Rex.Image = class RexImage extends RexObject {
	
	constructor(state) {
		super();
		this.image = undefined;
		this.data = '';
		if(state !== undefined) this.setState(state);
	}
	
	setState(state) {
		if(state != null && state.clean != null) {
			delete this.image;
			this.image = undefined;
			this.data = undefined;
		}

		let oldData = this.data;
		Rex.copy(this, state);
		if(oldData != this.data) {
			delete this.image;
			if(this.data.length == 0) {
				this.image = undefined;
			} else {
				this.image = new Image();
				this.image.src = this.data;
			}
		}
	}
	
};


/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* global RexObject Rex Render WidgetViewCanvas WidgetViewHtml*/

let debugFocus = true;

class Widget extends RexObject {
	
	constructor(state) {
		super();
		this.id = -1;
		
		this._visible = true;
		this.editable = false;
		this.draggable = false;
		this.dragImage = null;
		//add to test by smag 27.05.19
		this._dropable = false;

		this.styleToChildren = false;
		this.styleName = "";
		
		this._posX = -500;
		this._posY = -500;
		
		this._aposX = -500;
		this._aposY = -500;
		
		this._width = 20;
		this._height = 20;
		
		this.minWidth = 0;
		this.minHeight = 0;
		
		this.maxWidth = 0;
		this.maxHeight = 0;
		
		this.marginLeft = 0;
		this.marginRight = 0;
		this.marginTop = 0;
		this.marginBottom = 0;
		
		this.paddingLeft = 0;
		this.paddingRight = 0;
		this.paddingTop = 0;
		this.paddingBottom = 0;
		
		this.children = [];
		
		this._order = -1;

		this._id = -1;
		
		this.transform = [];
		this.customStyle = {};
		
		this._backgroundColor =  null;
		this._textColor =  null;
		this._borderColor =  null;
		this._borderSize =  null;
		this._borderRadius =  null;
		this._borderType = null;
		
		this.fontFamily = null;
		this.fontSize = null;
		this.fontItalic = false;
		this.fontBold = false;
		this.textDecoration = null;
		this.textAlign = 2;
		this.iconName = null;
		this.activated = true;
		
		if(state.typeView !== undefined) {
			this.id = state.id;
			this.typeView = state.typeView;
			if((state.typeView === "canvas") && (Rex.render == null)) {
				Rex.render = new Render();
				Rex.render.render();
			}
			this.createView(); //абстрактный
		} else {
			console.error("твой стейт - гавно!");
		}
		this.setState(state);
	}
	
	setState(state) {
		if (state.dropable != undefined) this.dropable = state.dropable;
		this.view.setState(state);
	}
	
	createView() {
		if(this.typeView === "canvas") {
			this.view = new WidgetViewCanvas(this);
		} else if(this.typeView === "html") {
			this.view = new WidgetViewHtml(this);
		}
	}
	
	onSuccessInit() {
		this.view.init();
	}

	// Every widget is represented as table in pdf document
	// Because table has more styles then any other dd-object in this lib
	// Read the documentation here https://pdfmake.github.io/docs/

	// the argument should be an array
	generateContent(content, docData) {
		if (this.visible === false)
			return;

		//widget content
		let widgetTable = {
			// Widget width, if widget is a container, then this array contains width values of each child widget
			widths: [],
			// Widget height, if widget is a container, then this array contains height values of each child widget
			heights: [],
			// This array contains object data of this widget, and it serves as container for children data
			body: []
		};

		// This object may be useful, if you need to add style, whose value can be a function
		// Only tables can have a layout object

		let pLeft = parseInt(getStyle(this.view.htmlElement, 'padding-left'));
		pLeft = isNaN(pLeft) ? 0 : pLeft;
		let pRight = parseInt(getStyle(this.view.htmlElement, 'padding-right'));
		pRight = isNaN(pRight) ? 0 : pRight;
		let pTop = parseInt(getStyle(this.view.htmlElement, 'padding-top'));
		pTop = isNaN(pTop) ? 0 : pTop;
		let pBottom = parseInt(getStyle(this.view.htmlElement, 'padding-bottom'));
		pBottom = isNaN(pBottom) ? 0 : pBottom;

		let widgetLayout = {
			//set all padding values to 0
			paddingLeft: function(i, node) {
				 if (i == 0)
					return pLeft;
				return 0;
			},
			paddingRight: function(i, node) {
				if (i == node.table.body.length - 1)
					return pRight;
				return 0;
			},
			paddingTop: function(i, node) {
				if (i == 0)
					return pTop;
				return 0;
			},
			paddingBottom: function(i, node) {
				if (i == node.table.body.length - 1)
					return pBottom;
				return 0;
			}

			// Another styles:
			// vLineColor: function(i, node) {} - set color value to vertical lines.
			// hLineColor: function(i, node) {} - set color value to horizontal lines. 
			// Functions above must return a string value. Example: 'red', '#000000'

			// vLineWidth: function(i, node) {} - set width value to vertical lines. 
			// hLineWidth: function(i, node) {} - set width value to horizontal lines.
			// Functions above must return a numeric value. Example: 1, 2, 3, ... , n

			// vLineStyle: function(i, node) {} - set some style object to vertical lines. 
			// hLineStyle: function(i, node) {} - set some style object to horizontal lines. 
			// Functions above must return an object value.
			// Example: an object like this '{dash: {length: 6, space: 4}}' makes all table lines dashed

			// fillColor: function(rowIndex, node, columnIndex)
			// Function above must return a string value as LineColor functions
		};

		generateBorder(widgetLayout, this.view.htmlElement);

		let thisContent =
		{
			table: widgetTable,
			layout: widgetLayout,
			margin: [0, 0, 0, 0]
		};

		// const html = this.view.htmlElement;
		// const mLeft = parseInt(getStyle(html, 'margin-left'));
		// const mTop = parseInt(getStyle(html, 'margin-top'));
		// const mRight = parseInt(getStyle(html, 'margin-right'));
		// const mBottom = parseInt(getStyle(html, 'margin-bottom'));

		// thisContent.margin = [mLeft, mTop, mRight, mBottom];

		this.onGenerateContent(thisContent, docData)

		// let hMargin = (thisContent.margin[0] + thisContent.margin[2]) / thisContent.table.widths.length;
		// let vMargin = (thisContent.margin[1] + thisContent.margin[3]) / thisContent.table.heights.length;

		// if (hMargin === 0 && vMargin === 0)

		// for (let i = 0; i < thisContent.table.widths.length; ++i) {
		// 	thisContent.table.widths[i] -= hMargin;
		// }

		// for (let i = 0; i < thisContent.table.heights.length; ++i) {
		// 	thisContent.table.heights[i] -= vMargin;
		// }

		content.push(thisContent)
	}

	// the argument should be an object
	onGenerateContent(content, docData) {
		const html = this.view.htmlElement;
		let table = content.table;

		let bWidth = parseInt(getStyle(html, 'borderWidth'))
		bWidth = isNaN(bWidth) ? 0 : bWidth;

		const size = this.view.htmlElement.getBoundingClientRect();

		table.widths.push(size.width - (bWidth * 2));
		table.heights.push(size.height - (bWidth * 2));

		table.body.push([
			{
				text: this.type + " doesn't support conversion to PDF",
				fontSize: 12,
				margin: [0, (size.height - (12 * 1.17)) / 2, 0, 0],
				alignment: 'center'
			}]);
	}

	set dropable (value){ 
		//с плюсов сеттим флаг 
		if (this._dropable == value) return; 
		
		this._dropable = value; 
		if (this.view == undefined || this.view.htmlElement == undefined){
			console.error("Error can't add drop handler");return;
		}

		if (value) 
			this.view.htmlElement.ondrop = e => {this.drop(e);};
		else 
			this.view.htmlElement.ondrop = null;
	} 

	set width(value) {
		if(value != this._width) {
			this._width = value;
		}
	}
	
	get width() {
		return  this._width;
	}
	
	set height(value) {
		if(value != this._height) {
			this._height = value;
		}
	}
	
	get height() {
		return this._height;
	}
	
	set visible(value) {
		if(value != this._visible) {
			this._visible = value;
			this.view.update();
		}
	}
	
	get visible() {
		return this._visible;
	}
	
	set order(value) {
		if(value != this._order) {
			Rex.gui.needResortWidgets = true;
			this._order = value;
		}
		return value;
	}
	
	get order() {
		return this._order;
	}
	
	setPosX(x) {
		if(Rex.compare(this.posX, Math.round(x), 1)) return;
		Rex.callRpcMethod("Widgets", this.id, this.type, "setPosX", [Math.round(x)]);
	}
	
	setPosY(y) {
		if(Rex.compare(this.posY, Math.round(y), 1)) return;
		Rex.callRpcMethod("Widgets", this.id, this.type, "setPosY", [Math.round(y)]);
	}
	
	updateAPos(){
		this._aposX = this.view.getAPosX();
		this._aposY = this.view.getAPosY();
		if (Rex.widgets === undefined) return;
		for (let key of this.children){
			let child = Rex.widgets[key];
			if (child == null) continue;
			child.updateAPos();
		}
	}
	
	get aPosX() {
		return this.view.getAPosX();
	}
	
	get aPosY() {
		return this.view.getAPosY();
	}
	
	get posX() {
		return this._posX;
	}
	
	set posX(value) {
		this._posX = value;
		//this._aposX = this.view.getAPosX();
	}
	
	get posY() {
		return this._posY;
	}
	
	set posY(value) {
		this._posY = value;
		//this._aposY = this.view.getAPosY();
	}
	
	setWidth(w) {
		if(Rex.compare(this.width, w, 1)) return;
		Rex.callRpcMethod("Widgets", this.id, this.type, "setWidth", [w]);
	}
	
	setHeight(h) {
		if(Rex.compare(this.height, h, 1)) return;
		Rex.callRpcMethod("Widgets", this.id, this.type, "setHeight", [h]);
	}
	
	setPos(x, y) {
		Rex.callRpcMethod("Widgets", this.id, "Widget", "setPos", [Math.round(x), Math.round(y)]);
		this.updateAPos();
	}
	
	setGeometry(x, y, width, height) {
		if(Rex.compare(this.posX, Math.round(x), 1) && Rex.compare(this.posY, Math.round(y), 1) && Rex.compare(this.width, Math.round(width), 1) && Rex.compare(this.height, Math.round(height), 1)) return;
		Rex.callRpcMethod("Widgets", this.id, "Widget", "setGeometry", [Math.round(x), Math.round(y), Math.round(width), Math.round(height)]);
	}
	
	isHovered() {
		if(this.id < 0) return false;
		return this.id == Rex.gui.hovered;
	}
	
	isFocused() {
		if(this.id < 0) return false;
		return this.id == Rex.gui.focused;
	}
	
	isSelected() {
		if(Rex.gui === undefined) return false;
		return Rex.gui.selectWidgets.indexOf(this.id) != -1;
	}
	
	setVisible(v) {
		if(this.visible == v) return;
		this.visible = v;
		for(let i = 0; i < this.children.length; ++i) {
			let child = Rex.widgets[this.children[i]];
			if(child !== undefined) child.setVisible(v);
		}
		Rex.callRpcMethod("Widgets", this.id, "Widget", "setVisible", [this.visible]);
	}
	
	isVisible() {
		return this.visible;
	}
	
	isEditable() {
		return this.editable;
	}
	
	getAngle() {
		return Math.acos(this.transform[0]) * (this.transform[1] > 0 ? 1 : -1);
	}
	
	isDraggable () {
		return this.draggable;
	}

	drag() {
		return {
				data : this.onDrag(),
				sender : this.id
			}
	}
	
	onDrag() {
		return this.view.onDrag();
	}
	
	drop(event) {
		console.log ("DROP IN WIDGET");
		let dropData = {};
		let cPos = translateVect(new Rex.Vector2(event.clientX, event.clientY));

		dropData.receiver = this.id;
		// dropData.pos = {x : Math.floor(cPos.x), y : Math.floor(cPos.y)};
		dropData.pos = {x : event.clientX, y : event.clientY};
		dropData.data = this.onDrop(event,cPos);
		
		Rex.gui.drop(dropData);
		this.onDrop(event, cPos);
	}


	
	onDrop(e,cPos) {
		return this.view.onDrop(event, cPos);
	}
	
	mouseDown(x, y, event) {
		this.onMouseDown(x, y, event);
	}
	
	mouseUp(x, y, event) {
		this.onMouseUp(x, y, event);
	}
	
	mouseMove(x, y, event) {
		this.onMouseMove(x, y, event);
	}
	
	mouseWheel(value) {
		this.onMouseWheel(value);
	}
	
	mouseDoubleClick(event) {
		Rex.callRpcMethod("Widgets", this.id, "Widget", "mouseDoubleClick", []);
		this.onMouseDoubleClick(event);
	}
	
	keyDown(event) {}
	
	keyPress(event) {}
	
	keyUp(event) {}
	
	copy(event) {}
	
	paste(event) {}
	
	cut(event) {}
	
	onMouseDown(x, y, event) {}
	
	onMouseUp(x, y, event) {}
	
	onMouseMove(x, y) {}
	
	onFocused(focused) {}
	
	onHovered(hovered) {}
	
	onSelected(value) {}
	
	onMouseDoubleClick(event) {
	
	}
	
	onMouseWheel(value) {
		let parent = Rex.widgets[this.parentId];
		if(parent !== undefined) parent.mouseWheel(value);
	}
	
};


/**
 * Created by prg-30 on 01.06.2017.
 */

class ClientConsole {
	constructor(){

		this.sockets = [];
		this.buffer = [];
		this.comandsBuffer = [];
		this.comCursor = 0;
		this.ctx = Rex.render.ctx;
		this.bgcolor = "rgba(0,85,0,0.7)";
		this.frcolor = "rgba(255, 255, 255, 0.8)";
		this.fmcolor = "rgba(255, 255, 150, 0.9)";
		this.font = "15px RobotoRegular";
		this.curSocket = undefined;
		this.height = 20 * 20;
		this.posY = -this.height;
		this._visible = false;
		//this.input = new ConsoleInput({flagUpdate : true, id:5464131698435, type : "WidgetInput", parentId : -1, text:"Command"});
		// this.input.height = 30/Rex.render.height;
		// this.input.width = 1;
		// this.input.posY = - this.input.height;
		// this.input.posX = 0;
		// this.input.drawer.setBackgroundParameters(this.bgcolor, 5);
		// this.input.drawer.setGradientParameters(this.bgcolor, "rgba(0, 50, 0, 0.2)", 0);
		//Rex.widgets[-666] = this.input;
		this.mov = false;

	}
	get commandCursor() {
		return this.comCursor;
	}

	set commandCursor(value) {
		if(value > this.comandsBuffer.length - 1) {
			this.comCursor = this.comandsBuffer.length-1;
			return
		}
		if(value < 0) {
			this.comCursor = 0;
			return;
		}
		this.comCursor = value;

	}

	get visible() {

		return this._visible;
	}

	set visible(value) {

		if(value == this._visible) return value;

		this._visible = value;

		if(value) {
			this.input.onFocused(true);
			this.fallIn()
		} else {
			this.input.onFocused(false);
			this.fallOut();
		}
		return value;
	}

	fallIn() {
		this.mov = true;
		this.posY = -this.height;
		for(let i = 0; i < 25; ++i) {
			setTimeout(function() {
				this.posY = this.posY + 15;
				if(i == 24) {
					this.mov =false;
					if(this.posY != 0 ) this.posY = 0;
				}
				Rex.gui.redraw();
			}.bind(this), 10 * i);
		}
	}

	fallOut() {
		this.mov = true;
		this.posY = 0;
		for(let i = 0; i < 30; ++i) {
			setTimeout(function() {
				this.posY = this.posY - 15;
				if(i == 29) {
					this.mov =false;
					if(this.posY != -this.height) this.posY = -this.height;
				}
				Rex.gui.redraw();
			}.bind(this), 10 * i);
		}
	}

	draw() {
		if(!this._visible && !this.mov) return;
		this.ctx.save();
		Rex.gui.updateFocused(this.input);
		this.ctx.fillStyle = this.bgcolor;
		this.ctx.fillRect(0, this.posY, Rex.render.width, this.height);
		this.ctx.fillStyle = this.frcolor;
		this.input.posY = (this.posY + this.height - this.input.height) / Rex.render.height ;
		this.input.draw(this.ctx, Rex.render.ctxTemp);
		this.ctx.font = this.font;
			for(let i = this.buffer.length -1; i >= 0; --i) {
				let y = this.posY + this.height - 15 - (this.buffer.length - i) * 15;
				if(y < -30) break;
					this.ctx.fillText(this.buffer[i], 25, y);
			}
		this.ctx.restore();
	}

	bufSend(message) {
		this.buffer.push(message);
		console.log()
	}

	send(message) {
		this.comandsBuffer.push(message);
		this.commandCursor = this.comandsBuffer.length - 1;
		if(this.curSocket == undefined) {
			this.bufSend("No connection");
			return;
		}
		this.curSocket.send(message);
		this.bufSend("Send:" + message);
	}

	handleWebSocket(event) {
		var parseData = JSON.parse(event.data);
		this.bufSend(event.data);
	};

	parseCommand(command){
		if(command[0] !== "/") {this.send(command); return};
		let i = 1;
		//command[0] = "";
		let comm = "";
		while(i < command.length && command[i] !== " ") {
			comm += command[i];
			++i;
		}
		let com = command.substr(1);
		if(comm == "connect") { try{ this.connect(com.substr(comm.length))} catch(err) {Rex.gui.notificationManager.message("Bad addres", "error")} };
		if(comm == "help") this.help();
		if(comm == "disconnect") this.disconnect();
		if(comm == "send") this.send(com.substr(comm.length));
	}

	help() {
		this.bufSend("/connect ws:/ / _adress:port --> connecting websocket");
		this.bufSend("/send -- >  sending on last connected websocket");
		this.bufSend("/disconnect  --> disconnecting all websocket");
	}
	onKeyDown(event) {
		if(!this._visible && event.which !=192) return false;
		let sys = false;
		switch(event.which){
			case 13 : this.parseCommand(this.input.text);
				this.input.text = "";
				this.input.str = "";
				sys = true;
				break;
			case 192 : if(event.ctrlKey) this.visible = !this._visible;
				sys = true;
				break;
			case 40 : this.input.text = (this.comandsBuffer[this.comCursor] != undefined) ? this.comandsBuffer[this.comCursor] : "commands history is empty";
				this.input.str = this.input.text;
				this.commandCursor++;
				break;
			case 38 : this.input.text = (this.comandsBuffer[this.comCursor] != undefined) ? this.comandsBuffer[this.comCursor] : "commands history is empty";
				this.input.str = this.input.text;
				this.commandCursor--;
				break;
		}
		if(!sys) {
			this.input.keyDown(event);
			Rex.gui.redraw();
		}
		return true;
	}

	onKeyPress(event) {

		if(!this._visible) return false;
		let sys = false;
		//switch(event.which){
		//	case 13 : this.parseCommand(this.input.text);
		//			this.input.text = "";
		//			this.input.str = "";
		//			sys = true;
		//		break;
		//	case 192 : if(event.ctrlKey) this.visible = !this._visible;
		//		sys = true;
		//		break;
		//}
		if(!sys) {
			this.input.keyPress(event);
			Rex.gui.redraw();
		}
		return true;

	}

	disconnect() {
		this.comandsBuffer.push("/disconnect");
		this.commandCursor = this.comandsBuffer.length - 1;
		for(let i = 0; i < this.sockets.length; ++i) {
			delete this.sockets[i];
		}
		this.sockets = [];
	}

	connect(address) {
		this.comandsBuffer.push("/connect" + address);
		this.commandCursor = this.comandsBuffer.length - 1;
		this.bufSend("Connect:" + address);
		let socket = new WebSocket(address);
		socket.onopen = function() {
			Rex.console.bufSend("Conected");
			//this.handleWebSocket(event);
			Rex.console.bufSend(event.data);

		};

		socket.onclose = function(event) {
			let even = JSON.parse(event);
			Rex.console.bufSend(even.name + " closed Conection");
			if(this == Rex.console.curSocket) Rex.console.curSocket = undefined;
		};

		socket.onmessage = function(event) {
			Rex.console.bufSend("response: " + event.data);
		};

		socket.onerror = function(event) {
			Rex.console.bufSend("Error: " + event.data);
		};

		this.curSocket = socket;

	}
}

class Hint {
	
	constructor(hint) {
		this.hint = hint || "";
		this.posX = 0;
		this.posY = 0;
		this.baseWidth = 300;
		this.height = 150;
		this.color = new Color(66, 66, 66, 190);
		this.fontcolor = new Color(255, 255, 255, 255);
		this.marginTop = 20;
		this.enable = false;
		this.linesText = [];
	}

	setPos(posX, posY) {
		this.posX = posX;
		this.posY = posY;
	}

	drawTriangle(ctx, x, y, lengthX, lengthY) {
		ctx.save();
		ctx.fillStyle = this.geometricFillColor;
		ctx.beginPath();
		ctx.moveTo(x, y);
		ctx.lineTo(x - lengthX / 2, y - lengthY);
		ctx.lineTo(x + lengthX / 2, y - lengthY);
		ctx.fill();
		ctx.restore();
	}

	drawRoundedBackground(ctx, x, y, w, h) {
		ctx.save();
		ctx.beginPath();
		let r = x + w;
		let b = y + h;
		ctx.moveTo(x + 6, y);
		ctx.lineTo(r - 6, y);
		ctx.quadraticCurveTo(r, y, r, y + 6);
		ctx.lineTo(r, y + h - 6);
		ctx.quadraticCurveTo(r, b, r - 6, b);
		ctx.lineTo(x + 6, b);
		ctx.quadraticCurveTo(x, b, x, b - 6);
		ctx.lineTo(x, y + 6);
		ctx.quadraticCurveTo(x, y, x + 6, y);
		ctx.fill();
		ctx.restore();
	}

	getHeightToText(context, text, width, lineHeight) {
		let lines = text.split("\\n");
		let count = 1;
		this.linesText = [];
		for (let i = 0; i < lines.length; ++i) {
			let words = lines[i].split(" ");
			let countWords = words.length;
			let line = "";
			for (let n = 0; n < countWords; n++) {
				let testLine = line + words[n] + " ";
				let testWidth = context.measureText(testLine).width;
				if (testWidth > width) {
					this.linesText[count - 1] = line;
					line = words[n] + " ";
					count++;
				}
				else {
					line = testLine;
				}
			}
			this.linesText[count - 1] = line;
			count++;
		}
		return lineHeight * count;

	}

	getWidthText(context) {
		let maxWidth = 0;
		for (let i = 0; i < this.linesText.length; ++i) {
			let widthLine = context.measureText(this.linesText[i]).width;
			if(widthLine > maxWidth) maxWidth = widthLine;
		}
		return maxWidth;
	}

	drawText(ctx, x, y, lineHeight) {
		for(let i = 0; i < this.linesText.length; ++i) {
			ctx.fillText(this.linesText[i], x || 0, y || 0);
			y += lineHeight || 0;
		}
	}

	draw(ctx, ctxTemp) {
		if(this.posX === 0 && this.posY === 0) return;
		if(this.hint === "" || this.hint === undefined) return;
		if(!this.enable) return;
		ctx.save();
		ctx.font = "12px Roboto";
		ctx.textAlign = "left";
		ctx.textBaseline = "middle";

		this.height = this.getHeightToText(ctx, this.hint, this.baseWidth - 15, this.marginTop);
		let maxWWW = this.getWidthText(ctx);

		if(maxWWW  < this.baseWidth) {
			this.width = maxWWW + 25;
		}
		else this.width = this.baseWidth;

		ctx.fillStyle = this.color.colorToString();
		if(this.posY - this.height - 11 > 0) {
			this.drawTriangle(ctx, this.posX, this.posY - 3, 8, 8);
			this.drawRoundedBackground(ctx, this.posX - 10, this.posY - this.height - 11, this.width, this.height);
			ctx.fillStyle = this.fontcolor.colorToString();
			this.drawText(ctx, this.posX - 5, this.posY - this.height - 11 + this.marginTop, this.marginTop);
		}
		else {
			this.drawTriangle(ctx, this.posX + 10, this.posY, 8, -8);
			this.drawRoundedBackground(ctx, this.posX - 10, this.posY + 8, this.width, this.height);
			ctx.fillStyle = this.fontcolor.colorToString();
			this.drawText(ctx, this.posX - 5, this.posY + 8 + this.marginTop, this.marginTop);
		}
		ctx.restore();
	}
	
}

//used WidgetWindow
class Resizer {
	
	constructor(widget) {
		
		this.resizeType = {
			none : 0,
			n : 1,		// n - (верх, центр),
			ne : 2,		// ne - (верхний правый угол),
			e : 3,		// e - (право),
			se : 4,		// se - (правый нижний угол),
			s : 5,		// s - (низ, центр),
			sw : 6,		// sw - (левый нижний угол),
			w : 7,		// w - (лево),
			nw : 8		// nw - (левый верхний угол)
		};
		this.widget = widget;
		this.needResize = true;
		this.resize = this.resizeType.none;
		this.startResizePos = new Rex.Vector2(0, 0);
		this.startResize = new Rex.Vector2(0, 0);
		this.startMove = new Rex.Vector2(0, 0);
		
		this.cursorType = ["n-resize", "ne-resize", "e-resize", "se-resize", "s-resize", "sw-resize", "w-resize", "nw-resize", "default", "move"];
	}
	
	checkResize(mouseX, mouseY) {
		if(this.widget === undefined) return;
		if(this.needResize) return;
		
		// Погрешность определения границы стороны
		let errorLine = 20;
		let errorDiff = 10;
		let px = this.widget.aPosX;
		let py = this.widget.aPosY;
		let w = 0;
		let h = 0;
		if(this.widget.typeView == "canvas") {
			w = this.widget.width;
			h = this.widget.height;
		} else {
			w = this.widget.width;
			h = this.widget.height;
		}
		let mouse = new Rex.Vector2(mouseX, mouseY);
		let radius = 10;
		let shiftX = [w / 2, w, w, w, w / 2, 0, 0, 0];
		let shiftY = [0, 0, h / 2, h, h, h, h / 2 , 0];
		for(let i = 0; i < shiftX.length; ++i) {
			let distance = Rex.Vector2.distance(new Rex.Vector2(px + shiftX[i], py + shiftY[i]), mouse);
			if(distance < radius) {
				if (this.widget.view.htmlElement != null)	this.widget.view.htmlElement.style.cursor = this.cursorType[i];
				this.resize = i + 1;
				return;
			}
		}
		
		w += px;
		h += py;
		
		// Ресайз на краю сторон
		
		// TOP
		if((((px + errorLine) < mouseX) && (mouseX < (w - errorLine))) && (((py - errorDiff) < mouseY) && (mouseY < (py + errorDiff)))) {
			this.resize = 1;
			if (this.widget.view.htmlElement != null)	this.widget.view.htmlElement.style.cursor = this.cursorType[0];
			return;
		}
		
		// RIGHT
		if(((w - errorDiff < mouseX) && (mouseX < w + errorDiff)) && ((py + errorLine < mouseY) && (mouseY < h - errorLine))) {
			this.resize = 3;
			if (this.widget.view.htmlElement != null)	this.widget.view.htmlElement.style.cursor = this.cursorType[2];
			return;
		}
		
		// BOTTOM
		if(((px + errorLine < mouseX) && (mouseX < w - errorLine)) && ((h - errorDiff < mouseY) && (mouseY < h + errorDiff))) {
			this.resize = 5;
			if (this.widget.view.htmlElement != null)	this.widget.view.htmlElement.style.cursor = this.cursorType[4];
			return;
		}
		
		// LEFT
		if(((px - errorDiff < mouseX) && (mouseX < px + errorDiff)) && ((py + errorLine < mouseY) && (mouseY < h - errorLine))) {
			this.resize = 7;
			if (this.widget.view.htmlElement != null)	this.widget.view.htmlElement.style.cursor = this.cursorType[6];
			return;
		}
		
		if (this.widget.view.htmlElement != null)	this.widget.view.htmlElement.style.cursor = this.cursorType[8];
		this.resize = this.resizeType.none;
	}
	
	mouseMove(x ,y) {
		this.checkResize(x, y); 
		if(this.needResize) {
			let newPos = new Rex.Vector2(x, y);
			let delta = newPos.sub(this.startResizePos);
			let deltaSizeX = [0, delta.x, delta.x, delta.x, 0, -delta.x, -delta.x, -delta.x];
			let deltaSizeY = [-delta.y, -delta.y, 0, delta.y, delta.y, delta.y, 0, -delta.y];
			let deltaPosX = [
				this.startMove.x,
				this.startMove.x,
				this.startMove.x,
				this.startMove.x,
				this.startMove.x,
				this.startMove.x + delta.x,
				this.startMove.x + delta.x,
				this.startMove.x + delta.x
			];
			let deltaPosY = [
				this.startMove.y + delta.y,
				this.startMove.y + delta.y,
				this.startMove.y,
				this.startMove.y,
				this.startMove.y,
				this.startMove.y,
				this.startMove.y,
				this.startMove.y + delta.y
			];
			
			let minimumWidth = this.widget.minWidth;
			let minimumHeight = this.widget.minHeight;
			if(this.widget.minContentWidth !== undefined) {
				if(this.widget.minContentWidth > this.widget.minWidth){
					minimumWidth = this.widget.minContentWidth;
				}
			}
			if(this.widget.minContentHeight !== undefined) {
				if(this.widget.minContentHeight > this.widget.minHeight){
					minimumHeight = this.widget.minContentHeight;
				}
			}
			
			if(this.widget.typeView == "html" && this.resize != 0) this.widget.view.startMoving();
			
			for(let i = 0; i < deltaSizeX.length; ++i) {
				if(i + 1 != this.resize) continue;
				let posX = deltaPosX[i];
				let posY = deltaPosY[i];
				let width = this.startResize.x + deltaSizeX[i];
				let height = this.startResize.y + deltaSizeY[i];
				if (this.widget.view.htmlElement != null)	this.widget.view.htmlElement.style.cursor = this.cursorType[i];
				if(((minimumWidth) > width) || ((minimumHeight ) > height)) continue;
				this.widget.setPosX(posX);
				this.widget.setPosY(posY);
				if(this.widget.width != width && width > this.widget.paddingLeft + this.widget.paddingRight) this.widget.setWidth(width);
				if(this.widget.height != height && height > this.widget.paddingTop + this.widget.paddingBottom) this.widget.setHeight(height);
			}
			Rex.gui.redraw();
			if(Rex.gui === undefined) return;
			Rex.gui.reposition(this.widget);
		}
	}
	
	mouseDown(x, y) {
		if(this.resize != this.resizeType.none) {
			this.startResizePos.x = x;
			this.startResizePos.y = y;
			this.startResize.x = this.widget.width;
			this.startResize.y = this.widget.height;
			this.startMove.x = this.widget.posX;
			this.startMove.y = this.widget.posY;
			this.needResize = true;
			Rex.gui.needMove = false;
		}
	}
	
	mouseUp() {
		this.needResize = false;
		this.resize = this.resizeType.none;
	}
	
	draw(ctx, ctxTemp) {
		if(!this.needResize) return;
		let px = this.widget.posX;
		let py = this.widget.posY;
		let w = this.widget.width;
		let h = this.widget.height;
		ctx.strokeStyle = "rgb(100, 168, 209)";
		ctx.lineWidth = 1;
		ctx.beginPath();
		
		// Рисуем линии в зависимости от стороны ресайза
		switch (this.resize){
			case 1: {
				ctx.moveTo(px, py);
				ctx.lineTo(px + w, py);
				break;
			}
			case 3: {
				ctx.moveTo(px + w, py);
				ctx.lineTo(px + w, py + h);
				break;
			}
			case 5: {
				ctx.moveTo(px, py + h);
				ctx.lineTo(px + w, py + h);
				break;
			}
			case 7: {
				ctx.moveTo(px, py);
				ctx.lineTo(px, py + h);
				break;
			}
		}
		ctx.stroke();
		
		let radius = 5;
		let shiftX = [w / 2, w, w, w, w / 2, 0, 0, 0];
		let shiftY = [0, 0, h / 2, h, h, h, h / 2 , 0];
		for(let i = 0; i < shiftX.length; ++i) {
			if(i + 1 != this.resize) continue;
			if(this.resize == 0) continue;
			this.drawCircle(ctx, px + shiftX[i], py + shiftY[i], radius, "rgb(100, 168, 209)");
		}
	}
	
	drawCircle(ctx, x, y, radius, color) {
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fill();
	}
	
	onMake() {
		let childHtml = "";
		
		if(!this.needResize) return ``;
		let radius = 5;
		let px = this.widget.posX;
		let w = this.widget.width + this.widget.paddingLeft + this.widget.paddingRight;
		let h = this.widget.height + this.widget.paddingTop + this.widget.paddingBottom;
		
		let t = 0;
		let l = 0;
		let drW = 0;
		let drH = 0;
		let drawLine = false;
		// Рисуем линии в зависимости от стороны ресайза
		switch(this.resize) {
			case 1:
			{		//T
				drW = w;
				drawLine = true;
				break;
			}
			case 3:
			{		//R
				l = w - radius;
				drH = h;
				drawLine = true;
				
				break;
			}
			case 5:
			{		//B
				t = h - radius;
				drW = w;
				drawLine = true;
				
				break;
			}
			case 7:
			{		//L
				drH = h;
				drawLine = true;
				
				break;
			}
		}
		
		if(drawLine) {
			childHtml += `<div style="
								border: solid rgb(100, 168, 209) 1px;
								background: rgba(100, 168, 209, 0.5);
								top: 	${(t) + "px"};
								left: 	${(l) + "px"};
								width:	${(drW) + "px"};
								height:	${(drH) + "px"};
								position:absolute;
								"></div>`;
			
		}
		
		// Точки ресайза
		let shiftT = [0,		 0, 		h / 2, h, h, h, h / 2, 0];
		let shiftL = [w / 2,	 w, 		w, w, w / 2, 0, 0, 0	];
		for(let i = 0; i < shiftT.length; ++i) {
			if(i + 1 != this.resize) continue;
			if(this.resize == 0) continue;
			childHtml += `<div style="
									border: solid rgb(100, 168, 209) 1px;
									border-radius: ${(radius / 2) + "px"};
									background: rgba(100, 168, 209, 0.5);
									top: 	${(shiftT[i] - radius) + "px"};
									left: 	${(shiftL[i] - radius) + "px"};
									width:	${(radius) + "px"};
									height:	${(radius) + "px"};
									position:absolute;
									"></div>`;
			
		}
		
		return childHtml;
		
	}
	
}

/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* global Widget WidgetViewHtml Rex Color*/

class NotificationIdMessages {
	constructor() {
		this.messageId = 0;
	}

	getMessageId() {
		return "message" + this.messageId++;
	}
}

class Message {
	constructor(Data, type, manager) {
		this.data = Data;
		this.type = type;
		if(Rex.render != null) {
			this.ctx = Rex.render.ctx;
			this.canvas = Rex.render.overlay;
		}
		this.width = 300;
		this.height = 100;
		this.padding = new Rex.Vector2(25, 125);
		this.timeInterval = 0;
		this.manager = manager;
		this.color = (this.type == "error") ? new Color(150, 0, 0, 125) : (this.type == "info") ?  new Color(0, 150, 0, 125) : new Color(240, 200, 0, 125)  ;
		this.fontcolor = new Color(255, 255, 255, 255);

		this.htmlID = manager.messagesManager.getMessageId();
	}

	get htmlElement() {
		let html = document.getElementById(this.htmlID);
		return html != undefined ?  html : undefined;
	}

	draw(offset) {
		let paddingLeft = 25;
		let paddingRight = 25;
		let rightOffset = 25;

		let x = window.innerWidth - (this.width + this.padding.x);
		let y = window.innerHeight - this.padding.y - offset;

		if(this.htmlElement === undefined) {
			let temp = document.createElement("div");
			temp.id = this.htmlID;
			temp.className = "Message";
			temp.style.top = y + "px";
			temp.style.left = (x - paddingLeft - rightOffset) + "px";
			temp.style.width = (this.width + paddingRight + paddingLeft - rightOffset / 2) + "px";
			temp.style.height = this.height + "px";
			temp.style.background = this.color.colorToString();
			temp.style.color = this.fontcolor.colorToString();

			temp.innerText = this.data;
			console.log("MESSAGE:", this.data);

			let parent = document.body;
			parent.appendChild(temp);
			setTimeout(function() {
				let html = this.htmlElement;
				if(html !== undefined) this.htmlElement.remove();
			}.bind(this), 5000);
		} else {
			let temp = this.htmlElement;
			if(temp == undefined) return;
			temp.style.top = y + "px";
			temp.style.background = this.color.colorToString();
			temp.style.color = this.fontcolor.colorToString();
		}
	}

	runfade(){
		for(let i = 0; i < 10; ++i) {
			setTimeout(function() {
				this.clear();
			}.bind(this), 50 * i);
		}
	}

	clear() {
		if(this.color.a > 10) {
			this.color = this.color.getFaded(65);
			this.fontcolor = this.fontcolor.getFaded(65);
			if(Rex.gui !== undefined) Rex.gui.redraw();
			return;
		}
		if(this == this.manager.messages[0]) this.manager.messages.shift();
		if(Rex.gui !== undefined) Rex.gui.redraw();
	}
}

class NotificationManager  {
	
	constructor() {
		this.sleep = 1;
		this.interval = 10;
		this.messages = [];
		this.animOffset = 0;
		this.timeInterval = 0;
		this.messagesManager = new NotificationIdMessages();
	}

	animate(){
		if (this.animOffset > 0) {
			this.animOffset = this.animOffset - 1;
			Rex.gui.redraw();
			return;
		}
		Rex.gui.redraw();
	}
	
	message(data, type) {
		
		if(type == "system") {
			if(Rex.MEMUSAGE == null) Rex.MEMUSAGE = new MemoryUsageViewer();
			Rex.MEMUSAGE.addData(data);
			return;
		}
		
		if(type == "disableMessages") {
			this.disabledMessage = true;
		}

		if(type == "error" && data.indexOf("Code: 1006 Message:  Disconnect") != -1) {
			this.disconnectMessage();
		}
		
		if(this.disabledMessage) return;
		
		let decData;
		try {decData = decodeURIComponent(escape(window.atob(data)));}
		catch(e) {decData = data; /*console.log(this.type,"setState->", "DecodeError, but fucking dances!")*/};
		if(Rex.console) Rex.console.bufSend(type + ": " + decData);
		let newMess = new Message(decData, type, this);
		this.messages.push(newMess);
		this.animOffset = 120;
		setTimeout(function(){this.runfade()}.bind(newMess),3500);
		for(let i = 0; i<this.animOffset; ++i) {
			setTimeout(function() {
				this.animate()
			}.bind(this), this.sleep * i);
		}
		if(Rex.gui !== undefined) Rex.gui.redraw();
		sendNotification("Уведомление от сервера", {
			body: decData,
			dir: "auto"
		});
	}
	
	sendMessage() {
		for(let i = this.messages.length - 1; i >= 0; --i) {
			let offset = (this.messages[i].height + this.interval) * (this.messages.length -1 - i );
			this.messages[i].draw(offset - this.animOffset);
		}
	}

	disconnectMessage() {

		let disconnectContainer = document.createElement("div");
		disconnectContainer.classList.add("DisconnectContainer");
		
		let disconnectView = document.createElement("div");
		disconnectView.classList.add("DisconnectView");
		disconnectContainer.appendChild(disconnectView);

		let disconnectText = document.createElement("div");
		disconnectText.classList.add("DisconnectText");
		disconnectText.textContent = "Server Disconnected";
		disconnectView.appendChild(disconnectText);
		
		let closeDiscMessBtn = document.createElement("div");
		closeDiscMessBtn.classList.add("DisconnectBtn");
		closeDiscMessBtn.textContent = "Ok";
		closeDiscMessBtn.addEventListener("click", function(){
			this.remove();
		}.bind(disconnectContainer), false);
		disconnectView.appendChild(closeDiscMessBtn);

		document.body.appendChild(disconnectContainer);

	}
}

function sendNotification(title, options) {
	if(!("Notification" in window)) {
		alert("Ваш браузер не поддерживает HTML Notifications, его необходимо обновить.");
	} else if(Notification.permission === "granted") {
		var notification = new Notification(title, options);
		function clickFunc() { alert("Пользователь кликнул на уведомление"); }
		notification.onclick = clickFunc;
	} else if(Notification.permission !== "denied") {
		Notification.requestPermission(function (permission) {
			if (permission === "granted") {
				var notification = new Notification(title, options);
			} else {
				//alert('Вы запретили показывать уведомления'); // Юзер отклонил наш запрос на показ уведомлений
			}
		});
	}
}

class MemoryUsageViewer {
	
	constructor() {
		this.memoryData = [];
		this.memoryLimit = 0;
		this.showing = false;
		
		this.size = 100;
		
		for(let i = 0; i < this.size; ++i) this.memoryData.push(0);
		
		
		window.addEventListener("keypress", this.eventKey.bind(this), false);
		
		this.view = document.createElement("div");
		this.view.classList.add("ConsoleContainer");
		this.view.style.display = "none";
		
		this.viewContainer = document.createElement("div");
		this.viewContainer.classList.add("ConsoleViewContainer");
		this.view.appendChild(this.viewContainer);
		
		this.lineData = document.createElement("div");
		this.lineData.classList.add("ConsoleLine");
		this.view.appendChild(this.lineData);
		
		//<!--SVG-->
		let namespaceURL = decodeURIComponent(escape(window.atob("aHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmc=")));
		this.svgContainer = document.createElementNS(namespaceURL, "svg");
		this.svgContainer.classList.add("ConsoleSVG");
		this.lineData.appendChild(this.svgContainer);
		
		//<!--COLOR GRADIENT LINE-->
		// this.htmlGradient = document.createElementNS(namespaceURL, "linearGradient");
		// this.htmlGradient.setAttribute("id", this.colorGradientID);
		// this.htmlGradient.setAttribute("x1", color_x1);
		// this.htmlGradient.setAttribute("y1", color_y1);
		// this.htmlGradient.setAttribute("x2", color_x2);
		// this.htmlGradient.setAttribute("y2", color_y2);
		// this.stop1 = document.createElementNS(namespaceURL, "stop");
		// this.stop1.setAttribute("offset", 0);
		// this.stop1.setAttribute("stop-color", this.color1);
		// this.stop2 = document.createElementNS(namespaceURL, "stop");
		// this.stop2.setAttribute("offset", 100);
		// this.stop2.setAttribute("stop-color", this.color2);
		//
		
		//<!--LINE MEMORY-->
		this.htmlLine = document.createElementNS(namespaceURL, "path");
		this.htmlLine.setAttribute("class", "MemUsagePath");
		this.htmlLine.setAttribute("stroke-width", 3);
		this.svgContainer.appendChild(this.htmlLine);
		
		this.htmlLineMin = document.createElementNS(namespaceURL, "text");
		this.htmlLineMin.setAttribute("class", "ConsoleText");
		this.svgContainer.appendChild(this.htmlLineMin);
		
		this.htmlLineMax = document.createElementNS(namespaceURL, "text");
		this.htmlLineMax.setAttribute("class", "ConsoleText");
		this.svgContainer.appendChild(this.htmlLineMax);
		
		//<!--LINE LIMIT-->
		this.htmlLineLimit = document.createElementNS(namespaceURL, "path");
		this.htmlLineLimit.setAttribute("class", "MemLimit");
		this.htmlLineLimit.setAttribute("stroke-width", 3);
		this.svgContainer.appendChild(this.htmlLineLimit);
		
		this.htmlLineLimitText = document.createElementNS(namespaceURL, "text");
		this.htmlLineLimitText.setAttribute("class", "ConsoleText");
		this.svgContainer.appendChild(this.htmlLineLimitText);
		
		this.listData = document.createElement("div");
		this.listData.classList.add("ConsoleListData");
		this.lineData.appendChild(this.listData);
		
		
		//<!--CLOSE-->
		this.viewContainerClose = document.createElement("div");
		this.viewContainerClose.classList.add("ConsoleViewContainerClose");
		this.viewContainerClose.addEventListener("click", this.hide.bind(this), false);
		this.viewContainerClose.textContent = "Close";
		this.viewContainer.appendChild(this.viewContainerClose);
		
		
		//<!--INNER CONSOLE-->
		let container = document.getElementById("container1");
		if(container != null) {
			container.appendChild(this.view);
		}
		
	}
	
	addData(strData) {
		
		let mem = strData.substr(16, strData.indexOf("MaxMEMLIMIT") - 16);
		this.memoryLimit = strData.substr(strData.indexOf("MaxMEMLIMIT") + 11);
		
		this.memoryData.push(parseFloat(mem)/1024);
		this.memoryData = this.memoryData.slice(1);
		
		let memItem = document.createElement("div");
		this.listData.appendChild(memItem);
		memItem.textContent += (parseFloat(mem)/1024 + "Kb \n");
		this.listData.scrollTop = this.listData.scrollHeight - this.listData.clientHeight;
		
		this.update();
	}
	
	update() {
		
		let w = this.svgContainer.clientWidth;
		let h = this.svgContainer.clientHeight;
		
		let onePointX = w / (this.size - 1);
		let onePointY = (h / this.memoryLimit) * 0.9;
		
		// LIMIT
		this.htmlLineLimit.setAttribute("d", "M 0 " + (h - (this.memoryLimit * onePointY)) + " L" + parseInt(this.size * onePointX) + " " + (h - (this.memoryLimit * onePointY)));
		this.htmlLineLimitText.setAttribute("x", 0);
		this.htmlLineLimitText.setAttribute("y", (h - (this.memoryLimit * onePointY)));
		this.htmlLineLimitText.textContent = this.memoryLimit + "Mb";
		
		// MEMORY USAGE
		let d = "M 0 " + h + " L ";
		for(let i = 0; i < this.size ; i++) {
			let value = this.memoryData[i];
			let vX = parseInt(i * onePointX);
			let vY = (h - parseInt((value / 1000) * onePointY));
			d += vX + " " + vY + " ";
			
			if(i == 0) {
				this.htmlLineMin.textContent = value + "Kb";
				this.htmlLineMin.setAttribute("x", 0);
				this.htmlLineMin.setAttribute("y", h);
			}
			if(i == this.size - 1) {
				this.htmlLineMax.textContent = value + "Kb";
				if(this.htmlLineMax.getClientRects().length > 0) this.htmlLineMax.setAttribute("x", w - this.htmlLineMax.getClientRects()[0].width);
				this.htmlLineMax.setAttribute("y", h);
			}
			
		}
		this.htmlLine.setAttribute("d", d + parseInt(this.size * onePointX) + " " + h);
		
	}
	
	show() {
		this.view.style.display = "block";
		this.showing = true;
		this.update();
	}
	
	hide() {
		this.view.style.display = "none";
		this.showing = false;
		
	}
	
	eventKey(e) {
		if(e.which == 96) { // KEY = '`'
			if(this.showing) this.hide();
			else this.show();
		}
		
	}
	
	
}


class AttributeObject {
	
	constructor(name, value) {
		this.name = name;
		this.value = value;
		this.enabled = true;
	}
	
	toString() {
		return `${this.name}="${this.value}"`;
	}

	toStyleString(){
		return `${this.name}:${this.value}`;
	}
	
}

class AttributeManager {
	
	constructor(view) {
		this.view = view;
		this.attributes = {};
		this.styleAtributes = {};
	}
	
	loadStyle(stateStyle){
		for( let name in stateStyle ){
			let value = stateStyle[name];
			if (document.body.style.hasOwnProperty(name) || (name.substr(0,2)==='--')) {
				this.addStyleAtribute(name, value);
				return;
			}
			this.addAttribute(name,value);
		}
	}
	
	addAttribute(name, value) {
		if(name == "style") {
			console.error("can`t add special Attribute 'Style'. For set styles attributes use addStyleAttribute" +
				" method");
			return;
		}
		if(this.attributes[name] !== undefined) {
			let attribute = this.attributes[name];
			if(attribute === undefined) {
				console.error("Can't add attribute name: ", name);
				return;
			}
			attribute.name = name;
			attribute.value = value;
			return this.attributes[name];
		}
		this.attributes[name] = new AttributeObject(name, value);
		return this.attributes[name];
	}
	
	/// удаляет атрибут! удаляет совсем из атрибут менеджера. проблема в том, что в следующем onSetStyle этот
	// атрибут возможно вернется.
	// ищет в атрибутах, и удаляет. если не нашел ищет в стилях и удаляет там.
	// совет по использованию - в мейке самого себя.
	removeAttribute(name) {
		if(this.attributes[name] !== undefined) {
			delete this.attributes[name];
			return;
		}
		if(this.styleAtributes[name] !== undefined) {
			delete this.styleAtributes[name];

			return;
		}
	}
	
	// делает атрибут активным или не активным. не удаляет атрибут, тем самым в следующем onSetStyle этот атрибут
	// обновится, но не изменит своего состояния ВКЛ/ВЫКЛ.
	// совет по использованию - в мейке родителя для чилдов. или для длительного отключения какого-либо параметра.
	// или для div - чтобы специфические атрибуты не попадали в див.
	setAttributeEnabled(name, enabled){
		if (this.attributes[name] !== undefined){
			this.attributes[name].enabled = enabled;
		}
	}
	
	// тоже самое, что и setAttributeEnabled только для стилей.
	setStyleAttributeEnabled(name, enabled){
		if (this.styleAtributes[name] !== undefined){
			this.styleAtributes[name].enabled = enabled;
		}
	}
	
	getAttributeByName(name) {
		return this.attributes[name];
	}
	
	toString() {
		let tempString = "";
		for(let key in this.attributes) {
			let attribute = this.attributes[key];
			if (attribute.enabled)	tempString += attribute.toString() + " ";
		}
		if(this.styleAtributes.length !== 0) {
			tempString += 'style="' + this.toStyleString() + '"';
		}
		return tempString;
	}
	
	addStyleAtribute(name, value){
		if(this.styleAtributes[name] !== undefined) {
			let style = this.styleAtributes[name];
			if(style === undefined) {
				console.error("Can't add style-attribute name: ", name);
				return;
			}
			style.name = name;
			style.value = value;
			return this.styleAtributes[name];
		}
		this.styleAtributes[name] = new AttributeObject(name, value);
		return this.styleAtributes[name];
	}
	
	getStyleAttributeByName(name) {
		return this.styleAtributes[name];
	}
	
	toStyleString(){
		let tempString = "";
		for(let key in this.styleAtributes) {
			let attribute = this.styleAtributes[key];
			if (attribute.enabled)	tempString += attribute.toStyleString() + "; ";
		}
		return tempString;
	}
	
}

/**
 * Created by Aleksandr G. on 27.10.2017.
 */


class StyleLibrary {

	constructor(state) {

		this.styleLib = {};
		
	}
	
	load(state){
		if(state === undefined) return;
		if(!state.hasOwnProperty("library_name")) return;
		let stateCopy = {};
		Rex.copy(stateCopy,state);
		
		this.styleLib = {};
		
		for (let key in stateCopy) {
			if (key == "library_name") continue;
			this.recurFillStyle(stateCopy, key);
		}
		if(Rex.gui!==undefined) Rex.gui.refreshAll();
	}
	
	recurFillStyle(state, names){
		if (state[names].hasOwnProperty("isFill")) return;
		let obj = {};
		if (state[names].hasOwnProperty("parentStyle")){
			let parentName = state[names].parentStyle;
			if(state.hasOwnProperty(parentName)) {
				this.recurFillStyle(state,parentName);
				Rex.copy(obj, this.styleLib[parentName]);
			}
		}
		state[names].isFill = true;
		this.styleLib[names] = obj;
		Rex.copy(this.styleLib[names],state[names]);
	}
	
	getParam(styleName,paramName,defaultValue){
		if(this.styleLib === undefined){
			return defaultValue;
		}
		if (!this.styleLib.hasOwnProperty(styleName)) { 
			return defaultValue;
		}
		if (!this.styleLib[styleName].hasOwnProperty(paramName)) {
			return defaultValue;
		}
		return this.styleLib[styleName][paramName];
 	}
}

/**
 * Created by prg-30 on 02.06.2017.
 */

class ConsoleInput extends Widget {

	constructor(state) {
		super(state);
		this.text = '';
		this.str = '';
		this.header = '';
		this.offset = 4;
		this.anchorPos = new Rex.Vector2(this.posX , this.posY);
		this.anchorSize = new Rex.Vector2(this.width , this.height);

		//курсор
		this.cursorPosition = this.text.length;
		this.heightCaret = this.anchorSize.x / 2 + (this.anchorSize.y / 2 / 3);
		this.widthCaret = 2;
		this.enabled = false;
		this.widthText = [];
		this.countWidth = true;
		this.anchorPoint = new Rex.Vector2();
		this.offsetLeft = 0;
		this.offsetRight = 0;
		this.textTemp = '';
		this.mv = false; //передвижение стрелками(true)/(false) добавление символов
		this.caretPosition = 0; //позиция каретки
		this.delete = false; //если удаляем символы, позицианирование текста в поле
		this.needMove = false;
		this.charLength = 8;

		//выделенный текст
		this.selectPosition = -1;
		this.left = false;

		this.specSymbols = {
			SHIFT		: 0x10,
			DELETE		: 0x2E,
			BACKSPACE 	: 0x08,
			ENTER 		: 0x0D,
			CTRL 		: 0x11,
			ALT 		: 0x12,
			LEFT_ARROW 	: 0x25,
			UP_ARROW 	: 0x26,
			RIGHT_ARROW : 0x27,
			DOWN_ARROW 	: 0x28,
			A			: 0x41,
			ESC			: 0x1B
		};

		this.radius = 1;

		super.setState(state);
		this.view.update();
		//this.text = decodeURIComponent(escape(window.atob(this.text)));
		this.str = this.text;
	}

	setState(state) {
		if(state === undefined) return;
		Rex.copy(this, state);
		//this.text = decodeURIComponent(escape(window.atob(this.text)));
		this.str = this.text;
	}

	onDraw(ctx, ctxTemp) {
		this.drawer.gradientBackground(ctx);
		this.anchorPos = new Rex.Vector2(this.posX, this.posY);
		this.anchorSize = new Rex.Vector2(this.width, this.height);
		if(ctxTemp !== undefined) ctxTemp.clearRect(0, 0, Rex.render.width, Rex.render.height);
		ctxTemp.font = `${this.anchorSize.y / 2}px Arial`;
		this.heightCaret = this.anchorSize.y / 2 + (this.anchorSize.y / 2 / 3);
		if(this.cursorPosition > this.str.length) {
			console.error("this is not validate");
			this.cursorPosition = this.str.length;
		}

		this.drawer.drawLine(ctx, this.posX, this.posY + this.height, this.posX + this.width, this.posY + this.height, 2, 1,
			this.drawer.getParam("geometricFillColor" ,  "rgb(158, 158, 158)"));
		this.drawer.lineAnimation(ctx, ctxTemp, this.drawer.getParam("animationLineWidth" ,  2),
			this.drawer.getParam("animationStrokeColor" ,  "rgb(99, 215, 203)"));
		if(this.animation.getRadiusAnimation() > this.anchorSize.x && !this.isFocused()) this.animation.endAnimation();

		this.caretPosition = this.anchorPos.x + ctxTemp.measureText(this.str.substr(0, this.cursorPosition)).width + this.offset  - this.offsetLeft;
		this.drawSelect(ctxTemp, this.anchorPos.x, this.anchorPos.y);
		this.onOffsetLeft(ctxTemp,this.anchorPos.x,this.anchorSize.x);
		this.drawText(ctxTemp, this.anchorPos.x, this.anchorPos.y, this.anchorSize.x);

		ctxTemp.globalCompositeOperation = 'destination-in';
		ctxTemp.fillRect(this.anchorPos.x, this.anchorPos.y, this.anchorSize.x, this.anchorSize.y);
		ctx.drawImage(ctxTemp.canvas, 0, 0);

		if (this.isHovered())
			this.drawer.drawRect(ctx, this.posX, this.posY, this.width, this.height, 0,
				this.drawer.getParam("hoverColor", "rgba(0, 0, 0, 0.1)"));
		if(this.text.length != 0 || this.isFocused()) {
			this.drawer.setStyleParameters(`12px Arial`, this.drawer.strokeStyle, "rgb(128,128,128)");
			this.drawer.header(ctx, this.anchorPos.x + this.anchorSize.x * 0.03, this.anchorPos.y - 5, this.header);
		} else {
			this.drawer.setStyleParameters(`15px Arial`, this.drawer.strokeStyle, "rgb(189,189,189)");
			this.drawer.header(ctx, this.anchorPos.x + this.anchorSize.x * 0.03,this.anchorPos.y + this.anchorSize.y / 2 + this.fontSize / 3, this.header);
		}
	}

	drawText(ctx, x, y, width) {
		if(1) {
			ctx.fillStyle = "#FFF";
			ctx.fillRect(this.caretPosition, y + this.heightCaret / 3, this.widthCaret, this.heightCaret / 1.3);
		}
		ctx.fillStyle = "#FFF";
		ctx.fillText(this.text, x + this.offset - this.offsetLeft, y + this.heightCaret);
		if(this.countWidth) {
			this.widthText = [];
			for(let i = 0; i < this.str.length + 1; ++i) {
				this.widthText.push(ctx.measureText(this.str.substr(0, i)).width + this.offset);
			}
		}
	}

	drawSelect(ctx, x, y) {
		if(this.selectPosition == -1) return;
		let startSelect = x + ctx.measureText(this.str.slice(0, this.getSelectionStart())).width - this.offsetLeft;
		ctx.fillStyle = "rgba(0, 92, 255, 0.8)";
		ctx.fillRect(startSelect + this.offset, y + this.heightCaret / 3, ctx.measureText(this.getSelectionText()).width, this.heightCaret / 1.3);
	}

	keyDown(event) {
		switch(event.which) {
			case this.specSymbols.BACKSPACE: this.deleteChar(event.which);
				break;
			case this.specSymbols.DELETE: this.deleteChar(event.which);
				break;
			case this.specSymbols.LEFT_ARROW: this.moveChar(event);
				break;
			case this.specSymbols.RIGHT_ARROW: this.moveChar(event);
				break;
			case this.specSymbols.A: this.ctrlA(event);
				break;
			case this.specSymbols.ESC: this.Esc(event);
				break;
			default:
				break;
		}
	}

	Esc(specSymbol){
		if(specSymbol.which == this.specSymbols.ESC){
			if(this.text.length != 0){
				if(this.selectPosition != -1){
					this.clearSelect(true);
					this.updateParameters();
					return;
				}
			}
		}
	}

	ctrlA(specSymbol){
		if(specSymbol.which == this.specSymbols.A && specSymbol.ctrlKey){
			if(this.text.length != 0){
				this.selectPosition = 0;
				this.cursorPosition = this.text.length;
				this.mv = true;
				this.updateParameters();
				return;
			}
		}
	}

	keyUp(event){
	}

	keyPress(event) {
		if(event.charCode != 13) {
			if(this.cursorPosition == 0 && this.str.length == 0) {
				this.str += this.getChar(event);
				this.cursorPosition++;
				this.countWidth = true;
			} else if(this.selectPosition != -1) {
				this.str = this.str.slice(0, this.getSelectionStart()) + this.getChar(event) + this.str.slice(this.getSelectionEnd(), this.str.length);
				this.cursorPosition = this.str.slice(0, this.getSelectionStart()).length + 1;
				this.countWidth = true;
				this.delete = true;
				this.clearSelect(false);
			} else {
				this.str = this.str.slice(0, this.cursorPosition) + this.getChar(event) + this.str.slice(this.cursorPosition, this.str.length);
				this.cursorPosition++;
				this.countWidth = true;
				this.delete = false;
			}
			this.mv = false;
			this.updateParameters();
		}
	}

	deleteChar(specSymbol) {
		if(this.selectPosition != -1) {
			this.str = this.str.substring(0, this.getSelectionStart()) + this.str.substring(this.getSelectionEnd(), this.str.length);
			this.cursorPosition = this.str.substring(0, this.getSelectionStart()).length;
			this.clearSelect(true);
			this.countWidth = true;
			this.delete = true;
			this.mv = true;
			return;
		}
		if(specSymbol == this.specSymbols.BACKSPACE) {
			if(this.cursorPosition == 0) return;
			this.cursorPosition--;
			this.str = this.str.slice(0, this.cursorPosition) + this.str.slice(this.cursorPosition + 1, this.str.length);
			this.countWidth = true;
		} else if(specSymbol == this.specSymbols.DELETE) {
			if(this.cursorPosition == this.str.length) return;
			this.str = this.str.slice(0, this.cursorPosition) + this.str.slice(this.cursorPosition + 1, this.str.length);
			this.countWidth = true;
		}
		this.delete = true;
		this.mv = true;
		this.updateParameters();
	}

	moveChar(specSymbol) {
		if(specSymbol.which == this.specSymbols.LEFT_ARROW) {
			if(this.cursorPosition != 0) {
				if(specSymbol.shiftKey && !specSymbol.ctrlKey && this.selectPosition == -1) this.selectPosition = this.cursorPosition;
				this.cursorPosition--;
				this.left = true;
				if(specSymbol.ctrlKey) {
					for(let i = this.cursorPosition; i >= 0; --i) {
						if(specSymbol.shiftKey && this.selectPosition == -1) {
							this.selectPosition = this.cursorPosition + 1;
						}
						if(i - 1 == 0) {
							this.cursorPosition = i - 1;
							this.updateParameters();
							return;
						}
						if(!this.isNotAlpha(this.str[i]) && this.isNotAlpha(this.str[i - 1])) {
							this.updateParameters();
							return;
						}
						this.cursorPosition = i - 1;
					}

				}
				this.mv = true;
				this.needchange = false;
				this.updateParameters();
			}
		} else if(specSymbol.which == this.specSymbols.RIGHT_ARROW) {
			if(this.cursorPosition != this.str.length) {
				if(specSymbol.shiftKey && !specSymbol.ctrlKey && this.selectPosition == -1) this.selectPosition = this.cursorPosition;
				this.cursorPosition++;
				this.left = false;
				if(specSymbol.ctrlKey) {
					for(this.cursorPosition; this.cursorPosition <= this.str.length; ++this.cursorPosition) {
						if(specSymbol.shiftKey && this.selectPosition == -1) this.selectPosition = this.cursorPosition - 1;
						if(this.cursorPosition == this.str.length) {
							this.updateParameters();
							return;
						}
						if(!this.isNotAlpha(this.str[this.cursorPosition - 1]) && this.isNotAlpha(this.str[this.cursorPosition])) {
							this.updateParameters();
							return;
						}
					}
				}
				this.mv = true;
				this.updateParameters();
			}
		}
		if(!specSymbol.shiftKey && this.selectPosition != -1) this.clearSelect(true);
	}

	mouseMove(x, y) {
		if(this.isHovered()) {
			document.body.style.cursor = 'text';

		} else {
			document.body.style.cursor = 'default';
		}
		this.onMouseMove(x,y);

	}

	cut(event) {
		event.clipboardData.setData('text/plain', this.getSelectionText());
		this.str = this.str.substring(0, this.getSelectionStart()) + this.str.substring(this.getSelectionEnd(), this.str.length);
		this.cursorPosition = this.str.substring(0, this.getSelectionStart()).length;
		this.clearSelect(true);
		this.countWidth = true;
		event.preventDefault();
	}

	copy(event) {
		event.clipboardData.setData('text/plain', this.getSelectionText());
		event.preventDefault();
	}

	paste(event) {
		if(event.clipboardData.types.indexOf('text/plain') > -1){
			if(this.selectPosition != -1) {
				this.str = this.str.slice(0, this.getSelectionStart()) + event.clipboardData.getData('text/plain') + this.str.slice(this.getSelectionEnd(), this.str.length);
				this.cursorPosition = this.text.slice(0, this.getSelectionEnd()).length;
				this.clearSelect(false);
			} else {
				this.str = this.str.slice(0, this.cursorPosition) + event.clipboardData.getData('text/plain') + this.str.slice(this.cursorPosition, this.str.length);
				this.cursorPosition = this.str.slice(0, event.clipboardData.getData('text/plain').length + this.cursorPosition).length;
			}
			this.updateParameters();
			event.preventDefault();
			this.countWidth = true;
		}
	}

	getSelectionStart() {
		return Math.min(this.selectPosition, this.cursorPosition);
	}

	getSelectionEnd() {
		return Math.max(this.selectPosition, this.cursorPosition);
	}

	getSelectionText() {
		return this.str.substring(this.getSelectionStart(), this.getSelectionEnd());
	}

	getChar(event) {
		if (event.which != 0 && event.charCode != 0) { // все кроме IE
			if (event.which < 32) return null; // спец. символ
			return String.fromCharCode(event.which); // остальные
		}
		return null; // спец. символ
	}

	isNotAlpha(letter) {
		let symbols = /[\.\,\+\-\*/= _\[\]\{\}\(\)\<\>:;\\'"\|!@#\$%\^&\?]/;
		return symbols.test(letter);
	}

	clearSelect(needSend) {
		this.selectPosition = -1;
		if(needSend) this.updateParameters();
	}

	update() {
		setInterval(function() {this.enabled = !this.enabled;}.bind(this), 500);
	}

	updateParameters() {
		this.text = this.str;
		//Rex.callRpcMethod('Widgets', this.id, this.type, 'setParameters', [window.btoa(unescape(encodeURIComponent(this.str))), this.cursorPosition, this.selectPosition]);
	}

	onFocused(focused) {
		if(!focused) {
			this.clearSelect(true);
		} else {
			this.animation.startAnimation();
		}
	}

	onMouseUp(x, y){
		this.needMove = false;
		this.anchorPoint.x = 0;
		this.updateParameters();
	}

	onMouseMove(x, y){
		if(this.widthText.length > 1 && this.offsetLeft == 0){
			if(this.needMove && this.anchorPoint.x != 0 && (this.widthText.length > 1)){
				if(x <= ((this.anchorPos.x + this.anchorSize.x * 0.005)  + this.widthText[this.widthText.length - 1]) && x >= this.anchorPos.x  - this.widthCaret){
					let delta = x - (this.widthText[this.cursorPosition] + this.anchorPos.x);
					if(Math.abs(delta) > this.charLength * .95){
						if(this.selectPosition == -1) this.selectPosition = this.cursorPosition;
						this.cursorPosition += Math.round(delta / this.charLength);
						this.mv = true;
						this.updateParameters();
					}
				}
			}
		}else if(this.offsetLeft != 0){
			if(this.needMove && this.anchorPoint.x != 0 && (this.widthText.length > 1)){
				if(x >= (this.anchorPos.x + this.anchorSize.x * 0.02 )  - this.offsetLeft - this.offset - this.widthCaret){
					let delta = x - (this.widthText[this.cursorPosition] + this.anchorPos.x - this.widthCaret) + this.offsetLeft;
					if(Math.abs(delta) > this.charLength * .95){
						if(this.selectPosition == -1) this.selectPosition = this.cursorPosition;
						this.cursorPosition += Math.round(delta / this.charLength);
						this.mv = true;
						this.updateParameters();
					}
				}
			}
		}
	}

	onMouseDown(x, y) {
		if(this.widthText.length > 1 && this.offsetLeft == 0){
			let begin = (this.anchorPos.x ) + this.widthText[0] * 0.6;
			let end = (this.anchorPos.x + this.widthText[this.widthText.length - 1]) - (this.widthText[this.widthText.length-1] - this.widthText[this.widthText.length-2]) * 0.4;
			if((x >= this.anchorPos.x ) && (x <= begin)) {
				this.cursorPosition = 0;
				this.selectPosition = -1;

			} else if((x >= begin) && (x < end)) {
				for(let i = 0; i < this.widthText.length - 2; i++){
					let l = (this.anchorPos.x)  + (this.widthText[i + 1] - this.widthText[i]) * 0.6 + this.widthText[i];
					let r = (this.anchorPos.x)  + (this.widthText[i + 2] - this.widthText[i+1]) * 0.4 + this.widthText[i+1];
					if(x > l && x < r) {
						this.cursorPosition = i+1;
						this.selectPosition = -1;
						break;
					}
				}
			} else if(x >= end){
				this.cursorPosition = this.widthText.length - 1;
				this.selectPosition = -1;
			}
			this.anchorPoint.x = x;
			this.needMove = true;
			this.mv = false;
			this.clearSelect(true);
			this.updateParameters();

		} else if(this.offsetLeft != 0){
			for(let i = 0; i < this.widthText.length - 2; i++){
				let l = (this.anchorPos.x)  + (this.widthText[i + 1] - this.widthText[i]) * 0.6 + this.widthText[i] - this.offsetLeft;
				let r = (this.anchorPos.x)  + (this.widthText[i + 2] - this.widthText[i+1]) * 0.4 + this.widthText[i+1] - this.offsetLeft;
				if(x > l && x < r) {
					this.cursorPosition = i+1;
					this.selectPosition = -1;
					break;
				}else if(x > this.caretPosition && x < (this.anchorSize.x + this.anchorPos.x) && this.cursorPosition == this.text.length - 1){
					this.cursorPosition = this.text.length;
					this.selectPosition = -1;
				}
			}
			this.anchorPoint.x = x;
			this.needMove= true;
			this.mv = false;
			this.clearSelect(true);
			this.updateParameters();
		}

	}

	onOffsetLeft(ctx,x,width){
		if(ctx.measureText(this.text).width + this.offset + this.widthCaret < width || this.cursorPosition == 0 || this.cursorPosition < 3){
			this.offsetLeft = 0;
		} else if(ctx.measureText(this.text.substr(0, this.cursorPosition)).width + this.offset + this.widthCaret > width && !this.mv){
			//когда курсор в конце текста
			if(this.cursorPosition == this.text.length){
				this.offsetLeft = ctx.measureText(this.text.substr(0, this.cursorPosition)).width - width + width * 0.02 ;
			}else
			//если курсор между началом и концом текста
			if(this.cursorPosition > 0 && this.cursorPosition < this.text.length && this.caretPosition + this.widthCaret > width + x && !this.delete){
				this.offsetLeft = ctx.measureText(this.text.substr(0, this.cursorPosition)).width + width * 0.02 - width;
			}
			//передвижение каретки, без ввода символов
		} else if(this.mv && (this.caretPosition > x + width - this.widthCaret || this.caretPosition < x + this.widthCaret)){
			if(this.caretPosition < x + this.widthCaret){
				this.offsetLeft = ctx.measureText(this.text.substr(0, this.cursorPosition)).width;
			} else if(this.caretPosition > width + x - this.widthCaret){
				this.offsetLeft = ctx.measureText(this.text.substr(0, this.cursorPosition)).width - width +  width * 0.02;
			}

		}else if(this.mv && (this.caretPosition > x - this.widthCaret && this.caretPosition < x + width + this.widthCaret)){
			if(this.caretPosition + ctx.measureText(this.text.substr(this.cursorPosition)).width < width + x){
				if(this.text.length == this.cursorPosition){
					this.offsetLeft  = ctx.measureText(this.text.substr(0, this.cursorPosition)).width - width + width * 0.02 ;
				} else if(this.cursorPosition > 0 && this.cursorPosition < this.text.length){
					this.offsetLeft = ctx.measureText(this.text.substr(0, this.cursorPosition)).width - width + width * 0.02 + ctx.measureText(this.text.substr(this.cursorPosition)).width;
				}
			}

		}
	}
}

/**
 /**
 * WidgetDrawer
 */
class Color {
	
	constructor(r, g, b, a) {
		this.r = Math.round(r);
		this.g = Math.round(g);
		this.b = Math.round(b);
		this.a = a;
		this.F = true;
	}
	
	colorToString() {
		let Res = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a / 255})`;
		return Res;
	}
	
	fromString(str) {
		if(str.indexOf("rgb(") !== -1) {
			let tstr = str.replace("rgb(", "");
			tstr = tstr.replace(")", "");
			let arr = tstr.split(",", 3);
			if(arr.length == 3) {
				this.r = Math.round(arr[0]);
				this.g = Math.round(arr[1]);
				this.b = Math.round(arr[2]);
				this.a = 255;
			}
			else {
				console.error("error parse rgb : ", str);
			}
		}
		else if(str.indexOf("rgba(") !== -1) {
			let tstr = str.replace("rgba(", "");
			tstr = tstr.replace(")", "");
			let arr = tstr.split(",", 4);
			if(arr.length == 4) {
				this.r = Math.round(arr[0]);
				this.g = Math.round(arr[1]);
				this.b = Math.round(arr[2]);
				this.a = arr[3] * 255;
			}
			else {
				console.error("error parse rgba : ", str);
			}
		}
		else {
			console.error("color parse fail : ", str);
		}
		
	}
	
	getFaded(fadePercent) {
		let Fader = function(I) {
			let R = Math.round(I * (fadePercent / 100));
			return R;
		};
		let r, g, b, a;
		r = Fader(this.r);
		g = Fader(this.g);
		b = Fader(this.b);
		a = Fader(this.a);
		return new Color(r, g, b, a);
	}
	
	getGradient(color, t) {
		if(t > 1.0) return this;
		let dr = (color.r - this.r) * t;
		let dg = (color.g - this.g) * t;
		let db = (color.b - this.b) * t;
		let da = (color.a - this.a) * t;
		let nc = new Color(this.r + dr, this.g + dg, this.b + db, this.a + da);
		//console.log(nc, this, this.r + dr, this.g + dg, this.b + db, this.a + da);
		return nc;
	}
	
	mixColor(mixColor) {
		return new Color(Math.round((this.r + mixColor.r) / 2), Math.round((this.g + mixColor.g) / 2),
			Math.round((this.g + mixColor.g) / 2), Math.round((this.a + mixColor.a) / 2));
	}
	
	isEqal(value) {
		if(value.F && value.r == this.r && value.g == this.g && value.b == this.b && value.a == this.a) return true;
		return false;
	}
	
};

class WidgetDrawer {
	
	constructor(widget) {
		this.widget = widget;
	}
	
	getParams(paramName, defaultValue) {
		if (paramName == null) 
			return defaultValue;
		if ((this.widget !== undefined) && (this.widget.customStyle !== undefined) && (this.widget.customStyle.hasOwnProperty(paramName)))
			return this.widget.customStyle[paramName];
		if((this.widget !== undefined) && (this.widget.styleName !== undefined))
				return Rex.gui.styleLibrary.getParam(this.widget.styleName, paramName, defaultValue);
		else
			return Rex.gui.styleLibrary.getParam(this.styleName, paramName, defaultValue);
	}
	
	transform(ctx, transformMatrix, translate) {
		ctx.setTransform(transformMatrix.get(0, 0), transformMatrix.get(0, 1), transformMatrix.get(1, 0), transformMatrix.get(1, 1), translate.x, translate.y);
	}
	
	transformMousePos(x, y) {
		let mousePos = new Rex.Vector3(x, y, 0.0);
		if(this.widget.transform.length != 0) {
			let mat = new Rex.Matrix4();
			let w = this.widget;
			
			mat.copy(w.transform);
			
			let fulcrumX = w.posX + w.width / 2;
			let fulcrumY = w.posY + w.height / 2;
			
			mat.m[12] = fulcrumX * (1 - mat.m[0]) + fulcrumY * mat.m[1];
			mat.m[13] = fulcrumX * mat.m[4] + fulcrumY * (1 - mat.m[0]);
			
			mousePos = mat.getInverse43().mulVector3(mousePos);
		}
		return mousePos;
	}
	
	drawShadow(ctx) {
		if(this.widget === undefined) return;
		if(this.widget.elevation === undefined) return;
		if(this.hasOwnProperty("elevationShadow")) {
			this.onDrawShadow(ctx);
		}
		else {
			console.log("Error! ElevationShadow styles undefined!", this.widget);
		}
	}
	
	onDrawShadow(ctx) {
		this.drawRectShadow(ctx);
	}
	
	drawRectShadow(ctx) {
		if((this.widget.elevation === undefined) || (isNaN(this.widget.elevation))) return;
		
		ctx.save();
		
		ctx.shadowColor = "rgba(0, 0, 0, 0.14)";
		ctx.shadowBlur = 1.5694 * this.widget.elevation - 0.9402;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = this.widget.elevation;
		ctx.fillRect(this.widget.aPosX + 1, this.widget.aPosY + 1, this.widget.width - 2, this.widget.height - 2);
		
		ctx.shadowColor = "rgba(0, 0, 0, 0.12)";
		ctx.shadowBlur = 1.9064 * this.widget.elevation - 0.104;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0.0112 * this.widget.elevation * this.widget.elevation + 0.0119 * this.widget.elevation + 2.4644;
		ctx.fillRect(this.widget.aPosX + 1, this.widget.aPosY + 1, this.widget.width - 2, this.widget.height - 2);
		
		ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
		ctx.shadowBlur = 0.3864 * this.widget.elevation + 4.2153;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0.4822 * this.widget.elevation + 0.101;
		ctx.fillRect(this.widget.aPosX + 1, this.widget.aPosY + 1, this.widget.width - 2, this.widget.height - 2);
		ctx.restore();
	}
	
	drawCircleShadow(ctx, x, y, width, height) {
		
		if((this.widget.elevation === undefined) || (isNaN(this.widget.elevation))) return;
		
		ctx.save();
		
		ctx.shadowColor = "rgba(0, 0, 0, 0.14)";
		ctx.shadowBlur = 1.5694 * this.widget.elevation - 0.9402;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = this.widget.elevation;
		ctx.beginPath();
		ctx.arc(x + width / 2, y + height / 2, width / 2, 0, 360, 0);
		ctx.stroke();
		
		ctx.shadowColor = "rgba(0, 0, 0, 0.12)";
		ctx.shadowBlur = 1.9064 * this.widget.elevation - 0.104;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0.0112 * this.widget.elevation * this.widget.elevation + 0.0119 * this.widget.elevation + 2.4644;
		ctx.beginPath();
		ctx.arc(x + width / 2, y + height / 2, width / 2, 0, 360, 0);
		ctx.stroke();
		
		ctx.shadowColor = "rgba(0, 0, 0, 0.2)";
		ctx.shadowBlur = 0.3864 * this.widget.elevation + 4.2153;
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0.4822 * this.widget.elevation + 0.101;
		ctx.beginPath();
		ctx.arc(x + width / 2, y + height / 2, width / 2, 0, 360, 0);
		ctx.stroke();
		ctx.restore();
	}
	
	//backgrounds
	
	drawRect(ctx, x, y, width, height, radius, color) {
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.moveTo(x + radius, y);
		ctx.lineTo(x + width - radius, y);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
		ctx.lineTo(x + width, y + height - radius);
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
		ctx.lineTo(x + radius, y + height);
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		ctx.lineTo(x, y + radius);
		ctx.quadraticCurveTo(x, y, x + radius, y);
		ctx.fill();
		ctx.restore();
	}
	
	background(ctx) {
		this.drawRect(ctx, this.widget.aPosX, this.widget.aPosY, this.widget.width, this.widget.height,
			this.getParams("backgroundRadius", 2),
			this.getParams("backgroundColor", "rgba(207, 207, 207, 1)"));
	}
	
	drawHeaderBackground(ctx) {
		ctx.save();
		ctx.fillStyle = this.getParams("headerBackground", "rgba(0, 0, 0, 0)");
		ctx.fillRect(this.widget.aPosX, this.widget.aPosY, this.widget.width, this.widget.headerLayout.height + this.widget.headerLayout.paddingTop + this.widget.headerLayout.paddingBottom);
		ctx.restore();
	}
	
	//animations
	
	circleAnimation(ctx, ctxTemp, color) {
		if(!this.widget.view.animation.enable) return;
		if(ctxTemp !== undefined) ctxTemp.clearRect(0, 0, Rex.render.width, Rex.render.height);
		ctxTemp.save();
		ctxTemp.fillStyle = color;
		ctxTemp.beginPath();
		let x = this.widget.aPosX;
		let y = this.widget.aPosY;
		let w = this.widget.width;
		let h = this.widget.height;
		if(this.widget.view.animation.getMousePos().x == 0 && this.widget.view.animation.getMousePos().y == 0) {
			this.widget.view.animation.setMousePos(x + w / 2, y + h / 2);
		}
		ctxTemp.arc(this.widget.view.animation.getMousePos().x, this.widget.view.animation.getMousePos().y, this.widget.view.animation.getRadiusAnimation(ctx, ctxTemp), 0, 2 * Math.PI, false);
		ctxTemp.fill();
		ctxTemp.globalCompositeOperation = 'destination-in';
		ctxTemp.fillRect(x, y, w, h);
		ctx.drawImage(ctxTemp.canvas, 0, 0);
		ctxTemp.restore();
	}
	
	circleBoundAnimation(ctx, ctxTemp, boundX, boundY, x, y, color) {
		if(!this.widget.view.animation.enable) return;
		if(ctxTemp !== undefined) ctxTemp.clearRect(0, 0, Rex.render.width, Rex.render.height);
		ctxTemp.save();
		ctxTemp.fillStyle = color;
		ctxTemp.beginPath();
		ctxTemp.arc(x + boundX, y + boundY, this.widget.view.animation.getRadiusAnimation(), 0, 2 * Math.PI, false);
		ctxTemp.fill();
		ctxTemp.globalCompositeOperation = 'destination-in';
		ctxTemp.beginPath();
		ctxTemp.arc(x + boundX, y + boundY, boundX + boundY, 0, 2 * Math.PI, false);
		ctxTemp.fill();
		ctx.drawImage(ctxTemp.canvas, 0, 0);
		ctxTemp.restore();
	}
	
	circleCustomSizeBoundAnimation(ctx, ctxTemp, x, y, width, height, color) {
		if(!this.widget.view.animation.enable) return;
		if(ctxTemp !== undefined) ctxTemp.clearRect(0, 0, Rex.render.width, Rex.render.height);
		ctxTemp.save();
		ctxTemp.fillStyle = color;
		ctxTemp.beginPath();
		ctxTemp.arc(x + width / 2, y + height / 2, this.widget.view.animation.getCustomSizeRadiusAnimation(ctx, ctxTemp, width, height), 0, 2 * Math.PI, false);
		ctxTemp.fill();
		ctxTemp.globalCompositeOperation = 'destination-in';
		ctxTemp.beginPath();
		ctxTemp.arc(x + width / 2, y + height / 2, width / 2 + height / 2, 0, 2 * Math.PI, false);
		ctxTemp.fill();
		ctx.drawImage(ctxTemp.canvas, 0, 0);
		ctxTemp.restore();
	}
	
	lineAnimation(ctx, ctxTemp, lineWidth, color) {
		if(!this.widget.view.animation.enable) return;
		if(ctxTemp !== undefined) ctxTemp.clearRect(0, 0, Rex.render.width, Rex.render.height);
		ctxTemp.save();
		let x = this.widget.aPosX;
		let y = this.widget.aPosY;
		let w = this.widget.width;
		let h = this.widget.height;
		ctxTemp.strokeStyle = lineWidth;
		ctxTemp.lineWidth = color;
		ctxTemp.beginPath();
		ctxTemp.lineTo(x + w / 2 + this.widget.view.animation.getRadiusAnimation(), y + h - 2);
		ctxTemp.lineTo(x + w / 2 - this.widget.view.animation.getRadiusAnimation(), y + h - 2);
		ctxTemp.stroke();
		ctxTemp.globalCompositeOperation = 'destination-in';
		ctxTemp.fillRect(x, y, w, h);
		ctx.drawImage(ctxTemp.canvas, 0, 0);
		ctxTemp.restore();
	}
	
	inputLineAnimation(ctx, ctxTemp, x, y, w, h) {
		if(!this.widget.view.animation.enable) return;
		if(ctxTemp !== undefined) ctxTemp.clearRect(0, 0, Rex.render.width, Rex.render.height);
		let animationLineWidth = this.getParams("animationLineWidth", 2);
		ctxTemp.save();
		if(this.widget.valid) ctxTemp.strokeStyle = this.getParams("lineColor", "rgba(110, 110, 110, 1)");
		else ctxTemp.strokeStyle = this.getParams("lineAndTextColorInvalid", "rgba(255, 0, 0, 0.4)");
		ctxTemp.lineWidth = animationLineWidth;
		ctxTemp.beginPath();
		ctxTemp.lineTo(x + w / 2 + this.widget.view.getCustomSizeRadiusAnimation(ctx, w, animationLineWidth), y + h - animationLineWidth);
		ctxTemp.lineTo(x + w / 2 - this.widget.view.getCustomSizeRadiusAnimation(ctx, w, animationLineWidth), y + h - animationLineWidth);
		ctxTemp.stroke();
		ctxTemp.globalCompositeOperation = 'destination-in';
		ctxTemp.fillRect(x, y, w, h);
		ctx.drawImage(ctxTemp.canvas, 0, 0);
		ctxTemp.restore();
	}
	
	tabLineAnimation(ctx, ctxTemp, oldCurrentItem, currentItem) {
		if(!this.widget.view.animation.enable) return;
		if(ctxTemp !== undefined) ctxTemp.clearRect(0, 0, Rex.render.width, Rex.render.height);
		ctxTemp.save();
		
		if(oldCurrentItem.posX < currentItem.posX) {
			let lineWidth = this.getParams("lineWidth", 3);
			ctxTemp.strokeStyle = this.getParams("underLine", "rgba(110, 110, 110, 1)");
			ctxTemp.lineWidth = lineWidth;
			let oldX = oldCurrentItem.posX;
			let newX = currentItem.posX;
			let y = currentItem.posY + currentItem.height - lineWidth / 2;
			let h = currentItem.height;
			let newW = currentItem.width;
			ctxTemp.beginPath();
			let k = this.widget.view.animation.getRadiusAnimationFixSpeed(ctx, ctxTemp, this.widget.width, h, 1.8);
			if((oldX + newW + k) > (newX + newW)) {
				this.widget.view.animation.endAnimation();
			}
			else {
				ctxTemp.moveTo(oldX + k, y);
				ctxTemp.lineTo(oldX + newW + k, y);
				ctxTemp.stroke();
				ctxTemp.globalCompositeOperation = 'destination-in';
				ctxTemp.fillRect(this.widget.aPosX, this.widget.aPosY, this.widget.width, this.widget.height);
				ctx.drawImage(ctxTemp.canvas, 0, 0);
			}
		}
		else {
			let lineWidth = this.getParams("lineWidth", 3);
			ctxTemp.strokeStyle = this.getParams("underLine", "rgba(110, 110, 110, 1)");
			ctxTemp.lineWidth = lineWidth;
			let oldX = oldCurrentItem.posX;
			let oldW = oldCurrentItem.width;
			let newX = currentItem.posX;
			let y = currentItem.posY + currentItem.height - lineWidth / 2;
			let h = currentItem.height;
			ctxTemp.beginPath();
			let k = this.widget.view.animation.getRadiusAnimationFixSpeed(ctx, ctxTemp, this.widget.width, h, 1.8);
			if((oldX - k) < newX) {
				this.widget.view.animation.endAnimation();
			}
			else {
				ctxTemp.moveTo(oldX - k + oldW, y);
				ctxTemp.lineTo(oldX - k, y);
				ctxTemp.stroke();
				ctxTemp.globalCompositeOperation = 'destination-in';
				ctxTemp.fillRect(this.widget.aPosX, this.widget.aPosY, this.widget.width, this.widget.height);
				ctx.drawImage(ctxTemp.canvas, 0, 0);
			}
		}
		ctxTemp.restore();
	}
	
	
	// line
	drawLine(ctx, startX, startY, endX, endY, lineWidth, padding, color) {
		ctx.save();
		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;
		ctx.beginPath();
		ctx.moveTo(startX, startY - padding);
		ctx.lineTo(endX, endY - padding);
		ctx.stroke();
		ctx.restore();
	}
	
	// border
	drawStrokeRect(ctx, x, y, width, height, radius, padding, lineWidth, color) {
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;
		ctx.moveTo(x + radius + padding, y + padding);
		ctx.lineTo(x + width - radius - padding, y + padding);
		ctx.quadraticCurveTo(x + width - padding, y + padding, x + width - padding, y + radius + padding);
		ctx.lineTo(x + width - padding, y + height - radius - padding);
		ctx.quadraticCurveTo(x + width - padding, y + height - padding, x + width - radius - padding, y + height - padding);
		ctx.lineTo(x + radius + padding, y + height - padding);
		ctx.quadraticCurveTo(x + padding, y + height - padding, x + padding, y + height - radius - padding);
		ctx.lineTo(x + padding, y + radius + padding);
		ctx.quadraticCurveTo(x + padding, y + padding, x + radius + padding, y + padding);
		ctx.stroke();
		ctx.restore();
	}
	
	//triangle
	drawFillTriangle(ctx, x, y, width, height, color) {
		//треугольник с центром в (x, y) и вершиной в (x, y - height)
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.moveTo(x, y - height);
		ctx.lineTo(x - width, y + height);
		ctx.lineTo(x + width, y + height);
		ctx.fill();
		ctx.restore();
	}
	
	drawFillTriangleLateral(ctx, x, y, width, height, color) {
		//треугольник с центром в (x, y) и вершиной в (x, y - height)
		ctx.save();
		ctx.beginPath();
		ctx.fillStyle = color;
		ctx.moveTo(x - width / 2, y - height);
		ctx.lineTo(x - width / 2, y + height);
		ctx.lineTo(x + width / 2, y);
		ctx.fill();
		ctx.restore();
	}
	
	drawStrokeTriangle(ctx, x, y, width, height, color, lineWidth) {
		//треугольник с центром в (x, y) и вершиной в (x, y - height)
		ctx.save();
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = lineWidth;
		ctx.moveTo(x, y - height);
		ctx.lineTo(x - width, y + height);
		ctx.lineTo(x + width, y + height);
		ctx.stroke();
		ctx.restore();
	}
	
	strokeTriangleCustom(ctx, x, y, w, h, lineWidth, color) {
		ctx.save();
		ctx.strokeStyle = color;
		ctx.beginPath();
		ctx.lineWidth = lineWidth;
		ctx.moveTo(x + 4, y + h / 2);
		ctx.lineTo(x + w / 5 * 2, y + h - 4);
		ctx.lineTo(x + w - 4, y + h / 4);
		ctx.stroke();
		ctx.restore();
	}
	
	circle(ctx, x, y, radius, lineWidth, strokeColor, fillColor) {
		ctx.save();
		ctx.beginPath();
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fillStyle = fillColor;
		ctx.fill();
		ctx.lineWidth = lineWidth;
		ctx.strokeStyle = strokeColor;
		ctx.stroke();
		ctx.restore();
	}
	
	// Метод для анимации нажатий кнопок Stick`a
	arc(ctx, centerX, centerY, radius, startAng, endAng, lineWidth, strokeColor, fillColor) {
		ctx.save();
		ctx.beginPath();
		ctx.moveTo(centerX, centerY);
		ctx.lineTo(centerX, centerY);
		ctx.arc(centerX, centerY, radius, startAng, endAng, false);
		ctx.lineTo(centerX, centerY);
		ctx.moveTo(centerX, centerY);
		ctx.closePath();
		ctx.fillStyle = fillColor;
		ctx.lineWidth = lineWidth;
		ctx.strokeStyle = strokeColor;
		ctx.stroke();
		ctx.fill();
		ctx.restore();
	}
	
	//custom
	
	header(ctx, x, y, header) {
		ctx.save();
		ctx.fillStyle = this.getParams("fillStyle", "rgb(158, 158, 158)");
		ctx.font = this.getParams("font", "Arial");
		ctx.fillText(header, x, y);
		ctx.restore();
	}
	
	drawTextLeft(ctx, x, y, text, fontSize, font, color, fontStyle) {
		ctx.save();
		ctx.imageSmoothingEnabled = true;
		ctx.font = (fontStyle ? fontStyle : "") + fontSize + "px " + font;
		ctx.textBaseline = "top";
		if(color !== undefined) ctx.fillStyle = color;
		ctx.fillText(text, x, y);
		ctx.restore();
	}
	
	drawTextCenter(ctx, x, y, text, fontSize, font, color, fontStyle) {
		ctx.save();
		ctx.imageSmoothingEnabled = true;
		ctx.font = (fontStyle ? fontStyle : "") + fontSize + "px " + font;
		ctx.textBaseline = "top";
		if(color !== undefined) ctx.fillStyle = color;
		let w = ctx.measureText(text).width;
		ctx.fillText(text, x - w / 2, y);
		ctx.restore();
	}
	
	drawTextRight(ctx, x, y, text, fontSize, font, color, fontStyle) {
		ctx.save();
		ctx.imageSmoothingEnabled = true;
		ctx.font = (fontStyle ? fontStyle : "") + fontSize + "px " + font;
		ctx.textBaseline = "top";
		if(color !== undefined) ctx.fillStyle = color;
		let w = ctx.measureText(text).width;
		ctx.fillText(text, x - w, y);
		ctx.restore();
	}
	
};

class WidgetAnimation {
	
	constructor(widget) {
		this.time = 0;
		this.enable = false;
		this.widget = widget;
		this.mousePos = new Rex.Vector2();
	}
	
	startAnimation() {
		Rex.gui.redraw();
		this.time = Rex.render.time;
		this.enable = true;
	}
	
	endAnimation() {
		if(this.enable) Rex.gui.redraw();
		this.time = 0;
		this.enable = false;
	}
	
	setMousePos(x, y) {
		let pos = this.widget.view.drawer.transformMousePos(x, y);
		this.mousePos.x = pos.x;
		this.mousePos.y = pos.y;
	}
	
	getMousePos() {
		if(this.enable) Rex.gui.redraw();
		return this.mousePos;
	}
	
	getRadiusAnimation(ctx, ctxTemp) {
		if(this.widget === undefined) {
			console.error("this.widget === undefined");
			return 1000;
		}
		
		if(this.enable) Rex.gui.redraw();
		let w = this.widget.width / Rex.render.width;
		let h = this.widget.height / Rex.render.height;
		
		let maxRadius = this.widget.width + this.widget.height;			// Радиус анимации (как далеко отрисовывается)
		let speed = (2.0 * Math.max(w, h));								// Скорость анимации
		let animation = (ctx !== undefined && !this.widget.pressed);	// Тип анимации(зависит от удерживания кнопки)
		let time = (Rex.render.time - this.time);						// Текущее время анимации
		
		// Прозрачность анимации
		if(animation) ctx.globalAlpha = (1 - ((time * speed) / maxRadius));
		
		if((time * speed) > maxRadius) {
			
			if(animation) {
				this.endAnimation();
				ctx.globalAlpha = 0;
			}
			return maxRadius;
		} 
		return (Rex.render.time - this.time) * speed;
	}

	getCustomSizeRadiusAnimation(ctx, ctxTemp, width, height) {
		if(this.widget === undefined) {
			console.error("this.widget === undefined");
			return 1000;
		}

		if(this.enable) Rex.gui.redraw();
		let w = width / Rex.render.width;
		let h = height / Rex.render.height;

		let maxRadius = width + height;			// Радиус анимации (как далеко отрисовывается)

		let speed = (2.0 * Math.max(w, h));								// Скорость анимации
		let animation = (ctx !== undefined && !this.widget.pressed);	// Тип анимации(зависит от удерживания кнопки)
		let time = (Rex.render.time - this.time);						// Текущее время анимации

		// Прозрачность анимации
		if(animation) ctx.globalAlpha = (1 - ((time * speed) / maxRadius));

		if((time * speed) > maxRadius) {

			if(animation) {
				this.endAnimation();
				ctx.globalAlpha = 0;
			}
			return maxRadius;
		}
		return (Rex.render.time - this.time) * speed;
	}

	getRadiusAnimationFixSpeed(ctx, ctxTemp, width, height, speed) {
		if(this.widget === undefined) {
			console.error("this.widget === undefined");
			return 1000;
		}

		if(this.enable) Rex.gui.redraw();

		let maxRadius = width + height;			// Радиус анимации (как далеко отрисовывается)

		let animation = (ctx !== undefined && !this.widget.pressed);	// Тип анимации(зависит от удерживания кнопки)
		let time = (Rex.render.time - this.time);						// Текущее время анимации

		if((time * speed) > maxRadius) {

			if(animation) {
				this.endAnimation();
			}
			return maxRadius;
		}
		return (Rex.render.time - this.time) * speed;
	}
	
}

/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* global Widget WidgetViewHtml BaseObject Rex*/
class WidgetView extends BaseObject {
	
	constructor(widget) {
		super();
		this.widget = widget;
		this._needRefresh = true;
	}
	
	setState(state) {}
	init() {}
	onInit() {}
	
	update() {
		if(Rex.widgets === undefined) {
			this._needRefresh = true;
			return;
		}
		let parent = Rex.widgets[this.widget.parentId];
		if(parent !== undefined) {
			parent.view.update();
		}
		this._needRefresh = true;
		Rex.gui.redraw();
	}
	
	updatePosition() {}
	
	inside(x, y) {
		console.error("она не будет вызываться (с) рут");
		return false;
	}
	
	checkSelect(x, y, e) {
		return undefined;
	}
	
	onCheckSelect(x, y) {
		return undefined;
	}
	
	
	reDraw() {
		this.onRedraw();
	}
	
	
	draw() {
		this.onDraw();
	}
	
	onDrag(dragAndDrop) {
		return true;
	}
	
	positioning() {}
	onPositioning() {}
	onDraw() {}
	onRedraw() {}
	onFocused() {}
	onDestroy() {}
	updateStyle() {}
	
	keyDown(event) {}
	keyUp(event) {}
	keyPress(event) {}
	mouseDown(x, y, event) {}
	mouseUp(x, y, event) {}
	mouseMove(x, y, event) {}
	mouseWheel(value) {}
	onMouseDown(x, y, event) {}
	onMouseUp(x, y, event) {}
	onMouseDoubleClick(event) {}
	onMouseMove(x, y, event) {}
	onMouseWheel(value) {}
	
}



class WidgetShoppingBasket extends Widget {
	
	constructor(state) {
		super(state);
		this.sellers = [];
		super.setState(state);
	}
	
	createView() {
		if(this.typeView === "html") {
			this.view = new WidgetShoppingBasketHtml(this);
		}
	}
}

class WidgetShoppingBasketHtml extends WidgetViewHtml {

    constructor(widget) {
        super(widget);

        this._scrollPos = 0;
        this.count = 0;

        this.createDomElement("div");
        this.addClassName("WidgetShoppingBasket");

        this.containerBasket = document.createElement("div");
        this.containerBasket.classList.add("BasketContainer");
        this.htmlElement.appendChild(this.containerBasket);

        this.containerBasket.addEventListener("scroll", function (event) {
            const maxScrollPos = this.containerBasket.scrollHeight - this.containerBasket.clientHeight;
            const currentPos = this.containerBasket.scrollTop;
            Rex.callRpcMethod("Widgets", this.id, this.type, "setScrollPos", [currentPos / maxScrollPos]);
        }.bind(this));
    }

    addElement(type, className, parentElement) {
        let element = document.createElement(type);
        element.classList.add(className);
        parentElement.appendChild(element);
        return element;
    }

    decodeText(text) {
        let decodeText = "";
        try {
            decodeText = decodeURIComponent(escape(window.atob(text)));
        }
        catch(e) {
            console.log(this.widget.type, "setState->", "Text DecodeError!", e, text);
            decodeText = "Error";
        }
        return decodeText;
    }

    onSetState(state) {
        if(state.sellers != null) {
            this.widget.sellers = JSON.parse(JSON.stringify(state.sellers));
            for(let index in state.sellers) {
                let name = "";
                try {
                    name = decodeURIComponent(escape(window.atob(state.sellers[index].name)));
                }
                catch(e) {
                    console.log(this.widget.type, "setState->", "Text DecodeError!", e, state.sellers[index].name);
                    continue;
                }
                this.widget.sellers[index].name = name;

                if(this.widget.sellers[index].products != null) {
                    for(let i in this.widget.sellers[index].products) {
                        this.widget.sellers[index].products[i].name = this.decodeText(state.sellers[index].products[i].name);

                        this.widget.sellers[index].products[i].description = this.decodeText(state.sellers[index].products[i].description);

                        if(this.widget.sellers[index].products[i].delivered != null) {
                            for(let j in this.widget.sellers[index].products[i].delivered) {
                                this.widget.sellers[index].products[i].delivered[j].name = this.decodeText(state.sellers[index].products[i].delivered[j].name);

                                this.widget.sellers[index].products[i].delivered[j].terms = this.decodeText(state.sellers[index].products[i].delivered[j].terms);
                            }
                        }
                    }
                }
            }
            this.createBasket();
            this.scrollPos = this.scrollPos;
        }

        if(state.changeProductsPrice != null) {
            for(let item of state.changeProductsPrice) {
                for(let seller of this.widget.sellers) {
                    if(seller.id !== item.sellerId) continue;
                    for(let product of seller.products) {
                        if(product.id !== item.productId) continue;
                        product.price = item.price;
                        let discPrice = (product.price / 100) * (100 - product.discount);
                        let discPriceSpan = document.getElementById(`${this.id}_${seller.id}_${product.id}_discountPriceSpan`);
                        if(discPriceSpan == null) continue;
                        discPriceSpan.innerText = discPrice.toLocaleString() + " руб.";

                        let priceWithoutDiscountDiv = document.getElementById(`${this.id}_${seller.id}_${product.id}_PriceWithoutDiscountDiv`);
                        if(priceWithoutDiscountDiv == null) continue;
                        priceWithoutDiscountDiv.innerText = product.price.toLocaleString() + " руб./шт.";

                        this.changeResultPriceSeller(seller);
                    }
                }
            }
            this.changeResultPrice();
        }
        if(state.changesDeliveredPrice != null) {
            for(let item of state.changesDeliveredPrice) {
                for(let seller of this.widget.sellers) {
                    if(seller.id !== item.sellerId) continue;
                    for(let product of seller.products) {
                        if(product.id !== item.productId) continue;
                        for(let delivered of product.delivered) {
                            if(delivered.id !== item.deliveredId) continue;
                            delivered.price = item.price;

                            if(product.currentDeliveredId !== item.deliveredId) continue;

                            let deliveredPriceDiv = document.getElementById(`${this.id}_${seller.id}_${product.id}_SellerDeliveredProductPriceDiv`);
                            if(deliveredPriceDiv == null) continue;
                            deliveredPriceDiv.innerText = delivered.price === 0 ? "Бесплатная доставка" : delivered.price.toLocaleString() + " руб.";

                            this.changeResultPriceSeller(seller);
                        }
                    }
                }
            }
            this.changeResultPrice();
        }
        if(state.changeDeleteDelivered != null) {
            for(let item of state.changeDeleteDelivered) {
                for(let i = 0; i < this.widget.sellers.length; ++i) {
                    let seller = this.widget.sellers[i];
                    if(seller.id !== item.sellerId) continue;
                    for(let j = 0; j < seller.products.length; ++j) {
                        let product = seller.products[j];
                        if(product.id !== item.productId) continue;
                        for(let k = 0; k < product.delivered.length; ++k) {
                            let delivered = product.delivered[k];
                            if(delivered.id !== item.deliveredId) continue;
                            if(product.currentDeliveredId === item.deliveredId) {
                                if(i === 0) product.currentDeliveredId = product.delivered[1].id;
                                else product.currentDeliveredId = product.delivered[0].id;
                            }

                            product.delivered.splice(k, 1);
                            break;
                        }

                        let deliveredContainerDiv = document.getElementById(`${this.id}_${seller.id}_${product.id}_SellerDeliveredProductContainerDiv`);
                        if(deliveredContainerDiv == null) continue;
                        while(deliveredContainerDiv.childNodes.length)
                            deliveredContainerDiv.removeChild(deliveredContainerDiv.firstChild);

                        let deliveredSelect = this.addElement("select", "SellerDeliveredProductSelect", deliveredContainerDiv);
                        deliveredSelect.id = `${seller.id}_${product.id}_SellerDeliveredProductSelect`;

                        let textTerms = "";
                        let priceDelivered = 0;
                        for(let k = 0; k < product.delivered.length; ++k) {
                            let delivered = product.delivered[k];
                            let deliveredOption = this.addElement("option", "SellerDeliveredProductOption", deliveredSelect);
                            deliveredOption.value = delivered.name;
                            deliveredOption.innerText = delivered.name;
                            deliveredOption.id = delivered.id;

                            if(delivered.id == product.currentDeliveredId) {
                                deliveredSelect.selectedIndex = k;
                                textTerms = delivered.terms;
                                priceDelivered = delivered.price;
                            }
                        }

                        let deliveredPriceDiv = this.addElement("div", "SellerDeliveredProductPriceDiv", deliveredContainerDiv);
                        deliveredPriceDiv.id = `${this.id}_${seller.id}_${product.id}_SellerDeliveredProductPriceDiv`;
                        deliveredPriceDiv.innerText = priceDelivered === 0 ? "Бесплатная доставка" : priceDelivered.toLocaleString() + " руб.";

                        let deliveredTermsDiv = this.addElement("div", "SellerDeliveredProductTermsDiv", deliveredContainerDiv);
                        deliveredTermsDiv.innerText = textTerms;

                        deliveredSelect.addEventListener("change", function (e) {
                            let newSelectedIndex = Number.parseInt(e.srcElement.selectedIndex);
                            let deliveredId = e.srcElement[newSelectedIndex].id;

                            let delivered;
                            for(let l = 0; l < product.delivered.length; ++l) {
                                if(product.delivered[l].id == deliveredId) {
                                    delivered = product.delivered[l];
                                    break;
                                }
                            }

                            deliveredPriceDiv.innerText = delivered.price === 0 ? "Бесплатная доставка" : delivered.price.toLocaleString() + " руб.";
                            deliveredTermsDiv.innerText = delivered.terms;

                            this.widget.sellers[i].products[j].currentDeliveredId = deliveredId;
                            product.currentDeliveredId = deliveredId;

                            this.changeResultPriceSeller(seller);
                            this.changeResultPrice();

                            Rex.callRpcMethod('Widgets', this.id, this.type, 'changeDelivered', [seller.id, product.id, deliveredId]);
                        }.bind(this));

                        this.changeResultPriceSeller(seller);
                    }
                }
            }
            this.changeResultPrice();
        }
    }

    onInit() {
        this.scrollPos = 0;
    }

    createBasket() {
        if(this.containerBasket != null) {
            while(this.containerBasket.childNodes.length)
                this.containerBasket.removeChild(this.containerBasket.firstChild);
        }
        if(this.widget.sellers == null || this.widget.sellers.length === 0) return;
        this.count = 0;

        for(let i = 0; i < this.widget.sellers.length; ++i) {
            let seller = this.widget.sellers[i];
            if(seller == null || seller.products == null || seller.products.length === 0) continue;


            //seller
            this.createSeller(seller, i);

            //------------------- end seller
        }

        // result
        this.createResult();

        //------------------------ end result
    }

    createSeller(seller, i) {
        let sellerDiv = this.addElement("div", "SellerDiv", this.containerBasket);

        //seller header
        this.createSellerHeader(seller, sellerDiv);
        //----------------- end seller header

        //column seller
        this.createColumnSeller(sellerDiv);
        //------------------ end column seller

        for(let j = 0; j < seller.products.length; ++j) {
            let product = seller.products[j];
            if(product == null) continue;

            //product            
            this.createProduct(seller, product, sellerDiv, i, j);
            //-------------------- end product
            this.count++;
        }

        //result seller
        this.createResultSeller(seller, sellerDiv);

        //------------------- end result seller
    }

    createSellerHeader(seller, sellerDiv) {
        let sellerHeaderDiv = this.addElement("div", "SellerHeaderDiv", sellerDiv);

        let sellerHeaderNameContDiv = this.addElement("div", "SellerHeaderNameContainerDiv", sellerHeaderDiv);

        let sellerHeaderNameTDiv = this.addElement("div", "SellerHeaderNameTDiv", sellerHeaderNameContDiv);
        sellerHeaderNameTDiv.innerText = "Продавец: ";

        let sellerHeaderNameDiv = this.addElement("div", "SellerHeaderNameDiv", sellerHeaderNameContDiv);
        sellerHeaderNameDiv.innerText = seller.name;

        sellerHeaderNameDiv.addEventListener("mouseup", (e) => {
            if(e.button !== 0) return;
            Rex.callRpcMethod('Widgets', this.id, this.type, 'mouseUpSeller', [seller.id]);
        });

        let writeToSellerContDiv = this.addElement("div", "WriteToSellerDivContainerDiv", sellerHeaderDiv);

        let writeToSellerBtnDiv = this.addElement("div", "HeaderWriteToSellerBtnDiv", writeToSellerContDiv);
        writeToSellerBtnDiv.innerText = "mail";

        let writeToSellerDiv = this.addElement("div", "HeaderWriteToSellerDiv", writeToSellerContDiv);
        writeToSellerDiv.innerText = "Написать продавцу!";

        writeToSellerContDiv.addEventListener("mouseup", (e) => {
            if(e.button !== 0) return;
            Rex.callRpcMethod('Widgets', this.id, this.type, 'mouseUpWriteToSeller', [seller.id]);
        });
    }

    createColumnSeller(sellerDiv) {
        let columnContainerDiv = this.addElement("div", "ColumnContainerDiv", sellerDiv);

        let nameProductTDiv = this.addElement("div", "SellerNameProductTDiv", columnContainerDiv);
        nameProductTDiv.innerText = "Наименование товара и описание";

        let countTDiv = this.addElement("div", "SellerCountProductTDiv", columnContainerDiv);
        countTDiv.innerText = "Количество";

        let priceTDiv = this.addElement("div", "SellerPriceProductTDiv", columnContainerDiv);
        priceTDiv.innerText = "Цена";

        let deliveredTDiv = this.addElement("div", "SellerDeliveredProductTDiv", columnContainerDiv);
        deliveredTDiv.innerText = "Условия доставки";
    }

    createProduct(seller, product, sellerDiv, i, j) {
        let productDiv = this.addElement("div", "ProductDiv", sellerDiv);

        //название и изображение
        this.createNameAndImageProduct(seller, product, productDiv);

        //количество
        this.createCountProduct(seller, product, productDiv, i, j);

        //стоимость
        this.createPriceProduct(seller, product, productDiv);

        //условия доставки
        this.createProductDelivered(seller, product, productDiv, i, j);

        //кнопка удаления
        let removeBtnContainerDiv = this.addElement("div", "SellerRemoveProductContainerDiv", productDiv);

        let removeBtnDiv = this.addElement("div", "RemoveBtnDiv", removeBtnContainerDiv);
        removeBtnDiv.innerText = "Удалить";

        removeBtnDiv.addEventListener("mouseup", (e) => {
            if(e.button !== 0) return;
            Rex.callRpcMethod('Widgets', this.id, this.type, 'mouseUpRemoveProduct', [seller.id, product.id]);
        });
    }

    createNameAndImageProduct(seller, product, productDiv) {
        let nameProductContainerDiv = this.addElement("div", "SellerNameProductContainerDiv", productDiv);

        let imgProductDiv = this.addElement("div", "ImgProductDiv", nameProductContainerDiv);
        imgProductDiv.style.backgroundImage = `url(${product.image})`;

        let nameAndDescProductDiv = this.addElement("div", "NameAndDescriptionProductDiv", nameProductContainerDiv);

        let nameProductDiv = this.addElement("div", "NameProductDiv", nameAndDescProductDiv);
        nameProductDiv.innerText = product.name;

        let descriptionProductDiv = this.addElement("div", "DescriptionProductDiv", nameAndDescProductDiv);
        descriptionProductDiv.innerText = product.description;

        imgProductDiv.addEventListener("mouseup", (e) => {
            if(e.button !== 0) return;
            Rex.callRpcMethod('Widgets', this.id, this.type, 'mouseUpProduct', [seller.id, product.id]);
        });

        nameProductDiv.addEventListener("mouseup", (e) => {
            if(e.button !== 0) return;
            Rex.callRpcMethod('Widgets', this.id, this.type, 'mouseUpProduct', [seller.id, product.id]);
        });
    }

    createCountProduct(seller, product, productDiv, i, j) {
        let countContainerDiv = this.addElement("div", "SellerCountProductContainerDiv", productDiv);

        let countProductSpin = this.addElement("input", "CountProductInput", countContainerDiv);
        countProductSpin.type = "number";
        countProductSpin.required = true;
        countProductSpin.step = 1;
        countProductSpin.min = 0;
        countProductSpin.max = product.maxCount;
        countProductSpin.value = product.count;

        let countTDiv = this.addElement("div", "CountProductTDiv", countContainerDiv);
        countTDiv.innerText = "шт.";

        countProductSpin.addEventListener("change", function (e) {
            let newCount = Number.parseInt(e.srcElement.value);
            if(newCount < 0) {
                countProductSpin.value = 0;
                newCount = 0;
            }
            if(newCount > product.maxCount) {
                countProductSpin.value = product.maxCount;
                newCount = product.maxCount;
            }

            this.widget.sellers[i].products[j].count = newCount;
            // seller.products[j].count = newCount;
            product.count = newCount;
            this.changeResultPriceSeller(seller);
            this.changeResultPrice();

            Rex.callRpcMethod('Widgets', this.id, this.type, 'changeProductCount', [seller.id, product.id, newCount]);
        }.bind(this));
    }

    createPriceProduct(seller, product, productDiv) {
        let priceContainerDiv = this.addElement("div", "SellerPriceProductContainerDiv", productDiv);

        let priceProductDiv = this.addElement("div", "PriceProductDiv", priceContainerDiv);

        let discPrice = (product.price / 100) * (100 - product.discount);

        let priceP = document.createElement("span");
        priceP.id = `${this.id}_${seller.id}_${product.id}_discountPriceSpan`;
        priceP.innerText = discPrice.toLocaleString() + " руб.";
        priceP.style.fontSize = "16px";
        priceP.style.fontWeight = "bold";
        priceProductDiv.appendChild(priceP);

        let priceUnitP = this.addElement("span", "PriceUnitP", priceProductDiv);
        priceUnitP.innerText = "/шт.";

        let priceWithoutDiscountDiv = this.addElement("div", "PriceWithoutDiscountDiv", priceContainerDiv);
        priceWithoutDiscountDiv.id = `${this.id}_${seller.id}_${product.id}_PriceWithoutDiscountDiv`;
        priceWithoutDiscountDiv.innerText = product.price.toLocaleString() + " руб./шт.";

        let discountDiv = this.addElement("div", "DiscountDiv", priceContainerDiv);
        discountDiv.innerText = product.discount + " % OFF";
    }

    createProductDelivered(seller, product, productDiv, i, j) {
        let deliveredContainerDiv = this.addElement("div", "SellerDeliveredProductContainerDiv", productDiv);
        deliveredContainerDiv.id = `${this.id}_${seller.id}_${product.id}_SellerDeliveredProductContainerDiv`;

        let deliveredSelect = this.addElement("select", "SellerDeliveredProductSelect", deliveredContainerDiv);
        deliveredSelect.id = `${seller.id}_${product.id}_SellerDeliveredProductSelect`;

        let textTerms = "";
        let priceDelivered = 0;
        for(let k = 0; k < product.delivered.length; ++k) {
            let delivered = product.delivered[k];
            let deliveredOption = this.addElement("option", "SellerDeliveredProductOption", deliveredSelect);
            deliveredOption.value = delivered.name;
            deliveredOption.innerText = delivered.name;
            deliveredOption.id = delivered.id;

            if(delivered.id == product.currentDeliveredId) {
                deliveredSelect.selectedIndex = k;
                textTerms = delivered.terms;
                priceDelivered = delivered.price;
            }
        }

        let deliveredPriceDiv = this.addElement("div", "SellerDeliveredProductPriceDiv", deliveredContainerDiv);
        deliveredPriceDiv.id = `${this.id}_${seller.id}_${product.id}_SellerDeliveredProductPriceDiv`;
        deliveredPriceDiv.innerText = priceDelivered === 0 ? "Бесплатная доставка" : priceDelivered.toLocaleString() + " руб.";

        let deliveredTermsDiv = this.addElement("div", "SellerDeliveredProductTermsDiv", deliveredContainerDiv);
        deliveredTermsDiv.innerText = textTerms;

        deliveredSelect.addEventListener("change", function (e) {
            let newSelectedIndex = Number.parseInt(e.srcElement.selectedIndex);
            let deliveredId = e.srcElement[newSelectedIndex].id;

            let delivered;
            for(let l = 0; l < product.delivered.length; ++l) {
                if(product.delivered[l].id == deliveredId) {
                    delivered = product.delivered[l];
                    break;
                }
            }

            deliveredPriceDiv.innerText = delivered.price === 0 ? "Бесплатная доставка" : delivered.price.toLocaleString() + " руб.";
            deliveredTermsDiv.innerText = delivered.terms;

            this.widget.sellers[i].products[j].currentDeliveredId = deliveredId;
            product.currentDeliveredId = deliveredId;

            this.changeResultPriceSeller(seller);
            this.changeResultPrice();

            Rex.callRpcMethod('Widgets', this.id, this.type, 'changeDelivered', [seller.id, product.id, deliveredId]);
        }.bind(this));
    }

    createResultSeller(seller, sellerDiv) {
        let resultCostSeller = this.getCostOfAllGoodsSeller(seller);

        let resultDiv = this.addElement("div", "SellerResultDiv", sellerDiv);

        let resultLeftDiv = this.addElement("div", "SellerResultLeftDiv", resultDiv);

        let resultRightDiv = this.addElement("div", "SellerResultRightDiv", resultDiv);

        // result price seller
        this.createResultCostSeller(seller, resultRightDiv, resultCostSeller);
        //----------------- end result price seller

        let costResultDiv = this.addElement("div", "SellerResultPriceDiv", resultRightDiv);

        let costResultTSpan = this.addElement("span", "SellerResultSpan", costResultDiv);
        costResultTSpan.innerText = "Общая стоимость:";

        let costResultSpan = this.addElement("span", "SellerFinalResultSpan", costResultDiv);
        costResultSpan.id = `${this.id}_${seller.id}_SellerFinalResultSpan`;
        costResultSpan.innerText = resultCostSeller.result.toLocaleString() + " руб.";

        let orderFromSellerBtnDiv = this.addElement("div", "OrderFromSellerBtnDiv", resultRightDiv);

        let orderFromSellerBtn = this.addElement("div", "OrderFromSellerBtn", orderFromSellerBtnDiv);
        orderFromSellerBtn.innerText = "Заказать у этого продавца";

        orderFromSellerBtn.addEventListener("mouseup", (e) => {
            if(e.button !== 0) return;
            Rex.callRpcMethod('Widgets', this.id, this.type, 'mouseUpPlaceOrderWithSeller', [seller.id]);
        });
    }

    createResultCostSeller(seller, resultRightDiv, resultCostSeller) {
        let resultPriceDiv = this.addElement("div", "SellerResultPriceDiv", resultRightDiv);

        let costDiv = this.addElement("div", "SellerCostDiv", resultPriceDiv);

        let costTSpan = this.addElement("span", "SellerResultSpan", costDiv);
        costTSpan.innerText = "Стоимость:";

        let costSpan = this.addElement("span", "SellerResultSpan", costDiv);
        costSpan.id = `${this.id}_${seller.id}_SellerResultSpan`;
        costSpan.innerText = resultCostSeller.cost.toLocaleString() + " руб.";
        costSpan.style.fontSize = "13px";
        costSpan.style.fontWeight = "bold";
        costSpan.style.opacity = "1";

        let costDeliveredDiv = this.addElement("div", "SellerCostDeliveredDiv", resultPriceDiv);

        let costDelTSpan = this.addElement("span", "SellerResultSpan", costDeliveredDiv);
        costDelTSpan.innerText = "Стоимость доставки:";

        let costDelSpan = this.addElement("span", "SellerResultSpan", costDeliveredDiv);
        costDelSpan.id = `${this.id}_${seller.id}_SellerCostDeliveredDiv`;
        costDelSpan.innerText = resultCostSeller.costDelivered.toLocaleString() + " руб.";
        costDelSpan.style.fontSize = "13px";
        costDelSpan.style.fontWeight = "bold";
        costDelSpan.style.opacity = "1";

        let economyDiv = this.addElement("div", "SellerEconomyDiv", resultPriceDiv);
        economyDiv.innerText = "(Вы экономите: " + resultCostSeller.economy.toLocaleString() + " руб.)";
        economyDiv.id = `${this.id}_${seller.id}_SellerEconomyDiv`;
    }

    createResult() {
        let resultAllDiv = this.addElement("div", "SellerResultAllDiv", this.containerBasket);

        let resultLeftDiv = this.addElement("div", "SellerResultAllLeftDiv", resultAllDiv);

        let removeAllDiv = this.addElement("div", "RemoveAllBtnDiv", resultLeftDiv);
        removeAllDiv.innerText = "Удалить все";

        removeAllDiv.addEventListener("mouseup", (e) => {
            if(e.button !== 0) return;
            Rex.callRpcMethod('Widgets', this.id, this.type, 'mouseUpRemoveAll', []);
        });

        let resultRightDiv = this.addElement("div", "SellerResultAllRightDiv", resultAllDiv);

        this.createResultCost(resultRightDiv);

        let orderBtnDiv = this.addElement("div", "OrderFromSellerBtnDiv", resultRightDiv);

        let orderBtn = this.addElement("div", "OrderBtn", orderBtnDiv);
        orderBtn.innerText = "Оформить заказ";

        orderBtnDiv.addEventListener("mouseup", (e) => {
            if(e.button !== 0) return;
            Rex.callRpcMethod('Widgets', this.id, this.type, 'mouseUpPlaceOrder', []);
        });
    }

    createResultCost(resultRightDiv) {
        let resultCostAll = this.getCostOfAllSellers();

        let resCostDiv = this.addElement("div", "SellerResultAllCostDiv", resultRightDiv);

        let resCostTSpan = this.addElement("span", "SellerResultSpan", resCostDiv);
        resCostTSpan.innerText = "Стоимость (" + this.count.toLocaleString() + " товара(ов)): ";

        let resCostSpan = this.addElement("span", "SellerResultSpan", resCostDiv);
        resCostSpan.id = `${this.id}_ResultCostSpan`;
        resCostSpan.innerText = resultCostAll.cost.toLocaleString() + " руб.";
        resCostSpan.style.fontSize = "14px";
        resCostSpan.style.fontWeight = "bold";
        resCostSpan.style.opacity = "1";

        let resCostDeliveredDiv = this.addElement("div", "SellerResultAllCostDiv", resultRightDiv);

        let resCostDeliveredTSpan = this.addElement("span", "SellerResultSpan", resCostDeliveredDiv);
        resCostDeliveredTSpan.innerText = "Стоимость доставки: ";

        let resCostDeliveredSpan = this.addElement("span", "SellerResultSpan", resCostDeliveredDiv);
        resCostDeliveredSpan.id = `${this.id}_ResultCostDeliveredSpan`;
        resCostDeliveredSpan.innerText = resultCostAll.costDelivered.toLocaleString() + " руб.";
        resCostDeliveredSpan.style.fontSize = "14px";
        resCostDeliveredSpan.style.fontWeight = "bold";
        resCostDeliveredSpan.style.opacity = "1";

        let resEconomyDiv = this.addElement("div", "SellerResultAllCostDiv", resultRightDiv);

        let resEconomyTSpan = this.addElement("span", "SellerResultSpan", resEconomyDiv);
        resEconomyTSpan.innerText = "Скидки продавца: ";

        let resEconomySpan = this.addElement("span", "SellerResultSpan", resEconomyDiv);
        resEconomySpan.id = `${this.id}_ResultEconomySpan`;
        resEconomySpan.innerText = "-" + resultCostAll.economy.toLocaleString() + " руб.";
        resEconomySpan.style.fontSize = "14px";
        resEconomySpan.style.fontWeight = "bold";
        resEconomySpan.style.opacity = "1";

        let resAllDiv = this.addElement("div", "SellerResultAllCostDiv", resultRightDiv);

        let resAllTSpan = this.addElement("span", "SellerResultSpan", resAllDiv);
        resAllTSpan.innerText = "Общая сумма: ";
        resAllTSpan.style.fontSize = "15px";

        let resAllSpan = this.addElement("span", "SellerFinalResultSpan", resAllDiv);
        resAllSpan.id = `${this.id}_ResultAllSpan`;
        resAllSpan.innerText = resultCostAll.result.toLocaleString() + " руб.";
        resAllSpan.style.fontSize = "16px";
        resAllSpan.style.fontWeight = "bold";
        resAllSpan.style.opacity = "1";
    }

    set scrollPos(value) {
        if(value < 0 || value > 1 || this.containerBasket == null) return;
        this._scrollPos = value;
        const maxScrollPos = this.containerBasket.scrollHeight - this.containerBasket.clientHeight;
        this.containerBasket.scrollTop = value * maxScrollPos;
    }

    get scrollPos() {
        return this._scrollPos;
    }

    changeResultPriceSeller(seller) {
        let result = this.getCostOfAllGoodsSeller(seller);

        let elemPrice = document.getElementById(`${this.id}_${seller.id}_SellerResultSpan`);
        if(elemPrice != null) {
            elemPrice.innerText = result.cost.toLocaleString() + " руб.";
        }

        let elemEconomy = document.getElementById(`${this.id}_${seller.id}_SellerEconomyDiv`);
        if(elemEconomy != null) {
            elemEconomy.innerText = "(Вы экономите: " + result.economy.toLocaleString() + " руб.)";
        }

        let elemPriceDel = document.getElementById(`${this.id}_${seller.id}_SellerCostDeliveredDiv`);
        if(elemPriceDel != null) {
            elemPriceDel.innerText = result.costDelivered.toLocaleString() + " руб.";
        }

        let elemResultSellerPrice = document.getElementById(`${this.id}_${seller.id}_SellerFinalResultSpan`);
        if(elemResultSellerPrice != null) {
            elemResultSellerPrice.innerText = result.result.toLocaleString() + " руб.";
        }
    }

    changeResultPrice() {
        let resultAll = this.getCostOfAllSellers();

        let elemResultPrice = document.getElementById(`${this.id}_ResultCostSpan`);
        if(elemResultPrice != null) {
            elemResultPrice.innerText = resultAll.cost.toLocaleString() + " руб.";
        }

        let elemResultPriceDel = document.getElementById(`${this.id}_ResultCostDeliveredSpan`);
        if(elemResultPriceDel != null) {
            elemResultPriceDel.innerText = resultAll.costDelivered.toLocaleString() + " руб.";
        }

        let elemResultEconomy = document.getElementById(`${this.id}_ResultEconomySpan`);
        if(elemResultEconomy != null) {
            elemResultEconomy.innerText = "-" + resultAll.economy.toLocaleString() + " руб.";
        }

        let elemResultResult = document.getElementById(`${this.id}_ResultAllSpan`);
        if(elemResultResult != null) {
            elemResultResult.innerText = resultAll.result.toLocaleString() + " руб.";
        }
    }

    getCostOfAllGoodsSeller(seller) {
        let result = {};
        let cost = 0;
        let costDelivered = 0;
        let economy = 0;
        if(seller == null || seller.products == null || seller.products.length === 0) {
            result = {
                cost: 0,
                costDelivered: 0,
                economy: 0,
                result: 0
            };
            return result;
        }
        for(let i = 0; i < seller.products.length; ++i) {
            let product = seller.products[i];
            if(product == null) continue;
            let discPrice = (product.price / 100) * (100 - product.discount);
            cost += discPrice * product.count;
            economy += (product.price - discPrice) * product.count;

            for(let k = 0; k < product.delivered.length; ++k) {
                let delivered = product.delivered[k];
                if(delivered.id == product.currentDeliveredId) {
                    if(product.count !== 0)
                        costDelivered += delivered.price;
                    break;
                }
            }
        }
        let res = costDelivered + cost;
        result = {
            cost: cost,
            costDelivered: costDelivered,
            economy: economy,
            result: res
        };
        return result;
    }

    getCostOfAllSellers() {
        let result = {};
        let cost = 0;
        let costDelivered = 0;
        let economy = 0;
        if(this.widget.sellers == null || this.widget.sellers.length === 0) {
            result = {
                cost: 0,
                costDelivered: 0,
                economy: 0,
                result: 0
            };
            return result;
        }
        for(let i = 0; i < this.widget.sellers.length; ++i) {
            let seller = this.widget.sellers[i];
            if(seller == null || seller.products == null || seller.products.length === 0) continue;
            for(let j = 0; j < seller.products.length; ++j) {
                let product = seller.products[j];
                if(product == null) continue;
                let discPrice = (product.price / 100) * (100 - product.discount);
                cost += discPrice * product.count;
                economy += (product.price - discPrice) * product.count;

                for(let k = 0; k < product.delivered.length; ++k) {
                    let delivered = product.delivered[k];
                    if(delivered.id == product.currentDeliveredId) {
                        if(product.count !== 0)
                            costDelivered += delivered.price;
                        break;
                    }
                }
            }
        }
        let res = costDelivered + cost;
        result = {
            cost: cost,
            costDelivered: costDelivered,
            economy: economy,
            result: res
        };
        return result;
    }
}