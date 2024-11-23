import forms from '@tailwindcss/forms';
import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
    	extend: {
    		fontFamily: {
    			sans: ['var(--font-roboto)', ...defaultTheme.fontFamily.sans],
    			title: 'var(--font-inter)'
    		},
    		colors: {
    			azul: {
    				'50': '#f3f7f8',
    				'100': '#dfebee',
    				'200': '#c3d8de',
    				'300': '#99bcc7',
    				'400': '#6897a8',
    				'500': '#4d7c8d',
    				'600': '#436777',
    				'700': '#395360',
    				'800': '#364954',
    				'900': '#313f48',
    				'950': '#1d282f'
    			},
    			vermelho: {
    				'50': '#fff1f2',
    				'100': '#ffdfe1',
    				'200': '#ffc4c7',
    				'300': '#ff9ba0',
    				'400': '#ff6169',
    				'500': '#ff303a',
    				'600': '#f1111c',
    				'700': '#cb0a13',
    				'800': '#b00d15',
    				'900': '#8a1218',
    				'950': '#4c0307'
    			},
    			neutro: {
    				'50': '#f5f5f6',
    				'100': '#e6e6e7',
    				'200': '#cfd0d2',
    				'300': '#adaeb3',
    				'400': '#84868c',
    				'500': '#696b71',
    				'600': '#5b5c61',
    				'700': '#4d4d51',
    				'800': '#434347',
    				'900': '#3b3b3e',
    				'950': '#252527'
    			},
    			verde: '#A0C340',
    			blueberry: '#4C7EFF',
    			crayola: '#FFC24C',
    			violeta: '#8A29E6',
    			coral: '#FF4C4D',
    			rosa: '#FF4CA2',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },

    plugins: [forms, require("tailwindcss-animate")],
};
