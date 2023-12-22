export class Compte {
    constructor(public id?: number, public email?: string, public login?: string, public password?: string, public typeCompte?: string ) {
    }
}


export class Creature {
    constructor(public id?: number, public nom?: string, public description?: string, public dieu?: boolean, public attaque?: number, public pv?: number,  public image?: string, public mythologie?: string, public typeElement?: string ) {

    }
}

export class Joueur extends Compte {}

export class Humain extends Joueur {}

export class IA extends Joueur {}