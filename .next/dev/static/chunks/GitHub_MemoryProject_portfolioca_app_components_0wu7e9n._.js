(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/GitHub/MemoryProject/portfolioca/app/components/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/framer-motion/dist/es/utils/use-motion-value-event.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const EASE = [
    0.22,
    1,
    0.36,
    1
];
function Nav() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { scrollY } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"])(scrollY, "change", {
        "Nav.useMotionValueEvent": (latest)=>{
            setScrolled(latest > 60);
        }
    }["Nav.useMotionValueEvent"]);
    const navLinks = [
        {
            label: "About",
            href: "#about"
        },
        {
            label: "Works",
            href: "#works"
        },
        {
            label: "Contact",
            href: "#contact"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
        initial: {
            opacity: 0,
            y: -20
        },
        animate: {
            opacity: 1,
            y: 0
        },
        transition: {
            duration: 0.8,
            ease: EASE
        },
        className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#faf9f7]/90 backdrop-blur-md border-b border-[#d6d0c8]" : "bg-transparent"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24 flex items-center justify-between h-16 md:h-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#",
                    className: "text-[#1a1a18] text-lg tracking-widest uppercase",
                    style: {
                        fontFamily: "'Cormorant Garamond', serif",
                        letterSpacing: "0.2em"
                    },
                    children: "SY"
                }, void 0, false, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Nav.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden md:flex items-center gap-10",
                    children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            className: "text-xs tracking-[0.15em] uppercase text-[#8a8880] hover:text-[#1a1a18] transition-colors duration-300",
                            style: {
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 300
                            },
                            children: link.label
                        }, link.label, false, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Nav.tsx",
                            lineNumber: 44,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Nav.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "#contact",
                    className: "hidden md:block text-xs tracking-[0.15em] uppercase border border-[#1a1a18] text-[#1a1a18] px-5 py-2 hover:bg-[#1a1a18] hover:text-[#faf9f7] transition-all duration-300",
                    style: {
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300
                    },
                    children: "Get in Touch"
                }, void 0, false, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Nav.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:hidden flex flex-col gap-1.5 cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block w-5 h-px bg-[#1a1a18]"
                        }, void 0, false, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Nav.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block w-3 h-px bg-[#1a1a18]"
                        }, void 0, false, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Nav.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Nav.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Nav.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Nav.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(Nav, "J/Bvhoxk3ojwLCrN1ZnWlnT0f+U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$motion$2d$value$2d$event$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValueEvent"]
    ];
});
_c = Nav;
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const EASE = [
    0.22,
    1,
    0.36,
    1
];
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: (delay)=>({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay,
                ease: EASE
            }
        })
};
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen flex flex-col justify-between pt-36 pb-20 bg-[#faf9f7] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-px h-full bg-[#d6d0c8] opacity-60",
                style: {
                    right: "18%"
                }
            }, void 0, false, {
                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 1,
                    delay: 1.6
                },
                className: "absolute bottom-8 right-8 md:right-16 lg:right-24 flex flex-col items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            y: [
                                0,
                                6,
                                0
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            duration: 2,
                            ease: "easeInOut"
                        },
                        className: "w-px h-10 bg-[#8a8880]"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] tracking-[0.25em] uppercase text-[#8a8880]",
                        style: {
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300
                        },
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex items-start justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        custom: 0.4,
                        initial: "hidden",
                        animate: "visible",
                        variants: fadeUp,
                        className: "text-xs tracking-[0.25em] uppercase text-[#8a8880]",
                        style: {
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300
                        },
                        children: "Visual Presentation Associate"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            duration: 1.2,
                            delay: 0.2
                        },
                        className: "text-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs tracking-[0.2em] uppercase text-[#8a8880] mb-1",
                                style: {
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 300
                                },
                                children: "Portfolio"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs tracking-[0.2em] uppercase text-[#8a8880]",
                                style: {
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 300
                                },
                                children: "2024 — 2026"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full pl-4 md:pl-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                            custom: 0.55,
                            initial: "hidden",
                            animate: "visible",
                            variants: fadeUp,
                            className: "text-[clamp(4rem,10vw,10rem)] leading-none tracking-tight text-[#1a1a18]",
                            style: {
                                fontFamily: "'Cormorant Garamond', serif",
                                fontWeight: 300
                            },
                            children: "Sooryun"
                        }, void 0, false, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-hidden mb-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                            custom: 0.7,
                            initial: "hidden",
                            animate: "visible",
                            variants: fadeUp,
                            className: "text-[clamp(4rem,10vw,10rem)] leading-none tracking-tight text-[#1a1a18] italic",
                            style: {
                                fontFamily: "'Cormorant Garamond', serif",
                                fontWeight: 300
                            },
                            children: "Yoon"
                        }, void 0, false, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            scaleX: 0,
                            originX: 0
                        },
                        animate: {
                            scaleX: 1
                        },
                        transition: {
                            duration: 1,
                            delay: 0.9,
                            ease: EASE
                        },
                        className: "w-16 h-px bg-[#8a8880] mb-8"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row md:items-end md:justify-between gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                custom: 1.0,
                                initial: "hidden",
                                animate: "visible",
                                variants: fadeUp,
                                className: "text-sm md:text-base tracking-[0.1em] uppercase text-[#2c2c2a]",
                                style: {
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 300
                                },
                                children: "Visual Presentation & Spatial Design"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                custom: 1.15,
                                initial: "hidden",
                                animate: "visible",
                                variants: fadeUp,
                                className: "text-sm text-[#8a8880] max-w-sm leading-relaxed",
                                style: {
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontWeight: 400,
                                    fontStyle: "italic"
                                },
                                children: "Bridging Fine Arts, Sculpture, and Retail Merchandising with a Maker's Mindset."
                            }, void 0, false, {
                                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Hero.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const EASE = [
    0.22,
    1,
    0.36,
    1
];
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 24
    },
    visible: (delay = 0)=>({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                delay,
                ease: EASE
            }
        })
};
function About() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-100px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        ref: ref,
        className: "py-28 md:py-40 bg-[#faf9f7]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    custom: 0,
                    initial: "hidden",
                    animate: isInView ? "visible" : "hidden",
                    variants: fadeUp,
                    className: "text-xs tracking-[0.25em] uppercase text-[#8a8880] mb-16",
                    style: {
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300
                    },
                    children: "01 — About"
                }, void 0, false, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "order-2 lg:order-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    custom: 0.1,
                                    initial: "hidden",
                                    animate: isInView ? "visible" : "hidden",
                                    variants: fadeUp,
                                    className: "text-[clamp(2.5rem,5vw,4.5rem)] leading-tight text-[#1a1a18] mb-10",
                                    style: {
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontWeight: 300
                                    },
                                    children: [
                                        "Maker. Designer.",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                            lineNumber: 49,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic",
                                            children: "Visual Storyteller."
                                        }, void 0, false, {
                                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    custom: 0.2,
                                    initial: "hidden",
                                    animate: isInView ? "visible" : "hidden",
                                    variants: fadeUp,
                                    className: "w-10 h-px bg-[#8a8880] mb-10"
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    custom: 0.3,
                                    initial: "hidden",
                                    animate: isInView ? "visible" : "hidden",
                                    variants: fadeUp,
                                    className: "text-base text-[#2c2c2a] leading-[1.9] mb-6",
                                    style: {
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontWeight: 400
                                    },
                                    children: "With a BFA in Sculpture and an MFA in Art & Technology, I bring a rare intersection of fine art sensibility and technical making skills to the world of visual merchandising and spatial design."
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    custom: 0.4,
                                    initial: "hidden",
                                    animate: isInView ? "visible" : "hidden",
                                    variants: fadeUp,
                                    className: "text-base text-[#2c2c2a] leading-[1.9] mb-6",
                                    style: {
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontWeight: 400
                                    },
                                    children: "My work lives at the edge of craft and concept — from hand-built props and sculptural installations to large-scale physical booths and immersive retail environments. I approach every spatial challenge with the precision of a sculptor and the eye of an editor."
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    custom: 0.5,
                                    initial: "hidden",
                                    animate: isInView ? "visible" : "hidden",
                                    variants: fadeUp,
                                    className: "text-base text-[#8a8880] leading-[1.9]",
                                    style: {
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontWeight: 400,
                                        fontStyle: "italic"
                                    },
                                    children: "Currently seeking a Visual Presentation Associate role where craft, storytelling, and luxury aesthetics converge."
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    custom: 0.6,
                                    initial: "hidden",
                                    animate: isInView ? "visible" : "hidden",
                                    variants: fadeUp,
                                    className: "mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6",
                                    children: [
                                        {
                                            label: "Education",
                                            value: "BFA in Sculpture\nMFA in Art & Technology"
                                        },
                                        {
                                            label: "Focus",
                                            value: "Prop Building\nSpatial & 3D Design"
                                        },
                                        {
                                            label: "Location",
                                            value: "Vancouver, BC\nCanada"
                                        },
                                        {
                                            label: "Availability",
                                            value: "Open to Opportunities\n2026"
                                        }
                                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-[#d6d0c8] pt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] tracking-[0.2em] uppercase text-[#8a8880] mb-2",
                                                    style: {
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        fontWeight: 300
                                                    },
                                                    children: item.label
                                                }, void 0, false, {
                                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-[#1a1a18] leading-relaxed whitespace-pre-line",
                                                    style: {
                                                        fontFamily: "'DM Sans', sans-serif",
                                                        fontWeight: 300
                                                    },
                                                    children: item.value
                                                }, void 0, false, {
                                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, item.label, true, {
                                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            custom: 0.15,
                            initial: "hidden",
                            animate: isInView ? "visible" : "hidden",
                            variants: fadeUp,
                            className: "order-1 lg:order-2 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative aspect-[3/4] bg-[#e8e2d9] overflow-hidden",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80",
                                            alt: "Sooryun Yoon — Visual Presentation Artist",
                                            fill: true,
                                            className: "object-cover grayscale hover:grayscale-0 transition-all duration-700",
                                            sizes: "(max-width: 1024px) 100vw, 50vw"
                                        }, void 0, false, {
                                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-[#1a1a18]/5"
                                        }, void 0, false, {
                                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] tracking-[0.2em] uppercase text-[#8a8880]",
                                            style: {
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontWeight: 300
                                            },
                                            children: "Sooryun Yoon"
                                        }, void 0, false, {
                                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] tracking-[0.2em] uppercase text-[#8a8880]",
                                            style: {
                                                fontFamily: "'DM Sans', sans-serif",
                                                fontWeight: 300
                                            },
                                            children: "Vancouver, BC"
                                        }, void 0, false, {
                                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -bottom-6 -left-6 w-24 h-24 border border-[#d6d0c8] -z-10"
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/About.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(About, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Works
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const EASE = [
    0.22,
    1,
    0.36,
    1
];
const projects = [
    {
        id: 1,
        index: "01",
        category: "Prop Building & Sculpture",
        title: "Crafted Objects, Refined Forms",
        description: "Hand-fabricated sculptural props that blur the line between art object and display fixture. Each piece is built with precision, material intelligence, and an eye for luxury context.",
        tags: [
            "Sculpture",
            "Prop Fabrication",
            "Mixed Media"
        ],
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=85",
        span: "tall"
    },
    {
        id: 2,
        index: "02",
        category: "Spatial Design & Installation",
        title: "Immersive Environments at Scale",
        description: "Large-scale physical booth installations designed for Epispace — transforming raw architecture into curated brand worlds through light, material, and spatial flow.",
        tags: [
            "Spatial Design",
            "Installation Art",
            "Brand Environments"
        ],
        image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=900&q=85",
        span: "wide"
    },
    {
        id: 3,
        index: "03",
        category: "Visual Merchandising & 3D Concepts",
        title: "Three-Dimensional Brand Storytelling",
        description: "Concept-driven VM layouts and 3D spatial arrangements that translate brand narrative into physical retail experience — balancing editorial restraint with commercial impact.",
        tags: [
            "Visual Merchandising",
            "3D Concepts",
            "Retail Design"
        ],
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=85",
        span: "square"
    }
];
function ProjectCard({ project, delay }) {
    _s();
    const [hovered, setHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-80px"
    });
    const aspectMap = {
        tall: "aspect-[3/4]",
        wide: "aspect-[16/10]",
        square: "aspect-[4/3]"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            y: 32
        },
        animate: isInView ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            duration: 0.9,
            delay,
            ease: EASE
        },
        className: "group",
        onMouseEnter: ()=>setHovered(true),
        onMouseLeave: ()=>setHovered(false),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative ${aspectMap[project.span]} overflow-hidden bg-[#e8e2d9] mb-6 cursor-pointer`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: project.image,
                        alt: project.title,
                        fill: true,
                        className: `object-cover transition-all duration-700 ${hovered ? "scale-105 grayscale-0" : "scale-100 grayscale"}`,
                        sizes: "(max-width: 768px) 100vw, 50vw"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            opacity: hovered ? 1 : 0
                        },
                        transition: {
                            duration: 0.4
                        },
                        className: "absolute inset-0 bg-[#1a1a18]/70 flex flex-col justify-end p-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] tracking-[0.25em] uppercase text-[#e8e2d9] mb-3",
                                style: {
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 300
                                },
                                children: project.category
                            }, void 0, false, {
                                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-white leading-snug mb-4",
                                style: {
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontWeight: 300
                                },
                                children: project.description
                            }, void 0, false, {
                                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                                lineNumber: 106,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: project.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[9px] tracking-[0.15em] uppercase border border-[#e8e2d9]/60 text-[#e8e2d9] px-2 py-1",
                                        style: {
                                            fontFamily: "'DM Sans', sans-serif",
                                            fontWeight: 300
                                        },
                                        children: tag
                                    }, tag, false, {
                                        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-5 left-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs tracking-[0.15em] text-white/70",
                            style: {
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 300
                            },
                            children: project.index
                        }, void 0, false, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] tracking-[0.2em] uppercase text-[#8a8880] mb-2",
                                style: {
                                    fontFamily: "'DM Sans', sans-serif",
                                    fontWeight: 300
                                },
                                children: project.category
                            }, void 0, false, {
                                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl md:text-2xl text-[#1a1a18] leading-snug",
                                style: {
                                    fontFamily: "'Cormorant Garamond', serif",
                                    fontWeight: 300
                                },
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                                lineNumber: 145,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            x: hovered ? 4 : 0
                        },
                        transition: {
                            duration: 0.3
                        },
                        className: "mt-1 shrink-0 text-[#8a8880] text-lg",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_s(ProjectCard, "AOusRTfuvXDP6J8FNrwazE4OJyg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ProjectCard;
const sectionVariants = {
    hidden: {
        opacity: 0,
        y: 16
    },
    visible: (delay = 0)=>({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay,
                ease: EASE
            }
        })
};
function Works() {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-100px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "works",
        className: "py-28 md:py-40 bg-[#f4f0eb]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: ref,
                    className: "flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    custom: 0,
                                    initial: "hidden",
                                    animate: isInView ? "visible" : "hidden",
                                    variants: sectionVariants,
                                    className: "text-xs tracking-[0.25em] uppercase text-[#8a8880] mb-6",
                                    style: {
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 300
                                    },
                                    children: "02 — Selected Works"
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                                    custom: 0.1,
                                    initial: "hidden",
                                    animate: isInView ? "visible" : "hidden",
                                    variants: sectionVariants,
                                    className: "text-[clamp(2rem,4vw,3.5rem)] leading-tight text-[#1a1a18]",
                                    style: {
                                        fontFamily: "'Cormorant Garamond', serif",
                                        fontWeight: 300
                                    },
                                    children: [
                                        "Craft, Space,",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "italic",
                                            children: "and Visual Form"
                                        }, void 0, false, {
                                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                                            lineNumber: 205,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                            lineNumber: 183,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                            custom: 0.2,
                            initial: "hidden",
                            animate: isInView ? "visible" : "hidden",
                            variants: sectionVariants,
                            className: "text-sm text-[#8a8880] max-w-xs leading-relaxed",
                            style: {
                                fontFamily: "'Cormorant Garamond', serif",
                                fontWeight: 400,
                                fontStyle: "italic"
                            },
                            children: "A selection of projects spanning sculpture, installation, and commercial visual design."
                        }, void 0, false, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                    lineNumber: 182,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                project: projects[0],
                                delay: 0
                            }, void 0, false, {
                                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                                lineNumber: 224,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-1 md:mt-24",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                project: projects[1],
                                delay: 0.1
                            }, void 0, false, {
                                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                                lineNumber: 228,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:col-span-2 md:max-w-2xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectCard, {
                                project: projects[2],
                                delay: 0.2
                            }, void 0, false, {
                                fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                            lineNumber: 231,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                    lineNumber: 222,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    whileInView: {
                        opacity: 1
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 1,
                        delay: 0.4
                    },
                    className: "mt-20 pt-10 border-t border-[#d6d0c8] text-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-[#8a8880]",
                        style: {
                            fontFamily: "'Cormorant Garamond', serif",
                            fontWeight: 400,
                            fontStyle: "italic"
                        },
                        children: "Additional portfolio materials available upon request."
                    }, void 0, false, {
                        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
            lineNumber: 180,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Works.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, this);
}
_s1(Works, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c1 = Works;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProjectCard");
__turbopack_context__.k.register(_c1, "Works");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/MemoryProject/portfolioca/app/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const EASE = [
    0.22,
    1,
    0.36,
    1
];
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 24
    },
    visible: (delay = 0)=>({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.9,
                delay,
                ease: EASE
            }
        })
};
function Contact() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: "-100px"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        ref: ref,
        className: "bg-[#1a1a18] text-[#faf9f7] py-28 md:py-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                    custom: 0,
                    initial: "hidden",
                    animate: isInView ? "visible" : "hidden",
                    variants: fadeUp,
                    className: "text-xs tracking-[0.25em] uppercase text-[#8a8880] mb-16",
                    style: {
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300
                    },
                    children: "03 — Contact"
                }, void 0, false, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Contact.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    custom: 0.1,
                    initial: "hidden",
                    animate: isInView ? "visible" : "hidden",
                    variants: fadeUp,
                    className: "text-[clamp(2.5rem,6vw,6rem)] leading-tight text-[#faf9f7] mb-16 max-w-4xl",
                    style: {
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 300
                    },
                    children: [
                        "Let's create something",
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "italic text-[#e8e2d9]",
                            children: "beautiful"
                        }, void 0, false, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Contact.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        " together."
                    ]
                }, void 0, true, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Contact.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        scaleX: 0,
                        originX: 0
                    },
                    animate: isInView ? {
                        scaleX: 1
                    } : {},
                    transition: {
                        duration: 1,
                        delay: 0.2,
                        ease: EASE
                    },
                    className: "w-full h-px bg-[#2c2c2a] mb-16"
                }, void 0, false, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Contact.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20",
                    children: [
                        {
                            label: "Email",
                            value: "sooryunca@gmail.com",
                            href: "mailto:sooryunca@gmail.com"
                        },
                        {
                            label: "Phone",
                            value: "672-994-2453",
                            href: "tel:+16729942453"
                        },
                        {
                            label: "Location",
                            value: "Vancouver, BC\nCanada",
                            href: null
                        }
                    ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            custom: 0.3 + i * 0.1,
                            initial: "hidden",
                            animate: isInView ? "visible" : "hidden",
                            variants: fadeUp,
                            className: "border-t border-[#2c2c2a] pt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[10px] tracking-[0.2em] uppercase text-[#8a8880] mb-3",
                                    style: {
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 300
                                    },
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Contact.tsx",
                                    lineNumber: 88,
                                    columnNumber: 15
                                }, this),
                                item.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: item.href,
                                    className: "text-base text-[#e8e2d9] hover:text-white transition-colors duration-300 leading-relaxed",
                                    style: {
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 300
                                    },
                                    children: item.value
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Contact.tsx",
                                    lineNumber: 95,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base text-[#e8e2d9] leading-relaxed whitespace-pre-line",
                                    style: {
                                        fontFamily: "'DM Sans', sans-serif",
                                        fontWeight: 300
                                    },
                                    children: item.value
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Contact.tsx",
                                    lineNumber: 103,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.label, true, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Contact.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Contact.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    custom: 0.6,
                    initial: "hidden",
                    animate: isInView ? "visible" : "hidden",
                    variants: fadeUp,
                    className: "flex flex-col sm:flex-row items-start sm:items-center gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/resume.pdf",
                            download: true,
                            className: "inline-flex items-center gap-4 bg-[#faf9f7] text-[#1a1a18] px-8 py-4 text-xs tracking-[0.2em] uppercase hover:bg-[#e8e2d9] transition-all duration-300",
                            style: {
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 300
                            },
                            children: [
                                "Download Resume",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-base",
                                    children: "↓"
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Contact.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Contact.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "mailto:sooryunca@gmail.com",
                            className: "text-xs tracking-[0.2em] uppercase text-[#8a8880] hover:text-[#faf9f7] transition-colors duration-300 border-b border-[#2c2c2a] hover:border-[#8a8880] pb-0.5",
                            style: {
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 300
                            },
                            children: "Send a Message →"
                        }, void 0, false, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Contact.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Contact.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Contact.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Contact.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
_s(Contact, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/GitHub/MemoryProject/portfolioca/app/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/MemoryProject/portfolioca/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Footer() {
    const year = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-[#1a1a18] border-t border-[#2c2c2a] py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row items-center justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] tracking-[0.2em] uppercase text-[#8a8880]",
                    style: {
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300
                    },
                    children: [
                        "© ",
                        year,
                        " Sooryun Yoon. All rights reserved."
                    ]
                }, void 0, true, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Footer.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-[10px] tracking-[0.2em] uppercase text-[#8a8880]",
                    style: {
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300
                    },
                    children: "Visual Presentation & Spatial Design"
                }, void 0, false, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Footer.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-6",
                    children: [
                        "Email",
                        "LinkedIn"
                    ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$MemoryProject$2f$portfolioca$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: item === "Email" ? "mailto:sooryunca@gmail.com" : "#",
                            className: "text-[10px] tracking-[0.2em] uppercase text-[#8a8880] hover:text-[#faf9f7] transition-colors duration-300",
                            style: {
                                fontFamily: "'DM Sans', sans-serif",
                                fontWeight: 300
                            },
                            children: item
                        }, item, false, {
                            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Footer.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Footer.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Footer.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/GitHub/MemoryProject/portfolioca/app/components/Footer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=GitHub_MemoryProject_portfolioca_app_components_0wu7e9n._.js.map