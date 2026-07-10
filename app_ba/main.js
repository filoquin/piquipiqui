(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Jku":
/*!************************************************************************!*\
  !*** ./src/app/pages/stock/mov-int-detail/mov-int-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: MovIntDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovIntDetailComponent", function() { return MovIntDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/stock.service */ "CFEw");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/alert.service */ "f5O9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_comunes_read_code_read_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../main/comunes/read-code/read-code.component */ "5aEy");
/* harmony import */ var _mov_int_detail_product_mov_int_detail_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mov-int-detail-product/mov-int-detail-product.component */ "89aN");








function MovIntDetailComponent_read_code_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "read-code", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchByCode", function MovIntDetailComponent_read_code_0_Template_read_code_searchByCode_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.searchByCode($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputMethod", ctx_r0.inputMethod);
} }
function MovIntDetailComponent_ul_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailComponent_ul_1_ng_container_1_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const item_r13 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.select_location(item_r13.location_id[0]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.location_id[1], " ");
} }
function MovIntDetailComponent_ul_1_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailComponent_ul_1_li_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.validate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Validar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovIntDetailComponent_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovIntDetailComponent_ul_1_ng_container_1_Template, 3, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovIntDetailComponent_ul_1_li_2_Template, 3, 0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.location_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selected_location && ctx_r1.action === "select_location");
} }
function MovIntDetailComponent_ng_container_2_div_1_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const location_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", location_r23.location_dest_id[1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("innerHTML", ctx_r22.getProductsByDestLocation(location_r23.location_dest_id[0]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function MovIntDetailComponent_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Hay productos para dejar en ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MovIntDetailComponent_ng_container_2_div_1_li_4_Template, 4, 2, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.getLocationDest());
} }
function MovIntDetailComponent_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Escaneo correctamente la ubicaci\u00F3n ", ctx_r20.ok_location_name, ", En caso completar el movimiento pulse el bot\u00F3n validar. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r20.done_log, " ");
} }
function MovIntDetailComponent_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailComponent_ng_container_2_div_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Volver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailComponent_ng_container_2_div_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r27.validate(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Validar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovIntDetailComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovIntDetailComponent_ng_container_2_div_1_Template, 5, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovIntDetailComponent_ng_container_2_div_2_Template, 6, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovIntDetailComponent_ng_container_2_div_3_Template, 7, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isValid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.isValid);
} }
function MovIntDetailComponent_app_mov_int_detail_product_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mov-int-detail-product", 26);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("products", ctx_r3.products);
} }
const _c0 = function () { return { btn: true, "btn-info": true }; };
function MovIntDetailComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.leaveProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Dejar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function MovIntDetailComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.selectLocation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cambiar Ubicaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function MovIntDetailComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.selected_location = !ctx_r32.selected_location; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Volver ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function MovIntDetailComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.inputMethod = "form"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function MovIntDetailComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.inputMethod = "textBus"; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class MovIntDetailComponent {
    constructor(route, router, stockService, changeDetectorRef, alertService) {
        this.route = route;
        this.router = router;
        this.stockService = stockService;
        this.changeDetectorRef = changeDetectorRef;
        this.alertService = alertService;
        this.picking_id = 0;
        this.picking = [];
        this.done_log = '';
        this.moves = [];
        this.location_id = [];
        this.inputMethod = 'textBus';
        this.moves_int = [];
        this.action = 'select_location';
        this.selected_location = true;
        this.isValid = false;
        this.forceLocation = false;
        this.products = [];
        this.sequence_code = 'all';
    }
    ngOnInit() {
        this.sequence_code = this.route['params']['value']['picking_code'] || 'all';
        this.getMoves();
    }
    selectLocation() {
        this.action = 'select_location';
    }
    leaveProduct() {
        this.done_log = '';
        this.action = 'leave';
    }
    getLocationDest() {
        const location_dest_id = this.moves.reduce((unique, o) => {
            if (!unique.some((obj) => obj.location_dest_id[0] === o.location_dest_id[0]) &&
                o.scanned_qty > 0) {
                unique.push(o);
            }
            return unique;
        }, []);
        return location_dest_id;
    }
    filterLocations() {
        const moves_filter = this.moves.filter((e) => e.state != 'done'); // e.product_uom_qty > e.qty_done &&
        this.location_id = moves_filter.reduce((unique, o) => {
            if (!unique.some((obj) => obj.location_id[0] === o.location_id[0])) {
                unique.push(o);
            }
            return unique;
        }, []);
    }
    searchByCode(code) {
        switch (this.action) {
            case 'select_location':
                this.select_location_product(code);
                break;
            case 'get':
                break;
            case 'leave':
                this.leave_product_location(code);
                break;
        }
    }
    leave_product_location(code) {
        let i = 0;
        let childrens;
        let location = null;
        if (this.forceLocation) {
            // is valid location
            location = { id: 1, name: 'code' };
        }
        else {
            while (i < this.getLocationDest().length && !location) {
                this.changeDetectorRef.detectChanges();
                childrens = this.getLocationDest()[i].children;
                location = childrens.find((e) => e.name === code);
                if (!location) {
                    this.changeDetectorRef.detectChanges();
                    i += 1;
                }
            }
        }
        if (location) {
            this.ok_location_name = location['name'];
            this.moveProduct(location);
            this.isValid = true;
        }
        else {
            let children_names = childrens.map((e) => {
                return e.name;
            });
            this.alertService.showAlert('Ubicación incorrecta "' +
                code +
                '"\n disponibles: ' +
                children_names.join('\n'));
        }
        return;
    }
    back() {
        this.isValid = false;
        this.selected_location = true;
        this.action = 'select_location';
        this.filterLocations();
    }
    select_location_product(code) {
        const index = this.moves.findIndex((e) => e.location_name === code);
        this.moves[index];
        this.select_location(this.moves[index].location_id[0]);
    }
    moveProduct(location) {
        let scanned_qty_array = JSON.parse(localStorage.getItem('scanned_qty'));
        this.changeDetectorRef.detectChanges();
        if (scanned_qty_array && scanned_qty_array['mov_int']) {
            const len = scanned_qty_array['mov_int'].length;
            for (let i = 0; i < len; i++) {
                let selected_move = {};
                selected_move = this.moves.find((e) => e.id === scanned_qty_array['mov_int'][i]['id']);
                if (!selected_move) {
                    continue;
                }
                this.changeDetectorRef.detectChanges();
                this.stockService
                    .move_line_products('mov_int', selected_move, scanned_qty_array['mov_int'][i]['scanned_qty'], location)
                    .subscribe((r) => {
                    this.changeDetectorRef.detectChanges();
                    selected_move['qty_done'] = r['qty_done'];
                    selected_move['scanned_qty'] = 0;
                    this.done_log += r['name'] + '  ' + r['qty_done'] + '\n';
                });
            }
        }
    }
    validate() {
        this.stockService
            .button_validate(this.moves[0]['picking_id'][0])
            .subscribe((r) => {
            if (r) {
                this.alertService.showAlert('No se pudo validar el picking');
            }
            else {
                this.alertService.showAlert('Exito al validar el picking');
                this.router.navigate(['/picking-selector/' + this.sequence_code]);
            }
        });
    }
    getProductsByLocation(id) {
        let products;
        products = this.moves.filter((e) => e.location_id[0] == id);
        this.selected_location = !this.selected_location;
        return products;
    }
    getProductsByDestLocation(id) {
        let products;
        products = this.moves
            .filter((e) => e.location_dest_id[0] == id && e.scanned_qty > 0)
            .map(function (line) {
            return line['scanned_qty'] + ' -> ' + line['product_id'][1];
        });
        return products.join('<br/>');
    }
    getMoves() {
        this.picking_id = this.route['params']['value']['picking_id'];
        let leaf = [['picking_id', '=', Number(this.picking_id)]];
        this.stockService.getMovesLines(leaf).subscribe((res) => {
            console.log(res);
            this.moves = res['records'];
            this.filterLocations();
        });
    }
    volver() {
        this.selected_location = true;
        this.filterLocations();
    }
    select_location(location_id) {
        this.products = this.getProductsByLocation(location_id);
    }
    refresh() { }
}
MovIntDetailComponent.ɵfac = function MovIntDetailComponent_Factory(t) { return new (t || MovIntDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
MovIntDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovIntDetailComponent, selectors: [["app-mov-int-detail"]], decls: 13, vars: 11, consts: [["class", "col-12", 3, "inputMethod", "searchByCode", 4, "ngIf"], ["class", "list-group", 4, "ngIf"], [4, "ngIf"], [3, "products", 4, "ngIf"], [1, "row", "text-center"], ["role", "group", 1, "btn-group", "btn-group-lg", "fixed-bottom"], ["type", "button", 3, "ngClass", "click", 4, "ngIf"], ["type", "button", 3, "ngClass", "click"], [1, "fa", "fa-refresh"], [1, "col-12", 3, "inputMethod", "searchByCode"], [1, "list-group"], [4, "ngFor", "ngForOf"], [1, "text-left", "list-group-item", 3, "click"], [1, "btn", "btn-primary", 3, "click"], ["class", "h5", 4, "ngIf"], ["class", "row pb-3 mb-3", 4, "ngIf"], [1, "h5"], [1, "list-group-item", "active"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [3, "innerHTML"], ["role", "alert", 1, "alert", "alert-success"], [1, "row", "pb-3", "mb-3"], [1, "col-6", "text-center"], [1, "btn", "btn-secondary", 2, "width", "80%", 3, "click"], [1, "btn", "btn-primary", 2, "width", "80%", 3, "click"], [3, "products"], [1, "fa", "fa-font"], [1, "fa", "fa-barcode"]], template: function MovIntDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovIntDetailComponent_read_code_0_Template, 1, 1, "read-code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovIntDetailComponent_ul_1_Template, 3, 2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MovIntDetailComponent_ng_container_2_Template, 4, 3, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovIntDetailComponent_app_mov_int_detail_product_3_Template, 1, 1, "app-mov-int-detail-product", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MovIntDetailComponent_button_6_Template, 2, 2, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MovIntDetailComponent_button_7_Template, 2, 2, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MovIntDetailComponent_button_8_Template, 2, 2, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MovIntDetailComponent_button_9_Template, 2, 2, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MovIntDetailComponent_button_10_Template, 2, 2, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailComponent_Template_button_click_11_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected_location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected_location && ctx.action === "select_location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected_location && ctx.action === "leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selected_location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected_location && ctx.action !== "leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selected_location && ctx.action === "leave");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selected_location);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputMethod == "textBus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputMethod == "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _main_comunes_read_code_read_code_component__WEBPACK_IMPORTED_MODULE_5__["ReadCodeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _mov_int_detail_product_mov_int_detail_product_component__WEBPACK_IMPORTED_MODULE_6__["MovIntDetailProductComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3YtaW50LWRldGFpbC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovIntDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mov-int-detail',
                templateUrl: './mov-int-detail.component.html',
                styleUrls: ['./mov-int-detail.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/angular/app_depo/src/main.ts */"zUnb");


/***/ }),

/***/ "1Ict":
/*!********************************************************************!*\
  !*** ./src/app/main/elements/price-label/price-label.component.ts ***!
  \********************************************************************/
/*! exports provided: PriceLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceLabelComponent", function() { return PriceLabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/config.service */ "rkFe");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function PriceLabelComponent_div_0_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r1.product["prices"][0].price, "1.2"), "");
} }
function PriceLabelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PriceLabelComponent_div_0_h1_3_Template, 3, 4, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx_r0.ConfigService.params.labelHeight, "px")("width", ctx_r0.ConfigService.params.labelWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx_r0.ConfigService.params.labelWidth)("height", ctx_r0.ConfigService.params.labelHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.product["display_name"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.product.prices.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.product["default_code"], " / ", ctx_r0.product["barcode"], "");
} }
class PriceLabelComponent {
    constructor(ConfigService) {
        this.ConfigService = ConfigService;
        this.printLabel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    print() {
        this.printLabel.emit();
    }
}
PriceLabelComponent.ɵfac = function PriceLabelComponent_Factory(t) { return new (t || PriceLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"])); };
PriceLabelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PriceLabelComponent, selectors: [["app-price-label"]], inputs: { product: "product" }, outputs: { printLabel: "printLabel" }, decls: 1, vars: 1, consts: [["style", "background: #FFF; ", "class", "etiqueta", 3, "height", "width", 4, "ngIf"], [1, "etiqueta", 2, "background", "#FFF", 3, "width", "height"], [1, "productName", 2, "text-align", "center"], ["class", "productPrice", "style", "text-align: center;background: #000; color: #FFF;", 4, "ngIf"], [1, "productcodes"], [1, "productPrice", 2, "text-align", "center", "background", "#000", "color", "#FFF"]], template: function PriceLabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PriceLabelComponent_div_0_Template, 6, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]], styles: [".productName[_ngcontent-%COMP%]{\n\tfont-size: 1.2em;\n}\n.productPrice[_ngcontent-%COMP%]{\n\tfont-size: 3rem;\n}\n.fee[_ngcontent-%COMP%]{\n\tfont-size: 1.2em;\n\t\n}\n.productcodes[_ngcontent-%COMP%]{\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaWNlLWxhYmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGdCQUFnQjs7QUFFakI7QUFDQTs7QUFFQSIsImZpbGUiOiJwcmljZS1sYWJlbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3ROYW1le1xuXHRmb250LXNpemU6IDEuMmVtO1xufVxuLnByb2R1Y3RQcmljZXtcblx0Zm9udC1zaXplOiAzcmVtO1xufVxuLmZlZXtcblx0Zm9udC1zaXplOiAxLjJlbTtcblx0XG59XG4ucHJvZHVjdGNvZGVze1xuXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PriceLabelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-price-label',
                templateUrl: './price-label.component.html',
                styleUrls: ['./price-label.component.css']
            }]
    }], function () { return [{ type: _services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"] }]; }, { printLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "43DZ":
/*!********************************************************!*\
  !*** ./src/app/pages/select-db/select-db.component.ts ***!
  \********************************************************/
/*! exports provided: SelectDbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectDbComponent", function() { return SelectDbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/odoo-rpc.service */ "g35q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function SelectDbComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Debe ingresar un servidor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SelectDbComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectDbComponent_div_8_div_1_Template, 4, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formControls.url.errors.required);
} }
function SelectDbComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Debe ingresar una base de datos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SelectDbComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SelectDbComponent_div_13_div_1_Template, 4, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formControls.dbName.errors.required);
} }
const _c0 = function (a0) { return { "has-error": a0 }; };
class SelectDbComponent {
    constructor(router, formBuilder, odooRPC) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.odooRPC = odooRPC;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            url: [localStorage.getItem('url'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            dbName: [localStorage.getItem('dbName'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    get formControls() {
        return this.authForm.controls;
    }
    configure() {
        this.isSubmitted = true;
        if (this.authForm.invalid) {
            return;
        }
        const url = this.authForm.controls.url.value;
        const dbName = this.authForm.controls.dbName.value;
        localStorage.setItem('url', url);
        localStorage.setItem('dbName', dbName);
        this.odooRPC.init({
            odoo_server: url,
            http_auth: "username:password" // optional
        });
        this.router.navigate(["/login"]);
    }
}
SelectDbComponent.ɵfac = function SelectDbComponent_Factory(t) { return new (t || SelectDbComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_3__["OdooRPCService"])); };
SelectDbComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectDbComponent, selectors: [["app-select-db"]], decls: 18, vars: 9, consts: [[1, "container", "bg-white", "rounded", "bg-gradient"], [1, "row"], [1, "col-md-4", "col-12", "mx-auto"], [1, "login-container", "p-3", 3, "formGroup", "ngSubmit"], [1, "form-group", 3, "ngClass"], ["for", "url"], ["type", "text", "placeholder", "https://miodoo.com", "id", "url", "aria-describedby", "urlHelp", "formControlName", "url", 1, "form-control", "input-custom"], ["class", "help-block text-white font-italic", 4, "ngIf"], ["for", "dbName"], ["type", "text", "placeholder", "odoo", "id", "dbName", "aria-describedby", "dbNameHelp", "formControlName", "dbName", 1, "form-control", "input-custom"], [1, "col-12", "text-center"], ["type", "submit", 1, "btn", "btn-login", "btn-block", "btn-success", "btn-lg", "w-100"], [1, "help-block", "text-white", "font-italic"], [4, "ngIf"]], template: function SelectDbComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SelectDbComponent_Template_form_ngSubmit_3_listener() { return ctx.configure(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Servidor:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SelectDbComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Nombre de la base de datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SelectDbComponent_div_13_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Guardar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.authForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.isSubmitted && ctx.formControls.url.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.formControls.url.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.isSubmitted && ctx.formControls.url.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.formControls.dbName.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxlY3QtZGIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectDbComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-select-db',
                templateUrl: './select-db.component.html',
                styleUrls: ['./select-db.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_3__["OdooRPCService"] }]; }, null); })();


/***/ }),

/***/ "5aEy":
/*!***************************************************************!*\
  !*** ./src/app/main/comunes/read-code/read-code.component.ts ***!
  \***************************************************************/
/*! exports provided: ReadCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadCodeComponent", function() { return ReadCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/config.service */ "rkFe");
/* harmony import */ var _services_honey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/honey.service */ "bwkT");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/events.service */ "HgL4");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/alert.service */ "f5O9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = ["search"];
function ReadCodeComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.textBus ? ctx_r0.textBus : "c\u00F3digo", " ");
} }
function ReadCodeComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ReadCodeComponent_form_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.formSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.searchForm);
} }
class ReadCodeComponent {
    constructor(formBuilder, ConfigService, HoneyService, changeDetectorRef, events, alertService) {
        this.formBuilder = formBuilder;
        this.ConfigService = ConfigService;
        this.HoneyService = HoneyService;
        this.changeDetectorRef = changeDetectorRef;
        this.events = events;
        this.alertService = alertService;
        this.searchByCode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.inputMethod = '';
        this.textBus = '';
        this.showLog = false;
        this.showDialog$ = alertService.show;
    }
    ngOnInit() {
        this.inputMethod = this.ConfigService.params.scanMethod;
        this.showLog = this.ConfigService.params.showLog;
        this.searchForm = this.formBuilder.group({
            search: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        let parent = this;
        this.showDialog$.subscribe((res) => {
            this.listenerKeyboard = res;
        });
        this.HoneyService.startBarcode();
        this.HoneyService.BarcodeData.subscribe((res) => {
            this.changeDetectorRef.detectChanges();
            if (parent.inputMethod == 'textBus' && res) {
                this.searchByCode.emit(res);
                parent.changeDetectorRef.detectChanges();
            }
        });
    }
    ngOnChanges() {
        if (this.inputMethod == 'textBus') {
            this.searchForm = this.formBuilder.group({
                search: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            });
        }
        else {
            this.textBus = '';
        }
    }
    formSearch() {
        const search = this.searchForm.controls.search.value;
        this.searchByCode.emit(search);
    }
    handleKeyboardpressEvent(event) {
        if (!this.listenerKeyboard) {
            if (this.inputMethod != 'textBus') {
                return;
            }
            if (event.keyCode == 13) {
                this.searchByCode.emit(this.textBus);
                this.textBus = '';
            }
            else {
                this.textBus += event.key;
                event.stopPropagation();
            }
        }
    }
    handleKeyboardEvent(event) {
        if (!this.listenerKeyboard) {
            if (this.inputMethod != 'textBus') {
                return;
            }
            if (event.keyCode == 27) {
                this.textBus = '';
            }
            else if (event.keyCode == 8) {
                this.textBus = this.textBus.substring(0, this.textBus.length - 1);
            }
        }
    }
}
ReadCodeComponent.ɵfac = function ReadCodeComponent_Factory(t) { return new (t || ReadCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_honey_service__WEBPACK_IMPORTED_MODULE_3__["HoneyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_events_service__WEBPACK_IMPORTED_MODULE_4__["Events"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"])); };
ReadCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReadCodeComponent, selectors: [["read-code"]], viewQuery: function ReadCodeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchElement = _t.first);
    } }, hostBindings: function ReadCodeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function ReadCodeComponent_keypress_HostBindingHandler($event) { return ctx.handleKeyboardpressEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function ReadCodeComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { inputMethod: "inputMethod" }, outputs: { searchByCode: "searchByCode" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "formGroup", 4, "ngIf"], [1, "text-center", "card", "text-monospace", "text-bus", "mb-2"], [3, "formGroup"], [1, "input-group", "input-group-lg"], ["type", "text", "autofocus", "", "id", "bus", "formControlName", "search", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control"], ["search", ""], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "fa", "fa-search"]], template: function ReadCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ReadCodeComponent_ng_container_0_Template, 3, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReadCodeComponent_form_1_Template, 7, 1, "form", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputMethod == "textBus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputMethod == "form");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".text-bus[_ngcontent-%COMP%] {\n  height: 34px;\n  font-size: 22px;\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlYWQtY29kZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7QUFDekIiLCJmaWxlIjoicmVhZC1jb2RlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1idXMge1xuICBoZWlnaHQ6IDM0cHg7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReadCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'read-code',
                templateUrl: './read-code.component.html',
                styleUrls: ['./read-code.component.css'],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_2__["ConfigService"] }, { type: _services_honey_service__WEBPACK_IMPORTED_MODULE_3__["HoneyService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_events_service__WEBPACK_IMPORTED_MODULE_4__["Events"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }]; }, { searchByCode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], inputMethod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['search']
        }], handleKeyboardpressEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keypress', ['$event']]
        }], handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "6Wx3":
/*!***************************************************!*\
  !*** ./src/app/main/comunes/log/log.component.ts ***!
  \***************************************************/
/*! exports provided: LogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogComponent", function() { return LogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/log.service */ "FYe3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function LogComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r1.component, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r1.date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", l_r1.error, " ");
} }
const _c0 = function () { return { btn: true, "btn-danger": true }; };
class LogComponent {
    constructor(logService) {
        this.logService = logService;
    }
    ngOnInit() {
        this.log = this.logService.getLog();
    }
    testLog() {
        this.logService.addLog('test', 'aca va mi error');
        this.log = this.logService.getLog();
    }
    clearLog() {
        this.logService.purgeLog();
        this.log = [];
    }
    checkLog() {
        this.logService.checkLog();
        this.log = this.logService.getLog();
    }
}
LogComponent.ɵfac = function LogComponent_Factory(t) { return new (t || LogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"])); };
LogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogComponent, selectors: [["log"]], decls: 3, vars: 3, consts: [["class", "row", 4, "ngFor", "ngForOf"], ["type", "button", 3, "ngClass", "click"], [1, "row"], [1, "col-12", "text-primary", "bg-danger", "text-bold", "text-center"], [1, "col-12", "text-right"], [1, "col-12", "text-monospace"]], template: function LogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LogComponent_div_0_Template, 7, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LogComponent_Template_button_click_1_listener() { return ctx.clearLog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " LIMPIAR LOG\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.log);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2cuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'log',
                templateUrl: './log.component.html',
                styleUrls: ['./log.component.css'],
            }]
    }], function () { return [{ type: _services_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"] }]; }, null); })();


/***/ }),

/***/ "89aN":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/stock/mov-int-detail-product/mov-int-detail-product.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MovIntDetailProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovIntDetailProductComponent", function() { return MovIntDetailProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/stock.service */ "CFEw");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/alert.service */ "f5O9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_comunes_read_code_read_code_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../main/comunes/read-code/read-code.component */ "5aEy");
/* harmony import */ var _main_comunes_input_cant_keyboard_button_input_cant_keyboard_button_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../main/comunes/input-cant-keyboard-button/input-cant-keyboard-button.component */ "zacy");









const _c0 = ["moveLineModal"];
function MovIntDetailProductComponent_read_code_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "read-code", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchByCode", function MovIntDetailProductComponent_read_code_3_Template_read_code_searchByCode_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.searchByCode($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputMethod", ctx_r0.inputMethod);
} }
const _c1 = function (a2, a3) { return { "text-bold": true, "text-white": true, "bg-warning": a2, "bg-success": a3 }; };
function MovIntDetailProductComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailProductComponent_ng_container_5_Template_li_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.openMoveLineModal(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c1, item_r6["product_uom_qty"] > item_r6["scanned_qty"] + item_r6["qty_done"], item_r6["product_uom_qty"] <= item_r6["scanned_qty"] + item_r6["qty_done"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r6["scanned_qty"] + item_r6["qty_done"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6["product_id"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Movimiento ", item_r6["location_id"][1], " -> ", item_r6["location_dest_id"][1], " ");
} }
function MovIntDetailProductComponent_ng_template_6_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Remito: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r12.products[ctx_r12.active_index]["picking_id"][1]);
} }
function MovIntDetailProductComponent_ng_template_6_div_0_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Codigo de barra: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r13.products[ctx_r13.active_index]["barcode"]);
} }
const _c2 = function (a2) { return { btn: true, "btn-dark": true, active: a2 }; };
const _c3 = function () { return { btn: true, "btn-danger": true }; };
function MovIntDetailProductComponent_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Escaneados");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MovIntDetailProductComponent_ng_template_6_div_0_div_10_Template, 4, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Unidad: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Realizado/Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "/ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Origen: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MovIntDetailProductComponent_ng_template_6_div_0_div_26_Template, 4, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Codigo interno: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailProductComponent_ng_template_6_div_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.qtyDir = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailProductComponent_ng_template_6_div_0_Template_button_click_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.qtyDir = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailProductComponent_ng_template_6_div_0_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r17.addScannedQuantity(ctx_r17.active_index, 1 * ctx_r17.qtyDir); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailProductComponent_ng_template_6_div_0_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.addScannedQuantity(ctx_r18.active_index, 5 * ctx_r18.qtyDir); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailProductComponent_ng_template_6_div_0_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.addScannedQuantity(ctx_r19.active_index, 10 * ctx_r19.qtyDir); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailProductComponent_ng_template_6_div_0_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.addScannedQuantity(ctx_r20.active_index, 50 * ctx_r20.qtyDir); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " 50 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailProductComponent_ng_template_6_div_0_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.addScannedQuantity(ctx_r21.active_index, 100 * ctx_r21.qtyDir); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " 100 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "input-cant-keyboard-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("evento", function MovIntDetailProductComponent_ng_template_6_div_0_Template_input_cant_keyboard_button_evento_50_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r22.setCantidad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntDetailProductComponent_ng_template_6_div_0_Template_button_click_52_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const modal_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return modal_r10.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.products[ctx_r11.active_index]["product_id"][1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.products[ctx_r11.active_index]["scanned_qty"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.products[ctx_r11.active_index]["picking_id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.products[ctx_r11.active_index]["product_uom_id"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.products[ctx_r11.active_index]["qty_done"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.products[ctx_r11.active_index]["product_uom_qty"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.products[ctx_r11.active_index]["location_id"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.products[ctx_r11.active_index]["barcode"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r11.products[ctx_r11.active_index]["default_code"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c2, ctx_r11.qtyDir == -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c2, ctx_r11.qtyDir == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c3));
} }
function MovIntDetailProductComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MovIntDetailProductComponent_ng_template_6_div_0_Template, 54, 25, "div", 13);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.active_index !== undefined);
} }
class MovIntDetailProductComponent {
    constructor(route, stockService, modalService, changeDetectorRef, alertService) {
        this.route = route;
        this.stockService = stockService;
        this.modalService = modalService;
        this.changeDetectorRef = changeDetectorRef;
        this.alertService = alertService;
        this.location_id = 0;
        this.picking_id = 0;
        this.moves = [];
        this.product_id = [];
        this.active_index = undefined;
        this.addQty = 1;
        this.qtyDir = 1;
        this.products = [];
        this.inputMethod = 'textBus';
        this.showReadCode = true;
    }
    ngOnInit() {
        //this.getMoves();
    }
    searchByCode(code) {
        this.changeDetectorRef.detectChanges();
        if (code.length < 2) {
            return;
        }
        var line = this.products.findIndex(function (item) {
            let codeLow = code.toLowerCase();
            return ((item.default_code == code || item.barcode == code) &&
                item.product_uom_qty > item.scanned_qty + item.qty_done
            //|| item.picking_id[1].toLowerCase().indexOf(codeLow) !== -1
            /*         item.quantity_done < item.reserved_availability
             */
            );
        });
        if (line == -1) {
            this.alertService.showAlert(code + ' NO diponible');
        }
        else {
            let openModal = this.modalService.hasOpenModals();
            this.active_index = line;
            this.addScannedQuantity(line, 1);
            this.addQty = 1;
            this.qtyDir = 1;
            this.changeDetectorRef.detectChanges();
            if (!openModal) {
                this.modalService.open(this.moveLineModal).result.then((result) => {
                    this.active_index = undefined;
                    this.changeDetectorRef.detectChanges();
                });
            }
        }
    }
    setCantidad(objectResult) {
        this.showReadCode = objectResult.showReadCode;
        objectResult.cantidad &&
            this.addScannedQuantity(this.active_index, parseFloat(objectResult.cantidad));
    }
    openMoveLineModal(line) {
        this.active_index = line;
        this.addQty = 1;
        this.qtyDir = 1;
        this.modalService.open(this.moveLineModal).result.then((result) => {
            this.active_index = undefined;
        });
    }
    addToLocalStorage(storage, move, qty) {
        //console.log('aca me llego', move.id, move.scanned_qty);
        this.stockService.setQuantity(storage, move.id, qty);
    }
    removeToLocalStorage(storage, move) {
        //console.log('aca me llego', move.id, move.scanned_qty);
        this.stockService.deleteQuantity(storage, move.id);
    }
    addScannedQuantity(line, qty = 1) {
        this.changeDetectorRef.detectChanges();
        let selected_product = this.products[line];
        console.log(selected_product);
        let total = qty +
            this.products[line]['scanned_qty'] +
            this.products[line]['qty_done'];
        if (total > this.products[line]['product_uom_qty'] ||
            this.products[line]['scanned_qty'] + qty < 0) {
            this.modalService.dismissAll();
            return;
        }
        this.products[line]['scanned_qty'] += qty;
        //this.products[line]['qty_done'] += qty;
        // TODO: LocalSOTRAGE -> this.products[line]['scanned_qty']
        this.addToLocalStorage('mov_int', this.products[line], qty);
        if (total == this.products[line]['product_uom_qty']) {
            this.modalService.dismissAll();
            return;
        }
    }
}
MovIntDetailProductComponent.ɵfac = function MovIntDetailProductComponent_Factory(t) { return new (t || MovIntDetailProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
MovIntDetailProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovIntDetailProductComponent, selectors: [["app-mov-int-detail-product"]], viewQuery: function MovIntDetailProductComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.moveLineModal = _t.first);
    } }, inputs: { products: "products" }, decls: 8, vars: 2, consts: [[1, "text-center"], ["class", "col-12", 3, "inputMethod", "searchByCode", 4, "ngIf"], [1, "list-group"], [4, "ngFor", "ngForOf"], ["moveLineModal", ""], [1, "col-12", 3, "inputMethod", "searchByCode"], [1, "text-left", "list-group-item", 3, "click"], [1, "row"], [1, "text-center", "col-2", "pt-0", "pb-0", "pl-0", "pr-0"], [3, "ngClass"], [1, "col-8"], [1, "col-2"], [1, "col-12"], ["class", "modal-dialog", "role", "document", 4, "ngIf"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body"], [1, "bg-danger", "text-center", "text-white", "mb-0"], [1, "bg-dark", "text-center", "text-white", "mt-0"], [4, "ngIf"], ["role", "group", 1, "btn-group", "w-100"], ["type", "button", 3, "ngClass", "click"], [1, "fa", "fa-minus"], [1, "fa", "fa-plus"], ["role", "group", 1, "btn-group", "btn-group-lg", "w-100"], [3, "evento"], [1, "modal-footer"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-secondary", 3, "click"]], template: function MovIntDetailProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Seleccione Productos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MovIntDetailProductComponent_read_code_3_Template, 1, 1, "read-code", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MovIntDetailProductComponent_ng_container_5_Template, 13, 8, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MovIntDetailProductComponent_ng_template_6_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showReadCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _main_comunes_read_code_read_code_component__WEBPACK_IMPORTED_MODULE_6__["ReadCodeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _main_comunes_input_cant_keyboard_button_input_cant_keyboard_button_component__WEBPACK_IMPORTED_MODULE_7__["InputCantKeyboardButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3YtaW50LWRldGFpbC1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovIntDetailProductComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mov-int-detail-product',
                templateUrl: './mov-int-detail-product.component.html',
                styleUrls: ['./mov-int-detail-product.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, { products: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], moveLineModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['moveLineModal']
        }] }); })();


