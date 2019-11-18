window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Audio: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b4c4rLWqdEr5nUpEGv2d+q", "Audio");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Props_1 = require("./kernels/Props");
    var Log_1 = require("./Log");
    var Caches_1 = require("./Caches");
    var Utils_1 = require("./Utils");
    var Audio = function(_super) {
      __extends(Audio, _super);
      function Audio() {
        var _this = _super.call(this) || this;
        Audio_1.xSet("bgmVolume", Caches_1.default.getFloat("bgmVolume", 1));
        Audio_1.xSet("sfxVolume", Caches_1.default.getFloat("sfxVolume", 1));
        Log_1.default.info("\u521d\u59cb\u5316\u58f0\u97f3\u7ba1\u7406\u6210\u529f!");
        return _this;
      }
      Audio_1 = Audio;
      Audio.playBGM = function(clip, scale) {
        void 0 === scale && (scale = 1);
        if (!clip || 0 == clip.length) return;
        Audio_1.stopBGM();
        var vol = Audio_1.xGet("bgmVolume");
        vol *= scale;
        if ("string" != typeof clip) {
          Audio_1.bgmHandle = cc.audioEngine.play(clip, true, vol);
          return;
        }
        vol > .01 && cc.loader.loadRes(clip, cc.AudioClip, function(err, clip) {
          Audio_1.bgmHandle = cc.audioEngine.play(clip, true, vol);
        });
      };
      Audio.stopBGM = function() {
        if (-1 != Audio_1.bgmHandle) {
          cc.audioEngine.stop(Audio_1.bgmHandle);
          Audio_1.bgmHandle = -1;
        }
      };
      Audio.stopSFX = function(_voiceID) {
        cc.audioEngine.stop(_voiceID);
      };
      Audio.recoverBGM = function() {
        Audio_1.setBGMVolume(1);
      };
      Audio.slientBgm = function() {
        Audio_1.setBGMVolume(.01);
      };
      Audio.playSFX = function(path, loop) {
        void 0 === loop && (loop = false);
        return __awaiter(this, void 0, void 0, function() {
          var vol_1, vol, clip_1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (!path || 0 == path.length) return [ 2 ];
              Log_1.default.info("\u64ad\u653e\u97f3\u6548:", path);
              if ("string" != typeof path) {
                vol_1 = Audio_1.xGet("sfxVolume");
                if (vol_1 > 0) return [ 2, new Promise(function(resolve) {
                  resolve(cc.audioEngine.play(path, loop, vol_1));
                }) ];
                return [ 2 ];
              }
              vol = Audio_1.xGet("sfxVolume");
              if (!(vol > 0)) return [ 3, 2 ];
              return [ 4, Utils_1.default.loadAudioClip(path) ];

             case 1:
              clip_1 = _a.sent();
              return [ 2, new Promise(function(resolve) {
                resolve(cc.audioEngine.play(clip_1, loop, vol));
              }) ];

             case 2:
              return [ 2 ];
            }
          });
        });
      };
      Audio.slientSFX = function() {
        Audio_1.setSFXVolume(0);
      };
      Audio.recoverSFX = function() {
        Audio_1.setSFXVolume(1);
      };
      Audio.setBGMVolume = function(v) {
        Caches_1.default.set("bgmVolume", v);
        Audio_1.xSet("bgmVolume", v);
        -1 != Audio_1.bgmHandle && cc.audioEngine.setVolume(Audio_1.bgmHandle, v);
      };
      Audio.setSFXVolume = function(v) {
        Caches_1.default.set("sfxVolume", v);
        Audio_1.xSet("sfxVolume", v);
      };
      Audio.pauseAll = function() {
        Log_1.default.info("\u58f0\u97f3\u6682\u505c");
        cc.audioEngine.pauseAll();
      };
      Audio.resumeAll = function() {
        Log_1.default.info("\u58f0\u97f3\u6062\u590d");
        cc.audioEngine.resumeAll();
      };
      Audio.stopAll = function() {
        Log_1.default.info("\u58f0\u97f3\u5173\u95ed");
        cc.audioEngine.stopAll();
      };
      Audio.stopAllEffects = function() {
        Log_1.default.info("\u97f3\u6548\u5173\u95ed");
        cc.audioEngine.stopAllEffects();
      };
      var Audio_1;
      Audio.bgmHandle = -1;
      Audio = Audio_1 = __decorate([ ccclass ], Audio);
      return Audio;
    }(Props_1.default);
    exports.default = Audio;
    cc._RF.pop();
  }, {
    "./Caches": "Caches",
    "./Log": "Log",
    "./Utils": "Utils",
    "./kernels/Props": "Props"
  } ],
  BulletProperty: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b3d7fwL94xMQJOlsvcy59JP", "BulletProperty");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BulletProperty = function() {
      function BulletProperty() {
        this.type = 1;
        this.speed = 1e3;
        this.damage_fix = 2e4;
        this.radius = 0;
        this.round = 0;
        this.round_time = 0;
        this.speed_fix = 0;
        this.speed_fix_time = 0;
        this.remarks = "";
      }
      return BulletProperty;
    }();
    exports.default = BulletProperty;
    cc._RF.pop();
  }, {} ],
  Bullet: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fc866EjBCVA2o/a+aqj+xdS", "Bullet");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var BulletProperty_1 = require("../Property/BulletProperty");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Bullet = function(_super) {
      __extends(Bullet, _super);
      function Bullet() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.wait = true;
        _this.localtype = 1;
        _this.damage = 0;
        return _this;
      }
      Bullet.prototype.onLoad = function() {
        console.log("bullet start");
        this.curr = new BulletProperty_1.default();
      };
      Bullet.prototype.start = function() {
        console.log("bullet start");
      };
      Bullet.prototype.getCD = function(type) {
        var localbullet = cc.sys.localStorage.getItem("bullet");
        var bullet = JSON.parse(localbullet);
        for (var i = 0; i < bullet.length; i++) {
          var bull = bullet[i];
          if (bull.type == String(type)) return Number(bull.cd) / 1e3;
        }
      };
      Bullet.prototype.getDamage = function() {
        return this.damage;
      };
      Bullet.prototype.setDamage = function(atk, level) {
        this.damage = atk * (this.curr.damage_fix / 1e4) * level;
      };
      Bullet.prototype.getWaitState = function() {
        return this.wait;
      };
      Bullet.prototype.setType = function(type) {
        console.log("setType == " + type);
        this.localtype = type;
        this.CheckLocal();
      };
      Bullet.prototype.CheckLocal = function() {
        var _this = this;
        var localbullet = cc.sys.localStorage.getItem("bullet");
        var bullet = JSON.parse(localbullet);
        bullet.forEach(function(element) {
          if (element.type == String(_this.localtype)) {
            _this.curr.type = Number(element.type);
            _this.curr.speed = Number(element.speed);
            _this.curr.damage_fix = Number(element.damage_fix);
            _this.curr.radius = Number(element.radius);
            _this.curr.round = Number(element.round);
            _this.curr.round_time = Number(element.round_time);
            _this.curr.speed_fix = Number(element.speed_fix);
            _this.curr.speed_fix_time = Number(element.speed_fix_time);
            _this.curr.remarks = String(element.remarks);
          }
        });
      };
      Bullet.prototype.shoot = function(direction, cd) {
        this.bullet.setAnimation(0, "1", true);
        this.node.opacity = 255;
        this.wait = false;
        var startpos = cc.v2(this.node.x, this.node.y);
        var distance = direction.y;
        var time = distance / this.curr.speed;
        var action = cc.moveBy(time, direction);
        var faO = cc.fadeOut(.1);
        var delay = cc.delayTime(cd - time - .1);
        var callF = cc.callFunc(function() {
          this.wait = true;
          this.node.x = 0;
          this.node.y = 0;
        }, this);
        if (cd / 1e3 >= time + .1) {
          var seqA = cc.sequence([ action, faO, delay, callF ]);
          this.node.runAction(seqA);
        } else {
          var seqA = cc.sequence([ action, faO, callF ]);
          this.node.runAction(seqA);
        }
      };
      Bullet.prototype.onCollisionEnter = function(other, self) {
        this.node.stopAllActions();
        this.wait = true;
        this.bullet.setAnimation(0, "2", false);
        var callF = cc.callFunc(function() {
          this.node.x = 0;
          this.node.y = 0;
          this.node.opacity = 0;
        }.bind(this));
        this.node.runAction(cc.sequence(cc.delayTime(.1), callF));
      };
      Bullet.prototype.onCollisionStay = function(other, self) {};
      Bullet.prototype.onCollisionExit = function(other, self) {};
      __decorate([ property({
        type: sp.Skeleton,
        displayName: "bullet"
      }) ], Bullet.prototype, "bullet", void 0);
      Bullet = __decorate([ ccclass ], Bullet);
      return Bullet;
    }(cc.Component);
    exports.default = Bullet;
    cc._RF.pop();
  }, {
    "../Property/BulletProperty": "BulletProperty"
  } ],
  Caches: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f1544SMU/NO26quJweu+WAK", "Caches");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Log_1 = require("./Log");
    var Caches = function() {
      function Caches() {
        var now = new Date();
        Log_1.default.info("\u542f\u52a8\u65e5\u671f:%s", now.toGMTString());
        Caches.set("date_launch", now.getTime());
        null == Caches.get("bgmusic") && Caches.set("bgmusic", true);
        null == Caches.get("sounds") && Caches.set("sounds", true);
        Log_1.default.info("\u521d\u59cb\u5316\u7f13\u5b58\u7ba1\u7406\u6210\u529f!");
      }
      Caches.prototype.destroy = function() {
        var now = new Date();
        Caches.storage.setItem("date_exit", now.getTime());
        Log_1.default.info("\u5173\u95ed\u65e5\u671f:%s", now.toGMTString());
      };
      Caches.get = function(key, def) {
        void 0 === def && (def = "");
        var value = this.storage.getItem(key);
        value = null == value || "" == value ? def : JSON.parse(value);
        return value;
      };
      Caches.getInt = function(key, def) {
        void 0 === def && (def = 0);
        var value = Caches.storage.getItem(key);
        value = null == value || "" == value ? def : parseInt(value);
        return value;
      };
      Caches.getFloat = function(key, def) {
        void 0 === def && (def = 0);
        var value = Caches.storage.getItem(key);
        if ("string" != typeof value || "" == value) return def;
        return parseFloat(value);
      };
      Caches.set = function(key, value) {
        "object" == typeof value && (value = JSON.stringify(value));
        Caches.storage.setItem(key, value);
        Log_1.default.info("\u7f13\u5b58\u66f4\u65b0:%s -> %s", key, value);
        return true;
      };
      Caches.del = function(key) {
        Caches.storage.removeItem(key);
        Log_1.default.info("\u7f13\u5b58\u5220\u9664:%s", key);
        return true;
      };
      Caches.storage = cc.sys.localStorage;
      return Caches;
    }();
    exports.default = Caches;
    cc._RF.pop();
  }, {
    "./Log": "Log"
  } ],
  ChapterManger: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "22289cV64JOXYvbFdQweb1v", "ChapterManger");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  ConstructionManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b9608RwI5BOir5b+lFmxIQi", "ConstructionManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ConstructionManager = function(_super) {
      __extends(ConstructionManager, _super);
      function ConstructionManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      ConstructionManager.prototype.start = function() {};
      ConstructionManager.prototype.initData = function() {
        var locastage = cc.sys.localStorage.getItem("construction");
        null != locastage || console.log("construction is null");
        this.constructionConfig = JSON.parse(locastage);
      };
      ConstructionManager.prototype.initUpgradeLevel = function(level) {
        var length = this.constructionConfig.length;
        for (var i = 0; i < length; i++) {
          var info = this.constructionConfig[i];
          var num = Number(info.intensify_level);
          if (num == level) {
            this.constructionInfo = info;
            break;
          }
        }
      };
      ConstructionManager.prototype.getConnBasicLevel = function() {
        return Number(this.constructionInfo.construction_level);
      };
      ConstructionManager.prototype.getConnName = function() {
        return this.constructionInfo.name;
      };
      ConstructionManager.prototype.getConnUpgradeCost = function() {
        return Number(this.constructionInfo.upgrade_cost);
      };
      ConstructionManager.prototype.getConnConstructCost = function() {
        return Number(this.constructionInfo.construction_cost);
      };
      __decorate([ property(cc.Label) ], ConstructionManager.prototype, "label", void 0);
      __decorate([ property ], ConstructionManager.prototype, "text", void 0);
      ConstructionManager = __decorate([ ccclass ], ConstructionManager);
      return ConstructionManager;
    }(cc.Component);
    exports.default = ConstructionManager;
    cc._RF.pop();
  }, {} ],
  GameControll: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ba2eaEbtfJIMbzw2r9ing+l", "GameControll");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Utils_1 = require("../common/Utils");
    var TowerManager_1 = require("../Manger/TowerManager");
    var Log_1 = require("../common/Log");
    var Tower_1 = require("../Objects/Tower");
    var Monster_1 = require("../Objects/Monster");
    var Map_1 = require("../Scene/Map");
    var StageManager_1 = require("../Manger/StageManager");
    var ConstructionManager_1 = require("../Manger/ConstructionManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameControll = function(_super) {
      __extends(GameControll, _super);
      function GameControll() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.shootpos = [];
        _this.currlevelpabel = null;
        _this.destorybtn = null;
        _this.upgradeview = null;
        _this.closebtn = null;
        _this.currlevelstr = null;
        _this.resultStr = null;
        _this.basicLevelStr = null;
        _this.buildCostStr = null;
        _this.myGold = null;
        _this.towerContainer = [];
        _this.shootTowerContainer = [];
        _this.freeTowerContainer = [];
        _this.monsterContainer = [];
        _this.unlockContent = 0;
        _this.currlevel = 1;
        _this.currgold = 100;
        _this.autoBuildFlag = false;
        _this.autoMatchFlag = false;
        _this.actiontime = .2;
        _this.canUpdate = false;
        return _this;
      }
      GameControll.prototype.start = function() {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        this.currlevelpabel.opacity = 0;
        this.resultStr.node.opacity = 0;
      };
      GameControll.prototype.update = function(dt) {
        this.canUpdate && this.shootTowerContainer.length > 0 && this.monsterContainer.length > 0 && this.checkCollide();
      };
      GameControll.prototype.startGame = function() {
        var currlevelnum = cc.sys.localStorage.getItem("currlevel");
        null == currlevelnum ? cc.sys.localStorage.setItem("currlevel", "1") : this.currlevel = Number(currlevelnum);
        var currgoldnum = cc.sys.localStorage.getItem("currgold");
        null == currgoldnum ? cc.sys.localStorage.setItem("currgold", "100") : this.currgold = Number(currgoldnum);
        this.myGold.string = String(this.currgold);
        this.towerManager.getComponent(TowerManager_1.default).initData();
        this.stageManager = new StageManager_1.default();
        this.stageManager.initData();
        this.constructManager = new ConstructionManager_1.default();
        this.constructManager.initData();
        var constructionlevel = Number(cc.sys.localStorage.getItem("constructionLevel"));
        this.constructManager.initUpgradeLevel(constructionlevel);
        this.basicLevelStr.string = String(this.constructManager.getConnBasicLevel());
        this.buildCostStr.string = String(this.constructManager.getConnConstructCost());
        this.currlevelstr.string = "\u5f53\u524d\u5173\u5361\uff1a" + String(this.currlevel);
        var fade1 = cc.fadeIn(1);
        var fade2 = cc.fadeOut(1);
        var callF = cc.callFunc(function() {
          this.startNewGame();
        }.bind(this));
        this.currlevelpabel.runAction(cc.sequence(fade1, fade2, callF));
      };
      GameControll.prototype.startNewGame = function() {
        this.towerManager.getComponent(TowerManager_1.default).unlockConn(this.currlevel);
        this.unlockContent = this.towerManager.getComponent(TowerManager_1.default).getlockConnNum(this.currlevel);
        this.loadLevelRoadData(0);
        this.stageManager.initStage(this.currlevel);
        this.createMonster();
        this.canUpdate = true;
        this.autoMatchFlag && this.autoMatch();
        this.autoBuildFlag && this.autoBuild();
      };
      GameControll.prototype.endGame = function(win) {
        if (win) {
          this.currlevel++;
          this.resultStr.string = "\u901a\u5173\u6210\u529f\uff01";
        } else {
          this.currlevel > 1 && this.currlevel--;
          this.resultStr.string = "\u901a\u5173\u5931\u8d25\uff01";
        }
        cc.sys.localStorage.setItem("currlevel", String(this.currlevel));
        this.canUpdate = false;
        this.node.stopAllActions();
        this.shootTowerContainer.forEach(function(tower) {
          tower.stopAllActions();
          tower.getComponent(Tower_1.default).setTrackState(false);
          tower.getComponent(Tower_1.default).stopShoot();
        });
        while (this.monsterContainer.length > 0) {
          var monster = this.monsterContainer[0];
          this.monsterContainer.splice(0, 1);
          monster.removeFromParent(true);
          monster.destroy();
        }
        console.log("\u6e38\u620f\u7ed3\u675f\uff1a\u5f53\u524d\u5173\u5361\u4e3a\uff1a", this.currlevel);
        this.currlevelstr.string = "\u5f53\u524d\u5173\u5361\uff1a" + String(this.currlevel);
        var resultfade1 = cc.fadeIn(1);
        var resultfade2 = cc.fadeOut(1);
        var callF1 = cc.callFunc(function() {
          var fade1 = cc.fadeIn(1);
          var fade2 = cc.fadeOut(1);
          var callF = cc.callFunc(function() {
            this.startNewGame();
          }.bind(this));
          this.currlevelpabel.runAction(cc.sequence(fade1, fade2, callF));
        }.bind(this));
        this.resultStr.node.runAction(cc.sequence(resultfade1, resultfade2, callF1));
      };
      GameControll.prototype.checkresult = function() {
        var deadnum = 0;
        for (var i = 0; i < this.monsterContainer.length; i++) this.monsterContainer[i].getComponent(Monster_1.default).getIsDead() && deadnum++;
        deadnum == this.stageManager.getMonsterNum() && this.endGame(true);
      };
      GameControll.prototype.loadLevelRoadData = function(level) {
        this.map.getComponent(Map_1.default).initRoadData(level);
        var road_set = this.map.getComponent(Map_1.default).getRoadData();
        this.cur_road = road_set[0];
      };
      GameControll.prototype.checkCollide = function() {
        var monstercount = this.monsterContainer.length;
        var towercount = this.shootTowerContainer.length;
        for (var i = 0; i < monstercount; i++) {
          var monster = this.monsterContainer[i];
          if (monster.getComponent(Monster_1.default).getHP() > 0) {
            var pos = monster.position;
            for (var j = 0; j < towercount; j++) {
              var tower = this.shootTowerContainer[j];
              if (false == tower.getComponent(Tower_1.default).getTrackState()) {
                var range = tower.getComponent(Tower_1.default).getRange();
                var towerpos = tower.position;
                var dst = pos.sub(towerpos);
                var len = dst.mag();
                if (len < range) {
                  tower.getComponent(Tower_1.default).autoShoot();
                  tower.getComponent(Tower_1.default).setTrackState(true);
                  this.updateShootPos(tower, monster);
                }
              }
            }
          }
        }
      };
      GameControll.prototype.updateShootPos = function(tower, monster) {
        var rect = monster.getComponent(Monster_1.default).getRect();
        var pos = monster.position;
        var range = tower.getComponent(Tower_1.default).getRange();
        var towerpos = tower.position;
        var dir1 = pos.sub(towerpos);
        var dir = cc.v2(dir1.x, dir1.y);
        var len = dir.mag();
        if (len < range && monster.getComponent(Monster_1.default).getHP() > 0) {
          var comVec = cc.v2(0, 1);
          var radian = dir.signAngle(comVec);
          var degree = cc.misc.radiansToDegrees(radian);
          var rotate = cc.rotateTo(.01, degree);
          var callF = cc.callFunc(function() {
            this.updateShootPos(tower, monster);
          }.bind(this));
          tower.runAction(cc.sequence(rotate, callF));
        } else {
          tower.getComponent(Tower_1.default).stopShoot();
          tower.getComponent(Tower_1.default).setTrackState(false);
        }
      };
      GameControll.prototype.createMonster = function() {
        return __awaiter(this, void 0, void 0, function() {
          var monsternum, delay, callfunc;
          return __generator(this, function(_a) {
            monsternum = this.stageManager.getMonsterNum();
            delay = cc.delayTime(10 * this.actiontime);
            callfunc = cc.callFunc(function() {
              this.loadMonster();
            }.bind(this));
            this.node.runAction(cc.repeat(cc.sequence(callfunc, delay), monsternum));
            return [ 2 ];
          });
        });
      };
      GameControll.prototype.loadMonster = function() {
        return __awaiter(this, void 0, void 0, function() {
          var monstertype, monsterPre, monster;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              monstertype = this.stageManager.getMonsterType();
              return [ 4, Utils_1.default.loadPrefab("prefab/monster") ];

             case 1:
              monsterPre = _a.sent();
              monster = cc.instantiate(monsterPre);
              monster.position = cc.v2(-1e4, -1e4);
              this.node.addChild(monster);
              monster.getComponent(Monster_1.default).initMonster(monstertype, this.cur_road);
              this.monsterContainer.push(monster);
              return [ 2 ];
            }
          });
        });
      };
      GameControll.prototype.checkMonsterDead = function() {
        for (var i = 0; i < this.monsterContainer.length; i++) {
          var monster = this.monsterContainer[i];
          var hp = monster.getComponent(Monster_1.default).getHP();
          if (hp <= 0 && !monster.getComponent(Monster_1.default).getIsDead()) {
            var gold = monster.getComponent(Monster_1.default).getGold();
            gold > 5 && (gold = 5);
            this.currgold = this.currgold + gold;
            cc.sys.localStorage.setItem("currgold", this.currgold);
            this.myGold.string = String(this.currgold);
            this.showGoldAnim(gold, monster.position);
          }
        }
      };
      GameControll.prototype.showGoldAnim = function(gold, pos) {
        return __awaiter(this, void 0, void 0, function() {
          var goldpro, goldnode, delay, move, callF, callF1;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, Utils_1.default.loadPrefab("prefab/drawgold") ];

             case 1:
              goldpro = _a.sent();
              goldnode = cc.instantiate(goldpro);
              goldnode.position = pos;
              this.node.addChild(goldnode);
              goldnode.getComponent(sp.Skeleton).setAnimation(0, "1", false);
              goldnode.getComponent(sp.Skeleton).addAnimation(0, "2", false);
              delay = cc.delayTime(.1);
              move = cc.moveTo(.5, cc.v2(0, -600));
              callF = cc.callFunc(function() {
                goldnode.removeFromParent();
              }.bind(this));
              callF1 = cc.callFunc(function() {
                gold--;
                gold > 0 && this.showGoldAnim(gold, pos);
              }.bind(this));
              goldnode.runAction(cc.sequence(cc.spawn(cc.sequence(cc.delayTime(.3), move, callF), cc.sequence(delay, callF1)), callF));
              return [ 2 ];
            }
          });
        });
      };
      GameControll.prototype.clickBuild = function() {
        return __awaiter(this, void 0, void 0, function() {
          var cost, tower, towerpro, tag, pos, towertype, range, ranValue, loadresult, connbasiclevel, startpos, transpos, move1, scale1, move2, scale2, spawn1, spawn2, seqA;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (this.towerContainer.length == this.unlockContent) {
                Log_1.default.info("\u4e0d\u80fd\u5efa\u7b51\uff0c\u9700\u8981\u89e3\u9501\uff01");
                return [ 2 ];
              }
              cost = Number(this.constructManager.getConnConstructCost());
              if (cost > this.currgold) {
                Log_1.default.info("\u4e0d\u80fd\u5efa\u7b51\uff0c\u91d1\u5e01\u4e0d\u591f\uff01");
                return [ 2 ];
              }
              this.currgold = this.currgold - cost;
              cc.sys.localStorage.setItem("currgold", this.currgold);
              this.myGold.string = String(this.currgold);
              tower = null;
              towerpro = null;
              if (!(this.freeTowerContainer.length > 0)) return [ 3, 1 ];
              tower = this.freeTowerContainer[0];
              this.freeTowerContainer = this.freeTowerContainer.filter(function(item) {
                return item != tower;
              });
              return [ 3, 3 ];

             case 1:
              return [ 4, Utils_1.default.loadPrefab("prefab/tower") ];

             case 2:
              towerpro = _a.sent();
              tower = cc.instantiate(towerpro);
              _a.label = 3;

             case 3:
              this.node.addChild(tower);
              tag = this.getNewTag();
              pos = this.towerManager.getComponent(TowerManager_1.default).getPos(tag);
              towertype = this.towerManager.getComponent(TowerManager_1.default).unlockTower(this.currlevel);
              range = towertype - 1;
              ranValue = 1 + Math.round(Math.random() * range);
              return [ 4, tower.getComponent(Tower_1.default).loodData(ranValue) ];

             case 4:
              loadresult = _a.sent();
              if (loadresult) {
                connbasiclevel = this.constructManager.getConnBasicLevel();
                tower.getComponent(Tower_1.default).setLevel(connbasiclevel);
                tower.getComponent(Tower_1.default).setTag(tag);
                tower.getComponent(Tower_1.default).setLock(false);
                tower.getComponent(Tower_1.default).setTrackState(false);
                tower.getComponent(Tower_1.default).setTowerOpen(false);
                startpos = this.buildBtn.node.position;
                transpos = cc.v2(pos.x, pos.y - 20);
                tower.setPosition(startpos);
                tower.setScale(.2);
                tower.on("touchstart", this.onEventStart, this);
                tower.on("touchmove", this.onEventMove, this);
                tower.on("touchcancel", this.onEventCancel, this);
                tower.on("touchend", this.onEventEnd, this);
                move1 = cc.moveTo(this.actiontime, transpos);
                scale1 = cc.scaleTo(this.actiontime, 1.2);
                move2 = cc.moveTo(this.actiontime, pos);
                scale2 = cc.scaleTo(this.actiontime, 1);
                spawn1 = cc.spawn(move1, scale1);
                spawn2 = cc.spawn(move2, scale2);
                seqA = cc.sequence([ spawn1, spawn2 ]);
                tower.runAction(seqA);
                this.towerContainer.push(tower);
              }
              return [ 2 ];
            }
          });
        });
      };
      GameControll.prototype.getNewTag = function() {
        for (var j = 0; j < this.unlockContent; j++) {
          var isfind = false;
          for (var i = 0; i < this.towerContainer.length; i++) {
            var tower = this.towerContainer[i];
            var towertag = tower.getComponent(Tower_1.default).getTag();
            j == towertag && (isfind = true);
          }
          if (!isfind) return j;
        }
      };
      GameControll.prototype.onEventStart = function(event) {
        this.prePos = event.getLocation();
        this.lastPos = event.target.position;
      };
      GameControll.prototype.onEventMove = function(event) {
        var pos = event.getLocation();
        var deltaX = pos.x - this.prePos.x;
        var deltaY = pos.y - this.prePos.y;
        var targetPos = event.target.position;
        event.target.setPosition(cc.v2(targetPos.x + deltaX, targetPos.y + deltaY));
        this.prePos = pos;
      };
      GameControll.prototype.onEventCancel = function(event) {};
      GameControll.prototype.onEventEnd = function(event) {
        var tower = event.target;
        tower.stopAllActions();
        tower.angle = 0;
        var inContainer = false;
        var tag = tower.getComponent(Tower_1.default).getTag();
        var curlevel = tower.getComponent(Tower_1.default).getLevel();
        var orginpos;
        orginpos = this.lastPos;
        inContainer = this.checkTowerMatch(tower);
        inContainer || (inContainer = this.checkDestory(tower));
        inContainer || tower.setPosition(orginpos);
      };
      GameControll.prototype.checkDestory = function(tower) {
        var inContainer = false;
        var pos = tower.position;
        var rect = cc.rect(this.destorybtn.position.x - this.destorybtn.width / 2, this.destorybtn.position.y - this.destorybtn.height / 2, this.destorybtn.width, this.destorybtn.height);
        if (rect.contains(pos)) {
          inContainer = true;
          this.freeTowerContainer.push(tower);
          tower.off("touchstart", this.onEventStart, this);
          tower.off("touchmove", this.onEventMove, this);
          tower.off("touchcancel", this.onEventCancel, this);
          tower.off("touchend", this.onEventEnd, this);
          tower.removeFromParent();
          this.towerContainer = this.towerContainer.filter(function(item) {
            return item != tower;
          });
          this.shootTowerContainer = this.shootTowerContainer.filter(function(item) {
            return item != tower;
          });
        }
        return inContainer;
      };
      GameControll.prototype.checkTowerMatch = function(tower) {
        var tag = tower.getComponent(Tower_1.default).getTag();
        var inContainer = false;
        inContainer = this.checkMatch(tower, this.towerContainer);
        if (inContainer) return inContainer;
        inContainer = this.checkMatch(tower, this.shootTowerContainer);
        if (!inContainer && this.towerContainer.length < this.unlockContent) for (var i_1 = 0; i_1 < this.unlockContent; i_1++) {
          var emptypos = this.towerManager.getComponent(TowerManager_1.default).getPos(i_1);
          var emptyrect = cc.rect(emptypos.x - 32, emptypos.y - 32, 64, 64);
          if (emptyrect.contains(tower.position)) {
            inContainer = true;
            console.log("\u653e\u5728\u5408\u5e76\u7a7a\u4f4d\u4e0a");
            tower.position = emptypos;
            tower.getComponent(Tower_1.default).stopShoot();
            tower.getComponent(Tower_1.default).setTowerOpen(false);
            tower.getComponent(Tower_1.default).setTag(i_1);
            tower.getComponent(Tower_1.default).setTowerState(false);
            var temp = this.towerContainer.filter(function(item) {
              return item == tower;
            });
            this.shootTowerContainer = this.shootTowerContainer.filter(function(item) {
              return item != tower;
            });
            0 == temp.length && this.towerContainer.push(tower);
            break;
          }
        }
        if (!inContainer) for (var i = 0; i < this.shootpos.length; i++) {
          var pos = tower.position;
          var nodepos = this.shootpos[i];
          var rect = cc.rect(nodepos.x - nodepos.width / 2, nodepos.y - nodepos.height / 2, nodepos.width, nodepos.height);
          if (rect.contains(pos)) {
            inContainer = true;
            console.log("\u653e\u5728\u653b\u51fb\u7a7a\u4f4d\u4e0a");
            tower.setPosition(nodepos.position);
            tower.getComponent(Tower_1.default).setTowerOpen(true);
            tower.getComponent(Tower_1.default).setTrackState(false);
            tower.getComponent(Tower_1.default).getTag() > 1e3;
            this.towerContainer = this.towerContainer.filter(function(item) {
              return item != tower;
            });
            var temp = this.shootTowerContainer.filter(function(item) {
              return item == tower;
            });
            0 == temp.length && this.shootTowerContainer.push(tower);
            break;
          }
        }
        return inContainer;
      };
      GameControll.prototype.checkMatch = function(tower, towerarray) {
        var tag = tower.getComponent(Tower_1.default).getTag();
        var curlevel = tower.getComponent(Tower_1.default).getLevel();
        var orginpos = this.lastPos;
        var inContainer = false;
        for (var i = 0; i < towerarray.length; i++) {
          var node = towerarray[i];
          var curtag = node.getComponent(Tower_1.default).getTag();
          if (node != tower) {
            var pos = tower.position;
            var rect = cc.rect(node.x - node.width / 2, node.y - node.height / 2, node.width, node.height);
            if (rect.contains(pos)) {
              inContainer = true;
              if (node.getComponent(Tower_1.default).getLevel() == curlevel && node.getComponent(Tower_1.default).getType() == tower.getComponent(Tower_1.default).getType()) {
                console.log("\u5408\u5e76\u6d88\u9664");
                var newlevel = curlevel + 1;
                console.log("curlevel = ", curlevel);
                console.log("newlevel = ", newlevel);
                node.getComponent(Tower_1.default).setLevel(newlevel);
                this.freeTowerContainer.push(tower);
                tower.off("touchstart", this.onEventStart, this);
                tower.off("touchmove", this.onEventMove, this);
                tower.off("touchcancel", this.onEventCancel, this);
                tower.off("touchend", this.onEventEnd, this);
                tower.removeFromParent();
                this.towerContainer = this.towerContainer.filter(function(item) {
                  return item != tower;
                });
                this.shootTowerContainer = this.shootTowerContainer.filter(function(item) {
                  return item != tower;
                });
              } else {
                console.log("\u8c03\u6362\u4f4d\u7f6e");
                tower.position = node.position;
                node.position = orginpos;
                tower.getComponent(Tower_1.default).setTag(curtag);
                node.getComponent(Tower_1.default).setTag(tag);
              }
              break;
            }
          }
        }
        return inContainer;
      };
      GameControll.prototype.autoBuild = function() {
        if (this.towerContainer.length == this.unlockContent) return;
        this.autoBuildFlag = true;
        var delay = cc.delayTime(2 * this.actiontime);
        var callfunc = cc.callFunc(function() {
          this.clickBuild();
        }.bind(this));
        var seqA = cc.sequence([ callfunc, delay ]);
        var act = cc.repeatForever(seqA);
        act.setTag(1e4);
        this.node.runAction(act);
      };
      GameControll.prototype.autoMatch = function() {
        return __awaiter(this, void 0, void 0, function() {
          var delay, callfunc, seqA, act;
          return __generator(this, function(_a) {
            this.autoMatchFlag = true;
            delay = cc.delayTime(2 * this.actiontime);
            callfunc = cc.callFunc(function() {
              this.startMatch();
            }.bind(this));
            seqA = cc.sequence([ callfunc, delay ]);
            act = cc.repeatForever(seqA);
            act.setTag(10001);
            this.node.runAction(act);
            return [ 2 ];
          });
        });
      };
      GameControll.prototype.startMatch = function() {
        return __awaiter(this, void 0, void 0, function() {
          var match, i, tower, tag, level, j, node, nodetag, nodelevel;
          return __generator(this, function(_a) {
            match = true;
            for (i = 0; i < this.towerContainer.length; i++) {
              tower = this.towerContainer[i];
              tag = tower.getComponent(Tower_1.default).getTag();
              level = tower.getComponent(Tower_1.default).getLevel();
              if (!tower.getComponent(Tower_1.default).getLock()) for (j = 0; j < this.towerContainer.length; j++) {
                node = this.towerContainer[j];
                nodetag = node.getComponent(Tower_1.default).getTag();
                nodelevel = node.getComponent(Tower_1.default).getLevel();
                if (nodetag != tag && nodelevel == level && !node.getComponent(Tower_1.default).getLock() && node.getComponent(Tower_1.default).getType() == tower.getComponent(Tower_1.default).getType()) {
                  tower.getComponent(Tower_1.default).setLock(true);
                  node.getComponent(Tower_1.default).setLock(true);
                  this.matchAction(tower, node, this.towerManager.getComponent(TowerManager_1.default).getPos(nodetag));
                  break;
                }
              }
            }
            return [ 2 ];
          });
        });
      };
      GameControll.prototype.matchAction = function(obj1, obj2, pos) {
        return __awaiter(this, void 0, void 0, function() {
          var move1, move2, callF, seq;
          return __generator(this, function(_a) {
            move1 = cc.moveTo(this.actiontime, cc.v2(pos.x, pos.y + 20));
            move2 = cc.moveTo(this.actiontime, pos);
            callF = cc.callFunc(function() {
              obj2.getComponent(Tower_1.default).setLevel(obj2.getComponent(Tower_1.default).getLevel() + 1);
              obj1.off("touchstart", this.onEventStart, this);
              obj1.off("touchmove", this.onEventMove, this);
              obj1.off("touchcancel", this.onEventCancel, this);
              obj1.off("touchend", this.onEventEnd, this);
              obj1.removeFromParent();
              this.freeTowerContainer.push(obj1);
              obj2.getComponent(Tower_1.default).setLock(false);
              this.towerContainer = this.towerContainer.filter(function(item) {
                return item != obj1;
              });
            }.bind(this));
            seq = cc.sequence(move1, move2, callF);
            obj1.runAction(seq);
            return [ 2 ];
          });
        });
      };
      GameControll.prototype.speedClick = function() {
        this.actiontime = .1;
        if (null != this.node.getActionByTag(1e4)) {
          this.stopBuild();
          this.autoBuild();
        }
        if (null != this.node.getActionByTag(10001)) {
          this.stopMatch();
          this.autoMatch();
        }
      };
      GameControll.prototype.stopSpeed = function() {
        this.actiontime = .2;
        if (null != this.node.getActionByTag(1e4)) {
          this.stopBuild();
          this.autoBuild();
        }
        if (null != this.node.getActionByTag(10001)) {
          this.stopMatch();
          this.autoMatch();
        }
      };
      GameControll.prototype.stopBuild = function() {
        this.autoBuildFlag = false;
        this.node.stopActionByTag(1e4);
      };
      GameControll.prototype.stopMatch = function() {
        this.autoMatchFlag = false;
        this.node.stopActionByTag(10001);
      };
      GameControll.prototype.clickUpgrade = function() {
        this.upgradeview.active = true;
        this.closebtn.active = true;
      };
      GameControll.prototype.clickClose = function() {
        var constructionlevel = Number(cc.sys.localStorage.getItem("constructionLevel"));
        this.constructManager.initUpgradeLevel(constructionlevel);
        this.basicLevelStr.string = String(this.constructManager.getConnBasicLevel());
        this.buildCostStr.string = String(this.constructManager.getConnConstructCost());
        var currgoldnum = Number(cc.sys.localStorage.getItem("currgold"));
        this.currgold = currgoldnum;
        this.myGold.string = String(this.currgold);
        this.upgradeview.active = false;
        this.closebtn.active = false;
      };
      __decorate([ property(cc.Label) ], GameControll.prototype, "label", void 0);
      __decorate([ property ], GameControll.prototype, "text", void 0);
      __decorate([ property({
        type: cc.Button,
        displayName: "BuildButton"
      }) ], GameControll.prototype, "buildBtn", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "Tower"
      }) ], GameControll.prototype, "towerManager", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "map"
      }) ], GameControll.prototype, "map", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "shoot"
      }) ], GameControll.prototype, "shootpos", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "result"
      }) ], GameControll.prototype, "currlevelpabel", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "destory"
      }) ], GameControll.prototype, "destorybtn", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "upgrade"
      }) ], GameControll.prototype, "upgradeview", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "clsoebtn"
      }) ], GameControll.prototype, "closebtn", void 0);
      __decorate([ property(cc.Label) ], GameControll.prototype, "currlevelstr", void 0);
      __decorate([ property(cc.Label) ], GameControll.prototype, "resultStr", void 0);
      __decorate([ property(cc.Label) ], GameControll.prototype, "basicLevelStr", void 0);
      __decorate([ property(cc.Label) ], GameControll.prototype, "buildCostStr", void 0);
      __decorate([ property(cc.Label) ], GameControll.prototype, "myGold", void 0);
      GameControll = __decorate([ ccclass ], GameControll);
      return GameControll;
    }(cc.Component);
    exports.default = GameControll;
    cc._RF.pop();
  }, {
    "../Manger/ConstructionManager": "ConstructionManager",
    "../Manger/StageManager": "StageManager",
    "../Manger/TowerManager": "TowerManager",
    "../Objects/Monster": "Monster",
    "../Objects/Tower": "Tower",
    "../Scene/Map": "Map",
    "../common/Log": "Log",
    "../common/Utils": "Utils"
  } ],
  Helloworld: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1b90/rohdEk4SdmmEZANaD", "Helloworld");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Helloworld = function(_super) {
      __extends(Helloworld, _super);
      function Helloworld() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      Helloworld.prototype.start = function() {
        this.label.string = this.text;
      };
      Helloworld.prototype.onClick = function(event, customdata) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            console.log("button click");
            return [ 2 ];
          });
        });
      };
      __decorate([ property(cc.Label) ], Helloworld.prototype, "label", void 0);
      __decorate([ property ], Helloworld.prototype, "text", void 0);
      Helloworld = __decorate([ ccclass ], Helloworld);
      return Helloworld;
    }(cc.Component);
    exports.default = Helloworld;
    cc._RF.pop();
  }, {} ],
  Http: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "eeb8b97CeRC5pzxRep7aY0i", "Http");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Props_1 = require("../kernels/Props");
    var Log_1 = require("../Log");
    var eCode_1 = require("./eCode");
    var netConfig_1 = require("./netConfig");
    var Http = function(_super) {
      __extends(Http, _super);
      function Http() {
        return _super.call(this) || this;
      }
      Http.isonline = function() {
        return __awaiter(this, void 0, void 0, function() {
          var _this = this;
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve, reject) {
              _this._request("GET", "https://www.baidu.com", {}, function(res, msg) {
                Log_1.default.info("\u7f51\u7edc\u8fde\u63a5:%s", res ? "\u6b63\u5e38" : "\u4e0d\u901a");
                resolve(res);
              }, function(res) {
                reject(res);
              });
            }) ];
          });
        });
      };
      Http.get = function(_url, _args) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          if (_url.indexOf("http") >= 0) {
            Log_1.default.error("\u53c2\u6570\u6709\u8bef \u53ea\u80fd\u5199\u8bbf\u95ee\u8def\u5f84\u4e0d\u80fd\u5199\u5b8c\u6574\u7684\u8bbf\u95ee\u5730\u5740");
            reject(eCode_1.default.Error);
            return;
          }
          var str = "";
          for (var k in _args) {
            "" == str ? str = "?" : str += "&";
            Array.isArray(_args[k]) || "object" == typeof _args[k] ? str += k + "=" + JSON.stringify(_args[k]) : str += k + "=" + _args[k];
          }
          var url = netConfig_1.default.onLine + _url + str;
          _this._request("GET", url, {}, function(res) {
            resolve(res);
          }, function(res) {
            reject(res);
          });
        });
      };
      Http.post = function(_url, _args) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          if (_url.indexOf("http") >= 0) {
            reject(eCode_1.default.Error);
            return;
          }
          var url = netConfig_1.default.onLine + _url;
          _this._request("POST", url, _args, function(res) {
            resolve(res);
          }, function(res) {
            reject(res);
          });
        });
      };
      Http._request = function(_op, _url, _data, _suc, _failed) {
        var errorback = function(code) {
          Log_1.default.error("error" + code);
          _failed(code);
        };
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.mId = ++this.mId;
        xhr.onerror = function() {
          Log_1.default.warn("%s:\u9519\u8bef[%d]", _op, xhr.mId);
          xhr.abort();
          errorback(eCode_1.default.Error);
        };
        xhr.ontimeout = function() {
          Log_1.default.warn("%s:\u8d85\u65f6[%d]", _op, xhr.mId);
          xhr.abort();
          errorback(eCode_1.default.TimeOut);
        };
        xhr.onreadystatechange = function() {
          if (4 != xhr.readyState || 0 == xhr.status) return;
          if (xhr.status >= 200 && xhr.status < 300) {
            Log_1.default.info("\u5b8c\u6210\u5904\u7406--");
            var ret = void 0;
            Log_1.default.info("%s:\u6536\u5230[%d]:%s", _op, xhr.mId, xhr.responseText);
            try {
              ret = JSON.parse(xhr.responseText);
            } catch (e) {
              Log_1.default.error("\u89e3\u6790json\u51fa\u9519%s: %s", _op, e);
              errorback(eCode_1.default.BadJson);
              return;
            }
            "object" != typeof ret || "number" != typeof ret.code || "object" != typeof ret.data ? _suc(ret) : ret.code == eCode_1.default.Ok ? _suc(ret.data) : errorback(ret.code);
            return;
          }
          Log_1.default.info("%s:\u6536\u5230[%d]:%d", _op, xhr.mId, xhr.status);
          404 == xhr.status && errorback(eCode_1.default.NotFound);
        };
        xhr.open(_op, _url, true);
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("Authorization", null);
        xhr.setRequestHeader("App-Version", this.appVersion);
        xhr.setRequestHeader("Repeated-Submission", new Date().getTime() + "");
        cc.sys.isNative && xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        xhr.timeout = this.timeOut;
        if ("POST" == _op) {
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.send(_data);
        } else xhr.send();
        Log_1.default.info("%s[%d]:%s", _op, xhr.mId, _url);
        return xhr;
      };
      Http.mId = 0;
      Http.timeOut = 5e3;
      Http.appVersion = "1.0.0";
      Http = __decorate([ ccclass ], Http);
      return Http;
    }(Props_1.default);
    exports.default = Http;
    cc._RF.pop();
  }, {
    "../Log": "Log",
    "../kernels/Props": "Props",
    "./eCode": "eCode",
    "./netConfig": "netConfig"
  } ],
  Loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a3737pvCZK2YPCQYMrxDBJ", "Loading");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Utils_1 = require("../common/Utils");
    var GameControll_1 = require("./GameControll");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.loadbar = null;
        return _this;
      }
      NewClass.prototype.onLoad = function() {};
      NewClass.prototype.start = function() {
        this.loadBullet();
      };
      NewClass.prototype.loadBullet = function() {
        return __awaiter(this, void 0, void 0, function() {
          var localbullet, bullet;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              localbullet = cc.sys.localStorage.getItem("bullet");
              if (!(null == localbullet)) return [ 3, 2 ];
              return [ 4, Utils_1.default.loadJson("bullet") ];

             case 1:
              bullet = _a.sent();
              cc.sys.localStorage.setItem("bullet", JSON.stringify(bullet));
              console.log("load localbullet finish");
              _a.label = 2;

             case 2:
              this.loadTower();
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.loadTower = function() {
        return __awaiter(this, void 0, void 0, function() {
          var localtower, tower;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              localtower = cc.sys.localStorage.getItem("tower");
              if (!(null == localtower)) return [ 3, 2 ];
              return [ 4, Utils_1.default.loadJson("tower") ];

             case 1:
              tower = _a.sent();
              cc.sys.localStorage.setItem("tower", JSON.stringify(tower));
              console.log("load tower finish");
              _a.label = 2;

             case 2:
              this.loadMonster();
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.loadMonster = function() {
        return __awaiter(this, void 0, void 0, function() {
          var localmonster, monster;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              localmonster = cc.sys.localStorage.getItem("monster");
              if (!(null == localmonster)) return [ 3, 2 ];
              return [ 4, Utils_1.default.loadJson("monster") ];

             case 1:
              monster = _a.sent();
              cc.sys.localStorage.setItem("monster", JSON.stringify(monster));
              console.log("load monster finish");
              _a.label = 2;

             case 2:
              this.loadUnlock();
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.loadUnlock = function() {
        return __awaiter(this, void 0, void 0, function() {
          var localunlock, unlock;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              localunlock = cc.sys.localStorage.getItem("unlock");
              if (!(null == localunlock)) return [ 3, 2 ];
              return [ 4, Utils_1.default.loadJson("unlock") ];

             case 1:
              unlock = _a.sent();
              cc.sys.localStorage.setItem("unlock", JSON.stringify(unlock));
              console.log("load unlock finish");
              _a.label = 2;

             case 2:
              this.loadStage();
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.loadStage = function() {
        return __awaiter(this, void 0, void 0, function() {
          var localunlock, unlock;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              localunlock = cc.sys.localStorage.getItem("stage");
              if (!(null == localunlock)) return [ 3, 2 ];
              return [ 4, Utils_1.default.loadJson("stage") ];

             case 1:
              unlock = _a.sent();
              cc.sys.localStorage.setItem("stage", JSON.stringify(unlock));
              console.log("load stage finish");
              _a.label = 2;

             case 2:
              this.loadConstruction();
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.loadConstruction = function() {
        return __awaiter(this, void 0, void 0, function() {
          var localunlock, unlock;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              localunlock = cc.sys.localStorage.getItem("construction");
              if (!(null == localunlock)) return [ 3, 2 ];
              return [ 4, Utils_1.default.loadJson("construction") ];

             case 1:
              unlock = _a.sent();
              cc.sys.localStorage.setItem("construction", JSON.stringify(unlock));
              console.log("load construction finish");
              _a.label = 2;

             case 2:
              this.loadRes();
              return [ 2 ];
            }
          });
        });
      };
      NewClass.prototype.loadRes = function() {
        return __awaiter(this, void 0, void 0, function() {
          var constructionlevel, type1level, type2level, type3level, type4level;
          return __generator(this, function(_a) {
            constructionlevel = Number(cc.sys.localStorage.getItem("constructionLevel"));
            type1level = Number(cc.sys.localStorage.getItem("type1Level"));
            type2level = Number(cc.sys.localStorage.getItem("type2Level"));
            type3level = Number(cc.sys.localStorage.getItem("type3Level"));
            type4level = Number(cc.sys.localStorage.getItem("type4Level"));
            0 == constructionlevel && cc.sys.localStorage.setItem("constructionLevel", 1);
            0 == type1level && cc.sys.localStorage.setItem("type1Level", 1);
            0 == type2level && cc.sys.localStorage.setItem("type2Level", 1);
            0 == type3level && cc.sys.localStorage.setItem("type3Level", 1);
            0 == type4level && cc.sys.localStorage.setItem("type4Level", 1);
            console.log("load finish");
            this.gamecontroll.getComponent(GameControll_1.default).startGame();
            return [ 2 ];
          });
        });
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      __decorate([ property({
        type: cc.ProgressBar,
        displayName: "progress"
      }) ], NewClass.prototype, "loadbar", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "GameControll"
      }) ], NewClass.prototype, "gamecontroll", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {
    "../common/Utils": "Utils",
    "./GameControll": "GameControll"
  } ],
  Log: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1533cA1bR9Gn7BRY4O3xKxA", "Log");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LOG_LEVEL = {
      All: 0,
      Info: 1,
      Warn: 2,
      Error: 3
    };
    var Logger = function() {
      function Logger() {}
      Logger.setLevel = function(_lv) {
        Logger.level = _lv;
      };
      Logger.debug = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        if (Logger.level != LOG_LEVEL.All) return;
        Logger._output(1, Logger.formatS(args));
      };
      Logger.info = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        if (Logger.level > LOG_LEVEL.Info) return;
        Logger._output(1, Logger.formatS(args));
      };
      Logger.warn = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        if (Logger.level > LOG_LEVEL.Warn) return;
        Logger._output(2, Logger.formatS(args));
      };
      Logger.error = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        if (Logger.level > LOG_LEVEL.Error) return;
        Logger._output(3, Logger.formatS(args));
      };
      Logger.getTime = function() {
        var d = new Date();
        var str = cc.js.formatStr("[%d.%d %d:%d:%d:%d]", d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
        return str;
      };
      Logger._output = function(_type, _text) {
        var text = cc.js.formatStr("%s-> %s", Logger.getTime(), _text);
        switch (_type) {
         case 2:
          console.warn(text);
          break;

         case 3:
          console.error(text);
          break;

         default:
          console.log(text);
        }
        this.caches.push(text);
        this.caches.length > this.limit && this.caches.splice(0, 100);
      };
      Logger.formatS = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        var _a;
        var msg = args[0][0];
        args[0].shift();
        var text = (_a = cc.js).formatStr.apply(_a, [ msg ].concat(args[0]));
        return text;
      };
      Logger.caches = [];
      Logger.level = LOG_LEVEL.All;
      Logger.limit = 1e3;
      return Logger;
    }();
    exports.default = Logger;
    cc._RF.pop();
  }, {} ],
  Map: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "11036yjCbpDUaRCVpvJI2io", "Map");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Map = function(_super) {
      __extends(Map, _super);
      function Map() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.anim_com = null;
        _this.new_draw_node = null;
        _this.is_debug = true;
        return _this;
      }
      Map.prototype.onLoad = function() {
        this.road_data_set = [];
        this.one_road = [];
        this.anim_com = this.node.getComponent(cc.Animation);
      };
      Map.prototype.start = function() {};
      Map.prototype.initRoadData = function(level) {
        this.road_data_set = [];
        this.one_road = [];
        var clips = this.anim_com.getClips();
        if (level > clips.length) {
          console.log("\u65e0\u8def\u5f84");
          return;
        }
        var clip = clips[level];
        var newNode = new cc.Node();
        this.new_draw_node = newNode.getComponent(cc.Graphics);
        this.new_draw_node || (this.new_draw_node = this.node.addComponent(cc.Graphics));
        this.node.addChild(newNode);
        var paths = clip.curveData.paths;
        var road_data = paths["road"].props.position;
        console.log("k == " + road_data);
        this.getPathData(road_data);
      };
      Map.prototype.getRoadData = function() {
        return this.road_data_set;
      };
      Map.prototype.getPathData = function(road_data) {
        var ctrl1 = null;
        var start_point = null;
        var end_point = null;
        var ctrl2 = null;
        var change = false;
        for (var i = 0; i < road_data.length; i++) {
          var key_frame = road_data[i];
          null != key_frame.motionPath && console.log("motionPath = " + key_frame.motionPath);
          if (null != ctrl1 && i > 0) {
            var last_key_frame = road_data[i - 1];
            null != last_key_frame.motionPath && last_key_frame.motionPath.length > 0;
          }
          start_point = cc.v2(key_frame.value[0], key_frame.value[1]);
          0 == i && console.log("\u7b2c\u4e00\u4e2a\u70b9 == " + this.one_road);
          if (null == key_frame.motionPath || 0 == key_frame.motionPath.length) {
            if (i < road_data.length - 1) {
              var next_key_frame = road_data[i + 1];
              this.getStraightData(cc.v2(key_frame.value[0], key_frame.value[1]), cc.v2(next_key_frame.value[0], next_key_frame.value[1]));
            } else {
              console.log("\u6700\u540e\u4e00\u4e2a\u70b9 == " + key_frame.value[0] + "    " + key_frame.value[1]);
              key_frame[0] = this.getFloatNum(key_frame[0]);
              key_frame[1] = this.getFloatNum(key_frame[1]);
              this.checkData(cc.v2(key_frame.value[0], key_frame.value[1])) || this.one_road.push(cc.v2(key_frame.value[0], key_frame.value[1]));
            }
            ctrl1 = null;
          } else for (var j = 0; j < key_frame.motionPath.length; j++) {
            end_point = cc.v2(key_frame.motionPath[j][0], key_frame.motionPath[j][1]);
            ctrl2 = cc.v2(key_frame.motionPath[j][2], key_frame.motionPath[j][3]);
            null == ctrl1 && (ctrl1 = ctrl2);
            this.getCurveData(start_point, ctrl1, ctrl2, end_point);
            ctrl1 = cc.v2(key_frame.motionPath[j][4], key_frame.motionPath[j][5]);
            start_point = end_point;
          }
        }
        for (var i = 0; i < this.one_road.length; i++) var pos = this.one_road[i];
        if (this.is_debug) {
          this.new_draw_node.clear();
          for (var i = 0; i < this.one_road.length; i++) {
            this.new_draw_node.moveTo(this.one_road[i].x, this.one_road[i].y);
            this.new_draw_node.lineTo(this.one_road[i].x + 1, this.one_road[i].y + 1);
            this.new_draw_node.stroke();
          }
        }
        this.road_data_set.push(this.one_road);
      };
      Map.prototype.getCurveData = function(start_point, ctrl1, ctrl2, end_point) {
        var start_pointx = this.getFloatNum(start_point.x);
        var start_pointy = this.getFloatNum(start_point.y);
        var len = this.bezier_length(start_point, ctrl1, ctrl2, end_point);
        var OFFSET = 16;
        var count = len / OFFSET;
        count = Math.floor(count);
        var t_delta = 1 / count;
        var t = t_delta;
        for (var i = 0; i < count; i++) {
          var x = start_point.x * (1 - t) * (1 - t) + 2 * ctrl1.x * t * (1 - t) + end_point.x * t * t;
          var y = start_point.y * (1 - t) * (1 - t) + 2 * ctrl1.y * t * (1 - t) + end_point.y * t * t;
          x = this.getFloatNum(x);
          y = this.getFloatNum(y);
          this.checkData(cc.v2(x, y)) || this.one_road.push(cc.v2(x, y));
          t += t_delta;
        }
      };
      Map.prototype.getStraightData = function(start_point, end_point) {
        var OFFSET = 16;
        var count = start_point.sub(end_point).mag() / OFFSET;
        count = Math.floor(count);
        var t_delta = 1 / count;
        var t = t_delta;
        var deltax = end_point.x - start_point.x;
        var deltay = end_point.y - start_point.y;
        for (var i = 0; i < count; i++) {
          var x = start_point.x + deltax / count * i;
          var y = start_point.y + deltay / count * i;
          x = this.getFloatNum(x);
          y = this.getFloatNum(y);
          this.checkData(cc.v2(x, y)) || this.one_road.push(cc.v2(x, y));
          t += t_delta;
        }
      };
      Map.prototype.checkData = function(pos) {
        for (var i = 0; i < this.one_road.length; i++) {
          var road = this.one_road[i];
          if (road.x == pos.x && road.y == pos.y) return true;
        }
        return false;
      };
      Map.prototype.bezier_length = function(start_point, ctrl1, ctrl2, end_point) {
        var prev_point = start_point;
        var length = 0;
        var t = .05;
        for (var i = 0; i < 20; i++) {
          var x = start_point.x * (1 - t) * (1 - t) + 2 * ctrl1.x * t * (1 - t) + end_point.x * t * t;
          var y = start_point.y * (1 - t) * (1 - t) + 2 * ctrl1.y * t * (1 - t) + end_point.y * t * t;
          var now_point = cc.v2(x, y);
          var dir = now_point.sub(prev_point);
          prev_point = now_point;
          length += dir.mag();
          t += .05;
        }
        return length;
      };
      Map.prototype.getFloatNum = function(num) {
        num = Math.round(num);
        return num;
      };
      __decorate([ property(cc.Label) ], Map.prototype, "label", void 0);
      __decorate([ property ], Map.prototype, "text", void 0);
      Map = __decorate([ ccclass ], Map);
      return Map;
    }(cc.Component);
    exports.default = Map;
    cc._RF.pop();
  }, {} ],
  MonsterProperty: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "31ae6DBbo1P0JYCod3wdHY1", "MonsterProperty");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MontserProperty = function() {
      function MontserProperty() {
        this.id = "10001";
        this.type = 1;
        this.type_id = 1;
        this.name = "\u5c0f\u602a";
        this.res = "";
        this.length = 50;
        this.width = 50;
        this.zoom = 1e4;
        this.boss = 0;
        this.speed = 50;
        this.hp = 14;
        this.draw_gold = 1;
        this.draw_treasure = 0;
      }
      MontserProperty = __decorate([ ccclass ], MontserProperty);
      return MontserProperty;
    }();
    exports.default = MontserProperty;
    cc._RF.pop();
  }, {} ],
  Monster: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f7955gxAnNMGYIwjmvPmBc4", "Monster");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MonsterProperty_1 = require("../Property/MonsterProperty");
    var Bullet_1 = require("./Bullet");
    var GameControll_1 = require("../Scene/GameControll");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Monster = function(_super) {
      __extends(Monster, _super);
      function Monster() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.damage = null;
        _this.text = "hello";
        _this.map = null;
        _this.fish = null;
        _this.speed = 50;
        _this.wait = true;
        _this.canstart = false;
        _this.beshoot = false;
        _this.isdead = false;
        return _this;
      }
      Monster.prototype.onLoad = function() {
        this.curr = new MonsterProperty_1.default();
        this.canstart = false;
      };
      Monster.prototype.start = function() {};
      Monster.prototype.changeAnimation = function() {};
      Monster.prototype.getRect = function() {
        var rect = cc.rect(this.node.position.x, this.node.position.y - this.curr.length / 2, this.curr.width, this.curr.length);
        return rect;
      };
      Monster.prototype.initMonster = function(id, road_data) {
        return __awaiter(this, void 0, void 0, function() {
          var localmonster, monster, i, dir;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              localmonster = cc.sys.localStorage.getItem("monster");
              monster = JSON.parse(localmonster);
              for (i = 0; i < monster.length; i++) if (monster[i].id == id) {
                this.curr.id = monster[i].id;
                this.curr.type = monster[i].type;
                this.curr.type_id = monster[i].type_id;
                this.curr.res = monster[i].res;
                this.curr.length = monster[i].length;
                this.curr.width = monster[i].width;
                this.curr.zoom = monster[i].zoom;
                this.curr.boss = monster[i].boss;
                this.curr.speed = Number(monster[i].speed);
                this.curr.hp = Number(monster[i].hp);
                this.curr.draw_gold = Number(monster[i].draw_gold);
                this.curr.draw_treasure = monster[i].draw_treasure;
                break;
              }
              dir = "anim/fish/" + this.curr.res;
              return [ 4, cc.loader.loadResDir(dir, sp.SkeletonData, function(err, res) {
                var fishanim = this.fish.addComponent(sp.Skeleton);
                fishanim.skeletonData = res[0];
                fishanim.animation = "1";
                this.fish.getComponent(sp.Skeleton);
                this.startRun(road_data);
              }.bind(this)) ];

             case 1:
              _a.sent();
              this.speed = this.curr.speed;
              return [ 2 ];
            }
          });
        });
      };
      Monster.prototype.startRun = function(road_data) {
        this.cur_road = road_data;
        if (this.cur_road.length < 2) return;
        var pos = this.cur_road[0];
        this.node.setPosition(pos);
        this.walk_to_next = 1;
        this.start_walk();
        this.canstart = true;
      };
      Monster.prototype.getHP = function() {
        return this.curr.hp;
      };
      Monster.prototype.getGold = function() {
        return this.curr.draw_gold;
      };
      Monster.prototype.getTreasure = function() {
        return this.curr.draw_treasure;
      };
      Monster.prototype.getIsDead = function() {
        return this.isdead;
      };
      Monster.prototype.start_walk = function() {
        if (this.curr.hp <= 0) {
          this.fish.getComponent(sp.Skeleton).animation = "";
          this.canstart = false;
          this.node.stopAllActions();
          this.node.position = cc.v2(-1e4, -1e4);
          return;
        }
        if (this.walk_to_next >= this.cur_road.length) {
          this.node.opacity = 0;
          this.canstart = false;
          this.curr.hp > 0 && this.node.parent.getComponent(GameControll_1.default).endGame(false);
          this.node.stopAllActions();
          return;
        }
        var src = this.node.getPosition();
        var dst = this.cur_road[this.walk_to_next];
        var dir1 = dst.sub(src);
        var dir = cc.v2(dir1.x, dir1.y);
        var comVec = cc.v2(0, 1);
        var radian = dir.signAngle(comVec);
        var degree = cc.misc.radiansToDegrees(radian) + 90;
        var len = dir.mag();
        if (0 == len) {
          this.walk_to_next++;
          this.start_walk();
          return;
        }
        this.vx = this.speed * dir.x / len;
        this.vy = this.speed * dir.y / len;
        this.walk_total_time = len / this.speed;
        this.walked_time = 0;
        var move = cc.moveTo(this.walk_total_time, dst);
        var rotate = cc.rotateTo(this.walk_total_time, degree);
        var spawn = cc.spawn(move, rotate);
        var callF = cc.callFunc(function() {
          if (this.walk_to_next < this.cur_road.length) {
            this.walk_to_next++;
            this.start_walk();
          }
        }.bind(this));
        90 == degree ? this.node.runAction(cc.sequence(move, callF)) : this.node.runAction(cc.sequence(spawn, callF));
      };
      Monster.prototype.onCollisionEnter = function(other, self) {
        if (this.isdead) return;
        this.beshoot = true;
        var bullet = other.node.getComponent(Bullet_1.default);
        if (null == bullet) return;
        this.fish.color = cc.color(220, 20, 60);
        var alldamage = bullet.getDamage();
        this.curr.hp = this.curr.hp - alldamage;
        var damagenum = new cc.Node();
        var label = damagenum.addComponent(cc.Label);
        label.fontSize = 20;
        var angle = this.node.angle;
        damagenum.angle = -angle;
        label.string = String(alldamage);
        damagenum.setPosition(cc.v2(0, 0));
        this.node.addChild(damagenum);
        var move = cc.moveTo(.2, cc.v2(0, 30));
        var scale = cc.scaleTo(.2, 1.2);
        var fade = cc.fadeOut(.2);
        var callF = cc.callFunc(function() {
          damagenum.removeFromParent(true);
          damagenum.destroy();
        }.bind(this));
        damagenum.runAction(cc.sequence(cc.spawn(move, scale, fade), callF));
        this.node.parent.getComponent(GameControll_1.default).checkMonsterDead();
        this.curr.hp <= 0 && (this.isdead = true);
        this.node.parent.getComponent(GameControll_1.default).checkresult();
      };
      Monster.prototype.onCollisionStay = function(other, self) {};
      Monster.prototype.onCollisionExit = function(other, self) {
        this.fish.color = cc.color(255, 255, 255);
      };
      Monster.prototype.update = function(dt) {};
      __decorate([ property(cc.Label) ], Monster.prototype, "damage", void 0);
      __decorate([ property ], Monster.prototype, "text", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "map"
      }) ], Monster.prototype, "map", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "fish"
      }) ], Monster.prototype, "fish", void 0);
      Monster = __decorate([ ccclass ], Monster);
      return Monster;
    }(cc.Component);
    exports.default = Monster;
    cc._RF.pop();
  }, {
    "../Property/MonsterProperty": "MonsterProperty",
    "../Scene/GameControll": "GameControll",
    "./Bullet": "Bullet"
  } ],
  Props: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8613dbDRV1ItIVnlWXzUOVV", "Props");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Log_1 = require("../Log");
    var Utils_1 = require("../Utils");
    var Log_2 = require("../Log");
    var Props = function() {
      function Props() {}
      Props.destroy = function() {
        this.Xclear();
      };
      Props.xflag = function(_flag) {
        this.flag = _flag;
      };
      Props.xSet = function(key, value, notify) {
        void 0 === value && (value = null);
        void 0 === notify && (notify = true);
        if ("" == key) {
          Log_1.default.error("\u5c5e\u6027\u67e5\u8be2\u5931\u8d25,\u65e0\u6548\u7684\u5c5e\u6027\u540d!");
          return false;
        }
        var p = this.props[key];
        null != p ? p.v = value : this.props[key] = {
          v: value,
          v2: value,
          t: []
        };
        notify && this._notify(this.props[key]);
        value && (this.props[key].v2 = Utils_1.default.clone(value));
        return true;
      };
      Props.xGet = function(key, def) {
        void 0 === def && (def = null);
        var p = this._query(key);
        return p ? p.v : def;
      };
      Props.xBind = function(key, callback, tag) {
        void 0 === tag && (tag = "");
        if ("" == tag) {
          Log_1.default.error("\u76d1\u542c\u5931\u8d25,\u6807\u8bb0\u5fc5\u987b\u662f\u6709\u6548\u5b57\u7b26\u4e32");
          return false;
        }
        var p = this._query(key);
        if (null == p) {
          Log_1.default.warn("\u5c5e\u6027\u76d1\u542c\u5931\u8d25,\u53c2\u6570\u4e0d\u5339\u914d!");
          return false;
        }
        for (var i = 0; i < p.t.length; i++) {
          var cb = p.t[i];
          if (cb == callback) {
            Log_1.default.warn("\u91cd\u590d\u76d1\u542c:" + key);
            return false;
          }
        }
        p.t.push({
          cb: callback,
          tag: tag
        });
        return true;
      };
      Props.xUnbind = function(tag) {
        Log_2.default.info("\u8fdb\u5165\u89e3\u7ed1");
        if ("" == tag) {
          Log_2.default.error("\u76d1\u542c\u89e3\u9664\u5931\u8d25,\u6807\u8bb0\u5fc5\u987b\u662f\u6709\u6548\u5b57\u7b26\u4e32");
          return false;
        }
        var count = 0;
        for (var k in this.props) {
          var p = this.props[k];
          for (var i = p.t.length - 1; i >= 0; i--) {
            var t = p.t[i];
            if (t && t.tag == tag) {
              p.t.splice(i, 1);
              count++;
            }
          }
        }
        Log_2.default.info("\u4e3a[%s]\u89e3\u9664\u76d1\u542c[%d]\u4e2a.", tag, count);
        return true;
      };
      Props._query = function(_key) {
        if ("" == _key) {
          Log_1.default.warn("\u5c5e\u6027\u67e5\u8be2\u5931\u8d25,\u65e0\u6548\u7684\u5c5e\u6027\u540d!");
          return null;
        }
        var p = this.props[_key];
        if ("undefined" == typeof p) {
          Log_1.default.warn("\u5c5e\u6027\u67e5\u8be2\u5931\u8d25,\u4e0d\u5b58\u5728\u5c5e\u6027:" + _key);
          return null;
        }
        return p;
      };
      Props._notify = function(_prop) {
        for (var i in _prop.t) {
          var t = _prop.t[i];
          t && "function" == typeof t.cb && t.cb(_prop.v, _prop.v2);
        }
      };
      Props.Xclear = function() {
        this.props = {};
      };
      Props.flag = "";
      Props.props = {};
      return Props;
    }();
    exports.default = Props;
    cc._RF.pop();
  }, {
    "../Log": "Log",
    "../Utils": "Utils"
  } ],
  ScrollLayout: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e6c186vx/1N+b+0ThCsj/9n", "ScrollLayout");
    "use strict";
    var Type = cc.Enum({
      NONE: 0,
      HORIZONTAL: 1,
      VERTICAL: 2,
      GRID: 3
    });
    var ResizeMode = cc.Enum({
      NONE: 0,
      CONTAINER: 1,
      CHILDREN: 2
    });
    var AxisDirection = cc.Enum({
      HORIZONTAL: 0,
      VERTICAL: 1
    });
    var VerticalDirection = cc.Enum({
      BOTTOM_TO_TOP: 0,
      TOP_TO_BOTTOM: 1
    });
    var HorizontalDirection = cc.Enum({
      LEFT_TO_RIGHT: 0,
      RIGHT_TO_LEFT: 1
    });
    cc.Class({
      extends: cc.Layout,
      properties: {},
      onLoad: function onLoad() {},
      layout_items: function layout_items(list) {
        this.enabled = true;
        this._datas = list;
        this.node.targetOff(this);
        this._doLayout();
        this.enabled = false;
        return this._datas;
      },
      _doLayout: function _doLayout() {
        if (this.type === Type.HORIZONTAL) {
          var list = this._datas || this.node.children;
          var newWidth = this._getHorizontalBaseWidth(list);
          var fnPositionY = function fnPositionY(child) {
            return child.y;
          };
          this._doLayoutHorizontally(newWidth, false, fnPositionY, true);
          this.node.width = newWidth;
        } else if (this.type === Type.VERTICAL) {
          var _list = this._datas || this.node.children;
          var newHeight = this._getVerticalBaseHeight(_list);
          var fnPositionX = function fnPositionX(child) {
            return child.x;
          };
          this._doLayoutVertically(newHeight, false, fnPositionX, true);
          this.node.height = newHeight;
        } else this.type === Type.NONE ? this.resizeMode === ResizeMode.CONTAINER && this._doLayoutBasic() : this.type === Type.GRID && this._doLayoutGrid();
      },
      _doLayoutHorizontally: function _doLayoutHorizontally(baseWidth, rowBreak, fnPositionY, applyChildren) {
        var layoutAnchor = this.node.getAnchorPoint();
        var children = this._datas || this.node.children;
        var sign = 1;
        var paddingX = this.paddingLeft;
        var leftBoundaryOfLayout = -layoutAnchor.x * baseWidth;
        if (this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
          sign = -1;
          leftBoundaryOfLayout = (1 - layoutAnchor.x) * baseWidth;
          paddingX = this.paddingRight;
        }
        var nextX = leftBoundaryOfLayout + sign * paddingX - sign * this.spacingX;
        var rowMaxHeight = 0;
        var tempMaxHeight = 0;
        var secondMaxHeight = 0;
        var row = 0;
        var containerResizeBoundary = 0;
        var maxHeightChildAnchorY = 0;
        var newChildWidth = this.cellSize.width;
        this.type !== Type.GRID && this.resizeMode === ResizeMode.CHILDREN && (newChildWidth = (baseWidth - (this.paddingLeft + this.paddingRight) - (children.length - 1) * this.spacingX) / children.length);
        children.forEach(function(child, i, arr) {
          if (!child.activeInHierarchy) return;
          if (this._resize === ResizeMode.CHILDREN) {
            child.width = newChildWidth;
            this.type === Type.GRID && (child.height = this.cellSize.height);
          }
          var anchorX = child.anchorX;
          secondMaxHeight > tempMaxHeight && (tempMaxHeight = secondMaxHeight);
          if (child.height >= tempMaxHeight) {
            secondMaxHeight = tempMaxHeight;
            tempMaxHeight = child.height;
            maxHeightChildAnchorY = child.getAnchorPoint().y;
          }
          this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT && (anchorX = 1 - child.anchorX);
          nextX = nextX + sign * anchorX * child.width + sign * this.spacingX;
          var rightBoundaryOfChild = sign * (1 - anchorX) * child.width;
          if (rowBreak) {
            var rowBreakBoundary = nextX + rightBoundaryOfChild + sign * (sign > 0 ? this.paddingRight : this.paddingLeft);
            var leftToRightRowBreak = this.horizontalDirection === HorizontalDirection.LEFT_TO_RIGHT && rowBreakBoundary > (1 - layoutAnchor.x) * baseWidth;
            var rightToLeftRowBreak = this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT && rowBreakBoundary < -layoutAnchor.x * baseWidth;
            if (leftToRightRowBreak || rightToLeftRowBreak) {
              if (child.height >= tempMaxHeight) {
                0 === secondMaxHeight && (secondMaxHeight = tempMaxHeight);
                rowMaxHeight += secondMaxHeight;
                secondMaxHeight = tempMaxHeight;
              } else {
                rowMaxHeight += tempMaxHeight;
                secondMaxHeight = child.height;
                tempMaxHeight = 0;
              }
              nextX = leftBoundaryOfLayout + sign * (paddingX + anchorX * child.width);
              row++;
            }
          }
          var finalPositionY = fnPositionY(child, rowMaxHeight, row);
          baseWidth >= child.width + this.paddingLeft + this.paddingRight && applyChildren && child.setPosition(cc.p(nextX, finalPositionY));
          var signX = 1;
          var tempFinalPositionY;
          var topMarign = 0 === tempMaxHeight ? child.height : tempMaxHeight;
          if (this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
            containerResizeBoundary = containerResizeBoundary || this.node._contentSize.height;
            signX = -1;
            tempFinalPositionY = finalPositionY + signX * (topMarign * maxHeightChildAnchorY + this.paddingBottom);
            tempFinalPositionY < containerResizeBoundary && (containerResizeBoundary = tempFinalPositionY);
          } else {
            containerResizeBoundary = containerResizeBoundary || -this.node._contentSize.height;
            tempFinalPositionY = finalPositionY + signX * (topMarign * maxHeightChildAnchorY + this.paddingTop);
            tempFinalPositionY > containerResizeBoundary && (containerResizeBoundary = tempFinalPositionY);
          }
          nextX += rightBoundaryOfChild;
          this._datas && (this._datas[i] = child.position);
        }.bind(this));
        return containerResizeBoundary;
      },
      _doLayoutVertically: function _doLayoutVertically(baseHeight, columnBreak, fnPositionX, applyChildren) {
        var layoutAnchor = this.node.getAnchorPoint();
        var children = this._datas || this.node.children;
        var sign = 1;
        var paddingY = this.paddingBottom;
        var bottomBoundaryOfLayout = -layoutAnchor.y * baseHeight;
        if (this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
          sign = -1;
          bottomBoundaryOfLayout = (1 - layoutAnchor.y) * baseHeight;
          paddingY = this.paddingTop;
        }
        var nextY = bottomBoundaryOfLayout + sign * paddingY - sign * this.spacingY;
        var columnMaxWidth = 0;
        var tempMaxWidth = 0;
        var secondMaxWidth = 0;
        var column = 0;
        var containerResizeBoundary = 0;
        var maxWidthChildAnchorX = 0;
        var newChildHeight = this.cellSize.height;
        this.type !== Type.GRID && this.resizeMode === ResizeMode.CHILDREN && (newChildHeight = (baseHeight - (this.paddingTop + this.paddingBottom) - (children.length - 1) * this.spacingY) / children.length);
        children.forEach(function(child, i, arr) {
          if (!child.activeInHierarchy) return;
          if (this.resizeMode === ResizeMode.CHILDREN) {
            child.height = newChildHeight;
            this.type === Type.GRID && (child.width = this.cellSize.width);
          }
          var anchorY = child.anchorY;
          secondMaxWidth > tempMaxWidth && (tempMaxWidth = secondMaxWidth);
          if (child.width >= tempMaxWidth) {
            secondMaxWidth = tempMaxWidth;
            tempMaxWidth = child.width;
            maxWidthChildAnchorX = child.getAnchorPoint().x;
          }
          this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM && (anchorY = 1 - child.anchorY);
          nextY = nextY + sign * anchorY * child.height + sign * this.spacingY;
          var topBoundaryOfChild = sign * (1 - anchorY) * child.height;
          if (columnBreak) {
            var columnBreakBoundary = nextY + topBoundaryOfChild + sign * (sign > 0 ? this.paddingTop : this.paddingBottom);
            var bottomToTopColumnBreak = this.verticalDirection === VerticalDirection.BOTTOM_TO_TOP && columnBreakBoundary > (1 - layoutAnchor.y) * baseHeight;
            var topToBottomColumnBreak = this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM && columnBreakBoundary < -layoutAnchor.y * baseHeight;
            if (bottomToTopColumnBreak || topToBottomColumnBreak) {
              if (child.width >= tempMaxWidth) {
                0 === secondMaxWidth && (secondMaxWidth = tempMaxWidth);
                columnMaxWidth += secondMaxWidth;
                secondMaxWidth = tempMaxWidth;
              } else {
                columnMaxWidth += tempMaxWidth;
                secondMaxWidth = child.width;
                tempMaxWidth = 0;
              }
              nextY = bottomBoundaryOfLayout + sign * (paddingY + anchorY * child.height);
              column++;
            }
          }
          var finalPositionX = fnPositionX(child, columnMaxWidth, column);
          baseHeight >= child.height + (this.paddingTop + this.paddingBottom) && applyChildren && child.setPosition(cc.p(finalPositionX, nextY));
          var signX = 1;
          var tempFinalPositionX;
          var rightMarign = 0 === tempMaxWidth ? child.width : tempMaxWidth;
          if (this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
            signX = -1;
            containerResizeBoundary = containerResizeBoundary || this.node._contentSize.width;
            tempFinalPositionX = finalPositionX + signX * (rightMarign * maxWidthChildAnchorX + this.paddingLeft);
            tempFinalPositionX < containerResizeBoundary && (containerResizeBoundary = tempFinalPositionX);
          } else {
            containerResizeBoundary = containerResizeBoundary || -this.node._contentSize.width;
            tempFinalPositionX = finalPositionX + signX * (rightMarign * maxWidthChildAnchorX + this.paddingRight);
            tempFinalPositionX > containerResizeBoundary && (containerResizeBoundary = tempFinalPositionX);
          }
          nextY += topBoundaryOfChild;
          this._datas && (this._datas[i] = child.position);
        }.bind(this));
        return containerResizeBoundary;
      },
      _doLayoutBasic: function _doLayoutBasic() {
        var children = this._datas || this.node.children;
        var allChildrenBoundingBox = null;
        children.forEach(function(child, i, arr) {
          if (!child.activeInHierarchy) return;
          allChildrenBoundingBox = allChildrenBoundingBox ? cc.rectUnion(allChildrenBoundingBox, child.getBoundingBoxToWorld()) : child.getBoundingBoxToWorld();
          this._datas && (this._datas[i] = child.position);
        });
        if (allChildrenBoundingBox) {
          var leftBottomInParentSpace = this.node.parent.convertToNodeSpaceAR(cc.p(allChildrenBoundingBox.x, allChildrenBoundingBox.y));
          leftBottomInParentSpace = cc.pAdd(leftBottomInParentSpace, cc.p(-this.paddingLeft, -this.paddingBottom));
          var rightTopInParentSpace = this.node.parent.convertToNodeSpaceAR(cc.p(allChildrenBoundingBox.x + allChildrenBoundingBox.width, allChildrenBoundingBox.y + allChildrenBoundingBox.height));
          rightTopInParentSpace = cc.pAdd(rightTopInParentSpace, cc.p(this.paddingRight, this.paddingTop));
          var newSize = cc.size(parseFloat((rightTopInParentSpace.x - leftBottomInParentSpace.x).toFixed(2)), parseFloat((rightTopInParentSpace.y - leftBottomInParentSpace.y).toFixed(2)));
          var layoutPosition = this.node.getPosition();
          var newAnchorX = (layoutPosition.x - leftBottomInParentSpace.x) / newSize.width;
          var newAnchorY = (layoutPosition.y - leftBottomInParentSpace.y) / newSize.height;
          var newAnchor = cc.p(parseFloat(newAnchorX.toFixed(2)), parseFloat(newAnchorY.toFixed(2)));
          this.node.setAnchorPoint(newAnchor);
          this.node.setContentSize(newSize);
        }
      },
      _doLayoutGrid: function _doLayoutGrid() {
        var layoutAnchor = this.node.getAnchorPoint();
        var layoutSize = this.node.getContentSize();
        this.startAxis === AxisDirection.HORIZONTAL ? this._doLayoutGridAxisHorizontal(layoutAnchor, layoutSize) : this.startAxis === AxisDirection.VERTICAL && this._doLayoutGridAxisVertical(layoutAnchor, layoutSize);
      },
      _doLayoutGridAxisHorizontal: function _doLayoutGridAxisHorizontal(layoutAnchor, layoutSize) {
        var baseWidth = layoutSize.width;
        var sign = 1;
        var bottomBoundaryOfLayout = -layoutAnchor.y * layoutSize.height;
        var paddingY = this.paddingBottom;
        if (this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
          sign = -1;
          bottomBoundaryOfLayout = (1 - layoutAnchor.y) * layoutSize.height;
          paddingY = this.paddingTop;
        }
        var fnPositionY = function(child, topOffset, row) {
          return bottomBoundaryOfLayout + sign * (topOffset + child.anchorY * child.height + paddingY + row * this.spacingY);
        }.bind(this);
        var newHeight = 0;
        if (this.resizeMode === ResizeMode.CONTAINER) {
          var boundary = this._doLayoutHorizontally(baseWidth, true, fnPositionY, false);
          newHeight = bottomBoundaryOfLayout - boundary;
          newHeight < 0 && (newHeight *= -1);
          bottomBoundaryOfLayout = -layoutAnchor.y * newHeight;
          if (this.verticalDirection === VerticalDirection.TOP_TO_BOTTOM) {
            sign = -1;
            bottomBoundaryOfLayout = (1 - layoutAnchor.y) * newHeight;
          }
        }
        this._doLayoutHorizontally(baseWidth, true, fnPositionY, true);
        this.resizeMode === ResizeMode.CONTAINER && this.node.setContentSize(baseWidth, newHeight);
      },
      _doLayoutGridAxisVertical: function _doLayoutGridAxisVertical(layoutAnchor, layoutSize) {
        var baseHeight = layoutSize.height;
        var sign = 1;
        var leftBoundaryOfLayout = -layoutAnchor.x * layoutSize.width;
        var paddingX = this.paddingLeft;
        if (this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
          sign = -1;
          leftBoundaryOfLayout = (1 - layoutAnchor.x) * layoutSize.width;
          paddingX = this.paddingRight;
        }
        var fnPositionX = function(child, leftOffset, column) {
          return leftBoundaryOfLayout + sign * (leftOffset + child.anchorX * child.width + paddingX + column * this.spacingX);
        }.bind(this);
        var newWidth = 0;
        if (this.resizeMode === ResizeMode.CONTAINER) {
          var boundary = this._doLayoutVertically(baseHeight, true, fnPositionX, false);
          newWidth = leftBoundaryOfLayout - boundary;
          newWidth < 0 && (newWidth *= -1);
          leftBoundaryOfLayout = -layoutAnchor.x * newWidth;
          if (this.horizontalDirection === HorizontalDirection.RIGHT_TO_LEFT) {
            sign = -1;
            leftBoundaryOfLayout = (1 - layoutAnchor.x) * newWidth;
          }
        }
        this._doLayoutVertically(baseHeight, true, fnPositionX, true);
        this.resizeMode === ResizeMode.CONTAINER && this.node.setContentSize(newWidth, baseHeight);
      }
    });
    cc._RF.pop();
  }, {} ],
  ShaderHelper: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "63f7ac3u1pM1oVowfbOmDIv", "ShaderHelper");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executeInEditMode = _a.executeInEditMode;
    var ShaderProperty = function() {
      function ShaderProperty() {
        this.key = "";
        this.value = 0;
      }
      __decorate([ property({
        readonly: true
      }) ], ShaderProperty.prototype, "key", void 0);
      __decorate([ property(cc.Float) ], ShaderProperty.prototype, "value", void 0);
      ShaderProperty = __decorate([ ccclass("ShaderProperty") ], ShaderProperty);
      return ShaderProperty;
    }();
    exports.ShaderProperty = ShaderProperty;
    var ShaderEnum = cc.Enum({});
    var ShaderHelper = function(_super) {
      __extends(ShaderHelper, _super);
      function ShaderHelper() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._program = 0;
        _this._props = [];
        _this.material = null;
        return _this;
      }
      ShaderHelper_1 = ShaderHelper;
      Object.defineProperty(ShaderHelper.prototype, "program", {
        get: function() {
          return this._program;
        },
        set: function(value) {
          if (this._program === value) return;
          this._program = value;
          this.applyEffect();
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ShaderHelper.prototype, "props", {
        get: function() {
          return this._props;
        },
        set: function(value) {
          this._props = value;
          this.applyEffect();
        },
        enumerable: true,
        configurable: true
      });
      ShaderHelper.prototype.start = function() {
        var _this = this;
        false;
        this.applyEffect();
      };
      ShaderHelper.prototype.applyEffect = function() {
        var sprite = this.node.getComponent(cc.Sprite);
        if (!sprite) return;
        var effectAsset = ShaderHelper_1.effectAssets[this.program];
        var material = new cc.Material();
        var defineUserTexture = !!effectAsset.shaders.find(function(shader) {
          return shader.defines.find(function(def) {
            return "USE_TEXTURE" === def.name;
          });
        });
        defineUserTexture && material.define("USE_TEXTURE", true);
        material.effectAsset = effectAsset;
        material.name = effectAsset.name;
        sprite.setMaterial(0, material);
        this.material = sprite.getMaterial(0);
        this.setProperty(effectAsset);
        this.node.emit("effect-changed", this, this.material);
      };
      ShaderHelper.prototype.setProperty = function(effectAsset) {
        var _this = this;
        var oldProps;
        var keys;
        var values;
        var _loop_1;
        var this_1;
        var i;
        var shaderTimer;
        false;
        this._props.length && this._props.forEach(function(item) {
          return item.key && _this.material.setProperty(item.key, item.value || 0);
        });
        cc.Class.Attr.setClassAttr(ShaderHelper_1, "props", "visible", !!this._props.length);
      };
      ShaderHelper.prototype.next = function() {
        this.program = (this.program + 1) % ShaderHelper_1.effectAssets.length;
      };
      ShaderHelper.prototype.prev = function() {
        if (0 === this.program) {
          this.program = ShaderHelper_1.effectAssets.length - 1;
          return;
        }
        this.program = (this.program - 1) % ShaderHelper_1.effectAssets.length;
      };
      var ShaderHelper_1;
      ShaderHelper.effectAssets = null;
      __decorate([ property ], ShaderHelper.prototype, "_program", void 0);
      __decorate([ property({
        type: ShaderEnum
      }) ], ShaderHelper.prototype, "program", null);
      __decorate([ property({
        type: [ ShaderProperty ]
      }) ], ShaderHelper.prototype, "_props", void 0);
      __decorate([ property({
        type: [ ShaderProperty ]
      }) ], ShaderHelper.prototype, "props", null);
      ShaderHelper = ShaderHelper_1 = __decorate([ ccclass, executeInEditMode ], ShaderHelper);
      return ShaderHelper;
    }(cc.Component);
    exports.default = ShaderHelper;
    cc.game.on(cc.game.EVENT_ENGINE_INITED, function() {
      cc.dynamicAtlasManager.enabled = false;
      cc.loader.loadResDir("effects", cc.EffectAsset, function(error, res) {
        ShaderHelper.effectAssets = res;
        var array = ShaderHelper.effectAssets.map(function(item, i) {
          return {
            name: item._name,
            value: i
          };
        });
        cc.Class.Attr.setClassAttr(ShaderHelper, "program", "enumList", array);
      });
    });
    cc._RF.pop();
  }, {} ],
  ShaderTime: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c45eflT2Q5CG6wHJVuez4Xw", "ShaderTime");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ShaderTime = function(_super) {
      __extends(ShaderTime, _super);
      function ShaderTime() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._max = 65535;
        _this._start = 0;
        return _this;
      }
      Object.defineProperty(ShaderTime.prototype, "max", {
        get: function() {
          return this._max;
        },
        set: function(value) {
          this._max = value;
          true;
          return;
          var sprite;
          var material;
        },
        enumerable: true,
        configurable: true
      });
      ShaderTime.prototype.update = function(dt) {
        this._material = this.node.getComponent(cc.Sprite).sharedMaterials[0];
        this.node.active && this._material && this._material.effect._properties.time && this._setShaderTime(dt);
      };
      ShaderTime.prototype._setShaderTime = function(dt) {
        var start = this._start;
        start > this.max && (start = 0);
        start += .02;
        this._material.effect.setProperty("time", start);
        this._start = start;
      };
      __decorate([ property ], ShaderTime.prototype, "_max", void 0);
      __decorate([ property ], ShaderTime.prototype, "max", null);
      ShaderTime = __decorate([ ccclass ], ShaderTime);
      return ShaderTime;
    }(cc.Component);
    exports.default = ShaderTime;
    cc._RF.pop();
  }, {} ],
  StageChange: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b30c/F8h9GWbaXF85Uylbx", "StageChange");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var StageChange = function(_super) {
      __extends(StageChange, _super);
      function StageChange() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      StageChange.prototype.start = function() {};
      StageChange.prototype.loadLevel = function(currlevel) {};
      __decorate([ property({
        type: cc.Node,
        displayName: "content"
      }) ], StageChange.prototype, "content", void 0);
      StageChange = __decorate([ ccclass ], StageChange);
      return StageChange;
    }(cc.Component);
    exports.default = StageChange;
    cc._RF.pop();
  }, {} ],
  StageManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f8208nlt1JIYYDqXxTsz+Fg", "StageManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.start = function() {};
      NewClass.prototype.initData = function() {
        var locastage = cc.sys.localStorage.getItem("stage");
        null != locastage || console.log("stage is null");
        this.stageConfig = JSON.parse(locastage);
      };
      NewClass.prototype.initStage = function(stage) {
        var length = this.stageConfig.length;
        for (var i = 0; i < length; i++) {
          var stageinfo = this.stageConfig[i];
          var stagenum = Number(stageinfo.stage);
          if (stagenum == stage) {
            this.stageInfo = stageinfo;
            break;
          }
        }
      };
      NewClass.prototype.getMonsterType = function() {
        var monsterstr = String(this.stageInfo.monster_set);
        var monsterarr = monsterstr.split("#");
        if (2 == monsterarr.length) {
          var monstertype = String(monsterarr[0]);
          var monsternum = Number(monsterarr[1]);
          return monstertype;
        }
        return "10001";
      };
      NewClass.prototype.getMonsterNum = function() {
        var monsterstr = String(this.stageInfo.monster_set);
        var monsterarr = monsterstr.split("#");
        if (2 == monsterarr.length) {
          var monstertype = String(monsterarr[0]);
          var monsternum = Number(monsterarr[1]);
          return monsternum;
        }
        return 10;
      };
      NewClass.prototype.getIsBoss = function() {
        var boss = Number(this.stageInfo.boss);
        if (0 == boss) return false;
        return true;
      };
      NewClass.prototype.getOfflineGold = function() {
        var gold = Number(this.stageInfo.offline_gold_60sec);
        return gold;
      };
      NewClass.prototype.getMaxGold = function() {
        var gold = Number(this.stageInfo.offline_gold_max);
        return gold;
      };
      NewClass.prototype.getFreeGold = function() {
        var gold = Number(this.stageInfo.shop_free_gold);
        return gold;
      };
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  TowerManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6be61fVSndG3IA0dEROZFJ7", "TowerManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UnlockManager_1 = require("./UnlockManager");
    var Log_1 = require("../common/Log");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var TowerManager = function(_super) {
      __extends(TowerManager, _super);
      function TowerManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.connpos = [];
        _this.towerPos = [];
        return _this;
      }
      TowerManager.prototype.onLoad = function() {
        this.lockInfo = new UnlockManager_1.default();
      };
      TowerManager.prototype.start = function() {};
      TowerManager.prototype.initData = function() {
        var _this = this;
        this.lockInfo.initUnlockData();
        this.connpos.forEach(function(con) {
          con.active = false;
          var pos = con.position;
          _this.towerPos.push(pos);
        });
      };
      TowerManager.prototype.getlockConnNum = function(level) {
        var currinfo = this.lockInfo.getUnlockInfo(1, level);
        return currinfo.unlock_content;
      };
      TowerManager.prototype.unlockConn = function(level) {
        var currinfo = this.lockInfo.getUnlockInfo(1, level);
        Log_1.default.info("currinfo = ", currinfo.unlock_content);
        if (currinfo.unlock_content <= this.connpos.length) for (var i = 0; i < currinfo.unlock_content; i++) this.connpos[i].active = true;
      };
      TowerManager.prototype.unlockTower = function(level) {
        var currinfo = this.lockInfo.getUnlockInfo(3, level);
        return currinfo.unlock_content;
      };
      TowerManager.prototype.getPos = function(num) {
        var pos = cc.v2(this.towerPos[num].x + this.node.x, this.towerPos[num].y + this.node.y);
        return pos;
      };
      __decorate([ property(cc.Label) ], TowerManager.prototype, "label", void 0);
      __decorate([ property ], TowerManager.prototype, "text", void 0);
      __decorate([ property({
        type: [ cc.Node ],
        displayName: "conn"
      }) ], TowerManager.prototype, "connpos", void 0);
      TowerManager = __decorate([ ccclass ], TowerManager);
      return TowerManager;
    }(cc.Component);
    exports.default = TowerManager;
    cc._RF.pop();
  }, {
    "../common/Log": "Log",
    "./UnlockManager": "UnlockManager"
  } ],
  TowerProperty: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "556ddsbmDNPpbp0Ij+qPL3i", "TowerProperty");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var TowerProperty = function() {
      function TowerProperty() {
        this.id = "1001";
        this.type = 1;
        this.res = "fort1";
        this.intensify_level = 1;
        this.name = "";
        this.atk = 7;
        this.bullet = 1;
        this.upgrade_cost = 0;
        this.cd = 0;
        this.range = 0;
      }
      return TowerProperty;
    }();
    exports.default = TowerProperty;
    cc._RF.pop();
  }, {} ],
  Tower: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bebd489Nh5GyKo6/OLi0wFN", "Tower");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Utils_1 = require("../common/Utils");
    var TowerProperty_1 = require("../Property/TowerProperty");
    var Bullet_1 = require("./Bullet");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Tower = function(_super) {
      __extends(Tower, _super);
      function Tower() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.levelabel = null;
        _this.leveltext = "1";
        _this.scene = null;
        _this.bullet = null;
        _this.bulletpool = new Array();
        _this.currcd = 0;
        _this.tagNum = 0;
        _this.levelNum = 1;
        _this.lock = false;
        _this.track = false;
        _this.attack = false;
        return _this;
      }
      Tower.prototype.start = function() {};
      Tower.prototype.onLoad = function() {
        this.curr = new TowerProperty_1.default();
        this.attack = false;
      };
      Tower.prototype.setType = function(type) {};
      Tower.prototype.setLevel = function(level) {
        var _this = this;
        this.levelNum = level;
        this.leveltext = this.levelNum.toString();
        this.levelabel.string = this.leveltext;
        this.bulletpool.forEach(function(element) {
          element.getComponent(Bullet_1.default).setDamage(_this.curr.atk, _this.levelNum);
        });
      };
      Tower.prototype.setTrackState = function(istrack) {
        this.track = istrack;
      };
      Tower.prototype.getTrackState = function() {
        return this.track;
      };
      Tower.prototype.getLevel = function() {
        return this.levelNum;
      };
      Tower.prototype.setTag = function(tag) {
        this.tagNum = tag;
      };
      Tower.prototype.getTag = function() {
        return this.tagNum;
      };
      Tower.prototype.setLock = function(islock) {
        this.lock = islock;
      };
      Tower.prototype.getLock = function() {
        return this.lock;
      };
      Tower.prototype.setAngle = function(degree) {
        this.node.angle = degree;
      };
      Tower.prototype.getRange = function() {
        return this.curr.range;
      };
      Tower.prototype.getTowerState = function() {
        return this.attack;
      };
      Tower.prototype.setTowerState = function(towerstate) {
        this.attack = towerstate;
      };
      Tower.prototype.getType = function() {
        console.log("type == " + this.curr.type);
        return this.curr.type;
      };
      Tower.prototype.loodData = function(type) {
        return __awaiter(this, void 0, void 0, function() {
          var localtower, tower, localtype, i, element, dir;
          var _this = this;
          return __generator(this, function(_a) {
            localtower = cc.sys.localStorage.getItem("tower");
            console.log("tower load data");
            tower = JSON.parse(localtower);
            localtype = type;
            for (i = 0; i < tower.length; i++) {
              element = tower[i];
              if (element.type == localtype) {
                this.curr.id = element.id;
                this.curr.type = Number(element.type);
                this.curr.res = String(element.res);
                this.curr.intensify_level = Number(element.intensify_level);
                this.curr.atk = Number(element.atk);
                this.curr.name = element.name;
                this.curr.bullet = Number(element.bullet);
                this.curr.upgrade_cost = Number(element.upgrade_cost);
                this.curr.cd = Number(element.cd);
                this.curr.range = Number(element.range);
                break;
              }
            }
            dir = "anim/tower/" + this.curr.res;
            this.fort.removeComponent(sp.Skeleton);
            return [ 2, new Promise(function(resolve) {
              cc.loader.loadResDir(dir, sp.SkeletonData, function(err, res) {
                var fortanim = this.fort.addComponent(sp.Skeleton);
                fortanim.skeletonData = res[0];
                fortanim.animation = "idle1";
                this.fort.getComponent(sp.Skeleton);
                resolve(true);
              }.bind(_this));
              _this.currcd = _this.curr.cd / 1e3;
            }) ];
          });
        });
      };
      Tower.prototype.stopShoot = function() {
        if (null != this.node.getActionByTag(1e4)) {
          this.node.stopActionByTag(1e4);
          this.fort.getComponent(sp.Skeleton).animation = "";
        }
      };
      Tower.prototype.autoShoot = function() {
        this.stopShoot();
        this.setTowerState(true);
        var delay = cc.delayTime(this.currcd);
        var callF = cc.callFunc(function() {
          this.loadBullet();
        }.bind(this));
        var seqA = cc.sequence([ delay, callF ]);
        var act = cc.repeatForever(seqA);
        act.setTag(1e4);
        this.node.runAction(act);
      };
      Tower.prototype.setTowerOpen = function(isopen) {
        if (isopen) {
          "attack" != this.fort.getComponent(sp.Skeleton).animation && "deformation" != this.fort.getComponent(sp.Skeleton).animation && this.fort.getComponent(sp.Skeleton).setAnimation(0, "deformation", false);
          this.setTowerState(true);
        } else {
          this.fort.getComponent(sp.Skeleton).setAnimation(0, "idle1", true);
          this.setTowerState(false);
        }
      };
      Tower.prototype.loadBullet = function() {
        return __awaiter(this, void 0, void 0, function() {
          var bulletPre, bullet, find, i, bull, bulletPre, bullet;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              this.fort.getComponent(sp.Skeleton).clearTracks();
              this.fort.getComponent(sp.Skeleton).setAnimation(0, "attack", false);
              if (!(0 == this.bulletpool.length)) return [ 3, 2 ];
              return [ 4, Utils_1.default.loadPrefab("prefab/Bullet") ];

             case 1:
              bulletPre = _a.sent();
              bullet = cc.instantiate(bulletPre);
              this.node.addChild(bullet);
              bullet.zIndex = -1;
              bullet.getComponent(Bullet_1.default).setType(this.curr.type);
              bullet.getComponent(Bullet_1.default).setDamage(this.curr.atk, this.levelNum);
              bullet.getComponent(Bullet_1.default).shoot(cc.v2(0, this.curr.range), this.currcd);
              console.log(bullet.name);
              this.bulletpool.push(bullet);
              return [ 3, 4 ];

             case 2:
              find = false;
              for (i = 0; i < this.bulletpool.length; i++) {
                bull = this.bulletpool[i];
                if (bull.getComponent(Bullet_1.default).getWaitState()) {
                  bull.getComponent(Bullet_1.default).shoot(cc.v2(0, this.curr.range), this.currcd);
                  bull.getComponent(Bullet_1.default).setDamage(this.curr.atk, this.levelNum);
                  find = true;
                  break;
                }
              }
              if (!!find) return [ 3, 4 ];
              return [ 4, Utils_1.default.loadPrefab("prefab/Bullet") ];

             case 3:
              bulletPre = _a.sent();
              bullet = cc.instantiate(bulletPre);
              this.node.addChild(bullet);
              bullet.getComponent(Bullet_1.default).setType(this.curr.type);
              bullet.getComponent(Bullet_1.default).shoot(cc.v2(0, this.curr.range), this.currcd);
              bullet.getComponent(Bullet_1.default).setDamage(this.curr.atk, this.levelNum);
              console.log(bullet.name);
              this.bulletpool.push(bullet);
              _a.label = 4;

             case 4:
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Label) ], Tower.prototype, "levelabel", void 0);
      __decorate([ property ], Tower.prototype, "leveltext", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "\u573a\u666f\u8282\u70b9"
      }) ], Tower.prototype, "scene", void 0);
      __decorate([ property({
        type: Bullet_1.default,
        displayName: "bullet"
      }) ], Tower.prototype, "bullet", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "fort"
      }) ], Tower.prototype, "fort", void 0);
      Tower = __decorate([ ccclass ], Tower);
      return Tower;
    }(cc.Component);
    exports.default = Tower;
    cc._RF.pop();
  }, {
    "../Property/TowerProperty": "TowerProperty",
    "../common/Utils": "Utils",
    "./Bullet": "Bullet"
  } ],
  UnlockManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e2035a8RIxFfJBcmWWNbLHF", "UnlockManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UnlockProperty_1 = require("../Property/UnlockProperty");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UnlockManager = function(_super) {
      __extends(UnlockManager, _super);
      function UnlockManager() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      UnlockManager.prototype.onLoad = function() {};
      UnlockManager.prototype.start = function() {};
      UnlockManager.prototype.initUnlockData = function() {
        var localunlock = cc.sys.localStorage.getItem("unlock");
        this.towerConfig = JSON.parse(localunlock);
      };
      UnlockManager.prototype.getUnlockInfo = function(type, stage) {
        var info = new UnlockProperty_1.default();
        for (var i = 0; i < this.towerConfig.length; i++) if (this.towerConfig[i].unlock_type == type && stage >= this.towerConfig[i].stage) {
          info.id = Number(this.towerConfig[i].id);
          info.unlock_type = Number(type);
          info.unlock_content = Number(this.towerConfig[i].unlock_content);
          info.stage = Number(this.towerConfig[i].stage);
        }
        return info;
      };
      __decorate([ property(cc.Label) ], UnlockManager.prototype, "label", void 0);
      __decorate([ property ], UnlockManager.prototype, "text", void 0);
      UnlockManager = __decorate([ ccclass ], UnlockManager);
      return UnlockManager;
    }(cc.Component);
    exports.default = UnlockManager;
    cc._RF.pop();
  }, {
    "../Property/UnlockProperty": "UnlockProperty"
  } ],
  UnlockProperty: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c9207y8QAJOE7uil5jzO6iL", "UnlockProperty");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UnlockProperty = function() {
      function UnlockProperty() {
        this.id = 1001;
        this.unlock_type = 1;
        this.unlock_content = 1;
        this.stage = 0;
      }
      return UnlockProperty;
    }();
    exports.default = UnlockProperty;
    cc._RF.pop();
  }, {} ],
  UpgradeItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e070b4pOgZFdbbJrCVZ+UUV", "UpgradeItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UpgradeItem = function(_super) {
      __extends(UpgradeItem, _super);
      function UpgradeItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.lavellabel = null;
        _this.namelabel = null;
        _this.upgradenumberlabel = null;
        _this.basiclevellabel = null;
        _this.discountlabel = null;
        _this.upgradetype = 0;
        _this.inlevel = 0;
        return _this;
      }
      UpgradeItem.prototype.start = function() {};
      UpgradeItem.prototype.setType = function(type) {
        this.upgradetype = type;
      };
      UpgradeItem.prototype.setInfo = function(name, upgradecost, basiclevel, level) {
        this.namelabel.string = name;
        this.upgradenumberlabel.string = upgradecost;
        this.basiclevellabel.string = basiclevel;
        this.lavellabel.string = "\u7b49\u7ea7:" + level;
        this.inlevel = level;
      };
      UpgradeItem.prototype.clickUpgrade = function() {
        var currgold = Number(cc.sys.localStorage.getItem("currgold"));
        var cost = Number(this.upgradenumberlabel.string);
        if (currgold < cost) {
          console.log("\u5347\u7ea7\u91d1\u5e01\u4e0d\u591f");
          return;
        }
        currgold -= cost;
        cc.sys.localStorage.setItem("currgold", currgold);
        if (0 == this.upgradetype) {
          var locastage = cc.sys.localStorage.getItem("construction");
          var constructionConfig = JSON.parse(locastage);
          var length = constructionConfig.length;
          var constructionInfo = null;
          for (var i = 0; i < length; i++) {
            var info = constructionConfig[i];
            var num = Number(info.intensify_level);
            if (num == this.inlevel + 1) {
              constructionInfo = info;
              break;
            }
          }
          this.setInfo(constructionInfo.name, constructionInfo.upgrade_cost, constructionInfo.construction_level, this.inlevel + 1);
          cc.sys.localStorage.setItem("constructionLevel", this.inlevel);
        } else {
          var localtower = cc.sys.localStorage.getItem("tower");
          console.log("tower load data");
          var tower = JSON.parse(localtower);
          for (var j = 0; j < tower.length; j++) {
            var element = tower[j];
            if (Number(element.type) == this.upgradetype) {
              if (1 == this.upgradetype && Number(element.intensify_level) == this.inlevel + 1) {
                var name = element.name;
                var upgrade_cost = Number(element.upgrade_cost);
                this.setInfo(name, upgrade_cost, 1, this.inlevel + 1);
                cc.sys.localStorage.setItem("type1Level", this.inlevel);
                break;
              }
              if (2 == this.upgradetype && Number(element.intensify_level) == this.inlevel + 1) {
                var name = element.name;
                var upgrade_cost = Number(element.upgrade_cost);
                this.setInfo(name, upgrade_cost, 1, this.inlevel + 1);
                cc.sys.localStorage.setItem("type2Level", this.inlevel);
                break;
              }
              if (3 == this.upgradetype && Number(element.intensify_level) == this.inlevel + 1) {
                var name = element.name;
                var upgrade_cost = Number(element.upgrade_cost);
                this.setInfo(name, upgrade_cost, 1, this.inlevel + 1);
                cc.sys.localStorage.setItem("type3Level", this.inlevel);
                break;
              }
              if (4 == this.upgradetype && Number(element.intensify_level) == this.inlevel + 1) {
                var name = element.name;
                var upgrade_cost = Number(element.upgrade_cost);
                this.setInfo(name, upgrade_cost, 1, this.inlevel + 1);
                cc.sys.localStorage.setItem("type4Level", this.inlevel);
                break;
              }
            }
          }
        }
      };
      __decorate([ property(cc.Label) ], UpgradeItem.prototype, "lavellabel", void 0);
      __decorate([ property(cc.Label) ], UpgradeItem.prototype, "namelabel", void 0);
      __decorate([ property(cc.Label) ], UpgradeItem.prototype, "upgradenumberlabel", void 0);
      __decorate([ property(cc.Label) ], UpgradeItem.prototype, "basiclevellabel", void 0);
      __decorate([ property(cc.Label) ], UpgradeItem.prototype, "discountlabel", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "discount"
      }) ], UpgradeItem.prototype, "discountIcon", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "upgradeIcon"
      }) ], UpgradeItem.prototype, "upgradeIcon", void 0);
      UpgradeItem = __decorate([ ccclass ], UpgradeItem);
      return UpgradeItem;
    }(cc.Component);
    exports.default = UpgradeItem;
    cc._RF.pop();
  }, {} ],
  UpgradeManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "87d35EJ93FFt5HFSYig04Fq", "UpgradeManager");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NewClass = function(_super) {
      __extends(NewClass, _super);
      function NewClass() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        return _this;
      }
      NewClass.prototype.start = function() {};
      __decorate([ property(cc.Label) ], NewClass.prototype, "label", void 0);
      __decorate([ property ], NewClass.prototype, "text", void 0);
      NewClass = __decorate([ ccclass ], NewClass);
      return NewClass;
    }(cc.Component);
    exports.default = NewClass;
    cc._RF.pop();
  }, {} ],
  UpgradeView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "883c8GdogFNjoFeR9Sz/ZUf", "UpgradeView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Utils_1 = require("../common/Utils");
    var UpgradeItem_1 = require("../Objects/UpgradeItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UpgradeView = function(_super) {
      __extends(UpgradeView, _super);
      function UpgradeView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = "hello";
        _this.constructionLevel = 1;
        _this.type1Level = 1;
        _this.type2Level = 1;
        _this.type3Level = 1;
        _this.type4Level = 1;
        return _this;
      }
      UpgradeView.prototype.start = function() {};
      UpgradeView.prototype.onEnable = function() {
        var constructionlevel = Number(cc.sys.localStorage.getItem("constructionLevel"));
        var type1level = Number(cc.sys.localStorage.getItem("type1Level"));
        var type2level = Number(cc.sys.localStorage.getItem("type2Level"));
        var type3level = Number(cc.sys.localStorage.getItem("type3Level"));
        var type4level = Number(cc.sys.localStorage.getItem("type4Level"));
        null != constructionlevel && constructionlevel > this.constructionLevel && (this.constructionLevel = constructionlevel);
        null != type1level && type1level > this.type1Level && (this.type1Level = type1level);
        null != type2level && type2level > this.type2Level && (this.type2Level = type2level);
        null != type3level && type3level > this.type3Level && (this.type3Level = type3level);
        null != type4level && type4level > this.type4Level && (this.type4Level = type4level);
        this.initData();
      };
      UpgradeView.prototype.initData = function() {
        return __awaiter(this, void 0, void 0, function() {
          var locastage, constructionConfig, length, constructionInfo, i_1, info, num, localtower, tower, height, i, upgradePre, upgradeitem, j, element, name, upgrade_cost, name, upgrade_cost, name, upgrade_cost, name, upgrade_cost;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              locastage = cc.sys.localStorage.getItem("construction");
              constructionConfig = JSON.parse(locastage);
              length = constructionConfig.length;
              constructionInfo = null;
              for (i_1 = 0; i_1 < length; i_1++) {
                info = constructionConfig[i_1];
                num = Number(info.intensify_level);
                if (num == this.constructionLevel) {
                  constructionInfo = info;
                  break;
                }
              }
              localtower = cc.sys.localStorage.getItem("tower");
              console.log("tower load data");
              tower = JSON.parse(localtower);
              height = 0;
              i = 0;
              _a.label = 1;

             case 1:
              if (!(i < 5)) return [ 3, 4 ];
              return [ 4, Utils_1.default.loadPrefab("prefab/upgradeitem") ];

             case 2:
              upgradePre = _a.sent();
              upgradeitem = cc.instantiate(upgradePre);
              this.content.addChild(upgradeitem);
              if (0 == i) {
                upgradeitem.getComponent(UpgradeItem_1.default).setType(0);
                upgradeitem.getComponent(UpgradeItem_1.default).setInfo(constructionInfo.name, constructionInfo.upgrade_cost, constructionInfo.construction_level, this.constructionLevel);
              } else if (i > 0 && i < 5) {
                upgradeitem.getComponent(UpgradeItem_1.default).setType(i);
                for (j = 0; j < tower.length; j++) {
                  element = tower[j];
                  if (Number(element.type) == i) {
                    if (1 == i && Number(element.intensify_level) == this.type1Level) {
                      name = element.name;
                      upgrade_cost = Number(element.upgrade_cost);
                      upgradeitem.getComponent(UpgradeItem_1.default).setInfo(name, upgrade_cost, 1, this.type1Level);
                      break;
                    }
                    if (2 == i && Number(element.intensify_level) == this.type2Level) {
                      name = element.name;
                      upgrade_cost = Number(element.upgrade_cost);
                      upgradeitem.getComponent(UpgradeItem_1.default).setInfo(name, upgrade_cost, 1, this.type2Level);
                      break;
                    }
                    if (3 == i && Number(element.intensify_level) == this.type3Level) {
                      name = element.name;
                      upgrade_cost = Number(element.upgrade_cost);
                      upgradeitem.getComponent(UpgradeItem_1.default).setInfo(name, upgrade_cost, 1, this.type3Level);
                      break;
                    }
                    if (4 == i && Number(element.intensify_level) == this.type4Level) {
                      name = element.name;
                      upgrade_cost = Number(element.upgrade_cost);
                      upgradeitem.getComponent(UpgradeItem_1.default).setInfo(name, upgrade_cost, 1, this.type4Level);
                      break;
                    }
                  }
                }
              }
              height += upgradeitem.height + 10;
              _a.label = 3;

             case 3:
              i++;
              return [ 3, 1 ];

             case 4:
              this.content.height = height;
              return [ 2 ];
            }
          });
        });
      };
      __decorate([ property(cc.Label) ], UpgradeView.prototype, "label", void 0);
      __decorate([ property ], UpgradeView.prototype, "text", void 0);
      __decorate([ property({
        type: cc.ScrollView,
        displayName: "upgradelist"
      }) ], UpgradeView.prototype, "upgradelist", void 0);
      __decorate([ property({
        type: cc.Node,
        displayName: "content"
      }) ], UpgradeView.prototype, "content", void 0);
      UpgradeView = __decorate([ ccclass ], UpgradeView);
      return UpgradeView;
    }(cc.Component);
    exports.default = UpgradeView;
    cc._RF.pop();
  }, {
    "../Objects/UpgradeItem": "UpgradeItem",
    "../common/Utils": "Utils"
  } ],
  Utils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c37bezAQJVASZAoSBU8n9yJ", "Utils");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : new P(function(resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Log_1 = require("./Log");
    var Utils = function() {
      function Utils() {}
      Utils.clone = function(src) {
        if (!src || "object" !== typeof src) return src;
        var out = src.constructor === Array ? [] : {};
        var _clone = function(o, c) {
          for (var i in o) if (o[i] && "object" === typeof o[i]) {
            o[i].constructor === Array ? c[i] = [] : c[i] = {};
            _clone(o[i], c[i]);
          } else c[i] = o[i];
          return c;
        };
        return _clone(src, out);
      };
      Utils.loadJson = function(_address) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              cc.loader.loadRes(_address, cc.JsonAsset, function(err, asset) {
                if (err) {
                  Log_1.default.error(err);
                  resolve({});
                } else resolve(asset.json);
              });
            }) ];
          });
        });
      };
      Utils.loadAudioClip = function(_address) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              cc.loader.loadRes(_address, cc.AudioClip, function(err, asset) {
                if (err) {
                  Log_1.default.error(err);
                  resolve(null);
                } else resolve(asset);
              });
            }) ];
          });
        });
      };
      Utils.loadPrefab = function(_address) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              cc.loader.loadRes(_address, cc.Prefab, function(err, asset) {
                if (err) {
                  Log_1.default.error(err);
                  resolve(null);
                } else resolve(asset);
              });
            }) ];
          });
        });
      };
      Utils.loadImage = function(_address) {
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            return [ 2, new Promise(function(resolve) {
              cc.loader.loadRes(_address, cc.SpriteFrame, function(err, asset) {
                if (err) {
                  Log_1.default.error(err);
                  resolve(null);
                } else resolve(asset);
              });
            }) ];
          });
        });
      };
      return Utils;
    }();
    exports.default = Utils;
    cc._RF.pop();
  }, {
    "./Log": "Log"
  } ],
  XBGM: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f61bbvF1QpIG7IHSJOwmFuy", "XBGM");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Audio_1 = require("../Audio");
    var Log_1 = require("../Log");
    var XBGM = function(_super) {
      __extends(XBGM, _super);
      function XBGM() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bgmAudio = null;
        _this.slientPlay = false;
        _this.volumeRate = .8;
        return _this;
      }
      XBGM.prototype.start = function() {
        var _this = this;
        if (!this.bgmAudio) {
          Log_1.default.error("\u6ca1\u6709\u6dfb\u52a0\u80cc\u666f\u97f3\u4e50");
          Audio_1.default.stopBGM();
          return;
        }
        var vol = Audio_1.default.xGet("bgmVolume");
        if (vol <= .001 && !this.slientPlay) {
          Log_1.default.info("\u97f3\u91cf\u592a\u5c0f\u6216\u6ca1\u6709\u5141\u8bb8\u64ad\u653e");
          return;
        }
        this.scheduleOnce(function() {
          Log_1.default.info("\u5f00\u59cb\u64ad\u653e\u97f3\u4e50", _this.bgmAudio);
          Audio_1.default.playBGM(_this.bgmAudio, _this.volumeRate);
        }, .05);
      };
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u80cc\u666f\u97f3\u4e50"
      }) ], XBGM.prototype, "bgmAudio", void 0);
      __decorate([ property({
        type: Boolean,
        displayName: "\u9759\u9ed8\u64ad\u653e"
      }) ], XBGM.prototype, "slientPlay", void 0);
      __decorate([ property({
        type: cc.Float,
        displayName: "\u97f3\u91cf\u6bd4"
      }) ], XBGM.prototype, "volumeRate", void 0);
      XBGM = __decorate([ ccclass ], XBGM);
      return XBGM;
    }(cc.Component);
    exports.default = XBGM;
    cc._RF.pop();
  }, {
    "../Audio": "Audio",
    "../Log": "Log"
  } ],
  XButton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6bd789T9ShP6pN1TQ3jyNAX", "XButton");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Audio_1 = require("../Audio");
    var XButton = function(_super) {
      __extends(XButton, _super);
      function XButton() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.touchAudio = null;
        _this.clickInterval = .4;
        _this.touchEvents = [];
        _this.touchStartEvents = [];
        _this.touchCancelEvents = [];
        _this.isDown = false;
        _this.rawScale = 0;
        _this.clickTime = null;
        return _this;
      }
      XButton.prototype.onLoad = function() {
        this.rawScale = this.node.scale;
        this.node.on("touchstart", this.touchStart.bind(this), this.node);
        this.node.on("touchend", this.touchEnd.bind(this), this.node);
        this.node.on("touchcancel", this.touchCancel.bind(this), this.node);
      };
      XButton.prototype.touchStart = function(event) {
        if (false == this.enabled) return;
        this.isDown = true;
        this.touchAudio && Audio_1.default.playSFX(this.touchAudio);
        this.touchStartEvents.length > 0 && cc.Component.EventHandler.emitEvents(this.touchStartEvents);
      };
      XButton.prototype.touchEnd = function(event) {
        this.isDown = false;
        if (false == this.enabled) return;
        var now = new Date();
        var ms = 1e3 * this.clickInterval;
        if (now.getTime() - this.clickTime < ms) return;
        this.clickTime = now.getTime();
        this.touchEvents.length > 0 && cc.Component.EventHandler.emitEvents(this.touchEvents);
      };
      XButton.prototype.touchCancel = function(event) {
        this.isDown = false;
        if (false == this.enabled) return;
        this.touchCancelEvents.length > 0 && cc.Component.EventHandler.emitEvents(this.touchCancelEvents);
      };
      XButton.prototype.addTouchStartEvent = function(_targetNode, _componentName, _handlerName, _customEventData) {
        void 0 === _customEventData && (_customEventData = "");
        var handler = new cc.Component.EventHandler();
        handler.target = _targetNode;
        handler.component = _componentName;
        handler.customEventData = _customEventData + "";
        handler.handler = _handlerName;
        this.touchStartEvents.push(handler);
      };
      XButton.prototype.addTouchEvent = function(_targetNode, _componentName, _handlerName, _customEventData) {
        void 0 === _customEventData && (_customEventData = "");
        var handler = new cc.Component.EventHandler();
        handler.target = _targetNode;
        handler.component = _componentName;
        handler.customEventData = _customEventData + "";
        handler.handler = _handlerName;
        this.touchEvents.push(handler);
      };
      XButton.prototype.addTouchCancelEvent = function(_targetNode, _componentName, _handlerName, _customEventData) {
        void 0 === _customEventData && (_customEventData = "");
        var handler = new cc.Component.EventHandler();
        handler.target = _targetNode;
        handler.component = _componentName;
        handler.customEventData = _customEventData + "";
        handler.handler = _handlerName;
        this.touchCancelEvents.push(handler);
      };
      __decorate([ property({
        type: cc.AudioClip,
        displayName: "\u89e6\u6478\u97f3"
      }) ], XButton.prototype, "touchAudio", void 0);
      __decorate([ property({
        type: cc.Float,
        displayName: "\u70b9\u51fb\u95f4\u9694"
      }) ], XButton.prototype, "clickInterval", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u89e6\u6478\u56de\u8c03"
      }) ], XButton.prototype, "touchEvents", void 0);
      XButton = __decorate([ ccclass ], XButton);
      return XButton;
    }(cc.Component);
    exports.default = XButton;
    cc._RF.pop();
  }, {
    "../Audio": "Audio"
  } ],
  XCamera: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a85d8rtRs1MWL8c7scwqTbe", "XCamera");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Xcamera = function(_super) {
      __extends(Xcamera, _super);
      function Xcamera() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Xcamera_1 = Xcamera;
      Xcamera.prototype.onLoad = function() {
        Xcamera_1.Instance = this;
      };
      var Xcamera_1;
      Xcamera.Instance = null;
      Xcamera = Xcamera_1 = __decorate([ ccclass ], Xcamera);
      return Xcamera;
    }(cc.Component);
    exports.default = Xcamera;
    cc._RF.pop();
  }, {} ],
  XToggleGroup: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cfc05+FMCZERJn7RnzBzY/B", "XToggleGroup");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var XToggleGroup = function(_super) {
      __extends(XToggleGroup, _super);
      function XToggleGroup() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.allowSwitchOff = false;
        _this.toggleItems = [];
        return _this;
      }
      XToggleGroup.prototype.updateToggles = function(toggle) {
        if (!this.enabledInHierarchy) return;
        this.toggleItems.forEach(function(item) {
          toggle.isChecked && item !== toggle && item.isChecked && item.enabled && item._hideCheckMark();
        });
      };
      XToggleGroup.prototype.addToggle = function(toggle) {
        var index = this.toggleItems.indexOf(toggle);
        if (-1 === index) {
          toggle.toggleGroup = this;
          this.toggleItems.push(toggle);
        }
      };
      XToggleGroup.prototype.removeToggle = function(toggle) {
        var index = this.toggleItems.indexOf(toggle);
        index > -1 && this.toggleItems.splice(index, 1);
      };
      XToggleGroup.prototype._hideAllToggle = function() {
        this.toggleItems.forEach(function(item) {
          item._hideCheckMark();
        });
      };
      XToggleGroup.prototype.start = function() {};
      XToggleGroup = __decorate([ ccclass ], XToggleGroup);
      return XToggleGroup;
    }(cc.Component);
    exports.default = XToggleGroup;
    cc._RF.pop();
  }, {} ],
  XToggle: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5664b6BoSdLJpXvgYK5/N90", "XToggle");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var XToggleGroup_1 = require("./XToggleGroup");
    var XToggle = function(_super) {
      __extends(XToggle, _super);
      function XToggle() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isChecked = false;
        _this.toggleGroup = null;
        _this.checkMark = null;
        _this.checkEvents = [];
        return _this;
      }
      XToggle.prototype.onLoad = function() {
        this._registerToggleEvent();
        this._updateCheckMark();
        this.toggleGroup && this.toggleGroup.addToggle(this);
      };
      XToggle.prototype.onDisable = function() {
        this._unregisterToggleEvent();
        this.toggleGroup && this.toggleGroup.removeToggle(this);
      };
      XToggle.prototype._hideCheckMark = function() {
        this.isChecked = false;
        this._updateCheckMark();
      };
      XToggle.prototype.toggle = function(event) {
        this.toggleGroup && this.toggleGroup._hideAllToggle();
        this.isChecked = !this.isChecked;
        this._updateCheckMark();
        this._emitToggleEvents();
      };
      XToggle.prototype.check = function() {
        this.isChecked = true;
        this._updateCheckMark();
      };
      XToggle.prototype.uncheck = function() {
        this.isChecked = false;
        this._updateCheckMark();
      };
      XToggle.prototype._updateCheckMark = function() {
        this.checkMark.node.active = !!this.isChecked;
      };
      XToggle.prototype._registerToggleEvent = function() {
        this.node.on("touchend", this.toggle, this);
      };
      XToggle.prototype._unregisterToggleEvent = function() {
        this.node.off("touchend", this.toggle, this);
      };
      XToggle.prototype._emitToggleEvents = function() {
        this.node.emit("toggle", this);
        this.checkEvents && cc.Component.EventHandler.emitEvents(this.checkEvents, this);
      };
      __decorate([ property({
        type: cc.Boolean,
        displayName: "\u9ed8\u8ba4\u662f\u5426\u9009\u4e2d"
      }) ], XToggle.prototype, "isChecked", void 0);
      __decorate([ property({
        type: XToggleGroup_1.default,
        displayName: "\u6240\u5c5e\u7684\u6309\u94ae\u7ec4"
      }) ], XToggle.prototype, "toggleGroup", void 0);
      __decorate([ property({
        type: cc.Sprite,
        displayName: "\u9009\u4e2d\u663e\u793a\u7684\u56fe\u7247"
      }) ], XToggle.prototype, "checkMark", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u70b9\u51fb\u4e8b\u4ef6"
      }) ], XToggle.prototype, "checkEvents", void 0);
      XToggle = __decorate([ ccclass ], XToggle);
      return XToggle;
    }(cc.Component);
    exports.default = XToggle;
    cc._RF.pop();
  }, {
    "./XToggleGroup": "XToggleGroup"
  } ],
  eCode: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2e193cb4c1J2oFPyVCiJQMe", "eCode");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var eCode = function() {
      function eCode() {}
      eCode.Ok = 200;
      eCode.Error = 400;
      eCode.NotFound = 404;
      eCode.BadJson = 405;
      eCode.TimeOut = 1e4;
      return eCode;
    }();
    exports.default = eCode;
    cc._RF.pop();
  }, {} ],
  netConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4fc21rVUDBNsrzbC9pmVMaZ", "netConfig");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var NetConfig = function() {
      function NetConfig() {}
      NetConfig.onLine = "https://littlegame.tomato123.cn";
      return NetConfig;
    }();
    exports.default = NetConfig;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Helloworld", "ChapterManger", "ConstructionManager", "StageManager", "TowerManager", "UnlockManager", "UpgradeManager", "Bullet", "Monster", "StageChange", "Tower", "UpgradeItem", "BulletProperty", "MonsterProperty", "TowerProperty", "UnlockProperty", "GameControll", "Loading", "Map", "ScrollLayout", "UpgradeView", "ShaderHelper", "ShaderTime", "Audio", "Caches", "Log", "Utils", "XBGM", "XButton", "XCamera", "XToggle", "XToggleGroup", "Props", "Http", "eCode", "netConfig" ]);