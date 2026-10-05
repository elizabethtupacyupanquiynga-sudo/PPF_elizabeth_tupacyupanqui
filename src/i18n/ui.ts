export const defaultLang = "es" as const;

export const languages = ["es", "en"] as const;

export type Lang = (typeof languages)[number];

export interface NavTexts {
	brand: string;
	main: string;
	skip: string;
	about: string;
	menu: string;
}

export interface HeroTexts {
	eyebrow: string;
	title: string;
	description: string;
	ctaPrimary: string;
	ctaSecondary: string;
	imageLabel: string;
}

export interface ButtonsTexts {
	visitStoryblok: string;
	github: string;
	removeAttribution: string;
}

export interface SectionBlock {
	title: string;
	description: string;
	items: string[];
}

export interface DocsCard {
	title: string;
	description: string;
	linkText: string;
	imageLabel: string;
}

export interface Deal {
	title: string;
	description: string;
	price: string;
	imageLabel: string;
}

export interface FooterHour {
	day: string;
	time: string;
}

export interface FooterTexts {
	description: string;
	address: string;
	email: string;
	phoneDisplay: string;
	phoneHref: string;
	informationTitle: string;
	foodTitle: string;
	openingHoursTitle: string;
	home: string;
	docs: string;
	aboutUs: string;
	rights: string;
	poweredBy: string;
	foodLinks: string[];
	hours: FooterHour[];
}

export interface LangSelectorTexts {
	label: string;
	es: string;
	en: string;
}

export interface UITexts {
	meta: {
		title: string;
		description: string;
	};
	nav: NavTexts;
	hero: HeroTexts;
	buttons: ButtonsTexts;
	sections: {
		flexibleMenu: SectionBlock & { linkText: string; imageLabel: string };
		visualEditing: {
			title: string;
			paragraphs: string[];
			imageLabel: string;
		};
		lightningFast: SectionBlock & { imageLabel: string };
		docsFeatures: {
			title: string;
			cards: DocsCard[];
		};
		openSource: {
			title: string;
			description: string;
			items: string[];
			imageLabel: string;
			attributionTitle: string;
			attributionText: string;
		};
		tastyDeals: {
			title: string;
			subtitle: string;
		};
	};
	deals: Deal[];
	footer: FooterTexts;
	langSelector: LangSelectorTexts;
}

