"use strict";
(self["webpackChunkmythik_angular"] = self["webpackChunkmythik_angular"] || []).push([["main"],{

/***/ 545:
/*!**********************************************!*\
  !*** ./src/app/accueil/accueil.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccueilComponent: () => (/* binding */ AccueilComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 6466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




function AccueilComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gestion des creatures");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function AccueilComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 3)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gestion des comptes");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/menu"];
};
const _c1 = function () {
  return ["/creature"];
};
const _c2 = function () {
  return ["/compte"];
};
const _c3 = function () {
  return ["/combat"];
};
const _c4 = function () {
  return ["/grimoire"];
};
class AccueilComponent {
  constructor(authService) {
    this.authService = authService;
    this.Admin = false;
  }
  isAdmin() {
    if (this.authService.getCompte().type == "admin") {
      return true;
    } else {
      return false;
    }
  }
  static #_ = this.ɵfac = function AccueilComponent_Factory(t) {
    return new (t || AccueilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AccueilComponent,
    selectors: [["app-accueil"]],
    decls: 49,
    vars: 12,
    consts: [["id", "main_container"], [1, "boutons"], ["routerLinkActive", "active", 3, "routerLink"], ["type", "button", 1, "button"], ["src", "../../assets/illuminations/illumination7.png"], ["type", "button", "class", "button", 4, "ngIf"], [1, "accueil"], [1, "section", "sec_combat"], ["id", "combat_deco", 1, "deco"], ["src", "../../assets/weapons/weapons7.png"], ["src", "../../assets/weapons/weapons6.png"], ["src", "../../assets/weapons/weapons5.png"], ["src", "../../assets/weapons/weapons4.png"], ["src", "../../assets/weapons/weapons3.png"], ["src", "../../assets/weapons/weapons2.png"], ["src", "../../assets/weapons/weapons1.png"], [1, "titre"], [1, "section", "sec_grimoire"], ["id", "letterG"], ["id", "grimoire_deco", 1, "deco"], ["src", "../../assets/illuminations/illumination1.png"], ["src", "../../assets/illuminations/illumination2.png"], ["src", "../../assets/illuminations/illumination3.png"], ["src", "../../assets/illuminations/illumination4.png"], ["src", "../../assets/illuminations/illumination5.png"], ["src", "../../assets/illuminations/illumination6.png"], ["src", "../../assets/illuminations/illumination8.png"], ["src", "../../assets/illuminations/illumination9.png"]],
    template: function AccueilComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2)(3, "button", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Se d\u00E9connecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AccueilComponent_button_8_Template, 4, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AccueilComponent_button_10_Template, 4, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6)(12, "div", 7)(13, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Affronter de terribles cr\u00E9atures mythologiques");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 9)(17, "img", 10)(18, "img", 11)(19, "img", 12)(20, "img", 13)(21, "img", 14)(22, "img", 15)(23, "img", 10)(24, "img", 11)(25, "img", 12)(26, "img", 13)(27, "img", 14)(28, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Mythik");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17)(32, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Partir \u00E0 la d\u00E9couverte du ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span")(36, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "G");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "rimoire");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 20)(41, "img", 21)(42, "img", 22)(43, "img", 23)(44, "img", 24)(45, "img", 25)(46, "img", 4)(47, "img", 26)(48, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAdmin());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c4));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
    styles: [".section[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation: _ngcontent-%COMP%_accueilAppear 1s;\n  animation-fill-mode: forwards;\n  animation-delay: 3s;\n}\n\n@keyframes _ngcontent-%COMP%_accueilAppear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.boutons[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-top: -3000px;\n  top: 0px;\n  display: flex;\n  width: 100vw;\n  justify-content: center;\n  animation: _ngcontent-%COMP%_boutonsAppear 1s;\n  animation-fill-mode: forwards;\n  animation-delay: 3s;\n}\n.boutons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n@keyframes _ngcontent-%COMP%_boutonsAppear {\n  from {\n    margin-top: -300px;\n  }\n  to {\n    margin-top: 5vh;\n  }\n}\n.button[_ngcontent-%COMP%] {\n  font-size: small;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 30vmin;\n  height: 15vmin;\n  margin: 0px 10px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  background: url('wooden_sign_botton.png'), radial-gradient(rgb(0, 0, 0), transparent 85%);\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  background-position: top;\n  color: rgba(13, 1, 1, 0.6705882353);\n  \n\n  border: none;\n  transition: background-color 0.3s ease, color 0.3s ease;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n  transform-origin: top;\n  transition: 0.3s;\n}\n.button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 2vmin;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  z-index: 1;\n}\n.button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 30%;\n  opacity: 0.3;\n  position: absolute;\n  z-index: 0;\n  transition: 0.3s;\n  filter: sepia(1);\n}\n.button[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 100%;\n  background: url('wooden_sign_top.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: bottom;\n  transition: 0.2s;\n}\n.button[_ngcontent-%COMP%]:hover {\n  color: white;\n  text-shadow: 1px 1px 2px rgba(255, 0, 0, 0.764), 0 0 1em blue, 0 0 0.2em blue;\n  animation: _ngcontent-%COMP%_swing 1s infinite ease-in-out;\n}\n.button[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  filter: sepia(0);\n}\n.button[_ngcontent-%COMP%]:focus {\n  animation: _ngcontent-%COMP%_zoomIn 0.6s ease-in;\n  position: relative;\n  z-index: 1000;\n  transform-origin: center;\n}\n.button[_ngcontent-%COMP%]:focus::before {\n  opacity: 0;\n}\n\n@keyframes _ngcontent-%COMP%_swing {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(-2deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  75% {\n    transform: rotate(2deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_zoomIn {\n  from {\n    transform: scale(1) rotate(0deg);\n    filter: blur(0px);\n  }\n  to {\n    transform: scale(10) rotate(360deg);\n    filter: blur(5px);\n  }\n}\n.titre[_ngcontent-%COMP%] {\n  font-size: 17.5vmin;\n  margin-top: 20vmin;\n  opacity: 0;\n  background-image: url('thunder2.gif');\n  background-blend-mode: lighten;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  text-align: center;\n  font-family: bronzion;\n  color: rgba(67, 0, 0, 0.952);\n  cursor: url('middle-ages-cursor-32x32.png'), pointer;\n  animation: _ngcontent-%COMP%_glowText 2s ease-in-out infinite alternate, _ngcontent-%COMP%_titreAppear 4s forwards;\n  transition: 2s;\n}\n.titre[_ngcontent-%COMP%]:hover {\n  filter: brightness(2);\n}\n\n@keyframes _ngcontent-%COMP%_glowText {\n  from {\n    --glowColor1: #016ada;\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px var(--glowColor1), 0 0 40px var(--glowColor1), 0 0 50px var(--glowColor1), 0 0 60px var(--glowColor1), 0 0 70px var(--glowColor1);\n    transform: translateX(0.5px);\n  }\n  to {\n    --glowColor2: #00d8db;\n    text-shadow: 0 0 20px #fff, 0 0 30px var(--glowColor2), 0 0 40px var(--glowColor2), 0 0 50px var(--glowColor2), 0 0 60px var(--glowColor2), 0 0 70px var(--glowColor2), 0 0 80px var(--glowColor2);\n    transform: translateX(-0.5px);\n  }\n}\n@keyframes _ngcontent-%COMP%_titreAppear {\n  from {\n    opacity: 0;\n    transform: scale(3);\n    filter: hue-rotate(180deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.accueil[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  cursor: url('middle-ages-cursor-32x32.png'), pointer;\n}\n\n.section[_ngcontent-%COMP%] {\n  top: 25vmin;\n  height: 50vmin;\n  aspect-ratio: 2/3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border: 1px solid darkred;\n  border-radius: 50%;\n  position: relative;\n  background-color: rgba(245, 245, 220, 0.555);\n  font-family: bronzion;\n  font-size: 15vmin;\n  z-index: 10;\n  cursor: url('middle-ages-cursor-32x32.png'), pointer;\n  transition: 0.1s ease-in-out;\n  transition-delay: 0s;\n}\n.section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  color: white !important;\n  font-family: \"Lugrasimo\";\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  transition: 2s;\n  text-decoration: none;\n}\n.section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  outline: none;\n  filter: brightness(10) blur(100px);\n  transform: scale(2);\n}\n.section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + .deco[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_chooseMode alternate 0.5s 2;\n}\n.section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + .deco[_ngcontent-%COMP%]::before {\n  content: \"test\";\n  position: absolute;\n  top: -100vh;\n  height: 200vh;\n  width: 200vw;\n  animation: _ngcontent-%COMP%_chooseBg alternate 0.5s 2;\n}\n.section[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus    + .deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: 0.5s !important;\n  transition-delay: 0s !important;\n  opacity: 0 !important;\n}\n.section[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  top: 50%;\n  left: 50%;\n  height: 120%;\n  width: 120%;\n  opacity: 0.5;\n  transform: translate(-50%, -50%);\n  background-image: url('_-_-assets-fire_ring.gif');\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n.section[_ngcontent-%COMP%]:hover {\n  z-index: 10000;\n  transform: scale(1.05);\n}\n.section[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%] {\n  text-shadow: #FC0 1px 0 10px;\n  background: radial-gradient(red, blue);\n  box-shadow: 0px 0px 350px blue;\n}\n.section[_ngcontent-%COMP%]:hover:before {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  background: radial-gradient(transparent, rgba(0, 0, 0, 0.75) 75%);\n  width: 200vw;\n  height: 200vh;\n}\n\n@keyframes _ngcontent-%COMP%_chooseMode {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(2) rotate(15deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_chooseBg {\n  from {\n    background-color: transparent;\n  }\n  to {\n    background-color: black;\n  }\n}\n.sec_grimoire[_ngcontent-%COMP%] {\n  background: url('grimoire-cover2.jpeg'), radial-gradient(purple, black);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.sec_grimoire[_ngcontent-%COMP%]   #letterG[_ngcontent-%COMP%] {\n  font-family: \"bronzion\";\n  font-size: 10vmin;\n}\n.sec_grimoire[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n}\n\n#grimoire_deco[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n  transition: 0.3s;\n  background-color: green;\n  position: absolute;\n  z-index: -10;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40vmin;\n  transform-origin: center;\n  transform: scale(0.01);\n}\n\n#grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(1) {\n  transition: calc(1 * 0.1s);\n}\n\n.sec_grimoire[_ngcontent-%COMP%]:hover   #grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(calc(1 * 23deg)) scale(-1) translateY(-35vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(1 * 0.1s);\n}\n\n#grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n  transition: calc(2 * 0.1s);\n}\n\n.sec_grimoire[_ngcontent-%COMP%]:hover   #grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotate(calc(2 * 23deg)) scale(-1) translateY(-35vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(2 * 0.1s);\n}\n\n#grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3) {\n  transition: calc(3 * 0.1s);\n}\n\n.sec_grimoire[_ngcontent-%COMP%]:hover   #grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(calc(3 * 23deg)) scale(-1) translateY(-35vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(3 * 0.1s);\n}\n\n#grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(4) {\n  transition: calc(4 * 0.1s);\n}\n\n.sec_grimoire[_ngcontent-%COMP%]:hover   #grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotate(calc(4 * 23deg)) scale(-1) translateY(-35vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(4 * 0.1s);\n}\n\n#grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(5) {\n  transition: calc(5 * 0.1s);\n}\n\n.sec_grimoire[_ngcontent-%COMP%]:hover   #grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(5) {\n  transform: rotate(calc(5 * 23deg)) scale(-1) translateY(-35vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(5 * 0.1s);\n}\n\n#grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(6) {\n  transition: calc(6 * 0.1s);\n}\n\n.sec_grimoire[_ngcontent-%COMP%]:hover   #grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(6) {\n  transform: rotate(calc(6 * 23deg)) scale(-1) translateY(-35vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(6 * 0.1s);\n}\n\n#grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(7) {\n  transition: calc(7 * 0.1s);\n}\n\n.sec_grimoire[_ngcontent-%COMP%]:hover   #grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(7) {\n  transform: rotate(calc(7 * 23deg)) scale(-1) translateY(-35vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(7 * 0.1s);\n}\n\n#grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(8) {\n  transition: calc(8 * 0.1s);\n}\n\n.sec_grimoire[_ngcontent-%COMP%]:hover   #grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(8) {\n  transform: rotate(calc(8 * 23deg)) scale(-1) translateY(-35vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(8 * 0.1s);\n}\n\n#grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(9) {\n  transition: calc(9 * 0.1s);\n}\n\n.sec_grimoire[_ngcontent-%COMP%]:hover   #grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(9) {\n  transform: rotate(calc(9 * 23deg)) scale(-1) translateY(-35vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(9 * 0.1s);\n}\n\n#grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(10) {\n  transition: calc(10 * 0.1s);\n}\n\n.sec_grimoire[_ngcontent-%COMP%]:hover   #grimoire_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(10) {\n  transform: rotate(calc(10 * 23deg)) scale(-1) translateY(-35vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(10 * 0.1s);\n}\n\n.sec_combat[_ngcontent-%COMP%] {\n  background: url('cockatrice.png'), radial-gradient(red, black);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.sec_combat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: url('sword.cur'), pointer;\n}\n\n#combat_deco[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -webkit-user-select: none;\n          user-select: none;\n  transition: 0.3s;\n  background-color: green;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 40vmin;\n  transform-origin: center;\n  transform: scale(0.01);\n}\n\n#combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(1) {\n  transition: calc(1 * 0.1s);\n}\n\n.sec_combat[_ngcontent-%COMP%]:hover   #combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(calc(1 * 15deg)) scale(1) translateY(-30vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(1 * 0.1s);\n}\n\n#combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n  transition: calc(2 * 0.1s);\n}\n\n.sec_combat[_ngcontent-%COMP%]:hover   #combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(2) {\n  transform: rotate(calc(2 * 15deg)) scale(1) translateY(-30vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(2 * 0.1s);\n}\n\n#combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3) {\n  transition: calc(3 * 0.1s);\n}\n\n.sec_combat[_ngcontent-%COMP%]:hover   #combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(calc(3 * 15deg)) scale(1) translateY(-30vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(3 * 0.1s);\n}\n\n#combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(4) {\n  transition: calc(4 * 0.1s);\n}\n\n.sec_combat[_ngcontent-%COMP%]:hover   #combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(4) {\n  transform: rotate(calc(4 * 15deg)) scale(1) translateY(-30vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(4 * 0.1s);\n}\n\n#combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(5) {\n  transition: calc(5 * 0.1s);\n}\n\n.sec_combat[_ngcontent-%COMP%]:hover   #combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(5) {\n  transform: rotate(calc(5 * 15deg)) scale(1) translateY(-30vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(5 * 0.1s);\n}\n\n#combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(6) {\n  transition: calc(6 * 0.1s);\n}\n\n.sec_combat[_ngcontent-%COMP%]:hover   #combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(6) {\n  transform: rotate(calc(6 * 15deg)) scale(1) translateY(-30vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(6 * 0.1s);\n}\n\n#combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(7) {\n  transition: calc(7 * 0.1s);\n}\n\n.sec_combat[_ngcontent-%COMP%]:hover   #combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(7) {\n  transform: rotate(calc(7 * 15deg)) scale(1) translateY(-30vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(7 * 0.1s);\n}\n\n#combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(8) {\n  transition: calc(8 * 0.1s);\n}\n\n.sec_combat[_ngcontent-%COMP%]:hover   #combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(8) {\n  transform: rotate(calc(8 * 15deg)) scale(1) translateY(-30vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(8 * 0.1s);\n}\n\n#combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(9) {\n  transition: calc(9 * 0.1s);\n}\n\n.sec_combat[_ngcontent-%COMP%]:hover   #combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(9) {\n  transform: rotate(calc(9 * 15deg)) scale(1) translateY(-30vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(9 * 0.1s);\n}\n\n#combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(10) {\n  transition: calc(10 * 0.1s);\n}\n\n.sec_combat[_ngcontent-%COMP%]:hover   #combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(10) {\n  transform: rotate(calc(10 * 15deg)) scale(1) translateY(-30vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(10 * 0.1s);\n}\n\n#combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(11) {\n  transition: calc(11 * 0.1s);\n}\n\n.sec_combat[_ngcontent-%COMP%]:hover   #combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(11) {\n  transform: rotate(calc(11 * 15deg)) scale(1) translateY(-30vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(11 * 0.1s);\n}\n\n#combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(12) {\n  transition: calc(12 * 0.1s);\n}\n\n.sec_combat[_ngcontent-%COMP%]:hover   #combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(12) {\n  transform: rotate(calc(12 * 15deg)) scale(1) translateY(-30vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(12 * 0.1s);\n}\n\n#combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(13) {\n  transition: calc(13 * 0.1s);\n}\n\n.sec_combat[_ngcontent-%COMP%]:hover   #combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(13) {\n  transform: rotate(calc(13 * 15deg)) scale(1) translateY(-30vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(13 * 0.1s);\n}\n\n#combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(14) {\n  transition: calc(14 * 0.1s);\n}\n\n.sec_combat[_ngcontent-%COMP%]:hover   #combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(14) {\n  transform: rotate(calc(14 * 15deg)) scale(1) translateY(-30vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(14 * 0.1s);\n}\n\n#combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(15) {\n  transition: calc(15 * 0.1s);\n}\n\n.sec_combat[_ngcontent-%COMP%]:hover   #combat_deco[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-child(15) {\n  transform: rotate(calc(15 * 15deg)) scale(1) translateY(-30vmin);\n  animation: _ngcontent-%COMP%_propAnimate 0.5s infinite alternate ease-in-out;\n  animation-delay: calc(15 * 0.1s);\n}\n\n@keyframes _ngcontent-%COMP%_propAnimate {\n  from {\n    margin-bottom: 1px;\n  }\n  to {\n    margin-bottom: 1vmin;\n  }\n}/*# sourceMappingURL=accueil.component.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYWNjdWVpbC9hY2N1ZWlsLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9hY2N1ZWlsL2FjY3VlaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsVUFBQTtFQ0NGO0VERUE7SUFDRSxVQUFBO0VDQUY7QUFDRjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDRkY7QURJRTtFQUNFLHFCQUFBO0FDRko7O0FET0E7RUFDRTtJQUNFLGtCQUFBO0VDSkY7RURPQTtJQUNFLGVBQUE7RUNMRjtBQUNGO0FEVUE7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLHlGQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFJQSx1REFBQTtFQUNBLHFEQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ1pGO0FEY0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7QUNaSjtBRGVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2JKO0FEZ0JFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSw0QkFBQTtF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 */"]
  });
}

/***/ }),

/***/ 5256:
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminComponent: () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _compte_compte_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../compte/compte.component */ 3886);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class AdminComponent extends _compte_compte_component__WEBPACK_IMPORTED_MODULE_0__.CompteComponent {
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵAdminComponent_BaseFactory;
    return function AdminComponent_Factory(t) {
      return (ɵAdminComponent_BaseFactory || (ɵAdminComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](AdminComponent)))(t || AdminComponent);
    };
  }();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AdminComponent,
    selectors: [["app-admin"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    decls: 2,
    vars: 0,
    template: function AdminComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "admin works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _compte_compte_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compte/compte.component */ 3886);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ 8216);
/* harmony import */ var _connexion_connexion_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connexion/connexion.component */ 187);
/* harmony import */ var _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inscription/inscription.component */ 3168);
/* harmony import */ var _creature_creature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./creature/creature.component */ 6986);
/* harmony import */ var _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accueil/accueil.component */ 545);
/* harmony import */ var _selection_combat_selection_combat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./selection-combat/selection-combat.component */ 7342);
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.component */ 5256);
/* harmony import */ var _humain_humain_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./humain/humain.component */ 2160);
/* harmony import */ var _ia_ia_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ia/ia.component */ 9621);
/* harmony import */ var _joueur_joueur_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./joueur/joueur.component */ 7289);
/* harmony import */ var _desktop_desktop_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./desktop/desktop.component */ 4494);
/* harmony import */ var _statistique_statistique_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./statistique/statistique.component */ 8203);
/* harmony import */ var _creature_page_a_creature_page_a_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./creature-page-a/creature-page-a.component */ 8635);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 8055);
/* harmony import */ var _delay_page_resolver__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./delay-page.resolver */ 2052);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 1699);



















const routes = [{
  path: "menu",
  title: "Connexion / Inscription",
  component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__.MenuComponent,
  resolve: [_delay_page_resolver__WEBPACK_IMPORTED_MODULE_15__.delayPageResolver]
}, {
  path: "compte",
  title: "Gestion de comptes",
  component: _compte_compte_component__WEBPACK_IMPORTED_MODULE_0__.CompteComponent,
  resolve: [_delay_page_resolver__WEBPACK_IMPORTED_MODULE_15__.delayPageResolver],
  data: {
    delay: '500'
  }
}, {
  path: "admin",
  component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__.AdminComponent
}, {
  path: "humain",
  component: _humain_humain_component__WEBPACK_IMPORTED_MODULE_8__.HumainComponent
}, {
  path: "ia",
  component: _ia_ia_component__WEBPACK_IMPORTED_MODULE_9__.IAComponent
}, {
  path: "joueur",
  component: _joueur_joueur_component__WEBPACK_IMPORTED_MODULE_10__.JoueurComponent
}, {
  path: "connexion",
  title: "Page de connexion",
  component: _connexion_connexion_component__WEBPACK_IMPORTED_MODULE_2__.ConnexionComponent,
  resolve: [_delay_page_resolver__WEBPACK_IMPORTED_MODULE_15__.delayPageResolver]
}, {
  path: "inscription",
  title: "Page de inscription",
  component: _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_3__.InscriptionComponent,
  resolve: [_delay_page_resolver__WEBPACK_IMPORTED_MODULE_15__.delayPageResolver]
}, {
  path: "creature",
  title: "Gestion de creatures",
  component: _creature_creature_component__WEBPACK_IMPORTED_MODULE_4__.CreatureComponent,
  resolve: [_delay_page_resolver__WEBPACK_IMPORTED_MODULE_15__.delayPageResolver],
  data: {
    delay: '500'
  }
}, {
  path: "accueil",
  title: "Accueil Mythik",
  component: _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_5__.AccueilComponent,
  resolve: [_delay_page_resolver__WEBPACK_IMPORTED_MODULE_15__.delayPageResolver],
  data: {
    delay: '250'
  }
}, {
  path: "accueil/intro",
  title: "Accueil Mythik",
  component: _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_5__.AccueilComponent,
  resolve: [_delay_page_resolver__WEBPACK_IMPORTED_MODULE_15__.delayPageResolver],
  data: {
    delay: '1000'
  }
}, {
  path: "grimoire",
  title: "Grimoire mythologique",
  component: _desktop_desktop_component__WEBPACK_IMPORTED_MODULE_11__.DesktopComponent,
  resolve: [_delay_page_resolver__WEBPACK_IMPORTED_MODULE_15__.delayPageResolver],
  data: {
    delay: '500'
  }
}, {
  path: "combat",
  title: "Combat",
  component: _selection_combat_selection_combat_component__WEBPACK_IMPORTED_MODULE_6__.SelectionCombatComponent,
  resolve: [_delay_page_resolver__WEBPACK_IMPORTED_MODULE_15__.delayPageResolver],
  data: {
    delay: '500'
  }
}, {
  path: "combat/new",
  title: "Combat",
  component: _selection_combat_selection_combat_component__WEBPACK_IMPORTED_MODULE_6__.SelectionCombatComponent
}, {
  path: "combat/new2",
  title: "Combat",
  component: _selection_combat_selection_combat_component__WEBPACK_IMPORTED_MODULE_6__.SelectionCombatComponent
}, {
  path: "combat/:combat_number",
  title: "Combat",
  component: _selection_combat_selection_combat_component__WEBPACK_IMPORTED_MODULE_6__.SelectionCombatComponent
}, {
  path: "creaturea",
  component: _creature_page_a_creature_page_a_component__WEBPACK_IMPORTED_MODULE_13__.CreaturePageAComponent
}, {
  path: "statistique",
  title: "Statistique de combat",
  component: _statistique_statistique_component__WEBPACK_IMPORTED_MODULE_12__.StatistiqueComponent
}, {
  path: "",
  pathMatch: "full",
  redirectTo: "menu"
}, {
  path: '**',
  title: "Page error 404",
  component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_14__.PageNotFoundComponent
} //wildcard route
];

class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);


class AppComponent {
  constructor() {
    this.title = 'mythik_angular';
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet],
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inscription/inscription.component */ 3168);
/* harmony import */ var _connexion_connexion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connexion/connexion.component */ 187);
/* harmony import */ var _creature_creature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./creature/creature.component */ 6986);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/menu.component */ 8216);
/* harmony import */ var _compte_compte_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./compte/compte.component */ 3886);
/* harmony import */ var _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./accueil/accueil.component */ 545);
/* harmony import */ var _grimoire_grimoire_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./grimoire/grimoire.component */ 7282);
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth.interceptor */ 1763);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _selection_combat_selection_combat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./selection-combat/selection-combat.component */ 7342);
/* harmony import */ var _combat_combat_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./combat/combat.component */ 2483);
/* harmony import */ var _dieu_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dieu.pipe */ 5552);
/* harmony import */ var _creature_page_a_creature_page_a_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./creature-page-a/creature-page-a.component */ 8635);
/* harmony import */ var _creature_page_b_creature_page_b_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./creature-page-b/creature-page-b.component */ 3968);
/* harmony import */ var _desktop_desktop_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./desktop/desktop.component */ 4494);
/* harmony import */ var _statistique_statistique_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./statistique/statistique.component */ 8203);
/* harmony import */ var _labsforge_flipbook__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @labsforge/flipbook */ 518);
/* harmony import */ var _chains_chains_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chains/chains.component */ 6175);
/* harmony import */ var _mythologie_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mythologie.pipe */ 6013);
/* harmony import */ var _gagnant_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./gagnant.pipe */ 2995);
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ 8055);
/* harmony import */ var _creature_data_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./creature-data.pipe */ 1166);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 1699);



























class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HTTP_INTERCEPTORS,
      useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_9__.AuthInterceptor,
      multi: true
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule, _labsforge_flipbook__WEBPACK_IMPORTED_MODULE_26__.FlipBookModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _inscription_inscription_component__WEBPACK_IMPORTED_MODULE_2__.InscriptionComponent, _creature_creature_component__WEBPACK_IMPORTED_MODULE_4__.CreatureComponent, _menu_menu_component__WEBPACK_IMPORTED_MODULE_5__.MenuComponent, _compte_compte_component__WEBPACK_IMPORTED_MODULE_6__.CompteComponent, _accueil_accueil_component__WEBPACK_IMPORTED_MODULE_7__.AccueilComponent, _grimoire_grimoire_component__WEBPACK_IMPORTED_MODULE_8__.GrimoireComponent, _connexion_connexion_component__WEBPACK_IMPORTED_MODULE_3__.ConnexionComponent, _selection_combat_selection_combat_component__WEBPACK_IMPORTED_MODULE_10__.SelectionCombatComponent, _combat_combat_component__WEBPACK_IMPORTED_MODULE_11__.CombatComponent, _desktop_desktop_component__WEBPACK_IMPORTED_MODULE_15__.DesktopComponent, _creature_page_b_creature_page_b_component__WEBPACK_IMPORTED_MODULE_14__.CreaturePageBComponent, _creature_page_a_creature_page_a_component__WEBPACK_IMPORTED_MODULE_13__.CreaturePageAComponent, _dieu_pipe__WEBPACK_IMPORTED_MODULE_12__.DieuPipe, _statistique_statistique_component__WEBPACK_IMPORTED_MODULE_16__.StatistiqueComponent, _chains_chains_component__WEBPACK_IMPORTED_MODULE_17__.ChainsComponent, _mythologie_pipe__WEBPACK_IMPORTED_MODULE_18__.MythologiePipe, _gagnant_pipe__WEBPACK_IMPORTED_MODULE_19__.GagnantPipe, _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__.PageNotFoundComponent, _creature_data_pipe__WEBPACK_IMPORTED_MODULE_21__.CreatureDataPipe],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule, _labsforge_flipbook__WEBPACK_IMPORTED_MODULE_26__.FlipBookModule]
  });
})();

/***/ }),

/***/ 1763:
/*!*************************************!*\
  !*** ./src/app/auth.interceptor.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 6466);


class AuthInterceptor {
  constructor(authService) {
    this.authService = authService;
  }
  intercept(request, next) {
    const compte = this.authService.getCompte();
    if (compte) {
      const b64 = btoa(compte.login + ":" + compte.password);
      request = request.clone({
        setHeaders: {
          Authorization: `Basic ${b64}`
        }
      });
    }
    return next.handle(request);
  }
  static #_ = this.ɵfac = function AuthInterceptor_Factory(t) {
    return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthInterceptor,
    factory: AuthInterceptor.ɵfac
  });
}

/***/ }),

/***/ 6466:
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var src_environnements_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnements/environment */ 6326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);




class AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.compte = undefined;
  }
  login(login, password) {
    return this.http.post(src_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + `/compte/connexion`, {
      "login": login,
      "password": password
    }).subscribe(resp => {
      this.compte = resp;
      localStorage.setItem("compte", JSON.stringify(this.compte));
      this.router.navigate(["/accueil/intro"]);
    });
  }
  logout() {
    this.compte = undefined;
    localStorage.removeItem("compte");
  }
  isLogged() {
    return this.getCompte() != undefined;
  }
  getCompte() {
    if (this.compte) {
      return this.compte;
    } else {
      const compte = localStorage.getItem("compte");
      if (compte) {
        return JSON.parse(compte);
      }
    }
    return undefined;
  }
  static #_ = this.ɵfac = function AuthService_Factory(t) {
    return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: AuthService,
    factory: AuthService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 6175:
/*!********************************************!*\
  !*** ./src/app/chains/chains.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChainsComponent: () => (/* binding */ ChainsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class ChainsComponent {
  static #_ = this.ɵfac = function ChainsComponent_Factory(t) {
    return new (t || ChainsComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ChainsComponent,
    selectors: [["app-chains"]],
    decls: 3,
    vars: 0,
    consts: [[1, "chain"]],
    template: function ChainsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0)(1, "div", 0)(2, "div", 0);
      }
    },
    styles: [".chain[_ngcontent-%COMP%]:nth-child(1) {\n  pointer-events: none;\n  z-index: 0;\n  content: \"ffffff\";\n  position: absolute;\n  width: 13%;\n  height: 200vmax;\n  top: 50%;\n  left: 50%;\n  background: url('chain_repeat.png'), linear-gradient(0.25turn, transparent, rgba(0, 0, 0, 0.51), transparent);\n  background-blend-mode: lighten;\n  background-position: center;\n  background-size: contain;\n  background-repeat: repeat-y;\n  filter: brightness(0.6);\n  transform: translate(-50%, -50%) rotate(calc(-40deg * 1));\n  transform-origin: center;\n}\n\n.chain[_ngcontent-%COMP%]:nth-child(2) {\n  pointer-events: none;\n  z-index: 0;\n  content: \"ffffff\";\n  position: absolute;\n  width: 13%;\n  height: 200vmax;\n  top: 50%;\n  left: 50%;\n  background: url('chain_repeat.png'), linear-gradient(0.25turn, transparent, rgba(0, 0, 0, 0.51), transparent);\n  background-blend-mode: lighten;\n  background-position: center;\n  background-size: contain;\n  background-repeat: repeat-y;\n  filter: brightness(0.6);\n  transform: translate(-50%, -50%) rotate(calc(-40deg * 2));\n  transform-origin: center;\n}\n\n.chain[_ngcontent-%COMP%]:nth-child(3) {\n  pointer-events: none;\n  z-index: 0;\n  content: \"ffffff\";\n  position: absolute;\n  width: 13%;\n  height: 200vmax;\n  top: 50%;\n  left: 50%;\n  background: url('chain_repeat.png'), linear-gradient(0.25turn, transparent, rgba(0, 0, 0, 0.51), transparent);\n  background-blend-mode: lighten;\n  background-position: center;\n  background-size: contain;\n  background-repeat: repeat-y;\n  filter: brightness(0.6);\n  transform: translate(-50%, -50%) rotate(calc(-40deg * 3));\n  transform-origin: center;\n}\n\n.chain_create[_nghost-%COMP%]   .chain[_ngcontent-%COMP%]:nth-child(1) {\n  opacity: 0;\n  animation: _ngcontent-%COMP%_chainForm 2s;\n  animation-fill-mode: forwards;\n  animation-delay: calc(0.3s * 1);\n}\n\n.chain_create[_nghost-%COMP%]   .chain[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n  animation: _ngcontent-%COMP%_chainForm 2s;\n  animation-fill-mode: forwards;\n  animation-delay: calc(0.3s * 2);\n}\n\n.chain_create[_nghost-%COMP%]   .chain[_ngcontent-%COMP%]:nth-child(3) {\n  opacity: 0;\n  animation: _ngcontent-%COMP%_chainForm 2s;\n  animation-fill-mode: forwards;\n  animation-delay: calc(0.3s * 3);\n}\n\n@keyframes _ngcontent-%COMP%_chainForm {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    filter: brightness(5) blur(50px);\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.chain_dissolve[_nghost-%COMP%]   .chain[_ngcontent-%COMP%]:nth-child(1) {\n  animation: _ngcontent-%COMP%_chainBreak 3s;\n  animation-fill-mode: forwards;\n  animation-delay: calc(0.3s * 1);\n}\n\n.chain_dissolve[_nghost-%COMP%]   .chain[_ngcontent-%COMP%]:nth-child(2) {\n  animation: _ngcontent-%COMP%_chainBreak 3s;\n  animation-fill-mode: forwards;\n  animation-delay: calc(0.3s * 2);\n}\n\n.chain_dissolve[_nghost-%COMP%]   .chain[_ngcontent-%COMP%]:nth-child(3) {\n  animation: _ngcontent-%COMP%_chainBreak 3s;\n  animation-fill-mode: forwards;\n  animation-delay: calc(0.3s * 3);\n}\n\n@keyframes _ngcontent-%COMP%_chainBreak {\n  0% {\n    opacity: 1;\n  }\n  20% {\n    filter: brightness(5) blur(50px);\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.3);\n    filter: brightness(10);\n  }\n}/*# sourceMappingURL=chains.component.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hhaW5zL2NoYWlucy5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY2hhaW5zL2NoYWlucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0Usb0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw2R0FBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFHQSx5REFBQTtFQUNBLHdCQUFBO0FDSko7O0FEZEU7RUFDRSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZHQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUdBLHlEQUFBO0VBQ0Esd0JBQUE7QUNlSjs7QURqQ0U7RUFDRSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDZHQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUdBLHlEQUFBO0VBQ0Esd0JBQUE7QUNrQ0o7O0FEMUJFO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQzZCSjs7QURqQ0U7RUFDRSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FDb0NKOztBRHhDRTtFQUNFLFVBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7QUMyQ0o7O0FEdkNBO0VBQ0U7SUFDRSxVQUFBO0VDMENGO0VEdkNBO0lBQ0UsZ0NBQUE7SUFDQSxVQUFBO0VDeUNGO0VEdENBO0lBQ0UsVUFBQTtFQ3dDRjtBQUNGO0FEaENFO0VBQ0Usd0JBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FDa0NKOztBRHJDRTtFQUNFLHdCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtBQ3dDSjs7QUQzQ0U7RUFDRSx3QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7QUM4Q0o7O0FEMUNBO0VBQ0U7SUFDRSxVQUFBO0VDNkNGO0VEMUNBO0lBQ0UsZ0NBQUE7SUFDQSxVQUFBO0VDNENGO0VEekNBO0lBQ0UsVUFBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7RUMyQ0Y7QUFDRixDQUFBLCtDQUFBIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}

/***/ }),

/***/ 2483:
/*!********************************************!*\
  !*** ./src/app/combat/combat.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CombatComponent: () => (/* binding */ CombatComponent)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ 1315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _combat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./combat.service */ 9319);
/* harmony import */ var _selection_combat_combattant_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../selection-combat/combattant.service */ 612);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _creature_data_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../creature-data.pipe */ 1166);







function CombatComponent_p_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Vous avez choisi: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CombatComponent_p_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "L'adversaire a choisi: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function CombatComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44)(1, "div", 45)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "R\u00E9sultat du combat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 47)(7, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CombatComponent_div_87_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r3.nouvellePartie());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Nouvelle Partie");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CombatComponent_div_87_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r5.statistiques());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "R\u00E9capitulatif");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CombatComponent_div_87_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r6.retour());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Accueil");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r2.combattant1.gagnant ? "victory" : "defeat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r2.combattant1.gagnant ? "victory" : "defeat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r2.combattant1.gagnant ? "victory" : "defeat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r2.resultatCombat, " remporte le combat !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("id", ctx_r2.combattant1.gagnant ? "victory" : "defeat");
  }
}
class CombatComponent {
  constructor(combatService, combattantService, router) {
    this.combatService = combatService;
    this.combattantService = combattantService;
    this.router = router;
    this.combatTermine = false;
    this.result = null;
    this.debut = true;
  }
  ngOnInit() {
    this.creature1 = this.combattant1.creature;
    this.creature2 = this.combattant2.creature;
  }
  ngAfterViewInit() {
    this.pvtoto1 = this.combattant1.creature.pv;
    this.pvtoto2 = this.combattant2.creature.pv;
    this.debut = false;
  }
  ngAfterContentInit() {
    this.barreVie();
  }
  saveCombat() {
    const currentDate = new Date();
    const formattedDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(currentDate, 'yyyy-MM-dd'); // Format ISO 8601
    const formattedTime = (0,date_fns__WEBPACK_IMPORTED_MODULE_4__.format)(currentDate, 'HH:mm:ss'); // Format 24 heures
    const combat = {
      dateCombat: formattedDate,
      heureCombat: formattedTime,
      combattants: [this.combattant1, this.combattant2]
    };
    // Enregistrement du combat avec les combattants
    this.combatService.save(combat).subscribe(combatSaved => {
      console.log('Combat enregistré avec succès !');
      this.combattant1.combat = combatSaved;
      this.combattant2.combat = combatSaved;
      // Enregistrement des combattants
      this.combattantService.save(this.combattant1).subscribe(combattant1Saved => {
        console.log('Combattant 1 enregistré avec succès !');
        // Enregistrement du deuxième combattant
        this.combattantService.save(this.combattant2).subscribe(combattant2Saved => {
          console.log('Combattant 2 enregistré avec succès !');
        });
      });
    });
  }
  choixOrdinateur() {
    const choixPossibles = ['pierre', 'feuille', 'ciseaux'];
    const choixAleatoire = Math.floor(Math.random() * choixPossibles.length);
    return choixPossibles[choixAleatoire];
  }
  jeu(choixJoueur) {
    this.choixOrdi = this.choixOrdinateur();
    console.log(this.choixOrdi);
    if (choixJoueur === this.choixOrdi) {
      // 0 if round is a tie
      this.afficheDegats(0, 0);
      return 0;
    } else if (choixJoueur === 'pierre' && this.choixOrdi === 'ciseaux' || choixJoueur === 'feuille' && this.choixOrdi === 'pierre' || choixJoueur === 'ciseaux' && this.choixOrdi === 'feuille') {
      return 1; // 1 if player wins round
    } else {
      return 2; // 2 if player loses round
    }
  }

  degats(creature1, creature2) {
    let dmg_multiplier = 6665;
    let degat1 = creature1.attaque * dmg_multiplier;
    let degat2 = creature2.attaque * dmg_multiplier;
    if (creature1.typeElement === "eau" && creature2.typeElement === "feu" || creature1.typeElement === "feu" && creature2.typeElement === "air" || creature1.typeElement === "air" && creature2.typeElement === "terre" || creature1.typeElement === "terre" && creature2.typeElement === "eau") {
      degat1 *= 1.2;
      degat2 *= 0.85;
    }
    if (creature1.typeElement === "feu" && creature2.typeElement === "Eau" || creature1.typeElement === "air" && creature2.typeElement === "feu" || creature1.typeElement === "terre" && creature2.typeElement === "air" || creature1.typeElement === "eau" && creature2.typeElement === "terre") {
      degat2 *= 1.2;
      degat1 *= 0.85;
    }
    return {
      degat1,
      degat2
    };
  }
  setChoices(choixJoueur) {
    document.querySelector("#player_choice span").innerHTML = choixJoueur;
    document.querySelector("#adv_choice span").innerHTML = this.choixOrdi;
    document.querySelectorAll(".choice").forEach(choice => {
      choice.classList.remove("choiceAnimation");
      setTimeout(() => {
        choice.classList.add('choiceAnimation');
      }, 0);
    });
    let suiviCombat = document.querySelector(".suivi_conteneur");
    suiviCombat.classList.remove("suiviAnimation");
    setTimeout(() => {
      suiviCombat.classList.add('suiviAnimation');
    }, 0);
  }
  setRoundResults(result) {
    let player = document.querySelector(".player");
    let adv = document.querySelector(".adv");
    if (result == 1) {
      // if player wins round
      player.classList.remove("round_winner", "round_loser", "round_tie");
      adv.classList.remove("round_winner", "round_loser", "round_tie");
      setTimeout(() => {
        let animation_duration;
        if (this.creature1.pv > 0 && this.creature2.pv > 0) {
          // animation if NOT final strike
          animation_duration = "0.5s";
        } else {
          // animation IF final strike
          animation_duration = "3s";
        }
        document.documentElement.style.setProperty("--time-to-impact", animation_duration);
        player.classList.add('round_winner');
        adv.classList.add('round_loser');
      }, 0);
    }
    if (result == 2) {
      // if player loses round
      player.classList.remove("round_winner", "round_loser", "round_tie");
      adv.classList.remove("round_winner", "round_loser", "round_tie");
      setTimeout(() => {
        let animation_duration;
        if (this.creature1.pv > 0 && this.creature2.pv > 0) {
          // animation if NOT final strike
          animation_duration = "0.5s";
        } else {
          // animation IF final strike
          animation_duration = "2s";
          console.log("last attack!");
        }
        document.documentElement.style.setProperty("--time-to-impact", animation_duration);
        player.classList.add('round_loser');
        adv.classList.add('round_winner');
      }, 0);
    }
    if (result == 0) {
      // if round is a tie
      let player = document.querySelector(".player");
      let adv = document.querySelector(".adv");
      player.classList.remove("round_winner", "round_loser", "round_tie");
      adv.classList.remove("round_winner", "round_loser", "round_tie");
      setTimeout(() => {
        player.classList.add('round_tie');
        adv.classList.add('round_tie');
      }, 0);
    }
  }
  combattre(choixJoueur) {
    const result = this.jeu(choixJoueur);
    this.setChoices(choixJoueur);
    this.setRoundResults(result);
    if (result === 1) {
      const degats = this.degats(this.creature1, this.creature2);
      this.creature2.pv -= degats.degat1;
      this.barreVie();
      this.afficheDegats(1, degats.degat1);
    }
    if (result === 2) {
      const degats = this.degats(this.creature1, this.creature2);
      this.creature1.pv -= degats.degat2;
      this.barreVie();
      this.afficheDegats(2, degats.degat2);
    }
    if (this.creature2.pv <= 0) {
      // player wins
      this.resultatCombat = this.creature1.nom;
      document.querySelector("#combat_winner div").style.backgroundImage = `url(${this.creature1.image})`;
      document.querySelector("#combat_winner div").classList.add("combat_winner_animation");
      document.documentElement.style.setProperty("--winner_color", this.element_to_color(this.creature1.typeElement));
      this.creature2.pv = 0;
      this.barreVie();
      this.combattant1.gagnant = true;
      this.combattant2.gagnant = false;
      this.saveCombat();
      this.combatTermine = true;
    }
    if (this.creature1.pv <= 0) {
      // player loses
      this.resultatCombat = this.creature2.nom;
      document.querySelector("#combat_winner div").style.backgroundImage = `url(${this.creature2.image})`;
      document.querySelector("#combat_winner div").classList.add("combat_winner_animation");
      document.documentElement.style.setProperty("--winner_color", this.element_to_color(this.creature2.typeElement));
      this.creature1.pv = 0;
      this.barreVie();
      this.combattant1.gagnant = false;
      this.combattant2.gagnant = true;
      this.saveCombat();
      this.combatTermine = true;
    }
  }
  element_to_color(element) {
    console.log(element);
    if (element == "feu") {
      return "darkred";
    }
    if (element == "eau") {
      return "cyan";
    }
    if (element == "air") {
      return "grey";
    }
    if (element == "terre") {
      return "forestgreen";
    }
    return "black";
  }
  afficheDegats(result, degat) {
    let victim;
    let attacker;
    if (result == 1) {
      // if player wins round
      this.resultat = "round_success";
      victim = this.creature2.nom;
      attacker = this.creature1.nom;
      // this.affichage = this.creature1.nom +" inflige " + degat + " points de dégats à " + this.creature2.nom;
    } else if (result == 2) {
      // if adversary wins round
      this.resultat = "round_failure";
      victim = this.creature1.nom;
      attacker = this.creature2.nom;
      // this.affichage = this.creature2.nom +" inflige " + degat + " points de dégats à " + this.creature1.nom;
    }

    if (victim != null) {
      // if round has a winner
      this.affichage = [`${attacker} inflige `, `${degat}`, ` points de dégats à ${victim}`];
      document.querySelector("#book_deco")?.classList.remove("zodiacAttackEffect");
      setTimeout(() => {
        document.querySelector("#book_deco")?.classList.add("zodiacAttackEffect");
      }, 0);
    } else {
      // if round is a draw
      this.resultat = "round_tie";
      this.affichage = ["Égalité", "", "Pas de dégâts pris ou infligés"];
    }
    console.log(this.affichage);
  }
  mancheSuivante() {
    this.result = null;
    this.choixJoueur = '';
    this.choixOrdi = '';
  }
  nouvellePartie() {
    let combat_container = document.querySelector("#combat_container");
    combat_container?.classList.add("combat_leave_blackout");
    let delay = 1000;
    document.documentElement.style.setProperty("--combat-leave-duration", String(delay / 1000) + "s");
    setTimeout(() => {
      if (this.router.url === '/combat') {
        // load combat 2 if current combat is the first one
        this.router.navigate(['/combat/', String(2)]);
      } else if (/combat/.test(this.router.url)) {
        /// load combat n + 1
        let current_url = String(this.router.url);
        let combat_n = Number(current_url.substring(current_url.lastIndexOf('/') + 1));
        combat_n++;
        this.router.navigate(['/combat/', String(combat_n)]).then(() => {
          window.location.reload();
        });
      }
    }, delay);
  }
  statistiques() {
    let combat_container = document.querySelector("#combat_container");
    combat_container?.classList.add("combat_leave");
    let delay = 1000;
    document.documentElement.style.setProperty("--combat-leave-duration", String(delay / 1000) + "s");
    setTimeout(() => {
      this.router.navigate(['/statistique']);
    }, delay);
  }
  retour() {
    let combat_container = document.querySelector("#combat_container");
    combat_container?.classList.add("combat_leave");
    let delay = 1000;
    document.documentElement.style.setProperty("--combat-leave-duration", String(delay / 1000) + "s");
    setTimeout(() => {
      this.router.navigate(['/accueil']);
    }, delay);
  }
  barreVie() {
    if (this.combattant1.creature?.pv && this.creature1.pv) {
      this.vieRestant1 = this.creature1.pv / this.pvtoto1 * 100;
      console.log(this.creature1.pv);
      console.log(this.pvtoto1);
    }
    if (this.combattant2.creature?.pv && this.creature2.pv) {
      this.vieRestant2 = this.creature2.pv / this.pvtoto2 * 100;
    }
    if (this.vieRestant1 < 0) {
      this.vieRestant1 = 0;
    }
    if (this.vieRestant2 < 0) {
      this.vieRestant2 = 0;
    }
    // pv bar animations
    setTimeout(() => {
      // change color from green to red;
      document.querySelector(".player .vie-restante").style.backgroundColor = `color-mix(in srgb, green ${this.vieRestant1}%, darkred)`;
      document.querySelector(".adv .vie-restante").style.backgroundColor = `color-mix(in srgb, green ${this.vieRestant2}%, darkred)`;
    }, 0);
  }
  static #_ = this.ɵfac = function CombatComponent_Factory(t) {
    return new (t || CombatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_combat_service__WEBPACK_IMPORTED_MODULE_0__.CombatService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_selection_combat_combattant_service__WEBPACK_IMPORTED_MODULE_1__.CombattantService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: CombatComponent,
    selectors: [["app-combat"]],
    inputs: {
      combattant1: "combattant1",
      combattant2: "combattant2"
    },
    decls: 88,
    vars: 62,
    consts: [["id", "combat_container"], [1, "combat_title"], ["id", "combat_elements"], [1, "combattants"], ["id", "combat_winner"], [1, "creature_img", 3, "src"], [1, "attack", "player_attack"], [1, "nom"], [1, "nom_login_divider"], [1, "login"], [1, "barre-vie"], [1, "vie-restante"], [1, "pv_remaining", 2, "margin-top", "20px"], ["class", "choice", "id", "player_choice", 4, "ngIf"], ["id", "battle_arena"], ["id", "book_deco"], ["id", "magic_ring"], ["id", "magic_vortex"], ["id", "dialog_banner"], [1, "suivi_conteneur"], [1, "suiviCombat"], ["width", "100%", "height", "50%", "viewBox", "0 0 100 100"], ["id", "MyPath", "fill", "rgba(0,0,0,0)", "stroke", "transparent", "d", "M 0 30\n                                      Q 50 0\n                                       100 30"], ["href", "#MyPath", "startOffset", "50%", "text-anchor", "middle"], ["x", "0", "dy", "-0.9em", 1, "start_banner"], ["x", "0", "dy", "-1.2em", 3, "textContent"], [1, "degat", 3, "textContent"], ["id", "spinner_container"], ["id", "combat_spinner"], ["id", "spinner_target", "height", "100", "width", "100"], ["cx", "50%", "cy", "50%", "r", "49%"], ["id", "combat_btns"], [1, "btn_wrapper", "pierre_wrapper"], ["id", "pierre_btn", 3, "click"], [1, "btn_wrapper", "feuille_wrapper"], ["id", "feuille_btn", 3, "click"], [1, "btn_wrapper", "ciseaux_wrapper"], ["id", "ciseaux_btn", 3, "click"], [1, "creature_img", "adv_img", 3, "src"], [1, "attack", "adv_attack"], ["class", "choice", "id", "adv_choice", 4, "ngIf"], ["class", "resultat_container", 3, "id", 4, "ngIf"], ["id", "player_choice", 1, "choice"], ["id", "adv_choice", 1, "choice"], [1, "resultat_container", 3, "id"], [1, "resultat", 3, "id"], [3, "id"], [1, "btn_group", 3, "id"], [3, "click"]],
    template: function CombatComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1)(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Combat de");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Cr\u00E9atures");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 2)(7, "div", 3)(8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "creatureData");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div")(13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "creatureData");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "img", 5)(16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "creatureData");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "creatureData");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Points de vie : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, CombatComponent_p_32_Template, 3, 0, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 14)(34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](35, "div", 16)(36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 18)(38, "div", 19)(39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "svg", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](41, "path", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "text")(43, "textPath", 23)(44, "tspan", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " Mythik ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "tspan", 25)(47, "tspan", 25)(48, "tspan", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "circle", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](54, "creatureData");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 32)(56, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CombatComponent_Template_button_click_56_listener() {
          return ctx.combattre("pierre");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Pierre");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 34)(59, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CombatComponent_Template_button_click_59_listener() {
          return ctx.combattre("feuille");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Feuille");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 36)(62, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CombatComponent_Template_button_click_62_listener() {
          return ctx.combattre("ciseaux");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "Ciseaux");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](65, "creatureData");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div")(67, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](68, "creatureData");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 38)(70, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](72, "creatureData");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](79, "creatureData");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "Points de vie: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, CombatComponent_p_86_Template, 3, 0, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](87, CombatComponent_div_87_Template, 13, 5, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.combatTermine ? "finishedCombat" : "ongoingCombat");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.combattant1.gagnant ? "playerWin" : "advWin");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("combattant player " + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 44, ctx.combattant1.creature));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("img_wrapper img_player " + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 46, ctx.combattant1.creature));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.combattant1.creature == null ? null : ctx.combattant1.creature.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("nom_login " + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 48, ctx.combattant1.creature));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.creature1.nom);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.combattant1.compte == null ? null : ctx.combattant1.compte.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("barre-vie_container " + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 50, ctx.combattant1.creature));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx.vieRestant1 + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.creature1.pv);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.combatTermine);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.resultat);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.affichage ? "none" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("textContent", ctx.affichage == null ? null : ctx.affichage[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("textContent", ctx.affichage == null ? null : ctx.affichage[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("textContent", ctx.affichage == null ? null : ctx.affichage[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](54, 52, ctx.combattant1.creature));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("combattant adv " + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](65, 54, ctx.combattant2.creature));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("img_wrapper img_adv " + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](68, 56, ctx.combattant2.creature));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx.combattant2.creature == null ? null : ctx.combattant2.creature.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("nom_login " + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](72, 58, ctx.combattant2.creature));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.creature2.nom);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.combattant2.compte == null ? null : ctx.combattant2.compte.login);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("barre-vie_container " + _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](79, 60, ctx.combattant2.creature));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx.vieRestant2 + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.creature2.pv);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.combatTermine);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.combatTermine);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _creature_data_pipe__WEBPACK_IMPORTED_MODULE_2__.CreatureDataPipe],
    styles: ["@charset \"UTF-8\";\n#combat_container[_ngcontent-%COMP%] {\n  background: url('combat.avif');\n  background-blend-mode: multiply;\n  background-size: cover;\n  overflow: auto;\n  width: 100vw;\n  \n\n  height: 100vh;\n  cursor: url('middle-ages-cursor-32x32.png'), pointer;\n  \n\n\n\n  animation: _ngcontent-%COMP%_sectionAppear 5s;\n}\n\n@keyframes _ngcontent-%COMP%_sectionAppear {\n  from {\n    background-color: black;\n  }\n  to {\n    background-color: transparent;\n  }\n}\nh1.combat_title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: rgba(245, 245, 220, 0.555);\n  border-radius: 10px;\n  padding: 5px;\n  margin: 10px 100px;\n  background: url('scroll_combat.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 200px;\n  position: relative;\n  animation: _ngcontent-%COMP%_scrollDisappear 3s forwards;\n}\nh1.combat_title[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-family: \"bronzion\";\n  z-index: 1;\n  color: rgb(71, 0, 0);\n}\nh1.combat_title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  display: block;\n}\nh1.combat_title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2)::first-letter {\n  color: rgb(193, 0, 0);\n  font-size: 50px;\n}\nh1.combat_title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 0;\n  width: 100%;\n  height: 65%;\n  background: url('creature_fight.png'), rgb(0, 100, 0);\n  background-blend-mode: lighten;\n  transform: scaleX(-1);\n  opacity: 0.5;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  -webkit-mask-image: url('creature_fight.png');\n          mask-image: url('creature_fight.png');\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  mask-mode: alpha;\n  -webkit-mask-position: center;\n          mask-position: center;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n}\n\n@keyframes _ngcontent-%COMP%_scrollDisappear {\n  0% {\n    transform: scale(2) translateY(50%);\n    opacity: 1;\n  }\n  80% {\n    transform: scaleX(1.1);\n  }\n  100% {\n    transform: scaleX(1);\n    opacity: 0;\n  }\n}\n#combat_elements[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  animation: _ngcontent-%COMP%_combatAppear 2s forwards;\n  opacity: 0;\n  animation-delay: 1s;\n}\n\n@keyframes _ngcontent-%COMP%_combatAppear {\n  0% {\n    transform: translateY(100vh);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n.combattants[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  color: white;\n  font-size: 30px;\n  font-family: \"lugrasimo\";\n  text-align: center;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%] {\n  display: flex;\n  width: 33%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  z-index: 10000000000000000000;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .creature_img[_ngcontent-%COMP%] {\n  width: 50%;\n  min-height: 50vh;\n  object-fit: contain;\n  pointer-events: none;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .creature_img.adv_img[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login[_ngcontent-%COMP%] {\n  background: url('long_scroll.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  display: flex;\n  position: relative;\n  left: 50%;\n  transform: translateX(-50%);\n  width: -moz-fit-content;\n  width: fit-content;\n  min-width: 25vw;\n  height: 7vw;\n  padding: 2% 5%;\n  justify-content: space-around;\n  align-content: center;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login[_ngcontent-%COMP%]   .nom_login_divider[_ngcontent-%COMP%] {\n  position: relative;\n  width: 2vw;\n  height: 100%;\n  opacity: 0.5;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login.feu[_ngcontent-%COMP%]   .nom_login_divider[_ngcontent-%COMP%] {\n  background: url('element_fire.png'), radial-gradient(circle closest-side, red, transparent);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login.eau[_ngcontent-%COMP%]   .nom_login_divider[_ngcontent-%COMP%] {\n  background: url('element_water.png'), radial-gradient(circle closest-side, blue, transparent);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login.air[_ngcontent-%COMP%]   .nom_login_divider[_ngcontent-%COMP%] {\n  background: url('element_air.png'), radial-gradient(circle closest-side, yellow, transparent);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login.terre[_ngcontent-%COMP%]   .nom_login_divider[_ngcontent-%COMP%] {\n  background: url('element_earth.png'), radial-gradient(circle closest-side, green, transparent);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login.grec[_ngcontent-%COMP%] {\n  border-image: url('symbol_greek.png') 0% 100%/0vw 5vw/0vw 3vw space;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login.nordique[_ngcontent-%COMP%] {\n  border-image: url('symbol_nordic.png') 0% 100%/0vw 5vw/0vw 3vw space;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login.egyptienne[_ngcontent-%COMP%] {\n  border-image: url('symbol_egyptian.png') 0% 100%/0vw 6vw/0vw 3vw space;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login.chinoise[_ngcontent-%COMP%] {\n  border-image: url('_-_-assets-chinese-symbol_chinese.png') 0% 100%/0vw 5vw/0vw 3vw space;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%], .combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  position: relative;\n  white-space: nowrap;\n  color: rgb(71, 0, 0);\n  font-size: 1vw;\n  height: 100%;\n  line-height: 7vw;\n  vertical-align: middle;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%]::first-letter, .combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]::first-letter {\n  text-transform: capitalize;\n  font-size: 3vw;\n  font-family: \"bronzion\";\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%]::first-letter {\n  color: rgb(193, 0, 0);\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login.dieu[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%]:first-letter {\n  text-shadow: 0 0 1px white, 0 0 1px white, 0 0 5px gold, 0 0 10px black, 0 0 10px black, 0 0 5px gold, 0 0 10px black, 0 0 10px black;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login.dieu[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  height: 50%;\n  width: 100%;\n  top: -10%;\n  left: 0;\n  background: url('crown2.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  opacity: 1;\n  z-index: 2;\n  animation: _ngcontent-%COMP%_itemGlow 1s alternate infinite;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .nom_login[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]::first-letter {\n  color: rgb(0, 100, 0);\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .barre-vie_container[_ngcontent-%COMP%] {\n  width: 30vw;\n  height: 3vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-image: url('bubbles2.gif');\n  background-size: contain;\n  background-repeat: repeat-x;\n  background-position: center;\n  padding: 0.75vw;\n  border-radius: 15%;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .barre-vie_container.creature[_ngcontent-%COMP%] {\n  background-color: rgba(255, 0, 0, 0.387);\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.422);\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .barre-vie_container.dieu[_ngcontent-%COMP%] {\n  background-color: rgba(210, 179, 0, 0.444);\n  box-shadow: 0px 0px 5px rgba(255, 221, 0, 0.422), 0px 0px 10px rgba(255, 255, 255, 0.92);\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .barre-vie[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(128, 128, 128, 0.176);\n  border: 1px solid #ccc;\n  overflow: hidden;\n  border-radius: 30%;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.729), 0px 0px 5px rgb(193, 0, 0);\n  position: relative;\n  border-image: url('healthbar.png') 50% 25%/2vw 3vw/1vw 2vw round;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .barre-vie[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  height: 30%;\n  width: 95%;\n  top: 20%;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: rgba(255, 255, 255, 0.158);\n  border-radius: 100% 100% 25% 25%;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .barre-vie[_ngcontent-%COMP%]   .vie-restante[_ngcontent-%COMP%] {\n  transition: 0.5s;\n  width: 100%;\n  height: 100%;\n  background-color: color-mix(in srgb, green 100%, darkred);\n  box-shadow: 0 0 10px rgb(193, 0, 0);\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-image: url('bubbles.gif');\n  background-size: contain;\n  background-repeat: repeat-x;\n  background-position: center;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .pv_remaining[_ngcontent-%COMP%] {\n  margin-top: 2.5vw !important;\n  border-image: url('battle_frame.png') 50% 0%/3vw 1vw/2vw 0vw space;\n  background: radial-gradient(closest-side, rgba(0, 0, 0, 0.565) 80%, transparent);\n  padding: 0 10%;\n}\n.combattants[_ngcontent-%COMP%]   .combattant[_ngcontent-%COMP%]   .pv_remaining[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: goldenrod;\n  text-shadow: 0 0 5px black;\n}\n\n.round_winner[_ngcontent-%COMP%]   .img_wrapper[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_winnerBgEffect 1s;\n  animation-fill-mode: forwards;\n}\n.round_winner[_ngcontent-%COMP%]   .img_wrapper.feu[_ngcontent-%COMP%]::before {\n  background: url('_-_-assets-elements-fire.gif'), radial-gradient(circle closest-side, red, transparent);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.round_winner[_ngcontent-%COMP%]   .img_wrapper.eau[_ngcontent-%COMP%]::before {\n  background: url('water.gif'), url('water2.gif'), radial-gradient(circle closest-side, blue, transparent);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.round_winner[_ngcontent-%COMP%]   .img_wrapper.air[_ngcontent-%COMP%]::before {\n  background: url('air.gif'), url('storm.gif'), radial-gradient(circle closest-side, yellow, transparent);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.round_winner[_ngcontent-%COMP%]   .img_wrapper.terre[_ngcontent-%COMP%]::before {\n  background: url('earth.gif'), url('earth2.gif'), url('earth3.gif'), radial-gradient(circle closest-side, green, transparent);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n@keyframes _ngcontent-%COMP%_winnerBgEffect {\n  0% {\n    opacity: 0;\n  }\n  20% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n#combat_btns[_ngcontent-%COMP%] {\n  display: block;\n  width: 30%;\n  height: 30%;\n  margin: auto;\n  opacity: 0.75;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1000;\n}\n#combat_btns[_ngcontent-%COMP%]   .btn_wrapper[_ngcontent-%COMP%] {\n  position: absolute;\n  background: radial-gradient(ellipse closest-side, purple, transparent);\n  bottom: 50%;\n  left: 50%;\n  transform-origin: bottom;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n}\n#combat_btns[_ngcontent-%COMP%]   .btn_wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 5vw;\n  height: 5vw;\n  border-radius: 100%;\n  padding: 0px;\n  line-height: 0px;\n  aspect-ratio: 1/1;\n  font-size: 1vw;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  background-color: rgb(116, 83, 83);\n  \n\n  color: #fff;\n  \n\n  border: none;\n  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);\n  \n\n  transition: background-color 0.3s ease, color 0.3s ease;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n  transition: 0.2s;\n}\n#combat_btns[_ngcontent-%COMP%]   .btn_wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  filter: brightness(2) drop-shadow(0 0 10px rgb(193, 0, 0));\n  text-shadow: 0 0 1px black, 0 0 10px blue, 0 0 5px green;\n}\n#combat_btns[_ngcontent-%COMP%]   .btn_wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: rgb(193, 0, 0);\n  text-shadow: 0 0 1px black;\n  background: none;\n  background-color: rgba(228, 255, 228, 0.8);\n  opacity: 1;\n  border: 0.5px solid rgb(193, 0, 0);\n  position: relative;\n}\n#combat_btns[_ngcontent-%COMP%]   .btn_wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:after {\n  opacity: 1;\n}\n#combat_btns[_ngcontent-%COMP%]   .btn_wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 115%;\n  height: 115%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: url('fire_ring.gif');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n  filter: brightness(1) hue-rotate(240deg);\n  opacity: 0;\n}\n\n.pierre_wrapper[_ngcontent-%COMP%] {\n  transform: translate(-50%, 0%) rotate(65deg);\n  padding-bottom: 18.6%;\n}\n\n.feuille_wrapper[_ngcontent-%COMP%] {\n  transform: translate(-50%, 0%) rotate(180deg);\n  padding-bottom: 15.6%;\n}\n\n.ciseaux_wrapper[_ngcontent-%COMP%] {\n  transform: translate(-50%, 0%) rotate(-66deg);\n  padding-bottom: 18.6%;\n}\n\n#pierre_btn[_ngcontent-%COMP%] {\n  transform: rotate(-65deg);\n  background: url('rock.png');\n  cursor: url('rock-cursor_min.png'), pointer !important;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n#pierre_btn[_ngcontent-%COMP%]:hover {\n  transform: rotate(-65deg) scale(1.1);\n}\n\n#feuille_btn[_ngcontent-%COMP%] {\n  transform: rotate(-180deg);\n  background: url('paper.png');\n  cursor: url('paper-cursor_min.png'), pointer !important;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n#feuille_btn[_ngcontent-%COMP%]:hover {\n  transform: rotate(-180deg) scale(1.1);\n}\n\n#ciseaux_btn[_ngcontent-%COMP%] {\n  transform: rotate(66deg);\n  background: url('scissors.png');\n  cursor: url('scissors-cursor_min.png'), pointer !important;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n#ciseaux_btn[_ngcontent-%COMP%]:hover {\n  transform: rotate(66deg) scale(1.1);\n}\n\n#combat_btns[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 60%;\n  height: 60%;\n  top: 50%;\n  bottom: 50%;\n  transform: translate(-50%, -50%);\n  background: url('fire_ring.gif');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  opacity: 0.1;\n  transition: 0.3s;\n  pointer-events: all;\n}\n\n#combat_btns.feu[_ngcontent-%COMP%]:before {\n  background: url('fire_ring.gif');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n#combat_btns.eau[_ngcontent-%COMP%]:before {\n  background: url('water_ring.gif');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n#combat_btns.terre[_ngcontent-%COMP%]:before {\n  background: url('earth_ring.gif');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n#combat_btns.air[_ngcontent-%COMP%]:before {\n  background: url('air_ring.gif');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n#combat_btns[_ngcontent-%COMP%]:hover:before {\n  opacity: 1;\n}\n\n.choice[_ngcontent-%COMP%] {\n  opacity: 0;\n  width: 100%;\n}\n.choice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  text-shadow: 0 0 3px black, 0 0 3px black;\n}\n\n.combattant.feu[_ngcontent-%COMP%]   .choice[_ngcontent-%COMP%] {\n  background: radial-gradient(closest-side ellipse, red, transparent);\n}\n\n.combattant.eau[_ngcontent-%COMP%]   .choice[_ngcontent-%COMP%] {\n  background: radial-gradient(closest-side ellipse, blue, transparent);\n}\n\n.combattant.air[_ngcontent-%COMP%]   .choice[_ngcontent-%COMP%] {\n  background: radial-gradient(closest-side ellipse, yellow, transparent);\n}\n\n.combattant.terre[_ngcontent-%COMP%]   .choice[_ngcontent-%COMP%] {\n  background: radial-gradient(closest-side ellipse, green, transparent);\n}\n\n.choiceAnimation[_ngcontent-%COMP%] {\n  animation-fill-mode: forwards;\n  animation-duration: 0.2s;\n  animation-name: _ngcontent-%COMP%_choiceAnimation;\n}\n\n@keyframes _ngcontent-%COMP%_choiceAnimation {\n  from {\n    opacity: 0;\n    transform: scale(2);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n#book_deco[_ngcontent-%COMP%] {\n  display: block;\n  width: 30%;\n  height: 0;\n  padding-bottom: 30%;\n  margin: auto;\n  opacity: 1;\n  background: url('zodiac_arena.png'), radial-gradient(circle closest-side, rgb(255, 235, 120) 3%, gold, rgba(255, 255, 255, 0.5) 96%, transparent);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1000;\n}\n#book_deco.zodiacAttackEffect[_ngcontent-%COMP%]::after {\n  content: \"\";\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: url('zodiac_circle.png');\n  background-blend-mode: multiply;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  animation: _ngcontent-%COMP%_zodiacCircle 2s forwards;\n}\n#book_deco[_ngcontent-%COMP%]   #dialog_banner[_ngcontent-%COMP%] {\n  width: 150%;\n  height: 100%;\n  position: absolute;\n  top: -30%;\n  left: 50%;\n  z-index: 11;\n  opacity: 1;\n  transform: translateX(-50%);\n  background: url('curved_ribbon_filled.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-position: top;\n}\n#book_deco[_ngcontent-%COMP%]   #dialog_banner[_ngcontent-%COMP%]   .suivi_conteneur[_ngcontent-%COMP%]   .suiviCombat[_ngcontent-%COMP%] {\n  position: absolute;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  top: 2vw;\n  left: 50%;\n  transform: translate(-50%, 0%);\n  height: -moz-fit-content;\n  height: fit-content;\n  font-weight: bold;\n  text-align: center;\n  color: rgb(71, 0, 0);\n  width: 60%;\n  z-index: 66666666666666;\n  animation: _ngcontent-%COMP%_itemGlow 2s infinite alternate;\n}\n#book_deco[_ngcontent-%COMP%]   #dialog_banner[_ngcontent-%COMP%]   .suivi_conteneur[_ngcontent-%COMP%]   .suiviCombat[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n#book_deco[_ngcontent-%COMP%]   #dialog_banner[_ngcontent-%COMP%]   .suivi_conteneur[_ngcontent-%COMP%]   .suiviCombat[_ngcontent-%COMP%]   .start_banner[_ngcontent-%COMP%] {\n  font-size: 50% !important;\n  font-family: bronzion;\n  fill: black;\n  text-shadow: 0 0 10px rgb(0, 100, 0);\n  opacity: 0.5;\n}\n#book_deco[_ngcontent-%COMP%]   #dialog_banner[_ngcontent-%COMP%]   .suivi_conteneur[_ngcontent-%COMP%]   .suiviCombat[_ngcontent-%COMP%]   .round_success[_ngcontent-%COMP%] {\n  fill: rgba(0, 100, 0, 0.818);\n  text-shadow: 0 0 10px rgb(255, 255, 255);\n}\n#book_deco[_ngcontent-%COMP%]   #dialog_banner[_ngcontent-%COMP%]   .suivi_conteneur[_ngcontent-%COMP%]   .suiviCombat[_ngcontent-%COMP%]   .round_failure[_ngcontent-%COMP%] {\n  fill: rgba(139, 0, 0, 0.778);\n  text-shadow: 0 0 10px rgb(255, 255, 255);\n}\n#book_deco[_ngcontent-%COMP%]   #dialog_banner[_ngcontent-%COMP%]   .suivi_conteneur[_ngcontent-%COMP%]   .suiviCombat[_ngcontent-%COMP%]   .round_tie[_ngcontent-%COMP%] {\n  fill: rgb(71, 0, 0);\n  text-shadow: 0 0 10px rgb(255, 255, 255);\n}\n#book_deco[_ngcontent-%COMP%]   #dialog_banner[_ngcontent-%COMP%]   .suivi_conteneur[_ngcontent-%COMP%]   .suiviCombat[_ngcontent-%COMP%]   textPath[_ngcontent-%COMP%]   tspan[_ngcontent-%COMP%] {\n  font-size: 25%;\n}\n#book_deco[_ngcontent-%COMP%]   #dialog_banner[_ngcontent-%COMP%]   .suivi_conteneur[_ngcontent-%COMP%]   .suiviCombat[_ngcontent-%COMP%]   textPath[_ngcontent-%COMP%]   tspan.degat[_ngcontent-%COMP%] {\n  fill: white;\n  text-shadow: 0 0 3px black, 0 0 5px black, 0 0 10px black;\n}\n#book_deco[_ngcontent-%COMP%]   #magic_ring[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(ellipse closest-side, black, transparent), url('zodiac_ring.png');\n  border-radius: 100%;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  opacity: 0.2;\n  transform: scale(1.3);\n  animation: _ngcontent-%COMP%_magicRing2 3s infinite linear;\n  transform-origin: center;\n}\n#book_deco[_ngcontent-%COMP%]   #magic_vortex[_ngcontent-%COMP%] {\n  background-color: red;\n  width: 100%;\n  height: 100%;\n  background: url('vortex.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: _ngcontent-%COMP%_magicVortex 3s infinite linear;\n  z-index: -1;\n  opacity: 1;\n  transition: 0.5s;\n}\n#book_deco.activeBookSecond[_ngcontent-%COMP%]   #magic_vortex[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n#book_deco.activeBookGo[_ngcontent-%COMP%] {\n  filter: blur(10px) contrast(2) brightness(5);\n}\n#book_deco.activeBookGo[_ngcontent-%COMP%]   #magic_vortex[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n}\n#book_deco.activeBookGo[_ngcontent-%COMP%]   #magic_ring[_ngcontent-%COMP%] {\n  animation-duration: 2s;\n}\n\n@keyframes _ngcontent-%COMP%_zodiacCircle {\n  0% {\n    transform: rotate(0deg) scale(1);\n    opacity: 0;\n  }\n  10% {\n    opacity: 0.7;\n  }\n  100% {\n    transform: rotate(360deg) scale(1.5);\n    filter: brightness(2) hue-rotate(45deg) blur(10px);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_magicRing2 {\n  0% {\n    transform: rotate(0deg) scale(1.3);\n    filter: blur(3px) brightness(0.3) drop-shadow(0px 0px 20px rgb(60, 0, 255));\n    box-shadow: 1px 1px 1px green, 1px 1px 5px green;\n  }\n  50% {\n    transform: rotate(180deg) scale(1.2, 1.4);\n    filter: blur(1px) brightness(10) drop-shadow(0px 0px 20px red) contrast(100);\n    box-shadow: 0px 0px 1px blue, 0px 0px 5px blue;\n  }\n  100% {\n    transform: rotate(360deg) scale(1.3);\n    filter: blur(3px) brightness(0.3) drop-shadow(0px 0px 20px rgb(17, 255, 0));\n    box-shadow: -1px -1px 1px red, -1px -1px 5px red;\n  }\n}\n@keyframes _ngcontent-%COMP%_magicVortex {\n  0% {\n    transform: rotate(0deg) scale(0.25, 0.3);\n    filter: blur(10px) brightness(0.3) drop-shadow(0px 0px 20px rgb(60, 0, 255));\n  }\n  50% {\n    transform: rotate(180deg) scale(0.3, 0.25);\n    filter: blur(5px) brightness(10) drop-shadow(0px 0px 20px red);\n  }\n  100% {\n    transform: rotate(360deg) scale(0.25, 0.3);\n    filter: blur(10px) brightness(0.3) drop-shadow(0px 0px 20px rgb(17, 255, 0));\n  }\n}\n.suiviAnimation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_suiviAnimation 0.5s forwards, _ngcontent-%COMP%_suiviShake 0.5s;\n}\n\n@keyframes _ngcontent-%COMP%_suiviAnimation {\n  from {\n    opacity: 1;\n    filter: blur(10px) drop-shadow(0 0 10px red);\n  }\n  to {\n    opacity: 1;\n    filter: blur(0px) drop-shadow(0 0 0 black);\n  }\n}\n@keyframes _ngcontent-%COMP%_suiviShake {\n  0% {\n    transform: translateX(16px);\n  }\n  10% {\n    transform: translateX(-16px);\n  }\n  20% {\n    transform: translateX(8px);\n  }\n  30% {\n    transform: translateX(-8px);\n  }\n  40% {\n    transform: translateX(4px);\n  }\n  50% {\n    transform: translateX(-4px);\n  }\n  60% {\n    transform: translateX(2px);\n  }\n  70% {\n    transform: translateX(-2px);\n  }\n  80% {\n    transform: translateX(1px);\n  }\n  90% {\n    transform: translateX(-1px);\n  }\n  100% {\n    transform: translateX(0px);\n  }\n}\n#spinner_container[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  border-radius: 100%;\n  padding-bottom: 50%;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, 0);\n  transform-origin: bottom;\n  animation: _ngcontent-%COMP%_spinSpinner 60s linear infinite;\n}\n#spinner_container[_ngcontent-%COMP%]   #combat_spinner[_ngcontent-%COMP%] {\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: absolute;\n  width: 200px;\n  height: 200px;\n  left: 50%;\n  transform: translateX(-50%) rotate(0deg);\n}\n#spinner_container[_ngcontent-%COMP%]   #combat_spinner[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  opacity: 0.95;\n  width: 100%;\n  height: 50%;\n  top: 0;\n  left: 50%;\n  animation: _ngcontent-%COMP%_spinSpinner 60s reverse linear infinite, _ngcontent-%COMP%_sunAnimate 10s alternate infinite;\n  background: url('sun_moon.png'), radial-gradient(circle closest-side, goldenrod, transparent);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n@keyframes _ngcontent-%COMP%_spinSpinner {\n  from {\n    transform: translate(-50%, 0) rotate(0deg);\n  }\n  to {\n    transform: translate(-50%, 0) rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_sunAnimate {\n  0% {\n    filter: brightness(1) drop-shadow(-10px -10px 2px cyan);\n    height: 45%;\n  }\n  50% {\n    filter: brightness(2) drop-shadow(0 0 5px purple);\n    height: 55%;\n  }\n  100% {\n    filter: brightness(2) drop-shadow(10px 10px 2px yellow);\n    height: 50%;\n  }\n}\nsvg#spinner_target[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: visible;\n}\nsvg#spinner_target[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  fill: transparent;\n  stroke: rgba(255, 0, 0, 0.5);\n  stroke-width: 3vw;\n  stroke-dasharray: 100vw;\n  stroke-dashoffset: 95vw;\n}\n\n@keyframes _ngcontent-%COMP%_rotate {\n  to {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_itemGlow {\n  from {\n    filter: brightness(0.7);\n  }\n  to {\n    filter: brightness(1.3);\n  }\n}\n[_ngcontent-%COMP%]:root {\n  --time-to-impact: 0.5s;\n  --winner_color: black;\n}\n\n.round_winner[_ngcontent-%COMP%]   .img_wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1000000000000000000000000;\n}\n.round_winner[_ngcontent-%COMP%]   .img_wrapper.img_player[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_roundWinner_player;\n}\n.round_winner[_ngcontent-%COMP%]   .img_wrapper.img_adv[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_roundWinner_adv;\n}\n.round_winner[_ngcontent-%COMP%]   .img_wrapper.img_player[_ngcontent-%COMP%]   .attack[_ngcontent-%COMP%], .round_winner[_ngcontent-%COMP%]   .img_wrapper.img_adv[_ngcontent-%COMP%]   .attack[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  opacity: 1;\n  transform-origin: center;\n  background-blend-mode: multiply;\n  pointer-events: none;\n}\n.round_winner[_ngcontent-%COMP%]   .img_wrapper.feu[_ngcontent-%COMP%]   .attack[_ngcontent-%COMP%] {\n  background: url('elemental_attack.png'), radial-gradient(circle closest-side, red 70%, transparent);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.round_winner[_ngcontent-%COMP%]   .img_wrapper.eau[_ngcontent-%COMP%]   .attack[_ngcontent-%COMP%] {\n  background: url('elemental_attack.png'), radial-gradient(circle closest-side, blue 70%, transparent);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.round_winner[_ngcontent-%COMP%]   .img_wrapper.terre[_ngcontent-%COMP%]   .attack[_ngcontent-%COMP%] {\n  background: url('elemental_attack.png'), radial-gradient(circle closest-side, green 70%, transparent);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.round_winner[_ngcontent-%COMP%]   .img_wrapper.air[_ngcontent-%COMP%]   .attack[_ngcontent-%COMP%] {\n  background: url('elemental_attack.png'), radial-gradient(circle closest-side, yellow 70%, transparent);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.round_winner[_ngcontent-%COMP%]   .img_wrapper.img_player[_ngcontent-%COMP%]   .attack[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_attackAnimation_player var(--time-to-impact) ease-in forwards;\n}\n.round_winner[_ngcontent-%COMP%]   .img_wrapper.img_adv[_ngcontent-%COMP%]   .attack[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_attackAnimation_adv var(--time-to-impact) ease-in forwards;\n}\n\n@keyframes _ngcontent-%COMP%_attackAnimation_player {\n  0% {\n    transform: translateX(0) scale(1) rotate(0deg);\n    opacity: 0;\n    filter: brightness(0.1);\n  }\n  10% {\n    opacity: 1;\n  }\n  99% {\n    transform: translateX(90vw) scale(3) rotate(360deg);\n    opacity: 1;\n    filter: brightness(3);\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_attackAnimation_adv {\n  0% {\n    transform: translateX(0) scale(1) rotate(0);\n    opacity: 0;\n    filter: brightness(0.1);\n  }\n  10% {\n    opacity: 1;\n  }\n  99% {\n    transform: translateX(-90vw) scale(3) rotate(-360deg);\n    opacity: 1;\n    filter: brightness(3);\n  }\n  100% {\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_roundWinner_player {\n  50% {\n    transform: scale(1.3) rotate(5deg) translateX(5vw);\n    filter: brightness(2);\n  }\n}\n@keyframes _ngcontent-%COMP%_roundWinner_adv {\n  50% {\n    transform: scale(1.3) rotate(-5deg) translateX(-5vw);\n    filter: brightness(2);\n  }\n}\n.round_loser[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_suiviShake var(--time-to-impact);\n  animation-delay: calc(var(--time-to-impact) * 0.8);\n}\n\n.round_loser[_ngcontent-%COMP%]   .img_wrapper.img_player[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_roundLoser_player var(--time-to-impact);\n}\n.round_loser[_ngcontent-%COMP%]   .img_wrapper.img_adv[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_roundLoser_adv var(--time-to-impact);\n}\n.round_loser[_ngcontent-%COMP%]   .img_wrapper.img_player[_ngcontent-%COMP%], .round_loser[_ngcontent-%COMP%]   .img_wrapper.img_adv[_ngcontent-%COMP%] {\n  animation-delay: calc(var(--time-to-impact) * 0.8);\n}\n\n@keyframes _ngcontent-%COMP%_roundLoser_player {\n  50% {\n    transform: scale(0.8) rotate(-10deg) translatex(-5vw);\n    filter: grayscale(0.8) blur(5px);\n  }\n}\n@keyframes _ngcontent-%COMP%_roundLoser_adv {\n  50% {\n    transform: scale(0.8) rotate(10deg) translatex(5vw);\n    filter: grayscale(0.8) blur(5px);\n  }\n}\n.round_tie[_ngcontent-%COMP%]   .img_wrapper[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_suiviShake 0.5s;\n}\n\n#combat_winner[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  opacity: 1;\n  z-index: 1000000000000000000000000000000000000000000;\n  pointer-events: none;\n}\n#combat_winner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  transition: calc(var(--time-to-impact) * 3);\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  opacity: 0;\n}\n#combat_winner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  background: radial-gradient(transparent, var(--winner_color));\n}\n\n.finishedCombat[_ngcontent-%COMP%]   #combat_winner[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation: _ngcontent-%COMP%_resultsReveal reverse var(--time-to-impact) forwards;\n  background-color: black;\n  animation-delay: 2s;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.finishedCombat[_ngcontent-%COMP%]   #combat_winner[_ngcontent-%COMP%]   div.combat_winner_animation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_combat_winner_animation_player calc(var(--time-to-impact) * 1.5) forwards;\n}\n.finishedCombat[_ngcontent-%COMP%]   #combat_winner[_ngcontent-%COMP%]   div.combat_winner_animation.advWin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_combat_winner_animation_adv calc(var(--time-to-impact) * 1.5) forwards;\n}\n.finishedCombat[_ngcontent-%COMP%]   .round_loser[_ngcontent-%COMP%], .finishedCombat[_ngcontent-%COMP%]   .round_winner[_ngcontent-%COMP%] {\n  transition-duration: calc(var(--time-to-impact) / 1);\n  transition-delay: calc(var(--time-to-impact) / 1);\n  position: relative;\n}\n.finishedCombat[_ngcontent-%COMP%]   .round_loser[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .finishedCombat[_ngcontent-%COMP%]   .round_winner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: calc(var(--time-to-impact) / 2);\n}\n.finishedCombat[_ngcontent-%COMP%]   .round_loser[_ngcontent-%COMP%]:after, .finishedCombat[_ngcontent-%COMP%]   .round_winner[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_resultsReveal 3s forwards;\n  animation-delay: calc(var(--time-to-impact) * 1.3);\n}\n.finishedCombat[_ngcontent-%COMP%]   .round_loser[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: sepia(0.9);\n}\n.finishedCombat[_ngcontent-%COMP%]   .round_loser[_ngcontent-%COMP%]::after {\n  background: url('crossed_bones.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.finishedCombat[_ngcontent-%COMP%]   .round_winner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: brightness(1.2) saturate(1.2);\n}\n.finishedCombat[_ngcontent-%COMP%]   .round_winner[_ngcontent-%COMP%]::after {\n  background: url('laurel.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.finishedCombat[_ngcontent-%COMP%]   #battle_arena[_ngcontent-%COMP%] {\n  transition: 2s;\n  transition-delay: 2s;\n  opacity: 0;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.finishedCombat[_ngcontent-%COMP%]   #battle_arena[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: var(--winner_color);\n  opacity: 1;\n  animation: _ngcontent-%COMP%_finishMove 0.1s forwards;\n  animation-delay: calc(var(--time-to-impact) * 0.95);\n}\n\n@keyframes _ngcontent-%COMP%_combat_winner_animation_player {\n  0% {\n    opacity: 0;\n    transform: translateX(-30vw) translateY(0vh) scale(1);\n  }\n  65% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(0vw) translateY(30vh) scale(2);\n  }\n}\n@keyframes _ngcontent-%COMP%_combat_winner_animation_adv {\n  0% {\n    opacity: 0;\n    transform: translateX(30vw) translateY(0vh) scale(-1, 1);\n  }\n  65% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(0vw) translateY(30vh) scale(-2, 2);\n  }\n}\n@keyframes _ngcontent-%COMP%_finishMove {\n  0% {\n    opacity: 0.1;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.resultat_container[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 100%;\n  width: 100%;\n  color: white;\n  font-size: 30px;\n  font-family: \"lugrasimo\";\n  text-align: center;\n  background-color: red;\n  background: url('wood-texture.jpeg'), radial-gradient(#e6b664, #000325);\n  background-size: cover;\n  background-blend-mode: multiply;\n  opacity: 0;\n  animation-delay: 2s !important;\n  animation: _ngcontent-%COMP%_resultsReveal var(--time-to-impact) forwards;\n}\n.resultat_container[_ngcontent-%COMP%]   .resultat[_ngcontent-%COMP%] {\n  display: block;\n  height: 150%;\n  width: 50%;\n  padding-top: 15%;\n  margin: auto;\n  background: url('war_banner.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  animation: _ngcontent-%COMP%_bannerRaise 2s;\n  animation-delay: 2s;\n  filter: drop-shadow(5px 5px 10px rgba(0, 0, 0, 0.958));\n  position: relative;\n}\n.resultat_container[_ngcontent-%COMP%]   .resultat#victory[_ngcontent-%COMP%]::before, .resultat_container[_ngcontent-%COMP%]   .resultat#defeat[_ngcontent-%COMP%]::before {\n  content: \"\";\n  top: -15%;\n  left: 0%;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 1/1;\n  position: absolute;\n  z-index: -1;\n  opacity: 0.8;\n  transform-origin: center;\n}\n.resultat_container[_ngcontent-%COMP%]   .resultat#victory[_ngcontent-%COMP%]::before {\n  background: url('god_bg_centered.png'), radial-gradient(circle closest-side, yellow, transparent);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  animation: _ngcontent-%COMP%_resultsLightEffectVictory 1s linear infinite;\n}\n.resultat_container[_ngcontent-%COMP%]   .resultat#defeat[_ngcontent-%COMP%]::before {\n  background: url('vortex.png'), radial-gradient(circle closest-side, blue, transparent);\n  filter: brightness(0.1);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  animation: _ngcontent-%COMP%_resultsLightEffectDefeat 10s linear infinite;\n}\n.resultat_container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::first-letter {\n  font-family: bronzion;\n  font-size: 3vw;\n  color: rgb(0, 100, 0);\n}\n.resultat_container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 45%;\n  display: block;\n  margin: auto;\n}\n.resultat_container[_ngcontent-%COMP%]   p#victory[_ngcontent-%COMP%] {\n  color: darkred;\n  border-image: url('victory_symbol.png') 0% 50%/0vw 1vw/0vw 0vw space;\n}\n.resultat_container[_ngcontent-%COMP%]   p#defeat[_ngcontent-%COMP%] {\n  color: rgb(71, 0, 0);\n  color: goldenrod;\n  border-image: url('defeat_symbol.png') 0% 50%/0vw 1vw/0vw 1vw space;\n}\n.resultat_container[_ngcontent-%COMP%]   .btn_group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 100000000000000000;\n  width: 30%;\n  margin: auto;\n}\n.resultat_container[_ngcontent-%COMP%]   .btn_group#victory[_ngcontent-%COMP%] {\n  border-image: url('victory_border.png') 0% 50%/0vw 7vw/0vw 5vw space;\n}\n.resultat_container[_ngcontent-%COMP%]   .btn_group#defeat[_ngcontent-%COMP%] {\n  border-image: url('defeat_banner.png') 0% 50%/0vw 7vw/0vw 5vw space;\n}\n.resultat_container[_ngcontent-%COMP%]   .btn_group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 100%;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n  border: none;\n  padding: 2vmin;\n  background: url('fantasy-button.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: 0.1s;\n  color: rgb(71, 0, 0);\n  text-shadow: 0 0 3px white;\n}\n.resultat_container[_ngcontent-%COMP%]   .btn_group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  filter: hue-rotate(50deg);\n  text-shadow: 0 0 3px white, #ffbf51 1px 1px 10px;\n  transform: scale(1.1);\n}\n.resultat_container[_ngcontent-%COMP%]   .btn_group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  color: white;\n  transform: scale(1.2);\n}\n\n@keyframes _ngcontent-%COMP%_resultsReveal {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_bannerRaise {\n  0% {\n    transform: translateY(100vh) rotate(2deg);\n  }\n  95% {\n    transform: translateY(-1vh) rotate(-0.5deg);\n  }\n  100% {\n    transform: translateY(0vh) rotate(0deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_resultsLightEffectVictory {\n  0%, 100% {\n    opacity: 0.7;\n    filter: blur(1px);\n    transform: scale(1.05);\n  }\n  50% {\n    opacity: 0.8;\n    filter: blur(5px);\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_resultsLightEffectDefeat {\n  0% {\n    opacity: 0.7;\n    filter: blur(1px);\n    transform: scale(1.05) rotate(0deg);\n  }\n  50% {\n    opacity: 0.8;\n    filter: blur(5px);\n    transform: scale(1) rotate(-180deg);\n  }\n  100% {\n    opacity: 0.7;\n    filter: blur(1px);\n    transform: scale(1.05) rotate(-360deg);\n  }\n}\n.combat_leave[_ngcontent-%COMP%] {\n  transition: opacity var(--combat-leave-duration);\n  opacity: 0;\n  background: black;\n}\n\n.combat_leave_blackout[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  animation: _ngcontent-%COMP%_blackout 1s forwards;\n}\n\n@keyframes _ngcontent-%COMP%_blackout {\n  from {\n    background-color: transparent;\n  }\n  to {\n    background-color: black;\n  }\n}/*# sourceMappingURL=combat.component.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tYmF0L2NvbWJhdC5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jb21iYXQvY29tYmF0LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDSWhCO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFFQSxvREFBQTtFQUNBOzswQkFBQTtFQUdBLDJCQUFBO0FESEY7O0FDa0JBO0VBQ0U7SUFDRSx1QkFBQTtFRGZGO0VDa0JBO0lBQ0UsNkJBQUE7RURoQkY7QUFDRjtBQ21CQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQXNDQSxzQ0FBQTtBRHRERjtBQ2tCRTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxvQkM3RFM7QUY2Q2I7QUNtQkU7RUFDRSxjQUFBO0FEakJKO0FDbUJJO0VBQ0UscUJDbkVZO0VEb0VaLGVBQUE7QURqQk47QUNxQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VFaEZBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFRmlGQSw2Q0FBQTtVQUFBLHFDQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7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 */"]
  });
}

/***/ }),

/***/ 9319:
/*!******************************************!*\
  !*** ./src/app/combat/combat.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CombatService: () => (/* binding */ CombatService)
/* harmony export */ });
/* harmony import */ var src_environnements_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnements/environment */ 6326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class CombatService {
  constructor(http) {
    this.http = http;
  }
  findAll() {
    return this.http.get("http://localhost:8080/api/combat");
  }
  findById(id) {
    return this.http.get("http://localhost:8080/api/combat/" + id);
  }
  save(combat) {
    if (combat.id) {
      return this.http.put(src_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/combat/" + combat.id, combat);
    }
    return this.http.post(src_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/combat", combat);
  }
  delete(id) {
    return this.http.delete("http://localhost:8080/api/combat/" + id);
  }
  static #_ = this.ɵfac = function CombatService_Factory(t) {
    return new (t || CombatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CombatService,
    factory: CombatService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3886:
/*!********************************************!*\
  !*** ./src/app/compte/compte.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompteComponent: () => (/* binding */ CompteComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _compte_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compte.service */ 9017);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);






function CompteComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 10)(12, "div", 23)(13, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompteComponent_tr_27_Template_a_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const u_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.edit(u_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompteComponent_tr_27_Template_a_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const u_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.remove(u_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const u_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](u_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r2.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r2.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r2.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](u_r2.type);
  }
}
function CompteComponent_div_34_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Le login est obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CompteComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 27)(1, "form", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function CompteComponent_div_34_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r7.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Edition d'un compte ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 30)(5, "div", 31)(6, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Identifiant:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 31)(10, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Login:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CompteComponent_div_34_span_13_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 31)(15, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Mot de passe:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 31)(19, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 31)(23, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Roles:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Humain");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "IA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 46)(34, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompteComponent_div_34_Template_a_click_36_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r9.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.compteForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r1.compteForm.get("login")) == null ? null : tmp_1_0.dirty) && ((tmp_1_0 = ctx_r1.compteForm.get("login")) == null ? null : tmp_1_0.hasError("login")));
  }
}
class CompteComponent {
  constructor(compteService, formBuilder, router) {
    this.compteService = compteService;
    this.formBuilder = formBuilder;
    this.router = router;
    this.showForm = false;
    this.load();
  }
  ngOnInit() {
    this.idCtrl = this.formBuilder.control('');
    this.emailCtrl = this.formBuilder.control('');
    this.loginCtrl = this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required);
    this.passwordCtrl = this.formBuilder.control('');
    this.typeCtrl = this.formBuilder.control('');
    this.compteForm = this.formBuilder.group({
      id: this.idCtrl,
      email: this.emailCtrl,
      login: this.loginCtrl,
      password: this.passwordCtrl,
      type: this.typeCtrl
    });
  }
  load() {
    this.compte$ = this.compteService.findAll();
  }
  list() {
    return this.compte$;
  }
  add() {
    this.compteForm.reset();
    this.showForm = true;
  }
  edit(id) {
    this.compteService.findById(id).subscribe(resp => {
      this.compteForm.patchValue(resp);
      this.showForm = true;
    });
  }
  save() {
    const newcompte = {
      id: this.idCtrl.value,
      email: this.emailCtrl.value,
      login: this.loginCtrl.value,
      password: this.passwordCtrl.value,
      type: this.typeCtrl.value
    };
    this.compteService.save(newcompte).subscribe(resp => {
      this.compteForm.patchValue(resp);
      this.load();
    });
    this.cancel();
  }
  remove(id) {
    this.compteService.delete(id).subscribe(resp => this.load());
  }
  cancel() {
    this.showForm = false;
    this.compteForm.reset();
  }
  retour() {
    this.router.navigate(['/accueil']);
    this.exitAnimation();
  }
  // add class to trigger exit animation on click
  exitAnimation() {
    document.querySelector("section")?.classList.add("exitAnimation");
  }
  // Function to sort table by column
  sortTable(n, type) {
    var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById("table_compte");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < rows.length - 1; i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if (type == "string" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() // if string
          || type == "number" && Number(x.innerHTML) > Number(y.innerHTML))
            // if numbers
            {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
        } else if (dir == "desc") {
          if (type == "string" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase() // if string
          || type == "number" && Number(x.innerHTML) < Number(y.innerHTML))
            // if numbers
            {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount++;
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  static #_ = this.ɵfac = function CompteComponent_Factory(t) {
    return new (t || CompteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_compte_service__WEBPACK_IMPORTED_MODULE_0__.CompteService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CompteComponent,
    selectors: [["app-compte"]],
    decls: 35,
    vars: 4,
    consts: [[1, "card", "compte_list"], [1, "card-header", "compte_list_header"], [1, "card-body", "compte_list_body"], [1, "text_intro"], ["id", "table_compte"], [1, "id", 3, "click"], [1, "login", 3, "click"], [1, "password", 3, "click"], [1, "email", 3, "click"], [1, "type", 3, "click"], [1, "btn_td"], [3, "class", 4, "ngFor", "ngForOf"], [1, "card-footer", "compte_list_footer"], [1, "btn", "btn-success", "btn-lg", 3, "click"], [1, "bi", "bi-plus-lg"], [1, "btn", "btn-warning", "btn-lg", "mx-2", 3, "click"], [1, "bi", "bi-backspace"], ["class", "compte_edit", 4, "ngIf"], [1, "id"], [1, "login"], [1, "password"], [1, "email"], [1, "type"], [1, "btn-group"], [1, "btn", 3, "click"], [1, "bi", "bi-feather"], ["src", "../../assets/icons/skull-solid.svg"], [1, "compte_edit"], [3, "formGroup", "ngSubmit"], [1, "card-header"], [1, "card-body"], [1, "form_item"], ["for", "id", 1, "form-label"], ["type", "number", "id", "id", "name", "id", "readonly", "", "formControlName", "id", 1, "form-control"], ["for", "login", 1, "form-label"], ["type", "text", "id", "login", "name", "login", "formControlName", "login", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "password", 1, "form-label"], ["type", "text", "id", "password", "name", "password", "formControlName", "password", 1, "form-control"], ["for", "email", 1, "form-label"], ["type", "text", "id", "email", "name", "email", "formControlName", "email", 1, "form-control"], ["for", "type", 1, "form-label"], ["id", "type", "name", "type", "formControlName", "type", 1, "form-control"], ["value", "humain"], ["value", "ia"], ["value", "admin"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-success", "btn-lg"], [1, "bi", "bi-check-lg"], [1, "text-danger"]],
    template: function CompteComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section")(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Gestion des comptes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0)(4, "div", 1)(5, "div")(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "iste des comptes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2)(10, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Appuyez sur l'un des titres de colonne pour r\u00E9organiser les entr\u00E9es en fonction de celui-ci. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "table", 4)(13, "thead")(14, "tr")(15, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompteComponent_Template_th_click_15_listener() {
          return ctx.sortTable(0, "number");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompteComponent_Template_th_click_17_listener() {
          return ctx.sortTable(1, "string");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompteComponent_Template_th_click_19_listener() {
          return ctx.sortTable(2, "string");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Mot de passe");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompteComponent_Template_th_click_21_listener() {
          return ctx.sortTable(3, "string");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompteComponent_Template_th_click_23_listener() {
          return ctx.sortTable(4, "string");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, CompteComponent_tr_27_Template, 17, 7, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 12)(30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompteComponent_Template_a_click_30_listener() {
          return ctx.add();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CompteComponent_Template_a_click_32_listener() {
          return ctx.retour();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, CompteComponent_div_34_Template, 38, 2, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 2, ctx.list()));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
    styles: ["@charset \"UTF-8\";\nsection[_ngcontent-%COMP%] {\n  width: 100vw;\n  \n\n  height: 100%;\n  cursor: url('middle-ages-cursor-32x32.png'), pointer;\n  font-family: \"Lugrasimo\";\n  overflow: auto;\n  animation: _ngcontent-%COMP%_contentAppear 1s;\n}\n\n@keyframes _ngcontent-%COMP%_contentAppear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\nh1[_ngcontent-%COMP%] {\n  position: relative;\n  font-family: \"bronzion\";\n  font-size: 7vmin;\n  text-align: center;\n  background: url('scroll2.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  padding: 27vmin;\n  margin: auto;\n  margin-top: 5vh;\n  width: -moz-fit-content;\n  width: fit-content;\n  animation: _ngcontent-%COMP%_scrollAppear 1s ease-out;\n}\nh1[_ngcontent-%COMP%]::first-letter {\n  color: rgb(103, 0, 0);\n  font-size: 14vmin;\n}\nh1[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.4;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 30%;\n  animation: _ngcontent-%COMP%_Rotate 50s infinite linear;\n  transform-origin: center;\n  background: url('celtic_knot.png'), rgb(0, 26, 173);\n  background-blend-mode: lighten;\n  -webkit-mask-image: url('celtic_knot.png');\n          mask-image: url('celtic_knot.png');\n  mask-mode: alpha;\n  -webkit-mask-size: 30%;\n          mask-size: 30%;\n  -webkit-mask-position: center;\n          mask-position: center;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n}\n\n@keyframes _ngcontent-%COMP%_Rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_scrollAppear {\n  from {\n    transform: scale(0.5, 0.75);\n  }\n  to {\n    transform: scale(1, 1);\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n  border: 1px solid rgba(41, 19, 139, 0.5137254902);\n  box-shadow: 5px 5px 5px rgba(62, 0, 0, 0.488) !important;\n  border-radius: 50% !important;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: #fff;\n  background: url('coin.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) rotate(360deg);\n  transition: 0.9s;\n}\n.btn[_ngcontent-%COMP%]:active {\n  transform: scale(1.2) rotate(350deg);\n  transition: 0.1s;\n  color: rgb(0, 100, 0);\n}\n\n.compte_list_header[_ngcontent-%COMP%] {\n  position: relative;\n  color: rgba(119, 0, 0, 0.68);\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  font-family: \"Lugrasimo\";\n  background: url('top.png');\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: contain;\n  width: 100%;\n  height: 350px;\n  text-align: center;\n  padding: 0px;\n  padding-bottom: 1vmin;\n  margin-bottom: 0px;\n  border: 0px;\n}\n.compte_list_header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"bronzion\";\n  color: rgba(1, 79, 37, 0.668);\n  font-size: 7.5vw;\n}\n.compte_list_header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 70%;\n  height: 1.5vw;\n  bottom: 0px;\n  position: absolute;\n  background: url('page_decorative_divider.png');\n  background-size: contain;\n  background-position: bottom;\n  background-repeat: repeat-x;\n  opacity: 0.3;\n}\n\n.compte_list[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 0px solid #000000;\n  border-radius: 10px;\n  padding: 0px;\n}\n\n.compte_list_body[_ngcontent-%COMP%] {\n  background: url('middle_mirrored.png');\n  background-size: contain;\n  background-repeat: repeat;\n  background-position: top;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 0px;\n}\n\n.compte_list_footer[_ngcontent-%COMP%] {\n  color: rgba(119, 0, 0, 0.68);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10%;\n  font-family: \"Lugrasimo\";\n  background: url('top_mirrored.png');\n  background-repeat: no-repeat;\n  background-position: top;\n  background-size: contain;\n  width: 100%;\n  height: 340px;\n  text-align: center;\n  padding: 0px;\n  margin-bottom: 0px;\n  border: 0px;\n  position: relative;\n}\n.compte_list_footer[_ngcontent-%COMP%]:before {\n  pointer-events: none;\n  content: \"\";\n  left: 0px;\n  background-image: url('pen2.png');\n  background-size: contain;\n  background-position: left;\n  background-repeat: no-repeat;\n  position: absolute;\n  width: 70%;\n  height: 1000px;\n  top: 0px;\n  transform: translateY(-50%) translateX(5%);\n}\n.compte_list_footer[_ngcontent-%COMP%]:after {\n  pointer-events: none;\n  content: \"\";\n  right: 0px;\n  background: url('ink_block.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: absolute;\n  width: 40%;\n  height: 40%;\n  top: 0px;\n  transform: translateY(-50%) translateX(40%) rotate(12deg);\n}\n.compte_list_footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 10vw;\n  height: 10vw;\n  position: relative;\n  font-size: 3vw;\n  text-shadow: 1px 1px rgb(71, 0, 0);\n}\n.compte_list_footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 4vw;\n  font-weight: bolder;\n  bottom: 50%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  color: rgba(81, 0, 0, 0.792);\n  text-align: center;\n}\n.compte_list_footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url('coin3.png') !important;\n  background-size: 103% 103%;\n}\n.compte_list_footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1):after {\n  position: absolute;\n  bottom: 0px;\n  transform: translateX(-50%) translateY(50%);\n  content: \"Ajouter\";\n}\n.compte_list_footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2) {\n  background-image: url('coin2.png') !important;\n  background-size: 103% 103%;\n}\n.compte_list_footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2):after {\n  position: absolute;\n  bottom: 0px;\n  transform: translateX(-50%) translateY(50%);\n  content: \"Retour\";\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-bottom: 100px;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  height: 25vh;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%] {\n  transition: 0.2s;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5));\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   .id[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  color: rgb(0, 100, 0);\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%] {\n  transition: 0.1s;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%]:hover {\n  background-color: rgba(178, 255, 178, 0.755) !important;\n}\n\ntable[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1vh;\n}\ntable[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 3vw;\n  height: 3vw;\n  font-size: 0.5vw;\n}\ntable[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 50%;\n  justify-content: center;\n  position: absolute;\n  bottom: 50%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url('coin.png') !important;\n  background-size: 103% 103%;\n}\ntable[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1):after {\n  position: absolute;\n  bottom: 0px;\n  transform: translateX(-50%) translateY(50%);\n  content: \"Edit\";\n}\ntable[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2) {\n  background-image: url('coin5.png') !important;\n  background-size: 103% 103%;\n}\ntable[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2):after {\n  position: absolute;\n  bottom: 0px;\n  transform: translateX(-50%) translateY(50%);\n  content: \"Remove\";\n}\n\n.id[_ngcontent-%COMP%] {\n  width: 5vw;\n  font-size: 2vw;\n  text-align: center;\n  position: relative;\n  right: 10%;\n}\n.id[_ngcontent-%COMP%]:not(td) {\n  padding: -100%;\n  overflow: visible;\n  background-size: 150%;\n  border-radius: 100%;\n  position: relative;\n  text-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;\n}\n.id[_ngcontent-%COMP%]:not(td):before {\n  content: \"id\";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(87, 0, 0, 0.32);\n  height: 100%;\n  width: 100%;\n  transform: scale(1.5);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-image: url('shield_round.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.id[_ngcontent-%COMP%]:not(td)::after {\n  color: goldenrod;\n}\n.id[_ngcontent-%COMP%]:not(th) {\n  background: url('shield2.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-position: 50% 54%;\n  background-size: contain;\n  font-weight: bolder;\n  color: rgba(89, 0, 0, 0.766);\n}\n\n.btn_td[_ngcontent-%COMP%] {\n  width: 7vw;\n  position: relative;\n  left: 10%;\n  background-size: contain;\n}\n.btn_td[_ngcontent-%COMP%]:not(td) {\n  visibility: hidden;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%] {\n  font-size: 1vw;\n  align-items: center;\n  border: 2px dashed rgba(132, 8, 8, 0.501);\n  text-align: center;\n}\n\n.nom[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n.nom[_ngcontent-%COMP%]::first-letter {\n  color: rgb(193, 0, 0);\n}\n\nthead[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 11;\n  text-transform: capitalize;\n  top: 0px;\n  background-color: rgba(219, 220, 229, 0.4901960784);\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56 28' width='56' height='28'%3E%3Cpath fill='%2392acac' fill-opacity='0.74' d='M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z'%3E%3C/path%3E%3C/svg%3E\");\n  color: white;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n  text-shadow: 1px 1px 1px rgb(71, 0, 0);\n  font-size: 1.3vw;\n  padding: 1vw;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n  transition: 0.1s;\n  position: relative;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  background-color: rgba(13, 107, 13, 0.35);\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover::after {\n  font-size: xx-small;\n  position: absolute;\n  bottom: 0.25vw;\n  right: 0px;\n  width: 100%;\n  content: \"\u25BC\";\n  animation: _ngcontent-%COMP%_listOrderPulse 0.3s alternate infinite;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-letter {\n  color: rgb(193, 0, 0);\n  font-size: 1.75vw;\n}\n\n@keyframes _ngcontent-%COMP%_listOrderPulse {\n  from {\n    transform: scale(1.3);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n.compte_edit[_ngcontent-%COMP%] {\n  background-color: transparent;\n  background-image: url('scroll3.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  margin-bottom: 20vh;\n  animation: _ngcontent-%COMP%_contentAppear 1s;\n  padding: 10%;\n}\n.compte_edit[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  position: relative;\n  color: rgb(71, 0, 0);\n  text-align: center;\n  font-size: 3vw;\n  padding-top: 13vw;\n}\n.compte_edit[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]::first-letter {\n  font-family: \"bronzion\";\n  color: rgba(1, 79, 37, 0.668);\n  font-size: 6vw;\n}\n.compte_edit[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 60%;\n  height: 1.5vw;\n  bottom: 0px;\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  background: url('page_decorative_divider2.png');\n  background-size: contain;\n  background-position: bottom;\n  background-repeat: repeat-x;\n  opacity: 0.3;\n}\n.compte_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-top: 1vw;\n  width: 50%;\n  align-items: center;\n  margin: auto;\n  padding-bottom: 2vw;\n  position: relative;\n}\n.compte_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .compte_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  width: 20%;\n  color: rgba(79, 0, 0, 0.644);\n  display: flex;\n  justify-content: center;\n  cursor: url('feather.png'), pointer;\n  font-size: 1vw;\n}\n.compte_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after, .compte_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 90%;\n  height: 3vw;\n  bottom: 0px;\n  left: 50%;\n  transform: translateX(-50%) translateY(25%);\n  position: absolute;\n  background: url('page_decorative_divider3.png');\n  background-size: contain;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  opacity: 0.3;\n}\n.compte_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-left: 1vw;\n}\n.compte_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .compte_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background-color: rgba(172, 233, 237, 0.392);\n  border: 1px solid rgba(121, 1, 1, 0.5);\n  cursor: url('feather.png'), pointer;\n  font-size: 1vw;\n}\n.compte_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .compte_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n  border-color: #333;\n}\n.compte_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .compte_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgb(193, 0, 0);\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n  background-color: rgba(255, 128, 0, 0.1);\n  animation: _ngcontent-%COMP%_inputFocus 1s infinite alternate;\n}\n.compte_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]:not(:last-child):after {\n  content: \"\";\n  width: 40%;\n  height: 3vw;\n  bottom: 0px;\n  left: 50%;\n  transform: translateX(-50%) translateY(0%);\n  position: absolute;\n  background: url('page_decorative_divider4.png');\n  background-size: contain;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  opacity: 0.3;\n}\n.compte_edit[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly !important;\n}\n.compte_edit[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 10vw;\n  height: 10vw;\n  position: relative;\n  border: none;\n  box-shadow: none;\n}\n.compte_edit[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 40px;\n  bottom: 50%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  color: rgba(81, 0, 0, 0.792);\n  text-align: center;\n}\n.compte_edit[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url('coin3.png') !important;\n  background-size: 103% 103%;\n}\n.compte_edit[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1):after {\n  position: absolute;\n  bottom: 0px;\n  transform: translateX(-50%) translateY(50%);\n  content: \"Ajouter\";\n}\n.compte_edit[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2) {\n  background-image: url('coin2.png') !important;\n  background-size: 103% 103%;\n}\n.compte_edit[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2):after {\n  position: absolute;\n  bottom: 0px;\n  transform: translateX(-50%) translateY(50%);\n  content: \"Fermer\";\n}\n\n@keyframes _ngcontent-%COMP%_inputFocus {\n  from {\n    box-shadow: 0 0 5px rgb(193, 0, 0);\n  }\n  to {\n    box-shadow: 0 0 4px rgb(0, 100, 0);\n  }\n}\ntd.type[_ngcontent-%COMP%] {\n  font-size: 2vw !important;\n  text-shadow: 0 0 5px purple;\n  position: relative;\n  z-index: 1;\n}\n\ntr.admin[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%] {\n  background-color: rgba(145, 255, 0, 0.05);\n}\ntr.admin[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td).type[_ngcontent-%COMP%] {\n  color: rgb(152, 110, 3);\n}\ntr.admin[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td).type[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -10;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('crown.png');\n  opacity: 0.3;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\ntr.admin[_ngcontent-%COMP%]   td.id[_ngcontent-%COMP%] {\n  background: url('shield3.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\ntr.admin[_ngcontent-%COMP%]   td.login[_ngcontent-%COMP%] {\n  position: relative;\n  color: goldenrod;\n  text-shadow: 0 0 7px #000000, 0 0 10px #000000, 0 0 21px #000000;\n  text-transform: capitalize;\n}\ntr.admin[_ngcontent-%COMP%]   td.login[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('god_bg.png');\n  opacity: 0.3;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  animation: _ngcontent-%COMP%_godGlow 0.3s alternate infinite;\n}\n\ntr.humain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%] {\n  background-color: rgba(255, 81, 0, 0.05);\n}\ntr.humain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td).type[_ngcontent-%COMP%] {\n  color: rgb(98, 0, 0);\n}\ntr.humain[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td).type[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -10;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('skull.png');\n  opacity: 0.3;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\ntr.ia[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%] {\n  background-color: rgba(149, 0, 255, 0.05);\n}\ntr.ia[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td).type[_ngcontent-%COMP%] {\n  color: rgb(78, 0, 98);\n}\ntr.ia[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td).type[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -10;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('cogwheel.png');\n  opacity: 0.3;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n@keyframes _ngcontent-%COMP%_godGlow {\n  from {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 0.3;\n  }\n}\n.exitAnimation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_exitAnimation 1s ease-in-out;\n  animation-fill-mode: forwards;\n}\n\n@keyframes _ngcontent-%COMP%_exitAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.text_intro[_ngcontent-%COMP%] {\n  color: rgb(71, 0, 0) !important;\n  width: 60%;\n}/*# sourceMappingURL=compte.component.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcHRlL2NvbXB0ZS5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jb21wdGUvY29tcHRlLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL19taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9fdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR2hCO0VBQ0UsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLG9EQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7QURERjs7QUNJQTtFQUNFO0lBQ0UsVUFBQTtFRERGO0VDSUE7SUFDRSxVQUFBO0VERkY7QUFDRjtBQ01BO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUVBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFPQSxtQ0FBQTtBRFhGO0FDTUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FESko7QUNTRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VDakRBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFRGtEQSxvQkFEVTtFQUVWLHFDQUFBO0VBQ0Esd0JBQUE7RUFFQSxtREFBQTtFQUNBLDhCQUFBO0VBRUEsMENBQUE7VUFBQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBVlU7VUFVVixjQVZVO0VBV1YsNkJBQUE7VUFBQSxxQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QURSSjs7QUNZQTtFQUNFO0lBQ0UsdUJBQUE7RURURjtFQ1lBO0lBQ0UseUJBQUE7RURWRjtBQUNGO0FDY0E7RUFDRTtJQUNFLDJCQUFBO0VE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 */"]
  });
}

/***/ }),

/***/ 9017:
/*!******************************************!*\
  !*** ./src/app/compte/compte.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CompteService: () => (/* binding */ CompteService)
/* harmony export */ });
/* harmony import */ var _environnements_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environnements/environment */ 6326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class CompteService {
  constructor(http) {
    this.http = http;
  }
  findAll() {
    return this.http.get(_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/compte");
  }
  findIA() {
    return this.http.get(_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/compte/IA");
  }
  findById(id) {
    return this.http.get(_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/compte/" + id);
  }
  save(compte) {
    if (compte.type == "admin") {
      if (compte.id) {
        return this.http.put(_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/compte/admin/" + compte.id, compte);
      }
      return this.http.post(_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/compte/admin", compte);
    }
    if (compte.type == "ia") {
      if (compte.id) {
        return this.http.put(_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/compte/ia/" + compte.id, compte);
      }
      return this.http.post(_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/compte/ia", compte);
    } else {
      if (compte.id) {
        return this.http.put(_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/compte/humain/" + compte.id, compte);
      }
      return this.http.post(_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/compte/humain", compte);
    }
  }
  delete(id) {
    return this.http.delete(_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/compte/" + id);
  }
  static #_ = this.ɵfac = function CompteService_Factory(t) {
    return new (t || CompteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CompteService,
    factory: CompteService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 187:
/*!**************************************************!*\
  !*** ./src/app/connexion/connexion.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConnexionComponent: () => (/* binding */ ConnexionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 6466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _chains_chains_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chains/chains.component */ 6175);







function ConnexionComponent_p_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Le login est obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ConnexionComponent_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Le mot passe est obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ConnexionComponent_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Le mot passe doit avoir au moins 5 caract\u00E8res");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/menu"];
};
class ConnexionComponent {
  constructor(authService, formBuilder, router) {
    this.authService = authService;
    this.formBuilder = formBuilder;
    this.router = router;
  }
  ngOnInit() {
    this.loginCtrl = this.formBuilder.control("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
    this.passwordCtrl = this.formBuilder.control("", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]);
    this.connexionForm = this.formBuilder.group({
      login: this.loginCtrl,
      password: this.passwordCtrl
    });
  }
  connexion() {
    this.authService.login(this.loginCtrl.value, this.passwordCtrl.value);
    if (this.authService.isLogged()) {
      this.router.navigate(["/accueil"]);
    }
  }
  cancel() {
    this.loginCtrl.reset();
  }
  // add class to trigger exit animation on click
  exitAnimation() {
    document.querySelector(".formulaire")?.classList.add("exitAnimation");
  }
  breakChainsAnimation() {
    document.querySelector("app-chains")?.classList.add("chain_dissolve");
  }
  static #_ = this.ɵfac = function ConnexionComponent_Factory(t) {
    return new (t || ConnexionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ConnexionComponent,
    selectors: [["app-connexion"]],
    decls: 31,
    vars: 7,
    consts: [[1, "formulaire"], [3, "formGroup", "ngSubmit"], [1, "titre"], ["id", "bg_img", "src", "../../assets/flipbook-textures/dialog_scroll.png"], [1, "container"], ["for", "login", 1, "form-label"], [1, "input-div"], ["type", "text", "id", "login", "name", "login", "formControlName", "login", 1, "form-control"], ["for", "password", 1, "form-label"], ["type", "password", "id", "password", "name", "password", "formControlName", "password", 1, "form-control"], [1, "button_group"], ["type", "submit", 3, "disabled", "click"], ["routerLinkActive", "active", 3, "routerLink", "click"], ["type", "button", 1, "button"], [1, "danger_group"], ["class", "danger login_mandatory", 4, "ngIf"], ["class", "danger pass_mandatory", 4, "ngIf"], ["class", "danger pass_min_length", 4, "ngIf"], [1, "prop"], [1, "danger", "login_mandatory"], [1, "danger", "pass_mandatory"], [1, "danger", "pass_min_length"]],
    template: function ConnexionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ConnexionComponent_Template_form_ngSubmit_1_listener() {
          return ctx.connexion();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Connexion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "div")(7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Login:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div")(12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Password:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10)(17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConnexionComponent_Template_button_click_17_listener() {
          ctx.exitAnimation();
          return ctx.breakChainsAnimation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Se connecter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ConnexionComponent_Template_a_click_19_listener() {
          return ctx.exitAnimation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Retour ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, ConnexionComponent_p_23_Template, 2, 0, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, ConnexionComponent_p_24_Template, 2, 0, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, ConnexionComponent_p_25_Template, 2, 0, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 18)(27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "M");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "ythik");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "app-chains");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.connexionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.connexionForm.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginCtrl.dirty && ctx.loginCtrl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordCtrl.dirty && ctx.passwordCtrl.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.passwordCtrl.dirty && ctx.passwordCtrl.hasError("minlength"));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _chains_chains_component__WEBPACK_IMPORTED_MODULE_1__.ChainsComponent],
    styles: ["@charset \"UTF-8\";\n.formulaire[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  width: 70%;\n  height: 80%;\n  margin: auto;\n  color: white;\n  animation: _ngcontent-%COMP%_scrollAppear 1s ease-out;\n  transition: 1s ease-in-out;\n}\n.formulaire[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.formulaire[_ngcontent-%COMP%]:hover   .prop[_ngcontent-%COMP%] {\n  transform: rotate(0deg) scale(1.1);\n}\n\n#bg_img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  height: 100%;\n  object-fit: cover;\n}\n\n@keyframes _ngcontent-%COMP%_scrollAppear {\n  from {\n    transform: scale(0, 0.5);\n  }\n  to {\n    transform: scale(1, 1);\n  }\n}\n.container[_ngcontent-%COMP%], .button_group[_ngcontent-%COMP%], .titre[_ngcontent-%COMP%], .prop[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation: _ngcontent-%COMP%_contentAppear 1s ease-in;\n  animation-delay: 0.7s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes _ngcontent-%COMP%_contentAppear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.titre[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  width: 50%;\n  margin: auto;\n  padding: 10px 20vmin;\n  position: relative;\n  border: 2vmin double rgba(0, 255, 0, 0.1);\n  border-image: url('nail.png');\n  font-size: 8vmin;\n  background: url('scroll_paper.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 120% 140%;\n  background-blend-mode: soft-light;\n  font-family: bronzion;\n  color: rgb(193, 0, 0);\n  text-shadow: 1px 1px 1px rgba(0, 128, 0, 0.501);\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  width: 40%;\n  margin: auto;\n  color: rgba(67, 2, 2, 0.824);\n  text-align: center;\n  position: relative;\n}\n\n.container[_ngcontent-%COMP%]   .input-div[_ngcontent-%COMP%] {\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .input-div[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 15%;\n  height: 100%;\n  opacity: 0;\n  transition: 0.2s;\n  background-image: url('bow.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-position: right;\n}\n.container[_ngcontent-%COMP%]   .input-div[_ngcontent-%COMP%]:hover:after {\n  opacity: 0.3;\n  animation: _ngcontent-%COMP%_arrowInput 0.2s alternate infinite;\n}\n\n@keyframes _ngcontent-%COMP%_arrowInput {\n  from {\n    opacity: 0.1;\n    transform: translateX(-0.5vw);\n  }\n  to {\n    opacity: 0.3;\n    transform: translateX(0vw);\n  }\n}\n\n\ninput[_ngcontent-%COMP%] {\n  width: 50vh;\n  height: 3vh;\n  padding: 3vmin;\n  margin: auto;\n  border: 1px dashed #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background: url('linen.png'), rgba(248, 237, 219, 0.4196078431);\n  background-size: contain;\n  cursor: url('feather.png'), pointer;\n}\n\n\n\ninput[_ngcontent-%COMP%]:hover {\n  border-color: #333;\n}\n\n\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgb(193, 0, 0);\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n  background-color: rgba(255, 128, 0, 0.1);\n  animation: _ngcontent-%COMP%_inputFocus 1s infinite alternate;\n}\n\n@keyframes _ngcontent-%COMP%_inputFocus {\n  from {\n    box-shadow: 0 0 5px rgb(193, 0, 0);\n  }\n  to {\n    box-shadow: 0 0 4px rgb(0, 100, 0);\n  }\n}\n.button_group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1vmin;\n  padding-bottom: 20px;\n}\n.button_group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 45%;\n  height: 50px;\n  padding: 0;\n  margin-top: 1vmin;\n  border: none;\n  background: url('fantasy-button.png');\n  background-blend-mode: multiply;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  font-weight: bold;\n  font-size: 3vmin;\n  text-align: center;\n  text-decoration: none;\n  transition: 0.1s;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n}\n.button_group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:hover {\n  filter: hue-rotate(50deg);\n  text-shadow: #342101 1px 1px 10px;\n  transform: scale(1.1);\n}\n.button_group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:active {\n  transform: scale(1.2);\n}\n.button_group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:active   button[_ngcontent-%COMP%] {\n  color: white;\n}\n.button_group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  padding: none;\n  border: none;\n  height: 100%;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n  box-shadow: none;\n}\n\n.prop[_ngcontent-%COMP%] {\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 4vmin;\n  font-family: bronzion;\n  writing-mode: vertical-rl;\n  text-orientation: upright;\n  color: rgb(193, 0, 0);\n  width: 50%;\n  height: 50%;\n  top: 0px;\n  background: url('shield.png'), radial-gradient(black, transparent, transparent);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: absolute;\n  right: -7vw;\n  transform: rotate(10deg);\n  transition: 1s;\n}\n.prop[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 8vmin;\n  font-weight: bold;\n  color: rgb(84, 87, 255);\n  transform: translateY(1vmin);\n}\n\n.danger_group[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  right: 50%;\n  width: 100%;\n  text-align: center;\n  transform: translateX(50%);\n}\n.danger_group[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%] {\n  color: rgb(216, 0, 93);\n  animation: _ngcontent-%COMP%_dangerAppear 0.3s ease-in, _ngcontent-%COMP%_dangerAnimate 0.3s ease-in-out infinite alternate;\n}\n.danger_group[_ngcontent-%COMP%]   .danger.pass_mandatory[_ngcontent-%COMP%] {\n  bottom: 0vmin;\n}\n.danger_group[_ngcontent-%COMP%]   .danger.pass_min_length[_ngcontent-%COMP%] {\n  bottom: 2vmin;\n}\n.danger_group[_ngcontent-%COMP%]   .danger.user.login_mandatory[_ngcontent-%COMP%] {\n  bottom: 4vmin;\n}\n\n@keyframes _ngcontent-%COMP%_dangerAppear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_dangerAnimate {\n  0% {\n    text-shadow: 0 0 8px rgba(0, 0, 255, 0.503);\n  }\n  50% {\n    text-shadow: 0 0 12px rgba(85, 0, 255, 0.484);\n  }\n  100% {\n    text-shadow: 0 0 5px rgba(0, 183, 255, 0.598);\n  }\n}\n.exitAnimation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_exitAnimation 1s ease-in-out;\n  animation-fill-mode: forwards;\n}\n\n@keyframes _ngcontent-%COMP%_exitAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}/*# sourceMappingURL=connexion.component.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29ubmV4aW9uL2Nvbm5leGlvbi5jb21wb25lbnQuY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9jb25uZXhpb24vY29ubmV4aW9uLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL192YXJpYWJsZXMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDR2hCO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQkFBQTtBRERGO0FDR0U7RUFDRSxzQkFBQTtBRERKO0FDR0k7RUFDRSxrQ0FBQTtBREROOztBQ01BO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBREhGOztBQ01BO0VBQ0U7SUFDRSx3QkFBQTtFREhGO0VDT0E7SUFDRSxzQkFBQTtFRExGO0FBQ0Y7QUNVQTs7OztFQUlFLFVBQUE7RUFDQSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QURSRjs7QUNZQTtFQUNFO0lBQ0UsVUFBQTtFRFRGO0VDYUE7SUFDRSxVQUFBO0VEWEY7QUFDRjtBQ2VBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBRUEsNkJBQUE7RUFDQSxnQkFBQTtFQUVBLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFFQSxxQkFBQTtFQUNBLHFCQzlG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 */"]
  });
}

/***/ }),

/***/ 1166:
/*!***************************************!*\
  !*** ./src/app/creature-data.pipe.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatureDataPipe: () => (/* binding */ CreatureDataPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CreatureDataPipe {
  transform(value,
  // might return a creature, or might return null
  ...args) {
    // console.log(typeof(value))
    if (value != null) {
      let mythology = value.mythologie;
      let element = value.typeElement;
      let god = value.dieu ? "dieu" : "creature";
      return mythology + ' ' + element + ' ' + god;
    } else {
      return "undefined";
    }
  }
  static #_ = this.ɵfac = function CreatureDataPipe_Factory(t) {
    return new (t || CreatureDataPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "creatureData",
    type: CreatureDataPipe,
    pure: true
  });
}

/***/ }),

/***/ 8635:
/*!**************************************************************!*\
  !*** ./src/app/creature-page-a/creature-page-a.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreaturePageAComponent: () => (/* binding */ CreaturePageAComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _creature_creature_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creature/creature.service */ 4176);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);




function CreaturePageAComponent_option_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngValue", c_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](c_r3.nom);
  }
}
function CreaturePageAComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreaturePageAComponent_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.previous());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Precedent");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function CreaturePageAComponent_button_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreaturePageAComponent_button_37_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r6.next());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Suivant");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class CreaturePageAComponent {
  constructor(creatureService) {
    this.creatureService = creatureService;
    this.creatureList = [];
    this.num = 0;
    this.selectShow = false;
    this.i = 1;
  }
  ngOnInit() {
    this.creatureService.findAll().subscribe(creatures => {
      this.creatureList = creatures;
      this.selectedCreature = this.loadCreature();
    });
  }
  loadCreature() {
    return this.creature = this.creatureList[this.num];
  }
  previous() {
    if (this.num > 0) {
      this.num = this.creatureList.indexOf(this.selectedCreature) - 1;
      this.selectedCreature = this.loadCreature();
      AdjCreatureDisplay(this.selectedCreature);
    }
  }
  next() {
    if (this.num < this.creatureList.length - 1) {
      this.num = this.creatureList.indexOf(this.selectedCreature) + 1;
      this.selectedCreature = this.loadCreature();
      AdjCreatureDisplay(this.selectedCreature);
    }
  }
  static #_ = this.ɵfac = function CreaturePageAComponent_Factory(t) {
    return new (t || CreaturePageAComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_creature_creature_service__WEBPACK_IMPORTED_MODULE_0__.CreatureService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: CreaturePageAComponent,
    selectors: [["app-creature-page-a"]],
    decls: 39,
    vars: 12,
    consts: [["id", "creature_general_container"], ["id", "creature_selection_menu"], ["for", "creatureSelector"], ["id", "creatureSelector", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["id", "creature_contents"], ["id", "pageLeft", 1, "creaturePage"], [1, "nom"], [1, "descript"], [1, "numeroPageLeft"], ["class", "pageControlBtn", 3, "click", 4, "ngIf"], ["id", "pageRight", 1, "creaturePage"], [1, "image"], ["width", "30px", "height", "30px", 3, "src"], ["src", "../../assets/flipbook-textures/fantasy-break.png", 1, "break"], [1, "memo"], ["id", "mytho"], ["id", "element"], [1, "element"], ["id", "attack"], [3, "ngValue"], [1, "pageControlBtn", 3, "click"]],
    template: function CreaturePageAComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Choisir une cr\u00E9ature :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CreaturePageAComponent_Template_select_ngModelChange_4_listener($event) {
          return ctx.selectedCreature = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, CreaturePageAComponent_option_5_Template, 2, 2, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9)(13, "ul")(14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, CreaturePageAComponent_button_17_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 11)(19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 15)(23, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Memo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Domaine mythologique : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Type d'\u00E9l\u00E9ments : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Niveau d'attaque : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, CreaturePageAComponent_button_37_Template, 2, 0, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedCreature);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.creatureList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedCreature.nom);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedCreature.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.creatureList.indexOf(ctx.selectedCreature) + 1, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" / ", ctx.creatureList.length, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.num > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.selectedCreature.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedCreature.mythologie);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedCreature.typeElement);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.selectedCreature.attaque);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.num < ctx.creatureList.length - 1);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
    styles: ["@font-face {\n  font-family: \"Lugrasimo\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('Lugrasimo-Regular.ttf');\n}\n@font-face {\n  font-family: \"bronzion\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('BronzionDeco_PERSONAL_USE_ONLY.otf');\n}\n#creature_general_container[_ngcontent-%COMP%] {\n  font-family: \"Lugrasimo\";\n}\n\napp-creature-page-a[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n#creature_contents[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  size: 100% 100%;\n  animation: _ngcontent-%COMP%_creatureAppear 2s;\n}\n#creature_contents[_ngcontent-%COMP%]    > .creaturePage[_ngcontent-%COMP%] {\n  background-image: url('nordic_frame.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n\n.break[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n@keyframes _ngcontent-%COMP%_creatureAppear {\n  0% {\n    opacity: 0;\n    filter: brightness(5) drop-shadow(0 0 20px rgb(136, 0, 233)) blur(10px);\n  }\n  25% {\n    opacity: 1;\n    filter: brightness(50) drop-shadow(0 0 20px rgb(136, 0, 233)) blur(10px);\n  }\n  100% {\n    opacity: 1;\n    filter: brightness(1) drop-shadow(0px 0px 0px rgba(255, 0, 0, 0)) blur(0px);\n  }\n}\n#pageLeft[_ngcontent-%COMP%] {\n  width: 45%;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n#pageLeft[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 20%;\n  margin-left: 33%;\n  font-family: \"bronzion\";\n  font-size: 30px;\n  padding: 10px;\n}\n#pageLeft[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%]::first-letter {\n  font-size: 100px;\n  font-weight: bold;\n  color: brown;\n}\n#pageLeft[_ngcontent-%COMP%]   .descript[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: auto;\n  padding-bottom: 20%;\n}\n#pageLeft[_ngcontent-%COMP%]   .numeroPageLeft[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2%;\n  left: 7%;\n  color: rgba(79, 5, 5, 0.623);\n}\n#pageLeft[_ngcontent-%COMP%]   .numeroPageLeft[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgb(136, 0, 0);\n  font-weight: bold;\n}\n\n.pageAnimation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_creatureAppear 0.5s;\n}\n\n#pageRight[_ngcontent-%COMP%] {\n  position: relative;\n  width: 45%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  gap: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n#pageRight[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  height: 40%;\n}\n#pageRight[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-image: url(\"/media/examples/border-diamonds.png\") 30/19px round;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  filter: saturate(0.5) sepia(0.2);\n  transition: 0.2s;\n  pointer-events: all;\n}\n#pageRight[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  filter: saturate(1);\n}\n#pageRight[_ngcontent-%COMP%]   .memo[_ngcontent-%COMP%] {\n  height: 25%;\n}\n#pageRight[_ngcontent-%COMP%]   .memo[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: bold;\n}\n#pageRight[_ngcontent-%COMP%]   .memo[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   .element[_ngcontent-%COMP%] {\n  color: blue;\n  animation: _ngcontent-%COMP%_elementGlow 0.6s infinite alternate;\n}\n\n@keyframes _ngcontent-%COMP%_elementGlow {\n  from {\n    text-shadow: 0 0 10px rgb(0, 0, 0);\n  }\n  to {\n    text-shadow: 0 0 8px rgba(0, 0, 0, 0.919);\n  }\n}\n#creature_selection_menu[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  z-index: 10;\n  top: -10px;\n  right: 0%;\n  padding: 10px 5px;\n  font-family: \"Lugrasimo\" !important;\n  text-align: center;\n  color: rgba(70, 1, 1, 0.87);\n  pointer-events: all;\n  background-color: #b0ffaf;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%239b00a5' fill-opacity='0.12' fill-rule='evenodd'/%3E%3C/svg%3E\"), url('natural-paper.png');\n  border-radius: 1%;\n  border: 3px ridge rgba(128, 0, 128, 0.395);\n  box-shadow: 10px 10px 10px rgba(38, 0, 0, 0.377);\n}\n#creature_selection_menu[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 5px;\n  padding-right: 10px;\n  background-color: rgba(255, 217, 0, 0.731);\n}\n#creature_selection_menu[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: url('fantasy_border2.png');\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n  border: none;\n  appearance: none;\n  padding: 20px 20px 3px;\n  text-align: center;\n  text-align-last: center;\n  margin-bottom: 13px;\n  transition: 0.1s ease-in-out;\n}\n#creature_selection_menu[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n  color: rgb(204, 0, 0);\n  transform: scale(1.05);\n}\n#creature_selection_menu[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus:focus-visible {\n  outline: none;\n}\n#creature_selection_menu[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  right: -20px;\n  transform: scaleY(2);\n  width: 0;\n  height: 0;\n  border-left: 20px solid #b0ffaf;\n  border-top: 20px solid transparent;\n  border-bottom: 20px solid transparent;\n  background-image: url('natural-paper.png');\n  background-size: cover;\n}\n\n.pageControlBtn[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -8px;\n  display: block;\n  text-align: center;\n  margin: auto;\n  text-align: center;\n  background: url('fantasy-button.png'), radial-gradient(rgba(172, 255, 47, 0.37), transparent 50%);\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n  padding: 50px 25px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  border: none;\n  transition: 0.3s;\n  pointer-events: all;\n  color: rgba(80, 0, 0, 0.649);\n}\n.pageControlBtn[_ngcontent-%COMP%]:hover {\n  filter: hue-rotate(50deg);\n  text-shadow: #342101 1px 1px 10px;\n  transform: scale(1.1);\n}/*# sourceMappingURL=creature-page-a.component.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3JlYXR1cmUtcGFnZS1hL2NyZWF0dXJlLXBhZ2UtYS5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3JlYXR1cmUtcGFnZS1hL2NyZWF0dXJlLXBhZ2UtYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Msd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7QUNDRDtBREVBO0VBQ0MsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUNBRDtBREdBO0VBQ0ksd0JBQUE7QUNESjs7QURJQTtFQUNJLGlCQUFBO0FDREo7O0FESUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0VBT0EsNEJBQUE7QUNQSjtBRENJO0VBQ0kseUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUNDUjs7QURJQTtFQUNJLFVBQUE7QUNESjs7QURJQTtFQUNJO0lBQ0ksVUFBQTtJQUNBLHVFQUFBO0VDRE47RURHRTtJQUNJLFVBQUE7SUFDQSx3RUFBQTtFQ0ROO0VER0U7SUFDSSxVQUFBO0lBQ0EsMkVBQUE7RUNETjtBQUNGO0FES0E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FDSEo7QURJSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDRlI7QURHUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDRFo7QURJSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNGUjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLDRCQUFBO0FDRlI7QURHUTtFQUNJLHFCQUFBO0VBQ0EsaUJBQUE7QUNEWjs7QURNQTtFQUNJLDhCQUFBO0FDSEo7O0FETUE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDSEo7QURJSTtFQUNJLFdBQUE7QUNGUjtBREdRO0VBQ0ksc0VBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRFo7QURFWTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7QUNBaEI7QURJSTtFQUNJLFdBQUE7QUNGUjtBREdRO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0RaO0FESVk7RUFDSSxXQUFBO0VBQ0EsOENBQUE7QUNGaEI7O0FEUUE7RUFDSTtJQUNJLGtDQUFBO0VDTE47RURPRTtJQUNJLHlDQUFBO0VDTE47QUFDRjtBRFFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFFQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBR0EseUJBQUE7RUFDQSw4WEFBQTtFQUNBLGlCQUFBO0VBQ0EsMENBQUE7RUFDQSxnREFBQTtBQ1RKO0FEVUk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQ1JSO0FEVUk7RUFFSSxzQ0FBQTtFQUVBLHFEQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDBCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQ1ZSO0FEV1E7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0FDVFo7QURXUTtFQUNJLGFBQUE7QUNUWjtBRFlNO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBRUEsUUFBQTtFQUNBLFNBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFDQSwwQ0FBQTtFQUNBLHNCQUFBO0FDWFI7O0FEaUJBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUdBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQ2RKO0FEZUk7RUFDSSx5QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUJBQUE7QUNiUixDQUFBLHdEQUFBIiwic291cmNlUm9vdCI6IiJ9 */"]
  });
}
function AdjCreatureDisplay(selectedCreature) {
  let creature = selectedCreature;
  // console.log(creature)
  let element = creature.typeElement;
  let mythology = creature.mythologie;
  let pv = creature.pv;
  let god = creature.dieu;
  let colorScheme;
  switch (element) {
    case 'feu':
      colorScheme = "red";
      break;
    case 'air':
      colorScheme = "yellow";
      break;
    case 'eau':
      colorScheme = "blue";
      break;
    case 'terre':
      colorScheme = "brown";
      break;
    default:
      colorScheme = "black";
  }
  let pageFrame;
  switch (mythology) {
    case 'grec':
      pageFrame = "url(../../assets/flipbook-textures/greek_frame.png)";
      break;
    case 'chinoise':
      pageFrame = "url(../../assets/flipbook-textures/chinese_frame.png)";
      break;
    case 'nordique':
      pageFrame = "url(../../assets/flipbook-textures/nordic_frame.png)";
      break;
    case 'egyptienne':
      pageFrame = "url(../../assets/flipbook-textures/egyptian_frame.png)";
      break;
    default:
      pageFrame = "url(../../assets/flipbook-textures/nordic_frame.png)";
  }
  let fontStyle;
  if (god) {
    fontStyle = "rgb(153,101,21)"; // golden brown
  } else {
    fontStyle = "black";
  }
  let pages = document.querySelectorAll(".creaturePage");
  pages.forEach(page => {
    page.style.background = pageFrame;
    page.style.backgroundPosition = "center";
    page.style.backgroundRepeat = "no-repeat";
    page.style.backgroundSize = "100% 100%";
    page.classList.add("pageAnimation");
    setTimeout(
    // remove animation after X milisec. Suboptimal solution.
    function () {
      page.classList.remove("pageAnimation");
    }, 700);
    console.log(page);
  });
  document.querySelector(".memo .element").style.color = colorScheme;
  // if god
  console.log(god);
  console.log(fontStyle);
  document.querySelector(".nom").style.color = fontStyle;
}

/***/ }),

/***/ 3968:
/*!**************************************************************!*\
  !*** ./src/app/creature-page-b/creature-page-b.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreaturePageBComponent: () => (/* binding */ CreaturePageBComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class CreaturePageBComponent {
  static #_ = this.ɵfac = function CreaturePageBComponent_Factory(t) {
    return new (t || CreaturePageBComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CreaturePageBComponent,
    selectors: [["app-creature-page-b"]],
    decls: 4,
    vars: 0,
    template: function CreaturePageBComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "creature-page-b works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Voici un photo\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img");
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6986:
/*!************************************************!*\
  !*** ./src/app/creature/creature.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatureComponent: () => (/* binding */ CreatureComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _creature_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./creature.service */ 4176);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _dieu_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dieu.pipe */ 5552);






function CreatureComponent_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](1, "dieu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "dieu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td", 14)(22, "div", 32)(23, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatureComponent_tr_35_Template_a_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const c_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.edit(c_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatureComponent_tr_35_Template_a_click_25_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const c_r2 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.remove(c_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](c_r2.mythologie + " " + c_r2.typeElement + " " + _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](1, 11, c_r2.dieu));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r2.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 13, c_r2.dieu), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r2.attaque);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r2.pv);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", c_r2.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r2.mythologie);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](c_r2.typeElement);
  }
}
function CreatureComponent_div_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36)(1, "form", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function CreatureComponent_div_42_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.save());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Edition d'une creature ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39)(5, "div", 40)(6, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 40)(10, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Nom:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 40)(14, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Description:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 40)(18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Dieu : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 40)(22, "label", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Attaque:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 40)(26, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Pv:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 40)(30, "label", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Image:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 40)(34, "label", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Mythologie:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "option", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Grec");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Egyptienne");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Chinoise");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "option", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Nordique");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 40)(47, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Type_Element:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Feu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Air");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Eau");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "option", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Terre");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 66)(60, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](61, "i", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatureComponent_div_42_Template_a_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.cancel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r1.creatureForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r1.creatureForm.invalid);
  }
}
class CreatureComponent {
  constructor(creatureService, formBuilder, router) {
    this.creatureService = creatureService;
    this.formBuilder = formBuilder;
    this.router = router;
    this.showForm = false;
    this.load();
  }
  ngOnInit() {
    this.idCtrl = this.formBuilder.control('');
    this.nomCtrl = this.formBuilder.control('');
    this.descriptionCtrl = this.formBuilder.control('');
    this.dieuCtrl = this.formBuilder.control('');
    this.attaqueCtrl = this.formBuilder.control('');
    this.pvCtrl = this.formBuilder.control('');
    this.imageCtrl = this.formBuilder.control('');
    this.mythologieCtrl = this.formBuilder.control('');
    this.typeElementCtrl = this.formBuilder.control('');
    this.creatureForm = this.formBuilder.group({
      id: this.idCtrl,
      nom: this.nomCtrl,
      description: this.descriptionCtrl,
      dieu: this.dieuCtrl,
      attaque: this.attaqueCtrl,
      pv: this.pvCtrl,
      image: this.imageCtrl,
      mythologie: this.mythologieCtrl,
      typeElement: this.typeElementCtrl
    });
  }
  load() {
    this.creatures$ = this.creatureService.findAll();
  }
  list() {
    return this.creatures$;
  }
  add() {
    this.creatureForm.reset();
    this.showForm = true;
  }
  cancel() {
    this.showForm = false;
    this.creatureForm.reset();
  }
  remove(id) {
    this.creatureService.delete(id).subscribe(resp => {
      this.load();
    });
  }
  edit(id) {
    this.creatureService.findById(id).subscribe(resp => {
      this.creatureForm.patchValue(resp);
      this.showForm = true;
    });
  }
  save() {
    if (this.creatureForm.value.id) {
      this.creatureService.update(this.creatureForm.value).subscribe(resp => {
        this.load();
      });
    } else {
      this.creatureService.create(this.creatureForm.value).subscribe(resp => {
        this.load();
      });
    }
    this.cancel();
  }
  retour() {
    this.router.navigate(['/accueil']);
    this.exitAnimation();
  }
  // add class to trigger exit animation on click
  exitAnimation() {
    document.querySelector("section")?.classList.add("exitAnimation");
  }
  // Function to sort table by column
  sortTable(n, type) {
    var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById("table_creature");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < rows.length - 1; i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if (type == "string" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() // if string
          || type == "number" && Number(x.innerHTML) > Number(y.innerHTML))
            // if numbers
            {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
        } else if (dir == "desc") {
          if (type == "string" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase() // if string
          || type == "number" && Number(x.innerHTML) < Number(y.innerHTML))
            // if numbers
            {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount++;
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  static #_ = this.ɵfac = function CreatureComponent_Factory(t) {
    return new (t || CreatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_creature_service__WEBPACK_IMPORTED_MODULE_0__.CreatureService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: CreatureComponent,
    selectors: [["app-creature"]],
    decls: 43,
    vars: 4,
    consts: [[1, "card", "creature_list"], [1, "card-header", "creature_list_header"], [1, "card-body", "creature_list_body"], [1, "text_intro"], ["id", "table_creature"], [1, "id", 3, "click"], [1, "nom", 3, "click"], [1, "description", 3, "click"], [1, "dieu", 3, "click"], [1, "attaque", 3, "click"], [1, "pv", 3, "click"], [1, "image", 3, "click"], [1, "mythologie", 3, "click"], [1, "type_element", 3, "click"], [1, "btn_td"], [3, "class", 4, "ngFor", "ngForOf"], [1, "card-footer", "creature_list_footer"], [1, "btn", "btn-success", "btn-lg", 3, "click"], [1, "bi", "bi-plus-lg"], [1, "btn", "btn-warning", "btn-lg", "mx-2", 3, "click"], [1, "bi", "bi-backspace"], ["class", "creature_edit", 4, "ngIf"], [1, "id"], [1, "nom"], [1, "description"], [1, "dieu"], [1, "attaque"], [1, "pv"], [1, "image"], [1, "creature_img", 3, "src"], [1, "mythologie"], [1, "type_element"], [1, "btn-group"], [1, "btn", 3, "click"], [1, "bi", "bi-feather"], ["src", "../../assets/icons/skull-solid.svg"], [1, "creature_edit"], [3, "formGroup", "ngSubmit"], [1, "card-header"], [1, "card-body"], [1, "form_item"], ["for", "id", 1, "form-label"], ["type", "number", "id", "id", "name", "id", "readonly", "", "formControlName", "id", 1, "form-control"], ["for", "nom", 1, "form-label"], ["type", "text", "id", "nom", "name", "nom", "formControlName", "nom", 1, "form-control"], ["for", "description", 1, "form-label"], ["type", "text", "id", "description", "name", "description", "formControlName", "description", 1, "form-control"], ["type", "checkbox", "name", "dieu", "formControlName", "dieu", 1, "form-check-input"], ["for", "attaque", 1, "form-label"], ["type", "number", "id", "attaque", "name", "attaque", "formControlName", "attaque", 1, "form-control"], ["for", "pv", 1, "form-label"], ["type", "number", "id", "pv", "name", "pv", "formControlName", "pv", 1, "form-control"], ["for", "image", 1, "form-label"], ["type", "text", "id", "image", "name", "image", "formControlName", "image", 1, "form-control"], ["for", "mythologie", 1, "form-label"], ["id", "image", "name", "mythologie", "formControlName", "mythologie", 1, "form-control"], ["value", "grec"], ["value", "egyptienne"], ["value", "chinoise"], ["value", "nordique"], ["for", "typeElement", 1, "form-label"], ["id", "typeElement", "name", "typeElement", "formControlName", "typeElement", 1, "form-control"], ["value", "feu"], ["value", "air"], ["value", "eau"], ["value", "terre"], [1, "card-footer", "d-flex"], ["type", "submit", 1, "btn", "btn-success", "btn-lg", 3, "disabled"], [1, "bi", "bi-check-lg"]],
    template: function CreatureComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section")(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Gestion des cr\u00E9atures");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 0)(4, "h2", 1)(5, "div")(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "iste des creatures ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 2)(10, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Appuyez sur l'un des titres de colonne pour r\u00E9organiser les entr\u00E9es en fonction de celui-ci. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "table", 4)(13, "thead")(14, "tr")(15, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatureComponent_Template_th_click_15_listener() {
          return ctx.sortTable(0, "number");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "id");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatureComponent_Template_th_click_17_listener() {
          return ctx.sortTable(1, "string");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "nom");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatureComponent_Template_th_click_19_listener() {
          return ctx.sortTable(2, "string");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatureComponent_Template_th_click_21_listener() {
          return ctx.sortTable(3, "string");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "dieu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatureComponent_Template_th_click_23_listener() {
          return ctx.sortTable(4, "number");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "attaque");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatureComponent_Template_th_click_25_listener() {
          return ctx.sortTable(5, "number");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "pv");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatureComponent_Template_th_click_27_listener() {
          return ctx.sortTable(6, "string");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatureComponent_Template_th_click_29_listener() {
          return ctx.sortTable(7, "string");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "mythologie");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatureComponent_Template_th_click_31_listener() {
          return ctx.sortTable(8, "string");
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "element");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](35, CreatureComponent_tr_35_Template, 27, 15, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](36, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 16)(38, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatureComponent_Template_a_click_38_listener() {
          return ctx.add();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CreatureComponent_Template_a_click_40_listener() {
          return ctx.retour();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, CreatureComponent_div_42_Template, 64, 2, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](36, 2, ctx.list()));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _dieu_pipe__WEBPACK_IMPORTED_MODULE_1__.DieuPipe],
    styles: ["@charset \"UTF-8\";\nsection[_ngcontent-%COMP%] {\n  width: 100vw;\n  \n\n  height: 100%;\n  cursor: url('middle-ages-cursor-32x32.png'), pointer;\n  font-family: \"Lugrasimo\";\n  overflow: auto;\n  animation: _ngcontent-%COMP%_contentAppear 1s;\n}\n\n@keyframes _ngcontent-%COMP%_contentAppear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\nh1[_ngcontent-%COMP%] {\n  position: relative;\n  font-family: \"bronzion\";\n  font-size: 7vmin;\n  text-align: center;\n  background: url('scroll2.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  padding: 27vmin;\n  margin: auto;\n  margin-top: 5vh;\n  width: -moz-fit-content;\n  width: fit-content;\n  animation: _ngcontent-%COMP%_scrollAppear 1s ease-out;\n}\nh1[_ngcontent-%COMP%]::first-letter {\n  color: rgb(103, 0, 0);\n  font-size: 14vmin;\n}\nh1[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.4;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 30%;\n  animation: _ngcontent-%COMP%_Rotate 50s infinite linear;\n  transform-origin: center;\n  background: url('oroboros.png'), rgb(173, 0, 0);\n  background-blend-mode: lighten;\n  -webkit-mask-image: url('oroboros.png');\n          mask-image: url('oroboros.png');\n  -webkit-mask-size: 30%;\n          mask-size: 30%;\n  mask-mode: alpha;\n  -webkit-mask-position: center;\n          mask-position: center;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n}\n\n@keyframes _ngcontent-%COMP%_Rotate {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_scrollAppear {\n  from {\n    transform: scale(0.5, 0.75);\n  }\n  to {\n    transform: scale(1, 1);\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n  border: 1px solid rgba(41, 19, 139, 0.5137254902);\n  box-shadow: 5px 5px 5px rgba(62, 0, 0, 0.488) !important;\n  border-radius: 50% !important;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: #fff;\n  background: url('coin.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.btn[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1) rotate(360deg);\n  transition: 0.9s;\n}\n.btn[_ngcontent-%COMP%]:active {\n  transform: scale(1.2) rotate(350deg);\n  transition: 0.1s;\n  color: rgb(0, 100, 0);\n}\n\n.creature_list_header[_ngcontent-%COMP%] {\n  position: relative;\n  color: rgba(119, 0, 0, 0.68);\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  font-family: \"Lugrasimo\";\n  background: url('top.png');\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: contain;\n  width: 100%;\n  height: 350px;\n  text-align: center;\n  padding: 0px;\n  padding-bottom: 1vmin;\n  margin-bottom: 0px;\n  border: 0px;\n}\n.creature_list_header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"bronzion\";\n  color: rgba(1, 79, 37, 0.668);\n  font-size: 7.5vw;\n}\n.creature_list_header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 70%;\n  height: 1.5vw;\n  bottom: 0px;\n  position: absolute;\n  background: url('page_decorative_divider.png');\n  background-size: contain;\n  background-position: bottom;\n  background-repeat: repeat-x;\n  opacity: 0.3;\n}\n\n.creature_list[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 0px solid #000000;\n  border-radius: 10px;\n  padding: 0px;\n}\n\n.creature_list_body[_ngcontent-%COMP%] {\n  background: url('middle_mirrored.png');\n  background-size: contain;\n  background-repeat: repeat;\n  background-position: top;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 0px;\n}\n\n.creature_list_footer[_ngcontent-%COMP%] {\n  color: rgba(119, 0, 0, 0.68);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10%;\n  font-family: \"Lugrasimo\";\n  background: url('top_mirrored.png');\n  background-repeat: no-repeat;\n  background-position: top;\n  background-size: contain;\n  width: 100%;\n  height: 340px;\n  text-align: center;\n  padding: 0px;\n  margin-bottom: 0px;\n  border: 0px;\n  position: relative;\n}\n.creature_list_footer[_ngcontent-%COMP%]:before {\n  pointer-events: none;\n  content: \"\";\n  left: 0px;\n  background-image: url('pen2.png');\n  background-size: contain;\n  background-position: left;\n  background-repeat: no-repeat;\n  position: absolute;\n  width: 70%;\n  height: 1000px;\n  top: 0px;\n  transform: translateY(-50%) translateX(5%);\n}\n.creature_list_footer[_ngcontent-%COMP%]:after {\n  pointer-events: none;\n  content: \"\";\n  right: 0px;\n  background: url('ink_block.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: absolute;\n  width: 40%;\n  height: 40%;\n  top: 0px;\n  transform: translateY(-50%) translateX(40%) rotate(12deg);\n}\n.creature_list_footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 10vw;\n  height: 10vw;\n  position: relative;\n  font-size: 3vw;\n  text-shadow: 1px 1px rgb(71, 0, 0);\n}\n.creature_list_footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 4vw;\n  font-weight: bolder;\n  bottom: 50%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  color: rgba(81, 0, 0, 0.792);\n  text-align: center;\n}\n.creature_list_footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url('coin3.png') !important;\n  background-size: 103% 103%;\n}\n.creature_list_footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1):after {\n  position: absolute;\n  bottom: 0px;\n  transform: translateX(-50%) translateY(50%);\n  content: \"Ajouter\";\n}\n.creature_list_footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2) {\n  background-image: url('coin2.png') !important;\n  background-size: 103% 103%;\n}\n.creature_list_footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2):after {\n  position: absolute;\n  bottom: 0px;\n  transform: translateX(-50%) translateY(50%);\n  content: \"Retour\";\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 80%;\n  margin-bottom: 100px;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   .id[_ngcontent-%COMP%] {\n  transition: 0.2s;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%] {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5));\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   .id[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  color: rgb(0, 100, 0);\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%] {\n  transition: 0.1s;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%]:hover {\n  background-color: rgba(178, 255, 178, 0.755) !important;\n}\n\ntable[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2vh;\n}\ntable[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 3vw;\n  height: 3vw;\n  font-size: 0.5vw;\n}\ntable[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 50%;\n  justify-content: center;\n  position: absolute;\n  bottom: 50%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  text-align: center;\n}\ntable[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url('coin.png') !important;\n  background-size: 103% 103%;\n}\ntable[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1):after {\n  position: absolute;\n  bottom: 0px;\n  transform: translateX(-50%) translateY(50%);\n  content: \"Edit\";\n}\ntable[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2) {\n  background-image: url('coin5.png') !important;\n  background-size: 103% 103%;\n}\ntable[_ngcontent-%COMP%]   .btn-group[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2):after {\n  position: absolute;\n  bottom: 0px;\n  transform: translateX(-50%) translateY(50%);\n  content: \"Remove\";\n}\n\n.id[_ngcontent-%COMP%] {\n  width: 5vw;\n  font-size: 2vw;\n  text-align: center;\n  position: relative;\n  right: 10%;\n}\n.id[_ngcontent-%COMP%]:not(td) {\n  padding: -100%;\n  overflow: visible;\n  background-size: 150%;\n  border-radius: 100%;\n  position: relative;\n  text-shadow: 0 0 0 rgba(0, 0, 0, 0) !important;\n}\n.id[_ngcontent-%COMP%]:not(td):before {\n  content: \"id\";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(87, 0, 0, 0.32);\n  height: 100%;\n  width: 100%;\n  transform: scale(1.5);\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-image: url('shield_round.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.id[_ngcontent-%COMP%]:not(td)::after {\n  color: goldenrod;\n}\n.id[_ngcontent-%COMP%]:not(th) {\n  background: url('shield2.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-position: 50% 54%;\n  background-size: contain;\n  font-weight: bolder;\n  color: rgba(89, 0, 0, 0.766);\n}\n\n.btn_td[_ngcontent-%COMP%] {\n  width: 7vw;\n  position: relative;\n  left: 10%;\n  background-size: contain;\n}\n.btn_td[_ngcontent-%COMP%]:not(td) {\n  visibility: hidden;\n}\n\ntable[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%] {\n  font-size: 1vw;\n  align-items: center;\n  border: 2px dashed rgba(132, 8, 8, 0.501);\n  text-align: center;\n}\n\n.nom[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n.nom[_ngcontent-%COMP%]::first-letter {\n  color: rgb(193, 0, 0);\n}\n\n.creature_img[_ngcontent-%COMP%] {\n  width: 8vw;\n  transition: 0.5s ease-in-out;\n  filter: sepia(0.5) brightness(0.75);\n  position: relative;\n  z-index: 1;\n  border: 10px solid transparent;\n  padding: 1px;\n  border-image-source: url('ruby.png');\n  border-image-repeat: round;\n  border-image-slice: 1000;\n}\n.creature_img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n  box-shadow: 10px 10px 10px rgba(69, 1, 1, 0.589);\n  z-index: 10;\n  filter: sepia(0) brightness(1);\n}\n\nthead[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 11;\n  text-transform: capitalize;\n  top: 0px;\n  background-color: rgba(72, 52, 46, 0.6666666667);\n  background-image: url(\"data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%23ab0b0b' fill-opacity='0.46' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  color: white;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n  text-shadow: 1px 1px 1px rgb(71, 0, 0);\n  font-size: 1.3vw;\n  padding: 1vw;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n  transition: 0.1s;\n  position: relative;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  background-color: rgba(13, 107, 13, 0.35);\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover::after {\n  font-size: xx-small;\n  position: absolute;\n  bottom: 0.25vw;\n  right: 0px;\n  width: 100%;\n  content: \"\u25BC\";\n  animation: _ngcontent-%COMP%_listOrderPulse 0.3s alternate infinite;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-letter {\n  color: rgb(193, 0, 0);\n  font-size: 1.75vw;\n}\n\n@keyframes _ngcontent-%COMP%_listOrderPulse {\n  from {\n    transform: scale(1.3);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n.creature_edit[_ngcontent-%COMP%] {\n  background-color: transparent;\n  background-image: url('scroll3.png');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  margin-bottom: 20vh;\n  animation: _ngcontent-%COMP%_contentAppear 1s;\n}\n.creature_edit[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  font-size: 3vw;\n  padding-top: 13vw;\n  color: rgb(71, 0, 0);\n}\n.creature_edit[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]::first-letter {\n  font-family: \"bronzion\";\n  color: rgba(1, 79, 37, 0.668);\n  font-size: 6vw;\n}\n.creature_edit[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 60%;\n  height: 1.5vw;\n  bottom: 0px;\n  left: 50%;\n  transform: translateX(-50%);\n  position: absolute;\n  background: url('page_decorative_divider2.png');\n  background-size: contain;\n  background-position: bottom;\n  background-repeat: repeat-x;\n  opacity: 0.3;\n}\n.creature_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-top: 1vw;\n  width: 50%;\n  align-items: center;\n  margin: auto;\n  padding-bottom: 2vw;\n  position: relative;\n}\n.creature_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .creature_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  width: 20%;\n  color: rgba(79, 0, 0, 0.644);\n  display: flex;\n  justify-content: center;\n  cursor: url('feather.png'), pointer;\n  font-size: 1vw;\n}\n.creature_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after, .creature_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 90%;\n  height: 3vw;\n  bottom: 0px;\n  left: 50%;\n  transform: translateX(-50%) translateY(25%);\n  position: absolute;\n  background: url('page_decorative_divider3.png');\n  background-size: contain;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  opacity: 0.3;\n}\n.creature_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-left: 1vw;\n}\n.creature_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .creature_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background-color: rgba(172, 233, 237, 0.392);\n  border: 1px solid rgba(121, 1, 1, 0.5);\n  cursor: url('feather.png'), pointer;\n  font-size: 1vw;\n}\n.creature_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .creature_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover {\n  border-color: #333;\n}\n.creature_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .creature_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgb(193, 0, 0);\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n  background-color: rgba(255, 128, 0, 0.1);\n  animation: _ngcontent-%COMP%_inputFocus 1s infinite alternate;\n}\n.creature_edit[_ngcontent-%COMP%]   .form_item[_ngcontent-%COMP%]:not(:last-child):after {\n  content: \"\";\n  width: 40%;\n  height: 3vw;\n  bottom: 0px;\n  left: 50%;\n  transform: translateX(-50%) translateY(0%);\n  position: absolute;\n  background: url('page_decorative_divider4.png');\n  background-size: contain;\n  background-position: bottom;\n  background-repeat: no-repeat;\n  opacity: 0.3;\n}\n.creature_edit[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly !important;\n}\n.creature_edit[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 10vw;\n  height: 10vw;\n  position: relative;\n  border: none;\n  box-shadow: none;\n}\n.creature_edit[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 40px;\n  bottom: 50%;\n  left: 50%;\n  transform: translate(-50%, 50%);\n  color: rgba(81, 0, 0, 0.792);\n  text-align: center;\n}\n.creature_edit[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url('coin3.png') !important;\n  background-size: 103% 103%;\n}\n.creature_edit[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(1):after {\n  position: absolute;\n  bottom: 0px;\n  transform: translateX(-50%) translateY(50%);\n  content: \"Ajouter\";\n}\n.creature_edit[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2) {\n  background-image: url('coin2.png') !important;\n  background-size: 103% 103%;\n}\n.creature_edit[_ngcontent-%COMP%]   .card-footer[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:nth-child(2):after {\n  position: absolute;\n  bottom: 0px;\n  transform: translateX(-50%) translateY(50%);\n  content: \"Fermer\";\n}\n\n@keyframes _ngcontent-%COMP%_inputFocus {\n  from {\n    box-shadow: 0 0 5px rgb(193, 0, 0);\n  }\n  to {\n    box-shadow: 0 0 4px rgb(0, 100, 0);\n  }\n}\ntd.type_element[_ngcontent-%COMP%] {\n  font-size: 2vw !important;\n  text-shadow: 0 0 5px purple;\n  position: relative;\n  z-index: 1;\n}\n\ntr.feu[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%] {\n  background-color: rgba(255, 81, 0, 0.05);\n}\ntr.feu[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td).type_element[_ngcontent-%COMP%] {\n  color: red;\n}\ntr.feu[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td).type_element[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -10;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('element_fire.png');\n  opacity: 0.3;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\ntr.eau[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%] {\n  background-color: rgba(21, 0, 255, 0.05);\n}\ntr.eau[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td).type_element[_ngcontent-%COMP%] {\n  color: blue;\n}\ntr.eau[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td).type_element[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -10;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('element_water.png');\n  opacity: 0.3;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\ntr.terre[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%] {\n  background-color: rgba(166, 255, 0, 0.05);\n}\ntr.terre[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td).type_element[_ngcontent-%COMP%] {\n  color: brown;\n}\ntr.terre[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td).type_element[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -10;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('element_earth.png');\n  opacity: 0.3;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\ntr.air[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%] {\n  background-color: rgba(0, 229, 255, 0.05);\n}\ntr.air[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td).type_element[_ngcontent-%COMP%] {\n  color: cyan;\n}\ntr.air[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:not(.id, .btn_td).type_element[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -10;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('element_air.png');\n  opacity: 0.3;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\ntr.dieu[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%]   td.id[_ngcontent-%COMP%] {\n  background: url('shield3.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\ntr.dieu[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%]   td.dieu[_ngcontent-%COMP%] {\n  position: relative;\n  color: goldenrod;\n  text-shadow: 0 0 7px #000000, 0 0 10px #000000, 0 0 21px #000000;\n  text-transform: capitalize;\n}\ntr.dieu[_ngcontent-%COMP%]:not(.id, .btn_td)[_ngcontent-%COMP%]   td.dieu[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('god_bg.png');\n  opacity: 0.3;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  animation: _ngcontent-%COMP%_godGlow 0.3s alternate infinite;\n}\n\n@keyframes _ngcontent-%COMP%_godGlow {\n  from {\n    opacity: 0.1;\n  }\n  to {\n    opacity: 0.3;\n  }\n}\ntd.mythologie[_ngcontent-%COMP%] {\n  text-shadow: 0 0 10px white;\n  text-transform: capitalize;\n}\n\ntr.grec[_ngcontent-%COMP%]   .mythologie[_ngcontent-%COMP%] {\n  position: relative;\n}\ntr.grec[_ngcontent-%COMP%]   .mythologie[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('symbol_greek.png');\n  opacity: 0.2;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\ntr.chinoise[_ngcontent-%COMP%]   .mythologie[_ngcontent-%COMP%] {\n  position: relative;\n}\ntr.chinoise[_ngcontent-%COMP%]   .mythologie[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('symbol_chinese.png');\n  opacity: 0.2;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\ntr.egyptienne[_ngcontent-%COMP%]   .mythologie[_ngcontent-%COMP%] {\n  position: relative;\n}\ntr.egyptienne[_ngcontent-%COMP%]   .mythologie[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('symbol_egyptian.png');\n  opacity: 0.2;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\ntr.nordique[_ngcontent-%COMP%]   .mythologie[_ngcontent-%COMP%] {\n  position: relative;\n}\ntr.nordique[_ngcontent-%COMP%]   .mythologie[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('symbol_nordic.png');\n  opacity: 0.2;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n.exitAnimation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_exitAnimation 1s ease-in-out;\n  animation-fill-mode: forwards;\n}\n\n@keyframes _ngcontent-%COMP%_exitAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n.text_intro[_ngcontent-%COMP%] {\n  color: rgb(71, 0, 0) !important;\n  width: 60%;\n}/*# sourceMappingURL=creature.component.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3JlYXR1cmUvY3JlYXR1cmUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3JlYXR1cmUvY3JlYXR1cmUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvX21peGlucy5zY3NzIiwid2VicGFjazovLy4vc3JjL192YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHaEI7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0Esb0RBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtBRERGOztBQ0lBO0VBQ0U7SUFDRSxVQUFBO0VEREY7RUNJQTtJQUNFLFVBQUE7RURGRjtBQUNGO0FDTUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBRUEsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQU9BLG1DQUFBO0FEWEY7QUNNRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QURKSjtBQ1NFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUNqREEsd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VEa0RBLG9CQURVO0VBRVYscUNBQUE7RUFDQSx3QkFBQTtFQUVBLCtDQUFBO0VBQ0EsOEJBQUE7RUFFQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0Esc0JBVFU7VUFTVixjQVRVO0VBVVYsZ0JBQUE7RUFDQSw2QkFBQTtVQUFBLHFCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtBRFJKOztBQ1lBO0VBQ0U7SUFDRSx1QkFBQTtFRFRGO0VDWUE7SUFDRSx5QkFBQTtFRFZGO0FBQ0Y7QUNjQTtFQUNFO0lBQ0Us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 */"]
  });
}

/***/ }),

/***/ 4176:
/*!**********************************************!*\
  !*** ./src/app/creature/creature.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatureService: () => (/* binding */ CreatureService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 4860);


class CreatureService {
  constructor(http) {
    this.http = http;
  }
  findAll() {
    return this.http.get("http://localhost:8080/api/creature");
  }
  findById(id) {
    return this.http.get("http://localhost:8080/api/creature/" + id);
  }
  create(creature) {
    return this.http.post("http://localhost:8080/api/creature", creature);
  }
  update(creature) {
    return this.http.put("http://localhost:8080/api/creature/" + creature.id, creature);
  }
  delete(id) {
    return this.http.delete("http://localhost:8080/api/creature/" + id);
  }
  static #_ = this.ɵfac = function CreatureService_Factory(t) {
    return new (t || CreatureService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: CreatureService,
    factory: CreatureService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 2052:
/*!****************************************!*\
  !*** ./src/app/delay-page.resolver.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   delayPageResolver: () => (/* binding */ delayPageResolver)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9378);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 2607);


// resolver to delay page load to allow animations
const delayPageResolver = (route, state) => {
  // Set the delay time in milliseconds (e.g., 2000 for 2 seconds)
  let delayTime = 500; // default
  // overwrite default delay
  if (route.data['delay']) {
    // if delay value was passed to the route
    delayTime = route.data['delay']; // overwrite
  }
  // Using RxJS timer to create an observable that emits after the specified delay
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(delayTime).pipe(
  // Using mergeMap to switch to a new observable after the delay
  (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => {
    // Returning a resolved value after the delay
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
  }));
};

/***/ }),

/***/ 4494:
/*!**********************************************!*\
  !*** ./src/app/desktop/desktop.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DesktopComponent: () => (/* binding */ DesktopComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _grimoire_grimoire_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../grimoire/grimoire.component */ 7282);



const _c0 = function () {
  return ["/accueil"];
};
class DesktopComponent {
  static #_ = this.ɵfac = function DesktopComponent_Factory(t) {
    return new (t || DesktopComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: DesktopComponent,
    selectors: [["app-desktop"]],
    decls: 34,
    vars: 2,
    consts: [["lang", "en"], ["charset", "utf-8"], ["href", "/"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "icon", "type", "image/x-icon", "href", "favicon.ico"], ["id", "map", 1, "desktop_prop"], ["src", "../../assets/flipbook-textures/map.png"], ["id", "zodiac", 1, "desktop_prop"], ["src", "../../assets/flipbook-textures/old-paper-texture_alt.png"], ["id", "book_greek", 1, "desktop_prop"], ["src", "../../assets/flipbook-textures/oldbook.png"], ["id", "book_japanese", 1, "desktop_prop"], ["src", "../../assets/flipbook-textures/japanese-paper.png"], ["id", "padlock"], ["id", "login"], ["id", "connect"], ["id", "key"], ["id", "firelight_effect"], ["id", "firewall"], ["src", ""], ["id", "retour_grimoire"], ["routerLinkActive", "active", 3, "routerLink"], ["type", "button", 1, "button"], ["id", "page_marker"]],
    template: function DesktopComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html", 0)(1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "FlipbookAngular");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "base", 2)(6, "meta", 3)(7, "link", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "app-grimoire");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14)(20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Connexion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "img", 19)(26, "img", 19)(27, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div")(29, "div", 20)(30, "a", 21)(31, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Retour");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _grimoire_grimoire_component__WEBPACK_IMPORTED_MODULE_0__.GrimoireComponent],
    styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --text-color: rgb(71, 0, 0);\n  --paper-color-l: rgb(255, 251, 212);\n  --paper-color-d: rgb(100, 79, 30);\n  --paper-texture: url('natural-paper.png');\n  \n\n  \n\n  \n\n  --color-overlay-l: #ffd58d;\n  --color-overlay-d: #00021e;\n  --blur-overlay-l: 60%;\n  --fire_light_effect-radial: radial-gradient(var(--color-overlay-l) var(--blur-overlay-l), var(--color-overlay-d) 75%);\n  --fire_light_effect-linear: linear-gradient(var(--color-overlay-l) var(--blur-overlay-l) 90%, var(--color-overlay-d) 100%);\n  --fire_light_effect-uniform: var(--color-overlay-l);\n  --fire_light_effect-pages: radial-gradient(var(--color-overlay-l) var(--blur-overlay-l), rgba(0,0,0,0) 75%);\n}\n\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  height: 100vh;\n  overflow: hidden;\n}\n\nbody[_ngcontent-%COMP%] {\n  background: url('wood-texture.jpeg'), radial-gradient(#e6b664, #000325);\n  background-blend-mode: multiply;\n  background-size: cover;\n  cursor: url('middle-ages-cursor-32x32.png'), pointer;\n}\n\n#firelight_effect[_ngcontent-%COMP%] {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 1;\n  z-index: 10;\n  pointer-events: none;\n  background: var(--fire_light_effect-radial);\n}\n\n@keyframes _ngcontent-%COMP%_firelight_effect {\n  0% {\n    background-color: rgba(255, 0, 0, 0);\n  }\n  10% {\n    background-color: rgba(255, 0, 0, 0.001);\n  }\n  20% {\n    background-color: rgba(205, 133, 0, 0.01);\n  }\n  40% {\n    background-color: rgba(174, 153, 36, 0.05);\n  }\n  60% {\n    background-color: rgba(80, 62, 51, 0.005);\n  }\n  80% {\n    background-color: rgba(189, 0, 60, 0.05);\n  }\n  100% {\n    background-color: rgba(15, 6, 0, 0.01);\n  }\n}\nbody[_ngcontent-%COMP%]   #firewall[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n  display: flex;\n  visibility: hidden;\n  width: 100vw;\n  justify-content: center;\n  top: 50vh;\n}\nbody[_ngcontent-%COMP%]   #firewall[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0.1;\n  z-index: 2000;\n  background: url('fire.gif');\n  animation: _ngcontent-%COMP%_fire_effect 2s infinite;\n  display: none;\n}\nbody[_ngcontent-%COMP%]   #firewall[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  right: 0;\n  bottom: -1%;\n  left: 0;\n  width: 100%;\n  height: 70%;\n  opacity: 0.3;\n  z-index: 20;\n  background: url('fire.gif');\n  animation: _ngcontent-%COMP%_fire_effect 1s infinite;\n}\n\n@keyframes _ngcontent-%COMP%_fireAppear {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_fire_effect {\n  0% {\n    filter: blur(3px) brightness(3);\n    transform: scaleY(1);\n  }\n  50% {\n    transform: scaleY(1.1);\n    filter: blur(1px) brightness(2);\n  }\n  100% {\n    filter: blur(5px) brightness(1.5);\n    transform: scaleY(1);\n  }\n}\n#map[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.501);\n  top: -250px;\n  right: 700px;\n  height: 60%;\n  transform: rotate(30deg);\n  z-index: 0;\n  filter: brightness(0.7);\n}\n\n#zodiac[_ngcontent-%COMP%] {\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 199px;\n  background-image: url('old-paper-texture_alt.png');\n  display: flex;\n  background-color: rgba(0, 0, 0, 0.168);\n  position: absolute;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.501);\n  bottom: -150px;\n  right: 500px;\n  height: 60%;\n  transform: rotate(50deg);\n  z-index: 0;\n  justify-content: center;\n  filter: brightness(0.7);\n}\n#zodiac[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  display: flex;\n  height: 70%;\n  width: 70%;\n  margin-top: 40px;\n  align-content: center;\n  background-image: url('astrology_print.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  opacity: 0.2;\n}\n\n#book_greek[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.501);\n  top: 50px;\n  left: -150px;\n  height: 70%;\n  transform: rotate(50deg);\n  filter: brightness(0.8);\n  z-index: 0;\n}\n\n#book_japanese[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: rgba(0, 0, 0, 0.501);\n  position: absolute;\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.501);\n  top: -50px;\n  right: -400px;\n  height: 60%;\n  transform: rotate(-30deg);\n  z-index: 0;\n  filter: brightness(0.6);\n}\n\n#padlock[_ngcontent-%COMP%] {\n  display: none;\n  height: 150px;\n  width: 70px;\n  top: 45%;\n  right: 240px;\n  position: absolute;\n  background-image: url('lock.png'), radial-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0) 50%);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-blend-mode: lighten;\n  z-index: 3;\n}\n\n#login[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  filter: brightness(0.8);\n  left: 400px;\n  top: 200px;\n  text-align: center;\n  background-image: url('old-paper-texture_alt.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  transform: rotate(-20deg);\n  font-family: \"Lugrasimo\";\n}\n#login[_ngcontent-%COMP%]   #connect[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0.8;\n  top: 50px;\n}\n#login[_ngcontent-%COMP%]   #key[_ngcontent-%COMP%] {\n  height: 250px;\n  position: relative;\n  width: 100px;\n  background: url('key.png'), radial-gradient(rgba(0, 0, 0, 0.5098039216), rgba(0, 0, 0, 0) 50%);\n  border-radius: 50%;\n  transform: rotate(50deg);\n  background-blend-mode: lighten;\n  background-size: contain;\n  background-repeat: no-repeat;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n  transition: 1s;\n  z-index: 1000;\n}\n#login[_ngcontent-%COMP%]   #key[_ngcontent-%COMP%]:hover {\n  transform: scale(1.3) rotate(70deg);\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    filter: brightness(1);\n  }\n  50% {\n    filter: brightness(2);\n  }\n  100% {\n    filter: brightness(1);\n  }\n}\n.desktop_prop[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_booksAppear 1s ease-in;\n  opacity: 0;\n  animation-fill-mode: forwards;\n  -webkit-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n\n.desktop_prop[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: calc(1 * 0.2s);\n}\n\n.desktop_prop[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: calc(2 * 0.2s);\n}\n\n.desktop_prop[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: calc(3 * 0.2s);\n}\n\n.desktop_prop[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: calc(4 * 0.2s);\n}\n\n.desktop_prop[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: calc(5 * 0.2s);\n}\n\n@keyframes _ngcontent-%COMP%_booksAppear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n#retour_grimoire[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  left: 40px;\n  bottom: 1vh;\n  font-family: \"Lugrasimo\";\n}\n#retour_grimoire[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  z-index: 1000;\n  position: absolute;\n  opacity: 1;\n  color: rgba(98, 4, 4, 0.709);\n  top: 50px;\n  padding: 50px;\n  background: none;\n  border: none;\n  background-image: url('old-paper-texture_alt.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n#retour_grimoire[_ngcontent-%COMP%]   #page_marker[_ngcontent-%COMP%] {\n  height: 250px;\n  position: relative;\n  top: 80px;\n  width: 100px;\n  background: url('dagger.png'), radial-gradient(rgba(0, 0, 0, 0.5098039216), rgba(0, 0, 0, 0) 50%);\n  border-radius: 50%;\n  background-blend-mode: lighten;\n  background-size: contain;\n  background-repeat: no-repeat;\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n  transition: 1s;\n  z-index: 1000;\n  pointer-events: none;\n}\n#retour_grimoire[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  color: rgba(189, 4, 4, 0.657);\n}\n#retour_grimoire[_ngcontent-%COMP%]:hover   #page_marker[_ngcontent-%COMP%] {\n  transform: scale(1.3) rotate(80deg);\n  top: 40px;\n}/*# sourceMappingURL=desktop.component.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZGVza3RvcC9kZXNrdG9wLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL2FwcC9kZXNrdG9wL2Rlc2t0b3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4RUFBQTtBQUVBO0VBQ0MsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EseUNBQUE7RUFDQSxtREFBQTtFQUNBLDBEQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxxSEFBQTtFQUNBLDBIQUFBO0VBQ0EsbURBQUE7RUFDQSwyR0FBQTtBQ0FEOztBREdBO0VBQ0MsYUFBQTtFQUNBLGdCQUFBO0FDQUQ7O0FER0E7RUFDQyx1RUFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvREFBQTtBQ0FEOztBREdBO0VBQ0MsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsMkNBQUE7QUNBRDs7QURJQTtFQUNDO0lBQ0Msb0NBQUE7RUNEQTtFREdEO0lBQ0Msd0NBQUE7RUNEQTtFREdEO0lBQ0MseUNBQUE7RUNEQTtFREdEO0lBQ0MsMENBQUE7RUNEQTtFREdEO0lBQ0MseUNBQUE7RUNEQTtFREdEO0lBQ0Msd0NBQUE7RUNEQTtFREdEO0lBQ0Msc0NBQUE7RUNEQTtBQUNGO0FES0E7RUFDQyxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQ0hEO0FES0M7RUFDQyxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0FDSEY7QURLQztFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtF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 */"]
  });
}

/***/ }),

/***/ 5552:
/*!******************************!*\
  !*** ./src/app/dieu.pipe.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DieuPipe: () => (/* binding */ DieuPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class DieuPipe {
  transform(value) {
    if (value) {
      return "dieu";
    }
    return "creature";
  }
  static #_ = this.ɵfac = function DieuPipe_Factory(t) {
    return new (t || DieuPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "dieu",
    type: DieuPipe,
    pure: true
  });
}

/***/ }),

/***/ 2995:
/*!*********************************!*\
  !*** ./src/app/gagnant.pipe.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GagnantPipe: () => (/* binding */ GagnantPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class GagnantPipe {
  transform(value) {
    if (value) {
      return "Victoire";
    }
    return "Défaite";
  }
  static #_ = this.ɵfac = function GagnantPipe_Factory(t) {
    return new (t || GagnantPipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "gagnant",
    type: GagnantPipe,
    pure: true
  });
}

/***/ }),

/***/ 7282:
/*!************************************************!*\
  !*** ./src/app/grimoire/grimoire.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GrimoireComponent: () => (/* binding */ GrimoireComponent)
/* harmony export */ });
/* harmony import */ var _labsforge_flipbook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @labsforge/flipbook */ 518);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _creature_creature_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../creature/creature.service */ 4176);
/* harmony import */ var _creature_page_a_creature_page_a_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../creature-page-a/creature-page-a.component */ 8635);





class GrimoireComponent {
  constructor(creatureService) {
    this.creatureService = creatureService;
    this.book = {
      width: 900 * 1.2,
      height: 600 * 1.2,
      zoom: 0.9,
      cover: {
        front: {
          // FRONT COVER
          imageUrl: 'assets/flipbook-textures/grimoire-cover2.jpeg',
          opacity: 1
        },
        back: {
          // BACK COVER
          imageUrl: 'assets/flipbook-textures/grimoire-cover2.jpeg'
        }
      },
      pages: [{
        // BACKSIDE OF FRONT COVER
        imageUrl: 'assets/flipbook-textures/leather-texture.jpeg',
        backgroundColor: '#41473A' // don't use if want to see front-cover inverted image
      },
      //////////////////////////////
      // TRANSPARENT-SHEET SECTION: ADDED AT THE BEGINNING
      {
        imageUrl: '../../assets/flipbook-textures/natural-paper.png',
        opacity: 1
      }, {
        imageUrl: '../../assets/flipbook-textures/natural-paper.png',
        opacity: 1
        // end transparent-sheet section
      },
      ////////////////////////////////////////////////////////////
      // START OF CONTENTS
      ///////////////////////////////////////////////////////////
      ///// COVER PAGE ==========================
      {
        imageUrl: '../../assets/flipbook-textures/old-paper-texture1.png'
      }, {
        imageUrl: '../../assets/flipbook-textures/old-paper-texture1.png'
      },
      ///// CREATURE PAGES ==========================
      //////////
      {
        imageUrl: '../../assets/flipbook-textures/old-paper-texture2.png'
      }, {
        imageUrl: '../../assets/flipbook-textures/old-paper-texture2.png',
        backgroundColor: "rgba(0,0,0,0)" // /!\ NE CHANGER SAUF SI STRICTMENT NECESSAIRE
      }, {
        imageUrl: '../../assets/flipbook-textures/old-paper-texture2.png',
        backgroundColor: "rgba(0,0,0,0)" // /!\ NE CHANGER SAUF SI STRICTMENT NECESSAIRE
      }, {
        imageUrl: '../../assets/flipbook-textures/old-paper-texture2.png'
      },
      ///// FILLER PAGES ==========================
      {
        imageUrl: '../../assets/flipbook-textures/old-paper-texture1.png'
      }, {
        imageUrl: '../../assets/flipbook-textures/old-paper-texture1.png'
      },
      /////
      {
        imageUrl: '../../assets/flipbook-textures/old-paper-texture2.png'
      }, {
        imageUrl: '../../assets/flipbook-textures/old-paper-texture2.png'
      },
      /////
      {
        imageUrl: '../../assets/flipbook-textures/old-paper-texture3.png'
      }, {
        imageUrl: '../../assets/flipbook-textures/old-paper-texture3.png'
      }, {
        imageUrl: '../../assets/flipbook-textures/old-paper-texture1.png'
      }, {
        imageUrl: '../../assets/flipbook-textures/old-paper-texture1.png'
      },
      /////
      {
        imageUrl: '../../assets/flipbook-textures/old-paper-texture2.png'
      }, {
        imageUrl: '../../assets/flipbook-textures/old-paper-texture2.png'
      },
      /////
      ////////////////////////////////////////////////////////////
      // END OF CONTENTS
      ///////////////////////////////////////////////////////////
      // TRANSPARENT-SHEET SECTION: ADDED AT THE END
      {
        imageUrl: '../../assets/flipbook-textures/natural-paper.png',
        opacity: 1
      }, {
        imageUrl: '../../assets/flipbook-textures/natural-paper.png',
        opacity: 1
        // end transparent-sheet section
      }, {
        // BACKSIDE OF BACK COVER
        imageUrl: 'assets/flipbook-textures/leather-texture.jpeg',
        backgroundColor: '#41473A' // don't use if want to see back-cover inverted image
      }],

      pageWidth: 585,
      pageHeight: 780,
      startPageType: _labsforge_flipbook__WEBPACK_IMPORTED_MODULE_2__.PageType.Double,
      endPageType: _labsforge_flipbook__WEBPACK_IMPORTED_MODULE_2__.PageType.Double
    };
    this.creatureService.findAll().subscribe(resp => {
      this.creatures = resp;
    });
  }
  static #_ = this.ɵfac = function GrimoireComponent_Factory(t) {
    return new (t || GrimoireComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_creature_creature_service__WEBPACK_IMPORTED_MODULE_0__.CreatureService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: GrimoireComponent,
    selectors: [["app-grimoire"]],
    decls: 5,
    vars: 2,
    consts: [[1, "flipbook_container"], [1, "creature_pages"], [1, "creature_page_a"], [3, "model", "startAt"]],
    template: function GrimoireComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "app-creature-page-a");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "flipbook", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("model", ctx.book)("startAt", 1);
      }
    },
    dependencies: [_labsforge_flipbook__WEBPACK_IMPORTED_MODULE_2__.BookComponent, _creature_page_a_creature_page_a_component__WEBPACK_IMPORTED_MODULE_1__.CreaturePageAComponent],
    styles: ["@font-face {\n  font-family: \"Stempel-Garamond-W01-Roman\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('Stempel-Garamond-W01-Roman.woff');\n}\n@font-face {\n  font-family: \"Lugrasimo\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('Lugrasimo-Regular.ttf');\n}\n@font-face {\n  font-family: \"bronzion\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('BronzionDeco_PERSONAL_USE_ONLY.otf');\n}\n@font-face {\n  font-family: \"eb_garamond\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('EBGaramond-Italic-VariableFont_wght.ttf');\n}\n@font-face {\n  font-family: \"grandiflora\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('GrandifloraOne-Regular.ttf');\n}\n@font-face {\n  font-family: \"notoserif_jp\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('NotoSerifJP-Regular.otf');\n}\n@font-face {\n  font-family: \"notoserif_tc\";\n  font-style: normal;\n  font-weight: normal;\n  src: url('NotoSerifTC-Regular.otf');\n}\n[_ngcontent-%COMP%]:root {\n  --glowColor1: #f2e4ff;\n  --glowColor2: #000000;\n}\n\n.flipbook_container[_ngcontent-%COMP%] {\n  height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 2;\n}\n\nflipbook[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]:first-of-type:before {\n  content: \"Mythik\";\n  font-family: bronzion;\n  display: flex;\n  font-size: xx-large;\n  transform: scale(2) translate(0%, -5%);\n  color: rgb(11, 0, 0);\n  text-shadow: rgba(20, 0, 27, 0.4862745098) 1px 1px 4px;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  z-index: 0;\n  width: 100%;\n  height: 100%;\n  background: var(--fire_light_effect-uniform) !important;\n}\nflipbook[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]:first-of-type:after {\n  content: \"Grimoire\";\n  opacity: 0.7;\n  font-family: bronzion;\n  display: flex;\n  font-size: xx-large;\n  transform: scale(1) translate(0%, 60px);\n  color: rgb(213, 210, 227);\n  text-shadow: rgba(20, 0, 27, 0.4862745098) 1px 1px 4px;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  z-index: -1;\n  width: 100%;\n  height: 100%;\n}\n\nflipbook[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]:first-of-type, flipbook[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]:last-of-type {\n  transition: 0.1s;\n}\nflipbook[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]:first-of-type:hover, flipbook[_ngcontent-%COMP%]   .cover[_ngcontent-%COMP%]:last-of-type:hover {\n  filter: saturate(2);\n}\n\n.sj-book[_ngcontent-%COMP%]   .capital[_ngcontent-%COMP%]:first-letter {\n  display: block;\n  float: left;\n  font-size: 300%;\n  line-height: 70%;\n  margin-right: 6px;\n  margin-top: 7px;\n  margin-left: 18px;\n}\n\nflipbook[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: url('ring.png');\n  filter: brightness(0.75);\n  background-size: contain;\n  height: 70%;\n  width: 2%;\n}\n\nflipbook-page[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]:not(.cover) {\n  background-size: 10%;\n  transform: scaleX(-1);\n  background-size: cover !important;\n  background-position-x: left;\n  opacity: 1;\n}\nflipbook-page[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]:not(.cover):after {\n  display: flex;\n  content: \"\";\n  background: linear-gradient(0.25turn, rgba(255, 255, 255, 0) 95%, rgba(45, 25, 0, 0.26) 99.9%, rgba(45, 25, 0, 0.916) 100%);\n  height: 100%;\n  width: 100%;\n}\nflipbook-page[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%]:not(.cover):before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0px !important;\n  background: var(--fire_light_effect-pages) !important;\n  opacity: 0.2;\n  filter: blur() 10px;\n}\n\nflipbook-page[_ngcontent-%COMP%]   .page[_ngcontent-%COMP%] {\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.05);\n  overflow: hidden;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n}\n\n.stain[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  height: 100%;\n  background-repeat: no-repeat;\n  background-size: contain;\n}\n\n.page_content[_ngcontent-%COMP%] {\n  color: green;\n  display: block;\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: red !important;\n}\n\n.flipbook_container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 80vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 50px 0px;\n  animation: _ngcontent-%COMP%_flipbookAppear 2s ease-in-out;\n  opacity: 0;\n  animation-delay: 2s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes _ngcontent-%COMP%_flipbookAppear {\n  0% {\n    opacity: 0;\n    filter: brightness(5) blur(0px) drop-shadow(0 0 0px rgb(255, 0, 0));\n  }\n  25% {\n    opacity: 0.9;\n    filter: brightness(10) blur(20px) drop-shadow(0 0 20px rgb(0, 195, 255));\n  }\n  50% {\n    opacity: 1;\n    filter: brightness(10) blur(10px) drop-shadow(0 0 15px rgb(255, 255, 0));\n  }\n  100% {\n    opacity: 1;\n    filter: brightness(1) blur(0px) drop-shadow(0 0 0px rgba(0, 0, 0, 0.1));\n  }\n}\n.mocktext[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  margin: 50px 50px;\n  height: 80%;\n  width: 75%;\n  font-family: \"Lugrasimo\", \"eb_garamond\", \"notoserif_tc\", \"notoserif_jp\", \"grandiflora\";\n  color: rgba(78, 2, 2, 0.75);\n  overflow: hidden;\n  opacity: 0.9;\n}\n.mocktext.side0[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n}\n\n.creature_pages[_ngcontent-%COMP%] {\n  pointer-events: none;\n  height: 105%;\n  width: 960px;\n  display: flex;\n  display: none;\n  flex-direction: row;\n  justify-content: space-around;\n  gap: 5px;\n  align-items: center;\n  z-index: 10;\n  position: absolute;\n}\n.creature_pages[_ngcontent-%COMP%]   .creature_page_a[_ngcontent-%COMP%] {\n  position: relative;\n  width: 95%;\n  height: 100%;\n}\n.creature_pages[_ngcontent-%COMP%]   .creature_page_b[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: rgba(60, 255, 0, 0.1);\n  width: 45%;\n  height: 90%;\n}\n\n#firstPage[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 7.5%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: scaleX(-1);\n  padding-top: 100px;\n  flex-direction: column;\n  color: rgba(41, 0, 0, 0.689);\n  font-family: \"Lugrasimo\";\n  height: 100%;\n  width: 90%;\n  background-image: url('page_decoration1.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  overflow: hidden;\n}\n#firstPage[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: rgba(194, 0, 0, 0.689);\n  font-family: \"bronzion\";\n  font-size: 100;\n}\n#firstPage[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: x-large;\n  padding-bottom: 50px;\n}\n#firstPage[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 50%;\n  text-align: center;\n  padding-bottom: 100px;\n}\n#firstPage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20%;\n  opacity: 0.3;\n}\n\n#lastPage[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 7.5%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 0px;\n  flex-direction: column;\n  color: rgba(41, 0, 0, 0.689);\n  font-family: \"Lugrasimo\";\n  height: 100%;\n  width: 90%;\n  background-image: url('page_decoration2.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n#lastPage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  opacity: 0.9;\n  filter: sepia(1);\n  animation: _ngcontent-%COMP%_waggle 0.1s infinite ease-in-out alternate;\n}\n\n@keyframes _ngcontent-%COMP%_waggle {\n  from {\n    transform: rotate(20px);\n  }\n  to {\n    transform: rotate(-2deg);\n  }\n}\n#creaturesStart[_ngcontent-%COMP%] {\n  transform: scaleX(-1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(41, 0, 0, 0.689);\n  font-family: \"Stempel-Garamond-W01-Roman\", \"bronzion\";\n  color: rgba(6, 106, 38, 0.51);\n  font-size: 40px;\n  height: 100%;\n  width: 100%;\n  background: radial-gradient(#e66465, #9198e5, rgba(145, 152, 229, 0), rgba(145, 152, 229, 0));\n  animation: _ngcontent-%COMP%_glowBg 5s infinite alternate;\n}\n#creaturesStart[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-image: url('celtic_frame.png');\n  position: absolute;\n  top: 50%;\n  right: 50%;\n  height: 80%;\n  width: 80%;\n  transform: translate(50%, -50%);\n  opacity: 0.1;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n#creaturesStart[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  width: 100%;\n  height: 50%;\n  animation: _ngcontent-%COMP%_glowText 0.4s ease-in-out infinite alternate;\n}\n#creaturesStart[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-image: url('celtic_knot.png');\n  position: absolute;\n  top: 50%;\n  right: 50%;\n  height: 300px;\n  width: 300px;\n  transform: translate(50%, -50%);\n  opacity: 0.1;\n  background-size: contain;\n  background-repeat: no-repeat;\n  animation: _ngcontent-%COMP%_glowDecoration 5s infinite linear;\n}\n\n@keyframes _ngcontent-%COMP%_glowText {\n  from {\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px var(--glowColor1), 0 0 40px var(--glowColor1), 0 0 50px var(--glowColor1), 0 0 60px var(--glowColor1), 0 0 70px var(--glowColor1);\n    transform: translateX(0.5px);\n  }\n  to {\n    text-shadow: 0 0 20px #fff, 0 0 30px var(--glowColor2), 0 0 40px var(--glowColor2), 0 0 50px var(--glowColor2), 0 0 60px var(--glowColor2), 0 0 70px var(--glowColor2), 0 0 80px var(--glowColor2);\n    transform: skew(90deg 90deg);\n    transform: translateX(-0.5px);\n  }\n}\n@keyframes _ngcontent-%COMP%_glowDecoration {\n  0% {\n    opacity: 0.2;\n    transform: translate(50%, -50%) rotate(0deg) scale(0.9, 0.7);\n    filter: hue-rotate(50deg) blur(3px);\n    background: radial-gradient(#e66465, #03030d, rgba(145, 152, 229, 0), rgba(145, 152, 229, 0));\n  }\n  50% {\n    opacity: 1;\n    transform: translate(50%, -50%) rotate(180deg) scale(1.1, 0.9);\n    filter: hue-rotate(180deg) blur(0px);\n    background: radial-gradient(#2a0404, #ffffff, rgba(145, 152, 229, 0), rgba(145, 152, 229, 0));\n  }\n  100% {\n    opacity: 0.2;\n    transform: translate(50%, -50%) rotate(360deg) scale(0.9, 0.7);\n    filter: hue-rotate(50deg) blur(3px);\n    background: radial-gradient(#e66465, #9198e5, rgba(145, 152, 229, 0), rgba(145, 152, 229, 0));\n  }\n}\n@keyframes _ngcontent-%COMP%_glowBg {\n  0% {\n    filter: blur(0px) hue-rotate(90deg) brightness(2);\n  }\n  50% {\n    filter: blur(1px) hue-rotate(180deg);\n  }\n  100% {\n    filter: blur(0px) hue-rotate(-90deg) brightness(0.1);\n  }\n}\n.magic_effect[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.magic_effect[_ngcontent-%COMP%]::after {\n  content: \"\";\n  background-image: url('celtic_knot.png');\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  opacity: 0.1;\n  background-size: 300px 300px;\n  background-repeat: no-repeat;\n  background-position: center;\n  animation: _ngcontent-%COMP%_rotateRing 10s infinite linear;\n  transform-origin: center;\n}\n\n@keyframes _ngcontent-%COMP%_rotateRing {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.fadeRing[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeRing 1s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes _ngcontent-%COMP%_fadeRing {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}/*# sourceMappingURL=grimoire.component.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZ3JpbW9pcmUvZ3JpbW9pcmUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL2dyaW1vaXJlL2dyaW1vaXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQ0NKO0FERUE7RUFDQyx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtBQ0FEO0FER0E7RUFDQyx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQ0REO0FESUE7RUFDQywwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtBQ0ZEO0FES0E7RUFDQywwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQ0FBQTtBQ0hEO0FETUE7RUFDQywyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtBQ0pEO0FET0E7RUFDQywyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQ0FBQTtBQ0xEO0FEUUE7RUFDQyxxQkFBQTtFQUNBLHFCQUFBO0FDTkQ7O0FEU0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDSCxVQUFBO0FDTkQ7O0FEWUM7RUFDRyxpQkFBQTtFQUNILHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQkFBQTtFQUNBLHNEQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdURBQUE7QUNURDtBRFdDO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0RBQUE7RUFDQSxtQkFBQTtFQUNBLHVC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 */"]
  });
}
//// ADDITIONAL CODE TO MANIPULATE DOM
setTimeout(() => {
  // ALL PAGES EXCEPT COVERS
  let pages = document.querySelectorAll("flipbook-page .page:not(.cover)");
  let sheets = document.querySelectorAll("flipbook-page");
  for (let i = 1; i < pages.length - 1; i = i + 2) {
    // console.log(i);
    let randomizer = 20;
    let random_adjustment = randomizer - Math.floor(Math.random() * randomizer * 2);
    for (let p = 0; p <= 1; p++) {
      pages[i + p].style.transform = "scale(-1, 0.98)";
      // pages[i+p].innerHTML = "<div style='background:red'> PAGE NUMBER: \n\n\t " + i + "<div/>";
      pages[i + p].style.backgroundPositionY = random_adjustment + "px";
      // console.log( pages[i+p].style.getPropertyValue("background-position-y"));
      // ADD STAINS
      pages[i + p].innerHTML = "<div class='stain'></div>";
      let stain = pages[i + p].querySelector(".stain");
      stain.style.opacity = `${Math.random()}`;
      stain.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg)`;
      stain.style.width = `${Math.floor(Math.random() * 25)}%`;
      stain.style.background = `url(../../assets/flipbook-textures/stain${Math.floor(Math.random() * 5)}.png)`;
      // console.log(stain.style.background);
      // ADD MOCK CONTENTS
      if (i > 2 && i < pages.length - 3) {
        // let nouveauContenu = "<div><p>{{creatures[i]}}</p><img [src]='creatures[i].image'/></div>";
        // pages[i].innerHTML = nouveauContenu;
        // let iframe = document.createElement("iframe");
        // iframe.src = "creature-page-a/creature-page-a.component.html";
        // iframe.style.width = "100%";
        // iframe.style.height = "100%";
        // //pages[i].innerHTML = ""; // Efface le contenu existant
        // pages[i].appendChild(iframe);
        // skip transparent sheets (first and last pages)
        let rnd = Math.floor(Math.random() * lorem_array.length); // generate random number
        let lorem = lorem_array[rnd]; // random text
        lorem_array.splice(rnd, 1); // remove from array
        pages[i + p].innerHTML = "<div class='mocktext " + "side" + p + "'>" + lorem + "</div>";
      }
    }
  }
  // ADD CLASS TO SPECIFIC PAGES TO SIMPLIFY CSS SELECTION
  const bookStart = sheets.length - 3; // actually corresponds to last page in DOM, excluding covers/transparent sheet
  var candlelightIntervalId;
  // COVER PAGE
  const cover = sheets[sheets.length - 1];
  cover.classList.add("bookCover");
  const backcover = sheets[0];
  backcover.classList.add("bookCoverBack");
  // trigger event on cover/backcover rotation
  // CHECK WHETHER BOOK IS OPEN; IF SO, TURN ON LIGHT
  function ouvrirLivre(event) {
    console.log("CHECK BOOK STATE");
    let coverRotation = cover.getAttribute("ng-reflect-rotation");
    let backcoverRotation = backcover.getAttribute("ng-reflect-rotation");
    if (parseInt(coverRotation) < -90 && parseInt(backcoverRotation) > -90) {
      document.querySelector("#firewall").style.visibility = "visible";
      document.querySelector("#firewall").style.animation = "fireAppear 3s ease-in";
      document.querySelector("#firelight_effect").style.animation = "firelight_effect 0.1s alternate infinite";
      // candlelightIntervalId = setInterval(candlelight, Math.floor(Math.random() * 300));
      lightsOn();
    } else {
      // revert back to closed book illumination
      document.querySelector("#firewall").style.visibility = "hidden";
      document.querySelector("#firewall").style.animation = "none";
      document.querySelector("#firelight_effect").style.animation = "none";
      // clearInterval(candlelightIntervalId); // /!\ NOT WORKING FOR UNKOWN REASON
      lightsOut();
    }
    ;
  }
  setInterval(ouvrirLivre, 1000);
  // FIRST PAGE
  //front
  const firstPage = sheets[bookStart];
  const firstPageFront = firstPage.querySelector(".page");
  firstPageFront.classList.add("first-page");
  firstPageFront.innerHTML = "<div id=firstPage>" + "<h1>Mythik</h1>" + "<h2>Grimoire</h2>" + "<p>Project final SOPRA2023 Groupe 1</p>" + "<img src='assets/loader.png'/>" + "</div>";
  //back
  const firstPageBack = firstPage.querySelector(".back");
  firstPageBack.innerHTML = "";
  // LAST PAGE
  //front
  const lastPage = sheets[2]; // excludes back cover and transparent sheet
  const lastPageFront = lastPage.querySelector(".page");
  lastPageFront.classList.add("first-page");
  lastPageFront.style.backgroundColor = "green !important";
  lastPageFront.innerHTML = "";
  //back
  const lastPageBack = lastPage.querySelector(".back");
  lastPageBack.innerHTML = "<div id=lastPage>" + "<div>  Est-ce que c’est bon pour vous ? </div>" + "<img src='assets/flipbook-textures/duck.png'/>" + "</div>";
  // CREATURE PAGE A
  //front
  const creaturePageA = sheets[bookStart - 2];
  const creaturePageAFront = creaturePageA.querySelector(".page");
  creaturePageAFront.classList.add("first-page");
  creaturePageAFront.style.backgroundColor = "green !important";
  creaturePageAFront.innerHTML = "<div id=creaturesStart>" + "<div>  GRIMOIRE </div>" + "</div>";
  //back
  const creaturePageABack = creaturePageA.querySelector(".back");
  creaturePageABack.innerHTML = "<div class='magic_effect'></div>";
  // CREATURE PAGE B
  //front
  const creaturePageB = sheets[bookStart - 3];
  const creaturePageBFront = creaturePageB.querySelector(".page");
  creaturePageBFront.classList.add("first-page");
  creaturePageBFront.style.backgroundColor = "green !important";
  creaturePageBFront.innerHTML = "<div class='magic_effect'></div>";
  //back
  const creaturePageBBack = creaturePageB.querySelector(".back");
  creaturePageBBack.innerHTML = "";
  //// FUNCTION TO OPEN/CLOSE GRIMOIRE SECTION
  function ouvrirSectionGrimoire() {
    // console.log(creaturePageA.getAttribute("ng-reflect-rotation"))
    let pageARotation = creaturePageA.getAttribute("ng-reflect-rotation");
    let pageBRotation = creaturePageB.getAttribute("ng-reflect-rotation");
    if (parseInt(pageARotation) < -170 && parseInt(pageBRotation) > -10) {
      document.querySelector(".creature_pages").style.display = "flex";
      document.querySelectorAll(".magic_effect").forEach(page => {
        page.classList.add("fadeRing");
      });
      console.log("OPEN GRIMOIRE SECTION");
    } else {
      //
      document.querySelector(".creature_pages").style.display = "none";
      document.querySelectorAll(".magic_effect").forEach(page => {
        page.classList.remove("fadeRing");
      });
    }
    ;
  }
  setInterval(ouvrirSectionGrimoire, 100);
}, 0);
var lorem_array = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Volutpat lacus laoreet non curabitur. Nec dui nunc mattis enim. Nulla facilisi nullam vehicula ipsum a. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Eget egestas purus viverra accumsan in nisl nisi scelerisque. At consectetur lorem donec massa.", "Habitant morbi tristique senectus et netus. Ultrices in iaculis nunc sed augue lacus viverra. Auctor neque vitae tempus quam pellentesque. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Nisl purus in mollis nunc sed id semper. Varius sit amet mattis vulputate enim nulla aliquet. A diam maecenas sed enim ut sem. Leo duis ut diam quam. Tincidunt praesent semper feugiat nibh sed pulvinar proin. Ut faucibus pulvinar elementum integer enim neque volutpat. Cum sociis natoque penatibus et magnis dis parturient. Lacus vestibulum sed arcu non odio euismod lacinia./\n Sapien pellentesque habitant morbi tristique senectus et netus. Urna neque viverra justo nec ultrices dui sapien eget mi. Curabitur vitae nunc sed velit. Dignissim suspendisse in est ante in nibh mauris. Fringilla ut morbi tincidunt augue interdum velit. Ultrices in iaculis nunc sed augue lacus viverra vitae. Eu augue ut lectus arcu bibendum at varius. Venenatis lectus magna fringilla urna.", " Habitant morbi tristique senectus et netus et. Cursus turpis massa tincidunt dui ut ornare. Sit amet risus nullam eget. Eu ultrices vitae auctor eu augue ut lectus arcu. Pellentesque id nibh tortor id aliquet.\n Semper feugiat nibh sed pulvinar. Congue eu consequat ac felis. Enim ut tellus elementum sagittis. Vivamus at augue eget arcu dictum varius duis. Adipiscing bibendum est ultricies integer. Tempor commodo ullamcorper a lacus.", " Sociis natoque penatibus et magnis. Vulputate odio ut enim blandit volutpat. Nisi lacus sed viverra tellus in hac habitasse platea. Odio morbi quis commodo odio aenean sed adipiscing. Purus in mollis nunc sed id.\n Enim praesent elementum facilisis leo vel fringilla est ullamcorper. Lorem ipsum dolor sit amet consectetur adipiscing elit. Dui accumsan sit amet nulla facilisi morbi tempus. Libero justo laoreet sit amet cursus. Elementum nisi quis eleifend quam. Facilisis gravida neque convallis a cras semper. Gravida neque convallis a cras semper auctor neque. Magna fermentum iaculis eu non diam phasellus. Est velit egestas dui id ornare arcu odio. Donec enim diam vulputate ut pharetra sit amet.", " Elementum pulvinar etiam non quam lacus suspendisse faucibus. In pellentesque massa placerat duis ultricies lacus sed. Adipiscing elit ut aliquam purus sit amet luctus venenatis. Egestas fringilla phasellus faucibus scelerisque eleifend.\n Egestas sed sed risus pretium quam vulputate dignissim. Dui id ornare arcu odio ut sem nulla pharetra diam. Scelerisque viverra mauris in aliquam. Faucibus nisl tincidunt eget nullam non nisi est. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Imperdiet dui accumsan sit amet nulla facilisi morbi.", " Tristique risus nec feugiat in fermentum. Felis imperdiet proin fermentum leo vel orci. Et molestie ac feugiat sed. Condimentum lacinia quis vel eros donec. Integer malesuada nunc vel risus commodo. Sed elementum tempus egestas sed sed. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Id diam vel quam elementum. Venenatis a condimentum vitae sapien pellentesque. Leo integer malesuada nunc vel risus commodo viverra. Posuere morbi leo urna molestie at. Pulvinar proin gravida hendrerit lectus a. Et malesuada fames ac turpis egestas sed tempus.", "Λορεμ ιπσθμ δολορ σιτ αμετ, ατ μεα εξερcι ιθvαρετ ρεφορμιδανσ, ανιμαλ ορνατθσ δισσεντιθντ εθ σεα. Ομνεσqθε λεγενδοσ ρεφερρεντθρ cθ vελ, νε ιισqθε αδμοδθμ δολορεσ δθο, ετ νεc διαμ σαδιπσcινγ. Θσθ εξ νθλλαμ ιγνοτα, γραεcισ επιcθρει νεγλεγεντθρ ηισ θτ, ει δθο φαcερ ζριλ σολεατ. Πρι vιvενδο ηονεστατισ αδ, μεα δεcορε ινερμισ cονcλθσιονεμqθε cθ. Ηασ τιμεαμ σινγθλισ cονσεqθατ ει, θτ μελ cλιτα cονσθλ. Ιδ πρι θτιναμ αδvερσαριθμ, εα σολθμ σολθτα δισcερε vισ, αν σεδ λοβορτισ ιντελλεγεβατ. Εθ πραεσεντ εvερτιτθρ ηασ, σθμο cετερο μινιμθμ σεα αν. Vιμ ετ ετιαμ σαλθτατθσ cορρθμπιτ. Ετ cθμ προβο περσιθσ νεγλεγεντθρ. Ατ ηασ προβο ελιτρ βλανδιτ. Μελ νε qθεμ τατιον. Μελ εα σανcτθσ σαλθτανδι δεφινιτιονεμ, vιξ αετερνο απεριαμ ιντελλεγεβατ τε, vελ vιρισ δεβιτισ ει. Vελιτ λαθδεμ βονορθμ ηισ εθ, τε λορεμ μολλισ cιvιβθσ σιτ, σεα qθοδ σενσεριτ ιν. Εστ αφφερτ cομμοδο μεδιοcρεμ αν. ", "Προ λιβερ δετερρθισσετ αδ, ιν σιτ cαθσαε ιριθρε αccθσατα. Ιθσ θτ qθανδο σcριπτορεμ, εθριπιδισ περτιναcια vολθπταρια cθμ cθ. Cονγθε σανcτθσ λιβεραvισσε ιδ ιθσ, vολθτπατ ηονεστατισ ετ νεc. Θτ φεθγαιτ τραcτατοσ εθμ, θτ ιθσ αμετ πετεντιθμ, μαλισ νοστρθδ ηασ αν. Πθτεντ ηαβεμθσ μελ ετ, δετραcτο μνεσαρcηθμ νο cθμ, μοδο ιδqθε νοστρθμ vισ ιδ.Σεδ cθ vθλπθτατε vολθπταρια, τε διαμ δετερρθισσετ cονσεcτετθερ μεα, νθσqθαμ σαδιπσcινγ vιμ εθ. Εqθιδεμ δελεcτθσ λεγενδοσ νο προ. Δολορ qθανδο ιντερπρεταρισ εθ vελ. Νοστρο τορqθατοσ ετ qθο, γραεcο νεμορε ασσεντιορ qθι νε, ιθσ θλλθμ φαcετε ρεφορμιδανσ εξ. Ηαβεο εξερcι αccθσαμθσ θτ θσθ, λαθδεμ ιθδιcαβιτ vιμ ιν. Προπριαε ομνεσqθε νεc ετ, ποσσε λιβερ μεα ιν, προβο cοτιδιεqθε vιξ ατ.", "Ηισ αμετ νοστρο εα. Εθ φερρι νοστρθμ ποσιδονιθμ ηισ, αδ εθμ ιραcθνδια ιντερπρεταρισ. Ομνεσ τιμεαμ cοτιδιεqθε εξ περ. Αδηθc τατιον τεμπορ δθο αδ, μθνερε μεντιτθμ εξ σεδ. Ορνατθσ νομιναvι εα qθο, ταλε vιδε ιμπεδιτ qθι εα. Σθμο πορρο περτιναcια ετ qθι, τε ιλλθμ μαλθισσετ εαμ, εραντ σcριπτορεμ θτ προ. Ιλλθμ δεβιτισ θτ vελ. Cιβο νεμορε σεα τε, ιδ cορπορα ιθδιcαβιτ ηασ, εθ προ θτιναμ μθcιθσ ινιμιcθσ. Ταντασ ινιμιcθσ vελ θτ. Εαμ νο περσιθσ πετεντιθμ. Vισ λεγιμθσ νονθμεσ cονcλθδατθρqθε νο, δθο εθ ωισι δετραξιτ φορενσιβθσ, ει cθμ μινιμ ινσολενσ. Θτ ετιαμ cονστιτθτο δελιcατισσιμι εαμ. Αν θσθ διcθντ σανcτθσ σαπερετ, cθμ cθ διcατ οβλιqθε σαλθτανδι, προ ετ νοβισ λαθδεμ. Vιξ διcαντ ινσολενσ ετ, νο αλιι λιβρισ vιμ, ιδ vιξ λιβρισ vολθμθσ αλβθcιθσ. Εθ δθο σθμο ηομερο λιβρισ, μθνερε θτροqθε περφεcτο ει σεα. Εξ ιθvαρετ αλιqθαμ αccθσαμθσ περ, δθο εα δολορθμ δελενιτι προδεσσετ.", "Μει λθδθσ λαβορε τιμεαμ θτ. Ποπθλο βλανδιτ cονσθλατθ ατ vιξ, προβατθσ cονσεqθατ αδ νεc, ερατ δελεcτθσ ρεφορμιδανσ qθι νο. Εξ vιδιτ σθμμο δολορ vιμ, ηομερο ινσολενσ cθ ηισ, δθο ιν ηαβεο λεγιμθσ επιcθρι. Νοστρο vοcεντ τε μεα, νο ηαρθμ πθταντ λαβορεσ εαμ. Δθο ταλε αγαμ λεγιμθσ θτ, αμετ προβο αccθσαμ τε προ. Vερι θβιqθε αλιqθαμ vελ εξ. Ει ιπσθμ παθλο μεντιτθμ εοσ. Cασε σαλε vιτθπερατα εστ εα, σεα γθβεργρεν ινcορρθπτε.", "լոռեմ իպսում դոլոռ սիթ ամեթ, ունում ռեքուե մնեսառծհում քուո եխ, ագամ ինսթռուծթիոռ պռի իդ. սիմուլ ոմիթթամ եխպլիծառի նեծ նե. սապիենթեմ ծոռռումպիթ ծոնսթիթուամ եու պռի, թե պռի սադիպսծինգ պեռսեքուեռիս. թե նեծ ալիենում ծոնծեպթամ, ան եսթ դեթռածթո մենանդռի սծռիպսեռիթ. լիբեռ հառում ելոքուենթիամ նե սիթ, լաբիթուռ վիվենդո գլոռիաթուռ եթ եում. նո մոդո ինանի ուսու. իուսթո ապպառեաթ ածծոմմոդառե եամ նո, նամ եու նոսթեռ վեռեառ իմպեթուս. մել եթ սիմիլիքուե ծոնսեքուունթուռ մեդիոծռիթաթեմ, քուի ան դիծթաս մեդիոծռեմ, իդ նամ ֆեուգիաթ ինսթռուծթիոռ. եու պոսթեա ինիմիծուս թհեոպհռասթուս նեծ. եա թռիթանի ծոնսեթեթուռ դուո.", "իուվառեթ անծիլլաե ադ մեա, ալիքուիպ ռեպուդիառե նե ուսու. իդ քուո ադհուծ ուռբանիթաս. ան ծոնգուե ֆուիսսեթ եոս, նամ ութ ինեռմիս պռոբաթուս. սալութանդի ինթելլեգեբաթ հաս ծու. թե պեռ սաեպե ֆածիլիսիս սուսծիպիանթուռ, մել թե հոմեռո աեթեռնո. մել ութ դենիքուե ինդոծթում, աթ սուսծիպիթ ոմիթթանթուռ սեդ, ան հաս նոմինաթի քուաեսթիո պառթիենդո. ուռբանիթաս դեֆինիեբաս քուո եու, դոմինգ պռոբաթուս պեթենթիում հիս ին, լոռեմ ծհոռո քուանդո իդ նամ. մեի դիծթա սինգուլիս ան. ան պեռ ֆուգիթ ինթելլեգաթ դեֆինիթիոնես. վիմ նո թռիթանի ծոռռումպիթ, ոռաթիո դելենիթ դիսսենթիունթ ին մել. մինիմ ռեծթեքուե ռեֆոռմիդանս նե մեա. պռի աթոմոռում պոսիդոնիում ծու. եա նոնումես ֆոռենսիբուս վիս, սեդ եու ծաուսաե քուաեսթիո. նամ մագնա ինեռմիս ադիպիսծի եխ, եսթ սումո լոռեմ ածծուսամուս թե, նիհիլ դիծթաս դեթռախիթ դուո եթ. պեռ ադ թիբիքուե դեթռախիթ, աթ վիմ վեռո մոլեսթիե լաբոռամուս. ութ եում վիդե ծոնսուլաթու վիթուպեռաթոռիբուս. նամ նո թածիմաթես գլոռիաթուռ. եխ լաբիթուռ լուպթաթում վիս, ութ ոմնիս դելիծաթա մել.", "ծու եռանթ ֆիեռենթ պեռծիպիթուռ հիս, աթ իուս ռեքուե սինգուլիս դիգնիսսիմ, ադ ալթեռում ոֆֆիծիիս ռեֆոռմիդանս եում. ալիքուամ դելեծթուս նեծ ան, ան դիծիթ հաբեմուս դոծենդի սիթ. մել ադ թեմպոռ ապպառեաթ. պռի գռաեծի պոսիդոնիում եթ, ծում վոլուպթուա ծոմպլեծթիթուռ ան, սոլութա ֆածիլիս ասսենթիոռ ուսու ին. մագնա վիռթութե եուիսմոդ պռի եա, ադ հաս իդքուե ֆաբուլաս վիվենդո. ութ հինծ պռոբո եքուիդեմ ուսու, իդ նիբհ եռոս ածծուսամ մեա, եռուդիթի պլածեռաթ եամ իդ. պոնդեռում ածծուսաթա սեդ թե, եում եռուդիթի իմպեդիթ մելիոռե եա, դիծո քուաս եու եում. եռոս նեգլեգենթուռ մել եու, թեմպոռիբուս ծոմպլեծթիթուռ եա մեա. եոս քուոդսի թոռքուաթոս եու, ելիթռ մոլլիս աեթեռնո պեռ նո, ան սինթ իուդիծո իուս. ծլիթա սծաեվոլա ինսոլենս նե եում. ֆուգիթ ռեգիոնե ոմիթթամ ադ վել, եպիծուռի մենանդռի եսթ իդ. իուսթո իռածունդիա դեմոծռիթում թե հաս. ութ հաբեո իպսում իուվառեթ ուսու, մոդո եռոս մնեսառծհում թե սեա.", "եի ուսու վիդե լիբռիս սծռիբենթուռ. մեա քուաեքուե ռեպուդիառե պռոդեսսեթ ծու. դոլոռ վիվենդում ան սեա, եում նո ֆուիսսեթ դեսեռունթ. աթ եամ դեծոռե պեռպեթուա, պոռռո պեռիծուլիս դիսսենթիունթ դուո թե, մել ութ պառթեմ վոլուպթաթում ծոնծլուսիոնեմքուե. նո մել վոծենթ ապեռիամ ինեռմիս, նո վիխ ոմնիում թածիմաթես, պռո ան հաբեո ֆեուգաիթ. իդ պռո ոպթիոն սծռիպթա, ալիի վիվենդո ադ վել, դուո եի ոդիո ուբիքուե ոֆֆենդիթ. մեի ադ իլլում սալութաթուս թեմպոռիբուս. մեի ադ դիծիթ իուդիծաբիթ սուսծիպիանթուռ. ան ջուսթո լաբոռե ալիքուիդ.", "禄風成記最本変止旨浩携巻探。記用禁下転組禁効特者以細好押。戻審乗所断社外族米在夜指岡月入並室裏申。減際年掲弟方変見道糖前換棋作古特著祐果。九細見出図入者沈世行催強世取東記自人空長。人情関給毎際期遠聴鳴川続神賞。体当提南役沢覧暮学響度療形国小。打安社周健株強中問形和京願通鶏産済族方。歩陵参田相阪経彰辺害平制。文問情提品武所身裁道覧将室読者南毎半風襲。間新針薬前真写統犯商岐層物余。今向陣国均戒佐妙止済圧額指万触。容開年前策高氷城必真窓異。抑直眺間産人事落性会及上中均末意。候言政虫考転好合級羽無線下。初員間村会響日選機殴世組併考選茶佐必夕。程隣春本周質党涯意気記建惑化。円間規清社発必以受査監企案気別掲子光。 申小天幹記柴敵的周覧著険理新各否。唯球環第切困能展幕鈴兵売読系盗伴解。土戦導極属裁止稿色母兵内止著言針債役。野論面戦選党際未返力無急里色住京業読済。加決栄連達記作欲顔職点添算知西株転合。念得別暮曜直件発合代広少句必割。索院読消六編他後悔慮校雲終隆速出伝個。索差信展昨毎需回発形高必件者。勤夕産水稿覧協近写禁胚長上言分。 北回園記遠芸本応治方竹治玲載入子健。刊幼投低指会秘苦相郎全選新真工断毎障方。国定東勧際来師和沼般事出品。最動覧文貧禁杯行家誌違腕削。芸新隊受直層速経経生舎新時導会。然読更勝通雪返的数肇供所乳必。員万載必力及年出用活下楽。戦肉必利央中応備化横置右事目。華載転断西下登成首音集阿監接認村型東広。筆題題読少余者合賢女夏経必美。", "省進長可由観報仕完投守況。灰説今文面係囲週属門決方割。水務紀久大根益沖庭後当確判取。年成献副聞碑式茨弔公捕退。総止踊毛公謙運分米日治念職前石芸月改周長。件覧掲自詳責情部厘正同法。何職陽渡茶造住神死催億校団。写分様岡茨役容盟済中社済家。子歳田経中受民川漏稿夜図月。際民転総円界能基王玲銀実関。区根刊気重金校芸能約新安祭。毎多業断聞長故相有道大内戻落書芸会。形前西害覧区民朝人引代女詳紙条。遺能掲治負月藤掲江王総後過子材。守属特敵肉能欠切港番利救出省胆需西刊民征。本面毎購週情候胸紙成表宿切案共小掲。画務応女国演印一率手載秀。行並断月信係権身意医合容。毎動破身励望文勝諌請妻社無体聞。正伊供載止句芸港割毎係相走約査前生徳育利。繁区限強現券外津表転動任実棋兜出業録政。著決道絡密稿会戦無自回抽査試致強。医社覧転明準知観金属優釧約古合景。的合刊講降告毎界外婚輸左。条照本集中右聞規仲英携告勢。銀会特際境太資野権欠量演人新川。時揚回川内辞担狙通判型栄着誇。圧転納流部書略嘘使期愛円写局平住真率投透。震局判棋介電有入持帯堺左合。考未今了工雪止一烹態開責。仁安導府聖応者様済惑戻陵結済夜後行。暮名婦与下和朝発目竹言奈属焼切。竹防権攻中術報記季順利命地納正見。会曙相染大質造大投暮隣日米水存海自投星。府至連碁資降込平上転考議。刻憲審鎌訪覇授外開順価済。類普若穂外金得雑番事度委。資生載断真聴仮幅処後片誉無。転顧棋送野際聞造史賛判名選芸。洋今転提鹿朝岩紹朝都詳話獲料立外権法女医。", "季掲半意内善掲性問写日立。枚象主夏禁揺著在氏汚連念読務。指済替浮高調場碁改化児示稿幸読際年止人。里鋭奮玉芸供無定覧導要毎近損米法響失吉。製測地帯権点去陳援連武右。請今特院万就前了情安野閣検参紙。同陛化会置落明五体鈴現利交禁幸政表者算合。写政届場験録旅業暮宮氏放支価理情載通康。準供度江力悲世資画青戦禁場追影加運提渡対。全能車未文月旧辺録真調国級事中泳藤。際政職国早外著埋彦懲月異売暮差。義屋帰治問玲少安再戦持歌目給。毎掲起情仕安初観選能部裁豊待民置強芸心族。福加例社読躊身引撤師企本測戒地世古話。信示大成事情女刊厳頭祭敬全沼体実自科難。理前賀字然護相和動原供掲理稿述入力前。北政翼子術青装拓政薬生断球断判。業藤描井学展弁松重南問更麻美", "働並スろり過値れ未応書ヌヱサ勝多どやひ技特るぐけ年作ネ澤思載ノツウニ工図オ連起テ部書ノフ情玲念ドかー更導げぱ患上ろリ稿優シ実生らぽ害発逮久些けね。市き銀作ずぱぴお荷載寄じけ式講ウワセム輪作ケ局全ヒレ連仕ょ文近ぜド首綱老び都今ッゃ。輩コセイ思五いか下品イ周想効ミラニ臓任テフマハ夫閣ぶざゆく倉江べざず針視セクマロ経知容検サ要込津装に。重写きら満際ハヲマ長咋投ヒキ外沖げろッ語提碁う液豊ヘエ朗島カテ遺信ナヱ区川ドれク白族クざ文証五成クノ早門は無進誕ぜひ細政田働ざのめト。体ッずな入八車だわ済偉塔履捕レチフ若宮まい世支る豪他スヒコノ倒本は国小男シア旅須き込政チクタロ性書かぴけば筋子ヨケ京実ヒユロ写企範へルょ刊樹幕浩よぴ。", " 田タ出異くてめぐ著後み特孝テ渡京行ラレへそ主由京る未出えべクこ経応を稼匂内わくろえ女飛ルメセサ育博及司深ぞ。要泉告チ軒続ド白初意えべしり楽川土ユワヨ失辞いで団界稿コスモセ供写こゅげ治価モ車努禁シ兵残ぜずクそ再鉄ぼレぐ患漏頂交ぽ。庭ラえやか謙皇ヤノヌス島春ヌ人人ンぶ人化ハ今政こンわぐ教担ヨト表替レ総相ヲ今雑ヌミテ軟健マテツ属剛さ券聴う。 万こをつっ生問ろ済労スンえぜ論告れべいま受京フユテス世年ナワオ之化らぱ残塁ざきん画北ネミア屋倶宰挿栖年めぞ禁実挙計や形的ヘ汗員へぼ際普えはゆ。可ツヘマ作事アホフ海問客いー要雇図ル済結加タラ際起ルーぞと無境ノマ来早前国がべど稿季最練ょッ。展チホツ亡社訪は波準セチイ整連リツメヤ持然どごト圏見午や一将ニシル何割カメチ野一すぼ図後ゆンへ情景ツヱ記国レコヲ脱村浮絵ぎぶゃ。村テ前日ノタ拠全禁ワモ教車せょ倍村逮めッほリ険止ぴびうき次労メ定去るざえ堂加れちト拡女禁観ドびね稿年仁借ざり。船り気口メ堀球そおぐ確指レウヘマ東限チ中改レラ応量物や元楽ケコク日走ざて逃准ぱして経消コキク放理執ノヘ講県挑リレセミ農話むべ中圧しリ年悩織兄ぽもむぐ。", "建ゆび発乳ヒユ員問ヤウケ本囲アルニ少政レツロフ金航質チ観認告残ケウ打成無ぞも紙子ヘワタリ丸前ケラヘキ選決セコ込報エナヌ期当ぼ接電づひ首妹廷護測ょ。幸カ伝面タ宮教えラ店督ぞ秋数探メ指転功広ら排企フナミマ報全た報破持じを並下右ネキ駅曜ひばク。危ぐイなゅ知近フすきま情手ルひた心済けつ来署む中社たやげは安新ちまよず義善すべッ脱際げ情研逃づふば。 意用こむえめ問調マ市勝ろ断本ホ京父所企ぞざ断内き異解ラレイワ画線ラぞび戦知択トヒス万定設イにぶか応稿哥因セ売週火違反ゃ。願ん急配ラアニメ県正ケア例竹シ賞仲ルレウヱ想全む側説んひ審高便ねかんス署鉄ツエセ温獲ねらぱざ数同リえ紹後ユ課道ぐこ兆企ごふで之学妻阜倶ぴめる。 私たぶだぼ局印ハ図佐エウタヱ市再発並ねひ解国ワ楽統トリフ無業ヘホソ海個ヤレイヲ産多こっゅン教連青省トだうん。投ホメエナ属毎関ぞぽ旅法スるらば容生ごく東情ロキ言教ふ奪人モテト備録ーづぶ暮軽健につどふ九活いれ題投ぴぞぶ説休サチヨレ郎芸ンリさや全本ラヌ覚語っじ補重だ行上扱息レぞ。天ルメヌリ詳聞ニホワカ号遊知意並捜ホコネウ争東はぼ文来寿がめこ議会ぜょラん通協サツヒス定拡フマヌ化客販正で。", "象候ハセ島初ひがほつ辞速ンーり図田キ気選めで盗応ょぐク図時ヱコツ作社ニ氷一ぴドイが治取サトソテ子新スフレマ続怠殊ちくが。夕飾なつさ万季シチ確噴やたね事忠ッ動済す催護ラセ法旧東成とすラ圧思ネソ聞世ょねづせ政改ラ得港防青種るふじか。住サ演謙分クンおん組療ロタナハ箱精ら施終ワフ際験ぱび制産療こわの隠楽ホウオ示課海ぞぶ草会作べわンう大初儀レに材卒ホケサス全明ふだ。断付ぼ終井しずもわ因慮トケア集多み事暮ロウ劣事つく常界掲起ヘツ場議マチヱケ来歓血貢らょ。器ヘハ阪新ゅびほイ持学が宿社よちね月恐ぼ及連西フ覧者ろち健戦ちい碁止ムヌタマ権扱ラ繰君サ際世ぽぶぱれ治告よごち界点医ルち ゃ作禁対否ぼ業捜げねく。書与スソリヒ難最るレばッ機気ケホ暮門ロコミ存米国どぴぱ材愛ウニ球議コネシ以転むし公喜スレサマ説前ラホタ路留好術びぐひ。", "강화조약. 국가는 대외무역을 육성하며. 종교와 정치는 분리된다. 헌법재판소에서 법률의 위헌결정. 헌법재판소에서 법률의 위헌결정, 국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기 위하여 국민경제자문회의를 둘 수 있다. 사형을 선고한 경우에는 그러하지 아니하다. 국가는 모성의 보호를 위하여 노력하여야 한다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 국무회의는 대통령·국무총리와 인 이상 인 이하의 국무위원으로 구성한다. 대한민국은 민주공화국이다. 법률이 정하는 바에 의하여 대법관이 아닌 법관을 둘 수 있다. 정당은 헌법재판소의 심판에 의하여 해산된다, 대통령은 헌법과 법률이 정하는 바에 의하여 국군을 통수한다. 정당의 설립은 자유이며, 대법원장과 대법관이 아닌 법관은 대법관회의의 동의를 얻어 대법원장이 임명한다.", "재판관은 대통령이 임명한다, 누구든지 성별·종교 또는 사회적 신분에 의하여 정치적·경제적·사회적·문화적 생활의 모든 영역에 있어서 차별을 받지 아니한다. 국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써 제한할 수 있으며, 국가는 농업 및 어업을 보호·육성하기 위하여 농·어촌종합개발과 그 지원등 필요한 계획을 수립·시행하여야 한다. 행정각부의 설치·조직과 직무범위는 법률로 정한다, 비상계엄하의 군사재판은 군인·군무원의 범죄나 군사에 관한 간첩죄의 경우와 초병·초소·유독음식물공급·포로에 관한 죄중 법률이 정한 경우에 한하여 단심으로 할 수 있다, 공무원의 직무상 불법행위로 손해를 받은 국민은 법률이 정하는 바에 의하여 국가 또는 공공단체에 정당한 배상을 청구할 수 있다. 대통령의 선거에 관한 사항은 법률로 정한다.", "제항의 승인을 얻지 못한 때에는 그 처분 또는 명령은 그때부터 효력을 상실한다. 대통령은 즉시 이를 공포하여야 한다. 일반사면을 명하려면 국회의 동의를 얻어야 한다, 균등한 기회가 보장되어야 한다. 모든 국민은 행위시의 법률에 의하여 범죄를 구성하지 아니하는 행위로 소추되지 아니하며, 국회는 정부의 동의없이 정부가 제출한 지출예산 각항의 금액을 증가하거나 새 비목을 설치할 수 없다. 모든 국민은 고문을 받지 아니하며. 국가는 주택개발정책등을 통하여 모든 국민이 쾌적한 주거생활을 할 수 있도록 노력하여야 한다.", "대한민국의 경제질서는 개인과 기업의 경제상의 자유와 창의를 존중함을 기본으로 한다. 대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 일 이내에 후임자를 선거한다. 국가는 균형있는 국민경제의 성장 및 안정과 적정한 소득의 분배를 유지하고, 제항의 지시를 받은 당해 행정기관은 이에 응하여야 한다. 정기회의 회기는 일을. 사회적 특수계급의 제도는 인정되지 아니하며. 국회는 국무총리 또는 국무위원의 해임을 대통령에게 건의할 수 있다. 중임할 수 없다.", "حادثة العالم ان إيو. أمّا الشرق، العالمية مكن ما, بـ قام كنقطة اللازمة. انه عل جسيمة عالمية الرئيسية.للسيطرة والفرنسي و أسر. أضف ودول الشتاء الخاطفة مع, شرسة الفرنسي ٣٠ تحت. عل تنفّس بقيادة لها, عن يكن سكان بزمام مقاطعة. ما ولم الولايات الإتفاقية.مع فسقط أدنى الاندونيسية ضرب, تم ذلك فرنسية واُسدل, فعل تمهيد الأراضي هو. بحث وعُرفت التاريخ، المتاخمة من, جمعت والنرويج تعد أن. سقطت أمّا أطراف ما تحت, كل إيو تعداد النزاع. كل لغزو بالحرب التكاليف على. شمال إعلان رجوعهم فصل لم, حول عملية التجارية ثم, حاول القوى السيطرة إيو عل.", "قد لكل بفرض أحكم الوزراء. الخاسر الإحتفاظ مع بال, دون هو لعدم الفرنسي الشّعبين. الى رئيس محاولات وبالتحديد، هو, جُل ان ٢٠٠٤ أوروبا استدعى, تحت أي وإقامة السيطرة. تحرّك سليمان، للإتحاد بـ الا. دفّة الشتاء انه من, في وقوعها، والإتحاد كلا. الى ٣٠ بقعة ارتكبها الثقيلة, مكن ووصف وحلفاؤها أن, الا لعدم العالم، بالمحور من.", "ذلك أمدها اسبوعين إذ, الحكم اليابان، ما حدى. والكساد بالسيطرة المؤلّفة أما في, وتم كل يذكر شدّت وصافرات. و بتحدّي العمليات بحث, ثم بتخصيص الأراضي وباستثناء لكل. الساحل مسؤولية هو جُل, إيو عل اللا لأداء.به، حقول كردة حكومة ٣٠. بالرّد انتباه المبرمة أما كل, عُقر جزيرتي نفس بـ. عرض إبّان بالمحور بل, عن جهة لعدم لمحاكم والفرنسي, شيء للأراضي وبريطانيا مع. واحدة اوروبا من عرض, هامش وبولندا والروسية يتم أي.", "تسمّى ليركز وحلفاؤها بعض كل, حصدت وسوء لبولندا، عل بعد, عل قام والنرويج بريطانيا-فرنسا. لمّ إنطلاق مواقعها بل, شيء ثم شواطيء وبولندا تزامناً, لها بسبب وكسبت عن. بها بينما الإقتصادي ان, من غير دفّة فشكّل. غير فهرست وحرمان بمباركة و, كل صفحة قررت دون. هو صفحة جسيمة ومن. و سليمان، المتاخمة المشتّتون دنو, لم الخارجية الأمريكية هذا.", "", "لم تلك طوكيو الأخذ الأرضية. و جُل إعادة المضي وبعدما. أمّا الأوضاع بل بها, في لكون بمعارضة تحت. تطوير مشروط البرية وفي بل, إذ واُسدل للسيطرة تزامناً فصل, أي أوزار مهمّات فصل.", "شيء ٣٠ بولندا، الكونجرس استطاعوا. لغزو والديون تم كلا, ما حين تمهيد الأرض واقتصار. جزيرتي وتنصيب الا لم. السادس بمحاولة تلك أم. و لكل الصفحات وباستثناء, ٣٠ الأوروبية ويكيبيديا، هذه.٢٠٠٤ الذود أن بحث. إعلان يتبقّ الخارجية قد غير, انتباه الأرواح ضرب ثم. جدول وقبل العالمية في حيث. بقصف حلّت بل كان, مكن هو إعلان مقاومة, بعد لم وبعد أسابيع ا."];
// CANDLELIGHT EFFECT FOR BODY (RANDOMIZED TO MIMIC CANDLE FLICKER)
function candlelight() {
  let lightH = Math.floor(Math.random() * 1);
  let lightS = Math.floor(Math.random() * 100);
  let lightL = Math.floor(Math.random() * 100);
  let darkH = Math.floor(Math.random() * 1);
  let darkS = Math.floor(Math.random() * 100);
  let darkL = Math.floor(Math.random() * 10);
  let strength = 0.1;
  let colL = `hsla(${lightH},${lightS}%,${lightL}%, ${strength})`;
  let colD = `hsla(${darkH},${darkS}%,${darkL}%, ${strength})`;
  let blurL = Math.floor(Math.random() * 60);
  document.documentElement.style.setProperty("--color-overlay-l", colL);
  document.documentElement.style.setProperty("--color-overlay-d", colD);
  document.documentElement.style.setProperty("--blur-overlay-l", blurL + "%");
  // console.log("candlelight change")
}
// candlelight()
var lightstate = "off";
// CANDLELIGHT OFF (STATIC)
function lightsOut() {
  let H = 150;
  let S = 0;
  let L = 0;
  let strength = 0.2;
  document.documentElement.style.setProperty("--color-overlay-l", `hsla(${H},${S}%,${L}%, ${strength})`);
  document.documentElement.style.setProperty("--color-overlay-d", `hsla(${H},${S}%,${L}%, ${strength})`);
  document.documentElement.style.setProperty("--blur-overlay-l", "0%");
  console.log("LIGHT OFF");
  lightstate = "off";
}
// lightsOut()
// CANDLELIGHT ON (STATIC)
function lightsOn() {
  if (lightstate == "off") {
    let H = 0;
    let S = 25;
    let L = 35;
    let strength = 0.2;
    // Smooth version (css bugs out, not recommended)
    function slowLoop(i) {
      setTimeout(() => {
        let Si = S > i ? i : S;
        let Li = S > i ? i : L;
        document.documentElement.style.setProperty("--color-overlay-l", `hsla(${H},${Si}%,${Li}%, ${strength})`);
        document.documentElement.style.setProperty("--color-overlay-d", `hsla(${H},${Si}%,${Li}%, ${strength})`);
        document.documentElement.style.setProperty("--blur-overlay-l", "0%");
        console.log("i :" + i);
      }, i * 50);
    }
    // for (let i = 0; i <=  Math. max(S, L); i++){
    //   slowLoop(i)
    // }
    // Abrurpt version
    function suddenLights() {
      setTimeout(() => {
        let S = 50;
        let L = 50;
        document.documentElement.style.setProperty("--color-overlay-l", `hsla(${H},${S}%,${L}%, ${strength})`);
        document.documentElement.style.setProperty("--color-overlay-d", `hsla(${H},${S}%,${L}%, ${strength})`);
        document.documentElement.style.setProperty("--blur-overlay-l", "0%");
      }, 500);
    }
    suddenLights();
    console.log("LIGHT ON");
    lightstate = "on";
  }
}
// desync fire gifs
function firestart() {
  const fires = document.querySelectorAll("#firewall img");
  fires.forEach(function (fire, index) {
    setTimeout(function () {
      fire.src = "assets/fire.gif";
      fire.style.display = "block";
      console.log("TEST FIRE START");
    }, index * 1000);
  });
}
firestart();
setTimeout(firestart, 3000);

/***/ }),

/***/ 2160:
/*!********************************************!*\
  !*** ./src/app/humain/humain.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HumainComponent: () => (/* binding */ HumainComponent)
/* harmony export */ });
/* harmony import */ var _joueur_joueur_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../joueur/joueur.component */ 7289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class HumainComponent extends _joueur_joueur_component__WEBPACK_IMPORTED_MODULE_0__.JoueurComponent {
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵHumainComponent_BaseFactory;
    return function HumainComponent_Factory(t) {
      return (ɵHumainComponent_BaseFactory || (ɵHumainComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](HumainComponent)))(t || HumainComponent);
    };
  }();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: HumainComponent,
    selectors: [["app-humain"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    decls: 2,
    vars: 0,
    template: function HumainComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "humain works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9621:
/*!************************************!*\
  !*** ./src/app/ia/ia.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IAComponent: () => (/* binding */ IAComponent)
/* harmony export */ });
/* harmony import */ var _joueur_joueur_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../joueur/joueur.component */ 7289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class IAComponent extends _joueur_joueur_component__WEBPACK_IMPORTED_MODULE_0__.JoueurComponent {
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵIAComponent_BaseFactory;
    return function IAComponent_Factory(t) {
      return (ɵIAComponent_BaseFactory || (ɵIAComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](IAComponent)))(t || IAComponent);
    };
  }();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: IAComponent,
    selectors: [["app-ia"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    decls: 2,
    vars: 0,
    template: function IAComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ia works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 3168:
/*!******************************************************!*\
  !*** ./src/app/inscription/inscription.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InscriptionComponent: () => (/* binding */ InscriptionComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _compte_compte_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../compte/compte.service */ 9017);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _chains_chains_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chains/chains.component */ 6175);







function InscriptionComponent_div_0_p_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Le login est obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function InscriptionComponent_div_0_p_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Le mot de passe est obligatoire");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["/menu"];
};
function InscriptionComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "form", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function InscriptionComponent_div_0_Template_form_ngSubmit_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.inscription());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Inscription ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Identifiant:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div")(12, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div")(17, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Login:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div")(22, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Mot de passe:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 16)(27, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InscriptionComponent_div_0_Template_button_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.exitAnimation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " Valider ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function InscriptionComponent_div_0_Template_a_click_29_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.exitAnimation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Retour ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, InscriptionComponent_div_0_p_33_Template, 2, 0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, InscriptionComponent_div_0_p_34_Template, 2, 0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.inscriptionForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r0.inscriptionForm.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r0.inscriptionForm.get("login")) == null ? null : tmp_3_0.dirty) && ((tmp_3_0 = ctx_r0.inscriptionForm.get("login")) == null ? null : tmp_3_0.hasError("required")));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r0.inscriptionForm.get("password")) == null ? null : tmp_4_0.dirty) && ((tmp_4_0 = ctx_r0.inscriptionForm.get("password")) == null ? null : tmp_4_0.hasError("required")));
  }
}
class InscriptionComponent {
  constructor(formBuilder, router, compteService) {
    this.formBuilder = formBuilder;
    this.router = router;
    this.compteService = compteService;
    this.showForm = true;
  }
  ngOnInit() {
    this.emailCtrl = this.formBuilder.control('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required);
    this.loginCtrl = this.formBuilder.control('');
    this.passwordCtrl = this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]);
    this.inscriptionForm = this.formBuilder.group({
      email: this.emailCtrl,
      login: this.loginCtrl,
      password: this.passwordCtrl
    });
  }
  inscription() {
    if (this.inscriptionForm.valid) {
      const newCompte = {
        login: this.loginCtrl.value,
        password: this.passwordCtrl.value,
        email: this.emailCtrl.value,
        type: "humain"
      };
      this.compteService.save(newCompte).subscribe(resp => {
        this.inscriptionForm.patchValue(resp);
      });
    }
    this.router.navigate(['/connexion']);
  }
  // add class to trigger exit animation on click
  exitAnimation() {
    document.querySelector(".formulaire")?.classList.add("exitAnimation");
    console.log(document.querySelector(".container"));
  }
  static #_ = this.ɵfac = function InscriptionComponent_Factory(t) {
    return new (t || InscriptionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_compte_compte_service__WEBPACK_IMPORTED_MODULE_0__.CompteService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: InscriptionComponent,
    selectors: [["app-inscription"]],
    decls: 2,
    vars: 1,
    consts: [["class", "formulaire", 4, "ngIf"], [1, "formulaire"], [3, "formGroup", "ngSubmit"], [1, "titre"], ["id", "bg_img", "src", "../../assets/flipbook-textures/dialog_scroll.png"], [1, "container"], [2, "display", "none"], ["for", "id", 1, "form-label"], [1, "input-div"], ["type", "number", "id", "id", "name", "id", "readonly", "", "formControlName", "id", 1, "form-control"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "name", "email", "formControlName", "email", 1, "form-control"], ["for", "login", 1, "form-label"], ["type", "text", "id", "login", "name", "login", "formControlName", "login", 1, "form-control"], ["for", "password", 1, "form-label"], ["type", "text", "id", "password", "name", "password", "formControlName", "password", 1, "form-control"], [1, "button_group"], ["type", "submit", 3, "disabled", "click"], ["routerLinkActive", "active", 3, "routerLink", "click"], ["type", "button", 1, "button"], [1, "danger_group"], ["class", "danger login_mandatory", 4, "ngIf"], ["class", "danger pass_mandatory", 4, "ngIf"], [1, "prop"], [1, "danger", "login_mandatory"], [1, "danger", "pass_mandatory"]],
    template: function InscriptionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, InscriptionComponent_div_0_Template, 36, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-chains");
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showForm);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _chains_chains_component__WEBPACK_IMPORTED_MODULE_1__.ChainsComponent],
    styles: ["@charset \"UTF-8\";\n.formulaire[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  width: 90%;\n  height: 90%;\n  margin: auto;\n  color: white;\n  animation: _ngcontent-%COMP%_scrollAppear 1s ease-out;\n  transition: 1s ease-in-out;\n}\n.formulaire[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.formulaire[_ngcontent-%COMP%]:hover   .prop[_ngcontent-%COMP%] {\n  transform: rotate(0deg) scale(1.1);\n}\n\n#bg_img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  height: 100%;\n  object-fit: cover;\n}\n\n@keyframes _ngcontent-%COMP%_scrollAppear {\n  from {\n    transform: scale(0, 0.5);\n  }\n  to {\n    transform: scale(1, 1);\n  }\n}\n.container[_ngcontent-%COMP%], .button_group[_ngcontent-%COMP%], .titre[_ngcontent-%COMP%], .prop[_ngcontent-%COMP%] {\n  opacity: 0;\n  animation: _ngcontent-%COMP%_contentAppear 1s ease-in;\n  animation-delay: 0.7s;\n  animation-fill-mode: forwards;\n}\n\n@keyframes _ngcontent-%COMP%_contentAppear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.titre[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  width: 50%;\n  margin: auto;\n  padding: 0px 20vmin;\n  position: relative;\n  border: 2vmin double rgba(0, 255, 0, 0.1);\n  border-image: url('nail.png');\n  font-size: 8vmin;\n  background: url('scroll_paper.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 120% 140%;\n  background-blend-mode: soft-light;\n  font-family: bronzion;\n  color: rgb(193, 0, 0);\n  text-shadow: 1px 1px 1px rgba(0, 128, 0, 0.501);\n}\n\nlabel[_ngcontent-%COMP%] {\n  width: 100%;\n  color: rgba(67, 2, 2, 0.824);\n  text-align: center;\n}\n\n.container[_ngcontent-%COMP%]   .input-div[_ngcontent-%COMP%] {\n  position: relative;\n}\n.container[_ngcontent-%COMP%]   .input-div[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: 15%;\n  height: 100%;\n  opacity: 0;\n  transition: 0.2s;\n  background-image: url('bow.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-position: right;\n}\n.container[_ngcontent-%COMP%]   .input-div[_ngcontent-%COMP%]:hover:after {\n  opacity: 0.3;\n  animation: _ngcontent-%COMP%_arrowInput 0.2s alternate infinite;\n}\n\n@keyframes _ngcontent-%COMP%_arrowInput {\n  from {\n    opacity: 0.1;\n    transform: translateX(-0.5vw);\n  }\n  to {\n    opacity: 0.3;\n    transform: translateX(0vw);\n  }\n}\n\n\ninput[_ngcontent-%COMP%] {\n  width: 50vh;\n  height: 3vh;\n  padding: 3vmin;\n  margin: auto;\n  border: 1px dashed #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  background: url('linen.png'), rgba(248, 237, 219, 0.4196078431);\n  background-size: contain;\n  cursor: url('feather.png'), pointer;\n}\n\n\n\ninput[_ngcontent-%COMP%]:hover {\n  border-color: #333;\n}\n\n\n\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: rgb(193, 0, 0);\n  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);\n  background-color: rgba(255, 128, 0, 0.1);\n  animation: inputFocus 1s infinite alternate;\n}\n\n.button_group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1vmin;\n  padding-bottom: 20px;\n}\n.button_group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  min-width: 45%;\n  height: 50px;\n  padding: 0;\n  margin-top: 1vmin;\n  border: none;\n  background: url('fantasy-button.png');\n  background-blend-mode: multiply;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  font-weight: bold;\n  font-size: 3vmin;\n  text-align: center;\n  text-decoration: none;\n  transition: 0.1s;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n}\n.button_group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:hover {\n  filter: hue-rotate(50deg);\n  text-shadow: #342101 1px 1px 10px;\n  transform: scale(1.1);\n}\n.button_group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:active {\n  transform: scale(1.2);\n}\n.button_group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:active   button[_ngcontent-%COMP%] {\n  color: white;\n}\n.button_group[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  padding: none;\n  border: none;\n  height: 100%;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n  box-shadow: none;\n}\n\n.prop[_ngcontent-%COMP%] {\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 4vmin;\n  font-family: bronzion;\n  writing-mode: vertical-rl;\n  text-orientation: upright;\n  color: rgb(193, 0, 0);\n  width: 50%;\n  height: 50%;\n  top: 0px;\n  background: url('helmet.png'), radial-gradient(black, transparent, transparent);\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  position: absolute;\n  right: -7vw;\n  transform: rotate(10deg);\n  transition: 1s;\n}\n.prop[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 8vmin;\n  font-weight: bold;\n  color: rgb(84, 87, 255);\n  transform: translateY(1vmin);\n}\n\n.danger_group[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  right: 50%;\n  width: 100%;\n  text-align: center;\n  transform: translateX(50%);\n}\n.danger_group[_ngcontent-%COMP%]   .danger[_ngcontent-%COMP%] {\n  color: rgb(216, 0, 93);\n  animation: _ngcontent-%COMP%_dangerAppear 0.3s ease-in, _ngcontent-%COMP%_dangerAnimate 0.3s ease-in-out infinite alternate;\n}\n.danger_group[_ngcontent-%COMP%]   .danger.pass_mandatory[_ngcontent-%COMP%] {\n  bottom: 0vmin;\n}\n.danger_group[_ngcontent-%COMP%]   .danger.pass_min_length[_ngcontent-%COMP%] {\n  bottom: 2vmin;\n}\n.danger_group[_ngcontent-%COMP%]   .danger.user.login_mandatory[_ngcontent-%COMP%] {\n  bottom: 4vmin;\n}\n\n@keyframes _ngcontent-%COMP%_dangerAppear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_dangerAnimate {\n  0% {\n    text-shadow: 0 0 8px rgba(0, 0, 255, 0.503);\n  }\n  50% {\n    text-shadow: 0 0 12px rgba(85, 0, 255, 0.484);\n  }\n  100% {\n    text-shadow: 0 0 5px rgba(0, 183, 255, 0.598);\n  }\n}\n.exitAnimation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_exitAnimation 1s ease-in-out;\n  animation-fill-mode: forwards;\n}\n\n@keyframes _ngcontent-%COMP%_exitAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0;\n  }\n}/*# sourceMappingURL=inscription.component.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5zY3JpcHRpb24vaW5zY3JpcHRpb24uY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvaW5zY3JpcHRpb24vaW5zY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvX3ZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNHaEI7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLDBCQUFBO0FEREY7QUNFRTtFQUNFLHNCQUFBO0FEQUo7QUNDSTtFQUNFLGtDQUFBO0FEQ047O0FDSUM7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEREY7O0FDSUM7RUFDQztJQUNFLHdCQUFBO0VEREY7RUNJQTtJQUNFLHNCQUFBO0VERkY7QUFDRjtBQ09DO0VBQ0MsVUFBQTtFQUNBLG1DQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBRExGOztBQ1NDO0VBQ0M7SUFDRSxVQUFBO0VETkY7RUNTQTtJQUNFLFVBQUE7RURQRjtBQUNGO0FDV0M7RUFDQyxhQUFBO0VBQ0UsbUJBQUE7RUFDQSx1QkFBQTtFQUNGLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFFQSw2QkFBQTtFQUNBLGdCQUFBO0VBRUEsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUVBLHFCQUFBO0VBQ0Es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 */"]
  });
}

/***/ }),

/***/ 7289:
/*!********************************************!*\
  !*** ./src/app/joueur/joueur.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JoueurComponent: () => (/* binding */ JoueurComponent)
/* harmony export */ });
/* harmony import */ var _compte_compte_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../compte/compte.component */ 3886);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class JoueurComponent extends _compte_compte_component__WEBPACK_IMPORTED_MODULE_0__.CompteComponent {
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵJoueurComponent_BaseFactory;
    return function JoueurComponent_Factory(t) {
      return (ɵJoueurComponent_BaseFactory || (ɵJoueurComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](JoueurComponent)))(t || JoueurComponent);
    };
  }();
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: JoueurComponent,
    selectors: [["app-joueur"]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
    decls: 2,
    vars: 0,
    template: function JoueurComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "joueur works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8216:
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MenuComponent: () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth.service */ 6466);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _chains_chains_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chains/chains.component */ 6175);




const _c0 = function () {
  return ["/connexion"];
};
const _c1 = function () {
  return ["/inscription"];
};
class MenuComponent {
  constructor(authService) {
    this.authService = authService;
  }
  ngOnInit() {
    this.authService.logout();
  }
  // add class to trigger exit animation on click
  exitAnimation() {
    document.querySelector(".container")?.classList.add("exitAnimation");
    console.log(document.querySelector(".container"));
  }
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-menu"]],
    decls: 15,
    vars: 4,
    consts: [[1, "container"], ["src", "../../assets/flipbook-textures/fantasy-break.png"], [1, "connect"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], ["type", "button", 3, "click"], ["id", "key"], [1, "inscript"], ["id", "feather"], [1, "chain_create"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Mythik");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2)(5, "a", 3)(6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_6_listener() {
          return ctx.exitAnimation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Se connecter");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "a", 3)(11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_11_listener() {
          return ctx.exitAnimation();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "S'inscrire");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "app-chains", 8);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive, _chains_chains_component__WEBPACK_IMPORTED_MODULE_1__.ChainsComponent],
    styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1;\n  margin: auto;\n  width: 50%;\n  height: 90%;\n  font-weight: bold;\n  text-align: center;\n  text-decoration: none;\n  background: url('scroll.png'), radial-gradient(rgb(0, 0, 0), rgb(0, 0, 0), transparent 70%, transparent);\n  background-blend-mode: lighten;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  color: #fff;\n  \n\n  transition: background-color 0.3s ease, color 0.3s ease;\n  transition: transform 0.3s ease;\n  animation: _ngcontent-%COMP%_scrollDown 1s ease-out;\n}\n.container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  z-index: 10;\n  animation: loadContainer 1s;\n}\n.container[_ngcontent-%COMP%]::before {\n  position: absolute;\n  z-index: -1;\n  content: \"\";\n  background-image: radial-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.3), rgba(1, 1, 1, 0), rgba(1, 1, 1, 0));\n  height: 100%;\n  width: 100%;\n  border-radius: 50%;\n  transition: 0.75s;\n  opacity: 0;\n}\n.container[_ngcontent-%COMP%]:hover {\n  transform: scale(1.01);\n}\n.container[_ngcontent-%COMP%]:hover   h1[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_glow 1s ease-in-out infinite alternate;\n}\n.container[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.container[_ngcontent-%COMP%]::after {\n  pointer-events: none;\n  content: \"\";\n  width: 100%;\n  height: 40vmin;\n  position: absolute;\n  opacity: 0.1;\n  background: url('tree.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 40%;\n  max-height: 7%;\n  margin: 0 auto;\n}\n\n@keyframes _ngcontent-%COMP%_scrollDown {\n  0% {\n    transform: scale(0.5) translateY(-100%);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1) translateY(0%);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_glow {\n  from {\n    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;\n  }\n  to {\n    text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;\n  }\n}\nh1[_ngcontent-%COMP%] {\n  font-family: \"bronzion\";\n  color: rgb(193, 0, 0);\n  margin-top: 5%;\n  transition: 1s;\n  font-size: 9vmin;\n}\nh1[_ngcontent-%COMP%]::first-letter {\n  color: rgb(0, 100, 0);\n  font-size: 15vmin;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  margin-top: 1vmin;\n}\n.nav-link[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 70%;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n  border: none;\n  padding: 2vmin;\n  background: url('fantasy-button.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: 0.1s;\n}\n.nav-link[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  filter: hue-rotate(50deg);\n  text-shadow: #342101 1px 1px 10px;\n  transform: scale(1.1);\n}\n.nav-link[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  color: white;\n  transform: scale(1.2);\n}\n\n#key[_ngcontent-%COMP%] {\n  content: url('key.png');\n  display: block;\n  max-width: 20vmin;\n  max-height: 30vmin;\n  width: auto;\n  height: auto;\n  position: absolute;\n  right: 10vw;\n  bottom: 0%;\n  background: radial-gradient(rgba(0, 0, 0, 0.2549019608), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 50%);\n  border-radius: 50%;\n  transform: rotate(50deg);\n  animation: _ngcontent-%COMP%_pulse 2s infinite;\n  transition: 1s;\n  z-index: 1000;\n  pointer-events: none;\n}\n\n#feather[_ngcontent-%COMP%] {\n  content: url('feather2.png');\n  display: block;\n  max-width: 25vmin;\n  max-height: 35vmin;\n  width: auto;\n  height: auto;\n  position: absolute;\n  left: 10vw;\n  bottom: 6%;\n  background: radial-gradient(rgba(0, 0, 0, 0.2549019608), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 50%);\n  transition: 1s;\n  z-index: 1000;\n  pointer-events: none;\n}\n\n.connect[_ngcontent-%COMP%]:hover   #key[_ngcontent-%COMP%] {\n  transform: scale(1.5) rotate(60deg);\n}\n\n.inscript[_ngcontent-%COMP%]:hover   #feather[_ngcontent-%COMP%] {\n  transform: scale(1.4) rotate(-10deg);\n}\n\n@keyframes _ngcontent-%COMP%_pulse {\n  0% {\n    filter: brightness(1.2);\n  }\n  50% {\n    filter: brightness(1.5);\n  }\n  100% {\n    filter: brightness(1.2);\n  }\n}\n.exitAnimation[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_exitAnimation 1s ease-in-out;\n  animation-fill-mode: forwards;\n}\n\n@keyframes _ngcontent-%COMP%_exitAnimation {\n  0% {\n    opacity: 1;\n    transform: scale(1);\n  }\n  50% {\n    opacity: 0;\n  }\n  100% {\n    transform: scale(0);\n  }\n}/*# sourceMappingURL=menu.component.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vc3JjL19taXhpbnMuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBS0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0dBQUE7RUFFQSw4QkFBQTtFQ3JCRSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RURxQkYsV0FBQTtFQUNBLHFCQUFBO0VBS0EsdURBQUE7RUFFQSwrQkFBQTtFQW1DQSxpQ0FBQTtBRTVDRjtBRmJFO0VBQ0UsV0FBQTtFQUNBLDJCQUFBO0FFZUo7QUZPRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5SEFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUVMSjtBRlFFO0VBQ0Usc0JBQUE7QUVOSjtBRlFJO0VBQ0UsaURBQUE7QUVOTjtBRlFJO0VBQ0UsVUFBQTtBRU5OO0FGU0U7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VDOURBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQ3dESjtBRlVFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FFUko7O0FGY0E7RUFDRTtJQUNFLHVDQUFBO0lBQ0EsVUFBQTtFRVhGO0VGYUE7SUFDRSxrQ0FBQTtJQUNBLFVBQUE7RUVYRjtBQUNGO0FGZUE7RUFDRTtJQUNFLG1JQUFBO0VFYkY7RUZnQkE7SUFDRSxzSUFBQTtFRWRGO0FBQ0Y7QUZpQkE7RUFDRSx1QkFBQTtFQUNBLHFCR3RHZ0I7RUh1R2hCLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUVmRjtBRmlCRTtFQUNFLHFCRzNHYztFSDRHZCxpQkFBQTtBRWZKOztBRm1CQTtFQUNFLGlCQUFBO0FFaEJGO0FGa0JFO0VBQ0UsY0FBQTtFQUNBLHFEQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FFaEJKO0FGa0JJO0VBQ0UseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0FFaEJOO0FGa0JJO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0FFaEJOOztBRnlCQTtFQUNFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnR0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUV0QkY7O0FGMEJBO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGdHQUFBO0VBRUEsY0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBRXhCRjs7QUY0QkU7RUFDRSxtQ0FBQTtBRXpCSjs7QUY4QkU7RUFDRSxvQ0FBQTtBRTNCSjs7QUYrQkE7RUFDRTtJQUNFLHVCQUFBO0VFNUJGO0VGK0JBO0lBQ0UsdUJBQUE7RUU3QkY7RUZnQ0E7SUFDRSx1QkFBQTtFRTlCRjtBQUNGO0FGbUNBO0VBQ0UsdUNBQUE7RUFDQSw2QkFBQTtBRWpDRjs7QUZvQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtFRWpDRjtFRm1DQTtJQUNFLFVBQUE7RUVqQ0Y7RUZtQ0E7SUFDRSxtQkFBQTtFRWpDRjtBQUNGLENBQUEsNkNBQUEiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 4499:
/*!**************************!*\
  !*** ./src/app/model.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Combat: () => (/* binding */ Combat),
/* harmony export */   Combattant: () => (/* binding */ Combattant),
/* harmony export */   CombattantResponse: () => (/* binding */ CombattantResponse),
/* harmony export */   Compte: () => (/* binding */ Compte),
/* harmony export */   Creature: () => (/* binding */ Creature)
/* harmony export */ });
class Compte {
  constructor(id, login, password, type, email, combattant) {
    this.id = id;
    this.login = login;
    this.password = password;
    this.type = type;
    this.email = email;
  }
}
// export class Admin extends Compte{
//     constructor(id?: number, login?: string, password?: string, email?: string) {
//         super(id, login, password, email);
//     }
// }
// export class Joueur extends Compte {
//     ;
//     constructor(id?: number, login?: string, password?: string, email?: string,  public combattant?: Array<Combattant>) {
//         super(id, login, password, email);
//     }
// }
// export class Humain extends Joueur {
//     constructor(id?: number, login?: string, password?: string, email?: string, combattant?: Array<Combattant> ){
//        super(id, login, password, email)
//     }
// }
// export class IA extends Joueur {
//     constructor(id?: number, login?: string, password?: string, combattant?: Combattant, email?: string){
//         super(id, login, password, email)
//      }
// }
class Creature {
  constructor(id, nom, description, dieu, attaque, pv, image, mythologie, typeElement) {
    this.id = id;
    this.nom = nom;
    this.description = description;
    this.dieu = dieu;
    this.attaque = attaque;
    this.pv = pv;
    this.image = image;
    this.mythologie = mythologie;
    this.typeElement = typeElement;
  }
}
class Combattant {
  constructor(id, gagnant, compte, creature, combat) {
    this.id = id;
    this.gagnant = gagnant;
    this.compte = compte;
    this.creature = creature;
    this.combat = combat;
  }
}
class CombattantResponse {}
class Combat {
  constructor(id, dateCombat, heureCombat, combattants) {
    this.id = id;
    this.dateCombat = dateCombat;
    this.heureCombat = heureCombat;
    this.combattants = combattants;
  }
}

/***/ }),

/***/ 6013:
/*!************************************!*\
  !*** ./src/app/mythologie.pipe.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MythologiePipe: () => (/* binding */ MythologiePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class MythologiePipe {
  transform(value) {
    if (value == "egyptienne") {
      return "darkyellow";
    }
    if (value == "grec") {
      return "lightgreen";
    }
    if (value == "chinoise") {
      return "lightred";
    } else {
      return "lightblue";
    }
  }
  static #_ = this.ɵfac = function MythologiePipe_Factory(t) {
    return new (t || MythologiePipe)();
  };
  static #_2 = this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
    name: "mythologie",
    type: MythologiePipe,
    pure: true
  });
}

/***/ }),

/***/ 8055:
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageNotFoundComponent: () => (/* binding */ PageNotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);

class PageNotFoundComponent {
  static #_ = this.ɵfac = function PageNotFoundComponent_Factory(t) {
    return new (t || PageNotFoundComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: PageNotFoundComponent,
    selectors: [["app-page-not-found"]],
    decls: 7,
    vars: 0,
    consts: [["id", "error_code"], ["id", "error_msg"], ["id", "skulls"], ["id", "compass"]],
    template: function PageNotFoundComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "404 ERREUR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page non trouv\u00E9e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2)(6, "img", 3);
      }
    },
    styles: ["div[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  top: 50%;\n  left: 50%;\n  width: 90%;\n  height: 90%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  padding: 10vmin;\n  background-image: url('map.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n\n#error_code[_ngcontent-%COMP%] {\n  font-family: \"Lugrasimo\";\n  font-weight: bolder;\n  color: rgba(107, 0, 50, 0.898);\n  text-shadow: 0px 0px 20px white;\n  font-size: 10vmin;\n  padding-top: 5%;\n}\n\n#error_msg[_ngcontent-%COMP%] {\n  font-family: \"bronzion\";\n  color: rgba(255, 255, 255, 0.824);\n  text-shadow: 0px 0px 20px black;\n  font-size: 10vmin;\n}\n\n#skulls[_ngcontent-%COMP%] {\n  width: 50vw;\n  position: fixed;\n  content: url('skulls.png');\n  z-index: 1;\n  bottom: 0px;\n  right: 0px;\n  transform: translate(10%, 20%);\n}\n\n#compass[_ngcontent-%COMP%] {\n  width: 20vw;\n  position: fixed;\n  content: url('compass.png');\n  z-index: 1;\n  top: 0px;\n  left: 0px;\n  transform: translate(10%, 20%);\n  filter: brightness(0.8);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUNYQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QURXSjs7QUFFQTtFQUNJLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiQHVzZSBcIi4uLy4uL21peGluc1wiIGFzICo7XG5cbmRpdntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0b3A6NTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogOTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHZtaW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uL2Fzc2V0cy9mbGlwYm9vay10ZXh0dXJlcy9tYXAucG5nKTtcbiAgICBAaW5jbHVkZSBiZy1zaW5nbGUtY29udGFpbi1jZW50ZXI7XG59XG5cbiNlcnJvcl9jb2Rle1xuICAgIGZvbnQtZmFtaWx5OiBcIkx1Z3Jhc2ltb1wiO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgY29sb3I6IHJnYmEoMTA3LCAwLCA1MCwgMC44OTgpO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDIwcHggd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMHZtaW47XG4gICAgcGFkZGluZy10b3A6IDUlO1xufVxuXG4jZXJyb3JfbXNne1xuICAgIGZvbnQtZmFtaWx5OiBcImJyb256aW9uXCI7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44MjQpO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDIwcHggYmxhY2s7XG4gICAgZm9udC1zaXplOiAxMHZtaW47XG59XG5cbiNza3VsbHN7XG4gICAgd2lkdGg6IDUwdnc7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGNvbnRlbnQ6IHVybCguLi8uLi9hc3NldHMvZmxpcGJvb2stdGV4dHVyZXMvc2t1bGxzLnBuZyk7XG4gICAgei1pbmRleDogMTtcbiAgICBib3R0b206MHB4O1xuICAgIHJpZ2h0OjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMCUsMjAlKTtcbn1cblxuI2NvbXBhc3N7XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGNvbnRlbnQ6IHVybCguLi8uLi9hc3NldHMvZmxpcGJvb2stdGV4dHVyZXMvY29tcGFzcy5wbmcpO1xuICAgIHotaW5kZXg6IDE7XG4gICAgdG9wOjBweDtcbiAgICBsZWZ0OjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMCUsMjAlKTtcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC44KTtcbn0iLCIvLyA9PT09PT09PT09PT0gU0NTUyBNSVhJTlNcbi8vIEluIFNDU1MgKFNhc3N5IENTUyksIGEgbWl4aW4gaXMgYSB3YXkgdG8gZ3JvdXAgYW5kIHJldXNlIGEgc2V0IG9mIENTUyBkZWNsYXJhdGlvbnMuIEl0IGFsbG93cyB5b3UgdG8gZGVmaW5lIGEgYmxvY2sgb2Ygc3R5bGVzIGFuZCB0aGVuIGluY2x1ZGUgdGhvc2Ugc3R5bGVzIGluIG90aGVyIHBhcnRzIG9mIHlvdXIgc3R5bGVzaGVldC4gTWl4aW5zIGhlbHAgdG8ga2VlcCB5b3VyIGNvZGUgRFJZIChEb24ndCBSZXBlYXQgWW91cnNlbGYpIGJ5IHByb21vdGluZyBjb2RlIHJldXNhYmlsaXR5LlxuXG5AbWl4aW4gYmctc2luZ2xlLWNvbnRhaW4tY2VudGVyIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 612:
/*!********************************************************!*\
  !*** ./src/app/selection-combat/combattant.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CombattantService: () => (/* binding */ CombattantService)
/* harmony export */ });
/* harmony import */ var src_environnements_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environnements/environment */ 6326);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 4860);



class CombattantService {
  constructor(http) {
    this.http = http;
  }
  findAll() {
    return this.http.get(src_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/combattant");
  }
  findById(id) {
    return this.http.get(src_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/combattant/" + id);
  }
  findByCompteId(id) {
    console.log(src_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/statistique/" + id);
    return this.http.get(src_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/combattant/statistique/" + id);
  }
  save(combattant) {
    if (combattant.id) {
      return this.http.put(src_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/combattant/" + combattant.id, combattant);
    }
    return this.http.post(src_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/combattant", combattant);
  }
  delete(id) {
    return this.http.delete(src_environnements_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl + "/combattant/" + id);
  }
  static #_ = this.ɵfac = function CombattantService_Factory(t) {
    return new (t || CombattantService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CombattantService,
    factory: CombattantService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 7342:
/*!****************************************************************!*\
  !*** ./src/app/selection-combat/selection-combat.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectionCombatComponent: () => (/* binding */ SelectionCombatComponent)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model */ 4499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _creature_creature_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../creature/creature.service */ 4176);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ 6466);
/* harmony import */ var _combattant_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./combattant.service */ 612);
/* harmony import */ var _compte_compte_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../compte/compte.service */ 9017);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _combat_combat_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../combat/combat.component */ 2483);
/* harmony import */ var _creature_data_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../creature-data.pipe */ 1166);










function SelectionCombatComponent_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "creatureData");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SelectionCombatComponent_div_1_div_12_Template_div_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r8);
      const c_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r7.creationCombattant1(c_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "creatureData");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](5, "creatureData");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "creatureData");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "creatureData");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "creatureData");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, " pv: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " pa: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("item " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 16, c_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("creature_card " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 18, c_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("name " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](5, 20, c_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 22, c_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r6.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("img " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 24, c_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", c_r6.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](12, 26, c_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r6.pv);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r6.attaque);
  }
}
function SelectionCombatComponent_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "creatureData");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "creatureData");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "creatureData");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 25)(11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "creatureData");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " Mythologie: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Element: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "creatureData");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " pv: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " pa: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("player " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 18, ctx_r3.combattant1.creature));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("nom " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 20, ctx_r3.combattant1.creature));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r3.combattant1.creature == null ? null : ctx_r3.combattant1.creature.nom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.combattant1.compte == null ? null : ctx_r3.combattant1.compte.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("illustration " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 22, ctx_r3.combattant1.creature));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r3.combattant1.creature == null ? null : ctx_r3.combattant1.creature.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.combattant1.creature == null ? null : ctx_r3.combattant1.creature.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("mythologie_element_group " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 24, ctx_r3.combattant1.creature));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.combattant1.creature == null ? null : ctx_r3.combattant1.creature.mythologie);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.combattant1.creature == null ? null : ctx_r3.combattant1.creature.typeElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 26, ctx_r3.combattant1.creature));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.combattant1.creature == null ? null : ctx_r3.combattant1.creature.pv);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.combattant1.creature == null ? null : ctx_r3.combattant1.creature.attaque);
  }
}
function SelectionCombatComponent_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29)(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SelectionCombatComponent_div_1_div_26_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r9.goCombat());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Combat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function SelectionCombatComponent_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "creatureData");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "creatureData");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](8, "creatureData");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 25)(11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, " Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](16, "creatureData");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, " Mythologie: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, " Element: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](26, "creatureData");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, " pv: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, " pa: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("adv " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 18, ctx_r5.combattant2.creature));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("nom " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 20, ctx_r5.combattant2.creature));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r5.combattant2.creature == null ? null : ctx_r5.combattant2.creature.nom, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.combattant2.compte == null ? null : ctx_r5.combattant2.compte.login);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("illustration " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](8, 22, ctx_r5.combattant2.creature));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx_r5.combattant2.creature == null ? null : ctx_r5.combattant2.creature.image, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.combattant2.creature == null ? null : ctx_r5.combattant2.creature.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"]("mythologie_element_group " + _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](16, 24, ctx_r5.combattant2.creature));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.combattant2.creature == null ? null : ctx_r5.combattant2.creature.mythologie);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.combattant2.creature == null ? null : ctx_r5.combattant2.creature.typeElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](26, 26, ctx_r5.combattant2.creature));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.combattant2.creature == null ? null : ctx_r5.combattant2.creature.pv);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r5.combattant2.creature == null ? null : ctx_r5.combattant2.creature.attaque);
  }
}
const _c0 = function () {
  return ["/accueil"];
};
function SelectionCombatComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 2)(1, "h1", 3)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Selection");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Creatures");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SelectionCombatComponent_div_1_Template_a_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.creationCombattants_skip());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " SKIP SELECTION ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "(randomize)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, SelectionCombatComponent_div_1_div_12_Template, 21, 28, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 8)(15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "div", 12)(19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, SelectionCombatComponent_div_1_div_21_Template, 35, 28, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 16)(23, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SelectionCombatComponent_div_1_Template_a_click_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r13.creationCombattant2());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Trouver un adversaire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, SelectionCombatComponent_div_1_div_26_Template, 4, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function SelectionCombatComponent_div_1_Template_a_click_27_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.goBack());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, " Retour ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](30, SelectionCombatComponent_div_1_div_30_Template, 35, 28, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](13, 5, ctx_r0.list()));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.combattant1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.cb1 && ctx_r0.cb2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r0.combattant2);
  }
}
function SelectionCombatComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-combat", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("combattant1", ctx_r1.combattant1)("combattant2", ctx_r1.combattant2);
  }
}
class SelectionCombatComponent {
  constructor(creatureService, router, authService, combattantService, compteService) {
    this.creatureService = creatureService;
    this.router = router;
    this.authService = authService;
    this.combattantService = combattantService;
    this.compteService = compteService;
    this.ready = false;
    this.creationCombattant = true;
    this.cb1 = false;
    this.cb2 = false;
    this.load();
    this.combattant1 = new _model__WEBPACK_IMPORTED_MODULE_0__.Combattant();
    this.combattant2 = new _model__WEBPACK_IMPORTED_MODULE_0__.Combattant();
  }
  load() {
    this.creatures$ = this.creatureService.findAll();
    this.creatures$.subscribe(resp => {
      this.creatures = resp;
    });
    this.Ia$ = this.compteService.findIA();
    this.Ia$.subscribe(resp => {
      this.Ia = resp;
    });
  }
  list() {
    return this.creatures$;
  }
  creationCombattant1(creature) {
    this.combattant1.compte = this.authService.getCompte();
    this.combattant1.creature = creature;
    this.cb1 = true;
    const player = document.querySelector(".player");
    console.log(player);
    player.classList.remove("combattantAppear");
    setTimeout(() => {
      player.classList.add('combattantAppear');
    }, 0);
    this.activateBook();
  }
  // function to skip selection in order to reach combat faster
  creationCombattants_skip() {
    let c_length = this.creatures.length;
    // let c_length = 10;
    let nb1 = Math.floor(Math.random() * c_length);
    let nb2;
    do {
      nb2 = Math.floor(Math.random() * c_length);
    } while (nb2 == nb1); // ensure that player and adv creatures are different
    this.combattant1.compte = this.authService.getCompte();
    this.combattant1.creature = this.creatures[nb1];
    this.cb1 = true;
    this.combattant2.compte = this.Ia;
    this.combattant2.creature = this.creatures[nb2];
    this.cb2 = true;
    console.log(this.combattant1);
    console.log(this.combattant2);
    this.goCombat();
  }
  // trigger skip automatically on init
  ngOnInit() {
    console.log("skipping selection step on component init");
    setTimeout(() => {
      this.creationCombattants_skip();
    }, 250);
  }
  creationCombattant2() {
    let nb = Math.floor(Math.random() * this.creatures.length);
    this.combattant2.creature = this.creatures[nb];
    this.combattant2.compte = this.Ia;
    console.log(this.Ia);
    console.log(this.combattant2);
    this.cb2 = true;
    const adv = document.querySelector(".adv");
    console.log(adv);
    adv.classList.remove("combattantAppear");
    setTimeout(() => {
      adv.classList.add('combattantAppear');
    }, 0);
    this.activateBook();
  }
  // turn on book effects upon interaction
  activateBook() {
    // If EITHER combatent is chosen
    if (this.combattant1.creature != null || this.combattant2.creature != null) {
      let book = document.querySelector("#book_deco");
      book?.classList.add("activeBookFirst");
    }
    // If BOTH combatents are chosen
    if (this.combattant1.creature != null && this.combattant2.creature != null) {
      let book = document.querySelector("#book_deco");
      book?.classList.add("activeBookSecond");
      let player = document.querySelector(".player .illustration");
      let adv = document.querySelector(".adv .illustration");
      player?.classList.add("activeBookSecond");
      adv?.classList.add("activeBookSecond");
    }
  }
  goCombat() {
    let book = document.querySelector("#book_deco");
    book?.classList.add("activeBookGo");
    setTimeout(() => {
      this.ready = true;
      this.creationCombattant = false;
    }, 500);
  }
  goBack() {
    let creation_screen = document.querySelector("#creation_combattant_screen");
    creation_screen?.classList.add("goBack");
  }
  static #_ = this.ɵfac = function SelectionCombatComponent_Factory(t) {
    return new (t || SelectionCombatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_creature_creature_service__WEBPACK_IMPORTED_MODULE_1__.CreatureService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_combattant_service__WEBPACK_IMPORTED_MODULE_3__.CombattantService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_compte_compte_service__WEBPACK_IMPORTED_MODULE_4__.CompteService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: SelectionCombatComponent,
    selectors: [["app-selection-combat"]],
    decls: 3,
    vars: 2,
    consts: [["id", "creation_combattant_screen", 4, "ngIf"], [4, "ngIf"], ["id", "creation_combattant_screen"], [1, "selection_title"], ["id", "skip_btn", 3, "click"], ["type", "button", 1, "button"], [1, "selectionCreatureContainer"], [3, "class", 4, "ngFor", "ngForOf"], [1, "creationCombattant"], ["id", "battle_book"], ["src", "../../assets/flipbook-textures/book_open.png"], ["id", "book_deco"], ["id", "magic_ring"], ["id", "magic_vortex"], [1, "creationCombattantInnerContainer"], [3, "class", 4, "ngIf"], [1, "buttons"], ["id", "adv_btn", 3, "click"], ["id", "combat_btn", 4, "ngIf"], ["routerLinkActive", "active", "id", "retour_btn", 3, "routerLink", "click"], [3, "click"], [3, "src"], [1, "pv"], [1, "attaque"], [1, "login"], [1, "creature_info"], [1, "description"], [1, "mythologie"], [1, "element"], ["id", "combat_btn"], [1, "adv_img", 3, "src"], [3, "combattant1", "combattant2"]],
    template: function SelectionCombatComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, SelectionCombatComponent_div_1_Template, 31, 8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, SelectionCombatComponent_div_2_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.creationCombattant);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.ready);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _combat_combat_component__WEBPACK_IMPORTED_MODULE_5__.CombatComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe, _creature_data_pipe__WEBPACK_IMPORTED_MODULE_6__.CreatureDataPipe],
    styles: ["@charset \"UTF-8\";\nsection[_ngcontent-%COMP%] {\n  overflow: auto;\n  width: 100vw;\n  \n\n  height: 100vh;\n  cursor: url('middle-ages-cursor-32x32.png'), pointer;\n  \n\n\n\n  animation: _ngcontent-%COMP%_sectionAppear 5s;\n}\n\n@keyframes _ngcontent-%COMP%_sectionAppear {\n  from {\n    background-color: black;\n  }\n  to {\n    background-color: transparent;\n  }\n}\nh1.selection_title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: rgba(245, 245, 220, 0.555);\n  border-radius: 10px;\n  padding: 5px;\n  margin: 30px 100px;\n  background: url('scroll_combat.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 300px;\n  position: relative;\n  animation: _ngcontent-%COMP%_scrollAppear 1s;\n}\nh1.selection_title[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-family: \"bronzion\";\n  z-index: 1;\n  color: rgb(71, 0, 0);\n}\nh1.selection_title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  display: block;\n}\nh1.selection_title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2)::first-letter {\n  color: rgb(0, 100, 0);\n  font-size: 60px;\n}\nh1.selection_title[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 0;\n  width: 100%;\n  height: 65%;\n  background: url('knight_horse.png'), rgb(193, 0, 0);\n  background-blend-mode: lighten;\n  transform: scaleX(1);\n  opacity: 0.5;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  -webkit-mask-image: url('knight_horse.png');\n          mask-image: url('knight_horse.png');\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  mask-mode: alpha;\n  -webkit-mask-position: center;\n          mask-position: center;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n}\n\n@keyframes _ngcontent-%COMP%_scrollAppear {\n  0% {\n    transform: scaleX(0.7);\n    opacity: 0;\n  }\n  80% {\n    transform: scaleX(1.1);\n  }\n  100% {\n    transform: scaleX(1);\n    opacity: 1;\n  }\n}\n.selectionCreatureContainer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  margin-top: 3vmin;\n  gap: 3vmin;\n  font-family: \"lugrasimo\";\n  text-align: center;\n  font-weight: bold;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  height: 50vh;\n  aspect-ratio: 2.1/3;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n  background-size: contain;\n  animation: _ngcontent-%COMP%_creatureAppear 1s;\n  opacity: 0;\n  animation-fill-mode: forwards;\n  position: relative;\n  z-index: 1;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item.feu[_ngcontent-%COMP%] {\n  background: url('fire_ring.gif');\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item.eau[_ngcontent-%COMP%] {\n  background: url('water_ring.gif');\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item.terre[_ngcontent-%COMP%] {\n  background: url('earth_ring.gif');\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item.air[_ngcontent-%COMP%] {\n  background: url('air_ring.gif');\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item.feu[_ngcontent-%COMP%], .selectionCreatureContainer[_ngcontent-%COMP%]   .item.eau[_ngcontent-%COMP%], .selectionCreatureContainer[_ngcontent-%COMP%]   .item.terre[_ngcontent-%COMP%], .selectionCreatureContainer[_ngcontent-%COMP%]   .item.air[_ngcontent-%COMP%] {\n  padding: 1%;\n  background-size: 0% 0%;\n  background-repeat: no-repeat;\n  background-position: center;\n  transition: background-size 3s;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:active {\n  background-size: 100% 90%;\n  transition: 0.1s;\n  z-index: 1000;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .creature_card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  height: 100%;\n  width: 100%;\n  transition: 1s;\n  position: relative;\n  z-index: 1;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .creature_card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.02);\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .creature_card[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n  filter: saturate(1.1);\n  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  pointer-events: none;\n  inset: -5px;\n  \n\n  transform: translate(0.5vw, 0.5vh);\n  \n\n  z-index: -100;\n  \n\n  background: radial-gradient(black, transparent);\n  filter: blur(10px);\n  \n\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 75%;\n  max-height: 50%;\n  transition: 0.5s;\n  filter: sepia(0.75);\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img.grec[_ngcontent-%COMP%] {\n  border-image: url('_-_-assets-flipbook-textures-symbol_greek.png') 100% 100%/2vmin 2vmin/2vmin round;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img.chinoise[_ngcontent-%COMP%] {\n  border-image: url('symbol_chinese.png') 100% 100%/2vmin 2vmin/2vmin round;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img.nordique[_ngcontent-%COMP%] {\n  border-image: url('_-_-assets-flipbook-textures-symbol_nordic.png') 100% 100%/2vmin 2vmin/2vmin round;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   img.egyptienne[_ngcontent-%COMP%] {\n  border-image: url('_-_-assets-flipbook-textures-symbol_egyptian.png') 100% 100%/2vmin 2vmin/2vmin round;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  background: url('fantasy-button.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  font-size: 3vmin;\n  margin-top: 2vmin;\n  width: 70%;\n  height: 20%;\n  line-height: 100%;\n  display: grid;\n  align-items: center;\n  transition: 0.2s;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name.feu[_ngcontent-%COMP%] {\n  color: red;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name.eau[_ngcontent-%COMP%] {\n  color: blue;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name.terre[_ngcontent-%COMP%] {\n  color: green;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name.air[_ngcontent-%COMP%] {\n  color: yellow;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name.dieu[_ngcontent-%COMP%] {\n  border-image: url('laurel.png') 0% 55%/0 40%/2vmin round;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   span.chinoise[_ngcontent-%COMP%] {\n  border-image: url('pattern_border.png') 50% 50%/3vmin 3vmin/1vmin round;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   span.grec[_ngcontent-%COMP%] {\n  border-image: url('caryatid_frame.png') 50% 50%/3vmin 2vmin/1vmin round;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   span.egyptienne[_ngcontent-%COMP%] {\n  border-image: url('egyptian_pattern_filled.png') 50% 50%/3vmin 4vmin/1vmin round;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   span.nordique[_ngcontent-%COMP%] {\n  border-image: url('celtic-knot.png') 50% 50%/3vmin 4vmin/1vmin round;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-letter {\n  display: block;\n  font-family: bronzion;\n  color: rgb(193, 0, 0);\n  font-size: 4vmin;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   span.dieu[_ngcontent-%COMP%]:first-letter {\n  text-shadow: 0 0 1px white, 0 0 1px white, 0 0 5px gold, 0 0 10px black, 0 0 10px black;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 0 0.25vw;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style-type: none;\n  margin-bottom: 2vh;\n  border: 0.1px dotted rgba(86, 41, 41, 0.333);\n  background-color: rgba(255, 255, 255, 0.333);\n  transition: 0.3s;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 217, 0, 0.805);\n  text-shadow: 0 0 1px black, 0 0 10px black, 0 0 10px black, 0 0 10px black;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover {\n  transform: scale(1.4);\n  background-color: white;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul.feu[_ngcontent-%COMP%], .selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul.air[_ngcontent-%COMP%], .selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul.terre[_ngcontent-%COMP%], .selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul.eau[_ngcontent-%COMP%] {\n  background-blend-mode: darken;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul.feu[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0.25turn, transparent 40%, red, transparent 60%), url('element_fire.png');\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul.eau[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0.25turn, transparent 40%, blue, transparent 60%), url('element_water.png');\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul.terre[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0.25turn, transparent 40%, green, transparent 60%), url('element_earth.png');\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul.air[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0.25turn, transparent 40%, yellow, transparent 60%), url('element_air.png');\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: xx-small;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgb(71, 0, 0);\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   .name[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n  color: rgb(255, 236, 128) !important;\n  text-shadow: 0 0 10px black, 0 0 15px rgb(0, 100, 0), 0 0 10px black;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  color: rgb(193, 0, 0);\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover.nordique {\n  border-image: url('runes2.png') 40% 40%/8vmin 8vmin/2vmin round repeat;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover.chinoise {\n  border-image: url('papercut3.png') 29% 30.1%/8vmin 8vmin/2vmin round repeat;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover.grec {\n  border-image: url('temple2.png') 25% 25%/8vmin 8vmin/2vmin round repeat;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover.egyptienne {\n  border-image: url('hieroglyphs.png') 25% 25%/8vmin 8vmin/2vmin round repeat;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:active   .name[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n  color: gold !important;\n  text-shadow: 0px 0px 30px black;\n  text-shadow: 0 0 10px black, 0 0 15px rgb(0, 100, 0), 0 0 15px rgb(0, 100, 0), 0 0 10px black;\n}\n.selectionCreatureContainer[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:active   img[_ngcontent-%COMP%] {\n  filter: brightness(1.2) !important;\n  position: relative;\n}\n\n@keyframes _ngcontent-%COMP%_creatureAppear {\n  from {\n    transform: scale(2) rotate(25deg) translateY(100%);\n    opacity: 0;\n    pointer-events: none;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n    pointer-events: all;\n  }\n}\n.item[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: calc(1 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(1)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_8.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(-1deg);\n  filter: hue-rotate(-17deg) brightness(1.08);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: calc(2 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(2)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_8.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(2deg);\n  filter: hue-rotate(-6deg) brightness(1.01);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: calc(3 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(3)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_4.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(4deg);\n  filter: hue-rotate(-6deg) brightness(1.08);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: calc(4 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(4)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_1.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(3deg);\n  filter: hue-rotate(-4deg) brightness(1.03);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: calc(5 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(5)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_3.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(1) rotate(0deg);\n  filter: hue-rotate(-4deg) brightness(1.06);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: calc(6 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(6)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_6.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(-4deg);\n  filter: hue-rotate(-6deg) brightness(0.91);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(7) {\n  animation-delay: calc(7 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(7)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_6.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(-1deg);\n  filter: hue-rotate(-6deg) brightness(1);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(8) {\n  animation-delay: calc(8 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(8)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_11.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(-3deg);\n  filter: hue-rotate(-4deg) brightness(1.06);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(9) {\n  animation-delay: calc(9 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(9)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_1.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(1) rotate(-1deg);\n  filter: hue-rotate(-8deg) brightness(1.06);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(10) {\n  animation-delay: calc(10 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(10)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_6.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(-1deg);\n  filter: hue-rotate(0deg) brightness(1);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(11) {\n  animation-delay: calc(11 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(11)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_1.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(-3deg);\n  filter: hue-rotate(-10deg) brightness(0.96);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(12) {\n  animation-delay: calc(12 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(12)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_7.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(-2deg);\n  filter: hue-rotate(-5deg) brightness(1.05);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(13) {\n  animation-delay: calc(13 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(13)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_5.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(-4deg);\n  filter: hue-rotate(-8deg) brightness(0.93);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(14) {\n  animation-delay: calc(14 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(14)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_4.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(3deg);\n  filter: hue-rotate(0deg) brightness(0.97);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(15) {\n  animation-delay: calc(15 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(15)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_6.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(1) rotate(1deg);\n  filter: hue-rotate(-2deg) brightness(0.97);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(16) {\n  animation-delay: calc(16 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(16)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_4.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(1) rotate(4deg);\n  filter: hue-rotate(-19deg) brightness(1.03);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(17) {\n  animation-delay: calc(17 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(17)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_9.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(2deg);\n  filter: hue-rotate(-8deg) brightness(1.08);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(18) {\n  animation-delay: calc(18 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(18)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_11.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(5deg);\n  filter: hue-rotate(-14deg) brightness(1.04);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(19) {\n  animation-delay: calc(19 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(19)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_7.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(1) rotate(1deg);\n  filter: hue-rotate(-8deg) brightness(1.07);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(20) {\n  animation-delay: calc(20 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(20)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_8.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(-1deg);\n  filter: hue-rotate(-19deg) brightness(0.96);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(21) {\n  animation-delay: calc(21 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(21)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_3.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(1) rotate(1deg);\n  filter: hue-rotate(-13deg) brightness(1.09);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(22) {\n  animation-delay: calc(22 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(22)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_1.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(0deg);\n  filter: hue-rotate(-1deg) brightness(1.1);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(23) {\n  animation-delay: calc(23 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(23)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_5.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(-3deg);\n  filter: hue-rotate(-3deg) brightness(1.01);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(24) {\n  animation-delay: calc(24 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(24)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_3.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(-4deg);\n  filter: hue-rotate(-8deg) brightness(1.06);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(25) {\n  animation-delay: calc(25 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(25)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_8.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(5deg);\n  filter: hue-rotate(-17deg) brightness(1.08);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(26) {\n  animation-delay: calc(26 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(26)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_7.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(5deg);\n  filter: hue-rotate(-11deg) brightness(1.06);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(27) {\n  animation-delay: calc(27 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(27)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_4.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(1) rotate(-2deg);\n  filter: hue-rotate(0deg) brightness(0.97);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(28) {\n  animation-delay: calc(28 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(28)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_4.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(0deg);\n  filter: hue-rotate(-1deg) brightness(1.08);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(29) {\n  animation-delay: calc(29 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(29)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_8.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(4deg);\n  filter: hue-rotate(-17deg) brightness(1.1);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(30) {\n  animation-delay: calc(30 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(30)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_2.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(-3deg);\n  filter: hue-rotate(-10deg) brightness(0.93);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(31) {\n  animation-delay: calc(31 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(31)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_6.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(2deg);\n  filter: hue-rotate(-11deg) brightness(1.06);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(32) {\n  animation-delay: calc(32 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(32)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_9.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(1deg);\n  filter: hue-rotate(-1deg) brightness(0.92);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(33) {\n  animation-delay: calc(33 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(33)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_9.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(1) rotate(1deg);\n  filter: hue-rotate(-1deg) brightness(1);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(34) {\n  animation-delay: calc(34 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(34)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_10.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(1) rotate(2deg);\n  filter: hue-rotate(-13deg) brightness(1.09);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(35) {\n  animation-delay: calc(35 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(35)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_5.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(-3deg);\n  filter: hue-rotate(0deg) brightness(0.92);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(36) {\n  animation-delay: calc(36 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(36)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_11.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(0deg);\n  filter: hue-rotate(-12deg) brightness(0.91);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(37) {\n  animation-delay: calc(37 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(37)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_9.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(-4deg);\n  filter: hue-rotate(-13deg) brightness(1.01);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(38) {\n  animation-delay: calc(38 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(38)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_3.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(2deg);\n  filter: hue-rotate(-2deg) brightness(0.96);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(39) {\n  animation-delay: calc(39 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(39)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_10.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(4deg);\n  filter: hue-rotate(-17deg) brightness(1.01);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(40) {\n  animation-delay: calc(40 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(40)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_8.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(-1deg);\n  filter: hue-rotate(-8deg) brightness(1.03);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(41) {\n  animation-delay: calc(41 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(41)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_5.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(0deg);\n  filter: hue-rotate(-1deg) brightness(1);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(42) {\n  animation-delay: calc(42 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(42)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_5.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(-4deg);\n  filter: hue-rotate(-8deg) brightness(1.08);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(43) {\n  animation-delay: calc(43 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(43)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_7.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(4deg);\n  filter: hue-rotate(-19deg) brightness(0.96);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(44) {\n  animation-delay: calc(44 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(44)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_3.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(1) rotate(3deg);\n  filter: hue-rotate(-15deg) brightness(1.04);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(45) {\n  animation-delay: calc(45 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(45)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_5.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(3deg);\n  filter: hue-rotate(-14deg) brightness(1.01);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(46) {\n  animation-delay: calc(46 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(46)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_6.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(5deg);\n  filter: hue-rotate(-18deg) brightness(0.98);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(47) {\n  animation-delay: calc(47 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(47)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_5.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(1) rotate(-2deg);\n  filter: hue-rotate(-7deg) brightness(1.02);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(48) {\n  animation-delay: calc(48 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(48)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_6.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(0deg);\n  filter: hue-rotate(-1deg) brightness(0.91);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(49) {\n  animation-delay: calc(49 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(49)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_5.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(1deg);\n  filter: hue-rotate(-16deg) brightness(0.95);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(50) {\n  animation-delay: calc(50 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(50)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_11.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(1) rotate(-1deg);\n  filter: hue-rotate(-5deg) brightness(0.96);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(51) {\n  animation-delay: calc(51 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(51)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_5.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(3deg);\n  filter: hue-rotate(-17deg) brightness(1.06);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(52) {\n  animation-delay: calc(52 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(52)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_1.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(5deg);\n  filter: hue-rotate(-17deg) brightness(1.01);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(53) {\n  animation-delay: calc(53 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(53)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_4.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(0deg);\n  filter: hue-rotate(-15deg) brightness(1.01);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(54) {\n  animation-delay: calc(54 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(54)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_4.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(3deg);\n  filter: hue-rotate(-4deg) brightness(1.08);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(55) {\n  animation-delay: calc(55 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(55)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_9.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(1deg);\n  filter: hue-rotate(-17deg) brightness(1);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(56) {\n  animation-delay: calc(56 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(56)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_6.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(2deg);\n  filter: hue-rotate(-19deg) brightness(0.97);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(57) {\n  animation-delay: calc(57 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(57)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_7.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(1) rotate(-2deg);\n  filter: hue-rotate(0deg) brightness(1.09);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(58) {\n  animation-delay: calc(58 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(58)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_4.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(1deg);\n  filter: hue-rotate(-9deg) brightness(1.09);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(59) {\n  animation-delay: calc(59 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(59)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_1.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(-1deg);\n  filter: hue-rotate(-15deg) brightness(1.09);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(60) {\n  animation-delay: calc(60 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(60)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_4.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(1deg);\n  filter: hue-rotate(-10deg) brightness(1);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(61) {\n  animation-delay: calc(61 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(61)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_2.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(3deg);\n  filter: hue-rotate(-18deg) brightness(1.09);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(62) {\n  animation-delay: calc(62 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(62)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_4.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(2deg);\n  filter: hue-rotate(-6deg) brightness(0.92);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(63) {\n  animation-delay: calc(63 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(63)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_6.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(3deg);\n  filter: hue-rotate(-5deg) brightness(1.01);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(64) {\n  animation-delay: calc(64 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(64)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_7.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(-1deg);\n  filter: hue-rotate(-15deg) brightness(1.04);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(65) {\n  animation-delay: calc(65 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(65)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_3.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(5deg);\n  filter: hue-rotate(-5deg) brightness(1.08);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(66) {\n  animation-delay: calc(66 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(66)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_6.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(1deg);\n  filter: hue-rotate(-6deg) brightness(1.03);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(67) {\n  animation-delay: calc(67 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(67)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_6.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(2deg);\n  filter: hue-rotate(-2deg) brightness(0.96);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(68) {\n  animation-delay: calc(68 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(68)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_8.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(-3deg);\n  filter: hue-rotate(-19deg) brightness(0.93);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(69) {\n  animation-delay: calc(69 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(69)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_7.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(0deg);\n  filter: hue-rotate(-19deg) brightness(0.99);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(70) {\n  animation-delay: calc(70 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(70)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_8.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(0deg);\n  filter: hue-rotate(-14deg) brightness(0.93);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(71) {\n  animation-delay: calc(71 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(71)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_9.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(-2deg);\n  filter: hue-rotate(-19deg) brightness(1.07);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(72) {\n  animation-delay: calc(72 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(72)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_8.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(1deg);\n  filter: hue-rotate(-1deg) brightness(1.07);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(73) {\n  animation-delay: calc(73 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(73)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_8.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(-3deg);\n  filter: hue-rotate(-11deg) brightness(1.01);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(74) {\n  animation-delay: calc(74 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(74)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_10.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(-2deg);\n  filter: hue-rotate(-18deg) brightness(1);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(75) {\n  animation-delay: calc(75 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(75)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_3.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(1deg);\n  filter: hue-rotate(0deg) brightness(0.98);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(76) {\n  animation-delay: calc(76 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(76)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_10.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(1) rotate(3deg);\n  filter: hue-rotate(-7deg) brightness(1.01);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(77) {\n  animation-delay: calc(77 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(77)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_2.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(5deg);\n  filter: hue-rotate(-18deg) brightness(0.94);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(78) {\n  animation-delay: calc(78 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(78)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_6.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(1) rotate(-1deg);\n  filter: hue-rotate(-4deg) brightness(1.04);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(79) {\n  animation-delay: calc(79 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(79)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_4.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(0deg);\n  filter: hue-rotate(-12deg) brightness(0.95);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(80) {\n  animation-delay: calc(80 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(80)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_7.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(5deg);\n  filter: hue-rotate(-14deg) brightness(1.1);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(81) {\n  animation-delay: calc(81 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(81)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_2.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(-3deg);\n  filter: hue-rotate(-18deg) brightness(1.07);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(82) {\n  animation-delay: calc(82 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(82)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_6.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(4deg);\n  filter: hue-rotate(-4deg) brightness(1.08);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(83) {\n  animation-delay: calc(83 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(83)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_2.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(1deg);\n  filter: hue-rotate(-10deg) brightness(1.08);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(84) {\n  animation-delay: calc(84 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(84)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_1.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(4deg);\n  filter: hue-rotate(-7deg) brightness(0.99);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(85) {\n  animation-delay: calc(85 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(85)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_9.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(-2deg);\n  filter: hue-rotate(-2deg) brightness(1.08);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(86) {\n  animation-delay: calc(86 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(86)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_1.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(3deg);\n  filter: hue-rotate(-13deg) brightness(1.02);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(87) {\n  animation-delay: calc(87 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(87)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_7.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(3deg);\n  filter: hue-rotate(-17deg) brightness(0.94);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(88) {\n  animation-delay: calc(88 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(88)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_11.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(-2deg);\n  filter: hue-rotate(-9deg) brightness(0.98);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(89) {\n  animation-delay: calc(89 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(89)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_5.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(4deg);\n  filter: hue-rotate(-18deg) brightness(1);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(90) {\n  animation-delay: calc(90 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(90)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_11.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(-2deg);\n  filter: hue-rotate(-14deg) brightness(1.05);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(91) {\n  animation-delay: calc(91 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(91)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_4.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(-3deg);\n  filter: hue-rotate(-13deg) brightness(1.02);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(92) {\n  animation-delay: calc(92 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(92)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_11.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(1) rotate(-2deg);\n  filter: hue-rotate(-17deg) brightness(1.07);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(93) {\n  animation-delay: calc(93 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(93)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_7.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(0deg);\n  filter: hue-rotate(-6deg) brightness(1.04);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(94) {\n  animation-delay: calc(94 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(94)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_10.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(2deg);\n  filter: hue-rotate(0deg) brightness(0.95);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(95) {\n  animation-delay: calc(95 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(95)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_9.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(-1deg);\n  filter: hue-rotate(-1deg) brightness(0.99);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(96) {\n  animation-delay: calc(96 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(96)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_8.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(1) scaleY(-1) rotate(-1deg);\n  filter: hue-rotate(-11deg) brightness(1.09);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(97) {\n  animation-delay: calc(97 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(97)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_5.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(4deg);\n  filter: hue-rotate(-5deg) brightness(0.99);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(98) {\n  animation-delay: calc(98 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(98)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_9.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(4deg);\n  filter: hue-rotate(-18deg) brightness(1.06);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(99) {\n  animation-delay: calc(99 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(99)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_10.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(1) rotate(-2deg);\n  filter: hue-rotate(-1deg) brightness(0.99);\n}\n\n.item[_ngcontent-%COMP%]:nth-child(100) {\n  animation-delay: calc(100 * 0.2s + 1s) !important;\n}\n.item[_ngcontent-%COMP%]:nth-child(100)   .creature_card[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  z-index: -100;\n  width: 100%;\n  height: 100%;\n  top: 0px;\n  left: 0px;\n  background-image: url('card_7.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: scaleX(-1) scaleY(-1) rotate(0deg);\n  filter: hue-rotate(-3deg) brightness(1.09);\n}\n\n.creationCombattant[_ngcontent-%COMP%] {\n  margin-top: 50vh;\n  margin-bottom: 50vh;\n  opacity: 0;\n  animation: _ngcontent-%COMP%_combattantsSubsectionAppear 1s forwards 1s;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  align-content: center;\n  justify-content: center;\n  position: relative;\n  z-index: 0;\n}\n\n#battle_book[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#battle_book[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 20%;\n  height: 100%;\n  background: radial-gradient(ellipse closest-side, black, transparent);\n  position: absolute;\n  opacity: 0.1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n}\n#battle_book[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  opacity: 1;\n  position: absolute;\n  z-index: -1;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  transform-origin: center;\n}\n#battle_book[_ngcontent-%COMP%]   img.adv_img[_ngcontent-%COMP%] {\n  transform: scaleX(-1) translate(50%, -50%);\n}\n#battle_book[_ngcontent-%COMP%]   #book_deco[_ngcontent-%COMP%] {\n  display: block;\n  width: 30%;\n  height: 0;\n  padding-bottom: 30%;\n  margin: auto;\n  opacity: 0.75;\n  background: url('zodiac_arena.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  pointer-events: none;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 1000;\n}\n#battle_book[_ngcontent-%COMP%]   #book_deco.activeBookSecond[_ngcontent-%COMP%] {\n  background: url('zodiac_arena.png'), radial-gradient(circle closest-side, rgb(255, 235, 120) 3%, gold, white 95%, transparent), url('earth_ring.gif');\n  background-blend-mode: multiply;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n#battle_book[_ngcontent-%COMP%]   #book_deco[_ngcontent-%COMP%]   #magic_ring[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: radial-gradient(ellipse closest-side, black, transparent), url('zodiac_ring.png');\n  border-radius: 100%;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  opacity: 0.2;\n  transform: scale(1.3);\n  animation: _ngcontent-%COMP%_magicRing1 60s infinite linear;\n  transform-origin: center;\n}\n#battle_book[_ngcontent-%COMP%]   #book_deco.activeBookFirst[_ngcontent-%COMP%]   #magic_ring[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_magicRing2 6s infinite linear;\n}\n#battle_book[_ngcontent-%COMP%]   #book_deco.activeBookSecond[_ngcontent-%COMP%]   #magic_ring[_ngcontent-%COMP%] {\n  animation-duration: 3s;\n}\n#battle_book[_ngcontent-%COMP%]   #book_deco[_ngcontent-%COMP%]   #magic_vortex[_ngcontent-%COMP%] {\n  background-color: red;\n  width: 100%;\n  height: 100%;\n  background: url('vortex.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: _ngcontent-%COMP%_magicVortex 3s infinite linear;\n  z-index: -1;\n  opacity: 0;\n  transition: 0.5s;\n}\n#battle_book[_ngcontent-%COMP%]   #book_deco.activeBookSecond[_ngcontent-%COMP%]   #magic_vortex[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n#battle_book[_ngcontent-%COMP%]   #book_deco.activeBookGo[_ngcontent-%COMP%] {\n  filter: blur(10px) contrast(2) brightness(5);\n  opacity: 0 !important;\n  transition: 0.5s !important;\n}\n#battle_book[_ngcontent-%COMP%]   #book_deco.activeBookGo[_ngcontent-%COMP%]   #magic_vortex[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n}\n#battle_book[_ngcontent-%COMP%]   #book_deco.activeBookGo[_ngcontent-%COMP%]   #magic_ring[_ngcontent-%COMP%] {\n  animation-duration: 2s;\n}\n\n@keyframes _ngcontent-%COMP%_magicRing1 {\n  0% {\n    transform: rotate(0deg) scale(1.3);\n  }\n  100% {\n    transform: rotate(360deg) scale(1.3);\n  }\n}\n@keyframes _ngcontent-%COMP%_magicRing2 {\n  0% {\n    transform: rotate(0deg) scale(1.3);\n    filter: blur(3px) brightness(0.3) drop-shadow(0px 0px 20px rgb(60, 0, 255));\n    box-shadow: 1px 1px 1px green, 1px 1px 5px green;\n  }\n  50% {\n    transform: rotate(180deg) scale(1.2, 1.4);\n    filter: blur(1px) brightness(10) drop-shadow(0px 0px 20px red) contrast(100);\n    box-shadow: 0px 0px 1px blue, 0px 0px 5px blue;\n  }\n  100% {\n    transform: rotate(360deg) scale(1.3);\n    filter: blur(3px) brightness(0.3) drop-shadow(0px 0px 20px rgb(17, 255, 0));\n    box-shadow: -1px -1px 1px red, -1px -1px 5px red;\n  }\n}\n@keyframes _ngcontent-%COMP%_magicVortex {\n  0% {\n    transform: rotate(0deg) scale(0.25, 0.3);\n    filter: blur(10px) brightness(0.3) drop-shadow(0px 0px 20px rgb(60, 0, 255));\n  }\n  50% {\n    transform: rotate(180deg) scale(0.3, 0.25);\n    filter: blur(5px) brightness(10) drop-shadow(0px 0px 20px red);\n  }\n  100% {\n    transform: rotate(360deg) scale(0.25, 0.3);\n    filter: blur(10px) brightness(0.3) drop-shadow(0px 0px 20px rgb(17, 255, 0));\n  }\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  gap: 5%;\n  align-content: center;\n  color: white;\n  font-size: 30px;\n  font-family: \"lugrasimo\";\n  text-align: center;\n  opacity: 1;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 10;\n  width: 90%;\n  aspect-ratio: 2/1.1;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .undefined[_ngcontent-%COMP%] {\n  background-image: url('question_mark.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 33% auto;\n  opacity: 0.33;\n  position: relative;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .undefined[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .undefined[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border-image-source: url('fantasy_border3.png');\n  border-image-slice: 45% 41%;\n  border-image-outset: 0vmin;\n  border-image-repeat: round;\n  border-image-width: 20vmin 20vmin 12vmin 0vmin;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .undefined.player[_ngcontent-%COMP%]::after {\n  border-image-width: 12vmin 0vmin 12vmin 20vmin;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .undefined.adv[_ngcontent-%COMP%]::after {\n  border-image-width: 12vmin 20vmin 12vmin 0vmin;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 45%;\n  margin: 0% 0%;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: space-between;\n  color: rgb(71, 0, 0);\n  position: relative;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.feu[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.feu[_ngcontent-%COMP%] {\n  border: 10px double rgba(255, 0, 0, 0.2);\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.eau[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.eau[_ngcontent-%COMP%] {\n  border: 10px inset rgba(0, 0, 255, 0.2);\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.terre[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.terre[_ngcontent-%COMP%] {\n  border: 10px dashed rgba(0, 128, 0, 0.2);\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.air[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.air[_ngcontent-%COMP%] {\n  border: 10px groove rgba(255, 255, 0, 0.2);\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.player[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.player[_ngcontent-%COMP%] {\n  border-right-width: 0vmin;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.adv[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.adv[_ngcontent-%COMP%] {\n  border-left-width: 0vmin;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%] {\n  font-family: bronzion;\n  font-size: 2.5vw;\n  color: rgb(0, 100, 0);\n  padding: 0 7.5vw;\n  position: relative;\n  width: auto;\n  min-width: 33.3%;\n  margin: 0 auto;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .nom.dieu[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .nom.dieu[_ngcontent-%COMP%] {\n  border-image: url('acanthus.png') 50% 50%/10vmin 15vmin/0 round;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%]::first-letter, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%]::first-letter {\n  font-size: 5vw;\n  color: rgb(193, 0, 0);\n  position: relative;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.dieu[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%]:first-letter, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.dieu[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%]:first-letter {\n  text-shadow: 0 0 1px white, 0 0 1px white, 0 0 5px gold, 0 0 10px black, 0 0 10px black, 0 0 5px gold, 0 0 10px black, 0 0 10px black;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.dieu[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%]::after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.dieu[_ngcontent-%COMP%]   .nom[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  height: 50%;\n  width: 100%;\n  top: -25%;\n  left: 0;\n  background: url('crown2.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  opacity: 1;\n  z-index: 2;\n  animation: _ngcontent-%COMP%_itemGlow 0.3s alternate infinite;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.creature[_ngcontent-%COMP%]::after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.creature[_ngcontent-%COMP%]::before, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.dieu[_ngcontent-%COMP%]::after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.dieu[_ngcontent-%COMP%]::before, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.creature[_ngcontent-%COMP%]::after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.creature[_ngcontent-%COMP%]::before, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.dieu[_ngcontent-%COMP%]::after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.dieu[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0.5;\n  pointer-events: none;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.creature[_ngcontent-%COMP%]:before, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.creature[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0.5;\n  pointer-events: none;\n  background: url('frame_black.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.creature[_ngcontent-%COMP%]:after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.creature[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: -5%;\n  width: 100%;\n  height: 5%;\n  background: url('spacer.png');\n  background-position: bottom;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  opacity: 0.7;\n  z-index: 1;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.dieu[_ngcontent-%COMP%]::before, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.dieu[_ngcontent-%COMP%]::before {\n  background: url('frame_golden.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 100% 100%;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.dieu[_ngcontent-%COMP%]::after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.dieu[_ngcontent-%COMP%]::after {\n  background: url('sun.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  animation: 10s _ngcontent-%COMP%_rotateElementGod infinite linear;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  width: auto;\n  text-shadow: 0 0 1px black, 0 0 10px white;\n  font-size: 1.5vw;\n  max-width: 100%;\n  margin: auto;\n  padding: 1% 5%;\n  position: relative;\n  margin-bottom: 2.5vw;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]:after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: url('plants_textbox.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n  opacity: 0.6;\n  border-radius: 100%;\n  overflow: hidden;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%] {\n  width: 66%;\n  height: 50%;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: auto;\n  z-index: 100;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]:hover::after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]:hover::after {\n  opacity: 0.5;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration.activeBookSecond[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration.activeBookSecond[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  filter: brightness(1.1) contrast(1) sepia(0);\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration.activeBookSecond[_ngcontent-%COMP%]::after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration.activeBookSecond[_ngcontent-%COMP%]::after {\n  opacity: 0.25;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration.activeBookSecond[_ngcontent-%COMP%]:hover, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration.activeBookSecond[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.2) contrast(1.2) sepia(0);\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration.activeBookSecond[_ngcontent-%COMP%]:hover::after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration.activeBookSecond[_ngcontent-%COMP%]:hover::after {\n  opacity: 0.75;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]::after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  bottom: 0px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  transition: 1s;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration.feu[_ngcontent-%COMP%]::after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration.feu[_ngcontent-%COMP%]::after {\n  background-image: url('_-_-assets-elements-fire.gif'), url('fire2.gif');\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration.eau[_ngcontent-%COMP%]::after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration.eau[_ngcontent-%COMP%]::after {\n  background: url('rain.gif'), url('water2.gif'), url('water.gif');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration.air[_ngcontent-%COMP%]::after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration.air[_ngcontent-%COMP%]::after {\n  background-image: radial-gradient(closest-side, rgba(0, 0, 0, 0.92), transparent), url('air.gif'), url('storm.gif'), url('storm3.gif'), url('storm4.gif'), url('storm5.gif');\n  background-size: 100% 100%;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration.terre[_ngcontent-%COMP%]::after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration.terre[_ngcontent-%COMP%]::after {\n  background-image: url('earth.gif'), url('earth2.gif'), url('earth3.gif');\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80%;\n  object-fit: contain;\n  transition: 1s;\n  transform-origin: center !important;\n  opacity: 0.3;\n  filter: brightness(1) contrast(1) sepia(0.9);\n  position: relative;\n  z-index: 1;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.2) contrast(1.1) sepia(0);\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]::before, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]::before {\n  content: \"\";\n  content: \"\";\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.5;\n  z-index: -1;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration.nordique[_ngcontent-%COMP%]::before, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration.nordique[_ngcontent-%COMP%]::before {\n  background: url('script.png');\n  background-size: 33.3%;\n  border-image: url('celtic_frame.png') 20% 20%/3vmin 3vmin/3vmin round;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration.grec[_ngcontent-%COMP%]::before, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration.grec[_ngcontent-%COMP%]::before {\n  background: url('_-_-assets-greek-script.png');\n  border-image: url('_-_-assets-greek-pattern_border.png') 25% 25%/3vmin 3vmin/3vmin round;\n  background-size: 33.3%;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration.chinoise[_ngcontent-%COMP%]::before, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration.chinoise[_ngcontent-%COMP%]::before {\n  background: url('_-_-assets-chinese-script.png');\n  border-image: url('border.png') 20% 20%/3vmin 3vmin/3vmin round;\n  background-size: 33.3%;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .illustration.egyptienne[_ngcontent-%COMP%]::before, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .illustration.egyptienne[_ngcontent-%COMP%]::before {\n  background: url('_-_-assets-egyptian-script.png');\n  border-image: url('motifs.png') 25% 0%/3vmin 3vmin/3vmin round;\n  background-size: 33.3%;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.player[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]::before, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.player[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]::before {\n  border-image-width: 3vmin 0vmin 3vmin 3vmin;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player.adv[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]::before, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv.adv[_ngcontent-%COMP%]   .illustration[_ngcontent-%COMP%]::before {\n  border-image-width: 3vmin 3vmin 3vmin 0vmin;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%] {\n  margin-top: 2.5vw;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 1.5vw;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: none;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   .mythologie_element_group[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   .mythologie_element_group[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-evenly;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   .mythologie_element_group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   .mythologie_element_group[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   .mythologie_element_group.nordique[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   .mythologie_element_group.nordique[_ngcontent-%COMP%] {\n  background-image: url('symbol_nordic.png');\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   .mythologie_element_group.chinoise[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   .mythologie_element_group.chinoise[_ngcontent-%COMP%] {\n  background-image: url('_-_-assets-chinese-symbol_chinese.png');\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   .mythologie_element_group.grec[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   .mythologie_element_group.grec[_ngcontent-%COMP%] {\n  background-image: url('symbol_greek.png');\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   .mythologie_element_group.egyptienne[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   .mythologie_element_group.egyptienne[_ngcontent-%COMP%] {\n  background-image: url('symbol_egyptian.png');\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   .mythologie_element_group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   .mythologie_element_group[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgb(193, 0, 0);\n  text-transform: capitalize;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 0 0.25vw;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style-type: none;\n  margin-bottom: 2vh;\n  border: 0.1px dotted rgba(86, 41, 41, 0.333);\n  background-color: rgba(255, 255, 255, 0.333);\n  transition: 0.3s;\n  position: relative;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  transition: 0.3s;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 217, 0, 0.805);\n  text-shadow: 0 0 1px black, 0 0 10px black, 0 0 10px black, 0 0 10px black;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul.feu[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul.air[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul.terre[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul.eau[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul.feu[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul.air[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul.terre[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul.eau[_ngcontent-%COMP%] {\n  background-blend-mode: darken;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul.feu[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul.feu[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0.25turn, transparent 40%, red, transparent 60%), url('element_fire.png');\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul.eau[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul.eau[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0.25turn, transparent 40%, blue, transparent 60%), url('element_water.png');\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul.terre[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul.terre[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0.25turn, transparent 40%, green, transparent 60%), url('element_earth.png');\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul.air[_ngcontent-%COMP%], .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul.air[_ngcontent-%COMP%] {\n  background-image: linear-gradient(0.25turn, transparent 40%, yellow, transparent 60%), url('element_air.png');\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after, .creationCombattantInnerContainer[_ngcontent-%COMP%]   .adv[_ngcontent-%COMP%]   .creature_info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 100%;\n  height: 150%;\n  position: absolute;\n  bottom: -150%;\n  left: 0px;\n  opacity: 0.7;\n  background: url('divider.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  width: 20%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  z-index: 1000;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0;\n  background: none;\n  border: none;\n  font-size: 2vmin;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #adv_btn[_ngcontent-%COMP%] {\n  height: 30vh;\n  width: 30vw;\n  text-align: bottom;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: flex-end;\n  position: relative;\n  transition: 0.2s;\n  background: url('fire_ring.gif');\n  transform: translateY(-50%);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #adv_btn[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 100%;\n  width: 100%;\n  transform: scale(0.7);\n  transform-origin: center;\n  top: 0;\n  left: 0;\n  background: url('knight_helmet.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  filter: brightness(0.1);\n  position: relative;\n  z-index: 1;\n  transition: 0.2s;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #adv_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 50%;\n  width: 200%;\n  height: 40%;\n  background: url('sword.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: rotate(10deg);\n  transition: 0.2s;\n  animation: _ngcontent-%COMP%_itemGlow 0.5s alternate infinite;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #adv_btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-50%) scale(1.2);\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #adv_btn[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  color: white;\n  transform: rotate(0deg);\n  animation: _ngcontent-%COMP%_itemHover 0.3s alternate infinite;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #adv_btn[_ngcontent-%COMP%]:hover::after {\n  filter: brightness(1);\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #adv_btn[_ngcontent-%COMP%]:active {\n  transform: scale(1.3);\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #adv_btn[_ngcontent-%COMP%]:active   button[_ngcontent-%COMP%] {\n  transform: translateY(-40%) rotate(-5deg) scale(1.1);\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #retour_btn[_ngcontent-%COMP%] {\n  height: 30vh;\n  width: 30vw;\n  text-align: bottom;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-content: flex-end;\n  position: relative;\n  transition: 0.2s;\n  background: url('water_ring.gif');\n  transform: translateY(50%);\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: url('middle-ages-cursor-32x32.png'), pointer;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #retour_btn[_ngcontent-%COMP%]:after {\n  content: \"\";\n  height: 100%;\n  width: 100%;\n  transform: scale(0.7);\n  transform-origin: center;\n  top: 0;\n  left: 0;\n  background: url('knight_helmet2.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  filter: brightness(0.1);\n  position: relative;\n  z-index: 1;\n  transition: 0.2s;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #retour_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: 20%;\n  left: 20%;\n  width: 50%;\n  height: 100%;\n  background: url('shield4.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  transform: rotate(10deg);\n  transition: 0.2s;\n  animation: _ngcontent-%COMP%_itemGlow 0.5s alternate infinite;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #retour_btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(50%) scale(1.2);\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #retour_btn[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  top: 50%;\n  color: white;\n  transform: rotate(0deg);\n  animation: _ngcontent-%COMP%_itemHover 0.3s alternate infinite;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #retour_btn[_ngcontent-%COMP%]:hover::after {\n  filter: brightness(1);\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #retour_btn[_ngcontent-%COMP%]:active {\n  transform: scale(1.3);\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #retour_btn[_ngcontent-%COMP%]:active   button[_ngcontent-%COMP%] {\n  transform: translateY(40%) rotate(-5deg) scale(1.1);\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #combat_btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 20vmin;\n  pointer-events: none;\n  transition: 5s;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #combat_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: white;\n  position: relative;\n  z-index: 99999999999;\n  pointer-events: all;\n  transition: 0.3s;\n  cursor: url('sword.cur'), pointer;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #combat_btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: url('vortex.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  filter: FlipH;\n  opacity: 0.5;\n  animation: _ngcontent-%COMP%_magicVortex 1s reverse infinite linear;\n  transition: 5s;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #combat_btn[_ngcontent-%COMP%]:hover {\n  padding: 200vmin;\n  transition: 0.3s;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #combat_btn[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  text-shadow: 0 0 1px black, 0 0 10px rgb(193, 0, 0), 0 0 5px rgb(0, 100, 0);\n  font-size: 4vmin;\n  transition: 0.1s;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #combat_btn[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  transition: 5s;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #combat_btn[_ngcontent-%COMP%]:before {\n  content: \"\";\n  height: 200vh;\n  width: 200vw;\n  background: radial-gradient(red, black 25%);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  transition: 10s;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #combat_btn[_ngcontent-%COMP%]:active {\n  transform: translateY(-50%) scale(2);\n  z-index: 99999999;\n  transition: 0.1s;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #combat_btn[_ngcontent-%COMP%]:active   button[_ngcontent-%COMP%] {\n  text-shadow: 0 0 1px black, 0 0 10px red, 0 0 10px red;\n  letter-spacing: 0.5vw;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #combat_btn[_ngcontent-%COMP%]:active:before {\n  opacity: 1;\n  transition: 0.1s;\n}\n.creationCombattantInnerContainer[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   #combat_btn[_ngcontent-%COMP%]:active:after {\n  opacity: 1;\n  transition: 0.1s;\n}\n\n@keyframes _ngcontent-%COMP%_itemGlow {\n  from {\n    filter: brightness(0.7);\n  }\n  to {\n    filter: brightness(1.3);\n  }\n}\n@keyframes _ngcontent-%COMP%_itemHover {\n  from {\n    text-shadow: 0 0 10px black, 0 0 5px black;\n  }\n  to {\n    text-shadow: 0 0 11px black, 0 0 6px black, 0 0 11px black;\n  }\n}\n.combattantAppear[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_combattantAppear 0.5s forwards;\n}\n\n@keyframes _ngcontent-%COMP%_combattantAppear {\n  from {\n    opacity: 0;\n    transform: scale(2);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_combattantsSubsectionAppear {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_rotateElementGod {\n  0% {\n    transform: rotate(0deg);\n    filter: blur(10px) brightness(1.5);\n  }\n  50% {\n    transform: rotate(180deg);\n    filter: blur(5px) brightness(5.5);\n  }\n  100% {\n    transform: rotate(360deg);\n    filter: blur(10px) brightness(1.5);\n  }\n}\n#skip_btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#skip_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 auto;\n  background: url('button.png');\n  color: #ffc1c1;\n  text-shadow: 0 0 1px black, 0 0 5px black;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  padding: 3vh 4vw;\n  border: none;\n  box-shadow: none;\n  transition: 0.3s;\n}\n#skip_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #64ff64;\n}\n#skip_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n#skip_btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n  filter: brightness(2);\n}\n\n.goBack[_ngcontent-%COMP%] {\n  opacity: 0 !important;\n  transition: opacity 0.2s ease-in !important;\n}/*# sourceMappingURL=selection-combat.component.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2VsZWN0aW9uLWNvbWJhdC9zZWxlY3Rpb24tY29tYmF0LmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvYXBwL3NlbGVjdGlvbi1jb21iYXQvc2VsZWN0aW9uLWNvbWJhdC5jb21wb25lbnQuc2NzcyIsIndlYnBhY2s6Ly8uL3NyYy9fdmFyaWFibGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0doQjtFQUlFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxhQUFBO0VBQ0Esb0RBQUE7RUFDQTs7MEJBQUE7RUFHQSwyQkFBQTtBREpGOztBQ09BO0VBQ0U7SUFDRSx1QkFBQTtFREpGO0VDT0E7SUFDRSw2QkFBQTtFRExGO0FBQ0Y7QUNTQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQXNDQSwwQkFBQTtBRDVDRjtBQ1FFO0VBQ0UsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQ2hEUztBRjBDYjtBQ1NFO0VBQ0UsY0FBQTtBRFBKO0FDU0k7RUFDRSxxQkNyRFk7RURzRFosZUFBQTtBRFBOO0FDV0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtREFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VFbkVBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFRm9FQSwyQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7VUFB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REFBQTtFQUNBLGNBQUE7QURpbkRSO0FDOW1ETTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QURnbkRSO0FDOW1EUTtFQUNFLDJFQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBRGduRFY7QUM3bURRO0VBQ0UsVUFBQTtFQUNBLGNBQUE7QUQrbURWO0FDNW1ETTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUQ4bURSO0FDNW1ETTtFQUNFLG9DQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBRDhtRFI7QUM3bURRO0VBQ0Usc0RBQUE7RUFFQSxxQkFBQTtBRDhtRFY7QUM1bURRO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FEOG1EUjtBQzVtRFE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUQ4bURWOztBQ3ZtREE7RUFDRTtJQUNFLHVCQUFBO0VEMG1ERjtFQ3ZtREE7SUFDRSx1QkFBQTtFRHltREY7QUFDRjtBQ3RtREE7RUFDRTtJQUNFLDBDQUFBO0VEd21ERjtFQ3JtREE7SUFDRSwwREFBQTtFRHVtREY7QUFDRjtBQ3BtREE7RUFDRSx5Q0FBQTtBRHNtREY7O0FDbm1EQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VEc21ERjtFQ25tREE7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RURxbURGO0FBQ0Y7QUNsbURBO0VBQ0U7SUFDRSxVQUFBO0VEb21ERjtFQ2ptREE7SUFDRSxVQUFBO0VEbW1ERjtBQUNGO0FDaG1EQTtFQUNFO0lBQ0UsdUJBQUE7SUFDQSxrQ0FBQTtFRGttREY7RUMvbERBO0lBQ0UseUJBQUE7SUFDQSxpQ0FBQTtFRGltREY7RUM5bERBO0lBQ0UseUJBQUE7SUFDQSxrQ0FBQTtFRGdtREY7QUFDRjtBQzdsREE7RUFDRSxXQUFBO0FEK2xERjtBQzlsREU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VFMzhDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUYyOENBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURrbURKO0FDam1ESTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FEbW1ETjtBQ2ptREk7RUFDRSxxQkFBQTtBRG1tRE47QUNqbURJO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtBRG1tRE47O0FDOWxEQTtFQUNFLHFCQUFBO0VBQ0EsMkNBQUE7QURpbURGLENBQUEseURBQUEiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 8203:
/*!******************************************************!*\
  !*** ./src/app/statistique/statistique.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatistiqueComponent: () => (/* binding */ StatistiqueComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _selection_combat_combattant_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../selection-combat/combattant.service */ 612);
/* harmony import */ var _compte_compte_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../compte/compte.service */ 9017);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ 6466);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _gagnant_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../gagnant.pipe */ 2995);







function StatistiqueComponent_div_10_p_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r4.tauxVictoire, "1.2-2"), " % de victoires ");
  }
}
function StatistiqueComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15)(1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseenter", function StatistiqueComponent_div_10_Template_div_mouseenter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r5.showStats());
    })("mouseout", function StatistiqueComponent_div_10_Template_div_mouseout_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r7.hideStats());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "button");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Statistiques ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, StatistiqueComponent_div_10_p_4_Template, 3, 4, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.tauxVictoire && ctx_r0.changement);
  }
}
function StatistiqueComponent_thead_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "thead")(1, "tr")(2, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StatistiqueComponent_thead_25_Template_th_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.sortTable(0, "string"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Nom de la creature");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StatistiqueComponent_thead_25_Template_th_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.sortTable(1, "string"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Element ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StatistiqueComponent_thead_25_Template_th_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r11.sortTable(2, "string"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Date et heure ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StatistiqueComponent_thead_25_Template_th_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.sortTable(3, "string"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "R\u00E9sultat ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function StatistiqueComponent_tbody_26_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "gagnant");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](c_r14.creature == null ? null : c_r14.creature.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](c_r14.creature == null ? null : c_r14.creature.typeElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", c_r14.combat == null ? null : c_r14.combat.dateCombat, " ", c_r14.combat == null ? null : c_r14.combat.heureCombat, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 5, c_r14.gagnant));
  }
}
function StatistiqueComponent_tbody_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StatistiqueComponent_tbody_26_tr_1_Template, 10, 7, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.combattants);
  }
}
function StatistiqueComponent_tbody_27_tr_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const c_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](c_r16.creature == null ? null : c_r16.creature.nom);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](c_r16.creature == null ? null : c_r16.creature.typeElement);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", c_r16.combat == null ? null : c_r16.combat.dateCombat, " ", c_r16.combat == null ? null : c_r16.combat.heureCombat, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](c_r16.gagnant);
  }
}
function StatistiqueComponent_tbody_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, StatistiqueComponent_tbody_27_tr_1_Template, 9, 5, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.combattants);
  }
}
const _c0 = function () {
  return ["/accueil"];
};
class StatistiqueComponent {
  constructor(combattantService, compteService, authService) {
    this.combattantService = combattantService;
    this.compteService = compteService;
    this.authService = authService;
    this.mesParties = true;
    this.IAParties = false;
    this.changement = true;
  }
  ngOnInit() {
    this.compte = this.authService.getCompte();
    this.compteService.findIA().subscribe(resp => {
      this.compteIA = resp;
    });
  }
  mesparties() {
    this.mesParties = true;
    this.IAParties = false;
    this.changement = false;
    this.combattantService.findByCompteId(this.compte.id).subscribe(resp => {
      this.combattants = resp;
      this.unrollScroll(this.combattants.length);
    });
    this.stat();
  }
  IAparties() {
    this.mesParties = false;
    this.IAParties = true;
    this.changement = false;
    this.combattantService.findByCompteId(this.compteIA.id).subscribe(resp => {
      this.combattants = resp;
      this.unrollScroll(this.combattants.length);
    });
    this.stat();
  }
  unrollScroll(n_items) {
    // console.log(n_items)
    let length_scroll = n_items * 50 + 50;
    document.querySelector(".stats_list_body").style.maxHeight = length_scroll + "px";
    setTimeout(() => {
      document.querySelector(".stats_list_body thead").classList.add("visible_thead");
      document.querySelectorAll(".stats_list_body tbody tr td").forEach(element => {
        element.classList.add("visible_td");
      });
    }, 200);
    //// GETTING CSS VARIABLE
    // Get the element whose CSS variable you want to access
    const element = document.querySelector('.stats_list_body');
    // Get the computed styles of the element
    const styles = window.getComputedStyle(element);
    // Access the value of the CSS variable
    const starting_unscroll_duration_s = styles.getPropertyValue('--unscroll_duration');
    const starting_unscroll_duration_ms = parseFloat(starting_unscroll_duration_s) * (/\ds$/.test(starting_unscroll_duration_s) ? 1000 : 1); // convert to ms
    setTimeout(() => {
      document.querySelector(".stats_list_body").style.setProperty('--unscroll_duration', '0s');
    }, starting_unscroll_duration_ms);
  }
  stat() {
    setTimeout(() => {
      this.changement = true;
      let v = 0;
      let d = 0;
      this.combattants.forEach(c => {
        if (c.gagnant) {
          v++;
        } else {
          d++;
        }
      });
      this.tauxVictoire = v / (v + d) * 100;
      console.log("STATS CALCULATED");
    }, 100);
  }
  showStats() {
    document.querySelector("#btn_stats")?.classList.add("showStats");
  }
  hideStats() {
    document.querySelector("#btn_stats")?.classList.remove("showStats");
  }
  // Function to sort table by column
  sortTable(n, type) {
    var table,
      rows,
      switching,
      i,
      x,
      y,
      shouldSwitch,
      dir,
      switchcount = 0;
    table = document.getElementById("table_stats");
    switching = true;
    //Set the sorting direction to ascending:
    dir = "asc";
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < rows.length - 1; i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        /*check if the two rows should switch place,
        based on the direction, asc or desc:*/
        if (dir == "asc") {
          if (type == "string" && x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase() // if string
          || type == "number" && Number(x.innerHTML) > Number(y.innerHTML))
            // if numbers
            {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
        } else if (dir == "desc") {
          if (type == "string" && x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase() // if string
          || type == "number" && Number(x.innerHTML) < Number(y.innerHTML))
            // if numbers
            {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        //Each time a switch is done, increase this count by 1:
        switchcount++;
      } else {
        /*If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again.*/
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
  static #_ = this.ɵfac = function StatistiqueComponent_Factory(t) {
    return new (t || StatistiqueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_selection_combat_combattant_service__WEBPACK_IMPORTED_MODULE_0__.CombattantService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_compte_compte_service__WEBPACK_IMPORTED_MODULE_1__.CompteService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
    type: StatistiqueComponent,
    selectors: [["app-statistique"]],
    decls: 29,
    vars: 7,
    consts: [["id", "stats_container"], ["id", "btn_accueil"], ["routerLinkActive", "active", 3, "routerLink"], ["type", "button", 1, "button"], ["id", "btn_stats", 4, "ngIf"], [1, "card", "stats_list"], [1, "stats_list_header"], [1, "header_contents"], [1, "btns"], [3, "click"], [1, "text_intro"], [1, "card-body", "stats_list_body"], ["id", "table_stats"], [4, "ngIf"], [1, "card-footer", "stats_list_footer"], ["id", "btn_stats"], ["id", "glass", 3, "mouseenter", "mouseout"], ["class", "stats", 4, "ngIf"], [1, "stats"], [4, "ngFor", "ngForOf"]],
    template: function StatistiqueComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 0)(1, "h1")(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Statistiques");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " de jeu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 1)(6, "a", 2)(7, "button", 3)(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Accueil");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, StatistiqueComponent_div_10_Template, 5, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 5)(12, "div", 6)(13, "div", 7)(14, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 8)(17, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StatistiqueComponent_Template_button_click_17_listener() {
          return ctx.mesparties();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Mes parties");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StatistiqueComponent_Template_button_click_19_listener() {
          return ctx.IAparties();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Les parties de l'IA");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, " Statistiques de combate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 11)(24, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, StatistiqueComponent_thead_25_Template, 10, 0, "thead", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, StatistiqueComponent_tbody_26_Template, 2, 1, "tbody", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, StatistiqueComponent_tbody_27_Template, 2, 1, "tbody", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.combattants);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.compte.login, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.combattants !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mesParties == true && ctx.IAParties == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mesParties == false && ctx.IAParties == true);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DecimalPipe, _gagnant_pipe__WEBPACK_IMPORTED_MODULE_3__.GagnantPipe],
    styles: ["@charset \"UTF-8\";\nsection[_ngcontent-%COMP%] {\n  width: 100vw;\n  \n\n  height: 100%;\n  cursor: url('middle-ages-cursor-32x32.png'), pointer;\n  font-family: \"Lugrasimo\";\n  overflow: auto;\n}\n\nh1[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  background-color: rgba(245, 245, 220, 0.555);\n  border-radius: 10px;\n  padding: 5px;\n  margin: 10px 100px;\n  background: url('scroll_combat.png');\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 200px;\n  position: relative;\n  z-index: 1;\n  color: rgb(71, 0, 0);\n  animation: _ngcontent-%COMP%_scrollAppear 2s forwards;\n}\nh1[_ngcontent-%COMP%], h1[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-family: \"bronzion\";\n  font-size: 35px;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::first-letter {\n  font-family: \"bronzion\";\n  color: rgb(0, 100, 0);\n  font-size: 50px;\n}\nh1[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  z-index: 0;\n  width: 100%;\n  height: 65%;\n  background: url('scribe.png'), rgb(0, 100, 0);\n  background-blend-mode: lighten;\n  transform: scaleX(-1);\n  opacity: 0.5;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  z-index: -1;\n  -webkit-mask-image: url('scribe.png');\n          mask-image: url('scribe.png');\n  -webkit-mask-size: contain;\n          mask-size: contain;\n  mask-mode: alpha;\n  -webkit-mask-position: center;\n          mask-position: center;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n}\n\n@keyframes _ngcontent-%COMP%_scrollAppear {\n  0% {\n    transform: scale(0.5) translateY(-50%);\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\nbutton[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n  border: none;\n  box-shadow: none;\n  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.373));\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  color: #fff;\n  background: none;\n}\n\n#btn_accueil[_ngcontent-%COMP%] {\n  background-image: url('board_side.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-position: left;\n  top: 1vh;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  position: fixed;\n  z-index: 1000;\n  filter: drop-shadow(20px 20px 10px rgba(0, 0, 0, 0.341));\n  opacity: 0;\n  animation: _ngcontent-%COMP%_boardAppear 2s forwards;\n  animation-delay: 1.5s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n#btn_accueil[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 15vw;\n  aspect-ratio: 4/3.3;\n  padding-top: 25%;\n  opacity: 0.6;\n}\n#btn_accueil[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2vw;\n  transition: 0.3s;\n  color: silver;\n  background: url('chimera.png');\n  height: 70%;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n#btn_accueil[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n  color: white;\n  filter: drop-shadow(0 0 5px rgb(0, 100, 0));\n}\n#btn_accueil[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active   span[_ngcontent-%COMP%] {\n  transition: 0.1s;\n  transform: scale(0.95);\n  filter: drop-shadow(0 0 5px rgb(193, 0, 0));\n}\n\n@keyframes _ngcontent-%COMP%_boardAppear {\n  from {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n#btn_stats[_ngcontent-%COMP%] {\n  background-image: url('magnifying_glass.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-position: left;\n  bottom: -20vh;\n  right: -5vw;\n  width: 35vw;\n  aspect-ratio: 1;\n  position: fixed;\n  z-index: 1000;\n  filter: drop-shadow(20px 20px 10px rgba(0, 0, 0, 0.341));\n  opacity: 1;\n  animation: _ngcontent-%COMP%_magnifyingGlassAppear 2s;\n  animation-delay: 0s;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: translateX(0) rotate(30deg) scale(1);\n  transition: 0.5s;\n}\n#btn_stats[_ngcontent-%COMP%]   #glass[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50%;\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-right: 50%;\n  margin-bottom: 50%;\n  transform: rotate(-30deg);\n}\n#btn_stats[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  pointer-events: none;\n  font-size: 1.3vw;\n  text-shadow: 0px 0px 3px black;\n}\n#btn_stats[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: 0.5s;\n  pointer-events: none;\n  font-size: 0;\n}\n#btn_stats[_ngcontent-%COMP%]   #glass[_ngcontent-%COMP%] {\n  transform: rotate(-30deg);\n  transition: 0.5s;\n  border-radius: 100%;\n}\n#btn_stats[_ngcontent-%COMP%]   #glass[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.1;\n  transition: 0.5s;\n  z-index: -1;\n  background: url('vortex.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  animation: _ngcontent-%COMP%_spinElement infinite linear;\n  animation-duration: 10s;\n}\n#btn_stats[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  opacity: 0;\n  font-size: 0;\n}\n#btn_stats[_ngcontent-%COMP%]:hover {\n  transform: rotate(20deg) scale(1.2);\n}\n#btn_stats[_ngcontent-%COMP%]:hover   #glass[_ngcontent-%COMP%]:after {\n  opacity: 1;\n  animation-duration: 3s;\n  filter: brightness(10) drop-shadow(0 0 10px rgb(0, 100, 0));\n}\n#btn_stats.showStats[_ngcontent-%COMP%]   #glass[_ngcontent-%COMP%] {\n  transform: rotate(-20deg);\n}\n#btn_stats.showStats[_ngcontent-%COMP%]   .stats[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: rgb(193, 0, 0);\n  text-shadow: 0px 0px 3px rgb(0, 100, 0);\n  font-size: 1.3vw;\n}\n\n@keyframes _ngcontent-%COMP%_magnifyingGlassAppear {\n  from {\n    opacity: 0;\n    transform: translateX(100%) rotate(100deg) scale(1);\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_spinElement {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.stats_list[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: 0px solid #000000;\n  border-radius: 10px;\n  padding: 0px;\n  animation: _ngcontent-%COMP%_listAppear 1.5s;\n}\n\n@keyframes _ngcontent-%COMP%_listAppear {\n  from {\n    opacity: 0;\n    transform: translateY(100vh);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.stats_list_header[_ngcontent-%COMP%] {\n  position: relative;\n  color: rgba(119, 0, 0, 0.68);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  font-family: \"Lugrasimo\";\n  background: url('head_unrolled.png');\n  background-size: cover;\n  background-position: top;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 400px;\n  text-align: center;\n  padding: 0px;\n  padding-top: 4.5vw;\n}\n.stats_list_header[_ngcontent-%COMP%]   .header_contents[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10vw;\n}\n.stats_list_header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  opacity: 0.88;\n  font-family: \"bronzion\";\n  color: rgb(0, 100, 0);\n  text-transform: capitalize;\n  font-size: 7.5vw;\n  position: relative;\n}\n.stats_list_header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::first-letter {\n  color: rgb(193, 0, 0);\n}\n.stats_list_header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 7vw;\n  height: 100%;\n  bottom: 0px;\n  left: -7vw;\n  position: absolute;\n  background: url('heraldic_lion.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  opacity: 0.3;\n}\n.stats_list_header[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 5vw;\n}\n.stats_list_header[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  transition: 0.4s;\n}\n.stats_list_header[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  color: rgb(255, 225, 58);\n  text-shadow: 0 0 3px black;\n}\n.stats_list_header[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active {\n  transform: scale(0.95);\n  transition: 0.1s;\n  filter: brightness(1.2);\n}\n.stats_list_header[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(1) {\n  background-image: url('stamp_green.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.stats_list_header[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:nth-child(2) {\n  background-image: url('stamp_red.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n}\n.stats_list_header[_ngcontent-%COMP%]:before {\n  content: \"\";\n  height: 100%;\n  width: 100%;\n  bottom: 0px;\n  left: 0px;\n  position: absolute;\n  background: url('page_decorative_divider5.jpeg');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 25%;\n  background-position: bottom;\n  background-repeat: repeat-x;\n  opacity: 0.7;\n  -webkit-mask: url('head_unrolled.png');\n          mask: url('head_unrolled.png');\n  -webkit-mask-size: cover;\n          mask-size: cover;\n}\n.stats_list_header[_ngcontent-%COMP%]   .text_intro[_ngcontent-%COMP%] {\n  color: rgb(71, 0, 0);\n  position: absolute;\n  bottom: 20%;\n}\n\n.stats_list_body[_ngcontent-%COMP%] {\n  --unscroll_duration: 2.5s;\n  --text_appear_duration: 1s;\n  background: url('body_mirrored.png');\n  background-size: 100%;\n  background-repeat: repeat-y;\n  background-position: top;\n  width: 100%;\n  max-height: 0px;\n  transition: var(--unscroll_duration);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 0px;\n  padding: 0px;\n}\n\n.stats_list_footer[_ngcontent-%COMP%] {\n  position: relative;\n  background: url('head_unrolled.png');\n  transform: scaleY(-1) scaleX(1);\n  background-size: cover;\n  background-position: top;\n  background-repeat: no-repeat;\n  width: 100%;\n  height: 400px;\n}\n.stats_list_footer[_ngcontent-%COMP%]:before {\n  content: \"\";\n  height: 100%;\n  width: 100%;\n  bottom: 0px;\n  left: 0px;\n  position: absolute;\n  background: url('page_decorative_divider5.jpeg');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: 25%;\n  background-position: bottom;\n  background-repeat: repeat-x;\n  opacity: 0.7;\n  -webkit-mask: url('head_unrolled.png');\n          mask: url('head_unrolled.png');\n  -webkit-mask-size: cover;\n          mask-size: cover;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 65%;\n  margin-bottom: 100px;\n}\ntable[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  opacity: 0;\n  transform: scale(1.5);\n  filter: blur(10px) hue-rotate(180deg);\n}\ntable[_ngcontent-%COMP%]   thead.visible_thead[_ngcontent-%COMP%] {\n  transform: scale(1);\n  filter: blur(0px);\n  transition: var(--text_appear_duration);\n  transition-delay: calc(var(--unscroll_duration) * 0.5);\n  opacity: 1;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  transition: opacity var(--text_appear_duration), filter var(--text_appear_duration);\n  transition-delay: calc(var(--unscroll_duration) * 0.5);\n  filter: blur(3px) drop-shadow(0 0 3px rgb(193, 0, 0));\n  opacity: 0;\n}\ntable[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.visible_td[_ngcontent-%COMP%] {\n  filter: blur(0px);\n  opacity: 1;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(1)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 1 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(2)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 2 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(3)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 3 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(4)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 4 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(5)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 5 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(6)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 6 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(7)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 7 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(8)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 8 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(9)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 9 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(10)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 10 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(11)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 11 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(12)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 12 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(13)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 13 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(14)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 14 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(15)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 15 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(16)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 16 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(17)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 17 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(18)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 18 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(19)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 19 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(20)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 20 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(21)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 21 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(22)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 22 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(23)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 23 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(24)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 24 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(25)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 25 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(26)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 26 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(27)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 27 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(28)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 28 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(29)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 29 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(30)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 30 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(31)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 31 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(32)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 32 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(33)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 33 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(34)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 34 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(35)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 35 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(36)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 36 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(37)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 37 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(38)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 38 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(39)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 39 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(40)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 40 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(41)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 41 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(42)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 42 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(43)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 43 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(44)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 44 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(45)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 45 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(46)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 46 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(47)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 47 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(48)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 48 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(49)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 49 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-child(50)   td[_ngcontent-%COMP%] {\n  transition-delay: calc(var(--unscroll_duration) * 0.5 + 50 * 0.2s) !important;\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: linear-gradient(transparent, rgba(255, 255, 255, 0.5), transparent);\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  transition: 0.1s;\n  text-align: center;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 238, 178, 0.755) !important;\n}\n\nthead[_ngcontent-%COMP%] {\n  position: sticky;\n  z-index: 11;\n  text-transform: capitalize;\n  top: 0px;\n  background-color: rgba(72, 52, 46, 0.6666666667);\n  background-image: url(\"data:image/svg+xml,%3Csvg width='32' height='64' viewBox='0 0 32 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 28h20V16h-4v8H4V4h28v28h-4V8H8v12h4v-8h12v20H0v-4zm12 8h20v4H16v24H0v-4h12V36zm16 12h-4v12h8v4H20V44h12v12h-4v-8zM0 36h8v20H0v-4h4V40H0v-4z' fill='%23ab0b0b' fill-opacity='0.46' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  color: white;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n  text-shadow: 1px 1px 1px rgb(71, 0, 0);\n  font-size: 1.3vw;\n  padding: 1vw;\n  cursor: url('middle-ages-pointer-32x32.png'), pointer;\n  transition: 0.1s;\n  position: relative;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  background-color: rgba(13, 107, 13, 0.35);\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:hover::after {\n  font-size: xx-small;\n  position: absolute;\n  bottom: 0.25vw;\n  right: 0px;\n  width: 100%;\n  content: \"\u25BC\";\n  animation: _ngcontent-%COMP%_listOrderPulse 0.3s alternate infinite;\n}\nthead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-letter {\n  color: rgb(193, 0, 0);\n  font-size: 1.75vw;\n}\n\n@keyframes _ngcontent-%COMP%_listOrderPulse {\n  from {\n    transform: scale(1.3);\n  }\n  to {\n    transform: scale(1);\n  }\n}/*# sourceMappingURL=statistique.component.css.map */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RhdGlzdGlxdWUvc3RhdGlzdGlxdWUuY29tcG9uZW50LmNzcyIsIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3RhdGlzdGlxdWUvc3RhdGlzdGlxdWUuY29tcG9uZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLi9zcmMvX3ZhcmlhYmxlcy5zY3NzIiwid2VicGFjazovLy4vc3JjL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNJaEI7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0Esb0RBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QURGRjs7QUNRQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLFVBQUE7RUFDQSxvQkNoQ1c7RURtRVgsbUNBQUE7QUR4Q0Y7QUNPRTs7RUFFRSx1QkFBQTtFQUNBLGVBQUE7QURMSjtBQ1FFO0VBQ0UsdUJBQUE7RUFDQSxxQkN4Q2M7RUR5Q2QsZUFBQTtBRE5KO0FDU0U7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw2Q0FBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VFckRBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFRnFEQSxXQUFBO0VBRUEscUNBQUE7VUFBQSw2QkFBQTtFQUNBLDBCQUFBO1VBQUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0FETko7O0FDYUE7RUFFRTtJQUNFLHNDQUFBO0lBQ0EsVUFBQTtFRFhGO0VDY0E7SUFDRSxV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RHJESjs7QUMyREU7RUFDQSw0RUFBQTtBRHhERjs7QUN1REU7RUFDQSw0RUFBQTtBRHBERjs7QUNtREU7RUFDQSw0RUFBQTtBRGhERjs7QUMrQ0U7RUFDQSw0RUFBQTtBRDVDRjs7QUMyQ0U7RUFDQSw0RUFBQTtBRHhDRjs7QUN1Q0U7RUFDQSw0RUFBQTtBRHBDRjs7QUNtQ0U7RUFDQSw0RUFBQTtBRGhDRjs7QUMrQkU7RUFDQSw0RUFBQTtBRDVCRjs7QUMyQkU7RUFDQSw0RUFBQTtBRHhCRjs7QUN1QkU7RUFDQSw2RUFBQTtBRHBCRjs7QUNtQkU7RUFDQSw2RUFBQTtBRGhCRjs7QUNlRTtFQUNBLDZFQUFBO0FEWkY7O0FDV0U7RUFDQSw2RUFBQTtBRFJGOztBQ09FO0VBQ0EsNkVBQUE7QURKRjs7QUNHRTtFQUNBLDZFQUFBO0FEQUY7O0FDREU7RUFDQSw2RUFBQTtBRElGOztBQ0xFO0VBQ0EsNkVBQUE7QURRRjs7QUNURTtFQUNBLDZFQUFBO0FEWUY7O0FDYkU7RUFDQSw2RUFBQTtBRGdCRjs7QUNqQkU7RUFDQSw2RUFBQTtBRG9CRjs7QUNyQkU7RUFDQSw2RUFBQTtBRHdCRjs7QUN6QkU7RUFDQSw2RUFBQTtBRDRCRjs7QUM3QkU7RUFDQSw2RUFBQTtBRGdDRjs7QUNqQ0U7RUFDQSw2RUFBQTtBRG9DRjs7QUNyQ0U7RUFDQSw2RUFBQTtBRHdDRjs7QUN6Q0U7RUFDQSw2RUFBQTtBRDRDRjs7QUM3Q0U7RUFDQSw2RUFBQTtBRGdERjs7QUNqREU7RUFDQSw2RUFBQTtBRG9ERjs7QUNyREU7RUFDQSw2RUFBQTtBRHdERjs7QUN6REU7RUFDQSw2RUFBQTtBRDRERjs7QUM3REU7RUFDQSw2RUFBQTtBRGdFRjs7QUNqRUU7RUFDQSw2RUFBQTtBRG9FRjs7QUNyRUU7RUFDQSw2RUFBQTtBRHdFRjs7QUN6RUU7RUFDQSw2RUFBQTtBRDRFRjs7QUM3RUU7RUFDQSw2RUFBQTtBRGdGRjs7QUNqRkU7RUFDQSw2RUFBQTtBRG9GRjs7QUNyRkU7RUFDQSw2RUFBQTtBRHdGRjs7QUN6RkU7RUFDQSw2RUFBQTtBRDRGRjs7QUM3RkU7RUFDQSw2RUFBQTtBRGdHRjs7QUNqR0U7RUFDQSw2RUFBQTtBRG9HRjs7QUNyR0U7RUFDQSw2RUFBQTtBRHdHRjs7QUN6R0U7RUFDQSw2RUFBQTtBRDRHRjs7QUM3R0U7RUFDQSw2RUFBQTtBRGdIRjs7QUNqSEU7RUFDQSw2RUFBQTtBRG9IRjs7QUNySEU7RUFDQSw2RUFBQTtBRHdIRjs7QUN6SEU7RUFDQSw2RUFBQTtBRDRIRjs7QUM3SEU7RUFDQSw2RUFBQTtBRGdJRjs7QUNqSUU7RUFDQSw2RUFBQTtBRG9JRjs7QUNySUU7RUFDQSw2RUFBQTtBRHdJRjs7QUN6SUU7RUFDQSw2RUFBQTtBRDRJRjs7QUN2SUU7RUFFRSwrRUFBQTtBRHlJSjtBQ3RJRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUR3SUo7QUN0SUk7RUFDRSx1REFBQTtBRHdJTjs7QUNsSUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLFFBQUE7RUFHQSxnREFBQTtFQUNBLG9XQUFBO0VBRUEsWUFBQTtBRGtJRjtBQ2hJRTtFQUNFLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxxREFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURrSUo7QUNqSUk7RUFDRSxxQkFBQTtFQUNBLHlDQUFBO0FEbUlOO0FDbElNO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpREFBQTtBRG9JUjtBQ2hJSTtFQUNFLHFCQ2hqQlk7RURpakJaLGlCQUFBO0FEa0lOOztBQzVIQTtFQUNFO0lBQUsscUJBQUE7RURnSUw7RUMvSEE7SUFBRyxtQkFBQTtFRGtJSDtBQUNGLENBQUEsb0RBQUEiLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}

/***/ }),

/***/ 6326:
/*!*******************************************!*\
  !*** ./src/environnements/environment.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  apiUrl: "http://localhost:8080/api"
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(9548), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map