import { GenericObject } from './genericObject'


interface TournamentList {
    list: Tournament[]
    data: { [id: Tournament['id']]: Tournament }
}

export class Tournament extends GenericObject {
    location: string
}