export const ui: Record<Lang, UITexts> = {
	es: {
		meta: {
			title: "Restaurante Ejemplo",
			description: "Página de ejemplo para un restaurante acogedor.",
		},
		nav: {
			brand: "Casa Ejemplo",
			main: "Navegación principal",
			skip: "Saltar al contenido",
			about: "Nosotros",
			menu: "Carta",
		},
		hero: {
			eyebrow: "Cocina de temporada en el centro",
			title: "Sabores que cuentan historias",
			description:
				"Restaurante familiar de ejemplo con platos de temporada y postres caseros.",
			ctaPrimary: "Conócenos",
			ctaSecondary: "Ver carta",
			imageLabel: "Imagen principal del restaurante de ejemplo",
		},
		buttons: {
			visitStoryblok: "Visitar web de ejemplo",
			github: "Ver código",
			removeAttribution: "Reservar mesa",
		},
		sections: {
			flexibleMenu: {
				title: "Carta flexible",
				description: "Platos de ejemplo que cambian cada semana.",
				items: [
					"Entrantes de ejemplo para compartir",
					"Plato del día de ejemplo",
					"Postre casero de ejemplo",
				],
				linkText: "Ver carta",
				imageLabel: "Fotografía de plato de ejemplo",
			},
			visualEditing: {
				title: "Edición visual sencilla",
				paragraphs: [
					"Texto de ejemplo sobre cómo se actualizaría la carta.",
					"Otro párrafo de ejemplo para explicar la edición de contenidos.",
				],
				imageLabel: "Vista previa del editor de ejemplo",
			},
			lightningFast: {
				title: "Servicio rápido",
				description: "Texto de ejemplo sobre el servicio del restaurante.",
				items: [
					"Atención cercana de ejemplo",
					"Cocina rápida de ejemplo",
					"Reserva sencilla de ejemplo",
				],
				imageLabel: "Salón del restaurante de ejemplo",
			},
			docsFeatures: {
				title: "Docs y Novedades",
				cards: [
					{
						title: "Cómo reservar",
						description: "Guía de ejemplo para reservar mesa en pocos pasos.",
						linkText: "Leer guía de ejemplo",
						imageLabel: "Portada guía de reservas de ejemplo",
					},
					{
						title: "Nuestra cocina",
						description: "Ideas de ejemplo para adaptar la carta a tu gusto.",
						linkText: "Leer guía de ejemplo",
						imageLabel: "Portada guía de cocina de ejemplo",
					},
					{
						title: "Eventos privados",
						description: "Opciones de ejemplo para celebraciones y grupos.",
						linkText: "Leer guía de ejemplo",
						imageLabel: "Portada guía de eventos de ejemplo",
					},
				],
			},
			openSource: {
				title: "Cocina abierta y cercana",
				description:
					"Texto de ejemplo sobre nuestra cocina a la vista y el trato familiar.",
				items: [
					"Ingredientes frescos de ejemplo",
					"Recetas tradicionales de ejemplo",
					"Ambiente familiar de ejemplo",
				],
				imageLabel: "Hamburguesa de ejemplo",
				attributionTitle: "¿Celebras algo con nosotros?",
				attributionText:
					"Texto de ejemplo para reservas de grupos y celebraciones.",
			},
			tastyDeals: {
				title: "Promociones sabrosas",
				subtitle: "Ejemplos de promociones semanales del restaurante.",
			},
		},
		deals: [
			{
				title: "Tapas para dos",
				description: "Ejemplo: tapas variadas los domingos.",
				price: "12 €",
				imageLabel: "Plato de tapas de ejemplo",
			},
			{
				title: "Lunes de vermut",
				description: "Ejemplo: vermut y tapa los lunes.",
				price: "8 €",
				imageLabel: "Bebida de ejemplo del lunes",
			},
			{
				title: "Jueves de postre",
				description: "Ejemplo: postre gratis los jueves.",
				price: "5 €",
				imageLabel: "Postre de ejemplo del jueves",
			},
		],
		footer: {
			description: "Restaurante ficticio creado como ejemplo para la landing.",
			address: "Calle Ejemplo 123, 28000 Madrid (dirección ficticia)",
			email: "hola@ejemplo.invalid",
			phoneDisplay: "+34 000 000 000",
			phoneHref: "tel:+34000000000",
			informationTitle: "Información",
			foodTitle: "Comida",
			openingHoursTitle: "Horario",
			home: "Inicio",
			docs: "Docs y Novedades",
			aboutUs: "Sobre nosotros",
			rights: "© 2026 Restaurante Ejemplo",
			poweredBy: "Hecho con Astro",
			foodLinks: [
				"Carta completa (ejemplo)",
				"Menú del día (ejemplo)",
				"Postres caseros (ejemplo)",
			],
			hours: [
				{ day: "Lun", time: "Cerrado" },
				{ day: "Mar", time: "12:00 - 23:00" },
				{ day: "Mié", time: "12:00 - 23:00" },
				{ day: "Jue", time: "12:00 - 23:00" },
				{ day: "Vie", time: "12:00 - 00:00" },
				{ day: "Sáb", time: "12:00 - 00:00" },
				{ day: "Dom", time: "12:00 - 23:00" },
			],
		},
		langSelector: {
			label: "Idioma",
			es: "Español",
			en: "English",
		},
	},
	en: {
		meta: {
			title: "Sample Restaurant",
			description: "Sample page for a cozy restaurant.",
		},
		nav: {
			brand: "Sample House",
			main: "Main navigation",
			skip: "Skip to content",
			about: "About",
			menu: "Menu",
		},
		hero: {
			eyebrow: "Seasonal cooking downtown",
			title: "Flavors that tell stories",
			description:
				"Sample family restaurant with seasonal dishes and homemade desserts.",
			ctaPrimary: "About us",
			ctaSecondary: "View menu",
			imageLabel: "Sample restaurant hero image",
		},
		buttons: {
			visitStoryblok: "Visit sample website",
			github: "View code",
			removeAttribution: "Book a table",
		},
		sections: {
			flexibleMenu: {
				title: "Flexible menu",
				description: "Sample dishes changing every week.",
				items: [
					"Sample starters to share",
					"Sample dish of the day",
					"Sample homemade dessert",
				],
				linkText: "View menu",
				imageLabel: "Sample dish photograph",
			},
			visualEditing: {
				title: "Simple visual editing",
				paragraphs: [
					"Sample text about how the menu would be updated.",
					"Another sample paragraph explaining content editing.",
				],
				imageLabel: "Sample editor preview",
			},
			lightningFast: {
				title: "Fast service",
				description: "Sample text about the restaurant service.",
				items: [
					"Sample friendly service",
					"Sample quick kitchen",
					"Sample easy booking",
				],
				imageLabel: "Sample restaurant dining room",
			},
			docsFeatures: {
				title: "Docs & News",
				cards: [
					{
						title: "How to book",
						description: "Sample guide to booking a table in a few steps.",
						linkText: "Read sample guide",
						imageLabel: "Sample booking guide cover",
					},
					{
						title: "Our kitchen",
						description: "Sample ideas to adapt the menu to your taste.",
						linkText: "Read sample guide",
						imageLabel: "Sample kitchen guide cover",
					},
					{
						title: "Private events",
						description: "Sample options for celebrations and groups.",
						linkText: "Read sample guide",
						imageLabel: "Sample events guide cover",
					},
				],
			},
			openSource: {
				title: "Open and friendly kitchen",
				description:
					"Sample text about our open kitchen and family-style service.",
				items: [
					"Sample fresh ingredients",
					"Sample traditional recipes",
					"Sample family atmosphere",
				],
				imageLabel: "Sample burger",
				attributionTitle: "Celebrating something with us?",
				attributionText: "Sample text for group bookings and celebrations.",
			},
			tastyDeals: {
				title: "Tasty deals",
				subtitle: "Sample weekly restaurant promotions.",
			},
		},
		deals: [
			{
				title: "Tapas for two",
				description: "Sample: mixed tapas on Sundays.",
				price: "$12",
				imageLabel: "Sample tapas dish",
			},
			{
				title: "Vermouth Monday",
				description: "Sample: vermouth and tapa on Mondays.",
				price: "$8",
				imageLabel: "Sample Monday drink",
			},
			{
				title: "Dessert Thursday",
				description: "Sample: free dessert on Thursdays.",
				price: "$5",
				imageLabel: "Sample Thursday dessert",
			},
		],
		footer: {
			description: "Fictional restaurant created as a landing sample.",
			address: "123 Sample Street, 28000 Madrid (fictional address)",
			email: "hello@example.invalid",
			phoneDisplay: "+34 000 000 000",
			phoneHref: "tel:+34000000000",
			informationTitle: "Information",
			foodTitle: "Food",
			openingHoursTitle: "Opening hours",
			home: "Home",
			docs: "Docs & News",
			aboutUs: "About us",
			rights: "© 2026 Sample Restaurant",
			poweredBy: "Built with Astro",
			foodLinks: [
				"Full menu (sample)",
				"Daily special (sample)",
				"Homemade desserts (sample)",
			],
			hours: [
				{ day: "Mon", time: "Closed" },
				{ day: "Tue", time: "12:00 - 23:00" },
				{ day: "Wed", time: "12:00 - 23:00" },
				{ day: "Thu", time: "12:00 - 23:00" },
				{ day: "Fri", time: "12:00 - 00:00" },
				{ day: "Sat", time: "12:00 - 00:00" },
				{ day: "Sun", time: "12:00 - 23:00" },
			],
		},
		langSelector: {
			label: "Language",
			es: "Español",
			en: "English",
		},
	},
};