/***/ }),

/***/ "9UFG":
/*!************************************************************!*\
  !*** ./src/app/pages/print-label/print-label.component.ts ***!
  \************************************************************/
/*! exports provided: PrintLabelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintLabelComponent", function() { return PrintLabelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/product.service */ "szdb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_printer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/printer.service */ "XQVu");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/events.service */ "HgL4");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/config.service */ "rkFe");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../_services/alert.service */ "f5O9");
/* harmony import */ var _main_elements_price_label_price_label_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../main/elements/price-label/price-label.component */ "1Ict");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_elements_product_prices_product_prices_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../main/elements/product-prices/product-prices.component */ "ezfU");















const _c0 = ["screen"];
const _c1 = ["canvas"];
const _c2 = ["search"];
function PrintLabelComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.textBus);
} }
function PrintLabelComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 37, 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintLabelComponent_form_6_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.formSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.searchForm);
} }
function PrintLabelComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PrintLabelComponent_textarea_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "textarea", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.log);
} }
function PrintLabelComponent_li_35_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintLabelComponent_li_35_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const pricelist_id_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.setPriceList(pricelist_id_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pricelist_id_r10 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", pricelist_id_r10 == ctx_r5.selected_pricelist_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", pricelist_id_r10.name, " ");
} }
function PrintLabelComponent_img_39_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintLabelComponent_img_39_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.capturedImage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.capturedImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c3 = function (a2) { return { btn: true, "btn-info": true, active: a2 }; };
const _c4 = function () { return { btn: true, "btn-info": true }; };
function _window() {
    // return the global native browser window object
    return window;
}
class PrintLabelComponent {
    constructor(productService, sanitizer, formBuilder, PrinterService, events, changeDetectorRef, ConfigService, alertService) {
        this.productService = productService;
        this.sanitizer = sanitizer;
        this.formBuilder = formBuilder;
        this.PrinterService = PrinterService;
        this.events = events;
        this.changeDetectorRef = changeDetectorRef;
        this.ConfigService = ConfigService;
        this.alertService = alertService;
        this.textBus = '';
        this.keyboardDisable = true;
        this.intefaceBlocked = false;
        this.inputMethod = 'textBus';
        this.printAuto = false;
        this.printAutoDelay = 300;
        this.spinner = false;
        this.log = '';
        this.showLog = false;
    }
    ngOnInit() {
        this.printAuto = this.ConfigService.params.printAuto;
        this.printAutoDelay = this.ConfigService.params.printAutoDelay;
        this.inputMethod = this.ConfigService.params.scanMethod;
        this.showLog = this.ConfigService.params.showLog;
        this.searchForm = this.formBuilder.group({
            search: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        //this.connected();
        this.get_pricelist();
        this.textBus = '';
        if (this.inputMethod == 'form') {
            this.searchElement.nativeElement.focus();
        }
        let parent = this;
        if (this.ConfigService.params.PrinterName) {
            this.conectPrinter();
        }
    }
    //
    conectPrinter() {
        this.PrinterService.connected().subscribe((res) => {
            if (res) {
                console.log('impresora conectada');
            }
            else {
                this.PrinterService.connectPrinter(this.ConfigService.params.PrinterName).subscribe();
                //PrinterName
            }
        });
    }
    connected() {
        this.PrinterService.connected().subscribe((res) => {
            this.printer_status = res;
        });
    }
    handleKeyboardpressEvent(event) {
        if (this.inputMethod == 'form' && event.keyCode == 13) {
            this.formSearch();
        }
        if (this.inputMethod != 'textBus') {
            return;
        }
        if (event.keyCode == 13) {
            this.searchByCode(this.textBus);
        }
        else {
            this.textBus += event.key;
            event.stopPropagation();
        }
    }
    handleKeyboardEvent(event) {
        if (this.inputMethod != 'textBus') {
            return;
        }
        if (event.keyCode == 27) {
            this.textBus = '';
        }
        else if (event.keyCode == 8) {
            this.textBus = this.textBus.substring(0, this.textBus.length - 1);
        }
    }
    formSearch() {
        const search = this.searchForm.controls.search.value;
        this.searchByCode(search);
        this.searchForm.controls.search.patchValue('');
        this.searchElement.nativeElement.focus();
    }
    searchByCode(searchSting) {
        //alert('searchSting' + searchSting);
        let parent = this;
        this.log += '|' + searchSting + '|';
        this.product = false;
        this.spinner = true;
        this.changeDetectorRef.detectChanges();
        this.productService.searchByCode(searchSting).subscribe((res) => {
            if (res['length'] > 0) {
                parent.product = res['records'][0];
                parent.log = parent.log + res['records'][0]['name'] + '|';
                parent.product['prices'] = [];
                parent.load_price(res['records'][0]['id']);
            }
            else {
                this.alertService.showAlert('Código invalido');
                this.spinner = false;
            }
        });
        this.textBus = '';
    }
    load_price(product_id) {
        let printAutoDelay = this.printAutoDelay;
        let parent = this;
        this.productService
            .load_price(product_id, this.selected_pricelist_id)
            .subscribe({
            next(price) {
                parent.log = parent.log + JSON.stringify(price) + '|';
                parent.product['prices'].push(price);
            },
            complete() {
                parent.spinner = false;
                if (parent) {
                    parent.changeDetectorRef.detectChanges();
                }
                if (parent.printAuto) {
                    setTimeout(() => {
                        parent.printTag();
                    }, parent.printAutoDelay);
                }
            },
        });
    }
    get_pricelist() {
        this.productService.get_pricelists().subscribe((res) => {
            if (res['length'] > 0) {
                this.pricelist_ids = res['records'];
                this.selected_pricelist_id = res['records'];
            }
        });
    }
    setPriceList(pricelist_id) {
        this.selected_pricelist_id = pricelist_id;
        //  this.load_price(this.product.id);
    }
    printTag() {
        if (this.product) {
            html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(document.querySelector('.etiqueta'), {
                width: this.ConfigService.params.labelWidth,
                height: this.ConfigService.params.labelHeight,
                windowWidth: this.ConfigService.params.labelWidth,
                windowHeight: this.ConfigService.params.labelHeight,
                backgroundColor: '#FFFFFF',
            }).then((canvas) => {
                let b64 = canvas.toDataURL();
                this.capturedImage = this.sanitizer.bypassSecurityTrustResourceUrl(b64.replace(/\n/g, ''));
                this.PrinterService.printBase64(b64).subscribe((res) => {
                    //console.log(res);
                    this.capturedImage = '';
                });
            });
        }
    }
    toglePrintAuto() {
        this.printAuto = !this.printAuto;
    }
}
PrintLabelComponent.ɵfac = function PrintLabelComponent_Factory(t) { return new (t || PrintLabelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_printer_service__WEBPACK_IMPORTED_MODULE_5__["PrinterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_events_service__WEBPACK_IMPORTED_MODULE_6__["Events"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"])); };
PrintLabelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintLabelComponent, selectors: [["app-print-label"]], viewQuery: function PrintLabelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.screen = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvas = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchElement = _t.first);
    } }, hostBindings: function PrintLabelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function PrintLabelComponent_keypress_HostBindingHandler($event) { return ctx.handleKeyboardpressEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function PrintLabelComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([])], decls: 40, vars: 22, consts: [[1, "row", "text-center", "mt-2"], [1, "col-12"], [2, "background", "#eee"], [3, "product", "click"], ["etiqueta", ""], ["class", "text-center", 4, "ngIf"], [3, "formGroup", 4, "ngIf"], [1, "text-center", "spinnerContent"], ["class", "spinner-grow text-warning", "style", "width: 5rem; height: 5rem", "role", "status", 4, "ngIf"], [3, "product"], [1, "row", "text-center"], ["role", "group", 1, "btn-group", "btn-group-lg", "fixed-bottom"], ["type", "button", 3, "ngClass", "click"], [1, "fa", "fa-font"], [1, "fa", "fa-barcode"], [1, "fa", "fa-print", "fa-lg"], ["type", "button", "data-toggle", "modal", "data-target", "#pricelistModal", 3, "ngClass"], [1, "fa", "fa-lg", "fa-list"], ["style", "width: 100%", 4, "ngIf"], ["id", "pricelistModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "pricelistModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "list-group"], [1, "list-group-item", 3, "click"], ["type", "checkbox", "aria-label", "todas", 1, "form-check-input", "me-1", 3, "checked"], ["class", "list-group-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["class", "overimg", "style", "height: auto; width: 100%; box-shadow: 5px 9px 20px #333", 3, "src", "click", 4, "ngIf"], [1, "text-center"], [3, "formGroup"], [1, "input-group", "input-group-lg"], ["type", "text", "autofocus", "", "id", "bus", "formControlName", "search", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control"], ["search", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "fa", "fa-search"], ["role", "status", 1, "spinner-grow", "text-warning", 2, "width", "5rem", "height", "5rem"], [1, "sr-only"], [2, "width", "100%"], ["type", "checkbox", 1, "form-check-input", "me-1", 3, "checked"], [1, "overimg", 2, "height", "auto", "width", "100%", "box-shadow", "5px 9px 20px #333", 3, "src", "click"]], template: function PrintLabelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-price-label", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintLabelComponent_Template_app_price_label_click_3_listener() { return ctx.printTag(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PrintLabelComponent_div_5_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PrintLabelComponent_form_6_Template, 7, 1, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PrintLabelComponent_div_8_Template, 3, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-product-prices", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintLabelComponent_Template_button_click_12_listener() { return ctx.inputMethod = "form"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintLabelComponent_Template_button_click_14_listener() { return ctx.inputMethod = "textBus"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintLabelComponent_Template_button_click_16_listener() { return ctx.toglePrintAuto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, PrintLabelComponent_textarea_20_Template, 2, 1, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Listas de precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintLabelComponent_Template_li_click_32_listener() { return ctx.setPriceList(ctx.pricelist_ids); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Todas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, PrintLabelComponent_li_35_Template, 3, 2, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, PrintLabelComponent_img_39_Template, 1, 1, "img", 33);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.ConfigService.params.labelHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputMethod == "textBus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputMethod == "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c3, ctx.inputMethod == "form"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c3, ctx.inputMethod == "textBus"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c3, ctx.printAuto));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showLog);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.pricelist_ids == ctx.selected_pricelist_id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pricelist_ids);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.capturedImage);
    } }, directives: [_main_elements_price_label_price_label_component__WEBPACK_IMPORTED_MODULE_9__["PriceLabelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _main_elements_product_prices_product_prices_component__WEBPACK_IMPORTED_MODULE_11__["ProductPricesComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]], styles: [".overimg[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop :150px ;\n\tleft: 0;\n\tz-index: 8000;\n\n}\n.spinnerContent[_ngcontent-%COMP%] {\n\tz-index: 800;\n\ttop: 100px;\n\tleft: 100px;\n\tposition: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LWxhYmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLE9BQU87Q0FDUCxhQUFhOztBQUVkO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osVUFBVTtDQUNWLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkIiLCJmaWxlIjoicHJpbnQtbGFiZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVyaW1nIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3AgOjE1MHB4IDtcblx0bGVmdDogMDtcblx0ei1pbmRleDogODAwMDtcblxufVxuLnNwaW5uZXJDb250ZW50IHtcblx0ei1pbmRleDogODAwO1xuXHR0b3A6IDEwMHB4O1xuXHRsZWZ0OiAxMDBweDtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintLabelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print-label',
                templateUrl: './print-label.component.html',
                styleUrls: ['./print-label.component.css'],
                providers: [],
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_printer_service__WEBPACK_IMPORTED_MODULE_5__["PrinterService"] }, { type: _services_events_service__WEBPACK_IMPORTED_MODULE_6__["Events"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }]; }, { screen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['screen']
        }], canvas: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['canvas']
        }], searchElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['search']
        }], handleKeyboardpressEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keypress', ['$event']]
        }], handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:keydown', ['$event']]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    odoo_server: '/odoo',
    //db: '13_goro',
    //db: 'testing.casagoro.com.ar',
    db: '13_bid',
    //db: 'train-bidargentinasa-20-10-2',
    password: '',
    user: '',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CFEw":
/*!********************************************!*\
  !*** ./src/app/_services/stock.service.ts ***!
  \********************************************/
/*! exports provided: StockService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockService", function() { return StockService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _odoo_rpc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./odoo-rpc.service */ "g35q");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alert.service */ "f5O9");






