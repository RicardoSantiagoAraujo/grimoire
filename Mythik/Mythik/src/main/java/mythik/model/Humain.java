package mythik.model;

import com.fasterxml.jackson.annotation.JsonTypeName;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("Humain")
@JsonTypeName("humain")
public class Humain extends Joueur{

	

	public Humain() {

		// TODO Auto-generated constructor stub
	}

	



	
	
	
	 

}
