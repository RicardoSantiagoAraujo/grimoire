package mythik.model;

import com.fasterxml.jackson.annotation.JsonTypeName;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("Humain")
@JsonTypeName("humain")
public class Humain extends Joueur{

	private String email;

	public Humain() {

		// TODO Auto-generated constructor stub
	}

	
	public Humain(String email) {
		super();
		this.email = email;
	}


	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	} 
	
	
	
	 

}