class StockService {
    constructor(odooRPC, alertService) {
        this.odooRPC = odooRPC;
        this.alertService = alertService;
    }
    getQuantityStorage(storage) {
        let scanned_qty_array = JSON.parse(localStorage.getItem('scanned_qty'));
        if (scanned_qty_array && scanned_qty_array[storage]) {
            return scanned_qty_array;
        }
        return [];
    }
    controlInventory() {
        const controlInventory = this.getQuantityStorage('stock_inventory');
        if (controlInventory.stock_inventory.length) {
            for (let i = 0; i < controlInventory.stock_inventory.length; i++) {
                this.odooRPC
                    .call('stock.inventory.line', 'write', [
                    [controlInventory.stock_inventory[i].id],
                    { product_qty: controlInventory.stock_inventory[i].scanned_qty },
                ], {})
                    .then((res) => {
                    this.deleteQuantity('stock_inventory', controlInventory.stock_inventory[i].id);
                });
            }
        }
    }
    getWh() {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            var prlsIds = [];
            this.odooRPC
                .searchRead('stock.warehouse', [], ['name', 'lot_stock_id', 'wh_input_stock_loc_id'], 0, 0)
                .then((res) => {
                observer.next(res);
                observer.complete();
                observer.complete();
            })
                .catch((err) => {
                this.alertService.showAlert(err);
            });
        });
        return transaction$;
    }
    getLocationByCode(code) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            var prlsIds = [];
            this.odooRPC
                .searchRead('stock.location', [['name', '=', code]], ['name', 'barcode'], 1, 0)
                .then((res) => {
                observer.next(res);
                observer.complete();
                observer.complete();
            })
                .catch((err) => {
                this.alertService.showAlert(err);
            });
        });
        return transaction$;
    }
    getPicking(leaf = []) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.odooRPC
                .searchRead('stock.picking', leaf, [
                'partner_id',
                'user_id',
                'origin',
                'display_name',
                'scheduled_date',
                'location_id',
                'location_dest_id',
                'move_lines',
                'priority',
                'computed_roadmap_id',
            ], 0, 0, {}, 'priority asc')
                .then((res) => {
                observer.next(res);
                observer.complete();
            });
        });
        return transaction$;
    }
    getMoveById(id) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.odooRPC
                .read('stock.move', [id], ['product_id', 'date', 'reference', 'product_uom', 'product_uom_qty'], {})
                .then((res) => {
                observer.next(res);
                observer.complete();
            });
        });
        return transaction$;
    }
    searchProductByLine(code) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.odooRPC
                .searchRead('product.product', [['barcode', '=', code]], [], 0, 0, {})
                .then((res) => {
                observer.next(res);
                observer.complete();
            });
        });
        return transaction$;
    }
    newLine(product_id, inventory_id, location_id, product_uom_id) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.odooRPC
                .call('stock.inventory.line', 'create', [{ product_id, inventory_id, location_id, product_uom_id }], {})
                .then((res) => {
                observer.next(res);
                observer.complete();
            });
        });
        return transaction$;
    }
    getStockInventory(leaf = []) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.odooRPC
                .searchRead('stock.inventory', leaf, [], 0, 0, {}, 'id asc')
                .then((res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const len = res.records.length;
                for (let i = 0; i < len; i++) {
                    let locations_id = res['records'][i]['location_ids'];
                    let products_id = res['records'][i]['product_ids'];
                    let res_locations = yield this.odooRPC.read('stock.location', locations_id, ['name']);
                    res['records'][i]['locations'] = res_locations;
                    let res_product = yield this.odooRPC.read('product.product', products_id, ['uom_id', 'uom_po_id', 'display_name', 'barcode', 'default_code']);
                    res['records'][i]['products'] = res_product;
                }
                observer.next(res);
                observer.complete();
                //});
            }));
        });
        return transaction$;
    }
    getStockInventoryLine(leaf = [], storage = 'stock_inventory') {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.odooRPC
                .searchRead('stock.inventory.line', leaf, [], 0, 0, {}, 'id asc')
                .then((res) => {
                var self = this;
                let product_ids = res.records.map((e) => e.product_id[0]);
                this.odooRPC
                    .read('product.product', product_ids, [
                    'uom_id',
                    'uom_po_id',
                    'barcode',
                    'default_code',
                ])
                    .then((res_product) => {
                    let product_dict = {};
                    res_product.map(function (p) {
                        product_dict[p['id']] = p;
                    });
                    res['records'].forEach(function (part, index) {
                        res['records'][index]['barcode'] =
                            product_dict[part['product_id'][0]]['barcode'];
                        res['records'][index]['default_code'] =
                            product_dict[part['product_id'][0]]['default_code'];
                        res['records'][index]['uom_po_id'] =
                            product_dict[part['product_id'][0]]['uom_po_id'];
                        res['records'][index]['uom_id'] =
                            product_dict[part['product_id'][0]]['uom_id'];
                        if (self.getQuantity(storage, res['records'][index].id) > -1) {
                            const cant = self.getQuantity(storage, res['records'][index].id);
                            res['records'][index]['scanned_qty'] = cant;
                            res['records'][index]['product_qty'] = cant;
                        }
                        else {
                            res['records'][index]['scanned_qty'] =
                                res['records'][index]['product_qty'];
                        }
                        observer.next(res);
                        observer.complete();
                    });
                });
                //});
            });
        });
        return transaction$;
    }
    getStockInventoryLineUbications(leaf = []) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.odooRPC
                .searchRead('stock.inventory.line', leaf, [], 0, 0, {}, 'id asc')
                .then((res) => {
                var self = this;
                let locations_ids = res['records'].map(function (move) {
                    return move['location_id'][0];
                });
                this.odooRPC
                    .read('stock.location', locations_ids, ['name'])
                    .then((res_locations) => {
                    observer.next(res_locations);
                    observer.complete();
                });
                //});
            });
        });
        return transaction$;
    }
    getMovesLines(leaf = []) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.odooRPC
                .searchRead('stock.move.line', leaf, [], 0, 0, {}, 'id asc')
                .then((res) => {
                let product_ids = res['records'].map(function (move) {
                    return move['product_id'][0];
                });
                let locations_ids = res['records'].map(function (move) {
                    return move['location_id'][0];
                });
                let locations_dest_ids = res['records'].map(function (move) {
                    return move['location_dest_id'][0];
                });
                // "[('categ_id', 'child_of', 94)]"
                const locations = [
                    ...new Set([...locations_ids, ...locations_dest_ids]),
                ];
                this.odooRPC
                    .read('product.product', product_ids, [
                    'uom_id',
                    'uom_po_id',
                    'barcode',
                    'default_code',
                ])
                    .then((products) => {
                    let product_dict = {};
                    products.map(function (p) {
                        product_dict[p['id']] = p;
                    });
                    this.odooRPC
                        .read('stock.location', locations, ['name'])
                        .then((res_locations) => {
                        let location_dict = {};
                        res_locations.map(function (p) {
                            location_dict[p['id']] = p;
                        });
                        var self = this;
                        res['records'].forEach(function (part, index) {
                            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                res['records'][index]['barcode'] =
                                    product_dict[part['product_id'][0]]['barcode'];
                                res['records'][index]['default_code'] =
                                    product_dict[part['product_id'][0]]['default_code'];
                                res['records'][index]['uom_po_id'] =
                                    product_dict[part['product_id'][0]]['uom_po_id'];
                                res['records'][index]['uom_id'] =
                                    product_dict[part['product_id'][0]]['uom_id'];
                                res['records'][index]['location_name'] =
                                    location_dict[part['location_id'][0]]['name'];
                                res['records'][index]['location_dest_name'] =
                                    location_dict[part['location_dest_id'][0]]['name'];
                                self.odooRPC
                                    .searchRead('stock.location', [
                                    [
                                        'id',
                                        'child_of',
                                        res['records'][0]['location_dest_id'][0],
                                    ],
                                ], ['name', 'id'], 0, 0, {})
                                    .then((res_child) => {
                                    let path_three = '';
                                    for (let i = 0; i < res_child.length; i++) {
                                        path_three += res_child.records[i].name;
                                        i + 1 !== res_child.length
                                            ? (path_three += '/')
                                            : null;
                                    }
                                    res['records'][index]['children_path'] = path_three;
                                    res['records'][index]['children'] =
                                        res_child['records'];
                                });
                                //['stock.location'].search([['location_id', 'child_of', 12]])
                                if (self.getQuantity('mov_int', res['records'][index].id) > -1) {
                                    const cant = self.getQuantity('mov_int', res['records'][index].id);
                                    res['records'][index]['scanned_qty'] = cant;
                                    //res['records'][index]['quantity_done'] = cant;
                                }
                                else {
                                    res['records'][index]['scanned_qty'] = 0;
                                }
                                res['records'][index]['scanned_qty'] =
                                    res['records'][index]['scanned_qty'] + 0;
                                //res['records'][index]['qty_done'];
                            });
                        });
                        observer.next(res);
                        observer.complete();
                    });
                });
            });
        });
        return transaction$;
    }
    getMoves(leaf, storage = 'moves', get_lines = false) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.odooRPC
                .searchRead('stock.move', leaf, [
                'product_id',
                'name',
                'product_uom_qty',
                'product_uom',
                'reserved_availability',
                'quantity_done',
                'sequence',
                'picking_id',
                'company_id',
                'location_id',
                'location_dest_id',
                'purchase_line_id',
                'move_line_ids',
                'move_line_nosuggest_ids',
                'origin',
            ], 0, 0)
                .then((res) => {
                let product_ids = res['records'].map(function (move) {
                    return move['product_id'][0];
                });
                this.odooRPC
                    .read('product.product', product_ids, [
                    'uom_id',
                    'uom_po_id',
                    'barcode',
                    'default_code',
                ])
                    .then((products) => {
                    let product_dict = {};
                    products.map(function (p) {
                        product_dict[p['id']] = p;
                    });
                    var self = this;
                    res['records'].forEach(function (part, index) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            res['records'][index]['barcode'] =
                                product_dict[part['product_id'][0]]['barcode'];
                            res['records'][index]['default_code'] =
                                product_dict[part['product_id'][0]]['default_code'];
                            res['records'][index]['uom_po_id'] =
                                product_dict[part['product_id'][0]]['uom_po_id'];
                            res['records'][index]['uom_id'] =
                                product_dict[part['product_id'][0]]['uom_id'];
                            if (self.getQuantity(storage, res['records'][index].id) > -1) {
                                const cant = self.getQuantity(storage, res['records'][index].id);
                                res['records'][index]['scanned_qty'] = cant;
                                res['records'][index]['quantity_done'] = cant;
                            }
                            else {
                                res['records'][index]['scanned_qty'] = 0;
                            }
                        });
                    });
                    if (get_lines) {
                        let move_ids = res['records'].map(function (move) {
                            return move['id'];
                        });
                        this.odooRPC
                            .searchRead('stock.move.line', [['move_id', 'in', move_ids]], [
                            'move_id',
                            'picking_id',
                            'location_id',
                            'location_dest_id',
                            'state',
                        ])
                            .then((lines) => {
                            observer.next(res);
                            observer.complete();
                        });
                    }
                    else {
                        observer.next(res);
                        observer.complete();
                    }
                });
            })
                .catch((err) => {
                this.alertService.showAlert(err);
            });
        });
        return transaction$;
    }
    getQuantity(storage, id) {
        let scanned_qty_array = JSON.parse(localStorage.getItem('scanned_qty'));
        if (scanned_qty_array && scanned_qty_array[storage]) {
            let element = scanned_qty_array[storage].find((e) => id == e.id);
            if (element) {
                return element.scanned_qty;
            }
        }
        return -1;
    }
    move_products(storage, move_id, qty_done, description_picking = '') {
        //let difference = move_id.move_line_ids.filter(x => !move_id.move_line_nosuggest_ids.includes(x));
        let move_line = {
            picking_id: move_id.picking_id[0],
            move_id: move_id.id,
            company_id: move_id.company_id[0],
            product_id: move_id.product_id[0],
            product_uom_id: move_id.product_uom[0],
            location_id: move_id.location_id[0],
            location_dest_id: move_id.location_dest_id[0],
            description_picking: description_picking,
            qty_done: qty_done || move_id['qty_done'],
        };
        this.deleteQuantity(storage, move_id.move_id);
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            if (move_id.move_line_ids.length) {
                if (move_id['qty_done']) {
                    move_line['qty_done'] = qty_done + move_id['qty_done'];
                }
                else {
                    move_line['qty_done'] = qty_done;
                }
                this.odooRPC
                    .call('stock.move.line', 'write', [[move_id.move_line_ids[0]], move_line], {})
                    .then((res) => {
                    observer.next(move_id.move_line_ids[0]);
                    observer.complete();
                })
                    .catch((err) => {
                    this.alertService.showAlert(err);
                });
            }
            else {
                this.odooRPC
                    .call('stock.move.line', 'create', [move_line], {})
                    .then((res) => {
                    observer.next(res);
                    observer.complete();
                })
                    .catch((err) => {
                    this.alertService.showAlert(err);
                });
            }
        });
        return transaction$;
    }
    move_line_products(storage, move_line_id, scanned_qty, location, description_picking = '') {
        // Si la cantidad escaneada esta definida
        // la qty_done es la cantidad escaneada + la ya realizada
        let move_line = {
            qty_done: scanned_qty
                ? scanned_qty +
                    (move_line_id['qty_done'] ? move_line_id['qty_done'] : 0)
                : move_line_id['qty_done'],
            location_dest_id: location.id,
        };
        // Verificar el local storage
        this.deleteQuantity(storage, move_line_id.id);
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.odooRPC
                .call('stock.move.line', 'write', [[move_line_id['id']], move_line], {})
                .then((res) => {
                observer.next({
                    name: move_line_id.product_id[1],
                    qty_done: move_line.qty_done,
                });
                observer.complete();
            })
                .catch((err) => {
                console.log(err);
                this.alertService.showAlert(err);
            });
        });
        return transaction$;
    }
    pushObject(storage, id, scanned_qty, array) {
        const obj = {
            id,
            scanned_qty,
        };
        array.push(obj);
        let scanned_qty_array = JSON.parse(localStorage.getItem('scanned_qty'));
        if (scanned_qty_array) {
            if (scanned_qty_array && scanned_qty_array[storage]) {
                scanned_qty_array[storage] = array;
            }
            else {
                scanned_qty_array[storage] = array;
            }
        }
        else {
            scanned_qty_array = {
                [storage]: array,
            };
        }
        localStorage.setItem('scanned_qty', JSON.stringify(scanned_qty_array));
    }
    deleteQuantity(storage, id) {
        let scanned_qty_array = JSON.parse(localStorage.getItem('scanned_qty'));
        if (scanned_qty_array && scanned_qty_array[storage]) {
            let index = scanned_qty_array[storage].findIndex((e) => id == e.id);
            if (index > -1) {
                scanned_qty_array[storage].splice(index, 1);
                localStorage.setItem('scanned_qty', JSON.stringify(scanned_qty_array));
            }
        }
    }
    setQuantity(storage, id, scanned_qty) {
        let scanned_qty_array = JSON.parse(localStorage.getItem('scanned_qty'));
        if (scanned_qty_array && scanned_qty_array[storage]) {
            let index = scanned_qty_array[storage].findIndex((e) => id == e.id);
            if (index > -1) {
                let element = scanned_qty_array[storage].find((e) => id == e.id);
                element.scanned_qty += scanned_qty;
                scanned_qty_array[storage][index] = element;
                localStorage.setItem('scanned_qty', JSON.stringify(scanned_qty_array));
            }
            else {
                this.pushObject(storage, id, scanned_qty, scanned_qty_array[storage] ? scanned_qty_array[storage] : []);
            }
        }
        else {
            this.pushObject(storage, id, scanned_qty, []);
        }
    }
    button_validate(picking_id) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.odooRPC
                .call('stock.picking', 'button_validate', [picking_id], {})
                .then((res) => {
                observer.next(res);
                observer.complete();
            })
                .catch((err) => {
                this.alertService.showAlert(err);
            });
        });
        return transaction$;
    }
}
StockService.ɵfac = function StockService_Factory(t) { return new (t || StockService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_3__["OdooRPCService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"])); };
StockService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: StockService, factory: StockService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StockService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _odoo_rpc_service__WEBPACK_IMPORTED_MODULE_3__["OdooRPCService"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "CIa+":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ba/roadmap-item/roadmap-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: RoadmapItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapItemComponent", function() { return RoadmapItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/stock.service */ "CFEw");
/* harmony import */ var _services_roadmap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/roadmap.service */ "sZ45");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function RoadmapItemComponent_div_0_li_22_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r2["partner"]["street2"], " ");
} }
function RoadmapItemComponent_div_0_li_22_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2["partner"]["state_id"][1], " ");
} }
function RoadmapItemComponent_div_0_li_22_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Telefono ", item_r2["partner"]["phone"], "", item_r2["partner"]["mobile"], "");
} }
function RoadmapItemComponent_div_0_li_22_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2["note"]);
} }
const _c0 = function () { return { btn: true, "btn-danger": true }; };
function RoadmapItemComponent_div_0_li_22_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemComponent_div_0_li_22_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.getLink(item_r2["geo_point"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return { btn: true, "btn-success": true }; };
function RoadmapItemComponent_div_0_li_22_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemComponent_div_0_li_22_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.sendWap(item_r2["partner"]["phone"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return { btn: true, "btn-secondary": true }; };
function RoadmapItemComponent_div_0_li_22_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemComponent_div_0_li_22_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r21.getTel(item_r2["partner"]["phone"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c2));
} }
const _c3 = function () { return { btn: true, "btn-warning": true }; };
function RoadmapItemComponent_div_0_li_22_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RoadmapItemComponent_div_0_li_22_span_10_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, RoadmapItemComponent_div_0_li_22_span_12_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RoadmapItemComponent_div_0_li_22_div_15_Template, 2, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RoadmapItemComponent_div_0_li_22_div_16_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RoadmapItemComponent_div_0_li_22_button_20_Template, 2, 2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RoadmapItemComponent_div_0_li_22_button_21_Template, 2, 2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RoadmapItemComponent_div_0_li_22_button_22_Template, 2, 2, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemComponent_div_0_li_22_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const i_r3 = ctx.index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.setSecuenceUp(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemComponent_div_0_li_22_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const i_r3 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.setSecuenceDown(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/roadmap/", ctx_r1.roadmap_id, "/", item_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r2["name"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cliente: ", item_r2["partner_id"][1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r2["partner"]["street"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2["partner"]["street2"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2["partner"]["city"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2["partner"]["state_id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("origen ", item_r2["origin"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2["partner"]["phone"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2["note"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.states[item_r2["state"]]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2["geo_point"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2["partner"]["phone"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2["partner"]["phone"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3));
} }
function RoadmapItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Conductor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Vehiculo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Remitos:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RoadmapItemComponent_div_0_li_22_Template, 27, 19, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.roadmap["number"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 6, ctx_r0.roadmap["preparation_date"], "d/M/Y H:mm", "UTC -6"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.roadmap["driver_user_id"][1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.roadmap["vehicle_id"][1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.roadmap["picking_ids"].length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.roadmap["pickings"]);
} }
class RoadmapItemComponent {
    constructor(stockService, RoadmapService, route, router) {
        this.stockService = stockService;
        this.RoadmapService = RoadmapService;
        this.route = route;
        this.router = router;
        this.states = {
            done: 'Entregado',
            waiting: 'En espera',
            draft: 'Borrador',
        };
    }
    ngOnInit() {
        this.roadmap_id = Number(this.route['params']['value']['roadmap_id']);
        this.getRoadmap();
    }
    traslateState(state) { }
    getLink(geoPoint) {
        if (geoPoint) {
            const cordinates = JSON.parse(geoPoint).coordinates;
            window.location.href = `geo:${cordinates[0]},${cordinates[1]};u=35`;
            //this.router.navigate(['geomap/' + cordinates]);
        }
    }
    getTel(phone) {
        if (phone) {
            window.location.href = `tel:${phone}`;
        }
    }
    sendWap(phone) {
        if (phone) {
            window.location.href = `whatsapp://send?abid=${phone}`;
        }
    }
    setSecuenceUp(id) {
        const pickUp = this.roadmap.pickings[id];
        const pickDown = this.roadmap.pickings[id - 1];
        if (pickUp && pickDown) {
            if (pickUp.roadmap_sequence !== pickDown.roadmap_sequence) {
                pickUp.roadmap_sequence = pickDown.roadmap_sequence;
                pickDown.roadmap_sequence = pickUp.roadmap_sequence;
            }
            else {
                pickUp.roadmap_sequence -= 1;
                pickDown.roadmap_sequence += 1;
            }
            this.RoadmapService.updatePickings([pickUp, pickDown]).subscribe((res) => {
                if (res) {
                    this.getRoadmap();
                }
            });
        }
    }
    setSecuenceDown(id) {
        const pickUp = this.roadmap.pickings[id];
        const pickDown = this.roadmap.pickings[id + 1];
        if (pickUp && pickDown) {
            if (pickUp.roadmap_sequence !== pickDown.roadmap_sequence) {
                pickUp.roadmap_sequence = pickDown.roadmap_sequence;
                pickDown.roadmap_sequence = pickUp.roadmap_sequence;
            }
            else {
                pickUp.roadmap_sequence += 1;
                pickDown.roadmap_sequence -= 1;
            }
            this.RoadmapService.updatePickings([pickUp, pickDown]).subscribe((res) => {
                if (res) {
                    this.getRoadmap();
                }
            });
        }
    }
    getRoadmap() {
        this.RoadmapService.getRoadmap(Number(this.route['params']['value']['roadmap_id'])).subscribe((wh) => {
            this.roadmap = wh;
        });
    }
}
RoadmapItemComponent.ɵfac = function RoadmapItemComponent_Factory(t) { return new (t || RoadmapItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_1__["StockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_roadmap_service__WEBPACK_IMPORTED_MODULE_2__["RoadmapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
RoadmapItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoadmapItemComponent, selectors: [["app-roadmap-item"]], decls: 1, vars: 1, consts: [["class", "row text-center mt-2", 4, "ngIf"], [1, "row", "text-center", "mt-2"], [1, "col-12"], [1, "text-left"], [1, "list-group"], ["class", "text-left list-group-item", 4, "ngFor", "ngForOf"], [1, "text-left", "list-group-item"], [3, "routerLink"], [1, "fa", "fa-fw", "fa-building"], [4, "ngIf"], [1, "d-flex", "justify-content-between"], [3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "click"], ["aria-hidden", "true", 1, "fa", "fa-arrow-up", "fa-lg"], ["aria-hidden", "true", 1, "fa", "fa-arrow-down", "fa-lg"], ["aria-hidden", "true", 1, "fa", "fa-map-marker", "fa-lg"], ["aria-hidden", "true", 1, "fa", "fa-whatsapp", "fa-lg"], ["aria-hidden", "true", 1, "fa", "fa-phone", "fa-lg"]], template: function RoadmapItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RoadmapItemComponent_div_0_Template, 23, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.roadmap);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2FkbWFwLWl0ZW0uY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoadmapItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roadmap-item',
                templateUrl: './roadmap-item.component.html',
                styleUrls: ['./roadmap-item.component.css'],
            }]
    }], function () { return [{ type: _services_stock_service__WEBPACK_IMPORTED_MODULE_1__["StockService"] }, { type: _services_roadmap_service__WEBPACK_IMPORTED_MODULE_2__["RoadmapService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/odoo-rpc.service */ "g35q");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/alert.service */ "f5O9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_3_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Salir");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Usted esta conectado a ", ctx_r0.server_url, "?db=", ctx_r0.server_db, "");
} }
function LoginComponent_div_4_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Debe ingresar un usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_4_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_4_div_7_div_1_Template, 4, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formControls.email.errors.required);
} }
function LoginComponent_div_4_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Debe ingresar una clave");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_4_div_12_div_1_Template, 4, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.formControls.password.errors.required);
} }
const _c0 = function (a0) { return { "has-error": a0 }; };
function LoginComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_div_4_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.signIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_div_4_div_7_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Contrase\u00F1a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_4_div_12_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ingresar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.authForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r1.isSubmitted && ctx_r1.formControls.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.formControls.email.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r1.isSubmitted && ctx_r1.formControls.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isSubmitted && ctx_r1.formControls.password.errors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.server_url, "?db=", ctx_r1.server_db, "");
} }
class LoginComponent {
    constructor(router, formBuilder, odooRPC, alertService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.odooRPC = odooRPC;
        this.alertService = alertService;
        this.isSubmitted = false;
        this.usernamestorage = null;
    }
    ngOnInit() {
        this.authForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].odoo_server != '') {
            localStorage.setItem('url', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].odoo_server);
        }
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].db != '') {
            localStorage.setItem('dbName', _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].db);
        }
        this.server_url = localStorage.getItem('url');
        this.server_db = localStorage.getItem('dbName');
        if (!localStorage.getItem('url') || !localStorage.getItem('dbName')) {
            this.router.navigate(['/db']);
        }
        this.odooRPC.isLoggedIn().then((res) => {
            this.isLogged = res;
        });
    }
    logout() {
        this.odooRPC.logout();
        this.isLogged = false;
    }
    get formControls() {
        return this.authForm.controls;
    }
    signIn() {
        this.isSubmitted = true;
        if (this.authForm.invalid) {
            return;
        }
        const username = this.authForm.controls.email.value;
        const password = this.authForm.controls.password.value;
        this.odooRPC
            .login('prod', username, password)
            .then((res) => {
            this.isLogged = res;
            this.router.navigate(['/']);
        })
            .catch((err) => {
            console.log(err);
            this.alertService.showAlert(err);
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_4__["OdooRPCService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 5, vars: 2, consts: [[1, "container", "login", "wh-100"], [1, "row", "text-center", "mt-5"], [1, "col-12"], ["class", "row w-100 h-100", 4, "ngIf"], ["class", "row ", 4, "ngIf"], [1, "row", "w-100", "h-100"], [1, "col-md-4", "mb-4", "col-12", "mx-auto"], [1, "mb-4"], [1, "btn", "btn-login", "btn-block", "btn-danger", "btn-lg", "w-100", 3, "click"], [1, "row"], [1, "col-md-4", "col-12", "mx-auto"], [1, "login-container", "p-3", 3, "formGroup", "ngSubmit"], [1, "form-group", 3, "ngClass"], ["for", "email", 1, "d-none"], ["type", "email", "placeholder", "Usuario", "id", "email", "aria-describedby", "emailHelp", "formControlName", "email", 1, "form-control", "input-custom"], ["class", "help-block text-white font-italic", 4, "ngIf"], ["for", "password", 1, "d-none"], ["type", "password", "placeholder", "Contrase\u00F1a", "id", "password", "formControlName", "password", 1, "form-control", "input-custom"], [1, "col-12", "text-center"], ["type", "submit", 1, "btn", "btn-login", "btn-block", "btn-success", "btn-lg", "w-100"], ["routerLink", "/db", 1, "btn", "bg-danger", "p-3", "m-2", "rounded-lg", "text-light", "text-center"], [1, "help-block", "text-white", "font-italic"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 6, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 19, 11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLogged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLogged);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_4__["OdooRPCService"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "EerF":
/*!**************************************************************!*\
  !*** ./src/app/pages/print-config/print-config.component.ts ***!
  \**************************************************************/
/*! exports provided: PrintConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintConfigComponent", function() { return PrintConfigComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _services_printer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/printer.service */ "XQVu");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/config.service */ "rkFe");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/alert.service */ "f5O9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_comunes_log_log_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../main/comunes/log/log.component */ "6Wx3");









function PrintConfigComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const method_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", method_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", method_r4, " ");
} }
function PrintConfigComponent_li_73_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintConfigComponent_li_73_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const printer_r5 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.connectPrinter(printer_r5.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Conectar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const printer_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", printer_r5.name, " (", printer_r5.MAC, ") ");
} }
function PrintConfigComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Tests de conexion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintConfigComponent_div_80_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.printText(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintConfigComponent_div_80_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.printBarcode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Codigo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintConfigComponent_div_80_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.lineFeed(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Linea ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintConfigComponent_div_80_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.printBase64(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Imagen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.test_text, " ");
} }
class PrintConfigComponent {
    constructor(PrinterService, ConfigService, formBuilder, alertService) {
        this.PrinterService = PrinterService;
        this.ConfigService = ConfigService;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.printers_list = [
            'nombre 1',
            'MAC 1',
            0,
            'nombre 2',
            'MAC 2',
            0,
            'nombre 3',
            'MAC 3',
            0,
        ];
        this.scanMethods = ['textBus', 'form'];
        this.printers = [];
        this.test_text = 'texto de prueba';
        this.status_text = '';
        this.priceChageDate = '2021-06-24 00:00:00';
    }
    ngOnInit() {
        this.selected_printer = this.PrinterService.selected_printer;
        this.connected(false);
        this.configForm = this.formBuilder.group({
            printAuto: [this.ConfigService.params.printAuto],
            printUrl: [this.ConfigService.params.printUrl],
            printAutoDelay: [this.ConfigService.params.printAutoDelay],
            labelWidth: [this.ConfigService.params.labelWidth],
            labelHeight: [this.ConfigService.params.labelHeight],
            scanMethod: [this.ConfigService.params.scanMethod],
            showLog: [this.ConfigService.params.showLog],
            PrinterName: [this.ConfigService.params.PrinterName],
            priceChageDate: ['2021-05-14 00:00:00'],
        });
    }
    clearStorage() {
        localStorage.clear();
        this.alertService.showAlert('El localStorage es ' + localStorage.getItem('scanned_qty'));
    }
    saveConfig() {
        let params = {};
        params['printAuto'] = this.configForm.controls.printAuto.value;
        params['printAutoDelay'] = this.configForm.controls.printAutoDelay.value;
        params['labelWidth'] = this.configForm.controls.labelWidth.value;
        params['labelHeight'] = this.configForm.controls.labelHeight.value;
        params['scanMethod'] = this.configForm.controls.scanMethod.value;
        params['showLog'] = this.configForm.controls.showLog.value;
        params['PrinterName'] = this.configForm.controls.PrinterName.value;
        params['priceChageDate'] = this.configForm.controls.priceChageDate.value;
        params['printUrl'] = this.configForm.controls.printUrl.value;
        console.log(params);
        this.ConfigService.saveConfig(params);
        this.alertService.showAlert('Config saved');
    }
    searchPrinters() {
        this.printers = [];
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            this.PrinterService.searchPrinters().subscribe((printer) => this.printers.push(printer));
        }
        else {
            this.PrinterService.testsPrinters().subscribe((printer) => this.printers.push(printer));
        }
    }
    connectPrinter(PrinterName) {
        let parent = this;
        this.PrinterService.connectPrinter(PrinterName).subscribe((res) => {
            parent.ConfigService.params.PrinterName = PrinterName;
            parent.ConfigService.saveConfig(this.ConfigService.params);
            this.alertService.showAlert(res);
            parent.printer_status = true;
            parent.selected_printer = PrinterName;
        });
    }
    status() {
        this.PrinterService.status().subscribe((res) => {
            this.printer_status = res;
            this.selected_printer = 'Impresora status ' + res;
        });
    }
    disconnect() {
        this.PrinterService.disconnect().subscribe((res) => {
            this.printer_status = false;
            this.selected_printer = res;
        });
    }
    connected(verbose = true) {
        this.PrinterService.connected().subscribe((res) => {
            this.printer_status = res;
            if (verbose) {
                this.alertService.showAlert(res);
            }
            else {
                this.selected_printer = 'Impresora conectada';
            }
        });
    }
    printText() {
        this.PrinterService.printText(this.test_text).subscribe((res) => {
            this.alertService.showAlert(res);
        });
    }
    printBarcode() {
        this.PrinterService.printBarcode('4', '1234546').subscribe((res) => {
            this.alertService.showAlert(res);
        });
    }
    lineFeed() {
        this.PrinterService.lineFeed().subscribe((res) => { });
    }
    printBase64() {
        let b64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAJyAvsDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoor+I3/gq7/wVL/b0/wCCN3/BUXxpp3w/8UWXxc/Zc/aC8H+C/jt4c+BnxhGpeIfC3hybV1vfBnxB0/4e+KrW8tfFXgC8uPHHg3xN4nTRdK1OfwjZy+K7XUL/AMG6k00LyzKSgrtaXs7dPl1LhB1G4xava6T623V+/X7z+3Kiv5Wf2e/+Dtn/AIJ+/ETSbWL49/Dz42/s6+K1t4X1JI9Cs/i54EE7hBLFpPibwhLZ+LrzypPMYtqPw30dDCI2SSSVmhj9/wDiH/wdJf8ABI/wXo1zqfhn4l/Fv4uahDbCaHw74B+CXjbStVupmUH7JHc/FO2+G2hRyox2yST6xHbjaxjml+QOvaQ35l/Xlv8A15Mbo1U7ckvkrr71dfif0T0V8z/scftQ+C/20v2ZPg/+1F8PdL1bQ/CHxi8My+I9J0TXpLGXWtGa01fU9B1LSNWk02e5sG1DTdW0i+srv7JcTwLPA6pK4G4/TFWndXWz1Rm1ZtPdaMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAK/g1/4PK5PDB+Jn7BUVpLbHxkngX4/Sa9ArQ/a4/DEuv8AwrXwlLOqn7QLabVYvGqWrSqIWlgvBAWdbgL/AGu/tHftDfCf9lH4IfEb9oX43+JoPCXwx+F3h6fxD4m1aRVmupVEsVnpmi6NZGSN9U8ReI9YurDQPDmjwutxq2ualYafARJcqR/kof8ABTn/AIKA/EH/AIKVftbeOP2kvG1lJ4d0O4trTwb8J/AJuxfQ/Dz4VeH7m/m8N+GvtapGt7qlzd6nqviXxNfoiQX3inX9auLGCz01rGwtMa0k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aSPaqiE/2n0VDpwe8V8tPysaRq1I7Tdl0eq+53P8zX4xf8GqP/BUj4ctG3gLT/gp8ebc73nl+H/xNsvDkttEoLKxtfirZ+AJ7mQID5sFmtxL5hEdqLvIavzR+JP/AAR2/wCCofwq1G/07xT+wx+0ddJp3mNc6x4O+G2vfEDw2I4tu+dfEnge28QaIYfmAWQ3yhyDtzg1/r8UVDoR6Nr7n+n6mqxVRbqL+TT/AAdvwP8AEf8AFXwn+KfgXU5tF8bfDXx94Q1i3do59L8T+D/EOg6hE6khlez1TTrW4UjB6x9BkcVgaBr/AIp8B+JtF8UeGdX1zwh4v8LatYa7oGvaPeXuia/oGt6XcxXumarpeoWkltf6dqNhdww3Vnd20sU8E8aSxOrqCP8Ab6ngguYZLe5hiuIJVKSwTxpLDKh6pJHIGR1PdWUg+leJ+Kv2Yv2a/HbO/jf9nr4HeMnkz5j+KvhN4C8Qs+45be2r6BeFtx5O4nJ61PsH0l+H/BZaxfeH3S/+1P47f+CQX/B0NFdDwl+zl/wUs1PyrkRroXhH9rS1ssxzshA0iw+Omi6fGW814s6UvxM8PWTySzxaVP420SeW88SePoP7bdB17Q/FWh6N4n8MazpPiPw14j0nTte8PeIdB1Gz1jQ9e0PWLOHUNJ1nRtW0+a4sNU0nVLC4t77TtRsbiezvbOeG5tppYZUdvlCf/gnd/wAE/rli9x+wx+x1O7Z3PN+zL8FZHOfV38EliffOa+lPAHw78AfCjwjo/wAP/hb4H8IfDfwH4eS8j0DwV4D8N6N4Q8J6HHqGoXer36aR4d8P2en6RpqXuq399qd2tnZwrcX97d3kwe4uJZH1gprSUlJdHrf7+v5nPUlCTvCLh3V7r1Xb027WOxoooqzMKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/2Q==';
        this.PrinterService.printBase64(b64).subscribe((res) => {
            this.alertService.showAlert(res);
        });
    }
}
PrintConfigComponent.ɵfac = function PrintConfigComponent_Factory(t) { return new (t || PrintConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_printer_service__WEBPACK_IMPORTED_MODULE_2__["PrinterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"])); };
PrintConfigComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrintConfigComponent, selectors: [["app-print-config"]], decls: 84, vars: 6, consts: [["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "config-tab", "data-toggle", "tab", "href", "#config", "role", "tab", "aria-controls", "config", "aria-selected", "true", 1, "nav-link", "active"], ["id", "print-tab", "data-toggle", "tab", "href", "#print", "role", "tab", "aria-controls", "print", "aria-selected", "false", 1, "nav-link"], ["id", "log-tab", "data-toggle", "tab", "href", "#log", "role", "tab", "aria-controls", "log", "aria-selected", "false", 1, "nav-link"], ["id", "myTabContent", 1, "tab-content"], ["id", "config", "role", "tabpanel", "aria-labelledby", "config-tab", 1, "tab-pane", "fade", "show", "active"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "labelWidth"], ["formControlName", "scanMethod", 1, "form-control"], ["scanMethod", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "printUrl"], ["type", "text", "formControlName", "printUrl", "id", "printUrl", "aria-describedby", "printUrlHelp", "placeholder", "http://192.168.0.1/printer", 1, "form-control"], ["id", "printUrlHelp", 1, "form-text", "text-muted"], ["type", "number", "formControlName", "labelWidth", "id", "labelWidth", "aria-describedby", "labelWidthHelp", "placeholder", "px", 1, "form-control"], ["id", "labelWidthHelp", 1, "form-text", "text-muted"], ["for", "labelHeight"], ["type", "number", "formControlName", "labelHeight", "id", "labelHeight", "aria-describedby", "labelHeightHelp", "placeholder", "px", 1, "form-control"], ["id", "labelHeightHelp", 1, "form-text", "text-muted"], [1, "form-check"], ["type", "checkbox", "formControlName", "printAuto", "id", "printAuto", 1, "form-check-input"], ["for", "printAuto", 1, "form-check-label"], ["type", "checkbox", "formControlName", "showLog", "id", "showLog", 1, "form-check-input"], ["for", "showLog", 1, "form-check-label"], ["for", "PrinterName"], ["type", "text", "formControlName", "PrinterName", "id", "PrinterName", "aria-describedby", "labelWidthHelp", "placeholder", "Nombre", 1, "form-control"], ["for", "printAutoDelay"], ["type", "number", "formControlName", "printAutoDelay", "id", "printAutoDelay", "aria-describedby", "printAutoDelayHelp", "placeholder", "milisegudos", 1, "form-control"], ["id", "printAutoDelayHelp", 1, "form-text", "text-muted"], ["for", "priceChageDate", 1, "col-form-label"], ["type", "text", "id", "priceChageDate", 1, "form-control", 3, "value"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "btn-lg"], [1, "btn", "bg-danger", "btn-block", "btn-lg", 3, "click"], ["id", "print", "role", "tabpanel", "aria-labelledby", "print-tab", 1, "tab-pane", "fade"], [1, "row"], [1, "col-12"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", "btn-block", 3, "click"], [1, "row", "col-12"], [1, "list-group", "col-12"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", "btn-block", 3, "click"], ["class", "row", 4, "ngIf"], ["id", "log", "role", "tabpanel", "aria-labelledby", "log-tab", 1, "tab-pane", "fade"], [3, "value"], [1, "list-group-item"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["role", "group", 1, "btn-group-vertical"], ["type", "button btn-block", 1, "btn", "btn-secondary", 3, "click"]], template: function PrintConfigComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Configuracion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Impresoras");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Log de errores");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PrintConfigComponent_Template_form_ngSubmit_12_listener() { return ctx.saveConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Metodo de scan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PrintConfigComponent_option_18_Template, 2, 2, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Path Impresora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "small", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "URL de la impresora.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Ancho Etiqueta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Ancho en PX de la etiqueta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Alto Etiqueta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "small", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Alto en PX de la etiqueta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Imprimir automaticamente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Mostrar LOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Impresora por defecto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "small", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Impresora a la que conecta automaticamente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Delay de impresi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "small", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Tiempo que tarda en milisegundos en imprimir automaticamente.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Cambio de precios");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintConfigComponent_Template_button_click_63_listener() { return ctx.clearStorage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Limpiar Datos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h2", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintConfigComponent_Template_button_click_69_listener() { return ctx.searchPrinters(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Buscar Impresoras ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, PrintConfigComponent_li_73_Template, 4, 2, "li", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintConfigComponent_Template_button_click_74_listener() { return ctx.status(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintConfigComponent_Template_button_click_76_listener() { return ctx.disconnect(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Desconectar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrintConfigComponent_Template_button_click_78_listener() { return ctx.connected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " \u00BFConectada? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, PrintConfigComponent_div_80_Template, 12, 1, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "log");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\ncompilacion 3.0.43\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.configForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.scanMethods);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.priceChageDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.selected_printer, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.printers);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.printer_status);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _main_comunes_log_log_component__WEBPACK_IMPORTED_MODULE_7__["LogComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmludC1jb25maWcuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrintConfigComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-print-config',
                templateUrl: './print-config.component.html',
                styleUrls: ['./print-config.component.css'],
            }]
    }], function () { return [{ type: _services_printer_service__WEBPACK_IMPORTED_MODULE_2__["PrinterService"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "FYe3":
/*!******************************************!*\
  !*** ./src/app/_services/log.service.ts ***!
  \******************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);



class LogService {
    constructor() { }
    pushToArray(array, obj) {
        array.push(obj);
        return array;
    }
    addLog(component, error) {
        const obj = {
            date: moment__WEBPACK_IMPORTED_MODULE_1__().format('DD/MM/YYYY HH:mm:ss'),
            component,
            error,
        };
        let log = localStorage.getItem('log');
        if (log) {
            log = JSON.parse(log);
            let arr = this.pushToArray(log, obj);
            localStorage.setItem('log', JSON.stringify(arr));
        }
        else {
            let log = [];
            log.push(obj);
            localStorage.setItem('log', JSON.stringify(log));
        }
    }
    checkDate(date) {
        const today = moment__WEBPACK_IMPORTED_MODULE_1__().format('DD/MM/YYYY HH:mm:ss');
        const dif = moment__WEBPACK_IMPORTED_MODULE_1__(date).diff(today, 'days');
        return dif;
    }
    checkArray(array) {
        return array.filter((e) => this.checkDate(e.date) < 1);
    }
    checkLog() {
        let log = localStorage.getItem('log');
        if (log) {
            log = JSON.parse(log);
            let arr = this.checkArray(log);
            localStorage.setItem('log', JSON.stringify(arr));
        }
    }
    purgeLog() {
        localStorage.setItem('log', JSON.stringify([]));
    }
    getLog() {
        const log = localStorage.getItem('log');
        if (log) {
            return JSON.parse(log);
        }
        else {
            return [];
        }
    }
}
LogService.ɵfac = function LogService_Factory(t) { return new (t || LogService)(); };
LogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LogService, factory: LogService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Fpq8":
/*!*********************************************************************!*\
  !*** ./src/app/main/comunes/range-picker/range-picker.component.ts ***!
  \*********************************************************************/
/*! exports provided: RangePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePickerComponent", function() { return RangePickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function RangePickerComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function RangePickerComponent_ng_template_7_Template_span_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const date_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.hoveredDate = date_r3; })("mouseleave", function RangePickerComponent_ng_template_7_Template_span_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.hoveredDate = null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r3 = ctx.$implicit;
    const focused_r4 = ctx.focused;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("focused", focused_r4)("range", ctx_r2.isRange(date_r3))("faded", ctx_r2.isHovered(date_r3) || ctx_r2.isInside(date_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", date_r3.day, " ");
} }
class RangePickerComponent {
    constructor(calendar, formatter) {
        this.calendar = calendar;
        this.formatter = formatter;
        this.hoveredDate = null;
        this.evento = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.fromDate = calendar.getToday();
        this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    }
    onDateSelection(date) {
        if (!this.fromDate && !this.toDate) {
            this.fromDate = date;
        }
        else if (this.fromDate &&
            !this.toDate &&
            date &&
            date.after(this.fromDate)) {
            this.toDate = date;
        }
        else {
            this.toDate = null;
            this.fromDate = date;
        }
        this.evento.emit({
            fromDate: this.fromDate,
            toDate: this.toDate,
        });
    }
    isHovered(date) {
        return (this.fromDate &&
            !this.toDate &&
            this.hoveredDate &&
            date.after(this.fromDate) &&
            date.before(this.hoveredDate));
    }
    isInside(date) {
        return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
    }
    isRange(date) {
        return (date.equals(this.fromDate) ||
            (this.toDate && date.equals(this.toDate)) ||
            this.isInside(date) ||
            this.isHovered(date));
    }
    validateInput(currentValue, input) {
        const parsed = this.formatter.parse(input);
        return parsed && this.calendar.isValid(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(parsed))
            ? _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDate"].from(parsed)
            : currentValue;
    }
}
RangePickerComponent.ɵfac = function RangePickerComponent_Factory(t) { return new (t || RangePickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"])); };
RangePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RangePickerComponent, selectors: [["range-picker"]], outputs: { evento: "evento" }, decls: 9, vars: 4, consts: [["type", "button", 1, "btn", "btn-light", "shadow", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-calendar", "fa-2x"], [1, "form-inline"], [1, "form-group", "hidden", "pb-0"], [1, "input-group"], ["name", "datepicker", "ngbDatepicker", "", "outsideDays", "hidden", "tabindex", "-1", 1, "form-control", 2, "visibility", "hidden", 3, "autoClose", "displayMonths", "dayTemplate", "startDate", "dateSelect"], ["datepicker", "ngbDatepicker"], ["t", ""], [1, "custom-day", 3, "mouseenter", "mouseleave"]], template: function RangePickerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RangePickerComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateSelect", function RangePickerComponent_Template_input_dateSelect_5_listener($event) { return ctx.onDateSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RangePickerComponent_ng_template_7_Template, 2, 7, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoClose", "outside")("displayMonths", 1)("dayTemplate", _r1)("startDate", ctx.fromDate);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbInputDatepicker"]], styles: [".form-group.hidden[_ngcontent-%COMP%] {\n        width: 0;\n        margin: 0;\n        border: none;\n        padding: 0;\n      }\n      .custom-day[_ngcontent-%COMP%] {\n        text-align: center;\n        padding: 0.185rem 0.25rem;\n        display: inline-block;\n        height: 2rem;\n        width: 2rem;\n      }\n      .custom-day.focused[_ngcontent-%COMP%] {\n        background-color: #e6e6e6;\n      }\n      .custom-day.range[_ngcontent-%COMP%], .custom-day[_ngcontent-%COMP%]:hover {\n        background-color: rgb(2, 117, 216);\n        color: white;\n      }\n      .custom-day.faded[_ngcontent-%COMP%] {\n        background-color: rgba(2, 117, 216, 0.5);\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RangePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'range-picker',
                templateUrl: './range-picker.component.html',
                styles: [
                    `
      .form-group.hidden {
        width: 0;
        margin: 0;
        border: none;
        padding: 0;
      }
      .custom-day {
        text-align: center;
        padding: 0.185rem 0.25rem;
        display: inline-block;
        height: 2rem;
        width: 2rem;
      }
      .custom-day.focused {
        background-color: #e6e6e6;
      }
      .custom-day.range,
      .custom-day:hover {
        background-color: rgb(2, 117, 216);
        color: white;
      }
      .custom-day.faded {
        background-color: rgba(2, 117, 216, 0.5);
      }
    `,
                ],
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCalendar"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDateParserFormatter"] }]; }, { evento: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "GdFv":
/*!***********************************************!*\
  !*** ./src/app/_helpers/filter-price.pipe.ts ***!
  \***********************************************/
/*! exports provided: FilterPricePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPricePipe", function() { return FilterPricePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterPricePipe {
    transform(prices, pricelist_id) {
        let v = prices.filter((v) => v.id == 31);
        return v.price;
    }
}
FilterPricePipe.ɵfac = function FilterPricePipe_Factory(t) { return new (t || FilterPricePipe)(); };
FilterPricePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterPrice", type: FilterPricePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPricePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: "filterPrice",
            }]
    }], null, null); })();


/***/ }),

/***/ "HgL4":
/*!*********************************************!*\
  !*** ./src/app/_services/events.service.ts ***!
  \*********************************************/
/*! exports provided: Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



/**
 * A custom Events service just like Ionic 3 Events https://ionicframework.com/docs/v3/api/util/Events/ which got removed in Ionic 5.
 *
 * @author Shashank Agrawal
 */
class Events {
    constructor() {
        this.channels = {};
    }
    /**
     * Subscribe to a topic and provide a single handler/observer.
     * @param topic The name of the topic to subscribe to.
     * @param observer The observer or callback function to listen when changes are published.
     *
     * @returns Subscription from which you can unsubscribe to release memory resources and to prevent memory leak.
     */
    subscribe(topic, observer) {
        if (!this.channels[topic]) {
            this.channels[topic] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        }
        return this.channels[topic].subscribe(observer);
    }
    /**
     * Publish some data to the subscribers of the given topic.
     * @param topic The name of the topic to emit data to.
     * @param data data in any format to pass on.
     */
    publish(topic, data) {
        const subject = this.channels[topic];
        if (!subject) {
            // Or you can create a new subject for future subscribers
            return;
        }
        subject.next(data);
    }
    /**
     * When you are sure that you are done with the topic and the subscribers no longer needs to listen to a particular topic, you can
     * destroy the observable of the topic using this method.
     * @param topic The name of the topic to destroy.
     */
    destroy(topic) {
        const subject = this.channels[topic];
        if (!subject) {
            return;
        }
        subject.complete();
        delete this.channels[topic];
    }
}
Events.ɵfac = function Events_Factory(t) { return new (t || Events)(); };
Events.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Events, factory: Events.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Events, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "P4Y5":
/*!**************************************************!*\
  !*** ./src/app/_helpers/left-pad-filter.pipe.ts ***!
  \**************************************************/
/*! exports provided: LeftPadFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftPadFilterPipe", function() { return LeftPadFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LeftPadFilterPipe {
    transform(item) {
        return (String('0').repeat(10) + item.toString().replace('.', '')).substr((10 * -1), 10);
    }
}
LeftPadFilterPipe.ɵfac = function LeftPadFilterPipe_Factory(t) { return new (t || LeftPadFilterPipe)(); };
LeftPadFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "leftPadFilter", type: LeftPadFilterPipe, pure: false });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeftPadFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'leftPadFilter',
                pure: false
            }]
    }], null, null); })();


/***/ }),

