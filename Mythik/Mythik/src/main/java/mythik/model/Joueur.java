package mythik.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity

public abstract class Joueur extends Compte{
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id_joueur")
	protected Integer id;
	
	@OneToMany(mappedBy="joueur")
	protected List<Combattant> combattant;
	
	
	
	public Joueur() {
		
	}


	public Joueur( List<Combattant> combattant) {
		super();
		this.combattant = combattant;
	}

	
	public Joueur(Integer id, List<Combattant> combattant) {
		super();
		this.id = id;
		this.combattant = combattant;
	}

	public List<Combattant> getCombattant() {
		return combattant;
	}

	public void setCombattant(List<Combattant> combattant) {
		this.combattant = combattant;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}
	
	

}
