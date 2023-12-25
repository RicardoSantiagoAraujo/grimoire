package mythik.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonTypeName;

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
@JsonTypeName("joueur")
public abstract class Joueur extends Compte{
	
	
	@OneToMany(mappedBy="joueur")
	protected List<Combattant> combattant;
	
	
	
	public Joueur() {
		
	}


	public Joueur( List<Combattant> combattant) {
		super();
		this.combattant = combattant;
	}


	public List<Combattant> getCombattant() {
		return combattant;
	}

	public void setCombattant(List<Combattant> combattant) {
		this.combattant = combattant;
	}

}