/***/ "RedB":
/*!*******************************************************************************!*\
  !*** ./src/app/main/comunes/button-input-text/button-input-text.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ButtonInputDialogComponent, ButtonInputTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonInputDialogComponent", function() { return ButtonInputDialogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonInputTextComponent", function() { return ButtonInputTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["someInput"];
const _c1 = function () { return { fa: true, "fa-search": true, "fa-2x": true }; };
class ButtonInputDialogComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    sendData() {
        this.activeModal.close(this.someInput.nativeElement.value);
    }
    cancel() {
        this.activeModal.close(null);
    }
}
ButtonInputDialogComponent.ɵfac = function ButtonInputDialogComponent_Factory(t) { return new (t || ButtonInputDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
ButtonInputDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonInputDialogComponent, selectors: [["ngbd-modal-content"]], viewQuery: function ButtonInputDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.someInput = _t.first);
    } }, inputs: { id: "id" }, decls: 15, vars: 0, consts: [[1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [1, "container"], [1, "form-group"], ["for", "cantidad"], [1, "form-control"], ["someInput", ""], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"]], template: function ButtonInputDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ingrese el origen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Origen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonInputDialogComponent_Template_button_click_11_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonInputDialogComponent_Template_button_click_13_listener() { return ctx.sendData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonInputDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngbd-modal-content',
                templateUrl: './button-input-dialog.component.html',
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], someInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['someInput']
        }] }); })();
class ButtonInputTextComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.evento = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    open() {
        const modalRef = this.modalService.open(ButtonInputDialogComponent);
        this.evento.emit({ showReadCode: false });
        modalRef.componentInstance.id = 10;
        modalRef.result
            .then((result) => {
            this.evento.emit({ text: result, showReadCode: true });
        })
            .catch((error) => {
            console.log(error);
        });
    }
}
ButtonInputTextComponent.ɵfac = function ButtonInputTextComponent_Factory(t) { return new (t || ButtonInputTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
ButtonInputTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonInputTextComponent, selectors: [["button-input-text"]], outputs: { evento: "evento" }, decls: 2, vars: 2, consts: [["type", "button", 1, "btn", "btn-light", "shadow", 3, "click"], [3, "ngClass"]], template: function ButtonInputTextComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonInputTextComponent_Template_button_click_0_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonInputTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'button-input-text',
                templateUrl: './button-input-text.component.html',
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, { evento: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_comunes_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/comunes/alert/alert.component */ "xpGZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




//import { Plugins } from '@capacitor/core';
//import { BarcodeProvider } from "./_services/intent.service"
//import { Events } from "./_services/events.service"
class AppComponent {
    constructor(
    //private barcodeProvider: BarcodeProvider,
    //public events: Events, 
    changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.title = 'Zebra';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "Alert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_main_comunes_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, null); })();


/***/ }),

/***/ "Ul9g":
/*!***************************************************!*\
  !*** ./src/app/main/geo-map/geo-map.component.ts ***!
  \***************************************************/
/*! exports provided: DEFAULT_LAT, DEFAULT_LON, TITULO, GeoMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LAT", function() { return DEFAULT_LAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_LON", function() { return DEFAULT_LON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITULO", function() { return TITULO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeoMapComponent", function() { return GeoMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "4R65");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet-routing-machine */ "W/2u");
/* harmony import */ var leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet_routing_machine__WEBPACK_IMPORTED_MODULE_2__);





const DEFAULT_LAT = 48.20807;
const DEFAULT_LON = 16.3732;
const TITULO = 'Proyecto';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
class GeoMapComponent {
    constructor() {
        this.lat = DEFAULT_LAT;
        this.lon = DEFAULT_LON;
        this.titulo = TITULO;
    }
    ngOnInit() {
        this.initMap();
    }
    initMap() {
        //configuración del mapa
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_1__["map"]('map', {
            center: [this.lat, this.lon],
            attributionControl: false,
            zoom: 14,
        });
        //iconos personalizados
        var iconDefault = leaflet__WEBPACK_IMPORTED_MODULE_1__["icon"]({
            iconRetinaUrl,
            iconUrl,
            shadowUrl,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41],
        });
        leaflet__WEBPACK_IMPORTED_MODULE_1__["Marker"].prototype.options.icon = iconDefault;
        //titulo
        const tiles = leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"]('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://1938.com.es">Web Inteligencia Artificial</a>',
        });
        //marca con pop up
        const lon = this.lon;
        const lat = this.lat;
        const marker = leaflet__WEBPACK_IMPORTED_MODULE_1__["marker"]([lat, lon]).bindPopup(this.titulo);
        marker.addTo(this.map);
        //marca forma de circulo
        /* const mark = L.circleMarker([this.lat, this.lon]).addTo(this.map);
        mark.addTo(this.map); */
        /* //ruta
        L.Routing.control({
          router: L.Routing.osrmv1({
            serviceUrl: `https://router.project-osrm.org/route/v1/`,
          }),
          showAlternatives: true,
          fitSelectedRoutes: false,
          show: false,
          routeWhileDragging: true,
          waypoints: [L.latLng(this.lat, this.lon), L.latLng(lat, lon)],
        }).addTo(this.map); */
        tiles.addTo(this.map);
    }
}
GeoMapComponent.ɵfac = function GeoMapComponent_Factory(t) { return new (t || GeoMapComponent)(); };
GeoMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeoMapComponent, selectors: [["geo-map"]], inputs: { lat: "lat", lon: "lon", titulo: "titulo" }, decls: 3, vars: 0, consts: [[1, "map-container"], [1, "map-frame"], ["id", "map"]], template: function GeoMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".map-container[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: 30px;\n  }\n   \n  .map-frame[_ngcontent-%COMP%] {\n    border: 2px solid black;\n    height: 100%;\n  }\n   \n  #map[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdlby1tYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtFQUNkOztFQUVBO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZCIsImZpbGUiOiJnZW8tbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFwLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBtYXJnaW46IDMwcHg7XG4gIH1cbiAgIFxuICAubWFwLWZyYW1lIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgIFxuICAjbWFwIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeoMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'geo-map',
                templateUrl: './geo-map.component.html',
                styleUrls: ['./geo-map.component.css'],
            }]
    }], null, { lat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], lon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], titulo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "WqEK":
/*!**************************************************************************!*\
  !*** ./src/app/pages/stock/ent-wh-selector/ent-wh-selector.component.ts ***!
  \**************************************************************************/
/*! exports provided: EntWhSelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntWhSelectorComponent", function() { return EntWhSelectorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/stock.service */ "CFEw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function EntWhSelectorComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/stock/location-entry/", item_r1.wh_input_stock_loc_id[0], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r1["name"], " (", item_r1.wh_input_stock_loc_id[1], ") ");
} }
class EntWhSelectorComponent {
    constructor(stockService) {
        this.stockService = stockService;
        this.wh = [];
    }
    ngOnInit() {
        this.getWh();
    }
    getWh() {
        this.stockService.getWh().subscribe((wh) => {
            this.wh = wh['records'];
        });
    }
}
EntWhSelectorComponent.ɵfac = function EntWhSelectorComponent_Factory(t) { return new (t || EntWhSelectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_1__["StockService"])); };
EntWhSelectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntWhSelectorComponent, selectors: [["app-ent-wh-selector"]], decls: 4, vars: 1, consts: [[1, "row", "text-center", "mt-2"], [1, "col-12"], [1, "list-group"], ["class", "text-left list-group-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "text-left", "list-group-item", 3, "routerLink"], [1, "fa", "fa-fw", "fa-building"]], template: function EntWhSelectorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EntWhSelectorComponent_li_3_Template, 3, 3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.wh);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbnQtd2gtc2VsZWN0b3IuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntWhSelectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ent-wh-selector',
                templateUrl: './ent-wh-selector.component.html',
                styleUrls: ['./ent-wh-selector.component.css']
            }]
    }], function () { return [{ type: _services_stock_service__WEBPACK_IMPORTED_MODULE_1__["StockService"] }]; }, null); })();


/***/ }),

/***/ "XQVu":
/*!**********************************************!*\
  !*** ./src/app/_services/printer.service.ts ***!
  \**********************************************/
/*! exports provided: PrinterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrinterService", function() { return PrinterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alert.service */ "f5O9");




//https://medium.com/@EliaPalme/how-to-wrap-an-angular-app-with-apache-cordova-909024a25d79
function _window() {
    // return the global native browser window object
    return window;
}
class PrinterService {
    constructor(alertService) {
        this.alertService = alertService;
        this.printers = [];
    }
    searchPrinters() {
        const printOBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            var printersList = [];
            _window().BTPrinter.list((data) => {
                data.forEach((part, index, array_data) => {
                    if (index % 3 === 0) {
                        observer.next({
                            MAC: array_data[index + 1],
                            name: array_data[index],
                        });
                    }
                });
                observer.complete();
            });
        });
        return printOBS;
    }
    connectPrinter(PrinterName) {
        const printOBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            _window().BTPrinter.connect(function (data) {
                this.selected_printer = PrinterName;
                observer.next(data);
                observer.complete();
            }, function (err) {
                this.alertService.showAlert('Err:' + err);
                observer.error(err);
            }, PrinterName);
        });
        return printOBS;
    }
    connected() {
        const printOBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            if (_window().BTPrinter) {
                _window().BTPrinter.connected(function (data) {
                    observer.next(data);
                    observer.complete();
                }, function (err) {
                    this.alertService.showAlert('Err:' + err);
                });
            }
        });
        return printOBS;
    }
    status() {
        const printOBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            _window().BTPrinter.status(function (data) {
                observer.next(data);
                observer.complete();
            }, function (err) {
                console.log('Err:', err);
                observer.error(err);
            });
        });
        return printOBS;
    }
    disconnect() {
        const printOBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            _window().BTPrinter.disconnect(function (data) {
                observer.next(data);
                observer.complete();
            }, function (err) {
                this.alertService.showAlert('Err:' + err);
                observer.error(err);
            });
        });
        return printOBS;
    }
    printTemplate(template) {
        var lines = template.split('\n');
        lines.forEach((line, index) => {
            var instuction = line.split('|');
            if (instuction[0] == 'text') {
                this.printText(instuction[1]);
            }
            else if (instuction[0] == 'barcode') {
                this.printBarcode(instuction[1], instuction[2]);
            }
            else if (instuction[0] == 'qr') {
                this.printQRCode(instuction[1], Number(instuction[2]));
            }
            else if (instuction[0] == 'linefeed') {
                this.lineFeed();
            }
        }, this);
    }
    printPOSCommand(command) {
        const printOBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            _window().BTPrinter.printPOSCommand(function (data) {
                observer.next(data);
                observer.complete();
            }, function (err) {
                console.log('Err:', err);
                observer.error(err);
            }, command);
        });
        return printOBS;
    }
    lineFeed() {
        const printOBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            _window().BTPrinter.printPOSCommand(function (data) {
                observer.next(data);
                observer.complete();
            }, function (err) {
                console.log('Err:', err);
                observer.error(err);
            }, '0A');
        });
        return printOBS;
    }
    printBase64(base64, align = '0') {
        const printOBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            _window().BTPrinter.printBase64(function (data) {
                observer.next(data);
                observer.complete();
            }, function (err) {
                console.log('Err:', err);
                observer.error(err);
            }, base64, align);
        });
        return printOBS;
    }
    printText(stringToPrint = 'String to Print', size = '0', align = '0') {
        const printOBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            _window().BTPrinter.printText(function (data) {
                observer.next(data);
                observer.complete();
            }, function (err) {
                console.log('Err:', err);
                observer.error(err);
            }, stringToPrint, size, align);
        });
        return printOBS;
    }
    printBarcode(system, data, align = '1', position = '2', font = '0', height = '64') {
        const printOBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            _window().BTPrinter.printBarcode(function (data) {
                observer.next(data);
                observer.complete();
            }, function (err) {
                console.log('Err:', err);
                observer.error(err);
            }, system, data, align, position, font, height);
        });
        return printOBS;
    }
    printQRCode(data, align, model = 49, size = 32, eclevel = 50) {
        const printOBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            _window().BTPrinter.printQRCode(function (data) {
                observer.next(data);
                observer.complete();
            }, function (err) {
                console.log('Err:', err);
                observer.error(err);
            }, data, align, model, size, eclevel);
        });
        return printOBS;
    }
    testsPrinters() {
        const printOBS = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            var printersList = [];
            var printers = [
                'nombre 1',
                'MAC 1',
                0,
                'nombre 2',
                'MAC 2',
                0,
                'nombre 3',
                'MAC 3',
                0,
            ];
            printers.forEach((part, index, array_data) => {
                if (index % 3 === 0) {
                    observer.next({
                        MAC: array_data[index + 1],
                        name: array_data[index],
                    });
                }
            });
            observer.complete();
        });
        return printOBS;
    }
}
PrinterService.ɵfac = function PrinterService_Factory(t) { return new (t || PrinterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"])); };
PrinterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PrinterService, factory: PrinterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrinterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_global_error_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/global-error-handler.service */ "e7P/");
/* harmony import */ var _services_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/odoo-rpc.service */ "g35q");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _pages_print_config_print_config_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/print-config/print-config.component */ "EerF");
/* harmony import */ var _pages_print_label_print_label_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/print-label/print-label.component */ "9UFG");
/* harmony import */ var _main_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main/menu/menu.component */ "wRLD");
/* harmony import */ var _main_pinter_state_pinter_state_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main/pinter-state/pinter-state.component */ "h0YR");
/* harmony import */ var _main_dasboard_dasboard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/dasboard/dasboard.component */ "nPE4");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/http/ngx */ "XSEc");
/* harmony import */ var _main_elements_price_label_price_label_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/elements/price-label/price-label.component */ "1Ict");
/* harmony import */ var _main_elements_product_prices_product_prices_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./main/elements/product-prices/product-prices.component */ "ezfU");
/* harmony import */ var _main_elements_omni_barcode_omni_barcode_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./main/elements/omni-barcode/omni-barcode.component */ "j7Qv");
/* harmony import */ var _helpers_left_pad_filter_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_helpers/left-pad-filter.pipe */ "P4Y5");
/* harmony import */ var _pages_price_update_price_update_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/price-update/price-update.component */ "giPN");
/* harmony import */ var _helpers_filter_price_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_helpers/filter-price.pipe */ "GdFv");
/* harmony import */ var _pages_stock_ent_wh_selector_ent_wh_selector_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/stock/ent-wh-selector/ent-wh-selector.component */ "WqEK");
/* harmony import */ var _pages_stock_ent_location_ent_location_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/stock/ent-location/ent-location.component */ "fgVz");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "h6PX");
/* harmony import */ var _main_comunes_range_picker_range_picker_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./main/comunes/range-picker/range-picker.component */ "Fpq8");
/* harmony import */ var _main_comunes_read_code_read_code_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./main/comunes/read-code/read-code.component */ "5aEy");
/* harmony import */ var _pages_select_db_select_db_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/select-db/select-db.component */ "43DZ");
/* harmony import */ var _pages_stock_mov_int_mov_int_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/stock/mov-int/mov-int.component */ "y4o9");
/* harmony import */ var _pages_stock_mov_int_detail_mov_int_detail_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/stock/mov-int-detail/mov-int-detail.component */ "/Jku");
/* harmony import */ var _pages_stock_mov_int_detail_product_mov_int_detail_product_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/stock/mov-int-detail-product/mov-int-detail-product.component */ "89aN");
/* harmony import */ var _pages_zpl_file_zpl_file_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/zpl-file/zpl-file.component */ "ts6Q");
/* harmony import */ var _main_comunes_log_log_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./main/comunes/log/log.component */ "6Wx3");
/* harmony import */ var _pages_ba_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/ba/roadmap/roadmap.component */ "ywZQ");
/* harmony import */ var _pages_ba_roadmap_item_roadmap_item_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/ba/roadmap-item/roadmap-item.component */ "CIa+");
/* harmony import */ var _pages_ba_roadmap_item_picking_roadmap_item_picking_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/ba/roadmap-item-picking/roadmap-item-picking.component */ "konU");
/* harmony import */ var _main_comunes_alert_alert_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./main/comunes/alert/alert.component */ "xpGZ");
/* harmony import */ var _main_comunes_input_cant_keyboard_button_input_cant_keyboard_button_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./main/comunes/input-cant-keyboard-button/input-cant-keyboard-button.component */ "zacy");
/* harmony import */ var _main_geo_map_geo_map_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./main/geo-map/geo-map.component */ "Ul9g");
/* harmony import */ var _pages_ba_roadmap_item_geo_map_roadmap_item_geo_map_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/ba/roadmap-item-geo-map/roadmap-item-geo-map.component */ "bZ9n");
/* harmony import */ var _main_comunes_button_input_text_button_input_text_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./main/comunes/button-input-text/button-input-text.component */ "RedB");















//import { BarcodeProvider } from './_services/intent.service';





























class AppModule {
    constructor(odooRPC) {
        this.odooRPC = odooRPC;
        this.odooRPC.init({
            odoo_server: localStorage.getItem('url'),
            http_auth: 'username:password',
        });
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_3__["OdooRPCService"])); }, providers: [
        _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_15__["HTTP"],
        _services_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_3__["OdooRPCService"],
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _services_global_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["GlobalErrorHandlerService"] },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"],
        ], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _pages_print_config_print_config_component__WEBPACK_IMPORTED_MODULE_10__["PrintConfigComponent"],
        _pages_print_label_print_label_component__WEBPACK_IMPORTED_MODULE_11__["PrintLabelComponent"],
        _main_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
        _main_pinter_state_pinter_state_component__WEBPACK_IMPORTED_MODULE_13__["PinterStateComponent"],
        _main_dasboard_dasboard_component__WEBPACK_IMPORTED_MODULE_14__["DasboardComponent"],
        _main_elements_price_label_price_label_component__WEBPACK_IMPORTED_MODULE_16__["PriceLabelComponent"],
        _main_elements_product_prices_product_prices_component__WEBPACK_IMPORTED_MODULE_17__["ProductPricesComponent"],
        _main_elements_omni_barcode_omni_barcode_component__WEBPACK_IMPORTED_MODULE_18__["OmniBarcodeComponent"],
        _helpers_left_pad_filter_pipe__WEBPACK_IMPORTED_MODULE_19__["LeftPadFilterPipe"],
        _pages_price_update_price_update_component__WEBPACK_IMPORTED_MODULE_20__["PriceUpdateComponent"],
        _helpers_filter_price_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterPricePipe"],
        _pages_stock_ent_wh_selector_ent_wh_selector_component__WEBPACK_IMPORTED_MODULE_22__["EntWhSelectorComponent"],
        _pages_stock_ent_location_ent_location_component__WEBPACK_IMPORTED_MODULE_23__["EntLocationComponent"],
        _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_25__["MainPageComponent"],
        _main_comunes_range_picker_range_picker_component__WEBPACK_IMPORTED_MODULE_26__["RangePickerComponent"],
        _main_comunes_read_code_read_code_component__WEBPACK_IMPORTED_MODULE_27__["ReadCodeComponent"],
        _pages_select_db_select_db_component__WEBPACK_IMPORTED_MODULE_28__["SelectDbComponent"],
        _pages_stock_mov_int_mov_int_component__WEBPACK_IMPORTED_MODULE_29__["MovIntComponent"],
        _pages_stock_mov_int_detail_mov_int_detail_component__WEBPACK_IMPORTED_MODULE_30__["MovIntDetailComponent"],
        _pages_stock_mov_int_detail_product_mov_int_detail_product_component__WEBPACK_IMPORTED_MODULE_31__["MovIntDetailProductComponent"],
        _pages_zpl_file_zpl_file_component__WEBPACK_IMPORTED_MODULE_32__["ZplFileComponent"],
        _main_comunes_log_log_component__WEBPACK_IMPORTED_MODULE_33__["LogComponent"],
        _pages_ba_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_34__["RoadmapComponent"],
        _pages_ba_roadmap_item_roadmap_item_component__WEBPACK_IMPORTED_MODULE_35__["RoadmapItemComponent"],
        _pages_ba_roadmap_item_picking_roadmap_item_picking_component__WEBPACK_IMPORTED_MODULE_36__["RoadmapItemPickingComponent"],
        _main_comunes_alert_alert_component__WEBPACK_IMPORTED_MODULE_37__["AlertComponent"],
        _main_comunes_input_cant_keyboard_button_input_cant_keyboard_button_component__WEBPACK_IMPORTED_MODULE_38__["InputCantKeyboardButtonComponent"],
        _main_geo_map_geo_map_component__WEBPACK_IMPORTED_MODULE_39__["GeoMapComponent"],
        _pages_ba_roadmap_item_geo_map_roadmap_item_geo_map_component__WEBPACK_IMPORTED_MODULE_40__["RoadmapItemGeoMapComponent"],
        _main_comunes_button_input_text_button_input_text_component__WEBPACK_IMPORTED_MODULE_41__["ButtonInputTextComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"]], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _pages_print_config_print_config_component__WEBPACK_IMPORTED_MODULE_10__["PrintConfigComponent"],
                    _pages_print_label_print_label_component__WEBPACK_IMPORTED_MODULE_11__["PrintLabelComponent"],
                    _main_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
                    _main_pinter_state_pinter_state_component__WEBPACK_IMPORTED_MODULE_13__["PinterStateComponent"],
                    _main_dasboard_dasboard_component__WEBPACK_IMPORTED_MODULE_14__["DasboardComponent"],
                    _main_elements_price_label_price_label_component__WEBPACK_IMPORTED_MODULE_16__["PriceLabelComponent"],
                    _main_elements_product_prices_product_prices_component__WEBPACK_IMPORTED_MODULE_17__["ProductPricesComponent"],
                    _main_elements_omni_barcode_omni_barcode_component__WEBPACK_IMPORTED_MODULE_18__["OmniBarcodeComponent"],
                    _helpers_left_pad_filter_pipe__WEBPACK_IMPORTED_MODULE_19__["LeftPadFilterPipe"],
                    _pages_price_update_price_update_component__WEBPACK_IMPORTED_MODULE_20__["PriceUpdateComponent"],
                    _helpers_filter_price_pipe__WEBPACK_IMPORTED_MODULE_21__["FilterPricePipe"],
                    _pages_stock_ent_wh_selector_ent_wh_selector_component__WEBPACK_IMPORTED_MODULE_22__["EntWhSelectorComponent"],
                    _pages_stock_ent_location_ent_location_component__WEBPACK_IMPORTED_MODULE_23__["EntLocationComponent"],
                    _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_25__["MainPageComponent"],
                    _main_comunes_range_picker_range_picker_component__WEBPACK_IMPORTED_MODULE_26__["RangePickerComponent"],
                    _main_comunes_read_code_read_code_component__WEBPACK_IMPORTED_MODULE_27__["ReadCodeComponent"],
                    _pages_select_db_select_db_component__WEBPACK_IMPORTED_MODULE_28__["SelectDbComponent"],
                    _pages_stock_mov_int_mov_int_component__WEBPACK_IMPORTED_MODULE_29__["MovIntComponent"],
                    _pages_stock_mov_int_detail_mov_int_detail_component__WEBPACK_IMPORTED_MODULE_30__["MovIntDetailComponent"],
                    _pages_stock_mov_int_detail_product_mov_int_detail_product_component__WEBPACK_IMPORTED_MODULE_31__["MovIntDetailProductComponent"],
                    _pages_zpl_file_zpl_file_component__WEBPACK_IMPORTED_MODULE_32__["ZplFileComponent"],
                    _main_comunes_log_log_component__WEBPACK_IMPORTED_MODULE_33__["LogComponent"],
                    _pages_ba_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_34__["RoadmapComponent"],
                    _pages_ba_roadmap_item_roadmap_item_component__WEBPACK_IMPORTED_MODULE_35__["RoadmapItemComponent"],
                    _pages_ba_roadmap_item_picking_roadmap_item_picking_component__WEBPACK_IMPORTED_MODULE_36__["RoadmapItemPickingComponent"],
                    _main_comunes_alert_alert_component__WEBPACK_IMPORTED_MODULE_37__["AlertComponent"],
                    _main_comunes_input_cant_keyboard_button_input_cant_keyboard_button_component__WEBPACK_IMPORTED_MODULE_38__["InputCantKeyboardButtonComponent"],
                    _main_geo_map_geo_map_component__WEBPACK_IMPORTED_MODULE_39__["GeoMapComponent"],
                    _pages_ba_roadmap_item_geo_map_roadmap_item_geo_map_component__WEBPACK_IMPORTED_MODULE_40__["RoadmapItemGeoMapComponent"],
                    _main_comunes_button_input_text_button_input_text_component__WEBPACK_IMPORTED_MODULE_41__["ButtonInputTextComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"],
                ],
                providers: [
                    _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_15__["HTTP"],
                    _services_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_3__["OdooRPCService"],
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"], useClass: _services_global_error_handler_service__WEBPACK_IMPORTED_MODULE_2__["GlobalErrorHandlerService"] },
                ],
                exports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            }]
    }], function () { return [{ type: _services_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_3__["OdooRPCService"] }]; }, null); })();


/***/ }),

/***/ "bZ9n":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/ba/roadmap-item-geo-map/roadmap-item-geo-map.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RoadmapItemGeoMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapItemGeoMapComponent", function() { return RoadmapItemGeoMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_geo_map_geo_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../main/geo-map/geo-map.component */ "Ul9g");





