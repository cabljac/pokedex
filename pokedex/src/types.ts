
export type pokeprops = { number: number }

export interface Attacks {
    fast: { name: string }[];
    special: { name: string }[]
}

export interface Pokemon {
    name: string
    image: string
    resistant: string[]
    weaknesses: string[]
    attacks: Attacks
}

interface PokeNameProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    name: string
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'poke-name': PokeNameProps
        }
    }
}

