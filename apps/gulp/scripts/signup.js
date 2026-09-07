import "./main-DDwyGs_d.js";
//#region ../../packages/demo/signup.js
function e(e, { openTerms: t, openHelp: n } = {}) {
	if (!e) return () => {};
	let r = new AbortController(), i = (e, t, n) => e?.addEventListener(t, n, { signal: r.signal }), a = e.querySelector("#join-form"), o = e.querySelector("#join-status"), s = a.querySelector("#join-password"), c = a.querySelector("#join-confirm"), l = a.querySelector("#join-name"), u = !1;
	a.noValidate = !0, s.minLength = 8, s.autocomplete = c.autocomplete = "new-password", s.setAttribute("aria-describedby", "join-password-hint"), c.setAttribute("aria-describedby", "join-status"), l.autocomplete = "name", a.querySelector("#join-email").autocomplete = "email";
	for (let e of ["join-terms", "join-privacy"]) a.querySelector("#" + e).required = !0;
	function d() {
		l.setCustomValidity(l.value.trim() ? "" : "이름을 입력해 주세요."), c.setCustomValidity(c.value === s.value ? "" : "비밀번호가 일치하지 않습니다.");
	}
	i(a, "input", () => {
		d(), u &&= (o.textContent = "정보가 변경되었습니다. 다시 확인한 후 가입을 완료해 주세요.", !1);
	}), i(a, "submit", (e) => {
		if (e.preventDefault(), d(), !a.checkValidity()) {
			o.textContent = "필수 항목, 이메일 형식, 8자 이상의 비밀번호와 약관 동의를 확인해 주세요.", a.querySelector(":invalid")?.scrollIntoView({ block: "center" }), a.reportValidity();
			return;
		}
		u = !0, o.textContent = "가입 체험이 완료되었습니다! 실제 계정은 생성되지 않으며 입력 정보는 저장되지 않습니다.", o.tabIndex = -1, o.focus();
	}), i(e.querySelector(".join_terms-trigger"), "click", () => t?.()), i(e.querySelector(".join_help-trigger"), "click", () => n?.());
	let f = [...e.querySelectorAll(".join_section")], p = [...e.querySelectorAll(".join_toc a")], m, h = () => {
		m = void 0;
		let e = f[0];
		for (let t of f) t.getBoundingClientRect().top <= 160 && (e = t);
		window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4 && (e = f.at(-1)), p.forEach((t) => {
			t.hash === "#" + e.id ? t.setAttribute("aria-current", "location") : t.removeAttribute("aria-current");
		});
	};
	return i(window, "scroll", () => {
		m ||= requestAnimationFrame(h);
	}), i(window, "resize", h), i(e, "click", (e) => {
		let t = e.target.closest("a[href^=\"#\"]");
		if (!t) return;
		let n = document.getElementById(t.hash.slice(1));
		n && (e.preventDefault(), history.replaceState(null, "", t.hash), n.scrollIntoView({
			behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
			block: "start"
		}), n.matches(".join_section, main") && n.focus({ preventScroll: !0 }));
	}), h(), location.hash && requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView()), () => {
		r.abort(), m && cancelAnimationFrame(m);
	};
}
//#endregion
//#region src/components/navigation/Tabs/tabs.js
function t(e = document) {
	let t = [...e.querySelectorAll("[data-component=\"Tabs\"]")];
	return t.forEach((e) => {
		if (e.dataset.tabsReady === "true") return;
		e.dataset.tabsReady = "true";
		let t = e.querySelector("[role=\"tablist\"]"), n = t?.querySelector(".tabs_indicator"), r = e.querySelector("[data-tabs-scroll=\"prev\"]"), i = e.querySelector("[data-tabs-scroll=\"next\"]"), a = () => [...e.querySelectorAll("[role=\"tab\"]:not(:disabled):not([aria-disabled=\"true\"])")];
		function o() {
			if (!t) return;
			let a = t.querySelector(".tabs_tab[aria-selected=\"true\"]");
			if (n && a) {
				let r = t.getBoundingClientRect(), i = a.getBoundingClientRect(), o = i.left - r.left + t.scrollLeft, s = i.top - r.top + t.scrollTop, c = e.classList.contains("tabs_vertical"), l = e.classList.contains("tabs_pill");
				Object.assign(n.style, c ? {
					width: "2px",
					height: `${i.height}px`,
					transform: `translate3d(${o + i.width - 2}px, ${s}px, 0)`
				} : l ? {
					width: `${i.width}px`,
					height: `${i.height}px`,
					transform: `translate3d(${o}px, ${s}px, 0)`
				} : {
					width: `${i.width}px`,
					height: "2px",
					transform: `translate3d(${o}px, ${s + i.height - 2}px, 0)`
				});
			}
			let o = t.scrollWidth - t.clientWidth, s = e.classList.contains("tabs_scroll-nav") && o > 1;
			r && (r.hidden = !s, r.disabled = !s || t.scrollLeft <= 1), i && (i.hidden = !s, i.disabled = !s || t.scrollLeft >= o - 1);
		}
		function s(n) {
			if (!t || !e.classList.contains("tabs_scroll-nav")) return;
			let r = t.getBoundingClientRect(), i = n.getBoundingClientRect(), a = i.left - r.left + t.scrollLeft, o = t.scrollWidth - t.clientWidth;
			t.scrollTo({
				left: Math.max(0, Math.min(a - (t.clientWidth - i.width) / 2, o)),
				behavior: "smooth"
			});
		}
		function c(e) {
			a().forEach((t) => {
				let n = t === e;
				t.classList.toggle("is-active", n), t.setAttribute("aria-selected", String(n)), t.tabIndex = n ? 0 : -1;
				let r = document.getElementById(t.getAttribute("aria-controls"));
				r && (r.hidden = !n, r.classList.toggle("is-active", n));
			}), requestAnimationFrame(() => {
				o(), s(e);
			});
		}
		t?.addEventListener("click", (e) => {
			let t = e.target.closest("[role=\"tab\"]");
			t && !t.disabled && t.getAttribute("aria-disabled") !== "true" && c(t);
		}), t?.addEventListener("keydown", (t) => {
			let n = a(), r = n.indexOf(t.target.closest("[role=\"tab\"]")), i = r, o = e.classList.contains("tabs_vertical");
			if (t.key === (o ? "ArrowDown" : "ArrowRight")) i = (r + 1) % n.length;
			else if (t.key === (o ? "ArrowUp" : "ArrowLeft")) i = (r - 1 + n.length) % n.length;
			else if (t.key === "Home") i = 0;
			else if (t.key === "End") i = n.length - 1;
			else return;
			t.preventDefault(), c(n[i]), n[i].focus();
		}), r?.addEventListener("click", () => t?.scrollBy({
			left: -Math.max(t.clientWidth * .75, 120),
			behavior: "smooth"
		})), i?.addEventListener("click", () => t?.scrollBy({
			left: Math.max(t.clientWidth * .75, 120),
			behavior: "smooth"
		})), t?.addEventListener("scroll", o, { passive: !0 });
		let l = typeof ResizeObserver > "u" ? null : new ResizeObserver(() => requestAnimationFrame(o));
		t && (l?.observe(t), t.querySelectorAll(".tabs_tab").forEach((e) => l?.observe(e)), t.setAttribute("aria-orientation", e.classList.contains("tabs_vertical") ? "vertical" : "horizontal")), requestAnimationFrame(o);
	}), t;
}
//#endregion
//#region src/components/navigation/Dropdown/dropdown.js
function n(e = document) {
	let t = [...e.querySelectorAll("[data-dropdown]")];
	return t.forEach((e) => {
		if (e.dataset.dropdownReady === "true") return;
		e.dataset.dropdownReady = "true";
		let t = e.querySelector(":scope > .dropdown_trigger"), n = e.querySelector(":scope > .dropdown_menu");
		if (!t || !n) return;
		function r() {
			return [...n.querySelectorAll(".menu_link:not(.is-disabled):not([aria-disabled=\"true\"])")];
		}
		function i(i, a = !1) {
			e.classList.contains("is-disabled") || t.disabled || (e.classList.toggle("is-open", i), t.setAttribute("aria-expanded", String(i)), n.setAttribute("aria-hidden", String(!i)), a && requestAnimationFrame(() => r()[0]?.focus()));
		}
		t.addEventListener("click", () => i(!e.classList.contains("is-open"))), t.addEventListener("keydown", (e) => {
			e.key === "ArrowDown" && (e.preventDefault(), i(!0, !0));
		}), n.addEventListener("keydown", (e) => {
			let n = r(), a = n.indexOf(document.activeElement), o = a;
			if (e.key === "ArrowDown") o = (a + 1) % n.length;
			else if (e.key === "ArrowUp") o = (a - 1 + n.length) % n.length;
			else if (e.key === "Home") o = 0;
			else if (e.key === "End") o = n.length - 1;
			else if (e.key === "Escape") {
				i(!1), t.focus();
				return;
			} else if (e.key === "Tab") {
				i(!1);
				return;
			} else return;
			e.preventDefault(), n[o]?.focus();
		}), n.addEventListener("click", (n) => {
			let r = n.target.closest(".menu_link");
			!r || r.classList.contains("is-disabled") || r.getAttribute("aria-disabled") === "true" || (e.dispatchEvent(new CustomEvent("dropdown:select", {
				bubbles: !0,
				detail: { value: r.dataset.value ?? r.textContent.trim() }
			})), e.dataset.dropdownCloseOnSelect !== "false" && (i(!1), t.focus()));
		}), document.addEventListener("pointerdown", (t) => {
			e.contains(t.target) || i(!1);
		}), n.setAttribute("aria-hidden", String(!e.classList.contains("is-open"))), t.setAttribute("aria-expanded", String(e.classList.contains("is-open")));
	}), t;
}
//#endregion
//#region src/components/navigation/Pagination/pagination.js
function r(e = document) {
	let t = [...e.querySelectorAll("[data-pagination]")];
	return t.forEach((e) => {
		if (e.dataset.paginationReady === "true") return;
		e.dataset.paginationReady = "true";
		let t = Math.max(1, Math.ceil(Math.max(0, Number(e.dataset.total) || 0) / Math.max(1, Number(e.dataset.pageSize) || 10))), n = Math.min(t, Math.max(1, Number(e.dataset.current) || 1)), r = e.querySelector("[data-pagination-list]"), i = e.querySelector("[data-pagination-prev]"), a = e.querySelector("[data-pagination-next]"), o = () => t <= 7 ? Array.from({ length: t }, (e, t) => t + 1) : n <= 4 ? [
			1,
			2,
			3,
			4,
			5,
			"ellipsis-end",
			t
		] : n >= t - 3 ? [
			1,
			"ellipsis-start",
			t - 4,
			t - 3,
			t - 2,
			t - 1,
			t
		] : [
			1,
			"ellipsis-start",
			n - 1,
			n,
			n + 1,
			"ellipsis-end",
			t
		];
		function s() {
			e.dataset.current = String(n), i && (i.disabled = n <= 1), a && (a.disabled = n >= t);
			let s = e.querySelector(".pagination_simple-current"), c = e.querySelector(".pagination_simple-total");
			if (s && (s.textContent = String(n)), c && (c.textContent = String(t)), !r) return;
			r.querySelectorAll("[data-pagination-page-item]").forEach((e) => e.remove());
			let l = r.querySelector("[data-pagination-next-item]");
			o().forEach((e) => {
				let t = document.createElement("li");
				if (t.className = "pagination_item", t.dataset.paginationPageItem = "", typeof e == "string") t.innerHTML = "<span class=\"pagination_ellipsis\" aria-hidden=\"true\">…</span>";
				else {
					let r = document.createElement("button");
					r.type = "button", r.className = `pagination_link${e === n ? " is-active" : ""}`, r.dataset.page = String(e), r.setAttribute("aria-label", `${e}페이지${e === n ? ", 현재 페이지" : ""}`), e === n && r.setAttribute("aria-current", "page"), r.innerHTML = String(e), t.append(r);
				}
				r.insertBefore(t, l);
			});
		}
		function c(r) {
			let i = Math.min(t, Math.max(1, r));
			i !== n && (n = i, s(), e.dispatchEvent(new CustomEvent("pagination:change", {
				bubbles: !0,
				detail: {
					current: n,
					totalPages: t
				}
			})));
		}
		i?.addEventListener("click", () => c(n - 1)), a?.addEventListener("click", () => c(n + 1)), r?.addEventListener("click", (e) => {
			let t = e.target.closest("[data-page]");
			t && c(Number(t.dataset.page));
		}), s();
	}), t;
}
//#endregion
//#region src/components/data-display/Tree/tree.js
function i(e = document) {
	let t = e.querySelectorAll("[data-component=\"Tree\"]");
	return t.forEach((e) => e.addEventListener("click", (t) => {
		let n = t.target.closest(".tree_toggle:not(.tree_toggle_placeholder)");
		if (!n || !e.contains(n)) return;
		let r = n.closest(".tree_item"), i = n.getAttribute("aria-expanded") !== "true";
		n.setAttribute("aria-expanded", String(i)), r?.setAttribute("aria-expanded", String(i));
	})), t;
}
//#endregion
//#region src/components/feedback/Tooltip/tooltip.js
function a(e = document) {
	let t = [...e.querySelectorAll("[data-tooltip], [data-component=\"Tooltip\"]")], n = (() => {
		try {
			return window.top?.document?.body ? window.top.document : document;
		} catch {
			return document;
		}
	})();
	if (n !== document) {
		let e = new URL("styles/uxkm.css", n.baseURI);
		e.searchParams.set("v", "tooltip-20260819");
		let t = n.getElementById("uxkm-tooltip-portal-styles");
		t || (t = n.createElement("link"), t.id = "uxkm-tooltip-portal-styles", t.rel = "stylesheet", n.head.appendChild(t)), t.href !== e.href && (t.href = e.href);
	}
	let r = n.getElementById("uxkm-tooltip-portal-root");
	r || (r = n.createElement("div"), r.id = "uxkm-tooltip-portal-root", r.className = "uxkm-tooltip-portal-root", n.body.appendChild(r)), r.dataset.theme = document.documentElement.dataset.theme || "light";
	let i = t.map((e, t) => {
		if (e.dataset.tooltipReady) return null;
		let i = e.querySelector(".tooltip_trigger"), a = e.querySelector(".tooltip_bubble");
		if (!i || !a) return null;
		e.dataset.tooltipReady = "true";
		let o = n.createElement("span");
		o.className = [...e.classList].filter((e) => e !== "is-open").concat("tooltip_portal").join(" "), o.style.cssText = "position:fixed;z-index:10020;pointer-events:none;", o.hidden = !0, r.appendChild(o), o.appendChild(a), a.hidden = !1, a.style.zIndex = "10021", e.dataset.tooltipTrigger === "click" && (a.style.pointerEvents = "auto");
		let s, c = () => {
			let t = "button, a, [role=\"button\"], [role=\"link\"], input, textarea, select, .btn, .link", n = (i.matches(t) ? i : i.querySelector(t) || i).getBoundingClientRect(), r = {
				top: 0,
				left: 0
			};
			try {
				i.ownerDocument !== window.top?.document && (r = window.frameElement?.getBoundingClientRect() || r);
			} catch {}
			if (o.style.top = `${r.top + n.top}px`, o.style.left = `${r.left + n.left}px`, o.style.width = `${n.width}px`, o.style.height = `${n.height}px`, o.matches(".tooltip_arrow-anchor-target, .tooltip_arrow-anchor-mixed")) {
				let t = a.getBoundingClientRect(), i = e.dataset.arrowTargetAlign || "center", s = ["left", "top"].includes(i) ? 0 : ["right", "bottom"].includes(i) ? 1 : .5, c = o.matches(".tooltip_placement-left, .tooltip_placement-right") ? r.top + n.top + n.height * s - t.top : r.left + n.left + n.width * s - t.left;
				o.style.setProperty("--tooltip-arrow-position", `${c}px`);
			}
		}, l = (t = "close") => {
			clearTimeout(s), e.classList.remove("is-open"), o.classList.remove("is-open"), o.hidden = !0, i.setAttribute("aria-expanded", "false"), e.dispatchEvent(new CustomEvent("openchange", {
				bubbles: !0,
				detail: {
					open: !1,
					reason: t
				}
			}));
		}, u = (t = "trigger") => {
			e.classList.contains("is-disabled") || (c(), e.classList.add("is-open"), o.classList.add("is-open"), o.hidden = !1, c(), i.setAttribute("aria-expanded", "true"), e.dispatchEvent(new CustomEvent("openchange", {
				bubbles: !0,
				detail: {
					open: !0,
					reason: t
				}
			})));
		}, d = () => {
			clearTimeout(s), s = setTimeout(() => l("hover"), 100);
		};
		return e.dataset.tooltipTrigger === "click" ? i.addEventListener("click", () => o.hidden ? u("trigger") : l("trigger")) : (i.addEventListener("mouseenter", () => u("hover")), i.addEventListener("mouseleave", d), i.addEventListener("focusin", () => u("focus")), i.addEventListener("focusout", d), a.addEventListener("mouseenter", () => clearTimeout(s)), a.addEventListener("mouseleave", d)), a.querySelectorAll("[data-tooltip-close]").forEach((e) => e.addEventListener("click", () => l("close"))), window.addEventListener("resize", c), window.addEventListener("scroll", c, !0), e.classList.contains("is-open") && u("load"), {
			tooltip: e,
			trigger: i,
			bubble: a,
			portal: o,
			close: l
		};
	}).filter(Boolean), a = (e) => i.forEach((t) => {
		!t.tooltip.contains(e.target) && !t.portal.contains(e.target) && t.close("outside");
	});
	e.addEventListener("pointerdown", a), n !== e && n.addEventListener("pointerdown", a);
	let o = (e) => {
		e.key === "Escape" && i.forEach((e) => e.close("escape"));
	};
	return e.addEventListener("keydown", o), n !== e && n.addEventListener("keydown", o), t;
}
//#endregion
//#region src/components/feedback/Popover/popover.js
function o(e = document) {
	let t = [...e.querySelectorAll("[data-popover], [data-component=\"Popover\"]")], n = (e, t = "close") => {
		e.classList.remove("is-open");
		let n = e.querySelector(".popover_panel");
		n && (n.hidden = !0), e.querySelector(".popover_trigger")?.setAttribute("aria-expanded", "false"), e.dispatchEvent(new CustomEvent("openchange", {
			bubbles: !0,
			detail: {
				open: !1,
				reason: t
			}
		}));
	}, r = (e, r = "trigger") => {
		t.forEach((t) => t !== e && n(t, "other")), e.classList.add("is-open");
		let i = e.querySelector(".popover_panel");
		i && (i.hidden = !1), e.querySelector(".popover_trigger")?.setAttribute("aria-expanded", "true"), e.dispatchEvent(new CustomEvent("openchange", {
			bubbles: !0,
			detail: {
				open: !0,
				reason: r
			}
		}));
	};
	return t.forEach((e) => {
		let t = e.querySelector(".popover_trigger");
		!t || e.dataset.popoverReady || (e.dataset.popoverReady = "true", e.dataset.popoverTrigger === "hover" ? (e.addEventListener("mouseenter", () => r(e, "hover")), e.addEventListener("mouseleave", () => n(e, "hover")), e.addEventListener("focusin", () => r(e, "focus"))) : t.addEventListener("click", () => e.classList.contains("is-open") ? n(e, "trigger") : r(e, "trigger")), e.querySelectorAll("[data-popover-close]").forEach((t) => t.addEventListener("click", () => n(e, "close"))), e.classList.contains("is-open") && r(e, "load"));
	}), e.addEventListener("pointerdown", (e) => t.forEach((t) => {
		t.contains(e.target) || n(t, "outside");
	})), e.addEventListener("keydown", (e) => {
		e.key === "Escape" && t.forEach((e) => n(e, "escape"));
	}), t;
}
//#endregion
//#region ../html/src/components/feedback/Modal/modal.js
function s(e = document) {
	let t = e.querySelectorAll("[data-modal], [data-component=\"Modal\"]"), n = [], r = (e, t = "close", r) => {
		e.classList.remove("is-open"), e.hidden = !0;
		let i = n.indexOf(e);
		i >= 0 && n.splice(i, 1), n.at(-1)?.classList.remove("is-stack-covered"), n.length || document.body.classList.remove("is-modal-open"), e._modalTrigger?.setAttribute("aria-expanded", "false"), e._modalTrigger?.focus(), e.dispatchEvent(new CustomEvent("close", {
			bubbles: !0,
			detail: {
				reason: t,
				sourceEvent: r
			}
		}));
	}, i = (e, t) => {
		e.hidden = !1, e.classList.add("is-open"), e._modalTrigger = t, t?.setAttribute("aria-expanded", "true"), document.body.classList.add("is-modal-open"), n.at(-1)?.classList.add("is-stack-covered"), n.push(e), e.focus();
	};
	return t.forEach((e) => {
		e.dataset.modalReady || (e.dataset.modalReady = "true", e.querySelectorAll("[data-modal-close]").forEach((t) => t.addEventListener("click", (n) => r(e, t.classList.contains("modal_backdrop") ? "backdrop" : "close", n))));
	}), e.querySelectorAll("[data-modal-trigger]").forEach((t) => {
		t.addEventListener("click", () => {
			let n = e.querySelector(t.dataset.modalTrigger);
			n && i(n, t);
		});
	}), e.addEventListener("keydown", (e) => {
		e.key === "Escape" && n.length && r(n.at(-1), "escape", e);
	}), t;
}
//#endregion
//#region src/components/feedback/Drawer/drawer.js
function c(e = document) {
	let t = [...e.querySelectorAll("[data-drawer], [data-component=\"Drawer\"]")], n = [], r = (e, t = "close", r) => {
		e.classList.remove("is-open"), e.hidden = !0;
		let i = n.indexOf(e);
		i >= 0 && n.splice(i, 1), n.at(-1)?.classList.remove("is-stack-covered"), n.length || e.ownerDocument.body.classList.remove("is-drawer-open"), e._drawerTrigger?.setAttribute("aria-expanded", "false"), e._drawerTrigger?.focus(), e.dispatchEvent(new CustomEvent("close", {
			bubbles: !0,
			detail: {
				reason: t,
				sourceEvent: r
			}
		}));
	}, i = (e, t) => {
		e.hidden = !1, e.classList.add("is-open"), e._drawerTrigger = t, t?.setAttribute("aria-expanded", "true"), e.ownerDocument.body.classList.add("is-drawer-open"), n.at(-1)?.classList.add("is-stack-covered"), n.includes(e) || n.push(e), e.focus();
	};
	t.forEach((e) => {
		e.dataset.drawerReady || (e.dataset.drawerReady = "true", e.querySelectorAll("[data-drawer-close]").forEach((t) => t.addEventListener("click", (n) => r(e, t.classList.contains("drawer_backdrop") ? "backdrop" : "close", n))), (e.dataset.drawerOpenOnLoad === "true" || e.classList.contains("is-open")) && i(e));
	}), e.querySelectorAll("[data-drawer-trigger]").forEach((e) => e.addEventListener("click", () => {
		let n = t.find((t) => `#${t.id}` === e.dataset.drawerTrigger);
		n && i(n, e);
	})), e.addEventListener("keydown", (e) => {
		e.key === "Escape" && n.length && r(n.at(-1), "escape", e);
	});
	let a = null;
	e.addEventListener("pointerdown", (e) => {
		if (e.button != null && e.button !== 0) return;
		let t = e.target.closest("[data-drawer][data-drawer-draggable=\"true\"]");
		if (!t?.classList.contains("is-open") || e.target.closest(".drawer_close, .drawer_extra, a, input, textarea, select") || !e.target.closest("[data-drawer-drag-handle], .drawer_header")) return;
		let n = t.querySelector(".drawer_panel.drawer_placement-bottom");
		if (!n) return;
		let r = Number.parseFloat(n.dataset.collapsedHeight || ""), i = n.classList.contains("is-expanded") && r > 0 ? r : n.getBoundingClientRect().height;
		n.dataset.collapsedHeight = String(i), a = {
			drawer: t,
			panel: n,
			target: e.target.closest("[data-drawer-drag-handle], .drawer_header"),
			pointerId: e.pointerId,
			startY: e.clientY,
			startHeight: n.getBoundingClientRect().height,
			collapsed: i,
			expanded: Math.max(i + 48, (n.ownerDocument.defaultView?.innerHeight || i) * .9),
			deltaY: 0
		}, n.classList.add("is-dragging"), a.target?.setPointerCapture?.(e.pointerId), e.preventDefault();
	}, { passive: !1 }), e.addEventListener("pointermove", (e) => {
		if (!a || a.pointerId !== e.pointerId) return;
		let t = a.startY - e.clientY;
		a.deltaY = t, a.panel.style.height = `${Math.min(a.expanded, Math.max(0, a.startHeight + t))}px`, a.panel.style.transform = "translateY(0)", e.preventDefault();
	}, { passive: !1 });
	let o = (e) => {
		if (!a || a.pointerId !== e.pointerId) return;
		let t = a;
		a = null, t.panel.classList.remove("is-dragging");
		try {
			t.target?.releasePointerCapture?.(t.pointerId);
		} catch {}
		let n = t.panel.getBoundingClientRect().height, i = (t.collapsed + t.expanded) / 2, o = t.startHeight >= i;
		t.panel.style.height = "", t.panel.style.transform = "", n < t.collapsed * .55 || !o && t.deltaY < -t.collapsed * .4 ? (t.panel.classList.remove("is-expanded"), r(t.drawer, "drag", e)) : n >= i || !o && t.deltaY > 48 ? t.panel.classList.add("is-expanded") : t.panel.classList.remove("is-expanded");
	};
	return e.addEventListener("pointerup", o), e.addEventListener("pointercancel", o), t;
}
//#endregion
//#region src/scripts/signup.js
var l = document.querySelector(".join_demo");
l.querySelector(".join_terms-trigger").dataset.modalTrigger = "#join-terms-modal", l.querySelector(".join_help-trigger").dataset.drawerTrigger = "#join-help-drawer", e(l), [
	t,
	n,
	r,
	i,
	a,
	o,
	s,
	c
].forEach((e) => e(document));
var u = [
	"프로필에서 나를 소개해 보세요.",
	"관심 분야를 선택해 콘텐츠를 찾아보세요.",
	"새로운 소식과 혜택을 만나 보세요."
];
l.querySelector("#join-page-copy").textContent = u[0], l.addEventListener("pagination:change", (e) => {
	l.querySelector("#join-page-copy").textContent = u[e.detail.current - 1];
}), document.addEventListener("keydown", (e) => {
	if (e.key !== "Tab") return;
	let t = document.querySelector("#join-terms-modal.is-open, #join-help-drawer.is-open");
	if (!t) return;
	let n = [...t.querySelectorAll("button, a[href], input, [tabindex=\"0\"]")].filter((e) => !e.disabled && e.getClientRects().length), r = n[0], i = n.at(-1);
	r ? e.shiftKey && (document.activeElement === r || document.activeElement === t) ? (e.preventDefault(), i.focus()) : !e.shiftKey && (document.activeElement === i || document.activeElement === t) && (e.preventDefault(), r.focus()) : (e.preventDefault(), t.focus());
});
//#endregion