function RoadmapItemGeoMapComponent_geo_map_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "geo-map", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("lat", ctx_r0.latitud)("lon", ctx_r0.longitud);
} }
class RoadmapItemGeoMapComponent {
    constructor(route) {
        this.route = route;
        this.latitud = 0;
        this.longitud = 0;
        this.showMap = false;
    }
    ngOnInit() {
        const coordinatesParams = this.route['params']['value']['cordinates'];
        const cordinates = coordinatesParams.split(',');
        this.latitud = Number(cordinates[0]);
        this.longitud = Number(cordinates[1]);
        this.showMap = true;
    }
}
RoadmapItemGeoMapComponent.ɵfac = function RoadmapItemGeoMapComponent_Factory(t) { return new (t || RoadmapItemGeoMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
RoadmapItemGeoMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoadmapItemGeoMapComponent, selectors: [["app-roadmap-item-geo-map"]], decls: 1, vars: 1, consts: [[3, "lat", "lon", 4, "ngIf"], [3, "lat", "lon"]], template: function RoadmapItemGeoMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RoadmapItemGeoMapComponent_geo_map_0_Template, 1, 2, "geo-map", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showMap);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _main_geo_map_geo_map_component__WEBPACK_IMPORTED_MODULE_3__["GeoMapComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2FkbWFwLWl0ZW0tZ2VvLW1hcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoadmapItemGeoMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roadmap-item-geo-map',
                templateUrl: './roadmap-item-geo-map.component.html',
                styleUrls: ['./roadmap-item-geo-map.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "bwkT":
/*!********************************************!*\
  !*** ./src/app/_services/honey.service.ts ***!
  \********************************************/
/*! exports provided: HoneyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoneyService", function() { return HoneyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/alert.service */ "f5O9");




function _window() {
    // return the global native browser window object
    return window;
}
class HoneyService {
    constructor(ref, alertService) {
        this.ref = ref;
        this.alertService = alertService;
        this.BarcodeData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null); //la declaro como observable
    }
    startBarcode() {
        let self = this;
        if (typeof cordova !== 'undefined') {
            cordova.plugins.honeywell.barcode.onBarcodeScanned((result) => {
                self.BarcodeData.next(result.data);
                self.ref.tick();
            }, (error) => {
                this.alertService.showAlert(error);
            });
        }
    }
    testInput() {
        console.log('start test');
        setTimeout(() => {
            this.BarcodeData.next('Input');
            this.test();
        }, 3000);
    }
    test() {
        console.log('start test');
        setTimeout(() => {
            this.BarcodeData.next('896');
            this.test();
        }, 3000);
    }
}
HoneyService.ɵfac = function HoneyService_Factory(t) { return new (t || HoneyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"])); };
HoneyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HoneyService, factory: HoneyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HoneyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "diIz":
/*!*********************************************!*\
  !*** ./src/app/_services/intent.service.ts ***!
  \*********************************************/
/*! exports provided: BarcodeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeProvider", function() { return BarcodeProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.service */ "HgL4");




function _window() {
    // return the global native browser window object
    return window;
}
class BarcodeProvider {
    constructor(events) {
        this.events = events;
        this.requestResultCodes = "false";
        this.BarcodeData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null); //la declaro como observable
        //_window().cordova.ready().then((readySource) => {
        if (!_window().plugins || !_window().plugins.intentShim) {
            return;
        }
        let constructorInstance = this;
        //  The Datawedge service will respond via implicit broadcasts intents.  
        //  Responses may be the result of calling the Datawedge API or may be because a barcode was scanned
        //  Set up a broadcast receiver to listen for incoming scans
        _window().plugins.intentShim.registerBroadcastReceiver({
            filterActions: [
                'com.filoquin.goro.ACTION',
                'com.symbol.datawedge.api.RESULT_ACTION' //  Response from DataWedge service (as defined by API)
            ],
            filterCategories: [
                'android.intent.category.DEFAULT'
            ]
        }, function (intent) {
            //  Broadcast received
            // alert(JSON.stringify(intent.extras));
            console.log('Received Intent: ' + JSON.stringify(intent.extras));
            //  Emit a separate event for the result associated with this scan.  This will only be present in response to
            //  API calls which included a SEND_RESULT extra
            if (intent.extras.hasOwnProperty('RESULT_INFO')) {
                let commandResult = intent.extras.RESULT + " (" +
                    intent.extras.COMMAND.substring(intent.extras.COMMAND.lastIndexOf('.') + 1, intent.extras.COMMAND.length) + ")"; // + JSON.stringify(intent.extras.RESULT_INFO);
                constructorInstance.events.publish('data:commandResult', commandResult.toLowerCase());
            }
            if (intent.extras.hasOwnProperty('com.symbol.datawedge.api.RESULT_GET_VERSION_INFO')) {
                //  The version has been returned (DW 6.3 or higher).  Includes the DW version along with other subsystem versions e.g MX  
                var versionInfo = intent.extras['com.symbol.datawedge.api.RESULT_GET_VERSION_INFO'];
                console.log('Version Info: ' + JSON.stringify(versionInfo));
                let datawedgeVersion = versionInfo['DATAWEDGE'];
                console.log("Datawedge version: " + datawedgeVersion);
                //  Fire events sequentially so the application can gracefully degrade the functionality available on earlier DW versions
                if (datawedgeVersion >= "6.3")
                    constructorInstance.events.publish('status:dw63ApisAvailable', true);
                if (datawedgeVersion >= "6.4")
                    constructorInstance.events.publish('status:dw64ApisAvailable', true);
                if (datawedgeVersion >= "6.5")
                    constructorInstance.events.publish('status:dw65ApisAvailable', true);
            }
            else if (intent.extras.hasOwnProperty('com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS')) {
                //  Return from our request to enumerate the available scanners
                let enumeratedScanners = intent.extras['com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS'];
                constructorInstance.events.publish('data:enumeratedScanners', enumeratedScanners);
            }
            else if (intent.extras.hasOwnProperty('com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE')) {
                //  Return from our request to obtain the active profile
                let activeProfile = intent.extras['com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE'];
                constructorInstance.events.publish('data:activeProfile', activeProfile);
            }
            else if (intent.extras.hasOwnProperty('com.symbol.datawedge.data_string')) {
                setTimeout(() => {
                    constructorInstance.BarcodeData.next(intent.extras['com.symbol.datawedge.data_string']);
                }, 10);
            }
            else if (!intent.extras.hasOwnProperty('RESULT_INFO')) {
                //  A barcode has been scanned
                setTimeout(() => {
                    constructorInstance.BarcodeData.next(intent.extras['com.symbol.datawedge.data_string']);
                }, 10);
                //this.BarcodeData.next(intent.extras['com.symbol.datawedge.data_string']);
                //constructorInstance.events.publish('data:scan', {scanData: intent, time: new Date().toLocaleTimeString()});
            }
        });
        //   });
    }
    test() {
        console.log('start test');
        setTimeout(() => {
            this.BarcodeData.next('41568');
        }, 3000);
    }
    //  Control whether or not to include the SEND_RESULT extra in our commands to request DW send the
    //  result back to us.  Only available in DW6.5+
    requestResult(requestCodes) {
        this.requestResultCodes = "" + requestCodes;
    }
    //  Send a broadcast intent to the DW service which is present on all Zebra devcies.
    //  This functionality requires DW6.3+ as that is the version where the com.symbol.datawedge.api.ACTION
    //  was introduced.
    //  extraValue may be a String or a Bundle
    sendCommand(extraName, extraValue) {
        if (!_window().plugins || !_window().plugins.intentShim) {
            return;
        }
        console.log("Sending Command: " + extraName + ", " + JSON.stringify(extraValue));
        _window().plugins.intentShim.sendBroadcast({
            action: 'com.symbol.datawedge.api.ACTION',
            extras: {
                [extraName]: extraValue,
                "SEND_RESULT": this.requestResultCodes
            }
        }, function () { }, //  Success in sending the intent, not success of DW to process the intent.
        function () { } //  Failure in sending the intent, not failure of DW to process the intent.
        );
    }
}
BarcodeProvider.ɵfac = function BarcodeProvider_Factory(t) { return new (t || BarcodeProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_events_service__WEBPACK_IMPORTED_MODULE_2__["Events"])); };
BarcodeProvider.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BarcodeProvider, factory: BarcodeProvider.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarcodeProvider, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _events_service__WEBPACK_IMPORTED_MODULE_2__["Events"] }]; }, null); })();


/***/ }),

/***/ "e/jX":
/*!****************************************************!*\
  !*** ./src/app/_services/price-changes.service.ts ***!
  \****************************************************/
/*! exports provided: PriceChangesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceChangesService", function() { return PriceChangesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _odoo_rpc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./odoo-rpc.service */ "g35q");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alert.service */ "f5O9");





class PriceChangesService {
    constructor(odooRPC, alertService) {
        this.odooRPC = odooRPC;
        this.alertService = alertService;
    }
    getPriceHistory(fromDate, location_ids = []) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            const leaf = [['last_change', '>=', fromDate]];
            this.odooRPC
                .searchRead('watch.products.price.changes', leaf, ['product_tmpl_id', 'last_change'], 300, 0, { lang: 'es_AR' }, 'last_change asc')
                .then((res) => {
                observer.next(res);
                observer.complete();
            })
                .catch((err) => {
                this.alertService.showAlert(err);
            });
        });
        return transaction$;
    }
}
PriceChangesService.ɵfac = function PriceChangesService_Factory(t) { return new (t || PriceChangesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_2__["OdooRPCService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
PriceChangesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PriceChangesService, factory: PriceChangesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PriceChangesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _odoo_rpc_service__WEBPACK_IMPORTED_MODULE_2__["OdooRPCService"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "e7P/":
/*!***********************************************************!*\
  !*** ./src/app/_services/global-error-handler.service.ts ***!
  \***********************************************************/
/*! exports provided: GlobalErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandlerService", function() { return GlobalErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./log.service */ "FYe3");



class GlobalErrorHandlerService {
    constructor(logService) {
        this.logService = logService;
    }
    handleError(error) {
        console.log(error);
        this.logService.checkLog();
        this.logService.addLog('general', error.message);
    }
}
GlobalErrorHandlerService.ɵfac = function GlobalErrorHandlerService_Factory(t) { return new (t || GlobalErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"])); };
GlobalErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GlobalErrorHandlerService, factory: GlobalErrorHandlerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlobalErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _log_service__WEBPACK_IMPORTED_MODULE_1__["LogService"] }]; }, null); })();


/***/ }),

/***/ "ezfU":
/*!**************************************************************************!*\
  !*** ./src/app/main/elements/product-prices/product-prices.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductPricesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPricesComponent", function() { return ProductPricesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ProductPricesComponent_ul_2_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const price_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", price_r2.name, " $ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 2, price_r2.price, "1.2"), "");
} }
function ProductPricesComponent_ul_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProductPricesComponent_ul_2_li_1_Template, 3, 5, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.product["prices"]);
} }
class ProductPricesComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductPricesComponent.ɵfac = function ProductPricesComponent_Factory(t) { return new (t || ProductPricesComponent)(); };
ProductPricesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductPricesComponent, selectors: [["app-product-prices"]], inputs: { product: "product" }, decls: 3, vars: 1, consts: [[1, "row", "text-center", "mt-2"], [1, "col-12"], ["class", "list-group", 4, "ngIf"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"]], template: function ProductPricesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProductPricesComponent_ul_2_Template, 2, 1, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product && ctx.product["prices"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LXByaWNlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductPricesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-prices',
                templateUrl: './product-prices.component.html',
                styleUrls: ['./product-prices.component.css']
            }]
    }], function () { return []; }, { product: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "f5O9":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class AlertService {
    constructor() {
        this.msg = '';
        this.show = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    showAlert(msg) {
        this.msg = msg;
        this.show.next(true);
    }
    hiddeAlert() {
        this.show.next(false);
        this.msg = '';
    }
    getStatus() {
        return this.show.asObservable();
    }
    getMsg() {
        return this.msg;
    }
}
AlertService.ɵfac = function AlertService_Factory(t) { return new (t || AlertService)(); };
AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlertService, factory: AlertService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "fgVz":
/*!********************************************************************!*\
  !*** ./src/app/pages/stock/ent-location/ent-location.component.ts ***!
  \********************************************************************/
/*! exports provided: EntLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntLocationComponent", function() { return EntLocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/product.service */ "szdb");
/* harmony import */ var _services_honey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/honey.service */ "bwkT");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/config.service */ "rkFe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/stock.service */ "CFEw");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../_services/alert.service */ "f5O9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_comunes_range_picker_range_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../main/comunes/range-picker/range-picker.component */ "Fpq8");
/* harmony import */ var _main_comunes_button_input_text_button_input_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../main/comunes/button-input-text/button-input-text.component */ "RedB");
/* harmony import */ var _main_comunes_read_code_read_code_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../main/comunes/read-code/read-code.component */ "5aEy");
/* harmony import */ var _main_comunes_input_cant_keyboard_button_input_cant_keyboard_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../main/comunes/input-cant-keyboard-button/input-cant-keyboard-button.component */ "zacy");














const _c0 = ["search"];
const _c1 = ["moveLineModal"];
function EntLocationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EntLocationComponent_read_code_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "read-code", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchByCode", function EntLocationComponent_read_code_8_Template_read_code_searchByCode_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.searchByCode($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputMethod", ctx_r1.inputMethod);
} }
function EntLocationComponent_strong_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ":: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EntLocationComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_span_22_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const i_r11 = ctx.index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.removeFilter(i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filter_r10.label, " ");
} }
const _c2 = function (a2, a3, a4) { return { "text-bold": true, "text-white": true, "bg-danger": a2, "bg-success": a3, "bg-warning": a4 }; };
const _c3 = function () { return { btn: true }; };
function EntLocationComponent_ng_container_24_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_ng_container_24_li_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.openMoveLineModal(i_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Scan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Res");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_ng_container_24_li_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.selectPiking(item_r14["picking_id"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_ng_container_24_li_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.print(item_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_ng_container_24_li_1_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const i_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.openMoveLineModal(i_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c2, item_r14["reserved_availability"] > item_r14["quantity_done"], item_r14["reserved_availability"] == item_r14["quantity_done"], item_r14["reserved_availability"] < item_r14["quantity_done"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r14["quantity_done"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r14["reserved_availability"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r14["product_id"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" remito: ", item_r14["picking_id"][1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Origen: ", item_r14["origin"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));
} }
function EntLocationComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EntLocationComponent_ng_container_24_li_1_Template, 24, 14, "li", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r14["reserved_availability"] > item_r14["quantity_done"] || ctx_r5.showOk);
} }
function EntLocationComponent_ng_template_33_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Remito: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r29.moves[ctx_r29.active_index]["picking_id"][1]);
} }
function EntLocationComponent_ng_template_33_div_0_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Codigo de barra: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.moves[ctx_r30.active_index]["barcode"]);
} }
function EntLocationComponent_ng_template_33_div_0_button_54_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_ng_template_33_div_0_button_54_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r32.parcialMoveProducts(ctx_r32.active_index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Movimiento parcial de productos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c4 = function (a2) { return { btn: true, "btn-dark": true, active: a2 }; };
const _c5 = function () { return { btn: true, "btn-danger": true }; };
function EntLocationComponent_ng_template_33_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Escaneados");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EntLocationComponent_ng_template_33_div_0_div_10_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Unidad: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Real/Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "/ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "( ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Origen: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, EntLocationComponent_ng_template_33_div_0_div_30_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Codigo interno: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_ng_template_33_div_0_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.qtyDir = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_ng_template_33_div_0_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.qtyDir = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_ng_template_33_div_0_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.addScannedQuantity(ctx_r37.active_index, 1 * ctx_r37.qtyDir); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_ng_template_33_div_0_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.addScannedQuantity(ctx_r38.active_index, 5 * ctx_r38.qtyDir); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_ng_template_33_div_0_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.addScannedQuantity(ctx_r39.active_index, 10 * ctx_r39.qtyDir); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_ng_template_33_div_0_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.addScannedQuantity(ctx_r40.active_index, 50 * ctx_r40.qtyDir); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " 50 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_ng_template_33_div_0_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.addScannedQuantity(ctx_r41.active_index, 100 * ctx_r41.qtyDir); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 100 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, EntLocationComponent_ng_template_33_div_0_button_54_Template, 2, 0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input-cant-keyboard-button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("evento", function EntLocationComponent_ng_template_33_div_0_Template_input_cant_keyboard_button_evento_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.setCantidad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_ng_template_33_div_0_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const modal_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return modal_r27.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r28.moves[ctx_r28.active_index]["product_id"][1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r28.moves[ctx_r28.active_index]["scanned_qty"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.moves[ctx_r28.active_index]["picking_id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.moves[ctx_r28.active_index]["product_uom"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.moves[ctx_r28.active_index]["quantity_done"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.moves[ctx_r28.active_index]["reserved_availability"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.moves[ctx_r28.active_index]["product_uom_qty"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.moves[ctx_r28.active_index]["origin"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.moves[ctx_r28.active_index]["barcode"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r28.moves[ctx_r28.active_index]["default_code"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c4, ctx_r28.qtyDir == -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c4, ctx_r28.qtyDir == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.moves[ctx_r28.active_index]["scanned_qty"] && ctx_r28.moves[ctx_r28.active_index]["quantity_done"] != ctx_r28.moves[ctx_r28.active_index]["product_uom_qty"]);
} }
function EntLocationComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EntLocationComponent_ng_template_33_div_0_Template, 60, 27, "div", 42);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.active_index !== undefined);
} }
const _c6 = function (a1, a2) { return { fa: true, "fa-eye": a1, "fa-eye-slash": a2, "fa-2x": true }; };
const _c7 = function (a2) { return { btn: true, "btn-info": true, active: a2 }; };
const _c8 = function () { return { btn: true, "btn-info": true }; };
class EntLocationComponent {
    constructor(productService, HoneyService, changeDetectorRef, ConfigService, route, stockService, modalService, Router, alertService) {
        this.productService = productService;
        this.HoneyService = HoneyService;
        this.changeDetectorRef = changeDetectorRef;
        this.ConfigService = ConfigService;
        this.route = route;
        this.stockService = stockService;
        this.modalService = modalService;
        this.Router = Router;
        this.alertService = alertService;
        this.showOk = false;
        this.active_index = undefined;
        this.addQty = 1;
        this.qtyDir = 1;
        this.moves = [];
        this.textBus = '';
        this.keyboardDisable = true;
        this.intefaceBlocked = false;
        this.isCollapsed = true;
        this.inputMethod = 'textBus';
        this.spinner = true;
        this.log = '';
        this.showLog = false;
        this.filters = [];
        this.showReadCode = true;
        /*  */
    }
    ngOnInit() {
        this.lot_stock_id = Number(this.route.snapshot.paramMap.get('lot_stock_id'));
        this.op = String(this.route.snapshot.paramMap.get('op'));
        this.initFilter();
        this.getAssignedMoves();
    }
    initFilter() {
        this.filters.push({
            value: 'Ingreso OK',
            label: 'Ingreso OK',
            name: 'Ingreso OK',
        });
        let dateExpected = this.makeDateLeaf(this.parseDateObject(new Date()), undefined);
        this.filters.push({
            label: 'Ingresos hasta hoy',
            value: { fromDate: this.parseDateObject(new Date()) },
            name: 'date_expected',
        });
        return dateExpected;
    }
    togleShowOk() {
        if (this.showOk) {
            this.showOk = false;
        }
        else {
            this.showOk = true;
        }
    }
    refresh() {
        this.spinner = true;
        this.lot_stock_id = Number(this.route.snapshot.paramMap.get('lot_stock_id'));
        this.op = String(this.route.snapshot.paramMap.get('op'));
        this.getAssignedMoves();
    }
    removeFilter(index) {
        //const index = this.filters.findIndex((e) => e.name === name);
        this.filters.splice(index, 1);
        this.spinner = true;
        this.getAssignedMoves();
    }
    selectPiking(picking_id) {
        this.spinner = true;
        const element = {
            name: 'picking_id',
            label: picking_id[1],
            value: picking_id[0],
        };
        const exist = this.filters.find((e) => e.value === element.value && e.name === element.name);
        if (!exist) {
            this.filters.push(element);
            this.op = 'picking';
            this.lot_stock_id = picking_id[0];
            this.getAssignedMoves();
        }
    }
    getAssignedMoves() {
        let leaf = [];
        if (this.op == 'location-entry') {
            leaf = [
                ['state', '=', ['assigned', 'draft', 'partially_available']],
                ['location_dest_id', 'child_of', this.lot_stock_id],
            ];
        }
        else if (this.op == 'picking') {
            leaf = [
                ['state', 'in', ['assigned', 'draft', 'partially_available']],
                ['picking_id', '=', this.lot_stock_id],
            ];
        }
        else if (this.op == 'picking-id') {
            leaf = [
                ['state', 'in', ['assigned', 'draft', 'partially_available']],
                ['picking_id', '=', this.lot_stock_id],
            ];
        }
        let dateExpected = this.filters.filter((filter) => filter.name == 'date_expected');
        if (dateExpected.length) {
            dateExpected = this.makeDateLeaf(dateExpected[0]['value']['fromDate'], dateExpected[0]['value']['toDate']);
        }
        leaf.push(...dateExpected);
        let pickingOrigin = this.filters.filter((filter) => filter.name == 'picking_id.origin');
        if (pickingOrigin.length) {
            pickingOrigin.forEach((element) => {
                leaf.push([element.name, 'like', element.value]);
            });
        }
        let incomeOk = this.filters.filter((filter) => filter.name == 'Ingreso OK');
        if (incomeOk.length) {
            incomeOk.forEach(() => {
                leaf.push(['picking_id.income_ok', '=', true]);
            });
        }
        if (leaf.length) {
            this.stockService.getMoves(leaf, 'incoming').subscribe((res) => {
                res['records'].forEach(function (part, index, theArray) { });
                this.moves = res['records'];
                this.spinner = false;
            });
        }
    }
    makeDateLeaf(fromDate, toDate) {
        let leaf = [];
        if (!toDate) {
            toDate = fromDate;
        }
        leaf.push(['date_expected', '>=', fromDate + ' 00:00:00']);
        leaf.push(['date_expected', '<', toDate + ' 23:59:59']);
        return leaf;
    }
    formSearch() {
        const search = this.searchForm.controls.search.value;
        this.searchByCode(search);
        this.searchForm.controls.search.patchValue('');
        this.searchElement.nativeElement.focus();
    }
    searchByCode(code) {
        this.changeDetectorRef.detectChanges();
        if (code.length < 2) {
            return;
        }
        var line = this.moves.findIndex(function (item) {
            let codeLow = code.toLowerCase();
            return ((item.default_code.toLowerCase().indexOf(codeLow) !== -1 ||
                item.product_id[1].toLowerCase().indexOf(codeLow) !== -1 ||
                item.barcode == code) &&
                //|| item.picking_id[1].toLowerCase().indexOf(codeLow) !== -1
                item.quantity_done < item.reserved_availability);
        });
        this.textBus = '';
        if (line == -1) {
            this.alertService.showAlert(code + ' NO diponible');
        }
        else {
            let openModal = this.modalService.hasOpenModals();
            this.active_index = line;
            this.addScannedQuantity(line, 1);
            this.addQty = 1;
            this.qtyDir = 1;
            this.changeDetectorRef.detectChanges();
            if (!openModal) {
                this.modalService.open(this.moveLineModal).result.then((result) => {
                    this.active_index = undefined;
                    this.changeDetectorRef.detectChanges();
                });
            }
        }
    }
    openMoveLineModal(line) {
        this.active_index = line;
        this.addQty = 1;
        this.qtyDir = 1;
        this.modalService.open(this.moveLineModal).result.then((result) => {
            this.active_index = undefined;
        });
    }
    removeToLocalStorage(storage, move) {
        this.stockService.deleteQuantity(storage, move.id);
    }
    addToLocalStorage(storage, move, qty) {
        this.stockService.setQuantity(storage, move.id, qty);
    }
    addScannedQuantity(line, qty = 1) {
        this.changeDetectorRef.detectChanges();
        if (this.moves[line]['scanned_qty'] + qty < 1) {
            this.moves[line]['quantity_done'] =
                this.moves[line]['quantity_done'] - this.moves[line]['scanned_qty'];
            this.moves[line]['scanned_qty'] = 0;
            return;
        }
        this.moves[line]['scanned_qty'] += qty;
        this.moves[line]['quantity_done'] += qty;
        // TODO: LocalSOTRAGE -> this.moves[line]['scanned_qty']
        this.addToLocalStorage('incoming', this.moves[line], qty);
        if (qty > 0 &&
            this.moves[line]['quantity_done'] >
                this.moves[line]['reserved_availability']) {
            let message = 'Esta por confirmar mas items de los esperados ¿esta seguro?';
            if (!window.confirm(message)) {
                this.moves[line]['scanned_qty'] -= qty;
                this.moves[line]['quantity_done'] -= qty;
                this.addToLocalStorage('incoming', this.moves[line], -qty);
                return;
            }
            this.removeToLocalStorage('incoming', this.moves[line]);
        }
        let line_id = this.moves[line];
        this.changeDetectorRef.detectChanges();
        if (line_id.quantity_done == line_id.reserved_availability) {
            //if (line_id.scanned_qty == 5){
            this.spinner = true;
            this.stockService
                .move_products('incoming', this.moves[line], this.moves[line]['scanned_qty'], line)
                .subscribe((res) => {
                this.removeToLocalStorage('incoming', this.moves[line]);
                this.moves[line]['scanned_qty'] = 0;
                this.moves[line]['move_line_ids'] = [res];
                // delete this.moves[line];
                this.getAssignedMoves();
                this.modalService.dismissAll();
                this.check_pick_ok(this.active_index);
                this.active_index = undefined;
            });
        }
    }
    check_pick_ok(line) {
        let picking_id = this.moves[line]['picking_id'][0];
        let no_ok = this.moves.filter(function (el) {
            if (el['picking_id'][0] == picking_id &&
                el['quantity_done'] < el['reserved_availability']) {
                return true;
            }
            else {
                return false;
            }
        });
        if (no_ok.length == 0) {
            this.spinner = true;
            this.stockService.button_validate(picking_id).subscribe((res) => {
                if (res.name) {
                    this.alertService.showAlert(res.name);
                }
                this.getAssignedMoves();
            });
        }
    }
    addOrigin(objectResult) {
        this.showReadCode = objectResult.showReadCode;
        if (this.showReadCode && objectResult.text) {
            this.filters.push({
                label: 'origen: ' + objectResult.text,
                value: objectResult.text,
                name: 'picking_id.origin',
            });
            this.spinner = true;
            this.getAssignedMoves();
        }
    }
    setCantidad(objectResult) {
        this.showReadCode = objectResult.showReadCode;
        objectResult.cantidad &&
            this.addScannedQuantity(this.active_index, parseFloat(objectResult.cantidad));
    }
    parcialMoveProducts(line) {
        if (this.moves[line]['scanned_qty'] > 0) {
            this.spinner = true;
            this.stockService
                .move_products('incoming', this.moves[line], this.moves[line]['scanned_qty'], line)
                .subscribe((res) => {
                this.moves[line]['scanned_qty'] = 0;
                this.moves[line]['move_line_ids'] = [res];
                // delete this.moves[line];
                this.spinner = false;
                this.getAssignedMoves();
                this.modalService.dismissAll();
                this.removeToLocalStorage('incoming', this.moves[line]);
                this.active_index = undefined;
            });
        }
    }
    print(item) {
        this.Router.navigateByUrl('/zpl/' + item['product_id'][0] + '/' + item['product_uom_qty']);
    }
    dateRange(value) {
        const index = this.filters.findIndex((e) => e.name == 'date_expected');
        if (index >= 0) {
            this.filters.splice(index, 1);
        }
        if (value.fromDate && value.toDate) {
            const fromDate = value.fromDate.day +
                '/' +
                value.fromDate.month +
                '/' +
                value.fromDate.year;
            const toDate = value.toDate.day + '/' + value.toDate.month + '/' + value.toDate.year;
            this.filters.push({
                label: fromDate + ' a ' + toDate,
                value: {
                    fromDate: this.parseDate(value.fromDate),
                    toDate: this.parseDate(value.toDate),
                },
                name: 'date_expected',
            });
        }
        else if (value.fromDate) {
            const fromDate = value.fromDate.day +
                '/' +
                value.fromDate.month +
                '/' +
                value.fromDate.year;
            this.filters.push({
                label: fromDate,
                value: { fromDate: this.parseDate(value.fromDate) },
                name: 'date_expected',
            });
        }
        this.spinner = true;
        this.getAssignedMoves();
    }
    parseDate(date) {
        const zeroPad = (num, places) => String(num).padStart(places, '0');
        return (date.year + '-' + zeroPad(date.month, 2) + '-' + zeroPad(date.day, 2));
    }
    parseDateObject(date) {
        const zeroPad = (num, places) => String(num).padStart(places, '0');
        return (date.getFullYear() +
            '-' +
            zeroPad(date.getMonth() + 1, 2) +
            '-' +
            zeroPad(date.getDate(), 2));
    }
}
EntLocationComponent.ɵfac = function EntLocationComponent_Factory(t) { return new (t || EntLocationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_honey_service__WEBPACK_IMPORTED_MODULE_2__["HoneyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_5__["StockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"])); };
EntLocationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntLocationComponent, selectors: [["app-ent-location"]], viewQuery: function EntLocationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.moveLineModal = _t.first);
    } }, decls: 35, vars: 19, consts: [[1, "text-center", "fixed-top", "spinnerContent"], ["class", "spinner-grow text-warning", "style", "width: 5rem; height: 5rem", "role", "status", 4, "ngIf"], [1, "row", "text-center", "mt-2"], [1, "col-12"], [1, "row"], [1, "col-2"], ["type", "button", "aria-controls", "collapseExample", 1, "btn", "btn-primary", "shadow", 3, "click"], [1, "fa", "fa-filter"], ["class", "col-10", 3, "inputMethod", "searchByCode", 4, "ngIf"], [3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "pb-0"], [1, "row", "pb-0"], [3, "evento"], ["type", "button", 1, "btn", "btn-light", "shadow", 3, "click"], [3, "ngClass"], [1, "text-left"], [4, "ngIf"], ["class", "badge badge-primary", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group"], [4, "ngFor", "ngForOf"], [1, "row", "text-center"], ["role", "group", 1, "btn-group", "btn-group-lg", "fixed-bottom"], ["type", "button", 3, "ngClass", "click"], [1, "fa", "fa-font"], [1, "fa", "fa-barcode"], [1, "fa", "fa-refresh"], ["moveLineModal", ""], ["role", "status", 1, "spinner-grow", "text-warning", 2, "width", "5rem", "height", "5rem"], [1, "sr-only"], [1, "col-10", 3, "inputMethod", "searchByCode"], [1, "badge", "badge-primary", 3, "click"], ["class", "text-left list-group-item", 4, "ngIf"], [1, "text-left", "list-group-item"], [1, "text-center", "col-2", "pt-0", "pb-0", "pl-0", "pr-0"], [3, "ngClass", "click"], [1, "text-bold"], [1, ""], [1, "col-8"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "fa", "fa-print", "fa-lg"], [1, "fa", "fa-lg", "fa-list"], ["class", "modal-dialog", "role", "document", 4, "ngIf"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body"], [1, "bg-danger", "text-center", "text-white", "mb-0"], [1, "bg-dark", "text-center", "text-white", "mt-0"], ["role", "group", 1, "btn-group", "w-100"], [1, "fa", "fa-minus"], [1, "fa", "fa-plus"], ["role", "group", 1, "btn-group", "btn-group-lg", "w-100"], [1, "col-6"], ["type", "button", "class", "btn btn-block btn-success btn-lg w-100", 3, "click", 4, "ngIf"], [1, "modal-footer"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-block", "btn-success", "btn-lg", "w-100", 3, "click"]], template: function EntLocationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EntLocationComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r2.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EntLocationComponent_read_code_8_Template, 1, 1, "read-code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbCollapseChange", function EntLocationComponent_Template_div_ngbCollapseChange_9_listener($event) { return ctx.isCollapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "range-picker", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("evento", function EntLocationComponent_Template_range_picker_evento_14_listener($event) { return ctx.dateRange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_Template_button_click_16_listener() { return ctx.togleShowOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button-input-text", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("evento", function EntLocationComponent_Template_button_input_text_evento_19_listener($event) { return ctx.addOrigin($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EntLocationComponent_strong_21_Template, 2, 0, "strong", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EntLocationComponent_span_22_Template, 2, 1, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EntLocationComponent_ng_container_24_Template, 2, 1, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_Template_button_click_27_listener() { return ctx.inputMethod = "form"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_Template_button_click_29_listener() { return ctx.inputMethod = "textBus"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EntLocationComponent_Template_button_click_31_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, EntLocationComponent_ng_template_33_Template, 1, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showReadCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](11, _c6, ctx.showOk, !ctx.showOk));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filters.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.moves);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c7, ctx.inputMethod == "form"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c7, ctx.inputMethod == "textBus"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c8));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCollapse"], _main_comunes_range_picker_range_picker_component__WEBPACK_IMPORTED_MODULE_9__["RangePickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _main_comunes_button_input_text_button_input_text_component__WEBPACK_IMPORTED_MODULE_10__["ButtonInputTextComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _main_comunes_read_code_read_code_component__WEBPACK_IMPORTED_MODULE_11__["ReadCodeComponent"], _main_comunes_input_cant_keyboard_button_input_cant_keyboard_button_component__WEBPACK_IMPORTED_MODULE_12__["InputCantKeyboardButtonComponent"]], styles: [".spinnerContent[_ngcontent-%COMP%] {\n  z-index: 80000;\n}\n.text-bus[_ngcontent-%COMP%] {\n  height: 34px;\n  font-size: 22px;\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudC1sb2NhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7QUFDekIiLCJmaWxlIjoiZW50LWxvY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lckNvbnRlbnQge1xuICB6LWluZGV4OiA4MDAwMDtcbn1cbi50ZXh0LWJ1cyB7XG4gIGhlaWdodDogMzRweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntLocationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ent-location',
                templateUrl: './ent-location.component.html',
                styleUrls: ['./ent-location.component.css'],
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _services_honey_service__WEBPACK_IMPORTED_MODULE_2__["HoneyService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _services_stock_service__WEBPACK_IMPORTED_MODULE_5__["StockService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }]; }, { searchElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['search']
        }], moveLineModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['moveLineModal']
        }] }); })();


