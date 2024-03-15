package mythik.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="combattant")
public class Combattant {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_combattant")
	private Integer id;
	private boolean gagnant; 
	
	@JoinColumn(name="compte")
	@ManyToOne
	private Compte compte;
	

	@ManyToOne
	private Creature creature;
	
	@JoinColumn(name="combat")
	@ManyToOne
	private Combat combat; 
	
	public Combattant() {
		// TODO Auto-generated constructor stub
	}
	

	public Combattant(Integer id, boolean gagnant, Compte compte, Creature creature, Combat combat) {
		this.id = id;
		this.gagnant = gagnant;
		this.compte = compte;
		this.creature = creature;
		this.combat = combat;
	}

	public Combattant(boolean gagnant, Compte compte, Creature creature, Combat combat) {
		this.gagnant = gagnant;
		this.compte = compte;
		this.creature = creature;
		this.combat = combat;
	}
	
	

	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public boolean isGagnant() {
		return gagnant;
	}

	public void setGagnant(boolean gagnant) {
		this.gagnant = gagnant;
	}

	

	public Compte getCompte() {
		return compte;
	}


	public void setCompte(Compte compte) {
		this.compte = compte;
	}


	public Creature getCreature() {
		return creature;
	}

	public void setCreature(Creature creature) {
		this.creature = creature;
	}

	public Combat getCombat() {
		return combat;
	}

	public void setCombat(Combat combat) {
		this.combat = combat;
	}
	
}
