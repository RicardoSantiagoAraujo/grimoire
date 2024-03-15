package mythik.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonTypeName;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;

@Entity
@DiscriminatorValue("IA")
@JsonTypeName("ia")
public class IA extends Compte{
	
//
//	@OneToMany(mappedBy="compte")
//	protected List<Combattant> combattant;

	public IA() {
	}

//	public List<Combattant> getCombattant() {
//		return combattant;
//	}
//
//	public void setCombattant(List<Combattant> combattant) {
//		this.combattant = combattant;
//	}

	
	
	 

}