/***/ }),

/***/ "g35q":
/*!***********************************************!*\
  !*** ./src/app/_services/odoo-rpc.service.ts ***!
  \***********************************************/
/*! exports provided: OdooRPCService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OdooRPCService", function() { return OdooRPCService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class Cookies {
    constructor() {
        this.session_id = '';
    }
    delete_sessionId() {
        this.session_id = '';
        document.cookie = "cids=1; session_id=; expires=Wed, 29 Jun 2016 00:00:00 UTC";
    }
    get_sessionId() {
        return document
            .cookie.split("; ")
            .filter(x => { return x.indexOf("session_id") === 0; })
            .map(x => { return x.split("=")[1]; })
            .pop() || this.session_id || "";
    }
    set_sessionId(val) {
        document.cookie = `session_id=${val}; cids=1;`;
        this.session_id = val;
    }
}
class OdooRPCService {
    constructor(http) {
        this.http = http;
        this.odoo_server = '';
        this.http_auth = '';
        this.uniq_id_counter = 0;
        this.shouldManageSessionId = false; // try without first
        this.context = { "lang": "es_AR" };
        this.uid = 0;
        this.cookies = new Cookies();
    }
    buildRequest(url, params) {
        this.uniq_id_counter += 1;
        if (this.shouldManageSessionId) {
            params.session_id = this.cookies.get_sessionId();
        }
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            //"X-Openerp-Session-Id": this.cookies.get_sessionId(),
            "Authorization": "Basic " + btoa(`${this.http_auth}`)
        });
        return JSON.stringify({
            jsonrpc: "2.0",
            method: "call",
            params: params,
        });
    }
    handleOdooErrors(response) {
        if (!response.error) {
            return response.result;
        }
        let error = response.error;
        let errorObj = {
            title: "    ",
            message: "",
            fullTrace: error
        };
        if (error.code === 200 && error.message === "Odoo Server Error" && error.data.name === "werkzeug.exceptions.NotFound") {
            errorObj.title = "page_not_found";
            errorObj.message = "HTTP Error";
        }
        else if ((error.code === 100 && error.message === "Odoo Session Expired") || // v8
            (error.code === 300 && error.message === "OpenERP WebClient Error" && error.data.debug.match("SessionExpiredException")) // v7
        ) {
            errorObj.title = "session_expired";
            //this.cookies.delete_sessionId();
        }
        else if ((error.message === "Odoo Server Error" && /FATAL:  database "(.+)" does not exist/.test(error.data.message))) {
            errorObj.title = "database_not_found";
            errorObj.message = error.data.message;
        }
        else if ((error.data.name === "openerp.exceptions.AccessError")) {
            errorObj.title = "AccessError";
            errorObj.message = error.data.message;
        }
        else {
            let split = ("" + error.data.fault_code).split("\n")[0].split(" -- ");
            if (split.length > 1) {
                error.type = split.shift();
                error.data.fault_code = error.data.fault_code.substr(error.type.length + 4);
            }
            if (error.code === 200 && error.type) {
                errorObj.title = error.type;
                errorObj.message = error.data.fault_code.replace(/\n/g, "<br />");
            }
            else {
                errorObj.title = error.message;
                errorObj.message = error.data.debug.replace(/\n/g, "<br />");
            }
        }
        return Promise.reject(errorObj);
    }
    handleHttpErrors(error) {
        return Promise.reject(error.message || error);
    }
    init(configs) {
        this.odoo_server = configs.odoo_server;
        this.http_auth = configs.http_auth || null;
    }
    setOdooServer(odoo_server) {
        this.odoo_server = odoo_server;
    }
    setHttpAuth(http_auth) {
        this.http_auth = http_auth;
    }
    sendRequest(url, params) {
        let body = this.buildRequest(url, params);
        return this.http.post(this.odoo_server + url, body, { headers: this.headers })
            .toPromise()
            .then(this.handleOdooErrors)
            .catch(this.handleHttpErrors);
    }
    getServerInfo() {
        return this.sendRequest("/web/webclient/version_info", {});
    }
    getSessionInfo() {
        return this.sendRequest("/web/session/get_session_info", {});
    }
    login(db, login, password) {
        let params = {
            db: db,
            login: login,
            password: password
        };
        let $this = this;
        return this.sendRequest("/web/session/authenticate", params).then(function (result) {
            if (!result.uid) {
                $this.cookies.delete_sessionId();
                return Promise.reject({
                    title: "wrong_login",
                    message: "Username and password don't match",
                    fullTrace: result
                });
            }
            $this.context = result.user_context;
            localStorage.setItem("user_context", JSON.stringify($this.context));
            $this.cookies.set_sessionId(result.session_id);
            return result;
        });
    }
    isLoggedIn(force = true) {
        if (!force) {
            return Promise.resolve(this.cookies.get_sessionId().length > 0);
        }
        return this.getSessionInfo().then((result) => {
            this.cookies.set_sessionId(result.session_id);
            return !!(result.uid);
        });
    }
    get_uid() {
        return this.getSessionInfo().then((result) => {
            this.uid = result.uid;
        });
    }
    set_uid() {
        return this.getSessionInfo().then((result) => {
            this.uid = result.uid;
        });
    }
    logout(force = true) {
        this.cookies.delete_sessionId();
        return this.sendRequest("/web/session/destroy", {}).then(function (result) {
            return Promise.resolve();
        });
        if (force) {
            return this.getSessionInfo().then((r) => {
                if (r.db) {
                    return this.login(r.db, "", "");
                }
                return Promise.resolve();
            });
        }
        else {
            return Promise.resolve();
        }
    }
    getDbList() {
        return this.sendRequest("/web/database/get_list", {});
    }
    searchCount(model, domain, context = {}) {
        return this.call(model, 'search_count', [domain], context);
    }
    search(model, domain, context = {}) {
        return this.call(model, 'search', [domain], context);
    }
    searchRead(model, domain, fields, limit = 80, offset = 0, context = {}, order = '') {
        let params = {
            model: model,
            domain: domain,
            fields: fields,
            limit: limit,
            offset: offset,
            context: context || this.context
        };
        if (order) {
            params['sort'] = order;
        }
        return this.sendRequest("/web/dataset/search_read", params);
    }
    read(model, id, fields, context = {}) {
        let params = {
            fields: fields,
            context: context || this.context
        };
        if (Number.isInteger(id)) {
            id = [id];
        }
        return this.call(model, 'read', [id], params);
    }
    updateContext(context) {
        localStorage.setItem("user_context", JSON.stringify(context));
        let args = [[this.context.uid], context];
        this.call("res.users", "write", args, {})
            .then(() => this.context = context)
            .catch((err) => this.context = context);
    }
    getContext() {
        return this.context;
    }
    getServer() {
        return this.odoo_server;
    }
    fields_get(model, args = [], kwargs = {}) {
        return this.call(model, 'fields_get', args, kwargs);
    }
    call(model, method, args, kwargs) {
        kwargs = kwargs || {};
        kwargs.context = kwargs.context || {};
        Object.assign(kwargs.context, this.context);
        let params = {
            model: model,
            method: method,
            args: args,
            kwargs: kwargs,
        };
        return this.sendRequest("/web/dataset/call_kw", params);
    }
}
OdooRPCService.ɵfac = function OdooRPCService_Factory(t) { return new (t || OdooRPCService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OdooRPCService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OdooRPCService, factory: OdooRPCService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OdooRPCService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
            }] }]; }, null); })();


/***/ }),

/***/ "giPN":
/*!**************************************************************!*\
  !*** ./src/app/pages/price-update/price-update.component.ts ***!
  \**************************************************************/
/*! exports provided: PriceUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PriceUpdateComponent", function() { return PriceUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2canvas */ "wOnQ");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/product.service */ "szdb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _services_printer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/printer.service */ "XQVu");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/config.service */ "rkFe");
/* harmony import */ var _services_price_changes_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/price-changes.service */ "e/jX");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/alert.service */ "f5O9");
/* harmony import */ var _main_elements_price_label_price_label_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../main/elements/price-label/price-label.component */ "1Ict");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");












function PriceUpdateComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PriceUpdateComponent_ng_container_16_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PriceUpdateComponent_ng_container_16_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const product_id_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.searchByTmplId(product_id_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_id_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_id_r4["product_tmpl_id"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $ ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 3, product_id_r4["list_price"], "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](9, 6, product_id_r4["last_change"], "d/M/Y H:mm", "UTC -6"), " ");
} }
function PriceUpdateComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PriceUpdateComponent_ng_container_16_li_1_Template, 10, 10, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const product_id_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", product_id_r4["printed"] != true);
} }
function PriceUpdateComponent_img_37_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PriceUpdateComponent_img_37_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.capturedImage = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.capturedImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a2) { return { btn: true, "btn-info": true, active: a2 }; };
const _c1 = function () { return { btn: true, "btn-info": true }; };
class PriceUpdateComponent {
    //priceChageDate: string = "14/05/2021 00:00:00";
    constructor(productService, sanitizer, PrinterService, ConfigService, PriceChangesService, alertService) {
        this.productService = productService;
        this.sanitizer = sanitizer;
        this.PrinterService = PrinterService;
        this.ConfigService = ConfigService;
        this.PriceChangesService = PriceChangesService;
        this.alertService = alertService;
        this.printAuto = false;
        this.printAutoDelay = 300;
        this.spinner = false;
        this.log = '';
        this.showLog = false;
        this.priceChageDate = '2021-06-24 00:00:00';
    }
    ngOnInit() {
        this.printAuto = this.ConfigService.params.printAuto;
        this.printAutoDelay = this.ConfigService.params.printAutoDelay;
        this.showLog = this.ConfigService.params.showLog;
        this.priceChageDate = this.ConfigService.params.priceChageDate;
        this.get_pricelist();
        if (this.ConfigService.params.PrinterName) {
            this.conectPrinter();
        }
        this.getPricechanges(this.priceChageDate);
    }
    conectPrinter() {
        this.PrinterService.connected().subscribe((res) => {
            if (res) {
                /* 				console.log("impresora conectada");
                 */
            }
            else {
                this.PrinterService.connectPrinter(this.ConfigService.params.PrinterName).subscribe();
                //PrinterName
            }
        });
    }
    connected() {
        this.PrinterService.connected().subscribe((res) => {
            this.printer_status = res;
        });
    }
    getPricechanges(date) {
        let parent = this;
        this.spinner = true;
        this.product = false;
        this.PriceChangesService.getPriceHistory(date).subscribe({
            next(res) {
                parent.product_ids = res['records']
                    .map((item) => item)
                    .filter((value, index, self) => self.indexOf({ product_tmpl_id: value.product_tmpl_id }) == -1);
            },
            complete() {
                parent.spinner = false;
            },
        });
    }
    changeDate(event) {
        if (event) {
            this.priceChageDate = event;
            this.ConfigService.params.priceChageDate = event;
            this.ConfigService.saveParam('priceChageDate', event);
        }
    }
    searchByTmplId(line) {
        let parent = this;
        this.product = false;
        this.spinner = true;
        //this.changeDetectorRef.detectChanges();
        this.productService
            .searchByTmplId(line['product_tmpl_id'][0])
            .subscribe((res) => {
            if (res['length'] > 0) {
                parent.product = res['records'][0];
                parent.product['prices'] = [];
                parent.load_price(res['records'][0]['id'], line);
            }
            else {
                this.alertService.showAlert('Código invalido');
                this.spinner = false;
            }
        });
    }
    load_price(product_id, line) {
        let printAutoDelay = this.printAutoDelay;
        let parent = this;
        this.productService
            .load_price(product_id, this.selected_pricelist_id)
            .subscribe({
            next(price) {
                parent.product['prices'].push(price);
            },
            complete() {
                parent.spinner = false;
                parent.changeDate(line.last_change);
                line.printed = true;
                if (parent) {
                    //parent.changeDetectorRef.detectChanges();
                }
                if (parent.printAuto) {
                    setTimeout(() => {
                        parent.printTag();
                    }, parent.printAutoDelay);
                }
            },
        });
    }
    get_pricelist() {
        this.productService.get_pricelists().subscribe((res) => {
            if (res['length'] > 0) {
                this.pricelist_ids = res['records'];
                this.selected_pricelist_id = res['records'];
            }
        });
    }
    printTag() {
        if (this.product) {
            html2canvas__WEBPACK_IMPORTED_MODULE_1___default()(document.querySelector('.etiqueta'), {
                width: this.ConfigService.params.labelWidth,
                height: this.ConfigService.params.labelHeight,
                windowWidth: this.ConfigService.params.labelWidth,
                windowHeight: this.ConfigService.params.labelHeight,
                backgroundColor: '#FFFFFF',
            }).then((canvas) => {
                let b64 = canvas.toDataURL();
                this.capturedImage = this.sanitizer.bypassSecurityTrustResourceUrl(b64.replace(/\n/g, ''));
                this.PrinterService.printBase64(b64).subscribe((res) => {
                    //console.log(res);
                    this.capturedImage = '';
                });
            });
        }
    }
    toglePrintAuto() {
        this.printAuto = !this.printAuto;
    }
}
PriceUpdateComponent.ɵfac = function PriceUpdateComponent_Factory(t) { return new (t || PriceUpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_printer_service__WEBPACK_IMPORTED_MODULE_4__["PrinterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_price_changes_service__WEBPACK_IMPORTED_MODULE_6__["PriceChangesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"])); };
PriceUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PriceUpdateComponent, selectors: [["app-price-update"]], decls: 38, vars: 12, consts: [[1, "row", "text-center", "mt-2"], [1, "col-12"], [2, "background", "#eee"], [3, "product", "click"], ["etiqueta", ""], [1, "text-center", "spinnerContent"], ["class", "spinner-grow text-warning", "style", "width: 5rem; height: 5rem", "role", "status", 4, "ngIf"], [1, "row", "text-center"], ["role", "group", 1, "btn-group", "btn-group-lg", "fixed-bottom"], ["type", "button btn-block", 3, "ngClass", "click"], [1, "fa", "fa-print", "fa-lg"], ["type", "button btn-block", "data-toggle", "modal", "data-target", "#pricelistModal", 3, "ngClass"], [1, "fa", "fa-lg", "fa-list"], [1, "row", "mt-2", "h-50"], [1, "list-group", "h-25", "overflow-auto"], [4, "ngFor", "ngForOf"], ["id", "pricelistModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "pricelistModalLabel", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body"], [1, "form-group", "row"], [1, "input-group"], ["type", "text", "id", "priceChageDate", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-search"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary"], ["class", "overimg", "style", "height: auto; width: 100%; box-shadow: 5px 9px 20px #333", 3, "src", "click", 4, "ngIf"], ["role", "status", 1, "spinner-grow", "text-warning", 2, "width", "5rem", "height", "5rem"], [1, "sr-only"], ["class", "list-group-item", 3, "click", 4, "ngIf"], [1, "list-group-item", 3, "click"], [1, "text-right"], [1, "overimg", 2, "height", "auto", "width", "100%", "box-shadow", "5px 9px 20px #333", 3, "src", "click"]], template: function PriceUpdateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-price-label", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PriceUpdateComponent_Template_app_price_label_click_3_listener() { return ctx.printTag(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PriceUpdateComponent_div_6_Template, 3, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PriceUpdateComponent_Template_button_click_9_listener() { return ctx.toglePrintAuto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PriceUpdateComponent_ng_container_16_Template, 2, 1, "ng-container", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Listas de precio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PriceUpdateComponent_Template_input_ngModelChange_30_listener($event) { return ctx.changeDate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PriceUpdateComponent_Template_button_click_32_listener() { return ctx.getPricechanges(ctx.priceChageDate); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, PriceUpdateComponent_img_37_Template, 1, 1, "img", 32);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.ConfigService.params.labelHeight, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", ctx.product);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.printAuto));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.product_ids);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.priceChageDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.capturedImage);
    } }, directives: [_main_elements_price_label_price_label_component__WEBPACK_IMPORTED_MODULE_8__["PriceLabelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: [".overimg[_ngcontent-%COMP%] {\n\tposition: absolute;\n\ttop :150px ;\n\tleft: 0;\n\tz-index: 8000;\n\n}\n.spinnerContent[_ngcontent-%COMP%] {\n\tz-index: 800;\n\ttop: 100px;\n\tleft: 100px;\n\tposition: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaWNlLXVwZGF0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxPQUFPO0NBQ1AsYUFBYTs7QUFFZDtBQUNBO0NBQ0MsWUFBWTtDQUNaLFVBQVU7Q0FDVixXQUFXO0NBQ1gsa0JBQWtCO0FBQ25CIiwiZmlsZSI6InByaWNlLXVwZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJpbWcge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcCA6MTUwcHggO1xuXHRsZWZ0OiAwO1xuXHR6LWluZGV4OiA4MDAwO1xuXG59XG4uc3Bpbm5lckNvbnRlbnQge1xuXHR6LWluZGV4OiA4MDA7XG5cdHRvcDogMTAwcHg7XG5cdGxlZnQ6IDEwMHB4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PriceUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-price-update',
                templateUrl: './price-update.component.html',
                styleUrls: ['./price-update.component.css'],
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _services_printer_service__WEBPACK_IMPORTED_MODULE_4__["PrinterService"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }, { type: _services_price_changes_service__WEBPACK_IMPORTED_MODULE_6__["PriceChangesService"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "h0YR":
/*!*************************************************************!*\
  !*** ./src/app/main/pinter-state/pinter-state.component.ts ***!
  \*************************************************************/
/*! exports provided: PinterStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinterStateComponent", function() { return PinterStateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_printer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_services/printer.service */ "XQVu");



class PinterStateComponent {
    constructor(PrinterService) {
        this.PrinterService = PrinterService;
    }
    ngOnInit() {
    }
}
PinterStateComponent.ɵfac = function PinterStateComponent_Factory(t) { return new (t || PinterStateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_printer_service__WEBPACK_IMPORTED_MODULE_1__["PrinterService"])); };
PinterStateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PinterStateComponent, selectors: [["app-pinter-state"]], decls: 1, vars: 1, template: function PinterStateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.PrinterService.selected_printer);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaW50ZXItc3RhdGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PinterStateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pinter-state',
                templateUrl: './pinter-state.component.html',
                styleUrls: ['./pinter-state.component.css']
            }]
    }], function () { return [{ type: _services_printer_service__WEBPACK_IMPORTED_MODULE_1__["PrinterService"] }]; }, null); })();


/***/ }),

/***/ "h6PX":
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class MainPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["app-main-page"]], decls: 42, vars: 0, consts: [[1, "container"], [1, "row", "text-center", "p-3"], ["routerLink", "/stock-entry/wh-selector", 1, "d-block", "p-2", "m-2", "bg-dark", "text-light", "col", "rounded", "text-center"], [1, "fa", "fa-fw", "fa-building", "fa-5x"], ["routerLink", "/picking-selector/INT", 1, "d-block", "p-2", "m-2", "bg-dark", "text-light", "col", "rounded", "text-center"], [1, "fa", "fa-fw", "fa-refresh", "fa-5x"], ["routerLink", "/picking-selector/PICK", 1, "d-block", "p-2", "m-2", "bg-dark", "text-light", "col", "rounded", "text-center"], [1, "fa", "fa-fw", "fa-cart-plus", "fa-5x"], ["routerLink", "/picking-selector/PACK", 1, "d-block", "p-2", "m-2", "bg-dark", "text-light", "col", "rounded", "text-center"], [1, "fa", "fa-fw", "fa-check-circle-o", "fa-5x"], ["routerLink", "/roadmap", 1, "d-block", "p-2", "m-2", "bg-dark", "text-light", "col", "rounded", "text-center"], [1, "fa", "fa-fw", "fa-truck", "fa-5x"], ["routerLink", "/", 1, "d-block", "p-2", "m-2", "bg-dark", "text-light", "col", "rounded", "text-center"], [1, "fa", "fa-fw", "fa-square", "fa-5x"], ["routerLink", "/print-config", 1, "d-block", "p-2", "m-2", "bg-dark", "text-light", "col", "rounded", "text-center"], [1, "fa", "fa-fw", "fa-print", "fa-5x"], ["routerLink", "/user", 1, "d-block", "bg-dark", "p-2", "m-2", "text-light", "col", "rounded", "text-center"], [1, "fa", "fa-fw", "fa-user", "fa-5x"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ingreso de mercaderia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Mov Internos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Preparaci\u00F3n de pedido");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Control de Carga");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Hoja de ruta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Control de stock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Configuraci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".my-card[_ngcontent-%COMP%] {\n  min-height: 150px;\n  width: 100%;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 4em;\n  color: white;\n}\n.text-long[_ngcontent-%COMP%] {\n  font-size: 1.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4tcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6Im1haW4tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15LWNhcmQge1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogNGVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50ZXh0LWxvbmcge1xuICBmb250LXNpemU6IDEuM2VtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "j7Qv":
/*!**********************************************************************!*\
  !*** ./src/app/main/elements/omni-barcode/omni-barcode.component.ts ***!
  \**********************************************************************/
/*! exports provided: OmniBarcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmniBarcodeComponent", function() { return OmniBarcodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/product.service */ "szdb");
/* harmony import */ var _services_intent_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/intent.service */ "diIz");
/* harmony import */ var _services_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/events.service */ "HgL4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function OmniBarcodeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.textBus);
} }
function OmniBarcodeComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OmniBarcodeComponent_form_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.formSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.searchForm);
} }
class OmniBarcodeComponent {
    //ZEBRA
    constructor(productService, formBuilder, barcodeProvider, events, changeDetectorRef) {
        this.productService = productService;
        this.formBuilder = formBuilder;
        this.barcodeProvider = barcodeProvider;
        this.events = events;
        this.changeDetectorRef = changeDetectorRef;
        this.textBus = "";
        this.sendBarcode = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //ZEBRA
        this.scans = [];
        this.scanners = [{ "SCANNER_NAME": "Please Wait...", "SCANNER_INDEX": 0, "SCANNER_CONNECTION_STATE": true }];
        this.selectedScanner = "Please Select...";
        this.selectedScannerId = -1;
        this.ean8Decoder = true; //  Model for decoder
        this.ean13Decoder = true; //  Model for decoder
        this.code39Decoder = true; //  Model for decoder
        this.code128Decoder = true; //  Model for decoder
        this.dataWedgeVersion = "Pre 6.3. Please create & configure profile manually.  See the ReadMe for more details.";
        this.availableScannersText = "Requires Datawedge 6.3+";
        this.activeProfileText = "Requires Datawedge 6.3+";
        this.commandResultText = "Messages from DataWedge will go here";
        this.uiHideDecoders = true;
        this.uiDatawedgeVersionAttention = true;
        this.uiHideSelectScanner = true;
        this.uiHideShowAvailableScanners = false;
        this.uiHideCommandMessages = true;
        this.uiHideFloatingActionButton = true;
        this.barcodeProvider.sendCommand("com.symbol.datawedge.api.GET_VERSION_INFO", "");
        ////////////////////////////
        //  EVENT HANDLING
        ////////////////////////////
        //  6.3 DataWedge APIs are available
        events.subscribe('status:dw63ApisAvailable', (isAvailable) => {
            console.log("DataWedge 6.3 APIs are available");
            //  We are able to create the profile under 6.3.  If no further version events are received, notify the user
            //  they will need to create the profile manually
            this.barcodeProvider.sendCommand("com.symbol.datawedge.api.CREATE_PROFILE", "CasaGoro");
            this.dataWedgeVersion = "6.3.  Please configure profile manually.  See the ReadMe for more details.";
            //  Although we created the profile we can only configure it with DW 6.4.
            this.barcodeProvider.sendCommand("com.symbol.datawedge.api.GET_ACTIVE_PROFILE", "");
            //  Enumerate the available scanners on the device
            this.barcodeProvider.sendCommand("com.symbol.datawedge.api.ENUMERATE_SCANNERS", "");
            //  Functionality of the FAB is available so display the button
            this.uiHideFloatingActionButton = false;
            this.changeDetectorRef.detectChanges();
        });
        //  6.4 Datawedge APIs are available
        events.subscribe('status:dw64ApisAvailable', (isAvailable) => {
            console.log("DataWedge 6.4 APIs are available");
            //  Documentation states the ability to set a profile config is only available from DW 6.4.
            //  For our purposes, this includes setting the decoders and configuring the associated app / output params of the profile.
            this.dataWedgeVersion = "6.4";
            this.uiDatawedgeVersionAttention = false;
            this.uiHideDecoders = !isAvailable;
            //  Configure the created profile (associated app and keyboard plugin)
            let profileConfig = {
                "PROFILE_NAME": "CasaGoro",
                "PROFILE_ENABLED": "true",
                "CONFIG_MODE": "UPDATE",
                "PLUGIN_CONFIG": {
                    "PLUGIN_NAME": "BARCODE",
                    "RESET_CONFIG": "true",
                    "PARAM_LIST": {}
                },
                "APP_LIST": [{
                        "PACKAGE_NAME": "com.filoquin.goro",
                        "ACTIVITY_LIST": ["*"]
                    }]
            };
            this.barcodeProvider.sendCommand("com.symbol.datawedge.api.SET_CONFIG", profileConfig);
            //  Configure the created profile (intent plugin)
            let profileConfig2 = {
                "PROFILE_NAME": "CasaGoro",
                "PROFILE_ENABLED": "true",
                "CONFIG_MODE": "UPDATE",
                "PLUGIN_CONFIG": {
                    "PLUGIN_NAME": "INTENT",
                    "RESET_CONFIG": "true",
                    "PARAM_LIST": {
                        "intent_output_enabled": "true",
                        "intent_action": "com.filoquin.goro.ACTION",
                        "intent_delivery": "2"
                    }
                }
            };
            this.barcodeProvider.sendCommand("com.symbol.datawedge.api.SET_CONFIG", profileConfig2);
            //  Give some time for the profile to settle then query its value
            setTimeout(function () {
                barcodeProvider.sendCommand("com.symbol.datawedge.api.GET_ACTIVE_PROFILE", "");
            }, 1000);
            this.changeDetectorRef.detectChanges();
        });
        //  6.5 Datawedge APIs are available
        events.subscribe('status:dw65ApisAvailable', (isAvailable) => {
            console.log("DataWedge 6.5 APIs are available");
            //  The ability to switch to a new scanner is only available from DW 6.5 onwards
            //  Reconfigure UI so the user can choose the desired scanner
            this.uiHideSelectScanner = false;
            this.uiHideShowAvailableScanners = true;
            //  6.5 also introduced messages which are received from the API to indicate success / failure
            this.uiHideCommandMessages = false;
            this.barcodeProvider.requestResult(true);
            this.dataWedgeVersion = "6.5 or higher";
            this.changeDetectorRef.detectChanges();
        });
        //  Response to our request to find out the active DW profile
        events.subscribe('data:activeProfile', (activeProfile) => {
            console.log("Active profile: " + activeProfile);
            //  Update the UI
            this.activeProfileText = activeProfile;
            this.changeDetectorRef.detectChanges();
        });
        //  The result (success / failure) of our last API call along with additional information
        events.subscribe('data:commandResult', (commandResult) => {
            this.commandResultText = commandResult;
            this.changeDetectorRef.detectChanges();
        });
        //  Response to our requet to enumerte the scanners
        events.subscribe('data:enumeratedScanners', (enumeratedScanners) => {
            //  Maintain two lists, the first for devices which support DW 6.5+ and shows a combo box to select
            //  the scanner to use.  The second will just display the available scanners in a list and be available
            //  for 6.4 and below
            this.scanners = enumeratedScanners;
            let humanReadableScannerList = "";
            enumeratedScanners.forEach((scanner, index) => {
                console.log("Scanner found: name= " + scanner.SCANNER_NAME + ", id=" + scanner.SCANNER_INDEX + ", connected=" + scanner.SCANNER_CONNECTION_STATE);
                humanReadableScannerList += scanner.SCANNER_NAME;
                if (index < enumeratedScanners.length - 1)
                    humanReadableScannerList += ", ";
            });
            this.availableScannersText = humanReadableScannerList;
            this.scanners.unshift({ "SCANNER_NAME": "Please Select...", "SCANNER_INDEX": -1, "SCANNER_CONNECTION_STATE": false });
            this.changeDetectorRef.detectChanges();
        });
        //  A scan has been received
        events.subscribe('data:scan', (data) => {
            //  Update the list of scanned barcodes
            let scannedData = data.scanData.extras["com.symbol.datawedge.data_string"];
            let scannedType = data.scanData.extras["com.symbol.datawedge.label_type"];
            this.scans.unshift({ "data": scannedData, "type": scannedType, "timeAtDecode": data.time });
            //  On older devices, if a scan is received we can assume the profile was correctly configured manually
            //  so remove the yellow highlight.
            this.uiDatawedgeVersionAttention = false;
            //this.changeDetectorRef.detectChanges();
        });
    }
    handleKeyboardpressEvent(event) {
        if (this.inputMethod == "form" && event.keyCode == 13) {
            this.formSearch();
        }
        if (this.inputMethod != "textBus") {
            return;
        }
        if (event.keyCode == 13) {
            this.emitBarcode(this.textBus);
        }
        else {
            this.textBus += event.key;
            event.stopPropagation();
        }
    }
    handleKeyboardEvent(event) {
        if (this.inputMethod != "textBus") {
            return;
        }
        if (event.keyCode == 27) {
            this.textBus = "";
        }
        else if (event.keyCode == 8) {
            //this.textBus = this.textBus.substring(0, this.textBus.length - 1);
        }
    }
    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            search: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    emitBarcode(code) {
    }
    formSearch() {
        const search = this.searchForm.controls.search.value;
        this.emitBarcode(search);
        this.searchForm.controls.search.patchValue("");
    }
}
OmniBarcodeComponent.ɵfac = function OmniBarcodeComponent_Factory(t) { return new (t || OmniBarcodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_intent_service__WEBPACK_IMPORTED_MODULE_3__["BarcodeProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_events_service__WEBPACK_IMPORTED_MODULE_4__["Events"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
OmniBarcodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OmniBarcodeComponent, selectors: [["app-omni-barcode"]], hostBindings: function OmniBarcodeComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function OmniBarcodeComponent_keypress_HostBindingHandler($event) { return ctx.handleKeyboardpressEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("keydown", function OmniBarcodeComponent_keydown_HostBindingHandler($event) { return ctx.handleKeyboardEvent($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { inputMethod: "inputMethod" }, outputs: { sendBarcode: "sendBarcode" }, decls: 2, vars: 2, consts: [["class", "text-center", 4, "ngIf"], [3, "formGroup", 4, "ngIf"], [1, "text-center"], [3, "formGroup"], [1, "input-group", "input-group-lg"], ["type", "text", "autofocus", "", "id", "bus", "formControlName", "search", "aria-label", "Large", "aria-describedby", "inputGroup-sizing-sm", 1, "form-control"], ["search", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "fa", "fa-search"]], template: function OmniBarcodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OmniBarcodeComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OmniBarcodeComponent_form_1_Template, 7, 1, "form", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputMethod == "textBus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputMethod == "form");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbW5pLWJhcmNvZGUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OmniBarcodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-omni-barcode",
                templateUrl: "./omni-barcode.component.html",
                styleUrls: ["./omni-barcode.component.css"],
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_intent_service__WEBPACK_IMPORTED_MODULE_3__["BarcodeProvider"] }, { type: _services_events_service__WEBPACK_IMPORTED_MODULE_4__["Events"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { sendBarcode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], inputMethod: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], handleKeyboardpressEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["document:keypress", ["$event"]]
        }], handleKeyboardEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["document:keydown", ["$event"]]
        }] }); })();


