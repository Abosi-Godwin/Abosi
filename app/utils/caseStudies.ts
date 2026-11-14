import { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
    {
        id: "sproute",
        slug: "sproute-ai-whatsapp-prospecting",
        title: "Sproute",
        subtitle: "AI-Powered WhatsApp Lead Prospecting SaaS",
        category: "SaaS Application",
        status: "In Progress",
        year: "2026",

        shortDescription:
            "Sproute helps freelancers find leads and manage WhatsApp outreach with AI-assisted messaging, tone-matched replies, and automated follow-ups.",

        overview:
            "Sproute is an AI-powered prospecting tool built for freelancers who rely on WhatsApp to find and close clients. Instead of manually searching for leads and drafting messages one by one, users get AI-assisted outreach: draft messages, reply handling across multiple tones, and automated follow-up sequences that still sound like a real person. The product is designed to remove the busywork from cold outreach while keeping every message human.",

        problem: {
            summary:
                "Freelancers spend hours finding leads and writing outreach messages, and most of that effort gets lost to silence or generic-sounding follow-ups.",
            points: [
                "Manually searching for prospects is slow and inconsistent",
                "Writing outreach messages from scratch takes time and often reads as generic",
                "Follow-ups get forgotten or feel robotic when automated",
                "Handling replies across many conversations at once is hard to manage"
            ]
        },

        solution: {
            summary:
                "Sproute combines AI-assisted messaging with a structured outreach flow so users can prospect and follow up without losing the human touch.",
            points: [
                "AI-assisted lead discovery and message drafting",
                "Reply handling across nine common scenarios, each with tone-specific templates",
                "Automated no-reply follow-up sequences",
                "A WhatsApp-style chat helper for managing conversations",
                "Subscription billing handled through Paystack"
            ]
        },

        features: [
            {
                title: "Outreach Flow",
                details: [
                    "No-reply follow-up sequence for unanswered messages",
                    "Reply templates covering nine distinct scenarios",
                    "Tone-specific variants: casual, formal, and pidgin",
                    "Chat helper with WhatsApp-style message bubbles"
                ]
            },
            {
                title: "AI-Assisted Messaging",
                details: [
                    "Message generation powered by Gemini through serverless functions",
                    "Centralized inline prompts for consistent output",
                    "API keys handled server-side for security"
                ]
            },
            {
                title: "Subscriptions & Billing",
                details: [
                    "Paystack inline checkout for subscriptions",
                    "Serverless endpoint for payment verification",
                    "Plan status reflected in real time across the app"
                ]
            },
            {
                title: "Analytics",
                details: [
                    "Usage tracking with PostHog",
                    "Performance monitoring with Vercel Analytics"
                ]
            }
        ],

        uxDecisions: [
            {
                decision: "Tone-specific reply templates",
                reason: "A single generic tone does not fit every lead, so users can match the conversation style that fits the client."
            },
            {
                decision: "Open location search instead of hardcoded cities",
                reason: "Removing hardcoded Nigerian cities and geocoding suffixes lets any user worldwide prospect in their own area."
            },
            {
                decision: "Server-side API keys",
                reason: "Moving Gemini and search API keys server-side closed a security gap found during development."
            },
            {
                decision: "WhatsApp-style chat interface",
                reason: "A familiar chat layout reduces friction for users already used to WhatsApp."
            }
        ],

        techStack: {
            frontend: ["Next.js 15", "React", "TypeScript"],
            styling: ["Tailwind CSS v4"],
            stateManagement: ["TanStack Query v5", "Zustand"],
            backend: ["Supabase", "Serverless functions"],
            aiIntegration: ["Gemini AI"],
            payments: ["Paystack"],
            deployment: ["Vercel"]
        },

        challengesAndLearnings: [
            "Structuring reply templates so nine scenarios feel distinct rather than repetitive",
            "Moving API keys server-side after identifying a security vulnerability",
            "Designing follow-up sequences that stay human rather than reading as automated",
            "Building a location search flexible enough for a worldwide audience"
        ],

        outcomes: {
            summary:
                "Sproute is actively being built and refined, with core outreach and billing systems in place ahead of a wider launch.",
            highlights: [
                "Demonstrates end-to-end SaaS thinking: product, billing, and AI integration",
                "Shows security-conscious backend design after catching and fixing a vulnerability",
                "Built for a worldwide audience, not just a single market"
            ]
        },

        links: {
            live: "https://sproute-landing.vercel.app/",
            github: "https://github.com/Abosi-Godwin/sproute.git"
        },

        cta: ["View Live App", "Read Other Case Studies"],

        tags: [
            "Next.js",
            "React",
            "TypeScript",
            "Supabase",
            "Tailwind CSS",
            "Paystack",
            "AI Integration",
            "SaaS"
        ]
    },
    {
        id: "trexpenser",
        slug: "trexpenser-expense-savings-tracker",
        title: "Trexpenser",
        subtitle: "Personal Expense & Savings Tracker",
        category: "Web Application",
        status: "Completed",
        year: "2026",

        shortDescription:
            "Trexpenser is a personal finance web app that helps users track income, expenses, and savings goals with clarity and control.",

        overview:
            "Trexpenser is a personal expense and savings tracking application built to solve a common problem: people know they earn money, but don’t know where it goes. Instead of overwhelming users with complex accounting rules, the app focuses on simple money flow, flexible savings logic, and real-time feedback. It is designed for everyday users who want control over their finances without spreadsheets or finance jargon.",

        problem: {
            summary:
                "Most expense trackers are either too simple or too complex, making them hard to sustain long-term.",
            points: [
                "Users don’t consistently track income and expenses",
                "Savings goals feel abstract and difficult to maintain",
                "Many financial apps enforce rigid rules that don’t reflect real-life behavior"
            ]
        },

        solution: {
            summary:
                "Trexpenser combines flexibility with structure to guide users without controlling them.",
            points: [
                "Explicit separation between income and expenses",
                "Manual and automatic savings options",
                "Savings progress calculated from real activity",
                "Clear visual feedback using charts and summaries"
            ]
        },

        features: [
            {
                title: "Income & Expense Management",
                details: [
                    "Single form for adding transactions",
                    "Users select whether an entry is income or expenditure",
                    "Clear categorization for spending analysis",
                    "Real-time updates to totals and balances"
                ]
            },
            {
                title: "Savings Goals System",
                details: [
                    "Multiple savings goals supported",
                    "Manual savings method (user-controlled deposits)",
                    "Automatic savings method (percentage deducted from every income)",
                    "No initial deposit required for automatic savings",
                    "Maximum of 4 active savings goals to encourage focus"
                ]
            },
            {
                title: "Visual Insights",
                details: [
                    "Charts for income vs expenses",
                    "Savings progress visualization",
                    "Focus on clarity over financial complexity",
                    "Quick financial health assessment at a glance"
                ]
            },
            {
                title: "Authentication & User Data",
                details: [
                    "Secure authentication system",
                    "Row level security",
                    "User-specific data isolation",
                    "Expenses, savings, and records scoped per user",
                    "Real-time data updates using Supabase database"
                ]
            }
        ],

        uxDecisions: [
            {
                decision: "No rigid budgeting rules",
                reason: "The app reflects real spending behavior instead of enforcing idealized budgets."
            },
            {
                decision: "Manual savings progress calculation",
                reason: "Improves transparency and helps users understand how their actions affect savings."
            },
            {
                decision: "Limit on active savings goals",
                reason: "Prevents over-planning and encourages realistic financial focus."
            },
            {
                decision: "Mobile-first layout",
                reason: "Designed for frequent daily use, not occasional financial reviews."
            }
        ],

        techStack: {
            frontend: ["React", "Next.js"],
            styling: ["Tailwind CSS"],
            stateManagement: ["Context API"],
            backend: ["Supabase"],
            dataVisualization: ["Chart libraries"],
            deployment: ["Vercel"]
        },

        challengesAndLearnings: [
            "Managing real-time Firestore queries efficiently",
            "Handling Firestore Timestamp to JavaScript Date conversion",
            "Designing flexible savings logic that feels natural",
            "Structuring application state for scalability"
        ],

        outcomes: {
            summary:
                "Trexpenser evolved from a basic expense tracker into a complete personal finance tool focused on clarity, discipline, and usability.",
            highlights: [
                "Demonstrates product thinking beyond UI",
                "Shows real-world data modeling and state management",
                "Balances technical decisions with user experience"
            ]
        },

        links: {
            live: "https://trexpenser.vercel.app/",
            github: "https://github.com/Abosi-Godwin/Trexpenser.git"
        },

        cta: ["View Live App", "View Source Code", "Read Other Case Studies"],

        tags: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "Supabase",
            "Finance App",
            "Product Design",
            "State Management"
        ]
    },
    {
        id: "leeslagos",
        slug: "leeslagos-fashion-ecommerce",
        title: "LeesLagos",
        subtitle: "Perfume Store with Checkout & Order Tracking",
        category: "E-commerce Web App",
        status: "Completed",
        year: "2025",

        shortDescription:
            "A perfume and accessories store on React and Firebase, with Paystack checkout, server-side payment verification, order tracking and PDF receipts by email.",

        overview:
            "LeesLagos is a perfume and accessories store built end to end with React and Firebase. Shoppers browse the catalogue, save items to a cart or wishlist, sign in, and pay in naira through Paystack. Every payment is checked on the server before an order is saved, a PDF receipt is emailed to the customer, and the order can be tracked from placement to delivery. It covers the full path a real store needs, not just a storefront.",

        problem: {
            summary:
                "Small online sellers often take orders in chat, confirm payments by hand and answer 'where is my order?' one message at a time.",
            points: [
                "Manual payment confirmation is slow and easy to get wrong",
                "Customers get no receipt and no way to see where an order is",
                "Trusting a payment popup alone lets unpaid orders slip through",
                "Orders scattered across chats are hard to look up later"
            ]
        },

        solution: {
            summary:
                "LeesLagos gives the store a complete buying flow: browse, pay, get a verified order, receive a receipt and follow delivery.",
            points: [
                "Paystack checkout that takes payment in naira",
                "Serverless verification that confirms each payment before an order exists",
                "Orders saved in Firestore against the customer's account",
                "Automatic PDF receipt and tracking link sent by email",
                "A five-step tracker customers can open any time"
            ]
        },

        features: [
            {
                title: "Catalogue and Product Pages",
                details: [
                    "Fragrances and accessories with prices in naira",
                    "Product pages load through a React Router data loader",
                    "Stock status, brand tag, colour and size on every product",
                    "Similar products suggested from the same category"
                ]
            },
            {
                title: "Cart and Wishlist",
                details: [
                    "Cart built on a reducer and Context API with a live subtotal",
                    "Cart and wishlist saved in localStorage, so a refresh loses nothing",
                    "Add to cart, or use Buy Now to jump straight to checkout",
                    "Navbar badges show how many items are saved"
                ]
            },
            {
                title: "Accounts and Protected Routes",
                details: [
                    "Email and password sign-up and login with Firebase Auth",
                    "Google sign-in on the login page",
                    "Checkout, orders and tracking sit behind route guards",
                    "Name and email prefilled at checkout from the account"
                ]
            },
            {
                title: "Paystack Checkout",
                details: [
                    "Billing form validated with React Hook Form",
                    "Paystack popup handles card entry, so card details never touch the app",
                    "Each order gets a unique order ID, with items and address sent as transaction metadata",
                    "Cancelled payments are caught and the customer is told straight away"
                ]
            },
            {
                title: "Server-Side Payment Verification",
                details: [
                    "A Vercel serverless function checks every payment with Paystack",
                    "The Paystack secret key stays on the server, never in the browser",
                    "Failed transactions and underpaid amounts are rejected",
                    "Only a verified payment creates the order and clears the cart"
                ]
            },
            {
                title: "Order Tracking",
                details: [
                    "Look up an order by ID, from recent orders, or through the email link",
                    "Five steps: Order Received, Processing, Packaging, Shipped, Delivered",
                    "Overview with customer details, price summary, delivery info and items",
                    "Status comes from a field on the Firestore order, so one update moves the tracker"
                ]
            },
            {
                title: "PDF Receipts and Email",
                details: [
                    "Receipt PDF generated on the server with react-pdf",
                    "Sent through SendGrid as soon as the payment is confirmed",
                    "Email carries a Track Your Order link for that exact order",
                    "Sent in the background so the customer never waits on the email"
                ]
            },
            {
                title: "Order History and Support",
                details: [
                    "My Orders lists the signed-in user's orders, newest first",
                    "Item thumbnails, total, status and a one-tap Track Order button",
                    "WhatsApp, phone and email support links on the tracking page",
                    "Clear screens for orders not found and for customers with no orders yet"
                ]
            }
        ],

        uxDecisions: [
            {
                decision: "Browse first, sign in at checkout",
                reason: "Guests can explore, fill a cart and save a wishlist without friction. An account is only asked for when money is about to change hands."
            },
            {
                decision: "Create the order only after payment is verified",
                reason: "The order list never holds unpaid or half-finished orders, so what the store sees is what was actually paid for."
            },
            {
                decision: "A receipt email that links straight to the tracker",
                reason: "Customers land on the right order in one tap instead of copying an ID by hand."
            },
            {
                decision: "Five plain-language tracking steps",
                reason: "Order Received to Delivered, with a short sentence under the current step, so nobody has to decode a status code."
            },
            {
                decision: "Naira across the whole flow",
                reason: "Catalogue, cart, payment and receipt all use the same currency customers actually pay in."
            }
        ],

        techStack: {
            frontend: ["React 19", "Vite", "React Router 7"],
            styling: ["Tailwind CSS", "Motion", "Swiper"],
            stateAndForms: [
                "Context API",
                "useReducer",
                "TanStack Query",
                "React Hook Form"
            ],
            backend: [
                "Firebase Auth",
                "Cloud Firestore",
                "Vercel Serverless Functions"
            ],
            payments: ["Paystack"],
            receipts: ["React PDF", "SendGrid"],
            deployment: ["Vercel"]
        },

        challengesAndLearnings: [
            "Not trusting the browser for payment status: the popup's success callback is only a signal, so the order is created after a server call confirms the transaction with Paystack",
            "Sequencing the post-payment steps in the right order: verify, save the order, clear the cart, then send the receipt without blocking the page",
            "Generating a PDF receipt inside a serverless function and attaching it to a SendGrid email",
            "Keeping cart and wishlist in step with localStorage through reducers without losing items on refresh",
            "Modelling an order as a single Firestore document keyed by order ID, so tracking is one read"
        ],

        outcomes: {
            summary:
                "LeesLagos covers the whole path from browsing to delivery: a shopper can find a product, pay in naira, get a verified order and a PDF receipt by email, then follow the order until it arrives.",
            highlights: [
                "Payments confirmed on the server before any order is saved",
                "PDF receipt and tracking link emailed automatically after payment",
                "Order history and tracking tied to each customer's account",
                "Built end to end: catalogue, auth, payments, database, serverless functions and email"
            ]
        },

        links: {
            live: "https://leeslagos.vercel.app/",
            github: "https://github.com/Abosi-Godwin/leeslagos.git"
        },

        cta: ["View Live Store", "View Source Code", "Read Other Case Studies"],

        tags: [
            "React",
            "Vite",
            "Firebase",
            "Firestore",
            "Paystack",
            "E-commerce",
            "Order Tracking",
            "Serverless Functions",
            "Tailwind CSS",
            "Payment Integration"
        ]
    },
    {
        id: "sureplug-autos",
        slug: "sureplug-autos-motor-parts",
        title: "SurePlugAutos",
        subtitle: "Motor Parts & Auto Services Landing Page",
        category: "Business Website",
        status: "Completed",
        year: "2025",

        shortDescription:
            "A high-performance landing page for a Nigerian auto parts business, built to drive inquiries and establish brand credibility with a fast, modern web presence.",

        overview:
            "SurePlug Autos is a landing page built for a Nigerian motor parts and auto services business. The goal was simple but important: give a local business a professional digital presence that builds trust with potential customers, communicates services clearly, and drives real inquiries. Most auto businesses in Nigeria rely entirely on word of mouth and social media, and SurePlug needed a web presence that would set them apart and hold up on any device.",

        problem: {
            summary:
                "Local auto businesses in Nigeria lack credible web presence, making it hard for potential customers to find, trust, or contact them online.",
            points: [
                "No professional website to establish credibility",
                "Customers can't easily discover or verify the business online",
                "Services and contact information are scattered across social platforms",
                "Competitors with websites win trust by default"
            ]
        },

        solution: {
            summary:
                "A fast, focused landing page that communicates trust, lists services clearly, and makes it effortless for customers to get in touch.",
            points: [
                "Clean hero section with a strong value proposition",
                "Clear services breakdown for easy scanning",
                "Prominent contact and inquiry CTAs throughout",
                "Optimized for mobile where most Nigerian users browse",
                "Framer Motion animations for a premium brand feel"
            ]
        },

        features: [
            {
                title: "Hero & Brand Introduction",
                details: [
                    "Strong headline communicating the business value immediately",
                    "Animated entrance using Framer Motion",
                    "Primary CTA driving users to contact or inquire",
                    "Mobile-optimized layout above the fold"
                ]
            },
            {
                title: "Services Section",
                details: [
                    "Clear breakdown of auto parts and service offerings",
                    "Icon-supported service cards for fast scanning",
                    "Designed to answer customer questions without a call",
                    "Structured for easy content updates"
                ]
            },
            {
                title: "Trust & Credibility Layer",
                details: [
                    "Business positioning copy that builds confidence",
                    "Consistent visual identity across all sections",
                    "Professional typography and spacing system",
                    "Designed to compete with larger, established brands"
                ]
            },
            {
                title: "Contact & Inquiry Flow",
                details: [
                    "Multiple contact touchpoints across the page",
                    "WhatsApp CTA for the Nigerian market",
                    "Clear call-to-action hierarchy",
                    "Frictionless path from landing to inquiry"
                ]
            }
        ],

        uxDecisions: [
            {
                decision: "WhatsApp as primary contact CTA",
                reason: "WhatsApp is the dominant business communication channel in Nigeria, and it removes friction for the target audience."
            },
            {
                decision: "Services over features",
                reason: "Auto customers need to know what you offer, not how you operate. Services are front and center."
            },
            {
                decision: "Minimal page sections",
                reason: "A landing page should convert, not educate. Every section earns its place by moving the user toward contact."
            },
            {
                decision: "Framer Motion for animations",
                reason: "Subtle entrance animations elevate the perceived quality of the brand without hurting performance."
            }
        ],

        techStack: {
            frontend: ["Next.js 15", "TypeScript"],
            styling: ["Tailwind CSS v4"],
            animation: ["Framer Motion v12"],
            deployment: ["Vercel"]
        },

        challengesAndLearnings: [
            "Designing for a Nigerian audience with varied device capabilities and connection speeds",
            "Balancing animation richness with page performance on mobile",
            "Communicating business credibility through design alone without relying on reviews or social proof",
            "Working with Tailwind CSS v4 and its new configuration approach"
        ],

        outcomes: {
            summary:
                "SurePlug Autos now has a professional web presence that sets them apart from competitors and gives customers a trustworthy first impression.",
            highlights: [
                "Demonstrates ability to build for real Nigerian SME clients",
                "Shows conversion-focused landing page thinking",
                "Built with the latest Next.js 15 and Tailwind v4 stack"
            ]
        },

        links: {
            live: "https://sureplugautos.vercel.app/",
            github: null
        },

        cta: ["View Live Site", "Read Other Case Studies"],

        tags: [
            "Next.js 15",
            "TypeScript",
            "Tailwind CSS v4",
            "Framer Motion",
            "Business Website",
            "Nigerian SME",
            "Landing Page"
        ]
    },

    {
        id: "softp",
        slug: "softp-creative-portfolio",
        title: "SOFT-P",
        subtitle: "Multidisciplinary Artist Portfolio",
        category: "Portfolio Website",
        status: "Completed",
        year: "2026",

        shortDescription:
            "A cinematic portfolio website for a Nigerian actor, music artist, and 2D animator, featuring Cloudinary media delivery, Framer Motion animations, and a Firebase-powered bookings system.",

        overview:
            "SOFT-P is a personal portfolio website built for Paulinus Odinaka, a Theatre Arts graduate working across acting, music, and 2D animation. The challenge was creating a single digital space that could hold three distinct creative disciplines without feeling cluttered or unfocused. The result is a cinematic, media-rich experience that presents each craft with the weight it deserves, while giving industry contacts a clear path to book or collaborate.",

        problem: {
            summary:
                "Creative professionals with multiple disciplines struggle to present all their work in one place without diluting their identity or confusing visitors.",
            points: [
                "Acting, music, and animation require very different presentation formats",
                "No central booking or contact system for industry inquiries",
                "Social media profiles fragment the portfolio across platforms",
                "Lack of a professional web presence limits industry opportunities"
            ]
        },

        solution: {
            summary:
                "A unified cinematic portfolio that gives each discipline its own space while maintaining a consistent brand identity and a clear path to bookings.",
            points: [
                "Discipline-specific sections with tailored media presentation",
                "Cloudinary for optimized video and image delivery",
                "Firebase-powered bookings system for industry inquiries",
                "Framer Motion for cinematic transitions between sections",
                "Single cohesive identity across all three creative areas"
            ]
        },

        features: [
            {
                title: "Cinematic Hero & Brand Identity",
                details: [
                    "Full-screen hero with atmospheric design",
                    "Framer Motion entrance animations for dramatic effect",
                    "Strong visual identity that reflects the artist's persona",
                    "Immediate communication of multidisciplinary range"
                ]
            },
            {
                title: "Acting Showcase",
                details: [
                    "Performance reels delivered via Cloudinary",
                    "Credits and production history display",
                    "Optimized video loading for smooth playback",
                    "Designed for casting directors and producers"
                ]
            },
            {
                title: "Music Section",
                details: [
                    "Audio and visual media integration",
                    "Discography and release presentation",
                    "Cloudinary-powered media delivery",
                    "Clean layout that keeps focus on the music"
                ]
            },
            {
                title: "Bookings System",
                details: [
                    "Firebase-powered inquiry and bookings form",
                    "Real-time form submissions stored in Firestore",
                    "Clear categorization by discipline for context",
                    "Professional booking flow for industry contacts"
                ]
            }
        ],

        uxDecisions: [
            {
                decision: "Cinematic pacing over fast navigation",
                reason: "Creative portfolios should feel like an experience, not a resume. Slower transitions build atmosphere and respect."
            },
            {
                decision: "Cloudinary for all media",
                reason: "Video and image assets for a creative portfolio are large. Cloudinary handles optimization and delivery so performance doesn't suffer."
            },
            {
                decision: "Unified identity across disciplines",
                reason: "Separating three disciplines into different sites would dilute the personal brand. One cohesive site tells a fuller story."
            },
            {
                decision: "Firebase for bookings over a third-party form tool",
                reason: "Storing submissions in Firestore gives the client direct ownership of their inquiry data without depending on external SaaS tools."
            }
        ],

        techStack: {
            frontend: ["Next.js", "TypeScript"],
            styling: ["Tailwind CSS"],
            animation: ["Framer Motion"],
            media: ["Cloudinary"],
            backend: ["Firebase", "Firestore"],
            deployment: ["Vercel"]
        },

        challengesAndLearnings: [
            "Designing a unified visual identity that works across three very different creative disciplines",
            "Optimizing video delivery for users on slower Nigerian mobile connections",
            "Building a bookings flow that feels professional without overcomplicating the UX",
            "Managing Cloudinary asset organization for a media-heavy site"
        ],

        outcomes: {
            summary:
                "SOFT-P gives Paulinus Odinaka a professional, cinematic home for his entire creative body of work, one URL that represents everything he does.",
            highlights: [
                "Demonstrates ability to build client sites beyond standard business pages",
                "Shows media-heavy architecture with Cloudinary and Firebase",
                "Proves design range, from finance apps to creative portfolios"
            ]
        },

        links: {
            live: "https://softp.vercel.app",
            github: null
        },

        cta: ["View Live Portfolio", "Read Other Case Studies"],

        tags: [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Firebase",
            "Cloudinary",
            "Creative Portfolio",
            "Client Project"
        ]
    },

    {
        id: "uniform",
        slug: "uniform-headless-shopify-storefront",
        title: "Uniform",
        subtitle: "Headless Shopify Storefront",
        category: "Headless E-commerce Storefront",
        status: "Completed",
        year: "2026",

        shortDescription:
            "Uniform is a headless Shopify storefront built with Next.js, with product browsing, search and customer login through Shopify's Customer Account API.",

        overview:
            "Uniform is a headless Shopify storefront built with Next.js. The shopping experience lives in its own codebase instead of a Shopify theme, while Shopify still handles the commerce side. Visitors can browse products, search the catalogue, log in with a real customer account and view their profile. Product data comes from mock.shop, Shopify's public demo catalogue, and customer accounts come from a Shopify development store through the Customer Account API. I built it to prove the full headless flow, including login, instead of stopping at a product grid.",

        problem: {
            summary:
                "A Shopify theme limits how much control a business has over speed, layout and behavior, but going headless means rebuilding the features customers expect, starting with accounts.",
            points: [
                "Theme-based stores limit how far the shopping experience can be customised",
                "Many headless demos stop at a product grid and never handle customer accounts",
                "Customers expect to log in and see their own profile",
                "Search has to work inside the custom storefront, with no theme to rely on"
            ]
        },

        solution: {
            summary:
                "Uniform pairs a custom Next.js frontend with Shopify's APIs, so the storefront controls the experience while Shopify keeps handling products and customer accounts.",
            points: [
                "A Next.js storefront that renders its own product and search pages",
                "Product browsing backed by catalogue data from mock.shop",
                "Customer login through Shopify's Customer Account API",
                "A profile page for signed-in customers",
                "Deployed on Vercel with login working on the live site"
            ]
        },

        features: [
            {
                title: "Product Browsing",
                details: [
                    "Product listing and product detail pages",
                    "Catalogue data loaded from mock.shop",
                    "Storefront layout built without a Shopify theme"
                ]
            },
            {
                title: "Search",
                details: [
                    "Dedicated search page for the product catalogue",
                    "Results rendered inside the storefront",
                    "Search built into the app instead of relying on a theme"
                ]
            },
            {
                title: "Customer Accounts",
                details: [
                    "Login through Shopify's Customer Account API",
                    "Real customer accounts from a Shopify development store",
                    "Login working on the deployed Vercel site"
                ]
            },
            {
                title: "Customer Profile",
                details: [
                    "Profile page for signed-in customers",
                    "Account details read from the Customer Account API"
                ]
            }
        ],

        uxDecisions: [
            {
                decision: "Real accounts alongside demo products",
                reason: "mock.shop supplies a full catalogue without stocking a store, while the development store's accounts keep login behaving the way it would for a real shop."
            },
            {
                decision: "Login through Shopify's own account system",
                reason: "Customers sign in with Shopify, so the storefront never has to handle their passwords itself."
            },
            {
                decision: "A dedicated search page",
                reason: "A search page of its own gives customers a direct way to find products without clicking through collections."
            },
            {
                decision: "A profile page for signed-in customers",
                reason: "It gives returning customers a clear place to see their account, a feature headless demos often skip."
            }
        ],

        techStack: {
            frontend: ["Next.js", "React"],
            commerce: [
                "Shopify Customer Account API",
                "Shopify development store",
                "mock.shop product data"
            ],
            deployment: ["Vercel"]
        },

        challengesAndLearnings: [
            "Getting Customer Account API login working on the live Vercel deployment",
            "Combining mock.shop product data with real customer accounts from a separate Shopify development store",
            "Learning how the Storefront API and the Customer Account API each cover a different part of a headless store",
            "Designing search and profile pages without a theme to start from"
        ],

        outcomes: {
            summary:
                "Uniform is a working headless storefront demo that covers product browsing, search and real customer login.",
            highlights: [
                "Covers the full headless customer flow, including login, not just a product grid",
                "Uses Shopify's Customer Account API with real customer accounts",
                "Direct proof of the headless Shopify and Next.js work I offer to ecommerce clients"
            ]
        },

        links: {
            live: "https://headless-demo-gray.vercel.app",
            github: null
        },

        cta: ["View Live Storefront", "Read Other Case Studies"],

        tags: [
            "Shopify",
            "Headless Commerce",
            "Next.js",
            "Customer Account API",
            "Ecommerce"
        ]
    },
    {
        id: "chirp",
        slug: "chirp-landing-page",
        title: "Chirp Landing Page",
        subtitle: "Frontend Mentor Challenge",
        category: "Frontend Challenge",
        status: "Completed",
        year: "2025",

        shortDescription:
            "A pixel-perfect recreation of the Chirp landing page from Frontend Mentor, built with clean HTML and CSS and responsive across screen sizes.",

        overview:
            "Chirp is a Frontend Mentor landing page challenge. The brief supplies a design and asks for an exact rebuild. I built it with plain HTML and CSS, with no framework or component library, to practise the fundamentals that every larger project depends on: semantic structure, accurate spacing and typography, and a layout that holds from phone to desktop. The finished page is deployed on Netlify.",

        problem: {
            summary:
                "A design file shows one screen size in one state. Rebuilding it faithfully means making every spacing, type and layout decision in code, and making the page hold up on screens the design never shows.",
            points: [
                "Spacing, type sizes and colours have to match the provided design closely",
                "The layout has to adapt from small phones to wide desktops",
                "Plain HTML and CSS leave no framework to lean on, so every layout decision is manual",
                "Markup should stay readable and maintainable, not just look right"
            ]
        },

        solution: {
            summary:
                "Build the page section by section from semantic HTML, then style it with CSS until it matches the design at every breakpoint.",
            points: [
                "Semantic HTML elements for each section of the page",
                "CSS written by hand, with no framework or component library",
                "Layout and spacing matched to the design values",
                "Responsive breakpoints so the page works on mobile and desktop",
                "Deployed on Netlify as a live reference"
            ]
        },

        features: [
            {
                title: "Design Accuracy",
                details: [
                    "Spacing and typography matched to the provided design",
                    "Colours and sizing taken from the design values",
                    "Sections kept in the same order and hierarchy as the brief"
                ]
            },
            {
                title: "Responsive Layout",
                details: [
                    "Layout adapts between mobile and desktop screens",
                    "Content reflows instead of shrinking",
                    "Images and text stay inside their containers at every width"
                ]
            },
            {
                title: "Clean Markup",
                details: [
                    "Semantic elements used where they fit",
                    "A consistent, readable structure that is easy to maintain",
                    "No JavaScript needed to render the page"
                ]
            },
            {
                title: "Deployment",
                details: [
                    "Published on Netlify",
                    "Linked from this portfolio as a live reference"
                ]
            }
        ],

        uxDecisions: [
            {
                decision: "Semantic HTML first",
                reason: "Meaningful elements give the page a clear outline for screen readers and search engines, and make the code easier to read later."
            },
            {
                decision: "Plain CSS instead of a framework",
                reason: "Writing the styles by hand builds a real understanding of layout, spacing and the cascade, which carries over to every framework."
            },
            {
                decision: "Responsive behaviour treated as part of the build",
                reason: "Handling several screen sizes while writing the layout avoids rework once the desktop version is done."
            },
            {
                decision: "Match the design before adding anything",
                reason: "The goal of the challenge is accuracy, so extras that change the design were left out."
            }
        ],

        techStack: {
            markup: ["HTML5"],
            styling: ["CSS3"],
            deployment: ["Netlify"]
        },

        challengesAndLearnings: [
            "Matching a design closely using only HTML and CSS",
            "Keeping the layout stable across a wide range of screen sizes",
            "Writing structure that stays readable without a framework to organise it",
            "Seeing how much small spacing and type decisions change the finished look"
        ],

        outcomes: {
            summary:
                "Chirp is a completed practice build that strengthened my HTML and CSS fundamentals, the base that my React and Next.js work sits on.",
            highlights: [
                "Shows I can turn a design brief into accurate, responsive code",
                "Written with plain HTML and CSS, no framework",
                "Published and live on Netlify"
            ]
        },

        links: {
            live: "https://abosi-godwin-chirp-website.netlify.app/",
            github: null
        },

        cta: ["View Live Page", "Read Other Case Studies"],

        tags: [
            "HTML",
            "CSS",
            "Frontend Mentor",
            "Responsive Design",
            "Landing Page"
        ]
    },
    {
        id: "elvanex",
        slug: "elvanex-corporate-website",
        title: "Elvanex",
        subtitle: "Digital Marketing Corporate Website",
        category: "Corporate Website",
        status: "Completed",
        year: "2025",

        shortDescription:
            "A corporate website for a digital marketing agency, built with Next.js and Tailwind CSS for fast loading, solid SEO foundations and a responsive layout.",

        overview:
            "Elvanex is a corporate website for a digital marketing agency. A marketing agency's own site is its first sample of work, so the build had to be fast, clear about what the agency offers and easy to find in search. I built it with Next.js and Tailwind CSS, with performance, SEO and responsive design as the three priorities. It is a practice build, made to sharpen how I structure a multi-section business website.",

        problem: {
            summary:
                "Marketing agencies sell their own expertise, so a slow, unclear or hard-to-find website works against them before a client ever calls.",
            points: [
                "A visitor should understand what the agency does within seconds",
                "Slow pages lose visitors, and many people browse on phones",
                "A site that search engines cannot read clearly will not bring in organic leads",
                "A corporate site has to look credible and consistent on every page"
            ]
        },

        solution: {
            summary:
                "Elvanex uses Next.js for speed and search-friendly pages, with Tailwind CSS keeping the design consistent and responsive.",
            points: [
                "Next.js pages that load quickly and render content search engines can read",
                "A clear page structure that explains the agency's services and how to get in touch",
                "SEO groundwork: page titles, descriptions and a proper heading hierarchy",
                "A Tailwind CSS design system for consistent spacing, type and colour",
                "A responsive layout from small phones to large screens"
            ]
        },

        features: [
            {
                title: "Page Structure",
                details: [
                    "Corporate site organised into clear sections",
                    "Navigation that keeps services and contact easy to reach",
                    "Consistent layout across pages"
                ]
            },
            {
                title: "Performance",
                details: [
                    "Server-rendered content for a quicker first load",
                    "Lean styling with Tailwind CSS",
                    "Built on Next.js and deployed on Vercel"
                ]
            },
            {
                title: "SEO Foundations",
                details: [
                    "Unique page titles and meta descriptions",
                    "Semantic headings that outline each page",
                    "Crawlable content rendered on the server"
                ]
            },
            {
                title: "Responsive Design",
                details: [
                    "Layout that adapts from mobile to desktop widths",
                    "Readable type and spacing on small screens",
                    "Navigation that works on phones"
                ]
            }
        ],

        uxDecisions: [
            {
                decision: "Lead with what the agency does",
                reason: "Visitors decide fast, so the first screen should state the agency's value before asking for anything."
            },
            {
                decision: "One consistent design language",
                reason: "Shared spacing, colours and type make a corporate site feel trustworthy and keep later pages easy to add."
            },
            {
                decision: "SEO treated as part of the build",
                reason: "An agency site that does not rank undermines its own pitch, so titles, descriptions and headings were set up alongside the design."
            },
            {
                decision: "Mobile layout given equal weight",
                reason: "Many prospects will first see the site on a phone, so small screens had to read as well as desktop."
            }
        ],

        techStack: {
            frontend: ["Next.js", "React"],
            styling: ["Tailwind CSS"],
            seo: ["Page metadata", "Semantic HTML"],
            deployment: ["Vercel"]
        },

        challengesAndLearnings: [
            "Structuring a multi-section corporate site so it stays consistent as it grows",
            "Setting up page-level SEO metadata correctly in Next.js",
            "Balancing visual polish against load speed",
            "Making one design system hold up from mobile to desktop"
        ],

        outcomes: {
            summary:
                "Elvanex is a completed practice build that tested how I structure, optimise and style a full business website.",
            highlights: [
                "Applies SEO and performance thinking to a corporate site from the first build",
                "Shows consistent, responsive design with Tailwind CSS",
                "Relevant to the service-business websites I build for clients"
            ]
        },

        links: {
            live: "https://elvanex.vercel.app",
            github: null
        },

        cta: ["View Live Site", "Read Other Case Studies"],

        tags: [
            "Next.js",
            "TailwindCSS",
            "Corporate Website",
            "SEO",
            "Responsive Design"
        ]
    },
    {
        id: "solly-store",
        slug: "solly-store-ecommerce",
        title: "Solly Store",
        subtitle: "E-commerce Storefront",
        category: "E-commerce Website",
        status: "Completed",
        year: "2025",

        shortDescription:
            "An e-commerce store with a product catalogue, category filtering, cart and checkout flow across electronics, fashion and accessories, built with React.",

        overview:
            "Solly Store is an e-commerce practice build that covers the core shopping journey from browsing to checkout. The catalogue spans electronics, fashion and accessories, and customers can narrow products by category, add items to a cart and move through a checkout flow. I built it with React and Tailwind CSS to practise the state-heavy parts of a store: cart behaviour, filtering and a flow that guides a customer from product to order.",

        problem: {
            summary:
                "A store has to do more than list products. Customers need to find items quickly, trust the cart and get through checkout without friction.",
            points: [
                "A mixed catalogue of electronics, fashion and accessories is hard to browse without filtering",
                "The cart has to stay accurate as items are added, changed and removed",
                "Every extra step in checkout loses customers",
                "The store has to work on phones, where much of the shopping happens"
            ]
        },

        solution: {
            summary:
                "Solly Store gives customers a straightforward path from catalogue to order, with category filtering to find products and a cart that reflects every change.",
            points: [
                "A product catalogue spanning electronics, fashion and accessories",
                "Category filtering to narrow the catalogue",
                "A cart that updates as items change",
                "A checkout flow that takes the customer from cart to order",
                "A responsive layout built with Tailwind CSS"
            ]
        },

        features: [
            {
                title: "Product Catalogue",
                details: [
                    "Products grouped across electronics, fashion and accessories",
                    "Clear product cards with the details customers compare",
                    "Responsive grid that adapts to screen width"
                ]
            },
            {
                title: "Category Filtering",
                details: [
                    "Filter the catalogue by category",
                    "Easy switching between product groups",
                    "Filters keep the catalogue manageable as it grows"
                ]
            },
            {
                title: "Shopping Cart",
                details: [
                    "Add products from the catalogue",
                    "Change quantities and remove items",
                    "Totals reflect the current contents of the cart"
                ]
            },
            {
                title: "Checkout",
                details: [
                    "Checkout flow from cart to placing an order",
                    "Order details collected in one place",
                    "Clear steps so customers know what comes next"
                ]
            }
        ],

        uxDecisions: [
            {
                decision: "Category filtering across a mixed catalogue",
                reason: "With three very different product groups, filtering helps customers reach what they want without scanning everything."
            },
            {
                decision: "A cart that stays in sync with the catalogue",
                reason: "Customers should be able to trust what is in the cart at every point in the journey."
            },
            {
                decision: "A short path to checkout",
                reason: "Fewer steps between cart and order means fewer abandoned purchases."
            },
            {
                decision: "A mobile-friendly layout",
                reason: "Online shoppers often browse on phones, so the catalogue and cart had to work on small screens."
            }
        ],

        techStack: {
            frontend: ["React"],
            styling: ["Tailwind CSS"],
            deployment: ["Vercel"]
        },

        challengesAndLearnings: [
            "Keeping cart state consistent across the catalogue and checkout",
            "Building category filtering that works across a mixed product range",
            "Designing a checkout flow with as few steps as possible",
            "Structuring components so products, cart and checkout stay separate"
        ],

        outcomes: {
            summary:
                "Solly Store is a completed practice build covering the core of an online store: catalogue, filtering, cart and checkout.",
            highlights: [
                "Covers the full shopping journey from browsing to checkout",
                "Practice with the cart and filtering logic every store needs",
                "Groundwork for the Shopify and headless storefronts I build for clients"
            ]
        },

        links: {
            live: "https://solly-store.vercel.app",
            github: null
        },

        cta: ["View Live Store", "Read Other Case Studies"],

        tags: [
            "React",
            "TailwindCSS",
            "E-commerce",
            "Shopping Cart",
            "Frontend"
        ]
    },
    {
        id: "visyoned",
        slug: "visyoned-eye-care-agency",
        title: "Visyoned",
        subtitle: "Premium Eye Care Agency Website",
        category: "Business Website",
        status: "Completed",
        year: "2025",

        shortDescription:
            "A premium eye care agency website pairing clinical credibility with modern design, built with Next.js and Tailwind CSS.",

        overview:
            "Visyoned is a website for a premium eye care agency. Eye care brands sit between two worlds: the clinical side, where visitors need to trust the care they receive, and the style side, where glasses and eyewear are a personal choice. The design brings both together with a clean, modern look that still reads as professional healthcare. I built it with Next.js and Tailwind CSS as a practice build in designing for a healthcare audience.",

        problem: {
            summary:
                "Eye care websites tend to feel either cold and clinical or like a plain retail page, while visitors want both reassurance and style.",
            points: [
                "Healthcare visitors need to trust a provider before they make contact",
                "Style-conscious visitors want care and eyewear options that suit them",
                "A cluttered page makes it hard to find the next step",
                "The site has to be easy to use for visitors of all ages, including on phones"
            ]
        },

        solution: {
            summary:
                "Visyoned combines a premium visual style with clear, calm content, so visitors feel looked after and can find personalized vision care quickly.",
            points: [
                "A modern, premium visual direction that still looks professional",
                "Content centred on finding vision care that fits each person",
                "Clear calls to action that guide visitors to the next step",
                "Clean spacing and readable type for visitors of all ages",
                "A responsive layout built with Tailwind CSS"
            ]
        },

        features: [
            {
                title: "Brand & Visual Direction",
                details: [
                    "Premium look with clinical clarity",
                    "Consistent colour and type across the page",
                    "Generous spacing that keeps the page calm"
                ]
            },
            {
                title: "Care & Services Presentation",
                details: [
                    "Vision care options explained in plain language",
                    "Content focused on personalized solutions",
                    "Information grouped so visitors find what applies to them"
                ]
            },
            {
                title: "Clear Next Steps",
                details: [
                    "Calls to action placed along the page",
                    "A simple route to getting in touch",
                    "Nothing competing with the main action"
                ]
            },
            {
                title: "Responsive Layout",
                details: [
                    "Layout that adapts from mobile to desktop",
                    "Readable type sizes for visitors of all ages",
                    "Touch-friendly spacing on small screens"
                ]
            }
        ],

        uxDecisions: [
            {
                decision: "A calm, uncluttered layout",
                reason: "Healthcare visitors are often looking for reassurance, so a quiet layout builds more trust than a busy one."
            },
            {
                decision: "Premium styling kept professional",
                reason: "The look had to feel stylish without losing the credibility an eye care provider needs."
            },
            {
                decision: "Plain, direct wording",
                reason: "Visitors are choosing care for themselves, so the copy needs to be easy to understand."
            },
            {
                decision: "One clear action at a time",
                reason: "A single prominent next step keeps a landing page focused and easier to act on."
            }
        ],

        techStack: {
            frontend: ["Next.js", "React"],
            styling: ["Tailwind CSS"],
            deployment: ["Vercel"]
        },

        challengesAndLearnings: [
            "Designing for a healthcare audience, where trust matters as much as style",
            "Balancing a premium visual style with readability and clarity",
            "Structuring a landing page so one clear action stays in focus",
            "Making a single design hold up from phones to large screens"
        ],

        outcomes: {
            summary:
                "Visyoned is a completed practice build in designing a trustworthy, stylish website for a healthcare brand.",
            highlights: [
                "Shows I can adapt design tone to a specific industry",
                "Balances premium aesthetics with healthcare credibility",
                "Relevant to clinics, agencies and other service businesses that need to build trust online"
            ]
        },

        links: {
            live: "https://visyoned.vercel.app",
            github: null
        },

        cta: ["View Live Site", "Read Other Case Studies"],

        tags: [
            "Next.js",
            "TailwindCSS",
            "Healthcare",
            "Landing Page",
            "Responsive Design"
        ]
    },
    
];
