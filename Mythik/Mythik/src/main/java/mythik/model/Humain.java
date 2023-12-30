package mythik.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonTypeName;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

@Entity
@DiscriminatorValue("Humain")
@JsonTypeName("humain")
public class Humain extends Compte{

	@OneToMany(mappedBy="compte")
	protected List<Combattant> combattant;

	public Humain() {

		// TODO Auto-generated constructor stub
	}

	public List<Combattant> getCombattant() {
		return combattant;
	}

	public void setCombattant(List<Combattant> combattant) {
		this.combattant = combattant;
	}

	



	
	
	
	 

}