/***/ }),

/***/ "konU":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/ba/roadmap-item-picking/roadmap-item-picking.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RoadmapItemPickingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapItemPickingComponent", function() { return RoadmapItemPickingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/product.service */ "szdb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_honey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/honey.service */ "bwkT");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/config.service */ "rkFe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_services/stock.service */ "CFEw");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_services/alert.service */ "f5O9");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _main_comunes_read_code_read_code_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../main/comunes/read-code/read-code.component */ "5aEy");
/* harmony import */ var _main_comunes_input_cant_keyboard_button_input_cant_keyboard_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../main/comunes/input-cant-keyboard-button/input-cant-keyboard-button.component */ "zacy");













const _c0 = ["search"];
const _c1 = ["moveLineModal"];
function RoadmapItemPickingComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoadmapItemPickingComponent_read_code_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "read-code", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchByCode", function RoadmapItemPickingComponent_read_code_8_Template_read_code_searchByCode_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.searchByCode($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputMethod", ctx_r1.inputMethod);
} }
function RoadmapItemPickingComponent_strong_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ":: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoadmapItemPickingComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_span_19_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const filter_r11 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.removeFilter(filter_r11.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filter_r11.label, " ");
} }
function RoadmapItemPickingComponent_div_20_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r15.picking["note"]);
} }
function RoadmapItemPickingComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RoadmapItemPickingComponent_div_20_div_8_Template, 2, 1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r5.picking["name"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Cliente: ", ctx_r5.picking["partner_id"][1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("origen ", ctx_r5.picking["origin"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.picking["note"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.picking["computed_roadmap_id"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.picking["state"]);
} }
const _c2 = function (a2, a3, a4) { return { "text-bold": true, "text-white": true, "bg-danger": a2, "bg-success": a3, "bg-warning": a4 }; };
const _c3 = function () { return { btn: true }; };
function RoadmapItemPickingComponent_ng_container_22_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_ng_container_22_li_1_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.openMoveLineModal(i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "small", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Scan");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Res");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_ng_container_22_li_1_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.selectPiking(item_r16["picking_id"]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_ng_container_22_li_1_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.print(item_r16); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_ng_container_22_li_1_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const i_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.openMoveLineModal(i_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](8, _c2, item_r16["reserved_availability"] > item_r16["quantity_done"], item_r16["reserved_availability"] == item_r16["quantity_done"], item_r16["reserved_availability"] < item_r16["quantity_done"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r16["quantity_done"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r16["reserved_availability"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r16["product_id"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" remito: ", item_r16["picking_id"][1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Origen: ", item_r16["origin"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));
} }
function RoadmapItemPickingComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoadmapItemPickingComponent_ng_container_22_li_1_Template, 24, 14, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r16["reserved_availability"] > item_r16["quantity_done"] || ctx_r6.showOk);
} }
function RoadmapItemPickingComponent_ng_template_31_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Remito: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r31.moves[ctx_r31.active_index]["picking_id"][1]);
} }
function RoadmapItemPickingComponent_ng_template_31_div_0_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Codigo de barra: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r32.moves[ctx_r32.active_index]["barcode"]);
} }
function RoadmapItemPickingComponent_ng_template_31_div_0_button_54_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_ng_template_31_div_0_button_54_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r34.parcialMoveProducts(ctx_r34.active_index); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Movimiento parcial de productos ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c4 = function (a2) { return { btn: true, "btn-dark": true, active: a2 }; };
const _c5 = function () { return { btn: true, "btn-danger": true }; };
function RoadmapItemPickingComponent_ng_template_31_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Escaneados");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RoadmapItemPickingComponent_ng_template_31_div_0_div_10_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Unidad: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Real/Total: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "/ ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "( ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Origen: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RoadmapItemPickingComponent_ng_template_31_div_0_div_30_Template, 4, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Codigo interno: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_ng_template_31_div_0_Template_button_click_36_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r36.qtyDir = -1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_ng_template_31_div_0_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r38.qtyDir = 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_ng_template_31_div_0_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.addScannedQuantity(ctx_r39.active_index, 1 * ctx_r39.qtyDir); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_ng_template_31_div_0_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.addScannedQuantity(ctx_r40.active_index, 5 * ctx_r40.qtyDir); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " 5 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_ng_template_31_div_0_Template_button_click_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.addScannedQuantity(ctx_r41.active_index, 10 * ctx_r41.qtyDir); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " 10 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_ng_template_31_div_0_Template_button_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.addScannedQuantity(ctx_r42.active_index, 50 * ctx_r42.qtyDir); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " 50 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_ng_template_31_div_0_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r43.addScannedQuantity(ctx_r43.active_index, 100 * ctx_r43.qtyDir); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " 100 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, RoadmapItemPickingComponent_ng_template_31_div_0_button_54_Template, 2, 0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input-cant-keyboard-button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("evento", function RoadmapItemPickingComponent_ng_template_31_div_0_Template_input_cant_keyboard_button_evento_56_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.setCantidad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_ng_template_31_div_0_Template_button_click_58_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const modal_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; return modal_r29.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r30.moves[ctx_r30.active_index]["product_id"][1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r30.moves[ctx_r30.active_index]["scanned_qty"], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.moves[ctx_r30.active_index]["picking_id"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.moves[ctx_r30.active_index]["product_uom"][1]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.moves[ctx_r30.active_index]["quantity_done"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.moves[ctx_r30.active_index]["reserved_availability"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.moves[ctx_r30.active_index]["product_uom_qty"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.moves[ctx_r30.active_index]["origin"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.moves[ctx_r30.active_index]["barcode"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r30.moves[ctx_r30.active_index]["default_code"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c4, ctx_r30.qtyDir == -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c4, ctx_r30.qtyDir == 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r30.moves[ctx_r30.active_index]["scanned_qty"] && ctx_r30.moves[ctx_r30.active_index]["quantity_done"] != ctx_r30.moves[ctx_r30.active_index]["product_uom_qty"]);
} }
function RoadmapItemPickingComponent_ng_template_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RoadmapItemPickingComponent_ng_template_31_div_0_Template, 60, 27, "div", 43);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.active_index !== undefined);
} }
const _c6 = function (a1, a2) { return { fa: true, "fa-eye": a1, "fa-eye-slash": a2, "fa-2x": true }; };
const _c7 = function (a2) { return { btn: true, "btn-info": true, active: a2 }; };
const _c8 = function () { return { btn: true, "btn-info": true }; };
class RoadmapItemPickingComponent {
    constructor(productService, formBuilder, HoneyService, changeDetectorRef, ConfigService, route, stockService, modalService, Router, alertService) {
        this.productService = productService;
        this.formBuilder = formBuilder;
        this.HoneyService = HoneyService;
        this.changeDetectorRef = changeDetectorRef;
        this.ConfigService = ConfigService;
        this.route = route;
        this.stockService = stockService;
        this.modalService = modalService;
        this.Router = Router;
        this.alertService = alertService;
        this.showOk = true;
        this.active_index = undefined;
        this.addQty = 1;
        this.qtyDir = 1;
        this.moves = [];
        this.textBus = '';
        this.keyboardDisable = true;
        this.intefaceBlocked = false;
        this.isCollapsed = true;
        this.inputMethod = 'textBus';
        this.spinner = true;
        this.log = '';
        this.showLog = false;
        this.filters = [];
        this.showReadCode = true;
        /*  */
    }
    ngOnInit() {
        this.picking_id = Number(this.route.snapshot.paramMap.get('picking_id'));
        this.getAssignedMoves();
        this.getPicking(Number(this.route.snapshot.paramMap.get('picking_id')));
    }
    togleShowOk() {
        if (this.showOk) {
            this.showOk = false;
        }
        else {
            this.showOk = true;
        }
    }
    refresh() {
        this.spinner = true;
        this.picking_id = Number(this.route.snapshot.paramMap.get('picking_id'));
        this.getAssignedMoves();
    }
    removeFilter(i) {
        this.filters.splice(i, 1);
        //TODO: VER COMO USAR FILTERS PARA FILTRAR
        this.spinner = true;
        this.getAssignedMoves();
    }
    selectPiking(picking_id) {
        this.spinner = true;
        const element = {
            name: 'picking_id',
            label: picking_id[1],
            value: picking_id[0],
        };
        const exist = this.filters.find((e) => e.value === element.value && e.name === element.name);
        if (!exist) {
            this.filters.push(element);
            this.op = 'picking';
            this.picking_id = picking_id[0];
            this.getAssignedMoves();
        }
    }
    getPicking(picking_id) {
        console.log(picking_id);
        this.stockService.getPicking([['id', '=', picking_id]]).subscribe((res) => {
            console.log(res);
            this.picking = res['records'][0];
        });
    }
    getAssignedMoves() {
        let leaf = [];
        leaf = [
            ['state', 'in', ['assigned', 'draft', 'partially_available']],
            ['picking_id', '=', this.picking_id],
        ];
        if (leaf.length) {
            this.stockService.getMoves(leaf, 'outcoming').subscribe((res) => {
                res['records'].forEach(function (part, index, theArray) { });
                this.moves = res['records'];
                this.spinner = false;
            });
        }
    }
    formSearch() {
        const search = this.searchForm.controls.search.value;
        this.searchByCode(search);
        this.searchForm.controls.search.patchValue('');
        this.searchElement.nativeElement.focus();
    }
    searchByCode(code) {
        this.changeDetectorRef.detectChanges();
        if (code.length < 2) {
            return;
        }
        var line = this.moves.findIndex(function (item) {
            let codeLow = code.toLowerCase();
            return ((item.default_code.toLowerCase().indexOf(codeLow) !== -1 ||
                item.product_id[1].toLowerCase().indexOf(codeLow) !== -1 ||
                item.barcode == code) &&
                //|| item.picking_id[1].toLowerCase().indexOf(codeLow) !== -1
                item.quantity_done < item.reserved_availability);
        });
        this.textBus = '';
        if (line == -1) {
            this.alertService.showAlert(code + ' NO diponible');
        }
        else {
            let openModal = this.modalService.hasOpenModals();
            this.active_index = line;
            this.addScannedQuantity(line, 1);
            this.addQty = 1;
            this.qtyDir = 1;
            this.changeDetectorRef.detectChanges();
            if (!openModal) {
                this.modalService.open(this.moveLineModal).result.then((result) => {
                    this.active_index = undefined;
                    this.changeDetectorRef.detectChanges();
                });
            }
        }
    }
    openMoveLineModal(line) {
        this.active_index = line;
        this.addQty = 1;
        this.qtyDir = 1;
        this.modalService.open(this.moveLineModal).result.then((result) => {
            this.active_index = undefined;
        });
    }
    removeToLocalStorage(storage, move) {
        this.stockService.deleteQuantity(storage, move.id);
    }
    addToLocalStorage(storage, move, qty) {
        this.stockService.setQuantity(storage, move.id, qty);
    }
    addScannedQuantity(line, qty = 1) {
        this.changeDetectorRef.detectChanges();
        if (this.moves[line]['scanned_qty'] + qty < 1) {
            this.moves[line]['quantity_done'] =
                this.moves[line]['quantity_done'] - this.moves[line]['scanned_qty'];
            this.moves[line]['scanned_qty'] = 0;
            return;
        }
        this.moves[line]['scanned_qty'] += qty;
        this.moves[line]['quantity_done'] += qty;
        // TODO: LocalSOTRAGE -> this.moves[line]['scanned_qty']
        this.addToLocalStorage('incoming', this.moves[line], qty);
        if (qty > 0 &&
            this.moves[line]['quantity_done'] >
                this.moves[line]['reserved_availability']) {
            let message = 'Esta por confirmar mas items de los esperados ¿esta seguro?';
            if (!window.confirm(message)) {
                this.moves[line]['scanned_qty'] -= qty;
                this.moves[line]['quantity_done'] -= qty;
                this.addToLocalStorage('incoming', this.moves[line], -qty);
                return;
            }
            this.removeToLocalStorage('incoming', this.moves[line]);
        }
        let line_id = this.moves[line];
        this.changeDetectorRef.detectChanges();
        if (line_id.quantity_done == line_id.reserved_availability) {
            //if (line_id.scanned_qty == 5){
            this.spinner = true;
            this.stockService
                .move_products('incoming', this.moves[line], this.moves[line]['scanned_qty'], line)
                .subscribe((res) => {
                this.removeToLocalStorage('incoming', this.moves[line]);
                this.moves[line]['scanned_qty'] = 0;
                this.moves[line]['move_line_ids'] = [res];
                // delete this.moves[line];
                this.getAssignedMoves();
                this.modalService.dismissAll();
                this.check_pick_ok(this.active_index);
                this.active_index = undefined;
            });
        }
    }
    setCantidad(objectResult) {
        this.showReadCode = objectResult.showReadCode;
        objectResult.cantidad &&
            this.addScannedQuantity(this.active_index, parseFloat(objectResult.cantidad));
    }
    check_pick_ok(line) {
        let picking_id = this.moves[line]['picking_id'][0];
        let no_ok = this.moves.filter(function (el) {
            if (el['picking_id'][0] == picking_id &&
                el['quantity_done'] < el['reserved_availability']) {
                return true;
            }
            else {
                return false;
            }
        });
        if (no_ok.length == 0) {
            this.spinner = true;
            this.stockService.button_validate(picking_id).subscribe((res) => {
                if (res.name) {
                    this.alertService.showAlert(res.name);
                }
                this.getAssignedMoves();
            });
        }
    }
    parcialMoveProducts(line) {
        if (this.moves[line]['scanned_qty'] > 0) {
            this.spinner = true;
            this.stockService
                .move_products('incoming', this.moves[line], this.moves[line]['scanned_qty'], line)
                .subscribe((res) => {
                this.moves[line]['scanned_qty'] = 0;
                this.moves[line]['move_line_ids'] = [res];
                // delete this.moves[line];
                this.spinner = false;
                this.getAssignedMoves();
                this.modalService.dismissAll();
                this.removeToLocalStorage('incoming', this.moves[line]);
                this.active_index = undefined;
            });
        }
    }
    print(item) {
        this.Router.navigateByUrl('/zpl/' + item['product_id'][0] + '/' + item['product_uom_qty']);
    }
    dateRange(value) {
        const index = this.filters.findIndex((e) => e.name == 'date_expected');
        if (index >= 0) {
            this.filters.splice(index, 1);
        }
        if (value.fromDate && value.toDate) {
            const fromDate = value.fromDate.day +
                '/' +
                value.fromDate.month +
                '/' +
                value.fromDate.year;
            const toDate = value.toDate.day + '/' + value.toDate.month + '/' + value.toDate.year;
            this.filters.push({
                label: fromDate + ' a ' + toDate,
                value: {
                    fromDate: this.parseDate(value.fromDate),
                    toDate: this.parseDate(value.toDate),
                },
                name: 'date_expected',
            });
        }
        else if (value.fromDate) {
            const fromDate = value.fromDate.day +
                '/' +
                value.fromDate.month +
                '/' +
                value.fromDate.year;
            this.filters.push({
                label: fromDate,
                value: { fromDate: this.parseDate(value.fromDate) },
                name: 'date_expected',
            });
        }
        this.spinner = true;
        this.getAssignedMoves();
    }
    parseDate(date) {
        const zeroPad = (num, places) => String(num).padStart(places, '0');
        return (date.year + '-' + zeroPad(date.month, 2) + '-' + zeroPad(date.day, 2));
    }
    parseDateObject(date) {
        const zeroPad = (num, places) => String(num).padStart(places, '0');
        return (date.getFullYear() +
            '-' +
            zeroPad(date.getMonth() + 1, 2) +
            '-' +
            zeroPad(date.getDate(), 2));
    }
}
RoadmapItemPickingComponent.ɵfac = function RoadmapItemPickingComponent_Factory(t) { return new (t || RoadmapItemPickingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_honey_service__WEBPACK_IMPORTED_MODULE_3__["HoneyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_6__["StockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"])); };
RoadmapItemPickingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoadmapItemPickingComponent, selectors: [["app-roadmap-item-picking"]], viewQuery: function RoadmapItemPickingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.moveLineModal = _t.first);
    } }, decls: 33, vars: 20, consts: [[1, "text-center", "fixed-top", "spinnerContent"], ["class", "spinner-grow text-warning", "style", "width: 5rem; height: 5rem", "role", "status", 4, "ngIf"], [1, "row", "text-center", "mt-2"], [1, "col-12"], [1, "row"], [1, "col-2"], ["type", "button", "aria-controls", "collapseExample", 1, "btn", "btn-primary", "shadow", 3, "click"], [1, "fa", "fa-filter"], ["class", "col-10", 3, "inputMethod", "searchByCode", 4, "ngIf"], [3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "pb-0"], [1, "row", "pb-0"], ["type", "button", 1, "btn", "btn-light", "shadow", 3, "click"], [3, "ngClass"], [1, "col-8"], [1, "text-left"], [4, "ngIf"], ["class", "badge badge-primary", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group"], [4, "ngFor", "ngForOf"], [1, "row", "text-center"], ["role", "group", 1, "btn-group", "btn-group-lg", "fixed-bottom"], ["type", "button", 3, "ngClass", "click"], [1, "fa", "fa-font"], [1, "fa", "fa-barcode"], [1, "fa", "fa-refresh"], ["moveLineModal", ""], ["role", "status", 1, "spinner-grow", "text-warning", 2, "width", "5rem", "height", "5rem"], [1, "sr-only"], [1, "col-10", 3, "inputMethod", "searchByCode"], [1, "badge", "badge-primary", 3, "click"], ["class", "text-left", 4, "ngIf"], ["class", "text-left list-group-item", 4, "ngIf"], [1, "text-left", "list-group-item"], [1, "text-center", "col-2", "pt-0", "pb-0", "pl-0", "pr-0"], [3, "ngClass", "click"], [1, "text-bold"], [1, ""], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "col-2", "text-left"], [1, "fa", "fa-print", "fa-lg"], [1, "fa", "fa-list", "fa-lg"], ["class", "modal-dialog", "role", "document", 4, "ngIf"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], [1, "modal-body"], [1, "bg-danger", "text-center", "text-white", "mb-0"], [1, "bg-dark", "text-center", "text-white", "mt-0"], ["role", "group", 1, "btn-group", "w-100"], [1, "fa", "fa-minus"], [1, "fa", "fa-plus"], ["role", "group", 1, "btn-group", "btn-group-lg", "w-100"], [1, "col-6"], ["type", "button", "class", "btn btn-block btn-success btn-lg w-100", 3, "click", 4, "ngIf"], [3, "evento"], [1, "modal-footer"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-block", "btn-success", "btn-lg", "w-100", 3, "click"]], template: function RoadmapItemPickingComponent_Template(rf, ctx) { if (rf & 1) {
        const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RoadmapItemPickingComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return _r2.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RoadmapItemPickingComponent_read_code_8_Template, 1, 1, "read-code", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbCollapseChange", function RoadmapItemPickingComponent_Template_div_ngbCollapseChange_9_listener($event) { return ctx.isCollapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_Template_button_click_14_listener() { return ctx.togleShowOk(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RoadmapItemPickingComponent_strong_18_Template, 2, 0, "strong", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, RoadmapItemPickingComponent_span_19_Template, 2, 1, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, RoadmapItemPickingComponent_div_20_Template, 13, 6, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RoadmapItemPickingComponent_ng_container_22_Template, 2, 1, "ng-container", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_Template_button_click_25_listener() { return ctx.inputMethod = "form"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_Template_button_click_27_listener() { return ctx.inputMethod = "textBus"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapItemPickingComponent_Template_button_click_29_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RoadmapItemPickingComponent_ng_template_31_Template, 1, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showReadCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](12, _c6, ctx.showOk, !ctx.showOk));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filters.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.picking);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.moves);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c7, ctx.inputMethod == "form"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c7, ctx.inputMethod == "textBus"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c8));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapse"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _main_comunes_read_code_read_code_component__WEBPACK_IMPORTED_MODULE_10__["ReadCodeComponent"], _main_comunes_input_cant_keyboard_button_input_cant_keyboard_button_component__WEBPACK_IMPORTED_MODULE_11__["InputCantKeyboardButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2FkbWFwLWl0ZW0tcGlja2luZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoadmapItemPickingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roadmap-item-picking',
                templateUrl: './roadmap-item-picking.component.html',
                styleUrls: ['./roadmap-item-picking.component.css'],
            }]
    }], function () { return [{ type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_honey_service__WEBPACK_IMPORTED_MODULE_3__["HoneyService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _services_stock_service__WEBPACK_IMPORTED_MODULE_6__["StockService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"] }]; }, { searchElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['search']
        }], moveLineModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['moveLineModal']
        }] }); })();


/***/ }),

/***/ "nPE4":
/*!*****************************************************!*\
  !*** ./src/app/main/dasboard/dasboard.component.ts ***!
  \*****************************************************/
/*! exports provided: DasboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DasboardComponent", function() { return DasboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../menu/menu.component */ "wRLD");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class DasboardComponent {
    constructor() { }
    ngOnInit() {
    }
}
DasboardComponent.ɵfac = function DasboardComponent_Factory(t) { return new (t || DasboardComponent)(); };
DasboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DasboardComponent, selectors: [["app-dasboard"]], decls: 5, vars: 0, consts: [[1, "bg-primary"], [1, "container", "bg-white", "rounded", "bg-gradient"], [1, "buttonSpacer"]], template: function DasboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".print-state[_ngcontent-%COMP%]{\n\theight: 20px;\n\tposition: fixed;\n\tz-index: 4000;\n\tbottom: 0;\n}\n.buttonSpacer[_ngcontent-%COMP%]{\n\theight: 80px;\n    background-image: linear-gradient(180deg, rgba(#FFF, 1) 5px, rgba(#FDBE00, .001) 80px );\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2JvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLGFBQWE7Q0FDYixTQUFTO0FBQ1Y7QUFDQTtDQUNDLFlBQVk7SUFDVCx1RkFBdUY7QUFDM0YiLCJmaWxlIjoiZGFzYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmludC1zdGF0ZXtcblx0aGVpZ2h0OiAyMHB4O1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHotaW5kZXg6IDQwMDA7XG5cdGJvdHRvbTogMDtcbn1cbi5idXR0b25TcGFjZXJ7XG5cdGhlaWdodDogODBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKCNGRkYsIDEpIDVweCwgcmdiYSgjRkRCRTAwLCAuMDAxKSA4MHB4ICk7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DasboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dasboard',
                templateUrl: './dasboard.component.html',
                styleUrls: ['./dasboard.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "p3Fh":
/*!****************************************!*\
  !*** ./src/app/_helpers/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/odoo-rpc.service */ "g35q");





class AuthGuard {
    constructor(router, odooRPC) {
        this.router = router;
        this.odooRPC = odooRPC;
    }
    canActivate(next, state) {
        const session_act = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.odooRPC.getSessionInfo().then((res) => {
                observer.next(true);
            }).catch((err) => {
                observer.next(false);
                observer.complete();
                this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
            });
        });
        return session_act;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_3__["OdooRPCService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_3__["OdooRPCService"] }]; }, null); })();


/***/ }),

/***/ "rkFe":
/*!*********************************************!*\
  !*** ./src/app/_services/config.service.ts ***!
  \*********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ConfigService {
    constructor() {
        this.default_params = JSON.stringify({
            scanMethod: 'textBus',
            showLog: false,
            printAuto: false,
            printAutoDelay: 300,
            labelWidth: 300,
            labelHeight: 250,
            PrinterName: '',
            priceChageDate: "2021-06-24 00:00:00",
            printUrl: '',
        });
        this.loadConfig();
    }
    loadConfig() {
        this.params = JSON.parse(localStorage.getItem('appConfig') || this.default_params);
    }
    saveParam(param, value) {
        this.params[param] = value;
        localStorage.setItem('appConfig', JSON.stringify(this.params));
    }
    saveConfig(params) {
        localStorage.setItem('appConfig', JSON.stringify(params));
        this.params = params;
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sZ45":
/*!**********************************************!*\
  !*** ./src/app/_services/roadmap.service.ts ***!
  \**********************************************/
/*! exports provided: RoadmapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapService", function() { return RoadmapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _odoo_rpc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./odoo-rpc.service */ "g35q");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alert.service */ "f5O9");





