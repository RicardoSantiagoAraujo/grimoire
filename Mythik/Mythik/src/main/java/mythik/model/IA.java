package mythik.model;

import com.fasterxml.jackson.annotation.JsonTypeName;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("IA")
@JsonTypeName("ia")
public class IA extends Joueur{

	public IA() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	 

}
