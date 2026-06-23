import { o as __toESM } from "../_runtime.mjs";
import { t as hero } from "./routes-B9kAWa_j.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import "../_libs/firebase.mjs";
import { _ as Camera, a as Shirt, c as Mic, d as Instagram, f as Image, g as Clock, h as Coffee, i as Sparkles, l as MessageCircle, m as Eye, n as TrendingUp, o as Play, p as Heart, r as Star, s as Package, t as Zap, u as Mail, v as ArrowRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-VOgejNkQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Snapchat_926854658_default = "/assets/Snapchat-926854658-BbEWZTpW.jpg";
var Snapchat_666437094_default = "/assets/Snapchat-666437094-DEl8LIdD.jpg";
var _20260418_213558_default = "/assets/20260418_213558-BjYQuoF2.jpg";
var _20260407_233824_default = "/assets/20260407_233824-CkXcCYCc.jpg";
var Snapchat_670641198_default = "/assets/Snapchat-670641198-CSouZXcw.jpg";
var _20251231_185953_default = "/assets/20251231_185953-C4KbObGJ.jpg";
var IMG_20260417_WA0160_default = "/assets/IMG-20260417-WA0160-fEKPMfmT.jpg";
var IMG_20251225_WA0171_default = "/assets/IMG-20251225-WA0171-DmAwPlzo.jpg";
var fashion1 = Snapchat_926854658_default.url;
var fashion2 = Snapchat_666437094_default.url;
var food1 = _20260418_213558_default.url;
var food2 = _20260407_233824_default.url;
var beauty1 = Snapchat_670641198_default.url;
var beauty2 = _20251231_185953_default.url;
var lifestyle1 = IMG_20260417_WA0160_default.url;
var lifestyle2 = IMG_20251225_WA0171_default.url;
var services = [
	{
		icon: Package,
		title: "Product Demos",
		desc: "Clear, aesthetic walk-throughs that show the product in action."
	},
	{
		icon: Sparkles,
		title: "Unboxing Videos",
		desc: "Cinematic first-impressions that feel personal and premium."
	},
	{
		icon: Mic,
		title: "Voiceover Content",
		desc: "Warm, scripted voiceovers paired with visual storytelling."
	},
	{
		icon: Camera,
		title: "Aesthetic Showcases",
		desc: "Editorial product photography and short-form b-roll."
	},
	{
		icon: Shirt,
		title: "Fashion Try-Ons",
		desc: "Faceless outfit reels, flat lays and styling transitions."
	},
	{
		icon: Coffee,
		title: "Food & Café Content",
		desc: "Mouth-watering close-ups and lifestyle food stories."
	},
	{
		icon: Star,
		title: "Testimonial Style",
		desc: "Authentic-feeling reviews scripted around your product."
	},
	{
		icon: TrendingUp,
		title: "Trend-Based Reels",
		desc: "On-trend audio, transitions and formats for IG & TikTok."
	},
	{
		icon: Image,
		title: "Photography",
		desc: "Soft-lit, on-brand stills you can reuse across channels."
	}
];
var portfolio = [
	{
		img: fashion1,
		tag: "Fashion",
		title: "Mirror OOTD"
	},
	{
		img: food1,
		tag: "Food",
		title: "Café Table Flatlay"
	},
	{
		img: beauty1,
		tag: "Lifestyle",
		title: "Bougainvillea Nights"
	},
	{
		img: lifestyle1,
		tag: "Lifestyle",
		title: "Golden Staircase"
	},
	{
		img: fashion2,
		tag: "Fashion",
		title: "Winter Layers"
	},
	{
		img: food2,
		tag: "Food",
		title: "Café Hola Pickup"
	},
	{
		img: beauty2,
		tag: "Interior",
		title: "Palace Dining"
	},
	{
		img: lifestyle2,
		tag: "Lifestyle",
		title: "Rooftop Evenings"
	}
];
var stats = [
	{
		icon: Heart,
		label: "Authentic Content",
		value: "100%"
	},
	{
		icon: Zap,
		label: "Trend-Aware",
		value: "Daily"
	},
	{
		icon: Eye,
		label: "Aesthetic Eye",
		value: "Soft"
	},
	{
		icon: Clock,
		label: "Fast Replies",
		value: "<24h"
	}
];
var packages = [{
	name: "Single Reel",
	price: "Let's chat",
	desc: "One short-form UGC video for your product — perfect to test the vibe.",
	features: [
		"1 × 15–30s UGC video",
		"1 styled still photo",
		"1 round of revisions",
		"Raw + edited files"
	],
	featured: false
}, {
	name: "Mini Bundle",
	price: "Let's chat",
	desc: "A small set of content to start building your feed.",
	features: [
		"2 × 15–30s UGC videos",
		"3 styled still photos",
		"Trending audio styling",
		"1 round of revisions"
	],
	featured: true
}];
function useReveal() {
	(0, import_react.useEffect)(() => {
		const els = document.querySelectorAll(".reveal");
		const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: .12 });
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
}
function Home() {
	useReveal();
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setLoaded(true), 600);
		return () => clearTimeout(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background text-foreground overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${loaded ? "opacity-0 pointer-events-none" : "opacity-100"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-display text-4xl tracking-wide text-primary",
						children: "Lumière"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-3 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-pulse" })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portfolio, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Packages, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Nav() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed top-0 inset-x-0 z-50 px-4 sm:px-8 pt-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "glass rounded-full max-w-5xl mx-auto px-5 sm:px-7 py-3 flex items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "font-display text-xl tracking-wide text-primary",
					children: "Lumière"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden md:flex items-center gap-7 text-sm text-muted-foreground",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#about",
							className: "hover:text-foreground transition",
							children: "About"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#services",
							className: "hover:text-foreground transition",
							children: "Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#portfolio",
							className: "hover:text-foreground transition",
							children: "Portfolio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#packages",
							className: "hover:text-foreground transition",
							children: "Packages"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contact",
					className: "text-xs sm:text-sm rounded-full bg-primary text-primary-foreground px-4 py-2 hover:bg-primary/90 transition",
					children: "Work with me"
				})
			]
		})
	});
}
function FloatingBlob({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `pointer-events-none absolute rounded-full blur-3xl ${className}` });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "relative min-h-screen flex items-center pt-28 pb-20 px-5 sm:px-8 overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingBlob, { className: "w-[420px] h-[420px] bg-blush/50 -top-20 -left-20 animate-float-slow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingBlob, { className: "w-[360px] h-[360px] bg-nude/40 top-1/3 -right-20 animate-float" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingBlob, { className: "w-[280px] h-[280px] bg-accent/40 bottom-0 left-1/3 animate-float-slow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-accent" }), " Faceless UGC · 2026"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-primary",
							children: [
								"Creating ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "italic text-accent-foreground/80",
									children: "scroll-stopping"
								}),
								" UGC that converts."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-base sm:text-lg text-muted-foreground max-w-md",
							children: "Fashion · Food · Beauty · Lifestyle · Product Content — soft, editorial, and made to feel like the algorithm wrote it for your brand."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#portfolio",
								className: "group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm hover:bg-primary/90 transition shadow-soft",
								children: ["View Portfolio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4 transition group-hover:translate-x-1" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact",
								className: "inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm text-primary hover:bg-card transition",
								children: "Work With Me"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-[460px] sm:h-[560px] reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-blush rounded-[3rem]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero,
							alt: "Aesthetic perfume bottle on blush silk — Lumière Studio UGC sample",
							width: 1080,
							height: 1600,
							className: "absolute right-0 top-6 w-[70%] h-[88%] object-cover rounded-[2rem] shadow-soft animate-float"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: beauty2,
							alt: "Pink lipstick and compact mirror UGC styling",
							width: 800,
							height: 1e3,
							loading: "lazy",
							className: "absolute left-0 bottom-0 w-[48%] h-[42%] object-cover rounded-[1.5rem] shadow-soft animate-float-slow"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute left-2 top-8 glass rounded-2xl px-4 py-3 text-xs animate-float-slow",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-base text-primary",
								children: "Aesthetic ✦"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted-foreground",
								children: "Editorial UGC"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute right-4 bottom-6 glass rounded-2xl px-4 py-3 text-xs animate-float",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-display text-base text-primary",
								children: "Conversion ↑"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-muted-foreground",
								children: "Hooks that work"
							})]
						})
					]
				})]
			})
		]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "relative py-24 sm:py-32 px-5 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mx-auto text-center reveal",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
					children: "About"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-4 font-display text-4xl sm:text-5xl text-primary",
					children: [
						"A faceless creator with an eye for the ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
							className: "italic",
							children: "soft & cinematic"
						}),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-muted-foreground leading-relaxed text-lg",
					children: "I'm an independent UGC creator building authentic, relatable content that helps small brands grow engagement, trust and conversions. Faceless by choice — so the product, the styling and the story stay center frame. Think aesthetic showcases, unboxings, soft testimonials, lifestyle moments and trend-led reels."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-3 gap-3 text-xs sm:text-sm",
					children: [
						"Authentic",
						"Editorial",
						"Trend-aware"
					].map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass rounded-2xl py-4",
						children: w
					}, w))
				})
			]
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "relative py-24 sm:py-32 px-5 sm:px-8 bg-gradient-soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
						children: "Services"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl sm:text-5xl text-primary",
						children: "What I create"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground max-w-xl mx-auto",
						children: "A flexible menu of UGC formats — mix and match to fit your launch, campaign or content calendar."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal glass rounded-3xl p-7 hover:translate-y-[-4px] transition duration-500",
					style: { transitionDelay: `${i * 40}ms` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-12 h-12 rounded-2xl bg-accent/40 flex items-center justify-center text-primary",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "w-5 h-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-5 font-display text-2xl text-primary",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground leading-relaxed",
							children: s.desc
						})
					]
				}, s.title))
			})]
		})
	});
}
function Portfolio() {
	const [filter, setFilter] = (0, import_react.useState)("All");
	const tags = [
		"All",
		"Fashion",
		"Food",
		"Beauty",
		"Lifestyle"
	];
	const items = portfolio.filter((p) => filter === "All" || p.tag === filter);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "portfolio",
		className: "relative py-24 sm:py-32 px-5 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
							children: "Portfolio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 font-display text-4xl sm:text-5xl text-primary",
							children: "Selected work"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted-foreground max-w-xl mx-auto",
							children: "A starter portfolio of styled mock shoots — the aesthetic and quality you can expect when we collaborate."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex flex-wrap justify-center gap-2 reveal",
					children: tags.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setFilter(t),
						className: `rounded-full px-4 py-1.5 text-xs sm:text-sm transition ${filter === t ? "bg-primary text-primary-foreground" : "glass text-muted-foreground hover:text-foreground"}`,
						children: t
					}, t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5",
					children: items.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "group relative reveal overflow-hidden rounded-[1.75rem] aspect-[4/5] shadow-soft",
						style: { transitionDelay: `${i * 50}ms` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.img,
								alt: `${p.title} — ${p.tag} UGC content sample`,
								width: 800,
								height: 1e3,
								loading: "lazy",
								className: "absolute inset-0 w-full h-full object-cover transition duration-[1200ms] group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/0 to-transparent opacity-70 group-hover:opacity-90 transition" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute top-3 left-3 glass rounded-full px-3 py-1 text-[10px] uppercase tracking-widest text-primary",
								children: p.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								"aria-label": `Play ${p.title}`,
								className: "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-14 h-14 rounded-full glass flex items-center justify-center text-primary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-5 h-5 ml-0.5" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "absolute bottom-3 left-3 right-3 text-primary-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-lg drop-shadow",
									children: p.title
								})
							})
						]
					}, p.title + i))
				})
			]
		})
	});
}
function Why() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-24 sm:py-32 px-5 sm:px-8 bg-gradient-soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center reveal",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
					children: "Why work with me"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 font-display text-4xl sm:text-5xl text-primary",
					children: "Made to feel effortless."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-2 lg:grid-cols-5 gap-4",
				children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "reveal glass rounded-3xl p-6 text-center",
					style: { transitionDelay: `${i * 60}ms` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "w-5 h-5 mx-auto text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 font-display text-3xl text-primary",
							children: s.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-xs text-muted-foreground",
							children: s.label
						})
					]
				}, s.label))
			})]
		})
	});
}
function Packages() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "packages",
		className: "relative py-24 sm:py-32 px-5 sm:px-8 bg-gradient-soft",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
						children: "Let's collab"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl sm:text-5xl text-primary",
						children: "Open for first collabs"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground max-w-xl mx-auto",
						children: "I'm just starting out and building my portfolio — happy to create content in exchange for products or a small budget. DM me on Instagram to chat."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto",
				children: packages.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `reveal rounded-3xl p-8 flex flex-col ${p.featured ? "bg-primary text-primary-foreground shadow-soft scale-[1.02]" : "glass"}`,
					style: { transitionDelay: `${i * 80}ms` },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `text-xs uppercase tracking-[0.25em] ${p.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`,
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 font-display text-3xl",
							children: p.price
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-2 text-sm ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`,
							children: p.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 space-y-2.5 text-sm flex-1",
							children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `mt-1.5 w-1.5 h-1.5 rounded-full ${p.featured ? "bg-accent" : "bg-primary"}` }), f]
							}, f))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: `mt-8 rounded-full text-center py-3 text-sm transition ${p.featured ? "bg-accent text-primary hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/90"}`,
							children: ["Book ", p.name]
						})
					]
				}, p.name))
			})]
		})
	});
}
function Contact() {
	const [sent, setSent] = (0, import_react.useState)(false);
	const formRef = (0, import_react.useRef)(null);
	const onSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.currentTarget);
		const name = data.get("name");
		const email = data.get("email");
		const body = `Hi! I'd like to collaborate.%0A%0AName: ${name}%0ABrand: ${data.get("brand")}%0AEmail: ${email}%0A%0A${data.get("message")}`;
		window.location.href = `mailto:1studio.lumieree@gmail.com?subject=UGC%20Collaboration%20Inquiry&body=${body}`;
		setSent(true);
		formRef.current?.reset();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative py-24 sm:py-32 px-5 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-[0.3em] text-muted-foreground",
						children: "Contact"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl sm:text-5xl text-primary",
						children: "Let's create something soft & selling."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-muted-foreground",
						children: "Tell me about your brand and the kind of content you have in mind. I usually reply within 24 hours."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "mailto:1studio.lumieree@gmail.com",
								className: "glass rounded-2xl px-5 py-4 flex items-center gap-3 hover:bg-card transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm",
									children: "1studio.lumieree@gmail.com"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://instagram.com/1studio.lumiere",
								target: "_blank",
								rel: "noreferrer",
								className: "glass rounded-2xl px-5 py-4 flex items-center gap-3 hover:bg-card transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "w-4 h-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm",
									children: "@1studio.lumiere"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "https://wa.me/?text=Hi%20Lumi%C3%A8re%2C%20I%27d%20like%20to%20collaborate",
								target: "_blank",
								rel: "noreferrer",
								className: "glass rounded-2xl px-5 py-4 flex items-center gap-3 hover:bg-card transition",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm",
									children: "WhatsApp"
								})]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				ref: formRef,
				onSubmit,
				className: "reveal glass rounded-3xl p-7 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "name",
							placeholder: "Your name",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "brand",
							placeholder: "Brand"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "email",
						type: "email",
						placeholder: "Email",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						placeholder: "Tell me about your product and goals…",
						rows: 5,
						required: true,
						className: "w-full rounded-2xl bg-background/60 border border-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "w-full rounded-full bg-primary text-primary-foreground py-3 text-sm hover:bg-primary/90 transition",
						children: sent ? "Opening your email…" : "Send Collaboration Request"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground text-center",
						children: "This opens your email app with the message pre-filled."
					})
				]
			})]
		})
	});
}
function Input(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		className: "w-full rounded-full bg-background/60 border border-border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ring transition"
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "px-5 sm:px-8 pb-10 pt-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-6xl mx-auto glass rounded-3xl px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-display text-xl text-primary",
					children: "Lumière Studio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-muted-foreground text-xs",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" · Faceless UGC, made with care."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3 text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:1studio.lumieree@gmail.com",
						"aria-label": "Email",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-4 h-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "https://instagram.com/1studio.lumiere",
						target: "_blank",
						rel: "noreferrer",
						"aria-label": "Instagram",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "w-4 h-4" })
					})]
				})
			]
		})
	});
}
//#endregion
export { Home as component };