class RoadmapService {
    constructor(odooRPC, alertService) {
        this.odooRPC = odooRPC;
        this.alertService = alertService;
    }
    getRoadmaps(leaf = [['state', 'not in', ['done']]]) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.odooRPC
                .searchRead('stock.delivery.roadmap', leaf, [
                'display_name',
                'state',
                'preparation_date',
                'name',
                'number',
                'driver_user_id',
                'assistant_ids',
                'vehicle_id',
                'picking_ids',
            ], 0, 0)
                .then((res) => {
                observer.next(res);
                observer.complete();
            })
                .catch((err) => {
                this.alertService.showAlert(err);
            });
        });
        return transaction$;
    }
    updatePickings(pickings) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.odooRPC
                .call('stock.picking', 'write', [pickings[0].id, { roadmap_sequence: pickings[0].roadmap_sequence }], {})
                .then(() => {
                this.odooRPC
                    .call('stock.picking', 'write', [
                    pickings[1].id,
                    { roadmap_sequence: pickings[1].roadmap_sequence },
                ], {})
                    .then(() => {
                    observer.next(true);
                    observer.complete();
                });
            });
        });
        return transaction$;
    }
    getRoadmap(id) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            var prlsIds = [];
            this.odooRPC
                .read('stock.delivery.roadmap', [id], [
                'display_name',
                'state',
                'preparation_date',
                'name',
                'number',
                'driver_user_id',
                'assistant_ids',
                'vehicle_id',
                'picking_ids',
            ])
                .then((res) => {
                this.odooRPC
                    .searchRead('stock.picking', [['id', 'in', res[0]['picking_ids']]], [
                    'partner_id',
                    'name',
                    'note',
                    'scheduled_date',
                    'origin',
                    'weight',
                    'state',
                    'geo_point',
                    'roadmap_sequence',
                ], 0, 0, {}, 'roadmap_sequence asc')
                    .then((pickings) => {
                    console.log(pickings);
                    res[0]['pickings'] = pickings.records;
                    var self = this;
                    let partners_ids = pickings.records.map((e) => e.partner_id[0]);
                    let partner_dict = {};
                    pickings.records.map(function (p) {
                        partner_dict[p['partner_id'][0]] = p;
                    });
                    this.odooRPC
                        .read('res.partner', partners_ids, [
                        'phone',
                        'mobile',
                        'street',
                        'street2',
                        'city',
                        'state_id',
                    ]).then((partners) => {
                        partners.forEach((element, index) => {
                            partner_dict[element.id] = element;
                            pickings.records[index].partner =
                                partner_dict[pickings.records[index].partner_id[0]];
                        });
                        // console.log(res[0]);
                        observer.next(res[0]);
                        observer.complete();
                    });
                    //console.log('picking', partner_dict);
                });
            })
                .catch((err) => {
                this.alertService.showAlert(err);
            });
        });
        return transaction$;
    }
}
RoadmapService.ɵfac = function RoadmapService_Factory(t) { return new (t || RoadmapService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_2__["OdooRPCService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
RoadmapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoadmapService, factory: RoadmapService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoadmapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _odoo_rpc_service__WEBPACK_IMPORTED_MODULE_2__["OdooRPCService"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "szdb":
/*!**********************************************!*\
  !*** ./src/app/_services/product.service.ts ***!
  \**********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _odoo_rpc_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./odoo-rpc.service */ "g35q");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alert.service */ "f5O9");





class ProductService {
    constructor(odooRPC, alertService) {
        this.odooRPC = odooRPC;
        this.alertService = alertService;
    }
    readProduct(productId) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            const leaf = [['id', '=', productId]];
            this.odooRPC
                .searchRead('product.product', leaf, ['name', 'display_name', 'default_code', 'description', 'barcode'], 1, 0, { lang: 'es_AR', display_default_code: false })
                .then((res) => {
                observer.next(res);
                observer.complete();
            })
                .catch((err) => {
                this.alertService.showAlert(err);
            });
        });
        return transaction$;
    }
    searchByCode(code) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            const leaf = ['|', ['default_code', '=', code], ['barcode', '=', code]];
            this.odooRPC
                .searchRead('product.product', leaf, ['name', 'display_name', 'default_code', 'description', 'barcode'], 1, 0, { lang: 'es_AR', display_default_code: false })
                .then((res) => {
                observer.next(res);
                observer.complete();
            })
                .catch((err) => {
                this.alertService.showAlert(err);
            });
        });
        return transaction$;
    }
    load_price(product_id, pricelist_ids) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            var prlsIds = [];
            for (let list in pricelist_ids) {
                prlsIds.push(pricelist_ids[list].id);
            }
            this.odooRPC
                .call('product.pricelist', 'price_get', [prlsIds, product_id, 1], {})
                .then((res) => {
                for (let list in pricelist_ids) {
                    observer.next({
                        id: pricelist_ids[list].id,
                        name: pricelist_ids[list].name,
                        price: res[pricelist_ids[list].id],
                    });
                }
                observer.complete();
            })
                .catch((err) => {
                this.alertService.showAlert(err);
            });
        });
        return transaction$;
    }
    get_stock(product_id) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.odooRPC
                .searchRead('stock.availability', [['product_id', '=', product_id]], ['virtual_available', 'warehouse_id'])
                .then((res) => {
                observer.next(res);
                observer.complete();
            })
                .catch((err) => {
                this.alertService.showAlert(err);
            });
        });
        return transaction$;
    }
    get_pricelists() {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.odooRPC
                .searchRead('product.pricelist', [['selectable', '=', true]], ['name'])
                .then((res) => {
                observer.next(res);
                observer.complete();
            })
                .catch((err) => {
                this.alertService.showAlert(err);
            });
        });
        return transaction$;
    }
    searchByTmplId(id) {
        const transaction$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            this.odooRPC
                .searchRead('product.product', [['product_tmpl_id', '=', id]], ['name', 'display_name', 'default_code', 'description', 'barcode'], 1, 0, { lang: 'es_AR', display_default_code: false })
                .then((res) => {
                observer.next(res);
                observer.complete();
            })
                .catch((err) => {
                this.alertService.showAlert(err);
            });
        });
        return transaction$;
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_odoo_rpc_service__WEBPACK_IMPORTED_MODULE_2__["OdooRPCService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _odoo_rpc_service__WEBPACK_IMPORTED_MODULE_2__["OdooRPCService"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "ts6Q":
/*!******************************************************!*\
  !*** ./src/app/pages/zpl-file/zpl-file.component.ts ***!
  \******************************************************/
/*! exports provided: ZplFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZplFileComponent", function() { return ZplFileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/product.service */ "szdb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/config.service */ "rkFe");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/alert.service */ "f5O9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");









function ZplFileComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ZplFileComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ZplFileComponent_div_3_Template_input_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.createZPL(); })("ngModelChange", function ZplFileComponent_div_3_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.qty = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZplFileComponent_div_3_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.sendZPL(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Imprimir Directo");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ZplFileComponent_div_3_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "volver");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.product["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.product["default_code"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx_r1.printUrl, "\n");
} }
class ZplFileComponent {
    constructor(route, router, ProductService, sanitizer, location, ConfigService, alertService) {
        this.route = route;
        this.router = router;
        this.ProductService = ProductService;
        this.sanitizer = sanitizer;
        this.location = location;
        this.ConfigService = ConfigService;
        this.alertService = alertService;
        this.qty = 3;
        this.product = {};
        this.spinner = true;
    }
    ngOnInit() {
        this.printUrl = this.ConfigService.params.printUrl;
        this.product_id = this.route['params']['value']['product_id'];
        this.qty = Number(this.route['params']['value']['qty']);
        this.ProductService.readProduct(this.product_id).subscribe((res) => {
            this.product = res['records'][0];
            this.spinner = false;
            this.createZPL();
        });
    }
    createZPL() {
        this.spinner = true;
        let data = '';
        for (let i = 0; i < this.qty; i++) {
            data =
                data +
                    '^XA ~TA000 ~JSN ^LT0 ^MNW ^MTT ^PON ^PMN ^LH0,0 ^JMA ^PR8,8 ~SD15 ^JUS ^LRN ^CI27 ^PA0,1,1,0 ^XZ ^XA ^MMT ^PW609 ^LL203 ^LS0 ^FT11,36^A0N,28,28^FH^CI28^FD' +
                    this.product['name'] +
                    '^FS^CI27 ^BY3,3,81^FT36,142^BCN,,Y,N  ^FH^FD>:' +
                    this.product['default_code'] +
                    '^FS^PQ1,0,1,Y ^XZ ';
        }
        const blob = new Blob([data], { type: 'application/octet-stream' });
        this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
        this.spinner = false;
        // https://esstudio.site/2019/02/16/downloading-saving-and-opening-files-with-cordova.html
        //let storageLocation = cordova.file.externalDataDirectory;
    }
    saveZPL() {
        this.spinner = true;
        let data = '';
        for (let i = 0; i < this.qty; i++) {
            data =
                data +
                    '^XA ~TA000 ~JSN ^LT0 ^MNW ^MTT ^PON ^PMN ^LH0,0 ^JMA ^PR8,8 ~SD15 ^JUS ^LRN ^CI27 ^PA0,1,1,0 ^XZ ^XA ^MMT ^PW609 ^LL203 ^LS0 ^FT11,36^A0N,28,28^FH^CI28^FD' +
                    this.product['name'] +
                    '^FS^CI27 ^BY3,3,81^FT36,142^BCN,,Y,N  ^FH^FD>:' +
                    this.product['default_code'] +
                    '^FS^PQ1,0,1,Y ^XZ ';
        }
        // https://esstudio.site/2019/02/16/downloading-saving-and-opening-files-with-cordova.html
        var blob = new Blob([data], {
            type: 'text/plain',
        });
        //let storageLocation = cordova.file.externalDataDirectory;
        //var folderPath = storageLocation;
        this.spinner = false;
    }
    sendZPL() {
        this.spinner = true;
        let self = this;
        let data = '';
        for (let i = 0; i < this.qty; i++) {
            data =
                data +
                    '^XA ~TA000 ~JSN ^LT0 ^MNW ^MTT ^PON ^PMN ^LH0,0 ^JMA ^PR8,8 ~SD15 ^JUS ^LRN ^CI27 ^PA0,1,1,0 ^XZ ^XA ^MMT ^PW609 ^LL203 ^LS0 ^FT11,36^A0N,28,28^FH^CI28^FD' +
                    this.product['name'] +
                    '^FS^CI27 ^BY3,3,81^FT36,142^BCN,,Y,N  ^FH^FD>:' +
                    this.product['default_code'] +
                    '^FS^PQ1,0,1,Y ^XZ ';
        }
        var request = new XMLHttpRequest();
        request.ontimeout = function () {
            self.spinner = false;
            self.alertService.showAlert('Timeout');
        };
        request.onerror = function (err) {
            self.spinner = false;
            self.alertService.showAlert(err);
        };
        request.onreadystatechange = function () {
            if (request.readyState == 4) {
                if (request.status == 200) {
                    self.spinner = false;
                    self.back();
                }
                else {
                    self.spinner = false;
                    self.alertService.showAlert('error');
                }
            }
        };
        request.open('POST', this.printUrl, true);
        request.send(data);
    }
    back() {
        this.location.back();
    }
}
ZplFileComponent.ɵfac = function ZplFileComponent_Factory(t) { return new (t || ZplFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"])); };
ZplFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZplFileComponent, selectors: [["app-zpl-file"]], decls: 4, vars: 2, consts: [[1, "text-center", "fixed-top", "spinnerContent"], ["class", "spinner-grow text-warning", "style", "margin-top: 200px;width: 5rem; height: 5rem", "role", "status", 4, "ngIf"], [1, "row", "h-100", "pb-3", "pt-3"], ["class", "row h-100 pb-3 pt-3", 4, "ngIf"], ["role", "status", 1, "spinner-grow", "text-warning", 2, "margin-top", "200px", "width", "5rem", "height", "5rem"], [1, "sr-only"], [1, "col-12"], [1, "text-center"], [1, "text-center", "text-monospace"], [1, "input-group"], [1, "input-group-prepend"], ["id", "", 1, "input-group-text"], ["type", "text", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [1, "btn", "btn-primary", "btn-lg", "btn-block", "mt-3", 3, "click"], [1, "btn", "btn-secondary", "btn-lg", "btn-block", "mt-3", 3, "click"]], template: function ZplFileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ZplFileComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ZplFileComponent_div_3_Template, 17, 4, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ6cGwtZmlsZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZplFileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-zpl-file',
                templateUrl: './zpl-file.component.html',
                styleUrls: ['./zpl-file.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_5__["ConfigService"] }, { type: _services_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_print_config_print_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/print-config/print-config.component */ "EerF");
/* harmony import */ var _pages_print_label_print_label_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/print-label/print-label.component */ "9UFG");
/* harmony import */ var _main_dasboard_dasboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/dasboard/dasboard.component */ "nPE4");
/* harmony import */ var _helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_helpers/auth.guard */ "p3Fh");
/* harmony import */ var _pages_price_update_price_update_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/price-update/price-update.component */ "giPN");
/* harmony import */ var _pages_stock_ent_wh_selector_ent_wh_selector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/stock/ent-wh-selector/ent-wh-selector.component */ "WqEK");
/* harmony import */ var _pages_stock_ent_location_ent_location_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/stock/ent-location/ent-location.component */ "fgVz");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "h6PX");
/* harmony import */ var _pages_select_db_select_db_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/select-db/select-db.component */ "43DZ");
/* harmony import */ var _pages_stock_mov_int_mov_int_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/stock/mov-int/mov-int.component */ "y4o9");
/* harmony import */ var _pages_stock_mov_int_detail_mov_int_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/stock/mov-int-detail/mov-int-detail.component */ "/Jku");
/* harmony import */ var _pages_zpl_file_zpl_file_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/zpl-file/zpl-file.component */ "ts6Q");
/* harmony import */ var _pages_ba_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/ba/roadmap/roadmap.component */ "ywZQ");
/* harmony import */ var _pages_ba_roadmap_item_roadmap_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/ba/roadmap-item/roadmap-item.component */ "CIa+");
/* harmony import */ var _pages_ba_roadmap_item_picking_roadmap_item_picking_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/ba/roadmap-item-picking/roadmap-item-picking.component */ "konU");
/* harmony import */ var _pages_ba_roadmap_item_geo_map_roadmap_item_geo_map_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/ba/roadmap-item-geo-map/roadmap-item-geo-map.component */ "bZ9n");





















const routes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'db', component: _pages_select_db_select_db_component__WEBPACK_IMPORTED_MODULE_11__["SelectDbComponent"] },
    {
        path: '',
        component: _main_dasboard_dasboard_component__WEBPACK_IMPORTED_MODULE_5__["DasboardComponent"],
        canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            { path: 'user', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: '', component: _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_10__["MainPageComponent"], canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            {
                path: 'print-config',
                component: _pages_print_config_print_config_component__WEBPACK_IMPORTED_MODULE_3__["PrintConfigComponent"],
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
            },
            {
                path: 'label',
                component: _pages_print_label_print_label_component__WEBPACK_IMPORTED_MODULE_4__["PrintLabelComponent"],
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
            },
            {
                path: 'prices',
                component: _pages_price_update_price_update_component__WEBPACK_IMPORTED_MODULE_7__["PriceUpdateComponent"],
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
            },
            {
                path: 'stock-entry/wh-selector',
                component: _pages_stock_ent_wh_selector_ent_wh_selector_component__WEBPACK_IMPORTED_MODULE_8__["EntWhSelectorComponent"],
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
            },
            {
                path: 'stock/:op/:lot_stock_id',
                component: _pages_stock_ent_location_ent_location_component__WEBPACK_IMPORTED_MODULE_9__["EntLocationComponent"],
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
            },
            {
                path: 'zpl/:product_id/:qty',
                component: _pages_zpl_file_zpl_file_component__WEBPACK_IMPORTED_MODULE_14__["ZplFileComponent"],
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
            },
            {
                path: 'picking-selector',
                component: _pages_stock_mov_int_mov_int_component__WEBPACK_IMPORTED_MODULE_12__["MovIntComponent"],
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
            },
            {
                path: 'picking-selector/:picking_code',
                component: _pages_stock_mov_int_mov_int_component__WEBPACK_IMPORTED_MODULE_12__["MovIntComponent"],
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
            },
            {
                path: 'picking-selector/:picking_code/:picking_id',
                component: _pages_stock_mov_int_detail_mov_int_detail_component__WEBPACK_IMPORTED_MODULE_13__["MovIntDetailComponent"],
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
            },
            {
                path: 'roadmap',
                component: _pages_ba_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_15__["RoadmapComponent"],
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
            },
            {
                path: 'roadmap/:roadmap_id',
                component: _pages_ba_roadmap_item_roadmap_item_component__WEBPACK_IMPORTED_MODULE_16__["RoadmapItemComponent"],
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
            },
            {
                path: 'geomap/:cordinates',
                component: _pages_ba_roadmap_item_geo_map_roadmap_item_geo_map_component__WEBPACK_IMPORTED_MODULE_18__["RoadmapItemGeoMapComponent"],
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
            },
            {
                path: 'roadmap/:roadmap_id/:picking_id',
                component: _pages_ba_roadmap_item_picking_roadmap_item_picking_component__WEBPACK_IMPORTED_MODULE_17__["RoadmapItemPickingComponent"],
                canActivate: [_helpers_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
            },
        ],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "wRLD":
/*!*********************************************!*\
  !*** ./src/app/main/menu/menu.component.ts ***!
  \*********************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class MenuComponent {
    constructor() { }
    ngOnInit() { }
    fullScreen() {
        let elem = document.documentElement;
        let methodToBeInvoked = elem.requestFullscreen ||
            elem['mozRequestFullscreen'] ||
            elem['msRequestFullscreen'];
        if (methodToBeInvoked)
            methodToBeInvoked.call(elem);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], decls: 4, vars: 0, consts: [[1, "navbar", "navbar-dark", "bg-primary", "h5"], ["routerLink", "/", 1, "text-light"], [1, "fa", "fa-fw", "fa-home"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " WHM\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "xpGZ":
/*!*******************************************************!*\
  !*** ./src/app/main/comunes/alert/alert.component.ts ***!
  \*******************************************************/
/*! exports provided: AlertComponent, AlertComponentModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponentModal", function() { return AlertComponentModal; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _services_alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/alert.service */ "f5O9");





const _c0 = ".customAlert[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 30%;\n  left: 50%;\n  margin-top: -50px;\n  margin-left: -150px;\n  width: 300px;\n  height: 100px;\n  z-index: 1000;\n  background-color: white;\n  padding: 10px;\n  border-radius: 5px;\n  text-align: center;\n  box-shadow: 10px 15px 12px 10px rgba(0, 0, 0, 0.60);\n  -webkit-box-shadow: 10px 15px 12px 10px rgba(0, 0, 0, 0.60);\n  -moz-box-shadow: 10px 15px 12px 10px rgba(0, 0, 0, 0.60);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsZXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtREFBbUQ7RUFDbkQsMkRBQTJEO0VBQzNELHdEQUF3RDtBQUMxRCIsImZpbGUiOiJhbGVydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbUFsZXJ0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDMwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgbWFyZ2luLWxlZnQ6IC0xNTBweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJveC1zaGFkb3c6IDEwcHggMTVweCAxMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjYwKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAxMHB4IDE1cHggMTJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC42MCk7XG4gIC1tb3otYm94LXNoYWRvdzogMTBweCAxNXB4IDEycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNjApO1xufVxuIl19 */";
class AlertComponent {
    constructor(alertService, config, modalService) {
        this.alertService = alertService;
        this.modalService = modalService;
        this.showDialog$ = alertService.show;
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.showDialog$.subscribe((res) => {
            if (res) {
                this.modalService.open(AlertComponentModal);
            }
        });
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponent, selectors: [["Alert"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])], decls: 0, vars: 0, template: function AlertComponent_Template(rf, ctx) { }, styles: [_c0] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'Alert',
                templateUrl: './alert.component.html',
                styleUrls: ['./alert.component.css'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]],
            }]
    }], function () { return [{ type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, null); })();
class AlertComponentModal {
    constructor(alertService, activeModal) {
        this.alertService = alertService;
        this.activeModal = activeModal;
    }
    close() {
        this.activeModal.close();
        this.alertService.hiddeAlert();
    }
}
AlertComponentModal.ɵfac = function AlertComponentModal_Factory(t) { return new (t || AlertComponentModal)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
AlertComponentModal.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlertComponentModal, selectors: [["alert-modal"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])], decls: 5, vars: 1, consts: [[1, "modal-body"], [1, "modal-footer"], [1, "btn", "btn-primary", 3, "click"]], template: function AlertComponentModal_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponentModal_Template_button_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " ACEPTARsss ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.alertService.getMsg(), " ");
    } }, styles: [_c0] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponentModal, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alert-modal',
                templateUrl: './alert-modal.component.html',
                styleUrls: ['./alert.component.css'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]],
            }]
    }], function () { return [{ type: _services_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, null); })();


/***/ }),

/***/ "y4o9":
/*!**********************************************************!*\
  !*** ./src/app/pages/stock/mov-int/mov-int.component.ts ***!
  \**********************************************************/
/*! exports provided: MovIntComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovIntComponent", function() { return MovIntComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/stock.service */ "CFEw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _main_comunes_range_picker_range_picker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../main/comunes/range-picker/range-picker.component */ "Fpq8");
/* harmony import */ var _main_comunes_button_input_text_button_input_text_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../main/comunes/button-input-text/button-input-text.component */ "RedB");
/* harmony import */ var _main_comunes_read_code_read_code_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../main/comunes/read-code/read-code.component */ "5aEy");









function MovIntComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovIntComponent_read_code_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "read-code", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("searchByCode", function MovIntComponent_read_code_6_Template_read_code_searchByCode_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.searchByCode($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputMethod", ctx_r1.inputMethod);
} }
function MovIntComponent_strong_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ":: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MovIntComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntComponent_span_17_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const i_r9 = ctx.index; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.removeFilter(i_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const filter_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", filter_r8.label, " ");
} }
function MovIntComponent_ng_container_19_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.partner_id[1], "");
} }
function MovIntComponent_ng_container_19_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Responsable:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.user_id[1], " ");
} }
function MovIntComponent_ng_container_19_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Origen:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.origin, " ");
} }
function MovIntComponent_ng_container_19_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hoja de ruta:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.computed_roadmap_id[1], " ");
} }
function MovIntComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MovIntComponent_ng_container_19_ng_container_5_Template, 4, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MovIntComponent_ng_container_19_ng_container_6_Template, 5, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Fecha:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Destino:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MovIntComponent_ng_container_19_ng_container_16_Template, 5, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MovIntComponent_ng_container_19_ng_container_17_Template, 5, 1, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "A preparar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("routerLink", "/picking-selector/", ctx_r5.sequence_code, "/", item_r12.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", item_r12.display_name, " - ", item_r12.location_id[1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.partner_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.user_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 11, item_r12.scheduled_date, "d/M/Y H:mm", "UTC -6"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.location_dest_id[1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.origin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r12.computed_roadmap_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.move_lines.length, " ");
} }
const _c0 = function (a2) { return { btn: true, "btn-info": true, active: a2 }; };
const _c1 = function () { return { btn: true, "btn-info": true }; };
class MovIntComponent {
    constructor(route, router, stockService) {
        this.route = route;
        this.router = router;
        this.stockService = stockService;
        this.pickings = [];
        this.filters = [];
        this.isCollapsed = true;
        this.spinner = true;
        this.sequence_code = 'all';
        this.inputMethod = 'textBus';
        this.base_leaf = [
            ['state', 'in', ['assigned', 'draft', 'partially_available']],
            ['picking_type_id.code', '=', 'internal'],
        ];
        this.showReadCode = true;
    }
    ngOnInit() {
        this.sequence_code = this.route['params']['value']['picking_code'] || 'all';
        this.initFilter();
        this.getPicking();
    }
    removeFilter(index) {
        //const index = this.filters.findIndex((e) => e.name === name);
        this.filters.splice(index, 1);
        this.spinner = true;
        this.getPicking();
    }
    initFilter() {
        let dateExpected = this.makeDateLeaf(this.parseDateObject(new Date()), undefined);
        this.filters.push({
            label: 'movimientos hasta hoy',
            value: { toDate: this.parseDateObject(new Date()) },
            name: 'scheduled_date',
        });
        return dateExpected;
    }
    searchByCode(code) {
        console.log(code);
    }
    getLeaf() {
        let domain = [
            ['state', 'in', ['assigned', 'draft', 'confirmed', 'partially_available']],
            ['picking_type_id.code', '=', 'internal'],
        ];
        if (this.route['params']['value']['picking_code']) {
            domain.push([
                'picking_type_id.sequence_code',
                '=',
                this.route['params']['value']['picking_code'],
            ]);
        }
        return domain;
    }
    getPicking() {
        let leaf = this.getLeaf();
        let dateExpected = this.filters.filter((filter) => filter.name == 'scheduled_date');
        if (dateExpected.length) {
            dateExpected = this.makeDateLeaf(dateExpected[0]['value']['fromDate'], dateExpected[0]['value']['toDate']);
        }
        leaf.push(...dateExpected);
        let pickingOrigin = this.filters.filter((filter) => filter.name == 'origin');
        if (pickingOrigin.length) {
            pickingOrigin.forEach((element) => {
                leaf.push('|');
                leaf.push([element.name, 'like', element.value]);
                leaf.push(['computed_roadmap_id', 'like', element.value]);
            });
        }
        this.stockService.getPicking(leaf).subscribe((res) => {
            this.pickings = res['records'];
            this.spinner = false;
        });
    }
    goPicking(item) {
        console.log(item);
    }
    dateRange(value) {
        const index = this.filters.findIndex((e) => e.name == 'scheduled_date');
        if (index >= 0) {
            this.filters.splice(index, 1);
        }
        if (value.fromDate && value.toDate) {
            const fromDate = value.fromDate.day +
                '/' +
                value.fromDate.month +
                '/' +
                value.fromDate.year;
            const toDate = value.toDate.day + '/' + value.toDate.month + '/' + value.toDate.year;
            this.filters.push({
                label: fromDate + ' a ' + toDate,
                value: {
                    fromDate: this.parseDate(value.fromDate),
                    toDate: this.parseDate(value.toDate),
                },
                name: 'scheduled_date',
            });
        }
        else if (value.fromDate) {
            const fromDate = value.fromDate.day +
                '/' +
                value.fromDate.month +
                '/' +
                value.fromDate.year;
            this.filters.push({
                label: fromDate,
                value: { fromDate: this.parseDate(value.fromDate) },
                name: 'scheduled_date',
            });
        }
        this.spinner = true;
        this.getPicking();
    }
    makeDateLeaf(fromDate, toDate) {
        let leaf = [];
        if (!toDate) {
            toDate = fromDate;
        }
        else if (!fromDate) {
            leaf.push(['scheduled_date', '<', toDate + ' 23:59:59']);
        }
        else {
            leaf.push(['scheduled_date', '>=', fromDate + ' 00:00:00']);
            leaf.push(['scheduled_date', '<', toDate + ' 23:59:59']);
        }
        return leaf;
    }
    parseDate(date) {
        const zeroPad = (num, places) => String(num).padStart(places, '0');
        return (date.year + '-' + zeroPad(date.month, 2) + '-' + zeroPad(date.day, 2));
    }
    parseDateObject(date) {
        const zeroPad = (num, places) => String(num).padStart(places, '0');
        return (date.getFullYear() +
            '-' +
            zeroPad(date.getMonth() + 1, 2) +
            '-' +
            zeroPad(date.getDate(), 2));
    }
    refresh() {
        this.spinner = true;
        this.filters = [];
        this.getPicking();
    }
    addOrigin(object) {
        this.showReadCode = object.showReadCode;
        if (this.showReadCode && object.text) {
            this.filters.push({
                label: 'origen: ' + object.text,
                value: object.text,
                name: 'origin',
            });
            this.spinner = true;
            this.getPicking();
        }
    }
}
MovIntComponent.ɵfac = function MovIntComponent_Factory(t) { return new (t || MovIntComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"])); };
MovIntComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MovIntComponent, selectors: [["app-mov-int"]], decls: 28, vars: 15, consts: [[1, "text-center", "fixed-top", "spinnerContent"], ["class", "spinner-grow text-warning", "style", "width: 5rem; height: 5rem", "role", "status", 4, "ngIf"], [1, "row"], [1, "col-2"], ["type", "button", "aria-controls", "collapseExample", 1, "btn", "btn-primary", "shadow", 3, "click"], [1, "fa", "fa-filter"], ["class", "col-10", 3, "inputMethod", "searchByCode", 4, "ngIf"], [3, "ngbCollapse", "ngbCollapseChange"], ["collapse", "ngbCollapse"], [1, "pb-0"], [1, "row", "pb-0"], [3, "evento"], [1, "text-left"], [4, "ngIf"], ["class", "badge badge-primary", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group"], [4, "ngFor", "ngForOf"], [1, "row", "text-center"], ["role", "group", 1, "btn-group", "btn-group-lg", "fixed-bottom"], ["type", "button", 3, "ngClass", "click"], [1, "fa", "fa-font"], [1, "fa", "fa-barcode"], [1, "fa", "fa-refresh"], ["role", "status", 1, "spinner-grow", "text-warning", 2, "width", "5rem", "height", "5rem"], [1, "sr-only"], [1, "col-10", 3, "inputMethod", "searchByCode"], [1, "badge", "badge-primary", 3, "click"], [1, "text-left", "list-group-item", 3, "routerLink"], [1, "h5"]], template: function MovIntComponent_Template(rf, ctx) { if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MovIntComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return _r2.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MovIntComponent_read_code_6_Template, 1, 1, "read-code", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngbCollapseChange", function MovIntComponent_Template_div_ngbCollapseChange_7_listener($event) { return ctx.isCollapsed = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "range-picker", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("evento", function MovIntComponent_Template_range_picker_evento_12_listener($event) { return ctx.dateRange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button-input-text", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("evento", function MovIntComponent_Template_button_input_text_evento_14_listener($event) { return ctx.addOrigin($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MovIntComponent_strong_16_Template, 2, 0, "strong", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MovIntComponent_span_17_Template, 2, 1, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MovIntComponent_ng_container_19_Template, 21, 15, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntComponent_Template_button_click_22_listener() { return ctx.inputMethod = "form"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntComponent_Template_button_click_24_listener() { return ctx.inputMethod = "textBus"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MovIntComponent_Template_button_click_26_listener() { return ctx.refresh(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spinner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showReadCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx.isCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filters.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pickings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.inputMethod == "form"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.inputMethod == "textBus"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbCollapse"], _main_comunes_range_picker_range_picker_component__WEBPACK_IMPORTED_MODULE_5__["RangePickerComponent"], _main_comunes_button_input_text_button_input_text_component__WEBPACK_IMPORTED_MODULE_6__["ButtonInputTextComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _main_comunes_read_code_read_code_component__WEBPACK_IMPORTED_MODULE_7__["ReadCodeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3YtaW50LmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MovIntComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mov-int',
                templateUrl: './mov-int.component.html',
                styleUrls: ['./mov-int.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_stock_service__WEBPACK_IMPORTED_MODULE_2__["StockService"] }]; }, null); })();


/***/ }),

/***/ "ywZQ":
/*!*******************************************************!*\
  !*** ./src/app/pages/ba/roadmap/roadmap.component.ts ***!
  \*******************************************************/
/*! exports provided: RoadmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapComponent", function() { return RoadmapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_stock_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_services/stock.service */ "CFEw");
/* harmony import */ var _services_roadmap_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/roadmap.service */ "sZ45");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






function RoadmapComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/roadmap/", item_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1["number"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 6, item_r1["preparation_date"], "d/M/Y H:mm", "UTC -6"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Conductor: ", item_r1["driver_user_id"][1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Vehiculo: ", item_r1["vehicle_id"][1], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Remitos:", item_r1["picking_ids"].length, "");
} }
class RoadmapComponent {
    constructor(stockService, RoadmapService) {
        this.stockService = stockService;
        this.RoadmapService = RoadmapService;
        this.roadmap = [];
    }
    ngOnInit() {
        this.getRoadmap();
    }
    getRoadmap() {
        this.RoadmapService.getRoadmaps().subscribe((wh) => {
            this.roadmap = wh['records'];
        });
    }
}
RoadmapComponent.ɵfac = function RoadmapComponent_Factory(t) { return new (t || RoadmapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_stock_service__WEBPACK_IMPORTED_MODULE_1__["StockService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_roadmap_service__WEBPACK_IMPORTED_MODULE_2__["RoadmapService"])); };
RoadmapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoadmapComponent, selectors: [["app-roadmap"]], decls: 4, vars: 1, consts: [[1, "row", "text-center", "mt-2"], [1, "col-12"], [1, "list-group"], ["class", "text-left list-group-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "text-left", "list-group-item", 3, "routerLink"], [1, "fa", "fa-fw", "fa-building"]], template: function RoadmapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RoadmapComponent_li_3_Template, 15, 10, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roadmap);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2FkbWFwLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoadmapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roadmap',
                templateUrl: './roadmap.component.html',
                styleUrls: ['./roadmap.component.css']
            }]
    }], function () { return [{ type: _services_stock_service__WEBPACK_IMPORTED_MODULE_1__["StockService"] }, { type: _services_roadmap_service__WEBPACK_IMPORTED_MODULE_2__["RoadmapService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
else {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
}
let onDeviceReady = () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
    document.addEventListener("resume", onResume, false);
};
//platformBrowserDynamic().bootstrapModule(AppModule);
document.addEventListener('deviceready', onDeviceReady, false);
function onResume() {
    //alert('resume');
}


/***/ }),

/***/ "zacy":
/*!*************************************************************************************************!*\
  !*** ./src/app/main/comunes/input-cant-keyboard-button/input-cant-keyboard-button.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: InputCantKeyboard, InputCantKeyboardButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCantKeyboard", function() { return InputCantKeyboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputCantKeyboardButtonComponent", function() { return InputCantKeyboardButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



const _c0 = ["someInput"];
class InputCantKeyboard {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    sendData() {
        this.activeModal.close(this.someInput.nativeElement.value);
    }
    cancel() {
        this.activeModal.close(null);
    }
}
InputCantKeyboard.ɵfac = function InputCantKeyboard_Factory(t) { return new (t || InputCantKeyboard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"])); };
InputCantKeyboard.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputCantKeyboard, selectors: [["ngbd-modal-content"]], viewQuery: function InputCantKeyboard_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.someInput = _t.first);
    } }, inputs: { id: "id" }, decls: 15, vars: 0, consts: [[1, "modal-header"], [1, "modal-title"], [1, "modal-body"], [1, "container"], [1, "form-group"], ["for", "cantidad"], ["type", "number", 1, "form-control"], ["someInput", ""], [1, "modal-footer"], [1, "btn", "btn-secondary", 3, "click"], [1, "btn", "btn-primary", 3, "click"]], template: function InputCantKeyboard_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Ingrese la cantidad de forma manual");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputCantKeyboard_Template_button_click_11_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputCantKeyboard_Template_button_click_13_listener() { return ctx.sendData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Aceptar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputCantKeyboard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngbd-modal-content',
                templateUrl: './input-cant-keyboard.component.html',
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], someInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['someInput']
        }] }); })();
class InputCantKeyboardButtonComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.evento = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    open() {
        const modalRef = this.modalService.open(InputCantKeyboard);
        this.evento.emit({ showReadCode: false });
        modalRef.componentInstance.id = 10;
        modalRef.result
            .then((result) => {
            this.evento.emit({ cantidad: result, showReadCode: true });
        })
            .catch((error) => {
            console.log(error);
        });
    }
}
InputCantKeyboardButtonComponent.ɵfac = function InputCantKeyboardButtonComponent_Factory(t) { return new (t || InputCantKeyboardButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
InputCantKeyboardButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputCantKeyboardButtonComponent, selectors: [["input-cant-keyboard-button"]], outputs: { evento: "evento" }, decls: 2, vars: 0, consts: [[1, "btn", "btn-lg", "btn-outline-primary", 3, "click"]], template: function InputCantKeyboardButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputCantKeyboardButtonComponent_Template_button_click_0_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Agregar cantidad manual\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputCantKeyboardButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'input-cant-keyboard-button',
                templateUrl: './input-cant-keyboard-button.component.html',
            }]
    }], function () { return [{ type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, { evento: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map