package mythik.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("IA")
public class IA extends Joueur{

	public IA() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	 

}
