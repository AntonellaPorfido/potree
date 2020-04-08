
export const ClassificationScheme = {

	DEFAULT: {
		0:       { visible: true, name: '<span data-i18n="classification.never"></span>'  , color: [0.5,  0.5,  0.5,  1.0] },
		1:       { visible: true, name: '<span data-i18n="classification.unclassified"></span>'      , color: [0.5,  0.5,  0.5,  1.0] },
		2:       { visible: true, name: '<span data-i18n="classification.ground"></span>'            , color: [0.63, 0.32, 0.18, 1.0] },
		3:       { visible: true, name: '<span data-i18n="classification.low_vegetation"></span>'    , color: [0.0,  1.0,  0.0,  1.0] },
		4:       { visible: true, name: '<span data-i18n="classification.medium_vegetation"></span>' , color: [0.0,  0.8,  0.0,  1.0] },
		5:       { visible: true, name: '<span data-i18n="classification.high_vegetation"></span>'   , color: [0.0,  0.6,  0.0,  1.0] },
		6:       { visible: true, name: '<span data-i18n="classification.building"></span>'          , color: [1.0,  0.66, 0.0,  1.0] },
		7:       { visible: true, name: '<span data-i18n="classification.low_point(noise)"></span>'  , color: [1.0,  0.0,  1.0,  1.0] },
		8:       { visible: true, name: '<span data-i18n="classification.key-point"></span>'         , color: [1.0,  0.0,  0.0,  1.0] },
		9:       { visible: true, name: '<span data-i18n="classification.water"></span>'             , color: [0.0,  0.0,  1.0,  1.0] },
		12:      { visible: true, name: '<span data-i18n="classification.overlap"></span>'           , color: [1.0,  1.0,  0.0,  1.0] },
		DEFAULT: { visible: true, name: '<span data-i18n="classification.default"></span>'           , color: [0.3,  0.6,  0.6,  0.5] },
	}
};

Object.defineProperty(ClassificationScheme, 'RANDOM', {
	get: function() { 

		let scheme = {};

		for(let i = 0; i <= 255; i++){
			scheme[i] = new THREE.Vector4(Math.random(), Math.random(), Math.random());
		}

		scheme["DEFAULT"] = new THREE.Vector4(Math.random(), Math.random(), Math.random());

		return scheme;
	}
});