export interface Dragon {
    id: number,
    name: string,
    description: string,
    powerLevel: number,
    isLegendary: boolean,
    discoveredOn: string,
    imageUrl: string,
    type: string,
    moves: String[],
    habitat: Habitat
}

export interface Habitat {
    id: number,
    name: string,
    climate: string,
    hasCaves: boolean,
}