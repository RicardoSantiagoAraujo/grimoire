export class Compte {
    constructor(public id?: number, public login?: string, public password?: string, public type?: string , public email?: string, combattant?: Array<Combattant> ) {
    }
}

// export class Admin extends Compte{
//     constructor(id?: number, login?: string, password?: string, email?: string) {
//         super(id, login, password, email);
//     }

// }

// export class Joueur extends Compte {
//     ;
//     constructor(id?: number, login?: string, password?: string, email?: string,  public combattant?: Array<Combattant>) {
//         super(id, login, password, email);
        
//     }

// }

// export class Humain extends Joueur {

//     constructor(id?: number, login?: string, password?: string, email?: string, combattant?: Array<Combattant> ){
//        super(id, login, password, email) 
//     }
// } 

// export class IA extends Joueur {

//     constructor(id?: number, login?: string, password?: string, combattant?: Combattant, email?: string){
//         super(id, login, password, email) 
//      }
// }

export class Creature {
    constructor(public id?: number, public nom?: string, public description?: string, public dieu?: boolean, public attaque?: number, public pv?: number,  public image?: string, public mythologie?: string, public typeElement?: string ) {

    }
}

export class Combattant {
constructor(public id?: number, public gagnant?: boolean, public compte?: Compte, public creature?: Creature, public combat?: Combat ){}

}

export class CombattantResponse {
    }

export class Combat {
    constructor(public id?: number, public dateCombat? : string, public heureCombat?: string, public combattants?: Combattant[]){}
    
    }
   